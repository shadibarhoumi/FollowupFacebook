/*! @license Firebase v3.1.0
    Build: 3.1.0-rc.3
    Terms: https://developers.google.com/terms */
(function () {
 var h = 'undefined' != typeof window && window === this ? this : 'undefined' != typeof global ? global : this, l = function () {
h.Symbol || (h.Symbol = aa);l = function () {};
}, ba = 0, aa = function (a) {return "jscomp_symbol_" + a + ba++}, m = function () {
l();h.Symbol.iterator || (h.Symbol.iterator = h.Symbol("iterator"));m = function () {}
}, ca = function () {
var a = ["next", "error", "complete"];m();l();m();var b = a[Symbol.iterator];if (b)return b.call(a);var c = 0;return { next:function () {return c < a.length ? { done:!1, value:a[c++] } : { done:!0 }} }
}, p = function (a, b) {
m();

a instanceof String && (a += "");var c = 0, d = { next:function () {
if (c < a.length) {
var e = c++;return { value:b(e, a[e]), done:!1 }
}d.next = function () {return { done:!0, value:void 0 }};return d.next()
} };l();m();d[Symbol.iterator] = function () {return d};return d
}, q = function (a, b) {!Array.prototype[a] && Object.defineProperties && Object.defineProperty && Object.defineProperty(Array.prototype, a, { configurable:!0, enumerable:!1, writable:!0, value:b })}, r = function (a, b, c) {
if (null == a)throw new TypeError("The 'this' value for String.prototype." +

c + " must not be null or undefined");if (b instanceof RegExp)throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");return a + ""
}, da = function (a) {
var b = r(this, null, "repeat");if (0 > a || 1342177279 < a)throw new RangeError("Invalid count value");a |= 0;for (var c = ""; a;)if (a & 1 && (c += b), a >>>= 1)b += b;return c
}, ea = function (a) {
var b = r(this, null, "codePointAt"), c = b.length;a = Number(a) || 0;if (0 <= a && a < c) {
a |= 0;var d = b.charCodeAt(a);if (55296 > d || 56319 < d || a + 1 === c)return d;a = b.charCodeAt(a +
1);return 56320 > a || 57343 < a ? d : 1024 * (d - 55296) + a + 9216
}
}, fa = function (a, b) {return -1 !== r(this, a, "includes").indexOf(a, b || 0)}, ga = function (a, b) {
var c = r(this, a, "startsWith");a += "";var d = c.length, e = a.length;b = Math.max(0, Math.min(b | 0, c.length));for (var f = 0; f < e && b < d;)if (c[b++] != a[f++])return !1;return f >= e
}, ha = function (a, b) {
var c = r(this, a, "endsWith");a += "";void 0 === b && (b = c.length);b = Math.max(0, Math.min(b | 0, c.length));for (var d = a.length; 0 < d && 0 < b;)if (c[--b] != a[--d])return !1;return 0 >= d
};

  String.prototype.endsWith || (String.prototype.endsWith = ha);String.prototype.startsWith || (String.prototype.startsWith = ga);String.prototype.includes || (String.prototype.includes = fa);String.prototype.codePointAt || (String.prototype.codePointAt = ea);String.prototype.repeat || (String.prototype.repeat = da);q("values", function () {return p(this, function (a, b) {return b})});q("keys", function () {return p(this, function (a) {return a})});q("entries", function () {return p(this, function (a, b) {return [a, b]})});

  var t = this, u = function () {}, v = function (a) {
var b = typeof a;if ("object" == b)if (a) {
if (a instanceof Array)return "array";if (a instanceof Object)return b;var c = Object.prototype.toString.call(a);if ("[object Window]" == c)return "object";if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))return "array";if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))return "function"
}else return "null";
else if ("function" == b && "undefined" == typeof a.call)return "object";return b
}, w = function (a) {return "function" == v(a)}, ia = function (a, b, c) {return a.call.apply(a.bind, arguments)}, ja = function (a, b, c) {
if (!a)throw Error();if (2 < arguments.length) {
var d = Array.prototype.slice.call(arguments, 2);return function () {
var c = Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c, d);return a.apply(b, c)
}
}return function () {return a.apply(b, arguments)}
}, x = function (a, b, c) {
x = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ?

ia : ja;return x.apply(null, arguments)
}, y = function (a, b) {
var c = Array.prototype.slice.call(arguments, 1);return function () {
var b = c.slice();b.push.apply(b, arguments);return a.apply(this, b)
}
}, z = function (a, b) {
function c() {}c.prototype = b.prototype;a.ba = b.prototype;a.prototype = new c;a.prototype.constructor = a;a.aa = function (a, c, f) {
for (var k = Array(arguments.length - 2), g = 2; g < arguments.length; g++)k[g - 2] = arguments[g];return b.prototype[c].apply(a, k)
}
};function __extends(a, b) {
function c() {this.constructor = a}for (var d in b)b.hasOwnProperty(d) && (a[d] = b[d]);a.prototype = null === b ? Object.create(b) : (c.prototype = b.prototype, new c)
}

  function __decorate(a, b, c, d) {
var e = arguments.length, f = 3 > e ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d, k;if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)f = Reflect.decorate(a, b, c, d);else for (var g = a.length - 1; 0 <= g; g--)if (k = a[g])f = (3 > e ? k(f) : 3 < e ? k(b, c, f) : k(b, c)) || f;return 3 < e && f && Object.defineProperty(b, c, f), f
}function __metadata(a, b) {if ("object" === typeof Reflect && "function" === typeof Reflect.metadata)return Reflect.metadata(a, b)}

  var __param = function (a, b) {return function (c, d) {b(c, d, a)}}, __awaiter = function (a, b, c, d) {return new (c || (c = Promise))(function (e, f) {
function k(a) {try {n(d.next(a))}catch (b) {f(b)}}function g(a) {try {n(d.throw(a))}catch (b) {f(b)}}function n(a) {a.done ? e(a.value) : (new c(function (b) {b(a.value)})).then(k, g)}n((d = d.apply(a, b)).next())
})};var A = function (a) {
if (Error.captureStackTrace)Error.captureStackTrace(this, A);else {
var b = Error().stack;b && (this.stack = b)
}a && (this.message = String(a))
};z(A, Error);A.prototype.name = "CustomError";var ka = function (a, b) {
for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;)d += c.shift() + e.shift();return d + c.join("%s")
};var B = function (a, b) {
b.unshift(a);A.call(this, ka.apply(null, b));b.shift()
};z(B, A);B.prototype.name = "AssertionError";var la = function (a, b, c, d) {
var e = "Assertion failed";if (c)var e = e + (": " + c), f = d;else a && (e += ": " + a, f = b);throw new B("" + e, f || []);
}, C = function (a, b, c) {a || la("", null, b, Array.prototype.slice.call(arguments, 2))}, D = function (a, b, c) {w(a) || la("Expected function but got %s: %s.", [v(a), a], b, Array.prototype.slice.call(arguments, 2))};var E = function (a, b, c) {
this.S = c;this.L = a;this.U = b;this.s = 0;this.o = null
};E.prototype.get = function () {
var a;0 < this.s ? (this.s--, a = this.o, this.o = a.next, a.next = null) : a = this.L();return a
};E.prototype.put = function (a) {
this.U(a);this.s < this.S && (this.s++, a.next = this.o, this.o = a)
};var F;a: {
var ma = t.navigator;if (ma) {
var na = ma.userAgent;if (na) {
F = na;break a
}
}F = ""
};var oa = function (a) {t.setTimeout(function () {throw a;}, 0)}, G, pa = function () {
var a = t.MessageChannel;"undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && -1 == F.indexOf("Presto") && (a = function () {
var a = document.createElement("IFRAME");a.style.display = "none";a.src = "";document.documentElement.appendChild(a);var b = a.contentWindow, a = b.document;a.open();a.write("");a.close();var c = "callImmediate" + Math.random(), d = "file:" == b.location.protocol ? "*" : b.location.protocol +

"//" + b.location.host, a = x(function (a) {if (("*" == d || a.origin == d) && a.data == c)this.port1.onmessage()}, this);b.addEventListener("message", a, !1);this.port1 = {};this.port2 = { postMessage:function () {b.postMessage(c, d)} }
});if ("undefined" !== typeof a && -1 == F.indexOf("Trident") && -1 == F.indexOf("MSIE")) {
var b = new a, c = {}, d = c;b.port1.onmessage = function () {if (void 0 !== c.next) {
c = c.next;var a = c.F;c.F = null;a()
}};return function (a) {
d.next = { F:a };d = d.next;b.port2.postMessage(0)
}
}return "undefined" !== typeof document && "onreadystatechange"in

document.createElement("SCRIPT") ? function (a) {
var b = document.createElement("SCRIPT");b.onreadystatechange = function () {
b.onreadystatechange = null;b.parentNode.removeChild(b);b = null;a();a = null
};document.documentElement.appendChild(b)
} : function (a) {t.setTimeout(a, 0)}
};var H = function () {this.v = this.f = null}, qa = new E(function () {return new I}, function (a) {a.reset()}, 100);H.prototype.add = function (a, b) {
var c = qa.get();c.set(a, b);this.v ? this.v.next = c : (C(!this.f), this.f = c);this.v = c
};H.prototype.remove = function () {
var a = null;this.f && (a = this.f, this.f = this.f.next, this.f || (this.v = null), a.next = null);return a
};var I = function () {this.next = this.scope = this.B = null};I.prototype.set = function (a, b) {
this.B = a;this.scope = b;this.next = null
};

  I.prototype.reset = function () {this.next = this.scope = this.B = null};var L = function (a, b) {
J || ra();K || (J(), K = !0);sa.add(a, b)
}, J, ra = function () {if (t.Promise && t.Promise.resolve) {
var a = t.Promise.resolve(void 0);J = function () {a.then(ta)}
}else J = function () {
var a = ta, c;!(c = !w(t.setImmediate)) && (c = t.Window && t.Window.prototype) && (c = -1 == F.indexOf("Edge") && t.Window.prototype.setImmediate == t.setImmediate);c ? (G || (G = pa()), G(a)) : t.setImmediate(a)
}}, K = !1, sa = new H, ta = function () {
for (var a; a = sa.remove();) {
try {a.B.call(a.scope)}catch (b) {oa(b)}qa.put(a)
}K = !1
};var O = function (a, b) {
this.b = 0;this.K = void 0;this.j = this.g = this.u = null;this.m = this.A = !1;if (a != u)try {
var c = this;a.call(b, function (a) {N(c, 2, a)}, function (a) {
try {
if (a instanceof Error)throw a;throw Error("Promise rejected.");
}catch (b) {}N(c, 3, a)
})
}catch (d) {N(this, 3, d)}
}, ua = function () {
this.next = this.context = this.h = this.c = this.child = null;this.w = !1
};ua.prototype.reset = function () {
this.context = this.h = this.c = this.child = null;this.w = !1
};

  var va = new E(function () {return new ua}, function (a) {a.reset()}, 100), wa = function (a, b, c) {
var d = va.get();d.c = a;d.h = b;d.context = c;return d
}, ya = function (a, b, c) {xa(a, b, c, null) || L(y(b, a))};O.prototype.then = function (a, b, c) {
null != a && D(a, "opt_onFulfilled should be a function.");null != b && D(b, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");return za(this, w(a) ? a : null, w(b) ? b : null, c)
};O.prototype.then = O.prototype.then;O.prototype.$goog_Thenable = !0;
  O.prototype.X = function (a, b) {return za(this, null, a, b)};var Ba = function (a, b) {
a.g || 2 != a.b && 3 != a.b || Aa(a);C(null != b.c);a.j ? a.j.next = b : a.g = b;a.j = b
}, za = function (a, b, c, d) {
var e = wa(null, null, null);e.child = new O(function (a, k) {
e.c = b ? function (c) {try {
var e = b.call(d, c);a(e)
}catch (M) {k(M)}} : a;e.h = c ? function (b) {try {
var e = c.call(d, b);a(e)
}catch (M) {k(M)}} : k
});e.child.u = a;Ba(a, e);return e.child
};O.prototype.Y = function (a) {
C(1 == this.b);this.b = 0;N(this, 2, a)
};O.prototype.Z = function (a) {
C(1 == this.b);this.b = 0;N(this, 3, a)
};

  var N = function (a, b, c) {0 == a.b && (a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself")), a.b = 1, xa(c, a.Y, a.Z, a) || (a.K = c, a.b = b, a.u = null, Aa(a), 3 != b || Ca(a, c)))}, xa = function (a, b, c, d) {
if (a instanceof O)return null != b && D(b, "opt_onFulfilled should be a function."), null != c && D(c, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"), Ba(a, wa(b || u, c || null, d)), !0;var e;if (a)try {e = !!a.$goog_Thenable}catch (k) {e = !1}else e = !1;if (e)return a.then(b, c, d),

!0;e = typeof a;if ("object" == e && null != a || "function" == e)try {
var f = a.then;if (w(f))return Da(a, f, b, c, d), !0
}catch (k) {return c.call(d, k), !0}return !1
}, Da = function (a, b, c, d, e) {
var f = !1, k = function (a) {f || (f = !0, c.call(e, a))}, g = function (a) {f || (f = !0, d.call(e, a))};try {b.call(a, k, g)}catch (n) {g(n)}
}, Aa = function (a) {a.A || (a.A = !0, L(a.N, a))}, Ea = function (a) {
var b = null;a.g && (b = a.g, a.g = b.next, b.next = null);a.g || (a.j = null);null != b && C(null != b.c);return b
};

  O.prototype.N = function () {
for (var a; a = Ea(this);) {
var b = this.b, c = this.K;if (3 == b && a.h && !a.w) {
var d;for (d = this; d && d.m; d = d.u)d.m = !1
}if (a.child)a.child.u = null, Fa(a, b, c);else try {a.w ? a.c.call(a.context) : Fa(a, b, c)}catch (e) {Ga.call(null, e)}va.put(a)
}this.A = !1
};var Fa = function (a, b, c) {2 == b ? a.c.call(a.context, c) : a.h && a.h.call(a.context, c)}, Ca = function (a, b) {
a.m = !0;L(function () {a.m && Ga.call(null, b)})
}, Ga = oa;function P(a, b) {
if (!(b instanceof Object))return b;switch (b.constructor){case Date:return new Date(b.getTime());case Object:void 0 === a && (a = {});break;case Array:a = [];break;default:return b}for (var c in b)b.hasOwnProperty(c) && (a[c] = P(a[c], b[c]));return a
};var Ha = Error.captureStackTrace, R = function (a, b) {
this.code = a;this.message = b;if (Ha)Ha(this, Q.prototype.create);else {
var c = Error.apply(this, arguments);this.name = "FirebaseError";Object.defineProperty(this, "stack", { get:function () {return c.stack} })
}
};R.prototype = Object.create(Error.prototype);R.prototype.constructor = R;R.prototype.name = "FirebaseError";var Q = function (a, b, c) {
this.V = a;this.W = b;this.M = c;this.pattern = /\{\$([^}]+)}/g
};

  Q.prototype.create = function (a, b) {
void 0 === b && (b = {});var c = this.M[a];a = this.V + "/" + a;var c = void 0 === c ? "Error" : c.replace(this.pattern, function (a, c) {return void 0 !== b[c] ? b[c].toString() : "<" + c + "?>"}), c = this.W + ": " + c + " (" + a + ").", c = new R(a, c), d;for (d in b)b.hasOwnProperty(d) && "_" !== d.slice(-1) && (c[d] = b[d]);return c
};O.all = function (a) {return new O(function (b, c) {
var d = a.length, e = [];if (d)for (var f = function (a, c) {
d--;e[a] = c;0 == d && b(e)
}, k = function (a) {c(a)}, g = 0, n; g < a.length; g++)n = a[g], ya(n, y(f, g), k);else b(e)
})};O.resolve = function (a) {
if (a instanceof O)return a;var b = new O(u);N(b, 2, a);return b
};O.reject = function (a) {return new O(function (b, c) {c(a)})};O.prototype["catch"] = O.prototype.X;var S = O;"undefined" !== typeof Promise && (S = Promise);var Ia = S;function Ja(a, b) {
a = new T(a, b);return a.subscribe.bind(a)
}var T = function (a, b) {
var c = this;this.a = [];this.J = 0;this.task = Ia.resolve();this.l = !1;this.D = b;this.task.then(function () {a(c)}).catch(function (a) {c.error(a)})
};T.prototype.next = function (a) {U(this, function (b) {b.next(a)})};T.prototype.error = function (a) {
U(this, function (b) {b.error(a)});this.close(a)
};T.prototype.complete = function () {
U(this, function (a) {a.complete()});this.close()
};

  T.prototype.subscribe = function (a, b, c) {
var d = this, e;if (void 0 === a && void 0 === b && void 0 === c)throw Error("Missing Observer.");e = Ka(a) ? a : { next:a, error:b, complete:c };void 0 === e.next && (e.next = V);void 0 === e.error && (e.error = V);void 0 === e.complete && (e.complete = V);a = this.$.bind(this, this.a.length);this.l && this.task.then(function () {try {d.G ? e.error(d.G) : e.complete()}catch (a) {}});this.a.push(e);return a
};

  T.prototype.$ = function (a) {void 0 !== this.a && void 0 !== this.a[a] && (this.a[a] = void 0, --this.J, 0 === this.J && void 0 !== this.D && this.D(this))};var U = function (a, b) {if (!a.l)for (var c = 0; c < a.a.length; c++)La(a, c, b)}, La = function (a, b, c) {a.task.then(function () {if (void 0 !== a.a && void 0 !== a.a[b])try {c(a.a[b])}catch (d) {}})};T.prototype.close = function (a) {
var b = this;this.l || (this.l = !0, void 0 !== a && (this.G = a), this.task.then(function () {
b.a = void 0;b.D = void 0
}))
};

  function Ka(a) {
if ("object" !== typeof a || null === a)return !1;for (var b = ca(), c = b.next(); !c.done; c = b.next())if (c = c.value, c in a && "function" === typeof a[c])return !0;return !1
}function V() {};var W = S, X = function (a, b, c) {
var d = this;this.H = c;this.I = !1;this.i = {};this.P = {};this.C = b;this.T = P(void 0, a);Object.keys(c.INTERNAL.factories).forEach(function (a) {d[a] = d.R.bind(d, a)})
};X.prototype.delete = function () {
var a = this;return (new W(function (b) {
Y(a);b()
})).then(function () {
a.H.INTERNAL.removeApp(a.C);return W.all(Object.keys(a.i).map(function (b) {return a.i[b].INTERNAL.delete()}))
}).then(function () {
a.I = !0;a.i = null;a.P = null
})
};

  X.prototype.R = function (a) {
Y(this);void 0 === this.i[a] && (this.i[a] = this.H.INTERNAL.factories[a](this, this.O.bind(this)));return this.i[a]
};X.prototype.O = function (a) {P(this, a)};var Y = function (a) {a.I && Z(Ma("deleted", { name:a.C }))};Object.defineProperties(X.prototype, { name:{ configurable:!0, enumerable:!0, get:function () {
Y(this);return this.C
} }, options:{ configurable:!0, enumerable:!0, get:function () {
Y(this);return this.T
} } });X.prototype.name && X.prototype.options || X.prototype.delete || console.log("dc");
  function Na() {
function a(a) {
a = a || "[DEFAULT]";var c = b[a];void 0 === c && Z("noApp", { name:a });return c
}var b = {}, c = {}, d = [], e = { initializeApp:function (a, c) {
void 0 === c ? c = "[DEFAULT]" : "string" === typeof c && "" !== c || Z("bad-app-name", { name:c + "" });void 0 !== b[c] && Z("dupApp", { name:c });var g = new X(a, c, e);b[c] = g;d.forEach(function (a) {return a("create", g)});void 0 != g.INTERNAL && void 0 != g.INTERNAL.getToken || P(g, { INTERNAL:{ getToken:function () {return W.resolve(null)}, addAuthTokenListener:function () {}, removeAuthTokenListener:function () {} } });

return g
}, app:a, apps:null, Promise:W, SDK_VERSION:"0.0.0", INTERNAL:{ registerService:function (b, d, g) {
c[b] && Z("dupService", { name:b });c[b] = d;d = function (c) {
void 0 === c && (c = a());return c[b]()
};void 0 !== g && P(d, g);return e[b] = d
}, createFirebaseNamespace:Na, extendNamespace:function (a) {P(e, a)}, createSubscribe:Ja, ErrorFactory:Q, registerAppHook:function (a) {d.push(a)}, removeApp:function (a) {
d.forEach(function (c) {return c("delete", b[a])});delete b[a]
}, factories:c, Promise:O, deepExtend:P } };Object.defineProperty(e, "apps",
{ get:function () {return Object.keys(b).map(function (a) {return b[a]})} });a.App = X;return e
}function Z(a, b) {throw Error(Ma(a, b));}

function Ma(a, b) {
b = b || {};b = { noApp:"No Firebase App '" + b.name + "' has been created - call Firebase App.initializeApp().", "bad-app-name":"Illegal App name: '" + b.name + "'.", dupApp:"Firebase App named '" + b.name + "' already exists.", deleted:"Firebase App named '" + b.name + "' already deleted.", dupService:"Firebase Service named '" + b.name + "' already registered." }[a];return void 0 === b ? "Application Error: (" + a + ")" : b
};"undefined" !== typeof window && (window.firebase = Na());
 })();

firebase.SDK_VERSION = "3.1.0";
