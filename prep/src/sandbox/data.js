// Deterministic seeded sandbox data. Same numbers every reload — grading is
// reproducible. If you change anything here, the grader's notion of
// "plausible result" shifts with it.
//
// Built by Pachara Don Stewart (PDS / "Danny") · @pacharadon

function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const rand = mulberry32(42);
const pick = (arr) => arr[Math.floor(rand() * arr.length)];
const between = (lo, hi) => lo + Math.floor(rand() * (hi - lo + 1));

const COUNTRIES = ['TH', 'TH', 'TH', 'SG', 'SG', 'MY']; // TH-weighted (Shopee TH/SEA bias)
const STATUSES = ['paid', 'paid', 'paid', 'paid', 'cancelled', 'pending'];
const CATEGORIES = ['electronics', 'fashion', 'home', 'beauty', 'grocery'];

const N_CUSTOMERS = 60;
const N_ORDERS = 200;
const N_BOOKINGS = 120;

function isoDate(year, month, day) {
  const m = String(month).padStart(2, '0');
  const d = String(day).padStart(2, '0');
  return `${year}-${m}-${d}`;
}

export const customers = Array.from({ length: N_CUSTOMERS }, (_, i) => ({
  customer_id: 1001 + i,
  country: pick(COUNTRIES),
  signup_date: isoDate(2024, between(1, 12), between(1, 28)),
}));

export const orders = Array.from({ length: N_ORDERS }, (_, i) => {
  const cust = customers[between(0, N_CUSTOMERS - 1)];
  return {
    order_id: 5001 + i,
    customer_id: cust.customer_id,
    gmv: Number((50 + rand() * 2950).toFixed(2)),
    status: pick(STATUSES),
    country: cust.country, // keep country consistent with the customer row
    created_at: isoDate(2025, between(1, 5), between(1, 28)),
    category: pick(CATEGORIES),
  };
});

// Hotel bookings — used by the SQL sandbox (and the SELECT/ORDER BY exercise in 5.1).
export const bookings = Array.from({ length: N_BOOKINGS }, (_, i) => {
  const country = pick(COUNTRIES);
  const nights = between(1, 14);
  const ratePerNight = 800 + Math.floor(rand() * 4200); // 800–5000 per night
  return {
    booking_id: 9001 + i,
    hotel_id: 200 + between(0, 19), // 20 hotels
    nights,
    price: Number((nights * ratePerNight).toFixed(2)),
    country,
    created_at: isoDate(2025, between(1, 5), between(1, 28)),
  };
});

// Pre-defined list for the list-comprehension exercise so Run works with no setup.
export const sales = [120, 480, 75, 1500, 60, 230, 880];
