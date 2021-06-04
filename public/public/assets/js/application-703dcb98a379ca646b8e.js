/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public/assets/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/application.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/channels sync recursive _channel\\.js$":
/*!****************************************************!*\
  !*** ./app/javascript/channels sync _channel\.js$ ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./app/javascript/channels sync recursive _channel\\.js$";

/***/ }),

/***/ "./app/javascript/channels/index.js":
/*!******************************************!*\
  !*** ./app/javascript/channels/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.
var channels = __webpack_require__("./app/javascript/channels sync recursive _channel\\.js$");

channels.keys().forEach(channels);

/***/ }),

/***/ "./app/javascript/packs/application.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/application.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rails_ujs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rails/ujs */ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js");
/* harmony import */ var _rails_ujs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rails_ujs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var turbolinks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! turbolinks */ "./node_modules/turbolinks/dist/turbolinks.js");
/* harmony import */ var turbolinks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(turbolinks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _rails_activestorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rails/activestorage */ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js");
/* harmony import */ var _rails_activestorage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rails_activestorage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var channels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! channels */ "./app/javascript/channels/index.js");
/* harmony import */ var channels__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(channels__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _plugins_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../plugins/index.js */ "./app/javascript/plugins/index.js");






__webpack_require__(/*! jquery */ "./node_modules/jquery/src/jquery.js");

_rails_ujs__WEBPACK_IMPORTED_MODULE_0___default.a.start();
turbolinks__WEBPACK_IMPORTED_MODULE_1___default.a.start();
_rails_activestorage__WEBPACK_IMPORTED_MODULE_2__["start"]();
window.d3 = d3;

/***/ }),

/***/ "./app/javascript/plugins/d3.min.js":
/*!******************************************!*\
  !*** ./app/javascript/plugins/d3.min.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

d3 = function () {
  function n(n) {
    return null != n && !isNaN(n);
  }

  function t(n) {
    return n.length;
  }

  function e(n) {
    for (var t = 1; n * t % 1;) {
      t *= 10;
    }

    return t;
  }

  function r(n, t) {
    try {
      for (var e in t) {
        Object.defineProperty(n.prototype, e, {
          value: t[e],
          enumerable: !1
        });
      }
    } catch (r) {
      n.prototype = t;
    }
  }

  function u() {}

  function i() {}

  function o(n, t, e) {
    return function () {
      var r = e.apply(t, arguments);
      return r === t ? n : r;
    };
  }

  function a(n, t) {
    if (t in n) return t;
    t = t.charAt(0).toUpperCase() + t.substring(1);

    for (var e = 0, r = fa.length; r > e; ++e) {
      var u = fa[e] + t;
      if (u in n) return u;
    }
  }

  function c() {}

  function s() {}

  function l(n) {
    function t() {
      for (var t, r = e, u = -1, i = r.length; ++u < i;) {
        (t = r[u].on) && t.apply(this, arguments);
      }

      return n;
    }

    var e = [],
        r = new u();
    return t.on = function (t, u) {
      var i,
          o = r.get(t);
      return arguments.length < 2 ? o && o.on : (o && (o.on = null, e = e.slice(0, i = e.indexOf(o)).concat(e.slice(i + 1)), r.remove(t)), u && e.push(r.set(t, {
        on: u
      })), n);
    }, t;
  }

  function f() {
    Bo.event.preventDefault();
  }

  function h() {
    for (var n, t = Bo.event; n = t.sourceEvent;) {
      t = n;
    }

    return t;
  }

  function g(n) {
    for (var t = new s(), e = 0, r = arguments.length; ++e < r;) {
      t[arguments[e]] = l(t);
    }

    return t.of = function (e, r) {
      return function (u) {
        try {
          var i = u.sourceEvent = Bo.event;
          u.target = n, Bo.event = u, t[u.type].apply(e, r);
        } finally {
          Bo.event = i;
        }
      };
    }, t;
  }

  function p(n) {
    return ga(n, ya), n;
  }

  function v(n) {
    return "function" == typeof n ? n : function () {
      return pa(n, this);
    };
  }

  function d(n) {
    return "function" == typeof n ? n : function () {
      return va(n, this);
    };
  }

  function m(n, t) {
    function e() {
      this.removeAttribute(n);
    }

    function r() {
      this.removeAttributeNS(n.space, n.local);
    }

    function u() {
      this.setAttribute(n, t);
    }

    function i() {
      this.setAttributeNS(n.space, n.local, t);
    }

    function o() {
      var e = t.apply(this, arguments);
      null == e ? this.removeAttribute(n) : this.setAttribute(n, e);
    }

    function a() {
      var e = t.apply(this, arguments);
      null == e ? this.removeAttributeNS(n.space, n.local) : this.setAttributeNS(n.space, n.local, e);
    }

    return n = Bo.ns.qualify(n), null == t ? n.local ? r : e : "function" == typeof t ? n.local ? a : o : n.local ? i : u;
  }

  function y(n) {
    return n.trim().replace(/\s+/g, " ");
  }

  function x(n) {
    return new RegExp("(?:^|\\s+)" + Bo.requote(n) + "(?:\\s+|$)", "g");
  }

  function M(n) {
    return n.trim().split(/^|\s+/);
  }

  function _(n, t) {
    function e() {
      for (var e = -1; ++e < u;) {
        n[e](this, t);
      }
    }

    function r() {
      for (var e = -1, r = t.apply(this, arguments); ++e < u;) {
        n[e](this, r);
      }
    }

    n = M(n).map(b);
    var u = n.length;
    return "function" == typeof t ? r : e;
  }

  function b(n) {
    var t = x(n);
    return function (e, r) {
      if (u = e.classList) return r ? u.add(n) : u.remove(n);
      var u = e.getAttribute("class") || "";
      r ? (t.lastIndex = 0, t.test(u) || e.setAttribute("class", y(u + " " + n))) : e.setAttribute("class", y(u.replace(t, " ")));
    };
  }

  function w(n, t, e) {
    function r() {
      this.style.removeProperty(n);
    }

    function u() {
      this.style.setProperty(n, t, e);
    }

    function i() {
      var r = t.apply(this, arguments);
      null == r ? this.style.removeProperty(n) : this.style.setProperty(n, r, e);
    }

    return null == t ? r : "function" == typeof t ? i : u;
  }

  function S(n, t) {
    function e() {
      delete this[n];
    }

    function r() {
      this[n] = t;
    }

    function u() {
      var e = t.apply(this, arguments);
      null == e ? delete this[n] : this[n] = e;
    }

    return null == t ? e : "function" == typeof t ? u : r;
  }

  function k(n) {
    return "function" == typeof n ? n : (n = Bo.ns.qualify(n)).local ? function () {
      return this.ownerDocument.createElementNS(n.space, n.local);
    } : function () {
      return this.ownerDocument.createElementNS(this.namespaceURI, n);
    };
  }

  function E(n) {
    return {
      __data__: n
    };
  }

  function A(n) {
    return function () {
      return ma(this, n);
    };
  }

  function C(n) {
    return arguments.length || (n = Bo.ascending), function (t, e) {
      return t && e ? n(t.__data__, e.__data__) : !t - !e;
    };
  }

  function N(n, t) {
    for (var e = 0, r = n.length; r > e; e++) {
      for (var u, i = n[e], o = 0, a = i.length; a > o; o++) {
        (u = i[o]) && t(u, o, e);
      }
    }

    return n;
  }

  function L(n) {
    return ga(n, Ma), n;
  }

  function T(n) {
    var t, e;
    return function (r, u, i) {
      var o,
          a = n[i].update,
          c = a.length;

      for (i != e && (e = i, t = 0), u >= t && (t = u + 1); !(o = a[t]) && ++t < c;) {
        ;
      }

      return o;
    };
  }

  function q() {
    var n = this.__transition__;
    n && ++n.active;
  }

  function z(n, t, e) {
    function r() {
      var t = this[o];
      t && (this.removeEventListener(n, t, t.$), delete this[o]);
    }

    function u() {
      var u = s(t, Jo(arguments));
      r.call(this), this.addEventListener(n, this[o] = u, u.$ = e), u._ = t;
    }

    function i() {
      var t,
          e = new RegExp("^__on([^.]+)" + Bo.requote(n) + "$");

      for (var r in this) {
        if (t = r.match(e)) {
          var u = this[r];
          this.removeEventListener(t[1], u, u.$), delete this[r];
        }
      }
    }

    var o = "__on" + n,
        a = n.indexOf("."),
        s = R;
    a > 0 && (n = n.substring(0, a));
    var l = ba.get(n);
    return l && (n = l, s = D), a ? t ? u : r : t ? c : i;
  }

  function R(n, t) {
    return function (e) {
      var r = Bo.event;
      Bo.event = e, t[0] = this.__data__;

      try {
        n.apply(this, t);
      } finally {
        Bo.event = r;
      }
    };
  }

  function D(n, t) {
    var e = R(n, t);
    return function (n) {
      var t = this,
          r = n.relatedTarget;
      r && (r === t || 8 & r.compareDocumentPosition(t)) || e.call(t, n);
    };
  }

  function P() {
    var n = ".dragsuppress-" + ++Sa,
        t = "click" + n,
        e = Bo.select(Qo).on("touchmove" + n, f).on("dragstart" + n, f).on("selectstart" + n, f);

    if (wa) {
      var r = Ko.style,
          u = r[wa];
      r[wa] = "none";
    }

    return function (i) {
      function o() {
        e.on(t, null);
      }

      e.on(n, null), wa && (r[wa] = u), i && (e.on(t, function () {
        f(), o();
      }, !0), setTimeout(o, 0));
    };
  }

  function U(n, t) {
    t.changedTouches && (t = t.changedTouches[0]);
    var e = n.ownerSVGElement || n;

    if (e.createSVGPoint) {
      var r = e.createSVGPoint();

      if (0 > ka && (Qo.scrollX || Qo.scrollY)) {
        e = Bo.select("body").append("svg").style({
          position: "absolute",
          top: 0,
          left: 0,
          margin: 0,
          padding: 0,
          border: "none"
        }, "important");
        var u = e[0][0].getScreenCTM();
        ka = !(u.f || u.e), e.remove();
      }

      return ka ? (r.x = t.pageX, r.y = t.pageY) : (r.x = t.clientX, r.y = t.clientY), r = r.matrixTransform(n.getScreenCTM().inverse()), [r.x, r.y];
    }

    var i = n.getBoundingClientRect();
    return [t.clientX - i.left - n.clientLeft, t.clientY - i.top - n.clientTop];
  }

  function j(n) {
    return n > 0 ? 1 : 0 > n ? -1 : 0;
  }

  function H(n) {
    return n > 1 ? 0 : -1 > n ? Ea : Math.acos(n);
  }

  function F(n) {
    return n > 1 ? Ca : -1 > n ? -Ca : Math.asin(n);
  }

  function O(n) {
    return ((n = Math.exp(n)) - 1 / n) / 2;
  }

  function Y(n) {
    return ((n = Math.exp(n)) + 1 / n) / 2;
  }

  function I(n) {
    return ((n = Math.exp(2 * n)) - 1) / (n + 1);
  }

  function Z(n) {
    return (n = Math.sin(n / 2)) * n;
  }

  function V() {}

  function X(n, t, e) {
    return new $(n, t, e);
  }

  function $(n, t, e) {
    this.h = n, this.s = t, this.l = e;
  }

  function B(n, t, e) {
    function r(n) {
      return n > 360 ? n -= 360 : 0 > n && (n += 360), 60 > n ? i + (o - i) * n / 60 : 180 > n ? o : 240 > n ? i + (o - i) * (240 - n) / 60 : i;
    }

    function u(n) {
      return Math.round(255 * r(n));
    }

    var i, o;
    return n = isNaN(n) ? 0 : (n %= 360) < 0 ? n + 360 : n, t = isNaN(t) ? 0 : 0 > t ? 0 : t > 1 ? 1 : t, e = 0 > e ? 0 : e > 1 ? 1 : e, o = .5 >= e ? e * (1 + t) : e + t - e * t, i = 2 * e - o, at(u(n + 120), u(n), u(n - 120));
  }

  function W(n, t, e) {
    return new J(n, t, e);
  }

  function J(n, t, e) {
    this.h = n, this.c = t, this.l = e;
  }

  function G(n, t, e) {
    return isNaN(n) && (n = 0), isNaN(t) && (t = 0), K(e, Math.cos(n *= Ta) * t, Math.sin(n) * t);
  }

  function K(n, t, e) {
    return new Q(n, t, e);
  }

  function Q(n, t, e) {
    this.l = n, this.a = t, this.b = e;
  }

  function nt(n, t, e) {
    var r = (n + 16) / 116,
        u = r + t / 500,
        i = r - e / 200;
    return u = et(u) * Ya, r = et(r) * Ia, i = et(i) * Za, at(ut(3.2404542 * u - 1.5371385 * r - .4985314 * i), ut(-.969266 * u + 1.8760108 * r + .041556 * i), ut(.0556434 * u - .2040259 * r + 1.0572252 * i));
  }

  function tt(n, t, e) {
    return n > 0 ? W(Math.atan2(e, t) * qa, Math.sqrt(t * t + e * e), n) : W(0 / 0, 0 / 0, n);
  }

  function et(n) {
    return n > .206893034 ? n * n * n : (n - 4 / 29) / 7.787037;
  }

  function rt(n) {
    return n > .008856 ? Math.pow(n, 1 / 3) : 7.787037 * n + 4 / 29;
  }

  function ut(n) {
    return Math.round(255 * (.00304 >= n ? 12.92 * n : 1.055 * Math.pow(n, 1 / 2.4) - .055));
  }

  function it(n) {
    return at(n >> 16, 255 & n >> 8, 255 & n);
  }

  function ot(n) {
    return it(n) + "";
  }

  function at(n, t, e) {
    return new ct(n, t, e);
  }

  function ct(n, t, e) {
    this.r = n, this.g = t, this.b = e;
  }

  function st(n) {
    return 16 > n ? "0" + Math.max(0, n).toString(16) : Math.min(255, n).toString(16);
  }

  function lt(n, t, e) {
    var r,
        u,
        i,
        o = 0,
        a = 0,
        c = 0;
    if (r = /([a-z]+)\((.*)\)/i.exec(n)) switch (u = r[2].split(","), r[1]) {
      case "hsl":
        return e(parseFloat(u[0]), parseFloat(u[1]) / 100, parseFloat(u[2]) / 100);

      case "rgb":
        return t(pt(u[0]), pt(u[1]), pt(u[2]));
    }
    return (i = $a.get(n)) ? t(i.r, i.g, i.b) : (null != n && "#" === n.charAt(0) && (4 === n.length ? (o = n.charAt(1), o += o, a = n.charAt(2), a += a, c = n.charAt(3), c += c) : 7 === n.length && (o = n.substring(1, 3), a = n.substring(3, 5), c = n.substring(5, 7)), o = parseInt(o, 16), a = parseInt(a, 16), c = parseInt(c, 16)), t(o, a, c));
  }

  function ft(n, t, e) {
    var r,
        u,
        i = Math.min(n /= 255, t /= 255, e /= 255),
        o = Math.max(n, t, e),
        a = o - i,
        c = (o + i) / 2;
    return a ? (u = .5 > c ? a / (o + i) : a / (2 - o - i), r = n == o ? (t - e) / a + (e > t ? 6 : 0) : t == o ? (e - n) / a + 2 : (n - t) / a + 4, r *= 60) : (r = 0 / 0, u = c > 0 && 1 > c ? 0 : r), X(r, u, c);
  }

  function ht(n, t, e) {
    n = gt(n), t = gt(t), e = gt(e);
    var r = rt((.4124564 * n + .3575761 * t + .1804375 * e) / Ya),
        u = rt((.2126729 * n + .7151522 * t + .072175 * e) / Ia),
        i = rt((.0193339 * n + .119192 * t + .9503041 * e) / Za);
    return K(116 * u - 16, 500 * (r - u), 200 * (u - i));
  }

  function gt(n) {
    return (n /= 255) <= .04045 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4);
  }

  function pt(n) {
    var t = parseFloat(n);
    return "%" === n.charAt(n.length - 1) ? Math.round(2.55 * t) : t;
  }

  function vt(n) {
    return "function" == typeof n ? n : function () {
      return n;
    };
  }

  function dt(n) {
    return n;
  }

  function mt(n) {
    return function (t, e, r) {
      return 2 === arguments.length && "function" == typeof e && (r = e, e = null), yt(t, e, n, r);
    };
  }

  function yt(n, t, e, r) {
    function u() {
      var n,
          t = c.status;

      if (!t && c.responseText || t >= 200 && 300 > t || 304 === t) {
        try {
          n = e.call(i, c);
        } catch (r) {
          return o.error.call(i, r), void 0;
        }

        o.load.call(i, n);
      } else o.error.call(i, c);
    }

    var i = {},
        o = Bo.dispatch("beforesend", "progress", "load", "error"),
        a = {},
        c = new XMLHttpRequest(),
        s = null;
    return !Qo.XDomainRequest || "withCredentials" in c || !/^(http(s)?:)?\/\//.test(n) || (c = new XDomainRequest()), "onload" in c ? c.onload = c.onerror = u : c.onreadystatechange = function () {
      c.readyState > 3 && u();
    }, c.onprogress = function (n) {
      var t = Bo.event;
      Bo.event = n;

      try {
        o.progress.call(i, c);
      } finally {
        Bo.event = t;
      }
    }, i.header = function (n, t) {
      return n = (n + "").toLowerCase(), arguments.length < 2 ? a[n] : (null == t ? delete a[n] : a[n] = t + "", i);
    }, i.mimeType = function (n) {
      return arguments.length ? (t = null == n ? null : n + "", i) : t;
    }, i.responseType = function (n) {
      return arguments.length ? (s = n, i) : s;
    }, i.response = function (n) {
      return e = n, i;
    }, ["get", "post"].forEach(function (n) {
      i[n] = function () {
        return i.send.apply(i, [n].concat(Jo(arguments)));
      };
    }), i.send = function (e, r, u) {
      if (2 === arguments.length && "function" == typeof r && (u = r, r = null), c.open(e, n, !0), null == t || "accept" in a || (a.accept = t + ",*/*"), c.setRequestHeader) for (var l in a) {
        c.setRequestHeader(l, a[l]);
      }
      return null != t && c.overrideMimeType && c.overrideMimeType(t), null != s && (c.responseType = s), null != u && i.on("error", u).on("load", function (n) {
        u(null, n);
      }), o.beforesend.call(i, c), c.send(null == r ? null : r), i;
    }, i.abort = function () {
      return c.abort(), i;
    }, Bo.rebind(i, o, "on"), null == r ? i : i.get(xt(r));
  }

  function xt(n) {
    return 1 === n.length ? function (t, e) {
      n(null == t ? e : null);
    } : n;
  }

  function Mt() {
    var n = _t(),
        t = bt() - n;

    t > 24 ? (isFinite(t) && (clearTimeout(Ga), Ga = setTimeout(Mt, t)), Ja = 0) : (Ja = 1, Qa(Mt));
  }

  function _t() {
    var n = Date.now();

    for (Ka = Ba; Ka;) {
      n >= Ka.t && (Ka.f = Ka.c(n - Ka.t)), Ka = Ka.n;
    }

    return n;
  }

  function bt() {
    for (var n, t = Ba, e = 1 / 0; t;) {
      t.f ? t = n ? n.n = t.n : Ba = t.n : (t.t < e && (e = t.t), t = (n = t).n);
    }

    return Wa = n, e;
  }

  function wt(n, t) {
    var e = Math.pow(10, 3 * ca(8 - t));
    return {
      scale: t > 8 ? function (n) {
        return n / e;
      } : function (n) {
        return n * e;
      },
      symbol: n
    };
  }

  function St(n, t) {
    return t - (n ? Math.ceil(Math.log(n) / Math.LN10) : 1);
  }

  function kt(n) {
    return n + "";
  }

  function Et() {}

  function At(n, t, e) {
    var r = e.s = n + t,
        u = r - n,
        i = r - u;
    e.t = n - i + (t - u);
  }

  function Ct(n, t) {
    n && fc.hasOwnProperty(n.type) && fc[n.type](n, t);
  }

  function Nt(n, t, e) {
    var r,
        u = -1,
        i = n.length - e;

    for (t.lineStart(); ++u < i;) {
      r = n[u], t.point(r[0], r[1], r[2]);
    }

    t.lineEnd();
  }

  function Lt(n, t) {
    var e = -1,
        r = n.length;

    for (t.polygonStart(); ++e < r;) {
      Nt(n[e], t, 1);
    }

    t.polygonEnd();
  }

  function Tt() {
    function n(n, t) {
      n *= Ta, t = t * Ta / 2 + Ea / 4;
      var e = n - r,
          o = Math.cos(t),
          a = Math.sin(t),
          c = i * a,
          s = u * o + c * Math.cos(e),
          l = c * Math.sin(e);
      gc.add(Math.atan2(l, s)), r = n, u = o, i = a;
    }

    var t, e, r, u, i;
    pc.point = function (o, a) {
      pc.point = n, r = (t = o) * Ta, u = Math.cos(a = (e = a) * Ta / 2 + Ea / 4), i = Math.sin(a);
    }, pc.lineEnd = function () {
      n(t, e);
    };
  }

  function qt(n) {
    var t = n[0],
        e = n[1],
        r = Math.cos(e);
    return [r * Math.cos(t), r * Math.sin(t), Math.sin(e)];
  }

  function zt(n, t) {
    return n[0] * t[0] + n[1] * t[1] + n[2] * t[2];
  }

  function Rt(n, t) {
    return [n[1] * t[2] - n[2] * t[1], n[2] * t[0] - n[0] * t[2], n[0] * t[1] - n[1] * t[0]];
  }

  function Dt(n, t) {
    n[0] += t[0], n[1] += t[1], n[2] += t[2];
  }

  function Pt(n, t) {
    return [n[0] * t, n[1] * t, n[2] * t];
  }

  function Ut(n) {
    var t = Math.sqrt(n[0] * n[0] + n[1] * n[1] + n[2] * n[2]);
    n[0] /= t, n[1] /= t, n[2] /= t;
  }

  function jt(n) {
    return [Math.atan2(n[1], n[0]), F(n[2])];
  }

  function Ht(n, t) {
    return ca(n[0] - t[0]) < Na && ca(n[1] - t[1]) < Na;
  }

  function Ft(n, t) {
    n *= Ta;
    var e = Math.cos(t *= Ta);
    Ot(e * Math.cos(n), e * Math.sin(n), Math.sin(t));
  }

  function Ot(n, t, e) {
    ++vc, mc += (n - mc) / vc, yc += (t - yc) / vc, xc += (e - xc) / vc;
  }

  function Yt() {
    function n(n, u) {
      n *= Ta;
      var i = Math.cos(u *= Ta),
          o = i * Math.cos(n),
          a = i * Math.sin(n),
          c = Math.sin(u),
          s = Math.atan2(Math.sqrt((s = e * c - r * a) * s + (s = r * o - t * c) * s + (s = t * a - e * o) * s), t * o + e * a + r * c);
      dc += s, Mc += s * (t + (t = o)), _c += s * (e + (e = a)), bc += s * (r + (r = c)), Ot(t, e, r);
    }

    var t, e, r;

    Ec.point = function (u, i) {
      u *= Ta;
      var o = Math.cos(i *= Ta);
      t = o * Math.cos(u), e = o * Math.sin(u), r = Math.sin(i), Ec.point = n, Ot(t, e, r);
    };
  }

  function It() {
    Ec.point = Ft;
  }

  function Zt() {
    function n(n, t) {
      n *= Ta;
      var e = Math.cos(t *= Ta),
          o = e * Math.cos(n),
          a = e * Math.sin(n),
          c = Math.sin(t),
          s = u * c - i * a,
          l = i * o - r * c,
          f = r * a - u * o,
          h = Math.sqrt(s * s + l * l + f * f),
          g = r * o + u * a + i * c,
          p = h && -H(g) / h,
          v = Math.atan2(h, g);
      wc += p * s, Sc += p * l, kc += p * f, dc += v, Mc += v * (r + (r = o)), _c += v * (u + (u = a)), bc += v * (i + (i = c)), Ot(r, u, i);
    }

    var t, e, r, u, i;
    Ec.point = function (o, a) {
      t = o, e = a, Ec.point = n, o *= Ta;
      var c = Math.cos(a *= Ta);
      r = c * Math.cos(o), u = c * Math.sin(o), i = Math.sin(a), Ot(r, u, i);
    }, Ec.lineEnd = function () {
      n(t, e), Ec.lineEnd = It, Ec.point = Ft;
    };
  }

  function Vt() {
    return !0;
  }

  function Xt(n, t, e, r, u) {
    var i = [],
        o = [];

    if (n.forEach(function (n) {
      if (!((t = n.length - 1) <= 0)) {
        var t,
            e = n[0],
            r = n[t];

        if (Ht(e, r)) {
          u.lineStart();

          for (var a = 0; t > a; ++a) {
            u.point((e = n[a])[0], e[1]);
          }

          return u.lineEnd(), void 0;
        }

        var c = new Bt(e, n, null, !0),
            s = new Bt(e, null, c, !1);
        c.o = s, i.push(c), o.push(s), c = new Bt(r, n, null, !1), s = new Bt(r, null, c, !0), c.o = s, i.push(c), o.push(s);
      }
    }), o.sort(t), $t(i), $t(o), i.length) {
      for (var a = 0, c = e, s = o.length; s > a; ++a) {
        o[a].e = c = !c;
      }

      for (var l, f, h = i[0];;) {
        for (var g = h, p = !0; g.v;) {
          if ((g = g.n) === h) return;
        }

        l = g.z, u.lineStart();

        do {
          if (g.v = g.o.v = !0, g.e) {
            if (p) for (var a = 0, s = l.length; s > a; ++a) {
              u.point((f = l[a])[0], f[1]);
            } else r(g.x, g.n.x, 1, u);
            g = g.n;
          } else {
            if (p) {
              l = g.p.z;

              for (var a = l.length - 1; a >= 0; --a) {
                u.point((f = l[a])[0], f[1]);
              }
            } else r(g.x, g.p.x, -1, u);

            g = g.p;
          }

          g = g.o, l = g.z, p = !p;
        } while (!g.v);

        u.lineEnd();
      }
    }
  }

  function $t(n) {
    if (t = n.length) {
      for (var t, e, r = 0, u = n[0]; ++r < t;) {
        u.n = e = n[r], e.p = u, u = e;
      }

      u.n = e = n[0], e.p = u;
    }
  }

  function Bt(n, t, e, r) {
    this.x = n, this.z = t, this.o = e, this.e = r, this.v = !1, this.n = this.p = null;
  }

  function Wt(n, t, e, r) {
    return function (u, i) {
      function o(t, e) {
        var r = u(t, e);
        n(t = r[0], e = r[1]) && i.point(t, e);
      }

      function a(n, t) {
        var e = u(n, t);
        d.point(e[0], e[1]);
      }

      function c() {
        y.point = a, d.lineStart();
      }

      function s() {
        y.point = o, d.lineEnd();
      }

      function l(n, t) {
        v.push([n, t]);
        var e = u(n, t);
        M.point(e[0], e[1]);
      }

      function f() {
        M.lineStart(), v = [];
      }

      function h() {
        l(v[0][0], v[0][1]), M.lineEnd();
        var n,
            t = M.clean(),
            e = x.buffer(),
            r = e.length;

        if (v.pop(), p.push(v), v = null, r) {
          if (1 & t) {
            n = e[0];
            var u,
                r = n.length - 1,
                o = -1;

            for (i.lineStart(); ++o < r;) {
              i.point((u = n[o])[0], u[1]);
            }

            return i.lineEnd(), void 0;
          }

          r > 1 && 2 & t && e.push(e.pop().concat(e.shift())), g.push(e.filter(Jt));
        }
      }

      var g,
          p,
          v,
          d = t(i),
          m = u.invert(r[0], r[1]),
          y = {
        point: o,
        lineStart: c,
        lineEnd: s,
        polygonStart: function polygonStart() {
          y.point = l, y.lineStart = f, y.lineEnd = h, g = [], p = [], i.polygonStart();
        },
        polygonEnd: function polygonEnd() {
          y.point = o, y.lineStart = c, y.lineEnd = s, g = Bo.merge(g);
          var n = Qt(m, p);
          g.length ? Xt(g, Kt, n, e, i) : n && (i.lineStart(), e(null, null, 1, i), i.lineEnd()), i.polygonEnd(), g = p = null;
        },
        sphere: function sphere() {
          i.polygonStart(), i.lineStart(), e(null, null, 1, i), i.lineEnd(), i.polygonEnd();
        }
      },
          x = Gt(),
          M = t(x);
      return y;
    };
  }

  function Jt(n) {
    return n.length > 1;
  }

  function Gt() {
    var n,
        t = [];
    return {
      lineStart: function lineStart() {
        t.push(n = []);
      },
      point: function point(t, e) {
        n.push([t, e]);
      },
      lineEnd: c,
      buffer: function buffer() {
        var e = t;
        return t = [], n = null, e;
      },
      rejoin: function rejoin() {
        t.length > 1 && t.push(t.pop().concat(t.shift()));
      }
    };
  }

  function Kt(n, t) {
    return ((n = n.x)[0] < 0 ? n[1] - Ca - Na : Ca - n[1]) - ((t = t.x)[0] < 0 ? t[1] - Ca - Na : Ca - t[1]);
  }

  function Qt(n, t) {
    var e = n[0],
        r = n[1],
        u = [Math.sin(e), -Math.cos(e), 0],
        i = 0,
        o = 0;
    gc.reset();

    for (var a = 0, c = t.length; c > a; ++a) {
      var s = t[a],
          l = s.length;
      if (l) for (var f = s[0], h = f[0], g = f[1] / 2 + Ea / 4, p = Math.sin(g), v = Math.cos(g), d = 1;;) {
        d === l && (d = 0), n = s[d];

        var m = n[0],
            y = n[1] / 2 + Ea / 4,
            x = Math.sin(y),
            M = Math.cos(y),
            _ = m - h,
            b = ca(_) > Ea,
            w = p * x;

        if (gc.add(Math.atan2(w * Math.sin(_), v * M + w * Math.cos(_))), i += b ? _ + (_ >= 0 ? Aa : -Aa) : _, b ^ h >= e ^ m >= e) {
          var S = Rt(qt(f), qt(n));
          Ut(S);
          var k = Rt(u, S);
          Ut(k);
          var E = (b ^ _ >= 0 ? -1 : 1) * F(k[2]);
          (r > E || r === E && (S[0] || S[1])) && (o += b ^ _ >= 0 ? 1 : -1);
        }

        if (!d++) break;
        h = m, p = x, v = M, f = n;
      }
    }

    return (-Na > i || Na > i && 0 > gc) ^ 1 & o;
  }

  function ne(n) {
    var t,
        e = 0 / 0,
        r = 0 / 0,
        u = 0 / 0;
    return {
      lineStart: function lineStart() {
        n.lineStart(), t = 1;
      },
      point: function point(i, o) {
        var a = i > 0 ? Ea : -Ea,
            c = ca(i - e);
        ca(c - Ea) < Na ? (n.point(e, r = (r + o) / 2 > 0 ? Ca : -Ca), n.point(u, r), n.lineEnd(), n.lineStart(), n.point(a, r), n.point(i, r), t = 0) : u !== a && c >= Ea && (ca(e - u) < Na && (e -= u * Na), ca(i - a) < Na && (i -= a * Na), r = te(e, r, i, o), n.point(u, r), n.lineEnd(), n.lineStart(), n.point(a, r), t = 0), n.point(e = i, r = o), u = a;
      },
      lineEnd: function lineEnd() {
        n.lineEnd(), e = r = 0 / 0;
      },
      clean: function clean() {
        return 2 - t;
      }
    };
  }

  function te(n, t, e, r) {
    var u,
        i,
        o = Math.sin(n - e);
    return ca(o) > Na ? Math.atan((Math.sin(t) * (i = Math.cos(r)) * Math.sin(e) - Math.sin(r) * (u = Math.cos(t)) * Math.sin(n)) / (u * i * o)) : (t + r) / 2;
  }

  function ee(n, t, e, r) {
    var u;
    if (null == n) u = e * Ca, r.point(-Ea, u), r.point(0, u), r.point(Ea, u), r.point(Ea, 0), r.point(Ea, -u), r.point(0, -u), r.point(-Ea, -u), r.point(-Ea, 0), r.point(-Ea, u);else if (ca(n[0] - t[0]) > Na) {
      var i = n[0] < t[0] ? Ea : -Ea;
      u = e * i / 2, r.point(-i, u), r.point(0, u), r.point(i, u);
    } else r.point(t[0], t[1]);
  }

  function re(n) {
    function t(n, t) {
      return Math.cos(n) * Math.cos(t) > i;
    }

    function e(n) {
      var e, i, c, s, l;
      return {
        lineStart: function lineStart() {
          s = c = !1, l = 1;
        },
        point: function point(f, h) {
          var g,
              p = [f, h],
              v = t(f, h),
              d = o ? v ? 0 : u(f, h) : v ? u(f + (0 > f ? Ea : -Ea), h) : 0;
          if (!e && (s = c = v) && n.lineStart(), v !== c && (g = r(e, p), (Ht(e, g) || Ht(p, g)) && (p[0] += Na, p[1] += Na, v = t(p[0], p[1]))), v !== c) l = 0, v ? (n.lineStart(), g = r(p, e), n.point(g[0], g[1])) : (g = r(e, p), n.point(g[0], g[1]), n.lineEnd()), e = g;else if (a && e && o ^ v) {
            var m;
            d & i || !(m = r(p, e, !0)) || (l = 0, o ? (n.lineStart(), n.point(m[0][0], m[0][1]), n.point(m[1][0], m[1][1]), n.lineEnd()) : (n.point(m[1][0], m[1][1]), n.lineEnd(), n.lineStart(), n.point(m[0][0], m[0][1])));
          }
          !v || e && Ht(e, p) || n.point(p[0], p[1]), e = p, c = v, i = d;
        },
        lineEnd: function lineEnd() {
          c && n.lineEnd(), e = null;
        },
        clean: function clean() {
          return l | (s && c) << 1;
        }
      };
    }

    function r(n, t, e) {
      var r = qt(n),
          u = qt(t),
          o = [1, 0, 0],
          a = Rt(r, u),
          c = zt(a, a),
          s = a[0],
          l = c - s * s;
      if (!l) return !e && n;
      var f = i * c / l,
          h = -i * s / l,
          g = Rt(o, a),
          p = Pt(o, f),
          v = Pt(a, h);
      Dt(p, v);
      var d = g,
          m = zt(p, d),
          y = zt(d, d),
          x = m * m - y * (zt(p, p) - 1);

      if (!(0 > x)) {
        var M = Math.sqrt(x),
            _ = Pt(d, (-m - M) / y);

        if (Dt(_, p), _ = jt(_), !e) return _;
        var b,
            w = n[0],
            S = t[0],
            k = n[1],
            E = t[1];
        w > S && (b = w, w = S, S = b);
        var A = S - w,
            C = ca(A - Ea) < Na,
            N = C || Na > A;

        if (!C && k > E && (b = k, k = E, E = b), N ? C ? k + E > 0 ^ _[1] < (ca(_[0] - w) < Na ? k : E) : k <= _[1] && _[1] <= E : A > Ea ^ (w <= _[0] && _[0] <= S)) {
          var L = Pt(d, (-m + M) / y);
          return Dt(L, p), [_, jt(L)];
        }
      }
    }

    function u(t, e) {
      var r = o ? n : Ea - n,
          u = 0;
      return -r > t ? u |= 1 : t > r && (u |= 2), -r > e ? u |= 4 : e > r && (u |= 8), u;
    }

    var i = Math.cos(n),
        o = i > 0,
        a = ca(i) > Na,
        c = Te(n, 6 * Ta);
    return Wt(t, e, c, o ? [0, -n] : [-Ea, n - Ea]);
  }

  function ue(n, t, e, r) {
    return function (u) {
      var i,
          o = u.a,
          a = u.b,
          c = o.x,
          s = o.y,
          l = a.x,
          f = a.y,
          h = 0,
          g = 1,
          p = l - c,
          v = f - s;

      if (i = n - c, p || !(i > 0)) {
        if (i /= p, 0 > p) {
          if (h > i) return;
          g > i && (g = i);
        } else if (p > 0) {
          if (i > g) return;
          i > h && (h = i);
        }

        if (i = e - c, p || !(0 > i)) {
          if (i /= p, 0 > p) {
            if (i > g) return;
            i > h && (h = i);
          } else if (p > 0) {
            if (h > i) return;
            g > i && (g = i);
          }

          if (i = t - s, v || !(i > 0)) {
            if (i /= v, 0 > v) {
              if (h > i) return;
              g > i && (g = i);
            } else if (v > 0) {
              if (i > g) return;
              i > h && (h = i);
            }

            if (i = r - s, v || !(0 > i)) {
              if (i /= v, 0 > v) {
                if (i > g) return;
                i > h && (h = i);
              } else if (v > 0) {
                if (h > i) return;
                g > i && (g = i);
              }

              return h > 0 && (u.a = {
                x: c + h * p,
                y: s + h * v
              }), 1 > g && (u.b = {
                x: c + g * p,
                y: s + g * v
              }), u;
            }
          }
        }
      }
    };
  }

  function ie(n, t, e, r) {
    function u(r, u) {
      return ca(r[0] - n) < Na ? u > 0 ? 0 : 3 : ca(r[0] - e) < Na ? u > 0 ? 2 : 1 : ca(r[1] - t) < Na ? u > 0 ? 1 : 0 : u > 0 ? 3 : 2;
    }

    function i(n, t) {
      return o(n.x, t.x);
    }

    function o(n, t) {
      var e = u(n, 1),
          r = u(t, 1);
      return e !== r ? e - r : 0 === e ? t[1] - n[1] : 1 === e ? n[0] - t[0] : 2 === e ? n[1] - t[1] : t[0] - n[0];
    }

    return function (a) {
      function c(n) {
        for (var t = 0, e = m.length, r = n[1], u = 0; e > u; ++u) {
          for (var i, o = 1, a = m[u], c = a.length, l = a[0]; c > o; ++o) {
            i = a[o], l[1] <= r ? i[1] > r && s(l, i, n) > 0 && ++t : i[1] <= r && s(l, i, n) < 0 && --t, l = i;
          }
        }

        return 0 !== t;
      }

      function s(n, t, e) {
        return (t[0] - n[0]) * (e[1] - n[1]) - (e[0] - n[0]) * (t[1] - n[1]);
      }

      function l(i, a, c, s) {
        var l = 0,
            f = 0;

        if (null == i || (l = u(i, c)) !== (f = u(a, c)) || o(i, a) < 0 ^ c > 0) {
          do {
            s.point(0 === l || 3 === l ? n : e, l > 1 ? r : t);
          } while ((l = (l + c + 4) % 4) !== f);
        } else s.point(a[0], a[1]);
      }

      function f(u, i) {
        return u >= n && e >= u && i >= t && r >= i;
      }

      function h(n, t) {
        f(n, t) && a.point(n, t);
      }

      function g() {
        L.point = v, m && m.push(y = []), k = !0, S = !1, b = w = 0 / 0;
      }

      function p() {
        d && (v(x, M), _ && S && C.rejoin(), d.push(C.buffer())), L.point = h, S && a.lineEnd();
      }

      function v(n, t) {
        n = Math.max(-Cc, Math.min(Cc, n)), t = Math.max(-Cc, Math.min(Cc, t));
        var e = f(n, t);
        if (m && y.push([n, t]), k) x = n, M = t, _ = e, k = !1, e && (a.lineStart(), a.point(n, t));else if (e && S) a.point(n, t);else {
          var r = {
            a: {
              x: b,
              y: w
            },
            b: {
              x: n,
              y: t
            }
          };
          N(r) ? (S || (a.lineStart(), a.point(r.a.x, r.a.y)), a.point(r.b.x, r.b.y), e || a.lineEnd(), E = !1) : e && (a.lineStart(), a.point(n, t), E = !1);
        }
        b = n, w = t, S = e;
      }

      var d,
          m,
          y,
          x,
          M,
          _,
          b,
          w,
          S,
          k,
          E,
          A = a,
          C = Gt(),
          N = ue(n, t, e, r),
          L = {
        point: h,
        lineStart: g,
        lineEnd: p,
        polygonStart: function polygonStart() {
          a = C, d = [], m = [], E = !0;
        },
        polygonEnd: function polygonEnd() {
          a = A, d = Bo.merge(d);
          var t = c([n, r]),
              e = E && t,
              u = d.length;
          (e || u) && (a.polygonStart(), e && (a.lineStart(), l(null, null, 1, a), a.lineEnd()), u && Xt(d, i, t, l, a), a.polygonEnd()), d = m = y = null;
        }
      };

      return L;
    };
  }

  function oe(n, t) {
    function e(e, r) {
      return e = n(e, r), t(e[0], e[1]);
    }

    return n.invert && t.invert && (e.invert = function (e, r) {
      return e = t.invert(e, r), e && n.invert(e[0], e[1]);
    }), e;
  }

  function ae(n) {
    var t = 0,
        e = Ea / 3,
        r = we(n),
        u = r(t, e);
    return u.parallels = function (n) {
      return arguments.length ? r(t = n[0] * Ea / 180, e = n[1] * Ea / 180) : [180 * (t / Ea), 180 * (e / Ea)];
    }, u;
  }

  function ce(n, t) {
    function e(n, t) {
      var e = Math.sqrt(i - 2 * u * Math.sin(t)) / u;
      return [e * Math.sin(n *= u), o - e * Math.cos(n)];
    }

    var r = Math.sin(n),
        u = (r + Math.sin(t)) / 2,
        i = 1 + r * (2 * u - r),
        o = Math.sqrt(i) / u;
    return e.invert = function (n, t) {
      var e = o - t;
      return [Math.atan2(n, e) / u, F((i - (n * n + e * e) * u * u) / (2 * u))];
    }, e;
  }

  function se() {
    function n(n, t) {
      Lc += u * n - r * t, r = n, u = t;
    }

    var t, e, r, u;
    Dc.point = function (i, o) {
      Dc.point = n, t = r = i, e = u = o;
    }, Dc.lineEnd = function () {
      n(t, e);
    };
  }

  function le(n, t) {
    Tc > n && (Tc = n), n > zc && (zc = n), qc > t && (qc = t), t > Rc && (Rc = t);
  }

  function fe() {
    function n(n, t) {
      o.push("M", n, ",", t, i);
    }

    function t(n, t) {
      o.push("M", n, ",", t), a.point = e;
    }

    function e(n, t) {
      o.push("L", n, ",", t);
    }

    function r() {
      a.point = n;
    }

    function u() {
      o.push("Z");
    }

    var i = he(4.5),
        o = [],
        a = {
      point: n,
      lineStart: function lineStart() {
        a.point = t;
      },
      lineEnd: r,
      polygonStart: function polygonStart() {
        a.lineEnd = u;
      },
      polygonEnd: function polygonEnd() {
        a.lineEnd = r, a.point = n;
      },
      pointRadius: function pointRadius(n) {
        return i = he(n), a;
      },
      result: function result() {
        if (o.length) {
          var n = o.join("");
          return o = [], n;
        }
      }
    };
    return a;
  }

  function he(n) {
    return "m0," + n + "a" + n + "," + n + " 0 1,1 0," + -2 * n + "a" + n + "," + n + " 0 1,1 0," + 2 * n + "z";
  }

  function ge(n, t) {
    mc += n, yc += t, ++xc;
  }

  function pe() {
    function n(n, r) {
      var u = n - t,
          i = r - e,
          o = Math.sqrt(u * u + i * i);
      Mc += o * (t + n) / 2, _c += o * (e + r) / 2, bc += o, ge(t = n, e = r);
    }

    var t, e;

    Uc.point = function (r, u) {
      Uc.point = n, ge(t = r, e = u);
    };
  }

  function ve() {
    Uc.point = ge;
  }

  function de() {
    function n(n, t) {
      var e = n - r,
          i = t - u,
          o = Math.sqrt(e * e + i * i);
      Mc += o * (r + n) / 2, _c += o * (u + t) / 2, bc += o, o = u * n - r * t, wc += o * (r + n), Sc += o * (u + t), kc += 3 * o, ge(r = n, u = t);
    }

    var t, e, r, u;
    Uc.point = function (i, o) {
      Uc.point = n, ge(t = r = i, e = u = o);
    }, Uc.lineEnd = function () {
      n(t, e);
    };
  }

  function me(n) {
    function t(t, e) {
      n.moveTo(t, e), n.arc(t, e, o, 0, Aa);
    }

    function e(t, e) {
      n.moveTo(t, e), a.point = r;
    }

    function r(t, e) {
      n.lineTo(t, e);
    }

    function u() {
      a.point = t;
    }

    function i() {
      n.closePath();
    }

    var o = 4.5,
        a = {
      point: t,
      lineStart: function lineStart() {
        a.point = e;
      },
      lineEnd: u,
      polygonStart: function polygonStart() {
        a.lineEnd = i;
      },
      polygonEnd: function polygonEnd() {
        a.lineEnd = u, a.point = t;
      },
      pointRadius: function pointRadius(n) {
        return o = n, a;
      },
      result: c
    };
    return a;
  }

  function ye(n) {
    function t(n) {
      return (a ? r : e)(n);
    }

    function e(t) {
      return _e(t, function (e, r) {
        e = n(e, r), t.point(e[0], e[1]);
      });
    }

    function r(t) {
      function e(e, r) {
        e = n(e, r), t.point(e[0], e[1]);
      }

      function r() {
        x = 0 / 0, S.point = i, t.lineStart();
      }

      function i(e, r) {
        var i = qt([e, r]),
            o = n(e, r);
        u(x, M, y, _, b, w, x = o[0], M = o[1], y = e, _ = i[0], b = i[1], w = i[2], a, t), t.point(x, M);
      }

      function o() {
        S.point = e, t.lineEnd();
      }

      function c() {
        r(), S.point = s, S.lineEnd = l;
      }

      function s(n, t) {
        i(f = n, h = t), g = x, p = M, v = _, d = b, m = w, S.point = i;
      }

      function l() {
        u(x, M, y, _, b, w, g, p, f, v, d, m, a, t), S.lineEnd = o, o();
      }

      var f,
          h,
          g,
          p,
          v,
          d,
          m,
          y,
          x,
          M,
          _,
          b,
          w,
          S = {
        point: e,
        lineStart: r,
        lineEnd: o,
        polygonStart: function polygonStart() {
          t.polygonStart(), S.lineStart = c;
        },
        polygonEnd: function polygonEnd() {
          t.polygonEnd(), S.lineStart = r;
        }
      };

      return S;
    }

    function u(t, e, r, a, c, s, l, f, h, g, p, v, d, m) {
      var y = l - t,
          x = f - e,
          M = y * y + x * x;

      if (M > 4 * i && d--) {
        var _ = a + g,
            b = c + p,
            w = s + v,
            S = Math.sqrt(_ * _ + b * b + w * w),
            k = Math.asin(w /= S),
            E = ca(ca(w) - 1) < Na || ca(r - h) < Na ? (r + h) / 2 : Math.atan2(b, _),
            A = n(E, k),
            C = A[0],
            N = A[1],
            L = C - t,
            T = N - e,
            q = x * L - y * T;

        (q * q / M > i || ca((y * L + x * T) / M - .5) > .3 || o > a * g + c * p + s * v) && (u(t, e, r, a, c, s, C, N, E, _ /= S, b /= S, w, d, m), m.point(C, N), u(C, N, E, _, b, w, l, f, h, g, p, v, d, m));
      }
    }

    var i = .5,
        o = Math.cos(30 * Ta),
        a = 16;
    return t.precision = function (n) {
      return arguments.length ? (a = (i = n * n) > 0 && 16, t) : Math.sqrt(i);
    }, t;
  }

  function xe(n) {
    var t = ye(function (t, e) {
      return n([t * qa, e * qa]);
    });
    return function (n) {
      return Se(t(n));
    };
  }

  function Me(n) {
    this.stream = n;
  }

  function _e(n, t) {
    return {
      point: t,
      sphere: function sphere() {
        n.sphere();
      },
      lineStart: function lineStart() {
        n.lineStart();
      },
      lineEnd: function lineEnd() {
        n.lineEnd();
      },
      polygonStart: function polygonStart() {
        n.polygonStart();
      },
      polygonEnd: function polygonEnd() {
        n.polygonEnd();
      }
    };
  }

  function be(n) {
    return we(function () {
      return n;
    })();
  }

  function we(n) {
    function t(n) {
      return n = a(n[0] * Ta, n[1] * Ta), [n[0] * h + c, s - n[1] * h];
    }

    function e(n) {
      return n = a.invert((n[0] - c) / h, (s - n[1]) / h), n && [n[0] * qa, n[1] * qa];
    }

    function r() {
      a = oe(o = Ae(m, y, x), i);
      var n = i(v, d);
      return c = g - n[0] * h, s = p + n[1] * h, u();
    }

    function u() {
      return l && (l.valid = !1, l = null), t;
    }

    var i,
        o,
        a,
        c,
        s,
        l,
        f = ye(function (n, t) {
      return n = i(n, t), [n[0] * h + c, s - n[1] * h];
    }),
        h = 150,
        g = 480,
        p = 250,
        v = 0,
        d = 0,
        m = 0,
        y = 0,
        x = 0,
        M = Ac,
        _ = dt,
        b = null,
        w = null;
    return t.stream = function (n) {
      return l && (l.valid = !1), l = Se(M(o, f(_(n)))), l.valid = !0, l;
    }, t.clipAngle = function (n) {
      return arguments.length ? (M = null == n ? (b = n, Ac) : re((b = +n) * Ta), u()) : b;
    }, t.clipExtent = function (n) {
      return arguments.length ? (w = n, _ = n ? ie(n[0][0], n[0][1], n[1][0], n[1][1]) : dt, u()) : w;
    }, t.scale = function (n) {
      return arguments.length ? (h = +n, r()) : h;
    }, t.translate = function (n) {
      return arguments.length ? (g = +n[0], p = +n[1], r()) : [g, p];
    }, t.center = function (n) {
      return arguments.length ? (v = n[0] % 360 * Ta, d = n[1] % 360 * Ta, r()) : [v * qa, d * qa];
    }, t.rotate = function (n) {
      return arguments.length ? (m = n[0] % 360 * Ta, y = n[1] % 360 * Ta, x = n.length > 2 ? n[2] % 360 * Ta : 0, r()) : [m * qa, y * qa, x * qa];
    }, Bo.rebind(t, f, "precision"), function () {
      return i = n.apply(this, arguments), t.invert = i.invert && e, r();
    };
  }

  function Se(n) {
    return _e(n, function (t, e) {
      n.point(t * Ta, e * Ta);
    });
  }

  function ke(n, t) {
    return [n, t];
  }

  function Ee(n, t) {
    return [n > Ea ? n - Aa : -Ea > n ? n + Aa : n, t];
  }

  function Ae(n, t, e) {
    return n ? t || e ? oe(Ne(n), Le(t, e)) : Ne(n) : t || e ? Le(t, e) : Ee;
  }

  function Ce(n) {
    return function (t, e) {
      return t += n, [t > Ea ? t - Aa : -Ea > t ? t + Aa : t, e];
    };
  }

  function Ne(n) {
    var t = Ce(n);
    return t.invert = Ce(-n), t;
  }

  function Le(n, t) {
    function e(n, t) {
      var e = Math.cos(t),
          a = Math.cos(n) * e,
          c = Math.sin(n) * e,
          s = Math.sin(t),
          l = s * r + a * u;
      return [Math.atan2(c * i - l * o, a * r - s * u), F(l * i + c * o)];
    }

    var r = Math.cos(n),
        u = Math.sin(n),
        i = Math.cos(t),
        o = Math.sin(t);
    return e.invert = function (n, t) {
      var e = Math.cos(t),
          a = Math.cos(n) * e,
          c = Math.sin(n) * e,
          s = Math.sin(t),
          l = s * i - c * o;
      return [Math.atan2(c * i + s * o, a * r + l * u), F(l * r - a * u)];
    }, e;
  }

  function Te(n, t) {
    var e = Math.cos(n),
        r = Math.sin(n);
    return function (u, i, o, a) {
      var c = o * t;
      null != u ? (u = qe(e, u), i = qe(e, i), (o > 0 ? i > u : u > i) && (u += o * Aa)) : (u = n + o * Aa, i = n - .5 * c);

      for (var s, l = u; o > 0 ? l > i : i > l; l -= c) {
        a.point((s = jt([e, -r * Math.cos(l), -r * Math.sin(l)]))[0], s[1]);
      }
    };
  }

  function qe(n, t) {
    var e = qt(t);
    e[0] -= n, Ut(e);
    var r = H(-e[1]);
    return ((-e[2] < 0 ? -r : r) + 2 * Math.PI - Na) % (2 * Math.PI);
  }

  function ze(n, t, e) {
    var r = Bo.range(n, t - Na, e).concat(t);
    return function (n) {
      return r.map(function (t) {
        return [n, t];
      });
    };
  }

  function Re(n, t, e) {
    var r = Bo.range(n, t - Na, e).concat(t);
    return function (n) {
      return r.map(function (t) {
        return [t, n];
      });
    };
  }

  function De(n) {
    return n.source;
  }

  function Pe(n) {
    return n.target;
  }

  function Ue(n, t, e, r) {
    var u = Math.cos(t),
        i = Math.sin(t),
        o = Math.cos(r),
        a = Math.sin(r),
        c = u * Math.cos(n),
        s = u * Math.sin(n),
        l = o * Math.cos(e),
        f = o * Math.sin(e),
        h = 2 * Math.asin(Math.sqrt(Z(r - t) + u * o * Z(e - n))),
        g = 1 / Math.sin(h),
        p = h ? function (n) {
      var t = Math.sin(n *= h) * g,
          e = Math.sin(h - n) * g,
          r = e * c + t * l,
          u = e * s + t * f,
          o = e * i + t * a;
      return [Math.atan2(u, r) * qa, Math.atan2(o, Math.sqrt(r * r + u * u)) * qa];
    } : function () {
      return [n * qa, t * qa];
    };
    return p.distance = h, p;
  }

  function je() {
    function n(n, u) {
      var i = Math.sin(u *= Ta),
          o = Math.cos(u),
          a = ca((n *= Ta) - t),
          c = Math.cos(a);
      jc += Math.atan2(Math.sqrt((a = o * Math.sin(a)) * a + (a = r * i - e * o * c) * a), e * i + r * o * c), t = n, e = i, r = o;
    }

    var t, e, r;
    Hc.point = function (u, i) {
      t = u * Ta, e = Math.sin(i *= Ta), r = Math.cos(i), Hc.point = n;
    }, Hc.lineEnd = function () {
      Hc.point = Hc.lineEnd = c;
    };
  }

  function He(n, t) {
    function e(t, e) {
      var r = Math.cos(t),
          u = Math.cos(e),
          i = n(r * u);
      return [i * u * Math.sin(t), i * Math.sin(e)];
    }

    return e.invert = function (n, e) {
      var r = Math.sqrt(n * n + e * e),
          u = t(r),
          i = Math.sin(u),
          o = Math.cos(u);
      return [Math.atan2(n * i, r * o), Math.asin(r && e * i / r)];
    }, e;
  }

  function Fe(n, t) {
    function e(n, t) {
      var e = ca(ca(t) - Ca) < Na ? 0 : o / Math.pow(u(t), i);
      return [e * Math.sin(i * n), o - e * Math.cos(i * n)];
    }

    var r = Math.cos(n),
        u = function u(n) {
      return Math.tan(Ea / 4 + n / 2);
    },
        i = n === t ? Math.sin(n) : Math.log(r / Math.cos(t)) / Math.log(u(t) / u(n)),
        o = r * Math.pow(u(n), i) / i;

    return i ? (e.invert = function (n, t) {
      var e = o - t,
          r = j(i) * Math.sqrt(n * n + e * e);
      return [Math.atan2(n, e) / i, 2 * Math.atan(Math.pow(o / r, 1 / i)) - Ca];
    }, e) : Ye;
  }

  function Oe(n, t) {
    function e(n, t) {
      var e = i - t;
      return [e * Math.sin(u * n), i - e * Math.cos(u * n)];
    }

    var r = Math.cos(n),
        u = n === t ? Math.sin(n) : (r - Math.cos(t)) / (t - n),
        i = r / u + n;
    return ca(u) < Na ? ke : (e.invert = function (n, t) {
      var e = i - t;
      return [Math.atan2(n, e) / u, i - j(u) * Math.sqrt(n * n + e * e)];
    }, e);
  }

  function Ye(n, t) {
    return [n, Math.log(Math.tan(Ea / 4 + t / 2))];
  }

  function Ie(n) {
    var t,
        e = be(n),
        r = e.scale,
        u = e.translate,
        i = e.clipExtent;
    return e.scale = function () {
      var n = r.apply(e, arguments);
      return n === e ? t ? e.clipExtent(null) : e : n;
    }, e.translate = function () {
      var n = u.apply(e, arguments);
      return n === e ? t ? e.clipExtent(null) : e : n;
    }, e.clipExtent = function (n) {
      var o = i.apply(e, arguments);

      if (o === e) {
        if (t = null == n) {
          var a = Ea * r(),
              c = u();
          i([[c[0] - a, c[1] - a], [c[0] + a, c[1] + a]]);
        }
      } else t && (o = null);

      return o;
    }, e.clipExtent(null);
  }

  function Ze(n, t) {
    return [Math.log(Math.tan(Ea / 4 + t / 2)), -n];
  }

  function Ve(n) {
    return n[0];
  }

  function Xe(n) {
    return n[1];
  }

  function $e(n, t, e, r) {
    var u, i, o, a, c, s, l;
    return u = r[n], i = u[0], o = u[1], u = r[t], a = u[0], c = u[1], u = r[e], s = u[0], l = u[1], (l - o) * (a - i) - (c - o) * (s - i) > 0;
  }

  function Be(n, t, e) {
    return (e[0] - t[0]) * (n[1] - t[1]) < (e[1] - t[1]) * (n[0] - t[0]);
  }

  function We(n, t, e, r) {
    var u = n[0],
        i = e[0],
        o = t[0] - u,
        a = r[0] - i,
        c = n[1],
        s = e[1],
        l = t[1] - c,
        f = r[1] - s,
        h = (a * (c - s) - f * (u - i)) / (f * o - a * l);
    return [u + h * o, c + h * l];
  }

  function Je(n) {
    var t = n[0],
        e = n[n.length - 1];
    return !(t[0] - e[0] || t[1] - e[1]);
  }

  function Ge() {
    yr(this), this.edge = this.site = this.circle = null;
  }

  function Ke(n) {
    var t = Gc.pop() || new Ge();
    return t.site = n, t;
  }

  function Qe(n) {
    sr(n), Bc.remove(n), Gc.push(n), yr(n);
  }

  function nr(n) {
    var t = n.circle,
        e = t.x,
        r = t.cy,
        u = {
      x: e,
      y: r
    },
        i = n.P,
        o = n.N,
        a = [n];
    Qe(n);

    for (var c = i; c.circle && ca(e - c.circle.x) < Na && ca(r - c.circle.cy) < Na;) {
      i = c.P, a.unshift(c), Qe(c), c = i;
    }

    a.unshift(c), sr(c);

    for (var s = o; s.circle && ca(e - s.circle.x) < Na && ca(r - s.circle.cy) < Na;) {
      o = s.N, a.push(s), Qe(s), s = o;
    }

    a.push(s), sr(s);
    var l,
        f = a.length;

    for (l = 1; f > l; ++l) {
      s = a[l], c = a[l - 1], vr(s.edge, c.site, s.site, u);
    }

    c = a[0], s = a[f - 1], s.edge = gr(c.site, s.site, null, u), cr(c), cr(s);
  }

  function tr(n) {
    for (var t, e, r, u, i = n.x, o = n.y, a = Bc._; a;) {
      if (r = er(a, o) - i, r > Na) a = a.L;else {
        if (u = i - rr(a, o), !(u > Na)) {
          r > -Na ? (t = a.P, e = a) : u > -Na ? (t = a, e = a.N) : t = e = a;
          break;
        }

        if (!a.R) {
          t = a;
          break;
        }

        a = a.R;
      }
    }

    var c = Ke(n);

    if (Bc.insert(t, c), t || e) {
      if (t === e) return sr(t), e = Ke(t.site), Bc.insert(c, e), c.edge = e.edge = gr(t.site, c.site), cr(t), cr(e), void 0;
      if (!e) return c.edge = gr(t.site, c.site), void 0;
      sr(t), sr(e);
      var s = t.site,
          l = s.x,
          f = s.y,
          h = n.x - l,
          g = n.y - f,
          p = e.site,
          v = p.x - l,
          d = p.y - f,
          m = 2 * (h * d - g * v),
          y = h * h + g * g,
          x = v * v + d * d,
          M = {
        x: (d * y - g * x) / m + l,
        y: (h * x - v * y) / m + f
      };
      vr(e.edge, s, p, M), c.edge = gr(s, n, null, M), e.edge = gr(n, p, null, M), cr(t), cr(e);
    }
  }

  function er(n, t) {
    var e = n.site,
        r = e.x,
        u = e.y,
        i = u - t;
    if (!i) return r;
    var o = n.P;
    if (!o) return -1 / 0;
    e = o.site;
    var a = e.x,
        c = e.y,
        s = c - t;
    if (!s) return a;
    var l = a - r,
        f = 1 / i - 1 / s,
        h = l / s;
    return f ? (-h + Math.sqrt(h * h - 2 * f * (l * l / (-2 * s) - c + s / 2 + u - i / 2))) / f + r : (r + a) / 2;
  }

  function rr(n, t) {
    var e = n.N;
    if (e) return er(e, t);
    var r = n.site;
    return r.y === t ? r.x : 1 / 0;
  }

  function ur(n) {
    this.site = n, this.edges = [];
  }

  function ir(n) {
    for (var t, e, r, u, i, o, a, c, s, l, f = n[0][0], h = n[1][0], g = n[0][1], p = n[1][1], v = $c, d = v.length; d--;) {
      if (i = v[d], i && i.prepare()) for (a = i.edges, c = a.length, o = 0; c > o;) {
        l = a[o].end(), r = l.x, u = l.y, s = a[++o % c].start(), t = s.x, e = s.y, (ca(r - t) > Na || ca(u - e) > Na) && (a.splice(o, 0, new dr(pr(i.site, l, ca(r - f) < Na && p - u > Na ? {
          x: f,
          y: ca(t - f) < Na ? e : p
        } : ca(u - p) < Na && h - r > Na ? {
          x: ca(e - p) < Na ? t : h,
          y: p
        } : ca(r - h) < Na && u - g > Na ? {
          x: h,
          y: ca(t - h) < Na ? e : g
        } : ca(u - g) < Na && r - f > Na ? {
          x: ca(e - g) < Na ? t : f,
          y: g
        } : null), i.site, null)), ++c);
      }
    }
  }

  function or(n, t) {
    return t.angle - n.angle;
  }

  function ar() {
    yr(this), this.x = this.y = this.arc = this.site = this.cy = null;
  }

  function cr(n) {
    var t = n.P,
        e = n.N;

    if (t && e) {
      var r = t.site,
          u = n.site,
          i = e.site;

      if (r !== i) {
        var o = u.x,
            a = u.y,
            c = r.x - o,
            s = r.y - a,
            l = i.x - o,
            f = i.y - a,
            h = 2 * (c * f - s * l);

        if (!(h >= -La)) {
          var g = c * c + s * s,
              p = l * l + f * f,
              v = (f * g - s * p) / h,
              d = (c * p - l * g) / h,
              f = d + a,
              m = Kc.pop() || new ar();
          m.arc = n, m.site = u, m.x = v + o, m.y = f + Math.sqrt(v * v + d * d), m.cy = f, n.circle = m;

          for (var y = null, x = Jc._; x;) {
            if (m.y < x.y || m.y === x.y && m.x <= x.x) {
              if (!x.L) {
                y = x.P;
                break;
              }

              x = x.L;
            } else {
              if (!x.R) {
                y = x;
                break;
              }

              x = x.R;
            }
          }

          Jc.insert(y, m), y || (Wc = m);
        }
      }
    }
  }

  function sr(n) {
    var t = n.circle;
    t && (t.P || (Wc = t.N), Jc.remove(t), Kc.push(t), yr(t), n.circle = null);
  }

  function lr(n) {
    for (var t, e = Xc, r = ue(n[0][0], n[0][1], n[1][0], n[1][1]), u = e.length; u--;) {
      t = e[u], (!fr(t, n) || !r(t) || ca(t.a.x - t.b.x) < Na && ca(t.a.y - t.b.y) < Na) && (t.a = t.b = null, e.splice(u, 1));
    }
  }

  function fr(n, t) {
    var e = n.b;
    if (e) return !0;
    var r,
        u,
        i = n.a,
        o = t[0][0],
        a = t[1][0],
        c = t[0][1],
        s = t[1][1],
        l = n.l,
        f = n.r,
        h = l.x,
        g = l.y,
        p = f.x,
        v = f.y,
        d = (h + p) / 2,
        m = (g + v) / 2;

    if (v === g) {
      if (o > d || d >= a) return;

      if (h > p) {
        if (i) {
          if (i.y >= s) return;
        } else i = {
          x: d,
          y: c
        };

        e = {
          x: d,
          y: s
        };
      } else {
        if (i) {
          if (i.y < c) return;
        } else i = {
          x: d,
          y: s
        };

        e = {
          x: d,
          y: c
        };
      }
    } else if (r = (h - p) / (v - g), u = m - r * d, -1 > r || r > 1) {
      if (h > p) {
        if (i) {
          if (i.y >= s) return;
        } else i = {
          x: (c - u) / r,
          y: c
        };

        e = {
          x: (s - u) / r,
          y: s
        };
      } else {
        if (i) {
          if (i.y < c) return;
        } else i = {
          x: (s - u) / r,
          y: s
        };

        e = {
          x: (c - u) / r,
          y: c
        };
      }
    } else if (v > g) {
      if (i) {
        if (i.x >= a) return;
      } else i = {
        x: o,
        y: r * o + u
      };

      e = {
        x: a,
        y: r * a + u
      };
    } else {
      if (i) {
        if (i.x < o) return;
      } else i = {
        x: a,
        y: r * a + u
      };

      e = {
        x: o,
        y: r * o + u
      };
    }

    return n.a = i, n.b = e, !0;
  }

  function hr(n, t) {
    this.l = n, this.r = t, this.a = this.b = null;
  }

  function gr(n, t, e, r) {
    var u = new hr(n, t);
    return Xc.push(u), e && vr(u, n, t, e), r && vr(u, t, n, r), $c[n.i].edges.push(new dr(u, n, t)), $c[t.i].edges.push(new dr(u, t, n)), u;
  }

  function pr(n, t, e) {
    var r = new hr(n, null);
    return r.a = t, r.b = e, Xc.push(r), r;
  }

  function vr(n, t, e, r) {
    n.a || n.b ? n.l === e ? n.b = r : n.a = r : (n.a = r, n.l = t, n.r = e);
  }

  function dr(n, t, e) {
    var r = n.a,
        u = n.b;
    this.edge = n, this.site = t, this.angle = e ? Math.atan2(e.y - t.y, e.x - t.x) : n.l === t ? Math.atan2(u.x - r.x, r.y - u.y) : Math.atan2(r.x - u.x, u.y - r.y);
  }

  function mr() {
    this._ = null;
  }

  function yr(n) {
    n.U = n.C = n.L = n.R = n.P = n.N = null;
  }

  function xr(n, t) {
    var e = t,
        r = t.R,
        u = e.U;
    u ? u.L === e ? u.L = r : u.R = r : n._ = r, r.U = u, e.U = r, e.R = r.L, e.R && (e.R.U = e), r.L = e;
  }

  function Mr(n, t) {
    var e = t,
        r = t.L,
        u = e.U;
    u ? u.L === e ? u.L = r : u.R = r : n._ = r, r.U = u, e.U = r, e.L = r.R, e.L && (e.L.U = e), r.R = e;
  }

  function _r(n) {
    for (; n.L;) {
      n = n.L;
    }

    return n;
  }

  function br(n, t) {
    var e,
        r,
        u,
        i = n.sort(wr).pop();

    for (Xc = [], $c = new Array(n.length), Bc = new mr(), Jc = new mr();;) {
      if (u = Wc, i && (!u || i.y < u.y || i.y === u.y && i.x < u.x)) (i.x !== e || i.y !== r) && ($c[i.i] = new ur(i), tr(i), e = i.x, r = i.y), i = n.pop();else {
        if (!u) break;
        nr(u.arc);
      }
    }

    t && (lr(t), ir(t));
    var o = {
      cells: $c,
      edges: Xc
    };
    return Bc = Jc = Xc = $c = null, o;
  }

  function wr(n, t) {
    return t.y - n.y || t.x - n.x;
  }

  function Sr(n, t, e) {
    return (n.x - e.x) * (t.y - n.y) - (n.x - t.x) * (e.y - n.y);
  }

  function kr(n) {
    return n.x;
  }

  function Er(n) {
    return n.y;
  }

  function Ar() {
    return {
      leaf: !0,
      nodes: [],
      point: null,
      x: null,
      y: null
    };
  }

  function Cr(n, t, e, r, u, i) {
    if (!n(t, e, r, u, i)) {
      var o = .5 * (e + u),
          a = .5 * (r + i),
          c = t.nodes;
      c[0] && Cr(n, c[0], e, r, o, a), c[1] && Cr(n, c[1], o, r, u, a), c[2] && Cr(n, c[2], e, a, o, i), c[3] && Cr(n, c[3], o, a, u, i);
    }
  }

  function Nr(n, t) {
    n = Bo.rgb(n), t = Bo.rgb(t);
    var e = n.r,
        r = n.g,
        u = n.b,
        i = t.r - e,
        o = t.g - r,
        a = t.b - u;
    return function (n) {
      return "#" + st(Math.round(e + i * n)) + st(Math.round(r + o * n)) + st(Math.round(u + a * n));
    };
  }

  function Lr(n, t) {
    var e,
        r = {},
        u = {};

    for (e in n) {
      e in t ? r[e] = zr(n[e], t[e]) : u[e] = n[e];
    }

    for (e in t) {
      e in n || (u[e] = t[e]);
    }

    return function (n) {
      for (e in r) {
        u[e] = r[e](n);
      }

      return u;
    };
  }

  function Tr(n, t) {
    return t -= n = +n, function (e) {
      return n + t * e;
    };
  }

  function qr(n, t) {
    var e,
        r,
        u,
        i,
        o,
        a = 0,
        c = 0,
        s = [],
        l = [];

    for (n += "", t += "", ns.lastIndex = 0, r = 0; e = ns.exec(t); ++r) {
      e.index && s.push(t.substring(a, c = e.index)), l.push({
        i: s.length,
        x: e[0]
      }), s.push(null), a = ns.lastIndex;
    }

    for (a < t.length && s.push(t.substring(a)), r = 0, i = l.length; (e = ns.exec(n)) && i > r; ++r) {
      if (o = l[r], o.x == e[0]) {
        if (o.i) {
          if (null == s[o.i + 1]) for (s[o.i - 1] += o.x, s.splice(o.i, 1), u = r + 1; i > u; ++u) {
            l[u].i--;
          } else for (s[o.i - 1] += o.x + s[o.i + 1], s.splice(o.i, 2), u = r + 1; i > u; ++u) {
            l[u].i -= 2;
          }
        } else if (null == s[o.i + 1]) s[o.i] = o.x;else for (s[o.i] = o.x + s[o.i + 1], s.splice(o.i + 1, 1), u = r + 1; i > u; ++u) {
          l[u].i--;
        }
        l.splice(r, 1), i--, r--;
      } else o.x = Tr(parseFloat(e[0]), parseFloat(o.x));
    }

    for (; i > r;) {
      o = l.pop(), null == s[o.i + 1] ? s[o.i] = o.x : (s[o.i] = o.x + s[o.i + 1], s.splice(o.i + 1, 1)), i--;
    }

    return 1 === s.length ? null == s[0] ? (o = l[0].x, function (n) {
      return o(n) + "";
    }) : function () {
      return t;
    } : function (n) {
      for (r = 0; i > r; ++r) {
        s[(o = l[r]).i] = o.x(n);
      }

      return s.join("");
    };
  }

  function zr(n, t) {
    for (var e, r = Bo.interpolators.length; --r >= 0 && !(e = Bo.interpolators[r](n, t));) {
      ;
    }

    return e;
  }

  function Rr(n, t) {
    var e,
        r = [],
        u = [],
        i = n.length,
        o = t.length,
        a = Math.min(n.length, t.length);

    for (e = 0; a > e; ++e) {
      r.push(zr(n[e], t[e]));
    }

    for (; i > e; ++e) {
      u[e] = n[e];
    }

    for (; o > e; ++e) {
      u[e] = t[e];
    }

    return function (n) {
      for (e = 0; a > e; ++e) {
        u[e] = r[e](n);
      }

      return u;
    };
  }

  function Dr(n) {
    return function (t) {
      return 0 >= t ? 0 : t >= 1 ? 1 : n(t);
    };
  }

  function Pr(n) {
    return function (t) {
      return 1 - n(1 - t);
    };
  }

  function Ur(n) {
    return function (t) {
      return .5 * (.5 > t ? n(2 * t) : 2 - n(2 - 2 * t));
    };
  }

  function jr(n) {
    return n * n;
  }

  function Hr(n) {
    return n * n * n;
  }

  function Fr(n) {
    if (0 >= n) return 0;
    if (n >= 1) return 1;
    var t = n * n,
        e = t * n;
    return 4 * (.5 > n ? e : 3 * (n - t) + e - .75);
  }

  function Or(n) {
    return function (t) {
      return Math.pow(t, n);
    };
  }

  function Yr(n) {
    return 1 - Math.cos(n * Ca);
  }

  function Ir(n) {
    return Math.pow(2, 10 * (n - 1));
  }

  function Zr(n) {
    return 1 - Math.sqrt(1 - n * n);
  }

  function Vr(n, t) {
    var e;
    return arguments.length < 2 && (t = .45), arguments.length ? e = t / Aa * Math.asin(1 / n) : (n = 1, e = t / 4), function (r) {
      return 1 + n * Math.pow(2, -10 * r) * Math.sin((r - e) * Aa / t);
    };
  }

  function Xr(n) {
    return n || (n = 1.70158), function (t) {
      return t * t * ((n + 1) * t - n);
    };
  }

  function $r(n) {
    return 1 / 2.75 > n ? 7.5625 * n * n : 2 / 2.75 > n ? 7.5625 * (n -= 1.5 / 2.75) * n + .75 : 2.5 / 2.75 > n ? 7.5625 * (n -= 2.25 / 2.75) * n + .9375 : 7.5625 * (n -= 2.625 / 2.75) * n + .984375;
  }

  function Br(n, t) {
    n = Bo.hcl(n), t = Bo.hcl(t);
    var e = n.h,
        r = n.c,
        u = n.l,
        i = t.h - e,
        o = t.c - r,
        a = t.l - u;
    return isNaN(o) && (o = 0, r = isNaN(r) ? t.c : r), isNaN(i) ? (i = 0, e = isNaN(e) ? t.h : e) : i > 180 ? i -= 360 : -180 > i && (i += 360), function (n) {
      return G(e + i * n, r + o * n, u + a * n) + "";
    };
  }

  function Wr(n, t) {
    n = Bo.hsl(n), t = Bo.hsl(t);
    var e = n.h,
        r = n.s,
        u = n.l,
        i = t.h - e,
        o = t.s - r,
        a = t.l - u;
    return isNaN(o) && (o = 0, r = isNaN(r) ? t.s : r), isNaN(i) ? (i = 0, e = isNaN(e) ? t.h : e) : i > 180 ? i -= 360 : -180 > i && (i += 360), function (n) {
      return B(e + i * n, r + o * n, u + a * n) + "";
    };
  }

  function Jr(n, t) {
    n = Bo.lab(n), t = Bo.lab(t);
    var e = n.l,
        r = n.a,
        u = n.b,
        i = t.l - e,
        o = t.a - r,
        a = t.b - u;
    return function (n) {
      return nt(e + i * n, r + o * n, u + a * n) + "";
    };
  }

  function Gr(n, t) {
    return t -= n, function (e) {
      return Math.round(n + t * e);
    };
  }

  function Kr(n) {
    var t = [n.a, n.b],
        e = [n.c, n.d],
        r = nu(t),
        u = Qr(t, e),
        i = nu(tu(e, t, -u)) || 0;
    t[0] * e[1] < e[0] * t[1] && (t[0] *= -1, t[1] *= -1, r *= -1, u *= -1), this.rotate = (r ? Math.atan2(t[1], t[0]) : Math.atan2(-e[0], e[1])) * qa, this.translate = [n.e, n.f], this.scale = [r, i], this.skew = i ? Math.atan2(u, i) * qa : 0;
  }

  function Qr(n, t) {
    return n[0] * t[0] + n[1] * t[1];
  }

  function nu(n) {
    var t = Math.sqrt(Qr(n, n));
    return t && (n[0] /= t, n[1] /= t), t;
  }

  function tu(n, t, e) {
    return n[0] += e * t[0], n[1] += e * t[1], n;
  }

  function eu(n, t) {
    var e,
        r = [],
        u = [],
        i = Bo.transform(n),
        o = Bo.transform(t),
        a = i.translate,
        c = o.translate,
        s = i.rotate,
        l = o.rotate,
        f = i.skew,
        h = o.skew,
        g = i.scale,
        p = o.scale;
    return a[0] != c[0] || a[1] != c[1] ? (r.push("translate(", null, ",", null, ")"), u.push({
      i: 1,
      x: Tr(a[0], c[0])
    }, {
      i: 3,
      x: Tr(a[1], c[1])
    })) : c[0] || c[1] ? r.push("translate(" + c + ")") : r.push(""), s != l ? (s - l > 180 ? l += 360 : l - s > 180 && (s += 360), u.push({
      i: r.push(r.pop() + "rotate(", null, ")") - 2,
      x: Tr(s, l)
    })) : l && r.push(r.pop() + "rotate(" + l + ")"), f != h ? u.push({
      i: r.push(r.pop() + "skewX(", null, ")") - 2,
      x: Tr(f, h)
    }) : h && r.push(r.pop() + "skewX(" + h + ")"), g[0] != p[0] || g[1] != p[1] ? (e = r.push(r.pop() + "scale(", null, ",", null, ")"), u.push({
      i: e - 4,
      x: Tr(g[0], p[0])
    }, {
      i: e - 2,
      x: Tr(g[1], p[1])
    })) : (1 != p[0] || 1 != p[1]) && r.push(r.pop() + "scale(" + p + ")"), e = u.length, function (n) {
      for (var t, i = -1; ++i < e;) {
        r[(t = u[i]).i] = t.x(n);
      }

      return r.join("");
    };
  }

  function ru(n, t) {
    return t = t - (n = +n) ? 1 / (t - n) : 0, function (e) {
      return (e - n) * t;
    };
  }

  function uu(n, t) {
    return t = t - (n = +n) ? 1 / (t - n) : 0, function (e) {
      return Math.max(0, Math.min(1, (e - n) * t));
    };
  }

  function iu(n) {
    for (var t = n.source, e = n.target, r = au(t, e), u = [t]; t !== r;) {
      t = t.parent, u.push(t);
    }

    for (var i = u.length; e !== r;) {
      u.splice(i, 0, e), e = e.parent;
    }

    return u;
  }

  function ou(n) {
    for (var t = [], e = n.parent; null != e;) {
      t.push(n), n = e, e = e.parent;
    }

    return t.push(n), t;
  }

  function au(n, t) {
    if (n === t) return n;

    for (var e = ou(n), r = ou(t), u = e.pop(), i = r.pop(), o = null; u === i;) {
      o = u, u = e.pop(), i = r.pop();
    }

    return o;
  }

  function cu(n) {
    n.fixed |= 2;
  }

  function su(n) {
    n.fixed &= -7;
  }

  function lu(n) {
    n.fixed |= 4, n.px = n.x, n.py = n.y;
  }

  function fu(n) {
    n.fixed &= -5;
  }

  function hu(n, t, e) {
    var r = 0,
        u = 0;
    if (n.charge = 0, !n.leaf) for (var i, o = n.nodes, a = o.length, c = -1; ++c < a;) {
      i = o[c], null != i && (hu(i, t, e), n.charge += i.charge, r += i.charge * i.cx, u += i.charge * i.cy);
    }

    if (n.point) {
      n.leaf || (n.point.x += Math.random() - .5, n.point.y += Math.random() - .5);
      var s = t * e[n.point.index];
      n.charge += n.pointCharge = s, r += s * n.point.x, u += s * n.point.y;
    }

    n.cx = r / n.charge, n.cy = u / n.charge;
  }

  function gu(n, t) {
    return Bo.rebind(n, t, "sort", "children", "value"), n.nodes = n, n.links = mu, n;
  }

  function pu(n) {
    return n.children;
  }

  function vu(n) {
    return n.value;
  }

  function du(n, t) {
    return t.value - n.value;
  }

  function mu(n) {
    return Bo.merge(n.map(function (n) {
      return (n.children || []).map(function (t) {
        return {
          source: n,
          target: t
        };
      });
    }));
  }

  function yu(n) {
    return n.x;
  }

  function xu(n) {
    return n.y;
  }

  function Mu(n, t, e) {
    n.y0 = t, n.y = e;
  }

  function _u(n) {
    return Bo.range(n.length);
  }

  function bu(n) {
    for (var t = -1, e = n[0].length, r = []; ++t < e;) {
      r[t] = 0;
    }

    return r;
  }

  function wu(n) {
    for (var t, e = 1, r = 0, u = n[0][1], i = n.length; i > e; ++e) {
      (t = n[e][1]) > u && (r = e, u = t);
    }

    return r;
  }

  function Su(n) {
    return n.reduce(ku, 0);
  }

  function ku(n, t) {
    return n + t[1];
  }

  function Eu(n, t) {
    return Au(n, Math.ceil(Math.log(t.length) / Math.LN2 + 1));
  }

  function Au(n, t) {
    for (var e = -1, r = +n[0], u = (n[1] - r) / t, i = []; ++e <= t;) {
      i[e] = u * e + r;
    }

    return i;
  }

  function Cu(n) {
    return [Bo.min(n), Bo.max(n)];
  }

  function Nu(n, t) {
    return n.parent == t.parent ? 1 : 2;
  }

  function Lu(n) {
    var t = n.children;
    return t && t.length ? t[0] : n._tree.thread;
  }

  function Tu(n) {
    var t,
        e = n.children;
    return e && (t = e.length) ? e[t - 1] : n._tree.thread;
  }

  function qu(n, t) {
    var e = n.children;
    if (e && (u = e.length)) for (var r, u, i = -1; ++i < u;) {
      t(r = qu(e[i], t), n) > 0 && (n = r);
    }
    return n;
  }

  function zu(n, t) {
    return n.x - t.x;
  }

  function Ru(n, t) {
    return t.x - n.x;
  }

  function Du(n, t) {
    return n.depth - t.depth;
  }

  function Pu(n, t) {
    function e(n, r) {
      var u = n.children;
      if (u && (o = u.length)) for (var i, o, a = null, c = -1; ++c < o;) {
        i = u[c], e(i, a), a = i;
      }
      t(n, r);
    }

    e(n, null);
  }

  function Uu(n) {
    for (var t, e = 0, r = 0, u = n.children, i = u.length; --i >= 0;) {
      t = u[i]._tree, t.prelim += e, t.mod += e, e += t.shift + (r += t.change);
    }
  }

  function ju(n, t, e) {
    n = n._tree, t = t._tree;
    var r = e / (t.number - n.number);
    n.change += r, t.change -= r, t.shift += e, t.prelim += e, t.mod += e;
  }

  function Hu(n, t, e) {
    return n._tree.ancestor.parent == t.parent ? n._tree.ancestor : e;
  }

  function Fu(n, t) {
    return n.value - t.value;
  }

  function Ou(n, t) {
    var e = n._pack_next;
    n._pack_next = t, t._pack_prev = n, t._pack_next = e, e._pack_prev = t;
  }

  function Yu(n, t) {
    n._pack_next = t, t._pack_prev = n;
  }

  function Iu(n, t) {
    var e = t.x - n.x,
        r = t.y - n.y,
        u = n.r + t.r;
    return .999 * u * u > e * e + r * r;
  }

  function Zu(n) {
    function t(n) {
      l = Math.min(n.x - n.r, l), f = Math.max(n.x + n.r, f), h = Math.min(n.y - n.r, h), g = Math.max(n.y + n.r, g);
    }

    if ((e = n.children) && (s = e.length)) {
      var e,
          r,
          u,
          i,
          o,
          a,
          c,
          s,
          l = 1 / 0,
          f = -1 / 0,
          h = 1 / 0,
          g = -1 / 0;
      if (e.forEach(Vu), r = e[0], r.x = -r.r, r.y = 0, t(r), s > 1 && (u = e[1], u.x = u.r, u.y = 0, t(u), s > 2)) for (i = e[2], Bu(r, u, i), t(i), Ou(r, i), r._pack_prev = i, Ou(i, u), u = r._pack_next, o = 3; s > o; o++) {
        Bu(r, u, i = e[o]);
        var p = 0,
            v = 1,
            d = 1;

        for (a = u._pack_next; a !== u; a = a._pack_next, v++) {
          if (Iu(a, i)) {
            p = 1;
            break;
          }
        }

        if (1 == p) for (c = r._pack_prev; c !== a._pack_prev && !Iu(c, i); c = c._pack_prev, d++) {
          ;
        }
        p ? (d > v || v == d && u.r < r.r ? Yu(r, u = a) : Yu(r = c, u), o--) : (Ou(r, i), u = i, t(i));
      }
      var m = (l + f) / 2,
          y = (h + g) / 2,
          x = 0;

      for (o = 0; s > o; o++) {
        i = e[o], i.x -= m, i.y -= y, x = Math.max(x, i.r + Math.sqrt(i.x * i.x + i.y * i.y));
      }

      n.r = x, e.forEach(Xu);
    }
  }

  function Vu(n) {
    n._pack_next = n._pack_prev = n;
  }

  function Xu(n) {
    delete n._pack_next, delete n._pack_prev;
  }

  function $u(n, t, e, r) {
    var u = n.children;
    if (n.x = t += r * n.x, n.y = e += r * n.y, n.r *= r, u) for (var i = -1, o = u.length; ++i < o;) {
      $u(u[i], t, e, r);
    }
  }

  function Bu(n, t, e) {
    var r = n.r + e.r,
        u = t.x - n.x,
        i = t.y - n.y;

    if (r && (u || i)) {
      var o = t.r + e.r,
          a = u * u + i * i;
      o *= o, r *= r;
      var c = .5 + (r - o) / (2 * a),
          s = Math.sqrt(Math.max(0, 2 * o * (r + a) - (r -= a) * r - o * o)) / (2 * a);
      e.x = n.x + c * u + s * i, e.y = n.y + c * i - s * u;
    } else e.x = n.x + r, e.y = n.y;
  }

  function Wu(n) {
    return 1 + Bo.max(n, function (n) {
      return n.y;
    });
  }

  function Ju(n) {
    return n.reduce(function (n, t) {
      return n + t.x;
    }, 0) / n.length;
  }

  function Gu(n) {
    var t = n.children;
    return t && t.length ? Gu(t[0]) : n;
  }

  function Ku(n) {
    var t,
        e = n.children;
    return e && (t = e.length) ? Ku(e[t - 1]) : n;
  }

  function Qu(n) {
    return {
      x: n.x,
      y: n.y,
      dx: n.dx,
      dy: n.dy
    };
  }

  function ni(n, t) {
    var e = n.x + t[3],
        r = n.y + t[0],
        u = n.dx - t[1] - t[3],
        i = n.dy - t[0] - t[2];
    return 0 > u && (e += u / 2, u = 0), 0 > i && (r += i / 2, i = 0), {
      x: e,
      y: r,
      dx: u,
      dy: i
    };
  }

  function ti(n) {
    var t = n[0],
        e = n[n.length - 1];
    return e > t ? [t, e] : [e, t];
  }

  function ei(n) {
    return n.rangeExtent ? n.rangeExtent() : ti(n.range());
  }

  function ri(n, t, e, r) {
    var u = e(n[0], n[1]),
        i = r(t[0], t[1]);
    return function (n) {
      return i(u(n));
    };
  }

  function ui(n, t) {
    var e,
        r = 0,
        u = n.length - 1,
        i = n[r],
        o = n[u];
    return i > o && (e = r, r = u, u = e, e = i, i = o, o = e), n[r] = t.floor(i), n[u] = t.ceil(o), n;
  }

  function ii(n) {
    return n ? {
      floor: function floor(t) {
        return Math.floor(t / n) * n;
      },
      ceil: function ceil(t) {
        return Math.ceil(t / n) * n;
      }
    } : ls;
  }

  function oi(n, t, e, r) {
    var u = [],
        i = [],
        o = 0,
        a = Math.min(n.length, t.length) - 1;

    for (n[a] < n[0] && (n = n.slice().reverse(), t = t.slice().reverse()); ++o <= a;) {
      u.push(e(n[o - 1], n[o])), i.push(r(t[o - 1], t[o]));
    }

    return function (t) {
      var e = Bo.bisect(n, t, 1, a) - 1;
      return i[e](u[e](t));
    };
  }

  function ai(n, t, e, r) {
    function u() {
      var u = Math.min(n.length, t.length) > 2 ? oi : ri,
          c = r ? uu : ru;
      return o = u(n, t, c, e), a = u(t, n, c, zr), i;
    }

    function i(n) {
      return o(n);
    }

    var o, a;
    return i.invert = function (n) {
      return a(n);
    }, i.domain = function (t) {
      return arguments.length ? (n = t.map(Number), u()) : n;
    }, i.range = function (n) {
      return arguments.length ? (t = n, u()) : t;
    }, i.rangeRound = function (n) {
      return i.range(n).interpolate(Gr);
    }, i.clamp = function (n) {
      return arguments.length ? (r = n, u()) : r;
    }, i.interpolate = function (n) {
      return arguments.length ? (e = n, u()) : e;
    }, i.ticks = function (t) {
      return fi(n, t);
    }, i.tickFormat = function (t, e) {
      return hi(n, t, e);
    }, i.nice = function (t) {
      return si(n, t), u();
    }, i.copy = function () {
      return ai(n, t, e, r);
    }, u();
  }

  function ci(n, t) {
    return Bo.rebind(n, t, "range", "rangeRound", "interpolate", "clamp");
  }

  function si(n, t) {
    return ui(n, ii(li(n, t)[2]));
  }

  function li(n, t) {
    null == t && (t = 10);
    var e = ti(n),
        r = e[1] - e[0],
        u = Math.pow(10, Math.floor(Math.log(r / t) / Math.LN10)),
        i = t / r * u;
    return .15 >= i ? u *= 10 : .35 >= i ? u *= 5 : .75 >= i && (u *= 2), e[0] = Math.ceil(e[0] / u) * u, e[1] = Math.floor(e[1] / u) * u + .5 * u, e[2] = u, e;
  }

  function fi(n, t) {
    return Bo.range.apply(Bo, li(n, t));
  }

  function hi(n, t, e) {
    var r = li(n, t);
    return Bo.format(e ? e.replace(ic, function (n, t, e, u, i, o, a, c, s, l) {
      return [t, e, u, i, o, a, c, s || "." + pi(l, r), l].join("");
    }) : ",." + gi(r[2]) + "f");
  }

  function gi(n) {
    return -Math.floor(Math.log(n) / Math.LN10 + .01);
  }

  function pi(n, t) {
    var e = gi(t[2]);
    return n in fs ? Math.abs(e - gi(Math.max(Math.abs(t[0]), Math.abs(t[1])))) + +("e" !== n) : e - 2 * ("%" === n);
  }

  function vi(n, t, e, r) {
    function u(n) {
      return (e ? Math.log(0 > n ? 0 : n) : -Math.log(n > 0 ? 0 : -n)) / Math.log(t);
    }

    function i(n) {
      return e ? Math.pow(t, n) : -Math.pow(t, -n);
    }

    function o(t) {
      return n(u(t));
    }

    return o.invert = function (t) {
      return i(n.invert(t));
    }, o.domain = function (t) {
      return arguments.length ? (e = t[0] >= 0, n.domain((r = t.map(Number)).map(u)), o) : r;
    }, o.base = function (e) {
      return arguments.length ? (t = +e, n.domain(r.map(u)), o) : t;
    }, o.nice = function () {
      var t = ui(r.map(u), e ? Math : gs);
      return n.domain(t), r = t.map(i), o;
    }, o.ticks = function () {
      var n = ti(r),
          o = [],
          a = n[0],
          c = n[1],
          s = Math.floor(u(a)),
          l = Math.ceil(u(c)),
          f = t % 1 ? 2 : t;

      if (isFinite(l - s)) {
        if (e) {
          for (; l > s; s++) {
            for (var h = 1; f > h; h++) {
              o.push(i(s) * h);
            }
          }

          o.push(i(s));
        } else for (o.push(i(s)); s++ < l;) {
          for (var h = f - 1; h > 0; h--) {
            o.push(i(s) * h);
          }
        }

        for (s = 0; o[s] < a; s++) {
          ;
        }

        for (l = o.length; o[l - 1] > c; l--) {
          ;
        }

        o = o.slice(s, l);
      }

      return o;
    }, o.tickFormat = function (n, t) {
      if (!arguments.length) return hs;
      arguments.length < 2 ? t = hs : "function" != typeof t && (t = Bo.format(t));
      var r,
          a = Math.max(.1, n / o.ticks().length),
          c = e ? (r = 1e-12, Math.ceil) : (r = -1e-12, Math.floor);
      return function (n) {
        return n / i(c(u(n) + r)) <= a ? t(n) : "";
      };
    }, o.copy = function () {
      return vi(n.copy(), t, e, r);
    }, ci(o, n);
  }

  function di(n, t, e) {
    function r(t) {
      return n(u(t));
    }

    var u = mi(t),
        i = mi(1 / t);
    return r.invert = function (t) {
      return i(n.invert(t));
    }, r.domain = function (t) {
      return arguments.length ? (n.domain((e = t.map(Number)).map(u)), r) : e;
    }, r.ticks = function (n) {
      return fi(e, n);
    }, r.tickFormat = function (n, t) {
      return hi(e, n, t);
    }, r.nice = function (n) {
      return r.domain(si(e, n));
    }, r.exponent = function (o) {
      return arguments.length ? (u = mi(t = o), i = mi(1 / t), n.domain(e.map(u)), r) : t;
    }, r.copy = function () {
      return di(n.copy(), t, e);
    }, ci(r, n);
  }

  function mi(n) {
    return function (t) {
      return 0 > t ? -Math.pow(-t, n) : Math.pow(t, n);
    };
  }

  function yi(n, t) {
    function e(e) {
      return o[((i.get(e) || "range" === t.t && i.set(e, n.push(e))) - 1) % o.length];
    }

    function r(t, e) {
      return Bo.range(n.length).map(function (n) {
        return t + e * n;
      });
    }

    var i, o, a;
    return e.domain = function (r) {
      if (!arguments.length) return n;
      n = [], i = new u();

      for (var o, a = -1, c = r.length; ++a < c;) {
        i.has(o = r[a]) || i.set(o, n.push(o));
      }

      return e[t.t].apply(e, t.a);
    }, e.range = function (n) {
      return arguments.length ? (o = n, a = 0, t = {
        t: "range",
        a: arguments
      }, e) : o;
    }, e.rangePoints = function (u, i) {
      arguments.length < 2 && (i = 0);
      var c = u[0],
          s = u[1],
          l = (s - c) / (Math.max(1, n.length - 1) + i);
      return o = r(n.length < 2 ? (c + s) / 2 : c + l * i / 2, l), a = 0, t = {
        t: "rangePoints",
        a: arguments
      }, e;
    }, e.rangeBands = function (u, i, c) {
      arguments.length < 2 && (i = 0), arguments.length < 3 && (c = i);
      var s = u[1] < u[0],
          l = u[s - 0],
          f = u[1 - s],
          h = (f - l) / (n.length - i + 2 * c);
      return o = r(l + h * c, h), s && o.reverse(), a = h * (1 - i), t = {
        t: "rangeBands",
        a: arguments
      }, e;
    }, e.rangeRoundBands = function (u, i, c) {
      arguments.length < 2 && (i = 0), arguments.length < 3 && (c = i);
      var s = u[1] < u[0],
          l = u[s - 0],
          f = u[1 - s],
          h = Math.floor((f - l) / (n.length - i + 2 * c)),
          g = f - l - (n.length - i) * h;
      return o = r(l + Math.round(g / 2), h), s && o.reverse(), a = Math.round(h * (1 - i)), t = {
        t: "rangeRoundBands",
        a: arguments
      }, e;
    }, e.rangeBand = function () {
      return a;
    }, e.rangeExtent = function () {
      return ti(t.a[0]);
    }, e.copy = function () {
      return yi(n, t);
    }, e.domain(n);
  }

  function xi(n, t) {
    function e() {
      var e = 0,
          i = t.length;

      for (u = []; ++e < i;) {
        u[e - 1] = Bo.quantile(n, e / i);
      }

      return r;
    }

    function r(n) {
      return isNaN(n = +n) ? void 0 : t[Bo.bisect(u, n)];
    }

    var u;
    return r.domain = function (t) {
      return arguments.length ? (n = t.filter(function (n) {
        return !isNaN(n);
      }).sort(Bo.ascending), e()) : n;
    }, r.range = function (n) {
      return arguments.length ? (t = n, e()) : t;
    }, r.quantiles = function () {
      return u;
    }, r.invertExtent = function (e) {
      return e = t.indexOf(e), 0 > e ? [0 / 0, 0 / 0] : [e > 0 ? u[e - 1] : n[0], e < u.length ? u[e] : n[n.length - 1]];
    }, r.copy = function () {
      return xi(n, t);
    }, e();
  }

  function Mi(n, t, e) {
    function r(t) {
      return e[Math.max(0, Math.min(o, Math.floor(i * (t - n))))];
    }

    function u() {
      return i = e.length / (t - n), o = e.length - 1, r;
    }

    var i, o;
    return r.domain = function (e) {
      return arguments.length ? (n = +e[0], t = +e[e.length - 1], u()) : [n, t];
    }, r.range = function (n) {
      return arguments.length ? (e = n, u()) : e;
    }, r.invertExtent = function (t) {
      return t = e.indexOf(t), t = 0 > t ? 0 / 0 : t / i + n, [t, t + 1 / i];
    }, r.copy = function () {
      return Mi(n, t, e);
    }, u();
  }

  function _i(n, t) {
    function e(e) {
      return e >= e ? t[Bo.bisect(n, e)] : void 0;
    }

    return e.domain = function (t) {
      return arguments.length ? (n = t, e) : n;
    }, e.range = function (n) {
      return arguments.length ? (t = n, e) : t;
    }, e.invertExtent = function (e) {
      return e = t.indexOf(e), [n[e - 1], n[e]];
    }, e.copy = function () {
      return _i(n, t);
    }, e;
  }

  function bi(n) {
    function t(n) {
      return +n;
    }

    return t.invert = t, t.domain = t.range = function (e) {
      return arguments.length ? (n = e.map(t), t) : n;
    }, t.ticks = function (t) {
      return fi(n, t);
    }, t.tickFormat = function (t, e) {
      return hi(n, t, e);
    }, t.copy = function () {
      return bi(n);
    }, t;
  }

  function wi(n) {
    return n.innerRadius;
  }

  function Si(n) {
    return n.outerRadius;
  }

  function ki(n) {
    return n.startAngle;
  }

  function Ei(n) {
    return n.endAngle;
  }

  function Ai(n) {
    function t(t) {
      function o() {
        s.push("M", i(n(l), a));
      }

      for (var c, s = [], l = [], f = -1, h = t.length, g = vt(e), p = vt(r); ++f < h;) {
        u.call(this, c = t[f], f) ? l.push([+g.call(this, c, f), +p.call(this, c, f)]) : l.length && (o(), l = []);
      }

      return l.length && o(), s.length ? s.join("") : null;
    }

    var e = Ve,
        r = Xe,
        u = Vt,
        i = Ci,
        o = i.key,
        a = .7;
    return t.x = function (n) {
      return arguments.length ? (e = n, t) : e;
    }, t.y = function (n) {
      return arguments.length ? (r = n, t) : r;
    }, t.defined = function (n) {
      return arguments.length ? (u = n, t) : u;
    }, t.interpolate = function (n) {
      return arguments.length ? (o = "function" == typeof n ? i = n : (i = Ms.get(n) || Ci).key, t) : o;
    }, t.tension = function (n) {
      return arguments.length ? (a = n, t) : a;
    }, t;
  }

  function Ci(n) {
    return n.join("L");
  }

  function Ni(n) {
    return Ci(n) + "Z";
  }

  function Li(n) {
    for (var t = 0, e = n.length, r = n[0], u = [r[0], ",", r[1]]; ++t < e;) {
      u.push("H", (r[0] + (r = n[t])[0]) / 2, "V", r[1]);
    }

    return e > 1 && u.push("H", r[0]), u.join("");
  }

  function Ti(n) {
    for (var t = 0, e = n.length, r = n[0], u = [r[0], ",", r[1]]; ++t < e;) {
      u.push("V", (r = n[t])[1], "H", r[0]);
    }

    return u.join("");
  }

  function qi(n) {
    for (var t = 0, e = n.length, r = n[0], u = [r[0], ",", r[1]]; ++t < e;) {
      u.push("H", (r = n[t])[0], "V", r[1]);
    }

    return u.join("");
  }

  function zi(n, t) {
    return n.length < 4 ? Ci(n) : n[1] + Pi(n.slice(1, n.length - 1), Ui(n, t));
  }

  function Ri(n, t) {
    return n.length < 3 ? Ci(n) : n[0] + Pi((n.push(n[0]), n), Ui([n[n.length - 2]].concat(n, [n[1]]), t));
  }

  function Di(n, t) {
    return n.length < 3 ? Ci(n) : n[0] + Pi(n, Ui(n, t));
  }

  function Pi(n, t) {
    if (t.length < 1 || n.length != t.length && n.length != t.length + 2) return Ci(n);
    var e = n.length != t.length,
        r = "",
        u = n[0],
        i = n[1],
        o = t[0],
        a = o,
        c = 1;

    if (e && (r += "Q" + (i[0] - 2 * o[0] / 3) + "," + (i[1] - 2 * o[1] / 3) + "," + i[0] + "," + i[1], u = n[1], c = 2), t.length > 1) {
      a = t[1], i = n[c], c++, r += "C" + (u[0] + o[0]) + "," + (u[1] + o[1]) + "," + (i[0] - a[0]) + "," + (i[1] - a[1]) + "," + i[0] + "," + i[1];

      for (var s = 2; s < t.length; s++, c++) {
        i = n[c], a = t[s], r += "S" + (i[0] - a[0]) + "," + (i[1] - a[1]) + "," + i[0] + "," + i[1];
      }
    }

    if (e) {
      var l = n[c];
      r += "Q" + (i[0] + 2 * a[0] / 3) + "," + (i[1] + 2 * a[1] / 3) + "," + l[0] + "," + l[1];
    }

    return r;
  }

  function Ui(n, t) {
    for (var e, r = [], u = (1 - t) / 2, i = n[0], o = n[1], a = 1, c = n.length; ++a < c;) {
      e = i, i = o, o = n[a], r.push([u * (o[0] - e[0]), u * (o[1] - e[1])]);
    }

    return r;
  }

  function ji(n) {
    if (n.length < 3) return Ci(n);
    var t = 1,
        e = n.length,
        r = n[0],
        u = r[0],
        i = r[1],
        o = [u, u, u, (r = n[1])[0]],
        a = [i, i, i, r[1]],
        c = [u, ",", i, "L", Yi(ws, o), ",", Yi(ws, a)];

    for (n.push(n[e - 1]); ++t <= e;) {
      r = n[t], o.shift(), o.push(r[0]), a.shift(), a.push(r[1]), Ii(c, o, a);
    }

    return n.pop(), c.push("L", r), c.join("");
  }

  function Hi(n) {
    if (n.length < 4) return Ci(n);

    for (var t, e = [], r = -1, u = n.length, i = [0], o = [0]; ++r < 3;) {
      t = n[r], i.push(t[0]), o.push(t[1]);
    }

    for (e.push(Yi(ws, i) + "," + Yi(ws, o)), --r; ++r < u;) {
      t = n[r], i.shift(), i.push(t[0]), o.shift(), o.push(t[1]), Ii(e, i, o);
    }

    return e.join("");
  }

  function Fi(n) {
    for (var t, e, r = -1, u = n.length, i = u + 4, o = [], a = []; ++r < 4;) {
      e = n[r % u], o.push(e[0]), a.push(e[1]);
    }

    for (t = [Yi(ws, o), ",", Yi(ws, a)], --r; ++r < i;) {
      e = n[r % u], o.shift(), o.push(e[0]), a.shift(), a.push(e[1]), Ii(t, o, a);
    }

    return t.join("");
  }

  function Oi(n, t) {
    var e = n.length - 1;
    if (e) for (var r, u, i = n[0][0], o = n[0][1], a = n[e][0] - i, c = n[e][1] - o, s = -1; ++s <= e;) {
      r = n[s], u = s / e, r[0] = t * r[0] + (1 - t) * (i + u * a), r[1] = t * r[1] + (1 - t) * (o + u * c);
    }
    return ji(n);
  }

  function Yi(n, t) {
    return n[0] * t[0] + n[1] * t[1] + n[2] * t[2] + n[3] * t[3];
  }

  function Ii(n, t, e) {
    n.push("C", Yi(_s, t), ",", Yi(_s, e), ",", Yi(bs, t), ",", Yi(bs, e), ",", Yi(ws, t), ",", Yi(ws, e));
  }

  function Zi(n, t) {
    return (t[1] - n[1]) / (t[0] - n[0]);
  }

  function Vi(n) {
    for (var t = 0, e = n.length - 1, r = [], u = n[0], i = n[1], o = r[0] = Zi(u, i); ++t < e;) {
      r[t] = (o + (o = Zi(u = i, i = n[t + 1]))) / 2;
    }

    return r[t] = o, r;
  }

  function Xi(n) {
    for (var t, e, r, u, i = [], o = Vi(n), a = -1, c = n.length - 1; ++a < c;) {
      t = Zi(n[a], n[a + 1]), ca(t) < Na ? o[a] = o[a + 1] = 0 : (e = o[a] / t, r = o[a + 1] / t, u = e * e + r * r, u > 9 && (u = 3 * t / Math.sqrt(u), o[a] = u * e, o[a + 1] = u * r));
    }

    for (a = -1; ++a <= c;) {
      u = (n[Math.min(c, a + 1)][0] - n[Math.max(0, a - 1)][0]) / (6 * (1 + o[a] * o[a])), i.push([u || 0, o[a] * u || 0]);
    }

    return i;
  }

  function $i(n) {
    return n.length < 3 ? Ci(n) : n[0] + Pi(n, Xi(n));
  }

  function Bi(n) {
    for (var t, e, r, u = -1, i = n.length; ++u < i;) {
      t = n[u], e = t[0], r = t[1] + ys, t[0] = e * Math.cos(r), t[1] = e * Math.sin(r);
    }

    return n;
  }

  function Wi(n) {
    function t(t) {
      function c() {
        v.push("M", a(n(m), f), l, s(n(d.reverse()), f), "Z");
      }

      for (var h, g, p, v = [], d = [], m = [], y = -1, x = t.length, M = vt(e), _ = vt(u), b = e === r ? function () {
        return g;
      } : vt(r), w = u === i ? function () {
        return p;
      } : vt(i); ++y < x;) {
        o.call(this, h = t[y], y) ? (d.push([g = +M.call(this, h, y), p = +_.call(this, h, y)]), m.push([+b.call(this, h, y), +w.call(this, h, y)])) : d.length && (c(), d = [], m = []);
      }

      return d.length && c(), v.length ? v.join("") : null;
    }

    var e = Ve,
        r = Ve,
        u = 0,
        i = Xe,
        o = Vt,
        a = Ci,
        c = a.key,
        s = a,
        l = "L",
        f = .7;
    return t.x = function (n) {
      return arguments.length ? (e = r = n, t) : r;
    }, t.x0 = function (n) {
      return arguments.length ? (e = n, t) : e;
    }, t.x1 = function (n) {
      return arguments.length ? (r = n, t) : r;
    }, t.y = function (n) {
      return arguments.length ? (u = i = n, t) : i;
    }, t.y0 = function (n) {
      return arguments.length ? (u = n, t) : u;
    }, t.y1 = function (n) {
      return arguments.length ? (i = n, t) : i;
    }, t.defined = function (n) {
      return arguments.length ? (o = n, t) : o;
    }, t.interpolate = function (n) {
      return arguments.length ? (c = "function" == typeof n ? a = n : (a = Ms.get(n) || Ci).key, s = a.reverse || a, l = a.closed ? "M" : "L", t) : c;
    }, t.tension = function (n) {
      return arguments.length ? (f = n, t) : f;
    }, t;
  }

  function Ji(n) {
    return n.radius;
  }

  function Gi(n) {
    return [n.x, n.y];
  }

  function Ki(n) {
    return function () {
      var t = n.apply(this, arguments),
          e = t[0],
          r = t[1] + ys;
      return [e * Math.cos(r), e * Math.sin(r)];
    };
  }

  function Qi() {
    return 64;
  }

  function no() {
    return "circle";
  }

  function to(n) {
    var t = Math.sqrt(n / Ea);
    return "M0," + t + "A" + t + "," + t + " 0 1,1 0," + -t + "A" + t + "," + t + " 0 1,1 0," + t + "Z";
  }

  function eo(n, t) {
    return ga(n, Ns), n.id = t, n;
  }

  function ro(n, t, e, r) {
    var u = n.id;
    return N(n, "function" == typeof e ? function (n, i, o) {
      n.__transition__[u].tween.set(t, r(e.call(n, n.__data__, i, o)));
    } : (e = r(e), function (n) {
      n.__transition__[u].tween.set(t, e);
    }));
  }

  function uo(n) {
    return null == n && (n = ""), function () {
      this.textContent = n;
    };
  }

  function io(n, t, e, r) {
    var i = n.__transition__ || (n.__transition__ = {
      active: 0,
      count: 0
    }),
        o = i[e];

    if (!o) {
      var a = r.time;
      o = i[e] = {
        tween: new u(),
        time: a,
        ease: r.ease,
        delay: r.delay,
        duration: r.duration
      }, ++i.count, Bo.timer(function (r) {
        function u(r) {
          return i.active > e ? s() : (i.active = e, o.event && o.event.start.call(n, l, t), o.tween.forEach(function (e, r) {
            (r = r.call(n, l, t)) && v.push(r);
          }), Bo.timer(function () {
            return p.c = c(r || 1) ? Vt : c, 1;
          }, 0, a), void 0);
        }

        function c(r) {
          if (i.active !== e) return s();

          for (var u = r / g, a = f(u), c = v.length; c > 0;) {
            v[--c].call(n, a);
          }

          return u >= 1 ? (o.event && o.event.end.call(n, l, t), s()) : void 0;
        }

        function s() {
          return --i.count ? delete i[e] : delete n.__transition__, 1;
        }

        var l = n.__data__,
            f = o.ease,
            h = o.delay,
            g = o.duration,
            p = Ka,
            v = [];
        return p.t = h + a, r >= h ? u(r - h) : (p.c = u, void 0);
      }, 0, a);
    }
  }

  function oo(n, t) {
    n.attr("transform", function (n) {
      return "translate(" + t(n) + ",0)";
    });
  }

  function ao(n, t) {
    n.attr("transform", function (n) {
      return "translate(0," + t(n) + ")";
    });
  }

  function co() {
    this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0]);
  }

  function so(n, t, e) {
    function r(t) {
      var e = n(t),
          r = i(e, 1);
      return r - t > t - e ? e : r;
    }

    function u(e) {
      return t(e = n(new Ps(e - 1)), 1), e;
    }

    function i(n, e) {
      return t(n = new Ps(+n), e), n;
    }

    function o(n, r, i) {
      var o = u(n),
          a = [];
      if (i > 1) for (; r > o;) {
        e(o) % i || a.push(new Date(+o)), t(o, 1);
      } else for (; r > o;) {
        a.push(new Date(+o)), t(o, 1);
      }
      return a;
    }

    function a(n, t, e) {
      try {
        Ps = co;
        var r = new co();
        return r._ = n, o(r, t, e);
      } finally {
        Ps = Date;
      }
    }

    n.floor = n, n.round = r, n.ceil = u, n.offset = i, n.range = o;
    var c = n.utc = lo(n);
    return c.floor = c, c.round = lo(r), c.ceil = lo(u), c.offset = lo(i), c.range = a, n;
  }

  function lo(n) {
    return function (t, e) {
      try {
        Ps = co;
        var r = new co();
        return r._ = t, n(r, e)._;
      } finally {
        Ps = Date;
      }
    };
  }

  function fo(n) {
    function t(t) {
      for (var r, u, i, o = [], a = -1, c = 0; ++a < e;) {
        37 === n.charCodeAt(a) && (o.push(n.substring(c, a)), null != (u = tl[r = n.charAt(++a)]) && (r = n.charAt(++a)), (i = el[r]) && (r = i(t, null == u ? "e" === r ? " " : "0" : u)), o.push(r), c = a + 1);
      }

      return o.push(n.substring(c, a)), o.join("");
    }

    var e = n.length;
    return t.parse = function (t) {
      var e = {
        y: 1900,
        m: 0,
        d: 1,
        H: 0,
        M: 0,
        S: 0,
        L: 0,
        Z: null
      },
          r = ho(e, n, t, 0);
      if (r != t.length) return null;
      "p" in e && (e.H = e.H % 12 + 12 * e.p);
      var u = null != e.Z && Ps !== co,
          i = new (u ? co : Ps)();
      return "j" in e ? i.setFullYear(e.y, 0, e.j) : "w" in e && ("W" in e || "U" in e) ? (i.setFullYear(e.y, 0, 1), i.setFullYear(e.y, 0, "W" in e ? (e.w + 6) % 7 + 7 * e.W - (i.getDay() + 5) % 7 : e.w + 7 * e.U - (i.getDay() + 6) % 7)) : i.setFullYear(e.y, e.m, e.d), i.setHours(e.H + Math.floor(e.Z / 100), e.M + e.Z % 100, e.S, e.L), u ? i._ : i;
    }, t.toString = function () {
      return n;
    }, t;
  }

  function ho(n, t, e, r) {
    for (var u, i, o, a = 0, c = t.length, s = e.length; c > a;) {
      if (r >= s) return -1;

      if (u = t.charCodeAt(a++), 37 === u) {
        if (o = t.charAt(a++), i = rl[o in tl ? t.charAt(a++) : o], !i || (r = i(n, e, r)) < 0) return -1;
      } else if (u != e.charCodeAt(r++)) return -1;
    }

    return r;
  }

  function go(n) {
    return new RegExp("^(?:" + n.map(Bo.requote).join("|") + ")", "i");
  }

  function po(n) {
    for (var t = new u(), e = -1, r = n.length; ++e < r;) {
      t.set(n[e].toLowerCase(), e);
    }

    return t;
  }

  function vo(n, t, e) {
    var r = 0 > n ? "-" : "",
        u = (r ? -n : n) + "",
        i = u.length;
    return r + (e > i ? new Array(e - i + 1).join(t) + u : u);
  }

  function mo(n, t, e) {
    Bs.lastIndex = 0;
    var r = Bs.exec(t.substring(e));
    return r ? (n.w = Ws.get(r[0].toLowerCase()), e + r[0].length) : -1;
  }

  function yo(n, t, e) {
    Xs.lastIndex = 0;
    var r = Xs.exec(t.substring(e));
    return r ? (n.w = $s.get(r[0].toLowerCase()), e + r[0].length) : -1;
  }

  function xo(n, t, e) {
    ul.lastIndex = 0;
    var r = ul.exec(t.substring(e, e + 1));
    return r ? (n.w = +r[0], e + r[0].length) : -1;
  }

  function Mo(n, t, e) {
    ul.lastIndex = 0;
    var r = ul.exec(t.substring(e));
    return r ? (n.U = +r[0], e + r[0].length) : -1;
  }

  function _o(n, t, e) {
    ul.lastIndex = 0;
    var r = ul.exec(t.substring(e));
    return r ? (n.W = +r[0], e + r[0].length) : -1;
  }

  function bo(n, t, e) {
    Ks.lastIndex = 0;
    var r = Ks.exec(t.substring(e));
    return r ? (n.m = Qs.get(r[0].toLowerCase()), e + r[0].length) : -1;
  }

  function wo(n, t, e) {
    Js.lastIndex = 0;
    var r = Js.exec(t.substring(e));
    return r ? (n.m = Gs.get(r[0].toLowerCase()), e + r[0].length) : -1;
  }

  function So(n, t, e) {
    return ho(n, el.c.toString(), t, e);
  }

  function ko(n, t, e) {
    return ho(n, el.x.toString(), t, e);
  }

  function Eo(n, t, e) {
    return ho(n, el.X.toString(), t, e);
  }

  function Ao(n, t, e) {
    ul.lastIndex = 0;
    var r = ul.exec(t.substring(e, e + 4));
    return r ? (n.y = +r[0], e + r[0].length) : -1;
  }

  function Co(n, t, e) {
    ul.lastIndex = 0;
    var r = ul.exec(t.substring(e, e + 2));
    return r ? (n.y = Lo(+r[0]), e + r[0].length) : -1;
  }

  function No(n, t, e) {
    return /^[+-]\d{4}$/.test(t = t.substring(e, e + 5)) ? (n.Z = +t, e + 5) : -1;
  }

  function Lo(n) {
    return n + (n > 68 ? 1900 : 2e3);
  }

  function To(n, t, e) {
    ul.lastIndex = 0;
    var r = ul.exec(t.substring(e, e + 2));
    return r ? (n.m = r[0] - 1, e + r[0].length) : -1;
  }

  function qo(n, t, e) {
    ul.lastIndex = 0;
    var r = ul.exec(t.substring(e, e + 2));
    return r ? (n.d = +r[0], e + r[0].length) : -1;
  }

  function zo(n, t, e) {
    ul.lastIndex = 0;
    var r = ul.exec(t.substring(e, e + 3));
    return r ? (n.j = +r[0], e + r[0].length) : -1;
  }

  function Ro(n, t, e) {
    ul.lastIndex = 0;
    var r = ul.exec(t.substring(e, e + 2));
    return r ? (n.H = +r[0], e + r[0].length) : -1;
  }

  function Do(n, t, e) {
    ul.lastIndex = 0;
    var r = ul.exec(t.substring(e, e + 2));
    return r ? (n.M = +r[0], e + r[0].length) : -1;
  }

  function Po(n, t, e) {
    ul.lastIndex = 0;
    var r = ul.exec(t.substring(e, e + 2));
    return r ? (n.S = +r[0], e + r[0].length) : -1;
  }

  function Uo(n, t, e) {
    ul.lastIndex = 0;
    var r = ul.exec(t.substring(e, e + 3));
    return r ? (n.L = +r[0], e + r[0].length) : -1;
  }

  function jo(n, t, e) {
    var r = il.get(t.substring(e, e += 2).toLowerCase());
    return null == r ? -1 : (n.p = r, e);
  }

  function Ho(n) {
    var t = n.getTimezoneOffset(),
        e = t > 0 ? "-" : "+",
        r = ~~(ca(t) / 60),
        u = ca(t) % 60;
    return e + vo(r, "0", 2) + vo(u, "0", 2);
  }

  function Fo(n, t, e) {
    nl.lastIndex = 0;
    var r = nl.exec(t.substring(e, e + 1));
    return r ? e + r[0].length : -1;
  }

  function Oo(n) {
    function t(n) {
      try {
        Ps = co;
        var t = new Ps();
        return t._ = n, e(t);
      } finally {
        Ps = Date;
      }
    }

    var e = fo(n);
    return t.parse = function (n) {
      try {
        Ps = co;
        var t = e.parse(n);
        return t && t._;
      } finally {
        Ps = Date;
      }
    }, t.toString = e.toString, t;
  }

  function Yo(n) {
    return n.toISOString();
  }

  function Io(n, t, e) {
    function r(t) {
      return n(t);
    }

    function u(n, e) {
      var r = n[1] - n[0],
          u = r / e,
          i = Bo.bisect(al, u);
      return i == al.length ? [t.year, li(n.map(function (n) {
        return n / 31536e6;
      }), e)[2]] : i ? t[u / al[i - 1] < al[i] / u ? i - 1 : i] : [fl, li(n, e)[2]];
    }

    return r.invert = function (t) {
      return Zo(n.invert(t));
    }, r.domain = function (t) {
      return arguments.length ? (n.domain(t), r) : n.domain().map(Zo);
    }, r.nice = function (n, t) {
      function e(e) {
        return !isNaN(e) && !n.range(e, Zo(+e + 1), t).length;
      }

      var i = r.domain(),
          o = ti(i),
          a = null == n ? u(o, 10) : "number" == typeof n && u(o, n);
      return a && (n = a[0], t = a[1]), r.domain(ui(i, t > 1 ? {
        floor: function floor(t) {
          for (; e(t = n.floor(t));) {
            t = Zo(t - 1);
          }

          return t;
        },
        ceil: function ceil(t) {
          for (; e(t = n.ceil(t));) {
            t = Zo(+t + 1);
          }

          return t;
        }
      } : n));
    }, r.ticks = function (n, t) {
      var e = ti(r.domain()),
          i = null == n ? u(e, 10) : "number" == typeof n ? u(e, n) : !n.range && [{
        range: n
      }, t];
      return i && (n = i[0], t = i[1]), n.range(e[0], Zo(+e[1] + 1), 1 > t ? 1 : t);
    }, r.tickFormat = function () {
      return e;
    }, r.copy = function () {
      return Io(n.copy(), t, e);
    }, ci(r, n);
  }

  function Zo(n) {
    return new Date(n);
  }

  function Vo(n) {
    return function (t) {
      for (var e = n.length - 1, r = n[e]; !r[1](t);) {
        r = n[--e];
      }

      return r[0](t);
    };
  }

  function Xo(n) {
    return JSON.parse(n.responseText);
  }

  function $o(n) {
    var t = Go.createRange();
    return t.selectNode(Go.body), t.createContextualFragment(n.responseText);
  }

  var Bo = {
    version: "3.3.13"
  };
  Date.now || (Date.now = function () {
    return +new Date();
  });

  var Wo = [].slice,
      Jo = function Jo(n) {
    return Wo.call(n);
  },
      Go = document,
      Ko = Go.documentElement,
      Qo = window;

  try {
    Jo(Ko.childNodes)[0].nodeType;
  } catch (na) {
    Jo = function Jo(n) {
      for (var t = n.length, e = new Array(t); t--;) {
        e[t] = n[t];
      }

      return e;
    };
  }

  try {
    Go.createElement("div").style.setProperty("opacity", 0, "");
  } catch (ta) {
    var ea = Qo.Element.prototype,
        ra = ea.setAttribute,
        ua = ea.setAttributeNS,
        ia = Qo.CSSStyleDeclaration.prototype,
        oa = ia.setProperty;
    ea.setAttribute = function (n, t) {
      ra.call(this, n, t + "");
    }, ea.setAttributeNS = function (n, t, e) {
      ua.call(this, n, t, e + "");
    }, ia.setProperty = function (n, t, e) {
      oa.call(this, n, t + "", e);
    };
  }

  Bo.ascending = function (n, t) {
    return t > n ? -1 : n > t ? 1 : n >= t ? 0 : 0 / 0;
  }, Bo.descending = function (n, t) {
    return n > t ? -1 : t > n ? 1 : t >= n ? 0 : 0 / 0;
  }, Bo.min = function (n, t) {
    var e,
        r,
        u = -1,
        i = n.length;

    if (1 === arguments.length) {
      for (; ++u < i && !(null != (e = n[u]) && e >= e);) {
        e = void 0;
      }

      for (; ++u < i;) {
        null != (r = n[u]) && e > r && (e = r);
      }
    } else {
      for (; ++u < i && !(null != (e = t.call(n, n[u], u)) && e >= e);) {
        e = void 0;
      }

      for (; ++u < i;) {
        null != (r = t.call(n, n[u], u)) && e > r && (e = r);
      }
    }

    return e;
  }, Bo.max = function (n, t) {
    var e,
        r,
        u = -1,
        i = n.length;

    if (1 === arguments.length) {
      for (; ++u < i && !(null != (e = n[u]) && e >= e);) {
        e = void 0;
      }

      for (; ++u < i;) {
        null != (r = n[u]) && r > e && (e = r);
      }
    } else {
      for (; ++u < i && !(null != (e = t.call(n, n[u], u)) && e >= e);) {
        e = void 0;
      }

      for (; ++u < i;) {
        null != (r = t.call(n, n[u], u)) && r > e && (e = r);
      }
    }

    return e;
  }, Bo.extent = function (n, t) {
    var e,
        r,
        u,
        i = -1,
        o = n.length;

    if (1 === arguments.length) {
      for (; ++i < o && !(null != (e = u = n[i]) && e >= e);) {
        e = u = void 0;
      }

      for (; ++i < o;) {
        null != (r = n[i]) && (e > r && (e = r), r > u && (u = r));
      }
    } else {
      for (; ++i < o && !(null != (e = u = t.call(n, n[i], i)) && e >= e);) {
        e = void 0;
      }

      for (; ++i < o;) {
        null != (r = t.call(n, n[i], i)) && (e > r && (e = r), r > u && (u = r));
      }
    }

    return [e, u];
  }, Bo.sum = function (n, t) {
    var e,
        r = 0,
        u = n.length,
        i = -1;
    if (1 === arguments.length) for (; ++i < u;) {
      isNaN(e = +n[i]) || (r += e);
    } else for (; ++i < u;) {
      isNaN(e = +t.call(n, n[i], i)) || (r += e);
    }
    return r;
  }, Bo.mean = function (t, e) {
    var r,
        u = t.length,
        i = 0,
        o = -1,
        a = 0;
    if (1 === arguments.length) for (; ++o < u;) {
      n(r = t[o]) && (i += (r - i) / ++a);
    } else for (; ++o < u;) {
      n(r = e.call(t, t[o], o)) && (i += (r - i) / ++a);
    }
    return a ? i : void 0;
  }, Bo.quantile = function (n, t) {
    var e = (n.length - 1) * t + 1,
        r = Math.floor(e),
        u = +n[r - 1],
        i = e - r;
    return i ? u + i * (n[r] - u) : u;
  }, Bo.median = function (t, e) {
    return arguments.length > 1 && (t = t.map(e)), t = t.filter(n), t.length ? Bo.quantile(t.sort(Bo.ascending), .5) : void 0;
  }, Bo.bisector = function (n) {
    return {
      left: function left(t, e, r, u) {
        for (arguments.length < 3 && (r = 0), arguments.length < 4 && (u = t.length); u > r;) {
          var i = r + u >>> 1;
          n.call(t, t[i], i) < e ? r = i + 1 : u = i;
        }

        return r;
      },
      right: function right(t, e, r, u) {
        for (arguments.length < 3 && (r = 0), arguments.length < 4 && (u = t.length); u > r;) {
          var i = r + u >>> 1;
          e < n.call(t, t[i], i) ? u = i : r = i + 1;
        }

        return r;
      }
    };
  };
  var aa = Bo.bisector(function (n) {
    return n;
  });
  Bo.bisectLeft = aa.left, Bo.bisect = Bo.bisectRight = aa.right, Bo.shuffle = function (n) {
    for (var t, e, r = n.length; r;) {
      e = 0 | Math.random() * r--, t = n[r], n[r] = n[e], n[e] = t;
    }

    return n;
  }, Bo.permute = function (n, t) {
    for (var e = t.length, r = new Array(e); e--;) {
      r[e] = n[t[e]];
    }

    return r;
  }, Bo.pairs = function (n) {
    for (var t, e = 0, r = n.length - 1, u = n[0], i = new Array(0 > r ? 0 : r); r > e;) {
      i[e] = [t = u, u = n[++e]];
    }

    return i;
  }, Bo.zip = function () {
    if (!(u = arguments.length)) return [];

    for (var n = -1, e = Bo.min(arguments, t), r = new Array(e); ++n < e;) {
      for (var u, i = -1, o = r[n] = new Array(u); ++i < u;) {
        o[i] = arguments[i][n];
      }
    }

    return r;
  }, Bo.transpose = function (n) {
    return Bo.zip.apply(Bo, n);
  }, Bo.keys = function (n) {
    var t = [];

    for (var e in n) {
      t.push(e);
    }

    return t;
  }, Bo.values = function (n) {
    var t = [];

    for (var e in n) {
      t.push(n[e]);
    }

    return t;
  }, Bo.entries = function (n) {
    var t = [];

    for (var e in n) {
      t.push({
        key: e,
        value: n[e]
      });
    }

    return t;
  }, Bo.merge = function (n) {
    for (var t, e, r, u = n.length, i = -1, o = 0; ++i < u;) {
      o += n[i].length;
    }

    for (e = new Array(o); --u >= 0;) {
      for (r = n[u], t = r.length; --t >= 0;) {
        e[--o] = r[t];
      }
    }

    return e;
  };
  var ca = Math.abs;
  Bo.range = function (n, t, r) {
    if (arguments.length < 3 && (r = 1, arguments.length < 2 && (t = n, n = 0)), 1 / 0 === (t - n) / r) throw new Error("infinite range");
    var u,
        i = [],
        o = e(ca(r)),
        a = -1;
    if (n *= o, t *= o, r *= o, 0 > r) for (; (u = n + r * ++a) > t;) {
      i.push(u / o);
    } else for (; (u = n + r * ++a) < t;) {
      i.push(u / o);
    }
    return i;
  }, Bo.map = function (n) {
    var t = new u();
    if (n instanceof u) n.forEach(function (n, e) {
      t.set(n, e);
    });else for (var e in n) {
      t.set(e, n[e]);
    }
    return t;
  }, r(u, {
    has: function has(n) {
      return sa + n in this;
    },
    get: function get(n) {
      return this[sa + n];
    },
    set: function set(n, t) {
      return this[sa + n] = t;
    },
    remove: function remove(n) {
      return n = sa + n, n in this && delete this[n];
    },
    keys: function keys() {
      var n = [];
      return this.forEach(function (t) {
        n.push(t);
      }), n;
    },
    values: function values() {
      var n = [];
      return this.forEach(function (t, e) {
        n.push(e);
      }), n;
    },
    entries: function entries() {
      var n = [];
      return this.forEach(function (t, e) {
        n.push({
          key: t,
          value: e
        });
      }), n;
    },
    forEach: function forEach(n) {
      for (var t in this) {
        t.charCodeAt(0) === la && n.call(this, t.substring(1), this[t]);
      }
    }
  });
  var sa = "\x00",
      la = sa.charCodeAt(0);
  Bo.nest = function () {
    function n(t, a, c) {
      if (c >= o.length) return r ? r.call(i, a) : e ? a.sort(e) : a;

      for (var s, l, f, h, g = -1, p = a.length, v = o[c++], d = new u(); ++g < p;) {
        (h = d.get(s = v(l = a[g]))) ? h.push(l) : d.set(s, [l]);
      }

      return t ? (l = t(), f = function f(e, r) {
        l.set(e, n(t, r, c));
      }) : (l = {}, f = function f(e, r) {
        l[e] = n(t, r, c);
      }), d.forEach(f), l;
    }

    function t(n, e) {
      if (e >= o.length) return n;
      var r = [],
          u = a[e++];
      return n.forEach(function (n, u) {
        r.push({
          key: n,
          values: t(u, e)
        });
      }), u ? r.sort(function (n, t) {
        return u(n.key, t.key);
      }) : r;
    }

    var e,
        r,
        i = {},
        o = [],
        a = [];
    return i.map = function (t, e) {
      return n(e, t, 0);
    }, i.entries = function (e) {
      return t(n(Bo.map, e, 0), 0);
    }, i.key = function (n) {
      return o.push(n), i;
    }, i.sortKeys = function (n) {
      return a[o.length - 1] = n, i;
    }, i.sortValues = function (n) {
      return e = n, i;
    }, i.rollup = function (n) {
      return r = n, i;
    }, i;
  }, Bo.set = function (n) {
    var t = new i();
    if (n) for (var e = 0, r = n.length; r > e; ++e) {
      t.add(n[e]);
    }
    return t;
  }, r(i, {
    has: function has(n) {
      return sa + n in this;
    },
    add: function add(n) {
      return this[sa + n] = !0, n;
    },
    remove: function remove(n) {
      return n = sa + n, n in this && delete this[n];
    },
    values: function values() {
      var n = [];
      return this.forEach(function (t) {
        n.push(t);
      }), n;
    },
    forEach: function forEach(n) {
      for (var t in this) {
        t.charCodeAt(0) === la && n.call(this, t.substring(1));
      }
    }
  }), Bo.behavior = {}, Bo.rebind = function (n, t) {
    for (var e, r = 1, u = arguments.length; ++r < u;) {
      n[e = arguments[r]] = o(n, t, t[e]);
    }

    return n;
  };
  var fa = ["webkit", "ms", "moz", "Moz", "o", "O"];
  Bo.dispatch = function () {
    for (var n = new s(), t = -1, e = arguments.length; ++t < e;) {
      n[arguments[t]] = l(n);
    }

    return n;
  }, s.prototype.on = function (n, t) {
    var e = n.indexOf("."),
        r = "";
    if (e >= 0 && (r = n.substring(e + 1), n = n.substring(0, e)), n) return arguments.length < 2 ? this[n].on(r) : this[n].on(r, t);

    if (2 === arguments.length) {
      if (null == t) for (n in this) {
        this.hasOwnProperty(n) && this[n].on(r, null);
      }
      return this;
    }
  }, Bo.event = null, Bo.requote = function (n) {
    return n.replace(ha, "\\$&");
  };

  var ha = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,
      ga = {}.__proto__ ? function (n, t) {
    n.__proto__ = t;
  } : function (n, t) {
    for (var e in t) {
      n[e] = t[e];
    }
  },
      pa = function pa(n, t) {
    return t.querySelector(n);
  },
      va = function va(n, t) {
    return t.querySelectorAll(n);
  },
      da = Ko[a(Ko, "matchesSelector")],
      ma = function ma(n, t) {
    return da.call(n, t);
  };

  "function" == typeof Sizzle && (pa = function pa(n, t) {
    return Sizzle(n, t)[0] || null;
  }, va = function va(n, t) {
    return Sizzle.uniqueSort(Sizzle(n, t));
  }, ma = Sizzle.matchesSelector), Bo.selection = function () {
    return _a;
  };
  var ya = Bo.selection.prototype = [];
  ya.select = function (n) {
    var t,
        e,
        r,
        u,
        i = [];
    n = v(n);

    for (var o = -1, a = this.length; ++o < a;) {
      i.push(t = []), t.parentNode = (r = this[o]).parentNode;

      for (var c = -1, s = r.length; ++c < s;) {
        (u = r[c]) ? (t.push(e = n.call(u, u.__data__, c, o)), e && "__data__" in u && (e.__data__ = u.__data__)) : t.push(null);
      }
    }

    return p(i);
  }, ya.selectAll = function (n) {
    var t,
        e,
        r = [];
    n = d(n);

    for (var u = -1, i = this.length; ++u < i;) {
      for (var o = this[u], a = -1, c = o.length; ++a < c;) {
        (e = o[a]) && (r.push(t = Jo(n.call(e, e.__data__, a, u))), t.parentNode = e);
      }
    }

    return p(r);
  };
  var xa = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: "http://www.w3.org/1999/xhtml",
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  };
  Bo.ns = {
    prefix: xa,
    qualify: function qualify(n) {
      var t = n.indexOf(":"),
          e = n;
      return t >= 0 && (e = n.substring(0, t), n = n.substring(t + 1)), xa.hasOwnProperty(e) ? {
        space: xa[e],
        local: n
      } : n;
    }
  }, ya.attr = function (n, t) {
    if (arguments.length < 2) {
      if ("string" == typeof n) {
        var e = this.node();
        return n = Bo.ns.qualify(n), n.local ? e.getAttributeNS(n.space, n.local) : e.getAttribute(n);
      }

      for (t in n) {
        this.each(m(t, n[t]));
      }

      return this;
    }

    return this.each(m(n, t));
  }, ya.classed = function (n, t) {
    if (arguments.length < 2) {
      if ("string" == typeof n) {
        var e = this.node(),
            r = (n = M(n)).length,
            u = -1;

        if (t = e.classList) {
          for (; ++u < r;) {
            if (!t.contains(n[u])) return !1;
          }
        } else for (t = e.getAttribute("class"); ++u < r;) {
          if (!x(n[u]).test(t)) return !1;
        }

        return !0;
      }

      for (t in n) {
        this.each(_(t, n[t]));
      }

      return this;
    }

    return this.each(_(n, t));
  }, ya.style = function (n, t, e) {
    var r = arguments.length;

    if (3 > r) {
      if ("string" != typeof n) {
        2 > r && (t = "");

        for (e in n) {
          this.each(w(e, n[e], t));
        }

        return this;
      }

      if (2 > r) return Qo.getComputedStyle(this.node(), null).getPropertyValue(n);
      e = "";
    }

    return this.each(w(n, t, e));
  }, ya.property = function (n, t) {
    if (arguments.length < 2) {
      if ("string" == typeof n) return this.node()[n];

      for (t in n) {
        this.each(S(t, n[t]));
      }

      return this;
    }

    return this.each(S(n, t));
  }, ya.text = function (n) {
    return arguments.length ? this.each("function" == typeof n ? function () {
      var t = n.apply(this, arguments);
      this.textContent = null == t ? "" : t;
    } : null == n ? function () {
      this.textContent = "";
    } : function () {
      this.textContent = n;
    }) : this.node().textContent;
  }, ya.html = function (n) {
    return arguments.length ? this.each("function" == typeof n ? function () {
      var t = n.apply(this, arguments);
      this.innerHTML = null == t ? "" : t;
    } : null == n ? function () {
      this.innerHTML = "";
    } : function () {
      this.innerHTML = n;
    }) : this.node().innerHTML;
  }, ya.append = function (n) {
    return n = k(n), this.select(function () {
      return this.appendChild(n.apply(this, arguments));
    });
  }, ya.insert = function (n, t) {
    return n = k(n), t = v(t), this.select(function () {
      return this.insertBefore(n.apply(this, arguments), t.apply(this, arguments) || null);
    });
  }, ya.remove = function () {
    return this.each(function () {
      var n = this.parentNode;
      n && n.removeChild(this);
    });
  }, ya.data = function (n, t) {
    function e(n, e) {
      var r,
          i,
          o,
          a = n.length,
          f = e.length,
          h = Math.min(a, f),
          g = new Array(f),
          p = new Array(f),
          v = new Array(a);

      if (t) {
        var d,
            m = new u(),
            y = new u(),
            x = [];

        for (r = -1; ++r < a;) {
          d = t.call(i = n[r], i.__data__, r), m.has(d) ? v[r] = i : m.set(d, i), x.push(d);
        }

        for (r = -1; ++r < f;) {
          d = t.call(e, o = e[r], r), (i = m.get(d)) ? (g[r] = i, i.__data__ = o) : y.has(d) || (p[r] = E(o)), y.set(d, o), m.remove(d);
        }

        for (r = -1; ++r < a;) {
          m.has(x[r]) && (v[r] = n[r]);
        }
      } else {
        for (r = -1; ++r < h;) {
          i = n[r], o = e[r], i ? (i.__data__ = o, g[r] = i) : p[r] = E(o);
        }

        for (; f > r; ++r) {
          p[r] = E(e[r]);
        }

        for (; a > r; ++r) {
          v[r] = n[r];
        }
      }

      p.update = g, p.parentNode = g.parentNode = v.parentNode = n.parentNode, c.push(p), s.push(g), l.push(v);
    }

    var r,
        i,
        o = -1,
        a = this.length;

    if (!arguments.length) {
      for (n = new Array(a = (r = this[0]).length); ++o < a;) {
        (i = r[o]) && (n[o] = i.__data__);
      }

      return n;
    }

    var c = L([]),
        s = p([]),
        l = p([]);
    if ("function" == typeof n) for (; ++o < a;) {
      e(r = this[o], n.call(r, r.parentNode.__data__, o));
    } else for (; ++o < a;) {
      e(r = this[o], n);
    }
    return s.enter = function () {
      return c;
    }, s.exit = function () {
      return l;
    }, s;
  }, ya.datum = function (n) {
    return arguments.length ? this.property("__data__", n) : this.property("__data__");
  }, ya.filter = function (n) {
    var t,
        e,
        r,
        u = [];
    "function" != typeof n && (n = A(n));

    for (var i = 0, o = this.length; o > i; i++) {
      u.push(t = []), t.parentNode = (e = this[i]).parentNode;

      for (var a = 0, c = e.length; c > a; a++) {
        (r = e[a]) && n.call(r, r.__data__, a, i) && t.push(r);
      }
    }

    return p(u);
  }, ya.order = function () {
    for (var n = -1, t = this.length; ++n < t;) {
      for (var e, r = this[n], u = r.length - 1, i = r[u]; --u >= 0;) {
        (e = r[u]) && (i && i !== e.nextSibling && i.parentNode.insertBefore(e, i), i = e);
      }
    }

    return this;
  }, ya.sort = function (n) {
    n = C.apply(this, arguments);

    for (var t = -1, e = this.length; ++t < e;) {
      this[t].sort(n);
    }

    return this.order();
  }, ya.each = function (n) {
    return N(this, function (t, e, r) {
      n.call(t, t.__data__, e, r);
    });
  }, ya.call = function (n) {
    var t = Jo(arguments);
    return n.apply(t[0] = this, t), this;
  }, ya.empty = function () {
    return !this.node();
  }, ya.node = function () {
    for (var n = 0, t = this.length; t > n; n++) {
      for (var e = this[n], r = 0, u = e.length; u > r; r++) {
        var i = e[r];
        if (i) return i;
      }
    }

    return null;
  }, ya.size = function () {
    var n = 0;
    return this.each(function () {
      ++n;
    }), n;
  };
  var Ma = [];
  Bo.selection.enter = L, Bo.selection.enter.prototype = Ma, Ma.append = ya.append, Ma.empty = ya.empty, Ma.node = ya.node, Ma.call = ya.call, Ma.size = ya.size, Ma.select = function (n) {
    for (var t, e, r, u, i, o = [], a = -1, c = this.length; ++a < c;) {
      r = (u = this[a]).update, o.push(t = []), t.parentNode = u.parentNode;

      for (var s = -1, l = u.length; ++s < l;) {
        (i = u[s]) ? (t.push(r[s] = e = n.call(u.parentNode, i.__data__, s, a)), e.__data__ = i.__data__) : t.push(null);
      }
    }

    return p(o);
  }, Ma.insert = function (n, t) {
    return arguments.length < 2 && (t = T(this)), ya.insert.call(this, n, t);
  }, ya.transition = function () {
    for (var n, t, e = ks || ++Ls, r = [], u = Es || {
      time: Date.now(),
      ease: Fr,
      delay: 0,
      duration: 250
    }, i = -1, o = this.length; ++i < o;) {
      r.push(n = []);

      for (var a = this[i], c = -1, s = a.length; ++c < s;) {
        (t = a[c]) && io(t, c, e, u), n.push(t);
      }
    }

    return eo(r, e);
  }, ya.interrupt = function () {
    return this.each(q);
  }, Bo.select = function (n) {
    var t = ["string" == typeof n ? pa(n, Go) : n];
    return t.parentNode = Ko, p([t]);
  }, Bo.selectAll = function (n) {
    var t = Jo("string" == typeof n ? va(n, Go) : n);
    return t.parentNode = Ko, p([t]);
  };

  var _a = Bo.select(Ko);

  ya.on = function (n, t, e) {
    var r = arguments.length;

    if (3 > r) {
      if ("string" != typeof n) {
        2 > r && (t = !1);

        for (e in n) {
          this.each(z(e, n[e], t));
        }

        return this;
      }

      if (2 > r) return (r = this.node()["__on" + n]) && r._;
      e = !1;
    }

    return this.each(z(n, t, e));
  };

  var ba = Bo.map({
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  });
  ba.forEach(function (n) {
    "on" + n in Go && ba.remove(n);
  });
  var wa = "onselectstart" in Go ? null : a(Ko.style, "userSelect"),
      Sa = 0;

  Bo.mouse = function (n) {
    return U(n, h());
  };

  var ka = /WebKit/.test(Qo.navigator.userAgent) ? -1 : 0;
  Bo.touches = function (n, t) {
    return arguments.length < 2 && (t = h().touches), t ? Jo(t).map(function (t) {
      var e = U(n, t);
      return e.identifier = t.identifier, e;
    }) : [];
  }, Bo.behavior.drag = function () {
    function n() {
      this.on("mousedown.drag", o).on("touchstart.drag", a);
    }

    function t() {
      return Bo.event.changedTouches[0].identifier;
    }

    function e(n, t) {
      return Bo.touches(n).filter(function (n) {
        return n.identifier === t;
      })[0];
    }

    function r(n, t, e, r) {
      return function () {
        function o() {
          var n = t(l, g),
              e = n[0] - v[0],
              r = n[1] - v[1];
          d |= e | r, v = n, f({
            type: "drag",
            x: n[0] + c[0],
            y: n[1] + c[1],
            dx: e,
            dy: r
          });
        }

        function a() {
          m.on(e + "." + p, null).on(r + "." + p, null), y(d && Bo.event.target === h), f({
            type: "dragend"
          });
        }

        var c,
            s = this,
            l = s.parentNode,
            f = u.of(s, arguments),
            h = Bo.event.target,
            g = n(),
            p = null == g ? "drag" : "drag-" + g,
            v = t(l, g),
            d = 0,
            m = Bo.select(Qo).on(e + "." + p, o).on(r + "." + p, a),
            y = P();
        i ? (c = i.apply(s, arguments), c = [c.x - v[0], c.y - v[1]]) : c = [0, 0], f({
          type: "dragstart"
        });
      };
    }

    var u = g(n, "drag", "dragstart", "dragend"),
        i = null,
        o = r(c, Bo.mouse, "mousemove", "mouseup"),
        a = r(t, e, "touchmove", "touchend");
    return n.origin = function (t) {
      return arguments.length ? (i = t, n) : i;
    }, Bo.rebind(n, u, "on");
  };
  var Ea = Math.PI,
      Aa = 2 * Ea,
      Ca = Ea / 2,
      Na = 1e-6,
      La = Na * Na,
      Ta = Ea / 180,
      qa = 180 / Ea,
      za = Math.SQRT2,
      Ra = 2,
      Da = 4;
  Bo.interpolateZoom = function (n, t) {
    function e(n) {
      var t = n * y;

      if (m) {
        var e = Y(v),
            o = i / (Ra * h) * (e * I(za * t + v) - O(v));
        return [r + o * s, u + o * l, i * e / Y(za * t + v)];
      }

      return [r + n * s, u + n * l, i * Math.exp(za * t)];
    }

    var r = n[0],
        u = n[1],
        i = n[2],
        o = t[0],
        a = t[1],
        c = t[2],
        s = o - r,
        l = a - u,
        f = s * s + l * l,
        h = Math.sqrt(f),
        g = (c * c - i * i + Da * f) / (2 * i * Ra * h),
        p = (c * c - i * i - Da * f) / (2 * c * Ra * h),
        v = Math.log(Math.sqrt(g * g + 1) - g),
        d = Math.log(Math.sqrt(p * p + 1) - p),
        m = d - v,
        y = (m || Math.log(c / i)) / za;
    return e.duration = 1e3 * y, e;
  }, Bo.behavior.zoom = function () {
    function n(n) {
      n.on(A, s).on(ja + ".zoom", h).on(C, p).on("dblclick.zoom", v).on(L, l);
    }

    function t(n) {
      return [(n[0] - S.x) / S.k, (n[1] - S.y) / S.k];
    }

    function e(n) {
      return [n[0] * S.k + S.x, n[1] * S.k + S.y];
    }

    function r(n) {
      S.k = Math.max(E[0], Math.min(E[1], n));
    }

    function u(n, t) {
      t = e(t), S.x += n[0] - t[0], S.y += n[1] - t[1];
    }

    function i() {
      _ && _.domain(M.range().map(function (n) {
        return (n - S.x) / S.k;
      }).map(M.invert)), w && w.domain(b.range().map(function (n) {
        return (n - S.y) / S.k;
      }).map(b.invert));
    }

    function o(n) {
      n({
        type: "zoomstart"
      });
    }

    function a(n) {
      i(), n({
        type: "zoom",
        scale: S.k,
        translate: [S.x, S.y]
      });
    }

    function c(n) {
      n({
        type: "zoomend"
      });
    }

    function s() {
      function n() {
        l = 1, u(Bo.mouse(r), h), a(i);
      }

      function e() {
        f.on(C, Qo === r ? p : null).on(N, null), g(l && Bo.event.target === s), c(i);
      }

      var r = this,
          i = T.of(r, arguments),
          s = Bo.event.target,
          l = 0,
          f = Bo.select(Qo).on(C, n).on(N, e),
          h = t(Bo.mouse(r)),
          g = P();
      q.call(r), o(i);
    }

    function l() {
      function n() {
        var n = Bo.touches(p);
        return g = S.k, n.forEach(function (n) {
          n.identifier in d && (d[n.identifier] = t(n));
        }), n;
      }

      function e() {
        for (var t = Bo.event.changedTouches, e = 0, i = t.length; i > e; ++e) {
          d[t[e].identifier] = null;
        }

        var o = n(),
            c = Date.now();

        if (1 === o.length) {
          if (500 > c - x) {
            var s = o[0],
                l = d[s.identifier];
            r(2 * S.k), u(s, l), f(), a(v);
          }

          x = c;
        } else if (o.length > 1) {
          var s = o[0],
              h = o[1],
              g = s[0] - h[0],
              p = s[1] - h[1];
          m = g * g + p * p;
        }
      }

      function i() {
        for (var n, t, e, i, o = Bo.touches(p), c = 0, s = o.length; s > c; ++c, i = null) {
          if (e = o[c], i = d[e.identifier]) {
            if (t) break;
            n = e, t = i;
          }
        }

        if (i) {
          var l = (l = e[0] - n[0]) * l + (l = e[1] - n[1]) * l,
              f = m && Math.sqrt(l / m);
          n = [(n[0] + e[0]) / 2, (n[1] + e[1]) / 2], t = [(t[0] + i[0]) / 2, (t[1] + i[1]) / 2], r(f * g);
        }

        x = null, u(n, t), a(v);
      }

      function h() {
        if (Bo.event.touches.length) {
          for (var t = Bo.event.changedTouches, e = 0, r = t.length; r > e; ++e) {
            delete d[t[e].identifier];
          }

          for (var u in d) {
            return void n();
          }
        }

        b.on(M, null).on(_, null), w.on(A, s).on(L, l), k(), c(v);
      }

      var g,
          p = this,
          v = T.of(p, arguments),
          d = {},
          m = 0,
          y = Bo.event.changedTouches[0].identifier,
          M = "touchmove.zoom-" + y,
          _ = "touchend.zoom-" + y,
          b = Bo.select(Qo).on(M, i).on(_, h),
          w = Bo.select(p).on(A, null).on(L, e),
          k = P();

      q.call(p), e(), o(v);
    }

    function h() {
      var n = T.of(this, arguments);
      y ? clearTimeout(y) : (q.call(this), o(n)), y = setTimeout(function () {
        y = null, c(n);
      }, 50), f();
      var e = m || Bo.mouse(this);
      d || (d = t(e)), r(Math.pow(2, .002 * Pa()) * S.k), u(e, d), a(n);
    }

    function p() {
      d = null;
    }

    function v() {
      var n = T.of(this, arguments),
          e = Bo.mouse(this),
          i = t(e),
          s = Math.log(S.k) / Math.LN2;
      o(n), r(Math.pow(2, Bo.event.shiftKey ? Math.ceil(s) - 1 : Math.floor(s) + 1)), u(e, i), a(n), c(n);
    }

    var d,
        m,
        y,
        x,
        M,
        _,
        b,
        w,
        S = {
      x: 0,
      y: 0,
      k: 1
    },
        k = [960, 500],
        E = Ua,
        A = "mousedown.zoom",
        C = "mousemove.zoom",
        N = "mouseup.zoom",
        L = "touchstart.zoom",
        T = g(n, "zoomstart", "zoom", "zoomend");

    return n.event = function (n) {
      n.each(function () {
        var n = T.of(this, arguments),
            t = S;
        ks ? Bo.select(this).transition().each("start.zoom", function () {
          S = this.__chart__ || {
            x: 0,
            y: 0,
            k: 1
          }, o(n);
        }).tween("zoom:zoom", function () {
          var e = k[0],
              r = k[1],
              u = e / 2,
              i = r / 2,
              o = Bo.interpolateZoom([(u - S.x) / S.k, (i - S.y) / S.k, e / S.k], [(u - t.x) / t.k, (i - t.y) / t.k, e / t.k]);
          return function (t) {
            var r = o(t),
                c = e / r[2];
            this.__chart__ = S = {
              x: u - r[0] * c,
              y: i - r[1] * c,
              k: c
            }, a(n);
          };
        }).each("end.zoom", function () {
          c(n);
        }) : (this.__chart__ = S, o(n), a(n), c(n));
      });
    }, n.translate = function (t) {
      return arguments.length ? (S = {
        x: +t[0],
        y: +t[1],
        k: S.k
      }, i(), n) : [S.x, S.y];
    }, n.scale = function (t) {
      return arguments.length ? (S = {
        x: S.x,
        y: S.y,
        k: +t
      }, i(), n) : S.k;
    }, n.scaleExtent = function (t) {
      return arguments.length ? (E = null == t ? Ua : [+t[0], +t[1]], n) : E;
    }, n.center = function (t) {
      return arguments.length ? (m = t && [+t[0], +t[1]], n) : m;
    }, n.size = function (t) {
      return arguments.length ? (k = t && [+t[0], +t[1]], n) : k;
    }, n.x = function (t) {
      return arguments.length ? (_ = t, M = t.copy(), S = {
        x: 0,
        y: 0,
        k: 1
      }, n) : _;
    }, n.y = function (t) {
      return arguments.length ? (w = t, b = t.copy(), S = {
        x: 0,
        y: 0,
        k: 1
      }, n) : w;
    }, Bo.rebind(n, T, "on");
  };
  var Pa,
      Ua = [0, 1 / 0],
      ja = "onwheel" in Go ? (Pa = function Pa() {
    return -Bo.event.deltaY * (Bo.event.deltaMode ? 120 : 1);
  }, "wheel") : "onmousewheel" in Go ? (Pa = function Pa() {
    return Bo.event.wheelDelta;
  }, "mousewheel") : (Pa = function Pa() {
    return -Bo.event.detail;
  }, "MozMousePixelScroll");
  V.prototype.toString = function () {
    return this.rgb() + "";
  }, Bo.hsl = function (n, t, e) {
    return 1 === arguments.length ? n instanceof $ ? X(n.h, n.s, n.l) : lt("" + n, ft, X) : X(+n, +t, +e);
  };
  var Ha = $.prototype = new V();
  Ha.brighter = function (n) {
    return n = Math.pow(.7, arguments.length ? n : 1), X(this.h, this.s, this.l / n);
  }, Ha.darker = function (n) {
    return n = Math.pow(.7, arguments.length ? n : 1), X(this.h, this.s, n * this.l);
  }, Ha.rgb = function () {
    return B(this.h, this.s, this.l);
  }, Bo.hcl = function (n, t, e) {
    return 1 === arguments.length ? n instanceof J ? W(n.h, n.c, n.l) : n instanceof Q ? tt(n.l, n.a, n.b) : tt((n = ht((n = Bo.rgb(n)).r, n.g, n.b)).l, n.a, n.b) : W(+n, +t, +e);
  };
  var Fa = J.prototype = new V();
  Fa.brighter = function (n) {
    return W(this.h, this.c, Math.min(100, this.l + Oa * (arguments.length ? n : 1)));
  }, Fa.darker = function (n) {
    return W(this.h, this.c, Math.max(0, this.l - Oa * (arguments.length ? n : 1)));
  }, Fa.rgb = function () {
    return G(this.h, this.c, this.l).rgb();
  }, Bo.lab = function (n, t, e) {
    return 1 === arguments.length ? n instanceof Q ? K(n.l, n.a, n.b) : n instanceof J ? G(n.l, n.c, n.h) : ht((n = Bo.rgb(n)).r, n.g, n.b) : K(+n, +t, +e);
  };
  var Oa = 18,
      Ya = .95047,
      Ia = 1,
      Za = 1.08883,
      Va = Q.prototype = new V();
  Va.brighter = function (n) {
    return K(Math.min(100, this.l + Oa * (arguments.length ? n : 1)), this.a, this.b);
  }, Va.darker = function (n) {
    return K(Math.max(0, this.l - Oa * (arguments.length ? n : 1)), this.a, this.b);
  }, Va.rgb = function () {
    return nt(this.l, this.a, this.b);
  }, Bo.rgb = function (n, t, e) {
    return 1 === arguments.length ? n instanceof ct ? at(n.r, n.g, n.b) : lt("" + n, at, B) : at(~~n, ~~t, ~~e);
  };
  var Xa = ct.prototype = new V();
  Xa.brighter = function (n) {
    n = Math.pow(.7, arguments.length ? n : 1);
    var t = this.r,
        e = this.g,
        r = this.b,
        u = 30;
    return t || e || r ? (t && u > t && (t = u), e && u > e && (e = u), r && u > r && (r = u), at(Math.min(255, ~~(t / n)), Math.min(255, ~~(e / n)), Math.min(255, ~~(r / n)))) : at(u, u, u);
  }, Xa.darker = function (n) {
    return n = Math.pow(.7, arguments.length ? n : 1), at(~~(n * this.r), ~~(n * this.g), ~~(n * this.b));
  }, Xa.hsl = function () {
    return ft(this.r, this.g, this.b);
  }, Xa.toString = function () {
    return "#" + st(this.r) + st(this.g) + st(this.b);
  };
  var $a = Bo.map({
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
  });
  $a.forEach(function (n, t) {
    $a.set(n, it(t));
  }), Bo.functor = vt, Bo.xhr = mt(dt), Bo.dsv = function (n, t) {
    function e(n, e, i) {
      arguments.length < 3 && (i = e, e = null);
      var o = yt(n, t, null == e ? r : u(e), i);
      return o.row = function (n) {
        return arguments.length ? o.response(null == (e = n) ? r : u(n)) : e;
      }, o;
    }

    function r(n) {
      return e.parse(n.responseText);
    }

    function u(n) {
      return function (t) {
        return e.parse(t.responseText, n);
      };
    }

    function o(t) {
      return t.map(a).join(n);
    }

    function a(n) {
      return c.test(n) ? '"' + n.replace(/\"/g, '""') + '"' : n;
    }

    var c = new RegExp('["' + n + "\n]"),
        s = n.charCodeAt(0);
    return e.parse = function (n, t) {
      var r;
      return e.parseRows(n, function (n, e) {
        if (r) return r(n, e - 1);
        var u = new Function("d", "return {" + n.map(function (n, t) {
          return JSON.stringify(n) + ": d[" + t + "]";
        }).join(",") + "}");
        r = t ? function (n, e) {
          return t(u(n), e);
        } : u;
      });
    }, e.parseRows = function (n, t) {
      function e() {
        if (l >= c) return o;
        if (u) return u = !1, i;
        var t = l;

        if (34 === n.charCodeAt(t)) {
          for (var e = t; e++ < c;) {
            if (34 === n.charCodeAt(e)) {
              if (34 !== n.charCodeAt(e + 1)) break;
              ++e;
            }
          }

          l = e + 2;
          var r = n.charCodeAt(e + 1);
          return 13 === r ? (u = !0, 10 === n.charCodeAt(e + 2) && ++l) : 10 === r && (u = !0), n.substring(t + 1, e).replace(/""/g, '"');
        }

        for (; c > l;) {
          var r = n.charCodeAt(l++),
              a = 1;
          if (10 === r) u = !0;else if (13 === r) u = !0, 10 === n.charCodeAt(l) && (++l, ++a);else if (r !== s) continue;
          return n.substring(t, l - a);
        }

        return n.substring(t);
      }

      for (var r, u, i = {}, o = {}, a = [], c = n.length, l = 0, f = 0; (r = e()) !== o;) {
        for (var h = []; r !== i && r !== o;) {
          h.push(r), r = e();
        }

        (!t || (h = t(h, f++))) && a.push(h);
      }

      return a;
    }, e.format = function (t) {
      if (Array.isArray(t[0])) return e.formatRows(t);
      var r = new i(),
          u = [];
      return t.forEach(function (n) {
        for (var t in n) {
          r.has(t) || u.push(r.add(t));
        }
      }), [u.map(a).join(n)].concat(t.map(function (t) {
        return u.map(function (n) {
          return a(t[n]);
        }).join(n);
      })).join("\n");
    }, e.formatRows = function (n) {
      return n.map(o).join("\n");
    }, e;
  }, Bo.csv = Bo.dsv(",", "text/csv"), Bo.tsv = Bo.dsv("	", "text/tab-separated-values");

  var Ba,
      Wa,
      Ja,
      Ga,
      Ka,
      Qa = Qo[a(Qo, "requestAnimationFrame")] || function (n) {
    setTimeout(n, 17);
  };

  Bo.timer = function (n, t, e) {
    var r = arguments.length;
    2 > r && (t = 0), 3 > r && (e = Date.now());
    var u = e + t,
        i = {
      c: n,
      t: u,
      f: !1,
      n: null
    };
    Wa ? Wa.n = i : Ba = i, Wa = i, Ja || (Ga = clearTimeout(Ga), Ja = 1, Qa(Mt));
  }, Bo.timer.flush = function () {
    _t(), bt();
  };
  var nc = ".",
      tc = ",",
      ec = [3, 3],
      rc = "$",
      uc = ["y", "z", "a", "f", "p", "n", "\xb5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(wt);
  Bo.formatPrefix = function (n, t) {
    var e = 0;
    return n && (0 > n && (n *= -1), t && (n = Bo.round(n, St(n, t))), e = 1 + Math.floor(1e-12 + Math.log(n) / Math.LN10), e = Math.max(-24, Math.min(24, 3 * Math.floor((0 >= e ? e + 1 : e - 1) / 3)))), uc[8 + e / 3];
  }, Bo.round = function (n, t) {
    return t ? Math.round(n * (t = Math.pow(10, t))) / t : Math.round(n);
  }, Bo.format = function (n) {
    var t = ic.exec(n),
        e = t[1] || " ",
        r = t[2] || ">",
        u = t[3] || "",
        i = t[4] || "",
        o = t[5],
        a = +t[6],
        c = t[7],
        s = t[8],
        l = t[9],
        f = 1,
        h = "",
        g = !1;

    switch (s && (s = +s.substring(1)), (o || "0" === e && "=" === r) && (o = e = "0", r = "=", c && (a -= Math.floor((a - 1) / 4))), l) {
      case "n":
        c = !0, l = "g";
        break;

      case "%":
        f = 100, h = "%", l = "f";
        break;

      case "p":
        f = 100, h = "%", l = "r";
        break;

      case "b":
      case "o":
      case "x":
      case "X":
        "#" === i && (i = "0" + l.toLowerCase());

      case "c":
      case "d":
        g = !0, s = 0;
        break;

      case "s":
        f = -1, l = "r";
    }

    "#" === i ? i = "" : "$" === i && (i = rc), "r" != l || s || (l = "g"), null != s && ("g" == l ? s = Math.max(1, Math.min(21, s)) : ("e" == l || "f" == l) && (s = Math.max(0, Math.min(20, s)))), l = oc.get(l) || kt;
    var p = o && c;
    return function (n) {
      if (g && n % 1) return "";
      var t = 0 > n || 0 === n && 0 > 1 / n ? (n = -n, "-") : u;

      if (0 > f) {
        var v = Bo.formatPrefix(n, s);
        n = v.scale(n), h = v.symbol;
      } else n *= f;

      n = l(n, s);
      var d = n.lastIndexOf("."),
          m = 0 > d ? n : n.substring(0, d),
          y = 0 > d ? "" : nc + n.substring(d + 1);
      !o && c && (m = ac(m));
      var x = i.length + m.length + y.length + (p ? 0 : t.length),
          M = a > x ? new Array(x = a - x + 1).join(e) : "";
      return p && (m = ac(M + m)), t += i, n = m + y, ("<" === r ? t + n + M : ">" === r ? M + t + n : "^" === r ? M.substring(0, x >>= 1) + t + n + M.substring(x) : t + (p ? n : M + n)) + h;
    };
  };
  var ic = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,
      oc = Bo.map({
    b: function b(n) {
      return n.toString(2);
    },
    c: function c(n) {
      return String.fromCharCode(n);
    },
    o: function o(n) {
      return n.toString(8);
    },
    x: function x(n) {
      return n.toString(16);
    },
    X: function X(n) {
      return n.toString(16).toUpperCase();
    },
    g: function g(n, t) {
      return n.toPrecision(t);
    },
    e: function e(n, t) {
      return n.toExponential(t);
    },
    f: function f(n, t) {
      return n.toFixed(t);
    },
    r: function r(n, t) {
      return (n = Bo.round(n, St(n, t))).toFixed(Math.max(0, Math.min(20, St(n * (1 + 1e-15), t))));
    }
  }),
      ac = dt;

  if (ec) {
    var cc = ec.length;

    ac = function ac(n) {
      for (var t = n.length, e = [], r = 0, u = ec[0]; t > 0 && u > 0;) {
        e.push(n.substring(t -= u, t + u)), u = ec[r = (r + 1) % cc];
      }

      return e.reverse().join(tc);
    };
  }

  Bo.geo = {}, Et.prototype = {
    s: 0,
    t: 0,
    add: function add(n) {
      At(n, this.t, sc), At(sc.s, this.s, this), this.s ? this.t += sc.t : this.s = sc.t;
    },
    reset: function reset() {
      this.s = this.t = 0;
    },
    valueOf: function valueOf() {
      return this.s;
    }
  };
  var sc = new Et();

  Bo.geo.stream = function (n, t) {
    n && lc.hasOwnProperty(n.type) ? lc[n.type](n, t) : Ct(n, t);
  };

  var lc = {
    Feature: function Feature(n, t) {
      Ct(n.geometry, t);
    },
    FeatureCollection: function FeatureCollection(n, t) {
      for (var e = n.features, r = -1, u = e.length; ++r < u;) {
        Ct(e[r].geometry, t);
      }
    }
  },
      fc = {
    Sphere: function Sphere(n, t) {
      t.sphere();
    },
    Point: function Point(n, t) {
      n = n.coordinates, t.point(n[0], n[1], n[2]);
    },
    MultiPoint: function MultiPoint(n, t) {
      for (var e = n.coordinates, r = -1, u = e.length; ++r < u;) {
        n = e[r], t.point(n[0], n[1], n[2]);
      }
    },
    LineString: function LineString(n, t) {
      Nt(n.coordinates, t, 0);
    },
    MultiLineString: function MultiLineString(n, t) {
      for (var e = n.coordinates, r = -1, u = e.length; ++r < u;) {
        Nt(e[r], t, 0);
      }
    },
    Polygon: function Polygon(n, t) {
      Lt(n.coordinates, t);
    },
    MultiPolygon: function MultiPolygon(n, t) {
      for (var e = n.coordinates, r = -1, u = e.length; ++r < u;) {
        Lt(e[r], t);
      }
    },
    GeometryCollection: function GeometryCollection(n, t) {
      for (var e = n.geometries, r = -1, u = e.length; ++r < u;) {
        Ct(e[r], t);
      }
    }
  };

  Bo.geo.area = function (n) {
    return hc = 0, Bo.geo.stream(n, pc), hc;
  };

  var hc,
      gc = new Et(),
      pc = {
    sphere: function sphere() {
      hc += 4 * Ea;
    },
    point: c,
    lineStart: c,
    lineEnd: c,
    polygonStart: function polygonStart() {
      gc.reset(), pc.lineStart = Tt;
    },
    polygonEnd: function polygonEnd() {
      var n = 2 * gc;
      hc += 0 > n ? 4 * Ea + n : n, pc.lineStart = pc.lineEnd = pc.point = c;
    }
  };
  Bo.geo.bounds = function () {
    function n(n, t) {
      x.push(M = [l = n, h = n]), f > t && (f = t), t > g && (g = t);
    }

    function t(t, e) {
      var r = qt([t * Ta, e * Ta]);

      if (m) {
        var u = Rt(m, r),
            i = [u[1], -u[0], 0],
            o = Rt(i, u);
        Ut(o), o = jt(o);
        var c = t - p,
            s = c > 0 ? 1 : -1,
            v = o[0] * qa * s,
            d = ca(c) > 180;

        if (d ^ (v > s * p && s * t > v)) {
          var y = o[1] * qa;
          y > g && (g = y);
        } else if (v = (v + 360) % 360 - 180, d ^ (v > s * p && s * t > v)) {
          var y = -o[1] * qa;
          f > y && (f = y);
        } else f > e && (f = e), e > g && (g = e);

        d ? p > t ? a(l, t) > a(l, h) && (h = t) : a(t, h) > a(l, h) && (l = t) : h >= l ? (l > t && (l = t), t > h && (h = t)) : t > p ? a(l, t) > a(l, h) && (h = t) : a(t, h) > a(l, h) && (l = t);
      } else n(t, e);

      m = r, p = t;
    }

    function e() {
      _.point = t;
    }

    function r() {
      M[0] = l, M[1] = h, _.point = n, m = null;
    }

    function u(n, e) {
      if (m) {
        var r = n - p;
        y += ca(r) > 180 ? r + (r > 0 ? 360 : -360) : r;
      } else v = n, d = e;

      pc.point(n, e), t(n, e);
    }

    function i() {
      pc.lineStart();
    }

    function o() {
      u(v, d), pc.lineEnd(), ca(y) > Na && (l = -(h = 180)), M[0] = l, M[1] = h, m = null;
    }

    function a(n, t) {
      return (t -= n) < 0 ? t + 360 : t;
    }

    function c(n, t) {
      return n[0] - t[0];
    }

    function s(n, t) {
      return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n;
    }

    var l,
        f,
        h,
        g,
        p,
        v,
        d,
        m,
        y,
        x,
        M,
        _ = {
      point: n,
      lineStart: e,
      lineEnd: r,
      polygonStart: function polygonStart() {
        _.point = u, _.lineStart = i, _.lineEnd = o, y = 0, pc.polygonStart();
      },
      polygonEnd: function polygonEnd() {
        pc.polygonEnd(), _.point = n, _.lineStart = e, _.lineEnd = r, 0 > gc ? (l = -(h = 180), f = -(g = 90)) : y > Na ? g = 90 : -Na > y && (f = -90), M[0] = l, M[1] = h;
      }
    };
    return function (n) {
      g = h = -(l = f = 1 / 0), x = [], Bo.geo.stream(n, _);
      var t = x.length;

      if (t) {
        x.sort(c);

        for (var e, r = 1, u = x[0], i = [u]; t > r; ++r) {
          e = x[r], s(e[0], u) || s(e[1], u) ? (a(u[0], e[1]) > a(u[0], u[1]) && (u[1] = e[1]), a(e[0], u[1]) > a(u[0], u[1]) && (u[0] = e[0])) : i.push(u = e);
        }

        for (var o, e, p = -1 / 0, t = i.length - 1, r = 0, u = i[t]; t >= r; u = e, ++r) {
          e = i[r], (o = a(u[1], e[0])) > p && (p = o, l = e[0], h = u[1]);
        }
      }

      return x = M = null, 1 / 0 === l || 1 / 0 === f ? [[0 / 0, 0 / 0], [0 / 0, 0 / 0]] : [[l, f], [h, g]];
    };
  }(), Bo.geo.centroid = function (n) {
    vc = dc = mc = yc = xc = Mc = _c = bc = wc = Sc = kc = 0, Bo.geo.stream(n, Ec);
    var t = wc,
        e = Sc,
        r = kc,
        u = t * t + e * e + r * r;
    return La > u && (t = Mc, e = _c, r = bc, Na > dc && (t = mc, e = yc, r = xc), u = t * t + e * e + r * r, La > u) ? [0 / 0, 0 / 0] : [Math.atan2(e, t) * qa, F(r / Math.sqrt(u)) * qa];
  };

  var vc,
      dc,
      mc,
      yc,
      xc,
      Mc,
      _c,
      bc,
      wc,
      Sc,
      kc,
      Ec = {
    sphere: c,
    point: Ft,
    lineStart: Yt,
    lineEnd: It,
    polygonStart: function polygonStart() {
      Ec.lineStart = Zt;
    },
    polygonEnd: function polygonEnd() {
      Ec.lineStart = Yt;
    }
  },
      Ac = Wt(Vt, ne, ee, [-Ea, -Ea / 2]),
      Cc = 1e9;

  Bo.geo.clipExtent = function () {
    var n,
        t,
        e,
        r,
        u,
        i,
        o = {
      stream: function stream(n) {
        return u && (u.valid = !1), u = i(n), u.valid = !0, u;
      },
      extent: function extent(a) {
        return arguments.length ? (i = ie(n = +a[0][0], t = +a[0][1], e = +a[1][0], r = +a[1][1]), u && (u.valid = !1, u = null), o) : [[n, t], [e, r]];
      }
    };
    return o.extent([[0, 0], [960, 500]]);
  }, (Bo.geo.conicEqualArea = function () {
    return ae(ce);
  }).raw = ce, Bo.geo.albers = function () {
    return Bo.geo.conicEqualArea().rotate([96, 0]).center([-.6, 38.7]).parallels([29.5, 45.5]).scale(1070);
  }, Bo.geo.albersUsa = function () {
    function n(n) {
      var i = n[0],
          o = n[1];
      return t = null, e(i, o), t || (r(i, o), t) || u(i, o), t;
    }

    var t,
        e,
        r,
        u,
        i = Bo.geo.albers(),
        o = Bo.geo.conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
        a = Bo.geo.conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
        c = {
      point: function point(n, e) {
        t = [n, e];
      }
    };
    return n.invert = function (n) {
      var t = i.scale(),
          e = i.translate(),
          r = (n[0] - e[0]) / t,
          u = (n[1] - e[1]) / t;
      return (u >= .12 && .234 > u && r >= -.425 && -.214 > r ? o : u >= .166 && .234 > u && r >= -.214 && -.115 > r ? a : i).invert(n);
    }, n.stream = function (n) {
      var t = i.stream(n),
          e = o.stream(n),
          r = a.stream(n);
      return {
        point: function point(n, u) {
          t.point(n, u), e.point(n, u), r.point(n, u);
        },
        sphere: function sphere() {
          t.sphere(), e.sphere(), r.sphere();
        },
        lineStart: function lineStart() {
          t.lineStart(), e.lineStart(), r.lineStart();
        },
        lineEnd: function lineEnd() {
          t.lineEnd(), e.lineEnd(), r.lineEnd();
        },
        polygonStart: function polygonStart() {
          t.polygonStart(), e.polygonStart(), r.polygonStart();
        },
        polygonEnd: function polygonEnd() {
          t.polygonEnd(), e.polygonEnd(), r.polygonEnd();
        }
      };
    }, n.precision = function (t) {
      return arguments.length ? (i.precision(t), o.precision(t), a.precision(t), n) : i.precision();
    }, n.scale = function (t) {
      return arguments.length ? (i.scale(t), o.scale(.35 * t), a.scale(t), n.translate(i.translate())) : i.scale();
    }, n.translate = function (t) {
      if (!arguments.length) return i.translate();
      var s = i.scale(),
          l = +t[0],
          f = +t[1];
      return e = i.translate(t).clipExtent([[l - .455 * s, f - .238 * s], [l + .455 * s, f + .238 * s]]).stream(c).point, r = o.translate([l - .307 * s, f + .201 * s]).clipExtent([[l - .425 * s + Na, f + .12 * s + Na], [l - .214 * s - Na, f + .234 * s - Na]]).stream(c).point, u = a.translate([l - .205 * s, f + .212 * s]).clipExtent([[l - .214 * s + Na, f + .166 * s + Na], [l - .115 * s - Na, f + .234 * s - Na]]).stream(c).point, n;
    }, n.scale(1070);
  };
  var Nc,
      Lc,
      Tc,
      qc,
      zc,
      Rc,
      Dc = {
    point: c,
    lineStart: c,
    lineEnd: c,
    polygonStart: function polygonStart() {
      Lc = 0, Dc.lineStart = se;
    },
    polygonEnd: function polygonEnd() {
      Dc.lineStart = Dc.lineEnd = Dc.point = c, Nc += ca(Lc / 2);
    }
  },
      Pc = {
    point: le,
    lineStart: c,
    lineEnd: c,
    polygonStart: c,
    polygonEnd: c
  },
      Uc = {
    point: ge,
    lineStart: pe,
    lineEnd: ve,
    polygonStart: function polygonStart() {
      Uc.lineStart = de;
    },
    polygonEnd: function polygonEnd() {
      Uc.point = ge, Uc.lineStart = pe, Uc.lineEnd = ve;
    }
  };
  Bo.geo.path = function () {
    function n(n) {
      return n && ("function" == typeof a && i.pointRadius(+a.apply(this, arguments)), o && o.valid || (o = u(i)), Bo.geo.stream(n, o)), i.result();
    }

    function t() {
      return o = null, n;
    }

    var e,
        r,
        u,
        i,
        o,
        a = 4.5;
    return n.area = function (n) {
      return Nc = 0, Bo.geo.stream(n, u(Dc)), Nc;
    }, n.centroid = function (n) {
      return mc = yc = xc = Mc = _c = bc = wc = Sc = kc = 0, Bo.geo.stream(n, u(Uc)), kc ? [wc / kc, Sc / kc] : bc ? [Mc / bc, _c / bc] : xc ? [mc / xc, yc / xc] : [0 / 0, 0 / 0];
    }, n.bounds = function (n) {
      return zc = Rc = -(Tc = qc = 1 / 0), Bo.geo.stream(n, u(Pc)), [[Tc, qc], [zc, Rc]];
    }, n.projection = function (n) {
      return arguments.length ? (u = (e = n) ? n.stream || xe(n) : dt, t()) : e;
    }, n.context = function (n) {
      return arguments.length ? (i = null == (r = n) ? new fe() : new me(n), "function" != typeof a && i.pointRadius(a), t()) : r;
    }, n.pointRadius = function (t) {
      return arguments.length ? (a = "function" == typeof t ? t : (i.pointRadius(+t), +t), n) : a;
    }, n.projection(Bo.geo.albersUsa()).context(null);
  }, Bo.geo.transform = function (n) {
    return {
      stream: function stream(t) {
        var e = new Me(t);

        for (var r in n) {
          e[r] = n[r];
        }

        return e;
      }
    };
  }, Me.prototype = {
    point: function point(n, t) {
      this.stream.point(n, t);
    },
    sphere: function sphere() {
      this.stream.sphere();
    },
    lineStart: function lineStart() {
      this.stream.lineStart();
    },
    lineEnd: function lineEnd() {
      this.stream.lineEnd();
    },
    polygonStart: function polygonStart() {
      this.stream.polygonStart();
    },
    polygonEnd: function polygonEnd() {
      this.stream.polygonEnd();
    }
  }, Bo.geo.projection = be, Bo.geo.projectionMutator = we, (Bo.geo.equirectangular = function () {
    return be(ke);
  }).raw = ke.invert = ke, Bo.geo.rotation = function (n) {
    function t(t) {
      return t = n(t[0] * Ta, t[1] * Ta), t[0] *= qa, t[1] *= qa, t;
    }

    return n = Ae(n[0] % 360 * Ta, n[1] * Ta, n.length > 2 ? n[2] * Ta : 0), t.invert = function (t) {
      return t = n.invert(t[0] * Ta, t[1] * Ta), t[0] *= qa, t[1] *= qa, t;
    }, t;
  }, Ee.invert = ke, Bo.geo.circle = function () {
    function n() {
      var n = "function" == typeof r ? r.apply(this, arguments) : r,
          t = Ae(-n[0] * Ta, -n[1] * Ta, 0).invert,
          u = [];
      return e(null, null, 1, {
        point: function point(n, e) {
          u.push(n = t(n, e)), n[0] *= qa, n[1] *= qa;
        }
      }), {
        type: "Polygon",
        coordinates: [u]
      };
    }

    var t,
        e,
        r = [0, 0],
        u = 6;
    return n.origin = function (t) {
      return arguments.length ? (r = t, n) : r;
    }, n.angle = function (r) {
      return arguments.length ? (e = Te((t = +r) * Ta, u * Ta), n) : t;
    }, n.precision = function (r) {
      return arguments.length ? (e = Te(t * Ta, (u = +r) * Ta), n) : u;
    }, n.angle(90);
  }, Bo.geo.distance = function (n, t) {
    var e,
        r = (t[0] - n[0]) * Ta,
        u = n[1] * Ta,
        i = t[1] * Ta,
        o = Math.sin(r),
        a = Math.cos(r),
        c = Math.sin(u),
        s = Math.cos(u),
        l = Math.sin(i),
        f = Math.cos(i);
    return Math.atan2(Math.sqrt((e = f * o) * e + (e = s * l - c * f * a) * e), c * l + s * f * a);
  }, Bo.geo.graticule = function () {
    function n() {
      return {
        type: "MultiLineString",
        coordinates: t()
      };
    }

    function t() {
      return Bo.range(Math.ceil(i / d) * d, u, d).map(h).concat(Bo.range(Math.ceil(s / m) * m, c, m).map(g)).concat(Bo.range(Math.ceil(r / p) * p, e, p).filter(function (n) {
        return ca(n % d) > Na;
      }).map(l)).concat(Bo.range(Math.ceil(a / v) * v, o, v).filter(function (n) {
        return ca(n % m) > Na;
      }).map(f));
    }

    var e,
        r,
        u,
        i,
        o,
        a,
        c,
        s,
        l,
        f,
        h,
        g,
        p = 10,
        v = p,
        d = 90,
        m = 360,
        y = 2.5;
    return n.lines = function () {
      return t().map(function (n) {
        return {
          type: "LineString",
          coordinates: n
        };
      });
    }, n.outline = function () {
      return {
        type: "Polygon",
        coordinates: [h(i).concat(g(c).slice(1), h(u).reverse().slice(1), g(s).reverse().slice(1))]
      };
    }, n.extent = function (t) {
      return arguments.length ? n.majorExtent(t).minorExtent(t) : n.minorExtent();
    }, n.majorExtent = function (t) {
      return arguments.length ? (i = +t[0][0], u = +t[1][0], s = +t[0][1], c = +t[1][1], i > u && (t = i, i = u, u = t), s > c && (t = s, s = c, c = t), n.precision(y)) : [[i, s], [u, c]];
    }, n.minorExtent = function (t) {
      return arguments.length ? (r = +t[0][0], e = +t[1][0], a = +t[0][1], o = +t[1][1], r > e && (t = r, r = e, e = t), a > o && (t = a, a = o, o = t), n.precision(y)) : [[r, a], [e, o]];
    }, n.step = function (t) {
      return arguments.length ? n.majorStep(t).minorStep(t) : n.minorStep();
    }, n.majorStep = function (t) {
      return arguments.length ? (d = +t[0], m = +t[1], n) : [d, m];
    }, n.minorStep = function (t) {
      return arguments.length ? (p = +t[0], v = +t[1], n) : [p, v];
    }, n.precision = function (t) {
      return arguments.length ? (y = +t, l = ze(a, o, 90), f = Re(r, e, y), h = ze(s, c, 90), g = Re(i, u, y), n) : y;
    }, n.majorExtent([[-180, -90 + Na], [180, 90 - Na]]).minorExtent([[-180, -80 - Na], [180, 80 + Na]]);
  }, Bo.geo.greatArc = function () {
    function n() {
      return {
        type: "LineString",
        coordinates: [t || r.apply(this, arguments), e || u.apply(this, arguments)]
      };
    }

    var t,
        e,
        r = De,
        u = Pe;
    return n.distance = function () {
      return Bo.geo.distance(t || r.apply(this, arguments), e || u.apply(this, arguments));
    }, n.source = function (e) {
      return arguments.length ? (r = e, t = "function" == typeof e ? null : e, n) : r;
    }, n.target = function (t) {
      return arguments.length ? (u = t, e = "function" == typeof t ? null : t, n) : u;
    }, n.precision = function () {
      return arguments.length ? n : 0;
    }, n;
  }, Bo.geo.interpolate = function (n, t) {
    return Ue(n[0] * Ta, n[1] * Ta, t[0] * Ta, t[1] * Ta);
  }, Bo.geo.length = function (n) {
    return jc = 0, Bo.geo.stream(n, Hc), jc;
  };
  var jc,
      Hc = {
    sphere: c,
    point: c,
    lineStart: je,
    lineEnd: c,
    polygonStart: c,
    polygonEnd: c
  },
      Fc = He(function (n) {
    return Math.sqrt(2 / (1 + n));
  }, function (n) {
    return 2 * Math.asin(n / 2);
  });
  (Bo.geo.azimuthalEqualArea = function () {
    return be(Fc);
  }).raw = Fc;
  var Oc = He(function (n) {
    var t = Math.acos(n);
    return t && t / Math.sin(t);
  }, dt);
  (Bo.geo.azimuthalEquidistant = function () {
    return be(Oc);
  }).raw = Oc, (Bo.geo.conicConformal = function () {
    return ae(Fe);
  }).raw = Fe, (Bo.geo.conicEquidistant = function () {
    return ae(Oe);
  }).raw = Oe;
  var Yc = He(function (n) {
    return 1 / n;
  }, Math.atan);
  (Bo.geo.gnomonic = function () {
    return be(Yc);
  }).raw = Yc, Ye.invert = function (n, t) {
    return [n, 2 * Math.atan(Math.exp(t)) - Ca];
  }, (Bo.geo.mercator = function () {
    return Ie(Ye);
  }).raw = Ye;
  var Ic = He(function () {
    return 1;
  }, Math.asin);
  (Bo.geo.orthographic = function () {
    return be(Ic);
  }).raw = Ic;
  var Zc = He(function (n) {
    return 1 / (1 + n);
  }, function (n) {
    return 2 * Math.atan(n);
  });
  (Bo.geo.stereographic = function () {
    return be(Zc);
  }).raw = Zc, Ze.invert = function (n, t) {
    return [-t, 2 * Math.atan(Math.exp(n)) - Ca];
  }, (Bo.geo.transverseMercator = function () {
    var n = Ie(Ze),
        t = n.center,
        e = n.rotate;
    return n.center = function (n) {
      return n ? t([-n[1], n[0]]) : (n = t(), [-n[1], n[0]]);
    }, n.rotate = function (n) {
      return n ? e([n[0], n[1], n.length > 2 ? n[2] + 90 : 90]) : (n = e(), [n[0], n[1], n[2] - 90]);
    }, n.rotate([0, 0]);
  }).raw = Ze, Bo.geom = {}, Bo.geom.hull = function (n) {
    function t(n) {
      if (n.length < 3) return [];
      var t,
          u,
          i,
          o,
          a,
          c,
          s,
          l,
          f,
          h,
          g,
          p,
          v = vt(e),
          d = vt(r),
          m = n.length,
          y = m - 1,
          x = [],
          M = [],
          _ = 0;
      if (v === Ve && r === Xe) t = n;else for (i = 0, t = []; m > i; ++i) {
        t.push([+v.call(this, u = n[i], i), +d.call(this, u, i)]);
      }

      for (i = 1; m > i; ++i) {
        (t[i][1] < t[_][1] || t[i][1] == t[_][1] && t[i][0] < t[_][0]) && (_ = i);
      }

      for (i = 0; m > i; ++i) {
        i !== _ && (c = t[i][1] - t[_][1], a = t[i][0] - t[_][0], x.push({
          angle: Math.atan2(c, a),
          index: i
        }));
      }

      for (x.sort(function (n, t) {
        return n.angle - t.angle;
      }), g = x[0].angle, h = x[0].index, f = 0, i = 1; y > i; ++i) {
        if (o = x[i].index, g == x[i].angle) {
          if (a = t[h][0] - t[_][0], c = t[h][1] - t[_][1], s = t[o][0] - t[_][0], l = t[o][1] - t[_][1], a * a + c * c >= s * s + l * l) {
            x[i].index = -1;
            continue;
          }

          x[f].index = -1;
        }

        g = x[i].angle, f = i, h = o;
      }

      for (M.push(_), i = 0, o = 0; 2 > i; ++o) {
        x[o].index > -1 && (M.push(x[o].index), i++);
      }

      for (p = M.length; y > o; ++o) {
        if (!(x[o].index < 0)) {
          for (; !$e(M[p - 2], M[p - 1], x[o].index, t);) {
            --p;
          }

          M[p++] = x[o].index;
        }
      }

      var b = [];

      for (i = p - 1; i >= 0; --i) {
        b.push(n[M[i]]);
      }

      return b;
    }

    var e = Ve,
        r = Xe;
    return arguments.length ? t(n) : (t.x = function (n) {
      return arguments.length ? (e = n, t) : e;
    }, t.y = function (n) {
      return arguments.length ? (r = n, t) : r;
    }, t);
  }, Bo.geom.polygon = function (n) {
    return ga(n, Vc), n;
  };
  var Vc = Bo.geom.polygon.prototype = [];
  Vc.area = function () {
    for (var n, t = -1, e = this.length, r = this[e - 1], u = 0; ++t < e;) {
      n = r, r = this[t], u += n[1] * r[0] - n[0] * r[1];
    }

    return .5 * u;
  }, Vc.centroid = function (n) {
    var t,
        e,
        r = -1,
        u = this.length,
        i = 0,
        o = 0,
        a = this[u - 1];

    for (arguments.length || (n = -1 / (6 * this.area())); ++r < u;) {
      t = a, a = this[r], e = t[0] * a[1] - a[0] * t[1], i += (t[0] + a[0]) * e, o += (t[1] + a[1]) * e;
    }

    return [i * n, o * n];
  }, Vc.clip = function (n) {
    for (var t, e, r, u, i, o, a = Je(n), c = -1, s = this.length - Je(this), l = this[s - 1]; ++c < s;) {
      for (t = n.slice(), n.length = 0, u = this[c], i = t[(r = t.length - a) - 1], e = -1; ++e < r;) {
        o = t[e], Be(o, l, u) ? (Be(i, l, u) || n.push(We(i, o, l, u)), n.push(o)) : Be(i, l, u) && n.push(We(i, o, l, u)), i = o;
      }

      a && n.push(n[0]), l = u;
    }

    return n;
  };
  var Xc,
      $c,
      Bc,
      Wc,
      Jc,
      Gc = [],
      Kc = [];
  ur.prototype.prepare = function () {
    for (var n, t = this.edges, e = t.length; e--;) {
      n = t[e].edge, n.b && n.a || t.splice(e, 1);
    }

    return t.sort(or), t.length;
  }, dr.prototype = {
    start: function start() {
      return this.edge.l === this.site ? this.edge.a : this.edge.b;
    },
    end: function end() {
      return this.edge.l === this.site ? this.edge.b : this.edge.a;
    }
  }, mr.prototype = {
    insert: function insert(n, t) {
      var e, r, u;

      if (n) {
        if (t.P = n, t.N = n.N, n.N && (n.N.P = t), n.N = t, n.R) {
          for (n = n.R; n.L;) {
            n = n.L;
          }

          n.L = t;
        } else n.R = t;

        e = n;
      } else this._ ? (n = _r(this._), t.P = null, t.N = n, n.P = n.L = t, e = n) : (t.P = t.N = null, this._ = t, e = null);

      for (t.L = t.R = null, t.U = e, t.C = !0, n = t; e && e.C;) {
        r = e.U, e === r.L ? (u = r.R, u && u.C ? (e.C = u.C = !1, r.C = !0, n = r) : (n === e.R && (xr(this, e), n = e, e = n.U), e.C = !1, r.C = !0, Mr(this, r))) : (u = r.L, u && u.C ? (e.C = u.C = !1, r.C = !0, n = r) : (n === e.L && (Mr(this, e), n = e, e = n.U), e.C = !1, r.C = !0, xr(this, r))), e = n.U;
      }

      this._.C = !1;
    },
    remove: function remove(n) {
      n.N && (n.N.P = n.P), n.P && (n.P.N = n.N), n.N = n.P = null;
      var t,
          e,
          r,
          u = n.U,
          i = n.L,
          o = n.R;

      if (e = i ? o ? _r(o) : i : o, u ? u.L === n ? u.L = e : u.R = e : this._ = e, i && o ? (r = e.C, e.C = n.C, e.L = i, i.U = e, e !== o ? (u = e.U, e.U = n.U, n = e.R, u.L = n, e.R = o, o.U = e) : (e.U = u, u = e, n = e.R)) : (r = n.C, n = e), n && (n.U = u), !r) {
        if (n && n.C) return n.C = !1, void 0;

        do {
          if (n === this._) break;

          if (n === u.L) {
            if (t = u.R, t.C && (t.C = !1, u.C = !0, xr(this, u), t = u.R), t.L && t.L.C || t.R && t.R.C) {
              t.R && t.R.C || (t.L.C = !1, t.C = !0, Mr(this, t), t = u.R), t.C = u.C, u.C = t.R.C = !1, xr(this, u), n = this._;
              break;
            }
          } else if (t = u.L, t.C && (t.C = !1, u.C = !0, Mr(this, u), t = u.L), t.L && t.L.C || t.R && t.R.C) {
            t.L && t.L.C || (t.R.C = !1, t.C = !0, xr(this, t), t = u.L), t.C = u.C, u.C = t.L.C = !1, Mr(this, u), n = this._;
            break;
          }

          t.C = !0, n = u, u = u.U;
        } while (!n.C);

        n && (n.C = !1);
      }
    }
  }, Bo.geom.voronoi = function (n) {
    function t(n) {
      var t = new Array(n.length),
          r = a[0][0],
          u = a[0][1],
          i = a[1][0],
          o = a[1][1];
      return br(e(n), a).cells.forEach(function (e, a) {
        var c = e.edges,
            s = e.site,
            l = t[a] = c.length ? c.map(function (n) {
          var t = n.start();
          return [t.x, t.y];
        }) : s.x >= r && s.x <= i && s.y >= u && s.y <= o ? [[r, o], [i, o], [i, u], [r, u]] : [];
        l.point = n[a];
      }), t;
    }

    function e(n) {
      return n.map(function (n, t) {
        return {
          x: Math.round(i(n, t) / Na) * Na,
          y: Math.round(o(n, t) / Na) * Na,
          i: t
        };
      });
    }

    var r = Ve,
        u = Xe,
        i = r,
        o = u,
        a = Qc;
    return n ? t(n) : (t.links = function (n) {
      return br(e(n)).edges.filter(function (n) {
        return n.l && n.r;
      }).map(function (t) {
        return {
          source: n[t.l.i],
          target: n[t.r.i]
        };
      });
    }, t.triangles = function (n) {
      var t = [];
      return br(e(n)).cells.forEach(function (e, r) {
        for (var u, i, o = e.site, a = e.edges.sort(or), c = -1, s = a.length, l = a[s - 1].edge, f = l.l === o ? l.r : l.l; ++c < s;) {
          u = l, i = f, l = a[c].edge, f = l.l === o ? l.r : l.l, r < i.i && r < f.i && Sr(o, i, f) < 0 && t.push([n[r], n[i.i], n[f.i]]);
        }
      }), t;
    }, t.x = function (n) {
      return arguments.length ? (i = vt(r = n), t) : r;
    }, t.y = function (n) {
      return arguments.length ? (o = vt(u = n), t) : u;
    }, t.clipExtent = function (n) {
      return arguments.length ? (a = null == n ? Qc : n, t) : a === Qc ? null : a;
    }, t.size = function (n) {
      return arguments.length ? t.clipExtent(n && [[0, 0], n]) : a === Qc ? null : a && a[1];
    }, t);
  };
  var Qc = [[-1e6, -1e6], [1e6, 1e6]];
  Bo.geom.delaunay = function (n) {
    return Bo.geom.voronoi().triangles(n);
  }, Bo.geom.quadtree = function (n, t, e, r, u) {
    function i(n) {
      function i(n, t, e, r, u, i, o, a) {
        if (!isNaN(e) && !isNaN(r)) if (n.leaf) {
          var c = n.x,
              l = n.y;
          if (null != c) {
            if (ca(c - e) + ca(l - r) < .01) s(n, t, e, r, u, i, o, a);else {
              var f = n.point;
              n.x = n.y = n.point = null, s(n, f, c, l, u, i, o, a), s(n, t, e, r, u, i, o, a);
            }
          } else n.x = e, n.y = r, n.point = t;
        } else s(n, t, e, r, u, i, o, a);
      }

      function s(n, t, e, r, u, o, a, c) {
        var s = .5 * (u + a),
            l = .5 * (o + c),
            f = e >= s,
            h = r >= l,
            g = (h << 1) + f;
        n.leaf = !1, n = n.nodes[g] || (n.nodes[g] = Ar()), f ? u = s : a = s, h ? o = l : c = l, i(n, t, e, r, u, o, a, c);
      }

      var l,
          f,
          h,
          g,
          p,
          v,
          d,
          m,
          y,
          x = vt(a),
          M = vt(c);
      if (null != t) v = t, d = e, m = r, y = u;else if (m = y = -(v = d = 1 / 0), f = [], h = [], p = n.length, o) for (g = 0; p > g; ++g) {
        l = n[g], l.x < v && (v = l.x), l.y < d && (d = l.y), l.x > m && (m = l.x), l.y > y && (y = l.y), f.push(l.x), h.push(l.y);
      } else for (g = 0; p > g; ++g) {
        var _ = +x(l = n[g], g),
            b = +M(l, g);

        v > _ && (v = _), d > b && (d = b), _ > m && (m = _), b > y && (y = b), f.push(_), h.push(b);
      }
      var w = m - v,
          S = y - d;
      w > S ? y = d + w : m = v + S;
      var k = Ar();

      if (k.add = function (n) {
        i(k, n, +x(n, ++g), +M(n, g), v, d, m, y);
      }, k.visit = function (n) {
        Cr(n, k, v, d, m, y);
      }, g = -1, null == t) {
        for (; ++g < p;) {
          i(k, n[g], f[g], h[g], v, d, m, y);
        }

        --g;
      } else n.forEach(k.add);

      return f = h = n = l = null, k;
    }

    var o,
        a = Ve,
        c = Xe;
    return (o = arguments.length) ? (a = kr, c = Er, 3 === o && (u = e, r = t, e = t = 0), i(n)) : (i.x = function (n) {
      return arguments.length ? (a = n, i) : a;
    }, i.y = function (n) {
      return arguments.length ? (c = n, i) : c;
    }, i.extent = function (n) {
      return arguments.length ? (null == n ? t = e = r = u = null : (t = +n[0][0], e = +n[0][1], r = +n[1][0], u = +n[1][1]), i) : null == t ? null : [[t, e], [r, u]];
    }, i.size = function (n) {
      return arguments.length ? (null == n ? t = e = r = u = null : (t = e = 0, r = +n[0], u = +n[1]), i) : null == t ? null : [r - t, u - e];
    }, i);
  }, Bo.interpolateRgb = Nr, Bo.interpolateObject = Lr, Bo.interpolateNumber = Tr, Bo.interpolateString = qr;
  var ns = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
  Bo.interpolate = zr, Bo.interpolators = [function (n, t) {
    var e = typeof t;
    return ("string" === e ? $a.has(t) || /^(#|rgb\(|hsl\()/.test(t) ? Nr : qr : t instanceof V ? Nr : "object" === e ? Array.isArray(t) ? Rr : Lr : Tr)(n, t);
  }], Bo.interpolateArray = Rr;

  var ts = function ts() {
    return dt;
  },
      es = Bo.map({
    linear: ts,
    poly: Or,
    quad: function quad() {
      return jr;
    },
    cubic: function cubic() {
      return Hr;
    },
    sin: function sin() {
      return Yr;
    },
    exp: function exp() {
      return Ir;
    },
    circle: function circle() {
      return Zr;
    },
    elastic: Vr,
    back: Xr,
    bounce: function bounce() {
      return $r;
    }
  }),
      rs = Bo.map({
    "in": dt,
    out: Pr,
    "in-out": Ur,
    "out-in": function outIn(n) {
      return Ur(Pr(n));
    }
  });

  Bo.ease = function (n) {
    var t = n.indexOf("-"),
        e = t >= 0 ? n.substring(0, t) : n,
        r = t >= 0 ? n.substring(t + 1) : "in";
    return e = es.get(e) || ts, r = rs.get(r) || dt, Dr(r(e.apply(null, Wo.call(arguments, 1))));
  }, Bo.interpolateHcl = Br, Bo.interpolateHsl = Wr, Bo.interpolateLab = Jr, Bo.interpolateRound = Gr, Bo.transform = function (n) {
    var t = Go.createElementNS(Bo.ns.prefix.svg, "g");
    return (Bo.transform = function (n) {
      if (null != n) {
        t.setAttribute("transform", n);
        var e = t.transform.baseVal.consolidate();
      }

      return new Kr(e ? e.matrix : us);
    })(n);
  }, Kr.prototype.toString = function () {
    return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")";
  };
  var us = {
    a: 1,
    b: 0,
    c: 0,
    d: 1,
    e: 0,
    f: 0
  };
  Bo.interpolateTransform = eu, Bo.layout = {}, Bo.layout.bundle = function () {
    return function (n) {
      for (var t = [], e = -1, r = n.length; ++e < r;) {
        t.push(iu(n[e]));
      }

      return t;
    };
  }, Bo.layout.chord = function () {
    function n() {
      var n,
          s,
          f,
          h,
          g,
          p = {},
          v = [],
          d = Bo.range(i),
          m = [];

      for (e = [], r = [], n = 0, h = -1; ++h < i;) {
        for (s = 0, g = -1; ++g < i;) {
          s += u[h][g];
        }

        v.push(s), m.push(Bo.range(i)), n += s;
      }

      for (o && d.sort(function (n, t) {
        return o(v[n], v[t]);
      }), a && m.forEach(function (n, t) {
        n.sort(function (n, e) {
          return a(u[t][n], u[t][e]);
        });
      }), n = (Aa - l * i) / n, s = 0, h = -1; ++h < i;) {
        for (f = s, g = -1; ++g < i;) {
          var y = d[h],
              x = m[y][g],
              M = u[y][x],
              _ = s,
              b = s += M * n;
          p[y + "-" + x] = {
            index: y,
            subindex: x,
            startAngle: _,
            endAngle: b,
            value: M
          };
        }

        r[y] = {
          index: y,
          startAngle: f,
          endAngle: s,
          value: (s - f) / n
        }, s += l;
      }

      for (h = -1; ++h < i;) {
        for (g = h - 1; ++g < i;) {
          var w = p[h + "-" + g],
              S = p[g + "-" + h];
          (w.value || S.value) && e.push(w.value < S.value ? {
            source: S,
            target: w
          } : {
            source: w,
            target: S
          });
        }
      }

      c && t();
    }

    function t() {
      e.sort(function (n, t) {
        return c((n.source.value + n.target.value) / 2, (t.source.value + t.target.value) / 2);
      });
    }

    var e,
        r,
        u,
        i,
        o,
        a,
        c,
        s = {},
        l = 0;
    return s.matrix = function (n) {
      return arguments.length ? (i = (u = n) && u.length, e = r = null, s) : u;
    }, s.padding = function (n) {
      return arguments.length ? (l = n, e = r = null, s) : l;
    }, s.sortGroups = function (n) {
      return arguments.length ? (o = n, e = r = null, s) : o;
    }, s.sortSubgroups = function (n) {
      return arguments.length ? (a = n, e = null, s) : a;
    }, s.sortChords = function (n) {
      return arguments.length ? (c = n, e && t(), s) : c;
    }, s.chords = function () {
      return e || n(), e;
    }, s.groups = function () {
      return r || n(), r;
    }, s;
  }, Bo.layout.force = function () {
    function n(n) {
      return function (t, e, r, u) {
        if (t.point !== n) {
          var i = t.cx - n.x,
              o = t.cy - n.y,
              a = 1 / Math.sqrt(i * i + o * o);

          if (v > (u - e) * a) {
            var c = t.charge * a * a;
            return n.px -= i * c, n.py -= o * c, !0;
          }

          if (t.point && isFinite(a)) {
            var c = t.pointCharge * a * a;
            n.px -= i * c, n.py -= o * c;
          }
        }

        return !t.charge;
      };
    }

    function t(n) {
      n.px = Bo.event.x, n.py = Bo.event.y, a.resume();
    }

    var e,
        r,
        u,
        i,
        o,
        a = {},
        c = Bo.dispatch("start", "tick", "end"),
        s = [1, 1],
        l = .9,
        f = is,
        h = os,
        g = -30,
        p = .1,
        v = .8,
        d = [],
        m = [];
    return a.tick = function () {
      if ((r *= .99) < .005) return c.end({
        type: "end",
        alpha: r = 0
      }), !0;
      var t,
          e,
          a,
          f,
          h,
          v,
          y,
          x,
          M,
          _ = d.length,
          b = m.length;

      for (e = 0; b > e; ++e) {
        a = m[e], f = a.source, h = a.target, x = h.x - f.x, M = h.y - f.y, (v = x * x + M * M) && (v = r * i[e] * ((v = Math.sqrt(v)) - u[e]) / v, x *= v, M *= v, h.x -= x * (y = f.weight / (h.weight + f.weight)), h.y -= M * y, f.x += x * (y = 1 - y), f.y += M * y);
      }

      if ((y = r * p) && (x = s[0] / 2, M = s[1] / 2, e = -1, y)) for (; ++e < _;) {
        a = d[e], a.x += (x - a.x) * y, a.y += (M - a.y) * y;
      }
      if (g) for (hu(t = Bo.geom.quadtree(d), r, o), e = -1; ++e < _;) {
        (a = d[e]).fixed || t.visit(n(a));
      }

      for (e = -1; ++e < _;) {
        a = d[e], a.fixed ? (a.x = a.px, a.y = a.py) : (a.x -= (a.px - (a.px = a.x)) * l, a.y -= (a.py - (a.py = a.y)) * l);
      }

      c.tick({
        type: "tick",
        alpha: r
      });
    }, a.nodes = function (n) {
      return arguments.length ? (d = n, a) : d;
    }, a.links = function (n) {
      return arguments.length ? (m = n, a) : m;
    }, a.size = function (n) {
      return arguments.length ? (s = n, a) : s;
    }, a.linkDistance = function (n) {
      return arguments.length ? (f = "function" == typeof n ? n : +n, a) : f;
    }, a.distance = a.linkDistance, a.linkStrength = function (n) {
      return arguments.length ? (h = "function" == typeof n ? n : +n, a) : h;
    }, a.friction = function (n) {
      return arguments.length ? (l = +n, a) : l;
    }, a.charge = function (n) {
      return arguments.length ? (g = "function" == typeof n ? n : +n, a) : g;
    }, a.gravity = function (n) {
      return arguments.length ? (p = +n, a) : p;
    }, a.theta = function (n) {
      return arguments.length ? (v = +n, a) : v;
    }, a.alpha = function (n) {
      return arguments.length ? (n = +n, r ? r = n > 0 ? n : 0 : n > 0 && (c.start({
        type: "start",
        alpha: r = n
      }), Bo.timer(a.tick)), a) : r;
    }, a.start = function () {
      function n(n, r) {
        if (!e) {
          for (e = new Array(c), a = 0; c > a; ++a) {
            e[a] = [];
          }

          for (a = 0; s > a; ++a) {
            var u = m[a];
            e[u.source.index].push(u.target), e[u.target.index].push(u.source);
          }
        }

        for (var i, o = e[t], a = -1, s = o.length; ++a < s;) {
          if (!isNaN(i = o[a][n])) return i;
        }

        return Math.random() * r;
      }

      var t,
          e,
          r,
          c = d.length,
          l = m.length,
          p = s[0],
          v = s[1];

      for (t = 0; c > t; ++t) {
        (r = d[t]).index = t, r.weight = 0;
      }

      for (t = 0; l > t; ++t) {
        r = m[t], "number" == typeof r.source && (r.source = d[r.source]), "number" == typeof r.target && (r.target = d[r.target]), ++r.source.weight, ++r.target.weight;
      }

      for (t = 0; c > t; ++t) {
        r = d[t], isNaN(r.x) && (r.x = n("x", p)), isNaN(r.y) && (r.y = n("y", v)), isNaN(r.px) && (r.px = r.x), isNaN(r.py) && (r.py = r.y);
      }

      if (u = [], "function" == typeof f) for (t = 0; l > t; ++t) {
        u[t] = +f.call(this, m[t], t);
      } else for (t = 0; l > t; ++t) {
        u[t] = f;
      }
      if (i = [], "function" == typeof h) for (t = 0; l > t; ++t) {
        i[t] = +h.call(this, m[t], t);
      } else for (t = 0; l > t; ++t) {
        i[t] = h;
      }
      if (o = [], "function" == typeof g) for (t = 0; c > t; ++t) {
        o[t] = +g.call(this, d[t], t);
      } else for (t = 0; c > t; ++t) {
        o[t] = g;
      }
      return a.resume();
    }, a.resume = function () {
      return a.alpha(.1);
    }, a.stop = function () {
      return a.alpha(0);
    }, a.drag = function () {
      return e || (e = Bo.behavior.drag().origin(dt).on("dragstart.force", cu).on("drag.force", t).on("dragend.force", su)), arguments.length ? (this.on("mouseover.force", lu).on("mouseout.force", fu).call(e), void 0) : e;
    }, Bo.rebind(a, c, "on");
  };
  var is = 20,
      os = 1;
  Bo.layout.hierarchy = function () {
    function n(t, o, a) {
      var c = u.call(e, t, o);

      if (t.depth = o, a.push(t), c && (s = c.length)) {
        for (var s, l, f = -1, h = t.children = new Array(s), g = 0, p = o + 1; ++f < s;) {
          l = h[f] = n(c[f], p, a), l.parent = t, g += l.value;
        }

        r && h.sort(r), i && (t.value = g);
      } else delete t.children, i && (t.value = +i.call(e, t, o) || 0);

      return t;
    }

    function t(n, r) {
      var u = n.children,
          o = 0;
      if (u && (a = u.length)) for (var a, c = -1, s = r + 1; ++c < a;) {
        o += t(u[c], s);
      } else i && (o = +i.call(e, n, r) || 0);
      return i && (n.value = o), o;
    }

    function e(t) {
      var e = [];
      return n(t, 0, e), e;
    }

    var r = du,
        u = pu,
        i = vu;
    return e.sort = function (n) {
      return arguments.length ? (r = n, e) : r;
    }, e.children = function (n) {
      return arguments.length ? (u = n, e) : u;
    }, e.value = function (n) {
      return arguments.length ? (i = n, e) : i;
    }, e.revalue = function (n) {
      return t(n, 0), n;
    }, e;
  }, Bo.layout.partition = function () {
    function n(t, e, r, u) {
      var i = t.children;

      if (t.x = e, t.y = t.depth * u, t.dx = r, t.dy = u, i && (o = i.length)) {
        var o,
            a,
            c,
            s = -1;

        for (r = t.value ? r / t.value : 0; ++s < o;) {
          n(a = i[s], e, c = a.value * r, u), e += c;
        }
      }
    }

    function t(n) {
      var e = n.children,
          r = 0;
      if (e && (u = e.length)) for (var u, i = -1; ++i < u;) {
        r = Math.max(r, t(e[i]));
      }
      return 1 + r;
    }

    function e(e, i) {
      var o = r.call(this, e, i);
      return n(o[0], 0, u[0], u[1] / t(o[0])), o;
    }

    var r = Bo.layout.hierarchy(),
        u = [1, 1];
    return e.size = function (n) {
      return arguments.length ? (u = n, e) : u;
    }, gu(e, r);
  }, Bo.layout.pie = function () {
    function n(i) {
      var o = i.map(function (e, r) {
        return +t.call(n, e, r);
      }),
          a = +("function" == typeof r ? r.apply(this, arguments) : r),
          c = (("function" == typeof u ? u.apply(this, arguments) : u) - a) / Bo.sum(o),
          s = Bo.range(i.length);
      null != e && s.sort(e === as ? function (n, t) {
        return o[t] - o[n];
      } : function (n, t) {
        return e(i[n], i[t]);
      });
      var l = [];
      return s.forEach(function (n) {
        var t;
        l[n] = {
          data: i[n],
          value: t = o[n],
          startAngle: a,
          endAngle: a += t * c
        };
      }), l;
    }

    var t = Number,
        e = as,
        r = 0,
        u = Aa;
    return n.value = function (e) {
      return arguments.length ? (t = e, n) : t;
    }, n.sort = function (t) {
      return arguments.length ? (e = t, n) : e;
    }, n.startAngle = function (t) {
      return arguments.length ? (r = t, n) : r;
    }, n.endAngle = function (t) {
      return arguments.length ? (u = t, n) : u;
    }, n;
  };
  var as = {};

  Bo.layout.stack = function () {
    function n(a, c) {
      var s = a.map(function (e, r) {
        return t.call(n, e, r);
      }),
          l = s.map(function (t) {
        return t.map(function (t, e) {
          return [i.call(n, t, e), o.call(n, t, e)];
        });
      }),
          f = e.call(n, l, c);
      s = Bo.permute(s, f), l = Bo.permute(l, f);
      var h,
          g,
          p,
          v = r.call(n, l, c),
          d = s.length,
          m = s[0].length;

      for (g = 0; m > g; ++g) {
        for (u.call(n, s[0][g], p = v[g], l[0][g][1]), h = 1; d > h; ++h) {
          u.call(n, s[h][g], p += l[h - 1][g][1], l[h][g][1]);
        }
      }

      return a;
    }

    var t = dt,
        e = _u,
        r = bu,
        u = Mu,
        i = yu,
        o = xu;
    return n.values = function (e) {
      return arguments.length ? (t = e, n) : t;
    }, n.order = function (t) {
      return arguments.length ? (e = "function" == typeof t ? t : cs.get(t) || _u, n) : e;
    }, n.offset = function (t) {
      return arguments.length ? (r = "function" == typeof t ? t : ss.get(t) || bu, n) : r;
    }, n.x = function (t) {
      return arguments.length ? (i = t, n) : i;
    }, n.y = function (t) {
      return arguments.length ? (o = t, n) : o;
    }, n.out = function (t) {
      return arguments.length ? (u = t, n) : u;
    }, n;
  };

  var cs = Bo.map({
    "inside-out": function insideOut(n) {
      var t,
          e,
          r = n.length,
          u = n.map(wu),
          i = n.map(Su),
          o = Bo.range(r).sort(function (n, t) {
        return u[n] - u[t];
      }),
          a = 0,
          c = 0,
          s = [],
          l = [];

      for (t = 0; r > t; ++t) {
        e = o[t], c > a ? (a += i[e], s.push(e)) : (c += i[e], l.push(e));
      }

      return l.reverse().concat(s);
    },
    reverse: function reverse(n) {
      return Bo.range(n.length).reverse();
    },
    "default": _u
  }),
      ss = Bo.map({
    silhouette: function silhouette(n) {
      var t,
          e,
          r,
          u = n.length,
          i = n[0].length,
          o = [],
          a = 0,
          c = [];

      for (e = 0; i > e; ++e) {
        for (t = 0, r = 0; u > t; t++) {
          r += n[t][e][1];
        }

        r > a && (a = r), o.push(r);
      }

      for (e = 0; i > e; ++e) {
        c[e] = (a - o[e]) / 2;
      }

      return c;
    },
    wiggle: function wiggle(n) {
      var t,
          e,
          r,
          u,
          i,
          o,
          a,
          c,
          s,
          l = n.length,
          f = n[0],
          h = f.length,
          g = [];

      for (g[0] = c = s = 0, e = 1; h > e; ++e) {
        for (t = 0, u = 0; l > t; ++t) {
          u += n[t][e][1];
        }

        for (t = 0, i = 0, a = f[e][0] - f[e - 1][0]; l > t; ++t) {
          for (r = 0, o = (n[t][e][1] - n[t][e - 1][1]) / (2 * a); t > r; ++r) {
            o += (n[r][e][1] - n[r][e - 1][1]) / a;
          }

          i += o * n[t][e][1];
        }

        g[e] = c -= u ? i / u * a : 0, s > c && (s = c);
      }

      for (e = 0; h > e; ++e) {
        g[e] -= s;
      }

      return g;
    },
    expand: function expand(n) {
      var t,
          e,
          r,
          u = n.length,
          i = n[0].length,
          o = 1 / u,
          a = [];

      for (e = 0; i > e; ++e) {
        for (t = 0, r = 0; u > t; t++) {
          r += n[t][e][1];
        }

        if (r) for (t = 0; u > t; t++) {
          n[t][e][1] /= r;
        } else for (t = 0; u > t; t++) {
          n[t][e][1] = o;
        }
      }

      for (e = 0; i > e; ++e) {
        a[e] = 0;
      }

      return a;
    },
    zero: bu
  });
  Bo.layout.histogram = function () {
    function n(n, i) {
      for (var o, a, c = [], s = n.map(e, this), l = r.call(this, s, i), f = u.call(this, l, s, i), i = -1, h = s.length, g = f.length - 1, p = t ? 1 : 1 / h; ++i < g;) {
        o = c[i] = [], o.dx = f[i + 1] - (o.x = f[i]), o.y = 0;
      }

      if (g > 0) for (i = -1; ++i < h;) {
        a = s[i], a >= l[0] && a <= l[1] && (o = c[Bo.bisect(f, a, 1, g) - 1], o.y += p, o.push(n[i]));
      }
      return c;
    }

    var t = !0,
        e = Number,
        r = Cu,
        u = Eu;
    return n.value = function (t) {
      return arguments.length ? (e = t, n) : e;
    }, n.range = function (t) {
      return arguments.length ? (r = vt(t), n) : r;
    }, n.bins = function (t) {
      return arguments.length ? (u = "number" == typeof t ? function (n) {
        return Au(n, t);
      } : vt(t), n) : u;
    }, n.frequency = function (e) {
      return arguments.length ? (t = !!e, n) : t;
    }, n;
  }, Bo.layout.tree = function () {
    function n(n, i) {
      function o(n, t) {
        var r = n.children,
            u = n._tree;

        if (r && (i = r.length)) {
          for (var i, a, s, l = r[0], f = l, h = -1; ++h < i;) {
            s = r[h], o(s, a), f = c(s, a, f), a = s;
          }

          Uu(n);
          var g = .5 * (l._tree.prelim + s._tree.prelim);
          t ? (u.prelim = t._tree.prelim + e(n, t), u.mod = u.prelim - g) : u.prelim = g;
        } else t && (u.prelim = t._tree.prelim + e(n, t));
      }

      function a(n, t) {
        n.x = n._tree.prelim + t;
        var e = n.children;

        if (e && (r = e.length)) {
          var r,
              u = -1;

          for (t += n._tree.mod; ++u < r;) {
            a(e[u], t);
          }
        }
      }

      function c(n, t, r) {
        if (t) {
          for (var u, i = n, o = n, a = t, c = n.parent.children[0], s = i._tree.mod, l = o._tree.mod, f = a._tree.mod, h = c._tree.mod; a = Tu(a), i = Lu(i), a && i;) {
            c = Lu(c), o = Tu(o), o._tree.ancestor = n, u = a._tree.prelim + f - i._tree.prelim - s + e(a, i), u > 0 && (ju(Hu(a, n, r), n, u), s += u, l += u), f += a._tree.mod, s += i._tree.mod, h += c._tree.mod, l += o._tree.mod;
          }

          a && !Tu(o) && (o._tree.thread = a, o._tree.mod += f - l), i && !Lu(c) && (c._tree.thread = i, c._tree.mod += s - h, r = n);
        }

        return r;
      }

      var s = t.call(this, n, i),
          l = s[0];
      Pu(l, function (n, t) {
        n._tree = {
          ancestor: n,
          prelim: 0,
          mod: 0,
          change: 0,
          shift: 0,
          number: t ? t._tree.number + 1 : 0
        };
      }), o(l), a(l, -l._tree.prelim);
      var f = qu(l, Ru),
          h = qu(l, zu),
          g = qu(l, Du),
          p = f.x - e(f, h) / 2,
          v = h.x + e(h, f) / 2,
          d = g.depth || 1;
      return Pu(l, u ? function (n) {
        n.x *= r[0], n.y = n.depth * r[1], delete n._tree;
      } : function (n) {
        n.x = (n.x - p) / (v - p) * r[0], n.y = n.depth / d * r[1], delete n._tree;
      }), s;
    }

    var t = Bo.layout.hierarchy().sort(null).value(null),
        e = Nu,
        r = [1, 1],
        u = !1;
    return n.separation = function (t) {
      return arguments.length ? (e = t, n) : e;
    }, n.size = function (t) {
      return arguments.length ? (u = null == (r = t), n) : u ? null : r;
    }, n.nodeSize = function (t) {
      return arguments.length ? (u = null != (r = t), n) : u ? r : null;
    }, gu(n, t);
  }, Bo.layout.pack = function () {
    function n(n, i) {
      var o = e.call(this, n, i),
          a = o[0],
          c = u[0],
          s = u[1],
          l = null == t ? Math.sqrt : "function" == typeof t ? t : function () {
        return t;
      };

      if (a.x = a.y = 0, Pu(a, function (n) {
        n.r = +l(n.value);
      }), Pu(a, Zu), r) {
        var f = r * (t ? 1 : Math.max(2 * a.r / c, 2 * a.r / s)) / 2;
        Pu(a, function (n) {
          n.r += f;
        }), Pu(a, Zu), Pu(a, function (n) {
          n.r -= f;
        });
      }

      return $u(a, c / 2, s / 2, t ? 1 : 1 / Math.max(2 * a.r / c, 2 * a.r / s)), o;
    }

    var t,
        e = Bo.layout.hierarchy().sort(Fu),
        r = 0,
        u = [1, 1];
    return n.size = function (t) {
      return arguments.length ? (u = t, n) : u;
    }, n.radius = function (e) {
      return arguments.length ? (t = null == e || "function" == typeof e ? e : +e, n) : t;
    }, n.padding = function (t) {
      return arguments.length ? (r = +t, n) : r;
    }, gu(n, e);
  }, Bo.layout.cluster = function () {
    function n(n, i) {
      var o,
          a = t.call(this, n, i),
          c = a[0],
          s = 0;
      Pu(c, function (n) {
        var t = n.children;
        t && t.length ? (n.x = Ju(t), n.y = Wu(t)) : (n.x = o ? s += e(n, o) : 0, n.y = 0, o = n);
      });
      var l = Gu(c),
          f = Ku(c),
          h = l.x - e(l, f) / 2,
          g = f.x + e(f, l) / 2;
      return Pu(c, u ? function (n) {
        n.x = (n.x - c.x) * r[0], n.y = (c.y - n.y) * r[1];
      } : function (n) {
        n.x = (n.x - h) / (g - h) * r[0], n.y = (1 - (c.y ? n.y / c.y : 1)) * r[1];
      }), a;
    }

    var t = Bo.layout.hierarchy().sort(null).value(null),
        e = Nu,
        r = [1, 1],
        u = !1;
    return n.separation = function (t) {
      return arguments.length ? (e = t, n) : e;
    }, n.size = function (t) {
      return arguments.length ? (u = null == (r = t), n) : u ? null : r;
    }, n.nodeSize = function (t) {
      return arguments.length ? (u = null != (r = t), n) : u ? r : null;
    }, gu(n, t);
  }, Bo.layout.treemap = function () {
    function n(n, t) {
      for (var e, r, u = -1, i = n.length; ++u < i;) {
        r = (e = n[u]).value * (0 > t ? 0 : t), e.area = isNaN(r) || 0 >= r ? 0 : r;
      }
    }

    function t(e) {
      var i = e.children;

      if (i && i.length) {
        var o,
            a,
            c,
            s = f(e),
            l = [],
            h = i.slice(),
            p = 1 / 0,
            v = "slice" === g ? s.dx : "dice" === g ? s.dy : "slice-dice" === g ? 1 & e.depth ? s.dy : s.dx : Math.min(s.dx, s.dy);

        for (n(h, s.dx * s.dy / e.value), l.area = 0; (c = h.length) > 0;) {
          l.push(o = h[c - 1]), l.area += o.area, "squarify" !== g || (a = r(l, v)) <= p ? (h.pop(), p = a) : (l.area -= l.pop().area, u(l, v, s, !1), v = Math.min(s.dx, s.dy), l.length = l.area = 0, p = 1 / 0);
        }

        l.length && (u(l, v, s, !0), l.length = l.area = 0), i.forEach(t);
      }
    }

    function e(t) {
      var r = t.children;

      if (r && r.length) {
        var i,
            o = f(t),
            a = r.slice(),
            c = [];

        for (n(a, o.dx * o.dy / t.value), c.area = 0; i = a.pop();) {
          c.push(i), c.area += i.area, null != i.z && (u(c, i.z ? o.dx : o.dy, o, !a.length), c.length = c.area = 0);
        }

        r.forEach(e);
      }
    }

    function r(n, t) {
      for (var e, r = n.area, u = 0, i = 1 / 0, o = -1, a = n.length; ++o < a;) {
        (e = n[o].area) && (i > e && (i = e), e > u && (u = e));
      }

      return r *= r, t *= t, r ? Math.max(t * u * p / r, r / (t * i * p)) : 1 / 0;
    }

    function u(n, t, e, r) {
      var u,
          i = -1,
          o = n.length,
          a = e.x,
          s = e.y,
          l = t ? c(n.area / t) : 0;

      if (t == e.dx) {
        for ((r || l > e.dy) && (l = e.dy); ++i < o;) {
          u = n[i], u.x = a, u.y = s, u.dy = l, a += u.dx = Math.min(e.x + e.dx - a, l ? c(u.area / l) : 0);
        }

        u.z = !0, u.dx += e.x + e.dx - a, e.y += l, e.dy -= l;
      } else {
        for ((r || l > e.dx) && (l = e.dx); ++i < o;) {
          u = n[i], u.x = a, u.y = s, u.dx = l, s += u.dy = Math.min(e.y + e.dy - s, l ? c(u.area / l) : 0);
        }

        u.z = !1, u.dy += e.y + e.dy - s, e.x += l, e.dx -= l;
      }
    }

    function i(r) {
      var u = o || a(r),
          i = u[0];
      return i.x = 0, i.y = 0, i.dx = s[0], i.dy = s[1], o && a.revalue(i), n([i], i.dx * i.dy / i.value), (o ? e : t)(i), h && (o = u), u;
    }

    var o,
        a = Bo.layout.hierarchy(),
        c = Math.round,
        s = [1, 1],
        l = null,
        f = Qu,
        h = !1,
        g = "squarify",
        p = .5 * (1 + Math.sqrt(5));
    return i.size = function (n) {
      return arguments.length ? (s = n, i) : s;
    }, i.padding = function (n) {
      function t(t) {
        var e = n.call(i, t, t.depth);
        return null == e ? Qu(t) : ni(t, "number" == typeof e ? [e, e, e, e] : e);
      }

      function e(t) {
        return ni(t, n);
      }

      if (!arguments.length) return l;
      var r;
      return f = null == (l = n) ? Qu : "function" == (r = typeof n) ? t : "number" === r ? (n = [n, n, n, n], e) : e, i;
    }, i.round = function (n) {
      return arguments.length ? (c = n ? Math.round : Number, i) : c != Number;
    }, i.sticky = function (n) {
      return arguments.length ? (h = n, o = null, i) : h;
    }, i.ratio = function (n) {
      return arguments.length ? (p = n, i) : p;
    }, i.mode = function (n) {
      return arguments.length ? (g = n + "", i) : g;
    }, gu(i, a);
  }, Bo.random = {
    normal: function normal(n, t) {
      var e = arguments.length;
      return 2 > e && (t = 1), 1 > e && (n = 0), function () {
        var e, r, u;

        do {
          e = 2 * Math.random() - 1, r = 2 * Math.random() - 1, u = e * e + r * r;
        } while (!u || u > 1);

        return n + t * e * Math.sqrt(-2 * Math.log(u) / u);
      };
    },
    logNormal: function logNormal() {
      var n = Bo.random.normal.apply(Bo, arguments);
      return function () {
        return Math.exp(n());
      };
    },
    bates: function bates(n) {
      var t = Bo.random.irwinHall(n);
      return function () {
        return t() / n;
      };
    },
    irwinHall: function irwinHall(n) {
      return function () {
        for (var t = 0, e = 0; n > e; e++) {
          t += Math.random();
        }

        return t;
      };
    }
  }, Bo.scale = {};
  var ls = {
    floor: dt,
    ceil: dt
  };

  Bo.scale.linear = function () {
    return ai([0, 1], [0, 1], zr, !1);
  };

  var fs = {
    s: 1,
    g: 1,
    p: 1,
    r: 1,
    e: 1
  };

  Bo.scale.log = function () {
    return vi(Bo.scale.linear().domain([0, 1]), 10, !0, [1, 10]);
  };

  var hs = Bo.format(".0e"),
      gs = {
    floor: function floor(n) {
      return -Math.ceil(-n);
    },
    ceil: function ceil(n) {
      return -Math.floor(-n);
    }
  };
  Bo.scale.pow = function () {
    return di(Bo.scale.linear(), 1, [0, 1]);
  }, Bo.scale.sqrt = function () {
    return Bo.scale.pow().exponent(.5);
  }, Bo.scale.ordinal = function () {
    return yi([], {
      t: "range",
      a: [[]]
    });
  }, Bo.scale.category10 = function () {
    return Bo.scale.ordinal().range(ps);
  }, Bo.scale.category20 = function () {
    return Bo.scale.ordinal().range(vs);
  }, Bo.scale.category20b = function () {
    return Bo.scale.ordinal().range(ds);
  }, Bo.scale.category20c = function () {
    return Bo.scale.ordinal().range(ms);
  };
  var ps = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(ot),
      vs = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(ot),
      ds = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(ot),
      ms = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(ot);
  Bo.scale.quantile = function () {
    return xi([], []);
  }, Bo.scale.quantize = function () {
    return Mi(0, 1, [0, 1]);
  }, Bo.scale.threshold = function () {
    return _i([.5], [0, 1]);
  }, Bo.scale.identity = function () {
    return bi([0, 1]);
  }, Bo.svg = {}, Bo.svg.arc = function () {
    function n() {
      var n = t.apply(this, arguments),
          i = e.apply(this, arguments),
          o = r.apply(this, arguments) + ys,
          a = u.apply(this, arguments) + ys,
          c = (o > a && (c = o, o = a, a = c), a - o),
          s = Ea > c ? "0" : "1",
          l = Math.cos(o),
          f = Math.sin(o),
          h = Math.cos(a),
          g = Math.sin(a);
      return c >= xs ? n ? "M0," + i + "A" + i + "," + i + " 0 1,1 0," + -i + "A" + i + "," + i + " 0 1,1 0," + i + "M0," + n + "A" + n + "," + n + " 0 1,0 0," + -n + "A" + n + "," + n + " 0 1,0 0," + n + "Z" : "M0," + i + "A" + i + "," + i + " 0 1,1 0," + -i + "A" + i + "," + i + " 0 1,1 0," + i + "Z" : n ? "M" + i * l + "," + i * f + "A" + i + "," + i + " 0 " + s + ",1 " + i * h + "," + i * g + "L" + n * h + "," + n * g + "A" + n + "," + n + " 0 " + s + ",0 " + n * l + "," + n * f + "Z" : "M" + i * l + "," + i * f + "A" + i + "," + i + " 0 " + s + ",1 " + i * h + "," + i * g + "L0,0" + "Z";
    }

    var t = wi,
        e = Si,
        r = ki,
        u = Ei;
    return n.innerRadius = function (e) {
      return arguments.length ? (t = vt(e), n) : t;
    }, n.outerRadius = function (t) {
      return arguments.length ? (e = vt(t), n) : e;
    }, n.startAngle = function (t) {
      return arguments.length ? (r = vt(t), n) : r;
    }, n.endAngle = function (t) {
      return arguments.length ? (u = vt(t), n) : u;
    }, n.centroid = function () {
      var n = (t.apply(this, arguments) + e.apply(this, arguments)) / 2,
          i = (r.apply(this, arguments) + u.apply(this, arguments)) / 2 + ys;
      return [Math.cos(i) * n, Math.sin(i) * n];
    }, n;
  };
  var ys = -Ca,
      xs = Aa - Na;

  Bo.svg.line = function () {
    return Ai(dt);
  };

  var Ms = Bo.map({
    linear: Ci,
    "linear-closed": Ni,
    step: Li,
    "step-before": Ti,
    "step-after": qi,
    basis: ji,
    "basis-open": Hi,
    "basis-closed": Fi,
    bundle: Oi,
    cardinal: Di,
    "cardinal-open": zi,
    "cardinal-closed": Ri,
    monotone: $i
  });
  Ms.forEach(function (n, t) {
    t.key = n, t.closed = /-closed$/.test(n);
  });
  var _s = [0, 2 / 3, 1 / 3, 0],
      bs = [0, 1 / 3, 2 / 3, 0],
      ws = [0, 1 / 6, 2 / 3, 1 / 6];
  Bo.svg.line.radial = function () {
    var n = Ai(Bi);
    return n.radius = n.x, delete n.x, n.angle = n.y, delete n.y, n;
  }, Ti.reverse = qi, qi.reverse = Ti, Bo.svg.area = function () {
    return Wi(dt);
  }, Bo.svg.area.radial = function () {
    var n = Wi(Bi);
    return n.radius = n.x, delete n.x, n.innerRadius = n.x0, delete n.x0, n.outerRadius = n.x1, delete n.x1, n.angle = n.y, delete n.y, n.startAngle = n.y0, delete n.y0, n.endAngle = n.y1, delete n.y1, n;
  }, Bo.svg.chord = function () {
    function n(n, a) {
      var c = t(this, i, n, a),
          s = t(this, o, n, a);
      return "M" + c.p0 + r(c.r, c.p1, c.a1 - c.a0) + (e(c, s) ? u(c.r, c.p1, c.r, c.p0) : u(c.r, c.p1, s.r, s.p0) + r(s.r, s.p1, s.a1 - s.a0) + u(s.r, s.p1, c.r, c.p0)) + "Z";
    }

    function t(n, t, e, r) {
      var u = t.call(n, e, r),
          i = a.call(n, u, r),
          o = c.call(n, u, r) + ys,
          l = s.call(n, u, r) + ys;
      return {
        r: i,
        a0: o,
        a1: l,
        p0: [i * Math.cos(o), i * Math.sin(o)],
        p1: [i * Math.cos(l), i * Math.sin(l)]
      };
    }

    function e(n, t) {
      return n.a0 == t.a0 && n.a1 == t.a1;
    }

    function r(n, t, e) {
      return "A" + n + "," + n + " 0 " + +(e > Ea) + ",1 " + t;
    }

    function u(n, t, e, r) {
      return "Q 0,0 " + r;
    }

    var i = De,
        o = Pe,
        a = Ji,
        c = ki,
        s = Ei;
    return n.radius = function (t) {
      return arguments.length ? (a = vt(t), n) : a;
    }, n.source = function (t) {
      return arguments.length ? (i = vt(t), n) : i;
    }, n.target = function (t) {
      return arguments.length ? (o = vt(t), n) : o;
    }, n.startAngle = function (t) {
      return arguments.length ? (c = vt(t), n) : c;
    }, n.endAngle = function (t) {
      return arguments.length ? (s = vt(t), n) : s;
    }, n;
  }, Bo.svg.diagonal = function () {
    function n(n, u) {
      var i = t.call(this, n, u),
          o = e.call(this, n, u),
          a = (i.y + o.y) / 2,
          c = [i, {
        x: i.x,
        y: a
      }, {
        x: o.x,
        y: a
      }, o];
      return c = c.map(r), "M" + c[0] + "C" + c[1] + " " + c[2] + " " + c[3];
    }

    var t = De,
        e = Pe,
        r = Gi;
    return n.source = function (e) {
      return arguments.length ? (t = vt(e), n) : t;
    }, n.target = function (t) {
      return arguments.length ? (e = vt(t), n) : e;
    }, n.projection = function (t) {
      return arguments.length ? (r = t, n) : r;
    }, n;
  }, Bo.svg.diagonal.radial = function () {
    var n = Bo.svg.diagonal(),
        t = Gi,
        e = n.projection;
    return n.projection = function (n) {
      return arguments.length ? e(Ki(t = n)) : t;
    }, n;
  }, Bo.svg.symbol = function () {
    function n(n, r) {
      return (Ss.get(t.call(this, n, r)) || to)(e.call(this, n, r));
    }

    var t = no,
        e = Qi;
    return n.type = function (e) {
      return arguments.length ? (t = vt(e), n) : t;
    }, n.size = function (t) {
      return arguments.length ? (e = vt(t), n) : e;
    }, n;
  };
  var Ss = Bo.map({
    circle: to,
    cross: function cross(n) {
      var t = Math.sqrt(n / 5) / 2;
      return "M" + -3 * t + "," + -t + "H" + -t + "V" + -3 * t + "H" + t + "V" + -t + "H" + 3 * t + "V" + t + "H" + t + "V" + 3 * t + "H" + -t + "V" + t + "H" + -3 * t + "Z";
    },
    diamond: function diamond(n) {
      var t = Math.sqrt(n / (2 * Cs)),
          e = t * Cs;
      return "M0," + -t + "L" + e + ",0" + " 0," + t + " " + -e + ",0" + "Z";
    },
    square: function square(n) {
      var t = Math.sqrt(n) / 2;
      return "M" + -t + "," + -t + "L" + t + "," + -t + " " + t + "," + t + " " + -t + "," + t + "Z";
    },
    "triangle-down": function triangleDown(n) {
      var t = Math.sqrt(n / As),
          e = t * As / 2;
      return "M0," + e + "L" + t + "," + -e + " " + -t + "," + -e + "Z";
    },
    "triangle-up": function triangleUp(n) {
      var t = Math.sqrt(n / As),
          e = t * As / 2;
      return "M0," + -e + "L" + t + "," + e + " " + -t + "," + e + "Z";
    }
  });
  Bo.svg.symbolTypes = Ss.keys();
  var ks,
      Es,
      As = Math.sqrt(3),
      Cs = Math.tan(30 * Ta),
      Ns = [],
      Ls = 0;
  Ns.call = ya.call, Ns.empty = ya.empty, Ns.node = ya.node, Ns.size = ya.size, Bo.transition = function (n) {
    return arguments.length ? ks ? n.transition() : n : _a.transition();
  }, Bo.transition.prototype = Ns, Ns.select = function (n) {
    var t,
        e,
        r,
        u = this.id,
        i = [];
    n = v(n);

    for (var o = -1, a = this.length; ++o < a;) {
      i.push(t = []);

      for (var c = this[o], s = -1, l = c.length; ++s < l;) {
        (r = c[s]) && (e = n.call(r, r.__data__, s, o)) ? ("__data__" in r && (e.__data__ = r.__data__), io(e, s, u, r.__transition__[u]), t.push(e)) : t.push(null);
      }
    }

    return eo(i, u);
  }, Ns.selectAll = function (n) {
    var t,
        e,
        r,
        u,
        i,
        o = this.id,
        a = [];
    n = d(n);

    for (var c = -1, s = this.length; ++c < s;) {
      for (var l = this[c], f = -1, h = l.length; ++f < h;) {
        if (r = l[f]) {
          i = r.__transition__[o], e = n.call(r, r.__data__, f, c), a.push(t = []);

          for (var g = -1, p = e.length; ++g < p;) {
            (u = e[g]) && io(u, g, o, i), t.push(u);
          }
        }
      }
    }

    return eo(a, o);
  }, Ns.filter = function (n) {
    var t,
        e,
        r,
        u = [];
    "function" != typeof n && (n = A(n));

    for (var i = 0, o = this.length; o > i; i++) {
      u.push(t = []);

      for (var e = this[i], a = 0, c = e.length; c > a; a++) {
        (r = e[a]) && n.call(r, r.__data__, a, i) && t.push(r);
      }
    }

    return eo(u, this.id);
  }, Ns.tween = function (n, t) {
    var e = this.id;
    return arguments.length < 2 ? this.node().__transition__[e].tween.get(n) : N(this, null == t ? function (t) {
      t.__transition__[e].tween.remove(n);
    } : function (r) {
      r.__transition__[e].tween.set(n, t);
    });
  }, Ns.attr = function (n, t) {
    function e() {
      this.removeAttribute(a);
    }

    function r() {
      this.removeAttributeNS(a.space, a.local);
    }

    function u(n) {
      return null == n ? e : (n += "", function () {
        var t,
            e = this.getAttribute(a);
        return e !== n && (t = o(e, n), function (n) {
          this.setAttribute(a, t(n));
        });
      });
    }

    function i(n) {
      return null == n ? r : (n += "", function () {
        var t,
            e = this.getAttributeNS(a.space, a.local);
        return e !== n && (t = o(e, n), function (n) {
          this.setAttributeNS(a.space, a.local, t(n));
        });
      });
    }

    if (arguments.length < 2) {
      for (t in n) {
        this.attr(t, n[t]);
      }

      return this;
    }

    var o = "transform" == n ? eu : zr,
        a = Bo.ns.qualify(n);
    return ro(this, "attr." + n, t, a.local ? i : u);
  }, Ns.attrTween = function (n, t) {
    function e(n, e) {
      var r = t.call(this, n, e, this.getAttribute(u));
      return r && function (n) {
        this.setAttribute(u, r(n));
      };
    }

    function r(n, e) {
      var r = t.call(this, n, e, this.getAttributeNS(u.space, u.local));
      return r && function (n) {
        this.setAttributeNS(u.space, u.local, r(n));
      };
    }

    var u = Bo.ns.qualify(n);
    return this.tween("attr." + n, u.local ? r : e);
  }, Ns.style = function (n, t, e) {
    function r() {
      this.style.removeProperty(n);
    }

    function u(t) {
      return null == t ? r : (t += "", function () {
        var r,
            u = Qo.getComputedStyle(this, null).getPropertyValue(n);
        return u !== t && (r = zr(u, t), function (t) {
          this.style.setProperty(n, r(t), e);
        });
      });
    }

    var i = arguments.length;

    if (3 > i) {
      if ("string" != typeof n) {
        2 > i && (t = "");

        for (e in n) {
          this.style(e, n[e], t);
        }

        return this;
      }

      e = "";
    }

    return ro(this, "style." + n, t, u);
  }, Ns.styleTween = function (n, t, e) {
    function r(r, u) {
      var i = t.call(this, r, u, Qo.getComputedStyle(this, null).getPropertyValue(n));
      return i && function (t) {
        this.style.setProperty(n, i(t), e);
      };
    }

    return arguments.length < 3 && (e = ""), this.tween("style." + n, r);
  }, Ns.text = function (n) {
    return ro(this, "text", n, uo);
  }, Ns.remove = function () {
    return this.each("end.transition", function () {
      var n;
      this.__transition__.count < 2 && (n = this.parentNode) && n.removeChild(this);
    });
  }, Ns.ease = function (n) {
    var t = this.id;
    return arguments.length < 1 ? this.node().__transition__[t].ease : ("function" != typeof n && (n = Bo.ease.apply(Bo, arguments)), N(this, function (e) {
      e.__transition__[t].ease = n;
    }));
  }, Ns.delay = function (n) {
    var t = this.id;
    return N(this, "function" == typeof n ? function (e, r, u) {
      e.__transition__[t].delay = +n.call(e, e.__data__, r, u);
    } : (n = +n, function (e) {
      e.__transition__[t].delay = n;
    }));
  }, Ns.duration = function (n) {
    var t = this.id;
    return N(this, "function" == typeof n ? function (e, r, u) {
      e.__transition__[t].duration = Math.max(1, n.call(e, e.__data__, r, u));
    } : (n = Math.max(1, n), function (e) {
      e.__transition__[t].duration = n;
    }));
  }, Ns.each = function (n, t) {
    var e = this.id;

    if (arguments.length < 2) {
      var r = Es,
          u = ks;
      ks = e, N(this, function (t, r, u) {
        Es = t.__transition__[e], n.call(t, t.__data__, r, u);
      }), Es = r, ks = u;
    } else N(this, function (r) {
      var u = r.__transition__[e];
      (u.event || (u.event = Bo.dispatch("start", "end"))).on(n, t);
    });

    return this;
  }, Ns.transition = function () {
    for (var n, t, e, r, u = this.id, i = ++Ls, o = [], a = 0, c = this.length; c > a; a++) {
      o.push(n = []);

      for (var t = this[a], s = 0, l = t.length; l > s; s++) {
        (e = t[s]) && (r = Object.create(e.__transition__[u]), r.delay += r.duration, io(e, s, i, r)), n.push(e);
      }
    }

    return eo(o, i);
  }, Bo.svg.axis = function () {
    function n(n) {
      n.each(function () {
        var n,
            s = Bo.select(this),
            l = this.__chart__ || e,
            f = this.__chart__ = e.copy(),
            h = null == c ? f.ticks ? f.ticks.apply(f, a) : f.domain() : c,
            g = null == t ? f.tickFormat ? f.tickFormat.apply(f, a) : dt : t,
            p = s.selectAll(".tick").data(h, f),
            v = p.enter().insert("g", ".domain").attr("class", "tick").style("opacity", Na),
            d = Bo.transition(p.exit()).style("opacity", Na).remove(),
            m = Bo.transition(p).style("opacity", 1),
            y = ei(f),
            x = s.selectAll(".domain").data([0]),
            M = (x.enter().append("path").attr("class", "domain"), Bo.transition(x));
        v.append("line"), v.append("text");

        var _ = v.select("line"),
            b = m.select("line"),
            w = p.select("text").text(g),
            S = v.select("text"),
            k = m.select("text");

        switch (r) {
          case "bottom":
            n = oo, _.attr("y2", u), S.attr("y", Math.max(u, 0) + o), b.attr("x2", 0).attr("y2", u), k.attr("x", 0).attr("y", Math.max(u, 0) + o), w.attr("dy", ".71em").style("text-anchor", "middle"), M.attr("d", "M" + y[0] + "," + i + "V0H" + y[1] + "V" + i);
            break;

          case "top":
            n = oo, _.attr("y2", -u), S.attr("y", -(Math.max(u, 0) + o)), b.attr("x2", 0).attr("y2", -u), k.attr("x", 0).attr("y", -(Math.max(u, 0) + o)), w.attr("dy", "0em").style("text-anchor", "middle"), M.attr("d", "M" + y[0] + "," + -i + "V0H" + y[1] + "V" + -i);
            break;

          case "left":
            n = ao, _.attr("x2", -u), S.attr("x", -(Math.max(u, 0) + o)), b.attr("x2", -u).attr("y2", 0), k.attr("x", -(Math.max(u, 0) + o)).attr("y", 0), w.attr("dy", ".32em").style("text-anchor", "end"), M.attr("d", "M" + -i + "," + y[0] + "H0V" + y[1] + "H" + -i);
            break;

          case "right":
            n = ao, _.attr("x2", u), S.attr("x", Math.max(u, 0) + o), b.attr("x2", u).attr("y2", 0), k.attr("x", Math.max(u, 0) + o).attr("y", 0), w.attr("dy", ".32em").style("text-anchor", "start"), M.attr("d", "M" + i + "," + y[0] + "H0V" + y[1] + "H" + i);
        }

        if (f.rangeBand) {
          var E = f,
              A = E.rangeBand() / 2;

          l = f = function f(n) {
            return E(n) + A;
          };
        } else l.rangeBand ? l = f : d.call(n, f);

        v.call(n, l), m.call(n, f);
      });
    }

    var t,
        e = Bo.scale.linear(),
        r = Ts,
        u = 6,
        i = 6,
        o = 3,
        a = [10],
        c = null;
    return n.scale = function (t) {
      return arguments.length ? (e = t, n) : e;
    }, n.orient = function (t) {
      return arguments.length ? (r = t in qs ? t + "" : Ts, n) : r;
    }, n.ticks = function () {
      return arguments.length ? (a = arguments, n) : a;
    }, n.tickValues = function (t) {
      return arguments.length ? (c = t, n) : c;
    }, n.tickFormat = function (e) {
      return arguments.length ? (t = e, n) : t;
    }, n.tickSize = function (t) {
      var e = arguments.length;
      return e ? (u = +t, i = +arguments[e - 1], n) : u;
    }, n.innerTickSize = function (t) {
      return arguments.length ? (u = +t, n) : u;
    }, n.outerTickSize = function (t) {
      return arguments.length ? (i = +t, n) : i;
    }, n.tickPadding = function (t) {
      return arguments.length ? (o = +t, n) : o;
    }, n.tickSubdivide = function () {
      return arguments.length && n;
    }, n;
  };
  var Ts = "bottom",
      qs = {
    top: 1,
    right: 1,
    bottom: 1,
    left: 1
  };

  Bo.svg.brush = function () {
    function n(i) {
      i.each(function () {
        var i = Bo.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", u).on("touchstart.brush", u),
            o = i.selectAll(".background").data([0]);
        o.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"), i.selectAll(".extent").data([0]).enter().append("rect").attr("class", "extent").style("cursor", "move");
        var a = i.selectAll(".resize").data(d, dt);
        a.exit().remove(), a.enter().append("g").attr("class", function (n) {
          return "resize " + n;
        }).style("cursor", function (n) {
          return zs[n];
        }).append("rect").attr("x", function (n) {
          return /[ew]$/.test(n) ? -3 : null;
        }).attr("y", function (n) {
          return /^[ns]/.test(n) ? -3 : null;
        }).attr("width", 6).attr("height", 6).style("visibility", "hidden"), a.style("display", n.empty() ? "none" : null);
        var l,
            f = Bo.transition(i),
            h = Bo.transition(o);
        c && (l = ei(c), h.attr("x", l[0]).attr("width", l[1] - l[0]), e(f)), s && (l = ei(s), h.attr("y", l[0]).attr("height", l[1] - l[0]), r(f)), t(f);
      });
    }

    function t(n) {
      n.selectAll(".resize").attr("transform", function (n) {
        return "translate(" + l[+/e$/.test(n)] + "," + h[+/^s/.test(n)] + ")";
      });
    }

    function e(n) {
      n.select(".extent").attr("x", l[0]), n.selectAll(".extent,.n>rect,.s>rect").attr("width", l[1] - l[0]);
    }

    function r(n) {
      n.select(".extent").attr("y", h[0]), n.selectAll(".extent,.e>rect,.w>rect").attr("height", h[1] - h[0]);
    }

    function u() {
      function u() {
        32 == Bo.event.keyCode && (C || (x = null, L[0] -= l[1], L[1] -= h[1], C = 2), f());
      }

      function g() {
        32 == Bo.event.keyCode && 2 == C && (L[0] += l[1], L[1] += h[1], C = 0, f());
      }

      function d() {
        var n = Bo.mouse(_),
            u = !1;
        M && (n[0] += M[0], n[1] += M[1]), C || (Bo.event.altKey ? (x || (x = [(l[0] + l[1]) / 2, (h[0] + h[1]) / 2]), L[0] = l[+(n[0] < x[0])], L[1] = h[+(n[1] < x[1])]) : x = null), E && m(n, c, 0) && (e(S), u = !0), A && m(n, s, 1) && (r(S), u = !0), u && (t(S), w({
          type: "brush",
          mode: C ? "move" : "resize"
        }));
      }

      function m(n, t, e) {
        var r,
            u,
            a = ei(t),
            c = a[0],
            s = a[1],
            f = L[e],
            g = e ? h : l,
            d = g[1] - g[0];
        return C && (c -= f, s -= d + f), r = (e ? v : p) ? Math.max(c, Math.min(s, n[e])) : n[e], C ? u = (r += f) + d : (x && (f = Math.max(c, Math.min(s, 2 * x[e] - r))), r > f ? (u = r, r = f) : u = f), g[0] != r || g[1] != u ? (e ? o = null : i = null, g[0] = r, g[1] = u, !0) : void 0;
      }

      function y() {
        d(), S.style("pointer-events", "all").selectAll(".resize").style("display", n.empty() ? "none" : null), Bo.select("body").style("cursor", null), T.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null), N(), w({
          type: "brushend"
        });
      }

      var x,
          M,
          _ = this,
          b = Bo.select(Bo.event.target),
          w = a.of(_, arguments),
          S = Bo.select(_),
          k = b.datum(),
          E = !/^(n|s)$/.test(k) && c,
          A = !/^(e|w)$/.test(k) && s,
          C = b.classed("extent"),
          N = P(),
          L = Bo.mouse(_),
          T = Bo.select(Qo).on("keydown.brush", u).on("keyup.brush", g);

      if (Bo.event.changedTouches ? T.on("touchmove.brush", d).on("touchend.brush", y) : T.on("mousemove.brush", d).on("mouseup.brush", y), S.interrupt().selectAll("*").interrupt(), C) L[0] = l[0] - L[0], L[1] = h[0] - L[1];else if (k) {
        var q = +/w$/.test(k),
            z = +/^n/.test(k);
        M = [l[1 - q] - L[0], h[1 - z] - L[1]], L[0] = l[q], L[1] = h[z];
      } else Bo.event.altKey && (x = L.slice());
      S.style("pointer-events", "none").selectAll(".resize").style("display", null), Bo.select("body").style("cursor", b.style("cursor")), w({
        type: "brushstart"
      }), d();
    }

    var i,
        o,
        a = g(n, "brushstart", "brush", "brushend"),
        c = null,
        s = null,
        l = [0, 0],
        h = [0, 0],
        p = !0,
        v = !0,
        d = Rs[0];
    return n.event = function (n) {
      n.each(function () {
        var n = a.of(this, arguments),
            t = {
          x: l,
          y: h,
          i: i,
          j: o
        },
            e = this.__chart__ || t;
        this.__chart__ = t, ks ? Bo.select(this).transition().each("start.brush", function () {
          i = e.i, o = e.j, l = e.x, h = e.y, n({
            type: "brushstart"
          });
        }).tween("brush:brush", function () {
          var e = Rr(l, t.x),
              r = Rr(h, t.y);
          return i = o = null, function (u) {
            l = t.x = e(u), h = t.y = r(u), n({
              type: "brush",
              mode: "resize"
            });
          };
        }).each("end.brush", function () {
          i = t.i, o = t.j, n({
            type: "brush",
            mode: "resize"
          }), n({
            type: "brushend"
          });
        }) : (n({
          type: "brushstart"
        }), n({
          type: "brush",
          mode: "resize"
        }), n({
          type: "brushend"
        }));
      });
    }, n.x = function (t) {
      return arguments.length ? (c = t, d = Rs[!c << 1 | !s], n) : c;
    }, n.y = function (t) {
      return arguments.length ? (s = t, d = Rs[!c << 1 | !s], n) : s;
    }, n.clamp = function (t) {
      return arguments.length ? (c && s ? (p = !!t[0], v = !!t[1]) : c ? p = !!t : s && (v = !!t), n) : c && s ? [p, v] : c ? p : s ? v : null;
    }, n.extent = function (t) {
      var e, r, u, a, f;
      return arguments.length ? (c && (e = t[0], r = t[1], s && (e = e[0], r = r[0]), i = [e, r], c.invert && (e = c(e), r = c(r)), e > r && (f = e, e = r, r = f), (e != l[0] || r != l[1]) && (l = [e, r])), s && (u = t[0], a = t[1], c && (u = u[1], a = a[1]), o = [u, a], s.invert && (u = s(u), a = s(a)), u > a && (f = u, u = a, a = f), (u != h[0] || a != h[1]) && (h = [u, a])), n) : (c && (i ? (e = i[0], r = i[1]) : (e = l[0], r = l[1], c.invert && (e = c.invert(e), r = c.invert(r)), e > r && (f = e, e = r, r = f))), s && (o ? (u = o[0], a = o[1]) : (u = h[0], a = h[1], s.invert && (u = s.invert(u), a = s.invert(a)), u > a && (f = u, u = a, a = f))), c && s ? [[e, u], [r, a]] : c ? [e, r] : s && [u, a]);
    }, n.clear = function () {
      return n.empty() || (l = [0, 0], h = [0, 0], i = o = null), n;
    }, n.empty = function () {
      return !!c && l[0] == l[1] || !!s && h[0] == h[1];
    }, Bo.rebind(n, a, "on");
  };

  var zs = {
    n: "ns-resize",
    e: "ew-resize",
    s: "ns-resize",
    w: "ew-resize",
    nw: "nwse-resize",
    ne: "nesw-resize",
    se: "nwse-resize",
    sw: "nesw-resize"
  },
      Rs = [["n", "e", "s", "w", "nw", "ne", "se", "sw"], ["e", "w"], ["n", "s"], []],
      Ds = Bo.time = {},
      Ps = Date,
      Us = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  co.prototype = {
    getDate: function getDate() {
      return this._.getUTCDate();
    },
    getDay: function getDay() {
      return this._.getUTCDay();
    },
    getFullYear: function getFullYear() {
      return this._.getUTCFullYear();
    },
    getHours: function getHours() {
      return this._.getUTCHours();
    },
    getMilliseconds: function getMilliseconds() {
      return this._.getUTCMilliseconds();
    },
    getMinutes: function getMinutes() {
      return this._.getUTCMinutes();
    },
    getMonth: function getMonth() {
      return this._.getUTCMonth();
    },
    getSeconds: function getSeconds() {
      return this._.getUTCSeconds();
    },
    getTime: function getTime() {
      return this._.getTime();
    },
    getTimezoneOffset: function getTimezoneOffset() {
      return 0;
    },
    valueOf: function valueOf() {
      return this._.valueOf();
    },
    setDate: function setDate() {
      js.setUTCDate.apply(this._, arguments);
    },
    setDay: function setDay() {
      js.setUTCDay.apply(this._, arguments);
    },
    setFullYear: function setFullYear() {
      js.setUTCFullYear.apply(this._, arguments);
    },
    setHours: function setHours() {
      js.setUTCHours.apply(this._, arguments);
    },
    setMilliseconds: function setMilliseconds() {
      js.setUTCMilliseconds.apply(this._, arguments);
    },
    setMinutes: function setMinutes() {
      js.setUTCMinutes.apply(this._, arguments);
    },
    setMonth: function setMonth() {
      js.setUTCMonth.apply(this._, arguments);
    },
    setSeconds: function setSeconds() {
      js.setUTCSeconds.apply(this._, arguments);
    },
    setTime: function setTime() {
      js.setTime.apply(this._, arguments);
    }
  };
  var js = Date.prototype,
      Hs = "%a %b %e %X %Y",
      Fs = "%m/%d/%Y",
      Os = "%H:%M:%S",
      Ys = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      Is = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      Zs = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      Vs = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  Ds.year = so(function (n) {
    return n = Ds.day(n), n.setMonth(0, 1), n;
  }, function (n, t) {
    n.setFullYear(n.getFullYear() + t);
  }, function (n) {
    return n.getFullYear();
  }), Ds.years = Ds.year.range, Ds.years.utc = Ds.year.utc.range, Ds.day = so(function (n) {
    var t = new Ps(2e3, 0);
    return t.setFullYear(n.getFullYear(), n.getMonth(), n.getDate()), t;
  }, function (n, t) {
    n.setDate(n.getDate() + t);
  }, function (n) {
    return n.getDate() - 1;
  }), Ds.days = Ds.day.range, Ds.days.utc = Ds.day.utc.range, Ds.dayOfYear = function (n) {
    var t = Ds.year(n);
    return Math.floor((n - t - 6e4 * (n.getTimezoneOffset() - t.getTimezoneOffset())) / 864e5);
  }, Us.forEach(function (n, t) {
    n = n.toLowerCase(), t = 7 - t;
    var e = Ds[n] = so(function (n) {
      return (n = Ds.day(n)).setDate(n.getDate() - (n.getDay() + t) % 7), n;
    }, function (n, t) {
      n.setDate(n.getDate() + 7 * Math.floor(t));
    }, function (n) {
      var e = Ds.year(n).getDay();
      return Math.floor((Ds.dayOfYear(n) + (e + t) % 7) / 7) - (e !== t);
    });
    Ds[n + "s"] = e.range, Ds[n + "s"].utc = e.utc.range, Ds[n + "OfYear"] = function (n) {
      var e = Ds.year(n).getDay();
      return Math.floor((Ds.dayOfYear(n) + (e + t) % 7) / 7);
    };
  }), Ds.week = Ds.sunday, Ds.weeks = Ds.sunday.range, Ds.weeks.utc = Ds.sunday.utc.range, Ds.weekOfYear = Ds.sundayOfYear, Ds.format = fo;
  var Xs = go(Ys),
      $s = po(Ys),
      Bs = go(Is),
      Ws = po(Is),
      Js = go(Zs),
      Gs = po(Zs),
      Ks = go(Vs),
      Qs = po(Vs),
      nl = /^%/,
      tl = {
    "-": "",
    _: " ",
    0: "0"
  },
      el = {
    a: function a(n) {
      return Is[n.getDay()];
    },
    A: function A(n) {
      return Ys[n.getDay()];
    },
    b: function b(n) {
      return Vs[n.getMonth()];
    },
    B: function B(n) {
      return Zs[n.getMonth()];
    },
    c: fo(Hs),
    d: function d(n, t) {
      return vo(n.getDate(), t, 2);
    },
    e: function e(n, t) {
      return vo(n.getDate(), t, 2);
    },
    H: function H(n, t) {
      return vo(n.getHours(), t, 2);
    },
    I: function I(n, t) {
      return vo(n.getHours() % 12 || 12, t, 2);
    },
    j: function j(n, t) {
      return vo(1 + Ds.dayOfYear(n), t, 3);
    },
    L: function L(n, t) {
      return vo(n.getMilliseconds(), t, 3);
    },
    m: function m(n, t) {
      return vo(n.getMonth() + 1, t, 2);
    },
    M: function M(n, t) {
      return vo(n.getMinutes(), t, 2);
    },
    p: function p(n) {
      return n.getHours() >= 12 ? "PM" : "AM";
    },
    S: function S(n, t) {
      return vo(n.getSeconds(), t, 2);
    },
    U: function U(n, t) {
      return vo(Ds.sundayOfYear(n), t, 2);
    },
    w: function w(n) {
      return n.getDay();
    },
    W: function W(n, t) {
      return vo(Ds.mondayOfYear(n), t, 2);
    },
    x: fo(Fs),
    X: fo(Os),
    y: function y(n, t) {
      return vo(n.getFullYear() % 100, t, 2);
    },
    Y: function Y(n, t) {
      return vo(n.getFullYear() % 1e4, t, 4);
    },
    Z: Ho,
    "%": function _() {
      return "%";
    }
  },
      rl = {
    a: mo,
    A: yo,
    b: bo,
    B: wo,
    c: So,
    d: qo,
    e: qo,
    H: Ro,
    I: Ro,
    j: zo,
    L: Uo,
    m: To,
    M: Do,
    p: jo,
    S: Po,
    U: Mo,
    w: xo,
    W: _o,
    x: ko,
    X: Eo,
    y: Co,
    Y: Ao,
    Z: No,
    "%": Fo
  },
      ul = /^\s*\d+/,
      il = Bo.map({
    am: 0,
    pm: 1
  });
  fo.utc = Oo;
  var ol = Oo("%Y-%m-%dT%H:%M:%S.%LZ");
  fo.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? Yo : ol, Yo.parse = function (n) {
    var t = new Date(n);
    return isNaN(t) ? null : t;
  }, Yo.toString = ol.toString, Ds.second = so(function (n) {
    return new Ps(1e3 * Math.floor(n / 1e3));
  }, function (n, t) {
    n.setTime(n.getTime() + 1e3 * Math.floor(t));
  }, function (n) {
    return n.getSeconds();
  }), Ds.seconds = Ds.second.range, Ds.seconds.utc = Ds.second.utc.range, Ds.minute = so(function (n) {
    return new Ps(6e4 * Math.floor(n / 6e4));
  }, function (n, t) {
    n.setTime(n.getTime() + 6e4 * Math.floor(t));
  }, function (n) {
    return n.getMinutes();
  }), Ds.minutes = Ds.minute.range, Ds.minutes.utc = Ds.minute.utc.range, Ds.hour = so(function (n) {
    var t = n.getTimezoneOffset() / 60;
    return new Ps(36e5 * (Math.floor(n / 36e5 - t) + t));
  }, function (n, t) {
    n.setTime(n.getTime() + 36e5 * Math.floor(t));
  }, function (n) {
    return n.getHours();
  }), Ds.hours = Ds.hour.range, Ds.hours.utc = Ds.hour.utc.range, Ds.month = so(function (n) {
    return n = Ds.day(n), n.setDate(1), n;
  }, function (n, t) {
    n.setMonth(n.getMonth() + t);
  }, function (n) {
    return n.getMonth();
  }), Ds.months = Ds.month.range, Ds.months.utc = Ds.month.utc.range;
  var al = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6],
      cl = [[Ds.second, 1], [Ds.second, 5], [Ds.second, 15], [Ds.second, 30], [Ds.minute, 1], [Ds.minute, 5], [Ds.minute, 15], [Ds.minute, 30], [Ds.hour, 1], [Ds.hour, 3], [Ds.hour, 6], [Ds.hour, 12], [Ds.day, 1], [Ds.day, 2], [Ds.week, 1], [Ds.month, 1], [Ds.month, 3], [Ds.year, 1]],
      sl = [[fo("%Y"), Vt], [fo("%B"), function (n) {
    return n.getMonth();
  }], [fo("%b %d"), function (n) {
    return 1 != n.getDate();
  }], [fo("%a %d"), function (n) {
    return n.getDay() && 1 != n.getDate();
  }], [fo("%I %p"), function (n) {
    return n.getHours();
  }], [fo("%I:%M"), function (n) {
    return n.getMinutes();
  }], [fo(":%S"), function (n) {
    return n.getSeconds();
  }], [fo(".%L"), function (n) {
    return n.getMilliseconds();
  }]],
      ll = Vo(sl);
  cl.year = Ds.year, Ds.scale = function () {
    return Io(Bo.scale.linear(), cl, ll);
  };
  var fl = {
    range: function range(n, t, e) {
      return Bo.range(+n, +t, e).map(Zo);
    },
    floor: dt,
    ceil: dt
  },
      hl = cl.map(function (n) {
    return [n[0].utc, n[1]];
  }),
      gl = [[Oo("%Y"), Vt], [Oo("%B"), function (n) {
    return n.getUTCMonth();
  }], [Oo("%b %d"), function (n) {
    return 1 != n.getUTCDate();
  }], [Oo("%a %d"), function (n) {
    return n.getUTCDay() && 1 != n.getUTCDate();
  }], [Oo("%I %p"), function (n) {
    return n.getUTCHours();
  }], [Oo("%I:%M"), function (n) {
    return n.getUTCMinutes();
  }], [Oo(":%S"), function (n) {
    return n.getUTCSeconds();
  }], [Oo(".%L"), function (n) {
    return n.getUTCMilliseconds();
  }]],
      pl = Vo(gl);
  return hl.year = Ds.year.utc, Ds.scale.utc = function () {
    return Io(Bo.scale.linear(), hl, pl);
  }, Bo.text = mt(function (n) {
    return n.responseText;
  }), Bo.json = function (n, t) {
    return yt(n, "application/json", Xo, t);
  }, Bo.html = function (n, t) {
    return yt(n, "text/html", $o, t);
  }, Bo.xml = mt(function (n) {
    return n.responseXML;
  }), Bo;
}();

/***/ }),

/***/ "./app/javascript/plugins/index.js":
/*!*****************************************!*\
  !*** ./app/javascript/plugins/index.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _d3_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./d3.min.js */ "./app/javascript/plugins/d3.min.js");
/* harmony import */ var _d3_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_d3_min_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _progressbar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./progressbar.js */ "./app/javascript/plugins/progressbar.js");
/* harmony import */ var _progressbar_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_progressbar_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tooltip_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tooltip.js */ "./app/javascript/plugins/tooltip.js");
/* harmony import */ var _tooltip_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tooltip_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wbc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wbc.js */ "./app/javascript/plugins/wbc.js");
/* harmony import */ var _wbc_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wbc_js__WEBPACK_IMPORTED_MODULE_3__);





/***/ }),

/***/ "./app/javascript/plugins/progressbar.js":
/*!***********************************************!*\
  !*** ./app/javascript/plugins/progressbar.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * User: ArtZub
 * Date: 06.03.13
 * Time: 17:29
 */
d3.helper = d3.helper || {};

d3.helper.progressbar = function (selection) {
  function displayLength(node) {
    return node.clientWidth || (node.getComputedTextLength ? node.getComputedTextLength() : node.innerText ? node.innerText.length : node.textContent ? node.textContent.length : 0);
  }

  function progress(g) {
    var w = 100,
        h = 20,
        pp = {
      x: 3,
      y: 3
    },
        bar = g.append("rect").attr("x", 0).attr("y", 0).style("fill", "rgba(0, 0, 0, .4)").style("stroke", "rgba(0, 0, 0, .8)"),
        subg = g.append("g"),
        prog = subg.append("rect").attr("x", pp.x).attr("y", pp.y).style("fill", "rgba(51, 173, 255, .8)").style("stroke", "none"),
        label = subg.append("text").attr("fill", "#CEEBFF"),
        max = 100,
        pos = 0,
        ta;

    g.hide = function () {
      g.style("display", "none");
    };

    g.show = function () {
      g.style("display", null);
      return g;
    };

    g.max = function () {
      if (!arguments.length) return max;
      max = parseInt(arguments[0]);
      g.pos(pos);
      return g;
    };

    g.pos = function () {
      if (!arguments.length) return pos;
      pos = parseInt(arguments[0]);
      if (pos > max) pos = max;
      var ww = (w - pp.x * 2) * pos / (max || 1);

      if (ww - pp.x < displayLength(label.node())) {
        ta = ta || g.textPosition();
        label.style("text-anchor", "start");
      } else if (ta) {
        g.textPosition(ta);
      }

      var t = g.textPosition(),
          tr = [0, 0];

      switch (t) {
        case "middle":
          tr = [(ww - pp.x) / 2, 0];
          break;

        case "end":
          tr = [ww - pp.x, 0];
          break;
      }

      label.attr("transform", "translate(" + tr + ")");
      prog.attr("width", ww);
      return g;
    };

    g.label = function () {
      if (!arguments.length) return label.text();
      label.text(arguments[0]);
      return g;
    };

    g.textPosition = function () {
      if (!arguments.length) return label.style("text-anchor");
      label.style("text-anchor", arguments[0]);
      ta = null;
      return g;
    };

    g.width = function () {
      if (!arguments.length) return w;
      bar.attr("width", w = parseInt(arguments[0]));
      g.pos(pos);
      return g;
    };

    g.height = function () {
      if (!arguments.length) return h;
      bar.attr("height", h = parseInt(arguments[0]));
      prog.attr("height", h - pp.y * 2);
      label.attr("dy", h - pp.y * 2);
      return g;
    };

    g.step = function () {
      return g.pos(pos + (parseInt(arguments[0]) || 1));
    };

    g.textPosition("start").width(w).height(h);
  }

  return selection.call(progress);
};

/***/ }),

/***/ "./app/javascript/plugins/tooltip.js":
/*!*******************************************!*\
  !*** ./app/javascript/plugins/tooltip.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * User: ArtZub
 * Date: 06.03.13
 * Time: 14:54
 * https://gist.github.com/artzub/5062548
 */
d3.helper = d3.helper || {};

d3.helper.tooltip = d3.helper.tooltip || function () {
  var tooltipDiv,
      body = d3.select('body'),
      attrs = [],
      text = "",
      styles = [],
      _w,
      _h,
      _p = {
    x: 16,
    y: 16
  };

  function tooltip(selection) {
    function doText(d, i) {
      // Crop text arbitrarily
      tooltipDiv.html(typeof text === "function" ? text(d, i) : typeof text !== "undefined" ? text : '');
    }

    function mover(d, i) {
      var key, name, value; // Clean up lost tooltips

      body.selectAll('div.tooltip').remove(); // Append tooltip

      tooltipDiv = body.append('div');

      for (key in attrs) {
        if (!attrs.hasOwnProperty(key)) continue;
        name = attrs[key][0];

        if (typeof attrs[key][1] === "function") {
          value = attrs[key][1](d, i);
        } else value = attrs[key][1];

        tooltipDiv.attr(name, value);
      }

      tooltipDiv.classed("tooltip", true);

      for (key in styles) {
        if (!styles.hasOwnProperty(key)) continue;
        name = styles[key][0];

        if (typeof attrs[key][1] === "function") {
          value = styles[key][1](d, i);
        } else value = styles[key][1];

        tooltipDiv.style(name, value);
      }

      tooltipDiv.style('position', 'absolute').style('z-index', 1001);
      mm(d, i);
      doText(d, i);
    }

    function mm(d, i) {
      // Move tooltip
      var absoluteMousePos = d3.mouse(body.node());
      tooltipDiv.style('left', (absoluteMousePos[0] > _w / 2 ? absoluteMousePos[0] - tooltipDiv.node().clientWidth - _p.x : absoluteMousePos[0] + _p.x) + 'px').style('top', (absoluteMousePos[1] > _h / 2 ? absoluteMousePos[1] - tooltipDiv.node().clientHeight - _p.y : absoluteMousePos[1] + _p.y) + 'px'); //doText(d, i);
    }

    function mout(d, i) {
      // Remove tooltip
      tooltipDiv.remove();
    }

    selection.on("mouseover", mover).on('mousemove', mm).on("mouseout", mout);
  }

  tooltip.attr = function (name, value) {
    attrs.push(arguments);
    return this;
  };

  tooltip.text = function (value) {
    text = value;
    return this;
  };

  tooltip.style = function (name, value) {
    styles.push(arguments);
    return this;
  };

  tooltip.spaceWidth = function (value) {
    if (!value) return _w;
    _w = +value;
    return this;
  };

  tooltip.spaceHeight = function (value) {
    if (!value) return _h;
    _h = +value;
    return this;
  };
  /**
   *  @params x or x,y {Number}
   */


  tooltip.padding = function () {
    if (!arguments.length) return _p;

    switch (arguments.length) {
      case 1:
        _p = {
          x: parseInt(arguments[0]),
          y: parseInt(arguments[0])
        };
        break;

      case 2:
        _p = {
          x: parseInt(arguments[0]),
          y: parseInt(arguments[1])
        };
        break;
    }

    return this;
  };

  return tooltip;
};

/***/ }),

/***/ "./app/javascript/plugins/wbc.js":
/*!***************************************!*\
  !*** ./app/javascript/plugins/wbc.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

wbc = [{
  "total": 214
}, [{
  "id": "ABW",
  "iso2Code": "AW",
  "name": "Aruba",
  "region": {
    "id": "LCN",
    "value": "Latin America & Caribbean (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "NOC",
    "value": "High income: nonOECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Oranjestad",
  "longitude": "-70.0167",
  "latitude": "12.5167"
}, {
  "id": "AFG",
  "iso2Code": "AF",
  "name": "Afghanistan",
  "region": {
    "id": "SAS",
    "value": "South Asia"
  },
  "adminregion": {
    "id": "SAS",
    "value": "South Asia"
  },
  "incomeLevel": {
    "id": "LIC",
    "value": "Low income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Kabul",
  "longitude": "69.1761",
  "latitude": "34.5228"
}, {
  "id": "AGO",
  "iso2Code": "AO",
  "name": "Angola",
  "region": {
    "id": "SSF",
    "value": "Sub-Saharan Africa (all income levels)"
  },
  "adminregion": {
    "id": "SSA",
    "value": "Sub-Saharan Africa (developing only)"
  },
  "incomeLevel": {
    "id": "UMC",
    "value": "Upper middle income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Luanda",
  "longitude": "13.242",
  "latitude": "-8.81155"
}, {
  "id": "ALB",
  "iso2Code": "AL",
  "name": "Albania",
  "region": {
    "id": "ECS",
    "value": "Europe & Central Asia (all income levels)"
  },
  "adminregion": {
    "id": "ECA",
    "value": "Europe & Central Asia (developing only)"
  },
  "incomeLevel": {
    "id": "LMC",
    "value": "Lower middle income"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Tirane",
  "longitude": "19.8172",
  "latitude": "41.3317"
}, {
  "id": "AND",
  "iso2Code": "AD",
  "name": "Andorra",
  "region": {
    "id": "ECS",
    "value": "Europe & Central Asia (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "NOC",
    "value": "High income: nonOECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Andorra la Vella",
  "longitude": "1.5218",
  "latitude": "42.5075"
}, {
  "id": "ARE",
  "iso2Code": "AE",
  "name": "United Arab Emirates",
  "region": {
    "id": "MEA",
    "value": "Middle East & North Africa (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "NOC",
    "value": "High income: nonOECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Abu Dhabi",
  "longitude": "54.3705",
  "latitude": "24.4764"
}, {
  "id": "ARG",
  "iso2Code": "AR",
  "name": "Argentina",
  "region": {
    "id": "LCN",
    "value": "Latin America & Caribbean (all income levels)"
  },
  "adminregion": {
    "id": "LAC",
    "value": "Latin America & Caribbean (developing only)"
  },
  "incomeLevel": {
    "id": "UMC",
    "value": "Upper middle income"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Buenos Aires",
  "longitude": "-58.4173",
  "latitude": "-34.6118"
}, {
  "id": "ARM",
  "iso2Code": "AM",
  "name": "Armenia",
  "region": {
    "id": "ECS",
    "value": "Europe & Central Asia (all income levels)"
  },
  "adminregion": {
    "id": "ECA",
    "value": "Europe & Central Asia (developing only)"
  },
  "incomeLevel": {
    "id": "LMC",
    "value": "Lower middle income"
  },
  "lendingType": {
    "id": "IDB",
    "value": "Blend"
  },
  "capitalCity": "Yerevan",
  "longitude": "44.509",
  "latitude": "40.1596"
}, {
  "id": "ASM",
  "iso2Code": "AS",
  "name": "American Samoa",
  "region": {
    "id": "EAS",
    "value": "East Asia & Pacific (all income levels)"
  },
  "adminregion": {
    "id": "EAP",
    "value": "East Asia & Pacific (developing only)"
  },
  "incomeLevel": {
    "id": "UMC",
    "value": "Upper middle income"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Pago Pago",
  "longitude": "-170.691",
  "latitude": "-14.2846"
}, {
  "id": "ATG",
  "iso2Code": "AG",
  "name": "Antigua and Barbuda",
  "region": {
    "id": "LCN",
    "value": "Latin America & Caribbean (all income levels)"
  },
  "adminregion": {
    "id": "LAC",
    "value": "Latin America & Caribbean (developing only)"
  },
  "incomeLevel": {
    "id": "UMC",
    "value": "Upper middle income"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Saint John's",
  "longitude": "-61.8456",
  "latitude": "17.1175"
}, {
  "id": "AUS",
  "iso2Code": "AU",
  "name": "Australia",
  "region": {
    "id": "EAS",
    "value": "East Asia & Pacific (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "OEC",
    "value": "High income: OECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Canberra",
  "longitude": "149.129",
  "latitude": "-35.282"
}, {
  "id": "AUT",
  "iso2Code": "AT",
  "name": "Austria",
  "region": {
    "id": "ECS",
    "value": "Europe & Central Asia (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "OEC",
    "value": "High income: OECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Vienna",
  "longitude": "16.3798",
  "latitude": "48.2201"
}, {
  "id": "AZE",
  "iso2Code": "AZ",
  "name": "Azerbaijan",
  "region": {
    "id": "ECS",
    "value": "Europe & Central Asia (all income levels)"
  },
  "adminregion": {
    "id": "ECA",
    "value": "Europe & Central Asia (developing only)"
  },
  "incomeLevel": {
    "id": "UMC",
    "value": "Upper middle income"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Baku",
  "longitude": "49.8932",
  "latitude": "40.3834"
}, {
  "id": "BDI",
  "iso2Code": "BI",
  "name": "Burundi",
  "region": {
    "id": "SSF",
    "value": "Sub-Saharan Africa (all income levels)"
  },
  "adminregion": {
    "id": "SSA",
    "value": "Sub-Saharan Africa (developing only)"
  },
  "incomeLevel": {
    "id": "LIC",
    "value": "Low income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Bujumbura",
  "longitude": "29.3639",
  "latitude": "-3.3784"
}, {
  "id": "BEL",
  "iso2Code": "BE",
  "name": "Belgium",
  "region": {
    "id": "ECS",
    "value": "Europe & Central Asia (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "OEC",
    "value": "High income: OECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Brussels",
  "longitude": "4.36761",
  "latitude": "50.8371"
}, {
  "id": "BEN",
  "iso2Code": "BJ",
  "name": "Benin",
  "region": {
    "id": "SSF",
    "value": "Sub-Saharan Africa (all income levels)"
  },
  "adminregion": {
    "id": "SSA",
    "value": "Sub-Saharan Africa (developing only)"
  },
  "incomeLevel": {
    "id": "LIC",
    "value": "Low income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Porto-Novo",
  "longitude": "2.6323",
  "latitude": "6.4779"
}, {
  "id": "BFA",
  "iso2Code": "BF",
  "name": "Burkina Faso",
  "region": {
    "id": "SSF",
    "value": "Sub-Saharan Africa (all income levels)"
  },
  "adminregion": {
    "id": "SSA",
    "value": "Sub-Saharan Africa (developing only)"
  },
  "incomeLevel": {
    "id": "LIC",
    "value": "Low income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Ouagadougou",
  "longitude": "-1.53395",
  "latitude": "12.3605"
}, {
  "id": "BGD",
  "iso2Code": "BD",
  "name": "Bangladesh",
  "region": {
    "id": "SAS",
    "value": "South Asia"
  },
  "adminregion": {
    "id": "SAS",
    "value": "South Asia"
  },
  "incomeLevel": {
    "id": "LIC",
    "value": "Low income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Dhaka",
  "longitude": "90.4113",
  "latitude": "23.7055"
}, {
  "id": "BGR",
  "iso2Code": "BG",
  "name": "Bulgaria",
  "region": {
    "id": "ECS",
    "value": "Europe & Central Asia (all income levels)"
  },
  "adminregion": {
    "id": "ECA",
    "value": "Europe & Central Asia (developing only)"
  },
  "incomeLevel": {
    "id": "UMC",
    "value": "Upper middle income"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Sofia",
  "longitude": "23.3238",
  "latitude": "42.7105"
}, {
  "id": "BHR",
  "iso2Code": "BH",
  "name": "Bahrain",
  "region": {
    "id": "MEA",
    "value": "Middle East & North Africa (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "NOC",
    "value": "High income: nonOECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Manama",
  "longitude": "50.5354",
  "latitude": "26.1921"
}, {
  "id": "BHS",
  "iso2Code": "BS",
  "name": "Bahamas, The",
  "region": {
    "id": "LCN",
    "value": "Latin America & Caribbean (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "NOC",
    "value": "High income: nonOECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Nassau",
  "longitude": "-77.339",
  "latitude": "25.0661"
}, {
  "id": "BIH",
  "iso2Code": "BA",
  "name": "Bosnia and Herzegovina",
  "region": {
    "id": "ECS",
    "value": "Europe & Central Asia (all income levels)"
  },
  "adminregion": {
    "id": "ECA",
    "value": "Europe & Central Asia (developing only)"
  },
  "incomeLevel": {
    "id": "UMC",
    "value": "Upper middle income"
  },
  "lendingType": {
    "id": "IDB",
    "value": "Blend"
  },
  "capitalCity": "Sarajevo",
  "longitude": "18.4214",
  "latitude": "43.8607"
}, {
  "id": "BLR",
  "iso2Code": "BY",
  "name": "Belarus",
  "region": {
    "id": "ECS",
    "value": "Europe & Central Asia (all income levels)"
  },
  "adminregion": {
    "id": "ECA",
    "value": "Europe & Central Asia (developing only)"
  },
  "incomeLevel": {
    "id": "UMC",
    "value": "Upper middle income"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Minsk",
  "longitude": "27.5766",
  "latitude": "53.9678"
}, {
  "id": "BLZ",
  "iso2Code": "BZ",
  "name": "Belize",
  "region": {
    "id": "LCN",
    "value": "Latin America & Caribbean (all income levels)"
  },
  "adminregion": {
    "id": "LAC",
    "value": "Latin America & Caribbean (developing only)"
  },
  "incomeLevel": {
    "id": "LMC",
    "value": "Lower middle income"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Belmopan",
  "longitude": "-88.7713",
  "latitude": "17.2534"
}, {
  "id": "BMU",
  "iso2Code": "BM",
  "name": "Bermuda",
  "region": {
    "id": "NAC",
    "value": "North America"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "NOC",
    "value": "High income: nonOECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Hamilton",
  "longitude": "-64.706",
  "latitude": "32.3293"
}, {
  "id": "BOL",
  "iso2Code": "BO",
  "name": "Bolivia",
  "region": {
    "id": "LCN",
    "value": "Latin America & Caribbean (all income levels)"
  },
  "adminregion": {
    "id": "LAC",
    "value": "Latin America & Caribbean (developing only)"
  },
  "incomeLevel": {
    "id": "LMC",
    "value": "Lower middle income"
  },
  "lendingType": {
    "id": "IDB",
    "value": "Blend"
  },
  "capitalCity": "La Paz",
  "longitude": "-66.1936",
  "latitude": "-13.9908"
}, {
  "id": "BRA",
  "iso2Code": "BR",
  "name": "Brazil",
  "region": {
    "id": "LCN",
    "value": "Latin America & Caribbean (all income levels)"
  },
  "adminregion": {
    "id": "LAC",
    "value": "Latin America & Caribbean (developing only)"
  },
  "incomeLevel": {
    "id": "UMC",
    "value": "Upper middle income"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Brasilia",
  "longitude": "-47.9292",
  "latitude": "-15.7801"
}, {
  "id": "BRB",
  "iso2Code": "BB",
  "name": "Barbados",
  "region": {
    "id": "LCN",
    "value": "Latin America & Caribbean (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "NOC",
    "value": "High income: nonOECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Bridgetown",
  "longitude": "-59.6105",
  "latitude": "13.0935"
}, {
  "id": "BRN",
  "iso2Code": "BN",
  "name": "Brunei Darussalam",
  "region": {
    "id": "EAS",
    "value": "East Asia & Pacific (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "NOC",
    "value": "High income: nonOECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Bandar Seri Begawan",
  "longitude": "114.946",
  "latitude": "4.94199"
}, {
  "id": "BTN",
  "iso2Code": "BT",
  "name": "Bhutan",
  "region": {
    "id": "SAS",
    "value": "South Asia"
  },
  "adminregion": {
    "id": "SAS",
    "value": "South Asia"
  },
  "incomeLevel": {
    "id": "LMC",
    "value": "Lower middle income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Thimphu",
  "longitude": "89.6177",
  "latitude": "27.5768"
}, {
  "id": "BWA",
  "iso2Code": "BW",
  "name": "Botswana",
  "region": {
    "id": "SSF",
    "value": "Sub-Saharan Africa (all income levels)"
  },
  "adminregion": {
    "id": "SSA",
    "value": "Sub-Saharan Africa (developing only)"
  },
  "incomeLevel": {
    "id": "UMC",
    "value": "Upper middle income"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Gaborone",
  "longitude": "25.9201",
  "latitude": "-24.6544"
}, {
  "id": "CAF",
  "iso2Code": "CF",
  "name": "Central African Republic",
  "region": {
    "id": "SSF",
    "value": "Sub-Saharan Africa (all income levels)"
  },
  "adminregion": {
    "id": "SSA",
    "value": "Sub-Saharan Africa (developing only)"
  },
  "incomeLevel": {
    "id": "LIC",
    "value": "Low income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Bangui",
  "longitude": "21.6407",
  "latitude": "5.63056"
}, {
  "id": "CAN",
  "iso2Code": "CA",
  "name": "Canada",
  "region": {
    "id": "NAC",
    "value": "North America"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "OEC",
    "value": "High income: OECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Ottawa",
  "longitude": "-75.6919",
  "latitude": "45.4215"
}, {
  "id": "CHE",
  "iso2Code": "CH",
  "name": "Switzerland",
  "region": {
    "id": "ECS",
    "value": "Europe & Central Asia (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "OEC",
    "value": "High income: OECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Bern",
  "longitude": "7.44821",
  "latitude": "46.948"
}, {
  "id": "CHI",
  "iso2Code": "JG",
  "name": "Channel Islands",
  "region": {
    "id": "ECS",
    "value": "Europe & Central Asia (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "NOC",
    "value": "High income: nonOECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "",
  "longitude": "",
  "latitude": ""
}, {
  "id": "CHL",
  "iso2Code": "CL",
  "name": "Chile",
  "region": {
    "id": "LCN",
    "value": "Latin America & Caribbean (all income levels)"
  },
  "adminregion": {
    "id": "LAC",
    "value": "Latin America & Caribbean (developing only)"
  },
  "incomeLevel": {
    "id": "UMC",
    "value": "Upper middle income"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Santiago",
  "longitude": "-70.6475",
  "latitude": "-33.475"
}, {
  "id": "CHN",
  "iso2Code": "CN",
  "name": "China",
  "region": {
    "id": "EAS",
    "value": "East Asia & Pacific (all income levels)"
  },
  "adminregion": {
    "id": "EAP",
    "value": "East Asia & Pacific (developing only)"
  },
  "incomeLevel": {
    "id": "UMC",
    "value": "Upper middle income"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Beijing",
  "longitude": "116.286",
  "latitude": "40.0495"
}, {
  "id": "CIV",
  "iso2Code": "CI",
  "name": "Cote d'Ivoire",
  "region": {
    "id": "SSF",
    "value": "Sub-Saharan Africa (all income levels)"
  },
  "adminregion": {
    "id": "SSA",
    "value": "Sub-Saharan Africa (developing only)"
  },
  "incomeLevel": {
    "id": "LMC",
    "value": "Lower middle income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Yamoussoukro",
  "longitude": "-4.0305",
  "latitude": "5.332"
}, {
  "id": "CMR",
  "iso2Code": "CM",
  "name": "Cameroon",
  "region": {
    "id": "SSF",
    "value": "Sub-Saharan Africa (all income levels)"
  },
  "adminregion": {
    "id": "SSA",
    "value": "Sub-Saharan Africa (developing only)"
  },
  "incomeLevel": {
    "id": "LMC",
    "value": "Lower middle income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Yaounde",
  "longitude": "11.5174",
  "latitude": "3.8721"
}, {
  "id": "COD",
  "iso2Code": "CD",
  "name": "Congo, Dem. Rep.",
  "region": {
    "id": "SSF",
    "value": "Sub-Saharan Africa (all income levels)"
  },
  "adminregion": {
    "id": "SSA",
    "value": "Sub-Saharan Africa (developing only)"
  },
  "incomeLevel": {
    "id": "LIC",
    "value": "Low income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Kinshasa",
  "longitude": "15.3222",
  "latitude": "-4.325"
}, {
  "id": "COG",
  "iso2Code": "CG",
  "name": "Congo, Rep.",
  "region": {
    "id": "SSF",
    "value": "Sub-Saharan Africa (all income levels)"
  },
  "adminregion": {
    "id": "SSA",
    "value": "Sub-Saharan Africa (developing only)"
  },
  "incomeLevel": {
    "id": "LMC",
    "value": "Lower middle income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Brazzaville",
  "longitude": "15.2662",
  "latitude": "-4.2767"
}, {
  "id": "COL",
  "iso2Code": "CO",
  "name": "Colombia",
  "region": {
    "id": "LCN",
    "value": "Latin America & Caribbean (all income levels)"
  },
  "adminregion": {
    "id": "LAC",
    "value": "Latin America & Caribbean (developing only)"
  },
  "incomeLevel": {
    "id": "UMC",
    "value": "Upper middle income"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Bogota",
  "longitude": "-74.082",
  "latitude": "4.60987"
}, {
  "id": "COM",
  "iso2Code": "KM",
  "name": "Comoros",
  "region": {
    "id": "SSF",
    "value": "Sub-Saharan Africa (all income levels)"
  },
  "adminregion": {
    "id": "SSA",
    "value": "Sub-Saharan Africa (developing only)"
  },
  "incomeLevel": {
    "id": "LIC",
    "value": "Low income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Moroni",
  "longitude": "43.2418",
  "latitude": "-11.6986"
}, {
  "id": "CPV",
  "iso2Code": "CV",
  "name": "Cape Verde",
  "region": {
    "id": "SSF",
    "value": "Sub-Saharan Africa (all income levels)"
  },
  "adminregion": {
    "id": "SSA",
    "value": "Sub-Saharan Africa (developing only)"
  },
  "incomeLevel": {
    "id": "LMC",
    "value": "Lower middle income"
  },
  "lendingType": {
    "id": "IDB",
    "value": "Blend"
  },
  "capitalCity": "Praia",
  "longitude": "-23.5087",
  "latitude": "14.9218"
}, {
  "id": "CRI",
  "iso2Code": "CR",
  "name": "Costa Rica",
  "region": {
    "id": "LCN",
    "value": "Latin America & Caribbean (all income levels)"
  },
  "adminregion": {
    "id": "LAC",
    "value": "Latin America & Caribbean (developing only)"
  },
  "incomeLevel": {
    "id": "UMC",
    "value": "Upper middle income"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "San Jose",
  "longitude": "-84.0089",
  "latitude": "9.63701"
}, {
  "id": "CUB",
  "iso2Code": "CU",
  "name": "Cuba",
  "region": {
    "id": "LCN",
    "value": "Latin America & Caribbean (all income levels)"
  },
  "adminregion": {
    "id": "LAC",
    "value": "Latin America & Caribbean (developing only)"
  },
  "incomeLevel": {
    "id": "UMC",
    "value": "Upper middle income"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Havana",
  "longitude": "-82.3667",
  "latitude": "23.1333"
}, {
  "id": "CUW",
  "iso2Code": "CW",
  "name": "Curacao",
  "region": {
    "id": "LCN",
    "value": "Latin America & Caribbean (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "NOC",
    "value": "High income: nonOECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Willemstad",
  "longitude": "",
  "latitude": ""
}, {
  "id": "CYM",
  "iso2Code": "KY",
  "name": "Cayman Islands",
  "region": {
    "id": "LCN",
    "value": "Latin America & Caribbean (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "NOC",
    "value": "High income: nonOECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "George Town",
  "longitude": "-81.3857",
  "latitude": "19.3022"
}, {
  "id": "CYP",
  "iso2Code": "CY",
  "name": "Cyprus",
  "region": {
    "id": "ECS",
    "value": "Europe & Central Asia (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "NOC",
    "value": "High income: nonOECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Nicosia",
  "longitude": "33.3736",
  "latitude": "35.1676"
}, {
  "id": "CZE",
  "iso2Code": "CZ",
  "name": "Czech Republic",
  "region": {
    "id": "ECS",
    "value": "Europe & Central Asia (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "OEC",
    "value": "High income: OECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Prague",
  "longitude": "14.4205",
  "latitude": "50.0878"
}, {
  "id": "DEU",
  "iso2Code": "DE",
  "name": "Germany",
  "region": {
    "id": "ECS",
    "value": "Europe & Central Asia (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "OEC",
    "value": "High income: OECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Berlin",
  "longitude": "13.4115",
  "latitude": "52.5235"
}, {
  "id": "DJI",
  "iso2Code": "DJ",
  "name": "Djibouti",
  "region": {
    "id": "MEA",
    "value": "Middle East & North Africa (all income levels)"
  },
  "adminregion": {
    "id": "MNA",
    "value": "Middle East & North Africa (developing only)"
  },
  "incomeLevel": {
    "id": "LMC",
    "value": "Lower middle income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Djibouti",
  "longitude": "43.1425",
  "latitude": "11.5806"
}, {
  "id": "DMA",
  "iso2Code": "DM",
  "name": "Dominica",
  "region": {
    "id": "LCN",
    "value": "Latin America & Caribbean (all income levels)"
  },
  "adminregion": {
    "id": "LAC",
    "value": "Latin America & Caribbean (developing only)"
  },
  "incomeLevel": {
    "id": "UMC",
    "value": "Upper middle income"
  },
  "lendingType": {
    "id": "IDB",
    "value": "Blend"
  },
  "capitalCity": "Roseau",
  "longitude": "-61.39",
  "latitude": "15.2976"
}, {
  "id": "DNK",
  "iso2Code": "DK",
  "name": "Denmark",
  "region": {
    "id": "ECS",
    "value": "Europe & Central Asia (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "OEC",
    "value": "High income: OECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Copenhagen",
  "longitude": "12.5681",
  "latitude": "55.6763"
}, {
  "id": "DOM",
  "iso2Code": "DO",
  "name": "Dominican Republic",
  "region": {
    "id": "LCN",
    "value": "Latin America & Caribbean (all income levels)"
  },
  "adminregion": {
    "id": "LAC",
    "value": "Latin America & Caribbean (developing only)"
  },
  "incomeLevel": {
    "id": "UMC",
    "value": "Upper middle income"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Santo Domingo",
  "longitude": "-69.8908",
  "latitude": "18.479"
}, {
  "id": "DZA",
  "iso2Code": "DZ",
  "name": "Algeria",
  "region": {
    "id": "MEA",
    "value": "Middle East & North Africa (all income levels)"
  },
  "adminregion": {
    "id": "MNA",
    "value": "Middle East & North Africa (developing only)"
  },
  "incomeLevel": {
    "id": "UMC",
    "value": "Upper middle income"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Algiers",
  "longitude": "3.05097",
  "latitude": "36.7397"
}, {
  "id": "ECU",
  "iso2Code": "EC",
  "name": "Ecuador",
  "region": {
    "id": "LCN",
    "value": "Latin America & Caribbean (all income levels)"
  },
  "adminregion": {
    "id": "LAC",
    "value": "Latin America & Caribbean (developing only)"
  },
  "incomeLevel": {
    "id": "UMC",
    "value": "Upper middle income"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Quito",
  "longitude": "-78.5243",
  "latitude": "-0.229498"
}, {
  "id": "EGY",
  "iso2Code": "EG",
  "name": "Egypt, Arab Rep.",
  "region": {
    "id": "MEA",
    "value": "Middle East & North Africa (all income levels)"
  },
  "adminregion": {
    "id": "MNA",
    "value": "Middle East & North Africa (developing only)"
  },
  "incomeLevel": {
    "id": "LMC",
    "value": "Lower middle income"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Cairo",
  "longitude": "31.2461",
  "latitude": "30.0982"
}, {
  "id": "ERI",
  "iso2Code": "ER",
  "name": "Eritrea",
  "region": {
    "id": "SSF",
    "value": "Sub-Saharan Africa (all income levels)"
  },
  "adminregion": {
    "id": "SSA",
    "value": "Sub-Saharan Africa (developing only)"
  },
  "incomeLevel": {
    "id": "LIC",
    "value": "Low income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Asmara",
  "longitude": "38.9183",
  "latitude": "15.3315"
}, {
  "id": "ESP",
  "iso2Code": "ES",
  "name": "Spain",
  "region": {
    "id": "ECS",
    "value": "Europe & Central Asia (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "OEC",
    "value": "High income: OECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Madrid",
  "longitude": "-3.70327",
  "latitude": "40.4167"
}, {
  "id": "EST",
  "iso2Code": "EE",
  "name": "Estonia",
  "region": {
    "id": "ECS",
    "value": "Europe & Central Asia (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "OEC",
    "value": "High income: OECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Tallinn",
  "longitude": "24.7586",
  "latitude": "59.4392"
}, {
  "id": "ETH",
  "iso2Code": "ET",
  "name": "Ethiopia",
  "region": {
    "id": "SSF",
    "value": "Sub-Saharan Africa (all income levels)"
  },
  "adminregion": {
    "id": "SSA",
    "value": "Sub-Saharan Africa (developing only)"
  },
  "incomeLevel": {
    "id": "LIC",
    "value": "Low income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Addis ababa",
  "longitude": "38.7468",
  "latitude": "9.02274"
}, {
  "id": "FIN",
  "iso2Code": "FI",
  "name": "Finland",
  "region": {
    "id": "ECS",
    "value": "Europe & Central Asia (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "OEC",
    "value": "High income: OECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Helsinki",
  "longitude": "24.9525",
  "latitude": "60.1608"
}, {
  "id": "FJI",
  "iso2Code": "FJ",
  "name": "Fiji",
  "region": {
    "id": "EAS",
    "value": "East Asia & Pacific (all income levels)"
  },
  "adminregion": {
    "id": "EAP",
    "value": "East Asia & Pacific (developing only)"
  },
  "incomeLevel": {
    "id": "LMC",
    "value": "Lower middle income"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Suva",
  "longitude": "178.399",
  "latitude": "-18.1149"
}, {
  "id": "FRA",
  "iso2Code": "FR",
  "name": "France",
  "region": {
    "id": "ECS",
    "value": "Europe & Central Asia (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "OEC",
    "value": "High income: OECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Paris",
  "longitude": "2.35097",
  "latitude": "48.8566"
}, {
  "id": "FRO",
  "iso2Code": "FO",
  "name": "Faeroe Islands",
  "region": {
    "id": "ECS",
    "value": "Europe & Central Asia (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "NOC",
    "value": "High income: nonOECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Torshavn",
  "longitude": "-6.91181",
  "latitude": "61.8926"
}, {
  "id": "FSM",
  "iso2Code": "FM",
  "name": "Micronesia, Fed. Sts.",
  "region": {
    "id": "EAS",
    "value": "East Asia & Pacific (all income levels)"
  },
  "adminregion": {
    "id": "EAP",
    "value": "East Asia & Pacific (developing only)"
  },
  "incomeLevel": {
    "id": "LMC",
    "value": "Lower middle income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Palikir",
  "longitude": "158.185",
  "latitude": "6.91771"
}, {
  "id": "GAB",
  "iso2Code": "GA",
  "name": "Gabon",
  "region": {
    "id": "SSF",
    "value": "Sub-Saharan Africa (all income levels)"
  },
  "adminregion": {
    "id": "SSA",
    "value": "Sub-Saharan Africa (developing only)"
  },
  "incomeLevel": {
    "id": "UMC",
    "value": "Upper middle income"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Libreville",
  "longitude": "9.45162",
  "latitude": "0.38832"
}, {
  "id": "GBR",
  "iso2Code": "GB",
  "name": "United Kingdom",
  "region": {
    "id": "ECS",
    "value": "Europe & Central Asia (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "OEC",
    "value": "High income: OECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "London",
  "longitude": "-0.126236",
  "latitude": "51.5002"
}, {
  "id": "GEO",
  "iso2Code": "GE",
  "name": "Georgia",
  "region": {
    "id": "ECS",
    "value": "Europe & Central Asia (all income levels)"
  },
  "adminregion": {
    "id": "ECA",
    "value": "Europe & Central Asia (developing only)"
  },
  "incomeLevel": {
    "id": "LMC",
    "value": "Lower middle income"
  },
  "lendingType": {
    "id": "IDB",
    "value": "Blend"
  },
  "capitalCity": "Tbilisi",
  "longitude": "44.793",
  "latitude": "41.71"
}, {
  "id": "GHA",
  "iso2Code": "GH",
  "name": "Ghana",
  "region": {
    "id": "SSF",
    "value": "Sub-Saharan Africa (all income levels)"
  },
  "adminregion": {
    "id": "SSA",
    "value": "Sub-Saharan Africa (developing only)"
  },
  "incomeLevel": {
    "id": "LMC",
    "value": "Lower middle income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Accra",
  "longitude": "-0.20795",
  "latitude": "5.57045"
}, {
  "id": "GIN",
  "iso2Code": "GN",
  "name": "Guinea",
  "region": {
    "id": "SSF",
    "value": "Sub-Saharan Africa (all income levels)"
  },
  "adminregion": {
    "id": "SSA",
    "value": "Sub-Saharan Africa (developing only)"
  },
  "incomeLevel": {
    "id": "LIC",
    "value": "Low income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Conakry",
  "longitude": "-13.7",
  "latitude": "9.51667"
}, {
  "id": "GMB",
  "iso2Code": "GM",
  "name": "Gambia, The",
  "region": {
    "id": "SSF",
    "value": "Sub-Saharan Africa (all income levels)"
  },
  "adminregion": {
    "id": "SSA",
    "value": "Sub-Saharan Africa (developing only)"
  },
  "incomeLevel": {
    "id": "LIC",
    "value": "Low income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Banjul",
  "longitude": "-16.5885",
  "latitude": "13.4495"
}, {
  "id": "GNB",
  "iso2Code": "GW",
  "name": "Guinea-Bissau",
  "region": {
    "id": "SSF",
    "value": "Sub-Saharan Africa (all income levels)"
  },
  "adminregion": {
    "id": "SSA",
    "value": "Sub-Saharan Africa (developing only)"
  },
  "incomeLevel": {
    "id": "LIC",
    "value": "Low income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Bissau",
  "longitude": "-15.1804",
  "latitude": "11.8037"
}, {
  "id": "GNQ",
  "iso2Code": "GQ",
  "name": "Equatorial Guinea",
  "region": {
    "id": "SSF",
    "value": "Sub-Saharan Africa (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "NOC",
    "value": "High income: nonOECD"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Malabo",
  "longitude": "8.7741",
  "latitude": "3.7523"
}, {
  "id": "GRC",
  "iso2Code": "GR",
  "name": "Greece",
  "region": {
    "id": "ECS",
    "value": "Europe & Central Asia (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "OEC",
    "value": "High income: OECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Athens",
  "longitude": "23.7166",
  "latitude": "37.9792"
}, {
  "id": "GRD",
  "iso2Code": "GD",
  "name": "Grenada",
  "region": {
    "id": "LCN",
    "value": "Latin America & Caribbean (all income levels)"
  },
  "adminregion": {
    "id": "LAC",
    "value": "Latin America & Caribbean (developing only)"
  },
  "incomeLevel": {
    "id": "UMC",
    "value": "Upper middle income"
  },
  "lendingType": {
    "id": "IDB",
    "value": "Blend"
  },
  "capitalCity": "Saint George's",
  "longitude": "-61.7449",
  "latitude": "12.0653"
}, {
  "id": "GRL",
  "iso2Code": "GL",
  "name": "Greenland",
  "region": {
    "id": "ECS",
    "value": "Europe & Central Asia (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "NOC",
    "value": "High income: nonOECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Nuuk",
  "longitude": "-51.7214",
  "latitude": "64.1836"
}, {
  "id": "GTM",
  "iso2Code": "GT",
  "name": "Guatemala",
  "region": {
    "id": "LCN",
    "value": "Latin America & Caribbean (all income levels)"
  },
  "adminregion": {
    "id": "LAC",
    "value": "Latin America & Caribbean (developing only)"
  },
  "incomeLevel": {
    "id": "LMC",
    "value": "Lower middle income"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Guatemala City",
  "longitude": "-90.5328",
  "latitude": "14.6248"
}, {
  "id": "GUM",
  "iso2Code": "GU",
  "name": "Guam",
  "region": {
    "id": "EAS",
    "value": "East Asia & Pacific (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "NOC",
    "value": "High income: nonOECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Agana",
  "longitude": "144.794",
  "latitude": "13.4443"
}, {
  "id": "GUY",
  "iso2Code": "GY",
  "name": "Guyana",
  "region": {
    "id": "LCN",
    "value": "Latin America & Caribbean (all income levels)"
  },
  "adminregion": {
    "id": "LAC",
    "value": "Latin America & Caribbean (developing only)"
  },
  "incomeLevel": {
    "id": "LMC",
    "value": "Lower middle income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Georgetown",
  "longitude": "-58.1548",
  "latitude": "6.80461"
}, {
  "id": "HKG",
  "iso2Code": "HK",
  "name": "Hong Kong SAR, China",
  "region": {
    "id": "EAS",
    "value": "East Asia & Pacific (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "NOC",
    "value": "High income: nonOECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "",
  "longitude": "114.109",
  "latitude": "22.3964"
}, {
  "id": "HND",
  "iso2Code": "HN",
  "name": "Honduras",
  "region": {
    "id": "LCN",
    "value": "Latin America & Caribbean (all income levels)"
  },
  "adminregion": {
    "id": "LAC",
    "value": "Latin America & Caribbean (developing only)"
  },
  "incomeLevel": {
    "id": "LMC",
    "value": "Lower middle income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Tegucigalpa",
  "longitude": "-87.4667",
  "latitude": "15.1333"
}, {
  "id": "HRV",
  "iso2Code": "HR",
  "name": "Croatia",
  "region": {
    "id": "ECS",
    "value": "Europe & Central Asia (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "NOC",
    "value": "High income: nonOECD"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Zagreb",
  "longitude": "15.9614",
  "latitude": "45.8069"
}, {
  "id": "HTI",
  "iso2Code": "HT",
  "name": "Haiti",
  "region": {
    "id": "LCN",
    "value": "Latin America & Caribbean (all income levels)"
  },
  "adminregion": {
    "id": "LAC",
    "value": "Latin America & Caribbean (developing only)"
  },
  "incomeLevel": {
    "id": "LIC",
    "value": "Low income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Port-au-Prince",
  "longitude": "-72.3288",
  "latitude": "18.5392"
}, {
  "id": "HUN",
  "iso2Code": "HU",
  "name": "Hungary",
  "region": {
    "id": "ECS",
    "value": "Europe & Central Asia (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "OEC",
    "value": "High income: OECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Budapest",
  "longitude": "19.0408",
  "latitude": "47.4984"
}, {
  "id": "IDN",
  "iso2Code": "ID",
  "name": "Indonesia",
  "region": {
    "id": "EAS",
    "value": "East Asia & Pacific (all income levels)"
  },
  "adminregion": {
    "id": "EAP",
    "value": "East Asia & Pacific (developing only)"
  },
  "incomeLevel": {
    "id": "LMC",
    "value": "Lower middle income"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Jakarta",
  "longitude": "106.83",
  "latitude": "-6.19752"
}, {
  "id": "IMN",
  "iso2Code": "IM",
  "name": "Isle of Man",
  "region": {
    "id": "ECS",
    "value": "Europe & Central Asia (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "NOC",
    "value": "High income: nonOECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Douglas",
  "longitude": "-4.47928",
  "latitude": "54.1509"
}, {
  "id": "IND",
  "iso2Code": "IN",
  "name": "India",
  "region": {
    "id": "SAS",
    "value": "South Asia"
  },
  "adminregion": {
    "id": "SAS",
    "value": "South Asia"
  },
  "incomeLevel": {
    "id": "LMC",
    "value": "Lower middle income"
  },
  "lendingType": {
    "id": "IDB",
    "value": "Blend"
  },
  "capitalCity": "New Delhi",
  "longitude": "77.225",
  "latitude": "28.6353"
}, {
  "id": "IRL",
  "iso2Code": "IE",
  "name": "Ireland",
  "region": {
    "id": "ECS",
    "value": "Europe & Central Asia (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "OEC",
    "value": "High income: OECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Dublin",
  "longitude": "-6.26749",
  "latitude": "53.3441"
}, {
  "id": "IRN",
  "iso2Code": "IR",
  "name": "Iran, Islamic Rep.",
  "region": {
    "id": "MEA",
    "value": "Middle East & North Africa (all income levels)"
  },
  "adminregion": {
    "id": "MNA",
    "value": "Middle East & North Africa (developing only)"
  },
  "incomeLevel": {
    "id": "UMC",
    "value": "Upper middle income"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Tehran",
  "longitude": "51.4447",
  "latitude": "35.6878"
}, {
  "id": "IRQ",
  "iso2Code": "IQ",
  "name": "Iraq",
  "region": {
    "id": "MEA",
    "value": "Middle East & North Africa (all income levels)"
  },
  "adminregion": {
    "id": "MNA",
    "value": "Middle East & North Africa (developing only)"
  },
  "incomeLevel": {
    "id": "LMC",
    "value": "Lower middle income"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Baghdad",
  "longitude": "44.394",
  "latitude": "33.3302"
}, {
  "id": "ISL",
  "iso2Code": "IS",
  "name": "Iceland",
  "region": {
    "id": "ECS",
    "value": "Europe & Central Asia (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "OEC",
    "value": "High income: OECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Reykjavik",
  "longitude": "-21.8952",
  "latitude": "64.1353"
}, {
  "id": "ISR",
  "iso2Code": "IL",
  "name": "Israel",
  "region": {
    "id": "MEA",
    "value": "Middle East & North Africa (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "OEC",
    "value": "High income: OECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "",
  "longitude": "35.2035",
  "latitude": "31.7717"
}, {
  "id": "ITA",
  "iso2Code": "IT",
  "name": "Italy",
  "region": {
    "id": "ECS",
    "value": "Europe & Central Asia (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "OEC",
    "value": "High income: OECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Rome",
  "longitude": "12.4823",
  "latitude": "41.8955"
}, {
  "id": "JAM",
  "iso2Code": "JM",
  "name": "Jamaica",
  "region": {
    "id": "LCN",
    "value": "Latin America & Caribbean (all income levels)"
  },
  "adminregion": {
    "id": "LAC",
    "value": "Latin America & Caribbean (developing only)"
  },
  "incomeLevel": {
    "id": "UMC",
    "value": "Upper middle income"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Kingston",
  "longitude": "-76.792",
  "latitude": "17.9927"
}, {
  "id": "JOR",
  "iso2Code": "JO",
  "name": "Jordan",
  "region": {
    "id": "MEA",
    "value": "Middle East & North Africa (all income levels)"
  },
  "adminregion": {
    "id": "MNA",
    "value": "Middle East & North Africa (developing only)"
  },
  "incomeLevel": {
    "id": "UMC",
    "value": "Upper middle income"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Amman",
  "longitude": "35.9263",
  "latitude": "31.9497"
}, {
  "id": "JPN",
  "iso2Code": "JP",
  "name": "Japan",
  "region": {
    "id": "EAS",
    "value": "East Asia & Pacific (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "OEC",
    "value": "High income: OECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Tokyo",
  "longitude": "139.77",
  "latitude": "35.67"
}, {
  "id": "KAZ",
  "iso2Code": "KZ",
  "name": "Kazakhstan",
  "region": {
    "id": "ECS",
    "value": "Europe & Central Asia (all income levels)"
  },
  "adminregion": {
    "id": "ECA",
    "value": "Europe & Central Asia (developing only)"
  },
  "incomeLevel": {
    "id": "UMC",
    "value": "Upper middle income"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Astana",
  "longitude": "71.4382",
  "latitude": "51.1879"
}, {
  "id": "KEN",
  "iso2Code": "KE",
  "name": "Kenya",
  "region": {
    "id": "SSF",
    "value": "Sub-Saharan Africa (all income levels)"
  },
  "adminregion": {
    "id": "SSA",
    "value": "Sub-Saharan Africa (developing only)"
  },
  "incomeLevel": {
    "id": "LIC",
    "value": "Low income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Nairobi",
  "longitude": "36.8126",
  "latitude": "-1.27975"
}, {
  "id": "KGZ",
  "iso2Code": "KG",
  "name": "Kyrgyz Republic",
  "region": {
    "id": "ECS",
    "value": "Europe & Central Asia (all income levels)"
  },
  "adminregion": {
    "id": "ECA",
    "value": "Europe & Central Asia (developing only)"
  },
  "incomeLevel": {
    "id": "LIC",
    "value": "Low income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Bishkek",
  "longitude": "74.6057",
  "latitude": "42.8851"
}, {
  "id": "KHM",
  "iso2Code": "KH",
  "name": "Cambodia",
  "region": {
    "id": "EAS",
    "value": "East Asia & Pacific (all income levels)"
  },
  "adminregion": {
    "id": "EAP",
    "value": "East Asia & Pacific (developing only)"
  },
  "incomeLevel": {
    "id": "LIC",
    "value": "Low income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Phnom Penh",
  "longitude": "104.874",
  "latitude": "11.5556"
}, {
  "id": "KIR",
  "iso2Code": "KI",
  "name": "Kiribati",
  "region": {
    "id": "EAS",
    "value": "East Asia & Pacific (all income levels)"
  },
  "adminregion": {
    "id": "EAP",
    "value": "East Asia & Pacific (developing only)"
  },
  "incomeLevel": {
    "id": "LMC",
    "value": "Lower middle income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Tarawa",
  "longitude": "172.979",
  "latitude": "1.32905"
}, {
  "id": "KNA",
  "iso2Code": "KN",
  "name": "St. Kitts and Nevis",
  "region": {
    "id": "LCN",
    "value": "Latin America & Caribbean (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "NOC",
    "value": "High income: nonOECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Basseterre",
  "longitude": "-62.7309",
  "latitude": "17.3"
}, {
  "id": "KOR",
  "iso2Code": "KR",
  "name": "Korea, Rep.",
  "region": {
    "id": "EAS",
    "value": "East Asia & Pacific (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "OEC",
    "value": "High income: OECD"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Seoul",
  "longitude": "126.957",
  "latitude": "37.5323"
}, {
  "id": "KSV",
  "iso2Code": "KV",
  "name": "Kosovo",
  "region": {
    "id": "ECS",
    "value": "Europe & Central Asia (all income levels)"
  },
  "adminregion": {
    "id": "ECA",
    "value": "Europe & Central Asia (developing only)"
  },
  "incomeLevel": {
    "id": "LMC",
    "value": "Lower middle income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Pristina",
  "longitude": "20.926",
  "latitude": "42.565"
}, {
  "id": "KWT",
  "iso2Code": "KW",
  "name": "Kuwait",
  "region": {
    "id": "MEA",
    "value": "Middle East & North Africa (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "NOC",
    "value": "High income: nonOECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Kuwait City",
  "longitude": "47.9824",
  "latitude": "29.3721"
}, {
  "id": "LAO",
  "iso2Code": "LA",
  "name": "Lao PDR",
  "region": {
    "id": "EAS",
    "value": "East Asia & Pacific (all income levels)"
  },
  "adminregion": {
    "id": "EAP",
    "value": "East Asia & Pacific (developing only)"
  },
  "incomeLevel": {
    "id": "LMC",
    "value": "Lower middle income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Vientiane",
  "longitude": "102.177",
  "latitude": "18.5826"
}, {
  "id": "LBN",
  "iso2Code": "LB",
  "name": "Lebanon",
  "region": {
    "id": "MEA",
    "value": "Middle East & North Africa (all income levels)"
  },
  "adminregion": {
    "id": "MNA",
    "value": "Middle East & North Africa (developing only)"
  },
  "incomeLevel": {
    "id": "UMC",
    "value": "Upper middle income"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Beirut",
  "longitude": "35.5134",
  "latitude": "33.8872"
}, {
  "id": "LBR",
  "iso2Code": "LR",
  "name": "Liberia",
  "region": {
    "id": "SSF",
    "value": "Sub-Saharan Africa (all income levels)"
  },
  "adminregion": {
    "id": "SSA",
    "value": "Sub-Saharan Africa (developing only)"
  },
  "incomeLevel": {
    "id": "LIC",
    "value": "Low income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Monrovia",
  "longitude": "-10.7957",
  "latitude": "6.30039"
}, {
  "id": "LBY",
  "iso2Code": "LY",
  "name": "Libya",
  "region": {
    "id": "MEA",
    "value": "Middle East & North Africa (all income levels)"
  },
  "adminregion": {
    "id": "MNA",
    "value": "Middle East & North Africa (developing only)"
  },
  "incomeLevel": {
    "id": "UMC",
    "value": "Upper middle income"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Tripoli",
  "longitude": "13.1072",
  "latitude": "32.8578"
}, {
  "id": "LCA",
  "iso2Code": "LC",
  "name": "St. Lucia",
  "region": {
    "id": "LCN",
    "value": "Latin America & Caribbean (all income levels)"
  },
  "adminregion": {
    "id": "LAC",
    "value": "Latin America & Caribbean (developing only)"
  },
  "incomeLevel": {
    "id": "UMC",
    "value": "Upper middle income"
  },
  "lendingType": {
    "id": "IDB",
    "value": "Blend"
  },
  "capitalCity": "Castries",
  "longitude": "-60.9832",
  "latitude": "14"
}, {
  "id": "LIE",
  "iso2Code": "LI",
  "name": "Liechtenstein",
  "region": {
    "id": "ECS",
    "value": "Europe & Central Asia (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "NOC",
    "value": "High income: nonOECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Vaduz",
  "longitude": "9.52148",
  "latitude": "47.1411"
}, {
  "id": "LKA",
  "iso2Code": "LK",
  "name": "Sri Lanka",
  "region": {
    "id": "SAS",
    "value": "South Asia"
  },
  "adminregion": {
    "id": "SAS",
    "value": "South Asia"
  },
  "incomeLevel": {
    "id": "LMC",
    "value": "Lower middle income"
  },
  "lendingType": {
    "id": "IDB",
    "value": "Blend"
  },
  "capitalCity": "Colombo",
  "longitude": "79.8528",
  "latitude": "6.92148"
}, {
  "id": "LSO",
  "iso2Code": "LS",
  "name": "Lesotho",
  "region": {
    "id": "SSF",
    "value": "Sub-Saharan Africa (all income levels)"
  },
  "adminregion": {
    "id": "SSA",
    "value": "Sub-Saharan Africa (developing only)"
  },
  "incomeLevel": {
    "id": "LMC",
    "value": "Lower middle income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Maseru",
  "longitude": "27.7167",
  "latitude": "-29.5208"
}, {
  "id": "LTU",
  "iso2Code": "LT",
  "name": "Lithuania",
  "region": {
    "id": "ECS",
    "value": "Europe & Central Asia (all income levels)"
  },
  "adminregion": {
    "id": "ECA",
    "value": "Europe & Central Asia (developing only)"
  },
  "incomeLevel": {
    "id": "UMC",
    "value": "Upper middle income"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Vilnius",
  "longitude": "25.2799",
  "latitude": "54.6896"
}, {
  "id": "LUX",
  "iso2Code": "LU",
  "name": "Luxembourg",
  "region": {
    "id": "ECS",
    "value": "Europe & Central Asia (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "OEC",
    "value": "High income: OECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Luxembourg",
  "longitude": "6.1296",
  "latitude": "49.61"
}, {
  "id": "LVA",
  "iso2Code": "LV",
  "name": "Latvia",
  "region": {
    "id": "ECS",
    "value": "Europe & Central Asia (all income levels)"
  },
  "adminregion": {
    "id": "ECA",
    "value": "Europe & Central Asia (developing only)"
  },
  "incomeLevel": {
    "id": "UMC",
    "value": "Upper middle income"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Riga",
  "longitude": "24.1048",
  "latitude": "56.9465"
}, {
  "id": "MAC",
  "iso2Code": "MO",
  "name": "Macao SAR, China",
  "region": {
    "id": "EAS",
    "value": "East Asia & Pacific (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "NOC",
    "value": "High income: nonOECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "",
  "longitude": "113.55",
  "latitude": "22.1667"
}, {
  "id": "MAF",
  "iso2Code": "MF",
  "name": "St. Martin (French part)",
  "region": {
    "id": "LCN",
    "value": "Latin America & Caribbean (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "NOC",
    "value": "High income: nonOECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Marigot",
  "longitude": "",
  "latitude": ""
}, {
  "id": "MAR",
  "iso2Code": "MA",
  "name": "Morocco",
  "region": {
    "id": "MEA",
    "value": "Middle East & North Africa (all income levels)"
  },
  "adminregion": {
    "id": "MNA",
    "value": "Middle East & North Africa (developing only)"
  },
  "incomeLevel": {
    "id": "LMC",
    "value": "Lower middle income"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Rabat",
  "longitude": "-6.8704",
  "latitude": "33.9905"
}, {
  "id": "MCO",
  "iso2Code": "MC",
  "name": "Monaco",
  "region": {
    "id": "ECS",
    "value": "Europe & Central Asia (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "NOC",
    "value": "High income: nonOECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Monaco",
  "longitude": "7.41891",
  "latitude": "43.7325"
}, {
  "id": "MDA",
  "iso2Code": "MD",
  "name": "Moldova",
  "region": {
    "id": "ECS",
    "value": "Europe & Central Asia (all income levels)"
  },
  "adminregion": {
    "id": "ECA",
    "value": "Europe & Central Asia (developing only)"
  },
  "incomeLevel": {
    "id": "LMC",
    "value": "Lower middle income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Chisinau",
  "longitude": "28.8497",
  "latitude": "47.0167"
}, {
  "id": "MDG",
  "iso2Code": "MG",
  "name": "Madagascar",
  "region": {
    "id": "SSF",
    "value": "Sub-Saharan Africa (all income levels)"
  },
  "adminregion": {
    "id": "SSA",
    "value": "Sub-Saharan Africa (developing only)"
  },
  "incomeLevel": {
    "id": "LIC",
    "value": "Low income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Antananarivo",
  "longitude": "45.7167",
  "latitude": "-20.4667"
}, {
  "id": "MDV",
  "iso2Code": "MV",
  "name": "Maldives",
  "region": {
    "id": "SAS",
    "value": "South Asia"
  },
  "adminregion": {
    "id": "SAS",
    "value": "South Asia"
  },
  "incomeLevel": {
    "id": "UMC",
    "value": "Upper middle income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Male",
  "longitude": "73.5109",
  "latitude": "4.1742"
}, {
  "id": "MEX",
  "iso2Code": "MX",
  "name": "Mexico",
  "region": {
    "id": "LCN",
    "value": "Latin America & Caribbean (all income levels)"
  },
  "adminregion": {
    "id": "LAC",
    "value": "Latin America & Caribbean (developing only)"
  },
  "incomeLevel": {
    "id": "UMC",
    "value": "Upper middle income"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Mexico City",
  "longitude": "-99.1276",
  "latitude": "19.427"
}, {
  "id": "MHL",
  "iso2Code": "MH",
  "name": "Marshall Islands",
  "region": {
    "id": "EAS",
    "value": "East Asia & Pacific (all income levels)"
  },
  "adminregion": {
    "id": "EAP",
    "value": "East Asia & Pacific (developing only)"
  },
  "incomeLevel": {
    "id": "LMC",
    "value": "Lower middle income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Majuro",
  "longitude": "171.135",
  "latitude": "7.11046"
}, {
  "id": "MKD",
  "iso2Code": "MK",
  "name": "Macedonia, FYR",
  "region": {
    "id": "ECS",
    "value": "Europe & Central Asia (all income levels)"
  },
  "adminregion": {
    "id": "ECA",
    "value": "Europe & Central Asia (developing only)"
  },
  "incomeLevel": {
    "id": "UMC",
    "value": "Upper middle income"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Skopje",
  "longitude": "21.4361",
  "latitude": "42.0024"
}, {
  "id": "MLI",
  "iso2Code": "ML",
  "name": "Mali",
  "region": {
    "id": "SSF",
    "value": "Sub-Saharan Africa (all income levels)"
  },
  "adminregion": {
    "id": "SSA",
    "value": "Sub-Saharan Africa (developing only)"
  },
  "incomeLevel": {
    "id": "LIC",
    "value": "Low income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Bamako",
  "longitude": "-7.50034",
  "latitude": "13.5667"
}, {
  "id": "MLT",
  "iso2Code": "MT",
  "name": "Malta",
  "region": {
    "id": "MEA",
    "value": "Middle East & North Africa (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "NOC",
    "value": "High income: nonOECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Valletta",
  "longitude": "14.5189",
  "latitude": "35.9042"
}, {
  "id": "MMR",
  "iso2Code": "MM",
  "name": "Myanmar",
  "region": {
    "id": "EAS",
    "value": "East Asia & Pacific (all income levels)"
  },
  "adminregion": {
    "id": "EAP",
    "value": "East Asia & Pacific (developing only)"
  },
  "incomeLevel": {
    "id": "LIC",
    "value": "Low income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Naypyidaw",
  "longitude": "95.9562",
  "latitude": "21.914"
}, {
  "id": "MNE",
  "iso2Code": "ME",
  "name": "Montenegro",
  "region": {
    "id": "ECS",
    "value": "Europe & Central Asia (all income levels)"
  },
  "adminregion": {
    "id": "ECA",
    "value": "Europe & Central Asia (developing only)"
  },
  "incomeLevel": {
    "id": "UMC",
    "value": "Upper middle income"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Podgorica",
  "longitude": "19.2595",
  "latitude": "42.4602"
}, {
  "id": "MNG",
  "iso2Code": "MN",
  "name": "Mongolia",
  "region": {
    "id": "EAS",
    "value": "East Asia & Pacific (all income levels)"
  },
  "adminregion": {
    "id": "EAP",
    "value": "East Asia & Pacific (developing only)"
  },
  "incomeLevel": {
    "id": "LMC",
    "value": "Lower middle income"
  },
  "lendingType": {
    "id": "IDB",
    "value": "Blend"
  },
  "capitalCity": "Ulaanbaatar",
  "longitude": "106.937",
  "latitude": "47.9129"
}, {
  "id": "MNP",
  "iso2Code": "MP",
  "name": "Northern Mariana Islands",
  "region": {
    "id": "EAS",
    "value": "East Asia & Pacific (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "NOC",
    "value": "High income: nonOECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Saipan",
  "longitude": "145.765",
  "latitude": "15.1935"
}, {
  "id": "MOZ",
  "iso2Code": "MZ",
  "name": "Mozambique",
  "region": {
    "id": "SSF",
    "value": "Sub-Saharan Africa (all income levels)"
  },
  "adminregion": {
    "id": "SSA",
    "value": "Sub-Saharan Africa (developing only)"
  },
  "incomeLevel": {
    "id": "LIC",
    "value": "Low income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Maputo",
  "longitude": "32.5713",
  "latitude": "-25.9664"
}, {
  "id": "MRT",
  "iso2Code": "MR",
  "name": "Mauritania",
  "region": {
    "id": "SSF",
    "value": "Sub-Saharan Africa (all income levels)"
  },
  "adminregion": {
    "id": "SSA",
    "value": "Sub-Saharan Africa (developing only)"
  },
  "incomeLevel": {
    "id": "LIC",
    "value": "Low income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Nouakchott",
  "longitude": "-15.9824",
  "latitude": "18.2367"
}, {
  "id": "MUS",
  "iso2Code": "MU",
  "name": "Mauritius",
  "region": {
    "id": "SSF",
    "value": "Sub-Saharan Africa (all income levels)"
  },
  "adminregion": {
    "id": "SSA",
    "value": "Sub-Saharan Africa (developing only)"
  },
  "incomeLevel": {
    "id": "UMC",
    "value": "Upper middle income"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Port Louis",
  "longitude": "57.4977",
  "latitude": "-20.1605"
}, {
  "id": "MWI",
  "iso2Code": "MW",
  "name": "Malawi",
  "region": {
    "id": "SSF",
    "value": "Sub-Saharan Africa (all income levels)"
  },
  "adminregion": {
    "id": "SSA",
    "value": "Sub-Saharan Africa (developing only)"
  },
  "incomeLevel": {
    "id": "LIC",
    "value": "Low income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Lilongwe",
  "longitude": "33.7703",
  "latitude": "-13.9899"
}, {
  "id": "MYS",
  "iso2Code": "MY",
  "name": "Malaysia",
  "region": {
    "id": "EAS",
    "value": "East Asia & Pacific (all income levels)"
  },
  "adminregion": {
    "id": "EAP",
    "value": "East Asia & Pacific (developing only)"
  },
  "incomeLevel": {
    "id": "UMC",
    "value": "Upper middle income"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Kuala Lumpur",
  "longitude": "101.684",
  "latitude": "3.12433"
}, {
  "id": "NAM",
  "iso2Code": "NA",
  "name": "Namibia",
  "region": {
    "id": "SSF",
    "value": "Sub-Saharan Africa (all income levels)"
  },
  "adminregion": {
    "id": "SSA",
    "value": "Sub-Saharan Africa (developing only)"
  },
  "incomeLevel": {
    "id": "UMC",
    "value": "Upper middle income"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Windhoek",
  "longitude": "17.0931",
  "latitude": "-22.5648"
}, {
  "id": "NCL",
  "iso2Code": "NC",
  "name": "New Caledonia",
  "region": {
    "id": "EAS",
    "value": "East Asia & Pacific (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "NOC",
    "value": "High income: nonOECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Noum'ea",
  "longitude": "166.464",
  "latitude": "-22.2677"
}, {
  "id": "NER",
  "iso2Code": "NE",
  "name": "Niger",
  "region": {
    "id": "SSF",
    "value": "Sub-Saharan Africa (all income levels)"
  },
  "adminregion": {
    "id": "SSA",
    "value": "Sub-Saharan Africa (developing only)"
  },
  "incomeLevel": {
    "id": "LIC",
    "value": "Low income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Niamey",
  "longitude": "2.1073",
  "latitude": "13.514"
}, {
  "id": "NGA",
  "iso2Code": "NG",
  "name": "Nigeria",
  "region": {
    "id": "SSF",
    "value": "Sub-Saharan Africa (all income levels)"
  },
  "adminregion": {
    "id": "SSA",
    "value": "Sub-Saharan Africa (developing only)"
  },
  "incomeLevel": {
    "id": "LMC",
    "value": "Lower middle income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Abuja",
  "longitude": "7.48906",
  "latitude": "9.05804"
}, {
  "id": "NIC",
  "iso2Code": "NI",
  "name": "Nicaragua",
  "region": {
    "id": "LCN",
    "value": "Latin America & Caribbean (all income levels)"
  },
  "adminregion": {
    "id": "LAC",
    "value": "Latin America & Caribbean (developing only)"
  },
  "incomeLevel": {
    "id": "LMC",
    "value": "Lower middle income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Managua",
  "longitude": "-86.2734",
  "latitude": "12.1475"
}, {
  "id": "NLD",
  "iso2Code": "NL",
  "name": "Netherlands",
  "region": {
    "id": "ECS",
    "value": "Europe & Central Asia (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "OEC",
    "value": "High income: OECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Amsterdam",
  "longitude": "4.89095",
  "latitude": "52.3738"
}, {
  "id": "NOR",
  "iso2Code": "NO",
  "name": "Norway",
  "region": {
    "id": "ECS",
    "value": "Europe & Central Asia (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "OEC",
    "value": "High income: OECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Oslo",
  "longitude": "10.7387",
  "latitude": "59.9138"
}, {
  "id": "NPL",
  "iso2Code": "NP",
  "name": "Nepal",
  "region": {
    "id": "SAS",
    "value": "South Asia"
  },
  "adminregion": {
    "id": "SAS",
    "value": "South Asia"
  },
  "incomeLevel": {
    "id": "LIC",
    "value": "Low income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Kathmandu",
  "longitude": "85.3157",
  "latitude": "27.6939"
}, {
  "id": "NZL",
  "iso2Code": "NZ",
  "name": "New Zealand",
  "region": {
    "id": "EAS",
    "value": "East Asia & Pacific (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "OEC",
    "value": "High income: OECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Wellington",
  "longitude": "174.776",
  "latitude": "-41.2865"
}, {
  "id": "OMN",
  "iso2Code": "OM",
  "name": "Oman",
  "region": {
    "id": "MEA",
    "value": "Middle East & North Africa (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "NOC",
    "value": "High income: nonOECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Muscat",
  "longitude": "58.5874",
  "latitude": "23.6105"
}, {
  "id": "PAK",
  "iso2Code": "PK",
  "name": "Pakistan",
  "region": {
    "id": "SAS",
    "value": "South Asia"
  },
  "adminregion": {
    "id": "SAS",
    "value": "South Asia"
  },
  "incomeLevel": {
    "id": "LMC",
    "value": "Lower middle income"
  },
  "lendingType": {
    "id": "IDB",
    "value": "Blend"
  },
  "capitalCity": "Islamabad",
  "longitude": "72.8",
  "latitude": "30.5167"
}, {
  "id": "PAN",
  "iso2Code": "PA",
  "name": "Panama",
  "region": {
    "id": "LCN",
    "value": "Latin America & Caribbean (all income levels)"
  },
  "adminregion": {
    "id": "LAC",
    "value": "Latin America & Caribbean (developing only)"
  },
  "incomeLevel": {
    "id": "UMC",
    "value": "Upper middle income"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Panama City",
  "longitude": "-79.5188",
  "latitude": "8.99427"
}, {
  "id": "PER",
  "iso2Code": "PE",
  "name": "Peru",
  "region": {
    "id": "LCN",
    "value": "Latin America & Caribbean (all income levels)"
  },
  "adminregion": {
    "id": "LAC",
    "value": "Latin America & Caribbean (developing only)"
  },
  "incomeLevel": {
    "id": "UMC",
    "value": "Upper middle income"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Lima",
  "longitude": "-77.0465",
  "latitude": "-12.0931"
}, {
  "id": "PHL",
  "iso2Code": "PH",
  "name": "Philippines",
  "region": {
    "id": "EAS",
    "value": "East Asia & Pacific (all income levels)"
  },
  "adminregion": {
    "id": "EAP",
    "value": "East Asia & Pacific (developing only)"
  },
  "incomeLevel": {
    "id": "LMC",
    "value": "Lower middle income"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Manila",
  "longitude": "121.035",
  "latitude": "14.5515"
}, {
  "id": "PLW",
  "iso2Code": "PW",
  "name": "Palau",
  "region": {
    "id": "EAS",
    "value": "East Asia & Pacific (all income levels)"
  },
  "adminregion": {
    "id": "EAP",
    "value": "East Asia & Pacific (developing only)"
  },
  "incomeLevel": {
    "id": "UMC",
    "value": "Upper middle income"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Koror",
  "longitude": "134.479",
  "latitude": "7.34194"
}, {
  "id": "PNG",
  "iso2Code": "PG",
  "name": "Papua New Guinea",
  "region": {
    "id": "EAS",
    "value": "East Asia & Pacific (all income levels)"
  },
  "adminregion": {
    "id": "EAP",
    "value": "East Asia & Pacific (developing only)"
  },
  "incomeLevel": {
    "id": "LMC",
    "value": "Lower middle income"
  },
  "lendingType": {
    "id": "IDB",
    "value": "Blend"
  },
  "capitalCity": "Port Moresby",
  "longitude": "147.194",
  "latitude": "-9.47357"
}, {
  "id": "POL",
  "iso2Code": "PL",
  "name": "Poland",
  "region": {
    "id": "ECS",
    "value": "Europe & Central Asia (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "OEC",
    "value": "High income: OECD"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Warsaw",
  "longitude": "21.02",
  "latitude": "52.26"
}, {
  "id": "PRI",
  "iso2Code": "PR",
  "name": "Puerto Rico",
  "region": {
    "id": "LCN",
    "value": "Latin America & Caribbean (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "NOC",
    "value": "High income: nonOECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "San Juan",
  "longitude": "-66",
  "latitude": "18.23"
}, {
  "id": "PRK",
  "iso2Code": "KP",
  "name": "Korea, Dem. Rep.",
  "region": {
    "id": "EAS",
    "value": "East Asia & Pacific (all income levels)"
  },
  "adminregion": {
    "id": "EAP",
    "value": "East Asia & Pacific (developing only)"
  },
  "incomeLevel": {
    "id": "LIC",
    "value": "Low income"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Pyongyang",
  "longitude": "125.754",
  "latitude": "39.0319"
}, {
  "id": "PRT",
  "iso2Code": "PT",
  "name": "Portugal",
  "region": {
    "id": "ECS",
    "value": "Europe & Central Asia (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "OEC",
    "value": "High income: OECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Lisbon",
  "longitude": "-9.13552",
  "latitude": "38.7072"
}, {
  "id": "PRY",
  "iso2Code": "PY",
  "name": "Paraguay",
  "region": {
    "id": "LCN",
    "value": "Latin America & Caribbean (all income levels)"
  },
  "adminregion": {
    "id": "LAC",
    "value": "Latin America & Caribbean (developing only)"
  },
  "incomeLevel": {
    "id": "LMC",
    "value": "Lower middle income"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Asuncion",
  "longitude": "-57.6362",
  "latitude": "-25.3005"
}, {
  "id": "PSE",
  "iso2Code": "PS",
  "name": "West Bank and Gaza",
  "region": {
    "id": "MEA",
    "value": "Middle East & North Africa (all income levels)"
  },
  "adminregion": {
    "id": "MNA",
    "value": "Middle East & North Africa (developing only)"
  },
  "incomeLevel": {
    "id": "LMC",
    "value": "Lower middle income"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "",
  "longitude": "",
  "latitude": ""
}, {
  "id": "PYF",
  "iso2Code": "PF",
  "name": "French Polynesia",
  "region": {
    "id": "EAS",
    "value": "East Asia & Pacific (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "NOC",
    "value": "High income: nonOECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Papeete",
  "longitude": "-149.57",
  "latitude": "-17.535"
}, {
  "id": "QAT",
  "iso2Code": "QA",
  "name": "Qatar",
  "region": {
    "id": "MEA",
    "value": "Middle East & North Africa (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "NOC",
    "value": "High income: nonOECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Doha",
  "longitude": "51.5082",
  "latitude": "25.2948"
}, {
  "id": "ROU",
  "iso2Code": "RO",
  "name": "Romania",
  "region": {
    "id": "ECS",
    "value": "Europe & Central Asia (all income levels)"
  },
  "adminregion": {
    "id": "ECA",
    "value": "Europe & Central Asia (developing only)"
  },
  "incomeLevel": {
    "id": "UMC",
    "value": "Upper middle income"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Bucharest",
  "longitude": "26.0979",
  "latitude": "44.4479"
}, {
  "id": "RUS",
  "iso2Code": "RU",
  "name": "Russian Federation",
  "region": {
    "id": "ECS",
    "value": "Europe & Central Asia (all income levels)"
  },
  "adminregion": {
    "id": "ECA",
    "value": "Europe & Central Asia (developing only)"
  },
  "incomeLevel": {
    "id": "UMC",
    "value": "Upper middle income"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Moscow",
  "longitude": "37.6176",
  "latitude": "55.7558"
}, {
  "id": "RWA",
  "iso2Code": "RW",
  "name": "Rwanda",
  "region": {
    "id": "SSF",
    "value": "Sub-Saharan Africa (all income levels)"
  },
  "adminregion": {
    "id": "SSA",
    "value": "Sub-Saharan Africa (developing only)"
  },
  "incomeLevel": {
    "id": "LIC",
    "value": "Low income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Kigali",
  "longitude": "30.0587",
  "latitude": "-1.95325"
}, {
  "id": "SAU",
  "iso2Code": "SA",
  "name": "Saudi Arabia",
  "region": {
    "id": "MEA",
    "value": "Middle East & North Africa (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "NOC",
    "value": "High income: nonOECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Riyadh",
  "longitude": "46.6977",
  "latitude": "24.6748"
}, {
  "id": "SDN",
  "iso2Code": "SD",
  "name": "Sudan",
  "region": {
    "id": "SSF",
    "value": "Sub-Saharan Africa (all income levels)"
  },
  "adminregion": {
    "id": "SSA",
    "value": "Sub-Saharan Africa (developing only)"
  },
  "incomeLevel": {
    "id": "LMC",
    "value": "Lower middle income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Khartoum",
  "longitude": "32.5363",
  "latitude": "15.5932"
}, {
  "id": "SEN",
  "iso2Code": "SN",
  "name": "Senegal",
  "region": {
    "id": "SSF",
    "value": "Sub-Saharan Africa (all income levels)"
  },
  "adminregion": {
    "id": "SSA",
    "value": "Sub-Saharan Africa (developing only)"
  },
  "incomeLevel": {
    "id": "LMC",
    "value": "Lower middle income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Dakar",
  "longitude": "-17.4734",
  "latitude": "14.7247"
}, {
  "id": "SGP",
  "iso2Code": "SG",
  "name": "Singapore",
  "region": {
    "id": "EAS",
    "value": "East Asia & Pacific (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "NOC",
    "value": "High income: nonOECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Singapore",
  "longitude": "103.85",
  "latitude": "1.28941"
}, {
  "id": "SLB",
  "iso2Code": "SB",
  "name": "Solomon Islands",
  "region": {
    "id": "EAS",
    "value": "East Asia & Pacific (all income levels)"
  },
  "adminregion": {
    "id": "EAP",
    "value": "East Asia & Pacific (developing only)"
  },
  "incomeLevel": {
    "id": "LMC",
    "value": "Lower middle income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Honiara",
  "longitude": "159.949",
  "latitude": "-9.42676"
}, {
  "id": "SLE",
  "iso2Code": "SL",
  "name": "Sierra Leone",
  "region": {
    "id": "SSF",
    "value": "Sub-Saharan Africa (all income levels)"
  },
  "adminregion": {
    "id": "SSA",
    "value": "Sub-Saharan Africa (developing only)"
  },
  "incomeLevel": {
    "id": "LIC",
    "value": "Low income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Freetown",
  "longitude": "-13.2134",
  "latitude": "8.4821"
}, {
  "id": "SLV",
  "iso2Code": "SV",
  "name": "El Salvador",
  "region": {
    "id": "LCN",
    "value": "Latin America & Caribbean (all income levels)"
  },
  "adminregion": {
    "id": "LAC",
    "value": "Latin America & Caribbean (developing only)"
  },
  "incomeLevel": {
    "id": "LMC",
    "value": "Lower middle income"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "San Salvador",
  "longitude": "-89.2073",
  "latitude": "13.7034"
}, {
  "id": "SMR",
  "iso2Code": "SM",
  "name": "San Marino",
  "region": {
    "id": "ECS",
    "value": "Europe & Central Asia (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "NOC",
    "value": "High income: nonOECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "San Marino",
  "longitude": "12.4486",
  "latitude": "43.9322"
}, {
  "id": "SOM",
  "iso2Code": "SO",
  "name": "Somalia",
  "region": {
    "id": "SSF",
    "value": "Sub-Saharan Africa (all income levels)"
  },
  "adminregion": {
    "id": "SSA",
    "value": "Sub-Saharan Africa (developing only)"
  },
  "incomeLevel": {
    "id": "LIC",
    "value": "Low income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Mogadishu",
  "longitude": "45.3254",
  "latitude": "2.07515"
}, {
  "id": "SRB",
  "iso2Code": "RS",
  "name": "Serbia",
  "region": {
    "id": "ECS",
    "value": "Europe & Central Asia (all income levels)"
  },
  "adminregion": {
    "id": "ECA",
    "value": "Europe & Central Asia (developing only)"
  },
  "incomeLevel": {
    "id": "UMC",
    "value": "Upper middle income"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Belgrade",
  "longitude": "20.4656",
  "latitude": "44.8024"
}, {
  "id": "SSD",
  "iso2Code": "SS",
  "name": "South Sudan",
  "region": {
    "id": "SSF",
    "value": "Sub-Saharan Africa (all income levels)"
  },
  "adminregion": {
    "id": "SSA",
    "value": "Sub-Saharan Africa (developing only)"
  },
  "incomeLevel": {
    "id": "LMC",
    "value": "Lower middle income"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Juba",
  "longitude": "31.6",
  "latitude": "4.85"
}, {
  "id": "STP",
  "iso2Code": "ST",
  "name": "Sao Tome and Principe",
  "region": {
    "id": "SSF",
    "value": "Sub-Saharan Africa (all income levels)"
  },
  "adminregion": {
    "id": "SSA",
    "value": "Sub-Saharan Africa (developing only)"
  },
  "incomeLevel": {
    "id": "LMC",
    "value": "Lower middle income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Sao Tome",
  "longitude": "6.6071",
  "latitude": "0.20618"
}, {
  "id": "SUR",
  "iso2Code": "SR",
  "name": "Suriname",
  "region": {
    "id": "LCN",
    "value": "Latin America & Caribbean (all income levels)"
  },
  "adminregion": {
    "id": "LAC",
    "value": "Latin America & Caribbean (developing only)"
  },
  "incomeLevel": {
    "id": "UMC",
    "value": "Upper middle income"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Paramaribo",
  "longitude": "-55.1679",
  "latitude": "5.8232"
}, {
  "id": "SVK",
  "iso2Code": "SK",
  "name": "Slovak Republic",
  "region": {
    "id": "ECS",
    "value": "Europe & Central Asia (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "OEC",
    "value": "High income: OECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Bratislava",
  "longitude": "17.1073",
  "latitude": "48.1484"
}, {
  "id": "SVN",
  "iso2Code": "SI",
  "name": "Slovenia",
  "region": {
    "id": "ECS",
    "value": "Europe & Central Asia (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "OEC",
    "value": "High income: OECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Ljubljana",
  "longitude": "14.5044",
  "latitude": "46.0546"
}, {
  "id": "SWE",
  "iso2Code": "SE",
  "name": "Sweden",
  "region": {
    "id": "ECS",
    "value": "Europe & Central Asia (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "OEC",
    "value": "High income: OECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Stockholm",
  "longitude": "18.0645",
  "latitude": "59.3327"
}, {
  "id": "SWZ",
  "iso2Code": "SZ",
  "name": "Swaziland",
  "region": {
    "id": "SSF",
    "value": "Sub-Saharan Africa (all income levels)"
  },
  "adminregion": {
    "id": "SSA",
    "value": "Sub-Saharan Africa (developing only)"
  },
  "incomeLevel": {
    "id": "LMC",
    "value": "Lower middle income"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Mbabane",
  "longitude": "31.4659",
  "latitude": "-26.5225"
}, {
  "id": "SXM",
  "iso2Code": "SX",
  "name": "Sint Maarten (Dutch part)",
  "region": {
    "id": "LCN",
    "value": "Latin America & Caribbean (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "NOC",
    "value": "High income: nonOECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Philipsburg",
  "longitude": "",
  "latitude": ""
}, {
  "id": "SYC",
  "iso2Code": "SC",
  "name": "Seychelles",
  "region": {
    "id": "SSF",
    "value": "Sub-Saharan Africa (all income levels)"
  },
  "adminregion": {
    "id": "SSA",
    "value": "Sub-Saharan Africa (developing only)"
  },
  "incomeLevel": {
    "id": "UMC",
    "value": "Upper middle income"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Victoria",
  "longitude": "55.4466",
  "latitude": "-4.6309"
}, {
  "id": "SYR",
  "iso2Code": "SY",
  "name": "Syrian Arab Republic",
  "region": {
    "id": "MEA",
    "value": "Middle East & North Africa (all income levels)"
  },
  "adminregion": {
    "id": "MNA",
    "value": "Middle East & North Africa (developing only)"
  },
  "incomeLevel": {
    "id": "LMC",
    "value": "Lower middle income"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Damascus",
  "longitude": "36.3119",
  "latitude": "33.5146"
}, {
  "id": "TCA",
  "iso2Code": "TC",
  "name": "Turks and Caicos Islands",
  "region": {
    "id": "LCN",
    "value": "Latin America & Caribbean (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "NOC",
    "value": "High income: nonOECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Grand Turk",
  "longitude": "-71.141389",
  "latitude": "21.4602778"
}, {
  "id": "TCD",
  "iso2Code": "TD",
  "name": "Chad",
  "region": {
    "id": "SSF",
    "value": "Sub-Saharan Africa (all income levels)"
  },
  "adminregion": {
    "id": "SSA",
    "value": "Sub-Saharan Africa (developing only)"
  },
  "incomeLevel": {
    "id": "LIC",
    "value": "Low income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "N'Djamena",
  "longitude": "15.0445",
  "latitude": "12.1048"
}, {
  "id": "TGO",
  "iso2Code": "TG",
  "name": "Togo",
  "region": {
    "id": "SSF",
    "value": "Sub-Saharan Africa (all income levels)"
  },
  "adminregion": {
    "id": "SSA",
    "value": "Sub-Saharan Africa (developing only)"
  },
  "incomeLevel": {
    "id": "LIC",
    "value": "Low income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Lome",
  "longitude": "1.2255",
  "latitude": "6.1228"
}, {
  "id": "THA",
  "iso2Code": "TH",
  "name": "Thailand",
  "region": {
    "id": "EAS",
    "value": "East Asia & Pacific (all income levels)"
  },
  "adminregion": {
    "id": "EAP",
    "value": "East Asia & Pacific (developing only)"
  },
  "incomeLevel": {
    "id": "UMC",
    "value": "Upper middle income"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Bangkok",
  "longitude": "100.521",
  "latitude": "13.7308"
}, {
  "id": "TJK",
  "iso2Code": "TJ",
  "name": "Tajikistan",
  "region": {
    "id": "ECS",
    "value": "Europe & Central Asia (all income levels)"
  },
  "adminregion": {
    "id": "ECA",
    "value": "Europe & Central Asia (developing only)"
  },
  "incomeLevel": {
    "id": "LIC",
    "value": "Low income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Dushanbe",
  "longitude": "68.7864",
  "latitude": "38.5878"
}, {
  "id": "TKM",
  "iso2Code": "TM",
  "name": "Turkmenistan",
  "region": {
    "id": "ECS",
    "value": "Europe & Central Asia (all income levels)"
  },
  "adminregion": {
    "id": "ECA",
    "value": "Europe & Central Asia (developing only)"
  },
  "incomeLevel": {
    "id": "UMC",
    "value": "Upper middle income"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Ashgabat",
  "longitude": "58.3794",
  "latitude": "37.9509"
}, {
  "id": "TLS",
  "iso2Code": "TL",
  "name": "Timor-Leste",
  "region": {
    "id": "EAS",
    "value": "East Asia & Pacific (all income levels)"
  },
  "adminregion": {
    "id": "EAP",
    "value": "East Asia & Pacific (developing only)"
  },
  "incomeLevel": {
    "id": "LMC",
    "value": "Lower middle income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Dili",
  "longitude": "125.567",
  "latitude": "-8.56667"
}, {
  "id": "TON",
  "iso2Code": "TO",
  "name": "Tonga",
  "region": {
    "id": "EAS",
    "value": "East Asia & Pacific (all income levels)"
  },
  "adminregion": {
    "id": "EAP",
    "value": "East Asia & Pacific (developing only)"
  },
  "incomeLevel": {
    "id": "LMC",
    "value": "Lower middle income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Nuku'alofa",
  "longitude": "-175.216",
  "latitude": "-21.136"
}, {
  "id": "TTO",
  "iso2Code": "TT",
  "name": "Trinidad and Tobago",
  "region": {
    "id": "LCN",
    "value": "Latin America & Caribbean (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "NOC",
    "value": "High income: nonOECD"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Port-of-Spain",
  "longitude": "-61.4789",
  "latitude": "10.6596"
}, {
  "id": "TUN",
  "iso2Code": "TN",
  "name": "Tunisia",
  "region": {
    "id": "MEA",
    "value": "Middle East & North Africa (all income levels)"
  },
  "adminregion": {
    "id": "MNA",
    "value": "Middle East & North Africa (developing only)"
  },
  "incomeLevel": {
    "id": "UMC",
    "value": "Upper middle income"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Tunis",
  "longitude": "10.21",
  "latitude": "36.7899"
}, {
  "id": "TUR",
  "iso2Code": "TR",
  "name": "Turkey",
  "region": {
    "id": "ECS",
    "value": "Europe & Central Asia (all income levels)"
  },
  "adminregion": {
    "id": "ECA",
    "value": "Europe & Central Asia (developing only)"
  },
  "incomeLevel": {
    "id": "UMC",
    "value": "Upper middle income"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Ankara",
  "longitude": "32.3606",
  "latitude": "39.7153"
}, {
  "id": "TUV",
  "iso2Code": "TV",
  "name": "Tuvalu",
  "region": {
    "id": "EAS",
    "value": "East Asia & Pacific (all income levels)"
  },
  "adminregion": {
    "id": "EAP",
    "value": "East Asia & Pacific (developing only)"
  },
  "incomeLevel": {
    "id": "UMC",
    "value": "Upper middle income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Funafuti",
  "longitude": "179.089567",
  "latitude": "-8.6314877"
}, {
  "id": "TZA",
  "iso2Code": "TZ",
  "name": "Tanzania",
  "region": {
    "id": "SSF",
    "value": "Sub-Saharan Africa (all income levels)"
  },
  "adminregion": {
    "id": "SSA",
    "value": "Sub-Saharan Africa (developing only)"
  },
  "incomeLevel": {
    "id": "LIC",
    "value": "Low income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Dodoma",
  "longitude": "35.7382",
  "latitude": "-6.17486"
}, {
  "id": "UGA",
  "iso2Code": "UG",
  "name": "Uganda",
  "region": {
    "id": "SSF",
    "value": "Sub-Saharan Africa (all income levels)"
  },
  "adminregion": {
    "id": "SSA",
    "value": "Sub-Saharan Africa (developing only)"
  },
  "incomeLevel": {
    "id": "LIC",
    "value": "Low income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Kampala",
  "longitude": "32.5729",
  "latitude": "0.314269"
}, {
  "id": "UKR",
  "iso2Code": "UA",
  "name": "Ukraine",
  "region": {
    "id": "ECS",
    "value": "Europe & Central Asia (all income levels)"
  },
  "adminregion": {
    "id": "ECA",
    "value": "Europe & Central Asia (developing only)"
  },
  "incomeLevel": {
    "id": "LMC",
    "value": "Lower middle income"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Kiev",
  "longitude": "30.5038",
  "latitude": "50.4536"
}, {
  "id": "URY",
  "iso2Code": "UY",
  "name": "Uruguay",
  "region": {
    "id": "LCN",
    "value": "Latin America & Caribbean (all income levels)"
  },
  "adminregion": {
    "id": "LAC",
    "value": "Latin America & Caribbean (developing only)"
  },
  "incomeLevel": {
    "id": "UMC",
    "value": "Upper middle income"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Montevideo",
  "longitude": "-56.0675",
  "latitude": "-34.8941"
}, {
  "id": "USA",
  "iso2Code": "US",
  "name": "United States",
  "region": {
    "id": "NAC",
    "value": "North America"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "OEC",
    "value": "High income: OECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Washington D.C.",
  "longitude": "-77.032",
  "latitude": "38.8895"
}, {
  "id": "UZB",
  "iso2Code": "UZ",
  "name": "Uzbekistan",
  "region": {
    "id": "ECS",
    "value": "Europe & Central Asia (all income levels)"
  },
  "adminregion": {
    "id": "ECA",
    "value": "Europe & Central Asia (developing only)"
  },
  "incomeLevel": {
    "id": "LMC",
    "value": "Lower middle income"
  },
  "lendingType": {
    "id": "IDB",
    "value": "Blend"
  },
  "capitalCity": "Tashkent",
  "longitude": "69.269",
  "latitude": "41.3052"
}, {
  "id": "VCT",
  "iso2Code": "VC",
  "name": "St. Vincent and the Grenadines",
  "region": {
    "id": "LCN",
    "value": "Latin America & Caribbean (all income levels)"
  },
  "adminregion": {
    "id": "LAC",
    "value": "Latin America & Caribbean (developing only)"
  },
  "incomeLevel": {
    "id": "UMC",
    "value": "Upper middle income"
  },
  "lendingType": {
    "id": "IDB",
    "value": "Blend"
  },
  "capitalCity": "Kingstown",
  "longitude": "-61.2653",
  "latitude": "13.2035"
}, {
  "id": "VEN",
  "iso2Code": "VE",
  "name": "Venezuela, RB",
  "region": {
    "id": "LCN",
    "value": "Latin America & Caribbean (all income levels)"
  },
  "adminregion": {
    "id": "LAC",
    "value": "Latin America & Caribbean (developing only)"
  },
  "incomeLevel": {
    "id": "UMC",
    "value": "Upper middle income"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Caracas",
  "longitude": "-69.8371",
  "latitude": "9.08165"
}, {
  "id": "VIR",
  "iso2Code": "VI",
  "name": "Virgin Islands (U.S.)",
  "region": {
    "id": "LCN",
    "value": "Latin America & Caribbean (all income levels)"
  },
  "adminregion": {
    "id": "",
    "value": ""
  },
  "incomeLevel": {
    "id": "NOC",
    "value": "High income: nonOECD"
  },
  "lendingType": {
    "id": "LNX",
    "value": "Not classified"
  },
  "capitalCity": "Charlotte Amalie",
  "longitude": "-64.8963",
  "latitude": "18.3358"
}, {
  "id": "VNM",
  "iso2Code": "VN",
  "name": "Vietnam",
  "region": {
    "id": "EAS",
    "value": "East Asia & Pacific (all income levels)"
  },
  "adminregion": {
    "id": "EAP",
    "value": "East Asia & Pacific (developing only)"
  },
  "incomeLevel": {
    "id": "LMC",
    "value": "Lower middle income"
  },
  "lendingType": {
    "id": "IDB",
    "value": "Blend"
  },
  "capitalCity": "Hanoi",
  "longitude": "105.825",
  "latitude": "21.0069"
}, {
  "id": "VUT",
  "iso2Code": "VU",
  "name": "Vanuatu",
  "region": {
    "id": "EAS",
    "value": "East Asia & Pacific (all income levels)"
  },
  "adminregion": {
    "id": "EAP",
    "value": "East Asia & Pacific (developing only)"
  },
  "incomeLevel": {
    "id": "LMC",
    "value": "Lower middle income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Port-Vila",
  "longitude": "168.321",
  "latitude": "-17.7404"
}, {
  "id": "WSM",
  "iso2Code": "WS",
  "name": "Samoa",
  "region": {
    "id": "EAS",
    "value": "East Asia & Pacific (all income levels)"
  },
  "adminregion": {
    "id": "EAP",
    "value": "East Asia & Pacific (developing only)"
  },
  "incomeLevel": {
    "id": "LMC",
    "value": "Lower middle income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Apia",
  "longitude": "-171.752",
  "latitude": "-13.8314"
}, {
  "id": "YEM",
  "iso2Code": "YE",
  "name": "Yemen, Rep.",
  "region": {
    "id": "MEA",
    "value": "Middle East & North Africa (all income levels)"
  },
  "adminregion": {
    "id": "MNA",
    "value": "Middle East & North Africa (developing only)"
  },
  "incomeLevel": {
    "id": "LMC",
    "value": "Lower middle income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Sana'a",
  "longitude": "44.2075",
  "latitude": "15.352"
}, {
  "id": "ZAF",
  "iso2Code": "ZA",
  "name": "South Africa",
  "region": {
    "id": "SSF",
    "value": "Sub-Saharan Africa (all income levels)"
  },
  "adminregion": {
    "id": "SSA",
    "value": "Sub-Saharan Africa (developing only)"
  },
  "incomeLevel": {
    "id": "UMC",
    "value": "Upper middle income"
  },
  "lendingType": {
    "id": "IBD",
    "value": "IBRD"
  },
  "capitalCity": "Pretoria",
  "longitude": "28.1871",
  "latitude": "-25.746"
}, {
  "id": "ZMB",
  "iso2Code": "ZM",
  "name": "Zambia",
  "region": {
    "id": "SSF",
    "value": "Sub-Saharan Africa (all income levels)"
  },
  "adminregion": {
    "id": "SSA",
    "value": "Sub-Saharan Africa (developing only)"
  },
  "incomeLevel": {
    "id": "LMC",
    "value": "Lower middle income"
  },
  "lendingType": {
    "id": "IDX",
    "value": "IDA"
  },
  "capitalCity": "Lusaka",
  "longitude": "28.2937",
  "latitude": "-15.3982"
}, {
  "id": "ZWE",
  "iso2Code": "ZW",
  "name": "Zimbabwe",
  "region": {
    "id": "SSF",
    "value": "Sub-Saharan Africa (all income levels)"
  },
  "adminregion": {
    "id": "SSA",
    "value": "Sub-Saharan Africa (developing only)"
  },
  "incomeLevel": {
    "id": "LIC",
    "value": "Low income"
  },
  "lendingType": {
    "id": "IDB",
    "value": "Blend"
  },
  "capitalCity": "Harare",
  "longitude": "31.0672",
  "latitude": "-17.8312"
}]];

/***/ }),

/***/ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === "object" && typeof module !== "undefined" ? factory(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (exports) {
  "use strict";

  function createCommonjsModule(fn, module) {
    return module = {
      exports: {}
    }, fn(module, module.exports), module.exports;
  }

  var sparkMd5 = createCommonjsModule(function (module, exports) {
    (function (factory) {
      {
        module.exports = factory();
      }
    })(function (undefined) {
      var hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

      function md5cycle(x, k) {
        var a = x[0],
            b = x[1],
            c = x[2],
            d = x[3];
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
      }

      function md5blk(s) {
        var md5blks = [],
            i;

        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
        }

        return md5blks;
      }

      function md5blk_array(a) {
        var md5blks = [],
            i;

        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
        }

        return md5blks;
      }

      function md51(s) {
        var n = s.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk(s.substring(i - 64, i)));
        }

        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
        }

        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(state, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }

      function md51_array(a) {
        var n = a.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
        }

        a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= a[i] << (i % 4 << 3);
        }

        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(state, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }

      function rhex(n) {
        var s = "",
            j;

        for (j = 0; j < 4; j += 1) {
          s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15];
        }

        return s;
      }

      function hex(x) {
        var i;

        for (i = 0; i < x.length; i += 1) {
          x[i] = rhex(x[i]);
        }

        return x.join("");
      }

      if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") ;

      if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
        (function () {
          function clamp(val, length) {
            val = val | 0 || 0;

            if (val < 0) {
              return Math.max(val + length, 0);
            }

            return Math.min(val, length);
          }

          ArrayBuffer.prototype.slice = function (from, to) {
            var length = this.byteLength,
                begin = clamp(from, length),
                end = length,
                num,
                target,
                targetArray,
                sourceArray;

            if (to !== undefined) {
              end = clamp(to, length);
            }

            if (begin > end) {
              return new ArrayBuffer(0);
            }

            num = end - begin;
            target = new ArrayBuffer(num);
            targetArray = new Uint8Array(target);
            sourceArray = new Uint8Array(this, begin, num);
            targetArray.set(sourceArray);
            return target;
          };
        })();
      }

      function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
          str = unescape(encodeURIComponent(str));
        }

        return str;
      }

      function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length,
            buff = new ArrayBuffer(length),
            arr = new Uint8Array(buff),
            i;

        for (i = 0; i < length; i += 1) {
          arr[i] = str.charCodeAt(i);
        }

        return returnUInt8Array ? arr : buff;
      }

      function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff));
      }

      function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);
        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);
        return returnUInt8Array ? result : result.buffer;
      }

      function hexToBinaryString(hex) {
        var bytes = [],
            length = hex.length,
            x;

        for (x = 0; x < length - 1; x += 2) {
          bytes.push(parseInt(hex.substr(x, 2), 16));
        }

        return String.fromCharCode.apply(String, bytes);
      }

      function SparkMD5() {
        this.reset();
      }

      SparkMD5.prototype.append = function (str) {
        this.appendBinary(toUtf8(str));
        return this;
      };

      SparkMD5.prototype.appendBinary = function (contents) {
        this._buff += contents;
        this._length += contents.length;
        var length = this._buff.length,
            i;

        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
        }

        this._buff = this._buff.substring(i - 64);
        return this;
      };

      SparkMD5.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            i,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ret;

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3);
        }

        this._finish(tail, length);

        ret = hex(this._hash);

        if (raw) {
          ret = hexToBinaryString(ret);
        }

        this.reset();
        return ret;
      };

      SparkMD5.prototype.reset = function () {
        this._buff = "";
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };

      SparkMD5.prototype.getState = function () {
        return {
          buff: this._buff,
          length: this._length,
          hash: this._hash
        };
      };

      SparkMD5.prototype.setState = function (state) {
        this._buff = state.buff;
        this._length = state.length;
        this._hash = state.hash;
        return this;
      };

      SparkMD5.prototype.destroy = function () {
        delete this._hash;
        delete this._buff;
        delete this._length;
      };

      SparkMD5.prototype._finish = function (tail, length) {
        var i = length,
            tmp,
            lo,
            hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(this._hash, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = this._length * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this._hash, tail);
      };

      SparkMD5.hash = function (str, raw) {
        return SparkMD5.hashBinary(toUtf8(str), raw);
      };

      SparkMD5.hashBinary = function (content, raw) {
        var hash = md51(content),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };

      SparkMD5.ArrayBuffer = function () {
        this.reset();
      };

      SparkMD5.ArrayBuffer.prototype.append = function (arr) {
        var buff = concatenateArrayBuffers(this._buff.buffer, arr, true),
            length = buff.length,
            i;
        this._length += arr.byteLength;

        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
        }

        this._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this;
      };

      SparkMD5.ArrayBuffer.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            i,
            ret;

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff[i] << (i % 4 << 3);
        }

        this._finish(tail, length);

        ret = hex(this._hash);

        if (raw) {
          ret = hexToBinaryString(ret);
        }

        this.reset();
        return ret;
      };

      SparkMD5.ArrayBuffer.prototype.reset = function () {
        this._buff = new Uint8Array(0);
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };

      SparkMD5.ArrayBuffer.prototype.getState = function () {
        var state = SparkMD5.prototype.getState.call(this);
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state;
      };

      SparkMD5.ArrayBuffer.prototype.setState = function (state) {
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD5.prototype.setState.call(this, state);
      };

      SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
      SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;

      SparkMD5.ArrayBuffer.hash = function (arr, raw) {
        var hash = md51_array(new Uint8Array(arr)),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };

      return SparkMD5;
    });
  });

  var classCallCheck = function classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var fileSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;

  var FileChecksum = function () {
    createClass(FileChecksum, null, [{
      key: "create",
      value: function create(file, callback) {
        var instance = new FileChecksum(file);
        instance.create(callback);
      }
    }]);

    function FileChecksum(file) {
      classCallCheck(this, FileChecksum);
      this.file = file;
      this.chunkSize = 2097152;
      this.chunkCount = Math.ceil(this.file.size / this.chunkSize);
      this.chunkIndex = 0;
    }

    createClass(FileChecksum, [{
      key: "create",
      value: function create(callback) {
        var _this = this;

        this.callback = callback;
        this.md5Buffer = new sparkMd5.ArrayBuffer();
        this.fileReader = new FileReader();
        this.fileReader.addEventListener("load", function (event) {
          return _this.fileReaderDidLoad(event);
        });
        this.fileReader.addEventListener("error", function (event) {
          return _this.fileReaderDidError(event);
        });
        this.readNextChunk();
      }
    }, {
      key: "fileReaderDidLoad",
      value: function fileReaderDidLoad(event) {
        this.md5Buffer.append(event.target.result);

        if (!this.readNextChunk()) {
          var binaryDigest = this.md5Buffer.end(true);
          var base64digest = btoa(binaryDigest);
          this.callback(null, base64digest);
        }
      }
    }, {
      key: "fileReaderDidError",
      value: function fileReaderDidError(event) {
        this.callback("Error reading " + this.file.name);
      }
    }, {
      key: "readNextChunk",
      value: function readNextChunk() {
        if (this.chunkIndex < this.chunkCount || this.chunkIndex == 0 && this.chunkCount == 0) {
          var start = this.chunkIndex * this.chunkSize;
          var end = Math.min(start + this.chunkSize, this.file.size);
          var bytes = fileSlice.call(this.file, start, end);
          this.fileReader.readAsArrayBuffer(bytes);
          this.chunkIndex++;
          return true;
        } else {
          return false;
        }
      }
    }]);
    return FileChecksum;
  }();

  function getMetaValue(name) {
    var element = findElement(document.head, 'meta[name="' + name + '"]');

    if (element) {
      return element.getAttribute("content");
    }
  }

  function findElements(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }

    var elements = root.querySelectorAll(selector);
    return toArray$1(elements);
  }

  function findElement(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }

    return root.querySelector(selector);
  }

  function dispatchEvent(element, type) {
    var eventInit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var disabled = element.disabled;
    var bubbles = eventInit.bubbles,
        cancelable = eventInit.cancelable,
        detail = eventInit.detail;
    var event = document.createEvent("Event");
    event.initEvent(type, bubbles || true, cancelable || true);
    event.detail = detail || {};

    try {
      element.disabled = false;
      element.dispatchEvent(event);
    } finally {
      element.disabled = disabled;
    }

    return event;
  }

  function toArray$1(value) {
    if (Array.isArray(value)) {
      return value;
    } else if (Array.from) {
      return Array.from(value);
    } else {
      return [].slice.call(value);
    }
  }

  var BlobRecord = function () {
    function BlobRecord(file, checksum, url) {
      var _this = this;

      classCallCheck(this, BlobRecord);
      this.file = file;
      this.attributes = {
        filename: file.name,
        content_type: file.type || "application/octet-stream",
        byte_size: file.size,
        checksum: checksum
      };
      this.xhr = new XMLHttpRequest();
      this.xhr.open("POST", url, true);
      this.xhr.responseType = "json";
      this.xhr.setRequestHeader("Content-Type", "application/json");
      this.xhr.setRequestHeader("Accept", "application/json");
      this.xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      var csrfToken = getMetaValue("csrf-token");

      if (csrfToken != undefined) {
        this.xhr.setRequestHeader("X-CSRF-Token", csrfToken);
      }

      this.xhr.addEventListener("load", function (event) {
        return _this.requestDidLoad(event);
      });
      this.xhr.addEventListener("error", function (event) {
        return _this.requestDidError(event);
      });
    }

    createClass(BlobRecord, [{
      key: "create",
      value: function create(callback) {
        this.callback = callback;
        this.xhr.send(JSON.stringify({
          blob: this.attributes
        }));
      }
    }, {
      key: "requestDidLoad",
      value: function requestDidLoad(event) {
        if (this.status >= 200 && this.status < 300) {
          var response = this.response;
          var direct_upload = response.direct_upload;
          delete response.direct_upload;
          this.attributes = response;
          this.directUploadData = direct_upload;
          this.callback(null, this.toJSON());
        } else {
          this.requestDidError(event);
        }
      }
    }, {
      key: "requestDidError",
      value: function requestDidError(event) {
        this.callback('Error creating Blob for "' + this.file.name + '". Status: ' + this.status);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var result = {};

        for (var key in this.attributes) {
          result[key] = this.attributes[key];
        }

        return result;
      }
    }, {
      key: "status",
      get: function get$$1() {
        return this.xhr.status;
      }
    }, {
      key: "response",
      get: function get$$1() {
        var _xhr = this.xhr,
            responseType = _xhr.responseType,
            response = _xhr.response;

        if (responseType == "json") {
          return response;
        } else {
          return JSON.parse(response);
        }
      }
    }]);
    return BlobRecord;
  }();

  var BlobUpload = function () {
    function BlobUpload(blob) {
      var _this = this;

      classCallCheck(this, BlobUpload);
      this.blob = blob;
      this.file = blob.file;
      var _blob$directUploadDat = blob.directUploadData,
          url = _blob$directUploadDat.url,
          headers = _blob$directUploadDat.headers;
      this.xhr = new XMLHttpRequest();
      this.xhr.open("PUT", url, true);
      this.xhr.responseType = "text";

      for (var key in headers) {
        this.xhr.setRequestHeader(key, headers[key]);
      }

      this.xhr.addEventListener("load", function (event) {
        return _this.requestDidLoad(event);
      });
      this.xhr.addEventListener("error", function (event) {
        return _this.requestDidError(event);
      });
    }

    createClass(BlobUpload, [{
      key: "create",
      value: function create(callback) {
        this.callback = callback;
        this.xhr.send(this.file.slice());
      }
    }, {
      key: "requestDidLoad",
      value: function requestDidLoad(event) {
        var _xhr = this.xhr,
            status = _xhr.status,
            response = _xhr.response;

        if (status >= 200 && status < 300) {
          this.callback(null, response);
        } else {
          this.requestDidError(event);
        }
      }
    }, {
      key: "requestDidError",
      value: function requestDidError(event) {
        this.callback('Error storing "' + this.file.name + '". Status: ' + this.xhr.status);
      }
    }]);
    return BlobUpload;
  }();

  var id = 0;

  var DirectUpload = function () {
    function DirectUpload(file, url, delegate) {
      classCallCheck(this, DirectUpload);
      this.id = ++id;
      this.file = file;
      this.url = url;
      this.delegate = delegate;
    }

    createClass(DirectUpload, [{
      key: "create",
      value: function create(callback) {
        var _this = this;

        FileChecksum.create(this.file, function (error, checksum) {
          if (error) {
            callback(error);
            return;
          }

          var blob = new BlobRecord(_this.file, checksum, _this.url);
          notify(_this.delegate, "directUploadWillCreateBlobWithXHR", blob.xhr);
          blob.create(function (error) {
            if (error) {
              callback(error);
            } else {
              var upload = new BlobUpload(blob);
              notify(_this.delegate, "directUploadWillStoreFileWithXHR", upload.xhr);
              upload.create(function (error) {
                if (error) {
                  callback(error);
                } else {
                  callback(null, blob.toJSON());
                }
              });
            }
          });
        });
      }
    }]);
    return DirectUpload;
  }();

  function notify(object, methodName) {
    if (object && typeof object[methodName] == "function") {
      for (var _len = arguments.length, messages = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        messages[_key - 2] = arguments[_key];
      }

      return object[methodName].apply(object, messages);
    }
  }

  var DirectUploadController = function () {
    function DirectUploadController(input, file) {
      classCallCheck(this, DirectUploadController);
      this.input = input;
      this.file = file;
      this.directUpload = new DirectUpload(this.file, this.url, this);
      this.dispatch("initialize");
    }

    createClass(DirectUploadController, [{
      key: "start",
      value: function start(callback) {
        var _this = this;

        var hiddenInput = document.createElement("input");
        hiddenInput.type = "hidden";
        hiddenInput.name = this.input.name;
        this.input.insertAdjacentElement("beforebegin", hiddenInput);
        this.dispatch("start");
        this.directUpload.create(function (error, attributes) {
          if (error) {
            hiddenInput.parentNode.removeChild(hiddenInput);

            _this.dispatchError(error);
          } else {
            hiddenInput.value = attributes.signed_id;
          }

          _this.dispatch("end");

          callback(error);
        });
      }
    }, {
      key: "uploadRequestDidProgress",
      value: function uploadRequestDidProgress(event) {
        var progress = event.loaded / event.total * 100;

        if (progress) {
          this.dispatch("progress", {
            progress: progress
          });
        }
      }
    }, {
      key: "dispatch",
      value: function dispatch(name) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        detail.file = this.file;
        detail.id = this.directUpload.id;
        return dispatchEvent(this.input, "direct-upload:" + name, {
          detail: detail
        });
      }
    }, {
      key: "dispatchError",
      value: function dispatchError(error) {
        var event = this.dispatch("error", {
          error: error
        });

        if (!event.defaultPrevented) {
          alert(error);
        }
      }
    }, {
      key: "directUploadWillCreateBlobWithXHR",
      value: function directUploadWillCreateBlobWithXHR(xhr) {
        this.dispatch("before-blob-request", {
          xhr: xhr
        });
      }
    }, {
      key: "directUploadWillStoreFileWithXHR",
      value: function directUploadWillStoreFileWithXHR(xhr) {
        var _this2 = this;

        this.dispatch("before-storage-request", {
          xhr: xhr
        });
        xhr.upload.addEventListener("progress", function (event) {
          return _this2.uploadRequestDidProgress(event);
        });
      }
    }, {
      key: "url",
      get: function get$$1() {
        return this.input.getAttribute("data-direct-upload-url");
      }
    }]);
    return DirectUploadController;
  }();

  var inputSelector = "input[type=file][data-direct-upload-url]:not([disabled])";

  var DirectUploadsController = function () {
    function DirectUploadsController(form) {
      classCallCheck(this, DirectUploadsController);
      this.form = form;
      this.inputs = findElements(form, inputSelector).filter(function (input) {
        return input.files.length;
      });
    }

    createClass(DirectUploadsController, [{
      key: "start",
      value: function start(callback) {
        var _this = this;

        var controllers = this.createDirectUploadControllers();

        var startNextController = function startNextController() {
          var controller = controllers.shift();

          if (controller) {
            controller.start(function (error) {
              if (error) {
                callback(error);

                _this.dispatch("end");
              } else {
                startNextController();
              }
            });
          } else {
            callback();

            _this.dispatch("end");
          }
        };

        this.dispatch("start");
        startNextController();
      }
    }, {
      key: "createDirectUploadControllers",
      value: function createDirectUploadControllers() {
        var controllers = [];
        this.inputs.forEach(function (input) {
          toArray$1(input.files).forEach(function (file) {
            var controller = new DirectUploadController(input, file);
            controllers.push(controller);
          });
        });
        return controllers;
      }
    }, {
      key: "dispatch",
      value: function dispatch(name) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return dispatchEvent(this.form, "direct-uploads:" + name, {
          detail: detail
        });
      }
    }]);
    return DirectUploadsController;
  }();

  var processingAttribute = "data-direct-uploads-processing";
  var submitButtonsByForm = new WeakMap();
  var started = false;

  function start() {
    if (!started) {
      started = true;
      document.addEventListener("click", didClick, true);
      document.addEventListener("submit", didSubmitForm);
      document.addEventListener("ajax:before", didSubmitRemoteElement);
    }
  }

  function didClick(event) {
    var target = event.target;

    if ((target.tagName == "INPUT" || target.tagName == "BUTTON") && target.type == "submit" && target.form) {
      submitButtonsByForm.set(target.form, target);
    }
  }

  function didSubmitForm(event) {
    handleFormSubmissionEvent(event);
  }

  function didSubmitRemoteElement(event) {
    if (event.target.tagName == "FORM") {
      handleFormSubmissionEvent(event);
    }
  }

  function handleFormSubmissionEvent(event) {
    var form = event.target;

    if (form.hasAttribute(processingAttribute)) {
      event.preventDefault();
      return;
    }

    var controller = new DirectUploadsController(form);
    var inputs = controller.inputs;

    if (inputs.length) {
      event.preventDefault();
      form.setAttribute(processingAttribute, "");
      inputs.forEach(disable);
      controller.start(function (error) {
        form.removeAttribute(processingAttribute);

        if (error) {
          inputs.forEach(enable);
        } else {
          submitForm(form);
        }
      });
    }
  }

  function submitForm(form) {
    var button = submitButtonsByForm.get(form) || findElement(form, "input[type=submit], button[type=submit]");

    if (button) {
      var _button = button,
          disabled = _button.disabled;
      button.disabled = false;
      button.focus();
      button.click();
      button.disabled = disabled;
    } else {
      button = document.createElement("input");
      button.type = "submit";
      button.style.display = "none";
      form.appendChild(button);
      button.click();
      form.removeChild(button);
    }

    submitButtonsByForm.delete(form);
  }

  function disable(input) {
    input.disabled = true;
  }

  function enable(input) {
    input.disabled = false;
  }

  function autostart() {
    if (window.ActiveStorage) {
      start();
    }
  }

  setTimeout(autostart, 1);
  exports.start = start;
  exports.DirectUpload = DirectUpload;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
});

/***/ }),

/***/ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js":
/*!******************************************************************!*\
  !*** ./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery, module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
Unobtrusive JavaScript
https://github.com/rails/rails/blob/main/actionview/app/assets/javascripts
Released under the MIT license
 */
;
(function () {
  var context = this;
  (function () {
    (function () {
      this.Rails = {
        linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]',
        buttonClickSelector: {
          selector: 'button[data-remote]:not([form]), button[data-confirm]:not([form])',
          exclude: 'form button'
        },
        inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',
        formSubmitSelector: 'form',
        formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',
        formDisableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',
        formEnableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',
        fileInputSelector: 'input[name][type=file]:not([disabled])',
        linkDisableSelector: 'a[data-disable-with], a[data-disable]',
        buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]'
      };
    }).call(this);
  }).call(context);
  var Rails = context.Rails;
  (function () {
    (function () {
      var nonce;
      nonce = null;

      Rails.loadCSPNonce = function () {
        var ref;
        return nonce = (ref = document.querySelector("meta[name=csp-nonce]")) != null ? ref.content : void 0;
      };

      Rails.cspNonce = function () {
        return nonce != null ? nonce : Rails.loadCSPNonce();
      };
    }).call(this);
    (function () {
      var expando, m;
      m = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector;

      Rails.matches = function (element, selector) {
        if (selector.exclude != null) {
          return m.call(element, selector.selector) && !m.call(element, selector.exclude);
        } else {
          return m.call(element, selector);
        }
      };

      expando = '_ujsData';

      Rails.getData = function (element, key) {
        var ref;
        return (ref = element[expando]) != null ? ref[key] : void 0;
      };

      Rails.setData = function (element, key, value) {
        if (element[expando] == null) {
          element[expando] = {};
        }

        return element[expando][key] = value;
      };

      Rails.$ = function (selector) {
        return Array.prototype.slice.call(document.querySelectorAll(selector));
      };
    }).call(this);
    (function () {
      var $, csrfParam, csrfToken;
      $ = Rails.$;

      csrfToken = Rails.csrfToken = function () {
        var meta;
        meta = document.querySelector('meta[name=csrf-token]');
        return meta && meta.content;
      };

      csrfParam = Rails.csrfParam = function () {
        var meta;
        meta = document.querySelector('meta[name=csrf-param]');
        return meta && meta.content;
      };

      Rails.CSRFProtection = function (xhr) {
        var token;
        token = csrfToken();

        if (token != null) {
          return xhr.setRequestHeader('X-CSRF-Token', token);
        }
      };

      Rails.refreshCSRFTokens = function () {
        var param, token;
        token = csrfToken();
        param = csrfParam();

        if (token != null && param != null) {
          return $('form input[name="' + param + '"]').forEach(function (input) {
            return input.value = token;
          });
        }
      };
    }).call(this);
    (function () {
      var CustomEvent, fire, matches, preventDefault;
      matches = Rails.matches;
      CustomEvent = window.CustomEvent;

      if (typeof CustomEvent !== 'function') {
        CustomEvent = function CustomEvent(event, params) {
          var evt;
          evt = document.createEvent('CustomEvent');
          evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
          return evt;
        };

        CustomEvent.prototype = window.Event.prototype;
        preventDefault = CustomEvent.prototype.preventDefault;

        CustomEvent.prototype.preventDefault = function () {
          var result;
          result = preventDefault.call(this);

          if (this.cancelable && !this.defaultPrevented) {
            Object.defineProperty(this, 'defaultPrevented', {
              get: function get() {
                return true;
              }
            });
          }

          return result;
        };
      }

      fire = Rails.fire = function (obj, name, data) {
        var event;
        event = new CustomEvent(name, {
          bubbles: true,
          cancelable: true,
          detail: data
        });
        obj.dispatchEvent(event);
        return !event.defaultPrevented;
      };

      Rails.stopEverything = function (e) {
        fire(e.target, 'ujs:everythingStopped');
        e.preventDefault();
        e.stopPropagation();
        return e.stopImmediatePropagation();
      };

      Rails.delegate = function (element, selector, eventType, handler) {
        return element.addEventListener(eventType, function (e) {
          var target;
          target = e.target;

          while (!(!(target instanceof Element) || matches(target, selector))) {
            target = target.parentNode;
          }

          if (target instanceof Element && handler.call(target, e) === false) {
            e.preventDefault();
            return e.stopPropagation();
          }
        });
      };
    }).call(this);
    (function () {
      var AcceptHeaders, CSRFProtection, createXHR, cspNonce, fire, prepareOptions, processResponse;
      cspNonce = Rails.cspNonce, CSRFProtection = Rails.CSRFProtection, fire = Rails.fire;
      AcceptHeaders = {
        '*': '*/*',
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript',
        script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
      };

      Rails.ajax = function (options) {
        var xhr;
        options = prepareOptions(options);
        xhr = createXHR(options, function () {
          var ref, response;
          response = processResponse((ref = xhr.response) != null ? ref : xhr.responseText, xhr.getResponseHeader('Content-Type'));

          if (Math.floor(xhr.status / 100) === 2) {
            if (typeof options.success === "function") {
              options.success(response, xhr.statusText, xhr);
            }
          } else {
            if (typeof options.error === "function") {
              options.error(response, xhr.statusText, xhr);
            }
          }

          return typeof options.complete === "function" ? options.complete(xhr, xhr.statusText) : void 0;
        });

        if (options.beforeSend != null && !options.beforeSend(xhr, options)) {
          return false;
        }

        if (xhr.readyState === XMLHttpRequest.OPENED) {
          return xhr.send(options.data);
        }
      };

      prepareOptions = function prepareOptions(options) {
        options.url = options.url || location.href;
        options.type = options.type.toUpperCase();

        if (options.type === 'GET' && options.data) {
          if (options.url.indexOf('?') < 0) {
            options.url += '?' + options.data;
          } else {
            options.url += '&' + options.data;
          }
        }

        if (AcceptHeaders[options.dataType] == null) {
          options.dataType = '*';
        }

        options.accept = AcceptHeaders[options.dataType];

        if (options.dataType !== '*') {
          options.accept += ', */*; q=0.01';
        }

        return options;
      };

      createXHR = function createXHR(options, done) {
        var xhr;
        xhr = new XMLHttpRequest();
        xhr.open(options.type, options.url, true);
        xhr.setRequestHeader('Accept', options.accept);

        if (typeof options.data === 'string') {
          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        }

        if (!options.crossDomain) {
          xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
          CSRFProtection(xhr);
        }

        xhr.withCredentials = !!options.withCredentials;

        xhr.onreadystatechange = function () {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            return done(xhr);
          }
        };

        return xhr;
      };

      processResponse = function processResponse(response, type) {
        var parser, script;

        if (typeof response === 'string' && typeof type === 'string') {
          if (type.match(/\bjson\b/)) {
            try {
              response = JSON.parse(response);
            } catch (error) {}
          } else if (type.match(/\b(?:java|ecma)script\b/)) {
            script = document.createElement('script');
            script.setAttribute('nonce', cspNonce());
            script.text = response;
            document.head.appendChild(script).parentNode.removeChild(script);
          } else if (type.match(/\b(xml|html|svg)\b/)) {
            parser = new DOMParser();
            type = type.replace(/;.+/, '');

            try {
              response = parser.parseFromString(response, type);
            } catch (error) {}
          }
        }

        return response;
      };

      Rails.href = function (element) {
        return element.href;
      };

      Rails.isCrossDomain = function (url) {
        var e, originAnchor, urlAnchor;
        originAnchor = document.createElement('a');
        originAnchor.href = location.href;
        urlAnchor = document.createElement('a');

        try {
          urlAnchor.href = url;
          return !((!urlAnchor.protocol || urlAnchor.protocol === ':') && !urlAnchor.host || originAnchor.protocol + '//' + originAnchor.host === urlAnchor.protocol + '//' + urlAnchor.host);
        } catch (error) {
          e = error;
          return true;
        }
      };
    }).call(this);
    (function () {
      var matches, toArray;
      matches = Rails.matches;

      toArray = function toArray(e) {
        return Array.prototype.slice.call(e);
      };

      Rails.serializeElement = function (element, additionalParam) {
        var inputs, params;
        inputs = [element];

        if (matches(element, 'form')) {
          inputs = toArray(element.elements);
        }

        params = [];
        inputs.forEach(function (input) {
          if (!input.name || input.disabled) {
            return;
          }

          if (matches(input, 'fieldset[disabled] *')) {
            return;
          }

          if (matches(input, 'select')) {
            return toArray(input.options).forEach(function (option) {
              if (option.selected) {
                return params.push({
                  name: input.name,
                  value: option.value
                });
              }
            });
          } else if (input.checked || ['radio', 'checkbox', 'submit'].indexOf(input.type) === -1) {
            return params.push({
              name: input.name,
              value: input.value
            });
          }
        });

        if (additionalParam) {
          params.push(additionalParam);
        }

        return params.map(function (param) {
          if (param.name != null) {
            return encodeURIComponent(param.name) + "=" + encodeURIComponent(param.value);
          } else {
            return param;
          }
        }).join('&');
      };

      Rails.formElements = function (form, selector) {
        if (matches(form, 'form')) {
          return toArray(form.elements).filter(function (el) {
            return matches(el, selector);
          });
        } else {
          return toArray(form.querySelectorAll(selector));
        }
      };
    }).call(this);
    (function () {
      var allowAction, fire, stopEverything;
      fire = Rails.fire, stopEverything = Rails.stopEverything;

      Rails.handleConfirm = function (e) {
        if (!allowAction(this)) {
          return stopEverything(e);
        }
      };

      Rails.confirm = function (message, element) {
        return confirm(message);
      };

      allowAction = function allowAction(element) {
        var answer, callback, message;
        message = element.getAttribute('data-confirm');

        if (!message) {
          return true;
        }

        answer = false;

        if (fire(element, 'confirm')) {
          try {
            answer = Rails.confirm(message, element);
          } catch (error) {}

          callback = fire(element, 'confirm:complete', [answer]);
        }

        return answer && callback;
      };
    }).call(this);
    (function () {
      var disableFormElement, disableFormElements, disableLinkElement, enableFormElement, enableFormElements, enableLinkElement, formElements, getData, isXhrRedirect, matches, setData, stopEverything;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, stopEverything = Rails.stopEverything, formElements = Rails.formElements;

      Rails.handleDisabledElement = function (e) {
        var element;
        element = this;

        if (element.disabled) {
          return stopEverything(e);
        }
      };

      Rails.enableElement = function (e) {
        var element;

        if (e instanceof Event) {
          if (isXhrRedirect(e)) {
            return;
          }

          element = e.target;
        } else {
          element = e;
        }

        if (matches(element, Rails.linkDisableSelector)) {
          return enableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formEnableSelector)) {
          return enableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return enableFormElements(element);
        }
      };

      Rails.disableElement = function (e) {
        var element;
        element = e instanceof Event ? e.target : e;

        if (matches(element, Rails.linkDisableSelector)) {
          return disableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formDisableSelector)) {
          return disableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return disableFormElements(element);
        }
      };

      disableLinkElement = function disableLinkElement(element) {
        var replacement;

        if (getData(element, 'ujs:disabled')) {
          return;
        }

        replacement = element.getAttribute('data-disable-with');

        if (replacement != null) {
          setData(element, 'ujs:enable-with', element.innerHTML);
          element.innerHTML = replacement;
        }

        element.addEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', true);
      };

      enableLinkElement = function enableLinkElement(element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');

        if (originalText != null) {
          element.innerHTML = originalText;
          setData(element, 'ujs:enable-with', null);
        }

        element.removeEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', null);
      };

      disableFormElements = function disableFormElements(form) {
        return formElements(form, Rails.formDisableSelector).forEach(disableFormElement);
      };

      disableFormElement = function disableFormElement(element) {
        var replacement;

        if (getData(element, 'ujs:disabled')) {
          return;
        }

        replacement = element.getAttribute('data-disable-with');

        if (replacement != null) {
          if (matches(element, 'button')) {
            setData(element, 'ujs:enable-with', element.innerHTML);
            element.innerHTML = replacement;
          } else {
            setData(element, 'ujs:enable-with', element.value);
            element.value = replacement;
          }
        }

        element.disabled = true;
        return setData(element, 'ujs:disabled', true);
      };

      enableFormElements = function enableFormElements(form) {
        return formElements(form, Rails.formEnableSelector).forEach(enableFormElement);
      };

      enableFormElement = function enableFormElement(element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');

        if (originalText != null) {
          if (matches(element, 'button')) {
            element.innerHTML = originalText;
          } else {
            element.value = originalText;
          }

          setData(element, 'ujs:enable-with', null);
        }

        element.disabled = false;
        return setData(element, 'ujs:disabled', null);
      };

      isXhrRedirect = function isXhrRedirect(event) {
        var ref, xhr;
        xhr = (ref = event.detail) != null ? ref[0] : void 0;
        return (xhr != null ? xhr.getResponseHeader("X-Xhr-Redirect") : void 0) != null;
      };
    }).call(this);
    (function () {
      var stopEverything;
      stopEverything = Rails.stopEverything;

      Rails.handleMethod = function (e) {
        var csrfParam, csrfToken, form, formContent, href, link, method;
        link = this;
        method = link.getAttribute('data-method');

        if (!method) {
          return;
        }

        href = Rails.href(link);
        csrfToken = Rails.csrfToken();
        csrfParam = Rails.csrfParam();
        form = document.createElement('form');
        formContent = "<input name='_method' value='" + method + "' type='hidden' />";

        if (csrfParam != null && csrfToken != null && !Rails.isCrossDomain(href)) {
          formContent += "<input name='" + csrfParam + "' value='" + csrfToken + "' type='hidden' />";
        }

        formContent += '<input type="submit" />';
        form.method = 'post';
        form.action = href;
        form.target = link.target;
        form.innerHTML = formContent;
        form.style.display = 'none';
        document.body.appendChild(form);
        form.querySelector('[type="submit"]').click();
        return stopEverything(e);
      };
    }).call(this);
    (function () {
      var ajax,
          fire,
          getData,
          isCrossDomain,
          isRemote,
          matches,
          serializeElement,
          setData,
          stopEverything,
          slice = [].slice;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, fire = Rails.fire, stopEverything = Rails.stopEverything, ajax = Rails.ajax, isCrossDomain = Rails.isCrossDomain, serializeElement = Rails.serializeElement;

      isRemote = function isRemote(element) {
        var value;
        value = element.getAttribute('data-remote');
        return value != null && value !== 'false';
      };

      Rails.handleRemote = function (e) {
        var button, data, dataType, element, method, url, withCredentials;
        element = this;

        if (!isRemote(element)) {
          return true;
        }

        if (!fire(element, 'ajax:before')) {
          fire(element, 'ajax:stopped');
          return false;
        }

        withCredentials = element.getAttribute('data-with-credentials');
        dataType = element.getAttribute('data-type') || 'script';

        if (matches(element, Rails.formSubmitSelector)) {
          button = getData(element, 'ujs:submit-button');
          method = getData(element, 'ujs:submit-button-formmethod') || element.method;
          url = getData(element, 'ujs:submit-button-formaction') || element.getAttribute('action') || location.href;

          if (method.toUpperCase() === 'GET') {
            url = url.replace(/\?.*$/, '');
          }

          if (element.enctype === 'multipart/form-data') {
            data = new FormData(element);

            if (button != null) {
              data.append(button.name, button.value);
            }
          } else {
            data = serializeElement(element, button);
          }

          setData(element, 'ujs:submit-button', null);
          setData(element, 'ujs:submit-button-formmethod', null);
          setData(element, 'ujs:submit-button-formaction', null);
        } else if (matches(element, Rails.buttonClickSelector) || matches(element, Rails.inputChangeSelector)) {
          method = element.getAttribute('data-method');
          url = element.getAttribute('data-url');
          data = serializeElement(element, element.getAttribute('data-params'));
        } else {
          method = element.getAttribute('data-method');
          url = Rails.href(element);
          data = element.getAttribute('data-params');
        }

        ajax({
          type: method || 'GET',
          url: url,
          data: data,
          dataType: dataType,
          beforeSend: function beforeSend(xhr, options) {
            if (fire(element, 'ajax:beforeSend', [xhr, options])) {
              return fire(element, 'ajax:send', [xhr]);
            } else {
              fire(element, 'ajax:stopped');
              return false;
            }
          },
          success: function success() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:success', args);
          },
          error: function error() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:error', args);
          },
          complete: function complete() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:complete', args);
          },
          crossDomain: isCrossDomain(url),
          withCredentials: withCredentials != null && withCredentials !== 'false'
        });
        return stopEverything(e);
      };

      Rails.formSubmitButtonClick = function (e) {
        var button, form;
        button = this;
        form = button.form;

        if (!form) {
          return;
        }

        if (button.name) {
          setData(form, 'ujs:submit-button', {
            name: button.name,
            value: button.value
          });
        }

        setData(form, 'ujs:formnovalidate-button', button.formNoValidate);
        setData(form, 'ujs:submit-button-formaction', button.getAttribute('formaction'));
        return setData(form, 'ujs:submit-button-formmethod', button.getAttribute('formmethod'));
      };

      Rails.preventInsignificantClick = function (e) {
        var data, insignificantMetaClick, link, metaClick, method, nonPrimaryMouseClick;
        link = this;
        method = (link.getAttribute('data-method') || 'GET').toUpperCase();
        data = link.getAttribute('data-params');
        metaClick = e.metaKey || e.ctrlKey;
        insignificantMetaClick = metaClick && method === 'GET' && !data;
        nonPrimaryMouseClick = e.button != null && e.button !== 0;

        if (nonPrimaryMouseClick || insignificantMetaClick) {
          return e.stopImmediatePropagation();
        }
      };
    }).call(this);
    (function () {
      var $, CSRFProtection, delegate, disableElement, enableElement, fire, formSubmitButtonClick, getData, handleConfirm, handleDisabledElement, handleMethod, handleRemote, loadCSPNonce, preventInsignificantClick, refreshCSRFTokens;
      fire = Rails.fire, delegate = Rails.delegate, getData = Rails.getData, $ = Rails.$, refreshCSRFTokens = Rails.refreshCSRFTokens, CSRFProtection = Rails.CSRFProtection, loadCSPNonce = Rails.loadCSPNonce, enableElement = Rails.enableElement, disableElement = Rails.disableElement, handleDisabledElement = Rails.handleDisabledElement, handleConfirm = Rails.handleConfirm, preventInsignificantClick = Rails.preventInsignificantClick, handleRemote = Rails.handleRemote, formSubmitButtonClick = Rails.formSubmitButtonClick, handleMethod = Rails.handleMethod;

      if (typeof jQuery !== "undefined" && jQuery !== null && jQuery.ajax != null) {
        if (jQuery.rails) {
          throw new Error('If you load both jquery_ujs and rails-ujs, use rails-ujs only.');
        }

        jQuery.rails = Rails;
        jQuery.ajaxPrefilter(function (options, originalOptions, xhr) {
          if (!options.crossDomain) {
            return CSRFProtection(xhr);
          }
        });
      }

      Rails.start = function () {
        if (window._rails_loaded) {
          throw new Error('rails-ujs has already been loaded!');
        }

        window.addEventListener('pageshow', function () {
          $(Rails.formEnableSelector).forEach(function (el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
          return $(Rails.linkDisableSelector).forEach(function (el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
        });
        delegate(document, Rails.linkDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.linkDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.linkClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.linkClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.linkClickSelector, 'click', handleConfirm);
        delegate(document, Rails.linkClickSelector, 'click', disableElement);
        delegate(document, Rails.linkClickSelector, 'click', handleRemote);
        delegate(document, Rails.linkClickSelector, 'click', handleMethod);
        delegate(document, Rails.buttonClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.buttonClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleConfirm);
        delegate(document, Rails.buttonClickSelector, 'click', disableElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleRemote);
        delegate(document, Rails.inputChangeSelector, 'change', handleDisabledElement);
        delegate(document, Rails.inputChangeSelector, 'change', handleConfirm);
        delegate(document, Rails.inputChangeSelector, 'change', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', handleDisabledElement);
        delegate(document, Rails.formSubmitSelector, 'submit', handleConfirm);
        delegate(document, Rails.formSubmitSelector, 'submit', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', function (e) {
          return setTimeout(function () {
            return disableElement(e);
          }, 13);
        });
        delegate(document, Rails.formSubmitSelector, 'ajax:send', disableElement);
        delegate(document, Rails.formSubmitSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.formInputClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.formInputClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.formInputClickSelector, 'click', handleConfirm);
        delegate(document, Rails.formInputClickSelector, 'click', formSubmitButtonClick);
        document.addEventListener('DOMContentLoaded', refreshCSRFTokens);
        document.addEventListener('DOMContentLoaded', loadCSPNonce);
        return window._rails_loaded = true;
      };

      if (window.Rails === Rails && fire(document, 'rails:attachBindings')) {
        Rails.start();
      }
    }).call(this);
  }).call(this);

  if (( false ? undefined : _typeof(module)) === "object" && module.exports) {
    module.exports = Rails;
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (Rails),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
}).call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery/src/jquery */ "./node_modules/jquery/src/jquery.js"), __webpack_require__(/*! ./../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/jquery/external/sizzle/dist/sizzle.js":
/*!************************************************************!*\
  !*** ./node_modules/jquery/external/sizzle/dist/sizzle.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Sizzle CSS Selector Engine v2.3.6
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2021-02-16
 */
(function (window) {
  var i,
      support,
      Expr,
      getText,
      isXML,
      tokenize,
      compile,
      select,
      outermostContext,
      sortInput,
      hasDuplicate,
      // Local document vars
  setDocument,
      document,
      docElem,
      documentIsHTML,
      rbuggyQSA,
      rbuggyMatches,
      matches,
      contains,
      // Instance-specific data
  expando = "sizzle" + 1 * new Date(),
      preferredDoc = window.document,
      dirruns = 0,
      done = 0,
      classCache = createCache(),
      tokenCache = createCache(),
      compilerCache = createCache(),
      nonnativeSelectorCache = createCache(),
      sortOrder = function sortOrder(a, b) {
    if (a === b) {
      hasDuplicate = true;
    }

    return 0;
  },
      // Instance methods
  hasOwn = {}.hasOwnProperty,
      arr = [],
      pop = arr.pop,
      pushNative = arr.push,
      push = arr.push,
      slice = arr.slice,
      // Use a stripped-down indexOf as it's faster than native
  // https://jsperf.com/thor-indexof-vs-for/5
  indexOf = function indexOf(list, elem) {
    var i = 0,
        len = list.length;

    for (; i < len; i++) {
      if (list[i] === elem) {
        return i;
      }
    }

    return -1;
  },
      booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" + "ismap|loop|multiple|open|readonly|required|scoped",
      // Regular expressions
  // http://www.w3.org/TR/css3-selectors/#whitespace
  whitespace = "[\\x20\\t\\r\\n\\f]",
      // https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
  identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
  attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
  "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5]
  // or strings [capture 3 or capture 4]"
  "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
      pseudos = ":(" + identifier + ")(?:\\((" + // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
  // 1. quoted (capture 3; capture 4 or capture 5)
  "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + // 2. simple (capture 6)
  "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + // 3. anything else (capture 2)
  ".*" + ")\\)|)",
      // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
  rwhitespace = new RegExp(whitespace + "+", "g"),
      rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
      rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
      rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
      rdescend = new RegExp(whitespace + "|>"),
      rpseudo = new RegExp(pseudos),
      ridentifier = new RegExp("^" + identifier + "$"),
      matchExpr = {
    "ID": new RegExp("^#(" + identifier + ")"),
    "CLASS": new RegExp("^\\.(" + identifier + ")"),
    "TAG": new RegExp("^(" + identifier + "|[*])"),
    "ATTR": new RegExp("^" + attributes),
    "PSEUDO": new RegExp("^" + pseudos),
    "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
    "bool": new RegExp("^(?:" + booleans + ")$", "i"),
    // For use in libraries implementing .is()
    // We use this for POS matching in `select`
    "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
  },
      rhtml = /HTML$/i,
      rinputs = /^(?:input|select|textarea|button)$/i,
      rheader = /^h\d$/i,
      rnative = /^[^{]+\{\s*\[native \w/,
      // Easily-parseable/retrievable ID or TAG or CLASS selectors
  rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      rsibling = /[+~]/,
      // CSS escapes
  // http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
  runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"),
      funescape = function funescape(escape, nonHex) {
    var high = "0x" + escape.slice(1) - 0x10000;
    return nonHex ? // Strip the backslash prefix from a non-hex escape sequence
    nonHex : // Replace a hexadecimal escape sequence with the encoded Unicode code point
    // Support: IE <=11+
    // For values outside the Basic Multilingual Plane (BMP), manually construct a
    // surrogate pair
    high < 0 ? String.fromCharCode(high + 0x10000) : String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
  },
      // CSS string/identifier serialization
  // https://drafts.csswg.org/cssom/#common-serializing-idioms
  rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      fcssescape = function fcssescape(ch, asCodePoint) {
    if (asCodePoint) {
      // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
      if (ch === "\0") {
        return "\uFFFD";
      } // Control characters and (dependent upon position) numbers get escaped as code points


      return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
    } // Other potentially-special ASCII characters get backslash-escaped


    return "\\" + ch;
  },
      // Used for iframes
  // See setDocument()
  // Removing the function wrapper causes a "Permission Denied"
  // error in IE
  unloadHandler = function unloadHandler() {
    setDocument();
  },
      inDisabledFieldset = addCombinator(function (elem) {
    return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
  }, {
    dir: "parentNode",
    next: "legend"
  }); // Optimize for push.apply( _, NodeList )


  try {
    push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes); // Support: Android<4.0
    // Detect silently failing push.apply
    // eslint-disable-next-line no-unused-expressions

    arr[preferredDoc.childNodes.length].nodeType;
  } catch (e) {
    push = {
      apply: arr.length ? // Leverage slice if possible
      function (target, els) {
        pushNative.apply(target, slice.call(els));
      } : // Support: IE<9
      // Otherwise append directly
      function (target, els) {
        var j = target.length,
            i = 0; // Can't trust NodeList.length

        while (target[j++] = els[i++]) {}

        target.length = j - 1;
      }
    };
  }

  function Sizzle(selector, context, results, seed) {
    var m,
        i,
        elem,
        nid,
        match,
        groups,
        newSelector,
        newContext = context && context.ownerDocument,
        // nodeType defaults to 9, since context defaults to document
    nodeType = context ? context.nodeType : 9;
    results = results || []; // Return early from calls with invalid selector or context

    if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
      return results;
    } // Try to shortcut find operations (as opposed to filters) in HTML documents


    if (!seed) {
      setDocument(context);
      context = context || document;

      if (documentIsHTML) {
        // If the selector is sufficiently simple, try using a "get*By*" DOM method
        // (excepting DocumentFragment context, where the methods don't exist)
        if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
          // ID selector
          if (m = match[1]) {
            // Document context
            if (nodeType === 9) {
              if (elem = context.getElementById(m)) {
                // Support: IE, Opera, Webkit
                // TODO: identify versions
                // getElementById can match elements by name instead of ID
                if (elem.id === m) {
                  results.push(elem);
                  return results;
                }
              } else {
                return results;
              } // Element context

            } else {
              // Support: IE, Opera, Webkit
              // TODO: identify versions
              // getElementById can match elements by name instead of ID
              if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                results.push(elem);
                return results;
              }
            } // Type selector

          } else if (match[2]) {
            push.apply(results, context.getElementsByTagName(selector));
            return results; // Class selector
          } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
            push.apply(results, context.getElementsByClassName(m));
            return results;
          }
        } // Take advantage of querySelectorAll


        if (support.qsa && !nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector)) && ( // Support: IE 8 only
        // Exclude object elements
        nodeType !== 1 || context.nodeName.toLowerCase() !== "object")) {
          newSelector = selector;
          newContext = context; // qSA considers elements outside a scoping root when evaluating child or
          // descendant combinators, which is not what we want.
          // In such cases, we work around the behavior by prefixing every selector in the
          // list with an ID selector referencing the scope context.
          // The technique has to be used as well when a leading combinator is used
          // as such selectors are not recognized by querySelectorAll.
          // Thanks to Andrew Dupont for this technique.

          if (nodeType === 1 && (rdescend.test(selector) || rcombinators.test(selector))) {
            // Expand context for sibling selectors
            newContext = rsibling.test(selector) && testContext(context.parentNode) || context; // We can use :scope instead of the ID hack if the browser
            // supports it & if we're not changing the context.

            if (newContext !== context || !support.scope) {
              // Capture the context ID, setting it first if necessary
              if (nid = context.getAttribute("id")) {
                nid = nid.replace(rcssescape, fcssescape);
              } else {
                context.setAttribute("id", nid = expando);
              }
            } // Prefix every selector in the list


            groups = tokenize(selector);
            i = groups.length;

            while (i--) {
              groups[i] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i]);
            }

            newSelector = groups.join(",");
          }

          try {
            push.apply(results, newContext.querySelectorAll(newSelector));
            return results;
          } catch (qsaError) {
            nonnativeSelectorCache(selector, true);
          } finally {
            if (nid === expando) {
              context.removeAttribute("id");
            }
          }
        }
      }
    } // All others


    return select(selector.replace(rtrim, "$1"), context, results, seed);
  }
  /**
   * Create key-value caches of limited size
   * @returns {function(string, object)} Returns the Object data after storing it on itself with
   *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
   *	deleting the oldest entry
   */


  function createCache() {
    var keys = [];

    function cache(key, value) {
      // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
      if (keys.push(key + " ") > Expr.cacheLength) {
        // Only keep the most recent entries
        delete cache[keys.shift()];
      }

      return cache[key + " "] = value;
    }

    return cache;
  }
  /**
   * Mark a function for special use by Sizzle
   * @param {Function} fn The function to mark
   */


  function markFunction(fn) {
    fn[expando] = true;
    return fn;
  }
  /**
   * Support testing using an element
   * @param {Function} fn Passed the created element and returns a boolean result
   */


  function assert(fn) {
    var el = document.createElement("fieldset");

    try {
      return !!fn(el);
    } catch (e) {
      return false;
    } finally {
      // Remove from its parent by default
      if (el.parentNode) {
        el.parentNode.removeChild(el);
      } // release memory in IE


      el = null;
    }
  }
  /**
   * Adds the same handler for all of the specified attrs
   * @param {String} attrs Pipe-separated list of attributes
   * @param {Function} handler The method that will be applied
   */


  function addHandle(attrs, handler) {
    var arr = attrs.split("|"),
        i = arr.length;

    while (i--) {
      Expr.attrHandle[arr[i]] = handler;
    }
  }
  /**
   * Checks document order of two siblings
   * @param {Element} a
   * @param {Element} b
   * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
   */


  function siblingCheck(a, b) {
    var cur = b && a,
        diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex; // Use IE sourceIndex if available on both nodes

    if (diff) {
      return diff;
    } // Check if b follows a


    if (cur) {
      while (cur = cur.nextSibling) {
        if (cur === b) {
          return -1;
        }
      }
    }

    return a ? 1 : -1;
  }
  /**
   * Returns a function to use in pseudos for input types
   * @param {String} type
   */


  function createInputPseudo(type) {
    return function (elem) {
      var name = elem.nodeName.toLowerCase();
      return name === "input" && elem.type === type;
    };
  }
  /**
   * Returns a function to use in pseudos for buttons
   * @param {String} type
   */


  function createButtonPseudo(type) {
    return function (elem) {
      var name = elem.nodeName.toLowerCase();
      return (name === "input" || name === "button") && elem.type === type;
    };
  }
  /**
   * Returns a function to use in pseudos for :enabled/:disabled
   * @param {Boolean} disabled true for :disabled; false for :enabled
   */


  function createDisabledPseudo(disabled) {
    // Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
    return function (elem) {
      // Only certain elements can match :enabled or :disabled
      // https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
      // https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
      if ("form" in elem) {
        // Check for inherited disabledness on relevant non-disabled elements:
        // * listed form-associated elements in a disabled fieldset
        //   https://html.spec.whatwg.org/multipage/forms.html#category-listed
        //   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
        // * option elements in a disabled optgroup
        //   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
        // All such elements have a "form" property.
        if (elem.parentNode && elem.disabled === false) {
          // Option elements defer to a parent optgroup if present
          if ("label" in elem) {
            if ("label" in elem.parentNode) {
              return elem.parentNode.disabled === disabled;
            } else {
              return elem.disabled === disabled;
            }
          } // Support: IE 6 - 11
          // Use the isDisabled shortcut property to check for disabled fieldset ancestors


          return elem.isDisabled === disabled || // Where there is no isDisabled, check manually

          /* jshint -W018 */
          elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
        }

        return elem.disabled === disabled; // Try to winnow out elements that can't be disabled before trusting the disabled property.
        // Some victims get caught in our net (label, legend, menu, track), but it shouldn't
        // even exist on them, let alone have a boolean value.
      } else if ("label" in elem) {
        return elem.disabled === disabled;
      } // Remaining elements are neither :enabled nor :disabled


      return false;
    };
  }
  /**
   * Returns a function to use in pseudos for positionals
   * @param {Function} fn
   */


  function createPositionalPseudo(fn) {
    return markFunction(function (argument) {
      argument = +argument;
      return markFunction(function (seed, matches) {
        var j,
            matchIndexes = fn([], seed.length, argument),
            i = matchIndexes.length; // Match elements found at the specified indexes

        while (i--) {
          if (seed[j = matchIndexes[i]]) {
            seed[j] = !(matches[j] = seed[j]);
          }
        }
      });
    });
  }
  /**
   * Checks a node for validity as a Sizzle context
   * @param {Element|Object=} context
   * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
   */


  function testContext(context) {
    return context && typeof context.getElementsByTagName !== "undefined" && context;
  } // Expose support vars for convenience


  support = Sizzle.support = {};
  /**
   * Detects XML nodes
   * @param {Element|Object} elem An element or a document
   * @returns {Boolean} True iff elem is a non-HTML XML node
   */

  isXML = Sizzle.isXML = function (elem) {
    var namespace = elem && elem.namespaceURI,
        docElem = elem && (elem.ownerDocument || elem).documentElement; // Support: IE <=8
    // Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
    // https://bugs.jquery.com/ticket/4833

    return !rhtml.test(namespace || docElem && docElem.nodeName || "HTML");
  };
  /**
   * Sets document-related variables once based on the current document
   * @param {Element|Object} [doc] An element or document object to use to set the document
   * @returns {Object} Returns the current document
   */


  setDocument = Sizzle.setDocument = function (node) {
    var hasCompare,
        subWindow,
        doc = node ? node.ownerDocument || node : preferredDoc; // Return early if doc is invalid or already selected
    // Support: IE 11+, Edge 17 - 18+
    // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
    // two documents; shallow comparisons work.
    // eslint-disable-next-line eqeqeq

    if (doc == document || doc.nodeType !== 9 || !doc.documentElement) {
      return document;
    } // Update global variables


    document = doc;
    docElem = document.documentElement;
    documentIsHTML = !isXML(document); // Support: IE 9 - 11+, Edge 12 - 18+
    // Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
    // Support: IE 11+, Edge 17 - 18+
    // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
    // two documents; shallow comparisons work.
    // eslint-disable-next-line eqeqeq

    if (preferredDoc != document && (subWindow = document.defaultView) && subWindow.top !== subWindow) {
      // Support: IE 11, Edge
      if (subWindow.addEventListener) {
        subWindow.addEventListener("unload", unloadHandler, false); // Support: IE 9 - 10 only
      } else if (subWindow.attachEvent) {
        subWindow.attachEvent("onunload", unloadHandler);
      }
    } // Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
    // Safari 4 - 5 only, Opera <=11.6 - 12.x only
    // IE/Edge & older browsers don't support the :scope pseudo-class.
    // Support: Safari 6.0 only
    // Safari 6.0 supports :scope but it's an alias of :root there.


    support.scope = assert(function (el) {
      docElem.appendChild(el).appendChild(document.createElement("div"));
      return typeof el.querySelectorAll !== "undefined" && !el.querySelectorAll(":scope fieldset div").length;
    });
    /* Attributes
    ---------------------------------------------------------------------- */
    // Support: IE<8
    // Verify that getAttribute really returns attributes and not properties
    // (excepting IE8 booleans)

    support.attributes = assert(function (el) {
      el.className = "i";
      return !el.getAttribute("className");
    });
    /* getElement(s)By*
    ---------------------------------------------------------------------- */
    // Check if getElementsByTagName("*") returns only elements

    support.getElementsByTagName = assert(function (el) {
      el.appendChild(document.createComment(""));
      return !el.getElementsByTagName("*").length;
    }); // Support: IE<9

    support.getElementsByClassName = rnative.test(document.getElementsByClassName); // Support: IE<10
    // Check if getElementById returns elements by name
    // The broken getElementById methods don't pick up programmatically-set names,
    // so use a roundabout getElementsByName test

    support.getById = assert(function (el) {
      docElem.appendChild(el).id = expando;
      return !document.getElementsByName || !document.getElementsByName(expando).length;
    }); // ID filter and find

    if (support.getById) {
      Expr.filter["ID"] = function (id) {
        var attrId = id.replace(runescape, funescape);
        return function (elem) {
          return elem.getAttribute("id") === attrId;
        };
      };

      Expr.find["ID"] = function (id, context) {
        if (typeof context.getElementById !== "undefined" && documentIsHTML) {
          var elem = context.getElementById(id);
          return elem ? [elem] : [];
        }
      };
    } else {
      Expr.filter["ID"] = function (id) {
        var attrId = id.replace(runescape, funescape);
        return function (elem) {
          var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
          return node && node.value === attrId;
        };
      }; // Support: IE 6 - 7 only
      // getElementById is not reliable as a find shortcut


      Expr.find["ID"] = function (id, context) {
        if (typeof context.getElementById !== "undefined" && documentIsHTML) {
          var node,
              i,
              elems,
              elem = context.getElementById(id);

          if (elem) {
            // Verify the id attribute
            node = elem.getAttributeNode("id");

            if (node && node.value === id) {
              return [elem];
            } // Fall back on getElementsByName


            elems = context.getElementsByName(id);
            i = 0;

            while (elem = elems[i++]) {
              node = elem.getAttributeNode("id");

              if (node && node.value === id) {
                return [elem];
              }
            }
          }

          return [];
        }
      };
    } // Tag


    Expr.find["TAG"] = support.getElementsByTagName ? function (tag, context) {
      if (typeof context.getElementsByTagName !== "undefined") {
        return context.getElementsByTagName(tag); // DocumentFragment nodes don't have gEBTN
      } else if (support.qsa) {
        return context.querySelectorAll(tag);
      }
    } : function (tag, context) {
      var elem,
          tmp = [],
          i = 0,
          // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
      results = context.getElementsByTagName(tag); // Filter out possible comments

      if (tag === "*") {
        while (elem = results[i++]) {
          if (elem.nodeType === 1) {
            tmp.push(elem);
          }
        }

        return tmp;
      }

      return results;
    }; // Class

    Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
      if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
        return context.getElementsByClassName(className);
      }
    };
    /* QSA/matchesSelector
    ---------------------------------------------------------------------- */
    // QSA and matchesSelector support
    // matchesSelector(:active) reports false when true (IE9/Opera 11.5)


    rbuggyMatches = []; // qSa(:focus) reports false when true (Chrome 21)
    // We allow this because of a bug in IE8/9 that throws an error
    // whenever `document.activeElement` is accessed on an iframe
    // So, we allow :focus to pass through QSA all the time to avoid the IE error
    // See https://bugs.jquery.com/ticket/13378

    rbuggyQSA = [];

    if (support.qsa = rnative.test(document.querySelectorAll)) {
      // Build QSA regex
      // Regex strategy adopted from Diego Perini
      assert(function (el) {
        var input; // Select is set to empty string on purpose
        // This is to test IE's treatment of not explicitly
        // setting a boolean content attribute,
        // since its presence should be enough
        // https://bugs.jquery.com/ticket/12359

        docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>"; // Support: IE8, Opera 11-12.16
        // Nothing should be selected when empty strings follow ^= or $= or *=
        // The test attribute must be unknown in Opera but "safe" for WinRT
        // https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section

        if (el.querySelectorAll("[msallowcapture^='']").length) {
          rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
        } // Support: IE8
        // Boolean attributes and "value" are not treated correctly


        if (!el.querySelectorAll("[selected]").length) {
          rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
        } // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+


        if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
          rbuggyQSA.push("~=");
        } // Support: IE 11+, Edge 15 - 18+
        // IE 11/Edge don't find elements on a `[name='']` query in some cases.
        // Adding a temporary attribute to the document before the selection works
        // around the issue.
        // Interestingly, IE 10 & older don't seem to have the issue.


        input = document.createElement("input");
        input.setAttribute("name", "");
        el.appendChild(input);

        if (!el.querySelectorAll("[name='']").length) {
          rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + "*(?:''|\"\")");
        } // Webkit/Opera - :checked should return selected option elements
        // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
        // IE8 throws error here and will not see later tests


        if (!el.querySelectorAll(":checked").length) {
          rbuggyQSA.push(":checked");
        } // Support: Safari 8+, iOS 8+
        // https://bugs.webkit.org/show_bug.cgi?id=136851
        // In-page `selector#id sibling-combinator selector` fails


        if (!el.querySelectorAll("a#" + expando + "+*").length) {
          rbuggyQSA.push(".#.+[+~]");
        } // Support: Firefox <=3.6 - 5 only
        // Old Firefox doesn't throw on a badly-escaped identifier.


        el.querySelectorAll("\\\f");
        rbuggyQSA.push("[\\r\\n\\f]");
      });
      assert(function (el) {
        el.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>"; // Support: Windows 8 Native Apps
        // The type and name attributes are restricted during .innerHTML assignment

        var input = document.createElement("input");
        input.setAttribute("type", "hidden");
        el.appendChild(input).setAttribute("name", "D"); // Support: IE8
        // Enforce case-sensitivity of name attribute

        if (el.querySelectorAll("[name=d]").length) {
          rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
        } // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
        // IE8 throws error here and will not see later tests


        if (el.querySelectorAll(":enabled").length !== 2) {
          rbuggyQSA.push(":enabled", ":disabled");
        } // Support: IE9-11+
        // IE's :disabled selector does not pick up the children of disabled fieldsets


        docElem.appendChild(el).disabled = true;

        if (el.querySelectorAll(":disabled").length !== 2) {
          rbuggyQSA.push(":enabled", ":disabled");
        } // Support: Opera 10 - 11 only
        // Opera 10-11 does not throw on post-comma invalid pseudos


        el.querySelectorAll("*,:x");
        rbuggyQSA.push(",.*:");
      });
    }

    if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
      assert(function (el) {
        // Check to see if it's possible to do matchesSelector
        // on a disconnected node (IE 9)
        support.disconnectedMatch = matches.call(el, "*"); // This should fail with an exception
        // Gecko does not error, returns false instead

        matches.call(el, "[s!='']:x");
        rbuggyMatches.push("!=", pseudos);
      });
    }

    rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
    rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
    /* Contains
    ---------------------------------------------------------------------- */

    hasCompare = rnative.test(docElem.compareDocumentPosition); // Element contains another
    // Purposefully self-exclusive
    // As in, an element does not contain itself

    contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) {
      var adown = a.nodeType === 9 ? a.documentElement : a,
          bup = b && b.parentNode;
      return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
    } : function (a, b) {
      if (b) {
        while (b = b.parentNode) {
          if (b === a) {
            return true;
          }
        }
      }

      return false;
    };
    /* Sorting
    ---------------------------------------------------------------------- */
    // Document order sorting

    sortOrder = hasCompare ? function (a, b) {
      // Flag for duplicate removal
      if (a === b) {
        hasDuplicate = true;
        return 0;
      } // Sort on method existence if only one input has compareDocumentPosition


      var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;

      if (compare) {
        return compare;
      } // Calculate position if both inputs belong to the same document
      // Support: IE 11+, Edge 17 - 18+
      // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
      // two documents; shallow comparisons work.
      // eslint-disable-next-line eqeqeq


      compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : // Otherwise we know they are disconnected
      1; // Disconnected nodes

      if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
        // Choose the first element that is related to our preferred document
        // Support: IE 11+, Edge 17 - 18+
        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
        // two documents; shallow comparisons work.
        // eslint-disable-next-line eqeqeq
        if (a == document || a.ownerDocument == preferredDoc && contains(preferredDoc, a)) {
          return -1;
        } // Support: IE 11+, Edge 17 - 18+
        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
        // two documents; shallow comparisons work.
        // eslint-disable-next-line eqeqeq


        if (b == document || b.ownerDocument == preferredDoc && contains(preferredDoc, b)) {
          return 1;
        } // Maintain original order


        return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
      }

      return compare & 4 ? -1 : 1;
    } : function (a, b) {
      // Exit early if the nodes are identical
      if (a === b) {
        hasDuplicate = true;
        return 0;
      }

      var cur,
          i = 0,
          aup = a.parentNode,
          bup = b.parentNode,
          ap = [a],
          bp = [b]; // Parentless nodes are either documents or disconnected

      if (!aup || !bup) {
        // Support: IE 11+, Edge 17 - 18+
        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
        // two documents; shallow comparisons work.

        /* eslint-disable eqeqeq */
        return a == document ? -1 : b == document ? 1 :
        /* eslint-enable eqeqeq */
        aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0; // If the nodes are siblings, we can do a quick check
      } else if (aup === bup) {
        return siblingCheck(a, b);
      } // Otherwise we need full lists of their ancestors for comparison


      cur = a;

      while (cur = cur.parentNode) {
        ap.unshift(cur);
      }

      cur = b;

      while (cur = cur.parentNode) {
        bp.unshift(cur);
      } // Walk down the tree looking for a discrepancy


      while (ap[i] === bp[i]) {
        i++;
      }

      return i ? // Do a sibling check if the nodes have a common ancestor
      siblingCheck(ap[i], bp[i]) : // Otherwise nodes in our document sort first
      // Support: IE 11+, Edge 17 - 18+
      // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
      // two documents; shallow comparisons work.

      /* eslint-disable eqeqeq */
      ap[i] == preferredDoc ? -1 : bp[i] == preferredDoc ? 1 :
      /* eslint-enable eqeqeq */
      0;
    };
    return document;
  };

  Sizzle.matches = function (expr, elements) {
    return Sizzle(expr, null, null, elements);
  };

  Sizzle.matchesSelector = function (elem, expr) {
    setDocument(elem);

    if (support.matchesSelector && documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
      try {
        var ret = matches.call(elem, expr); // IE 9's matchesSelector returns false on disconnected nodes

        if (ret || support.disconnectedMatch || // As well, disconnected nodes are said to be in a document
        // fragment in IE 9
        elem.document && elem.document.nodeType !== 11) {
          return ret;
        }
      } catch (e) {
        nonnativeSelectorCache(expr, true);
      }
    }

    return Sizzle(expr, document, null, [elem]).length > 0;
  };

  Sizzle.contains = function (context, elem) {
    // Set document vars if needed
    // Support: IE 11+, Edge 17 - 18+
    // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
    // two documents; shallow comparisons work.
    // eslint-disable-next-line eqeqeq
    if ((context.ownerDocument || context) != document) {
      setDocument(context);
    }

    return contains(context, elem);
  };

  Sizzle.attr = function (elem, name) {
    // Set document vars if needed
    // Support: IE 11+, Edge 17 - 18+
    // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
    // two documents; shallow comparisons work.
    // eslint-disable-next-line eqeqeq
    if ((elem.ownerDocument || elem) != document) {
      setDocument(elem);
    }

    var fn = Expr.attrHandle[name.toLowerCase()],
        // Don't get fooled by Object.prototype properties (jQuery #13807)
    val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
    return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
  };

  Sizzle.escape = function (sel) {
    return (sel + "").replace(rcssescape, fcssescape);
  };

  Sizzle.error = function (msg) {
    throw new Error("Syntax error, unrecognized expression: " + msg);
  };
  /**
   * Document sorting and removing duplicates
   * @param {ArrayLike} results
   */


  Sizzle.uniqueSort = function (results) {
    var elem,
        duplicates = [],
        j = 0,
        i = 0; // Unless we *know* we can detect duplicates, assume their presence

    hasDuplicate = !support.detectDuplicates;
    sortInput = !support.sortStable && results.slice(0);
    results.sort(sortOrder);

    if (hasDuplicate) {
      while (elem = results[i++]) {
        if (elem === results[i]) {
          j = duplicates.push(i);
        }
      }

      while (j--) {
        results.splice(duplicates[j], 1);
      }
    } // Clear input after sorting to release objects
    // See https://github.com/jquery/sizzle/pull/225


    sortInput = null;
    return results;
  };
  /**
   * Utility function for retrieving the text value of an array of DOM nodes
   * @param {Array|Element} elem
   */


  getText = Sizzle.getText = function (elem) {
    var node,
        ret = "",
        i = 0,
        nodeType = elem.nodeType;

    if (!nodeType) {
      // If no nodeType, this is expected to be an array
      while (node = elem[i++]) {
        // Do not traverse comment nodes
        ret += getText(node);
      }
    } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
      // Use textContent for elements
      // innerText usage removed for consistency of new lines (jQuery #11153)
      if (typeof elem.textContent === "string") {
        return elem.textContent;
      } else {
        // Traverse its children
        for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
          ret += getText(elem);
        }
      }
    } else if (nodeType === 3 || nodeType === 4) {
      return elem.nodeValue;
    } // Do not include comment or processing instruction nodes


    return ret;
  };

  Expr = Sizzle.selectors = {
    // Can be adjusted by the user
    cacheLength: 50,
    createPseudo: markFunction,
    match: matchExpr,
    attrHandle: {},
    find: {},
    relative: {
      ">": {
        dir: "parentNode",
        first: true
      },
      " ": {
        dir: "parentNode"
      },
      "+": {
        dir: "previousSibling",
        first: true
      },
      "~": {
        dir: "previousSibling"
      }
    },
    preFilter: {
      "ATTR": function ATTR(match) {
        match[1] = match[1].replace(runescape, funescape); // Move the given value to match[3] whether quoted or unquoted

        match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);

        if (match[2] === "~=") {
          match[3] = " " + match[3] + " ";
        }

        return match.slice(0, 4);
      },
      "CHILD": function CHILD(match) {
        /* matches from matchExpr["CHILD"]
        	1 type (only|nth|...)
        	2 what (child|of-type)
        	3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
        	4 xn-component of xn+y argument ([+-]?\d*n|)
        	5 sign of xn-component
        	6 x of xn-component
        	7 sign of y-component
        	8 y of y-component
        */
        match[1] = match[1].toLowerCase();

        if (match[1].slice(0, 3) === "nth") {
          // nth-* requires argument
          if (!match[3]) {
            Sizzle.error(match[0]);
          } // numeric x and y parameters for Expr.filter.CHILD
          // remember that false/true cast respectively to 0/1


          match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
          match[5] = +(match[7] + match[8] || match[3] === "odd"); // other types prohibit arguments
        } else if (match[3]) {
          Sizzle.error(match[0]);
        }

        return match;
      },
      "PSEUDO": function PSEUDO(match) {
        var excess,
            unquoted = !match[6] && match[2];

        if (matchExpr["CHILD"].test(match[0])) {
          return null;
        } // Accept quoted arguments as-is


        if (match[3]) {
          match[2] = match[4] || match[5] || ""; // Strip excess characters from unquoted arguments
        } else if (unquoted && rpseudo.test(unquoted) && ( // Get excess from tokenize (recursively)
        excess = tokenize(unquoted, true)) && ( // advance to the next closing parenthesis
        excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
          // excess is a negative index
          match[0] = match[0].slice(0, excess);
          match[2] = unquoted.slice(0, excess);
        } // Return only captures needed by the pseudo filter method (type and argument)


        return match.slice(0, 3);
      }
    },
    filter: {
      "TAG": function TAG(nodeNameSelector) {
        var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
        return nodeNameSelector === "*" ? function () {
          return true;
        } : function (elem) {
          return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
        };
      },
      "CLASS": function CLASS(className) {
        var pattern = classCache[className + " "];
        return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
          return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
        });
      },
      "ATTR": function ATTR(name, operator, check) {
        return function (elem) {
          var result = Sizzle.attr(elem, name);

          if (result == null) {
            return operator === "!=";
          }

          if (!operator) {
            return true;
          }

          result += "";
          /* eslint-disable max-len */

          return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
          /* eslint-enable max-len */
        };
      },
      "CHILD": function CHILD(type, what, _argument, first, last) {
        var simple = type.slice(0, 3) !== "nth",
            forward = type.slice(-4) !== "last",
            ofType = what === "of-type";
        return first === 1 && last === 0 ? // Shortcut for :nth-*(n)
        function (elem) {
          return !!elem.parentNode;
        } : function (elem, _context, xml) {
          var cache,
              uniqueCache,
              outerCache,
              node,
              nodeIndex,
              start,
              dir = simple !== forward ? "nextSibling" : "previousSibling",
              parent = elem.parentNode,
              name = ofType && elem.nodeName.toLowerCase(),
              useCache = !xml && !ofType,
              diff = false;

          if (parent) {
            // :(first|last|only)-(child|of-type)
            if (simple) {
              while (dir) {
                node = elem;

                while (node = node[dir]) {
                  if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                    return false;
                  }
                } // Reverse direction for :only-* (if we haven't yet done so)


                start = dir = type === "only" && !start && "nextSibling";
              }

              return true;
            }

            start = [forward ? parent.firstChild : parent.lastChild]; // non-xml :nth-child(...) stores cache data on `parent`

            if (forward && useCache) {
              // Seek `elem` from a previously-cached index
              // ...in a gzip-friendly way
              node = parent;
              outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
              // Defend against cloned attroperties (jQuery gh-1709)

              uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
              cache = uniqueCache[type] || [];
              nodeIndex = cache[0] === dirruns && cache[1];
              diff = nodeIndex && cache[2];
              node = nodeIndex && parent.childNodes[nodeIndex];

              while (node = ++nodeIndex && node && node[dir] || ( // Fallback to seeking `elem` from the start
              diff = nodeIndex = 0) || start.pop()) {
                // When found, cache indexes on `parent` and break
                if (node.nodeType === 1 && ++diff && node === elem) {
                  uniqueCache[type] = [dirruns, nodeIndex, diff];
                  break;
                }
              }
            } else {
              // Use previously-cached element index if available
              if (useCache) {
                // ...in a gzip-friendly way
                node = elem;
                outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                // Defend against cloned attroperties (jQuery gh-1709)

                uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                cache = uniqueCache[type] || [];
                nodeIndex = cache[0] === dirruns && cache[1];
                diff = nodeIndex;
              } // xml :nth-child(...)
              // or :nth-last-child(...) or :nth(-last)?-of-type(...)


              if (diff === false) {
                // Use the same loop as above to seek `elem` from the start
                while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                  if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                    // Cache the index of each encountered element
                    if (useCache) {
                      outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                      // Defend against cloned attroperties (jQuery gh-1709)

                      uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                      uniqueCache[type] = [dirruns, diff];
                    }

                    if (node === elem) {
                      break;
                    }
                  }
                }
              }
            } // Incorporate the offset, then check against cycle size


            diff -= last;
            return diff === first || diff % first === 0 && diff / first >= 0;
          }
        };
      },
      "PSEUDO": function PSEUDO(pseudo, argument) {
        // pseudo-class names are case-insensitive
        // http://www.w3.org/TR/selectors/#pseudo-classes
        // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
        // Remember that setFilters inherits from pseudos
        var args,
            fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo); // The user may use createPseudo to indicate that
        // arguments are needed to create the filter function
        // just as Sizzle does

        if (fn[expando]) {
          return fn(argument);
        } // But maintain support for old signatures


        if (fn.length > 1) {
          args = [pseudo, pseudo, "", argument];
          return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
            var idx,
                matched = fn(seed, argument),
                i = matched.length;

            while (i--) {
              idx = indexOf(seed, matched[i]);
              seed[idx] = !(matches[idx] = matched[i]);
            }
          }) : function (elem) {
            return fn(elem, 0, args);
          };
        }

        return fn;
      }
    },
    pseudos: {
      // Potentially complex pseudos
      "not": markFunction(function (selector) {
        // Trim the selector passed to compile
        // to avoid treating leading and trailing
        // spaces as combinators
        var input = [],
            results = [],
            matcher = compile(selector.replace(rtrim, "$1"));
        return matcher[expando] ? markFunction(function (seed, matches, _context, xml) {
          var elem,
              unmatched = matcher(seed, null, xml, []),
              i = seed.length; // Match elements unmatched by `matcher`

          while (i--) {
            if (elem = unmatched[i]) {
              seed[i] = !(matches[i] = elem);
            }
          }
        }) : function (elem, _context, xml) {
          input[0] = elem;
          matcher(input, null, xml, results); // Don't keep the element (issue #299)

          input[0] = null;
          return !results.pop();
        };
      }),
      "has": markFunction(function (selector) {
        return function (elem) {
          return Sizzle(selector, elem).length > 0;
        };
      }),
      "contains": markFunction(function (text) {
        text = text.replace(runescape, funescape);
        return function (elem) {
          return (elem.textContent || getText(elem)).indexOf(text) > -1;
        };
      }),
      // "Whether an element is represented by a :lang() selector
      // is based solely on the element's language value
      // being equal to the identifier C,
      // or beginning with the identifier C immediately followed by "-".
      // The matching of C against the element's language value is performed case-insensitively.
      // The identifier C does not have to be a valid language name."
      // http://www.w3.org/TR/selectors/#lang-pseudo
      "lang": markFunction(function (lang) {
        // lang value must be a valid identifier
        if (!ridentifier.test(lang || "")) {
          Sizzle.error("unsupported lang: " + lang);
        }

        lang = lang.replace(runescape, funescape).toLowerCase();
        return function (elem) {
          var elemLang;

          do {
            if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
              elemLang = elemLang.toLowerCase();
              return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
            }
          } while ((elem = elem.parentNode) && elem.nodeType === 1);

          return false;
        };
      }),
      // Miscellaneous
      "target": function target(elem) {
        var hash = window.location && window.location.hash;
        return hash && hash.slice(1) === elem.id;
      },
      "root": function root(elem) {
        return elem === docElem;
      },
      "focus": function focus(elem) {
        return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
      },
      // Boolean properties
      "enabled": createDisabledPseudo(false),
      "disabled": createDisabledPseudo(true),
      "checked": function checked(elem) {
        // In CSS3, :checked should return both checked and selected elements
        // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
        var nodeName = elem.nodeName.toLowerCase();
        return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
      },
      "selected": function selected(elem) {
        // Accessing this property makes selected-by-default
        // options in Safari work properly
        if (elem.parentNode) {
          // eslint-disable-next-line no-unused-expressions
          elem.parentNode.selectedIndex;
        }

        return elem.selected === true;
      },
      // Contents
      "empty": function empty(elem) {
        // http://www.w3.org/TR/selectors/#empty-pseudo
        // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
        //   but not by others (comment: 8; processing instruction: 7; etc.)
        // nodeType < 6 works because attributes (2) do not appear as children
        for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
          if (elem.nodeType < 6) {
            return false;
          }
        }

        return true;
      },
      "parent": function parent(elem) {
        return !Expr.pseudos["empty"](elem);
      },
      // Element/input types
      "header": function header(elem) {
        return rheader.test(elem.nodeName);
      },
      "input": function input(elem) {
        return rinputs.test(elem.nodeName);
      },
      "button": function button(elem) {
        var name = elem.nodeName.toLowerCase();
        return name === "input" && elem.type === "button" || name === "button";
      },
      "text": function text(elem) {
        var attr;
        return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ( // Support: IE<8
        // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
        (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
      },
      // Position-in-collection
      "first": createPositionalPseudo(function () {
        return [0];
      }),
      "last": createPositionalPseudo(function (_matchIndexes, length) {
        return [length - 1];
      }),
      "eq": createPositionalPseudo(function (_matchIndexes, length, argument) {
        return [argument < 0 ? argument + length : argument];
      }),
      "even": createPositionalPseudo(function (matchIndexes, length) {
        var i = 0;

        for (; i < length; i += 2) {
          matchIndexes.push(i);
        }

        return matchIndexes;
      }),
      "odd": createPositionalPseudo(function (matchIndexes, length) {
        var i = 1;

        for (; i < length; i += 2) {
          matchIndexes.push(i);
        }

        return matchIndexes;
      }),
      "lt": createPositionalPseudo(function (matchIndexes, length, argument) {
        var i = argument < 0 ? argument + length : argument > length ? length : argument;

        for (; --i >= 0;) {
          matchIndexes.push(i);
        }

        return matchIndexes;
      }),
      "gt": createPositionalPseudo(function (matchIndexes, length, argument) {
        var i = argument < 0 ? argument + length : argument;

        for (; ++i < length;) {
          matchIndexes.push(i);
        }

        return matchIndexes;
      })
    }
  };
  Expr.pseudos["nth"] = Expr.pseudos["eq"]; // Add button/input type pseudos

  for (i in {
    radio: true,
    checkbox: true,
    file: true,
    password: true,
    image: true
  }) {
    Expr.pseudos[i] = createInputPseudo(i);
  }

  for (i in {
    submit: true,
    reset: true
  }) {
    Expr.pseudos[i] = createButtonPseudo(i);
  } // Easy API for creating new setFilters


  function setFilters() {}

  setFilters.prototype = Expr.filters = Expr.pseudos;
  Expr.setFilters = new setFilters();

  tokenize = Sizzle.tokenize = function (selector, parseOnly) {
    var matched,
        match,
        tokens,
        type,
        soFar,
        groups,
        preFilters,
        cached = tokenCache[selector + " "];

    if (cached) {
      return parseOnly ? 0 : cached.slice(0);
    }

    soFar = selector;
    groups = [];
    preFilters = Expr.preFilter;

    while (soFar) {
      // Comma and first run
      if (!matched || (match = rcomma.exec(soFar))) {
        if (match) {
          // Don't consume trailing commas as valid
          soFar = soFar.slice(match[0].length) || soFar;
        }

        groups.push(tokens = []);
      }

      matched = false; // Combinators

      if (match = rcombinators.exec(soFar)) {
        matched = match.shift();
        tokens.push({
          value: matched,
          // Cast descendant combinators to space
          type: match[0].replace(rtrim, " ")
        });
        soFar = soFar.slice(matched.length);
      } // Filters


      for (type in Expr.filter) {
        if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
          matched = match.shift();
          tokens.push({
            value: matched,
            type: type,
            matches: match
          });
          soFar = soFar.slice(matched.length);
        }
      }

      if (!matched) {
        break;
      }
    } // Return the length of the invalid excess
    // if we're just parsing
    // Otherwise, throw an error or return tokens


    return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : // Cache the tokens
    tokenCache(selector, groups).slice(0);
  };

  function toSelector(tokens) {
    var i = 0,
        len = tokens.length,
        selector = "";

    for (; i < len; i++) {
      selector += tokens[i].value;
    }

    return selector;
  }

  function addCombinator(matcher, combinator, base) {
    var dir = combinator.dir,
        skip = combinator.next,
        key = skip || dir,
        checkNonElements = base && key === "parentNode",
        doneName = done++;
    return combinator.first ? // Check against closest ancestor/preceding element
    function (elem, context, xml) {
      while (elem = elem[dir]) {
        if (elem.nodeType === 1 || checkNonElements) {
          return matcher(elem, context, xml);
        }
      }

      return false;
    } : // Check against all ancestor/preceding elements
    function (elem, context, xml) {
      var oldCache,
          uniqueCache,
          outerCache,
          newCache = [dirruns, doneName]; // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching

      if (xml) {
        while (elem = elem[dir]) {
          if (elem.nodeType === 1 || checkNonElements) {
            if (matcher(elem, context, xml)) {
              return true;
            }
          }
        }
      } else {
        while (elem = elem[dir]) {
          if (elem.nodeType === 1 || checkNonElements) {
            outerCache = elem[expando] || (elem[expando] = {}); // Support: IE <9 only
            // Defend against cloned attroperties (jQuery gh-1709)

            uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});

            if (skip && skip === elem.nodeName.toLowerCase()) {
              elem = elem[dir] || elem;
            } else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
              // Assign to newCache so results back-propagate to previous elements
              return newCache[2] = oldCache[2];
            } else {
              // Reuse newcache so results back-propagate to previous elements
              uniqueCache[key] = newCache; // A match means we're done; a fail means we have to keep checking

              if (newCache[2] = matcher(elem, context, xml)) {
                return true;
              }
            }
          }
        }
      }

      return false;
    };
  }

  function elementMatcher(matchers) {
    return matchers.length > 1 ? function (elem, context, xml) {
      var i = matchers.length;

      while (i--) {
        if (!matchers[i](elem, context, xml)) {
          return false;
        }
      }

      return true;
    } : matchers[0];
  }

  function multipleContexts(selector, contexts, results) {
    var i = 0,
        len = contexts.length;

    for (; i < len; i++) {
      Sizzle(selector, contexts[i], results);
    }

    return results;
  }

  function condense(unmatched, map, filter, context, xml) {
    var elem,
        newUnmatched = [],
        i = 0,
        len = unmatched.length,
        mapped = map != null;

    for (; i < len; i++) {
      if (elem = unmatched[i]) {
        if (!filter || filter(elem, context, xml)) {
          newUnmatched.push(elem);

          if (mapped) {
            map.push(i);
          }
        }
      }
    }

    return newUnmatched;
  }

  function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
    if (postFilter && !postFilter[expando]) {
      postFilter = setMatcher(postFilter);
    }

    if (postFinder && !postFinder[expando]) {
      postFinder = setMatcher(postFinder, postSelector);
    }

    return markFunction(function (seed, results, context, xml) {
      var temp,
          i,
          elem,
          preMap = [],
          postMap = [],
          preexisting = results.length,
          // Get initial elements from seed or context
      elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
          // Prefilter to get matcher input, preserving a map for seed-results synchronization
      matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
          matcherOut = matcher ? // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
      postFinder || (seed ? preFilter : preexisting || postFilter) ? // ...intermediate processing is necessary
      [] : // ...otherwise use results directly
      results : matcherIn; // Find primary matches

      if (matcher) {
        matcher(matcherIn, matcherOut, context, xml);
      } // Apply postFilter


      if (postFilter) {
        temp = condense(matcherOut, postMap);
        postFilter(temp, [], context, xml); // Un-match failing elements by moving them back to matcherIn

        i = temp.length;

        while (i--) {
          if (elem = temp[i]) {
            matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
          }
        }
      }

      if (seed) {
        if (postFinder || preFilter) {
          if (postFinder) {
            // Get the final matcherOut by condensing this intermediate into postFinder contexts
            temp = [];
            i = matcherOut.length;

            while (i--) {
              if (elem = matcherOut[i]) {
                // Restore matcherIn since elem is not yet a final match
                temp.push(matcherIn[i] = elem);
              }
            }

            postFinder(null, matcherOut = [], temp, xml);
          } // Move matched elements from seed to results to keep them synchronized


          i = matcherOut.length;

          while (i--) {
            if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
              seed[temp] = !(results[temp] = elem);
            }
          }
        } // Add elements to results, through postFinder if defined

      } else {
        matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);

        if (postFinder) {
          postFinder(null, results, matcherOut, xml);
        } else {
          push.apply(results, matcherOut);
        }
      }
    });
  }

  function matcherFromTokens(tokens) {
    var checkContext,
        matcher,
        j,
        len = tokens.length,
        leadingRelative = Expr.relative[tokens[0].type],
        implicitRelative = leadingRelative || Expr.relative[" "],
        i = leadingRelative ? 1 : 0,
        // The foundational matcher ensures that elements are reachable from top-level context(s)
    matchContext = addCombinator(function (elem) {
      return elem === checkContext;
    }, implicitRelative, true),
        matchAnyContext = addCombinator(function (elem) {
      return indexOf(checkContext, elem) > -1;
    }, implicitRelative, true),
        matchers = [function (elem, context, xml) {
      var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml)); // Avoid hanging onto element (issue #299)

      checkContext = null;
      return ret;
    }];

    for (; i < len; i++) {
      if (matcher = Expr.relative[tokens[i].type]) {
        matchers = [addCombinator(elementMatcher(matchers), matcher)];
      } else {
        matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches); // Return special upon seeing a positional matcher

        if (matcher[expando]) {
          // Find the next relative operator (if any) for proper handling
          j = ++i;

          for (; j < len; j++) {
            if (Expr.relative[tokens[j].type]) {
              break;
            }
          }

          return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector( // If the preceding token was a descendant combinator, insert an implicit any-element `*`
          tokens.slice(0, i - 1).concat({
            value: tokens[i - 2].type === " " ? "*" : ""
          })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
        }

        matchers.push(matcher);
      }
    }

    return elementMatcher(matchers);
  }

  function matcherFromGroupMatchers(elementMatchers, setMatchers) {
    var bySet = setMatchers.length > 0,
        byElement = elementMatchers.length > 0,
        superMatcher = function superMatcher(seed, context, xml, results, outermost) {
      var elem,
          j,
          matcher,
          matchedCount = 0,
          i = "0",
          unmatched = seed && [],
          setMatched = [],
          contextBackup = outermostContext,
          // We must always have either seed elements or outermost context
      elems = seed || byElement && Expr.find["TAG"]("*", outermost),
          // Use integer dirruns iff this is the outermost matcher
      dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1,
          len = elems.length;

      if (outermost) {
        // Support: IE 11+, Edge 17 - 18+
        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
        // two documents; shallow comparisons work.
        // eslint-disable-next-line eqeqeq
        outermostContext = context == document || context || outermost;
      } // Add elements passing elementMatchers directly to results
      // Support: IE<9, Safari
      // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id


      for (; i !== len && (elem = elems[i]) != null; i++) {
        if (byElement && elem) {
          j = 0; // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          // eslint-disable-next-line eqeqeq

          if (!context && elem.ownerDocument != document) {
            setDocument(elem);
            xml = !documentIsHTML;
          }

          while (matcher = elementMatchers[j++]) {
            if (matcher(elem, context || document, xml)) {
              results.push(elem);
              break;
            }
          }

          if (outermost) {
            dirruns = dirrunsUnique;
          }
        } // Track unmatched elements for set filters


        if (bySet) {
          // They will have gone through all possible matchers
          if (elem = !matcher && elem) {
            matchedCount--;
          } // Lengthen the array for every element, matched or not


          if (seed) {
            unmatched.push(elem);
          }
        }
      } // `i` is now the count of elements visited above, and adding it to `matchedCount`
      // makes the latter nonnegative.


      matchedCount += i; // Apply set filters to unmatched elements
      // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
      // equals `i`), unless we didn't visit _any_ elements in the above loop because we have
      // no element matchers and no seed.
      // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
      // case, which will result in a "00" `matchedCount` that differs from `i` but is also
      // numerically zero.

      if (bySet && i !== matchedCount) {
        j = 0;

        while (matcher = setMatchers[j++]) {
          matcher(unmatched, setMatched, context, xml);
        }

        if (seed) {
          // Reintegrate element matches to eliminate the need for sorting
          if (matchedCount > 0) {
            while (i--) {
              if (!(unmatched[i] || setMatched[i])) {
                setMatched[i] = pop.call(results);
              }
            }
          } // Discard index placeholder values to get only actual matches


          setMatched = condense(setMatched);
        } // Add matches to results


        push.apply(results, setMatched); // Seedless set matches succeeding multiple successful matchers stipulate sorting

        if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
          Sizzle.uniqueSort(results);
        }
      } // Override manipulation of globals by nested matchers


      if (outermost) {
        dirruns = dirrunsUnique;
        outermostContext = contextBackup;
      }

      return unmatched;
    };

    return bySet ? markFunction(superMatcher) : superMatcher;
  }

  compile = Sizzle.compile = function (selector, match
  /* Internal Use Only */
  ) {
    var i,
        setMatchers = [],
        elementMatchers = [],
        cached = compilerCache[selector + " "];

    if (!cached) {
      // Generate a function of recursive functions that can be used to check each element
      if (!match) {
        match = tokenize(selector);
      }

      i = match.length;

      while (i--) {
        cached = matcherFromTokens(match[i]);

        if (cached[expando]) {
          setMatchers.push(cached);
        } else {
          elementMatchers.push(cached);
        }
      } // Cache the compiled function


      cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers)); // Save selector and tokenization

      cached.selector = selector;
    }

    return cached;
  };
  /**
   * A low-level selection function that works with Sizzle's compiled
   *  selector functions
   * @param {String|Function} selector A selector or a pre-compiled
   *  selector function built with Sizzle.compile
   * @param {Element} context
   * @param {Array} [results]
   * @param {Array} [seed] A set of elements to match against
   */


  select = Sizzle.select = function (selector, context, results, seed) {
    var i,
        tokens,
        token,
        type,
        find,
        compiled = typeof selector === "function" && selector,
        match = !seed && tokenize(selector = compiled.selector || selector);
    results = results || []; // Try to minimize operations if there is only one selector in the list and no seed
    // (the latter of which guarantees us context)

    if (match.length === 1) {
      // Reduce context if the leading compound selector is an ID
      tokens = match[0] = match[0].slice(0);

      if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
        context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];

        if (!context) {
          return results; // Precompiled matchers will still verify ancestry, so step up a level
        } else if (compiled) {
          context = context.parentNode;
        }

        selector = selector.slice(tokens.shift().value.length);
      } // Fetch a seed set for right-to-left matching


      i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;

      while (i--) {
        token = tokens[i]; // Abort if we hit a combinator

        if (Expr.relative[type = token.type]) {
          break;
        }

        if (find = Expr.find[type]) {
          // Search, expanding context for leading sibling combinators
          if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
            // If seed is empty or no tokens remain, we can return early
            tokens.splice(i, 1);
            selector = seed.length && toSelector(tokens);

            if (!selector) {
              push.apply(results, seed);
              return results;
            }

            break;
          }
        }
      }
    } // Compile and execute a filtering function if one is not provided
    // Provide `match` to avoid retokenization if we modified the selector above


    (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
    return results;
  }; // One-time assignments
  // Sort stability


  support.sortStable = expando.split("").sort(sortOrder).join("") === expando; // Support: Chrome 14-35+
  // Always assume duplicates if they aren't passed to the comparison function

  support.detectDuplicates = !!hasDuplicate; // Initialize against the default document

  setDocument(); // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
  // Detached nodes confoundingly follow *each other*

  support.sortDetached = assert(function (el) {
    // Should return 1, but returns 4 (following)
    return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
  }); // Support: IE<8
  // Prevent attribute/property "interpolation"
  // https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx

  if (!assert(function (el) {
    el.innerHTML = "<a href='#'></a>";
    return el.firstChild.getAttribute("href") === "#";
  })) {
    addHandle("type|href|height|width", function (elem, name, isXML) {
      if (!isXML) {
        return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
      }
    });
  } // Support: IE<9
  // Use defaultValue in place of getAttribute("value")


  if (!support.attributes || !assert(function (el) {
    el.innerHTML = "<input/>";
    el.firstChild.setAttribute("value", "");
    return el.firstChild.getAttribute("value") === "";
  })) {
    addHandle("value", function (elem, _name, isXML) {
      if (!isXML && elem.nodeName.toLowerCase() === "input") {
        return elem.defaultValue;
      }
    });
  } // Support: IE<9
  // Use getAttributeNode to fetch booleans when getAttribute lies


  if (!assert(function (el) {
    return el.getAttribute("disabled") == null;
  })) {
    addHandle(booleans, function (elem, name, isXML) {
      var val;

      if (!isXML) {
        return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
      }
    });
  } // EXPOSE


  var _sizzle = window.Sizzle;

  Sizzle.noConflict = function () {
    if (window.Sizzle === Sizzle) {
      window.Sizzle = _sizzle;
    }

    return Sizzle;
  };

  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return Sizzle;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // Sizzle requires that there be a global window in Common-JS like environments
  } else {} // EXPOSE

})(window);

/***/ }),

/***/ "./node_modules/jquery/src/ajax.js":
/*!*****************************************!*\
  !*** ./node_modules/jquery/src/ajax.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ./var/document */ "./node_modules/jquery/src/var/document.js"), __webpack_require__(/*! ./var/isFunction */ "./node_modules/jquery/src/var/isFunction.js"), __webpack_require__(/*! ./var/rnothtmlwhite */ "./node_modules/jquery/src/var/rnothtmlwhite.js"), __webpack_require__(/*! ./ajax/var/location */ "./node_modules/jquery/src/ajax/var/location.js"), __webpack_require__(/*! ./ajax/var/nonce */ "./node_modules/jquery/src/ajax/var/nonce.js"), __webpack_require__(/*! ./ajax/var/rquery */ "./node_modules/jquery/src/ajax/var/rquery.js"), __webpack_require__(/*! ./core/init */ "./node_modules/jquery/src/core/init.js"), __webpack_require__(/*! ./core/parseXML */ "./node_modules/jquery/src/core/parseXML.js"), __webpack_require__(/*! ./event/trigger */ "./node_modules/jquery/src/event/trigger.js"), __webpack_require__(/*! ./deferred */ "./node_modules/jquery/src/deferred.js"), __webpack_require__(/*! ./serialize */ "./node_modules/jquery/src/serialize.js") // jQuery.param
], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, document, isFunction, rnothtmlwhite, location, nonce, rquery) {
  "use strict";

  var r20 = /%20/g,
      rhash = /#.*$/,
      rantiCache = /([?&])_=[^&]*/,
      rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
      // #7653, #8125, #8152: local protocol detection
  rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      rnoContent = /^(?:GET|HEAD)$/,
      rprotocol = /^\/\//,

  /* Prefilters
   * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
   * 2) These are called:
   *    - BEFORE asking for a transport
   *    - AFTER param serialization (s.data is a string if s.processData is true)
   * 3) key is the dataType
   * 4) the catchall symbol "*" can be used
   * 5) execution will start with transport dataType and THEN continue down to "*" if needed
   */
  prefilters = {},

  /* Transports bindings
   * 1) key is the dataType
   * 2) the catchall symbol "*" can be used
   * 3) selection will start with transport dataType and THEN go to "*" if needed
   */
  transports = {},
      // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
  allTypes = "*/".concat("*"),
      // Anchor tag for parsing the document origin
  originAnchor = document.createElement("a");
  originAnchor.href = location.href; // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport

  function addToPrefiltersOrTransports(structure) {
    // dataTypeExpression is optional and defaults to "*"
    return function (dataTypeExpression, func) {
      if (typeof dataTypeExpression !== "string") {
        func = dataTypeExpression;
        dataTypeExpression = "*";
      }

      var dataType,
          i = 0,
          dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];

      if (isFunction(func)) {
        // For each dataType in the dataTypeExpression
        while (dataType = dataTypes[i++]) {
          // Prepend if requested
          if (dataType[0] === "+") {
            dataType = dataType.slice(1) || "*";
            (structure[dataType] = structure[dataType] || []).unshift(func); // Otherwise append
          } else {
            (structure[dataType] = structure[dataType] || []).push(func);
          }
        }
      }
    };
  } // Base inspection function for prefilters and transports


  function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
    var inspected = {},
        seekingTransport = structure === transports;

    function inspect(dataType) {
      var selected;
      inspected[dataType] = true;
      jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
        var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);

        if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
          options.dataTypes.unshift(dataTypeOrTransport);
          inspect(dataTypeOrTransport);
          return false;
        } else if (seekingTransport) {
          return !(selected = dataTypeOrTransport);
        }
      });
      return selected;
    }

    return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
  } // A special extend for ajax options
  // that takes "flat" options (not to be deep extended)
  // Fixes #9887


  function ajaxExtend(target, src) {
    var key,
        deep,
        flatOptions = jQuery.ajaxSettings.flatOptions || {};

    for (key in src) {
      if (src[key] !== undefined) {
        (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
      }
    }

    if (deep) {
      jQuery.extend(true, target, deep);
    }

    return target;
  }
  /* Handles responses to an ajax request:
   * - finds the right dataType (mediates between content-type and expected dataType)
   * - returns the corresponding response
   */


  function ajaxHandleResponses(s, jqXHR, responses) {
    var ct,
        type,
        finalDataType,
        firstDataType,
        contents = s.contents,
        dataTypes = s.dataTypes; // Remove auto dataType and get content-type in the process

    while (dataTypes[0] === "*") {
      dataTypes.shift();

      if (ct === undefined) {
        ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
      }
    } // Check if we're dealing with a known content-type


    if (ct) {
      for (type in contents) {
        if (contents[type] && contents[type].test(ct)) {
          dataTypes.unshift(type);
          break;
        }
      }
    } // Check to see if we have a response for the expected dataType


    if (dataTypes[0] in responses) {
      finalDataType = dataTypes[0];
    } else {
      // Try convertible dataTypes
      for (type in responses) {
        if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
          finalDataType = type;
          break;
        }

        if (!firstDataType) {
          firstDataType = type;
        }
      } // Or just use first one


      finalDataType = finalDataType || firstDataType;
    } // If we found a dataType
    // We add the dataType to the list if needed
    // and return the corresponding response


    if (finalDataType) {
      if (finalDataType !== dataTypes[0]) {
        dataTypes.unshift(finalDataType);
      }

      return responses[finalDataType];
    }
  }
  /* Chain conversions given the request and the original response
   * Also sets the responseXXX fields on the jqXHR instance
   */


  function ajaxConvert(s, response, jqXHR, isSuccess) {
    var conv2,
        current,
        conv,
        tmp,
        prev,
        converters = {},
        // Work with a copy of dataTypes in case we need to modify it for conversion
    dataTypes = s.dataTypes.slice(); // Create converters map with lowercased keys

    if (dataTypes[1]) {
      for (conv in s.converters) {
        converters[conv.toLowerCase()] = s.converters[conv];
      }
    }

    current = dataTypes.shift(); // Convert to each sequential dataType

    while (current) {
      if (s.responseFields[current]) {
        jqXHR[s.responseFields[current]] = response;
      } // Apply the dataFilter if provided


      if (!prev && isSuccess && s.dataFilter) {
        response = s.dataFilter(response, s.dataType);
      }

      prev = current;
      current = dataTypes.shift();

      if (current) {
        // There's only work to do if current dataType is non-auto
        if (current === "*") {
          current = prev; // Convert response if prev dataType is non-auto and differs from current
        } else if (prev !== "*" && prev !== current) {
          // Seek a direct converter
          conv = converters[prev + " " + current] || converters["* " + current]; // If none found, seek a pair

          if (!conv) {
            for (conv2 in converters) {
              // If conv2 outputs current
              tmp = conv2.split(" ");

              if (tmp[1] === current) {
                // If prev can be converted to accepted input
                conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];

                if (conv) {
                  // Condense equivalence converters
                  if (conv === true) {
                    conv = converters[conv2]; // Otherwise, insert the intermediate dataType
                  } else if (converters[conv2] !== true) {
                    current = tmp[0];
                    dataTypes.unshift(tmp[1]);
                  }

                  break;
                }
              }
            }
          } // Apply converter (if not an equivalence)


          if (conv !== true) {
            // Unless errors are allowed to bubble, catch and return them
            if (conv && s.throws) {
              response = conv(response);
            } else {
              try {
                response = conv(response);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: conv ? e : "No conversion from " + prev + " to " + current
                };
              }
            }
          }
        }
      }
    }

    return {
      state: "success",
      data: response
    };
  }

  jQuery.extend({
    // Counter for holding the number of active queries
    active: 0,
    // Last-Modified header cache for next request
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: location.href,
      type: "GET",
      isLocal: rlocalProtocol.test(location.protocol),
      global: true,
      processData: true,
      async: true,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",

      /*
      timeout: 0,
      data: null,
      dataType: null,
      username: null,
      password: null,
      cache: null,
      throws: false,
      traditional: false,
      headers: {},
      */
      accepts: {
        "*": allTypes,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      // Data converters
      // Keys separate source (or catchall "*") and destination types with a single space
      converters: {
        // Convert anything to text
        "* text": String,
        // Text to html (true = no transformation)
        "text html": true,
        // Evaluate text as a json expression
        "text json": JSON.parse,
        // Parse text as xml
        "text xml": jQuery.parseXML
      },
      // For options that shouldn't be deep extended:
      // you can add your own custom options here if
      // and when you create one that shouldn't be
      // deep extended (see ajaxExtend)
      flatOptions: {
        url: true,
        context: true
      }
    },
    // Creates a full fledged settings object into target
    // with both ajaxSettings and settings fields.
    // If target is omitted, writes into ajaxSettings.
    ajaxSetup: function ajaxSetup(target, settings) {
      return settings ? // Building a settings object
      ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : // Extending ajaxSettings
      ajaxExtend(jQuery.ajaxSettings, target);
    },
    ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
    ajaxTransport: addToPrefiltersOrTransports(transports),
    // Main method
    ajax: function ajax(url, options) {
      // If url is an object, simulate pre-1.5 signature
      if (_typeof(url) === "object") {
        options = url;
        url = undefined;
      } // Force options to be an object


      options = options || {};

      var transport,
          // URL without anti-cache param
      cacheURL,
          // Response headers
      responseHeadersString,
          responseHeaders,
          // timeout handle
      timeoutTimer,
          // Url cleanup var
      urlAnchor,
          // Request state (becomes false upon send and true upon completion)
      completed,
          // To know if global events are to be dispatched
      fireGlobals,
          // Loop variable
      i,
          // uncached part of the url
      uncached,
          // Create the final options object
      s = jQuery.ajaxSetup({}, options),
          // Callbacks context
      callbackContext = s.context || s,
          // Context for global events is callbackContext if it is a DOM node or jQuery collection
      globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
          // Deferreds
      deferred = jQuery.Deferred(),
          completeDeferred = jQuery.Callbacks("once memory"),
          // Status-dependent callbacks
      _statusCode = s.statusCode || {},
          // Headers (they are sent all at once)
      requestHeaders = {},
          requestHeadersNames = {},
          // Default abort message
      strAbort = "canceled",
          // Fake xhr
      jqXHR = {
        readyState: 0,
        // Builds headers hashtable if needed
        getResponseHeader: function getResponseHeader(key) {
          var match;

          if (completed) {
            if (!responseHeaders) {
              responseHeaders = {};

              while (match = rheaders.exec(responseHeadersString)) {
                responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
              }
            }

            match = responseHeaders[key.toLowerCase() + " "];
          }

          return match == null ? null : match.join(", ");
        },
        // Raw string
        getAllResponseHeaders: function getAllResponseHeaders() {
          return completed ? responseHeadersString : null;
        },
        // Caches the header
        setRequestHeader: function setRequestHeader(name, value) {
          if (completed == null) {
            name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
            requestHeaders[name] = value;
          }

          return this;
        },
        // Overrides response content-type header
        overrideMimeType: function overrideMimeType(type) {
          if (completed == null) {
            s.mimeType = type;
          }

          return this;
        },
        // Status-dependent callbacks
        statusCode: function statusCode(map) {
          var code;

          if (map) {
            if (completed) {
              // Execute the appropriate callbacks
              jqXHR.always(map[jqXHR.status]);
            } else {
              // Lazy-add the new callbacks in a way that preserves old ones
              for (code in map) {
                _statusCode[code] = [_statusCode[code], map[code]];
              }
            }
          }

          return this;
        },
        // Cancel the request
        abort: function abort(statusText) {
          var finalText = statusText || strAbort;

          if (transport) {
            transport.abort(finalText);
          }

          done(0, finalText);
          return this;
        }
      }; // Attach deferreds


      deferred.promise(jqXHR); // Add protocol if not provided (prefilters might expect it)
      // Handle falsy url in the settings object (#10093: consistency with old signature)
      // We also use the url parameter if available

      s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//"); // Alias method option to type as per ticket #12004

      s.type = options.method || options.type || s.method || s.type; // Extract dataTypes list

      s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""]; // A cross-domain request is in order when the origin doesn't match the current origin.

      if (s.crossDomain == null) {
        urlAnchor = document.createElement("a"); // Support: IE <=8 - 11, Edge 12 - 15
        // IE throws exception on accessing the href property if url is malformed,
        // e.g. http://example.com:80x/

        try {
          urlAnchor.href = s.url; // Support: IE <=8 - 11 only
          // Anchor's host property isn't correctly set when s.url is relative

          urlAnchor.href = urlAnchor.href;
          s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
        } catch (e) {
          // If there is an error parsing the URL, assume it is crossDomain,
          // it can be rejected by the transport if it is invalid
          s.crossDomain = true;
        }
      } // Convert data if not already a string


      if (s.data && s.processData && typeof s.data !== "string") {
        s.data = jQuery.param(s.data, s.traditional);
      } // Apply prefilters


      inspectPrefiltersOrTransports(prefilters, s, options, jqXHR); // If request was aborted inside a prefilter, stop there

      if (completed) {
        return jqXHR;
      } // We can fire global events as of now if asked to
      // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)


      fireGlobals = jQuery.event && s.global; // Watch for a new set of requests

      if (fireGlobals && jQuery.active++ === 0) {
        jQuery.event.trigger("ajaxStart");
      } // Uppercase the type


      s.type = s.type.toUpperCase(); // Determine if request has content

      s.hasContent = !rnoContent.test(s.type); // Save the URL in case we're toying with the If-Modified-Since
      // and/or If-None-Match header later on
      // Remove hash to simplify url manipulation

      cacheURL = s.url.replace(rhash, ""); // More options handling for requests with no content

      if (!s.hasContent) {
        // Remember the hash so we can put it back
        uncached = s.url.slice(cacheURL.length); // If data is available and should be processed, append data to url

        if (s.data && (s.processData || typeof s.data === "string")) {
          cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data; // #9682: remove data so that it's not used in an eventual retry

          delete s.data;
        } // Add or update anti-cache param if needed


        if (s.cache === false) {
          cacheURL = cacheURL.replace(rantiCache, "$1");
          uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
        } // Put hash and anti-cache on the URL that will be requested (gh-1732)


        s.url = cacheURL + uncached; // Change '%20' to '+' if this is encoded form body content (gh-2658)
      } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
        s.data = s.data.replace(r20, "+");
      } // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.


      if (s.ifModified) {
        if (jQuery.lastModified[cacheURL]) {
          jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
        }

        if (jQuery.etag[cacheURL]) {
          jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
        }
      } // Set the correct header, if data is being sent


      if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
        jqXHR.setRequestHeader("Content-Type", s.contentType);
      } // Set the Accepts header for the server, depending on the dataType


      jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]); // Check for headers option

      for (i in s.headers) {
        jqXHR.setRequestHeader(i, s.headers[i]);
      } // Allow custom headers/mimetypes and early abort


      if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {
        // Abort if not done already and return
        return jqXHR.abort();
      } // Aborting is no longer a cancellation


      strAbort = "abort"; // Install callbacks on deferreds

      completeDeferred.add(s.complete);
      jqXHR.done(s.success);
      jqXHR.fail(s.error); // Get transport

      transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR); // If no transport, we auto-abort

      if (!transport) {
        done(-1, "No Transport");
      } else {
        jqXHR.readyState = 1; // Send global event

        if (fireGlobals) {
          globalEventContext.trigger("ajaxSend", [jqXHR, s]);
        } // If request was aborted inside ajaxSend, stop there


        if (completed) {
          return jqXHR;
        } // Timeout


        if (s.async && s.timeout > 0) {
          timeoutTimer = window.setTimeout(function () {
            jqXHR.abort("timeout");
          }, s.timeout);
        }

        try {
          completed = false;
          transport.send(requestHeaders, done);
        } catch (e) {
          // Rethrow post-completion exceptions
          if (completed) {
            throw e;
          } // Propagate others as results


          done(-1, e);
        }
      } // Callback for when everything is done


      function done(status, nativeStatusText, responses, headers) {
        var isSuccess,
            success,
            error,
            response,
            modified,
            statusText = nativeStatusText; // Ignore repeat invocations

        if (completed) {
          return;
        }

        completed = true; // Clear timeout if it exists

        if (timeoutTimer) {
          window.clearTimeout(timeoutTimer);
        } // Dereference transport for early garbage collection
        // (no matter how long the jqXHR object will be used)


        transport = undefined; // Cache response headers

        responseHeadersString = headers || ""; // Set readyState

        jqXHR.readyState = status > 0 ? 4 : 0; // Determine if successful

        isSuccess = status >= 200 && status < 300 || status === 304; // Get response data

        if (responses) {
          response = ajaxHandleResponses(s, jqXHR, responses);
        } // Use a noop converter for missing script but not if jsonp


        if (!isSuccess && jQuery.inArray("script", s.dataTypes) > -1 && jQuery.inArray("json", s.dataTypes) < 0) {
          s.converters["text script"] = function () {};
        } // Convert no matter what (that way responseXXX fields are always set)


        response = ajaxConvert(s, response, jqXHR, isSuccess); // If successful, handle type chaining

        if (isSuccess) {
          // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
          if (s.ifModified) {
            modified = jqXHR.getResponseHeader("Last-Modified");

            if (modified) {
              jQuery.lastModified[cacheURL] = modified;
            }

            modified = jqXHR.getResponseHeader("etag");

            if (modified) {
              jQuery.etag[cacheURL] = modified;
            }
          } // if no content


          if (status === 204 || s.type === "HEAD") {
            statusText = "nocontent"; // if not modified
          } else if (status === 304) {
            statusText = "notmodified"; // If we have data, let's convert it
          } else {
            statusText = response.state;
            success = response.data;
            error = response.error;
            isSuccess = !error;
          }
        } else {
          // Extract error from statusText and normalize for non-aborts
          error = statusText;

          if (status || !statusText) {
            statusText = "error";

            if (status < 0) {
              status = 0;
            }
          }
        } // Set data for the fake xhr object


        jqXHR.status = status;
        jqXHR.statusText = (nativeStatusText || statusText) + ""; // Success/Error

        if (isSuccess) {
          deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
        } else {
          deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
        } // Status-dependent callbacks


        jqXHR.statusCode(_statusCode);
        _statusCode = undefined;

        if (fireGlobals) {
          globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
        } // Complete


        completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

        if (fireGlobals) {
          globalEventContext.trigger("ajaxComplete", [jqXHR, s]); // Handle the global AJAX counter

          if (! --jQuery.active) {
            jQuery.event.trigger("ajaxStop");
          }
        }
      }

      return jqXHR;
    },
    getJSON: function getJSON(url, data, callback) {
      return jQuery.get(url, data, callback, "json");
    },
    getScript: function getScript(url, callback) {
      return jQuery.get(url, undefined, callback, "script");
    }
  });
  jQuery.each(["get", "post"], function (_i, method) {
    jQuery[method] = function (url, data, callback, type) {
      // Shift arguments if data argument was omitted
      if (isFunction(data)) {
        type = type || callback;
        callback = data;
        data = undefined;
      } // The url can be an options object (which then must have .url)


      return jQuery.ajax(jQuery.extend({
        url: url,
        type: method,
        dataType: type,
        data: data,
        success: callback
      }, jQuery.isPlainObject(url) && url));
    };
  });
  jQuery.ajaxPrefilter(function (s) {
    var i;

    for (i in s.headers) {
      if (i.toLowerCase() === "content-type") {
        s.contentType = s.headers[i] || "";
      }
    }
  });
  return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/ajax/jsonp.js":
/*!***********************************************!*\
  !*** ./node_modules/jquery/src/ajax/jsonp.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../var/isFunction */ "./node_modules/jquery/src/var/isFunction.js"), __webpack_require__(/*! ./var/nonce */ "./node_modules/jquery/src/ajax/var/nonce.js"), __webpack_require__(/*! ./var/rquery */ "./node_modules/jquery/src/ajax/var/rquery.js"), __webpack_require__(/*! ../ajax */ "./node_modules/jquery/src/ajax.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, isFunction, nonce, rquery) {
  "use strict";

  var oldCallbacks = [],
      rjsonp = /(=)\?(?=&|$)|\?\?/; // Default jsonp settings

  jQuery.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce.guid++;
      this[callback] = true;
      return callback;
    }
  }); // Detect, normalize options and install callbacks for jsonp requests

  jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {
    var callbackName,
        overwritten,
        responseContainer,
        jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data"); // Handle iff the expected data type is "jsonp" or we have a parameter to set

    if (jsonProp || s.dataTypes[0] === "jsonp") {
      // Get callback name, remembering preexisting value associated with it
      callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback; // Insert callback into url or form data

      if (jsonProp) {
        s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
      } else if (s.jsonp !== false) {
        s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
      } // Use data converter to retrieve json after script execution


      s.converters["script json"] = function () {
        if (!responseContainer) {
          jQuery.error(callbackName + " was not called");
        }

        return responseContainer[0];
      }; // Force json dataType


      s.dataTypes[0] = "json"; // Install callback

      overwritten = window[callbackName];

      window[callbackName] = function () {
        responseContainer = arguments;
      }; // Clean-up function (fires after converters)


      jqXHR.always(function () {
        // If previous value didn't exist - remove it
        if (overwritten === undefined) {
          jQuery(window).removeProp(callbackName); // Otherwise restore preexisting value
        } else {
          window[callbackName] = overwritten;
        } // Save back as free


        if (s[callbackName]) {
          // Make sure that re-using the options doesn't screw things around
          s.jsonpCallback = originalSettings.jsonpCallback; // Save the callback name for future use

          oldCallbacks.push(callbackName);
        } // Call if it was a function and we have a response


        if (responseContainer && isFunction(overwritten)) {
          overwritten(responseContainer[0]);
        }

        responseContainer = overwritten = undefined;
      }); // Delegate to script

      return "script";
    }
  });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/ajax/load.js":
/*!**********************************************!*\
  !*** ./node_modules/jquery/src/ajax/load.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../core/stripAndCollapse */ "./node_modules/jquery/src/core/stripAndCollapse.js"), __webpack_require__(/*! ../var/isFunction */ "./node_modules/jquery/src/var/isFunction.js"), __webpack_require__(/*! ../core/parseHTML */ "./node_modules/jquery/src/core/parseHTML.js"), __webpack_require__(/*! ../ajax */ "./node_modules/jquery/src/ajax.js"), __webpack_require__(/*! ../traversing */ "./node_modules/jquery/src/traversing.js"), __webpack_require__(/*! ../manipulation */ "./node_modules/jquery/src/manipulation.js"), __webpack_require__(/*! ../selector */ "./node_modules/jquery/src/selector.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, stripAndCollapse, isFunction) {
  "use strict";
  /**
   * Load a url into a page
   */

  jQuery.fn.load = function (url, params, callback) {
    var selector,
        type,
        response,
        self = this,
        off = url.indexOf(" ");

    if (off > -1) {
      selector = stripAndCollapse(url.slice(off));
      url = url.slice(0, off);
    } // If it's a function


    if (isFunction(params)) {
      // We assume that it's the callback
      callback = params;
      params = undefined; // Otherwise, build a param string
    } else if (params && _typeof(params) === "object") {
      type = "POST";
    } // If we have elements to modify, make the request


    if (self.length > 0) {
      jQuery.ajax({
        url: url,
        // If "type" variable is undefined, then "GET" method will be used.
        // Make value of this field explicit since
        // user can override it through ajaxSetup method
        type: type || "GET",
        dataType: "html",
        data: params
      }).done(function (responseText) {
        // Save response for use in complete callback
        response = arguments;
        self.html(selector ? // If a selector was specified, locate the right elements in a dummy div
        // Exclude scripts to avoid IE 'Permission Denied' errors
        jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : // Otherwise use the full result
        responseText); // If the request succeeds, this function gets "data", "status", "jqXHR"
        // but they are ignored because response was set above.
        // If it fails, this function gets "jqXHR", "status", "error"
      }).always(callback && function (jqXHR, status) {
        self.each(function () {
          callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
        });
      });
    }

    return this;
  };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/ajax/script.js":
/*!************************************************!*\
  !*** ./node_modules/jquery/src/ajax/script.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../var/document */ "./node_modules/jquery/src/var/document.js"), __webpack_require__(/*! ../ajax */ "./node_modules/jquery/src/ajax.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, document) {
  "use strict"; // Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)

  jQuery.ajaxPrefilter(function (s) {
    if (s.crossDomain) {
      s.contents.script = false;
    }
  }); // Install script dataType

  jQuery.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(text) {
        jQuery.globalEval(text);
        return text;
      }
    }
  }); // Handle cache's special case and crossDomain

  jQuery.ajaxPrefilter("script", function (s) {
    if (s.cache === undefined) {
      s.cache = false;
    }

    if (s.crossDomain) {
      s.type = "GET";
    }
  }); // Bind script tag hack transport

  jQuery.ajaxTransport("script", function (s) {
    // This transport only deals with cross domain or forced-by-attrs requests
    if (s.crossDomain || s.scriptAttrs) {
      var script, _callback;

      return {
        send: function send(_, complete) {
          script = jQuery("<script>").attr(s.scriptAttrs || {}).prop({
            charset: s.scriptCharset,
            src: s.url
          }).on("load error", _callback = function callback(evt) {
            script.remove();
            _callback = null;

            if (evt) {
              complete(evt.type === "error" ? 404 : 200, evt.type);
            }
          }); // Use native DOM manipulation to avoid our domManip AJAX trickery

          document.head.appendChild(script[0]);
        },
        abort: function abort() {
          if (_callback) {
            _callback();
          }
        }
      };
    }
  });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/ajax/var/location.js":
/*!******************************************************!*\
  !*** ./node_modules/jquery/src/ajax/var/location.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict";

  return window.location;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/ajax/var/nonce.js":
/*!***************************************************!*\
  !*** ./node_modules/jquery/src/ajax/var/nonce.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict";

  return {
    guid: Date.now()
  };
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/ajax/var/rquery.js":
/*!****************************************************!*\
  !*** ./node_modules/jquery/src/ajax/var/rquery.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict";

  return /\?/;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/ajax/xhr.js":
/*!*********************************************!*\
  !*** ./node_modules/jquery/src/ajax/xhr.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../var/support */ "./node_modules/jquery/src/var/support.js"), __webpack_require__(/*! ../ajax */ "./node_modules/jquery/src/ajax.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, support) {
  "use strict";

  jQuery.ajaxSettings.xhr = function () {
    try {
      return new window.XMLHttpRequest();
    } catch (e) {}
  };

  var xhrSuccessStatus = {
    // File protocol always yields status code 0, assume 200
    0: 200,
    // Support: IE <=9 only
    // #1450: sometimes IE returns 1223 when it should be 204
    1223: 204
  },
      xhrSupported = jQuery.ajaxSettings.xhr();
  support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
  support.ajax = xhrSupported = !!xhrSupported;
  jQuery.ajaxTransport(function (options) {
    var _callback, errorCallback; // Cross domain only allowed if supported through XMLHttpRequest


    if (support.cors || xhrSupported && !options.crossDomain) {
      return {
        send: function send(headers, complete) {
          var i,
              xhr = options.xhr();
          xhr.open(options.type, options.url, options.async, options.username, options.password); // Apply custom fields if provided

          if (options.xhrFields) {
            for (i in options.xhrFields) {
              xhr[i] = options.xhrFields[i];
            }
          } // Override mime type if needed


          if (options.mimeType && xhr.overrideMimeType) {
            xhr.overrideMimeType(options.mimeType);
          } // X-Requested-With header
          // For cross-domain requests, seeing as conditions for a preflight are
          // akin to a jigsaw puzzle, we simply never set it to be sure.
          // (it can always be set on a per-request basis or even using ajaxSetup)
          // For same-domain requests, won't change header if already provided.


          if (!options.crossDomain && !headers["X-Requested-With"]) {
            headers["X-Requested-With"] = "XMLHttpRequest";
          } // Set headers


          for (i in headers) {
            xhr.setRequestHeader(i, headers[i]);
          } // Callback


          _callback = function callback(type) {
            return function () {
              if (_callback) {
                _callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;

                if (type === "abort") {
                  xhr.abort();
                } else if (type === "error") {
                  // Support: IE <=9 only
                  // On a manual native abort, IE9 throws
                  // errors on any property access that is not readyState
                  if (typeof xhr.status !== "number") {
                    complete(0, "error");
                  } else {
                    complete( // File: protocol always yields status 0; see #8605, #14207
                    xhr.status, xhr.statusText);
                  }
                } else {
                  complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, // Support: IE <=9 only
                  // IE9 has no XHR2 but throws on binary (trac-11426)
                  // For XHR2 non-text, let the caller handle it (gh-2498)
                  (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? {
                    binary: xhr.response
                  } : {
                    text: xhr.responseText
                  }, xhr.getAllResponseHeaders());
                }
              }
            };
          }; // Listen to events


          xhr.onload = _callback();
          errorCallback = xhr.onerror = xhr.ontimeout = _callback("error"); // Support: IE 9 only
          // Use onreadystatechange to replace onabort
          // to handle uncaught aborts

          if (xhr.onabort !== undefined) {
            xhr.onabort = errorCallback;
          } else {
            xhr.onreadystatechange = function () {
              // Check readyState before timeout as it changes
              if (xhr.readyState === 4) {
                // Allow onerror to be called first,
                // but that will not handle a native abort
                // Also, save errorCallback to a variable
                // as xhr.onerror cannot be accessed
                window.setTimeout(function () {
                  if (_callback) {
                    errorCallback();
                  }
                });
              }
            };
          } // Create the abort callback


          _callback = _callback("abort");

          try {
            // Do send the request (this may raise an exception)
            xhr.send(options.hasContent && options.data || null);
          } catch (e) {
            // #14683: Only rethrow if this hasn't been notified as an error yet
            if (_callback) {
              throw e;
            }
          }
        },
        abort: function abort() {
          if (_callback) {
            _callback();
          }
        }
      };
    }
  });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/attributes.js":
/*!***********************************************!*\
  !*** ./node_modules/jquery/src/attributes.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ./attributes/attr */ "./node_modules/jquery/src/attributes/attr.js"), __webpack_require__(/*! ./attributes/prop */ "./node_modules/jquery/src/attributes/prop.js"), __webpack_require__(/*! ./attributes/classes */ "./node_modules/jquery/src/attributes/classes.js"), __webpack_require__(/*! ./attributes/val */ "./node_modules/jquery/src/attributes/val.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery) {
  "use strict"; // Return jQuery for attributes-only inclusion

  return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/attributes/attr.js":
/*!****************************************************!*\
  !*** ./node_modules/jquery/src/attributes/attr.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../core/access */ "./node_modules/jquery/src/core/access.js"), __webpack_require__(/*! ../core/nodeName */ "./node_modules/jquery/src/core/nodeName.js"), __webpack_require__(/*! ./support */ "./node_modules/jquery/src/attributes/support.js"), __webpack_require__(/*! ../var/rnothtmlwhite */ "./node_modules/jquery/src/var/rnothtmlwhite.js"), __webpack_require__(/*! ../selector */ "./node_modules/jquery/src/selector.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, access, nodeName, support, rnothtmlwhite) {
  "use strict";

  var boolHook,
      attrHandle = jQuery.expr.attrHandle;
  jQuery.fn.extend({
    attr: function attr(name, value) {
      return access(this, jQuery.attr, name, value, arguments.length > 1);
    },
    removeAttr: function removeAttr(name) {
      return this.each(function () {
        jQuery.removeAttr(this, name);
      });
    }
  });
  jQuery.extend({
    attr: function attr(elem, name, value) {
      var ret,
          hooks,
          nType = elem.nodeType; // Don't get/set attributes on text, comment and attribute nodes

      if (nType === 3 || nType === 8 || nType === 2) {
        return;
      } // Fallback to prop when attributes are not supported


      if (typeof elem.getAttribute === "undefined") {
        return jQuery.prop(elem, name, value);
      } // Attribute hooks are determined by the lowercase version
      // Grab necessary hook if one is defined


      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
      }

      if (value !== undefined) {
        if (value === null) {
          jQuery.removeAttr(elem, name);
          return;
        }

        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        }

        elem.setAttribute(name, value + "");
        return value;
      }

      if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      }

      ret = jQuery.find.attr(elem, name); // Non-existent attributes return null, we normalize to undefined

      return ret == null ? undefined : ret;
    },
    attrHooks: {
      type: {
        set: function set(elem, value) {
          if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
            var val = elem.value;
            elem.setAttribute("type", value);

            if (val) {
              elem.value = val;
            }

            return value;
          }
        }
      }
    },
    removeAttr: function removeAttr(elem, value) {
      var name,
          i = 0,
          // Attribute names can contain non-HTML whitespace characters
      // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
      attrNames = value && value.match(rnothtmlwhite);

      if (attrNames && elem.nodeType === 1) {
        while (name = attrNames[i++]) {
          elem.removeAttribute(name);
        }
      }
    }
  }); // Hooks for boolean attributes

  boolHook = {
    set: function set(elem, value, name) {
      if (value === false) {
        // Remove boolean attributes when set to false
        jQuery.removeAttr(elem, name);
      } else {
        elem.setAttribute(name, name);
      }

      return name;
    }
  };
  jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (_i, name) {
    var getter = attrHandle[name] || jQuery.find.attr;

    attrHandle[name] = function (elem, name, isXML) {
      var ret,
          handle,
          lowercaseName = name.toLowerCase();

      if (!isXML) {
        // Avoid an infinite loop by temporarily removing this function from the getter
        handle = attrHandle[lowercaseName];
        attrHandle[lowercaseName] = ret;
        ret = getter(elem, name, isXML) != null ? lowercaseName : null;
        attrHandle[lowercaseName] = handle;
      }

      return ret;
    };
  });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/attributes/classes.js":
/*!*******************************************************!*\
  !*** ./node_modules/jquery/src/attributes/classes.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../core/stripAndCollapse */ "./node_modules/jquery/src/core/stripAndCollapse.js"), __webpack_require__(/*! ../var/isFunction */ "./node_modules/jquery/src/var/isFunction.js"), __webpack_require__(/*! ../var/rnothtmlwhite */ "./node_modules/jquery/src/var/rnothtmlwhite.js"), __webpack_require__(/*! ../data/var/dataPriv */ "./node_modules/jquery/src/data/var/dataPriv.js"), __webpack_require__(/*! ../core/init */ "./node_modules/jquery/src/core/init.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, stripAndCollapse, isFunction, rnothtmlwhite, dataPriv) {
  "use strict";

  function getClass(elem) {
    return elem.getAttribute && elem.getAttribute("class") || "";
  }

  function classesToArray(value) {
    if (Array.isArray(value)) {
      return value;
    }

    if (typeof value === "string") {
      return value.match(rnothtmlwhite) || [];
    }

    return [];
  }

  jQuery.fn.extend({
    addClass: function addClass(value) {
      var classes,
          elem,
          cur,
          curValue,
          clazz,
          j,
          finalValue,
          i = 0;

      if (isFunction(value)) {
        return this.each(function (j) {
          jQuery(this).addClass(value.call(this, j, getClass(this)));
        });
      }

      classes = classesToArray(value);

      if (classes.length) {
        while (elem = this[i++]) {
          curValue = getClass(elem);
          cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

          if (cur) {
            j = 0;

            while (clazz = classes[j++]) {
              if (cur.indexOf(" " + clazz + " ") < 0) {
                cur += clazz + " ";
              }
            } // Only assign if different to avoid unneeded rendering.


            finalValue = stripAndCollapse(cur);

            if (curValue !== finalValue) {
              elem.setAttribute("class", finalValue);
            }
          }
        }
      }

      return this;
    },
    removeClass: function removeClass(value) {
      var classes,
          elem,
          cur,
          curValue,
          clazz,
          j,
          finalValue,
          i = 0;

      if (isFunction(value)) {
        return this.each(function (j) {
          jQuery(this).removeClass(value.call(this, j, getClass(this)));
        });
      }

      if (!arguments.length) {
        return this.attr("class", "");
      }

      classes = classesToArray(value);

      if (classes.length) {
        while (elem = this[i++]) {
          curValue = getClass(elem); // This expression is here for better compressibility (see addClass)

          cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

          if (cur) {
            j = 0;

            while (clazz = classes[j++]) {
              // Remove *all* instances
              while (cur.indexOf(" " + clazz + " ") > -1) {
                cur = cur.replace(" " + clazz + " ", " ");
              }
            } // Only assign if different to avoid unneeded rendering.


            finalValue = stripAndCollapse(cur);

            if (curValue !== finalValue) {
              elem.setAttribute("class", finalValue);
            }
          }
        }
      }

      return this;
    },
    toggleClass: function toggleClass(value, stateVal) {
      var type = _typeof(value),
          isValidValue = type === "string" || Array.isArray(value);

      if (typeof stateVal === "boolean" && isValidValue) {
        return stateVal ? this.addClass(value) : this.removeClass(value);
      }

      if (isFunction(value)) {
        return this.each(function (i) {
          jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
        });
      }

      return this.each(function () {
        var className, i, self, classNames;

        if (isValidValue) {
          // Toggle individual class names
          i = 0;
          self = jQuery(this);
          classNames = classesToArray(value);

          while (className = classNames[i++]) {
            // Check each className given, space separated list
            if (self.hasClass(className)) {
              self.removeClass(className);
            } else {
              self.addClass(className);
            }
          } // Toggle whole class name

        } else if (value === undefined || type === "boolean") {
          className = getClass(this);

          if (className) {
            // Store className if set
            dataPriv.set(this, "__className__", className);
          } // If the element has a class name or if we're passed `false`,
          // then remove the whole classname (if there was one, the above saved it).
          // Otherwise bring back whatever was previously saved (if anything),
          // falling back to the empty string if nothing was stored.


          if (this.setAttribute) {
            this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
          }
        }
      });
    },
    hasClass: function hasClass(selector) {
      var className,
          elem,
          i = 0;
      className = " " + selector + " ";

      while (elem = this[i++]) {
        if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
          return true;
        }
      }

      return false;
    }
  });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/attributes/prop.js":
/*!****************************************************!*\
  !*** ./node_modules/jquery/src/attributes/prop.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../core/access */ "./node_modules/jquery/src/core/access.js"), __webpack_require__(/*! ./support */ "./node_modules/jquery/src/attributes/support.js"), __webpack_require__(/*! ../selector */ "./node_modules/jquery/src/selector.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, access, support) {
  "use strict";

  var rfocusable = /^(?:input|select|textarea|button)$/i,
      rclickable = /^(?:a|area)$/i;
  jQuery.fn.extend({
    prop: function prop(name, value) {
      return access(this, jQuery.prop, name, value, arguments.length > 1);
    },
    removeProp: function removeProp(name) {
      return this.each(function () {
        delete this[jQuery.propFix[name] || name];
      });
    }
  });
  jQuery.extend({
    prop: function prop(elem, name, value) {
      var ret,
          hooks,
          nType = elem.nodeType; // Don't get/set properties on text, comment and attribute nodes

      if (nType === 3 || nType === 8 || nType === 2) {
        return;
      }

      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        // Fix name and attach hooks
        name = jQuery.propFix[name] || name;
        hooks = jQuery.propHooks[name];
      }

      if (value !== undefined) {
        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        }

        return elem[name] = value;
      }

      if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      }

      return elem[name];
    },
    propHooks: {
      tabIndex: {
        get: function get(elem) {
          // Support: IE <=9 - 11 only
          // elem.tabIndex doesn't always return the
          // correct value when it hasn't been explicitly set
          // https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
          // Use proper attribute retrieval(#12072)
          var tabindex = jQuery.find.attr(elem, "tabindex");

          if (tabindex) {
            return parseInt(tabindex, 10);
          }

          if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
            return 0;
          }

          return -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }); // Support: IE <=11 only
  // Accessing the selectedIndex property
  // forces the browser to respect setting selected
  // on the option
  // The getter ensures a default option is selected
  // when in an optgroup
  // eslint rule "no-unused-expressions" is disabled for this code
  // since it considers such accessions noop

  if (!support.optSelected) {
    jQuery.propHooks.selected = {
      get: function get(elem) {
        /* eslint no-unused-expressions: "off" */
        var parent = elem.parentNode;

        if (parent && parent.parentNode) {
          parent.parentNode.selectedIndex;
        }

        return null;
      },
      set: function set(elem) {
        /* eslint no-unused-expressions: "off" */
        var parent = elem.parentNode;

        if (parent) {
          parent.selectedIndex;

          if (parent.parentNode) {
            parent.parentNode.selectedIndex;
          }
        }
      }
    };
  }

  jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    jQuery.propFix[this.toLowerCase()] = this;
  });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/attributes/support.js":
/*!*******************************************************!*\
  !*** ./node_modules/jquery/src/attributes/support.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../var/document */ "./node_modules/jquery/src/var/document.js"), __webpack_require__(/*! ../var/support */ "./node_modules/jquery/src/var/support.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (document, support) {
  "use strict";

  (function () {
    var input = document.createElement("input"),
        select = document.createElement("select"),
        opt = select.appendChild(document.createElement("option"));
    input.type = "checkbox"; // Support: Android <=4.3 only
    // Default value for a checkbox should be "on"

    support.checkOn = input.value !== ""; // Support: IE <=11 only
    // Must access selectedIndex to make default options select

    support.optSelected = opt.selected; // Support: IE <=11 only
    // An input loses its value after becoming a radio

    input = document.createElement("input");
    input.value = "t";
    input.type = "radio";
    support.radioValue = input.value === "t";
  })();

  return support;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/attributes/val.js":
/*!***************************************************!*\
  !*** ./node_modules/jquery/src/attributes/val.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../core/stripAndCollapse */ "./node_modules/jquery/src/core/stripAndCollapse.js"), __webpack_require__(/*! ./support */ "./node_modules/jquery/src/attributes/support.js"), __webpack_require__(/*! ../core/nodeName */ "./node_modules/jquery/src/core/nodeName.js"), __webpack_require__(/*! ../var/isFunction */ "./node_modules/jquery/src/var/isFunction.js"), __webpack_require__(/*! ../core/init */ "./node_modules/jquery/src/core/init.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, stripAndCollapse, support, nodeName, isFunction) {
  "use strict";

  var rreturn = /\r/g;
  jQuery.fn.extend({
    val: function val(value) {
      var hooks,
          ret,
          valueIsFunction,
          elem = this[0];

      if (!arguments.length) {
        if (elem) {
          hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];

          if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
            return ret;
          }

          ret = elem.value; // Handle most common string cases

          if (typeof ret === "string") {
            return ret.replace(rreturn, "");
          } // Handle cases where value is null/undef or number


          return ret == null ? "" : ret;
        }

        return;
      }

      valueIsFunction = isFunction(value);
      return this.each(function (i) {
        var val;

        if (this.nodeType !== 1) {
          return;
        }

        if (valueIsFunction) {
          val = value.call(this, i, jQuery(this).val());
        } else {
          val = value;
        } // Treat null/undefined as ""; convert numbers to string


        if (val == null) {
          val = "";
        } else if (typeof val === "number") {
          val += "";
        } else if (Array.isArray(val)) {
          val = jQuery.map(val, function (value) {
            return value == null ? "" : value + "";
          });
        }

        hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()]; // If set returns undefined, fall back to normal setting

        if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
          this.value = val;
        }
      });
    }
  });
  jQuery.extend({
    valHooks: {
      option: {
        get: function get(elem) {
          var val = jQuery.find.attr(elem, "value");
          return val != null ? val : // Support: IE <=10 - 11 only
          // option.text throws exceptions (#14686, #14858)
          // Strip and collapse whitespace
          // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
          stripAndCollapse(jQuery.text(elem));
        }
      },
      select: {
        get: function get(elem) {
          var value,
              option,
              i,
              options = elem.options,
              index = elem.selectedIndex,
              one = elem.type === "select-one",
              values = one ? null : [],
              max = one ? index + 1 : options.length;

          if (index < 0) {
            i = max;
          } else {
            i = one ? index : 0;
          } // Loop through all the selected options


          for (; i < max; i++) {
            option = options[i]; // Support: IE <=9 only
            // IE8-9 doesn't update selected after form reset (#2551)

            if ((option.selected || i === index) && // Don't return options that are disabled or in a disabled optgroup
            !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
              // Get the specific value for the option
              value = jQuery(option).val(); // We don't need an array for one selects

              if (one) {
                return value;
              } // Multi-Selects return an array


              values.push(value);
            }
          }

          return values;
        },
        set: function set(elem, value) {
          var optionSet,
              option,
              options = elem.options,
              values = jQuery.makeArray(value),
              i = options.length;

          while (i--) {
            option = options[i];
            /* eslint-disable no-cond-assign */

            if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
              optionSet = true;
            }
            /* eslint-enable no-cond-assign */

          } // Force browsers to behave consistently when non-matching value is set


          if (!optionSet) {
            elem.selectedIndex = -1;
          }

          return values;
        }
      }
    }
  }); // Radios and checkboxes getter/setter

  jQuery.each(["radio", "checkbox"], function () {
    jQuery.valHooks[this] = {
      set: function set(elem, value) {
        if (Array.isArray(value)) {
          return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
        }
      }
    };

    if (!support.checkOn) {
      jQuery.valHooks[this].get = function (elem) {
        return elem.getAttribute("value") === null ? "on" : elem.value;
      };
    }
  });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/callbacks.js":
/*!**********************************************!*\
  !*** ./node_modules/jquery/src/callbacks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ./core/toType */ "./node_modules/jquery/src/core/toType.js"), __webpack_require__(/*! ./var/isFunction */ "./node_modules/jquery/src/var/isFunction.js"), __webpack_require__(/*! ./var/rnothtmlwhite */ "./node_modules/jquery/src/var/rnothtmlwhite.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, toType, isFunction, rnothtmlwhite) {
  "use strict"; // Convert String-formatted options into Object-formatted ones

  function createOptions(options) {
    var object = {};
    jQuery.each(options.match(rnothtmlwhite) || [], function (_, flag) {
      object[flag] = true;
    });
    return object;
  }
  /*
   * Create a callback list using the following parameters:
   *
   *	options: an optional list of space-separated options that will change how
   *			the callback list behaves or a more traditional option object
   *
   * By default a callback list will act like an event callback list and can be
   * "fired" multiple times.
   *
   * Possible options:
   *
   *	once:			will ensure the callback list can only be fired once (like a Deferred)
   *
   *	memory:			will keep track of previous values and will call any callback added
   *					after the list has been fired right away with the latest "memorized"
   *					values (like a Deferred)
   *
   *	unique:			will ensure a callback can only be added once (no duplicate in the list)
   *
   *	stopOnFalse:	interrupt callings when a callback returns false
   *
   */


  jQuery.Callbacks = function (options) {
    // Convert options from String-formatted to Object-formatted if needed
    // (we check in cache first)
    options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);

    var // Flag to know if list is currently firing
    firing,
        // Last fire value for non-forgettable lists
    memory,
        // Flag to know if list was already fired
    _fired,
        // Flag to prevent firing
    _locked,
        // Actual callback list
    list = [],
        // Queue of execution data for repeatable lists
    queue = [],
        // Index of currently firing callback (modified by add/remove as needed)
    firingIndex = -1,
        // Fire callbacks
    fire = function fire() {
      // Enforce single-firing
      _locked = _locked || options.once; // Execute callbacks for all pending executions,
      // respecting firingIndex overrides and runtime changes

      _fired = firing = true;

      for (; queue.length; firingIndex = -1) {
        memory = queue.shift();

        while (++firingIndex < list.length) {
          // Run callback and check for early termination
          if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
            // Jump to end and forget the data so .add doesn't re-fire
            firingIndex = list.length;
            memory = false;
          }
        }
      } // Forget the data if we're done with it


      if (!options.memory) {
        memory = false;
      }

      firing = false; // Clean up if we're done firing for good

      if (_locked) {
        // Keep an empty list if we have data for future add calls
        if (memory) {
          list = []; // Otherwise, this object is spent
        } else {
          list = "";
        }
      }
    },
        // Actual Callbacks object
    self = {
      // Add a callback or a collection of callbacks to the list
      add: function add() {
        if (list) {
          // If we have memory from a past run, we should fire after adding
          if (memory && !firing) {
            firingIndex = list.length - 1;
            queue.push(memory);
          }

          (function add(args) {
            jQuery.each(args, function (_, arg) {
              if (isFunction(arg)) {
                if (!options.unique || !self.has(arg)) {
                  list.push(arg);
                }
              } else if (arg && arg.length && toType(arg) !== "string") {
                // Inspect recursively
                add(arg);
              }
            });
          })(arguments);

          if (memory && !firing) {
            fire();
          }
        }

        return this;
      },
      // Remove a callback from the list
      remove: function remove() {
        jQuery.each(arguments, function (_, arg) {
          var index;

          while ((index = jQuery.inArray(arg, list, index)) > -1) {
            list.splice(index, 1); // Handle firing indexes

            if (index <= firingIndex) {
              firingIndex--;
            }
          }
        });
        return this;
      },
      // Check if a given callback is in the list.
      // If no argument is given, return whether or not list has callbacks attached.
      has: function has(fn) {
        return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
      },
      // Remove all callbacks from the list
      empty: function empty() {
        if (list) {
          list = [];
        }

        return this;
      },
      // Disable .fire and .add
      // Abort any current/pending executions
      // Clear all callbacks and values
      disable: function disable() {
        _locked = queue = [];
        list = memory = "";
        return this;
      },
      disabled: function disabled() {
        return !list;
      },
      // Disable .fire
      // Also disable .add unless we have memory (since it would have no effect)
      // Abort any pending executions
      lock: function lock() {
        _locked = queue = [];

        if (!memory && !firing) {
          list = memory = "";
        }

        return this;
      },
      locked: function locked() {
        return !!_locked;
      },
      // Call all callbacks with the given context and arguments
      fireWith: function fireWith(context, args) {
        if (!_locked) {
          args = args || [];
          args = [context, args.slice ? args.slice() : args];
          queue.push(args);

          if (!firing) {
            fire();
          }
        }

        return this;
      },
      // Call all the callbacks with the given arguments
      fire: function fire() {
        self.fireWith(this, arguments);
        return this;
      },
      // To know if the callbacks have already been called at least once
      fired: function fired() {
        return !!_fired;
      }
    };

    return self;
  };

  return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/core.js":
/*!*****************************************!*\
  !*** ./node_modules/jquery/src/core.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./var/arr */ "./node_modules/jquery/src/var/arr.js"), __webpack_require__(/*! ./var/getProto */ "./node_modules/jquery/src/var/getProto.js"), __webpack_require__(/*! ./var/slice */ "./node_modules/jquery/src/var/slice.js"), __webpack_require__(/*! ./var/flat */ "./node_modules/jquery/src/var/flat.js"), __webpack_require__(/*! ./var/push */ "./node_modules/jquery/src/var/push.js"), __webpack_require__(/*! ./var/indexOf */ "./node_modules/jquery/src/var/indexOf.js"), __webpack_require__(/*! ./var/class2type */ "./node_modules/jquery/src/var/class2type.js"), __webpack_require__(/*! ./var/toString */ "./node_modules/jquery/src/var/toString.js"), __webpack_require__(/*! ./var/hasOwn */ "./node_modules/jquery/src/var/hasOwn.js"), __webpack_require__(/*! ./var/fnToString */ "./node_modules/jquery/src/var/fnToString.js"), __webpack_require__(/*! ./var/ObjectFunctionString */ "./node_modules/jquery/src/var/ObjectFunctionString.js"), __webpack_require__(/*! ./var/support */ "./node_modules/jquery/src/var/support.js"), __webpack_require__(/*! ./var/isFunction */ "./node_modules/jquery/src/var/isFunction.js"), __webpack_require__(/*! ./var/isWindow */ "./node_modules/jquery/src/var/isWindow.js"), __webpack_require__(/*! ./core/DOMEval */ "./node_modules/jquery/src/core/DOMEval.js"), __webpack_require__(/*! ./core/toType */ "./node_modules/jquery/src/core/toType.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (arr, getProto, _slice, flat, push, indexOf, class2type, toString, hasOwn, fnToString, ObjectFunctionString, support, isFunction, isWindow, DOMEval, toType) {
  "use strict";

  var version = "3.6.0",
      // Define a local copy of jQuery
  jQuery = function jQuery(selector, context) {
    // The jQuery object is actually just the init constructor 'enhanced'
    // Need init if jQuery is called (just allow error to be thrown if not included)
    return new jQuery.fn.init(selector, context);
  };

  jQuery.fn = jQuery.prototype = {
    // The current version of jQuery being used
    jquery: version,
    constructor: jQuery,
    // The default length of a jQuery object is 0
    length: 0,
    toArray: function toArray() {
      return _slice.call(this);
    },
    // Get the Nth element in the matched element set OR
    // Get the whole matched element set as a clean array
    get: function get(num) {
      // Return all the elements in a clean array
      if (num == null) {
        return _slice.call(this);
      } // Return just the one element from the set


      return num < 0 ? this[num + this.length] : this[num];
    },
    // Take an array of elements and push it onto the stack
    // (returning the new matched element set)
    pushStack: function pushStack(elems) {
      // Build a new jQuery matched element set
      var ret = jQuery.merge(this.constructor(), elems); // Add the old object onto the stack (as a reference)

      ret.prevObject = this; // Return the newly-formed element set

      return ret;
    },
    // Execute a callback for every element in the matched set.
    each: function each(callback) {
      return jQuery.each(this, callback);
    },
    map: function map(callback) {
      return this.pushStack(jQuery.map(this, function (elem, i) {
        return callback.call(elem, i, elem);
      }));
    },
    slice: function slice() {
      return this.pushStack(_slice.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    even: function even() {
      return this.pushStack(jQuery.grep(this, function (_elem, i) {
        return (i + 1) % 2;
      }));
    },
    odd: function odd() {
      return this.pushStack(jQuery.grep(this, function (_elem, i) {
        return i % 2;
      }));
    },
    eq: function eq(i) {
      var len = this.length,
          j = +i + (i < 0 ? len : 0);
      return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    // For internal use only.
    // Behaves like an Array's method, not like a jQuery method.
    push: push,
    sort: arr.sort,
    splice: arr.splice
  };

  jQuery.extend = jQuery.fn.extend = function () {
    var options,
        name,
        src,
        copy,
        copyIsArray,
        clone,
        target = arguments[0] || {},
        i = 1,
        length = arguments.length,
        deep = false; // Handle a deep copy situation

    if (typeof target === "boolean") {
      deep = target; // Skip the boolean and the target

      target = arguments[i] || {};
      i++;
    } // Handle case when target is a string or something (possible in deep copy)


    if (_typeof(target) !== "object" && !isFunction(target)) {
      target = {};
    } // Extend jQuery itself if only one argument is passed


    if (i === length) {
      target = this;
      i--;
    }

    for (; i < length; i++) {
      // Only deal with non-null/undefined values
      if ((options = arguments[i]) != null) {
        // Extend the base object
        for (name in options) {
          copy = options[name]; // Prevent Object.prototype pollution
          // Prevent never-ending loop

          if (name === "__proto__" || target === copy) {
            continue;
          } // Recurse if we're merging plain objects or arrays


          if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
            src = target[name]; // Ensure proper type for the source value

            if (copyIsArray && !Array.isArray(src)) {
              clone = [];
            } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
              clone = {};
            } else {
              clone = src;
            }

            copyIsArray = false; // Never move original objects, clone them

            target[name] = jQuery.extend(deep, clone, copy); // Don't bring in undefined values
          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
    } // Return the modified object


    return target;
  };

  jQuery.extend({
    // Unique for each copy of jQuery on the page
    expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
    // Assume jQuery is ready without the ready module
    isReady: true,
    error: function error(msg) {
      throw new Error(msg);
    },
    noop: function noop() {},
    isPlainObject: function isPlainObject(obj) {
      var proto, Ctor; // Detect obvious negatives
      // Use toString instead of jQuery.type to catch host objects

      if (!obj || toString.call(obj) !== "[object Object]") {
        return false;
      }

      proto = getProto(obj); // Objects with no prototype (e.g., `Object.create( null )`) are plain

      if (!proto) {
        return true;
      } // Objects with prototype are plain iff they were constructed by a global Object function


      Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
      return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
    },
    isEmptyObject: function isEmptyObject(obj) {
      var name;

      for (name in obj) {
        return false;
      }

      return true;
    },
    // Evaluates a script in a provided context; falls back to the global one
    // if not specified.
    globalEval: function globalEval(code, options, doc) {
      DOMEval(code, {
        nonce: options && options.nonce
      }, doc);
    },
    each: function each(obj, callback) {
      var length,
          i = 0;

      if (isArrayLike(obj)) {
        length = obj.length;

        for (; i < length; i++) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break;
          }
        }
      } else {
        for (i in obj) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break;
          }
        }
      }

      return obj;
    },
    // results is for internal usage only
    makeArray: function makeArray(arr, results) {
      var ret = results || [];

      if (arr != null) {
        if (isArrayLike(Object(arr))) {
          jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
        } else {
          push.call(ret, arr);
        }
      }

      return ret;
    },
    inArray: function inArray(elem, arr, i) {
      return arr == null ? -1 : indexOf.call(arr, elem, i);
    },
    // Support: Android <=4.0 only, PhantomJS 1 only
    // push.apply(_, arraylike) throws on ancient WebKit
    merge: function merge(first, second) {
      var len = +second.length,
          j = 0,
          i = first.length;

      for (; j < len; j++) {
        first[i++] = second[j];
      }

      first.length = i;
      return first;
    },
    grep: function grep(elems, callback, invert) {
      var callbackInverse,
          matches = [],
          i = 0,
          length = elems.length,
          callbackExpect = !invert; // Go through the array, only saving the items
      // that pass the validator function

      for (; i < length; i++) {
        callbackInverse = !callback(elems[i], i);

        if (callbackInverse !== callbackExpect) {
          matches.push(elems[i]);
        }
      }

      return matches;
    },
    // arg is for internal usage only
    map: function map(elems, callback, arg) {
      var length,
          value,
          i = 0,
          ret = []; // Go through the array, translating each of the items to their new values

      if (isArrayLike(elems)) {
        length = elems.length;

        for (; i < length; i++) {
          value = callback(elems[i], i, arg);

          if (value != null) {
            ret.push(value);
          }
        } // Go through every key on the object,

      } else {
        for (i in elems) {
          value = callback(elems[i], i, arg);

          if (value != null) {
            ret.push(value);
          }
        }
      } // Flatten any nested arrays


      return flat(ret);
    },
    // A global GUID counter for objects
    guid: 1,
    // jQuery.support is not used in Core but other projects attach their
    // properties to it so it needs to exist.
    support: support
  });

  if (typeof Symbol === "function") {
    jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
  } // Populate the class2type map


  jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (_i, name) {
    class2type["[object " + name + "]"] = name.toLowerCase();
  });

  function isArrayLike(obj) {
    // Support: real iOS 8.2 only (not reproducible in simulator)
    // `in` check used to prevent JIT error (gh-2145)
    // hasOwn isn't used here due to false negatives
    // regarding Nodelist length in IE
    var length = !!obj && "length" in obj && obj.length,
        type = toType(obj);

    if (isFunction(obj) || isWindow(obj)) {
      return false;
    }

    return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
  }

  return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery/src/jquery */ "./node_modules/jquery/src/jquery.js")))

/***/ }),

/***/ "./node_modules/jquery/src/core/DOMEval.js":
/*!*************************************************!*\
  !*** ./node_modules/jquery/src/core/DOMEval.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../var/document */ "./node_modules/jquery/src/var/document.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (document) {
  "use strict";

  var preservedScriptAttributes = {
    type: true,
    src: true,
    nonce: true,
    noModule: true
  };

  function DOMEval(code, node, doc) {
    doc = doc || document;
    var i,
        val,
        script = doc.createElement("script");
    script.text = code;

    if (node) {
      for (i in preservedScriptAttributes) {
        // Support: Firefox 64+, Edge 18+
        // Some browsers don't support the "nonce" property on scripts.
        // On the other hand, just using `getAttribute` is not enough as
        // the `nonce` attribute is reset to an empty string whenever it
        // becomes browsing-context connected.
        // See https://github.com/whatwg/html/issues/2369
        // See https://html.spec.whatwg.org/#nonce-attributes
        // The `node.getAttribute` check was added for the sake of
        // `jQuery.globalEval` so that it can fake a nonce-containing node
        // via an object.
        val = node[i] || node.getAttribute && node.getAttribute(i);

        if (val) {
          script.setAttribute(i, val);
        }
      }
    }

    doc.head.appendChild(script).parentNode.removeChild(script);
  }

  return DOMEval;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/core/access.js":
/*!************************************************!*\
  !*** ./node_modules/jquery/src/core/access.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../core/toType */ "./node_modules/jquery/src/core/toType.js"), __webpack_require__(/*! ../var/isFunction */ "./node_modules/jquery/src/var/isFunction.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, toType, isFunction) {
  "use strict"; // Multifunctional method to get and set values of a collection
  // The value/s can optionally be executed if it's a function

  var access = function access(elems, fn, key, value, chainable, emptyGet, raw) {
    var i = 0,
        len = elems.length,
        bulk = key == null; // Sets many values

    if (toType(key) === "object") {
      chainable = true;

      for (i in key) {
        access(elems, fn, i, key[i], true, emptyGet, raw);
      } // Sets one value

    } else if (value !== undefined) {
      chainable = true;

      if (!isFunction(value)) {
        raw = true;
      }

      if (bulk) {
        // Bulk operations run against the entire set
        if (raw) {
          fn.call(elems, value);
          fn = null; // ...except when executing function values
        } else {
          bulk = fn;

          fn = function fn(elem, _key, value) {
            return bulk.call(jQuery(elem), value);
          };
        }
      }

      if (fn) {
        for (; i < len; i++) {
          fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
        }
      }
    }

    if (chainable) {
      return elems;
    } // Gets


    if (bulk) {
      return fn.call(elems);
    }

    return len ? fn(elems[0], key) : emptyGet;
  };

  return access;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/core/camelCase.js":
/*!***************************************************!*\
  !*** ./node_modules/jquery/src/core/camelCase.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict"; // Matches dashed string for camelizing

  var rmsPrefix = /^-ms-/,
      rdashAlpha = /-([a-z])/g; // Used by camelCase as callback to replace()

  function fcamelCase(_all, letter) {
    return letter.toUpperCase();
  } // Convert dashed to camelCase; used by the css and data modules
  // Support: IE <=9 - 11, Edge 12 - 15
  // Microsoft forgot to hump their vendor prefix (#9572)


  function camelCase(string) {
    return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
  }

  return camelCase;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/core/init.js":
/*!**********************************************!*\
  !*** ./node_modules/jquery/src/core/init.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Initialize a jQuery object
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../var/document */ "./node_modules/jquery/src/var/document.js"), __webpack_require__(/*! ../var/isFunction */ "./node_modules/jquery/src/var/isFunction.js"), __webpack_require__(/*! ./var/rsingleTag */ "./node_modules/jquery/src/core/var/rsingleTag.js"), __webpack_require__(/*! ../traversing/findFilter */ "./node_modules/jquery/src/traversing/findFilter.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, document, isFunction, rsingleTag) {
  "use strict"; // A central reference to the root jQuery(document)

  var rootjQuery,
      // A simple way to check for HTML strings
  // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
  // Strict HTML recognition (#11290: must start with <)
  // Shortcut simple #id case for speed
  rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
      init = jQuery.fn.init = function (selector, context, root) {
    var match, elem; // HANDLE: $(""), $(null), $(undefined), $(false)

    if (!selector) {
      return this;
    } // Method init() accepts an alternate rootjQuery
    // so migrate can support jQuery.sub (gh-2101)


    root = root || rootjQuery; // Handle HTML strings

    if (typeof selector === "string") {
      if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
        // Assume that strings that start and end with <> are HTML and skip the regex check
        match = [null, selector, null];
      } else {
        match = rquickExpr.exec(selector);
      } // Match html or make sure no context is specified for #id


      if (match && (match[1] || !context)) {
        // HANDLE: $(html) -> $(array)
        if (match[1]) {
          context = context instanceof jQuery ? context[0] : context; // Option to run scripts is true for back-compat
          // Intentionally let the error be thrown if parseHTML is not present

          jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true)); // HANDLE: $(html, props)

          if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
            for (match in context) {
              // Properties of context are called as methods if possible
              if (isFunction(this[match])) {
                this[match](context[match]); // ...and otherwise set as attributes
              } else {
                this.attr(match, context[match]);
              }
            }
          }

          return this; // HANDLE: $(#id)
        } else {
          elem = document.getElementById(match[2]);

          if (elem) {
            // Inject the element directly into the jQuery object
            this[0] = elem;
            this.length = 1;
          }

          return this;
        } // HANDLE: $(expr, $(...))

      } else if (!context || context.jquery) {
        return (context || root).find(selector); // HANDLE: $(expr, context)
        // (which is just equivalent to: $(context).find(expr)
      } else {
        return this.constructor(context).find(selector);
      } // HANDLE: $(DOMElement)

    } else if (selector.nodeType) {
      this[0] = selector;
      this.length = 1;
      return this; // HANDLE: $(function)
      // Shortcut for document ready
    } else if (isFunction(selector)) {
      return root.ready !== undefined ? root.ready(selector) : // Execute immediately if ready is not present
      selector(jQuery);
    }

    return jQuery.makeArray(selector, this);
  }; // Give the init function the jQuery prototype for later instantiation


  init.prototype = jQuery.fn; // Initialize central reference

  rootjQuery = jQuery(document);
  return init;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/core/isAttached.js":
/*!****************************************************!*\
  !*** ./node_modules/jquery/src/core/isAttached.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../var/documentElement */ "./node_modules/jquery/src/var/documentElement.js"), __webpack_require__(/*! ../selector */ "./node_modules/jquery/src/selector.js") // jQuery.contains
], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, documentElement) {
  "use strict";

  var isAttached = function isAttached(elem) {
    return jQuery.contains(elem.ownerDocument, elem);
  },
      composed = {
    composed: true
  }; // Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
  // Check attachment across shadow DOM boundaries when possible (gh-3504)
  // Support: iOS 10.0-10.2 only
  // Early iOS 10 versions support `attachShadow` but not `getRootNode`,
  // leading to errors. We need to check for `getRootNode`.


  if (documentElement.getRootNode) {
    isAttached = function isAttached(elem) {
      return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
    };
  }

  return isAttached;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/core/nodeName.js":
/*!**************************************************!*\
  !*** ./node_modules/jquery/src/core/nodeName.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict";

  function nodeName(elem, name) {
    return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
  }

  return nodeName;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/core/parseHTML.js":
/*!***************************************************!*\
  !*** ./node_modules/jquery/src/core/parseHTML.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../var/document */ "./node_modules/jquery/src/var/document.js"), __webpack_require__(/*! ./var/rsingleTag */ "./node_modules/jquery/src/core/var/rsingleTag.js"), __webpack_require__(/*! ../manipulation/buildFragment */ "./node_modules/jquery/src/manipulation/buildFragment.js"), // This is the only module that needs core/support
__webpack_require__(/*! ./support */ "./node_modules/jquery/src/core/support.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, document, rsingleTag, buildFragment, support) {
  "use strict"; // Argument "data" should be string of html
  // context (optional): If specified, the fragment will be created in this context,
  // defaults to document
  // keepScripts (optional): If true, will include scripts passed in the html string

  jQuery.parseHTML = function (data, context, keepScripts) {
    if (typeof data !== "string") {
      return [];
    }

    if (typeof context === "boolean") {
      keepScripts = context;
      context = false;
    }

    var base, parsed, scripts;

    if (!context) {
      // Stop scripts or inline event handlers from being executed immediately
      // by using document.implementation
      if (support.createHTMLDocument) {
        context = document.implementation.createHTMLDocument(""); // Set the base href for the created document
        // so any parsed elements with URLs
        // are based on the document's URL (gh-2965)

        base = context.createElement("base");
        base.href = document.location.href;
        context.head.appendChild(base);
      } else {
        context = document;
      }
    }

    parsed = rsingleTag.exec(data);
    scripts = !keepScripts && []; // Single tag

    if (parsed) {
      return [context.createElement(parsed[1])];
    }

    parsed = buildFragment([data], context, scripts);

    if (scripts && scripts.length) {
      jQuery(scripts).remove();
    }

    return jQuery.merge([], parsed.childNodes);
  };

  return jQuery.parseHTML;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/core/parseXML.js":
/*!**************************************************!*\
  !*** ./node_modules/jquery/src/core/parseXML.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery) {
  "use strict"; // Cross-browser xml parsing

  jQuery.parseXML = function (data) {
    var xml, parserErrorElem;

    if (!data || typeof data !== "string") {
      return null;
    } // Support: IE 9 - 11 only
    // IE throws on parseFromString with invalid input.


    try {
      xml = new window.DOMParser().parseFromString(data, "text/xml");
    } catch (e) {}

    parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];

    if (!xml || parserErrorElem) {
      jQuery.error("Invalid XML: " + (parserErrorElem ? jQuery.map(parserErrorElem.childNodes, function (el) {
        return el.textContent;
      }).join("\n") : data));
    }

    return xml;
  };

  return jQuery.parseXML;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/core/ready.js":
/*!***********************************************!*\
  !*** ./node_modules/jquery/src/core/ready.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../var/document */ "./node_modules/jquery/src/var/document.js"), __webpack_require__(/*! ../core/readyException */ "./node_modules/jquery/src/core/readyException.js"), __webpack_require__(/*! ../deferred */ "./node_modules/jquery/src/deferred.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, document) {
  "use strict"; // The deferred used on DOM ready

  var readyList = jQuery.Deferred();

  jQuery.fn.ready = function (fn) {
    readyList.then(fn) // Wrap jQuery.readyException in a function so that the lookup
    // happens at the time of error handling instead of callback
    // registration.
    .catch(function (error) {
      jQuery.readyException(error);
    });
    return this;
  };

  jQuery.extend({
    // Is the DOM ready to be used? Set to true once it occurs.
    isReady: false,
    // A counter to track how many items to wait for before
    // the ready event fires. See #6781
    readyWait: 1,
    // Handle when the DOM is ready
    ready: function ready(wait) {
      // Abort if there are pending holds or we're already ready
      if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
        return;
      } // Remember that the DOM is ready


      jQuery.isReady = true; // If a normal DOM Ready event fired, decrement, and wait if need be

      if (wait !== true && --jQuery.readyWait > 0) {
        return;
      } // If there are functions bound, to execute


      readyList.resolveWith(document, [jQuery]);
    }
  });
  jQuery.ready.then = readyList.then; // The ready event handler and self cleanup method

  function completed() {
    document.removeEventListener("DOMContentLoaded", completed);
    window.removeEventListener("load", completed);
    jQuery.ready();
  } // Catch cases where $(document).ready() is called
  // after the browser event has already occurred.
  // Support: IE <=9 - 10 only
  // Older IE sometimes signals "interactive" too soon


  if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {
    // Handle it asynchronously to allow scripts the opportunity to delay ready
    window.setTimeout(jQuery.ready);
  } else {
    // Use the handy event callback
    document.addEventListener("DOMContentLoaded", completed); // A fallback to window.onload, that will always work

    window.addEventListener("load", completed);
  }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/core/readyException.js":
/*!********************************************************!*\
  !*** ./node_modules/jquery/src/core/readyException.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery) {
  "use strict";

  jQuery.readyException = function (error) {
    window.setTimeout(function () {
      throw error;
    });
  };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/core/stripAndCollapse.js":
/*!**********************************************************!*\
  !*** ./node_modules/jquery/src/core/stripAndCollapse.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../var/rnothtmlwhite */ "./node_modules/jquery/src/var/rnothtmlwhite.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (rnothtmlwhite) {
  "use strict"; // Strip and collapse whitespace according to HTML spec
  // https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace

  function stripAndCollapse(value) {
    var tokens = value.match(rnothtmlwhite) || [];
    return tokens.join(" ");
  }

  return stripAndCollapse;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/core/support.js":
/*!*************************************************!*\
  !*** ./node_modules/jquery/src/core/support.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../var/document */ "./node_modules/jquery/src/var/document.js"), __webpack_require__(/*! ../var/support */ "./node_modules/jquery/src/var/support.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (document, support) {
  "use strict"; // Support: Safari 8 only
  // In Safari 8 documents created via document.implementation.createHTMLDocument
  // collapse sibling forms: the second one becomes a child of the first one.
  // Because of that, this security measure has to be disabled in Safari 8.
  // https://bugs.webkit.org/show_bug.cgi?id=137337

  support.createHTMLDocument = function () {
    var body = document.implementation.createHTMLDocument("").body;
    body.innerHTML = "<form></form><form></form>";
    return body.childNodes.length === 2;
  }();

  return support;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/core/toType.js":
/*!************************************************!*\
  !*** ./node_modules/jquery/src/core/toType.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../var/class2type */ "./node_modules/jquery/src/var/class2type.js"), __webpack_require__(/*! ../var/toString */ "./node_modules/jquery/src/var/toString.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (class2type, toString) {
  "use strict";

  function toType(obj) {
    if (obj == null) {
      return obj + "";
    } // Support: Android <=2.3 only (functionish RegExp)


    return _typeof(obj) === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : _typeof(obj);
  }

  return toType;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/core/var/rsingleTag.js":
/*!********************************************************!*\
  !*** ./node_modules/jquery/src/core/var/rsingleTag.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict"; // rsingleTag matches a string consisting of a single HTML element with no attributes
  // and captures the element's name

  return /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/css.js":
/*!****************************************!*\
  !*** ./node_modules/jquery/src/css.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ./core/access */ "./node_modules/jquery/src/core/access.js"), __webpack_require__(/*! ./core/camelCase */ "./node_modules/jquery/src/core/camelCase.js"), __webpack_require__(/*! ./core/nodeName */ "./node_modules/jquery/src/core/nodeName.js"), __webpack_require__(/*! ./var/rcssNum */ "./node_modules/jquery/src/var/rcssNum.js"), __webpack_require__(/*! ./css/var/rnumnonpx */ "./node_modules/jquery/src/css/var/rnumnonpx.js"), __webpack_require__(/*! ./css/var/cssExpand */ "./node_modules/jquery/src/css/var/cssExpand.js"), __webpack_require__(/*! ./css/var/getStyles */ "./node_modules/jquery/src/css/var/getStyles.js"), __webpack_require__(/*! ./css/var/swap */ "./node_modules/jquery/src/css/var/swap.js"), __webpack_require__(/*! ./css/curCSS */ "./node_modules/jquery/src/css/curCSS.js"), __webpack_require__(/*! ./css/adjustCSS */ "./node_modules/jquery/src/css/adjustCSS.js"), __webpack_require__(/*! ./css/addGetHookIf */ "./node_modules/jquery/src/css/addGetHookIf.js"), __webpack_require__(/*! ./css/support */ "./node_modules/jquery/src/css/support.js"), __webpack_require__(/*! ./css/finalPropName */ "./node_modules/jquery/src/css/finalPropName.js"), __webpack_require__(/*! ./core/init */ "./node_modules/jquery/src/core/init.js"), __webpack_require__(/*! ./core/ready */ "./node_modules/jquery/src/core/ready.js"), __webpack_require__(/*! ./selector */ "./node_modules/jquery/src/selector.js") // contains
], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, access, camelCase, nodeName, rcssNum, rnumnonpx, cssExpand, getStyles, swap, curCSS, adjustCSS, addGetHookIf, support, finalPropName) {
  "use strict";

  var // Swappable if display is none or starts with table
  // except "table", "table-cell", or "table-caption"
  // See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
  rdisplayswap = /^(none|table(?!-c[ea]).+)/,
      rcustomProp = /^--/,
      cssShow = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      cssNormalTransform = {
    letterSpacing: "0",
    fontWeight: "400"
  };

  function setPositiveNumber(_elem, value, subtract) {
    // Any relative (+/-) values have already been
    // normalized at this point
    var matches = rcssNum.exec(value);
    return matches ? // Guard against undefined "subtract", e.g., when used as in cssHooks
    Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
  }

  function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
    var i = dimension === "width" ? 1 : 0,
        extra = 0,
        delta = 0; // Adjustment may not be necessary

    if (box === (isBorderBox ? "border" : "content")) {
      return 0;
    }

    for (; i < 4; i += 2) {
      // Both box models exclude margin
      if (box === "margin") {
        delta += jQuery.css(elem, box + cssExpand[i], true, styles);
      } // If we get here with a content-box, we're seeking "padding" or "border" or "margin"


      if (!isBorderBox) {
        // Add padding
        delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles); // For "border" or "margin", add border

        if (box !== "padding") {
          delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles); // But still keep track of it otherwise
        } else {
          extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        } // If we get here with a border-box (content + padding + border), we're seeking "content" or
        // "padding" or "margin"

      } else {
        // For "content", subtract padding
        if (box === "content") {
          delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
        } // For "content" or "padding", subtract border


        if (box !== "margin") {
          delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        }
      }
    } // Account for positive content-box scroll gutter when requested by providing computedVal


    if (!isBorderBox && computedVal >= 0) {
      // offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
      // Assuming integer scroll gutter, subtract the rest and round down
      delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5 // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
      // Use an explicit zero to avoid NaN (gh-3964)
      )) || 0;
    }

    return delta;
  }

  function getWidthOrHeight(elem, dimension, extra) {
    // Start with computed style
    var styles = getStyles(elem),
        // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
    // Fake content-box until we know it's needed to know the true value.
    boxSizingNeeded = !support.boxSizingReliable() || extra,
        isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box",
        valueIsBorderBox = isBorderBox,
        val = curCSS(elem, dimension, styles),
        offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1); // Support: Firefox <=54
    // Return a confounding non-pixel value or feign ignorance, as appropriate.

    if (rnumnonpx.test(val)) {
      if (!extra) {
        return val;
      }

      val = "auto";
    } // Support: IE 9 - 11 only
    // Use offsetWidth/offsetHeight for when box sizing is unreliable.
    // In those cases, the computed value can be trusted to be border-box.


    if ((!support.boxSizingReliable() && isBorderBox || // Support: IE 10 - 11+, Edge 15 - 18+
    // IE/Edge misreport `getComputedStyle` of table rows with width/height
    // set in CSS while `offset*` properties report correct values.
    // Interestingly, in some cases IE 9 doesn't suffer from this issue.
    !support.reliableTrDimensions() && nodeName(elem, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
    // This happens for inline elements with no explicit setting (gh-3571)
    val === "auto" || // Support: Android <=4.1 - 4.3 only
    // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
    !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") && // Make sure the element is visible & connected
    elem.getClientRects().length) {
      isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box"; // Where available, offsetWidth/offsetHeight approximate border box dimensions.
      // Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
      // retrieved value as a content box dimension.

      valueIsBorderBox = offsetProp in elem;

      if (valueIsBorderBox) {
        val = elem[offsetProp];
      }
    } // Normalize "" and auto


    val = parseFloat(val) || 0; // Adjust for the element's box model

    return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, // Provide the current computed size to request scroll gutter calculation (gh-3589)
    val) + "px";
  }

  jQuery.extend({
    // Add in style property hooks for overriding the default
    // behavior of getting and setting a style property
    cssHooks: {
      opacity: {
        get: function get(elem, computed) {
          if (computed) {
            // We should always get a number back from opacity
            var ret = curCSS(elem, "opacity");
            return ret === "" ? "1" : ret;
          }
        }
      }
    },
    // Don't automatically add "px" to these possibly-unitless properties
    cssNumber: {
      "animationIterationCount": true,
      "columnCount": true,
      "fillOpacity": true,
      "flexGrow": true,
      "flexShrink": true,
      "fontWeight": true,
      "gridArea": true,
      "gridColumn": true,
      "gridColumnEnd": true,
      "gridColumnStart": true,
      "gridRow": true,
      "gridRowEnd": true,
      "gridRowStart": true,
      "lineHeight": true,
      "opacity": true,
      "order": true,
      "orphans": true,
      "widows": true,
      "zIndex": true,
      "zoom": true
    },
    // Add in properties whose names you wish to fix before
    // setting or getting the value
    cssProps: {},
    // Get and set the style property on a DOM Node
    style: function style(elem, name, value, extra) {
      // Don't set styles on text and comment nodes
      if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
        return;
      } // Make sure that we're working with the right name


      var ret,
          type,
          hooks,
          origName = camelCase(name),
          isCustomProp = rcustomProp.test(name),
          style = elem.style; // Make sure that we're working with the right name. We don't
      // want to query the value if it is a CSS custom property
      // since they are user-defined.

      if (!isCustomProp) {
        name = finalPropName(origName);
      } // Gets hook for the prefixed version, then unprefixed version


      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]; // Check if we're setting a value

      if (value !== undefined) {
        type = _typeof(value); // Convert "+=" or "-=" to relative numbers (#7345)

        if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
          value = adjustCSS(elem, name, ret); // Fixes bug #9237

          type = "number";
        } // Make sure that null and NaN values aren't set (#7116)


        if (value == null || value !== value) {
          return;
        } // If a number was passed in, add the unit (except for certain CSS properties)
        // The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
        // "px" to a few hardcoded values.


        if (type === "number" && !isCustomProp) {
          value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
        } // background-* props affect original clone's values


        if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
          style[name] = "inherit";
        } // If a hook was provided, use that value, otherwise just set the specified value


        if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
          if (isCustomProp) {
            style.setProperty(name, value);
          } else {
            style[name] = value;
          }
        }
      } else {
        // If a hook was provided get the non-computed value from there
        if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
          return ret;
        } // Otherwise just get the value from the style object


        return style[name];
      }
    },
    css: function css(elem, name, extra, styles) {
      var val,
          num,
          hooks,
          origName = camelCase(name),
          isCustomProp = rcustomProp.test(name); // Make sure that we're working with the right name. We don't
      // want to modify the value if it is a CSS custom property
      // since they are user-defined.

      if (!isCustomProp) {
        name = finalPropName(origName);
      } // Try prefixed name followed by the unprefixed name


      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]; // If a hook was provided get the computed value from there

      if (hooks && "get" in hooks) {
        val = hooks.get(elem, true, extra);
      } // Otherwise, if a way to get the computed value exists, use that


      if (val === undefined) {
        val = curCSS(elem, name, styles);
      } // Convert "normal" to computed value


      if (val === "normal" && name in cssNormalTransform) {
        val = cssNormalTransform[name];
      } // Make numeric if forced or a qualifier was provided and val looks numeric


      if (extra === "" || extra) {
        num = parseFloat(val);
        return extra === true || isFinite(num) ? num || 0 : val;
      }

      return val;
    }
  });
  jQuery.each(["height", "width"], function (_i, dimension) {
    jQuery.cssHooks[dimension] = {
      get: function get(elem, computed, extra) {
        if (computed) {
          // Certain elements can have dimension info if we invisibly show them
          // but it must have a current display style that would benefit
          return rdisplayswap.test(jQuery.css(elem, "display")) && ( // Support: Safari 8+
          // Table columns in Safari have non-zero offsetWidth & zero
          // getBoundingClientRect().width unless display is changed.
          // Support: IE <=11 only
          // Running getBoundingClientRect on a disconnected node
          // in IE throws an error.
          !elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function () {
            return getWidthOrHeight(elem, dimension, extra);
          }) : getWidthOrHeight(elem, dimension, extra);
        }
      },
      set: function set(elem, value, extra) {
        var matches,
            styles = getStyles(elem),
            // Only read styles.position if the test has a chance to fail
        // to avoid forcing a reflow.
        scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute",
            // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
        boxSizingNeeded = scrollboxSizeBuggy || extra,
            isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box",
            subtract = extra ? boxModelAdjustment(elem, dimension, extra, isBorderBox, styles) : 0; // Account for unreliable border-box dimensions by comparing offset* to computed and
        // faking a content-box to get border and padding (gh-3699)

        if (isBorderBox && scrollboxSizeBuggy) {
          subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5);
        } // Convert to pixels if value adjustment is needed


        if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
          elem.style[dimension] = value;
          value = jQuery.css(elem, dimension);
        }

        return setPositiveNumber(elem, value, subtract);
      }
    };
  });
  jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function (elem, computed) {
    if (computed) {
      return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
        marginLeft: 0
      }, function () {
        return elem.getBoundingClientRect().left;
      })) + "px";
    }
  }); // These hooks are used by animate to expand properties

  jQuery.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (prefix, suffix) {
    jQuery.cssHooks[prefix + suffix] = {
      expand: function expand(value) {
        var i = 0,
            expanded = {},
            // Assumes a single number if not a string
        parts = typeof value === "string" ? value.split(" ") : [value];

        for (; i < 4; i++) {
          expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
        }

        return expanded;
      }
    };

    if (prefix !== "margin") {
      jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
    }
  });
  jQuery.fn.extend({
    css: function css(name, value) {
      return access(this, function (elem, name, value) {
        var styles,
            len,
            map = {},
            i = 0;

        if (Array.isArray(name)) {
          styles = getStyles(elem);
          len = name.length;

          for (; i < len; i++) {
            map[name[i]] = jQuery.css(elem, name[i], false, styles);
          }

          return map;
        }

        return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
      }, name, value, arguments.length > 1);
    }
  });
  return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/css/addGetHookIf.js":
/*!*****************************************************!*\
  !*** ./node_modules/jquery/src/css/addGetHookIf.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict";

  function addGetHookIf(conditionFn, hookFn) {
    // Define the hook, we'll check on the first run if it's really needed.
    return {
      get: function get() {
        if (conditionFn()) {
          // Hook not needed (or it's not possible to use it due
          // to missing dependency), remove it.
          delete this.get;
          return;
        } // Hook needed; redefine it so that the support test is not executed again.


        return (this.get = hookFn).apply(this, arguments);
      }
    };
  }

  return addGetHookIf;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/css/adjustCSS.js":
/*!**************************************************!*\
  !*** ./node_modules/jquery/src/css/adjustCSS.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../var/rcssNum */ "./node_modules/jquery/src/var/rcssNum.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, rcssNum) {
  "use strict";

  function adjustCSS(elem, prop, valueParts, tween) {
    var adjusted,
        scale,
        maxIterations = 20,
        currentValue = tween ? function () {
      return tween.cur();
    } : function () {
      return jQuery.css(elem, prop, "");
    },
        initial = currentValue(),
        unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
        // Starting value computation is required for potential unit mismatches
    initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));

    if (initialInUnit && initialInUnit[3] !== unit) {
      // Support: Firefox <=54
      // Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
      initial = initial / 2; // Trust units reported by jQuery.css

      unit = unit || initialInUnit[3]; // Iteratively approximate from a nonzero starting point

      initialInUnit = +initial || 1;

      while (maxIterations--) {
        // Evaluate and update our best guess (doubling guesses that zero out).
        // Finish if the scale equals or crosses 1 (making the old*new product non-positive).
        jQuery.style(elem, prop, initialInUnit + unit);

        if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
          maxIterations = 0;
        }

        initialInUnit = initialInUnit / scale;
      }

      initialInUnit = initialInUnit * 2;
      jQuery.style(elem, prop, initialInUnit + unit); // Make sure we update the tween properties later on

      valueParts = valueParts || [];
    }

    if (valueParts) {
      initialInUnit = +initialInUnit || +initial || 0; // Apply relative offset (+=/-=) if specified

      adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];

      if (tween) {
        tween.unit = unit;
        tween.start = initialInUnit;
        tween.end = adjusted;
      }
    }

    return adjusted;
  }

  return adjustCSS;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/css/curCSS.js":
/*!***********************************************!*\
  !*** ./node_modules/jquery/src/css/curCSS.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../core/isAttached */ "./node_modules/jquery/src/core/isAttached.js"), __webpack_require__(/*! ./var/rboxStyle */ "./node_modules/jquery/src/css/var/rboxStyle.js"), __webpack_require__(/*! ./var/rnumnonpx */ "./node_modules/jquery/src/css/var/rnumnonpx.js"), __webpack_require__(/*! ./var/getStyles */ "./node_modules/jquery/src/css/var/getStyles.js"), __webpack_require__(/*! ./support */ "./node_modules/jquery/src/css/support.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, isAttached, rboxStyle, rnumnonpx, getStyles, support) {
  "use strict";

  function curCSS(elem, name, computed) {
    var width,
        minWidth,
        maxWidth,
        ret,
        // Support: Firefox 51+
    // Retrieving style before computed somehow
    // fixes an issue with getting wrong values
    // on detached elements
    style = elem.style;
    computed = computed || getStyles(elem); // getPropertyValue is needed for:
    //   .css('filter') (IE 9 only, #12537)
    //   .css('--customProperty) (#3144)

    if (computed) {
      ret = computed.getPropertyValue(name) || computed[name];

      if (ret === "" && !isAttached(elem)) {
        ret = jQuery.style(elem, name);
      } // A tribute to the "awesome hack by Dean Edwards"
      // Android Browser returns percentage for some values,
      // but width seems to be reliably pixels.
      // This is against the CSSOM draft spec:
      // https://drafts.csswg.org/cssom/#resolved-values


      if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
        // Remember the original values
        width = style.width;
        minWidth = style.minWidth;
        maxWidth = style.maxWidth; // Put in the new values to get a computed value out

        style.minWidth = style.maxWidth = style.width = ret;
        ret = computed.width; // Revert the changed values

        style.width = width;
        style.minWidth = minWidth;
        style.maxWidth = maxWidth;
      }
    }

    return ret !== undefined ? // Support: IE <=9 - 11 only
    // IE returns zIndex value as an integer.
    ret + "" : ret;
  }

  return curCSS;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/css/finalPropName.js":
/*!******************************************************!*\
  !*** ./node_modules/jquery/src/css/finalPropName.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../var/document */ "./node_modules/jquery/src/var/document.js"), __webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (document, jQuery) {
  "use strict";

  var cssPrefixes = ["Webkit", "Moz", "ms"],
      emptyStyle = document.createElement("div").style,
      vendorProps = {}; // Return a vendor-prefixed property or undefined

  function vendorPropName(name) {
    // Check for vendor prefixed names
    var capName = name[0].toUpperCase() + name.slice(1),
        i = cssPrefixes.length;

    while (i--) {
      name = cssPrefixes[i] + capName;

      if (name in emptyStyle) {
        return name;
      }
    }
  } // Return a potentially-mapped jQuery.cssProps or vendor prefixed property


  function finalPropName(name) {
    var final = jQuery.cssProps[name] || vendorProps[name];

    if (final) {
      return final;
    }

    if (name in emptyStyle) {
      return name;
    }

    return vendorProps[name] = vendorPropName(name) || name;
  }

  return finalPropName;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/css/hiddenVisibleSelectors.js":
/*!***************************************************************!*\
  !*** ./node_modules/jquery/src/css/hiddenVisibleSelectors.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../selector */ "./node_modules/jquery/src/selector.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery) {
  "use strict";

  jQuery.expr.pseudos.hidden = function (elem) {
    return !jQuery.expr.pseudos.visible(elem);
  };

  jQuery.expr.pseudos.visible = function (elem) {
    return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
  };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/css/showHide.js":
/*!*************************************************!*\
  !*** ./node_modules/jquery/src/css/showHide.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../data/var/dataPriv */ "./node_modules/jquery/src/data/var/dataPriv.js"), __webpack_require__(/*! ../css/var/isHiddenWithinTree */ "./node_modules/jquery/src/css/var/isHiddenWithinTree.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, dataPriv, isHiddenWithinTree) {
  "use strict";

  var defaultDisplayMap = {};

  function getDefaultDisplay(elem) {
    var temp,
        doc = elem.ownerDocument,
        nodeName = elem.nodeName,
        display = defaultDisplayMap[nodeName];

    if (display) {
      return display;
    }

    temp = doc.body.appendChild(doc.createElement(nodeName));
    display = jQuery.css(temp, "display");
    temp.parentNode.removeChild(temp);

    if (display === "none") {
      display = "block";
    }

    defaultDisplayMap[nodeName] = display;
    return display;
  }

  function showHide(elements, show) {
    var display,
        elem,
        values = [],
        index = 0,
        length = elements.length; // Determine new display value for elements that need to change

    for (; index < length; index++) {
      elem = elements[index];

      if (!elem.style) {
        continue;
      }

      display = elem.style.display;

      if (show) {
        // Since we force visibility upon cascade-hidden elements, an immediate (and slow)
        // check is required in this first loop unless we have a nonempty display value (either
        // inline or about-to-be-restored)
        if (display === "none") {
          values[index] = dataPriv.get(elem, "display") || null;

          if (!values[index]) {
            elem.style.display = "";
          }
        }

        if (elem.style.display === "" && isHiddenWithinTree(elem)) {
          values[index] = getDefaultDisplay(elem);
        }
      } else {
        if (display !== "none") {
          values[index] = "none"; // Remember what we're overwriting

          dataPriv.set(elem, "display", display);
        }
      }
    } // Set the display of the elements in a second loop to avoid constant reflow


    for (index = 0; index < length; index++) {
      if (values[index] != null) {
        elements[index].style.display = values[index];
      }
    }

    return elements;
  }

  jQuery.fn.extend({
    show: function show() {
      return showHide(this, true);
    },
    hide: function hide() {
      return showHide(this);
    },
    toggle: function toggle(state) {
      if (typeof state === "boolean") {
        return state ? this.show() : this.hide();
      }

      return this.each(function () {
        if (isHiddenWithinTree(this)) {
          jQuery(this).show();
        } else {
          jQuery(this).hide();
        }
      });
    }
  });
  return showHide;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/css/support.js":
/*!************************************************!*\
  !*** ./node_modules/jquery/src/css/support.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../var/document */ "./node_modules/jquery/src/var/document.js"), __webpack_require__(/*! ../var/documentElement */ "./node_modules/jquery/src/var/documentElement.js"), __webpack_require__(/*! ../var/support */ "./node_modules/jquery/src/var/support.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, document, documentElement, support) {
  "use strict";

  (function () {
    // Executing both pixelPosition & boxSizingReliable tests require only one layout
    // so they're executed at the same time to save the second computation.
    function computeStyleTests() {
      // This is a singleton, we need to execute it only once
      if (!div) {
        return;
      }

      container.style.cssText = "position:absolute;left:-11111px;width:60px;" + "margin-top:1px;padding:0;border:0";
      div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;" + "margin:auto;border:1px;padding:1px;" + "width:60%;top:1%";
      documentElement.appendChild(container).appendChild(div);
      var divStyle = window.getComputedStyle(div);
      pixelPositionVal = divStyle.top !== "1%"; // Support: Android 4.0 - 4.3 only, Firefox <=3 - 44

      reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12; // Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
      // Some styles come back with percentage values, even though they shouldn't

      div.style.right = "60%";
      pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36; // Support: IE 9 - 11 only
      // Detect misreporting of content dimensions for box-sizing:border-box elements

      boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36; // Support: IE 9 only
      // Detect overflow:scroll screwiness (gh-3699)
      // Support: Chrome <=64
      // Don't get tricked when zoom affects offsetWidth (gh-4029)

      div.style.position = "absolute";
      scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
      documentElement.removeChild(container); // Nullify the div so it wouldn't be stored in the memory and
      // it will also be a sign that checks already performed

      div = null;
    }

    function roundPixelMeasures(measure) {
      return Math.round(parseFloat(measure));
    }

    var pixelPositionVal,
        boxSizingReliableVal,
        scrollboxSizeVal,
        pixelBoxStylesVal,
        reliableTrDimensionsVal,
        reliableMarginLeftVal,
        container = document.createElement("div"),
        div = document.createElement("div"); // Finish early in limited (non-browser) environments

    if (!div.style) {
      return;
    } // Support: IE <=9 - 11 only
    // Style of cloned element affects source element cloned (#8908)


    div.style.backgroundClip = "content-box";
    div.cloneNode(true).style.backgroundClip = "";
    support.clearCloneStyle = div.style.backgroundClip === "content-box";
    jQuery.extend(support, {
      boxSizingReliable: function boxSizingReliable() {
        computeStyleTests();
        return boxSizingReliableVal;
      },
      pixelBoxStyles: function pixelBoxStyles() {
        computeStyleTests();
        return pixelBoxStylesVal;
      },
      pixelPosition: function pixelPosition() {
        computeStyleTests();
        return pixelPositionVal;
      },
      reliableMarginLeft: function reliableMarginLeft() {
        computeStyleTests();
        return reliableMarginLeftVal;
      },
      scrollboxSize: function scrollboxSize() {
        computeStyleTests();
        return scrollboxSizeVal;
      },
      // Support: IE 9 - 11+, Edge 15 - 18+
      // IE/Edge misreport `getComputedStyle` of table rows with width/height
      // set in CSS while `offset*` properties report correct values.
      // Behavior in IE 9 is more subtle than in newer versions & it passes
      // some versions of this test; make sure not to make it pass there!
      //
      // Support: Firefox 70+
      // Only Firefox includes border widths
      // in computed dimensions. (gh-4529)
      reliableTrDimensions: function reliableTrDimensions() {
        var table, tr, trChild, trStyle;

        if (reliableTrDimensionsVal == null) {
          table = document.createElement("table");
          tr = document.createElement("tr");
          trChild = document.createElement("div");
          table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
          tr.style.cssText = "border:1px solid"; // Support: Chrome 86+
          // Height set through cssText does not get applied.
          // Computed height then comes back as 0.

          tr.style.height = "1px";
          trChild.style.height = "9px"; // Support: Android 8 Chrome 86+
          // In our bodyBackground.html iframe,
          // display for all div elements is set to "inline",
          // which causes a problem only in Android 8 Chrome 86.
          // Ensuring the div is display: block
          // gets around this issue.

          trChild.style.display = "block";
          documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
          trStyle = window.getComputedStyle(tr);
          reliableTrDimensionsVal = parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10) === tr.offsetHeight;
          documentElement.removeChild(table);
        }

        return reliableTrDimensionsVal;
      }
    });
  })();

  return support;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/css/var/cssExpand.js":
/*!******************************************************!*\
  !*** ./node_modules/jquery/src/css/var/cssExpand.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict";

  return ["Top", "Right", "Bottom", "Left"];
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/css/var/getStyles.js":
/*!******************************************************!*\
  !*** ./node_modules/jquery/src/css/var/getStyles.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict";

  return function (elem) {
    // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
    // IE throws on elements created in popups
    // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
    var view = elem.ownerDocument.defaultView;

    if (!view || !view.opener) {
      view = window;
    }

    return view.getComputedStyle(elem);
  };
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/css/var/isHiddenWithinTree.js":
/*!***************************************************************!*\
  !*** ./node_modules/jquery/src/css/var/isHiddenWithinTree.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../../core/isAttached */ "./node_modules/jquery/src/core/isAttached.js") // css is assumed
], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, isAttached) {
  "use strict"; // isHiddenWithinTree reports if an element has a non-"none" display style (inline and/or
  // through the CSS cascade), which is useful in deciding whether or not to make it visible.
  // It differs from the :hidden selector (jQuery.expr.pseudos.hidden) in two important ways:
  // * A hidden ancestor does not force an element to be classified as hidden.
  // * Being disconnected from the document does not force an element to be classified as hidden.
  // These differences improve the behavior of .toggle() et al. when applied to elements that are
  // detached or contained within hidden ancestors (gh-2404, gh-2863).

  return function (elem, el) {
    // isHiddenWithinTree might be called from jQuery#filter function;
    // in that case, element will be second argument
    elem = el || elem; // Inline style trumps all

    return elem.style.display === "none" || elem.style.display === "" && // Otherwise, check computed style
    // Support: Firefox <=43 - 45
    // Disconnected elements can have computed display: none, so first confirm that elem is
    // in the document.
    isAttached(elem) && jQuery.css(elem, "display") === "none";
  };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/css/var/rboxStyle.js":
/*!******************************************************!*\
  !*** ./node_modules/jquery/src/css/var/rboxStyle.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./cssExpand */ "./node_modules/jquery/src/css/var/cssExpand.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (cssExpand) {
  "use strict";

  return new RegExp(cssExpand.join("|"), "i");
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/css/var/rnumnonpx.js":
/*!******************************************************!*\
  !*** ./node_modules/jquery/src/css/var/rnumnonpx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../../var/pnum */ "./node_modules/jquery/src/var/pnum.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (pnum) {
  "use strict";

  return new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/css/var/swap.js":
/*!*************************************************!*\
  !*** ./node_modules/jquery/src/css/var/swap.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict"; // A method for quickly swapping in/out CSS properties to get correct calculations.

  return function (elem, options, callback) {
    var ret,
        name,
        old = {}; // Remember the old values, and insert the new ones

    for (name in options) {
      old[name] = elem.style[name];
      elem.style[name] = options[name];
    }

    ret = callback.call(elem); // Revert the old values

    for (name in options) {
      elem.style[name] = old[name];
    }

    return ret;
  };
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/data.js":
/*!*****************************************!*\
  !*** ./node_modules/jquery/src/data.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ./core/access */ "./node_modules/jquery/src/core/access.js"), __webpack_require__(/*! ./core/camelCase */ "./node_modules/jquery/src/core/camelCase.js"), __webpack_require__(/*! ./data/var/dataPriv */ "./node_modules/jquery/src/data/var/dataPriv.js"), __webpack_require__(/*! ./data/var/dataUser */ "./node_modules/jquery/src/data/var/dataUser.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, access, camelCase, dataPriv, dataUser) {
  "use strict"; //	Implementation Summary
  //
  //	1. Enforce API surface and semantic compatibility with 1.9.x branch
  //	2. Improve the module's maintainability by reducing the storage
  //		paths to a single mechanism.
  //	3. Use the same single mechanism to support "private" and "user" data.
  //	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
  //	5. Avoid exposing implementation details on user objects (eg. expando properties)
  //	6. Provide a clear path for implementation upgrade to WeakMap in 2014

  var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      rmultiDash = /[A-Z]/g;

  function getData(data) {
    if (data === "true") {
      return true;
    }

    if (data === "false") {
      return false;
    }

    if (data === "null") {
      return null;
    } // Only convert to a number if it doesn't change the string


    if (data === +data + "") {
      return +data;
    }

    if (rbrace.test(data)) {
      return JSON.parse(data);
    }

    return data;
  }

  function dataAttr(elem, key, data) {
    var name; // If nothing was found internally, try to fetch any
    // data from the HTML5 data-* attribute

    if (data === undefined && elem.nodeType === 1) {
      name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
      data = elem.getAttribute(name);

      if (typeof data === "string") {
        try {
          data = getData(data);
        } catch (e) {} // Make sure we set the data so it isn't changed later


        dataUser.set(elem, key, data);
      } else {
        data = undefined;
      }
    }

    return data;
  }

  jQuery.extend({
    hasData: function hasData(elem) {
      return dataUser.hasData(elem) || dataPriv.hasData(elem);
    },
    data: function data(elem, name, _data) {
      return dataUser.access(elem, name, _data);
    },
    removeData: function removeData(elem, name) {
      dataUser.remove(elem, name);
    },
    // TODO: Now that all calls to _data and _removeData have been replaced
    // with direct calls to dataPriv methods, these can be deprecated.
    _data: function _data(elem, name, data) {
      return dataPriv.access(elem, name, data);
    },
    _removeData: function _removeData(elem, name) {
      dataPriv.remove(elem, name);
    }
  });
  jQuery.fn.extend({
    data: function data(key, value) {
      var i,
          name,
          data,
          elem = this[0],
          attrs = elem && elem.attributes; // Gets all values

      if (key === undefined) {
        if (this.length) {
          data = dataUser.get(elem);

          if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
            i = attrs.length;

            while (i--) {
              // Support: IE 11 only
              // The attrs elements can be null (#14894)
              if (attrs[i]) {
                name = attrs[i].name;

                if (name.indexOf("data-") === 0) {
                  name = camelCase(name.slice(5));
                  dataAttr(elem, name, data[name]);
                }
              }
            }

            dataPriv.set(elem, "hasDataAttrs", true);
          }
        }

        return data;
      } // Sets multiple values


      if (_typeof(key) === "object") {
        return this.each(function () {
          dataUser.set(this, key);
        });
      }

      return access(this, function (value) {
        var data; // The calling jQuery object (element matches) is not empty
        // (and therefore has an element appears at this[ 0 ]) and the
        // `value` parameter was not undefined. An empty jQuery object
        // will result in `undefined` for elem = this[ 0 ] which will
        // throw an exception if an attempt to read a data cache is made.

        if (elem && value === undefined) {
          // Attempt to get data from the cache
          // The key will always be camelCased in Data
          data = dataUser.get(elem, key);

          if (data !== undefined) {
            return data;
          } // Attempt to "discover" the data in
          // HTML5 custom data-* attrs


          data = dataAttr(elem, key);

          if (data !== undefined) {
            return data;
          } // We tried really hard, but the data doesn't exist.


          return;
        } // Set the data...


        this.each(function () {
          // We always store the camelCased key
          dataUser.set(this, key, value);
        });
      }, null, value, arguments.length > 1, null, true);
    },
    removeData: function removeData(key) {
      return this.each(function () {
        dataUser.remove(this, key);
      });
    }
  });
  return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/data/Data.js":
/*!**********************************************!*\
  !*** ./node_modules/jquery/src/data/Data.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../core/camelCase */ "./node_modules/jquery/src/core/camelCase.js"), __webpack_require__(/*! ../var/rnothtmlwhite */ "./node_modules/jquery/src/var/rnothtmlwhite.js"), __webpack_require__(/*! ./var/acceptData */ "./node_modules/jquery/src/data/var/acceptData.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, camelCase, rnothtmlwhite, acceptData) {
  "use strict";

  function Data() {
    this.expando = jQuery.expando + Data.uid++;
  }

  Data.uid = 1;
  Data.prototype = {
    cache: function cache(owner) {
      // Check if the owner object already has a cache
      var value = owner[this.expando]; // If not, create one

      if (!value) {
        value = {}; // We can accept data for non-element nodes in modern browsers,
        // but we should not, see #8335.
        // Always return an empty object.

        if (acceptData(owner)) {
          // If it is a node unlikely to be stringify-ed or looped over
          // use plain assignment
          if (owner.nodeType) {
            owner[this.expando] = value; // Otherwise secure it in a non-enumerable property
            // configurable must be true to allow the property to be
            // deleted when data is removed
          } else {
            Object.defineProperty(owner, this.expando, {
              value: value,
              configurable: true
            });
          }
        }
      }

      return value;
    },
    set: function set(owner, data, value) {
      var prop,
          cache = this.cache(owner); // Handle: [ owner, key, value ] args
      // Always use camelCase key (gh-2257)

      if (typeof data === "string") {
        cache[camelCase(data)] = value; // Handle: [ owner, { properties } ] args
      } else {
        // Copy the properties one-by-one to the cache object
        for (prop in data) {
          cache[camelCase(prop)] = data[prop];
        }
      }

      return cache;
    },
    get: function get(owner, key) {
      return key === undefined ? this.cache(owner) : // Always use camelCase key (gh-2257)
      owner[this.expando] && owner[this.expando][camelCase(key)];
    },
    access: function access(owner, key, value) {
      // In cases where either:
      //
      //   1. No key was specified
      //   2. A string key was specified, but no value provided
      //
      // Take the "read" path and allow the get method to determine
      // which value to return, respectively either:
      //
      //   1. The entire cache object
      //   2. The data stored at the key
      //
      if (key === undefined || key && typeof key === "string" && value === undefined) {
        return this.get(owner, key);
      } // When the key is not a string, or both a key and value
      // are specified, set or extend (existing objects) with either:
      //
      //   1. An object of properties
      //   2. A key and value
      //


      this.set(owner, key, value); // Since the "set" path can have two possible entry points
      // return the expected data based on which path was taken[*]

      return value !== undefined ? value : key;
    },
    remove: function remove(owner, key) {
      var i,
          cache = owner[this.expando];

      if (cache === undefined) {
        return;
      }

      if (key !== undefined) {
        // Support array or space separated string of keys
        if (Array.isArray(key)) {
          // If key is an array of keys...
          // We always set camelCase keys, so remove that.
          key = key.map(camelCase);
        } else {
          key = camelCase(key); // If a key with the spaces exists, use it.
          // Otherwise, create an array by matching non-whitespace

          key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
        }

        i = key.length;

        while (i--) {
          delete cache[key[i]];
        }
      } // Remove the expando if there's no more data


      if (key === undefined || jQuery.isEmptyObject(cache)) {
        // Support: Chrome <=35 - 45
        // Webkit & Blink performance suffers when deleting properties
        // from DOM nodes, so set to undefined instead
        // https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
        if (owner.nodeType) {
          owner[this.expando] = undefined;
        } else {
          delete owner[this.expando];
        }
      }
    },
    hasData: function hasData(owner) {
      var cache = owner[this.expando];
      return cache !== undefined && !jQuery.isEmptyObject(cache);
    }
  };
  return Data;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/data/var/acceptData.js":
/*!********************************************************!*\
  !*** ./node_modules/jquery/src/data/var/acceptData.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict";
  /**
   * Determines whether an object can have data
   */

  return function (owner) {
    // Accepts only:
    //  - Node
    //    - Node.ELEMENT_NODE
    //    - Node.DOCUMENT_NODE
    //  - Object
    //    - Any
    return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
  };
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/data/var/dataPriv.js":
/*!******************************************************!*\
  !*** ./node_modules/jquery/src/data/var/dataPriv.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../Data */ "./node_modules/jquery/src/data/Data.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Data) {
  "use strict";

  return new Data();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/data/var/dataUser.js":
/*!******************************************************!*\
  !*** ./node_modules/jquery/src/data/var/dataUser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../Data */ "./node_modules/jquery/src/data/Data.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Data) {
  "use strict";

  return new Data();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/deferred.js":
/*!*********************************************!*\
  !*** ./node_modules/jquery/src/deferred.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ./var/isFunction */ "./node_modules/jquery/src/var/isFunction.js"), __webpack_require__(/*! ./var/slice */ "./node_modules/jquery/src/var/slice.js"), __webpack_require__(/*! ./callbacks */ "./node_modules/jquery/src/callbacks.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, isFunction, slice) {
  "use strict";

  function Identity(v) {
    return v;
  }

  function Thrower(ex) {
    throw ex;
  }

  function adoptValue(value, resolve, reject, noValue) {
    var method;

    try {
      // Check for promise aspect first to privilege synchronous behavior
      if (value && isFunction(method = value.promise)) {
        method.call(value).done(resolve).fail(reject); // Other thenables
      } else if (value && isFunction(method = value.then)) {
        method.call(value, resolve, reject); // Other non-thenables
      } else {
        // Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
        // * false: [ value ].slice( 0 ) => resolve( value )
        // * true: [ value ].slice( 1 ) => resolve()
        resolve.apply(undefined, [value].slice(noValue));
      } // For Promises/A+, convert exceptions into rejections
      // Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
      // Deferred#then to conditionally suppress rejection.

    } catch (value) {
      // Support: Android 4.0 only
      // Strict mode functions invoked without .call/.apply get global-object context
      reject.apply(undefined, [value]);
    }
  }

  jQuery.extend({
    Deferred: function Deferred(func) {
      var tuples = [// action, add listener, callbacks,
      // ... .then handlers, argument index, [final state]
      ["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2], ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]],
          _state = "pending",
          _promise = {
        state: function state() {
          return _state;
        },
        always: function always() {
          deferred.done(arguments).fail(arguments);
          return this;
        },
        "catch": function _catch(fn) {
          return _promise.then(null, fn);
        },
        // Keep pipe for back-compat
        pipe: function pipe()
        /* fnDone, fnFail, fnProgress */
        {
          var fns = arguments;
          return jQuery.Deferred(function (newDefer) {
            jQuery.each(tuples, function (_i, tuple) {
              // Map tuples (progress, done, fail) to arguments (done, fail, progress)
              var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]]; // deferred.progress(function() { bind to newDefer or newDefer.notify })
              // deferred.done(function() { bind to newDefer or newDefer.resolve })
              // deferred.fail(function() { bind to newDefer or newDefer.reject })

              deferred[tuple[1]](function () {
                var returned = fn && fn.apply(this, arguments);

                if (returned && isFunction(returned.promise)) {
                  returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                } else {
                  newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
                }
              });
            });
            fns = null;
          }).promise();
        },
        then: function then(onFulfilled, onRejected, onProgress) {
          var maxDepth = 0;

          function resolve(depth, deferred, handler, special) {
            return function () {
              var that = this,
                  args = arguments,
                  mightThrow = function mightThrow() {
                var returned, then; // Support: Promises/A+ section 2.3.3.3.3
                // https://promisesaplus.com/#point-59
                // Ignore double-resolution attempts

                if (depth < maxDepth) {
                  return;
                }

                returned = handler.apply(that, args); // Support: Promises/A+ section 2.3.1
                // https://promisesaplus.com/#point-48

                if (returned === deferred.promise()) {
                  throw new TypeError("Thenable self-resolution");
                } // Support: Promises/A+ sections 2.3.3.1, 3.5
                // https://promisesaplus.com/#point-54
                // https://promisesaplus.com/#point-75
                // Retrieve `then` only once


                then = returned && ( // Support: Promises/A+ section 2.3.4
                // https://promisesaplus.com/#point-64
                // Only check objects and functions for thenability
                _typeof(returned) === "object" || typeof returned === "function") && returned.then; // Handle a returned thenable

                if (isFunction(then)) {
                  // Special processors (notify) just wait for resolution
                  if (special) {
                    then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special)); // Normal processors (resolve) also hook into progress
                  } else {
                    // ...and disregard older resolution values
                    maxDepth++;
                    then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
                  } // Handle all other returned values

                } else {
                  // Only substitute handlers pass on context
                  // and multiple values (non-spec behavior)
                  if (handler !== Identity) {
                    that = undefined;
                    args = [returned];
                  } // Process the value(s)
                  // Default process is resolve


                  (special || deferred.resolveWith)(that, args);
                }
              },
                  // Only normal processors (resolve) catch and reject exceptions
              process = special ? mightThrow : function () {
                try {
                  mightThrow();
                } catch (e) {
                  if (jQuery.Deferred.exceptionHook) {
                    jQuery.Deferred.exceptionHook(e, process.stackTrace);
                  } // Support: Promises/A+ section 2.3.3.3.4.1
                  // https://promisesaplus.com/#point-61
                  // Ignore post-resolution exceptions


                  if (depth + 1 >= maxDepth) {
                    // Only substitute handlers pass on context
                    // and multiple values (non-spec behavior)
                    if (handler !== Thrower) {
                      that = undefined;
                      args = [e];
                    }

                    deferred.rejectWith(that, args);
                  }
                }
              }; // Support: Promises/A+ section 2.3.3.3.1
              // https://promisesaplus.com/#point-57
              // Re-resolve promises immediately to dodge false rejection from
              // subsequent errors


              if (depth) {
                process();
              } else {
                // Call an optional hook to record the stack, in case of exception
                // since it's otherwise lost when execution goes async
                if (jQuery.Deferred.getStackHook) {
                  process.stackTrace = jQuery.Deferred.getStackHook();
                }

                window.setTimeout(process);
              }
            };
          }

          return jQuery.Deferred(function (newDefer) {
            // progress_handlers.add( ... )
            tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith)); // fulfilled_handlers.add( ... )

            tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity)); // rejected_handlers.add( ... )

            tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower));
          }).promise();
        },
        // Get a promise for this deferred
        // If obj is provided, the promise aspect is added to the object
        promise: function promise(obj) {
          return obj != null ? jQuery.extend(obj, _promise) : _promise;
        }
      },
          deferred = {}; // Add list-specific methods

      jQuery.each(tuples, function (i, tuple) {
        var list = tuple[2],
            stateString = tuple[5]; // promise.progress = list.add
        // promise.done = list.add
        // promise.fail = list.add

        _promise[tuple[1]] = list.add; // Handle state

        if (stateString) {
          list.add(function () {
            // state = "resolved" (i.e., fulfilled)
            // state = "rejected"
            _state = stateString;
          }, // rejected_callbacks.disable
          // fulfilled_callbacks.disable
          tuples[3 - i][2].disable, // rejected_handlers.disable
          // fulfilled_handlers.disable
          tuples[3 - i][3].disable, // progress_callbacks.lock
          tuples[0][2].lock, // progress_handlers.lock
          tuples[0][3].lock);
        } // progress_handlers.fire
        // fulfilled_handlers.fire
        // rejected_handlers.fire


        list.add(tuple[3].fire); // deferred.notify = function() { deferred.notifyWith(...) }
        // deferred.resolve = function() { deferred.resolveWith(...) }
        // deferred.reject = function() { deferred.rejectWith(...) }

        deferred[tuple[0]] = function () {
          deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
          return this;
        }; // deferred.notifyWith = list.fireWith
        // deferred.resolveWith = list.fireWith
        // deferred.rejectWith = list.fireWith


        deferred[tuple[0] + "With"] = list.fireWith;
      }); // Make the deferred a promise

      _promise.promise(deferred); // Call given func if any


      if (func) {
        func.call(deferred, deferred);
      } // All done!


      return deferred;
    },
    // Deferred helper
    when: function when(singleValue) {
      var // count of uncompleted subordinates
      remaining = arguments.length,
          // count of unprocessed arguments
      i = remaining,
          // subordinate fulfillment data
      resolveContexts = Array(i),
          resolveValues = slice.call(arguments),
          // the primary Deferred
      primary = jQuery.Deferred(),
          // subordinate callback factory
      updateFunc = function updateFunc(i) {
        return function (value) {
          resolveContexts[i] = this;
          resolveValues[i] = arguments.length > 1 ? slice.call(arguments) : value;

          if (! --remaining) {
            primary.resolveWith(resolveContexts, resolveValues);
          }
        };
      }; // Single- and empty arguments are adopted like Promise.resolve


      if (remaining <= 1) {
        adoptValue(singleValue, primary.done(updateFunc(i)).resolve, primary.reject, !remaining); // Use .then() to unwrap secondary thenables (cf. gh-3000)

        if (primary.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {
          return primary.then();
        }
      } // Multiple arguments are aggregated like Promise.all array elements


      while (i--) {
        adoptValue(resolveValues[i], updateFunc(i), primary.reject);
      }

      return primary.promise();
    }
  });
  return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/deferred/exceptionHook.js":
/*!***********************************************************!*\
  !*** ./node_modules/jquery/src/deferred/exceptionHook.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../deferred */ "./node_modules/jquery/src/deferred.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery) {
  "use strict"; // These usually indicate a programmer mistake during development,
  // warn about them ASAP rather than swallowing them by default.

  var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

  jQuery.Deferred.exceptionHook = function (error, stack) {
    // Support: IE 8 - 9 only
    // Console exists when dev tools are open, which can happen at any time
    if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
      window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
    }
  };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/deprecated.js":
/*!***********************************************!*\
  !*** ./node_modules/jquery/src/deprecated.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ./core/nodeName */ "./node_modules/jquery/src/core/nodeName.js"), __webpack_require__(/*! ./core/camelCase */ "./node_modules/jquery/src/core/camelCase.js"), __webpack_require__(/*! ./core/toType */ "./node_modules/jquery/src/core/toType.js"), __webpack_require__(/*! ./var/isFunction */ "./node_modules/jquery/src/var/isFunction.js"), __webpack_require__(/*! ./var/isWindow */ "./node_modules/jquery/src/var/isWindow.js"), __webpack_require__(/*! ./var/slice */ "./node_modules/jquery/src/var/slice.js"), __webpack_require__(/*! ./deprecated/ajax-event-alias */ "./node_modules/jquery/src/deprecated/ajax-event-alias.js"), __webpack_require__(/*! ./deprecated/event */ "./node_modules/jquery/src/deprecated/event.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, nodeName, camelCase, toType, isFunction, isWindow, slice) {
  "use strict"; // Support: Android <=4.0 only
  // Make sure we trim BOM and NBSP

  var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g; // Bind a function to a context, optionally partially applying any
  // arguments.
  // jQuery.proxy is deprecated to promote standards (specifically Function#bind)
  // However, it is not slated for removal any time soon

  jQuery.proxy = function (fn, context) {
    var tmp, args, proxy;

    if (typeof context === "string") {
      tmp = fn[context];
      context = fn;
      fn = tmp;
    } // Quick check to determine if target is callable, in the spec
    // this throws a TypeError, but we will just return undefined.


    if (!isFunction(fn)) {
      return undefined;
    } // Simulated bind


    args = slice.call(arguments, 2);

    proxy = function proxy() {
      return fn.apply(context || this, args.concat(slice.call(arguments)));
    }; // Set the guid of unique handler to the same of original handler, so it can be removed


    proxy.guid = fn.guid = fn.guid || jQuery.guid++;
    return proxy;
  };

  jQuery.holdReady = function (hold) {
    if (hold) {
      jQuery.readyWait++;
    } else {
      jQuery.ready(true);
    }
  };

  jQuery.isArray = Array.isArray;
  jQuery.parseJSON = JSON.parse;
  jQuery.nodeName = nodeName;
  jQuery.isFunction = isFunction;
  jQuery.isWindow = isWindow;
  jQuery.camelCase = camelCase;
  jQuery.type = toType;
  jQuery.now = Date.now;

  jQuery.isNumeric = function (obj) {
    // As of jQuery 3.0, isNumeric is limited to
    // strings and numbers (primitives or objects)
    // that can be coerced to finite numbers (gh-2662)
    var type = jQuery.type(obj);
    return (type === "number" || type === "string") && // parseFloat NaNs numeric-cast false positives ("")
    // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
    // subtraction forces infinities to NaN
    !isNaN(obj - parseFloat(obj));
  };

  jQuery.trim = function (text) {
    return text == null ? "" : (text + "").replace(rtrim, "");
  };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/deprecated/ajax-event-alias.js":
/*!****************************************************************!*\
  !*** ./node_modules/jquery/src/deprecated/ajax-event-alias.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../ajax */ "./node_modules/jquery/src/ajax.js"), __webpack_require__(/*! ../event */ "./node_modules/jquery/src/event.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery) {
  "use strict";

  jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (_i, type) {
    jQuery.fn[type] = function (fn) {
      return this.on(type, fn);
    };
  });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/deprecated/event.js":
/*!*****************************************************!*\
  !*** ./node_modules/jquery/src/deprecated/event.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../event */ "./node_modules/jquery/src/event.js"), __webpack_require__(/*! ../event/trigger */ "./node_modules/jquery/src/event/trigger.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery) {
  "use strict";

  jQuery.fn.extend({
    bind: function bind(types, data, fn) {
      return this.on(types, null, data, fn);
    },
    unbind: function unbind(types, fn) {
      return this.off(types, null, fn);
    },
    delegate: function delegate(selector, types, data, fn) {
      return this.on(types, selector, data, fn);
    },
    undelegate: function undelegate(selector, types, fn) {
      // ( namespace ) or ( selector, types [, fn] )
      return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
    },
    hover: function hover(fnOver, fnOut) {
      return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
    }
  });
  jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function (_i, name) {
    // Handle event binding
    jQuery.fn[name] = function (data, fn) {
      return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
    };
  });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/dimensions.js":
/*!***********************************************!*\
  !*** ./node_modules/jquery/src/dimensions.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ./core/access */ "./node_modules/jquery/src/core/access.js"), __webpack_require__(/*! ./var/isWindow */ "./node_modules/jquery/src/var/isWindow.js"), __webpack_require__(/*! ./css */ "./node_modules/jquery/src/css.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, access, isWindow) {
  "use strict"; // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods

  jQuery.each({
    Height: "height",
    Width: "width"
  }, function (name, type) {
    jQuery.each({
      padding: "inner" + name,
      content: type,
      "": "outer" + name
    }, function (defaultExtra, funcName) {
      // Margin is only for outerHeight, outerWidth
      jQuery.fn[funcName] = function (margin, value) {
        var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
            extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
        return access(this, function (elem, type, value) {
          var doc;

          if (isWindow(elem)) {
            // $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
            return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
          } // Get document width or height


          if (elem.nodeType === 9) {
            doc = elem.documentElement; // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
            // whichever is greatest

            return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
          }

          return value === undefined ? // Get width or height on the element, requesting but not forcing parseFloat
          jQuery.css(elem, type, extra) : // Set width or height on the element
          jQuery.style(elem, type, value, extra);
        }, type, chainable ? margin : undefined, chainable);
      };
    });
  });
  return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/effects.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/src/effects.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ./core/camelCase */ "./node_modules/jquery/src/core/camelCase.js"), __webpack_require__(/*! ./var/document */ "./node_modules/jquery/src/var/document.js"), __webpack_require__(/*! ./var/isFunction */ "./node_modules/jquery/src/var/isFunction.js"), __webpack_require__(/*! ./var/rcssNum */ "./node_modules/jquery/src/var/rcssNum.js"), __webpack_require__(/*! ./var/rnothtmlwhite */ "./node_modules/jquery/src/var/rnothtmlwhite.js"), __webpack_require__(/*! ./css/var/cssExpand */ "./node_modules/jquery/src/css/var/cssExpand.js"), __webpack_require__(/*! ./css/var/isHiddenWithinTree */ "./node_modules/jquery/src/css/var/isHiddenWithinTree.js"), __webpack_require__(/*! ./css/adjustCSS */ "./node_modules/jquery/src/css/adjustCSS.js"), __webpack_require__(/*! ./data/var/dataPriv */ "./node_modules/jquery/src/data/var/dataPriv.js"), __webpack_require__(/*! ./css/showHide */ "./node_modules/jquery/src/css/showHide.js"), __webpack_require__(/*! ./core/init */ "./node_modules/jquery/src/core/init.js"), __webpack_require__(/*! ./queue */ "./node_modules/jquery/src/queue.js"), __webpack_require__(/*! ./deferred */ "./node_modules/jquery/src/deferred.js"), __webpack_require__(/*! ./traversing */ "./node_modules/jquery/src/traversing.js"), __webpack_require__(/*! ./manipulation */ "./node_modules/jquery/src/manipulation.js"), __webpack_require__(/*! ./css */ "./node_modules/jquery/src/css.js"), __webpack_require__(/*! ./effects/Tween */ "./node_modules/jquery/src/effects/Tween.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, camelCase, document, isFunction, rcssNum, rnothtmlwhite, cssExpand, isHiddenWithinTree, adjustCSS, dataPriv, showHide) {
  "use strict";

  var fxNow,
      inProgress,
      rfxtypes = /^(?:toggle|show|hide)$/,
      rrun = /queueHooks$/;

  function schedule() {
    if (inProgress) {
      if (document.hidden === false && window.requestAnimationFrame) {
        window.requestAnimationFrame(schedule);
      } else {
        window.setTimeout(schedule, jQuery.fx.interval);
      }

      jQuery.fx.tick();
    }
  } // Animations created synchronously will run synchronously


  function createFxNow() {
    window.setTimeout(function () {
      fxNow = undefined;
    });
    return fxNow = Date.now();
  } // Generate parameters to create a standard animation


  function genFx(type, includeWidth) {
    var which,
        i = 0,
        attrs = {
      height: type
    }; // If we include width, step value is 1 to do all cssExpand values,
    // otherwise step value is 2 to skip over Left and Right

    includeWidth = includeWidth ? 1 : 0;

    for (; i < 4; i += 2 - includeWidth) {
      which = cssExpand[i];
      attrs["margin" + which] = attrs["padding" + which] = type;
    }

    if (includeWidth) {
      attrs.opacity = attrs.width = type;
    }

    return attrs;
  }

  function createTween(value, prop, animation) {
    var tween,
        collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
        index = 0,
        length = collection.length;

    for (; index < length; index++) {
      if (tween = collection[index].call(animation, prop, value)) {
        // We're done with this property
        return tween;
      }
    }
  }

  function defaultPrefilter(elem, props, opts) {
    var prop,
        value,
        toggle,
        hooks,
        oldfire,
        propTween,
        restoreDisplay,
        display,
        isBox = "width" in props || "height" in props,
        anim = this,
        orig = {},
        style = elem.style,
        hidden = elem.nodeType && isHiddenWithinTree(elem),
        dataShow = dataPriv.get(elem, "fxshow"); // Queue-skipping animations hijack the fx hooks

    if (!opts.queue) {
      hooks = jQuery._queueHooks(elem, "fx");

      if (hooks.unqueued == null) {
        hooks.unqueued = 0;
        oldfire = hooks.empty.fire;

        hooks.empty.fire = function () {
          if (!hooks.unqueued) {
            oldfire();
          }
        };
      }

      hooks.unqueued++;
      anim.always(function () {
        // Ensure the complete handler is called before this completes
        anim.always(function () {
          hooks.unqueued--;

          if (!jQuery.queue(elem, "fx").length) {
            hooks.empty.fire();
          }
        });
      });
    } // Detect show/hide animations


    for (prop in props) {
      value = props[prop];

      if (rfxtypes.test(value)) {
        delete props[prop];
        toggle = toggle || value === "toggle";

        if (value === (hidden ? "hide" : "show")) {
          // Pretend to be hidden if this is a "show" and
          // there is still data from a stopped show/hide
          if (value === "show" && dataShow && dataShow[prop] !== undefined) {
            hidden = true; // Ignore all other no-op show/hide data
          } else {
            continue;
          }
        }

        orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
      }
    } // Bail out if this is a no-op like .hide().hide()


    propTween = !jQuery.isEmptyObject(props);

    if (!propTween && jQuery.isEmptyObject(orig)) {
      return;
    } // Restrict "overflow" and "display" styles during box animations


    if (isBox && elem.nodeType === 1) {
      // Support: IE <=9 - 11, Edge 12 - 15
      // Record all 3 overflow attributes because IE does not infer the shorthand
      // from identically-valued overflowX and overflowY and Edge just mirrors
      // the overflowX value there.
      opts.overflow = [style.overflow, style.overflowX, style.overflowY]; // Identify a display type, preferring old show/hide data over the CSS cascade

      restoreDisplay = dataShow && dataShow.display;

      if (restoreDisplay == null) {
        restoreDisplay = dataPriv.get(elem, "display");
      }

      display = jQuery.css(elem, "display");

      if (display === "none") {
        if (restoreDisplay) {
          display = restoreDisplay;
        } else {
          // Get nonempty value(s) by temporarily forcing visibility
          showHide([elem], true);
          restoreDisplay = elem.style.display || restoreDisplay;
          display = jQuery.css(elem, "display");
          showHide([elem]);
        }
      } // Animate inline elements as inline-block


      if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
        if (jQuery.css(elem, "float") === "none") {
          // Restore the original display value at the end of pure show/hide animations
          if (!propTween) {
            anim.done(function () {
              style.display = restoreDisplay;
            });

            if (restoreDisplay == null) {
              display = style.display;
              restoreDisplay = display === "none" ? "" : display;
            }
          }

          style.display = "inline-block";
        }
      }
    }

    if (opts.overflow) {
      style.overflow = "hidden";
      anim.always(function () {
        style.overflow = opts.overflow[0];
        style.overflowX = opts.overflow[1];
        style.overflowY = opts.overflow[2];
      });
    } // Implement show/hide animations


    propTween = false;

    for (prop in orig) {
      // General show/hide setup for this element animation
      if (!propTween) {
        if (dataShow) {
          if ("hidden" in dataShow) {
            hidden = dataShow.hidden;
          }
        } else {
          dataShow = dataPriv.access(elem, "fxshow", {
            display: restoreDisplay
          });
        } // Store hidden/visible for toggle so `.stop().toggle()` "reverses"


        if (toggle) {
          dataShow.hidden = !hidden;
        } // Show elements before animating them


        if (hidden) {
          showHide([elem], true);
        }
        /* eslint-disable no-loop-func */


        anim.done(function () {
          /* eslint-enable no-loop-func */
          // The final step of a "hide" animation is actually hiding the element
          if (!hidden) {
            showHide([elem]);
          }

          dataPriv.remove(elem, "fxshow");

          for (prop in orig) {
            jQuery.style(elem, prop, orig[prop]);
          }
        });
      } // Per-property setup


      propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);

      if (!(prop in dataShow)) {
        dataShow[prop] = propTween.start;

        if (hidden) {
          propTween.end = propTween.start;
          propTween.start = 0;
        }
      }
    }
  }

  function propFilter(props, specialEasing) {
    var index, name, easing, value, hooks; // camelCase, specialEasing and expand cssHook pass

    for (index in props) {
      name = camelCase(index);
      easing = specialEasing[name];
      value = props[index];

      if (Array.isArray(value)) {
        easing = value[1];
        value = props[index] = value[0];
      }

      if (index !== name) {
        props[name] = value;
        delete props[index];
      }

      hooks = jQuery.cssHooks[name];

      if (hooks && "expand" in hooks) {
        value = hooks.expand(value);
        delete props[name]; // Not quite $.extend, this won't overwrite existing keys.
        // Reusing 'index' because we have the correct "name"

        for (index in value) {
          if (!(index in props)) {
            props[index] = value[index];
            specialEasing[index] = easing;
          }
        }
      } else {
        specialEasing[name] = easing;
      }
    }
  }

  function Animation(elem, properties, options) {
    var result,
        stopped,
        index = 0,
        length = Animation.prefilters.length,
        deferred = jQuery.Deferred().always(function () {
      // Don't match elem in the :animated selector
      delete tick.elem;
    }),
        tick = function tick() {
      if (stopped) {
        return false;
      }

      var currentTime = fxNow || createFxNow(),
          remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
          // Support: Android 2.3 only
      // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
      temp = remaining / animation.duration || 0,
          percent = 1 - temp,
          index = 0,
          length = animation.tweens.length;

      for (; index < length; index++) {
        animation.tweens[index].run(percent);
      }

      deferred.notifyWith(elem, [animation, percent, remaining]); // If there's more to do, yield

      if (percent < 1 && length) {
        return remaining;
      } // If this was an empty animation, synthesize a final progress notification


      if (!length) {
        deferred.notifyWith(elem, [animation, 1, 0]);
      } // Resolve the animation and report its conclusion


      deferred.resolveWith(elem, [animation]);
      return false;
    },
        animation = deferred.promise({
      elem: elem,
      props: jQuery.extend({}, properties),
      opts: jQuery.extend(true, {
        specialEasing: {},
        easing: jQuery.easing._default
      }, options),
      originalProperties: properties,
      originalOptions: options,
      startTime: fxNow || createFxNow(),
      duration: options.duration,
      tweens: [],
      createTween: function createTween(prop, end) {
        var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
        animation.tweens.push(tween);
        return tween;
      },
      stop: function stop(gotoEnd) {
        var index = 0,
            // If we are going to the end, we want to run all the tweens
        // otherwise we skip this part
        length = gotoEnd ? animation.tweens.length : 0;

        if (stopped) {
          return this;
        }

        stopped = true;

        for (; index < length; index++) {
          animation.tweens[index].run(1);
        } // Resolve when we played the last frame; otherwise, reject


        if (gotoEnd) {
          deferred.notifyWith(elem, [animation, 1, 0]);
          deferred.resolveWith(elem, [animation, gotoEnd]);
        } else {
          deferred.rejectWith(elem, [animation, gotoEnd]);
        }

        return this;
      }
    }),
        props = animation.props;

    propFilter(props, animation.opts.specialEasing);

    for (; index < length; index++) {
      result = Animation.prefilters[index].call(animation, elem, props, animation.opts);

      if (result) {
        if (isFunction(result.stop)) {
          jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
        }

        return result;
      }
    }

    jQuery.map(props, createTween, animation);

    if (isFunction(animation.opts.start)) {
      animation.opts.start.call(elem, animation);
    } // Attach callbacks from options


    animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
    jQuery.fx.timer(jQuery.extend(tick, {
      elem: elem,
      anim: animation,
      queue: animation.opts.queue
    }));
    return animation;
  }

  jQuery.Animation = jQuery.extend(Animation, {
    tweeners: {
      "*": [function (prop, value) {
        var tween = this.createTween(prop, value);
        adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
        return tween;
      }]
    },
    tweener: function tweener(props, callback) {
      if (isFunction(props)) {
        callback = props;
        props = ["*"];
      } else {
        props = props.match(rnothtmlwhite);
      }

      var prop,
          index = 0,
          length = props.length;

      for (; index < length; index++) {
        prop = props[index];
        Animation.tweeners[prop] = Animation.tweeners[prop] || [];
        Animation.tweeners[prop].unshift(callback);
      }
    },
    prefilters: [defaultPrefilter],
    prefilter: function prefilter(callback, prepend) {
      if (prepend) {
        Animation.prefilters.unshift(callback);
      } else {
        Animation.prefilters.push(callback);
      }
    }
  });

  jQuery.speed = function (speed, easing, fn) {
    var opt = speed && _typeof(speed) === "object" ? jQuery.extend({}, speed) : {
      complete: fn || !fn && easing || isFunction(speed) && speed,
      duration: speed,
      easing: fn && easing || easing && !isFunction(easing) && easing
    }; // Go to the end state if fx are off

    if (jQuery.fx.off) {
      opt.duration = 0;
    } else {
      if (typeof opt.duration !== "number") {
        if (opt.duration in jQuery.fx.speeds) {
          opt.duration = jQuery.fx.speeds[opt.duration];
        } else {
          opt.duration = jQuery.fx.speeds._default;
        }
      }
    } // Normalize opt.queue - true/undefined/null -> "fx"


    if (opt.queue == null || opt.queue === true) {
      opt.queue = "fx";
    } // Queueing


    opt.old = opt.complete;

    opt.complete = function () {
      if (isFunction(opt.old)) {
        opt.old.call(this);
      }

      if (opt.queue) {
        jQuery.dequeue(this, opt.queue);
      }
    };

    return opt;
  };

  jQuery.fn.extend({
    fadeTo: function fadeTo(speed, to, easing, callback) {
      // Show any hidden elements after setting opacity to 0
      return this.filter(isHiddenWithinTree).css("opacity", 0).show() // Animate to the value specified
      .end().animate({
        opacity: to
      }, speed, easing, callback);
    },
    animate: function animate(prop, speed, easing, callback) {
      var empty = jQuery.isEmptyObject(prop),
          optall = jQuery.speed(speed, easing, callback),
          doAnimation = function doAnimation() {
        // Operate on a copy of prop so per-property easing won't be lost
        var anim = Animation(this, jQuery.extend({}, prop), optall); // Empty animations, or finishing resolves immediately

        if (empty || dataPriv.get(this, "finish")) {
          anim.stop(true);
        }
      };

      doAnimation.finish = doAnimation;
      return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
    },
    stop: function stop(type, clearQueue, gotoEnd) {
      var stopQueue = function stopQueue(hooks) {
        var stop = hooks.stop;
        delete hooks.stop;
        stop(gotoEnd);
      };

      if (typeof type !== "string") {
        gotoEnd = clearQueue;
        clearQueue = type;
        type = undefined;
      }

      if (clearQueue) {
        this.queue(type || "fx", []);
      }

      return this.each(function () {
        var dequeue = true,
            index = type != null && type + "queueHooks",
            timers = jQuery.timers,
            data = dataPriv.get(this);

        if (index) {
          if (data[index] && data[index].stop) {
            stopQueue(data[index]);
          }
        } else {
          for (index in data) {
            if (data[index] && data[index].stop && rrun.test(index)) {
              stopQueue(data[index]);
            }
          }
        }

        for (index = timers.length; index--;) {
          if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
            timers[index].anim.stop(gotoEnd);
            dequeue = false;
            timers.splice(index, 1);
          }
        } // Start the next in the queue if the last step wasn't forced.
        // Timers currently will call their complete callbacks, which
        // will dequeue but only if they were gotoEnd.


        if (dequeue || !gotoEnd) {
          jQuery.dequeue(this, type);
        }
      });
    },
    finish: function finish(type) {
      if (type !== false) {
        type = type || "fx";
      }

      return this.each(function () {
        var index,
            data = dataPriv.get(this),
            queue = data[type + "queue"],
            hooks = data[type + "queueHooks"],
            timers = jQuery.timers,
            length = queue ? queue.length : 0; // Enable finishing flag on private data

        data.finish = true; // Empty the queue first

        jQuery.queue(this, type, []);

        if (hooks && hooks.stop) {
          hooks.stop.call(this, true);
        } // Look for any active animations, and finish them


        for (index = timers.length; index--;) {
          if (timers[index].elem === this && timers[index].queue === type) {
            timers[index].anim.stop(true);
            timers.splice(index, 1);
          }
        } // Look for any animations in the old queue and finish them


        for (index = 0; index < length; index++) {
          if (queue[index] && queue[index].finish) {
            queue[index].finish.call(this);
          }
        } // Turn off finishing flag


        delete data.finish;
      });
    }
  });
  jQuery.each(["toggle", "show", "hide"], function (_i, name) {
    var cssFn = jQuery.fn[name];

    jQuery.fn[name] = function (speed, easing, callback) {
      return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
    };
  }); // Generate shortcuts for custom animations

  jQuery.each({
    slideDown: genFx("show"),
    slideUp: genFx("hide"),
    slideToggle: genFx("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (name, props) {
    jQuery.fn[name] = function (speed, easing, callback) {
      return this.animate(props, speed, easing, callback);
    };
  });
  jQuery.timers = [];

  jQuery.fx.tick = function () {
    var timer,
        i = 0,
        timers = jQuery.timers;
    fxNow = Date.now();

    for (; i < timers.length; i++) {
      timer = timers[i]; // Run the timer and safely remove it when done (allowing for external removal)

      if (!timer() && timers[i] === timer) {
        timers.splice(i--, 1);
      }
    }

    if (!timers.length) {
      jQuery.fx.stop();
    }

    fxNow = undefined;
  };

  jQuery.fx.timer = function (timer) {
    jQuery.timers.push(timer);
    jQuery.fx.start();
  };

  jQuery.fx.interval = 13;

  jQuery.fx.start = function () {
    if (inProgress) {
      return;
    }

    inProgress = true;
    schedule();
  };

  jQuery.fx.stop = function () {
    inProgress = null;
  };

  jQuery.fx.speeds = {
    slow: 600,
    fast: 200,
    // Default speed
    _default: 400
  };
  return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/effects/Tween.js":
/*!**************************************************!*\
  !*** ./node_modules/jquery/src/effects/Tween.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../css/finalPropName */ "./node_modules/jquery/src/css/finalPropName.js"), __webpack_require__(/*! ../css */ "./node_modules/jquery/src/css.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, finalPropName) {
  "use strict";

  function Tween(elem, options, prop, end, easing) {
    return new Tween.prototype.init(elem, options, prop, end, easing);
  }

  jQuery.Tween = Tween;
  Tween.prototype = {
    constructor: Tween,
    init: function init(elem, options, prop, end, easing, unit) {
      this.elem = elem;
      this.prop = prop;
      this.easing = easing || jQuery.easing._default;
      this.options = options;
      this.start = this.now = this.cur();
      this.end = end;
      this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
    },
    cur: function cur() {
      var hooks = Tween.propHooks[this.prop];
      return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
    },
    run: function run(percent) {
      var eased,
          hooks = Tween.propHooks[this.prop];

      if (this.options.duration) {
        this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
      } else {
        this.pos = eased = percent;
      }

      this.now = (this.end - this.start) * eased + this.start;

      if (this.options.step) {
        this.options.step.call(this.elem, this.now, this);
      }

      if (hooks && hooks.set) {
        hooks.set(this);
      } else {
        Tween.propHooks._default.set(this);
      }

      return this;
    }
  };
  Tween.prototype.init.prototype = Tween.prototype;
  Tween.propHooks = {
    _default: {
      get: function get(tween) {
        var result; // Use a property on the element directly when it is not a DOM element,
        // or when there is no matching style property that exists.

        if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
          return tween.elem[tween.prop];
        } // Passing an empty string as a 3rd parameter to .css will automatically
        // attempt a parseFloat and fallback to a string if the parse fails.
        // Simple values such as "10px" are parsed to Float;
        // complex values such as "rotate(1rad)" are returned as-is.


        result = jQuery.css(tween.elem, tween.prop, ""); // Empty strings, null, undefined and "auto" are converted to 0.

        return !result || result === "auto" ? 0 : result;
      },
      set: function set(tween) {
        // Use step hook for back compat.
        // Use cssHook if its there.
        // Use .style if available and use plain properties where available.
        if (jQuery.fx.step[tween.prop]) {
          jQuery.fx.step[tween.prop](tween);
        } else if (tween.elem.nodeType === 1 && (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
          jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
        } else {
          tween.elem[tween.prop] = tween.now;
        }
      }
    }
  }; // Support: IE <=9 only
  // Panic based approach to setting things on disconnected nodes

  Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
    set: function set(tween) {
      if (tween.elem.nodeType && tween.elem.parentNode) {
        tween.elem[tween.prop] = tween.now;
      }
    }
  };
  jQuery.easing = {
    linear: function linear(p) {
      return p;
    },
    swing: function swing(p) {
      return 0.5 - Math.cos(p * Math.PI) / 2;
    },
    _default: "swing"
  };
  jQuery.fx = Tween.prototype.init; // Back compat <1.8 extension point

  jQuery.fx.step = {};
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/effects/animatedSelector.js":
/*!*************************************************************!*\
  !*** ./node_modules/jquery/src/effects/animatedSelector.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../selector */ "./node_modules/jquery/src/selector.js"), __webpack_require__(/*! ../effects */ "./node_modules/jquery/src/effects.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery) {
  "use strict";

  jQuery.expr.pseudos.animated = function (elem) {
    return jQuery.grep(jQuery.timers, function (fn) {
      return elem === fn.elem;
    }).length;
  };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/event.js":
/*!******************************************!*\
  !*** ./node_modules/jquery/src/event.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ./var/document */ "./node_modules/jquery/src/var/document.js"), __webpack_require__(/*! ./var/documentElement */ "./node_modules/jquery/src/var/documentElement.js"), __webpack_require__(/*! ./var/isFunction */ "./node_modules/jquery/src/var/isFunction.js"), __webpack_require__(/*! ./var/rnothtmlwhite */ "./node_modules/jquery/src/var/rnothtmlwhite.js"), __webpack_require__(/*! ./var/rcheckableType */ "./node_modules/jquery/src/var/rcheckableType.js"), __webpack_require__(/*! ./var/slice */ "./node_modules/jquery/src/var/slice.js"), __webpack_require__(/*! ./data/var/acceptData */ "./node_modules/jquery/src/data/var/acceptData.js"), __webpack_require__(/*! ./data/var/dataPriv */ "./node_modules/jquery/src/data/var/dataPriv.js"), __webpack_require__(/*! ./core/nodeName */ "./node_modules/jquery/src/core/nodeName.js"), __webpack_require__(/*! ./core/init */ "./node_modules/jquery/src/core/init.js"), __webpack_require__(/*! ./selector */ "./node_modules/jquery/src/selector.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, document, documentElement, isFunction, rnothtmlwhite, rcheckableType, slice, acceptData, dataPriv, nodeName) {
  "use strict";

  var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

  function returnTrue() {
    return true;
  }

  function returnFalse() {
    return false;
  } // Support: IE <=9 - 11+
  // focus() and blur() are asynchronous, except when they are no-op.
  // So expect focus to be synchronous when the element is already active,
  // and blur to be synchronous when the element is not already active.
  // (focus and blur are always synchronous in other supported browsers,
  // this just defines when we can count on it).


  function expectSync(elem, type) {
    return elem === safeActiveElement() === (type === "focus");
  } // Support: IE <=9 only
  // Accessing document.activeElement can throw unexpectedly
  // https://bugs.jquery.com/ticket/13393


  function safeActiveElement() {
    try {
      return document.activeElement;
    } catch (err) {}
  }

  function _on(elem, types, selector, data, fn, one) {
    var origFn, type; // Types can be a map of types/handlers

    if (_typeof(types) === "object") {
      // ( types-Object, selector, data )
      if (typeof selector !== "string") {
        // ( types-Object, data )
        data = data || selector;
        selector = undefined;
      }

      for (type in types) {
        _on(elem, type, selector, data, types[type], one);
      }

      return elem;
    }

    if (data == null && fn == null) {
      // ( types, fn )
      fn = selector;
      data = selector = undefined;
    } else if (fn == null) {
      if (typeof selector === "string") {
        // ( types, selector, fn )
        fn = data;
        data = undefined;
      } else {
        // ( types, data, fn )
        fn = data;
        data = selector;
        selector = undefined;
      }
    }

    if (fn === false) {
      fn = returnFalse;
    } else if (!fn) {
      return elem;
    }

    if (one === 1) {
      origFn = fn;

      fn = function fn(event) {
        // Can use an empty set, since event contains the info
        jQuery().off(event);
        return origFn.apply(this, arguments);
      }; // Use same guid so caller can remove using origFn


      fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
    }

    return elem.each(function () {
      jQuery.event.add(this, types, fn, data, selector);
    });
  }
  /*
   * Helper functions for managing events -- not part of the public interface.
   * Props to Dean Edwards' addEvent library for many of the ideas.
   */


  jQuery.event = {
    global: {},
    add: function add(elem, types, handler, data, selector) {
      var handleObjIn,
          eventHandle,
          tmp,
          events,
          t,
          handleObj,
          special,
          handlers,
          type,
          namespaces,
          origType,
          elemData = dataPriv.get(elem); // Only attach events to objects that accept data

      if (!acceptData(elem)) {
        return;
      } // Caller can pass in an object of custom data in lieu of the handler


      if (handler.handler) {
        handleObjIn = handler;
        handler = handleObjIn.handler;
        selector = handleObjIn.selector;
      } // Ensure that invalid selectors throw exceptions at attach time
      // Evaluate against documentElement in case elem is a non-element node (e.g., document)


      if (selector) {
        jQuery.find.matchesSelector(documentElement, selector);
      } // Make sure that the handler has a unique ID, used to find/remove it later


      if (!handler.guid) {
        handler.guid = jQuery.guid++;
      } // Init the element's event structure and main handler, if this is the first


      if (!(events = elemData.events)) {
        events = elemData.events = Object.create(null);
      }

      if (!(eventHandle = elemData.handle)) {
        eventHandle = elemData.handle = function (e) {
          // Discard the second event of a jQuery.event.trigger() and
          // when an event is called after a page has unloaded
          return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
        };
      } // Handle multiple events separated by a space


      types = (types || "").match(rnothtmlwhite) || [""];
      t = types.length;

      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort(); // There *must* be a type, no attaching namespace-only handlers

        if (!type) {
          continue;
        } // If event changes its type, use the special event handlers for the changed type


        special = jQuery.event.special[type] || {}; // If selector defined, determine special event api type, otherwise given type

        type = (selector ? special.delegateType : special.bindType) || type; // Update special based on newly reset type

        special = jQuery.event.special[type] || {}; // handleObj is passed to all event handlers

        handleObj = jQuery.extend({
          type: type,
          origType: origType,
          data: data,
          handler: handler,
          guid: handler.guid,
          selector: selector,
          needsContext: selector && jQuery.expr.match.needsContext.test(selector),
          namespace: namespaces.join(".")
        }, handleObjIn); // Init the event handler queue if we're the first

        if (!(handlers = events[type])) {
          handlers = events[type] = [];
          handlers.delegateCount = 0; // Only use addEventListener if the special events handler returns false

          if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
            if (elem.addEventListener) {
              elem.addEventListener(type, eventHandle);
            }
          }
        }

        if (special.add) {
          special.add.call(elem, handleObj);

          if (!handleObj.handler.guid) {
            handleObj.handler.guid = handler.guid;
          }
        } // Add to the element's handler list, delegates in front


        if (selector) {
          handlers.splice(handlers.delegateCount++, 0, handleObj);
        } else {
          handlers.push(handleObj);
        } // Keep track of which events have ever been used, for event optimization


        jQuery.event.global[type] = true;
      }
    },
    // Detach an event or set of events from an element
    remove: function remove(elem, types, handler, selector, mappedTypes) {
      var j,
          origCount,
          tmp,
          events,
          t,
          handleObj,
          special,
          handlers,
          type,
          namespaces,
          origType,
          elemData = dataPriv.hasData(elem) && dataPriv.get(elem);

      if (!elemData || !(events = elemData.events)) {
        return;
      } // Once for each type.namespace in types; type may be omitted


      types = (types || "").match(rnothtmlwhite) || [""];
      t = types.length;

      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort(); // Unbind all events (on this namespace, if provided) for the element

        if (!type) {
          for (type in events) {
            jQuery.event.remove(elem, type + types[t], handler, selector, true);
          }

          continue;
        }

        special = jQuery.event.special[type] || {};
        type = (selector ? special.delegateType : special.bindType) || type;
        handlers = events[type] || [];
        tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)"); // Remove matching events

        origCount = j = handlers.length;

        while (j--) {
          handleObj = handlers[j];

          if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
            handlers.splice(j, 1);

            if (handleObj.selector) {
              handlers.delegateCount--;
            }

            if (special.remove) {
              special.remove.call(elem, handleObj);
            }
          }
        } // Remove generic event handler if we removed something and no more handlers exist
        // (avoids potential for endless recursion during removal of special event handlers)


        if (origCount && !handlers.length) {
          if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
            jQuery.removeEvent(elem, type, elemData.handle);
          }

          delete events[type];
        }
      } // Remove data and the expando if it's no longer used


      if (jQuery.isEmptyObject(events)) {
        dataPriv.remove(elem, "handle events");
      }
    },
    dispatch: function dispatch(nativeEvent) {
      var i,
          j,
          ret,
          matched,
          handleObj,
          handlerQueue,
          args = new Array(arguments.length),
          // Make a writable jQuery.Event from the native event object
      event = jQuery.event.fix(nativeEvent),
          handlers = (dataPriv.get(this, "events") || Object.create(null))[event.type] || [],
          special = jQuery.event.special[event.type] || {}; // Use the fix-ed jQuery.Event rather than the (read-only) native event

      args[0] = event;

      for (i = 1; i < arguments.length; i++) {
        args[i] = arguments[i];
      }

      event.delegateTarget = this; // Call the preDispatch hook for the mapped type, and let it bail if desired

      if (special.preDispatch && special.preDispatch.call(this, event) === false) {
        return;
      } // Determine handlers


      handlerQueue = jQuery.event.handlers.call(this, event, handlers); // Run delegates first; they may want to stop propagation beneath us

      i = 0;

      while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
        event.currentTarget = matched.elem;
        j = 0;

        while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
          // If the event is namespaced, then each handler is only invoked if it is
          // specially universal or its namespaces are a superset of the event's.
          if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
            event.handleObj = handleObj;
            event.data = handleObj.data;
            ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);

            if (ret !== undefined) {
              if ((event.result = ret) === false) {
                event.preventDefault();
                event.stopPropagation();
              }
            }
          }
        }
      } // Call the postDispatch hook for the mapped type


      if (special.postDispatch) {
        special.postDispatch.call(this, event);
      }

      return event.result;
    },
    handlers: function handlers(event, _handlers) {
      var i,
          handleObj,
          sel,
          matchedHandlers,
          matchedSelectors,
          handlerQueue = [],
          delegateCount = _handlers.delegateCount,
          cur = event.target; // Find delegate handlers

      if (delegateCount && // Support: IE <=9
      // Black-hole SVG <use> instance trees (trac-13180)
      cur.nodeType && // Support: Firefox <=42
      // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
      // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
      // Support: IE 11 only
      // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
      !(event.type === "click" && event.button >= 1)) {
        for (; cur !== this; cur = cur.parentNode || this) {
          // Don't check non-elements (#13208)
          // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
          if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
            matchedHandlers = [];
            matchedSelectors = {};

            for (i = 0; i < delegateCount; i++) {
              handleObj = _handlers[i]; // Don't conflict with Object.prototype properties (#13203)

              sel = handleObj.selector + " ";

              if (matchedSelectors[sel] === undefined) {
                matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
              }

              if (matchedSelectors[sel]) {
                matchedHandlers.push(handleObj);
              }
            }

            if (matchedHandlers.length) {
              handlerQueue.push({
                elem: cur,
                handlers: matchedHandlers
              });
            }
          }
        }
      } // Add the remaining (directly-bound) handlers


      cur = this;

      if (delegateCount < _handlers.length) {
        handlerQueue.push({
          elem: cur,
          handlers: _handlers.slice(delegateCount)
        });
      }

      return handlerQueue;
    },
    addProp: function addProp(name, hook) {
      Object.defineProperty(jQuery.Event.prototype, name, {
        enumerable: true,
        configurable: true,
        get: isFunction(hook) ? function () {
          if (this.originalEvent) {
            return hook(this.originalEvent);
          }
        } : function () {
          if (this.originalEvent) {
            return this.originalEvent[name];
          }
        },
        set: function set(value) {
          Object.defineProperty(this, name, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: value
          });
        }
      });
    },
    fix: function fix(originalEvent) {
      return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
    },
    special: {
      load: {
        // Prevent triggered image.load events from bubbling to window.load
        noBubble: true
      },
      click: {
        // Utilize native event to ensure correct state for checkable inputs
        setup: function setup(data) {
          // For mutual compressibility with _default, replace `this` access with a local var.
          // `|| data` is dead code meant only to preserve the variable through minification.
          var el = this || data; // Claim the first handler

          if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
            // dataPriv.set( el, "click", ... )
            leverageNative(el, "click", returnTrue);
          } // Return false to allow normal processing in the caller


          return false;
        },
        trigger: function trigger(data) {
          // For mutual compressibility with _default, replace `this` access with a local var.
          // `|| data` is dead code meant only to preserve the variable through minification.
          var el = this || data; // Force setup before triggering a click

          if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
            leverageNative(el, "click");
          } // Return non-false to allow normal event-path propagation


          return true;
        },
        // For cross-browser consistency, suppress native .click() on links
        // Also prevent it if we're currently inside a leveraged native-event stack
        _default: function _default(event) {
          var target = event.target;
          return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(event) {
          // Support: Firefox 20+
          // Firefox doesn't alert if the returnValue field is not set.
          if (event.result !== undefined && event.originalEvent) {
            event.originalEvent.returnValue = event.result;
          }
        }
      }
    }
  }; // Ensure the presence of an event listener that handles manually-triggered
  // synthetic events by interrupting progress until reinvoked in response to
  // *native* events that it fires directly, ensuring that state changes have
  // already occurred before other listeners are invoked.

  function leverageNative(el, type, expectSync) {
    // Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
    if (!expectSync) {
      if (dataPriv.get(el, type) === undefined) {
        jQuery.event.add(el, type, returnTrue);
      }

      return;
    } // Register the controller as a special universal handler for all event namespaces


    dataPriv.set(el, type, false);
    jQuery.event.add(el, type, {
      namespace: false,
      handler: function handler(event) {
        var notAsync,
            result,
            saved = dataPriv.get(this, type);

        if (event.isTrigger & 1 && this[type]) {
          // Interrupt processing of the outer synthetic .trigger()ed event
          // Saved data should be false in such cases, but might be a leftover capture object
          // from an async native handler (gh-4350)
          if (!saved.length) {
            // Store arguments for use when handling the inner native event
            // There will always be at least one argument (an event object), so this array
            // will not be confused with a leftover capture object.
            saved = slice.call(arguments);
            dataPriv.set(this, type, saved); // Trigger the native event and capture its result
            // Support: IE <=9 - 11+
            // focus() and blur() are asynchronous

            notAsync = expectSync(this, type);
            this[type]();
            result = dataPriv.get(this, type);

            if (saved !== result || notAsync) {
              dataPriv.set(this, type, false);
            } else {
              result = {};
            }

            if (saved !== result) {
              // Cancel the outer synthetic event
              event.stopImmediatePropagation();
              event.preventDefault(); // Support: Chrome 86+
              // In Chrome, if an element having a focusout handler is blurred by
              // clicking outside of it, it invokes the handler synchronously. If
              // that handler calls `.remove()` on the element, the data is cleared,
              // leaving `result` undefined. We need to guard against this.

              return result && result.value;
            } // If this is an inner synthetic event for an event with a bubbling surrogate
            // (focus or blur), assume that the surrogate already propagated from triggering the
            // native event and prevent that from happening again here.
            // This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
            // bubbling surrogate propagates *after* the non-bubbling base), but that seems
            // less bad than duplication.

          } else if ((jQuery.event.special[type] || {}).delegateType) {
            event.stopPropagation();
          } // If this is a native event triggered above, everything is now in order
          // Fire an inner synthetic event with the original arguments

        } else if (saved.length) {
          // ...and capture the result
          dataPriv.set(this, type, {
            value: jQuery.event.trigger( // Support: IE <=9 - 11+
            // Extend with the prototype to reset the above stopImmediatePropagation()
            jQuery.extend(saved[0], jQuery.Event.prototype), saved.slice(1), this)
          }); // Abort handling of the native event

          event.stopImmediatePropagation();
        }
      }
    });
  }

  jQuery.removeEvent = function (elem, type, handle) {
    // This "if" is needed for plain objects
    if (elem.removeEventListener) {
      elem.removeEventListener(type, handle);
    }
  };

  jQuery.Event = function (src, props) {
    // Allow instantiation without the 'new' keyword
    if (!(this instanceof jQuery.Event)) {
      return new jQuery.Event(src, props);
    } // Event object


    if (src && src.type) {
      this.originalEvent = src;
      this.type = src.type; // Events bubbling up the document may have been marked as prevented
      // by a handler lower down the tree; reflect the correct value.

      this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && // Support: Android <=2.3 only
      src.returnValue === false ? returnTrue : returnFalse; // Create target properties
      // Support: Safari <=6 - 7 only
      // Target should not be a text node (#504, #13143)

      this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
      this.currentTarget = src.currentTarget;
      this.relatedTarget = src.relatedTarget; // Event type
    } else {
      this.type = src;
    } // Put explicitly provided properties onto the event object


    if (props) {
      jQuery.extend(this, props);
    } // Create a timestamp if incoming event doesn't have one


    this.timeStamp = src && src.timeStamp || Date.now(); // Mark it as fixed

    this[jQuery.expando] = true;
  }; // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
  // https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html


  jQuery.Event.prototype = {
    constructor: jQuery.Event,
    isDefaultPrevented: returnFalse,
    isPropagationStopped: returnFalse,
    isImmediatePropagationStopped: returnFalse,
    isSimulated: false,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = returnTrue;

      if (e && !this.isSimulated) {
        e.preventDefault();
      }
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = returnTrue;

      if (e && !this.isSimulated) {
        e.stopPropagation();
      }
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = returnTrue;

      if (e && !this.isSimulated) {
        e.stopImmediatePropagation();
      }

      this.stopPropagation();
    }
  }; // Includes all common event props including KeyEvent and MouseEvent specific props

  jQuery.each({
    altKey: true,
    bubbles: true,
    cancelable: true,
    changedTouches: true,
    ctrlKey: true,
    detail: true,
    eventPhase: true,
    metaKey: true,
    pageX: true,
    pageY: true,
    shiftKey: true,
    view: true,
    "char": true,
    code: true,
    charCode: true,
    key: true,
    keyCode: true,
    button: true,
    buttons: true,
    clientX: true,
    clientY: true,
    offsetX: true,
    offsetY: true,
    pointerId: true,
    pointerType: true,
    screenX: true,
    screenY: true,
    targetTouches: true,
    toElement: true,
    touches: true,
    which: true
  }, jQuery.event.addProp);
  jQuery.each({
    focus: "focusin",
    blur: "focusout"
  }, function (type, delegateType) {
    jQuery.event.special[type] = {
      // Utilize native event if possible so blur/focus sequence is correct
      setup: function setup() {
        // Claim the first handler
        // dataPriv.set( this, "focus", ... )
        // dataPriv.set( this, "blur", ... )
        leverageNative(this, type, expectSync); // Return false to allow normal processing in the caller

        return false;
      },
      trigger: function trigger() {
        // Force setup before trigger
        leverageNative(this, type); // Return non-false to allow normal event-path propagation

        return true;
      },
      // Suppress native focus or blur as it's already being fired
      // in leverageNative.
      _default: function _default() {
        return true;
      },
      delegateType: delegateType
    };
  }); // Create mouseenter/leave events using mouseover/out and event-time checks
  // so that event delegation works in jQuery.
  // Do the same for pointerenter/pointerleave and pointerover/pointerout
  //
  // Support: Safari 7 only
  // Safari sends mouseenter too often; see:
  // https://bugs.chromium.org/p/chromium/issues/detail?id=470258
  // for the description of the bug (it existed in older Chrome versions as well).

  jQuery.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (orig, fix) {
    jQuery.event.special[orig] = {
      delegateType: fix,
      bindType: fix,
      handle: function handle(event) {
        var ret,
            target = this,
            related = event.relatedTarget,
            handleObj = event.handleObj; // For mouseenter/leave call the handler if related is outside the target.
        // NB: No relatedTarget if the mouse left/entered the browser window

        if (!related || related !== target && !jQuery.contains(target, related)) {
          event.type = handleObj.origType;
          ret = handleObj.handler.apply(this, arguments);
          event.type = fix;
        }

        return ret;
      }
    };
  });
  jQuery.fn.extend({
    on: function on(types, selector, data, fn) {
      return _on(this, types, selector, data, fn);
    },
    one: function one(types, selector, data, fn) {
      return _on(this, types, selector, data, fn, 1);
    },
    off: function off(types, selector, fn) {
      var handleObj, type;

      if (types && types.preventDefault && types.handleObj) {
        // ( event )  dispatched jQuery.Event
        handleObj = types.handleObj;
        jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
        return this;
      }

      if (_typeof(types) === "object") {
        // ( types-object [, selector] )
        for (type in types) {
          this.off(type, selector, types[type]);
        }

        return this;
      }

      if (selector === false || typeof selector === "function") {
        // ( types [, fn] )
        fn = selector;
        selector = undefined;
      }

      if (fn === false) {
        fn = returnFalse;
      }

      return this.each(function () {
        jQuery.event.remove(this, types, fn, selector);
      });
    }
  });
  return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/event/focusin.js":
/*!**************************************************!*\
  !*** ./node_modules/jquery/src/event/focusin.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../data/var/dataPriv */ "./node_modules/jquery/src/data/var/dataPriv.js"), __webpack_require__(/*! ./support */ "./node_modules/jquery/src/event/support.js"), __webpack_require__(/*! ../event */ "./node_modules/jquery/src/event.js"), __webpack_require__(/*! ./trigger */ "./node_modules/jquery/src/event/trigger.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, dataPriv, support) {
  "use strict"; // Support: Firefox <=44
  // Firefox doesn't have focus(in | out) events
  // Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
  //
  // Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
  // focus(in | out) events fire after focus & blur events,
  // which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
  // Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857

  if (!support.focusin) {
    jQuery.each({
      focus: "focusin",
      blur: "focusout"
    }, function (orig, fix) {
      // Attach a single capturing handler on the document while someone wants focusin/focusout
      var handler = function handler(event) {
        jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
      };

      jQuery.event.special[fix] = {
        setup: function setup() {
          // Handle: regular nodes (via `this.ownerDocument`), window
          // (via `this.document`) & document (via `this`).
          var doc = this.ownerDocument || this.document || this,
              attaches = dataPriv.access(doc, fix);

          if (!attaches) {
            doc.addEventListener(orig, handler, true);
          }

          dataPriv.access(doc, fix, (attaches || 0) + 1);
        },
        teardown: function teardown() {
          var doc = this.ownerDocument || this.document || this,
              attaches = dataPriv.access(doc, fix) - 1;

          if (!attaches) {
            doc.removeEventListener(orig, handler, true);
            dataPriv.remove(doc, fix);
          } else {
            dataPriv.access(doc, fix, attaches);
          }
        }
      };
    });
  }

  return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/event/support.js":
/*!**************************************************!*\
  !*** ./node_modules/jquery/src/event/support.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../var/support */ "./node_modules/jquery/src/var/support.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (support) {
  "use strict";

  support.focusin = "onfocusin" in window;
  return support;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/event/trigger.js":
/*!**************************************************!*\
  !*** ./node_modules/jquery/src/event/trigger.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../var/document */ "./node_modules/jquery/src/var/document.js"), __webpack_require__(/*! ../data/var/dataPriv */ "./node_modules/jquery/src/data/var/dataPriv.js"), __webpack_require__(/*! ../data/var/acceptData */ "./node_modules/jquery/src/data/var/acceptData.js"), __webpack_require__(/*! ../var/hasOwn */ "./node_modules/jquery/src/var/hasOwn.js"), __webpack_require__(/*! ../var/isFunction */ "./node_modules/jquery/src/var/isFunction.js"), __webpack_require__(/*! ../var/isWindow */ "./node_modules/jquery/src/var/isWindow.js"), __webpack_require__(/*! ../event */ "./node_modules/jquery/src/event.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, document, dataPriv, acceptData, hasOwn, isFunction, isWindow) {
  "use strict";

  var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
      stopPropagationCallback = function stopPropagationCallback(e) {
    e.stopPropagation();
  };

  jQuery.extend(jQuery.event, {
    trigger: function trigger(event, data, elem, onlyHandlers) {
      var i,
          cur,
          tmp,
          bubbleType,
          ontype,
          handle,
          special,
          lastElement,
          eventPath = [elem || document],
          type = hasOwn.call(event, "type") ? event.type : event,
          namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
      cur = lastElement = tmp = elem = elem || document; // Don't do events on text and comment nodes

      if (elem.nodeType === 3 || elem.nodeType === 8) {
        return;
      } // focus/blur morphs to focusin/out; ensure we're not firing them right now


      if (rfocusMorph.test(type + jQuery.event.triggered)) {
        return;
      }

      if (type.indexOf(".") > -1) {
        // Namespaced trigger; create a regexp to match event type in handle()
        namespaces = type.split(".");
        type = namespaces.shift();
        namespaces.sort();
      }

      ontype = type.indexOf(":") < 0 && "on" + type; // Caller can pass in a jQuery.Event object, Object, or just an event type string

      event = event[jQuery.expando] ? event : new jQuery.Event(type, _typeof(event) === "object" && event); // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)

      event.isTrigger = onlyHandlers ? 2 : 3;
      event.namespace = namespaces.join(".");
      event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null; // Clean up the event in case it is being reused

      event.result = undefined;

      if (!event.target) {
        event.target = elem;
      } // Clone any incoming data and prepend the event, creating the handler arg list


      data = data == null ? [event] : jQuery.makeArray(data, [event]); // Allow special events to draw outside the lines

      special = jQuery.event.special[type] || {};

      if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
        return;
      } // Determine event propagation path in advance, per W3C events spec (#9951)
      // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)


      if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
        bubbleType = special.delegateType || type;

        if (!rfocusMorph.test(bubbleType + type)) {
          cur = cur.parentNode;
        }

        for (; cur; cur = cur.parentNode) {
          eventPath.push(cur);
          tmp = cur;
        } // Only add window if we got to document (e.g., not plain obj or detached DOM)


        if (tmp === (elem.ownerDocument || document)) {
          eventPath.push(tmp.defaultView || tmp.parentWindow || window);
        }
      } // Fire handlers on the event path


      i = 0;

      while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
        lastElement = cur;
        event.type = i > 1 ? bubbleType : special.bindType || type; // jQuery handler

        handle = (dataPriv.get(cur, "events") || Object.create(null))[event.type] && dataPriv.get(cur, "handle");

        if (handle) {
          handle.apply(cur, data);
        } // Native handler


        handle = ontype && cur[ontype];

        if (handle && handle.apply && acceptData(cur)) {
          event.result = handle.apply(cur, data);

          if (event.result === false) {
            event.preventDefault();
          }
        }
      }

      event.type = type; // If nobody prevented the default action, do it now

      if (!onlyHandlers && !event.isDefaultPrevented()) {
        if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
          // Call a native DOM method on the target with the same name as the event.
          // Don't do default actions on window, that's where global variables be (#6170)
          if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
            // Don't re-trigger an onFOO event when we call its FOO() method
            tmp = elem[ontype];

            if (tmp) {
              elem[ontype] = null;
            } // Prevent re-triggering of the same event, since we already bubbled it above


            jQuery.event.triggered = type;

            if (event.isPropagationStopped()) {
              lastElement.addEventListener(type, stopPropagationCallback);
            }

            elem[type]();

            if (event.isPropagationStopped()) {
              lastElement.removeEventListener(type, stopPropagationCallback);
            }

            jQuery.event.triggered = undefined;

            if (tmp) {
              elem[ontype] = tmp;
            }
          }
        }
      }

      return event.result;
    },
    // Piggyback on a donor event to simulate a different one
    // Used only for `focus(in | out)` events
    simulate: function simulate(type, elem, event) {
      var e = jQuery.extend(new jQuery.Event(), event, {
        type: type,
        isSimulated: true
      });
      jQuery.event.trigger(e, null, elem);
    }
  });
  jQuery.fn.extend({
    trigger: function trigger(type, data) {
      return this.each(function () {
        jQuery.event.trigger(type, data, this);
      });
    },
    triggerHandler: function triggerHandler(type, data) {
      var elem = this[0];

      if (elem) {
        return jQuery.event.trigger(type, data, elem, true);
      }
    }
  });
  return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/exports/amd.js":
/*!************************************************!*\
  !*** ./node_modules/jquery/src/exports/amd.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery) {
  "use strict"; // Register as a named AMD module, since jQuery can be concatenated with other
  // files that may use define, but not via a proper concatenation script that
  // understands anonymous AMD modules. A named AMD is safest and most robust
  // way to register. Lowercase jquery is used because AMD module names are
  // derived from file names, and jQuery is normally delivered in a lowercase
  // file name. Do this after creating the global so that if an AMD module wants
  // to call noConflict to hide this version of jQuery, it will work.
  // Note that for maximum portability, libraries that are not jQuery should
  // declare themselves as anonymous modules, and avoid setting a global if an
  // AMD loader is present. jQuery is a special case. For more information, see
  // https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return jQuery;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/exports/global.js":
/*!***************************************************!*\
  !*** ./node_modules/jquery/src/exports/global.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery) {
  "use strict";

  var // Map over jQuery in case of overwrite
  _jQuery = window.jQuery,
      // Map over the $ in case of overwrite
  _$ = window.$;

  jQuery.noConflict = function (deep) {
    if (window.$ === jQuery) {
      window.$ = _$;
    }

    if (deep && window.jQuery === jQuery) {
      window.jQuery = _jQuery;
    }

    return jQuery;
  }; // Expose jQuery and $ identifiers, even in AMD
  // (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
  // and CommonJS for browser emulators (#13566)


  if (typeof noGlobal === "undefined") {
    window.jQuery = window.$ = jQuery;
  }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/jquery.js":
/*!*******************************************!*\
  !*** ./node_modules/jquery/src/jquery.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ./selector */ "./node_modules/jquery/src/selector.js"), __webpack_require__(/*! ./traversing */ "./node_modules/jquery/src/traversing.js"), __webpack_require__(/*! ./callbacks */ "./node_modules/jquery/src/callbacks.js"), __webpack_require__(/*! ./deferred */ "./node_modules/jquery/src/deferred.js"), __webpack_require__(/*! ./deferred/exceptionHook */ "./node_modules/jquery/src/deferred/exceptionHook.js"), __webpack_require__(/*! ./core/ready */ "./node_modules/jquery/src/core/ready.js"), __webpack_require__(/*! ./data */ "./node_modules/jquery/src/data.js"), __webpack_require__(/*! ./queue */ "./node_modules/jquery/src/queue.js"), __webpack_require__(/*! ./queue/delay */ "./node_modules/jquery/src/queue/delay.js"), __webpack_require__(/*! ./attributes */ "./node_modules/jquery/src/attributes.js"), __webpack_require__(/*! ./event */ "./node_modules/jquery/src/event.js"), __webpack_require__(/*! ./event/focusin */ "./node_modules/jquery/src/event/focusin.js"), __webpack_require__(/*! ./manipulation */ "./node_modules/jquery/src/manipulation.js"), __webpack_require__(/*! ./manipulation/_evalUrl */ "./node_modules/jquery/src/manipulation/_evalUrl.js"), __webpack_require__(/*! ./wrap */ "./node_modules/jquery/src/wrap.js"), __webpack_require__(/*! ./css */ "./node_modules/jquery/src/css.js"), __webpack_require__(/*! ./css/hiddenVisibleSelectors */ "./node_modules/jquery/src/css/hiddenVisibleSelectors.js"), __webpack_require__(/*! ./serialize */ "./node_modules/jquery/src/serialize.js"), __webpack_require__(/*! ./ajax */ "./node_modules/jquery/src/ajax.js"), __webpack_require__(/*! ./ajax/xhr */ "./node_modules/jquery/src/ajax/xhr.js"), __webpack_require__(/*! ./ajax/script */ "./node_modules/jquery/src/ajax/script.js"), __webpack_require__(/*! ./ajax/jsonp */ "./node_modules/jquery/src/ajax/jsonp.js"), __webpack_require__(/*! ./ajax/load */ "./node_modules/jquery/src/ajax/load.js"), __webpack_require__(/*! ./core/parseXML */ "./node_modules/jquery/src/core/parseXML.js"), __webpack_require__(/*! ./core/parseHTML */ "./node_modules/jquery/src/core/parseHTML.js"), __webpack_require__(/*! ./effects */ "./node_modules/jquery/src/effects.js"), __webpack_require__(/*! ./effects/animatedSelector */ "./node_modules/jquery/src/effects/animatedSelector.js"), __webpack_require__(/*! ./offset */ "./node_modules/jquery/src/offset.js"), __webpack_require__(/*! ./dimensions */ "./node_modules/jquery/src/dimensions.js"), __webpack_require__(/*! ./deprecated */ "./node_modules/jquery/src/deprecated.js"), __webpack_require__(/*! ./exports/amd */ "./node_modules/jquery/src/exports/amd.js"), __webpack_require__(/*! ./exports/global */ "./node_modules/jquery/src/exports/global.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery) {
  "use strict";

  return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/manipulation.js":
/*!*************************************************!*\
  !*** ./node_modules/jquery/src/manipulation.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ./core/isAttached */ "./node_modules/jquery/src/core/isAttached.js"), __webpack_require__(/*! ./var/flat */ "./node_modules/jquery/src/var/flat.js"), __webpack_require__(/*! ./var/isFunction */ "./node_modules/jquery/src/var/isFunction.js"), __webpack_require__(/*! ./var/push */ "./node_modules/jquery/src/var/push.js"), __webpack_require__(/*! ./var/rcheckableType */ "./node_modules/jquery/src/var/rcheckableType.js"), __webpack_require__(/*! ./core/access */ "./node_modules/jquery/src/core/access.js"), __webpack_require__(/*! ./manipulation/var/rtagName */ "./node_modules/jquery/src/manipulation/var/rtagName.js"), __webpack_require__(/*! ./manipulation/var/rscriptType */ "./node_modules/jquery/src/manipulation/var/rscriptType.js"), __webpack_require__(/*! ./manipulation/wrapMap */ "./node_modules/jquery/src/manipulation/wrapMap.js"), __webpack_require__(/*! ./manipulation/getAll */ "./node_modules/jquery/src/manipulation/getAll.js"), __webpack_require__(/*! ./manipulation/setGlobalEval */ "./node_modules/jquery/src/manipulation/setGlobalEval.js"), __webpack_require__(/*! ./manipulation/buildFragment */ "./node_modules/jquery/src/manipulation/buildFragment.js"), __webpack_require__(/*! ./manipulation/support */ "./node_modules/jquery/src/manipulation/support.js"), __webpack_require__(/*! ./data/var/dataPriv */ "./node_modules/jquery/src/data/var/dataPriv.js"), __webpack_require__(/*! ./data/var/dataUser */ "./node_modules/jquery/src/data/var/dataUser.js"), __webpack_require__(/*! ./data/var/acceptData */ "./node_modules/jquery/src/data/var/acceptData.js"), __webpack_require__(/*! ./core/DOMEval */ "./node_modules/jquery/src/core/DOMEval.js"), __webpack_require__(/*! ./core/nodeName */ "./node_modules/jquery/src/core/nodeName.js"), __webpack_require__(/*! ./core/init */ "./node_modules/jquery/src/core/init.js"), __webpack_require__(/*! ./traversing */ "./node_modules/jquery/src/traversing.js"), __webpack_require__(/*! ./selector */ "./node_modules/jquery/src/selector.js"), __webpack_require__(/*! ./event */ "./node_modules/jquery/src/event.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, isAttached, flat, isFunction, push, rcheckableType, access, rtagName, rscriptType, wrapMap, getAll, setGlobalEval, buildFragment, support, dataPriv, dataUser, acceptData, DOMEval, nodeName) {
  "use strict";

  var // Support: IE <=10 - 11, Edge 12 - 13 only
  // In IE/Edge using regex groups here causes severe slowdowns.
  // See https://connect.microsoft.com/IE/feedback/details/1736512/
  rnoInnerhtml = /<script|<style|<link/i,
      // checked="checked" or checked
  rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
      rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g; // Prefer a tbody over its parent table for containing new rows

  function manipulationTarget(elem, content) {
    if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
      return jQuery(elem).children("tbody")[0] || elem;
    }

    return elem;
  } // Replace/restore the type attribute of script elements for safe DOM manipulation


  function disableScript(elem) {
    elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
    return elem;
  }

  function restoreScript(elem) {
    if ((elem.type || "").slice(0, 5) === "true/") {
      elem.type = elem.type.slice(5);
    } else {
      elem.removeAttribute("type");
    }

    return elem;
  }

  function cloneCopyEvent(src, dest) {
    var i, l, type, pdataOld, udataOld, udataCur, events;

    if (dest.nodeType !== 1) {
      return;
    } // 1. Copy private data: events, handlers, etc.


    if (dataPriv.hasData(src)) {
      pdataOld = dataPriv.get(src);
      events = pdataOld.events;

      if (events) {
        dataPriv.remove(dest, "handle events");

        for (type in events) {
          for (i = 0, l = events[type].length; i < l; i++) {
            jQuery.event.add(dest, type, events[type][i]);
          }
        }
      }
    } // 2. Copy user data


    if (dataUser.hasData(src)) {
      udataOld = dataUser.access(src);
      udataCur = jQuery.extend({}, udataOld);
      dataUser.set(dest, udataCur);
    }
  } // Fix IE bugs, see support tests


  function fixInput(src, dest) {
    var nodeName = dest.nodeName.toLowerCase(); // Fails to persist the checked state of a cloned checkbox or radio button.

    if (nodeName === "input" && rcheckableType.test(src.type)) {
      dest.checked = src.checked; // Fails to return the selected option to the default selected state when cloning options
    } else if (nodeName === "input" || nodeName === "textarea") {
      dest.defaultValue = src.defaultValue;
    }
  }

  function domManip(collection, args, callback, ignored) {
    // Flatten any nested arrays
    args = flat(args);
    var fragment,
        first,
        scripts,
        hasScripts,
        node,
        doc,
        i = 0,
        l = collection.length,
        iNoClone = l - 1,
        value = args[0],
        valueIsFunction = isFunction(value); // We can't cloneNode fragments that contain checked, in WebKit

    if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
      return collection.each(function (index) {
        var self = collection.eq(index);

        if (valueIsFunction) {
          args[0] = value.call(this, index, self.html());
        }

        domManip(self, args, callback, ignored);
      });
    }

    if (l) {
      fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
      first = fragment.firstChild;

      if (fragment.childNodes.length === 1) {
        fragment = first;
      } // Require either new content or an interest in ignored elements to invoke the callback


      if (first || ignored) {
        scripts = jQuery.map(getAll(fragment, "script"), disableScript);
        hasScripts = scripts.length; // Use the original fragment for the last item
        // instead of the first because it can end up
        // being emptied incorrectly in certain situations (#8070).

        for (; i < l; i++) {
          node = fragment;

          if (i !== iNoClone) {
            node = jQuery.clone(node, true, true); // Keep references to cloned scripts for later restoration

            if (hasScripts) {
              // Support: Android <=4.0 only, PhantomJS 1 only
              // push.apply(_, arraylike) throws on ancient WebKit
              jQuery.merge(scripts, getAll(node, "script"));
            }
          }

          callback.call(collection[i], node, i);
        }

        if (hasScripts) {
          doc = scripts[scripts.length - 1].ownerDocument; // Reenable scripts

          jQuery.map(scripts, restoreScript); // Evaluate executable scripts on first document insertion

          for (i = 0; i < hasScripts; i++) {
            node = scripts[i];

            if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
              if (node.src && (node.type || "").toLowerCase() !== "module") {
                // Optional AJAX dependency, but won't run scripts if not present
                if (jQuery._evalUrl && !node.noModule) {
                  jQuery._evalUrl(node.src, {
                    nonce: node.nonce || node.getAttribute("nonce")
                  }, doc);
                }
              } else {
                DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
              }
            }
          }
        }
      }
    }

    return collection;
  }

  function _remove(elem, selector, keepData) {
    var node,
        nodes = selector ? jQuery.filter(selector, elem) : elem,
        i = 0;

    for (; (node = nodes[i]) != null; i++) {
      if (!keepData && node.nodeType === 1) {
        jQuery.cleanData(getAll(node));
      }

      if (node.parentNode) {
        if (keepData && isAttached(node)) {
          setGlobalEval(getAll(node, "script"));
        }

        node.parentNode.removeChild(node);
      }
    }

    return elem;
  }

  jQuery.extend({
    htmlPrefilter: function htmlPrefilter(html) {
      return html;
    },
    clone: function clone(elem, dataAndEvents, deepDataAndEvents) {
      var i,
          l,
          srcElements,
          destElements,
          clone = elem.cloneNode(true),
          inPage = isAttached(elem); // Fix IE cloning issues

      if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
        // We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
        destElements = getAll(clone);
        srcElements = getAll(elem);

        for (i = 0, l = srcElements.length; i < l; i++) {
          fixInput(srcElements[i], destElements[i]);
        }
      } // Copy the events from the original to the clone


      if (dataAndEvents) {
        if (deepDataAndEvents) {
          srcElements = srcElements || getAll(elem);
          destElements = destElements || getAll(clone);

          for (i = 0, l = srcElements.length; i < l; i++) {
            cloneCopyEvent(srcElements[i], destElements[i]);
          }
        } else {
          cloneCopyEvent(elem, clone);
        }
      } // Preserve script evaluation history


      destElements = getAll(clone, "script");

      if (destElements.length > 0) {
        setGlobalEval(destElements, !inPage && getAll(elem, "script"));
      } // Return the cloned set


      return clone;
    },
    cleanData: function cleanData(elems) {
      var data,
          elem,
          type,
          special = jQuery.event.special,
          i = 0;

      for (; (elem = elems[i]) !== undefined; i++) {
        if (acceptData(elem)) {
          if (data = elem[dataPriv.expando]) {
            if (data.events) {
              for (type in data.events) {
                if (special[type]) {
                  jQuery.event.remove(elem, type); // This is a shortcut to avoid jQuery.event.remove's overhead
                } else {
                  jQuery.removeEvent(elem, type, data.handle);
                }
              }
            } // Support: Chrome <=35 - 45+
            // Assign undefined instead of using delete, see Data#remove


            elem[dataPriv.expando] = undefined;
          }

          if (elem[dataUser.expando]) {
            // Support: Chrome <=35 - 45+
            // Assign undefined instead of using delete, see Data#remove
            elem[dataUser.expando] = undefined;
          }
        }
      }
    }
  });
  jQuery.fn.extend({
    detach: function detach(selector) {
      return _remove(this, selector, true);
    },
    remove: function remove(selector) {
      return _remove(this, selector);
    },
    text: function text(value) {
      return access(this, function (value) {
        return value === undefined ? jQuery.text(this) : this.empty().each(function () {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            this.textContent = value;
          }
        });
      }, null, value, arguments.length);
    },
    append: function append() {
      return domManip(this, arguments, function (elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.appendChild(elem);
        }
      });
    },
    prepend: function prepend() {
      return domManip(this, arguments, function (elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.insertBefore(elem, target.firstChild);
        }
      });
    },
    before: function before() {
      return domManip(this, arguments, function (elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this);
        }
      });
    },
    after: function after() {
      return domManip(this, arguments, function (elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this.nextSibling);
        }
      });
    },
    empty: function empty() {
      var elem,
          i = 0;

      for (; (elem = this[i]) != null; i++) {
        if (elem.nodeType === 1) {
          // Prevent memory leaks
          jQuery.cleanData(getAll(elem, false)); // Remove any remaining nodes

          elem.textContent = "";
        }
      }

      return this;
    },
    clone: function clone(dataAndEvents, deepDataAndEvents) {
      dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
      deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
      return this.map(function () {
        return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
      });
    },
    html: function html(value) {
      return access(this, function (value) {
        var elem = this[0] || {},
            i = 0,
            l = this.length;

        if (value === undefined && elem.nodeType === 1) {
          return elem.innerHTML;
        } // See if we can take a shortcut and just use innerHTML


        if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
          value = jQuery.htmlPrefilter(value);

          try {
            for (; i < l; i++) {
              elem = this[i] || {}; // Remove element nodes and prevent memory leaks

              if (elem.nodeType === 1) {
                jQuery.cleanData(getAll(elem, false));
                elem.innerHTML = value;
              }
            }

            elem = 0; // If using innerHTML throws an exception, use the fallback method
          } catch (e) {}
        }

        if (elem) {
          this.empty().append(value);
        }
      }, null, value, arguments.length);
    },
    replaceWith: function replaceWith() {
      var ignored = []; // Make the changes, replacing each non-ignored context element with the new content

      return domManip(this, arguments, function (elem) {
        var parent = this.parentNode;

        if (jQuery.inArray(this, ignored) < 0) {
          jQuery.cleanData(getAll(this));

          if (parent) {
            parent.replaceChild(elem, this);
          }
        } // Force callback invocation

      }, ignored);
    }
  });
  jQuery.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (name, original) {
    jQuery.fn[name] = function (selector) {
      var elems,
          ret = [],
          insert = jQuery(selector),
          last = insert.length - 1,
          i = 0;

      for (; i <= last; i++) {
        elems = i === last ? this : this.clone(true);
        jQuery(insert[i])[original](elems); // Support: Android <=4.0 only, PhantomJS 1 only
        // .get() because push.apply(_, arraylike) throws on ancient WebKit

        push.apply(ret, elems.get());
      }

      return this.pushStack(ret);
    };
  });
  return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/manipulation/_evalUrl.js":
/*!**********************************************************!*\
  !*** ./node_modules/jquery/src/manipulation/_evalUrl.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../ajax */ "./node_modules/jquery/src/ajax.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery) {
  "use strict";

  jQuery._evalUrl = function (url, options, doc) {
    return jQuery.ajax({
      url: url,
      // Make this explicit, since user can override this through ajaxSetup (#11264)
      type: "GET",
      dataType: "script",
      cache: true,
      async: false,
      global: false,
      // Only evaluate the response if it is successful (gh-4126)
      // dataFilter is not invoked for failure responses, so using it instead
      // of the default converter is kludgy but it works.
      converters: {
        "text script": function textScript() {}
      },
      dataFilter: function dataFilter(response) {
        jQuery.globalEval(response, options, doc);
      }
    });
  };

  return jQuery._evalUrl;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/manipulation/buildFragment.js":
/*!***************************************************************!*\
  !*** ./node_modules/jquery/src/manipulation/buildFragment.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../core/toType */ "./node_modules/jquery/src/core/toType.js"), __webpack_require__(/*! ../core/isAttached */ "./node_modules/jquery/src/core/isAttached.js"), __webpack_require__(/*! ./var/rtagName */ "./node_modules/jquery/src/manipulation/var/rtagName.js"), __webpack_require__(/*! ./var/rscriptType */ "./node_modules/jquery/src/manipulation/var/rscriptType.js"), __webpack_require__(/*! ./wrapMap */ "./node_modules/jquery/src/manipulation/wrapMap.js"), __webpack_require__(/*! ./getAll */ "./node_modules/jquery/src/manipulation/getAll.js"), __webpack_require__(/*! ./setGlobalEval */ "./node_modules/jquery/src/manipulation/setGlobalEval.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, toType, isAttached, rtagName, rscriptType, wrapMap, getAll, setGlobalEval) {
  "use strict";

  var rhtml = /<|&#?\w+;/;

  function buildFragment(elems, context, scripts, selection, ignored) {
    var elem,
        tmp,
        tag,
        wrap,
        attached,
        j,
        fragment = context.createDocumentFragment(),
        nodes = [],
        i = 0,
        l = elems.length;

    for (; i < l; i++) {
      elem = elems[i];

      if (elem || elem === 0) {
        // Add nodes directly
        if (toType(elem) === "object") {
          // Support: Android <=4.0 only, PhantomJS 1 only
          // push.apply(_, arraylike) throws on ancient WebKit
          jQuery.merge(nodes, elem.nodeType ? [elem] : elem); // Convert non-html into a text node
        } else if (!rhtml.test(elem)) {
          nodes.push(context.createTextNode(elem)); // Convert html into DOM nodes
        } else {
          tmp = tmp || fragment.appendChild(context.createElement("div")); // Deserialize a standard representation

          tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
          wrap = wrapMap[tag] || wrapMap._default;
          tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2]; // Descend through wrappers to the right content

          j = wrap[0];

          while (j--) {
            tmp = tmp.lastChild;
          } // Support: Android <=4.0 only, PhantomJS 1 only
          // push.apply(_, arraylike) throws on ancient WebKit


          jQuery.merge(nodes, tmp.childNodes); // Remember the top-level container

          tmp = fragment.firstChild; // Ensure the created nodes are orphaned (#12392)

          tmp.textContent = "";
        }
      }
    } // Remove wrapper from fragment


    fragment.textContent = "";
    i = 0;

    while (elem = nodes[i++]) {
      // Skip elements already in the context collection (trac-4087)
      if (selection && jQuery.inArray(elem, selection) > -1) {
        if (ignored) {
          ignored.push(elem);
        }

        continue;
      }

      attached = isAttached(elem); // Append to fragment

      tmp = getAll(fragment.appendChild(elem), "script"); // Preserve script evaluation history

      if (attached) {
        setGlobalEval(tmp);
      } // Capture executables


      if (scripts) {
        j = 0;

        while (elem = tmp[j++]) {
          if (rscriptType.test(elem.type || "")) {
            scripts.push(elem);
          }
        }
      }
    }

    return fragment;
  }

  return buildFragment;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/manipulation/getAll.js":
/*!********************************************************!*\
  !*** ./node_modules/jquery/src/manipulation/getAll.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../core/nodeName */ "./node_modules/jquery/src/core/nodeName.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, nodeName) {
  "use strict";

  function getAll(context, tag) {
    // Support: IE <=9 - 11 only
    // Use typeof to avoid zero-argument method invocation on host objects (#15151)
    var ret;

    if (typeof context.getElementsByTagName !== "undefined") {
      ret = context.getElementsByTagName(tag || "*");
    } else if (typeof context.querySelectorAll !== "undefined") {
      ret = context.querySelectorAll(tag || "*");
    } else {
      ret = [];
    }

    if (tag === undefined || tag && nodeName(context, tag)) {
      return jQuery.merge([context], ret);
    }

    return ret;
  }

  return getAll;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/manipulation/setGlobalEval.js":
/*!***************************************************************!*\
  !*** ./node_modules/jquery/src/manipulation/setGlobalEval.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../data/var/dataPriv */ "./node_modules/jquery/src/data/var/dataPriv.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (dataPriv) {
  "use strict"; // Mark scripts as having already been evaluated

  function setGlobalEval(elems, refElements) {
    var i = 0,
        l = elems.length;

    for (; i < l; i++) {
      dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
    }
  }

  return setGlobalEval;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/manipulation/support.js":
/*!*********************************************************!*\
  !*** ./node_modules/jquery/src/manipulation/support.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../var/document */ "./node_modules/jquery/src/var/document.js"), __webpack_require__(/*! ../var/support */ "./node_modules/jquery/src/var/support.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (document, support) {
  "use strict";

  (function () {
    var fragment = document.createDocumentFragment(),
        div = fragment.appendChild(document.createElement("div")),
        input = document.createElement("input"); // Support: Android 4.0 - 4.3 only
    // Check state lost if the name is set (#11217)
    // Support: Windows Web Apps (WWA)
    // `name` and `type` must use .setAttribute for WWA (#14901)

    input.setAttribute("type", "radio");
    input.setAttribute("checked", "checked");
    input.setAttribute("name", "t");
    div.appendChild(input); // Support: Android <=4.1 only
    // Older WebKit doesn't clone checked state correctly in fragments

    support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked; // Support: IE <=11 only
    // Make sure textarea (and checkbox) defaultValue is properly cloned

    div.innerHTML = "<textarea>x</textarea>";
    support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue; // Support: IE <=9 only
    // IE <=9 replaces <option> tags with their contents when inserted outside of
    // the select element.

    div.innerHTML = "<option></option>";
    support.option = !!div.lastChild;
  })();

  return support;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/manipulation/var/rscriptType.js":
/*!*****************************************************************!*\
  !*** ./node_modules/jquery/src/manipulation/var/rscriptType.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict";

  return /^$|^module$|\/(?:java|ecma)script/i;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/manipulation/var/rtagName.js":
/*!**************************************************************!*\
  !*** ./node_modules/jquery/src/manipulation/var/rtagName.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict"; // rtagName captures the name from the first start tag in a string of HTML
  // https://html.spec.whatwg.org/multipage/syntax.html#tag-open-state
  // https://html.spec.whatwg.org/multipage/syntax.html#tag-name-state

  return /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/manipulation/wrapMap.js":
/*!*********************************************************!*\
  !*** ./node_modules/jquery/src/manipulation/wrapMap.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./support */ "./node_modules/jquery/src/manipulation/support.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (support) {
  "use strict"; // We have to close these tags to support XHTML (#13200)

  var wrapMap = {
    // XHTML parsers do not magically insert elements in the
    // same way that tag soup parsers do. So we cannot shorten
    // this by omitting <tbody> or other required elements.
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
  wrapMap.th = wrapMap.td; // Support: IE <=9 only

  if (!support.option) {
    wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"];
  }

  return wrapMap;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/offset.js":
/*!*******************************************!*\
  !*** ./node_modules/jquery/src/offset.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ./core/access */ "./node_modules/jquery/src/core/access.js"), __webpack_require__(/*! ./var/documentElement */ "./node_modules/jquery/src/var/documentElement.js"), __webpack_require__(/*! ./var/isFunction */ "./node_modules/jquery/src/var/isFunction.js"), __webpack_require__(/*! ./css/var/rnumnonpx */ "./node_modules/jquery/src/css/var/rnumnonpx.js"), __webpack_require__(/*! ./css/curCSS */ "./node_modules/jquery/src/css/curCSS.js"), __webpack_require__(/*! ./css/addGetHookIf */ "./node_modules/jquery/src/css/addGetHookIf.js"), __webpack_require__(/*! ./css/support */ "./node_modules/jquery/src/css/support.js"), __webpack_require__(/*! ./var/isWindow */ "./node_modules/jquery/src/var/isWindow.js"), __webpack_require__(/*! ./core/init */ "./node_modules/jquery/src/core/init.js"), __webpack_require__(/*! ./css */ "./node_modules/jquery/src/css.js"), __webpack_require__(/*! ./selector */ "./node_modules/jquery/src/selector.js") // contains
], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, access, documentElement, isFunction, rnumnonpx, curCSS, addGetHookIf, support, isWindow) {
  "use strict";

  jQuery.offset = {
    setOffset: function setOffset(elem, options, i) {
      var curPosition,
          curLeft,
          curCSSTop,
          curTop,
          curOffset,
          curCSSLeft,
          calculatePosition,
          position = jQuery.css(elem, "position"),
          curElem = jQuery(elem),
          props = {}; // Set position first, in-case top/left are set even on static elem

      if (position === "static") {
        elem.style.position = "relative";
      }

      curOffset = curElem.offset();
      curCSSTop = jQuery.css(elem, "top");
      curCSSLeft = jQuery.css(elem, "left");
      calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1; // Need to be able to calculate position if either
      // top or left is auto and position is either absolute or fixed

      if (calculatePosition) {
        curPosition = curElem.position();
        curTop = curPosition.top;
        curLeft = curPosition.left;
      } else {
        curTop = parseFloat(curCSSTop) || 0;
        curLeft = parseFloat(curCSSLeft) || 0;
      }

      if (isFunction(options)) {
        // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
        options = options.call(elem, i, jQuery.extend({}, curOffset));
      }

      if (options.top != null) {
        props.top = options.top - curOffset.top + curTop;
      }

      if (options.left != null) {
        props.left = options.left - curOffset.left + curLeft;
      }

      if ("using" in options) {
        options.using.call(elem, props);
      } else {
        curElem.css(props);
      }
    }
  };
  jQuery.fn.extend({
    // offset() relates an element's border box to the document origin
    offset: function offset(options) {
      // Preserve chaining for setter
      if (arguments.length) {
        return options === undefined ? this : this.each(function (i) {
          jQuery.offset.setOffset(this, options, i);
        });
      }

      var rect,
          win,
          elem = this[0];

      if (!elem) {
        return;
      } // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
      // Support: IE <=11 only
      // Running getBoundingClientRect on a
      // disconnected node in IE throws an error


      if (!elem.getClientRects().length) {
        return {
          top: 0,
          left: 0
        };
      } // Get document-relative position by adding viewport scroll to viewport-relative gBCR


      rect = elem.getBoundingClientRect();
      win = elem.ownerDocument.defaultView;
      return {
        top: rect.top + win.pageYOffset,
        left: rect.left + win.pageXOffset
      };
    },
    // position() relates an element's margin box to its offset parent's padding box
    // This corresponds to the behavior of CSS absolute positioning
    position: function position() {
      if (!this[0]) {
        return;
      }

      var offsetParent,
          offset,
          doc,
          elem = this[0],
          parentOffset = {
        top: 0,
        left: 0
      }; // position:fixed elements are offset from the viewport, which itself always has zero offset

      if (jQuery.css(elem, "position") === "fixed") {
        // Assume position:fixed implies availability of getBoundingClientRect
        offset = elem.getBoundingClientRect();
      } else {
        offset = this.offset(); // Account for the *real* offset parent, which can be the document or its root element
        // when a statically positioned element is identified

        doc = elem.ownerDocument;
        offsetParent = elem.offsetParent || doc.documentElement;

        while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static") {
          offsetParent = offsetParent.parentNode;
        }

        if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
          // Incorporate borders into its offset, since they are outside its content origin
          parentOffset = jQuery(offsetParent).offset();
          parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
          parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
        }
      } // Subtract parent offsets and element margins


      return {
        top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
        left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
      };
    },
    // This method will return documentElement in the following cases:
    // 1) For the element inside the iframe without offsetParent, this method will return
    //    documentElement of the parent window
    // 2) For the hidden or detached element
    // 3) For body or html element, i.e. in case of the html node - it will return itself
    //
    // but those exceptions were never presented as a real life use-cases
    // and might be considered as more preferable results.
    //
    // This logic, however, is not guaranteed and can change at any point in the future
    offsetParent: function offsetParent() {
      return this.map(function () {
        var offsetParent = this.offsetParent;

        while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
          offsetParent = offsetParent.offsetParent;
        }

        return offsetParent || documentElement;
      });
    }
  }); // Create scrollLeft and scrollTop methods

  jQuery.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (method, prop) {
    var top = "pageYOffset" === prop;

    jQuery.fn[method] = function (val) {
      return access(this, function (elem, method, val) {
        // Coalesce documents and windows
        var win;

        if (isWindow(elem)) {
          win = elem;
        } else if (elem.nodeType === 9) {
          win = elem.defaultView;
        }

        if (val === undefined) {
          return win ? win[prop] : elem[method];
        }

        if (win) {
          win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
        } else {
          elem[method] = val;
        }
      }, method, val, arguments.length);
    };
  }); // Support: Safari <=7 - 9.1, Chrome <=37 - 49
  // Add the top/left cssHooks using jQuery.fn.position
  // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
  // Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
  // getComputedStyle returns percent when specified for top/left/bottom/right;
  // rather than make the css module depend on the offset module, just check for it here

  jQuery.each(["top", "left"], function (_i, prop) {
    jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
      if (computed) {
        computed = curCSS(elem, prop); // If curCSS returns percentage, fallback to offset

        return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
      }
    });
  });
  return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/queue.js":
/*!******************************************!*\
  !*** ./node_modules/jquery/src/queue.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ./data/var/dataPriv */ "./node_modules/jquery/src/data/var/dataPriv.js"), __webpack_require__(/*! ./deferred */ "./node_modules/jquery/src/deferred.js"), __webpack_require__(/*! ./callbacks */ "./node_modules/jquery/src/callbacks.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, dataPriv) {
  "use strict";

  jQuery.extend({
    queue: function queue(elem, type, data) {
      var queue;

      if (elem) {
        type = (type || "fx") + "queue";
        queue = dataPriv.get(elem, type); // Speed up dequeue by getting out quickly if this is just a lookup

        if (data) {
          if (!queue || Array.isArray(data)) {
            queue = dataPriv.access(elem, type, jQuery.makeArray(data));
          } else {
            queue.push(data);
          }
        }

        return queue || [];
      }
    },
    dequeue: function dequeue(elem, type) {
      type = type || "fx";

      var queue = jQuery.queue(elem, type),
          startLength = queue.length,
          fn = queue.shift(),
          hooks = jQuery._queueHooks(elem, type),
          next = function next() {
        jQuery.dequeue(elem, type);
      }; // If the fx queue is dequeued, always remove the progress sentinel


      if (fn === "inprogress") {
        fn = queue.shift();
        startLength--;
      }

      if (fn) {
        // Add a progress sentinel to prevent the fx queue from being
        // automatically dequeued
        if (type === "fx") {
          queue.unshift("inprogress");
        } // Clear up the last queue stop function


        delete hooks.stop;
        fn.call(elem, next, hooks);
      }

      if (!startLength && hooks) {
        hooks.empty.fire();
      }
    },
    // Not public - generate a queueHooks object, or return the current one
    _queueHooks: function _queueHooks(elem, type) {
      var key = type + "queueHooks";
      return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
        empty: jQuery.Callbacks("once memory").add(function () {
          dataPriv.remove(elem, [type + "queue", key]);
        })
      });
    }
  });
  jQuery.fn.extend({
    queue: function queue(type, data) {
      var setter = 2;

      if (typeof type !== "string") {
        data = type;
        type = "fx";
        setter--;
      }

      if (arguments.length < setter) {
        return jQuery.queue(this[0], type);
      }

      return data === undefined ? this : this.each(function () {
        var queue = jQuery.queue(this, type, data); // Ensure a hooks for this queue

        jQuery._queueHooks(this, type);

        if (type === "fx" && queue[0] !== "inprogress") {
          jQuery.dequeue(this, type);
        }
      });
    },
    dequeue: function dequeue(type) {
      return this.each(function () {
        jQuery.dequeue(this, type);
      });
    },
    clearQueue: function clearQueue(type) {
      return this.queue(type || "fx", []);
    },
    // Get a promise resolved when queues of a certain type
    // are emptied (fx is the type by default)
    promise: function promise(type, obj) {
      var tmp,
          count = 1,
          defer = jQuery.Deferred(),
          elements = this,
          i = this.length,
          resolve = function resolve() {
        if (! --count) {
          defer.resolveWith(elements, [elements]);
        }
      };

      if (typeof type !== "string") {
        obj = type;
        type = undefined;
      }

      type = type || "fx";

      while (i--) {
        tmp = dataPriv.get(elements[i], type + "queueHooks");

        if (tmp && tmp.empty) {
          count++;
          tmp.empty.add(resolve);
        }
      }

      resolve();
      return defer.promise(obj);
    }
  });
  return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/queue/delay.js":
/*!************************************************!*\
  !*** ./node_modules/jquery/src/queue/delay.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../queue */ "./node_modules/jquery/src/queue.js"), __webpack_require__(/*! ../effects */ "./node_modules/jquery/src/effects.js") // Delay is optional because of this dependency
], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery) {
  "use strict"; // Based off of the plugin by Clint Helfers, with permission.
  // https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/

  jQuery.fn.delay = function (time, type) {
    time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
    type = type || "fx";
    return this.queue(type, function (next, hooks) {
      var timeout = window.setTimeout(next, time);

      hooks.stop = function () {
        window.clearTimeout(timeout);
      };
    });
  };

  return jQuery.fn.delay;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/selector-sizzle.js":
/*!****************************************************!*\
  !*** ./node_modules/jquery/src/selector-sizzle.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../external/sizzle/dist/sizzle */ "./node_modules/jquery/external/sizzle/dist/sizzle.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, Sizzle) {
  "use strict";

  jQuery.find = Sizzle;
  jQuery.expr = Sizzle.selectors; // Deprecated

  jQuery.expr[":"] = jQuery.expr.pseudos;
  jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
  jQuery.text = Sizzle.getText;
  jQuery.isXMLDoc = Sizzle.isXML;
  jQuery.contains = Sizzle.contains;
  jQuery.escapeSelector = Sizzle.escape;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/selector.js":
/*!*********************************************!*\
  !*** ./node_modules/jquery/src/selector.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./selector-sizzle */ "./node_modules/jquery/src/selector-sizzle.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict";
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/serialize.js":
/*!**********************************************!*\
  !*** ./node_modules/jquery/src/serialize.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ./core/toType */ "./node_modules/jquery/src/core/toType.js"), __webpack_require__(/*! ./var/rcheckableType */ "./node_modules/jquery/src/var/rcheckableType.js"), __webpack_require__(/*! ./var/isFunction */ "./node_modules/jquery/src/var/isFunction.js"), __webpack_require__(/*! ./core/init */ "./node_modules/jquery/src/core/init.js"), __webpack_require__(/*! ./traversing */ "./node_modules/jquery/src/traversing.js"), // filter
__webpack_require__(/*! ./attributes/prop */ "./node_modules/jquery/src/attributes/prop.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, toType, rcheckableType, isFunction) {
  "use strict";

  var rbracket = /\[\]$/,
      rCRLF = /\r?\n/g,
      rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
      rsubmittable = /^(?:input|select|textarea|keygen)/i;

  function buildParams(prefix, obj, traditional, add) {
    var name;

    if (Array.isArray(obj)) {
      // Serialize array item.
      jQuery.each(obj, function (i, v) {
        if (traditional || rbracket.test(prefix)) {
          // Treat each array item as a scalar.
          add(prefix, v);
        } else {
          // Item is non-scalar (array or object), encode its numeric index.
          buildParams(prefix + "[" + (_typeof(v) === "object" && v != null ? i : "") + "]", v, traditional, add);
        }
      });
    } else if (!traditional && toType(obj) === "object") {
      // Serialize object item.
      for (name in obj) {
        buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
      }
    } else {
      // Serialize scalar item.
      add(prefix, obj);
    }
  } // Serialize an array of form elements or a set of
  // key/values into a query string


  jQuery.param = function (a, traditional) {
    var prefix,
        s = [],
        add = function add(key, valueOrFunction) {
      // If value is a function, invoke it and use its return value
      var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
      s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
    };

    if (a == null) {
      return "";
    } // If an array was passed in, assume that it is an array of form elements.


    if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
      // Serialize the form elements
      jQuery.each(a, function () {
        add(this.name, this.value);
      });
    } else {
      // If traditional, encode the "old" way (the way 1.3.2 or older
      // did it), otherwise encode params recursively.
      for (prefix in a) {
        buildParams(prefix, a[prefix], traditional, add);
      }
    } // Return the resulting serialization


    return s.join("&");
  };

  jQuery.fn.extend({
    serialize: function serialize() {
      return jQuery.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        // Can add propHook for "elements" to filter or add form elements
        var elements = jQuery.prop(this, "elements");
        return elements ? jQuery.makeArray(elements) : this;
      }).filter(function () {
        var type = this.type; // Use .is( ":disabled" ) so that fieldset[disabled] works

        return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
      }).map(function (_i, elem) {
        var val = jQuery(this).val();

        if (val == null) {
          return null;
        }

        if (Array.isArray(val)) {
          return jQuery.map(val, function (val) {
            return {
              name: elem.name,
              value: val.replace(rCRLF, "\r\n")
            };
          });
        }

        return {
          name: elem.name,
          value: val.replace(rCRLF, "\r\n")
        };
      }).get();
    }
  });
  return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/traversing.js":
/*!***********************************************!*\
  !*** ./node_modules/jquery/src/traversing.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ./var/getProto */ "./node_modules/jquery/src/var/getProto.js"), __webpack_require__(/*! ./var/indexOf */ "./node_modules/jquery/src/var/indexOf.js"), __webpack_require__(/*! ./traversing/var/dir */ "./node_modules/jquery/src/traversing/var/dir.js"), __webpack_require__(/*! ./traversing/var/siblings */ "./node_modules/jquery/src/traversing/var/siblings.js"), __webpack_require__(/*! ./traversing/var/rneedsContext */ "./node_modules/jquery/src/traversing/var/rneedsContext.js"), __webpack_require__(/*! ./core/nodeName */ "./node_modules/jquery/src/core/nodeName.js"), __webpack_require__(/*! ./core/init */ "./node_modules/jquery/src/core/init.js"), __webpack_require__(/*! ./traversing/findFilter */ "./node_modules/jquery/src/traversing/findFilter.js"), __webpack_require__(/*! ./selector */ "./node_modules/jquery/src/selector.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, getProto, indexOf, dir, _siblings, rneedsContext, nodeName) {
  "use strict";

  var rparentsprev = /^(?:parents|prev(?:Until|All))/,
      // Methods guaranteed to produce a unique set when starting from a unique set
  guaranteedUnique = {
    children: true,
    contents: true,
    next: true,
    prev: true
  };
  jQuery.fn.extend({
    has: function has(target) {
      var targets = jQuery(target, this),
          l = targets.length;
      return this.filter(function () {
        var i = 0;

        for (; i < l; i++) {
          if (jQuery.contains(this, targets[i])) {
            return true;
          }
        }
      });
    },
    closest: function closest(selectors, context) {
      var cur,
          i = 0,
          l = this.length,
          matched = [],
          targets = typeof selectors !== "string" && jQuery(selectors); // Positional selectors never match, since there's no _selection_ context

      if (!rneedsContext.test(selectors)) {
        for (; i < l; i++) {
          for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
            // Always skip document fragments
            if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : // Don't pass non-elements to Sizzle
            cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
              matched.push(cur);
              break;
            }
          }
        }
      }

      return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
    },
    // Determine the position of an element within the set
    index: function index(elem) {
      // No argument, return index in parent
      if (!elem) {
        return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      } // Index in selector


      if (typeof elem === "string") {
        return indexOf.call(jQuery(elem), this[0]);
      } // Locate the position of the desired element


      return indexOf.call(this, // If it receives a jQuery object, the first element is used
      elem.jquery ? elem[0] : elem);
    },
    add: function add(selector, context) {
      return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
    },
    addBack: function addBack(selector) {
      return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
    }
  });

  function sibling(cur, dir) {
    while ((cur = cur[dir]) && cur.nodeType !== 1) {}

    return cur;
  }

  jQuery.each({
    parent: function parent(elem) {
      var parent = elem.parentNode;
      return parent && parent.nodeType !== 11 ? parent : null;
    },
    parents: function parents(elem) {
      return dir(elem, "parentNode");
    },
    parentsUntil: function parentsUntil(elem, _i, until) {
      return dir(elem, "parentNode", until);
    },
    next: function next(elem) {
      return sibling(elem, "nextSibling");
    },
    prev: function prev(elem) {
      return sibling(elem, "previousSibling");
    },
    nextAll: function nextAll(elem) {
      return dir(elem, "nextSibling");
    },
    prevAll: function prevAll(elem) {
      return dir(elem, "previousSibling");
    },
    nextUntil: function nextUntil(elem, _i, until) {
      return dir(elem, "nextSibling", until);
    },
    prevUntil: function prevUntil(elem, _i, until) {
      return dir(elem, "previousSibling", until);
    },
    siblings: function siblings(elem) {
      return _siblings((elem.parentNode || {}).firstChild, elem);
    },
    children: function children(elem) {
      return _siblings(elem.firstChild);
    },
    contents: function contents(elem) {
      if (elem.contentDocument != null && // Support: IE 11+
      // <object> elements with no `data` attribute has an object
      // `contentDocument` with a `null` prototype.
      getProto(elem.contentDocument)) {
        return elem.contentDocument;
      } // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
      // Treat the template element as a regular one in browsers that
      // don't support it.


      if (nodeName(elem, "template")) {
        elem = elem.content || elem;
      }

      return jQuery.merge([], elem.childNodes);
    }
  }, function (name, fn) {
    jQuery.fn[name] = function (until, selector) {
      var matched = jQuery.map(this, fn, until);

      if (name.slice(-5) !== "Until") {
        selector = until;
      }

      if (selector && typeof selector === "string") {
        matched = jQuery.filter(selector, matched);
      }

      if (this.length > 1) {
        // Remove duplicates
        if (!guaranteedUnique[name]) {
          jQuery.uniqueSort(matched);
        } // Reverse order for parents* and prev-derivatives


        if (rparentsprev.test(name)) {
          matched.reverse();
        }
      }

      return this.pushStack(matched);
    };
  });
  return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/traversing/findFilter.js":
/*!**********************************************************!*\
  !*** ./node_modules/jquery/src/traversing/findFilter.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../var/indexOf */ "./node_modules/jquery/src/var/indexOf.js"), __webpack_require__(/*! ../var/isFunction */ "./node_modules/jquery/src/var/isFunction.js"), __webpack_require__(/*! ./var/rneedsContext */ "./node_modules/jquery/src/traversing/var/rneedsContext.js"), __webpack_require__(/*! ../selector */ "./node_modules/jquery/src/selector.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, indexOf, isFunction, rneedsContext) {
  "use strict"; // Implement the identical functionality for filter and not

  function winnow(elements, qualifier, not) {
    if (isFunction(qualifier)) {
      return jQuery.grep(elements, function (elem, i) {
        return !!qualifier.call(elem, i, elem) !== not;
      });
    } // Single element


    if (qualifier.nodeType) {
      return jQuery.grep(elements, function (elem) {
        return elem === qualifier !== not;
      });
    } // Arraylike of elements (jQuery, arguments, Array)


    if (typeof qualifier !== "string") {
      return jQuery.grep(elements, function (elem) {
        return indexOf.call(qualifier, elem) > -1 !== not;
      });
    } // Filtered directly for both simple and complex selectors


    return jQuery.filter(qualifier, elements, not);
  }

  jQuery.filter = function (expr, elems, not) {
    var elem = elems[0];

    if (not) {
      expr = ":not(" + expr + ")";
    }

    if (elems.length === 1 && elem.nodeType === 1) {
      return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
    }

    return jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
      return elem.nodeType === 1;
    }));
  };

  jQuery.fn.extend({
    find: function find(selector) {
      var i,
          ret,
          len = this.length,
          self = this;

      if (typeof selector !== "string") {
        return this.pushStack(jQuery(selector).filter(function () {
          for (i = 0; i < len; i++) {
            if (jQuery.contains(self[i], this)) {
              return true;
            }
          }
        }));
      }

      ret = this.pushStack([]);

      for (i = 0; i < len; i++) {
        jQuery.find(selector, self[i], ret);
      }

      return len > 1 ? jQuery.uniqueSort(ret) : ret;
    },
    filter: function filter(selector) {
      return this.pushStack(winnow(this, selector || [], false));
    },
    not: function not(selector) {
      return this.pushStack(winnow(this, selector || [], true));
    },
    is: function is(selector) {
      return !!winnow(this, // If this is a positional/relative selector, check membership in the returned set
      // so $("p:first").is("p:last") won't return true for a doc with two "p".
      typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
    }
  });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/traversing/var/dir.js":
/*!*******************************************************!*\
  !*** ./node_modules/jquery/src/traversing/var/dir.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../../core */ "./node_modules/jquery/src/core.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery) {
  "use strict";

  return function (elem, dir, until) {
    var matched = [],
        truncate = until !== undefined;

    while ((elem = elem[dir]) && elem.nodeType !== 9) {
      if (elem.nodeType === 1) {
        if (truncate && jQuery(elem).is(until)) {
          break;
        }

        matched.push(elem);
      }
    }

    return matched;
  };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/traversing/var/rneedsContext.js":
/*!*****************************************************************!*\
  !*** ./node_modules/jquery/src/traversing/var/rneedsContext.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../../core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ../../selector */ "./node_modules/jquery/src/selector.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery) {
  "use strict";

  return jQuery.expr.match.needsContext;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/traversing/var/siblings.js":
/*!************************************************************!*\
  !*** ./node_modules/jquery/src/traversing/var/siblings.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict";

  return function (n, elem) {
    var matched = [];

    for (; n; n = n.nextSibling) {
      if (n.nodeType === 1 && n !== elem) {
        matched.push(n);
      }
    }

    return matched;
  };
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/var/ObjectFunctionString.js":
/*!*************************************************************!*\
  !*** ./node_modules/jquery/src/var/ObjectFunctionString.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./fnToString */ "./node_modules/jquery/src/var/fnToString.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (fnToString) {
  "use strict";

  return fnToString.call(Object);
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/var/arr.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/src/var/arr.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict";

  return [];
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/var/class2type.js":
/*!***************************************************!*\
  !*** ./node_modules/jquery/src/var/class2type.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict"; // [[Class]] -> type pairs

  return {};
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/var/document.js":
/*!*************************************************!*\
  !*** ./node_modules/jquery/src/var/document.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict";

  return window.document;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/var/documentElement.js":
/*!********************************************************!*\
  !*** ./node_modules/jquery/src/var/documentElement.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./document */ "./node_modules/jquery/src/var/document.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (document) {
  "use strict";

  return document.documentElement;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/var/flat.js":
/*!*********************************************!*\
  !*** ./node_modules/jquery/src/var/flat.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./arr */ "./node_modules/jquery/src/var/arr.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (arr) {
  "use strict"; // Support: IE 9 - 11+, Edge 18+, Android Browser 4.0 - 4.3 only, iOS 7 - 11 only, Safari 11 only,
  // Firefox <= 61 only
  // Provide fallback for browsers without Array#flat.

  return arr.flat ? function (array) {
    return arr.flat.call(array);
  } : function (array) {
    return arr.concat.apply([], array);
  };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/var/fnToString.js":
/*!***************************************************!*\
  !*** ./node_modules/jquery/src/var/fnToString.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./hasOwn */ "./node_modules/jquery/src/var/hasOwn.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (hasOwn) {
  "use strict";

  return hasOwn.toString;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/var/getProto.js":
/*!*************************************************!*\
  !*** ./node_modules/jquery/src/var/getProto.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict";

  return Object.getPrototypeOf;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/var/hasOwn.js":
/*!***********************************************!*\
  !*** ./node_modules/jquery/src/var/hasOwn.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./class2type */ "./node_modules/jquery/src/var/class2type.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (class2type) {
  "use strict";

  return class2type.hasOwnProperty;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/var/indexOf.js":
/*!************************************************!*\
  !*** ./node_modules/jquery/src/var/indexOf.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./arr */ "./node_modules/jquery/src/var/arr.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (arr) {
  "use strict";

  return arr.indexOf;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/var/isFunction.js":
/*!***************************************************!*\
  !*** ./node_modules/jquery/src/var/isFunction.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict";

  return function isFunction(obj) {
    // Support: Chrome <=57, Firefox <=52
    // In some browsers, typeof returns "function" for HTML <object> elements
    // (i.e., `typeof document.createElement( "object" ) === "function"`).
    // We don't want to classify *any* DOM node as a function.
    // Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
    // Plus for old WebKit, typeof returns "function" for HTML collections
    // (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
    return typeof obj === "function" && typeof obj.nodeType !== "number" && typeof obj.item !== "function";
  };
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/var/isWindow.js":
/*!*************************************************!*\
  !*** ./node_modules/jquery/src/var/isWindow.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict";

  return function isWindow(obj) {
    return obj != null && obj === obj.window;
  };
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/var/pnum.js":
/*!*********************************************!*\
  !*** ./node_modules/jquery/src/var/pnum.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict";

  return /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/var/push.js":
/*!*********************************************!*\
  !*** ./node_modules/jquery/src/var/push.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./arr */ "./node_modules/jquery/src/var/arr.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (arr) {
  "use strict";

  return arr.push;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/var/rcheckableType.js":
/*!*******************************************************!*\
  !*** ./node_modules/jquery/src/var/rcheckableType.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict";

  return /^(?:checkbox|radio)$/i;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/var/rcssNum.js":
/*!************************************************!*\
  !*** ./node_modules/jquery/src/var/rcssNum.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../var/pnum */ "./node_modules/jquery/src/var/pnum.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (pnum) {
  "use strict";

  return new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/var/rnothtmlwhite.js":
/*!******************************************************!*\
  !*** ./node_modules/jquery/src/var/rnothtmlwhite.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict"; // Only count HTML whitespace
  // Other whitespace should count in values
  // https://infra.spec.whatwg.org/#ascii-whitespace

  return /[^\x20\t\r\n\f]+/g;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/var/slice.js":
/*!**********************************************!*\
  !*** ./node_modules/jquery/src/var/slice.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./arr */ "./node_modules/jquery/src/var/arr.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (arr) {
  "use strict";

  return arr.slice;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/var/support.js":
/*!************************************************!*\
  !*** ./node_modules/jquery/src/var/support.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict"; // All support tests are defined in their respective modules.

  return {};
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/var/toString.js":
/*!*************************************************!*\
  !*** ./node_modules/jquery/src/var/toString.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./class2type */ "./node_modules/jquery/src/var/class2type.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (class2type) {
  "use strict";

  return class2type.toString;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jquery/src/wrap.js":
/*!*****************************************!*\
  !*** ./node_modules/jquery/src/wrap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ "./node_modules/jquery/src/core.js"), __webpack_require__(/*! ./var/isFunction */ "./node_modules/jquery/src/var/isFunction.js"), __webpack_require__(/*! ./core/init */ "./node_modules/jquery/src/core/init.js"), __webpack_require__(/*! ./manipulation */ "./node_modules/jquery/src/manipulation.js"), // clone
__webpack_require__(/*! ./traversing */ "./node_modules/jquery/src/traversing.js") // parent, contents
], __WEBPACK_AMD_DEFINE_RESULT__ = (function (jQuery, isFunction) {
  "use strict";

  jQuery.fn.extend({
    wrapAll: function wrapAll(html) {
      var wrap;

      if (this[0]) {
        if (isFunction(html)) {
          html = html.call(this[0]);
        } // The elements to wrap the target around


        wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

        if (this[0].parentNode) {
          wrap.insertBefore(this[0]);
        }

        wrap.map(function () {
          var elem = this;

          while (elem.firstElementChild) {
            elem = elem.firstElementChild;
          }

          return elem;
        }).append(this);
      }

      return this;
    },
    wrapInner: function wrapInner(html) {
      if (isFunction(html)) {
        return this.each(function (i) {
          jQuery(this).wrapInner(html.call(this, i));
        });
      }

      return this.each(function () {
        var self = jQuery(this),
            contents = self.contents();

        if (contents.length) {
          contents.wrapAll(html);
        } else {
          self.append(html);
        }
      });
    },
    wrap: function wrap(html) {
      var htmlIsFunction = isFunction(html);
      return this.each(function (i) {
        jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
      });
    },
    unwrap: function unwrap(selector) {
      this.parent(selector).not("body").each(function () {
        jQuery(this).replaceWith(this.childNodes);
      });
      return this;
    }
  });
  return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/turbolinks/dist/turbolinks.js":
/*!****************************************************!*\
  !*** ./node_modules/turbolinks/dist/turbolinks.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
Turbolinks 5.2.0
Copyright © 2018 Basecamp, LLC
 */
(function () {
  var t = this;
  (function () {
    (function () {
      this.Turbolinks = {
        supported: function () {
          return null != window.history.pushState && null != window.requestAnimationFrame && null != window.addEventListener;
        }(),
        visit: function visit(t, r) {
          return e.controller.visit(t, r);
        },
        clearCache: function clearCache() {
          return e.controller.clearCache();
        },
        setProgressBarDelay: function setProgressBarDelay(t) {
          return e.controller.setProgressBarDelay(t);
        }
      };
    }).call(this);
  }).call(t);
  var e = t.Turbolinks;
  (function () {
    (function () {
      var t,
          r,
          n,
          o = [].slice;
      e.copyObject = function (t) {
        var e, r, n;
        r = {};

        for (e in t) {
          n = t[e], r[e] = n;
        }

        return r;
      }, e.closest = function (e, r) {
        return t.call(e, r);
      }, t = function () {
        var t, e;
        return t = document.documentElement, null != (e = t.closest) ? e : function (t) {
          var e;

          for (e = this; e;) {
            if (e.nodeType === Node.ELEMENT_NODE && r.call(e, t)) return e;
            e = e.parentNode;
          }
        };
      }(), e.defer = function (t) {
        return setTimeout(t, 1);
      }, e.throttle = function (t) {
        var e;
        return e = null, function () {
          var r;
          return r = 1 <= arguments.length ? o.call(arguments, 0) : [], null != e ? e : e = requestAnimationFrame(function (n) {
            return function () {
              return e = null, t.apply(n, r);
            };
          }(this));
        };
      }, e.dispatch = function (t, e) {
        var r, o, i, s, a, u;
        return a = null != e ? e : {}, u = a.target, r = a.cancelable, o = a.data, i = document.createEvent("Events"), i.initEvent(t, !0, r === !0), i.data = null != o ? o : {}, i.cancelable && !n && (s = i.preventDefault, i.preventDefault = function () {
          return this.defaultPrevented || Object.defineProperty(this, "defaultPrevented", {
            get: function get() {
              return !0;
            }
          }), s.call(this);
        }), (null != u ? u : document).dispatchEvent(i), i;
      }, n = function () {
        var t;
        return t = document.createEvent("Events"), t.initEvent("test", !0, !0), t.preventDefault(), t.defaultPrevented;
      }(), e.match = function (t, e) {
        return r.call(t, e);
      }, r = function () {
        var t, e, r, n;
        return t = document.documentElement, null != (e = null != (r = null != (n = t.matchesSelector) ? n : t.webkitMatchesSelector) ? r : t.msMatchesSelector) ? e : t.mozMatchesSelector;
      }(), e.uuid = function () {
        var t, e, r;

        for (r = "", t = e = 1; 36 >= e; t = ++e) {
          r += 9 === t || 14 === t || 19 === t || 24 === t ? "-" : 15 === t ? "4" : 20 === t ? (Math.floor(4 * Math.random()) + 8).toString(16) : Math.floor(15 * Math.random()).toString(16);
        }

        return r;
      };
    }).call(this), function () {
      e.Location = function () {
        function t(t) {
          var e, r;
          null == t && (t = ""), r = document.createElement("a"), r.href = t.toString(), this.absoluteURL = r.href, e = r.hash.length, 2 > e ? this.requestURL = this.absoluteURL : (this.requestURL = this.absoluteURL.slice(0, -e), this.anchor = r.hash.slice(1));
        }

        var e, r, n, o;
        return t.wrap = function (t) {
          return t instanceof this ? t : new this(t);
        }, t.prototype.getOrigin = function () {
          return this.absoluteURL.split("/", 3).join("/");
        }, t.prototype.getPath = function () {
          var t, e;
          return null != (t = null != (e = this.requestURL.match(/\/\/[^\/]*(\/[^?;]*)/)) ? e[1] : void 0) ? t : "/";
        }, t.prototype.getPathComponents = function () {
          return this.getPath().split("/").slice(1);
        }, t.prototype.getLastPathComponent = function () {
          return this.getPathComponents().slice(-1)[0];
        }, t.prototype.getExtension = function () {
          var t, e;
          return null != (t = null != (e = this.getLastPathComponent().match(/\.[^.]*$/)) ? e[0] : void 0) ? t : "";
        }, t.prototype.isHTML = function () {
          return this.getExtension().match(/^(?:|\.(?:htm|html|xhtml))$/);
        }, t.prototype.isPrefixedBy = function (t) {
          var e;
          return e = r(t), this.isEqualTo(t) || o(this.absoluteURL, e);
        }, t.prototype.isEqualTo = function (t) {
          return this.absoluteURL === (null != t ? t.absoluteURL : void 0);
        }, t.prototype.toCacheKey = function () {
          return this.requestURL;
        }, t.prototype.toJSON = function () {
          return this.absoluteURL;
        }, t.prototype.toString = function () {
          return this.absoluteURL;
        }, t.prototype.valueOf = function () {
          return this.absoluteURL;
        }, r = function r(t) {
          return e(t.getOrigin() + t.getPath());
        }, e = function e(t) {
          return n(t, "/") ? t : t + "/";
        }, o = function o(t, e) {
          return t.slice(0, e.length) === e;
        }, n = function n(t, e) {
          return t.slice(-e.length) === e;
        }, t;
      }();
    }.call(this), function () {
      var t = function t(_t, e) {
        return function () {
          return _t.apply(e, arguments);
        };
      };

      e.HttpRequest = function () {
        function r(r, n, o) {
          this.delegate = r, this.requestCanceled = t(this.requestCanceled, this), this.requestTimedOut = t(this.requestTimedOut, this), this.requestFailed = t(this.requestFailed, this), this.requestLoaded = t(this.requestLoaded, this), this.requestProgressed = t(this.requestProgressed, this), this.url = e.Location.wrap(n).requestURL, this.referrer = e.Location.wrap(o).absoluteURL, this.createXHR();
        }

        return r.NETWORK_FAILURE = 0, r.TIMEOUT_FAILURE = -1, r.timeout = 60, r.prototype.send = function () {
          var t;
          return this.xhr && !this.sent ? (this.notifyApplicationBeforeRequestStart(), this.setProgress(0), this.xhr.send(), this.sent = !0, "function" == typeof (t = this.delegate).requestStarted ? t.requestStarted() : void 0) : void 0;
        }, r.prototype.cancel = function () {
          return this.xhr && this.sent ? this.xhr.abort() : void 0;
        }, r.prototype.requestProgressed = function (t) {
          return t.lengthComputable ? this.setProgress(t.loaded / t.total) : void 0;
        }, r.prototype.requestLoaded = function () {
          return this.endRequest(function (t) {
            return function () {
              var e;
              return 200 <= (e = t.xhr.status) && 300 > e ? t.delegate.requestCompletedWithResponse(t.xhr.responseText, t.xhr.getResponseHeader("Turbolinks-Location")) : (t.failed = !0, t.delegate.requestFailedWithStatusCode(t.xhr.status, t.xhr.responseText));
            };
          }(this));
        }, r.prototype.requestFailed = function () {
          return this.endRequest(function (t) {
            return function () {
              return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.NETWORK_FAILURE);
            };
          }(this));
        }, r.prototype.requestTimedOut = function () {
          return this.endRequest(function (t) {
            return function () {
              return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.TIMEOUT_FAILURE);
            };
          }(this));
        }, r.prototype.requestCanceled = function () {
          return this.endRequest();
        }, r.prototype.notifyApplicationBeforeRequestStart = function () {
          return e.dispatch("turbolinks:request-start", {
            data: {
              url: this.url,
              xhr: this.xhr
            }
          });
        }, r.prototype.notifyApplicationAfterRequestEnd = function () {
          return e.dispatch("turbolinks:request-end", {
            data: {
              url: this.url,
              xhr: this.xhr
            }
          });
        }, r.prototype.createXHR = function () {
          return this.xhr = new XMLHttpRequest(), this.xhr.open("GET", this.url, !0), this.xhr.timeout = 1e3 * this.constructor.timeout, this.xhr.setRequestHeader("Accept", "text/html, application/xhtml+xml"), this.xhr.setRequestHeader("Turbolinks-Referrer", this.referrer), this.xhr.onprogress = this.requestProgressed, this.xhr.onload = this.requestLoaded, this.xhr.onerror = this.requestFailed, this.xhr.ontimeout = this.requestTimedOut, this.xhr.onabort = this.requestCanceled;
        }, r.prototype.endRequest = function (t) {
          return this.xhr ? (this.notifyApplicationAfterRequestEnd(), null != t && t.call(this), this.destroy()) : void 0;
        }, r.prototype.setProgress = function (t) {
          var e;
          return this.progress = t, "function" == typeof (e = this.delegate).requestProgressed ? e.requestProgressed(this.progress) : void 0;
        }, r.prototype.destroy = function () {
          var t;
          return this.setProgress(1), "function" == typeof (t = this.delegate).requestFinished && t.requestFinished(), this.delegate = null, this.xhr = null;
        }, r;
      }();
    }.call(this), function () {
      var t = function t(_t2, e) {
        return function () {
          return _t2.apply(e, arguments);
        };
      };

      e.ProgressBar = function () {
        function e() {
          this.trickle = t(this.trickle, this), this.stylesheetElement = this.createStylesheetElement(), this.progressElement = this.createProgressElement();
        }

        var r;
        return r = 300, e.defaultCSS = ".turbolinks-progress-bar {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background: #0076ff;\n  z-index: 9999;\n  transition: width " + r + "ms ease-out, opacity " + r / 2 + "ms " + r / 2 + "ms ease-in;\n  transform: translate3d(0, 0, 0);\n}", e.prototype.show = function () {
          return this.visible ? void 0 : (this.visible = !0, this.installStylesheetElement(), this.installProgressElement(), this.startTrickling());
        }, e.prototype.hide = function () {
          return this.visible && !this.hiding ? (this.hiding = !0, this.fadeProgressElement(function (t) {
            return function () {
              return t.uninstallProgressElement(), t.stopTrickling(), t.visible = !1, t.hiding = !1;
            };
          }(this))) : void 0;
        }, e.prototype.setValue = function (t) {
          return this.value = t, this.refresh();
        }, e.prototype.installStylesheetElement = function () {
          return document.head.insertBefore(this.stylesheetElement, document.head.firstChild);
        }, e.prototype.installProgressElement = function () {
          return this.progressElement.style.width = 0, this.progressElement.style.opacity = 1, document.documentElement.insertBefore(this.progressElement, document.body), this.refresh();
        }, e.prototype.fadeProgressElement = function (t) {
          return this.progressElement.style.opacity = 0, setTimeout(t, 1.5 * r);
        }, e.prototype.uninstallProgressElement = function () {
          return this.progressElement.parentNode ? document.documentElement.removeChild(this.progressElement) : void 0;
        }, e.prototype.startTrickling = function () {
          return null != this.trickleInterval ? this.trickleInterval : this.trickleInterval = setInterval(this.trickle, r);
        }, e.prototype.stopTrickling = function () {
          return clearInterval(this.trickleInterval), this.trickleInterval = null;
        }, e.prototype.trickle = function () {
          return this.setValue(this.value + Math.random() / 100);
        }, e.prototype.refresh = function () {
          return requestAnimationFrame(function (t) {
            return function () {
              return t.progressElement.style.width = 10 + 90 * t.value + "%";
            };
          }(this));
        }, e.prototype.createStylesheetElement = function () {
          var t;
          return t = document.createElement("style"), t.type = "text/css", t.textContent = this.constructor.defaultCSS, t;
        }, e.prototype.createProgressElement = function () {
          var t;
          return t = document.createElement("div"), t.className = "turbolinks-progress-bar", t;
        }, e;
      }();
    }.call(this), function () {
      var t = function t(_t3, e) {
        return function () {
          return _t3.apply(e, arguments);
        };
      };

      e.BrowserAdapter = function () {
        function r(r) {
          this.controller = r, this.showProgressBar = t(this.showProgressBar, this), this.progressBar = new e.ProgressBar();
        }

        var n, o, i;
        return i = e.HttpRequest, n = i.NETWORK_FAILURE, o = i.TIMEOUT_FAILURE, r.prototype.visitProposedToLocationWithAction = function (t, e) {
          return this.controller.startVisitToLocationWithAction(t, e);
        }, r.prototype.visitStarted = function (t) {
          return t.issueRequest(), t.changeHistory(), t.loadCachedSnapshot();
        }, r.prototype.visitRequestStarted = function (t) {
          return this.progressBar.setValue(0), t.hasCachedSnapshot() || "restore" !== t.action ? this.showProgressBarAfterDelay() : this.showProgressBar();
        }, r.prototype.visitRequestProgressed = function (t) {
          return this.progressBar.setValue(t.progress);
        }, r.prototype.visitRequestCompleted = function (t) {
          return t.loadResponse();
        }, r.prototype.visitRequestFailedWithStatusCode = function (t, e) {
          switch (e) {
            case n:
            case o:
              return this.reload();

            default:
              return t.loadResponse();
          }
        }, r.prototype.visitRequestFinished = function (t) {
          return this.hideProgressBar();
        }, r.prototype.visitCompleted = function (t) {
          return t.followRedirect();
        }, r.prototype.pageInvalidated = function () {
          return this.reload();
        }, r.prototype.showProgressBarAfterDelay = function () {
          return this.progressBarTimeout = setTimeout(this.showProgressBar, this.controller.progressBarDelay);
        }, r.prototype.showProgressBar = function () {
          return this.progressBar.show();
        }, r.prototype.hideProgressBar = function () {
          return this.progressBar.hide(), clearTimeout(this.progressBarTimeout);
        }, r.prototype.reload = function () {
          return window.location.reload();
        }, r;
      }();
    }.call(this), function () {
      var t = function t(_t4, e) {
        return function () {
          return _t4.apply(e, arguments);
        };
      };

      e.History = function () {
        function r(e) {
          this.delegate = e, this.onPageLoad = t(this.onPageLoad, this), this.onPopState = t(this.onPopState, this);
        }

        return r.prototype.start = function () {
          return this.started ? void 0 : (addEventListener("popstate", this.onPopState, !1), addEventListener("load", this.onPageLoad, !1), this.started = !0);
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("popstate", this.onPopState, !1), removeEventListener("load", this.onPageLoad, !1), this.started = !1) : void 0;
        }, r.prototype.push = function (t, r) {
          return t = e.Location.wrap(t), this.update("push", t, r);
        }, r.prototype.replace = function (t, r) {
          return t = e.Location.wrap(t), this.update("replace", t, r);
        }, r.prototype.onPopState = function (t) {
          var r, n, o, i;
          return this.shouldHandlePopState() && (i = null != (n = t.state) ? n.turbolinks : void 0) ? (r = e.Location.wrap(window.location), o = i.restorationIdentifier, this.delegate.historyPoppedToLocationWithRestorationIdentifier(r, o)) : void 0;
        }, r.prototype.onPageLoad = function (t) {
          return e.defer(function (t) {
            return function () {
              return t.pageLoaded = !0;
            };
          }(this));
        }, r.prototype.shouldHandlePopState = function () {
          return this.pageIsLoaded();
        }, r.prototype.pageIsLoaded = function () {
          return this.pageLoaded || "complete" === document.readyState;
        }, r.prototype.update = function (t, e, r) {
          var n;
          return n = {
            turbolinks: {
              restorationIdentifier: r
            }
          }, history[t + "State"](n, null, e);
        }, r;
      }();
    }.call(this), function () {
      e.HeadDetails = function () {
        function t(t) {
          var e, r, n, s, a, u;

          for (this.elements = {}, n = 0, a = t.length; a > n; n++) {
            u = t[n], u.nodeType === Node.ELEMENT_NODE && (s = u.outerHTML, r = null != (e = this.elements)[s] ? e[s] : e[s] = {
              type: i(u),
              tracked: o(u),
              elements: []
            }, r.elements.push(u));
          }
        }

        var e, r, n, o, i;
        return t.fromHeadElement = function (t) {
          var e;
          return new this(null != (e = null != t ? t.childNodes : void 0) ? e : []);
        }, t.prototype.hasElementWithKey = function (t) {
          return t in this.elements;
        }, t.prototype.getTrackedElementSignature = function () {
          var t, e;
          return function () {
            var r, n;
            r = this.elements, n = [];

            for (t in r) {
              e = r[t].tracked, e && n.push(t);
            }

            return n;
          }.call(this).join("");
        }, t.prototype.getScriptElementsNotInDetails = function (t) {
          return this.getElementsMatchingTypeNotInDetails("script", t);
        }, t.prototype.getStylesheetElementsNotInDetails = function (t) {
          return this.getElementsMatchingTypeNotInDetails("stylesheet", t);
        }, t.prototype.getElementsMatchingTypeNotInDetails = function (t, e) {
          var r, n, o, i, s, a;
          o = this.elements, s = [];

          for (n in o) {
            i = o[n], a = i.type, r = i.elements, a !== t || e.hasElementWithKey(n) || s.push(r[0]);
          }

          return s;
        }, t.prototype.getProvisionalElements = function () {
          var t, e, r, n, o, i, s;
          r = [], n = this.elements;

          for (e in n) {
            o = n[e], s = o.type, i = o.tracked, t = o.elements, null != s || i ? t.length > 1 && r.push.apply(r, t.slice(1)) : r.push.apply(r, t);
          }

          return r;
        }, t.prototype.getMetaValue = function (t) {
          var e;
          return null != (e = this.findMetaElementByName(t)) ? e.getAttribute("content") : void 0;
        }, t.prototype.findMetaElementByName = function (t) {
          var r, n, o, i;
          r = void 0, i = this.elements;

          for (o in i) {
            n = i[o].elements, e(n[0], t) && (r = n[0]);
          }

          return r;
        }, i = function i(t) {
          return r(t) ? "script" : n(t) ? "stylesheet" : void 0;
        }, o = function o(t) {
          return "reload" === t.getAttribute("data-turbolinks-track");
        }, r = function r(t) {
          var e;
          return e = t.tagName.toLowerCase(), "script" === e;
        }, n = function n(t) {
          var e;
          return e = t.tagName.toLowerCase(), "style" === e || "link" === e && "stylesheet" === t.getAttribute("rel");
        }, e = function e(t, _e) {
          var r;
          return r = t.tagName.toLowerCase(), "meta" === r && t.getAttribute("name") === _e;
        }, t;
      }();
    }.call(this), function () {
      e.Snapshot = function () {
        function t(t, e) {
          this.headDetails = t, this.bodyElement = e;
        }

        return t.wrap = function (t) {
          return t instanceof this ? t : "string" == typeof t ? this.fromHTMLString(t) : this.fromHTMLElement(t);
        }, t.fromHTMLString = function (t) {
          var e;
          return e = document.createElement("html"), e.innerHTML = t, this.fromHTMLElement(e);
        }, t.fromHTMLElement = function (t) {
          var r, n, o, i;
          return o = t.querySelector("head"), r = null != (i = t.querySelector("body")) ? i : document.createElement("body"), n = e.HeadDetails.fromHeadElement(o), new this(n, r);
        }, t.prototype.clone = function () {
          return new this.constructor(this.headDetails, this.bodyElement.cloneNode(!0));
        }, t.prototype.getRootLocation = function () {
          var t, r;
          return r = null != (t = this.getSetting("root")) ? t : "/", new e.Location(r);
        }, t.prototype.getCacheControlValue = function () {
          return this.getSetting("cache-control");
        }, t.prototype.getElementForAnchor = function (t) {
          try {
            return this.bodyElement.querySelector("[id='" + t + "'], a[name='" + t + "']");
          } catch (e) {}
        }, t.prototype.getPermanentElements = function () {
          return this.bodyElement.querySelectorAll("[id][data-turbolinks-permanent]");
        }, t.prototype.getPermanentElementById = function (t) {
          return this.bodyElement.querySelector("#" + t + "[data-turbolinks-permanent]");
        }, t.prototype.getPermanentElementsPresentInSnapshot = function (t) {
          var e, r, n, o, i;

          for (o = this.getPermanentElements(), i = [], r = 0, n = o.length; n > r; r++) {
            e = o[r], t.getPermanentElementById(e.id) && i.push(e);
          }

          return i;
        }, t.prototype.findFirstAutofocusableElement = function () {
          return this.bodyElement.querySelector("[autofocus]");
        }, t.prototype.hasAnchor = function (t) {
          return null != this.getElementForAnchor(t);
        }, t.prototype.isPreviewable = function () {
          return "no-preview" !== this.getCacheControlValue();
        }, t.prototype.isCacheable = function () {
          return "no-cache" !== this.getCacheControlValue();
        }, t.prototype.isVisitable = function () {
          return "reload" !== this.getSetting("visit-control");
        }, t.prototype.getSetting = function (t) {
          return this.headDetails.getMetaValue("turbolinks-" + t);
        }, t;
      }();
    }.call(this), function () {
      var t = [].slice;

      e.Renderer = function () {
        function e() {}

        var r;
        return e.render = function () {
          var e, r, n, o;
          return n = arguments[0], r = arguments[1], e = 3 <= arguments.length ? t.call(arguments, 2) : [], o = function (t, e, r) {
            r.prototype = t.prototype;
            var n = new r(),
                o = t.apply(n, e);
            return Object(o) === o ? o : n;
          }(this, e, function () {}), o.delegate = n, o.render(r), o;
        }, e.prototype.renderView = function (t) {
          return this.delegate.viewWillRender(this.newBody), t(), this.delegate.viewRendered(this.newBody);
        }, e.prototype.invalidateView = function () {
          return this.delegate.viewInvalidated();
        }, e.prototype.createScriptElement = function (t) {
          var e;
          return "false" === t.getAttribute("data-turbolinks-eval") ? t : (e = document.createElement("script"), e.textContent = t.textContent, e.async = !1, r(e, t), e);
        }, r = function r(t, e) {
          var r, n, o, i, s, a, u;

          for (i = e.attributes, a = [], r = 0, n = i.length; n > r; r++) {
            s = i[r], o = s.name, u = s.value, a.push(t.setAttribute(o, u));
          }

          return a;
        }, e;
      }();
    }.call(this), function () {
      var t,
          r,
          n = function n(t, e) {
        function r() {
          this.constructor = t;
        }

        for (var n in e) {
          o.call(e, n) && (t[n] = e[n]);
        }

        return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, t;
      },
          o = {}.hasOwnProperty;

      e.SnapshotRenderer = function (e) {
        function o(t, e, r) {
          this.currentSnapshot = t, this.newSnapshot = e, this.isPreview = r, this.currentHeadDetails = this.currentSnapshot.headDetails, this.newHeadDetails = this.newSnapshot.headDetails, this.currentBody = this.currentSnapshot.bodyElement, this.newBody = this.newSnapshot.bodyElement;
        }

        return n(o, e), o.prototype.render = function (t) {
          return this.shouldRender() ? (this.mergeHead(), this.renderView(function (e) {
            return function () {
              return e.replaceBody(), e.isPreview || e.focusFirstAutofocusableElement(), t();
            };
          }(this))) : this.invalidateView();
        }, o.prototype.mergeHead = function () {
          return this.copyNewHeadStylesheetElements(), this.copyNewHeadScriptElements(), this.removeCurrentHeadProvisionalElements(), this.copyNewHeadProvisionalElements();
        }, o.prototype.replaceBody = function () {
          var t;
          return t = this.relocateCurrentBodyPermanentElements(), this.activateNewBodyScriptElements(), this.assignNewBody(), this.replacePlaceholderElementsWithClonedPermanentElements(t);
        }, o.prototype.shouldRender = function () {
          return this.newSnapshot.isVisitable() && this.trackedElementsAreIdentical();
        }, o.prototype.trackedElementsAreIdentical = function () {
          return this.currentHeadDetails.getTrackedElementSignature() === this.newHeadDetails.getTrackedElementSignature();
        }, o.prototype.copyNewHeadStylesheetElements = function () {
          var t, e, r, n, o;

          for (n = this.getNewHeadStylesheetElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.appendChild(t));
          }

          return o;
        }, o.prototype.copyNewHeadScriptElements = function () {
          var t, e, r, n, o;

          for (n = this.getNewHeadScriptElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.appendChild(this.createScriptElement(t)));
          }

          return o;
        }, o.prototype.removeCurrentHeadProvisionalElements = function () {
          var t, e, r, n, o;

          for (n = this.getCurrentHeadProvisionalElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.removeChild(t));
          }

          return o;
        }, o.prototype.copyNewHeadProvisionalElements = function () {
          var t, e, r, n, o;

          for (n = this.getNewHeadProvisionalElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.appendChild(t));
          }

          return o;
        }, o.prototype.relocateCurrentBodyPermanentElements = function () {
          var e, n, o, i, s, a, u;

          for (a = this.getCurrentBodyPermanentElements(), u = [], e = 0, n = a.length; n > e; e++) {
            i = a[e], s = t(i), o = this.newSnapshot.getPermanentElementById(i.id), r(i, s.element), r(o, i), u.push(s);
          }

          return u;
        }, o.prototype.replacePlaceholderElementsWithClonedPermanentElements = function (t) {
          var e, n, o, i, s, a, u;

          for (u = [], o = 0, i = t.length; i > o; o++) {
            a = t[o], n = a.element, s = a.permanentElement, e = s.cloneNode(!0), u.push(r(n, e));
          }

          return u;
        }, o.prototype.activateNewBodyScriptElements = function () {
          var t, e, n, o, i, s;

          for (i = this.getNewBodyScriptElements(), s = [], e = 0, o = i.length; o > e; e++) {
            n = i[e], t = this.createScriptElement(n), s.push(r(n, t));
          }

          return s;
        }, o.prototype.assignNewBody = function () {
          return document.body = this.newBody;
        }, o.prototype.focusFirstAutofocusableElement = function () {
          var t;
          return null != (t = this.newSnapshot.findFirstAutofocusableElement()) ? t.focus() : void 0;
        }, o.prototype.getNewHeadStylesheetElements = function () {
          return this.newHeadDetails.getStylesheetElementsNotInDetails(this.currentHeadDetails);
        }, o.prototype.getNewHeadScriptElements = function () {
          return this.newHeadDetails.getScriptElementsNotInDetails(this.currentHeadDetails);
        }, o.prototype.getCurrentHeadProvisionalElements = function () {
          return this.currentHeadDetails.getProvisionalElements();
        }, o.prototype.getNewHeadProvisionalElements = function () {
          return this.newHeadDetails.getProvisionalElements();
        }, o.prototype.getCurrentBodyPermanentElements = function () {
          return this.currentSnapshot.getPermanentElementsPresentInSnapshot(this.newSnapshot);
        }, o.prototype.getNewBodyScriptElements = function () {
          return this.newBody.querySelectorAll("script");
        }, o;
      }(e.Renderer), t = function t(_t5) {
        var e;
        return e = document.createElement("meta"), e.setAttribute("name", "turbolinks-permanent-placeholder"), e.setAttribute("content", _t5.id), {
          element: e,
          permanentElement: _t5
        };
      }, r = function r(t, e) {
        var r;
        return (r = t.parentNode) ? r.replaceChild(e, t) : void 0;
      };
    }.call(this), function () {
      var t = function t(_t6, e) {
        function n() {
          this.constructor = _t6;
        }

        for (var o in e) {
          r.call(e, o) && (_t6[o] = e[o]);
        }

        return n.prototype = e.prototype, _t6.prototype = new n(), _t6.__super__ = e.prototype, _t6;
      },
          r = {}.hasOwnProperty;

      e.ErrorRenderer = function (e) {
        function r(t) {
          var e;
          e = document.createElement("html"), e.innerHTML = t, this.newHead = e.querySelector("head"), this.newBody = e.querySelector("body");
        }

        return t(r, e), r.prototype.render = function (t) {
          return this.renderView(function (e) {
            return function () {
              return e.replaceHeadAndBody(), e.activateBodyScriptElements(), t();
            };
          }(this));
        }, r.prototype.replaceHeadAndBody = function () {
          var t, e;
          return e = document.head, t = document.body, e.parentNode.replaceChild(this.newHead, e), t.parentNode.replaceChild(this.newBody, t);
        }, r.prototype.activateBodyScriptElements = function () {
          var t, e, r, n, o, i;

          for (n = this.getScriptElements(), i = [], e = 0, r = n.length; r > e; e++) {
            o = n[e], t = this.createScriptElement(o), i.push(o.parentNode.replaceChild(t, o));
          }

          return i;
        }, r.prototype.getScriptElements = function () {
          return document.documentElement.querySelectorAll("script");
        }, r;
      }(e.Renderer);
    }.call(this), function () {
      e.View = function () {
        function t(t) {
          this.delegate = t, this.htmlElement = document.documentElement;
        }

        return t.prototype.getRootLocation = function () {
          return this.getSnapshot().getRootLocation();
        }, t.prototype.getElementForAnchor = function (t) {
          return this.getSnapshot().getElementForAnchor(t);
        }, t.prototype.getSnapshot = function () {
          return e.Snapshot.fromHTMLElement(this.htmlElement);
        }, t.prototype.render = function (t, e) {
          var r, n, o;
          return o = t.snapshot, r = t.error, n = t.isPreview, this.markAsPreview(n), null != o ? this.renderSnapshot(o, n, e) : this.renderError(r, e);
        }, t.prototype.markAsPreview = function (t) {
          return t ? this.htmlElement.setAttribute("data-turbolinks-preview", "") : this.htmlElement.removeAttribute("data-turbolinks-preview");
        }, t.prototype.renderSnapshot = function (t, r, n) {
          return e.SnapshotRenderer.render(this.delegate, n, this.getSnapshot(), e.Snapshot.wrap(t), r);
        }, t.prototype.renderError = function (t, r) {
          return e.ErrorRenderer.render(this.delegate, r, t);
        }, t;
      }();
    }.call(this), function () {
      var t = function t(_t7, e) {
        return function () {
          return _t7.apply(e, arguments);
        };
      };

      e.ScrollManager = function () {
        function r(r) {
          this.delegate = r, this.onScroll = t(this.onScroll, this), this.onScroll = e.throttle(this.onScroll);
        }

        return r.prototype.start = function () {
          return this.started ? void 0 : (addEventListener("scroll", this.onScroll, !1), this.onScroll(), this.started = !0);
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("scroll", this.onScroll, !1), this.started = !1) : void 0;
        }, r.prototype.scrollToElement = function (t) {
          return t.scrollIntoView();
        }, r.prototype.scrollToPosition = function (t) {
          var e, r;
          return e = t.x, r = t.y, window.scrollTo(e, r);
        }, r.prototype.onScroll = function (t) {
          return this.updatePosition({
            x: window.pageXOffset,
            y: window.pageYOffset
          });
        }, r.prototype.updatePosition = function (t) {
          var e;
          return this.position = t, null != (e = this.delegate) ? e.scrollPositionChanged(this.position) : void 0;
        }, r;
      }();
    }.call(this), function () {
      e.SnapshotCache = function () {
        function t(t) {
          this.size = t, this.keys = [], this.snapshots = {};
        }

        var r;
        return t.prototype.has = function (t) {
          var e;
          return e = r(t), e in this.snapshots;
        }, t.prototype.get = function (t) {
          var e;
          if (this.has(t)) return e = this.read(t), this.touch(t), e;
        }, t.prototype.put = function (t, e) {
          return this.write(t, e), this.touch(t), e;
        }, t.prototype.read = function (t) {
          var e;
          return e = r(t), this.snapshots[e];
        }, t.prototype.write = function (t, e) {
          var n;
          return n = r(t), this.snapshots[n] = e;
        }, t.prototype.touch = function (t) {
          var e, n;
          return n = r(t), e = this.keys.indexOf(n), e > -1 && this.keys.splice(e, 1), this.keys.unshift(n), this.trim();
        }, t.prototype.trim = function () {
          var t, e, r, n, o;

          for (n = this.keys.splice(this.size), o = [], t = 0, r = n.length; r > t; t++) {
            e = n[t], o.push(delete this.snapshots[e]);
          }

          return o;
        }, r = function r(t) {
          return e.Location.wrap(t).toCacheKey();
        }, t;
      }();
    }.call(this), function () {
      var t = function t(_t8, e) {
        return function () {
          return _t8.apply(e, arguments);
        };
      };

      e.Visit = function () {
        function r(r, n, o) {
          this.controller = r, this.action = o, this.performScroll = t(this.performScroll, this), this.identifier = e.uuid(), this.location = e.Location.wrap(n), this.adapter = this.controller.adapter, this.state = "initialized", this.timingMetrics = {};
        }

        var n;
        return r.prototype.start = function () {
          return "initialized" === this.state ? (this.recordTimingMetric("visitStart"), this.state = "started", this.adapter.visitStarted(this)) : void 0;
        }, r.prototype.cancel = function () {
          var t;
          return "started" === this.state ? (null != (t = this.request) && t.cancel(), this.cancelRender(), this.state = "canceled") : void 0;
        }, r.prototype.complete = function () {
          var t;
          return "started" === this.state ? (this.recordTimingMetric("visitEnd"), this.state = "completed", "function" == typeof (t = this.adapter).visitCompleted && t.visitCompleted(this), this.controller.visitCompleted(this)) : void 0;
        }, r.prototype.fail = function () {
          var t;
          return "started" === this.state ? (this.state = "failed", "function" == typeof (t = this.adapter).visitFailed ? t.visitFailed(this) : void 0) : void 0;
        }, r.prototype.changeHistory = function () {
          var t, e;
          return this.historyChanged ? void 0 : (t = this.location.isEqualTo(this.referrer) ? "replace" : this.action, e = n(t), this.controller[e](this.location, this.restorationIdentifier), this.historyChanged = !0);
        }, r.prototype.issueRequest = function () {
          return this.shouldIssueRequest() && null == this.request ? (this.progress = 0, this.request = new e.HttpRequest(this, this.location, this.referrer), this.request.send()) : void 0;
        }, r.prototype.getCachedSnapshot = function () {
          var t;
          return !(t = this.controller.getCachedSnapshotForLocation(this.location)) || null != this.location.anchor && !t.hasAnchor(this.location.anchor) || "restore" !== this.action && !t.isPreviewable() ? void 0 : t;
        }, r.prototype.hasCachedSnapshot = function () {
          return null != this.getCachedSnapshot();
        }, r.prototype.loadCachedSnapshot = function () {
          var t, e;
          return (e = this.getCachedSnapshot()) ? (t = this.shouldIssueRequest(), this.render(function () {
            var r;
            return this.cacheSnapshot(), this.controller.render({
              snapshot: e,
              isPreview: t
            }, this.performScroll), "function" == typeof (r = this.adapter).visitRendered && r.visitRendered(this), t ? void 0 : this.complete();
          })) : void 0;
        }, r.prototype.loadResponse = function () {
          return null != this.response ? this.render(function () {
            var t, e;
            return this.cacheSnapshot(), this.request.failed ? (this.controller.render({
              error: this.response
            }, this.performScroll), "function" == typeof (t = this.adapter).visitRendered && t.visitRendered(this), this.fail()) : (this.controller.render({
              snapshot: this.response
            }, this.performScroll), "function" == typeof (e = this.adapter).visitRendered && e.visitRendered(this), this.complete());
          }) : void 0;
        }, r.prototype.followRedirect = function () {
          return this.redirectedToLocation && !this.followedRedirect ? (this.location = this.redirectedToLocation, this.controller.replaceHistoryWithLocationAndRestorationIdentifier(this.redirectedToLocation, this.restorationIdentifier), this.followedRedirect = !0) : void 0;
        }, r.prototype.requestStarted = function () {
          var t;
          return this.recordTimingMetric("requestStart"), "function" == typeof (t = this.adapter).visitRequestStarted ? t.visitRequestStarted(this) : void 0;
        }, r.prototype.requestProgressed = function (t) {
          var e;
          return this.progress = t, "function" == typeof (e = this.adapter).visitRequestProgressed ? e.visitRequestProgressed(this) : void 0;
        }, r.prototype.requestCompletedWithResponse = function (t, r) {
          return this.response = t, null != r && (this.redirectedToLocation = e.Location.wrap(r)), this.adapter.visitRequestCompleted(this);
        }, r.prototype.requestFailedWithStatusCode = function (t, e) {
          return this.response = e, this.adapter.visitRequestFailedWithStatusCode(this, t);
        }, r.prototype.requestFinished = function () {
          var t;
          return this.recordTimingMetric("requestEnd"), "function" == typeof (t = this.adapter).visitRequestFinished ? t.visitRequestFinished(this) : void 0;
        }, r.prototype.performScroll = function () {
          return this.scrolled ? void 0 : ("restore" === this.action ? this.scrollToRestoredPosition() || this.scrollToTop() : this.scrollToAnchor() || this.scrollToTop(), this.scrolled = !0);
        }, r.prototype.scrollToRestoredPosition = function () {
          var t, e;
          return t = null != (e = this.restorationData) ? e.scrollPosition : void 0, null != t ? (this.controller.scrollToPosition(t), !0) : void 0;
        }, r.prototype.scrollToAnchor = function () {
          return null != this.location.anchor ? (this.controller.scrollToAnchor(this.location.anchor), !0) : void 0;
        }, r.prototype.scrollToTop = function () {
          return this.controller.scrollToPosition({
            x: 0,
            y: 0
          });
        }, r.prototype.recordTimingMetric = function (t) {
          var e;
          return null != (e = this.timingMetrics)[t] ? e[t] : e[t] = new Date().getTime();
        }, r.prototype.getTimingMetrics = function () {
          return e.copyObject(this.timingMetrics);
        }, n = function n(t) {
          switch (t) {
            case "replace":
              return "replaceHistoryWithLocationAndRestorationIdentifier";

            case "advance":
            case "restore":
              return "pushHistoryWithLocationAndRestorationIdentifier";
          }
        }, r.prototype.shouldIssueRequest = function () {
          return "restore" === this.action ? !this.hasCachedSnapshot() : !0;
        }, r.prototype.cacheSnapshot = function () {
          return this.snapshotCached ? void 0 : (this.controller.cacheSnapshot(), this.snapshotCached = !0);
        }, r.prototype.render = function (t) {
          return this.cancelRender(), this.frame = requestAnimationFrame(function (e) {
            return function () {
              return e.frame = null, t.call(e);
            };
          }(this));
        }, r.prototype.cancelRender = function () {
          return this.frame ? cancelAnimationFrame(this.frame) : void 0;
        }, r;
      }();
    }.call(this), function () {
      var t = function t(_t9, e) {
        return function () {
          return _t9.apply(e, arguments);
        };
      };

      e.Controller = function () {
        function r() {
          this.clickBubbled = t(this.clickBubbled, this), this.clickCaptured = t(this.clickCaptured, this), this.pageLoaded = t(this.pageLoaded, this), this.history = new e.History(this), this.view = new e.View(this), this.scrollManager = new e.ScrollManager(this), this.restorationData = {}, this.clearCache(), this.setProgressBarDelay(500);
        }

        return r.prototype.start = function () {
          return e.supported && !this.started ? (addEventListener("click", this.clickCaptured, !0), addEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.start(), this.startHistory(), this.started = !0, this.enabled = !0) : void 0;
        }, r.prototype.disable = function () {
          return this.enabled = !1;
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("click", this.clickCaptured, !0), removeEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.stop(), this.stopHistory(), this.started = !1) : void 0;
        }, r.prototype.clearCache = function () {
          return this.cache = new e.SnapshotCache(10);
        }, r.prototype.visit = function (t, r) {
          var n, o;
          return null == r && (r = {}), t = e.Location.wrap(t), this.applicationAllowsVisitingLocation(t) ? this.locationIsVisitable(t) ? (n = null != (o = r.action) ? o : "advance", this.adapter.visitProposedToLocationWithAction(t, n)) : window.location = t : void 0;
        }, r.prototype.startVisitToLocationWithAction = function (t, r, n) {
          var o;
          return e.supported ? (o = this.getRestorationDataForIdentifier(n), this.startVisit(t, r, {
            restorationData: o
          })) : window.location = t;
        }, r.prototype.setProgressBarDelay = function (t) {
          return this.progressBarDelay = t;
        }, r.prototype.startHistory = function () {
          return this.location = e.Location.wrap(window.location), this.restorationIdentifier = e.uuid(), this.history.start(), this.history.replace(this.location, this.restorationIdentifier);
        }, r.prototype.stopHistory = function () {
          return this.history.stop();
        }, r.prototype.pushHistoryWithLocationAndRestorationIdentifier = function (t, r) {
          return this.restorationIdentifier = r, this.location = e.Location.wrap(t), this.history.push(this.location, this.restorationIdentifier);
        }, r.prototype.replaceHistoryWithLocationAndRestorationIdentifier = function (t, r) {
          return this.restorationIdentifier = r, this.location = e.Location.wrap(t), this.history.replace(this.location, this.restorationIdentifier);
        }, r.prototype.historyPoppedToLocationWithRestorationIdentifier = function (t, r) {
          var n;
          return this.restorationIdentifier = r, this.enabled ? (n = this.getRestorationDataForIdentifier(this.restorationIdentifier), this.startVisit(t, "restore", {
            restorationIdentifier: this.restorationIdentifier,
            restorationData: n,
            historyChanged: !0
          }), this.location = e.Location.wrap(t)) : this.adapter.pageInvalidated();
        }, r.prototype.getCachedSnapshotForLocation = function (t) {
          var e;
          return null != (e = this.cache.get(t)) ? e.clone() : void 0;
        }, r.prototype.shouldCacheSnapshot = function () {
          return this.view.getSnapshot().isCacheable();
        }, r.prototype.cacheSnapshot = function () {
          var t, r;
          return this.shouldCacheSnapshot() ? (this.notifyApplicationBeforeCachingSnapshot(), r = this.view.getSnapshot(), t = this.lastRenderedLocation, e.defer(function (e) {
            return function () {
              return e.cache.put(t, r.clone());
            };
          }(this))) : void 0;
        }, r.prototype.scrollToAnchor = function (t) {
          var e;
          return (e = this.view.getElementForAnchor(t)) ? this.scrollToElement(e) : this.scrollToPosition({
            x: 0,
            y: 0
          });
        }, r.prototype.scrollToElement = function (t) {
          return this.scrollManager.scrollToElement(t);
        }, r.prototype.scrollToPosition = function (t) {
          return this.scrollManager.scrollToPosition(t);
        }, r.prototype.scrollPositionChanged = function (t) {
          var e;
          return e = this.getCurrentRestorationData(), e.scrollPosition = t;
        }, r.prototype.render = function (t, e) {
          return this.view.render(t, e);
        }, r.prototype.viewInvalidated = function () {
          return this.adapter.pageInvalidated();
        }, r.prototype.viewWillRender = function (t) {
          return this.notifyApplicationBeforeRender(t);
        }, r.prototype.viewRendered = function () {
          return this.lastRenderedLocation = this.currentVisit.location, this.notifyApplicationAfterRender();
        }, r.prototype.pageLoaded = function () {
          return this.lastRenderedLocation = this.location, this.notifyApplicationAfterPageLoad();
        }, r.prototype.clickCaptured = function () {
          return removeEventListener("click", this.clickBubbled, !1), addEventListener("click", this.clickBubbled, !1);
        }, r.prototype.clickBubbled = function (t) {
          var e, r, n;
          return this.enabled && this.clickEventIsSignificant(t) && (r = this.getVisitableLinkForNode(t.target)) && (n = this.getVisitableLocationForLink(r)) && this.applicationAllowsFollowingLinkToLocation(r, n) ? (t.preventDefault(), e = this.getActionForLink(r), this.visit(n, {
            action: e
          })) : void 0;
        }, r.prototype.applicationAllowsFollowingLinkToLocation = function (t, e) {
          var r;
          return r = this.notifyApplicationAfterClickingLinkToLocation(t, e), !r.defaultPrevented;
        }, r.prototype.applicationAllowsVisitingLocation = function (t) {
          var e;
          return e = this.notifyApplicationBeforeVisitingLocation(t), !e.defaultPrevented;
        }, r.prototype.notifyApplicationAfterClickingLinkToLocation = function (t, r) {
          return e.dispatch("turbolinks:click", {
            target: t,
            data: {
              url: r.absoluteURL
            },
            cancelable: !0
          });
        }, r.prototype.notifyApplicationBeforeVisitingLocation = function (t) {
          return e.dispatch("turbolinks:before-visit", {
            data: {
              url: t.absoluteURL
            },
            cancelable: !0
          });
        }, r.prototype.notifyApplicationAfterVisitingLocation = function (t) {
          return e.dispatch("turbolinks:visit", {
            data: {
              url: t.absoluteURL
            }
          });
        }, r.prototype.notifyApplicationBeforeCachingSnapshot = function () {
          return e.dispatch("turbolinks:before-cache");
        }, r.prototype.notifyApplicationBeforeRender = function (t) {
          return e.dispatch("turbolinks:before-render", {
            data: {
              newBody: t
            }
          });
        }, r.prototype.notifyApplicationAfterRender = function () {
          return e.dispatch("turbolinks:render");
        }, r.prototype.notifyApplicationAfterPageLoad = function (t) {
          return null == t && (t = {}), e.dispatch("turbolinks:load", {
            data: {
              url: this.location.absoluteURL,
              timing: t
            }
          });
        }, r.prototype.startVisit = function (t, e, r) {
          var n;
          return null != (n = this.currentVisit) && n.cancel(), this.currentVisit = this.createVisit(t, e, r), this.currentVisit.start(), this.notifyApplicationAfterVisitingLocation(t);
        }, r.prototype.createVisit = function (t, r, n) {
          var o, i, s, a, u;
          return i = null != n ? n : {}, a = i.restorationIdentifier, s = i.restorationData, o = i.historyChanged, u = new e.Visit(this, t, r), u.restorationIdentifier = null != a ? a : e.uuid(), u.restorationData = e.copyObject(s), u.historyChanged = o, u.referrer = this.location, u;
        }, r.prototype.visitCompleted = function (t) {
          return this.notifyApplicationAfterPageLoad(t.getTimingMetrics());
        }, r.prototype.clickEventIsSignificant = function (t) {
          return !(t.defaultPrevented || t.target.isContentEditable || t.which > 1 || t.altKey || t.ctrlKey || t.metaKey || t.shiftKey);
        }, r.prototype.getVisitableLinkForNode = function (t) {
          return this.nodeIsVisitable(t) ? e.closest(t, "a[href]:not([target]):not([download])") : void 0;
        }, r.prototype.getVisitableLocationForLink = function (t) {
          var r;
          return r = new e.Location(t.getAttribute("href")), this.locationIsVisitable(r) ? r : void 0;
        }, r.prototype.getActionForLink = function (t) {
          var e;
          return null != (e = t.getAttribute("data-turbolinks-action")) ? e : "advance";
        }, r.prototype.nodeIsVisitable = function (t) {
          var r;
          return (r = e.closest(t, "[data-turbolinks]")) ? "false" !== r.getAttribute("data-turbolinks") : !0;
        }, r.prototype.locationIsVisitable = function (t) {
          return t.isPrefixedBy(this.view.getRootLocation()) && t.isHTML();
        }, r.prototype.getCurrentRestorationData = function () {
          return this.getRestorationDataForIdentifier(this.restorationIdentifier);
        }, r.prototype.getRestorationDataForIdentifier = function (t) {
          var e;
          return null != (e = this.restorationData)[t] ? e[t] : e[t] = {};
        }, r;
      }();
    }.call(this), function () {
      !function () {
        var t, e;
        if ((t = e = document.currentScript) && !e.hasAttribute("data-turbolinks-suppress-warning")) for (; t = t.parentNode;) {
          if (t === document.body) return console.warn("You are loading Turbolinks from a <script> element inside the <body> element. This is probably not what you meant to do!\n\nLoad your application\u2019s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.\n\nFor more information, see: https://github.com/turbolinks/turbolinks#working-with-script-elements\n\n\u2014\u2014\nSuppress this warning by adding a `data-turbolinks-suppress-warning` attribute to: %s", e.outerHTML);
        }
      }();
    }.call(this), function () {
      var t, r, n;
      e.start = function () {
        return r() ? (null == e.controller && (e.controller = t()), e.controller.start()) : void 0;
      }, r = function r() {
        return null == window.Turbolinks && (window.Turbolinks = e), n();
      }, t = function t() {
        var t;
        return t = new e.Controller(), t.adapter = new e.BrowserAdapter(t), t;
      }, n = function n() {
        return window.Turbolinks === e;
      }, n() && e.start();
    }.call(this);
  }).call(this), "object" == ( false ? undefined : _typeof(module)) && module.exports ? module.exports = e :  true && !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}).call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ })

/******/ });
//# sourceMappingURL=application-703dcb98a379ca646b8e.js.map