/*! @license Firebase v3.1.0
    Build: 3.1.0-rc.3
    Terms: https://developers.google.com/terms */
(function () {
var h, aa = aa || {}, l = this, ba = function () {}, ca = function (a) {

  var b = typeof a;if ('object' == b)if (a) {
    if (a instanceof Array)return 'array';if (a instanceof Object)return b;var c = Object.prototype.toString.call(a);if ('[object Window]' == c)return 'object';if ('[object Array]' == c || 'number' == typeof a.length && 'undefined' != typeof a.splice && 'undefined' != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable('splice'))return 'array';if ('[object Function]' == c || 'undefined' != typeof a.call && 'undefined' != typeof a.propertyIsEnumerable &&
    !a.propertyIsEnumerable('call'))return 'function';
  }else return 'null';else if ('function' == b && 'undefined' == typeof a.call)return 'object';return b;
}, da = function (a) {return null === a;}, ea = function (a) {return 'array' == ca(a);}, fa = function (a) {

  var b = ca(a);return 'array' == b || 'object' == b && 'number' == typeof a.length
}, m = function (a) {return "string" == typeof a}, ga = function (a) {return "number" == typeof a}, n = function (a) {return "function" == ca(a)}, ha = function (a) {

  var b = typeof a;return "object" == b && null != a || "function" == b
}, ia = function (a,

b, c) {return a.call.apply(a.bind, arguments)}, ja = function (a, b, c) {

  if (!a)throw Error();if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);return function () {
      var c = Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c, d);return a.apply(b, c)
    }
  }return function () {return a.apply(b, arguments)}
}, p = function (a, b, c) {

  p = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ia : ja;return p.apply(null, arguments)
}, ka = function (a, b) {

  var c = Array.prototype.slice.call(arguments,

  1);return function () {
    var b = c.slice();b.push.apply(b, arguments);return a.apply(this, b)
  }
}, la = Date.now || function () {return +new Date}, q = function (a, b) {

  function c() {}c.prototype = b.prototype;a.Gc = b.prototype;a.prototype = new c;a.prototype.constructor = a;a.Fe = function (a, c, f) {

    for (var g = Array(arguments.length - 2), k = 2; k < arguments.length; k++)g[k - 2] = arguments[k];return b.prototype[c].apply(a, g)
  }
};var r = function (a) {

  if (Error.captureStackTrace)Error.captureStackTrace(this, r);else {
    var b = Error().stack;b && (this.stack = b)
  }a && (this.message = String(a))
};q(r, Error);r.prototype.name = "CustomError";var ma = function (a, b) {
  for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;)d += c.shift() + e.shift();return d + c.join("%s")
}, na = String.prototype.trim ? function (a) {return a.trim()} : function (a) {return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")}, oa = /&/g, pa = /</g, qa = />/g, ra = /"/g, sa = /'/g, ta = /\x00/g, ua = /[\x00&<>"']/, u = function (a, b) {return -1 != a.indexOf(b)}, va = function (a, b) {return a < b ? -1 : a > b ? 1 : 0};var wa = function (a, b) {

  b.unshift(a);r.call(this, ma.apply(null, b));b.shift()
};q(wa, r);wa.prototype.name = "AssertionError";

var xa = function (a, b, c, d) {
  var e = "Assertion failed";if (c)var e = e + (": " + c), f = d;else a && (e += ": " + a, f = b);throw new wa("" + e, f || []);
}, v = function (a, b, c) {a || xa("", null, b, Array.prototype.slice.call(arguments, 2))}, ya = function (a, b) {throw new wa("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));}, za = function (a, b, c) {

  ga(a) || xa("Expected number but got %s: %s.", [ca(a), a], b, Array.prototype.slice.call(arguments, 2));return a
}, Aa = function (a, b, c) {

  m(a) || xa("Expected string but got %s: %s.", [ca(a), a], b, Array.prototype.slice.call(arguments,
  2));return a
}, Ba = function (a, b, c) {n(a) || xa("Expected function but got %s: %s.", [ca(a), a], b, Array.prototype.slice.call(arguments, 2))};var Ca = Array.prototype.indexOf ? function (a, b, c) {
  v(null != a.length);return Array.prototype.indexOf.call(a, b, c)
} : function (a, b, c) {

  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;if (m(a))return m(b) && 1 == b.length ? a.indexOf(b, c) : -1;for (; c < a.length; c++)if (c in a && a[c] === b)return c;return -1
}, w = Array.prototype.forEach ? function (a, b, c) {
  v(null != a.length);Array.prototype.forEach.call(a, b, c)
} : function (a, b, c) {for (var d = a.length, e = m(a) ? a.split("") : a, f = 0; f < d; f++)f in e && b.call(c, e[f], f, a)}, Da = function (a, b) {for (var c = m(a) ?

a.split("") : a, d = a.length - 1; 0 <= d; --d)d in c && b.call(void 0, c[d], d, a)}, Ea = Array.prototype.map ? function (a, b, c) {
  v(null != a.length);return Array.prototype.map.call(a, b, c)
} : function (a, b, c) {

  for (var d = a.length, e = Array(d), f = m(a) ? a.split("") : a, g = 0; g < d; g++)g in f && (e[g] = b.call(c, f[g], g, a));return e
}, Fa = Array.prototype.some ? function (a, b, c) {
  v(null != a.length);return Array.prototype.some.call(a, b, c)
} : function (a, b, c) {

  for (var d = a.length, e = m(a) ? a.split("") : a, f = 0; f < d; f++)if (f in e && b.call(c, e[f], f, a))return !0;return !1
},

Ha = function (a) {
  var b;a: {
    b = Ga;for (var c = a.length, d = m(a) ? a.split("") : a, e = 0; e < c; e++)if (e in d && b.call(void 0, d[e], e, a)) {
      b = e;break a
    }b = -1
  }return 0 > b ? null : m(a) ? a.charAt(b) : a[b]
}, Ia = function (a, b) {return 0 <= Ca(a, b)}, Ka = function (a, b) {

  var c = Ca(a, b), d;(d = 0 <= c) && Ja(a, c);return d
}, Ja = function (a, b) {

  v(null != a.length);return 1 == Array.prototype.splice.call(a, b, 1).length
}, La = function (a, b) {

  var c = 0;Da(a, function (d, e) {b.call(void 0, d, e, a) && Ja(a, e) && c++})
}, Ma = function (a) {return Array.prototype.concat.apply(Array.prototype,

arguments)}, Na = function (a) {return Array.prototype.concat.apply(Array.prototype, arguments)}, Oa = function (a) {

  var b = a.length;if (0 < b) {
    for (var c = Array(b), d = 0; d < b; d++)c[d] = a[d];return c
  }return []
}, Pa = function (a, b) {for (var c = 1; c < arguments.length; c++) {
  var d = arguments[c];if (fa(d)) {
    var e = a.length || 0, f = d.length || 0;a.length = e + f;for (var g = 0; g < f; g++)a[e + g] = d[g]
  }else a.push(d)
}};var Qa = function (a, b) {for (var c in a)b.call(void 0, a[c], c, a)}, Ra = function (a) {

  var b = [], c = 0, d;for (d in a)b[c++] = a[d];return b
}, Sa = function (a) {

  var b = [], c = 0, d;for (d in a)b[c++] = d;return b
}, Ta = function (a) {

  for (var b in a)return !1;return !0
}, Ua = function (a, b) {

  for (var c in a)if (!(c in b) || a[c] !== b[c])return !1;for (c in b)if (!(c in a))return !1;return !0
}, Xa = function (a) {

  var b = {}, c;for (c in a)b[c] = a[c];return b
}, Ya = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),

  Za = function (a, b) {for (var c, d, e = 1; e < arguments.length; e++) {
    d = arguments[e];for (c in d)a[c] = d[c];for (var f = 0; f < Ya.length; f++)c = Ya[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
  }};var $a;a: {

    var ab = l.navigator;if (ab) {
      var bb = ab.userAgent;if (bb) {
        $a = bb;break a
      }
    }$a = ""
  }var x = function (a) {return u($a, a)};var cb = x("Opera"), y = x("Trident") || x("MSIE"), db = x("Edge"), eb = db || y, fb = x("Gecko") && !(u($a.toLowerCase(), "webkit") && !x("Edge")) && !(x("Trident") || x("MSIE")) && !x("Edge"), gb = u($a.toLowerCase(), "webkit") && !x("Edge"), hb = function () {

    var a = l.document;return a ? a.documentMode : void 0
  }, ib;

a: {
  var jb = "", kb = function () {
    var a = $a;if (fb)return /rv\:([^\);]+)(\)|;)/.exec(a);if (db)return /Edge\/([\d\.]+)/.exec(a);if (y)return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if (gb)return /WebKit\/(\S+)/.exec(a);if (cb)return /(?:Version)[ \/]?(\S+)/.exec(a)
  }();kb && (jb = kb ? kb[1] : "");if (y) {

    var lb = hb();if (null != lb && lb > parseFloat(jb)) {
      ib = String(lb);break a
    }
  }ib = jb
}

var mb = ib, nb = {}, z = function (a) {
  var b;if (!(b = nb[a])) {
    b = 0;for (var c = na(String(mb)).split("."), d = na(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
      var g = c[f] || "", k = d[f] || "", t = RegExp("(\\d*)(\\D*)", "g"), Y = RegExp("(\\d*)(\\D*)", "g");do {
        var Va = t.exec(g) || ["", "", ""], Wa = Y.exec(k) || ["", "", ""];if (0 == Va[0].length && 0 == Wa[0].length)break;b = va(0 == Va[1].length ? 0 : parseInt(Va[1], 10), 0 == Wa[1].length ? 0 : parseInt(Wa[1], 10)) || va(0 == Va[2].length, 0 == Wa[2].length) || va(Va[2], Wa[2])
      }while (0 == b)
    }b = nb[a] =

    0 <= b
  }return b
}, ob = l.document, pb = ob && y ? hb() || ("CSS1Compat" == ob.compatMode ? parseInt(mb, 10) : 5) : void 0;var qb = null, rb = null, tb = function (a) {
  var b = "";sb(a, function (a) {b += String.fromCharCode(a)});return b
}, sb = function (a, b) {

  function c(b) {
    for (; d < a.length;) {
      var c = a.charAt(d++), e = rb[c];if (null != e)return e;if (!/^[\s\xa0]*$/.test(c))throw Error("Unknown base64 encoding at char: " + c);
    }return b
  }ub();for (var d = 0;;) {

    var e = c(-1), f = c(0), g = c(64), k = c(64);if (64 === k && -1 === e)break;b(e << 2 | f >> 4);64 != g && (b(f << 4 & 240 | g >> 2), 64 != k && b(g << 6 & 192 | k))
  }
}, ub = function () {if (!qb) {

  qb = {};rb = {};for (var a = 0; 65 > a; a++)qb[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),

  rb[qb[a]] = a, 62 <= a && (rb["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)] = a)
}};var wb = function () {

  this.Xb = "";this.Dd = vb
};wb.prototype.qc = !0;wb.prototype.oc = function () {return this.Xb};wb.prototype.toString = function () {return "Const{" + this.Xb + "}"};var xb = function (a) {

  if (a instanceof wb && a.constructor === wb && a.Dd === vb)return a.Xb;ya("expected object of type Const, got '" + a + "'");return "type_error:Const"
}, vb = {};var A = function () {

  this.da = "";this.Cd = yb
};A.prototype.qc = !0;A.prototype.oc = function () {return this.da};A.prototype.toString = function () {return "SafeUrl{" + this.da + "}"};

var zb = function (a) {
  if (a instanceof A && a.constructor === A && a.Cd === yb)return a.da;ya("expected object of type SafeUrl, got '" + a + "' of type " + ca(a));return "type_error:SafeUrl"
}, Ab = /^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i, Cb = function (a) {

  if (a instanceof A)return a;a = a.qc ? a.oc() : String(a);Ab.test(a) || (a = "about:invalid#zClosurez");return Bb(a)
}, yb = {}, Bb = function (a) {

  var b = new A;b.da = a;return b
};Bb("about:blank");var Eb = function () {

  this.da = "";this.Bd = Db
};Eb.prototype.qc = !0;Eb.prototype.oc = function () {return this.da};Eb.prototype.toString = function () {return "SafeHtml{" + this.da + "}"};var Fb = function (a) {

  if (a instanceof Eb && a.constructor === Eb && a.Bd === Db)return a.da;ya("expected object of type SafeHtml, got '" + a + "' of type " + ca(a));return "type_error:SafeHtml"
}, Db = {};Eb.prototype.fe = function (a) {
  this.da = a;return this
};var Gb = function (a, b) {

  var c;c = b instanceof A ? b : Cb(b);a.href = zb(c)
};var Hb = function (a) {

  Hb[" "](a);return a
};Hb[" "] = ba;var Ib = !y || 9 <= Number(pb), Jb = y && !z("9");!gb || z("528");fb && z("1.9b") || y && z("8") || cb && z("9.5") || gb && z("528");fb && !z("8") || y && z("9");var Kb = function () {

  this.ua = this.ua;this.Nb = this.Nb
};Kb.prototype.ua = !1;Kb.prototype.isDisposed = function () {return this.ua};Kb.prototype.Ka = function () {if (this.Nb)for (; this.Nb.length;)this.Nb.shift()()};var Lb = function (a, b) {

  this.type = a;this.currentTarget = this.target = b;this.defaultPrevented = this.Sa = !1;this.nd = !0
};Lb.prototype.preventDefault = function () {
  this.defaultPrevented = !0;this.nd = !1
};var Mb = function (a, b) {

  Lb.call(this, a ? a.type : "");this.relatedTarget = this.currentTarget = this.target = null;this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;this.Cb = this.state = null;a && this.init(a, b)
};q(Mb, Lb);

Mb.prototype.init = function (a, b) {
  var c = this.type = a.type, d = a.changedTouches ? a.changedTouches[0] : null;this.target = a.target || a.srcElement;this.currentTarget = b;var e = a.relatedTarget;if (e) {if (fb) {
    var f;a: {
      try {
        Hb(e.nodeName);f = !0;break a
      }catch (g) {}f = !1
    }f || (e = null)
  }}else "mouseover" == c ? e = a.fromElement : "mouseout" == c && (e = a.toElement);this.relatedTarget = e;null === d ? (this.offsetX = gb || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = gb || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX :

  a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0);this.button = a.button;this.keyCode = a.keyCode || 0;this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);this.ctrlKey = a.ctrlKey;this.altKey = a.altKey;this.shiftKey = a.shiftKey;this.metaKey = a.metaKey;this.state = a.state;this.Cb = a;a.defaultPrevented &&
this.preventDefault()
};Mb.prototype.preventDefault = function () {
  Mb.Gc.preventDefault.call(this);var a = this.Cb;if (a.preventDefault)a.preventDefault();else if (a.returnValue = !1, Jb)try {if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)a.keyCode = -1}catch (b) {}
};var Nb = "closure_listenable_" + (1E6 * Math.random() | 0), Ob = 0;var Pb = function (a, b, c, d, e) {
  this.listener = a;this.Pb = null;this.src = b;this.type = c;this.zb = !!d;this.Ib = e;this.key = ++Ob;this.Va = this.yb = !1
}, Qb = function (a) {

  a.Va = !0;a.listener = null;a.Pb = null;a.src = null;a.Ib = null
};var Rb = function (a) {

  this.src = a;this.u = {};this.xb = 0
};Rb.prototype.add = function (a, b, c, d, e) {
  var f = a.toString();a = this.u[f];a || (a = this.u[f] = [], this.xb++);var g = Sb(a, b, d, e);-1 < g ? (b = a[g], c || (b.yb = !1)) : (b = new Pb(b, this.src, f, !!d, e), b.yb = c, a.push(b));return b
};Rb.prototype.remove = function (a, b, c, d) {
  a = a.toString();if (!(a in this.u))return !1;var e = this.u[a];b = Sb(e, b, c, d);return -1 < b ? (Qb(e[b]), Ja(e, b), 0 == e.length && (delete this.u[a], this.xb--), !0) : !1
};

var Tb = function (a, b) {
  var c = b.type;c in a.u && Ka(a.u[c], b) && (Qb(b), 0 == a.u[c].length && (delete a.u[c], a.xb--))
};Rb.prototype.nc = function (a, b, c, d) {
  a = this.u[a.toString()];var e = -1;a && (e = Sb(a, b, c, d));return -1 < e ? a[e] : null
};var Sb = function (a, b, c, d) {

  for (var e = 0; e < a.length; ++e) {
    var f = a[e];if (!f.Va && f.listener == b && f.zb == !!c && f.Ib == d)return e
  }return -1
};var Ub = "closure_lm_" + (1E6 * Math.random() | 0), Vb = {}, Wb = 0, Xb = function (a, b, c, d, e) {if (ea(b))for (var f = 0; f < b.length; f++)Xb(a, b[f], c, d, e);else c = Yb(c), a && a[Nb] ? a.listen(b, c, d, e) : Zb(a, b, c, !1, d, e)}, Zb = function (a, b, c, d, e, f) {

  if (!b)throw Error("Invalid event type");var g = !!e, k = $b(a);k || (a[Ub] = k = new Rb(a));c = k.add(b, c, d, e, f);if (!c.Pb) {
    d = ac();c.Pb = d;d.src = a;d.listener = c;if (a.addEventListener)a.addEventListener(b.toString(), d, g);else if (a.attachEvent)a.attachEvent(bc(b.toString()), d);else throw Error("addEventListener and attachEvent are unavailable.");

    Wb++
  }
}, ac = function () {

  var a = cc, b = Ib ? function (c) {return a.call(b.src, b.listener, c)} : function (c) {

    c = a.call(b.src, b.listener, c);if (!c)return c
  };return b
}, dc = function (a, b, c, d, e) {if (ea(b))for (var f = 0; f < b.length; f++)dc(a, b[f], c, d, e);else c = Yb(c), a && a[Nb] ? ec(a, b, c, d, e) : Zb(a, b, c, !0, d, e)}, fc = function (a, b, c, d, e) {if (ea(b))for (var f = 0; f < b.length; f++)fc(a, b[f], c, d, e);else c = Yb(c), a && a[Nb] ? a.T.remove(String(b), c, d, e) : a && (a = $b(a)) && (b = a.nc(b, c, !!d, e)) && gc(b)}, gc = function (a) {if (!ga(a) && a && !a.Va) {
  var b = a.src;if (b &&
  b[Nb])Tb(b.T, a);else {
    var c = a.type, d = a.Pb;b.removeEventListener ? b.removeEventListener(c, d, a.zb) : b.detachEvent && b.detachEvent(bc(c), d);Wb--;(c = $b(b)) ? (Tb(c, a), 0 == c.xb && (c.src = null, b[Ub] = null)) : Qb(a)
  }
}}, bc = function (a) {return a in Vb ? Vb[a] : Vb[a] = "on" + a}, ic = function (a, b, c, d) {

  var e = !0;if (a = $b(a))if (b = a.u[b.toString()])for (b = b.concat(), a = 0; a < b.length; a++) {
    var f = b[a];f && f.zb == c && !f.Va && (f = hc(f, d), e = e && !1 !== f)
  }return e
}, hc = function (a, b) {

  var c = a.listener, d = a.Ib || a.src;a.yb && gc(a);return c.call(d, b)
}, cc = function (a,

  b) {
  if (a.Va)return !0;if (!Ib) {
    var c;if (!(c = b))a: {
      c = ["window", "event"];for (var d = l, e; e = c.shift();)if (null != d[e])d = d[e];else {
        c = null;break a
      }c = d
    }e = c;c = new Mb(e, this);d = !0;if (!(0 > e.keyCode || void 0 != e.returnValue)) {

      a: {
        var f = !1;if (0 == e.keyCode)try {
          e.keyCode = -1;break a
        }catch (t) {f = !0}if (f || void 0 == e.returnValue)e.returnValue = !0
      }e = [];for (f = c.currentTarget; f; f = f.parentNode)e.push(f);for (var f = a.type, g = e.length - 1; !c.Sa && 0 <= g; g--) {

        c.currentTarget = e[g];var k = ic(e[g], f, !0, c), d = d && k
      }for (g = 0; !c.Sa && g < e.length; g++)c.currentTarget =

        e[g], k = ic(e[g], f, !1, c), d = d && k
    }return d
  }return hc(a, new Mb(b, this))
}, $b = function (a) {

  a = a[Ub];return a instanceof Rb ? a : null
}, jc = "__closure_events_fn_" + (1E9 * Math.random() >>> 0), Yb = function (a) {
  v(a, "Listener can not be null.");if (n(a))return a;v(a.handleEvent, "An object listener must have handleEvent method.");a[jc] || (a[jc] = function (b) {return a.handleEvent(b)});return a[jc]
};var kc = /^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;var lc = function (a) {

  a = String(a);if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")))try {return eval("(" + a + ")")}catch (b) {}throw Error("Invalid JSON string: " + a);
}, oc = function (a) {

  var b = [];mc(new nc, a, b);return b.join("")
}, nc = function () {this.Sb = void 0}, mc = function (a, b, c) {if (null ==

  b)c.push("null");else {
    if ("object" == typeof b) {
      if (ea(b)) {
      var d = b;b = d.length;c.push("[");for (var e = "", f = 0; f < b; f++)c.push(e), e = d[f], mc(a, a.Sb ? a.Sb.call(d, String(f), e) : e, c), e = ",";c.push("]");return
 }if (b instanceof String || b instanceof Number || b instanceof Boolean)b = b.valueOf();else {
      c.push("{");f = "";for (d in b)Object.prototype.hasOwnProperty.call(b, d) && (e = b[d], "function" != typeof e && (c.push(f), pc(d, c), c.push(":"), mc(a, a.Sb ? a.Sb.call(b, d, e) : e, c), f = ","));c.push("}");return
 }
    }switch (typeof b){case "string":pc(b,

    c);break;case "number":c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: " + typeof b);}
  }}, qc = { '"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b" }, rc = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g, pc = function (a, b) {b.push('"', a.replace(rc, function (a) {

    var b = qc[a];b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1),

    qc[a] = b);return b
  }), '"')};var sc = function () {};sc.prototype.Jc = null;var tc = function (a) {return a.Jc || (a.Jc = a.ad())};var uc, vc = function () {};q(vc, sc);vc.prototype.hc = function () {
    var a = wc(this);return a ? new ActiveXObject(a) : new XMLHttpRequest
  };vc.prototype.ad = function () {
    var a = {};wc(this) && (a[0] = !0, a[1] = !0);return a
  };

var wc = function (a) {
  if (!a.Xc && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
      var d = b[c];try {return new ActiveXObject(d), a.Xc = d}catch (e) {}
    }throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
  }return a.Xc
};uc = new vc;var xc = function () {};q(xc, sc);xc.prototype.hc = function () {
  var a = new XMLHttpRequest;if ("withCredentials"in a)return a;if ("undefined" != typeof XDomainRequest)return new yc;throw Error("Unsupported browser");
};xc.prototype.ad = function () {return {}};

var yc = function () {
  this.ia = new XDomainRequest;this.readyState = 0;this.responseText = this.onreadystatechange = null;this.status = -1;this.statusText = this.responseXML = null;this.ia.onload = p(this.Ud, this);this.ia.onerror = p(this.Vc, this);this.ia.onprogress = p(this.Vd, this);this.ia.ontimeout = p(this.Wd, this)
};h = yc.prototype;h.open = function (a, b, c) {
  if (null != c && !c)throw Error("Only async requests are supported.");this.ia.open(a, b)
};

h.send = function (a) {if (a)if ("string" == typeof a)this.ia.send(a);else throw Error("Only string data is supported");else this.ia.send()};h.abort = function () {this.ia.abort()};h.setRequestHeader = function () {};h.Ud = function () {
  this.status = 200;this.responseText = this.ia.responseText;zc(this, 4)
};h.Vc = function () {
  this.status = 500;this.responseText = null;zc(this, 4)
};h.Wd = function () {this.Vc()};h.Vd = function () {
  this.status = 200;zc(this, 1)
};var zc = function (a, b) {

  a.readyState = b;if (a.onreadystatechange)a.onreadystatechange()
};var B = function (a, b) {

  this.i = [];this.h = b;for (var c = !0, d = a.length - 1; 0 <= d; d--) {
    var e = a[d] | 0;c && e == b || (this.i[d] = e, c = !1)
  }
}, Ac = {}, Bc = function (a) {

  if (-128 <= a && 128 > a) {
    var b = Ac[a];if (b)return b
  }b = new B([a | 0], 0 > a ? -1 : 0);-128 <= a && 128 > a && (Ac[a] = b);return b
}, E = function (a) {

  if (isNaN(a) || !isFinite(a))return C;if (0 > a)return D(E(-a));for (var b = [], c = 1, d = 0; a >= c; d++)b[d] = a / c | 0, c *= 4294967296;return new B(b, 0)
}, Cc = function (a, b) {

  if (0 == a.length)throw Error("number format error: empty string");var c = b || 10;if (2 > c || 36 < c)throw Error("radix out of range: " +

  c);if ("-" == a.charAt(0))return D(Cc(a.substring(1), c));if (0 <= a.indexOf("-"))throw Error('number format error: interior "-" character');for (var d = E(Math.pow(c, 8)), e = C, f = 0; f < a.length; f += 8) {
    var g = Math.min(8, a.length - f), k = parseInt(a.substring(f, f + g), c);8 > g ? (g = E(Math.pow(c, g)), e = e.multiply(g).add(E(k))) : (e = e.multiply(d), e = e.add(E(k)))
  }return e
}, C = Bc(0), Dc = Bc(1), Ec = Bc(16777216), Fc = function (a) {

  if (-1 == a.h)return -Fc(D(a));for (var b = 0, c = 1, d = 0; d < a.i.length; d++)b += Gc(a, d) * c, c *= 4294967296;return b
};

B.prototype.toString = function (a) {
  a = a || 10;if (2 > a || 36 < a)throw Error("radix out of range: " + a);if (F(this))return "0";if (-1 == this.h)return "-" + D(this).toString(a);for (var b = E(Math.pow(a, 6)), c = this, d = "";;) {
    var e = Hc(c, b), c = Ic(c, e.multiply(b)), f = ((0 < c.i.length ? c.i[0] : c.h) >>> 0).toString(a), c = e;if (F(c))return f + d;for (; 6 > f.length;)f = "0" + f;d = "" + f + d
  }
};

var G = function (a, b) {return 0 > b ? 0 : b < a.i.length ? a.i[b] : a.h}, Gc = function (a, b) {

  var c = G(a, b);return 0 <= c ? c : 4294967296 + c
}, F = function (a) {

  if (0 != a.h)return !1;for (var b = 0; b < a.i.length; b++)if (0 != a.i[b])return !1;return !0
};B.prototype.Bb = function (a) {
  if (this.h != a.h)return !1;for (var b = Math.max(this.i.length, a.i.length), c = 0; c < b; c++)if (G(this, c) != G(a, c))return !1;return !0
};B.prototype.compare = function (a) {
  a = Ic(this, a);return -1 == a.h ? -1 : F(a) ? 0 : 1
};

var D = function (a) {
  for (var b = a.i.length, c = [], d = 0; d < b; d++)c[d] = ~a.i[d];return (new B(c, ~a.h)).add(Dc)
};B.prototype.add = function (a) {
  for (var b = Math.max(this.i.length, a.i.length), c = [], d = 0, e = 0; e <= b; e++) {
    var f = d + (G(this, e) & 65535) + (G(a, e) & 65535), g = (f >>> 16) + (G(this, e) >>> 16) + (G(a, e) >>> 16), d = g >>> 16, f = f & 65535, g = g & 65535;c[e] = g << 16 | f
  }return new B(c, c[c.length - 1] & -2147483648 ? -1 : 0)
};var Ic = function (a, b) {return a.add(D(b))};

B.prototype.multiply = function (a) {
  if (F(this) || F(a))return C;if (-1 == this.h)return -1 == a.h ? D(this).multiply(D(a)) : D(D(this).multiply(a));if (-1 == a.h)return D(this.multiply(D(a)));if (0 > this.compare(Ec) && 0 > a.compare(Ec))return E(Fc(this) * Fc(a));for (var b = this.i.length + a.i.length, c = [], d = 0; d < 2 * b; d++)c[d] = 0;for (d = 0; d < this.i.length; d++)for (var e = 0; e < a.i.length; e++) {
    var f = G(this, d) >>> 16, g = G(this, d) & 65535, k = G(a, e) >>> 16, t = G(a, e) & 65535;c[2 * d + 2 * e] += g * t;Jc(c, 2 * d + 2 * e);c[2 * d + 2 * e + 1] += f * t;Jc(c, 2 * d + 2 * e + 1);c[2 * d + 2 * e + 1] +=
    g * k;Jc(c, 2 * d + 2 * e + 1);c[2 * d + 2 * e + 2] += f * k;Jc(c, 2 * d + 2 * e + 2)
  }for (d = 0; d < b; d++)c[d] = c[2 * d + 1] << 16 | c[2 * d];for (d = b; d < 2 * b; d++)c[d] = 0;return new B(c, 0)
};

var Jc = function (a, b) {for (; (a[b] & 65535) != a[b];)a[b + 1] += a[b] >>> 16, a[b] &= 65535}, Hc = function (a, b) {

  if (F(b))throw Error("division by zero");if (F(a))return C;if (-1 == a.h)return -1 == b.h ? Hc(D(a), D(b)) : D(Hc(D(a), b));if (-1 == b.h)return D(Hc(a, D(b)));if (30 < a.i.length) {
    if (-1 == a.h || -1 == b.h)throw Error("slowDivide_ only works with positive integers.");for (var c = Dc, d = b; 0 >= d.compare(a);)c = c.shiftLeft(1), d = d.shiftLeft(1);for (var e = Kc(c, 1), f = Kc(d, 1), g, d = Kc(d, 2), c = Kc(c, 2); !F(d);)g = f.add(d), 0 >= g.compare(a) && (e = e.add(c),
    f = g), d = Kc(d, 1), c = Kc(c, 1);return e
  }c = C;for (d = a; 0 <= d.compare(b);) {

    e = Math.max(1, Math.floor(Fc(d) / Fc(b)));f = Math.ceil(Math.log(e) / Math.LN2);f = 48 >= f ? 1 : Math.pow(2, f - 48);g = E(e);for (var k = g.multiply(b); -1 == k.h || 0 < k.compare(d);)e -= f, g = E(e), k = g.multiply(b);F(g) && (g = Dc);c = c.add(g);d = Ic(d, k)
  }return c
}, Lc = function (a, b) {

  for (var c = Math.max(a.i.length, b.i.length), d = [], e = 0; e < c; e++)d[e] = G(a, e) | G(b, e);return new B(d, a.h | b.h)
};

B.prototype.shiftLeft = function (a) {
  var b = a >> 5;a %= 32;for (var c = this.i.length + b + (0 < a ? 1 : 0), d = [], e = 0; e < c; e++)d[e] = 0 < a ? G(this, e - b) << a | G(this, e - b - 1) >>> 32 - a : G(this, e - b);return new B(d, this.h)
};var Kc = function (a, b) {

  for (var c = b >> 5, d = b % 32, e = a.i.length - c, f = [], g = 0; g < e; g++)f[g] = 0 < d ? G(a, g + c) >>> d | G(a, g + c + 1) << 32 - d : G(a, g + c);return new B(f, a.h)
};var Mc = function (a, b) {

  this.jb = a;this.ha = b
};Mc.prototype.Bb = function (a) {return this.ha == a.ha && this.jb.Bb(Xa(a.jb))};

var Pc = function (a) {try {
  var b;if (b = 0 == a.lastIndexOf("[", 0)) {
    var c = a.length - 1;b = 0 <= c && a.indexOf("]", c) == c
  }return b ? new Nc(a.substring(1, a.length - 1)) : new Oc(a)
}catch (d) {return null}}, Oc = function (a) {

  var b = C;if (a instanceof B) {
    if (0 != a.h || 0 > a.compare(C) || 0 < a.compare(Qc))throw Error("The address does not look like an IPv4.");b = Xa(a)
  }else {
    if (!Rc.test(a))throw Error(a + " does not look like an IPv4 address.");var c = a.split(".");if (4 != c.length)throw Error(a + " does not look like an IPv4 address.");for (var d = 0; d <

    c.length; d++) {
      var e;e = c[d];var f = Number(e);e = 0 == f && /^[\s\xa0]*$/.test(e) ? NaN : f;if (isNaN(e) || 0 > e || 255 < e || 1 != c[d].length && 0 == c[d].lastIndexOf("0", 0))throw Error("In " + a + ", octet " + d + " is not valid");e = E(e);b = Lc(b.shiftLeft(8), e)
    }
  }Mc.call(this, b, 4)
};q(Oc, Mc);var Rc = /^[0-9.]*$/, Qc = Ic(Dc.shiftLeft(32), Dc);Oc.prototype.toString = function () {
  if (this.ya)return this.ya;for (var a = Gc(this.jb, 0), b = [], c = 3; 0 <= c; c--)b[c] = String(a & 255), a >>>= 8;return this.ya = b.join(".")
};

var Nc = function (a) {
  var b = C;if (a instanceof B) {
    if (0 != a.h || 0 > a.compare(C) || 0 < a.compare(Sc))throw Error("The address does not look like a valid IPv6.");b = Xa(a)
  }else {
    if (!Tc.test(a))throw Error(a + " is not a valid IPv6 address.");var c = a.split(":");if (-1 != c[c.length - 1].indexOf(".")) {
      a = Gc(Xa((new Oc(c[c.length - 1])).jb), 0);var d = [];d.push((a >>> 16 & 65535).toString(16));d.push((a & 65535).toString(16));Ja(c, c.length - 1);Pa(c, d);a = c.join(":")
    }d = a.split("::");if (2 < d.length || 1 == d.length && 8 != c.length)throw Error(a +

    " is not a valid IPv6 address.");if (1 < d.length) {
      c = d[0].split(":");d = d[1].split(":");1 == c.length && "" == c[0] && (c = []);1 == d.length && "" == d[0] && (d = []);var e = 8 - (c.length + d.length);if (1 > e)c = [];else {
        for (var f = [], g = 0; g < e; g++)f[g] = "0";c = Na(c, f, d)
      }
    }if (8 != c.length)throw Error(a + " is not a valid IPv6 address");for (d = 0; d < c.length; d++) {

      e = Cc(c[d], 16);if (0 > e.compare(C) || 0 < e.compare(Uc))throw Error(c[d] + " in " + a + " is not a valid hextet.");b = Lc(b.shiftLeft(16), e)
    }
  }Mc.call(this, b, 6)
};q(Nc, Mc);

var Tc = /^([a-fA-F0-9]*:){2}[a-fA-F0-9:.]*$/, Uc = Bc(65535), Sc = Ic(Dc.shiftLeft(128), Dc);Nc.prototype.toString = function () {
  if (this.ya)return this.ya;for (var a = [], b = 3; 0 <= b; b--) {
    var c = Gc(this.jb, b), d = c & 65535;a.push((c >>> 16).toString(16));a.push(d.toString(16))
  }for (var c = b = -1, e = d = 0, f = 0; f < a.length; f++)"0" == a[f] ? (e++, -1 == c && (c = f), e > d && (d = e, b = c)) : (c = -1, e = 0);0 < d && (b + d == a.length && a.push(""), a.splice(b, d, ""), 0 == b && (a = [""].concat(a)));return this.ya = a.join(":")
};!fb && !y || y && 9 <= Number(pb) || fb && z("1.9.1");y && z("9");var Wc = function (a, b) {Qa(b, function (b, d) {"style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : Vc.hasOwnProperty(d) ? a.setAttribute(Vc[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b})}, Vc = { cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", nonce:"nonce", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width" };var Xc = function (a, b, c) {

  this.he = c;this.Jd = a;this.re = b;this.Mb = 0;this.Jb = null
};Xc.prototype.get = function () {
  var a;0 < this.Mb ? (this.Mb--, a = this.Jb, this.Jb = a.next, a.next = null) : a = this.Jd();return a
};Xc.prototype.put = function (a) {
  this.re(a);this.Mb < this.he && (this.Mb++, a.next = this.Jb, this.Jb = a)
};var Yc = function (a) {l.setTimeout(function () {throw a;}, 0)}, Zc, $c = function () {

  var a = l.MessageChannel;"undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !x("Presto") && (a = function () {
    var a = document.createElement("IFRAME");a.style.display = "none";a.src = "";document.documentElement.appendChild(a);var b = a.contentWindow, a = b.document;a.open();a.write("");a.close();var c = "callImmediate" + Math.random(), d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host,

    a = p(function (a) {if (("*" == d || a.origin == d) && a.data == c)this.port1.onmessage()}, this);b.addEventListener("message", a, !1);this.port1 = {};this.port2 = { postMessage:function () {b.postMessage(c, d)} }
  });if ("undefined" !== typeof a && !x("Trident") && !x("MSIE")) {

    var b = new a, c = {}, d = c;b.port1.onmessage = function () {if (void 0 !== c.next) {
      c = c.next;var a = c.Nc;c.Nc = null;a()
    }};return function (a) {

      d.next = { Nc:a };d = d.next;b.port2.postMessage(0)
    }
  }return "undefined" !== typeof document && "onreadystatechange"in document.createElement("SCRIPT") ?

function (a) {
  var b = document.createElement("SCRIPT");b.onreadystatechange = function () {
    b.onreadystatechange = null;b.parentNode.removeChild(b);b = null;a();a = null
  };document.documentElement.appendChild(b)
} : function (a) {l.setTimeout(a, 0)}
};var ad = function () {this.ac = this.Ga = null}, cd = new Xc(function () {return new bd}, function (a) {a.reset()}, 100);ad.prototype.add = function (a, b) {
  var c = cd.get();c.set(a, b);this.ac ? this.ac.next = c : (v(!this.Ga), this.Ga = c);this.ac = c
};ad.prototype.remove = function () {
  var a = null;this.Ga && (a = this.Ga, this.Ga = this.Ga.next, this.Ga || (this.ac = null), a.next = null);return a
};var bd = function () {this.next = this.scope = this.mc = null};bd.prototype.set = function (a, b) {
  this.mc = a;this.scope = b;this.next = null
};

bd.prototype.reset = function () {this.next = this.scope = this.mc = null};var hd = function (a, b) {

  dd || ed();fd || (dd(), fd = !0);gd.add(a, b)
}, dd, ed = function () {if (l.Promise && l.Promise.resolve) {
  var a = l.Promise.resolve(void 0);dd = function () {a.then(id)}
}else dd = function () {
  var a = id;!n(l.setImmediate) || l.Window && l.Window.prototype && !x("Edge") && l.Window.prototype.setImmediate == l.setImmediate ? (Zc || (Zc = $c()), Zc(a)) : l.setImmediate(a)
}}, fd = !1, gd = new ad, id = function () {

  for (var a; a = gd.remove();) {
    try {a.mc.call(a.scope)}catch (b) {Yc(b)}cd.put(a)
  }fd = !1
};var jd = function (a) {

  a.prototype.then = a.prototype.then;a.prototype.$goog_Thenable = !0
}, kd = function (a) {

  if (!a)return !1;try {return !!a.$goog_Thenable}catch (b) {return !1}
};var H = function (a, b) {

  this.A = 0;this.fa = void 0;this.Ja = this.aa = this.m = null;this.Hb = this.lc = !1;if (a != ba)try {
    var c = this;a.call(b, function (a) {ld(c, 2, a)}, function (a) {

      if (!(a instanceof md))try {
        if (a instanceof Error)throw a;throw Error("Promise rejected.");
      }catch (b) {}ld(c, 3, a)
    })
  }catch (d) {ld(this, 3, d)}
}, nd = function () {

  this.next = this.context = this.Pa = this.za = this.child = null;this.bb = !1
};nd.prototype.reset = function () {
  this.context = this.Pa = this.za = this.child = null;this.bb = !1
};

var od = new Xc(function () {return new nd}, function (a) {a.reset()}, 100), pd = function (a, b, c) {

  var d = od.get();d.za = a;d.Pa = b;d.context = c;return d
}, I = function (a) {

  if (a instanceof H)return a;var b = new H(ba);ld(b, 2, a);return b
}, J = function (a) {return new H(function (b, c) {c(a)})}, rd = function (a, b, c) {qd(a, b, c, null) || hd(ka(b, a))}, sd = function (a) {return new H(function (b) {

  var c = a.length, d = [];if (c)for (var e = function (a, e, f) {
    c--;d[a] = e ? { Sd:!0, value:f } : { Sd:!1, reason:f };0 == c && b(d)
  }, f = 0, g; f < a.length; f++)g = a[f], rd(g, ka(e, f, !0),
  ka(e, f, !1));else b(d)
})};H.prototype.then = function (a, b, c) {
  null != a && Ba(a, "opt_onFulfilled should be a function.");null != b && Ba(b, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");return td(this, n(a) ? a : null, n(b) ? b : null, c)
};jd(H);var vd = function (a, b) {

  var c = pd(b, b, void 0);c.bb = !0;ud(a, c);return a
};H.prototype.N = function (a, b) {return td(this, null, a, b)};H.prototype.cancel = function (a) {0 == this.A && hd(function () {
  var b = new md(a);wd(this, b)
}, this)};

var wd = function (a, b) {if (0 == a.A)if (a.m) {
  var c = a.m;if (c.aa) {
    for (var d = 0, e = null, f = null, g = c.aa; g && (g.bb || (d++, g.child == a && (e = g), !(e && 1 < d))); g = g.next)e || (f = g);e && (0 == c.A && 1 == d ? wd(c, b) : (f ? (d = f, v(c.aa), v(null != d), d.next == c.Ja && (c.Ja = d), d.next = d.next.next) : xd(c), yd(c, e, 3, b)))
  }a.m = null
}else ld(a, 3, b)}, ud = function (a, b) {

  a.aa || 2 != a.A && 3 != a.A || zd(a);v(null != b.za);a.Ja ? a.Ja.next = b : a.aa = b;a.Ja = b
}, td = function (a, b, c, d) {

  var e = pd(null, null, null);e.child = new H(function (a, g) {
    e.za = b ? function (c) {try {
      var e = b.call(d, c);a(e)
    }catch (Y) {g(Y)}} :

    a;e.Pa = c ? function (b) {try {
      var e = c.call(d, b);void 0 === e && b instanceof md ? g(b) : a(e)
    }catch (Y) {g(Y)}} : g
  });e.child.m = a;ud(a, e);return e.child
};H.prototype.Be = function (a) {
  v(1 == this.A);this.A = 0;ld(this, 2, a)
};H.prototype.Ce = function (a) {
  v(1 == this.A);this.A = 0;ld(this, 3, a)
};

var ld = function (a, b, c) {0 == a.A && (a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself")), a.A = 1, qd(c, a.Be, a.Ce, a) || (a.fa = c, a.A = b, a.m = null, zd(a), 3 != b || c instanceof md || Ad(a, c)))}, qd = function (a, b, c, d) {

  if (a instanceof H)return null != b && Ba(b, "opt_onFulfilled should be a function."), null != c && Ba(c, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"), ud(a, pd(b || ba, c || null, d)), !0;if (kd(a))return a.then(b, c, d), !0;if (ha(a))try {
    var e = a.then;if (n(e))return Bd(a,
    e, b, c, d), !0
  }catch (f) {return c.call(d, f), !0}return !1
}, Bd = function (a, b, c, d, e) {

  var f = !1, g = function (a) {f || (f = !0, c.call(e, a))}, k = function (a) {f || (f = !0, d.call(e, a))};try {b.call(a, g, k)}catch (t) {k(t)}
}, zd = function (a) {a.lc || (a.lc = !0, hd(a.Nd, a))}, xd = function (a) {

  var b = null;a.aa && (b = a.aa, a.aa = b.next, b.next = null);a.aa || (a.Ja = null);null != b && v(null != b.za);return b
};H.prototype.Nd = function () {
  for (var a; a = xd(this);)yd(this, a, this.A, this.fa);this.lc = !1
};

var yd = function (a, b, c, d) {
  if (3 == c && b.Pa && !b.bb)for (; a && a.Hb; a = a.m)a.Hb = !1;if (b.child)b.child.m = null, Cd(b, c, d);else try {b.bb ? b.za.call(b.context) : Cd(b, c, d)}catch (e) {Dd.call(null, e)}od.put(b)
}, Cd = function (a, b, c) {2 == b ? a.za.call(a.context, c) : a.Pa && a.Pa.call(a.context, c)}, Ad = function (a, b) {

  a.Hb = !0;hd(function () {a.Hb && Dd.call(null, b)})
}, Dd = Yc, md = function (a) {r.call(this, a)};q(md, r);md.prototype.name = "cancel";/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
var Ed = function (a, b) {
  this.Tb = [];this.gd = a;this.Pc = b || null;this.gb = this.Ma = !1;this.fa = void 0;this.Ec = this.Ic = this.ec = !1;this.Zb = 0;this.m = null;this.fc = 0
};Ed.prototype.cancel = function (a) {if (this.Ma)this.fa instanceof Ed && this.fa.cancel();else {
  if (this.m) {
    var b = this.m;delete this.m;a ? b.cancel(a) : (b.fc--, 0 >= b.fc && b.cancel())
  }this.gd ? this.gd.call(this.Pc, this) : this.Ec = !0;this.Ma || Fd(this, new Gd)
}};Ed.prototype.Oc = function (a, b) {

  this.ec = !1;Hd(this, a, b)
};

var Hd = function (a, b, c) {
  a.Ma = !0;a.fa = c;a.gb = !b;Id(a)
}, Kd = function (a) {if (a.Ma) {
  if (!a.Ec)throw new Jd;a.Ec = !1
}};Ed.prototype.callback = function (a) {

  Kd(this);Ld(a);Hd(this, !0, a)
};var Fd = function (a, b) {

  Kd(a);Ld(b);Hd(a, !1, b)
}, Ld = function (a) {v(!(a instanceof Ed), "An execution sequence may not be initiated with a blocking Deferred.")}, Nd = function (a, b) {Md(a, null, b, void 0)}, Md = function (a, b, c, d) {

  v(!a.Ic, "Blocking Deferreds can not be re-used");a.Tb.push([b, c, d]);a.Ma && Id(a)
};

Ed.prototype.then = function (a, b, c) {
  var d, e, f = new H(function (a, b) {
    d = a;e = b
  });Md(this, d, function (a) {a instanceof Gd ? f.cancel() : e(a)});return f.then(a, b, c)
};jd(Ed);

var Od = function (a) {return Fa(a.Tb, function (a) {return n(a[1])})}, Id = function (a) {

  if (a.Zb && a.Ma && Od(a)) {
    var b = a.Zb, c = Pd[b];c && (l.clearTimeout(c.hb), delete Pd[b]);a.Zb = 0
  }a.m && (a.m.fc--, delete a.m);for (var b = a.fa, d = c = !1; a.Tb.length && !a.ec;) {

    var e = a.Tb.shift(), f = e[0], g = e[1], e = e[2];if (f = a.gb ? g : f)try {
      var k = f.call(e || a.Pc, b);void 0 !== k && (a.gb = a.gb && (k == b || k instanceof Error), a.fa = b = k);if (kd(b) || "function" === typeof l.Promise && b instanceof l.Promise)d = !0, a.ec = !0
    }catch (t) {b = t, a.gb = !0, Od(a) || (c = !0)}
  }a.fa = b;d &&

  (k = p(a.Oc, a, !0), d = p(a.Oc, a, !1), b instanceof Ed ? (Md(b, k, d), b.Ic = !0) : b.then(k, d));c && (b = new Qd(b), Pd[b.hb] = b, a.Zb = b.hb)
}, Jd = function () {r.call(this)};q(Jd, r);Jd.prototype.message = "Deferred has already fired";Jd.prototype.name = "AlreadyCalledError";var Gd = function () {r.call(this)};q(Gd, r);Gd.prototype.message = "Deferred was canceled";Gd.prototype.name = "CanceledError";var Qd = function (a) {
  this.hb = l.setTimeout(p(this.Ae, this), 0);this.F = a
};

Qd.prototype.Ae = function () {
  v(Pd[this.hb], "Cannot throw an error that is not scheduled.");delete Pd[this.hb];throw this.F;
};var Pd = {};var Vd = function (a) {

  var b = {}, c = b.document || document, d = document.createElement("SCRIPT"), e = { od:d, wb:void 0 }, f = new Ed(Rd, e), g = null, k = null != b.timeout ? b.timeout : 5E3;0 < k && (g = window.setTimeout(function () {
    Sd(d, !0);Fd(f, new Td(1, "Timeout reached for loading script " + a))
  }, k), e.wb = g);d.onload = d.onreadystatechange = function () {d.readyState && "loaded" != d.readyState && "complete" != d.readyState || (Sd(d, b.Ge || !1, g), f.callback(null))};d.onerror = function () {
    Sd(d, !0, g);Fd(f, new Td(0, "Error while loading script " + a))
  };e = b.attributes ||
  {};Za(e, { type:"text/javascript", charset:"UTF-8", src:a });Wc(d, e);Ud(c).appendChild(d);return f
}, Ud = function (a) {

  var b = a.getElementsByTagName("HEAD");return b && 0 != b.length ? b[0] : a.documentElement
}, Rd = function () {if (this && this.od) {
  var a = this.od;a && "SCRIPT" == a.tagName && Sd(a, !0, this.wb)
}}, Sd = function (a, b, c) {

  null != c && l.clearTimeout(c);a.onload = ba;a.onerror = ba;a.onreadystatechange = ba;b && window.setTimeout(function () {a && a.parentNode && a.parentNode.removeChild(a)}, 0)
}, Td = function (a, b) {

  var c = "Jsloader error (code #" +

  a + ")";b && (c += ": " + b);r.call(this, c);this.code = a
};q(Td, r);var Wd = function () {

  Kb.call(this);this.T = new Rb(this);this.Fd = this;this.uc = null
};q(Wd, Kb);Wd.prototype[Nb] = !0;h = Wd.prototype;h.addEventListener = function (a, b, c, d) {Xb(this, a, b, c, d)};h.removeEventListener = function (a, b, c, d) {fc(this, a, b, c, d)};

h.dispatchEvent = function (a) {
  Xd(this);var b, c = this.uc;if (c) {
    b = [];for (var d = 1; c; c = c.uc)b.push(c), v(1E3 > ++d, "infinite loop")
  }c = this.Fd;d = a.type || a;if (m(a))a = new Lb(a, c);else if (a instanceof Lb)a.target = a.target || c;else {
    var e = a;a = new Lb(d, c);Za(a, e)
  }var e = !0, f;if (b)for (var g = b.length - 1; !a.Sa && 0 <= g; g--)f = a.currentTarget = b[g], e = Yd(f, d, !0, a) && e;a.Sa || (f = a.currentTarget = c, e = Yd(f, d, !0, a) && e, a.Sa || (e = Yd(f, d, !1, a) && e));if (b)for (g = 0; !a.Sa && g < b.length; g++)f = a.currentTarget = b[g], e = Yd(f, d, !1, a) && e;return e
};

h.Ka = function () {
  Wd.Gc.Ka.call(this);if (this.T) {
    var a = this.T, b = 0, c;for (c in a.u) {
      for (var d = a.u[c], e = 0; e < d.length; e++)++b, Qb(d[e]);delete a.u[c];a.xb--
    }
  }this.uc = null
};h.listen = function (a, b, c, d) {
  Xd(this);return this.T.add(String(a), b, !1, c, d)
};

var ec = function (a, b, c, d, e) {a.T.add(String(b), c, !0, d, e)}, Yd = function (a, b, c, d) {

  b = a.T.u[String(b)];if (!b)return !0;b = b.concat();for (var e = !0, f = 0; f < b.length; ++f) {
    var g = b[f];if (g && !g.Va && g.zb == c) {
      var k = g.listener, t = g.Ib || g.src;g.yb && Tb(a.T, g);e = !1 !== k.call(t, d) && e
    }
  }return e && 0 != d.nd
};Wd.prototype.nc = function (a, b, c, d) {return this.T.nc(String(a), b, c, d)};var Xd = function (a) {v(a.T, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")};var Zd = "StopIteration"in l ? l.StopIteration : { message:"StopIteration", stack:"" }, $d = function () {};$d.prototype.next = function () {throw Zd;};$d.prototype.ab = function () {return this};

var ae = function (a) {
  if (a instanceof $d)return a;if ("function" == typeof a.ab)return a.ab(!1);if (fa(a)) {
    var b = 0, c = new $d;c.next = function () {for (;;) {
      if (b >= a.length)throw Zd;if (b in a)return a[b++];b++
    }};return c
  }throw Error("Not implemented");
}, be = function (a, b) {if (fa(a))try {w(a, b, void 0)}catch (c) {if (c !== Zd)throw c;}else {

  a = ae(a);try {for (;;)b.call(void 0, a.next(), void 0, a)}catch (c) {if (c !== Zd)throw c;}
}};var ce = function (a, b) {

  this.U = {};this.o = [];this.ha = this.j = 0;var c = arguments.length;if (1 < c) {
    if (c % 2)throw Error("Uneven number of arguments");for (var d = 0; d < c; d += 2)this.set(arguments[d], arguments[d + 1])
  }else a && this.addAll(a)
};h = ce.prototype;h.Eb = function () {return this.j};h.O = function () {
  de(this);for (var a = [], b = 0; b < this.o.length; b++)a.push(this.U[this.o[b]]);return a
};h.ba = function () {
  de(this);return this.o.concat()
};h.eb = function (a) {return ee(this.U, a)};

h.Bb = function (a, b) {
  if (this === a)return !0;if (this.j != a.Eb())return !1;var c = b || fe;de(this);for (var d, e = 0; d = this.o[e]; e++)if (!c(this.get(d), a.get(d)))return !1;return !0
};var fe = function (a, b) {return a === b};ce.prototype.remove = function (a) {return ee(this.U, a) ? (delete this.U[a], this.j--, this.ha++, this.o.length > 2 * this.j && de(this), !0) : !1};

var de = function (a) {
  if (a.j != a.o.length) {
    for (var b = 0, c = 0; b < a.o.length;) {
      var d = a.o[b];ee(a.U, d) && (a.o[c++] = d);b++
    }a.o.length = c
  }if (a.j != a.o.length) {

    for (var e = {}, c = b = 0; b < a.o.length;)d = a.o[b], ee(e, d) || (a.o[c++] = d, e[d] = 1), b++;a.o.length = c
  }
};h = ce.prototype;h.get = function (a, b) {return ee(this.U, a) ? this.U[a] : b};h.set = function (a, b) {
  ee(this.U, a) || (this.j++, this.o.push(a), this.ha++);this.U[a] = b
};

h.addAll = function (a) {
  var b;a instanceof ce ? (b = a.ba(), a = a.O()) : (b = Sa(a), a = Ra(a));for (var c = 0; c < b.length; c++)this.set(b[c], a[c])
};h.forEach = function (a, b) {for (var c = this.ba(), d = 0; d < c.length; d++) {
  var e = c[d], f = this.get(e);a.call(b, f, e, this)
}};h.clone = function () {return new ce(this)};h.ab = function (a) {

  de(this);var b = 0, c = this.ha, d = this, e = new $d;e.next = function () {
    if (c != d.ha)throw Error("The map has changed since the iterator was created");if (b >= d.o.length)throw Zd;var e = d.o[b++];return a ? e : d.U[e]
  };return e
};

var ee = function (a, b) {return Object.prototype.hasOwnProperty.call(a, b)};var ge = function (a) {

  if (a.O && "function" == typeof a.O)return a.O();if (m(a))return a.split("");if (fa(a)) {
    for (var b = [], c = a.length, d = 0; d < c; d++)b.push(a[d]);return b
  }return Ra(a)
}, he = function (a) {

  if (a.ba && "function" == typeof a.ba)return a.ba();if (!a.O || "function" != typeof a.O) {
    if (fa(a) || m(a)) {
      var b = [];a = a.length;for (var c = 0; c < a; c++)b.push(c);return b
    }return Sa(a)
  }
}, ie = function (a, b) {if (a.forEach && "function" == typeof a.forEach)a.forEach(b, void 0);else if (fa(a) || m(a))w(a, b, void 0);else for (var c = he(a), d = ge(a), e =
d.length, f = 0; f < e; f++)b.call(void 0, d[f], c && c[f], a)};var je = function (a, b, c, d, e) {this.reset(a, b, c, d, e)};je.prototype.Rc = null;var ke = 0;je.prototype.reset = function (a, b, c, d, e) {
  "number" == typeof e || ke++;d || la();this.mb = a;this.je = b;delete this.Rc
};je.prototype.qd = function (a) {this.mb = a};var le = function (a) {

  this.ke = a;this.Wc = this.gc = this.mb = this.m = null
}, me = function (a, b) {

  this.name = a;this.value = b
};me.prototype.toString = function () {return this.name};var ne = new me("SEVERE", 1E3), oe = new me("CONFIG", 700), pe = new me("FINE", 500);le.prototype.getParent = function () {return this.m};le.prototype.qd = function (a) {this.mb = a};var qe = function (a) {

  if (a.mb)return a.mb;if (a.m)return qe(a.m);ya("Root logger has no level set.");return null
};

le.prototype.log = function (a, b, c) {if (a.value >= qe(this).value)for (n(b) && (b = b()), a = new je(a, String(b), this.ke), c && (a.Rc = c), c = "log:" + a.je, l.console && (l.console.timeStamp ? l.console.timeStamp(c) : l.console.markTimeline && l.console.markTimeline(c)), l.msWriteProfilerMark && l.msWriteProfilerMark(c), c = this; c;) {
  b = c;var d = a;if (b.Wc)for (var e = 0, f; f = b.Wc[e]; e++)f(d);c = c.getParent()
}};

var re = {}, se = null, te = function (a) {
  se || (se = new le(""), re[""] = se, se.qd(oe));var b;if (!(b = re[a])) {
    b = new le(a);var c = a.lastIndexOf("."), d = a.substr(c + 1), c = te(a.substr(0, c));c.gc || (c.gc = {});c.gc[d] = b;b.m = c;re[a] = b
  }return b
};var K = function (a, b) {a && a.log(pe, b, void 0)};var ue = function (a, b, c) {

  if (n(a))c && (a = p(a, c));else if (a && "function" == typeof a.handleEvent)a = p(a.handleEvent, a);else throw Error("Invalid listener argument");return 2147483647 < Number(b) ? -1 : l.setTimeout(a, b || 0)
}, ve = function (a) {

  var b = null;return (new H(function (c, d) {
    b = ue(function () {c(void 0)}, a);-1 == b && d(Error("Failed to schedule timer."))
  })).N(function (a) {
    l.clearTimeout(b);throw a;
  })
};var we = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/, xe = function (a, b) {if (a)for (var c = a.split("&"), d = 0; d < c.length; d++) {
  var e = c[d].indexOf("="), f, g = null;0 <= e ? (f = c[d].substring(0, e), g = c[d].substring(e + 1)) : f = c[d];b(f, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
}};var L = function (a) {

  Wd.call(this);this.headers = new ce;this.cc = a || null;this.ja = !1;this.bc = this.a = null;this.lb = this.cd = this.Lb = "";this.xa = this.rc = this.Kb = this.kc = !1;this.Ya = 0;this.Yb = null;this.md = "";this.$b = this.qe = this.xd = !1
};q(L, Wd);var ye = L.prototype, ze = te("goog.net.XhrIo");ye.K = ze;var Ae = /^https?$/i, Be = ["POST", "PUT"];

L.prototype.send = function (a, b, c, d) {
  if (this.a)throw Error("[goog.net.XhrIo] Object is active with another request=" + this.Lb + "; newUri=" + a);b = b ? b.toUpperCase() : "GET";this.Lb = a;this.lb = "";this.cd = b;this.kc = !1;this.ja = !0;this.a = this.cc ? this.cc.hc() : uc.hc();this.bc = this.cc ? tc(this.cc) : tc(uc);this.a.onreadystatechange = p(this.jd, this);this.qe && "onprogress"in this.a && (this.a.onprogress = p(function (a) {this.hd(a, !0)}, this), this.a.upload && (this.a.upload.onprogress = p(this.hd, this)));try {K(this.K, Ce(this, "Opening Xhr")),
this.rc = !0, this.a.open(b, String(a), !0), this.rc = !1}catch (f) {
K(this.K, Ce(this, "Error opening Xhr: " + f.message));this.F(5, f);return
 }a = c || "";var e = this.headers.clone();d && ie(d, function (a, b) {e.set(b, a)});d = Ha(e.ba());c = l.FormData && a instanceof l.FormData;!Ia(Be, b) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");e.forEach(function (a, b) {this.a.setRequestHeader(b, a)}, this);this.md && (this.a.responseType = this.md);"withCredentials"in this.a && this.a.withCredentials !== this.xd && (this.a.withCredentials =

  this.xd);try {De(this), 0 < this.Ya && (this.$b = Ee(this.a), K(this.K, Ce(this, "Will abort after " + this.Ya + "ms if incomplete, xhr2 " + this.$b)), this.$b ? (this.a.timeout = this.Ya, this.a.ontimeout = p(this.wb, this)) : this.Yb = ue(this.wb, this.Ya, this)), K(this.K, Ce(this, "Sending request")), this.Kb = !0, this.a.send(a), this.Kb = !1}catch (f) {K(this.K, Ce(this, "Send error: " + f.message)), this.F(5, f)}
};var Ee = function (a) {return y && z(9) && ga(a.timeout) && void 0 !== a.ontimeout}, Ga = function (a) {return "content-type" == a.toLowerCase()};

L.prototype.wb = function () {"undefined" != typeof aa && this.a && (this.lb = "Timed out after " + this.Ya + "ms, aborting", K(this.K, Ce(this, this.lb)), this.dispatchEvent("timeout"), this.abort(8))};L.prototype.F = function (a, b) {
  this.ja = !1;this.a && (this.xa = !0, this.a.abort(), this.xa = !1);this.lb = b;Fe(this);Ge(this)
};var Fe = function (a) {a.kc || (a.kc = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))};

L.prototype.abort = function () {this.a && this.ja && (K(this.K, Ce(this, "Aborting")), this.ja = !1, this.xa = !0, this.a.abort(), this.xa = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Ge(this))};L.prototype.Ka = function () {
  this.a && (this.ja && (this.ja = !1, this.xa = !0, this.a.abort(), this.xa = !1), Ge(this, !0));L.Gc.Ka.call(this)
};L.prototype.jd = function () {this.isDisposed() || (this.rc || this.Kb || this.xa ? He(this) : this.oe())};L.prototype.oe = function () {He(this)};

var He = function (a) {if (a.ja && "undefined" != typeof aa)if (a.bc[1] && 4 == Ie(a) && 2 == Je(a))K(a.K, Ce(a, "Local request error detected and ignored"));else if (a.Kb && 4 == Ie(a))ue(a.jd, 0, a);else if (a.dispatchEvent("readystatechange"), 4 == Ie(a)) {
  K(a.K, Ce(a, "Request complete"));a.ja = !1;try {
    var b = Je(a), c;a:switch (b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c = !0;break a;default:c = !1}var d;if (!(d = c)) {
      var e;if (e = 0 === b) {
        var f = String(a.Lb).match(we)[1] || null;if (!f && l.self && l.self.location)var g = l.self.location.protocol,
        f = g.substr(0, g.length - 1);e = !Ae.test(f ? f.toLowerCase() : "")
      }d = e
    }if (d)a.dispatchEvent("complete"), a.dispatchEvent("success");else {
      var k;try {k = 2 < Ie(a) ? a.a.statusText : ""}catch (t) {K(a.K, "Can not get status: " + t.message), k = ""}a.lb = k + " [" + Je(a) + "]";Fe(a)
    }
  }finally {Ge(a)}
}};L.prototype.hd = function (a, b) {

  v("progress" === a.type, "goog.net.EventType.PROGRESS is of the same type as raw XHR progress.");this.dispatchEvent(Ke(a, "progress"));this.dispatchEvent(Ke(a, b ? "downloadprogress" : "uploadprogress"))
};

var Ke = function (a, b) {return { type:b, lengthComputable:a.lengthComputable, loaded:a.loaded, total:a.total }}, Ge = function (a, b) {if (a.a) {
  De(a);var c = a.a, d = a.bc[0] ? ba : null;a.a = null;a.bc = null;b || a.dispatchEvent("ready");try {c.onreadystatechange = d}catch (e) {(c = a.K) && c.log(ne, "Problem encountered resetting onreadystatechange: " + e.message, void 0)}
}}, De = function (a) {

  a.a && a.$b && (a.a.ontimeout = null);ga(a.Yb) && (l.clearTimeout(a.Yb), a.Yb = null)
}, Ie = function (a) {return a.a ? a.a.readyState : 0}, Je = function (a) {try {return 2 < Ie(a) ?

a.a.status : -1}catch (b) {return -1}}, Le = function (a) {try {return a.a ? a.a.responseText : ""}catch (b) {return K(a.K, "Can not get responseText: " + b.message), ""}}, Ce = function (a, b) {return b + " [" + a.cd + " " + a.Lb + " " + Je(a) + "]"};var Me = function (a, b) {

  this.la = this.Fa = this.qa = "";this.Ra = null;this.wa = this.na = "";this.H = this.ge = !1;var c;if (a instanceof Me)this.H = void 0 !== b ? b : a.H, Ne(this, a.qa), c = a.Fa, M(this), this.Fa = c, Oe(this, a.la), Pe(this, a.Ra), Qe(this, a.na), Re(this, a.W.clone()), c = a.wa, M(this), this.wa = c;else if (a && (c = String(a).match(we))) {
    this.H = !!b;Ne(this, c[1] || "", !0);var d = c[2] || "";M(this);this.Fa = Se(d);Oe(this, c[3] || "", !0);Pe(this, c[4]);Qe(this, c[5] || "", !0);Re(this, c[6] || "", !0);c = c[7] || "";M(this);this.wa = Se(c)
  }else this.H =

  !!b, this.W = new N(null, 0, this.H)
};Me.prototype.toString = function () {
  var a = [], b = this.qa;b && a.push(Te(b, Ue, !0), ":");var c = this.la;if (c || "file" == b)a.push("//"), (b = this.Fa) && a.push(Te(b, Ue, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.Ra, null != c && a.push(":", String(c));if (c = this.na)this.la && "/" != c.charAt(0) && a.push("/"), a.push(Te(c, "/" == c.charAt(0) ? Ve : We, !0));(c = this.W.toString()) && a.push("?", c);(c = this.wa) && a.push("#", Te(c, Xe));return a.join("")
};

Me.prototype.resolve = function (a) {
  var b = this.clone(), c = !!a.qa;c ? Ne(b, a.qa) : c = !!a.Fa;if (c) {
    var d = a.Fa;M(b);b.Fa = d
  }else c = !!a.la;c ? Oe(b, a.la) : c = null != a.Ra;d = a.na;if (c)Pe(b, a.Ra);else if (c = !!a.na) {
    if ("/" != d.charAt(0))if (this.la && !this.na)d = "/" + d;else {
      var e = b.na.lastIndexOf("/");-1 != e && (d = b.na.substr(0, e + 1) + d)
    }e = d;if (".." == e || "." == e)d = "";else if (u(e, "./") || u(e, "/.")) {
      for (var d = 0 == e.lastIndexOf("/", 0), e = e.split("/"), f = [], g = 0; g < e.length;) {
        var k = e[g++];"." == k ? d && g == e.length && f.push("") : ".." == k ? ((1 < f.length ||
        1 == f.length && "" != f[0]) && f.pop(), d && g == e.length && f.push("")) : (f.push(k), d = !0)
      }d = f.join("/")
    }else d = e
  }c ? Qe(b, d) : c = "" !== a.W.toString();c ? Re(b, Se(a.W.toString())) : c = !!a.wa;c && (a = a.wa, M(b), b.wa = a);return b
};Me.prototype.clone = function () {return new Me(this)};

var Ne = function (a, b, c) {
  M(a);a.qa = c ? Se(b, !0) : b;a.qa && (a.qa = a.qa.replace(/:$/, ""))
}, Oe = function (a, b, c) {

  M(a);a.la = c ? Se(b, !0) : b
}, Pe = function (a, b) {

  M(a);if (b) {
    b = Number(b);if (isNaN(b) || 0 > b)throw Error("Bad port number " + b);a.Ra = b
  }else a.Ra = null
}, Qe = function (a, b, c) {

  M(a);a.na = c ? Se(b, !0) : b
}, Re = function (a, b, c) {

  M(a);b instanceof N ? (a.W = b, a.W.Dc(a.H)) : (c || (b = Te(b, Ye)), a.W = new N(b, 0, a.H))
}, O = function (a, b, c) {

  M(a);a.W.set(b, c)
}, M = function (a) {if (a.ge)throw Error("Tried to modify a read-only Uri");};

Me.prototype.Dc = function (a) {
  this.H = a;this.W && this.W.Dc(a);return this
};

var Ze = function (a, b) {
  var c = new Me(null, void 0);Ne(c, "https");a && Oe(c, a);b && Qe(c, b);return c
}, Se = function (a, b) {return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""}, Te = function (a, b, c) {return m(a) ? (a = encodeURI(a).replace(b, $e), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null}, $e = function (a) {

  a = a.charCodeAt(0);return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}, Ue = /[#\/\?@]/g, We = /[\#\?:]/g, Ve = /[\#\?]/g, Ye = /[\#\?@]/g, Xe = /#/g, N = function (a, b, c) {

  this.j = this.l = null;this.D = a || null;
  this.H = !!c
}, af = function (a) {a.l || (a.l = new ce, a.j = 0, a.D && xe(a.D, function (b, c) {a.add(decodeURIComponent(b.replace(/\+/g, " ")), c)}))}, cf = function (a) {

  var b = he(a);if ("undefined" == typeof b)throw Error("Keys are undefined");var c = new N(null, 0, void 0);a = ge(a);for (var d = 0; d < b.length; d++) {
    var e = b[d], f = a[d];ea(f) ? bf(c, e, f) : c.add(e, f)
  }return c
};h = N.prototype;h.Eb = function () {
  af(this);return this.j
};

h.add = function (a, b) {
  af(this);this.D = null;a = this.G(a);var c = this.l.get(a);c || this.l.set(a, c = []);c.push(b);this.j = za(this.j) + 1;return this
};h.remove = function (a) {
  af(this);a = this.G(a);return this.l.eb(a) ? (this.D = null, this.j = za(this.j) - this.l.get(a).length, this.l.remove(a)) : !1
};h.eb = function (a) {
  af(this);a = this.G(a);return this.l.eb(a)
};h.ba = function () {
  af(this);for (var a = this.l.O(), b = this.l.ba(), c = [], d = 0; d < b.length; d++)for (var e = a[d], f = 0; f < e.length; f++)c.push(b[d]);return c
};

h.O = function (a) {
  af(this);var b = [];if (m(a))this.eb(a) && (b = Ma(b, this.l.get(this.G(a))));else {
    a = this.l.O();for (var c = 0; c < a.length; c++)b = Ma(b, a[c])
  }return b
};h.set = function (a, b) {
  af(this);this.D = null;a = this.G(a);this.eb(a) && (this.j = za(this.j) - this.l.get(a).length);this.l.set(a, [b]);this.j = za(this.j) + 1;return this
};h.get = function (a, b) {
  var c = a ? this.O(a) : [];return 0 < c.length ? String(c[0]) : b
};var bf = function (a, b, c) {

  a.remove(b);0 < c.length && (a.D = null, a.l.set(a.G(b), Oa(c)), a.j = za(a.j) + c.length)
};

N.prototype.toString = function () {
  if (this.D)return this.D;if (!this.l)return "";for (var a = [], b = this.l.ba(), c = 0; c < b.length; c++)for (var d = b[c], e = encodeURIComponent(String(d)), d = this.O(d), f = 0; f < d.length; f++) {
    var g = e;"" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));a.push(g)
  }return this.D = a.join("&")
};N.prototype.clone = function () {
  var a = new N;a.D = this.D;this.l && (a.l = this.l.clone(), a.j = this.j);return a
};N.prototype.G = function (a) {
  a = String(a);this.H && (a = a.toLowerCase());return a
};

N.prototype.Dc = function (a) {
  a && !this.H && (af(this), this.D = null, this.l.forEach(function (a, c) {
    var d = c.toLowerCase();c != d && (this.remove(c), bf(this, d, a))
  }, this));this.H = a
};var df = function (a, b) {

  var c = [], d;for (d in a)d in b ? typeof a[d] != typeof b[d] ? c.push(d) : ea(a[d]) ? Ua(a[d], b[d]) || c.push(d) : "object" == typeof a[d] && null != a[d] && null != b[d] ? 0 < df(a[d], b[d]).length && c.push(d) : a[d] !== b[d] && c.push(d) : c.push(d);for (d in b)d in a || c.push(d);return c
}, ff = function () {

  var a;a = navigator.userAgent || "";a = "Chrome" != ef(a) ? null : (a = a.match(/\sChrome\/(\d+)/i)) && 2 == a.length ? parseInt(a[1], 10) : null;return a && 30 > a ? !1 : !y || !pb || 9 < pb
}, gf = function (a, b, c) {

  var d = Math.floor(1E9 * Math.random()).toString();
  b = b || 500;c = c || 600;var e = (window.screen.availHeight - c) / 2, f = (window.screen.availWidth - b) / 2;b = { width:b, height:c, top:0 < e ? e : 0, left:0 < f ? f : 0, location:!0, resizable:!0, statusbar:!0, toolbar:!1 };d && (b.target = d);-1 != (navigator.userAgent || "").indexOf("Firefox/") && (a = a || "http://localhost");var g;c = a || "about:blank";(d = b) || (d = {});a = window;b = c instanceof A ? c : Cb("undefined" != typeof c.href ? c.href : String(c));c = d.target || c.target;e = [];for (g in d)switch (g){case "width":case "height":case "top":case "left":e.push(g + "=" +
  d[g]);break;case "target":case "noreferrer":break;default:e.push(g + "=" + (d[g] ? 1 : 0))}g = e.join(",");(x("iPhone") && !x("iPod") && !x("iPad") || x("iPad") || x("iPod")) && a.navigator && a.navigator.standalone && c && "_self" != c ? (g = a.document.createElement("A"), b = b instanceof A ? b : Cb(b), g.href = zb(b), g.setAttribute("target", c), d.noreferrer && g.setAttribute("rel", "noreferrer"), d = document.createEvent("MouseEvent"), d.initMouseEvent("click", !0, !0, a, 1), g.dispatchEvent(d), g = {}) : d.noreferrer ? (g = a.open("", c, g), d = zb(b), g && (eb &&
  u(d, ";") && (d = "'" + d.replace(/'/g, "%27") + "'"), g.opener = null, a = new wb, a.Xb = "b/12014412, meta tag with sanitized URL", ua.test(d) && (-1 != d.indexOf("&") && (d = d.replace(oa, "&amp;")), -1 != d.indexOf("<") && (d = d.replace(pa, "&lt;")), -1 != d.indexOf(">") && (d = d.replace(qa, "&gt;")), -1 != d.indexOf('"') && (d = d.replace(ra, "&quot;")), -1 != d.indexOf("'") && (d = d.replace(sa, "&#39;")), -1 != d.indexOf("\x00") && (d = d.replace(ta, "&#0;"))), d = '<META HTTP-EQUIV="refresh" content="0; url=' + d + '">', Aa(xb(a), "must provide justification"), v(!/^[\s\xa0]*$/.test(xb(a)),
  "must provide non-empty justification"), g.document.write(Fb((new Eb).fe(d))), g.document.close())) : g = a.open(zb(b), c, g);if (g)try {g.focus()}catch (k) {}return g
}, hf = function (a) {return new H(function (b) {

  var c = function () {ve(2E3).then(function () {if (!a || a.closed)b();else return c()})};return c()
})}, jf = function () {

  var a = null;return (new H(function (b) {"complete" == l.document.readyState ? b() : (a = function () {b()}, dc(window, "load", a))})).N(function (b) {
    fc(window, "load", a);throw b;
  })
}, kf = function (a) {switch (a || navigator.product ||

""){case "ReactNative":return "ReactNative";default:return "Browser"}}, ef = function (a) {

  var b = a.toLowerCase();if (u(b, "opera/") || u(b, "opr/") || u(b, "opios/"))return "Opera";if (u(b, "msie") || u(b, "trident/"))return "IE";if (u(b, "edge/"))return "Edge";if (u(b, "firefox/"))return "Firefox";if (u(b, "silk/"))return "Silk";if (u(b, "safari/") && !u(b, "chrome/"))return "Safari";if (!u(b, "chrome/") && !u(b, "crios/") || u(b, "edge/")) {if ((a = a.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/)) && 2 == a.length)return a[1]}else return "Chrome";return "Other"
},

lf = function (a) {
  var b = kf(void 0);return ("Browser" === b ? ef(navigator.userAgent || "") : b) + "/JsCore/" + a
}, mf = function (a) {

  a = a.split(".");for (var b = l, c = 0; c < a.length && "object" == typeof b && null != b; c++)b = b[a[c]];c != a.length && (b = void 0);return b
}, nf = function () {return !(!l.location || !l.location.protocol || "http:" != l.location.protocol && "https:" != l.location.protocol || "ReactNative" === kf())}, of = function () {

  var a = navigator.userAgent || "", b = a.match(/(ipad)|(iphone)|(ipod)/i), c = a.match(/\sOS\s(\d+)_/i);if (b && b.length && c && 2 ==
  c.length) {if (8 > parseInt(c[1], 10))return !1}else if ("Firefox" == ef(a))return !1;return !0
}, pf = function (a) {return "undefined" === typeof a ? null : oc(a)}, qf = function (a) {if (null !== a) {

  var b;try {b = lc(a)}catch (c) {try {b = JSON.parse(a)}catch (d) {throw c;}}return b
}};var rf;try {

  var sf = {};Object.defineProperty(sf, "abcd", { configurable:!0, enumerable:!0, value:1 });Object.defineProperty(sf, "abcd", { configurable:!0, enumerable:!0, value:2 });rf = 2 == sf.abcd
}catch (a) {rf = !1}

var P = function (a, b, c) {rf ? Object.defineProperty(a, b, { configurable:!0, enumerable:!0, value:c }) : a[b] = c}, tf = function (a, b) {if (b)for (var c in b)b.hasOwnProperty(c) && P(a, c, b[c])}, uf = function (a) {

  var b = {}, c;for (c in a)a.hasOwnProperty(c) && (b[c] = a[c]);return b
}, vf = function (a, b) {

  if (!b || !b.length)return !0;if (!a)return !1;for (var c = 0; c < b.length; c++) {
    var d = a[b[c]];if (void 0 === d || null === d || "" === d)return !1
  }return !0
};var wf = { yd:{ rb:985, qb:735, providerId:"facebook.com" }, zd:{ rb:1040, qb:620, providerId:"github.com" }, Ad:{ rb:485, qb:640, providerId:"google.com" }, Ed:{ rb:485, qb:705, providerId:"twitter.com" } }, xf = function (a) {

  for (var b in wf)if (wf[b].providerId == a)return wf[b];return null
};var Q = function (a, b) {

  this.code = "auth/" + a;this.message = b || yf[a] || ""
};q(Q, Error);Q.prototype.B = function () {return { name:this.code, code:this.code, message:this.message }};

var yf = { "argument-error":"", "app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.", "cors-unsupported":"This browser is not supported.", "credential-already-in-use":"This credential is already associated with a different user account.", "custom-token-mismatch":"The custom token corresponds to a different audience.", "requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
"email-already-in-use":"The email address is already in use by another account.", "expired-action-code":"The action code has expired. ", "cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.", "internal-error":"An internal error has occurred.", "invalid-user-token":"The user's credential is no longer valid. The user must sign in again.", "invalid-auth-event":"An internal error has occurred.", "invalid-custom-token":"The custom token format is incorrect. Please check the documentation.",
"invalid-email":"The email address is badly formatted.", "invalid-api-key":"Your API key is invalid, please check you have copied it correctly.", "invalid-credential":"The supplied auth credential is malformed or has expired.", "invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.", "unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
"invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.", "wrong-password":"The password is invalid or the user does not have a password.", "missing-iframe-start":"An internal error has occurred.", "auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.", "app-deleted":"This instance of FirebaseApp has been deleted.", "account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
"network-request-failed":"A network error (such as timeout, interrupted connection or unreachable host) has occurred.", "no-auth-event":"An internal error has occurred.", "no-such-provider":"User was not linked to an account with the given provider.", "operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.", "operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http or https.',
"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.", "popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.", "provider-already-linked":"User can only be linked to one identity for the given provider.", timeout:"The operation has timed out.", "user-token-expired":"The user's credential is no longer valid. The user must sign in again.", "too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.",
"user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.", "user-disabled":"The user account has been disabled by an administrator.", "user-mismatch":"The supplied credentials do not correspond to the previously signed in user.", "user-signed-out":"", "weak-password":"The password must be 6 characters long or more.", "web-storage-unsupported":"This browser is not supported.", };var zf = function (a, b, c, d, e) {
  this.sa = a;this.va = b || null;this.$a = c || null;this.Ub = d || null;this.F = e || null;if (this.$a || this.F) {
    if (this.$a && this.F)throw new Q("invalid-auth-event");if (this.$a && !this.Ub)throw new Q("invalid-auth-event");
  }else throw new Q("invalid-auth-event");
};zf.prototype.getError = function () {return this.F};zf.prototype.B = function () {return { type:this.sa, eventId:this.va, urlResponse:this.$a, sessionId:this.Ub, error:this.F && this.F.B() }};var Af = function (a) {

  this.ie = a.sub;la();this.Ab = a.email || null
};var Bf = function (a, b, c, d) {

  var e = {};ha(c) ? e = c : b && m(c) && m(d) ? e = { oauthToken:c, oauthTokenSecret:d } : !b && m(c) && (e = { accessToken:c });if (b || !e.idToken && !e.accessToken)if (b && e.oauthToken && e.oauthTokenSecret)P(this, "accessToken", e.oauthToken), P(this, "secret", e.oauthTokenSecret);else {
    if (b)throw new Q("argument-error", "credential failed: expected 2 arguments (the OAuth access token and secret).");throw new Q("argument-error", "credential failed: expected 1 argument (the OAuth access token).");
  }else e.idToken && P(this,
  "idToken", e.idToken), e.accessToken && P(this, "accessToken", e.accessToken);P(this, "provider", a)
};Bf.prototype.Fb = function (a) {return Cf(a, Df(this))};Bf.prototype.dd = function (a, b) {
  var c = Df(this);c.idToken = b;return R(a, Ef, c)
};var Df = function (a) {

  var b = {};a.idToken && (b.id_token = a.idToken);a.accessToken && (b.access_token = a.accessToken);a.secret && (b.oauth_token_secret = a.secret);b.providerId = a.provider;return { postBody:cf(b).toString(), requestUri:nf() ? window.location.href : "http://localhost" }
};

Bf.prototype.B = function () {
  var a = { provider:this.provider };this.idToken && (a.oauthIdToken = this.idToken);this.accessToken && (a.oauthAccessToken = this.accessToken);this.secret && (a.oauthTokenSecret = this.secret);return a
};

var Ff = function (a, b) {
  var c = !!b, d = function () {
    tf(this, { providerId:a, isOAuthProvider:!0 });this.Cc = []
  };c || (d.prototype.addScope = function (a) {Ia(this.Cc, a) || this.Cc.push(a)});d.prototype.Gb = function () {return Oa(this.Cc)};d.credential = function (b, d) {return new Bf(a, c, b, d)};tf(d, { PROVIDER_ID:a });return d
}, Gf = Ff("facebook.com");Gf.prototype.addScope = Gf.prototype.addScope || void 0;var Hf = Ff("github.com");Hf.prototype.addScope = Hf.prototype.addScope || void 0;var If = Ff("google.com");
If.prototype.addScope = If.prototype.addScope || void 0;If.credential = function (a, b) {
  if (!a && !b)throw new Q("argument-error", "credential failed: must provide the ID token and/or the access token.");return new Bf("google.com", !1, ha(a) ? a : { idToken:a || null, accessToken:b || null })
};var Jf = Ff("twitter.com", !0), Kf = function (a, b) {

  this.Ab = a;this.vc = b;P(this, "provider", "password")
};Kf.prototype.Fb = function (a) {return R(a, Lf, { email:this.Ab, password:this.vc })};

Kf.prototype.dd = function (a, b) {return R(a, Mf, { idToken:b, email:this.Ab, password:this.vc })};Kf.prototype.B = function () {return { email:this.Ab, password:this.vc }};var Nf = function () {tf(this, { providerId:"password", isOAuthProvider:!1 })};tf(Nf, { PROVIDER_ID:"password" });

var Of = { Ee:Nf, yd:Gf, Ad:If, zd:Hf, Ed:Jf }, Pf = function (a) {
  var b = a && a.providerId;if (!b)return null;var c = a && a.oauthAccessToken, d = a && a.oauthTokenSecret;a = a && a.oauthIdToken;for (var e in Of)if (Of[e].PROVIDER_ID == b)try {return Of[e].credential({ accessToken:c, idToken:a, oauthToken:c, oauthTokenSecret:d })}catch (f) {break}return null
};var Qf = function (a, b, c) {

  Q.call(this, "account-exists-with-different-credential", c);P(this, "email", a);P(this, "credential", b)
};q(Qf, Q);Qf.prototype.B = function () {
  var a = { code:this.code, message:this.message, email:this.email }, b = this.credential && this.credential.B();b && (Za(a, b), a.providerId = b.provider, delete a.provider);return a
};var S = function (a, b, c) {

  this.v = a;a = b || {};this.te = a.secureTokenEndpoint || "https://securetoken.googleapis.com/v1/token";this.ve = a.secureTokenTimeout || 1E4;this.ue = Xa(a.secureTokenHeaders || Rf);this.Qd = a.firebaseEndpoint || "https://www.googleapis.com/identitytoolkit/v3/relyingparty/";this.Rd = a.firebaseTimeout || 1E4;this.Tc = Xa(a.firebaseHeaders || Sf);c && (this.Tc["X-Client-Version"] = c);this.Id = new xc
}, Tf, Rf = { "Content-Type":"application/x-www-form-urlencoded" }, Sf = { "Content-Type":"application/json" }, Vf = function (a,

  b, c, d, e, f, g) {
  ff() ? a = p(a.xe, a) : (Tf || (Tf = new H(function (a, b) {Uf(a, b)})), a = p(a.we, a));a(b, c, d, e, f, g)
};

S.prototype.xe = function (a, b, c, d, e, f) {
  var g = "ReactNative" === kf() ? new L : new L(this.Id), k;f && (g.Ya = Math.max(0, f), k = setTimeout(function () {g.dispatchEvent("timeout")}, f));g.listen("complete", function () {
    k && clearTimeout(k);var a = null;try {
      var c;c = this.a ? lc(this.a.responseText) : void 0;a = c || null
    }catch (d) {try {a = JSON.parse(Le(this)) || null}catch (e) {a = null}}b && b(a)
  });ec(g, "ready", function () {

    k && clearTimeout(k);this.ua || (this.ua = !0, this.Ka())
  });ec(g, "timeout", function () {

    k && clearTimeout(k);this.ua || (this.ua = !0, this.Ka());

    b && b(null)
  });g.send(a, c, d, e)
};var Wf = "__fcb" + Math.floor(1E6 * Math.random()).toString(), Uf = function (a, b) {((window.gapi || {}).client || {}).request ? a() : (l[Wf] = function () {((window.gapi || {}).client || {}).request ? a() : b(Error("CORS_UNSUPPORTED"))}, Nd(Vd("https://apis.google.com/js/client.js?onload=" + Wf), function () {b(Error("CORS_UNSUPPORTED"))}))};

S.prototype.we = function (a, b, c, d, e) {
  var f = this;Tf.then(function () {
    window.gapi.client.setApiKey(f.v);var g = window.gapi.auth.getToken();window.gapi.auth.setToken(null);window.gapi.client.request({ path:a, method:c, body:d, headers:e, authType:"none", callback:function (a) {
      window.gapi.auth.setToken(g);b && b(a)
    }, })
  }).N(function (a) {b && b({ error:{ message:a && a.message || "CORS_UNSUPPORTED" } })})
};

var Yf = function (a, b) {return new H(function (c, d) {"refresh_token" == b.grant_type && b.refresh_token || "authorization_code" == b.grant_type && b.code ? Vf(a, a.te + "?key=" + encodeURIComponent(a.v), function (a) {a ? a.error ? d(Xf(a)) : a.access_token && a.refresh_token ? c(a) : d(new Q("internal-error")) : d(new Q("network-request-failed"))}, "POST", cf(b).toString(), a.ue, a.ve) : d(new Q("internal-error"))})}, Zf = function (a) {

  var b = {}, c;for (c in a)null !== a[c] && void 0 !== a[c] && (b[c] = a[c]);return oc(b)
}, $f = function (a, b, c, d, e) {

  var f = a.Qd +
  b + "?key=" + encodeURIComponent(a.v);e && (f += "&cb=" + la().toString());return new H(function (b, e) {Vf(a, f, function (a) {a ? a.error ? e(Xf(a)) : b(a) : e(new Q("network-request-failed"))}, c, Zf(d), a.Tc, a.Rd)})
}, ag = function (a) {if (!kc.test(a.email))throw new Q("invalid-email");}, bg = function (a) {"email"in a && ag(a)}, dg = function (a, b) {return R(a, cg, { identifier:b, continueUri:nf() ? window.location.href : "http://localhost" }).then(function (a) {return a.allProviders || []})}, fg = function (a) {return R(a, eg, {}).then(function (a) {return a.authorizedDomains ||
[]})}, gg = function (a) {if (!a.idToken)throw new Q("internal-error");};S.prototype.signInAnonymously = function () {return R(this, hg, {})};S.prototype.updateEmail = function (a, b) {return R(this, ig, { idToken:a, email:b })};S.prototype.updatePassword = function (a, b) {return R(this, Mf, { idToken:a, password:b })};var jg = { displayName:"DISPLAY_NAME", photoUrl:"PHOTO_URL" };

S.prototype.updateProfile = function (a, b) {
  var c = { idToken:a }, d = [];Qa(jg, function (a, f) {
    var g = b[f];null === g ? d.push(a) : f in b && (c[f] = g)
  });d.length && (c.deleteAttribute = d);return R(this, ig, c)
};S.prototype.sendPasswordResetEmail = function (a) {return R(this, kg, { requestType:"PASSWORD_RESET", email:a })};S.prototype.sendEmailVerification = function (a) {return R(this, lg, { requestType:"VERIFY_EMAIL", idToken:a })};

var ng = function (a, b, c) {return R(a, mg, { idToken:b, deleteProvider:c })}, og = function (a) {if (!a.requestUri || !a.sessionId && !a.postBody)throw new Q("internal-error");}, pg = function (a) {

  if (a.needConfirmation)throw(a && a.email ? new Qf(a.email, Pf(a), a.message) : null) || new Q("account-exists-with-different-credential");if (!a.idToken)throw new Q("internal-error");
}, Cf = function (a, b) {return R(a, qg, b)}, rg = function (a) {if (!a.oobCode)throw new Q("invalid-action-code");};

S.prototype.confirmPasswordReset = function (a, b) {return R(this, sg, { oobCode:a, newPassword:b })};S.prototype.checkActionCode = function (a) {return R(this, tg, { oobCode:a })};S.prototype.applyActionCode = function (a) {return R(this, ug, { oobCode:a })};

var ug = { endpoint:"setAccountInfo", w:rg, Xa:"email" }, tg = { endpoint:"resetPassword", w:rg, oa:function (a) {if (!kc.test(a.email))throw new Q("internal-error");} }, vg = { endpoint:"signupNewUser", w:function (a) {

  ag(a);if (!a.password)throw new Q("weak-password");
}, oa:gg, pa:!0, }, cg = { endpoint:"createAuthUri" }, wg = { endpoint:"deleteAccount", Wa:["idToken"] }, mg = { endpoint:"setAccountInfo", Wa:["idToken", "deleteProvider"], w:function (a) {if (!ea(a.deleteProvider))throw new Q("internal-error");} }, xg = { endpoint:"getAccountInfo" },

  lg = { endpoint:"getOobConfirmationCode", Wa:["idToken", "requestType"], w:function (a) {if ("VERIFY_EMAIL" != a.requestType)throw new Q("internal-error");}, Xa:"email" }, kg = { endpoint:"getOobConfirmationCode", Wa:["requestType"], w:function (a) {

    if ("PASSWORD_RESET" != a.requestType)throw new Q("internal-error");ag(a)
  }, Xa:"email", }, eg = { Hd:!0, endpoint:"getProjectConfig", Zd:"GET" }, sg = { endpoint:"resetPassword", w:rg, Xa:"email" }, ig = { endpoint:"setAccountInfo", Wa:["idToken"], w:bg, pa:!0 }, Mf = { endpoint:"setAccountInfo", Wa:["idToken"],

  w:function (a) {
    bg(a);if (!a.password)throw new Q("weak-password");
  }, oa:gg, pa:!0, }, hg = { endpoint:"signupNewUser", oa:gg, pa:!0 }, qg = { endpoint:"verifyAssertion", w:og, oa:pg, pa:!0 }, Ef = { endpoint:"verifyAssertion", w:function (a) {

    og(a);if (!a.idToken)throw new Q("internal-error");
  }, oa:pg, pa:!0, }, yg = { endpoint:"verifyCustomToken", w:function (a) {if (!a.token)throw new Q("invalid-custom-token");}, oa:gg, pa:!0 }, Lf = { endpoint:"verifyPassword", w:function (a) {

    ag(a);if (!a.password)throw new Q("wrong-password");
  }, oa:gg, pa:!0, }, R =

function (a, b, c) {
  if (!vf(c, b.Wa))return J(new Q("internal-error"));var d = b.Zd || "POST", e;return I(c).then(b.w).then(function () {
    b.pa && (c.returnSecureToken = !0);return $f(a, b.endpoint, d, c, b.Hd || !1)
  }).then(function (a) {return e = a}).then(b.oa).then(function () {
    if (!b.Xa)return e;if (!(b.Xa in e))throw new Q("internal-error");return e[b.Xa]
  })
}, Xf = function (a) {

  var b;b = (a.error && a.error.errors && a.error.errors[0] || {}).reason || "";var c = { keyInvalid:"invalid-api-key", ipRefererBlocked:"app-not-authorized" };if (b = c[b] ?
  new Q(c[b]) : null)return b;a = a.error && a.error.message || "";b = { INVALID_CUSTOM_TOKEN:"invalid-custom-token", CREDENTIAL_MISMATCH:"custom-token-mismatch", MISSING_CUSTOM_TOKEN:"internal-error", INVALID_IDENTIFIER:"invalid-email", MISSING_CONTINUE_URI:"internal-error", INVALID_EMAIL:"invalid-email", INVALID_PASSWORD:"wrong-password", USER_DISABLED:"user-disabled", MISSING_PASSWORD:"internal-error", EMAIL_EXISTS:"email-already-in-use", PASSWORD_LOGIN_DISABLED:"operation-not-allowed", INVALID_IDP_RESPONSE:"invalid-credential",
  FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use", EMAIL_NOT_FOUND:"user-not-found", EXPIRED_OOB_CODE:"expired-action-code", INVALID_OOB_CODE:"invalid-action-code", MISSING_OOB_CODE:"internal-error", CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login", INVALID_ID_TOKEN:"invalid-user-token", TOKEN_EXPIRED:"user-token-expired", USER_NOT_FOUND:"user-token-expired", CORS_UNSUPPORTED:"cors-unsupported", };if (b[a])return new Q(b[a]);b = { TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests", WEAK_PASSWORD:"weak-password",
  OPERATION_NOT_ALLOWED:"operation-not-allowed", };for (var d in b)if (0 === a.indexOf(d))return new Q(b[d]);return new Q("internal-error")
};var zg = function (a) {this.L = a};zg.prototype.value = function () {return this.L};zg.prototype.rd = function (a) {
  this.L.style = a;return this
};var Ag = function (a) {this.L = a || {}};Ag.prototype.value = function () {return this.L};Ag.prototype.rd = function (a) {
  this.L.style = a;return this
};var Cg = function (a) {

  this.De = a;this.pc = null;this.ne = Bg(this)
}, Dg, Eg = function (a) {

  var b = new Ag;b.L.where = document.body;b.L.url = a.De;b.L.messageHandlersFilter = mf("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER");b.L.attributes = b.L.attributes || {};(new zg(b.L.attributes)).rd({ position:"absolute", top:"-100px", width:"1px", height:"1px" });b.L.dontclear = !0;return b
}, Bg = function (a) {return Fg().then(function () {return new H(function (b) {mf("gapi.iframes.getContext")().open(Eg(a).value(), function (c) {
  a.pc = c;a.pc.restyle({ setHideOnLeave:!1 });
  b()
})})})}, Gg = function (a, b) {a.ne.then(function () {a.pc.register("authEvent", b, mf("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})}, Hg = "__iframefcb" + Math.floor(1E6 * Math.random()).toString(), Fg = function () {return Dg ? Dg : Dg = new H(function (a, b) {
  var c = function () {mf("gapi.load")("gapi.iframes", function () {a()})};mf("gapi.iframes.Iframe") ? a() : mf("gapi.load") ? c() : (l[Hg] = function () {mf("gapi.load") ? c() : b()}, Nd(Vd("https://apis.google.com/js/api.js?onload=" + Hg), function () {b()}))
})};var Jg = function (a, b, c, d) {

  this.S = a;this.v = b;this.ka = c;d = this.ta = d || null;a = Ze(a, "/__/auth/iframe");O(a, "apiKey", b);O(a, "appName", c);d && O(a, "v", d);this.ae = a.toString();this.be = new Cg(this.ae);this.dc = [];Ig(this)
}, Kg = function (a, b, c, d, e, f, g, k, t) {

  a = Ze(a, "/__/auth/handler");O(a, "apiKey", b);O(a, "appName", c);O(a, "authType", d);O(a, "providerId", e);f && f.length && O(a, "scopes", f.join(","));g && O(a, "redirectUrl", g);k && O(a, "eventId", k);t && O(a, "v", t);return a.toString()
}, Ig = function (a) {Gg(a.be, function (b) {
  var c = {};
  if (b && b.authEvent) {
    var d = !1;b = b.authEvent || {};if (b.type) {
      if (c = b.error)var e = (c = b.error) && (c.name || c.code), c = e ? new Q(e.substring(5), c.message) : null;b = new zf(b.type, b.eventId, b.urlResponse, b.sessionId, c)
    }else b = null;for (c = 0; c < a.dc.length; c++)d = a.dc[c](b) || d;c = {};c.status = d ? "ACK" : "ERROR";return I(c)
  }c.status = "ERROR";return I(c)
})};var Lg = function () {};var Mg = function () {};q(Mg, Lg);Mg.prototype.Eb = function () {
  var a = 0;be(this.ab(!0), function (b) {
    Aa(b);a++
  });return a
};var Ng = function (a) {this.g = a};q(Ng, Mg);var Og = function (a) {

  if (!a.g)return !1;try {return a.g.setItem("__sak", "1"), a.g.removeItem("__sak"), !0}catch (b) {return !1}
};h = Ng.prototype;h.set = function (a, b) {try {this.g.setItem(a, b)}catch (c) {
  if (0 == this.g.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";
}};h.get = function (a) {

  a = this.g.getItem(a);if (!m(a) && null !== a)throw"Storage mechanism: Invalid value was encountered";return a
};h.remove = function (a) {this.g.removeItem(a)};

h.Eb = function () {return this.g.length};h.ab = function (a) {
  var b = 0, c = this.g, d = new $d;d.next = function () {
    if (b >= c.length)throw Zd;var d = Aa(c.key(b++));if (a)return d;d = c.getItem(d);if (!m(d))throw"Storage mechanism: Invalid value was encountered";return d
  };return d
};h.key = function (a) {return this.g.key(a)};var Pg = function () {

  var a = null;try {a = window.localStorage || null}catch (b) {}this.g = a
};q(Pg, Ng);var Qg = function () {

  var a = null;try {a = window.sessionStorage || null}catch (b) {}this.g = a
};q(Qg, Ng);var Rg = function (a) {

  this.g = a || firebase.INTERNAL.reactNative && firebase.INTERNAL.reactNative.AsyncStorage;if (!this.g)throw new Q("internal-error", "The React Native compatibility library was not found.");
};h = Rg.prototype;h.get = function (a) {return I(this.g.getItem(a)).then(function (a) {return a && qf(a)})};h.set = function (a, b) {return I(this.g.setItem(a, pf(b)))};h.remove = function (a) {return I(this.g.removeItem(a))};h.Ia = function () {};h.Ua = function () {};var Sg = function () {

  if (!Og(new Pg))throw new Q("web-storage-unsupported");this.g = window.localStorage
};h = Sg.prototype;h.get = function (a) {
  var b = this;return I().then(function () {
    var c = b.g.getItem(a);return qf(c)
  })
};h.set = function (a, b) {
  var c = this;return I().then(function () {
    var d = pf(b);null === d ? c.remove(a) : c.g.setItem(a, d)
  })
};h.remove = function (a) {
  var b = this;return I().then(function () {b.g.removeItem(a)})
};h.Ia = function (a) {Xb(window, "storage", a)};h.Ua = function (a) {fc(window, "storage", a)};var Tg = function () {this.g = {}};h = Tg.prototype;h.get = function () {return I(null)};h.set = function () {return I()};h.remove = function () {return I()};h.Ia = function () {};h.Ua = function () {};var Ug = function () {

  if (!Og(new Qg))throw new Q("web-storage-unsupported");this.g = window.sessionStorage
};h = Ug.prototype;h.get = function (a) {
  var b = this;return I().then(function () {
    var c = b.g.getItem(a);return qf(c)
  })
};h.set = function (a, b) {
  var c = this;return I().then(function () {
    var d = pf(b);null === d ? c.remove(a) : c.g.setItem(a, d)
  })
};h.remove = function (a) {
  var b = this;return I().then(function () {b.g.removeItem(a)})
};h.Ia = function () {};h.Ua = function () {};var Xg = function () {this.Qc = { Browser:Vg, ReactNative:Wg }[kf()]}, Yg, Vg = { M:Sg, sd:Ug }, Wg = { M:Rg, sd:Tg };var Zg = "First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" "), T = function (a, b) {return { name:a || "", Y:"a valid string", optional:!!b, Z:m }}, $g = function (a) {return { name:a || "", Y:"a valid object", optional:!1, Z:ha }}, ah = function (a, b) {return { name:a || "", Y:"a function", optional:!!b, Z:n }}, bh = function () {return { name:"", Y:"null", optional:!1, Z:da }}, ch = function () {return { name:"credential", Y:"a valid credential", optional:!1, Z:function (a) {return !(!a || !a.Fb)} }}, dh = function () {return { name:"authProvider", Y:"a valid Auth provider",

optional:!1, Z:function (a) {return !!(a && a.providerId && a.hasOwnProperty && a.hasOwnProperty("isOAuthProvider"))}, }}, eh = function (a, b, c, d) {return { name:c || "", Y:a.Y + " or " + b.Y, optional:!!d, Z:function (c) {return a.Z(c) || b.Z(c)} }};var gh = function (a, b) {for (var c in b) {

  var d = b[c].name;a[d] = fh(d, a[c], b[c].b)
}}, U = function (a, b, c, d) {a[b] = fh(b, c, d)}, fh = function (a, b, c) {

  if (!c)return b;var d = hh(a);a = function () {
    var a = Array.prototype.slice.call(arguments), e;a: {
      e = Array.prototype.slice.call(a);var k;k = 0;for (var t = !1, Y = 0; Y < c.length; Y++)if (c[Y].optional)t = !0;else {
        if (t)throw new Q("internal-error", "Argument validator encountered a required argument after an optional argument.");k++
      }t = c.length;if (e.length < k || t < e.length)e = "Expected " + (k == t ? 1 ==

      k ? "1 argument" : k + " arguments" : k + "-" + t + " arguments") + " but got " + e.length + ".";else {
        for (k = 0; k < e.length; k++)if (t = c[k].optional && void 0 === e[k], !c[k].Z(e[k]) && !t) {
          e = c[k];if (0 > k || k >= Zg.length)throw new Q("internal-error", "Argument validator received an unsupported number of arguments.");e = Zg[k] + " argument " + (e.name ? '"' + e.name + '" ' : "") + "must be " + e.Y + ".";break a
        }e = null
      }
    }if (e)throw new Q("argument-error", d + " failed: " + e);return b.apply(this, a)
  };for (var e in b)a[e] = b[e];for (e in b.prototype)a.prototype[e] =

  b.prototype[e];return a
}, hh = function (a) {

  a = a.split(".");return a[a.length - 1]
};var kh = function (a, b, c) {

  var d = (this.ta = firebase.SDK_VERSION || null) ? lf(this.ta) : null;this.c = new S(b, null, d);this.Qa = null;this.S = a;this.v = b;this.ka = c;this.vb = [];this.$c = !1;this.Gd = p(this.Td, this);this.sb = new ih(this);this.kd = new jh(this);this.Za = {};this.Za.unknown = this.sb;this.Za.signInViaRedirect = this.sb;this.Za.linkViaRedirect = this.sb;this.Za.signInViaPopup = this.kd;this.Za.linkViaPopup = this.kd
}, lh = function (a) {

  var b = window.location.href;return fg(a).then(function (a) {
    a: {
      for (var d = (b instanceof Me ? b.clone() :
      new Me(b, void 0)).la, e = 0; e < a.length; e++) {
        var f;var g = a[e];f = d;var k = Pc(g);k ? f = (f = Pc(f)) ? k.Bb(f) : !1 : (k = g.split(".").join("\\."), f = (new RegExp("^(.+." + k + "|" + k + ")$", "i")).test(f));if (f) {
          a = !0;break a
        }
      }a = !1
    }if (!a)throw new Q("unauthorized-domain");
  })
}, mh = function (a) {

  a.$c = !0;jf().then(function () {
    a.$d = new Jg(a.S, a.v, a.ka, a.ta);a.$d.dc.push(a.Gd)
  })
};kh.prototype.subscribe = function (a) {
  Ia(this.vb, a) || this.vb.push(a);this.$c || mh(this)
};kh.prototype.unsubscribe = function (a) {La(this.vb, function (b) {return b == a})};

kh.prototype.Td = function (a) {
  if (!a)throw new Q("invalid-auth-event");for (var b = !1, c = 0; c < this.vb.length; c++) {
    var d = this.vb[c];if (d.Mc(a.sa, a.va)) {
      (b = this.Za[a.sa]) && b.ld(a, d);b = !0;break
    }
  }a = this.sb;a.zc || (a.zc = !0, nh(a, !1, null, null));return b
};kh.prototype.getRedirectResult = function () {return this.sb.getRedirectResult()};

var ph = function (a, b, c, d, e) {
  if (!b)return J(new Q("popup-blocked"));a.Qa || (a.Qa = lh(a.c));return a.Qa.then(function () {
    oh(d);var f = Kg(a.S, a.v, a.ka, c, d.providerId, d.Gb(), null, e, a.ta);Gb((b || window).location, f);return b
  })
}, qh = function (a, b, c, d) {

  a.Qa || (a.Qa = lh(a.c));return a.Qa.then(function () {
    oh(c);var e = Kg(a.S, a.v, a.ka, b, c.providerId, c.Gb(), window.location.href, d, a.ta);Gb(window.location, e)
  })
}, rh = function (a, b, c, d) {

  var e = new Q("popup-closed-by-user");return hf(c).then(function () {return ve(3E4).then(function () {a.Ea(b,
null, e, d)})})
}, oh = function (a) {if (!a.isOAuthProvider)throw new Q("invalid-oauth-provider");}, sh = {}, th = function (a, b, c) {

  var d = b + ":" + c;sh[d] || (sh[d] = new kh(a, b, c));return sh[d]
}, ih = function (a) {

  this.P = a;this.Ac = this.Rb = this.Ta = this.X = null;this.zc = !1
};ih.prototype.ld = function (a, b) {
  if (!a)return J(new Q("invalid-auth-event"));this.zc = !0;var c = a.sa, d = a.va;"unknown" == c ? (this.X || nh(this, !1, null, null), c = I()) : c = a.F ? this.xc(a, b) : b.fb(c, d) ? this.yc(a, b) : J(new Q("invalid-auth-event"));return c
};

ih.prototype.xc = function (a) {
  this.X || nh(this, !0, null, a.getError());return I()
};ih.prototype.yc = function (a, b) {
  var c = this, d = a.sa, e = b.fb(d, a.va), f = "signInViaRedirect" == d || "linkViaRedirect" == d;return e(a.$a, a.Ub).then(function (a) {c.X || nh(c, f, a, null)}).N(function (a) {c.X || nh(c, f, null, a)})
};var nh = function (a, b, c, d) {

  b ? d ? (a.X = function () {return J(d)}, a.Rb && a.Rb(d)) : (a.X = function () {return I(c)}, a.Ta && a.Ta(c)) : (a.X = function () {return I({ user:null })}, a.Ta && a.Ta({ user:null }));a.Ta = null;a.Rb = null
};

ih.prototype.getRedirectResult = function () {
  var a = this;this.Kc || (this.Kc = new H(function (b, c) {a.X ? a.X().then(b, c) : (a.Ta = b, a.Rb = c, uh(a))}));return this.Kc
};var uh = function (a) {

  var b = new Q("timeout");a.Ac && a.Ac.cancel();a.Ac = ve(3E4).then(function () {a.X || nh(a, !0, null, b)})
}, jh = function (a) {this.P = a};jh.prototype.ld = function (a, b) {
  if (!a)return J(new Q("invalid-auth-event"));var c = a.sa, d = a.va;return a.F ? this.xc(a, b) : b.fb(c, d) ? this.yc(a, b) : J(new Q("invalid-auth-event"))
};

jh.prototype.xc = function (a, b) {
  b.Ea(a.sa, null, a.getError(), a.va);return I()
};jh.prototype.yc = function (a, b) {
  var c = a.va, d = a.sa;return b.fb(d, c)(a.$a, a.Ub).then(function (a) {b.Ea(d, a, null, c)}).N(function (a) {b.Ea(d, null, a, c)})
};var vh = function (a) {

  this.c = a;this.Ha = this.ea = null;this.La = 0
};vh.prototype.B = function () {return { apiKey:this.c.v, refreshToken:this.ea, accessToken:this.Ha, expirationTime:this.La }};var xh = function (a, b) {

  var c = b.idToken, d = b.refreshToken, e = wh(b.expiresIn);a.Ha = c;a.La = e;a.ea = d
}, wh = function (a) {return la() + 1E3 * parseInt(a, 10)}, yh = function (a, b) {return Yf(a.c, b).then(function (b) {
  a.Ha = b.access_token;a.La = wh(b.expires_in);a.ea = b.refresh_token;return { accessToken:a.Ha, expirationTime:a.La, refreshToken:a.ea }
})};

vh.prototype.getToken = function (a) {return a || !this.Ha || la() > this.La - 3E4 ? this.ea ? yh(this, { grant_type:"refresh_token", refresh_token:this.ea }) : I(null) : I({ accessToken:this.Ha, expirationTime:this.La, refreshToken:this.ea })};var zh = function (a, b, c, d, e) {tf(this, { uid:a, displayName:d || null, photoURL:e || null, email:c || null, providerId:b })}, Ah = function (a, b) {

  Lb.call(this, a);for (var c in b)this[c] = b[c]
};q(Ah, Lb);

var V = function (a, b, c) {
  this.R = [];this.v = a.apiKey;this.ka = a.appName;this.S = a.authDomain || null;a = firebase.SDK_VERSION ? lf(firebase.SDK_VERSION) : null;this.c = new S(this.v, null, a);this.ra = new vh(this.c);Bh(this, b.idToken);xh(this.ra, b);P(this, "refreshToken", this.ra.ea);Ch(this, c || {});Wd.call(this);this.Ob = !1;this.S && nf() && (this.s = th(this.S, this.v, this.ka));this.Vb = []
};q(V, Wd);

var Bh = function (a, b) {
  a.bd = b;P(a, "_lat", b)
}, Dh = function (a, b) {La(a.Vb, function (a) {return a == b})}, Eh = function (a) {

  for (var b = [], c = 0; c < a.Vb.length; c++)b.push(a.Vb[c](a));return sd(b).then(function () {return a})
}, Fh = function (a) {a.s && !a.Ob && (a.Ob = !0, a.s.subscribe(a))}, Ch = function (a, b) {tf(a, { uid:b.uid, displayName:b.displayName || null, photoURL:b.photoURL || null, email:b.email || null, emailVerified:b.emailVerified || !1, isAnonymous:b.isAnonymous || !1, providerData:[] })};P(V.prototype, "providerId", "firebase");
var Gh = function () {}, Hh = function (a) {return I().then(function () {if (a.Ld)throw new Q("app-deleted");})}, Ih = function (a) {return Ea(a.providerData, function (a) {return a.providerId})}, Kh = function (a, b) {b && (Jh(a, b.providerId), a.providerData.push(b))}, Jh = function (a, b) {La(a.providerData, function (a) {return a.providerId == b})}, Lh = function (a, b, c) {("uid" != b || c) && a.hasOwnProperty(b) && P(a, b, c)};

V.prototype.copy = function (a) {
  var b = this;b != a && (tf(this, { uid:a.uid, displayName:a.displayName, photoURL:a.photoURL, email:a.email, emailVerified:a.emailVerified, isAnonymous:a.isAnonymous, providerData:[] }), w(a.providerData, function (a) {Kh(b, a)}), this.ra = a.ra, P(this, "refreshToken", this.ra.ea))
};V.prototype.reload = function () {
  var a = this;return Hh(this).then(function () {return Mh(a).then(function () {return Eh(a)}).then(Gh)})
};

var Mh = function (a) {return a.getToken().then(function (b) {
  var c = a.isAnonymous;return Nh(a, b).then(function () {
    c || Lh(a, "isAnonymous", !1);return b
  }).N(function (b) {
    "auth/user-token-expired" == b.code && (a.dispatchEvent(new Ah("userDeleted")), Oh(a));throw b;
  })
})};V.prototype.getToken = function (a) {
  var b = this;return Hh(this).then(function () {return b.ra.getToken(a)}).then(function (a) {
    if (!a)throw new Q("internal-error");a.accessToken != b.bd && (Bh(b, a.accessToken), b.ma());Lh(b, "refreshToken", a.refreshToken);return a.accessToken
  })
};

var Ph = function (a, b) {b.idToken && a.bd != b.idToken && (xh(a.ra, b), a.ma(), Bh(a, b.idToken))};V.prototype.ma = function () {this.dispatchEvent(new Ah("tokenChanged"))};var Nh = function (a, b) {return R(a.c, xg, { idToken:b }).then(p(a.pe, a))};

V.prototype.pe = function (a) {
  a = a.users;if (!a || !a.length)throw new Q("internal-error");a = a[0];Ch(this, { uid:a.localId, displayName:a.displayName, photoURL:a.photoUrl, email:a.email, emailVerified:!!a.emailVerified });for (var b = Qh(a), c = 0; c < b.length; c++)Kh(this, b[c]);Lh(this, "isAnonymous", !(this.email && a.passwordHash) && !(this.providerData && this.providerData.length))
};

var Qh = function (a) {return (a = a.providerUserInfo) && a.length ? Ea(a, function (a) {return new zh(a.rawId, a.providerId, a.email, a.displayName, a.photoUrl)}) : []};V.prototype.reauthenticate = function (a) {
  var b = this;return this.f(a.Fb(this.c).then(function (a) {
    var d;a: {
      var e = a.idToken.split(".");if (3 == e.length) {
        for (var e = e[1], f = (4 - e.length % 4) % 4, g = 0; g < f; g++)e += ".";try {
          var k = lc(tb(e));if (k.sub && k.iss && k.aud && k.exp) {
            d = new Af(k);break a
          }
        }catch (t) {}
      }d = null
    }if (!d || b.uid != d.ie)throw new Q("user-mismatch");Ph(b, a);return b.reload()
  }))
};

var Rh = function (a, b) {return Mh(a).then(function () {if (Ia(Ih(a), b))return Eh(a).then(function () {throw new Q("provider-already-linked");})})};h = V.prototype;h.link = function (a) {
  var b = this;return this.f(Rh(this, a.provider).then(function () {return b.getToken()}).then(function (c) {return a.dd(b.c, c)}).then(p(this.Sc, this)))
};h.Sc = function (a) {
  Ph(this, a);var b = this;return this.reload().then(function () {return b})
};

h.updateEmail = function (a) {
  var b = this;return this.f(this.getToken().then(function (c) {return b.c.updateEmail(c, a)}).then(function (a) {
    Ph(b, a);return b.reload()
  }))
};h.updatePassword = function (a) {
  var b = this;return this.f(this.getToken().then(function (c) {return b.c.updatePassword(c, a)}).then(function (a) {
    Ph(b, a);return b.reload()
  }))
};

h.updateProfile = function (a) {
  if (void 0 === a.displayName && void 0 === a.photoURL)return Hh(this);var b = this;return this.f(this.getToken().then(function (c) {return b.c.updateProfile(c, { displayName:a.displayName, photoUrl:a.photoURL })}).then(function (a) {
    Ph(b, a);Lh(b, "displayName", a.displayName || null);Lh(b, "photoURL", a.photoUrl || null);return Eh(b)
  }).then(Gh))
};

h.unlink = function (a) {
  var b = this;return this.f(Mh(this).then(function (c) {return Ia(Ih(b), a) ? ng(b.c, c, [a]).then(function (a) {
    var c = {};w(a.providerUserInfo || [], function (a) {c[a.providerId] = !0});w(Ih(b), function (a) {c[a] || Jh(b, a)});return Eh(b)
  }) : Eh(b).then(function () {throw new Q("no-such-provider");})}))
};h["delete"] = function () {

  var a = this;return this.f(this.getToken().then(function (b) {return R(a.c, wg, { idToken:b })}).then(function () {a.dispatchEvent(new Ah("userDeleted"))})).then(function () {Oh(a)})
};

h.Mc = function (a, b) {return "linkViaPopup" == a && (this.ca || null) == b && this.V || "linkViaRedirect" == a && (this.Qb || null) == b ? !0 : !1};h.Ea = function (a, b, c, d) {"linkViaPopup" == a && d == (this.ca || null) && (c && this.Aa ? this.Aa(c) : b && !c && this.V && this.V(b), this.Ba && (this.Ba.cancel(), this.Ba = null), delete this.V, delete this.Aa)};h.fb = function (a, b) {return "linkViaPopup" == a && b == (this.ca || null) || "linkViaRedirect" == a && (this.Qb || null) == b ? p(this.Od, this) : null};h.Db = function () {return this.uid + ":::" + Math.floor(1E9 * Math.random()).toString()};

h.linkWithPopup = function (a) {
  if (!nf())return J(new Q("operation-not-supported-in-this-environment"));var b = this, c = xf(a.providerId), d = this.Db(), e = null;!of() && this.S && a.isOAuthProvider && (e = Kg(this.S, this.v, this.ka, "linkViaPopup", a.providerId, a.Gb(), null, d, firebase.SDK_VERSION || null));var f = gf(e, c && c.rb, c && c.qb), c = Rh(this, a.providerId).then(function () {return Eh(b)}).then(function () {
    b.Na();return b.getToken()
  }).then(function () {if (!e)return ph(b.s, f, "linkViaPopup", a, d)}).then(function () {return new H(function (a,
  c) {
    b.Ea("linkViaPopup", null, new Q("cancelled-popup-request"), b.ca || null);b.V = a;b.Aa = c;b.ca = d;b.Ba = rh(b, "linkViaPopup", f, d)
  })}).then(function (a) {
    f && (f || window).close();return a
  }).N(function (a) {
    f && (f || window).close();throw a;
  });return this.f(c)
};

h.linkWithRedirect = function (a) {
  if (!nf())return J(new Q("operation-not-supported-in-this-environment"));var b = this, c = null, d = this.Db(), e = Rh(this, a.providerId).then(function () {
    b.Na();return b.getToken()
  }).then(function () {
    b.Qb = d;return Eh(b)
  }).then(function (a) {
    b.Ca && (a = b.Ca, a = a.P.set(Sh, b.B(), a.$));return a
  }).then(function () {return qh(b.s, "linkViaRedirect", a, d)}).N(function (a) {
    c = a;if (b.Ca)return Th(b.Ca);throw c;
  }).then(function () {if (c)throw c;});return this.f(e)
};

h.Na = function () {
  if (this.s && this.Ob)return this.s;if (this.s && !this.Ob)throw new Q("internal-error");throw new Q("auth-domain-config-required");
};h.Od = function (a, b) {
  var c = this, d = null, e = this.getToken().then(function (d) {return R(c.c, Ef, { requestUri:a, sessionId:b, idToken:d })}).then(function (a) {
    d = Pf(a);return c.Sc(a)
  }).then(function (a) {return { user:a, credential:d }});return this.f(e)
};

h.sendEmailVerification = function () {
  var a = this;return this.f(this.getToken().then(function (b) {return a.c.sendEmailVerification(b)}).then(function (b) {if (a.email != b)return a.reload()}).then(function () {}))
};var Oh = function (a) {

  for (var b = 0; b < a.R.length; b++)a.R[b].cancel("app-deleted");a.R = [];a.Ld = !0;P(a, "refreshToken", null);a.s && a.s.unsubscribe(a)
};V.prototype.f = function (a) {
  var b = this;this.R.push(a);vd(a, function () {Ka(b.R, a)});return a
};V.prototype.toJSON = function () {return this.B()};

V.prototype.B = function () {
  var a = { uid:this.uid, displayName:this.displayName, photoURL:this.photoURL, email:this.email, emailVerified:this.emailVerified, isAnonymous:this.isAnonymous, providerData:[], apiKey:this.v, appName:this.ka, authDomain:this.S, stsTokenManager:this.ra.B(), redirectEventId:this.Qb || null };w(this.providerData, function (b) {a.providerData.push(uf(b))});return a
};

var Uh = function (a) {
  if (!a.apiKey)return null;var b = { apiKey:a.apiKey, authDomain:a.authDomain, appName:a.appName }, c = {};if (a.stsTokenManager && a.stsTokenManager.accessToken && a.stsTokenManager.refreshToken && a.stsTokenManager.expirationTime)c.idToken = a.stsTokenManager.accessToken, c.refreshToken = a.stsTokenManager.refreshToken, c.expiresIn = (a.stsTokenManager.expirationTime - la()) / 1E3;else return null;var d = new V(b, c, a);a.providerData && w(a.providerData, function (a) {if (a) {
    var b = {};tf(b, a);Kh(d, b)
  }});a.redirectEventId &&

  (d.Qb = a.redirectEventId);return d
}, Vh = function (a, b, c) {

  var d = new V(a, b);c && (d.Ca = c);return d.reload().then(function () {return d})
};var Wh, Xh = function (a, b, c, d, e, f) {

  this.Kd = a;this.tc = b;this.ic = c;this.wd = d;this.ha = e;this.J = {};this.ub = [];this.ob = 0;this.ce = f || l.indexedDB
}, Yh = function (a) {return new H(function (b, c) {

  var d = a.ce.open(a.Kd, a.ha);d.onerror = function (a) {c(Error(a.target.errorCode))};d.onupgradeneeded = function (b) {
    b = b.target.result;try {b.createObjectStore(a.tc, { keyPath:a.ic })}catch (d) {c(d)}
  };d.onsuccess = function (a) {b(a.target.result)}
})}, Zh = function (a) {

  a.Zc || (a.Zc = Yh(a));return a.Zc
}, $h = function (a, b) {return b.objectStore(a.tc)},

  ai = function (a, b, c) {return b.transaction([a.tc], c ? "readwrite" : "readonly")}, bi = function (a) {return new H(function (b, c) {

    a.onsuccess = function (a) {a && a.target ? b(a.target.result) : b()};a.onerror = function (a) {c(Error(a.target.errorCode))}
  })};h = Xh.prototype;
h.set = function (a, b) {
  var c = !1, d, e = this;return vd(Zh(this).then(function (b) {
    d = b;b = $h(e, ai(e, d, !0));return bi(b.get(a))
  }).then(function (f) {
    var g = $h(e, ai(e, d, !0));if (f)return f.value = b, bi(g.put(f));e.ob++;c = !0;f = {};f[e.ic] = a;f[e.wd] = b;return bi(g.add(f))
  }).then(function () {e.J[a] = b}), function () {c && e.ob--})
};h.get = function (a) {
  var b = this;return Zh(this).then(function (c) {return bi($h(b, ai(b, c, !1)).get(a))})
};

h.remove = function (a) {
  var b = !1, c = this;return vd(Zh(this).then(function (d) {
    b = !0;c.ob++;return bi($h(c, ai(c, d, !0))["delete"](a))
  }).then(function () {delete c.J[a]}), function () {b && c.ob--})
};

h.ze = function () {
  var a = this;return Zh(this).then(function (b) {
    var c = $h(a, ai(a, b, !1));return c.getAll ? bi(c.getAll()) : new H(function (a, b) {
      var f = [], g = c.openCursor();g.onsuccess = function (b) {(b = b.target.result) ? (f.push(b.value), b["continue"]()) : a(f)};g.onerror = function (a) {b(Error(a.target.errorCode))}
    })
  }).then(function (b) {
    var c = {}, d = [];if (0 == a.ob) {
      for (d = 0; d < b.length; d++)c[b[d][a.ic]] = b[d][a.wd];d = df(a.J, c);a.J = c
    }return d
  })
};h.Ia = function (a) {
  0 == this.ub.length && this.Fc();this.ub.push(a)
};

h.Ua = function (a) {
  La(this.ub, function (b) {return b == a});0 == this.ub.length && this.Wb()
};h.Fc = function () {
  var a = this;this.Wb();var b = function () {
    a.wc = ve(1E3).then(p(a.ze, a)).then(function (b) {0 < b.length && w(a.ub, function (a) {a(b)})}).then(b).N(function (a) {"STOP_EVENT" != a.message && b()});return a.wc
  };b()
};h.Wb = function () {this.wc && this.wc.cancel("STOP_EVENT")};var ci = function (a, b, c, d, e, f) {

  this.le = a;this.pd = b;this.nb = d;this.se = e;this.tb = f;this.I = {};Yg || (Yg = new Xg);a = Yg;this.pb = new a.Qc.M;this.Hc = new a.Qc.sd;this.ib = c;this.ed = p(this.fd, this);this.Yc = p(this.de, this);this.J = {}
}, di, ei = function () {

  if (!di) {
    Wh || (Wh = new Xh("firebaseLocalStorageDb", "firebaseLocalStorage", "fbase_key", "value", 1));var a = (navigator.userAgent || "").toLowerCase();di = new ci("firebase", ":", Wh, y && !!pb && 11 == pb || /Edge\/\d+/.test($a), -1 != a.indexOf("safari") && -1 == a.indexOf("chrome") && window != window.top ?
    !0 : !1, of())
  }return di
};h = ci.prototype;h.G = function (a, b) {return this.le + this.pd + a.name + (b ? this.pd + b : "")};h.get = function (a, b) {
  var c = this.G(a, b);return this.nb && a.M ? this.ib.get(c).then(function (a) {return a && a.value}) : (a.M ? this.pb : this.Hc).get(c)
};h.remove = function (a, b) {
  var c = this.G(a, b);if (this.nb && a.M)return this.ib.remove(c);a.M && !this.tb && (this.J[c] = null);return (a.M ? this.pb : this.Hc).remove(c)
};

h.set = function (a, b, c) {
  var d = this.G(a, c);if (this.nb && a.M)return this.ib.set(d, b);var e = this, f = a.M ? this.pb : this.Hc;return f.set(d, b).then(function () {return f.get(d)}).then(function (b) {a.M && !this.tb && (e.J[d] = b)})
};h.addListener = function (a, b, c) {
  a = this.G(a, b);this.tb || (this.J[a] = window.localStorage.getItem(a));Ta(this.I) && this.Fc();this.I[a] || (this.I[a] = []);this.I[a].push(c)
};

h.removeListener = function (a, b, c) {
  a = this.G(a, b);this.I[a] && (La(this.I[a], function (a) {return a == c}), 0 == this.I[a].length && delete this.I[a]);Ta(this.I) && this.Wb()
};h.Fc = function () {this.nb ? this.ib.Ia(this.Yc) : (this.pb.Ia(this.ed), this.tb || fi(this))};

var fi = function (a) {
  gi(a);a.sc = setInterval(function () {for (var b in a.I) {
    var c = window.localStorage.getItem(b);c != a.J[b] && (a.J[b] = c, c = new Mb({ type:"storage", key:b, target:window, oldValue:a.J[b], newValue:c }), a.fd(c))
  }}, 2E3)
}, gi = function (a) {a.sc && (clearInterval(a.sc), a.sc = null)};ci.prototype.Wb = function () {this.nb ? this.ib.Ua(this.Yc) : (this.pb.Ua(this.ed), this.tb || gi(this))};

ci.prototype.fd = function (a) {
  var b = a.Cb.key;if (this.se) {
    var c = window.localStorage.getItem(b);a = a.Cb.newValue;a != c && (a ? window.localStorage.setItem(b, a) : a || window.localStorage.removeItem(b))
  }this.J[b] = window.localStorage.getItem(b);this.Lc(b)
};ci.prototype.de = function (a) {w(a, p(this.Lc, this))};ci.prototype.Lc = function (a) {this.I[a] && w(this.I[a], function (a) {a()})};var hi = function (a) {

  this.$ = a;this.P = ei()
}, Sh = { name:"redirectUser", M:!1 }, Th = function (a) {return a.P.remove(Sh, a.$)}, ii = function (a, b) {return a.P.get(Sh, a.$).then(function (a) {
  a && b && (a.authDomain = b);return Uh(a || {})
})};var ji = function (a) {

  this.$ = a;this.P = ei()
}, ki = { name:"authUser", M:!0 }, li = function (a) {return a.P.remove(ki, a.$)}, mi = function (a, b) {return a.P.get(ki, a.$).then(function (a) {
  a && b && (a.authDomain = b);return Uh(a || {})
})};var X = function (a) {

  this.jc = !1;P(this, "app", a);if (W(this).options && W(this).options.apiKey)a = firebase.SDK_VERSION ? lf(firebase.SDK_VERSION) : null, this.c = new S(W(this).options && W(this).options.apiKey, null, a);else throw new Q("invalid-api-key");this.R = [];this.cb = [];this.me = firebase.INTERNAL.createSubscribe(p(this.ee, this));ni(this, null);this.Da = this.ga = null;try {this.ga = new ji(W(this).options.apiKey + ":" + W(this).name), this.Da = new hi(W(this).options.apiKey + ":" + W(this).name), this.C = this.f(oi(this))}catch (b) {this.C =
  J(b)}this.kb = !1;this.Uc = p(this.ye, this);this.ud = p(this.Oa, this);this.vd = p(this.Yd, this);this.td = p(this.Xd, this);pi(this);this.INTERNAL = {};this.INTERNAL["delete"] = p(this["delete"], this)
};X.prototype.toJSON = function () {return { apiKey:W(this).options.apiKey, authDomain:W(this).options.authDomain, appName:W(this).name, currentUser:Z(this) && Z(this).B() }};X.prototype.Na = function () {return this.Md || J(new Q("auth-domain-config-required"))};

var pi = function (a) {
  var b = W(a).options.authDomain, c = W(a).options.apiKey;b && nf() && (a.Md = a.C.then(function () {
    a.s = th(b, c, W(a).name);a.s.subscribe(a);Z(a) && Fh(Z(a));a.Bc && (Fh(a.Bc), a.Bc = null);return a.s
  }))
};h = X.prototype;h.Mc = function (a, b) {switch (a){case "unknown":case "signInViaRedirect":return !0;case "signInViaPopup":return this.ca == b && !!this.V;default:return !1}};

h.Ea = function (a, b, c, d) {"signInViaPopup" == a && this.ca == d && (c && this.Aa ? this.Aa(c) : b && !c && this.V && this.V(b), this.Ba && (this.Ba.cancel(), this.Ba = null), delete this.V, delete this.Aa)};h.fb = function (a, b) {return "signInViaRedirect" == a || "signInViaPopup" == a && this.ca == b && this.V ? p(this.Pd, this) : null};

h.Pd = function (a, b) {
  var c = this, d = null, e = Cf(c.c, { requestUri:a, sessionId:b }).then(function (a) {
    d = Pf(a);return a
  }), f = c.C.then(function () {return e}).then(function (a) {return qi(c, a)}).then(function () {return { user:Z(c), credential:d }});return this.f(f)
};h.Db = function () {return Math.floor(1E9 * Math.random()).toString()};

h.signInWithPopup = function (a) {
  if (!nf())return J(new Q("operation-not-supported-in-this-environment"));var b = this, c = xf(a.providerId), d = this.Db(), e = null;!of() && W(this).options.authDomain && a.isOAuthProvider && (e = Kg(W(this).options.authDomain, W(this).options.apiKey, W(this).name, "signInViaPopup", a.providerId, a.Gb(), null, d, firebase.SDK_VERSION || null));var f = gf(e, c && c.rb, c && c.qb), c = this.Na().then(function (b) {if (!e)return ph(b, f, "signInViaPopup", a, d)}).then(function () {return new H(function (a, c) {
    b.Ea("signInViaPopup",
    null, new Q("cancelled-popup-request"), b.ca);b.V = a;b.Aa = c;b.ca = d;b.Ba = rh(b, "signInViaPopup", f, d)
  })}).then(function (a) {
    f && (f || window).close();return a
  }).N(function (a) {
    f && (f || window).close();throw a;
  });return this.f(c)
};h.signInWithRedirect = function (a) {
  if (!nf())return J(new Q("operation-not-supported-in-this-environment"));var b = this, c = this.Na().then(function () {return qh(b.s, "signInViaRedirect", a)});return this.f(c)
};

h.getRedirectResult = function () {
  if (!nf())return J(new Q("operation-not-supported-in-this-environment"));var a = this, b = this.Na().then(function () {return a.s.getRedirectResult()});return this.f(b)
};

var qi = function (a, b) {
  var c = {};c.apiKey = W(a).options.apiKey;c.authDomain = W(a).options.authDomain;c.appName = W(a).name;return a.C.then(function () {return Vh(c, b, a.Da)}).then(function (b) {
    if (Z(a) && b.uid == Z(a).uid)return Z(a).copy(b), a.Oa(b);ni(a, b);Fh(b);return a.Oa(b)
  }).then(function () {a.ma()})
}, ni = function (a, b) {

  Z(a) && (Dh(Z(a), a.ud), fc(Z(a), "tokenChanged", a.vd), fc(Z(a), "userDeleted", a.td));b && (b.Vb.push(a.ud), Xb(b, "tokenChanged", a.vd), Xb(b, "userDeleted", a.td));P(a, "currentUser", b)
};

X.prototype.signOut = function () {
  var a = this, b = this.C.then(function () {
    if (!Z(a))return I();ni(a, null);return li(a.ga).then(function () {a.ma()})
  });return this.f(b)
};

var ri = function (a) {
  var b = ii(a.Da, W(a).options.authDomain).then(function (b) {
    if (a.Bc = b)b.Ca = a.Da;return Th(a.Da)
  });return a.f(b)
}, oi = function (a) {

  var b = W(a).options.authDomain, c = vd(ri(a).then(function () {return mi(a.ga, b)}).then(function (b) {return b ? (b.Ca = a.Da, b.reload().then(function () {return b}).N(function (c) {return "auth/network-request-failed" == c.code ? b : li(a.ga)})) : null}).then(function (b) {
    ni(a, b || null);a.kb = !0;a.ma()
  }), function () {if (!a.jc) {
    a.kb = !0;var b = a.ga;b.P.addListener(ki, b.$, a.Uc)
  }});return a.f(c)
};

X.prototype.ye = function () {
  var a = this;return mi(this.ga, W(this).options.authDomain).then(function (b) {if (!a.jc) {
    var c;if (c = Z(a) && b) {
      c = Z(a).uid;var d = b.uid;c = void 0 === c || null === c || "" === c || void 0 === d || null === d || "" === d ? !1 : c == d
    }if (c)return Z(a).copy(b), Z(a).getToken();ni(a, b);b && (Fh(b), b.Ca = a.Da);a.s.subscribe(a);a.ma()
  }})
};X.prototype.Oa = function (a) {
  var b = this.ga;return b.P.set(ki, a.B(), b.$)
};X.prototype.Yd = function () {
  this.kb = !0;this.ma();this.Oa(Z(this))
};X.prototype.Xd = function () {this.signOut()};

var si = function (a, b) {return a.f(b.then(function (b) {return qi(a, b)}).then(function () {return Z(a)}))};h = X.prototype;h.ee = function (a) {
  var b = this;this.addAuthTokenListener(function () {a.next(Z(b))})
};h.onAuthStateChanged = function (a, b, c) {
  var d = this;this.kb && firebase.Promise.resolve().then(function () {n(a) ? a(Z(d)) : n(a.next) && a.next(Z(d))});return this.me(a, b, c)
};h.getToken = function (a) {
  var b = this, c = this.C.then(function () {return Z(b) ? Z(b).getToken(a).then(function (a) {return { accessToken:a }}) : null});return this.f(c)
};

h.signInWithCustomToken = function (a) {
  var b = this;return this.C.then(function () {return si(b, R(b.c, yg, { token:a }))}).then(function (a) {
    Lh(a, "isAnonymous", !1);return b.Oa(a)
  }).then(function () {return Z(b)})
};h.signInWithEmailAndPassword = function (a, b) {
  var c = this;return this.C.then(function () {return si(c, R(c.c, Lf, { email:a, password:b }))})
};h.createUserWithEmailAndPassword = function (a, b) {
  var c = this;return this.C.then(function () {return si(c, R(c.c, vg, { email:a, password:b }))})
};

h.signInWithCredential = function (a) {
  var b = this;return this.C.then(function () {return si(b, a.Fb(b.c))})
};h.signInAnonymously = function () {
  var a = Z(this), b = this;return a && a.isAnonymous ? I(a) : this.C.then(function () {return si(b, b.c.signInAnonymously())}).then(function (a) {
    Lh(a, "isAnonymous", !0);return b.Oa(a)
  }).then(function () {return Z(b)})
};var W = function (a) {return a.app}, Z = function (a) {return a.currentUser};h = X.prototype;
h.ma = function () {for (var a = 0; a < this.cb.length; a++)if (this.cb[a])this.cb[a](Z(this) && Z(this)._lat || null)};h.addAuthTokenListener = function (a) {
  this.cb.push(a);var b = this;this.kb && this.C.then(function () {a(Z(b) && Z(b)._lat || null)})
};h.removeAuthTokenListener = function (a) {La(this.cb, function (b) {return b == a})};h["delete"] = function () {

  this.jc = !0;for (var a = 0; a < this.R.length; a++)this.R[a].cancel("app-deleted");this.R = [];this.ga && (a = this.ga, a.P.removeListener(ki, a.$, this.Uc));this.s && this.s.unsubscribe(this)
};

h.f = function (a) {
  var b = this;this.R.push(a);vd(a, function () {Ka(b.R, a)});return a
};h.fetchProvidersForEmail = function (a) {return this.f(dg(this.c, a))};h.verifyPasswordResetCode = function (a) {return this.checkActionCode(a).then(function (a) {return a.data.email})};h.confirmPasswordReset = function (a, b) {return this.f(this.c.confirmPasswordReset(a, b).then(function () {}))};h.checkActionCode = function (a) {return this.f(this.c.checkActionCode(a).then(function (a) {return { data:{ email:a.email } }}))};h.applyActionCode = function (a) {return this.f(this.c.applyActionCode(a).then(function () {}))};

h.sendPasswordResetEmail = function (a) {return this.f(this.c.sendPasswordResetEmail(a).then(function () {}))};gh(X.prototype, { applyActionCode:{ name:"applyActionCode", b:[T("code")] }, checkActionCode:{ name:"checkActionCode", b:[T("code")] }, confirmPasswordReset:{ name:"confirmPasswordReset", b:[T("code"), T("newPassword")] }, createUserWithEmailAndPassword:{ name:"createUserWithEmailAndPassword", b:[T("email"), T("password")] }, fetchProvidersForEmail:{ name:"fetchProvidersForEmail", b:[T("email")] }, getRedirectResult:{ name:"getRedirectResult", b:[] }, onAuthStateChanged:{ name:"onAuthStateChanged", b:[eh($g(), ah(), "nextOrObserver"),
ah("opt_error", !0), ah("opt_completed", !0), ], }, sendPasswordResetEmail:{ name:"sendPasswordResetEmail", b:[T("email")] }, signInAnonymously:{ name:"signInAnonymously", b:[] }, signInWithCredential:{ name:"signInWithCredential", b:[ch()] }, signInWithCustomToken:{ name:"signInWithCustomToken", b:[T("token")] }, signInWithEmailAndPassword:{ name:"signInWithEmailAndPassword", b:[T("email"), T("password")] }, signInWithPopup:{ name:"signInWithPopup", b:[dh()] }, signInWithRedirect:{ name:"signInWithRedirect", b:[dh()] }, signOut:{ name:"signOut",
b:[], }, toJSON:{ name:"toJSON", b:[T(null, !0)] }, verifyPasswordResetCode:{ name:"verifyPasswordResetCode", b:[T("code")] }, });
gh(V.prototype, { "delete":{ name:"delete", b:[] }, getToken:{ name:"getToken", b:[{ name:"opt_forceRefresh", Y:"a boolean", optional:!0, Z:function (a) {return "boolean" == typeof a} }] }, link:{ name:"link", b:[ch()] }, linkWithPopup:{ name:"linkWithPopup", b:[dh()] }, linkWithRedirect:{ name:"linkWithRedirect", b:[dh()] }, reauthenticate:{ name:"reauthenticate", b:[ch()] }, reload:{ name:"reload", b:[] }, sendEmailVerification:{ name:"sendEmailVerification", b:[] }, toJSON:{ name:"toJSON", b:[T(null, !0)] }, unlink:{ name:"unlink", b:[T("provider")] },

updateEmail:{ name:"updateEmail", b:[T("email")] }, updatePassword:{ name:"updatePassword", b:[T("password")] }, updateProfile:{ name:"updateProfile", b:[$g("profile")] }, });gh(H.prototype, { N:{ name:"catch" }, then:{ name:"then" } });U(Nf, "credential", function (a, b) {return new Kf(a, b)}, [T("email"), T("password")]);gh(Gf.prototype, { addScope:{ name:"addScope", b:[T("scope")] } });U(Gf, "credential", Gf.credential, [eh(T(), $g(), "token")]);gh(Hf.prototype, { addScope:{ name:"addScope", b:[T("scope")] } });
U(Hf, "credential", Hf.credential, [eh(T(), $g(), "token")]);gh(If.prototype, { addScope:{ name:"addScope", b:[T("scope")] } });U(If, "credential", If.credential, [eh(T(), eh($g(), bh()), "idToken"), eh(T(), bh(), "accessToken", !0)]);U(Jf, "credential", Jf.credential, [eh(T(), $g(), "token"), T("secret", !0)]);
(function () {if ("undefined" !== typeof firebase && firebase.INTERNAL && firebase.INTERNAL.registerService) {
  var a = { Auth:X, Error:Q };U(a, "EmailAuthProvider", Nf, []);U(a, "FacebookAuthProvider", Gf, []);U(a, "GithubAuthProvider", Hf, []);U(a, "GoogleAuthProvider", If, []);U(a, "TwitterAuthProvider", Jf, []);firebase.INTERNAL.registerService("auth", function (a, c) {
    var d = new X(a);c({ INTERNAL:{ getToken:p(d.getToken, d), addAuthTokenListener:p(d.addAuthTokenListener, d), removeAuthTokenListener:p(d.removeAuthTokenListener, d) } });return d
  },

  a);firebase.INTERNAL.registerAppHook(function (a, c) {"create" === a && c.auth()});firebase.INTERNAL.extendNamespace({ User:V })
}else throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");})();
})();
