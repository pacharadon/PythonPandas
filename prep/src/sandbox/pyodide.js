// Pyodide loader + runner.
//
// Lazy-loaded on first call to getRuntime(). After init:
//  - `orders`, `customers`, `sales` and `pd` are pre-bound in the Python globals
//  - runPython(code) executes user code against that namespace, captures
//    stdout/stderr, and reflects the last-expression's value (DataFrame-aware)
//
// We don't bundle Pyodide — it loads from jsDelivr on first Run. ~10MB,
// ~3s init. After that, runs are near-instant.

import { orders, customers, sales } from './data.js';

const PYODIDE_VERSION = '0.26.4';
const PYODIDE_INDEX_URL = `https://cdn.jsdelivr.net/pyodide/v${PYODIDE_VERSION}/full/`;

let runtimePromise = null;

function loadPyodideScript() {
  return new Promise((resolve, reject) => {
    if (window.loadPyodide) return resolve();
    const id = 'pyodide-cdn-script';
    if (document.getElementById(id)) {
      const existing = document.getElementById(id);
      existing.addEventListener('load', () => resolve());
      existing.addEventListener('error', () => reject(new Error('Pyodide script failed to load')));
      return;
    }
    const s = document.createElement('script');
    s.id = id;
    s.src = `${PYODIDE_INDEX_URL}pyodide.js`;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error('Pyodide script failed to load'));
    document.head.appendChild(s);
  });
}

// Python harness that runs user code with notebook-style last-expression capture.
const PY_HARNESS = `
import ast, io, contextlib, traceback

def _run_user(code, ns):
    stdout = io.StringIO()
    stderr = io.StringIO()
    result_repr = ''
    error = ''
    try:
        tree = ast.parse(code, mode='exec')
        last_expr = None
        if tree.body and isinstance(tree.body[-1], ast.Expr):
            last_expr = tree.body.pop()
        with contextlib.redirect_stdout(stdout), contextlib.redirect_stderr(stderr):
            if tree.body:
                exec(compile(ast.Module(body=tree.body, type_ignores=[]), '<user>', 'exec'), ns)
            if last_expr is not None:
                value = eval(compile(ast.Expression(body=last_expr.value), '<user>', 'eval'), ns)
                if value is not None:
                    try:
                        import pandas as pd
                        if isinstance(value, (pd.DataFrame, pd.Series)):
                            result_repr = value.head(10).to_string()
                        else:
                            result_repr = repr(value)
                    except Exception:
                        result_repr = repr(value)
    except Exception:
        error = traceback.format_exc()
    return {
        'stdout': stdout.getvalue(),
        'stderr': stderr.getvalue(),
        'result': result_repr,
        'error': error,
    }
`;

async function initRuntime(onStage) {
  onStage && onStage('Downloading Pyodide…');
  await loadPyodideScript();

  onStage && onStage('Booting Python…');
  const pyodide = await window.loadPyodide({ indexURL: PYODIDE_INDEX_URL });

  onStage && onStage('Loading pandas…');
  // pandas isn't in the default loaded set; load it explicitly.
  await pyodide.loadPackage(['pandas']);

  onStage && onStage('Seeding dataset…');
  pyodide.globals.set('_orders_json', JSON.stringify(orders));
  pyodide.globals.set('_customers_json', JSON.stringify(customers));
  pyodide.globals.set('_sales_json', JSON.stringify(sales));

  pyodide.runPython(`
import json
import pandas as pd

orders = pd.DataFrame(json.loads(_orders_json))
customers = pd.DataFrame(json.loads(_customers_json))
sales = json.loads(_sales_json)
`);

  pyodide.runPython(PY_HARNESS);

  // Persistent namespace so users can build up state across Runs in one session.
  pyodide.runPython(`
_user_ns = {
    'pd': pd,
    'orders': orders,
    'customers': customers,
    'sales': sales,
}
`);

  return pyodide;
}

export function getRuntime(onStage) {
  if (!runtimePromise) runtimePromise = initRuntime(onStage);
  return runtimePromise;
}

export async function runPython(code, onStage) {
  const pyodide = await getRuntime(onStage);
  const runner = pyodide.globals.get('_run_user');
  const ns = pyodide.globals.get('_user_ns');
  try {
    const proxy = runner(code, ns);
    const obj = proxy.toJs({ dict_converter: Object.fromEntries });
    proxy.destroy && proxy.destroy();
    return obj;
  } finally {
    runner.destroy && runner.destroy();
    ns.destroy && ns.destroy();
  }
}

export function isRuntimeWarm() {
  return runtimePromise !== null;
}
