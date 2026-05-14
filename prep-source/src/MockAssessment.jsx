// Mock Assessment — timed 45-min exam mode.
// Built by danny_pachara_DS · @pacharadon

import React, { useState, useEffect } from 'react';
import {
  Play, Loader2, Send, Clock, Flame, X, Award,
  Terminal, Database, RotateCcw,
} from 'lucide-react';

import { COURSE_DATA } from './courseData.js';
import { gradeSubmission, summarizeMockResults } from './api/grader.js';
import { runPython } from './sandbox/pyodide.js';
import { runSql } from './sandbox/sqljs.js';
import {
  pickMockQuestions, verdictFromGrades, formatRemaining, MOCK_DURATION_MS, PASS_THRESHOLD,
} from './mock.js';
import { accent, accentDim, bg, surface, surface2, border } from './theme.js';

export default function MockAssessment({ onExit }) {
  const [session, setSession] = useState(null); // { questions, startedAt }
  const [drafts, setDrafts] = useState({});
  const [runOutputs, setRunOutputs] = useState({});
  const [running, setRunning] = useState({});
  const [runStage, setRunStage] = useState({});
  const [now, setNow] = useState(Date.now());
  const [isGrading, setIsGrading] = useState(false);
  const [gradingProgress, setGradingProgress] = useState('');
  const [results, setResults] = useState(null);

  // tick the timer
  useEffect(() => {
    if (!session || results) return;
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, [session, results]);

  const remaining = session ? MOCK_DURATION_MS - (now - session.startedAt) : MOCK_DURATION_MS;

  // auto-submit on time up
  useEffect(() => {
    if (!session || results || isGrading) return;
    if (remaining <= 0) handleSubmitAll();
  }, [remaining, session, results, isGrading]);

  const handleStart = () => {
    setSession({
      questions: pickMockQuestions(COURSE_DATA),
      startedAt: Date.now(),
    });
    setDrafts({});
    setRunOutputs({});
    setResults(null);
    setNow(Date.now());
  };

  const handleRun = async (topic) => {
    const code = drafts[topic.id] || '';
    if (!code.trim()) return;
    setRunning(r => ({ ...r, [topic.id]: true }));
    setRunStage(s => ({ ...s, [topic.id]: topic.kind === 'sql' ? 'Booting SQLite…' : 'Booting Python…' }));
    try {
      const output =
        topic.kind === 'sql'
          ? await runSql(code, stage => setRunStage(s => ({ ...s, [topic.id]: stage })))
          : await runPython(code, stage => setRunStage(s => ({ ...s, [topic.id]: stage })));
      setRunOutputs(o => ({ ...o, [topic.id]: output }));
    } catch (err) {
      console.error(err);
      setRunOutputs(o => ({
        ...o,
        [topic.id]:
          topic.kind === 'sql'
            ? { results: [], error: `Sandbox error: ${err.message || err}` }
            : { stdout: '', stderr: '', result: '', error: `Sandbox error: ${err.message || err}` },
      }));
    } finally {
      setRunning(r => ({ ...r, [topic.id]: false }));
      setRunStage(s => ({ ...s, [topic.id]: '' }));
    }
  };

  const handleSubmitAll = async () => {
    if (!session || results || isGrading) return;
    setIsGrading(true);
    setGradingProgress(`Grading 0/${session.questions.length}…`);
    try {
      const grades = [];
      // Sequential grading so we can show progress; could parallelize but rate limits + UX both fine.
      for (let i = 0; i < session.questions.length; i++) {
        const q = session.questions[i];
        setGradingProgress(`Grading ${i + 1}/${session.questions.length}…`);
        try {
          const g = await gradeSubmission({
            topic: q,
            submission: drafts[q.id] || '(no answer)',
            runOutput: q.kind === 'concept' ? undefined : runOutputs[q.id],
          });
          grades.push(g);
        } catch (err) {
          grades.push({ status: 'needs_work', feedback: `Grader error: ${err.message || err}` });
        }
      }
      setGradingProgress('Generating overall takeaway…');
      let summary = null;
      try {
        summary = await summarizeMockResults({ questions: session.questions, grades });
      } catch (err) {
        summary = '(Overall takeaway unavailable — see per-question feedback below.)';
      }
      const verdict = verdictFromGrades(grades);
      setResults({ grades, summary, verdict, finishedAt: Date.now() });
    } finally {
      setIsGrading(false);
      setGradingProgress('');
    }
  };

  const handleNewMock = () => {
    if (!window.confirm('Start a fresh mock? Your current results will be cleared.')) return;
    setSession(null);
    setDrafts({});
    setRunOutputs({});
    setResults(null);
  };

  // Render
  if (!session) return <MockIntro onStart={handleStart} onExit={onExit} />;
  if (results) {
    return (
      <MockResults
        session={session}
        drafts={drafts}
        results={results}
        onNewMock={handleNewMock}
        onExit={onExit}
      />
    );
  }

  const answered = session.questions.filter(q => (drafts[q.id] || '').trim().length > 0).length;
  const timeLow = remaining < 5 * 60 * 1000;

  return (
    <div
      className="flex flex-col h-screen overflow-hidden"
      style={{ background: bg, color: '#e2e8f0', fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
    >
      <header
        className="px-6 py-3.5 flex items-center justify-between flex-shrink-0"
        style={{ background: surface, borderBottom: `1px solid ${border}` }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: `${accent}22`, border: `1px solid ${accent}55` }}
          >
            <Flame className="w-4 h-4" style={{ color: accent }} />
          </div>
          <div>
            <div className="text-base font-extrabold tracking-tight text-slate-100">Mock Assessment</div>
            <div className="text-[11px] text-slate-500 uppercase tracking-wider">
              45-min · 6 questions · no hints
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg font-bold text-sm"
            style={{
              background: timeLow ? '#7f1d1d22' : surface2,
              color: timeLow ? '#fca5a5' : '#3b82f6',
              border: timeLow ? '1px solid #7f1d1d55' : `1px solid ${border}`,
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            <Clock className="w-4 h-4" />
            {formatRemaining(remaining)}
          </div>
          <div className="text-xs text-slate-400 font-semibold">
            {answered}/{session.questions.length} answered
          </div>
          <button
            onClick={handleSubmitAll}
            disabled={isGrading}
            className="px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 disabled:opacity-60"
            style={{ background: accent, color: '#ffffff' }}
          >
            {isGrading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                {gradingProgress || 'Grading…'}
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Submit all
              </>
            )}
          </button>
          <button
            onClick={() => {
              if (window.confirm('Abandon this mock and return to Practice mode?')) onExit();
            }}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-100"
            style={{ border: `1px solid ${border}` }}
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-6 md:px-10 py-8 md:py-12 space-y-8">
          {session.questions.map((q, i) => (
            <MockQuestion
              key={q.id}
              index={i + 1}
              total={session.questions.length}
              topic={q}
              draft={drafts[q.id] || ''}
              onDraft={text => setDrafts(d => ({ ...d, [q.id]: text }))}
              onRun={() => handleRun(q)}
              isRunning={!!running[q.id]}
              runStage={runStage[q.id] || ''}
              runOutput={runOutputs[q.id]}
              disabled={isGrading}
            />
          ))}

          <div className="pb-12">
            <button
              onClick={handleSubmitAll}
              disabled={isGrading}
              className="w-full px-5 py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 disabled:opacity-60"
              style={{ background: accent, color: '#ffffff' }}
            >
              {isGrading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  {gradingProgress || 'Grading…'}
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Submit all & grade
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function MockIntro({ onStart, onExit }) {
  return (
    <div
      className="flex flex-col h-screen overflow-hidden items-center justify-center px-6"
      style={{ background: bg, color: '#e2e8f0', fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
    >
      <div
        className="max-w-xl w-full rounded-2xl p-8 md:p-10"
        style={{ background: surface, border: `1px solid ${border}` }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: `${accent}22`, border: `1px solid ${accent}55` }}
          >
            <Flame className="w-5 h-5" style={{ color: accent }} />
          </div>
          <h1
            className="text-3xl text-slate-100"
            style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 800 }}
          >
            Mock Assessment
          </h1>
        </div>

        <div className="space-y-3 text-[15px] text-slate-300 leading-relaxed mb-8">
          <p>
            <strong className="text-slate-100">45 minutes. 6 questions.</strong> Roughly the same
            shape and pressure as an Alooba timed screen.
          </p>
          <ul className="text-[14px] text-slate-400 space-y-1 ml-1">
            <li>· 1 pandas exercise (Module 4)</li>
            <li>· 3 SQL exercises (Module 5)</li>
            <li>· 2 business / stats questions (Module 6)</li>
          </ul>
          <p>
            <strong className="text-slate-100">Run is enabled, hints are off.</strong> Submit
            when you're done (or when the timer hits zero) and the grader scores all 6 at once
            with an honest pass/fail estimate.
          </p>
          <p className="text-[13px] text-slate-500">
            Pass threshold: {PASS_THRESHOLD}/6. Questions are sampled freshly each session.
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onStart}
            className="flex-1 px-5 py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2"
            style={{ background: accent, color: '#ffffff' }}
          >
            <Play className="w-4 h-4" />
            Start mock
          </button>
          <button
            onClick={onExit}
            className="px-5 py-3 rounded-lg text-sm font-semibold"
            style={{ background: 'transparent', color: '#64748b', border: `1px solid ${border}` }}
          >
            Back to Practice
          </button>
        </div>
      </div>
    </div>
  );
}

function MockResults({ session, drafts, results, onNewMock, onExit }) {
  const { grades, summary, verdict } = results;
  const passed = verdict.verdict === 'would_pass';
  return (
    <div
      className="flex flex-col h-screen overflow-hidden"
      style={{ background: bg, color: '#e2e8f0', fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
    >
      <header
        className="px-6 py-3.5 flex items-center justify-between flex-shrink-0"
        style={{ background: surface, borderBottom: `1px solid ${border}` }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: `${accent}22`, border: `1px solid ${accent}55` }}
          >
            <Award className="w-4 h-4" style={{ color: accent }} />
          </div>
          <span className="text-base font-extrabold tracking-tight text-slate-100">
            Mock results
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onNewMock}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2"
            style={{ background: surface2, color: '#94a3b8', border: `1px solid ${border}` }}
          >
            <RotateCcw className="w-3.5 h-3.5" />
            New mock
          </button>
          <button
            onClick={onExit}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold"
            style={{ background: 'transparent', color: '#64748b', border: `1px solid ${border}` }}
          >
            Back to Practice
          </button>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-6 md:px-10 py-8 md:py-12 space-y-6">
          <div
            className="rounded-2xl p-6 md:p-8"
            style={{
              background: passed ? '#10b9811a' : '#f59e0b1a',
              border: passed ? '1px solid #10b98155' : '1px solid #f59e0b55',
            }}
          >
            <div
              className="text-[11px] font-bold uppercase tracking-widest mb-2"
              style={{ color: passed ? '#34d399' : '#fbbf24' }}
            >
              {passed ? 'Would likely pass' : 'Would likely not pass'}
            </div>
            <div className="flex items-baseline gap-3 mb-4">
              <span
                className="text-5xl"
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontWeight: 800,
                  color: passed ? '#34d399' : '#fbbf24',
                }}
              >
                {verdict.passed}/{verdict.total}
              </span>
              <span className="text-lg text-slate-400 font-semibold">· {verdict.score}%</span>
            </div>
            {summary && (
              <p className="text-[15px] text-slate-200 leading-relaxed">{summary}</p>
            )}
          </div>

          {session.questions.map((q, i) => (
            <MockResultCard
              key={q.id}
              index={i + 1}
              topic={q}
              draft={drafts[q.id] || ''}
              grade={grades[i]}
            />
          ))}

          <div className="pb-12 flex gap-3">
            <button
              onClick={onNewMock}
              className="flex-1 px-5 py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2"
              style={{ background: accent, color: '#ffffff' }}
            >
              <RotateCcw className="w-4 h-4" />
              Start a new mock
            </button>
            <button
              onClick={onExit}
              className="px-5 py-3 rounded-lg text-sm font-semibold"
              style={{ background: 'transparent', color: '#64748b', border: `1px solid ${border}` }}
            >
              Back to Practice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function MockResultCard({ index, topic, draft, grade }) {
  const passed = grade?.status === 'passed';
  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{ background: surface, border: `1px solid ${border}` }}
    >
      <div
        className="px-5 py-3 flex items-center gap-3"
        style={{ borderBottom: `1px solid ${border}`, background: surface2 }}
      >
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
          Q{index} · {topic.kind}
        </span>
        <span className="text-[13px] font-semibold text-slate-200 truncate">{topic.title}</span>
        <span
          className="ml-auto px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider"
          style={{
            background: passed ? '#10b9811a' : '#f59e0b1a',
            color: passed ? '#34d399' : '#fbbf24',
            border: passed ? '1px solid #10b98155' : '1px solid #f59e0b55',
          }}
        >
          {passed ? 'passed' : 'needs work'}
        </span>
      </div>
      <div className="p-5 space-y-4">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">
            Prompt
          </div>
          <p className="text-[13.5px] text-slate-300 leading-relaxed">{topic.exercisePrompt}</p>
        </div>
        <div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">
            Your answer
          </div>
          <pre
            className="text-[12.5px] leading-relaxed whitespace-pre-wrap break-words p-3 rounded-md"
            style={{
              background: bg,
              border: `1px solid ${border}`,
              fontFamily: "'JetBrains Mono', monospace",
              color: '#e2e8f0',
            }}
          >
            {draft.trim() || '(no answer submitted)'}
          </pre>
        </div>
        <div>
          <div
            className="text-[10px] font-bold uppercase tracking-widest mb-1"
            style={{ color: passed ? '#34d399' : '#fbbf24' }}
          >
            Feedback
          </div>
          <p className="text-[13.5px] text-slate-200 leading-relaxed">
            {grade?.feedback || '(no feedback)'}
          </p>
        </div>
      </div>
    </div>
  );
}

function MockQuestion({ index, total, topic, draft, onDraft, onRun, isRunning, runStage, runOutput, disabled }) {
  const showRun = topic.kind === 'python' || topic.kind === 'sql';
  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{ background: surface, border: `1px solid ${border}` }}
    >
      <div
        className="px-5 py-3 flex items-center gap-3"
        style={{ borderBottom: `1px solid ${border}`, background: surface2 }}
      >
        <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: accent }}>
          Q{index}/{total}
        </span>
        <span className="text-[13px] font-semibold text-slate-200 truncate">{topic.title}</span>
        <span
          className="ml-auto text-[10px] font-bold uppercase tracking-widest"
          style={{ color: topic.kind === 'concept' ? '#64748b' : '#3b82f6' }}
        >
          {topic.kind}
        </span>
      </div>

      <div className="p-5 space-y-3">
        <p className="text-[14.5px] text-slate-200 leading-relaxed">{topic.exercisePrompt}</p>

        {topic.kind === 'python' && (
          <div
            className="px-3 py-2 rounded-md text-[11px] text-slate-400 flex items-center gap-2"
            style={{ background: surface2, border: `1px solid ${border}` }}
          >
            <Terminal className="w-3.5 h-3.5" style={{ color: accentDim }} />
            <span>
              Sandbox: <code style={{ color: '#3b82f6' }}>orders</code>,{' '}
              <code style={{ color: '#3b82f6' }}>customers</code>,{' '}
              <code style={{ color: '#3b82f6' }}>pd</code>
            </span>
          </div>
        )}
        {topic.kind === 'sql' && (
          <div
            className="px-3 py-2 rounded-md text-[11px] text-slate-400 flex items-center gap-2"
            style={{ background: surface2, border: `1px solid ${border}` }}
          >
            <Database className="w-3.5 h-3.5" style={{ color: accentDim }} />
            <span>
              Tables: <code style={{ color: '#3b82f6' }}>orders</code>,{' '}
              <code style={{ color: '#3b82f6' }}>customers</code>,{' '}
              <code style={{ color: '#3b82f6' }}>bookings</code>
            </span>
          </div>
        )}

        <textarea
          className="w-full h-36 p-4 rounded-lg outline-none resize-y"
          placeholder={
            topic.kind === 'concept' ? 'Plain English answer…' : 'Your code here.'
          }
          value={draft}
          onChange={e => onDraft(e.target.value)}
          disabled={disabled}
          style={{
            background: bg,
            border: `1px solid ${border}`,
            color: '#e2e8f0',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '13.5px',
            lineHeight: 1.6,
          }}
        />

        {showRun && (
          <div>
            <button
              onClick={onRun}
              disabled={isRunning || disabled || !draft.trim()}
              className="px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 disabled:opacity-60"
              style={{
                background: surface2,
                color: '#3b82f6',
                border: `1px solid #3b82f655`,
              }}
            >
              {isRunning ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  {runStage || 'Running…'}
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  Run
                </>
              )}
            </button>
          </div>
        )}

        {runOutput && <MockRunOutput output={runOutput} kind={topic.kind} />}
      </div>
    </div>
  );
}

function MockRunOutput({ output, kind }) {
  if (kind === 'sql') {
    if (output.error) {
      return (
        <pre
          className="mt-2 p-3 rounded-md text-[12px] whitespace-pre-wrap"
          style={{
            background: bg,
            border: '1px solid #7f1d1d55',
            color: '#fca5a5',
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          {output.error}
        </pre>
      );
    }
    const rs = (output.results || [])[0];
    if (!rs) {
      return (
        <div className="text-[11px] text-slate-500 mt-1">(Query ran, no rows.)</div>
      );
    }
    return (
      <div
        className="mt-2 rounded-md overflow-x-auto"
        style={{ background: bg, border: `1px solid ${border}` }}
      >
        <table
          className="w-full text-[12px]"
          style={{ fontFamily: "'JetBrains Mono', monospace", borderCollapse: 'collapse' }}
        >
          <thead>
            <tr style={{ background: surface2 }}>
              {rs.columns.map(c => (
                <th
                  key={c}
                  className="text-left px-3 py-1 font-bold"
                  style={{ color: '#3b82f6', borderBottom: `1px solid ${border}` }}
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rs.values.slice(0, 15).map((row, ri) => (
              <tr key={ri} style={{ borderBottom: `1px solid ${border}` }}>
                {row.map((cell, ci) => (
                  <td key={ci} className="px-3 py-1" style={{ color: cell === null ? '#94a3b8' : '#e2e8f0' }}>
                    {cell === null ? 'NULL' : String(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {rs.values.length > 15 && (
          <div className="px-3 py-1 text-[11px] text-slate-500">
            …{rs.values.length - 15} more rows
          </div>
        )}
      </div>
    );
  }
  // python
  const blocks = [];
  if (output.stdout) blocks.push(['stdout', output.stdout, '#e2e8f0']);
  if (output.result) blocks.push(['result', output.result, '#3b82f6']);
  if (output.stderr) blocks.push(['stderr', output.stderr, '#fb923c']);
  if (output.error)  blocks.push(['traceback', output.error, '#fca5a5']);
  if (blocks.length === 0) {
    return <div className="text-[11px] text-slate-500 mt-1">(Ran. No output.)</div>;
  }
  return (
    <div
      className="mt-2 p-3 rounded-md space-y-2"
      style={{ background: bg, border: `1px solid ${border}` }}
    >
      {blocks.map(([label, body, color]) => (
        <div key={label}>
          <div className="text-[10px] font-bold uppercase tracking-widest" style={{ color }}>
            {label}
          </div>
          <pre
            className="text-[12px] leading-relaxed whitespace-pre-wrap break-words mt-1"
            style={{ fontFamily: "'JetBrains Mono', monospace", color: '#e2e8f0', margin: 0 }}
          >
            {body}
          </pre>
        </div>
      ))}
    </div>
  );
}
