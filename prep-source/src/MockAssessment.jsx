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
import { t, ui, promptFor } from './i18n.js';

export default function MockAssessment({ onExit, lang = 'en' }) {
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
    if (!window.confirm(ui('confirmNewMock', lang))) return;
    setSession(null);
    setDrafts({});
    setRunOutputs({});
    setResults(null);
  };

  // Render
  if (!session) return <MockIntro onStart={handleStart} onExit={onExit} lang={lang} />;
  if (results) {
    return (
      <MockResults
        session={session}
        drafts={drafts}
        results={results}
        onNewMock={handleNewMock}
        onExit={onExit}
        lang={lang}
      />
    );
  }

  const answered = session.questions.filter(q => (drafts[q.id] || '').trim().length > 0).length;
  const timeLow = remaining < 5 * 60 * 1000;

  return (
    <div
      className="flex flex-col h-screen overflow-hidden"
      style={{ background: bg, color: '#f5f5f4', fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
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
            <div className="text-base font-extrabold tracking-tight text-stone-100">{ui('mockTitle', lang)}</div>
            <div className="text-[11px] text-stone-500 uppercase tracking-wider">
              {ui('mockSubtitle', lang)}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg font-bold text-sm"
            style={{
              background: timeLow ? '#7f1d1d22' : surface2,
              color: timeLow ? '#fca5a5' : '#f97316',
              border: timeLow ? '1px solid #7f1d1d55' : `1px solid ${border}`,
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            <Clock className="w-4 h-4" />
            {formatRemaining(remaining)}
          </div>
          <div className="text-xs text-stone-400 font-semibold">
            {answered}/{session.questions.length} {ui('answered', lang)}
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
                {gradingProgress || ui('grading', lang)}
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                {ui('submitAll', lang)}
              </>
            )}
          </button>
          <button
            onClick={() => {
              if (window.confirm(ui('confirmExitMock', lang))) onExit();
            }}
            className="p-2 rounded-lg text-stone-500 hover:text-stone-100"
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
              lang={lang}
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
                  {gradingProgress || ui('grading', lang)}
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  {ui('submitAllAndGrade', lang)}
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function MockIntro({ onStart, onExit, lang = 'en' }) {
  return (
    <div
      className="flex flex-col h-screen overflow-hidden items-center justify-center px-6"
      style={{ background: bg, color: '#f5f5f4', fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
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
            className="text-3xl text-stone-100"
            style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 800 }}
          >
            {ui('mockTitle', lang)}
          </h1>
        </div>

        <div className="space-y-3 text-[15px] text-stone-300 leading-relaxed mb-8">
          <p>
            <strong className="text-stone-100">{ui('mockIntroP1', lang)}</strong>{' '}
            {ui('mockIntroP1b', lang)}
          </p>
          <ul className="text-[14px] text-stone-400 space-y-1 ml-1">
            <li>{ui('mockIntroL1', lang)}</li>
            <li>{ui('mockIntroL2', lang)}</li>
            <li>{ui('mockIntroL3', lang)}</li>
          </ul>
          <p>{ui('mockIntroP2', lang)}</p>
          <p className="text-[13px] text-stone-500">
            {ui('passThreshold', lang, { n: PASS_THRESHOLD })}
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onStart}
            className="flex-1 px-5 py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2"
            style={{ background: accent, color: '#ffffff' }}
          >
            <Play className="w-4 h-4" />
            {ui('startMock', lang)}
          </button>
          <button
            onClick={onExit}
            className="px-5 py-3 rounded-lg text-sm font-semibold"
            style={{ background: 'transparent', color: '#78716c', border: `1px solid ${border}` }}
          >
            {ui('backToPractice', lang)}
          </button>
        </div>
      </div>
    </div>
  );
}

function MockResults({ session, drafts, results, onNewMock, onExit, lang = 'en' }) {
  const { grades, summary, verdict } = results;
  const passed = verdict.verdict === 'would_pass';
  return (
    <div
      className="flex flex-col h-screen overflow-hidden"
      style={{ background: bg, color: '#f5f5f4', fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
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
          <span className="text-base font-extrabold tracking-tight text-stone-100">
            {ui('mockResults', lang)}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onNewMock}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2"
            style={{ background: surface2, color: '#a8a29e', border: `1px solid ${border}` }}
          >
            <RotateCcw className="w-3.5 h-3.5" />
            {ui('newMock', lang)}
          </button>
          <button
            onClick={onExit}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold"
            style={{ background: 'transparent', color: '#78716c', border: `1px solid ${border}` }}
          >
            {ui('backToPractice', lang)}
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
              {passed ? ui('wouldPass', lang) : ui('wouldNotPass', lang)}
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
              <span className="text-lg text-stone-400 font-semibold">· {verdict.score}%</span>
            </div>
            {summary && (
              <p className="text-[15px] text-stone-200 leading-relaxed">{summary}</p>
            )}
          </div>

          {session.questions.map((q, i) => (
            <MockResultCard
              key={q.id}
              index={i + 1}
              topic={q}
              draft={drafts[q.id] || ''}
              grade={grades[i]}
              lang={lang}
            />
          ))}

          <div className="pb-12 flex gap-3">
            <button
              onClick={onNewMock}
              className="flex-1 px-5 py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2"
              style={{ background: accent, color: '#ffffff' }}
            >
              <RotateCcw className="w-4 h-4" />
              {ui('startNewMock', lang)}
            </button>
            <button
              onClick={onExit}
              className="px-5 py-3 rounded-lg text-sm font-semibold"
              style={{ background: 'transparent', color: '#78716c', border: `1px solid ${border}` }}
            >
              {ui('backToPractice', lang)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function MockResultCard({ index, topic, draft, grade, lang = 'en' }) {
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
        <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500">
          Q{index} · {topic.kind}
        </span>
        <span className="text-[13px] font-semibold text-stone-200 truncate">{t(topic.title, lang)}</span>
        <span
          className="ml-auto px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider"
          style={{
            background: passed ? '#10b9811a' : '#f59e0b1a',
            color: passed ? '#34d399' : '#fbbf24',
            border: passed ? '1px solid #10b98155' : '1px solid #f59e0b55',
          }}
        >
          {passed ? ui('passed', lang).toLowerCase() : ui('needsWork', lang).toLowerCase()}
        </span>
      </div>
      <div className="p-5 space-y-4">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-1">
            {ui('promptLabel', lang)}
          </div>
          <p className="text-[13.5px] text-stone-300 leading-relaxed">{promptFor(topic, lang)}</p>
        </div>
        <div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-1">
            {ui('yourAnswer', lang)}
          </div>
          <pre
            className="text-[12.5px] leading-relaxed whitespace-pre-wrap break-words p-3 rounded-md"
            style={{
              background: bg,
              border: `1px solid ${border}`,
              fontFamily: "'JetBrains Mono', monospace",
              color: '#f5f5f4',
            }}
          >
            {draft.trim() || ui('noAnswer', lang)}
          </pre>
        </div>
        <div>
          <div
            className="text-[10px] font-bold uppercase tracking-widest mb-1"
            style={{ color: passed ? '#34d399' : '#fbbf24' }}
          >
            {ui('feedback', lang)}
          </div>
          <p className="text-[13.5px] text-stone-200 leading-relaxed">
            {grade?.feedback || '(no feedback)'}
          </p>
        </div>
      </div>
    </div>
  );
}

function MockQuestion({ index, total, topic, draft, onDraft, onRun, isRunning, runStage, runOutput, disabled, lang = 'en' }) {
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
        <span className="text-[13px] font-semibold text-stone-200 truncate">{t(topic.title, lang)}</span>
        <span
          className="ml-auto text-[10px] font-bold uppercase tracking-widest"
          style={{ color: topic.kind === 'concept' ? '#78716c' : '#f97316' }}
        >
          {topic.kind}
        </span>
      </div>

      <div className="p-5 space-y-3">
        <p className="text-[14.5px] text-stone-200 leading-relaxed">{promptFor(topic, lang)}</p>

        {topic.kind === 'python' && (
          <div
            className="px-3 py-2 rounded-md text-[11px] text-stone-400 flex items-center gap-2"
            style={{ background: surface2, border: `1px solid ${border}` }}
          >
            <Terminal className="w-3.5 h-3.5" style={{ color: accentDim }} />
            <span>
              Sandbox: <code style={{ color: '#f97316' }}>orders</code>,{' '}
              <code style={{ color: '#f97316' }}>customers</code>,{' '}
              <code style={{ color: '#f97316' }}>pd</code>
            </span>
          </div>
        )}
        {topic.kind === 'sql' && (
          <div
            className="px-3 py-2 rounded-md text-[11px] text-stone-400 flex items-center gap-2"
            style={{ background: surface2, border: `1px solid ${border}` }}
          >
            <Database className="w-3.5 h-3.5" style={{ color: accentDim }} />
            <span>
              Tables: <code style={{ color: '#f97316' }}>orders</code>,{' '}
              <code style={{ color: '#f97316' }}>customers</code>,{' '}
              <code style={{ color: '#f97316' }}>bookings</code>
            </span>
          </div>
        )}

        <textarea
          className="w-full h-36 p-4 rounded-lg outline-none resize-y"
          placeholder={
            topic.kind === 'concept' ? ui('placeholderConcept', lang) :
            topic.kind === 'sql' ? ui('placeholderSql', lang) :
            ui('placeholderPython', lang)
          }
          value={draft}
          onChange={e => onDraft(e.target.value)}
          disabled={disabled}
          style={{
            background: bg,
            border: `1px solid ${border}`,
            color: '#f5f5f4',
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
                color: '#f97316',
                border: `1px solid #f9731655`,
              }}
            >
              {isRunning ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  {runStage || ui('running', lang)}
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  {ui('run', lang)}
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
        <div className="text-[11px] text-stone-500 mt-1">(Query ran, no rows.)</div>
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
                  style={{ color: '#f97316', borderBottom: `1px solid ${border}` }}
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
                  <td key={ci} className="px-3 py-1" style={{ color: cell === null ? '#a8a29e' : '#f5f5f4' }}>
                    {cell === null ? 'NULL' : String(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {rs.values.length > 15 && (
          <div className="px-3 py-1 text-[11px] text-stone-500">
            …{rs.values.length - 15} more rows
          </div>
        )}
      </div>
    );
  }
  // python
  const blocks = [];
  if (output.stdout) blocks.push(['stdout', output.stdout, '#f5f5f4']);
  if (output.result) blocks.push(['result', output.result, '#f97316']);
  if (output.stderr) blocks.push(['stderr', output.stderr, '#fb923c']);
  if (output.error)  blocks.push(['traceback', output.error, '#fca5a5']);
  if (blocks.length === 0) {
    return <div className="text-[11px] text-stone-500 mt-1">(Ran. No output.)</div>;
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
            style={{ fontFamily: "'JetBrains Mono', monospace", color: '#f5f5f4', margin: 0 }}
          >
            {body}
          </pre>
        </div>
      ))}
    </div>
  );
}
