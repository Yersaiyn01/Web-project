/*! jQuery v3.7.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-deprecated/ajax-event-alias,-effects,-effects/animatedSelector,-effects/Tween | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, true) : function(e2) {
    if (!e2.document)
      throw new Error("jQuery requires a window with a document");
    return t(e2);
  } : t(e);
}("undefined" != typeof window ? window : this, function(ie, e) {
  "use strict";
  var oe = [], r = Object.getPrototypeOf, ae = oe.slice, g = oe.flat ? function(e2) {
    return oe.flat.call(e2);
  } : function(e2) {
    return oe.concat.apply([], e2);
  }, s = oe.push, se = oe.indexOf, n = {}, i = n.toString, ue = n.hasOwnProperty, o = ue.toString, a = o.call(Object), le = {}, v = function(e2) {
    return "function" == typeof e2 && "number" != typeof e2.nodeType && "function" != typeof e2.item;
  }, y = function(e2) {
    return null != e2 && e2 === e2.window;
  }, m = ie.document, u = { type: true, src: true, nonce: true, noModule: true };
  function b(e2, t2, n2) {
    var r2, i2, o2 = (n2 = n2 || m).createElement("script");
    if (o2.text = e2, t2)
      for (r2 in u)
        (i2 = t2[r2] || t2.getAttribute && t2.getAttribute(r2)) && o2.setAttribute(r2, i2);
    n2.head.appendChild(o2).parentNode.removeChild(o2);
  }
  function x(e2) {
    return null == e2 ? e2 + "" : "object" == typeof e2 || "function" == typeof e2 ? n[i.call(e2)] || "object" : typeof e2;
  }
  var t = "3.7.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-deprecated/ajax-event-alias,-effects,-effects/animatedSelector,-effects/Tween", l = /HTML$/i, ce = function(e2, t2) {
    return new ce.fn.init(e2, t2);
  };
  function c(e2) {
    var t2 = !!e2 && "length" in e2 && e2.length, n2 = x(e2);
    return !v(e2) && !y(e2) && ("array" === n2 || 0 === t2 || "number" == typeof t2 && 0 < t2 && t2 - 1 in e2);
  }
  function fe(e2, t2) {
    return e2.nodeName && e2.nodeName.toLowerCase() === t2.toLowerCase();
  }
  ce.fn = ce.prototype = { jquery: t, constructor: ce, length: 0, toArray: function() {
    return ae.call(this);
  }, get: function(e2) {
    return null == e2 ? ae.call(this) : e2 < 0 ? this[e2 + this.length] : this[e2];
  }, pushStack: function(e2) {
    var t2 = ce.merge(this.constructor(), e2);
    return t2.prevObject = this, t2;
  }, each: function(e2) {
    return ce.each(this, e2);
  }, map: function(n2) {
    return this.pushStack(ce.map(this, function(e2, t2) {
      return n2.call(e2, t2, e2);
    }));
  }, slice: function() {
    return this.pushStack(ae.apply(this, arguments));
  }, first: function() {
    return this.eq(0);
  }, last: function() {
    return this.eq(-1);
  }, even: function() {
    return this.pushStack(ce.grep(this, function(e2, t2) {
      return (t2 + 1) % 2;
    }));
  }, odd: function() {
    return this.pushStack(ce.grep(this, function(e2, t2) {
      return t2 % 2;
    }));
  }, eq: function(e2) {
    var t2 = this.length, n2 = +e2 + (e2 < 0 ? t2 : 0);
    return this.pushStack(0 <= n2 && n2 < t2 ? [this[n2]] : []);
  }, end: function() {
    return this.prevObject || this.constructor();
  }, push: s, sort: oe.sort, splice: oe.splice }, ce.extend = ce.fn.extend = function() {
    var e2, t2, n2, r2, i2, o2, a2 = arguments[0] || {}, s2 = 1, u2 = arguments.length, l2 = false;
    for ("boolean" == typeof a2 && (l2 = a2, a2 = arguments[s2] || {}, s2++), "object" == typeof a2 || v(a2) || (a2 = {}), s2 === u2 && (a2 = this, s2--); s2 < u2; s2++)
      if (null != (e2 = arguments[s2]))
        for (t2 in e2)
          r2 = e2[t2], "__proto__" !== t2 && a2 !== r2 && (l2 && r2 && (ce.isPlainObject(r2) || (i2 = Array.isArray(r2))) ? (n2 = a2[t2], o2 = i2 && !Array.isArray(n2) ? [] : i2 || ce.isPlainObject(n2) ? n2 : {}, i2 = false, a2[t2] = ce.extend(l2, o2, r2)) : void 0 !== r2 && (a2[t2] = r2));
    return a2;
  }, ce.extend({ expando: "jQuery" + (t + Math.random()).replace(/\D/g, ""), isReady: true, error: function(e2) {
    throw new Error(e2);
  }, noop: function() {
  }, isPlainObject: function(e2) {
    var t2, n2;
    return !(!e2 || "[object Object]" !== i.call(e2)) && (!(t2 = r(e2)) || "function" == typeof (n2 = ue.call(t2, "constructor") && t2.constructor) && o.call(n2) === a);
  }, isEmptyObject: function(e2) {
    var t2;
    for (t2 in e2)
      return false;
    return true;
  }, globalEval: function(e2, t2, n2) {
    b(e2, { nonce: t2 && t2.nonce }, n2);
  }, each: function(e2, t2) {
    var n2, r2 = 0;
    if (c(e2)) {
      for (n2 = e2.length; r2 < n2; r2++)
        if (false === t2.call(e2[r2], r2, e2[r2]))
          break;
    } else
      for (r2 in e2)
        if (false === t2.call(e2[r2], r2, e2[r2]))
          break;
    return e2;
  }, text: function(e2) {
    var t2, n2 = "", r2 = 0, i2 = e2.nodeType;
    if (!i2)
      while (t2 = e2[r2++])
        n2 += ce.text(t2);
    return 1 === i2 || 11 === i2 ? e2.textContent : 9 === i2 ? e2.documentElement.textContent : 3 === i2 || 4 === i2 ? e2.nodeValue : n2;
  }, makeArray: function(e2, t2) {
    var n2 = t2 || [];
    return null != e2 && (c(Object(e2)) ? ce.merge(n2, "string" == typeof e2 ? [e2] : e2) : s.call(n2, e2)), n2;
  }, inArray: function(e2, t2, n2) {
    return null == t2 ? -1 : se.call(t2, e2, n2);
  }, isXMLDoc: function(e2) {
    var t2 = e2 && e2.namespaceURI, n2 = e2 && (e2.ownerDocument || e2).documentElement;
    return !l.test(t2 || n2 && n2.nodeName || "HTML");
  }, merge: function(e2, t2) {
    for (var n2 = +t2.length, r2 = 0, i2 = e2.length; r2 < n2; r2++)
      e2[i2++] = t2[r2];
    return e2.length = i2, e2;
  }, grep: function(e2, t2, n2) {
    for (var r2 = [], i2 = 0, o2 = e2.length, a2 = !n2; i2 < o2; i2++)
      !t2(e2[i2], i2) !== a2 && r2.push(e2[i2]);
    return r2;
  }, map: function(e2, t2, n2) {
    var r2, i2, o2 = 0, a2 = [];
    if (c(e2))
      for (r2 = e2.length; o2 < r2; o2++)
        null != (i2 = t2(e2[o2], o2, n2)) && a2.push(i2);
    else
      for (o2 in e2)
        null != (i2 = t2(e2[o2], o2, n2)) && a2.push(i2);
    return g(a2);
  }, guid: 1, support: le }), "function" == typeof Symbol && (ce.fn[Symbol.iterator] = oe[Symbol.iterator]), ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e2, t2) {
    n["[object " + t2 + "]"] = t2.toLowerCase();
  });
  var de = oe.pop, pe = oe.sort, he = oe.splice, ge = "[\\x20\\t\\r\\n\\f]", ve = new RegExp("^" + ge + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ge + "+$", "g");
  ce.contains = function(e2, t2) {
    var n2 = t2 && t2.parentNode;
    return e2 === n2 || !(!n2 || 1 !== n2.nodeType || !(e2.contains ? e2.contains(n2) : e2.compareDocumentPosition && 16 & e2.compareDocumentPosition(n2)));
  };
  var f = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
  function d(e2, t2) {
    return t2 ? "\0" === e2 ? "\uFFFD" : e2.slice(0, -1) + "\\" + e2.charCodeAt(e2.length - 1).toString(16) + " " : "\\" + e2;
  }
  ce.escapeSelector = function(e2) {
    return (e2 + "").replace(f, d);
  };
  var ye = m, me = s;
  !function() {
    var e2, x2, w2, o2, a2, C2, r2, T2, p2, i2, E2 = me, k2 = ce.expando, S2 = 0, n2 = 0, s2 = W2(), c2 = W2(), u2 = W2(), h2 = W2(), l2 = function(e3, t3) {
      return e3 === t3 && (a2 = true), 0;
    }, f2 = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", t2 = "(?:\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", d2 = "\\[" + ge + "*(" + t2 + ")(?:" + ge + "*([*^$|!~]?=)" + ge + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + t2 + "))|)" + ge + "*\\]", g2 = ":(" + t2 + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + d2 + ")*)|.*)\\)|)", v2 = new RegExp(ge + "+", "g"), y2 = new RegExp("^" + ge + "*," + ge + "*"), m2 = new RegExp("^" + ge + "*([>+~]|" + ge + ")" + ge + "*"), b2 = new RegExp(ge + "|>"), A2 = new RegExp(g2), D2 = new RegExp("^" + t2 + "$"), N2 = { ID: new RegExp("^#(" + t2 + ")"), CLASS: new RegExp("^\\.(" + t2 + ")"), TAG: new RegExp("^(" + t2 + "|[*])"), ATTR: new RegExp("^" + d2), PSEUDO: new RegExp("^" + g2), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ge + "*(even|odd|(([+-]|)(\\d*)n|)" + ge + "*(?:([+-]|)" + ge + "*(\\d+)|))" + ge + "*\\)|)", "i"), bool: new RegExp("^(?:" + f2 + ")$", "i"), needsContext: new RegExp("^" + ge + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ge + "*((?:-\\d)?\\d*)" + ge + "*\\)|)(?=[^-]|$)", "i") }, L2 = /^(?:input|select|textarea|button)$/i, j2 = /^h\d$/i, O2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, P2 = /[+~]/, H2 = new RegExp("\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\([^\\r\\n\\f])", "g"), q2 = function(e3, t3) {
      var n3 = "0x" + e3.slice(1) - 65536;
      return t3 || (n3 < 0 ? String.fromCharCode(n3 + 65536) : String.fromCharCode(n3 >> 10 | 55296, 1023 & n3 | 56320));
    }, R2 = function() {
      V2();
    }, M2 = K2(function(e3) {
      return true === e3.disabled && fe(e3, "fieldset");
    }, { dir: "parentNode", next: "legend" });
    try {
      E2.apply(oe = ae.call(ye.childNodes), ye.childNodes), oe[ye.childNodes.length].nodeType;
    } catch (e3) {
      E2 = { apply: function(e4, t3) {
        me.apply(e4, ae.call(t3));
      }, call: function(e4) {
        me.apply(e4, ae.call(arguments, 1));
      } };
    }
    function I2(t3, e3, n3, r3) {
      var i3, o3, a3, s3, u3, l3, c3, f3 = e3 && e3.ownerDocument, d3 = e3 ? e3.nodeType : 9;
      if (n3 = n3 || [], "string" != typeof t3 || !t3 || 1 !== d3 && 9 !== d3 && 11 !== d3)
        return n3;
      if (!r3 && (V2(e3), e3 = e3 || C2, T2)) {
        if (11 !== d3 && (u3 = O2.exec(t3)))
          if (i3 = u3[1]) {
            if (9 === d3) {
              if (!(a3 = e3.getElementById(i3)))
                return n3;
              if (a3.id === i3)
                return E2.call(n3, a3), n3;
            } else if (f3 && (a3 = f3.getElementById(i3)) && I2.contains(e3, a3) && a3.id === i3)
              return E2.call(n3, a3), n3;
          } else {
            if (u3[2])
              return E2.apply(n3, e3.getElementsByTagName(t3)), n3;
            if ((i3 = u3[3]) && e3.getElementsByClassName)
              return E2.apply(n3, e3.getElementsByClassName(i3)), n3;
          }
        if (!(h2[t3 + " "] || p2 && p2.test(t3))) {
          if (c3 = t3, f3 = e3, 1 === d3 && (b2.test(t3) || m2.test(t3))) {
            (f3 = P2.test(t3) && X2(e3.parentNode) || e3) == e3 && le.scope || ((s3 = e3.getAttribute("id")) ? s3 = ce.escapeSelector(s3) : e3.setAttribute("id", s3 = k2)), o3 = (l3 = Y2(t3)).length;
            while (o3--)
              l3[o3] = (s3 ? "#" + s3 : ":scope") + " " + G2(l3[o3]);
            c3 = l3.join(",");
          }
          try {
            return E2.apply(n3, f3.querySelectorAll(c3)), n3;
          } catch (e4) {
            h2(t3, true);
          } finally {
            s3 === k2 && e3.removeAttribute("id");
          }
        }
      }
      return re2(t3.replace(ve, "$1"), e3, n3, r3);
    }
    function W2() {
      var r3 = [];
      return function e3(t3, n3) {
        return r3.push(t3 + " ") > x2.cacheLength && delete e3[r3.shift()], e3[t3 + " "] = n3;
      };
    }
    function B2(e3) {
      return e3[k2] = true, e3;
    }
    function F2(e3) {
      var t3 = C2.createElement("fieldset");
      try {
        return !!e3(t3);
      } catch (e4) {
        return false;
      } finally {
        t3.parentNode && t3.parentNode.removeChild(t3), t3 = null;
      }
    }
    function $2(t3) {
      return function(e3) {
        return fe(e3, "input") && e3.type === t3;
      };
    }
    function _2(t3) {
      return function(e3) {
        return (fe(e3, "input") || fe(e3, "button")) && e3.type === t3;
      };
    }
    function z2(t3) {
      return function(e3) {
        return "form" in e3 ? e3.parentNode && false === e3.disabled ? "label" in e3 ? "label" in e3.parentNode ? e3.parentNode.disabled === t3 : e3.disabled === t3 : e3.isDisabled === t3 || e3.isDisabled !== !t3 && M2(e3) === t3 : e3.disabled === t3 : "label" in e3 && e3.disabled === t3;
      };
    }
    function U2(a3) {
      return B2(function(o3) {
        return o3 = +o3, B2(function(e3, t3) {
          var n3, r3 = a3([], e3.length, o3), i3 = r3.length;
          while (i3--)
            e3[n3 = r3[i3]] && (e3[n3] = !(t3[n3] = e3[n3]));
        });
      });
    }
    function X2(e3) {
      return e3 && "undefined" != typeof e3.getElementsByTagName && e3;
    }
    function V2(e3) {
      var t3, n3 = e3 ? e3.ownerDocument || e3 : ye;
      return n3 != C2 && 9 === n3.nodeType && n3.documentElement && (r2 = (C2 = n3).documentElement, T2 = !ce.isXMLDoc(C2), i2 = r2.matches || r2.webkitMatchesSelector || r2.msMatchesSelector, r2.msMatchesSelector && ye != C2 && (t3 = C2.defaultView) && t3.top !== t3 && t3.addEventListener("unload", R2), le.getById = F2(function(e4) {
        return r2.appendChild(e4).id = ce.expando, !C2.getElementsByName || !C2.getElementsByName(ce.expando).length;
      }), le.disconnectedMatch = F2(function(e4) {
        return i2.call(e4, "*");
      }), le.scope = F2(function() {
        return C2.querySelectorAll(":scope");
      }), le.cssHas = F2(function() {
        try {
          return C2.querySelector(":has(*,:jqfake)"), false;
        } catch (e4) {
          return true;
        }
      }), le.getById ? (x2.filter.ID = function(e4) {
        var t4 = e4.replace(H2, q2);
        return function(e5) {
          return e5.getAttribute("id") === t4;
        };
      }, x2.find.ID = function(e4, t4) {
        if ("undefined" != typeof t4.getElementById && T2) {
          var n4 = t4.getElementById(e4);
          return n4 ? [n4] : [];
        }
      }) : (x2.filter.ID = function(e4) {
        var n4 = e4.replace(H2, q2);
        return function(e5) {
          var t4 = "undefined" != typeof e5.getAttributeNode && e5.getAttributeNode("id");
          return t4 && t4.value === n4;
        };
      }, x2.find.ID = function(e4, t4) {
        if ("undefined" != typeof t4.getElementById && T2) {
          var n4, r3, i3, o3 = t4.getElementById(e4);
          if (o3) {
            if ((n4 = o3.getAttributeNode("id")) && n4.value === e4)
              return [o3];
            i3 = t4.getElementsByName(e4), r3 = 0;
            while (o3 = i3[r3++])
              if ((n4 = o3.getAttributeNode("id")) && n4.value === e4)
                return [o3];
          }
          return [];
        }
      }), x2.find.TAG = function(e4, t4) {
        return "undefined" != typeof t4.getElementsByTagName ? t4.getElementsByTagName(e4) : t4.querySelectorAll(e4);
      }, x2.find.CLASS = function(e4, t4) {
        if ("undefined" != typeof t4.getElementsByClassName && T2)
          return t4.getElementsByClassName(e4);
      }, p2 = [], F2(function(e4) {
        var t4;
        r2.appendChild(e4).innerHTML = "<a id='" + k2 + "' href='' disabled='disabled'></a><select id='" + k2 + "-\r\\' disabled='disabled'><option selected=''></option></select>", e4.querySelectorAll("[selected]").length || p2.push("\\[" + ge + "*(?:value|" + f2 + ")"), e4.querySelectorAll("[id~=" + k2 + "-]").length || p2.push("~="), e4.querySelectorAll("a#" + k2 + "+*").length || p2.push(".#.+[+~]"), e4.querySelectorAll(":checked").length || p2.push(":checked"), (t4 = C2.createElement("input")).setAttribute("type", "hidden"), e4.appendChild(t4).setAttribute("name", "D"), r2.appendChild(e4).disabled = true, 2 !== e4.querySelectorAll(":disabled").length && p2.push(":enabled", ":disabled"), (t4 = C2.createElement("input")).setAttribute("name", ""), e4.appendChild(t4), e4.querySelectorAll("[name='']").length || p2.push("\\[" + ge + "*name" + ge + "*=" + ge + `*(?:''|"")`);
      }), le.cssHas || p2.push(":has"), p2 = p2.length && new RegExp(p2.join("|")), l2 = function(e4, t4) {
        if (e4 === t4)
          return a2 = true, 0;
        var n4 = !e4.compareDocumentPosition - !t4.compareDocumentPosition;
        return n4 || (1 & (n4 = (e4.ownerDocument || e4) == (t4.ownerDocument || t4) ? e4.compareDocumentPosition(t4) : 1) || !le.sortDetached && t4.compareDocumentPosition(e4) === n4 ? e4 === C2 || e4.ownerDocument == ye && I2.contains(ye, e4) ? -1 : t4 === C2 || t4.ownerDocument == ye && I2.contains(ye, t4) ? 1 : o2 ? se.call(o2, e4) - se.call(o2, t4) : 0 : 4 & n4 ? -1 : 1);
      }), C2;
    }
    for (e2 in I2.matches = function(e3, t3) {
      return I2(e3, null, null, t3);
    }, I2.matchesSelector = function(e3, t3) {
      if (V2(e3), T2 && !h2[t3 + " "] && (!p2 || !p2.test(t3)))
        try {
          var n3 = i2.call(e3, t3);
          if (n3 || le.disconnectedMatch || e3.document && 11 !== e3.document.nodeType)
            return n3;
        } catch (e4) {
          h2(t3, true);
        }
      return 0 < I2(t3, C2, null, [e3]).length;
    }, I2.contains = function(e3, t3) {
      return (e3.ownerDocument || e3) != C2 && V2(e3), ce.contains(e3, t3);
    }, I2.attr = function(e3, t3) {
      (e3.ownerDocument || e3) != C2 && V2(e3);
      var n3 = x2.attrHandle[t3.toLowerCase()], r3 = n3 && ue.call(x2.attrHandle, t3.toLowerCase()) ? n3(e3, t3, !T2) : void 0;
      return void 0 !== r3 ? r3 : e3.getAttribute(t3);
    }, I2.error = function(e3) {
      throw new Error("Syntax error, unrecognized expression: " + e3);
    }, ce.uniqueSort = function(e3) {
      var t3, n3 = [], r3 = 0, i3 = 0;
      if (a2 = !le.sortStable, o2 = !le.sortStable && ae.call(e3, 0), pe.call(e3, l2), a2) {
        while (t3 = e3[i3++])
          t3 === e3[i3] && (r3 = n3.push(i3));
        while (r3--)
          he.call(e3, n3[r3], 1);
      }
      return o2 = null, e3;
    }, ce.fn.uniqueSort = function() {
      return this.pushStack(ce.uniqueSort(ae.apply(this)));
    }, (x2 = ce.expr = { cacheLength: 50, createPseudo: B2, match: N2, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: true }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: true }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(e3) {
      return e3[1] = e3[1].replace(H2, q2), e3[3] = (e3[3] || e3[4] || e3[5] || "").replace(H2, q2), "~=" === e3[2] && (e3[3] = " " + e3[3] + " "), e3.slice(0, 4);
    }, CHILD: function(e3) {
      return e3[1] = e3[1].toLowerCase(), "nth" === e3[1].slice(0, 3) ? (e3[3] || I2.error(e3[0]), e3[4] = +(e3[4] ? e3[5] + (e3[6] || 1) : 2 * ("even" === e3[3] || "odd" === e3[3])), e3[5] = +(e3[7] + e3[8] || "odd" === e3[3])) : e3[3] && I2.error(e3[0]), e3;
    }, PSEUDO: function(e3) {
      var t3, n3 = !e3[6] && e3[2];
      return N2.CHILD.test(e3[0]) ? null : (e3[3] ? e3[2] = e3[4] || e3[5] || "" : n3 && A2.test(n3) && (t3 = Y2(n3, true)) && (t3 = n3.indexOf(")", n3.length - t3) - n3.length) && (e3[0] = e3[0].slice(0, t3), e3[2] = n3.slice(0, t3)), e3.slice(0, 3));
    } }, filter: { TAG: function(e3) {
      var t3 = e3.replace(H2, q2).toLowerCase();
      return "*" === e3 ? function() {
        return true;
      } : function(e4) {
        return fe(e4, t3);
      };
    }, CLASS: function(e3) {
      var t3 = s2[e3 + " "];
      return t3 || (t3 = new RegExp("(^|" + ge + ")" + e3 + "(" + ge + "|$)")) && s2(e3, function(e4) {
        return t3.test("string" == typeof e4.className && e4.className || "undefined" != typeof e4.getAttribute && e4.getAttribute("class") || "");
      });
    }, ATTR: function(n3, r3, i3) {
      return function(e3) {
        var t3 = I2.attr(e3, n3);
        return null == t3 ? "!=" === r3 : !r3 || (t3 += "", "=" === r3 ? t3 === i3 : "!=" === r3 ? t3 !== i3 : "^=" === r3 ? i3 && 0 === t3.indexOf(i3) : "*=" === r3 ? i3 && -1 < t3.indexOf(i3) : "$=" === r3 ? i3 && t3.slice(-i3.length) === i3 : "~=" === r3 ? -1 < (" " + t3.replace(v2, " ") + " ").indexOf(i3) : "|=" === r3 && (t3 === i3 || t3.slice(0, i3.length + 1) === i3 + "-"));
      };
    }, CHILD: function(p3, e3, t3, h3, g3) {
      var v3 = "nth" !== p3.slice(0, 3), y3 = "last" !== p3.slice(-4), m3 = "of-type" === e3;
      return 1 === h3 && 0 === g3 ? function(e4) {
        return !!e4.parentNode;
      } : function(e4, t4, n3) {
        var r3, i3, o3, a3, s3, u3 = v3 !== y3 ? "nextSibling" : "previousSibling", l3 = e4.parentNode, c3 = m3 && e4.nodeName.toLowerCase(), f3 = !n3 && !m3, d3 = false;
        if (l3) {
          if (v3) {
            while (u3) {
              o3 = e4;
              while (o3 = o3[u3])
                if (m3 ? fe(o3, c3) : 1 === o3.nodeType)
                  return false;
              s3 = u3 = "only" === p3 && !s3 && "nextSibling";
            }
            return true;
          }
          if (s3 = [y3 ? l3.firstChild : l3.lastChild], y3 && f3) {
            d3 = (a3 = (r3 = (i3 = l3[k2] || (l3[k2] = {}))[p3] || [])[0] === S2 && r3[1]) && r3[2], o3 = a3 && l3.childNodes[a3];
            while (o3 = ++a3 && o3 && o3[u3] || (d3 = a3 = 0) || s3.pop())
              if (1 === o3.nodeType && ++d3 && o3 === e4) {
                i3[p3] = [S2, a3, d3];
                break;
              }
          } else if (f3 && (d3 = a3 = (r3 = (i3 = e4[k2] || (e4[k2] = {}))[p3] || [])[0] === S2 && r3[1]), false === d3) {
            while (o3 = ++a3 && o3 && o3[u3] || (d3 = a3 = 0) || s3.pop())
              if ((m3 ? fe(o3, c3) : 1 === o3.nodeType) && ++d3 && (f3 && ((i3 = o3[k2] || (o3[k2] = {}))[p3] = [S2, d3]), o3 === e4))
                break;
          }
          return (d3 -= g3) === h3 || d3 % h3 == 0 && 0 <= d3 / h3;
        }
      };
    }, PSEUDO: function(e3, o3) {
      var t3, a3 = x2.pseudos[e3] || x2.setFilters[e3.toLowerCase()] || I2.error("unsupported pseudo: " + e3);
      return a3[k2] ? a3(o3) : 1 < a3.length ? (t3 = [e3, e3, "", o3], x2.setFilters.hasOwnProperty(e3.toLowerCase()) ? B2(function(e4, t4) {
        var n3, r3 = a3(e4, o3), i3 = r3.length;
        while (i3--)
          e4[n3 = se.call(e4, r3[i3])] = !(t4[n3] = r3[i3]);
      }) : function(e4) {
        return a3(e4, 0, t3);
      }) : a3;
    } }, pseudos: { not: B2(function(e3) {
      var r3 = [], i3 = [], s3 = ne2(e3.replace(ve, "$1"));
      return s3[k2] ? B2(function(e4, t3, n3, r4) {
        var i4, o3 = s3(e4, null, r4, []), a3 = e4.length;
        while (a3--)
          (i4 = o3[a3]) && (e4[a3] = !(t3[a3] = i4));
      }) : function(e4, t3, n3) {
        return r3[0] = e4, s3(r3, null, n3, i3), r3[0] = null, !i3.pop();
      };
    }), has: B2(function(t3) {
      return function(e3) {
        return 0 < I2(t3, e3).length;
      };
    }), contains: B2(function(t3) {
      return t3 = t3.replace(H2, q2), function(e3) {
        return -1 < (e3.textContent || ce.text(e3)).indexOf(t3);
      };
    }), lang: B2(function(n3) {
      return D2.test(n3 || "") || I2.error("unsupported lang: " + n3), n3 = n3.replace(H2, q2).toLowerCase(), function(e3) {
        var t3;
        do {
          if (t3 = T2 ? e3.lang : e3.getAttribute("xml:lang") || e3.getAttribute("lang"))
            return (t3 = t3.toLowerCase()) === n3 || 0 === t3.indexOf(n3 + "-");
        } while ((e3 = e3.parentNode) && 1 === e3.nodeType);
        return false;
      };
    }), target: function(e3) {
      var t3 = ie.location && ie.location.hash;
      return t3 && t3.slice(1) === e3.id;
    }, root: function(e3) {
      return e3 === r2;
    }, focus: function(e3) {
      return e3 === function() {
        try {
          return C2.activeElement;
        } catch (e4) {
        }
      }() && C2.hasFocus() && !!(e3.type || e3.href || ~e3.tabIndex);
    }, enabled: z2(false), disabled: z2(true), checked: function(e3) {
      return fe(e3, "input") && !!e3.checked || fe(e3, "option") && !!e3.selected;
    }, selected: function(e3) {
      return e3.parentNode && e3.parentNode.selectedIndex, true === e3.selected;
    }, empty: function(e3) {
      for (e3 = e3.firstChild; e3; e3 = e3.nextSibling)
        if (e3.nodeType < 6)
          return false;
      return true;
    }, parent: function(e3) {
      return !x2.pseudos.empty(e3);
    }, header: function(e3) {
      return j2.test(e3.nodeName);
    }, input: function(e3) {
      return L2.test(e3.nodeName);
    }, button: function(e3) {
      return fe(e3, "input") && "button" === e3.type || fe(e3, "button");
    }, text: function(e3) {
      var t3;
      return fe(e3, "input") && "text" === e3.type && (null == (t3 = e3.getAttribute("type")) || "text" === t3.toLowerCase());
    }, first: U2(function() {
      return [0];
    }), last: U2(function(e3, t3) {
      return [t3 - 1];
    }), eq: U2(function(e3, t3, n3) {
      return [n3 < 0 ? n3 + t3 : n3];
    }), even: U2(function(e3, t3) {
      for (var n3 = 0; n3 < t3; n3 += 2)
        e3.push(n3);
      return e3;
    }), odd: U2(function(e3, t3) {
      for (var n3 = 1; n3 < t3; n3 += 2)
        e3.push(n3);
      return e3;
    }), lt: U2(function(e3, t3, n3) {
      var r3;
      for (r3 = n3 < 0 ? n3 + t3 : t3 < n3 ? t3 : n3; 0 <= --r3; )
        e3.push(r3);
      return e3;
    }), gt: U2(function(e3, t3, n3) {
      for (var r3 = n3 < 0 ? n3 + t3 : n3; ++r3 < t3; )
        e3.push(r3);
      return e3;
    }) } }).pseudos.nth = x2.pseudos.eq, { radio: true, checkbox: true, file: true, password: true, image: true })
      x2.pseudos[e2] = $2(e2);
    for (e2 in { submit: true, reset: true })
      x2.pseudos[e2] = _2(e2);
    function Q2() {
    }
    function Y2(e3, t3) {
      var n3, r3, i3, o3, a3, s3, u3, l3 = c2[e3 + " "];
      if (l3)
        return t3 ? 0 : l3.slice(0);
      a3 = e3, s3 = [], u3 = x2.preFilter;
      while (a3) {
        for (o3 in n3 && !(r3 = y2.exec(a3)) || (r3 && (a3 = a3.slice(r3[0].length) || a3), s3.push(i3 = [])), n3 = false, (r3 = m2.exec(a3)) && (n3 = r3.shift(), i3.push({ value: n3, type: r3[0].replace(ve, " ") }), a3 = a3.slice(n3.length)), x2.filter)
          !(r3 = N2[o3].exec(a3)) || u3[o3] && !(r3 = u3[o3](r3)) || (n3 = r3.shift(), i3.push({ value: n3, type: o3, matches: r3 }), a3 = a3.slice(n3.length));
        if (!n3)
          break;
      }
      return t3 ? a3.length : a3 ? I2.error(e3) : c2(e3, s3).slice(0);
    }
    function G2(e3) {
      for (var t3 = 0, n3 = e3.length, r3 = ""; t3 < n3; t3++)
        r3 += e3[t3].value;
      return r3;
    }
    function K2(a3, e3, t3) {
      var s3 = e3.dir, u3 = e3.next, l3 = u3 || s3, c3 = t3 && "parentNode" === l3, f3 = n2++;
      return e3.first ? function(e4, t4, n3) {
        while (e4 = e4[s3])
          if (1 === e4.nodeType || c3)
            return a3(e4, t4, n3);
        return false;
      } : function(e4, t4, n3) {
        var r3, i3, o3 = [S2, f3];
        if (n3) {
          while (e4 = e4[s3])
            if ((1 === e4.nodeType || c3) && a3(e4, t4, n3))
              return true;
        } else
          while (e4 = e4[s3])
            if (1 === e4.nodeType || c3)
              if (i3 = e4[k2] || (e4[k2] = {}), u3 && fe(e4, u3))
                e4 = e4[s3] || e4;
              else {
                if ((r3 = i3[l3]) && r3[0] === S2 && r3[1] === f3)
                  return o3[2] = r3[2];
                if ((i3[l3] = o3)[2] = a3(e4, t4, n3))
                  return true;
              }
        return false;
      };
    }
    function J2(i3) {
      return 1 < i3.length ? function(e3, t3, n3) {
        var r3 = i3.length;
        while (r3--)
          if (!i3[r3](e3, t3, n3))
            return false;
        return true;
      } : i3[0];
    }
    function Z2(e3, t3, n3, r3, i3) {
      for (var o3, a3 = [], s3 = 0, u3 = e3.length, l3 = null != t3; s3 < u3; s3++)
        (o3 = e3[s3]) && (n3 && !n3(o3, r3, i3) || (a3.push(o3), l3 && t3.push(s3)));
      return a3;
    }
    function ee2(p3, h3, g3, v3, y3, e3) {
      return v3 && !v3[k2] && (v3 = ee2(v3)), y3 && !y3[k2] && (y3 = ee2(y3, e3)), B2(function(e4, t3, n3, r3) {
        var i3, o3, a3, s3, u3 = [], l3 = [], c3 = t3.length, f3 = e4 || function(e5, t4, n4) {
          for (var r4 = 0, i4 = t4.length; r4 < i4; r4++)
            I2(e5, t4[r4], n4);
          return n4;
        }(h3 || "*", n3.nodeType ? [n3] : n3, []), d3 = !p3 || !e4 && h3 ? f3 : Z2(f3, u3, p3, n3, r3);
        if (g3 ? g3(d3, s3 = y3 || (e4 ? p3 : c3 || v3) ? [] : t3, n3, r3) : s3 = d3, v3) {
          i3 = Z2(s3, l3), v3(i3, [], n3, r3), o3 = i3.length;
          while (o3--)
            (a3 = i3[o3]) && (s3[l3[o3]] = !(d3[l3[o3]] = a3));
        }
        if (e4) {
          if (y3 || p3) {
            if (y3) {
              i3 = [], o3 = s3.length;
              while (o3--)
                (a3 = s3[o3]) && i3.push(d3[o3] = a3);
              y3(null, s3 = [], i3, r3);
            }
            o3 = s3.length;
            while (o3--)
              (a3 = s3[o3]) && -1 < (i3 = y3 ? se.call(e4, a3) : u3[o3]) && (e4[i3] = !(t3[i3] = a3));
          }
        } else
          s3 = Z2(s3 === t3 ? s3.splice(c3, s3.length) : s3), y3 ? y3(null, t3, s3, r3) : E2.apply(t3, s3);
      });
    }
    function te2(e3) {
      for (var i3, t3, n3, r3 = e3.length, o3 = x2.relative[e3[0].type], a3 = o3 || x2.relative[" "], s3 = o3 ? 1 : 0, u3 = K2(function(e4) {
        return e4 === i3;
      }, a3, true), l3 = K2(function(e4) {
        return -1 < se.call(i3, e4);
      }, a3, true), c3 = [function(e4, t4, n4) {
        var r4 = !o3 && (n4 || t4 != w2) || ((i3 = t4).nodeType ? u3(e4, t4, n4) : l3(e4, t4, n4));
        return i3 = null, r4;
      }]; s3 < r3; s3++)
        if (t3 = x2.relative[e3[s3].type])
          c3 = [K2(J2(c3), t3)];
        else {
          if ((t3 = x2.filter[e3[s3].type].apply(null, e3[s3].matches))[k2]) {
            for (n3 = ++s3; n3 < r3; n3++)
              if (x2.relative[e3[n3].type])
                break;
            return ee2(1 < s3 && J2(c3), 1 < s3 && G2(e3.slice(0, s3 - 1).concat({ value: " " === e3[s3 - 2].type ? "*" : "" })).replace(ve, "$1"), t3, s3 < n3 && te2(e3.slice(s3, n3)), n3 < r3 && te2(e3 = e3.slice(n3)), n3 < r3 && G2(e3));
          }
          c3.push(t3);
        }
      return J2(c3);
    }
    function ne2(e3, t3) {
      var n3, v3, y3, m3, b3, r3, i3 = [], o3 = [], a3 = u2[e3 + " "];
      if (!a3) {
        t3 || (t3 = Y2(e3)), n3 = t3.length;
        while (n3--)
          (a3 = te2(t3[n3]))[k2] ? i3.push(a3) : o3.push(a3);
        (a3 = u2(e3, (v3 = o3, m3 = 0 < (y3 = i3).length, b3 = 0 < v3.length, r3 = function(e4, t4, n4, r4, i4) {
          var o4, a4, s3, u3 = 0, l3 = "0", c3 = e4 && [], f3 = [], d3 = w2, p3 = e4 || b3 && x2.find.TAG("*", i4), h3 = S2 += null == d3 ? 1 : Math.random() || 0.1, g3 = p3.length;
          for (i4 && (w2 = t4 == C2 || t4 || i4); l3 !== g3 && null != (o4 = p3[l3]); l3++) {
            if (b3 && o4) {
              a4 = 0, t4 || o4.ownerDocument == C2 || (V2(o4), n4 = !T2);
              while (s3 = v3[a4++])
                if (s3(o4, t4 || C2, n4)) {
                  E2.call(r4, o4);
                  break;
                }
              i4 && (S2 = h3);
            }
            m3 && ((o4 = !s3 && o4) && u3--, e4 && c3.push(o4));
          }
          if (u3 += l3, m3 && l3 !== u3) {
            a4 = 0;
            while (s3 = y3[a4++])
              s3(c3, f3, t4, n4);
            if (e4) {
              if (0 < u3)
                while (l3--)
                  c3[l3] || f3[l3] || (f3[l3] = de.call(r4));
              f3 = Z2(f3);
            }
            E2.apply(r4, f3), i4 && !e4 && 0 < f3.length && 1 < u3 + y3.length && ce.uniqueSort(r4);
          }
          return i4 && (S2 = h3, w2 = d3), c3;
        }, m3 ? B2(r3) : r3))).selector = e3;
      }
      return a3;
    }
    function re2(e3, t3, n3, r3) {
      var i3, o3, a3, s3, u3, l3 = "function" == typeof e3 && e3, c3 = !r3 && Y2(e3 = l3.selector || e3);
      if (n3 = n3 || [], 1 === c3.length) {
        if (2 < (o3 = c3[0] = c3[0].slice(0)).length && "ID" === (a3 = o3[0]).type && 9 === t3.nodeType && T2 && x2.relative[o3[1].type]) {
          if (!(t3 = (x2.find.ID(a3.matches[0].replace(H2, q2), t3) || [])[0]))
            return n3;
          l3 && (t3 = t3.parentNode), e3 = e3.slice(o3.shift().value.length);
        }
        i3 = N2.needsContext.test(e3) ? 0 : o3.length;
        while (i3--) {
          if (a3 = o3[i3], x2.relative[s3 = a3.type])
            break;
          if ((u3 = x2.find[s3]) && (r3 = u3(a3.matches[0].replace(H2, q2), P2.test(o3[0].type) && X2(t3.parentNode) || t3))) {
            if (o3.splice(i3, 1), !(e3 = r3.length && G2(o3)))
              return E2.apply(n3, r3), n3;
            break;
          }
        }
      }
      return (l3 || ne2(e3, c3))(r3, t3, !T2, n3, !t3 || P2.test(e3) && X2(t3.parentNode) || t3), n3;
    }
    Q2.prototype = x2.filters = x2.pseudos, x2.setFilters = new Q2(), le.sortStable = k2.split("").sort(l2).join("") === k2, V2(), le.sortDetached = F2(function(e3) {
      return 1 & e3.compareDocumentPosition(C2.createElement("fieldset"));
    }), ce.find = I2, ce.expr[":"] = ce.expr.pseudos, ce.unique = ce.uniqueSort, I2.compile = ne2, I2.select = re2, I2.setDocument = V2, I2.tokenize = Y2, I2.escape = ce.escapeSelector, I2.getText = ce.text, I2.isXML = ce.isXMLDoc, I2.selectors = ce.expr, I2.support = ce.support, I2.uniqueSort = ce.uniqueSort;
  }();
  var p = function(e2, t2, n2) {
    var r2 = [], i2 = void 0 !== n2;
    while ((e2 = e2[t2]) && 9 !== e2.nodeType)
      if (1 === e2.nodeType) {
        if (i2 && ce(e2).is(n2))
          break;
        r2.push(e2);
      }
    return r2;
  }, h = function(e2, t2) {
    for (var n2 = []; e2; e2 = e2.nextSibling)
      1 === e2.nodeType && e2 !== t2 && n2.push(e2);
    return n2;
  }, w = ce.expr.match.needsContext, C = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function T(e2, n2, r2) {
    return v(n2) ? ce.grep(e2, function(e3, t2) {
      return !!n2.call(e3, t2, e3) !== r2;
    }) : n2.nodeType ? ce.grep(e2, function(e3) {
      return e3 === n2 !== r2;
    }) : "string" != typeof n2 ? ce.grep(e2, function(e3) {
      return -1 < se.call(n2, e3) !== r2;
    }) : ce.filter(n2, e2, r2);
  }
  ce.filter = function(e2, t2, n2) {
    var r2 = t2[0];
    return n2 && (e2 = ":not(" + e2 + ")"), 1 === t2.length && 1 === r2.nodeType ? ce.find.matchesSelector(r2, e2) ? [r2] : [] : ce.find.matches(e2, ce.grep(t2, function(e3) {
      return 1 === e3.nodeType;
    }));
  }, ce.fn.extend({ find: function(e2) {
    var t2, n2, r2 = this.length, i2 = this;
    if ("string" != typeof e2)
      return this.pushStack(ce(e2).filter(function() {
        for (t2 = 0; t2 < r2; t2++)
          if (ce.contains(i2[t2], this))
            return true;
      }));
    for (n2 = this.pushStack([]), t2 = 0; t2 < r2; t2++)
      ce.find(e2, i2[t2], n2);
    return 1 < r2 ? ce.uniqueSort(n2) : n2;
  }, filter: function(e2) {
    return this.pushStack(T(this, e2 || [], false));
  }, not: function(e2) {
    return this.pushStack(T(this, e2 || [], true));
  }, is: function(e2) {
    return !!T(this, "string" == typeof e2 && w.test(e2) ? ce(e2) : e2 || [], false).length;
  } });
  var E, k = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (ce.fn.init = function(e2, t2, n2) {
    var r2, i2;
    if (!e2)
      return this;
    if (n2 = n2 || E, "string" == typeof e2) {
      if (!(r2 = "<" === e2[0] && ">" === e2[e2.length - 1] && 3 <= e2.length ? [null, e2, null] : k.exec(e2)) || !r2[1] && t2)
        return !t2 || t2.jquery ? (t2 || n2).find(e2) : this.constructor(t2).find(e2);
      if (r2[1]) {
        if (t2 = t2 instanceof ce ? t2[0] : t2, ce.merge(this, ce.parseHTML(r2[1], t2 && t2.nodeType ? t2.ownerDocument || t2 : m, true)), C.test(r2[1]) && ce.isPlainObject(t2))
          for (r2 in t2)
            v(this[r2]) ? this[r2](t2[r2]) : this.attr(r2, t2[r2]);
        return this;
      }
      return (i2 = m.getElementById(r2[2])) && (this[0] = i2, this.length = 1), this;
    }
    return e2.nodeType ? (this[0] = e2, this.length = 1, this) : v(e2) ? void 0 !== n2.ready ? n2.ready(e2) : e2(ce) : ce.makeArray(e2, this);
  }).prototype = ce.fn, E = ce(m);
  var S = /^(?:parents|prev(?:Until|All))/, A = { children: true, contents: true, next: true, prev: true };
  function D(e2, t2) {
    while ((e2 = e2[t2]) && 1 !== e2.nodeType)
      ;
    return e2;
  }
  ce.fn.extend({ has: function(e2) {
    var t2 = ce(e2, this), n2 = t2.length;
    return this.filter(function() {
      for (var e3 = 0; e3 < n2; e3++)
        if (ce.contains(this, t2[e3]))
          return true;
    });
  }, closest: function(e2, t2) {
    var n2, r2 = 0, i2 = this.length, o2 = [], a2 = "string" != typeof e2 && ce(e2);
    if (!w.test(e2)) {
      for (; r2 < i2; r2++)
        for (n2 = this[r2]; n2 && n2 !== t2; n2 = n2.parentNode)
          if (n2.nodeType < 11 && (a2 ? -1 < a2.index(n2) : 1 === n2.nodeType && ce.find.matchesSelector(n2, e2))) {
            o2.push(n2);
            break;
          }
    }
    return this.pushStack(1 < o2.length ? ce.uniqueSort(o2) : o2);
  }, index: function(e2) {
    return e2 ? "string" == typeof e2 ? se.call(ce(e2), this[0]) : se.call(this, e2.jquery ? e2[0] : e2) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
  }, add: function(e2, t2) {
    return this.pushStack(ce.uniqueSort(ce.merge(this.get(), ce(e2, t2))));
  }, addBack: function(e2) {
    return this.add(null == e2 ? this.prevObject : this.prevObject.filter(e2));
  } }), ce.each({ parent: function(e2) {
    var t2 = e2.parentNode;
    return t2 && 11 !== t2.nodeType ? t2 : null;
  }, parents: function(e2) {
    return p(e2, "parentNode");
  }, parentsUntil: function(e2, t2, n2) {
    return p(e2, "parentNode", n2);
  }, next: function(e2) {
    return D(e2, "nextSibling");
  }, prev: function(e2) {
    return D(e2, "previousSibling");
  }, nextAll: function(e2) {
    return p(e2, "nextSibling");
  }, prevAll: function(e2) {
    return p(e2, "previousSibling");
  }, nextUntil: function(e2, t2, n2) {
    return p(e2, "nextSibling", n2);
  }, prevUntil: function(e2, t2, n2) {
    return p(e2, "previousSibling", n2);
  }, siblings: function(e2) {
    return h((e2.parentNode || {}).firstChild, e2);
  }, children: function(e2) {
    return h(e2.firstChild);
  }, contents: function(e2) {
    return null != e2.contentDocument && r(e2.contentDocument) ? e2.contentDocument : (fe(e2, "template") && (e2 = e2.content || e2), ce.merge([], e2.childNodes));
  } }, function(r2, i2) {
    ce.fn[r2] = function(e2, t2) {
      var n2 = ce.map(this, i2, e2);
      return "Until" !== r2.slice(-5) && (t2 = e2), t2 && "string" == typeof t2 && (n2 = ce.filter(t2, n2)), 1 < this.length && (A[r2] || ce.uniqueSort(n2), S.test(r2) && n2.reverse()), this.pushStack(n2);
    };
  });
  var N = /[^\x20\t\r\n\f]+/g;
  function L(e2) {
    return e2;
  }
  function j(e2) {
    throw e2;
  }
  function O(e2, t2, n2, r2) {
    var i2;
    try {
      e2 && v(i2 = e2.promise) ? i2.call(e2).done(t2).fail(n2) : e2 && v(i2 = e2.then) ? i2.call(e2, t2, n2) : t2.apply(void 0, [e2].slice(r2));
    } catch (e3) {
      n2.apply(void 0, [e3]);
    }
  }
  ce.Callbacks = function(r2) {
    var e2, n2;
    r2 = "string" == typeof r2 ? (e2 = r2, n2 = {}, ce.each(e2.match(N) || [], function(e3, t3) {
      n2[t3] = true;
    }), n2) : ce.extend({}, r2);
    var i2, t2, o2, a2, s2 = [], u2 = [], l2 = -1, c2 = function() {
      for (a2 = a2 || r2.once, o2 = i2 = true; u2.length; l2 = -1) {
        t2 = u2.shift();
        while (++l2 < s2.length)
          false === s2[l2].apply(t2[0], t2[1]) && r2.stopOnFalse && (l2 = s2.length, t2 = false);
      }
      r2.memory || (t2 = false), i2 = false, a2 && (s2 = t2 ? [] : "");
    }, f2 = { add: function() {
      return s2 && (t2 && !i2 && (l2 = s2.length - 1, u2.push(t2)), function n3(e3) {
        ce.each(e3, function(e4, t3) {
          v(t3) ? r2.unique && f2.has(t3) || s2.push(t3) : t3 && t3.length && "string" !== x(t3) && n3(t3);
        });
      }(arguments), t2 && !i2 && c2()), this;
    }, remove: function() {
      return ce.each(arguments, function(e3, t3) {
        var n3;
        while (-1 < (n3 = ce.inArray(t3, s2, n3)))
          s2.splice(n3, 1), n3 <= l2 && l2--;
      }), this;
    }, has: function(e3) {
      return e3 ? -1 < ce.inArray(e3, s2) : 0 < s2.length;
    }, empty: function() {
      return s2 && (s2 = []), this;
    }, disable: function() {
      return a2 = u2 = [], s2 = t2 = "", this;
    }, disabled: function() {
      return !s2;
    }, lock: function() {
      return a2 = u2 = [], t2 || i2 || (s2 = t2 = ""), this;
    }, locked: function() {
      return !!a2;
    }, fireWith: function(e3, t3) {
      return a2 || (t3 = [e3, (t3 = t3 || []).slice ? t3.slice() : t3], u2.push(t3), i2 || c2()), this;
    }, fire: function() {
      return f2.fireWith(this, arguments), this;
    }, fired: function() {
      return !!o2;
    } };
    return f2;
  }, ce.extend({ Deferred: function(e2) {
    var o2 = [["notify", "progress", ce.Callbacks("memory"), ce.Callbacks("memory"), 2], ["resolve", "done", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 1, "rejected"]], i2 = "pending", a2 = { state: function() {
      return i2;
    }, always: function() {
      return s2.done(arguments).fail(arguments), this;
    }, "catch": function(e3) {
      return a2.then(null, e3);
    }, pipe: function() {
      var i3 = arguments;
      return ce.Deferred(function(r2) {
        ce.each(o2, function(e3, t2) {
          var n2 = v(i3[t2[4]]) && i3[t2[4]];
          s2[t2[1]](function() {
            var e4 = n2 && n2.apply(this, arguments);
            e4 && v(e4.promise) ? e4.promise().progress(r2.notify).done(r2.resolve).fail(r2.reject) : r2[t2[0] + "With"](this, n2 ? [e4] : arguments);
          });
        }), i3 = null;
      }).promise();
    }, then: function(t2, n2, r2) {
      var u2 = 0;
      function l2(i3, o3, a3, s3) {
        return function() {
          var n3 = this, r3 = arguments, e3 = function() {
            var e4, t4;
            if (!(i3 < u2)) {
              if ((e4 = a3.apply(n3, r3)) === o3.promise())
                throw new TypeError("Thenable self-resolution");
              t4 = e4 && ("object" == typeof e4 || "function" == typeof e4) && e4.then, v(t4) ? s3 ? t4.call(e4, l2(u2, o3, L, s3), l2(u2, o3, j, s3)) : (u2++, t4.call(e4, l2(u2, o3, L, s3), l2(u2, o3, j, s3), l2(u2, o3, L, o3.notifyWith))) : (a3 !== L && (n3 = void 0, r3 = [e4]), (s3 || o3.resolveWith)(n3, r3));
            }
          }, t3 = s3 ? e3 : function() {
            try {
              e3();
            } catch (e4) {
              ce.Deferred.exceptionHook && ce.Deferred.exceptionHook(e4, t3.error), u2 <= i3 + 1 && (a3 !== j && (n3 = void 0, r3 = [e4]), o3.rejectWith(n3, r3));
            }
          };
          i3 ? t3() : (ce.Deferred.getErrorHook ? t3.error = ce.Deferred.getErrorHook() : ce.Deferred.getStackHook && (t3.error = ce.Deferred.getStackHook()), ie.setTimeout(t3));
        };
      }
      return ce.Deferred(function(e3) {
        o2[0][3].add(l2(0, e3, v(r2) ? r2 : L, e3.notifyWith)), o2[1][3].add(l2(0, e3, v(t2) ? t2 : L)), o2[2][3].add(l2(0, e3, v(n2) ? n2 : j));
      }).promise();
    }, promise: function(e3) {
      return null != e3 ? ce.extend(e3, a2) : a2;
    } }, s2 = {};
    return ce.each(o2, function(e3, t2) {
      var n2 = t2[2], r2 = t2[5];
      a2[t2[1]] = n2.add, r2 && n2.add(function() {
        i2 = r2;
      }, o2[3 - e3][2].disable, o2[3 - e3][3].disable, o2[0][2].lock, o2[0][3].lock), n2.add(t2[3].fire), s2[t2[0]] = function() {
        return s2[t2[0] + "With"](this === s2 ? void 0 : this, arguments), this;
      }, s2[t2[0] + "With"] = n2.fireWith;
    }), a2.promise(s2), e2 && e2.call(s2, s2), s2;
  }, when: function(e2) {
    var n2 = arguments.length, t2 = n2, r2 = Array(t2), i2 = ae.call(arguments), o2 = ce.Deferred(), a2 = function(t3) {
      return function(e3) {
        r2[t3] = this, i2[t3] = 1 < arguments.length ? ae.call(arguments) : e3, --n2 || o2.resolveWith(r2, i2);
      };
    };
    if (n2 <= 1 && (O(e2, o2.done(a2(t2)).resolve, o2.reject, !n2), "pending" === o2.state() || v(i2[t2] && i2[t2].then)))
      return o2.then();
    while (t2--)
      O(i2[t2], a2(t2), o2.reject);
    return o2.promise();
  } });
  var P = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  ce.Deferred.exceptionHook = function(e2, t2) {
    ie.console && ie.console.warn && e2 && P.test(e2.name) && ie.console.warn("jQuery.Deferred exception: " + e2.message, e2.stack, t2);
  }, ce.readyException = function(e2) {
    ie.setTimeout(function() {
      throw e2;
    });
  };
  var H = ce.Deferred();
  function q() {
    m.removeEventListener("DOMContentLoaded", q), ie.removeEventListener("load", q), ce.ready();
  }
  ce.fn.ready = function(e2) {
    return H.then(e2)["catch"](function(e3) {
      ce.readyException(e3);
    }), this;
  }, ce.extend({ isReady: false, readyWait: 1, ready: function(e2) {
    (true === e2 ? --ce.readyWait : ce.isReady) || (ce.isReady = true) !== e2 && 0 < --ce.readyWait || H.resolveWith(m, [ce]);
  } }), ce.ready.then = H.then, "complete" === m.readyState || "loading" !== m.readyState && !m.documentElement.doScroll ? ie.setTimeout(ce.ready) : (m.addEventListener("DOMContentLoaded", q), ie.addEventListener("load", q));
  var R = function(e2, t2, n2, r2, i2, o2, a2) {
    var s2 = 0, u2 = e2.length, l2 = null == n2;
    if ("object" === x(n2))
      for (s2 in i2 = true, n2)
        R(e2, t2, s2, n2[s2], true, o2, a2);
    else if (void 0 !== r2 && (i2 = true, v(r2) || (a2 = true), l2 && (a2 ? (t2.call(e2, r2), t2 = null) : (l2 = t2, t2 = function(e3, t3, n3) {
      return l2.call(ce(e3), n3);
    })), t2))
      for (; s2 < u2; s2++)
        t2(e2[s2], n2, a2 ? r2 : r2.call(e2[s2], s2, t2(e2[s2], n2)));
    return i2 ? e2 : l2 ? t2.call(e2) : u2 ? t2(e2[0], n2) : o2;
  }, M = /^-ms-/, I = /-([a-z])/g;
  function W(e2, t2) {
    return t2.toUpperCase();
  }
  function B(e2) {
    return e2.replace(M, "ms-").replace(I, W);
  }
  var F = function(e2) {
    return 1 === e2.nodeType || 9 === e2.nodeType || !+e2.nodeType;
  };
  function $() {
    this.expando = ce.expando + $.uid++;
  }
  $.uid = 1, $.prototype = { cache: function(e2) {
    var t2 = e2[this.expando];
    return t2 || (t2 = {}, F(e2) && (e2.nodeType ? e2[this.expando] = t2 : Object.defineProperty(e2, this.expando, { value: t2, configurable: true }))), t2;
  }, set: function(e2, t2, n2) {
    var r2, i2 = this.cache(e2);
    if ("string" == typeof t2)
      i2[B(t2)] = n2;
    else
      for (r2 in t2)
        i2[B(r2)] = t2[r2];
    return i2;
  }, get: function(e2, t2) {
    return void 0 === t2 ? this.cache(e2) : e2[this.expando] && e2[this.expando][B(t2)];
  }, access: function(e2, t2, n2) {
    return void 0 === t2 || t2 && "string" == typeof t2 && void 0 === n2 ? this.get(e2, t2) : (this.set(e2, t2, n2), void 0 !== n2 ? n2 : t2);
  }, remove: function(e2, t2) {
    var n2, r2 = e2[this.expando];
    if (void 0 !== r2) {
      if (void 0 !== t2) {
        n2 = (t2 = Array.isArray(t2) ? t2.map(B) : (t2 = B(t2)) in r2 ? [t2] : t2.match(N) || []).length;
        while (n2--)
          delete r2[t2[n2]];
      }
      (void 0 === t2 || ce.isEmptyObject(r2)) && (e2.nodeType ? e2[this.expando] = void 0 : delete e2[this.expando]);
    }
  }, hasData: function(e2) {
    var t2 = e2[this.expando];
    return void 0 !== t2 && !ce.isEmptyObject(t2);
  } };
  var _ = new $(), z = new $(), U = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, X = /[A-Z]/g;
  function V(e2, t2, n2) {
    var r2, i2;
    if (void 0 === n2 && 1 === e2.nodeType)
      if (r2 = "data-" + t2.replace(X, "-$&").toLowerCase(), "string" == typeof (n2 = e2.getAttribute(r2))) {
        try {
          n2 = "true" === (i2 = n2) || "false" !== i2 && ("null" === i2 ? null : i2 === +i2 + "" ? +i2 : U.test(i2) ? JSON.parse(i2) : i2);
        } catch (e3) {
        }
        z.set(e2, t2, n2);
      } else
        n2 = void 0;
    return n2;
  }
  ce.extend({ hasData: function(e2) {
    return z.hasData(e2) || _.hasData(e2);
  }, data: function(e2, t2, n2) {
    return z.access(e2, t2, n2);
  }, removeData: function(e2, t2) {
    z.remove(e2, t2);
  }, _data: function(e2, t2, n2) {
    return _.access(e2, t2, n2);
  }, _removeData: function(e2, t2) {
    _.remove(e2, t2);
  } }), ce.fn.extend({ data: function(n2, e2) {
    var t2, r2, i2, o2 = this[0], a2 = o2 && o2.attributes;
    if (void 0 === n2) {
      if (this.length && (i2 = z.get(o2), 1 === o2.nodeType && !_.get(o2, "hasDataAttrs"))) {
        t2 = a2.length;
        while (t2--)
          a2[t2] && 0 === (r2 = a2[t2].name).indexOf("data-") && (r2 = B(r2.slice(5)), V(o2, r2, i2[r2]));
        _.set(o2, "hasDataAttrs", true);
      }
      return i2;
    }
    return "object" == typeof n2 ? this.each(function() {
      z.set(this, n2);
    }) : R(this, function(e3) {
      var t3;
      if (o2 && void 0 === e3)
        return void 0 !== (t3 = z.get(o2, n2)) ? t3 : void 0 !== (t3 = V(o2, n2)) ? t3 : void 0;
      this.each(function() {
        z.set(this, n2, e3);
      });
    }, null, e2, 1 < arguments.length, null, true);
  }, removeData: function(e2) {
    return this.each(function() {
      z.remove(this, e2);
    });
  } }), ce.extend({ queue: function(e2, t2, n2) {
    var r2;
    if (e2)
      return t2 = (t2 || "fx") + "queue", r2 = _.get(e2, t2), n2 && (!r2 || Array.isArray(n2) ? r2 = _.access(e2, t2, ce.makeArray(n2)) : r2.push(n2)), r2 || [];
  }, dequeue: function(e2, t2) {
    t2 = t2 || "fx";
    var n2 = ce.queue(e2, t2), r2 = n2.length, i2 = n2.shift(), o2 = ce._queueHooks(e2, t2);
    "inprogress" === i2 && (i2 = n2.shift(), r2--), i2 && ("fx" === t2 && n2.unshift("inprogress"), delete o2.stop, i2.call(e2, function() {
      ce.dequeue(e2, t2);
    }, o2)), !r2 && o2 && o2.empty.fire();
  }, _queueHooks: function(e2, t2) {
    var n2 = t2 + "queueHooks";
    return _.get(e2, n2) || _.access(e2, n2, { empty: ce.Callbacks("once memory").add(function() {
      _.remove(e2, [t2 + "queue", n2]);
    }) });
  } }), ce.fn.extend({ queue: function(t2, n2) {
    var e2 = 2;
    return "string" != typeof t2 && (n2 = t2, t2 = "fx", e2--), arguments.length < e2 ? ce.queue(this[0], t2) : void 0 === n2 ? this : this.each(function() {
      var e3 = ce.queue(this, t2, n2);
      ce._queueHooks(this, t2), "fx" === t2 && "inprogress" !== e3[0] && ce.dequeue(this, t2);
    });
  }, dequeue: function(e2) {
    return this.each(function() {
      ce.dequeue(this, e2);
    });
  }, clearQueue: function(e2) {
    return this.queue(e2 || "fx", []);
  }, promise: function(e2, t2) {
    var n2, r2 = 1, i2 = ce.Deferred(), o2 = this, a2 = this.length, s2 = function() {
      --r2 || i2.resolveWith(o2, [o2]);
    };
    "string" != typeof e2 && (t2 = e2, e2 = void 0), e2 = e2 || "fx";
    while (a2--)
      (n2 = _.get(o2[a2], e2 + "queueHooks")) && n2.empty && (r2++, n2.empty.add(s2));
    return s2(), i2.promise(t2);
  } });
  var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Y = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"), G = ["Top", "Right", "Bottom", "Left"], K = m.documentElement, J = function(e2) {
    return ce.contains(e2.ownerDocument, e2);
  }, Z = { composed: true };
  K.getRootNode && (J = function(e2) {
    return ce.contains(e2.ownerDocument, e2) || e2.getRootNode(Z) === e2.ownerDocument;
  });
  var ee = function(e2, t2) {
    return "none" === (e2 = t2 || e2).style.display || "" === e2.style.display && J(e2) && "none" === ce.css(e2, "display");
  };
  var te = {};
  function ne(e2, t2) {
    for (var n2, r2, i2, o2, a2, s2, u2, l2 = [], c2 = 0, f2 = e2.length; c2 < f2; c2++)
      (r2 = e2[c2]).style && (n2 = r2.style.display, t2 ? ("none" === n2 && (l2[c2] = _.get(r2, "display") || null, l2[c2] || (r2.style.display = "")), "" === r2.style.display && ee(r2) && (l2[c2] = (u2 = a2 = o2 = void 0, a2 = (i2 = r2).ownerDocument, s2 = i2.nodeName, (u2 = te[s2]) || (o2 = a2.body.appendChild(a2.createElement(s2)), u2 = ce.css(o2, "display"), o2.parentNode.removeChild(o2), "none" === u2 && (u2 = "block"), te[s2] = u2)))) : "none" !== n2 && (l2[c2] = "none", _.set(r2, "display", n2)));
    for (c2 = 0; c2 < f2; c2++)
      null != l2[c2] && (e2[c2].style.display = l2[c2]);
    return e2;
  }
  ce.fn.extend({ show: function() {
    return ne(this, true);
  }, hide: function() {
    return ne(this);
  }, toggle: function(e2) {
    return "boolean" == typeof e2 ? e2 ? this.show() : this.hide() : this.each(function() {
      ee(this) ? ce(this).show() : ce(this).hide();
    });
  } });
  var re, be, xe = /^(?:checkbox|radio)$/i, we = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, Ce = /^$|^module$|\/(?:java|ecma)script/i;
  re = m.createDocumentFragment().appendChild(m.createElement("div")), (be = m.createElement("input")).setAttribute("type", "radio"), be.setAttribute("checked", "checked"), be.setAttribute("name", "t"), re.appendChild(be), le.checkClone = re.cloneNode(true).cloneNode(true).lastChild.checked, re.innerHTML = "<textarea>x</textarea>", le.noCloneChecked = !!re.cloneNode(true).lastChild.defaultValue, re.innerHTML = "<option></option>", le.option = !!re.lastChild;
  var Te = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
  function Ee(e2, t2) {
    var n2;
    return n2 = "undefined" != typeof e2.getElementsByTagName ? e2.getElementsByTagName(t2 || "*") : "undefined" != typeof e2.querySelectorAll ? e2.querySelectorAll(t2 || "*") : [], void 0 === t2 || t2 && fe(e2, t2) ? ce.merge([e2], n2) : n2;
  }
  function ke(e2, t2) {
    for (var n2 = 0, r2 = e2.length; n2 < r2; n2++)
      _.set(e2[n2], "globalEval", !t2 || _.get(t2[n2], "globalEval"));
  }
  Te.tbody = Te.tfoot = Te.colgroup = Te.caption = Te.thead, Te.th = Te.td, le.option || (Te.optgroup = Te.option = [1, "<select multiple='multiple'>", "</select>"]);
  var Se = /<|&#?\w+;/;
  function Ae(e2, t2, n2, r2, i2) {
    for (var o2, a2, s2, u2, l2, c2, f2 = t2.createDocumentFragment(), d2 = [], p2 = 0, h2 = e2.length; p2 < h2; p2++)
      if ((o2 = e2[p2]) || 0 === o2)
        if ("object" === x(o2))
          ce.merge(d2, o2.nodeType ? [o2] : o2);
        else if (Se.test(o2)) {
          a2 = a2 || f2.appendChild(t2.createElement("div")), s2 = (we.exec(o2) || ["", ""])[1].toLowerCase(), u2 = Te[s2] || Te._default, a2.innerHTML = u2[1] + ce.htmlPrefilter(o2) + u2[2], c2 = u2[0];
          while (c2--)
            a2 = a2.lastChild;
          ce.merge(d2, a2.childNodes), (a2 = f2.firstChild).textContent = "";
        } else
          d2.push(t2.createTextNode(o2));
    f2.textContent = "", p2 = 0;
    while (o2 = d2[p2++])
      if (r2 && -1 < ce.inArray(o2, r2))
        i2 && i2.push(o2);
      else if (l2 = J(o2), a2 = Ee(f2.appendChild(o2), "script"), l2 && ke(a2), n2) {
        c2 = 0;
        while (o2 = a2[c2++])
          Ce.test(o2.type || "") && n2.push(o2);
      }
    return f2;
  }
  var De = /^([^.]*)(?:\.(.+)|)/;
  function Ne() {
    return true;
  }
  function Le() {
    return false;
  }
  function je(e2, t2, n2, r2, i2, o2) {
    var a2, s2;
    if ("object" == typeof t2) {
      for (s2 in "string" != typeof n2 && (r2 = r2 || n2, n2 = void 0), t2)
        je(e2, s2, n2, r2, t2[s2], o2);
      return e2;
    }
    if (null == r2 && null == i2 ? (i2 = n2, r2 = n2 = void 0) : null == i2 && ("string" == typeof n2 ? (i2 = r2, r2 = void 0) : (i2 = r2, r2 = n2, n2 = void 0)), false === i2)
      i2 = Le;
    else if (!i2)
      return e2;
    return 1 === o2 && (a2 = i2, (i2 = function(e3) {
      return ce().off(e3), a2.apply(this, arguments);
    }).guid = a2.guid || (a2.guid = ce.guid++)), e2.each(function() {
      ce.event.add(this, t2, i2, r2, n2);
    });
  }
  function Oe(e2, r2, t2) {
    t2 ? (_.set(e2, r2, false), ce.event.add(e2, r2, { namespace: false, handler: function(e3) {
      var t3, n2 = _.get(this, r2);
      if (1 & e3.isTrigger && this[r2]) {
        if (n2)
          (ce.event.special[r2] || {}).delegateType && e3.stopPropagation();
        else if (n2 = ae.call(arguments), _.set(this, r2, n2), this[r2](), t3 = _.get(this, r2), _.set(this, r2, false), n2 !== t3)
          return e3.stopImmediatePropagation(), e3.preventDefault(), t3;
      } else
        n2 && (_.set(this, r2, ce.event.trigger(n2[0], n2.slice(1), this)), e3.stopPropagation(), e3.isImmediatePropagationStopped = Ne);
    } })) : void 0 === _.get(e2, r2) && ce.event.add(e2, r2, Ne);
  }
  ce.event = { global: {}, add: function(t2, e2, n2, r2, i2) {
    var o2, a2, s2, u2, l2, c2, f2, d2, p2, h2, g2, v2 = _.get(t2);
    if (F(t2)) {
      n2.handler && (n2 = (o2 = n2).handler, i2 = o2.selector), i2 && ce.find.matchesSelector(K, i2), n2.guid || (n2.guid = ce.guid++), (u2 = v2.events) || (u2 = v2.events = /* @__PURE__ */ Object.create(null)), (a2 = v2.handle) || (a2 = v2.handle = function(e3) {
        return "undefined" != typeof ce && ce.event.triggered !== e3.type ? ce.event.dispatch.apply(t2, arguments) : void 0;
      }), l2 = (e2 = (e2 || "").match(N) || [""]).length;
      while (l2--)
        p2 = g2 = (s2 = De.exec(e2[l2]) || [])[1], h2 = (s2[2] || "").split(".").sort(), p2 && (f2 = ce.event.special[p2] || {}, p2 = (i2 ? f2.delegateType : f2.bindType) || p2, f2 = ce.event.special[p2] || {}, c2 = ce.extend({ type: p2, origType: g2, data: r2, handler: n2, guid: n2.guid, selector: i2, needsContext: i2 && ce.expr.match.needsContext.test(i2), namespace: h2.join(".") }, o2), (d2 = u2[p2]) || ((d2 = u2[p2] = []).delegateCount = 0, f2.setup && false !== f2.setup.call(t2, r2, h2, a2) || t2.addEventListener && t2.addEventListener(p2, a2)), f2.add && (f2.add.call(t2, c2), c2.handler.guid || (c2.handler.guid = n2.guid)), i2 ? d2.splice(d2.delegateCount++, 0, c2) : d2.push(c2), ce.event.global[p2] = true);
    }
  }, remove: function(e2, t2, n2, r2, i2) {
    var o2, a2, s2, u2, l2, c2, f2, d2, p2, h2, g2, v2 = _.hasData(e2) && _.get(e2);
    if (v2 && (u2 = v2.events)) {
      l2 = (t2 = (t2 || "").match(N) || [""]).length;
      while (l2--)
        if (p2 = g2 = (s2 = De.exec(t2[l2]) || [])[1], h2 = (s2[2] || "").split(".").sort(), p2) {
          f2 = ce.event.special[p2] || {}, d2 = u2[p2 = (r2 ? f2.delegateType : f2.bindType) || p2] || [], s2 = s2[2] && new RegExp("(^|\\.)" + h2.join("\\.(?:.*\\.|)") + "(\\.|$)"), a2 = o2 = d2.length;
          while (o2--)
            c2 = d2[o2], !i2 && g2 !== c2.origType || n2 && n2.guid !== c2.guid || s2 && !s2.test(c2.namespace) || r2 && r2 !== c2.selector && ("**" !== r2 || !c2.selector) || (d2.splice(o2, 1), c2.selector && d2.delegateCount--, f2.remove && f2.remove.call(e2, c2));
          a2 && !d2.length && (f2.teardown && false !== f2.teardown.call(e2, h2, v2.handle) || ce.removeEvent(e2, p2, v2.handle), delete u2[p2]);
        } else
          for (p2 in u2)
            ce.event.remove(e2, p2 + t2[l2], n2, r2, true);
      ce.isEmptyObject(u2) && _.remove(e2, "handle events");
    }
  }, dispatch: function(e2) {
    var t2, n2, r2, i2, o2, a2, s2 = new Array(arguments.length), u2 = ce.event.fix(e2), l2 = (_.get(this, "events") || /* @__PURE__ */ Object.create(null))[u2.type] || [], c2 = ce.event.special[u2.type] || {};
    for (s2[0] = u2, t2 = 1; t2 < arguments.length; t2++)
      s2[t2] = arguments[t2];
    if (u2.delegateTarget = this, !c2.preDispatch || false !== c2.preDispatch.call(this, u2)) {
      a2 = ce.event.handlers.call(this, u2, l2), t2 = 0;
      while ((i2 = a2[t2++]) && !u2.isPropagationStopped()) {
        u2.currentTarget = i2.elem, n2 = 0;
        while ((o2 = i2.handlers[n2++]) && !u2.isImmediatePropagationStopped())
          u2.rnamespace && false !== o2.namespace && !u2.rnamespace.test(o2.namespace) || (u2.handleObj = o2, u2.data = o2.data, void 0 !== (r2 = ((ce.event.special[o2.origType] || {}).handle || o2.handler).apply(i2.elem, s2)) && false === (u2.result = r2) && (u2.preventDefault(), u2.stopPropagation()));
      }
      return c2.postDispatch && c2.postDispatch.call(this, u2), u2.result;
    }
  }, handlers: function(e2, t2) {
    var n2, r2, i2, o2, a2, s2 = [], u2 = t2.delegateCount, l2 = e2.target;
    if (u2 && l2.nodeType && !("click" === e2.type && 1 <= e2.button)) {
      for (; l2 !== this; l2 = l2.parentNode || this)
        if (1 === l2.nodeType && ("click" !== e2.type || true !== l2.disabled)) {
          for (o2 = [], a2 = {}, n2 = 0; n2 < u2; n2++)
            void 0 === a2[i2 = (r2 = t2[n2]).selector + " "] && (a2[i2] = r2.needsContext ? -1 < ce(i2, this).index(l2) : ce.find(i2, this, null, [l2]).length), a2[i2] && o2.push(r2);
          o2.length && s2.push({ elem: l2, handlers: o2 });
        }
    }
    return l2 = this, u2 < t2.length && s2.push({ elem: l2, handlers: t2.slice(u2) }), s2;
  }, addProp: function(t2, e2) {
    Object.defineProperty(ce.Event.prototype, t2, { enumerable: true, configurable: true, get: v(e2) ? function() {
      if (this.originalEvent)
        return e2(this.originalEvent);
    } : function() {
      if (this.originalEvent)
        return this.originalEvent[t2];
    }, set: function(e3) {
      Object.defineProperty(this, t2, { enumerable: true, configurable: true, writable: true, value: e3 });
    } });
  }, fix: function(e2) {
    return e2[ce.expando] ? e2 : new ce.Event(e2);
  }, special: { load: { noBubble: true }, click: { setup: function(e2) {
    var t2 = this || e2;
    return xe.test(t2.type) && t2.click && fe(t2, "input") && Oe(t2, "click", true), false;
  }, trigger: function(e2) {
    var t2 = this || e2;
    return xe.test(t2.type) && t2.click && fe(t2, "input") && Oe(t2, "click"), true;
  }, _default: function(e2) {
    var t2 = e2.target;
    return xe.test(t2.type) && t2.click && fe(t2, "input") && _.get(t2, "click") || fe(t2, "a");
  } }, beforeunload: { postDispatch: function(e2) {
    void 0 !== e2.result && e2.originalEvent && (e2.originalEvent.returnValue = e2.result);
  } } } }, ce.removeEvent = function(e2, t2, n2) {
    e2.removeEventListener && e2.removeEventListener(t2, n2);
  }, ce.Event = function(e2, t2) {
    if (!(this instanceof ce.Event))
      return new ce.Event(e2, t2);
    e2 && e2.type ? (this.originalEvent = e2, this.type = e2.type, this.isDefaultPrevented = e2.defaultPrevented || void 0 === e2.defaultPrevented && false === e2.returnValue ? Ne : Le, this.target = e2.target && 3 === e2.target.nodeType ? e2.target.parentNode : e2.target, this.currentTarget = e2.currentTarget, this.relatedTarget = e2.relatedTarget) : this.type = e2, t2 && ce.extend(this, t2), this.timeStamp = e2 && e2.timeStamp || Date.now(), this[ce.expando] = true;
  }, ce.Event.prototype = { constructor: ce.Event, isDefaultPrevented: Le, isPropagationStopped: Le, isImmediatePropagationStopped: Le, isSimulated: false, preventDefault: function() {
    var e2 = this.originalEvent;
    this.isDefaultPrevented = Ne, e2 && !this.isSimulated && e2.preventDefault();
  }, stopPropagation: function() {
    var e2 = this.originalEvent;
    this.isPropagationStopped = Ne, e2 && !this.isSimulated && e2.stopPropagation();
  }, stopImmediatePropagation: function() {
    var e2 = this.originalEvent;
    this.isImmediatePropagationStopped = Ne, e2 && !this.isSimulated && e2.stopImmediatePropagation(), this.stopPropagation();
  } }, ce.each({ altKey: true, bubbles: true, cancelable: true, changedTouches: true, ctrlKey: true, detail: true, eventPhase: true, metaKey: true, pageX: true, pageY: true, shiftKey: true, view: true, "char": true, code: true, charCode: true, key: true, keyCode: true, button: true, buttons: true, clientX: true, clientY: true, offsetX: true, offsetY: true, pointerId: true, pointerType: true, screenX: true, screenY: true, targetTouches: true, toElement: true, touches: true, which: true }, ce.event.addProp), ce.each({ focus: "focusin", blur: "focusout" }, function(r2, i2) {
    function o2(e2) {
      if (m.documentMode) {
        var t2 = _.get(this, "handle"), n2 = ce.event.fix(e2);
        n2.type = "focusin" === e2.type ? "focus" : "blur", n2.isSimulated = true, t2(e2), n2.target === n2.currentTarget && t2(n2);
      } else
        ce.event.simulate(i2, e2.target, ce.event.fix(e2));
    }
    ce.event.special[r2] = { setup: function() {
      var e2;
      if (Oe(this, r2, true), !m.documentMode)
        return false;
      (e2 = _.get(this, i2)) || this.addEventListener(i2, o2), _.set(this, i2, (e2 || 0) + 1);
    }, trigger: function() {
      return Oe(this, r2), true;
    }, teardown: function() {
      var e2;
      if (!m.documentMode)
        return false;
      (e2 = _.get(this, i2) - 1) ? _.set(this, i2, e2) : (this.removeEventListener(i2, o2), _.remove(this, i2));
    }, _default: function(e2) {
      return _.get(e2.target, r2);
    }, delegateType: i2 }, ce.event.special[i2] = { setup: function() {
      var e2 = this.ownerDocument || this.document || this, t2 = m.documentMode ? this : e2, n2 = _.get(t2, i2);
      n2 || (m.documentMode ? this.addEventListener(i2, o2) : e2.addEventListener(r2, o2, true)), _.set(t2, i2, (n2 || 0) + 1);
    }, teardown: function() {
      var e2 = this.ownerDocument || this.document || this, t2 = m.documentMode ? this : e2, n2 = _.get(t2, i2) - 1;
      n2 ? _.set(t2, i2, n2) : (m.documentMode ? this.removeEventListener(i2, o2) : e2.removeEventListener(r2, o2, true), _.remove(t2, i2));
    } };
  }), ce.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e2, i2) {
    ce.event.special[e2] = { delegateType: i2, bindType: i2, handle: function(e3) {
      var t2, n2 = e3.relatedTarget, r2 = e3.handleObj;
      return n2 && (n2 === this || ce.contains(this, n2)) || (e3.type = r2.origType, t2 = r2.handler.apply(this, arguments), e3.type = i2), t2;
    } };
  }), ce.fn.extend({ on: function(e2, t2, n2, r2) {
    return je(this, e2, t2, n2, r2);
  }, one: function(e2, t2, n2, r2) {
    return je(this, e2, t2, n2, r2, 1);
  }, off: function(e2, t2, n2) {
    var r2, i2;
    if (e2 && e2.preventDefault && e2.handleObj)
      return r2 = e2.handleObj, ce(e2.delegateTarget).off(r2.namespace ? r2.origType + "." + r2.namespace : r2.origType, r2.selector, r2.handler), this;
    if ("object" == typeof e2) {
      for (i2 in e2)
        this.off(i2, t2, e2[i2]);
      return this;
    }
    return false !== t2 && "function" != typeof t2 || (n2 = t2, t2 = void 0), false === n2 && (n2 = Le), this.each(function() {
      ce.event.remove(this, e2, n2, t2);
    });
  } });
  var Pe = /<script|<style|<link/i, He = /checked\s*(?:[^=]|=\s*.checked.)/i, qe = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
  function Re(e2, t2) {
    return fe(e2, "table") && fe(11 !== t2.nodeType ? t2 : t2.firstChild, "tr") && ce(e2).children("tbody")[0] || e2;
  }
  function Me(e2) {
    return e2.type = (null !== e2.getAttribute("type")) + "/" + e2.type, e2;
  }
  function Ie(e2) {
    return "true/" === (e2.type || "").slice(0, 5) ? e2.type = e2.type.slice(5) : e2.removeAttribute("type"), e2;
  }
  function We(e2, t2) {
    var n2, r2, i2, o2, a2, s2;
    if (1 === t2.nodeType) {
      if (_.hasData(e2) && (s2 = _.get(e2).events))
        for (i2 in _.remove(t2, "handle events"), s2)
          for (n2 = 0, r2 = s2[i2].length; n2 < r2; n2++)
            ce.event.add(t2, i2, s2[i2][n2]);
      z.hasData(e2) && (o2 = z.access(e2), a2 = ce.extend({}, o2), z.set(t2, a2));
    }
  }
  function Be(n2, r2, i2, o2) {
    r2 = g(r2);
    var e2, t2, a2, s2, u2, l2, c2 = 0, f2 = n2.length, d2 = f2 - 1, p2 = r2[0], h2 = v(p2);
    if (h2 || 1 < f2 && "string" == typeof p2 && !le.checkClone && He.test(p2))
      return n2.each(function(e3) {
        var t3 = n2.eq(e3);
        h2 && (r2[0] = p2.call(this, e3, t3.html())), Be(t3, r2, i2, o2);
      });
    if (f2 && (t2 = (e2 = Ae(r2, n2[0].ownerDocument, false, n2, o2)).firstChild, 1 === e2.childNodes.length && (e2 = t2), t2 || o2)) {
      for (s2 = (a2 = ce.map(Ee(e2, "script"), Me)).length; c2 < f2; c2++)
        u2 = e2, c2 !== d2 && (u2 = ce.clone(u2, true, true), s2 && ce.merge(a2, Ee(u2, "script"))), i2.call(n2[c2], u2, c2);
      if (s2)
        for (l2 = a2[a2.length - 1].ownerDocument, ce.map(a2, Ie), c2 = 0; c2 < s2; c2++)
          u2 = a2[c2], Ce.test(u2.type || "") && !_.access(u2, "globalEval") && ce.contains(l2, u2) && (u2.src && "module" !== (u2.type || "").toLowerCase() ? ce._evalUrl && !u2.noModule && ce._evalUrl(u2.src, { nonce: u2.nonce || u2.getAttribute("nonce") }, l2) : b(u2.textContent.replace(qe, ""), u2, l2));
    }
    return n2;
  }
  function Fe(e2, t2, n2) {
    for (var r2, i2 = t2 ? ce.filter(t2, e2) : e2, o2 = 0; null != (r2 = i2[o2]); o2++)
      n2 || 1 !== r2.nodeType || ce.cleanData(Ee(r2)), r2.parentNode && (n2 && J(r2) && ke(Ee(r2, "script")), r2.parentNode.removeChild(r2));
    return e2;
  }
  ce.extend({ htmlPrefilter: function(e2) {
    return e2;
  }, clone: function(e2, t2, n2) {
    var r2, i2, o2, a2, s2, u2, l2, c2 = e2.cloneNode(true), f2 = J(e2);
    if (!(le.noCloneChecked || 1 !== e2.nodeType && 11 !== e2.nodeType || ce.isXMLDoc(e2)))
      for (a2 = Ee(c2), r2 = 0, i2 = (o2 = Ee(e2)).length; r2 < i2; r2++)
        s2 = o2[r2], u2 = a2[r2], void 0, "input" === (l2 = u2.nodeName.toLowerCase()) && xe.test(s2.type) ? u2.checked = s2.checked : "input" !== l2 && "textarea" !== l2 || (u2.defaultValue = s2.defaultValue);
    if (t2)
      if (n2)
        for (o2 = o2 || Ee(e2), a2 = a2 || Ee(c2), r2 = 0, i2 = o2.length; r2 < i2; r2++)
          We(o2[r2], a2[r2]);
      else
        We(e2, c2);
    return 0 < (a2 = Ee(c2, "script")).length && ke(a2, !f2 && Ee(e2, "script")), c2;
  }, cleanData: function(e2) {
    for (var t2, n2, r2, i2 = ce.event.special, o2 = 0; void 0 !== (n2 = e2[o2]); o2++)
      if (F(n2)) {
        if (t2 = n2[_.expando]) {
          if (t2.events)
            for (r2 in t2.events)
              i2[r2] ? ce.event.remove(n2, r2) : ce.removeEvent(n2, r2, t2.handle);
          n2[_.expando] = void 0;
        }
        n2[z.expando] && (n2[z.expando] = void 0);
      }
  } }), ce.fn.extend({ detach: function(e2) {
    return Fe(this, e2, true);
  }, remove: function(e2) {
    return Fe(this, e2);
  }, text: function(e2) {
    return R(this, function(e3) {
      return void 0 === e3 ? ce.text(this) : this.empty().each(function() {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e3);
      });
    }, null, e2, arguments.length);
  }, append: function() {
    return Be(this, arguments, function(e2) {
      1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Re(this, e2).appendChild(e2);
    });
  }, prepend: function() {
    return Be(this, arguments, function(e2) {
      if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
        var t2 = Re(this, e2);
        t2.insertBefore(e2, t2.firstChild);
      }
    });
  }, before: function() {
    return Be(this, arguments, function(e2) {
      this.parentNode && this.parentNode.insertBefore(e2, this);
    });
  }, after: function() {
    return Be(this, arguments, function(e2) {
      this.parentNode && this.parentNode.insertBefore(e2, this.nextSibling);
    });
  }, empty: function() {
    for (var e2, t2 = 0; null != (e2 = this[t2]); t2++)
      1 === e2.nodeType && (ce.cleanData(Ee(e2, false)), e2.textContent = "");
    return this;
  }, clone: function(e2, t2) {
    return e2 = null != e2 && e2, t2 = null == t2 ? e2 : t2, this.map(function() {
      return ce.clone(this, e2, t2);
    });
  }, html: function(e2) {
    return R(this, function(e3) {
      var t2 = this[0] || {}, n2 = 0, r2 = this.length;
      if (void 0 === e3 && 1 === t2.nodeType)
        return t2.innerHTML;
      if ("string" == typeof e3 && !Pe.test(e3) && !Te[(we.exec(e3) || ["", ""])[1].toLowerCase()]) {
        e3 = ce.htmlPrefilter(e3);
        try {
          for (; n2 < r2; n2++)
            1 === (t2 = this[n2] || {}).nodeType && (ce.cleanData(Ee(t2, false)), t2.innerHTML = e3);
          t2 = 0;
        } catch (e4) {
        }
      }
      t2 && this.empty().append(e3);
    }, null, e2, arguments.length);
  }, replaceWith: function() {
    var n2 = [];
    return Be(this, arguments, function(e2) {
      var t2 = this.parentNode;
      ce.inArray(this, n2) < 0 && (ce.cleanData(Ee(this)), t2 && t2.replaceChild(e2, this));
    }, n2);
  } }), ce.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e2, a2) {
    ce.fn[e2] = function(e3) {
      for (var t2, n2 = [], r2 = ce(e3), i2 = r2.length - 1, o2 = 0; o2 <= i2; o2++)
        t2 = o2 === i2 ? this : this.clone(true), ce(r2[o2])[a2](t2), s.apply(n2, t2.get());
      return this.pushStack(n2);
    };
  });
  var $e = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"), _e = /^--/, ze = function(e2) {
    var t2 = e2.ownerDocument.defaultView;
    return t2 && t2.opener || (t2 = ie), t2.getComputedStyle(e2);
  }, Ue = function(e2, t2, n2) {
    var r2, i2, o2 = {};
    for (i2 in t2)
      o2[i2] = e2.style[i2], e2.style[i2] = t2[i2];
    for (i2 in r2 = n2.call(e2), t2)
      e2.style[i2] = o2[i2];
    return r2;
  }, Xe = new RegExp(G.join("|"), "i");
  function Ve(e2, t2, n2) {
    var r2, i2, o2, a2, s2 = _e.test(t2), u2 = e2.style;
    return (n2 = n2 || ze(e2)) && (a2 = n2.getPropertyValue(t2) || n2[t2], s2 && a2 && (a2 = a2.replace(ve, "$1") || void 0), "" !== a2 || J(e2) || (a2 = ce.style(e2, t2)), !le.pixelBoxStyles() && $e.test(a2) && Xe.test(t2) && (r2 = u2.width, i2 = u2.minWidth, o2 = u2.maxWidth, u2.minWidth = u2.maxWidth = u2.width = a2, a2 = n2.width, u2.width = r2, u2.minWidth = i2, u2.maxWidth = o2)), void 0 !== a2 ? a2 + "" : a2;
  }
  function Qe(e2, t2) {
    return { get: function() {
      if (!e2())
        return (this.get = t2).apply(this, arguments);
      delete this.get;
    } };
  }
  !function() {
    function e2() {
      if (l2) {
        u2.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l2.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", K.appendChild(u2).appendChild(l2);
        var e3 = ie.getComputedStyle(l2);
        n2 = "1%" !== e3.top, s2 = 12 === t2(e3.marginLeft), l2.style.right = "60%", o2 = 36 === t2(e3.right), r2 = 36 === t2(e3.width), l2.style.position = "absolute", i2 = 12 === t2(l2.offsetWidth / 3), K.removeChild(u2), l2 = null;
      }
    }
    function t2(e3) {
      return Math.round(parseFloat(e3));
    }
    var n2, r2, i2, o2, a2, s2, u2 = m.createElement("div"), l2 = m.createElement("div");
    l2.style && (l2.style.backgroundClip = "content-box", l2.cloneNode(true).style.backgroundClip = "", le.clearCloneStyle = "content-box" === l2.style.backgroundClip, ce.extend(le, { boxSizingReliable: function() {
      return e2(), r2;
    }, pixelBoxStyles: function() {
      return e2(), o2;
    }, pixelPosition: function() {
      return e2(), n2;
    }, reliableMarginLeft: function() {
      return e2(), s2;
    }, scrollboxSize: function() {
      return e2(), i2;
    }, reliableTrDimensions: function() {
      var e3, t3, n3, r3;
      return null == a2 && (e3 = m.createElement("table"), t3 = m.createElement("tr"), n3 = m.createElement("div"), e3.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t3.style.cssText = "box-sizing:content-box;border:1px solid", t3.style.height = "1px", n3.style.height = "9px", n3.style.display = "block", K.appendChild(e3).appendChild(t3).appendChild(n3), r3 = ie.getComputedStyle(t3), a2 = parseInt(r3.height, 10) + parseInt(r3.borderTopWidth, 10) + parseInt(r3.borderBottomWidth, 10) === t3.offsetHeight, K.removeChild(e3)), a2;
    } }));
  }();
  var Ye = ["Webkit", "Moz", "ms"], Ge = m.createElement("div").style, Ke = {};
  function Je(e2) {
    var t2 = ce.cssProps[e2] || Ke[e2];
    return t2 || (e2 in Ge ? e2 : Ke[e2] = function(e3) {
      var t3 = e3[0].toUpperCase() + e3.slice(1), n2 = Ye.length;
      while (n2--)
        if ((e3 = Ye[n2] + t3) in Ge)
          return e3;
    }(e2) || e2);
  }
  var Ze, et, tt = /^(none|table(?!-c[ea]).+)/, nt = { position: "absolute", visibility: "hidden", display: "block" }, rt = { letterSpacing: "0", fontWeight: "400" };
  function it(e2, t2, n2) {
    var r2 = Y.exec(t2);
    return r2 ? Math.max(0, r2[2] - (n2 || 0)) + (r2[3] || "px") : t2;
  }
  function ot(e2, t2, n2, r2, i2, o2) {
    var a2 = "width" === t2 ? 1 : 0, s2 = 0, u2 = 0, l2 = 0;
    if (n2 === (r2 ? "border" : "content"))
      return 0;
    for (; a2 < 4; a2 += 2)
      "margin" === n2 && (l2 += ce.css(e2, n2 + G[a2], true, i2)), r2 ? ("content" === n2 && (u2 -= ce.css(e2, "padding" + G[a2], true, i2)), "margin" !== n2 && (u2 -= ce.css(e2, "border" + G[a2] + "Width", true, i2))) : (u2 += ce.css(e2, "padding" + G[a2], true, i2), "padding" !== n2 ? u2 += ce.css(e2, "border" + G[a2] + "Width", true, i2) : s2 += ce.css(e2, "border" + G[a2] + "Width", true, i2));
    return !r2 && 0 <= o2 && (u2 += Math.max(0, Math.ceil(e2["offset" + t2[0].toUpperCase() + t2.slice(1)] - o2 - u2 - s2 - 0.5)) || 0), u2 + l2;
  }
  function at(e2, t2, n2) {
    var r2 = ze(e2), i2 = (!le.boxSizingReliable() || n2) && "border-box" === ce.css(e2, "boxSizing", false, r2), o2 = i2, a2 = Ve(e2, t2, r2), s2 = "offset" + t2[0].toUpperCase() + t2.slice(1);
    if ($e.test(a2)) {
      if (!n2)
        return a2;
      a2 = "auto";
    }
    return (!le.boxSizingReliable() && i2 || !le.reliableTrDimensions() && fe(e2, "tr") || "auto" === a2 || !parseFloat(a2) && "inline" === ce.css(e2, "display", false, r2)) && e2.getClientRects().length && (i2 = "border-box" === ce.css(e2, "boxSizing", false, r2), (o2 = s2 in e2) && (a2 = e2[s2])), (a2 = parseFloat(a2) || 0) + ot(e2, t2, n2 || (i2 ? "border" : "content"), o2, r2, a2) + "px";
  }
  ce.extend({ cssHooks: { opacity: { get: function(e2, t2) {
    if (t2) {
      var n2 = Ve(e2, "opacity");
      return "" === n2 ? "1" : n2;
    }
  } } }, cssNumber: { animationIterationCount: true, aspectRatio: true, borderImageSlice: true, columnCount: true, flexGrow: true, flexShrink: true, fontWeight: true, gridArea: true, gridColumn: true, gridColumnEnd: true, gridColumnStart: true, gridRow: true, gridRowEnd: true, gridRowStart: true, lineHeight: true, opacity: true, order: true, orphans: true, scale: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, floodOpacity: true, stopOpacity: true, strokeMiterlimit: true, strokeOpacity: true }, cssProps: {}, style: function(e2, t2, n2, r2) {
    if (e2 && 3 !== e2.nodeType && 8 !== e2.nodeType && e2.style) {
      var i2, o2, a2, s2 = B(t2), u2 = _e.test(t2), l2 = e2.style;
      if (u2 || (t2 = Je(s2)), a2 = ce.cssHooks[t2] || ce.cssHooks[s2], void 0 === n2)
        return a2 && "get" in a2 && void 0 !== (i2 = a2.get(e2, false, r2)) ? i2 : l2[t2];
      "string" === (o2 = typeof n2) && (i2 = Y.exec(n2)) && i2[1] && (n2 = function(e3, t3, n3, r3) {
        var i3, o3, a3 = 20, s3 = r3 ? function() {
          return r3.cur();
        } : function() {
          return ce.css(e3, t3, "");
        }, u3 = s3(), l3 = n3 && n3[3] || (ce.cssNumber[t3] ? "" : "px"), c2 = e3.nodeType && (ce.cssNumber[t3] || "px" !== l3 && +u3) && Y.exec(ce.css(e3, t3));
        if (c2 && c2[3] !== l3) {
          u3 /= 2, l3 = l3 || c2[3], c2 = +u3 || 1;
          while (a3--)
            ce.style(e3, t3, c2 + l3), (1 - o3) * (1 - (o3 = s3() / u3 || 0.5)) <= 0 && (a3 = 0), c2 /= o3;
          c2 *= 2, ce.style(e3, t3, c2 + l3), n3 = n3 || [];
        }
        return n3 && (c2 = +c2 || +u3 || 0, i3 = n3[1] ? c2 + (n3[1] + 1) * n3[2] : +n3[2], r3 && (r3.unit = l3, r3.start = c2, r3.end = i3)), i3;
      }(e2, t2, i2), o2 = "number"), null != n2 && n2 == n2 && ("number" !== o2 || u2 || (n2 += i2 && i2[3] || (ce.cssNumber[s2] ? "" : "px")), le.clearCloneStyle || "" !== n2 || 0 !== t2.indexOf("background") || (l2[t2] = "inherit"), a2 && "set" in a2 && void 0 === (n2 = a2.set(e2, n2, r2)) || (u2 ? l2.setProperty(t2, n2) : l2[t2] = n2));
    }
  }, css: function(e2, t2, n2, r2) {
    var i2, o2, a2, s2 = B(t2);
    return _e.test(t2) || (t2 = Je(s2)), (a2 = ce.cssHooks[t2] || ce.cssHooks[s2]) && "get" in a2 && (i2 = a2.get(e2, true, n2)), void 0 === i2 && (i2 = Ve(e2, t2, r2)), "normal" === i2 && t2 in rt && (i2 = rt[t2]), "" === n2 || n2 ? (o2 = parseFloat(i2), true === n2 || isFinite(o2) ? o2 || 0 : i2) : i2;
  } }), ce.each(["height", "width"], function(e2, u2) {
    ce.cssHooks[u2] = { get: function(e3, t2, n2) {
      if (t2)
        return !tt.test(ce.css(e3, "display")) || e3.getClientRects().length && e3.getBoundingClientRect().width ? at(e3, u2, n2) : Ue(e3, nt, function() {
          return at(e3, u2, n2);
        });
    }, set: function(e3, t2, n2) {
      var r2, i2 = ze(e3), o2 = !le.scrollboxSize() && "absolute" === i2.position, a2 = (o2 || n2) && "border-box" === ce.css(e3, "boxSizing", false, i2), s2 = n2 ? ot(e3, u2, n2, a2, i2) : 0;
      return a2 && o2 && (s2 -= Math.ceil(e3["offset" + u2[0].toUpperCase() + u2.slice(1)] - parseFloat(i2[u2]) - ot(e3, u2, "border", false, i2) - 0.5)), s2 && (r2 = Y.exec(t2)) && "px" !== (r2[3] || "px") && (e3.style[u2] = t2, t2 = ce.css(e3, u2)), it(0, t2, s2);
    } };
  }), ce.cssHooks.marginLeft = Qe(le.reliableMarginLeft, function(e2, t2) {
    if (t2)
      return (parseFloat(Ve(e2, "marginLeft")) || e2.getBoundingClientRect().left - Ue(e2, { marginLeft: 0 }, function() {
        return e2.getBoundingClientRect().left;
      })) + "px";
  }), ce.each({ margin: "", padding: "", border: "Width" }, function(i2, o2) {
    ce.cssHooks[i2 + o2] = { expand: function(e2) {
      for (var t2 = 0, n2 = {}, r2 = "string" == typeof e2 ? e2.split(" ") : [e2]; t2 < 4; t2++)
        n2[i2 + G[t2] + o2] = r2[t2] || r2[t2 - 2] || r2[0];
      return n2;
    } }, "margin" !== i2 && (ce.cssHooks[i2 + o2].set = it);
  }), ce.fn.extend({ css: function(e2, t2) {
    return R(this, function(e3, t3, n2) {
      var r2, i2, o2 = {}, a2 = 0;
      if (Array.isArray(t3)) {
        for (r2 = ze(e3), i2 = t3.length; a2 < i2; a2++)
          o2[t3[a2]] = ce.css(e3, t3[a2], false, r2);
        return o2;
      }
      return void 0 !== n2 ? ce.style(e3, t3, n2) : ce.css(e3, t3);
    }, e2, t2, 1 < arguments.length);
  } }), ce.fn.delay = function(r2, e2) {
    return r2 = ce.fx && ce.fx.speeds[r2] || r2, e2 = e2 || "fx", this.queue(e2, function(e3, t2) {
      var n2 = ie.setTimeout(e3, r2);
      t2.stop = function() {
        ie.clearTimeout(n2);
      };
    });
  }, Ze = m.createElement("input"), et = m.createElement("select").appendChild(m.createElement("option")), Ze.type = "checkbox", le.checkOn = "" !== Ze.value, le.optSelected = et.selected, (Ze = m.createElement("input")).value = "t", Ze.type = "radio", le.radioValue = "t" === Ze.value;
  var st, ut = ce.expr.attrHandle;
  ce.fn.extend({ attr: function(e2, t2) {
    return R(this, ce.attr, e2, t2, 1 < arguments.length);
  }, removeAttr: function(e2) {
    return this.each(function() {
      ce.removeAttr(this, e2);
    });
  } }), ce.extend({ attr: function(e2, t2, n2) {
    var r2, i2, o2 = e2.nodeType;
    if (3 !== o2 && 8 !== o2 && 2 !== o2)
      return "undefined" == typeof e2.getAttribute ? ce.prop(e2, t2, n2) : (1 === o2 && ce.isXMLDoc(e2) || (i2 = ce.attrHooks[t2.toLowerCase()] || (ce.expr.match.bool.test(t2) ? st : void 0)), void 0 !== n2 ? null === n2 ? void ce.removeAttr(e2, t2) : i2 && "set" in i2 && void 0 !== (r2 = i2.set(e2, n2, t2)) ? r2 : (e2.setAttribute(t2, n2 + ""), n2) : i2 && "get" in i2 && null !== (r2 = i2.get(e2, t2)) ? r2 : null == (r2 = ce.find.attr(e2, t2)) ? void 0 : r2);
  }, attrHooks: { type: { set: function(e2, t2) {
    if (!le.radioValue && "radio" === t2 && fe(e2, "input")) {
      var n2 = e2.value;
      return e2.setAttribute("type", t2), n2 && (e2.value = n2), t2;
    }
  } } }, removeAttr: function(e2, t2) {
    var n2, r2 = 0, i2 = t2 && t2.match(N);
    if (i2 && 1 === e2.nodeType)
      while (n2 = i2[r2++])
        e2.removeAttribute(n2);
  } }), st = { set: function(e2, t2, n2) {
    return false === t2 ? ce.removeAttr(e2, n2) : e2.setAttribute(n2, n2), n2;
  } }, ce.each(ce.expr.match.bool.source.match(/\w+/g), function(e2, t2) {
    var a2 = ut[t2] || ce.find.attr;
    ut[t2] = function(e3, t3, n2) {
      var r2, i2, o2 = t3.toLowerCase();
      return n2 || (i2 = ut[o2], ut[o2] = r2, r2 = null != a2(e3, t3, n2) ? o2 : null, ut[o2] = i2), r2;
    };
  });
  var lt = /^(?:input|select|textarea|button)$/i, ct = /^(?:a|area)$/i;
  function ft(e2) {
    return (e2.match(N) || []).join(" ");
  }
  function dt(e2) {
    return e2.getAttribute && e2.getAttribute("class") || "";
  }
  function pt(e2) {
    return Array.isArray(e2) ? e2 : "string" == typeof e2 && e2.match(N) || [];
  }
  ce.fn.extend({ prop: function(e2, t2) {
    return R(this, ce.prop, e2, t2, 1 < arguments.length);
  }, removeProp: function(e2) {
    return this.each(function() {
      delete this[ce.propFix[e2] || e2];
    });
  } }), ce.extend({ prop: function(e2, t2, n2) {
    var r2, i2, o2 = e2.nodeType;
    if (3 !== o2 && 8 !== o2 && 2 !== o2)
      return 1 === o2 && ce.isXMLDoc(e2) || (t2 = ce.propFix[t2] || t2, i2 = ce.propHooks[t2]), void 0 !== n2 ? i2 && "set" in i2 && void 0 !== (r2 = i2.set(e2, n2, t2)) ? r2 : e2[t2] = n2 : i2 && "get" in i2 && null !== (r2 = i2.get(e2, t2)) ? r2 : e2[t2];
  }, propHooks: { tabIndex: { get: function(e2) {
    var t2 = ce.find.attr(e2, "tabindex");
    return t2 ? parseInt(t2, 10) : lt.test(e2.nodeName) || ct.test(e2.nodeName) && e2.href ? 0 : -1;
  } } }, propFix: { "for": "htmlFor", "class": "className" } }), le.optSelected || (ce.propHooks.selected = { get: function(e2) {
    var t2 = e2.parentNode;
    return t2 && t2.parentNode && t2.parentNode.selectedIndex, null;
  }, set: function(e2) {
    var t2 = e2.parentNode;
    t2 && (t2.selectedIndex, t2.parentNode && t2.parentNode.selectedIndex);
  } }), ce.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    ce.propFix[this.toLowerCase()] = this;
  }), ce.fn.extend({ addClass: function(t2) {
    var e2, n2, r2, i2, o2, a2;
    return v(t2) ? this.each(function(e3) {
      ce(this).addClass(t2.call(this, e3, dt(this)));
    }) : (e2 = pt(t2)).length ? this.each(function() {
      if (r2 = dt(this), n2 = 1 === this.nodeType && " " + ft(r2) + " ") {
        for (o2 = 0; o2 < e2.length; o2++)
          i2 = e2[o2], n2.indexOf(" " + i2 + " ") < 0 && (n2 += i2 + " ");
        a2 = ft(n2), r2 !== a2 && this.setAttribute("class", a2);
      }
    }) : this;
  }, removeClass: function(t2) {
    var e2, n2, r2, i2, o2, a2;
    return v(t2) ? this.each(function(e3) {
      ce(this).removeClass(t2.call(this, e3, dt(this)));
    }) : arguments.length ? (e2 = pt(t2)).length ? this.each(function() {
      if (r2 = dt(this), n2 = 1 === this.nodeType && " " + ft(r2) + " ") {
        for (o2 = 0; o2 < e2.length; o2++) {
          i2 = e2[o2];
          while (-1 < n2.indexOf(" " + i2 + " "))
            n2 = n2.replace(" " + i2 + " ", " ");
        }
        a2 = ft(n2), r2 !== a2 && this.setAttribute("class", a2);
      }
    }) : this : this.attr("class", "");
  }, toggleClass: function(t2, n2) {
    var e2, r2, i2, o2, a2 = typeof t2, s2 = "string" === a2 || Array.isArray(t2);
    return v(t2) ? this.each(function(e3) {
      ce(this).toggleClass(t2.call(this, e3, dt(this), n2), n2);
    }) : "boolean" == typeof n2 && s2 ? n2 ? this.addClass(t2) : this.removeClass(t2) : (e2 = pt(t2), this.each(function() {
      if (s2)
        for (o2 = ce(this), i2 = 0; i2 < e2.length; i2++)
          r2 = e2[i2], o2.hasClass(r2) ? o2.removeClass(r2) : o2.addClass(r2);
      else
        void 0 !== t2 && "boolean" !== a2 || ((r2 = dt(this)) && _.set(this, "__className__", r2), this.setAttribute && this.setAttribute("class", r2 || false === t2 ? "" : _.get(this, "__className__") || ""));
    }));
  }, hasClass: function(e2) {
    var t2, n2, r2 = 0;
    t2 = " " + e2 + " ";
    while (n2 = this[r2++])
      if (1 === n2.nodeType && -1 < (" " + ft(dt(n2)) + " ").indexOf(t2))
        return true;
    return false;
  } });
  var ht = /\r/g;
  ce.fn.extend({ val: function(n2) {
    var r2, e2, i2, t2 = this[0];
    return arguments.length ? (i2 = v(n2), this.each(function(e3) {
      var t3;
      1 === this.nodeType && (null == (t3 = i2 ? n2.call(this, e3, ce(this).val()) : n2) ? t3 = "" : "number" == typeof t3 ? t3 += "" : Array.isArray(t3) && (t3 = ce.map(t3, function(e4) {
        return null == e4 ? "" : e4 + "";
      })), (r2 = ce.valHooks[this.type] || ce.valHooks[this.nodeName.toLowerCase()]) && "set" in r2 && void 0 !== r2.set(this, t3, "value") || (this.value = t3));
    })) : t2 ? (r2 = ce.valHooks[t2.type] || ce.valHooks[t2.nodeName.toLowerCase()]) && "get" in r2 && void 0 !== (e2 = r2.get(t2, "value")) ? e2 : "string" == typeof (e2 = t2.value) ? e2.replace(ht, "") : null == e2 ? "" : e2 : void 0;
  } }), ce.extend({ valHooks: { option: { get: function(e2) {
    var t2 = ce.find.attr(e2, "value");
    return null != t2 ? t2 : ft(ce.text(e2));
  } }, select: { get: function(e2) {
    var t2, n2, r2, i2 = e2.options, o2 = e2.selectedIndex, a2 = "select-one" === e2.type, s2 = a2 ? null : [], u2 = a2 ? o2 + 1 : i2.length;
    for (r2 = o2 < 0 ? u2 : a2 ? o2 : 0; r2 < u2; r2++)
      if (((n2 = i2[r2]).selected || r2 === o2) && !n2.disabled && (!n2.parentNode.disabled || !fe(n2.parentNode, "optgroup"))) {
        if (t2 = ce(n2).val(), a2)
          return t2;
        s2.push(t2);
      }
    return s2;
  }, set: function(e2, t2) {
    var n2, r2, i2 = e2.options, o2 = ce.makeArray(t2), a2 = i2.length;
    while (a2--)
      ((r2 = i2[a2]).selected = -1 < ce.inArray(ce.valHooks.option.get(r2), o2)) && (n2 = true);
    return n2 || (e2.selectedIndex = -1), o2;
  } } } }), ce.each(["radio", "checkbox"], function() {
    ce.valHooks[this] = { set: function(e2, t2) {
      if (Array.isArray(t2))
        return e2.checked = -1 < ce.inArray(ce(e2).val(), t2);
    } }, le.checkOn || (ce.valHooks[this].get = function(e2) {
      return null === e2.getAttribute("value") ? "on" : e2.value;
    });
  }), ce.parseXML = function(e2) {
    var t2, n2;
    if (!e2 || "string" != typeof e2)
      return null;
    try {
      t2 = new ie.DOMParser().parseFromString(e2, "text/xml");
    } catch (e3) {
    }
    return n2 = t2 && t2.getElementsByTagName("parsererror")[0], t2 && !n2 || ce.error("Invalid XML: " + (n2 ? ce.map(n2.childNodes, function(e3) {
      return e3.textContent;
    }).join("\n") : e2)), t2;
  };
  var gt = /^(?:focusinfocus|focusoutblur)$/, vt = function(e2) {
    e2.stopPropagation();
  };
  ce.extend(ce.event, { trigger: function(e2, t2, n2, r2) {
    var i2, o2, a2, s2, u2, l2, c2, f2, d2 = [n2 || m], p2 = ue.call(e2, "type") ? e2.type : e2, h2 = ue.call(e2, "namespace") ? e2.namespace.split(".") : [];
    if (o2 = f2 = a2 = n2 = n2 || m, 3 !== n2.nodeType && 8 !== n2.nodeType && !gt.test(p2 + ce.event.triggered) && (-1 < p2.indexOf(".") && (p2 = (h2 = p2.split(".")).shift(), h2.sort()), u2 = p2.indexOf(":") < 0 && "on" + p2, (e2 = e2[ce.expando] ? e2 : new ce.Event(p2, "object" == typeof e2 && e2)).isTrigger = r2 ? 2 : 3, e2.namespace = h2.join("."), e2.rnamespace = e2.namespace ? new RegExp("(^|\\.)" + h2.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e2.result = void 0, e2.target || (e2.target = n2), t2 = null == t2 ? [e2] : ce.makeArray(t2, [e2]), c2 = ce.event.special[p2] || {}, r2 || !c2.trigger || false !== c2.trigger.apply(n2, t2))) {
      if (!r2 && !c2.noBubble && !y(n2)) {
        for (s2 = c2.delegateType || p2, gt.test(s2 + p2) || (o2 = o2.parentNode); o2; o2 = o2.parentNode)
          d2.push(o2), a2 = o2;
        a2 === (n2.ownerDocument || m) && d2.push(a2.defaultView || a2.parentWindow || ie);
      }
      i2 = 0;
      while ((o2 = d2[i2++]) && !e2.isPropagationStopped())
        f2 = o2, e2.type = 1 < i2 ? s2 : c2.bindType || p2, (l2 = (_.get(o2, "events") || /* @__PURE__ */ Object.create(null))[e2.type] && _.get(o2, "handle")) && l2.apply(o2, t2), (l2 = u2 && o2[u2]) && l2.apply && F(o2) && (e2.result = l2.apply(o2, t2), false === e2.result && e2.preventDefault());
      return e2.type = p2, r2 || e2.isDefaultPrevented() || c2._default && false !== c2._default.apply(d2.pop(), t2) || !F(n2) || u2 && v(n2[p2]) && !y(n2) && ((a2 = n2[u2]) && (n2[u2] = null), ce.event.triggered = p2, e2.isPropagationStopped() && f2.addEventListener(p2, vt), n2[p2](), e2.isPropagationStopped() && f2.removeEventListener(p2, vt), ce.event.triggered = void 0, a2 && (n2[u2] = a2)), e2.result;
    }
  }, simulate: function(e2, t2, n2) {
    var r2 = ce.extend(new ce.Event(), n2, { type: e2, isSimulated: true });
    ce.event.trigger(r2, null, t2);
  } }), ce.fn.extend({ trigger: function(e2, t2) {
    return this.each(function() {
      ce.event.trigger(e2, t2, this);
    });
  }, triggerHandler: function(e2, t2) {
    var n2 = this[0];
    if (n2)
      return ce.event.trigger(e2, t2, n2, true);
  } });
  var yt, mt = /\[\]$/, bt = /\r?\n/g, xt = /^(?:submit|button|image|reset|file)$/i, wt = /^(?:input|select|textarea|keygen)/i;
  function Ct(n2, e2, r2, i2) {
    var t2;
    if (Array.isArray(e2))
      ce.each(e2, function(e3, t3) {
        r2 || mt.test(n2) ? i2(n2, t3) : Ct(n2 + "[" + ("object" == typeof t3 && null != t3 ? e3 : "") + "]", t3, r2, i2);
      });
    else if (r2 || "object" !== x(e2))
      i2(n2, e2);
    else
      for (t2 in e2)
        Ct(n2 + "[" + t2 + "]", e2[t2], r2, i2);
  }
  ce.param = function(e2, t2) {
    var n2, r2 = [], i2 = function(e3, t3) {
      var n3 = v(t3) ? t3() : t3;
      r2[r2.length] = encodeURIComponent(e3) + "=" + encodeURIComponent(null == n3 ? "" : n3);
    };
    if (null == e2)
      return "";
    if (Array.isArray(e2) || e2.jquery && !ce.isPlainObject(e2))
      ce.each(e2, function() {
        i2(this.name, this.value);
      });
    else
      for (n2 in e2)
        Ct(n2, e2[n2], t2, i2);
    return r2.join("&");
  }, ce.fn.extend({ serialize: function() {
    return ce.param(this.serializeArray());
  }, serializeArray: function() {
    return this.map(function() {
      var e2 = ce.prop(this, "elements");
      return e2 ? ce.makeArray(e2) : this;
    }).filter(function() {
      var e2 = this.type;
      return this.name && !ce(this).is(":disabled") && wt.test(this.nodeName) && !xt.test(e2) && (this.checked || !xe.test(e2));
    }).map(function(e2, t2) {
      var n2 = ce(this).val();
      return null == n2 ? null : Array.isArray(n2) ? ce.map(n2, function(e3) {
        return { name: t2.name, value: e3.replace(bt, "\r\n") };
      }) : { name: t2.name, value: n2.replace(bt, "\r\n") };
    }).get();
  } }), ce.fn.extend({ wrapAll: function(e2) {
    var t2;
    return this[0] && (v(e2) && (e2 = e2.call(this[0])), t2 = ce(e2, this[0].ownerDocument).eq(0).clone(true), this[0].parentNode && t2.insertBefore(this[0]), t2.map(function() {
      var e3 = this;
      while (e3.firstElementChild)
        e3 = e3.firstElementChild;
      return e3;
    }).append(this)), this;
  }, wrapInner: function(n2) {
    return v(n2) ? this.each(function(e2) {
      ce(this).wrapInner(n2.call(this, e2));
    }) : this.each(function() {
      var e2 = ce(this), t2 = e2.contents();
      t2.length ? t2.wrapAll(n2) : e2.append(n2);
    });
  }, wrap: function(t2) {
    var n2 = v(t2);
    return this.each(function(e2) {
      ce(this).wrapAll(n2 ? t2.call(this, e2) : t2);
    });
  }, unwrap: function(e2) {
    return this.parent(e2).not("body").each(function() {
      ce(this).replaceWith(this.childNodes);
    }), this;
  } }), ce.expr.pseudos.hidden = function(e2) {
    return !ce.expr.pseudos.visible(e2);
  }, ce.expr.pseudos.visible = function(e2) {
    return !!(e2.offsetWidth || e2.offsetHeight || e2.getClientRects().length);
  }, le.createHTMLDocument = ((yt = m.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === yt.childNodes.length), ce.parseHTML = function(e2, t2, n2) {
    return "string" != typeof e2 ? [] : ("boolean" == typeof t2 && (n2 = t2, t2 = false), t2 || (le.createHTMLDocument ? ((r2 = (t2 = m.implementation.createHTMLDocument("")).createElement("base")).href = m.location.href, t2.head.appendChild(r2)) : t2 = m), o2 = !n2 && [], (i2 = C.exec(e2)) ? [t2.createElement(i2[1])] : (i2 = Ae([e2], t2, o2), o2 && o2.length && ce(o2).remove(), ce.merge([], i2.childNodes)));
    var r2, i2, o2;
  }, ce.offset = { setOffset: function(e2, t2, n2) {
    var r2, i2, o2, a2, s2, u2, l2 = ce.css(e2, "position"), c2 = ce(e2), f2 = {};
    "static" === l2 && (e2.style.position = "relative"), s2 = c2.offset(), o2 = ce.css(e2, "top"), u2 = ce.css(e2, "left"), ("absolute" === l2 || "fixed" === l2) && -1 < (o2 + u2).indexOf("auto") ? (a2 = (r2 = c2.position()).top, i2 = r2.left) : (a2 = parseFloat(o2) || 0, i2 = parseFloat(u2) || 0), v(t2) && (t2 = t2.call(e2, n2, ce.extend({}, s2))), null != t2.top && (f2.top = t2.top - s2.top + a2), null != t2.left && (f2.left = t2.left - s2.left + i2), "using" in t2 ? t2.using.call(e2, f2) : c2.css(f2);
  } }, ce.fn.extend({ offset: function(t2) {
    if (arguments.length)
      return void 0 === t2 ? this : this.each(function(e3) {
        ce.offset.setOffset(this, t2, e3);
      });
    var e2, n2, r2 = this[0];
    return r2 ? r2.getClientRects().length ? (e2 = r2.getBoundingClientRect(), n2 = r2.ownerDocument.defaultView, { top: e2.top + n2.pageYOffset, left: e2.left + n2.pageXOffset }) : { top: 0, left: 0 } : void 0;
  }, position: function() {
    if (this[0]) {
      var e2, t2, n2, r2 = this[0], i2 = { top: 0, left: 0 };
      if ("fixed" === ce.css(r2, "position"))
        t2 = r2.getBoundingClientRect();
      else {
        t2 = this.offset(), n2 = r2.ownerDocument, e2 = r2.offsetParent || n2.documentElement;
        while (e2 && (e2 === n2.body || e2 === n2.documentElement) && "static" === ce.css(e2, "position"))
          e2 = e2.parentNode;
        e2 && e2 !== r2 && 1 === e2.nodeType && ((i2 = ce(e2).offset()).top += ce.css(e2, "borderTopWidth", true), i2.left += ce.css(e2, "borderLeftWidth", true));
      }
      return { top: t2.top - i2.top - ce.css(r2, "marginTop", true), left: t2.left - i2.left - ce.css(r2, "marginLeft", true) };
    }
  }, offsetParent: function() {
    return this.map(function() {
      var e2 = this.offsetParent;
      while (e2 && "static" === ce.css(e2, "position"))
        e2 = e2.offsetParent;
      return e2 || K;
    });
  } }), ce.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(t2, i2) {
    var o2 = "pageYOffset" === i2;
    ce.fn[t2] = function(e2) {
      return R(this, function(e3, t3, n2) {
        var r2;
        if (y(e3) ? r2 = e3 : 9 === e3.nodeType && (r2 = e3.defaultView), void 0 === n2)
          return r2 ? r2[i2] : e3[t3];
        r2 ? r2.scrollTo(o2 ? r2.pageXOffset : n2, o2 ? n2 : r2.pageYOffset) : e3[t3] = n2;
      }, t2, e2, arguments.length);
    };
  }), ce.each(["top", "left"], function(e2, n2) {
    ce.cssHooks[n2] = Qe(le.pixelPosition, function(e3, t2) {
      if (t2)
        return t2 = Ve(e3, n2), $e.test(t2) ? ce(e3).position()[n2] + "px" : t2;
    });
  }), ce.each({ Height: "height", Width: "width" }, function(a2, s2) {
    ce.each({ padding: "inner" + a2, content: s2, "": "outer" + a2 }, function(r2, o2) {
      ce.fn[o2] = function(e2, t2) {
        var n2 = arguments.length && (r2 || "boolean" != typeof e2), i2 = r2 || (true === e2 || true === t2 ? "margin" : "border");
        return R(this, function(e3, t3, n3) {
          var r3;
          return y(e3) ? 0 === o2.indexOf("outer") ? e3["inner" + a2] : e3.document.documentElement["client" + a2] : 9 === e3.nodeType ? (r3 = e3.documentElement, Math.max(e3.body["scroll" + a2], r3["scroll" + a2], e3.body["offset" + a2], r3["offset" + a2], r3["client" + a2])) : void 0 === n3 ? ce.css(e3, t3, i2) : ce.style(e3, t3, n3, i2);
        }, s2, n2 ? e2 : void 0, n2);
      };
    });
  }), ce.fn.extend({ bind: function(e2, t2, n2) {
    return this.on(e2, null, t2, n2);
  }, unbind: function(e2, t2) {
    return this.off(e2, null, t2);
  }, delegate: function(e2, t2, n2, r2) {
    return this.on(t2, e2, n2, r2);
  }, undelegate: function(e2, t2, n2) {
    return 1 === arguments.length ? this.off(e2, "**") : this.off(t2, e2 || "**", n2);
  }, hover: function(e2, t2) {
    return this.on("mouseenter", e2).on("mouseleave", t2 || e2);
  } }), ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e2, n2) {
    ce.fn[n2] = function(e3, t2) {
      return 0 < arguments.length ? this.on(n2, null, e3, t2) : this.trigger(n2);
    };
  });
  var Tt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
  ce.proxy = function(e2, t2) {
    var n2, r2, i2;
    if ("string" == typeof t2 && (n2 = e2[t2], t2 = e2, e2 = n2), v(e2))
      return r2 = ae.call(arguments, 2), (i2 = function() {
        return e2.apply(t2 || this, r2.concat(ae.call(arguments)));
      }).guid = e2.guid = e2.guid || ce.guid++, i2;
  }, ce.holdReady = function(e2) {
    e2 ? ce.readyWait++ : ce.ready(true);
  }, ce.isArray = Array.isArray, ce.parseJSON = JSON.parse, ce.nodeName = fe, ce.isFunction = v, ce.isWindow = y, ce.camelCase = B, ce.type = x, ce.now = Date.now, ce.isNumeric = function(e2) {
    var t2 = ce.type(e2);
    return ("number" === t2 || "string" === t2) && !isNaN(e2 - parseFloat(e2));
  }, ce.trim = function(e2) {
    return null == e2 ? "" : (e2 + "").replace(Tt, "$1");
  }, "function" == typeof define && define.amd && define("jquery", [], function() {
    return ce;
  });
  var Et = ie.jQuery, kt = ie.$;
  return ce.noConflict = function(e2) {
    return ie.$ === ce && (ie.$ = kt), e2 && ie.jQuery === ce && (ie.jQuery = Et), ce;
  }, "undefined" == typeof e && (ie.jQuery = ie.$ = ce), ce;
});
(function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t();
})(this, function() {
  "use strict";
  function e(e2) {
    return e2 && "[object Function]" === {}.toString.call(e2);
  }
  function t(e2, t2) {
    if (1 !== e2.nodeType)
      return [];
    var o2 = e2.ownerDocument.defaultView, n2 = o2.getComputedStyle(e2, null);
    return t2 ? n2[t2] : n2;
  }
  function o(e2) {
    return "HTML" === e2.nodeName ? e2 : e2.parentNode || e2.host;
  }
  function n(e2) {
    if (!e2)
      return document.body;
    switch (e2.nodeName) {
      case "HTML":
      case "BODY":
        return e2.ownerDocument.body;
      case "#document":
        return e2.body;
    }
    var i2 = t(e2), r2 = i2.overflow, p2 = i2.overflowX, s2 = i2.overflowY;
    return /(auto|scroll|overlay)/.test(r2 + s2 + p2) ? e2 : n(o(e2));
  }
  function i(e2) {
    return e2 && e2.referenceNode ? e2.referenceNode : e2;
  }
  function r(e2) {
    return 11 === e2 ? re : 10 === e2 ? pe : re || pe;
  }
  function p(e2) {
    if (!e2)
      return document.documentElement;
    for (var o2 = r(10) ? document.body : null, n2 = e2.offsetParent || null; n2 === o2 && e2.nextElementSibling; )
      n2 = (e2 = e2.nextElementSibling).offsetParent;
    var i2 = n2 && n2.nodeName;
    return i2 && "BODY" !== i2 && "HTML" !== i2 ? -1 !== ["TH", "TD", "TABLE"].indexOf(n2.nodeName) && "static" === t(n2, "position") ? p(n2) : n2 : e2 ? e2.ownerDocument.documentElement : document.documentElement;
  }
  function s(e2) {
    var t2 = e2.nodeName;
    return "BODY" !== t2 && ("HTML" === t2 || p(e2.firstElementChild) === e2);
  }
  function d(e2) {
    return null === e2.parentNode ? e2 : d(e2.parentNode);
  }
  function a(e2, t2) {
    if (!e2 || !e2.nodeType || !t2 || !t2.nodeType)
      return document.documentElement;
    var o2 = e2.compareDocumentPosition(t2) & Node.DOCUMENT_POSITION_FOLLOWING, n2 = o2 ? e2 : t2, i2 = o2 ? t2 : e2, r2 = document.createRange();
    r2.setStart(n2, 0), r2.setEnd(i2, 0);
    var l2 = r2.commonAncestorContainer;
    if (e2 !== l2 && t2 !== l2 || n2.contains(i2))
      return s(l2) ? l2 : p(l2);
    var f2 = d(e2);
    return f2.host ? a(f2.host, t2) : a(e2, d(t2).host);
  }
  function l(e2) {
    var t2 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top", o2 = "top" === t2 ? "scrollTop" : "scrollLeft", n2 = e2.nodeName;
    if ("BODY" === n2 || "HTML" === n2) {
      var i2 = e2.ownerDocument.documentElement, r2 = e2.ownerDocument.scrollingElement || i2;
      return r2[o2];
    }
    return e2[o2];
  }
  function f(e2, t2) {
    var o2 = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], n2 = l(t2, "top"), i2 = l(t2, "left"), r2 = o2 ? -1 : 1;
    return e2.top += n2 * r2, e2.bottom += n2 * r2, e2.left += i2 * r2, e2.right += i2 * r2, e2;
  }
  function m(e2, t2) {
    var o2 = "x" === t2 ? "Left" : "Top", n2 = "Left" == o2 ? "Right" : "Bottom";
    return parseFloat(e2["border" + o2 + "Width"]) + parseFloat(e2["border" + n2 + "Width"]);
  }
  function h(e2, t2, o2, n2) {
    return ee(t2["offset" + e2], t2["scroll" + e2], o2["client" + e2], o2["offset" + e2], o2["scroll" + e2], r(10) ? parseInt(o2["offset" + e2]) + parseInt(n2["margin" + ("Height" === e2 ? "Top" : "Left")]) + parseInt(n2["margin" + ("Height" === e2 ? "Bottom" : "Right")]) : 0);
  }
  function c(e2) {
    var t2 = e2.body, o2 = e2.documentElement, n2 = r(10) && getComputedStyle(o2);
    return { height: h("Height", t2, o2, n2), width: h("Width", t2, o2, n2) };
  }
  function g(e2) {
    return le({}, e2, { right: e2.left + e2.width, bottom: e2.top + e2.height });
  }
  function u(e2) {
    var o2 = {};
    try {
      if (r(10)) {
        o2 = e2.getBoundingClientRect();
        var n2 = l(e2, "top"), i2 = l(e2, "left");
        o2.top += n2, o2.left += i2, o2.bottom += n2, o2.right += i2;
      } else
        o2 = e2.getBoundingClientRect();
    } catch (t2) {
    }
    var p2 = { left: o2.left, top: o2.top, width: o2.right - o2.left, height: o2.bottom - o2.top }, s2 = "HTML" === e2.nodeName ? c(e2.ownerDocument) : {}, d2 = s2.width || e2.clientWidth || p2.width, a2 = s2.height || e2.clientHeight || p2.height, f2 = e2.offsetWidth - d2, h2 = e2.offsetHeight - a2;
    if (f2 || h2) {
      var u2 = t(e2);
      f2 -= m(u2, "x"), h2 -= m(u2, "y"), p2.width -= f2, p2.height -= h2;
    }
    return g(p2);
  }
  function b(e2, o2) {
    var i2 = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], p2 = r(10), s2 = "HTML" === o2.nodeName, d2 = u(e2), a2 = u(o2), l2 = n(e2), m2 = t(o2), h2 = parseFloat(m2.borderTopWidth), c2 = parseFloat(m2.borderLeftWidth);
    i2 && s2 && (a2.top = ee(a2.top, 0), a2.left = ee(a2.left, 0));
    var b2 = g({ top: d2.top - a2.top - h2, left: d2.left - a2.left - c2, width: d2.width, height: d2.height });
    if (b2.marginTop = 0, b2.marginLeft = 0, !p2 && s2) {
      var w2 = parseFloat(m2.marginTop), y2 = parseFloat(m2.marginLeft);
      b2.top -= h2 - w2, b2.bottom -= h2 - w2, b2.left -= c2 - y2, b2.right -= c2 - y2, b2.marginTop = w2, b2.marginLeft = y2;
    }
    return (p2 && !i2 ? o2.contains(l2) : o2 === l2 && "BODY" !== l2.nodeName) && (b2 = f(b2, o2)), b2;
  }
  function w(e2) {
    var t2 = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], o2 = e2.ownerDocument.documentElement, n2 = b(e2, o2), i2 = ee(o2.clientWidth, window.innerWidth || 0), r2 = ee(o2.clientHeight, window.innerHeight || 0), p2 = t2 ? 0 : l(o2), s2 = t2 ? 0 : l(o2, "left"), d2 = { top: p2 - n2.top + n2.marginTop, left: s2 - n2.left + n2.marginLeft, width: i2, height: r2 };
    return g(d2);
  }
  function y(e2) {
    var n2 = e2.nodeName;
    if ("BODY" === n2 || "HTML" === n2)
      return false;
    if ("fixed" === t(e2, "position"))
      return true;
    var i2 = o(e2);
    return !!i2 && y(i2);
  }
  function E(e2) {
    if (!e2 || !e2.parentElement || r())
      return document.documentElement;
    for (var o2 = e2.parentElement; o2 && "none" === t(o2, "transform"); )
      o2 = o2.parentElement;
    return o2 || document.documentElement;
  }
  function v(e2, t2, r2, p2) {
    var s2 = 4 < arguments.length && void 0 !== arguments[4] && arguments[4], d2 = { top: 0, left: 0 }, l2 = s2 ? E(e2) : a(e2, i(t2));
    if ("viewport" === p2)
      d2 = w(l2, s2);
    else {
      var f2;
      "scrollParent" === p2 ? (f2 = n(o(t2)), "BODY" === f2.nodeName && (f2 = e2.ownerDocument.documentElement)) : "window" === p2 ? f2 = e2.ownerDocument.documentElement : f2 = p2;
      var m2 = b(f2, l2, s2);
      if ("HTML" === f2.nodeName && !y(l2)) {
        var h2 = c(e2.ownerDocument), g2 = h2.height, u2 = h2.width;
        d2.top += m2.top - m2.marginTop, d2.bottom = g2 + m2.top, d2.left += m2.left - m2.marginLeft, d2.right = u2 + m2.left;
      } else
        d2 = m2;
    }
    r2 = r2 || 0;
    var v2 = "number" == typeof r2;
    return d2.left += v2 ? r2 : r2.left || 0, d2.top += v2 ? r2 : r2.top || 0, d2.right -= v2 ? r2 : r2.right || 0, d2.bottom -= v2 ? r2 : r2.bottom || 0, d2;
  }
  function x(e2) {
    var t2 = e2.width, o2 = e2.height;
    return t2 * o2;
  }
  function O(e2, t2, o2, n2, i2) {
    var r2 = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === e2.indexOf("auto"))
      return e2;
    var p2 = v(o2, n2, r2, i2), s2 = { top: { width: p2.width, height: t2.top - p2.top }, right: { width: p2.right - t2.right, height: p2.height }, bottom: { width: p2.width, height: p2.bottom - t2.bottom }, left: { width: t2.left - p2.left, height: p2.height } }, d2 = Object.keys(s2).map(function(e3) {
      return le({ key: e3 }, s2[e3], { area: x(s2[e3]) });
    }).sort(function(e3, t3) {
      return t3.area - e3.area;
    }), a2 = d2.filter(function(e3) {
      var t3 = e3.width, n3 = e3.height;
      return t3 >= o2.clientWidth && n3 >= o2.clientHeight;
    }), l2 = 0 < a2.length ? a2[0].key : d2[0].key, f2 = e2.split("-")[1];
    return l2 + (f2 ? "-" + f2 : "");
  }
  function L(e2, t2, o2) {
    var n2 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null, r2 = n2 ? E(t2) : a(t2, i(o2));
    return b(o2, r2, n2);
  }
  function S(e2) {
    var t2 = e2.ownerDocument.defaultView, o2 = t2.getComputedStyle(e2), n2 = parseFloat(o2.marginTop || 0) + parseFloat(o2.marginBottom || 0), i2 = parseFloat(o2.marginLeft || 0) + parseFloat(o2.marginRight || 0), r2 = { width: e2.offsetWidth + i2, height: e2.offsetHeight + n2 };
    return r2;
  }
  function T(e2) {
    var t2 = { left: "right", right: "left", bottom: "top", top: "bottom" };
    return e2.replace(/left|right|bottom|top/g, function(e3) {
      return t2[e3];
    });
  }
  function C(e2, t2, o2) {
    o2 = o2.split("-")[0];
    var n2 = S(e2), i2 = { width: n2.width, height: n2.height }, r2 = -1 !== ["right", "left"].indexOf(o2), p2 = r2 ? "top" : "left", s2 = r2 ? "left" : "top", d2 = r2 ? "height" : "width", a2 = r2 ? "width" : "height";
    return i2[p2] = t2[p2] + t2[d2] / 2 - n2[d2] / 2, i2[s2] = o2 === s2 ? t2[s2] - n2[a2] : t2[T(s2)], i2;
  }
  function D(e2, t2) {
    return Array.prototype.find ? e2.find(t2) : e2.filter(t2)[0];
  }
  function N(e2, t2, o2) {
    if (Array.prototype.findIndex)
      return e2.findIndex(function(e3) {
        return e3[t2] === o2;
      });
    var n2 = D(e2, function(e3) {
      return e3[t2] === o2;
    });
    return e2.indexOf(n2);
  }
  function P(t2, o2, n2) {
    var i2 = void 0 === n2 ? t2 : t2.slice(0, N(t2, "name", n2));
    return i2.forEach(function(t3) {
      t3["function"] && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
      var n3 = t3["function"] || t3.fn;
      t3.enabled && e(n3) && (o2.offsets.popper = g(o2.offsets.popper), o2.offsets.reference = g(o2.offsets.reference), o2 = n3(o2, t3));
    }), o2;
  }
  function k() {
    if (!this.state.isDestroyed) {
      var e2 = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: false, offsets: {} };
      e2.offsets.reference = L(this.state, this.popper, this.reference, this.options.positionFixed), e2.placement = O(this.options.placement, e2.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e2.originalPlacement = e2.placement, e2.positionFixed = this.options.positionFixed, e2.offsets.popper = C(this.popper, e2.offsets.reference, e2.placement), e2.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e2 = P(this.modifiers, e2), this.state.isCreated ? this.options.onUpdate(e2) : (this.state.isCreated = true, this.options.onCreate(e2));
    }
  }
  function W(e2, t2) {
    return e2.some(function(e3) {
      var o2 = e3.name, n2 = e3.enabled;
      return n2 && o2 === t2;
    });
  }
  function B(e2) {
    for (var t2 = [false, "ms", "Webkit", "Moz", "O"], o2 = e2.charAt(0).toUpperCase() + e2.slice(1), n2 = 0; n2 < t2.length; n2++) {
      var i2 = t2[n2], r2 = i2 ? "" + i2 + o2 : e2;
      if ("undefined" != typeof document.body.style[r2])
        return r2;
    }
    return null;
  }
  function H() {
    return this.state.isDestroyed = true, W(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[B("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
  }
  function A(e2) {
    var t2 = e2.ownerDocument;
    return t2 ? t2.defaultView : window;
  }
  function M(e2, t2, o2, i2) {
    var r2 = "BODY" === e2.nodeName, p2 = r2 ? e2.ownerDocument.defaultView : e2;
    p2.addEventListener(t2, o2, { passive: true }), r2 || M(n(p2.parentNode), t2, o2, i2), i2.push(p2);
  }
  function F(e2, t2, o2, i2) {
    o2.updateBound = i2, A(e2).addEventListener("resize", o2.updateBound, { passive: true });
    var r2 = n(e2);
    return M(r2, "scroll", o2.updateBound, o2.scrollParents), o2.scrollElement = r2, o2.eventsEnabled = true, o2;
  }
  function I() {
    this.state.eventsEnabled || (this.state = F(this.reference, this.options, this.state, this.scheduleUpdate));
  }
  function R(e2, t2) {
    return A(e2).removeEventListener("resize", t2.updateBound), t2.scrollParents.forEach(function(e3) {
      e3.removeEventListener("scroll", t2.updateBound);
    }), t2.updateBound = null, t2.scrollParents = [], t2.scrollElement = null, t2.eventsEnabled = false, t2;
  }
  function U() {
    this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = R(this.reference, this.state));
  }
  function Y(e2) {
    return "" !== e2 && !isNaN(parseFloat(e2)) && isFinite(e2);
  }
  function V(e2, t2) {
    Object.keys(t2).forEach(function(o2) {
      var n2 = "";
      -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(o2) && Y(t2[o2]) && (n2 = "px"), e2.style[o2] = t2[o2] + n2;
    });
  }
  function j(e2, t2) {
    Object.keys(t2).forEach(function(o2) {
      var n2 = t2[o2];
      false === n2 ? e2.removeAttribute(o2) : e2.setAttribute(o2, t2[o2]);
    });
  }
  function q(e2, t2) {
    var o2 = e2.offsets, n2 = o2.popper, i2 = o2.reference, r2 = $, p2 = function(e3) {
      return e3;
    }, s2 = r2(i2.width), d2 = r2(n2.width), a2 = -1 !== ["left", "right"].indexOf(e2.placement), l2 = -1 !== e2.placement.indexOf("-"), f2 = t2 ? a2 || l2 || s2 % 2 == d2 % 2 ? r2 : Z : p2, m2 = t2 ? r2 : p2;
    return { left: f2(1 == s2 % 2 && 1 == d2 % 2 && !l2 && t2 ? n2.left - 1 : n2.left), top: m2(n2.top), bottom: m2(n2.bottom), right: f2(n2.right) };
  }
  function K(e2, t2, o2) {
    var n2 = D(e2, function(e3) {
      var o3 = e3.name;
      return o3 === t2;
    }), i2 = !!n2 && e2.some(function(e3) {
      return e3.name === o2 && e3.enabled && e3.order < n2.order;
    });
    if (!i2) {
      var r2 = "`" + t2 + "`";
      console.warn("`" + o2 + "` modifier is required by " + r2 + " modifier in order to work, be sure to include it before " + r2 + "!");
    }
    return i2;
  }
  function z(e2) {
    return "end" === e2 ? "start" : "start" === e2 ? "end" : e2;
  }
  function G(e2) {
    var t2 = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], o2 = he.indexOf(e2), n2 = he.slice(o2 + 1).concat(he.slice(0, o2));
    return t2 ? n2.reverse() : n2;
  }
  function _(e2, t2, o2, n2) {
    var i2 = e2.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), r2 = +i2[1], p2 = i2[2];
    if (!r2)
      return e2;
    if (0 === p2.indexOf("%")) {
      var s2;
      switch (p2) {
        case "%p":
          s2 = o2;
          break;
        case "%":
        case "%r":
        default:
          s2 = n2;
      }
      var d2 = g(s2);
      return d2[t2] / 100 * r2;
    }
    if ("vh" === p2 || "vw" === p2) {
      var a2;
      return a2 = "vh" === p2 ? ee(document.documentElement.clientHeight, window.innerHeight || 0) : ee(document.documentElement.clientWidth, window.innerWidth || 0), a2 / 100 * r2;
    }
    return r2;
  }
  function X(e2, t2, o2, n2) {
    var i2 = [0, 0], r2 = -1 !== ["right", "left"].indexOf(n2), p2 = e2.split(/(\+|\-)/).map(function(e3) {
      return e3.trim();
    }), s2 = p2.indexOf(D(p2, function(e3) {
      return -1 !== e3.search(/,|\s/);
    }));
    p2[s2] && -1 === p2[s2].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
    var d2 = /\s*,\s*|\s+/, a2 = -1 === s2 ? [p2] : [p2.slice(0, s2).concat([p2[s2].split(d2)[0]]), [p2[s2].split(d2)[1]].concat(p2.slice(s2 + 1))];
    return a2 = a2.map(function(e3, n3) {
      var i3 = (1 === n3 ? !r2 : r2) ? "height" : "width", p3 = false;
      return e3.reduce(function(e4, t3) {
        return "" === e4[e4.length - 1] && -1 !== ["+", "-"].indexOf(t3) ? (e4[e4.length - 1] = t3, p3 = true, e4) : p3 ? (e4[e4.length - 1] += t3, p3 = false, e4) : e4.concat(t3);
      }, []).map(function(e4) {
        return _(e4, i3, t2, o2);
      });
    }), a2.forEach(function(e3, t3) {
      e3.forEach(function(o3, n3) {
        Y(o3) && (i2[t3] += o3 * ("-" === e3[n3 - 1] ? -1 : 1));
      });
    }), i2;
  }
  function J(e2, t2) {
    var o2, n2 = t2.offset, i2 = e2.placement, r2 = e2.offsets, p2 = r2.popper, s2 = r2.reference, d2 = i2.split("-")[0];
    return o2 = Y(+n2) ? [+n2, 0] : X(n2, p2, s2, d2), "left" === d2 ? (p2.top += o2[0], p2.left -= o2[1]) : "right" === d2 ? (p2.top += o2[0], p2.left += o2[1]) : "top" === d2 ? (p2.left += o2[0], p2.top -= o2[1]) : "bottom" === d2 && (p2.left += o2[0], p2.top += o2[1]), e2.popper = p2, e2;
  }
  var Q = Math.min, Z = Math.floor, $ = Math.round, ee = Math.max, te = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator, oe = function() {
    for (var e2 = ["Edge", "Trident", "Firefox"], t2 = 0; t2 < e2.length; t2 += 1)
      if (te && 0 <= navigator.userAgent.indexOf(e2[t2]))
        return 1;
    return 0;
  }(), ne = te && window.Promise, ie = ne ? function(e2) {
    var t2 = false;
    return function() {
      t2 || (t2 = true, window.Promise.resolve().then(function() {
        t2 = false, e2();
      }));
    };
  } : function(e2) {
    var t2 = false;
    return function() {
      t2 || (t2 = true, setTimeout(function() {
        t2 = false, e2();
      }, oe));
    };
  }, re = te && !!(window.MSInputMethodContext && document.documentMode), pe = te && /MSIE 10/.test(navigator.userAgent), se = function(e2, t2) {
    if (!(e2 instanceof t2))
      throw new TypeError("Cannot call a class as a function");
  }, de = function() {
    function e2(e3, t2) {
      for (var o2, n2 = 0; n2 < t2.length; n2++)
        o2 = t2[n2], o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e3, o2.key, o2);
    }
    return function(t2, o2, n2) {
      return o2 && e2(t2.prototype, o2), n2 && e2(t2, n2), t2;
    };
  }(), ae = function(e2, t2, o2) {
    return t2 in e2 ? Object.defineProperty(e2, t2, { value: o2, enumerable: true, configurable: true, writable: true }) : e2[t2] = o2, e2;
  }, le = Object.assign || function(e2) {
    for (var t2, o2 = 1; o2 < arguments.length; o2++)
      for (var n2 in t2 = arguments[o2], t2)
        Object.prototype.hasOwnProperty.call(t2, n2) && (e2[n2] = t2[n2]);
    return e2;
  }, fe = te && /Firefox/i.test(navigator.userAgent), me = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"], he = me.slice(3), ce = { FLIP: "flip", CLOCKWISE: "clockwise", COUNTERCLOCKWISE: "counterclockwise" }, ge = function() {
    function t2(o2, n2) {
      var i2 = this, r2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
      se(this, t2), this.scheduleUpdate = function() {
        return requestAnimationFrame(i2.update);
      }, this.update = ie(this.update.bind(this)), this.options = le({}, t2.Defaults, r2), this.state = { isDestroyed: false, isCreated: false, scrollParents: [] }, this.reference = o2 && o2.jquery ? o2[0] : o2, this.popper = n2 && n2.jquery ? n2[0] : n2, this.options.modifiers = {}, Object.keys(le({}, t2.Defaults.modifiers, r2.modifiers)).forEach(function(e2) {
        i2.options.modifiers[e2] = le({}, t2.Defaults.modifiers[e2] || {}, r2.modifiers ? r2.modifiers[e2] : {});
      }), this.modifiers = Object.keys(this.options.modifiers).map(function(e2) {
        return le({ name: e2 }, i2.options.modifiers[e2]);
      }).sort(function(e2, t3) {
        return e2.order - t3.order;
      }), this.modifiers.forEach(function(t3) {
        t3.enabled && e(t3.onLoad) && t3.onLoad(i2.reference, i2.popper, i2.options, t3, i2.state);
      }), this.update();
      var p2 = this.options.eventsEnabled;
      p2 && this.enableEventListeners(), this.state.eventsEnabled = p2;
    }
    return de(t2, [{ key: "update", value: function() {
      return k.call(this);
    } }, { key: "destroy", value: function() {
      return H.call(this);
    } }, { key: "enableEventListeners", value: function() {
      return I.call(this);
    } }, { key: "disableEventListeners", value: function() {
      return U.call(this);
    } }]), t2;
  }();
  return ge.Utils = ("undefined" == typeof window ? global : window).PopperUtils, ge.placements = me, ge.Defaults = { placement: "bottom", positionFixed: false, eventsEnabled: true, removeOnDestroy: false, onCreate: function() {
  }, onUpdate: function() {
  }, modifiers: { shift: { order: 100, enabled: true, fn: function(e2) {
    var t2 = e2.placement, o2 = t2.split("-")[0], n2 = t2.split("-")[1];
    if (n2) {
      var i2 = e2.offsets, r2 = i2.reference, p2 = i2.popper, s2 = -1 !== ["bottom", "top"].indexOf(o2), d2 = s2 ? "left" : "top", a2 = s2 ? "width" : "height", l2 = { start: ae({}, d2, r2[d2]), end: ae({}, d2, r2[d2] + r2[a2] - p2[a2]) };
      e2.offsets.popper = le({}, p2, l2[n2]);
    }
    return e2;
  } }, offset: { order: 200, enabled: true, fn: J, offset: 0 }, preventOverflow: { order: 300, enabled: true, fn: function(e2, t2) {
    var o2 = t2.boundariesElement || p(e2.instance.popper);
    e2.instance.reference === o2 && (o2 = p(o2));
    var n2 = B("transform"), i2 = e2.instance.popper.style, r2 = i2.top, s2 = i2.left, d2 = i2[n2];
    i2.top = "", i2.left = "", i2[n2] = "";
    var a2 = v(e2.instance.popper, e2.instance.reference, t2.padding, o2, e2.positionFixed);
    i2.top = r2, i2.left = s2, i2[n2] = d2, t2.boundaries = a2;
    var l2 = t2.priority, f2 = e2.offsets.popper, m2 = { primary: function(e3) {
      var o3 = f2[e3];
      return f2[e3] < a2[e3] && !t2.escapeWithReference && (o3 = ee(f2[e3], a2[e3])), ae({}, e3, o3);
    }, secondary: function(e3) {
      var o3 = "right" === e3 ? "left" : "top", n3 = f2[o3];
      return f2[e3] > a2[e3] && !t2.escapeWithReference && (n3 = Q(f2[o3], a2[e3] - ("right" === e3 ? f2.width : f2.height))), ae({}, o3, n3);
    } };
    return l2.forEach(function(e3) {
      var t3 = -1 === ["left", "top"].indexOf(e3) ? "secondary" : "primary";
      f2 = le({}, f2, m2[t3](e3));
    }), e2.offsets.popper = f2, e2;
  }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent" }, keepTogether: { order: 400, enabled: true, fn: function(e2) {
    var t2 = e2.offsets, o2 = t2.popper, n2 = t2.reference, i2 = e2.placement.split("-")[0], r2 = Z, p2 = -1 !== ["top", "bottom"].indexOf(i2), s2 = p2 ? "right" : "bottom", d2 = p2 ? "left" : "top", a2 = p2 ? "width" : "height";
    return o2[s2] < r2(n2[d2]) && (e2.offsets.popper[d2] = r2(n2[d2]) - o2[a2]), o2[d2] > r2(n2[s2]) && (e2.offsets.popper[d2] = r2(n2[s2])), e2;
  } }, arrow: { order: 500, enabled: true, fn: function(e2, o2) {
    var n2;
    if (!K(e2.instance.modifiers, "arrow", "keepTogether"))
      return e2;
    var i2 = o2.element;
    if ("string" == typeof i2) {
      if (i2 = e2.instance.popper.querySelector(i2), !i2)
        return e2;
    } else if (!e2.instance.popper.contains(i2))
      return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e2;
    var r2 = e2.placement.split("-")[0], p2 = e2.offsets, s2 = p2.popper, d2 = p2.reference, a2 = -1 !== ["left", "right"].indexOf(r2), l2 = a2 ? "height" : "width", f2 = a2 ? "Top" : "Left", m2 = f2.toLowerCase(), h2 = a2 ? "left" : "top", c2 = a2 ? "bottom" : "right", u2 = S(i2)[l2];
    d2[c2] - u2 < s2[m2] && (e2.offsets.popper[m2] -= s2[m2] - (d2[c2] - u2)), d2[m2] + u2 > s2[c2] && (e2.offsets.popper[m2] += d2[m2] + u2 - s2[c2]), e2.offsets.popper = g(e2.offsets.popper);
    var b2 = d2[m2] + d2[l2] / 2 - u2 / 2, w2 = t(e2.instance.popper), y2 = parseFloat(w2["margin" + f2]), E2 = parseFloat(w2["border" + f2 + "Width"]), v2 = b2 - e2.offsets.popper[m2] - y2 - E2;
    return v2 = ee(Q(s2[l2] - u2, v2), 0), e2.arrowElement = i2, e2.offsets.arrow = (n2 = {}, ae(n2, m2, $(v2)), ae(n2, h2, ""), n2), e2;
  }, element: "[x-arrow]" }, flip: { order: 600, enabled: true, fn: function(e2, t2) {
    if (W(e2.instance.modifiers, "inner"))
      return e2;
    if (e2.flipped && e2.placement === e2.originalPlacement)
      return e2;
    var o2 = v(e2.instance.popper, e2.instance.reference, t2.padding, t2.boundariesElement, e2.positionFixed), n2 = e2.placement.split("-")[0], i2 = T(n2), r2 = e2.placement.split("-")[1] || "", p2 = [];
    switch (t2.behavior) {
      case ce.FLIP:
        p2 = [n2, i2];
        break;
      case ce.CLOCKWISE:
        p2 = G(n2);
        break;
      case ce.COUNTERCLOCKWISE:
        p2 = G(n2, true);
        break;
      default:
        p2 = t2.behavior;
    }
    return p2.forEach(function(s2, d2) {
      if (n2 !== s2 || p2.length === d2 + 1)
        return e2;
      n2 = e2.placement.split("-")[0], i2 = T(n2);
      var a2 = e2.offsets.popper, l2 = e2.offsets.reference, f2 = Z, m2 = "left" === n2 && f2(a2.right) > f2(l2.left) || "right" === n2 && f2(a2.left) < f2(l2.right) || "top" === n2 && f2(a2.bottom) > f2(l2.top) || "bottom" === n2 && f2(a2.top) < f2(l2.bottom), h2 = f2(a2.left) < f2(o2.left), c2 = f2(a2.right) > f2(o2.right), g2 = f2(a2.top) < f2(o2.top), u2 = f2(a2.bottom) > f2(o2.bottom), b2 = "left" === n2 && h2 || "right" === n2 && c2 || "top" === n2 && g2 || "bottom" === n2 && u2, w2 = -1 !== ["top", "bottom"].indexOf(n2), y2 = !!t2.flipVariations && (w2 && "start" === r2 && h2 || w2 && "end" === r2 && c2 || !w2 && "start" === r2 && g2 || !w2 && "end" === r2 && u2), E2 = !!t2.flipVariationsByContent && (w2 && "start" === r2 && c2 || w2 && "end" === r2 && h2 || !w2 && "start" === r2 && u2 || !w2 && "end" === r2 && g2), v2 = y2 || E2;
      (m2 || b2 || v2) && (e2.flipped = true, (m2 || b2) && (n2 = p2[d2 + 1]), v2 && (r2 = z(r2)), e2.placement = n2 + (r2 ? "-" + r2 : ""), e2.offsets.popper = le({}, e2.offsets.popper, C(e2.instance.popper, e2.offsets.reference, e2.placement)), e2 = P(e2.instance.modifiers, e2, "flip"));
    }), e2;
  }, behavior: "flip", padding: 5, boundariesElement: "viewport", flipVariations: false, flipVariationsByContent: false }, inner: { order: 700, enabled: false, fn: function(e2) {
    var t2 = e2.placement, o2 = t2.split("-")[0], n2 = e2.offsets, i2 = n2.popper, r2 = n2.reference, p2 = -1 !== ["left", "right"].indexOf(o2), s2 = -1 === ["top", "left"].indexOf(o2);
    return i2[p2 ? "left" : "top"] = r2[o2] - (s2 ? i2[p2 ? "width" : "height"] : 0), e2.placement = T(t2), e2.offsets.popper = g(i2), e2;
  } }, hide: { order: 800, enabled: true, fn: function(e2) {
    if (!K(e2.instance.modifiers, "hide", "preventOverflow"))
      return e2;
    var t2 = e2.offsets.reference, o2 = D(e2.instance.modifiers, function(e3) {
      return "preventOverflow" === e3.name;
    }).boundaries;
    if (t2.bottom < o2.top || t2.left > o2.right || t2.top > o2.bottom || t2.right < o2.left) {
      if (true === e2.hide)
        return e2;
      e2.hide = true, e2.attributes["x-out-of-boundaries"] = "";
    } else {
      if (false === e2.hide)
        return e2;
      e2.hide = false, e2.attributes["x-out-of-boundaries"] = false;
    }
    return e2;
  } }, computeStyle: { order: 850, enabled: true, fn: function(e2, t2) {
    var o2 = t2.x, n2 = t2.y, i2 = e2.offsets.popper, r2 = D(e2.instance.modifiers, function(e3) {
      return "applyStyle" === e3.name;
    }).gpuAcceleration;
    void 0 !== r2 && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
    var s2, d2, a2 = void 0 === r2 ? t2.gpuAcceleration : r2, l2 = p(e2.instance.popper), f2 = u(l2), m2 = { position: i2.position }, h2 = q(e2, 2 > window.devicePixelRatio || !fe), c2 = "bottom" === o2 ? "top" : "bottom", g2 = "right" === n2 ? "left" : "right", b2 = B("transform");
    if (d2 = "bottom" == c2 ? "HTML" === l2.nodeName ? -l2.clientHeight + h2.bottom : -f2.height + h2.bottom : h2.top, s2 = "right" == g2 ? "HTML" === l2.nodeName ? -l2.clientWidth + h2.right : -f2.width + h2.right : h2.left, a2 && b2)
      m2[b2] = "translate3d(" + s2 + "px, " + d2 + "px, 0)", m2[c2] = 0, m2[g2] = 0, m2.willChange = "transform";
    else {
      var w2 = "bottom" == c2 ? -1 : 1, y2 = "right" == g2 ? -1 : 1;
      m2[c2] = d2 * w2, m2[g2] = s2 * y2, m2.willChange = c2 + ", " + g2;
    }
    var E2 = { "x-placement": e2.placement };
    return e2.attributes = le({}, E2, e2.attributes), e2.styles = le({}, m2, e2.styles), e2.arrowStyles = le({}, e2.offsets.arrow, e2.arrowStyles), e2;
  }, gpuAcceleration: true, x: "bottom", y: "right" }, applyStyle: { order: 900, enabled: true, fn: function(e2) {
    return V(e2.instance.popper, e2.styles), j(e2.instance.popper, e2.attributes), e2.arrowElement && Object.keys(e2.arrowStyles).length && V(e2.arrowElement, e2.arrowStyles), e2;
  }, onLoad: function(e2, t2, o2, n2, i2) {
    var r2 = L(i2, t2, e2, o2.positionFixed), p2 = O(o2.placement, r2, t2, e2, o2.modifiers.flip.boundariesElement, o2.modifiers.flip.padding);
    return t2.setAttribute("x-placement", p2), V(t2, { position: o2.positionFixed ? "fixed" : "absolute" }), o2;
  }, gpuAcceleration: void 0 } } }, ge;
});
/*!
  * Bootstrap v4.6.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = {}, t.jQuery, t.Popper);
}(this, function(t, e, n) {
  "use strict";
  function i(t2) {
    return t2 && "object" == typeof t2 && "default" in t2 ? t2 : { default: t2 };
  }
  var o = i(e), a = i(n);
  function s(t2, e2) {
    for (var n2 = 0; n2 < e2.length; n2++) {
      var i2 = e2[n2];
      i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(t2, i2.key, i2);
    }
  }
  function l(t2, e2, n2) {
    return e2 && s(t2.prototype, e2), n2 && s(t2, n2), Object.defineProperty(t2, "prototype", { writable: false }), t2;
  }
  function r() {
    return r = Object.assign ? Object.assign.bind() : function(t2) {
      for (var e2 = 1; e2 < arguments.length; e2++) {
        var n2 = arguments[e2];
        for (var i2 in n2)
          Object.prototype.hasOwnProperty.call(n2, i2) && (t2[i2] = n2[i2]);
      }
      return t2;
    }, r.apply(this, arguments);
  }
  function u(t2, e2) {
    return u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t3, e3) {
      return t3.__proto__ = e3, t3;
    }, u(t2, e2);
  }
  var f = "transitionend";
  var d = { TRANSITION_END: "bsTransitionEnd", getUID: function(t2) {
    do {
      t2 += ~~(1e6 * Math.random());
    } while (document.getElementById(t2));
    return t2;
  }, getSelectorFromElement: function(t2) {
    var e2 = t2.getAttribute("data-target");
    if (!e2 || "#" === e2) {
      var n2 = t2.getAttribute("href");
      e2 = n2 && "#" !== n2 ? n2.trim() : "";
    }
    try {
      return document.querySelector(e2) ? e2 : null;
    } catch (t3) {
      return null;
    }
  }, getTransitionDurationFromElement: function(t2) {
    if (!t2)
      return 0;
    var e2 = o.default(t2).css("transition-duration"), n2 = o.default(t2).css("transition-delay"), i2 = parseFloat(e2), a2 = parseFloat(n2);
    return i2 || a2 ? (e2 = e2.split(",")[0], n2 = n2.split(",")[0], 1e3 * (parseFloat(e2) + parseFloat(n2))) : 0;
  }, reflow: function(t2) {
    return t2.offsetHeight;
  }, triggerTransitionEnd: function(t2) {
    o.default(t2).trigger(f);
  }, supportsTransitionEnd: function() {
    return Boolean(f);
  }, isElement: function(t2) {
    return (t2[0] || t2).nodeType;
  }, typeCheckConfig: function(t2, e2, n2) {
    for (var i2 in n2)
      if (Object.prototype.hasOwnProperty.call(n2, i2)) {
        var o2 = n2[i2], a2 = e2[i2], s2 = a2 && d.isElement(a2) ? "element" : null === (l2 = a2) || "undefined" == typeof l2 ? "" + l2 : {}.toString.call(l2).match(/\s([a-z]+)/i)[1].toLowerCase();
        if (!new RegExp(o2).test(s2))
          throw new Error(t2.toUpperCase() + ': Option "' + i2 + '" provided type "' + s2 + '" but expected type "' + o2 + '".');
      }
    var l2;
  }, findShadowRoot: function(t2) {
    if (!document.documentElement.attachShadow)
      return null;
    if ("function" == typeof t2.getRootNode) {
      var e2 = t2.getRootNode();
      return e2 instanceof ShadowRoot ? e2 : null;
    }
    return t2 instanceof ShadowRoot ? t2 : t2.parentNode ? d.findShadowRoot(t2.parentNode) : null;
  }, jQueryDetection: function() {
    if ("undefined" == typeof o.default)
      throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
    var t2 = o.default.fn.jquery.split(" ")[0].split(".");
    if (t2[0] < 2 && t2[1] < 9 || 1 === t2[0] && 9 === t2[1] && t2[2] < 1 || t2[0] >= 4)
      throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
  } };
  d.jQueryDetection(), o.default.fn.emulateTransitionEnd = function(t2) {
    var e2 = this, n2 = false;
    return o.default(this).one(d.TRANSITION_END, function() {
      n2 = true;
    }), setTimeout(function() {
      n2 || d.triggerTransitionEnd(e2);
    }, t2), this;
  }, o.default.event.special[d.TRANSITION_END] = { bindType: f, delegateType: f, handle: function(t2) {
    if (o.default(t2.target).is(this))
      return t2.handleObj.handler.apply(this, arguments);
  } };
  var c = "bs.alert", h = o.default.fn.alert, g = function() {
    function t2(t3) {
      this._element = t3;
    }
    var e2 = t2.prototype;
    return e2.close = function(t3) {
      var e3 = this._element;
      t3 && (e3 = this._getRootElement(t3)), this._triggerCloseEvent(e3).isDefaultPrevented() || this._removeElement(e3);
    }, e2.dispose = function() {
      o.default.removeData(this._element, c), this._element = null;
    }, e2._getRootElement = function(t3) {
      var e3 = d.getSelectorFromElement(t3), n2 = false;
      return e3 && (n2 = document.querySelector(e3)), n2 || (n2 = o.default(t3).closest(".alert")[0]), n2;
    }, e2._triggerCloseEvent = function(t3) {
      var e3 = o.default.Event("close.bs.alert");
      return o.default(t3).trigger(e3), e3;
    }, e2._removeElement = function(t3) {
      var e3 = this;
      if (o.default(t3).removeClass("show"), o.default(t3).hasClass("fade")) {
        var n2 = d.getTransitionDurationFromElement(t3);
        o.default(t3).one(d.TRANSITION_END, function(n3) {
          return e3._destroyElement(t3, n3);
        }).emulateTransitionEnd(n2);
      } else
        this._destroyElement(t3);
    }, e2._destroyElement = function(t3) {
      o.default(t3).detach().trigger("closed.bs.alert").remove();
    }, t2._jQueryInterface = function(e3) {
      return this.each(function() {
        var n2 = o.default(this), i2 = n2.data(c);
        i2 || (i2 = new t2(this), n2.data(c, i2)), "close" === e3 && i2[e3](this);
      });
    }, t2._handleDismiss = function(t3) {
      return function(e3) {
        e3 && e3.preventDefault(), t3.close(this);
      };
    }, l(t2, null, [{ key: "VERSION", get: function() {
      return "4.6.2";
    } }]), t2;
  }();
  o.default(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', g._handleDismiss(new g())), o.default.fn.alert = g._jQueryInterface, o.default.fn.alert.Constructor = g, o.default.fn.alert.noConflict = function() {
    return o.default.fn.alert = h, g._jQueryInterface;
  };
  var m = "bs.button", p = o.default.fn.button, _ = "active", v = '[data-toggle^="button"]', y = 'input:not([type="hidden"])', b = ".btn", E = function() {
    function t2(t3) {
      this._element = t3, this.shouldAvoidTriggerChange = false;
    }
    var e2 = t2.prototype;
    return e2.toggle = function() {
      var t3 = true, e3 = true, n2 = o.default(this._element).closest('[data-toggle="buttons"]')[0];
      if (n2) {
        var i2 = this._element.querySelector(y);
        if (i2) {
          if ("radio" === i2.type)
            if (i2.checked && this._element.classList.contains(_))
              t3 = false;
            else {
              var a2 = n2.querySelector(".active");
              a2 && o.default(a2).removeClass(_);
            }
          t3 && ("checkbox" !== i2.type && "radio" !== i2.type || (i2.checked = !this._element.classList.contains(_)), this.shouldAvoidTriggerChange || o.default(i2).trigger("change")), i2.focus(), e3 = false;
        }
      }
      this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (e3 && this._element.setAttribute("aria-pressed", !this._element.classList.contains(_)), t3 && o.default(this._element).toggleClass(_));
    }, e2.dispose = function() {
      o.default.removeData(this._element, m), this._element = null;
    }, t2._jQueryInterface = function(e3, n2) {
      return this.each(function() {
        var i2 = o.default(this), a2 = i2.data(m);
        a2 || (a2 = new t2(this), i2.data(m, a2)), a2.shouldAvoidTriggerChange = n2, "toggle" === e3 && a2[e3]();
      });
    }, l(t2, null, [{ key: "VERSION", get: function() {
      return "4.6.2";
    } }]), t2;
  }();
  o.default(document).on("click.bs.button.data-api", v, function(t2) {
    var e2 = t2.target, n2 = e2;
    if (o.default(e2).hasClass("btn") || (e2 = o.default(e2).closest(b)[0]), !e2 || e2.hasAttribute("disabled") || e2.classList.contains("disabled"))
      t2.preventDefault();
    else {
      var i2 = e2.querySelector(y);
      if (i2 && (i2.hasAttribute("disabled") || i2.classList.contains("disabled")))
        return void t2.preventDefault();
      "INPUT" !== n2.tagName && "LABEL" === e2.tagName || E._jQueryInterface.call(o.default(e2), "toggle", "INPUT" === n2.tagName);
    }
  }).on("focus.bs.button.data-api blur.bs.button.data-api", v, function(t2) {
    var e2 = o.default(t2.target).closest(b)[0];
    o.default(e2).toggleClass("focus", /^focus(in)?$/.test(t2.type));
  }), o.default(window).on("load.bs.button.data-api", function() {
    for (var t2 = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), e2 = 0, n2 = t2.length; e2 < n2; e2++) {
      var i2 = t2[e2], o2 = i2.querySelector(y);
      o2.checked || o2.hasAttribute("checked") ? i2.classList.add(_) : i2.classList.remove(_);
    }
    for (var a2 = 0, s2 = (t2 = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; a2 < s2; a2++) {
      var l2 = t2[a2];
      "true" === l2.getAttribute("aria-pressed") ? l2.classList.add(_) : l2.classList.remove(_);
    }
  }), o.default.fn.button = E._jQueryInterface, o.default.fn.button.Constructor = E, o.default.fn.button.noConflict = function() {
    return o.default.fn.button = p, E._jQueryInterface;
  };
  var T = "carousel", w = "bs.carousel", C = o.default.fn[T], S = "active", N = "next", D = "prev", A = "slid.bs.carousel", I = ".active.carousel-item", k = { interval: 5e3, keyboard: true, slide: false, pause: "hover", wrap: true, touch: true }, O = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" }, j = { TOUCH: "touch", PEN: "pen" }, P = function() {
    function t2(t3, e3) {
      this._items = null, this._interval = null, this._activeElement = null, this._isPaused = false, this._isSliding = false, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e3), this._element = t3, this._indicatorsElement = this._element.querySelector(".carousel-indicators"), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners();
    }
    var e2 = t2.prototype;
    return e2.next = function() {
      this._isSliding || this._slide(N);
    }, e2.nextWhenVisible = function() {
      var t3 = o.default(this._element);
      !document.hidden && t3.is(":visible") && "hidden" !== t3.css("visibility") && this.next();
    }, e2.prev = function() {
      this._isSliding || this._slide(D);
    }, e2.pause = function(t3) {
      t3 || (this._isPaused = true), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (d.triggerTransitionEnd(this._element), this.cycle(true)), clearInterval(this._interval), this._interval = null;
    }, e2.cycle = function(t3) {
      t3 || (this._isPaused = false), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
    }, e2.to = function(t3) {
      var e3 = this;
      this._activeElement = this._element.querySelector(I);
      var n2 = this._getItemIndex(this._activeElement);
      if (!(t3 > this._items.length - 1 || t3 < 0))
        if (this._isSliding)
          o.default(this._element).one(A, function() {
            return e3.to(t3);
          });
        else {
          if (n2 === t3)
            return this.pause(), void this.cycle();
          var i2 = t3 > n2 ? N : D;
          this._slide(i2, this._items[t3]);
        }
    }, e2.dispose = function() {
      o.default(this._element).off(".bs.carousel"), o.default.removeData(this._element, w), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
    }, e2._getConfig = function(t3) {
      return t3 = r({}, k, t3), d.typeCheckConfig(T, t3, O), t3;
    }, e2._handleSwipe = function() {
      var t3 = Math.abs(this.touchDeltaX);
      if (!(t3 <= 40)) {
        var e3 = t3 / this.touchDeltaX;
        this.touchDeltaX = 0, e3 > 0 && this.prev(), e3 < 0 && this.next();
      }
    }, e2._addEventListeners = function() {
      var t3 = this;
      this._config.keyboard && o.default(this._element).on("keydown.bs.carousel", function(e3) {
        return t3._keydown(e3);
      }), "hover" === this._config.pause && o.default(this._element).on("mouseenter.bs.carousel", function(e3) {
        return t3.pause(e3);
      }).on("mouseleave.bs.carousel", function(e3) {
        return t3.cycle(e3);
      }), this._config.touch && this._addTouchEventListeners();
    }, e2._addTouchEventListeners = function() {
      var t3 = this;
      if (this._touchSupported) {
        var e3 = function(e4) {
          t3._pointerEvent && j[e4.originalEvent.pointerType.toUpperCase()] ? t3.touchStartX = e4.originalEvent.clientX : t3._pointerEvent || (t3.touchStartX = e4.originalEvent.touches[0].clientX);
        }, n2 = function(e4) {
          t3._pointerEvent && j[e4.originalEvent.pointerType.toUpperCase()] && (t3.touchDeltaX = e4.originalEvent.clientX - t3.touchStartX), t3._handleSwipe(), "hover" === t3._config.pause && (t3.pause(), t3.touchTimeout && clearTimeout(t3.touchTimeout), t3.touchTimeout = setTimeout(function(e5) {
            return t3.cycle(e5);
          }, 500 + t3._config.interval));
        };
        o.default(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", function(t4) {
          return t4.preventDefault();
        }), this._pointerEvent ? (o.default(this._element).on("pointerdown.bs.carousel", function(t4) {
          return e3(t4);
        }), o.default(this._element).on("pointerup.bs.carousel", function(t4) {
          return n2(t4);
        }), this._element.classList.add("pointer-event")) : (o.default(this._element).on("touchstart.bs.carousel", function(t4) {
          return e3(t4);
        }), o.default(this._element).on("touchmove.bs.carousel", function(e4) {
          return function(e5) {
            t3.touchDeltaX = e5.originalEvent.touches && e5.originalEvent.touches.length > 1 ? 0 : e5.originalEvent.touches[0].clientX - t3.touchStartX;
          }(e4);
        }), o.default(this._element).on("touchend.bs.carousel", function(t4) {
          return n2(t4);
        }));
      }
    }, e2._keydown = function(t3) {
      if (!/input|textarea/i.test(t3.target.tagName))
        switch (t3.which) {
          case 37:
            t3.preventDefault(), this.prev();
            break;
          case 39:
            t3.preventDefault(), this.next();
        }
    }, e2._getItemIndex = function(t3) {
      return this._items = t3 && t3.parentNode ? [].slice.call(t3.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(t3);
    }, e2._getItemByDirection = function(t3, e3) {
      var n2 = t3 === N, i2 = t3 === D, o2 = this._getItemIndex(e3), a2 = this._items.length - 1;
      if ((i2 && 0 === o2 || n2 && o2 === a2) && !this._config.wrap)
        return e3;
      var s2 = (o2 + (t3 === D ? -1 : 1)) % this._items.length;
      return -1 === s2 ? this._items[this._items.length - 1] : this._items[s2];
    }, e2._triggerSlideEvent = function(t3, e3) {
      var n2 = this._getItemIndex(t3), i2 = this._getItemIndex(this._element.querySelector(I)), a2 = o.default.Event("slide.bs.carousel", { relatedTarget: t3, direction: e3, from: i2, to: n2 });
      return o.default(this._element).trigger(a2), a2;
    }, e2._setActiveIndicatorElement = function(t3) {
      if (this._indicatorsElement) {
        var e3 = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
        o.default(e3).removeClass(S);
        var n2 = this._indicatorsElement.children[this._getItemIndex(t3)];
        n2 && o.default(n2).addClass(S);
      }
    }, e2._updateInterval = function() {
      var t3 = this._activeElement || this._element.querySelector(I);
      if (t3) {
        var e3 = parseInt(t3.getAttribute("data-interval"), 10);
        e3 ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e3) : this._config.interval = this._config.defaultInterval || this._config.interval;
      }
    }, e2._slide = function(t3, e3) {
      var n2, i2, a2, s2 = this, l2 = this._element.querySelector(I), r2 = this._getItemIndex(l2), u2 = e3 || l2 && this._getItemByDirection(t3, l2), f2 = this._getItemIndex(u2), c2 = Boolean(this._interval);
      if (t3 === N ? (n2 = "carousel-item-left", i2 = "carousel-item-next", a2 = "left") : (n2 = "carousel-item-right", i2 = "carousel-item-prev", a2 = "right"), u2 && o.default(u2).hasClass(S))
        this._isSliding = false;
      else if (!this._triggerSlideEvent(u2, a2).isDefaultPrevented() && l2 && u2) {
        this._isSliding = true, c2 && this.pause(), this._setActiveIndicatorElement(u2), this._activeElement = u2;
        var h2 = o.default.Event(A, { relatedTarget: u2, direction: a2, from: r2, to: f2 });
        if (o.default(this._element).hasClass("slide")) {
          o.default(u2).addClass(i2), d.reflow(u2), o.default(l2).addClass(n2), o.default(u2).addClass(n2);
          var g2 = d.getTransitionDurationFromElement(l2);
          o.default(l2).one(d.TRANSITION_END, function() {
            o.default(u2).removeClass(n2 + " " + i2).addClass(S), o.default(l2).removeClass("active " + i2 + " " + n2), s2._isSliding = false, setTimeout(function() {
              return o.default(s2._element).trigger(h2);
            }, 0);
          }).emulateTransitionEnd(g2);
        } else
          o.default(l2).removeClass(S), o.default(u2).addClass(S), this._isSliding = false, o.default(this._element).trigger(h2);
        c2 && this.cycle();
      }
    }, t2._jQueryInterface = function(e3) {
      return this.each(function() {
        var n2 = o.default(this).data(w), i2 = r({}, k, o.default(this).data());
        "object" == typeof e3 && (i2 = r({}, i2, e3));
        var a2 = "string" == typeof e3 ? e3 : i2.slide;
        if (n2 || (n2 = new t2(this, i2), o.default(this).data(w, n2)), "number" == typeof e3)
          n2.to(e3);
        else if ("string" == typeof a2) {
          if ("undefined" == typeof n2[a2])
            throw new TypeError('No method named "' + a2 + '"');
          n2[a2]();
        } else
          i2.interval && i2.ride && (n2.pause(), n2.cycle());
      });
    }, t2._dataApiClickHandler = function(e3) {
      var n2 = d.getSelectorFromElement(this);
      if (n2) {
        var i2 = o.default(n2)[0];
        if (i2 && o.default(i2).hasClass("carousel")) {
          var a2 = r({}, o.default(i2).data(), o.default(this).data()), s2 = this.getAttribute("data-slide-to");
          s2 && (a2.interval = false), t2._jQueryInterface.call(o.default(i2), a2), s2 && o.default(i2).data(w).to(s2), e3.preventDefault();
        }
      }
    }, l(t2, null, [{ key: "VERSION", get: function() {
      return "4.6.2";
    } }, { key: "Default", get: function() {
      return k;
    } }]), t2;
  }();
  o.default(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", P._dataApiClickHandler), o.default(window).on("load.bs.carousel.data-api", function() {
    for (var t2 = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), e2 = 0, n2 = t2.length; e2 < n2; e2++) {
      var i2 = o.default(t2[e2]);
      P._jQueryInterface.call(i2, i2.data());
    }
  }), o.default.fn[T] = P._jQueryInterface, o.default.fn[T].Constructor = P, o.default.fn[T].noConflict = function() {
    return o.default.fn[T] = C, P._jQueryInterface;
  };
  var L = "collapse", R = "bs.collapse", x = o.default.fn[L], q = "show", F = "collapse", Q = "collapsing", B = "collapsed", H = "width", U = '[data-toggle="collapse"]', M = { toggle: true, parent: "" }, W = { toggle: "boolean", parent: "(string|element)" }, V = function() {
    function t2(t3, e3) {
      this._isTransitioning = false, this._element = t3, this._config = this._getConfig(e3), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t3.id + '"],[data-toggle="collapse"][data-target="#' + t3.id + '"]'));
      for (var n2 = [].slice.call(document.querySelectorAll(U)), i2 = 0, o2 = n2.length; i2 < o2; i2++) {
        var a2 = n2[i2], s2 = d.getSelectorFromElement(a2), l2 = [].slice.call(document.querySelectorAll(s2)).filter(function(e4) {
          return e4 === t3;
        });
        null !== s2 && l2.length > 0 && (this._selector = s2, this._triggerArray.push(a2));
      }
      this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
    }
    var e2 = t2.prototype;
    return e2.toggle = function() {
      o.default(this._element).hasClass(q) ? this.hide() : this.show();
    }, e2.show = function() {
      var e3, n2, i2 = this;
      if (!(this._isTransitioning || o.default(this._element).hasClass(q) || (this._parent && 0 === (e3 = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function(t3) {
        return "string" == typeof i2._config.parent ? t3.getAttribute("data-parent") === i2._config.parent : t3.classList.contains(F);
      })).length && (e3 = null), e3 && (n2 = o.default(e3).not(this._selector).data(R)) && n2._isTransitioning))) {
        var a2 = o.default.Event("show.bs.collapse");
        if (o.default(this._element).trigger(a2), !a2.isDefaultPrevented()) {
          e3 && (t2._jQueryInterface.call(o.default(e3).not(this._selector), "hide"), n2 || o.default(e3).data(R, null));
          var s2 = this._getDimension();
          o.default(this._element).removeClass(F).addClass(Q), this._element.style[s2] = 0, this._triggerArray.length && o.default(this._triggerArray).removeClass(B).attr("aria-expanded", true), this.setTransitioning(true);
          var l2 = "scroll" + (s2[0].toUpperCase() + s2.slice(1)), r2 = d.getTransitionDurationFromElement(this._element);
          o.default(this._element).one(d.TRANSITION_END, function() {
            o.default(i2._element).removeClass(Q).addClass("collapse show"), i2._element.style[s2] = "", i2.setTransitioning(false), o.default(i2._element).trigger("shown.bs.collapse");
          }).emulateTransitionEnd(r2), this._element.style[s2] = this._element[l2] + "px";
        }
      }
    }, e2.hide = function() {
      var t3 = this;
      if (!this._isTransitioning && o.default(this._element).hasClass(q)) {
        var e3 = o.default.Event("hide.bs.collapse");
        if (o.default(this._element).trigger(e3), !e3.isDefaultPrevented()) {
          var n2 = this._getDimension();
          this._element.style[n2] = this._element.getBoundingClientRect()[n2] + "px", d.reflow(this._element), o.default(this._element).addClass(Q).removeClass("collapse show");
          var i2 = this._triggerArray.length;
          if (i2 > 0)
            for (var a2 = 0; a2 < i2; a2++) {
              var s2 = this._triggerArray[a2], l2 = d.getSelectorFromElement(s2);
              null !== l2 && (o.default([].slice.call(document.querySelectorAll(l2))).hasClass(q) || o.default(s2).addClass(B).attr("aria-expanded", false));
            }
          this.setTransitioning(true), this._element.style[n2] = "";
          var r2 = d.getTransitionDurationFromElement(this._element);
          o.default(this._element).one(d.TRANSITION_END, function() {
            t3.setTransitioning(false), o.default(t3._element).removeClass(Q).addClass(F).trigger("hidden.bs.collapse");
          }).emulateTransitionEnd(r2);
        }
      }
    }, e2.setTransitioning = function(t3) {
      this._isTransitioning = t3;
    }, e2.dispose = function() {
      o.default.removeData(this._element, R), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
    }, e2._getConfig = function(t3) {
      return (t3 = r({}, M, t3)).toggle = Boolean(t3.toggle), d.typeCheckConfig(L, t3, W), t3;
    }, e2._getDimension = function() {
      return o.default(this._element).hasClass(H) ? H : "height";
    }, e2._getParent = function() {
      var e3, n2 = this;
      d.isElement(this._config.parent) ? (e3 = this._config.parent, "undefined" != typeof this._config.parent.jquery && (e3 = this._config.parent[0])) : e3 = document.querySelector(this._config.parent);
      var i2 = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]', a2 = [].slice.call(e3.querySelectorAll(i2));
      return o.default(a2).each(function(e4, i3) {
        n2._addAriaAndCollapsedClass(t2._getTargetFromElement(i3), [i3]);
      }), e3;
    }, e2._addAriaAndCollapsedClass = function(t3, e3) {
      var n2 = o.default(t3).hasClass(q);
      e3.length && o.default(e3).toggleClass(B, !n2).attr("aria-expanded", n2);
    }, t2._getTargetFromElement = function(t3) {
      var e3 = d.getSelectorFromElement(t3);
      return e3 ? document.querySelector(e3) : null;
    }, t2._jQueryInterface = function(e3) {
      return this.each(function() {
        var n2 = o.default(this), i2 = n2.data(R), a2 = r({}, M, n2.data(), "object" == typeof e3 && e3 ? e3 : {});
        if (!i2 && a2.toggle && "string" == typeof e3 && /show|hide/.test(e3) && (a2.toggle = false), i2 || (i2 = new t2(this, a2), n2.data(R, i2)), "string" == typeof e3) {
          if ("undefined" == typeof i2[e3])
            throw new TypeError('No method named "' + e3 + '"');
          i2[e3]();
        }
      });
    }, l(t2, null, [{ key: "VERSION", get: function() {
      return "4.6.2";
    } }, { key: "Default", get: function() {
      return M;
    } }]), t2;
  }();
  o.default(document).on("click.bs.collapse.data-api", U, function(t2) {
    "A" === t2.currentTarget.tagName && t2.preventDefault();
    var e2 = o.default(this), n2 = d.getSelectorFromElement(this), i2 = [].slice.call(document.querySelectorAll(n2));
    o.default(i2).each(function() {
      var t3 = o.default(this), n3 = t3.data(R) ? "toggle" : e2.data();
      V._jQueryInterface.call(t3, n3);
    });
  }), o.default.fn[L] = V._jQueryInterface, o.default.fn[L].Constructor = V, o.default.fn[L].noConflict = function() {
    return o.default.fn[L] = x, V._jQueryInterface;
  };
  var z = "dropdown", K = "bs.dropdown", X = o.default.fn[z], Y = new RegExp("38|40|27"), $ = "disabled", J = "show", G = "dropdown-menu-right", Z = "hide.bs.dropdown", tt = "hidden.bs.dropdown", et = "click.bs.dropdown.data-api", nt = "keydown.bs.dropdown.data-api", it = '[data-toggle="dropdown"]', ot = ".dropdown-menu", at = { offset: 0, flip: true, boundary: "scrollParent", reference: "toggle", display: "dynamic", popperConfig: null }, st = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string", popperConfig: "(null|object)" }, lt = function() {
    function t2(t3, e3) {
      this._element = t3, this._popper = null, this._config = this._getConfig(e3), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
    }
    var e2 = t2.prototype;
    return e2.toggle = function() {
      if (!this._element.disabled && !o.default(this._element).hasClass($)) {
        var e3 = o.default(this._menu).hasClass(J);
        t2._clearMenus(), e3 || this.show(true);
      }
    }, e2.show = function(e3) {
      if (void 0 === e3 && (e3 = false), !(this._element.disabled || o.default(this._element).hasClass($) || o.default(this._menu).hasClass(J))) {
        var n2 = { relatedTarget: this._element }, i2 = o.default.Event("show.bs.dropdown", n2), s2 = t2._getParentFromElement(this._element);
        if (o.default(s2).trigger(i2), !i2.isDefaultPrevented()) {
          if (!this._inNavbar && e3) {
            if ("undefined" == typeof a.default)
              throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            var l2 = this._element;
            "parent" === this._config.reference ? l2 = s2 : d.isElement(this._config.reference) && (l2 = this._config.reference, "undefined" != typeof this._config.reference.jquery && (l2 = this._config.reference[0])), "scrollParent" !== this._config.boundary && o.default(s2).addClass("position-static"), this._popper = new a.default(l2, this._menu, this._getPopperConfig());
          }
          "ontouchstart" in document.documentElement && 0 === o.default(s2).closest(".navbar-nav").length && o.default(document.body).children().on("mouseover", null, o.default.noop), this._element.focus(), this._element.setAttribute("aria-expanded", true), o.default(this._menu).toggleClass(J), o.default(s2).toggleClass(J).trigger(o.default.Event("shown.bs.dropdown", n2));
        }
      }
    }, e2.hide = function() {
      if (!this._element.disabled && !o.default(this._element).hasClass($) && o.default(this._menu).hasClass(J)) {
        var e3 = { relatedTarget: this._element }, n2 = o.default.Event(Z, e3), i2 = t2._getParentFromElement(this._element);
        o.default(i2).trigger(n2), n2.isDefaultPrevented() || (this._popper && this._popper.destroy(), o.default(this._menu).toggleClass(J), o.default(i2).toggleClass(J).trigger(o.default.Event(tt, e3)));
      }
    }, e2.dispose = function() {
      o.default.removeData(this._element, K), o.default(this._element).off(".bs.dropdown"), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null);
    }, e2.update = function() {
      this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
    }, e2._addEventListeners = function() {
      var t3 = this;
      o.default(this._element).on("click.bs.dropdown", function(e3) {
        e3.preventDefault(), e3.stopPropagation(), t3.toggle();
      });
    }, e2._getConfig = function(t3) {
      return t3 = r({}, this.constructor.Default, o.default(this._element).data(), t3), d.typeCheckConfig(z, t3, this.constructor.DefaultType), t3;
    }, e2._getMenuElement = function() {
      if (!this._menu) {
        var e3 = t2._getParentFromElement(this._element);
        e3 && (this._menu = e3.querySelector(ot));
      }
      return this._menu;
    }, e2._getPlacement = function() {
      var t3 = o.default(this._element.parentNode), e3 = "bottom-start";
      return t3.hasClass("dropup") ? e3 = o.default(this._menu).hasClass(G) ? "top-end" : "top-start" : t3.hasClass("dropright") ? e3 = "right-start" : t3.hasClass("dropleft") ? e3 = "left-start" : o.default(this._menu).hasClass(G) && (e3 = "bottom-end"), e3;
    }, e2._detectNavbar = function() {
      return o.default(this._element).closest(".navbar").length > 0;
    }, e2._getOffset = function() {
      var t3 = this, e3 = {};
      return "function" == typeof this._config.offset ? e3.fn = function(e4) {
        return e4.offsets = r({}, e4.offsets, t3._config.offset(e4.offsets, t3._element)), e4;
      } : e3.offset = this._config.offset, e3;
    }, e2._getPopperConfig = function() {
      var t3 = { placement: this._getPlacement(), modifiers: { offset: this._getOffset(), flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } };
      return "static" === this._config.display && (t3.modifiers.applyStyle = { enabled: false }), r({}, t3, this._config.popperConfig);
    }, t2._jQueryInterface = function(e3) {
      return this.each(function() {
        var n2 = o.default(this).data(K);
        if (n2 || (n2 = new t2(this, "object" == typeof e3 ? e3 : null), o.default(this).data(K, n2)), "string" == typeof e3) {
          if ("undefined" == typeof n2[e3])
            throw new TypeError('No method named "' + e3 + '"');
          n2[e3]();
        }
      });
    }, t2._clearMenus = function(e3) {
      if (!e3 || 3 !== e3.which && ("keyup" !== e3.type || 9 === e3.which))
        for (var n2 = [].slice.call(document.querySelectorAll(it)), i2 = 0, a2 = n2.length; i2 < a2; i2++) {
          var s2 = t2._getParentFromElement(n2[i2]), l2 = o.default(n2[i2]).data(K), r2 = { relatedTarget: n2[i2] };
          if (e3 && "click" === e3.type && (r2.clickEvent = e3), l2) {
            var u2 = l2._menu;
            if (o.default(s2).hasClass(J) && !(e3 && ("click" === e3.type && /input|textarea/i.test(e3.target.tagName) || "keyup" === e3.type && 9 === e3.which) && o.default.contains(s2, e3.target))) {
              var f2 = o.default.Event(Z, r2);
              o.default(s2).trigger(f2), f2.isDefaultPrevented() || ("ontouchstart" in document.documentElement && o.default(document.body).children().off("mouseover", null, o.default.noop), n2[i2].setAttribute("aria-expanded", "false"), l2._popper && l2._popper.destroy(), o.default(u2).removeClass(J), o.default(s2).removeClass(J).trigger(o.default.Event(tt, r2)));
            }
          }
        }
    }, t2._getParentFromElement = function(t3) {
      var e3, n2 = d.getSelectorFromElement(t3);
      return n2 && (e3 = document.querySelector(n2)), e3 || t3.parentNode;
    }, t2._dataApiKeydownHandler = function(e3) {
      if (!(/input|textarea/i.test(e3.target.tagName) ? 32 === e3.which || 27 !== e3.which && (40 !== e3.which && 38 !== e3.which || o.default(e3.target).closest(ot).length) : !Y.test(e3.which)) && !this.disabled && !o.default(this).hasClass($)) {
        var n2 = t2._getParentFromElement(this), i2 = o.default(n2).hasClass(J);
        if (i2 || 27 !== e3.which) {
          if (e3.preventDefault(), e3.stopPropagation(), !i2 || 27 === e3.which || 32 === e3.which)
            return 27 === e3.which && o.default(n2.querySelector(it)).trigger("focus"), void o.default(this).trigger("click");
          var a2 = [].slice.call(n2.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter(function(t3) {
            return o.default(t3).is(":visible");
          });
          if (0 !== a2.length) {
            var s2 = a2.indexOf(e3.target);
            38 === e3.which && s2 > 0 && s2--, 40 === e3.which && s2 < a2.length - 1 && s2++, s2 < 0 && (s2 = 0), a2[s2].focus();
          }
        }
      }
    }, l(t2, null, [{ key: "VERSION", get: function() {
      return "4.6.2";
    } }, { key: "Default", get: function() {
      return at;
    } }, { key: "DefaultType", get: function() {
      return st;
    } }]), t2;
  }();
  o.default(document).on(nt, it, lt._dataApiKeydownHandler).on(nt, ot, lt._dataApiKeydownHandler).on(et + " keyup.bs.dropdown.data-api", lt._clearMenus).on(et, it, function(t2) {
    t2.preventDefault(), t2.stopPropagation(), lt._jQueryInterface.call(o.default(this), "toggle");
  }).on(et, ".dropdown form", function(t2) {
    t2.stopPropagation();
  }), o.default.fn[z] = lt._jQueryInterface, o.default.fn[z].Constructor = lt, o.default.fn[z].noConflict = function() {
    return o.default.fn[z] = X, lt._jQueryInterface;
  };
  var rt = "bs.modal", ut = o.default.fn.modal, ft = "modal-open", dt = "fade", ct = "show", ht = "modal-static", gt = "hidden.bs.modal", mt = "show.bs.modal", pt = "focusin.bs.modal", _t = "resize.bs.modal", vt = "click.dismiss.bs.modal", yt = "keydown.dismiss.bs.modal", bt = "mousedown.dismiss.bs.modal", Et = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", Tt = { backdrop: true, keyboard: true, focus: true, show: true }, wt = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" }, Ct = function() {
    function t2(t3, e3) {
      this._config = this._getConfig(e3), this._element = t3, this._dialog = t3.querySelector(".modal-dialog"), this._backdrop = null, this._isShown = false, this._isBodyOverflowing = false, this._ignoreBackdropClick = false, this._isTransitioning = false, this._scrollbarWidth = 0;
    }
    var e2 = t2.prototype;
    return e2.toggle = function(t3) {
      return this._isShown ? this.hide() : this.show(t3);
    }, e2.show = function(t3) {
      var e3 = this;
      if (!this._isShown && !this._isTransitioning) {
        var n2 = o.default.Event(mt, { relatedTarget: t3 });
        o.default(this._element).trigger(n2), n2.isDefaultPrevented() || (this._isShown = true, o.default(this._element).hasClass(dt) && (this._isTransitioning = true), this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), o.default(this._element).on(vt, '[data-dismiss="modal"]', function(t4) {
          return e3.hide(t4);
        }), o.default(this._dialog).on(bt, function() {
          o.default(e3._element).one("mouseup.dismiss.bs.modal", function(t4) {
            o.default(t4.target).is(e3._element) && (e3._ignoreBackdropClick = true);
          });
        }), this._showBackdrop(function() {
          return e3._showElement(t3);
        }));
      }
    }, e2.hide = function(t3) {
      var e3 = this;
      if (t3 && t3.preventDefault(), this._isShown && !this._isTransitioning) {
        var n2 = o.default.Event("hide.bs.modal");
        if (o.default(this._element).trigger(n2), this._isShown && !n2.isDefaultPrevented()) {
          this._isShown = false;
          var i2 = o.default(this._element).hasClass(dt);
          if (i2 && (this._isTransitioning = true), this._setEscapeEvent(), this._setResizeEvent(), o.default(document).off(pt), o.default(this._element).removeClass(ct), o.default(this._element).off(vt), o.default(this._dialog).off(bt), i2) {
            var a2 = d.getTransitionDurationFromElement(this._element);
            o.default(this._element).one(d.TRANSITION_END, function(t4) {
              return e3._hideModal(t4);
            }).emulateTransitionEnd(a2);
          } else
            this._hideModal();
        }
      }
    }, e2.dispose = function() {
      [window, this._element, this._dialog].forEach(function(t3) {
        return o.default(t3).off(".bs.modal");
      }), o.default(document).off(pt), o.default.removeData(this._element, rt), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null;
    }, e2.handleUpdate = function() {
      this._adjustDialog();
    }, e2._getConfig = function(t3) {
      return t3 = r({}, Tt, t3), d.typeCheckConfig("modal", t3, wt), t3;
    }, e2._triggerBackdropTransition = function() {
      var t3 = this, e3 = o.default.Event("hidePrevented.bs.modal");
      if (o.default(this._element).trigger(e3), !e3.isDefaultPrevented()) {
        var n2 = this._element.scrollHeight > document.documentElement.clientHeight;
        n2 || (this._element.style.overflowY = "hidden"), this._element.classList.add(ht);
        var i2 = d.getTransitionDurationFromElement(this._dialog);
        o.default(this._element).off(d.TRANSITION_END), o.default(this._element).one(d.TRANSITION_END, function() {
          t3._element.classList.remove(ht), n2 || o.default(t3._element).one(d.TRANSITION_END, function() {
            t3._element.style.overflowY = "";
          }).emulateTransitionEnd(t3._element, i2);
        }).emulateTransitionEnd(i2), this._element.focus();
      }
    }, e2._showElement = function(t3) {
      var e3 = this, n2 = o.default(this._element).hasClass(dt), i2 = this._dialog ? this._dialog.querySelector(".modal-body") : null;
      this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", true), this._element.setAttribute("role", "dialog"), o.default(this._dialog).hasClass("modal-dialog-scrollable") && i2 ? i2.scrollTop = 0 : this._element.scrollTop = 0, n2 && d.reflow(this._element), o.default(this._element).addClass(ct), this._config.focus && this._enforceFocus();
      var a2 = o.default.Event("shown.bs.modal", { relatedTarget: t3 }), s2 = function() {
        e3._config.focus && e3._element.focus(), e3._isTransitioning = false, o.default(e3._element).trigger(a2);
      };
      if (n2) {
        var l2 = d.getTransitionDurationFromElement(this._dialog);
        o.default(this._dialog).one(d.TRANSITION_END, s2).emulateTransitionEnd(l2);
      } else
        s2();
    }, e2._enforceFocus = function() {
      var t3 = this;
      o.default(document).off(pt).on(pt, function(e3) {
        document !== e3.target && t3._element !== e3.target && 0 === o.default(t3._element).has(e3.target).length && t3._element.focus();
      });
    }, e2._setEscapeEvent = function() {
      var t3 = this;
      this._isShown ? o.default(this._element).on(yt, function(e3) {
        t3._config.keyboard && 27 === e3.which ? (e3.preventDefault(), t3.hide()) : t3._config.keyboard || 27 !== e3.which || t3._triggerBackdropTransition();
      }) : this._isShown || o.default(this._element).off(yt);
    }, e2._setResizeEvent = function() {
      var t3 = this;
      this._isShown ? o.default(window).on(_t, function(e3) {
        return t3.handleUpdate(e3);
      }) : o.default(window).off(_t);
    }, e2._hideModal = function() {
      var t3 = this;
      this._element.style.display = "none", this._element.setAttribute("aria-hidden", true), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = false, this._showBackdrop(function() {
        o.default(document.body).removeClass(ft), t3._resetAdjustments(), t3._resetScrollbar(), o.default(t3._element).trigger(gt);
      });
    }, e2._removeBackdrop = function() {
      this._backdrop && (o.default(this._backdrop).remove(), this._backdrop = null);
    }, e2._showBackdrop = function(t3) {
      var e3 = this, n2 = o.default(this._element).hasClass(dt) ? dt : "";
      if (this._isShown && this._config.backdrop) {
        if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", n2 && this._backdrop.classList.add(n2), o.default(this._backdrop).appendTo(document.body), o.default(this._element).on(vt, function(t4) {
          e3._ignoreBackdropClick ? e3._ignoreBackdropClick = false : t4.target === t4.currentTarget && ("static" === e3._config.backdrop ? e3._triggerBackdropTransition() : e3.hide());
        }), n2 && d.reflow(this._backdrop), o.default(this._backdrop).addClass(ct), !t3)
          return;
        if (!n2)
          return void t3();
        var i2 = d.getTransitionDurationFromElement(this._backdrop);
        o.default(this._backdrop).one(d.TRANSITION_END, t3).emulateTransitionEnd(i2);
      } else if (!this._isShown && this._backdrop) {
        o.default(this._backdrop).removeClass(ct);
        var a2 = function() {
          e3._removeBackdrop(), t3 && t3();
        };
        if (o.default(this._element).hasClass(dt)) {
          var s2 = d.getTransitionDurationFromElement(this._backdrop);
          o.default(this._backdrop).one(d.TRANSITION_END, a2).emulateTransitionEnd(s2);
        } else
          a2();
      } else
        t3 && t3();
    }, e2._adjustDialog = function() {
      var t3 = this._element.scrollHeight > document.documentElement.clientHeight;
      !this._isBodyOverflowing && t3 && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t3 && (this._element.style.paddingRight = this._scrollbarWidth + "px");
    }, e2._resetAdjustments = function() {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }, e2._checkScrollbar = function() {
      var t3 = document.body.getBoundingClientRect();
      this._isBodyOverflowing = Math.round(t3.left + t3.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
    }, e2._setScrollbar = function() {
      var t3 = this;
      if (this._isBodyOverflowing) {
        var e3 = [].slice.call(document.querySelectorAll(Et)), n2 = [].slice.call(document.querySelectorAll(".sticky-top"));
        o.default(e3).each(function(e4, n3) {
          var i3 = n3.style.paddingRight, a3 = o.default(n3).css("padding-right");
          o.default(n3).data("padding-right", i3).css("padding-right", parseFloat(a3) + t3._scrollbarWidth + "px");
        }), o.default(n2).each(function(e4, n3) {
          var i3 = n3.style.marginRight, a3 = o.default(n3).css("margin-right");
          o.default(n3).data("margin-right", i3).css("margin-right", parseFloat(a3) - t3._scrollbarWidth + "px");
        });
        var i2 = document.body.style.paddingRight, a2 = o.default(document.body).css("padding-right");
        o.default(document.body).data("padding-right", i2).css("padding-right", parseFloat(a2) + this._scrollbarWidth + "px");
      }
      o.default(document.body).addClass(ft);
    }, e2._resetScrollbar = function() {
      var t3 = [].slice.call(document.querySelectorAll(Et));
      o.default(t3).each(function(t4, e4) {
        var n3 = o.default(e4).data("padding-right");
        o.default(e4).removeData("padding-right"), e4.style.paddingRight = n3 || "";
      });
      var e3 = [].slice.call(document.querySelectorAll(".sticky-top"));
      o.default(e3).each(function(t4, e4) {
        var n3 = o.default(e4).data("margin-right");
        "undefined" != typeof n3 && o.default(e4).css("margin-right", n3).removeData("margin-right");
      });
      var n2 = o.default(document.body).data("padding-right");
      o.default(document.body).removeData("padding-right"), document.body.style.paddingRight = n2 || "";
    }, e2._getScrollbarWidth = function() {
      var t3 = document.createElement("div");
      t3.className = "modal-scrollbar-measure", document.body.appendChild(t3);
      var e3 = t3.getBoundingClientRect().width - t3.clientWidth;
      return document.body.removeChild(t3), e3;
    }, t2._jQueryInterface = function(e3, n2) {
      return this.each(function() {
        var i2 = o.default(this).data(rt), a2 = r({}, Tt, o.default(this).data(), "object" == typeof e3 && e3 ? e3 : {});
        if (i2 || (i2 = new t2(this, a2), o.default(this).data(rt, i2)), "string" == typeof e3) {
          if ("undefined" == typeof i2[e3])
            throw new TypeError('No method named "' + e3 + '"');
          i2[e3](n2);
        } else
          a2.show && i2.show(n2);
      });
    }, l(t2, null, [{ key: "VERSION", get: function() {
      return "4.6.2";
    } }, { key: "Default", get: function() {
      return Tt;
    } }]), t2;
  }();
  o.default(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(t2) {
    var e2, n2 = this, i2 = d.getSelectorFromElement(this);
    i2 && (e2 = document.querySelector(i2));
    var a2 = o.default(e2).data(rt) ? "toggle" : r({}, o.default(e2).data(), o.default(this).data());
    "A" !== this.tagName && "AREA" !== this.tagName || t2.preventDefault();
    var s2 = o.default(e2).one(mt, function(t3) {
      t3.isDefaultPrevented() || s2.one(gt, function() {
        o.default(n2).is(":visible") && n2.focus();
      });
    });
    Ct._jQueryInterface.call(o.default(e2), a2, this);
  }), o.default.fn.modal = Ct._jQueryInterface, o.default.fn.modal.Constructor = Ct, o.default.fn.modal.noConflict = function() {
    return o.default.fn.modal = ut, Ct._jQueryInterface;
  };
  var St = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"], Nt = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i, Dt = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
  function At(t2, e2, n2) {
    if (0 === t2.length)
      return t2;
    if (n2 && "function" == typeof n2)
      return n2(t2);
    for (var i2 = new window.DOMParser().parseFromString(t2, "text/html"), o2 = Object.keys(e2), a2 = [].slice.call(i2.body.querySelectorAll("*")), s2 = function(t3, n3) {
      var i3 = a2[t3], s3 = i3.nodeName.toLowerCase();
      if (-1 === o2.indexOf(i3.nodeName.toLowerCase()))
        return i3.parentNode.removeChild(i3), "continue";
      var l3 = [].slice.call(i3.attributes), r3 = [].concat(e2["*"] || [], e2[s3] || []);
      l3.forEach(function(t4) {
        (function(t5, e3) {
          var n4 = t5.nodeName.toLowerCase();
          if (-1 !== e3.indexOf(n4))
            return -1 === St.indexOf(n4) || Boolean(Nt.test(t5.nodeValue) || Dt.test(t5.nodeValue));
          for (var i4 = e3.filter(function(t6) {
            return t6 instanceof RegExp;
          }), o3 = 0, a3 = i4.length; o3 < a3; o3++)
            if (i4[o3].test(n4))
              return true;
          return false;
        })(t4, r3) || i3.removeAttribute(t4.nodeName);
      });
    }, l2 = 0, r2 = a2.length; l2 < r2; l2++)
      s2(l2);
    return i2.body.innerHTML;
  }
  var It = "tooltip", kt = "bs.tooltip", Ot = o.default.fn.tooltip, jt = new RegExp("(^|\\s)bs-tooltip\\S+", "g"), Pt = ["sanitize", "whiteList", "sanitizeFn"], Lt = "fade", Rt = "show", xt = "show", qt = "out", Ft = "hover", Qt = "focus", Bt = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" }, Ht = { animation: true, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: false, selector: false, placement: "top", offset: 0, container: false, fallbackPlacement: "flip", boundary: "scrollParent", customClass: "", sanitize: true, sanitizeFn: null, whiteList: { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "srcset", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] }, popperConfig: null }, Ut = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string|function)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)", customClass: "(string|function)", sanitize: "boolean", sanitizeFn: "(null|function)", whiteList: "object", popperConfig: "(null|object)" }, Mt = { HIDE: "hide.bs.tooltip", HIDDEN: "hidden.bs.tooltip", SHOW: "show.bs.tooltip", SHOWN: "shown.bs.tooltip", INSERTED: "inserted.bs.tooltip", CLICK: "click.bs.tooltip", FOCUSIN: "focusin.bs.tooltip", FOCUSOUT: "focusout.bs.tooltip", MOUSEENTER: "mouseenter.bs.tooltip", MOUSELEAVE: "mouseleave.bs.tooltip" }, Wt = function() {
    function t2(t3, e3) {
      if ("undefined" == typeof a.default)
        throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
      this._isEnabled = true, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t3, this.config = this._getConfig(e3), this.tip = null, this._setListeners();
    }
    var e2 = t2.prototype;
    return e2.enable = function() {
      this._isEnabled = true;
    }, e2.disable = function() {
      this._isEnabled = false;
    }, e2.toggleEnabled = function() {
      this._isEnabled = !this._isEnabled;
    }, e2.toggle = function(t3) {
      if (this._isEnabled)
        if (t3) {
          var e3 = this.constructor.DATA_KEY, n2 = o.default(t3.currentTarget).data(e3);
          n2 || (n2 = new this.constructor(t3.currentTarget, this._getDelegateConfig()), o.default(t3.currentTarget).data(e3, n2)), n2._activeTrigger.click = !n2._activeTrigger.click, n2._isWithActiveTrigger() ? n2._enter(null, n2) : n2._leave(null, n2);
        } else {
          if (o.default(this.getTipElement()).hasClass(Rt))
            return void this._leave(null, this);
          this._enter(null, this);
        }
    }, e2.dispose = function() {
      clearTimeout(this._timeout), o.default.removeData(this.element, this.constructor.DATA_KEY), o.default(this.element).off(this.constructor.EVENT_KEY), o.default(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && o.default(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
    }, e2.show = function() {
      var t3 = this;
      if ("none" === o.default(this.element).css("display"))
        throw new Error("Please use show on visible elements");
      var e3 = o.default.Event(this.constructor.Event.SHOW);
      if (this.isWithContent() && this._isEnabled) {
        o.default(this.element).trigger(e3);
        var n2 = d.findShadowRoot(this.element), i2 = o.default.contains(null !== n2 ? n2 : this.element.ownerDocument.documentElement, this.element);
        if (e3.isDefaultPrevented() || !i2)
          return;
        var s2 = this.getTipElement(), l2 = d.getUID(this.constructor.NAME);
        s2.setAttribute("id", l2), this.element.setAttribute("aria-describedby", l2), this.setContent(), this.config.animation && o.default(s2).addClass(Lt);
        var r2 = "function" == typeof this.config.placement ? this.config.placement.call(this, s2, this.element) : this.config.placement, u2 = this._getAttachment(r2);
        this.addAttachmentClass(u2);
        var f2 = this._getContainer();
        o.default(s2).data(this.constructor.DATA_KEY, this), o.default.contains(this.element.ownerDocument.documentElement, this.tip) || o.default(s2).appendTo(f2), o.default(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new a.default(this.element, s2, this._getPopperConfig(u2)), o.default(s2).addClass(Rt), o.default(s2).addClass(this.config.customClass), "ontouchstart" in document.documentElement && o.default(document.body).children().on("mouseover", null, o.default.noop);
        var c2 = function() {
          t3.config.animation && t3._fixTransition();
          var e4 = t3._hoverState;
          t3._hoverState = null, o.default(t3.element).trigger(t3.constructor.Event.SHOWN), e4 === qt && t3._leave(null, t3);
        };
        if (o.default(this.tip).hasClass(Lt)) {
          var h2 = d.getTransitionDurationFromElement(this.tip);
          o.default(this.tip).one(d.TRANSITION_END, c2).emulateTransitionEnd(h2);
        } else
          c2();
      }
    }, e2.hide = function(t3) {
      var e3 = this, n2 = this.getTipElement(), i2 = o.default.Event(this.constructor.Event.HIDE), a2 = function() {
        e3._hoverState !== xt && n2.parentNode && n2.parentNode.removeChild(n2), e3._cleanTipClass(), e3.element.removeAttribute("aria-describedby"), o.default(e3.element).trigger(e3.constructor.Event.HIDDEN), null !== e3._popper && e3._popper.destroy(), t3 && t3();
      };
      if (o.default(this.element).trigger(i2), !i2.isDefaultPrevented()) {
        if (o.default(n2).removeClass(Rt), "ontouchstart" in document.documentElement && o.default(document.body).children().off("mouseover", null, o.default.noop), this._activeTrigger.click = false, this._activeTrigger.focus = false, this._activeTrigger.hover = false, o.default(this.tip).hasClass(Lt)) {
          var s2 = d.getTransitionDurationFromElement(n2);
          o.default(n2).one(d.TRANSITION_END, a2).emulateTransitionEnd(s2);
        } else
          a2();
        this._hoverState = "";
      }
    }, e2.update = function() {
      null !== this._popper && this._popper.scheduleUpdate();
    }, e2.isWithContent = function() {
      return Boolean(this.getTitle());
    }, e2.addAttachmentClass = function(t3) {
      o.default(this.getTipElement()).addClass("bs-tooltip-" + t3);
    }, e2.getTipElement = function() {
      return this.tip = this.tip || o.default(this.config.template)[0], this.tip;
    }, e2.setContent = function() {
      var t3 = this.getTipElement();
      this.setElementContent(o.default(t3.querySelectorAll(".tooltip-inner")), this.getTitle()), o.default(t3).removeClass("fade show");
    }, e2.setElementContent = function(t3, e3) {
      "object" != typeof e3 || !e3.nodeType && !e3.jquery ? this.config.html ? (this.config.sanitize && (e3 = At(e3, this.config.whiteList, this.config.sanitizeFn)), t3.html(e3)) : t3.text(e3) : this.config.html ? o.default(e3).parent().is(t3) || t3.empty().append(e3) : t3.text(o.default(e3).text());
    }, e2.getTitle = function() {
      var t3 = this.element.getAttribute("data-original-title");
      return t3 || (t3 = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t3;
    }, e2._getPopperConfig = function(t3) {
      var e3 = this;
      return r({}, { placement: t3, modifiers: { offset: this._getOffset(), flip: { behavior: this.config.fallbackPlacement }, arrow: { element: ".arrow" }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function(t4) {
        t4.originalPlacement !== t4.placement && e3._handlePopperPlacementChange(t4);
      }, onUpdate: function(t4) {
        return e3._handlePopperPlacementChange(t4);
      } }, this.config.popperConfig);
    }, e2._getOffset = function() {
      var t3 = this, e3 = {};
      return "function" == typeof this.config.offset ? e3.fn = function(e4) {
        return e4.offsets = r({}, e4.offsets, t3.config.offset(e4.offsets, t3.element)), e4;
      } : e3.offset = this.config.offset, e3;
    }, e2._getContainer = function() {
      return false === this.config.container ? document.body : d.isElement(this.config.container) ? o.default(this.config.container) : o.default(document).find(this.config.container);
    }, e2._getAttachment = function(t3) {
      return Bt[t3.toUpperCase()];
    }, e2._setListeners = function() {
      var t3 = this;
      this.config.trigger.split(" ").forEach(function(e3) {
        if ("click" === e3)
          o.default(t3.element).on(t3.constructor.Event.CLICK, t3.config.selector, function(e4) {
            return t3.toggle(e4);
          });
        else if ("manual" !== e3) {
          var n2 = e3 === Ft ? t3.constructor.Event.MOUSEENTER : t3.constructor.Event.FOCUSIN, i2 = e3 === Ft ? t3.constructor.Event.MOUSELEAVE : t3.constructor.Event.FOCUSOUT;
          o.default(t3.element).on(n2, t3.config.selector, function(e4) {
            return t3._enter(e4);
          }).on(i2, t3.config.selector, function(e4) {
            return t3._leave(e4);
          });
        }
      }), this._hideModalHandler = function() {
        t3.element && t3.hide();
      }, o.default(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = r({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle();
    }, e2._fixTitle = function() {
      var t3 = typeof this.element.getAttribute("data-original-title");
      (this.element.getAttribute("title") || "string" !== t3) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
    }, e2._enter = function(t3, e3) {
      var n2 = this.constructor.DATA_KEY;
      (e3 = e3 || o.default(t3.currentTarget).data(n2)) || (e3 = new this.constructor(t3.currentTarget, this._getDelegateConfig()), o.default(t3.currentTarget).data(n2, e3)), t3 && (e3._activeTrigger["focusin" === t3.type ? Qt : Ft] = true), o.default(e3.getTipElement()).hasClass(Rt) || e3._hoverState === xt ? e3._hoverState = xt : (clearTimeout(e3._timeout), e3._hoverState = xt, e3.config.delay && e3.config.delay.show ? e3._timeout = setTimeout(function() {
        e3._hoverState === xt && e3.show();
      }, e3.config.delay.show) : e3.show());
    }, e2._leave = function(t3, e3) {
      var n2 = this.constructor.DATA_KEY;
      (e3 = e3 || o.default(t3.currentTarget).data(n2)) || (e3 = new this.constructor(t3.currentTarget, this._getDelegateConfig()), o.default(t3.currentTarget).data(n2, e3)), t3 && (e3._activeTrigger["focusout" === t3.type ? Qt : Ft] = false), e3._isWithActiveTrigger() || (clearTimeout(e3._timeout), e3._hoverState = qt, e3.config.delay && e3.config.delay.hide ? e3._timeout = setTimeout(function() {
        e3._hoverState === qt && e3.hide();
      }, e3.config.delay.hide) : e3.hide());
    }, e2._isWithActiveTrigger = function() {
      for (var t3 in this._activeTrigger)
        if (this._activeTrigger[t3])
          return true;
      return false;
    }, e2._getConfig = function(t3) {
      var e3 = o.default(this.element).data();
      return Object.keys(e3).forEach(function(t4) {
        -1 !== Pt.indexOf(t4) && delete e3[t4];
      }), "number" == typeof (t3 = r({}, this.constructor.Default, e3, "object" == typeof t3 && t3 ? t3 : {})).delay && (t3.delay = { show: t3.delay, hide: t3.delay }), "number" == typeof t3.title && (t3.title = t3.title.toString()), "number" == typeof t3.content && (t3.content = t3.content.toString()), d.typeCheckConfig(It, t3, this.constructor.DefaultType), t3.sanitize && (t3.template = At(t3.template, t3.whiteList, t3.sanitizeFn)), t3;
    }, e2._getDelegateConfig = function() {
      var t3 = {};
      if (this.config)
        for (var e3 in this.config)
          this.constructor.Default[e3] !== this.config[e3] && (t3[e3] = this.config[e3]);
      return t3;
    }, e2._cleanTipClass = function() {
      var t3 = o.default(this.getTipElement()), e3 = t3.attr("class").match(jt);
      null !== e3 && e3.length && t3.removeClass(e3.join(""));
    }, e2._handlePopperPlacementChange = function(t3) {
      this.tip = t3.instance.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t3.placement));
    }, e2._fixTransition = function() {
      var t3 = this.getTipElement(), e3 = this.config.animation;
      null === t3.getAttribute("x-placement") && (o.default(t3).removeClass(Lt), this.config.animation = false, this.hide(), this.show(), this.config.animation = e3);
    }, t2._jQueryInterface = function(e3) {
      return this.each(function() {
        var n2 = o.default(this), i2 = n2.data(kt), a2 = "object" == typeof e3 && e3;
        if ((i2 || !/dispose|hide/.test(e3)) && (i2 || (i2 = new t2(this, a2), n2.data(kt, i2)), "string" == typeof e3)) {
          if ("undefined" == typeof i2[e3])
            throw new TypeError('No method named "' + e3 + '"');
          i2[e3]();
        }
      });
    }, l(t2, null, [{ key: "VERSION", get: function() {
      return "4.6.2";
    } }, { key: "Default", get: function() {
      return Ht;
    } }, { key: "NAME", get: function() {
      return It;
    } }, { key: "DATA_KEY", get: function() {
      return kt;
    } }, { key: "Event", get: function() {
      return Mt;
    } }, { key: "EVENT_KEY", get: function() {
      return ".bs.tooltip";
    } }, { key: "DefaultType", get: function() {
      return Ut;
    } }]), t2;
  }();
  o.default.fn.tooltip = Wt._jQueryInterface, o.default.fn.tooltip.Constructor = Wt, o.default.fn.tooltip.noConflict = function() {
    return o.default.fn.tooltip = Ot, Wt._jQueryInterface;
  };
  var Vt = "bs.popover", zt = o.default.fn.popover, Kt = new RegExp("(^|\\s)bs-popover\\S+", "g"), Xt = r({}, Wt.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }), Yt = r({}, Wt.DefaultType, { content: "(string|element|function)" }), $t = { HIDE: "hide.bs.popover", HIDDEN: "hidden.bs.popover", SHOW: "show.bs.popover", SHOWN: "shown.bs.popover", INSERTED: "inserted.bs.popover", CLICK: "click.bs.popover", FOCUSIN: "focusin.bs.popover", FOCUSOUT: "focusout.bs.popover", MOUSEENTER: "mouseenter.bs.popover", MOUSELEAVE: "mouseleave.bs.popover" }, Jt = function(t2) {
    var e2, n2;
    function i2() {
      return t2.apply(this, arguments) || this;
    }
    n2 = t2, (e2 = i2).prototype = Object.create(n2.prototype), e2.prototype.constructor = e2, u(e2, n2);
    var a2 = i2.prototype;
    return a2.isWithContent = function() {
      return this.getTitle() || this._getContent();
    }, a2.addAttachmentClass = function(t3) {
      o.default(this.getTipElement()).addClass("bs-popover-" + t3);
    }, a2.getTipElement = function() {
      return this.tip = this.tip || o.default(this.config.template)[0], this.tip;
    }, a2.setContent = function() {
      var t3 = o.default(this.getTipElement());
      this.setElementContent(t3.find(".popover-header"), this.getTitle());
      var e3 = this._getContent();
      "function" == typeof e3 && (e3 = e3.call(this.element)), this.setElementContent(t3.find(".popover-body"), e3), t3.removeClass("fade show");
    }, a2._getContent = function() {
      return this.element.getAttribute("data-content") || this.config.content;
    }, a2._cleanTipClass = function() {
      var t3 = o.default(this.getTipElement()), e3 = t3.attr("class").match(Kt);
      null !== e3 && e3.length > 0 && t3.removeClass(e3.join(""));
    }, i2._jQueryInterface = function(t3) {
      return this.each(function() {
        var e3 = o.default(this).data(Vt), n3 = "object" == typeof t3 ? t3 : null;
        if ((e3 || !/dispose|hide/.test(t3)) && (e3 || (e3 = new i2(this, n3), o.default(this).data(Vt, e3)), "string" == typeof t3)) {
          if ("undefined" == typeof e3[t3])
            throw new TypeError('No method named "' + t3 + '"');
          e3[t3]();
        }
      });
    }, l(i2, null, [{ key: "VERSION", get: function() {
      return "4.6.2";
    } }, { key: "Default", get: function() {
      return Xt;
    } }, { key: "NAME", get: function() {
      return "popover";
    } }, { key: "DATA_KEY", get: function() {
      return Vt;
    } }, { key: "Event", get: function() {
      return $t;
    } }, { key: "EVENT_KEY", get: function() {
      return ".bs.popover";
    } }, { key: "DefaultType", get: function() {
      return Yt;
    } }]), i2;
  }(Wt);
  o.default.fn.popover = Jt._jQueryInterface, o.default.fn.popover.Constructor = Jt, o.default.fn.popover.noConflict = function() {
    return o.default.fn.popover = zt, Jt._jQueryInterface;
  };
  var Gt = "scrollspy", Zt = "bs.scrollspy", te = o.default.fn[Gt], ee = "active", ne = "position", ie = ".nav, .list-group", oe = { offset: 10, method: "auto", target: "" }, ae = { offset: "number", method: "string", target: "(string|element)" }, se = function() {
    function t2(t3, e3) {
      var n2 = this;
      this._element = t3, this._scrollElement = "BODY" === t3.tagName ? window : t3, this._config = this._getConfig(e3), this._selector = this._config.target + " .nav-link," + this._config.target + " .list-group-item," + this._config.target + " .dropdown-item", this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, o.default(this._scrollElement).on("scroll.bs.scrollspy", function(t4) {
        return n2._process(t4);
      }), this.refresh(), this._process();
    }
    var e2 = t2.prototype;
    return e2.refresh = function() {
      var t3 = this, e3 = this._scrollElement === this._scrollElement.window ? "offset" : ne, n2 = "auto" === this._config.method ? e3 : this._config.method, i2 = n2 === ne ? this._getScrollTop() : 0;
      this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(t4) {
        var e4, a2 = d.getSelectorFromElement(t4);
        if (a2 && (e4 = document.querySelector(a2)), e4) {
          var s2 = e4.getBoundingClientRect();
          if (s2.width || s2.height)
            return [o.default(e4)[n2]().top + i2, a2];
        }
        return null;
      }).filter(Boolean).sort(function(t4, e4) {
        return t4[0] - e4[0];
      }).forEach(function(e4) {
        t3._offsets.push(e4[0]), t3._targets.push(e4[1]);
      });
    }, e2.dispose = function() {
      o.default.removeData(this._element, Zt), o.default(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
    }, e2._getConfig = function(t3) {
      if ("string" != typeof (t3 = r({}, oe, "object" == typeof t3 && t3 ? t3 : {})).target && d.isElement(t3.target)) {
        var e3 = o.default(t3.target).attr("id");
        e3 || (e3 = d.getUID(Gt), o.default(t3.target).attr("id", e3)), t3.target = "#" + e3;
      }
      return d.typeCheckConfig(Gt, t3, ae), t3;
    }, e2._getScrollTop = function() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }, e2._getScrollHeight = function() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }, e2._getOffsetHeight = function() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }, e2._process = function() {
      var t3 = this._getScrollTop() + this._config.offset, e3 = this._getScrollHeight(), n2 = this._config.offset + e3 - this._getOffsetHeight();
      if (this._scrollHeight !== e3 && this.refresh(), t3 >= n2) {
        var i2 = this._targets[this._targets.length - 1];
        this._activeTarget !== i2 && this._activate(i2);
      } else {
        if (this._activeTarget && t3 < this._offsets[0] && this._offsets[0] > 0)
          return this._activeTarget = null, void this._clear();
        for (var o2 = this._offsets.length; o2--; )
          this._activeTarget !== this._targets[o2] && t3 >= this._offsets[o2] && ("undefined" == typeof this._offsets[o2 + 1] || t3 < this._offsets[o2 + 1]) && this._activate(this._targets[o2]);
      }
    }, e2._activate = function(t3) {
      this._activeTarget = t3, this._clear();
      var e3 = this._selector.split(",").map(function(e4) {
        return e4 + '[data-target="' + t3 + '"],' + e4 + '[href="' + t3 + '"]';
      }), n2 = o.default([].slice.call(document.querySelectorAll(e3.join(","))));
      n2.hasClass("dropdown-item") ? (n2.closest(".dropdown").find(".dropdown-toggle").addClass(ee), n2.addClass(ee)) : (n2.addClass(ee), n2.parents(ie).prev(".nav-link, .list-group-item").addClass(ee), n2.parents(ie).prev(".nav-item").children(".nav-link").addClass(ee)), o.default(this._scrollElement).trigger("activate.bs.scrollspy", { relatedTarget: t3 });
    }, e2._clear = function() {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function(t3) {
        return t3.classList.contains(ee);
      }).forEach(function(t3) {
        return t3.classList.remove(ee);
      });
    }, t2._jQueryInterface = function(e3) {
      return this.each(function() {
        var n2 = o.default(this).data(Zt);
        if (n2 || (n2 = new t2(this, "object" == typeof e3 && e3), o.default(this).data(Zt, n2)), "string" == typeof e3) {
          if ("undefined" == typeof n2[e3])
            throw new TypeError('No method named "' + e3 + '"');
          n2[e3]();
        }
      });
    }, l(t2, null, [{ key: "VERSION", get: function() {
      return "4.6.2";
    } }, { key: "Default", get: function() {
      return oe;
    } }]), t2;
  }();
  o.default(window).on("load.bs.scrollspy.data-api", function() {
    for (var t2 = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), e2 = t2.length; e2--; ) {
      var n2 = o.default(t2[e2]);
      se._jQueryInterface.call(n2, n2.data());
    }
  }), o.default.fn[Gt] = se._jQueryInterface, o.default.fn[Gt].Constructor = se, o.default.fn[Gt].noConflict = function() {
    return o.default.fn[Gt] = te, se._jQueryInterface;
  };
  var le = "bs.tab", re = o.default.fn.tab, ue = "active", fe = "fade", de = "show", ce = ".active", he = "> li > .active", ge = function() {
    function t2(t3) {
      this._element = t3;
    }
    var e2 = t2.prototype;
    return e2.show = function() {
      var t3 = this;
      if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && o.default(this._element).hasClass(ue) || o.default(this._element).hasClass("disabled") || this._element.hasAttribute("disabled"))) {
        var e3, n2, i2 = o.default(this._element).closest(".nav, .list-group")[0], a2 = d.getSelectorFromElement(this._element);
        if (i2) {
          var s2 = "UL" === i2.nodeName || "OL" === i2.nodeName ? he : ce;
          n2 = (n2 = o.default.makeArray(o.default(i2).find(s2)))[n2.length - 1];
        }
        var l2 = o.default.Event("hide.bs.tab", { relatedTarget: this._element }), r2 = o.default.Event("show.bs.tab", { relatedTarget: n2 });
        if (n2 && o.default(n2).trigger(l2), o.default(this._element).trigger(r2), !r2.isDefaultPrevented() && !l2.isDefaultPrevented()) {
          a2 && (e3 = document.querySelector(a2)), this._activate(this._element, i2);
          var u2 = function() {
            var e4 = o.default.Event("hidden.bs.tab", { relatedTarget: t3._element }), i3 = o.default.Event("shown.bs.tab", { relatedTarget: n2 });
            o.default(n2).trigger(e4), o.default(t3._element).trigger(i3);
          };
          e3 ? this._activate(e3, e3.parentNode, u2) : u2();
        }
      }
    }, e2.dispose = function() {
      o.default.removeData(this._element, le), this._element = null;
    }, e2._activate = function(t3, e3, n2) {
      var i2 = this, a2 = (!e3 || "UL" !== e3.nodeName && "OL" !== e3.nodeName ? o.default(e3).children(ce) : o.default(e3).find(he))[0], s2 = n2 && a2 && o.default(a2).hasClass(fe), l2 = function() {
        return i2._transitionComplete(t3, a2, n2);
      };
      if (a2 && s2) {
        var r2 = d.getTransitionDurationFromElement(a2);
        o.default(a2).removeClass(de).one(d.TRANSITION_END, l2).emulateTransitionEnd(r2);
      } else
        l2();
    }, e2._transitionComplete = function(t3, e3, n2) {
      if (e3) {
        o.default(e3).removeClass(ue);
        var i2 = o.default(e3.parentNode).find("> .dropdown-menu .active")[0];
        i2 && o.default(i2).removeClass(ue), "tab" === e3.getAttribute("role") && e3.setAttribute("aria-selected", false);
      }
      o.default(t3).addClass(ue), "tab" === t3.getAttribute("role") && t3.setAttribute("aria-selected", true), d.reflow(t3), t3.classList.contains(fe) && t3.classList.add(de);
      var a2 = t3.parentNode;
      if (a2 && "LI" === a2.nodeName && (a2 = a2.parentNode), a2 && o.default(a2).hasClass("dropdown-menu")) {
        var s2 = o.default(t3).closest(".dropdown")[0];
        if (s2) {
          var l2 = [].slice.call(s2.querySelectorAll(".dropdown-toggle"));
          o.default(l2).addClass(ue);
        }
        t3.setAttribute("aria-expanded", true);
      }
      n2 && n2();
    }, t2._jQueryInterface = function(e3) {
      return this.each(function() {
        var n2 = o.default(this), i2 = n2.data(le);
        if (i2 || (i2 = new t2(this), n2.data(le, i2)), "string" == typeof e3) {
          if ("undefined" == typeof i2[e3])
            throw new TypeError('No method named "' + e3 + '"');
          i2[e3]();
        }
      });
    }, l(t2, null, [{ key: "VERSION", get: function() {
      return "4.6.2";
    } }]), t2;
  }();
  o.default(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function(t2) {
    t2.preventDefault(), ge._jQueryInterface.call(o.default(this), "show");
  }), o.default.fn.tab = ge._jQueryInterface, o.default.fn.tab.Constructor = ge, o.default.fn.tab.noConflict = function() {
    return o.default.fn.tab = re, ge._jQueryInterface;
  };
  var me = "bs.toast", pe = o.default.fn.toast, _e = "hide", ve = "show", ye = "showing", be = "click.dismiss.bs.toast", Ee = { animation: true, autohide: true, delay: 500 }, Te = { animation: "boolean", autohide: "boolean", delay: "number" }, we = function() {
    function t2(t3, e3) {
      this._element = t3, this._config = this._getConfig(e3), this._timeout = null, this._setListeners();
    }
    var e2 = t2.prototype;
    return e2.show = function() {
      var t3 = this, e3 = o.default.Event("show.bs.toast");
      if (o.default(this._element).trigger(e3), !e3.isDefaultPrevented()) {
        this._clearTimeout(), this._config.animation && this._element.classList.add("fade");
        var n2 = function() {
          t3._element.classList.remove(ye), t3._element.classList.add(ve), o.default(t3._element).trigger("shown.bs.toast"), t3._config.autohide && (t3._timeout = setTimeout(function() {
            t3.hide();
          }, t3._config.delay));
        };
        if (this._element.classList.remove(_e), d.reflow(this._element), this._element.classList.add(ye), this._config.animation) {
          var i2 = d.getTransitionDurationFromElement(this._element);
          o.default(this._element).one(d.TRANSITION_END, n2).emulateTransitionEnd(i2);
        } else
          n2();
      }
    }, e2.hide = function() {
      if (this._element.classList.contains(ve)) {
        var t3 = o.default.Event("hide.bs.toast");
        o.default(this._element).trigger(t3), t3.isDefaultPrevented() || this._close();
      }
    }, e2.dispose = function() {
      this._clearTimeout(), this._element.classList.contains(ve) && this._element.classList.remove(ve), o.default(this._element).off(be), o.default.removeData(this._element, me), this._element = null, this._config = null;
    }, e2._getConfig = function(t3) {
      return t3 = r({}, Ee, o.default(this._element).data(), "object" == typeof t3 && t3 ? t3 : {}), d.typeCheckConfig("toast", t3, this.constructor.DefaultType), t3;
    }, e2._setListeners = function() {
      var t3 = this;
      o.default(this._element).on(be, '[data-dismiss="toast"]', function() {
        return t3.hide();
      });
    }, e2._close = function() {
      var t3 = this, e3 = function() {
        t3._element.classList.add(_e), o.default(t3._element).trigger("hidden.bs.toast");
      };
      if (this._element.classList.remove(ve), this._config.animation) {
        var n2 = d.getTransitionDurationFromElement(this._element);
        o.default(this._element).one(d.TRANSITION_END, e3).emulateTransitionEnd(n2);
      } else
        e3();
    }, e2._clearTimeout = function() {
      clearTimeout(this._timeout), this._timeout = null;
    }, t2._jQueryInterface = function(e3) {
      return this.each(function() {
        var n2 = o.default(this), i2 = n2.data(me);
        if (i2 || (i2 = new t2(this, "object" == typeof e3 && e3), n2.data(me, i2)), "string" == typeof e3) {
          if ("undefined" == typeof i2[e3])
            throw new TypeError('No method named "' + e3 + '"');
          i2[e3](this);
        }
      });
    }, l(t2, null, [{ key: "VERSION", get: function() {
      return "4.6.2";
    } }, { key: "DefaultType", get: function() {
      return Te;
    } }, { key: "Default", get: function() {
      return Ee;
    } }]), t2;
  }();
  o.default.fn.toast = we._jQueryInterface, o.default.fn.toast.Constructor = we, o.default.fn.toast.noConflict = function() {
    return o.default.fn.toast = pe, we._jQueryInterface;
  }, t.Alert = g, t.Button = E, t.Carousel = P, t.Collapse = V, t.Dropdown = lt, t.Modal = Ct, t.Popover = Jt, t.Scrollspy = se, t.Tab = ge, t.Toast = we, t.Tooltip = Wt, t.Util = d, Object.defineProperty(t, "__esModule", { value: true });
});
//# sourceMappingURL=scripts.js.map
