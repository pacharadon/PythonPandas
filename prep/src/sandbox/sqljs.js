// sql.js sandbox — SQLite compiled to WebAssembly, running fully in-browser.
//
// Loaded lazily from jsDelivr on first Run (mirrors the Pyodide pattern).
// ~1.5MB. After init, queries are sub-millisecond.
//
// Seeded with the same orders + customers used by the Pyodide sandbox plus a
// fresh bookings table, so analogies between pandas and SQL exercises hold.

import { orders, customers, bookings } from './data.js';

const SQLJS_VERSION = '1.10.3';
const SQLJS_BASE = `https://cdn.jsdelivr.net/npm/sql.js@${SQLJS_VERSION}/dist/`;

let dbPromise = null;

function loadSqlJsScript() {
  return new Promise((resolve, reject) => {
    if (window.initSqlJs) return resolve();
    const id = 'sqljs-cdn-script';
    if (document.getElementById(id)) {
      const existing = document.getElementById(id);
      existing.addEventListener('load', () => resolve());
      existing.addEventListener('error', () => reject(new Error('sql.js script failed to load')));
      return;
    }
    const s = document.createElement('script');
    s.id = id;
    s.src = `${SQLJS_BASE}sql-wasm.js`;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error('sql.js script failed to load'));
    document.head.appendChild(s);
  });
}

const SCHEMA = `
CREATE TABLE orders (
  order_id    INTEGER PRIMARY KEY,
  customer_id INTEGER,
  gmv         REAL,
  status      TEXT,
  country     TEXT,
  created_at  TEXT,
  category    TEXT
);
CREATE TABLE customers (
  customer_id INTEGER PRIMARY KEY,
  country     TEXT,
  signup_date TEXT
);
CREATE TABLE bookings (
  booking_id INTEGER PRIMARY KEY,
  hotel_id   INTEGER,
  nights     INTEGER,
  price      REAL,
  country    TEXT,
  created_at TEXT
);
`;

function seed(db) {
  db.exec(SCHEMA);

  const insert = (sql, rows) => {
    const stmt = db.prepare(sql);
    db.exec('BEGIN');
    try {
      for (const r of rows) stmt.run(r);
      db.exec('COMMIT');
    } finally {
      stmt.free();
    }
  };

  insert(
    'INSERT INTO orders (order_id, customer_id, gmv, status, country, created_at, category) VALUES (?,?,?,?,?,?,?)',
    orders.map(o => [o.order_id, o.customer_id, o.gmv, o.status, o.country, o.created_at, o.category]),
  );
  insert(
    'INSERT INTO customers (customer_id, country, signup_date) VALUES (?,?,?)',
    customers.map(c => [c.customer_id, c.country, c.signup_date]),
  );
  insert(
    'INSERT INTO bookings (booking_id, hotel_id, nights, price, country, created_at) VALUES (?,?,?,?,?,?)',
    bookings.map(b => [b.booking_id, b.hotel_id, b.nights, b.price, b.country, b.created_at]),
  );
}

async function initDb(onStage) {
  onStage && onStage('Downloading SQLite…');
  await loadSqlJsScript();
  onStage && onStage('Booting SQLite…');
  const SQL = await window.initSqlJs({ locateFile: f => `${SQLJS_BASE}${f}` });
  const db = new SQL.Database();
  onStage && onStage('Seeding tables…');
  seed(db);
  return db;
}

export function getDb(onStage) {
  if (!dbPromise) dbPromise = initDb(onStage);
  return dbPromise;
}

export async function runSql(sql, onStage) {
  const db = await getDb(onStage);
  try {
    // db.exec returns one entry per statement that produced a result set.
    // Each entry has shape { columns: string[], values: any[][] }.
    const results = db.exec(sql);
    return { results, error: '' };
  } catch (err) {
    return { results: [], error: err.message || String(err) };
  }
}

export function isSqlWarm() {
  return dbPromise !== null;
}
