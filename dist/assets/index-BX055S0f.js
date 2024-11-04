function v0(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function x0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Ep = { exports: {} },
  $s = {},
  jp = { exports: {} },
  V = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qi = Symbol.for("react.element"),
  w0 = Symbol.for("react.portal"),
  S0 = Symbol.for("react.fragment"),
  k0 = Symbol.for("react.strict_mode"),
  C0 = Symbol.for("react.profiler"),
  b0 = Symbol.for("react.provider"),
  P0 = Symbol.for("react.context"),
  E0 = Symbol.for("react.forward_ref"),
  j0 = Symbol.for("react.suspense"),
  T0 = Symbol.for("react.memo"),
  N0 = Symbol.for("react.lazy"),
  xd = Symbol.iterator;
function A0(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (xd && e[xd]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Tp = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Np = Object.assign,
  Ap = {};
function Fr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ap),
    (this.updater = n || Tp);
}
Fr.prototype.isReactComponent = {};
Fr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Fr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Rp() {}
Rp.prototype = Fr.prototype;
function Vu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ap),
    (this.updater = n || Tp);
}
var zu = (Vu.prototype = new Rp());
zu.constructor = Vu;
Np(zu, Fr.prototype);
zu.isPureReactComponent = !0;
var wd = Array.isArray,
  Mp = Object.prototype.hasOwnProperty,
  Fu = { current: null },
  Lp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Op(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Mp.call(t, r) && !Lp.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: qi,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: Fu.current,
  };
}
function R0(e, t) {
  return {
    $$typeof: qi,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Bu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === qi;
}
function M0(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Sd = /\/+/g;
function Sa(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? M0("" + e.key)
    : t.toString(36);
}
function Lo(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case qi:
          case w0:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + Sa(s, 0) : r),
      wd(i)
        ? ((n = ""),
          e != null && (n = e.replace(Sd, "$&/") + "/"),
          Lo(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Bu(i) &&
            (i = R0(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Sd, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), wd(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var l = r + Sa(o, a);
      s += Lo(o, t, n, l, i);
    }
  else if (((l = A0(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (l = r + Sa(o, a++)), (s += Lo(o, t, n, l, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function uo(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Lo(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function L0(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ne = { current: null },
  Oo = { transition: null },
  O0 = {
    ReactCurrentDispatcher: Ne,
    ReactCurrentBatchConfig: Oo,
    ReactCurrentOwner: Fu,
  };
function _p() {
  throw Error("act(...) is not supported in production builds of React.");
}
V.Children = {
  map: uo,
  forEach: function (e, t, n) {
    uo(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      uo(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      uo(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Bu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
V.Component = Fr;
V.Fragment = S0;
V.Profiler = C0;
V.PureComponent = Vu;
V.StrictMode = k0;
V.Suspense = j0;
V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O0;
V.act = _p;
V.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Np({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = Fu.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Mp.call(t, l) &&
        !Lp.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: qi, type: e.type, key: i, ref: o, props: r, _owner: s };
};
V.createContext = function (e) {
  return (
    (e = {
      $$typeof: P0,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: b0, _context: e }),
    (e.Consumer = e)
  );
};
V.createElement = Op;
V.createFactory = function (e) {
  var t = Op.bind(null, e);
  return (t.type = e), t;
};
V.createRef = function () {
  return { current: null };
};
V.forwardRef = function (e) {
  return { $$typeof: E0, render: e };
};
V.isValidElement = Bu;
V.lazy = function (e) {
  return { $$typeof: N0, _payload: { _status: -1, _result: e }, _init: L0 };
};
V.memo = function (e, t) {
  return { $$typeof: T0, type: e, compare: t === void 0 ? null : t };
};
V.startTransition = function (e) {
  var t = Oo.transition;
  Oo.transition = {};
  try {
    e();
  } finally {
    Oo.transition = t;
  }
};
V.unstable_act = _p;
V.useCallback = function (e, t) {
  return Ne.current.useCallback(e, t);
};
V.useContext = function (e) {
  return Ne.current.useContext(e);
};
V.useDebugValue = function () {};
V.useDeferredValue = function (e) {
  return Ne.current.useDeferredValue(e);
};
V.useEffect = function (e, t) {
  return Ne.current.useEffect(e, t);
};
V.useId = function () {
  return Ne.current.useId();
};
V.useImperativeHandle = function (e, t, n) {
  return Ne.current.useImperativeHandle(e, t, n);
};
V.useInsertionEffect = function (e, t) {
  return Ne.current.useInsertionEffect(e, t);
};
V.useLayoutEffect = function (e, t) {
  return Ne.current.useLayoutEffect(e, t);
};
V.useMemo = function (e, t) {
  return Ne.current.useMemo(e, t);
};
V.useReducer = function (e, t, n) {
  return Ne.current.useReducer(e, t, n);
};
V.useRef = function (e) {
  return Ne.current.useRef(e);
};
V.useState = function (e) {
  return Ne.current.useState(e);
};
V.useSyncExternalStore = function (e, t, n) {
  return Ne.current.useSyncExternalStore(e, t, n);
};
V.useTransition = function () {
  return Ne.current.useTransition();
};
V.version = "18.3.1";
jp.exports = V;
var k = jp.exports;
const Pe = x0(k),
  _0 = v0({ __proto__: null, default: Pe }, [k]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var D0 = k,
  I0 = Symbol.for("react.element"),
  V0 = Symbol.for("react.fragment"),
  z0 = Object.prototype.hasOwnProperty,
  F0 = D0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  B0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Dp(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) z0.call(t, r) && !B0.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: I0,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: F0.current,
  };
}
$s.Fragment = V0;
$s.jsx = Dp;
$s.jsxs = Dp;
Ep.exports = $s;
var f = Ep.exports,
  gl = {},
  Ip = { exports: {} },
  Ue = {},
  Vp = { exports: {} },
  zp = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(T, A) {
    var M = T.length;
    T.push(A);
    e: for (; 0 < M; ) {
      var I = (M - 1) >>> 1,
        G = T[I];
      if (0 < i(G, A)) (T[I] = A), (T[M] = G), (M = I);
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var A = T[0],
      M = T.pop();
    if (M !== A) {
      T[0] = M;
      e: for (var I = 0, G = T.length, bn = G >>> 1; I < bn; ) {
        var it = 2 * (I + 1) - 1,
          Wt = T[it],
          Ie = it + 1,
          Ct = T[Ie];
        if (0 > i(Wt, M))
          Ie < G && 0 > i(Ct, Wt)
            ? ((T[I] = Ct), (T[Ie] = M), (I = Ie))
            : ((T[I] = Wt), (T[it] = M), (I = it));
        else if (Ie < G && 0 > i(Ct, M)) (T[I] = Ct), (T[Ie] = M), (I = Ie);
        else break e;
      }
    }
    return A;
  }
  function i(T, A) {
    var M = T.sortIndex - A.sortIndex;
    return M !== 0 ? M : T.id - A.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    h = 3,
    y = !1,
    v = !1,
    x = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(T) {
    for (var A = n(u); A !== null; ) {
      if (A.callback === null) r(u);
      else if (A.startTime <= T)
        r(u), (A.sortIndex = A.expirationTime), t(l, A);
      else break;
      A = n(u);
    }
  }
  function w(T) {
    if (((x = !1), g(T), !v))
      if (n(l) !== null) (v = !0), rt(C);
      else {
        var A = n(u);
        A !== null && K(w, A.startTime - T);
      }
  }
  function C(T, A) {
    (v = !1), x && ((x = !1), m(E), (E = -1)), (y = !0);
    var M = h;
    try {
      for (
        g(A), d = n(l);
        d !== null && (!(d.expirationTime > A) || (T && !H()));

      ) {
        var I = d.callback;
        if (typeof I == "function") {
          (d.callback = null), (h = d.priorityLevel);
          var G = I(d.expirationTime <= A);
          (A = e.unstable_now()),
            typeof G == "function" ? (d.callback = G) : d === n(l) && r(l),
            g(A);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var bn = !0;
      else {
        var it = n(u);
        it !== null && K(w, it.startTime - A), (bn = !1);
      }
      return bn;
    } finally {
      (d = null), (h = M), (y = !1);
    }
  }
  var b = !1,
    P = null,
    E = -1,
    O = 5,
    R = -1;
  function H() {
    return !(e.unstable_now() - R < O);
  }
  function z() {
    if (P !== null) {
      var T = e.unstable_now();
      R = T;
      var A = !0;
      try {
        A = P(!0, T);
      } finally {
        A ? He() : ((b = !1), (P = null));
      }
    } else b = !1;
  }
  var He;
  if (typeof p == "function")
    He = function () {
      p(z);
    };
  else if (typeof MessageChannel < "u") {
    var Ke = new MessageChannel(),
      Cn = Ke.port2;
    (Ke.port1.onmessage = z),
      (He = function () {
        Cn.postMessage(null);
      });
  } else
    He = function () {
      S(z, 0);
    };
  function rt(T) {
    (P = T), b || ((b = !0), He());
  }
  function K(T, A) {
    E = S(function () {
      T(e.unstable_now());
    }, A);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (T) {
      T.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || y || ((v = !0), rt(C));
    }),
    (e.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (O = 0 < T ? Math.floor(1e3 / T) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (T) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = h;
      }
      var M = h;
      h = A;
      try {
        return T();
      } finally {
        h = M;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (T, A) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var M = h;
      h = T;
      try {
        return A();
      } finally {
        h = M;
      }
    }),
    (e.unstable_scheduleCallback = function (T, A, M) {
      var I = e.unstable_now();
      switch (
        (typeof M == "object" && M !== null
          ? ((M = M.delay), (M = typeof M == "number" && 0 < M ? I + M : I))
          : (M = I),
        T)
      ) {
        case 1:
          var G = -1;
          break;
        case 2:
          G = 250;
          break;
        case 5:
          G = 1073741823;
          break;
        case 4:
          G = 1e4;
          break;
        default:
          G = 5e3;
      }
      return (
        (G = M + G),
        (T = {
          id: c++,
          callback: A,
          priorityLevel: T,
          startTime: M,
          expirationTime: G,
          sortIndex: -1,
        }),
        M > I
          ? ((T.sortIndex = M),
            t(u, T),
            n(l) === null &&
              T === n(u) &&
              (x ? (m(E), (E = -1)) : (x = !0), K(w, M - I)))
          : ((T.sortIndex = G), t(l, T), v || y || ((v = !0), rt(C))),
        T
      );
    }),
    (e.unstable_shouldYield = H),
    (e.unstable_wrapCallback = function (T) {
      var A = h;
      return function () {
        var M = h;
        h = A;
        try {
          return T.apply(this, arguments);
        } finally {
          h = M;
        }
      };
    });
})(zp);
Vp.exports = zp;
var $0 = Vp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var W0 = k,
  $e = $0;
function j(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Fp = new Set(),
  Ti = {};
function Kn(e, t) {
  Pr(e, t), Pr(e + "Capture", t);
}
function Pr(e, t) {
  for (Ti[e] = t, e = 0; e < t.length; e++) Fp.add(t[e]);
}
var Vt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  yl = Object.prototype.hasOwnProperty,
  U0 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  kd = {},
  Cd = {};
function G0(e) {
  return yl.call(Cd, e)
    ? !0
    : yl.call(kd, e)
    ? !1
    : U0.test(e)
    ? (Cd[e] = !0)
    : ((kd[e] = !0), !1);
}
function H0(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function K0(e, t, n, r) {
  if (t === null || typeof t > "u" || H0(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ae(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var xe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    xe[e] = new Ae(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  xe[t] = new Ae(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  xe[e] = new Ae(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  xe[e] = new Ae(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    xe[e] = new Ae(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  xe[e] = new Ae(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  xe[e] = new Ae(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  xe[e] = new Ae(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  xe[e] = new Ae(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var $u = /[\-:]([a-z])/g;
function Wu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace($u, Wu);
    xe[t] = new Ae(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace($u, Wu);
    xe[t] = new Ae(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace($u, Wu);
  xe[t] = new Ae(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  xe[e] = new Ae(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
xe.xlinkHref = new Ae(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  xe[e] = new Ae(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Uu(e, t, n, r) {
  var i = xe.hasOwnProperty(t) ? xe[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (K0(t, n, i, r) && (n = null),
    r || i === null
      ? G0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var $t = W0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  co = Symbol.for("react.element"),
  er = Symbol.for("react.portal"),
  tr = Symbol.for("react.fragment"),
  Gu = Symbol.for("react.strict_mode"),
  vl = Symbol.for("react.profiler"),
  Bp = Symbol.for("react.provider"),
  $p = Symbol.for("react.context"),
  Hu = Symbol.for("react.forward_ref"),
  xl = Symbol.for("react.suspense"),
  wl = Symbol.for("react.suspense_list"),
  Ku = Symbol.for("react.memo"),
  qt = Symbol.for("react.lazy"),
  Wp = Symbol.for("react.offscreen"),
  bd = Symbol.iterator;
function Yr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (bd && e[bd]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var re = Object.assign,
  ka;
function ai(e) {
  if (ka === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ka = (t && t[1]) || "";
    }
  return (
    `
` +
    ka +
    e
  );
}
var Ca = !1;
function ba(e, t) {
  if (!e || Ca) return "";
  Ca = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          a = o.length - 1;
        1 <= s && 0 <= a && i[s] !== o[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (i[s] !== o[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || i[s] !== o[a])) {
                var l =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (Ca = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? ai(e) : "";
}
function Y0(e) {
  switch (e.tag) {
    case 5:
      return ai(e.type);
    case 16:
      return ai("Lazy");
    case 13:
      return ai("Suspense");
    case 19:
      return ai("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = ba(e.type, !1)), e;
    case 11:
      return (e = ba(e.type.render, !1)), e;
    case 1:
      return (e = ba(e.type, !0)), e;
    default:
      return "";
  }
}
function Sl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case tr:
      return "Fragment";
    case er:
      return "Portal";
    case vl:
      return "Profiler";
    case Gu:
      return "StrictMode";
    case xl:
      return "Suspense";
    case wl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case $p:
        return (e.displayName || "Context") + ".Consumer";
      case Bp:
        return (e._context.displayName || "Context") + ".Provider";
      case Hu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ku:
        return (
          (t = e.displayName || null), t !== null ? t : Sl(e.type) || "Memo"
        );
      case qt:
        (t = e._payload), (e = e._init);
        try {
          return Sl(e(t));
        } catch {}
    }
  return null;
}
function Q0(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Sl(t);
    case 8:
      return t === Gu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function pn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Up(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function X0(e) {
  var t = Up(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function fo(e) {
  e._valueTracker || (e._valueTracker = X0(e));
}
function Gp(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Up(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ts(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function kl(e, t) {
  var n = t.checked;
  return re({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Pd(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = pn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Hp(e, t) {
  (t = t.checked), t != null && Uu(e, "checked", t, !1);
}
function Cl(e, t) {
  Hp(e, t);
  var n = pn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? bl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && bl(e, t.type, pn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ed(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function bl(e, t, n) {
  (t !== "number" || ts(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var li = Array.isArray;
function vr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + pn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Pl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(j(91));
  return re({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function jd(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(j(92));
      if (li(n)) {
        if (1 < n.length) throw Error(j(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: pn(n) };
}
function Kp(e, t) {
  var n = pn(t.value),
    r = pn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Td(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Yp(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function El(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Yp(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ho,
  Qp = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ho = ho || document.createElement("div"),
          ho.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ho.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ni(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var pi = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  q0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(pi).forEach(function (e) {
  q0.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (pi[t] = pi[e]);
  });
});
function Xp(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (pi.hasOwnProperty(e) && pi[e])
    ? ("" + t).trim()
    : t + "px";
}
function qp(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Xp(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Z0 = re(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function jl(e, t) {
  if (t) {
    if (Z0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(j(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(j(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(j(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(j(62));
  }
}
function Tl(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Nl = null;
function Yu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Al = null,
  xr = null,
  wr = null;
function Nd(e) {
  if ((e = eo(e))) {
    if (typeof Al != "function") throw Error(j(280));
    var t = e.stateNode;
    t && ((t = Ks(t)), Al(e.stateNode, e.type, t));
  }
}
function Zp(e) {
  xr ? (wr ? wr.push(e) : (wr = [e])) : (xr = e);
}
function Jp() {
  if (xr) {
    var e = xr,
      t = wr;
    if (((wr = xr = null), Nd(e), t)) for (e = 0; e < t.length; e++) Nd(t[e]);
  }
}
function em(e, t) {
  return e(t);
}
function tm() {}
var Pa = !1;
function nm(e, t, n) {
  if (Pa) return e(t, n);
  Pa = !0;
  try {
    return em(e, t, n);
  } finally {
    (Pa = !1), (xr !== null || wr !== null) && (tm(), Jp());
  }
}
function Ai(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ks(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(j(231, t, typeof n));
  return n;
}
var Rl = !1;
if (Vt)
  try {
    var Qr = {};
    Object.defineProperty(Qr, "passive", {
      get: function () {
        Rl = !0;
      },
    }),
      window.addEventListener("test", Qr, Qr),
      window.removeEventListener("test", Qr, Qr);
  } catch {
    Rl = !1;
  }
function J0(e, t, n, r, i, o, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var mi = !1,
  ns = null,
  rs = !1,
  Ml = null,
  e1 = {
    onError: function (e) {
      (mi = !0), (ns = e);
    },
  };
function t1(e, t, n, r, i, o, s, a, l) {
  (mi = !1), (ns = null), J0.apply(e1, arguments);
}
function n1(e, t, n, r, i, o, s, a, l) {
  if ((t1.apply(this, arguments), mi)) {
    if (mi) {
      var u = ns;
      (mi = !1), (ns = null);
    } else throw Error(j(198));
    rs || ((rs = !0), (Ml = u));
  }
}
function Yn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function rm(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Ad(e) {
  if (Yn(e) !== e) throw Error(j(188));
}
function r1(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Yn(e)), t === null)) throw Error(j(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return Ad(i), e;
        if (o === r) return Ad(i), t;
        o = o.sibling;
      }
      throw Error(j(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, a = i.child; a; ) {
        if (a === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (a === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = o.child; a; ) {
          if (a === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (a === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(j(189));
      }
    }
    if (n.alternate !== r) throw Error(j(190));
  }
  if (n.tag !== 3) throw Error(j(188));
  return n.stateNode.current === n ? e : t;
}
function im(e) {
  return (e = r1(e)), e !== null ? om(e) : null;
}
function om(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = om(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var sm = $e.unstable_scheduleCallback,
  Rd = $e.unstable_cancelCallback,
  i1 = $e.unstable_shouldYield,
  o1 = $e.unstable_requestPaint,
  ae = $e.unstable_now,
  s1 = $e.unstable_getCurrentPriorityLevel,
  Qu = $e.unstable_ImmediatePriority,
  am = $e.unstable_UserBlockingPriority,
  is = $e.unstable_NormalPriority,
  a1 = $e.unstable_LowPriority,
  lm = $e.unstable_IdlePriority,
  Ws = null,
  vt = null;
function l1(e) {
  if (vt && typeof vt.onCommitFiberRoot == "function")
    try {
      vt.onCommitFiberRoot(Ws, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var ct = Math.clz32 ? Math.clz32 : d1,
  u1 = Math.log,
  c1 = Math.LN2;
function d1(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((u1(e) / c1) | 0)) | 0;
}
var po = 64,
  mo = 4194304;
function ui(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function os(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~i;
    a !== 0 ? (r = ui(a)) : ((o &= s), o !== 0 && (r = ui(o)));
  } else (s = n & ~i), s !== 0 ? (r = ui(s)) : o !== 0 && (r = ui(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - ct(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function f1(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function h1(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - ct(o),
      a = 1 << s,
      l = i[s];
    l === -1
      ? (!(a & n) || a & r) && (i[s] = f1(a, t))
      : l <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function Ll(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function um() {
  var e = po;
  return (po <<= 1), !(po & 4194240) && (po = 64), e;
}
function Ea(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Zi(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - ct(t)),
    (e[t] = n);
}
function p1(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - ct(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function Xu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - ct(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var U = 0;
function cm(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var dm,
  qu,
  fm,
  hm,
  pm,
  Ol = !1,
  go = [],
  on = null,
  sn = null,
  an = null,
  Ri = new Map(),
  Mi = new Map(),
  Jt = [],
  m1 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Md(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      on = null;
      break;
    case "dragenter":
    case "dragleave":
      sn = null;
      break;
    case "mouseover":
    case "mouseout":
      an = null;
      break;
    case "pointerover":
    case "pointerout":
      Ri.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Mi.delete(t.pointerId);
  }
}
function Xr(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = eo(t)), t !== null && qu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function g1(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (on = Xr(on, e, t, n, r, i)), !0;
    case "dragenter":
      return (sn = Xr(sn, e, t, n, r, i)), !0;
    case "mouseover":
      return (an = Xr(an, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return Ri.set(o, Xr(Ri.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), Mi.set(o, Xr(Mi.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function mm(e) {
  var t = Rn(e.target);
  if (t !== null) {
    var n = Yn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = rm(n)), t !== null)) {
          (e.blockedOn = t),
            pm(e.priority, function () {
              fm(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function _o(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = _l(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Nl = r), n.target.dispatchEvent(r), (Nl = null);
    } else return (t = eo(n)), t !== null && qu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ld(e, t, n) {
  _o(e) && n.delete(t);
}
function y1() {
  (Ol = !1),
    on !== null && _o(on) && (on = null),
    sn !== null && _o(sn) && (sn = null),
    an !== null && _o(an) && (an = null),
    Ri.forEach(Ld),
    Mi.forEach(Ld);
}
function qr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ol ||
      ((Ol = !0),
      $e.unstable_scheduleCallback($e.unstable_NormalPriority, y1)));
}
function Li(e) {
  function t(i) {
    return qr(i, e);
  }
  if (0 < go.length) {
    qr(go[0], e);
    for (var n = 1; n < go.length; n++) {
      var r = go[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    on !== null && qr(on, e),
      sn !== null && qr(sn, e),
      an !== null && qr(an, e),
      Ri.forEach(t),
      Mi.forEach(t),
      n = 0;
    n < Jt.length;
    n++
  )
    (r = Jt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Jt.length && ((n = Jt[0]), n.blockedOn === null); )
    mm(n), n.blockedOn === null && Jt.shift();
}
var Sr = $t.ReactCurrentBatchConfig,
  ss = !0;
function v1(e, t, n, r) {
  var i = U,
    o = Sr.transition;
  Sr.transition = null;
  try {
    (U = 1), Zu(e, t, n, r);
  } finally {
    (U = i), (Sr.transition = o);
  }
}
function x1(e, t, n, r) {
  var i = U,
    o = Sr.transition;
  Sr.transition = null;
  try {
    (U = 4), Zu(e, t, n, r);
  } finally {
    (U = i), (Sr.transition = o);
  }
}
function Zu(e, t, n, r) {
  if (ss) {
    var i = _l(e, t, n, r);
    if (i === null) Da(e, t, r, as, n), Md(e, r);
    else if (g1(i, e, t, n, r)) r.stopPropagation();
    else if ((Md(e, r), t & 4 && -1 < m1.indexOf(e))) {
      for (; i !== null; ) {
        var o = eo(i);
        if (
          (o !== null && dm(o),
          (o = _l(e, t, n, r)),
          o === null && Da(e, t, r, as, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Da(e, t, r, null, n);
  }
}
var as = null;
function _l(e, t, n, r) {
  if (((as = null), (e = Yu(r)), (e = Rn(e)), e !== null))
    if (((t = Yn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = rm(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (as = e), null;
}
function gm(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (s1()) {
        case Qu:
          return 1;
        case am:
          return 4;
        case is:
        case a1:
          return 16;
        case lm:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var tn = null,
  Ju = null,
  Do = null;
function ym() {
  if (Do) return Do;
  var e,
    t = Ju,
    n = t.length,
    r,
    i = "value" in tn ? tn.value : tn.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (Do = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Io(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function yo() {
  return !0;
}
function Od() {
  return !1;
}
function Ge(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? yo
        : Od),
      (this.isPropagationStopped = Od),
      this
    );
  }
  return (
    re(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = yo));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = yo));
      },
      persist: function () {},
      isPersistent: yo,
    }),
    t
  );
}
var Br = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ec = Ge(Br),
  Ji = re({}, Br, { view: 0, detail: 0 }),
  w1 = Ge(Ji),
  ja,
  Ta,
  Zr,
  Us = re({}, Ji, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: tc,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Zr &&
            (Zr && e.type === "mousemove"
              ? ((ja = e.screenX - Zr.screenX), (Ta = e.screenY - Zr.screenY))
              : (Ta = ja = 0),
            (Zr = e)),
          ja);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ta;
    },
  }),
  _d = Ge(Us),
  S1 = re({}, Us, { dataTransfer: 0 }),
  k1 = Ge(S1),
  C1 = re({}, Ji, { relatedTarget: 0 }),
  Na = Ge(C1),
  b1 = re({}, Br, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  P1 = Ge(b1),
  E1 = re({}, Br, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  j1 = Ge(E1),
  T1 = re({}, Br, { data: 0 }),
  Dd = Ge(T1),
  N1 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  A1 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  R1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function M1(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = R1[e]) ? !!t[e] : !1;
}
function tc() {
  return M1;
}
var L1 = re({}, Ji, {
    key: function (e) {
      if (e.key) {
        var t = N1[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Io(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? A1[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: tc,
    charCode: function (e) {
      return e.type === "keypress" ? Io(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Io(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  O1 = Ge(L1),
  _1 = re({}, Us, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Id = Ge(_1),
  D1 = re({}, Ji, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: tc,
  }),
  I1 = Ge(D1),
  V1 = re({}, Br, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  z1 = Ge(V1),
  F1 = re({}, Us, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  B1 = Ge(F1),
  $1 = [9, 13, 27, 32],
  nc = Vt && "CompositionEvent" in window,
  gi = null;
Vt && "documentMode" in document && (gi = document.documentMode);
var W1 = Vt && "TextEvent" in window && !gi,
  vm = Vt && (!nc || (gi && 8 < gi && 11 >= gi)),
  Vd = " ",
  zd = !1;
function xm(e, t) {
  switch (e) {
    case "keyup":
      return $1.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function wm(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var nr = !1;
function U1(e, t) {
  switch (e) {
    case "compositionend":
      return wm(t);
    case "keypress":
      return t.which !== 32 ? null : ((zd = !0), Vd);
    case "textInput":
      return (e = t.data), e === Vd && zd ? null : e;
    default:
      return null;
  }
}
function G1(e, t) {
  if (nr)
    return e === "compositionend" || (!nc && xm(e, t))
      ? ((e = ym()), (Do = Ju = tn = null), (nr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return vm && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var H1 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Fd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!H1[e.type] : t === "textarea";
}
function Sm(e, t, n, r) {
  Zp(r),
    (t = ls(t, "onChange")),
    0 < t.length &&
      ((n = new ec("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var yi = null,
  Oi = null;
function K1(e) {
  Mm(e, 0);
}
function Gs(e) {
  var t = or(e);
  if (Gp(t)) return e;
}
function Y1(e, t) {
  if (e === "change") return t;
}
var km = !1;
if (Vt) {
  var Aa;
  if (Vt) {
    var Ra = "oninput" in document;
    if (!Ra) {
      var Bd = document.createElement("div");
      Bd.setAttribute("oninput", "return;"),
        (Ra = typeof Bd.oninput == "function");
    }
    Aa = Ra;
  } else Aa = !1;
  km = Aa && (!document.documentMode || 9 < document.documentMode);
}
function $d() {
  yi && (yi.detachEvent("onpropertychange", Cm), (Oi = yi = null));
}
function Cm(e) {
  if (e.propertyName === "value" && Gs(Oi)) {
    var t = [];
    Sm(t, Oi, e, Yu(e)), nm(K1, t);
  }
}
function Q1(e, t, n) {
  e === "focusin"
    ? ($d(), (yi = t), (Oi = n), yi.attachEvent("onpropertychange", Cm))
    : e === "focusout" && $d();
}
function X1(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Gs(Oi);
}
function q1(e, t) {
  if (e === "click") return Gs(t);
}
function Z1(e, t) {
  if (e === "input" || e === "change") return Gs(t);
}
function J1(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ht = typeof Object.is == "function" ? Object.is : J1;
function _i(e, t) {
  if (ht(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!yl.call(t, i) || !ht(e[i], t[i])) return !1;
  }
  return !0;
}
function Wd(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ud(e, t) {
  var n = Wd(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Wd(n);
  }
}
function bm(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? bm(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Pm() {
  for (var e = window, t = ts(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ts(e.document);
  }
  return t;
}
function rc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function ex(e) {
  var t = Pm(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    bm(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && rc(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Ud(n, o));
        var s = Ud(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var tx = Vt && "documentMode" in document && 11 >= document.documentMode,
  rr = null,
  Dl = null,
  vi = null,
  Il = !1;
function Gd(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Il ||
    rr == null ||
    rr !== ts(r) ||
    ((r = rr),
    "selectionStart" in r && rc(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (vi && _i(vi, r)) ||
      ((vi = r),
      (r = ls(Dl, "onSelect")),
      0 < r.length &&
        ((t = new ec("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = rr))));
}
function vo(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var ir = {
    animationend: vo("Animation", "AnimationEnd"),
    animationiteration: vo("Animation", "AnimationIteration"),
    animationstart: vo("Animation", "AnimationStart"),
    transitionend: vo("Transition", "TransitionEnd"),
  },
  Ma = {},
  Em = {};
Vt &&
  ((Em = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete ir.animationend.animation,
    delete ir.animationiteration.animation,
    delete ir.animationstart.animation),
  "TransitionEvent" in window || delete ir.transitionend.transition);
function Hs(e) {
  if (Ma[e]) return Ma[e];
  if (!ir[e]) return e;
  var t = ir[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Em) return (Ma[e] = t[n]);
  return e;
}
var jm = Hs("animationend"),
  Tm = Hs("animationiteration"),
  Nm = Hs("animationstart"),
  Am = Hs("transitionend"),
  Rm = new Map(),
  Hd =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function vn(e, t) {
  Rm.set(e, t), Kn(t, [e]);
}
for (var La = 0; La < Hd.length; La++) {
  var Oa = Hd[La],
    nx = Oa.toLowerCase(),
    rx = Oa[0].toUpperCase() + Oa.slice(1);
  vn(nx, "on" + rx);
}
vn(jm, "onAnimationEnd");
vn(Tm, "onAnimationIteration");
vn(Nm, "onAnimationStart");
vn("dblclick", "onDoubleClick");
vn("focusin", "onFocus");
vn("focusout", "onBlur");
vn(Am, "onTransitionEnd");
Pr("onMouseEnter", ["mouseout", "mouseover"]);
Pr("onMouseLeave", ["mouseout", "mouseover"]);
Pr("onPointerEnter", ["pointerout", "pointerover"]);
Pr("onPointerLeave", ["pointerout", "pointerover"]);
Kn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Kn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Kn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Kn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Kn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Kn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var ci =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  ix = new Set("cancel close invalid load scroll toggle".split(" ").concat(ci));
function Kd(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), n1(r, t, void 0, e), (e.currentTarget = null);
}
function Mm(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== o && i.isPropagationStopped())) break e;
          Kd(i, a, u), (o = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== o && i.isPropagationStopped())
          )
            break e;
          Kd(i, a, u), (o = l);
        }
    }
  }
  if (rs) throw ((e = Ml), (rs = !1), (Ml = null), e);
}
function X(e, t) {
  var n = t[$l];
  n === void 0 && (n = t[$l] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Lm(t, e, 2, !1), n.add(r));
}
function _a(e, t, n) {
  var r = 0;
  t && (r |= 4), Lm(n, e, r, t);
}
var xo = "_reactListening" + Math.random().toString(36).slice(2);
function Di(e) {
  if (!e[xo]) {
    (e[xo] = !0),
      Fp.forEach(function (n) {
        n !== "selectionchange" && (ix.has(n) || _a(n, !1, e), _a(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[xo] || ((t[xo] = !0), _a("selectionchange", !1, t));
  }
}
function Lm(e, t, n, r) {
  switch (gm(t)) {
    case 1:
      var i = v1;
      break;
    case 4:
      i = x1;
      break;
    default:
      i = Zu;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Rl ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Da(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = Rn(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = o = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  nm(function () {
    var u = o,
      c = Yu(n),
      d = [];
    e: {
      var h = Rm.get(e);
      if (h !== void 0) {
        var y = ec,
          v = e;
        switch (e) {
          case "keypress":
            if (Io(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = O1;
            break;
          case "focusin":
            (v = "focus"), (y = Na);
            break;
          case "focusout":
            (v = "blur"), (y = Na);
            break;
          case "beforeblur":
          case "afterblur":
            y = Na;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = _d;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = k1;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = I1;
            break;
          case jm:
          case Tm:
          case Nm:
            y = P1;
            break;
          case Am:
            y = z1;
            break;
          case "scroll":
            y = w1;
            break;
          case "wheel":
            y = B1;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = j1;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Id;
        }
        var x = (t & 4) !== 0,
          S = !x && e === "scroll",
          m = x ? (h !== null ? h + "Capture" : null) : h;
        x = [];
        for (var p = u, g; p !== null; ) {
          g = p;
          var w = g.stateNode;
          if (
            (g.tag === 5 &&
              w !== null &&
              ((g = w),
              m !== null && ((w = Ai(p, m)), w != null && x.push(Ii(p, w, g)))),
            S)
          )
            break;
          p = p.return;
        }
        0 < x.length &&
          ((h = new y(h, v, null, n, c)), d.push({ event: h, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          h &&
            n !== Nl &&
            (v = n.relatedTarget || n.fromElement) &&
            (Rn(v) || v[zt]))
        )
          break e;
        if (
          (y || h) &&
          ((h =
            c.window === c
              ? c
              : (h = c.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          y
            ? ((v = n.relatedTarget || n.toElement),
              (y = u),
              (v = v ? Rn(v) : null),
              v !== null &&
                ((S = Yn(v)), v !== S || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((y = null), (v = u)),
          y !== v)
        ) {
          if (
            ((x = _d),
            (w = "onMouseLeave"),
            (m = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = Id),
              (w = "onPointerLeave"),
              (m = "onPointerEnter"),
              (p = "pointer")),
            (S = y == null ? h : or(y)),
            (g = v == null ? h : or(v)),
            (h = new x(w, p + "leave", y, n, c)),
            (h.target = S),
            (h.relatedTarget = g),
            (w = null),
            Rn(c) === u &&
              ((x = new x(m, p + "enter", v, n, c)),
              (x.target = g),
              (x.relatedTarget = S),
              (w = x)),
            (S = w),
            y && v)
          )
            t: {
              for (x = y, m = v, p = 0, g = x; g; g = Zn(g)) p++;
              for (g = 0, w = m; w; w = Zn(w)) g++;
              for (; 0 < p - g; ) (x = Zn(x)), p--;
              for (; 0 < g - p; ) (m = Zn(m)), g--;
              for (; p--; ) {
                if (x === m || (m !== null && x === m.alternate)) break t;
                (x = Zn(x)), (m = Zn(m));
              }
              x = null;
            }
          else x = null;
          y !== null && Yd(d, h, y, x, !1),
            v !== null && S !== null && Yd(d, S, v, x, !0);
        }
      }
      e: {
        if (
          ((h = u ? or(u) : window),
          (y = h.nodeName && h.nodeName.toLowerCase()),
          y === "select" || (y === "input" && h.type === "file"))
        )
          var C = Y1;
        else if (Fd(h))
          if (km) C = Z1;
          else {
            C = X1;
            var b = Q1;
          }
        else
          (y = h.nodeName) &&
            y.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (C = q1);
        if (C && (C = C(e, u))) {
          Sm(d, C, n, c);
          break e;
        }
        b && b(e, h, u),
          e === "focusout" &&
            (b = h._wrapperState) &&
            b.controlled &&
            h.type === "number" &&
            bl(h, "number", h.value);
      }
      switch (((b = u ? or(u) : window), e)) {
        case "focusin":
          (Fd(b) || b.contentEditable === "true") &&
            ((rr = b), (Dl = u), (vi = null));
          break;
        case "focusout":
          vi = Dl = rr = null;
          break;
        case "mousedown":
          Il = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Il = !1), Gd(d, n, c);
          break;
        case "selectionchange":
          if (tx) break;
        case "keydown":
        case "keyup":
          Gd(d, n, c);
      }
      var P;
      if (nc)
        e: {
          switch (e) {
            case "compositionstart":
              var E = "onCompositionStart";
              break e;
            case "compositionend":
              E = "onCompositionEnd";
              break e;
            case "compositionupdate":
              E = "onCompositionUpdate";
              break e;
          }
          E = void 0;
        }
      else
        nr
          ? xm(e, n) && (E = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E &&
        (vm &&
          n.locale !== "ko" &&
          (nr || E !== "onCompositionStart"
            ? E === "onCompositionEnd" && nr && (P = ym())
            : ((tn = c),
              (Ju = "value" in tn ? tn.value : tn.textContent),
              (nr = !0))),
        (b = ls(u, E)),
        0 < b.length &&
          ((E = new Dd(E, e, null, n, c)),
          d.push({ event: E, listeners: b }),
          P ? (E.data = P) : ((P = wm(n)), P !== null && (E.data = P)))),
        (P = W1 ? U1(e, n) : G1(e, n)) &&
          ((u = ls(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Dd("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = P)));
    }
    Mm(d, t);
  });
}
function Ii(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ls(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Ai(e, n)),
      o != null && r.unshift(Ii(e, o, i)),
      (o = Ai(e, t)),
      o != null && r.push(Ii(e, o, i))),
      (e = e.return);
  }
  return r;
}
function Zn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Yd(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((l = Ai(n, o)), l != null && s.unshift(Ii(n, l, a)))
        : i || ((l = Ai(n, o)), l != null && s.push(Ii(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var ox = /\r\n?/g,
  sx = /\u0000|\uFFFD/g;
function Qd(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      ox,
      `
`
    )
    .replace(sx, "");
}
function wo(e, t, n) {
  if (((t = Qd(t)), Qd(e) !== t && n)) throw Error(j(425));
}
function us() {}
var Vl = null,
  zl = null;
function Fl(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Bl = typeof setTimeout == "function" ? setTimeout : void 0,
  ax = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Xd = typeof Promise == "function" ? Promise : void 0,
  lx =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Xd < "u"
      ? function (e) {
          return Xd.resolve(null).then(e).catch(ux);
        }
      : Bl;
function ux(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ia(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Li(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Li(t);
}
function ln(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function qd(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var $r = Math.random().toString(36).slice(2),
  yt = "__reactFiber$" + $r,
  Vi = "__reactProps$" + $r,
  zt = "__reactContainer$" + $r,
  $l = "__reactEvents$" + $r,
  cx = "__reactListeners$" + $r,
  dx = "__reactHandles$" + $r;
function Rn(e) {
  var t = e[yt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[zt] || n[yt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = qd(e); e !== null; ) {
          if ((n = e[yt])) return n;
          e = qd(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function eo(e) {
  return (
    (e = e[yt] || e[zt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function or(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(j(33));
}
function Ks(e) {
  return e[Vi] || null;
}
var Wl = [],
  sr = -1;
function xn(e) {
  return { current: e };
}
function Z(e) {
  0 > sr || ((e.current = Wl[sr]), (Wl[sr] = null), sr--);
}
function Y(e, t) {
  sr++, (Wl[sr] = e.current), (e.current = t);
}
var mn = {},
  Ee = xn(mn),
  Oe = xn(!1),
  Bn = mn;
function Er(e, t) {
  var n = e.type.contextTypes;
  if (!n) return mn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function _e(e) {
  return (e = e.childContextTypes), e != null;
}
function cs() {
  Z(Oe), Z(Ee);
}
function Zd(e, t, n) {
  if (Ee.current !== mn) throw Error(j(168));
  Y(Ee, t), Y(Oe, n);
}
function Om(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(j(108, Q0(e) || "Unknown", i));
  return re({}, n, r);
}
function ds(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || mn),
    (Bn = Ee.current),
    Y(Ee, e),
    Y(Oe, Oe.current),
    !0
  );
}
function Jd(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(j(169));
  n
    ? ((e = Om(e, t, Bn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Z(Oe),
      Z(Ee),
      Y(Ee, e))
    : Z(Oe),
    Y(Oe, n);
}
var jt = null,
  Ys = !1,
  Va = !1;
function _m(e) {
  jt === null ? (jt = [e]) : jt.push(e);
}
function fx(e) {
  (Ys = !0), _m(e);
}
function wn() {
  if (!Va && jt !== null) {
    Va = !0;
    var e = 0,
      t = U;
    try {
      var n = jt;
      for (U = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (jt = null), (Ys = !1);
    } catch (i) {
      throw (jt !== null && (jt = jt.slice(e + 1)), sm(Qu, wn), i);
    } finally {
      (U = t), (Va = !1);
    }
  }
  return null;
}
var ar = [],
  lr = 0,
  fs = null,
  hs = 0,
  Xe = [],
  qe = 0,
  $n = null,
  Nt = 1,
  At = "";
function jn(e, t) {
  (ar[lr++] = hs), (ar[lr++] = fs), (fs = e), (hs = t);
}
function Dm(e, t, n) {
  (Xe[qe++] = Nt), (Xe[qe++] = At), (Xe[qe++] = $n), ($n = e);
  var r = Nt;
  e = At;
  var i = 32 - ct(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - ct(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (Nt = (1 << (32 - ct(t) + i)) | (n << i) | r),
      (At = o + e);
  } else (Nt = (1 << o) | (n << i) | r), (At = e);
}
function ic(e) {
  e.return !== null && (jn(e, 1), Dm(e, 1, 0));
}
function oc(e) {
  for (; e === fs; )
    (fs = ar[--lr]), (ar[lr] = null), (hs = ar[--lr]), (ar[lr] = null);
  for (; e === $n; )
    ($n = Xe[--qe]),
      (Xe[qe] = null),
      (At = Xe[--qe]),
      (Xe[qe] = null),
      (Nt = Xe[--qe]),
      (Xe[qe] = null);
}
var Be = null,
  Fe = null,
  J = !1,
  ut = null;
function Im(e, t) {
  var n = Ze(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ef(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Be = e), (Fe = ln(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Be = e), (Fe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = $n !== null ? { id: Nt, overflow: At } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ze(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Be = e),
            (Fe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ul(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Gl(e) {
  if (J) {
    var t = Fe;
    if (t) {
      var n = t;
      if (!ef(e, t)) {
        if (Ul(e)) throw Error(j(418));
        t = ln(n.nextSibling);
        var r = Be;
        t && ef(e, t)
          ? Im(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (J = !1), (Be = e));
      }
    } else {
      if (Ul(e)) throw Error(j(418));
      (e.flags = (e.flags & -4097) | 2), (J = !1), (Be = e);
    }
  }
}
function tf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Be = e;
}
function So(e) {
  if (e !== Be) return !1;
  if (!J) return tf(e), (J = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Fl(e.type, e.memoizedProps))),
    t && (t = Fe))
  ) {
    if (Ul(e)) throw (Vm(), Error(j(418)));
    for (; t; ) Im(e, t), (t = ln(t.nextSibling));
  }
  if ((tf(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(j(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Fe = ln(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Fe = null;
    }
  } else Fe = Be ? ln(e.stateNode.nextSibling) : null;
  return !0;
}
function Vm() {
  for (var e = Fe; e; ) e = ln(e.nextSibling);
}
function jr() {
  (Fe = Be = null), (J = !1);
}
function sc(e) {
  ut === null ? (ut = [e]) : ut.push(e);
}
var hx = $t.ReactCurrentBatchConfig;
function Jr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(j(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(j(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var a = i.refs;
            s === null ? delete a[o] : (a[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(j(284));
    if (!n._owner) throw Error(j(290, e));
  }
  return e;
}
function ko(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      j(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function nf(e) {
  var t = e._init;
  return t(e._payload);
}
function zm(e) {
  function t(m, p) {
    if (e) {
      var g = m.deletions;
      g === null ? ((m.deletions = [p]), (m.flags |= 16)) : g.push(p);
    }
  }
  function n(m, p) {
    if (!e) return null;
    for (; p !== null; ) t(m, p), (p = p.sibling);
    return null;
  }
  function r(m, p) {
    for (m = new Map(); p !== null; )
      p.key !== null ? m.set(p.key, p) : m.set(p.index, p), (p = p.sibling);
    return m;
  }
  function i(m, p) {
    return (m = fn(m, p)), (m.index = 0), (m.sibling = null), m;
  }
  function o(m, p, g) {
    return (
      (m.index = g),
      e
        ? ((g = m.alternate),
          g !== null
            ? ((g = g.index), g < p ? ((m.flags |= 2), p) : g)
            : ((m.flags |= 2), p))
        : ((m.flags |= 1048576), p)
    );
  }
  function s(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, p, g, w) {
    return p === null || p.tag !== 6
      ? ((p = Ga(g, m.mode, w)), (p.return = m), p)
      : ((p = i(p, g)), (p.return = m), p);
  }
  function l(m, p, g, w) {
    var C = g.type;
    return C === tr
      ? c(m, p, g.props.children, w, g.key)
      : p !== null &&
        (p.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === qt &&
            nf(C) === p.type))
      ? ((w = i(p, g.props)), (w.ref = Jr(m, p, g)), (w.return = m), w)
      : ((w = Uo(g.type, g.key, g.props, null, m.mode, w)),
        (w.ref = Jr(m, p, g)),
        (w.return = m),
        w);
  }
  function u(m, p, g, w) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== g.containerInfo ||
      p.stateNode.implementation !== g.implementation
      ? ((p = Ha(g, m.mode, w)), (p.return = m), p)
      : ((p = i(p, g.children || [])), (p.return = m), p);
  }
  function c(m, p, g, w, C) {
    return p === null || p.tag !== 7
      ? ((p = In(g, m.mode, w, C)), (p.return = m), p)
      : ((p = i(p, g)), (p.return = m), p);
  }
  function d(m, p, g) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = Ga("" + p, m.mode, g)), (p.return = m), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case co:
          return (
            (g = Uo(p.type, p.key, p.props, null, m.mode, g)),
            (g.ref = Jr(m, null, p)),
            (g.return = m),
            g
          );
        case er:
          return (p = Ha(p, m.mode, g)), (p.return = m), p;
        case qt:
          var w = p._init;
          return d(m, w(p._payload), g);
      }
      if (li(p) || Yr(p))
        return (p = In(p, m.mode, g, null)), (p.return = m), p;
      ko(m, p);
    }
    return null;
  }
  function h(m, p, g, w) {
    var C = p !== null ? p.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return C !== null ? null : a(m, p, "" + g, w);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case co:
          return g.key === C ? l(m, p, g, w) : null;
        case er:
          return g.key === C ? u(m, p, g, w) : null;
        case qt:
          return (C = g._init), h(m, p, C(g._payload), w);
      }
      if (li(g) || Yr(g)) return C !== null ? null : c(m, p, g, w, null);
      ko(m, g);
    }
    return null;
  }
  function y(m, p, g, w, C) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (m = m.get(g) || null), a(p, m, "" + w, C);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case co:
          return (m = m.get(w.key === null ? g : w.key) || null), l(p, m, w, C);
        case er:
          return (m = m.get(w.key === null ? g : w.key) || null), u(p, m, w, C);
        case qt:
          var b = w._init;
          return y(m, p, g, b(w._payload), C);
      }
      if (li(w) || Yr(w)) return (m = m.get(g) || null), c(p, m, w, C, null);
      ko(p, w);
    }
    return null;
  }
  function v(m, p, g, w) {
    for (
      var C = null, b = null, P = p, E = (p = 0), O = null;
      P !== null && E < g.length;
      E++
    ) {
      P.index > E ? ((O = P), (P = null)) : (O = P.sibling);
      var R = h(m, P, g[E], w);
      if (R === null) {
        P === null && (P = O);
        break;
      }
      e && P && R.alternate === null && t(m, P),
        (p = o(R, p, E)),
        b === null ? (C = R) : (b.sibling = R),
        (b = R),
        (P = O);
    }
    if (E === g.length) return n(m, P), J && jn(m, E), C;
    if (P === null) {
      for (; E < g.length; E++)
        (P = d(m, g[E], w)),
          P !== null &&
            ((p = o(P, p, E)), b === null ? (C = P) : (b.sibling = P), (b = P));
      return J && jn(m, E), C;
    }
    for (P = r(m, P); E < g.length; E++)
      (O = y(P, m, E, g[E], w)),
        O !== null &&
          (e && O.alternate !== null && P.delete(O.key === null ? E : O.key),
          (p = o(O, p, E)),
          b === null ? (C = O) : (b.sibling = O),
          (b = O));
    return (
      e &&
        P.forEach(function (H) {
          return t(m, H);
        }),
      J && jn(m, E),
      C
    );
  }
  function x(m, p, g, w) {
    var C = Yr(g);
    if (typeof C != "function") throw Error(j(150));
    if (((g = C.call(g)), g == null)) throw Error(j(151));
    for (
      var b = (C = null), P = p, E = (p = 0), O = null, R = g.next();
      P !== null && !R.done;
      E++, R = g.next()
    ) {
      P.index > E ? ((O = P), (P = null)) : (O = P.sibling);
      var H = h(m, P, R.value, w);
      if (H === null) {
        P === null && (P = O);
        break;
      }
      e && P && H.alternate === null && t(m, P),
        (p = o(H, p, E)),
        b === null ? (C = H) : (b.sibling = H),
        (b = H),
        (P = O);
    }
    if (R.done) return n(m, P), J && jn(m, E), C;
    if (P === null) {
      for (; !R.done; E++, R = g.next())
        (R = d(m, R.value, w)),
          R !== null &&
            ((p = o(R, p, E)), b === null ? (C = R) : (b.sibling = R), (b = R));
      return J && jn(m, E), C;
    }
    for (P = r(m, P); !R.done; E++, R = g.next())
      (R = y(P, m, E, R.value, w)),
        R !== null &&
          (e && R.alternate !== null && P.delete(R.key === null ? E : R.key),
          (p = o(R, p, E)),
          b === null ? (C = R) : (b.sibling = R),
          (b = R));
    return (
      e &&
        P.forEach(function (z) {
          return t(m, z);
        }),
      J && jn(m, E),
      C
    );
  }
  function S(m, p, g, w) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === tr &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case co:
          e: {
            for (var C = g.key, b = p; b !== null; ) {
              if (b.key === C) {
                if (((C = g.type), C === tr)) {
                  if (b.tag === 7) {
                    n(m, b.sibling),
                      (p = i(b, g.props.children)),
                      (p.return = m),
                      (m = p);
                    break e;
                  }
                } else if (
                  b.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === qt &&
                    nf(C) === b.type)
                ) {
                  n(m, b.sibling),
                    (p = i(b, g.props)),
                    (p.ref = Jr(m, b, g)),
                    (p.return = m),
                    (m = p);
                  break e;
                }
                n(m, b);
                break;
              } else t(m, b);
              b = b.sibling;
            }
            g.type === tr
              ? ((p = In(g.props.children, m.mode, w, g.key)),
                (p.return = m),
                (m = p))
              : ((w = Uo(g.type, g.key, g.props, null, m.mode, w)),
                (w.ref = Jr(m, p, g)),
                (w.return = m),
                (m = w));
          }
          return s(m);
        case er:
          e: {
            for (b = g.key; p !== null; ) {
              if (p.key === b)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === g.containerInfo &&
                  p.stateNode.implementation === g.implementation
                ) {
                  n(m, p.sibling),
                    (p = i(p, g.children || [])),
                    (p.return = m),
                    (m = p);
                  break e;
                } else {
                  n(m, p);
                  break;
                }
              else t(m, p);
              p = p.sibling;
            }
            (p = Ha(g, m.mode, w)), (p.return = m), (m = p);
          }
          return s(m);
        case qt:
          return (b = g._init), S(m, p, b(g._payload), w);
      }
      if (li(g)) return v(m, p, g, w);
      if (Yr(g)) return x(m, p, g, w);
      ko(m, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        p !== null && p.tag === 6
          ? (n(m, p.sibling), (p = i(p, g)), (p.return = m), (m = p))
          : (n(m, p), (p = Ga(g, m.mode, w)), (p.return = m), (m = p)),
        s(m))
      : n(m, p);
  }
  return S;
}
var Tr = zm(!0),
  Fm = zm(!1),
  ps = xn(null),
  ms = null,
  ur = null,
  ac = null;
function lc() {
  ac = ur = ms = null;
}
function uc(e) {
  var t = ps.current;
  Z(ps), (e._currentValue = t);
}
function Hl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function kr(e, t) {
  (ms = e),
    (ac = ur = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Me = !0), (e.firstContext = null));
}
function et(e) {
  var t = e._currentValue;
  if (ac !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), ur === null)) {
      if (ms === null) throw Error(j(308));
      (ur = e), (ms.dependencies = { lanes: 0, firstContext: e });
    } else ur = ur.next = e;
  return t;
}
var Mn = null;
function cc(e) {
  Mn === null ? (Mn = [e]) : Mn.push(e);
}
function Bm(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), cc(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Ft(e, r)
  );
}
function Ft(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Zt = !1;
function dc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function $m(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Lt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function un(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), F & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Ft(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), cc(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Ft(e, n)
  );
}
function Vo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Xu(e, n);
  }
}
function rf(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function gs(e, t, n, r) {
  var i = e.updateQueue;
  Zt = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), s === null ? (o = u) : (s.next = u), (s = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== s &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (o !== null) {
    var d = i.baseState;
    (s = 0), (c = u = l = null), (a = o);
    do {
      var h = a.lane,
        y = a.eventTime;
      if ((r & h) === h) {
        c !== null &&
          (c = c.next =
            {
              eventTime: y,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var v = e,
            x = a;
          switch (((h = t), (y = n), x.tag)) {
            case 1:
              if (((v = x.payload), typeof v == "function")) {
                d = v.call(y, d, h);
                break e;
              }
              d = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = x.payload),
                (h = typeof v == "function" ? v.call(y, d, h) : v),
                h == null)
              )
                break e;
              d = re({}, d, h);
              break e;
            case 2:
              Zt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (h = i.effects),
          h === null ? (i.effects = [a]) : h.push(a));
      } else
        (y = {
          eventTime: y,
          lane: h,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = y), (l = d)) : (c = c.next = y),
          (s |= h);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (h = a),
          (a = h.next),
          (h.next = null),
          (i.lastBaseUpdate = h),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = d),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (Un |= s), (e.lanes = s), (e.memoizedState = d);
  }
}
function of(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(j(191, i));
        i.call(r);
      }
    }
}
var to = {},
  xt = xn(to),
  zi = xn(to),
  Fi = xn(to);
function Ln(e) {
  if (e === to) throw Error(j(174));
  return e;
}
function fc(e, t) {
  switch ((Y(Fi, t), Y(zi, e), Y(xt, to), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : El(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = El(t, e));
  }
  Z(xt), Y(xt, t);
}
function Nr() {
  Z(xt), Z(zi), Z(Fi);
}
function Wm(e) {
  Ln(Fi.current);
  var t = Ln(xt.current),
    n = El(t, e.type);
  t !== n && (Y(zi, e), Y(xt, n));
}
function hc(e) {
  zi.current === e && (Z(xt), Z(zi));
}
var ee = xn(0);
function ys(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var za = [];
function pc() {
  for (var e = 0; e < za.length; e++)
    za[e]._workInProgressVersionPrimary = null;
  za.length = 0;
}
var zo = $t.ReactCurrentDispatcher,
  Fa = $t.ReactCurrentBatchConfig,
  Wn = 0,
  ne = null,
  ce = null,
  he = null,
  vs = !1,
  xi = !1,
  Bi = 0,
  px = 0;
function we() {
  throw Error(j(321));
}
function mc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ht(e[n], t[n])) return !1;
  return !0;
}
function gc(e, t, n, r, i, o) {
  if (
    ((Wn = o),
    (ne = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (zo.current = e === null || e.memoizedState === null ? vx : xx),
    (e = n(r, i)),
    xi)
  ) {
    o = 0;
    do {
      if (((xi = !1), (Bi = 0), 25 <= o)) throw Error(j(301));
      (o += 1),
        (he = ce = null),
        (t.updateQueue = null),
        (zo.current = wx),
        (e = n(r, i));
    } while (xi);
  }
  if (
    ((zo.current = xs),
    (t = ce !== null && ce.next !== null),
    (Wn = 0),
    (he = ce = ne = null),
    (vs = !1),
    t)
  )
    throw Error(j(300));
  return e;
}
function yc() {
  var e = Bi !== 0;
  return (Bi = 0), e;
}
function mt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return he === null ? (ne.memoizedState = he = e) : (he = he.next = e), he;
}
function tt() {
  if (ce === null) {
    var e = ne.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ce.next;
  var t = he === null ? ne.memoizedState : he.next;
  if (t !== null) (he = t), (ce = e);
  else {
    if (e === null) throw Error(j(310));
    (ce = e),
      (e = {
        memoizedState: ce.memoizedState,
        baseState: ce.baseState,
        baseQueue: ce.baseQueue,
        queue: ce.queue,
        next: null,
      }),
      he === null ? (ne.memoizedState = he = e) : (he = he.next = e);
  }
  return he;
}
function $i(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ba(e) {
  var t = tt(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = ce,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      u = o;
    do {
      var c = u.lane;
      if ((Wn & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = d), (s = r)) : (l = l.next = d),
          (ne.lanes |= c),
          (Un |= c);
      }
      u = u.next;
    } while (u !== null && u !== o);
    l === null ? (s = r) : (l.next = a),
      ht(r, t.memoizedState) || (Me = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (ne.lanes |= o), (Un |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function $a(e) {
  var t = tt(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    ht(o, t.memoizedState) || (Me = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Um() {}
function Gm(e, t) {
  var n = ne,
    r = tt(),
    i = t(),
    o = !ht(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Me = !0)),
    (r = r.queue),
    vc(Ym.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (he !== null && he.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Wi(9, Km.bind(null, n, r, i, t), void 0, null),
      me === null)
    )
      throw Error(j(349));
    Wn & 30 || Hm(n, t, i);
  }
  return i;
}
function Hm(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ne.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ne.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Km(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Qm(t) && Xm(e);
}
function Ym(e, t, n) {
  return n(function () {
    Qm(t) && Xm(e);
  });
}
function Qm(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ht(e, n);
  } catch {
    return !0;
  }
}
function Xm(e) {
  var t = Ft(e, 1);
  t !== null && dt(t, e, 1, -1);
}
function sf(e) {
  var t = mt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: $i,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = yx.bind(null, ne, e)),
    [t.memoizedState, e]
  );
}
function Wi(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ne.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ne.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function qm() {
  return tt().memoizedState;
}
function Fo(e, t, n, r) {
  var i = mt();
  (ne.flags |= e),
    (i.memoizedState = Wi(1 | t, n, void 0, r === void 0 ? null : r));
}
function Qs(e, t, n, r) {
  var i = tt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ce !== null) {
    var s = ce.memoizedState;
    if (((o = s.destroy), r !== null && mc(r, s.deps))) {
      i.memoizedState = Wi(t, n, o, r);
      return;
    }
  }
  (ne.flags |= e), (i.memoizedState = Wi(1 | t, n, o, r));
}
function af(e, t) {
  return Fo(8390656, 8, e, t);
}
function vc(e, t) {
  return Qs(2048, 8, e, t);
}
function Zm(e, t) {
  return Qs(4, 2, e, t);
}
function Jm(e, t) {
  return Qs(4, 4, e, t);
}
function eg(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function tg(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Qs(4, 4, eg.bind(null, t, e), n)
  );
}
function xc() {}
function ng(e, t) {
  var n = tt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && mc(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function rg(e, t) {
  var n = tt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && mc(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ig(e, t, n) {
  return Wn & 21
    ? (ht(n, t) || ((n = um()), (ne.lanes |= n), (Un |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Me = !0)), (e.memoizedState = n));
}
function mx(e, t) {
  var n = U;
  (U = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Fa.transition;
  Fa.transition = {};
  try {
    e(!1), t();
  } finally {
    (U = n), (Fa.transition = r);
  }
}
function og() {
  return tt().memoizedState;
}
function gx(e, t, n) {
  var r = dn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    sg(e))
  )
    ag(t, n);
  else if (((n = Bm(e, t, n, r)), n !== null)) {
    var i = Te();
    dt(n, e, r, i), lg(n, t, r);
  }
}
function yx(e, t, n) {
  var r = dn(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (sg(e)) ag(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), ht(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((i.next = i), cc(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Bm(e, t, i, r)),
      n !== null && ((i = Te()), dt(n, e, r, i), lg(n, t, r));
  }
}
function sg(e) {
  var t = e.alternate;
  return e === ne || (t !== null && t === ne);
}
function ag(e, t) {
  xi = vs = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function lg(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Xu(e, n);
  }
}
var xs = {
    readContext: et,
    useCallback: we,
    useContext: we,
    useEffect: we,
    useImperativeHandle: we,
    useInsertionEffect: we,
    useLayoutEffect: we,
    useMemo: we,
    useReducer: we,
    useRef: we,
    useState: we,
    useDebugValue: we,
    useDeferredValue: we,
    useTransition: we,
    useMutableSource: we,
    useSyncExternalStore: we,
    useId: we,
    unstable_isNewReconciler: !1,
  },
  vx = {
    readContext: et,
    useCallback: function (e, t) {
      return (mt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: et,
    useEffect: af,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Fo(4194308, 4, eg.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Fo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Fo(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = mt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = mt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = gx.bind(null, ne, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = mt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: sf,
    useDebugValue: xc,
    useDeferredValue: function (e) {
      return (mt().memoizedState = e);
    },
    useTransition: function () {
      var e = sf(!1),
        t = e[0];
      return (e = mx.bind(null, e[1])), (mt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ne,
        i = mt();
      if (J) {
        if (n === void 0) throw Error(j(407));
        n = n();
      } else {
        if (((n = t()), me === null)) throw Error(j(349));
        Wn & 30 || Hm(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        af(Ym.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Wi(9, Km.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = mt(),
        t = me.identifierPrefix;
      if (J) {
        var n = At,
          r = Nt;
        (n = (r & ~(1 << (32 - ct(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Bi++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = px++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  xx = {
    readContext: et,
    useCallback: ng,
    useContext: et,
    useEffect: vc,
    useImperativeHandle: tg,
    useInsertionEffect: Zm,
    useLayoutEffect: Jm,
    useMemo: rg,
    useReducer: Ba,
    useRef: qm,
    useState: function () {
      return Ba($i);
    },
    useDebugValue: xc,
    useDeferredValue: function (e) {
      var t = tt();
      return ig(t, ce.memoizedState, e);
    },
    useTransition: function () {
      var e = Ba($i)[0],
        t = tt().memoizedState;
      return [e, t];
    },
    useMutableSource: Um,
    useSyncExternalStore: Gm,
    useId: og,
    unstable_isNewReconciler: !1,
  },
  wx = {
    readContext: et,
    useCallback: ng,
    useContext: et,
    useEffect: vc,
    useImperativeHandle: tg,
    useInsertionEffect: Zm,
    useLayoutEffect: Jm,
    useMemo: rg,
    useReducer: $a,
    useRef: qm,
    useState: function () {
      return $a($i);
    },
    useDebugValue: xc,
    useDeferredValue: function (e) {
      var t = tt();
      return ce === null ? (t.memoizedState = e) : ig(t, ce.memoizedState, e);
    },
    useTransition: function () {
      var e = $a($i)[0],
        t = tt().memoizedState;
      return [e, t];
    },
    useMutableSource: Um,
    useSyncExternalStore: Gm,
    useId: og,
    unstable_isNewReconciler: !1,
  };
function at(e, t) {
  if (e && e.defaultProps) {
    (t = re({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Kl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : re({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Xs = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Yn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Te(),
      i = dn(e),
      o = Lt(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = un(e, o, i)),
      t !== null && (dt(t, e, i, r), Vo(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Te(),
      i = dn(e),
      o = Lt(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = un(e, o, i)),
      t !== null && (dt(t, e, i, r), Vo(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Te(),
      r = dn(e),
      i = Lt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = un(e, i, r)),
      t !== null && (dt(t, e, r, n), Vo(t, e, r));
  },
};
function lf(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !_i(n, r) || !_i(i, o)
      : !0
  );
}
function ug(e, t, n) {
  var r = !1,
    i = mn,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = et(o))
      : ((i = _e(t) ? Bn : Ee.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Er(e, i) : mn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Xs),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function uf(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Xs.enqueueReplaceState(t, t.state, null);
}
function Yl(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), dc(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = et(o))
    : ((o = _e(t) ? Bn : Ee.current), (i.context = Er(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Kl(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Xs.enqueueReplaceState(i, i.state, null),
      gs(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ar(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Y0(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Wa(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ql(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Sx = typeof WeakMap == "function" ? WeakMap : Map;
function cg(e, t, n) {
  (n = Lt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ss || ((Ss = !0), (ou = r)), Ql(e, t);
    }),
    n
  );
}
function dg(e, t, n) {
  (n = Lt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Ql(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Ql(e, t),
          typeof r != "function" &&
            (cn === null ? (cn = new Set([this])) : cn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function cf(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Sx();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = _x.bind(null, e, t, n)), t.then(e, e));
}
function df(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ff(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Lt(-1, 1)), (t.tag = 2), un(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var kx = $t.ReactCurrentOwner,
  Me = !1;
function je(e, t, n, r) {
  t.child = e === null ? Fm(t, null, n, r) : Tr(t, e.child, n, r);
}
function hf(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    kr(t, i),
    (r = gc(e, t, n, r, o, i)),
    (n = yc()),
    e !== null && !Me
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Bt(e, t, i))
      : (J && n && ic(t), (t.flags |= 1), je(e, t, r, i), t.child)
  );
}
function pf(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !jc(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), fg(e, t, o, r, i))
      : ((e = Uo(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : _i), n(s, r) && e.ref === t.ref)
    )
      return Bt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = fn(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function fg(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (_i(o, r) && e.ref === t.ref)
      if (((Me = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Me = !0);
      else return (t.lanes = e.lanes), Bt(e, t, i);
  }
  return Xl(e, t, n, r, i);
}
function hg(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Y(dr, ze),
        (ze |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Y(dr, ze),
          (ze |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        Y(dr, ze),
        (ze |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Y(dr, ze),
      (ze |= r);
  return je(e, t, i, n), t.child;
}
function pg(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Xl(e, t, n, r, i) {
  var o = _e(n) ? Bn : Ee.current;
  return (
    (o = Er(t, o)),
    kr(t, i),
    (n = gc(e, t, n, r, o, i)),
    (r = yc()),
    e !== null && !Me
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Bt(e, t, i))
      : (J && r && ic(t), (t.flags |= 1), je(e, t, n, i), t.child)
  );
}
function mf(e, t, n, r, i) {
  if (_e(n)) {
    var o = !0;
    ds(t);
  } else o = !1;
  if ((kr(t, i), t.stateNode === null))
    Bo(e, t), ug(t, n, r), Yl(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = et(u))
      : ((u = _e(n) ? Bn : Ee.current), (u = Er(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && uf(t, s, r, u)),
      (Zt = !1);
    var h = t.memoizedState;
    (s.state = h),
      gs(t, r, s, i),
      (l = t.memoizedState),
      a !== r || h !== l || Oe.current || Zt
        ? (typeof c == "function" && (Kl(t, n, c, r), (l = t.memoizedState)),
          (a = Zt || lf(t, n, a, r, h, l, u))
            ? (d ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      $m(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : at(t.type, a)),
      (s.props = u),
      (d = t.pendingProps),
      (h = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = et(l))
        : ((l = _e(n) ? Bn : Ee.current), (l = Er(t, l)));
    var y = n.getDerivedStateFromProps;
    (c =
      typeof y == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== d || h !== l) && uf(t, s, r, l)),
      (Zt = !1),
      (h = t.memoizedState),
      (s.state = h),
      gs(t, r, s, i);
    var v = t.memoizedState;
    a !== d || h !== v || Oe.current || Zt
      ? (typeof y == "function" && (Kl(t, n, y, r), (v = t.memoizedState)),
        (u = Zt || lf(t, n, u, r, h, v, l) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, v, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, v, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (s.props = r),
        (s.state = v),
        (s.context = l),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ql(e, t, n, r, o, i);
}
function ql(e, t, n, r, i, o) {
  pg(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && Jd(t, n, !1), Bt(e, t, o);
  (r = t.stateNode), (kx.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Tr(t, e.child, null, o)), (t.child = Tr(t, null, a, o)))
      : je(e, t, a, o),
    (t.memoizedState = r.state),
    i && Jd(t, n, !0),
    t.child
  );
}
function mg(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Zd(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Zd(e, t.context, !1),
    fc(e, t.containerInfo);
}
function gf(e, t, n, r, i) {
  return jr(), sc(i), (t.flags |= 256), je(e, t, n, r), t.child;
}
var Zl = { dehydrated: null, treeContext: null, retryLane: 0 };
function Jl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function gg(e, t, n) {
  var r = t.pendingProps,
    i = ee.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    Y(ee, i & 1),
    e === null)
  )
    return (
      Gl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = Js(s, r, 0, null)),
              (e = In(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Jl(n)),
              (t.memoizedState = Zl),
              e)
            : wc(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return Cx(e, t, s, r, a, i, n);
  if (o) {
    (o = r.fallback), (s = t.mode), (i = e.child), (a = i.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = fn(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (o = fn(a, o)) : ((o = In(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Jl(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Zl),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = fn(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function wc(e, t) {
  return (
    (t = Js({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Co(e, t, n, r) {
  return (
    r !== null && sc(r),
    Tr(t, e.child, null, n),
    (e = wc(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Cx(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Wa(Error(j(422)))), Co(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = Js({ mode: "visible", children: r.children }, i, 0, null)),
        (o = In(o, i, s, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Tr(t, e.child, null, s),
        (t.child.memoizedState = Jl(s)),
        (t.memoizedState = Zl),
        o);
  if (!(t.mode & 1)) return Co(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(j(419))), (r = Wa(o, r, void 0)), Co(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), Me || a)) {
    if (((r = me), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), Ft(e, i), dt(r, e, i, -1));
    }
    return Ec(), (r = Wa(Error(j(421)))), Co(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Dx.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Fe = ln(i.nextSibling)),
      (Be = t),
      (J = !0),
      (ut = null),
      e !== null &&
        ((Xe[qe++] = Nt),
        (Xe[qe++] = At),
        (Xe[qe++] = $n),
        (Nt = e.id),
        (At = e.overflow),
        ($n = t)),
      (t = wc(t, r.children)),
      (t.flags |= 4096),
      t);
}
function yf(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Hl(e.return, t, n);
}
function Ua(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function yg(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((je(e, t, r.children, n), (r = ee.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && yf(e, n, t);
        else if (e.tag === 19) yf(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((Y(ee, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && ys(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Ua(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && ys(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Ua(t, !0, n, null, o);
        break;
      case "together":
        Ua(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Bo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Bt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Un |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(j(153));
  if (t.child !== null) {
    for (
      e = t.child, n = fn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = fn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function bx(e, t, n) {
  switch (t.tag) {
    case 3:
      mg(t), jr();
      break;
    case 5:
      Wm(t);
      break;
    case 1:
      _e(t.type) && ds(t);
      break;
    case 4:
      fc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      Y(ps, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Y(ee, ee.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? gg(e, t, n)
          : (Y(ee, ee.current & 1),
            (e = Bt(e, t, n)),
            e !== null ? e.sibling : null);
      Y(ee, ee.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return yg(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        Y(ee, ee.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), hg(e, t, n);
  }
  return Bt(e, t, n);
}
var vg, eu, xg, wg;
vg = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
eu = function () {};
xg = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Ln(xt.current);
    var o = null;
    switch (n) {
      case "input":
        (i = kl(e, i)), (r = kl(e, r)), (o = []);
        break;
      case "select":
        (i = re({}, i, { value: void 0 })),
          (r = re({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = Pl(e, i)), (r = Pl(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = us);
    }
    jl(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Ti.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else n || (o || (o = []), o.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (o = o || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (o = o || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Ti.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && X("scroll", e),
                  o || a === l || (o = []))
                : (o = o || []).push(u, l));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
wg = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ei(e, t) {
  if (!J)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Se(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Px(e, t, n) {
  var r = t.pendingProps;
  switch ((oc(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Se(t), null;
    case 1:
      return _e(t.type) && cs(), Se(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Nr(),
        Z(Oe),
        Z(Ee),
        pc(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (So(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ut !== null && (lu(ut), (ut = null)))),
        eu(e, t),
        Se(t),
        null
      );
    case 5:
      hc(t);
      var i = Ln(Fi.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        xg(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(j(166));
          return Se(t), null;
        }
        if (((e = Ln(xt.current)), So(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[yt] = t), (r[Vi] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              X("cancel", r), X("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              X("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < ci.length; i++) X(ci[i], r);
              break;
            case "source":
              X("error", r);
              break;
            case "img":
            case "image":
            case "link":
              X("error", r), X("load", r);
              break;
            case "details":
              X("toggle", r);
              break;
            case "input":
              Pd(r, o), X("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                X("invalid", r);
              break;
            case "textarea":
              jd(r, o), X("invalid", r);
          }
          jl(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var a = o[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      wo(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      wo(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : Ti.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  X("scroll", r);
            }
          switch (n) {
            case "input":
              fo(r), Ed(r, o, !0);
              break;
            case "textarea":
              fo(r), Td(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = us);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Yp(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[yt] = t),
            (e[Vi] = r),
            vg(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Tl(n, r)), n)) {
              case "dialog":
                X("cancel", e), X("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                X("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < ci.length; i++) X(ci[i], e);
                i = r;
                break;
              case "source":
                X("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                X("error", e), X("load", e), (i = r);
                break;
              case "details":
                X("toggle", e), (i = r);
                break;
              case "input":
                Pd(e, r), (i = kl(e, r)), X("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = re({}, r, { value: void 0 })),
                  X("invalid", e);
                break;
              case "textarea":
                jd(e, r), (i = Pl(e, r)), X("invalid", e);
                break;
              default:
                i = r;
            }
            jl(n, i), (a = i);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var l = a[o];
                o === "style"
                  ? qp(e, l)
                  : o === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && Qp(e, l))
                  : o === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && Ni(e, l)
                    : typeof l == "number" && Ni(e, "" + l)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Ti.hasOwnProperty(o)
                      ? l != null && o === "onScroll" && X("scroll", e)
                      : l != null && Uu(e, o, l, s));
              }
            switch (n) {
              case "input":
                fo(e), Ed(e, r, !1);
                break;
              case "textarea":
                fo(e), Td(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + pn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? vr(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      vr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = us);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Se(t), null;
    case 6:
      if (e && t.stateNode != null) wg(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(j(166));
        if (((n = Ln(Fi.current)), Ln(xt.current), So(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[yt] = t),
            (o = r.nodeValue !== n) && ((e = Be), e !== null))
          )
            switch (e.tag) {
              case 3:
                wo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  wo(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[yt] = t),
            (t.stateNode = r);
      }
      return Se(t), null;
    case 13:
      if (
        (Z(ee),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (J && Fe !== null && t.mode & 1 && !(t.flags & 128))
          Vm(), jr(), (t.flags |= 98560), (o = !1);
        else if (((o = So(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(j(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(j(317));
            o[yt] = t;
          } else
            jr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Se(t), (o = !1);
        } else ut !== null && (lu(ut), (ut = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ee.current & 1 ? de === 0 && (de = 3) : Ec())),
          t.updateQueue !== null && (t.flags |= 4),
          Se(t),
          null);
    case 4:
      return (
        Nr(), eu(e, t), e === null && Di(t.stateNode.containerInfo), Se(t), null
      );
    case 10:
      return uc(t.type._context), Se(t), null;
    case 17:
      return _e(t.type) && cs(), Se(t), null;
    case 19:
      if ((Z(ee), (o = t.memoizedState), o === null)) return Se(t), null;
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) ei(o, !1);
        else {
          if (de !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = ys(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    ei(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Y(ee, (ee.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            ae() > Rr &&
            ((t.flags |= 128), (r = !0), ei(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ys(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ei(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !J)
            )
              return Se(t), null;
          } else
            2 * ae() - o.renderingStartTime > Rr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ei(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = ae()),
          (t.sibling = null),
          (n = ee.current),
          Y(ee, r ? (n & 1) | 2 : n & 1),
          t)
        : (Se(t), null);
    case 22:
    case 23:
      return (
        Pc(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ze & 1073741824 && (Se(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Se(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(j(156, t.tag));
}
function Ex(e, t) {
  switch ((oc(t), t.tag)) {
    case 1:
      return (
        _e(t.type) && cs(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Nr(),
        Z(Oe),
        Z(Ee),
        pc(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return hc(t), null;
    case 13:
      if ((Z(ee), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(j(340));
        jr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Z(ee), null;
    case 4:
      return Nr(), null;
    case 10:
      return uc(t.type._context), null;
    case 22:
    case 23:
      return Pc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var bo = !1,
  Ce = !1,
  jx = typeof WeakSet == "function" ? WeakSet : Set,
  N = null;
function cr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ie(e, t, r);
      }
    else n.current = null;
}
function tu(e, t, n) {
  try {
    n();
  } catch (r) {
    ie(e, t, r);
  }
}
var vf = !1;
function Tx(e, t) {
  if (((Vl = ss), (e = Pm()), rc(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            h = null;
          t: for (;;) {
            for (
              var y;
              d !== n || (i !== 0 && d.nodeType !== 3) || (a = s + i),
                d !== o || (r !== 0 && d.nodeType !== 3) || (l = s + r),
                d.nodeType === 3 && (s += d.nodeValue.length),
                (y = d.firstChild) !== null;

            )
              (h = d), (d = y);
            for (;;) {
              if (d === e) break t;
              if (
                (h === n && ++u === i && (a = s),
                h === o && ++c === r && (l = s),
                (y = d.nextSibling) !== null)
              )
                break;
              (d = h), (h = d.parentNode);
            }
            d = y;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (zl = { focusedElem: e, selectionRange: n }, ss = !1, N = t; N !== null; )
    if (((t = N), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (N = e);
    else
      for (; N !== null; ) {
        t = N;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var x = v.memoizedProps,
                    S = v.memoizedState,
                    m = t.stateNode,
                    p = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : at(t.type, x),
                      S
                    );
                  m.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(j(163));
            }
        } catch (w) {
          ie(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (N = e);
          break;
        }
        N = t.return;
      }
  return (v = vf), (vf = !1), v;
}
function wi(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && tu(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function qs(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function nu(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Sg(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Sg(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[yt], delete t[Vi], delete t[$l], delete t[cx], delete t[dx])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function kg(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function xf(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || kg(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ru(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = us));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ru(e, t, n), e = e.sibling; e !== null; ) ru(e, t, n), (e = e.sibling);
}
function iu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (iu(e, t, n), e = e.sibling; e !== null; ) iu(e, t, n), (e = e.sibling);
}
var ge = null,
  lt = !1;
function Gt(e, t, n) {
  for (n = n.child; n !== null; ) Cg(e, t, n), (n = n.sibling);
}
function Cg(e, t, n) {
  if (vt && typeof vt.onCommitFiberUnmount == "function")
    try {
      vt.onCommitFiberUnmount(Ws, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ce || cr(n, t);
    case 6:
      var r = ge,
        i = lt;
      (ge = null),
        Gt(e, t, n),
        (ge = r),
        (lt = i),
        ge !== null &&
          (lt
            ? ((e = ge),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ge.removeChild(n.stateNode));
      break;
    case 18:
      ge !== null &&
        (lt
          ? ((e = ge),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ia(e.parentNode, n)
              : e.nodeType === 1 && Ia(e, n),
            Li(e))
          : Ia(ge, n.stateNode));
      break;
    case 4:
      (r = ge),
        (i = lt),
        (ge = n.stateNode.containerInfo),
        (lt = !0),
        Gt(e, t, n),
        (ge = r),
        (lt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ce &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && tu(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      Gt(e, t, n);
      break;
    case 1:
      if (
        !Ce &&
        (cr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          ie(n, t, a);
        }
      Gt(e, t, n);
      break;
    case 21:
      Gt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ce = (r = Ce) || n.memoizedState !== null), Gt(e, t, n), (Ce = r))
        : Gt(e, t, n);
      break;
    default:
      Gt(e, t, n);
  }
}
function wf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new jx()),
      t.forEach(function (r) {
        var i = Ix.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function ot(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (ge = a.stateNode), (lt = !1);
              break e;
            case 3:
              (ge = a.stateNode.containerInfo), (lt = !0);
              break e;
            case 4:
              (ge = a.stateNode.containerInfo), (lt = !0);
              break e;
          }
          a = a.return;
        }
        if (ge === null) throw Error(j(160));
        Cg(o, s, i), (ge = null), (lt = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (u) {
        ie(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) bg(t, e), (t = t.sibling);
}
function bg(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ot(t, e), pt(e), r & 4)) {
        try {
          wi(3, e, e.return), qs(3, e);
        } catch (x) {
          ie(e, e.return, x);
        }
        try {
          wi(5, e, e.return);
        } catch (x) {
          ie(e, e.return, x);
        }
      }
      break;
    case 1:
      ot(t, e), pt(e), r & 512 && n !== null && cr(n, n.return);
      break;
    case 5:
      if (
        (ot(t, e),
        pt(e),
        r & 512 && n !== null && cr(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Ni(i, "");
        } catch (x) {
          ie(e, e.return, x);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && Hp(i, o),
              Tl(a, s);
            var u = Tl(a, o);
            for (s = 0; s < l.length; s += 2) {
              var c = l[s],
                d = l[s + 1];
              c === "style"
                ? qp(i, d)
                : c === "dangerouslySetInnerHTML"
                ? Qp(i, d)
                : c === "children"
                ? Ni(i, d)
                : Uu(i, c, d, u);
            }
            switch (a) {
              case "input":
                Cl(i, o);
                break;
              case "textarea":
                Kp(i, o);
                break;
              case "select":
                var h = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var y = o.value;
                y != null
                  ? vr(i, !!o.multiple, y, !1)
                  : h !== !!o.multiple &&
                    (o.defaultValue != null
                      ? vr(i, !!o.multiple, o.defaultValue, !0)
                      : vr(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Vi] = o;
          } catch (x) {
            ie(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((ot(t, e), pt(e), r & 4)) {
        if (e.stateNode === null) throw Error(j(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (x) {
          ie(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (ot(t, e), pt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Li(t.containerInfo);
        } catch (x) {
          ie(e, e.return, x);
        }
      break;
    case 4:
      ot(t, e), pt(e);
      break;
    case 13:
      ot(t, e),
        pt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Cc = ae())),
        r & 4 && wf(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ce = (u = Ce) || c), ot(t, e), (Ce = u)) : ot(t, e),
        pt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (N = e, c = e.child; c !== null; ) {
            for (d = N = c; N !== null; ) {
              switch (((h = N), (y = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  wi(4, h, h.return);
                  break;
                case 1:
                  cr(h, h.return);
                  var v = h.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (x) {
                      ie(r, n, x);
                    }
                  }
                  break;
                case 5:
                  cr(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    kf(d);
                    continue;
                  }
              }
              y !== null ? ((y.return = h), (N = y)) : kf(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (i = d.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = d.stateNode),
                      (l = d.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = Xp("display", s)));
              } catch (x) {
                ie(e, e.return, x);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (x) {
                ie(e, e.return, x);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      ot(t, e), pt(e), r & 4 && wf(e);
      break;
    case 21:
      break;
    default:
      ot(t, e), pt(e);
  }
}
function pt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (kg(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(j(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Ni(i, ""), (r.flags &= -33));
          var o = xf(e);
          iu(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = xf(e);
          ru(e, a, s);
          break;
        default:
          throw Error(j(161));
      }
    } catch (l) {
      ie(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Nx(e, t, n) {
  (N = e), Pg(e);
}
function Pg(e, t, n) {
  for (var r = (e.mode & 1) !== 0; N !== null; ) {
    var i = N,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || bo;
      if (!s) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || Ce;
        a = bo;
        var u = Ce;
        if (((bo = s), (Ce = l) && !u))
          for (N = i; N !== null; )
            (s = N),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Cf(i)
                : l !== null
                ? ((l.return = s), (N = l))
                : Cf(i);
        for (; o !== null; ) (N = o), Pg(o), (o = o.sibling);
        (N = i), (bo = a), (Ce = u);
      }
      Sf(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (N = o)) : Sf(e);
  }
}
function Sf(e) {
  for (; N !== null; ) {
    var t = N;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ce || qs(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ce)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : at(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && of(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                of(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Li(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(j(163));
          }
        Ce || (t.flags & 512 && nu(t));
      } catch (h) {
        ie(t, t.return, h);
      }
    }
    if (t === e) {
      N = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function kf(e) {
  for (; N !== null; ) {
    var t = N;
    if (t === e) {
      N = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function Cf(e) {
  for (; N !== null; ) {
    var t = N;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            qs(4, t);
          } catch (l) {
            ie(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              ie(t, i, l);
            }
          }
          var o = t.return;
          try {
            nu(t);
          } catch (l) {
            ie(t, o, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            nu(t);
          } catch (l) {
            ie(t, s, l);
          }
      }
    } catch (l) {
      ie(t, t.return, l);
    }
    if (t === e) {
      N = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (N = a);
      break;
    }
    N = t.return;
  }
}
var Ax = Math.ceil,
  ws = $t.ReactCurrentDispatcher,
  Sc = $t.ReactCurrentOwner,
  Je = $t.ReactCurrentBatchConfig,
  F = 0,
  me = null,
  ue = null,
  ye = 0,
  ze = 0,
  dr = xn(0),
  de = 0,
  Ui = null,
  Un = 0,
  Zs = 0,
  kc = 0,
  Si = null,
  Re = null,
  Cc = 0,
  Rr = 1 / 0,
  Pt = null,
  Ss = !1,
  ou = null,
  cn = null,
  Po = !1,
  nn = null,
  ks = 0,
  ki = 0,
  su = null,
  $o = -1,
  Wo = 0;
function Te() {
  return F & 6 ? ae() : $o !== -1 ? $o : ($o = ae());
}
function dn(e) {
  return e.mode & 1
    ? F & 2 && ye !== 0
      ? ye & -ye
      : hx.transition !== null
      ? (Wo === 0 && (Wo = um()), Wo)
      : ((e = U),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : gm(e.type))),
        e)
    : 1;
}
function dt(e, t, n, r) {
  if (50 < ki) throw ((ki = 0), (su = null), Error(j(185)));
  Zi(e, n, r),
    (!(F & 2) || e !== me) &&
      (e === me && (!(F & 2) && (Zs |= n), de === 4 && en(e, ye)),
      De(e, r),
      n === 1 && F === 0 && !(t.mode & 1) && ((Rr = ae() + 500), Ys && wn()));
}
function De(e, t) {
  var n = e.callbackNode;
  h1(e, t);
  var r = os(e, e === me ? ye : 0);
  if (r === 0)
    n !== null && Rd(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Rd(n), t === 1))
      e.tag === 0 ? fx(bf.bind(null, e)) : _m(bf.bind(null, e)),
        lx(function () {
          !(F & 6) && wn();
        }),
        (n = null);
    else {
      switch (cm(r)) {
        case 1:
          n = Qu;
          break;
        case 4:
          n = am;
          break;
        case 16:
          n = is;
          break;
        case 536870912:
          n = lm;
          break;
        default:
          n = is;
      }
      n = Lg(n, Eg.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Eg(e, t) {
  if ((($o = -1), (Wo = 0), F & 6)) throw Error(j(327));
  var n = e.callbackNode;
  if (Cr() && e.callbackNode !== n) return null;
  var r = os(e, e === me ? ye : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Cs(e, r);
  else {
    t = r;
    var i = F;
    F |= 2;
    var o = Tg();
    (me !== e || ye !== t) && ((Pt = null), (Rr = ae() + 500), Dn(e, t));
    do
      try {
        Lx();
        break;
      } catch (a) {
        jg(e, a);
      }
    while (!0);
    lc(),
      (ws.current = o),
      (F = i),
      ue !== null ? (t = 0) : ((me = null), (ye = 0), (t = de));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Ll(e)), i !== 0 && ((r = i), (t = au(e, i)))), t === 1)
    )
      throw ((n = Ui), Dn(e, 0), en(e, r), De(e, ae()), n);
    if (t === 6) en(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Rx(i) &&
          ((t = Cs(e, r)),
          t === 2 && ((o = Ll(e)), o !== 0 && ((r = o), (t = au(e, o)))),
          t === 1))
      )
        throw ((n = Ui), Dn(e, 0), en(e, r), De(e, ae()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(j(345));
        case 2:
          Tn(e, Re, Pt);
          break;
        case 3:
          if (
            (en(e, r), (r & 130023424) === r && ((t = Cc + 500 - ae()), 10 < t))
          ) {
            if (os(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Te(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Bl(Tn.bind(null, e, Re, Pt), t);
            break;
          }
          Tn(e, Re, Pt);
          break;
        case 4:
          if ((en(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - ct(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = ae() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Ax(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Bl(Tn.bind(null, e, Re, Pt), r);
            break;
          }
          Tn(e, Re, Pt);
          break;
        case 5:
          Tn(e, Re, Pt);
          break;
        default:
          throw Error(j(329));
      }
    }
  }
  return De(e, ae()), e.callbackNode === n ? Eg.bind(null, e) : null;
}
function au(e, t) {
  var n = Si;
  return (
    e.current.memoizedState.isDehydrated && (Dn(e, t).flags |= 256),
    (e = Cs(e, t)),
    e !== 2 && ((t = Re), (Re = n), t !== null && lu(t)),
    e
  );
}
function lu(e) {
  Re === null ? (Re = e) : Re.push.apply(Re, e);
}
function Rx(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!ht(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function en(e, t) {
  for (
    t &= ~kc,
      t &= ~Zs,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - ct(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function bf(e) {
  if (F & 6) throw Error(j(327));
  Cr();
  var t = os(e, 0);
  if (!(t & 1)) return De(e, ae()), null;
  var n = Cs(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ll(e);
    r !== 0 && ((t = r), (n = au(e, r)));
  }
  if (n === 1) throw ((n = Ui), Dn(e, 0), en(e, t), De(e, ae()), n);
  if (n === 6) throw Error(j(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Tn(e, Re, Pt),
    De(e, ae()),
    null
  );
}
function bc(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    (F = n), F === 0 && ((Rr = ae() + 500), Ys && wn());
  }
}
function Gn(e) {
  nn !== null && nn.tag === 0 && !(F & 6) && Cr();
  var t = F;
  F |= 1;
  var n = Je.transition,
    r = U;
  try {
    if (((Je.transition = null), (U = 1), e)) return e();
  } finally {
    (U = r), (Je.transition = n), (F = t), !(F & 6) && wn();
  }
}
function Pc() {
  (ze = dr.current), Z(dr);
}
function Dn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), ax(n)), ue !== null))
    for (n = ue.return; n !== null; ) {
      var r = n;
      switch ((oc(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && cs();
          break;
        case 3:
          Nr(), Z(Oe), Z(Ee), pc();
          break;
        case 5:
          hc(r);
          break;
        case 4:
          Nr();
          break;
        case 13:
          Z(ee);
          break;
        case 19:
          Z(ee);
          break;
        case 10:
          uc(r.type._context);
          break;
        case 22:
        case 23:
          Pc();
      }
      n = n.return;
    }
  if (
    ((me = e),
    (ue = e = fn(e.current, null)),
    (ye = ze = t),
    (de = 0),
    (Ui = null),
    (kc = Zs = Un = 0),
    (Re = Si = null),
    Mn !== null)
  ) {
    for (t = 0; t < Mn.length; t++)
      if (((n = Mn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    Mn = null;
  }
  return e;
}
function jg(e, t) {
  do {
    var n = ue;
    try {
      if ((lc(), (zo.current = xs), vs)) {
        for (var r = ne.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        vs = !1;
      }
      if (
        ((Wn = 0),
        (he = ce = ne = null),
        (xi = !1),
        (Bi = 0),
        (Sc.current = null),
        n === null || n.return === null)
      ) {
        (de = 1), (Ui = t), (ue = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = ye),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var h = c.alternate;
            h
              ? ((c.updateQueue = h.updateQueue),
                (c.memoizedState = h.memoizedState),
                (c.lanes = h.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var y = df(s);
          if (y !== null) {
            (y.flags &= -257),
              ff(y, s, a, o, t),
              y.mode & 1 && cf(o, u, t),
              (t = y),
              (l = u);
            var v = t.updateQueue;
            if (v === null) {
              var x = new Set();
              x.add(l), (t.updateQueue = x);
            } else v.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              cf(o, u, t), Ec();
              break e;
            }
            l = Error(j(426));
          }
        } else if (J && a.mode & 1) {
          var S = df(s);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256),
              ff(S, s, a, o, t),
              sc(Ar(l, a));
            break e;
          }
        }
        (o = l = Ar(l, a)),
          de !== 4 && (de = 2),
          Si === null ? (Si = [o]) : Si.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var m = cg(o, l, t);
              rf(o, m);
              break e;
            case 1:
              a = l;
              var p = o.type,
                g = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (cn === null || !cn.has(g))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var w = dg(o, a, t);
                rf(o, w);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Ag(n);
    } catch (C) {
      (t = C), ue === n && n !== null && (ue = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Tg() {
  var e = ws.current;
  return (ws.current = xs), e === null ? xs : e;
}
function Ec() {
  (de === 0 || de === 3 || de === 2) && (de = 4),
    me === null || (!(Un & 268435455) && !(Zs & 268435455)) || en(me, ye);
}
function Cs(e, t) {
  var n = F;
  F |= 2;
  var r = Tg();
  (me !== e || ye !== t) && ((Pt = null), Dn(e, t));
  do
    try {
      Mx();
      break;
    } catch (i) {
      jg(e, i);
    }
  while (!0);
  if ((lc(), (F = n), (ws.current = r), ue !== null)) throw Error(j(261));
  return (me = null), (ye = 0), de;
}
function Mx() {
  for (; ue !== null; ) Ng(ue);
}
function Lx() {
  for (; ue !== null && !i1(); ) Ng(ue);
}
function Ng(e) {
  var t = Mg(e.alternate, e, ze);
  (e.memoizedProps = e.pendingProps),
    t === null ? Ag(e) : (ue = t),
    (Sc.current = null);
}
function Ag(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Ex(n, t)), n !== null)) {
        (n.flags &= 32767), (ue = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (de = 6), (ue = null);
        return;
      }
    } else if (((n = Px(n, t, ze)), n !== null)) {
      ue = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ue = t;
      return;
    }
    ue = t = e;
  } while (t !== null);
  de === 0 && (de = 5);
}
function Tn(e, t, n) {
  var r = U,
    i = Je.transition;
  try {
    (Je.transition = null), (U = 1), Ox(e, t, n, r);
  } finally {
    (Je.transition = i), (U = r);
  }
  return null;
}
function Ox(e, t, n, r) {
  do Cr();
  while (nn !== null);
  if (F & 6) throw Error(j(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(j(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (p1(e, o),
    e === me && ((ue = me = null), (ye = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Po ||
      ((Po = !0),
      Lg(is, function () {
        return Cr(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Je.transition), (Je.transition = null);
    var s = U;
    U = 1;
    var a = F;
    (F |= 4),
      (Sc.current = null),
      Tx(e, n),
      bg(n, e),
      ex(zl),
      (ss = !!Vl),
      (zl = Vl = null),
      (e.current = n),
      Nx(n),
      o1(),
      (F = a),
      (U = s),
      (Je.transition = o);
  } else e.current = n;
  if (
    (Po && ((Po = !1), (nn = e), (ks = i)),
    (o = e.pendingLanes),
    o === 0 && (cn = null),
    l1(n.stateNode),
    De(e, ae()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Ss) throw ((Ss = !1), (e = ou), (ou = null), e);
  return (
    ks & 1 && e.tag !== 0 && Cr(),
    (o = e.pendingLanes),
    o & 1 ? (e === su ? ki++ : ((ki = 0), (su = e))) : (ki = 0),
    wn(),
    null
  );
}
function Cr() {
  if (nn !== null) {
    var e = cm(ks),
      t = Je.transition,
      n = U;
    try {
      if (((Je.transition = null), (U = 16 > e ? 16 : e), nn === null))
        var r = !1;
      else {
        if (((e = nn), (nn = null), (ks = 0), F & 6)) throw Error(j(331));
        var i = F;
        for (F |= 4, N = e.current; N !== null; ) {
          var o = N,
            s = o.child;
          if (N.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (N = u; N !== null; ) {
                  var c = N;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      wi(8, c, o);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (N = d);
                  else
                    for (; N !== null; ) {
                      c = N;
                      var h = c.sibling,
                        y = c.return;
                      if ((Sg(c), c === u)) {
                        N = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = y), (N = h);
                        break;
                      }
                      N = y;
                    }
                }
              }
              var v = o.alternate;
              if (v !== null) {
                var x = v.child;
                if (x !== null) {
                  v.child = null;
                  do {
                    var S = x.sibling;
                    (x.sibling = null), (x = S);
                  } while (x !== null);
                }
              }
              N = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (N = s);
          else
            e: for (; N !== null; ) {
              if (((o = N), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    wi(9, o, o.return);
                }
              var m = o.sibling;
              if (m !== null) {
                (m.return = o.return), (N = m);
                break e;
              }
              N = o.return;
            }
        }
        var p = e.current;
        for (N = p; N !== null; ) {
          s = N;
          var g = s.child;
          if (s.subtreeFlags & 2064 && g !== null) (g.return = s), (N = g);
          else
            e: for (s = p; N !== null; ) {
              if (((a = N), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      qs(9, a);
                  }
                } catch (C) {
                  ie(a, a.return, C);
                }
              if (a === s) {
                N = null;
                break e;
              }
              var w = a.sibling;
              if (w !== null) {
                (w.return = a.return), (N = w);
                break e;
              }
              N = a.return;
            }
        }
        if (
          ((F = i), wn(), vt && typeof vt.onPostCommitFiberRoot == "function")
        )
          try {
            vt.onPostCommitFiberRoot(Ws, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (U = n), (Je.transition = t);
    }
  }
  return !1;
}
function Pf(e, t, n) {
  (t = Ar(n, t)),
    (t = cg(e, t, 1)),
    (e = un(e, t, 1)),
    (t = Te()),
    e !== null && (Zi(e, 1, t), De(e, t));
}
function ie(e, t, n) {
  if (e.tag === 3) Pf(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Pf(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (cn === null || !cn.has(r)))
        ) {
          (e = Ar(n, e)),
            (e = dg(t, e, 1)),
            (t = un(t, e, 1)),
            (e = Te()),
            t !== null && (Zi(t, 1, e), De(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function _x(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Te()),
    (e.pingedLanes |= e.suspendedLanes & n),
    me === e &&
      (ye & n) === n &&
      (de === 4 || (de === 3 && (ye & 130023424) === ye && 500 > ae() - Cc)
        ? Dn(e, 0)
        : (kc |= n)),
    De(e, t);
}
function Rg(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = mo), (mo <<= 1), !(mo & 130023424) && (mo = 4194304))
      : (t = 1));
  var n = Te();
  (e = Ft(e, t)), e !== null && (Zi(e, t, n), De(e, n));
}
function Dx(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Rg(e, n);
}
function Ix(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(j(314));
  }
  r !== null && r.delete(t), Rg(e, n);
}
var Mg;
Mg = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Oe.current) Me = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Me = !1), bx(e, t, n);
      Me = !!(e.flags & 131072);
    }
  else (Me = !1), J && t.flags & 1048576 && Dm(t, hs, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Bo(e, t), (e = t.pendingProps);
      var i = Er(t, Ee.current);
      kr(t, n), (i = gc(null, t, r, e, i, n));
      var o = yc();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            _e(r) ? ((o = !0), ds(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            dc(t),
            (i.updater = Xs),
            (t.stateNode = i),
            (i._reactInternals = t),
            Yl(t, r, e, n),
            (t = ql(null, t, r, !0, o, n)))
          : ((t.tag = 0), J && o && ic(t), je(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Bo(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = zx(r)),
          (e = at(r, e)),
          i)
        ) {
          case 0:
            t = Xl(null, t, r, e, n);
            break e;
          case 1:
            t = mf(null, t, r, e, n);
            break e;
          case 11:
            t = hf(null, t, r, e, n);
            break e;
          case 14:
            t = pf(null, t, r, at(r.type, e), n);
            break e;
        }
        throw Error(j(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : at(r, i)),
        Xl(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : at(r, i)),
        mf(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((mg(t), e === null)) throw Error(j(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          $m(e, t),
          gs(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Ar(Error(j(423)), t)), (t = gf(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Ar(Error(j(424)), t)), (t = gf(e, t, r, n, i));
            break e;
          } else
            for (
              Fe = ln(t.stateNode.containerInfo.firstChild),
                Be = t,
                J = !0,
                ut = null,
                n = Fm(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((jr(), r === i)) {
            t = Bt(e, t, n);
            break e;
          }
          je(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Wm(t),
        e === null && Gl(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        Fl(r, i) ? (s = null) : o !== null && Fl(r, o) && (t.flags |= 32),
        pg(e, t),
        je(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Gl(t), null;
    case 13:
      return gg(e, t, n);
    case 4:
      return (
        fc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Tr(t, null, r, n)) : je(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : at(r, i)),
        hf(e, t, r, i, n)
      );
    case 7:
      return je(e, t, t.pendingProps, n), t.child;
    case 8:
      return je(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return je(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          Y(ps, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (ht(o.value, s)) {
            if (o.children === i.children && !Oe.current) {
              t = Bt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                s = o.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (o.tag === 1) {
                      (l = Lt(-1, n & -n)), (l.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (o.lanes |= n),
                      (l = o.alternate),
                      l !== null && (l.lanes |= n),
                      Hl(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(j(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  Hl(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        je(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        kr(t, n),
        (i = et(i)),
        (r = r(i)),
        (t.flags |= 1),
        je(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = at(r, t.pendingProps)),
        (i = at(r.type, i)),
        pf(e, t, r, i, n)
      );
    case 15:
      return fg(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : at(r, i)),
        Bo(e, t),
        (t.tag = 1),
        _e(r) ? ((e = !0), ds(t)) : (e = !1),
        kr(t, n),
        ug(t, r, i),
        Yl(t, r, i, n),
        ql(null, t, r, !0, e, n)
      );
    case 19:
      return yg(e, t, n);
    case 22:
      return hg(e, t, n);
  }
  throw Error(j(156, t.tag));
};
function Lg(e, t) {
  return sm(e, t);
}
function Vx(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ze(e, t, n, r) {
  return new Vx(e, t, n, r);
}
function jc(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function zx(e) {
  if (typeof e == "function") return jc(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Hu)) return 11;
    if (e === Ku) return 14;
  }
  return 2;
}
function fn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ze(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Uo(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) jc(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case tr:
        return In(n.children, i, o, t);
      case Gu:
        (s = 8), (i |= 8);
        break;
      case vl:
        return (
          (e = Ze(12, n, t, i | 2)), (e.elementType = vl), (e.lanes = o), e
        );
      case xl:
        return (e = Ze(13, n, t, i)), (e.elementType = xl), (e.lanes = o), e;
      case wl:
        return (e = Ze(19, n, t, i)), (e.elementType = wl), (e.lanes = o), e;
      case Wp:
        return Js(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Bp:
              s = 10;
              break e;
            case $p:
              s = 9;
              break e;
            case Hu:
              s = 11;
              break e;
            case Ku:
              s = 14;
              break e;
            case qt:
              (s = 16), (r = null);
              break e;
          }
        throw Error(j(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ze(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function In(e, t, n, r) {
  return (e = Ze(7, e, r, t)), (e.lanes = n), e;
}
function Js(e, t, n, r) {
  return (
    (e = Ze(22, e, r, t)),
    (e.elementType = Wp),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ga(e, t, n) {
  return (e = Ze(6, e, null, t)), (e.lanes = n), e;
}
function Ha(e, t, n) {
  return (
    (t = Ze(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Fx(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ea(0)),
    (this.expirationTimes = Ea(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ea(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Tc(e, t, n, r, i, o, s, a, l) {
  return (
    (e = new Fx(e, t, n, a, l)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ze(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    dc(o),
    e
  );
}
function Bx(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: er,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Og(e) {
  if (!e) return mn;
  e = e._reactInternals;
  e: {
    if (Yn(e) !== e || e.tag !== 1) throw Error(j(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (_e(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(j(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (_e(n)) return Om(e, n, t);
  }
  return t;
}
function _g(e, t, n, r, i, o, s, a, l) {
  return (
    (e = Tc(n, r, !0, e, i, o, s, a, l)),
    (e.context = Og(null)),
    (n = e.current),
    (r = Te()),
    (i = dn(n)),
    (o = Lt(r, i)),
    (o.callback = t ?? null),
    un(n, o, i),
    (e.current.lanes = i),
    Zi(e, i, r),
    De(e, r),
    e
  );
}
function ea(e, t, n, r) {
  var i = t.current,
    o = Te(),
    s = dn(i);
  return (
    (n = Og(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Lt(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = un(i, t, s)),
    e !== null && (dt(e, i, s, o), Vo(e, i, s)),
    s
  );
}
function bs(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ef(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Nc(e, t) {
  Ef(e, t), (e = e.alternate) && Ef(e, t);
}
function $x() {
  return null;
}
var Dg =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ac(e) {
  this._internalRoot = e;
}
ta.prototype.render = Ac.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(j(409));
  ea(e, t, null, null);
};
ta.prototype.unmount = Ac.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Gn(function () {
      ea(null, e, null, null);
    }),
      (t[zt] = null);
  }
};
function ta(e) {
  this._internalRoot = e;
}
ta.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = hm();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Jt.length && t !== 0 && t < Jt[n].priority; n++);
    Jt.splice(n, 0, e), n === 0 && mm(e);
  }
};
function Rc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function na(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function jf() {}
function Wx(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = bs(s);
        o.call(u);
      };
    }
    var s = _g(t, r, e, 0, null, !1, !1, "", jf);
    return (
      (e._reactRootContainer = s),
      (e[zt] = s.current),
      Di(e.nodeType === 8 ? e.parentNode : e),
      Gn(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = bs(l);
      a.call(u);
    };
  }
  var l = Tc(e, 0, !1, null, null, !1, !1, "", jf);
  return (
    (e._reactRootContainer = l),
    (e[zt] = l.current),
    Di(e.nodeType === 8 ? e.parentNode : e),
    Gn(function () {
      ea(t, l, n, r);
    }),
    l
  );
}
function ra(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = bs(s);
        a.call(l);
      };
    }
    ea(t, s, e, i);
  } else s = Wx(n, t, e, i, r);
  return bs(s);
}
dm = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ui(t.pendingLanes);
        n !== 0 &&
          (Xu(t, n | 1), De(t, ae()), !(F & 6) && ((Rr = ae() + 500), wn()));
      }
      break;
    case 13:
      Gn(function () {
        var r = Ft(e, 1);
        if (r !== null) {
          var i = Te();
          dt(r, e, 1, i);
        }
      }),
        Nc(e, 1);
  }
};
qu = function (e) {
  if (e.tag === 13) {
    var t = Ft(e, 134217728);
    if (t !== null) {
      var n = Te();
      dt(t, e, 134217728, n);
    }
    Nc(e, 134217728);
  }
};
fm = function (e) {
  if (e.tag === 13) {
    var t = dn(e),
      n = Ft(e, t);
    if (n !== null) {
      var r = Te();
      dt(n, e, t, r);
    }
    Nc(e, t);
  }
};
hm = function () {
  return U;
};
pm = function (e, t) {
  var n = U;
  try {
    return (U = e), t();
  } finally {
    U = n;
  }
};
Al = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Cl(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Ks(r);
            if (!i) throw Error(j(90));
            Gp(r), Cl(r, i);
          }
        }
      }
      break;
    case "textarea":
      Kp(e, n);
      break;
    case "select":
      (t = n.value), t != null && vr(e, !!n.multiple, t, !1);
  }
};
em = bc;
tm = Gn;
var Ux = { usingClientEntryPoint: !1, Events: [eo, or, Ks, Zp, Jp, bc] },
  ti = {
    findFiberByHostInstance: Rn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Gx = {
    bundleType: ti.bundleType,
    version: ti.version,
    rendererPackageName: ti.rendererPackageName,
    rendererConfig: ti.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: $t.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = im(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: ti.findFiberByHostInstance || $x,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Eo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Eo.isDisabled && Eo.supportsFiber)
    try {
      (Ws = Eo.inject(Gx)), (vt = Eo);
    } catch {}
}
Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ux;
Ue.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Rc(t)) throw Error(j(200));
  return Bx(e, t, null, n);
};
Ue.createRoot = function (e, t) {
  if (!Rc(e)) throw Error(j(299));
  var n = !1,
    r = "",
    i = Dg;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Tc(e, 1, !1, null, null, n, !1, r, i)),
    (e[zt] = t.current),
    Di(e.nodeType === 8 ? e.parentNode : e),
    new Ac(t)
  );
};
Ue.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(j(188))
      : ((e = Object.keys(e).join(",")), Error(j(268, e)));
  return (e = im(t)), (e = e === null ? null : e.stateNode), e;
};
Ue.flushSync = function (e) {
  return Gn(e);
};
Ue.hydrate = function (e, t, n) {
  if (!na(t)) throw Error(j(200));
  return ra(null, e, t, !0, n);
};
Ue.hydrateRoot = function (e, t, n) {
  if (!Rc(e)) throw Error(j(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = Dg;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = _g(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[zt] = t.current),
    Di(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new ta(t);
};
Ue.render = function (e, t, n) {
  if (!na(t)) throw Error(j(200));
  return ra(null, e, t, !1, n);
};
Ue.unmountComponentAtNode = function (e) {
  if (!na(e)) throw Error(j(40));
  return e._reactRootContainer
    ? (Gn(function () {
        ra(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[zt] = null);
        });
      }),
      !0)
    : !1;
};
Ue.unstable_batchedUpdates = bc;
Ue.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!na(n)) throw Error(j(200));
  if (e == null || e._reactInternals === void 0) throw Error(j(38));
  return ra(e, t, n, !1, r);
};
Ue.version = "18.3.1-next-f1338f8080-20240426";
function Ig() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ig);
    } catch (e) {
      console.error(e);
    }
}
Ig(), (Ip.exports = Ue);
var Hx = Ip.exports,
  Tf = Hx;
(gl.createRoot = Tf.createRoot), (gl.hydrateRoot = Tf.hydrateRoot);
const Mc = "assets/G1-xbqpFm3o.webp",
  Vg = "assets/G2--5S_cLD2.webp",
  zg = "assets/G3-C4U1iz0n.webp",
  Fg = "assets/G4-Cnoshtfa.webp",
  Bg = "assets/G5-DVdXceG6.webp",
  $g = "assets/G6-COvtMKIy.webp",
  Kx = "assets/G7-igkAyrGZ.webp",
  Yx = "assets/G8-DAeHvL9i.webp",
  Qx = "assets/G9-CG3NfMPW.webp";
function Xx(e) {
  if (typeof Proxy > "u") return e;
  const t = new Map(),
    n = (...r) => e(...r);
  return new Proxy(n, {
    get: (r, i) =>
      i === "create" ? e : (t.has(i) || t.set(i, e(i)), t.get(i)),
  });
}
function ia(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const uu = (e) => Array.isArray(e);
function Wg(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function Gi(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Nf(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
      }),
    t
  );
}
function Lc(e, t, n, r) {
  if (typeof t == "function") {
    const [i, o] = Nf(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [i, o] = Nf(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  return t;
}
function oa(e, t, n) {
  const r = e.getProps();
  return Lc(r, t, n !== void 0 ? n : r.custom, e);
}
const Oc = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  _c = ["initial", ...Oc],
  no = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Qn = new Set(no),
  Ot = (e) => e * 1e3,
  _t = (e) => e / 1e3,
  qx = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  Zx = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  Jx = { type: "keyframes", duration: 0.8 },
  ew = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  tw = (e, { keyframes: t }) =>
    t.length > 2
      ? Jx
      : Qn.has(e)
      ? e.startsWith("scale")
        ? Zx(t[1])
        : qx
      : ew;
function Dc(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const nw = { skipAnimations: !1, useManualTiming: !1 },
  rw = (e) => e !== null;
function sa(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(rw),
    o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !o || r === void 0 ? i[o] : r;
}
const ve = (e) => e;
function iw(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    i = !1;
  const o = new WeakSet();
  let s = { delta: 0, timestamp: 0, isProcessing: !1 };
  function a(u) {
    o.has(u) && (l.schedule(u), e()), u(s);
  }
  const l = {
    schedule: (u, c = !1, d = !1) => {
      const y = d && r ? t : n;
      return c && o.add(u), y.has(u) || y.add(u), u;
    },
    cancel: (u) => {
      n.delete(u), o.delete(u);
    },
    process: (u) => {
      if (((s = u), r)) {
        i = !0;
        return;
      }
      (r = !0),
        ([t, n] = [n, t]),
        n.clear(),
        t.forEach(a),
        (r = !1),
        i && ((i = !1), l.process(u));
    },
  };
  return l;
}
const jo = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  ow = 40;
function Ug(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = () => (n = !0),
    s = jo.reduce((m, p) => ((m[p] = iw(o)), m), {}),
    {
      read: a,
      resolveKeyframes: l,
      update: u,
      preRender: c,
      render: d,
      postRender: h,
    } = s,
    y = () => {
      const m = performance.now();
      (n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(m - i.timestamp, ow), 1)),
        (i.timestamp = m),
        (i.isProcessing = !0),
        a.process(i),
        l.process(i),
        u.process(i),
        c.process(i),
        d.process(i),
        h.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(y));
    },
    v = () => {
      (n = !0), (r = !0), i.isProcessing || e(y);
    };
  return {
    schedule: jo.reduce((m, p) => {
      const g = s[p];
      return (m[p] = (w, C = !1, b = !1) => (n || v(), g.schedule(w, C, b))), m;
    }, {}),
    cancel: (m) => {
      for (let p = 0; p < jo.length; p++) s[jo[p]].cancel(m);
    },
    state: i,
    steps: s,
  };
}
const {
    schedule: B,
    cancel: kt,
    state: fe,
    steps: Ka,
  } = Ug(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ve, !0),
  Gg = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  sw = 1e-7,
  aw = 12;
function lw(e, t, n, r, i) {
  let o,
    s,
    a = 0;
  do (s = t + (n - t) / 2), (o = Gg(s, r, i) - e), o > 0 ? (n = s) : (t = s);
  while (Math.abs(o) > sw && ++a < aw);
  return s;
}
function ro(e, t, n, r) {
  if (e === t && n === r) return ve;
  const i = (o) => lw(o, 0, 1, e, n);
  return (o) => (o === 0 || o === 1 ? o : Gg(i(o), t, r));
}
const Hg = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  Kg = (e) => (t) => 1 - e(1 - t),
  Yg = ro(0.33, 1.53, 0.69, 0.99),
  Ic = Kg(Yg),
  Qg = Hg(Ic),
  Xg = (e) =>
    (e *= 2) < 1 ? 0.5 * Ic(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Vc = (e) => 1 - Math.sin(Math.acos(e)),
  qg = Kg(Vc),
  Zg = Hg(Vc),
  Jg = (e) => /^0[^.\s]+$/u.test(e);
function uw(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || Jg(e)
    : !0;
}
let cw = ve,
  cu = ve;
const ey = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  ty = (e) => (t) => typeof t == "string" && t.startsWith(e),
  ny = ty("--"),
  dw = ty("var(--"),
  zc = (e) => (dw(e) ? fw.test(e.split("/*")[0].trim()) : !1),
  fw =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  hw = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function pw(e) {
  const t = hw.exec(e);
  if (!t) return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function ry(e, t, n = 1) {
  const [r, i] = pw(e);
  if (!r) return;
  const o = window.getComputedStyle(t).getPropertyValue(r);
  if (o) {
    const s = o.trim();
    return ey(s) ? parseFloat(s) : s;
  }
  return zc(i) ? ry(i, t, n + 1) : i;
}
const gn = (e, t, n) => (n > t ? t : n < e ? e : n),
  Wr = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Hi = { ...Wr, transform: (e) => gn(0, 1, e) },
  To = { ...Wr, default: 1 },
  io = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Yt = io("deg"),
  wt = io("%"),
  L = io("px"),
  mw = io("vh"),
  gw = io("vw"),
  Af = {
    ...wt,
    parse: (e) => wt.parse(e) / 100,
    transform: (e) => wt.transform(e * 100),
  },
  yw = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  Rf = (e) => e === Wr || e === L,
  Mf = (e, t) => parseFloat(e.split(", ")[t]),
  Lf =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/u);
      if (i) return Mf(i[1], t);
      {
        const o = r.match(/^matrix\((.+)\)$/u);
        return o ? Mf(o[1], e) : 0;
      }
    },
  vw = new Set(["x", "y", "z"]),
  xw = no.filter((e) => !vw.has(e));
function ww(e) {
  const t = [];
  return (
    xw.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const Mr = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: Lf(4, 13),
  y: Lf(5, 14),
};
Mr.translateX = Mr.x;
Mr.translateY = Mr.y;
const iy = (e) => (t) => t.test(e),
  Sw = { test: (e) => e === "auto", parse: (e) => e },
  oy = [Wr, L, wt, Yt, gw, mw, Sw],
  Of = (e) => oy.find(iy(e)),
  Vn = new Set();
let du = !1,
  fu = !1;
function sy() {
  if (fu) {
    const e = Array.from(Vn).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const i = ww(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const i = n.get(r);
        i &&
          i.forEach(([o, s]) => {
            var a;
            (a = r.getValue(o)) === null || a === void 0 || a.set(s);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (fu = !1), (du = !1), Vn.forEach((e) => e.complete()), Vn.clear();
}
function ay() {
  Vn.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (fu = !0);
  });
}
function kw() {
  ay(), sy();
}
class Fc {
  constructor(t, n, r, i, o, s = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = o),
      (this.isAsync = s);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (Vn.add(this), du || ((du = !0), B.read(ay), B.resolveKeyframes(sy)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: i,
    } = this;
    for (let o = 0; o < t.length; o++)
      if (t[o] === null)
        if (o === 0) {
          const s = i == null ? void 0 : i.get(),
            a = t[t.length - 1];
          if (s !== void 0) t[0] = s;
          else if (r && n) {
            const l = r.readValue(n, a);
            l != null && (t[0] = l);
          }
          t[0] === void 0 && (t[0] = a), i && s === void 0 && i.set(t[0]);
        } else t[o] = t[o - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      Vn.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), Vn.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Ci = (e) => Math.round(e * 1e5) / 1e5,
  Bc = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Cw(e) {
  return e == null;
}
const bw =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  $c = (e, t) => (n) =>
    !!(
      (typeof n == "string" && bw.test(n) && n.startsWith(e)) ||
      (t && !Cw(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  ly = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [i, o, s, a] = r.match(Bc);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  Pw = (e) => gn(0, 255, e),
  Ya = { ...Wr, transform: (e) => Math.round(Pw(e)) },
  On = {
    test: $c("rgb", "red"),
    parse: ly("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Ya.transform(e) +
      ", " +
      Ya.transform(t) +
      ", " +
      Ya.transform(n) +
      ", " +
      Ci(Hi.transform(r)) +
      ")",
  };
function Ew(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const hu = { test: $c("#"), parse: Ew, transform: On.transform },
  fr = {
    test: $c("hsl", "hue"),
    parse: ly("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      wt.transform(Ci(t)) +
      ", " +
      wt.transform(Ci(n)) +
      ", " +
      Ci(Hi.transform(r)) +
      ")",
  },
  ke = {
    test: (e) => On.test(e) || hu.test(e) || fr.test(e),
    parse: (e) =>
      On.test(e) ? On.parse(e) : fr.test(e) ? fr.parse(e) : hu.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
        ? On.transform(e)
        : fr.transform(e),
  },
  jw =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Tw(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(Bc)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(jw)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const uy = "number",
  cy = "color",
  Nw = "var",
  Aw = "var(",
  _f = "${}",
  Rw =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Ki(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [];
  let o = 0;
  const a = t
    .replace(
      Rw,
      (l) => (
        ke.test(l)
          ? (r.color.push(o), i.push(cy), n.push(ke.parse(l)))
          : l.startsWith(Aw)
          ? (r.var.push(o), i.push(Nw), n.push(l))
          : (r.number.push(o), i.push(uy), n.push(parseFloat(l))),
        ++o,
        _f
      )
    )
    .split(_f);
  return { values: n, split: a, indexes: r, types: i };
}
function dy(e) {
  return Ki(e).values;
}
function fy(e) {
  const { split: t, types: n } = Ki(e),
    r = t.length;
  return (i) => {
    let o = "";
    for (let s = 0; s < r; s++)
      if (((o += t[s]), i[s] !== void 0)) {
        const a = n[s];
        a === uy
          ? (o += Ci(i[s]))
          : a === cy
          ? (o += ke.transform(i[s]))
          : (o += i[s]);
      }
    return o;
  };
}
const Mw = (e) => (typeof e == "number" ? 0 : e);
function Lw(e) {
  const t = dy(e);
  return fy(e)(t.map(Mw));
}
const yn = {
    test: Tw,
    parse: dy,
    createTransformer: fy,
    getAnimatableNone: Lw,
  },
  Ow = new Set(["brightness", "contrast", "saturate", "opacity"]);
function _w(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(Bc) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let o = Ow.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + "(" + o + i + ")";
}
const Dw = /\b([a-z-]*)\(.*?\)/gu,
  pu = {
    ...yn,
    getAnimatableNone: (e) => {
      const t = e.match(Dw);
      return t ? t.map(_w).join(" ") : e;
    },
  },
  Iw = {
    borderWidth: L,
    borderTopWidth: L,
    borderRightWidth: L,
    borderBottomWidth: L,
    borderLeftWidth: L,
    borderRadius: L,
    radius: L,
    borderTopLeftRadius: L,
    borderTopRightRadius: L,
    borderBottomRightRadius: L,
    borderBottomLeftRadius: L,
    width: L,
    maxWidth: L,
    height: L,
    maxHeight: L,
    top: L,
    right: L,
    bottom: L,
    left: L,
    padding: L,
    paddingTop: L,
    paddingRight: L,
    paddingBottom: L,
    paddingLeft: L,
    margin: L,
    marginTop: L,
    marginRight: L,
    marginBottom: L,
    marginLeft: L,
    backgroundPositionX: L,
    backgroundPositionY: L,
  },
  Vw = {
    rotate: Yt,
    rotateX: Yt,
    rotateY: Yt,
    rotateZ: Yt,
    scale: To,
    scaleX: To,
    scaleY: To,
    scaleZ: To,
    skew: Yt,
    skewX: Yt,
    skewY: Yt,
    distance: L,
    translateX: L,
    translateY: L,
    translateZ: L,
    x: L,
    y: L,
    z: L,
    perspective: L,
    transformPerspective: L,
    opacity: Hi,
    originX: Af,
    originY: Af,
    originZ: L,
  },
  Df = { ...Wr, transform: Math.round },
  Wc = {
    ...Iw,
    ...Vw,
    zIndex: Df,
    size: L,
    fillOpacity: Hi,
    strokeOpacity: Hi,
    numOctaves: Df,
  },
  zw = {
    ...Wc,
    color: ke,
    backgroundColor: ke,
    outlineColor: ke,
    fill: ke,
    stroke: ke,
    borderColor: ke,
    borderTopColor: ke,
    borderRightColor: ke,
    borderBottomColor: ke,
    borderLeftColor: ke,
    filter: pu,
    WebkitFilter: pu,
  },
  Uc = (e) => zw[e];
function hy(e, t) {
  let n = Uc(e);
  return (
    n !== pu && (n = yn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const Fw = new Set(["auto", "none", "0"]);
function Bw(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    const o = e[r];
    typeof o == "string" && !Fw.has(o) && Ki(o).values.length && (i = e[r]),
      r++;
  }
  if (i && n) for (const o of t) e[o] = hy(n, i);
}
class py extends Fc {
  constructor(t, n, r, i, o) {
    super(t, n, r, i, o, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let u = t[l];
      if (typeof u == "string" && ((u = u.trim()), zc(u))) {
        const c = ry(u, n.current);
        c !== void 0 && (t[l] = c),
          l === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if ((this.resolveNoneKeyframes(), !yw.has(r) || t.length !== 2)) return;
    const [i, o] = t,
      s = Of(i),
      a = Of(o);
    if (s !== a)
      if (Rf(s) && Rf(a))
        for (let l = 0; l < t.length; l++) {
          const u = t[l];
          typeof u == "string" && (t[l] = parseFloat(u));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let i = 0; i < t.length; i++) uw(t[i]) && r.push(i);
    r.length && Bw(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Mr[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (n[0] = this.measuredOrigin);
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: i } = this;
    if (!n || !n.current) return;
    const o = n.getValue(r);
    o && o.jump(this.measuredOrigin, !1);
    const s = i.length - 1,
      a = i[s];
    (i[s] = Mr[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([l, u]) => {
          n.getValue(l).set(u);
        }),
      this.resolveNoneKeyframes();
  }
}
function Gc(e) {
  return typeof e == "function";
}
let Go;
function $w() {
  Go = void 0;
}
const St = {
    now: () => (
      Go === void 0 &&
        St.set(
          fe.isProcessing || nw.useManualTiming
            ? fe.timestamp
            : performance.now()
        ),
      Go
    ),
    set: (e) => {
      (Go = e), queueMicrotask($w);
    },
  },
  If = (e, t) =>
    t === "zIndex"
      ? !1
      : !!(
          typeof e == "number" ||
          Array.isArray(e) ||
          (typeof e == "string" &&
            (yn.test(e) || e === "0") &&
            !e.startsWith("url("))
        );
function Ww(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function Uw(e, t, n, r) {
  const i = e[0];
  if (i === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const o = e[e.length - 1],
    s = If(i, t),
    a = If(o, t);
  return !s || !a ? !1 : Ww(e) || ((n === "spring" || Gc(n)) && r);
}
const Gw = 40;
class my {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: i = 0,
    repeatDelay: o = 0,
    repeatType: s = "loop",
    ...a
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = St.now()),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: o,
        repeatType: s,
        ...a,
      }),
      this.updateFinishedPromise();
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > Gw
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && kw(), this._resolved;
  }
  onKeyframesResolved(t, n) {
    (this.resolvedAt = St.now()), (this.hasAttemptedResolve = !0);
    const {
      name: r,
      type: i,
      velocity: o,
      delay: s,
      onComplete: a,
      onUpdate: l,
      isGenerator: u,
    } = this.options;
    if (!u && !Uw(t, r, i, o))
      if (s) this.options.duration = 0;
      else {
        l == null || l(sa(t, this.options, n)),
          a == null || a(),
          this.resolveFinishedPromise();
        return;
      }
    const c = this.initPlayback(t, n);
    c !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...c }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
function Hc(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Hw = 5;
function gy(e, t, n) {
  const r = Math.max(t - Hw, 0);
  return Hc(n - e(r), t - r);
}
const Qa = 0.001,
  Kw = 0.01,
  Yw = 10,
  Qw = 0.05,
  Xw = 1;
function qw({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let i,
    o,
    s = 1 - t;
  (s = gn(Qw, Xw, s)),
    (e = gn(Kw, Yw, _t(e))),
    s < 1
      ? ((i = (u) => {
          const c = u * s,
            d = c * e,
            h = c - n,
            y = mu(u, s),
            v = Math.exp(-d);
          return Qa - (h / y) * v;
        }),
        (o = (u) => {
          const d = u * s * e,
            h = d * n + n,
            y = Math.pow(s, 2) * Math.pow(u, 2) * e,
            v = Math.exp(-d),
            x = mu(Math.pow(u, 2), s);
          return ((-i(u) + Qa > 0 ? -1 : 1) * ((h - y) * v)) / x;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            d = (u - n) * e + 1;
          return -Qa + c * d;
        }),
        (o = (u) => {
          const c = Math.exp(-u * e),
            d = (n - u) * (e * e);
          return c * d;
        }));
  const a = 5 / e,
    l = Jw(i, o, a);
  if (((e = Ot(e)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
  }
}
const Zw = 12;
function Jw(e, t, n) {
  let r = n;
  for (let i = 1; i < Zw; i++) r = r - e(r) / t(r);
  return r;
}
function mu(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const eS = ["duration", "bounce"],
  tS = ["stiffness", "damping", "mass"];
function Vf(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function nS(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Vf(e, tS) && Vf(e, eS)) {
    const n = qw(e);
    (t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function yy({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const i = e[0],
    o = e[e.length - 1],
    s = { done: !1, value: i },
    {
      stiffness: a,
      damping: l,
      mass: u,
      duration: c,
      velocity: d,
      isResolvedFromDuration: h,
    } = nS({ ...r, velocity: -_t(r.velocity || 0) }),
    y = d || 0,
    v = l / (2 * Math.sqrt(a * u)),
    x = o - i,
    S = _t(Math.sqrt(a / u)),
    m = Math.abs(x) < 5;
  n || (n = m ? 0.01 : 2), t || (t = m ? 0.005 : 0.5);
  let p;
  if (v < 1) {
    const g = mu(S, v);
    p = (w) => {
      const C = Math.exp(-v * S * w);
      return (
        o - C * (((y + v * S * x) / g) * Math.sin(g * w) + x * Math.cos(g * w))
      );
    };
  } else if (v === 1) p = (g) => o - Math.exp(-S * g) * (x + (y + S * x) * g);
  else {
    const g = S * Math.sqrt(v * v - 1);
    p = (w) => {
      const C = Math.exp(-v * S * w),
        b = Math.min(g * w, 300);
      return (
        o - (C * ((y + v * S * x) * Math.sinh(b) + g * x * Math.cosh(b))) / g
      );
    };
  }
  return {
    calculatedDuration: (h && c) || null,
    next: (g) => {
      const w = p(g);
      if (h) s.done = g >= c;
      else {
        let C = 0;
        v < 1 && (C = g === 0 ? Ot(y) : gy(p, g, w));
        const b = Math.abs(C) <= n,
          P = Math.abs(o - w) <= t;
        s.done = b && P;
      }
      return (s.value = s.done ? o : w), s;
    },
  };
}
function zf({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: s,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const d = e[0],
    h = { done: !1, value: d },
    y = (E) => (a !== void 0 && E < a) || (l !== void 0 && E > l),
    v = (E) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - E) < Math.abs(l - E)
        ? a
        : l;
  let x = n * t;
  const S = d + x,
    m = s === void 0 ? S : s(S);
  m !== S && (x = m - d);
  const p = (E) => -x * Math.exp(-E / r),
    g = (E) => m + p(E),
    w = (E) => {
      const O = p(E),
        R = g(E);
      (h.done = Math.abs(O) <= u), (h.value = h.done ? m : R);
    };
  let C, b;
  const P = (E) => {
    y(h.value) &&
      ((C = E),
      (b = yy({
        keyframes: [h.value, v(h.value)],
        velocity: gy(g, E, h.value),
        damping: i,
        stiffness: o,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    P(0),
    {
      calculatedDuration: null,
      next: (E) => {
        let O = !1;
        return (
          !b && C === void 0 && ((O = !0), w(E), P(E)),
          C !== void 0 && E >= C ? b.next(E - C) : (!O && w(E), h)
        );
      },
    }
  );
}
const rS = ro(0.42, 0, 1, 1),
  iS = ro(0, 0, 0.58, 1),
  vy = ro(0.42, 0, 0.58, 1),
  oS = (e) => Array.isArray(e) && typeof e[0] != "number",
  Kc = (e) => Array.isArray(e) && typeof e[0] == "number",
  Ff = {
    linear: ve,
    easeIn: rS,
    easeInOut: vy,
    easeOut: iS,
    circIn: Vc,
    circInOut: Zg,
    circOut: qg,
    backIn: Ic,
    backInOut: Qg,
    backOut: Yg,
    anticipate: Xg,
  },
  Bf = (e) => {
    if (Kc(e)) {
      cu(e.length === 4);
      const [t, n, r, i] = e;
      return ro(t, n, r, i);
    } else if (typeof e == "string") return cu(Ff[e] !== void 0), Ff[e];
    return e;
  },
  sS = (e, t) => (n) => t(e(n)),
  Dt = (...e) => e.reduce(sS),
  Hn = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  te = (e, t, n) => e + (t - e) * n;
function Xa(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function aS({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    o = 0,
    s = 0;
  if (!t) i = o = s = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (i = Xa(l, a, e + 1 / 3)), (o = Xa(l, a, e)), (s = Xa(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
function Ps(e, t) {
  return (n) => (n > 0 ? t : e);
}
const qa = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  lS = [hu, On, fr],
  uS = (e) => lS.find((t) => t.test(e));
function $f(e) {
  const t = uS(e);
  if (!t) return !1;
  let n = t.parse(e);
  return t === fr && (n = aS(n)), n;
}
const Wf = (e, t) => {
    const n = $f(e),
      r = $f(t);
    if (!n || !r) return Ps(e, t);
    const i = { ...n };
    return (o) => (
      (i.red = qa(n.red, r.red, o)),
      (i.green = qa(n.green, r.green, o)),
      (i.blue = qa(n.blue, r.blue, o)),
      (i.alpha = te(n.alpha, r.alpha, o)),
      On.transform(i)
    );
  },
  gu = new Set(["none", "hidden"]);
function cS(e, t) {
  return gu.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function dS(e, t) {
  return (n) => te(e, t, n);
}
function Yc(e) {
  return typeof e == "number"
    ? dS
    : typeof e == "string"
    ? zc(e)
      ? Ps
      : ke.test(e)
      ? Wf
      : pS
    : Array.isArray(e)
    ? xy
    : typeof e == "object"
    ? ke.test(e)
      ? Wf
      : fS
    : Ps;
}
function xy(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((o, s) => Yc(o)(o, t[s]));
  return (o) => {
    for (let s = 0; s < r; s++) n[s] = i[s](o);
    return n;
  };
}
function fS(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = Yc(e[i])(e[i], t[i]));
  return (i) => {
    for (const o in r) n[o] = r[o](i);
    return n;
  };
}
function hS(e, t) {
  var n;
  const r = [],
    i = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < t.values.length; o++) {
    const s = t.types[o],
      a = e.indexes[s][i[s]],
      l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    (r[o] = l), i[s]++;
  }
  return r;
}
const pS = (e, t) => {
  const n = yn.createTransformer(t),
    r = Ki(e),
    i = Ki(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (gu.has(e) && !i.values.length) || (gu.has(t) && !r.values.length)
      ? cS(e, t)
      : Dt(xy(hS(r, i), i.values), n)
    : Ps(e, t);
};
function wy(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? te(e, t, n)
    : Yc(e)(e, t);
}
function mS(e, t, n) {
  const r = [],
    i = n || wy,
    o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let a = i(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] || ve : t;
      a = Dt(l, a);
    }
    r.push(a);
  }
  return r;
}
function Sy(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const o = e.length;
  if ((cu(o === t.length), o === 1)) return () => t[0];
  if (o === 2 && e[0] === e[1]) return () => t[1];
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const s = mS(t, r, i),
    a = s.length,
    l = (u) => {
      let c = 0;
      if (a > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const d = Hn(e[c], e[c + 1], u);
      return s[c](d);
    };
  return n ? (u) => l(gn(e[0], e[o - 1], u)) : l;
}
function gS(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = Hn(0, t, r);
    e.push(te(n, 1, i));
  }
}
function ky(e) {
  const t = [0];
  return gS(t, e.length - 1), t;
}
function yS(e, t) {
  return e.map((n) => n * t);
}
function vS(e, t) {
  return e.map(() => t || vy).splice(0, e.length - 1);
}
function Es({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = oS(r) ? r.map(Bf) : Bf(r),
    o = { done: !1, value: t[0] },
    s = yS(n && n.length === t.length ? n : ky(t), e),
    a = Sy(s, t, { ease: Array.isArray(i) ? i : vS(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((o.value = a(l)), (o.done = l >= e), o),
  };
}
const Uf = 2e4;
function xS(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Uf; ) (t += n), (r = e.next(t));
  return t >= Uf ? 1 / 0 : t;
}
const wS = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => B.update(t, !0),
      stop: () => kt(t),
      now: () => (fe.isProcessing ? fe.timestamp : St.now()),
    };
  },
  SS = { decay: zf, inertia: zf, tween: Es, keyframes: Es, spring: yy },
  kS = (e) => e / 100;
class Qc extends my {
  constructor(t) {
    super(t),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: l } = this.options;
        l && l();
      });
    const { name: n, motionValue: r, element: i, keyframes: o } = this.options,
      s = (i == null ? void 0 : i.KeyframeResolver) || Fc,
      a = (l, u) => this.onKeyframesResolved(l, u);
    (this.resolver = new s(o, a, n, r, i)), this.resolver.scheduleResolve();
  }
  initPlayback(t) {
    const {
        type: n = "keyframes",
        repeat: r = 0,
        repeatDelay: i = 0,
        repeatType: o,
        velocity: s = 0,
      } = this.options,
      a = Gc(n) ? n : SS[n] || Es;
    let l, u;
    a !== Es &&
      typeof t[0] != "number" &&
      ((l = Dt(kS, wy(t[0], t[1]))), (t = [0, 100]));
    const c = a({ ...this.options, keyframes: t });
    o === "mirror" &&
      (u = a({ ...this.options, keyframes: [...t].reverse(), velocity: -s })),
      c.calculatedDuration === null && (c.calculatedDuration = xS(c));
    const { calculatedDuration: d } = c,
      h = d + i,
      y = h * (r + 1) - i;
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: l,
      calculatedDuration: d,
      resolvedDuration: h,
      totalDuration: y,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: E } = this.options;
      return { done: !0, value: E[E.length - 1] };
    }
    const {
      finalKeyframe: i,
      generator: o,
      mirroredGenerator: s,
      mapPercentToKeyframes: a,
      keyframes: l,
      calculatedDuration: u,
      totalDuration: c,
      resolvedDuration: d,
    } = r;
    if (this.startTime === null) return o.next(0);
    const {
      delay: h,
      repeat: y,
      repeatType: v,
      repeatDelay: x,
      onUpdate: S,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - c / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = Math.round(t - this.startTime) * this.speed);
    const m = this.currentTime - h * (this.speed >= 0 ? 1 : -1),
      p = this.speed >= 0 ? m < 0 : m > c;
    (this.currentTime = Math.max(m, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = c);
    let g = this.currentTime,
      w = o;
    if (y) {
      const E = Math.min(this.currentTime, c) / d;
      let O = Math.floor(E),
        R = E % 1;
      !R && E >= 1 && (R = 1),
        R === 1 && O--,
        (O = Math.min(O, y + 1)),
        !!(O % 2) &&
          (v === "reverse"
            ? ((R = 1 - R), x && (R -= x / d))
            : v === "mirror" && (w = s)),
        (g = gn(0, 1, R) * d);
    }
    const C = p ? { done: !1, value: l[0] } : w.next(g);
    a && (C.value = a(C.value));
    let { done: b } = C;
    !p &&
      u !== null &&
      (b = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const P =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && b));
    return (
      P && i !== void 0 && (C.value = sa(l, this.options, i)),
      S && S(C.value),
      P && this.finish(),
      C
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? _t(t.calculatedDuration) : 0;
  }
  get time() {
    return _t(this.currentTime);
  }
  set time(t) {
    (t = Ot(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    (this.playbackSpeed = t), n && (this.time = _t(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = wS, onPlay: n, startTime: r } = this.options;
    this.driver || (this.driver = t((o) => this.tick(o))), n && n();
    const i = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = i - this.holdTime)
      : this.startTime
      ? this.state === "finished" && (this.startTime = i)
      : (this.startTime = r ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
}
const CS = new Set(["opacity", "clipPath", "filter", "transform"]),
  bS = 10,
  PS = (e, t) => {
    let n = "";
    const r = Math.max(Math.round(t / bS), 2);
    for (let i = 0; i < r; i++) n += e(Hn(0, r - 1, i)) + ", ";
    return `linear(${n.substring(0, n.length - 2)})`;
  };
function Xc(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const ES = { linearEasing: void 0 };
function jS(e, t) {
  const n = Xc(e);
  return () => {
    var r;
    return (r = ES[t]) !== null && r !== void 0 ? r : n();
  };
}
const js = jS(() => {
  try {
    document
      .createElement("div")
      .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing");
function Cy(e) {
  return !!(
    (typeof e == "function" && js()) ||
    !e ||
    (typeof e == "string" && (e in yu || js())) ||
    Kc(e) ||
    (Array.isArray(e) && e.every(Cy))
  );
}
const di = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  yu = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: di([0, 0.65, 0.55, 1]),
    circOut: di([0.55, 0, 1, 0.45]),
    backIn: di([0.31, 0.01, 0.66, -0.59]),
    backOut: di([0.33, 1.53, 0.69, 0.99]),
  };
function by(e, t) {
  if (e)
    return typeof e == "function" && js()
      ? PS(e, t)
      : Kc(e)
      ? di(e)
      : Array.isArray(e)
      ? e.map((n) => by(n, t) || yu.easeOut)
      : yu[e];
}
function TS(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: o = 0,
    repeatType: s = "loop",
    ease: a,
    times: l,
  } = {}
) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = by(a, i);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: o + 1,
      direction: s === "reverse" ? "alternate" : "normal",
    })
  );
}
function Gf(e, t) {
  (e.timeline = t), (e.onfinish = null);
}
const NS = Xc(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  Ts = 10,
  AS = 2e4;
function RS(e) {
  return Gc(e.type) || e.type === "spring" || !Cy(e.ease);
}
function MS(e, t) {
  const n = new Qc({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: e[0] };
  const i = [];
  let o = 0;
  for (; !r.done && o < AS; ) (r = n.sample(o)), i.push(r.value), (o += Ts);
  return { times: void 0, keyframes: i, duration: o - Ts, ease: "linear" };
}
const Py = { anticipate: Xg, backInOut: Qg, circInOut: Zg };
function LS(e) {
  return e in Py;
}
class Hf extends my {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: i, keyframes: o } = this.options;
    (this.resolver = new py(
      o,
      (s, a) => this.onKeyframesResolved(s, a),
      n,
      r,
      i
    )),
      this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    var r;
    let {
      duration: i = 300,
      times: o,
      ease: s,
      type: a,
      motionValue: l,
      name: u,
      startTime: c,
    } = this.options;
    if (!(!((r = l.owner) === null || r === void 0) && r.current)) return !1;
    if (
      (typeof s == "string" && js() && LS(s) && (s = Py[s]), RS(this.options))
    ) {
      const {
          onComplete: h,
          onUpdate: y,
          motionValue: v,
          element: x,
          ...S
        } = this.options,
        m = MS(t, S);
      (t = m.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (i = m.duration),
        (o = m.times),
        (s = m.ease),
        (a = "keyframes");
    }
    const d = TS(l.owner.current, u, t, {
      ...this.options,
      duration: i,
      times: o,
      ease: s,
    });
    return (
      (d.startTime = c ?? this.calcStartTime()),
      this.pendingTimeline
        ? (Gf(d, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (d.onfinish = () => {
            const { onComplete: h } = this.options;
            l.set(sa(t, this.options, n)),
              h && h(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: d, duration: i, times: o, type: a, ease: s, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return _t(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return _t(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = Ot(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t) return null;
    const { animation: n } = t;
    return n.startTime;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return ve;
      const { animation: r } = n;
      Gf(r, t);
    }
    return ve;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: n,
      keyframes: r,
      duration: i,
      type: o,
      ease: s,
      times: a,
    } = t;
    if (n.playState === "idle" || n.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: u,
          onUpdate: c,
          onComplete: d,
          element: h,
          ...y
        } = this.options,
        v = new Qc({
          ...y,
          keyframes: r,
          duration: i,
          type: o,
          ease: s,
          times: a,
          isGenerator: !0,
        }),
        x = Ot(this.time);
      u.setWithVelocity(v.sample(x - Ts).value, v.sample(x).value, Ts);
    }
    const { onStop: l } = this.options;
    l && l(), this.cancel();
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: i,
      repeatType: o,
      damping: s,
      type: a,
    } = t;
    return (
      NS() &&
      r &&
      CS.has(r) &&
      n &&
      n.owner &&
      n.owner.current instanceof HTMLElement &&
      !n.owner.getProps().onUpdate &&
      !i &&
      o !== "mirror" &&
      s !== 0 &&
      a !== "inertia"
    );
  }
}
const Ey = Xc(() => window.ScrollTimeline !== void 0);
class OS {
  constructor(t) {
    (this.stop = () => this.runAll("stop")),
      (this.animations = t.filter(Boolean));
  }
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n;
  }
  attachTimeline(t, n) {
    const r = this.animations.map((i) =>
      Ey() && i.attachTimeline ? i.attachTimeline(t) : n(i)
    );
    return () => {
      r.forEach((i, o) => {
        i && i(), this.animations[o].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
function _S({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: o,
  repeatType: s,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
const qc =
    (e, t, n, r = {}, i, o) =>
    (s) => {
      const a = Dc(r, e) || {},
        l = a.delay || r.delay || 0;
      let { elapsed: u = 0 } = r;
      u = u - Ot(l);
      let c = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...a,
        delay: -u,
        onUpdate: (h) => {
          t.set(h), a.onUpdate && a.onUpdate(h);
        },
        onComplete: () => {
          s(), a.onComplete && a.onComplete();
        },
        name: e,
        motionValue: t,
        element: o ? void 0 : i,
      };
      _S(a) || (c = { ...c, ...tw(e, c) }),
        c.duration && (c.duration = Ot(c.duration)),
        c.repeatDelay && (c.repeatDelay = Ot(c.repeatDelay)),
        c.from !== void 0 && (c.keyframes[0] = c.from);
      let d = !1;
      if (
        ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
          ((c.duration = 0), c.delay === 0 && (d = !0)),
        d && !o && t.get() !== void 0)
      ) {
        const h = sa(c.keyframes, a);
        if (h !== void 0)
          return (
            B.update(() => {
              c.onUpdate(h), c.onComplete();
            }),
            new OS([])
          );
      }
      return !o && Hf.supports(c) ? new Hf(c) : new Qc(c);
    },
  DS = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  IS = (e) => (uu(e) ? e[e.length - 1] || 0 : e);
function Zc(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Jc(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class ed {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Zc(this.subscriptions, t), () => Jc(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let o = 0; o < i; o++) {
          const s = this.subscriptions[o];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Kf = 30,
  VS = (e) => !isNaN(parseFloat(e));
class zS {
  constructor(t, n = {}) {
    (this.version = "11.11.10"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        const o = St.now();
        this.updatedAt !== o && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = St.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = VS(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new ed());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            B.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = St.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > Kf
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Kf);
    return Hc(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Rt(e, t) {
  return new zS(e, t);
}
function FS(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Rt(n));
}
function BS(e, t) {
  const n = oa(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...o } = n || {};
  o = { ...o, ...r };
  for (const s in o) {
    const a = IS(o[s]);
    FS(e, s, a);
  }
}
const td = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  $S = "framerAppearId",
  jy = "data-" + td($S);
function Ty(e) {
  return e.props[jy];
}
const be = (e) => !!(e && e.getVelocity);
function WS(e) {
  return !!(be(e) && e.add);
}
function vu(e, t) {
  const n = e.getValue("willChange");
  if (WS(n)) return n.add(t);
}
function US({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function Ny(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var o;
  let { transition: s = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  r && (s = r);
  const u = [],
    c = i && e.animationState && e.animationState.getState()[i];
  for (const d in l) {
    const h = e.getValue(
        d,
        (o = e.latestValues[d]) !== null && o !== void 0 ? o : null
      ),
      y = l[d];
    if (y === void 0 || (c && US(c, d))) continue;
    const v = { delay: n, ...Dc(s || {}, d) };
    let x = !1;
    if (window.MotionHandoffAnimation) {
      const m = Ty(e);
      if (m) {
        const p = window.MotionHandoffAnimation(m, d, B);
        p !== null && ((v.startTime = p), (x = !0));
      }
    }
    vu(e, d),
      h.start(
        qc(d, h, y, e.shouldReduceMotion && Qn.has(d) ? { type: !1 } : v, e, x)
      );
    const S = h.animation;
    S && u.push(S);
  }
  return (
    a &&
      Promise.all(u).then(() => {
        B.update(() => {
          a && BS(e, a);
        });
      }),
    u
  );
}
function xu(e, t, n = {}) {
  var r;
  const i = oa(
    e,
    t,
    n.type === "exit"
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0
  );
  let { transition: o = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (o = n.transitionOverride);
  const s = i ? () => Promise.all(Ny(e, i, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: d,
              staggerDirection: h,
            } = o;
            return GS(e, t, c + u, d, h, n);
          }
        : () => Promise.resolve(),
    { when: l } = o;
  if (l) {
    const [u, c] = l === "beforeChildren" ? [s, a] : [a, s];
    return u().then(() => c());
  } else return Promise.all([s(), a(n.delay)]);
}
function GS(e, t, n = 0, r = 0, i = 1, o) {
  const s = [],
    a = (e.variantChildren.size - 1) * r,
    l = i === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(HS)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          s.push(
            xu(u, t, { ...o, delay: n + l(c) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(s)
  );
}
function HS(e, t) {
  return e.sortNodePosition(t);
}
function KS(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((o) => xu(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = xu(e, t, n);
  else {
    const i = typeof t == "function" ? oa(e, t, n.custom) : t;
    r = Promise.all(Ny(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const YS = _c.length;
function Ay(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? Ay(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < YS; n++) {
    const r = _c[n],
      i = e.props[r];
    (Gi(i) || i === !1) && (t[r] = i);
  }
  return t;
}
const QS = [...Oc].reverse(),
  XS = Oc.length;
function qS(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => KS(e, n, r)));
}
function ZS(e) {
  let t = qS(e),
    n = Yf(),
    r = !0;
  const i = (l) => (u, c) => {
    var d;
    const h = oa(
      e,
      c,
      l === "exit"
        ? (d = e.presenceContext) === null || d === void 0
          ? void 0
          : d.custom
        : void 0
    );
    if (h) {
      const { transition: y, transitionEnd: v, ...x } = h;
      u = { ...u, ...x, ...v };
    }
    return u;
  };
  function o(l) {
    t = l(e);
  }
  function s(l) {
    const { props: u } = e,
      c = Ay(e.parent) || {},
      d = [],
      h = new Set();
    let y = {},
      v = 1 / 0;
    for (let S = 0; S < XS; S++) {
      const m = QS[S],
        p = n[m],
        g = u[m] !== void 0 ? u[m] : c[m],
        w = Gi(g),
        C = m === l ? p.isActive : null;
      C === !1 && (v = S);
      let b = g === c[m] && g !== u[m] && w;
      if (
        (b && r && e.manuallyAnimateOnMount && (b = !1),
        (p.protectedKeys = { ...y }),
        (!p.isActive && C === null) ||
          (!g && !p.prevProp) ||
          ia(g) ||
          typeof g == "boolean")
      )
        continue;
      const P = JS(p.prevProp, g);
      let E = P || (m === l && p.isActive && !b && w) || (S > v && w),
        O = !1;
      const R = Array.isArray(g) ? g : [g];
      let H = R.reduce(i(m), {});
      C === !1 && (H = {});
      const { prevResolvedValues: z = {} } = p,
        He = { ...z, ...H },
        Ke = (K) => {
          (E = !0),
            h.has(K) && ((O = !0), h.delete(K)),
            (p.needsAnimating[K] = !0);
          const T = e.getValue(K);
          T && (T.liveStyle = !1);
        };
      for (const K in He) {
        const T = H[K],
          A = z[K];
        if (y.hasOwnProperty(K)) continue;
        let M = !1;
        uu(T) && uu(A) ? (M = !Wg(T, A)) : (M = T !== A),
          M
            ? T != null
              ? Ke(K)
              : h.add(K)
            : T !== void 0 && h.has(K)
            ? Ke(K)
            : (p.protectedKeys[K] = !0);
      }
      (p.prevProp = g),
        (p.prevResolvedValues = H),
        p.isActive && (y = { ...y, ...H }),
        r && e.blockInitialAnimation && (E = !1),
        E &&
          (!(b && P) || O) &&
          d.push(...R.map((K) => ({ animation: K, options: { type: m } })));
    }
    if (h.size) {
      const S = {};
      h.forEach((m) => {
        const p = e.getBaseTarget(m),
          g = e.getValue(m);
        g && (g.liveStyle = !0), (S[m] = p ?? null);
      }),
        d.push({ animation: S });
    }
    let x = !!d.length;
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (x = !1),
      (r = !1),
      x ? t(d) : Promise.resolve()
    );
  }
  function a(l, u) {
    var c;
    if (n[l].isActive === u) return Promise.resolve();
    (c = e.variantChildren) === null ||
      c === void 0 ||
      c.forEach((h) => {
        var y;
        return (y = h.animationState) === null || y === void 0
          ? void 0
          : y.setActive(l, u);
      }),
      (n[l].isActive = u);
    const d = s(l);
    for (const h in n) n[h].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      (n = Yf()), (r = !0);
    },
  };
}
function JS(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Wg(t, e) : !1;
}
function En(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Yf() {
  return {
    animate: En(!0),
    whileInView: En(),
    whileHover: En(),
    whileTap: En(),
    whileDrag: En(),
    whileFocus: En(),
    exit: En(),
  };
}
class Sn {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
class ek extends Sn {
  constructor(t) {
    super(t), t.animationState || (t.animationState = ZS(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    ia(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(),
      (t = this.unmountControls) === null || t === void 0 || t.call(this);
  }
}
let tk = 0;
class nk extends Sn {
  constructor() {
    super(...arguments), (this.id = tk++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const i = this.node.animationState.setActive("exit", !t);
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const rk = { animation: { Feature: ek }, exit: { Feature: nk } },
  Ry = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1;
function aa(e, t = "page") {
  return { point: { x: e[`${t}X`], y: e[`${t}Y`] } };
}
const ik = (e) => (t) => Ry(t) && e(t, aa(t));
function Mt(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function It(e, t, n, r) {
  return Mt(e, t, ik(n), r);
}
const Qf = (e, t) => Math.abs(e - t);
function ok(e, t) {
  const n = Qf(e.x, t.x),
    r = Qf(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class My {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: o = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const d = Ja(this.lastMoveEventInfo, this.history),
          h = this.startEvent !== null,
          y = ok(d.offset, { x: 0, y: 0 }) >= 3;
        if (!h && !y) return;
        const { point: v } = d,
          { timestamp: x } = fe;
        this.history.push({ ...v, timestamp: x });
        const { onStart: S, onMove: m } = this.handlers;
        h ||
          (S && S(this.lastMoveEvent, d),
          (this.startEvent = this.lastMoveEvent)),
          m && m(this.lastMoveEvent, d);
      }),
      (this.handlePointerMove = (d, h) => {
        (this.lastMoveEvent = d),
          (this.lastMoveEventInfo = Za(h, this.transformPagePoint)),
          B.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (d, h) => {
        this.end();
        const { onEnd: y, onSessionEnd: v, resumeAnimation: x } = this.handlers;
        if (
          (this.dragSnapToOrigin && x && x(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const S = Ja(
          d.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Za(h, this.transformPagePoint),
          this.history
        );
        this.startEvent && y && y(d, S), v && v(d, S);
      }),
      !Ry(t))
    )
      return;
    (this.dragSnapToOrigin = o),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = i || window);
    const s = aa(t),
      a = Za(s, this.transformPagePoint),
      { point: l } = a,
      { timestamp: u } = fe;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(t, Ja(a, this.history)),
      (this.removeListeners = Dt(
        It(this.contextWindow, "pointermove", this.handlePointerMove),
        It(this.contextWindow, "pointerup", this.handlePointerUp),
        It(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), kt(this.updatePoint);
  }
}
function Za(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Xf(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Ja({ point: e }, t) {
  return {
    point: e,
    delta: Xf(e, Ly(t)),
    offset: Xf(e, sk(t)),
    velocity: ak(t, 0.1),
  };
}
function sk(e) {
  return e[0];
}
function Ly(e) {
  return e[e.length - 1];
}
function ak(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = Ly(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > Ot(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const o = _t(i.timestamp - r.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function Oy(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const qf = Oy("dragHorizontal"),
  Zf = Oy("dragVertical");
function _y(e) {
  let t = !1;
  if (e === "y") t = Zf();
  else if (e === "x") t = qf();
  else {
    const n = qf(),
      r = Zf();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function Dy() {
  const e = _y(!0);
  return e ? (e(), !1) : !0;
}
function hr(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
const Iy = 1e-4,
  lk = 1 - Iy,
  uk = 1 + Iy,
  Vy = 0.01,
  ck = 0 - Vy,
  dk = 0 + Vy;
function We(e) {
  return e.max - e.min;
}
function fk(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Jf(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = te(t.min, t.max, e.origin)),
    (e.scale = We(n) / We(t)),
    (e.translate = te(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= lk && e.scale <= uk) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= ck && e.translate <= dk) || isNaN(e.translate)) &&
      (e.translate = 0);
}
function bi(e, t, n, r) {
  Jf(e.x, t.x, n.x, r ? r.originX : void 0),
    Jf(e.y, t.y, n.y, r ? r.originY : void 0);
}
function eh(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + We(t));
}
function hk(e, t, n) {
  eh(e.x, t.x, n.x), eh(e.y, t.y, n.y);
}
function th(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + We(t));
}
function Pi(e, t, n) {
  th(e.x, t.x, n.x), th(e.y, t.y, n.y);
}
function pk(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? te(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? te(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function nh(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function mk(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: nh(e.x, n, i), y: nh(e.y, t, r) };
}
function rh(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function gk(e, t) {
  return { x: rh(e.x, t.x), y: rh(e.y, t.y) };
}
function yk(e, t) {
  let n = 0.5;
  const r = We(e),
    i = We(t);
  return (
    i > r
      ? (n = Hn(t.min, t.max - r, e.min))
      : r > i && (n = Hn(e.min, e.max - i, t.min)),
    gn(0, 1, n)
  );
}
function vk(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const wu = 0.35;
function xk(e = wu) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = wu),
    { x: ih(e, "left", "right"), y: ih(e, "top", "bottom") }
  );
}
function ih(e, t, n) {
  return { min: oh(e, t), max: oh(e, n) };
}
function oh(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const sh = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  pr = () => ({ x: sh(), y: sh() }),
  ah = () => ({ min: 0, max: 0 }),
  se = () => ({ x: ah(), y: ah() });
function Qe(e) {
  return [e("x"), e("y")];
}
function zy({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function wk({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function Sk(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function el(e) {
  return e === void 0 || e === 1;
}
function Su({ scale: e, scaleX: t, scaleY: n }) {
  return !el(e) || !el(t) || !el(n);
}
function Nn(e) {
  return (
    Su(e) ||
    Fy(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function Fy(e) {
  return lh(e.x) || lh(e.y);
}
function lh(e) {
  return e && e !== "0%";
}
function Ns(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function uh(e, t, n, r, i) {
  return i !== void 0 && (e = Ns(e, i, r)), Ns(e, n, r) + t;
}
function ku(e, t = 0, n = 1, r, i) {
  (e.min = uh(e.min, t, n, r, i)), (e.max = uh(e.max, t, n, r, i));
}
function By(e, { x: t, y: n }) {
  ku(e.x, t.translate, t.scale, t.originPoint),
    ku(e.y, n.translate, n.scale, n.originPoint);
}
const ch = 0.999999999999,
  dh = 1.0000000000001;
function kk(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let o, s;
  for (let a = 0; a < i; a++) {
    (o = n[a]), (s = o.projectionDelta);
    const { visualElement: l } = o.options;
    (l && l.props.style && l.props.style.display === "contents") ||
      (r &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        gr(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), By(e, s)),
      r && Nn(o.latestValues) && gr(e, o.latestValues));
  }
  t.x < dh && t.x > ch && (t.x = 1), t.y < dh && t.y > ch && (t.y = 1);
}
function mr(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function fh(e, t, n, r, i = 0.5) {
  const o = te(e.min, e.max, i);
  ku(e, t, n, o, r);
}
function gr(e, t) {
  fh(e.x, t.x, t.scaleX, t.scale, t.originX),
    fh(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function $y(e, t) {
  return zy(Sk(e.getBoundingClientRect(), t));
}
function Ck(e, t, n) {
  const r = $y(e, n),
    { scroll: i } = t;
  return i && (mr(r.x, i.offset.x), mr(r.y, i.offset.y)), r;
}
const Wy = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  bk = new WeakMap();
class Pk {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = se()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (c) => {
        const { dragSnapToOrigin: d } = this.getProps();
        d ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(aa(c, "page").point);
      },
      o = (c, d) => {
        const { drag: h, dragPropagation: y, onDragStart: v } = this.getProps();
        if (
          h &&
          !y &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = _y(h)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Qe((S) => {
            let m = this.getAxisMotionValue(S).get() || 0;
            if (wt.test(m)) {
              const { projection: p } = this.visualElement;
              if (p && p.layout) {
                const g = p.layout.layoutBox[S];
                g && (m = We(g) * (parseFloat(m) / 100));
              }
            }
            this.originPoint[S] = m;
          }),
          v && B.postRender(() => v(c, d)),
          vu(this.visualElement, "transform");
        const { animationState: x } = this.visualElement;
        x && x.setActive("whileDrag", !0);
      },
      s = (c, d) => {
        const {
          dragPropagation: h,
          dragDirectionLock: y,
          onDirectionLock: v,
          onDrag: x,
        } = this.getProps();
        if (!h && !this.openGlobalLock) return;
        const { offset: S } = d;
        if (y && this.currentDirection === null) {
          (this.currentDirection = Ek(S)),
            this.currentDirection !== null && v && v(this.currentDirection);
          return;
        }
        this.updateAxis("x", d.point, S),
          this.updateAxis("y", d.point, S),
          this.visualElement.render(),
          x && x(c, d);
      },
      a = (c, d) => this.stop(c, d),
      l = () =>
        Qe((c) => {
          var d;
          return (
            this.getAnimationState(c) === "paused" &&
            ((d = this.getAxisMotionValue(c).animation) === null || d === void 0
              ? void 0
              : d.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new My(
      t,
      {
        onSessionStart: i,
        onStart: o,
        onMove: s,
        onSessionEnd: a,
        resumeAnimation: l,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: Wy(this.visualElement),
      }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: o } = this.getProps();
    o && B.postRender(() => o(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !No(t, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (s = pk(s, this.constraints[t], this.elastic[t])),
      o.set(s);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      i =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
          ? void 0
          : t.layout,
      o = this.constraints;
    n && hr(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && i
      ? (this.constraints = mk(i.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = xk(r)),
      o !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Qe((s) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(s) &&
            (this.constraints[s] = vk(i.layoutBox[s], this.constraints[s]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !hr(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const o = Ck(r, i.root, this.visualElement.getTransformPagePoint());
    let s = gk(i.layout.layoutBox, o);
    if (n) {
      const a = n(wk(s));
      (this.hasMutatedConstraints = !!a), a && (s = zy(a));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: o,
        dragSnapToOrigin: s,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = Qe((c) => {
        if (!No(c, n, this.currentDirection)) return;
        let d = (l && l[c]) || {};
        s && (d = { min: 0, max: 0 });
        const h = i ? 200 : 1e6,
          y = i ? 40 : 1e7,
          v = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: h,
            bounceDamping: y,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...d,
          };
        return this.startAxisValueAnimation(c, v);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      vu(this.visualElement, t), r.start(qc(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    Qe((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Qe((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    Qe((n) => {
      const { drag: r } = this.getProps();
      if (!No(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: s, max: a } = i.layout.layoutBox[n];
        o.set(t[n] - te(s, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!hr(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    Qe((s) => {
      const a = this.getAxisMotionValue(s);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[s] = yk({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = o ? o({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      Qe((s) => {
        if (!No(s, t, null)) return;
        const a = this.getAxisMotionValue(s),
          { min: l, max: u } = this.constraints[s];
        a.set(te(l, u, i[s]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    bk.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = It(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        hr(l) && l.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      o = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
      B.read(r);
    const s = Mt(window, "resize", () => this.scalePositionWithinConstraints()),
      a = i.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (Qe((c) => {
              const d = this.getAxisMotionValue(c);
              d &&
                ((this.originPoint[c] += l[c].translate),
                d.set(d.get() + l[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      s(), n(), o(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: o = !1,
        dragElastic: s = wu,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: s,
      dragMomentum: a,
    };
  }
}
function No(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function Ek(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class jk extends Sn {
  constructor(t) {
    super(t),
      (this.removeGroupControls = ve),
      (this.removeListeners = ve),
      (this.controls = new Pk(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || ve);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const hh = (e) => (t, n) => {
  e && B.postRender(() => e(t, n));
};
class Tk extends Sn {
  constructor() {
    super(...arguments), (this.removePointerDownListener = ve);
  }
  onPointerDown(t) {
    this.session = new My(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Wy(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: hh(t),
      onStart: hh(n),
      onMove: r,
      onEnd: (o, s) => {
        delete this.session, i && B.postRender(() => i(o, s));
      },
    };
  }
  mount() {
    this.removePointerDownListener = It(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const nd = k.createContext(null);
function Nk() {
  const e = k.useContext(nd);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    i = k.useId();
  k.useEffect(() => r(i), []);
  const o = k.useCallback(() => n && n(i), [i, n]);
  return !t && n ? [!1, o] : [!0];
}
const Uy = k.createContext({}),
  Gy = k.createContext({}),
  Ho = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function ph(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const ni = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (L.test(e)) e = parseFloat(e);
        else return e;
      const n = ph(e, t.target.x),
        r = ph(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  Ak = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = yn.parse(e);
      if (i.length > 5) return r;
      const o = yn.createTransformer(e),
        s = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (i[0 + s] /= a), (i[1 + s] /= l);
      const u = te(a, l, 0.5);
      return (
        typeof i[2 + s] == "number" && (i[2 + s] /= u),
        typeof i[3 + s] == "number" && (i[3 + s] /= u),
        o(i)
      );
    },
  },
  As = {};
function Rk(e) {
  Object.assign(As, e);
}
const { schedule: rd, cancel: W2 } = Ug(queueMicrotask, !1);
class Mk extends k.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: o } = t;
    Rk(Lk),
      o &&
        (n.group && n.group.add(o),
        r && r.register && i && r.register(o),
        o.root.didUpdate(),
        o.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        o.setOptions({
          ...o.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Ho.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: o,
      } = this.props,
      s = r.projection;
    return (
      s &&
        ((s.isPresent = o),
        i || t.layoutDependency !== n || n === void 0
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== o &&
          (o
            ? s.promote()
            : s.relegate() ||
              B.postRender(() => {
                const a = s.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      rd.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Hy(e) {
  const [t, n] = Nk(),
    r = k.useContext(Uy);
  return f.jsx(Mk, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: k.useContext(Gy),
    isPresent: t,
    safeToRemove: n,
  });
}
const Lk = {
    borderRadius: {
      ...ni,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: ni,
    borderTopRightRadius: ni,
    borderBottomLeftRadius: ni,
    borderBottomRightRadius: ni,
    boxShadow: Ak,
  },
  Ky = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  Ok = Ky.length,
  mh = (e) => (typeof e == "string" ? parseFloat(e) : e),
  gh = (e) => typeof e == "number" || L.test(e);
function _k(e, t, n, r, i, o) {
  i
    ? ((e.opacity = te(0, n.opacity !== void 0 ? n.opacity : 1, Dk(r))),
      (e.opacityExit = te(t.opacity !== void 0 ? t.opacity : 1, 0, Ik(r))))
    : o &&
      (e.opacity = te(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let s = 0; s < Ok; s++) {
    const a = `border${Ky[s]}Radius`;
    let l = yh(t, a),
      u = yh(n, a);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || gh(l) === gh(u)
        ? ((e[a] = Math.max(te(mh(l), mh(u), r), 0)),
          (wt.test(u) || wt.test(l)) && (e[a] += "%"))
        : (e[a] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = te(t.rotate || 0, n.rotate || 0, r));
}
function yh(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const Dk = Yy(0, 0.5, qg),
  Ik = Yy(0.5, 0.95, ve);
function Yy(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Hn(e, t, r)));
}
function vh(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function Ye(e, t) {
  vh(e.x, t.x), vh(e.y, t.y);
}
function xh(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
function wh(e, t, n, r, i) {
  return (
    (e -= t), (e = Ns(e, 1 / n, r)), i !== void 0 && (e = Ns(e, 1 / i, r)), e
  );
}
function Vk(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if (
    (wt.test(t) &&
      ((t = parseFloat(t)), (t = te(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let a = te(o.min, o.max, r);
  e === o && (a -= t),
    (e.min = wh(e.min, t, n, a, i)),
    (e.max = wh(e.max, t, n, a, i));
}
function Sh(e, t, [n, r, i], o, s) {
  Vk(e, t[n], t[r], t[i], t.scale, o, s);
}
const zk = ["x", "scaleX", "originX"],
  Fk = ["y", "scaleY", "originY"];
function kh(e, t, n, r) {
  Sh(e.x, t, zk, n ? n.x : void 0, r ? r.x : void 0),
    Sh(e.y, t, Fk, n ? n.y : void 0, r ? r.y : void 0);
}
function Ch(e) {
  return e.translate === 0 && e.scale === 1;
}
function Qy(e) {
  return Ch(e.x) && Ch(e.y);
}
function bh(e, t) {
  return e.min === t.min && e.max === t.max;
}
function Bk(e, t) {
  return bh(e.x, t.x) && bh(e.y, t.y);
}
function Ph(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function Xy(e, t) {
  return Ph(e.x, t.x) && Ph(e.y, t.y);
}
function Eh(e) {
  return We(e.x) / We(e.y);
}
function jh(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class $k {
  constructor() {
    this.members = [];
  }
  add(t) {
    Zc(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (Jc(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        r = o;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Wk(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    o = e.y.translate / t.y,
    s = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: c,
      rotateX: d,
      rotateY: h,
      skewX: y,
      skewY: v,
    } = n;
    u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      d && (r += `rotateX(${d}deg) `),
      h && (r += `rotateY(${h}deg) `),
      y && (r += `skewX(${y}deg) `),
      v && (r += `skewY(${v}deg) `);
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const Uk = (e, t) => e.depth - t.depth;
class Gk {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    Zc(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    Jc(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(Uk),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function Ko(e) {
  const t = be(e) ? e.get() : e;
  return DS(t) ? t.toValue() : t;
}
function Hk(e, t) {
  const n = St.now(),
    r = ({ timestamp: i }) => {
      const o = i - n;
      o >= t && (kt(r), e(o - t));
    };
  return B.read(r, !0), () => kt(r);
}
function Kk(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function Yk(e, t, n) {
  const r = be(e) ? e : Rt(e);
  return r.start(qc("", r, t, n)), r.animation;
}
const An = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  fi = typeof window < "u" && window.MotionDebug !== void 0,
  tl = ["", "X", "Y", "Z"],
  Qk = { visibility: "hidden" },
  Th = 1e3;
let Xk = 0;
function nl(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function qy(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = Ty(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: o } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", B, !(i || o));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && qy(r);
}
function Zy({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(s = {}, a = t == null ? void 0 : t()) {
      (this.id = Xk++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            fi &&
              (An.totalNodes =
                An.resolvedTargetDeltas =
                An.recalculatedProjection =
                  0),
            this.nodes.forEach(Jk),
            this.nodes.forEach(iC),
            this.nodes.forEach(oC),
            this.nodes.forEach(eC),
            fi && window.MotionDebug.record(An);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Gk());
    }
    addEventListener(s, a) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new ed()),
        this.eventHandlers.get(s).add(a)
      );
    }
    notifyListeners(s, ...a) {
      const l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = Kk(s)), (this.instance = s);
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let d;
        const h = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          (this.root.updateBlockedByResize = !0),
            d && d(),
            (d = Hk(h, 250)),
            Ho.hasAnimatedSinceResize &&
              ((Ho.hasAnimatedSinceResize = !1), this.nodes.forEach(Ah));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: d,
              hasLayoutChanged: h,
              hasRelativeTargetChanged: y,
              layout: v,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const x =
                  this.options.transition || c.getDefaultTransition() || cC,
                { onLayoutAnimationStart: S, onLayoutAnimationComplete: m } =
                  c.getProps(),
                p = !this.targetLayout || !Xy(this.targetLayout, v) || y,
                g = !h && y;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                g ||
                (h && (p || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(d, g);
                const w = { ...Dc(x, "layout"), onPlay: S, onComplete: m };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((w.delay = 0), (w.type = !1)),
                  this.startAnimation(w);
              } else
                h || Ah(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = v;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        kt(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(sC),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          qy(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        (d.shouldResetTransform = !0),
          d.updateScroll("snapshot"),
          d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Nh);
        return;
      }
      this.isUpdating || this.nodes.forEach(nC),
        (this.isUpdating = !1),
        this.nodes.forEach(rC),
        this.nodes.forEach(qk),
        this.nodes.forEach(Zk),
        this.clearAllSnapshots();
      const a = St.now();
      (fe.delta = gn(0, 1e3 / 60, a - fe.timestamp)),
        (fe.timestamp = a),
        (fe.isProcessing = !0),
        Ka.update.process(fe),
        Ka.preRender.process(fe),
        Ka.render.process(fe),
        (fe.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), rd.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(tC), this.sharedNodes.forEach(aC);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        B.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      B.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const s = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = se()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0
        );
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === s &&
          (a = !1),
        a)
      ) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: s,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const s =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !Qy(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      s &&
        (a || Nn(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        s && (l = this.removeTransform(l)),
        dC(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var s;
      const { visualElement: a } = this.options;
      if (!a) return se();
      const l = a.measureViewportBox();
      if (
        !(
          ((s = this.scroll) === null || s === void 0 ? void 0 : s.wasRoot) ||
          this.path.some(fC)
        )
      ) {
        const { scroll: c } = this.root;
        c && (mr(l.x, c.offset.x), mr(l.y, c.offset.y));
      }
      return l;
    }
    removeElementScroll(s) {
      var a;
      const l = se();
      if (
        (Ye(l, s), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
      )
        return l;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u],
          { scroll: d, options: h } = c;
        c !== this.root &&
          d &&
          h.layoutScroll &&
          (d.wasRoot && Ye(l, s), mr(l.x, d.offset.x), mr(l.y, d.offset.y));
      }
      return l;
    }
    applyTransform(s, a = !1) {
      const l = se();
      Ye(l, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          gr(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          Nn(c.latestValues) && gr(l, c.latestValues);
      }
      return Nn(this.latestValues) && gr(l, this.latestValues), l;
    }
    removeTransform(s) {
      const a = se();
      Ye(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !Nn(u.latestValues)) continue;
        Su(u.latestValues) && u.updateSnapshot();
        const c = se(),
          d = u.measurePageBox();
        Ye(c, d),
          kh(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return Nn(this.latestValues) && kh(a, this.latestValues), a;
    }
    setTargetDelta(s) {
      (this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== fe.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          s ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: d, layoutId: h } = this.options;
      if (!(!this.layout || !(d || h))) {
        if (
          ((this.resolvedRelativeTargetAt = fe.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const y = this.getClosestProjectingParent();
          y && y.layout && this.animationProgress !== 1
            ? ((this.relativeParent = y),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = se()),
              (this.relativeTargetOrigin = se()),
              Pi(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                y.layout.layoutBox
              ),
              Ye(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = se()), (this.targetWithTransforms = se())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                hk(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Ye(this.target, this.layout.layoutBox),
                By(this.target, this.targetDelta))
              : Ye(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const y = this.getClosestProjectingParent();
            y &&
            !!y.resumingFrom == !!this.resumingFrom &&
            !y.options.layoutScroll &&
            y.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = y),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = se()),
                (this.relativeTargetOrigin = se()),
                Pi(this.relativeTargetOrigin, this.target, y.target),
                Ye(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          fi && An.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Su(this.parent.latestValues) ||
          Fy(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var s;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === fe.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: d } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || d))
      )
        return;
      Ye(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x,
        y = this.treeScale.y;
      kk(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = se()));
      const { target: v } = a;
      if (!v) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (xh(this.prevProjectionDelta.x, this.projectionDelta.x),
          xh(this.prevProjectionDelta.y, this.projectionDelta.y)),
        bi(this.projectionDelta, this.layoutCorrected, v, this.latestValues),
        (this.treeScale.x !== h ||
          this.treeScale.y !== y ||
          !jh(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !jh(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", v)),
        fi && An.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      var a;
      if (
        ((a = this.options.visualElement) === null ||
          a === void 0 ||
          a.scheduleRender(),
        s)
      ) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = pr()),
        (this.projectionDelta = pr()),
        (this.projectionDeltaWithTransform = pr());
    }
    setAnimationOrigin(s, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        d = pr();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const h = se(),
        y = l ? l.source : void 0,
        v = this.layout ? this.layout.source : void 0,
        x = y !== v,
        S = this.getStack(),
        m = !S || S.members.length <= 1,
        p = !!(x && !m && this.options.crossfade === !0 && !this.path.some(uC));
      this.animationProgress = 0;
      let g;
      (this.mixTargetDelta = (w) => {
        const C = w / 1e3;
        Rh(d.x, s.x, C),
          Rh(d.y, s.y, C),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Pi(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            lC(this.relativeTarget, this.relativeTargetOrigin, h, C),
            g && Bk(this.relativeTarget, g) && (this.isProjectionDirty = !1),
            g || (g = se()),
            Ye(g, this.relativeTarget)),
          x &&
            ((this.animationValues = c), _k(c, u, this.latestValues, C, p, m)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = C);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (kt(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = B.update(() => {
          (Ho.hasAnimatedSinceResize = !0),
            (this.currentAnimation = Yk(0, Th, {
              ...s,
              onUpdate: (a) => {
                this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a);
              },
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Th),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: c,
      } = s;
      if (!(!a || !l || !u)) {
        if (
          this !== s &&
          this.layout &&
          u &&
          Jy(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || se();
          const d = We(this.layout.layoutBox.x);
          (l.x.min = s.target.x.min), (l.x.max = l.x.min + d);
          const h = We(this.layout.layoutBox.y);
          (l.y.min = s.target.y.min), (l.y.max = l.y.min + h);
        }
        Ye(a, l),
          gr(a, c),
          bi(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new $k()),
        this.sharedNodes.get(s).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let a = !1;
      const { latestValues: l } = s;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const u = {};
      l.z && nl("z", s, u, this.animationValues);
      for (let c = 0; c < tl.length; c++)
        nl(`rotate${tl[c]}`, s, u, this.animationValues),
          nl(`skew${tl[c]}`, s, u, this.animationValues);
      s.render();
      for (const c in u)
        s.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]);
      s.scheduleRender();
    }
    getProjectionStyles(s) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return Qk;
      const u = { visibility: "" },
        c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = Ko(s == null ? void 0 : s.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const x = {};
        return (
          this.options.layoutId &&
            ((x.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (x.pointerEvents = Ko(s == null ? void 0 : s.pointerEvents) || "")),
          this.hasProjected &&
            !Nn(this.latestValues) &&
            ((x.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          x
        );
      }
      const h = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = Wk(
          this.projectionDeltaWithTransform,
          this.treeScale,
          h
        )),
        c && (u.transform = c(h, u.transform));
      const { x: y, y: v } = this.projectionDelta;
      (u.transformOrigin = `${y.origin * 100}% ${v.origin * 100}% 0`),
        d.animationValues
          ? (u.opacity =
              d === this
                ? (l =
                    (a = h.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : h.opacityExit)
          : (u.opacity =
              d === this
                ? h.opacity !== void 0
                  ? h.opacity
                  : ""
                : h.opacityExit !== void 0
                ? h.opacityExit
                : 0);
      for (const x in As) {
        if (h[x] === void 0) continue;
        const { correct: S, applyTo: m } = As[x],
          p = u.transform === "none" ? h[x] : S(h[x], d);
        if (m) {
          const g = m.length;
          for (let w = 0; w < g; w++) u[m[w]] = p;
        } else u[x] = p;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            d === this
              ? Ko(s == null ? void 0 : s.pointerEvents) || ""
              : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(Nh),
        this.root.sharedNodes.clear();
    }
  };
}
function qk(e) {
  e.updateLayout();
}
function Zk(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: o } = e.options,
      s = n.source !== e.layout.source;
    o === "size"
      ? Qe((d) => {
          const h = s ? n.measuredBox[d] : n.layoutBox[d],
            y = We(h);
          (h.min = r[d].min), (h.max = h.min + y);
        })
      : Jy(o, n.layoutBox, r) &&
        Qe((d) => {
          const h = s ? n.measuredBox[d] : n.layoutBox[d],
            y = We(r[d]);
          (h.max = h.min + y),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[d].max = e.relativeTarget[d].min + y));
        });
    const a = pr();
    bi(a, r, n.layoutBox);
    const l = pr();
    s ? bi(l, e.applyTransform(i, !0), n.measuredBox) : bi(l, r, n.layoutBox);
    const u = !Qy(a);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: h, layout: y } = d;
        if (h && y) {
          const v = se();
          Pi(v, n.layoutBox, h.layoutBox);
          const x = se();
          Pi(x, r, y.layoutBox),
            Xy(v, x) || (c = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = x),
              (e.relativeTargetOrigin = v),
              (e.relativeParent = d));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function Jk(e) {
  fi && An.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function eC(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function tC(e) {
  e.clearSnapshot();
}
function Nh(e) {
  e.clearMeasurements();
}
function nC(e) {
  e.isLayoutDirty = !1;
}
function rC(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function Ah(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function iC(e) {
  e.resolveTargetDelta();
}
function oC(e) {
  e.calcProjection();
}
function sC(e) {
  e.resetSkewAndRotation();
}
function aC(e) {
  e.removeLeadSnapshot();
}
function Rh(e, t, n) {
  (e.translate = te(t.translate, 0, n)),
    (e.scale = te(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function Mh(e, t, n, r) {
  (e.min = te(t.min, n.min, r)), (e.max = te(t.max, n.max, r));
}
function lC(e, t, n, r) {
  Mh(e.x, t.x, n.x, r), Mh(e.y, t.y, n.y, r);
}
function uC(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const cC = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Lh = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  Oh = Lh("applewebkit/") && !Lh("chrome/") ? Math.round : ve;
function _h(e) {
  (e.min = Oh(e.min)), (e.max = Oh(e.max));
}
function dC(e) {
  _h(e.x), _h(e.y);
}
function Jy(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !fk(Eh(t), Eh(n), 0.2))
  );
}
function fC(e) {
  var t;
  return (
    e !== e.root &&
    ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
  );
}
const hC = Zy({
    attachResizeListener: (e, t) => Mt(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  rl = { current: void 0 },
  ev = Zy({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!rl.current) {
        const e = new hC({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (rl.current = e);
      }
      return rl.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  pC = {
    pan: { Feature: Tk },
    drag: { Feature: jk, ProjectionNode: ev, MeasureLayout: Hy },
  };
function Dh(e, t) {
  const n = t ? "pointerenter" : "pointerleave",
    r = t ? "onHoverStart" : "onHoverEnd",
    i = (o, s) => {
      if (o.pointerType === "touch" || Dy()) return;
      const a = e.getProps();
      e.animationState &&
        a.whileHover &&
        e.animationState.setActive("whileHover", t);
      const l = a[r];
      l && B.postRender(() => l(o, s));
    };
  return It(e.current, n, i, { passive: !e.getProps()[r] });
}
class mC extends Sn {
  mount() {
    this.unmount = Dt(Dh(this.node, !0), Dh(this.node, !1));
  }
  unmount() {}
}
class gC extends Sn {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Dt(
      Mt(this.node.current, "focus", () => this.onFocus()),
      Mt(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const tv = (e, t) => (t ? (e === t ? !0 : tv(e, t.parentElement)) : !1);
function il(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, aa(n));
}
class yC extends Sn {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = ve),
      (this.removeEndListeners = ve),
      (this.removeAccessibleListeners = ve),
      (this.startPointerPress = (t, n) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const r = this.node.getProps(),
          o = It(
            window,
            "pointerup",
            (a, l) => {
              if (!this.checkPressEnd()) return;
              const {
                  onTap: u,
                  onTapCancel: c,
                  globalTapTarget: d,
                } = this.node.getProps(),
                h = !d && !tv(this.node.current, a.target) ? c : u;
              h && B.update(() => h(a, l));
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          s = It(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = Dt(o, s)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (o) => {
            if (o.key !== "Enter" || this.isPressing) return;
            const s = (a) => {
              a.key !== "Enter" ||
                !this.checkPressEnd() ||
                il("up", (l, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && B.postRender(() => c(l, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = Mt(this.node.current, "keyup", s)),
              il("down", (a, l) => {
                this.startPress(a, l);
              });
          },
          n = Mt(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && il("cancel", (o, s) => this.cancelPress(o, s));
          },
          i = Mt(this.node.current, "blur", r);
        this.removeAccessibleListeners = Dt(n, i);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: i } = this.node.getProps();
    i &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && B.postRender(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !Dy()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && B.postRender(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = It(
        t.globalTapTarget ? window : this.node.current,
        "pointerdown",
        this.startPointerPress,
        { passive: !(t.onTapStart || t.onPointerStart) }
      ),
      r = Mt(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = Dt(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const Cu = new WeakMap(),
  ol = new WeakMap(),
  vC = (e) => {
    const t = Cu.get(e.target);
    t && t(e);
  },
  xC = (e) => {
    e.forEach(vC);
  };
function wC({ root: e, ...t }) {
  const n = e || document;
  ol.has(n) || ol.set(n, {});
  const r = ol.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(xC, { root: e, ...t })), r[i];
}
function SC(e, t, n) {
  const r = wC(t);
  return (
    Cu.set(e, n),
    r.observe(e),
    () => {
      Cu.delete(e), r.unobserve(e);
    }
  );
}
const kC = { some: 0, all: 1 };
class CC extends Sn {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: o } = t,
      s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : kC[i],
      },
      a = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), o && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(),
          h = u ? c : d;
        h && h(l);
      };
    return SC(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(bC(t, n)) && this.startObserver();
  }
  unmount() {}
}
function bC({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const PC = {
    inView: { Feature: CC },
    tap: { Feature: yC },
    focus: { Feature: gC },
    hover: { Feature: mC },
  },
  EC = { layout: { ProjectionNode: ev, MeasureLayout: Hy } },
  nv = k.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  la = k.createContext({}),
  id = typeof window < "u",
  rv = id ? k.useLayoutEffect : k.useEffect,
  iv = k.createContext({ strict: !1 });
function jC(e, t, n, r, i) {
  var o, s;
  const { visualElement: a } = k.useContext(la),
    l = k.useContext(iv),
    u = k.useContext(nd),
    c = k.useContext(nv).reducedMotion,
    d = k.useRef();
  (r = r || l.renderer),
    !d.current &&
      r &&
      (d.current = r(e, {
        visualState: t,
        parent: a,
        props: n,
        presenceContext: u,
        blockInitialAnimation: u ? u.initial === !1 : !1,
        reducedMotionConfig: c,
      }));
  const h = d.current,
    y = k.useContext(Gy);
  h &&
    !h.projection &&
    i &&
    (h.type === "html" || h.type === "svg") &&
    TC(d.current, n, i, y),
    k.useInsertionEffect(() => {
      h && h.update(n, u);
    });
  const v = n[jy],
    x = k.useRef(
      !!v &&
        !(
          !((o = window.MotionHandoffIsComplete) === null || o === void 0) &&
          o.call(window, v)
        ) &&
        ((s = window.MotionHasOptimisedAnimation) === null || s === void 0
          ? void 0
          : s.call(window, v))
    );
  return (
    rv(() => {
      h &&
        ((window.MotionIsMounted = !0),
        h.updateFeatures(),
        rd.render(h.render),
        x.current && h.animationState && h.animationState.animateChanges());
    }),
    k.useEffect(() => {
      h &&
        (!x.current && h.animationState && h.animationState.animateChanges(),
        x.current &&
          (queueMicrotask(() => {
            var S;
            (S = window.MotionHandoffMarkAsComplete) === null ||
              S === void 0 ||
              S.call(window, v);
          }),
          (x.current = !1)));
    }),
    h
  );
}
function TC(e, t, n, r) {
  const {
    layoutId: i,
    layout: o,
    drag: s,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: u,
  } = t;
  (e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : ov(e.parent)
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: o,
      alwaysMeasureLayout: !!s || (a && hr(a)),
      visualElement: e,
      animationType: typeof o == "string" ? o : "both",
      initialPromotionConfig: r,
      layoutScroll: l,
      layoutRoot: u,
    });
}
function ov(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : ov(e.parent);
}
function NC(e, t, n) {
  return k.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : hr(n) && (n.current = r));
    },
    [t]
  );
}
function ua(e) {
  return ia(e.animate) || _c.some((t) => Gi(e[t]));
}
function sv(e) {
  return !!(ua(e) || e.variants);
}
function AC(e, t) {
  if (ua(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Gi(n) ? n : void 0,
      animate: Gi(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function RC(e) {
  const { initial: t, animate: n } = AC(e, k.useContext(la));
  return k.useMemo(() => ({ initial: t, animate: n }), [Ih(t), Ih(n)]);
}
function Ih(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Vh = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  Lr = {};
for (const e in Vh) Lr[e] = { isEnabled: (t) => Vh[e].some((n) => !!t[n]) };
function MC(e) {
  for (const t in e) Lr[t] = { ...Lr[t], ...e[t] };
}
const LC = Symbol.for("motionComponentSymbol");
function OC({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && MC(e);
  function o(a, l) {
    let u;
    const c = { ...k.useContext(nv), ...a, layoutId: _C(a) },
      { isStatic: d } = c,
      h = RC(a),
      y = r(a, d);
    if (!d && id) {
      DC();
      const v = IC(c);
      (u = v.MeasureLayout),
        (h.visualElement = jC(i, y, c, t, v.ProjectionNode));
    }
    return f.jsxs(la.Provider, {
      value: h,
      children: [
        u && h.visualElement
          ? f.jsx(u, { visualElement: h.visualElement, ...c })
          : null,
        n(i, a, NC(y, h.visualElement, l), y, d, h.visualElement),
      ],
    });
  }
  const s = k.forwardRef(o);
  return (s[LC] = i), s;
}
function _C({ layoutId: e }) {
  const t = k.useContext(Uy).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function DC(e, t) {
  k.useContext(iv).strict;
}
function IC(e) {
  const { drag: t, layout: n } = Lr;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
const VC = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function od(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(VC.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function av(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const o in n) e.style.setProperty(o, n[o]);
}
const lv = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function uv(e, t, n, r) {
  av(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(lv.has(i) ? i : td(i), t.attrs[i]);
}
function cv(e, { layout: t, layoutId: n }) {
  return (
    Qn.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!As[e] || e === "opacity"))
  );
}
function sd(e, t, n) {
  var r;
  const { style: i } = e,
    o = {};
  for (const s in i)
    (be(i[s]) ||
      (t.style && be(t.style[s])) ||
      cv(s, e) ||
      ((r = n == null ? void 0 : n.getValue(s)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (o[s] = i[s]);
  return o;
}
function dv(e, t, n) {
  const r = sd(e, t, n);
  for (const i in e)
    if (be(e[i]) || be(t[i])) {
      const o =
        no.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[o] = e[i];
    }
  return r;
}
function fv(e) {
  const t = k.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
function zC(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  i,
  o
) {
  const s = { latestValues: FC(r, i, o, e), renderState: t() };
  return n && (s.mount = (a) => n(r, a, s)), s;
}
const hv = (e) => (t, n) => {
  const r = k.useContext(la),
    i = k.useContext(nd),
    o = () => zC(e, t, r, i);
  return n ? o() : fv(o);
};
function FC(e, t, n, r) {
  const i = {},
    o = r(e, {});
  for (const h in o) i[h] = Ko(o[h]);
  let { initial: s, animate: a } = e;
  const l = ua(e),
    u = sv(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || s === !1;
  const d = c ? a : s;
  if (d && typeof d != "boolean" && !ia(d)) {
    const h = Array.isArray(d) ? d : [d];
    for (let y = 0; y < h.length; y++) {
      const v = Lc(e, h[y]);
      if (v) {
        const { transitionEnd: x, transition: S, ...m } = v;
        for (const p in m) {
          let g = m[p];
          if (Array.isArray(g)) {
            const w = c ? g.length - 1 : 0;
            g = g[w];
          }
          g !== null && (i[p] = g);
        }
        for (const p in x) i[p] = x[p];
      }
    }
  }
  return i;
}
const ad = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  pv = () => ({ ...ad(), attrs: {} }),
  mv = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  BC = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  $C = no.length;
function WC(e, t, n) {
  let r = "",
    i = !0;
  for (let o = 0; o < $C; o++) {
    const s = no[o],
      a = e[s];
    if (a === void 0) continue;
    let l = !0;
    if (
      (typeof a == "number"
        ? (l = a === (s.startsWith("scale") ? 1 : 0))
        : (l = parseFloat(a) === 0),
      !l || n)
    ) {
      const u = mv(a, Wc[s]);
      if (!l) {
        i = !1;
        const c = BC[s] || s;
        r += `${c}(${u}) `;
      }
      n && (t[s] = u);
    }
  }
  return (r = r.trim()), n ? (r = n(t, i ? "" : r)) : i && (r = "none"), r;
}
function ld(e, t, n) {
  const { style: r, vars: i, transformOrigin: o } = e;
  let s = !1,
    a = !1;
  for (const l in t) {
    const u = t[l];
    if (Qn.has(l)) {
      s = !0;
      continue;
    } else if (ny(l)) {
      i[l] = u;
      continue;
    } else {
      const c = mv(u, Wc[l]);
      l.startsWith("origin") ? ((a = !0), (o[l] = c)) : (r[l] = c);
    }
  }
  if (
    (t.transform ||
      (s || n
        ? (r.transform = WC(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    a)
  ) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = o;
    r.transformOrigin = `${l} ${u} ${c}`;
  }
}
function zh(e, t, n) {
  return typeof e == "string" ? e : L.transform(t + n * e);
}
function UC(e, t, n) {
  const r = zh(t, e.x, e.width),
    i = zh(n, e.y, e.height);
  return `${r} ${i}`;
}
const GC = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  HC = { offset: "strokeDashoffset", array: "strokeDasharray" };
function KC(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? GC : HC;
  e[o.offset] = L.transform(-r);
  const s = L.transform(t),
    a = L.transform(n);
  e[o.array] = `${s} ${a}`;
}
function ud(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: o,
    pathLength: s,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...u
  },
  c,
  d
) {
  if ((ld(e, u, d), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: h, style: y, dimensions: v } = e;
  h.transform && (v && (y.transform = h.transform), delete h.transform),
    v &&
      (i !== void 0 || o !== void 0 || y.transform) &&
      (y.transformOrigin = UC(
        v,
        i !== void 0 ? i : 0.5,
        o !== void 0 ? o : 0.5
      )),
    t !== void 0 && (h.x = t),
    n !== void 0 && (h.y = n),
    r !== void 0 && (h.scale = r),
    s !== void 0 && KC(h, s, a, l, !1);
}
const cd = (e) => typeof e == "string" && e.toLowerCase() === "svg",
  YC = {
    useVisualState: hv({
      scrapeMotionValuesFromProps: dv,
      createRenderState: pv,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        B.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          B.render(() => {
            ud(n, r, cd(t.tagName), e.transformTemplate), uv(t, n);
          });
      },
    }),
  },
  QC = {
    useVisualState: hv({
      scrapeMotionValuesFromProps: sd,
      createRenderState: ad,
    }),
  };
function gv(e, t, n) {
  for (const r in t) !be(t[r]) && !cv(r, n) && (e[r] = t[r]);
}
function XC({ transformTemplate: e }, t) {
  return k.useMemo(() => {
    const n = ad();
    return ld(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function qC(e, t) {
  const n = e.style || {},
    r = {};
  return gv(r, n, e), Object.assign(r, XC(e, t)), r;
}
function ZC(e, t) {
  const n = {},
    r = qC(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
const JC = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function Rs(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    JC.has(e)
  );
}
let yv = (e) => !Rs(e);
function eb(e) {
  e && (yv = (t) => (t.startsWith("on") ? !Rs(t) : e(t)));
}
try {
  eb(require("@emotion/is-prop-valid").default);
} catch {}
function tb(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((yv(i) ||
        (n === !0 && Rs(i)) ||
        (!t && !Rs(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
function nb(e, t, n, r) {
  const i = k.useMemo(() => {
    const o = pv();
    return (
      ud(o, t, cd(r), e.transformTemplate),
      { ...o.attrs, style: { ...o.style } }
    );
  }, [t]);
  if (e.style) {
    const o = {};
    gv(o, e.style, e), (i.style = { ...o, ...i.style });
  }
  return i;
}
function rb(e = !1) {
  return (n, r, i, { latestValues: o }, s) => {
    const l = (od(n) ? nb : ZC)(r, o, s, n),
      u = tb(r, typeof n == "string", e),
      c = n !== k.Fragment ? { ...u, ...l, ref: i } : {},
      { children: d } = r,
      h = k.useMemo(() => (be(d) ? d.get() : d), [d]);
    return k.createElement(n, { ...c, children: h });
  };
}
function ib(e, t) {
  return function (r, { forwardMotionProps: i } = { forwardMotionProps: !1 }) {
    const s = {
      ...(od(r) ? YC : QC),
      preloadedFeatures: e,
      useRender: rb(i),
      createVisualElement: t,
      Component: r,
    };
    return OC(s);
  };
}
const bu = { current: null },
  vv = { current: !1 };
function ob() {
  if (((vv.current = !0), !!id))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (bu.current = e.matches);
      e.addListener(t), t();
    } else bu.current = !1;
}
function sb(e, t, n) {
  for (const r in t) {
    const i = t[r],
      o = n[r];
    if (be(i)) e.addValue(r, i);
    else if (be(o)) e.addValue(r, Rt(i, { owner: e }));
    else if (o !== i)
      if (e.hasValue(r)) {
        const s = e.getValue(r);
        s.liveStyle === !0 ? s.jump(i) : s.hasAnimated || s.set(i);
      } else {
        const s = e.getStaticValue(r);
        e.addValue(r, Rt(s !== void 0 ? s : i, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const Fh = new WeakMap(),
  ab = [...oy, ke, yn],
  lb = (e) => ab.find(iy(e)),
  Bh = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ];
class ub {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      blockInitialAnimation: o,
      visualState: s,
    },
    a = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Fc),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const h = St.now();
        this.renderScheduledAt < h &&
          ((this.renderScheduledAt = h), B.render(this.render, !1, !0));
      });
    const { latestValues: l, renderState: u } = s;
    (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = a),
      (this.blockInitialAnimation = !!o),
      (this.isControllingVariants = ua(n)),
      (this.isVariantNode = sv(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: c, ...d } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this
    );
    for (const h in d) {
      const y = d[h];
      l[h] !== void 0 && be(y) && y.set(l[h], !1);
    }
  }
  mount(t) {
    (this.current = t),
      Fh.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      vv.current || ob(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : bu.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    Fh.delete(this.current),
      this.projection && this.projection.unmount(),
      kt(this.notifyUpdate),
      kt(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = Qn.has(t),
      i = n.on("change", (a) => {
        (this.latestValues[t] = a),
          this.props.onUpdate && B.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      o = n.on("renderRequest", this.scheduleRender);
    let s;
    window.MotionCheckAppearSync &&
      (s = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        i(), o(), s && s(), n.owner && n.stop();
      });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Lr) {
      const n = Lr[t];
      if (!n) continue;
      const { isEnabled: r, Feature: i } = n;
      if (
        (!this.features[t] &&
          i &&
          r(this.props) &&
          (this.features[t] = new i(this)),
        this.features[t])
      ) {
        const o = this.features[t];
        o.isMounted ? o.update() : (o.mount(), (o.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : se();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < Bh.length; r++) {
      const i = Bh[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const o = "on" + i,
        s = t[o];
      s && (this.propEventSubscriptions[i] = this.on(i, s));
    }
    (this.prevMotionValues = sb(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = Rt(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    var r;
    let i =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
          r !== void 0
        ? r
        : this.readValueFromInstance(this.current, t, this.options);
    return (
      i != null &&
        (typeof i == "string" && (ey(i) || Jg(i))
          ? (i = parseFloat(i))
          : !lb(i) && yn.test(n) && (i = hy(t, n)),
        this.setBaseTarget(t, be(i) ? i.get() : i)),
      be(i) ? i.get() : i
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let i;
    if (typeof r == "string" || typeof r == "object") {
      const s = Lc(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom
      );
      s && (i = s[t]);
    }
    if (r && i !== void 0) return i;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !be(o)
      ? o
      : this.initialValues[t] !== void 0 && i === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new ed()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class xv extends ub {
  constructor() {
    super(...arguments), (this.KeyframeResolver = py);
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
}
function cb(e) {
  return window.getComputedStyle(e);
}
class db extends xv {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = av);
  }
  readValueFromInstance(t, n) {
    if (Qn.has(n)) {
      const r = Uc(n);
      return (r && r.default) || 0;
    } else {
      const r = cb(t),
        i = (ny(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return $y(t, n);
  }
  build(t, n, r) {
    ld(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return sd(t, n, r);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    be(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
class fb extends xv {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = se);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Qn.has(n)) {
      const r = Uc(n);
      return (r && r.default) || 0;
    }
    return (n = lv.has(n) ? n : td(n)), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return dv(t, n, r);
  }
  build(t, n, r) {
    ud(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    uv(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = cd(t.tagName)), super.mount(t);
  }
}
const hb = (e, t) =>
    od(e) ? new fb(t) : new db(t, { allowProjection: e !== k.Fragment }),
  pb = ib({ ...rk, ...PC, ...pC, ...EC }, hb),
  W = Xx(pb);
function mb(e, t, n) {
  k.useInsertionEffect(() => e.on(t, n), [e, t, n]);
}
function wv(e, t, n) {
  return (
    typeof e == "string"
      ? (e = document.querySelectorAll(e))
      : e instanceof Element && (e = [e]),
    Array.from(e || [])
  );
}
const Yo = new WeakMap();
let Qt;
function gb(e, t) {
  if (t) {
    const { inlineSize: n, blockSize: r } = t[0];
    return { width: n, height: r };
  } else
    return e instanceof SVGElement && "getBBox" in e
      ? e.getBBox()
      : { width: e.offsetWidth, height: e.offsetHeight };
}
function yb({ target: e, contentRect: t, borderBoxSize: n }) {
  var r;
  (r = Yo.get(e)) === null ||
    r === void 0 ||
    r.forEach((i) => {
      i({
        target: e,
        contentSize: t,
        get size() {
          return gb(e, n);
        },
      });
    });
}
function vb(e) {
  e.forEach(yb);
}
function xb() {
  typeof ResizeObserver > "u" || (Qt = new ResizeObserver(vb));
}
function wb(e, t) {
  Qt || xb();
  const n = wv(e);
  return (
    n.forEach((r) => {
      let i = Yo.get(r);
      i || ((i = new Set()), Yo.set(r, i)),
        i.add(t),
        Qt == null || Qt.observe(r);
    }),
    () => {
      n.forEach((r) => {
        const i = Yo.get(r);
        i == null || i.delete(t),
          (i != null && i.size) || Qt == null || Qt.unobserve(r);
      });
    }
  );
}
const Qo = new Set();
let Ei;
function Sb() {
  (Ei = () => {
    const e = { width: window.innerWidth, height: window.innerHeight },
      t = { target: window, size: e, contentSize: e };
    Qo.forEach((n) => n(t));
  }),
    window.addEventListener("resize", Ei);
}
function kb(e) {
  return (
    Qo.add(e),
    Ei || Sb(),
    () => {
      Qo.delete(e), !Qo.size && Ei && (Ei = void 0);
    }
  );
}
function Cb(e, t) {
  return typeof e == "function" ? kb(e) : wb(e, t);
}
const bb = 50,
  $h = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0,
  }),
  Pb = () => ({ time: 0, x: $h(), y: $h() }),
  Eb = {
    x: { length: "Width", position: "Left" },
    y: { length: "Height", position: "Top" },
  };
function Wh(e, t, n, r) {
  const i = n[t],
    { length: o, position: s } = Eb[t],
    a = i.current,
    l = n.time;
  (i.current = e[`scroll${s}`]),
    (i.scrollLength = e[`scroll${o}`] - e[`client${o}`]),
    (i.offset.length = 0),
    (i.offset[0] = 0),
    (i.offset[1] = i.scrollLength),
    (i.progress = Hn(0, i.scrollLength, i.current));
  const u = r - l;
  i.velocity = u > bb ? 0 : Hc(i.current - a, u);
}
function jb(e, t, n) {
  Wh(e, "x", t, n), Wh(e, "y", t, n), (t.time = n);
}
function Tb(e, t) {
  const n = { x: 0, y: 0 };
  let r = e;
  for (; r && r !== t; )
    if (r instanceof HTMLElement)
      (n.x += r.offsetLeft), (n.y += r.offsetTop), (r = r.offsetParent);
    else if (r.tagName === "svg") {
      const i = r.getBoundingClientRect();
      r = r.parentElement;
      const o = r.getBoundingClientRect();
      (n.x += i.left - o.left), (n.y += i.top - o.top);
    } else if (r instanceof SVGGraphicsElement) {
      const { x: i, y: o } = r.getBBox();
      (n.x += i), (n.y += o);
      let s = null,
        a = r.parentNode;
      for (; !s; ) a.tagName === "svg" && (s = a), (a = r.parentNode);
      r = s;
    } else break;
  return n;
}
const Nb = {
    Enter: [
      [0, 1],
      [1, 1],
    ],
    Exit: [
      [0, 0],
      [1, 0],
    ],
    Any: [
      [1, 0],
      [0, 1],
    ],
    All: [
      [0, 0],
      [1, 1],
    ],
  },
  Pu = { start: 0, center: 0.5, end: 1 };
function Uh(e, t, n = 0) {
  let r = 0;
  if ((e in Pu && (e = Pu[e]), typeof e == "string")) {
    const i = parseFloat(e);
    e.endsWith("px")
      ? (r = i)
      : e.endsWith("%")
      ? (e = i / 100)
      : e.endsWith("vw")
      ? (r = (i / 100) * document.documentElement.clientWidth)
      : e.endsWith("vh")
      ? (r = (i / 100) * document.documentElement.clientHeight)
      : (e = i);
  }
  return typeof e == "number" && (r = t * e), n + r;
}
const Ab = [0, 0];
function Rb(e, t, n, r) {
  let i = Array.isArray(e) ? e : Ab,
    o = 0,
    s = 0;
  return (
    typeof e == "number"
      ? (i = [e, e])
      : typeof e == "string" &&
        ((e = e.trim()),
        e.includes(" ") ? (i = e.split(" ")) : (i = [e, Pu[e] ? e : "0"])),
    (o = Uh(i[0], n, r)),
    (s = Uh(i[1], t)),
    o - s
  );
}
const Mb = { x: 0, y: 0 };
function Lb(e) {
  return "getBBox" in e && e.tagName !== "svg"
    ? e.getBBox()
    : { width: e.clientWidth, height: e.clientHeight };
}
function Ob(e, t, n) {
  const { offset: r = Nb.All } = n,
    { target: i = e, axis: o = "y" } = n,
    s = o === "y" ? "height" : "width",
    a = i !== e ? Tb(i, e) : Mb,
    l = i === e ? { width: e.scrollWidth, height: e.scrollHeight } : Lb(i),
    u = { width: e.clientWidth, height: e.clientHeight };
  t[o].offset.length = 0;
  let c = !t[o].interpolate;
  const d = r.length;
  for (let h = 0; h < d; h++) {
    const y = Rb(r[h], u[s], l[s], a[o]);
    !c && y !== t[o].interpolatorOffsets[h] && (c = !0), (t[o].offset[h] = y);
  }
  c &&
    ((t[o].interpolate = Sy(t[o].offset, ky(r))),
    (t[o].interpolatorOffsets = [...t[o].offset])),
    (t[o].progress = t[o].interpolate(t[o].current));
}
function _b(e, t = e, n) {
  if (((n.x.targetOffset = 0), (n.y.targetOffset = 0), t !== e)) {
    let r = t;
    for (; r && r !== e; )
      (n.x.targetOffset += r.offsetLeft),
        (n.y.targetOffset += r.offsetTop),
        (r = r.offsetParent);
  }
  (n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth),
    (n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight),
    (n.x.containerLength = e.clientWidth),
    (n.y.containerLength = e.clientHeight);
}
function Db(e, t, n, r = {}) {
  return {
    measure: () => _b(e, r.target, n),
    update: (i) => {
      jb(e, n, i), (r.offset || r.target) && Ob(e, n, r);
    },
    notify: () => t(n),
  };
}
const ri = new WeakMap(),
  Gh = new WeakMap(),
  sl = new WeakMap(),
  Hh = (e) => (e === document.documentElement ? window : e);
function dd(e, { container: t = document.documentElement, ...n } = {}) {
  let r = sl.get(t);
  r || ((r = new Set()), sl.set(t, r));
  const i = Pb(),
    o = Db(t, e, i, n);
  if ((r.add(o), !ri.has(t))) {
    const a = () => {
        for (const h of r) h.measure();
      },
      l = () => {
        for (const h of r) h.update(fe.timestamp);
      },
      u = () => {
        for (const h of r) h.notify();
      },
      c = () => {
        B.read(a, !1, !0), B.read(l, !1, !0), B.update(u, !1, !0);
      };
    ri.set(t, c);
    const d = Hh(t);
    window.addEventListener("resize", c, { passive: !0 }),
      t !== document.documentElement && Gh.set(t, Cb(t, c)),
      d.addEventListener("scroll", c, { passive: !0 });
  }
  const s = ri.get(t);
  return (
    B.read(s, !1, !0),
    () => {
      var a;
      kt(s);
      const l = sl.get(t);
      if (!l || (l.delete(o), l.size)) return;
      const u = ri.get(t);
      ri.delete(t),
        u &&
          (Hh(t).removeEventListener("scroll", u),
          (a = Gh.get(t)) === null || a === void 0 || a(),
          window.removeEventListener("resize", u));
    }
  );
}
function Sv(e, t) {
  let n;
  const r = () => {
    const { currentTime: i } = t,
      s = (i === null ? 0 : i.value) / 100;
    n !== s && e(s), (n = s);
  };
  return B.update(r, !0), () => kt(r);
}
function Ib({ source: e, container: t, axis: n = "y" }) {
  e && (t = e);
  const r = { value: 0 },
    i = dd(
      (o) => {
        r.value = o[n].progress * 100;
      },
      { container: t, axis: n }
    );
  return { currentTime: r, cancel: i };
}
const al = new Map();
function kv({
  source: e,
  container: t = document.documentElement,
  axis: n = "y",
} = {}) {
  e && (t = e), al.has(t) || al.set(t, {});
  const r = al.get(t);
  return (
    r[n] ||
      (r[n] = Ey()
        ? new ScrollTimeline({ source: t, axis: n })
        : Ib({ source: t, axis: n })),
    r[n]
  );
}
function Vb(e) {
  return e.length === 2;
}
function Cv(e) {
  return e && (e.target || e.offset);
}
function zb(e, t) {
  return Vb(e) || Cv(t)
    ? dd((n) => {
        e(n[t.axis].progress, n);
      }, t)
    : Sv(e, kv(t));
}
function Fb(e, t) {
  if (Cv(t))
    return (
      e.pause(),
      dd((n) => {
        e.time = e.duration * n[t.axis].progress;
      }, t)
    );
  {
    const n = kv(t);
    return e.attachTimeline(
      n,
      (r) => (
        r.pause(),
        Sv((i) => {
          r.time = r.duration * i;
        }, n)
      )
    );
  }
}
function Bb(e, { axis: t = "y", ...n } = {}) {
  const r = { axis: t, ...n };
  return typeof e == "function" ? zb(e, r) : Fb(e, r);
}
function Kh(e, t) {
  cw(!!(!t || t.current));
}
const $b = () => ({
  scrollX: Rt(0),
  scrollY: Rt(0),
  scrollXProgress: Rt(0),
  scrollYProgress: Rt(0),
});
function Wb({ container: e, target: t, layoutEffect: n = !0, ...r } = {}) {
  const i = fv($b);
  return (
    (n ? rv : k.useEffect)(
      () => (
        Kh("target", t),
        Kh("container", e),
        Bb(
          (s, { x: a, y: l }) => {
            i.scrollX.set(a.current),
              i.scrollXProgress.set(a.progress),
              i.scrollY.set(l.current),
              i.scrollYProgress.set(l.progress);
          },
          {
            ...r,
            container: (e == null ? void 0 : e.current) || void 0,
            target: (t == null ? void 0 : t.current) || void 0,
          }
        )
      ),
      [e, t, JSON.stringify(r.offset)]
    ),
    i
  );
}
const Ub = { some: 0, all: 1 };
function Gb(e, t, { root: n, margin: r, amount: i = "some" } = {}) {
  const o = wv(e),
    s = new WeakMap(),
    a = (u) => {
      u.forEach((c) => {
        const d = s.get(c.target);
        if (c.isIntersecting !== !!d)
          if (c.isIntersecting) {
            const h = t(c);
            typeof h == "function" ? s.set(c.target, h) : l.unobserve(c.target);
          } else d && (d(c), s.delete(c.target));
      });
    },
    l = new IntersectionObserver(a, {
      root: n,
      rootMargin: r,
      threshold: typeof i == "number" ? i : Ub[i],
    });
  return o.forEach((u) => l.observe(u)), () => l.disconnect();
}
function bv(e, { root: t, margin: n, amount: r, once: i = !1 } = {}) {
  const [o, s] = k.useState(!1);
  return (
    k.useEffect(() => {
      if (!e.current || (i && o)) return;
      const a = () => (s(!0), i ? void 0 : () => s(!1)),
        l = { root: (t && t.current) || void 0, margin: n, amount: r };
      return Gb(e.current, a, l);
    }, [t, e, n, i, r]),
    o
  );
}
/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Yi() {
  return (
    (Yi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Yi.apply(this, arguments)
  );
}
var rn;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(rn || (rn = {}));
const Yh = "popstate";
function Hb(e) {
  e === void 0 && (e = {});
  function t(i, o) {
    let {
      pathname: s = "/",
      search: a = "",
      hash: l = "",
    } = Xn(i.location.hash.substr(1));
    return (
      !s.startsWith("/") && !s.startsWith(".") && (s = "/" + s),
      Eu(
        "",
        { pathname: s, search: a, hash: l },
        (o.state && o.state.usr) || null,
        (o.state && o.state.key) || "default"
      )
    );
  }
  function n(i, o) {
    let s = i.document.querySelector("base"),
      a = "";
    if (s && s.getAttribute("href")) {
      let l = i.location.href,
        u = l.indexOf("#");
      a = u === -1 ? l : l.slice(0, u);
    }
    return a + "#" + (typeof o == "string" ? o : Ms(o));
  }
  function r(i, o) {
    fd(
      i.pathname.charAt(0) === "/",
      "relative pathnames are not supported in hash history.push(" +
        JSON.stringify(o) +
        ")"
    );
  }
  return Yb(t, n, r, e);
}
function oe(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function fd(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Kb() {
  return Math.random().toString(36).substr(2, 8);
}
function Qh(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Eu(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Yi(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Xn(t) : t,
      { state: n, key: (t && t.key) || r || Kb() }
    )
  );
}
function Ms(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Xn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Yb(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    s = i.history,
    a = rn.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), s.replaceState(Yi({}, s.state, { idx: u }), ""));
  function c() {
    return (s.state || { idx: null }).idx;
  }
  function d() {
    a = rn.Pop;
    let S = c(),
      m = S == null ? null : S - u;
    (u = S), l && l({ action: a, location: x.location, delta: m });
  }
  function h(S, m) {
    a = rn.Push;
    let p = Eu(x.location, S, m);
    n && n(p, S), (u = c() + 1);
    let g = Qh(p, u),
      w = x.createHref(p);
    try {
      s.pushState(g, "", w);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      i.location.assign(w);
    }
    o && l && l({ action: a, location: x.location, delta: 1 });
  }
  function y(S, m) {
    a = rn.Replace;
    let p = Eu(x.location, S, m);
    n && n(p, S), (u = c());
    let g = Qh(p, u),
      w = x.createHref(p);
    s.replaceState(g, "", w),
      o && l && l({ action: a, location: x.location, delta: 0 });
  }
  function v(S) {
    let m = i.location.origin !== "null" ? i.location.origin : i.location.href,
      p = typeof S == "string" ? S : Ms(S);
    return (
      (p = p.replace(/ $/, "%20")),
      oe(
        m,
        "No window.location.(origin|href) available to create URL for href: " +
          p
      ),
      new URL(p, m)
    );
  }
  let x = {
    get action() {
      return a;
    },
    get location() {
      return e(i, s);
    },
    listen(S) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(Yh, d),
        (l = S),
        () => {
          i.removeEventListener(Yh, d), (l = null);
        }
      );
    },
    createHref(S) {
      return t(i, S);
    },
    createURL: v,
    encodeLocation(S) {
      let m = v(S);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: h,
    replace: y,
    go(S) {
      return s.go(S);
    },
  };
  return x;
}
var Xh;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Xh || (Xh = {}));
function Qb(e, t, n) {
  return n === void 0 && (n = "/"), Xb(e, t, n, !1);
}
function Xb(e, t, n, r) {
  let i = typeof t == "string" ? Xn(t) : t,
    o = Or(i.pathname || "/", n);
  if (o == null) return null;
  let s = Pv(e);
  qb(s);
  let a = null;
  for (let l = 0; a == null && l < s.length; ++l) {
    let u = lP(o);
    a = sP(s[l], u, r);
  }
  return a;
}
function Pv(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (o, s, a) => {
    let l = {
      relativePath: a === void 0 ? o.path || "" : a,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: s,
      route: o,
    };
    l.relativePath.startsWith("/") &&
      (oe(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = hn([r, l.relativePath]),
      c = n.concat(l);
    o.children &&
      o.children.length > 0 &&
      (oe(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      Pv(o.children, t, c, u)),
      !(o.path == null && !o.index) &&
        t.push({ path: u, score: iP(u, o.index), routesMeta: c });
  };
  return (
    e.forEach((o, s) => {
      var a;
      if (o.path === "" || !((a = o.path) != null && a.includes("?"))) i(o, s);
      else for (let l of Ev(o.path)) i(o, s, l);
    }),
    t
  );
}
function Ev(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [o, ""] : [o];
  let s = Ev(r.join("/")),
    a = [];
  return (
    a.push(...s.map((l) => (l === "" ? o : [o, l].join("/")))),
    i && a.push(...s),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function qb(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : oP(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Zb = /^:[\w-]+$/,
  Jb = 3,
  eP = 2,
  tP = 1,
  nP = 10,
  rP = -2,
  qh = (e) => e === "*";
function iP(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(qh) && (r += rP),
    t && (r += eP),
    n
      .filter((i) => !qh(i))
      .reduce((i, o) => i + (Zb.test(o) ? Jb : o === "" ? tP : nP), r)
  );
}
function oP(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function sP(e, t, n) {
  let { routesMeta: r } = e,
    i = {},
    o = "/",
    s = [];
  for (let a = 0; a < r.length; ++a) {
    let l = r[a],
      u = a === r.length - 1,
      c = o === "/" ? t : t.slice(o.length) || "/",
      d = Ls(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
        c
      ),
      h = l.route;
    if (
      (!d &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (d = Ls(
          { path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 },
          c
        )),
      !d)
    )
      return null;
    Object.assign(i, d.params),
      s.push({
        params: i,
        pathname: hn([o, d.pathname]),
        pathnameBase: fP(hn([o, d.pathnameBase])),
        route: h,
      }),
      d.pathnameBase !== "/" && (o = hn([o, d.pathnameBase]));
  }
  return s;
}
function Ls(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = aP(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    s = o.replace(/(.)\/+$/, "$1"),
    a = i.slice(1);
  return {
    params: r.reduce((u, c, d) => {
      let { paramName: h, isOptional: y } = c;
      if (h === "*") {
        let x = a[d] || "";
        s = o.slice(0, o.length - x.length).replace(/(.)\/+$/, "$1");
      }
      const v = a[d];
      return (
        y && !v ? (u[h] = void 0) : (u[h] = (v || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: o,
    pathnameBase: s,
    pattern: e,
  };
}
function aP(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    fd(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, a, l) => (
            r.push({ paramName: a, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function lP(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      fd(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Or(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function uP(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? Xn(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : cP(n, t)) : t,
    search: hP(r),
    hash: pP(i),
  };
}
function cP(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function ll(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function dP(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function jv(e, t) {
  let n = dP(e);
  return t
    ? n.map((r, i) => (i === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Tv(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = Xn(e))
    : ((i = Yi({}, e)),
      oe(
        !i.pathname || !i.pathname.includes("?"),
        ll("?", "pathname", "search", i)
      ),
      oe(
        !i.pathname || !i.pathname.includes("#"),
        ll("#", "pathname", "hash", i)
      ),
      oe(!i.search || !i.search.includes("#"), ll("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "",
    s = o ? "/" : i.pathname,
    a;
  if (s == null) a = n;
  else {
    let d = t.length - 1;
    if (!r && s.startsWith("..")) {
      let h = s.split("/");
      for (; h[0] === ".."; ) h.shift(), (d -= 1);
      i.pathname = h.join("/");
    }
    a = d >= 0 ? t[d] : "/";
  }
  let l = uP(i, a),
    u = s && s !== "/" && s.endsWith("/"),
    c = (o || s === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
}
const hn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  fP = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  hP = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  pP = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function mP(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Nv = ["post", "put", "patch", "delete"];
new Set(Nv);
const gP = ["get", ...Nv];
new Set(gP);
/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Qi() {
  return (
    (Qi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Qi.apply(this, arguments)
  );
}
const ca = k.createContext(null),
  Av = k.createContext(null),
  kn = k.createContext(null),
  da = k.createContext(null),
  qn = k.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Rv = k.createContext(null);
function yP(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  oo() || oe(!1);
  let { basename: r, navigator: i } = k.useContext(kn),
    { hash: o, pathname: s, search: a } = fa(e, { relative: n }),
    l = s;
  return (
    r !== "/" && (l = s === "/" ? r : hn([r, s])),
    i.createHref({ pathname: l, search: a, hash: o })
  );
}
function oo() {
  return k.useContext(da) != null;
}
function Ur() {
  return oo() || oe(!1), k.useContext(da).location;
}
function Mv(e) {
  k.useContext(kn).static || k.useLayoutEffect(e);
}
function vP() {
  let { isDataRoute: e } = k.useContext(qn);
  return e ? RP() : xP();
}
function xP() {
  oo() || oe(!1);
  let e = k.useContext(ca),
    { basename: t, future: n, navigator: r } = k.useContext(kn),
    { matches: i } = k.useContext(qn),
    { pathname: o } = Ur(),
    s = JSON.stringify(jv(i, n.v7_relativeSplatPath)),
    a = k.useRef(!1);
  return (
    Mv(() => {
      a.current = !0;
    }),
    k.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !a.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let d = Tv(u, JSON.parse(s), o, c.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : hn([t, d.pathname])),
          (c.replace ? r.replace : r.push)(d, c.state, c);
      },
      [t, r, s, o, e]
    )
  );
}
function fa(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = k.useContext(kn),
    { matches: i } = k.useContext(qn),
    { pathname: o } = Ur(),
    s = JSON.stringify(jv(i, r.v7_relativeSplatPath));
  return k.useMemo(() => Tv(e, JSON.parse(s), o, n === "path"), [e, s, o, n]);
}
function wP(e, t) {
  return SP(e, t);
}
function SP(e, t, n, r) {
  oo() || oe(!1);
  let { navigator: i } = k.useContext(kn),
    { matches: o } = k.useContext(qn),
    s = o[o.length - 1],
    a = s ? s.params : {};
  s && s.pathname;
  let l = s ? s.pathnameBase : "/";
  s && s.route;
  let u = Ur(),
    c;
  if (t) {
    var d;
    let S = typeof t == "string" ? Xn(t) : t;
    l === "/" || ((d = S.pathname) != null && d.startsWith(l)) || oe(!1),
      (c = S);
  } else c = u;
  let h = c.pathname || "/",
    y = h;
  if (l !== "/") {
    let S = l.replace(/^\//, "").split("/");
    y = "/" + h.replace(/^\//, "").split("/").slice(S.length).join("/");
  }
  let v = Qb(e, { pathname: y }),
    x = EP(
      v &&
        v.map((S) =>
          Object.assign({}, S, {
            params: Object.assign({}, a, S.params),
            pathname: hn([
              l,
              i.encodeLocation
                ? i.encodeLocation(S.pathname).pathname
                : S.pathname,
            ]),
            pathnameBase:
              S.pathnameBase === "/"
                ? l
                : hn([
                    l,
                    i.encodeLocation
                      ? i.encodeLocation(S.pathnameBase).pathname
                      : S.pathnameBase,
                  ]),
          })
        ),
      o,
      n,
      r
    );
  return t && x
    ? k.createElement(
        da.Provider,
        {
          value: {
            location: Qi(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c
            ),
            navigationType: rn.Pop,
          },
        },
        x
      )
    : x;
}
function kP() {
  let e = AP(),
    t = mP(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return k.createElement(
    k.Fragment,
    null,
    k.createElement("h2", null, "Unexpected Application Error!"),
    k.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? k.createElement("pre", { style: i }, n) : null,
    null
  );
}
const CP = k.createElement(kP, null);
class bP extends k.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? k.createElement(
          qn.Provider,
          { value: this.props.routeContext },
          k.createElement(Rv.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function PP(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = k.useContext(ca);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    k.createElement(qn.Provider, { value: t }, r)
  );
}
function EP(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (o = r) != null &&
      o.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let s = e,
    a = (i = n) == null ? void 0 : i.errors;
  if (a != null) {
    let c = s.findIndex(
      (d) => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0
    );
    c >= 0 || oe(!1), (s = s.slice(0, Math.min(s.length, c + 1)));
  }
  let l = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < s.length; c++) {
      let d = s[c];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c),
        d.route.id)
      ) {
        let { loaderData: h, errors: y } = n,
          v =
            d.route.loader &&
            h[d.route.id] === void 0 &&
            (!y || y[d.route.id] === void 0);
        if (d.route.lazy || v) {
          (l = !0), u >= 0 ? (s = s.slice(0, u + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((c, d, h) => {
    let y,
      v = !1,
      x = null,
      S = null;
    n &&
      ((y = a && d.route.id ? a[d.route.id] : void 0),
      (x = d.route.errorElement || CP),
      l &&
        (u < 0 && h === 0
          ? ((v = !0), (S = null))
          : u === h &&
            ((v = !0), (S = d.route.hydrateFallbackElement || null))));
    let m = t.concat(s.slice(0, h + 1)),
      p = () => {
        let g;
        return (
          y
            ? (g = x)
            : v
            ? (g = S)
            : d.route.Component
            ? (g = k.createElement(d.route.Component, null))
            : d.route.element
            ? (g = d.route.element)
            : (g = c),
          k.createElement(PP, {
            match: d,
            routeContext: { outlet: c, matches: m, isDataRoute: n != null },
            children: g,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || h === 0)
      ? k.createElement(bP, {
          location: n.location,
          revalidation: n.revalidation,
          component: x,
          error: y,
          children: p(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : p();
  }, null);
}
var Lv = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Lv || {}),
  Os = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Os || {});
function jP(e) {
  let t = k.useContext(ca);
  return t || oe(!1), t;
}
function TP(e) {
  let t = k.useContext(Av);
  return t || oe(!1), t;
}
function NP(e) {
  let t = k.useContext(qn);
  return t || oe(!1), t;
}
function Ov(e) {
  let t = NP(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || oe(!1), n.route.id;
}
function AP() {
  var e;
  let t = k.useContext(Rv),
    n = TP(Os.UseRouteError),
    r = Ov(Os.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function RP() {
  let { router: e } = jP(Lv.UseNavigateStable),
    t = Ov(Os.UseNavigateStable),
    n = k.useRef(!1);
  return (
    Mv(() => {
      n.current = !0;
    }),
    k.useCallback(
      function (i, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, Qi({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
function st(e) {
  oe(!1);
}
function MP(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = rn.Pop,
    navigator: o,
    static: s = !1,
    future: a,
  } = e;
  oo() && oe(!1);
  let l = t.replace(/^\/*/, "/"),
    u = k.useMemo(
      () => ({
        basename: l,
        navigator: o,
        static: s,
        future: Qi({ v7_relativeSplatPath: !1 }, a),
      }),
      [l, a, o, s]
    );
  typeof r == "string" && (r = Xn(r));
  let {
      pathname: c = "/",
      search: d = "",
      hash: h = "",
      state: y = null,
      key: v = "default",
    } = r,
    x = k.useMemo(() => {
      let S = Or(c, l);
      return S == null
        ? null
        : {
            location: { pathname: S, search: d, hash: h, state: y, key: v },
            navigationType: i,
          };
    }, [l, c, d, h, y, v, i]);
  return x == null
    ? null
    : k.createElement(
        kn.Provider,
        { value: u },
        k.createElement(da.Provider, { children: n, value: x })
      );
}
function LP(e) {
  let { children: t, location: n } = e;
  return wP(ju(t), n);
}
new Promise(() => {});
function ju(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    k.Children.forEach(e, (r, i) => {
      if (!k.isValidElement(r)) return;
      let o = [...t, i];
      if (r.type === k.Fragment) {
        n.push.apply(n, ju(r.props.children, o));
        return;
      }
      r.type !== st && oe(!1), !r.props.index || !r.props.children || oe(!1);
      let s = {
        id: r.props.id || o.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (s.children = ju(r.props.children, o)), n.push(s);
    }),
    n
  );
}
/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function _s() {
  return (
    (_s = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    _s.apply(this, arguments)
  );
}
function _v(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function OP(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function _P(e, t) {
  return e.button === 0 && (!t || t === "_self") && !OP(e);
}
const DP = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  IP = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "unstable_viewTransition",
    "children",
  ],
  VP = "6";
try {
  window.__reactRouterVersion = VP;
} catch {}
const zP = k.createContext({ isTransitioning: !1 }),
  FP = "startTransition",
  Zh = _0[FP];
function BP(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    o = k.useRef();
  o.current == null && (o.current = Hb({ window: i, v5Compat: !0 }));
  let s = o.current,
    [a, l] = k.useState({ action: s.action, location: s.location }),
    { v7_startTransition: u } = r || {},
    c = k.useCallback(
      (d) => {
        u && Zh ? Zh(() => l(d)) : l(d);
      },
      [l, u]
    );
  return (
    k.useLayoutEffect(() => s.listen(c), [s, c]),
    k.createElement(MP, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: s,
      future: r,
    })
  );
}
const $P =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  WP = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Tt = k.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: o,
        replace: s,
        state: a,
        target: l,
        to: u,
        preventScrollReset: c,
        unstable_viewTransition: d,
      } = t,
      h = _v(t, DP),
      { basename: y } = k.useContext(kn),
      v,
      x = !1;
    if (typeof u == "string" && WP.test(u) && ((v = u), $P))
      try {
        let g = new URL(window.location.href),
          w = u.startsWith("//") ? new URL(g.protocol + u) : new URL(u),
          C = Or(w.pathname, y);
        w.origin === g.origin && C != null
          ? (u = C + w.search + w.hash)
          : (x = !0);
      } catch {}
    let S = yP(u, { relative: i }),
      m = GP(u, {
        replace: s,
        state: a,
        target: l,
        preventScrollReset: c,
        relative: i,
        unstable_viewTransition: d,
      });
    function p(g) {
      r && r(g), g.defaultPrevented || m(g);
    }
    return k.createElement(
      "a",
      _s({}, h, { href: v || S, onClick: x || o ? r : p, ref: n, target: l })
    );
  }),
  Jh = k.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: i = !1,
        className: o = "",
        end: s = !1,
        style: a,
        to: l,
        unstable_viewTransition: u,
        children: c,
      } = t,
      d = _v(t, IP),
      h = fa(l, { relative: d.relative }),
      y = Ur(),
      v = k.useContext(Av),
      { navigator: x, basename: S } = k.useContext(kn),
      m = v != null && HP(h) && u === !0,
      p = x.encodeLocation ? x.encodeLocation(h).pathname : h.pathname,
      g = y.pathname,
      w =
        v && v.navigation && v.navigation.location
          ? v.navigation.location.pathname
          : null;
    i ||
      ((g = g.toLowerCase()),
      (w = w ? w.toLowerCase() : null),
      (p = p.toLowerCase())),
      w && S && (w = Or(w, S) || w);
    const C = p !== "/" && p.endsWith("/") ? p.length - 1 : p.length;
    let b = g === p || (!s && g.startsWith(p) && g.charAt(C) === "/"),
      P =
        w != null &&
        (w === p || (!s && w.startsWith(p) && w.charAt(p.length) === "/")),
      E = { isActive: b, isPending: P, isTransitioning: m },
      O = b ? r : void 0,
      R;
    typeof o == "function"
      ? (R = o(E))
      : (R = [
          o,
          b ? "active" : null,
          P ? "pending" : null,
          m ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let H = typeof a == "function" ? a(E) : a;
    return k.createElement(
      Tt,
      _s({}, d, {
        "aria-current": O,
        className: R,
        ref: n,
        style: H,
        to: l,
        unstable_viewTransition: u,
      }),
      typeof c == "function" ? c(E) : c
    );
  });
var Tu;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Tu || (Tu = {}));
var ep;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(ep || (ep = {}));
function UP(e) {
  let t = k.useContext(ca);
  return t || oe(!1), t;
}
function GP(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: o,
      relative: s,
      unstable_viewTransition: a,
    } = t === void 0 ? {} : t,
    l = vP(),
    u = Ur(),
    c = fa(e, { relative: s });
  return k.useCallback(
    (d) => {
      if (_P(d, n)) {
        d.preventDefault();
        let h = r !== void 0 ? r : Ms(u) === Ms(c);
        l(e, {
          replace: h,
          state: i,
          preventScrollReset: o,
          relative: s,
          unstable_viewTransition: a,
        });
      }
    },
    [u, l, c, r, i, n, e, o, s, a]
  );
}
function HP(e, t) {
  t === void 0 && (t = {});
  let n = k.useContext(zP);
  n == null && oe(!1);
  let { basename: r } = UP(Tu.useViewTransitionState),
    i = fa(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let o = Or(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    s = Or(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return Ls(i.pathname, s) != null || Ls(i.pathname, o) != null;
}
const ha = (e) => ({
  hidden: { x: "-100%", opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, delay: parseFloat(e), ease: "easeOut" },
  },
});
/*!
 * Glide.js v3.6.2
 * (c) 2013-2024 Jędrzej Chałubek (https://github.com/jedrzejchalubek/)
 * Released under the MIT License.
 */ var KP = !1;
try {
  var tp = Object.defineProperty({}, "passive", {
    get: function () {
      KP = !0;
    },
  });
  window.addEventListener("testPassive", null, tp),
    window.removeEventListener("testPassive", null, tp);
} catch {}
const YP = [
    { id: 1, name: "person ", img: Mc, price: "$10", delay: 0.4 },
    { id: 2, name: "Person", img: Vg, price: "$5", delay: 0.8 },
    { id: 3, name: "person", img: zg, price: "$8", delay: 1.2 },
    { id: 4, name: "person", img: Fg, price: "$8", delay: 1.2 },
    { id: 5, name: "person", img: Bg, price: "$8", delay: 1.2 },
    { id: 6, name: "person", img: $g, price: "$8", delay: 1.2 },
  ],
  QP = () =>
    f.jsxs("section", {
      className: "relative  pb-10 bg-[#f5f5f5]",
      children: [
        f.jsxs("div", {
          className: "container py-1 relative z-10",
          children: [
            f.jsx(W.h3, {
              variants: ha(0.5),
              initial: "hidden",
              whileInView: "show",
              className:
                "text-2xl  font-semibold uppercase py-8 text-center tracking-[5px]",
              children: f.jsx(W.div, {
                whileHover: {
                  scale: 1.2,
                  textShadow: "0px 0px 8px rgb(155,55,5)",
                },
                children: f.jsx(Tt, {
                  to: "/galleryFull",
                  children: "Gallery",
                }),
              }),
            }),
            f.jsx("div", {
              className:
                "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 place-items-center",
              children: YP.map((e) =>
                f.jsxs(
                  "div",
                  {
                    className: "group space-y-3 text-center rounded-xl",
                    children: [
                      f.jsx("div", {
                        className: "flex justify-center  items-center",
                        children: f.jsx("img", {
                          src: e.img,
                          alt: "Gallery",
                          className: `\r
                w-72 rounded-2xl \r
                group-hover:scale-x-110\r
                group-hover:translate-y-[-10px]\r
                transition-all\r
                duration-700`,
                        }),
                      }),
                      f.jsx("div", {
                        children: f.jsx("p", {
                          className: "text-xl font-bold text-yellow-500",
                        }),
                      }),
                    ],
                  },
                  e.id
                )
              ),
            }),
          ],
        }),
        f.jsx("style", {
          jsx: !0,
          children: `
        .clip-left {
          clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%);
        }

        .clip-right {
          clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
        }
      `,
        }),
      ],
    }),
  XP = "assets/MGF-1-CnWtZWWM.webp",
  qP = "assets/MGF-2-Co8drhAi.webp",
  ZP = "assets/MGF-3-CgCo3aUC.webp",
  JP = "assets/MGF-4-DHAk86J8.webp";
var Nu = new Map(),
  Ao = new WeakMap(),
  np = 0,
  eE = void 0;
function tE(e) {
  return e
    ? (Ao.has(e) || ((np += 1), Ao.set(e, np.toString())), Ao.get(e))
    : "0";
}
function nE(e) {
  return Object.keys(e)
    .sort()
    .filter((t) => e[t] !== void 0)
    .map((t) => `${t}_${t === "root" ? tE(e.root) : e[t]}`)
    .toString();
}
function rE(e) {
  const t = nE(e);
  let n = Nu.get(t);
  if (!n) {
    const r = new Map();
    let i;
    const o = new IntersectionObserver((s) => {
      s.forEach((a) => {
        var l;
        const u = a.isIntersecting && i.some((c) => a.intersectionRatio >= c);
        e.trackVisibility && typeof a.isVisible > "u" && (a.isVisible = u),
          (l = r.get(a.target)) == null ||
            l.forEach((c) => {
              c(u, a);
            });
      });
    }, e);
    (i =
      o.thresholds ||
      (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0])),
      (n = { id: t, observer: o, elements: r }),
      Nu.set(t, n);
  }
  return n;
}
function iE(e, t, n = {}, r = eE) {
  if (typeof window.IntersectionObserver > "u" && r !== void 0) {
    const l = e.getBoundingClientRect();
    return (
      t(r, {
        isIntersecting: r,
        target: e,
        intersectionRatio: typeof n.threshold == "number" ? n.threshold : 0,
        time: 0,
        boundingClientRect: l,
        intersectionRect: l,
        rootBounds: l,
      }),
      () => {}
    );
  }
  const { id: i, observer: o, elements: s } = rE(n),
    a = s.get(e) || [];
  return (
    s.has(e) || s.set(e, a),
    a.push(t),
    o.observe(e),
    function () {
      a.splice(a.indexOf(t), 1),
        a.length === 0 && (s.delete(e), o.unobserve(e)),
        s.size === 0 && (o.disconnect(), Nu.delete(i));
    }
  );
}
function oE({
  threshold: e,
  delay: t,
  trackVisibility: n,
  rootMargin: r,
  root: i,
  triggerOnce: o,
  skip: s,
  initialInView: a,
  fallbackInView: l,
  onChange: u,
} = {}) {
  var c;
  const [d, h] = k.useState(null),
    y = k.useRef(),
    [v, x] = k.useState({ inView: !!a, entry: void 0 });
  (y.current = u),
    k.useEffect(() => {
      if (s || !d) return;
      let g;
      return (
        (g = iE(
          d,
          (w, C) => {
            x({ inView: w, entry: C }),
              y.current && y.current(w, C),
              C.isIntersecting && o && g && (g(), (g = void 0));
          },
          {
            root: i,
            rootMargin: r,
            threshold: e,
            trackVisibility: n,
            delay: t,
          },
          l
        )),
        () => {
          g && g();
        }
      );
    }, [Array.isArray(e) ? e.toString() : e, d, i, r, o, s, n, l, t]);
  const S = (c = v.entry) == null ? void 0 : c.target,
    m = k.useRef();
  !d &&
    S &&
    !o &&
    !s &&
    m.current !== S &&
    ((m.current = S), x({ inView: !!a, entry: void 0 }));
  const p = [h, v.inView, v.entry];
  return (p.ref = p[0]), (p.inView = p[1]), (p.entry = p[2]), p;
}
const sE = [
    {
      id: 1,
      name: "Industrial/Institutional Catering",
      img: XP,
      description:
        "At Ace Caterers,We specialize in providing high-quality catering... ",
      delay: 0.4,
    },
    {
      id: 2,
      name: "Outdoor Catering",
      img: qP,
      description:
        "Life is full of big and small happenings which prompt us to celebrate...  ",
      delay: 0.6,
    },
    {
      id: 3,
      name: "Club Operations",
      img: ZP,
      description:
        "For over six years, Magnet Foods has managed exclusive clubs... ",
      delay: 0.8,
    },
    {
      id: 4,
      name: "Operations & Maintenance",
      img: JP,
      description:
        "If your property, whether it’s a club, restaurant, or event venue... ",
      delay: 1,
    },
  ],
  aE = () =>
    f.jsx("section", {
      className: " text-black  ",
      style: {
        background:
          'url("https://img.freepik.com/free-psd/indian-food-illustration-isolated_23-2151851514.jpg?t=st=1728988377~exp=1728991977~hmac=d5c109f1e8567b92f6368302ba35a7b3fb0ecb276e84ac9828cba7b35e8e4bc0&w=996") center/cover no-repeat ',
        backgroundSize: "100% 100%",
      },
      children: f.jsx("div", {
        className: "container pb-14  ",
        children: f.jsx("div", {
          className:
            "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 text-center",
          children: sE.map((e) =>
            f.jsxs(W.div, {
              variants: ha(e.delay),
              initial: "hidden",
              whileInView: "show",
              viewport: { once: !1, amount: 0.3 },
              children: [
                f.jsx("img", {
                  src: e.img,
                  alt: "Image",
                  className:
                    "w-52 xl:w-56 aspect-square overflow-hidden transition-all duration-500 m-auto transform hover:scale-90",
                }),
                f.jsxs("div", {
                  children: [
                    f.jsx("h3", {
                      className: "text-[10px] xl:text-[15px]  text-center  ",
                      children: e.name,
                    }),
                    f.jsx("p", { className: " m-5 ", children: e.description }),
                    f.jsx(Tt, {
                      to: `/OperationsPage#service${e.id}`,
                      className: "font-bold text-lg  text-orange-500 ",
                      children: "Read More",
                    }),
                  ],
                }),
              ],
            })
          ),
        }),
      }),
    }),
  lE = "assets/Brand_1-aAysRAKv.webp",
  uE = "assets/Brand_2-Dg1PGCpR.webp",
  cE = "assets/Brand_3-BHCUqwDS.webp",
  dE = "assets/logo-DbJ1rm8P.webp";
var Le = function () {
  return (
    (Le =
      Object.assign ||
      function (t) {
        for (var n, r = 1, i = arguments.length; r < i; r++) {
          n = arguments[r];
          for (var o in n)
            Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
        }
        return t;
      }),
    Le.apply(this, arguments)
  );
};
function Ds(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, o; r < i; r++)
      (o || !(r in t)) &&
        (o || (o = Array.prototype.slice.call(t, 0, r)), (o[r] = t[r]));
  return e.concat(o || Array.prototype.slice.call(t));
}
var q = "-ms-",
  ji = "-moz-",
  $ = "-webkit-",
  Dv = "comm",
  pa = "rule",
  hd = "decl",
  fE = "@import",
  Iv = "@keyframes",
  hE = "@layer",
  Vv = Math.abs,
  pd = String.fromCharCode,
  Au = Object.assign;
function pE(e, t) {
  return pe(e, 0) ^ 45
    ? (((((((t << 2) ^ pe(e, 0)) << 2) ^ pe(e, 1)) << 2) ^ pe(e, 2)) << 2) ^
        pe(e, 3)
    : 0;
}
function zv(e) {
  return e.trim();
}
function Et(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function D(e, t, n) {
  return e.replace(t, n);
}
function Xo(e, t, n) {
  return e.indexOf(t, n);
}
function pe(e, t) {
  return e.charCodeAt(t) | 0;
}
function _r(e, t, n) {
  return e.slice(t, n);
}
function gt(e) {
  return e.length;
}
function Fv(e) {
  return e.length;
}
function hi(e, t) {
  return t.push(e), e;
}
function mE(e, t) {
  return e.map(t).join("");
}
function rp(e, t) {
  return e.filter(function (n) {
    return !Et(n, t);
  });
}
var ma = 1,
  Dr = 1,
  Bv = 0,
  nt = 0,
  le = 0,
  Gr = "";
function ga(e, t, n, r, i, o, s, a) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: i,
    children: o,
    line: ma,
    column: Dr,
    length: s,
    return: "",
    siblings: a,
  };
}
function Xt(e, t) {
  return Au(
    ga("", null, null, "", null, null, 0, e.siblings),
    e,
    { length: -e.length },
    t
  );
}
function Jn(e) {
  for (; e.root; ) e = Xt(e.root, { children: [e] });
  hi(e, e.siblings);
}
function gE() {
  return le;
}
function yE() {
  return (
    (le = nt > 0 ? pe(Gr, --nt) : 0), Dr--, le === 10 && ((Dr = 1), ma--), le
  );
}
function ft() {
  return (
    (le = nt < Bv ? pe(Gr, nt++) : 0), Dr++, le === 10 && ((Dr = 1), ma++), le
  );
}
function zn() {
  return pe(Gr, nt);
}
function qo() {
  return nt;
}
function ya(e, t) {
  return _r(Gr, e, t);
}
function Ru(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function vE(e) {
  return (ma = Dr = 1), (Bv = gt((Gr = e))), (nt = 0), [];
}
function xE(e) {
  return (Gr = ""), e;
}
function ul(e) {
  return zv(ya(nt - 1, Mu(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function wE(e) {
  for (; (le = zn()) && le < 33; ) ft();
  return Ru(e) > 2 || Ru(le) > 3 ? "" : " ";
}
function SE(e, t) {
  for (
    ;
    --t &&
    ft() &&
    !(le < 48 || le > 102 || (le > 57 && le < 65) || (le > 70 && le < 97));

  );
  return ya(e, qo() + (t < 6 && zn() == 32 && ft() == 32));
}
function Mu(e) {
  for (; ft(); )
    switch (le) {
      case e:
        return nt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Mu(le);
        break;
      case 40:
        e === 41 && Mu(e);
        break;
      case 92:
        ft();
        break;
    }
  return nt;
}
function kE(e, t) {
  for (; ft() && e + le !== 57; ) if (e + le === 84 && zn() === 47) break;
  return "/*" + ya(t, nt - 1) + "*" + pd(e === 47 ? e : ft());
}
function CE(e) {
  for (; !Ru(zn()); ) ft();
  return ya(e, nt);
}
function bE(e) {
  return xE(Zo("", null, null, null, [""], (e = vE(e)), 0, [0], e));
}
function Zo(e, t, n, r, i, o, s, a, l) {
  for (
    var u = 0,
      c = 0,
      d = s,
      h = 0,
      y = 0,
      v = 0,
      x = 1,
      S = 1,
      m = 1,
      p = 0,
      g = "",
      w = i,
      C = o,
      b = r,
      P = g;
    S;

  )
    switch (((v = p), (p = ft()))) {
      case 40:
        if (v != 108 && pe(P, d - 1) == 58) {
          Xo((P += D(ul(p), "&", "&\f")), "&\f", Vv(u ? a[u - 1] : 0)) != -1 &&
            (m = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        P += ul(p);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        P += wE(v);
        break;
      case 92:
        P += SE(qo() - 1, 7);
        continue;
      case 47:
        switch (zn()) {
          case 42:
          case 47:
            hi(PE(kE(ft(), qo()), t, n, l), l);
            break;
          default:
            P += "/";
        }
        break;
      case 123 * x:
        a[u++] = gt(P) * m;
      case 125 * x:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            S = 0;
          case 59 + c:
            m == -1 && (P = D(P, /\f/g, "")),
              y > 0 &&
                gt(P) - d &&
                hi(
                  y > 32
                    ? op(P + ";", r, n, d - 1, l)
                    : op(D(P, " ", "") + ";", r, n, d - 2, l),
                  l
                );
            break;
          case 59:
            P += ";";
          default:
            if (
              (hi(
                (b = ip(P, t, n, u, c, i, a, g, (w = []), (C = []), d, o)),
                o
              ),
              p === 123)
            )
              if (c === 0) Zo(P, t, b, b, w, o, d, a, C);
              else
                switch (h === 99 && pe(P, 3) === 110 ? 100 : h) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Zo(
                      e,
                      b,
                      b,
                      r && hi(ip(e, b, b, 0, 0, i, a, g, i, (w = []), d, C), C),
                      i,
                      C,
                      d,
                      a,
                      r ? w : C
                    );
                    break;
                  default:
                    Zo(P, b, b, b, [""], C, 0, a, C);
                }
        }
        (u = c = y = 0), (x = m = 1), (g = P = ""), (d = s);
        break;
      case 58:
        (d = 1 + gt(P)), (y = v);
      default:
        if (x < 1) {
          if (p == 123) --x;
          else if (p == 125 && x++ == 0 && yE() == 125) continue;
        }
        switch (((P += pd(p)), p * x)) {
          case 38:
            m = c > 0 ? 1 : ((P += "\f"), -1);
            break;
          case 44:
            (a[u++] = (gt(P) - 1) * m), (m = 1);
            break;
          case 64:
            zn() === 45 && (P += ul(ft())),
              (h = zn()),
              (c = d = gt((g = P += CE(qo())))),
              p++;
            break;
          case 45:
            v === 45 && gt(P) == 2 && (x = 0);
        }
    }
  return o;
}
function ip(e, t, n, r, i, o, s, a, l, u, c, d) {
  for (
    var h = i - 1, y = i === 0 ? o : [""], v = Fv(y), x = 0, S = 0, m = 0;
    x < r;
    ++x
  )
    for (var p = 0, g = _r(e, h + 1, (h = Vv((S = s[x])))), w = e; p < v; ++p)
      (w = zv(S > 0 ? y[p] + " " + g : D(g, /&\f/g, y[p]))) && (l[m++] = w);
  return ga(e, t, n, i === 0 ? pa : a, l, u, c, d);
}
function PE(e, t, n, r) {
  return ga(e, t, n, Dv, pd(gE()), _r(e, 2, -2), 0, r);
}
function op(e, t, n, r, i) {
  return ga(e, t, n, hd, _r(e, 0, r), _r(e, r + 1, -1), r, i);
}
function $v(e, t, n) {
  switch (pE(e, t)) {
    case 5103:
      return $ + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return $ + e + e;
    case 4789:
      return ji + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return $ + e + ji + e + q + e + e;
    case 5936:
      switch (pe(e, t + 11)) {
        case 114:
          return $ + e + q + D(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return $ + e + q + D(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return $ + e + q + D(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return $ + e + q + e + e;
    case 6165:
      return $ + e + q + "flex-" + e + e;
    case 5187:
      return (
        $ + e + D(e, /(\w+).+(:[^]+)/, $ + "box-$1$2" + q + "flex-$1$2") + e
      );
    case 5443:
      return (
        $ +
        e +
        q +
        "flex-item-" +
        D(e, /flex-|-self/g, "") +
        (Et(e, /flex-|baseline/)
          ? ""
          : q + "grid-row-" + D(e, /flex-|-self/g, "")) +
        e
      );
    case 4675:
      return (
        $ +
        e +
        q +
        "flex-line-pack" +
        D(e, /align-content|flex-|-self/g, "") +
        e
      );
    case 5548:
      return $ + e + q + D(e, "shrink", "negative") + e;
    case 5292:
      return $ + e + q + D(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        $ +
        "box-" +
        D(e, "-grow", "") +
        $ +
        e +
        q +
        D(e, "grow", "positive") +
        e
      );
    case 4554:
      return $ + D(e, /([^-])(transform)/g, "$1" + $ + "$2") + e;
    case 6187:
      return (
        D(D(D(e, /(zoom-|grab)/, $ + "$1"), /(image-set)/, $ + "$1"), e, "") + e
      );
    case 5495:
    case 3959:
      return D(e, /(image-set\([^]*)/, $ + "$1$`$1");
    case 4968:
      return (
        D(
          D(e, /(.+:)(flex-)?(.*)/, $ + "box-pack:$3" + q + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        $ +
        e +
        e
      );
    case 4200:
      if (!Et(e, /flex-|baseline/))
        return q + "grid-column-align" + _r(e, t) + e;
      break;
    case 2592:
    case 3360:
      return q + D(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n &&
        n.some(function (r, i) {
          return (t = i), Et(r.props, /grid-\w+-end/);
        })
        ? ~Xo(e + (n = n[t].value), "span", 0)
          ? e
          : q +
            D(e, "-start", "") +
            e +
            q +
            "grid-row-span:" +
            (~Xo(n, "span", 0) ? Et(n, /\d+/) : +Et(n, /\d+/) - +Et(e, /\d+/)) +
            ";"
        : q + D(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n &&
        n.some(function (r) {
          return Et(r.props, /grid-\w+-start/);
        })
        ? e
        : q + D(D(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return D(e, /(.+)-inline(.+)/, $ + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (gt(e) - 1 - t > 6)
        switch (pe(e, t + 1)) {
          case 109:
            if (pe(e, t + 4) !== 45) break;
          case 102:
            return (
              D(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  $ +
                  "$2-$3$1" +
                  ji +
                  (pe(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~Xo(e, "stretch", 0)
              ? $v(D(e, "stretch", "fill-available"), t, n) + e
              : e;
        }
      break;
    case 5152:
    case 5920:
      return D(
        e,
        /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
        function (r, i, o, s, a, l, u) {
          return (
            q +
            i +
            ":" +
            o +
            u +
            (s ? q + i + "-span:" + (a ? l : +l - +o) + u : "") +
            e
          );
        }
      );
    case 4949:
      if (pe(e, t + 6) === 121) return D(e, ":", ":" + $) + e;
      break;
    case 6444:
      switch (pe(e, pe(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return (
            D(
              e,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              "$1" +
                $ +
                (pe(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                $ +
                "$2$3$1" +
                q +
                "$2box$3"
            ) + e
          );
        case 100:
          return D(e, ":", ":" + q) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return D(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function Is(e, t) {
  for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
  return n;
}
function EE(e, t, n, r) {
  switch (e.type) {
    case hE:
      if (e.children.length) break;
    case fE:
    case hd:
      return (e.return = e.return || e.value);
    case Dv:
      return "";
    case Iv:
      return (e.return = e.value + "{" + Is(e.children, r) + "}");
    case pa:
      if (!gt((e.value = e.props.join(",")))) return "";
  }
  return gt((n = Is(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function jE(e) {
  var t = Fv(e);
  return function (n, r, i, o) {
    for (var s = "", a = 0; a < t; a++) s += e[a](n, r, i, o) || "";
    return s;
  };
}
function TE(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function NE(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case hd:
        e.return = $v(e.value, e.length, n);
        return;
      case Iv:
        return Is([Xt(e, { value: D(e.value, "@", "@" + $) })], r);
      case pa:
        if (e.length)
          return mE((n = e.props), function (i) {
            switch (Et(i, (r = /(::plac\w+|:read-\w+)/))) {
              case ":read-only":
              case ":read-write":
                Jn(Xt(e, { props: [D(i, /:(read-\w+)/, ":" + ji + "$1")] })),
                  Jn(Xt(e, { props: [i] })),
                  Au(e, { props: rp(n, r) });
                break;
              case "::placeholder":
                Jn(
                  Xt(e, { props: [D(i, /:(plac\w+)/, ":" + $ + "input-$1")] })
                ),
                  Jn(Xt(e, { props: [D(i, /:(plac\w+)/, ":" + ji + "$1")] })),
                  Jn(Xt(e, { props: [D(i, /:(plac\w+)/, q + "input-$1")] })),
                  Jn(Xt(e, { props: [i] })),
                  Au(e, { props: rp(n, r) });
                break;
            }
            return "";
          });
    }
}
var AE = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  Ve = {},
  Ir =
    (typeof process < "u" &&
      Ve !== void 0 &&
      (Ve.REACT_APP_SC_ATTR || Ve.SC_ATTR)) ||
    "data-styled",
  Wv = "active",
  Uv = "data-styled-version",
  va = "6.1.13",
  md = `/*!sc*/
`,
  Vs = typeof window < "u" && "HTMLElement" in window,
  RE = !!(typeof SC_DISABLE_SPEEDY == "boolean"
    ? SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      Ve !== void 0 &&
      Ve.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
      Ve.REACT_APP_SC_DISABLE_SPEEDY !== ""
    ? Ve.REACT_APP_SC_DISABLE_SPEEDY !== "false" &&
      Ve.REACT_APP_SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      Ve !== void 0 &&
      Ve.SC_DISABLE_SPEEDY !== void 0 &&
      Ve.SC_DISABLE_SPEEDY !== "" &&
      Ve.SC_DISABLE_SPEEDY !== "false" &&
      Ve.SC_DISABLE_SPEEDY),
  xa = Object.freeze([]),
  Vr = Object.freeze({});
function ME(e, t, n) {
  return (
    n === void 0 && (n = Vr), (e.theme !== n.theme && e.theme) || t || n.theme
  );
}
var Gv = new Set([
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "track",
    "u",
    "ul",
    "use",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ]),
  LE = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  OE = /(^-|-$)/g;
function sp(e) {
  return e.replace(LE, "-").replace(OE, "");
}
var _E = /(a)(d)/gi,
  Ro = 52,
  ap = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function Lu(e) {
  var t,
    n = "";
  for (t = Math.abs(e); t > Ro; t = (t / Ro) | 0) n = ap(t % Ro) + n;
  return (ap(t % Ro) + n).replace(_E, "$1-$2");
}
var cl,
  Hv = 5381,
  yr = function (e, t) {
    for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
    return e;
  },
  Kv = function (e) {
    return yr(Hv, e);
  };
function DE(e) {
  return Lu(Kv(e) >>> 0);
}
function IE(e) {
  return e.displayName || e.name || "Component";
}
function dl(e) {
  return typeof e == "string" && !0;
}
var Yv = typeof Symbol == "function" && Symbol.for,
  Qv = Yv ? Symbol.for("react.memo") : 60115,
  VE = Yv ? Symbol.for("react.forward_ref") : 60112,
  zE = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  FE = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  Xv = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  BE =
    (((cl = {})[VE] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
    (cl[Qv] = Xv),
    cl);
function lp(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Qv
    ? Xv
    : "$$typeof" in e
    ? BE[e.$$typeof]
    : zE;
  var t;
}
var $E = Object.defineProperty,
  WE = Object.getOwnPropertyNames,
  up = Object.getOwnPropertySymbols,
  UE = Object.getOwnPropertyDescriptor,
  GE = Object.getPrototypeOf,
  cp = Object.prototype;
function qv(e, t, n) {
  if (typeof t != "string") {
    if (cp) {
      var r = GE(t);
      r && r !== cp && qv(e, r, n);
    }
    var i = WE(t);
    up && (i = i.concat(up(t)));
    for (var o = lp(e), s = lp(t), a = 0; a < i.length; ++a) {
      var l = i[a];
      if (!(l in FE || (n && n[l]) || (s && l in s) || (o && l in o))) {
        var u = UE(t, l);
        try {
          $E(e, l, u);
        } catch {}
      }
    }
  }
  return e;
}
function zr(e) {
  return typeof e == "function";
}
function gd(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function _n(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function dp(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += e[r];
  return n;
}
function Xi(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    e.constructor.name === Object.name &&
    !("props" in e && e.$$typeof)
  );
}
function Ou(e, t, n) {
  if ((n === void 0 && (n = !1), !n && !Xi(e) && !Array.isArray(e))) return t;
  if (Array.isArray(t))
    for (var r = 0; r < t.length; r++) e[r] = Ou(e[r], t[r]);
  else if (Xi(t)) for (var r in t) e[r] = Ou(e[r], t[r]);
  return e;
}
function yd(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
function so(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return new Error(
    "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
      .concat(e, " for more information.")
      .concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")
  );
}
var HE = (function () {
    function e(t) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = t);
    }
    return (
      (e.prototype.indexOfGroup = function (t) {
        for (var n = 0, r = 0; r < t; r++) n += this.groupSizes[r];
        return n;
      }),
      (e.prototype.insertRules = function (t, n) {
        if (t >= this.groupSizes.length) {
          for (var r = this.groupSizes, i = r.length, o = i; t >= o; )
            if ((o <<= 1) < 0) throw so(16, "".concat(t));
          (this.groupSizes = new Uint32Array(o)),
            this.groupSizes.set(r),
            (this.length = o);
          for (var s = i; s < o; s++) this.groupSizes[s] = 0;
        }
        for (
          var a = this.indexOfGroup(t + 1), l = ((s = 0), n.length);
          s < l;
          s++
        )
          this.tag.insertRule(a, n[s]) && (this.groupSizes[t]++, a++);
      }),
      (e.prototype.clearGroup = function (t) {
        if (t < this.length) {
          var n = this.groupSizes[t],
            r = this.indexOfGroup(t),
            i = r + n;
          this.groupSizes[t] = 0;
          for (var o = r; o < i; o++) this.tag.deleteRule(r);
        }
      }),
      (e.prototype.getGroup = function (t) {
        var n = "";
        if (t >= this.length || this.groupSizes[t] === 0) return n;
        for (
          var r = this.groupSizes[t],
            i = this.indexOfGroup(t),
            o = i + r,
            s = i;
          s < o;
          s++
        )
          n += "".concat(this.tag.getRule(s)).concat(md);
        return n;
      }),
      e
    );
  })(),
  Jo = new Map(),
  zs = new Map(),
  es = 1,
  Mo = function (e) {
    if (Jo.has(e)) return Jo.get(e);
    for (; zs.has(es); ) es++;
    var t = es++;
    return Jo.set(e, t), zs.set(t, e), t;
  },
  KE = function (e, t) {
    (es = t + 1), Jo.set(e, t), zs.set(t, e);
  },
  YE = "style[".concat(Ir, "][").concat(Uv, '="').concat(va, '"]'),
  QE = new RegExp(
    "^".concat(Ir, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')
  ),
  XE = function (e, t, n) {
    for (var r, i = n.split(","), o = 0, s = i.length; o < s; o++)
      (r = i[o]) && e.registerName(t, r);
  },
  qE = function (e, t) {
    for (
      var n,
        r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(md),
        i = [],
        o = 0,
        s = r.length;
      o < s;
      o++
    ) {
      var a = r[o].trim();
      if (a) {
        var l = a.match(QE);
        if (l) {
          var u = 0 | parseInt(l[1], 10),
            c = l[2];
          u !== 0 && (KE(c, u), XE(e, c, l[3]), e.getTag().insertRules(u, i)),
            (i.length = 0);
        } else i.push(a);
      }
    }
  },
  fp = function (e) {
    for (
      var t = document.querySelectorAll(YE), n = 0, r = t.length;
      n < r;
      n++
    ) {
      var i = t[n];
      i &&
        i.getAttribute(Ir) !== Wv &&
        (qE(e, i), i.parentNode && i.parentNode.removeChild(i));
    }
  };
function ZE() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Zv = function (e) {
    var t = document.head,
      n = e || t,
      r = document.createElement("style"),
      i = (function (a) {
        var l = Array.from(a.querySelectorAll("style[".concat(Ir, "]")));
        return l[l.length - 1];
      })(n),
      o = i !== void 0 ? i.nextSibling : null;
    r.setAttribute(Ir, Wv), r.setAttribute(Uv, va);
    var s = ZE();
    return s && r.setAttribute("nonce", s), n.insertBefore(r, o), r;
  },
  JE = (function () {
    function e(t) {
      (this.element = Zv(t)),
        this.element.appendChild(document.createTextNode("")),
        (this.sheet = (function (n) {
          if (n.sheet) return n.sheet;
          for (var r = document.styleSheets, i = 0, o = r.length; i < o; i++) {
            var s = r[i];
            if (s.ownerNode === n) return s;
          }
          throw so(17);
        })(this.element)),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        try {
          return this.sheet.insertRule(n, t), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (e.prototype.deleteRule = function (t) {
        this.sheet.deleteRule(t), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        var n = this.sheet.cssRules[t];
        return n && n.cssText ? n.cssText : "";
      }),
      e
    );
  })(),
  ej = (function () {
    function e(t) {
      (this.element = Zv(t)),
        (this.nodes = this.element.childNodes),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        if (t <= this.length && t >= 0) {
          var r = document.createTextNode(n);
          return (
            this.element.insertBefore(r, this.nodes[t] || null),
            this.length++,
            !0
          );
        }
        return !1;
      }),
      (e.prototype.deleteRule = function (t) {
        this.element.removeChild(this.nodes[t]), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.nodes[t].textContent : "";
      }),
      e
    );
  })(),
  tj = (function () {
    function e(t) {
      (this.rules = []), (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        return (
          t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0)
        );
      }),
      (e.prototype.deleteRule = function (t) {
        this.rules.splice(t, 1), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.rules[t] : "";
      }),
      e
    );
  })(),
  hp = Vs,
  nj = { isServer: !Vs, useCSSOMInjection: !RE },
  Jv = (function () {
    function e(t, n, r) {
      t === void 0 && (t = Vr), n === void 0 && (n = {});
      var i = this;
      (this.options = Le(Le({}, nj), t)),
        (this.gs = n),
        (this.names = new Map(r)),
        (this.server = !!t.isServer),
        !this.server && Vs && hp && ((hp = !1), fp(this)),
        yd(this, function () {
          return (function (o) {
            for (
              var s = o.getTag(),
                a = s.length,
                l = "",
                u = function (d) {
                  var h = (function (m) {
                    return zs.get(m);
                  })(d);
                  if (h === void 0) return "continue";
                  var y = o.names.get(h),
                    v = s.getGroup(d);
                  if (y === void 0 || !y.size || v.length === 0)
                    return "continue";
                  var x = ""
                      .concat(Ir, ".g")
                      .concat(d, '[id="')
                      .concat(h, '"]'),
                    S = "";
                  y !== void 0 &&
                    y.forEach(function (m) {
                      m.length > 0 && (S += "".concat(m, ","));
                    }),
                    (l += ""
                      .concat(v)
                      .concat(x, '{content:"')
                      .concat(S, '"}')
                      .concat(md));
                },
                c = 0;
              c < a;
              c++
            )
              u(c);
            return l;
          })(i);
        });
    }
    return (
      (e.registerId = function (t) {
        return Mo(t);
      }),
      (e.prototype.rehydrate = function () {
        !this.server && Vs && fp(this);
      }),
      (e.prototype.reconstructWithOptions = function (t, n) {
        return (
          n === void 0 && (n = !0),
          new e(
            Le(Le({}, this.options), t),
            this.gs,
            (n && this.names) || void 0
          )
        );
      }),
      (e.prototype.allocateGSInstance = function (t) {
        return (this.gs[t] = (this.gs[t] || 0) + 1);
      }),
      (e.prototype.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((t = (function (n) {
              var r = n.useCSSOMInjection,
                i = n.target;
              return n.isServer ? new tj(i) : r ? new JE(i) : new ej(i);
            })(this.options)),
            new HE(t)))
        );
        var t;
      }),
      (e.prototype.hasNameForId = function (t, n) {
        return this.names.has(t) && this.names.get(t).has(n);
      }),
      (e.prototype.registerName = function (t, n) {
        if ((Mo(t), this.names.has(t))) this.names.get(t).add(n);
        else {
          var r = new Set();
          r.add(n), this.names.set(t, r);
        }
      }),
      (e.prototype.insertRules = function (t, n, r) {
        this.registerName(t, n), this.getTag().insertRules(Mo(t), r);
      }),
      (e.prototype.clearNames = function (t) {
        this.names.has(t) && this.names.get(t).clear();
      }),
      (e.prototype.clearRules = function (t) {
        this.getTag().clearGroup(Mo(t)), this.clearNames(t);
      }),
      (e.prototype.clearTag = function () {
        this.tag = void 0;
      }),
      e
    );
  })(),
  rj = /&/g,
  ij = /^\s*\/\/.*$/gm;
function e0(e, t) {
  return e.map(function (n) {
    return (
      n.type === "rule" &&
        ((n.value = "".concat(t, " ").concat(n.value)),
        (n.value = n.value.replaceAll(",", ",".concat(t, " "))),
        (n.props = n.props.map(function (r) {
          return "".concat(t, " ").concat(r);
        }))),
      Array.isArray(n.children) &&
        n.type !== "@keyframes" &&
        (n.children = e0(n.children, t)),
      n
    );
  });
}
function oj(e) {
  var t,
    n,
    r,
    i = Vr,
    o = i.options,
    s = o === void 0 ? Vr : o,
    a = i.plugins,
    l = a === void 0 ? xa : a,
    u = function (h, y, v) {
      return v.startsWith(n) && v.endsWith(n) && v.replaceAll(n, "").length > 0
        ? ".".concat(t)
        : h;
    },
    c = l.slice();
  c.push(function (h) {
    h.type === pa &&
      h.value.includes("&") &&
      (h.props[0] = h.props[0].replace(rj, n).replace(r, u));
  }),
    s.prefix && c.push(NE),
    c.push(EE);
  var d = function (h, y, v, x) {
    y === void 0 && (y = ""),
      v === void 0 && (v = ""),
      x === void 0 && (x = "&"),
      (t = x),
      (n = y),
      (r = new RegExp("\\".concat(n, "\\b"), "g"));
    var S = h.replace(ij, ""),
      m = bE(v || y ? "".concat(v, " ").concat(y, " { ").concat(S, " }") : S);
    s.namespace && (m = e0(m, s.namespace));
    var p = [];
    return (
      Is(
        m,
        jE(
          c.concat(
            TE(function (g) {
              return p.push(g);
            })
          )
        )
      ),
      p
    );
  };
  return (
    (d.hash = l.length
      ? l
          .reduce(function (h, y) {
            return y.name || so(15), yr(h, y.name);
          }, Hv)
          .toString()
      : ""),
    d
  );
}
var sj = new Jv(),
  _u = oj(),
  t0 = Pe.createContext({
    shouldForwardProp: void 0,
    styleSheet: sj,
    stylis: _u,
  });
t0.Consumer;
Pe.createContext(void 0);
function pp() {
  return k.useContext(t0);
}
var aj = (function () {
    function e(t, n) {
      var r = this;
      (this.inject = function (i, o) {
        o === void 0 && (o = _u);
        var s = r.name + o.hash;
        i.hasNameForId(r.id, s) ||
          i.insertRules(r.id, s, o(r.rules, s, "@keyframes"));
      }),
        (this.name = t),
        (this.id = "sc-keyframes-".concat(t)),
        (this.rules = n),
        yd(this, function () {
          throw so(12, String(r.name));
        });
    }
    return (
      (e.prototype.getName = function (t) {
        return t === void 0 && (t = _u), this.name + t.hash;
      }),
      e
    );
  })(),
  lj = function (e) {
    return e >= "A" && e <= "Z";
  };
function mp(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    lj(r) ? (t += "-" + r.toLowerCase()) : (t += r);
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var n0 = function (e) {
    return e == null || e === !1 || e === "";
  },
  r0 = function (e) {
    var t,
      n,
      r = [];
    for (var i in e) {
      var o = e[i];
      e.hasOwnProperty(i) &&
        !n0(o) &&
        ((Array.isArray(o) && o.isCss) || zr(o)
          ? r.push("".concat(mp(i), ":"), o, ";")
          : Xi(o)
          ? r.push.apply(r, Ds(Ds(["".concat(i, " {")], r0(o), !1), ["}"], !1))
          : r.push(
              ""
                .concat(mp(i), ": ")
                .concat(
                  ((t = i),
                  (n = o) == null || typeof n == "boolean" || n === ""
                    ? ""
                    : typeof n != "number" ||
                      n === 0 ||
                      t in AE ||
                      t.startsWith("--")
                    ? String(n).trim()
                    : "".concat(n, "px")),
                  ";"
                )
            ));
    }
    return r;
  };
function Fn(e, t, n, r) {
  if (n0(e)) return [];
  if (gd(e)) return [".".concat(e.styledComponentId)];
  if (zr(e)) {
    if (!zr((o = e)) || (o.prototype && o.prototype.isReactComponent) || !t)
      return [e];
    var i = e(t);
    return Fn(i, t, n, r);
  }
  var o;
  return e instanceof aj
    ? n
      ? (e.inject(n, r), [e.getName(r)])
      : [e]
    : Xi(e)
    ? r0(e)
    : Array.isArray(e)
    ? Array.prototype.concat.apply(
        xa,
        e.map(function (s) {
          return Fn(s, t, n, r);
        })
      )
    : [e.toString()];
}
function uj(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (zr(n) && !gd(n)) return !1;
  }
  return !0;
}
var cj = Kv(va),
  dj = (function () {
    function e(t, n, r) {
      (this.rules = t),
        (this.staticRulesId = ""),
        (this.isStatic = (r === void 0 || r.isStatic) && uj(t)),
        (this.componentId = n),
        (this.baseHash = yr(cj, n)),
        (this.baseStyle = r),
        Jv.registerId(n);
    }
    return (
      (e.prototype.generateAndInjectStyles = function (t, n, r) {
        var i = this.baseStyle
          ? this.baseStyle.generateAndInjectStyles(t, n, r)
          : "";
        if (this.isStatic && !r.hash)
          if (
            this.staticRulesId &&
            n.hasNameForId(this.componentId, this.staticRulesId)
          )
            i = _n(i, this.staticRulesId);
          else {
            var o = dp(Fn(this.rules, t, n, r)),
              s = Lu(yr(this.baseHash, o) >>> 0);
            if (!n.hasNameForId(this.componentId, s)) {
              var a = r(o, ".".concat(s), void 0, this.componentId);
              n.insertRules(this.componentId, s, a);
            }
            (i = _n(i, s)), (this.staticRulesId = s);
          }
        else {
          for (
            var l = yr(this.baseHash, r.hash), u = "", c = 0;
            c < this.rules.length;
            c++
          ) {
            var d = this.rules[c];
            if (typeof d == "string") u += d;
            else if (d) {
              var h = dp(Fn(d, t, n, r));
              (l = yr(l, h + c)), (u += h);
            }
          }
          if (u) {
            var y = Lu(l >>> 0);
            n.hasNameForId(this.componentId, y) ||
              n.insertRules(
                this.componentId,
                y,
                r(u, ".".concat(y), void 0, this.componentId)
              ),
              (i = _n(i, y));
          }
        }
        return i;
      }),
      e
    );
  })(),
  i0 = Pe.createContext(void 0);
i0.Consumer;
var fl = {};
function fj(e, t, n) {
  var r = gd(e),
    i = e,
    o = !dl(e),
    s = t.attrs,
    a = s === void 0 ? xa : s,
    l = t.componentId,
    u =
      l === void 0
        ? (function (w, C) {
            var b = typeof w != "string" ? "sc" : sp(w);
            fl[b] = (fl[b] || 0) + 1;
            var P = "".concat(b, "-").concat(DE(va + b + fl[b]));
            return C ? "".concat(C, "-").concat(P) : P;
          })(t.displayName, t.parentComponentId)
        : l,
    c = t.displayName,
    d =
      c === void 0
        ? (function (w) {
            return dl(w) ? "styled.".concat(w) : "Styled(".concat(IE(w), ")");
          })(e)
        : c,
    h =
      t.displayName && t.componentId
        ? "".concat(sp(t.displayName), "-").concat(t.componentId)
        : t.componentId || u,
    y = r && i.attrs ? i.attrs.concat(a).filter(Boolean) : a,
    v = t.shouldForwardProp;
  if (r && i.shouldForwardProp) {
    var x = i.shouldForwardProp;
    if (t.shouldForwardProp) {
      var S = t.shouldForwardProp;
      v = function (w, C) {
        return x(w, C) && S(w, C);
      };
    } else v = x;
  }
  var m = new dj(n, h, r ? i.componentStyle : void 0);
  function p(w, C) {
    return (function (b, P, E) {
      var O = b.attrs,
        R = b.componentStyle,
        H = b.defaultProps,
        z = b.foldedComponentIds,
        He = b.styledComponentId,
        Ke = b.target,
        Cn = Pe.useContext(i0),
        rt = pp(),
        K = b.shouldForwardProp || rt.shouldForwardProp,
        T = ME(P, Cn, H) || Vr,
        A = (function (Wt, Ie, Ct) {
          for (
            var Kr,
              Pn = Le(Le({}, Ie), { className: void 0, theme: Ct }),
              wa = 0;
            wa < Wt.length;
            wa += 1
          ) {
            var lo = zr((Kr = Wt[wa])) ? Kr(Pn) : Kr;
            for (var Ut in lo)
              Pn[Ut] =
                Ut === "className"
                  ? _n(Pn[Ut], lo[Ut])
                  : Ut === "style"
                  ? Le(Le({}, Pn[Ut]), lo[Ut])
                  : lo[Ut];
          }
          return (
            Ie.className && (Pn.className = _n(Pn.className, Ie.className)), Pn
          );
        })(O, P, T),
        M = A.as || Ke,
        I = {};
      for (var G in A)
        A[G] === void 0 ||
          G[0] === "$" ||
          G === "as" ||
          (G === "theme" && A.theme === T) ||
          (G === "forwardedAs"
            ? (I.as = A.forwardedAs)
            : (K && !K(G, M)) || (I[G] = A[G]));
      var bn = (function (Wt, Ie) {
          var Ct = pp(),
            Kr = Wt.generateAndInjectStyles(Ie, Ct.styleSheet, Ct.stylis);
          return Kr;
        })(R, A),
        it = _n(z, He);
      return (
        bn && (it += " " + bn),
        A.className && (it += " " + A.className),
        (I[dl(M) && !Gv.has(M) ? "class" : "className"] = it),
        (I.ref = E),
        k.createElement(M, I)
      );
    })(g, w, C);
  }
  p.displayName = d;
  var g = Pe.forwardRef(p);
  return (
    (g.attrs = y),
    (g.componentStyle = m),
    (g.displayName = d),
    (g.shouldForwardProp = v),
    (g.foldedComponentIds = r
      ? _n(i.foldedComponentIds, i.styledComponentId)
      : ""),
    (g.styledComponentId = h),
    (g.target = r ? i.target : e),
    Object.defineProperty(g, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (w) {
        this._foldedDefaultProps = r
          ? (function (C) {
              for (var b = [], P = 1; P < arguments.length; P++)
                b[P - 1] = arguments[P];
              for (var E = 0, O = b; E < O.length; E++) Ou(C, O[E], !0);
              return C;
            })({}, i.defaultProps, w)
          : w;
      },
    }),
    yd(g, function () {
      return ".".concat(g.styledComponentId);
    }),
    o &&
      qv(g, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
      }),
    g
  );
}
function gp(e, t) {
  for (var n = [e[0]], r = 0, i = t.length; r < i; r += 1)
    n.push(t[r], e[r + 1]);
  return n;
}
var yp = function (e) {
  return Object.assign(e, { isCss: !0 });
};
function hj(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (zr(e) || Xi(e)) return yp(Fn(gp(xa, Ds([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string"
    ? Fn(r)
    : yp(Fn(gp(r, t)));
}
function Du(e, t, n) {
  if ((n === void 0 && (n = Vr), !t)) throw so(1, t);
  var r = function (i) {
    for (var o = [], s = 1; s < arguments.length; s++) o[s - 1] = arguments[s];
    return e(t, n, hj.apply(void 0, Ds([i], o, !1)));
  };
  return (
    (r.attrs = function (i) {
      return Du(
        e,
        t,
        Le(Le({}, n), {
          attrs: Array.prototype.concat(n.attrs, i).filter(Boolean),
        })
      );
    }),
    (r.withConfig = function (i) {
      return Du(e, t, Le(Le({}, n), i));
    }),
    r
  );
}
var o0 = function (e) {
    return Du(fj, e);
  },
  s0 = o0;
Gv.forEach(function (e) {
  s0[e] = o0(e);
});
const pj = [
    {
      id: 1,
      name: "Ace Caterers ",
      img: cE,
      description:
        "Ace Caterers is the Industrial Catering brand that operates industrial canteens. Under this brand consulting on setting-up of kitchens is also provided.",
      delay: 0.8,
    },
    {
      id: 2,
      name: "Drool Ah ",
      img: uE,
      description:
        "Drool Ah is the café brand based on QSR model. Menu of café is set in a manner to cut across the age barrier. Fusion food is the USP of this brand.",
      delay: 0.6,
    },
    {
      id: 3,
      name: "Magnet Foods ",
      img: dE,
      description:
        "Magnet Foods is the brand under which events are taken up – corporate, weddings, get-togethers oesaurhdrfughsdusdofusdouf etc. ",
      delay: 1,
    },
    {
      id: 4,
      name: "Chimes Café ",
      img: lE,
      description:
        "Chimes Café is the brand under which we run restaurants in army cantonments. Keeping up with the traditions of fine dining in Army",
      delay: 0.4,
    },
  ],
  a0 = () =>
    f.jsxs(W.section, {
      initial: { x: "-100%", opacity: 0 },
      animate: { x: 0, opacity: 1 },
      transition: { ease: "linear", duration: 1, x: { duration: 0.8 } },
      exit: { opacity: 0 },
      className: "mt-0 px-20 py-10  bg-[#f5f5f5]   ",
      children: [
        f.jsx(W.h3, {
          variants: ha(0),
          initial: "hidden",
          whileInView: "show",
          className: "text-3xl font-bold  uppercaseb  py-4 text-center",
          children: "Our Brands",
        }),
        f.jsx("div", {
          className:
            "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5 md:gap-0 mx-auto justify-items-center p-2",
          children: pj.map((e) =>
            f.jsx(
              W.div,
              {
                variants: {
                  hidden: { x: "-100%", opacity: 0 },
                  show: {
                    x: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.6,
                      delay: parseFloat(e.delay),
                      ease: "easeOut",
                    },
                  },
                },
                initial: "hidden",
                whileInView: "show",
                className: "group rounded-xl text-center p-2",
                children: f.jsxs("div", {
                  className:
                    "md:flex justify-between max-w-[500px] w-[500px] md:h-[200px] rounded-xl",
                  children: [
                    f.jsx("div", {
                      className: "w-1/2 m-auto h-full",
                      children: f.jsx("img", {
                        src: e.img,
                        alt: e.name,
                        loading: "lazy",
                        className:
                          "h-full group-hover:scale-105 transition-all duration-500",
                      }),
                    }),
                    f.jsx("div", {
                      className:
                        "w-1/2 h-full flex flex-col justify-between m-auto ml-5 mt-5 md:text-left",
                      children: f.jsxs("div", {
                        children: [
                          f.jsx("h3", {
                            className: "text-xl font-semibold",
                            children: e.name,
                          }),
                          f.jsx("p", {
                            className: "mt-4 text-sm",
                            children: e.description,
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              },
              e.id
            )
          ),
        }),
      ],
    }),
  mj = "assets/iq-CZNHH1Ph.webp";
function l0() {
  const [e, t] = k.useState({
      NAME: "",
      EMAIL: "",
      MOBILE: "",
      MESSAGE: "",
      OPTION: "OPTION 1",
    }),
    [n, r] = k.useState(!1),
    [i, o] = k.useState(""),
    s = (l) => {
      const { name: u, value: c } = l.target;
      t({ ...e, [u]: c });
    },
    a = (l) => {
      l.preventDefault(), r(!0);
      const u =
          "https://script.google.com/macros/s/AKfycbxl56fFBAxQRiWpCAdapRKQw_kiY2O3xexbK4NPl-Yp9pOnzyi5zEZmLN7tvu_WeVyWvA/exec",
        c = new FormData();
      c.append("NAME", e.NAME),
        c.append("MOBILE", e.MOBILE),
        c.append("EMAIL", e.EMAIL),
        c.append("MESSAGE", e.MESSAGE),
        c.append("OPTION", e.OPTION),
        c.append("access_key", "f5469db6-6aae-4631-99e2-1f04d9e7ec65"),
        fetch(u, { method: "POST", body: c })
          .then((d) => {
            o("Thanks for contacting us! We will contact you soon."),
              r(!1),
              t({
                NAME: "",
                EMAIL: "",
                MOBILE: "",
                MESSAGE: "",
                OPTION: "OPTION 1",
              });
          })
          .catch((d) => {
            o("Error submitting the form. Please try again."), r(!1);
          });
    };
  return f.jsxs("div", {
    className: "flex flex-col md:flex-row mt-4  p-6 rounded-lg ",
    children: [
      f.jsx("div", {
        className: "w-full md:w-1/2 mb-4 md:mb-0",
        children: f.jsx("img", {
          src: mj,
          alt: "Description",
          className: "w-full h-full scale-75 rounded-lg ",
        }),
      }),
      f.jsxs("form", {
        onSubmit: a,
        className: "bg-white shadow-md text-gray-700 rounded-3xl mx-auto p-6",
        name: "google-sheet",
        children: [
          f.jsx("h1", {
            className: "uppercase font-semibold text-center text-2xl mb-4 ",
            children: "Inquiry Form",
          }),
          f.jsxs("div", {
            className: "mb-4 md:flex justify-between",
            children: [
              f.jsxs("div", {
                className: "md:w-1/2 md:pr-2",
                children: [
                  f.jsx("label", { className: "font-bold", children: "NAME:" }),
                  f.jsx("input", {
                    type: "text",
                    name: "NAME",
                    value: e.NAME,
                    onChange: s,
                    className:
                      "w-full border-2  rounded-xl p-2 transition duration-200 focus:outline-none focus:border-teal-600",
                    required: !0,
                  }),
                ],
              }),
              f.jsxs("div", {
                className: "md:w-1/2 md:pl-2",
                children: [
                  f.jsx("label", {
                    className: "font-bold",
                    children: "EMAIL:",
                  }),
                  f.jsx("input", {
                    type: "email",
                    name: "EMAIL",
                    value: e.EMAIL,
                    onChange: s,
                    className:
                      "w-full border-2 border-gray-300 rounded-xl p-2 transition duration-200 focus:outline-none focus:border-gray-400",
                    required: !0,
                  }),
                ],
              }),
            ],
          }),
          f.jsxs("div", {
            className: "mb-4 md:flex justify-between",
            children: [
              f.jsxs("div", {
                className: "md:w-1/2 md:pr-2",
                children: [
                  f.jsx("label", {
                    className: "font-bold",
                    children: "MOBILE:",
                  }),
                  f.jsx("input", {
                    type: "tel",
                    name: "MOBILE",
                    value: e.MOBILE,
                    onChange: s,
                    className:
                      "w-full border-2 border-gray-300 rounded-xl p-2 transition duration-200 focus:outline-none focus:border-gray-400",
                  }),
                ],
              }),
              f.jsxs("div", {
                className: "md:w-1/2 md:pl-2",
                children: [
                  f.jsx("label", {
                    className: "font-bold",
                    children: "OPTION:",
                  }),
                  f.jsxs("select", {
                    name: "OPTION",
                    value: e.OPTION,
                    onChange: s,
                    className:
                      "w-full border-2 border-gray-300 rounded-xl p-2 transition duration-200 focus:outline-none focus:border-gray-400",
                    children: [
                      f.jsx("option", {
                        value: "Option 1",
                        children: "Option 1",
                      }),
                      f.jsx("option", {
                        value: "Option 2",
                        children: "Option 2",
                      }),
                      f.jsx("option", {
                        value: "Option 3",
                        children: "Option 3",
                      }),
                      f.jsx("option", {
                        value: "Option 4",
                        children: "Option 4",
                      }),
                      f.jsx("option", {
                        value: "Option 5",
                        children: "Option 5",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          f.jsxs("div", {
            className: "mb-4",
            children: [
              f.jsx("label", { className: "font-bold", children: "MESSAGE:" }),
              f.jsx("textarea", {
                name: "MESSAGE",
                value: e.MESSAGE,
                onChange: s,
                className:
                  "w-full border-2 border-gray-300 rounded-xl p-3 transition duration-200 focus:outline-none focus:border-gray-400",
                required: !0,
              }),
            ],
          }),
          f.jsx("button", {
            type: "submit",
            className: `w-full bg-[#0B919C] text-white p-3 rounded-lg transition duration-300 hover:bg-green-700 ${
              n ? "is-loading" : ""
            }`,
            disabled: n,
            children: n ? "Submitting..." : "Submit Inquiry",
          }),
          i &&
            f.jsx("div", {
              style: {
                margin: "20px 0",
                fontWeight: "bold",
                color: n ? "green" : "red",
                padding: "8px",
                backgroundColor: "beige",
                borderRadius: "4px",
                borderColor: "aquamarine",
              },
              children: i,
            }),
        ],
      }),
    ],
  });
}
const gj = "assets/G3-C4U1iz0n.webp",
  yj = ({ children: e }) => {
    const t = k.useRef(null),
      n = bv(t, { once: !0 });
    return f.jsx(W.div, {
      ref: t,
      initial: { opacity: 0, y: 50 },
      animate: n ? { opacity: 1, y: 0 } : {},
      transition: { duration: 0.8 },
      children: e,
    });
  },
  vj = [
    { id: 1, img: Mc, title: "Mahogany Farms" },
    { id: 2, img: gj, title: "Green Pastures" },
  ],
  xj = () =>
    f.jsx(yj, {
      children: f.jsxs(wj, {
        className: "w-full flex flex-col  text-black relative pb-24  ",
        children: [
          f.jsx("h2", {
            className:
              "text-2xl    font-semibold uppercase py-8 text-center tracking-[5px]",
            children: "Explore",
          }),
          f.jsx("div", {
            className: "md:flex  flex-row justify-center items-center gap-10",
            children: vj.map((e) =>
              f.jsxs(
                "div",
                {
                  className: "card ",
                  children: [
                    f.jsx("div", { className: "border" }),
                    f.jsxs("div", {
                      className: "content",
                      children: [
                        f.jsx("div", {
                          className: "logo",
                          children: f.jsx("img", {
                            src: e.img,
                            alt: e.title,
                            loading: "lazy",
                            className: "logo-img",
                          }),
                        }),
                        f.jsx("span", {
                          className: "logo-bottom-text",
                          children: e.title,
                        }),
                      ],
                    }),
                    f.jsx("span", {
                      className: "bottom-text",
                      children: "Book now",
                    }),
                  ],
                },
                e.id
              )
            ),
          }),
        ],
      }),
    }),
  wj = s0.div`
  .card {
    width: 450px;
    height: 300px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    transition: all 0.5s ease-in-out;
  }

  .blend {
    mix-blend-mode: darken; /* Change this to your desired blend mode */
  }

  .logo-img {
    width: 100%;
    height: 100%;
    object-fit: contian;
    top: 0;
    left: 0;
    border-radius: 10px;
    transition: transform 0.5s ease-in-out;
    z-index: 1;
  }

  .border {
    position: absolute;
    inset: 0;
    border: 2px solid white;
    opacity: 0;
    transform: rotate(10deg);
    transition: all 0.5s ease-in-out;
    z-index: 2;
  }

  .logo-bottom-text {
    position: absolute;
    bottom: 25px;
    color: white;
    font-size: 20px;
    opacity: 0;
    margin-left: 8vw;
    transition: all 0.5s ease-in-out;
    z-index: 3; /* Place above image and border */
  }

  .bottom-text {
    position: absolute;
    left: 50%;
    bottom: 10px;
    transform: translateX(-50%);
    font-size: 10px;
    text-transform: uppercase;
    padding: 0px 5px 0px 8px;
    color: black;
    background: white;
    opacity: 0;

    transition: all 0.5s ease-in-out;
    z-index: 3;
  }

  .card:hover {
    transform: scale(1.05);
  }

  .card:hover .logo-img {
    transform: scale(1);
  }

  .card:hover .border {
    inset: 15px;
    opacity: 1;
    transform: rotate(0);
  }

  .card:hover .bottom-text {
    opacity: 1;
    letter-spacing: 7px;
  }
  .card:hover .logo-bottom-text {
    opacity: 1;
    letter-spacing: 9.5px;
  }

  .custom-shape {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
  }

  .custom-shape svg {
    position: relative;
    display: block;
    width: calc(130% + 100.3px);
    height: 100px;
    transform: rotateY(180deg);
    margin-bottom: -0px; /* Adjusted to reduce the gap below */
  }

  .custom-shape .shape-fill {
    fill: #ffffff;
  }

  /** For tablet devices **/
  @media (min-width: 320px) and (max-width: 1023px) {
    .custom-shape svg {
      width: calc(135% + 1.3px);
      height: 100px;
    }
    .card {
      width: 300px;
      height: 200px;
      margin: auto;
      gap: 20px;
      margin-bottom: 20px;
    }
    .logo-bottom-text {
      font-size: 20px;
    }
    .logo-img {
      width: 300px;
    }
  }
`,
  Sj = () => {
    const [e, t] = k.useState("100%"),
      n = "OUR SERVICES".split(" "),
      { ref: r, inView: i } = oE({ threshold: 0.5, triggerOnce: !1 });
    return (
      k.useEffect(() => {
        const o = () => {
          const s = window.scrollY;
          let a = 100;
          s >= 0 && s <= 300 ? (a = 100 - (s / 300) * 30) : s > 300 && (a = 70),
            t(a + "%");
        };
        return (
          window.addEventListener("scroll", o),
          () => window.removeEventListener("scroll", o)
        );
      }, [window.innerWidth]),
      f.jsxs("div", {
        style: { height: "100vh" },
        children: [
          f.jsx("video", {
            src: "magnet-food.webm",
            autoPlay: !0,
            loop: !0,
            controls: !0,
            style: {
              width: e,
              borderRadius: i ? "20px" : "0px",
              transition: "width 0.3s ease",
              display: "block",
              margin: "0 auto",
            },
          }),
          f.jsx("div", {
            className: "text-center pt-10",
            ref: r,
            children: n.map((o, s) =>
              f.jsxs(
                W.span,
                {
                  initial: { opacity: 0 },
                  animate: i ? { opacity: 1 } : { opacity: 0 },
                  transition: { duration: 1, delay: s * 0.5 },
                  className: "text-2xl font-bold",
                  children: [o, " "],
                },
                s
              )
            ),
          }),
        ],
      })
    );
  },
  kj = {
    initial: { opacity: 0, y: 100, scale: 1.1 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      y: -50,
      scale: 0.8,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  },
  ii = Pe.memo(({ children: e }) => {
    const t = k.useRef(null),
      n = bv(t, { triggerOnce: !0, margin: "20px" });
    return f.jsx(W.div, {
      ref: t,
      initial: "initial",
      animate: n ? "animate" : "initial",
      variants: kj,
      layoutId: "scroll-animation",
      children: e,
    });
  }),
  vp = () =>
    f.jsxs(W.div, {
      initial: { x: "-100%", opacity: 0 },
      animate: { x: 0, opacity: 1 },
      transition: { ease: "linear", duration: 1, x: { duration: 0.8 } },
      exit: { opacity: 0 },
      className: "overflow-hidden",
      children: [
        f.jsx(Sj, {}),
        f.jsx(ii, { children: f.jsx(aE, {}) }),
        f.jsx(ii, { children: f.jsx(a0, {}) }),
        f.jsx(ii, { children: f.jsx(xj, {}) }),
        f.jsx(ii, { children: f.jsx(QP, {}) }),
        f.jsx(ii, { children: f.jsx(l0, {}) }),
      ],
    }),
  u0 = "assets/logo-DbJ1rm8P.webp";
var c0 = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  xp = Pe.createContext && Pe.createContext(c0),
  Cj = ["attr", "size", "title"];
function bj(e, t) {
  if (e == null) return {};
  var n = Pj(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      (r = o[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function Pj(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function Fs() {
  return (
    (Fs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Fs.apply(this, arguments)
  );
}
function wp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Bs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? wp(Object(n), !0).forEach(function (r) {
          Ej(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : wp(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Ej(e, t, n) {
  return (
    (t = jj(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function jj(e) {
  var t = Tj(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Tj(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function d0(e) {
  return (
    e &&
    e.map((t, n) =>
      Pe.createElement(t.tag, Bs({ key: n }, t.attr), d0(t.child))
    )
  );
}
function ao(e) {
  return (t) =>
    Pe.createElement(Nj, Fs({ attr: Bs({}, e.attr) }, t), d0(e.child));
}
function Nj(e) {
  var t = (n) => {
    var { attr: r, size: i, title: o } = e,
      s = bj(e, Cj),
      a = i || n.size || "1em",
      l;
    return (
      n.className && (l = n.className),
      e.className && (l = (l ? l + " " : "") + e.className),
      Pe.createElement(
        "svg",
        Fs(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          s,
          {
            className: l,
            style: Bs(Bs({ color: e.color || n.color }, n.style), e.style),
            height: a,
            width: a,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        o && Pe.createElement("title", null, o),
        e.children
      )
    );
  };
  return xp !== void 0
    ? Pe.createElement(xp.Consumer, null, (n) => t(n))
    : t(c0);
}
function Aj(e) {
  return ao({
    tag: "svg",
    attr: { version: "1.2", baseProfile: "tiny", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M19 17h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zM19 10h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zM19 3h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2z",
        },
        child: [],
      },
    ],
  })(e);
}
const Rj = "assets/Service_1-D3ti2waq.webp",
  Mj = "assets/Service_2-DuFnPu15.webp",
  Lj = "assets/Service_3-Bjc8ZfEd.webp",
  Oj = "assets/Service_4-Bc0i2rVJ.webp",
  _j = () => {
    const e = Ur();
    return (
      k.useEffect(() => {
        document.getElementById("animationelement").classList.add("wiggle");
      }, []),
      k.useEffect(() => {
        if (e.hash) {
          const t = e.hash.replace("#", ""),
            n = document.getElementById(t);
          n && n.scrollIntoView({ behavior: "smooth" });
        }
      }, [e]),
      f.jsxs(W.section, {
        initial: { x: "-100%", opacity: 0 },
        animate: { x: 0, opacity: 1 },
        transition: { ease: "linear", duration: 1, x: { duration: 0.8 } },
        exit: { opacity: 0 },
        children: [
          f.jsx("div", { id: "animationelement" }),
          f.jsxs("div", {
            children: [
              f.jsx(W.h3, {
                variants: ha(0),
                initial: "hidden",
                whileInView: "show",
                className:
                  "text-3xl font-serif font-bold  uppercase text-center rounded-tl-3xl rounded-br-3xl bg-[#0B919C] py-8",
                children: "Explore",
              }),
              f.jsx("div", {
                className: "text-center  p-5 ",
                children: f.jsxs("div", {
                  className: "relative",
                  children: [
                    f.jsx("img", {
                      src: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80",
                      alt: "Mahogany Farms",
                      loading: "lazy",
                      className: "w-full h-[50vh] object-cover",
                    }),
                    f.jsxs("div", {
                      className:
                        "absolute  w-[55%] md:top-1/2 left-[70%] transform -translate-x-1/2 -translate-y-1/4 bg-black text-white p-5 text-center",
                      children: [
                        f.jsx("h2", {
                          className:
                            " text-xl text-white md:text-2xl font-bold",
                          children: "Mahogany Farms",
                        }),
                        f.jsx("p", {
                          className: "my-2 ",
                          children:
                            "Welcome to our farmstay, where you can relax, rejuvenate, and simply have fun. Immerse yourself in the beauty of nature, enjoy fresh air, and experience the joys of farm life. Whether you're looking to unwind or engage in exciting activities, our farmstay offers the perfect escape for everyone. Come and create unforgettable memories with us!",
                        }),
                        f.jsx("button", {
                          className:
                            "bg-yellow-400 px-4 py-2 mt-2 text-black font-medium",
                          children: "Book Now!",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              f.jsxs("div", {
                className: "flex flex-wrap gap-2 p-5",
                children: [
                  f.jsx("img", {
                    src: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80",
                    alt: "Interior 1",
                    loading: "lazy",
                    className: "w-full h-[40vh] object-cover",
                  }),
                  f.jsxs("div", {
                    className: "flex flex-col gap-1 w-full",
                    children: [
                      f.jsxs("div", {
                        className: "flex gap-2  h-[40vh]",
                        children: [
                          f.jsx("img", {
                            src: "https://i.pinimg.com/564x/00/be/ec/00beecc179d66bc585f496108907b26e.jpg",
                            alt: "Interior 2",
                            loading: "lazy",
                            className: "w-[65%] rounded object-cover",
                          }),
                          f.jsx("img", {
                            src: "https://i.pinimg.com/1200x/38/f3/9f/38f39f7c16d097417ece90e05654f4c9.jpg",
                            alt: "Interior 3",
                            loading: "lazy",
                            className: "w-[35%] rounded object-cover",
                          }),
                        ],
                      }),
                      f.jsxs("div", {
                        className: "flex gap-2 w-full h-[40vh]",
                        children: [
                          f.jsx("img", {
                            src: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80",
                            alt: "Exterior 1",
                            loading: "lazy",
                            className: "w-[35%] rounded object-cover",
                          }),
                          f.jsx("img", {
                            src: "https://imgs.search.brave.com/YpA7994DFO_s-QyPXJXZuDZ8SxhBya30gOiqocT2EDM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuYWRzdHRjLmNv/bS9tZWRpYS9pbWFn/ZXMvNWQzMC9lOTdh/LzI4NGQvZDEyNy85/MzAwLzAxNTQvbmV3/c2xldHRlci9hLTkz/LmpwZz8xNTYzNDg2/NTMw",
                            alt: "Exterior 2",
                            loading: "lazy",
                            className: "w-[65%] rounded object-cover",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              f.jsx("div", {
                className: "text-center p-5",
                children: f.jsxs("div", {
                  className: "relative",
                  children: [
                    f.jsx("img", {
                      src: "https://images.pexels.com/photos/19003913/pexels-photo-19003913/free-photo-of-golfer-preparing-to-hit-ball.jpeg?auto=compress&cs=tinysrgb&w=600",
                      alt: "Green Pasture",
                      loading: "lazy",
                      className: "w-full h-[50vh] object-cover",
                    }),
                    f.jsxs("div", {
                      className:
                        "absolute w-[55%] top-1/2 left-[70%] transform -translate-x-1/2 -translate-y-1/4 bg-black text-white p-5 text-center",
                      children: [
                        f.jsx("h2", {
                          className: "text-2xl text-white font-bold",
                          children: "Green Pasture",
                        }),
                        f.jsx("p", {
                          className: "my-2",
                          children:
                            "Welcome to our farmstay, where you can relax, rejuvenate, and simply have fun. Immerse yourself in the beauty of nature, enjoy fresh air, and experience the joys of farm life. Whether you're looking to unwind or engage in exciting activities, our farmstay offers the perfect escape for everyone. Come and create unforgettable memories with us!",
                        }),
                        f.jsx("button", {
                          className:
                            "bg-yellow-400 px-4 py-2 mt-2 text-black font-medium",
                          children: "Book Now!",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              f.jsxs("div", {
                className: "flex flex-wrap gap-2 p-8",
                children: [
                  f.jsx("img", {
                    src: "https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=600",
                    alt: "Interior 1",
                    loading: "lazy",
                    className: "w-full h-[40vh] object-cover",
                  }),
                  f.jsxs("div", {
                    className: "flex flex-col gap-2 w-full",
                    children: [
                      f.jsxs("div", {
                        className: "flex gap-2  h-[40vh]",
                        children: [
                          f.jsx("img", {
                            src: "https://imgs.search.brave.com/pKZ42h_XVHls3Np0WElO1UU6k2iJeOTdv1rJ-kPEzfU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5Lzc0LzkyLzEx/LzM2MF9GXzk3NDky/MTExNF9BQ0ZnZG9r/ZDZaaEM2eks4RExH/SjJkRkxhb05KMlN6/YS5qcGc",
                            alt: "Interior 2",
                            loading: "lazy",
                            className: "w-[65%] rounded object-cover",
                          }),
                          f.jsx("img", {
                            src: "https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=600",
                            alt: "Interior 3",
                            loading: "lazy",
                            className: "w-[35%] rounded object-cover",
                          }),
                        ],
                      }),
                      f.jsxs("div", {
                        className: "flex gap-2 w-full h-[40vh]",
                        children: [
                          f.jsx("img", {
                            src: "https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=600",
                            alt: "Exterior 1",
                            loading: "lazy",
                            className: "w-[35%] rounded object-cover",
                          }),
                          f.jsx("img", {
                            src: "https://imgs.search.brave.com/Clh6qoRY6C6foLgoeV45kpSlhB-AlThbToLKtFSao3E/rs:fit:860:0:0:0/g:ce/aHR0cDovL3d3dy5r/ZXJhbGFob3VzZXBs/YW5uZXIuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE1LzA3/L2VsZXZhdGlvbi5q/cGc",
                            alt: "Exterior 2",
                            loading: "lazy",
                            className: "w-[65%] rounded object-cover",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  },
  Sp = [
    { id: 1, title: "Home", path: "/", delay: "0.1s" },
    { id: 2, title: "About", path: "/about", delay: "0.2s" },
    { id: 3, title: "Blog", path: "/blog", delay: "0.3s" },
    { id: 4, title: "Gallery", path: "/gallery", delay: "0.4s" },
    { id: 5, title: "Services", path: "/Operations", delay: "0.5s" },
    { id: 6, title: "Explore", path: "/Explore", delay: "0.6s" },
  ],
  hl = (e) => ({
    initial: { y: "-100%", opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, delay: parseFloat(e), ease: "easeOut" },
    },
  }),
  Dj = () => {
    const [e, t] = k.useState(!1),
      n = k.useRef(null),
      r = () => {
        t(!e);
      },
      i = (o) => {
        n.current && !n.current.contains(o.target) && t(!1);
      };
    return (
      k.useEffect(
        () => (
          document.addEventListener("mousedown", i),
          () => document.removeEventListener("mousedown", i)
        ),
        []
      ),
      f.jsx("nav", {
        className: " w-full  h-20 justify-center",
        children: f.jsxs("div", {
          className: "flex items-center justify-between font-league ",
          ref: n,
          children: [
            f.jsx(W.img, {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { duration: 0.8, delay: 0.5 },
              src: u0,
              alt: "logo",
              className: "w-20 rounded-full lg:ml-20 ",
            }),
            f.jsx("div", {
              className: "hidden md:flex flex-grow justify-end px-5 lg:px-20",
              children: f.jsx("ul", {
                className: "flex gap-2 lg:gap-6",
                children: Sp.map((o) =>
                  f.jsx(
                    W.li,
                    {
                      variants: hl(o.delay),
                      initial: "initial",
                      animate: "animate",
                      className: "nav-menu",
                      children: f.jsx(Jh, {
                        to: o.path,
                        className: ({ isActive: s }) =>
                          s
                            ? "inline-block px-4 text-xl text-orange-700"
                            : "inline-block px-4 text-xl  hover:text-orange-500",
                        children: o.title,
                      }),
                    },
                    o.id
                  )
                ),
              }),
            }),
            f.jsx("div", {
              className: "flex px-10 justify-between sm:hidden",
              children: f.jsx(W.div, {
                className:
                  "h-[40px] w-[40px] grid place-items-center bg-black  hover:bg-gray-600 rounded-full",
                variants: hl(1),
                initial: "initial",
                animate: "animate",
                children: f.jsx("button", {
                  onClick: r,
                  className: "text-white",
                  children: f.jsx(Aj, { size: 25 }),
                }),
              }),
            }),
            e &&
              f.jsx("div", {
                className:
                  "fixed top-0 right-0 mt-16 w-40 z-50 rounded-2xl md:hidden",
                children: f.jsx("ul", {
                  className: "flex flex-col gap-2 p-4 bg-white/80 shadow-lg",
                  children: Sp.map((o) =>
                    f.jsx(
                      W.li,
                      {
                        variants: hl(o.delay),
                        initial: "initial",
                        animate: "animate",
                        className: "nav-menu",
                        children: f.jsx(Jh, {
                          to: o.path,
                          className: ({ isActive: s }) =>
                            s
                              ? "block px-4 py-2 text-lg text-orange-700"
                              : "block px-4 py-2 text-lg text-gray-800 hover:text-orange-700",
                          children: o.title,
                        }),
                      },
                      o.id
                    )
                  ),
                }),
              }),
          ],
        }),
      })
    );
  };
function Ij(e) {
  return ao({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z",
        },
        child: [],
      },
    ],
  })(e);
}
function Vj(e) {
  return ao({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
        },
        child: [],
      },
    ],
  })(e);
}
function zj(e) {
  return ao({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z",
        },
        child: [],
      },
    ],
  })(e);
}
function Fj(e) {
  return ao({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z",
        },
        child: [],
      },
    ],
  })(e);
}
const Bj = () =>
    f.jsx(W.footer, {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5 },
      className: "relative z-10 bg-[#0B919C]  bottom-0 ",
      children: f.jsx("div", {
        className: "container pt-10",
        children: f.jsxs("div", {
          className:
            "grid grid-cols-1 md:grid-cols-3 gap-12 bottom-5 relative z-10",
          children: [
            f.jsxs("div", {
              children: [
                f.jsx("img", {
                  src: u0,
                  alt: "Logo",
                  className: "w-40 rounded-full ",
                }),
                f.jsx("p", {
                  className: "mb-4",
                  children: "Bhopal Madhya Pradesh",
                }),
              ],
            }),
            f.jsxs("div", {
              className: "grid grid-cols-2 z-99 ",
              children: [
                f.jsxs("div", {
                  children: [
                    f.jsx("h3", {
                      className: "font-semibold text-xl  mb-4 text-white ",
                      children: "Quick Links",
                    }),
                    f.jsxs("ul", {
                      className: "space-y-2",
                      children: [
                        f.jsx("li", {
                          children: f.jsx(Tt, {
                            to: "/contact",
                            className:
                              "hover:text-white inline-block footer-link",
                            children: "Contact Us",
                          }),
                        }),
                        f.jsx("li", {
                          children: f.jsx(Tt, {
                            to: "/about",
                            className: "hover:text-white footer-link",
                            children: "About Us",
                          }),
                        }),
                        f.jsx("li", {
                          children: f.jsx(Tt, {
                            to: "/Operations",
                            className: "hover:text-white footer-link",
                            children: "Our Operations",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                f.jsx("div", {
                  children: f.jsxs("ul", {
                    className: "space-y-2 mt-8",
                    children: [
                      f.jsx("li", {
                        children: f.jsx(Tt, {
                          to: "/brands",
                          className: "hover:text-white footer-link",
                          children: "Our Brands",
                        }),
                      }),
                      f.jsx("li", {
                        children: f.jsx(Tt, {
                          to: "#",
                          className: "hover:text-white footer-link",
                          children: "Privacy Policy",
                        }),
                      }),
                      f.jsx("li", {
                        children: f.jsx(Tt, {
                          to: "#",
                          className: "hover:text-white footer-link",
                          children: "Terms & Conditions",
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
            f.jsxs("div", {
              className: " z-99 ",
              children: [
                f.jsx("h2", {
                  className: "text-xl font-semibold mb-2 text-white",
                  children: "Follow Us",
                }),
                f.jsxs("div", {
                  className: "flex gap-4 ",
                  children: [
                    f.jsx("a", {
                      href: "https://facebook.com",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: " hover:text-blue-600 transition-colors",
                      children: f.jsx(Ij, { size: 24 }),
                    }),
                    f.jsx("a", {
                      href: "https://twitter.com",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: " hover:text-blue-400 transition-colors",
                      children: f.jsx(Fj, { size: 24 }),
                    }),
                    f.jsx("a", {
                      href: "https://instagram.com",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: " hover:text-pink-600 transition-colors",
                      children: f.jsx(Vj, { size: 24 }),
                    }),
                    f.jsx("a", {
                      href: "https://linkedin.com",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: " hover:text-blue-700 transition-colors",
                      children: f.jsx(zj, { size: 24 }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  $j = () =>
    f.jsxs(W.section, {
      initial: { x: "-100%", opacity: 0 },
      animate: { x: 0, opacity: 1 },
      transition: { ease: "linear", duration: 1, x: { duration: 0.8 } },
      exit: { opacity: 0 },
      className: "bg-[#FDFDFD] ",
      children: [
        f.jsx("img", {
          src: "https://img.freepik.com/premium-photo/herb-spices-cooking-background_136595-562.jpg?w=996",
          alt: "image of operations of magnet Foods",
          loading: "lazy",
          className: "float-right w-1/2",
        }),
        f.jsxs("div", {
          className: "container font-semibold mx-auto  text-black ",
          children: [
            f.jsx("h1", {
              className: "text-4xl font-bold text-center text-gray-800  mb-6",
              children: "About Us",
            }),
            f.jsx("p", {
              className: "text-lg text-gray-700 font-serif text-justify  mb-8",
              children:
                "Welcome to Magnet Foods, where we deliver An Experience with a Difference. We are a dependable, satisfaction-oriented provider of catering Operations for industrial units and events. We understand that celebrations are an integral part of our culture, and our aim is to make each one grand and special.  Whether for industrial needs or special occasions, we ensure every event is celebrated with excellence and a personalized touch. Our Operations are driven by core values: being process-oriented, disciplined, and dedicated. With Magnet Foods, you can count on expert planning, seamless execution, and a commitment to high standards.",
            }),
            f.jsx("div", {
              className: "grid md:grid-cols-1 lg:grid-cols-3 gap-8",
            }),
            f.jsx("div", {}),
          ],
        }),
      ],
    }),
  Wj = "assets/gallery-7Q2u7jPG.webp",
  Uj = [
    { id: 1, name: "person ", img: Mc, price: "$10", delay: 0.4 },
    { id: 2, name: "Person", img: Vg, price: "$5", delay: 0.8 },
    { id: 3, name: "person", img: zg, price: "$8", delay: 1.2 },
    { id: 4, name: "person", img: Fg, price: "$8", delay: 1.2 },
    { id: 5, name: "person", img: Bg, price: "$8", delay: 1.2 },
    { id: 6, name: "person", img: $g, price: "$8", delay: 1.2 },
    { id: 7, name: "person", img: Kx, price: "$8", delay: 1.2 },
    { id: 8, name: "person", img: Yx, price: "$8", delay: 1.2 },
    { id: 9, name: "person", img: Qx, price: "$8", delay: 1.2 },
  ],
  Gj = () =>
    f.jsxs(W.section, {
      initial: { x: "-100%", opacity: 0 },
      animate: { x: 0, opacity: 1 },
      transition: { ease: "linear", duration: 1, x: { duration: 0.8 } },
      exit: { opacity: 0 },
      className: "relative pb-10",
      children: [
        f.jsx("div", {
          className: "absolute inset-0 flex justify-center items-center",
          children: f.jsxs("div", {
            className: "w-full h-full relative",
            children: [
              f.jsx("div", {
                className:
                  "absolute top-0 left-0 w-full h-full bg-[#ffffff]  clip-left",
              }),
              f.jsx("div", {
                className:
                  "absolute top-0 left-0 w-full h-full bg-[#fefefe] clip-right",
              }),
            ],
          }),
        }),
        f.jsx(W.h3, {
          className: " h-[60vh]  relative ",
          style: {
            background: `url(${Wj}) center/contain no-repeat`,
            backgroundSize: "cover",
          },
        }),
        f.jsxs("div", {
          className: "container py-1 relative z-10",
          children: [
            f.jsx("div", {
              className:
                "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 place-items-center mt-1",
              children: Uj.map((e) =>
                f.jsxs(
                  "div",
                  {
                    className: "group space-y-3 text-center rounded-xl",
                    children: [
                      f.jsx("div", {
                        className: "flex justify-center  items-center",
                        children: f.jsx("img", {
                          src: e.img,
                          alt: "Gallery",
                          loading: "lazy",
                          className: `\r
                w-72 rounded-2xl \r
                group-hover:scale-x-110\r
                group-hover:translate-y-[-10px]\r
                transition-all\r
                duration-700 `,
                        }),
                      }),
                      f.jsx("div", {
                        children: f.jsx("p", {
                          className: "text-xl font-bold text-yellow-500",
                        }),
                      }),
                    ],
                  },
                  e.id
                )
              ),
            }),
            f.jsx("p", {
              className: "text-center font-bold italic",
              children:
                "Disclaimer - Keeping in view the privacy of our customers, we don't post their pictures.",
            }),
          ],
        }),
        f.jsx("style", {
          jsx: !0,
          children: `
        .clip-left {
          clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%);
        }

        .clip-right {
          clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
        }
      `,
        }),
      ],
    });
function Hj() {
  const [e, t] = Pe.useState(""),
    n = async (r) => {
      r.preventDefault(), t("Sending....");
      const i = new FormData(r.target);
      i.append("access_key", "c57ccd7a-3b8c-4884-aabf-8a13d0158773");
      const s = await (
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: i,
        })
      ).json();
      s.success
        ? (t("Form Submitted Successfully"), r.target.reset())
        : (console.log("Error", s), t(s.message));
    };
  return f.jsx("div", {
    className: "flex justify-center items-center   p-4",
    children: f.jsxs("div", {
      className: "bg-blue-300 p-8 rounded-lg shadow-lg w-full max-w-lg",
      children: [
        f.jsx("h2", {
          className: "text-2xl font-bold mb-6 text-center",
          children: "Contact Us",
        }),
        f.jsxs("form", {
          onSubmit: n,
          className: "space-y-4",
          children: [
            f.jsx("input", {
              type: "text",
              name: "name",
              placeholder: "Name",
              required: !0,
              className:
                "w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
            }),
            f.jsx("input", {
              type: "email",
              name: "email",
              placeholder: "Email",
              required: !0,
              className:
                "w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
            }),
            f.jsx("textarea", {
              name: "message",
              placeholder: "Message",
              required: !0,
              rows: "4",
              className:
                "w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
            }),
            f.jsx("button", {
              type: "submit",
              className:
                "w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500",
              children: "Submit Form",
            }),
          ],
        }),
        e &&
          f.jsx("div", {
            className: "mt-4 text-center text-green-500",
            children: e,
          }),
      ],
    }),
  });
}
const Kj = ({ image: e, name: t, text: n, onClose: r }) =>
    f.jsx(W.div, {
      initial: { opacity: 0, scale: 0.5 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.5 },
      transition: { duration: 0.5 },
      className:
        "fixed inset-0 flex items-center font-serif justify-center  bg-gray-800 bg-opacity-75 z-50",
      onClick: r,
      children: f.jsxs("div", {
        className:
          "bg-white p-6 overflow-x-scroll rounded-lg shadow-lg h-[90%] w-[900px] relative",
        onClick: (i) => i.stopPropagation(),
        children: [
          f.jsx("button", {
            onClick: r,
            className: "absolute top-2 right-2 text-2xl",
            children: "×",
          }),
          f.jsx("div", {
            className: "flex gap-20 text-gray-800",
            children: f.jsxs("div", {
              className: "w-full pl-4",
              children: [
                f.jsx("h1", {
                  className: "text-2xl flex justify-center font-semibold mb-1",
                  children: n.title,
                }),
                f.jsxs("div", {
                  children: [
                    f.jsx("p", {
                      className: "text-lg mb-4",
                      children: n.intro,
                    }),
                    f.jsx("h2", {
                      className: "text-xl font-bold mb-2",
                      children: n.sections[0].heading,
                    }),
                    n.sections[0].content,
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    }),
  Yj = "assets/blog_1_1-DHJO7fVZ.webp",
  Qj = "assets/blog_1_2-B34efJ4I.webp",
  Xj = "assets/blog_1_3-CaNv0FLe.webp",
  kp = "assets/blog_1_4-GJ2F2DSE.webp",
  qj = "assets/blog_1_5-D70JcH8H.webp",
  Zj = "assets/blog_1_6-BxLBMaIf.webp",
  pl = "assets/blog_2_1-CN-O7xnU.webp",
  Jj = "assets/blog_2_2-BwzJffxV.webp",
  e2 = "assets/blog_2_3-BaQUbGbR.webp",
  Cp = "assets/blog_2_4-BHaxgNS4.webp",
  t2 = "assets/blog_3_1-CxaLqoyt.webp",
  n2 = "assets/blog_3_2-DRWtYvAX.webp",
  r2 = [
    {
      id: 1,
      name: "Themes to Make Your Next Event Unforgettable",
      img: kp,
      delay: 0.4,
      text: {
        title: "Themes to Make Your Next Event Unforgettable",
        sections: [
          {
            content: f.jsxs(W.div, {
              initial: { x: -100 },
              animate: { x: 0 },
              transition: { type: "spring", stiffness: 100 },
              children: [
                f.jsx("p", {
                  children:
                    "Corporate events or social events are essential for fostering team spirit, networking, and celebrating milestones. But to truly stand out and leave a lasting impression, it's crucial to infuse creativity and innovation into your event planning process. One effective way to do this is by choosing a unique theme that resonates with your company culture and objectives. In this blog post, we'll explore 10 distinct themes guaranteed to make your next corporate event an unforgettable success.",
                }),
                f.jsx("br", {}),
                f.jsx("h1", {
                  className: "text-xl font-bold",
                  children: "1. Retro",
                }),
                f.jsx("br", {}),
                f.jsx("img", {
                  className: "block w-[400px] mx-auto",
                  src: Yj,
                  alt: "Image of Retro Event",
                }),
                f.jsx("p", {
                  children:
                    "Take your guests back in time with a retro-themed event. Whether it's the swinging 60s, disco fever of the 70s, or neon-soaked 80s, embracing nostalgia adds a fun and lighthearted atmosphere to your gathering. Encourage attendees to dress in period attire, decorate with vintage props, and groove to classic tunes for a truly memorable experience.",
                }),
                f.jsx("br", {}),
                f.jsx("h1", {
                  className: "text-xl font-bold",
                  children: "2. Around the World",
                }),
                f.jsx("br", {}),
                f.jsx("img", {
                  className: "block w-[400px] mx-auto",
                  src: Qj,
                  alt: "Around the World",
                }),
                f.jsx("p", {
                  children:
                    "Bring the global experience to your event by showcasing different cultures from around the world. Set up themed stations representing various countries, each offering authentic cuisine, music, and activities. Guests can embark on a culinary journey or participate in cultural workshops, fostering diversity and appreciation among attendees.",
                }),
                f.jsx("br", {}),
                f.jsx("h1", {
                  className: "text-xl font-bold",
                  children: "3. Masquerade Ball",
                }),
                f.jsx("br", {}),
                f.jsx("img", {
                  className: "block w-[400px] mx-auto",
                  src: Xj,
                  alt: "Masquerade Ball",
                }),
                f.jsx("p", {
                  children:
                    "Add an air of mystery and elegance to your corporate event with a masquerade ball theme. Encourage guests to wear masks and glamorous attire as they mingle and dance the night away. Incorporate opulent decor, live entertainment, and themed cocktails to create an enchanting atmosphere reminiscent of a fascinating evening.",
                }),
                f.jsx("br", {}),
                f.jsx("h1", {
                  className: "text-xl font-bold",
                  children: "4. Fantasy Island ",
                }),
                f.jsx("br", {}),
                f.jsx("img", {
                  className: "block w-[400px] mx-auto",
                  src: kp,
                  alt: "Fantasy Island ",
                }),
                f.jsx("p", {
                  children:
                    "Escape reality and indulge in a whimsical fantasy-themed event. Transform your venue into an enchanted island paradise complete with lush foliage, mystical creatures, and ethereal lighting. From fairy tale forests to mystical underwater realms, the possibilities are endless for creating a magical experience that captivates the imagination.",
                }),
                f.jsx("br", {}),
                f.jsx("h1", {
                  className: "text-xl font-bold",
                  children: "5. HOLLYWOOD GLAMOUR ",
                }),
                f.jsx("br", {}),
                f.jsx("img", {
                  className: "block w-[400px] mx-auto",
                  src: qj,
                  alt: "HOLLYWOOD GLAMOUR ",
                }),
                f.jsx("p", {
                  children:
                    "Roll out the red carpet and embrace the glitz and glamour of Hollywood for your event. Channel the golden age of cinema with elegant decor, paparazzi photo ops, and VIP lounge areas. Guests will feel like A-list celebrities as they mingle amidst the luxury and sophistication of glamour town.",
                }),
                f.jsx("br", {}),
                f.jsx("h1", {
                  className: "text-xl font-bold",
                  children: "6. ENCHANTED GARDEN ",
                }),
                f.jsx("br", {}),
                f.jsx("img", {
                  className: "block w-[400px] mx-auto",
                  src: Zj,
                  alt: "ENCHANTED GARDEN ",
                }),
                f.jsx("p", {
                  children:
                    "Celebrate the beauty of nature with an enchanted garden-themed event. Transform your venue into a lush botanical paradise adorned with cascading florals, twinkling lights, and whimsical garden accents. Incorporate interactive elements such as flower crown workshops or butterfly releases for an immersive experience that delights the senses.",
                }),
              ],
            }),
          },
        ],
      },
    },
    {
      id: 2,
      name: "worried about Guest Management",
      img: pl,
      delay: 0.4,
      text: {
        title:
          "Are you worried about Guest Management During an Event? Let Professionals take over…",
        sections: [
          {
            content: f.jsxs(W.div, {
              initial: { x: -100 },
              animate: { x: 0 },
              transition: { type: "spring", stiffness: 100 },
              children: [
                f.jsx("p", {
                  children:
                    "Are you looking forward to celebrating your kid’s birthday? Would you like to throw your better half a surprise birthday party? Or are you planning a wedding or reception? These days, every event, be it a birthday party, a wedding or a reception is a life occasion to celebrate. Wouldn’t you want everything to be perfect? Trusting professionals to manage the show is the key to relax, sit back and enjoy!",
                }),
                f.jsx("br", {}),
                f.jsx("img", {
                  className: "block w-[400px] mx-auto",
                  src: Jj,
                  alt: "image of planning occasions ",
                }),
                f.jsxs("p", {
                  children: [
                    "There is no denying that be it a wedding or a birthday party, the preparations are quite elaborate. However, when you hire professionals, you can be assured that everything from booking to invitations to ",
                    f.jsx("strong", { children: "guest management" }),
                    " will be taken care of wonderfully.",
                    f.jsx("br", {}),
                    f.jsx("br", {}),
                    "All you need to do is enjoy the company of your loved ones completely. When you hire professional event managers, you can be assured that they will take care of everything possible. Confused whether you should hire an event management company? We’ll help you make a decision with ease….",
                  ],
                }),
                f.jsx("br", {}),
                f.jsx("img", {
                  className: "block w-[400px] mx-auto",
                  src: pl,
                  alt: "image of Event management ",
                }),
                f.jsxs("ol", {
                  children: [
                    f.jsx("li", {
                      children:
                        "❖ The first step in planning an occasion, be it a birthday party or a wedding is invitation. Are you confused what would look best or where to start? Don’t worry! We can help you by not only suggesting you several options but also get it done for you…",
                    }),
                    f.jsx("br", {}),
                    f.jsx("img", {
                      className: "block w-[400px] mx-auto",
                      src: Cp,
                      alt: "image of planning occasions ",
                    }),
                    f.jsx("li", {
                      children:
                        "❖ The next in line is where to host the party? Depending on your budget, we can provide you with several options that are within your budget. What’s more, we can even sweeten the deal by taking care of booking the place so that you don’t have to worry about the lodging of your guests.",
                    }),
                    f.jsx("br", {}),
                    f.jsx("li", {
                      children:
                        "❖ Once you have sorted out the invitation and booking, the next thing that comes to mind is guest management. We understand, that keeping your guests happy is the biggest challenge and we are ready to step up to it. Through a hospitality desk any query of the guests is immediately addressed and answered. What’s more, there are small mementos commemorating this happy occasion waiting for your guests in their room. Each guest is provided attention and their needs are catered to with a smile.",
                    }),
                    f.jsx("br", {}),
                    f.jsx("li", {
                      children:
                        "❖ Are you worried about the decoration of the place? Since the décor of the place is something that can make or break a function, paying enough attention to it is important. With enough experience on hand, we can provide you several ideas regarding themes, colour combination etc. If you have something particular in mind, we can help you materialise that too!",
                    }),
                    f.jsx("img", {
                      className: "block w-[400px] mx-auto",
                      src: e2,
                      alt: "image of Family party ",
                    }),
                    f.jsx("br", {}),
                    f.jsx("li", {
                      children:
                        "❖ Food is something that is an integral part of any celebration. In fact, apart from hospitality, it is the only thing that is remembered for years. We can help you prepare the menu for every occasion, from snacks, to breakfast, to lunch and dinner and even cocktail party. With one of the best catering team, you can be assured that people would love gorging on the yummy delicacies.",
                    }),
                    f.jsx("br", {}),
                    f.jsx("li", {
                      children:
                        "❖ What function is complete these days without some dance masti and fun? With DJ, trained choreographers and music lovers on the team, we provide you with a chance of a lifetime to dance your heart out on the best music.",
                    }),
                    f.jsx("br", {}),
                    "If you liked the idea of having fun without stressing yourself, it is time you made a decision. Hire event managers to relax and enjoy the show put by them.",
                  ],
                }),
              ],
            }),
          },
        ],
      },
    },
    {
      id: 3,
      name: "Role of an Event Consultant",
      img: t2,
      delay: 0.4,
      text: {
        title:
          "Looking Forward to Hiring an Event Consultant? Here's What You Should Look for….",
        sections: [
          {
            content: f.jsxs(W.div, {
              initial: { x: -100 },
              animate: { x: 0 },
              transition: { type: "spring", stiffness: 100 },
              children: [
                f.jsx("p", {
                  children:
                    "Are you excited about the upcoming wedding in your family? We can understand that apart from the joy of all the festivities, you are also worried about how you will be able to manage every responsibility that has come your way. Managing every aspect of the wedding is not a job for the faint hearted, after all, they are not called the big fat Indian wedding just like that. Every function from haldi to bhaat, to sangeet and cocktail, to the actual wedding and reception require lots of preparation. A sensible thing would be to let professionals assist you so that you can enjoy the festivities without any worries. Thankfully, we have event consultant and manager available to take care of every possible situation.",
                }),
                f.jsx("br", {}),
                f.jsx("h2", {
                  children: "What is the Role of an Event Consultant?",
                }),
                f.jsxs("p", {
                  children: [
                    "Planning an event, especially one at a large scale is not everyone’s cup of tea. There are several things which might go out of hand. However, instead of managing everything on your own, you can take the assistance of event consultants. If you know what you want but don’t know how to get it done, hiring an event consultant would make things easy.",
                    f.jsx("br", {}),
                    f.jsx("br", {}),
                    f.jsx("h2", {
                      children:
                        "What to look for before hiring an event consultant?",
                    }),
                    "Sometimes people hire ",
                    f.jsx("strong", { children: "event consultant" }),
                    " to plan the event, while others have some ideas but need professionals to execute it. Whatever your requirement, ensure that you discuss it with prospective candidates before hiring one. If you have decided to trust the responsibilities of the event to an event consultant, here’s what you should keep in mind before hiring one:",
                  ],
                }),
                f.jsx("br", {}),
                f.jsx("img", {
                  className: "block w-[400px] mx-auto",
                  src: pl,
                  alt: "image of Event management ",
                }),
                f.jsxs("ol", {
                  children: [
                    f.jsxs("li", {
                      children: [
                        "❖ ",
                        f.jsx("strong", {
                          children: "What is their general disposition?",
                        }),
                        " Since you will be trusting the entire responsibility of the event, from guest management to food and décor etc. to them, it is important that they have a friendly nature. We can assure you that guests love to be entertained by family members and if you are busy, your event consultant should be able to fill in for you. Apart from helping clients fulfil their dreams, we also believe in building relationships. Your guests are welcomed and taken care of in the best possible way and their needs are attended to pronto!",
                      ],
                    }),
                    f.jsx("br", {}),
                    f.jsx("img", {
                      className: "block w-[400px] mx-auto",
                      src: Cp,
                      alt: "image of planning occasions ",
                    }),
                    f.jsxs("li", {
                      children: [
                        "❖",
                        " ",
                        f.jsx("strong", {
                          children:
                            "What responsibilities are they willing to share?",
                        }),
                        " ",
                        "There are several areas which require attention during any event. We assure that every tiny detail and requirements of the client is fulfilled as we work closely with graphic designers, PR agency, vendors, venue managers, caterers, decorators etc. Thanks to our cordial relationship with them the event is successfully managed. Additionally, we also take care of the logistics for the event. Thus, you do not have to worry about transportation, parking, security etc.",
                      ],
                    }),
                    f.jsx("br", {}),
                    f.jsxs("li", {
                      children: [
                        "❖",
                        f.jsx("strong", {
                          children: " What is their experience?",
                        }),
                        " In the event management and catering industry, experience matters a lot. Apart from experience the drive to excel is also important. Having successfully executed events of different sizes, like conferences, birthday parties, weddings, receptions, etc. we have carved a niche for ourselves. Our team comprises of professionals from different fields which makes us a unique one-stop solution for all your event requirements.",
                      ],
                    }),
                    f.jsx("br", {}),
                    f.jsxs("li", {
                      children: [
                        "❖ ",
                        f.jsx("strong", { children: "What do they charge?" }),
                        " Last but not the least, the event consultant should be able to work within your budget. It is important to discuss this with the team before you finalise them. We offer budget friendly services to our clients, tailored as per your requirements.",
                      ],
                    }),
                    f.jsx("img", {
                      className: "block w-[400px] mx-auto",
                      src: n2,
                      alt: "image of Family party ",
                    }),
                    f.jsx("br", {}),
                    "If you liked the idea of having fun without stressing yourself, it is time you made a decision. Hire event managers to relax and enjoy the show put by them.",
                  ],
                }),
                f.jsx("p", {
                  children:
                    "Considering that event consultants can lower your stress, hiring one seems like a good idea. Survey to hire the best event consultant in your area.",
                }),
              ],
            }),
          },
        ],
      },
    },
  ];
function i2() {
  const [e, t] = k.useState(null),
    n = (i) => {
      t(i);
    },
    r = () => {
      t(null);
    };
  return f.jsxs(W.section, {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { ease: "linear", duration: 1, x: { duration: 0.8 } },
    exit: { opacity: 0 },
    children: [
      f.jsxs("div", {
        className: "container pb-24 ",
        children: [
          f.jsx("h3", {
            className:
              "text-4xl text-center font-league font-semibold uppercase py-8",
            children: "Blogs",
          }),
          f.jsx("div", {
            className:
              "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 place-items-center ",
            children: r2.map((i) =>
              f.jsxs(
                "div",
                {
                  className:
                    "group space-y-3 text-center bg-white/50 shadow-xl p-3 rounded-xl",
                  children: [
                    f.jsx("div", {
                      className: "flex justify-center items-center",
                      children: f.jsx("img", {
                        src: i.img,
                        alt: i.name,
                        loading: "lazy",
                        className: `\r
                   w-60   rounded-2xl \r
                    group-hover:scale-105\r
                    group-hover:translate-y-[-10px]\r
                    transition-all\r
                    duration-700 `,
                      }),
                    }),
                    f.jsx("div", {
                      children: f.jsx("p", {
                        className: "text-sm font-semibold cursor-pointer",
                        onClick: () => n(i),
                        children: i.name,
                      }),
                    }),
                  ],
                },
                i.id
              )
            ),
          }),
        ],
      }),
      e && f.jsx(Kj, { image: e.img, name: e.name, text: e.text, onClose: r }),
    ],
  });
}
function f0(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = f0(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function o2() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = f0(e)) && (r && (r += " "), (r += t));
  return r;
}
const vd = "-",
  s2 = (e) => {
    const t = l2(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (s) => {
        const a = s.split(vd);
        return a[0] === "" && a.length !== 1 && a.shift(), h0(a, t) || a2(s);
      },
      getConflictingClassGroupIds: (s, a) => {
        const l = n[s] || [];
        return a && r[s] ? [...l, ...r[s]] : l;
      },
    };
  },
  h0 = (e, t) => {
    var s;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      i = r ? h0(e.slice(1), r) : void 0;
    if (i) return i;
    if (t.validators.length === 0) return;
    const o = e.join(vd);
    return (s = t.validators.find(({ validator: a }) => a(o))) == null
      ? void 0
      : s.classGroupId;
  },
  bp = /^\[(.+)\]$/,
  a2 = (e) => {
    if (bp.test(e)) {
      const t = bp.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  l2 = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      c2(Object.entries(e.classGroups), n).forEach(([o, s]) => {
        Iu(s, r, o, t);
      }),
      r
    );
  },
  Iu = (e, t, n, r) => {
    e.forEach((i) => {
      if (typeof i == "string") {
        const o = i === "" ? t : Pp(t, i);
        o.classGroupId = n;
        return;
      }
      if (typeof i == "function") {
        if (u2(i)) {
          Iu(i(r), t, n, r);
          return;
        }
        t.validators.push({ validator: i, classGroupId: n });
        return;
      }
      Object.entries(i).forEach(([o, s]) => {
        Iu(s, Pp(t, o), n, r);
      });
    });
  },
  Pp = (e, t) => {
    let n = e;
    return (
      t.split(vd).forEach((r) => {
        n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r));
      }),
      n
    );
  },
  u2 = (e) => e.isThemeGetter,
  c2 = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const i = r.map((o) =>
            typeof o == "string"
              ? t + o
              : typeof o == "object"
              ? Object.fromEntries(
                  Object.entries(o).map(([s, a]) => [t + s, a])
                )
              : o
          );
          return [n, i];
        })
      : e,
  d2 = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const i = (o, s) => {
      n.set(o, s), t++, t > e && ((t = 0), (r = n), (n = new Map()));
    };
    return {
      get(o) {
        let s = n.get(o);
        if (s !== void 0) return s;
        if ((s = r.get(o)) !== void 0) return i(o, s), s;
      },
      set(o, s) {
        n.has(o) ? n.set(o, s) : i(o, s);
      },
    };
  },
  p0 = "!",
  f2 = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      i = t[0],
      o = t.length,
      s = (a) => {
        const l = [];
        let u = 0,
          c = 0,
          d;
        for (let S = 0; S < a.length; S++) {
          let m = a[S];
          if (u === 0) {
            if (m === i && (r || a.slice(S, S + o) === t)) {
              l.push(a.slice(c, S)), (c = S + o);
              continue;
            }
            if (m === "/") {
              d = S;
              continue;
            }
          }
          m === "[" ? u++ : m === "]" && u--;
        }
        const h = l.length === 0 ? a : a.substring(c),
          y = h.startsWith(p0),
          v = y ? h.substring(1) : h,
          x = d && d > c ? d - c : void 0;
        return {
          modifiers: l,
          hasImportantModifier: y,
          baseClassName: v,
          maybePostfixModifierPosition: x,
        };
      };
    return n ? (a) => n({ className: a, parseClassName: s }) : s;
  },
  h2 = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  p2 = (e) => ({ cache: d2(e.cacheSize), parseClassName: f2(e), ...s2(e) }),
  m2 = /\s+/,
  g2 = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: i,
      } = t,
      o = [],
      s = e.trim().split(m2);
    let a = "";
    for (let l = s.length - 1; l >= 0; l -= 1) {
      const u = s[l],
        {
          modifiers: c,
          hasImportantModifier: d,
          baseClassName: h,
          maybePostfixModifierPosition: y,
        } = n(u);
      let v = !!y,
        x = r(v ? h.substring(0, y) : h);
      if (!x) {
        if (!v) {
          a = u + (a.length > 0 ? " " + a : a);
          continue;
        }
        if (((x = r(h)), !x)) {
          a = u + (a.length > 0 ? " " + a : a);
          continue;
        }
        v = !1;
      }
      const S = h2(c).join(":"),
        m = d ? S + p0 : S,
        p = m + x;
      if (o.includes(p)) continue;
      o.push(p);
      const g = i(x, v);
      for (let w = 0; w < g.length; ++w) {
        const C = g[w];
        o.push(m + C);
      }
      a = u + (a.length > 0 ? " " + a : a);
    }
    return a;
  };
function y2() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = m0(t)) && (r && (r += " "), (r += n));
  return r;
}
const m0 = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = m0(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function v2(e, ...t) {
  let n,
    r,
    i,
    o = s;
  function s(l) {
    const u = t.reduce((c, d) => d(c), e());
    return (n = p2(u)), (r = n.cache.get), (i = n.cache.set), (o = a), a(l);
  }
  function a(l) {
    const u = r(l);
    if (u) return u;
    const c = g2(l, n);
    return i(l, c), c;
  }
  return function () {
    return o(y2.apply(null, arguments));
  };
}
const Q = (e) => {
    const t = (n) => n[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  g0 = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  x2 = /^\d+\/\d+$/,
  w2 = new Set(["px", "full", "screen"]),
  S2 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  k2 =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  C2 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  b2 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  P2 =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  bt = (e) => br(e) || w2.has(e) || x2.test(e),
  Ht = (e) => Hr(e, "length", L2),
  br = (e) => !!e && !Number.isNaN(Number(e)),
  ml = (e) => Hr(e, "number", br),
  oi = (e) => !!e && Number.isInteger(Number(e)),
  E2 = (e) => e.endsWith("%") && br(e.slice(0, -1)),
  _ = (e) => g0.test(e),
  Kt = (e) => S2.test(e),
  j2 = new Set(["length", "size", "percentage"]),
  T2 = (e) => Hr(e, j2, y0),
  N2 = (e) => Hr(e, "position", y0),
  A2 = new Set(["image", "url"]),
  R2 = (e) => Hr(e, A2, _2),
  M2 = (e) => Hr(e, "", O2),
  si = () => !0,
  Hr = (e, t, n) => {
    const r = g0.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  L2 = (e) => k2.test(e) && !C2.test(e),
  y0 = () => !1,
  O2 = (e) => b2.test(e),
  _2 = (e) => P2.test(e),
  D2 = () => {
    const e = Q("colors"),
      t = Q("spacing"),
      n = Q("blur"),
      r = Q("brightness"),
      i = Q("borderColor"),
      o = Q("borderRadius"),
      s = Q("borderSpacing"),
      a = Q("borderWidth"),
      l = Q("contrast"),
      u = Q("grayscale"),
      c = Q("hueRotate"),
      d = Q("invert"),
      h = Q("gap"),
      y = Q("gradientColorStops"),
      v = Q("gradientColorStopPositions"),
      x = Q("inset"),
      S = Q("margin"),
      m = Q("opacity"),
      p = Q("padding"),
      g = Q("saturate"),
      w = Q("scale"),
      C = Q("sepia"),
      b = Q("skew"),
      P = Q("space"),
      E = Q("translate"),
      O = () => ["auto", "contain", "none"],
      R = () => ["auto", "hidden", "clip", "visible", "scroll"],
      H = () => ["auto", _, t],
      z = () => [_, t],
      He = () => ["", bt, Ht],
      Ke = () => ["auto", br, _],
      Cn = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      rt = () => ["solid", "dashed", "dotted", "double", "none"],
      K = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      T = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      A = () => ["", "0", _],
      M = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      I = () => [br, _];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [si],
        spacing: [bt, Ht],
        blur: ["none", "", Kt, _],
        brightness: I(),
        borderColor: [e],
        borderRadius: ["none", "", "full", Kt, _],
        borderSpacing: z(),
        borderWidth: He(),
        contrast: I(),
        grayscale: A(),
        hueRotate: I(),
        invert: A(),
        gap: z(),
        gradientColorStops: [e],
        gradientColorStopPositions: [E2, Ht],
        inset: H(),
        margin: H(),
        opacity: I(),
        padding: z(),
        saturate: I(),
        scale: I(),
        sepia: A(),
        skew: I(),
        space: z(),
        translate: z(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", _] }],
        container: ["container"],
        columns: [{ columns: [Kt] }],
        "break-after": [{ "break-after": M() }],
        "break-before": [{ "break-before": M() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...Cn(), _] }],
        overflow: [{ overflow: R() }],
        "overflow-x": [{ "overflow-x": R() }],
        "overflow-y": [{ "overflow-y": R() }],
        overscroll: [{ overscroll: O() }],
        "overscroll-x": [{ "overscroll-x": O() }],
        "overscroll-y": [{ "overscroll-y": O() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [x] }],
        "inset-x": [{ "inset-x": [x] }],
        "inset-y": [{ "inset-y": [x] }],
        start: [{ start: [x] }],
        end: [{ end: [x] }],
        top: [{ top: [x] }],
        right: [{ right: [x] }],
        bottom: [{ bottom: [x] }],
        left: [{ left: [x] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", oi, _] }],
        basis: [{ basis: H() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", _] }],
        grow: [{ grow: A() }],
        shrink: [{ shrink: A() }],
        order: [{ order: ["first", "last", "none", oi, _] }],
        "grid-cols": [{ "grid-cols": [si] }],
        "col-start-end": [{ col: ["auto", { span: ["full", oi, _] }, _] }],
        "col-start": [{ "col-start": Ke() }],
        "col-end": [{ "col-end": Ke() }],
        "grid-rows": [{ "grid-rows": [si] }],
        "row-start-end": [{ row: ["auto", { span: [oi, _] }, _] }],
        "row-start": [{ "row-start": Ke() }],
        "row-end": [{ "row-end": Ke() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", _] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", _] }],
        gap: [{ gap: [h] }],
        "gap-x": [{ "gap-x": [h] }],
        "gap-y": [{ "gap-y": [h] }],
        "justify-content": [{ justify: ["normal", ...T()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...T(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...T(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [p] }],
        px: [{ px: [p] }],
        py: [{ py: [p] }],
        ps: [{ ps: [p] }],
        pe: [{ pe: [p] }],
        pt: [{ pt: [p] }],
        pr: [{ pr: [p] }],
        pb: [{ pb: [p] }],
        pl: [{ pl: [p] }],
        m: [{ m: [S] }],
        mx: [{ mx: [S] }],
        my: [{ my: [S] }],
        ms: [{ ms: [S] }],
        me: [{ me: [S] }],
        mt: [{ mt: [S] }],
        mr: [{ mr: [S] }],
        mb: [{ mb: [S] }],
        ml: [{ ml: [S] }],
        "space-x": [{ "space-x": [P] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [P] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", _, t] }],
        "min-w": [{ "min-w": [_, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              _,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [Kt] },
              Kt,
            ],
          },
        ],
        h: [{ h: [_, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [_, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [_, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [_, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", Kt, Ht] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              ml,
            ],
          },
        ],
        "font-family": [{ font: [si] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              _,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", br, ml] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              bt,
              _,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", _] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", _] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [m] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [m] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...rt(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", bt, Ht] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", bt, _] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: z() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              _,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", _] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [m] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...Cn(), N2] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", T2] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              R2,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [v] }],
        "gradient-via-pos": [{ via: [v] }],
        "gradient-to-pos": [{ to: [v] }],
        "gradient-from": [{ from: [y] }],
        "gradient-via": [{ via: [y] }],
        "gradient-to": [{ to: [y] }],
        rounded: [{ rounded: [o] }],
        "rounded-s": [{ "rounded-s": [o] }],
        "rounded-e": [{ "rounded-e": [o] }],
        "rounded-t": [{ "rounded-t": [o] }],
        "rounded-r": [{ "rounded-r": [o] }],
        "rounded-b": [{ "rounded-b": [o] }],
        "rounded-l": [{ "rounded-l": [o] }],
        "rounded-ss": [{ "rounded-ss": [o] }],
        "rounded-se": [{ "rounded-se": [o] }],
        "rounded-ee": [{ "rounded-ee": [o] }],
        "rounded-es": [{ "rounded-es": [o] }],
        "rounded-tl": [{ "rounded-tl": [o] }],
        "rounded-tr": [{ "rounded-tr": [o] }],
        "rounded-br": [{ "rounded-br": [o] }],
        "rounded-bl": [{ "rounded-bl": [o] }],
        "border-w": [{ border: [a] }],
        "border-w-x": [{ "border-x": [a] }],
        "border-w-y": [{ "border-y": [a] }],
        "border-w-s": [{ "border-s": [a] }],
        "border-w-e": [{ "border-e": [a] }],
        "border-w-t": [{ "border-t": [a] }],
        "border-w-r": [{ "border-r": [a] }],
        "border-w-b": [{ "border-b": [a] }],
        "border-w-l": [{ "border-l": [a] }],
        "border-opacity": [{ "border-opacity": [m] }],
        "border-style": [{ border: [...rt(), "hidden"] }],
        "divide-x": [{ "divide-x": [a] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [a] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [m] }],
        "divide-style": [{ divide: rt() }],
        "border-color": [{ border: [i] }],
        "border-color-x": [{ "border-x": [i] }],
        "border-color-y": [{ "border-y": [i] }],
        "border-color-s": [{ "border-s": [i] }],
        "border-color-e": [{ "border-e": [i] }],
        "border-color-t": [{ "border-t": [i] }],
        "border-color-r": [{ "border-r": [i] }],
        "border-color-b": [{ "border-b": [i] }],
        "border-color-l": [{ "border-l": [i] }],
        "divide-color": [{ divide: [i] }],
        "outline-style": [{ outline: ["", ...rt()] }],
        "outline-offset": [{ "outline-offset": [bt, _] }],
        "outline-w": [{ outline: [bt, Ht] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: He() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [m] }],
        "ring-offset-w": [{ "ring-offset": [bt, Ht] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", Kt, M2] }],
        "shadow-color": [{ shadow: [si] }],
        opacity: [{ opacity: [m] }],
        "mix-blend": [{ "mix-blend": [...K(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": K() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [l] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", Kt, _] }],
        grayscale: [{ grayscale: [u] }],
        "hue-rotate": [{ "hue-rotate": [c] }],
        invert: [{ invert: [d] }],
        saturate: [{ saturate: [g] }],
        sepia: [{ sepia: [C] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [l] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
        "backdrop-invert": [{ "backdrop-invert": [d] }],
        "backdrop-opacity": [{ "backdrop-opacity": [m] }],
        "backdrop-saturate": [{ "backdrop-saturate": [g] }],
        "backdrop-sepia": [{ "backdrop-sepia": [C] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [s] }],
        "border-spacing-x": [{ "border-spacing-x": [s] }],
        "border-spacing-y": [{ "border-spacing-y": [s] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              _,
            ],
          },
        ],
        duration: [{ duration: I() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", _] }],
        delay: [{ delay: I() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", _] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [w] }],
        "scale-x": [{ "scale-x": [w] }],
        "scale-y": [{ "scale-y": [w] }],
        rotate: [{ rotate: [oi, _] }],
        "translate-x": [{ "translate-x": [E] }],
        "translate-y": [{ "translate-y": [E] }],
        "skew-x": [{ "skew-x": [b] }],
        "skew-y": [{ "skew-y": [b] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              _,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              _,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": z() }],
        "scroll-mx": [{ "scroll-mx": z() }],
        "scroll-my": [{ "scroll-my": z() }],
        "scroll-ms": [{ "scroll-ms": z() }],
        "scroll-me": [{ "scroll-me": z() }],
        "scroll-mt": [{ "scroll-mt": z() }],
        "scroll-mr": [{ "scroll-mr": z() }],
        "scroll-mb": [{ "scroll-mb": z() }],
        "scroll-ml": [{ "scroll-ml": z() }],
        "scroll-p": [{ "scroll-p": z() }],
        "scroll-px": [{ "scroll-px": z() }],
        "scroll-py": [{ "scroll-py": z() }],
        "scroll-ps": [{ "scroll-ps": z() }],
        "scroll-pe": [{ "scroll-pe": z() }],
        "scroll-pt": [{ "scroll-pt": z() }],
        "scroll-pr": [{ "scroll-pr": z() }],
        "scroll-pb": [{ "scroll-pb": z() }],
        "scroll-pl": [{ "scroll-pl": z() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", _] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [bt, Ht, ml] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  I2 = v2(D2);
function V2(...e) {
  return I2(o2(e));
}
const z2 = ({ content: e, contentClassName: t }) => {
    const [n, r] = Pe.useState(0),
      i = k.useRef(null),
      { scrollYProgress: o } = Wb({
        container: i,
        offset: ["start start", "end start"],
      }),
      s = e.length;
    mb(o, "change", (d) => {
      const h = e.map((v, x) => x / s),
        y = h.reduce(
          (v, x, S) => (Math.abs(d - x) < Math.abs(d - h[v]) ? S : v),
          0
        );
      r(y);
    });
    const a = ["#417372", "#396593", "#2A3769", "#CC7869"],
      l = [
        "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
        "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
        "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
      ],
      [u, c] = k.useState(l[0]);
    return (
      k.useEffect(() => {
        c(l[n % l.length]);
      }, [n]),
      f.jsx("section", {
        children: f.jsxs(W.div, {
          animate: { backgroundColor: a[n % a.length] },
          className: "h-[35rem] overflow-y-auto flex relative space-x-10  p-5",
          ref: i,
          children: [
            f.jsx("div", {
              className: "div relative flex items-start px-10",
              children: f.jsx("div", {
                className: "max-w-3xl",
                children: e.map((d, h) =>
                  f.jsxs(
                    "div",
                    {
                      className: "my-10",
                      children: [
                        f.jsx(W.h2, {
                          initial: { opacity: 0 },
                          animate: { opacity: n === h ? 1 : 0.3 },
                          className: "text-2xl font-bold text-black",
                          children: d.title,
                        }),
                        f.jsx(W.p, {
                          initial: { opacity: 0 },
                          animate: { opacity: n === h ? 1 : 0.3 },
                          className: "text-lg text-slate-300  mt-10",
                          children: d.description,
                        }),
                      ],
                    },
                    d.title + h
                  )
                ),
              }),
            }),
            f.jsx("div", {
              style: { background: u },
              className: V2(
                "hidden lg:block h-80 w-[30%] rounded-md bg-white sticky top-1/4 ",
                t
              ),
              children: e[n].content ?? null,
            }),
          ],
        }),
      })
    );
  },
  F2 = [
    {
      title: " Industrial / Institutional Catering",
      description: f.jsxs("ol", {
        children: [
          f.jsx("p", {
            children:
              "Life is full of big and small happenings which prompt us to celebrate with friends and relatives to share our joy and happiness. Keeping this in mind we are forever ready to help you with all your needs and requirements to make your special day even more special by making elaborate arrangements for enjoyment without any hassle over the intricacies of organising a party.",
          }),
          f.jsx("p", { children: "We provide:" }),
          f.jsxs("li", {
            children: [
              f.jsx("strong", { children: "• Customized Menus:" }),
              " Designed to fit the theme, dietary requirements, and size of your event.",
            ],
          }),
          f.jsxs("li", {
            children: [
              f.jsx("strong", { children: "• On-Site Cooking & Service: " }),
              " Our team manages the entire catering process on location, ensuring freshness and quality.",
            ],
          }),
          f.jsxs("li", {
            children: [
              f.jsx("strong", { children: " • Attention to Detail: " }),
              " From elegant setups to professional service staff, we ensure a seamless experience for you and your guests.",
            ],
          }),
          f.jsxs("li", {
            children: [
              f.jsx("strong", { children: "• Wide Range of Events: " }),
              " We cater to weddings, corporate parties, family gatherings, and large social events, offering the same high standard of service regardless of the occasion.",
            ],
          }),
        ],
      }),
      content: f.jsx("div", {
        className: "h-full w-full  flex items-center justify-center text-white",
        children: f.jsx("img", {
          src: Rj,
          loading: "lazy",
          width: 300,
          height: 300,
          className: "h-full w-full object-cover",
          alt: "linear board demo",
        }),
      }),
    },
    {
      title: "Outdoor Catering",
      description: f.jsxs("ol", {
        children: [
          f.jsx("p", {
            children:
              "Life is full of big and small happenings which prompt us to celebrate with friends and relatives to share our joy and happiness. Keeping this in mind we are forever ready to help you with all your needs and requirements to make your special day even more special by making elaborate arrangements for enjoyment without any hassle over the intricacies of organising a party.",
          }),
          f.jsx("p", { children: "We provide:" }),
          f.jsxs("li", {
            children: [
              f.jsx("strong", { children: "• Customized Menus:" }),
              " Designed to fit the theme, dietary requirements, and size of your event.",
            ],
          }),
          f.jsxs("li", {
            children: [
              f.jsx("strong", { children: "• On-Site Cooking & Service: " }),
              " Our team manages the entire catering process on location, ensuring freshness and quality.",
            ],
          }),
          f.jsxs("li", {
            children: [
              f.jsx("strong", { children: " • Attention to Detail: " }),
              " From elegant setups to professional service staff, we ensure a seamless experience for you and your guests.",
            ],
          }),
          f.jsxs("li", {
            children: [
              f.jsx("strong", { children: "• Wide Range of Events: " }),
              " We cater to weddings, corporate parties, family gatherings, and large social events, offering the same high standard of service regardless of the occasion.",
            ],
          }),
        ],
      }),
      content: f.jsx("div", {
        className: "h-full w-full  flex items-center justify-center text-white",
        children: f.jsx("img", {
          src: Mj,
          loading: "lazy",
          width: 300,
          height: 300,
          className: "h-full w-full object-cover",
          alt: "linear board demo",
        }),
      }),
    },
    {
      title: "Club Operations",
      description: f.jsxs("ol", {
        children: [
          f.jsx("p", {
            children:
              "For over six years, Magnet Foods has managed exclusive clubs, including those for guests, offering top-notch service and unforgettable experiences. Our club operations which include golf clubs or social clubs’ Operations, are designed to enhance member experience by improving quality of food and Operations as well as managing of special dinners, parties etc. in excellent manner.",
          }),
          f.jsxs("li", {
            children: [
              f.jsx("strong", { children: "• Tailored Catering Operations: " }),
              "We offer catering that matches the ambience of private clubs.",
            ],
          }),
          f.jsxs("li", {
            children: [
              f.jsx("strong", { children: "• Event Coordination: " }),
              " From golf tournaments to exclusive dinners, we ensure every event is memorable.",
            ],
          }),
          f.jsxs("li", {
            children: [
              f.jsx("strong", { children: " • Seamless Operations: " }),
              "Our team handles everything from daily club management to special events, ensuring a refined experience for all members.",
            ],
          }),
          f.jsxs("li", {
            children: [
              f.jsx("strong", { children: "• Experienced Staff: " }),
              " With a dedicated team accustomed to serving army personnel, we bring discipline and professionalism to every operation.",
            ],
          }),
        ],
      }),
      content: f.jsx("div", {
        className: "h-full w-full  flex items-center justify-center text-white",
        children: f.jsx("img", {
          src: Lj,
          loading: "lazy",
          width: 300,
          height: 300,
          className: "h-full w-full object-cover",
          alt: "linear board demo",
        }),
      }),
    },
    {
      title: "Operations & Maintenance",
      description: f.jsxs("ol", {
        children: [
          f.jsx("p", {
            children:
              "If your property, whether it’s a club, restaurant, or event venue, isn’t delivering the returns you expected, Magnet Foods can help. Our Operations & Maintenance service focuses on maximizing efficiency, improving guest experiences, and optimizing revenue generation by taking over operations and executing it through our team of professionals who specialize in turning around any such struggling property.",
          }),
          f.jsxs("li", {
            children: [
              f.jsx("strong", { children: "• Revenue Optimization:" }),
              "We evaluate your current operations and introduce strategies that increase revenue and profitability.",
            ],
          }),
          f.jsxs("li", {
            children: [
              f.jsx("strong", { children: "• Property Management: " }),
              " From maintenance to day-to-day operations, we ensure that your property runs smoothly and efficiently.",
            ],
          }),
          f.jsxs("li", {
            children: [
              f.jsx("strong", { children: " • Expert Consultation: " }),
              "Our team of experts offers tailored advice to help you overcome operational challenges and unlock your property's full potential.",
            ],
          }),
          f.jsxs("li", {
            children: [
              f.jsx("strong", { children: "• End-to-End Solutions: " }),
              " Whether it’s revamping your service model or handling complete property management, we take care of everything to ensure sustainable growth.",
            ],
          }),
          f.jsx("p", {
            children:
              "With Magnet Foods, you’re not just getting a service—you’re getting a trusted partner committed to delivering excellence. Whether it’s industrial catering or enhancing your property’s performance, we’re here to make every experience exceptional.",
          }),
        ],
      }),
      content: f.jsx("div", {
        className: "h-full w-full  flex items-center justify-center text-white",
        children: f.jsx("img", {
          src: Oj,
          loading: "lazy",
          width: 300,
          height: 300,
          className: "h-full w-full object-cover",
          alt: "linear board demo",
        }),
      }),
    },
  ];
function B2() {
  return f.jsx(W.div, {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { ease: "linear", duration: 1, x: { duration: 0.8 } },
    exit: { opacity: 0 },
    children: f.jsx(z2, { content: F2 }),
  });
}
const $2 = () => {
  const [e, t] = k.useState({ x: 0, y: 0 });
  k.useEffect(() => {
    const r = (i) => {
      t({ x: i.clientX, y: i.clientY });
    };
    return (
      window.addEventListener("mousemove", r),
      () => window.removeEventListener("mousemove", r)
    );
  }, []);
  const n = {
    width: "20px",
    height: "20px",
    backgroundColor: "rgba(255, 165, 0, 0.5)",
    border: "2px solid #FF4500",
    borderRadius: "50%",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1e3,
    pointerEvents: "none",
    mixBlendMode: "difference",
    boxShadow: "0 0 10px rgba(255, 165, 0, 0.7)",
    transition: "width 0.3s, height 0.3s",
  };
  return f.jsxs(f.Fragment, {
    children: [
      f.jsx(W.div, {
        style: n,
        animate: { x: e.x - 10, y: e.y - 10 },
        transition: {
          type: "spring",
          stiffness: 800,
          damping: 20,
          ease: "easeInOut",
          duration: 0.1,
        },
      }),
      f.jsx(Dj, {}),
      f.jsxs(LP, {
        children: [
          f.jsx(st, { index: !0, element: f.jsx(vp, {}) }),
          f.jsx(st, { path: "/about", element: f.jsx($j, {}) }),
          f.jsx(st, { path: "/Operations", element: f.jsx(B2, {}) }),
          f.jsx(st, { path: "/brands", element: f.jsx(a0, {}) }),
          f.jsx(st, { path: "/InquiryForm", element: f.jsx(l0, {}) }),
          f.jsx(st, { path: "/gallery", element: f.jsx(Gj, {}) }),
          f.jsx(st, { path: "/contact", element: f.jsx(Hj, {}) }),
          f.jsx(st, { path: "/blog", element: f.jsx(i2, {}) }),
          f.jsx(st, { path: "/explore", element: f.jsx(_j, {}) }),
          f.jsx(st, { path: "*", element: f.jsx(vp, {}) }),
        ],
      }),
      f.jsx(Bj, {}),
    ],
  });
};
gl.createRoot(document.getElementById("root")).render(
  f.jsx(BP, { children: f.jsx($2, {}) })
);
