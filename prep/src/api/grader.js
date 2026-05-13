// Thin wrapper for the grader + hint endpoints.
//
// Built by Pachara Don Stewart (PDS / "Danny") · @pacharadon
//
// Dev (current): calls the model API directly from the browser using the
//                browser-access header. Key read from VITE_ANTHROPIC_API_KEY.
//
// Prod (recommended): replace the body of callApi() with a fetch to your
//                     own /api/grade proxy. See ARCHITECTURE.md.

const API_KEY = import.meta.env.VITE_ANTHROPIC_API_KEY;
const MODEL = 'claude-haiku-4-5-20251001'; // model identifier — change to upgrade

async function callApi(prompt) {
  if (!API_KEY) {
    throw new Error(
      'VITE_ANTHROPIC_API_KEY is not set. Copy .env.example to .env.local and add your key.',
    );
  }

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true',
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 1000,
      messages: [{ role: 'user', content: prompt }],
    }),
  });

  if (!response.ok) {
    const text = await response.text().catch(() => '');
    throw new Error(`Grader API ${response.status}: ${text.slice(0, 200)}`);
  }

  const data = await response.json();
  return data.content
    .filter(b => b.type === 'text')
    .map(b => b.text)
    .join('\n');
}

function truncate(s, max = 1500) {
  if (!s) return '';
  return s.length > max ? s.slice(0, max) + `\n…(truncated, ${s.length - max} more chars)` : s;
}

function formatRunOutput(runOutput, kind) {
  if (!runOutput) return '';
  const parts = ['EXECUTION OUTPUT (what their code actually printed / returned):'];

  if (kind === 'sql') {
    if (runOutput.error) {
      parts.push(`error:\n${truncate(runOutput.error)}`);
    } else {
      const results = runOutput.results || [];
      if (results.length === 0) {
        parts.push('(query ran but returned no rows)');
      } else {
        results.forEach((rs, i) => {
          const header = (rs.columns || []).join(' | ');
          const rows = (rs.values || []).slice(0, 20).map(r => r.join(' | '));
          const more = (rs.values || []).length > 20 ? `\n…(${(rs.values || []).length - 20} more rows)` : '';
          parts.push(`statement ${i + 1}:\n${header}\n${rows.join('\n')}${more}`);
        });
      }
    }
  } else {
    parts.push(`stdout:\n${truncate(runOutput.stdout) || '(empty)'}`);
    parts.push(`stderr:\n${truncate(runOutput.stderr) || '(empty)'}`);
    parts.push(`last-expression result:\n${truncate(runOutput.result) || '(none)'}`);
    if (runOutput.error) parts.push(`traceback:\n${truncate(runOutput.error)}`);
  }
  return parts.join('\n');
}

export async function gradeSubmission({ topic, submission, runOutput }) {
  const runBlock = formatRunOutput(runOutput, topic.kind);

  const prompt = `You are grading a beginner Python / Pandas / SQL exercise. The student is preparing for data analyst assessments at Shopee, Lazada, and Agoda (Alooba platform).

LESSON CONTEXT:
${topic.content}

EXERCISE:
${topic.exercisePrompt}

STUDENT SUBMISSION:
${submission}
${runBlock ? '\n' + runBlock + '\n' : ''}
Grade leniently on syntax (missing semicolons, minor typos, equivalent variable names are fine). Grade strictly on the CONCEPT — did they demonstrate the idea the lesson taught? For conceptual questions, look for the right reasoning, not specific wording.${runBlock ? ' Treat the execution output as evidence: if it shows a traceback the submission cannot pass; if the result is implausible for the question, lean towards needs_work.' : ''}

Return ONLY valid JSON, no markdown fences, in exactly this shape:
{"status": "passed" or "needs_work", "feedback": "1-2 sentences. Encouraging. Specific. If they missed something, name the concept (not the keyword)."}`;

  const raw = (await callApi(prompt)).replace(/```json|```/g, '').trim();
  const parsed = JSON.parse(raw);
  if (parsed.status !== 'passed' && parsed.status !== 'needs_work') {
    throw new Error('Unexpected grader response shape');
  }
  return parsed;
}

export async function summarizeMockResults({ questions, grades }) {
  // questions: [{ title, kind, exercisePrompt }, ...]
  // grades:    [{ status, feedback }, ...] (same order)
  const lines = questions.map((q, i) => {
    const g = grades[i] || { status: 'unknown', feedback: '' };
    return `Q${i + 1} (${q.kind} · ${q.title}): ${g.status} — ${g.feedback}`;
  }).join('\n');

  const passed = grades.filter(g => g.status === 'passed').length;
  const total = grades.length;

  const prompt = `A student just completed a 6-question timed mock assessment preparing for data analyst roles at Shopee, Lazada, and Agoda (Alooba). Results:

${lines}

Score: ${passed}/${total} passed.

In 3-4 sentences, give an HONEST, useful overall takeaway:
- What patterns are strongest / weakest across their answers?
- 1-2 specific concept areas they should review before the real assessment.
- Encouraging but blunt. Don't sugar-coat a low score; don't oversell a high one.

Return ONLY the takeaway prose, no JSON, no fences, no preamble.`;

  return (await callApi(prompt)).trim();
}

export async function fetchHint({ topic }) {
  const prompt = `You are giving a hint for a beginner exercise. Do NOT give the answer. Nudge the student.

EXERCISE: ${topic.exercisePrompt}

Give one sentence that points them toward the right concept or syntax pattern without solving it.`;

  return (await callApi(prompt)).trim();
}
