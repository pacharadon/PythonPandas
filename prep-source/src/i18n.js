// Internationalization — English + Thai.
//
// How it works:
//   - Top-level `lang` state in CoursePlatform decides which language renders.
//   - UI strings live in this file under UI[key][lang].
//   - Topic content lives in courseData.js. Each topic has `title`,
//     `exercisePrompt`, and `content` as { en, th } objects.
//   - Helper `t(field, lang)` pulls the right language, falls back to English
//     if Thai is missing.
//
// Localstorage key: 'pds_prep_lang' ('en' | 'th'). Defaults to 'en'.

export const LANG_KEY = 'pds_prep_lang';

export function getInitialLang() {
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === 'en' || saved === 'th') return saved;
  } catch {}
  // Auto-detect Thai locale on first load
  if (typeof navigator !== 'undefined' && navigator.language && navigator.language.startsWith('th')) {
    return 'th';
  }
  return 'en';
}

export function setLang(lang) {
  try { localStorage.setItem(LANG_KEY, lang); } catch {}
}

import { TH_CONTENT, TH_PROMPTS } from './translations.js';

// Pull a localized value from a { en, th } object, falling back to en.
export function t(field, lang) {
  if (!field) return '';
  if (typeof field === 'string') return field; // legacy non-bilingual
  return field[lang] || field.en || '';
}

// Get a topic's lesson content in the chosen language. Looks first at the
// external translations file keyed by topic id, then falls back to the
// inline content on the topic object, then to English.
export function contentFor(topic, lang) {
  if (lang === 'th' && TH_CONTENT[topic.id]) return TH_CONTENT[topic.id];
  if (typeof topic.content === 'string') return topic.content;
  return topic.content?.[lang] || topic.content?.en || '';
}

// Same shape for exercise prompts.
export function promptFor(topic, lang) {
  if (lang === 'th' && TH_PROMPTS[topic.id]) return TH_PROMPTS[topic.id];
  if (typeof topic.exercisePrompt === 'string') return topic.exercisePrompt;
  return topic.exercisePrompt?.[lang] || topic.exercisePrompt?.en || '';
}

// UI strings — every label, button, badge, message in the chrome.
export const UI = {
  // Sidebar / nav
  brandTitle:        { en: 'Data Analyst Prep',                  th: 'ติว Data Analyst' },
  targetsLine:       { en: 'Targets · Shopee · Lazada · Agoda / Alooba',
                       th: 'เป้าหมาย · Shopee · Lazada · Agoda / Alooba' },
  builtBy:           { en: 'built by',                           th: 'สร้างโดย' },
  courseProgress:    { en: 'Course progress',                    th: 'ความคืบหน้า' },
  resetProgress:     { en: 'Reset progress',                     th: 'รีเซ็ตความคืบหน้า' },
  setApiKey:         { en: 'Set API key',                        th: 'ตั้งค่า API key' },
  changeApiKey:      { en: 'Change API key',                     th: 'เปลี่ยน API key' },
  practice:          { en: 'Practice',                           th: 'ฝึกฝน' },
  mockTab:           { en: 'Mock · 45min',                       th: 'สอบจริง · 45 นาที' },
  complete:          { en: 'Complete',                           th: 'จบครบ' },

  // Topic page
  exercise:          { en: 'Exercise',                           th: 'โจทย์' },
  autoGraded:        { en: 'Auto-graded',                        th: 'ตรวจอัตโนมัติ' },
  run:               { en: 'Run',                                th: 'รัน' },
  running:           { en: 'Running…',                           th: 'กำลังรัน…' },
  submit:            { en: 'Submit',                             th: 'ส่งคำตอบ' },
  grading:           { en: 'Grading…',                           th: 'กำลังตรวจ…' },
  getHint:           { en: 'Get a hint',                         th: 'ขอใบ้' },
  hint:              { en: 'Hint',                               th: 'ใบ้' },
  passed:            { en: 'Passed',                             th: 'ผ่าน' },
  needsWork:         { en: 'Needs work',                         th: 'ต้องปรับปรุง' },
  previous:          { en: 'Previous',                           th: 'ก่อนหน้า' },
  next:              { en: 'Next',                               th: 'ถัดไป' },
  draftAutoSaves:    { en: 'Draft auto-saves in this session',   th: 'คำตอบบันทึกอัตโนมัติในเซสชันนี้' },
  writeSomethingFirst: { en: 'Write something first — even a partial answer.',
                         th: 'พิมพ์อะไรลงไปก่อน — แม้แต่คำตอบไม่เต็มก็ได้' },

  // Kind badges
  kindPython:        { en: 'Python · runnable',                  th: 'Python · รันได้' },
  kindSql:           { en: 'SQL · runnable',                     th: 'SQL · รันได้' },
  kindConcept:       { en: 'Concept · text answer',              th: 'แนวคิด · ตอบเป็นข้อความ' },

  // Sandbox info
  sandboxPython:     { en: 'Sandbox loaded',                     th: 'Sandbox โหลดแล้ว' },
  sandboxSql:        { en: 'Tables',                              th: 'ตารางที่มี' },
  sqliteDialect:     { en: 'SQLite dialect.',                    th: 'ไวยากรณ์ SQLite' },

  // Placeholders
  placeholderConcept: { en: 'Your answer in plain English…',     th: 'พิมพ์คำตอบเป็นภาษาไทยหรืออังกฤษ…' },
  placeholderPython:  { en: 'Your Python here. End with an expression to inspect it.',
                        th: 'พิมพ์ Python ที่นี่ จบด้วย expression เพื่อดูผลลัพธ์' },
  placeholderSql:     { en: '-- Your SQL here. SQLite dialect. End with the SELECT — Run shows the rows.',
                        th: '-- พิมพ์ SQL ที่นี่ ใช้ไวยากรณ์ SQLite จบด้วย SELECT แล้วกด Run' },

  // Run output panel
  runOutput:         { en: 'Run · output',                       th: 'ผลการรัน' },
  runError:          { en: 'Run · error',                        th: 'รันแล้วเจอ error' },
  sqlError:          { en: 'SQL · error',                        th: 'SQL · error' },
  ranNoOutput:       { en: 'Ran. No output. (Tip: end your snippet with an expression to inspect it.)',
                       th: 'รันแล้วไม่มีผลลัพธ์ — จบด้วย expression เพื่อดูค่า' },
  queryRanNoRows:    { en: 'Query ran. No rows returned. (Tip: ensure your SELECT actually projects columns.)',
                       th: 'รัน query แล้วแต่ไม่มีแถวกลับมา — เช็ค SELECT ว่า project column ถูกหรือไม่' },
  resultRows:        { en: 'Result · {n} rows',                  th: 'ผลลัพธ์ · {n} แถว' },

  // Mock mode
  mockTitle:         { en: 'Mock Assessment',                    th: 'สอบจำลอง' },
  mockSubtitle:      { en: '45-min · 6 questions · no hints',    th: '45 นาที · 6 ข้อ · ไม่มีใบ้' },
  startMock:         { en: 'Start mock',                         th: 'เริ่มสอบ' },
  backToPractice:    { en: 'Back to Practice',                   th: 'กลับไปฝึกฝน' },
  submitAll:         { en: 'Submit all',                         th: 'ส่งทั้งหมด' },
  submitAllAndGrade: { en: 'Submit all & grade',                 th: 'ส่งและตรวจทั้งหมด' },
  newMock:           { en: 'New mock',                           th: 'สอบรอบใหม่' },
  startNewMock:      { en: 'Start a new mock',                   th: 'เริ่มสอบรอบใหม่' },
  mockResults:       { en: 'Mock results',                       th: 'ผลสอบจำลอง' },
  wouldPass:         { en: 'Would likely pass',                  th: 'มีแนวโน้มจะผ่าน' },
  wouldNotPass:      { en: 'Would likely not pass',              th: 'มีแนวโน้มจะไม่ผ่าน' },
  answered:          { en: 'answered',                           th: 'ตอบแล้ว' },
  promptLabel:       { en: 'Prompt',                             th: 'โจทย์' },
  yourAnswer:        { en: 'Your answer',                        th: 'คำตอบของคุณ' },
  feedback:          { en: 'Feedback',                           th: 'ความเห็นจากผู้ตรวจ' },
  noAnswer:          { en: '(no answer submitted)',              th: '(ไม่ได้ตอบ)' },

  // Mock intro card
  mockIntroP1:       { en: '45 minutes. 6 questions.',
                       th: '45 นาที 6 ข้อ' },
  mockIntroP1b:      { en: 'Roughly the same shape and pressure as an Alooba timed screen.',
                       th: 'รูปแบบและความกดดันใกล้เคียงกับการสอบ Alooba จริง' },
  mockIntroL1:       { en: '· 1 pandas exercise (Module 4)',
                       th: '· 1 ข้อ pandas (โมดูล 4)' },
  mockIntroL2:       { en: '· 3 SQL exercises (Module 5)',
                       th: '· 3 ข้อ SQL (โมดูล 5)' },
  mockIntroL3:       { en: '· 2 business / stats questions (Module 6)',
                       th: '· 2 ข้อ business / stats (โมดูล 6)' },
  mockIntroP2:       { en: "Run is enabled, hints are off. Submit when you're done (or when the timer hits zero) and the grader scores all 6 at once with an honest pass/fail estimate.",
                       th: 'รันได้ ใบ้ไม่ได้ ส่งเมื่อพร้อม หรือรอเวลาหมด ระบบจะตรวจทั้ง 6 ข้อพร้อมประเมินว่ามีแนวโน้มจะผ่านหรือไม่' },
  passThreshold:     { en: 'Pass threshold: {n}/6. Questions are sampled freshly each session.',
                       th: 'เกณฑ์ผ่าน {n}/6 ข้อ สุ่มข้อใหม่ทุกครั้งที่เริ่มสอบ' },

  // Confirms
  confirmReset:      { en: 'Clear all progress and drafts? This cannot be undone.',
                       th: 'ล้างความคืบหน้าและคำตอบทั้งหมด? กู้กลับไม่ได้นะ' },
  confirmExitMock:   { en: 'Abandon this mock and return to Practice mode?',
                       th: 'ยกเลิกการสอบนี้ กลับไปโหมดฝึกฝน?' },
  confirmNewMock:    { en: 'Start a fresh mock? Your current results will be cleared.',
                       th: 'เริ่มสอบรอบใหม่? ผลรอบนี้จะถูกล้าง' },

  // Errors
  graderUnavailable: { en: 'Grader unavailable right now. Try again in a moment.',
                       th: 'ระบบตรวจไม่พร้อมใช้งาน ลองอีกครั้งใน 1 นาที' },
  hintUnavailable:   { en: 'Hint unavailable right now.',
                       th: 'ตอนนี้ขอใบ้ไม่ได้ ลองใหม่อีกครั้ง' },

  // Stage messages while loading sandboxes
  bootingPython:     { en: 'Booting Python…',                    th: 'กำลังเปิด Python…' },
  bootingSqlite:     { en: 'Booting SQLite…',                    th: 'กำลังเปิด SQLite…' },
  downloadingPyodide:{ en: 'Downloading Pyodide…',               th: 'กำลังดาวน์โหลด Pyodide…' },
  downloadingSqlite: { en: 'Downloading SQLite…',                th: 'กำลังดาวน์โหลด SQLite…' },
  loadingPandas:     { en: 'Loading pandas…',                    th: 'กำลังโหลด pandas…' },
  seedingDataset:    { en: 'Seeding dataset…',                   th: 'กำลังเตรียมข้อมูลตัวอย่าง…' },
  seedingTables:     { en: 'Seeding tables…',                    th: 'กำลังเตรียมตารางตัวอย่าง…' },

  // Footer in practice main
  module:            { en: 'Part',                               th: 'ส่วนที่' },
};

// Lookup helper for UI strings. Returns localized string, with simple {token}
// interpolation. Usage:  ui('passThreshold', lang, { n: 4 })
export function ui(key, lang, vars) {
  const entry = UI[key];
  if (!entry) return key;
  let s = entry[lang] || entry.en || '';
  if (vars) {
    for (const k in vars) s = s.replaceAll(`{${k}}`, String(vars[k]));
  }
  return s;
}
