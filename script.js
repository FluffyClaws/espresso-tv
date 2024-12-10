!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
  "use strict";
  var n = [],
    i = e.document,
    o = Object.getPrototypeOf,
    r = n.slice,
    s = n.concat,
    a = n.push,
    l = n.indexOf,
    c = {},
    u = c.toString,
    d = c.hasOwnProperty,
    p = d.toString,
    f = p.call(Object),
    h = {},
    m = function (e) {
      return "function" == typeof e && "number" != typeof e.nodeType;
    },
    g = function (e) {
      return null != e && e === e.window;
    },
    v = {
      type: !0,
      src: !0,
      nonce: !0,
      noModule: !0,
    };
  function y(e, t, n) {
    var o,
      r,
      s = (n = n || i).createElement("script");
    if (((s.text = e), t))
      for (o in v)
        (r = t[o] || (t.getAttribute && t.getAttribute(o))) &&
          s.setAttribute(o, r);
    n.head.appendChild(s).parentNode.removeChild(s);
  }
  function b(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? c[u.call(e)] || "object"
      : typeof e;
  }
  var w = function (e, t) {
      return new w.fn.init(e, t);
    },
    x = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  function T(e) {
    var t = !!e && "length" in e && e.length,
      n = b(e);
    return (
      !m(e) &&
      !g(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && t > 0 && t - 1 in e))
    );
  }
  (w.fn = w.prototype =
    {
      jquery: "3.4.1",
      constructor: w,
      length: 0,
      toArray: function () {
        return r.call(this);
      },
      get: function (e) {
        return null == e
          ? r.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = w.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return w.each(this, e);
      },
      map: function (e) {
        return this.pushStack(
          w.map(this, function (t, n) {
            return e.call(t, n, t);
          })
        );
      },
      slice: function () {
        return this.pushStack(r.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: a,
      sort: n.sort,
      splice: n.splice,
    }),
    (w.extend = w.fn.extend =
      function () {
        var e,
          t,
          n,
          i,
          o,
          r,
          s = arguments[0] || {},
          a = 1,
          l = arguments.length,
          c = !1;
        for (
          "boolean" == typeof s && ((c = s), (s = arguments[a] || {}), a++),
            "object" == typeof s || m(s) || (s = {}),
            a === l && ((s = this), a--);
          a < l;
          a++
        )
          if (null != (e = arguments[a]))
            for (t in e)
              (i = e[t]),
                "__proto__" !== t &&
                  s !== i &&
                  (c && i && (w.isPlainObject(i) || (o = Array.isArray(i)))
                    ? ((n = s[t]),
                      (r =
                        o && !Array.isArray(n)
                          ? []
                          : o || w.isPlainObject(n)
                          ? n
                          : {}),
                      (o = !1),
                      (s[t] = w.extend(c, r, i)))
                    : void 0 !== i && (s[t] = i));
        return s;
      }),
    w.extend({
      expando: "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== u.call(e)) &&
          (!(t = o(e)) ||
            ("function" ==
              typeof (n = d.call(t, "constructor") && t.constructor) &&
              p.call(n) === f))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t) {
        y(e, {
          nonce: t && t.nonce,
        });
      },
      each: function (e, t) {
        var n,
          i = 0;
        if (T(e))
          for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
        else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
        return e;
      },
      trim: function (e) {
        return null == e ? "" : (e + "").replace(x, "");
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (T(Object(e))
              ? w.merge(n, "string" == typeof e ? [e] : e)
              : a.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : l.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
        return (e.length = o), e;
      },
      grep: function (e, t, n) {
        for (var i = [], o = 0, r = e.length, s = !n; o < r; o++)
          !t(e[o], o) !== s && i.push(e[o]);
        return i;
      },
      map: function (e, t, n) {
        var i,
          o,
          r = 0,
          a = [];
        if (T(e))
          for (i = e.length; r < i; r++)
            null != (o = t(e[r], r, n)) && a.push(o);
        else for (r in e) null != (o = t(e[r], r, n)) && a.push(o);
        return s.apply([], a);
      },
      guid: 1,
      support: h,
    }),
    "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]),
    w.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        c["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var k = (function (e) {
    var t,
      n,
      i,
      o,
      r,
      s,
      a,
      l,
      c,
      u,
      d,
      p,
      f,
      h,
      m,
      g,
      v,
      y,
      b,
      w = "sizzle" + 1 * new Date(),
      x = e.document,
      T = 0,
      k = 0,
      C = le(),
      S = le(),
      E = le(),
      A = le(),
      D = function (e, t) {
        return e === t && (d = !0), 0;
      },
      $ = {}.hasOwnProperty,
      I = [],
      O = I.pop,
      L = I.push,
      j = I.push,
      N = I.slice,
      P = function (e, t) {
        for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
        return -1;
      },
      _ =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      M = "[\\x20\\t\\r\\n\\f]",
      H = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      q =
        "\\[" +
        M +
        "*(" +
        H +
        ")(?:" +
        M +
        "*([*^$|!~]?=)" +
        M +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        H +
        "))|)" +
        M +
        "*\\]",
      R =
        ":(" +
        H +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        q +
        ")*)|.*)\\)|)",
      F = new RegExp(M + "+", "g"),
      z = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
      W = new RegExp("^" + M + "*," + M + "*"),
      B = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
      U = new RegExp(M + "|>"),
      X = new RegExp(R),
      V = new RegExp("^" + H + "$"),
      Y = {
        ID: new RegExp("^#(" + H + ")"),
        CLASS: new RegExp("^\\.(" + H + ")"),
        TAG: new RegExp("^(" + H + "|[*])"),
        ATTR: new RegExp("^" + q),
        PSEUDO: new RegExp("^" + R),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            M +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            M +
            "*(?:([+-]|)" +
            M +
            "*(\\d+)|))" +
            M +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + _ + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            M +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            M +
            "*((?:-\\d)?\\d*)" +
            M +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      Z = /HTML$/i,
      K = /^(?:input|select|textarea|button)$/i,
      G = /^h\d$/i,
      Q = /^[^{]+\{\s*\[native \w/,
      J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
      ne = function (e, t, n) {
        var i = "0x" + t - 65536;
        return i != i || n
          ? t
          : i < 0
          ? String.fromCharCode(i + 65536)
          : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
      },
      ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      oe = function (e, t) {
        return t
          ? "\0" === e
            ? "�"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      re = function () {
        p();
      },
      se = we(
        function (e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        },
        {
          dir: "parentNode",
          next: "legend",
        }
      );
    try {
      j.apply((I = N.call(x.childNodes)), x.childNodes),
        I[x.childNodes.length].nodeType;
    } catch (e) {
      j = {
        apply: I.length
          ? function (e, t) {
              L.apply(e, N.call(t));
            }
          : function (e, t) {
              for (var n = e.length, i = 0; (e[n++] = t[i++]); );
              e.length = n - 1;
            },
      };
    }
    function ae(e, t, i, o) {
      var r,
        a,
        c,
        u,
        d,
        h,
        v,
        y = t && t.ownerDocument,
        T = t ? t.nodeType : 9;
      if (
        ((i = i || []),
        "string" != typeof e || !e || (1 !== T && 9 !== T && 11 !== T))
      )
        return i;
      if (
        !o &&
        ((t ? t.ownerDocument || t : x) !== f && p(t), (t = t || f), m)
      ) {
        if (11 !== T && (d = J.exec(e)))
          if ((r = d[1])) {
            if (9 === T) {
              if (!(c = t.getElementById(r))) return i;
              if (c.id === r) return i.push(c), i;
            } else if (y && (c = y.getElementById(r)) && b(t, c) && c.id === r)
              return i.push(c), i;
          } else {
            if (d[2]) return j.apply(i, t.getElementsByTagName(e)), i;
            if (
              (r = d[3]) &&
              n.getElementsByClassName &&
              t.getElementsByClassName
            )
              return j.apply(i, t.getElementsByClassName(r)), i;
          }
        if (
          n.qsa &&
          !A[e + " "] &&
          (!g || !g.test(e)) &&
          (1 !== T || "object" !== t.nodeName.toLowerCase())
        ) {
          if (((v = e), (y = t), 1 === T && U.test(e))) {
            for (
              (u = t.getAttribute("id"))
                ? (u = u.replace(ie, oe))
                : t.setAttribute("id", (u = w)),
                a = (h = s(e)).length;
              a--;

            )
              h[a] = "#" + u + " " + be(h[a]);
            (v = h.join(",")), (y = (ee.test(e) && ve(t.parentNode)) || t);
          }
          try {
            return j.apply(i, y.querySelectorAll(v)), i;
          } catch (t) {
            A(e, !0);
          } finally {
            u === w && t.removeAttribute("id");
          }
        }
      }
      return l(e.replace(z, "$1"), t, i, o);
    }
    function le() {
      var e = [];
      return function t(n, o) {
        return (
          e.push(n + " ") > i.cacheLength && delete t[e.shift()],
          (t[n + " "] = o)
        );
      };
    }
    function ce(e) {
      return (e[w] = !0), e;
    }
    function ue(e) {
      var t = f.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function de(e, t) {
      for (var n = e.split("|"), o = n.length; o--; ) i.attrHandle[n[o]] = t;
    }
    function pe(e, t) {
      var n = t && e,
        i =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (i) return i;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function fe(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }
    function he(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }
    function me(e) {
      return function (t) {
        return "form" in t
          ? t.parentNode && !1 === t.disabled
            ? "label" in t
              ? "label" in t.parentNode
                ? t.parentNode.disabled === e
                : t.disabled === e
              : t.isDisabled === e || (t.isDisabled !== !e && se(t) === e)
            : t.disabled === e
          : "label" in t && t.disabled === e;
      };
    }
    function ge(e) {
      return ce(function (t) {
        return (
          (t = +t),
          ce(function (n, i) {
            for (var o, r = e([], n.length, t), s = r.length; s--; )
              n[(o = r[s])] && (n[o] = !(i[o] = n[o]));
          })
        );
      });
    }
    function ve(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    for (t in ((n = ae.support = {}),
    (r = ae.isXML =
      function (e) {
        var t = e.namespaceURI,
          n = (e.ownerDocument || e).documentElement;
        return !Z.test(t || (n && n.nodeName) || "HTML");
      }),
    (p = ae.setDocument =
      function (e) {
        var t,
          o,
          s = e ? e.ownerDocument || e : x;
        return s !== f && 9 === s.nodeType && s.documentElement
          ? ((h = (f = s).documentElement),
            (m = !r(f)),
            x !== f &&
              (o = f.defaultView) &&
              o.top !== o &&
              (o.addEventListener
                ? o.addEventListener("unload", re, !1)
                : o.attachEvent && o.attachEvent("onunload", re)),
            (n.attributes = ue(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (n.getElementsByTagName = ue(function (e) {
              return (
                e.appendChild(f.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (n.getElementsByClassName = Q.test(f.getElementsByClassName)),
            (n.getById = ue(function (e) {
              return (
                (h.appendChild(e).id = w),
                !f.getElementsByName || !f.getElementsByName(w).length
              );
            })),
            n.getById
              ? ((i.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (i.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && m) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((i.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    var n =
                      void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t;
                  };
                }),
                (i.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && m) {
                    var n,
                      i,
                      o,
                      r = t.getElementById(e);
                    if (r) {
                      if ((n = r.getAttributeNode("id")) && n.value === e)
                        return [r];
                      for (o = t.getElementsByName(e), i = 0; (r = o[i++]); )
                        if ((n = r.getAttributeNode("id")) && n.value === e)
                          return [r];
                    }
                    return [];
                  }
                })),
            (i.find.TAG = n.getElementsByTagName
              ? function (e, t) {
                  return void 0 !== t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : n.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    i = [],
                    o = 0,
                    r = t.getElementsByTagName(e);
                  if ("*" === e) {
                    for (; (n = r[o++]); ) 1 === n.nodeType && i.push(n);
                    return i;
                  }
                  return r;
                }),
            (i.find.CLASS =
              n.getElementsByClassName &&
              function (e, t) {
                if (void 0 !== t.getElementsByClassName && m)
                  return t.getElementsByClassName(e);
              }),
            (v = []),
            (g = []),
            (n.qsa = Q.test(f.querySelectorAll)) &&
              (ue(function (e) {
                (h.appendChild(e).innerHTML =
                  "<a id='" +
                  w +
                  "'></a><select id='" +
                  w +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    g.push("[*^$]=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    g.push("\\[" + M + "*(?:value|" + _ + ")"),
                  e.querySelectorAll("[id~=" + w + "-]").length || g.push("~="),
                  e.querySelectorAll(":checked").length || g.push(":checked"),
                  e.querySelectorAll("a#" + w + "+*").length ||
                    g.push(".#.+[+~]");
              }),
              ue(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = f.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    g.push("name" + M + "*[*^$|!~]?="),
                  2 !== e.querySelectorAll(":enabled").length &&
                    g.push(":enabled", ":disabled"),
                  (h.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length &&
                    g.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  g.push(",.*:");
              })),
            (n.matchesSelector = Q.test(
              (y =
                h.matches ||
                h.webkitMatchesSelector ||
                h.mozMatchesSelector ||
                h.oMatchesSelector ||
                h.msMatchesSelector)
            )) &&
              ue(function (e) {
                (n.disconnectedMatch = y.call(e, "*")),
                  y.call(e, "[s!='']:x"),
                  v.push("!=", R);
              }),
            (g = g.length && new RegExp(g.join("|"))),
            (v = v.length && new RegExp(v.join("|"))),
            (t = Q.test(h.compareDocumentPosition)),
            (b =
              t || Q.test(h.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      i = t && t.parentNode;
                    return (
                      e === i ||
                      !(
                        !i ||
                        1 !== i.nodeType ||
                        !(n.contains
                          ? n.contains(i)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(i))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                    return !1;
                  }),
            (D = t
              ? function (e, t) {
                  if (e === t) return (d = !0), 0;
                  var i =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    i ||
                    (1 &
                      (i =
                        (e.ownerDocument || e) === (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!n.sortDetached && t.compareDocumentPosition(e) === i)
                      ? e === f || (e.ownerDocument === x && b(x, e))
                        ? -1
                        : t === f || (t.ownerDocument === x && b(x, t))
                        ? 1
                        : u
                        ? P(u, e) - P(u, t)
                        : 0
                      : 4 & i
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (d = !0), 0;
                  var n,
                    i = 0,
                    o = e.parentNode,
                    r = t.parentNode,
                    s = [e],
                    a = [t];
                  if (!o || !r)
                    return e === f
                      ? -1
                      : t === f
                      ? 1
                      : o
                      ? -1
                      : r
                      ? 1
                      : u
                      ? P(u, e) - P(u, t)
                      : 0;
                  if (o === r) return pe(e, t);
                  for (n = e; (n = n.parentNode); ) s.unshift(n);
                  for (n = t; (n = n.parentNode); ) a.unshift(n);
                  for (; s[i] === a[i]; ) i++;
                  return i
                    ? pe(s[i], a[i])
                    : s[i] === x
                    ? -1
                    : a[i] === x
                    ? 1
                    : 0;
                }),
            f)
          : f;
      }),
    (ae.matches = function (e, t) {
      return ae(e, null, null, t);
    }),
    (ae.matchesSelector = function (e, t) {
      if (
        ((e.ownerDocument || e) !== f && p(e),
        n.matchesSelector &&
          m &&
          !A[t + " "] &&
          (!v || !v.test(t)) &&
          (!g || !g.test(t)))
      )
        try {
          var i = y.call(e, t);
          if (
            i ||
            n.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return i;
        } catch (e) {
          A(t, !0);
        }
      return ae(t, f, null, [e]).length > 0;
    }),
    (ae.contains = function (e, t) {
      return (e.ownerDocument || e) !== f && p(e), b(e, t);
    }),
    (ae.attr = function (e, t) {
      (e.ownerDocument || e) !== f && p(e);
      var o = i.attrHandle[t.toLowerCase()],
        r = o && $.call(i.attrHandle, t.toLowerCase()) ? o(e, t, !m) : void 0;
      return void 0 !== r
        ? r
        : n.attributes || !m
        ? e.getAttribute(t)
        : (r = e.getAttributeNode(t)) && r.specified
        ? r.value
        : null;
    }),
    (ae.escape = function (e) {
      return (e + "").replace(ie, oe);
    }),
    (ae.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (ae.uniqueSort = function (e) {
      var t,
        i = [],
        o = 0,
        r = 0;
      if (
        ((d = !n.detectDuplicates),
        (u = !n.sortStable && e.slice(0)),
        e.sort(D),
        d)
      ) {
        for (; (t = e[r++]); ) t === e[r] && (o = i.push(r));
        for (; o--; ) e.splice(i[o], 1);
      }
      return (u = null), e;
    }),
    (o = ae.getText =
      function (e) {
        var t,
          n = "",
          i = 0,
          r = e.nodeType;
        if (r) {
          if (1 === r || 9 === r || 11 === r) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
          } else if (3 === r || 4 === r) return e.nodeValue;
        } else for (; (t = e[i++]); ) n += o(t);
        return n;
      }),
    ((i = ae.selectors =
      {
        cacheLength: 50,
        createPseudo: ce,
        match: Y,
        attrHandle: {},
        find: {},
        relative: {
          ">": {
            dir: "parentNode",
            first: !0,
          },
          " ": {
            dir: "parentNode",
          },
          "+": {
            dir: "previousSibling",
            first: !0,
          },
          "~": {
            dir: "previousSibling",
          },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(te, ne)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || ae.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && ae.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return Y.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    X.test(n) &&
                    (t = s(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ne).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = C[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                C(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      (void 0 !== e.getAttribute && e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (e, t, n) {
            return function (i) {
              var o = ae.attr(i, e);
              return null == o
                ? "!=" === t
                : !t ||
                    ((o += ""),
                    "=" === t
                      ? o === n
                      : "!=" === t
                      ? o !== n
                      : "^=" === t
                      ? n && 0 === o.indexOf(n)
                      : "*=" === t
                      ? n && o.indexOf(n) > -1
                      : "$=" === t
                      ? n && o.slice(-n.length) === n
                      : "~=" === t
                      ? (" " + o.replace(F, " ") + " ").indexOf(n) > -1
                      : "|=" === t &&
                        (o === n || o.slice(0, n.length + 1) === n + "-"));
            };
          },
          CHILD: function (e, t, n, i, o) {
            var r = "nth" !== e.slice(0, 3),
              s = "last" !== e.slice(-4),
              a = "of-type" === t;
            return 1 === i && 0 === o
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (t, n, l) {
                  var c,
                    u,
                    d,
                    p,
                    f,
                    h,
                    m = r !== s ? "nextSibling" : "previousSibling",
                    g = t.parentNode,
                    v = a && t.nodeName.toLowerCase(),
                    y = !l && !a,
                    b = !1;
                  if (g) {
                    if (r) {
                      for (; m; ) {
                        for (p = t; (p = p[m]); )
                          if (
                            a
                              ? p.nodeName.toLowerCase() === v
                              : 1 === p.nodeType
                          )
                            return !1;
                        h = m = "only" === e && !h && "nextSibling";
                      }
                      return !0;
                    }
                    if (((h = [s ? g.firstChild : g.lastChild]), s && y)) {
                      for (
                        b =
                          (f =
                            (c =
                              (u =
                                (d = (p = g)[w] || (p[w] = {}))[p.uniqueID] ||
                                (d[p.uniqueID] = {}))[e] || [])[0] === T &&
                            c[1]) && c[2],
                          p = f && g.childNodes[f];
                        (p = (++f && p && p[m]) || (b = f = 0) || h.pop());

                      )
                        if (1 === p.nodeType && ++b && p === t) {
                          u[e] = [T, f, b];
                          break;
                        }
                    } else if (
                      (y &&
                        (b = f =
                          (c =
                            (u =
                              (d = (p = t)[w] || (p[w] = {}))[p.uniqueID] ||
                              (d[p.uniqueID] = {}))[e] || [])[0] === T && c[1]),
                      !1 === b)
                    )
                      for (
                        ;
                        (p = (++f && p && p[m]) || (b = f = 0) || h.pop()) &&
                        ((a
                          ? p.nodeName.toLowerCase() !== v
                          : 1 !== p.nodeType) ||
                          !++b ||
                          (y &&
                            ((u =
                              (d = p[w] || (p[w] = {}))[p.uniqueID] ||
                              (d[p.uniqueID] = {}))[e] = [T, b]),
                          p !== t));

                      );
                    return (b -= o) === i || (b % i == 0 && b / i >= 0);
                  }
                };
          },
          PSEUDO: function (e, t) {
            var n,
              o =
                i.pseudos[e] ||
                i.setFilters[e.toLowerCase()] ||
                ae.error("unsupported pseudo: " + e);
            return o[w]
              ? o(t)
              : o.length > 1
              ? ((n = [e, e, "", t]),
                i.setFilters.hasOwnProperty(e.toLowerCase())
                  ? ce(function (e, n) {
                      for (var i, r = o(e, t), s = r.length; s--; )
                        e[(i = P(e, r[s]))] = !(n[i] = r[s]);
                    })
                  : function (e) {
                      return o(e, 0, n);
                    })
              : o;
          },
        },
        pseudos: {
          not: ce(function (e) {
            var t = [],
              n = [],
              i = a(e.replace(z, "$1"));
            return i[w]
              ? ce(function (e, t, n, o) {
                  for (var r, s = i(e, null, o, []), a = e.length; a--; )
                    (r = s[a]) && (e[a] = !(t[a] = r));
                })
              : function (e, o, r) {
                  return (t[0] = e), i(t, null, r, n), (t[0] = null), !n.pop();
                };
          }),
          has: ce(function (e) {
            return function (t) {
              return ae(e, t).length > 0;
            };
          }),
          contains: ce(function (e) {
            return (
              (e = e.replace(te, ne)),
              function (t) {
                return (t.textContent || o(t)).indexOf(e) > -1;
              }
            );
          }),
          lang: ce(function (e) {
            return (
              V.test(e || "") || ae.error("unsupported lang: " + e),
              (e = e.replace(te, ne).toLowerCase()),
              function (t) {
                var n;
                do {
                  if (
                    (n = m
                      ? t.lang
                      : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                  )
                    return (
                      (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                    );
                } while ((t = t.parentNode) && 1 === t.nodeType);
                return !1;
              }
            );
          }),
          target: function (t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id;
          },
          root: function (e) {
            return e === h;
          },
          focus: function (e) {
            return (
              e === f.activeElement &&
              (!f.hasFocus || f.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: me(!1),
          disabled: me(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !i.pseudos.empty(e);
          },
          header: function (e) {
            return G.test(e.nodeName);
          },
          input: function (e) {
            return K.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: ge(function () {
            return [0];
          }),
          last: ge(function (e, t) {
            return [t - 1];
          }),
          eq: ge(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: ge(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: ge(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: ge(function (e, t, n) {
            for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0; ) e.push(i);
            return e;
          }),
          gt: ge(function (e, t, n) {
            for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
            return e;
          }),
        },
      }).pseudos.nth = i.pseudos.eq),
    {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0,
    }))
      i.pseudos[t] = fe(t);
    for (t in {
      submit: !0,
      reset: !0,
    })
      i.pseudos[t] = he(t);
    function ye() {}
    function be(e) {
      for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
      return i;
    }
    function we(e, t, n) {
      var i = t.dir,
        o = t.next,
        r = o || i,
        s = n && "parentNode" === r,
        a = k++;
      return t.first
        ? function (t, n, o) {
            for (; (t = t[i]); ) if (1 === t.nodeType || s) return e(t, n, o);
            return !1;
          }
        : function (t, n, l) {
            var c,
              u,
              d,
              p = [T, a];
            if (l) {
              for (; (t = t[i]); )
                if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
            } else
              for (; (t = t[i]); )
                if (1 === t.nodeType || s)
                  if (
                    ((u =
                      (d = t[w] || (t[w] = {}))[t.uniqueID] ||
                      (d[t.uniqueID] = {})),
                    o && o === t.nodeName.toLowerCase())
                  )
                    t = t[i] || t;
                  else {
                    if ((c = u[r]) && c[0] === T && c[1] === a)
                      return (p[2] = c[2]);
                    if (((u[r] = p), (p[2] = e(t, n, l)))) return !0;
                  }
            return !1;
          };
    }
    function xe(e) {
      return e.length > 1
        ? function (t, n, i) {
            for (var o = e.length; o--; ) if (!e[o](t, n, i)) return !1;
            return !0;
          }
        : e[0];
    }
    function Te(e, t, n, i, o) {
      for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++)
        (r = e[a]) && ((n && !n(r, i, o)) || (s.push(r), c && t.push(a)));
      return s;
    }
    function ke(e, t, n, i, o, r) {
      return (
        i && !i[w] && (i = ke(i)),
        o && !o[w] && (o = ke(o, r)),
        ce(function (r, s, a, l) {
          var c,
            u,
            d,
            p = [],
            f = [],
            h = s.length,
            m =
              r ||
              (function (e, t, n) {
                for (var i = 0, o = t.length; i < o; i++) ae(e, t[i], n);
                return n;
              })(t || "*", a.nodeType ? [a] : a, []),
            g = !e || (!r && t) ? m : Te(m, p, e, a, l),
            v = n ? (o || (r ? e : h || i) ? [] : s) : g;
          if ((n && n(g, v, a, l), i))
            for (c = Te(v, f), i(c, [], a, l), u = c.length; u--; )
              (d = c[u]) && (v[f[u]] = !(g[f[u]] = d));
          if (r) {
            if (o || e) {
              if (o) {
                for (c = [], u = v.length; u--; )
                  (d = v[u]) && c.push((g[u] = d));
                o(null, (v = []), c, l);
              }
              for (u = v.length; u--; )
                (d = v[u]) &&
                  (c = o ? P(r, d) : p[u]) > -1 &&
                  (r[c] = !(s[c] = d));
            }
          } else (v = Te(v === s ? v.splice(h, v.length) : v)), o ? o(null, s, v, l) : j.apply(s, v);
        })
      );
    }
    function Ce(e) {
      for (
        var t,
          n,
          o,
          r = e.length,
          s = i.relative[e[0].type],
          a = s || i.relative[" "],
          l = s ? 1 : 0,
          u = we(
            function (e) {
              return e === t;
            },
            a,
            !0
          ),
          d = we(
            function (e) {
              return P(t, e) > -1;
            },
            a,
            !0
          ),
          p = [
            function (e, n, i) {
              var o =
                (!s && (i || n !== c)) ||
                ((t = n).nodeType ? u(e, n, i) : d(e, n, i));
              return (t = null), o;
            },
          ];
        l < r;
        l++
      )
        if ((n = i.relative[e[l].type])) p = [we(xe(p), n)];
        else {
          if ((n = i.filter[e[l].type].apply(null, e[l].matches))[w]) {
            for (o = ++l; o < r && !i.relative[e[o].type]; o++);
            return ke(
              l > 1 && xe(p),
              l > 1 &&
                be(
                  e.slice(0, l - 1).concat({
                    value: " " === e[l - 2].type ? "*" : "",
                  })
                ).replace(z, "$1"),
              n,
              l < o && Ce(e.slice(l, o)),
              o < r && Ce((e = e.slice(o))),
              o < r && be(e)
            );
          }
          p.push(n);
        }
      return xe(p);
    }
    return (
      (ye.prototype = i.filters = i.pseudos),
      (i.setFilters = new ye()),
      (s = ae.tokenize =
        function (e, t) {
          var n,
            o,
            r,
            s,
            a,
            l,
            c,
            u = S[e + " "];
          if (u) return t ? 0 : u.slice(0);
          for (a = e, l = [], c = i.preFilter; a; ) {
            for (s in ((n && !(o = W.exec(a))) ||
              (o && (a = a.slice(o[0].length) || a), l.push((r = []))),
            (n = !1),
            (o = B.exec(a)) &&
              ((n = o.shift()),
              r.push({
                value: n,
                type: o[0].replace(z, " "),
              }),
              (a = a.slice(n.length))),
            i.filter))
              !(o = Y[s].exec(a)) ||
                (c[s] && !(o = c[s](o))) ||
                ((n = o.shift()),
                r.push({
                  value: n,
                  type: s,
                  matches: o,
                }),
                (a = a.slice(n.length)));
            if (!n) break;
          }
          return t ? a.length : a ? ae.error(e) : S(e, l).slice(0);
        }),
      (a = ae.compile =
        function (e, t) {
          var n,
            o = [],
            r = [],
            a = E[e + " "];
          if (!a) {
            for (t || (t = s(e)), n = t.length; n--; )
              (a = Ce(t[n]))[w] ? o.push(a) : r.push(a);
            (a = E(
              e,
              (function (e, t) {
                var n = t.length > 0,
                  o = e.length > 0,
                  r = function (r, s, a, l, u) {
                    var d,
                      h,
                      g,
                      v = 0,
                      y = "0",
                      b = r && [],
                      w = [],
                      x = c,
                      k = r || (o && i.find.TAG("*", u)),
                      C = (T += null == x ? 1 : Math.random() || 0.1),
                      S = k.length;
                    for (
                      u && (c = s === f || s || u);
                      y !== S && null != (d = k[y]);
                      y++
                    ) {
                      if (o && d) {
                        for (
                          h = 0, s || d.ownerDocument === f || (p(d), (a = !m));
                          (g = e[h++]);

                        )
                          if (g(d, s || f, a)) {
                            l.push(d);
                            break;
                          }
                        u && (T = C);
                      }
                      n && ((d = !g && d) && v--, r && b.push(d));
                    }
                    if (((v += y), n && y !== v)) {
                      for (h = 0; (g = t[h++]); ) g(b, w, s, a);
                      if (r) {
                        if (v > 0)
                          for (; y--; ) b[y] || w[y] || (w[y] = O.call(l));
                        w = Te(w);
                      }
                      j.apply(l, w),
                        u &&
                          !r &&
                          w.length > 0 &&
                          v + t.length > 1 &&
                          ae.uniqueSort(l);
                    }
                    return u && ((T = C), (c = x)), b;
                  };
                return n ? ce(r) : r;
              })(r, o)
            )).selector = e;
          }
          return a;
        }),
      (l = ae.select =
        function (e, t, n, o) {
          var r,
            l,
            c,
            u,
            d,
            p = "function" == typeof e && e,
            f = !o && s((e = p.selector || e));
          if (((n = n || []), 1 === f.length)) {
            if (
              (l = f[0] = f[0].slice(0)).length > 2 &&
              "ID" === (c = l[0]).type &&
              9 === t.nodeType &&
              m &&
              i.relative[l[1].type]
            ) {
              if (!(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0]))
                return n;
              p && (t = t.parentNode), (e = e.slice(l.shift().value.length));
            }
            for (
              r = Y.needsContext.test(e) ? 0 : l.length;
              r-- && ((c = l[r]), !i.relative[(u = c.type)]);

            )
              if (
                (d = i.find[u]) &&
                (o = d(
                  c.matches[0].replace(te, ne),
                  (ee.test(l[0].type) && ve(t.parentNode)) || t
                ))
              ) {
                if ((l.splice(r, 1), !(e = o.length && be(l))))
                  return j.apply(n, o), n;
                break;
              }
          }
          return (
            (p || a(e, f))(
              o,
              t,
              !m,
              n,
              !t || (ee.test(e) && ve(t.parentNode)) || t
            ),
            n
          );
        }),
      (n.sortStable = w.split("").sort(D).join("") === w),
      (n.detectDuplicates = !!d),
      p(),
      (n.sortDetached = ue(function (e) {
        return 1 & e.compareDocumentPosition(f.createElement("fieldset"));
      })),
      ue(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        de("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (n.attributes &&
        ue(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        de("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ue(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        de(_, function (e, t, n) {
          var i;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (i = e.getAttributeNode(t)) && i.specified
              ? i.value
              : null;
        }),
      ae
    );
  })(e);
  (w.find = k),
    (w.expr = k.selectors),
    (w.expr[":"] = w.expr.pseudos),
    (w.uniqueSort = w.unique = k.uniqueSort),
    (w.text = k.getText),
    (w.isXMLDoc = k.isXML),
    (w.contains = k.contains),
    (w.escapeSelector = k.escape);
  var C = function (e, t, n) {
      for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (o && w(e).is(n)) break;
          i.push(e);
        }
      return i;
    },
    S = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    E = w.expr.match.needsContext;
  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function $(e, t, n) {
    return m(t)
      ? w.grep(e, function (e, i) {
          return !!t.call(e, i, e) !== n;
        })
      : t.nodeType
      ? w.grep(e, function (e) {
          return (e === t) !== n;
        })
      : "string" != typeof t
      ? w.grep(e, function (e) {
          return l.call(t, e) > -1 !== n;
        })
      : w.filter(t, e, n);
  }
  (w.filter = function (e, t, n) {
    var i = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === i.nodeType
        ? w.find.matchesSelector(i, e)
          ? [i]
          : []
        : w.find.matches(
            e,
            w.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    w.fn.extend({
      find: function (e) {
        var t,
          n,
          i = this.length,
          o = this;
        if ("string" != typeof e)
          return this.pushStack(
            w(e).filter(function () {
              for (t = 0; t < i; t++) if (w.contains(o[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < i; t++) w.find(e, o[t], n);
        return i > 1 ? w.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack($(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack($(this, e || [], !0));
      },
      is: function (e) {
        return !!$(this, "string" == typeof e && E.test(e) ? w(e) : e || [], !1)
          .length;
      },
    });
  var I,
    O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((w.fn.init = function (e, t, n) {
    var o, r;
    if (!e) return this;
    if (((n = n || I), "string" == typeof e)) {
      if (
        !(o =
          "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
            ? [null, e, null]
            : O.exec(e)) ||
        (!o[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (o[1]) {
        if (
          ((t = t instanceof w ? t[0] : t),
          w.merge(
            this,
            w.parseHTML(o[1], t && t.nodeType ? t.ownerDocument || t : i, !0)
          ),
          D.test(o[1]) && w.isPlainObject(t))
        )
          for (o in t) m(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
        return this;
      }
      return (
        (r = i.getElementById(o[2])) && ((this[0] = r), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : m(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(w)
      : w.makeArray(e, this);
  }).prototype = w.fn),
    (I = w(i));
  var L = /^(?:parents|prev(?:Until|All))/,
    j = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0,
    };
  function N(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  w.fn.extend({
    has: function (e) {
      var t = w(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        i = 0,
        o = this.length,
        r = [],
        s = "string" != typeof e && w(e);
      if (!E.test(e))
        for (; i < o; i++)
          for (n = this[i]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (s
                ? s.index(n) > -1
                : 1 === n.nodeType && w.find.matchesSelector(n, e))
            ) {
              r.push(n);
              break;
            }
      return this.pushStack(r.length > 1 ? w.uniqueSort(r) : r);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? l.call(w(e), this[0])
          : l.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    w.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return C(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return C(e, "parentNode", n);
        },
        next: function (e) {
          return N(e, "nextSibling");
        },
        prev: function (e) {
          return N(e, "previousSibling");
        },
        nextAll: function (e) {
          return C(e, "nextSibling");
        },
        prevAll: function (e) {
          return C(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return C(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return C(e, "previousSibling", n);
        },
        siblings: function (e) {
          return S((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return S(e.firstChild);
        },
        contents: function (e) {
          return void 0 !== e.contentDocument
            ? e.contentDocument
            : (A(e, "template") && (e = e.content || e),
              w.merge([], e.childNodes));
        },
      },
      function (e, t) {
        w.fn[e] = function (n, i) {
          var o = w.map(this, t, n);
          return (
            "Until" !== e.slice(-5) && (i = n),
            i && "string" == typeof i && (o = w.filter(i, o)),
            this.length > 1 &&
              (j[e] || w.uniqueSort(o), L.test(e) && o.reverse()),
            this.pushStack(o)
          );
        };
      }
    );
  var P = /[^\x20\t\r\n\f]+/g;
  function _(e) {
    return e;
  }
  function M(e) {
    throw e;
  }
  function H(e, t, n, i) {
    var o;
    try {
      e && m((o = e.promise))
        ? o.call(e).done(t).fail(n)
        : e && m((o = e.then))
        ? o.call(e, t, n)
        : t.apply(void 0, [e].slice(i));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (w.Callbacks = function (e) {
    e =
      "string" == typeof e
        ? (function (e) {
            var t = {};
            return (
              w.each(e.match(P) || [], function (e, n) {
                t[n] = !0;
              }),
              t
            );
          })(e)
        : w.extend({}, e);
    var t,
      n,
      i,
      o,
      r = [],
      s = [],
      a = -1,
      l = function () {
        for (o = o || e.once, i = t = !0; s.length; a = -1)
          for (n = s.shift(); ++a < r.length; )
            !1 === r[a].apply(n[0], n[1]) &&
              e.stopOnFalse &&
              ((a = r.length), (n = !1));
        e.memory || (n = !1), (t = !1), o && (r = n ? [] : "");
      },
      c = {
        add: function () {
          return (
            r &&
              (n && !t && ((a = r.length - 1), s.push(n)),
              (function t(n) {
                w.each(n, function (n, i) {
                  m(i)
                    ? (e.unique && c.has(i)) || r.push(i)
                    : i && i.length && "string" !== b(i) && t(i);
                });
              })(arguments),
              n && !t && l()),
            this
          );
        },
        remove: function () {
          return (
            w.each(arguments, function (e, t) {
              for (var n; (n = w.inArray(t, r, n)) > -1; )
                r.splice(n, 1), n <= a && a--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? w.inArray(e, r) > -1 : r.length > 0;
        },
        empty: function () {
          return r && (r = []), this;
        },
        disable: function () {
          return (o = s = []), (r = n = ""), this;
        },
        disabled: function () {
          return !r;
        },
        lock: function () {
          return (o = s = []), n || t || (r = n = ""), this;
        },
        locked: function () {
          return !!o;
        },
        fireWith: function (e, n) {
          return (
            o ||
              ((n = [e, (n = n || []).slice ? n.slice() : n]),
              s.push(n),
              t || l()),
            this
          );
        },
        fire: function () {
          return c.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!i;
        },
      };
    return c;
  }),
    w.extend({
      Deferred: function (t) {
        var n = [
            [
              "notify",
              "progress",
              w.Callbacks("memory"),
              w.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              w.Callbacks("once memory"),
              w.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              w.Callbacks("once memory"),
              w.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          i = "pending",
          o = {
            state: function () {
              return i;
            },
            always: function () {
              return r.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return o.then(null, e);
            },
            pipe: function () {
              var e = arguments;
              return w
                .Deferred(function (t) {
                  w.each(n, function (n, i) {
                    var o = m(e[i[4]]) && e[i[4]];
                    r[i[1]](function () {
                      var e = o && o.apply(this, arguments);
                      e && m(e.promise)
                        ? e
                            .promise()
                            .progress(t.notify)
                            .done(t.resolve)
                            .fail(t.reject)
                        : t[i[0] + "With"](this, o ? [e] : arguments);
                    });
                  }),
                    (e = null);
                })
                .promise();
            },
            then: function (t, i, o) {
              var r = 0;
              function s(t, n, i, o) {
                return function () {
                  var a = this,
                    l = arguments,
                    c = function () {
                      var e, c;
                      if (!(t < r)) {
                        if ((e = i.apply(a, l)) === n.promise())
                          throw new TypeError("Thenable self-resolution");
                        (c =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          m(c)
                            ? o
                              ? c.call(e, s(r, n, _, o), s(r, n, M, o))
                              : (r++,
                                c.call(
                                  e,
                                  s(r, n, _, o),
                                  s(r, n, M, o),
                                  s(r, n, _, n.notifyWith)
                                ))
                            : (i !== _ && ((a = void 0), (l = [e])),
                              (o || n.resolveWith)(a, l));
                      }
                    },
                    u = o
                      ? c
                      : function () {
                          try {
                            c();
                          } catch (e) {
                            w.Deferred.exceptionHook &&
                              w.Deferred.exceptionHook(e, u.stackTrace),
                              t + 1 >= r &&
                                (i !== M && ((a = void 0), (l = [e])),
                                n.rejectWith(a, l));
                          }
                        };
                  t
                    ? u()
                    : (w.Deferred.getStackHook &&
                        (u.stackTrace = w.Deferred.getStackHook()),
                      e.setTimeout(u));
                };
              }
              return w
                .Deferred(function (e) {
                  n[0][3].add(s(0, e, m(o) ? o : _, e.notifyWith)),
                    n[1][3].add(s(0, e, m(t) ? t : _)),
                    n[2][3].add(s(0, e, m(i) ? i : M));
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? w.extend(e, o) : o;
            },
          },
          r = {};
        return (
          w.each(n, function (e, t) {
            var s = t[2],
              a = t[5];
            (o[t[1]] = s.add),
              a &&
                s.add(
                  function () {
                    i = a;
                  },
                  n[3 - e][2].disable,
                  n[3 - e][3].disable,
                  n[0][2].lock,
                  n[0][3].lock
                ),
              s.add(t[3].fire),
              (r[t[0]] = function () {
                return (
                  r[t[0] + "With"](this === r ? void 0 : this, arguments), this
                );
              }),
              (r[t[0] + "With"] = s.fireWith);
          }),
          o.promise(r),
          t && t.call(r, r),
          r
        );
      },
      when: function (e) {
        var t = arguments.length,
          n = t,
          i = Array(n),
          o = r.call(arguments),
          s = w.Deferred(),
          a = function (e) {
            return function (n) {
              (i[e] = this),
                (o[e] = arguments.length > 1 ? r.call(arguments) : n),
                --t || s.resolveWith(i, o);
            };
          };
        if (
          t <= 1 &&
          (H(e, s.done(a(n)).resolve, s.reject, !t),
          "pending" === s.state() || m(o[n] && o[n].then))
        )
          return s.then();
        for (; n--; ) H(o[n], a(n), s.reject);
        return s.promise();
      },
    });
  var q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (w.Deferred.exceptionHook = function (t, n) {
    e.console &&
      e.console.warn &&
      t &&
      q.test(t.name) &&
      e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }),
    (w.readyException = function (t) {
      e.setTimeout(function () {
        throw t;
      });
    });
  var R = w.Deferred();
  function F() {
    i.removeEventListener("DOMContentLoaded", F),
      e.removeEventListener("load", F),
      w.ready();
  }
  (w.fn.ready = function (e) {
    return (
      R.then(e).catch(function (e) {
        w.readyException(e);
      }),
      this
    );
  }),
    w.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --w.readyWait : w.isReady) ||
          ((w.isReady = !0),
          (!0 !== e && --w.readyWait > 0) || R.resolveWith(i, [w]));
      },
    }),
    (w.ready.then = R.then),
    "complete" === i.readyState ||
    ("loading" !== i.readyState && !i.documentElement.doScroll)
      ? e.setTimeout(w.ready)
      : (i.addEventListener("DOMContentLoaded", F),
        e.addEventListener("load", F));
  var z = function (e, t, n, i, o, r, s) {
      var a = 0,
        l = e.length,
        c = null == n;
      if ("object" === b(n))
        for (a in ((o = !0), n)) z(e, t, a, n[a], !0, r, s);
      else if (
        void 0 !== i &&
        ((o = !0),
        m(i) || (s = !0),
        c &&
          (s
            ? (t.call(e, i), (t = null))
            : ((c = t),
              (t = function (e, t, n) {
                return c.call(w(e), n);
              }))),
        t)
      )
        for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
      return o ? e : c ? t.call(e) : l ? t(e[0], n) : r;
    },
    W = /^-ms-/,
    B = /-([a-z])/g;
  function U(e, t) {
    return t.toUpperCase();
  }
  function X(e) {
    return e.replace(W, "ms-").replace(B, U);
  }
  var V = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function Y() {
    this.expando = w.expando + Y.uid++;
  }
  (Y.uid = 1),
    (Y.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            V(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var i,
          o = this.cache(e);
        if ("string" == typeof t) o[X(t)] = n;
        else for (i in t) o[X(i)] = t[i];
        return o;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][X(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          i = e[this.expando];
        if (void 0 !== i) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(X)
              : (t = X(t)) in i
              ? [t]
              : t.match(P) || []).length;
            for (; n--; ) delete i[t[n]];
          }
          (void 0 === t || w.isEmptyObject(i)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !w.isEmptyObject(t);
      },
    });
  var Z = new Y(),
    K = new Y(),
    G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Q = /[A-Z]/g;
  function J(e, t, n) {
    var i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((i = "data-" + t.replace(Q, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(i)))
      ) {
        try {
          n = (function (e) {
            return (
              "true" === e ||
              ("false" !== e &&
                ("null" === e
                  ? null
                  : e === +e + ""
                  ? +e
                  : G.test(e)
                  ? JSON.parse(e)
                  : e))
            );
          })(n);
        } catch (e) {}
        K.set(e, t, n);
      } else n = void 0;
    return n;
  }
  w.extend({
    hasData: function (e) {
      return K.hasData(e) || Z.hasData(e);
    },
    data: function (e, t, n) {
      return K.access(e, t, n);
    },
    removeData: function (e, t) {
      K.remove(e, t);
    },
    _data: function (e, t, n) {
      return Z.access(e, t, n);
    },
    _removeData: function (e, t) {
      Z.remove(e, t);
    },
  }),
    w.fn.extend({
      data: function (e, t) {
        var n,
          i,
          o,
          r = this[0],
          s = r && r.attributes;
        if (void 0 === e) {
          if (
            this.length &&
            ((o = K.get(r)), 1 === r.nodeType && !Z.get(r, "hasDataAttrs"))
          ) {
            for (n = s.length; n--; )
              s[n] &&
                0 === (i = s[n].name).indexOf("data-") &&
                ((i = X(i.slice(5))), J(r, i, o[i]));
            Z.set(r, "hasDataAttrs", !0);
          }
          return o;
        }
        return "object" == typeof e
          ? this.each(function () {
              K.set(this, e);
            })
          : z(
              this,
              function (t) {
                var n;
                if (r && void 0 === t)
                  return void 0 !== (n = K.get(r, e))
                    ? n
                    : void 0 !== (n = J(r, e))
                    ? n
                    : void 0;
                this.each(function () {
                  K.set(this, e, t);
                });
              },
              null,
              t,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          K.remove(this, e);
        });
      },
    }),
    w.extend({
      queue: function (e, t, n) {
        var i;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (i = Z.get(e, t)),
            n &&
              (!i || Array.isArray(n)
                ? (i = Z.access(e, t, w.makeArray(n)))
                : i.push(n)),
            i || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = w.queue(e, t),
          i = n.length,
          o = n.shift(),
          r = w._queueHooks(e, t);
        "inprogress" === o && ((o = n.shift()), i--),
          o &&
            ("fx" === t && n.unshift("inprogress"),
            delete r.stop,
            o.call(
              e,
              function () {
                w.dequeue(e, t);
              },
              r
            )),
          !i && r && r.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          Z.get(e, n) ||
          Z.access(e, n, {
            empty: w.Callbacks("once memory").add(function () {
              Z.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    w.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return (
          "string" != typeof e && ((t = e), (e = "fx"), n--),
          arguments.length < n
            ? w.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function () {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e),
                  "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          w.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          i = 1,
          o = w.Deferred(),
          r = this,
          s = this.length,
          a = function () {
            --i || o.resolveWith(r, [r]);
          };
        for (
          "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
          s--;

        )
          (n = Z.get(r[s], e + "queueHooks")) &&
            n.empty &&
            (i++, n.empty.add(a));
        return a(), o.promise(t);
      },
    });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
    ne = ["Top", "Right", "Bottom", "Left"],
    ie = i.documentElement,
    oe = function (e) {
      return w.contains(e.ownerDocument, e);
    },
    re = {
      composed: !0,
    };
  ie.getRootNode &&
    (oe = function (e) {
      return (
        w.contains(e.ownerDocument, e) || e.getRootNode(re) === e.ownerDocument
      );
    });
  var se = function (e, t) {
      return (
        "none" === (e = t || e).style.display ||
        ("" === e.style.display && oe(e) && "none" === w.css(e, "display"))
      );
    },
    ae = function (e, t, n, i) {
      var o,
        r,
        s = {};
      for (r in t) (s[r] = e.style[r]), (e.style[r] = t[r]);
      for (r in ((o = n.apply(e, i || [])), t)) e.style[r] = s[r];
      return o;
    };
  function le(e, t, n, i) {
    var o,
      r,
      s = 20,
      a = i
        ? function () {
            return i.cur();
          }
        : function () {
            return w.css(e, t, "");
          },
      l = a(),
      c = (n && n[3]) || (w.cssNumber[t] ? "" : "px"),
      u =
        e.nodeType &&
        (w.cssNumber[t] || ("px" !== c && +l)) &&
        te.exec(w.css(e, t));
    if (u && u[3] !== c) {
      for (l /= 2, c = c || u[3], u = +l || 1; s--; )
        w.style(e, t, u + c),
          (1 - r) * (1 - (r = a() / l || 0.5)) <= 0 && (s = 0),
          (u /= r);
      (u *= 2), w.style(e, t, u + c), (n = n || []);
    }
    return (
      n &&
        ((u = +u || +l || 0),
        (o = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
        i && ((i.unit = c), (i.start = u), (i.end = o))),
      o
    );
  }
  var ce = {};
  function ue(e) {
    var t,
      n = e.ownerDocument,
      i = e.nodeName,
      o = ce[i];
    return (
      o ||
      ((t = n.body.appendChild(n.createElement(i))),
      (o = w.css(t, "display")),
      t.parentNode.removeChild(t),
      "none" === o && (o = "block"),
      (ce[i] = o),
      o)
    );
  }
  function de(e, t) {
    for (var n, i, o = [], r = 0, s = e.length; r < s; r++)
      (i = e[r]).style &&
        ((n = i.style.display),
        t
          ? ("none" === n &&
              ((o[r] = Z.get(i, "display") || null),
              o[r] || (i.style.display = "")),
            "" === i.style.display && se(i) && (o[r] = ue(i)))
          : "none" !== n && ((o[r] = "none"), Z.set(i, "display", n)));
    for (r = 0; r < s; r++) null != o[r] && (e[r].style.display = o[r]);
    return e;
  }
  w.fn.extend({
    show: function () {
      return de(this, !0);
    },
    hide: function () {
      return de(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            se(this) ? w(this).show() : w(this).hide();
          });
    },
  });
  var pe = /^(?:checkbox|radio)$/i,
    fe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i,
    me = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  function ge(e, t) {
    var n;
    return (
      (n =
        void 0 !== e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : void 0 !== e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && A(e, t)) ? w.merge([e], n) : n
    );
  }
  function ve(e, t) {
    for (var n = 0, i = e.length; n < i; n++)
      Z.set(e[n], "globalEval", !t || Z.get(t[n], "globalEval"));
  }
  (me.optgroup = me.option),
    (me.tbody = me.tfoot = me.colgroup = me.caption = me.thead),
    (me.th = me.td);
  var ye,
    be,
    we = /<|&#?\w+;/;
  function xe(e, t, n, i, o) {
    for (
      var r,
        s,
        a,
        l,
        c,
        u,
        d = t.createDocumentFragment(),
        p = [],
        f = 0,
        h = e.length;
      f < h;
      f++
    )
      if ((r = e[f]) || 0 === r)
        if ("object" === b(r)) w.merge(p, r.nodeType ? [r] : r);
        else if (we.test(r)) {
          for (
            s = s || d.appendChild(t.createElement("div")),
              a = (fe.exec(r) || ["", ""])[1].toLowerCase(),
              l = me[a] || me._default,
              s.innerHTML = l[1] + w.htmlPrefilter(r) + l[2],
              u = l[0];
            u--;

          )
            s = s.lastChild;
          w.merge(p, s.childNodes), ((s = d.firstChild).textContent = "");
        } else p.push(t.createTextNode(r));
    for (d.textContent = "", f = 0; (r = p[f++]); )
      if (i && w.inArray(r, i) > -1) o && o.push(r);
      else if (
        ((c = oe(r)), (s = ge(d.appendChild(r), "script")), c && ve(s), n)
      )
        for (u = 0; (r = s[u++]); ) he.test(r.type || "") && n.push(r);
    return d;
  }
  (ye = i.createDocumentFragment().appendChild(i.createElement("div"))),
    (be = i.createElement("input")).setAttribute("type", "radio"),
    be.setAttribute("checked", "checked"),
    be.setAttribute("name", "t"),
    ye.appendChild(be),
    (h.checkClone = ye.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ye.innerHTML = "<textarea>x</textarea>"),
    (h.noCloneChecked = !!ye.cloneNode(!0).lastChild.defaultValue);
  var Te = /^key/,
    ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Ce = /^([^.]*)(?:\.(.+)|)/;
  function Se() {
    return !0;
  }
  function Ee() {
    return !1;
  }
  function Ae(e, t) {
    return (
      (e ===
        (function () {
          try {
            return i.activeElement;
          } catch (e) {}
        })()) ==
      ("focus" === t)
    );
  }
  function De(e, t, n, i, o, r) {
    var s, a;
    if ("object" == typeof t) {
      for (a in ("string" != typeof n && ((i = i || n), (n = void 0)), t))
        De(e, a, n, i, t[a], r);
      return e;
    }
    if (
      (null == i && null == o
        ? ((o = n), (i = n = void 0))
        : null == o &&
          ("string" == typeof n
            ? ((o = i), (i = void 0))
            : ((o = i), (i = n), (n = void 0))),
      !1 === o)
    )
      o = Ee;
    else if (!o) return e;
    return (
      1 === r &&
        ((s = o),
        ((o = function (e) {
          return w().off(e), s.apply(this, arguments);
        }).guid = s.guid || (s.guid = w.guid++))),
      e.each(function () {
        w.event.add(this, t, o, i, n);
      })
    );
  }
  function $e(e, t, n) {
    n
      ? (Z.set(e, t, !1),
        w.event.add(e, t, {
          namespace: !1,
          handler: function (e) {
            var i,
              o,
              s = Z.get(this, t);
            if (1 & e.isTrigger && this[t]) {
              if (s.length)
                (w.event.special[t] || {}).delegateType && e.stopPropagation();
              else if (
                ((s = r.call(arguments)),
                Z.set(this, t, s),
                (i = n(this, t)),
                this[t](),
                s !== (o = Z.get(this, t)) || i ? Z.set(this, t, !1) : (o = {}),
                s !== o)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), o.value
                );
            } else
              s.length &&
                (Z.set(this, t, {
                  value: w.event.trigger(
                    w.extend(s[0], w.Event.prototype),
                    s.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === Z.get(e, t) && w.event.add(e, t, Se);
  }
  (w.event = {
    global: {},
    add: function (e, t, n, i, o) {
      var r,
        s,
        a,
        l,
        c,
        u,
        d,
        p,
        f,
        h,
        m,
        g = Z.get(e);
      if (g)
        for (
          n.handler && ((n = (r = n).handler), (o = r.selector)),
            o && w.find.matchesSelector(ie, o),
            n.guid || (n.guid = w.guid++),
            (l = g.events) || (l = g.events = {}),
            (s = g.handle) ||
              (s = g.handle =
                function (t) {
                  return void 0 !== w && w.event.triggered !== t.type
                    ? w.event.dispatch.apply(e, arguments)
                    : void 0;
                }),
            c = (t = (t || "").match(P) || [""]).length;
          c--;

        )
          (f = m = (a = Ce.exec(t[c]) || [])[1]),
            (h = (a[2] || "").split(".").sort()),
            f &&
              ((d = w.event.special[f] || {}),
              (f = (o ? d.delegateType : d.bindType) || f),
              (d = w.event.special[f] || {}),
              (u = w.extend(
                {
                  type: f,
                  origType: m,
                  data: i,
                  handler: n,
                  guid: n.guid,
                  selector: o,
                  needsContext: o && w.expr.match.needsContext.test(o),
                  namespace: h.join("."),
                },
                r
              )),
              (p = l[f]) ||
                (((p = l[f] = []).delegateCount = 0),
                (d.setup && !1 !== d.setup.call(e, i, h, s)) ||
                  (e.addEventListener && e.addEventListener(f, s))),
              d.add &&
                (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)),
              o ? p.splice(p.delegateCount++, 0, u) : p.push(u),
              (w.event.global[f] = !0));
    },
    remove: function (e, t, n, i, o) {
      var r,
        s,
        a,
        l,
        c,
        u,
        d,
        p,
        f,
        h,
        m,
        g = Z.hasData(e) && Z.get(e);
      if (g && (l = g.events)) {
        for (c = (t = (t || "").match(P) || [""]).length; c--; )
          if (
            ((f = m = (a = Ce.exec(t[c]) || [])[1]),
            (h = (a[2] || "").split(".").sort()),
            f)
          ) {
            for (
              d = w.event.special[f] || {},
                p = l[(f = (i ? d.delegateType : d.bindType) || f)] || [],
                a =
                  a[2] &&
                  new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                s = r = p.length;
              r--;

            )
              (u = p[r]),
                (!o && m !== u.origType) ||
                  (n && n.guid !== u.guid) ||
                  (a && !a.test(u.namespace)) ||
                  (i && i !== u.selector && ("**" !== i || !u.selector)) ||
                  (p.splice(r, 1),
                  u.selector && p.delegateCount--,
                  d.remove && d.remove.call(e, u));
            s &&
              !p.length &&
              ((d.teardown && !1 !== d.teardown.call(e, h, g.handle)) ||
                w.removeEvent(e, f, g.handle),
              delete l[f]);
          } else for (f in l) w.event.remove(e, f + t[c], n, i, !0);
        w.isEmptyObject(l) && Z.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        i,
        o,
        r,
        s,
        a = w.event.fix(e),
        l = new Array(arguments.length),
        c = (Z.get(this, "events") || {})[a.type] || [],
        u = w.event.special[a.type] || {};
      for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
      if (
        ((a.delegateTarget = this),
        !u.preDispatch || !1 !== u.preDispatch.call(this, a))
      ) {
        for (
          s = w.event.handlers.call(this, a, c), t = 0;
          (o = s[t++]) && !a.isPropagationStopped();

        )
          for (
            a.currentTarget = o.elem, n = 0;
            (r = o.handlers[n++]) && !a.isImmediatePropagationStopped();

          )
            (a.rnamespace &&
              !1 !== r.namespace &&
              !a.rnamespace.test(r.namespace)) ||
              ((a.handleObj = r),
              (a.data = r.data),
              void 0 !==
                (i = (
                  (w.event.special[r.origType] || {}).handle || r.handler
                ).apply(o.elem, l)) &&
                !1 === (a.result = i) &&
                (a.preventDefault(), a.stopPropagation()));
        return u.postDispatch && u.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function (e, t) {
      var n,
        i,
        o,
        r,
        s,
        a = [],
        l = t.delegateCount,
        c = e.target;
      if (l && c.nodeType && !("click" === e.type && e.button >= 1))
        for (; c !== this; c = c.parentNode || this)
          if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
            for (r = [], s = {}, n = 0; n < l; n++)
              void 0 === s[(o = (i = t[n]).selector + " ")] &&
                (s[o] = i.needsContext
                  ? w(o, this).index(c) > -1
                  : w.find(o, this, null, [c]).length),
                s[o] && r.push(i);
            r.length &&
              a.push({
                elem: c,
                handlers: r,
              });
          }
      return (
        (c = this),
        l < t.length &&
          a.push({
            elem: c,
            handlers: t.slice(l),
          }),
        a
      );
    },
    addProp: function (e, t) {
      Object.defineProperty(w.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: m(t)
          ? function () {
              if (this.originalEvent) return t(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[e];
            },
        set: function (t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t,
          });
        },
      });
    },
    fix: function (e) {
      return e[w.expando] ? e : new w.Event(e);
    },
    special: {
      load: {
        noBubble: !0,
      },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && $e(t, "click", Se),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && $e(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (pe.test(t.type) &&
              t.click &&
              A(t, "input") &&
              Z.get(t, "click")) ||
            A(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (w.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (w.Event = function (e, t) {
      if (!(this instanceof w.Event)) return new w.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? Se
              : Ee),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && w.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[w.expando] = !0);
    }),
    (w.Event.prototype = {
      constructor: w.Event,
      isDefaultPrevented: Ee,
      isPropagationStopped: Ee,
      isImmediatePropagationStopped: Ee,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = Se),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = Se),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = Se),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    w.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
          var t = e.button;
          return null == e.which && Te.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && ke.test(e.type)
            ? 1 & t
              ? 1
              : 2 & t
              ? 3
              : 4 & t
              ? 2
              : 0
            : e.which;
        },
      },
      w.event.addProp
    ),
    w.each(
      {
        focus: "focusin",
        blur: "focusout",
      },
      function (e, t) {
        w.event.special[e] = {
          setup: function () {
            return $e(this, e, Ae), !1;
          },
          trigger: function () {
            return $e(this, e), !0;
          },
          delegateType: t,
        };
      }
    ),
    w.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, t) {
        w.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              i = e.relatedTarget,
              o = e.handleObj;
            return (
              (i && (i === this || w.contains(this, i))) ||
                ((e.type = o.origType),
                (n = o.handler.apply(this, arguments)),
                (e.type = t)),
              n
            );
          },
        };
      }
    ),
    w.fn.extend({
      on: function (e, t, n, i) {
        return De(this, e, t, n, i);
      },
      one: function (e, t, n, i) {
        return De(this, e, t, n, i, 1);
      },
      off: function (e, t, n) {
        var i, o;
        if (e && e.preventDefault && e.handleObj)
          return (
            (i = e.handleObj),
            w(e.delegateTarget).off(
              i.namespace ? i.origType + "." + i.namespace : i.origType,
              i.selector,
              i.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (o in e) this.off(o, t, e[o]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = Ee),
          this.each(function () {
            w.event.remove(this, e, n, t);
          })
        );
      },
    });
  var Ie =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    Oe = /<script|<style|<link/i,
    Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
    je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Ne(e, t) {
    return (
      (A(e, "table") &&
        A(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        w(e).children("tbody")[0]) ||
      e
    );
  }
  function Pe(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function _e(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Me(e, t) {
    var n, i, o, r, s, a, l, c;
    if (1 === t.nodeType) {
      if (
        Z.hasData(e) &&
        ((r = Z.access(e)), (s = Z.set(t, r)), (c = r.events))
      )
        for (o in (delete s.handle, (s.events = {}), c))
          for (n = 0, i = c[o].length; n < i; n++) w.event.add(t, o, c[o][n]);
      K.hasData(e) && ((a = K.access(e)), (l = w.extend({}, a)), K.set(t, l));
    }
  }
  function He(e, t, n, i) {
    t = s.apply([], t);
    var o,
      r,
      a,
      l,
      c,
      u,
      d = 0,
      p = e.length,
      f = p - 1,
      g = t[0],
      v = m(g);
    if (v || (p > 1 && "string" == typeof g && !h.checkClone && Le.test(g)))
      return e.each(function (o) {
        var r = e.eq(o);
        v && (t[0] = g.call(this, o, r.html())), He(r, t, n, i);
      });
    if (
      p &&
      ((r = (o = xe(t, e[0].ownerDocument, !1, e, i)).firstChild),
      1 === o.childNodes.length && (o = r),
      r || i)
    ) {
      for (l = (a = w.map(ge(o, "script"), Pe)).length; d < p; d++)
        (c = o),
          d !== f &&
            ((c = w.clone(c, !0, !0)), l && w.merge(a, ge(c, "script"))),
          n.call(e[d], c, d);
      if (l)
        for (u = a[a.length - 1].ownerDocument, w.map(a, _e), d = 0; d < l; d++)
          (c = a[d]),
            he.test(c.type || "") &&
              !Z.access(c, "globalEval") &&
              w.contains(u, c) &&
              (c.src && "module" !== (c.type || "").toLowerCase()
                ? w._evalUrl &&
                  !c.noModule &&
                  w._evalUrl(c.src, {
                    nonce: c.nonce || c.getAttribute("nonce"),
                  })
                : y(c.textContent.replace(je, ""), c, u));
    }
    return e;
  }
  function qe(e, t, n) {
    for (var i, o = t ? w.filter(t, e) : e, r = 0; null != (i = o[r]); r++)
      n || 1 !== i.nodeType || w.cleanData(ge(i)),
        i.parentNode &&
          (n && oe(i) && ve(ge(i, "script")), i.parentNode.removeChild(i));
    return e;
  }
  w.extend({
    htmlPrefilter: function (e) {
      return e.replace(Ie, "<$1></$2>");
    },
    clone: function (e, t, n) {
      var i,
        o,
        r,
        s,
        a,
        l,
        c,
        u = e.cloneNode(!0),
        d = oe(e);
      if (
        !(
          h.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          w.isXMLDoc(e)
        )
      )
        for (s = ge(u), i = 0, o = (r = ge(e)).length; i < o; i++)
          (a = r[i]),
            (l = s[i]),
            (c = void 0),
            "input" === (c = l.nodeName.toLowerCase()) && pe.test(a.type)
              ? (l.checked = a.checked)
              : ("input" !== c && "textarea" !== c) ||
                (l.defaultValue = a.defaultValue);
      if (t)
        if (n)
          for (r = r || ge(e), s = s || ge(u), i = 0, o = r.length; i < o; i++)
            Me(r[i], s[i]);
        else Me(e, u);
      return (
        (s = ge(u, "script")).length > 0 && ve(s, !d && ge(e, "script")), u
      );
    },
    cleanData: function (e) {
      for (var t, n, i, o = w.event.special, r = 0; void 0 !== (n = e[r]); r++)
        if (V(n)) {
          if ((t = n[Z.expando])) {
            if (t.events)
              for (i in t.events)
                o[i] ? w.event.remove(n, i) : w.removeEvent(n, i, t.handle);
            n[Z.expando] = void 0;
          }
          n[K.expando] && (n[K.expando] = void 0);
        }
    },
  }),
    w.fn.extend({
      detach: function (e) {
        return qe(this, e, !0);
      },
      remove: function (e) {
        return qe(this, e);
      },
      text: function (e) {
        return z(
          this,
          function (e) {
            return void 0 === e
              ? w.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return He(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            Ne(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return He(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = Ne(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return He(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return He(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (w.cleanData(ge(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return w.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return z(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              i = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !Oe.test(e) &&
              !me[(fe.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = w.htmlPrefilter(e);
              try {
                for (; n < i; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (w.cleanData(ge(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var e = [];
        return He(
          this,
          arguments,
          function (t) {
            var n = this.parentNode;
            w.inArray(this, e) < 0 &&
              (w.cleanData(ge(this)), n && n.replaceChild(t, this));
          },
          e
        );
      },
    }),
    w.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, t) {
        w.fn[e] = function (e) {
          for (var n, i = [], o = w(e), r = o.length - 1, s = 0; s <= r; s++)
            (n = s === r ? this : this.clone(!0)),
              w(o[s])[t](n),
              a.apply(i, n.get());
          return this.pushStack(i);
        };
      }
    );
  var Re = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
    Fe = function (t) {
      var n = t.ownerDocument.defaultView;
      return (n && n.opener) || (n = e), n.getComputedStyle(t);
    },
    ze = new RegExp(ne.join("|"), "i");
  function We(e, t, n) {
    var i,
      o,
      r,
      s,
      a = e.style;
    return (
      (n = n || Fe(e)) &&
        ("" !== (s = n.getPropertyValue(t) || n[t]) ||
          oe(e) ||
          (s = w.style(e, t)),
        !h.pixelBoxStyles() &&
          Re.test(s) &&
          ze.test(t) &&
          ((i = a.width),
          (o = a.minWidth),
          (r = a.maxWidth),
          (a.minWidth = a.maxWidth = a.width = s),
          (s = n.width),
          (a.width = i),
          (a.minWidth = o),
          (a.maxWidth = r))),
      void 0 !== s ? s + "" : s
    );
  }
  function Be(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function t() {
      if (u) {
        (c.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (u.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          ie.appendChild(c).appendChild(u);
        var t = e.getComputedStyle(u);
        (o = "1%" !== t.top),
          (l = 12 === n(t.marginLeft)),
          (u.style.right = "60%"),
          (a = 36 === n(t.right)),
          (r = 36 === n(t.width)),
          (u.style.position = "absolute"),
          (s = 12 === n(u.offsetWidth / 3)),
          ie.removeChild(c),
          (u = null);
      }
    }
    function n(e) {
      return Math.round(parseFloat(e));
    }
    var o,
      r,
      s,
      a,
      l,
      c = i.createElement("div"),
      u = i.createElement("div");
    u.style &&
      ((u.style.backgroundClip = "content-box"),
      (u.cloneNode(!0).style.backgroundClip = ""),
      (h.clearCloneStyle = "content-box" === u.style.backgroundClip),
      w.extend(h, {
        boxSizingReliable: function () {
          return t(), r;
        },
        pixelBoxStyles: function () {
          return t(), a;
        },
        pixelPosition: function () {
          return t(), o;
        },
        reliableMarginLeft: function () {
          return t(), l;
        },
        scrollboxSize: function () {
          return t(), s;
        },
      }));
  })();
  var Ue = ["Webkit", "Moz", "ms"],
    Xe = i.createElement("div").style,
    Ve = {};
  function Ye(e) {
    var t = w.cssProps[e] || Ve[e];
    return (
      t ||
      (e in Xe
        ? e
        : (Ve[e] =
            (function (e) {
              for (
                var t = e[0].toUpperCase() + e.slice(1), n = Ue.length;
                n--;

              )
                if ((e = Ue[n] + t) in Xe) return e;
            })(e) || e))
    );
  }
  var Ze = /^(none|table(?!-c[ea]).+)/,
    Ke = /^--/,
    Ge = {
      position: "absolute",
      visibility: "hidden",
      display: "block",
    },
    Qe = {
      letterSpacing: "0",
      fontWeight: "400",
    };
  function Je(e, t, n) {
    var i = te.exec(t);
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
  }
  function et(e, t, n, i, o, r) {
    var s = "width" === t ? 1 : 0,
      a = 0,
      l = 0;
    if (n === (i ? "border" : "content")) return 0;
    for (; s < 4; s += 2)
      "margin" === n && (l += w.css(e, n + ne[s], !0, o)),
        i
          ? ("content" === n && (l -= w.css(e, "padding" + ne[s], !0, o)),
            "margin" !== n &&
              (l -= w.css(e, "border" + ne[s] + "Width", !0, o)))
          : ((l += w.css(e, "padding" + ne[s], !0, o)),
            "padding" !== n
              ? (l += w.css(e, "border" + ne[s] + "Width", !0, o))
              : (a += w.css(e, "border" + ne[s] + "Width", !0, o)));
    return (
      !i &&
        r >= 0 &&
        (l +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - a - 0.5
            )
          ) || 0),
      l
    );
  }
  function tt(e, t, n) {
    var i = Fe(e),
      o =
        (!h.boxSizingReliable() || n) &&
        "border-box" === w.css(e, "boxSizing", !1, i),
      r = o,
      s = We(e, t, i),
      a = "offset" + t[0].toUpperCase() + t.slice(1);
    if (Re.test(s)) {
      if (!n) return s;
      s = "auto";
    }
    return (
      ((!h.boxSizingReliable() && o) ||
        "auto" === s ||
        (!parseFloat(s) && "inline" === w.css(e, "display", !1, i))) &&
        e.getClientRects().length &&
        ((o = "border-box" === w.css(e, "boxSizing", !1, i)),
        (r = a in e) && (s = e[a])),
      (s = parseFloat(s) || 0) +
        et(e, t, n || (o ? "border" : "content"), r, i, s) +
        "px"
    );
  }
  function nt(e, t, n, i, o) {
    return new nt.prototype.init(e, t, n, i, o);
  }
  w.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = We(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var o,
          r,
          s,
          a = X(t),
          l = Ke.test(t),
          c = e.style;
        if (
          (l || (t = Ye(a)), (s = w.cssHooks[t] || w.cssHooks[a]), void 0 === n)
        )
          return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t];
        "string" === (r = typeof n) &&
          (o = te.exec(n)) &&
          o[1] &&
          ((n = le(e, t, o)), (r = "number")),
          null != n &&
            n == n &&
            ("number" !== r ||
              l ||
              (n += (o && o[3]) || (w.cssNumber[a] ? "" : "px")),
            h.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (c[t] = "inherit"),
            (s && "set" in s && void 0 === (n = s.set(e, n, i))) ||
              (l ? c.setProperty(t, n) : (c[t] = n)));
      }
    },
    css: function (e, t, n, i) {
      var o,
        r,
        s,
        a = X(t);
      return (
        Ke.test(t) || (t = Ye(a)),
        (s = w.cssHooks[t] || w.cssHooks[a]) &&
          "get" in s &&
          (o = s.get(e, !0, n)),
        void 0 === o && (o = We(e, t, i)),
        "normal" === o && t in Qe && (o = Qe[t]),
        "" === n || n
          ? ((r = parseFloat(o)), !0 === n || isFinite(r) ? r || 0 : o)
          : o
      );
    },
  }),
    w.each(["height", "width"], function (e, t) {
      w.cssHooks[t] = {
        get: function (e, n, i) {
          if (n)
            return !Ze.test(w.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? tt(e, t, i)
              : ae(e, Ge, function () {
                  return tt(e, t, i);
                });
        },
        set: function (e, n, i) {
          var o,
            r = Fe(e),
            s = !h.scrollboxSize() && "absolute" === r.position,
            a = (s || i) && "border-box" === w.css(e, "boxSizing", !1, r),
            l = i ? et(e, t, i, a, r) : 0;
          return (
            a &&
              s &&
              (l -= Math.ceil(
                e["offset" + t[0].toUpperCase() + t.slice(1)] -
                  parseFloat(r[t]) -
                  et(e, t, "border", !1, r) -
                  0.5
              )),
            l &&
              (o = te.exec(n)) &&
              "px" !== (o[3] || "px") &&
              ((e.style[t] = n), (n = w.css(e, t))),
            Je(0, n, l)
          );
        },
      };
    }),
    (w.cssHooks.marginLeft = Be(h.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(We(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              ae(
                e,
                {
                  marginLeft: 0,
                },
                function () {
                  return e.getBoundingClientRect().left;
                }
              )) + "px"
        );
    })),
    w.each(
      {
        margin: "",
        padding: "",
        border: "Width",
      },
      function (e, t) {
        (w.cssHooks[e + t] = {
          expand: function (n) {
            for (
              var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n];
              i < 4;
              i++
            )
              o[e + ne[i] + t] = r[i] || r[i - 2] || r[0];
            return o;
          },
        }),
          "margin" !== e && (w.cssHooks[e + t].set = Je);
      }
    ),
    w.fn.extend({
      css: function (e, t) {
        return z(
          this,
          function (e, t, n) {
            var i,
              o,
              r = {},
              s = 0;
            if (Array.isArray(t)) {
              for (i = Fe(e), o = t.length; s < o; s++)
                r[t[s]] = w.css(e, t[s], !1, i);
              return r;
            }
            return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
          },
          e,
          t,
          arguments.length > 1
        );
      },
    }),
    (w.Tween = nt),
    (nt.prototype = {
      constructor: nt,
      init: function (e, t, n, i, o, r) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = o || w.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = i),
          (this.unit = r || (w.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = nt.propHooks[this.prop];
        return e && e.get ? e.get(this) : nt.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = nt.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                w.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : nt.propHooks._default.set(this),
          this
        );
      },
    }),
    (nt.prototype.init.prototype = nt.prototype),
    (nt.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = w.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          w.fx.step[e.prop]
            ? w.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!w.cssHooks[e.prop] && null == e.elem.style[Ye(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : w.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }),
    (nt.propHooks.scrollTop = nt.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (w.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (w.fx = nt.prototype.init),
    (w.fx.step = {});
  var it,
    ot,
    rt = /^(?:toggle|show|hide)$/,
    st = /queueHooks$/;
  function at() {
    ot &&
      (!1 === i.hidden && e.requestAnimationFrame
        ? e.requestAnimationFrame(at)
        : e.setTimeout(at, w.fx.interval),
      w.fx.tick());
  }
  function lt() {
    return (
      e.setTimeout(function () {
        it = void 0;
      }),
      (it = Date.now())
    );
  }
  function ct(e, t) {
    var n,
      i = 0,
      o = {
        height: e,
      };
    for (t = t ? 1 : 0; i < 4; i += 2 - t)
      o["margin" + (n = ne[i])] = o["padding" + n] = e;
    return t && (o.opacity = o.width = e), o;
  }
  function ut(e, t, n) {
    for (
      var i,
        o = (dt.tweeners[t] || []).concat(dt.tweeners["*"]),
        r = 0,
        s = o.length;
      r < s;
      r++
    )
      if ((i = o[r].call(n, t, e))) return i;
  }
  function dt(e, t, n) {
    var i,
      o,
      r = 0,
      s = dt.prefilters.length,
      a = w.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (o) return !1;
        for (
          var t = it || lt(),
            n = Math.max(0, c.startTime + c.duration - t),
            i = 1 - (n / c.duration || 0),
            r = 0,
            s = c.tweens.length;
          r < s;
          r++
        )
          c.tweens[r].run(i);
        return (
          a.notifyWith(e, [c, i, n]),
          i < 1 && s
            ? n
            : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
        );
      },
      c = a.promise({
        elem: e,
        props: w.extend({}, t),
        opts: w.extend(
          !0,
          {
            specialEasing: {},
            easing: w.easing._default,
          },
          n
        ),
        originalProperties: t,
        originalOptions: n,
        startTime: it || lt(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var i = w.Tween(
            e,
            c.opts,
            t,
            n,
            c.opts.specialEasing[t] || c.opts.easing
          );
          return c.tweens.push(i), i;
        },
        stop: function (t) {
          var n = 0,
            i = t ? c.tweens.length : 0;
          if (o) return this;
          for (o = !0; n < i; n++) c.tweens[n].run(1);
          return (
            t
              ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t]))
              : a.rejectWith(e, [c, t]),
            this
          );
        },
      }),
      u = c.props;
    for (
      !(function (e, t) {
        var n, i, o, r, s;
        for (n in e)
          if (
            ((o = t[(i = X(n))]),
            (r = e[n]),
            Array.isArray(r) && ((o = r[1]), (r = e[n] = r[0])),
            n !== i && ((e[i] = r), delete e[n]),
            (s = w.cssHooks[i]) && ("expand" in s))
          )
            for (n in ((r = s.expand(r)), delete e[i], r))
              (n in e) || ((e[n] = r[n]), (t[n] = o));
          else t[i] = o;
      })(u, c.opts.specialEasing);
      r < s;
      r++
    )
      if ((i = dt.prefilters[r].call(c, e, u, c.opts)))
        return (
          m(i.stop) &&
            (w._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)),
          i
        );
    return (
      w.map(u, ut, c),
      m(c.opts.start) && c.opts.start.call(e, c),
      c
        .progress(c.opts.progress)
        .done(c.opts.done, c.opts.complete)
        .fail(c.opts.fail)
        .always(c.opts.always),
      w.fx.timer(
        w.extend(l, {
          elem: e,
          anim: c,
          queue: c.opts.queue,
        })
      ),
      c
    );
  }
  (w.Animation = w.extend(dt, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return le(n.elem, e, te.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      m(e) ? ((t = e), (e = ["*"])) : (e = e.match(P));
      for (var n, i = 0, o = e.length; i < o; i++)
        (n = e[i]),
          (dt.tweeners[n] = dt.tweeners[n] || []),
          dt.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var i,
          o,
          r,
          s,
          a,
          l,
          c,
          u,
          d = "width" in t || "height" in t,
          p = this,
          f = {},
          h = e.style,
          m = e.nodeType && se(e),
          g = Z.get(e, "fxshow");
        for (i in (n.queue ||
          (null == (s = w._queueHooks(e, "fx")).unqueued &&
            ((s.unqueued = 0),
            (a = s.empty.fire),
            (s.empty.fire = function () {
              s.unqueued || a();
            })),
          s.unqueued++,
          p.always(function () {
            p.always(function () {
              s.unqueued--, w.queue(e, "fx").length || s.empty.fire();
            });
          })),
        t))
          if (((o = t[i]), rt.test(o))) {
            if (
              (delete t[i],
              (r = r || "toggle" === o),
              o === (m ? "hide" : "show"))
            ) {
              if ("show" !== o || !g || void 0 === g[i]) continue;
              m = !0;
            }
            f[i] = (g && g[i]) || w.style(e, i);
          }
        if ((l = !w.isEmptyObject(t)) || !w.isEmptyObject(f))
          for (i in (d &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (c = g && g.display) && (c = Z.get(e, "display")),
            "none" === (u = w.css(e, "display")) &&
              (c
                ? (u = c)
                : (de([e], !0),
                  (c = e.style.display || c),
                  (u = w.css(e, "display")),
                  de([e]))),
            ("inline" === u || ("inline-block" === u && null != c)) &&
              "none" === w.css(e, "float") &&
              (l ||
                (p.done(function () {
                  h.display = c;
                }),
                null == c && ((u = h.display), (c = "none" === u ? "" : u))),
              (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            p.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (l = !1),
          f))
            l ||
              (g
                ? "hidden" in g && (m = g.hidden)
                : (g = Z.access(e, "fxshow", {
                    display: c,
                  })),
              r && (g.hidden = !m),
              m && de([e], !0),
              p.done(function () {
                for (i in (m || de([e]), Z.remove(e, "fxshow"), f))
                  w.style(e, i, f[i]);
              })),
              (l = ut(m ? g[i] : 0, i, p)),
              i in g ||
                ((g[i] = l.start), m && ((l.end = l.start), (l.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? dt.prefilters.unshift(e) : dt.prefilters.push(e);
    },
  })),
    (w.speed = function (e, t, n) {
      var i =
        e && "object" == typeof e
          ? w.extend({}, e)
          : {
              complete: n || (!n && t) || (m(e) && e),
              duration: e,
              easing: (n && t) || (t && !m(t) && t),
            };
      return (
        w.fx.off
          ? (i.duration = 0)
          : "number" != typeof i.duration &&
            (i.duration in w.fx.speeds
              ? (i.duration = w.fx.speeds[i.duration])
              : (i.duration = w.fx.speeds._default)),
        (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
        (i.old = i.complete),
        (i.complete = function () {
          m(i.old) && i.old.call(this), i.queue && w.dequeue(this, i.queue);
        }),
        i
      );
    }),
    w.fn.extend({
      fadeTo: function (e, t, n, i) {
        return this.filter(se).css("opacity", 0).show().end().animate(
          {
            opacity: t,
          },
          e,
          n,
          i
        );
      },
      animate: function (e, t, n, i) {
        var o = w.isEmptyObject(e),
          r = w.speed(t, n, i),
          s = function () {
            var t = dt(this, w.extend({}, e), r);
            (o || Z.get(this, "finish")) && t.stop(!0);
          };
        return (
          (s.finish = s),
          o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
        );
      },
      stop: function (e, t, n) {
        var i = function (e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          "string" != typeof e && ((n = t), (t = e), (e = void 0)),
          t && !1 !== e && this.queue(e || "fx", []),
          this.each(function () {
            var t = !0,
              o = null != e && e + "queueHooks",
              r = w.timers,
              s = Z.get(this);
            if (o) s[o] && s[o].stop && i(s[o]);
            else for (o in s) s[o] && s[o].stop && st.test(o) && i(s[o]);
            for (o = r.length; o--; )
              r[o].elem !== this ||
                (null != e && r[o].queue !== e) ||
                (r[o].anim.stop(n), (t = !1), r.splice(o, 1));
            (!t && n) || w.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          !1 !== e && (e = e || "fx"),
          this.each(function () {
            var t,
              n = Z.get(this),
              i = n[e + "queue"],
              o = n[e + "queueHooks"],
              r = w.timers,
              s = i ? i.length : 0;
            for (
              n.finish = !0,
                w.queue(this, e, []),
                o && o.stop && o.stop.call(this, !0),
                t = r.length;
              t--;

            )
              r[t].elem === this &&
                r[t].queue === e &&
                (r[t].anim.stop(!0), r.splice(t, 1));
            for (t = 0; t < s; t++)
              i[t] && i[t].finish && i[t].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    w.each(["toggle", "show", "hide"], function (e, t) {
      var n = w.fn[t];
      w.fn[t] = function (e, i, o) {
        return null == e || "boolean" == typeof e
          ? n.apply(this, arguments)
          : this.animate(ct(t, !0), e, i, o);
      };
    }),
    w.each(
      {
        slideDown: ct("show"),
        slideUp: ct("hide"),
        slideToggle: ct("toggle"),
        fadeIn: {
          opacity: "show",
        },
        fadeOut: {
          opacity: "hide",
        },
        fadeToggle: {
          opacity: "toggle",
        },
      },
      function (e, t) {
        w.fn[e] = function (e, n, i) {
          return this.animate(t, e, n, i);
        };
      }
    ),
    (w.timers = []),
    (w.fx.tick = function () {
      var e,
        t = 0,
        n = w.timers;
      for (it = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || w.fx.stop(), (it = void 0);
    }),
    (w.fx.timer = function (e) {
      w.timers.push(e), w.fx.start();
    }),
    (w.fx.interval = 13),
    (w.fx.start = function () {
      ot || ((ot = !0), at());
    }),
    (w.fx.stop = function () {
      ot = null;
    }),
    (w.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400,
    }),
    (w.fn.delay = function (t, n) {
      return (
        (t = (w.fx && w.fx.speeds[t]) || t),
        (n = n || "fx"),
        this.queue(n, function (n, i) {
          var o = e.setTimeout(n, t);
          i.stop = function () {
            e.clearTimeout(o);
          };
        })
      );
    }),
    (function () {
      var e = i.createElement("input"),
        t = i.createElement("select").appendChild(i.createElement("option"));
      (e.type = "checkbox"),
        (h.checkOn = "" !== e.value),
        (h.optSelected = t.selected),
        ((e = i.createElement("input")).value = "t"),
        (e.type = "radio"),
        (h.radioValue = "t" === e.value);
    })();
  var pt,
    ft = w.expr.attrHandle;
  w.fn.extend({
    attr: function (e, t) {
      return z(this, w.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        w.removeAttr(this, e);
      });
    },
  }),
    w.extend({
      attr: function (e, t, n) {
        var i,
          o,
          r = e.nodeType;
        if (3 !== r && 8 !== r && 2 !== r)
          return void 0 === e.getAttribute
            ? w.prop(e, t, n)
            : ((1 === r && w.isXMLDoc(e)) ||
                (o =
                  w.attrHooks[t.toLowerCase()] ||
                  (w.expr.match.bool.test(t) ? pt : void 0)),
              void 0 !== n
                ? null === n
                  ? void w.removeAttr(e, t)
                  : o && "set" in o && void 0 !== (i = o.set(e, n, t))
                  ? i
                  : (e.setAttribute(t, n + ""), n)
                : o && "get" in o && null !== (i = o.get(e, t))
                ? i
                : null == (i = w.find.attr(e, t))
                ? void 0
                : i);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!h.radioValue && "radio" === t && A(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          i = 0,
          o = t && t.match(P);
        if (o && 1 === e.nodeType) for (; (n = o[i++]); ) e.removeAttribute(n);
      },
    }),
    (pt = {
      set: function (e, t, n) {
        return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = ft[t] || w.find.attr;
      ft[t] = function (e, t, i) {
        var o,
          r,
          s = t.toLowerCase();
        return (
          i ||
            ((r = ft[s]),
            (ft[s] = o),
            (o = null != n(e, t, i) ? s : null),
            (ft[s] = r)),
          o
        );
      };
    });
  var ht = /^(?:input|select|textarea|button)$/i,
    mt = /^(?:a|area)$/i;
  function gt(e) {
    return (e.match(P) || []).join(" ");
  }
  function vt(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function yt(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(P)) || [];
  }
  w.fn.extend({
    prop: function (e, t) {
      return z(this, w.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[w.propFix[e] || e];
      });
    },
  }),
    w.extend({
      prop: function (e, t, n) {
        var i,
          o,
          r = e.nodeType;
        if (3 !== r && 8 !== r && 2 !== r)
          return (
            (1 === r && w.isXMLDoc(e)) ||
              ((t = w.propFix[t] || t), (o = w.propHooks[t])),
            void 0 !== n
              ? o && "set" in o && void 0 !== (i = o.set(e, n, t))
                ? i
                : (e[t] = n)
              : o && "get" in o && null !== (i = o.get(e, t))
              ? i
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = w.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : ht.test(e.nodeName) || (mt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: {
        for: "htmlFor",
        class: "className",
      },
    }),
    h.optSelected ||
      (w.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    w.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        w.propFix[this.toLowerCase()] = this;
      }
    ),
    w.fn.extend({
      addClass: function (e) {
        var t,
          n,
          i,
          o,
          r,
          s,
          a,
          l = 0;
        if (m(e))
          return this.each(function (t) {
            w(this).addClass(e.call(this, t, vt(this)));
          });
        if ((t = yt(e)).length)
          for (; (n = this[l++]); )
            if (((o = vt(n)), (i = 1 === n.nodeType && " " + gt(o) + " "))) {
              for (s = 0; (r = t[s++]); )
                i.indexOf(" " + r + " ") < 0 && (i += r + " ");
              o !== (a = gt(i)) && n.setAttribute("class", a);
            }
        return this;
      },
      removeClass: function (e) {
        var t,
          n,
          i,
          o,
          r,
          s,
          a,
          l = 0;
        if (m(e))
          return this.each(function (t) {
            w(this).removeClass(e.call(this, t, vt(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((t = yt(e)).length)
          for (; (n = this[l++]); )
            if (((o = vt(n)), (i = 1 === n.nodeType && " " + gt(o) + " "))) {
              for (s = 0; (r = t[s++]); )
                for (; i.indexOf(" " + r + " ") > -1; )
                  i = i.replace(" " + r + " ", " ");
              o !== (a = gt(i)) && n.setAttribute("class", a);
            }
        return this;
      },
      toggleClass: function (e, t) {
        var n = typeof e,
          i = "string" === n || Array.isArray(e);
        return "boolean" == typeof t && i
          ? t
            ? this.addClass(e)
            : this.removeClass(e)
          : m(e)
          ? this.each(function (n) {
              w(this).toggleClass(e.call(this, n, vt(this), t), t);
            })
          : this.each(function () {
              var t, o, r, s;
              if (i)
                for (o = 0, r = w(this), s = yt(e); (t = s[o++]); )
                  r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
              else
                (void 0 !== e && "boolean" !== n) ||
                  ((t = vt(this)) && Z.set(this, "__className__", t),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      t || !1 === e ? "" : Z.get(this, "__className__") || ""
                    ));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          i = 0;
        for (t = " " + e + " "; (n = this[i++]); )
          if (1 === n.nodeType && (" " + gt(vt(n)) + " ").indexOf(t) > -1)
            return !0;
        return !1;
      },
    });
  var bt = /\r/g;
  w.fn.extend({
    val: function (e) {
      var t,
        n,
        i,
        o = this[0];
      return arguments.length
        ? ((i = m(e)),
          this.each(function (n) {
            var o;
            1 === this.nodeType &&
              (null == (o = i ? e.call(this, n, w(this).val()) : e)
                ? (o = "")
                : "number" == typeof o
                ? (o += "")
                : Array.isArray(o) &&
                  (o = w.map(o, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((t =
                w.valHooks[this.type] ||
                w.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in t &&
                void 0 !== t.set(this, o, "value")) ||
                (this.value = o));
          }))
        : o
        ? (t = w.valHooks[o.type] || w.valHooks[o.nodeName.toLowerCase()]) &&
          "get" in t &&
          void 0 !== (n = t.get(o, "value"))
          ? n
          : "string" == typeof (n = o.value)
          ? n.replace(bt, "")
          : null == n
          ? ""
          : n
        : void 0;
    },
  }),
    w.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = w.find.attr(e, "value");
            return null != t ? t : gt(w.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              i,
              o = e.options,
              r = e.selectedIndex,
              s = "select-one" === e.type,
              a = s ? null : [],
              l = s ? r + 1 : o.length;
            for (i = r < 0 ? l : s ? r : 0; i < l; i++)
              if (
                ((n = o[i]).selected || i === r) &&
                !n.disabled &&
                (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))
              ) {
                if (((t = w(n).val()), s)) return t;
                a.push(t);
              }
            return a;
          },
          set: function (e, t) {
            for (
              var n, i, o = e.options, r = w.makeArray(t), s = o.length;
              s--;

            )
              ((i = o[s]).selected =
                w.inArray(w.valHooks.option.get(i), r) > -1) && (n = !0);
            return n || (e.selectedIndex = -1), r;
          },
        },
      },
    }),
    w.each(["radio", "checkbox"], function () {
      (w.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = w.inArray(w(e).val(), t) > -1);
        },
      }),
        h.checkOn ||
          (w.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (h.focusin = "onfocusin" in e);
  var wt = /^(?:focusinfocus|focusoutblur)$/,
    xt = function (e) {
      e.stopPropagation();
    };
  w.extend(w.event, {
    trigger: function (t, n, o, r) {
      var s,
        a,
        l,
        c,
        u,
        p,
        f,
        h,
        v = [o || i],
        y = d.call(t, "type") ? t.type : t,
        b = d.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((a = h = l = o = o || i),
        3 !== o.nodeType &&
          8 !== o.nodeType &&
          !wt.test(y + w.event.triggered) &&
          (y.indexOf(".") > -1 &&
            ((b = y.split(".")), (y = b.shift()), b.sort()),
          (u = y.indexOf(":") < 0 && "on" + y),
          ((t = t[w.expando]
            ? t
            : new w.Event(y, "object" == typeof t && t)).isTrigger = r ? 2 : 3),
          (t.namespace = b.join(".")),
          (t.rnamespace = t.namespace
            ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (t.result = void 0),
          t.target || (t.target = o),
          (n = null == n ? [t] : w.makeArray(n, [t])),
          (f = w.event.special[y] || {}),
          r || !f.trigger || !1 !== f.trigger.apply(o, n)))
      ) {
        if (!r && !f.noBubble && !g(o)) {
          for (
            c = f.delegateType || y, wt.test(c + y) || (a = a.parentNode);
            a;
            a = a.parentNode
          )
            v.push(a), (l = a);
          l === (o.ownerDocument || i) &&
            v.push(l.defaultView || l.parentWindow || e);
        }
        for (s = 0; (a = v[s++]) && !t.isPropagationStopped(); )
          (h = a),
            (t.type = s > 1 ? c : f.bindType || y),
            (p = (Z.get(a, "events") || {})[t.type] && Z.get(a, "handle")) &&
              p.apply(a, n),
            (p = u && a[u]) &&
              p.apply &&
              V(a) &&
              ((t.result = p.apply(a, n)),
              !1 === t.result && t.preventDefault());
        return (
          (t.type = y),
          r ||
            t.isDefaultPrevented() ||
            (f._default && !1 !== f._default.apply(v.pop(), n)) ||
            !V(o) ||
            (u &&
              m(o[y]) &&
              !g(o) &&
              ((l = o[u]) && (o[u] = null),
              (w.event.triggered = y),
              t.isPropagationStopped() && h.addEventListener(y, xt),
              o[y](),
              t.isPropagationStopped() && h.removeEventListener(y, xt),
              (w.event.triggered = void 0),
              l && (o[u] = l))),
          t.result
        );
      }
    },
    simulate: function (e, t, n) {
      var i = w.extend(new w.Event(), n, {
        type: e,
        isSimulated: !0,
      });
      w.event.trigger(i, null, t);
    },
  }),
    w.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          w.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return w.event.trigger(e, t, n, !0);
      },
    }),
    h.focusin ||
      w.each(
        {
          focus: "focusin",
          blur: "focusout",
        },
        function (e, t) {
          var n = function (e) {
            w.event.simulate(t, e.target, w.event.fix(e));
          };
          w.event.special[t] = {
            setup: function () {
              var i = this.ownerDocument || this,
                o = Z.access(i, t);
              o || i.addEventListener(e, n, !0), Z.access(i, t, (o || 0) + 1);
            },
            teardown: function () {
              var i = this.ownerDocument || this,
                o = Z.access(i, t) - 1;
              o
                ? Z.access(i, t, o)
                : (i.removeEventListener(e, n, !0), Z.remove(i, t));
            },
          };
        }
      );
  var Tt = e.location,
    kt = Date.now(),
    Ct = /\?/;
  w.parseXML = function (t) {
    var n;
    if (!t || "string" != typeof t) return null;
    try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (e) {
      n = void 0;
    }
    return (
      (n && !n.getElementsByTagName("parsererror").length) ||
        w.error("Invalid XML: " + t),
      n
    );
  };
  var St = /\[\]$/,
    Et = /\r?\n/g,
    At = /^(?:submit|button|image|reset|file)$/i,
    Dt = /^(?:input|select|textarea|keygen)/i;
  function $t(e, t, n, i) {
    var o;
    if (Array.isArray(t))
      w.each(t, function (t, o) {
        n || St.test(e)
          ? i(e, o)
          : $t(
              e + "[" + ("object" == typeof o && null != o ? t : "") + "]",
              o,
              n,
              i
            );
      });
    else if (n || "object" !== b(t)) i(e, t);
    else for (o in t) $t(e + "[" + o + "]", t[o], n, i);
  }
  (w.param = function (e, t) {
    var n,
      i = [],
      o = function (e, t) {
        var n = m(t) ? t() : t;
        i[i.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !w.isPlainObject(e)))
      w.each(e, function () {
        o(this.name, this.value);
      });
    else for (n in e) $t(n, e[n], t, o);
    return i.join("&");
  }),
    w.fn.extend({
      serialize: function () {
        return w.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = w.prop(this, "elements");
          return e ? w.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !w(this).is(":disabled") &&
              Dt.test(this.nodeName) &&
              !At.test(e) &&
              (this.checked || !pe.test(e))
            );
          })
          .map(function (e, t) {
            var n = w(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? w.map(n, function (e) {
                  return {
                    name: t.name,
                    value: e.replace(Et, "\r\n"),
                  };
                })
              : {
                  name: t.name,
                  value: n.replace(Et, "\r\n"),
                };
          })
          .get();
      },
    });
  var It = /%20/g,
    Ot = /#.*$/,
    Lt = /([?&])_=[^&]*/,
    jt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Nt = /^(?:GET|HEAD)$/,
    Pt = /^\/\//,
    _t = {},
    Mt = {},
    Ht = "*/".concat("*"),
    qt = i.createElement("a");
  function Rt(e) {
    return function (t, n) {
      "string" != typeof t && ((n = t), (t = "*"));
      var i,
        o = 0,
        r = t.toLowerCase().match(P) || [];
      if (m(n))
        for (; (i = r[o++]); )
          "+" === i[0]
            ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
            : (e[i] = e[i] || []).push(n);
    };
  }
  function Ft(e, t, n, i) {
    var o = {},
      r = e === Mt;
    function s(a) {
      var l;
      return (
        (o[a] = !0),
        w.each(e[a] || [], function (e, a) {
          var c = a(t, n, i);
          return "string" != typeof c || r || o[c]
            ? r
              ? !(l = c)
              : void 0
            : (t.dataTypes.unshift(c), s(c), !1);
        }),
        l
      );
    }
    return s(t.dataTypes[0]) || (!o["*"] && s("*"));
  }
  function zt(e, t) {
    var n,
      i,
      o = w.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
    return i && w.extend(!0, e, i), e;
  }
  (qt.href = Tt.href),
    w.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Tt.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            Tt.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Ht,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/,
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": w.parseXML,
        },
        flatOptions: {
          url: !0,
          context: !0,
        },
      },
      ajaxSetup: function (e, t) {
        return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e);
      },
      ajaxPrefilter: Rt(_t),
      ajaxTransport: Rt(Mt),
      ajax: function (t, n) {
        "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
        var o,
          r,
          s,
          a,
          l,
          c,
          u,
          d,
          p,
          f,
          h = w.ajaxSetup({}, n),
          m = h.context || h,
          g = h.context && (m.nodeType || m.jquery) ? w(m) : w.event,
          v = w.Deferred(),
          y = w.Callbacks("once memory"),
          b = h.statusCode || {},
          x = {},
          T = {},
          k = "canceled",
          C = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (u) {
                if (!a)
                  for (a = {}; (t = jt.exec(s)); )
                    a[t[1].toLowerCase() + " "] = (
                      a[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                t = a[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return u ? s : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == u &&
                  ((e = T[e.toLowerCase()] = T[e.toLowerCase()] || e),
                  (x[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == u && (h.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (u) C.always(e[C.status]);
                else for (t in e) b[t] = [b[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || k;
              return o && o.abort(t), S(0, t), this;
            },
          };
        if (
          (v.promise(C),
          (h.url = ((t || h.url || Tt.href) + "").replace(
            Pt,
            Tt.protocol + "//"
          )),
          (h.type = n.method || n.type || h.method || h.type),
          (h.dataTypes = (h.dataType || "*").toLowerCase().match(P) || [""]),
          null == h.crossDomain)
        ) {
          c = i.createElement("a");
          try {
            (c.href = h.url),
              (c.href = c.href),
              (h.crossDomain =
                qt.protocol + "//" + qt.host != c.protocol + "//" + c.host);
          } catch (e) {
            h.crossDomain = !0;
          }
        }
        if (
          (h.data &&
            h.processData &&
            "string" != typeof h.data &&
            (h.data = w.param(h.data, h.traditional)),
          Ft(_t, h, n, C),
          u)
        )
          return C;
        for (p in ((d = w.event && h.global) &&
          0 == w.active++ &&
          w.event.trigger("ajaxStart"),
        (h.type = h.type.toUpperCase()),
        (h.hasContent = !Nt.test(h.type)),
        (r = h.url.replace(Ot, "")),
        h.hasContent
          ? h.data &&
            h.processData &&
            0 ===
              (h.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (h.data = h.data.replace(It, "+"))
          : ((f = h.url.slice(r.length)),
            h.data &&
              (h.processData || "string" == typeof h.data) &&
              ((r += (Ct.test(r) ? "&" : "?") + h.data), delete h.data),
            !1 === h.cache &&
              ((r = r.replace(Lt, "$1")),
              (f = (Ct.test(r) ? "&" : "?") + "_=" + kt++ + f)),
            (h.url = r + f)),
        h.ifModified &&
          (w.lastModified[r] &&
            C.setRequestHeader("If-Modified-Since", w.lastModified[r]),
          w.etag[r] && C.setRequestHeader("If-None-Match", w.etag[r])),
        ((h.data && h.hasContent && !1 !== h.contentType) || n.contentType) &&
          C.setRequestHeader("Content-Type", h.contentType),
        C.setRequestHeader(
          "Accept",
          h.dataTypes[0] && h.accepts[h.dataTypes[0]]
            ? h.accepts[h.dataTypes[0]] +
                ("*" !== h.dataTypes[0] ? ", " + Ht + "; q=0.01" : "")
            : h.accepts["*"]
        ),
        h.headers))
          C.setRequestHeader(p, h.headers[p]);
        if (h.beforeSend && (!1 === h.beforeSend.call(m, C, h) || u))
          return C.abort();
        if (
          ((k = "abort"),
          y.add(h.complete),
          C.done(h.success),
          C.fail(h.error),
          (o = Ft(Mt, h, n, C)))
        ) {
          if (((C.readyState = 1), d && g.trigger("ajaxSend", [C, h]), u))
            return C;
          h.async &&
            h.timeout > 0 &&
            (l = e.setTimeout(function () {
              C.abort("timeout");
            }, h.timeout));
          try {
            (u = !1), o.send(x, S);
          } catch (e) {
            if (u) throw e;
            S(-1, e);
          }
        } else S(-1, "No Transport");
        function S(t, n, i, a) {
          var c,
            p,
            f,
            x,
            T,
            k = n;
          u ||
            ((u = !0),
            l && e.clearTimeout(l),
            (o = void 0),
            (s = a || ""),
            (C.readyState = t > 0 ? 4 : 0),
            (c = (t >= 200 && t < 300) || 304 === t),
            i &&
              (x = (function (e, t, n) {
                for (
                  var i, o, r, s, a = e.contents, l = e.dataTypes;
                  "*" === l[0];

                )
                  l.shift(),
                    void 0 === i &&
                      (i = e.mimeType || t.getResponseHeader("Content-Type"));
                if (i)
                  for (o in a)
                    if (a[o] && a[o].test(i)) {
                      l.unshift(o);
                      break;
                    }
                if (l[0] in n) r = l[0];
                else {
                  for (o in n) {
                    if (!l[0] || e.converters[o + " " + l[0]]) {
                      r = o;
                      break;
                    }
                    s || (s = o);
                  }
                  r = r || s;
                }
                if (r) return r !== l[0] && l.unshift(r), n[r];
              })(h, C, i)),
            (x = (function (e, t, n, i) {
              var o,
                r,
                s,
                a,
                l,
                c = {},
                u = e.dataTypes.slice();
              if (u[1])
                for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
              for (r = u.shift(); r; )
                if (
                  (e.responseFields[r] && (n[e.responseFields[r]] = t),
                  !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (l = r),
                  (r = u.shift()))
                )
                  if ("*" === r) r = l;
                  else if ("*" !== l && l !== r) {
                    if (!(s = c[l + " " + r] || c["* " + r]))
                      for (o in c)
                        if (
                          (a = o.split(" "))[1] === r &&
                          (s = c[l + " " + a[0]] || c["* " + a[0]])
                        ) {
                          !0 === s
                            ? (s = c[o])
                            : !0 !== c[o] && ((r = a[0]), u.unshift(a[1]));
                          break;
                        }
                    if (!0 !== s)
                      if (s && e.throws) t = s(t);
                      else
                        try {
                          t = s(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: s
                              ? e
                              : "No conversion from " + l + " to " + r,
                          };
                        }
                  }
              return {
                state: "success",
                data: t,
              };
            })(h, x, C, c)),
            c
              ? (h.ifModified &&
                  ((T = C.getResponseHeader("Last-Modified")) &&
                    (w.lastModified[r] = T),
                  (T = C.getResponseHeader("etag")) && (w.etag[r] = T)),
                204 === t || "HEAD" === h.type
                  ? (k = "nocontent")
                  : 304 === t
                  ? (k = "notmodified")
                  : ((k = x.state), (p = x.data), (c = !(f = x.error))))
              : ((f = k), (!t && k) || ((k = "error"), t < 0 && (t = 0))),
            (C.status = t),
            (C.statusText = (n || k) + ""),
            c ? v.resolveWith(m, [p, k, C]) : v.rejectWith(m, [C, k, f]),
            C.statusCode(b),
            (b = void 0),
            d && g.trigger(c ? "ajaxSuccess" : "ajaxError", [C, h, c ? p : f]),
            y.fireWith(m, [C, k]),
            d &&
              (g.trigger("ajaxComplete", [C, h]),
              --w.active || w.event.trigger("ajaxStop")));
        }
        return C;
      },
      getJSON: function (e, t, n) {
        return w.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return w.get(e, void 0, t, "script");
      },
    }),
    w.each(["get", "post"], function (e, t) {
      w[t] = function (e, n, i, o) {
        return (
          m(n) && ((o = o || i), (i = n), (n = void 0)),
          w.ajax(
            w.extend(
              {
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: i,
              },
              w.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    (w._evalUrl = function (e, t) {
      return w.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: {
          "text script": function () {},
        },
        dataFilter: function (e) {
          w.globalEval(e, t);
        },
      });
    }),
    w.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (m(e) && (e = e.call(this[0])),
            (t = w(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (var e = this; e.firstElementChild; )
                  e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (e) {
        return m(e)
          ? this.each(function (t) {
              w(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = w(this),
                n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
      },
      wrap: function (e) {
        var t = m(e);
        return this.each(function (n) {
          w(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              w(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (w.expr.pseudos.hidden = function (e) {
      return !w.expr.pseudos.visible(e);
    }),
    (w.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (w.ajaxSettings.xhr = function () {
      try {
        return new e.XMLHttpRequest();
      } catch (e) {}
    });
  var Wt = {
      0: 200,
      1223: 204,
    },
    Bt = w.ajaxSettings.xhr();
  (h.cors = !!Bt && "withCredentials" in Bt),
    (h.ajax = Bt = !!Bt),
    w.ajaxTransport(function (t) {
      var n, i;
      if (h.cors || (Bt && !t.crossDomain))
        return {
          send: function (o, r) {
            var s,
              a = t.xhr();
            if (
              (a.open(t.type, t.url, t.async, t.username, t.password),
              t.xhrFields)
            )
              for (s in t.xhrFields) a[s] = t.xhrFields[s];
            for (s in (t.mimeType &&
              a.overrideMimeType &&
              a.overrideMimeType(t.mimeType),
            t.crossDomain ||
              o["X-Requested-With"] ||
              (o["X-Requested-With"] = "XMLHttpRequest"),
            o))
              a.setRequestHeader(s, o[s]);
            (n = function (e) {
              return function () {
                n &&
                  ((n =
                    i =
                    a.onload =
                    a.onerror =
                    a.onabort =
                    a.ontimeout =
                    a.onreadystatechange =
                      null),
                  "abort" === e
                    ? a.abort()
                    : "error" === e
                    ? "number" != typeof a.status
                      ? r(0, "error")
                      : r(a.status, a.statusText)
                    : r(
                        Wt[a.status] || a.status,
                        a.statusText,
                        "text" !== (a.responseType || "text") ||
                          "string" != typeof a.responseText
                          ? {
                              binary: a.response,
                            }
                          : {
                              text: a.responseText,
                            },
                        a.getAllResponseHeaders()
                      ));
              };
            }),
              (a.onload = n()),
              (i = a.onerror = a.ontimeout = n("error")),
              void 0 !== a.onabort
                ? (a.onabort = i)
                : (a.onreadystatechange = function () {
                    4 === a.readyState &&
                      e.setTimeout(function () {
                        n && i();
                      });
                  }),
              (n = n("abort"));
            try {
              a.send((t.hasContent && t.data) || null);
            } catch (e) {
              if (n) throw e;
            }
          },
          abort: function () {
            n && n();
          },
        };
    }),
    w.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    w.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: {
        script: /\b(?:java|ecma)script\b/,
      },
      converters: {
        "text script": function (e) {
          return w.globalEval(e), e;
        },
      },
    }),
    w.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    w.ajaxTransport("script", function (e) {
      var t, n;
      if (e.crossDomain || e.scriptAttrs)
        return {
          send: function (o, r) {
            (t = w("<script>")
              .attr(e.scriptAttrs || {})
              .prop({
                charset: e.scriptCharset,
                src: e.url,
              })
              .on(
                "load error",
                (n = function (e) {
                  t.remove(),
                    (n = null),
                    e && r("error" === e.type ? 404 : 200, e.type);
                })
              )),
              i.head.appendChild(t[0]);
          },
          abort: function () {
            n && n();
          },
        };
    });
  var Ut,
    Xt = [],
    Vt = /(=)\?(?=&|$)|\?\?/;
  w.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Xt.pop() || w.expando + "_" + kt++;
      return (this[e] = !0), e;
    },
  }),
    w.ajaxPrefilter("json jsonp", function (t, n, i) {
      var o,
        r,
        s,
        a =
          !1 !== t.jsonp &&
          (Vt.test(t.url)
            ? "url"
            : "string" == typeof t.data &&
              0 ===
                (t.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Vt.test(t.data) &&
              "data");
      if (a || "jsonp" === t.dataTypes[0])
        return (
          (o = t.jsonpCallback =
            m(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
          a
            ? (t[a] = t[a].replace(Vt, "$1" + o))
            : !1 !== t.jsonp &&
              (t.url += (Ct.test(t.url) ? "&" : "?") + t.jsonp + "=" + o),
          (t.converters["script json"] = function () {
            return s || w.error(o + " was not called"), s[0];
          }),
          (t.dataTypes[0] = "json"),
          (r = e[o]),
          (e[o] = function () {
            s = arguments;
          }),
          i.always(function () {
            void 0 === r ? w(e).removeProp(o) : (e[o] = r),
              t[o] && ((t.jsonpCallback = n.jsonpCallback), Xt.push(o)),
              s && m(r) && r(s[0]),
              (s = r = void 0);
          }),
          "script"
        );
    }),
    (h.createHTMLDocument =
      (((Ut = i.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === Ut.childNodes.length)),
    (w.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (h.createHTMLDocument
              ? (((o = (t =
                  i.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = i.location.href),
                t.head.appendChild(o))
              : (t = i)),
          (s = !n && []),
          (r = D.exec(e))
            ? [t.createElement(r[1])]
            : ((r = xe([e], t, s)),
              s && s.length && w(s).remove(),
              w.merge([], r.childNodes)));
      var o, r, s;
    }),
    (w.fn.load = function (e, t, n) {
      var i,
        o,
        r,
        s = this,
        a = e.indexOf(" ");
      return (
        a > -1 && ((i = gt(e.slice(a))), (e = e.slice(0, a))),
        m(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (o = "POST"),
        s.length > 0 &&
          w
            .ajax({
              url: e,
              type: o || "GET",
              dataType: "html",
              data: t,
            })
            .done(function (e) {
              (r = arguments),
                s.html(i ? w("<div>").append(w.parseHTML(e)).find(i) : e);
            })
            .always(
              n &&
                function (e, t) {
                  s.each(function () {
                    n.apply(this, r || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    w.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        w.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    (w.expr.pseudos.animated = function (e) {
      return w.grep(w.timers, function (t) {
        return e === t.elem;
      }).length;
    }),
    (w.offset = {
      setOffset: function (e, t, n) {
        var i,
          o,
          r,
          s,
          a,
          l,
          c = w.css(e, "position"),
          u = w(e),
          d = {};
        "static" === c && (e.style.position = "relative"),
          (a = u.offset()),
          (r = w.css(e, "top")),
          (l = w.css(e, "left")),
          ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1
            ? ((s = (i = u.position()).top), (o = i.left))
            : ((s = parseFloat(r) || 0), (o = parseFloat(l) || 0)),
          m(t) && (t = t.call(e, n, w.extend({}, a))),
          null != t.top && (d.top = t.top - a.top + s),
          null != t.left && (d.left = t.left - a.left + o),
          "using" in t ? t.using.call(e, d) : u.css(d);
      },
    }),
    w.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                w.offset.setOffset(this, e, t);
              });
        var t,
          n,
          i = this[0];
        return i
          ? i.getClientRects().length
            ? ((t = i.getBoundingClientRect()),
              (n = i.ownerDocument.defaultView),
              {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset,
              })
            : {
                top: 0,
                left: 0,
              }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            i = this[0],
            o = {
              top: 0,
              left: 0,
            };
          if ("fixed" === w.css(i, "position")) t = i.getBoundingClientRect();
          else {
            for (
              t = this.offset(),
                n = i.ownerDocument,
                e = i.offsetParent || n.documentElement;
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === w.css(e, "position");

            )
              e = e.parentNode;
            e &&
              e !== i &&
              1 === e.nodeType &&
              (((o = w(e).offset()).top += w.css(e, "borderTopWidth", !0)),
              (o.left += w.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - o.top - w.css(i, "marginTop", !0),
            left: t.left - o.left - w.css(i, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent;
            e && "static" === w.css(e, "position");

          )
            e = e.offsetParent;
          return e || ie;
        });
      },
    }),
    w.each(
      {
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset",
      },
      function (e, t) {
        var n = "pageYOffset" === t;
        w.fn[e] = function (i) {
          return z(
            this,
            function (e, i, o) {
              var r;
              if (
                (g(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                void 0 === o)
              )
                return r ? r[t] : e[i];
              r
                ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset)
                : (e[i] = o);
            },
            e,
            i,
            arguments.length
          );
        };
      }
    ),
    w.each(["top", "left"], function (e, t) {
      w.cssHooks[t] = Be(h.pixelPosition, function (e, n) {
        if (n)
          return (n = We(e, t)), Re.test(n) ? w(e).position()[t] + "px" : n;
      });
    }),
    w.each(
      {
        Height: "height",
        Width: "width",
      },
      function (e, t) {
        w.each(
          {
            padding: "inner" + e,
            content: t,
            "": "outer" + e,
          },
          function (n, i) {
            w.fn[i] = function (o, r) {
              var s = arguments.length && (n || "boolean" != typeof o),
                a = n || (!0 === o || !0 === r ? "margin" : "border");
              return z(
                this,
                function (t, n, o) {
                  var r;
                  return g(t)
                    ? 0 === i.indexOf("outer")
                      ? t["inner" + e]
                      : t.document.documentElement["client" + e]
                    : 9 === t.nodeType
                    ? ((r = t.documentElement),
                      Math.max(
                        t.body["scroll" + e],
                        r["scroll" + e],
                        t.body["offset" + e],
                        r["offset" + e],
                        r["client" + e]
                      ))
                    : void 0 === o
                    ? w.css(t, n, a)
                    : w.style(t, n, o, a);
                },
                t,
                s ? o : void 0,
                s
              );
            };
          }
        );
      }
    ),
    w.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, t) {
        w.fn[t] = function (e, n) {
          return arguments.length > 0
            ? this.on(t, null, e, n)
            : this.trigger(t);
        };
      }
    ),
    w.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    w.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, i) {
        return this.on(t, e, n, i);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
    }),
    (w.proxy = function (e, t) {
      var n, i, o;
      if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
        return (
          (i = r.call(arguments, 2)),
          ((o = function () {
            return e.apply(t || this, i.concat(r.call(arguments)));
          }).guid = e.guid =
            e.guid || w.guid++),
          o
        );
    }),
    (w.holdReady = function (e) {
      e ? w.readyWait++ : w.ready(!0);
    }),
    (w.isArray = Array.isArray),
    (w.parseJSON = JSON.parse),
    (w.nodeName = A),
    (w.isFunction = m),
    (w.isWindow = g),
    (w.camelCase = X),
    (w.type = b),
    (w.now = Date.now),
    (w.isNumeric = function (e) {
      var t = w.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return w;
      });
  var Yt = e.jQuery,
    Zt = e.$;
  return (
    (w.noConflict = function (t) {
      return e.$ === w && (e.$ = Zt), t && e.jQuery === w && (e.jQuery = Yt), w;
    }),
    t || (e.jQuery = e.$ = w),
    w
  );
}),
  (function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
      ? (module.exports = e.document
          ? t(e, !0)
          : function (e) {
              if (!e.document)
                throw new Error("jQuery requires a window with a document");
              return t(e);
            })
      : t(e);
  })("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";
    var n = [],
      i = e.document,
      o = Object.getPrototypeOf,
      r = n.slice,
      s = n.concat,
      a = n.push,
      l = n.indexOf,
      c = {},
      u = c.toString,
      d = c.hasOwnProperty,
      p = d.toString,
      f = p.call(Object),
      h = {},
      m = function (e) {
        return "function" == typeof e && "number" != typeof e.nodeType;
      },
      g = function (e) {
        return null != e && e === e.window;
      },
      v = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0,
      };
    function y(e, t, n) {
      var o,
        r,
        s = (n = n || i).createElement("script");
      if (((s.text = e), t))
        for (o in v)
          (r = t[o] || (t.getAttribute && t.getAttribute(o))) &&
            s.setAttribute(o, r);
      n.head.appendChild(s).parentNode.removeChild(s);
    }
    function b(e) {
      return null == e
        ? e + ""
        : "object" == typeof e || "function" == typeof e
        ? c[u.call(e)] || "object"
        : typeof e;
    }
    var w = function (e, t) {
        return new w.fn.init(e, t);
      },
      x = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    function T(e) {
      var t = !!e && "length" in e && e.length,
        n = b(e);
      return (
        !m(e) &&
        !g(e) &&
        ("array" === n ||
          0 === t ||
          ("number" == typeof t && t > 0 && t - 1 in e))
      );
    }
    (w.fn = w.prototype =
      {
        jquery: "3.4.1",
        constructor: w,
        length: 0,
        toArray: function () {
          return r.call(this);
        },
        get: function (e) {
          return null == e
            ? r.call(this)
            : e < 0
            ? this[e + this.length]
            : this[e];
        },
        pushStack: function (e) {
          var t = w.merge(this.constructor(), e);
          return (t.prevObject = this), t;
        },
        each: function (e) {
          return w.each(this, e);
        },
        map: function (e) {
          return this.pushStack(
            w.map(this, function (t, n) {
              return e.call(t, n, t);
            })
          );
        },
        slice: function () {
          return this.pushStack(r.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        eq: function (e) {
          var t = this.length,
            n = +e + (e < 0 ? t : 0);
          return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor();
        },
        push: a,
        sort: n.sort,
        splice: n.splice,
      }),
      (w.extend = w.fn.extend =
        function () {
          var e,
            t,
            n,
            i,
            o,
            r,
            s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
          for (
            "boolean" == typeof s && ((c = s), (s = arguments[a] || {}), a++),
              "object" == typeof s || m(s) || (s = {}),
              a === l && ((s = this), a--);
            a < l;
            a++
          )
            if (null != (e = arguments[a]))
              for (t in e)
                (i = e[t]),
                  "__proto__" !== t &&
                    s !== i &&
                    (c && i && (w.isPlainObject(i) || (o = Array.isArray(i)))
                      ? ((n = s[t]),
                        (r =
                          o && !Array.isArray(n)
                            ? []
                            : o || w.isPlainObject(n)
                            ? n
                            : {}),
                        (o = !1),
                        (s[t] = w.extend(c, r, i)))
                      : void 0 !== i && (s[t] = i));
          return s;
        }),
      w.extend({
        expando: "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
          throw new Error(e);
        },
        noop: function () {},
        isPlainObject: function (e) {
          var t, n;
          return (
            !(!e || "[object Object]" !== u.call(e)) &&
            (!(t = o(e)) ||
              ("function" ==
                typeof (n = d.call(t, "constructor") && t.constructor) &&
                p.call(n) === f))
          );
        },
        isEmptyObject: function (e) {
          var t;
          for (t in e) return !1;
          return !0;
        },
        globalEval: function (e, t) {
          y(e, {
            nonce: t && t.nonce,
          });
        },
        each: function (e, t) {
          var n,
            i = 0;
          if (T(e))
            for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
          else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
          return e;
        },
        trim: function (e) {
          return null == e ? "" : (e + "").replace(x, "");
        },
        makeArray: function (e, t) {
          var n = t || [];
          return (
            null != e &&
              (T(Object(e))
                ? w.merge(n, "string" == typeof e ? [e] : e)
                : a.call(n, e)),
            n
          );
        },
        inArray: function (e, t, n) {
          return null == t ? -1 : l.call(t, e, n);
        },
        merge: function (e, t) {
          for (var n = +t.length, i = 0, o = e.length; i < n; i++)
            e[o++] = t[i];
          return (e.length = o), e;
        },
        grep: function (e, t, n) {
          for (var i = [], o = 0, r = e.length, s = !n; o < r; o++)
            !t(e[o], o) !== s && i.push(e[o]);
          return i;
        },
        map: function (e, t, n) {
          var i,
            o,
            r = 0,
            a = [];
          if (T(e))
            for (i = e.length; r < i; r++)
              null != (o = t(e[r], r, n)) && a.push(o);
          else for (r in e) null != (o = t(e[r], r, n)) && a.push(o);
          return s.apply([], a);
        },
        guid: 1,
        support: h,
      }),
      "function" == typeof Symbol &&
        (w.fn[Symbol.iterator] = n[Symbol.iterator]),
      w.each(
        "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
          " "
        ),
        function (e, t) {
          c["[object " + t + "]"] = t.toLowerCase();
        }
      );
    var k = (function (e) {
      var t,
        n,
        i,
        o,
        r,
        s,
        a,
        l,
        c,
        u,
        d,
        p,
        f,
        h,
        m,
        g,
        v,
        y,
        b,
        w = "sizzle" + 1 * new Date(),
        x = e.document,
        T = 0,
        k = 0,
        C = le(),
        S = le(),
        E = le(),
        A = le(),
        D = function (e, t) {
          return e === t && (d = !0), 0;
        },
        $ = {}.hasOwnProperty,
        I = [],
        O = I.pop,
        L = I.push,
        j = I.push,
        N = I.slice,
        P = function (e, t) {
          for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
          return -1;
        },
        _ =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        H = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        q =
          "\\[" +
          M +
          "*(" +
          H +
          ")(?:" +
          M +
          "*([*^$|!~]?=)" +
          M +
          "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
          H +
          "))|)" +
          M +
          "*\\]",
        R =
          ":(" +
          H +
          ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
          q +
          ")*)|.*)\\)|)",
        F = new RegExp(M + "+", "g"),
        z = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
        W = new RegExp("^" + M + "*," + M + "*"),
        B = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
        U = new RegExp(M + "|>"),
        X = new RegExp(R),
        V = new RegExp("^" + H + "$"),
        Y = {
          ID: new RegExp("^#(" + H + ")"),
          CLASS: new RegExp("^\\.(" + H + ")"),
          TAG: new RegExp("^(" + H + "|[*])"),
          ATTR: new RegExp("^" + q),
          PSEUDO: new RegExp("^" + R),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              M +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              M +
              "*(?:([+-]|)" +
              M +
              "*(\\d+)|))" +
              M +
              "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + _ + ")$", "i"),
          needsContext: new RegExp(
            "^" +
              M +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              M +
              "*((?:-\\d)?\\d*)" +
              M +
              "*\\)|)(?=[^-]|$)",
            "i"
          ),
        },
        Z = /HTML$/i,
        K = /^(?:input|select|textarea|button)$/i,
        G = /^h\d$/i,
        Q = /^[^{]+\{\s*\[native \w/,
        J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ee = /[+~]/,
        te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
        ne = function (e, t, n) {
          var i = "0x" + t - 65536;
          return i != i || n
            ? t
            : i < 0
            ? String.fromCharCode(i + 65536)
            : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
        },
        ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        oe = function (e, t) {
          return t
            ? "\0" === e
              ? "�"
              : e.slice(0, -1) +
                "\\" +
                e.charCodeAt(e.length - 1).toString(16) +
                " "
            : "\\" + e;
        },
        re = function () {
          p();
        },
        se = we(
          function (e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
          },
          {
            dir: "parentNode",
            next: "legend",
          }
        );
      try {
        j.apply((I = N.call(x.childNodes)), x.childNodes),
          I[x.childNodes.length].nodeType;
      } catch (e) {
        j = {
          apply: I.length
            ? function (e, t) {
                L.apply(e, N.call(t));
              }
            : function (e, t) {
                for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                e.length = n - 1;
              },
        };
      }
      function ae(e, t, i, o) {
        var r,
          a,
          c,
          u,
          d,
          h,
          v,
          y = t && t.ownerDocument,
          T = t ? t.nodeType : 9;
        if (
          ((i = i || []),
          "string" != typeof e || !e || (1 !== T && 9 !== T && 11 !== T))
        )
          return i;
        if (
          !o &&
          ((t ? t.ownerDocument || t : x) !== f && p(t), (t = t || f), m)
        ) {
          if (11 !== T && (d = J.exec(e)))
            if ((r = d[1])) {
              if (9 === T) {
                if (!(c = t.getElementById(r))) return i;
                if (c.id === r) return i.push(c), i;
              } else if (
                y &&
                (c = y.getElementById(r)) &&
                b(t, c) &&
                c.id === r
              )
                return i.push(c), i;
            } else {
              if (d[2]) return j.apply(i, t.getElementsByTagName(e)), i;
              if (
                (r = d[3]) &&
                n.getElementsByClassName &&
                t.getElementsByClassName
              )
                return j.apply(i, t.getElementsByClassName(r)), i;
            }
          if (
            n.qsa &&
            !A[e + " "] &&
            (!g || !g.test(e)) &&
            (1 !== T || "object" !== t.nodeName.toLowerCase())
          ) {
            if (((v = e), (y = t), 1 === T && U.test(e))) {
              for (
                (u = t.getAttribute("id"))
                  ? (u = u.replace(ie, oe))
                  : t.setAttribute("id", (u = w)),
                  a = (h = s(e)).length;
                a--;

              )
                h[a] = "#" + u + " " + be(h[a]);
              (v = h.join(",")), (y = (ee.test(e) && ve(t.parentNode)) || t);
            }
            try {
              return j.apply(i, y.querySelectorAll(v)), i;
            } catch (t) {
              A(e, !0);
            } finally {
              u === w && t.removeAttribute("id");
            }
          }
        }
        return l(e.replace(z, "$1"), t, i, o);
      }
      function le() {
        var e = [];
        return function t(n, o) {
          return (
            e.push(n + " ") > i.cacheLength && delete t[e.shift()],
            (t[n + " "] = o)
          );
        };
      }
      function ce(e) {
        return (e[w] = !0), e;
      }
      function ue(e) {
        var t = f.createElement("fieldset");
        try {
          return !!e(t);
        } catch (e) {
          return !1;
        } finally {
          t.parentNode && t.parentNode.removeChild(t), (t = null);
        }
      }
      function de(e, t) {
        for (var n = e.split("|"), o = n.length; o--; ) i.attrHandle[n[o]] = t;
      }
      function pe(e, t) {
        var n = t && e,
          i =
            n &&
            1 === e.nodeType &&
            1 === t.nodeType &&
            e.sourceIndex - t.sourceIndex;
        if (i) return i;
        if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
        return e ? 1 : -1;
      }
      function fe(e) {
        return function (t) {
          return "input" === t.nodeName.toLowerCase() && t.type === e;
        };
      }
      function he(e) {
        return function (t) {
          var n = t.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && t.type === e;
        };
      }
      function me(e) {
        return function (t) {
          return "form" in t
            ? t.parentNode && !1 === t.disabled
              ? "label" in t
                ? "label" in t.parentNode
                  ? t.parentNode.disabled === e
                  : t.disabled === e
                : t.isDisabled === e || (t.isDisabled !== !e && se(t) === e)
              : t.disabled === e
            : "label" in t && t.disabled === e;
        };
      }
      function ge(e) {
        return ce(function (t) {
          return (
            (t = +t),
            ce(function (n, i) {
              for (var o, r = e([], n.length, t), s = r.length; s--; )
                n[(o = r[s])] && (n[o] = !(i[o] = n[o]));
            })
          );
        });
      }
      function ve(e) {
        return e && void 0 !== e.getElementsByTagName && e;
      }
      for (t in ((n = ae.support = {}),
      (r = ae.isXML =
        function (e) {
          var t = e.namespaceURI,
            n = (e.ownerDocument || e).documentElement;
          return !Z.test(t || (n && n.nodeName) || "HTML");
        }),
      (p = ae.setDocument =
        function (e) {
          var t,
            o,
            s = e ? e.ownerDocument || e : x;
          return s !== f && 9 === s.nodeType && s.documentElement
            ? ((h = (f = s).documentElement),
              (m = !r(f)),
              x !== f &&
                (o = f.defaultView) &&
                o.top !== o &&
                (o.addEventListener
                  ? o.addEventListener("unload", re, !1)
                  : o.attachEvent && o.attachEvent("onunload", re)),
              (n.attributes = ue(function (e) {
                return (e.className = "i"), !e.getAttribute("className");
              })),
              (n.getElementsByTagName = ue(function (e) {
                return (
                  e.appendChild(f.createComment("")),
                  !e.getElementsByTagName("*").length
                );
              })),
              (n.getElementsByClassName = Q.test(f.getElementsByClassName)),
              (n.getById = ue(function (e) {
                return (
                  (h.appendChild(e).id = w),
                  !f.getElementsByName || !f.getElementsByName(w).length
                );
              })),
              n.getById
                ? ((i.filter.ID = function (e) {
                    var t = e.replace(te, ne);
                    return function (e) {
                      return e.getAttribute("id") === t;
                    };
                  }),
                  (i.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && m) {
                      var n = t.getElementById(e);
                      return n ? [n] : [];
                    }
                  }))
                : ((i.filter.ID = function (e) {
                    var t = e.replace(te, ne);
                    return function (e) {
                      var n =
                        void 0 !== e.getAttributeNode &&
                        e.getAttributeNode("id");
                      return n && n.value === t;
                    };
                  }),
                  (i.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && m) {
                      var n,
                        i,
                        o,
                        r = t.getElementById(e);
                      if (r) {
                        if ((n = r.getAttributeNode("id")) && n.value === e)
                          return [r];
                        for (o = t.getElementsByName(e), i = 0; (r = o[i++]); )
                          if ((n = r.getAttributeNode("id")) && n.value === e)
                            return [r];
                      }
                      return [];
                    }
                  })),
              (i.find.TAG = n.getElementsByTagName
                ? function (e, t) {
                    return void 0 !== t.getElementsByTagName
                      ? t.getElementsByTagName(e)
                      : n.qsa
                      ? t.querySelectorAll(e)
                      : void 0;
                  }
                : function (e, t) {
                    var n,
                      i = [],
                      o = 0,
                      r = t.getElementsByTagName(e);
                    if ("*" === e) {
                      for (; (n = r[o++]); ) 1 === n.nodeType && i.push(n);
                      return i;
                    }
                    return r;
                  }),
              (i.find.CLASS =
                n.getElementsByClassName &&
                function (e, t) {
                  if (void 0 !== t.getElementsByClassName && m)
                    return t.getElementsByClassName(e);
                }),
              (v = []),
              (g = []),
              (n.qsa = Q.test(f.querySelectorAll)) &&
                (ue(function (e) {
                  (h.appendChild(e).innerHTML =
                    "<a id='" +
                    w +
                    "'></a><select id='" +
                    w +
                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                    e.querySelectorAll("[msallowcapture^='']").length &&
                      g.push("[*^$]=" + M + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length ||
                      g.push("\\[" + M + "*(?:value|" + _ + ")"),
                    e.querySelectorAll("[id~=" + w + "-]").length ||
                      g.push("~="),
                    e.querySelectorAll(":checked").length || g.push(":checked"),
                    e.querySelectorAll("a#" + w + "+*").length ||
                      g.push(".#.+[+~]");
                }),
                ue(function (e) {
                  e.innerHTML =
                    "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                  var t = f.createElement("input");
                  t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length &&
                      g.push("name" + M + "*[*^$|!~]?="),
                    2 !== e.querySelectorAll(":enabled").length &&
                      g.push(":enabled", ":disabled"),
                    (h.appendChild(e).disabled = !0),
                    2 !== e.querySelectorAll(":disabled").length &&
                      g.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    g.push(",.*:");
                })),
              (n.matchesSelector = Q.test(
                (y =
                  h.matches ||
                  h.webkitMatchesSelector ||
                  h.mozMatchesSelector ||
                  h.oMatchesSelector ||
                  h.msMatchesSelector)
              )) &&
                ue(function (e) {
                  (n.disconnectedMatch = y.call(e, "*")),
                    y.call(e, "[s!='']:x"),
                    v.push("!=", R);
                }),
              (g = g.length && new RegExp(g.join("|"))),
              (v = v.length && new RegExp(v.join("|"))),
              (t = Q.test(h.compareDocumentPosition)),
              (b =
                t || Q.test(h.contains)
                  ? function (e, t) {
                      var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                      return (
                        e === i ||
                        !(
                          !i ||
                          1 !== i.nodeType ||
                          !(n.contains
                            ? n.contains(i)
                            : e.compareDocumentPosition &&
                              16 & e.compareDocumentPosition(i))
                        )
                      );
                    }
                  : function (e, t) {
                      if (t)
                        for (; (t = t.parentNode); ) if (t === e) return !0;
                      return !1;
                    }),
              (D = t
                ? function (e, t) {
                    if (e === t) return (d = !0), 0;
                    var i =
                      !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return (
                      i ||
                      (1 &
                        (i =
                          (e.ownerDocument || e) === (t.ownerDocument || t)
                            ? e.compareDocumentPosition(t)
                            : 1) ||
                      (!n.sortDetached && t.compareDocumentPosition(e) === i)
                        ? e === f || (e.ownerDocument === x && b(x, e))
                          ? -1
                          : t === f || (t.ownerDocument === x && b(x, t))
                          ? 1
                          : u
                          ? P(u, e) - P(u, t)
                          : 0
                        : 4 & i
                        ? -1
                        : 1)
                    );
                  }
                : function (e, t) {
                    if (e === t) return (d = !0), 0;
                    var n,
                      i = 0,
                      o = e.parentNode,
                      r = t.parentNode,
                      s = [e],
                      a = [t];
                    if (!o || !r)
                      return e === f
                        ? -1
                        : t === f
                        ? 1
                        : o
                        ? -1
                        : r
                        ? 1
                        : u
                        ? P(u, e) - P(u, t)
                        : 0;
                    if (o === r) return pe(e, t);
                    for (n = e; (n = n.parentNode); ) s.unshift(n);
                    for (n = t; (n = n.parentNode); ) a.unshift(n);
                    for (; s[i] === a[i]; ) i++;
                    return i
                      ? pe(s[i], a[i])
                      : s[i] === x
                      ? -1
                      : a[i] === x
                      ? 1
                      : 0;
                  }),
              f)
            : f;
        }),
      (ae.matches = function (e, t) {
        return ae(e, null, null, t);
      }),
      (ae.matchesSelector = function (e, t) {
        if (
          ((e.ownerDocument || e) !== f && p(e),
          n.matchesSelector &&
            m &&
            !A[t + " "] &&
            (!v || !v.test(t)) &&
            (!g || !g.test(t)))
        )
          try {
            var i = y.call(e, t);
            if (
              i ||
              n.disconnectedMatch ||
              (e.document && 11 !== e.document.nodeType)
            )
              return i;
          } catch (e) {
            A(t, !0);
          }
        return ae(t, f, null, [e]).length > 0;
      }),
      (ae.contains = function (e, t) {
        return (e.ownerDocument || e) !== f && p(e), b(e, t);
      }),
      (ae.attr = function (e, t) {
        (e.ownerDocument || e) !== f && p(e);
        var o = i.attrHandle[t.toLowerCase()],
          r = o && $.call(i.attrHandle, t.toLowerCase()) ? o(e, t, !m) : void 0;
        return void 0 !== r
          ? r
          : n.attributes || !m
          ? e.getAttribute(t)
          : (r = e.getAttributeNode(t)) && r.specified
          ? r.value
          : null;
      }),
      (ae.escape = function (e) {
        return (e + "").replace(ie, oe);
      }),
      (ae.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }),
      (ae.uniqueSort = function (e) {
        var t,
          i = [],
          o = 0,
          r = 0;
        if (
          ((d = !n.detectDuplicates),
          (u = !n.sortStable && e.slice(0)),
          e.sort(D),
          d)
        ) {
          for (; (t = e[r++]); ) t === e[r] && (o = i.push(r));
          for (; o--; ) e.splice(i[o], 1);
        }
        return (u = null), e;
      }),
      (o = ae.getText =
        function (e) {
          var t,
            n = "",
            i = 0,
            r = e.nodeType;
          if (r) {
            if (1 === r || 9 === r || 11 === r) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
            } else if (3 === r || 4 === r) return e.nodeValue;
          } else for (; (t = e[i++]); ) n += o(t);
          return n;
        }),
      ((i = ae.selectors =
        {
          cacheLength: 50,
          createPseudo: ce,
          match: Y,
          attrHandle: {},
          find: {},
          relative: {
            ">": {
              dir: "parentNode",
              first: !0,
            },
            " ": {
              dir: "parentNode",
            },
            "+": {
              dir: "previousSibling",
              first: !0,
            },
            "~": {
              dir: "previousSibling",
            },
          },
          preFilter: {
            ATTR: function (e) {
              return (
                (e[1] = e[1].replace(te, ne)),
                (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                e.slice(0, 4)
              );
            },
            CHILD: function (e) {
              return (
                (e[1] = e[1].toLowerCase()),
                "nth" === e[1].slice(0, 3)
                  ? (e[3] || ae.error(e[0]),
                    (e[4] = +(e[4]
                      ? e[5] + (e[6] || 1)
                      : 2 * ("even" === e[3] || "odd" === e[3]))),
                    (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                  : e[3] && ae.error(e[0]),
                e
              );
            },
            PSEUDO: function (e) {
              var t,
                n = !e[6] && e[2];
              return Y.CHILD.test(e[0])
                ? null
                : (e[3]
                    ? (e[2] = e[4] || e[5] || "")
                    : n &&
                      X.test(n) &&
                      (t = s(n, !0)) &&
                      (t = n.indexOf(")", n.length - t) - n.length) &&
                      ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                  e.slice(0, 3));
            },
          },
          filter: {
            TAG: function (e) {
              var t = e.replace(te, ne).toLowerCase();
              return "*" === e
                ? function () {
                    return !0;
                  }
                : function (e) {
                    return e.nodeName && e.nodeName.toLowerCase() === t;
                  };
            },
            CLASS: function (e) {
              var t = C[e + " "];
              return (
                t ||
                ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                  C(e, function (e) {
                    return t.test(
                      ("string" == typeof e.className && e.className) ||
                        (void 0 !== e.getAttribute &&
                          e.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (e, t, n) {
              return function (i) {
                var o = ae.attr(i, e);
                return null == o
                  ? "!=" === t
                  : !t ||
                      ((o += ""),
                      "=" === t
                        ? o === n
                        : "!=" === t
                        ? o !== n
                        : "^=" === t
                        ? n && 0 === o.indexOf(n)
                        : "*=" === t
                        ? n && o.indexOf(n) > -1
                        : "$=" === t
                        ? n && o.slice(-n.length) === n
                        : "~=" === t
                        ? (" " + o.replace(F, " ") + " ").indexOf(n) > -1
                        : "|=" === t &&
                          (o === n || o.slice(0, n.length + 1) === n + "-"));
              };
            },
            CHILD: function (e, t, n, i, o) {
              var r = "nth" !== e.slice(0, 3),
                s = "last" !== e.slice(-4),
                a = "of-type" === t;
              return 1 === i && 0 === o
                ? function (e) {
                    return !!e.parentNode;
                  }
                : function (t, n, l) {
                    var c,
                      u,
                      d,
                      p,
                      f,
                      h,
                      m = r !== s ? "nextSibling" : "previousSibling",
                      g = t.parentNode,
                      v = a && t.nodeName.toLowerCase(),
                      y = !l && !a,
                      b = !1;
                    if (g) {
                      if (r) {
                        for (; m; ) {
                          for (p = t; (p = p[m]); )
                            if (
                              a
                                ? p.nodeName.toLowerCase() === v
                                : 1 === p.nodeType
                            )
                              return !1;
                          h = m = "only" === e && !h && "nextSibling";
                        }
                        return !0;
                      }
                      if (((h = [s ? g.firstChild : g.lastChild]), s && y)) {
                        for (
                          b =
                            (f =
                              (c =
                                (u =
                                  (d = (p = g)[w] || (p[w] = {}))[p.uniqueID] ||
                                  (d[p.uniqueID] = {}))[e] || [])[0] === T &&
                              c[1]) && c[2],
                            p = f && g.childNodes[f];
                          (p = (++f && p && p[m]) || (b = f = 0) || h.pop());

                        )
                          if (1 === p.nodeType && ++b && p === t) {
                            u[e] = [T, f, b];
                            break;
                          }
                      } else if (
                        (y &&
                          (b = f =
                            (c =
                              (u =
                                (d = (p = t)[w] || (p[w] = {}))[p.uniqueID] ||
                                (d[p.uniqueID] = {}))[e] || [])[0] === T &&
                            c[1]),
                        !1 === b)
                      )
                        for (
                          ;
                          (p = (++f && p && p[m]) || (b = f = 0) || h.pop()) &&
                          ((a
                            ? p.nodeName.toLowerCase() !== v
                            : 1 !== p.nodeType) ||
                            !++b ||
                            (y &&
                              ((u =
                                (d = p[w] || (p[w] = {}))[p.uniqueID] ||
                                (d[p.uniqueID] = {}))[e] = [T, b]),
                            p !== t));

                        );
                      return (b -= o) === i || (b % i == 0 && b / i >= 0);
                    }
                  };
            },
            PSEUDO: function (e, t) {
              var n,
                o =
                  i.pseudos[e] ||
                  i.setFilters[e.toLowerCase()] ||
                  ae.error("unsupported pseudo: " + e);
              return o[w]
                ? o(t)
                : o.length > 1
                ? ((n = [e, e, "", t]),
                  i.setFilters.hasOwnProperty(e.toLowerCase())
                    ? ce(function (e, n) {
                        for (var i, r = o(e, t), s = r.length; s--; )
                          e[(i = P(e, r[s]))] = !(n[i] = r[s]);
                      })
                    : function (e) {
                        return o(e, 0, n);
                      })
                : o;
            },
          },
          pseudos: {
            not: ce(function (e) {
              var t = [],
                n = [],
                i = a(e.replace(z, "$1"));
              return i[w]
                ? ce(function (e, t, n, o) {
                    for (var r, s = i(e, null, o, []), a = e.length; a--; )
                      (r = s[a]) && (e[a] = !(t[a] = r));
                  })
                : function (e, o, r) {
                    return (
                      (t[0] = e), i(t, null, r, n), (t[0] = null), !n.pop()
                    );
                  };
            }),
            has: ce(function (e) {
              return function (t) {
                return ae(e, t).length > 0;
              };
            }),
            contains: ce(function (e) {
              return (
                (e = e.replace(te, ne)),
                function (t) {
                  return (t.textContent || o(t)).indexOf(e) > -1;
                }
              );
            }),
            lang: ce(function (e) {
              return (
                V.test(e || "") || ae.error("unsupported lang: " + e),
                (e = e.replace(te, ne).toLowerCase()),
                function (t) {
                  var n;
                  do {
                    if (
                      (n = m
                        ? t.lang
                        : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                    )
                      return (
                        (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                      );
                  } while ((t = t.parentNode) && 1 === t.nodeType);
                  return !1;
                }
              );
            }),
            target: function (t) {
              var n = e.location && e.location.hash;
              return n && n.slice(1) === t.id;
            },
            root: function (e) {
              return e === h;
            },
            focus: function (e) {
              return (
                e === f.activeElement &&
                (!f.hasFocus || f.hasFocus()) &&
                !!(e.type || e.href || ~e.tabIndex)
              );
            },
            enabled: me(!1),
            disabled: me(!0),
            checked: function (e) {
              var t = e.nodeName.toLowerCase();
              return (
                ("input" === t && !!e.checked) ||
                ("option" === t && !!e.selected)
              );
            },
            selected: function (e) {
              return (
                e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
              );
            },
            empty: function (e) {
              for (e = e.firstChild; e; e = e.nextSibling)
                if (e.nodeType < 6) return !1;
              return !0;
            },
            parent: function (e) {
              return !i.pseudos.empty(e);
            },
            header: function (e) {
              return G.test(e.nodeName);
            },
            input: function (e) {
              return K.test(e.nodeName);
            },
            button: function (e) {
              var t = e.nodeName.toLowerCase();
              return ("input" === t && "button" === e.type) || "button" === t;
            },
            text: function (e) {
              var t;
              return (
                "input" === e.nodeName.toLowerCase() &&
                "text" === e.type &&
                (null == (t = e.getAttribute("type")) ||
                  "text" === t.toLowerCase())
              );
            },
            first: ge(function () {
              return [0];
            }),
            last: ge(function (e, t) {
              return [t - 1];
            }),
            eq: ge(function (e, t, n) {
              return [n < 0 ? n + t : n];
            }),
            even: ge(function (e, t) {
              for (var n = 0; n < t; n += 2) e.push(n);
              return e;
            }),
            odd: ge(function (e, t) {
              for (var n = 1; n < t; n += 2) e.push(n);
              return e;
            }),
            lt: ge(function (e, t, n) {
              for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0; ) e.push(i);
              return e;
            }),
            gt: ge(function (e, t, n) {
              for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
              return e;
            }),
          },
        }).pseudos.nth = i.pseudos.eq),
      {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0,
      }))
        i.pseudos[t] = fe(t);
      for (t in {
        submit: !0,
        reset: !0,
      })
        i.pseudos[t] = he(t);
      function ye() {}
      function be(e) {
        for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
        return i;
      }
      function we(e, t, n) {
        var i = t.dir,
          o = t.next,
          r = o || i,
          s = n && "parentNode" === r,
          a = k++;
        return t.first
          ? function (t, n, o) {
              for (; (t = t[i]); ) if (1 === t.nodeType || s) return e(t, n, o);
              return !1;
            }
          : function (t, n, l) {
              var c,
                u,
                d,
                p = [T, a];
              if (l) {
                for (; (t = t[i]); )
                  if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
              } else
                for (; (t = t[i]); )
                  if (1 === t.nodeType || s)
                    if (
                      ((u =
                        (d = t[w] || (t[w] = {}))[t.uniqueID] ||
                        (d[t.uniqueID] = {})),
                      o && o === t.nodeName.toLowerCase())
                    )
                      t = t[i] || t;
                    else {
                      if ((c = u[r]) && c[0] === T && c[1] === a)
                        return (p[2] = c[2]);
                      if (((u[r] = p), (p[2] = e(t, n, l)))) return !0;
                    }
              return !1;
            };
      }
      function xe(e) {
        return e.length > 1
          ? function (t, n, i) {
              for (var o = e.length; o--; ) if (!e[o](t, n, i)) return !1;
              return !0;
            }
          : e[0];
      }
      function Te(e, t, n, i, o) {
        for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++)
          (r = e[a]) && ((n && !n(r, i, o)) || (s.push(r), c && t.push(a)));
        return s;
      }
      function ke(e, t, n, i, o, r) {
        return (
          i && !i[w] && (i = ke(i)),
          o && !o[w] && (o = ke(o, r)),
          ce(function (r, s, a, l) {
            var c,
              u,
              d,
              p = [],
              f = [],
              h = s.length,
              m =
                r ||
                (function (e, t, n) {
                  for (var i = 0, o = t.length; i < o; i++) ae(e, t[i], n);
                  return n;
                })(t || "*", a.nodeType ? [a] : a, []),
              g = !e || (!r && t) ? m : Te(m, p, e, a, l),
              v = n ? (o || (r ? e : h || i) ? [] : s) : g;
            if ((n && n(g, v, a, l), i))
              for (c = Te(v, f), i(c, [], a, l), u = c.length; u--; )
                (d = c[u]) && (v[f[u]] = !(g[f[u]] = d));
            if (r) {
              if (o || e) {
                if (o) {
                  for (c = [], u = v.length; u--; )
                    (d = v[u]) && c.push((g[u] = d));
                  o(null, (v = []), c, l);
                }
                for (u = v.length; u--; )
                  (d = v[u]) &&
                    (c = o ? P(r, d) : p[u]) > -1 &&
                    (r[c] = !(s[c] = d));
              }
            } else (v = Te(v === s ? v.splice(h, v.length) : v)), o ? o(null, s, v, l) : j.apply(s, v);
          })
        );
      }
      function Ce(e) {
        for (
          var t,
            n,
            o,
            r = e.length,
            s = i.relative[e[0].type],
            a = s || i.relative[" "],
            l = s ? 1 : 0,
            u = we(
              function (e) {
                return e === t;
              },
              a,
              !0
            ),
            d = we(
              function (e) {
                return P(t, e) > -1;
              },
              a,
              !0
            ),
            p = [
              function (e, n, i) {
                var o =
                  (!s && (i || n !== c)) ||
                  ((t = n).nodeType ? u(e, n, i) : d(e, n, i));
                return (t = null), o;
              },
            ];
          l < r;
          l++
        )
          if ((n = i.relative[e[l].type])) p = [we(xe(p), n)];
          else {
            if ((n = i.filter[e[l].type].apply(null, e[l].matches))[w]) {
              for (o = ++l; o < r && !i.relative[e[o].type]; o++);
              return ke(
                l > 1 && xe(p),
                l > 1 &&
                  be(
                    e.slice(0, l - 1).concat({
                      value: " " === e[l - 2].type ? "*" : "",
                    })
                  ).replace(z, "$1"),
                n,
                l < o && Ce(e.slice(l, o)),
                o < r && Ce((e = e.slice(o))),
                o < r && be(e)
              );
            }
            p.push(n);
          }
        return xe(p);
      }
      return (
        (ye.prototype = i.filters = i.pseudos),
        (i.setFilters = new ye()),
        (s = ae.tokenize =
          function (e, t) {
            var n,
              o,
              r,
              s,
              a,
              l,
              c,
              u = S[e + " "];
            if (u) return t ? 0 : u.slice(0);
            for (a = e, l = [], c = i.preFilter; a; ) {
              for (s in ((n && !(o = W.exec(a))) ||
                (o && (a = a.slice(o[0].length) || a), l.push((r = []))),
              (n = !1),
              (o = B.exec(a)) &&
                ((n = o.shift()),
                r.push({
                  value: n,
                  type: o[0].replace(z, " "),
                }),
                (a = a.slice(n.length))),
              i.filter))
                !(o = Y[s].exec(a)) ||
                  (c[s] && !(o = c[s](o))) ||
                  ((n = o.shift()),
                  r.push({
                    value: n,
                    type: s,
                    matches: o,
                  }),
                  (a = a.slice(n.length)));
              if (!n) break;
            }
            return t ? a.length : a ? ae.error(e) : S(e, l).slice(0);
          }),
        (a = ae.compile =
          function (e, t) {
            var n,
              o = [],
              r = [],
              a = E[e + " "];
            if (!a) {
              for (t || (t = s(e)), n = t.length; n--; )
                (a = Ce(t[n]))[w] ? o.push(a) : r.push(a);
              (a = E(
                e,
                (function (e, t) {
                  var n = t.length > 0,
                    o = e.length > 0,
                    r = function (r, s, a, l, u) {
                      var d,
                        h,
                        g,
                        v = 0,
                        y = "0",
                        b = r && [],
                        w = [],
                        x = c,
                        k = r || (o && i.find.TAG("*", u)),
                        C = (T += null == x ? 1 : Math.random() || 0.1),
                        S = k.length;
                      for (
                        u && (c = s === f || s || u);
                        y !== S && null != (d = k[y]);
                        y++
                      ) {
                        if (o && d) {
                          for (
                            h = 0,
                              s || d.ownerDocument === f || (p(d), (a = !m));
                            (g = e[h++]);

                          )
                            if (g(d, s || f, a)) {
                              l.push(d);
                              break;
                            }
                          u && (T = C);
                        }
                        n && ((d = !g && d) && v--, r && b.push(d));
                      }
                      if (((v += y), n && y !== v)) {
                        for (h = 0; (g = t[h++]); ) g(b, w, s, a);
                        if (r) {
                          if (v > 0)
                            for (; y--; ) b[y] || w[y] || (w[y] = O.call(l));
                          w = Te(w);
                        }
                        j.apply(l, w),
                          u &&
                            !r &&
                            w.length > 0 &&
                            v + t.length > 1 &&
                            ae.uniqueSort(l);
                      }
                      return u && ((T = C), (c = x)), b;
                    };
                  return n ? ce(r) : r;
                })(r, o)
              )).selector = e;
            }
            return a;
          }),
        (l = ae.select =
          function (e, t, n, o) {
            var r,
              l,
              c,
              u,
              d,
              p = "function" == typeof e && e,
              f = !o && s((e = p.selector || e));
            if (((n = n || []), 1 === f.length)) {
              if (
                (l = f[0] = f[0].slice(0)).length > 2 &&
                "ID" === (c = l[0]).type &&
                9 === t.nodeType &&
                m &&
                i.relative[l[1].type]
              ) {
                if (
                  !(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0])
                )
                  return n;
                p && (t = t.parentNode), (e = e.slice(l.shift().value.length));
              }
              for (
                r = Y.needsContext.test(e) ? 0 : l.length;
                r-- && ((c = l[r]), !i.relative[(u = c.type)]);

              )
                if (
                  (d = i.find[u]) &&
                  (o = d(
                    c.matches[0].replace(te, ne),
                    (ee.test(l[0].type) && ve(t.parentNode)) || t
                  ))
                ) {
                  if ((l.splice(r, 1), !(e = o.length && be(l))))
                    return j.apply(n, o), n;
                  break;
                }
            }
            return (
              (p || a(e, f))(
                o,
                t,
                !m,
                n,
                !t || (ee.test(e) && ve(t.parentNode)) || t
              ),
              n
            );
          }),
        (n.sortStable = w.split("").sort(D).join("") === w),
        (n.detectDuplicates = !!d),
        p(),
        (n.sortDetached = ue(function (e) {
          return 1 & e.compareDocumentPosition(f.createElement("fieldset"));
        })),
        ue(function (e) {
          return (
            (e.innerHTML = "<a href='#'></a>"),
            "#" === e.firstChild.getAttribute("href")
          );
        }) ||
          de("type|href|height|width", function (e, t, n) {
            if (!n)
              return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
          }),
        (n.attributes &&
          ue(function (e) {
            return (
              (e.innerHTML = "<input/>"),
              e.firstChild.setAttribute("value", ""),
              "" === e.firstChild.getAttribute("value")
            );
          })) ||
          de("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
              return e.defaultValue;
          }),
        ue(function (e) {
          return null == e.getAttribute("disabled");
        }) ||
          de(_, function (e, t, n) {
            var i;
            if (!n)
              return !0 === e[t]
                ? t.toLowerCase()
                : (i = e.getAttributeNode(t)) && i.specified
                ? i.value
                : null;
          }),
        ae
      );
    })(e);
    (w.find = k),
      (w.expr = k.selectors),
      (w.expr[":"] = w.expr.pseudos),
      (w.uniqueSort = w.unique = k.uniqueSort),
      (w.text = k.getText),
      (w.isXMLDoc = k.isXML),
      (w.contains = k.contains),
      (w.escapeSelector = k.escape);
    var C = function (e, t, n) {
        for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
          if (1 === e.nodeType) {
            if (o && w(e).is(n)) break;
            i.push(e);
          }
        return i;
      },
      S = function (e, t) {
        for (var n = []; e; e = e.nextSibling)
          1 === e.nodeType && e !== t && n.push(e);
        return n;
      },
      E = w.expr.match.needsContext;
    function A(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function $(e, t, n) {
      return m(t)
        ? w.grep(e, function (e, i) {
            return !!t.call(e, i, e) !== n;
          })
        : t.nodeType
        ? w.grep(e, function (e) {
            return (e === t) !== n;
          })
        : "string" != typeof t
        ? w.grep(e, function (e) {
            return l.call(t, e) > -1 !== n;
          })
        : w.filter(t, e, n);
    }
    (w.filter = function (e, t, n) {
      var i = t[0];
      return (
        n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === i.nodeType
          ? w.find.matchesSelector(i, e)
            ? [i]
            : []
          : w.find.matches(
              e,
              w.grep(t, function (e) {
                return 1 === e.nodeType;
              })
            )
      );
    }),
      w.fn.extend({
        find: function (e) {
          var t,
            n,
            i = this.length,
            o = this;
          if ("string" != typeof e)
            return this.pushStack(
              w(e).filter(function () {
                for (t = 0; t < i; t++) if (w.contains(o[t], this)) return !0;
              })
            );
          for (n = this.pushStack([]), t = 0; t < i; t++) w.find(e, o[t], n);
          return i > 1 ? w.uniqueSort(n) : n;
        },
        filter: function (e) {
          return this.pushStack($(this, e || [], !1));
        },
        not: function (e) {
          return this.pushStack($(this, e || [], !0));
        },
        is: function (e) {
          return !!$(
            this,
            "string" == typeof e && E.test(e) ? w(e) : e || [],
            !1
          ).length;
        },
      });
    var I,
      O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((w.fn.init = function (e, t, n) {
      var o, r;
      if (!e) return this;
      if (((n = n || I), "string" == typeof e)) {
        if (
          !(o =
            "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
              ? [null, e, null]
              : O.exec(e)) ||
          (!o[1] && t)
        )
          return !t || t.jquery
            ? (t || n).find(e)
            : this.constructor(t).find(e);
        if (o[1]) {
          if (
            ((t = t instanceof w ? t[0] : t),
            w.merge(
              this,
              w.parseHTML(o[1], t && t.nodeType ? t.ownerDocument || t : i, !0)
            ),
            D.test(o[1]) && w.isPlainObject(t))
          )
            for (o in t) m(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
          return this;
        }
        return (
          (r = i.getElementById(o[2])) && ((this[0] = r), (this.length = 1)),
          this
        );
      }
      return e.nodeType
        ? ((this[0] = e), (this.length = 1), this)
        : m(e)
        ? void 0 !== n.ready
          ? n.ready(e)
          : e(w)
        : w.makeArray(e, this);
    }).prototype = w.fn),
      (I = w(i));
    var L = /^(?:parents|prev(?:Until|All))/,
      j = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0,
      };
    function N(e, t) {
      for (; (e = e[t]) && 1 !== e.nodeType; );
      return e;
    }
    w.fn.extend({
      has: function (e) {
        var t = w(e, this),
          n = t.length;
        return this.filter(function () {
          for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0;
        });
      },
      closest: function (e, t) {
        var n,
          i = 0,
          o = this.length,
          r = [],
          s = "string" != typeof e && w(e);
        if (!E.test(e))
          for (; i < o; i++)
            for (n = this[i]; n && n !== t; n = n.parentNode)
              if (
                n.nodeType < 11 &&
                (s
                  ? s.index(n) > -1
                  : 1 === n.nodeType && w.find.matchesSelector(n, e))
              ) {
                r.push(n);
                break;
              }
        return this.pushStack(r.length > 1 ? w.uniqueSort(r) : r);
      },
      index: function (e) {
        return e
          ? "string" == typeof e
            ? l.call(w(e), this[0])
            : l.call(this, e.jquery ? e[0] : e)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (e, t) {
        return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
      },
      addBack: function (e) {
        return this.add(
          null == e ? this.prevObject : this.prevObject.filter(e)
        );
      },
    }),
      w.each(
        {
          parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
          },
          parents: function (e) {
            return C(e, "parentNode");
          },
          parentsUntil: function (e, t, n) {
            return C(e, "parentNode", n);
          },
          next: function (e) {
            return N(e, "nextSibling");
          },
          prev: function (e) {
            return N(e, "previousSibling");
          },
          nextAll: function (e) {
            return C(e, "nextSibling");
          },
          prevAll: function (e) {
            return C(e, "previousSibling");
          },
          nextUntil: function (e, t, n) {
            return C(e, "nextSibling", n);
          },
          prevUntil: function (e, t, n) {
            return C(e, "previousSibling", n);
          },
          siblings: function (e) {
            return S((e.parentNode || {}).firstChild, e);
          },
          children: function (e) {
            return S(e.firstChild);
          },
          contents: function (e) {
            return void 0 !== e.contentDocument
              ? e.contentDocument
              : (A(e, "template") && (e = e.content || e),
                w.merge([], e.childNodes));
          },
        },
        function (e, t) {
          w.fn[e] = function (n, i) {
            var o = w.map(this, t, n);
            return (
              "Until" !== e.slice(-5) && (i = n),
              i && "string" == typeof i && (o = w.filter(i, o)),
              this.length > 1 &&
                (j[e] || w.uniqueSort(o), L.test(e) && o.reverse()),
              this.pushStack(o)
            );
          };
        }
      );
    var P = /[^\x20\t\r\n\f]+/g;
    function _(e) {
      return e;
    }
    function M(e) {
      throw e;
    }
    function H(e, t, n, i) {
      var o;
      try {
        e && m((o = e.promise))
          ? o.call(e).done(t).fail(n)
          : e && m((o = e.then))
          ? o.call(e, t, n)
          : t.apply(void 0, [e].slice(i));
      } catch (e) {
        n.apply(void 0, [e]);
      }
    }
    (w.Callbacks = function (e) {
      e =
        "string" == typeof e
          ? (function (e) {
              var t = {};
              return (
                w.each(e.match(P) || [], function (e, n) {
                  t[n] = !0;
                }),
                t
              );
            })(e)
          : w.extend({}, e);
      var t,
        n,
        i,
        o,
        r = [],
        s = [],
        a = -1,
        l = function () {
          for (o = o || e.once, i = t = !0; s.length; a = -1)
            for (n = s.shift(); ++a < r.length; )
              !1 === r[a].apply(n[0], n[1]) &&
                e.stopOnFalse &&
                ((a = r.length), (n = !1));
          e.memory || (n = !1), (t = !1), o && (r = n ? [] : "");
        },
        c = {
          add: function () {
            return (
              r &&
                (n && !t && ((a = r.length - 1), s.push(n)),
                (function t(n) {
                  w.each(n, function (n, i) {
                    m(i)
                      ? (e.unique && c.has(i)) || r.push(i)
                      : i && i.length && "string" !== b(i) && t(i);
                  });
                })(arguments),
                n && !t && l()),
              this
            );
          },
          remove: function () {
            return (
              w.each(arguments, function (e, t) {
                for (var n; (n = w.inArray(t, r, n)) > -1; )
                  r.splice(n, 1), n <= a && a--;
              }),
              this
            );
          },
          has: function (e) {
            return e ? w.inArray(e, r) > -1 : r.length > 0;
          },
          empty: function () {
            return r && (r = []), this;
          },
          disable: function () {
            return (o = s = []), (r = n = ""), this;
          },
          disabled: function () {
            return !r;
          },
          lock: function () {
            return (o = s = []), n || t || (r = n = ""), this;
          },
          locked: function () {
            return !!o;
          },
          fireWith: function (e, n) {
            return (
              o ||
                ((n = [e, (n = n || []).slice ? n.slice() : n]),
                s.push(n),
                t || l()),
              this
            );
          },
          fire: function () {
            return c.fireWith(this, arguments), this;
          },
          fired: function () {
            return !!i;
          },
        };
      return c;
    }),
      w.extend({
        Deferred: function (t) {
          var n = [
              [
                "notify",
                "progress",
                w.Callbacks("memory"),
                w.Callbacks("memory"),
                2,
              ],
              [
                "resolve",
                "done",
                w.Callbacks("once memory"),
                w.Callbacks("once memory"),
                0,
                "resolved",
              ],
              [
                "reject",
                "fail",
                w.Callbacks("once memory"),
                w.Callbacks("once memory"),
                1,
                "rejected",
              ],
            ],
            i = "pending",
            o = {
              state: function () {
                return i;
              },
              always: function () {
                return r.done(arguments).fail(arguments), this;
              },
              catch: function (e) {
                return o.then(null, e);
              },
              pipe: function () {
                var e = arguments;
                return w
                  .Deferred(function (t) {
                    w.each(n, function (n, i) {
                      var o = m(e[i[4]]) && e[i[4]];
                      r[i[1]](function () {
                        var e = o && o.apply(this, arguments);
                        e && m(e.promise)
                          ? e
                              .promise()
                              .progress(t.notify)
                              .done(t.resolve)
                              .fail(t.reject)
                          : t[i[0] + "With"](this, o ? [e] : arguments);
                      });
                    }),
                      (e = null);
                  })
                  .promise();
              },
              then: function (t, i, o) {
                var r = 0;
                function s(t, n, i, o) {
                  return function () {
                    var a = this,
                      l = arguments,
                      c = function () {
                        var e, c;
                        if (!(t < r)) {
                          if ((e = i.apply(a, l)) === n.promise())
                            throw new TypeError("Thenable self-resolution");
                          (c =
                            e &&
                            ("object" == typeof e || "function" == typeof e) &&
                            e.then),
                            m(c)
                              ? o
                                ? c.call(e, s(r, n, _, o), s(r, n, M, o))
                                : (r++,
                                  c.call(
                                    e,
                                    s(r, n, _, o),
                                    s(r, n, M, o),
                                    s(r, n, _, n.notifyWith)
                                  ))
                              : (i !== _ && ((a = void 0), (l = [e])),
                                (o || n.resolveWith)(a, l));
                        }
                      },
                      u = o
                        ? c
                        : function () {
                            try {
                              c();
                            } catch (e) {
                              w.Deferred.exceptionHook &&
                                w.Deferred.exceptionHook(e, u.stackTrace),
                                t + 1 >= r &&
                                  (i !== M && ((a = void 0), (l = [e])),
                                  n.rejectWith(a, l));
                            }
                          };
                    t
                      ? u()
                      : (w.Deferred.getStackHook &&
                          (u.stackTrace = w.Deferred.getStackHook()),
                        e.setTimeout(u));
                  };
                }
                return w
                  .Deferred(function (e) {
                    n[0][3].add(s(0, e, m(o) ? o : _, e.notifyWith)),
                      n[1][3].add(s(0, e, m(t) ? t : _)),
                      n[2][3].add(s(0, e, m(i) ? i : M));
                  })
                  .promise();
              },
              promise: function (e) {
                return null != e ? w.extend(e, o) : o;
              },
            },
            r = {};
          return (
            w.each(n, function (e, t) {
              var s = t[2],
                a = t[5];
              (o[t[1]] = s.add),
                a &&
                  s.add(
                    function () {
                      i = a;
                    },
                    n[3 - e][2].disable,
                    n[3 - e][3].disable,
                    n[0][2].lock,
                    n[0][3].lock
                  ),
                s.add(t[3].fire),
                (r[t[0]] = function () {
                  return (
                    r[t[0] + "With"](this === r ? void 0 : this, arguments),
                    this
                  );
                }),
                (r[t[0] + "With"] = s.fireWith);
            }),
            o.promise(r),
            t && t.call(r, r),
            r
          );
        },
        when: function (e) {
          var t = arguments.length,
            n = t,
            i = Array(n),
            o = r.call(arguments),
            s = w.Deferred(),
            a = function (e) {
              return function (n) {
                (i[e] = this),
                  (o[e] = arguments.length > 1 ? r.call(arguments) : n),
                  --t || s.resolveWith(i, o);
              };
            };
          if (
            t <= 1 &&
            (H(e, s.done(a(n)).resolve, s.reject, !t),
            "pending" === s.state() || m(o[n] && o[n].then))
          )
            return s.then();
          for (; n--; ) H(o[n], a(n), s.reject);
          return s.promise();
        },
      });
    var q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (w.Deferred.exceptionHook = function (t, n) {
      e.console &&
        e.console.warn &&
        t &&
        q.test(t.name) &&
        e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
    }),
      (w.readyException = function (t) {
        e.setTimeout(function () {
          throw t;
        });
      });
    var R = w.Deferred();
    function F() {
      i.removeEventListener("DOMContentLoaded", F),
        e.removeEventListener("load", F),
        w.ready();
    }
    (w.fn.ready = function (e) {
      return (
        R.then(e).catch(function (e) {
          w.readyException(e);
        }),
        this
      );
    }),
      w.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {
          (!0 === e ? --w.readyWait : w.isReady) ||
            ((w.isReady = !0),
            (!0 !== e && --w.readyWait > 0) || R.resolveWith(i, [w]));
        },
      }),
      (w.ready.then = R.then),
      "complete" === i.readyState ||
      ("loading" !== i.readyState && !i.documentElement.doScroll)
        ? e.setTimeout(w.ready)
        : (i.addEventListener("DOMContentLoaded", F),
          e.addEventListener("load", F));
    var z = function (e, t, n, i, o, r, s) {
        var a = 0,
          l = e.length,
          c = null == n;
        if ("object" === b(n))
          for (a in ((o = !0), n)) z(e, t, a, n[a], !0, r, s);
        else if (
          void 0 !== i &&
          ((o = !0),
          m(i) || (s = !0),
          c &&
            (s
              ? (t.call(e, i), (t = null))
              : ((c = t),
                (t = function (e, t, n) {
                  return c.call(w(e), n);
                }))),
          t)
        )
          for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
        return o ? e : c ? t.call(e) : l ? t(e[0], n) : r;
      },
      W = /^-ms-/,
      B = /-([a-z])/g;
    function U(e, t) {
      return t.toUpperCase();
    }
    function X(e) {
      return e.replace(W, "ms-").replace(B, U);
    }
    var V = function (e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
    function Y() {
      this.expando = w.expando + Y.uid++;
    }
    (Y.uid = 1),
      (Y.prototype = {
        cache: function (e) {
          var t = e[this.expando];
          return (
            t ||
              ((t = {}),
              V(e) &&
                (e.nodeType
                  ? (e[this.expando] = t)
                  : Object.defineProperty(e, this.expando, {
                      value: t,
                      configurable: !0,
                    }))),
            t
          );
        },
        set: function (e, t, n) {
          var i,
            o = this.cache(e);
          if ("string" == typeof t) o[X(t)] = n;
          else for (i in t) o[X(i)] = t[i];
          return o;
        },
        get: function (e, t) {
          return void 0 === t
            ? this.cache(e)
            : e[this.expando] && e[this.expando][X(t)];
        },
        access: function (e, t, n) {
          return void 0 === t || (t && "string" == typeof t && void 0 === n)
            ? this.get(e, t)
            : (this.set(e, t, n), void 0 !== n ? n : t);
        },
        remove: function (e, t) {
          var n,
            i = e[this.expando];
          if (void 0 !== i) {
            if (void 0 !== t) {
              n = (t = Array.isArray(t)
                ? t.map(X)
                : (t = X(t)) in i
                ? [t]
                : t.match(P) || []).length;
              for (; n--; ) delete i[t[n]];
            }
            (void 0 === t || w.isEmptyObject(i)) &&
              (e.nodeType
                ? (e[this.expando] = void 0)
                : delete e[this.expando]);
          }
        },
        hasData: function (e) {
          var t = e[this.expando];
          return void 0 !== t && !w.isEmptyObject(t);
        },
      });
    var Z = new Y(),
      K = new Y(),
      G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Q = /[A-Z]/g;
    function J(e, t, n) {
      var i;
      if (void 0 === n && 1 === e.nodeType)
        if (
          ((i = "data-" + t.replace(Q, "-$&").toLowerCase()),
          "string" == typeof (n = e.getAttribute(i)))
        ) {
          try {
            n = (function (e) {
              return (
                "true" === e ||
                ("false" !== e &&
                  ("null" === e
                    ? null
                    : e === +e + ""
                    ? +e
                    : G.test(e)
                    ? JSON.parse(e)
                    : e))
              );
            })(n);
          } catch (e) {}
          K.set(e, t, n);
        } else n = void 0;
      return n;
    }
    w.extend({
      hasData: function (e) {
        return K.hasData(e) || Z.hasData(e);
      },
      data: function (e, t, n) {
        return K.access(e, t, n);
      },
      removeData: function (e, t) {
        K.remove(e, t);
      },
      _data: function (e, t, n) {
        return Z.access(e, t, n);
      },
      _removeData: function (e, t) {
        Z.remove(e, t);
      },
    }),
      w.fn.extend({
        data: function (e, t) {
          var n,
            i,
            o,
            r = this[0],
            s = r && r.attributes;
          if (void 0 === e) {
            if (
              this.length &&
              ((o = K.get(r)), 1 === r.nodeType && !Z.get(r, "hasDataAttrs"))
            ) {
              for (n = s.length; n--; )
                s[n] &&
                  0 === (i = s[n].name).indexOf("data-") &&
                  ((i = X(i.slice(5))), J(r, i, o[i]));
              Z.set(r, "hasDataAttrs", !0);
            }
            return o;
          }
          return "object" == typeof e
            ? this.each(function () {
                K.set(this, e);
              })
            : z(
                this,
                function (t) {
                  var n;
                  if (r && void 0 === t)
                    return void 0 !== (n = K.get(r, e))
                      ? n
                      : void 0 !== (n = J(r, e))
                      ? n
                      : void 0;
                  this.each(function () {
                    K.set(this, e, t);
                  });
                },
                null,
                t,
                arguments.length > 1,
                null,
                !0
              );
        },
        removeData: function (e) {
          return this.each(function () {
            K.remove(this, e);
          });
        },
      }),
      w.extend({
        queue: function (e, t, n) {
          var i;
          if (e)
            return (
              (t = (t || "fx") + "queue"),
              (i = Z.get(e, t)),
              n &&
                (!i || Array.isArray(n)
                  ? (i = Z.access(e, t, w.makeArray(n)))
                  : i.push(n)),
              i || []
            );
        },
        dequeue: function (e, t) {
          t = t || "fx";
          var n = w.queue(e, t),
            i = n.length,
            o = n.shift(),
            r = w._queueHooks(e, t);
          "inprogress" === o && ((o = n.shift()), i--),
            o &&
              ("fx" === t && n.unshift("inprogress"),
              delete r.stop,
              o.call(
                e,
                function () {
                  w.dequeue(e, t);
                },
                r
              )),
            !i && r && r.empty.fire();
        },
        _queueHooks: function (e, t) {
          var n = t + "queueHooks";
          return (
            Z.get(e, n) ||
            Z.access(e, n, {
              empty: w.Callbacks("once memory").add(function () {
                Z.remove(e, [t + "queue", n]);
              }),
            })
          );
        },
      }),
      w.fn.extend({
        queue: function (e, t) {
          var n = 2;
          return (
            "string" != typeof e && ((t = e), (e = "fx"), n--),
            arguments.length < n
              ? w.queue(this[0], e)
              : void 0 === t
              ? this
              : this.each(function () {
                  var n = w.queue(this, e, t);
                  w._queueHooks(this, e),
                    "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
                })
          );
        },
        dequeue: function (e) {
          return this.each(function () {
            w.dequeue(this, e);
          });
        },
        clearQueue: function (e) {
          return this.queue(e || "fx", []);
        },
        promise: function (e, t) {
          var n,
            i = 1,
            o = w.Deferred(),
            r = this,
            s = this.length,
            a = function () {
              --i || o.resolveWith(r, [r]);
            };
          for (
            "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
            s--;

          )
            (n = Z.get(r[s], e + "queueHooks")) &&
              n.empty &&
              (i++, n.empty.add(a));
          return a(), o.promise(t);
        },
      });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
      ne = ["Top", "Right", "Bottom", "Left"],
      ie = i.documentElement,
      oe = function (e) {
        return w.contains(e.ownerDocument, e);
      },
      re = {
        composed: !0,
      };
    ie.getRootNode &&
      (oe = function (e) {
        return (
          w.contains(e.ownerDocument, e) ||
          e.getRootNode(re) === e.ownerDocument
        );
      });
    var se = function (e, t) {
        return (
          "none" === (e = t || e).style.display ||
          ("" === e.style.display && oe(e) && "none" === w.css(e, "display"))
        );
      },
      ae = function (e, t, n, i) {
        var o,
          r,
          s = {};
        for (r in t) (s[r] = e.style[r]), (e.style[r] = t[r]);
        for (r in ((o = n.apply(e, i || [])), t)) e.style[r] = s[r];
        return o;
      };
    function le(e, t, n, i) {
      var o,
        r,
        s = 20,
        a = i
          ? function () {
              return i.cur();
            }
          : function () {
              return w.css(e, t, "");
            },
        l = a(),
        c = (n && n[3]) || (w.cssNumber[t] ? "" : "px"),
        u =
          e.nodeType &&
          (w.cssNumber[t] || ("px" !== c && +l)) &&
          te.exec(w.css(e, t));
      if (u && u[3] !== c) {
        for (l /= 2, c = c || u[3], u = +l || 1; s--; )
          w.style(e, t, u + c),
            (1 - r) * (1 - (r = a() / l || 0.5)) <= 0 && (s = 0),
            (u /= r);
        (u *= 2), w.style(e, t, u + c), (n = n || []);
      }
      return (
        n &&
          ((u = +u || +l || 0),
          (o = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
          i && ((i.unit = c), (i.start = u), (i.end = o))),
        o
      );
    }
    var ce = {};
    function ue(e) {
      var t,
        n = e.ownerDocument,
        i = e.nodeName,
        o = ce[i];
      return (
        o ||
        ((t = n.body.appendChild(n.createElement(i))),
        (o = w.css(t, "display")),
        t.parentNode.removeChild(t),
        "none" === o && (o = "block"),
        (ce[i] = o),
        o)
      );
    }
    function de(e, t) {
      for (var n, i, o = [], r = 0, s = e.length; r < s; r++)
        (i = e[r]).style &&
          ((n = i.style.display),
          t
            ? ("none" === n &&
                ((o[r] = Z.get(i, "display") || null),
                o[r] || (i.style.display = "")),
              "" === i.style.display && se(i) && (o[r] = ue(i)))
            : "none" !== n && ((o[r] = "none"), Z.set(i, "display", n)));
      for (r = 0; r < s; r++) null != o[r] && (e[r].style.display = o[r]);
      return e;
    }
    w.fn.extend({
      show: function () {
        return de(this, !0);
      },
      hide: function () {
        return de(this);
      },
      toggle: function (e) {
        return "boolean" == typeof e
          ? e
            ? this.show()
            : this.hide()
          : this.each(function () {
              se(this) ? w(this).show() : w(this).hide();
            });
      },
    });
    var pe = /^(?:checkbox|radio)$/i,
      fe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      he = /^$|^module$|\/(?:java|ecma)script/i,
      me = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      };
    function ge(e, t) {
      var n;
      return (
        (n =
          void 0 !== e.getElementsByTagName
            ? e.getElementsByTagName(t || "*")
            : void 0 !== e.querySelectorAll
            ? e.querySelectorAll(t || "*")
            : []),
        void 0 === t || (t && A(e, t)) ? w.merge([e], n) : n
      );
    }
    function ve(e, t) {
      for (var n = 0, i = e.length; n < i; n++)
        Z.set(e[n], "globalEval", !t || Z.get(t[n], "globalEval"));
    }
    (me.optgroup = me.option),
      (me.tbody = me.tfoot = me.colgroup = me.caption = me.thead),
      (me.th = me.td);
    var ye,
      be,
      we = /<|&#?\w+;/;
    function xe(e, t, n, i, o) {
      for (
        var r,
          s,
          a,
          l,
          c,
          u,
          d = t.createDocumentFragment(),
          p = [],
          f = 0,
          h = e.length;
        f < h;
        f++
      )
        if ((r = e[f]) || 0 === r)
          if ("object" === b(r)) w.merge(p, r.nodeType ? [r] : r);
          else if (we.test(r)) {
            for (
              s = s || d.appendChild(t.createElement("div")),
                a = (fe.exec(r) || ["", ""])[1].toLowerCase(),
                l = me[a] || me._default,
                s.innerHTML = l[1] + w.htmlPrefilter(r) + l[2],
                u = l[0];
              u--;

            )
              s = s.lastChild;
            w.merge(p, s.childNodes), ((s = d.firstChild).textContent = "");
          } else p.push(t.createTextNode(r));
      for (d.textContent = "", f = 0; (r = p[f++]); )
        if (i && w.inArray(r, i) > -1) o && o.push(r);
        else if (
          ((c = oe(r)), (s = ge(d.appendChild(r), "script")), c && ve(s), n)
        )
          for (u = 0; (r = s[u++]); ) he.test(r.type || "") && n.push(r);
      return d;
    }
    (ye = i.createDocumentFragment().appendChild(i.createElement("div"))),
      (be = i.createElement("input")).setAttribute("type", "radio"),
      be.setAttribute("checked", "checked"),
      be.setAttribute("name", "t"),
      ye.appendChild(be),
      (h.checkClone = ye.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (ye.innerHTML = "<textarea>x</textarea>"),
      (h.noCloneChecked = !!ye.cloneNode(!0).lastChild.defaultValue);
    var Te = /^key/,
      ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Ce = /^([^.]*)(?:\.(.+)|)/;
    function Se() {
      return !0;
    }
    function Ee() {
      return !1;
    }
    function Ae(e, t) {
      return (
        (e ===
          (function () {
            try {
              return i.activeElement;
            } catch (e) {}
          })()) ==
        ("focus" === t)
      );
    }
    function De(e, t, n, i, o, r) {
      var s, a;
      if ("object" == typeof t) {
        for (a in ("string" != typeof n && ((i = i || n), (n = void 0)), t))
          De(e, a, n, i, t[a], r);
        return e;
      }
      if (
        (null == i && null == o
          ? ((o = n), (i = n = void 0))
          : null == o &&
            ("string" == typeof n
              ? ((o = i), (i = void 0))
              : ((o = i), (i = n), (n = void 0))),
        !1 === o)
      )
        o = Ee;
      else if (!o) return e;
      return (
        1 === r &&
          ((s = o),
          ((o = function (e) {
            return w().off(e), s.apply(this, arguments);
          }).guid = s.guid || (s.guid = w.guid++))),
        e.each(function () {
          w.event.add(this, t, o, i, n);
        })
      );
    }
    function $e(e, t, n) {
      n
        ? (Z.set(e, t, !1),
          w.event.add(e, t, {
            namespace: !1,
            handler: function (e) {
              var i,
                o,
                s = Z.get(this, t);
              if (1 & e.isTrigger && this[t]) {
                if (s.length)
                  (w.event.special[t] || {}).delegateType &&
                    e.stopPropagation();
                else if (
                  ((s = r.call(arguments)),
                  Z.set(this, t, s),
                  (i = n(this, t)),
                  this[t](),
                  s !== (o = Z.get(this, t)) || i
                    ? Z.set(this, t, !1)
                    : (o = {}),
                  s !== o)
                )
                  return (
                    e.stopImmediatePropagation(), e.preventDefault(), o.value
                  );
              } else
                s.length &&
                  (Z.set(this, t, {
                    value: w.event.trigger(
                      w.extend(s[0], w.Event.prototype),
                      s.slice(1),
                      this
                    ),
                  }),
                  e.stopImmediatePropagation());
            },
          }))
        : void 0 === Z.get(e, t) && w.event.add(e, t, Se);
    }
    (w.event = {
      global: {},
      add: function (e, t, n, i, o) {
        var r,
          s,
          a,
          l,
          c,
          u,
          d,
          p,
          f,
          h,
          m,
          g = Z.get(e);
        if (g)
          for (
            n.handler && ((n = (r = n).handler), (o = r.selector)),
              o && w.find.matchesSelector(ie, o),
              n.guid || (n.guid = w.guid++),
              (l = g.events) || (l = g.events = {}),
              (s = g.handle) ||
                (s = g.handle =
                  function (t) {
                    return void 0 !== w && w.event.triggered !== t.type
                      ? w.event.dispatch.apply(e, arguments)
                      : void 0;
                  }),
              c = (t = (t || "").match(P) || [""]).length;
            c--;

          )
            (f = m = (a = Ce.exec(t[c]) || [])[1]),
              (h = (a[2] || "").split(".").sort()),
              f &&
                ((d = w.event.special[f] || {}),
                (f = (o ? d.delegateType : d.bindType) || f),
                (d = w.event.special[f] || {}),
                (u = w.extend(
                  {
                    type: f,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && w.expr.match.needsContext.test(o),
                    namespace: h.join("."),
                  },
                  r
                )),
                (p = l[f]) ||
                  (((p = l[f] = []).delegateCount = 0),
                  (d.setup && !1 !== d.setup.call(e, i, h, s)) ||
                    (e.addEventListener && e.addEventListener(f, s))),
                d.add &&
                  (d.add.call(e, u),
                  u.handler.guid || (u.handler.guid = n.guid)),
                o ? p.splice(p.delegateCount++, 0, u) : p.push(u),
                (w.event.global[f] = !0));
      },
      remove: function (e, t, n, i, o) {
        var r,
          s,
          a,
          l,
          c,
          u,
          d,
          p,
          f,
          h,
          m,
          g = Z.hasData(e) && Z.get(e);
        if (g && (l = g.events)) {
          for (c = (t = (t || "").match(P) || [""]).length; c--; )
            if (
              ((f = m = (a = Ce.exec(t[c]) || [])[1]),
              (h = (a[2] || "").split(".").sort()),
              f)
            ) {
              for (
                d = w.event.special[f] || {},
                  p = l[(f = (i ? d.delegateType : d.bindType) || f)] || [],
                  a =
                    a[2] &&
                    new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                  s = r = p.length;
                r--;

              )
                (u = p[r]),
                  (!o && m !== u.origType) ||
                    (n && n.guid !== u.guid) ||
                    (a && !a.test(u.namespace)) ||
                    (i && i !== u.selector && ("**" !== i || !u.selector)) ||
                    (p.splice(r, 1),
                    u.selector && p.delegateCount--,
                    d.remove && d.remove.call(e, u));
              s &&
                !p.length &&
                ((d.teardown && !1 !== d.teardown.call(e, h, g.handle)) ||
                  w.removeEvent(e, f, g.handle),
                delete l[f]);
            } else for (f in l) w.event.remove(e, f + t[c], n, i, !0);
          w.isEmptyObject(l) && Z.remove(e, "handle events");
        }
      },
      dispatch: function (e) {
        var t,
          n,
          i,
          o,
          r,
          s,
          a = w.event.fix(e),
          l = new Array(arguments.length),
          c = (Z.get(this, "events") || {})[a.type] || [],
          u = w.event.special[a.type] || {};
        for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
        if (
          ((a.delegateTarget = this),
          !u.preDispatch || !1 !== u.preDispatch.call(this, a))
        ) {
          for (
            s = w.event.handlers.call(this, a, c), t = 0;
            (o = s[t++]) && !a.isPropagationStopped();

          )
            for (
              a.currentTarget = o.elem, n = 0;
              (r = o.handlers[n++]) && !a.isImmediatePropagationStopped();

            )
              (a.rnamespace &&
                !1 !== r.namespace &&
                !a.rnamespace.test(r.namespace)) ||
                ((a.handleObj = r),
                (a.data = r.data),
                void 0 !==
                  (i = (
                    (w.event.special[r.origType] || {}).handle || r.handler
                  ).apply(o.elem, l)) &&
                  !1 === (a.result = i) &&
                  (a.preventDefault(), a.stopPropagation()));
          return u.postDispatch && u.postDispatch.call(this, a), a.result;
        }
      },
      handlers: function (e, t) {
        var n,
          i,
          o,
          r,
          s,
          a = [],
          l = t.delegateCount,
          c = e.target;
        if (l && c.nodeType && !("click" === e.type && e.button >= 1))
          for (; c !== this; c = c.parentNode || this)
            if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
              for (r = [], s = {}, n = 0; n < l; n++)
                void 0 === s[(o = (i = t[n]).selector + " ")] &&
                  (s[o] = i.needsContext
                    ? w(o, this).index(c) > -1
                    : w.find(o, this, null, [c]).length),
                  s[o] && r.push(i);
              r.length &&
                a.push({
                  elem: c,
                  handlers: r,
                });
            }
        return (
          (c = this),
          l < t.length &&
            a.push({
              elem: c,
              handlers: t.slice(l),
            }),
          a
        );
      },
      addProp: function (e, t) {
        Object.defineProperty(w.Event.prototype, e, {
          enumerable: !0,
          configurable: !0,
          get: m(t)
            ? function () {
                if (this.originalEvent) return t(this.originalEvent);
              }
            : function () {
                if (this.originalEvent) return this.originalEvent[e];
              },
          set: function (t) {
            Object.defineProperty(this, e, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t,
            });
          },
        });
      },
      fix: function (e) {
        return e[w.expando] ? e : new w.Event(e);
      },
      special: {
        load: {
          noBubble: !0,
        },
        click: {
          setup: function (e) {
            var t = this || e;
            return (
              pe.test(t.type) && t.click && A(t, "input") && $e(t, "click", Se),
              !1
            );
          },
          trigger: function (e) {
            var t = this || e;
            return (
              pe.test(t.type) && t.click && A(t, "input") && $e(t, "click"), !0
            );
          },
          _default: function (e) {
            var t = e.target;
            return (
              (pe.test(t.type) &&
                t.click &&
                A(t, "input") &&
                Z.get(t, "click")) ||
              A(t, "a")
            );
          },
        },
        beforeunload: {
          postDispatch: function (e) {
            void 0 !== e.result &&
              e.originalEvent &&
              (e.originalEvent.returnValue = e.result);
          },
        },
      },
    }),
      (w.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
      }),
      (w.Event = function (e, t) {
        if (!(this instanceof w.Event)) return new w.Event(e, t);
        e && e.type
          ? ((this.originalEvent = e),
            (this.type = e.type),
            (this.isDefaultPrevented =
              e.defaultPrevented ||
              (void 0 === e.defaultPrevented && !1 === e.returnValue)
                ? Se
                : Ee),
            (this.target =
              e.target && 3 === e.target.nodeType
                ? e.target.parentNode
                : e.target),
            (this.currentTarget = e.currentTarget),
            (this.relatedTarget = e.relatedTarget))
          : (this.type = e),
          t && w.extend(this, t),
          (this.timeStamp = (e && e.timeStamp) || Date.now()),
          (this[w.expando] = !0);
      }),
      (w.Event.prototype = {
        constructor: w.Event,
        isDefaultPrevented: Ee,
        isPropagationStopped: Ee,
        isImmediatePropagationStopped: Ee,
        isSimulated: !1,
        preventDefault: function () {
          var e = this.originalEvent;
          (this.isDefaultPrevented = Se),
            e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function () {
          var e = this.originalEvent;
          (this.isPropagationStopped = Se),
            e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function () {
          var e = this.originalEvent;
          (this.isImmediatePropagationStopped = Se),
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation();
        },
      }),
      w.each(
        {
          altKey: !0,
          bubbles: !0,
          cancelable: !0,
          changedTouches: !0,
          ctrlKey: !0,
          detail: !0,
          eventPhase: !0,
          metaKey: !0,
          pageX: !0,
          pageY: !0,
          shiftKey: !0,
          view: !0,
          char: !0,
          code: !0,
          charCode: !0,
          key: !0,
          keyCode: !0,
          button: !0,
          buttons: !0,
          clientX: !0,
          clientY: !0,
          offsetX: !0,
          offsetY: !0,
          pointerId: !0,
          pointerType: !0,
          screenX: !0,
          screenY: !0,
          targetTouches: !0,
          toElement: !0,
          touches: !0,
          which: function (e) {
            var t = e.button;
            return null == e.which && Te.test(e.type)
              ? null != e.charCode
                ? e.charCode
                : e.keyCode
              : !e.which && void 0 !== t && ke.test(e.type)
              ? 1 & t
                ? 1
                : 2 & t
                ? 3
                : 4 & t
                ? 2
                : 0
              : e.which;
          },
        },
        w.event.addProp
      ),
      w.each(
        {
          focus: "focusin",
          blur: "focusout",
        },
        function (e, t) {
          w.event.special[e] = {
            setup: function () {
              return $e(this, e, Ae), !1;
            },
            trigger: function () {
              return $e(this, e), !0;
            },
            delegateType: t,
          };
        }
      ),
      w.each(
        {
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout",
        },
        function (e, t) {
          w.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
              var n,
                i = e.relatedTarget,
                o = e.handleObj;
              return (
                (i && (i === this || w.contains(this, i))) ||
                  ((e.type = o.origType),
                  (n = o.handler.apply(this, arguments)),
                  (e.type = t)),
                n
              );
            },
          };
        }
      ),
      w.fn.extend({
        on: function (e, t, n, i) {
          return De(this, e, t, n, i);
        },
        one: function (e, t, n, i) {
          return De(this, e, t, n, i, 1);
        },
        off: function (e, t, n) {
          var i, o;
          if (e && e.preventDefault && e.handleObj)
            return (
              (i = e.handleObj),
              w(e.delegateTarget).off(
                i.namespace ? i.origType + "." + i.namespace : i.origType,
                i.selector,
                i.handler
              ),
              this
            );
          if ("object" == typeof e) {
            for (o in e) this.off(o, t, e[o]);
            return this;
          }
          return (
            (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
            !1 === n && (n = Ee),
            this.each(function () {
              w.event.remove(this, e, n, t);
            })
          );
        },
      });
    var Ie =
        /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      Oe = /<script|<style|<link/i,
      Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
      je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Ne(e, t) {
      return (
        (A(e, "table") &&
          A(11 !== t.nodeType ? t : t.firstChild, "tr") &&
          w(e).children("tbody")[0]) ||
        e
      );
    }
    function Pe(e) {
      return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }
    function _e(e) {
      return (
        "true/" === (e.type || "").slice(0, 5)
          ? (e.type = e.type.slice(5))
          : e.removeAttribute("type"),
        e
      );
    }
    function Me(e, t) {
      var n, i, o, r, s, a, l, c;
      if (1 === t.nodeType) {
        if (
          Z.hasData(e) &&
          ((r = Z.access(e)), (s = Z.set(t, r)), (c = r.events))
        )
          for (o in (delete s.handle, (s.events = {}), c))
            for (n = 0, i = c[o].length; n < i; n++) w.event.add(t, o, c[o][n]);
        K.hasData(e) && ((a = K.access(e)), (l = w.extend({}, a)), K.set(t, l));
      }
    }
    function He(e, t, n, i) {
      t = s.apply([], t);
      var o,
        r,
        a,
        l,
        c,
        u,
        d = 0,
        p = e.length,
        f = p - 1,
        g = t[0],
        v = m(g);
      if (v || (p > 1 && "string" == typeof g && !h.checkClone && Le.test(g)))
        return e.each(function (o) {
          var r = e.eq(o);
          v && (t[0] = g.call(this, o, r.html())), He(r, t, n, i);
        });
      if (
        p &&
        ((r = (o = xe(t, e[0].ownerDocument, !1, e, i)).firstChild),
        1 === o.childNodes.length && (o = r),
        r || i)
      ) {
        for (l = (a = w.map(ge(o, "script"), Pe)).length; d < p; d++)
          (c = o),
            d !== f &&
              ((c = w.clone(c, !0, !0)), l && w.merge(a, ge(c, "script"))),
            n.call(e[d], c, d);
        if (l)
          for (
            u = a[a.length - 1].ownerDocument, w.map(a, _e), d = 0;
            d < l;
            d++
          )
            (c = a[d]),
              he.test(c.type || "") &&
                !Z.access(c, "globalEval") &&
                w.contains(u, c) &&
                (c.src && "module" !== (c.type || "").toLowerCase()
                  ? w._evalUrl &&
                    !c.noModule &&
                    w._evalUrl(c.src, {
                      nonce: c.nonce || c.getAttribute("nonce"),
                    })
                  : y(c.textContent.replace(je, ""), c, u));
      }
      return e;
    }
    function qe(e, t, n) {
      for (var i, o = t ? w.filter(t, e) : e, r = 0; null != (i = o[r]); r++)
        n || 1 !== i.nodeType || w.cleanData(ge(i)),
          i.parentNode &&
            (n && oe(i) && ve(ge(i, "script")), i.parentNode.removeChild(i));
      return e;
    }
    w.extend({
      htmlPrefilter: function (e) {
        return e.replace(Ie, "<$1></$2>");
      },
      clone: function (e, t, n) {
        var i,
          o,
          r,
          s,
          a,
          l,
          c,
          u = e.cloneNode(!0),
          d = oe(e);
        if (
          !(
            h.noCloneChecked ||
            (1 !== e.nodeType && 11 !== e.nodeType) ||
            w.isXMLDoc(e)
          )
        )
          for (s = ge(u), i = 0, o = (r = ge(e)).length; i < o; i++)
            (a = r[i]),
              (l = s[i]),
              (c = void 0),
              "input" === (c = l.nodeName.toLowerCase()) && pe.test(a.type)
                ? (l.checked = a.checked)
                : ("input" !== c && "textarea" !== c) ||
                  (l.defaultValue = a.defaultValue);
        if (t)
          if (n)
            for (
              r = r || ge(e), s = s || ge(u), i = 0, o = r.length;
              i < o;
              i++
            )
              Me(r[i], s[i]);
          else Me(e, u);
        return (
          (s = ge(u, "script")).length > 0 && ve(s, !d && ge(e, "script")), u
        );
      },
      cleanData: function (e) {
        for (
          var t, n, i, o = w.event.special, r = 0;
          void 0 !== (n = e[r]);
          r++
        )
          if (V(n)) {
            if ((t = n[Z.expando])) {
              if (t.events)
                for (i in t.events)
                  o[i] ? w.event.remove(n, i) : w.removeEvent(n, i, t.handle);
              n[Z.expando] = void 0;
            }
            n[K.expando] && (n[K.expando] = void 0);
          }
      },
    }),
      w.fn.extend({
        detach: function (e) {
          return qe(this, e, !0);
        },
        remove: function (e) {
          return qe(this, e);
        },
        text: function (e) {
          return z(
            this,
            function (e) {
              return void 0 === e
                ? w.text(this)
                : this.empty().each(function () {
                    (1 !== this.nodeType &&
                      11 !== this.nodeType &&
                      9 !== this.nodeType) ||
                      (this.textContent = e);
                  });
            },
            null,
            e,
            arguments.length
          );
        },
        append: function () {
          return He(this, arguments, function (e) {
            (1 !== this.nodeType &&
              11 !== this.nodeType &&
              9 !== this.nodeType) ||
              Ne(this, e).appendChild(e);
          });
        },
        prepend: function () {
          return He(this, arguments, function (e) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var t = Ne(this, e);
              t.insertBefore(e, t.firstChild);
            }
          });
        },
        before: function () {
          return He(this, arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this);
          });
        },
        after: function () {
          return He(this, arguments, function (e) {
            this.parentNode &&
              this.parentNode.insertBefore(e, this.nextSibling);
          });
        },
        empty: function () {
          for (var e, t = 0; null != (e = this[t]); t++)
            1 === e.nodeType && (w.cleanData(ge(e, !1)), (e.textContent = ""));
          return this;
        },
        clone: function (e, t) {
          return (
            (e = null != e && e),
            (t = null == t ? e : t),
            this.map(function () {
              return w.clone(this, e, t);
            })
          );
        },
        html: function (e) {
          return z(
            this,
            function (e) {
              var t = this[0] || {},
                n = 0,
                i = this.length;
              if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
              if (
                "string" == typeof e &&
                !Oe.test(e) &&
                !me[(fe.exec(e) || ["", ""])[1].toLowerCase()]
              ) {
                e = w.htmlPrefilter(e);
                try {
                  for (; n < i; n++)
                    1 === (t = this[n] || {}).nodeType &&
                      (w.cleanData(ge(t, !1)), (t.innerHTML = e));
                  t = 0;
                } catch (e) {}
              }
              t && this.empty().append(e);
            },
            null,
            e,
            arguments.length
          );
        },
        replaceWith: function () {
          var e = [];
          return He(
            this,
            arguments,
            function (t) {
              var n = this.parentNode;
              w.inArray(this, e) < 0 &&
                (w.cleanData(ge(this)), n && n.replaceChild(t, this));
            },
            e
          );
        },
      }),
      w.each(
        {
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith",
        },
        function (e, t) {
          w.fn[e] = function (e) {
            for (var n, i = [], o = w(e), r = o.length - 1, s = 0; s <= r; s++)
              (n = s === r ? this : this.clone(!0)),
                w(o[s])[t](n),
                a.apply(i, n.get());
            return this.pushStack(i);
          };
        }
      );
    var Re = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
      Fe = function (t) {
        var n = t.ownerDocument.defaultView;
        return (n && n.opener) || (n = e), n.getComputedStyle(t);
      },
      ze = new RegExp(ne.join("|"), "i");
    function We(e, t, n) {
      var i,
        o,
        r,
        s,
        a = e.style;
      return (
        (n = n || Fe(e)) &&
          ("" !== (s = n.getPropertyValue(t) || n[t]) ||
            oe(e) ||
            (s = w.style(e, t)),
          !h.pixelBoxStyles() &&
            Re.test(s) &&
            ze.test(t) &&
            ((i = a.width),
            (o = a.minWidth),
            (r = a.maxWidth),
            (a.minWidth = a.maxWidth = a.width = s),
            (s = n.width),
            (a.width = i),
            (a.minWidth = o),
            (a.maxWidth = r))),
        void 0 !== s ? s + "" : s
      );
    }
    function Be(e, t) {
      return {
        get: function () {
          if (!e()) return (this.get = t).apply(this, arguments);
          delete this.get;
        },
      };
    }
    !(function () {
      function t() {
        if (u) {
          (c.style.cssText =
            "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
            (u.style.cssText =
              "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
            ie.appendChild(c).appendChild(u);
          var t = e.getComputedStyle(u);
          (o = "1%" !== t.top),
            (l = 12 === n(t.marginLeft)),
            (u.style.right = "60%"),
            (a = 36 === n(t.right)),
            (r = 36 === n(t.width)),
            (u.style.position = "absolute"),
            (s = 12 === n(u.offsetWidth / 3)),
            ie.removeChild(c),
            (u = null);
        }
      }
      function n(e) {
        return Math.round(parseFloat(e));
      }
      var o,
        r,
        s,
        a,
        l,
        c = i.createElement("div"),
        u = i.createElement("div");
      u.style &&
        ((u.style.backgroundClip = "content-box"),
        (u.cloneNode(!0).style.backgroundClip = ""),
        (h.clearCloneStyle = "content-box" === u.style.backgroundClip),
        w.extend(h, {
          boxSizingReliable: function () {
            return t(), r;
          },
          pixelBoxStyles: function () {
            return t(), a;
          },
          pixelPosition: function () {
            return t(), o;
          },
          reliableMarginLeft: function () {
            return t(), l;
          },
          scrollboxSize: function () {
            return t(), s;
          },
        }));
    })();
    var Ue = ["Webkit", "Moz", "ms"],
      Xe = i.createElement("div").style,
      Ve = {};
    function Ye(e) {
      var t = w.cssProps[e] || Ve[e];
      return (
        t ||
        (e in Xe
          ? e
          : (Ve[e] =
              (function (e) {
                for (
                  var t = e[0].toUpperCase() + e.slice(1), n = Ue.length;
                  n--;

                )
                  if ((e = Ue[n] + t) in Xe) return e;
              })(e) || e))
      );
    }
    var Ze = /^(none|table(?!-c[ea]).+)/,
      Ke = /^--/,
      Ge = {
        position: "absolute",
        visibility: "hidden",
        display: "block",
      },
      Qe = {
        letterSpacing: "0",
        fontWeight: "400",
      };
    function Je(e, t, n) {
      var i = te.exec(t);
      return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
    }
    function et(e, t, n, i, o, r) {
      var s = "width" === t ? 1 : 0,
        a = 0,
        l = 0;
      if (n === (i ? "border" : "content")) return 0;
      for (; s < 4; s += 2)
        "margin" === n && (l += w.css(e, n + ne[s], !0, o)),
          i
            ? ("content" === n && (l -= w.css(e, "padding" + ne[s], !0, o)),
              "margin" !== n &&
                (l -= w.css(e, "border" + ne[s] + "Width", !0, o)))
            : ((l += w.css(e, "padding" + ne[s], !0, o)),
              "padding" !== n
                ? (l += w.css(e, "border" + ne[s] + "Width", !0, o))
                : (a += w.css(e, "border" + ne[s] + "Width", !0, o)));
      return (
        !i &&
          r >= 0 &&
          (l +=
            Math.max(
              0,
              Math.ceil(
                e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - a - 0.5
              )
            ) || 0),
        l
      );
    }
    function tt(e, t, n) {
      var i = Fe(e),
        o =
          (!h.boxSizingReliable() || n) &&
          "border-box" === w.css(e, "boxSizing", !1, i),
        r = o,
        s = We(e, t, i),
        a = "offset" + t[0].toUpperCase() + t.slice(1);
      if (Re.test(s)) {
        if (!n) return s;
        s = "auto";
      }
      return (
        ((!h.boxSizingReliable() && o) ||
          "auto" === s ||
          (!parseFloat(s) && "inline" === w.css(e, "display", !1, i))) &&
          e.getClientRects().length &&
          ((o = "border-box" === w.css(e, "boxSizing", !1, i)),
          (r = a in e) && (s = e[a])),
        (s = parseFloat(s) || 0) +
          et(e, t, n || (o ? "border" : "content"), r, i, s) +
          "px"
      );
    }
    function nt(e, t, n, i, o) {
      return new nt.prototype.init(e, t, n, i, o);
    }
    w.extend({
      cssHooks: {
        opacity: {
          get: function (e, t) {
            if (t) {
              var n = We(e, "opacity");
              return "" === n ? "1" : n;
            }
          },
        },
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        gridArea: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnStart: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowStart: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: {},
      style: function (e, t, n, i) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var o,
            r,
            s,
            a = X(t),
            l = Ke.test(t),
            c = e.style;
          if (
            (l || (t = Ye(a)),
            (s = w.cssHooks[t] || w.cssHooks[a]),
            void 0 === n)
          )
            return s && "get" in s && void 0 !== (o = s.get(e, !1, i))
              ? o
              : c[t];
          "string" === (r = typeof n) &&
            (o = te.exec(n)) &&
            o[1] &&
            ((n = le(e, t, o)), (r = "number")),
            null != n &&
              n == n &&
              ("number" !== r ||
                l ||
                (n += (o && o[3]) || (w.cssNumber[a] ? "" : "px")),
              h.clearCloneStyle ||
                "" !== n ||
                0 !== t.indexOf("background") ||
                (c[t] = "inherit"),
              (s && "set" in s && void 0 === (n = s.set(e, n, i))) ||
                (l ? c.setProperty(t, n) : (c[t] = n)));
        }
      },
      css: function (e, t, n, i) {
        var o,
          r,
          s,
          a = X(t);
        return (
          Ke.test(t) || (t = Ye(a)),
          (s = w.cssHooks[t] || w.cssHooks[a]) &&
            "get" in s &&
            (o = s.get(e, !0, n)),
          void 0 === o && (o = We(e, t, i)),
          "normal" === o && t in Qe && (o = Qe[t]),
          "" === n || n
            ? ((r = parseFloat(o)), !0 === n || isFinite(r) ? r || 0 : o)
            : o
        );
      },
    }),
      w.each(["height", "width"], function (e, t) {
        w.cssHooks[t] = {
          get: function (e, n, i) {
            if (n)
              return !Ze.test(w.css(e, "display")) ||
                (e.getClientRects().length && e.getBoundingClientRect().width)
                ? tt(e, t, i)
                : ae(e, Ge, function () {
                    return tt(e, t, i);
                  });
          },
          set: function (e, n, i) {
            var o,
              r = Fe(e),
              s = !h.scrollboxSize() && "absolute" === r.position,
              a = (s || i) && "border-box" === w.css(e, "boxSizing", !1, r),
              l = i ? et(e, t, i, a, r) : 0;
            return (
              a &&
                s &&
                (l -= Math.ceil(
                  e["offset" + t[0].toUpperCase() + t.slice(1)] -
                    parseFloat(r[t]) -
                    et(e, t, "border", !1, r) -
                    0.5
                )),
              l &&
                (o = te.exec(n)) &&
                "px" !== (o[3] || "px") &&
                ((e.style[t] = n), (n = w.css(e, t))),
              Je(0, n, l)
            );
          },
        };
      }),
      (w.cssHooks.marginLeft = Be(h.reliableMarginLeft, function (e, t) {
        if (t)
          return (
            (parseFloat(We(e, "marginLeft")) ||
              e.getBoundingClientRect().left -
                ae(
                  e,
                  {
                    marginLeft: 0,
                  },
                  function () {
                    return e.getBoundingClientRect().left;
                  }
                )) + "px"
          );
      })),
      w.each(
        {
          margin: "",
          padding: "",
          border: "Width",
        },
        function (e, t) {
          (w.cssHooks[e + t] = {
            expand: function (n) {
              for (
                var i = 0,
                  o = {},
                  r = "string" == typeof n ? n.split(" ") : [n];
                i < 4;
                i++
              )
                o[e + ne[i] + t] = r[i] || r[i - 2] || r[0];
              return o;
            },
          }),
            "margin" !== e && (w.cssHooks[e + t].set = Je);
        }
      ),
      w.fn.extend({
        css: function (e, t) {
          return z(
            this,
            function (e, t, n) {
              var i,
                o,
                r = {},
                s = 0;
              if (Array.isArray(t)) {
                for (i = Fe(e), o = t.length; s < o; s++)
                  r[t[s]] = w.css(e, t[s], !1, i);
                return r;
              }
              return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
            },
            e,
            t,
            arguments.length > 1
          );
        },
      }),
      (w.Tween = nt),
      (nt.prototype = {
        constructor: nt,
        init: function (e, t, n, i, o, r) {
          (this.elem = e),
            (this.prop = n),
            (this.easing = o || w.easing._default),
            (this.options = t),
            (this.start = this.now = this.cur()),
            (this.end = i),
            (this.unit = r || (w.cssNumber[n] ? "" : "px"));
        },
        cur: function () {
          var e = nt.propHooks[this.prop];
          return e && e.get ? e.get(this) : nt.propHooks._default.get(this);
        },
        run: function (e) {
          var t,
            n = nt.propHooks[this.prop];
          return (
            this.options.duration
              ? (this.pos = t =
                  w.easing[this.easing](
                    e,
                    this.options.duration * e,
                    0,
                    1,
                    this.options.duration
                  ))
              : (this.pos = t = e),
            (this.now = (this.end - this.start) * t + this.start),
            this.options.step &&
              this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : nt.propHooks._default.set(this),
            this
          );
        },
      }),
      (nt.prototype.init.prototype = nt.prototype),
      (nt.propHooks = {
        _default: {
          get: function (e) {
            var t;
            return 1 !== e.elem.nodeType ||
              (null != e.elem[e.prop] && null == e.elem.style[e.prop])
              ? e.elem[e.prop]
              : (t = w.css(e.elem, e.prop, "")) && "auto" !== t
              ? t
              : 0;
          },
          set: function (e) {
            w.fx.step[e.prop]
              ? w.fx.step[e.prop](e)
              : 1 !== e.elem.nodeType ||
                (!w.cssHooks[e.prop] && null == e.elem.style[Ye(e.prop)])
              ? (e.elem[e.prop] = e.now)
              : w.style(e.elem, e.prop, e.now + e.unit);
          },
        },
      }),
      (nt.propHooks.scrollTop = nt.propHooks.scrollLeft =
        {
          set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
          },
        }),
      (w.easing = {
        linear: function (e) {
          return e;
        },
        swing: function (e) {
          return 0.5 - Math.cos(e * Math.PI) / 2;
        },
        _default: "swing",
      }),
      (w.fx = nt.prototype.init),
      (w.fx.step = {});
    var it,
      ot,
      rt = /^(?:toggle|show|hide)$/,
      st = /queueHooks$/;
    function at() {
      ot &&
        (!1 === i.hidden && e.requestAnimationFrame
          ? e.requestAnimationFrame(at)
          : e.setTimeout(at, w.fx.interval),
        w.fx.tick());
    }
    function lt() {
      return (
        e.setTimeout(function () {
          it = void 0;
        }),
        (it = Date.now())
      );
    }
    function ct(e, t) {
      var n,
        i = 0,
        o = {
          height: e,
        };
      for (t = t ? 1 : 0; i < 4; i += 2 - t)
        o["margin" + (n = ne[i])] = o["padding" + n] = e;
      return t && (o.opacity = o.width = e), o;
    }
    function ut(e, t, n) {
      for (
        var i,
          o = (dt.tweeners[t] || []).concat(dt.tweeners["*"]),
          r = 0,
          s = o.length;
        r < s;
        r++
      )
        if ((i = o[r].call(n, t, e))) return i;
    }
    function dt(e, t, n) {
      var i,
        o,
        r = 0,
        s = dt.prefilters.length,
        a = w.Deferred().always(function () {
          delete l.elem;
        }),
        l = function () {
          if (o) return !1;
          for (
            var t = it || lt(),
              n = Math.max(0, c.startTime + c.duration - t),
              i = 1 - (n / c.duration || 0),
              r = 0,
              s = c.tweens.length;
            r < s;
            r++
          )
            c.tweens[r].run(i);
          return (
            a.notifyWith(e, [c, i, n]),
            i < 1 && s
              ? n
              : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
          );
        },
        c = a.promise({
          elem: e,
          props: w.extend({}, t),
          opts: w.extend(
            !0,
            {
              specialEasing: {},
              easing: w.easing._default,
            },
            n
          ),
          originalProperties: t,
          originalOptions: n,
          startTime: it || lt(),
          duration: n.duration,
          tweens: [],
          createTween: function (t, n) {
            var i = w.Tween(
              e,
              c.opts,
              t,
              n,
              c.opts.specialEasing[t] || c.opts.easing
            );
            return c.tweens.push(i), i;
          },
          stop: function (t) {
            var n = 0,
              i = t ? c.tweens.length : 0;
            if (o) return this;
            for (o = !0; n < i; n++) c.tweens[n].run(1);
            return (
              t
                ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t]))
                : a.rejectWith(e, [c, t]),
              this
            );
          },
        }),
        u = c.props;
      for (
        !(function (e, t) {
          var n, i, o, r, s;
          for (n in e)
            if (
              ((o = t[(i = X(n))]),
              (r = e[n]),
              Array.isArray(r) && ((o = r[1]), (r = e[n] = r[0])),
              n !== i && ((e[i] = r), delete e[n]),
              (s = w.cssHooks[i]) && ("expand" in s))
            )
              for (n in ((r = s.expand(r)), delete e[i], r))
                (n in e) || ((e[n] = r[n]), (t[n] = o));
            else t[i] = o;
        })(u, c.opts.specialEasing);
        r < s;
        r++
      )
        if ((i = dt.prefilters[r].call(c, e, u, c.opts)))
          return (
            m(i.stop) &&
              (w._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)),
            i
          );
      return (
        w.map(u, ut, c),
        m(c.opts.start) && c.opts.start.call(e, c),
        c
          .progress(c.opts.progress)
          .done(c.opts.done, c.opts.complete)
          .fail(c.opts.fail)
          .always(c.opts.always),
        w.fx.timer(
          w.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue,
          })
        ),
        c
      );
    }
    (w.Animation = w.extend(dt, {
      tweeners: {
        "*": [
          function (e, t) {
            var n = this.createTween(e, t);
            return le(n.elem, e, te.exec(t), n), n;
          },
        ],
      },
      tweener: function (e, t) {
        m(e) ? ((t = e), (e = ["*"])) : (e = e.match(P));
        for (var n, i = 0, o = e.length; i < o; i++)
          (n = e[i]),
            (dt.tweeners[n] = dt.tweeners[n] || []),
            dt.tweeners[n].unshift(t);
      },
      prefilters: [
        function (e, t, n) {
          var i,
            o,
            r,
            s,
            a,
            l,
            c,
            u,
            d = "width" in t || "height" in t,
            p = this,
            f = {},
            h = e.style,
            m = e.nodeType && se(e),
            g = Z.get(e, "fxshow");
          for (i in (n.queue ||
            (null == (s = w._queueHooks(e, "fx")).unqueued &&
              ((s.unqueued = 0),
              (a = s.empty.fire),
              (s.empty.fire = function () {
                s.unqueued || a();
              })),
            s.unqueued++,
            p.always(function () {
              p.always(function () {
                s.unqueued--, w.queue(e, "fx").length || s.empty.fire();
              });
            })),
          t))
            if (((o = t[i]), rt.test(o))) {
              if (
                (delete t[i],
                (r = r || "toggle" === o),
                o === (m ? "hide" : "show"))
              ) {
                if ("show" !== o || !g || void 0 === g[i]) continue;
                m = !0;
              }
              f[i] = (g && g[i]) || w.style(e, i);
            }
          if ((l = !w.isEmptyObject(t)) || !w.isEmptyObject(f))
            for (i in (d &&
              1 === e.nodeType &&
              ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
              null == (c = g && g.display) && (c = Z.get(e, "display")),
              "none" === (u = w.css(e, "display")) &&
                (c
                  ? (u = c)
                  : (de([e], !0),
                    (c = e.style.display || c),
                    (u = w.css(e, "display")),
                    de([e]))),
              ("inline" === u || ("inline-block" === u && null != c)) &&
                "none" === w.css(e, "float") &&
                (l ||
                  (p.done(function () {
                    h.display = c;
                  }),
                  null == c && ((u = h.display), (c = "none" === u ? "" : u))),
                (h.display = "inline-block"))),
            n.overflow &&
              ((h.overflow = "hidden"),
              p.always(function () {
                (h.overflow = n.overflow[0]),
                  (h.overflowX = n.overflow[1]),
                  (h.overflowY = n.overflow[2]);
              })),
            (l = !1),
            f))
              l ||
                (g
                  ? "hidden" in g && (m = g.hidden)
                  : (g = Z.access(e, "fxshow", {
                      display: c,
                    })),
                r && (g.hidden = !m),
                m && de([e], !0),
                p.done(function () {
                  for (i in (m || de([e]), Z.remove(e, "fxshow"), f))
                    w.style(e, i, f[i]);
                })),
                (l = ut(m ? g[i] : 0, i, p)),
                i in g ||
                  ((g[i] = l.start), m && ((l.end = l.start), (l.start = 0)));
        },
      ],
      prefilter: function (e, t) {
        t ? dt.prefilters.unshift(e) : dt.prefilters.push(e);
      },
    })),
      (w.speed = function (e, t, n) {
        var i =
          e && "object" == typeof e
            ? w.extend({}, e)
            : {
                complete: n || (!n && t) || (m(e) && e),
                duration: e,
                easing: (n && t) || (t && !m(t) && t),
              };
        return (
          w.fx.off
            ? (i.duration = 0)
            : "number" != typeof i.duration &&
              (i.duration in w.fx.speeds
                ? (i.duration = w.fx.speeds[i.duration])
                : (i.duration = w.fx.speeds._default)),
          (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
          (i.old = i.complete),
          (i.complete = function () {
            m(i.old) && i.old.call(this), i.queue && w.dequeue(this, i.queue);
          }),
          i
        );
      }),
      w.fn.extend({
        fadeTo: function (e, t, n, i) {
          return this.filter(se).css("opacity", 0).show().end().animate(
            {
              opacity: t,
            },
            e,
            n,
            i
          );
        },
        animate: function (e, t, n, i) {
          var o = w.isEmptyObject(e),
            r = w.speed(t, n, i),
            s = function () {
              var t = dt(this, w.extend({}, e), r);
              (o || Z.get(this, "finish")) && t.stop(!0);
            };
          return (
            (s.finish = s),
            o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
          );
        },
        stop: function (e, t, n) {
          var i = function (e) {
            var t = e.stop;
            delete e.stop, t(n);
          };
          return (
            "string" != typeof e && ((n = t), (t = e), (e = void 0)),
            t && !1 !== e && this.queue(e || "fx", []),
            this.each(function () {
              var t = !0,
                o = null != e && e + "queueHooks",
                r = w.timers,
                s = Z.get(this);
              if (o) s[o] && s[o].stop && i(s[o]);
              else for (o in s) s[o] && s[o].stop && st.test(o) && i(s[o]);
              for (o = r.length; o--; )
                r[o].elem !== this ||
                  (null != e && r[o].queue !== e) ||
                  (r[o].anim.stop(n), (t = !1), r.splice(o, 1));
              (!t && n) || w.dequeue(this, e);
            })
          );
        },
        finish: function (e) {
          return (
            !1 !== e && (e = e || "fx"),
            this.each(function () {
              var t,
                n = Z.get(this),
                i = n[e + "queue"],
                o = n[e + "queueHooks"],
                r = w.timers,
                s = i ? i.length : 0;
              for (
                n.finish = !0,
                  w.queue(this, e, []),
                  o && o.stop && o.stop.call(this, !0),
                  t = r.length;
                t--;

              )
                r[t].elem === this &&
                  r[t].queue === e &&
                  (r[t].anim.stop(!0), r.splice(t, 1));
              for (t = 0; t < s; t++)
                i[t] && i[t].finish && i[t].finish.call(this);
              delete n.finish;
            })
          );
        },
      }),
      w.each(["toggle", "show", "hide"], function (e, t) {
        var n = w.fn[t];
        w.fn[t] = function (e, i, o) {
          return null == e || "boolean" == typeof e
            ? n.apply(this, arguments)
            : this.animate(ct(t, !0), e, i, o);
        };
      }),
      w.each(
        {
          slideDown: ct("show"),
          slideUp: ct("hide"),
          slideToggle: ct("toggle"),
          fadeIn: {
            opacity: "show",
          },
          fadeOut: {
            opacity: "hide",
          },
          fadeToggle: {
            opacity: "toggle",
          },
        },
        function (e, t) {
          w.fn[e] = function (e, n, i) {
            return this.animate(t, e, n, i);
          };
        }
      ),
      (w.timers = []),
      (w.fx.tick = function () {
        var e,
          t = 0,
          n = w.timers;
        for (it = Date.now(); t < n.length; t++)
          (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || w.fx.stop(), (it = void 0);
      }),
      (w.fx.timer = function (e) {
        w.timers.push(e), w.fx.start();
      }),
      (w.fx.interval = 13),
      (w.fx.start = function () {
        ot || ((ot = !0), at());
      }),
      (w.fx.stop = function () {
        ot = null;
      }),
      (w.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400,
      }),
      (w.fn.delay = function (t, n) {
        return (
          (t = (w.fx && w.fx.speeds[t]) || t),
          (n = n || "fx"),
          this.queue(n, function (n, i) {
            var o = e.setTimeout(n, t);
            i.stop = function () {
              e.clearTimeout(o);
            };
          })
        );
      }),
      (function () {
        var e = i.createElement("input"),
          t = i.createElement("select").appendChild(i.createElement("option"));
        (e.type = "checkbox"),
          (h.checkOn = "" !== e.value),
          (h.optSelected = t.selected),
          ((e = i.createElement("input")).value = "t"),
          (e.type = "radio"),
          (h.radioValue = "t" === e.value);
      })();
    var pt,
      ft = w.expr.attrHandle;
    w.fn.extend({
      attr: function (e, t) {
        return z(this, w.attr, e, t, arguments.length > 1);
      },
      removeAttr: function (e) {
        return this.each(function () {
          w.removeAttr(this, e);
        });
      },
    }),
      w.extend({
        attr: function (e, t, n) {
          var i,
            o,
            r = e.nodeType;
          if (3 !== r && 8 !== r && 2 !== r)
            return void 0 === e.getAttribute
              ? w.prop(e, t, n)
              : ((1 === r && w.isXMLDoc(e)) ||
                  (o =
                    w.attrHooks[t.toLowerCase()] ||
                    (w.expr.match.bool.test(t) ? pt : void 0)),
                void 0 !== n
                  ? null === n
                    ? void w.removeAttr(e, t)
                    : o && "set" in o && void 0 !== (i = o.set(e, n, t))
                    ? i
                    : (e.setAttribute(t, n + ""), n)
                  : o && "get" in o && null !== (i = o.get(e, t))
                  ? i
                  : null == (i = w.find.attr(e, t))
                  ? void 0
                  : i);
        },
        attrHooks: {
          type: {
            set: function (e, t) {
              if (!h.radioValue && "radio" === t && A(e, "input")) {
                var n = e.value;
                return e.setAttribute("type", t), n && (e.value = n), t;
              }
            },
          },
        },
        removeAttr: function (e, t) {
          var n,
            i = 0,
            o = t && t.match(P);
          if (o && 1 === e.nodeType)
            for (; (n = o[i++]); ) e.removeAttribute(n);
        },
      }),
      (pt = {
        set: function (e, t, n) {
          return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
        },
      }),
      w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = ft[t] || w.find.attr;
        ft[t] = function (e, t, i) {
          var o,
            r,
            s = t.toLowerCase();
          return (
            i ||
              ((r = ft[s]),
              (ft[s] = o),
              (o = null != n(e, t, i) ? s : null),
              (ft[s] = r)),
            o
          );
        };
      });
    var ht = /^(?:input|select|textarea|button)$/i,
      mt = /^(?:a|area)$/i;
    function gt(e) {
      return (e.match(P) || []).join(" ");
    }
    function vt(e) {
      return (e.getAttribute && e.getAttribute("class")) || "";
    }
    function yt(e) {
      return Array.isArray(e) ? e : ("string" == typeof e && e.match(P)) || [];
    }
    w.fn.extend({
      prop: function (e, t) {
        return z(this, w.prop, e, t, arguments.length > 1);
      },
      removeProp: function (e) {
        return this.each(function () {
          delete this[w.propFix[e] || e];
        });
      },
    }),
      w.extend({
        prop: function (e, t, n) {
          var i,
            o,
            r = e.nodeType;
          if (3 !== r && 8 !== r && 2 !== r)
            return (
              (1 === r && w.isXMLDoc(e)) ||
                ((t = w.propFix[t] || t), (o = w.propHooks[t])),
              void 0 !== n
                ? o && "set" in o && void 0 !== (i = o.set(e, n, t))
                  ? i
                  : (e[t] = n)
                : o && "get" in o && null !== (i = o.get(e, t))
                ? i
                : e[t]
            );
        },
        propHooks: {
          tabIndex: {
            get: function (e) {
              var t = w.find.attr(e, "tabindex");
              return t
                ? parseInt(t, 10)
                : ht.test(e.nodeName) || (mt.test(e.nodeName) && e.href)
                ? 0
                : -1;
            },
          },
        },
        propFix: {
          for: "htmlFor",
          class: "className",
        },
      }),
      h.optSelected ||
        (w.propHooks.selected = {
          get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
          },
          set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
          },
        }),
      w.each(
        [
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable",
        ],
        function () {
          w.propFix[this.toLowerCase()] = this;
        }
      ),
      w.fn.extend({
        addClass: function (e) {
          var t,
            n,
            i,
            o,
            r,
            s,
            a,
            l = 0;
          if (m(e))
            return this.each(function (t) {
              w(this).addClass(e.call(this, t, vt(this)));
            });
          if ((t = yt(e)).length)
            for (; (n = this[l++]); )
              if (((o = vt(n)), (i = 1 === n.nodeType && " " + gt(o) + " "))) {
                for (s = 0; (r = t[s++]); )
                  i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                o !== (a = gt(i)) && n.setAttribute("class", a);
              }
          return this;
        },
        removeClass: function (e) {
          var t,
            n,
            i,
            o,
            r,
            s,
            a,
            l = 0;
          if (m(e))
            return this.each(function (t) {
              w(this).removeClass(e.call(this, t, vt(this)));
            });
          if (!arguments.length) return this.attr("class", "");
          if ((t = yt(e)).length)
            for (; (n = this[l++]); )
              if (((o = vt(n)), (i = 1 === n.nodeType && " " + gt(o) + " "))) {
                for (s = 0; (r = t[s++]); )
                  for (; i.indexOf(" " + r + " ") > -1; )
                    i = i.replace(" " + r + " ", " ");
                o !== (a = gt(i)) && n.setAttribute("class", a);
              }
          return this;
        },
        toggleClass: function (e, t) {
          var n = typeof e,
            i = "string" === n || Array.isArray(e);
          return "boolean" == typeof t && i
            ? t
              ? this.addClass(e)
              : this.removeClass(e)
            : m(e)
            ? this.each(function (n) {
                w(this).toggleClass(e.call(this, n, vt(this), t), t);
              })
            : this.each(function () {
                var t, o, r, s;
                if (i)
                  for (o = 0, r = w(this), s = yt(e); (t = s[o++]); )
                    r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else
                  (void 0 !== e && "boolean" !== n) ||
                    ((t = vt(this)) && Z.set(this, "__className__", t),
                    this.setAttribute &&
                      this.setAttribute(
                        "class",
                        t || !1 === e ? "" : Z.get(this, "__className__") || ""
                      ));
              });
        },
        hasClass: function (e) {
          var t,
            n,
            i = 0;
          for (t = " " + e + " "; (n = this[i++]); )
            if (1 === n.nodeType && (" " + gt(vt(n)) + " ").indexOf(t) > -1)
              return !0;
          return !1;
        },
      });
    var bt = /\r/g;
    w.fn.extend({
      val: function (e) {
        var t,
          n,
          i,
          o = this[0];
        return arguments.length
          ? ((i = m(e)),
            this.each(function (n) {
              var o;
              1 === this.nodeType &&
                (null == (o = i ? e.call(this, n, w(this).val()) : e)
                  ? (o = "")
                  : "number" == typeof o
                  ? (o += "")
                  : Array.isArray(o) &&
                    (o = w.map(o, function (e) {
                      return null == e ? "" : e + "";
                    })),
                ((t =
                  w.valHooks[this.type] ||
                  w.valHooks[this.nodeName.toLowerCase()]) &&
                  "set" in t &&
                  void 0 !== t.set(this, o, "value")) ||
                  (this.value = o));
            }))
          : o
          ? (t = w.valHooks[o.type] || w.valHooks[o.nodeName.toLowerCase()]) &&
            "get" in t &&
            void 0 !== (n = t.get(o, "value"))
            ? n
            : "string" == typeof (n = o.value)
            ? n.replace(bt, "")
            : null == n
            ? ""
            : n
          : void 0;
      },
    }),
      w.extend({
        valHooks: {
          option: {
            get: function (e) {
              var t = w.find.attr(e, "value");
              return null != t ? t : gt(w.text(e));
            },
          },
          select: {
            get: function (e) {
              var t,
                n,
                i,
                o = e.options,
                r = e.selectedIndex,
                s = "select-one" === e.type,
                a = s ? null : [],
                l = s ? r + 1 : o.length;
              for (i = r < 0 ? l : s ? r : 0; i < l; i++)
                if (
                  ((n = o[i]).selected || i === r) &&
                  !n.disabled &&
                  (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))
                ) {
                  if (((t = w(n).val()), s)) return t;
                  a.push(t);
                }
              return a;
            },
            set: function (e, t) {
              for (
                var n, i, o = e.options, r = w.makeArray(t), s = o.length;
                s--;

              )
                ((i = o[s]).selected =
                  w.inArray(w.valHooks.option.get(i), r) > -1) && (n = !0);
              return n || (e.selectedIndex = -1), r;
            },
          },
        },
      }),
      w.each(["radio", "checkbox"], function () {
        (w.valHooks[this] = {
          set: function (e, t) {
            if (Array.isArray(t))
              return (e.checked = w.inArray(w(e).val(), t) > -1);
          },
        }),
          h.checkOn ||
            (w.valHooks[this].get = function (e) {
              return null === e.getAttribute("value") ? "on" : e.value;
            });
      }),
      (h.focusin = "onfocusin" in e);
    var wt = /^(?:focusinfocus|focusoutblur)$/,
      xt = function (e) {
        e.stopPropagation();
      };
    w.extend(w.event, {
      trigger: function (t, n, o, r) {
        var s,
          a,
          l,
          c,
          u,
          p,
          f,
          h,
          v = [o || i],
          y = d.call(t, "type") ? t.type : t,
          b = d.call(t, "namespace") ? t.namespace.split(".") : [];
        if (
          ((a = h = l = o = o || i),
          3 !== o.nodeType &&
            8 !== o.nodeType &&
            !wt.test(y + w.event.triggered) &&
            (y.indexOf(".") > -1 &&
              ((b = y.split(".")), (y = b.shift()), b.sort()),
            (u = y.indexOf(":") < 0 && "on" + y),
            ((t = t[w.expando]
              ? t
              : new w.Event(y, "object" == typeof t && t)).isTrigger = r
              ? 2
              : 3),
            (t.namespace = b.join(".")),
            (t.rnamespace = t.namespace
              ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (t.result = void 0),
            t.target || (t.target = o),
            (n = null == n ? [t] : w.makeArray(n, [t])),
            (f = w.event.special[y] || {}),
            r || !f.trigger || !1 !== f.trigger.apply(o, n)))
        ) {
          if (!r && !f.noBubble && !g(o)) {
            for (
              c = f.delegateType || y, wt.test(c + y) || (a = a.parentNode);
              a;
              a = a.parentNode
            )
              v.push(a), (l = a);
            l === (o.ownerDocument || i) &&
              v.push(l.defaultView || l.parentWindow || e);
          }
          for (s = 0; (a = v[s++]) && !t.isPropagationStopped(); )
            (h = a),
              (t.type = s > 1 ? c : f.bindType || y),
              (p = (Z.get(a, "events") || {})[t.type] && Z.get(a, "handle")) &&
                p.apply(a, n),
              (p = u && a[u]) &&
                p.apply &&
                V(a) &&
                ((t.result = p.apply(a, n)),
                !1 === t.result && t.preventDefault());
          return (
            (t.type = y),
            r ||
              t.isDefaultPrevented() ||
              (f._default && !1 !== f._default.apply(v.pop(), n)) ||
              !V(o) ||
              (u &&
                m(o[y]) &&
                !g(o) &&
                ((l = o[u]) && (o[u] = null),
                (w.event.triggered = y),
                t.isPropagationStopped() && h.addEventListener(y, xt),
                o[y](),
                t.isPropagationStopped() && h.removeEventListener(y, xt),
                (w.event.triggered = void 0),
                l && (o[u] = l))),
            t.result
          );
        }
      },
      simulate: function (e, t, n) {
        var i = w.extend(new w.Event(), n, {
          type: e,
          isSimulated: !0,
        });
        w.event.trigger(i, null, t);
      },
    }),
      w.fn.extend({
        trigger: function (e, t) {
          return this.each(function () {
            w.event.trigger(e, t, this);
          });
        },
        triggerHandler: function (e, t) {
          var n = this[0];
          if (n) return w.event.trigger(e, t, n, !0);
        },
      }),
      h.focusin ||
        w.each(
          {
            focus: "focusin",
            blur: "focusout",
          },
          function (e, t) {
            var n = function (e) {
              w.event.simulate(t, e.target, w.event.fix(e));
            };
            w.event.special[t] = {
              setup: function () {
                var i = this.ownerDocument || this,
                  o = Z.access(i, t);
                o || i.addEventListener(e, n, !0), Z.access(i, t, (o || 0) + 1);
              },
              teardown: function () {
                var i = this.ownerDocument || this,
                  o = Z.access(i, t) - 1;
                o
                  ? Z.access(i, t, o)
                  : (i.removeEventListener(e, n, !0), Z.remove(i, t));
              },
            };
          }
        );
    var Tt = e.location,
      kt = Date.now(),
      Ct = /\?/;
    w.parseXML = function (t) {
      var n;
      if (!t || "string" != typeof t) return null;
      try {
        n = new e.DOMParser().parseFromString(t, "text/xml");
      } catch (e) {
        n = void 0;
      }
      return (
        (n && !n.getElementsByTagName("parsererror").length) ||
          w.error("Invalid XML: " + t),
        n
      );
    };
    var St = /\[\]$/,
      Et = /\r?\n/g,
      At = /^(?:submit|button|image|reset|file)$/i,
      Dt = /^(?:input|select|textarea|keygen)/i;
    function $t(e, t, n, i) {
      var o;
      if (Array.isArray(t))
        w.each(t, function (t, o) {
          n || St.test(e)
            ? i(e, o)
            : $t(
                e + "[" + ("object" == typeof o && null != o ? t : "") + "]",
                o,
                n,
                i
              );
        });
      else if (n || "object" !== b(t)) i(e, t);
      else for (o in t) $t(e + "[" + o + "]", t[o], n, i);
    }
    (w.param = function (e, t) {
      var n,
        i = [],
        o = function (e, t) {
          var n = m(t) ? t() : t;
          i[i.length] =
            encodeURIComponent(e) +
            "=" +
            encodeURIComponent(null == n ? "" : n);
        };
      if (null == e) return "";
      if (Array.isArray(e) || (e.jquery && !w.isPlainObject(e)))
        w.each(e, function () {
          o(this.name, this.value);
        });
      else for (n in e) $t(n, e[n], t, o);
      return i.join("&");
    }),
      w.fn.extend({
        serialize: function () {
          return w.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            var e = w.prop(this, "elements");
            return e ? w.makeArray(e) : this;
          })
            .filter(function () {
              var e = this.type;
              return (
                this.name &&
                !w(this).is(":disabled") &&
                Dt.test(this.nodeName) &&
                !At.test(e) &&
                (this.checked || !pe.test(e))
              );
            })
            .map(function (e, t) {
              var n = w(this).val();
              return null == n
                ? null
                : Array.isArray(n)
                ? w.map(n, function (e) {
                    return {
                      name: t.name,
                      value: e.replace(Et, "\r\n"),
                    };
                  })
                : {
                    name: t.name,
                    value: n.replace(Et, "\r\n"),
                  };
            })
            .get();
        },
      });
    var It = /%20/g,
      Ot = /#.*$/,
      Lt = /([?&])_=[^&]*/,
      jt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Nt = /^(?:GET|HEAD)$/,
      Pt = /^\/\//,
      _t = {},
      Mt = {},
      Ht = "*/".concat("*"),
      qt = i.createElement("a");
    function Rt(e) {
      return function (t, n) {
        "string" != typeof t && ((n = t), (t = "*"));
        var i,
          o = 0,
          r = t.toLowerCase().match(P) || [];
        if (m(n))
          for (; (i = r[o++]); )
            "+" === i[0]
              ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
              : (e[i] = e[i] || []).push(n);
      };
    }
    function Ft(e, t, n, i) {
      var o = {},
        r = e === Mt;
      function s(a) {
        var l;
        return (
          (o[a] = !0),
          w.each(e[a] || [], function (e, a) {
            var c = a(t, n, i);
            return "string" != typeof c || r || o[c]
              ? r
                ? !(l = c)
                : void 0
              : (t.dataTypes.unshift(c), s(c), !1);
          }),
          l
        );
      }
      return s(t.dataTypes[0]) || (!o["*"] && s("*"));
    }
    function zt(e, t) {
      var n,
        i,
        o = w.ajaxSettings.flatOptions || {};
      for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
      return i && w.extend(!0, e, i), e;
    }
    (qt.href = Tt.href),
      w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: Tt.href,
          type: "GET",
          isLocal:
            /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
              Tt.protocol
            ),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": Ht,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript",
          },
          contents: {
            xml: /\bxml\b/,
            html: /\bhtml/,
            json: /\bjson\b/,
          },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON",
          },
          converters: {
            "* text": String,
            "text html": !0,
            "text json": JSON.parse,
            "text xml": w.parseXML,
          },
          flatOptions: {
            url: !0,
            context: !0,
          },
        },
        ajaxSetup: function (e, t) {
          return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e);
        },
        ajaxPrefilter: Rt(_t),
        ajaxTransport: Rt(Mt),
        ajax: function (t, n) {
          "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
          var o,
            r,
            s,
            a,
            l,
            c,
            u,
            d,
            p,
            f,
            h = w.ajaxSetup({}, n),
            m = h.context || h,
            g = h.context && (m.nodeType || m.jquery) ? w(m) : w.event,
            v = w.Deferred(),
            y = w.Callbacks("once memory"),
            b = h.statusCode || {},
            x = {},
            T = {},
            k = "canceled",
            C = {
              readyState: 0,
              getResponseHeader: function (e) {
                var t;
                if (u) {
                  if (!a)
                    for (a = {}; (t = jt.exec(s)); )
                      a[t[1].toLowerCase() + " "] = (
                        a[t[1].toLowerCase() + " "] || []
                      ).concat(t[2]);
                  t = a[e.toLowerCase() + " "];
                }
                return null == t ? null : t.join(", ");
              },
              getAllResponseHeaders: function () {
                return u ? s : null;
              },
              setRequestHeader: function (e, t) {
                return (
                  null == u &&
                    ((e = T[e.toLowerCase()] = T[e.toLowerCase()] || e),
                    (x[e] = t)),
                  this
                );
              },
              overrideMimeType: function (e) {
                return null == u && (h.mimeType = e), this;
              },
              statusCode: function (e) {
                var t;
                if (e)
                  if (u) C.always(e[C.status]);
                  else for (t in e) b[t] = [b[t], e[t]];
                return this;
              },
              abort: function (e) {
                var t = e || k;
                return o && o.abort(t), S(0, t), this;
              },
            };
          if (
            (v.promise(C),
            (h.url = ((t || h.url || Tt.href) + "").replace(
              Pt,
              Tt.protocol + "//"
            )),
            (h.type = n.method || n.type || h.method || h.type),
            (h.dataTypes = (h.dataType || "*").toLowerCase().match(P) || [""]),
            null == h.crossDomain)
          ) {
            c = i.createElement("a");
            try {
              (c.href = h.url),
                (c.href = c.href),
                (h.crossDomain =
                  qt.protocol + "//" + qt.host != c.protocol + "//" + c.host);
            } catch (e) {
              h.crossDomain = !0;
            }
          }
          if (
            (h.data &&
              h.processData &&
              "string" != typeof h.data &&
              (h.data = w.param(h.data, h.traditional)),
            Ft(_t, h, n, C),
            u)
          )
            return C;
          for (p in ((d = w.event && h.global) &&
            0 == w.active++ &&
            w.event.trigger("ajaxStart"),
          (h.type = h.type.toUpperCase()),
          (h.hasContent = !Nt.test(h.type)),
          (r = h.url.replace(Ot, "")),
          h.hasContent
            ? h.data &&
              h.processData &&
              0 ===
                (h.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              (h.data = h.data.replace(It, "+"))
            : ((f = h.url.slice(r.length)),
              h.data &&
                (h.processData || "string" == typeof h.data) &&
                ((r += (Ct.test(r) ? "&" : "?") + h.data), delete h.data),
              !1 === h.cache &&
                ((r = r.replace(Lt, "$1")),
                (f = (Ct.test(r) ? "&" : "?") + "_=" + kt++ + f)),
              (h.url = r + f)),
          h.ifModified &&
            (w.lastModified[r] &&
              C.setRequestHeader("If-Modified-Since", w.lastModified[r]),
            w.etag[r] && C.setRequestHeader("If-None-Match", w.etag[r])),
          ((h.data && h.hasContent && !1 !== h.contentType) || n.contentType) &&
            C.setRequestHeader("Content-Type", h.contentType),
          C.setRequestHeader(
            "Accept",
            h.dataTypes[0] && h.accepts[h.dataTypes[0]]
              ? h.accepts[h.dataTypes[0]] +
                  ("*" !== h.dataTypes[0] ? ", " + Ht + "; q=0.01" : "")
              : h.accepts["*"]
          ),
          h.headers))
            C.setRequestHeader(p, h.headers[p]);
          if (h.beforeSend && (!1 === h.beforeSend.call(m, C, h) || u))
            return C.abort();
          if (
            ((k = "abort"),
            y.add(h.complete),
            C.done(h.success),
            C.fail(h.error),
            (o = Ft(Mt, h, n, C)))
          ) {
            if (((C.readyState = 1), d && g.trigger("ajaxSend", [C, h]), u))
              return C;
            h.async &&
              h.timeout > 0 &&
              (l = e.setTimeout(function () {
                C.abort("timeout");
              }, h.timeout));
            try {
              (u = !1), o.send(x, S);
            } catch (e) {
              if (u) throw e;
              S(-1, e);
            }
          } else S(-1, "No Transport");
          function S(t, n, i, a) {
            var c,
              p,
              f,
              x,
              T,
              k = n;
            u ||
              ((u = !0),
              l && e.clearTimeout(l),
              (o = void 0),
              (s = a || ""),
              (C.readyState = t > 0 ? 4 : 0),
              (c = (t >= 200 && t < 300) || 304 === t),
              i &&
                (x = (function (e, t, n) {
                  for (
                    var i, o, r, s, a = e.contents, l = e.dataTypes;
                    "*" === l[0];

                  )
                    l.shift(),
                      void 0 === i &&
                        (i = e.mimeType || t.getResponseHeader("Content-Type"));
                  if (i)
                    for (o in a)
                      if (a[o] && a[o].test(i)) {
                        l.unshift(o);
                        break;
                      }
                  if (l[0] in n) r = l[0];
                  else {
                    for (o in n) {
                      if (!l[0] || e.converters[o + " " + l[0]]) {
                        r = o;
                        break;
                      }
                      s || (s = o);
                    }
                    r = r || s;
                  }
                  if (r) return r !== l[0] && l.unshift(r), n[r];
                })(h, C, i)),
              (x = (function (e, t, n, i) {
                var o,
                  r,
                  s,
                  a,
                  l,
                  c = {},
                  u = e.dataTypes.slice();
                if (u[1])
                  for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                for (r = u.shift(); r; )
                  if (
                    (e.responseFields[r] && (n[e.responseFields[r]] = t),
                    !l &&
                      i &&
                      e.dataFilter &&
                      (t = e.dataFilter(t, e.dataType)),
                    (l = r),
                    (r = u.shift()))
                  )
                    if ("*" === r) r = l;
                    else if ("*" !== l && l !== r) {
                      if (!(s = c[l + " " + r] || c["* " + r]))
                        for (o in c)
                          if (
                            (a = o.split(" "))[1] === r &&
                            (s = c[l + " " + a[0]] || c["* " + a[0]])
                          ) {
                            !0 === s
                              ? (s = c[o])
                              : !0 !== c[o] && ((r = a[0]), u.unshift(a[1]));
                            break;
                          }
                      if (!0 !== s)
                        if (s && e.throws) t = s(t);
                        else
                          try {
                            t = s(t);
                          } catch (e) {
                            return {
                              state: "parsererror",
                              error: s
                                ? e
                                : "No conversion from " + l + " to " + r,
                            };
                          }
                    }
                return {
                  state: "success",
                  data: t,
                };
              })(h, x, C, c)),
              c
                ? (h.ifModified &&
                    ((T = C.getResponseHeader("Last-Modified")) &&
                      (w.lastModified[r] = T),
                    (T = C.getResponseHeader("etag")) && (w.etag[r] = T)),
                  204 === t || "HEAD" === h.type
                    ? (k = "nocontent")
                    : 304 === t
                    ? (k = "notmodified")
                    : ((k = x.state), (p = x.data), (c = !(f = x.error))))
                : ((f = k), (!t && k) || ((k = "error"), t < 0 && (t = 0))),
              (C.status = t),
              (C.statusText = (n || k) + ""),
              c ? v.resolveWith(m, [p, k, C]) : v.rejectWith(m, [C, k, f]),
              C.statusCode(b),
              (b = void 0),
              d &&
                g.trigger(c ? "ajaxSuccess" : "ajaxError", [C, h, c ? p : f]),
              y.fireWith(m, [C, k]),
              d &&
                (g.trigger("ajaxComplete", [C, h]),
                --w.active || w.event.trigger("ajaxStop")));
          }
          return C;
        },
        getJSON: function (e, t, n) {
          return w.get(e, t, n, "json");
        },
        getScript: function (e, t) {
          return w.get(e, void 0, t, "script");
        },
      }),
      w.each(["get", "post"], function (e, t) {
        w[t] = function (e, n, i, o) {
          return (
            m(n) && ((o = o || i), (i = n), (n = void 0)),
            w.ajax(
              w.extend(
                {
                  url: e,
                  type: t,
                  dataType: o,
                  data: n,
                  success: i,
                },
                w.isPlainObject(e) && e
              )
            )
          );
        };
      }),
      (w._evalUrl = function (e, t) {
        return w.ajax({
          url: e,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          converters: {
            "text script": function () {},
          },
          dataFilter: function (e) {
            w.globalEval(e, t);
          },
        });
      }),
      w.fn.extend({
        wrapAll: function (e) {
          var t;
          return (
            this[0] &&
              (m(e) && (e = e.call(this[0])),
              (t = w(e, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && t.insertBefore(this[0]),
              t
                .map(function () {
                  for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                  return e;
                })
                .append(this)),
            this
          );
        },
        wrapInner: function (e) {
          return m(e)
            ? this.each(function (t) {
                w(this).wrapInner(e.call(this, t));
              })
            : this.each(function () {
                var t = w(this),
                  n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
              });
        },
        wrap: function (e) {
          var t = m(e);
          return this.each(function (n) {
            w(this).wrapAll(t ? e.call(this, n) : e);
          });
        },
        unwrap: function (e) {
          return (
            this.parent(e)
              .not("body")
              .each(function () {
                w(this).replaceWith(this.childNodes);
              }),
            this
          );
        },
      }),
      (w.expr.pseudos.hidden = function (e) {
        return !w.expr.pseudos.visible(e);
      }),
      (w.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
      }),
      (w.ajaxSettings.xhr = function () {
        try {
          return new e.XMLHttpRequest();
        } catch (e) {}
      });
    var Wt = {
        0: 200,
        1223: 204,
      },
      Bt = w.ajaxSettings.xhr();
    (h.cors = !!Bt && "withCredentials" in Bt),
      (h.ajax = Bt = !!Bt),
      w.ajaxTransport(function (t) {
        var n, i;
        if (h.cors || (Bt && !t.crossDomain))
          return {
            send: function (o, r) {
              var s,
                a = t.xhr();
              if (
                (a.open(t.type, t.url, t.async, t.username, t.password),
                t.xhrFields)
              )
                for (s in t.xhrFields) a[s] = t.xhrFields[s];
              for (s in (t.mimeType &&
                a.overrideMimeType &&
                a.overrideMimeType(t.mimeType),
              t.crossDomain ||
                o["X-Requested-With"] ||
                (o["X-Requested-With"] = "XMLHttpRequest"),
              o))
                a.setRequestHeader(s, o[s]);
              (n = function (e) {
                return function () {
                  n &&
                    ((n =
                      i =
                      a.onload =
                      a.onerror =
                      a.onabort =
                      a.ontimeout =
                      a.onreadystatechange =
                        null),
                    "abort" === e
                      ? a.abort()
                      : "error" === e
                      ? "number" != typeof a.status
                        ? r(0, "error")
                        : r(a.status, a.statusText)
                      : r(
                          Wt[a.status] || a.status,
                          a.statusText,
                          "text" !== (a.responseType || "text") ||
                            "string" != typeof a.responseText
                            ? {
                                binary: a.response,
                              }
                            : {
                                text: a.responseText,
                              },
                          a.getAllResponseHeaders()
                        ));
                };
              }),
                (a.onload = n()),
                (i = a.onerror = a.ontimeout = n("error")),
                void 0 !== a.onabort
                  ? (a.onabort = i)
                  : (a.onreadystatechange = function () {
                      4 === a.readyState &&
                        e.setTimeout(function () {
                          n && i();
                        });
                    }),
                (n = n("abort"));
              try {
                a.send((t.hasContent && t.data) || null);
              } catch (e) {
                if (n) throw e;
              }
            },
            abort: function () {
              n && n();
            },
          };
      }),
      w.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1);
      }),
      w.ajaxSetup({
        accepts: {
          script:
            "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
        },
        contents: {
          script: /\b(?:java|ecma)script\b/,
        },
        converters: {
          "text script": function (e) {
            return w.globalEval(e), e;
          },
        },
      }),
      w.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
      }),
      w.ajaxTransport("script", function (e) {
        var t, n;
        if (e.crossDomain || e.scriptAttrs)
          return {
            send: function (o, r) {
              (t = w("<script>")
                .attr(e.scriptAttrs || {})
                .prop({
                  charset: e.scriptCharset,
                  src: e.url,
                })
                .on(
                  "load error",
                  (n = function (e) {
                    t.remove(),
                      (n = null),
                      e && r("error" === e.type ? 404 : 200, e.type);
                  })
                )),
                i.head.appendChild(t[0]);
            },
            abort: function () {
              n && n();
            },
          };
      });
    var Ut,
      Xt = [],
      Vt = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var e = Xt.pop() || w.expando + "_" + kt++;
        return (this[e] = !0), e;
      },
    }),
      w.ajaxPrefilter("json jsonp", function (t, n, i) {
        var o,
          r,
          s,
          a =
            !1 !== t.jsonp &&
            (Vt.test(t.url)
              ? "url"
              : "string" == typeof t.data &&
                0 ===
                  (t.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                Vt.test(t.data) &&
                "data");
        if (a || "jsonp" === t.dataTypes[0])
          return (
            (o = t.jsonpCallback =
              m(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
            a
              ? (t[a] = t[a].replace(Vt, "$1" + o))
              : !1 !== t.jsonp &&
                (t.url += (Ct.test(t.url) ? "&" : "?") + t.jsonp + "=" + o),
            (t.converters["script json"] = function () {
              return s || w.error(o + " was not called"), s[0];
            }),
            (t.dataTypes[0] = "json"),
            (r = e[o]),
            (e[o] = function () {
              s = arguments;
            }),
            i.always(function () {
              void 0 === r ? w(e).removeProp(o) : (e[o] = r),
                t[o] && ((t.jsonpCallback = n.jsonpCallback), Xt.push(o)),
                s && m(r) && r(s[0]),
                (s = r = void 0);
            }),
            "script"
          );
      }),
      (h.createHTMLDocument =
        (((Ut = i.implementation.createHTMLDocument("").body).innerHTML =
          "<form></form><form></form>"),
        2 === Ut.childNodes.length)),
      (w.parseHTML = function (e, t, n) {
        return "string" != typeof e
          ? []
          : ("boolean" == typeof t && ((n = t), (t = !1)),
            t ||
              (h.createHTMLDocument
                ? (((o = (t =
                    i.implementation.createHTMLDocument("")).createElement(
                    "base"
                  )).href = i.location.href),
                  t.head.appendChild(o))
                : (t = i)),
            (s = !n && []),
            (r = D.exec(e))
              ? [t.createElement(r[1])]
              : ((r = xe([e], t, s)),
                s && s.length && w(s).remove(),
                w.merge([], r.childNodes)));
        var o, r, s;
      }),
      (w.fn.load = function (e, t, n) {
        var i,
          o,
          r,
          s = this,
          a = e.indexOf(" ");
        return (
          a > -1 && ((i = gt(e.slice(a))), (e = e.slice(0, a))),
          m(t)
            ? ((n = t), (t = void 0))
            : t && "object" == typeof t && (o = "POST"),
          s.length > 0 &&
            w
              .ajax({
                url: e,
                type: o || "GET",
                dataType: "html",
                data: t,
              })
              .done(function (e) {
                (r = arguments),
                  s.html(i ? w("<div>").append(w.parseHTML(e)).find(i) : e);
              })
              .always(
                n &&
                  function (e, t) {
                    s.each(function () {
                      n.apply(this, r || [e.responseText, t, e]);
                    });
                  }
              ),
          this
        );
      }),
      w.each(
        [
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend",
        ],
        function (e, t) {
          w.fn[t] = function (e) {
            return this.on(t, e);
          };
        }
      ),
      (w.expr.pseudos.animated = function (e) {
        return w.grep(w.timers, function (t) {
          return e === t.elem;
        }).length;
      }),
      (w.offset = {
        setOffset: function (e, t, n) {
          var i,
            o,
            r,
            s,
            a,
            l,
            c = w.css(e, "position"),
            u = w(e),
            d = {};
          "static" === c && (e.style.position = "relative"),
            (a = u.offset()),
            (r = w.css(e, "top")),
            (l = w.css(e, "left")),
            ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1
              ? ((s = (i = u.position()).top), (o = i.left))
              : ((s = parseFloat(r) || 0), (o = parseFloat(l) || 0)),
            m(t) && (t = t.call(e, n, w.extend({}, a))),
            null != t.top && (d.top = t.top - a.top + s),
            null != t.left && (d.left = t.left - a.left + o),
            "using" in t ? t.using.call(e, d) : u.css(d);
        },
      }),
      w.fn.extend({
        offset: function (e) {
          if (arguments.length)
            return void 0 === e
              ? this
              : this.each(function (t) {
                  w.offset.setOffset(this, e, t);
                });
          var t,
            n,
            i = this[0];
          return i
            ? i.getClientRects().length
              ? ((t = i.getBoundingClientRect()),
                (n = i.ownerDocument.defaultView),
                {
                  top: t.top + n.pageYOffset,
                  left: t.left + n.pageXOffset,
                })
              : {
                  top: 0,
                  left: 0,
                }
            : void 0;
        },
        position: function () {
          if (this[0]) {
            var e,
              t,
              n,
              i = this[0],
              o = {
                top: 0,
                left: 0,
              };
            if ("fixed" === w.css(i, "position")) t = i.getBoundingClientRect();
            else {
              for (
                t = this.offset(),
                  n = i.ownerDocument,
                  e = i.offsetParent || n.documentElement;
                e &&
                (e === n.body || e === n.documentElement) &&
                "static" === w.css(e, "position");

              )
                e = e.parentNode;
              e &&
                e !== i &&
                1 === e.nodeType &&
                (((o = w(e).offset()).top += w.css(e, "borderTopWidth", !0)),
                (o.left += w.css(e, "borderLeftWidth", !0)));
            }
            return {
              top: t.top - o.top - w.css(i, "marginTop", !0),
              left: t.left - o.left - w.css(i, "marginLeft", !0),
            };
          }
        },
        offsetParent: function () {
          return this.map(function () {
            for (
              var e = this.offsetParent;
              e && "static" === w.css(e, "position");

            )
              e = e.offsetParent;
            return e || ie;
          });
        },
      }),
      w.each(
        {
          scrollLeft: "pageXOffset",
          scrollTop: "pageYOffset",
        },
        function (e, t) {
          var n = "pageYOffset" === t;
          w.fn[e] = function (i) {
            return z(
              this,
              function (e, i, o) {
                var r;
                if (
                  (g(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                  void 0 === o)
                )
                  return r ? r[t] : e[i];
                r
                  ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset)
                  : (e[i] = o);
              },
              e,
              i,
              arguments.length
            );
          };
        }
      ),
      w.each(["top", "left"], function (e, t) {
        w.cssHooks[t] = Be(h.pixelPosition, function (e, n) {
          if (n)
            return (n = We(e, t)), Re.test(n) ? w(e).position()[t] + "px" : n;
        });
      }),
      w.each(
        {
          Height: "height",
          Width: "width",
        },
        function (e, t) {
          w.each(
            {
              padding: "inner" + e,
              content: t,
              "": "outer" + e,
            },
            function (n, i) {
              w.fn[i] = function (o, r) {
                var s = arguments.length && (n || "boolean" != typeof o),
                  a = n || (!0 === o || !0 === r ? "margin" : "border");
                return z(
                  this,
                  function (t, n, o) {
                    var r;
                    return g(t)
                      ? 0 === i.indexOf("outer")
                        ? t["inner" + e]
                        : t.document.documentElement["client" + e]
                      : 9 === t.nodeType
                      ? ((r = t.documentElement),
                        Math.max(
                          t.body["scroll" + e],
                          r["scroll" + e],
                          t.body["offset" + e],
                          r["offset" + e],
                          r["client" + e]
                        ))
                      : void 0 === o
                      ? w.css(t, n, a)
                      : w.style(t, n, o, a);
                  },
                  t,
                  s ? o : void 0,
                  s
                );
              };
            }
          );
        }
      ),
      w.each(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
          " "
        ),
        function (e, t) {
          w.fn[t] = function (e, n) {
            return arguments.length > 0
              ? this.on(t, null, e, n)
              : this.trigger(t);
          };
        }
      ),
      w.fn.extend({
        hover: function (e, t) {
          return this.mouseenter(e).mouseleave(t || e);
        },
      }),
      w.fn.extend({
        bind: function (e, t, n) {
          return this.on(e, null, t, n);
        },
        unbind: function (e, t) {
          return this.off(e, null, t);
        },
        delegate: function (e, t, n, i) {
          return this.on(t, e, n, i);
        },
        undelegate: function (e, t, n) {
          return 1 === arguments.length
            ? this.off(e, "**")
            : this.off(t, e || "**", n);
        },
      }),
      (w.proxy = function (e, t) {
        var n, i, o;
        if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
          return (
            (i = r.call(arguments, 2)),
            ((o = function () {
              return e.apply(t || this, i.concat(r.call(arguments)));
            }).guid = e.guid =
              e.guid || w.guid++),
            o
          );
      }),
      (w.holdReady = function (e) {
        e ? w.readyWait++ : w.ready(!0);
      }),
      (w.isArray = Array.isArray),
      (w.parseJSON = JSON.parse),
      (w.nodeName = A),
      (w.isFunction = m),
      (w.isWindow = g),
      (w.camelCase = X),
      (w.type = b),
      (w.now = Date.now),
      (w.isNumeric = function (e) {
        var t = w.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
      }),
      "function" == typeof define &&
        define.amd &&
        define("jquery", [], function () {
          return w;
        });
    var Yt = e.jQuery,
      Zt = e.$;
    return (
      (w.noConflict = function (t) {
        return (
          e.$ === w && (e.$ = Zt), t && e.jQuery === w && (e.jQuery = Yt), w
        );
      }),
      t || (e.jQuery = e.$ = w),
      w
    );
  }),
  (function (e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : "object" == typeof exports && "function" == typeof require
      ? e(require("jquery"))
      : e(jQuery);
  })(function (e) {
    "use strict";
    var t = {
        escapeRegExChars: function (e) {
          return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
        },
        createNode: function (e) {
          var t = document.createElement("div");
          return (
            (t.className = e),
            (t.style.position = "absolute"),
            (t.style.display = "none"),
            t
          );
        },
      },
      n = 27,
      i = 9,
      o = 13,
      r = 38,
      s = 39,
      a = 40,
      l = e.noop;
    function c(t, n) {
      (this.element = t),
        (this.el = e(t)),
        (this.suggestions = []),
        (this.badQueries = []),
        (this.selectedIndex = -1),
        (this.currentValue = this.element.value),
        (this.timeoutId = null),
        (this.cachedResponse = {}),
        (this.onChangeTimeout = null),
        (this.onChange = null),
        (this.isLocal = !1),
        (this.suggestionsContainer = null),
        (this.noSuggestionsContainer = null),
        (this.options = e.extend(!0, {}, c.defaults, n)),
        (this.classes = {
          selected: "autocomplete-selected",
          suggestion: "autocomplete-suggestion",
        }),
        (this.hint = null),
        (this.hintValue = ""),
        (this.selection = null),
        this.initialize(),
        this.setOptions(n);
    }
    (c.utils = t),
      (e.Autocomplete = c),
      (c.defaults = {
        ajaxSettings: {},
        autoSelectFirst: !1,
        appendTo: "body",
        serviceUrl: null,
        lookup: null,
        onSelect: null,
        width: "auto",
        minChars: 1,
        maxHeight: 300,
        deferRequestBy: 0,
        params: {},
        formatResult: function (e, n) {
          if (!n) return e.value;
          var i = "(" + t.escapeRegExChars(n) + ")";
          return e.value
            .replace(new RegExp(i, "gi"), "<strong>$1</strong>")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/&lt;(\/?strong)&gt;/g, "<$1>");
        },
        formatGroup: function (e, t) {
          return '<div class="autocomplete-group">' + t + "</div>";
        },
        delimiter: null,
        zIndex: 9999,
        type: "GET",
        noCache: !1,
        onSearchStart: l,
        onSearchComplete: l,
        onSearchError: l,
        preserveInput: !1,
        containerClass: "autocomplete-suggestions",
        tabDisabled: !1,
        dataType: "text",
        currentRequest: null,
        triggerSelectOnValidInput: !0,
        preventBadQueries: !0,
        lookupFilter: function (e, t, n) {
          return -1 !== e.value.toLowerCase().indexOf(n);
        },
        paramName: "query",
        transformResult: function (t) {
          return "string" == typeof t ? e.parseJSON(t) : t;
        },
        showNoSuggestionNotice: !1,
        noSuggestionNotice: "No results",
        orientation: "bottom",
        forceFixPosition: !1,
      }),
      (c.prototype = {
        initialize: function () {
          var t,
            n = this,
            i = "." + n.classes.suggestion,
            o = n.classes.selected,
            r = n.options;
          n.element.setAttribute("autocomplete", "off"),
            (n.noSuggestionsContainer = e(
              '<div class="autocomplete-no-suggestion"></div>'
            )
              .html(this.options.noSuggestionNotice)
              .get(0)),
            (n.suggestionsContainer = c.utils.createNode(r.containerClass)),
            (t = e(n.suggestionsContainer)).appendTo(r.appendTo || "body"),
            "auto" !== r.width && t.css("width", r.width),
            t.on("mouseover.autocomplete", i, function () {
              n.activate(e(this).data("index"));
            }),
            t.on("mouseout.autocomplete", function () {
              (n.selectedIndex = -1), t.children("." + o).removeClass(o);
            }),
            t.on("click.autocomplete", i, function () {
              n.select(e(this).data("index"));
            }),
            t.on("click.autocomplete", function () {
              clearTimeout(n.blurTimeoutId);
            }),
            (n.fixPositionCapture = function () {
              n.visible && n.fixPosition();
            }),
            e(window).on("resize.autocomplete", n.fixPositionCapture),
            n.el.on("keydown.autocomplete", function (e) {
              n.onKeyPress(e);
            }),
            n.el.on("keyup.autocomplete", function (e) {
              n.onKeyUp(e);
            }),
            n.el.on("blur.autocomplete", function () {
              n.onBlur();
            }),
            n.el.on("focus.autocomplete", function () {
              n.onFocus();
            }),
            n.el.on("change.autocomplete", function (e) {
              n.onKeyUp(e);
            }),
            n.el.on("input.autocomplete", function (e) {
              n.onKeyUp(e);
            });
        },
        onFocus: function () {
          this.disabled ||
            (this.fixPosition(),
            this.el.val().length >= this.options.minChars &&
              this.onValueChange());
        },
        onBlur: function () {
          var t = this,
            n = t.options,
            i = t.el.val(),
            o = t.getQuery(i);
          t.blurTimeoutId = setTimeout(function () {
            t.hide(),
              t.selection &&
                t.currentValue !== o &&
                (n.onInvalidateSelection || e.noop).call(t.element);
          }, 200);
        },
        abortAjax: function () {
          this.currentRequest &&
            (this.currentRequest.abort(), (this.currentRequest = null));
        },
        setOptions: function (t) {
          var n = e.extend({}, this.options, t);
          (this.isLocal = Array.isArray(n.lookup)),
            this.isLocal && (n.lookup = this.verifySuggestionsFormat(n.lookup)),
            (n.orientation = this.validateOrientation(n.orientation, "bottom")),
            e(this.suggestionsContainer).css({
              "max-height": n.maxHeight + "px",
              width: n.width + "px",
              "z-index": n.zIndex,
            }),
            (this.options = n);
        },
        clearCache: function () {
          (this.cachedResponse = {}), (this.badQueries = []);
        },
        clear: function () {
          this.clearCache(), (this.currentValue = ""), (this.suggestions = []);
        },
        disable: function () {
          (this.disabled = !0),
            clearTimeout(this.onChangeTimeout),
            this.abortAjax();
        },
        enable: function () {
          this.disabled = !1;
        },
        fixPosition: function () {
          var t = e(this.suggestionsContainer),
            n = t.parent().get(0);
          if (n === document.body || this.options.forceFixPosition) {
            var i = this.options.orientation,
              o = t.outerHeight(),
              r = this.el.outerHeight(),
              s = this.el.offset(),
              a = {
                top: s.top,
                left: s.left,
              };
            if ("auto" === i) {
              var l = e(window).height(),
                c = e(window).scrollTop(),
                u = -c + s.top - o,
                d = c + l - (s.top + r + o);
              i = Math.max(u, d) === u ? "top" : "bottom";
            }
            if (((a.top += "top" === i ? -o : r), n !== document.body)) {
              var p,
                f = t.css("opacity");
              this.visible || t.css("opacity", 0).show(),
                (p = t.offsetParent().offset()),
                (a.top -= p.top),
                (a.top += n.scrollTop),
                (a.left -= p.left),
                this.visible || t.css("opacity", f).hide();
            }
            "auto" === this.options.width &&
              (a.width = this.el.outerWidth() + "px"),
              t.css(a);
          }
        },
        isCursorAtEnd: function () {
          var e,
            t = this.el.val().length,
            n = this.element.selectionStart;
          return "number" == typeof n
            ? n === t
            : !document.selection ||
                ((e = document.selection.createRange()).moveStart(
                  "character",
                  -t
                ),
                t === e.text.length);
        },
        onKeyPress: function (e) {
          if (
            this.disabled ||
            this.visible ||
            e.which !== a ||
            !this.currentValue
          ) {
            if (!this.disabled && this.visible) {
              switch (e.which) {
                case n:
                  this.el.val(this.currentValue), this.hide();
                  break;
                case s:
                  if (
                    this.hint &&
                    this.options.onHint &&
                    this.isCursorAtEnd()
                  ) {
                    this.selectHint();
                    break;
                  }
                  return;
                case i:
                  if (this.hint && this.options.onHint)
                    return void this.selectHint();
                  if (-1 === this.selectedIndex) return void this.hide();
                  if (
                    (this.select(this.selectedIndex),
                    !1 === this.options.tabDisabled)
                  )
                    return;
                  break;
                case o:
                  if (-1 === this.selectedIndex) return void this.hide();
                  this.select(this.selectedIndex);
                  break;
                case r:
                  this.moveUp();
                  break;
                case a:
                  this.moveDown();
                  break;
                default:
                  return;
              }
              e.stopImmediatePropagation(), e.preventDefault();
            }
          } else this.suggest();
        },
        onKeyUp: function (e) {
          var t = this;
          if (!t.disabled) {
            switch (e.which) {
              case r:
              case a:
                return;
            }
            clearTimeout(t.onChangeTimeout),
              t.currentValue !== t.el.val() &&
                (t.findBestHint(),
                t.options.deferRequestBy > 0
                  ? (t.onChangeTimeout = setTimeout(function () {
                      t.onValueChange();
                    }, t.options.deferRequestBy))
                  : t.onValueChange());
          }
        },
        onValueChange: function () {
          if (this.ignoreValueChange) this.ignoreValueChange = !1;
          else {
            var t = this.options,
              n = this.el.val(),
              i = this.getQuery(n);
            this.selection &&
              this.currentValue !== i &&
              ((this.selection = null),
              (t.onInvalidateSelection || e.noop).call(this.element)),
              clearTimeout(this.onChangeTimeout),
              (this.currentValue = n),
              (this.selectedIndex = -1),
              t.triggerSelectOnValidInput && this.isExactMatch(i)
                ? this.select(0)
                : i.length < t.minChars
                ? this.hide()
                : this.getSuggestions(i);
          }
        },
        isExactMatch: function (e) {
          var t = this.suggestions;
          return 1 === t.length && t[0].value.toLowerCase() === e.toLowerCase();
        },
        getQuery: function (t) {
          var n,
            i = this.options.delimiter;
          return i ? ((n = t.split(i)), e.trim(n[n.length - 1])) : t;
        },
        getSuggestionsLocal: function (t) {
          var n,
            i = this.options,
            o = t.toLowerCase(),
            r = i.lookupFilter,
            s = parseInt(i.lookupLimit, 10);
          return (
            (n = {
              suggestions: e.grep(i.lookup, function (e) {
                return r(e, t, o);
              }),
            }),
            s &&
              n.suggestions.length > s &&
              (n.suggestions = n.suggestions.slice(0, s)),
            n
          );
        },
        getSuggestions: function (t) {
          var n,
            i,
            o,
            r,
            s = this,
            a = s.options,
            l = a.serviceUrl;
          (a.params[a.paramName] = t),
            !1 !== a.onSearchStart.call(s.element, a.params) &&
              ((i = a.ignoreParams ? null : a.params),
              e.isFunction(a.lookup)
                ? a.lookup(t, function (e) {
                    (s.suggestions = e.suggestions),
                      s.suggest(),
                      a.onSearchComplete.call(s.element, t, e.suggestions);
                  })
                : (s.isLocal
                    ? (n = s.getSuggestionsLocal(t))
                    : (e.isFunction(l) && (l = l.call(s.element, t)),
                      (o = l + "?" + e.param(i || {})),
                      (n = s.cachedResponse[o])),
                  n && Array.isArray(n.suggestions)
                    ? ((s.suggestions = n.suggestions),
                      s.suggest(),
                      a.onSearchComplete.call(s.element, t, n.suggestions))
                    : s.isBadQuery(t)
                    ? a.onSearchComplete.call(s.element, t, [])
                    : (s.abortAjax(),
                      (r = {
                        url: l,
                        data: i,
                        type: a.type,
                        dataType: a.dataType,
                      }),
                      e.extend(r, a.ajaxSettings),
                      (s.currentRequest = e
                        .ajax(r)
                        .done(function (e) {
                          var n;
                          (s.currentRequest = null),
                            (n = a.transformResult(e, t)),
                            s.processResponse(n, t, o),
                            a.onSearchComplete.call(
                              s.element,
                              t,
                              n.suggestions
                            );
                        })
                        .fail(function (e, n, i) {
                          a.onSearchError.call(s.element, t, e, n, i);
                        })))));
        },
        isBadQuery: function (e) {
          if (!this.options.preventBadQueries) return !1;
          for (var t = this.badQueries, n = t.length; n--; )
            if (0 === e.indexOf(t[n])) return !0;
          return !1;
        },
        hide: function () {
          var t = e(this.suggestionsContainer);
          e.isFunction(this.options.onHide) &&
            this.visible &&
            this.options.onHide.call(this.element, t),
            (this.visible = !1),
            (this.selectedIndex = -1),
            clearTimeout(this.onChangeTimeout),
            e(this.suggestionsContainer).hide(),
            this.signalHint(null);
        },
        suggest: function () {
          if (this.suggestions.length) {
            var t,
              n = this.options,
              i = n.groupBy,
              o = n.formatResult,
              r = this.getQuery(this.currentValue),
              s = this.classes.suggestion,
              a = this.classes.selected,
              l = e(this.suggestionsContainer),
              c = e(this.noSuggestionsContainer),
              u = n.beforeRender,
              d = "";
            n.triggerSelectOnValidInput && this.isExactMatch(r)
              ? this.select(0)
              : (e.each(this.suggestions, function (e, a) {
                  i &&
                    (d += (function (e, o) {
                      var r = e.data[i];
                      return t === r ? "" : ((t = r), n.formatGroup(e, t));
                    })(a, 0)),
                    (d +=
                      '<div class="' +
                      s +
                      '" data-index="' +
                      e +
                      '">' +
                      o(a, r, e) +
                      "</div>");
                }),
                this.adjustContainerWidth(),
                c.detach(),
                l.html(d),
                e.isFunction(u) && u.call(this.element, l, this.suggestions),
                this.fixPosition(),
                l.show(),
                n.autoSelectFirst &&
                  ((this.selectedIndex = 0),
                  l.scrollTop(0),
                  l
                    .children("." + s)
                    .first()
                    .addClass(a)),
                (this.visible = !0),
                this.findBestHint());
          } else
            this.options.showNoSuggestionNotice
              ? this.noSuggestions()
              : this.hide();
        },
        noSuggestions: function () {
          var t = this.options.beforeRender,
            n = e(this.suggestionsContainer),
            i = e(this.noSuggestionsContainer);
          this.adjustContainerWidth(),
            i.detach(),
            n.empty(),
            n.append(i),
            e.isFunction(t) && t.call(this.element, n, this.suggestions),
            this.fixPosition(),
            n.show(),
            (this.visible = !0);
        },
        adjustContainerWidth: function () {
          var t,
            n = this.options,
            i = e(this.suggestionsContainer);
          "auto" === n.width
            ? ((t = this.el.outerWidth()), i.css("width", t > 0 ? t : 300))
            : "flex" === n.width && i.css("width", "");
        },
        findBestHint: function () {
          var t = this.el.val().toLowerCase(),
            n = null;
          t &&
            (e.each(this.suggestions, function (e, i) {
              var o = 0 === i.value.toLowerCase().indexOf(t);
              return o && (n = i), !o;
            }),
            this.signalHint(n));
        },
        signalHint: function (t) {
          var n = "";
          t &&
            (n = this.currentValue + t.value.substr(this.currentValue.length)),
            this.hintValue !== n &&
              ((this.hintValue = n),
              (this.hint = t),
              (this.options.onHint || e.noop)(n));
        },
        verifySuggestionsFormat: function (t) {
          return t.length && "string" == typeof t[0]
            ? e.map(t, function (e) {
                return {
                  value: e,
                  data: null,
                };
              })
            : t;
        },
        validateOrientation: function (t, n) {
          return (
            (t = e.trim(t || "").toLowerCase()),
            -1 === e.inArray(t, ["auto", "bottom", "top"]) && (t = n),
            t
          );
        },
        processResponse: function (e, t, n) {
          var i = this.options;
          (e.suggestions = this.verifySuggestionsFormat(e.suggestions)),
            i.noCache ||
              ((this.cachedResponse[n] = e),
              i.preventBadQueries &&
                !e.suggestions.length &&
                this.badQueries.push(t)),
            t === this.getQuery(this.currentValue) &&
              ((this.suggestions = e.suggestions), this.suggest());
        },
        activate: function (t) {
          var n,
            i = this.classes.selected,
            o = e(this.suggestionsContainer),
            r = o.find("." + this.classes.suggestion);
          return (
            o.find("." + i).removeClass(i),
            (this.selectedIndex = t),
            -1 !== this.selectedIndex && r.length > this.selectedIndex
              ? ((n = r.get(this.selectedIndex)), e(n).addClass(i), n)
              : null
          );
        },
        selectHint: function () {
          var t = e.inArray(this.hint, this.suggestions);
          this.select(t);
        },
        select: function (e) {
          this.hide(), this.onSelect(e);
        },
        moveUp: function () {
          if (-1 !== this.selectedIndex)
            return 0 === this.selectedIndex
              ? (e(this.suggestionsContainer)
                  .children("." + this.classes.suggestion)
                  .first()
                  .removeClass(this.classes.selected),
                (this.selectedIndex = -1),
                (this.ignoreValueChange = !1),
                this.el.val(this.currentValue),
                void this.findBestHint())
              : void this.adjustScroll(this.selectedIndex - 1);
        },
        moveDown: function () {
          this.selectedIndex !== this.suggestions.length - 1 &&
            this.adjustScroll(this.selectedIndex + 1);
        },
        adjustScroll: function (t) {
          var n = this.activate(t);
          if (n) {
            var i,
              o,
              r,
              s = e(n).outerHeight();
            (i = n.offsetTop),
              (r =
                (o = e(this.suggestionsContainer).scrollTop()) +
                this.options.maxHeight -
                s),
              i < o
                ? e(this.suggestionsContainer).scrollTop(i)
                : i > r &&
                  e(this.suggestionsContainer).scrollTop(
                    i - this.options.maxHeight + s
                  ),
              this.options.preserveInput ||
                ((this.ignoreValueChange = !0),
                this.el.val(this.getValue(this.suggestions[t].value))),
              this.signalHint(null);
          }
        },
        onSelect: function (t) {
          var n = this.options.onSelect,
            i = this.suggestions[t];
          (this.currentValue = this.getValue(i.value)),
            this.currentValue === this.el.val() ||
              this.options.preserveInput ||
              this.el.val(this.currentValue),
            this.signalHint(null),
            (this.suggestions = []),
            (this.selection = i),
            e.isFunction(n) && n.call(this.element, i);
        },
        getValue: function (e) {
          var t,
            n,
            i = this.options.delimiter;
          return i
            ? 1 === (n = (t = this.currentValue).split(i)).length
              ? e
              : t.substr(0, t.length - n[n.length - 1].length) + e
            : e;
        },
        dispose: function () {
          this.el.off(".autocomplete").removeData("autocomplete"),
            e(window).off("resize.autocomplete", this.fixPositionCapture),
            e(this.suggestionsContainer).remove();
        },
      }),
      (e.fn.devbridgeAutocomplete = function (t, n) {
        return arguments.length
          ? this.each(function () {
              var i = e(this),
                o = i.data("autocomplete");
              "string" == typeof t
                ? o && "function" == typeof o[t] && o[t](n)
                : (o && o.dispose && o.dispose(),
                  (o = new c(this, t)),
                  i.data("autocomplete", o));
            })
          : this.first().data("autocomplete");
      }),
      e.fn.autocomplete || (e.fn.autocomplete = e.fn.devbridgeAutocomplete);
  }),
  (function (e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : "undefined" != typeof exports
      ? (module.exports = e(require("jquery")))
      : e(jQuery);
  })(function (e) {
    "use strict";
    var t = window.Slick || {};
    ((t = (function () {
      var t = 0;
      return function (n, i) {
        var o,
          r = this;
        (r.defaults = {
          accessibility: !0,
          adaptiveHeight: !1,
          appendArrows: e(n),
          appendDots: e(n),
          arrows: !0,
          asNavFor: null,
          prevArrow: '<div class="slick-prev"></div>',
          nextArrow: '<div class="slick-next"></div>',
          autoplay: !1,
          autoplaySpeed: 3e3,
          centerMode: !1,
          centerPadding: "50px",
          cssEase: "ease",
          customPaging: function (t, n) {
            return e("<div/>").text(n + 1);
          },
          dots: !1,
          dotsClass: "slick-dots",
          draggable: !0,
          easing: "linear",
          edgeFriction: 0.35,
          fade: !1,
          focusOnSelect: !1,
          focusOnChange: !1,
          infinite: !0,
          initialSlide: 0,
          lazyLoad: "ondemand",
          mobileFirst: !1,
          pauseOnHover: !0,
          pauseOnFocus: !0,
          pauseOnDotsHover: !1,
          respondTo: "window",
          responsive: null,
          rows: 1,
          rtl: !1,
          slide: "",
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          swipe: !0,
          swipeToSlide: !1,
          touchMove: !0,
          touchThreshold: 5,
          useCSS: !0,
          useTransform: !0,
          variableWidth: !1,
          vertical: !1,
          verticalSwiping: !1,
          waitForAnimate: !0,
          zIndex: 1e3,
        }),
          (r.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            scrolling: !1,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            swiping: !1,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1,
          }),
          e.extend(r, r.initials),
          (r.activeBreakpoint = null),
          (r.animType = null),
          (r.animProp = null),
          (r.breakpoints = []),
          (r.breakpointSettings = []),
          (r.cssTransitions = !1),
          (r.focussed = !1),
          (r.interrupted = !1),
          (r.hidden = "hidden"),
          (r.paused = !0),
          (r.positionProp = null),
          (r.respondTo = null),
          (r.rowCount = 1),
          (r.shouldClick = !0),
          (r.$slider = e(n)),
          (r.$slidesCache = null),
          (r.transformType = null),
          (r.transitionType = null),
          (r.visibilityChange = "visibilitychange"),
          (r.windowWidth = 0),
          (r.windowTimer = null),
          (o = e(n).data("slick") || {}),
          (r.options = e.extend({}, r.defaults, i, o)),
          (r.currentSlide = r.options.initialSlide),
          (r.originalSettings = r.options),
          void 0 !== document.mozHidden
            ? ((r.hidden = "mozHidden"),
              (r.visibilityChange = "mozvisibilitychange"))
            : void 0 !== document.webkitHidden &&
              ((r.hidden = "webkitHidden"),
              (r.visibilityChange = "webkitvisibilitychange")),
          (r.autoPlay = e.proxy(r.autoPlay, r)),
          (r.autoPlayClear = e.proxy(r.autoPlayClear, r)),
          (r.autoPlayIterator = e.proxy(r.autoPlayIterator, r)),
          (r.changeSlide = e.proxy(r.changeSlide, r)),
          (r.clickHandler = e.proxy(r.clickHandler, r)),
          (r.selectHandler = e.proxy(r.selectHandler, r)),
          (r.setPosition = e.proxy(r.setPosition, r)),
          (r.swipeHandler = e.proxy(r.swipeHandler, r)),
          (r.dragHandler = e.proxy(r.dragHandler, r)),
          (r.keyHandler = e.proxy(r.keyHandler, r)),
          (r.instanceUid = t++),
          (r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
          r.registerBreakpoints(),
          r.init(!0);
      };
    })()).prototype.activateADA = function () {
      this.$slideTrack
        .find(".slick-active")
        .attr({
          "aria-hidden": "false",
        })
        .find("a, input, button, select")
        .attr({
          tabindex: "0",
        });
    }),
      (t.prototype.addSlide = t.prototype.slickAdd =
        function (t, n, i) {
          var o = this;
          if ("boolean" == typeof n) (i = n), (n = null);
          else if (n < 0 || n >= o.slideCount) return !1;
          o.unload(),
            "number" == typeof n
              ? 0 === n && 0 === o.$slides.length
                ? e(t).appendTo(o.$slideTrack)
                : i
                ? e(t).insertBefore(o.$slides.eq(n))
                : e(t).insertAfter(o.$slides.eq(n))
              : !0 === i
              ? e(t).prependTo(o.$slideTrack)
              : e(t).appendTo(o.$slideTrack),
            (o.$slides = o.$slideTrack.children(this.options.slide)),
            o.$slideTrack.children(this.options.slide).detach(),
            o.$slideTrack.append(o.$slides),
            o.$slides.each(function (t, n) {
              e(n).attr("data-slick-index", t);
            }),
            (o.$slidesCache = o.$slides),
            o.reinit();
        }),
      (t.prototype.animateHeight = function () {
        var e = this;
        if (
          1 === e.options.slidesToShow &&
          !0 === e.options.adaptiveHeight &&
          !1 === e.options.vertical
        ) {
          var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
          e.$list.animate(
            {
              height: t,
            },
            e.options.speed
          );
        }
      }),
      (t.prototype.animateSlide = function (t, n) {
        var i = {},
          o = this;
        o.animateHeight(),
          !0 === o.options.rtl && !1 === o.options.vertical && (t = -t),
          !1 === o.transformsEnabled
            ? !1 === o.options.vertical
              ? o.$slideTrack.animate(
                  {
                    left: t,
                  },
                  o.options.speed,
                  o.options.easing,
                  n
                )
              : o.$slideTrack.animate(
                  {
                    top: t,
                  },
                  o.options.speed,
                  o.options.easing,
                  n
                )
            : !1 === o.cssTransitions
            ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft),
              e({
                animStart: o.currentLeft,
              }).animate(
                {
                  animStart: t,
                },
                {
                  duration: o.options.speed,
                  easing: o.options.easing,
                  step: function (e) {
                    (e = Math.ceil(e)),
                      !1 === o.options.vertical
                        ? ((i[o.animType] = "translate(" + e + "px, 0px)"),
                          o.$slideTrack.css(i))
                        : ((i[o.animType] = "translate(0px," + e + "px)"),
                          o.$slideTrack.css(i));
                  },
                  complete: function () {
                    n && n.call();
                  },
                }
              ))
            : (o.applyTransition(),
              (t = Math.ceil(t)),
              !1 === o.options.vertical
                ? (i[o.animType] = "translate3d(" + t + "px, 0px, 0px)")
                : (i[o.animType] = "translate3d(0px," + t + "px, 0px)"),
              o.$slideTrack.css(i),
              n &&
                setTimeout(function () {
                  o.disableTransition(), n.call();
                }, o.options.speed));
      }),
      (t.prototype.getNavTarget = function () {
        var t = this.options.asNavFor;
        return t && null !== t && (t = e(t).not(this.$slider)), t;
      }),
      (t.prototype.asNavFor = function (t) {
        var n = this.getNavTarget();
        null !== n &&
          "object" == typeof n &&
          n.each(function () {
            var n = e(this).slick("getSlick");
            n.unslicked || n.slideHandler(t, !0);
          });
      }),
      (t.prototype.applyTransition = function (e) {
        var t = this,
          n = {};
        !1 === t.options.fade
          ? (n[t.transitionType] =
              t.transformType +
              " " +
              t.options.speed +
              "ms " +
              t.options.cssEase)
          : (n[t.transitionType] =
              "opacity " + t.options.speed + "ms " + t.options.cssEase),
          !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n);
      }),
      (t.prototype.autoPlay = function () {
        var e = this;
        e.autoPlayClear(),
          e.slideCount > e.options.slidesToShow &&
            (e.autoPlayTimer = setInterval(
              e.autoPlayIterator,
              e.options.autoplaySpeed
            ));
      }),
      (t.prototype.autoPlayClear = function () {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer);
      }),
      (t.prototype.autoPlayIterator = function () {
        var e = this,
          t = e.currentSlide + e.options.slidesToScroll;
        e.paused ||
          e.interrupted ||
          e.focussed ||
          (!1 === e.options.infinite &&
            (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1
              ? (e.direction = 0)
              : 0 === e.direction &&
                ((t = e.currentSlide - e.options.slidesToScroll),
                e.currentSlide - 1 == 0 && (e.direction = 1))),
          e.slideHandler(t));
      }),
      (t.prototype.buildArrows = function () {
        var t = this;
        !0 === t.options.arrows &&
          ((t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow")),
          (t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow")),
          t.slideCount > t.options.slidesToShow
            ? (t.$prevArrow
                .removeClass("slick-hidden")
                .removeAttr("aria-hidden tabindex"),
              t.$nextArrow
                .removeClass("slick-hidden")
                .removeAttr("aria-hidden tabindex"),
              t.htmlExpr.test(t.options.prevArrow) &&
                t.$prevArrow.prependTo(t.options.appendArrows),
              t.htmlExpr.test(t.options.nextArrow) &&
                t.$nextArrow.appendTo(t.options.appendArrows),
              !0 !== t.options.infinite &&
                t.$prevArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"))
            : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1",
              }));
      }),
      (t.prototype.buildDots = function () {
        var t,
          n,
          i = this;
        if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
          for (
            i.$slider.addClass("slick-dotted"),
              n = e("<ul />").addClass(i.options.dotsClass),
              t = 0;
            t <= i.getDotCount();
            t += 1
          )
            n.append(
              e("<li />").append(i.options.customPaging.call(this, i, t))
            );
          (i.$dots = n.appendTo(i.options.appendDots)),
            i.$dots.find("li").first().addClass("slick-active");
        }
      }),
      (t.prototype.buildOut = function () {
        var t = this;
        (t.$slides = t.$slider
          .children(t.options.slide + ":not(.slick-cloned)")
          .addClass("slick-slide")),
          (t.slideCount = t.$slides.length),
          t.$slides.each(function (t, n) {
            e(n)
              .attr("data-slick-index", t)
              .data("originalStyling", e(n).attr("style") || "");
          }),
          t.$slider.addClass("slick-slider"),
          (t.$slideTrack =
            0 === t.slideCount
              ? e('<div class="slick-track"/>').appendTo(t.$slider)
              : t.$slides.wrapAll('<div class="slick-track"/>').parent()),
          (t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent()),
          t.$slideTrack.css("opacity", 0),
          (!0 !== t.options.centerMode && !0 !== t.options.swipeToSlide) ||
            (t.options.slidesToScroll = 1),
          e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"),
          t.setupInfinite(),
          t.buildArrows(),
          t.buildDots(),
          t.updateDots(),
          t.setSlideClasses(
            "number" == typeof t.currentSlide ? t.currentSlide : 0
          ),
          !0 === t.options.draggable && t.$list.addClass("draggable");
      }),
      (t.prototype.buildRows = function () {
        var e,
          t,
          n,
          i,
          o,
          r,
          s,
          a = this;
        if (
          ((i = document.createDocumentFragment()),
          (r = a.$slider.children()),
          a.options.rows > 0)
        ) {
          for (
            s = a.options.slidesPerRow * a.options.rows,
              o = Math.ceil(r.length / s),
              e = 0;
            e < o;
            e++
          ) {
            var l = document.createElement("div");
            for (t = 0; t < a.options.rows; t++) {
              var c = document.createElement("div");
              for (n = 0; n < a.options.slidesPerRow; n++) {
                var u = e * s + (t * a.options.slidesPerRow + n);
                r.get(u) && c.appendChild(r.get(u));
              }
              l.appendChild(c);
            }
            i.appendChild(l);
          }
          a.$slider.empty().append(i),
            a.$slider
              .children()
              .children()
              .children()
              .css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block",
              });
        }
      }),
      (t.prototype.checkResponsive = function (t, n) {
        var i,
          o,
          r,
          s = this,
          a = !1,
          l = s.$slider.width(),
          c = window.innerWidth || e(window).width();
        if (
          ("window" === s.respondTo
            ? (r = c)
            : "slider" === s.respondTo
            ? (r = l)
            : "min" === s.respondTo && (r = Math.min(c, l)),
          s.options.responsive &&
            s.options.responsive.length &&
            null !== s.options.responsive)
        ) {
          for (i in ((o = null), s.breakpoints))
            s.breakpoints.hasOwnProperty(i) &&
              (!1 === s.originalSettings.mobileFirst
                ? r < s.breakpoints[i] && (o = s.breakpoints[i])
                : r > s.breakpoints[i] && (o = s.breakpoints[i]));
          null !== o
            ? null !== s.activeBreakpoint
              ? (o !== s.activeBreakpoint || n) &&
                ((s.activeBreakpoint = o),
                "unslick" === s.breakpointSettings[o]
                  ? s.unslick(o)
                  : ((s.options = e.extend(
                      {},
                      s.originalSettings,
                      s.breakpointSettings[o]
                    )),
                    !0 === t && (s.currentSlide = s.options.initialSlide),
                    s.refresh(t)),
                (a = o))
              : ((s.activeBreakpoint = o),
                "unslick" === s.breakpointSettings[o]
                  ? s.unslick(o)
                  : ((s.options = e.extend(
                      {},
                      s.originalSettings,
                      s.breakpointSettings[o]
                    )),
                    !0 === t && (s.currentSlide = s.options.initialSlide),
                    s.refresh(t)),
                (a = o))
            : null !== s.activeBreakpoint &&
              ((s.activeBreakpoint = null),
              (s.options = s.originalSettings),
              !0 === t && (s.currentSlide = s.options.initialSlide),
              s.refresh(t),
              (a = o)),
            t || !1 === a || s.$slider.trigger("breakpoint", [s, a]);
        }
      }),
      (t.prototype.changeSlide = function (t, n) {
        var i,
          o,
          r = this,
          s = e(t.currentTarget);
        switch (
          (s.is("a") && t.preventDefault(),
          s.is("li") || (s = s.closest("li")),
          (i =
            r.slideCount % r.options.slidesToScroll != 0
              ? 0
              : (r.slideCount - r.currentSlide) % r.options.slidesToScroll),
          t.data.message)
        ) {
          case "previous":
            (o =
              0 === i ? r.options.slidesToScroll : r.options.slidesToShow - i),
              r.slideCount > r.options.slidesToShow &&
                r.slideHandler(r.currentSlide - o, !1, n);
            break;
          case "next":
            (o = 0 === i ? r.options.slidesToScroll : i),
              r.slideCount > r.options.slidesToShow &&
                r.slideHandler(r.currentSlide + o, !1, n);
            break;
          case "index":
            var a =
              0 === t.data.index
                ? 0
                : t.data.index || s.index() * r.options.slidesToScroll;
            r.slideHandler(r.checkNavigable(a), !1, n),
              s.children().trigger("focus");
            break;
          default:
            return;
        }
      }),
      (t.prototype.checkNavigable = function (e) {
        var t, n;
        if (((n = 0), e > (t = this.getNavigableIndexes())[t.length - 1]))
          e = t[t.length - 1];
        else
          for (var i in t) {
            if (e < t[i]) {
              e = n;
              break;
            }
            n = t[i];
          }
        return e;
      }),
      (t.prototype.cleanUpEvents = function () {
        var t = this;
        t.options.dots &&
          null !== t.$dots &&
          (e("li", t.$dots)
            .off("click.slick", t.changeSlide)
            .off("mouseenter.slick", e.proxy(t.interrupt, t, !0))
            .off("mouseleave.slick", e.proxy(t.interrupt, t, !1)),
          !0 === t.options.accessibility &&
            t.$dots.off("keydown.slick", t.keyHandler)),
          t.$slider.off("focus.slick blur.slick"),
          !0 === t.options.arrows &&
            t.slideCount > t.options.slidesToShow &&
            (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide),
            t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide),
            !0 === t.options.accessibility &&
              (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler),
              t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))),
          t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler),
          t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler),
          t.$list.off("touchend.slick mouseup.slick", t.swipeHandler),
          t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler),
          t.$list.off("click.slick", t.clickHandler),
          e(document).off(t.visibilityChange, t.visibility),
          t.cleanUpSlideEvents(),
          !0 === t.options.accessibility &&
            t.$list.off("keydown.slick", t.keyHandler),
          !0 === t.options.focusOnSelect &&
            e(t.$slideTrack).children().off("click.slick", t.selectHandler),
          e(window).off(
            "orientationchange.slick.slick-" + t.instanceUid,
            t.orientationChange
          ),
          e(window).off("resize.slick.slick-" + t.instanceUid, t.resize),
          e("[draggable!=true]", t.$slideTrack).off(
            "dragstart",
            t.preventDefault
          ),
          e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition);
      }),
      (t.prototype.cleanUpSlideEvents = function () {
        var t = this;
        t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)),
          t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1));
      }),
      (t.prototype.cleanUpRows = function () {
        var e,
          t = this;
        t.options.rows > 0 &&
          ((e = t.$slides.children().children()).removeAttr("style"),
          t.$slider.empty().append(e));
      }),
      (t.prototype.clickHandler = function (e) {
        !1 === this.shouldClick &&
          (e.stopImmediatePropagation(),
          e.stopPropagation(),
          e.preventDefault());
      }),
      (t.prototype.destroy = function (t) {
        var n = this;
        n.autoPlayClear(),
          (n.touchObject = {}),
          n.cleanUpEvents(),
          e(".slick-cloned", n.$slider).detach(),
          n.$dots && n.$dots.remove(),
          n.$prevArrow &&
            n.$prevArrow.length &&
            (n.$prevArrow
              .removeClass("slick-disabled slick-arrow slick-hidden")
              .removeAttr("aria-hidden aria-disabled tabindex")
              .css("display", ""),
            n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()),
          n.$nextArrow &&
            n.$nextArrow.length &&
            (n.$nextArrow
              .removeClass("slick-disabled slick-arrow slick-hidden")
              .removeAttr("aria-hidden aria-disabled tabindex")
              .css("display", ""),
            n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()),
          n.$slides &&
            (n.$slides
              .removeClass(
                "slick-slide slick-active slick-center slick-visible slick-current"
              )
              .removeAttr("aria-hidden")
              .removeAttr("data-slick-index")
              .each(function () {
                e(this).attr("style", e(this).data("originalStyling"));
              }),
            n.$slideTrack.children(this.options.slide).detach(),
            n.$slideTrack.detach(),
            n.$list.detach(),
            n.$slider.append(n.$slides)),
          n.cleanUpRows(),
          n.$slider.removeClass("slick-slider"),
          n.$slider.removeClass("slick-initialized"),
          n.$slider.removeClass("slick-dotted"),
          (n.unslicked = !0),
          t || n.$slider.trigger("destroy", [n]);
      }),
      (t.prototype.disableTransition = function (e) {
        var t = this,
          n = {};
        (n[t.transitionType] = ""),
          !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n);
      }),
      (t.prototype.fadeSlide = function (e, t) {
        var n = this;
        !1 === n.cssTransitions
          ? (n.$slides.eq(e).css({
              zIndex: n.options.zIndex,
            }),
            n.$slides.eq(e).animate(
              {
                opacity: 1,
              },
              n.options.speed,
              n.options.easing,
              t
            ))
          : (n.applyTransition(e),
            n.$slides.eq(e).css({
              opacity: 1,
              zIndex: n.options.zIndex,
            }),
            t &&
              setTimeout(function () {
                n.disableTransition(e), t.call();
              }, n.options.speed));
      }),
      (t.prototype.fadeSlideOut = function (e) {
        var t = this;
        !1 === t.cssTransitions
          ? t.$slides.eq(e).animate(
              {
                opacity: 0,
                zIndex: t.options.zIndex - 2,
              },
              t.options.speed,
              t.options.easing
            )
          : (t.applyTransition(e),
            t.$slides.eq(e).css({
              opacity: 0,
              zIndex: t.options.zIndex - 2,
            }));
      }),
      (t.prototype.filterSlides = t.prototype.slickFilter =
        function (e) {
          var t = this;
          null !== e &&
            ((t.$slidesCache = t.$slides),
            t.unload(),
            t.$slideTrack.children(this.options.slide).detach(),
            t.$slidesCache.filter(e).appendTo(t.$slideTrack),
            t.reinit());
        }),
      (t.prototype.focusHandler = function () {
        var t = this;
        t.$slider
          .off("focus.slick blur.slick")
          .on("focus.slick blur.slick", "*", function (n) {
            n.stopImmediatePropagation();
            var i = e(this);
            setTimeout(function () {
              t.options.pauseOnFocus &&
                ((t.focussed = i.is(":focus")), t.autoPlay());
            }, 0);
          });
      }),
      (t.prototype.getCurrent = t.prototype.slickCurrentSlide =
        function () {
          return this.currentSlide;
        }),
      (t.prototype.getDotCount = function () {
        var e = this,
          t = 0,
          n = 0,
          i = 0;
        if (!0 === e.options.infinite)
          if (e.slideCount <= e.options.slidesToShow) ++i;
          else
            for (; t < e.slideCount; )
              ++i,
                (t = n + e.options.slidesToScroll),
                (n +=
                  e.options.slidesToScroll <= e.options.slidesToShow
                    ? e.options.slidesToScroll
                    : e.options.slidesToShow);
        else if (!0 === e.options.centerMode) i = e.slideCount;
        else if (e.options.asNavFor)
          for (; t < e.slideCount; )
            ++i,
              (t = n + e.options.slidesToScroll),
              (n +=
                e.options.slidesToScroll <= e.options.slidesToShow
                  ? e.options.slidesToScroll
                  : e.options.slidesToShow);
        else
          i =
            1 +
            Math.ceil(
              (e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll
            );
        return i - 1;
      }),
      (t.prototype.getLeft = function (e) {
        var t,
          n,
          i,
          o,
          r = this,
          s = 0;
        return (
          (r.slideOffset = 0),
          (n = r.$slides.first().outerHeight(!0)),
          !0 === r.options.infinite
            ? (r.slideCount > r.options.slidesToShow &&
                ((r.slideOffset = r.slideWidth * r.options.slidesToShow * -1),
                (o = -1),
                !0 === r.options.vertical &&
                  !0 === r.options.centerMode &&
                  (2 === r.options.slidesToShow
                    ? (o = -1.5)
                    : 1 === r.options.slidesToShow && (o = -2)),
                (s = n * r.options.slidesToShow * o)),
              r.slideCount % r.options.slidesToScroll != 0 &&
                e + r.options.slidesToScroll > r.slideCount &&
                r.slideCount > r.options.slidesToShow &&
                (e > r.slideCount
                  ? ((r.slideOffset =
                      (r.options.slidesToShow - (e - r.slideCount)) *
                      r.slideWidth *
                      -1),
                    (s =
                      (r.options.slidesToShow - (e - r.slideCount)) * n * -1))
                  : ((r.slideOffset =
                      (r.slideCount % r.options.slidesToScroll) *
                      r.slideWidth *
                      -1),
                    (s = (r.slideCount % r.options.slidesToScroll) * n * -1))))
            : e + r.options.slidesToShow > r.slideCount &&
              ((r.slideOffset =
                (e + r.options.slidesToShow - r.slideCount) * r.slideWidth),
              (s = (e + r.options.slidesToShow - r.slideCount) * n)),
          r.slideCount <= r.options.slidesToShow &&
            ((r.slideOffset = 0), (s = 0)),
          !0 === r.options.centerMode && r.slideCount <= r.options.slidesToShow
            ? (r.slideOffset =
                (r.slideWidth * Math.floor(r.options.slidesToShow)) / 2 -
                (r.slideWidth * r.slideCount) / 2)
            : !0 === r.options.centerMode && !0 === r.options.infinite
            ? (r.slideOffset +=
                r.slideWidth * Math.floor(r.options.slidesToShow / 2) -
                r.slideWidth)
            : !0 === r.options.centerMode &&
              ((r.slideOffset = 0),
              (r.slideOffset +=
                r.slideWidth * Math.floor(r.options.slidesToShow / 2))),
          (t =
            !1 === r.options.vertical
              ? e * r.slideWidth * -1 + r.slideOffset
              : e * n * -1 + s),
          !0 === r.options.variableWidth &&
            ((i =
              r.slideCount <= r.options.slidesToShow ||
              !1 === r.options.infinite
                ? r.$slideTrack.children(".slick-slide").eq(e)
                : r.$slideTrack
                    .children(".slick-slide")
                    .eq(e + r.options.slidesToShow)),
            (t =
              !0 === r.options.rtl
                ? i[0]
                  ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width())
                  : 0
                : i[0]
                ? -1 * i[0].offsetLeft
                : 0),
            !0 === r.options.centerMode &&
              ((i =
                r.slideCount <= r.options.slidesToShow ||
                !1 === r.options.infinite
                  ? r.$slideTrack.children(".slick-slide").eq(e)
                  : r.$slideTrack
                      .children(".slick-slide")
                      .eq(e + r.options.slidesToShow + 1)),
              (t =
                !0 === r.options.rtl
                  ? i[0]
                    ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width())
                    : 0
                  : i[0]
                  ? -1 * i[0].offsetLeft
                  : 0),
              (t += (r.$list.width() - i.outerWidth()) / 2))),
          t
        );
      }),
      (t.prototype.getOption = t.prototype.slickGetOption =
        function (e) {
          return this.options[e];
        }),
      (t.prototype.getNavigableIndexes = function () {
        var e,
          t = this,
          n = 0,
          i = 0,
          o = [];
        for (
          !1 === t.options.infinite
            ? (e = t.slideCount)
            : ((n = -1 * t.options.slidesToScroll),
              (i = -1 * t.options.slidesToScroll),
              (e = 2 * t.slideCount));
          n < e;

        )
          o.push(n),
            (n = i + t.options.slidesToScroll),
            (i +=
              t.options.slidesToScroll <= t.options.slidesToShow
                ? t.options.slidesToScroll
                : t.options.slidesToShow);
        return o;
      }),
      (t.prototype.getSlick = function () {
        return this;
      }),
      (t.prototype.getSlideCount = function () {
        var t,
          n,
          i = this;
        return (
          (n =
            !0 === i.options.centerMode
              ? i.slideWidth * Math.floor(i.options.slidesToShow / 2)
              : 0),
          !0 === i.options.swipeToSlide
            ? (i.$slideTrack.find(".slick-slide").each(function (o, r) {
                if (r.offsetLeft - n + e(r).outerWidth() / 2 > -1 * i.swipeLeft)
                  return (t = r), !1;
              }),
              Math.abs(e(t).attr("data-slick-index") - i.currentSlide) || 1)
            : i.options.slidesToScroll
        );
      }),
      (t.prototype.goTo = t.prototype.slickGoTo =
        function (e, t) {
          this.changeSlide(
            {
              data: {
                message: "index",
                index: parseInt(e),
              },
            },
            t
          );
        }),
      (t.prototype.init = function (t) {
        var n = this;
        e(n.$slider).hasClass("slick-initialized") ||
          (e(n.$slider).addClass("slick-initialized"),
          n.buildRows(),
          n.buildOut(),
          n.setProps(),
          n.startLoad(),
          n.loadSlider(),
          n.initializeEvents(),
          n.updateArrows(),
          n.updateDots(),
          n.checkResponsive(!0),
          n.focusHandler()),
          t && n.$slider.trigger("init", [n]),
          !0 === n.options.accessibility && n.initADA(),
          n.options.autoplay && ((n.paused = !1), n.autoPlay());
      }),
      (t.prototype.initADA = function () {
        var t = this,
          n = Math.ceil(t.slideCount / t.options.slidesToShow),
          i = t.getNavigableIndexes().filter(function (e) {
            return e >= 0 && e < t.slideCount;
          });
        t.$slides
          .add(t.$slideTrack.find(".slick-cloned"))
          .attr({
            "aria-hidden": "true",
            tabindex: "-1",
          })
          .find("a, input, button, select")
          .attr({
            tabindex: "-1",
          }),
          null !== t.$dots &&
            (t.$slides
              .not(t.$slideTrack.find(".slick-cloned"))
              .each(function (n) {
                var o = i.indexOf(n);
                if (
                  (e(this).attr({
                    role: "tabpanel",
                    id: "slick-slide" + t.instanceUid + n,
                    tabindex: -1,
                  }),
                  -1 !== o)
                ) {
                  var r = "slick-slide-control" + t.instanceUid + o;
                  e("#" + r).length &&
                    e(this).attr({
                      "aria-describedby": r,
                    });
                }
              }),
            t.$dots
              .attr("role", "tablist")
              .find("li")
              .each(function (o) {
                var r = i[o];
                e(this).attr({
                  role: "presentation",
                }),
                  e(this)
                    .find("button")
                    .first()
                    .attr({
                      role: "tab",
                      id: "slick-slide-control" + t.instanceUid + o,
                      "aria-controls": "slick-slide" + t.instanceUid + r,
                      "aria-label": o + 1 + " of " + n,
                      "aria-selected": null,
                      tabindex: "-1",
                    });
              })
              .eq(t.currentSlide)
              .find("button")
              .attr({
                "aria-selected": "true",
                tabindex: "0",
              })
              .end());
        for (var o = t.currentSlide, r = o + t.options.slidesToShow; o < r; o++)
          t.options.focusOnChange
            ? t.$slides.eq(o).attr({
                tabindex: "0",
              })
            : t.$slides.eq(o).removeAttr("tabindex");
        t.activateADA();
      }),
      (t.prototype.initArrowEvents = function () {
        var e = this;
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow.off("click.slick").on(
            "click.slick",
            {
              message: "previous",
            },
            e.changeSlide
          ),
          e.$nextArrow.off("click.slick").on(
            "click.slick",
            {
              message: "next",
            },
            e.changeSlide
          ),
          !0 === e.options.accessibility &&
            (e.$prevArrow.on("keydown.slick", e.keyHandler),
            e.$nextArrow.on("keydown.slick", e.keyHandler)));
      }),
      (t.prototype.initDotEvents = function () {
        var t = this;
        !0 === t.options.dots &&
          t.slideCount > t.options.slidesToShow &&
          (e("li", t.$dots).on(
            "click.slick",
            {
              message: "index",
            },
            t.changeSlide
          ),
          !0 === t.options.accessibility &&
            t.$dots.on("keydown.slick", t.keyHandler)),
          !0 === t.options.dots &&
            !0 === t.options.pauseOnDotsHover &&
            t.slideCount > t.options.slidesToShow &&
            e("li", t.$dots)
              .on("mouseenter.slick", e.proxy(t.interrupt, t, !0))
              .on("mouseleave.slick", e.proxy(t.interrupt, t, !1));
      }),
      (t.prototype.initSlideEvents = function () {
        var t = this;
        t.options.pauseOnHover &&
          (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)),
          t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)));
      }),
      (t.prototype.initializeEvents = function () {
        var t = this;
        t.initArrowEvents(),
          t.initDotEvents(),
          t.initSlideEvents(),
          t.$list.on(
            "touchstart.slick mousedown.slick",
            {
              action: "start",
            },
            t.swipeHandler
          ),
          t.$list.on(
            "touchmove.slick mousemove.slick",
            {
              action: "move",
            },
            t.swipeHandler
          ),
          t.$list.on(
            "touchend.slick mouseup.slick",
            {
              action: "end",
            },
            t.swipeHandler
          ),
          t.$list.on(
            "touchcancel.slick mouseleave.slick",
            {
              action: "end",
            },
            t.swipeHandler
          ),
          t.$list.on("click.slick", t.clickHandler),
          e(document).on(t.visibilityChange, e.proxy(t.visibility, t)),
          !0 === t.options.accessibility &&
            t.$list.on("keydown.slick", t.keyHandler),
          !0 === t.options.focusOnSelect &&
            e(t.$slideTrack).children().on("click.slick", t.selectHandler),
          e(window).on(
            "orientationchange.slick.slick-" + t.instanceUid,
            e.proxy(t.orientationChange, t)
          ),
          e(window).on(
            "resize.slick.slick-" + t.instanceUid,
            e.proxy(t.resize, t)
          ),
          e("[draggable!=true]", t.$slideTrack).on(
            "dragstart",
            t.preventDefault
          ),
          e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition),
          e(t.setPosition);
      }),
      (t.prototype.initUI = function () {
        var e = this;
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow.show(), e.$nextArrow.show()),
          !0 === e.options.dots &&
            e.slideCount > e.options.slidesToShow &&
            e.$dots.show();
      }),
      (t.prototype.keyHandler = function (e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
          (37 === e.keyCode && !0 === t.options.accessibility
            ? t.changeSlide({
                data: {
                  message: !0 === t.options.rtl ? "next" : "previous",
                },
              })
            : 39 === e.keyCode &&
              !0 === t.options.accessibility &&
              t.changeSlide({
                data: {
                  message: !0 === t.options.rtl ? "previous" : "next",
                },
              }));
      }),
      (t.prototype.lazyLoad = function () {
        var t,
          n,
          i,
          o = this;
        function r(t) {
          e("img[data-lazy]", t).each(function () {
            var t = e(this),
              n = e(this).attr("data-lazy"),
              i = e(this).attr("data-srcset"),
              r = e(this).attr("data-sizes") || o.$slider.attr("data-sizes"),
              s = document.createElement("img");
            (s.onload = function () {
              t.animate(
                {
                  opacity: 0,
                },
                100,
                function () {
                  i && (t.attr("srcset", i), r && t.attr("sizes", r)),
                    t.attr("src", n).animate(
                      {
                        opacity: 1,
                      },
                      200,
                      function () {
                        t.removeAttr(
                          "data-lazy data-srcset data-sizes"
                        ).removeClass("slick-loading");
                      }
                    ),
                    o.$slider.trigger("lazyLoaded", [o, t, n]);
                }
              );
            }),
              (s.onerror = function () {
                t
                  .removeAttr("data-lazy")
                  .removeClass("slick-loading")
                  .addClass("slick-lazyload-error"),
                  o.$slider.trigger("lazyLoadError", [o, t, n]);
              }),
              (s.src = n);
          });
        }
        if (
          (!0 === o.options.centerMode
            ? !0 === o.options.infinite
              ? (i =
                  (n = o.currentSlide + (o.options.slidesToShow / 2 + 1)) +
                  o.options.slidesToShow +
                  2)
              : ((n = Math.max(
                  0,
                  o.currentSlide - (o.options.slidesToShow / 2 + 1)
                )),
                (i = o.options.slidesToShow / 2 + 1 + 2 + o.currentSlide))
            : ((n = o.options.infinite
                ? o.options.slidesToShow + o.currentSlide
                : o.currentSlide),
              (i = Math.ceil(n + o.options.slidesToShow)),
              !0 === o.options.fade &&
                (n > 0 && n--, i <= o.slideCount && i++)),
          (t = o.$slider.find(".slick-slide").slice(n, i)),
          "anticipated" === o.options.lazyLoad)
        )
          for (
            var s = n - 1, a = i, l = o.$slider.find(".slick-slide"), c = 0;
            c < o.options.slidesToScroll;
            c++
          )
            s < 0 && (s = o.slideCount - 1),
              (t = (t = t.add(l.eq(s))).add(l.eq(a))),
              s--,
              a++;
        r(t),
          o.slideCount <= o.options.slidesToShow
            ? r(o.$slider.find(".slick-slide"))
            : o.currentSlide >= o.slideCount - o.options.slidesToShow
            ? r(
                o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow)
              )
            : 0 === o.currentSlide &&
              r(
                o.$slider
                  .find(".slick-cloned")
                  .slice(-1 * o.options.slidesToShow)
              );
      }),
      (t.prototype.loadSlider = function () {
        var e = this;
        e.setPosition(),
          e.$slideTrack.css({
            opacity: 1,
          }),
          e.$slider.removeClass("slick-loading"),
          e.initUI(),
          "progressive" === e.options.lazyLoad && e.progressiveLazyLoad();
      }),
      (t.prototype.next = t.prototype.slickNext =
        function () {
          this.changeSlide({
            data: {
              message: "next",
            },
          });
        }),
      (t.prototype.orientationChange = function () {
        this.checkResponsive(), this.setPosition();
      }),
      (t.prototype.pause = t.prototype.slickPause =
        function () {
          this.autoPlayClear(), (this.paused = !0);
        }),
      (t.prototype.play = t.prototype.slickPlay =
        function () {
          var e = this;
          e.autoPlay(),
            (e.options.autoplay = !0),
            (e.paused = !1),
            (e.focussed = !1),
            (e.interrupted = !1);
        }),
      (t.prototype.postSlide = function (t) {
        var n = this;
        n.unslicked ||
          (n.$slider.trigger("afterChange", [n, t]),
          (n.animating = !1),
          n.slideCount > n.options.slidesToShow && n.setPosition(),
          (n.swipeLeft = null),
          n.options.autoplay && n.autoPlay(),
          !0 === n.options.accessibility &&
            (n.initADA(),
            n.options.focusOnChange &&
              e(n.$slides.get(n.currentSlide)).attr("tabindex", 0).focus()));
      }),
      (t.prototype.prev = t.prototype.slickPrev =
        function () {
          this.changeSlide({
            data: {
              message: "previous",
            },
          });
        }),
      (t.prototype.preventDefault = function (e) {
        e.preventDefault();
      }),
      (t.prototype.progressiveLazyLoad = function (t) {
        t = t || 1;
        var n,
          i,
          o,
          r,
          s,
          a = this,
          l = e("img[data-lazy]", a.$slider);
        l.length
          ? ((n = l.first()),
            (i = n.attr("data-lazy")),
            (o = n.attr("data-srcset")),
            (r = n.attr("data-sizes") || a.$slider.attr("data-sizes")),
            ((s = document.createElement("img")).onload = function () {
              o && (n.attr("srcset", o), r && n.attr("sizes", r)),
                n
                  .attr("src", i)
                  .removeAttr("data-lazy data-srcset data-sizes")
                  .removeClass("slick-loading"),
                !0 === a.options.adaptiveHeight && a.setPosition(),
                a.$slider.trigger("lazyLoaded", [a, n, i]),
                a.progressiveLazyLoad();
            }),
            (s.onerror = function () {
              t < 3
                ? setTimeout(function () {
                    a.progressiveLazyLoad(t + 1);
                  }, 500)
                : (n
                    .removeAttr("data-lazy")
                    .removeClass("slick-loading")
                    .addClass("slick-lazyload-error"),
                  a.$slider.trigger("lazyLoadError", [a, n, i]),
                  a.progressiveLazyLoad());
            }),
            (s.src = i))
          : a.$slider.trigger("allImagesLoaded", [a]);
      }),
      (t.prototype.refresh = function (t) {
        var n,
          i,
          o = this;
        (i = o.slideCount - o.options.slidesToShow),
          !o.options.infinite && o.currentSlide > i && (o.currentSlide = i),
          o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0),
          (n = o.currentSlide),
          o.destroy(!0),
          e.extend(o, o.initials, {
            currentSlide: n,
          }),
          o.init(),
          t ||
            o.changeSlide(
              {
                data: {
                  message: "index",
                  index: n,
                },
              },
              !1
            );
      }),
      (t.prototype.registerBreakpoints = function () {
        var t,
          n,
          i,
          o = this,
          r = o.options.responsive || null;
        if ("array" === e.type(r) && r.length) {
          for (t in ((o.respondTo = o.options.respondTo || "window"), r))
            if (((i = o.breakpoints.length - 1), r.hasOwnProperty(t))) {
              for (n = r[t].breakpoint; i >= 0; )
                o.breakpoints[i] &&
                  o.breakpoints[i] === n &&
                  o.breakpoints.splice(i, 1),
                  i--;
              o.breakpoints.push(n), (o.breakpointSettings[n] = r[t].settings);
            }
          o.breakpoints.sort(function (e, t) {
            return o.options.mobileFirst ? e - t : t - e;
          });
        }
      }),
      (t.prototype.reinit = function () {
        var t = this;
        (t.$slides = t.$slideTrack
          .children(t.options.slide)
          .addClass("slick-slide")),
          (t.slideCount = t.$slides.length),
          t.currentSlide >= t.slideCount &&
            0 !== t.currentSlide &&
            (t.currentSlide = t.currentSlide - t.options.slidesToScroll),
          t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0),
          t.registerBreakpoints(),
          t.setProps(),
          t.setupInfinite(),
          t.buildArrows(),
          t.updateArrows(),
          t.initArrowEvents(),
          t.buildDots(),
          t.updateDots(),
          t.initDotEvents(),
          t.cleanUpSlideEvents(),
          t.initSlideEvents(),
          t.checkResponsive(!1, !0),
          !0 === t.options.focusOnSelect &&
            e(t.$slideTrack).children().on("click.slick", t.selectHandler),
          t.setSlideClasses(
            "number" == typeof t.currentSlide ? t.currentSlide : 0
          ),
          t.setPosition(),
          t.focusHandler(),
          (t.paused = !t.options.autoplay),
          t.autoPlay(),
          t.$slider.trigger("reInit", [t]);
      }),
      (t.prototype.resize = function () {
        var t = this;
        e(window).width() !== t.windowWidth &&
          (clearTimeout(t.windowDelay),
          (t.windowDelay = window.setTimeout(function () {
            (t.windowWidth = e(window).width()),
              t.checkResponsive(),
              t.unslicked || t.setPosition();
          }, 50)));
      }),
      (t.prototype.removeSlide = t.prototype.slickRemove =
        function (e, t, n) {
          var i = this;
          if (
            ((e =
              "boolean" == typeof e
                ? !0 === (t = e)
                  ? 0
                  : i.slideCount - 1
                : !0 === t
                ? --e
                : e),
            i.slideCount < 1 || e < 0 || e > i.slideCount - 1)
          )
            return !1;
          i.unload(),
            !0 === n
              ? i.$slideTrack.children().remove()
              : i.$slideTrack.children(this.options.slide).eq(e).remove(),
            (i.$slides = i.$slideTrack.children(this.options.slide)),
            i.$slideTrack.children(this.options.slide).detach(),
            i.$slideTrack.append(i.$slides),
            (i.$slidesCache = i.$slides),
            i.reinit();
        }),
      (t.prototype.setCSS = function (e) {
        var t,
          n,
          i = this,
          o = {};
        !0 === i.options.rtl && (e = -e),
          (t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px"),
          (n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px"),
          (o[i.positionProp] = e),
          !1 === i.transformsEnabled
            ? i.$slideTrack.css(o)
            : ((o = {}),
              !1 === i.cssTransitions
                ? ((o[i.animType] = "translate(" + t + ", " + n + ")"),
                  i.$slideTrack.css(o))
                : ((o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)"),
                  i.$slideTrack.css(o)));
      }),
      (t.prototype.setDimensions = function () {
        var e = this;
        !1 === e.options.vertical
          ? !0 === e.options.centerMode &&
            e.$list.css({
              padding: "0px " + e.options.centerPadding,
            })
          : (e.$list.height(
              e.$slides.first().outerHeight(!0) * e.options.slidesToShow
            ),
            !0 === e.options.centerMode &&
              e.$list.css({
                padding: e.options.centerPadding + " 0px",
              })),
          (e.listWidth = e.$list.width()),
          (e.listHeight = e.$list.height()),
          !1 === e.options.vertical && !1 === e.options.variableWidth
            ? ((e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow)),
              e.$slideTrack.width(
                Math.ceil(
                  e.slideWidth * e.$slideTrack.children(".slick-slide").length
                )
              ))
            : !0 === e.options.variableWidth
            ? e.$slideTrack.width(5e3 * e.slideCount)
            : ((e.slideWidth = Math.ceil(e.listWidth)),
              e.$slideTrack.height(
                Math.ceil(
                  e.$slides.first().outerHeight(!0) *
                    e.$slideTrack.children(".slick-slide").length
                )
              ));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        !1 === e.options.variableWidth &&
          e.$slideTrack.children(".slick-slide").width(e.slideWidth - t);
      }),
      (t.prototype.setFade = function () {
        var t,
          n = this;
        n.$slides.each(function (i, o) {
          (t = n.slideWidth * i * -1),
            !0 === n.options.rtl
              ? e(o).css({
                  position: "relative",
                  right: t,
                  top: 0,
                  zIndex: n.options.zIndex - 2,
                  opacity: 0,
                })
              : e(o).css({
                  position: "relative",
                  left: t,
                  top: 0,
                  zIndex: n.options.zIndex - 2,
                  opacity: 0,
                });
        }),
          n.$slides.eq(n.currentSlide).css({
            zIndex: n.options.zIndex - 1,
            opacity: 1,
          });
      }),
      (t.prototype.setHeight = function () {
        var e = this;
        if (
          1 === e.options.slidesToShow &&
          !0 === e.options.adaptiveHeight &&
          !1 === e.options.vertical
        ) {
          var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
          e.$list.css("height", t);
        }
      }),
      (t.prototype.setOption = t.prototype.slickSetOption =
        function () {
          var t,
            n,
            i,
            o,
            r,
            s = this,
            a = !1;
          if (
            ("object" === e.type(arguments[0])
              ? ((i = arguments[0]), (a = arguments[1]), (r = "multiple"))
              : "string" === e.type(arguments[0]) &&
                ((i = arguments[0]),
                (o = arguments[1]),
                (a = arguments[2]),
                "responsive" === arguments[0] &&
                "array" === e.type(arguments[1])
                  ? (r = "responsive")
                  : void 0 !== arguments[1] && (r = "single")),
            "single" === r)
          )
            s.options[i] = o;
          else if ("multiple" === r)
            e.each(i, function (e, t) {
              s.options[e] = t;
            });
          else if ("responsive" === r)
            for (n in o)
              if ("array" !== e.type(s.options.responsive))
                s.options.responsive = [o[n]];
              else {
                for (t = s.options.responsive.length - 1; t >= 0; )
                  s.options.responsive[t].breakpoint === o[n].breakpoint &&
                    s.options.responsive.splice(t, 1),
                    t--;
                s.options.responsive.push(o[n]);
              }
          a && (s.unload(), s.reinit());
        }),
      (t.prototype.setPosition = function () {
        var e = this;
        e.setDimensions(),
          e.setHeight(),
          !1 === e.options.fade
            ? e.setCSS(e.getLeft(e.currentSlide))
            : e.setFade(),
          e.$slider.trigger("setPosition", [e]);
      }),
      (t.prototype.setProps = function () {
        var e = this,
          t = document.body.style;
        (e.positionProp = !0 === e.options.vertical ? "top" : "left"),
          "top" === e.positionProp
            ? e.$slider.addClass("slick-vertical")
            : e.$slider.removeClass("slick-vertical"),
          (void 0 === t.WebkitTransition &&
            void 0 === t.MozTransition &&
            void 0 === t.msTransition) ||
            (!0 === e.options.useCSS && (e.cssTransitions = !0)),
          e.options.fade &&
            ("number" == typeof e.options.zIndex
              ? e.options.zIndex < 3 && (e.options.zIndex = 3)
              : (e.options.zIndex = e.defaults.zIndex)),
          void 0 !== t.OTransform &&
            ((e.animType = "OTransform"),
            (e.transformType = "-o-transform"),
            (e.transitionType = "OTransition"),
            void 0 === t.perspectiveProperty &&
              void 0 === t.webkitPerspective &&
              (e.animType = !1)),
          void 0 !== t.MozTransform &&
            ((e.animType = "MozTransform"),
            (e.transformType = "-moz-transform"),
            (e.transitionType = "MozTransition"),
            void 0 === t.perspectiveProperty &&
              void 0 === t.MozPerspective &&
              (e.animType = !1)),
          void 0 !== t.webkitTransform &&
            ((e.animType = "webkitTransform"),
            (e.transformType = "-webkit-transform"),
            (e.transitionType = "webkitTransition"),
            void 0 === t.perspectiveProperty &&
              void 0 === t.webkitPerspective &&
              (e.animType = !1)),
          void 0 !== t.msTransform &&
            ((e.animType = "msTransform"),
            (e.transformType = "-ms-transform"),
            (e.transitionType = "msTransition"),
            void 0 === t.msTransform && (e.animType = !1)),
          void 0 !== t.transform &&
            !1 !== e.animType &&
            ((e.animType = "transform"),
            (e.transformType = "transform"),
            (e.transitionType = "transition")),
          (e.transformsEnabled =
            e.options.useTransform && null !== e.animType && !1 !== e.animType);
      }),
      (t.prototype.setSlideClasses = function (e) {
        var t,
          n,
          i,
          o,
          r = this;
        if (
          ((n = r.$slider
            .find(".slick-slide")
            .removeClass("slick-active slick-center slick-current")
            .attr("aria-hidden", "true")),
          r.$slides.eq(e).addClass("slick-current"),
          !0 === r.options.centerMode)
        ) {
          var s = r.options.slidesToShow % 2 == 0 ? 1 : 0;
          (t = Math.floor(r.options.slidesToShow / 2)),
            !0 === r.options.infinite &&
              (e >= t && e <= r.slideCount - 1 - t
                ? r.$slides
                    .slice(e - t + s, e + t + 1)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")
                : ((i = r.options.slidesToShow + e),
                  n
                    .slice(i - t + 1 + s, i + t + 2)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")),
              0 === e
                ? n
                    .eq(n.length - 1 - r.options.slidesToShow)
                    .addClass("slick-center")
                : e === r.slideCount - 1 &&
                  n.eq(r.options.slidesToShow).addClass("slick-center")),
            r.$slides.eq(e).addClass("slick-center");
        } else
          e >= 0 && e <= r.slideCount - r.options.slidesToShow
            ? r.$slides
                .slice(e, e + r.options.slidesToShow)
                .addClass("slick-active")
                .attr("aria-hidden", "false")
            : n.length <= r.options.slidesToShow
            ? n.addClass("slick-active").attr("aria-hidden", "false")
            : ((o = r.slideCount % r.options.slidesToShow),
              (i = !0 === r.options.infinite ? r.options.slidesToShow + e : e),
              r.options.slidesToShow == r.options.slidesToScroll &&
              r.slideCount - e < r.options.slidesToShow
                ? n
                    .slice(i - (r.options.slidesToShow - o), i + o)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")
                : n
                    .slice(i, i + r.options.slidesToShow)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false"));
        ("ondemand" !== r.options.lazyLoad &&
          "anticipated" !== r.options.lazyLoad) ||
          r.lazyLoad();
      }),
      (t.prototype.setupInfinite = function () {
        var t,
          n,
          i,
          o = this;
        if (
          (!0 === o.options.fade && (o.options.centerMode = !1),
          !0 === o.options.infinite &&
            !1 === o.options.fade &&
            ((n = null), o.slideCount > o.options.slidesToShow))
        ) {
          for (
            i =
              !0 === o.options.centerMode
                ? o.options.slidesToShow + 1
                : o.options.slidesToShow,
              t = o.slideCount;
            t > o.slideCount - i;
            t -= 1
          )
            (n = t - 1),
              e(o.$slides[n])
                .clone(!0)
                .attr("id", "")
                .attr("data-slick-index", n - o.slideCount)
                .prependTo(o.$slideTrack)
                .addClass("slick-cloned");
          for (t = 0; t < i + o.slideCount; t += 1)
            (n = t),
              e(o.$slides[n])
                .clone(!0)
                .attr("id", "")
                .attr("data-slick-index", n + o.slideCount)
                .appendTo(o.$slideTrack)
                .addClass("slick-cloned");
          o.$slideTrack
            .find(".slick-cloned")
            .find("[id]")
            .each(function () {
              e(this).attr("id", "");
            });
        }
      }),
      (t.prototype.interrupt = function (e) {
        e || this.autoPlay(), (this.interrupted = e);
      }),
      (t.prototype.selectHandler = function (t) {
        var n = this,
          i = e(t.target).is(".slick-slide")
            ? e(t.target)
            : e(t.target).parents(".slick-slide"),
          o = parseInt(i.attr("data-slick-index"));
        o || (o = 0),
          n.slideCount <= n.options.slidesToShow
            ? n.slideHandler(o, !1, !0)
            : n.slideHandler(o);
      }),
      (t.prototype.slideHandler = function (e, t, n) {
        var i,
          o,
          r,
          s,
          a,
          l,
          c = this;
        if (
          ((t = t || !1),
          !(
            (!0 === c.animating && !0 === c.options.waitForAnimate) ||
            (!0 === c.options.fade && c.currentSlide === e)
          ))
        )
          if (
            (!1 === t && c.asNavFor(e),
            (i = e),
            (a = c.getLeft(i)),
            (s = c.getLeft(c.currentSlide)),
            (c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft),
            !1 === c.options.infinite &&
              !1 === c.options.centerMode &&
              (e < 0 || e > c.getDotCount() * c.options.slidesToScroll))
          )
            !1 === c.options.fade &&
              ((i = c.currentSlide),
              !0 !== n && c.slideCount > c.options.slidesToShow
                ? c.animateSlide(s, function () {
                    c.postSlide(i);
                  })
                : c.postSlide(i));
          else if (
            !1 === c.options.infinite &&
            !0 === c.options.centerMode &&
            (e < 0 || e > c.slideCount - c.options.slidesToScroll)
          )
            !1 === c.options.fade &&
              ((i = c.currentSlide),
              !0 !== n && c.slideCount > c.options.slidesToShow
                ? c.animateSlide(s, function () {
                    c.postSlide(i);
                  })
                : c.postSlide(i));
          else {
            if (
              (c.options.autoplay && clearInterval(c.autoPlayTimer),
              (o =
                i < 0
                  ? c.slideCount % c.options.slidesToScroll != 0
                    ? c.slideCount - (c.slideCount % c.options.slidesToScroll)
                    : c.slideCount + i
                  : i >= c.slideCount
                  ? c.slideCount % c.options.slidesToScroll != 0
                    ? 0
                    : i - c.slideCount
                  : i),
              (c.animating = !0),
              c.$slider.trigger("beforeChange", [c, c.currentSlide, o]),
              (r = c.currentSlide),
              (c.currentSlide = o),
              c.setSlideClasses(c.currentSlide),
              c.options.asNavFor &&
                (l = (l = c.getNavTarget()).slick("getSlick")).slideCount <=
                  l.options.slidesToShow &&
                l.setSlideClasses(c.currentSlide),
              c.updateDots(),
              c.updateArrows(),
              !0 === c.options.fade)
            )
              return (
                !0 !== n
                  ? (c.fadeSlideOut(r),
                    c.fadeSlide(o, function () {
                      c.postSlide(o);
                    }))
                  : c.postSlide(o),
                void c.animateHeight()
              );
            !0 !== n && c.slideCount > c.options.slidesToShow
              ? c.animateSlide(a, function () {
                  c.postSlide(o);
                })
              : c.postSlide(o);
          }
      }),
      (t.prototype.startLoad = function () {
        var e = this;
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow.hide(), e.$nextArrow.hide()),
          !0 === e.options.dots &&
            e.slideCount > e.options.slidesToShow &&
            e.$dots.hide(),
          e.$slider.addClass("slick-loading");
      }),
      (t.prototype.swipeDirection = function () {
        var e,
          t,
          n,
          i,
          o = this;
        return (
          (e = o.touchObject.startX - o.touchObject.curX),
          (t = o.touchObject.startY - o.touchObject.curY),
          (n = Math.atan2(t, e)),
          (i = Math.round((180 * n) / Math.PI)) < 0 && (i = 360 - Math.abs(i)),
          i <= 45 && i >= 0
            ? !1 === o.options.rtl
              ? "left"
              : "right"
            : i <= 360 && i >= 315
            ? !1 === o.options.rtl
              ? "left"
              : "right"
            : i >= 135 && i <= 225
            ? !1 === o.options.rtl
              ? "right"
              : "left"
            : !0 === o.options.verticalSwiping
            ? i >= 35 && i <= 135
              ? "down"
              : "up"
            : "vertical"
        );
      }),
      (t.prototype.swipeEnd = function (e) {
        var t,
          n,
          i = this;
        if (((i.dragging = !1), (i.swiping = !1), i.scrolling))
          return (i.scrolling = !1), !1;
        if (
          ((i.interrupted = !1),
          (i.shouldClick = !(i.touchObject.swipeLength > 10)),
          void 0 === i.touchObject.curX)
        )
          return !1;
        if (
          (!0 === i.touchObject.edgeHit &&
            i.$slider.trigger("edge", [i, i.swipeDirection()]),
          i.touchObject.swipeLength >= i.touchObject.minSwipe)
        ) {
          switch ((n = i.swipeDirection())) {
            case "left":
            case "down":
              (t = i.options.swipeToSlide
                ? i.checkNavigable(i.currentSlide + i.getSlideCount())
                : i.currentSlide + i.getSlideCount()),
                (i.currentDirection = 0);
              break;
            case "right":
            case "up":
              (t = i.options.swipeToSlide
                ? i.checkNavigable(i.currentSlide - i.getSlideCount())
                : i.currentSlide - i.getSlideCount()),
                (i.currentDirection = 1);
          }
          "vertical" != n &&
            (i.slideHandler(t),
            (i.touchObject = {}),
            i.$slider.trigger("swipe", [i, n]));
        } else
          i.touchObject.startX !== i.touchObject.curX &&
            (i.slideHandler(i.currentSlide), (i.touchObject = {}));
      }),
      (t.prototype.swipeHandler = function (e) {
        var t = this;
        if (
          !(
            !1 === t.options.swipe ||
            ("ontouchend" in document && !1 === t.options.swipe) ||
            (!1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))
          )
        )
          switch (
            ((t.touchObject.fingerCount =
              e.originalEvent && void 0 !== e.originalEvent.touches
                ? e.originalEvent.touches.length
                : 1),
            (t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold),
            !0 === t.options.verticalSwiping &&
              (t.touchObject.minSwipe =
                t.listHeight / t.options.touchThreshold),
            e.data.action)
          ) {
            case "start":
              t.swipeStart(e);
              break;
            case "move":
              t.swipeMove(e);
              break;
            case "end":
              t.swipeEnd(e);
          }
      }),
      (t.prototype.swipeMove = function (e) {
        var t,
          n,
          i,
          o,
          r,
          s,
          a = this;
        return (
          (r = void 0 !== e.originalEvent ? e.originalEvent.touches : null),
          !(!a.dragging || a.scrolling || (r && 1 !== r.length)) &&
            ((t = a.getLeft(a.currentSlide)),
            (a.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX),
            (a.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY),
            (a.touchObject.swipeLength = Math.round(
              Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))
            )),
            (s = Math.round(
              Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))
            )),
            !a.options.verticalSwiping && !a.swiping && s > 4
              ? ((a.scrolling = !0), !1)
              : (!0 === a.options.verticalSwiping &&
                  (a.touchObject.swipeLength = s),
                (n = a.swipeDirection()),
                void 0 !== e.originalEvent &&
                  a.touchObject.swipeLength > 4 &&
                  ((a.swiping = !0), e.preventDefault()),
                (o =
                  (!1 === a.options.rtl ? 1 : -1) *
                  (a.touchObject.curX > a.touchObject.startX ? 1 : -1)),
                !0 === a.options.verticalSwiping &&
                  (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1),
                (i = a.touchObject.swipeLength),
                (a.touchObject.edgeHit = !1),
                !1 === a.options.infinite &&
                  ((0 === a.currentSlide && "right" === n) ||
                    (a.currentSlide >= a.getDotCount() && "left" === n)) &&
                  ((i = a.touchObject.swipeLength * a.options.edgeFriction),
                  (a.touchObject.edgeHit = !0)),
                !1 === a.options.vertical
                  ? (a.swipeLeft = t + i * o)
                  : (a.swipeLeft =
                      t + i * (a.$list.height() / a.listWidth) * o),
                !0 === a.options.verticalSwiping && (a.swipeLeft = t + i * o),
                !0 !== a.options.fade &&
                  !1 !== a.options.touchMove &&
                  (!0 === a.animating
                    ? ((a.swipeLeft = null), !1)
                    : void a.setCSS(a.swipeLeft))))
        );
      }),
      (t.prototype.swipeStart = function (e) {
        var t,
          n = this;
        if (
          ((n.interrupted = !0),
          1 !== n.touchObject.fingerCount ||
            n.slideCount <= n.options.slidesToShow)
        )
          return (n.touchObject = {}), !1;
        void 0 !== e.originalEvent &&
          void 0 !== e.originalEvent.touches &&
          (t = e.originalEvent.touches[0]),
          (n.touchObject.startX = n.touchObject.curX =
            void 0 !== t ? t.pageX : e.clientX),
          (n.touchObject.startY = n.touchObject.curY =
            void 0 !== t ? t.pageY : e.clientY),
          (n.dragging = !0);
      }),
      (t.prototype.unfilterSlides = t.prototype.slickUnfilter =
        function () {
          var e = this;
          null !== e.$slidesCache &&
            (e.unload(),
            e.$slideTrack.children(this.options.slide).detach(),
            e.$slidesCache.appendTo(e.$slideTrack),
            e.reinit());
        }),
      (t.prototype.unload = function () {
        var t = this;
        e(".slick-cloned", t.$slider).remove(),
          t.$dots && t.$dots.remove(),
          t.$prevArrow &&
            t.htmlExpr.test(t.options.prevArrow) &&
            t.$prevArrow.remove(),
          t.$nextArrow &&
            t.htmlExpr.test(t.options.nextArrow) &&
            t.$nextArrow.remove(),
          t.$slides
            .removeClass("slick-slide slick-active slick-visible slick-current")
            .attr("aria-hidden", "true")
            .css("width", "");
      }),
      (t.prototype.unslick = function (e) {
        var t = this;
        t.$slider.trigger("unslick", [t, e]), t.destroy();
      }),
      (t.prototype.updateArrows = function () {
        var e = this;
        Math.floor(e.options.slidesToShow / 2),
          !0 === e.options.arrows &&
            e.slideCount > e.options.slidesToShow &&
            !e.options.infinite &&
            (e.$prevArrow
              .removeClass("slick-disabled")
              .attr("aria-disabled", "false"),
            e.$nextArrow
              .removeClass("slick-disabled")
              .attr("aria-disabled", "false"),
            0 === e.currentSlide
              ? (e.$prevArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                e.$nextArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false"))
              : e.currentSlide >= e.slideCount - e.options.slidesToShow &&
                !1 === e.options.centerMode
              ? (e.$nextArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                e.$prevArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false"))
              : e.currentSlide >= e.slideCount - 1 &&
                !0 === e.options.centerMode &&
                (e.$nextArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                e.$prevArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false")));
      }),
      (t.prototype.updateDots = function () {
        var e = this;
        null !== e.$dots &&
          (e.$dots.find("li").removeClass("slick-active").end(),
          e.$dots
            .find("li")
            .eq(Math.floor(e.currentSlide / e.options.slidesToScroll))
            .addClass("slick-active"));
      }),
      (t.prototype.visibility = function () {
        var e = this;
        e.options.autoplay &&
          (document[e.hidden] ? (e.interrupted = !0) : (e.interrupted = !1));
      }),
      (e.fn.slick = function () {
        var e,
          n,
          i = this,
          o = arguments[0],
          r = Array.prototype.slice.call(arguments, 1),
          s = i.length;
        for (e = 0; e < s; e++)
          if (
            ("object" == typeof o || void 0 === o
              ? (i[e].slick = new t(i[e], o))
              : (n = i[e].slick[o].apply(i[e].slick, r)),
            void 0 !== n)
          )
            return n;
        return i;
      });
  }),
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define(t)
      : ((e =
          "undefined" != typeof globalThis ? globalThis : e || self).LazyLoad =
          t());
  })(this, function () {
    "use strict";
    function e() {
      return (e =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
          }
          return e;
        }).apply(this, arguments);
    }
    var t = "undefined" != typeof window,
      n =
        (t && !("onscroll" in window)) ||
        ("undefined" != typeof navigator &&
          /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
      i = t && "IntersectionObserver" in window,
      o = t && "classList" in document.createElement("p"),
      r = t && window.devicePixelRatio > 1,
      s = {
        elements_selector: ".lazy",
        container: n || t ? document : null,
        threshold: 300,
        thresholds: null,
        data_src: "src",
        data_srcset: "srcset",
        data_sizes: "sizes",
        data_bg: "bg",
        data_bg_hidpi: "bg-hidpi",
        data_bg_multi: "bg-multi",
        data_bg_multi_hidpi: "bg-multi-hidpi",
        data_poster: "poster",
        class_applied: "applied",
        class_loading: "loading",
        class_loaded: "loaded",
        class_error: "error",
        class_entered: "entered",
        class_exited: "exited",
        unobserve_completed: !0,
        unobserve_entered: !1,
        cancel_on_exit: !0,
        callback_enter: null,
        callback_exit: null,
        callback_applied: null,
        callback_loading: null,
        callback_loaded: null,
        callback_error: null,
        callback_finish: null,
        callback_cancel: null,
        use_native: !1,
      },
      a = function (t) {
        return e({}, s, t);
      },
      l = function (e, t) {
        var n,
          i = "LazyLoad::Initialized",
          o = new e(t);
        try {
          n = new CustomEvent(i, {
            detail: {
              instance: o,
            },
          });
        } catch (e) {
          (n = document.createEvent("CustomEvent")).initCustomEvent(i, !1, !1, {
            instance: o,
          });
        }
        window.dispatchEvent(n);
      },
      c = "loading",
      u = "loaded",
      d = "applied",
      p = "error",
      f = "native",
      h = function (e, t) {
        return e.getAttribute("data-" + t);
      },
      m = function (e) {
        return h(e, "ll-status");
      },
      g = function (e, t) {
        return (function (e, t, n) {
          var i = "data-ll-status";
          null !== n ? e.setAttribute(i, n) : e.removeAttribute(i);
        })(e, 0, t);
      },
      v = function (e) {
        return g(e, null);
      },
      y = function (e) {
        return null === m(e);
      },
      b = function (e) {
        return m(e) === f;
      },
      w = [c, u, d, p],
      x = function (e, t, n, i) {
        e && (void 0 === i ? (void 0 === n ? e(t) : e(t, n)) : e(t, n, i));
      },
      T = function (e, t) {
        o ? e.classList.add(t) : (e.className += (e.className ? " " : "") + t);
      },
      k = function (e, t) {
        o
          ? e.classList.remove(t)
          : (e.className = e.className
              .replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ")
              .replace(/^\s+/, "")
              .replace(/\s+$/, ""));
      },
      C = function (e) {
        return e.llTempImage;
      },
      S = function (e, t) {
        if (t) {
          var n = t._observer;
          n && n.unobserve(e);
        }
      },
      E = function (e, t) {
        e && (e.loadingCount += t);
      },
      A = function (e, t) {
        e && (e.toLoadCount = t);
      },
      D = function (e) {
        for (var t, n = [], i = 0; (t = e.children[i]); i += 1)
          "SOURCE" === t.tagName && n.push(t);
        return n;
      },
      $ = function (e, t, n) {
        n && e.setAttribute(t, n);
      },
      I = function (e, t) {
        e.removeAttribute(t);
      },
      O = function (e) {
        return !!e.llOriginalAttrs;
      },
      L = function (e) {
        if (!O(e)) {
          var t = {};
          (t.src = e.getAttribute("src")),
            (t.srcset = e.getAttribute("srcset")),
            (t.sizes = e.getAttribute("sizes")),
            (e.llOriginalAttrs = t);
        }
      },
      j = function (e) {
        if (O(e)) {
          var t = e.llOriginalAttrs;
          $(e, "src", t.src), $(e, "srcset", t.srcset), $(e, "sizes", t.sizes);
        }
      },
      N = function (e, t) {
        $(e, "sizes", h(e, t.data_sizes)),
          $(e, "srcset", h(e, t.data_srcset)),
          $(e, "src", h(e, t.data_src));
      },
      P = function (e) {
        I(e, "src"), I(e, "srcset"), I(e, "sizes");
      },
      _ = function (e, t) {
        var n = e.parentNode;
        n && "PICTURE" === n.tagName && D(n).forEach(t);
      },
      M = {
        IMG: function (e, t) {
          _(e, function (e) {
            L(e), N(e, t);
          }),
            L(e),
            N(e, t);
        },
        IFRAME: function (e, t) {
          $(e, "src", h(e, t.data_src));
        },
        VIDEO: function (e, t) {
          !(function (e, n) {
            D(e).forEach(function (e) {
              $(e, "src", h(e, t.data_src));
            });
          })(e),
            $(e, "poster", h(e, t.data_poster)),
            $(e, "src", h(e, t.data_src)),
            e.load();
        },
      },
      H = function (e, t) {
        var n = M[e.tagName];
        n && n(e, t);
      },
      q = function (e, t, n) {
        E(n, 1), T(e, t.class_loading), g(e, c), x(t.callback_loading, e, n);
      },
      R = ["IMG", "IFRAME", "VIDEO"],
      F = function (e, t) {
        !t ||
          t.loadingCount > 0 ||
          t.toLoadCount > 0 ||
          x(e.callback_finish, t);
      },
      z = function (e, t, n) {
        e.addEventListener(t, n), (e.llEvLisnrs[t] = n);
      },
      W = function (e, t, n) {
        e.removeEventListener(t, n);
      },
      B = function (e) {
        return !!e.llEvLisnrs;
      },
      U = function (e) {
        if (B(e)) {
          var t = e.llEvLisnrs;
          for (var n in t) {
            var i = t[n];
            W(e, n, i);
          }
          delete e.llEvLisnrs;
        }
      },
      X = function (e, t, n) {
        !(function (e) {
          delete e.llTempImage;
        })(e),
          E(n, -1),
          n && (n.toLoadCount -= 1),
          k(e, t.class_loading),
          t.unobserve_completed && S(e, n);
      },
      V = function (e, t, n) {
        var i = C(e) || e;
        B(i) ||
          (function (e, t, n) {
            B(e) || (e.llEvLisnrs = {});
            var i = "VIDEO" === e.tagName ? "loadeddata" : "load";
            z(e, i, t), z(e, "error", n);
          })(
            i,
            function (o) {
              !(function (e, t, n, i) {
                var o = b(t);
                X(t, n, i),
                  T(t, n.class_loaded),
                  g(t, u),
                  x(n.callback_loaded, t, i),
                  o || F(n, i);
              })(0, e, t, n),
                U(i);
            },
            function (o) {
              !(function (e, t, n, i) {
                var o = b(t);
                X(t, n, i),
                  T(t, n.class_error),
                  g(t, p),
                  x(n.callback_error, t, i),
                  o || F(n, i);
              })(0, e, t, n),
                U(i);
            }
          );
      },
      Y = function (e, t, n) {
        !(function (e) {
          return R.indexOf(e.tagName) > -1;
        })(e)
          ? (function (e, t, n) {
              !(function (e) {
                e.llTempImage = document.createElement("IMG");
              })(e),
                V(e, t, n),
                (function (e, t, n) {
                  var i = h(e, t.data_bg),
                    o = h(e, t.data_bg_hidpi),
                    s = r && o ? o : i;
                  s &&
                    ((e.style.backgroundImage = 'url("'.concat(s, '")')),
                    C(e).setAttribute("src", s),
                    q(e, t, n));
                })(e, t, n),
                (function (e, t, n) {
                  var i = h(e, t.data_bg_multi),
                    o = h(e, t.data_bg_multi_hidpi),
                    s = r && o ? o : i;
                  s &&
                    ((e.style.backgroundImage = s),
                    (function (e, t, n) {
                      T(e, t.class_applied),
                        g(e, d),
                        t.unobserve_completed && S(e, t),
                        x(t.callback_applied, e, n);
                    })(e, t, n));
                })(e, t, n);
            })(e, t, n)
          : (function (e, t, n) {
              V(e, t, n), H(e, t), q(e, t, n);
            })(e, t, n);
      },
      Z = ["IMG", "IFRAME", "VIDEO"],
      K = function (e) {
        return e.use_native && "loading" in HTMLImageElement.prototype;
      },
      G = function (e) {
        return Array.prototype.slice.call(e);
      },
      Q = function (e) {
        return e.container.querySelectorAll(e.elements_selector);
      },
      J = function (e) {
        return (function (e) {
          return m(e) === p;
        })(e);
      },
      ee = function (e, t) {
        return (function (e) {
          return G(e).filter(y);
        })(e || Q(t));
      },
      te = function (e, n) {
        var o = a(e);
        (this._settings = o),
          (this.loadingCount = 0),
          (function (e, t) {
            i &&
              !K(e) &&
              (t._observer = new IntersectionObserver(
                function (n) {
                  !(function (e, t, n) {
                    e.forEach(function (e) {
                      return (function (e) {
                        return e.isIntersecting || e.intersectionRatio > 0;
                      })(e)
                        ? (function (e, t, n, i) {
                            var o = (function (e) {
                              return w.indexOf(m(e)) >= 0;
                            })(e);
                            g(e, "entered"),
                              T(e, n.class_entered),
                              k(e, n.class_exited),
                              (function (e, t, n) {
                                t.unobserve_entered && S(e, n);
                              })(e, n, i),
                              x(n.callback_enter, e, t, i),
                              o || Y(e, n, i);
                          })(e.target, e, t, n)
                        : (function (e, t, n, i) {
                            y(e) ||
                              (T(e, n.class_exited),
                              (function (e, t, n, i) {
                                n.cancel_on_exit &&
                                  (function (e) {
                                    return m(e) === c;
                                  })(e) &&
                                  "IMG" === e.tagName &&
                                  (U(e),
                                  (function (e) {
                                    _(e, function (e) {
                                      P(e);
                                    }),
                                      P(e);
                                  })(e),
                                  (function (e) {
                                    _(e, function (e) {
                                      j(e);
                                    }),
                                      j(e);
                                  })(e),
                                  k(e, n.class_loading),
                                  E(i, -1),
                                  v(e),
                                  x(n.callback_cancel, e, t, i));
                              })(e, t, n, i),
                              x(n.callback_exit, e, t, i));
                          })(e.target, e, t, n);
                    });
                  })(n, e, t);
                },
                (function (e) {
                  return {
                    root: e.container === document ? null : e.container,
                    rootMargin: e.thresholds || e.threshold + "px",
                  };
                })(e)
              ));
          })(o, this),
          (function (e, n) {
            t &&
              window.addEventListener("online", function () {
                !(function (e, t) {
                  var n;
                  ((n = Q(e)), G(n).filter(J)).forEach(function (t) {
                    k(t, e.class_error), v(t);
                  }),
                    t.update();
                })(e, n);
              });
          })(o, this),
          this.update(n);
      };
    return (
      (te.prototype = {
        update: function (e) {
          var t,
            o,
            r = this._settings,
            s = ee(e, r);
          A(this, s.length),
            !n && i
              ? K(r)
                ? (function (e, t, n) {
                    s.forEach(function (e) {
                      -1 !== Z.indexOf(e.tagName) &&
                        (function (e, t, n) {
                          e.setAttribute("loading", "lazy"),
                            V(e, t, n),
                            H(e, t),
                            g(e, f);
                        })(e, t, n);
                    }),
                      A(n, 0);
                  })(0, r, this)
                : ((o = s),
                  (function (e) {
                    e.disconnect();
                  })((t = this._observer)),
                  (function (e, t) {
                    o.forEach(function (t) {
                      e.observe(t);
                    });
                  })(t))
              : this.loadAll(s);
        },
        destroy: function () {
          this._observer && this._observer.disconnect(),
            Q(this._settings).forEach(function (e) {
              delete e.llOriginalAttrs;
            }),
            delete this._observer,
            delete this._settings,
            delete this.loadingCount,
            delete this.toLoadCount;
        },
        loadAll: function (e) {
          var t = this,
            n = this._settings;
          ee(e, n).forEach(function (e) {
            S(e, t), Y(e, n, t);
          });
        },
      }),
      (te.load = function (e, t) {
        var n = a(t);
        Y(e, n);
      }),
      (te.resetStatus = function (e) {
        v(e);
      }),
      t &&
        (function (e, t) {
          if (t)
            if (t.length) for (var n, i = 0; (n = t[i]); i += 1) l(e, n);
            else l(e, t);
        })(te, window.lazyLoadOptions),
      te
    );
  }),
  (function (e) {
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = function (t, n) {
          return (
            void 0 === n &&
              (n =
                "undefined" != typeof window
                  ? require("jquery")
                  : require("jquery")(t)),
            e(n),
            n
          );
        })
      : e(jQuery);
  })(function (e) {
    "use strict";
    var t = e(document),
      n = e(window),
      i = ["a", "e", "i", "o", "u", "n", "c", "y"],
      o = [
        /[\xE0-\xE5]/g,
        /[\xE8-\xEB]/g,
        /[\xEC-\xEF]/g,
        /[\xF2-\xF6]/g,
        /[\xF9-\xFC]/g,
        /[\xF1]/g,
        /[\xE7]/g,
        /[\xFD-\xFF]/g,
      ],
      r = function (t, n) {
        var i = this;
        (i.element = t),
          (i.$element = e(t)),
          (i.state = {
            multiple: !!i.$element.attr("multiple"),
            enabled: !1,
            opened: !1,
            currValue: -1,
            selectedIdx: -1,
            highlightedIdx: -1,
          }),
          (i.eventTriggers = {
            open: i.open,
            close: i.close,
            destroy: i.destroy,
            refresh: i.refresh,
            init: i.init,
          }),
          i.init(n);
      };
    (r.prototype = {
      utils: {
        isMobile: function () {
          return /android|ip(hone|od|ad)/i.test(navigator.userAgent);
        },
        escapeRegExp: function (e) {
          return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        },
        replaceDiacritics: function (e) {
          for (var t = o.length; t--; ) e = e.toLowerCase().replace(o[t], i[t]);
          return e;
        },
        format: function (e) {
          var t = arguments;
          return ("" + e).replace(/\{(?:(\d+)|(\w+))\}/g, function (e, n, i) {
            return i && t[1] ? t[1][i] : t[n];
          });
        },
        nextEnabledItem: function (e, t) {
          for (; e[(t = (t + 1) % e.length)].disabled; );
          return t;
        },
        previousEnabledItem: function (e, t) {
          for (; e[(t = (t > 0 ? t : e.length) - 1)].disabled; );
          return t;
        },
        toDash: function (e) {
          return e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
        },
        triggerCallback: function (t, n) {
          var i = n.element,
            o = n.options["on" + t],
            r = [i].concat([].slice.call(arguments).slice(1));
          e.isFunction(o) && o.apply(i, r),
            e(i).trigger("selectric-" + this.toDash(t), r);
        },
        arrayToClassname: function (t) {
          var n = e.grep(t, function (e) {
            return !!e;
          });
          return e.trim(n.join(" "));
        },
      },
      init: function (t) {
        var n = this;
        if (
          ((n.options = e.extend(
            !0,
            {},
            e.fn.selectric.defaults,
            n.options,
            t
          )),
          n.utils.triggerCallback("BeforeInit", n),
          n.destroy(!0),
          n.options.disableOnMobile && n.utils.isMobile())
        )
          n.disableOnMobile = !0;
        else {
          n.classes = n.getClassNames();
          var i = e("<input/>", {
              class: n.classes.input,
              readonly: n.utils.isMobile(),
            }),
            o = e("<div/>", {
              class: n.classes.items,
              tabindex: -1,
            }),
            r = e("<div/>", {
              class: n.classes.scroll,
            }),
            s = e("<div/>", {
              class: n.classes.prefix,
              html: n.options.arrowButtonMarkup,
            }),
            a = e("<span/>", {
              class: "label",
            }),
            l = n.$element.wrap("<div/>").parent().append(s.prepend(a), o, i),
            c = e("<div/>", {
              class: n.classes.hideselect,
            });
          (n.elements = {
            input: i,
            items: o,
            itemsScroll: r,
            wrapper: s,
            label: a,
            outerWrapper: l,
          }),
            n.options.nativeOnMobile &&
              n.utils.isMobile() &&
              ((n.elements.input = void 0),
              c.addClass(n.classes.prefix + "-is-native"),
              n.$element.on("change", function () {
                n.refresh();
              })),
            n.$element.on(n.eventTriggers).wrap(c),
            (n.originalTabindex = n.$element.prop("tabindex")),
            n.$element.prop("tabindex", -1),
            n.populate(),
            n.activate(),
            n.utils.triggerCallback("Init", n);
        }
      },
      activate: function () {
        var e = this,
          t = e.elements.items
            .closest(":visible")
            .children(":hidden")
            .addClass(e.classes.tempshow),
          n = e.$element.width();
        t.removeClass(e.classes.tempshow),
          e.utils.triggerCallback("BeforeActivate", e),
          e.elements.outerWrapper.prop(
            "class",
            e.utils.arrayToClassname([
              e.classes.wrapper,
              e.$element
                .prop("class")
                .replace(/\S+/g, e.classes.prefix + "-$&"),
              e.options.responsive ? e.classes.responsive : "",
            ])
          ),
          e.options.inheritOriginalWidth &&
            n > 0 &&
            e.elements.outerWrapper.width(n),
          e.unbindEvents(),
          e.$element.prop("disabled")
            ? (e.elements.outerWrapper.addClass(e.classes.disabled),
              e.elements.input && e.elements.input.prop("disabled", !0))
            : ((e.state.enabled = !0),
              e.elements.outerWrapper.removeClass(e.classes.disabled),
              (e.$li = e.elements.items.removeAttr("style").find("li")),
              e.bindEvents()),
          e.utils.triggerCallback("Activate", e);
      },
      getClassNames: function () {
        var t = this,
          n = t.options.customClass,
          i = {};
        return (
          e.each(
            "Input Items Open Disabled TempShow HideSelect Wrapper Focus Hover Responsive Above Below Scroll Group GroupLabel".split(
              " "
            ),
            function (e, o) {
              var r = n.prefix + o;
              i[o.toLowerCase()] = n.camelCase ? r : t.utils.toDash(r);
            }
          ),
          (i.prefix = n.prefix),
          i
        );
      },
      setLabel: function () {
        var t = this,
          n = t.options.labelBuilder;
        if (t.state.multiple) {
          var i = e.isArray(t.state.currValue)
            ? t.state.currValue
            : [t.state.currValue];
          i = 0 === i.length ? [0] : i;
          var o = e.map(i, function (n) {
            return e.grep(t.lookupItems, function (e) {
              return e.index === n;
            })[0];
          });
          (o = e.grep(o, function (t) {
            return o.length > 1 || 0 === o.length ? "" !== e.trim(t.value) : t;
          })),
            (o = e.map(o, function (i) {
              return e.isFunction(n) ? n(i) : t.utils.format(n, i);
            })),
            t.options.multiple.maxLabelEntries &&
              (o.length >= t.options.multiple.maxLabelEntries + 1
                ? (o = o.slice(0, t.options.multiple.maxLabelEntries)).push(
                    e.isFunction(n)
                      ? n({
                          text: "...",
                        })
                      : t.utils.format(n, {
                          text: "...",
                        })
                  )
                : o.slice(o.length - 1)),
            t.elements.label.html(o.join(t.options.multiple.separator));
        } else {
          var r = t.lookupItems[t.state.currValue];
          t.elements.label.html(e.isFunction(n) ? n(r) : t.utils.format(n, r));
        }
      },
      populate: function () {
        var t = this,
          n = t.$element.children(),
          i = t.$element.find("option"),
          o = i.filter(":selected"),
          r = i.index(o),
          s = 0,
          a = t.state.multiple ? [] : 0;
        o.length > 1 &&
          t.state.multiple &&
          ((r = []),
          o.each(function () {
            r.push(e(this).index());
          })),
          (t.state.currValue = ~r ? r : a),
          (t.state.selectedIdx = t.state.currValue),
          (t.state.highlightedIdx = t.state.currValue),
          (t.items = []),
          (t.lookupItems = []),
          n.length &&
            (n.each(function (n) {
              var i = e(this);
              if (i.is("optgroup")) {
                var o = {
                  element: i,
                  label: i.prop("label"),
                  groupDisabled: i.prop("disabled"),
                  items: [],
                };
                i.children().each(function (n) {
                  var i = e(this);
                  (o.items[n] = t.getItemData(
                    s,
                    i,
                    o.groupDisabled || i.prop("disabled")
                  )),
                    (t.lookupItems[s] = o.items[n]),
                    s++;
                }),
                  (t.items[n] = o);
              } else (t.items[n] = t.getItemData(s, i, i.prop("disabled"))), (t.lookupItems[s] = t.items[n]), s++;
            }),
            t.setLabel(),
            t.elements.items.append(
              t.elements.itemsScroll.html(t.getItemsMarkup(t.items))
            ));
      },
      getItemData: function (t, n, i) {
        return {
          index: t,
          element: n,
          value: n.val(),
          className: n.prop("class"),
          text: n.html(),
          slug: e.trim(this.utils.replaceDiacritics(n.html())),
          alt: n.attr("data-alt"),
          selected: n.prop("selected"),
          disabled: i,
        };
      },
      getItemsMarkup: function (t) {
        var n = this,
          i = "<ul>";
        return (
          e.isFunction(n.options.listBuilder) &&
            n.options.listBuilder &&
            (t = n.options.listBuilder(t)),
          e.each(t, function (t, o) {
            void 0 !== o.label
              ? ((i += n.utils.format(
                  '<ul class="{1}"><li class="{2}">{3}</li>',
                  n.utils.arrayToClassname([
                    n.classes.group,
                    o.groupDisabled ? "disabled" : "",
                    o.element.prop("class"),
                  ]),
                  n.classes.grouplabel,
                  o.element.prop("label")
                )),
                e.each(o.items, function (e, t) {
                  i += n.getItemMarkup(t.index, t);
                }),
                (i += "</ul>"))
              : (i += n.getItemMarkup(o.index, o));
          }),
          i + "</ul>"
        );
      },
      getItemMarkup: function (t, n) {
        var i = this,
          o = i.options.optionsItemBuilder,
          r = {
            value: n.value,
            text: n.text,
            slug: n.slug,
            index: n.index,
          };
        return i.utils.format(
          '<li data-index="{1}" class="{2}">{3}</li>',
          t,
          i.utils.arrayToClassname([
            n.className,
            t === i.items.length - 1 ? "last" : "",
            n.disabled ? "disabled" : "",
            n.selected ? "selected" : "",
          ]),
          e.isFunction(o)
            ? i.utils.format(o(n, this.$element, t), n)
            : i.utils.format(o, r)
        );
      },
      unbindEvents: function () {
        var e = this;
        e.elements.wrapper
          .add(e.$element)
          .add(e.elements.outerWrapper)
          .add(e.elements.input)
          .off(".sl");
      },
      bindEvents: function () {
        var t = this;
        t.elements.outerWrapper.on("mouseenter.sl mouseleave.sl", function (n) {
          e(this).toggleClass(t.classes.hover, "mouseenter" === n.type),
            t.options.openOnHover &&
              (clearTimeout(t.closeTimer),
              "mouseleave" === n.type
                ? (t.closeTimer = setTimeout(
                    e.proxy(t.close, t),
                    t.options.hoverIntentTimeout
                  ))
                : t.open());
        }),
          t.elements.wrapper.on("click.sl", function (e) {
            t.state.opened ? t.close() : t.open(e);
          }),
          (t.options.nativeOnMobile && t.utils.isMobile()) ||
            (t.$element.on("focus.sl", function () {
              t.elements.input.focus();
            }),
            t.elements.input
              .prop({
                tabindex: t.originalTabindex,
                disabled: !1,
              })
              .on("keydown.sl", e.proxy(t.handleKeys, t))
              .on("focusin.sl", function (e) {
                t.elements.outerWrapper.addClass(t.classes.focus),
                  t.elements.input.one("blur", function () {
                    t.elements.input.blur();
                  }),
                  t.options.openOnFocus && !t.state.opened && t.open(e);
              })
              .on("focusout.sl", function () {
                t.elements.outerWrapper.removeClass(t.classes.focus);
              })
              .on("input propertychange", function () {
                var n = t.elements.input.val(),
                  i = new RegExp("^" + t.utils.escapeRegExp(n), "i");
                clearTimeout(t.resetStr),
                  (t.resetStr = setTimeout(function () {
                    t.elements.input.val("");
                  }, t.options.keySearchTimeout)),
                  n.length &&
                    e.each(t.items, function (e, n) {
                      if (!n.disabled) {
                        if (i.test(n.text) || i.test(n.slug))
                          return void t.highlight(e);
                        if (n.alt)
                          for (
                            var o = n.alt.split("|"), r = 0;
                            r < o.length && o[r];
                            r++
                          )
                            if (i.test(o[r].trim())) return void t.highlight(e);
                      }
                    });
              })),
          t.$li.on({
            mousedown: function (e) {
              e.preventDefault(), e.stopPropagation();
            },
            click: function () {
              return t.select(e(this).data("index")), !1;
            },
          });
      },
      handleKeys: function (t) {
        var n = this,
          i = t.which,
          o = n.options.keys,
          r = e.inArray(i, o.previous) > -1,
          s = e.inArray(i, o.next) > -1,
          a = e.inArray(i, o.select) > -1,
          l = e.inArray(i, o.open) > -1,
          c = n.state.highlightedIdx,
          u = (r && 0 === c) || (s && c + 1 === n.items.length),
          d = 0;
        if (((13 !== i && 32 !== i) || t.preventDefault(), r || s)) {
          if (!n.options.allowWrap && u) return;
          r && (d = n.utils.previousEnabledItem(n.lookupItems, c)),
            s && (d = n.utils.nextEnabledItem(n.lookupItems, c)),
            n.highlight(d);
        }
        if (a && n.state.opened)
          return (
            n.select(c),
            void (
              (n.state.multiple && n.options.multiple.keepMenuOpen) ||
              n.close()
            )
          );
        l && !n.state.opened && n.open();
      },
      refresh: function () {
        var e = this;
        e.populate(), e.activate(), e.utils.triggerCallback("Refresh", e);
      },
      setOptionsDimensions: function () {
        var e = this,
          t = e.elements.items
            .closest(":visible")
            .children(":hidden")
            .addClass(e.classes.tempshow),
          n = e.options.maxHeight,
          i = e.elements.items.outerWidth(),
          o = e.elements.wrapper.outerWidth() - (i - e.elements.items.width());
        !e.options.expandToItemText || o > i
          ? (e.finalWidth = o)
          : (e.elements.items.css("overflow", "scroll"),
            e.elements.outerWrapper.width(9e4),
            (e.finalWidth = e.elements.items.width()),
            e.elements.items.css("overflow", ""),
            e.elements.outerWrapper.width("")),
          e.elements.items.width(e.finalWidth).height() > n &&
            e.elements.items.height(n),
          t.removeClass(e.classes.tempshow);
      },
      isInViewport: function () {
        var e = this;
        if (!0 === e.options.forceRenderAbove)
          e.elements.outerWrapper.addClass(e.classes.above);
        else if (!0 === e.options.forceRenderBelow)
          e.elements.outerWrapper.addClass(e.classes.below);
        else {
          var t = n.scrollTop(),
            i = n.height(),
            o = e.elements.outerWrapper.offset().top,
            r =
              o + e.elements.outerWrapper.outerHeight() + e.itemsHeight <=
              t + i,
            s = o - e.itemsHeight > t,
            a = !r && s,
            l = !a;
          e.elements.outerWrapper.toggleClass(e.classes.above, a),
            e.elements.outerWrapper.toggleClass(e.classes.below, l);
        }
      },
      detectItemVisibility: function (t) {
        var n = this,
          i = n.$li.filter("[data-index]");
        n.state.multiple &&
          ((t = e.isArray(t) && 0 === t.length ? 0 : t),
          (t = e.isArray(t) ? Math.min.apply(Math, t) : t));
        var o = i.eq(t).outerHeight(),
          r = i[t].offsetTop,
          s = n.elements.itemsScroll.scrollTop(),
          a = r + 2 * o;
        n.elements.itemsScroll.scrollTop(
          a > s + n.itemsHeight ? a - n.itemsHeight : r - o < s ? r - o : s
        );
      },
      open: function (n) {
        var i = this;
        if (i.options.nativeOnMobile && i.utils.isMobile()) return !1;
        i.utils.triggerCallback("BeforeOpen", i),
          n &&
            (n.preventDefault(),
            i.options.stopPropagation && n.stopPropagation()),
          i.state.enabled &&
            (i.setOptionsDimensions(),
            e("." + i.classes.hideselect, "." + i.classes.open)
              .children()
              .selectric("close"),
            (i.state.opened = !0),
            (i.itemsHeight = i.elements.items.outerHeight()),
            (i.itemsInnerHeight = i.elements.items.height()),
            i.elements.outerWrapper.addClass(i.classes.open),
            i.elements.input.val(""),
            n && "focusin" !== n.type && i.elements.input.focus(),
            setTimeout(function () {
              t.on("click.sl", e.proxy(i.close, i)).on(
                "scroll.sl",
                e.proxy(i.isInViewport, i)
              );
            }, 1),
            i.isInViewport(),
            i.options.preventWindowScroll &&
              t.on(
                "mousewheel.sl DOMMouseScroll.sl",
                "." + i.classes.scroll,
                function (t) {
                  var n = t.originalEvent,
                    o = e(this).scrollTop(),
                    r = 0;
                  "detail" in n && (r = -1 * n.detail),
                    "wheelDelta" in n && (r = n.wheelDelta),
                    "wheelDeltaY" in n && (r = n.wheelDeltaY),
                    "deltaY" in n && (r = -1 * n.deltaY),
                    ((o === this.scrollHeight - i.itemsInnerHeight && r < 0) ||
                      (0 === o && r > 0)) &&
                      t.preventDefault();
                }
              ),
            i.detectItemVisibility(i.state.selectedIdx),
            i.highlight(i.state.multiple ? -1 : i.state.selectedIdx),
            i.utils.triggerCallback("Open", i));
      },
      close: function () {
        var e = this;
        e.utils.triggerCallback("BeforeClose", e),
          t.off(".sl"),
          e.elements.outerWrapper.removeClass(e.classes.open),
          (e.state.opened = !1),
          e.utils.triggerCallback("Close", e);
      },
      change: function () {
        var t = this;
        t.utils.triggerCallback("BeforeChange", t),
          t.state.multiple
            ? (e.each(t.lookupItems, function (e) {
                (t.lookupItems[e].selected = !1),
                  t.$element.find("option").prop("selected", !1);
              }),
              e.each(t.state.selectedIdx, function (e, n) {
                (t.lookupItems[n].selected = !0),
                  t.$element.find("option").eq(n).prop("selected", !0);
              }),
              (t.state.currValue = t.state.selectedIdx),
              t.setLabel(),
              t.utils.triggerCallback("Change", t))
            : t.state.currValue !== t.state.selectedIdx &&
              (t.$element
                .prop(
                  "selectedIndex",
                  (t.state.currValue = t.state.selectedIdx)
                )
                .data("value", t.lookupItems[t.state.selectedIdx].text),
              t.setLabel(),
              t.utils.triggerCallback("Change", t));
      },
      highlight: function (e) {
        var t = this,
          n = t.$li.filter("[data-index]").removeClass("highlighted");
        t.utils.triggerCallback("BeforeHighlight", t),
          void 0 === e ||
            -1 === e ||
            t.lookupItems[e].disabled ||
            (n.eq((t.state.highlightedIdx = e)).addClass("highlighted"),
            t.detectItemVisibility(e),
            t.utils.triggerCallback("Highlight", t));
      },
      select: function (t) {
        var n = this,
          i = n.$li.filter("[data-index]");
        if (
          (n.utils.triggerCallback("BeforeSelect", n, t),
          void 0 !== t && -1 !== t && !n.lookupItems[t].disabled)
        ) {
          if (n.state.multiple) {
            n.state.selectedIdx = e.isArray(n.state.selectedIdx)
              ? n.state.selectedIdx
              : [n.state.selectedIdx];
            var o = e.inArray(t, n.state.selectedIdx);
            -1 !== o
              ? n.state.selectedIdx.splice(o, 1)
              : n.state.selectedIdx.push(t),
              i
                .removeClass("selected")
                .filter(function (t) {
                  return -1 !== e.inArray(t, n.state.selectedIdx);
                })
                .addClass("selected");
          } else
            i.removeClass("selected")
              .eq((n.state.selectedIdx = t))
              .addClass("selected");
          (n.state.multiple && n.options.multiple.keepMenuOpen) || n.close(),
            n.change(),
            n.utils.triggerCallback("Select", n, t);
        }
      },
      destroy: function (e) {
        var t = this;
        t.state &&
          t.state.enabled &&
          (t.elements.items
            .add(t.elements.wrapper)
            .add(t.elements.input)
            .remove(),
          e || t.$element.removeData("selectric").removeData("value"),
          t.$element
            .prop("tabindex", t.originalTabindex)
            .off(".sl")
            .off(t.eventTriggers)
            .unwrap()
            .unwrap(),
          (t.state.enabled = !1));
      },
    }),
      (e.fn.selectric = function (t) {
        return this.each(function () {
          var n = e.data(this, "selectric");
          n && !n.disableOnMobile
            ? "string" == typeof t && n[t]
              ? n[t]()
              : n.init(t)
            : e.data(this, "selectric", new r(this, t));
        });
      }),
      (e.fn.selectric.defaults = {
        onChange: function (t) {
          e(t).change();
        },
        maxHeight: 300,
        keySearchTimeout: 500,
        arrowButtonMarkup: '<b class="button">&#x25be;</b>',
        disableOnMobile: !1,
        nativeOnMobile: !0,
        openOnFocus: !0,
        openOnHover: !1,
        hoverIntentTimeout: 500,
        expandToItemText: !1,
        responsive: !1,
        preventWindowScroll: !0,
        inheritOriginalWidth: !1,
        allowWrap: !0,
        forceRenderAbove: !1,
        forceRenderBelow: !1,
        stopPropagation: !0,
        optionsItemBuilder: "{text}",
        labelBuilder: "{text}",
        listBuilder: !1,
        keys: {
          previous: [37, 38],
          next: [39, 40],
          select: [9, 13, 27],
          open: [13, 32, 37, 38, 39, 40],
          close: [9, 27],
        },
        customClass: {
          prefix: "selectric",
          camelCase: !1,
        },
        multiple: {
          separator: ", ",
          keepMenuOpen: !0,
          maxLabelEntries: !1,
        },
      });
  }),
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define(t)
      : ((e =
          "undefined" != typeof globalThis ? globalThis : e || self).Viewer =
          t());
  })(this, function () {
    "use strict";
    function e(t) {
      return (e =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(t);
    }
    function t(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function n(e, t, n) {
      return (
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
    function i(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t &&
          (i = i.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, i);
      }
      return n;
    }
    function o(e) {
      for (var t = 1; t < arguments.length; t++) {
        var o = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? i(Object(o), !0).forEach(function (t) {
              n(e, t, o[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
          : i(Object(o)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(o, t)
              );
            });
      }
      return e;
    }
    var r = {
        backdrop: !0,
        button: !0,
        navbar: !0,
        title: !0,
        toolbar: !0,
        className: "",
        container: "body",
        filter: null,
        fullscreen: !0,
        inheritedAttributes: [
          "crossOrigin",
          "decoding",
          "isMap",
          "loading",
          "referrerPolicy",
          "sizes",
          "srcset",
          "useMap",
        ],
        initialViewIndex: 0,
        inline: !1,
        interval: 5e3,
        keyboard: !0,
        focus: !0,
        loading: !0,
        loop: !0,
        minWidth: 200,
        minHeight: 100,
        movable: !0,
        rotatable: !0,
        scalable: !0,
        zoomable: !0,
        zoomOnTouch: !0,
        zoomOnWheel: !0,
        slideOnTouch: !0,
        toggleOnDblclick: !0,
        tooltip: !0,
        transition: !0,
        zIndex: 9999,
        zIndexInline: 0,
        zoomRatio: 0.1,
        minZoomRatio: 0.01,
        maxZoomRatio: 100,
        url: "src",
        ready: null,
        show: null,
        shown: null,
        hide: null,
        hidden: null,
        view: null,
        viewed: null,
        move: null,
        moved: null,
        rotate: null,
        rotated: null,
        scale: null,
        scaled: null,
        zoom: null,
        zoomed: null,
        play: null,
        stop: null,
      },
      s = "undefined" != typeof window && void 0 !== window.document,
      a = s ? window : {},
      l =
        !(!s || !a.document.documentElement) &&
        "ontouchstart" in a.document.documentElement,
      c = !!s && "PointerEvent" in a,
      u = "".concat("viewer", "-active"),
      d = "".concat("viewer", "-close"),
      p = "".concat("viewer", "-fade"),
      f = "".concat("viewer", "-fixed"),
      h = "".concat("viewer", "-fullscreen"),
      m = "".concat("viewer", "-fullscreen-exit"),
      g = "".concat("viewer", "-hide"),
      v = "".concat("viewer", "-hide-md-down"),
      y = "".concat("viewer", "-hide-sm-down"),
      b = "".concat("viewer", "-hide-xs-down"),
      w = "".concat("viewer", "-in"),
      x = "".concat("viewer", "-invisible"),
      T = "".concat("viewer", "-loading"),
      k = "".concat("viewer", "-move"),
      C = "".concat("viewer", "-open"),
      S = "".concat("viewer", "-show"),
      E = "".concat("viewer", "-transition"),
      A = c ? "pointerdown" : l ? "touchstart" : "mousedown",
      D = c ? "pointermove" : l ? "touchmove" : "mousemove",
      $ = c
        ? "pointerup pointercancel"
        : l
        ? "touchend touchcancel"
        : "mouseup",
      I = "".concat("viewer", "Action"),
      O = /\s\s*/,
      L = [
        "zoom-in",
        "zoom-out",
        "one-to-one",
        "reset",
        "prev",
        "play",
        "next",
        "rotate-left",
        "rotate-right",
        "flip-horizontal",
        "flip-vertical",
      ];
    function j(e) {
      return "string" == typeof e;
    }
    var N = Number.isNaN || a.isNaN;
    function P(e) {
      return "number" == typeof e && !N(e);
    }
    function _(e) {
      return void 0 === e;
    }
    function M(t) {
      return "object" === e(t) && null !== t;
    }
    var H = Object.prototype.hasOwnProperty;
    function q(e) {
      if (!M(e)) return !1;
      try {
        var t = e.constructor,
          n = t.prototype;
        return t && n && H.call(n, "isPrototypeOf");
      } catch (e) {
        return !1;
      }
    }
    function R(e) {
      return "function" == typeof e;
    }
    function F(e, t) {
      if (e && R(t))
        if (Array.isArray(e) || P(e.length)) {
          var n,
            i = e.length;
          for (n = 0; n < i && !1 !== t.call(e, e[n], n, e); n += 1);
        } else
          M(e) &&
            Object.keys(e).forEach(function (n) {
              t.call(e, e[n], n, e);
            });
      return e;
    }
    var z =
        Object.assign ||
        function (e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1;
            i < t;
            i++
          )
            n[i - 1] = arguments[i];
          return (
            M(e) &&
              n.length > 0 &&
              n.forEach(function (t) {
                M(t) &&
                  Object.keys(t).forEach(function (n) {
                    e[n] = t[n];
                  });
              }),
            e
          );
        },
      W = /^(?:width|height|left|top|marginLeft|marginTop)$/;
    function B(e, t) {
      var n = e.style;
      F(t, function (e, t) {
        W.test(t) && P(e) && (e += "px"), (n[t] = e);
      });
    }
    function U(e, t) {
      return (
        !(!e || !t) &&
        (e.classList ? e.classList.contains(t) : e.className.indexOf(t) > -1)
      );
    }
    function X(e, t) {
      if (e && t)
        if (P(e.length))
          F(e, function (e) {
            X(e, t);
          });
        else if (e.classList) e.classList.add(t);
        else {
          var n = e.className.trim();
          n
            ? n.indexOf(t) < 0 && (e.className = "".concat(n, " ").concat(t))
            : (e.className = t);
        }
    }
    function V(e, t) {
      e &&
        t &&
        (P(e.length)
          ? F(e, function (e) {
              V(e, t);
            })
          : e.classList
          ? e.classList.remove(t)
          : e.className.indexOf(t) >= 0 &&
            (e.className = e.className.replace(t, "")));
    }
    function Y(e, t, n) {
      t &&
        (P(e.length)
          ? F(e, function (e) {
              Y(e, t, n);
            })
          : n
          ? X(e, t)
          : V(e, t));
    }
    var Z = /([a-z\d])([A-Z])/g;
    function K(e) {
      return e.replace(Z, "$1-$2").toLowerCase();
    }
    function G(e, t) {
      return M(e[t])
        ? e[t]
        : e.dataset
        ? e.dataset[t]
        : e.getAttribute("data-".concat(K(t)));
    }
    function Q(e, t, n) {
      M(n)
        ? (e[t] = n)
        : e.dataset
        ? (e.dataset[t] = n)
        : e.setAttribute("data-".concat(K(t)), n);
    }
    var J = (function () {
      var e = !1;
      if (s) {
        var t = !1,
          n = function () {},
          i = Object.defineProperty({}, "once", {
            get: function () {
              return (e = !0), t;
            },
            set: function (e) {
              t = e;
            },
          });
        a.addEventListener("test", n, i), a.removeEventListener("test", n, i);
      }
      return e;
    })();
    function ee(e, t, n) {
      var i =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        o = n;
      t.trim()
        .split(O)
        .forEach(function (t) {
          if (!J) {
            var r = e.listeners;
            r &&
              r[t] &&
              r[t][n] &&
              ((o = r[t][n]),
              delete r[t][n],
              0 === Object.keys(r[t]).length && delete r[t],
              0 === Object.keys(r).length && delete e.listeners);
          }
          e.removeEventListener(t, o, i);
        });
    }
    function te(e, t, n) {
      var i =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        o = n;
      t.trim()
        .split(O)
        .forEach(function (t) {
          if (i.once && !J) {
            var r = e.listeners,
              s = void 0 === r ? {} : r;
            (o = function () {
              delete s[t][n], e.removeEventListener(t, o, i);
              for (
                var r = arguments.length, a = new Array(r), l = 0;
                l < r;
                l++
              )
                a[l] = arguments[l];
              n.apply(e, a);
            }),
              s[t] || (s[t] = {}),
              s[t][n] && e.removeEventListener(t, s[t][n], i),
              (s[t][n] = o),
              (e.listeners = s);
          }
          e.addEventListener(t, o, i);
        });
    }
    function ne(e, t, n, i) {
      var r;
      return (
        R(Event) && R(CustomEvent)
          ? (r = new CustomEvent(
              t,
              o(
                {
                  bubbles: !0,
                  cancelable: !0,
                  detail: n,
                },
                i
              )
            ))
          : (r = document.createEvent("CustomEvent")).initCustomEvent(
              t,
              !0,
              !0,
              n
            ),
        e.dispatchEvent(r)
      );
    }
    function ie(e) {
      var t = e.rotate,
        n = e.scaleX,
        i = e.scaleY,
        o = e.translateX,
        r = e.translateY,
        s = [];
      P(o) && 0 !== o && s.push("translateX(".concat(o, "px)")),
        P(r) && 0 !== r && s.push("translateY(".concat(r, "px)")),
        P(t) && 0 !== t && s.push("rotate(".concat(t, "deg)")),
        P(n) && 1 !== n && s.push("scaleX(".concat(n, ")")),
        P(i) && 1 !== i && s.push("scaleY(".concat(i, ")"));
      var a = s.length ? s.join(" ") : "none";
      return {
        WebkitTransform: a,
        msTransform: a,
        transform: a,
      };
    }
    var oe =
      a.navigator &&
      /(Macintosh|iPhone|iPod|iPad).*AppleWebKit/i.test(a.navigator.userAgent);
    function re(e, t, n) {
      var i = document.createElement("img");
      if (e.naturalWidth && !oe) return n(e.naturalWidth, e.naturalHeight), i;
      var o = document.body || document.documentElement;
      return (
        (i.onload = function () {
          n(i.width, i.height), oe || o.removeChild(i);
        }),
        F(t.inheritedAttributes, function (t) {
          var n = e.getAttribute(t);
          null !== n && i.setAttribute(t, n);
        }),
        (i.src = e.src),
        oe ||
          ((i.style.cssText =
            "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;"),
          o.appendChild(i)),
        i
      );
    }
    function se(e) {
      switch (e) {
        case 2:
          return b;
        case 3:
          return y;
        case 4:
          return v;
        default:
          return "";
      }
    }
    function ae(e, t) {
      var n = e.pageX,
        i = e.pageY,
        r = {
          endX: n,
          endY: i,
        };
      return t
        ? r
        : o(
            {
              timeStamp: Date.now(),
              startX: n,
              startY: i,
            },
            r
          );
    }
    var le,
      ce = {
        render: function () {
          this.initContainer(),
            this.initViewer(),
            this.initList(),
            this.renderViewer();
        },
        initBody: function () {
          var e = this.element.ownerDocument,
            t = e.body || e.documentElement;
          (this.body = t),
            (this.scrollbarWidth =
              window.innerWidth - e.documentElement.clientWidth),
            (this.initialBodyPaddingRight = t.style.paddingRight),
            (this.initialBodyComputedPaddingRight =
              window.getComputedStyle(t).paddingRight);
        },
        initContainer: function () {
          this.containerData = {
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        initViewer: function () {
          var e,
            t = this.options,
            n = this.parent;
          t.inline &&
            ((e = {
              width: Math.max(n.offsetWidth, t.minWidth),
              height: Math.max(n.offsetHeight, t.minHeight),
            }),
            (this.parentData = e)),
            (!this.fulled && e) || (e = this.containerData),
            (this.viewerData = z({}, e));
        },
        renderViewer: function () {
          this.options.inline &&
            !this.fulled &&
            B(this.viewer, this.viewerData);
        },
        initList: function () {
          var e = this,
            t = this.element,
            n = this.options,
            i = this.list,
            o = [];
          (i.innerHTML = ""),
            F(this.images, function (t, r) {
              var s = t.src,
                a =
                  t.alt ||
                  (function (e) {
                    return j(e)
                      ? decodeURIComponent(
                          e.replace(/^.*\//, "").replace(/[?&#].*$/, "")
                        )
                      : "";
                  })(s),
                l = e.getImageURL(t);
              if (s || l) {
                var c = document.createElement("li"),
                  u = document.createElement("img");
                F(n.inheritedAttributes, function (e) {
                  var n = t.getAttribute(e);
                  null !== n && u.setAttribute(e, n);
                }),
                  (u.src = s || l),
                  (u.alt = a),
                  u.setAttribute("data-original-url", l || s),
                  c.setAttribute("data-index", r),
                  c.setAttribute("data-viewer-action", "view"),
                  c.setAttribute("role", "button"),
                  n.keyboard && c.setAttribute("tabindex", 0),
                  c.appendChild(u),
                  i.appendChild(c),
                  o.push(c);
              }
            }),
            (this.items = o),
            F(o, function (t) {
              var i = t.firstElementChild;
              Q(i, "filled", !0),
                n.loading && X(t, T),
                te(
                  i,
                  "load",
                  function (i) {
                    n.loading && V(t, T), e.loadImage(i);
                  },
                  {
                    once: !0,
                  }
                );
            }),
            n.transition &&
              te(
                t,
                "viewed",
                function () {
                  X(i, E);
                },
                {
                  once: !0,
                }
              );
        },
        renderList: function (e) {
          var t = e || this.index,
            n = this.items[t].offsetWidth || 30,
            i = n + 1;
          B(
            this.list,
            z(
              {
                width: i * this.length,
              },
              ie({
                translateX: (this.viewerData.width - n) / 2 - i * t,
              })
            )
          );
        },
        resetList: function () {
          var e = this.list;
          (e.innerHTML = ""),
            V(e, E),
            B(
              e,
              ie({
                translateX: 0,
              })
            );
        },
        initImage: function (e) {
          var t,
            n = this,
            i = this.options,
            o = this.image,
            r = this.viewerData,
            s = this.footer.offsetHeight,
            a = r.width,
            l = Math.max(r.height - s, s),
            c = this.imageData || {};
          (this.imageInitializing = {
            abort: function () {
              t.onload = null;
            },
          }),
            (t = re(o, i, function (t, o) {
              var r = t / o,
                s = a,
                u = l;
              (n.imageInitializing = !1),
                l * r > a ? (u = a / r) : (s = l * r),
                (s = Math.min(0.9 * s, t)),
                (u = Math.min(0.9 * u, o));
              var d = (a - s) / 2,
                p = (l - u) / 2,
                f = {
                  left: d,
                  top: p,
                  x: d,
                  y: p,
                  width: s,
                  height: u,
                  ratio: s / t,
                  aspectRatio: r,
                  naturalWidth: t,
                  naturalHeight: o,
                },
                h = z({}, f);
              i.rotatable && ((f.rotate = c.rotate || 0), (h.rotate = 0)),
                i.scalable &&
                  ((f.scaleX = c.scaleX || 1),
                  (f.scaleY = c.scaleY || 1),
                  (h.scaleX = 1),
                  (h.scaleY = 1)),
                (n.imageData = f),
                (n.initialImageData = h),
                e && e();
            }));
        },
        renderImage: function (e) {
          var t = this,
            n = this.image,
            i = this.imageData;
          if (
            (B(
              n,
              z(
                {
                  width: i.width,
                  height: i.height,
                  marginLeft: i.x,
                  marginTop: i.y,
                },
                ie(i)
              )
            ),
            e)
          )
            if (
              (this.viewing ||
                this.moving ||
                this.rotating ||
                this.scaling ||
                this.zooming) &&
              this.options.transition &&
              U(n, E)
            ) {
              var o = function () {
                (t.imageRendering = !1), e();
              };
              (this.imageRendering = {
                abort: function () {
                  ee(n, "transitionend", o);
                },
              }),
                te(n, "transitionend", o, {
                  once: !0,
                });
            } else e();
        },
        resetImage: function () {
          if (this.viewing || this.viewed) {
            var e = this.image;
            this.viewing && this.viewing.abort(),
              e.parentNode.removeChild(e),
              (this.image = null);
          }
        },
      },
      ue = {
        bind: function () {
          var e = this.options,
            t = this.viewer,
            n = this.canvas,
            i = this.element.ownerDocument;
          te(t, "click", (this.onClick = this.click.bind(this))),
            te(t, "dragstart", (this.onDragStart = this.dragstart.bind(this))),
            te(n, A, (this.onPointerDown = this.pointerdown.bind(this))),
            te(i, D, (this.onPointerMove = this.pointermove.bind(this))),
            te(i, $, (this.onPointerUp = this.pointerup.bind(this))),
            te(i, "keydown", (this.onKeyDown = this.keydown.bind(this))),
            te(window, "resize", (this.onResize = this.resize.bind(this))),
            e.zoomable &&
              e.zoomOnWheel &&
              te(t, "wheel", (this.onWheel = this.wheel.bind(this)), {
                passive: !1,
                capture: !0,
              }),
            e.toggleOnDblclick &&
              te(n, "dblclick", (this.onDblclick = this.dblclick.bind(this)));
        },
        unbind: function () {
          var e = this.options,
            t = this.viewer,
            n = this.canvas,
            i = this.element.ownerDocument;
          ee(t, "click", this.onClick),
            ee(t, "dragstart", this.onDragStart),
            ee(n, A, this.onPointerDown),
            ee(i, D, this.onPointerMove),
            ee(i, $, this.onPointerUp),
            ee(i, "keydown", this.onKeyDown),
            ee(window, "resize", this.onResize),
            e.zoomable &&
              e.zoomOnWheel &&
              ee(t, "wheel", this.onWheel, {
                passive: !1,
                capture: !0,
              }),
            e.toggleOnDblclick && ee(n, "dblclick", this.onDblclick);
        },
      },
      de = {
        click: function (e) {
          var t = this.options,
            n = this.imageData,
            i = e.target,
            o = G(i, I);
          switch (
            (o ||
              "img" !== i.localName ||
              "li" !== i.parentElement.localName ||
              (o = G((i = i.parentElement), I)),
            l &&
              e.isTrusted &&
              i === this.canvas &&
              clearTimeout(this.clickCanvasTimeout),
            o)
          ) {
            case "mix":
              this.played
                ? this.stop()
                : t.inline
                ? this.fulled
                  ? this.exit()
                  : this.full()
                : this.hide();
              break;
            case "hide":
              this.hide();
              break;
            case "view":
              this.view(G(i, "index"));
              break;
            case "zoom-in":
              this.zoom(0.1, !0);
              break;
            case "zoom-out":
              this.zoom(-0.1, !0);
              break;
            case "one-to-one":
              this.toggle();
              break;
            case "reset":
              this.reset();
              break;
            case "prev":
              this.prev(t.loop);
              break;
            case "play":
              this.play(t.fullscreen);
              break;
            case "next":
              this.next(t.loop);
              break;
            case "rotate-left":
              this.rotate(-90);
              break;
            case "rotate-right":
              this.rotate(90);
              break;
            case "flip-horizontal":
              this.scaleX(-n.scaleX || -1);
              break;
            case "flip-vertical":
              this.scaleY(-n.scaleY || -1);
              break;
            default:
              this.played && this.stop();
          }
        },
        dblclick: function (e) {
          e.preventDefault(),
            this.viewed &&
              e.target === this.image &&
              (l && e.isTrusted && clearTimeout(this.doubleClickImageTimeout),
              this.toggle());
        },
        load: function () {
          var e = this;
          this.timeout && (clearTimeout(this.timeout), (this.timeout = !1));
          var t = this.element,
            n = this.options,
            i = this.image,
            o = this.index,
            r = this.viewerData;
          V(i, x),
            n.loading && V(this.canvas, T),
            (i.style.cssText =
              "height:0;" +
              "margin-left:".concat(r.width / 2, "px;") +
              "margin-top:".concat(r.height / 2, "px;") +
              "max-width:none!important;position:absolute;width:0;"),
            this.initImage(function () {
              Y(i, k, n.movable),
                Y(i, E, n.transition),
                e.renderImage(function () {
                  (e.viewed = !0),
                    (e.viewing = !1),
                    R(n.viewed) &&
                      te(t, "viewed", n.viewed, {
                        once: !0,
                      }),
                    ne(
                      t,
                      "viewed",
                      {
                        originalImage: e.images[o],
                        index: o,
                        image: i,
                      },
                      {
                        cancelable: !1,
                      }
                    );
                });
            });
        },
        loadImage: function (e) {
          var t = e.target,
            n = t.parentNode,
            i = n.offsetWidth || 30,
            o = n.offsetHeight || 50,
            r = !!G(t, "filled");
          re(t, this.options, function (e, n) {
            var s = e / n,
              a = i,
              l = o;
            o * s > i
              ? r
                ? (a = o * s)
                : (l = i / s)
              : r
              ? (l = i / s)
              : (a = o * s),
              B(
                t,
                z(
                  {
                    width: a,
                    height: l,
                  },
                  ie({
                    translateX: (i - a) / 2,
                    translateY: (o - l) / 2,
                  })
                )
              );
          });
        },
        keydown: function (e) {
          var t = this.options;
          if (t.keyboard) {
            var n = e.keyCode || e.which || e.charCode;
            switch (n) {
              case 13:
                this.viewer.contains(e.target) && this.click(e);
            }
            if (this.fulled)
              switch (n) {
                case 27:
                  this.played
                    ? this.stop()
                    : t.inline
                    ? this.fulled && this.exit()
                    : this.hide();
                  break;
                case 32:
                  this.played && this.stop();
                  break;
                case 37:
                  this.prev(t.loop);
                  break;
                case 38:
                  e.preventDefault(), this.zoom(t.zoomRatio, !0);
                  break;
                case 39:
                  this.next(t.loop);
                  break;
                case 40:
                  e.preventDefault(), this.zoom(-t.zoomRatio, !0);
                  break;
                case 48:
                case 49:
                  e.ctrlKey && (e.preventDefault(), this.toggle());
              }
          }
        },
        dragstart: function (e) {
          "img" === e.target.localName && e.preventDefault();
        },
        pointerdown: function (e) {
          var t = this.options,
            n = this.pointers,
            i = e.buttons,
            o = e.button;
          if (
            !(
              !this.viewed ||
              this.showing ||
              this.viewing ||
              this.hiding ||
              (("mousedown" === e.type ||
                ("pointerdown" === e.type && "mouse" === e.pointerType)) &&
                ((P(i) && 1 !== i) || (P(o) && 0 !== o) || e.ctrlKey))
            )
          ) {
            e.preventDefault(),
              e.changedTouches
                ? F(e.changedTouches, function (e) {
                    n[e.identifier] = ae(e);
                  })
                : (n[e.pointerId || 0] = ae(e));
            var r = !!t.movable && "move";
            t.zoomOnTouch && t.zoomable && Object.keys(n).length > 1
              ? (r = "zoom")
              : t.slideOnTouch &&
                ("touch" === e.pointerType || "touchstart" === e.type) &&
                this.isSwitchable() &&
                (r = "switch"),
              !t.transition ||
                ("move" !== r && "zoom" !== r) ||
                V(this.image, E),
              (this.action = r);
          }
        },
        pointermove: function (e) {
          var t = this.pointers,
            n = this.action;
          this.viewed &&
            n &&
            (e.preventDefault(),
            e.changedTouches
              ? F(e.changedTouches, function (e) {
                  z(t[e.identifier] || {}, ae(e, !0));
                })
              : z(t[e.pointerId || 0] || {}, ae(e, !0)),
            this.change(e));
        },
        pointerup: function (e) {
          var t,
            n = this,
            i = this.options,
            o = this.action,
            r = this.pointers;
          e.changedTouches
            ? F(e.changedTouches, function (e) {
                (t = r[e.identifier]), delete r[e.identifier];
              })
            : ((t = r[e.pointerId || 0]), delete r[e.pointerId || 0]),
            o &&
              (e.preventDefault(),
              !i.transition ||
                ("move" !== o && "zoom" !== o) ||
                X(this.image, E),
              (this.action = !1),
              l &&
                "zoom" !== o &&
                t &&
                Date.now() - t.timeStamp < 500 &&
                (clearTimeout(this.clickCanvasTimeout),
                clearTimeout(this.doubleClickImageTimeout),
                i.toggleOnDblclick && this.viewed && e.target === this.image
                  ? this.imageClicked
                    ? ((this.imageClicked = !1),
                      (this.doubleClickImageTimeout = setTimeout(function () {
                        ne(n.image, "dblclick");
                      }, 50)))
                    : ((this.imageClicked = !0),
                      (this.doubleClickImageTimeout = setTimeout(function () {
                        n.imageClicked = !1;
                      }, 500)))
                  : ((this.imageClicked = !1),
                    i.backdrop &&
                      "static" !== i.backdrop &&
                      e.target === this.canvas &&
                      (this.clickCanvasTimeout = setTimeout(function () {
                        ne(n.canvas, "click");
                      }, 50)))));
        },
        resize: function () {
          var e = this;
          if (
            this.isShown &&
            !this.hiding &&
            (this.fulled && (this.close(), this.initBody(), this.open()),
            this.initContainer(),
            this.initViewer(),
            this.renderViewer(),
            this.renderList(),
            this.viewed &&
              this.initImage(function () {
                e.renderImage();
              }),
            this.played)
          ) {
            if (
              this.options.fullscreen &&
              this.fulled &&
              !(
                document.fullscreenElement ||
                document.webkitFullscreenElement ||
                document.mozFullScreenElement ||
                document.msFullscreenElement
              )
            )
              return void this.stop();
            F(this.player.getElementsByTagName("img"), function (t) {
              te(t, "load", e.loadImage.bind(e), {
                once: !0,
              }),
                ne(t, "load");
            });
          }
        },
        wheel: function (e) {
          var t = this;
          if (this.viewed && (e.preventDefault(), !this.wheeling)) {
            (this.wheeling = !0),
              setTimeout(function () {
                t.wheeling = !1;
              }, 50);
            var n = Number(this.options.zoomRatio) || 0.1,
              i = 1;
            e.deltaY
              ? (i = e.deltaY > 0 ? 1 : -1)
              : e.wheelDelta
              ? (i = -e.wheelDelta / 120)
              : e.detail && (i = e.detail > 0 ? 1 : -1),
              this.zoom(-i * n, !0, e);
          }
        },
      },
      pe = {
        show: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = this.element,
            n = this.options;
          if (n.inline || this.showing || this.isShown || this.showing)
            return this;
          if (!this.ready)
            return this.build(), this.ready && this.show(e), this;
          if (
            (R(n.show) &&
              te(t, "show", n.show, {
                once: !0,
              }),
            !1 === ne(t, "show") || !this.ready)
          )
            return this;
          this.hiding && this.transitioning.abort(),
            (this.showing = !0),
            this.open();
          var i = this.viewer;
          if (
            (V(i, g),
            i.setAttribute("role", "dialog"),
            i.setAttribute("aria-labelledby", this.title.id),
            i.setAttribute("aria-modal", !0),
            i.removeAttribute("aria-hidden"),
            n.transition && !e)
          ) {
            var o = this.shown.bind(this);
            (this.transitioning = {
              abort: function () {
                ee(i, "transitionend", o), V(i, w);
              },
            }),
              X(i, E),
              (i.initialOffsetWidth = i.offsetWidth),
              te(i, "transitionend", o, {
                once: !0,
              }),
              X(i, w);
          } else X(i, w), this.shown();
          return this;
        },
        hide: function () {
          var e = this,
            t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            n = this.element,
            i = this.options;
          if (i.inline || this.hiding || (!this.isShown && !this.showing))
            return this;
          if (
            (R(i.hide) &&
              te(n, "hide", i.hide, {
                once: !0,
              }),
            !1 === ne(n, "hide"))
          )
            return this;
          this.showing && this.transitioning.abort(),
            (this.hiding = !0),
            this.played ? this.stop() : this.viewing && this.viewing.abort();
          var o = this.viewer,
            r = this.image,
            s = function () {
              V(o, w), e.hidden();
            };
          if (i.transition && !t) {
            var a = function t(n) {
                n && n.target === o && (ee(o, "transitionend", t), e.hidden());
              },
              l = function () {
                U(o, E) ? (te(o, "transitionend", a), V(o, w)) : s();
              };
            (this.transitioning = {
              abort: function () {
                e.viewed && U(r, E)
                  ? ee(r, "transitionend", l)
                  : U(o, E) && ee(o, "transitionend", a);
              },
            }),
              this.viewed && U(r, E)
                ? (te(r, "transitionend", l, {
                    once: !0,
                  }),
                  this.zoomTo(0, !1, !1, !0))
                : l();
          } else s();
          return this;
        },
        view: function () {
          var e = this,
            t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.options.initialViewIndex;
          if (
            ((t = Number(t) || 0),
            this.hiding ||
              this.played ||
              t < 0 ||
              t >= this.length ||
              (this.viewed && t === this.index))
          )
            return this;
          if (!this.isShown) return (this.index = t), this.show();
          this.viewing && this.viewing.abort();
          var n = this.element,
            i = this.options,
            o = this.title,
            r = this.canvas,
            s = this.items[t],
            a = s.querySelector("img"),
            l = G(a, "originalUrl"),
            c = a.getAttribute("alt"),
            d = document.createElement("img");
          if (
            (F(i.inheritedAttributes, function (e) {
              var t = a.getAttribute(e);
              null !== t && d.setAttribute(e, t);
            }),
            (d.src = l),
            (d.alt = c),
            R(i.view) &&
              te(n, "view", i.view, {
                once: !0,
              }),
            !1 ===
              ne(n, "view", {
                originalImage: this.images[t],
                index: t,
                image: d,
              }) ||
              !this.isShown ||
              this.hiding ||
              this.played)
          )
            return this;
          var p = this.items[this.index];
          V(p, u),
            p.removeAttribute("aria-selected"),
            X(s, u),
            s.setAttribute("aria-selected", !0),
            i.focus && s.focus(),
            (this.image = d),
            (this.viewed = !1),
            (this.index = t),
            (this.imageData = {}),
            X(d, x),
            i.loading && X(r, T),
            (r.innerHTML = ""),
            r.appendChild(d),
            this.renderList(),
            (o.innerHTML = "");
          var f,
            h = function () {
              var t,
                n = e.imageData,
                r = Array.isArray(i.title) ? i.title[1] : i.title;
              o.innerHTML = j(
                (t = R(r)
                  ? r.call(e, d, n)
                  : ""
                      .concat(c, " (")
                      .concat(n.naturalWidth, " × ")
                      .concat(n.naturalHeight, ")"))
              )
                ? t
                    .replace(/&(?!amp;|quot;|#39;|lt;|gt;)/g, "&amp;")
                    .replace(/"/g, "&quot;")
                    .replace(/'/g, "&#39;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                : t;
            };
          return (
            te(n, "viewed", h, {
              once: !0,
            }),
            (this.viewing = {
              abort: function () {
                ee(n, "viewed", h),
                  d.complete
                    ? e.imageRendering
                      ? e.imageRendering.abort()
                      : e.imageInitializing && e.imageInitializing.abort()
                    : ((d.src = ""),
                      ee(d, "load", f),
                      e.timeout && clearTimeout(e.timeout));
              },
            }),
            d.complete
              ? this.load()
              : (te(d, "load", (f = this.load.bind(this)), {
                  once: !0,
                }),
                this.timeout && clearTimeout(this.timeout),
                (this.timeout = setTimeout(function () {
                  V(d, x), (e.timeout = !1);
                }, 1e3))),
            this
          );
        },
        prev: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = this.index - 1;
          return t < 0 && (t = e ? this.length - 1 : 0), this.view(t), this;
        },
        next: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = this.length - 1,
            n = this.index + 1;
          return n > t && (n = e ? 0 : t), this.view(n), this;
        },
        move: function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : e,
            n = this.imageData;
          return (
            this.moveTo(_(e) ? e : n.x + Number(e), _(t) ? t : n.y + Number(t)),
            this
          );
        },
        moveTo: function (e) {
          var t = this,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : e,
            i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null,
            o = this.element,
            r = this.options,
            s = this.imageData;
          if (
            ((e = Number(e)),
            (n = Number(n)),
            this.viewed && !this.played && r.movable)
          ) {
            var a = s.x,
              l = s.y,
              c = !1;
            if ((P(e) ? (c = !0) : (e = a), P(n) ? (c = !0) : (n = l), c)) {
              if (
                (R(r.move) &&
                  te(o, "move", r.move, {
                    once: !0,
                  }),
                !1 ===
                  ne(o, "move", {
                    x: e,
                    y: n,
                    oldX: a,
                    oldY: l,
                    originalEvent: i,
                  }))
              )
                return this;
              (s.x = e),
                (s.y = n),
                (s.left = e),
                (s.top = n),
                (this.moving = !0),
                this.renderImage(function () {
                  (t.moving = !1),
                    R(r.moved) &&
                      te(o, "moved", r.moved, {
                        once: !0,
                      }),
                    ne(
                      o,
                      "moved",
                      {
                        x: e,
                        y: n,
                        oldX: a,
                        oldY: l,
                        originalEvent: i,
                      },
                      {
                        cancelable: !1,
                      }
                    );
                });
            }
          }
          return this;
        },
        rotate: function (e) {
          return this.rotateTo((this.imageData.rotate || 0) + Number(e)), this;
        },
        rotateTo: function (e) {
          var t = this,
            n = this.element,
            i = this.options,
            o = this.imageData;
          if (
            P((e = Number(e))) &&
            this.viewed &&
            !this.played &&
            i.rotatable
          ) {
            var r = o.rotate;
            if (
              (R(i.rotate) &&
                te(n, "rotate", i.rotate, {
                  once: !0,
                }),
              !1 ===
                ne(n, "rotate", {
                  degree: e,
                  oldDegree: r,
                }))
            )
              return this;
            (o.rotate = e),
              (this.rotating = !0),
              this.renderImage(function () {
                (t.rotating = !1),
                  R(i.rotated) &&
                    te(n, "rotated", i.rotated, {
                      once: !0,
                    }),
                  ne(
                    n,
                    "rotated",
                    {
                      degree: e,
                      oldDegree: r,
                    },
                    {
                      cancelable: !1,
                    }
                  );
              });
          }
          return this;
        },
        scaleX: function (e) {
          return this.scale(e, this.imageData.scaleY), this;
        },
        scaleY: function (e) {
          return this.scale(this.imageData.scaleX, e), this;
        },
        scale: function (e) {
          var t = this,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : e,
            i = this.element,
            o = this.options,
            r = this.imageData;
          if (
            ((e = Number(e)),
            (n = Number(n)),
            this.viewed && !this.played && o.scalable)
          ) {
            var s = r.scaleX,
              a = r.scaleY,
              l = !1;
            if ((P(e) ? (l = !0) : (e = s), P(n) ? (l = !0) : (n = a), l)) {
              if (
                (R(o.scale) &&
                  te(i, "scale", o.scale, {
                    once: !0,
                  }),
                !1 ===
                  ne(i, "scale", {
                    scaleX: e,
                    scaleY: n,
                    oldScaleX: s,
                    oldScaleY: a,
                  }))
              )
                return this;
              (r.scaleX = e),
                (r.scaleY = n),
                (this.scaling = !0),
                this.renderImage(function () {
                  (t.scaling = !1),
                    R(o.scaled) &&
                      te(i, "scaled", o.scaled, {
                        once: !0,
                      }),
                    ne(
                      i,
                      "scaled",
                      {
                        scaleX: e,
                        scaleY: n,
                        oldScaleX: s,
                        oldScaleY: a,
                      },
                      {
                        cancelable: !1,
                      }
                    );
                });
            }
          }
          return this;
        },
        zoom: function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null,
            i = this.imageData;
          return (
            (e = (e = Number(e)) < 0 ? 1 / (1 - e) : 1 + e),
            this.zoomTo((i.width * e) / i.naturalWidth, t, n),
            this
          );
        },
        zoomTo: function (e) {
          var t = this,
            n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null,
            o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            r = this.element,
            s = this.options,
            a = this.pointers,
            l = this.imageData,
            c = l.x,
            u = l.y,
            d = l.width,
            p = l.height,
            f = l.naturalWidth,
            h = l.naturalHeight;
          if (
            P((e = Math.max(0, e))) &&
            this.viewed &&
            !this.played &&
            (o || s.zoomable)
          ) {
            if (!o) {
              var m = Math.max(0.01, s.minZoomRatio),
                g = Math.min(100, s.maxZoomRatio);
              e = Math.min(Math.max(e, m), g);
            }
            i && s.zoomRatio >= 0.055 && e > 0.95 && e < 1.05 && (e = 1);
            var v = f * e,
              y = h * e,
              b = v - d,
              w = y - p,
              x = d / f;
            if (
              (R(s.zoom) &&
                te(r, "zoom", s.zoom, {
                  once: !0,
                }),
              !1 ===
                ne(r, "zoom", {
                  ratio: e,
                  oldRatio: x,
                  originalEvent: i,
                }))
            )
              return this;
            if (((this.zooming = !0), i)) {
              var T = (function (e) {
                  var t = e.getBoundingClientRect();
                  return {
                    left:
                      t.left +
                      (window.pageXOffset -
                        document.documentElement.clientLeft),
                    top:
                      t.top +
                      (window.pageYOffset - document.documentElement.clientTop),
                  };
                })(this.viewer),
                k =
                  a && Object.keys(a).length
                    ? (function (e) {
                        var t = 0,
                          n = 0,
                          i = 0;
                        return (
                          F(e, function (e) {
                            var o = e.startX,
                              r = e.startY;
                            (t += o), (n += r), (i += 1);
                          }),
                          {
                            pageX: (t /= i),
                            pageY: (n /= i),
                          }
                        );
                      })(a)
                    : {
                        pageX: i.pageX,
                        pageY: i.pageY,
                      };
              (l.x -= b * ((k.pageX - T.left - c) / d)),
                (l.y -= w * ((k.pageY - T.top - u) / p));
            } else (l.x -= b / 2), (l.y -= w / 2);
            (l.left = l.x),
              (l.top = l.y),
              (l.width = v),
              (l.height = y),
              (l.ratio = e),
              this.renderImage(function () {
                (t.zooming = !1),
                  R(s.zoomed) &&
                    te(r, "zoomed", s.zoomed, {
                      once: !0,
                    }),
                  ne(
                    r,
                    "zoomed",
                    {
                      ratio: e,
                      oldRatio: x,
                      originalEvent: i,
                    },
                    {
                      cancelable: !1,
                    }
                  );
              }),
              n && this.tooltip();
          }
          return this;
        },
        play: function () {
          var e = this,
            t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (!this.isShown || this.played) return this;
          var n = this.element,
            i = this.options;
          if (
            (R(i.play) &&
              te(n, "play", i.play, {
                once: !0,
              }),
            !1 === ne(n, "play"))
          )
            return this;
          var o = this.player,
            r = this.loadImage.bind(this),
            s = [],
            a = 0,
            l = 0;
          if (
            ((this.played = !0),
            (this.onLoadWhenPlay = r),
            t && this.requestFullscreen(),
            X(o, S),
            F(this.items, function (e, t) {
              var n = e.querySelector("img"),
                c = document.createElement("img");
              (c.src = G(n, "originalUrl")),
                (c.alt = n.getAttribute("alt")),
                (c.referrerPolicy = n.referrerPolicy),
                (a += 1),
                X(c, p),
                Y(c, E, i.transition),
                U(e, u) && (X(c, w), (l = t)),
                s.push(c),
                te(c, "load", r, {
                  once: !0,
                }),
                o.appendChild(c);
            }),
            P(i.interval) && i.interval > 0)
          ) {
            var c = function t() {
              e.playing = setTimeout(function () {
                V(s[l], w), X(s[(l = (l += 1) < a ? l : 0)], w), t();
              }, i.interval);
            };
            a > 1 && c();
          }
          return this;
        },
        stop: function () {
          var e = this;
          if (!this.played) return this;
          var t = this.element,
            n = this.options;
          if (
            (R(n.stop) &&
              te(t, "stop", n.stop, {
                once: !0,
              }),
            !1 === ne(t, "stop"))
          )
            return this;
          var i = this.player;
          return (
            (this.played = !1),
            clearTimeout(this.playing),
            F(i.getElementsByTagName("img"), function (t) {
              ee(t, "load", e.onLoadWhenPlay);
            }),
            V(i, S),
            (i.innerHTML = ""),
            this.exitFullscreen(),
            this
          );
        },
        full: function () {
          var e = this,
            t = this.options,
            n = this.viewer,
            i = this.image,
            o = this.list;
          return !this.isShown || this.played || this.fulled || !t.inline
            ? this
            : ((this.fulled = !0),
              this.open(),
              X(this.button, m),
              t.transition && (V(o, E), this.viewed && V(i, E)),
              X(n, f),
              n.setAttribute("role", "dialog"),
              n.setAttribute("aria-labelledby", this.title.id),
              n.setAttribute("aria-modal", !0),
              n.removeAttribute("style"),
              B(n, {
                zIndex: t.zIndex,
              }),
              t.focus && this.enforceFocus(),
              this.initContainer(),
              (this.viewerData = z({}, this.containerData)),
              this.renderList(),
              this.viewed &&
                this.initImage(function () {
                  e.renderImage(function () {
                    t.transition &&
                      setTimeout(function () {
                        X(i, E), X(o, E);
                      }, 0);
                  });
                }),
              this);
        },
        exit: function () {
          var e = this,
            t = this.options,
            n = this.viewer,
            i = this.image,
            o = this.list;
          return this.isShown && !this.played && this.fulled && t.inline
            ? ((this.fulled = !1),
              this.close(),
              V(this.button, m),
              t.transition && (V(o, E), this.viewed && V(i, E)),
              t.focus && this.clearEnforceFocus(),
              n.removeAttribute("role"),
              n.removeAttribute("aria-labelledby"),
              n.removeAttribute("aria-modal"),
              V(n, f),
              B(n, {
                zIndex: t.zIndexInline,
              }),
              (this.viewerData = z({}, this.parentData)),
              this.renderViewer(),
              this.renderList(),
              this.viewed &&
                this.initImage(function () {
                  e.renderImage(function () {
                    t.transition &&
                      setTimeout(function () {
                        X(i, E), X(o, E);
                      }, 0);
                  });
                }),
              this)
            : this;
        },
        tooltip: function () {
          var e = this,
            t = this.options,
            n = this.tooltipBox,
            i = this.imageData;
          return this.viewed && !this.played && t.tooltip
            ? ((n.textContent = "".concat(Math.round(100 * i.ratio), "%")),
              this.tooltipping
                ? clearTimeout(this.tooltipping)
                : t.transition
                ? (this.fading && ne(n, "transitionend"),
                  X(n, S),
                  X(n, p),
                  X(n, E),
                  n.removeAttribute("aria-hidden"),
                  (n.initialOffsetWidth = n.offsetWidth),
                  X(n, w))
                : (X(n, S), n.removeAttribute("aria-hidden")),
              (this.tooltipping = setTimeout(function () {
                t.transition
                  ? (te(
                      n,
                      "transitionend",
                      function () {
                        V(n, S),
                          V(n, p),
                          V(n, E),
                          n.setAttribute("aria-hidden", !0),
                          (e.fading = !1);
                      },
                      {
                        once: !0,
                      }
                    ),
                    V(n, w),
                    (e.fading = !0))
                  : (V(n, S), n.setAttribute("aria-hidden", !0)),
                  (e.tooltipping = !1);
              }, 1e3)),
              this)
            : this;
        },
        toggle: function () {
          return (
            1 === this.imageData.ratio
              ? this.zoomTo(this.initialImageData.ratio, !0)
              : this.zoomTo(1, !0),
            this
          );
        },
        reset: function () {
          return (
            this.viewed &&
              !this.played &&
              ((this.imageData = z({}, this.initialImageData)),
              this.renderImage()),
            this
          );
        },
        update: function () {
          var e = this,
            t = this.element,
            n = this.options,
            i = this.isImg;
          if (i && !t.parentNode) return this.destroy();
          var o = [];
          if (
            (F(i ? [t] : t.querySelectorAll("img"), function (t) {
              R(n.filter)
                ? n.filter.call(e, t) && o.push(t)
                : e.getImageURL(t) && o.push(t);
            }),
            !o.length)
          )
            return this;
          if (((this.images = o), (this.length = o.length), this.ready)) {
            var r = [];
            if (
              (F(this.items, function (e, t) {
                var n = e.querySelector("img"),
                  i = o[t];
                (i && n && i.src === n.src && i.alt === n.alt) || r.push(t);
              }),
              B(this.list, {
                width: "auto",
              }),
              this.initList(),
              this.isShown)
            )
              if (this.length) {
                if (this.viewed) {
                  var s = r.indexOf(this.index);
                  if (s >= 0)
                    (this.viewed = !1),
                      this.view(
                        Math.max(Math.min(this.index - s, this.length - 1), 0)
                      );
                  else {
                    var a = this.items[this.index];
                    X(a, u), a.setAttribute("aria-selected", !0);
                  }
                }
              } else
                (this.image = null),
                  (this.viewed = !1),
                  (this.index = 0),
                  (this.imageData = {}),
                  (this.canvas.innerHTML = ""),
                  (this.title.innerHTML = "");
          } else this.build();
          return this;
        },
        destroy: function () {
          var e = this.element,
            t = this.options;
          return e.viewer
            ? ((this.destroyed = !0),
              this.ready
                ? (this.played && this.stop(),
                  t.inline
                    ? (this.fulled && this.exit(), this.unbind())
                    : this.isShown
                    ? (this.viewing &&
                        (this.imageRendering
                          ? this.imageRendering.abort()
                          : this.imageInitializing &&
                            this.imageInitializing.abort()),
                      this.hiding && this.transitioning.abort(),
                      this.hidden())
                    : this.showing &&
                      (this.transitioning.abort(), this.hidden()),
                  (this.ready = !1),
                  this.viewer.parentNode.removeChild(this.viewer))
                : t.inline &&
                  (this.delaying
                    ? this.delaying.abort()
                    : this.initializing && this.initializing.abort()),
              t.inline || ee(e, "click", this.onStart),
              (e.viewer = void 0),
              this)
            : this;
        },
      },
      fe = {
        getImageURL: function (e) {
          var t = this.options.url;
          return (t = j(t) ? e.getAttribute(t) : R(t) ? t.call(this, e) : "");
        },
        enforceFocus: function () {
          var e = this;
          this.clearEnforceFocus(),
            te(
              document,
              "focusin",
              (this.onFocusin = function (t) {
                var n = t.target,
                  i = e.viewer;
                n === document || n === i || i.contains(n) || i.focus();
              })
            );
        },
        clearEnforceFocus: function () {
          this.onFocusin &&
            (ee(document, "focusin", this.onFocusin), (this.onFocusin = null));
        },
        open: function () {
          var e = this.body;
          X(e, C),
            (e.style.paddingRight = "".concat(
              this.scrollbarWidth +
                (parseFloat(this.initialBodyComputedPaddingRight) || 0),
              "px"
            ));
        },
        close: function () {
          var e = this.body;
          V(e, C), (e.style.paddingRight = this.initialBodyPaddingRight);
        },
        shown: function () {
          var e = this.element,
            t = this.options,
            n = this.viewer;
          (this.fulled = !0),
            (this.isShown = !0),
            this.render(),
            this.bind(),
            (this.showing = !1),
            t.focus && (n.focus(), this.enforceFocus()),
            R(t.shown) &&
              te(e, "shown", t.shown, {
                once: !0,
              }),
            !1 !== ne(e, "shown") &&
              this.ready &&
              this.isShown &&
              !this.hiding &&
              this.view(this.index);
        },
        hidden: function () {
          var e = this.element,
            t = this.options,
            n = this.viewer;
          t.fucus && this.clearEnforceFocus(),
            (this.fulled = !1),
            (this.viewed = !1),
            (this.isShown = !1),
            this.close(),
            this.unbind(),
            X(n, g),
            n.removeAttribute("role"),
            n.removeAttribute("aria-labelledby"),
            n.removeAttribute("aria-modal"),
            n.setAttribute("aria-hidden", !0),
            this.resetList(),
            this.resetImage(),
            (this.hiding = !1),
            this.destroyed ||
              (R(t.hidden) &&
                te(e, "hidden", t.hidden, {
                  once: !0,
                }),
              ne(e, "hidden", null, {
                cancelable: !1,
              }));
        },
        requestFullscreen: function () {
          var e = this.element.ownerDocument;
          if (
            this.fulled &&
            !(
              e.fullscreenElement ||
              e.webkitFullscreenElement ||
              e.mozFullScreenElement ||
              e.msFullscreenElement
            )
          ) {
            var t = e.documentElement;
            t.requestFullscreen
              ? t.requestFullscreen()
              : t.webkitRequestFullscreen
              ? t.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
              : t.mozRequestFullScreen
              ? t.mozRequestFullScreen()
              : t.msRequestFullscreen && t.msRequestFullscreen();
          }
        },
        exitFullscreen: function () {
          var e = this.element.ownerDocument;
          this.fulled &&
            (e.fullscreenElement ||
              e.webkitFullscreenElement ||
              e.mozFullScreenElement ||
              e.msFullscreenElement) &&
            (e.exitFullscreen
              ? e.exitFullscreen()
              : e.webkitExitFullscreen
              ? e.webkitExitFullscreen()
              : e.mozCancelFullScreen
              ? e.mozCancelFullScreen()
              : e.msExitFullscreen && e.msExitFullscreen());
        },
        change: function (e) {
          var t = this.options,
            n = this.pointers,
            i = n[Object.keys(n)[0]];
          if (i) {
            var r = i.endX - i.startX,
              s = i.endY - i.startY;
            switch (this.action) {
              case "move":
                this.move(r, s, e);
                break;
              case "zoom":
                this.zoom(
                  (function (e) {
                    var t = o({}, e),
                      n = [];
                    return (
                      F(e, function (e, i) {
                        delete t[i],
                          F(t, function (t) {
                            var i = Math.abs(e.startX - t.startX),
                              o = Math.abs(e.startY - t.startY),
                              r = Math.abs(e.endX - t.endX),
                              s = Math.abs(e.endY - t.endY),
                              a = Math.sqrt(i * i + o * o),
                              l = (Math.sqrt(r * r + s * s) - a) / a;
                            n.push(l);
                          });
                      }),
                      n.sort(function (e, t) {
                        return Math.abs(e) < Math.abs(t);
                      }),
                      n[0]
                    );
                  })(n),
                  !1,
                  e
                );
                break;
              case "switch":
                this.action = "switched";
                var a = Math.abs(r);
                a > 1 &&
                  a > Math.abs(s) &&
                  ((this.pointers = {}),
                  r > 1 ? this.prev(t.loop) : r < -1 && this.next(t.loop));
            }
            F(n, function (e) {
              (e.startX = e.endX), (e.startY = e.endY);
            });
          }
        },
        isSwitchable: function () {
          var e = this.imageData,
            t = this.viewerData;
          return (
            this.length > 1 &&
            e.x >= 0 &&
            e.y >= 0 &&
            e.width <= t.width &&
            e.height <= t.height
          );
        },
      },
      he = a.Viewer,
      me =
        ((le = -1),
        function () {
          return (le += 1);
        }),
      ge = (function () {
        function e(t) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (
            ((function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            !t || 1 !== t.nodeType)
          )
            throw new Error(
              "The first argument is required and must be an element."
            );
          (this.element = t),
            (this.options = z({}, r, q(n) && n)),
            (this.action = !1),
            (this.fading = !1),
            (this.fulled = !1),
            (this.hiding = !1),
            (this.imageClicked = !1),
            (this.imageData = {}),
            (this.index = this.options.initialViewIndex),
            (this.isImg = !1),
            (this.isShown = !1),
            (this.length = 0),
            (this.moving = !1),
            (this.played = !1),
            (this.playing = !1),
            (this.pointers = {}),
            (this.ready = !1),
            (this.rotating = !1),
            (this.scaling = !1),
            (this.showing = !1),
            (this.timeout = !1),
            (this.tooltipping = !1),
            (this.viewed = !1),
            (this.viewing = !1),
            (this.wheeling = !1),
            (this.zooming = !1),
            (this.id = me()),
            this.init();
        }
        var n, i, o;
        return (
          (n = e),
          (o = [
            {
              key: "noConflict",
              value: function () {
                return (window.Viewer = he), e;
              },
            },
            {
              key: "setDefaults",
              value: function (e) {
                z(r, q(e) && e);
              },
            },
          ]),
          (i = [
            {
              key: "init",
              value: function () {
                var e = this,
                  t = this.element,
                  n = this.options;
                if (!t.viewer) {
                  (t.viewer = this), n.focus && !n.keyboard && (n.focus = !1);
                  var i = "img" === t.localName,
                    o = [];
                  if (
                    (F(i ? [t] : t.querySelectorAll("img"), function (t) {
                      R(n.filter)
                        ? n.filter.call(e, t) && o.push(t)
                        : e.getImageURL(t) && o.push(t);
                    }),
                    (this.isImg = i),
                    (this.length = o.length),
                    (this.images = o),
                    this.initBody(),
                    _(document.createElement("viewer").style.transition) &&
                      (n.transition = !1),
                    n.inline)
                  ) {
                    var r = 0,
                      s = function () {
                        var t;
                        (r += 1) === e.length &&
                          ((e.initializing = !1),
                          (e.delaying = {
                            abort: function () {
                              clearTimeout(t);
                            },
                          }),
                          (t = setTimeout(function () {
                            (e.delaying = !1), e.build();
                          }, 0)));
                      };
                    (this.initializing = {
                      abort: function () {
                        F(o, function (e) {
                          e.complete || ee(e, "load", s);
                        });
                      },
                    }),
                      F(o, function (e) {
                        e.complete
                          ? s()
                          : te(e, "load", s, {
                              once: !0,
                            });
                      });
                  } else
                    te(
                      t,
                      "click",
                      (this.onStart = function (t) {
                        var i = t.target;
                        "img" !== i.localName ||
                          (R(n.filter) && !n.filter.call(e, i)) ||
                          e.view(e.images.indexOf(i));
                      })
                    );
                }
              },
            },
            {
              key: "build",
              value: function () {
                if (!this.ready) {
                  var e = this.element,
                    t = this.options,
                    n = e.parentNode,
                    i = document.createElement("div");
                  i.innerHTML =
                    '<div class="viewer-container" tabindex="-1" touch-action="none"><div class="viewer-canvas"></div><div class="viewer-footer"><div class="viewer-title"></div><div class="viewer-toolbar"></div><div class="viewer-navbar"><ul class="viewer-list" role="navigation"></ul></div></div><div class="viewer-tooltip" role="alert" aria-hidden="true"></div><div class="viewer-button" data-viewer-action="mix" role="button"></div><div class="viewer-player"></div></div>';
                  var o = i.querySelector(".".concat("viewer", "-container")),
                    r = o.querySelector(".".concat("viewer", "-title")),
                    s = o.querySelector(".".concat("viewer", "-toolbar")),
                    a = o.querySelector(".".concat("viewer", "-navbar")),
                    l = o.querySelector(".".concat("viewer", "-button")),
                    c = o.querySelector(".".concat("viewer", "-canvas"));
                  if (
                    ((this.parent = n),
                    (this.viewer = o),
                    (this.title = r),
                    (this.toolbar = s),
                    (this.navbar = a),
                    (this.button = l),
                    (this.canvas = c),
                    (this.footer = o.querySelector(
                      ".".concat("viewer", "-footer")
                    )),
                    (this.tooltipBox = o.querySelector(
                      ".".concat("viewer", "-tooltip")
                    )),
                    (this.player = o.querySelector(
                      ".".concat("viewer", "-player")
                    )),
                    (this.list = o.querySelector(
                      ".".concat("viewer", "-list")
                    )),
                    (o.id = "".concat("viewer").concat(this.id)),
                    (r.id = "".concat("viewer", "Title").concat(this.id)),
                    X(
                      r,
                      t.title
                        ? se(Array.isArray(t.title) ? t.title[0] : t.title)
                        : g
                    ),
                    X(a, t.navbar ? se(t.navbar) : g),
                    Y(l, g, !t.button),
                    t.keyboard && l.setAttribute("tabindex", 0),
                    t.backdrop &&
                      (X(o, "".concat("viewer", "-backdrop")),
                      t.inline || "static" === t.backdrop || Q(c, I, "hide")),
                    j(t.className) &&
                      t.className &&
                      t.className.split(O).forEach(function (e) {
                        X(o, e);
                      }),
                    t.toolbar)
                  ) {
                    var u = document.createElement("ul"),
                      m = q(t.toolbar),
                      v = L.slice(0, 3),
                      y = L.slice(7, 9),
                      b = L.slice(9);
                    m || X(s, se(t.toolbar)),
                      F(m ? t.toolbar : L, function (e, n) {
                        var i = m && q(e),
                          o = m ? K(n) : e,
                          r = i && !_(e.show) ? e.show : e;
                        if (
                          r &&
                          (t.zoomable || -1 === v.indexOf(o)) &&
                          (t.rotatable || -1 === y.indexOf(o)) &&
                          (t.scalable || -1 === b.indexOf(o))
                        ) {
                          var s = i && !_(e.size) ? e.size : e,
                            a = i && !_(e.click) ? e.click : e,
                            l = document.createElement("li");
                          t.keyboard && l.setAttribute("tabindex", 0),
                            l.setAttribute("role", "button"),
                            X(l, "".concat("viewer", "-").concat(o)),
                            R(a) || Q(l, I, o),
                            P(r) && X(l, se(r)),
                            -1 !== ["small", "large"].indexOf(s)
                              ? X(l, "".concat("viewer", "-").concat(s))
                              : "play" === o &&
                                X(l, "".concat("viewer", "-large")),
                            R(a) && te(l, "click", a),
                            u.appendChild(l);
                        }
                      }),
                      s.appendChild(u);
                  } else X(s, g);
                  if (!t.rotatable) {
                    var w = s.querySelectorAll('li[class*="rotate"]');
                    X(w, x),
                      F(w, function (e) {
                        s.appendChild(e);
                      });
                  }
                  if (t.inline)
                    X(l, h),
                      B(o, {
                        zIndex: t.zIndexInline,
                      }),
                      "static" === window.getComputedStyle(n).position &&
                        B(n, {
                          position: "relative",
                        }),
                      n.insertBefore(o, e.nextSibling);
                  else {
                    X(l, d),
                      X(o, f),
                      X(o, p),
                      X(o, g),
                      B(o, {
                        zIndex: t.zIndex,
                      });
                    var T = t.container;
                    j(T) && (T = e.ownerDocument.querySelector(T)),
                      T || (T = this.body),
                      T.appendChild(o);
                  }
                  t.inline && (this.render(), this.bind(), (this.isShown = !0)),
                    (this.ready = !0),
                    R(t.ready) &&
                      te(e, "ready", t.ready, {
                        once: !0,
                      }),
                    !1 !== ne(e, "ready")
                      ? this.ready && t.inline && this.view(this.index)
                      : (this.ready = !1);
                }
              },
            },
          ]) && t(n.prototype, i),
          o && t(n, o),
          e
        );
      })();
    return z(ge.prototype, ce, ue, de, pe, fe), ge;
  }),
  (function (e, t) {
    "function" == typeof define && define.amd
      ? define(t)
      : "object" == typeof exports
      ? (module.exports = t())
      : (e.PhotoSwipe = t());
  })(this, function () {
    "use strict";
    return function (e, t, n, i) {
      var o = {
        features: null,
        bind: function (e, t, n, i) {
          var o = (i ? "remove" : "add") + "EventListener";
          t = t.split(" ");
          for (var r = 0; r < t.length; r++) t[r] && e[o](t[r], n, !1);
        },
        isArray: function (e) {
          return e instanceof Array;
        },
        createEl: function (e, t) {
          var n = document.createElement(t || "div");
          return e && (n.className = e), n;
        },
        getScrollY: function () {
          var e = window.pageYOffset;
          return void 0 !== e ? e : document.documentElement.scrollTop;
        },
        unbind: function (e, t, n) {
          o.bind(e, t, n, !0);
        },
        removeClass: function (e, t) {
          var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
          e.className = e.className
            .replace(n, " ")
            .replace(/^\s\s*/, "")
            .replace(/\s\s*$/, "");
        },
        addClass: function (e, t) {
          o.hasClass(e, t) || (e.className += (e.className ? " " : "") + t);
        },
        hasClass: function (e, t) {
          return (
            e.className &&
            new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className)
          );
        },
        getChildByClass: function (e, t) {
          for (var n = e.firstChild; n; ) {
            if (o.hasClass(n, t)) return n;
            n = n.nextSibling;
          }
        },
        arraySearch: function (e, t, n) {
          for (var i = e.length; i--; ) if (e[i][n] === t) return i;
          return -1;
        },
        extend: function (e, t, n) {
          for (var i in t)
            if (t.hasOwnProperty(i)) {
              if (n && e.hasOwnProperty(i)) continue;
              e[i] = t[i];
            }
        },
        easing: {
          sine: {
            out: function (e) {
              return Math.sin(e * (Math.PI / 2));
            },
            inOut: function (e) {
              return -(Math.cos(Math.PI * e) - 1) / 2;
            },
          },
          cubic: {
            out: function (e) {
              return --e * e * e + 1;
            },
          },
        },
        detectFeatures: function () {
          if (o.features) return o.features;
          var e = o.createEl().style,
            t = "",
            n = {};
          if (
            ((n.oldIE = document.all && !document.addEventListener),
            (n.touch = "ontouchstart" in window),
            window.requestAnimationFrame &&
              ((n.raf = window.requestAnimationFrame),
              (n.caf = window.cancelAnimationFrame)),
            (n.pointerEvent =
              !!window.PointerEvent || navigator.msPointerEnabled),
            !n.pointerEvent)
          ) {
            var i = navigator.userAgent;
            if (/iP(hone|od)/.test(navigator.platform)) {
              var r = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
              r &&
                r.length > 0 &&
                (r = parseInt(r[1], 10)) >= 1 &&
                r < 8 &&
                (n.isOldIOSPhone = !0);
            }
            var s = i.match(/Android\s([0-9\.]*)/),
              a = s ? s[1] : 0;
            (a = parseFloat(a)) >= 1 &&
              (a < 4.4 && (n.isOldAndroid = !0), (n.androidVersion = a)),
              (n.isMobileOpera = /opera mini|opera mobi/i.test(i));
          }
          for (
            var l,
              c,
              u = ["transform", "perspective", "animationName"],
              d = ["", "webkit", "Moz", "ms", "O"],
              p = 0;
            p < 4;
            p++
          ) {
            t = d[p];
            for (var f = 0; f < 3; f++)
              (l = u[f]),
                (c = t + (t ? l.charAt(0).toUpperCase() + l.slice(1) : l)),
                !n[l] && c in e && (n[l] = c);
            t &&
              !n.raf &&
              ((t = t.toLowerCase()),
              (n.raf = window[t + "RequestAnimationFrame"]),
              n.raf &&
                (n.caf =
                  window[t + "CancelAnimationFrame"] ||
                  window[t + "CancelRequestAnimationFrame"]));
          }
          if (!n.raf) {
            var h = 0;
            (n.raf = function (e) {
              var t = new Date().getTime(),
                n = Math.max(0, 16 - (t - h)),
                i = window.setTimeout(function () {
                  e(t + n);
                }, n);
              return (h = t + n), i;
            }),
              (n.caf = function (e) {
                clearTimeout(e);
              });
          }
          return (
            (n.svg =
              !!document.createElementNS &&
              !!document.createElementNS("http://www.w3.org/2000/svg", "svg")
                .createSVGRect),
            (o.features = n),
            n
          );
        },
      };
      o.detectFeatures(),
        o.features.oldIE &&
          (o.bind = function (e, t, n, i) {
            t = t.split(" ");
            for (
              var o,
                r = (i ? "detach" : "attach") + "Event",
                s = function () {
                  n.handleEvent.call(n);
                },
                a = 0;
              a < t.length;
              a++
            )
              if ((o = t[a]))
                if ("object" == typeof n && n.handleEvent) {
                  if (i) {
                    if (!n["oldIE" + o]) return !1;
                  } else n["oldIE" + o] = s;
                  e[r]("on" + o, n["oldIE" + o]);
                } else e[r]("on" + o, n);
          });
      var r = this,
        s = {
          allowPanToNext: !0,
          spacing: 0.12,
          bgOpacity: 1,
          mouseUsed: !1,
          loop: !0,
          pinchToClose: !0,
          closeOnScroll: !0,
          closeOnVerticalDrag: !0,
          verticalDragRange: 0.75,
          hideAnimationDuration: 333,
          showAnimationDuration: 333,
          showHideOpacity: !1,
          focus: !0,
          escKey: !0,
          arrowKeys: !0,
          mainScrollEndFriction: 0.35,
          panEndFriction: 0.35,
          isClickableElement: function (e) {
            return "A" === e.tagName;
          },
          getDoubleTapZoom: function (e, t) {
            return e ? 1 : t.initialZoomLevel < 0.7 ? 1 : 1.33;
          },
          maxSpreadZoom: 1.33,
          modal: !0,
          scaleMode: "fit",
        };
      o.extend(s, i);
      var a,
        l,
        c,
        u,
        d,
        p,
        f,
        h,
        m,
        g,
        v,
        y,
        b,
        w,
        x,
        T,
        k,
        C,
        S,
        E,
        A,
        D,
        $,
        I,
        O,
        L,
        j,
        N,
        P,
        _,
        M,
        H,
        q,
        R,
        F,
        z,
        W,
        B,
        U,
        X,
        V,
        Y,
        Z,
        K,
        G,
        Q,
        J,
        ee,
        te,
        ne,
        ie,
        oe,
        re,
        se,
        ae,
        le,
        ce = {
          x: 0,
          y: 0,
        },
        ue = {
          x: 0,
          y: 0,
        },
        de = {
          x: 0,
          y: 0,
        },
        pe = {},
        fe = 0,
        he = {},
        me = {
          x: 0,
          y: 0,
        },
        ge = 0,
        ve = !0,
        ye = [],
        be = {},
        we = !1,
        xe = function (e, t) {
          o.extend(r, t.publicMethods), ye.push(e);
        },
        Te = function (e) {
          var t = Ft();
          return e > t - 1 ? e - t : e < 0 ? t + e : e;
        },
        ke = {},
        Ce = function (e, t) {
          return ke[e] || (ke[e] = []), ke[e].push(t);
        },
        Se = function (e) {
          var t = ke[e];
          if (t) {
            var n = Array.prototype.slice.call(arguments);
            n.shift();
            for (var i = 0; i < t.length; i++) t[i].apply(r, n);
          }
        },
        Ee = function () {
          return new Date().getTime();
        },
        Ae = function (e) {
          (se = e), (r.bg.style.opacity = e * s.bgOpacity);
        },
        De = function (e, t, n, i, o) {
          (!we || (o && o !== r.currItem)) &&
            (i /= o ? o.fitRatio : r.currItem.fitRatio),
            (e[D] = y + t + "px, " + n + "px" + b + " scale(" + i + ")");
        },
        $e = function (e) {
          te &&
            (e &&
              (g > r.currItem.fitRatio
                ? we || (Kt(r.currItem, !1, !0), (we = !0))
                : we && (Kt(r.currItem), (we = !1))),
            De(te, de.x, de.y, g));
        },
        Ie = function (e) {
          e.container &&
            De(
              e.container.style,
              e.initialPosition.x,
              e.initialPosition.y,
              e.initialZoomLevel,
              e
            );
        },
        Oe = function (e, t) {
          t[D] = y + e + "px, 0px" + b;
        },
        Le = function (e, t) {
          if (!s.loop && t) {
            var n = u + (me.x * fe - e) / me.x,
              i = Math.round(e - ut.x);
            ((n < 0 && i > 0) || (n >= Ft() - 1 && i < 0)) &&
              (e = ut.x + i * s.mainScrollEndFriction);
          }
          (ut.x = e), Oe(e, d);
        },
        je = function (e, t) {
          var n = dt[e] - he[e];
          return ue[e] + ce[e] + n - n * (t / v);
        },
        Ne = function (e, t) {
          (e.x = t.x), (e.y = t.y), t.id && (e.id = t.id);
        },
        Pe = function (e) {
          (e.x = Math.round(e.x)), (e.y = Math.round(e.y));
        },
        _e = null,
        Me = function () {
          _e &&
            (o.unbind(document, "mousemove", Me),
            o.addClass(e, "pswp--has_mouse"),
            (s.mouseUsed = !0),
            Se("mouseUsed")),
            (_e = setTimeout(function () {
              _e = null;
            }, 100));
        },
        He = function (e, t) {
          var n = Xt(r.currItem, pe, e);
          return t && (ee = n), n;
        },
        qe = function (e) {
          return e || (e = r.currItem), e.initialZoomLevel;
        },
        Re = function (e) {
          return e || (e = r.currItem), e.w > 0 ? s.maxSpreadZoom : 1;
        },
        Fe = function (e, t, n, i) {
          return i === r.currItem.initialZoomLevel
            ? ((n[e] = r.currItem.initialPosition[e]), !0)
            : ((n[e] = je(e, i)),
              n[e] > t.min[e]
                ? ((n[e] = t.min[e]), !0)
                : n[e] < t.max[e] && ((n[e] = t.max[e]), !0));
        },
        ze = function (e) {
          var t = "";
          s.escKey && 27 === e.keyCode
            ? (t = "close")
            : s.arrowKeys &&
              (37 === e.keyCode
                ? (t = "prev")
                : 39 === e.keyCode && (t = "next")),
            t &&
              (e.ctrlKey ||
                e.altKey ||
                e.shiftKey ||
                e.metaKey ||
                (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
                r[t]()));
        },
        We = function (e) {
          e && (Y || V || ne || W) && (e.preventDefault(), e.stopPropagation());
        },
        Be = function () {
          r.setScrollOffset(0, o.getScrollY());
        },
        Ue = {},
        Xe = 0,
        Ve = function (e) {
          Ue[e] && (Ue[e].raf && L(Ue[e].raf), Xe--, delete Ue[e]);
        },
        Ye = function (e) {
          Ue[e] && Ve(e), Ue[e] || (Xe++, (Ue[e] = {}));
        },
        Ze = function () {
          for (var e in Ue) Ue.hasOwnProperty(e) && Ve(e);
        },
        Ke = function (e, t, n, i, o, r, s) {
          var a,
            l = Ee();
          Ye(e);
          var c = function () {
            if (Ue[e]) {
              if ((a = Ee() - l) >= i) return Ve(e), r(n), void (s && s());
              r((n - t) * o(a / i) + t), (Ue[e].raf = O(c));
            }
          };
          c();
        },
        Ge = {
          shout: Se,
          listen: Ce,
          viewportSize: pe,
          options: s,
          isMainScrollAnimating: function () {
            return ne;
          },
          getZoomLevel: function () {
            return g;
          },
          getCurrentIndex: function () {
            return u;
          },
          isDragging: function () {
            return U;
          },
          isZooming: function () {
            return Q;
          },
          setScrollOffset: function (e, t) {
            (he.x = e), (_ = he.y = t), Se("updateScrollOffset", he);
          },
          applyZoomPan: function (e, t, n, i) {
            (de.x = t), (de.y = n), (g = e), $e(i);
          },
          init: function () {
            if (!a && !l) {
              var n;
              (r.framework = o),
                (r.template = e),
                (r.bg = o.getChildByClass(e, "pswp__bg")),
                (j = e.className),
                (a = !0),
                (M = o.detectFeatures()),
                (O = M.raf),
                (L = M.caf),
                (D = M.transform),
                (P = M.oldIE),
                (r.scrollWrap = o.getChildByClass(e, "pswp__scroll-wrap")),
                (r.container = o.getChildByClass(
                  r.scrollWrap,
                  "pswp__container"
                )),
                (d = r.container.style),
                (r.itemHolders = T =
                  [
                    {
                      el: r.container.children[0],
                      wrap: 0,
                      index: -1,
                    },
                    {
                      el: r.container.children[1],
                      wrap: 0,
                      index: -1,
                    },
                    {
                      el: r.container.children[2],
                      wrap: 0,
                      index: -1,
                    },
                  ]),
                (T[0].el.style.display = T[2].el.style.display = "none"),
                (function () {
                  if (D) {
                    var t = M.perspective && !I;
                    return (
                      (y = "translate" + (t ? "3d(" : "(")),
                      void (b = M.perspective ? ", 0px)" : ")")
                    );
                  }
                  (D = "left"),
                    o.addClass(e, "pswp--ie"),
                    (Oe = function (e, t) {
                      t.left = e + "px";
                    }),
                    (Ie = function (e) {
                      var t = e.fitRatio > 1 ? 1 : e.fitRatio,
                        n = e.container.style,
                        i = t * e.w,
                        o = t * e.h;
                      (n.width = i + "px"),
                        (n.height = o + "px"),
                        (n.left = e.initialPosition.x + "px"),
                        (n.top = e.initialPosition.y + "px");
                    }),
                    ($e = function () {
                      if (te) {
                        var e = te,
                          t = r.currItem,
                          n = t.fitRatio > 1 ? 1 : t.fitRatio,
                          i = n * t.w,
                          o = n * t.h;
                        (e.width = i + "px"),
                          (e.height = o + "px"),
                          (e.left = de.x + "px"),
                          (e.top = de.y + "px");
                      }
                    });
                })(),
                (m = {
                  resize: r.updateSize,
                  orientationchange: function () {
                    clearTimeout(H),
                      (H = setTimeout(function () {
                        pe.x !== r.scrollWrap.clientWidth && r.updateSize();
                      }, 500));
                  },
                  scroll: Be,
                  keydown: ze,
                  click: We,
                });
              var i = M.isOldIOSPhone || M.isOldAndroid || M.isMobileOpera;
              for (
                (M.animationName && M.transform && !i) ||
                  (s.showAnimationDuration = s.hideAnimationDuration = 0),
                  n = 0;
                n < ye.length;
                n++
              )
                r["init" + ye[n]]();
              t && (r.ui = new t(r, o)).init(),
                Se("firstUpdate"),
                (u = u || s.index || 0),
                (isNaN(u) || u < 0 || u >= Ft()) && (u = 0),
                (r.currItem = Rt(u)),
                (M.isOldIOSPhone || M.isOldAndroid) && (ve = !1),
                e.setAttribute("aria-hidden", "false"),
                s.modal &&
                  (ve
                    ? (e.style.position = "fixed")
                    : ((e.style.position = "absolute"),
                      (e.style.top = o.getScrollY() + "px"))),
                void 0 === _ && (Se("initialLayout"), (_ = N = o.getScrollY()));
              var c = "pswp--open ";
              for (
                s.mainClass && (c += s.mainClass + " "),
                  s.showHideOpacity && (c += "pswp--animate_opacity "),
                  c += I ? "pswp--touch" : "pswp--notouch",
                  c += M.animationName ? " pswp--css_animation" : "",
                  c += M.svg ? " pswp--svg" : "",
                  o.addClass(e, c),
                  r.updateSize(),
                  p = -1,
                  ge = null,
                  n = 0;
                n < 3;
                n++
              )
                Oe((n + p) * me.x, T[n].el.style);
              P || o.bind(r.scrollWrap, h, r),
                Ce("initialZoomInEnd", function () {
                  r.setContent(T[0], u - 1),
                    r.setContent(T[2], u + 1),
                    (T[0].el.style.display = T[2].el.style.display = "block"),
                    s.focus && e.focus(),
                    o.bind(document, "keydown", r),
                    M.transform && o.bind(r.scrollWrap, "click", r),
                    s.mouseUsed || o.bind(document, "mousemove", Me),
                    o.bind(window, "resize scroll orientationchange", r),
                    Se("bindEvents");
                }),
                r.setContent(T[1], u),
                r.updateCurrItem(),
                Se("afterInit"),
                ve ||
                  (w = setInterval(function () {
                    Xe ||
                      U ||
                      Q ||
                      g !== r.currItem.initialZoomLevel ||
                      r.updateSize();
                  }, 1e3)),
                o.addClass(e, "pswp--visible");
            }
          },
          close: function () {
            a &&
              ((a = !1),
              (l = !0),
              Se("close"),
              o.unbind(window, "resize scroll orientationchange", r),
              o.unbind(window, "scroll", m.scroll),
              o.unbind(document, "keydown", r),
              o.unbind(document, "mousemove", Me),
              M.transform && o.unbind(r.scrollWrap, "click", r),
              U && o.unbind(window, f, r),
              clearTimeout(H),
              Se("unbindEvents"),
              zt(r.currItem, null, !0, r.destroy));
          },
          destroy: function () {
            Se("destroy"),
              _t && clearTimeout(_t),
              e.setAttribute("aria-hidden", "true"),
              (e.className = j),
              w && clearInterval(w),
              o.unbind(r.scrollWrap, h, r),
              o.unbind(window, "scroll", r),
              ht(),
              Ze(),
              (ke = null);
          },
          panTo: function (e, t, n) {
            n ||
              (e > ee.min.x ? (e = ee.min.x) : e < ee.max.x && (e = ee.max.x),
              t > ee.min.y ? (t = ee.min.y) : t < ee.max.y && (t = ee.max.y)),
              (de.x = e),
              (de.y = t),
              $e();
          },
          handleEvent: function (e) {
            (e = e || window.event), m[e.type] && m[e.type](e);
          },
          goTo: function (e) {
            var t = (e = Te(e)) - u;
            (ge = t),
              (u = e),
              (r.currItem = Rt(u)),
              (fe -= t),
              Le(me.x * fe),
              Ze(),
              (ne = !1),
              r.updateCurrItem();
          },
          next: function () {
            r.goTo(u + 1);
          },
          prev: function () {
            r.goTo(u - 1);
          },
          updateCurrZoomItem: function (e) {
            if ((e && Se("beforeChange", 0), T[1].el.children.length)) {
              var t = T[1].el.children[0];
              te = o.hasClass(t, "pswp__zoom-wrap") ? t.style : null;
            } else te = null;
            (ee = r.currItem.bounds),
              (v = g = r.currItem.initialZoomLevel),
              (de.x = ee.center.x),
              (de.y = ee.center.y),
              e && Se("afterChange");
          },
          invalidateCurrItems: function () {
            x = !0;
            for (var e = 0; e < 3; e++)
              T[e].item && (T[e].item.needsUpdate = !0);
          },
          updateCurrItem: function (e) {
            if (0 !== ge) {
              var t,
                n = Math.abs(ge);
              if (!(e && n < 2)) {
                (r.currItem = Rt(u)),
                  (we = !1),
                  Se("beforeChange", ge),
                  n >= 3 && ((p += ge + (ge > 0 ? -3 : 3)), (n = 3));
                for (var i = 0; i < n; i++)
                  ge > 0
                    ? ((t = T.shift()),
                      (T[2] = t),
                      Oe((++p + 2) * me.x, t.el.style),
                      r.setContent(t, u - n + i + 1 + 1))
                    : ((t = T.pop()),
                      T.unshift(t),
                      Oe(--p * me.x, t.el.style),
                      r.setContent(t, u + n - i - 1 - 1));
                if (te && 1 === Math.abs(ge)) {
                  var o = Rt(k);
                  o.initialZoomLevel !== g && (Xt(o, pe), Kt(o), Ie(o));
                }
                (ge = 0), r.updateCurrZoomItem(), (k = u), Se("afterChange");
              }
            }
          },
          updateSize: function (t) {
            if (!ve && s.modal) {
              var n = o.getScrollY();
              if (
                (_ !== n && ((e.style.top = n + "px"), (_ = n)),
                !t && be.x === window.innerWidth && be.y === window.innerHeight)
              )
                return;
              (be.x = window.innerWidth),
                (be.y = window.innerHeight),
                (e.style.height = be.y + "px");
            }
            if (
              ((pe.x = r.scrollWrap.clientWidth),
              (pe.y = r.scrollWrap.clientHeight),
              Be(),
              (me.x = pe.x + Math.round(pe.x * s.spacing)),
              (me.y = pe.y),
              Le(me.x * fe),
              Se("beforeResize"),
              void 0 !== p)
            ) {
              for (var i, a, l, c = 0; c < 3; c++)
                (i = T[c]),
                  Oe((c + p) * me.x, i.el.style),
                  (l = u + c - 1),
                  s.loop && Ft() > 2 && (l = Te(l)),
                  (a = Rt(l)) && (x || a.needsUpdate || !a.bounds)
                    ? (r.cleanSlide(a),
                      r.setContent(i, l),
                      1 === c && ((r.currItem = a), r.updateCurrZoomItem(!0)),
                      (a.needsUpdate = !1))
                    : -1 === i.index && l >= 0 && r.setContent(i, l),
                  a && a.container && (Xt(a, pe), Kt(a), Ie(a));
              x = !1;
            }
            (v = g = r.currItem.initialZoomLevel),
              (ee = r.currItem.bounds) &&
                ((de.x = ee.center.x), (de.y = ee.center.y), $e(!0)),
              Se("resize");
          },
          zoomTo: function (e, t, n, i, r) {
            t &&
              ((v = g),
              (dt.x = Math.abs(t.x) - de.x),
              (dt.y = Math.abs(t.y) - de.y),
              Ne(ue, de));
            var s = He(e, !1),
              a = {};
            Fe("x", s, a, e), Fe("y", s, a, e);
            var l = g,
              c = de.x,
              u = de.y;
            Pe(a);
            var d = function (t) {
              1 === t
                ? ((g = e), (de.x = a.x), (de.y = a.y))
                : ((g = (e - l) * t + l),
                  (de.x = (a.x - c) * t + c),
                  (de.y = (a.y - u) * t + u)),
                r && r(t),
                $e(1 === t);
            };
            n ? Ke("customZoomTo", 0, 1, n, i || o.easing.sine.inOut, d) : d(1);
          },
        },
        Qe = {},
        Je = {},
        et = {},
        tt = {},
        nt = {},
        it = [],
        ot = {},
        rt = [],
        st = {},
        at = 0,
        lt = {
          x: 0,
          y: 0,
        },
        ct = 0,
        ut = {
          x: 0,
          y: 0,
        },
        dt = {
          x: 0,
          y: 0,
        },
        pt = {
          x: 0,
          y: 0,
        },
        ft = function (e, t) {
          return (
            (st.x = Math.abs(e.x - t.x)),
            (st.y = Math.abs(e.y - t.y)),
            Math.sqrt(st.x * st.x + st.y * st.y)
          );
        },
        ht = function () {
          Z && (L(Z), (Z = null));
        },
        mt = function () {
          U && ((Z = O(mt)), $t());
        },
        gt = function (e, t) {
          return (
            !(!e || e === document) &&
            !(
              e.getAttribute("class") &&
              e.getAttribute("class").indexOf("pswp__scroll-wrap") > -1
            ) &&
            (t(e) ? e : gt(e.parentNode, t))
          );
        },
        vt = {},
        yt = function (e, t) {
          return (
            (vt.prevent = !gt(e.target, s.isClickableElement)),
            Se("preventDragEvent", e, t, vt),
            vt.prevent
          );
        },
        bt = function (e, t) {
          return (t.x = e.pageX), (t.y = e.pageY), (t.id = e.identifier), t;
        },
        wt = function (e, t, n) {
          (n.x = 0.5 * (e.x + t.x)), (n.y = 0.5 * (e.y + t.y));
        },
        xt = function () {
          var e = de.y - r.currItem.initialPosition.y;
          return 1 - Math.abs(e / (pe.y / 2));
        },
        Tt = {},
        kt = {},
        Ct = [],
        St = function (e) {
          for (; Ct.length > 0; ) Ct.pop();
          return (
            $
              ? ((le = 0),
                it.forEach(function (e) {
                  0 === le ? (Ct[0] = e) : 1 === le && (Ct[1] = e), le++;
                }))
              : e.type.indexOf("touch") > -1
              ? e.touches &&
                e.touches.length > 0 &&
                ((Ct[0] = bt(e.touches[0], Tt)),
                e.touches.length > 1 && (Ct[1] = bt(e.touches[1], kt)))
              : ((Tt.x = e.pageX),
                (Tt.y = e.pageY),
                (Tt.id = ""),
                (Ct[0] = Tt)),
            Ct
          );
        },
        Et = function (e, t) {
          var n,
            i,
            o,
            a,
            l = de[e] + t[e],
            c = t[e] > 0,
            u = ut.x + t.x,
            d = ut.x - ot.x;
          if (
            ((n = l > ee.min[e] || l < ee.max[e] ? s.panEndFriction : 1),
            (l = de[e] + t[e] * n),
            (s.allowPanToNext || g === r.currItem.initialZoomLevel) &&
              (te
                ? "h" !== ie ||
                  "x" !== e ||
                  V ||
                  (c
                    ? (l > ee.min[e] &&
                        ((n = s.panEndFriction),
                        ee.min[e],
                        (i = ee.min[e] - ue[e])),
                      (i <= 0 || d < 0) && Ft() > 1
                        ? ((a = u), d < 0 && u > ot.x && (a = ot.x))
                        : ee.min.x !== ee.max.x && (o = l))
                    : (l < ee.max[e] &&
                        ((n = s.panEndFriction),
                        ee.max[e],
                        (i = ue[e] - ee.max[e])),
                      (i <= 0 || d > 0) && Ft() > 1
                        ? ((a = u), d > 0 && u < ot.x && (a = ot.x))
                        : ee.min.x !== ee.max.x && (o = l)))
                : (a = u),
              "x" === e))
          )
            return (
              void 0 !== a && (Le(a, !0), (K = a !== ot.x)),
              ee.min.x !== ee.max.x &&
                (void 0 !== o ? (de.x = o) : K || (de.x += t.x * n)),
              void 0 !== a
            );
          ne || K || (g > r.currItem.fitRatio && (de[e] += t[e] * n));
        },
        At = function (e) {
          if (!("mousedown" === e.type && e.button > 0))
            if (qt) e.preventDefault();
            else if (!B || "mousedown" !== e.type) {
              if ((yt(e, !0) && e.preventDefault(), Se("pointerDown"), $)) {
                var t = o.arraySearch(it, e.pointerId, "id");
                t < 0 && (t = it.length),
                  (it[t] = {
                    x: e.pageX,
                    y: e.pageY,
                    id: e.pointerId,
                  });
              }
              var n = St(e),
                i = n.length;
              (G = null),
                Ze(),
                (U && 1 !== i) ||
                  ((U = oe = !0),
                  o.bind(window, f, r),
                  (z = ae = re = W = K = Y = X = V = !1),
                  (ie = null),
                  Se("firstTouchStart", n),
                  Ne(ue, de),
                  (ce.x = ce.y = 0),
                  Ne(tt, n[0]),
                  Ne(nt, tt),
                  (ot.x = me.x * fe),
                  (rt = [
                    {
                      x: tt.x,
                      y: tt.y,
                    },
                  ]),
                  (R = q = Ee()),
                  He(g, !0),
                  ht(),
                  mt()),
                !Q &&
                  i > 1 &&
                  !ne &&
                  !K &&
                  ((v = g),
                  (V = !1),
                  (Q = X = !0),
                  (ce.y = ce.x = 0),
                  Ne(ue, de),
                  Ne(Qe, n[0]),
                  Ne(Je, n[1]),
                  wt(Qe, Je, pt),
                  (dt.x = Math.abs(pt.x) - de.x),
                  (dt.y = Math.abs(pt.y) - de.y),
                  (J = ft(Qe, Je)));
            }
        },
        Dt = function (e) {
          if ((e.preventDefault(), $)) {
            var t = o.arraySearch(it, e.pointerId, "id");
            if (t > -1) {
              var n = it[t];
              (n.x = e.pageX), (n.y = e.pageY);
            }
          }
          if (U) {
            var i = St(e);
            if (ie || Y || Q) G = i;
            else if (ut.x !== me.x * fe) ie = "h";
            else {
              var r = Math.abs(i[0].x - tt.x) - Math.abs(i[0].y - tt.y);
              Math.abs(r) >= 10 && ((ie = r > 0 ? "h" : "v"), (G = i));
            }
          }
        },
        $t = function () {
          if (G) {
            var e = G.length;
            if (0 !== e)
              if (
                (Ne(Qe, G[0]),
                (et.x = Qe.x - tt.x),
                (et.y = Qe.y - tt.y),
                Q && e > 1)
              ) {
                if (
                  ((tt.x = Qe.x),
                  (tt.y = Qe.y),
                  !et.x &&
                    !et.y &&
                    (function (e, t) {
                      return e.x === t.x && e.y === t.y;
                    })(G[1], Je))
                )
                  return;
                Ne(Je, G[1]), V || ((V = !0), Se("zoomGestureStarted"));
                var t = ft(Qe, Je),
                  n = Nt(t);
                n >
                  r.currItem.initialZoomLevel +
                    r.currItem.initialZoomLevel / 15 && (ae = !0);
                var i = 1,
                  o = qe(),
                  a = Re();
                if (n < o)
                  if (
                    s.pinchToClose &&
                    !ae &&
                    v <= r.currItem.initialZoomLevel
                  ) {
                    var l = 1 - (o - n) / (o / 1.2);
                    Ae(l), Se("onPinchClose", l), (re = !0);
                  } else
                    (i = (o - n) / o) > 1 && (i = 1), (n = o - i * (o / 3));
                else
                  n > a &&
                    ((i = (n - a) / (6 * o)) > 1 && (i = 1), (n = a + i * o));
                i < 0 && (i = 0),
                  wt(Qe, Je, lt),
                  (ce.x += lt.x - pt.x),
                  (ce.y += lt.y - pt.y),
                  Ne(pt, lt),
                  (de.x = je("x", n)),
                  (de.y = je("y", n)),
                  (z = n > g),
                  (g = n),
                  $e();
              } else {
                if (!ie) return;
                if (
                  (oe &&
                    ((oe = !1),
                    Math.abs(et.x) >= 10 && (et.x -= G[0].x - nt.x),
                    Math.abs(et.y) >= 10 && (et.y -= G[0].y - nt.y)),
                  (tt.x = Qe.x),
                  (tt.y = Qe.y),
                  0 === et.x && 0 === et.y)
                )
                  return;
                if (
                  "v" === ie &&
                  s.closeOnVerticalDrag &&
                  "fit" === s.scaleMode &&
                  g === r.currItem.initialZoomLevel
                ) {
                  (ce.y += et.y), (de.y += et.y);
                  var c = xt();
                  return (W = !0), Se("onVerticalDrag", c), Ae(c), void $e();
                }
                !(function (e, t, n) {
                  if (e - R > 50) {
                    var i = rt.length > 2 ? rt.shift() : {};
                    (i.x = t), (i.y = n), rt.push(i), (R = e);
                  }
                })(Ee(), Qe.x, Qe.y),
                  (Y = !0),
                  (ee = r.currItem.bounds),
                  Et("x", et) || (Et("y", et), Pe(de), $e());
              }
          }
        },
        It = function (e) {
          if (M.isOldAndroid) {
            if (B && "mouseup" === e.type) return;
            e.type.indexOf("touch") > -1 &&
              (clearTimeout(B),
              (B = setTimeout(function () {
                B = 0;
              }, 600)));
          }
          var t;
          if ((Se("pointerUp"), yt(e, !1) && e.preventDefault(), $)) {
            var n = o.arraySearch(it, e.pointerId, "id");
            n > -1 &&
              ((t = it.splice(n, 1)[0]),
              navigator.msPointerEnabled
                ? ((t.type = {
                    4: "mouse",
                    2: "touch",
                    3: "pen",
                  }[e.pointerType]),
                  t.type || (t.type = e.pointerType || "mouse"))
                : (t.type = e.pointerType || "mouse"));
          }
          var i,
            a = St(e),
            l = a.length;
          if (("mouseup" === e.type && (l = 0), 2 === l)) return (G = null), !0;
          1 === l && Ne(nt, a[0]),
            0 !== l ||
              ie ||
              ne ||
              (t ||
                ("mouseup" === e.type
                  ? (t = {
                      x: e.pageX,
                      y: e.pageY,
                      type: "mouse",
                    })
                  : e.changedTouches &&
                    e.changedTouches[0] &&
                    (t = {
                      x: e.changedTouches[0].pageX,
                      y: e.changedTouches[0].pageY,
                      type: "touch",
                    })),
              Se("touchRelease", e, t));
          var c = -1;
          if (
            (0 === l &&
              ((U = !1),
              o.unbind(window, f, r),
              ht(),
              Q ? (c = 0) : -1 !== ct && (c = Ee() - ct)),
            (ct = 1 === l ? Ee() : -1),
            (i = -1 !== c && c < 150 ? "zoom" : "swipe"),
            Q &&
              l < 2 &&
              ((Q = !1),
              1 === l && (i = "zoomPointerUp"),
              Se("zoomGestureEnded")),
            (G = null),
            Y || V || ne || W)
          )
            if ((Ze(), F || (F = Ot()), F.calculateSwipeSpeed("x"), W))
              if (xt() < s.verticalDragRange) r.close();
              else {
                var u = de.y,
                  d = se;
                Ke("verticalDrag", 0, 1, 300, o.easing.cubic.out, function (e) {
                  (de.y = (r.currItem.initialPosition.y - u) * e + u),
                    Ae((1 - d) * e + d),
                    $e();
                }),
                  Se("onVerticalDrag", 1);
              }
            else {
              if ((K || ne) && 0 === l) {
                if (jt(i, F)) return;
                i = "zoomPointerUp";
              }
              ne ||
                ("swipe" === i ? !K && g > r.currItem.fitRatio && Lt(F) : Pt());
            }
        },
        Ot = function () {
          var e,
            t,
            n = {
              lastFlickOffset: {},
              lastFlickDist: {},
              lastFlickSpeed: {},
              slowDownRatio: {},
              slowDownRatioReverse: {},
              speedDecelerationRatio: {},
              speedDecelerationRatioAbs: {},
              distanceOffset: {},
              backAnimDestination: {},
              backAnimStarted: {},
              calculateSwipeSpeed: function (i) {
                rt.length > 1
                  ? ((e = Ee() - R + 50), (t = rt[rt.length - 2][i]))
                  : ((e = Ee() - q), (t = nt[i])),
                  (n.lastFlickOffset[i] = tt[i] - t),
                  (n.lastFlickDist[i] = Math.abs(n.lastFlickOffset[i])),
                  n.lastFlickDist[i] > 20
                    ? (n.lastFlickSpeed[i] = n.lastFlickOffset[i] / e)
                    : (n.lastFlickSpeed[i] = 0),
                  Math.abs(n.lastFlickSpeed[i]) < 0.1 &&
                    (n.lastFlickSpeed[i] = 0),
                  (n.slowDownRatio[i] = 0.95),
                  (n.slowDownRatioReverse[i] = 1 - n.slowDownRatio[i]),
                  (n.speedDecelerationRatio[i] = 1);
              },
              calculateOverBoundsAnimOffset: function (e, t) {
                n.backAnimStarted[e] ||
                  (de[e] > ee.min[e]
                    ? (n.backAnimDestination[e] = ee.min[e])
                    : de[e] < ee.max[e] &&
                      (n.backAnimDestination[e] = ee.max[e]),
                  void 0 !== n.backAnimDestination[e] &&
                    ((n.slowDownRatio[e] = 0.7),
                    (n.slowDownRatioReverse[e] = 1 - n.slowDownRatio[e]),
                    n.speedDecelerationRatioAbs[e] < 0.05 &&
                      ((n.lastFlickSpeed[e] = 0),
                      (n.backAnimStarted[e] = !0),
                      Ke(
                        "bounceZoomPan" + e,
                        de[e],
                        n.backAnimDestination[e],
                        t || 300,
                        o.easing.sine.out,
                        function (t) {
                          (de[e] = t), $e();
                        }
                      ))));
              },
              calculateAnimOffset: function (e) {
                n.backAnimStarted[e] ||
                  ((n.speedDecelerationRatio[e] =
                    n.speedDecelerationRatio[e] *
                    (n.slowDownRatio[e] +
                      n.slowDownRatioReverse[e] -
                      (n.slowDownRatioReverse[e] * n.timeDiff) / 10)),
                  (n.speedDecelerationRatioAbs[e] = Math.abs(
                    n.lastFlickSpeed[e] * n.speedDecelerationRatio[e]
                  )),
                  (n.distanceOffset[e] =
                    n.lastFlickSpeed[e] *
                    n.speedDecelerationRatio[e] *
                    n.timeDiff),
                  (de[e] += n.distanceOffset[e]));
              },
              panAnimLoop: function () {
                if (
                  Ue.zoomPan &&
                  ((Ue.zoomPan.raf = O(n.panAnimLoop)),
                  (n.now = Ee()),
                  (n.timeDiff = n.now - n.lastNow),
                  (n.lastNow = n.now),
                  n.calculateAnimOffset("x"),
                  n.calculateAnimOffset("y"),
                  $e(),
                  n.calculateOverBoundsAnimOffset("x"),
                  n.calculateOverBoundsAnimOffset("y"),
                  n.speedDecelerationRatioAbs.x < 0.05 &&
                    n.speedDecelerationRatioAbs.y < 0.05)
                )
                  return (
                    (de.x = Math.round(de.x)),
                    (de.y = Math.round(de.y)),
                    $e(),
                    void Ve("zoomPan")
                  );
              },
            };
          return n;
        },
        Lt = function (e) {
          if (
            (e.calculateSwipeSpeed("y"),
            (ee = r.currItem.bounds),
            (e.backAnimDestination = {}),
            (e.backAnimStarted = {}),
            Math.abs(e.lastFlickSpeed.x) <= 0.05 &&
              Math.abs(e.lastFlickSpeed.y) <= 0.05)
          )
            return (
              (e.speedDecelerationRatioAbs.x = e.speedDecelerationRatioAbs.y =
                0),
              e.calculateOverBoundsAnimOffset("x"),
              e.calculateOverBoundsAnimOffset("y"),
              !0
            );
          Ye("zoomPan"), (e.lastNow = Ee()), e.panAnimLoop();
        },
        jt = function (e, t) {
          var n, i, a;
          if ((ne || (at = u), "swipe" === e)) {
            var l = tt.x - nt.x,
              c = t.lastFlickDist.x < 10;
            l > 30 && (c || t.lastFlickOffset.x > 20)
              ? (i = -1)
              : l < -30 && (c || t.lastFlickOffset.x < -20) && (i = 1);
          }
          i &&
            ((u += i) < 0
              ? ((u = s.loop ? Ft() - 1 : 0), (a = !0))
              : u >= Ft() && ((u = s.loop ? 0 : Ft() - 1), (a = !0)),
            (a && !s.loop) || ((ge += i), (fe -= i), (n = !0)));
          var d,
            p = me.x * fe,
            f = Math.abs(p - ut.x);
          return (
            n || p > ut.x == t.lastFlickSpeed.x > 0
              ? ((d =
                  Math.abs(t.lastFlickSpeed.x) > 0
                    ? f / Math.abs(t.lastFlickSpeed.x)
                    : 333),
                (d = Math.min(d, 400)),
                (d = Math.max(d, 250)))
              : (d = 333),
            at === u && (n = !1),
            (ne = !0),
            Se("mainScrollAnimStart"),
            Ke("mainScroll", ut.x, p, d, o.easing.cubic.out, Le, function () {
              Ze(),
                (ne = !1),
                (at = -1),
                (n || at !== u) && r.updateCurrItem(),
                Se("mainScrollAnimComplete");
            }),
            n && r.updateCurrItem(!0),
            n
          );
        },
        Nt = function (e) {
          return (1 / J) * e * v;
        },
        Pt = function () {
          var e = g,
            t = qe(),
            n = Re();
          g < t ? (e = t) : g > n && (e = n);
          var i,
            s = se;
          return re && !z && !ae && g < t
            ? (r.close(), !0)
            : (re &&
                (i = function (e) {
                  Ae((1 - s) * e + s);
                }),
              r.zoomTo(e, 0, 200, o.easing.cubic.out, i),
              !0);
        };
      xe("Gestures", {
        publicMethods: {
          initGestures: function () {
            var e = function (e, t, n, i, o) {
              (C = e + t), (S = e + n), (E = e + i), (A = o ? e + o : "");
            };
            ($ = M.pointerEvent) && M.touch && (M.touch = !1),
              $
                ? navigator.msPointerEnabled
                  ? e("MSPointer", "Down", "Move", "Up", "Cancel")
                  : e("pointer", "down", "move", "up", "cancel")
                : M.touch
                ? (e("touch", "start", "move", "end", "cancel"), (I = !0))
                : e("mouse", "down", "move", "up"),
              (f = S + " " + E + " " + A),
              (h = C),
              $ &&
                !I &&
                (I =
                  navigator.maxTouchPoints > 1 ||
                  navigator.msMaxTouchPoints > 1),
              (r.likelyTouchDevice = I),
              (m[C] = At),
              (m[S] = Dt),
              (m[E] = It),
              A && (m[A] = m[E]),
              M.touch &&
                ((h += " mousedown"),
                (f += " mousemove mouseup"),
                (m.mousedown = m[C]),
                (m.mousemove = m[S]),
                (m.mouseup = m[E])),
              I || (s.allowPanToNext = !1);
          },
        },
      });
      var _t,
        Mt,
        Ht,
        qt,
        Rt,
        Ft,
        zt = function (t, n, i, a) {
          var l;
          _t && clearTimeout(_t),
            (qt = !0),
            (Ht = !0),
            t.initialLayout
              ? ((l = t.initialLayout), (t.initialLayout = null))
              : (l = s.getThumbBoundsFn && s.getThumbBoundsFn(u));
          var d,
            p,
            f = i ? s.hideAnimationDuration : s.showAnimationDuration,
            h = function () {
              Ve("initialZoom"),
                i
                  ? (r.template.removeAttribute("style"),
                    r.bg.removeAttribute("style"))
                  : (Ae(1),
                    n && (n.style.display = "block"),
                    o.addClass(e, "pswp--animated-in"),
                    Se("initialZoom" + (i ? "OutEnd" : "InEnd"))),
                a && a(),
                (qt = !1);
            };
          if (!f || !l || void 0 === l.x)
            return (
              Se("initialZoom" + (i ? "Out" : "In")),
              (g = t.initialZoomLevel),
              Ne(de, t.initialPosition),
              $e(),
              (e.style.opacity = i ? 0 : 1),
              Ae(1),
              void (f
                ? setTimeout(function () {
                    h();
                  }, f)
                : h())
            );
          (d = c),
            (p = !r.currItem.src || r.currItem.loadError || s.showHideOpacity),
            t.miniImg && (t.miniImg.style.webkitBackfaceVisibility = "hidden"),
            i ||
              ((g = l.w / t.w),
              (de.x = l.x),
              (de.y = l.y - N),
              (r[p ? "template" : "bg"].style.opacity = 0.001),
              $e()),
            Ye("initialZoom"),
            i && !d && o.removeClass(e, "pswp--animated-in"),
            p &&
              (i
                ? o[(d ? "remove" : "add") + "Class"](
                    e,
                    "pswp--animate_opacity"
                  )
                : setTimeout(function () {
                    o.addClass(e, "pswp--animate_opacity");
                  }, 30)),
            (_t = setTimeout(
              function () {
                if ((Se("initialZoom" + (i ? "Out" : "In")), i)) {
                  var n = l.w / t.w,
                    r = {
                      x: de.x,
                      y: de.y,
                    },
                    s = g,
                    a = se,
                    c = function (t) {
                      1 === t
                        ? ((g = n), (de.x = l.x), (de.y = l.y - _))
                        : ((g = (n - s) * t + s),
                          (de.x = (l.x - r.x) * t + r.x),
                          (de.y = (l.y - _ - r.y) * t + r.y)),
                        $e(),
                        p ? (e.style.opacity = 1 - t) : Ae(a - t * a);
                    };
                  d
                    ? Ke("initialZoom", 0, 1, f, o.easing.cubic.out, c, h)
                    : (c(1), (_t = setTimeout(h, f + 20)));
                } else
                  (g = t.initialZoomLevel),
                    Ne(de, t.initialPosition),
                    $e(),
                    Ae(1),
                    p ? (e.style.opacity = 1) : Ae(1),
                    (_t = setTimeout(h, f + 20));
              },
              i ? 25 : 90
            ));
        },
        Wt = {},
        Bt = [],
        Ut = {
          index: 0,
          errorMsg:
            '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
          forceProgressiveLoading: !1,
          preload: [1, 1],
          getNumItemsFn: function () {
            return Mt.length;
          },
        },
        Xt = function (e, t, n) {
          if (e.src && !e.loadError) {
            var i = !n;
            if (
              (i &&
                (e.vGap ||
                  (e.vGap = {
                    top: 0,
                    bottom: 0,
                  }),
                Se("parseVerticalMargin", e)),
              (Wt.x = t.x),
              (Wt.y = t.y - e.vGap.top - e.vGap.bottom),
              i)
            ) {
              var o = Wt.x / e.w,
                r = Wt.y / e.h;
              e.fitRatio = o < r ? o : r;
              var a = s.scaleMode;
              "orig" === a ? (n = 1) : "fit" === a && (n = e.fitRatio),
                n > 1 && (n = 1),
                (e.initialZoomLevel = n),
                e.bounds ||
                  (e.bounds = {
                    center: {
                      x: 0,
                      y: 0,
                    },
                    max: {
                      x: 0,
                      y: 0,
                    },
                    min: {
                      x: 0,
                      y: 0,
                    },
                  });
            }
            if (!n) return;
            return (
              (function (e, t, n) {
                var i = e.bounds;
                (i.center.x = Math.round((Wt.x - t) / 2)),
                  (i.center.y = Math.round((Wt.y - n) / 2) + e.vGap.top),
                  (i.max.x = t > Wt.x ? Math.round(Wt.x - t) : i.center.x),
                  (i.max.y =
                    n > Wt.y ? Math.round(Wt.y - n) + e.vGap.top : i.center.y),
                  (i.min.x = t > Wt.x ? 0 : i.center.x),
                  (i.min.y = n > Wt.y ? e.vGap.top : i.center.y);
              })(e, e.w * n, e.h * n),
              i &&
                n === e.initialZoomLevel &&
                (e.initialPosition = e.bounds.center),
              e.bounds
            );
          }
          return (
            (e.w = e.h = 0),
            (e.initialZoomLevel = e.fitRatio = 1),
            (e.bounds = {
              center: {
                x: 0,
                y: 0,
              },
              max: {
                x: 0,
                y: 0,
              },
              min: {
                x: 0,
                y: 0,
              },
            }),
            (e.initialPosition = e.bounds.center),
            e.bounds
          );
        },
        Vt = function (e, t, n, i, o, s) {
          t.loadError ||
            (i &&
              ((t.imageAppended = !0),
              Kt(t, i, t === r.currItem && we),
              n.appendChild(i),
              s &&
                setTimeout(function () {
                  t &&
                    t.loaded &&
                    t.placeholder &&
                    ((t.placeholder.style.display = "none"),
                    (t.placeholder = null));
                }, 500)));
        },
        Yt = function (e) {
          (e.loading = !0), (e.loaded = !1);
          var t = (e.img = o.createEl("pswp__img", "img")),
            n = function () {
              (e.loading = !1),
                (e.loaded = !0),
                e.loadComplete ? e.loadComplete(e) : (e.img = null),
                (t.onload = t.onerror = null),
                (t = null);
            };
          return (
            (t.onload = n),
            (t.onerror = function () {
              (e.loadError = !0), n();
            }),
            (t.src = e.src),
            t
          );
        },
        Zt = function (e, t) {
          if (e.src && e.loadError && e.container)
            return (
              t && (e.container.innerHTML = ""),
              (e.container.innerHTML = s.errorMsg.replace("%url%", e.src)),
              !0
            );
        },
        Kt = function (e, t, n) {
          if (e.src) {
            t || (t = e.container.lastChild);
            var i = n ? e.w : Math.round(e.w * e.fitRatio),
              o = n ? e.h : Math.round(e.h * e.fitRatio);
            e.placeholder &&
              !e.loaded &&
              ((e.placeholder.style.width = i + "px"),
              (e.placeholder.style.height = o + "px")),
              (t.style.width = i + "px"),
              (t.style.height = o + "px");
          }
        },
        Gt = function () {
          if (Bt.length) {
            for (var e, t = 0; t < Bt.length; t++)
              (e = Bt[t]).holder.index === e.index &&
                Vt(e.index, e.item, e.baseDiv, e.img, 0, e.clearPlaceholder);
            Bt = [];
          }
        };
      xe("Controller", {
        publicMethods: {
          lazyLoadItem: function (e) {
            e = Te(e);
            var t = Rt(e);
            t &&
              ((!t.loaded && !t.loading) || x) &&
              (Se("gettingData", e, t), t.src && Yt(t));
          },
          initController: function () {
            o.extend(s, Ut, !0),
              (r.items = Mt = n),
              (Rt = r.getItemAt),
              (Ft = s.getNumItemsFn),
              s.loop,
              Ft() < 3 && (s.loop = !1),
              Ce("beforeChange", function (e) {
                var t,
                  n = s.preload,
                  i = null === e || e >= 0,
                  o = Math.min(n[0], Ft()),
                  a = Math.min(n[1], Ft());
                for (t = 1; t <= (i ? a : o); t++) r.lazyLoadItem(u + t);
                for (t = 1; t <= (i ? o : a); t++) r.lazyLoadItem(u - t);
              }),
              Ce("initialLayout", function () {
                r.currItem.initialLayout =
                  s.getThumbBoundsFn && s.getThumbBoundsFn(u);
              }),
              Ce("mainScrollAnimComplete", Gt),
              Ce("initialZoomInEnd", Gt),
              Ce("destroy", function () {
                for (var e, t = 0; t < Mt.length; t++)
                  (e = Mt[t]).container && (e.container = null),
                    e.placeholder && (e.placeholder = null),
                    e.img && (e.img = null),
                    e.preloader && (e.preloader = null),
                    e.loadError && (e.loaded = e.loadError = !1);
                Bt = null;
              });
          },
          getItemAt: function (e) {
            return e >= 0 && void 0 !== Mt[e] && Mt[e];
          },
          allowProgressiveImg: function () {
            return (
              s.forceProgressiveLoading ||
              !I ||
              s.mouseUsed ||
              screen.width > 1200
            );
          },
          setContent: function (e, t) {
            s.loop && (t = Te(t));
            var n = r.getItemAt(e.index);
            n && (n.container = null);
            var i,
              l = r.getItemAt(t);
            if (l) {
              Se("gettingData", t, l), (e.index = t), (e.item = l);
              var c = (l.container = o.createEl("pswp__zoom-wrap"));
              if (
                (!l.src &&
                  l.html &&
                  (l.html.tagName
                    ? c.appendChild(l.html)
                    : (c.innerHTML = l.html)),
                Zt(l),
                Xt(l, pe),
                !l.src || l.loadError || l.loaded)
              )
                l.src &&
                  !l.loadError &&
                  (((i = o.createEl("pswp__img", "img")).style.opacity = 1),
                  (i.src = l.src),
                  Kt(l, i),
                  Vt(0, l, c, i));
              else {
                if (
                  ((l.loadComplete = function (n) {
                    if (a) {
                      if (e && e.index === t) {
                        if (Zt(n, !0))
                          return (
                            (n.loadComplete = n.img = null),
                            Xt(n, pe),
                            Ie(n),
                            void (e.index === u && r.updateCurrZoomItem())
                          );
                        n.imageAppended
                          ? !qt &&
                            n.placeholder &&
                            ((n.placeholder.style.display = "none"),
                            (n.placeholder = null))
                          : M.transform && (ne || qt)
                          ? Bt.push({
                              item: n,
                              baseDiv: c,
                              img: n.img,
                              index: t,
                              holder: e,
                              clearPlaceholder: !0,
                            })
                          : Vt(0, n, c, n.img, 0, !0);
                      }
                      (n.loadComplete = null),
                        (n.img = null),
                        Se("imageLoadComplete", t, n);
                    }
                  }),
                  o.features.transform)
                ) {
                  var d = "pswp__img pswp__img--placeholder";
                  d += l.msrc ? "" : " pswp__img--placeholder--blank";
                  var p = o.createEl(d, l.msrc ? "img" : "");
                  l.msrc && (p.src = l.msrc),
                    Kt(l, p),
                    c.appendChild(p),
                    (l.placeholder = p);
                }
                l.loading || Yt(l),
                  r.allowProgressiveImg() &&
                    (!Ht && M.transform
                      ? Bt.push({
                          item: l,
                          baseDiv: c,
                          img: l.img,
                          index: t,
                          holder: e,
                        })
                      : Vt(0, l, c, l.img, 0, !0));
              }
              Ht || t !== u ? Ie(l) : ((te = c.style), zt(l, i || l.img)),
                (e.el.innerHTML = ""),
                e.el.appendChild(c);
            } else e.el.innerHTML = "";
          },
          cleanSlide: function (e) {
            e.img && (e.img.onload = e.img.onerror = null),
              (e.loaded = e.loading = e.img = e.imageAppended = !1);
          },
        },
      });
      var Qt,
        Jt,
        en = {},
        tn = function (e, t, n) {
          var i = document.createEvent("CustomEvent"),
            o = {
              origEvent: e,
              target: e.target,
              releasePoint: t,
              pointerType: n || "touch",
            };
          i.initCustomEvent("pswpTap", !0, !0, o), e.target.dispatchEvent(i);
        };
      xe("Tap", {
        publicMethods: {
          initTap: function () {
            Ce("firstTouchStart", r.onTapStart),
              Ce("touchRelease", r.onTapRelease),
              Ce("destroy", function () {
                (en = {}), (Qt = null);
              });
          },
          onTapStart: function (e) {
            e.length > 1 && (clearTimeout(Qt), (Qt = null));
          },
          onTapRelease: function (e, t) {
            var n, i;
            if (t && !Y && !X && !Xe) {
              var r = t;
              if (
                Qt &&
                (clearTimeout(Qt),
                (Qt = null),
                (n = r),
                (i = en),
                Math.abs(n.x - i.x) < 25 && Math.abs(n.y - i.y) < 25)
              )
                return void Se("doubleTap", r);
              if ("mouse" === t.type) return void tn(e, t, "mouse");
              if (
                "BUTTON" === e.target.tagName.toUpperCase() ||
                o.hasClass(e.target, "pswp__single-tap")
              )
                return void tn(e, t);
              Ne(en, r),
                (Qt = setTimeout(function () {
                  tn(e, t), (Qt = null);
                }, 300));
            }
          },
        },
      }),
        xe("DesktopZoom", {
          publicMethods: {
            initDesktopZoom: function () {
              P ||
                (I
                  ? Ce("mouseUsed", function () {
                      r.setupDesktopZoom();
                    })
                  : r.setupDesktopZoom(!0));
            },
            setupDesktopZoom: function (t) {
              Jt = {};
              var n = "wheel mousewheel DOMMouseScroll";
              Ce("bindEvents", function () {
                o.bind(e, n, r.handleMouseWheel);
              }),
                Ce("unbindEvents", function () {
                  Jt && o.unbind(e, n, r.handleMouseWheel);
                }),
                (r.mouseZoomedIn = !1);
              var i,
                s = function () {
                  r.mouseZoomedIn &&
                    (o.removeClass(e, "pswp--zoomed-in"),
                    (r.mouseZoomedIn = !1)),
                    g < 1
                      ? o.addClass(e, "pswp--zoom-allowed")
                      : o.removeClass(e, "pswp--zoom-allowed"),
                    a();
                },
                a = function () {
                  i && (o.removeClass(e, "pswp--dragging"), (i = !1));
                };
              Ce("resize", s),
                Ce("afterChange", s),
                Ce("pointerDown", function () {
                  r.mouseZoomedIn &&
                    ((i = !0), o.addClass(e, "pswp--dragging"));
                }),
                Ce("pointerUp", a),
                t || s();
            },
            handleMouseWheel: function (e) {
              if (g <= r.currItem.fitRatio)
                return (
                  s.modal &&
                    (!s.closeOnScroll || Xe || U
                      ? e.preventDefault()
                      : D && Math.abs(e.deltaY) > 2 && ((c = !0), r.close())),
                  !0
                );
              if ((e.stopPropagation(), (Jt.x = 0), "deltaX" in e))
                1 === e.deltaMode
                  ? ((Jt.x = 18 * e.deltaX), (Jt.y = 18 * e.deltaY))
                  : ((Jt.x = e.deltaX), (Jt.y = e.deltaY));
              else if ("wheelDelta" in e)
                e.wheelDeltaX && (Jt.x = -0.16 * e.wheelDeltaX),
                  e.wheelDeltaY
                    ? (Jt.y = -0.16 * e.wheelDeltaY)
                    : (Jt.y = -0.16 * e.wheelDelta);
              else {
                if (!("detail" in e)) return;
                Jt.y = e.detail;
              }
              He(g, !0);
              var t = de.x - Jt.x,
                n = de.y - Jt.y;
              (s.modal ||
                (t <= ee.min.x &&
                  t >= ee.max.x &&
                  n <= ee.min.y &&
                  n >= ee.max.y)) &&
                e.preventDefault(),
                r.panTo(t, n);
            },
            toggleDesktopZoom: function (t) {
              t = t || {
                x: pe.x / 2 + he.x,
                y: pe.y / 2 + he.y,
              };
              var n = s.getDoubleTapZoom(!0, r.currItem),
                i = g === n;
              (r.mouseZoomedIn = !i),
                r.zoomTo(i ? r.currItem.initialZoomLevel : n, t, 333),
                o[(i ? "remove" : "add") + "Class"](e, "pswp--zoomed-in");
            },
          },
        });
      var nn,
        on,
        rn,
        sn,
        an,
        ln,
        cn,
        un,
        dn,
        pn,
        fn,
        hn,
        mn = {
          history: !0,
          galleryUID: 1,
        },
        gn = function () {
          return fn.hash.substring(1);
        },
        vn = function () {
          nn && clearTimeout(nn), rn && clearTimeout(rn);
        },
        yn = function () {
          var e = gn(),
            t = {};
          if (e.length < 5) return t;
          var n,
            i = e.split("&");
          for (n = 0; n < i.length; n++)
            if (i[n]) {
              var o = i[n].split("=");
              o.length < 2 || (t[o[0]] = o[1]);
            }
          if (s.galleryPIDs) {
            var r = t.pid;
            for (t.pid = 0, n = 0; n < Mt.length; n++)
              if (Mt[n].pid === r) {
                t.pid = n;
                break;
              }
          } else t.pid = parseInt(t.pid, 10) - 1;
          return t.pid < 0 && (t.pid = 0), t;
        },
        bn = function () {
          if ((rn && clearTimeout(rn), Xe || U)) rn = setTimeout(bn, 500);
          else {
            sn ? clearTimeout(on) : (sn = !0);
            var e = u + 1,
              t = Rt(u);
            t.hasOwnProperty("pid") && (e = t.pid);
            var n = cn + "&gid=" + s.galleryUID + "&pid=" + e;
            un || (-1 === fn.hash.indexOf(n) && (pn = !0));
            var i = fn.href.split("#")[0] + "#" + n;
            hn
              ? "#" + n !== window.location.hash &&
                history[un ? "replaceState" : "pushState"](
                  "",
                  document.title,
                  i
                )
              : un
              ? fn.replace(i)
              : (fn.hash = n),
              (un = !0),
              (on = setTimeout(function () {
                sn = !1;
              }, 60));
          }
        };
      xe("History", {
        publicMethods: {
          initHistory: function () {
            if ((o.extend(s, mn, !0), s.history)) {
              (fn = window.location),
                (pn = !1),
                (dn = !1),
                (un = !1),
                (cn = gn()),
                (hn = "pushState" in history),
                cn.indexOf("gid=") > -1 &&
                  (cn = (cn = cn.split("&gid=")[0]).split("?gid=")[0]),
                Ce("afterChange", r.updateURL),
                Ce("unbindEvents", function () {
                  o.unbind(window, "hashchange", r.onHashChange);
                });
              var e = function () {
                (ln = !0),
                  dn ||
                    (pn
                      ? history.back()
                      : cn
                      ? (fn.hash = cn)
                      : hn
                      ? history.pushState(
                          "",
                          document.title,
                          fn.pathname + fn.search
                        )
                      : (fn.hash = "")),
                  vn();
              };
              Ce("unbindEvents", function () {
                c && e();
              }),
                Ce("destroy", function () {
                  ln || e();
                }),
                Ce("firstUpdate", function () {
                  u = yn().pid;
                });
              var t = cn.indexOf("pid=");
              t > -1 &&
                "&" === (cn = cn.substring(0, t)).slice(-1) &&
                (cn = cn.slice(0, -1)),
                setTimeout(function () {
                  a && o.bind(window, "hashchange", r.onHashChange);
                }, 40);
            }
          },
          onHashChange: function () {
            if (gn() === cn) return (dn = !0), void r.close();
            sn || ((an = !0), r.goTo(yn().pid), (an = !1));
          },
          updateURL: function () {
            vn(), an || (un ? (nn = setTimeout(bn, 800)) : bn());
          },
        },
      }),
        o.extend(r, Ge);
    };
  }),
  (function (e, t) {
    "function" == typeof define && define.amd
      ? define(t)
      : "object" == typeof exports
      ? (module.exports = t())
      : (e.PhotoSwipeUI_Default = t());
  })(this, function () {
    "use strict";
    return function (e, t) {
      var n,
        i,
        o,
        r,
        s,
        a,
        l,
        c,
        u,
        d,
        p,
        f,
        h,
        m,
        g,
        v,
        y,
        b,
        w = this,
        x = !1,
        T = !0,
        k = !0,
        C = {
          barsSize: {
            top: 44,
            bottom: "auto",
          },
          closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
          timeToIdle: 4e3,
          timeToIdleOutside: 1e3,
          loadingIndicatorDelay: 1e3,
          addCaptionHTMLFn: function (e, t) {
            return e.title
              ? ((t.children[0].innerHTML = e.title), !0)
              : ((t.children[0].innerHTML = ""), !1);
          },
          closeEl: !0,
          captionEl: !0,
          fullscreenEl: !0,
          zoomEl: !0,
          shareEl: !0,
          counterEl: !0,
          arrowEl: !0,
          preloaderEl: !0,
          tapToClose: !1,
          tapToToggleControls: !0,
          clickToCloseNonZoomable: !0,
          shareButtons: [
            {
              id: "facebook",
              label: "Share on Facebook",
              url: "https://www.facebook.com/sharer/sharer.php?u={{url}}",
            },
            {
              id: "twitter",
              label: "Tweet",
              url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}",
            },
            {
              id: "pinterest",
              label: "Pin it",
              url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}",
            },
            {
              id: "download",
              label: "Download image",
              url: "{{raw_image_url}}",
              download: !0,
            },
          ],
          getImageURLForShare: function () {
            return e.currItem.src || "";
          },
          getPageURLForShare: function () {
            return window.location.href;
          },
          getTextForShare: function () {
            return e.currItem.title || "";
          },
          indexIndicatorSep: " / ",
          fitControlsWidth: 1200,
        },
        S = function (e) {
          if (v) return !0;
          (e = e || window.event), g.timeToIdle && g.mouseUsed && !u && N();
          for (
            var n,
              i,
              o = (e.target || e.srcElement).getAttribute("class") || "",
              r = 0;
            r < H.length;
            r++
          )
            (n = H[r]).onTap &&
              o.indexOf("pswp__" + n.name) > -1 &&
              (n.onTap(), (i = !0));
          if (i) {
            e.stopPropagation && e.stopPropagation(), (v = !0);
            var s = t.features.isOldAndroid ? 600 : 30;
            setTimeout(function () {
              v = !1;
            }, s);
          }
        },
        E = function (e, n, i) {
          t[(i ? "add" : "remove") + "Class"](e, "pswp__" + n);
        },
        A = function () {
          var e = 1 === g.getNumItemsFn();
          e !== m && (E(i, "ui--one-slide", e), (m = e));
        },
        D = function () {
          E(l, "share-modal--hidden", k);
        },
        $ = function () {
          return (
            (k = !k)
              ? (t.removeClass(l, "pswp__share-modal--fade-in"),
                setTimeout(function () {
                  k && D();
                }, 300))
              : (D(),
                setTimeout(function () {
                  k || t.addClass(l, "pswp__share-modal--fade-in");
                }, 30)),
            k || O(),
            !1
          );
        },
        I = function (t) {
          var n = (t = t || window.event).target || t.srcElement;
          return (
            e.shout("shareLinkClick", t, n),
            !(
              !n.href ||
              (!n.hasAttribute("download") &&
                (window.open(
                  n.href,
                  "pswp_share",
                  "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" +
                    (window.screen ? Math.round(screen.width / 2 - 275) : 100)
                ),
                k || $(),
                1))
            )
          );
        },
        O = function () {
          for (var e, t, n, i, o = "", r = 0; r < g.shareButtons.length; r++)
            (e = g.shareButtons[r]),
              (t = g.getImageURLForShare(e)),
              (n = g.getPageURLForShare(e)),
              (i = g.getTextForShare(e)),
              (o +=
                '<a href="' +
                e.url
                  .replace("{{url}}", encodeURIComponent(n))
                  .replace("{{image_url}}", encodeURIComponent(t))
                  .replace("{{raw_image_url}}", t)
                  .replace("{{text}}", encodeURIComponent(i)) +
                '" target="_blank" class="pswp__share--' +
                e.id +
                '"' +
                (e.download ? "download" : "") +
                ">" +
                e.label +
                "</a>"),
              g.parseShareButtonOut && (o = g.parseShareButtonOut(e, o));
          (l.children[0].innerHTML = o), (l.children[0].onclick = I);
        },
        L = function (e) {
          for (var n = 0; n < g.closeElClasses.length; n++)
            if (t.hasClass(e, "pswp__" + g.closeElClasses[n])) return !0;
        },
        j = 0,
        N = function () {
          clearTimeout(b), (j = 0), u && w.setIdle(!1);
        },
        P = function (e) {
          var t = (e = e || window.event).relatedTarget || e.toElement;
          (t && "HTML" !== t.nodeName) ||
            (clearTimeout(b),
            (b = setTimeout(function () {
              w.setIdle(!0);
            }, g.timeToIdleOutside)));
        },
        _ = function (e) {
          f !== e && (E(p, "preloader--active", !e), (f = e));
        },
        M = function (n) {
          var s = n.vGap;
          if (
            !e.likelyTouchDevice ||
            g.mouseUsed ||
            screen.width > g.fitControlsWidth
          ) {
            var a = g.barsSize;
            if (g.captionEl && "auto" === a.bottom)
              if (
                (r ||
                  ((r = t.createEl(
                    "pswp__caption pswp__caption--fake"
                  )).appendChild(t.createEl("pswp__caption__center")),
                  i.insertBefore(r, o),
                  t.addClass(i, "pswp__ui--fit")),
                g.addCaptionHTMLFn(n, r, !0))
              ) {
                var l = r.clientHeight;
                s.bottom = parseInt(l, 10) || 44;
              } else s.bottom = a.top;
            else s.bottom = "auto" === a.bottom ? 0 : a.bottom;
            s.top = a.top;
          } else s.top = s.bottom = 0;
        },
        H = [
          {
            name: "caption",
            option: "captionEl",
            onInit: function (e) {
              o = e;
            },
          },
          {
            name: "share-modal",
            option: "shareEl",
            onInit: function (e) {
              l = e;
            },
            onTap: function () {
              $();
            },
          },
          {
            name: "button--share",
            option: "shareEl",
            onInit: function (e) {
              a = e;
            },
            onTap: function () {
              $();
            },
          },
          {
            name: "button--zoom",
            option: "zoomEl",
            onTap: e.toggleDesktopZoom,
          },
          {
            name: "counter",
            option: "counterEl",
            onInit: function (e) {
              s = e;
            },
          },
          {
            name: "button--close",
            option: "closeEl",
            onTap: e.close,
          },
          {
            name: "button--arrow--left",
            option: "arrowEl",
            onTap: e.prev,
          },
          {
            name: "button--arrow--right",
            option: "arrowEl",
            onTap: e.next,
          },
          {
            name: "button--fs",
            option: "fullscreenEl",
            onTap: function () {
              n.isFullscreen() ? n.exit() : n.enter();
            },
          },
          {
            name: "preloader",
            option: "preloaderEl",
            onInit: function (e) {
              p = e;
            },
          },
        ];
      (w.init = function () {
        var s;
        t.extend(e.options, C, !0),
          (g = e.options),
          (i = t.getChildByClass(e.scrollWrap, "pswp__ui")),
          (d = e.listen)("onVerticalDrag", function (e) {
            T && e < 0.95
              ? w.hideControls()
              : !T && e >= 0.95 && w.showControls();
          }),
          d("onPinchClose", function (e) {
            T && e < 0.9
              ? (w.hideControls(), (s = !0))
              : s && !T && e > 0.9 && w.showControls();
          }),
          d("zoomGestureEnded", function () {
            (s = !1) && !T && w.showControls();
          }),
          d("beforeChange", w.update),
          d("doubleTap", function (t) {
            var n = e.currItem.initialZoomLevel;
            e.getZoomLevel() !== n
              ? e.zoomTo(n, t, 333)
              : e.zoomTo(g.getDoubleTapZoom(!1, e.currItem), t, 333);
          }),
          d("preventDragEvent", function (e, t, n) {
            var i = e.target || e.srcElement;
            i &&
              i.getAttribute("class") &&
              e.type.indexOf("mouse") > -1 &&
              (i.getAttribute("class").indexOf("__caption") > 0 ||
                /(SMALL|STRONG|EM)/i.test(i.tagName)) &&
              (n.prevent = !1);
          }),
          d("bindEvents", function () {
            t.bind(i, "pswpTap click", S),
              t.bind(e.scrollWrap, "pswpTap", w.onGlobalTap),
              e.likelyTouchDevice ||
                t.bind(e.scrollWrap, "mouseover", w.onMouseOver);
          }),
          d("unbindEvents", function () {
            k || $(),
              y && clearInterval(y),
              t.unbind(document, "mouseout", P),
              t.unbind(document, "mousemove", N),
              t.unbind(i, "pswpTap click", S),
              t.unbind(e.scrollWrap, "pswpTap", w.onGlobalTap),
              t.unbind(e.scrollWrap, "mouseover", w.onMouseOver),
              n &&
                (t.unbind(document, n.eventK, w.updateFullscreen),
                n.isFullscreen() && ((g.hideAnimationDuration = 0), n.exit()),
                (n = null));
          }),
          d("destroy", function () {
            g.captionEl &&
              (r && i.removeChild(r), t.removeClass(o, "pswp__caption--empty")),
              l && (l.children[0].onclick = null),
              t.removeClass(i, "pswp__ui--over-close"),
              t.addClass(i, "pswp__ui--hidden"),
              w.setIdle(!1);
          }),
          g.showAnimationDuration || t.removeClass(i, "pswp__ui--hidden"),
          d("initialZoomIn", function () {
            g.showAnimationDuration && t.removeClass(i, "pswp__ui--hidden");
          }),
          d("initialZoomOut", function () {
            t.addClass(i, "pswp__ui--hidden");
          }),
          d("parseVerticalMargin", M),
          (function () {
            var e,
              n,
              o,
              r = function (i) {
                if (i)
                  for (var r = i.length, s = 0; s < r; s++) {
                    (e = i[s]), (n = e.className);
                    for (var a = 0; a < H.length; a++)
                      (o = H[a]),
                        n.indexOf("pswp__" + o.name) > -1 &&
                          (g[o.option]
                            ? (t.removeClass(e, "pswp__element--disabled"),
                              o.onInit && o.onInit(e))
                            : t.addClass(e, "pswp__element--disabled"));
                  }
              };
            r(i.children);
            var s = t.getChildByClass(i, "pswp__top-bar");
            s && r(s.children);
          })(),
          g.shareEl && a && l && (k = !0),
          A(),
          g.timeToIdle &&
            d("mouseUsed", function () {
              t.bind(document, "mousemove", N),
                t.bind(document, "mouseout", P),
                (y = setInterval(function () {
                  2 == ++j && w.setIdle(!0);
                }, g.timeToIdle / 2));
            }),
          g.fullscreenEl &&
            !t.features.isOldAndroid &&
            (n || (n = w.getFullscreenAPI()),
            n
              ? (t.bind(document, n.eventK, w.updateFullscreen),
                w.updateFullscreen(),
                t.addClass(e.template, "pswp--supports-fs"))
              : t.removeClass(e.template, "pswp--supports-fs")),
          g.preloaderEl &&
            (_(!0),
            d("beforeChange", function () {
              clearTimeout(h),
                (h = setTimeout(function () {
                  e.currItem && e.currItem.loading
                    ? (!e.allowProgressiveImg() ||
                        (e.currItem.img && !e.currItem.img.naturalWidth)) &&
                      _(!1)
                    : _(!0);
                }, g.loadingIndicatorDelay));
            }),
            d("imageLoadComplete", function (t, n) {
              e.currItem === n && _(!0);
            }));
      }),
        (w.setIdle = function (e) {
          (u = e), E(i, "ui--idle", e);
        }),
        (w.update = function () {
          T && e.currItem
            ? (w.updateIndexIndicator(),
              g.captionEl &&
                (g.addCaptionHTMLFn(e.currItem, o),
                E(o, "caption--empty", !e.currItem.title)),
              (x = !0))
            : (x = !1),
            k || $(),
            A();
        }),
        (w.updateFullscreen = function (i) {
          i &&
            setTimeout(function () {
              e.setScrollOffset(0, t.getScrollY());
            }, 50),
            t[(n.isFullscreen() ? "add" : "remove") + "Class"](
              e.template,
              "pswp--fs"
            );
        }),
        (w.updateIndexIndicator = function () {
          g.counterEl &&
            (s.innerHTML =
              e.getCurrentIndex() +
              1 +
              g.indexIndicatorSep +
              g.getNumItemsFn());
        }),
        (w.onGlobalTap = function (n) {
          var i = (n = n || window.event).target || n.srcElement;
          if (!v)
            if (n.detail && "mouse" === n.detail.pointerType) {
              if (L(i)) return void e.close();
              t.hasClass(i, "pswp__img") &&
                (1 === e.getZoomLevel() &&
                e.getZoomLevel() <= e.currItem.fitRatio
                  ? g.clickToCloseNonZoomable && e.close()
                  : e.toggleDesktopZoom(n.detail.releasePoint));
            } else if (
              (g.tapToToggleControls &&
                (T ? w.hideControls() : w.showControls()),
              g.tapToClose && (t.hasClass(i, "pswp__img") || L(i)))
            )
              return void e.close();
        }),
        (w.onMouseOver = function (e) {
          var t = (e = e || window.event).target || e.srcElement;
          E(i, "ui--over-close", L(t));
        }),
        (w.hideControls = function () {
          t.addClass(i, "pswp__ui--hidden"), (T = !1);
        }),
        (w.showControls = function () {
          (T = !0), x || w.update(), t.removeClass(i, "pswp__ui--hidden");
        }),
        (w.supportsFullscreen = function () {
          var e = document;
          return !!(
            e.exitFullscreen ||
            e.mozCancelFullScreen ||
            e.webkitExitFullscreen ||
            e.msExitFullscreen
          );
        }),
        (w.getFullscreenAPI = function () {
          var t,
            n = document.documentElement,
            i = "fullscreenchange";
          return (
            n.requestFullscreen
              ? (t = {
                  enterK: "requestFullscreen",
                  exitK: "exitFullscreen",
                  elementK: "fullscreenElement",
                  eventK: i,
                })
              : n.mozRequestFullScreen
              ? (t = {
                  enterK: "mozRequestFullScreen",
                  exitK: "mozCancelFullScreen",
                  elementK: "mozFullScreenElement",
                  eventK: "moz" + i,
                })
              : n.webkitRequestFullscreen
              ? (t = {
                  enterK: "webkitRequestFullscreen",
                  exitK: "webkitExitFullscreen",
                  elementK: "webkitFullscreenElement",
                  eventK: "webkit" + i,
                })
              : n.msRequestFullscreen &&
                (t = {
                  enterK: "msRequestFullscreen",
                  exitK: "msExitFullscreen",
                  elementK: "msFullscreenElement",
                  eventK: "MSFullscreenChange",
                }),
            t &&
              ((t.enter = function () {
                if (
                  ((c = g.closeOnScroll),
                  (g.closeOnScroll = !1),
                  "webkitRequestFullscreen" !== this.enterK)
                )
                  return e.template[this.enterK]();
                e.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT);
              }),
              (t.exit = function () {
                return (g.closeOnScroll = c), document[this.exitK]();
              }),
              (t.isFullscreen = function () {
                return document[this.elementK];
              })),
            t
          );
        });
    };
  }),
  (function (e) {
    var t = {};
    function n(i) {
      if (t[i]) return t[i].exports;
      var o = (t[i] = {
        i: i,
        l: !1,
        exports: {},
      });
      return e[i].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    (n.m = e),
      (n.c = t),
      (n.d = function (e, t, i) {
        n.o(e, t) ||
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: i,
          });
      }),
      (n.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module",
          }),
          Object.defineProperty(e, "__esModule", {
            value: !0,
          });
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (
          (n.r(i),
          Object.defineProperty(i, "default", {
            enumerable: !0,
            value: e,
          }),
          2 & t && "string" != typeof e)
        )
          for (var o in e)
            n.d(
              i,
              o,
              function (t) {
                return e[t];
              }.bind(null, o)
            );
        return i;
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return n.d(t, "a", t), t;
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = "/"),
      n((n.s = 3));
  })({
    3: function (e, t, n) {
      e.exports = n("SVmV");
    },
    "9Wh1": function (e, t) {
      $.ajaxSetup({
        headers: {
          "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
          redaction_id: $("meta#redactionId").attr("content"),
        },
      });
    },
    BReU: function (e, t) {
      function n(e) {
        return (n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, o(i.key), i);
        }
      }
      function o(e) {
        var t = (function (e, t) {
          if ("object" != n(e) || !e) return e;
          var i = e[Symbol.toPrimitive];
          if (void 0 !== i) {
            var o = i.call(e, t);
            if ("object" != n(o)) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e, "string");
        return "symbol" == n(t) ? t : String(t);
      }
      $(document).ready(function () {
        new r({
          relevantBlockToggleBtnSelector: "#js-newsTapeRelevant",
          importantBlockToggleBtnSelector: "#js-newsTapeImportant",
          tapeItemSelector: ".news-tape-item",
          resourceUrl: "".concat(origin, "/ajax/news-tape"),
          newsTapeWrapperContainerSelector: "#js-newsTapeContent",
          activeTab: "relevant",
          tabActiveClass: "rubrikator_active",
          tabInActiveClass: "rubrikator_non_active",
          excludedNewsTapeIds:
            "undefined" != typeof excludedNewsTapeIds
              ? excludedNewsTapeIds
              : [],
        }),
          $(".tape_subscribe_link").on("click", function (e) {
            e.preventDefault();
            var t = $(this).data("id");
            $(".tape_subscribe_link").removeClass("active"),
              $(this).addClass("active"),
              $(".tape_subscribe_content").hide(),
              $(".tape_subscribe_content[data-targert-id=" + t + "]").show();
          });
      });
      var r = (function () {
        function e(t) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.$relevantBlockToggleBtn = $(
              t.relevantBlockToggleBtnSelector
            )),
            (this.$importantBlockToggleBtn = $(
              t.importantBlockToggleBtnSelector
            )),
            (this.tapeItemSelector = t.tapeItemSelector),
            (this.resourceUrl = t.resourceUrl),
            (this.$newsTapeWrapperContainer = $(
              t.newsTapeWrapperContainerSelector
            )),
            (this.$newsTapeWrapperContainerFirstBlock = $(
              t.newsTapeWrapperContainerSelector
            ).find("#first-block")),
            (this.$newsTapeWrapperContainerSecondBlock = $(
              t.newsTapeWrapperContainerSelector
            ).find("#second-block")),
            (this.$newsTapeWrapperContainerThirdBlock = $(
              t.newsTapeWrapperContainerSelector
            ).find("#third-block")),
            (this.tabActiveClass = t.tabActiveClass),
            (this.tabInActiveClass = t.tabInActiveClass),
            (this.activeTab = t.activeTab),
            (this.excludedNewsTapeIds = t.excludedNewsTapeIds),
            this.initImportantBtnHandler(),
            this.initRelevantBtnHandler(),
            this.initNewsTapeReplacement();
        }
        var t, n;
        return (
          (t = e),
          (n = [
            {
              key: "initRelevantBtnHandler",
              value: function () {
                var e = this;
                this.$relevantBlockToggleBtn.on("click", function () {
                  e.$relevantBlockToggleBtn
                    .removeClass(e.tabInActiveClass)
                    .addClass(e.tabActiveClass),
                    e.$importantBlockToggleBtn
                      .removeClass(e.tabActiveClass)
                      .addClass(e.tabInActiveClass);
                  var t = {
                    excludedNewsIds: e.excludedNewsTapeIds,
                    showNewsId: "undefined" != typeof newsId ? newsId : 0,
                    is_important: 0,
                    mainTagGroupId:
                      void 0 !== mainTagGroupId ? mainTagGroupId : null,
                  };
                  e.renderNewsTapeFromServer(t, e.renderRelevant);
                });
              },
            },
            {
              key: "initNewsTapeReplacement",
              value: function () {
                var e = $(window),
                  t = $("#js-mobile-news-tape"),
                  n = $("#js-news-tape-after-desk"),
                  i = $(".news-tape"),
                  o = $("#js-news-tape_body");
                e.on("resize", function () {
                  t.length &&
                    n.length &&
                    (e.width() < 768
                      ? (i.insertAfter(t),
                        i.show(),
                        o.css({
                          height: "auto",
                        }))
                      : i.insertAfter(n));
                }),
                  e.trigger("resize");
              },
            },
            {
              key: "initImportantBtnHandler",
              value: function () {
                var e = this;
                this.$importantBlockToggleBtn.on("click", function () {
                  e.$importantBlockToggleBtn
                    .removeClass(e.tabInActiveClass)
                    .addClass(e.tabActiveClass),
                    e.$relevantBlockToggleBtn
                      .removeClass(e.tabActiveClass)
                      .addClass(e.tabInActiveClass);
                  var t = {
                    excludedNewsIds: e.excludedNewsTapeIds,
                    showNewsId: "undefined" != typeof newsId ? newsId : 0,
                    is_important: 1,
                    mainTagGroupId:
                      void 0 !== mainTagGroupId ? mainTagGroupId : null,
                  };
                  e.renderNewsTapeFromServer(t, e.renderImportant);
                });
              },
            },
            {
              key: "renderNewsTapeFromServer",
              value: function (e, t) {
                var n = this;
                this.$newsTapeWrapperContainerFirstBlock.html(
                  '<img src="/img/news-load.png" alt="loader" class="news-loader">'
                ),
                  this.$newsTapeWrapperContainerSecondBlock.html(""),
                  this.$newsTapeWrapperContainerThirdBlock.html(""),
                  $.get(this.resourceUrl, e).then(function (e) {
                    var i;
                    "html" in e &&
                      ($(".news-tape_body [id^=banner-]"),
                      t.call(n, e.html),
                      (i = $("img.js-lazy-load")).length < 1 ||
                        i.each(function () {
                          var e = $(this);
                          e.hasClass("js-loaded") ||
                            (e.attr("src", e.data("src")),
                            e.addClass("js-loaded"));
                        }),
                      window.loadForms());
                  });
              },
            },
            {
              key: "renderRelevant",
              value: function (e) {
                this.$newsTapeWrapperContainerFirstBlock.html(
                  $(e).filter("#first-block")
                ),
                  this.$newsTapeWrapperContainerSecondBlock.html(
                    $(e).filter("#second-block")
                  ),
                  this.$newsTapeWrapperContainerThirdBlock.html(
                    $(e).filter("#third-block")
                  );
              },
            },
            {
              key: "renderImportant",
              value: function (e) {
                this.$newsTapeWrapperContainerFirstBlock.html(
                  $(e).filter("#first-block")
                ),
                  this.$newsTapeWrapperContainerSecondBlock.html(
                    $(e).filter("#second-block")
                  ),
                  this.$newsTapeWrapperContainerThirdBlock.html(
                    $(e).filter("#third-block")
                  );
              },
            },
          ]) && i(t.prototype, n),
          Object.defineProperty(t, "prototype", {
            writable: !1,
          }),
          e
        );
      })();
    },
    Dr2g: function (e, t) {
      function n(e) {
        return (n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function o(e, t, i) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != n(e) || !e) return e;
              var i = e[Symbol.toPrimitive];
              if (void 0 !== i) {
                var o = i.call(e, t);
                if ("object" != n(o)) return o;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(e);
            })(e, "string");
            return "symbol" == n(t) ? t : String(t);
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = i),
          e
        );
      }
      var r,
        s = $("#news-slider"),
        a = s.data("slide-count"),
        l = s.find(".slider_img_inner"),
        c = s.width(),
        u = l.width();
      if (
        ((r = u * l.length > c ? Math.floor(c / u) : a),
        s.length > 0 &&
          (s.find("#main_slider_images").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: !0,
            prevArrow: s.find(".slider_container__top .prev"),
            nextArrow: s.find(".slider_container__top .next"),
            fade: !1,
            draggable: !1,
            infinite: !1,
            asNavFor: "#nav_slider_images",
          }),
          s.find("#nav_slider_images").slick({
            slidesToShow: r,
            slidesToScroll: 1,
            prevArrow: s.find(".slider_container__bottom .prev"),
            nextArrow: s.find(".slider_container__bottom .next"),
            asNavFor: "#main_slider_images",
            dots: !1,
            infinite: !1,
            arrows: !0,
            draggable: !1,
            focusOnSelect: !0,
            responsive: [
              {
                breakpoint: 1025,
                settings: {
                  variableWidth: !0,
                },
              },
              {
                breakpoint: 769,
                settings: {
                  variableWidth: !0,
                  slidesToShow: 1,
                  centerMode: !1,
                  infinite: !0,
                },
              },
            ],
          })),
        $("img.popup_slider-img").length)
      ) {
        var d = [];
        $("img.popup_slider-img").each(function () {
          var e = $(this),
            t = e.data("img-source"),
            n = {
              src: e.data("full_src"),
              title:
                (e.data("descript") ? e.data("descript") : "") +
                (t ? "<small>" + t + "</small>" : ""),
              w: e.data("width"),
              h: e.data("height"),
            };
          d.push(
            (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? i(Object(n), !0).forEach(function (t) {
                      o(e, t, n[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : i(Object(n)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(n, t)
                      );
                    });
              }
              return e;
            })({}, n)
          );
        }),
          $("img.popup_slider-img").on("click", function (e) {
            !(function (e) {
              var t = Number.parseInt(e.target.dataset.index),
                n = document.querySelectorAll(".pswp")[0],
                i = new PhotoSwipe(n, PhotoSwipeUI_Default, d, {
                  index: t,
                  bgOpacity: 0.8,
                  closeOnScroll: !1,
                  counterEl: !1,
                  closeOnVerticalDrag: !0,
                  shareEl: !1,
                  preloaderEl: !0,
                  clickToCloseNonZoomable: !1,
                });
              i.init(), console.log(i);
            })(e);
          });
      }
    },
    OiPj: function (e, t) {
      $(document).ready(function () {
        n.run();
      });
      var n = {
        itemsList: document.querySelectorAll(".news_wrapper .list-elem"),
        itemsBox: document.querySelector(".news_wrapper .js-gen-list"),
        run: function () {
          this.itemsList.length < 1 ||
            ((this.itemsBox.style.display = "block"),
            this.itemsList.forEach(function (e, t) {
              e.id = "part-".concat(t);
              var i = n.createElem(t + 1, e.innerHTML, e.id);
              n.itemsBox.append(i);
            }));
        },
        createElem: function (e, t, n) {
          var i = document.createElement("a"),
            o = document.createElement("span"),
            r = document.createElement("span");
          return (
            (o.innerText = "".concat(e, ".")),
            (r.innerHTML = t),
            i.setAttribute("href", "#".concat(n)),
            i.append(o),
            i.append(r),
            i
          );
        },
      };
    },
    SQ4y: function (e, t) {
      $(document).ready(function () {
        var e = $("#jsSiteSearch");
        e.autocomplete({
          serviceUrl: "".concat(location.origin, "/search"),
          paramName: "query",
          transformResult: function (e) {
            return (
              (e = "string" == typeof e ? $.parseJSON(e) : {}),
              {
                suggestions: $.map(e.items, function (e) {
                  return {
                    value: e.title,
                    data: e.url,
                  };
                }),
              }
            );
          },
          minChars: 2,
          noCache: !1,
          deferRequestBy: 300,
          formatResult: function (e) {
            var t = "",
              n = [];
            return (
              $.each(e, function (e, i, o) {
                "data" !== e || "href" in n
                  ? "value" !== e || "title" in n || (n.title = i)
                  : (n.href = i),
                  "href" in n &&
                    "title" in n &&
                    ((t += '<a href="'
                      .concat(n.href, '" class="search-result-item">')
                      .concat(n.title, "</a>")),
                    (n = []));
              }),
              t
            );
          },
        }),
          e.on("keyup", function (e) {
            var t = $(this).val(),
              n = $(this).data("searchUrl");
            13 === e.keyCode &&
              t.length > 0 &&
              n.length > 0 &&
              (window.location.href = "".concat(n, "?q=").concat(t));
          }),
          $(".js-search_trigger").on("click", function () {
            var t = $.Event("keyup");
            (t.keyCode = 13), e.trigger(t);
          });
      });
    },
    SVmV: function (e, t, n) {
      "use strict";
      n.r(t),
        n("9Wh1"),
        n("zr3L"),
        n("cwqT"),
        n("eINc"),
        n("xKqG"),
        n("nCRL"),
        n("SQ4y"),
        n("BReU"),
        n("OiPj"),
        n("Dr2g"),
        n("XXsb"),
        n("z4Wk");
    },
    XXsb: function (e, t) {
      $(document).ready(function () {
        var e = $(".news_wrapper");
        e.length &&
          setTimeout(function () {
            $.post(location.origin + "/news-view", {
              id: e.data("news_id"),
            });
          }, 500);
        var t = !1;
        $("img.infographics-img").each(function () {
          console.log("shown"), console.log(this);
          var e = new Viewer(this, {
            navbar: !1,
            title: !1,
            toggleOnDblclick: !1,
            toolbar: {
              oneToOne: !0,
            },
            shown: function () {
              t = !1;
            },
          });
          $(this).on("zoom", function (n) {
            1 !== n.detail.ratio
              ? n.detail.originalEvent ||
                (t &&
                  setTimeout(function () {
                    e.moveTo(e.initialImageData.left, e.initialImageData.top);
                  }, 500),
                (t = !t))
              : (t = !0);
          });
        });
      });
    },
    cwqT: function (e, t) {
      function n(e, t) {
        var n =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (e) {
                if ("string" == typeof e) return i(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  "Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(e)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? i(e, t)
                    : void 0
                );
              }
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var o = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return o >= e.length
                  ? {
                      done: !0,
                    }
                  : {
                      done: !1,
                      value: e[o++],
                    };
              },
              e: function (e) {
                throw e;
              },
              f: r,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var s,
          a = !0,
          l = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (a = e.done), e;
          },
          e: function (e) {
            (l = !0), (s = e);
          },
          f: function () {
            try {
              a || null == n.return || n.return();
            } finally {
              if (l) throw s;
            }
          },
        };
      }
      function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
        return i;
      }
      function o() {
        var e = $("#livetapeSorting").data("url"),
          t = $("#livetapeSorting").val(),
          n = Date.now();
        e &&
          $.get(e, {
            action: "loadLivetape",
            subAction: "autoLoadNewItems",
            livetapeSorting: t,
            livetapePage: "undefined" != typeof livetapePage ? livetapePage : 1,
            livetapeLastDate: livetapeLastDate,
            startDateTime: n,
          }).done(function (e) {
            "OK" === e.status &&
              (e.stop && clearInterval(timerAutoLoad),
              e.newFavicon &&
                ($("link[rel$=icon]").remove(),
                $("head").append(
                  $(
                    '<link rel="shortcut icon" sizes="48x48" type="image/png"/>'
                  ).attr("href", e.newFavicon)
                )),
              e.htmlLivetapeItems && s(e.htmlLivetapeItems, !0),
              e.htmlLivetapeLoadMore &&
                ($("#js-see_more").remove(),
                $("#livetape_items").append(e.htmlLivetapeLoadMore)),
              e.livetapePage && (livetapePage = e.livetapePage),
              e.nextLivetapePage && (nextLivetapePage = e.nextLivetapePage));
          });
      }
      function r() {
        var e = document.querySelectorAll(".livetape .live-share");
        if (e.length > 0) {
          var t,
            i = n(e);
          try {
            for (i.s(); !(t = i.n()).done; ) {
              var o = t.value;
              o.classList.contains("js-evented") ||
                (o.classList.add("js-evented"),
                o.addEventListener("click", function (e) {
                  ($(e.target).parent().hasClass("live-share") ||
                    $(e.target).hasClass("close") ||
                    $(e.target).parent().hasClass("close") ||
                    $(e.target).parent().hasClass("js-show-share")) &&
                    $(this).toggleClass("open");
                }));
            }
          } catch (e) {
            i.e(e);
          } finally {
            i.f();
          }
        }
      }
      function s(e, t) {
        var n = $(e),
          i = "",
          o = [];
        n.each(function (e) {
          var t = $(this),
            n = t.attr("id");
          void 0 !== n &&
            !1 !== n &&
            (o.push(n),
            0 == $("#" + n).length &&
              ("" != i
                ? ($("#" + i).after(t), r())
                : ($("#livetape_items").prepend(t), r())),
            (i = n));
        }),
          !0 === t &&
            $(".js-livetape-item").each(function (e) {
              var t = $(this).attr("id");
              void 0 !== t &&
                !1 !== t &&
                !1 === o.includes(t) &&
                $("#" + t).remove();
            });
      }
      $(document).ready(function () {
        var e, t, n, i;
        $(document).on("click", "#js-btn-load-more-livetape", function () {
          $("#js-btn-load-more-livetape").closest("#js-see_more").remove();
          var e = [];
          $(".js-livetape-item").each(function () {
            e.push($(this).data("livetape_id"));
          }),
            console.log(e);
          var t = $(this).data("next-page-url"),
            n = Date.now();
          t &&
            $.get(t, {
              action: "loadLivetape",
              subAction: "loadMore",
              livetapePage:
                "undefined" != typeof nextLivetapePage ? nextLivetapePage : 1,
              IDSshowNowLietapeItems: e.join("_"),
              startDateTime: n,
            }).done(function (e) {
              "OK" === e.status &&
                (e.htmlLivetapeItems && s(e.htmlLivetapeItems, !1),
                e.htmlLivetapeLoadMore &&
                  ($("#js-see_more").remove(),
                  $("#livetape_items").append(e.htmlLivetapeLoadMore)),
                e.livetapePage && (livetapePage = e.livetapePage),
                e.nextLivetapePage && (nextLivetapePage = e.nextLivetapePage));
            });
        }),
          $(document).on("change", "#livetapeSorting", function () {
            var e = $(this).data("url"),
              t = $(this).val(),
              n = Date.now();
            e &&
              $.get(e, {
                action: "loadLivetape",
                subAction: "changeSorting",
                livetapeSorting: t,
                livetapePage:
                  "undefined" != typeof livetapePage ? livetapePage : 1,
                startDateTime: n,
              }).done(function (e) {
                "OK" === e.status &&
                  (e.htmlLivetapeItems &&
                    ($("#livetape_items").html(e.htmlLivetapeItems), r()),
                  e.htmlLivetapeLoadMore &&
                    $("#livetape_items").append(e.htmlLivetapeLoadMore));
              });
          }),
          "undefined" != typeof livetapeRun &&
            1 == livetapeRun &&
            (timerAutoLoad = setInterval(o, 6e4)),
          (e = window.location.href),
          (t = window.location.hash),
          (n = Date.now()),
          t &&
            e &&
            $.get(e, {
              action: "loadLivetape",
              subAction: "loadToItem",
              hash: t,
              livetapePage:
                "undefined" != typeof livetapePage ? livetapePage : 1,
              startDateTime: n,
            }).done(function (e) {
              "OK" === e.status &&
                (e.htmlLivetapeItems &&
                  ($("#livetape_items").html(e.htmlLivetapeItems),
                  r(),
                  e.blockId &&
                    setTimeout(function () {
                      document.getElementById(e.blockId).scrollIntoView();
                    }, 100)),
                e.htmlLivetapeLoadMore &&
                  $("#livetape_items").append(e.htmlLivetapeLoadMore),
                e.livetapePage && (livetapePage = e.livetapePage),
                e.nextLivetapePage && (nextLivetapePage = e.nextLivetapePage));
            }),
          (i = $(".live-filter select")).length > 0 && i.selectric(),
          r();
      });
    },
    eINc: function (e, t) {
      $(document).ready(function () {
        var e;
        !(function () {
          if (bn)
            for (var e in bn.head)
              if (bn.head[e]) {
                var t = function () {
                  var t = document.createElement("script"),
                    i = bn.head[e][n].banner_delay_time
                      ? bn.head[e][n].banner_delay_time
                      : "5";
                  if ("script" === bn.head[e][n].type_object)
                    (t.innerHTML = bn.head[e][n].src),
                      setTimeout(function () {
                        document.head.append(t);
                      }, 1e3 * i);
                  else if ("scriptsrc" === bn.head[e][n].type_object) {
                    for (var o in (t.setAttribute("src", bn.head[e][n].src),
                    bn.head[e][n]))
                      "type_object" != o &&
                        ("" == bn.head[e][n][o]
                          ? t.setAttribute(o, o)
                          : t.setAttribute(o, bn.head[e][n][o]));
                    setTimeout(function () {
                      document.head.append(t);
                    }, 1e3 * i);
                  }
                };
                for (var n in bn.head[e]) t();
              }
        })(),
          (function () {
            if (bn) {
              var e = function (e) {
                if (!bn.body[e]) return 1;
                var t = function (t) {
                  var n = document.createElement("script"),
                    i = document.querySelector(
                      "#bid_".concat(e, "_").concat(t)
                    ),
                    o = bn.body[e][t].banner_delay_time
                      ? bn.body[e][t].banner_delay_time
                      : "5";
                  if ("script" === bn.body[e][t].type_object)
                    setTimeout(function () {
                      n.innerHTML = bn.body[e][t].src;
                    }, 1e3 * o);
                  else if ("scriptsrc" === bn.body[e][t].type_object)
                    for (var r in (n.setAttribute("src", bn.body[e][t].src),
                    bn.body[e][t]))
                      "type_object" != r &&
                        ("" == bn.body[e][t][r]
                          ? n.setAttribute(r, r)
                          : n.setAttribute(r, bn.body[e][t][r]));
                  setTimeout(function () {
                    i.replaceChildren(n);
                  }, 1e3 * o);
                };
                for (var n in bn.body[e]) t(n);
              };
              for (var t in bn.body) e(t);
            }
          })(),
          new LazyLoad(),
          (e = ".".concat("js-add-active-class")),
          $(e).on("click", function (e) {
            var t = $(this);
            if (
              "jsSiteSearch" !== e.target.id &&
              !$(e.target).is(".slick-next") &&
              !$(e.target).is(".slick-prev")
            ) {
              t.hasClass("active")
                ? (t.removeClass("active"),
                  $(".bg-locker").removeClass("bg-locker_active"),
                  $(".sm_locker").removeClass("sm_locker_active"))
                : (t.addClass("active"),
                  $(".bg-locker").addClass("bg-locker_active"),
                  $(".sm_locker").addClass("sm_locker_active"));
              try {
                t.find(".slick-slider").slick("setPosition"),
                  t.find(".js-slick-slider").slick("setPosition");
              } catch (e) {
                console.log("Slick position error:" + e.message);
              }
            }
          }),
          $("body").click(function (t) {
            $(t.target).closest(e).length ||
              $(t.target).is(e) ||
              ($(e).removeClass("active"),
              $(".bg-locker").removeClass("bg-locker_active"),
              $(".sm_locker").removeClass("sm_locker_active"));
          }),
          (function () {
            var e = null,
              t = null;
            $("#js-open-news-region").click(function () {
              (e = e || $(".site-header_burger-menu")),
                (t = t || $("#svg_click_change")).attr("x2", 27.6667),
                e.removeClass("active"),
                e.addClass("disable");
            }),
              $(".header-right-top__sandvich_button").click(function (n) {
                n.stopPropagation(),
                  (e = $(".site-header_burger-menu")).hasClass("disable")
                    ? (e.removeClass("disable"),
                      e.addClass("active"),
                      e.attr("x2", 15))
                    : ((t = t || $("#svg_click_change")).attr("x2", 27.6667),
                      e.removeClass("active"),
                      e.addClass("disable"));
              }),
              $(".js-close-mobile-menu").on("click", function (n) {
                n.stopPropagation(),
                  (e = e || $(".site-header_burger-menu")),
                  (t = t || $("#svg_click_change")).attr("x2", 27.6667),
                  e.removeClass("active"),
                  e.addClass("disable");
              }),
              $(".header-right-top__language").click(function () {
                $(".header-right-top__language").hasClass("language_hidden") &&
                  ($(".header-right-top__language").removeClass(
                    "language_hidden"
                  ),
                  $(".js-show-site-lang").addClass("active"));
              });
            var n = $(".site-header_burger-menu");
            $("body").on("click", function (e) {
              n.hasClass("active") &&
                $(window).width() > 768 &&
                ((t = t || $("#svg_click_change")).attr("x2", 27.6667),
                n.removeClass("active"),
                n.addClass("disable"));
            });
          })(),
          window.innerWidth <= 1024 &&
            $(".wrapper_container_box").slick({
              horizontal: 1,
              itemNav: "basic",
              smart: 0,
              activateMiddle: 0,
              mouseDragging: 1,
              touchDragging: 1,
              startAt: 0,
              scrollBy: 1,
              speed: 300,
              elasticBounds: 1,
              dragHandle: 1,
              clickBar: 1,
            }),
          (function () {
            if (!($(window).width() > 768) && $(".footer_top_nav ul").length) {
              var e = 0.45 * $(".footer_top_nav ul").width();
              $(".footer_top_nav ul li").each(function () {
                $(this).width() > e
                  ? $(this).css("order", "2")
                  : $(this).css("width", "45%");
              });
            }
          })();
      });
    },
    nCRL: function (e, t) {
      $(document).ready(function () {
        var e = $(".api-weather-widget_second_list");
        e.on("init", function () {
          var e = $("#js-weather-current-temp"),
            t = $("#js-weather-current-city");
          $(".js-weather-city-item").on("click", function () {
            $.ajax({
              type: "GET",
              enctype: "multipart/form-data",
              url:
                origin +
                "/weather-for-current_city/" +
                $(this).attr("data-city-weather-id"),
              success: function (t) {
                e.html(t["temp-current"]);
              },
            }),
              t.html($(this).text());
          });
        }),
          e.slick({
            vertical: !0,
            itemNav: "basic",
            infinite: !1,
            verticalSwiping: !0,
            slidesToShow: 5,
            dragHandle: 1,
            smart: 1,
            activateMiddle: 0,
            autoplay: !1,
            draggable: !0,
            mouseDragging: 1,
            touchDragging: 1,
            slidesToScroll: 1,
            startAt: 0,
          });
      });
    },
    xKqG: function (e, t) {
      function n(e) {
        return (n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(n), !0).forEach(function (t) {
                r(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function r(e, t, i) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != n(e) || !e) return e;
              var i = e[Symbol.toPrimitive];
              if (void 0 !== i) {
                var o = i.call(e, t);
                if ("object" != n(o)) return o;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(e);
            })(e, "string");
            return "symbol" == n(t) ? t : String(t);
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = i),
          e
        );
      }
      (window.setCookie = function (e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        "max-age" in n || (n["max-age"] = 216e3),
          (n = o(
            {
              path: "/",
            },
            n
          )).expires instanceof Date && (n.expires = n.expires.toUTCString());
        var i = encodeURIComponent(e) + "=" + encodeURIComponent(t);
        for (var r in n) {
          i += "; " + r;
          var s = n[r];
          !0 !== s && (i += "=" + s);
        }
        document.cookie = i;
      }),
        (window.getCookie = function (e) {
          var t = document.cookie.match(
            new RegExp(
              "(?:^|; )" +
                e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
                "=([^;]*)"
            )
          );
          return t ? decodeURIComponent(t[1]) : void 0;
        });
      try {
        void 0 === window.getCookie("uuid") &&
          window.setCookie(
            "uuid",
            "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
              /[xy]/g,
              function (e) {
                var t = (16 * Math.random()) | 0;
                return ("x" == e ? t : (3 & t) | 8).toString(16);
              }
            )
          );
      } catch (e) {
        console.error("Error in uuid user cookie set" + e);
      }
    },
    z4Wk: function (e, t) {
      $(document).ready(function () {
        $(".js-copy-btn").length > 0 &&
          $(document).on("click", ".js-copy-btn", function (e) {
            var t = $(this);
            return (
              (function (e) {
                var t = document.createElement("input");
                t.setAttribute("value", e),
                  document.body.appendChild(t),
                  t.select();
                var n = document.execCommand("copy");
                return document.body.removeChild(t), n;
              })(t.data("info")) &&
                (t.addClass("copied"),
                setTimeout(function () {
                  return t.removeClass("copied");
                }, 3e3)),
              !1
            );
          });
      });
    },
    zr3L: function (e, t) {
      $(document).ready(function () {
        var e = {
            is_main: isHome,
            news_id: newsId,
            no_check_forms_list: [],
          },
          t =
            location.origin +
            "/question/get_forms?" +
            Date.now() +
            Math.floor(6 * Math.random());
        (window.loadForms = function () {
          $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            url: t,
            data: JSON.stringify(e),
            processData: !1,
          }).done(function (t) {
            if (void 0 !== t.results && t.results.length) {
              for (i = 0; i < t.results.length; i++)
                $(t.results[i].selectorToInsert)
                  .empty()
                  .html(t.results[i].html);
              (n = $("form.question-form"))
                .find('input[type="checkbox"]')
                .on("change", function () {
                  var e = $(this);
                  e.prop("checked") &&
                    (n
                      .find('input[type="checkbox"]:checked')
                      .prop("checked", !1),
                    e.prop("checked", !0));
                }),
                n.on("submit", function (t) {
                  t.preventDefault();
                  var n = $(this),
                    i = new FormData(n[0]);
                  i.append("selectorToInsert", "#" + n.attr("id")),
                    i.append("uuid", window.getCookie("uuid")),
                    $.ajax({
                      type: "POST",
                      enctype: "multipart/form-data",
                      url: location.origin + "/question/answer",
                      data: i,
                      processData: !1,
                      contentType: !1,
                    }).done(function (t) {
                      $($(t.selectorToInsert)).empty().html(t.html);
                      var i = n.attr("class").split(/\s+/);
                      $.each(i, function (t, n) {
                        e.no_check_forms_list.push(n);
                      }),
                        loadForms();
                    });
                });
            }
            var n;
          });
        }),
          window.loadForms();
      });
    },
  });
