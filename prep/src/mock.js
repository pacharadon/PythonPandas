// Mock-assessment logic. Pure functions only — no React, no fetches.
//
// Spec from ROADMAP Phase 4:
//   - 6 random questions: 1 pandas, 3 SQL, 2 business (concept)
//   - 45-min timer
//   - No hints
//   - Grader returns per-question feedback + overall pass/fail estimate
//
// The mix mirrors what Shopee/Lazada/Agoda actually weight: SQL heaviest,
// pandas + business reasoning as supporting evidence.

export const MOCK_DURATION_MS = 45 * 60 * 1000; // 45 min
export const PASS_THRESHOLD = 4;                 // need ≥ 4/6 to "pass"

function pickRandom(arr, n) {
  const pool = [...arr];
  const out = [];
  for (let i = 0; i < n && pool.length; i++) {
    const idx = Math.floor(Math.random() * pool.length);
    out.push(pool.splice(idx, 1)[0]);
  }
  return out;
}

export function pickMockQuestions(courseData) {
  const m4 = courseData.find(m => m.id === 'm4')?.topics || [];
  const m5 = courseData.find(m => m.id === 'm5')?.topics || [];
  const m6 = courseData.find(m => m.id === 'm6')?.topics || [];

  // 1 pandas from module 4
  const pandas = pickRandom(m4, 1);
  // 3 SQL from module 5
  const sql = pickRandom(m5, 3);
  // 2 business from module 6 (mix of metric/stats)
  const biz = pickRandom(m6, 2);

  return [...pandas, ...sql, ...biz];
}

export function verdictFromGrades(grades) {
  const passed = grades.filter(g => g.status === 'passed').length;
  const total = grades.length;
  return {
    passed,
    total,
    score: Math.round((passed / total) * 100),
    verdict: passed >= PASS_THRESHOLD ? 'would_pass' : 'would_not_pass',
  };
}

export function formatRemaining(ms) {
  if (ms < 0) ms = 0;
  const totalSeconds = Math.floor(ms / 1000);
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}
