// Data Analyst Prep — main course platform component.
// Built by danny_pachara_DS · @pacharadon

import React, { useState, useEffect, useRef } from 'react';
import {
  CheckCircle, Circle, Menu, X, ChevronRight,
  ChevronLeft, Send, AlertCircle, Award, Target, Loader2,
  Lightbulb, RotateCcw, Sparkles, Code2, Database, BarChart3,
  Layers, GitBranch, Briefcase, Flame, Play, Terminal, Key,
} from 'lucide-react';

import { COURSE_DATA } from './courseData.js';
import { gradeSubmission, fetchHint, getApiKey, setApiKey, clearApiKey } from './api/grader.js';
import { runPython } from './sandbox/pyodide.js';
import { runSql } from './sandbox/sqljs.js';
import MockAssessment from './MockAssessment.jsx';
import { accent, accentDim, bg, surface, surface2, border } from './theme.js';

const ICON_MAP = {
  Code2, Database, BarChart3, Layers, GitBranch, Briefcase,
};

export default function CoursePlatform() {
  const [mode, setMode] = useState('practice'); // 'practice' | 'mock'
  const [activeIds, setActiveIds] = useState({
    modId: COURSE_DATA[0].id,
    topId: COURSE_DATA[0].topics[0].id,
  });
  const [progress, setProgress] = useState({});
  const [drafts, setDrafts] = useState({});
  const [runOutputs, setRunOutputs] = useState({}); // per-topic last run result
  const [hint, setHint] = useState('');
  const [isGrading, setIsGrading] = useState(false);
  const [isHinting, setIsHinting] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [runStage, setRunStage] = useState(''); // "Booting Python…" etc
  const [graderError, setGraderError] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showKeyPrompt, setShowKeyPrompt] = useState(() => !getApiKey());
  const contentScrollRef = useRef(null);

  useEffect(() => {
    const id = 'course-platform-fonts';
    if (document.getElementById(id)) return;
    const link = document.createElement('link');
    link.id = id;
    link.rel = 'stylesheet';
    link.href =
      'https://fonts.googleapis.com/css2?family=Fraunces:wght@400;600;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap';
    document.head.appendChild(link);
  }, []);

  // Reset per-topic transient UI (hint/error/runStage) and scroll when the
  // active topic changes. Hoisted above the mock early-return so the hook
  // order is stable across mode toggles (Rules of Hooks).
  useEffect(() => {
    setHint('');
    setGraderError('');
    setRunStage('');
    if (contentScrollRef.current) contentScrollRef.current.scrollTop = 0;
  }, [activeIds.topId]);

  if (mode === 'mock') {
    return <MockAssessment onExit={() => setMode('practice')} />;
  }

  const activeModule = COURSE_DATA.find(m => m.id === activeIds.modId);
  const activeTopic = activeModule.topics.find(t => t.id === activeIds.topId);
  const topicProgress = progress[activeTopic.id];
  const currentDraft = drafts[activeTopic.id] ?? topicProgress?.code ?? '';
  const currentRunOutput = runOutputs[activeTopic.id];
  const kind = activeTopic.kind || 'concept';

  const totalTopics = COURSE_DATA.reduce((acc, m) => acc + m.topics.length, 0);
  const completedTopics = Object.values(progress).filter(p => p.status === 'passed').length;
  const progressPercent = Math.round((completedTopics / totalTopics) * 100) || 0;

  const handleTopicSelect = (modId, topId) => {
    setActiveIds({ modId, topId });
    setIsSidebarOpen(false);
  };

  const getNeighbors = () => {
    const modIndex = COURSE_DATA.findIndex(m => m.id === activeIds.modId);
    const topIndex = activeModule.topics.findIndex(t => t.id === activeIds.topId);
    let prev = null, next = null;
    if (topIndex > 0) prev = { modId: activeIds.modId, topId: activeModule.topics[topIndex - 1].id };
    else if (modIndex > 0) {
      const pm = COURSE_DATA[modIndex - 1];
      prev = { modId: pm.id, topId: pm.topics[pm.topics.length - 1].id };
    }
    if (topIndex < activeModule.topics.length - 1) next = { modId: activeIds.modId, topId: activeModule.topics[topIndex + 1].id };
    else if (modIndex < COURSE_DATA.length - 1) {
      const nm = COURSE_DATA[modIndex + 1];
      next = { modId: nm.id, topId: nm.topics[0].id };
    }
    return { prev, next };
  };

  const { prev, next } = getNeighbors();

  const handleRun = async () => {
    if (!currentDraft.trim()) {
      setGraderError('Write something first — even a partial answer.');
      return;
    }
    setIsRunning(true);
    setGraderError('');
    setRunStage(kind === 'sql' ? 'Booting SQLite…' : 'Booting Python…');
    try {
      const output =
        kind === 'sql'
          ? await runSql(currentDraft, stage => setRunStage(stage))
          : await runPython(currentDraft, stage => setRunStage(stage));
      setRunOutputs(prev => ({ ...prev, [activeTopic.id]: output }));
    } catch (err) {
      console.error(err);
      setRunOutputs(prev => ({
        ...prev,
        [activeTopic.id]:
          kind === 'sql'
            ? { results: [], error: `Sandbox error: ${err.message || err}` }
            : {
                stdout: '', stderr: '', result: '',
                error: `Sandbox error: ${err.message || err}`,
              },
      }));
    } finally {
      setIsRunning(false);
      setRunStage('');
    }
  };

  const handleSubmit = async () => {
    if (!currentDraft.trim()) {
      setGraderError('Write something first — even a partial answer.');
      return;
    }
    setIsGrading(true);
    setGraderError('');
    setHint('');
    try {
      const result = await gradeSubmission({
        topic: activeTopic,
        submission: currentDraft,
        runOutput: kind === 'concept' ? undefined : currentRunOutput,
      });
      setProgress(prev => ({
        ...prev,
        [activeTopic.id]: { code: currentDraft, status: result.status, feedback: result.feedback },
      }));
    } catch (err) {
      console.error(err);
      setGraderError(err.message || 'Grader unavailable right now. Try again in a moment.');
    } finally {
      setIsGrading(false);
    }
  };

  const handleHint = async () => {
    setIsHinting(true);
    setHint('');
    try {
      const text = await fetchHint({ topic: activeTopic });
      setHint(text);
    } catch (err) {
      setHint('Hint unavailable right now.');
    } finally {
      setIsHinting(false);
    }
  };

  const handleReset = () => {
    if (window.confirm('Clear all progress and drafts? This cannot be undone.')) {
      setProgress({});
      setDrafts({});
      setRunOutputs({});
      setHint('');
      setGraderError('');
    }
  };

  return (
    <div
      className="flex h-screen overflow-hidden"
      style={{
        background: bg,
        color: '#e2e8f0',
        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
      }}
    >
      {showKeyPrompt && (
        <KeyPrompt
          onSave={(k) => { setApiKey(k); setShowKeyPrompt(false); }}
          onClose={() => setShowKeyPrompt(false)}
          onClear={() => { clearApiKey(); setShowKeyPrompt(false); }}
          hasExisting={!!getApiKey()}
        />
      )}

      <div
        className={`fixed inset-0 bg-black/70 z-40 transition-opacity duration-300 md:hidden ${
          isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsSidebarOpen(false)}
      />

      <aside
        className={`fixed inset-y-0 left-0 w-80 z-50 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 overflow-y-auto ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ background: surface, borderRight: `1px solid ${border}` }}
      >
        <div className="p-6" style={{ borderBottom: `1px solid ${border}` }}>
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: `${accent}22`, border: `1px solid ${accent}55` }}
              >
                <Flame className="w-4 h-4" style={{ color: accent }} />
              </div>
              <span className="text-base font-extrabold tracking-tight text-slate-100">
                Data Analyst Prep
              </span>
            </div>
            <button
              className="md:hidden text-slate-500 hover:text-slate-100"
              onClick={() => setIsSidebarOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="text-[11px] font-semibold text-slate-500 tracking-wider uppercase mt-3">
            Targets · Shopee · Lazada · Agoda / Alooba
          </div>
          <div className="text-[10px] text-slate-500 mt-1.5">
            built by{' '}
            <a
              href="https://github.com/pacharadon"
              target="_blank"
              rel="noreferrer"
              style={{ color: accentDim, textDecoration: 'none' }}
            >
              danny_pachara_DS
            </a>
          </div>

          <div className="mt-4 flex p-0.5 rounded-lg" style={{ background: surface2, border: `1px solid ${border}` }}>
            <button
              onClick={() => setMode('practice')}
              className="flex-1 px-3 py-1.5 rounded-md text-xs font-bold transition-colors"
              style={
                mode === 'practice'
                  ? { background: accent, color: '#ffffff' }
                  : { background: 'transparent', color: '#64748b' }
              }
            >
              Practice
            </button>
            <button
              onClick={() => setMode('mock')}
              className="flex-1 px-3 py-1.5 rounded-md text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
              style={
                mode === 'mock'
                  ? { background: accent, color: '#ffffff' }
                  : { background: 'transparent', color: '#64748b' }
              }
            >
              Mock · 45min
            </button>
          </div>

          <div className="mt-5">
            <div className="flex justify-between items-baseline text-xs mb-2">
              <span className="text-slate-400 font-medium">Course progress</span>
              <span className="font-bold" style={{ color: accent }}>
                {completedTopics}/{totalTopics} · {progressPercent}%
              </span>
            </div>
            <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: surface2 }}>
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%`, background: accent }}
              />
            </div>
          </div>
        </div>

        <nav className="p-4">
          {COURSE_DATA.map((module, mIdx) => {
            const ModIcon = ICON_MAP[module.icon] || Circle;
            const moduleCompletedCount = module.topics.filter(
              t => progress[t.id]?.status === 'passed',
            ).length;
            return (
              <div key={module.id} className="mb-5">
                <div className="flex items-center gap-2 px-2 mb-2">
                  <ModIcon className="w-3.5 h-3.5 text-slate-400" />
                  <h2 className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    Part {mIdx + 1} · {module.title}
                  </h2>
                  <span className="text-[10px] text-slate-500 ml-auto">
                    {moduleCompletedCount}/{module.topics.length}
                  </span>
                </div>
                <div className="space-y-0.5">
                  {module.topics.map(topic => {
                    const isActive = activeIds.topId === topic.id;
                    const status = progress[topic.id]?.status;
                    return (
                      <button
                        key={topic.id}
                        onClick={() => handleTopicSelect(module.id, topic.id)}
                        className="w-full text-left px-3 py-2 rounded-md flex items-center gap-3 transition-colors"
                        style={
                          isActive
                            ? { background: `${accent}1a`, color: accent, border: `1px solid ${accent}44` }
                            : { background: 'transparent', color: '#64748b', border: '1px solid transparent' }
                        }
                        onMouseEnter={e => {
                          if (!isActive) e.currentTarget.style.background = surface2;
                        }}
                        onMouseLeave={e => {
                          if (!isActive) e.currentTarget.style.background = 'transparent';
                        }}
                      >
                        {status === 'passed' ? (
                          <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#10b981' }} />
                        ) : status === 'needs_work' ? (
                          <AlertCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#f59e0b' }} />
                        ) : (
                          <Circle
                            className="w-4 h-4 flex-shrink-0"
                            style={{ color: isActive ? accentDim : '#404040' }}
                          />
                        )}
                        <span className="text-sm font-medium truncate">
                          {topic.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}

          <button
            onClick={() => setShowKeyPrompt(true)}
            className="w-full mt-4 px-3 py-2 rounded-md flex items-center gap-2 text-xs text-slate-500 hover:text-slate-200 transition-colors"
            style={{ background: surface2, border: `1px solid ${border}` }}
          >
            <Key className="w-3.5 h-3.5" />
            {getApiKey() ? 'Change API key' : 'Set API key'}
          </button>

          <button
            onClick={handleReset}
            className="w-full mt-2 px-3 py-2 rounded-md flex items-center gap-2 text-xs text-slate-500 hover:text-slate-200 transition-colors"
            style={{ background: surface2, border: `1px solid ${border}` }}
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset progress
          </button>
        </nav>
      </aside>

      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <header
          className="px-6 py-3.5 flex items-center justify-between flex-shrink-0"
          style={{ background: surface, borderBottom: `1px solid ${border}` }}
        >
          <div className="flex items-center gap-3">
            <button
              className="md:hidden text-slate-400 hover:text-slate-100"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="hidden sm:flex text-xs text-slate-500 items-center gap-2">
              <span>{activeModule.title}</span>
              <ChevronRight className="w-3 h-3" />
              <span className="text-slate-200 font-semibold">{activeTopic.title}</span>
            </div>
          </div>
          {progressPercent === 100 && (
            <div
              className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold"
              style={{ background: '#10b98122', color: '#34d399', border: '1px solid #10b98155' }}
            >
              <Award className="w-3.5 h-3.5" />
              Complete
            </div>
          )}
        </header>

        <div className="flex-1 overflow-y-auto" ref={contentScrollRef}>
          <div className="max-w-3xl mx-auto px-6 md:px-10 py-10 md:py-14">
            <div className="mb-5 flex items-center gap-2">
              <span
                className="inline-block text-[11px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full"
                style={{
                  color: accent,
                  background: `${accent}14`,
                  border: `1px solid ${accent}44`,
                }}
              >
                {activeModule.title}
              </span>
              <KindBadge kind={kind} />
            </div>

            <h1
              className="text-4xl md:text-5xl tracking-tight text-slate-100 mb-8 leading-[1.05]"
              style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 800 }}
            >
              {activeTopic.title}
            </h1>

            <div className="mb-10">
              {activeTopic.content.split('\n\n').map((para, idx) => {
                const isCodey =
                  /^\s{2,}/.test(para) ||
                  /^[a-z_]+\s*=/m.test(para) ||
                  /SELECT|FROM|WHERE/.test(para) ||
                  /df\./.test(para);
                if (isCodey) {
                  return (
                    <pre
                      key={idx}
                      className="my-5 p-4 rounded-lg text-[13px] leading-relaxed overflow-x-auto"
                      style={{
                        background: surface,
                        border: `1px solid ${border}`,
                        fontFamily: "'JetBrains Mono', monospace",
                        color: '#e2e8f0',
                      }}
                    >
                      {para}
                    </pre>
                  );
                }
                return (
                  <p key={idx} className="my-4 text-[15.5px] leading-[1.75] text-slate-300">
                    {para}
                  </p>
                );
              })}
            </div>

            <div
              className="rounded-xl overflow-hidden mb-8"
              style={{ background: surface, border: `1px solid ${border}` }}
            >
              <div
                className="px-5 py-3 flex items-center gap-2"
                style={{ borderBottom: `1px solid ${border}`, background: surface2 }}
              >
                <Target className="w-4 h-4" style={{ color: accent }} />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Exercise
                </span>
                <span className="ml-auto text-[11px] text-slate-500 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" style={{ color: accent }} />
                  Auto-graded
                </span>
              </div>

              <div className="p-5 md:p-6">
                <p className="text-[15px] text-slate-200 mb-4 leading-relaxed">
                  {activeTopic.exercisePrompt}
                </p>

                {kind === 'python' && (
                  <div
                    className="mb-3 px-3 py-2 rounded-md text-[11px] text-slate-400 flex items-center gap-2"
                    style={{ background: surface2, border: `1px solid ${border}` }}
                  >
                    <Terminal className="w-3.5 h-3.5" style={{ color: accentDim }} />
                    <span>
                      Sandbox loaded: <code style={{ color: '#3b82f6' }}>orders</code> (200 rows) ·{' '}
                      <code style={{ color: '#3b82f6' }}>customers</code> (60 rows) ·{' '}
                      <code style={{ color: '#3b82f6' }}>sales</code> (list) · <code style={{ color: '#3b82f6' }}>pd</code>
                    </span>
                  </div>
                )}

                {kind === 'sql' && (
                  <div
                    className="mb-3 px-3 py-2 rounded-md text-[11px] text-slate-400 flex items-center gap-2"
                    style={{ background: surface2, border: `1px solid ${border}` }}
                  >
                    <Database className="w-3.5 h-3.5" style={{ color: accentDim }} />
                    <span>
                      Tables: <code style={{ color: '#3b82f6' }}>orders</code> (200) ·{' '}
                      <code style={{ color: '#3b82f6' }}>customers</code> (60) ·{' '}
                      <code style={{ color: '#3b82f6' }}>bookings</code> (120). SQLite dialect.
                    </span>
                  </div>
                )}

                <textarea
                  className="w-full h-44 md:h-52 p-4 rounded-lg outline-none resize-y"
                  placeholder={
                    kind === 'sql'
                      ? '-- Your SQL here. SQLite dialect. End with the SELECT — Run shows the rows.'
                      : kind === 'concept'
                        ? 'Your answer in plain English…'
                        : 'Your Python here. End with an expression to inspect it.'
                  }
                  value={currentDraft}
                  onChange={e =>
                    setDrafts(d => ({ ...d, [activeTopic.id]: e.target.value }))
                  }
                  style={{
                    background: bg,
                    border: `1px solid ${border}`,
                    color: '#e2e8f0',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '13.5px',
                    lineHeight: 1.6,
                  }}
                />

                <div className="mt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-wrap">
                  {(kind === 'python' || kind === 'sql') && (
                    <button
                      onClick={handleRun}
                      disabled={isRunning}
                      className="px-4 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-colors disabled:opacity-60"
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
                  )}

                  <button
                    onClick={handleSubmit}
                    disabled={isGrading}
                    className="px-5 py-2.5 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all disabled:opacity-60"
                    style={{ background: accent, color: '#ffffff' }}
                  >
                    {isGrading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Grading…
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit
                      </>
                    )}
                  </button>

                  <button
                    onClick={handleHint}
                    disabled={isHinting}
                    className="px-4 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-colors disabled:opacity-60"
                    style={{
                      background: 'transparent',
                      color: '#64748b',
                      border: `1px solid ${border}`,
                    }}
                  >
                    {isHinting ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Lightbulb className="w-4 h-4" />
                    )}
                    Get a hint
                  </button>

                  <span className="text-[11px] text-slate-500 sm:ml-auto">
                    Draft auto-saves in this session
                  </span>
                </div>

                {currentRunOutput && kind === 'python' && (
                  <RunOutput output={currentRunOutput} />
                )}

                {currentRunOutput && kind === 'sql' && (
                  <SqlRunOutput output={currentRunOutput} />
                )}

                {graderError && (
                  <div
                    className="mt-5 p-3 rounded-lg text-sm flex items-start gap-2"
                    style={{
                      background: '#7f1d1d22',
                      border: '1px solid #7f1d1d55',
                      color: '#fca5a5',
                    }}
                  >
                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    {graderError}
                  </div>
                )}

                {hint && (
                  <div
                    className="mt-5 p-4 rounded-lg flex items-start gap-3"
                    style={{
                      background: `${accent}10`,
                      border: `1px solid ${accent}44`,
                    }}
                  >
                    <Lightbulb
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      style={{ color: accent }}
                    />
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider mb-1" style={{ color: accent }}>
                        Hint
                      </div>
                      <p className="text-sm text-slate-200 leading-relaxed">{hint}</p>
                    </div>
                  </div>
                )}

                {topicProgress && topicProgress.status && !isGrading && (
                  <div
                    className="mt-5 p-4 rounded-lg flex items-start gap-3"
                    style={{
                      background:
                        topicProgress.status === 'passed' ? '#10b9811a' : '#f59e0b1a',
                      border:
                        topicProgress.status === 'passed'
                          ? '1px solid #10b98155'
                          : '1px solid #f59e0b55',
                    }}
                  >
                    {topicProgress.status === 'passed' ? (
                      <CheckCircle
                        className="w-5 h-5 flex-shrink-0 mt-0.5"
                        style={{ color: '#34d399' }}
                      />
                    ) : (
                      <AlertCircle
                        className="w-5 h-5 flex-shrink-0 mt-0.5"
                        style={{ color: '#fbbf24' }}
                      />
                    )}
                    <div>
                      <div
                        className="text-[11px] font-bold uppercase tracking-wider mb-1"
                        style={{
                          color:
                            topicProgress.status === 'passed' ? '#34d399' : '#fbbf24',
                        }}
                      >
                        {topicProgress.status === 'passed' ? 'Passed' : 'Needs work'}
                      </div>
                      <p className="text-sm text-slate-200 leading-relaxed">
                        {topicProgress.feedback}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 pb-12">
              <button
                onClick={() => prev && handleTopicSelect(prev.modId, prev.topId)}
                disabled={!prev}
                className="px-4 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                style={{
                  background: 'transparent',
                  color: '#64748b',
                  border: `1px solid ${border}`,
                }}
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>

              <button
                onClick={() => next && handleTopicSelect(next.modId, next.topId)}
                disabled={!next}
                className="px-4 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                style={{ background: accent, color: '#ffffff' }}
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function KeyPrompt({ onSave, onClose, onClear, hasExisting }) {
  const [val, setVal] = useState('');
  const trimmed = val.trim();
  const looksValid = trimmed.startsWith('sk-ant-') && trimmed.length > 30;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center px-4"
      style={{ background: 'rgba(0,0,0,0.65)' }}
    >
      <div
        className="max-w-md w-full rounded-2xl p-7"
        style={{ background: surface, border: `1px solid ${border}` }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: `${accent}22`, border: `1px solid ${accent}55` }}
          >
            <Key className="w-5 h-5" style={{ color: accent }} />
          </div>
          <h2
            className="text-xl text-slate-100"
            style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 800 }}
          >
            {hasExisting ? 'Update API key' : 'Set your API key'}
          </h2>
        </div>

        <div className="text-[13.5px] text-slate-300 leading-relaxed mb-4 space-y-2">
          <p>
            Grading, hints, and mock summaries call an external model API. The key stays in
            your browser (<code style={{ color: accentDim }}>localStorage</code>) — it never
            leaves your machine except in the outbound model request.
          </p>
          <p className="text-[12.5px] text-slate-400">
            Get a key at{' '}
            <a
              href="https://console.anthropic.com/settings/keys"
              target="_blank"
              rel="noreferrer"
              style={{ color: accentDim, textDecoration: 'underline' }}
            >
              console.anthropic.com/settings/keys
            </a>{' '}
            (the model identifier the app sends is configurable in <code>src/api/grader.js</code>).
          </p>
        </div>

        <input
          type="password"
          autoFocus
          value={val}
          onChange={e => setVal(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter' && looksValid) onSave(trimmed); }}
          placeholder="sk-ant-api03-..."
          className="w-full p-3 rounded-lg outline-none"
          style={{
            background: bg,
            border: `1px solid ${border}`,
            color: '#e2e8f0',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '13px',
          }}
        />
        {val && !looksValid && (
          <div className="mt-2 text-[11px]" style={{ color: '#fbbf24' }}>
            Keys start with <code>sk-ant-</code> and are longer than that.
          </div>
        )}

        <div className="mt-5 flex gap-2">
          <button
            onClick={() => onSave(trimmed)}
            disabled={!looksValid}
            className="flex-1 px-4 py-2.5 rounded-lg text-sm font-bold disabled:opacity-50"
            style={{ background: accent, color: '#ffffff' }}
          >
            Save
          </button>
          {hasExisting && (
            <button
              onClick={onClear}
              className="px-4 py-2.5 rounded-lg text-sm font-semibold"
              style={{ background: 'transparent', color: '#fca5a5', border: `1px solid #7f1d1d55` }}
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-lg text-sm font-semibold"
            style={{ background: 'transparent', color: '#94a3b8', border: `1px solid ${border}` }}
          >
            {hasExisting ? 'Cancel' : 'Skip'}
          </button>
        </div>

        {!hasExisting && (
          <p className="mt-4 text-[11px] text-slate-500">
            You can skip and browse the curriculum, but Submit / Get a hint / Mock-grading will
            fail until a key is set.
          </p>
        )}
      </div>
    </div>
  );
}

function KindBadge({ kind }) {
  const map = {
    python: { label: 'Python · runnable', color: '#3b82f6' },
    sql: { label: 'SQL · runnable', color: '#3b82f6' },
    concept: { label: 'Concept · text answer', color: '#64748b' },
  };
  const cfg = map[kind] || map.concept;
  return (
    <span
      className="inline-block text-[11px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full"
      style={{
        color: cfg.color,
        background: `${cfg.color}14`,
        border: `1px solid ${cfg.color}44`,
      }}
    >
      {cfg.label}
    </span>
  );
}

function RunOutput({ output }) {
  const { stdout, stderr, result, error } = output;
  const hasAny = stdout || stderr || result || error;
  if (!hasAny) {
    return (
      <div
        className="mt-5 p-4 rounded-lg text-xs text-slate-500"
        style={{ background: bg, border: `1px solid ${border}` }}
      >
        Ran. No output. (Tip: end your snippet with an expression to inspect it.)
      </div>
    );
  }
  return (
    <div
      className="mt-5 rounded-lg overflow-hidden"
      style={{ background: bg, border: `1px solid ${border}` }}
    >
      <div
        className="px-4 py-2 flex items-center gap-2"
        style={{ background: surface2, borderBottom: `1px solid ${border}` }}
      >
        <Terminal className="w-3.5 h-3.5" style={{ color: error ? '#fca5a5' : '#3b82f6' }} />
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
          {error ? 'Run · error' : 'Run · output'}
        </span>
      </div>
      <div className="p-4 space-y-3">
        {stdout && <OutputBlock label="stdout" body={stdout} color="#e5e5e5" />}
        {result && <OutputBlock label="result" body={result} color="#fcd34d" />}
        {stderr && <OutputBlock label="stderr" body={stderr} color="#fb923c" />}
        {error && <OutputBlock label="traceback" body={error} color="#fca5a5" />}
      </div>
    </div>
  );
}

function SqlRunOutput({ output }) {
  const { results, error } = output;
  if (error) {
    return (
      <div
        className="mt-5 rounded-lg overflow-hidden"
        style={{ background: bg, border: '1px solid #7f1d1d55' }}
      >
        <div
          className="px-4 py-2 flex items-center gap-2"
          style={{ background: surface2, borderBottom: `1px solid ${border}` }}
        >
          <AlertCircle className="w-3.5 h-3.5" style={{ color: '#fca5a5' }} />
          <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: '#fca5a5' }}>
            SQL · error
          </span>
        </div>
        <pre
          className="p-4 text-[12.5px] leading-relaxed whitespace-pre-wrap break-words"
          style={{ fontFamily: "'JetBrains Mono', monospace", color: '#fca5a5', margin: 0 }}
        >
          {error}
        </pre>
      </div>
    );
  }
  if (!results || results.length === 0) {
    return (
      <div
        className="mt-5 p-4 rounded-lg text-xs text-slate-500"
        style={{ background: bg, border: `1px solid ${border}` }}
      >
        Query ran. No rows returned. (Tip: ensure your SELECT actually projects columns.)
      </div>
    );
  }
  return (
    <div className="mt-5 space-y-4">
      {results.map((rs, i) => (
        <SqlResultTable key={i} columns={rs.columns} values={rs.values} index={i + 1} total={results.length} />
      ))}
    </div>
  );
}

function SqlResultTable({ columns, values, index, total }) {
  const MAX_ROWS = 50;
  const shown = values.slice(0, MAX_ROWS);
  const truncated = values.length > MAX_ROWS;
  return (
    <div
      className="rounded-lg overflow-hidden"
      style={{ background: bg, border: `1px solid ${border}` }}
    >
      <div
        className="px-4 py-2 flex items-center gap-2"
        style={{ background: surface2, borderBottom: `1px solid ${border}` }}
      >
        <Database className="w-3.5 h-3.5" style={{ color: '#3b82f6' }} />
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
          {total > 1 ? `Result ${index}/${total} · ` : 'Result · '}
          {values.length} {values.length === 1 ? 'row' : 'rows'}
          {truncated ? ` (showing first ${MAX_ROWS})` : ''}
        </span>
      </div>
      <div className="overflow-x-auto">
        <table
          className="w-full text-[12.5px]"
          style={{ fontFamily: "'JetBrains Mono', monospace", borderCollapse: 'collapse' }}
        >
          <thead>
            <tr style={{ background: surface }}>
              {columns.map(c => (
                <th
                  key={c}
                  className="text-left px-3 py-1.5 font-bold"
                  style={{ color: '#3b82f6', borderBottom: `1px solid ${border}` }}
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {shown.map((row, ri) => (
              <tr key={ri} style={{ borderBottom: `1px solid ${border}` }}>
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className="px-3 py-1.5"
                    style={{ color: cell === null ? '#475569' : '#e2e8f0' }}
                  >
                    {cell === null ? 'NULL' : String(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function OutputBlock({ label, body, color }) {
  return (
    <div>
      <div
        className="text-[10px] font-bold uppercase tracking-widest mb-1"
        style={{ color }}
      >
        {label}
      </div>
      <pre
        className="text-[12.5px] leading-relaxed whitespace-pre-wrap break-words"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          color: '#e2e8f0',
          margin: 0,
        }}
      >
        {body}
      </pre>
    </div>
  );
}
