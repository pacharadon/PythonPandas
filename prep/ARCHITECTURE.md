# Architecture

Built by **Pachara Don Stewart (PDS / "Danny")** · [@pacharadon](https://github.com/pacharadon)

How the app is built, how grading works, how the Python sandbox runs, and what
to swap when going to production.

## File layout

```
data-analyst-prep/
├── CURRICULUM.md          ← master curriculum (human-edited)
├── ARCHITECTURE.md        ← this file
├── ROADMAP.md             ← what's next
├── README.md
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── index.html
├── .env.example
├── .gitignore
└── src/
    ├── main.jsx           ← Vite entry
    ├── index.css          ← tailwind directives
    ├── CoursePlatform.jsx ← UI component
    ├── courseData.js      ← curriculum as JS data
    ├── api/
    │   └── grader.js      ← grader + hint API wrappers
    ├── MockAssessment.jsx← timed mock exam UI (full-screen)
    ├── mock.js           ← mock question picker + verdict logic
    └── sandbox/
        ├── data.js        ← seeded orders + customers + bookings + sales
        ├── pyodide.js     ← lazy Python loader + runner
        └── sqljs.js       ← lazy SQLite loader + runner
```

## Component structure

Same shape as v2 with two additions:

| New region | What it does |
|---|---|
| Run button | Executes the textarea contents in Pyodide. Only enabled for `kind: python` topics. |
| Output panel | Shows last run's stdout, stderr, and (if last expression produced a DataFrame/Series) its `.head().to_string()`. |

`gradeSubmission()` now accepts an optional `runOutput` argument and includes
it in the prompt when present.

## The Pyodide sandbox

### Loading

`src/sandbox/pyodide.js` exposes `getRuntime()` — a memoised promise that:

1. Injects `<script src="https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js">`
   on first call (no-op on repeat).
2. Awaits `window.loadPyodide({ indexURL })`.
3. Pre-imports pandas (bundled with Pyodide — no `loadPackage` needed).
4. Seeds the global namespace with `orders`, `customers`, and `sales` from
   `data.js` (passed in as JSON, materialised as pandas DataFrames inside the
   Python world).

First call costs ~3s and ~10MB transfer. Subsequent calls are free.

### Running code

`runPython(code)` does:

- Resets stdout/stderr buffers.
- Wraps the user code in a small harness that captures the last expression's
  value (mimicking a notebook). If it's a DataFrame or Series, we render
  `.head(10).to_string()`; otherwise `repr()`.
- Returns `{ stdout, stderr, result, error }`.
- Errors are caught: Python tracebacks land in `error`, never crash the UI.

### What's pre-seeded

- `orders` — 200 rows. Columns: `order_id, customer_id, gmv, status, country, created_at, category`. Realistic mix: TH/SG/MY, THB 50–3000, paid/cancelled/pending.
- `customers` — 60 rows. Columns: `customer_id, country, signup_date`.
- `bookings` — 120 rows. Columns: `booking_id, hotel_id, nights, price, country, created_at`. Used by the SQL sandbox.
- `sales` — `[120, 480, 75, 1500, 60, 230, 880]` (a quick list for list-comprehension exercises so Run works without preamble).

Data is deterministic (seeded `mulberry32(42)`) so grading is reproducible.

## The SQLite sandbox

### Loading

`src/sandbox/sqljs.js` mirrors the Pyodide shape with `getDb()` — a memoised
promise that:

1. Injects `<script src="https://cdn.jsdelivr.net/npm/sql.js@1.10.3/dist/sql-wasm.js">`
   on first call (no-op on repeat).
2. Awaits `window.initSqlJs({ locateFile })` which fetches `sql-wasm.wasm` from
   the same CDN (~1.5MB).
3. Creates a fresh in-memory database.
4. Runs `CREATE TABLE` for `orders` / `customers` / `bookings`, then bulk-inserts
   the same JS arrays the Pyodide sandbox uses — wrapped in a single transaction.

First call costs ~1s and ~1.5MB transfer. Subsequent calls are free.

### Running queries

`runSql(sql)` returns `{ results, error }` where `results` is sql.js's native
shape — one entry per statement that produced a rowset:

```js
[
  { columns: ['customer_id', 'total_gmv'], values: [[1001, 12500.5], ...] }
]
```

Errors (syntax, unknown column, etc.) are caught — they land in `error`, never
crash the UI.

The UI renders each result as a proper HTML table (first 50 rows) under the
textarea. The grader receives the same shape, serialised as a pipe-separated
preview.

### Why CDN over npm-bundled

Both sandboxes ship via jsDelivr to keep the dev/prod story simple and the
bundle small (~10MB Pyodide + ~1.5MB sql.js stay out of the JS bundle). Both
become available as soon as the page is open — no `npm install` of heavyweight
WASM deps required.

### Security boundary

Pyodide runs in the browser tab's JS sandbox. It cannot touch the user's
filesystem or network beyond what the parent page allows. The API key is the
only secret in the page and Pyodide has no access path to it (the key lives in
JS module scope, not in `window`).

## Automated grading

### Grader prompt (with run output)

```
You are grading a beginner Python / Pandas / SQL exercise. The student is
preparing for data analyst assessments at Shopee, Lazada, and Agoda
(Alooba platform).

LESSON CONTEXT:
{topic.content}

EXERCISE:
{topic.exercisePrompt}

STUDENT SUBMISSION:
{submission}

[when present:]
EXECUTION OUTPUT (what their code actually printed / returned):
stdout:
{runOutput.stdout}
stderr:
{runOutput.stderr}
result:
{runOutput.result}
error:
{runOutput.error}

Grade leniently on syntax. Grade strictly on the CONCEPT. If execution output
is present, take it as evidence — passing requires both the right concept AND
sensible output (no traceback, plausible result).

Return ONLY valid JSON, no markdown fences, in exactly this shape:
{"status": "passed" or "needs_work", "feedback": "1-2 sentences. Encouraging. Specific."}
```

### Hint prompt

Unchanged from v2.

### Model selection

Default: `claude-haiku-4-5-20251001`. Upgrade with `MODEL` in `src/api/grader.js`.

## API calls: dev vs production

Same as v2. Direct browser call in dev with the dangerous header; swap the
fetch body in `grader.js` for a proxy call in production. The Pyodide sandbox
needs no server piece.

## Mock-assessment mode

A top-level `mode` state in `CoursePlatform.jsx` ('practice' | 'mock'). When
'mock', the whole main area is replaced by `<MockAssessment />`, which owns:

- A `session` object with the 6 sampled questions and a `startedAt` timestamp
- Its own `drafts` and `runOutputs` maps (mock-local — Practice progress stays clean)
- A 1 Hz timer effect; expiry triggers auto-submit
- Sequential grading on submit (cheaper, lets us show "Grading 3/6…" progress)
- A final `summarizeMockResults()` LLM call for the overall takeaway paragraph
- Results page with per-question status pills, the student's submitted answer, and feedback

`src/mock.js` is pure logic — picker, verdict, time formatter. No React, no fetches. Easy to test.

**Why 1 pandas + 3 SQL + 2 business and not a flat random sample:** mirrors
the actual assessment weighting at the target companies — Alooba/Agoda is
SQL-heavy, Shopee/Lazada test pandas + business reasoning.

## What's intentionally not here

- **No backend** — single-page app, no accounts.
- **No telemetry** — nothing leaves the browser except the API call itself.
- **No tests** — keep them out until behaviour stabilises. When you add them,
  mock the fetch and assert on prompt shape, not model output. Pyodide is hard
  to mock cleanly; consider extracting a `runPython` interface and stubbing it.
