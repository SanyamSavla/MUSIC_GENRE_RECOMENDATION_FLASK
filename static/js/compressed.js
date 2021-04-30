! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    var n = [],
        r = e.document,
        i = n.slice,
        o = n.concat,
        s = n.push,
        a = n.indexOf,
        u = {},
        l = u.toString,
        c = u.hasOwnProperty,
        f = {},
        p = function(e, t) {
            return new p.fn.init(e, t)
        },
        d = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        h = /^-ms-/,
        g = /-([\da-z])/gi,
        v = function(e, t) {
            return t.toUpperCase()
        };

    function m(e) {
        var t = !!e && "length" in e && e.length,
            n = p.type(e);
        return "function" !== n && !p.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    p.fn = p.prototype = {
        jquery: "2.2.4",
        constructor: p,
        selector: "",
        length: 0,
        toArray: function() {
            return i.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : i.call(this)
        },
        pushStack: function(e) {
            var t = p.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e) {
            return p.each(this, e)
        },
        map: function(e) {
            return this.pushStack(p.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(i.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: s,
        sort: n.sort,
        splice: n.splice
    }, p.extend = p.fn.extend = function() {
        var e, t, n, r, i, o, s = arguments[0] || {},
            a = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" == typeof s || p.isFunction(s) || (s = {}), a === u && (s = this, a--); u > a; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = s[t], r = e[t], s !== r && (l && r && (p.isPlainObject(r) || (i = p.isArray(r))) ? (i ? (i = !1, o = n && p.isArray(n) ? n : []) : o = n && p.isPlainObject(n) ? n : {}, s[t] = p.extend(l, o, r)) : void 0 !== r && (s[t] = r));
        return s
    }, p.extend({
        expando: "jQuery" + ("2.2.4" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === p.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !p.isArray(e) && t - parseFloat(t) + 1 >= 0
        },
        isPlainObject: function(e) {
            var t;
            if ("object" !== p.type(e) || e.nodeType || p.isWindow(e)) return !1;
            if (e.constructor && !c.call(e, "constructor") && !c.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (t in e);
            return void 0 === t || c.call(e, t)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? u[l.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            (e = p.trim(e)) && (1 === e.indexOf("use strict") ? ((t = r.createElement("script")).text = e, r.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(h, "ms-").replace(g, v)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var n, r = 0;
            if (m(e))
                for (n = e.length; n > r && !1 !== t.call(e[r], r, e[r]); r++);
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(d, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (m(Object(e)) ? p.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : a.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; n > r; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r, i = [], o = 0, s = e.length, a = !n; s > o; o++) r = !t(e[o], o), r !== a && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var r, i, s = 0,
                a = [];
            if (m(e))
                for (r = e.length; r > s; s++) i = t(e[s], s, n), null != i && a.push(i);
            else
                for (s in e) i = t(e[s], s, n), null != i && a.push(i);
            return o.apply([], a)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, o;
            return "string" == typeof t && (n = e[t], t = e, e = n), p.isFunction(e) ? (r = i.call(arguments, 2), (o = function() {
                return e.apply(t || this, r.concat(i.call(arguments)))
            }).guid = e.guid = e.guid || p.guid++, o) : void 0
        },
        now: Date.now,
        support: f
    }), "function" == typeof Symbol && (p.fn[Symbol.iterator] = n[Symbol.iterator]), p.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        u["[object " + t + "]"] = t.toLowerCase()
    });
    var y = function(e) {
        var t, n, r, i, o, s, a, u, l, c, f, p, d, h, g, v, m, y, x, b = "sizzle" + 1 * new Date,
            w = e.document,
            T = 0,
            C = 0,
            k = oe(),
            E = oe(),
            N = oe(),
            S = function(e, t) {
                return e === t && (f = !0), 0
            },
            j = 1 << 31,
            D = {}.hasOwnProperty,
            A = [],
            q = A.pop,
            L = A.push,
            H = A.push,
            O = A.slice,
            F = function(e, t) {
                for (var n = 0, r = e.length; r > n; n++)
                    if (e[n] === t) return n;
                return -1
            },
            P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            R = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            I = "\\[" + R + "*(" + M + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + R + "*\\]",
            W = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
            $ = new RegExp(R + "+", "g"),
            B = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
            _ = new RegExp("^" + R + "*," + R + "*"),
            X = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
            z = new RegExp("=" + R + "*([^\\]'\"]*?)" + R + "*\\]", "g"),
            U = new RegExp(W),
            V = new RegExp("^" + M + "$"),
            Y = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M + "|[*])"),
                ATTR: new RegExp("^" + I),
                PSEUDO: new RegExp("^" + W),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + P + ")$", "i"),
                needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i")
            },
            G = /^(?:input|select|textarea|button)$/i,
            Q = /^h\d$/i,
            J = /^[^{]+\{\s*\[native \w/,
            K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            Z = /[+~]/,
            ee = /'|\\/g,
            te = new RegExp("\\\\([\\da-f]{1,6}" + R + "?|(" + R + ")|.)", "ig"),
            ne = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r != r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            re = function() {
                p()
            };
        try {
            H.apply(A = O.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: A.length ? function(e, t) {
                    L.apply(e, O.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }

        function ie(e, t, r, i) {
            var o, a, l, c, f, h, m, y, T = t && t.ownerDocument,
                C = t ? t.nodeType : 9;
            if (r = r || [], "string" != typeof e || !e || 1 !== C && 9 !== C && 11 !== C) return r;
            if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
                if (11 !== C && (h = K.exec(e)))
                    if (o = h[1]) {
                        if (9 === C) {
                            if (!(l = t.getElementById(o))) return r;
                            if (l.id === o) return r.push(l), r
                        } else if (T && (l = T.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r
                    } else {
                        if (h[2]) return H.apply(r, t.getElementsByTagName(e)), r;
                        if ((o = h[3]) && n.getElementsByClassName && t.getElementsByClassName) return H.apply(r, t.getElementsByClassName(o)), r
                    }
                if (n.qsa && !N[e + " "] && (!v || !v.test(e))) {
                    if (1 !== C) T = t, y = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((c = t.getAttribute("id")) ? c = c.replace(ee, "\\$&") : t.setAttribute("id", c = b), a = (m = s(e)).length, f = V.test(c) ? "#" + c : "[id='" + c + "']"; a--;) m[a] = f + " " + ge(m[a]);
                        y = m.join(","), T = Z.test(e) && de(t.parentNode) || t
                    }
                    if (y) try {
                        return H.apply(r, T.querySelectorAll(y)), r
                    } catch (e) {} finally {
                        c === b && t.removeAttribute("id")
                    }
                }
            }
            return u(e.replace(B, "$1"), t, r, i)
        }

        function oe() {
            var e = [];
            return function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
        }

        function se(e) {
            return e[b] = !0, e
        }

        function ae(e) {
            var t = d.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ue(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = t
        }

        function le(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || j) - (~e.sourceIndex || j);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function ce(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function fe(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function pe(e) {
            return se(function(t) {
                return t = +t, se(function(n, r) {
                    for (var i, o = e([], n.length, t), s = o.length; s--;) n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function de(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        n = ie.support = {}, o = ie.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, p = ie.setDocument = function(e) {
            var t, i, s = e ? e.ownerDocument || e : w;
            return s !== d && 9 === s.nodeType && s.documentElement ? (h = (d = s).documentElement, g = !o(d), (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ae(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), n.getElementsByTagName = ae(function(e) {
                return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length
            }), n.getElementsByClassName = J.test(d.getElementsByClassName), n.getById = ae(function(e) {
                return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length
            }), n.getById ? (r.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }, r.filter.ID = function(e) {
                var t = e.replace(te, ne);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete r.find.ID, r.filter.ID = function(e) {
                var t = e.replace(te, ne);
                return function(e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                return void 0 !== t.getElementsByClassName && g ? t.getElementsByClassName(e) : void 0
            }, m = [], v = [], (n.qsa = J.test(d.querySelectorAll)) && (ae(function(e) {
                h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + R + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + R + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || v.push(".#.+[+~]")
            }), ae(function(e) {
                var t = d.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + R + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
            })), (n.matchesSelector = J.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ae(function(e) {
                n.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), m.push("!=", W)
            }), v = v.length && new RegExp(v.join("|")), m = m.length && new RegExp(m.join("|")), t = J.test(h.compareDocumentPosition), x = t || J.test(h.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, S = t ? function(e, t) {
                if (e === t) return f = !0, 0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? F(c, e) - F(c, t) : 0 : 4 & r ? -1 : 1)
            } : function(e, t) {
                if (e === t) return f = !0, 0;
                var n, r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    s = [e],
                    a = [t];
                if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? F(c, e) - F(c, t) : 0;
                if (i === o) return le(e, t);
                for (n = e; n = n.parentNode;) s.unshift(n);
                for (n = t; n = n.parentNode;) a.unshift(n);
                for (; s[r] === a[r];) r++;
                return r ? le(s[r], a[r]) : s[r] === w ? -1 : a[r] === w ? 1 : 0
            }, d) : d
        }, ie.matches = function(e, t) {
            return ie(e, null, null, t)
        }, ie.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== d && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !N[t + " "] && (!m || !m.test(t)) && (!v || !v.test(t))) try {
                var r = y.call(e, t);
                if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (e) {}
            return ie(t, d, null, [e]).length > 0
        }, ie.contains = function(e, t) {
            return (e.ownerDocument || e) !== d && p(e), x(e, t)
        }, ie.attr = function(e, t) {
            (e.ownerDocument || e) !== d && p(e);
            var i = r.attrHandle[t.toLowerCase()],
                o = i && D.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
            return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }, ie.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, ie.uniqueSort = function(e) {
            var t, r = [],
                i = 0,
                o = 0;
            if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(S), f) {
                for (; t = e[o++];) t === e[o] && (i = r.push(o));
                for (; i--;) e.splice(r[i], 1)
            }
            return c = null, e
        }, i = ie.getText = function(e) {
            var t, n = "",
                r = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else
                for (; t = e[r++];) n += i(t);
            return n
        }, (r = ie.selectors = {
            cacheLength: 50,
            createPseudo: se,
            match: Y,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ie.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ie.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return Y.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && U.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = k[e + " "];
                    return t || (t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) && k(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var i = ie.attr(r, e);
                        return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        s = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, u) {
                        var l, c, f, p, d, h, g = o !== s ? "nextSibling" : "previousSibling",
                            v = t.parentNode,
                            m = a && t.nodeName.toLowerCase(),
                            y = !u && !a,
                            x = !1;
                        if (v) {
                            if (o) {
                                for (; g;) {
                                    for (p = t; p = p[g];)
                                        if (a ? p.nodeName.toLowerCase() === m : 1 === p.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [s ? v.firstChild : v.lastChild], s && y) {
                                for (x = (d = (l = (c = (f = (p = v)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && v.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || h.pop();)
                                    if (1 === p.nodeType && ++x && p === t) {
                                        c[e] = [T, d, x];
                                        break
                                    }
                            } else if (y && (p = t, f = p[b] || (p[b] = {}), c = f[p.uniqueID] || (f[p.uniqueID] = {}), l = c[e] || [], d = l[0] === T && l[1], x = d), !1 === x)
                                for (;
                                    (p = ++d && p && p[g] || (x = d = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++x || (y && (f = p[b] || (p[b] = {}), c = f[p.uniqueID] || (f[p.uniqueID] = {}), c[e] = [T, x]), p !== t)););
                            return (x -= i) === r || x % r == 0 && x / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || ie.error("unsupported pseudo: " + e);
                    return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, n) {
                        for (var r, o = i(e, t), s = o.length; s--;) r = F(e, o[s]), e[r] = !(n[r] = o[s])
                    }) : function(e) {
                        return i(e, 0, n)
                    }) : i
                }
            },
            pseudos: {
                not: se(function(e) {
                    var t = [],
                        n = [],
                        r = a(e.replace(B, "$1"));
                    return r[b] ? se(function(e, t, n, i) {
                        for (var o, s = r(e, null, i, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                    }) : function(e, i, o) {
                        return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                    }
                }),
                has: se(function(e) {
                    return function(t) {
                        return ie(e, t).length > 0
                    }
                }),
                contains: se(function(e) {
                    return e = e.replace(te, ne),
                        function(t) {
                            return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                        }
                }),
                lang: se(function(e) {
                    return V.test(e || "") || ie.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                        function(t) {
                            var n;
                            do {
                                if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === h
                },
                focus: function(e) {
                    return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return !1 === e.disabled
                },
                disabled: function(e) {
                    return !0 === e.disabled
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !r.pseudos.empty(e)
                },
                header: function(e) {
                    return Q.test(e.nodeName)
                },
                input: function(e) {
                    return G.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: pe(function() {
                    return [0]
                }),
                last: pe(function(e, t) {
                    return [t - 1]
                }),
                eq: pe(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: pe(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: pe(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: pe(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: pe(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }).pseudos.nth = r.pseudos.eq;
        for (t in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) r.pseudos[t] = ce(t);
        for (t in {
                submit: !0,
                reset: !0
            }) r.pseudos[t] = fe(t);

        function he() {}

        function ge(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r
        }

        function ve(e, t, n) {
            var r = t.dir,
                i = n && "parentNode" === r,
                o = C++;
            return t.first ? function(t, n, o) {
                for (; t = t[r];)
                    if (1 === t.nodeType || i) return e(t, n, o)
            } : function(t, n, s) {
                var a, u, l, c = [T, o];
                if (s) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || i) && e(t, n, s)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) {
                            if ((a = (u = (l = t[b] || (t[b] = {}))[t.uniqueID] || (l[t.uniqueID] = {}))[r]) && a[0] === T && a[1] === o) return c[2] = a[2];
                            if (u[r] = c, c[2] = e(t, n, s)) return !0
                        }
            }
        }

        function me(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function ye(e, t, n, r, i) {
            for (var o, s = [], a = 0, u = e.length, l = null != t; u > a; a++)(o = e[a]) && (n && !n(o, r, i) || (s.push(o), l && t.push(a)));
            return s
        }

        function xe(e, t, n, r, i, o) {
            return r && !r[b] && (r = xe(r)), i && !i[b] && (i = xe(i, o)), se(function(o, s, a, u) {
                var l, c, f, p = [],
                    d = [],
                    h = s.length,
                    g = o || function(e, t, n) {
                        for (var r = 0, i = t.length; i > r; r++) ie(e, t[r], n);
                        return n
                    }(t || "*", a.nodeType ? [a] : a, []),
                    v = !e || !o && t ? g : ye(g, p, e, a, u),
                    m = n ? i || (o ? e : h || r) ? [] : s : v;
                if (n && n(v, m, a, u), r)
                    for (l = ye(m, d), r(l, [], a, u), c = l.length; c--;)(f = l[c]) && (m[d[c]] = !(v[d[c]] = f));
                if (o) {
                    if (i || e) {
                        if (i) {
                            for (l = [], c = m.length; c--;)(f = m[c]) && l.push(v[c] = f);
                            i(null, m = [], l, u)
                        }
                        for (c = m.length; c--;)(f = m[c]) && (l = i ? F(o, f) : p[c]) > -1 && (o[l] = !(s[l] = f))
                    }
                } else m = ye(m === s ? m.splice(h, m.length) : m), i ? i(null, s, m, u) : H.apply(s, m)
            })
        }

        function be(e) {
            for (var t, n, i, o = e.length, s = r.relative[e[0].type], a = s || r.relative[" "], u = s ? 1 : 0, c = ve(function(e) {
                    return e === t
                }, a, !0), f = ve(function(e) {
                    return F(t, e) > -1
                }, a, !0), p = [function(e, n, r) {
                    var i = !s && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                    return t = null, i
                }]; o > u; u++)
                if (n = r.relative[e[u].type]) p = [ve(me(p), n)];
                else {
                    if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                        for (i = ++u; o > i && !r.relative[e[i].type]; i++);
                        return xe(u > 1 && me(p), u > 1 && ge(e.slice(0, u - 1).concat({
                            value: " " === e[u - 2].type ? "*" : ""
                        })).replace(B, "$1"), n, i > u && be(e.slice(u, i)), o > i && be(e = e.slice(i)), o > i && ge(e))
                    }
                    p.push(n)
                }
            return me(p)
        }
        return he.prototype = r.filters = r.pseudos, r.setFilters = new he, s = ie.tokenize = function(e, t) {
            var n, i, o, s, a, u, l, c = E[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (a = e, u = [], l = r.preFilter; a;) {
                n && !(i = _.exec(a)) || (i && (a = a.slice(i[0].length) || a), u.push(o = [])), n = !1, (i = X.exec(a)) && (n = i.shift(), o.push({
                    value: n,
                    type: i[0].replace(B, " ")
                }), a = a.slice(n.length));
                for (s in r.filter) !(i = Y[s].exec(a)) || l[s] && !(i = l[s](i)) || (n = i.shift(), o.push({
                    value: n,
                    type: s,
                    matches: i
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? ie.error(e) : E(e, u).slice(0)
        }, a = ie.compile = function(e, t) {
            var n, i, o, a, u, c, f = [],
                h = [],
                v = N[e + " "];
            if (!v) {
                for (t || (t = s(e)), n = t.length; n--;) v = be(t[n]), v[b] ? f.push(v) : h.push(v);
                (v = N(e, (i = h, a = (o = f).length > 0, u = i.length > 0, c = function(e, t, n, s, c) {
                    var f, h, v, m = 0,
                        y = "0",
                        x = e && [],
                        b = [],
                        w = l,
                        C = e || u && r.find.TAG("*", c),
                        k = T += null == w ? 1 : Math.random() || .1,
                        E = C.length;
                    for (c && (l = t === d || t || c); y !== E && null != (f = C[y]); y++) {
                        if (u && f) {
                            for (h = 0, t || f.ownerDocument === d || (p(f), n = !g); v = i[h++];)
                                if (v(f, t || d, n)) {
                                    s.push(f);
                                    break
                                }
                            c && (T = k)
                        }
                        a && ((f = !v && f) && m--, e && x.push(f))
                    }
                    if (m += y, a && y !== m) {
                        for (h = 0; v = o[h++];) v(x, b, t, n);
                        if (e) {
                            if (m > 0)
                                for (; y--;) x[y] || b[y] || (b[y] = q.call(s));
                            b = ye(b)
                        }
                        H.apply(s, b), c && !e && b.length > 0 && m + o.length > 1 && ie.uniqueSort(s)
                    }
                    return c && (T = k, l = w), x
                }, a ? se(c) : c))).selector = e
            }
            return v
        }, u = ie.select = function(e, t, i, o) {
            var u, l, c, f, p, d = "function" == typeof e && e,
                h = !o && s(e = d.selector || e);
            if (i = i || [], 1 === h.length) {
                if ((l = h[0] = h[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && n.getById && 9 === t.nodeType && g && r.relative[l[1].type]) {
                    if (!(t = (r.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return i;
                    d && (t = t.parentNode), e = e.slice(l.shift().value.length)
                }
                for (u = Y.needsContext.test(e) ? 0 : l.length; u-- && (c = l[u], !r.relative[f = c.type]);)
                    if ((p = r.find[f]) && (o = p(c.matches[0].replace(te, ne), Z.test(l[0].type) && de(t.parentNode) || t))) {
                        if (l.splice(u, 1), !(e = o.length && ge(l))) return H.apply(i, o), i;
                        break
                    }
            }
            return (d || a(e, h))(o, t, !g, i, !t || Z.test(e) && de(t.parentNode) || t), i
        }, n.sortStable = b.split("").sort(S).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ae(function(e) {
            return 1 & e.compareDocumentPosition(d.createElement("div"))
        }), ae(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ue("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), n.attributes && ae(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ue("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), ae(function(e) {
            return null == e.getAttribute("disabled")
        }) || ue(P, function(e, t, n) {
            var r;
            return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), ie
    }(e);
    p.find = y, p.expr = y.selectors, p.expr[":"] = p.expr.pseudos, p.uniqueSort = p.unique = y.uniqueSort, p.text = y.getText, p.isXMLDoc = y.isXML, p.contains = y.contains;
    var x = function(e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && p(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        b = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        w = p.expr.match.needsContext,
        T = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        C = /^.[^:#\[\.,]*$/;

    function k(e, t, n) {
        if (p.isFunction(t)) return p.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return p.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (C.test(t)) return p.filter(t, e, n);
            t = p.filter(t, e)
        }
        return p.grep(e, function(e) {
            return a.call(t, e) > -1 !== n
        })
    }
    p.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? p.find.matchesSelector(r, e) ? [r] : [] : p.find.matches(e, p.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, p.fn.extend({
        find: function(e) {
            var t, n = this.length,
                r = [],
                i = this;
            if ("string" != typeof e) return this.pushStack(p(e).filter(function() {
                for (t = 0; n > t; t++)
                    if (p.contains(i[t], this)) return !0
            }));
            for (t = 0; n > t; t++) p.find(e, i[t], r);
            return (r = this.pushStack(n > 1 ? p.unique(r) : r)).selector = this.selector ? this.selector + " " + e : e, r
        },
        filter: function(e) {
            return this.pushStack(k(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(k(this, e || [], !0))
        },
        is: function(e) {
            return !!k(this, "string" == typeof e && w.test(e) ? p(e) : e || [], !1).length
        }
    });
    var E, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (p.fn.init = function(e, t, n) {
        var i, o;
        if (!e) return this;
        if (n = n || E, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : N.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof p ? t[0] : t, p.merge(this, p.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), T.test(i[1]) && p.isPlainObject(t))
                    for (i in t) p.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (o = r.getElementById(i[2])) && o.parentNode && (this.length = 1, this[0] = o), this.context = r, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : p.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(p) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), p.makeArray(e, this))
    }).prototype = p.fn, E = p(r);
    var S = /^(?:parents|prev(?:Until|All))/,
        j = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function D(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    p.fn.extend({
        has: function(e) {
            var t = p(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; n > e; e++)
                    if (p.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], s = w.test(e) || "string" != typeof e ? p(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && p.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? p.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? a.call(p(e), this[0]) : a.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(p.uniqueSort(p.merge(this.get(), p(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), p.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return x(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return x(e, "parentNode", n)
        },
        next: function(e) {
            return D(e, "nextSibling")
        },
        prev: function(e) {
            return D(e, "previousSibling")
        },
        nextAll: function(e) {
            return x(e, "nextSibling")
        },
        prevAll: function(e) {
            return x(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return x(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return x(e, "previousSibling", n)
        },
        siblings: function(e) {
            return b((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return b(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || p.merge([], e.childNodes)
        }
    }, function(e, t) {
        p.fn[e] = function(n, r) {
            var i = p.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = p.filter(r, i)), this.length > 1 && (j[e] || p.uniqueSort(i), S.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var A, q = /\S+/g;

    function L() {
        r.removeEventListener("DOMContentLoaded", L), e.removeEventListener("load", L), p.ready()
    }
    p.Callbacks = function(e) {
        var t, n;
        e = "string" == typeof e ? (t = e, n = {}, p.each(t.match(q) || [], function(e, t) {
            n[t] = !0
        }), n) : p.extend({}, e);
        var r, i, o, s, a = [],
            u = [],
            l = -1,
            c = function() {
                for (s = e.once, o = r = !0; u.length; l = -1)
                    for (i = u.shift(); ++l < a.length;) !1 === a[l].apply(i[0], i[1]) && e.stopOnFalse && (l = a.length, i = !1);
                e.memory || (i = !1), r = !1, s && (a = i ? [] : "")
            },
            f = {
                add: function() {
                    return a && (i && !r && (l = a.length - 1, u.push(i)), function t(n) {
                        p.each(n, function(n, r) {
                            p.isFunction(r) ? e.unique && f.has(r) || a.push(r) : r && r.length && "string" !== p.type(r) && t(r)
                        })
                    }(arguments), i && !r && c()), this
                },
                remove: function() {
                    return p.each(arguments, function(e, t) {
                        for (var n;
                            (n = p.inArray(t, a, n)) > -1;) a.splice(n, 1), l >= n && l--
                    }), this
                },
                has: function(e) {
                    return e ? p.inArray(e, a) > -1 : a.length > 0
                },
                empty: function() {
                    return a && (a = []), this
                },
                disable: function() {
                    return s = u = [], a = i = "", this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return s = u = [], i || (a = i = ""), this
                },
                locked: function() {
                    return !!s
                },
                fireWith: function(e, t) {
                    return s || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), r || c()), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return f
    }, p.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", p.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", p.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", p.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return p.Deferred(function(n) {
                            p.each(t, function(t, o) {
                                var s = p.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = s && s.apply(this, arguments);
                                    e && p.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? p.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, p.each(t, function(e, o) {
                var s = o[2],
                    a = o[3];
                r[o[1]] = s.add, a && s.add(function() {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = s.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t, n, r, o = 0,
                s = i.call(arguments),
                a = s.length,
                u = 1 !== a || e && p.isFunction(e.promise) ? a : 0,
                l = 1 === u ? e : p.Deferred(),
                c = function(e, n, r) {
                    return function(o) {
                        n[e] = this, r[e] = arguments.length > 1 ? i.call(arguments) : o, r === t ? l.notifyWith(n, r) : --u || l.resolveWith(n, r)
                    }
                };
            if (a > 1)
                for (t = new Array(a), n = new Array(a), r = new Array(a); a > o; o++) s[o] && p.isFunction(s[o].promise) ? s[o].promise().progress(c(o, n, t)).done(c(o, r, s)).fail(l.reject) : --u;
            return u || l.resolveWith(r, s), l.promise()
        }
    }), p.fn.ready = function(e) {
        return p.ready.promise().done(e), this
    }, p.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? p.readyWait++ : p.ready(!0)
        },
        ready: function(e) {
            (!0 === e ? --p.readyWait : p.isReady) || (p.isReady = !0, !0 !== e && --p.readyWait > 0 || (A.resolveWith(r, [p]), p.fn.triggerHandler && (p(r).triggerHandler("ready"), p(r).off("ready"))))
        }
    }), p.ready.promise = function(t) {
        return A || (A = p.Deferred(), "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(p.ready) : (r.addEventListener("DOMContentLoaded", L), e.addEventListener("load", L))), A.promise(t)
    }, p.ready.promise();
    var H = function(e, t, n, r, i, o, s) {
            var a = 0,
                u = e.length,
                l = null == n;
            if ("object" === p.type(n)) {
                i = !0;
                for (a in n) H(e, t, a, n[a], !0, o, s)
            } else if (void 0 !== r && (i = !0, p.isFunction(r) || (s = !0), l && (s ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(p(e), n)
                })), t))
                for (; u > a; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        O = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };

    function F() {
        this.expando = p.expando + F.uid++
    }
    F.uid = 1, F.prototype = {
        register: function(e, t) {
            var n = t || {};
            return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                value: n,
                writable: !0,
                configurable: !0
            }), e[this.expando]
        },
        cache: function(e) {
            if (!O(e)) return {};
            var t = e[this.expando];
            return t || (t = {}, O(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[t] = n;
            else
                for (r in t) i[r] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
        },
        access: function(e, t, n) {
            var r;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? void 0 !== (r = this.get(e, t)) ? r : this.get(e, p.camelCase(t)) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r, i, o = e[this.expando];
            if (void 0 !== o) {
                if (void 0 === t) this.register(e);
                else {
                    p.isArray(t) ? r = t.concat(t.map(p.camelCase)) : (i = p.camelCase(t), t in o ? r = [t, i] : r = (r = i) in o ? [r] : r.match(q) || []), n = r.length;
                    for (; n--;) delete o[r[n]]
                }(void 0 === t || p.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !p.isEmptyObject(t)
        }
    };
    var P = new F,
        R = new F,
        M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        I = /[A-Z]/g;

    function W(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(I, "-$&").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : M.test(n) ? p.parseJSON(n) : n)
                } catch (e) {}
                R.set(e, t, n)
            } else n = void 0;
        return n
    }
    p.extend({
        hasData: function(e) {
            return R.hasData(e) || P.hasData(e)
        },
        data: function(e, t, n) {
            return R.access(e, t, n)
        },
        removeData: function(e, t) {
            R.remove(e, t)
        },
        _data: function(e, t, n) {
            return P.access(e, t, n)
        },
        _removeData: function(e, t) {
            P.remove(e, t)
        }
    }), p.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0],
                s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = R.get(o), 1 === o.nodeType && !P.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && (r = s[n].name, 0 === r.indexOf("data-") && (r = p.camelCase(r.slice(5)), W(o, r, i[r])));
                    P.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                R.set(this, e)
            }) : H(this, function(t) {
                var n, r;
                if (o && void 0 === t) {
                    if (void 0 !== (n = R.get(o, e) || R.get(o, e.replace(I, "-$&").toLowerCase()))) return n;
                    if (r = p.camelCase(e), void 0 !== (n = R.get(o, r))) return n;
                    if (void 0 !== (n = W(o, r, void 0))) return n
                } else r = p.camelCase(e), this.each(function() {
                    var n = R.get(this, r);
                    R.set(this, r, t), e.indexOf("-") > -1 && void 0 !== n && R.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                R.remove(this, e)
            })
        }
    }), p.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = P.get(e, t), n && (!r || p.isArray(n) ? r = P.access(e, t, p.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = p.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = p._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                p.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return P.get(e, n) || P.access(e, n, {
                empty: p.Callbacks("once memory").add(function() {
                    P.remove(e, [t + "queue", n])
                })
            })
        }
    }), p.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? p.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = p.queue(this, e, t);
                p._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && p.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                p.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = p.Deferred(),
                o = this,
                s = this.length,
                a = function() {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = P.get(o[s], e + "queueHooks"), n && n.empty && (r++, n.empty.add(a));
            return a(), i.promise(t)
        }
    });
    var $ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        B = new RegExp("^(?:([+-])=|)(" + $ + ")([a-z%]*)$", "i"),
        _ = ["Top", "Right", "Bottom", "Left"],
        X = function(e, t) {
            return e = t || e, "none" === p.css(e, "display") || !p.contains(e.ownerDocument, e)
        };

    function z(e, t, n, r) {
        var i, o = 1,
            s = 20,
            a = r ? function() {
                return r.cur()
            } : function() {
                return p.css(e, t, "")
            },
            u = a(),
            l = n && n[3] || (p.cssNumber[t] ? "" : "px"),
            c = (p.cssNumber[t] || "px" !== l && +u) && B.exec(p.css(e, t));
        if (c && c[3] !== l) {
            l = l || c[3], n = n || [], c = +u || 1;
            do {
                o = o || ".5", c /= o, p.style(e, t, c + l)
            } while (o !== (o = a() / u) && 1 !== o && --s)
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var U = /^(?:checkbox|radio)$/i,
        V = /<([\w:-]+)/,
        Y = /^$|\/(?:java|ecma)script/i,
        G = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function Q(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && p.nodeName(e, t) ? p.merge([e], n) : n
    }

    function J(e, t) {
        for (var n = 0, r = e.length; r > n; n++) P.set(e[n], "globalEval", !t || P.get(t[n], "globalEval"))
    }
    G.optgroup = G.option, G.tbody = G.tfoot = G.colgroup = G.caption = G.thead, G.th = G.td;
    var K, Z, ee = /<|&#?\w+;/;

    function te(e, t, n, r, i) {
        for (var o, s, a, u, l, c, f = t.createDocumentFragment(), d = [], h = 0, g = e.length; g > h; h++)
            if (o = e[h], o || 0 === o)
                if ("object" === p.type(o)) p.merge(d, o.nodeType ? [o] : o);
                else if (ee.test(o)) {
            for (s = s || f.appendChild(t.createElement("div")), a = (V.exec(o) || ["", ""])[1].toLowerCase(), u = G[a] || G._default, s.innerHTML = u[1] + p.htmlPrefilter(o) + u[2], c = u[0]; c--;) s = s.lastChild;
            p.merge(d, s.childNodes), (s = f.firstChild).textContent = ""
        } else d.push(t.createTextNode(o));
        for (f.textContent = "", h = 0; o = d[h++];)
            if (r && p.inArray(o, r) > -1) i && i.push(o);
            else if (l = p.contains(o.ownerDocument, o), s = Q(f.appendChild(o), "script"), l && J(s), n)
            for (c = 0; o = s[c++];) Y.test(o.type || "") && n.push(o);
        return f
    }
    K = r.createDocumentFragment().appendChild(r.createElement("div")), (Z = r.createElement("input")).setAttribute("type", "radio"), Z.setAttribute("checked", "checked"), Z.setAttribute("name", "t"), K.appendChild(Z), f.checkClone = K.cloneNode(!0).cloneNode(!0).lastChild.checked, K.innerHTML = "<textarea>x</textarea>", f.noCloneChecked = !!K.cloneNode(!0).lastChild.defaultValue;
    var ne = /^key/,
        re = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ie = /^([^.]*)(?:\.(.+)|)/;

    function oe() {
        return !0
    }

    function se() {
        return !1
    }

    function ae() {
        try {
            return r.activeElement
        } catch (e) {}
    }

    function ue(e, t, n, r, i, o) {
        var s, a;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (a in t) ue(e, a, n, r, t[a], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = se;
        else if (!i) return e;
        return 1 === o && (s = i, (i = function(e) {
            return p().off(e), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = p.guid++)), e.each(function() {
            p.event.add(this, t, i, r, n)
        })
    }
    p.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, s, a, u, l, c, f, d, h, g, v, m = P.get(e);
            if (m)
                for (n.handler && (n = (o = n).handler, i = o.selector), n.guid || (n.guid = p.guid++), (u = m.events) || (u = m.events = {}), (s = m.handle) || (s = m.handle = function(t) {
                        return void 0 !== p && p.event.triggered !== t.type ? p.event.dispatch.apply(e, arguments) : void 0
                    }), l = (t = (t || "").match(q) || [""]).length; l--;) a = ie.exec(t[l]) || [], h = v = a[1], g = (a[2] || "").split(".").sort(), h && (f = p.event.special[h] || {}, h = (i ? f.delegateType : f.bindType) || h, f = p.event.special[h] || {}, c = p.extend({
                    type: h,
                    origType: v,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && p.expr.match.needsContext.test(i),
                    namespace: g.join(".")
                }, o), (d = u[h]) || (d = u[h] = [], d.delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, g, s) || e.addEventListener && e.addEventListener(h, s)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), p.event.global[h] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, s, a, u, l, c, f, d, h, g, v, m = P.hasData(e) && P.get(e);
            if (m && (u = m.events)) {
                for (l = (t = (t || "").match(q) || [""]).length; l--;)
                    if (a = ie.exec(t[l]) || [], h = v = a[1], g = (a[2] || "").split(".").sort(), h) {
                        for (f = p.event.special[h] || {}, d = u[h = (r ? f.delegateType : f.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--;) c = d[o], !i && v !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                        s && !d.length && (f.teardown && !1 !== f.teardown.call(e, g, m.handle) || p.removeEvent(e, h, m.handle), delete u[h])
                    } else
                        for (h in u) p.event.remove(e, h + t[l], n, r, !0);
                p.isEmptyObject(u) && P.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            e = p.event.fix(e);
            var t, n, r, o, s, a = [],
                u = i.call(arguments),
                l = (P.get(this, "events") || {})[e.type] || [],
                c = p.event.special[e.type] || {};
            if (u[0] = e, e.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
                for (a = p.event.handlers.call(this, e, l), t = 0;
                    (o = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = o.elem, n = 0;
                        (s = o.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(s.namespace) || (e.handleObj = s, e.data = s.data, r = ((p.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, u), void 0 !== r && !1 === (e.result = r) && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, s = [],
                a = t.delegateCount,
                u = e.target;
            if (a && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && (!0 !== u.disabled || "click" !== e.type)) {
                        for (r = [], n = 0; a > n; n++) o = t[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? p(i, this).index(u) > -1 : p.find(i, this, null, [u]).length), r[i] && r.push(o);
                        r.length && s.push({
                            elem: u,
                            handlers: r
                        })
                    }
            return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, i, o, s = t.button;
                return null == e.pageX && null != t.clientX && (i = (n = e.target.ownerDocument || r).documentElement, o = n.body, e.pageX = t.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), e.which || void 0 === s || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[p.expando]) return e;
            var t, n, i, o = e.type,
                s = e,
                a = this.fixHooks[o];
            for (a || (this.fixHooks[o] = a = re.test(o) ? this.mouseHooks : ne.test(o) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new p.Event(s), t = i.length; t--;) n = i[t], e[n] = s[n];
            return e.target || (e.target = r), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, s) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== ae() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ae() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && p.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return p.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, p.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, p.Event = function(e, t) {
        return this instanceof p.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? oe : se) : this.type = e, t && p.extend(this, t), this.timeStamp = e && e.timeStamp || p.now(), void(this[p.expando] = !0)) : new p.Event(e, t)
    }, p.Event.prototype = {
        constructor: p.Event,
        isDefaultPrevented: se,
        isPropagationStopped: se,
        isImmediatePropagationStopped: se,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = oe, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = oe, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = oe, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, p.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        p.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = e.relatedTarget,
                    i = e.handleObj;
                return r && (r === this || p.contains(this, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), p.fn.extend({
        on: function(e, t, n, r) {
            return ue(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return ue(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, p(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = se), this.each(function() {
                p.event.remove(this, e, n, t)
            })
        }
    });
    var le = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        ce = /<script|<style|<link/i,
        fe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        pe = /^true\/(.*)/,
        de = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function he(e, t) {
        return p.nodeName(e, "table") && p.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function ge(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function ve(e) {
        var t = pe.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function me(e, t) {
        var n, r, i, o, s, a, u, l;
        if (1 === t.nodeType) {
            if (P.hasData(e) && (o = P.access(e), s = P.set(t, o), l = o.events)) {
                delete s.handle, s.events = {};
                for (i in l)
                    for (n = 0, r = l[i].length; r > n; n++) p.event.add(t, i, l[i][n])
            }
            R.hasData(e) && (a = R.access(e), u = p.extend({}, a), R.set(t, u))
        }
    }

    function ye(e, t, n, r) {
        t = o.apply([], t);
        var i, s, a, u, l, c, d = 0,
            h = e.length,
            g = h - 1,
            v = t[0],
            m = p.isFunction(v);
        if (m || h > 1 && "string" == typeof v && !f.checkClone && fe.test(v)) return e.each(function(i) {
            var o = e.eq(i);
            m && (t[0] = v.call(this, i, o.html())), ye(o, t, n, r)
        });
        if (h && (s = (i = te(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = s), s || r)) {
            for (u = (a = p.map(Q(i, "script"), ge)).length; h > d; d++) l = i, d !== g && (l = p.clone(l, !0, !0), u && p.merge(a, Q(l, "script"))), n.call(e[d], l, d);
            if (u)
                for (c = a[a.length - 1].ownerDocument, p.map(a, ve), d = 0; u > d; d++) l = a[d], Y.test(l.type || "") && !P.access(l, "globalEval") && p.contains(c, l) && (l.src ? p._evalUrl && p._evalUrl(l.src) : p.globalEval(l.textContent.replace(de, "")))
        }
        return e
    }

    function xe(e, t, n) {
        for (var r, i = t ? p.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || p.cleanData(Q(r)), r.parentNode && (n && p.contains(r.ownerDocument, r) && J(Q(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    p.extend({
        htmlPrefilter: function(e) {
            return e.replace(le, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, s, a, u, l, c = e.cloneNode(!0),
                d = p.contains(e.ownerDocument, e);
            if (!(f.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || p.isXMLDoc(e)))
                for (s = Q(c), o = Q(e), r = 0, i = o.length; i > r; r++) a = o[r], u = s[r], void 0, l = u.nodeName.toLowerCase(), "input" === l && U.test(a.type) ? u.checked = a.checked : "input" !== l && "textarea" !== l || (u.defaultValue = a.defaultValue);
            if (t)
                if (n)
                    for (o = o || Q(e), s = s || Q(c), r = 0, i = o.length; i > r; r++) me(o[r], s[r]);
                else me(e, c);
            return (s = Q(c, "script")).length > 0 && J(s, !d && Q(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, r, i = p.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (O(n)) {
                    if (t = n[P.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? p.event.remove(n, r) : p.removeEvent(n, r, t.handle);
                        n[P.expando] = void 0
                    }
                    n[R.expando] && (n[R.expando] = void 0)
                }
        }
    }), p.fn.extend({
        domManip: ye,
        detach: function(e) {
            return xe(this, e, !0)
        },
        remove: function(e) {
            return xe(this, e)
        },
        text: function(e) {
            return H(this, function(e) {
                return void 0 === e ? p.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return ye(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || he(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return ye(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = he(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return ye(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return ye(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (p.cleanData(Q(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return p.clone(this, e, t)
            })
        },
        html: function(e) {
            return H(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !ce.test(e) && !G[(V.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = p.htmlPrefilter(e);
                    try {
                        for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (p.cleanData(Q(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return ye(this, arguments, function(t) {
                var n = this.parentNode;
                p.inArray(this, e) < 0 && (p.cleanData(Q(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), p.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        p.fn[e] = function(e) {
            for (var n, r = [], i = p(e), o = i.length - 1, a = 0; o >= a; a++) n = a === o ? this : this.clone(!0), p(i[a])[t](n), s.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var be, we = {
        HTML: "block",
        BODY: "block"
    };

    function Te(e, t) {
        var n = p(t.createElement(e)).appendTo(t.body),
            r = p.css(n[0], "display");
        return n.detach(), r
    }

    function Ce(e) {
        var t = r,
            n = we[e];
        return n || ("none" !== (n = Te(e, t)) && n || ((t = (be = (be || p("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(), t.close(), n = Te(e, t), be.detach()), we[e] = n), n
    }
    var ke = /^margin/,
        Ee = new RegExp("^(" + $ + ")(?!px)[a-z%]+$", "i"),
        Ne = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        Se = function(e, t, n, r) {
            var i, o, s = {};
            for (o in t) s[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = s[o];
            return i
        },
        je = r.documentElement;

    function De(e, t, n) {
        var r, i, o, s, a = e.style;
        return "" !== (s = (n = n || Ne(e)) ? n.getPropertyValue(t) || n[t] : void 0) && void 0 !== s || p.contains(e.ownerDocument, e) || (s = p.style(e, t)), n && !f.pixelMarginRight() && Ee.test(s) && ke.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o), void 0 !== s ? s + "" : s
    }

    function Ae(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }! function() {
        var t, n, i, o, s = r.createElement("div"),
            a = r.createElement("div");
        if (a.style) {
            function u() {
                a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", je.appendChild(s);
                var r = e.getComputedStyle(a);
                t = "1%" !== r.top, o = "2px" === r.marginLeft, n = "4px" === r.width, a.style.marginRight = "50%", i = "4px" === r.marginRight, je.removeChild(s)
            }
            a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", f.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), p.extend(f, {
                pixelPosition: function() {
                    return u(), t
                },
                boxSizingReliable: function() {
                    return null == n && u(), n
                },
                pixelMarginRight: function() {
                    return null == n && u(), i
                },
                reliableMarginLeft: function() {
                    return null == n && u(), o
                },
                reliableMarginRight: function() {
                    var t, n = a.appendChild(r.createElement("div"));
                    return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", je.appendChild(s), t = !parseFloat(e.getComputedStyle(n).marginRight), je.removeChild(s), a.removeChild(n), t
                }
            })
        }
    }();
    var qe = /^(none|table(?!-c[ea]).+)/,
        Le = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        He = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Oe = ["Webkit", "O", "Moz", "ms"],
        Fe = r.createElement("div").style;

    function Pe(e) {
        if (e in Fe) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = Oe.length; n--;)
            if (e = Oe[n] + t, e in Fe) return e
    }

    function Re(e, t, n) {
        var r = B.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Me(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === n && (s += p.css(e, n + _[o], !0, i)), r ? ("content" === n && (s -= p.css(e, "padding" + _[o], !0, i)), "margin" !== n && (s -= p.css(e, "border" + _[o] + "Width", !0, i))) : (s += p.css(e, "padding" + _[o], !0, i), "padding" !== n && (s += p.css(e, "border" + _[o] + "Width", !0, i)));
        return s
    }

    function Ie(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = Ne(e),
            s = "border-box" === p.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if ((0 > (i = De(e, t, o)) || null == i) && (i = e.style[t]), Ee.test(i)) return i;
            r = s && (f.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + Me(e, t, n || (s ? "border" : "content"), r, o) + "px"
    }

    function We(e, t) {
        for (var n, r, i, o = [], s = 0, a = e.length; a > s; s++) r = e[s], r.style && (o[s] = P.get(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && X(r) && (o[s] = P.access(r, "olddisplay", Ce(r.nodeName)))) : (i = X(r), "none" === n && i || P.set(r, "olddisplay", i ? n : p.css(r, "display"))));
        for (s = 0; a > s; s++) r = e[s], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
        return e
    }

    function $e(e, t, n, r, i) {
        return new $e.prototype.init(e, t, n, r, i)
    }
    p.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = De(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, s, a = p.camelCase(t),
                    u = e.style;
                return t = p.cssProps[a] || (p.cssProps[a] = Pe(a) || a), s = p.cssHooks[t] || p.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t] : ("string" === (o = typeof n) && (i = B.exec(n)) && i[1] && (n = z(e, t, i), o = "number"), void(null != n && n == n && ("number" === o && (n += i && i[3] || (p.cssNumber[a] ? "" : "px")), f.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (u[t] = n))))
            }
        },
        css: function(e, t, n, r) {
            var i, o, s, a = p.camelCase(t);
            return t = p.cssProps[a] || (p.cssProps[a] = Pe(a) || a), (s = p.cssHooks[t] || p.cssHooks[a]) && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = De(e, t, r)), "normal" === i && t in He && (i = He[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), p.each(["height", "width"], function(e, t) {
        p.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? qe.test(p.css(e, "display")) && 0 === e.offsetWidth ? Se(e, Le, function() {
                    return Ie(e, t, r)
                }) : Ie(e, t, r) : void 0
            },
            set: function(e, n, r) {
                var i, o = r && Ne(e),
                    s = r && Me(e, t, r, "border-box" === p.css(e, "boxSizing", !1, o), o);
                return s && (i = B.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = p.css(e, t)), Re(0, n, s)
            }
        }
    }), p.cssHooks.marginLeft = Ae(f.reliableMarginLeft, function(e, t) {
        return t ? (parseFloat(De(e, "marginLeft")) || e.getBoundingClientRect().left - Se(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px" : void 0
    }), p.cssHooks.marginRight = Ae(f.reliableMarginRight, function(e, t) {
        return t ? Se(e, {
            display: "inline-block"
        }, De, [e, "marginRight"]) : void 0
    }), p.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        p.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + _[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, ke.test(e) || (p.cssHooks[e + t].set = Re)
    }), p.fn.extend({
        css: function(e, t) {
            return H(this, function(e, t, n) {
                var r, i, o = {},
                    s = 0;
                if (p.isArray(t)) {
                    for (r = Ne(e), i = t.length; i > s; s++) o[t[s]] = p.css(e, t[s], !1, r);
                    return o
                }
                return void 0 !== n ? p.style(e, t, n) : p.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return We(this, !0)
        },
        hide: function() {
            return We(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                X(this) ? p(this).show() : p(this).hide()
            })
        }
    }), p.Tween = $e, $e.prototype = {
        constructor: $e,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || p.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (p.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = $e.propHooks[this.prop];
            return e && e.get ? e.get(this) : $e.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = $e.propHooks[this.prop];
            return this.options.duration ? this.pos = t = p.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : $e.propHooks._default.set(this), this
        }
    }, $e.prototype.init.prototype = $e.prototype, $e.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = p.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                p.fx.step[e.prop] ? p.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[p.cssProps[e.prop]] && !p.cssHooks[e.prop] ? e.elem[e.prop] = e.now : p.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, $e.propHooks.scrollTop = $e.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, p.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, p.fx = $e.prototype.init, p.fx.step = {};
    var Be, _e, Xe, ze, Ue, Ve = /^(?:toggle|show|hide)$/,
        Ye = /queueHooks$/;

    function Ge() {
        return e.setTimeout(function() {
            Be = void 0
        }), Be = p.now()
    }

    function Qe(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = _[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function Je(e, t, n) {
        for (var r, i = (Ke.tweeners[t] || []).concat(Ke.tweeners["*"]), o = 0, s = i.length; s > o; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function Ke(e, t, n) {
        var r, i, o = 0,
            s = Ke.prefilters.length,
            a = p.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (i) return !1;
                for (var t = Be || Ge(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, s = l.tweens.length; s > o; o++) l.tweens[o].run(r);
                return a.notifyWith(e, [l, r, n]), 1 > r && s ? n : (a.resolveWith(e, [l]), !1)
            },
            l = a.promise({
                elem: e,
                props: p.extend({}, t),
                opts: p.extend(!0, {
                    specialEasing: {},
                    easing: p.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Be || Ge(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = p.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) l.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l, t])) : a.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (function(e, t) {
                var n, r, i, o, s;
                for (n in e)
                    if (r = p.camelCase(n), i = t[r], o = e[n], p.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), s = p.cssHooks[r], s && "expand" in s) {
                        o = s.expand(o), delete e[r];
                        for (n in o) n in e || (e[n] = o[n], t[n] = i)
                    } else t[r] = i
            }(c, l.opts.specialEasing); s > o; o++)
            if (r = Ke.prefilters[o].call(l, e, c, l.opts)) return p.isFunction(r.stop) && (p._queueHooks(l.elem, l.opts.queue).stop = p.proxy(r.stop, r)), r;
        return p.map(c, Je, l), p.isFunction(l.opts.start) && l.opts.start.call(e, l), p.fx.timer(p.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    p.Animation = p.extend(Ke, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return z(n.elem, e, B.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            p.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(q);
            for (var n, r = 0, i = e.length; i > r; r++) n = e[r], Ke.tweeners[n] = Ke.tweeners[n] || [], Ke.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, s, a, u, l, c = this,
                f = {},
                d = e.style,
                h = e.nodeType && X(e),
                g = P.get(e, "fxshow");
            n.queue || (null == (a = p._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function() {
                a.unqueued || u()
            }), a.unqueued++, c.always(function() {
                c.always(function() {
                    a.unqueued--, p.queue(e, "fx").length || a.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === ("none" === (l = p.css(e, "display")) ? P.get(e, "olddisplay") || Ce(e.nodeName) : l) && "none" === p.css(e, "float") && (d.display = "inline-block")), n.overflow && (d.overflow = "hidden", c.always(function() {
                d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
            }));
            for (r in t)
                if (i = t[r], Ve.exec(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                        if ("show" !== i || !g || void 0 === g[r]) continue;
                        h = !0
                    }
                    f[r] = g && g[r] || p.style(e, r)
                } else l = void 0;
            if (p.isEmptyObject(f)) "inline" === ("none" === l ? Ce(e.nodeName) : l) && (d.display = l);
            else {
                g ? "hidden" in g && (h = g.hidden) : g = P.access(e, "fxshow", {}), o && (g.hidden = !h), h ? p(e).show() : c.done(function() {
                    p(e).hide()
                }), c.done(function() {
                    var t;
                    P.remove(e, "fxshow");
                    for (t in f) p.style(e, t, f[t])
                });
                for (r in f) s = Je(h ? g[r] : 0, r, c), r in g || (g[r] = s.start, h && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
            }
        }],
        prefilter: function(e, t) {
            t ? Ke.prefilters.unshift(e) : Ke.prefilters.push(e)
        }
    }), p.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? p.extend({}, e) : {
            complete: n || !n && t || p.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !p.isFunction(t) && t
        };
        return r.duration = p.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in p.fx.speeds ? p.fx.speeds[r.duration] : p.fx.speeds._default, null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            p.isFunction(r.old) && r.old.call(this), r.queue && p.dequeue(this, r.queue)
        }, r
    }, p.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(X).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = p.isEmptyObject(e),
                o = p.speed(t, n, r),
                s = function() {
                    var t = Ke(this, p.extend({}, e), o);
                    (i || P.get(this, "finish")) && t.stop(!0)
                };
            return s.finish = s, i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    i = null != e && e + "queueHooks",
                    o = p.timers,
                    s = P.get(this);
                if (i) s[i] && s[i].stop && r(s[i]);
                else
                    for (i in s) s[i] && s[i].stop && Ye.test(i) && r(s[i]);
                for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                !t && n || p.dequeue(this, e)
            })
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"), this.each(function() {
                var t, n = P.get(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = p.timers,
                    s = r ? r.length : 0;
                for (n.finish = !0, p.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; s > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), p.each(["toggle", "show", "hide"], function(e, t) {
        var n = p.fn[t];
        p.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(Qe(t, !0), e, r, i)
        }
    }), p.each({
        slideDown: Qe("show"),
        slideUp: Qe("hide"),
        slideToggle: Qe("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        p.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), p.timers = [], p.fx.tick = function() {
        var e, t = 0,
            n = p.timers;
        for (Be = p.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
        n.length || p.fx.stop(), Be = void 0
    }, p.fx.timer = function(e) {
        p.timers.push(e), e() ? p.fx.start() : p.timers.pop()
    }, p.fx.interval = 13, p.fx.start = function() {
        _e || (_e = e.setInterval(p.fx.tick, p.fx.interval))
    }, p.fx.stop = function() {
        e.clearInterval(_e), _e = null
    }, p.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, p.fn.delay = function(t, n) {
        return t = p.fx ? p.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function() {
                e.clearTimeout(i)
            }
        })
    }, Xe = r.createElement("input"), ze = r.createElement("select"), Ue = ze.appendChild(r.createElement("option")), Xe.type = "checkbox", f.checkOn = "" !== Xe.value, f.optSelected = Ue.selected, ze.disabled = !0, f.optDisabled = !Ue.disabled, (Xe = r.createElement("input")).value = "t", Xe.type = "radio", f.radioValue = "t" === Xe.value;
    var Ze, et = p.expr.attrHandle;
    p.fn.extend({
        attr: function(e, t) {
            return H(this, p.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                p.removeAttr(this, e)
            })
        }
    }), p.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? p.prop(e, t, n) : (1 === o && p.isXMLDoc(e) || (t = t.toLowerCase(), i = p.attrHooks[t] || (p.expr.match.bool.test(t) ? Ze : void 0)), void 0 !== n ? null === n ? void p.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = p.find.attr(e, t), null == r ? void 0 : r))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!f.radioValue && "radio" === t && p.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(q);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = p.propFix[n] || n, p.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
        }
    }), Ze = {
        set: function(e, t, n) {
            return !1 === t ? p.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, p.each(p.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = et[t] || p.find.attr;
        et[t] = function(e, t, r) {
            var i, o;
            return r || (o = et[t], et[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, et[t] = o), i
        }
    });
    var tt = /^(?:input|select|textarea|button)$/i,
        nt = /^(?:a|area)$/i;
    p.fn.extend({
        prop: function(e, t) {
            return H(this, p.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[p.propFix[e] || e]
            })
        }
    }), p.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && p.isXMLDoc(e) || (t = p.propFix[t] || t, i = p.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = p.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : tt.test(e.nodeName) || nt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), f.optSelected || (p.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), p.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        p.propFix[this.toLowerCase()] = this
    });
    var rt = /[\t\r\n\f]/g;

    function it(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    p.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, s, a, u = 0;
            if (p.isFunction(e)) return this.each(function(t) {
                p(this).addClass(e.call(this, t, it(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(q) || []; n = this[u++];)
                    if (i = it(n), r = 1 === n.nodeType && (" " + i + " ").replace(rt, " ")) {
                        for (s = 0; o = t[s++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (a = p.trim(r)) && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, s, a, u = 0;
            if (p.isFunction(e)) return this.each(function(t) {
                p(this).removeClass(e.call(this, t, it(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(q) || []; n = this[u++];)
                    if (i = it(n), r = 1 === n.nodeType && (" " + i + " ").replace(rt, " ")) {
                        for (s = 0; o = t[s++];)
                            for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                        i !== (a = p.trim(r)) && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : p.isFunction(e) ? this.each(function(n) {
                p(this).toggleClass(e.call(this, n, it(this), t), t)
            }) : this.each(function() {
                var t, r, i, o;
                if ("string" === n)
                    for (r = 0, i = p(this), o = e.match(q) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else void 0 !== e && "boolean" !== n || (t = it(this), t && P.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : P.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && (" " + it(n) + " ").replace(rt, " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var ot = /\r/g,
        st = /[\x20\t\r\n\f]+/g;
    p.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = p.isFunction(e), this.each(function(n) {
                var i;
                1 === this.nodeType && (null == (i = r ? e.call(this, n, p(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : p.isArray(i) && (i = p.map(i, function(e) {
                    return null == e ? "" : e + ""
                })), (t = p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = p.valHooks[i.type] || p.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(ot, "") : null == n ? "" : n : void 0
        }
    }), p.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = p.find.attr(e, "value");
                    return null != t ? t : p.trim(p.text(e)).replace(st, " ")
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, s = o ? null : [], a = o ? i + 1 : r.length, u = 0 > i ? a : o ? i : 0; a > u; u++)
                        if (n = r[u], (n.selected || u === i) && (f.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !p.nodeName(n.parentNode, "optgroup"))) {
                            if (t = p(n).val(), o) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = p.makeArray(t), s = i.length; s--;) r = i[s], (r.selected = p.inArray(p.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), p.each(["radio", "checkbox"], function() {
        p.valHooks[this] = {
            set: function(e, t) {
                return p.isArray(t) ? e.checked = p.inArray(p(e).val(), t) > -1 : void 0
            }
        }, f.checkOn || (p.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var at = /^(?:focusinfocus|focusoutblur)$/;
    p.extend(p.event, {
        trigger: function(t, n, i, o) {
            var s, a, u, l, f, d, h, g = [i || r],
                v = c.call(t, "type") ? t.type : t,
                m = c.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = u = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !at.test(v + p.event.triggered) && (v.indexOf(".") > -1 && (v = (m = v.split(".")).shift(), m.sort()), f = v.indexOf(":") < 0 && "on" + v, (t = t[p.expando] ? t : new p.Event(v, "object" == typeof t && t)).isTrigger = o ? 2 : 3, t.namespace = m.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : p.makeArray(n, [t]), h = p.event.special[v] || {}, o || !h.trigger || !1 !== h.trigger.apply(i, n))) {
                if (!o && !h.noBubble && !p.isWindow(i)) {
                    for (l = h.delegateType || v, at.test(l + v) || (a = a.parentNode); a; a = a.parentNode) g.push(a), u = a;
                    u === (i.ownerDocument || r) && g.push(u.defaultView || u.parentWindow || e)
                }
                for (s = 0;
                    (a = g[s++]) && !t.isPropagationStopped();) t.type = s > 1 ? l : h.bindType || v, d = (P.get(a, "events") || {})[t.type] && P.get(a, "handle"), d && d.apply(a, n), d = f && a[f], d && d.apply && O(a) && (t.result = d.apply(a, n), !1 === t.result && t.preventDefault());
                return t.type = v, o || t.isDefaultPrevented() || h._default && !1 !== h._default.apply(g.pop(), n) || !O(i) || f && p.isFunction(i[v]) && !p.isWindow(i) && ((u = i[f]) && (i[f] = null), p.event.triggered = v, i[v](), p.event.triggered = void 0, u && (i[f] = u)), t.result
            }
        },
        simulate: function(e, t, n) {
            var r = p.extend(new p.Event, n, {
                type: e,
                isSimulated: !0
            });
            p.event.trigger(r, null, t)
        }
    }), p.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                p.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? p.event.trigger(e, t, n, !0) : void 0
        }
    }), p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        p.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), p.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), f.focusin = "onfocusin" in e, f.focusin || p.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            p.event.simulate(t, e.target, p.event.fix(e))
        };
        p.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = P.access(r, t);
                i || r.addEventListener(e, n, !0), P.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = P.access(r, t) - 1;
                i ? P.access(r, t, i) : (r.removeEventListener(e, n, !0), P.remove(r, t))
            }
        }
    });
    var ut = e.location,
        lt = p.now(),
        ct = /\?/;
    p.parseJSON = function(e) {
        return JSON.parse(e + "")
    }, p.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || p.error("Invalid XML: " + t), n
    };
    var ft = /#.*$/,
        pt = /([?&])_=[^&]*/,
        dt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        ht = /^(?:GET|HEAD)$/,
        gt = /^\/\//,
        vt = {},
        mt = {},
        yt = "*/".concat("*"),
        xt = r.createElement("a");

    function bt(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(q) || [];
            if (p.isFunction(n))
                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function wt(e, t, n, r) {
        var i = {},
            o = e === mt;

        function s(a) {
            var u;
            return i[a] = !0, p.each(e[a] || [], function(e, a) {
                var l = a(t, n, r);
                return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), s(l), !1)
            }), u
        }
        return s(t.dataTypes[0]) || !i["*"] && s("*")
    }

    function Tt(e, t) {
        var n, r, i = p.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && p.extend(!0, e, r), e
    }
    xt.href = ut.href, p.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ut.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ut.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": yt,
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
            converters: {
                "* text": String,
                "text html": !0,
                "text json": p.parseJSON,
                "text xml": p.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Tt(Tt(e, p.ajaxSettings), t) : Tt(p.ajaxSettings, e)
        },
        ajaxPrefilter: bt(vt),
        ajaxTransport: bt(mt),
        ajax: function(t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var i, o, s, a, u, l, c, f, d = p.ajaxSetup({}, n),
                h = d.context || d,
                g = d.context && (h.nodeType || h.jquery) ? p(h) : p.event,
                v = p.Deferred(),
                m = p.Callbacks("once memory"),
                y = d.statusCode || {},
                x = {},
                b = {},
                w = 0,
                T = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === w) {
                            if (!a)
                                for (a = {}; t = dt.exec(s);) a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === w ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return w || (e = b[n] = b[n] || e, x[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return w || (d.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > w)
                                for (t in e) y[t] = [y[t], e[t]];
                            else C.always(e[C.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || T;
                        return i && i.abort(t), k(0, t), this
                    }
                };
            if (v.promise(C).complete = m.add, C.success = C.done, C.error = C.fail, d.url = ((t || d.url || ut.href) + "").replace(ft, "").replace(gt, ut.protocol + "//"), d.type = n.method || n.type || d.method || d.type, d.dataTypes = p.trim(d.dataType || "*").toLowerCase().match(q) || [""], null == d.crossDomain) {
                l = r.createElement("a");
                try {
                    l.href = d.url, l.href = l.href, d.crossDomain = xt.protocol + "//" + xt.host != l.protocol + "//" + l.host
                } catch (e) {
                    d.crossDomain = !0
                }
            }
            if (d.data && d.processData && "string" != typeof d.data && (d.data = p.param(d.data, d.traditional)), wt(vt, d, n, C), 2 === w) return C;
            (c = p.event && d.global) && 0 == p.active++ && p.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !ht.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (ct.test(o) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (d.url = pt.test(o) ? o.replace(pt, "$1_=" + lt++) : o + (ct.test(o) ? "&" : "?") + "_=" + lt++)), d.ifModified && (p.lastModified[o] && C.setRequestHeader("If-Modified-Since", p.lastModified[o]), p.etag[o] && C.setRequestHeader("If-None-Match", p.etag[o])), (d.data && d.hasContent && !1 !== d.contentType || n.contentType) && C.setRequestHeader("Content-Type", d.contentType), C.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + yt + "; q=0.01" : "") : d.accepts["*"]);
            for (f in d.headers) C.setRequestHeader(f, d.headers[f]);
            if (d.beforeSend && (!1 === d.beforeSend.call(h, C, d) || 2 === w)) return C.abort();
            T = "abort";
            for (f in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) C[f](d[f]);
            if (i = wt(mt, d, n, C)) {
                if (C.readyState = 1, c && g.trigger("ajaxSend", [C, d]), 2 === w) return C;
                d.async && d.timeout > 0 && (u = e.setTimeout(function() {
                    C.abort("timeout")
                }, d.timeout));
                try {
                    w = 1, i.send(x, k)
                } catch (e) {
                    if (!(2 > w)) throw e;
                    k(-1, e)
                }
            } else k(-1, "No Transport");

            function k(t, n, r, a) {
                var l, f, x, b, T, k = n;
                2 !== w && (w = 2, u && e.clearTimeout(u), i = void 0, s = a || "", C.readyState = t > 0 ? 4 : 0, l = t >= 200 && 300 > t || 304 === t, r && (b = function(e, t, n) {
                    for (var r, i, o, s, a = e.contents, u = e.dataTypes;
                        "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in a)
                            if (a[i] && a[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    if (u[0] in n) o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            s || (s = i)
                        }
                        o = o || s
                    }
                    return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
                }(d, C, r)), b = function(e, t, n, r) {
                    var i, o, s, a, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
                    for (o = c.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                        if (!(s = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if (a = i.split(" "), a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                                    !0 === s ? s = l[i] : !0 !== l[i] && (o = a[0], c.unshift(a[1]));
                                    break
                                }
                        if (!0 !== s)
                            if (s && e.throws) t = s(t);
                            else try {
                                t = s(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: s ? e : "No conversion from " + u + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(d, b, C, l), l ? (d.ifModified && ((T = C.getResponseHeader("Last-Modified")) && (p.lastModified[o] = T), (T = C.getResponseHeader("etag")) && (p.etag[o] = T)), 204 === t || "HEAD" === d.type ? k = "nocontent" : 304 === t ? k = "notmodified" : (k = b.state, f = b.data, l = !(x = b.error))) : (x = k, !t && k || (k = "error", 0 > t && (t = 0))), C.status = t, C.statusText = (n || k) + "", l ? v.resolveWith(h, [f, k, C]) : v.rejectWith(h, [C, k, x]), C.statusCode(y), y = void 0, c && g.trigger(l ? "ajaxSuccess" : "ajaxError", [C, d, l ? f : x]), m.fireWith(h, [C, k]), c && (g.trigger("ajaxComplete", [C, d]), --p.active || p.event.trigger("ajaxStop")))
            }
            return C
        },
        getJSON: function(e, t, n) {
            return p.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return p.get(e, void 0, t, "script")
        }
    }), p.each(["get", "post"], function(e, t) {
        p[t] = function(e, n, r, i) {
            return p.isFunction(n) && (i = i || r, r = n, n = void 0), p.ajax(p.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, p.isPlainObject(e) && e))
        }
    }), p._evalUrl = function(e) {
        return p.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }, p.fn.extend({
        wrapAll: function(e) {
            var t;
            return p.isFunction(e) ? this.each(function(t) {
                p(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = p(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(e) {
            return p.isFunction(e) ? this.each(function(t) {
                p(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = p(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = p.isFunction(e);
            return this.each(function(n) {
                p(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                p.nodeName(this, "body") || p(this).replaceWith(this.childNodes)
            }).end()
        }
    }), p.expr.filters.hidden = function(e) {
        return !p.expr.filters.visible(e)
    }, p.expr.filters.visible = function(e) {
        return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
    };
    var Ct = /%20/g,
        kt = /\[\]$/,
        Et = /\r?\n/g,
        Nt = /^(?:submit|button|image|reset|file)$/i,
        St = /^(?:input|select|textarea|keygen)/i;

    function jt(e, t, n, r) {
        var i;
        if (p.isArray(t)) p.each(t, function(t, i) {
            n || kt.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== p.type(t)) r(e, t);
        else
            for (i in t) jt(e + "[" + i + "]", t[i], n, r)
    }
    p.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                t = p.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = p.ajaxSettings && p.ajaxSettings.traditional), p.isArray(e) || e.jquery && !p.isPlainObject(e)) p.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) jt(n, e[n], t, i);
        return r.join("&").replace(Ct, "+")
    }, p.fn.extend({
        serialize: function() {
            return p.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = p.prop(this, "elements");
                return e ? p.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !p(this).is(":disabled") && St.test(this.nodeName) && !Nt.test(e) && (this.checked || !U.test(e))
            }).map(function(e, t) {
                var n = p(this).val();
                return null == n ? null : p.isArray(n) ? p.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Et, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Et, "\r\n")
                }
            }).get()
        }
    }), p.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var Dt = {
            0: 200,
            1223: 204
        },
        At = p.ajaxSettings.xhr();
    f.cors = !!At && "withCredentials" in At, f.ajax = At = !!At, p.ajaxTransport(function(t) {
        var n, r;
        return f.cors || At && !t.crossDomain ? {
            send: function(i, o) {
                var s, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (s in t.xhrFields) a[s] = t.xhrFields[s];
                t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (s in i) a.setRequestHeader(s, i[s]);
                n = function(e) {
                    return function() {
                        n && (n = r = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Dt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), r = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = r : a.onreadystatechange = function() {
                    4 === a.readyState && e.setTimeout(function() {
                        n && r()
                    })
                }, n = n("abort");
                try {
                    a.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            },
            abort: function() {
                n && n()
            }
        } : void 0
    }), p.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return p.globalEval(e), e
            }
        }
    }), p.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), p.ajaxTransport("script", function(e) {
        var t, n;
        if (e.crossDomain) return {
            send: function(i, o) {
                t = p("<script>").prop({
                    charset: e.scriptCharset,
                    src: e.url
                }).on("load error", n = function(e) {
                    t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                }), r.head.appendChild(t[0])
            },
            abort: function() {
                n && n()
            }
        }
    });
    var qt = [],
        Lt = /(=)\?(?=&|$)|\?\?/;
    p.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = qt.pop() || p.expando + "_" + lt++;
            return this[e] = !0, e
        }
    }), p.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, s, a = !1 !== t.jsonp && (Lt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Lt.test(t.data) && "data");
        return a || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = p.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Lt, "$1" + i) : !1 !== t.jsonp && (t.url += (ct.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return s || p.error(i + " was not called"), s[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            s = arguments
        }, r.always(function() {
            void 0 === o ? p(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, qt.push(i)), s && p.isFunction(o) && o(s[0]), s = o = void 0
        }), "script") : void 0
    }), p.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || r;
        var i = T.exec(e),
            o = !n && [];
        return i ? [t.createElement(i[1])] : (i = te([e], t, o), o && o.length && p(o).remove(), p.merge([], i.childNodes))
    };
    var Ht = p.fn.load;

    function Ot(e) {
        return p.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    p.fn.load = function(e, t, n) {
        if ("string" != typeof e && Ht) return Ht.apply(this, arguments);
        var r, i, o, s = this,
            a = e.indexOf(" ");
        return a > -1 && (r = p.trim(e.slice(a)), e = e.slice(0, a)), p.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), s.length > 0 && p.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, s.html(r ? p("<div>").append(p.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, p.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        p.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), p.expr.filters.animated = function(e) {
        return p.grep(p.timers, function(t) {
            return e === t.elem
        }).length
    }, p.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, s, a, u, l = p.css(e, "position"),
                c = p(e),
                f = {};
            "static" === l && (e.style.position = "relative"), a = c.offset(), o = p.css(e, "top"), u = p.css(e, "left"), ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1 ? (s = (r = c.position()).top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), p.isFunction(t) && (t = t.call(e, n, p.extend({}, a))), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, p.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                p.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0],
                i = {
                    top: 0,
                    left: 0
                },
                o = r && r.ownerDocument;
            return o ? (t = o.documentElement, p.contains(t, r) ? (i = r.getBoundingClientRect(), n = Ot(o), {
                top: i.top + n.pageYOffset - t.clientTop,
                left: i.left + n.pageXOffset - t.clientLeft
            }) : i) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === p.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), p.nodeName(e[0], "html") || (r = e.offset()), r.top += p.css(e[0], "borderTopWidth", !0), r.left += p.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - r.top - p.css(n, "marginTop", !0),
                    left: t.left - r.left - p.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === p.css(e, "position");) e = e.offsetParent;
                return e || je
            })
        }
    }), p.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        p.fn[e] = function(r) {
            return H(this, function(e, r, i) {
                var o = Ot(e);
                return void 0 === i ? o ? o[t] : e[r] : void(o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i)
            }, e, r, arguments.length)
        }
    }), p.each(["top", "left"], function(e, t) {
        p.cssHooks[t] = Ae(f.pixelPosition, function(e, n) {
            return n ? (n = De(e, t), Ee.test(n) ? p(e).position()[t] + "px" : n) : void 0
        })
    }), p.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        p.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            p.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r),
                    s = n || (!0 === r || !0 === i ? "margin" : "border");
                return H(this, function(t, n, r) {
                    var i;
                    return p.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? p.css(t, n, s) : p.style(t, n, r, s)
                }, t, o ? r : void 0, o, null)
            }
        })
    }), p.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        size: function() {
            return this.length
        }
    }), p.fn.andSelf = p.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return p
    });
    var Ft = e.jQuery,
        Pt = e.$;
    return p.noConflict = function(t) {
        return e.$ === p && (e.$ = Pt), t && e.jQuery === p && (e.jQuery = Ft), p
    }, t || (e.jQuery = e.$ = p), p
});
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
! function(t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery),
function(t) {
    "use strict";
    t.fn.emulateTransitionEnd = function(e) {
        var i = !1,
            o = this;
        t(this).one("bsTransitionEnd", function() {
            i = !0
        });
        return setTimeout(function() {
            i || t(o).trigger(t.support.transition.end)
        }, e), this
    }, t(function() {
        t.support.transition = function() {
            var t = document.createElement("bootstrap"),
                e = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var i in e)
                if (void 0 !== t.style[i]) return {
                    end: e[i]
                };
            return !1
        }(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery),
function(t) {
    "use strict";
    var e = '[data-dismiss="alert"]',
        i = function(i) {
            t(i).on("click", e, this.close)
        };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.close = function(e) {
        function o() {
            a.detach().trigger("closed.bs.alert").remove()
        }
        var n = t(this),
            s = n.attr("data-target");
        s || (s = (s = n.attr("href")) && s.replace(/.*(?=#[^\s]*$)/, ""));
        var a = t("#" === s ? [] : s);
        e && e.preventDefault(), a.length || (a = n.closest(".alert")), a.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (a.removeClass("in"), t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", o).emulateTransitionEnd(i.TRANSITION_DURATION) : o())
    };
    var o = t.fn.alert;
    t.fn.alert = function(e) {
        return this.each(function() {
            var o = t(this),
                n = o.data("bs.alert");
            n || o.data("bs.alert", n = new i(this)), "string" == typeof e && n[e].call(o)
        })
    }, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function() {
        return t.fn.alert = o, this
    }, t(document).on("click.bs.alert.data-api", e, i.prototype.close)
}(jQuery),
function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var o = t(this),
                n = o.data("bs.button"),
                s = "object" == typeof e && e;
            n || o.data("bs.button", n = new i(this, s)), "toggle" == e ? n.toggle() : e && n.setState(e)
        })
    }
    var i = function(e, o) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, o), this.isLoading = !1
    };
    i.VERSION = "3.3.7", i.DEFAULTS = {
        loadingText: "loading..."
    }, i.prototype.setState = function(e) {
        var i = "disabled",
            o = this.$element,
            n = o.is("input") ? "val" : "html",
            s = o.data();
        e += "Text", null == s.resetText && o.data("resetText", o[n]()), setTimeout(t.proxy(function() {
            o[n](null == s[e] ? this.options[e] : s[e]), "loadingText" == e ? (this.isLoading = !0, o.addClass(i).attr(i, i).prop(i, !0)) : this.isLoading && (this.isLoading = !1, o.removeClass(i).removeAttr(i).prop(i, !1))
        }, this), 0)
    }, i.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var i = this.$element.find("input");
            "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var o = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function() {
        return t.fn.button = o, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(i) {
        var o = t(i.target).closest(".btn");
        e.call(o, "toggle"), t(i.target).is('input[type="radio"], input[type="checkbox"]') || (i.preventDefault(), o.is("input,button") ? o.trigger("focus") : o.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery),
function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var o = t(this),
                n = o.data("bs.carousel"),
                s = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e),
                a = "string" == typeof e ? e : s.slide;
            n || o.data("bs.carousel", n = new i(this, s)), "number" == typeof e ? n.to(e) : a ? n[a]() : s.interval && n.pause().cycle()
        })
    }
    var i = function(e, i) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, i.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, i.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, i.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, i.prototype.getItemForDirection = function(t, e) {
        var i = this.getItemIndex(e);
        if (("prev" == t && 0 === i || "next" == t && i == this.$items.length - 1) && !this.options.wrap) return e;
        var o = (i + ("prev" == t ? -1 : 1)) % this.$items.length;
        return this.$items.eq(o)
    }, i.prototype.to = function(t) {
        var e = this,
            i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
            e.to(t)
        }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
    }, i.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, i.prototype.next = function() {
        if (!this.sliding) return this.slide("next")
    }, i.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev")
    }, i.prototype.slide = function(e, o) {
        var n = this.$element.find(".item.active"),
            s = o || this.getItemForDirection(e, n),
            a = this.interval,
            r = "next" == e ? "left" : "right",
            l = this;
        if (s.hasClass("active")) return this.sliding = !1;
        var h = s[0],
            d = t.Event("slide.bs.carousel", {
                relatedTarget: h,
                direction: r
            });
        if (this.$element.trigger(d), !d.isDefaultPrevented()) {
            if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var p = t(this.$indicators.children()[this.getItemIndex(s)]);
                p && p.addClass("active")
            }
            var c = t.Event("slid.bs.carousel", {
                relatedTarget: h,
                direction: r
            });
            return t.support.transition && this.$element.hasClass("slide") ? (s.addClass(e), s[0].offsetWidth, n.addClass(r), s.addClass(r), n.one("bsTransitionEnd", function() {
                s.removeClass([e, r].join(" ")).addClass("active"), n.removeClass(["active", r].join(" ")), l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(c)
                }, 0)
            }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (n.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger(c)), a && this.cycle(), this
        }
    };
    var o = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = o, this
    };
    var n = function(i) {
        var o, n = t(this),
            s = t(n.attr("data-target") || (o = n.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, ""));
        if (s.hasClass("carousel")) {
            var a = t.extend({}, s.data(), n.data()),
                r = n.attr("data-slide-to");
            r && (a.interval = !1), e.call(s, a), r && s.data("bs.carousel").to(r), i.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", n).on("click.bs.carousel.data-api", "[data-slide-to]", n), t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var i = t(this);
            e.call(i, i.data())
        })
    })
}(jQuery),
function(t) {
    "use strict";

    function e(e) {
        var i, o = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return t(o)
    }

    function i(e) {
        return this.each(function() {
            var i = t(this),
                n = i.data("bs.collapse"),
                s = t.extend({}, o.DEFAULTS, i.data(), "object" == typeof e && e);
            !n && s.toggle && /show|hide/.test(e) && (s.toggle = !1), n || i.data("bs.collapse", n = new o(this, s)), "string" == typeof e && n[e]()
        })
    }
    var o = function(e, i) {
        this.$element = t(e), this.options = t.extend({}, o.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    o.VERSION = "3.3.7", o.TRANSITION_DURATION = 350, o.DEFAULTS = {
        toggle: !0
    }, o.prototype.dimension = function() {
        return this.$element.hasClass("width") ? "width" : "height"
    }, o.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, n = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(n && n.length && (e = n.data("bs.collapse"), e && e.transitioning))) {
                var s = t.Event("show.bs.collapse");
                if (this.$element.trigger(s), !s.isDefaultPrevented()) {
                    n && n.length && (i.call(n, "hide"), e || n.data("bs.collapse", null));
                    var a = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var r = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return r.call(this);
                    var l = t.camelCase(["scroll", a].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(o.TRANSITION_DURATION)[a](this.$element[0][l])
                }
            }
        }
    }, o.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var n = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(n, this)).emulateTransitionEnd(o.TRANSITION_DURATION) : n.call(this)
            }
        }
    }, o.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, o.prototype.getParent = function() {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(i, o) {
            var n = t(o);
            this.addAriaAndCollapsedClass(e(n), n)
        }, this)).end()
    }, o.prototype.addAriaAndCollapsedClass = function(t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    var n = t.fn.collapse;
    t.fn.collapse = i, t.fn.collapse.Constructor = o, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = n, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(o) {
        var n = t(this);
        n.attr("data-target") || o.preventDefault();
        var s = e(n),
            a = s.data("bs.collapse") ? "toggle" : n.data();
        i.call(s, a)
    })
}(jQuery),
function(t) {
    "use strict";

    function e(e) {
        var i = e.attr("data-target");
        i || (i = (i = e.attr("href")) && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var o = i && t(i);
        return o && o.length ? o : e.parent()
    }

    function i(i) {
        i && 3 === i.which || (t(o).remove(), t(n).each(function() {
            var o = t(this),
                n = e(o),
                s = {
                    relatedTarget: this
                };
            n.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(n[0], i.target) || (n.trigger(i = t.Event("hide.bs.dropdown", s)), i.isDefaultPrevented() || (o.attr("aria-expanded", "false"), n.removeClass("open").trigger(t.Event("hidden.bs.dropdown", s)))))
        }))
    }
    var o = ".dropdown-backdrop",
        n = '[data-toggle="dropdown"]',
        s = function(e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    s.VERSION = "3.3.7", s.prototype.toggle = function(o) {
        var n = t(this);
        if (!n.is(".disabled, :disabled")) {
            var s = e(n),
                a = s.hasClass("open");
            if (i(), !a) {
                "ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
                var r = {
                    relatedTarget: this
                };
                if (s.trigger(o = t.Event("show.bs.dropdown", r)), o.isDefaultPrevented()) return;
                n.trigger("focus").attr("aria-expanded", "true"), s.toggleClass("open").trigger(t.Event("shown.bs.dropdown", r))
            }
            return !1
        }
    }, s.prototype.keydown = function(i) {
        if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
            var o = t(this);
            if (i.preventDefault(), i.stopPropagation(), !o.is(".disabled, :disabled")) {
                var s = e(o),
                    a = s.hasClass("open");
                if (!a && 27 != i.which || a && 27 == i.which) return 27 == i.which && s.find(n).trigger("focus"), o.trigger("click");
                var r = s.find(".dropdown-menu li:not(.disabled):visible a");
                if (r.length) {
                    var l = r.index(i.target);
                    38 == i.which && l > 0 && l--, 40 == i.which && l < r.length - 1 && l++, ~l || (l = 0), r.eq(l).trigger("focus")
                }
            }
        }
    };
    var a = t.fn.dropdown;
    t.fn.dropdown = function(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.dropdown");
            o || i.data("bs.dropdown", o = new s(this)), "string" == typeof e && o[e].call(i)
        })
    }, t.fn.dropdown.Constructor = s, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = a, this
    }, t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", n, s.prototype.toggle).on("keydown.bs.dropdown.data-api", n, s.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", s.prototype.keydown)
}(jQuery),
function(t) {
    "use strict";

    function e(e, o) {
        return this.each(function() {
            var n = t(this),
                s = n.data("bs.modal"),
                a = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
            s || n.data("bs.modal", s = new i(this, a)), "string" == typeof e ? s[e](o) : a.show && s.show(o)
        })
    }
    var i = function(e, i) {
        this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, i.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, i.prototype.show = function(e) {
        var o = this,
            n = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(n), this.isShown || n.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            o.$element.one("mouseup.dismiss.bs.modal", function(e) {
                t(e.target).is(o.$element) && (o.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var n = t.support.transition && o.$element.hasClass("fade");
            o.$element.parent().length || o.$element.appendTo(o.$body), o.$element.show().scrollTop(0), o.adjustDialog(), n && o.$element[0].offsetWidth, o.$element.addClass("in"), o.enforceFocus();
            var s = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            n ? o.$dialog.one("bsTransitionEnd", function() {
                o.$element.trigger("focus").trigger(s)
            }).emulateTransitionEnd(i.TRANSITION_DURATION) : o.$element.trigger("focus").trigger(s)
        }))
    }, i.prototype.hide = function(e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
    }, i.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, i.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, i.prototype.resize = function() {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, i.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, i.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, i.prototype.backdrop = function(e) {
        var o = this,
            n = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var s = t.support.transition && n;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + n).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            s ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var a = function() {
                o.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : a()
        } else e && e()
    }, i.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, i.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, i.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, i.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, i.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, i.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, i.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var o = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function() {
        return t.fn.modal = o, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) {
        var o = t(this),
            n = o.attr("href"),
            s = t(o.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, "")),
            a = s.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(n) && n
            }, s.data(), o.data());
        o.is("a") && i.preventDefault(), s.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || s.one("hidden.bs.modal", function() {
                o.is(":visible") && o.trigger("focus")
            })
        }), e.call(s, a, this)
    })
}(jQuery),
function(t) {
    "use strict";
    var e = function(t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    e.VERSION = "3.3.7", e.TRANSITION_DURATION = 150, e.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, e.prototype.init = function(e, i, o) {
        if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(o), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var n = this.options.trigger.split(" "), s = n.length; s--;) {
            var a = n[s];
            if ("click" == a) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != a) {
                var r = "hover" == a ? "mouseenter" : "focusin",
                    l = "hover" == a ? "mouseleave" : "focusout";
                this.$element.on(r + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, e.prototype.getDefaults = function() {
        return e.DEFAULTS
    }, e.prototype.getOptions = function(e) {
        return (e = t.extend({}, this.getDefaults(), this.$element.data(), e)).delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, e.prototype.getDelegateOptions = function() {
        var e = {},
            i = this.getDefaults();
        return this._options && t.each(this._options, function(t, o) {
            i[t] != o && (e[t] = o)
        }), e
    }, e.prototype.enter = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
            "in" == i.hoverState && i.show()
        }, i.options.delay.show)) : i.show())
    }, e.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, e.prototype.leave = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        if (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), !i.isInStateTrue()) return clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() {
            "out" == i.hoverState && i.hide()
        }, i.options.delay.hide)) : i.hide()
    }, e.prototype.show = function() {
        var i = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(i);
            var o = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (i.isDefaultPrevented() || !o) return;
            var n = this,
                s = this.tip(),
                a = this.getUID(this.type);
            this.setContent(), s.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && s.addClass("fade");
            var r = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                h = l.test(r);
            h && (r = r.replace(l, "") || "top"), s.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(r).data("bs." + this.type, this), this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var d = this.getPosition(),
                p = s[0].offsetWidth,
                c = s[0].offsetHeight;
            if (h) {
                var f = r,
                    u = this.getPosition(this.$viewport);
                r = "bottom" == r && d.bottom + c > u.bottom ? "top" : "top" == r && d.top - c < u.top ? "bottom" : "right" == r && d.right + p > u.width ? "left" : "left" == r && d.left - p < u.left ? "right" : r, s.removeClass(f).addClass(r)
            }
            var g = this.getCalculatedOffset(r, d, p, c);
            this.applyPlacement(g, r);
            var m = function() {
                var t = n.hoverState;
                n.$element.trigger("shown.bs." + n.type), n.hoverState = null, "out" == t && n.leave(n)
            };
            t.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", m).emulateTransitionEnd(e.TRANSITION_DURATION) : m()
        }
    }, e.prototype.applyPlacement = function(e, i) {
        var o = this.tip(),
            n = o[0].offsetWidth,
            s = o[0].offsetHeight,
            a = parseInt(o.css("margin-top"), 10),
            r = parseInt(o.css("margin-left"), 10);
        isNaN(a) && (a = 0), isNaN(r) && (r = 0), e.top += a, e.left += r, t.offset.setOffset(o[0], t.extend({
            using: function(t) {
                o.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), o.addClass("in");
        var l = o[0].offsetWidth,
            h = o[0].offsetHeight;
        "top" == i && h != s && (e.top = e.top + s - h);
        var d = this.getViewportAdjustedDelta(i, e, l, h);
        d.left ? e.left += d.left : e.top += d.top;
        var p = /top|bottom/.test(i),
            c = p ? 2 * d.left - n + l : 2 * d.top - s + h,
            f = p ? "offsetWidth" : "offsetHeight";
        o.offset(e), this.replaceArrow(c, o[0][f], p)
    }, e.prototype.replaceArrow = function(t, e, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
    }, e.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, e.prototype.hide = function(i) {
        function o() {
            "in" != n.hoverState && s.detach(), n.$element && n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type), i && i()
        }
        var n = this,
            s = t(this.$tip),
            a = t.Event("hide.bs." + this.type);
        if (this.$element.trigger(a), !a.isDefaultPrevented()) return s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", o).emulateTransitionEnd(e.TRANSITION_DURATION) : o(), this.hoverState = null, this
    }, e.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, e.prototype.hasContent = function() {
        return this.getTitle()
    }, e.prototype.getPosition = function(e) {
        var i = (e = e || this.$element)[0],
            o = "BODY" == i.tagName,
            n = i.getBoundingClientRect();
        null == n.width && (n = t.extend({}, n, {
            width: n.right - n.left,
            height: n.bottom - n.top
        }));
        var s = window.SVGElement && i instanceof window.SVGElement,
            a = o ? {
                top: 0,
                left: 0
            } : s ? null : e.offset(),
            r = {
                scroll: o ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            l = o ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, n, r, l, a)
    }, e.prototype.getCalculatedOffset = function(t, e, i, o) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - o,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - o / 2,
            left: e.left - i
        } : {
            top: e.top + e.height / 2 - o / 2,
            left: e.left + e.width
        }
    }, e.prototype.getViewportAdjustedDelta = function(t, e, i, o) {
        var n = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return n;
        var s = this.options.viewport && this.options.viewport.padding || 0,
            a = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var r = e.top - s - a.scroll,
                l = e.top + s - a.scroll + o;
            r < a.top ? n.top = a.top - r : l > a.top + a.height && (n.top = a.top + a.height - l)
        } else {
            var h = e.left - s,
                d = e.left + s + i;
            h < a.left ? n.left = a.left - h : d > a.right && (n.left = a.left + a.width - d)
        }
        return n
    }, e.prototype.getTitle = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
    }, e.prototype.getUID = function(t) {
        do {
            t += ~~(1e6 * Math.random())
        } while (document.getElementById(t));
        return t
    }, e.prototype.tip = function() {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, e.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, e.prototype.enable = function() {
        this.enabled = !0
    }, e.prototype.disable = function() {
        this.enabled = !1
    }, e.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, e.prototype.toggle = function(e) {
        var i = this;
        e && ((i = t(e.currentTarget).data("bs." + this.type)) || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }, e.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
        })
    };
    var i = t.fn.tooltip;
    t.fn.tooltip = function(i) {
        return this.each(function() {
            var o = t(this),
                n = o.data("bs.tooltip"),
                s = "object" == typeof i && i;
            !n && /destroy|hide/.test(i) || (n || o.data("bs.tooltip", n = new e(this, s)), "string" == typeof i && n[i]())
        })
    }, t.fn.tooltip.Constructor = e, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = i, this
    }
}(jQuery),
function(t) {
    "use strict";
    var e = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    e.VERSION = "3.3.7", e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), e.prototype.constructor = e, e.prototype.getDefaults = function() {
        return e.DEFAULTS
    }, e.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, e.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, e.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, e.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var i = t.fn.popover;
    t.fn.popover = function(i) {
        return this.each(function() {
            var o = t(this),
                n = o.data("bs.popover"),
                s = "object" == typeof i && i;
            !n && /destroy|hide/.test(i) || (n || o.data("bs.popover", n = new e(this, s)), "string" == typeof i && n[i]())
        })
    }, t.fn.popover.Constructor = e, t.fn.popover.noConflict = function() {
        return t.fn.popover = i, this
    }
}(jQuery),
function(t) {
    "use strict";

    function e(i, o) {
        this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, o), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function i(i) {
        return this.each(function() {
            var o = t(this),
                n = o.data("bs.scrollspy"),
                s = "object" == typeof i && i;
            n || o.data("bs.scrollspy", n = new e(this, s)), "string" == typeof i && n[i]()
        })
    }
    e.VERSION = "3.3.7", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function() {
        var e = this,
            i = "offset",
            o = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", o = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var e = t(this),
                n = e.data("target") || e.attr("href"),
                s = /^#./.test(n) && t(n);
            return s && s.length && s.is(":visible") && [
                [s[i]().top + o, n]
            ] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            i = this.getScrollHeight(),
            o = this.options.offset + i - this.$scrollElement.height(),
            n = this.offsets,
            s = this.targets,
            a = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), e >= o) return a != (t = s[s.length - 1]) && this.activate(t);
        if (a && e < n[0]) return this.activeTarget = null, this.clear();
        for (t = n.length; t--;) a != s[t] && e >= n[t] && (void 0 === n[t + 1] || e < n[t + 1]) && this.activate(s[t])
    }, e.prototype.activate = function(e) {
        this.activeTarget = e, this.clear();
        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            o = t(i).parents("li").addClass("active");
        o.parent(".dropdown-menu").length && (o = o.closest("li.dropdown").addClass("active")), o.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function() {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var o = t.fn.scrollspy;
    t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = o, this
    }, t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            i.call(e, e.data())
        })
    })
}(jQuery),
function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var o = t(this),
                n = o.data("bs.tab");
            n || o.data("bs.tab", n = new i(this)), "string" == typeof e && n[e]()
        })
    }
    var i = function(e) {
        this.element = t(e)
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.show = function() {
        var e = this.element,
            i = e.closest("ul:not(.dropdown-menu)"),
            o = e.data("target");
        if (o || (o = (o = e.attr("href")) && o.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var n = i.find(".active:last a"),
                s = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                a = t.Event("show.bs.tab", {
                    relatedTarget: n[0]
                });
            if (n.trigger(s), e.trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                var r = t(o);
                this.activate(e.closest("li"), i), this.activate(r, r.parent(), function() {
                    n.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: n[0]
                    })
                })
            }
        }
    }, i.prototype.activate = function(e, o, n) {
        function s() {
            a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), n && n()
        }
        var a = o.find("> .active"),
            r = n && t.support.transition && (a.length && a.hasClass("fade") || !!o.find("> .fade").length);
        a.length && r ? a.one("bsTransitionEnd", s).emulateTransitionEnd(i.TRANSITION_DURATION) : s(), a.removeClass("in")
    };
    var o = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function() {
        return t.fn.tab = o, this
    };
    var n = function(i) {
        i.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', n).on("click.bs.tab.data-api", '[data-toggle="pill"]', n)
}(jQuery),
function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var o = t(this),
                n = o.data("bs.affix"),
                s = "object" == typeof e && e;
            n || o.data("bs.affix", n = new i(this, s)), "string" == typeof e && n[e]()
        })
    }
    var i = function(e, o) {
        this.options = t.extend({}, i.DEFAULTS, o), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    i.VERSION = "3.3.7", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
        offset: 0,
        target: window
    }, i.prototype.getState = function(t, e, i, o) {
        var n = this.$target.scrollTop(),
            s = this.$element.offset(),
            a = this.$target.height();
        if (null != i && "top" == this.affixed) return n <= i && "top";
        if ("bottom" == this.affixed) return null != i ? !(n + this.unpin <= s.top) && "bottom" : !(n + a <= t - o) && "bottom";
        var r = null == this.affixed,
            l = r ? n : s.top;
        return null != i && n <= i ? "top" : null != o && l + (r ? a : e) >= t - o && "bottom"
    }, i.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(i.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, i.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, i.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(),
                o = this.options.offset,
                n = o.top,
                s = o.bottom,
                a = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof o && (s = n = o), "function" == typeof n && (n = o.top(this.$element)), "function" == typeof s && (s = o.bottom(this.$element));
            var r = this.getState(a, e, n, s);
            if (this.affixed != r) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (r ? "-" + r : ""),
                    h = t.Event(l + ".bs.affix");
                if (this.$element.trigger(h), h.isDefaultPrevented()) return;
                this.affixed = r, this.unpin = "bottom" == r ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == r && this.$element.offset({
                top: a - e - s
            })
        }
    };
    var o = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function() {
        return t.fn.affix = o, this
    }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var i = t(this),
                o = i.data();
            o.offset = o.offset || {}, null != o.offsetBottom && (o.offset.bottom = o.offsetBottom), null != o.offsetTop && (o.offset.top = o.offsetTop), e.call(i, o)
        })
    })
}(jQuery);
! function(e) {
    var r = [],
        t = !1,
        i = !1,
        a = {
            interval: 250,
            force_process: !1
        },
        n = e(window),
        o = [];

    function f() {
        i = !1;
        for (var t = 0, a = r.length; t < a; t++) {
            var n = (p = r[t], e(p).filter(function() {
                return e(this).is(":appeared")
            }));
            if (n.trigger("appear", [n]), o[t]) {
                var f = o[t].not(n);
                f.trigger("disappear", [f])
            }
            o[t] = n
        }
        var p
    }
    e.expr[":"].appeared = function(r) {
        var t = e(r);
        if (!t.is(":visible")) return !1;
        var i = n.scrollLeft(),
            a = n.scrollTop(),
            o = t.offset(),
            f = o.left,
            p = o.top;
        return p + t.height() >= a && p - (t.data("appear-top-offset") || 0) <= a + n.height() && f + t.width() >= i && f - (t.data("appear-left-offset") || 0) <= i + n.width()
    }, e.fn.extend({
        appear: function(n) {
            var p, s = e.extend({}, a, n || {}),
                u = this.selector || this;
            if (!t) {
                var c = function() {
                    i || (i = !0, setTimeout(f, s.interval))
                };
                e(window).scroll(c).resize(c), t = !0
            }
            return s.force_process && setTimeout(f, s.interval), p = u, r.push(p), o.push(), e(u)
        }
    }), e.extend({
        force_appear: function() {
            return !!t && (f(), !0)
        }
    })
}("undefined" != typeof module ? require("jquery") : jQuery);
! function(e) {
    e.fn.hoverIntent = function(t, n, o) {
        var r, v, i, u, s = {
            interval: 100,
            sensitivity: 7,
            timeout: 0
        };
        s = "object" == typeof t ? e.extend(s, t) : e.isFunction(n) ? e.extend(s, {
            over: t,
            out: n,
            selector: o
        }) : e.extend(s, {
            over: t,
            out: t,
            selector: n
        });
        var h = function(e) {
                r = e.pageX, v = e.pageY
            },
            a = function(t, n) {
                if (n.hoverIntent_t = clearTimeout(n.hoverIntent_t), Math.abs(i - r) + Math.abs(u - v) < s.sensitivity) return e(n).off("mousemove.hoverIntent", h), n.hoverIntent_s = 1, s.over.apply(n, [t]);
                i = r, u = v, n.hoverIntent_t = setTimeout(function() {
                    a(t, n)
                }, s.interval)
            },
            I = function(t) {
                var n = jQuery.extend({}, t),
                    o = this;
                o.hoverIntent_t && (o.hoverIntent_t = clearTimeout(o.hoverIntent_t)), "mouseenter" == t.type ? (i = n.pageX, u = n.pageY, e(o).on("mousemove.hoverIntent", h), 1 != o.hoverIntent_s && (o.hoverIntent_t = setTimeout(function() {
                    a(n, o)
                }, s.interval))) : (e(o).off("mousemove.hoverIntent", h), 1 == o.hoverIntent_s && (o.hoverIntent_t = setTimeout(function() {
                    var e, t;
                    e = n, (t = o).hoverIntent_t = clearTimeout(t.hoverIntent_t), t.hoverIntent_s = 0, s.out.apply(t, [e])
                }, s.timeout)))
            };
        return this.on({
            "mouseenter.hoverIntent": I,
            "mouseleave.hoverIntent": I
        }, s.selector)
    }
}(jQuery);
! function(e, s) {
    "use strict";
    var t, o, n, i, r, a, h, l, p, u, f, c, d, v, m, y, C, w, g = (n = "sf-breadcrumb", i = "sf-js-enabled", r = "sf-with-ul", a = "sf-arrows", (o = /^(?![\w\W]*Windows Phone)[\w\W]*(iPhone|iPad|iPod)/i.test(navigator.userAgent)) && e("html").css("cursor", "pointer").on("click", e.noop), h = o, l = "behavior" in (t = document.documentElement.style) && "fill" in t && /iemobile/i.test(navigator.userAgent), p = !!s.PointerEvent, u = function(e, s, t) {
        var o = i;
        s.cssArrows && (o += " " + a), e[t ? "addClass" : "removeClass"](o)
    }, f = function(e, s) {
        var t = s ? "addClass" : "removeClass";
        e.children("a")[t](r)
    }, c = function(e) {
        var s = e.css("ms-touch-action"),
            t = e.css("touch-action");
        t = "pan-y" === (t = t || s) ? "auto" : "pan-y", e.css({
            "ms-touch-action": t,
            "touch-action": t
        })
    }, d = function(e) {
        return e.closest("." + i)
    }, v = function(e) {
        return d(e).data("sfOptions")
    }, m = function() {
        var s = e(this),
            t = v(s);
        clearTimeout(t.sfTimer), s.siblings().superfish("hide").end().superfish("show")
    }, y = function(s) {
        s.retainPath = e.inArray(this[0], s.$path) > -1, this.superfish("hide"), this.parents("." + s.hoverClass).length || (s.onIdle.call(d(this)), s.$path.length && e.proxy(m, s.$path)())
    }, C = function() {
        var s = e(this),
            t = v(s);
        h ? e.proxy(y, s, t)() : (clearTimeout(t.sfTimer), t.sfTimer = setTimeout(e.proxy(y, s, t), t.delay))
    }, w = function(s) {
        var t = e(this),
            o = v(t),
            n = t.siblings(s.data.popUpSelector);
        if (!1 === o.onHandleTouch.call(n)) return this;
        n.length > 0 && n.is(":hidden") && (t.one("click.superfish", !1), "MSPointerDown" === s.type || "pointerdown" === s.type ? t.trigger("focus") : e.proxy(m, t.parent("li"))())
    }, {
        hide: function(s) {
            if (this.length) {
                var t = v(this);
                if (!t) return this;
                var o = !0 === t.retainPath ? t.$path : "",
                    n = this.find("li." + t.hoverClass).add(this).not(o).removeClass(t.hoverClass).children(t.popUpSelector),
                    i = t.speedOut;
                if (s && (n.show(), i = 0), t.retainPath = !1, !1 === t.onBeforeHide.call(n)) return this;
                n.stop(!0, !0).animate(t.animationOut, i, function() {
                    var s = e(this);
                    t.onHide.call(s)
                })
            }
            return this
        },
        show: function() {
            var e = v(this);
            if (!e) return this;
            var s = this.addClass(e.hoverClass).children(e.popUpSelector);
            return !1 === e.onBeforeShow.call(s) ? this : (s.stop(!0, !0).animate(e.animation, e.speed, function() {
                e.onShow.call(s)
            }), this)
        },
        destroy: function() {
            return this.each(function() {
                var s, t = e(this),
                    o = t.data("sfOptions");
                if (!o) return !1;
                s = t.find(o.popUpSelector).parent("li"), clearTimeout(o.sfTimer), u(t, o), f(s), c(t), t.off(".superfish").off(".hoverIntent"), s.children(o.popUpSelector).attr("style", function(e, s) {
                    return s.replace(/display[^;]+;?/g, "")
                }), o.$path.removeClass(o.hoverClass + " " + n).addClass(o.pathClass), t.find("." + o.hoverClass).removeClass(o.hoverClass), o.onDestroy.call(t), t.removeData("sfOptions")
            })
        },
        init: function(s) {
            return this.each(function() {
                var t = e(this);
                if (t.data("sfOptions")) return !1;
                var o, i = e.extend({}, e.fn.superfish.defaults, s),
                    r = t.find(i.popUpSelector).parent("li");
                i.$path = (o = i, t.find("li." + o.pathClass).slice(0, o.pathLevels).addClass(o.hoverClass + " " + n).filter(function() {
                        return e(this).children(o.popUpSelector).hide().show().length
                    }).removeClass(o.pathClass)), t.data("sfOptions", i), u(t, i, !0), f(r, !0), c(t),
                    function(s, t) {
                        var o = "li:has(" + t.popUpSelector + ")";
                        e.fn.hoverIntent && !t.disableHI ? s.hoverIntent(m, C, o) : s.on("mouseenter.superfish", o, m).on("mouseleave.superfish", o, C);
                        var n = "MSPointerDown.superfish";
                        p && (n = "pointerdown.superfish"), h || (n += " touchend.superfish"), l && (n += " mousedown.superfish"), s.on("focusin.superfish", "li", m).on("focusout.superfish", "li", C).on(n, "a", t, w)
                    }(t, i), r.not("." + n).superfish("hide", !0), i.onInit.call(this)
            })
        }
    });
    e.fn.superfish = function(s, t) {
        return g[s] ? g[s].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof s && s ? e.error("Method " + s + " does not exist on jQuery.fn.superfish") : g.init.apply(this, arguments)
    }, e.fn.superfish.defaults = {
        popUpSelector: "ul,.sf-mega",
        hoverClass: "sfHover",
        pathClass: "overrideThisToUse",
        pathLevels: 1,
        delay: 800,
        animation: {
            opacity: "show"
        },
        animationOut: {
            opacity: "hide"
        },
        speed: "normal",
        speedOut: "fast",
        cssArrows: !0,
        disableHI: !1,
        onInit: e.noop,
        onBeforeShow: e.noop,
        onShow: e.noop,
        onBeforeHide: e.noop,
        onHide: e.noop,
        onIdle: e.noop,
        onDestroy: e.noop,
        onHandleTouch: e.noop
    }
}(jQuery, window);
jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(n, e, t, u, a) {
        return jQuery.easing[jQuery.easing.def](n, e, t, u, a)
    },
    easeInQuad: function(n, e, t, u, a) {
        return u * (e /= a) * e + t
    },
    easeOutQuad: function(n, e, t, u, a) {
        return -u * (e /= a) * (e - 2) + t
    },
    easeInOutQuad: function(n, e, t, u, a) {
        return (e /= a / 2) < 1 ? u / 2 * e * e + t : -u / 2 * (--e * (e - 2) - 1) + t
    },
    easeInCubic: function(n, e, t, u, a) {
        return u * (e /= a) * e * e + t
    },
    easeOutCubic: function(n, e, t, u, a) {
        return u * ((e = e / a - 1) * e * e + 1) + t
    },
    easeInOutCubic: function(n, e, t, u, a) {
        return (e /= a / 2) < 1 ? u / 2 * e * e * e + t : u / 2 * ((e -= 2) * e * e + 2) + t
    },
    easeInQuart: function(n, e, t, u, a) {
        return u * (e /= a) * e * e * e + t
    },
    easeOutQuart: function(n, e, t, u, a) {
        return -u * ((e = e / a - 1) * e * e * e - 1) + t
    },
    easeInOutQuart: function(n, e, t, u, a) {
        return (e /= a / 2) < 1 ? u / 2 * e * e * e * e + t : -u / 2 * ((e -= 2) * e * e * e - 2) + t
    },
    easeInQuint: function(n, e, t, u, a) {
        return u * (e /= a) * e * e * e * e + t
    },
    easeOutQuint: function(n, e, t, u, a) {
        return u * ((e = e / a - 1) * e * e * e * e + 1) + t
    },
    easeInOutQuint: function(n, e, t, u, a) {
        return (e /= a / 2) < 1 ? u / 2 * e * e * e * e * e + t : u / 2 * ((e -= 2) * e * e * e * e + 2) + t
    },
    easeInSine: function(n, e, t, u, a) {
        return -u * Math.cos(e / a * (Math.PI / 2)) + u + t
    },
    easeOutSine: function(n, e, t, u, a) {
        return u * Math.sin(e / a * (Math.PI / 2)) + t
    },
    easeInOutSine: function(n, e, t, u, a) {
        return -u / 2 * (Math.cos(Math.PI * e / a) - 1) + t
    },
    easeInExpo: function(n, e, t, u, a) {
        return 0 == e ? t : u * Math.pow(2, 10 * (e / a - 1)) + t
    },
    easeOutExpo: function(n, e, t, u, a) {
        return e == a ? t + u : u * (1 - Math.pow(2, -10 * e / a)) + t
    },
    easeInOutExpo: function(n, e, t, u, a) {
        return 0 == e ? t : e == a ? t + u : (e /= a / 2) < 1 ? u / 2 * Math.pow(2, 10 * (e - 1)) + t : u / 2 * (2 - Math.pow(2, -10 * --e)) + t
    },
    easeInCirc: function(n, e, t, u, a) {
        return -u * (Math.sqrt(1 - (e /= a) * e) - 1) + t
    },
    easeOutCirc: function(n, e, t, u, a) {
        return u * Math.sqrt(1 - (e = e / a - 1) * e) + t
    },
    easeInOutCirc: function(n, e, t, u, a) {
        return (e /= a / 2) < 1 ? -u / 2 * (Math.sqrt(1 - e * e) - 1) + t : u / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
    },
    easeInElastic: function(n, e, t, u, a) {
        var r = 1.70158,
            i = 0,
            s = u;
        if (0 == e) return t;
        if (1 == (e /= a)) return t + u;
        if (i || (i = .3 * a), s < Math.abs(u)) {
            s = u;
            r = i / 4
        } else r = i / (2 * Math.PI) * Math.asin(u / s);
        return -s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / i) + t
    },
    easeOutElastic: function(n, e, t, u, a) {
        var r = 1.70158,
            i = 0,
            s = u;
        if (0 == e) return t;
        if (1 == (e /= a)) return t + u;
        if (i || (i = .3 * a), s < Math.abs(u)) {
            s = u;
            r = i / 4
        } else r = i / (2 * Math.PI) * Math.asin(u / s);
        return s * Math.pow(2, -10 * e) * Math.sin((e * a - r) * (2 * Math.PI) / i) + u + t
    },
    easeInOutElastic: function(n, e, t, u, a) {
        var r = 1.70158,
            i = 0,
            s = u;
        if (0 == e) return t;
        if (2 == (e /= a / 2)) return t + u;
        if (i || (i = a * (.3 * 1.5)), s < Math.abs(u)) {
            s = u;
            r = i / 4
        } else r = i / (2 * Math.PI) * Math.asin(u / s);
        return e < 1 ? s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / i) * -.5 + t : s * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / i) * .5 + u + t
    },
    easeInBack: function(n, e, t, u, a, r) {
        return void 0 == r && (r = 1.70158), u * (e /= a) * e * ((r + 1) * e - r) + t
    },
    easeOutBack: function(n, e, t, u, a, r) {
        return void 0 == r && (r = 1.70158), u * ((e = e / a - 1) * e * ((r + 1) * e + r) + 1) + t
    },
    easeInOutBack: function(n, e, t, u, a, r) {
        return void 0 == r && (r = 1.70158), (e /= a / 2) < 1 ? u / 2 * (e * e * ((1 + (r *= 1.525)) * e - r)) + t : u / 2 * ((e -= 2) * e * ((1 + (r *= 1.525)) * e + r) + 2) + t
    },
    easeInBounce: function(n, e, t, u, a) {
        return u - jQuery.easing.easeOutBounce(n, a - e, 0, u, a) + t
    },
    easeOutBounce: function(n, e, t, u, a) {
        return (e /= a) < 1 / 2.75 ? u * (7.5625 * e * e) + t : e < 2 / 2.75 ? u * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + t : e < 2.5 / 2.75 ? u * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + t : u * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + t
    },
    easeInOutBounce: function(n, e, t, u, a) {
        return e < a / 2 ? .5 * jQuery.easing.easeInBounce(n, 2 * e, 0, u, a) + t : .5 * jQuery.easing.easeOutBounce(n, 2 * e - a, 0, u, a) + .5 * u + t
    }
});
! function(o) {
    o.fn.UItoTop = function(n) {
        var e = o.extend({
                text: "To Top",
                min: 200,
                inDelay: 600,
                outDelay: 400,
                containerID: "toTop",
                containerHoverID: "toTopHover",
                scrollSpeed: 1200,
                easingType: "linear"
            }, n),
            t = "#" + e.containerID,
            i = "#" + e.containerHoverID;
        o("body").append('<a href="#" id="' + e.containerID + '">' + e.text + "</a>"), o(t).hide().on("click.UItoTop", function() {
            return o("html, body").animate({
                scrollTop: 0
            }, e.scrollSpeed, e.easingType), o("#" + e.containerHoverID, this).stop().animate({
                opacity: 0
            }, e.inDelay, e.easingType), !1
        }).prepend('<span id="' + e.containerHoverID + '"></span>').hover(function() {
            o(i, this).stop().animate({
                opacity: 1
            }, 600, "linear")
        }, function() {
            o(i, this).stop().animate({
                opacity: 0
            }, 700, "linear")
        }), o(window).scroll(function() {
            var n = o(window).scrollTop();
            void 0 === document.body.style.maxHeight && o(t).css({
                position: "absolute",
                top: n + o(window).height() - 50
            }), n > e.min ? o(t).fadeIn(e.inDelay) : o(t).fadeOut(e.Outdelay)
        })
    }
}(jQuery);
! function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function(e) {
    function t(t, o, n) {
        var i = o.hash.slice(1),
            a = document.getElementById(i) || document.getElementsByName(i)[0];
        if (a) {
            t && t.preventDefault();
            var l = e(n.target);
            if (!(n.lock && l.is(":animated") || n.onBefore && !1 === n.onBefore(t, a, l))) {
                if (n.stop && l.stop(!0), n.hash) {
                    var r = a.id === i ? "id" : "name",
                        s = e("<a> </a>").attr(r, i).css({
                            position: "absolute",
                            top: e(window).scrollTop(),
                            left: e(window).scrollLeft()
                        });
                    a[r] = "", e("body").prepend(s), location.hash = o.hash, s.remove(), a[r] = i
                }
                l.scrollTo(a, n).trigger("notify.serialScroll", [a])
            }
        }
    }
    var o = location.href.replace(/#.*/, ""),
        n = e.localScroll = function(t) {
            e("body").localScroll(t)
        };
    return n.defaults = {
        duration: 1e3,
        axis: "y",
        event: "click",
        stop: !0,
        target: window,
        autoscroll: !0
    }, e.fn.localScroll = function(i) {
        function a() {
            return !!this.href && !!this.hash && this.href.replace(this.hash, "") === o && (!i.filter || e(this).is(i.filter))
        }
        return (i = e.extend({}, n.defaults, i)).autoscroll && i.hash && location.hash && (i.target && window.scrollTo(0, 0), t(0, location, i)), i.lazy ? this.on(i.event, "a,area", function(e) {
            a.call(this) && t(e, this, i)
        }) : this.find("a,area").filter(a).bind(i.event, function(e) {
            t(e, this, i)
        }).end().end()
    }, n.hash = function() {}, n
});
! function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
    "use strict";

    function t(t) {
        return !t.nodeName || -1 !== e.inArray(t.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"])
    }

    function o(t) {
        return e.isFunction(t) || e.isPlainObject(t) ? t : {
            top: t,
            left: t
        }
    }
    var n = e.scrollTo = function(t, o, n) {
        return e(window).scrollTo(t, o, n)
    };
    return n.defaults = {
        axis: "xy",
        duration: 0,
        limit: !0
    }, e.fn.scrollTo = function(r, i, s) {
        "object" == typeof i && (s = i, i = 0), "function" == typeof s && (s = {
            onAfter: s
        }), "max" === r && (r = 9e9), s = e.extend({}, n.defaults, s), i = i || s.duration;
        var a = s.queue && 1 < s.axis.length;
        return a && (i /= 2), s.offset = o(s.offset), s.over = o(s.over), this.each(function() {
            function u(t) {
                var o = e.extend({}, s, {
                    queue: !0,
                    duration: i,
                    complete: t && function() {
                        t.call(l, m, s)
                    }
                });
                d.animate(p, o)
            }
            if (null !== r) {
                var f, c = t(this),
                    l = c ? this.contentWindow || window : this,
                    d = e(l),
                    m = r,
                    p = {};
                switch (typeof m) {
                    case "number":
                    case "string":
                        if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(m)) {
                            m = o(m);
                            break
                        }
                        m = c ? e(m) : e(m, l);
                    case "object":
                        if (0 === m.length) return;
                        (m.is || m.style) && (f = (m = e(m)).offset())
                }
                var h = e.isFunction(s.offset) && s.offset(l, m) || s.offset;
                e.each(s.axis.split(""), function(e, t) {
                    var o = "x" === t ? "Left" : "Top",
                        r = o.toLowerCase(),
                        i = "scroll" + o,
                        x = d[i](),
                        v = n.max(l, t);
                    f ? (p[i] = f[r] + (c ? 0 : x - d.offset()[r]), s.margin && (p[i] -= parseInt(m.css("margin" + o), 10) || 0, p[i] -= parseInt(m.css("border" + o + "Width"), 10) || 0), p[i] += h[r] || 0, s.over[r] && (p[i] += m["x" === t ? "width" : "height"]() * s.over[r])) : (o = m[r], p[i] = o.slice && "%" === o.slice(-1) ? parseFloat(o) / 100 * v : o), s.limit && /^\d+$/.test(p[i]) && (p[i] = 0 >= p[i] ? 0 : Math.min(p[i], v)), !e && 1 < s.axis.length && (x === p[i] ? p = {} : a && (u(s.onAfterFirst), p = {}))
                }), u(s.onAfter)
            }
        })
    }, n.max = function(o, n) {
        var r = "scroll" + (i = "x" === n ? "Width" : "Height");
        if (!t(o)) return o[r] - e(o)[i.toLowerCase()]();
        var i = "client" + i,
            s = (a = o.ownerDocument || o.document).documentElement,
            a = a.body;
        return Math.max(s[r], a[r]) - Math.min(s[i], a[i])
    }, e.Tween.propHooks.scrollLeft = e.Tween.propHooks.scrollTop = {
        get: function(t) {
            return e(t.elem)[t.prop]()
        },
        set: function(t) {
            var o = this.get(t);
            if (t.options.interrupt && t._last && t._last !== o) return e(t.elem).stop();
            var n = Math.round(t.now);
            o !== n && (e(t.elem)[t.prop](n), t._last = this.get(t))
        }
    }, n
});
! function(l, e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("undefined" != typeof exports ? require("jquery") : l.jQuery)
}(this, function(l) {
    "use strict";

    function e(e) {
        if (o.webkit && !e) return {
            height: 0,
            width: 0
        };
        if (!o.data.outer) {
            var s = {
                border: "none",
                "box-sizing": "content-box",
                height: "200px",
                margin: "0",
                padding: "0",
                width: "200px"
            };
            o.data.inner = l("<div>").css(l.extend({}, s)), o.data.outer = l("<div>").css(l.extend({
                left: "-1000px",
                overflow: "scroll",
                position: "absolute",
                top: "-1000px"
            }, s)).append(o.data.inner).appendTo("body")
        }
        return o.data.outer.scrollLeft(1e3).scrollTop(1e3), {
            height: Math.ceil(o.data.outer.offset().top - o.data.inner.offset().top || 0),
            width: Math.ceil(o.data.outer.offset().left - o.data.inner.offset().left || 0)
        }
    }

    function s(l) {
        var e = l.originalEvent;
        return !(e.axis && e.axis === e.HORIZONTAL_AXIS || e.wheelDeltaX)
    }
    var o = {
        data: {
            index: 0,
            name: "scrollbar"
        },
        firefox: /firefox/i.test(navigator.userAgent),
        macosx: /mac/i.test(navigator.platform),
        msedge: /edge\/\d+/i.test(navigator.userAgent),
        msie: /(msie|trident)/i.test(navigator.userAgent),
        mobile: /android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent),
        overlay: null,
        scroll: null,
        scrolls: [],
        webkit: /webkit/i.test(navigator.userAgent) && !/edge\/\d+/i.test(navigator.userAgent)
    };
    o.scrolls.add = function(l) {
        this.remove(l).push(l)
    }, o.scrolls.remove = function(e) {
        for (; l.inArray(e, this) >= 0;) this.splice(l.inArray(e, this), 1);
        return this
    };
    var r = {
            autoScrollSize: !0,
            autoUpdate: !0,
            debug: !1,
            disableBodyScroll: !1,
            duration: 200,
            ignoreMobile: !1,
            ignoreOverlay: !1,
            isRtl: !1,
            scrollStep: 30,
            showArrows: !1,
            stepScrolling: !0,
            scrollx: null,
            scrolly: null,
            onDestroy: null,
            onFallback: null,
            onInit: null,
            onScroll: null,
            onUpdate: null
        },
        t = function(s) {
            var t;
            o.scroll || (o.overlay = !((t = e(!0)).height || t.width), o.scroll = e(), c(), l(window).resize(function() {
                var l = !1;
                if (o.scroll && (o.scroll.height || o.scroll.width)) {
                    var s = e();
                    s.height === o.scroll.height && s.width === o.scroll.width || (o.scroll = s, l = !0)
                }
                c(l)
            })), this.container = s, this.namespace = ".scrollbar_" + o.data.index++, this.options = l.extend({}, r, window.jQueryScrollbarOptions || {}), this.scrollTo = null, this.scrollx = {}, this.scrolly = {}, s.data(o.data.name, this), o.scrolls.add(this)
        };
    t.prototype = {
        destroy: function() {
            if (this.wrapper) {
                this.container.removeData(o.data.name), o.scrolls.remove(this);
                var e = this.container.scrollLeft(),
                    s = this.container.scrollTop();
                this.container.insertBefore(this.wrapper).css({
                    height: "",
                    margin: "",
                    "max-height": ""
                }).removeClass("scroll-content scroll-scrollx_visible scroll-scrolly_visible").off(this.namespace).scrollLeft(e).scrollTop(s), this.scrollx.scroll.removeClass("scroll-scrollx_visible").find("div").addBack().off(this.namespace), this.scrolly.scroll.removeClass("scroll-scrolly_visible").find("div").addBack().off(this.namespace), this.wrapper.remove(), l(document).add("body").off(this.namespace), l.isFunction(this.options.onDestroy) && this.options.onDestroy.apply(this, [this.container])
            }
        },
        init: function(e) {
            var r = this,
                t = this.container,
                i = this.containerWrapper || t,
                n = this.namespace,
                a = l.extend(this.options, e || {}),
                c = {
                    x: this.scrollx,
                    y: this.scrolly
                },
                d = this.wrapper,
                h = {},
                u = {
                    scrollLeft: t.scrollLeft(),
                    scrollTop: t.scrollTop()
                };
            if (o.mobile && a.ignoreMobile || o.overlay && a.ignoreOverlay || o.macosx && !o.webkit) return l.isFunction(a.onFallback) && a.onFallback.apply(this, [t]), !1;
            if (d) h = {
                height: "auto",
                "margin-bottom": -1 * o.scroll.height + "px",
                "max-height": ""
            }, h[a.isRtl ? "margin-left" : "margin-right"] = -1 * o.scroll.width + "px", i.css(h);
            else {
                if (this.wrapper = d = l("<div>").addClass("scroll-wrapper").addClass(t.attr("class")).css("position", "absolute" === t.css("position") ? "absolute" : "relative").insertBefore(t).append(t), a.isRtl && d.addClass("scroll--rtl"), t.is("textarea") && (this.containerWrapper = i = l("<div>").insertBefore(t).append(t), d.addClass("scroll-textarea")), (h = {
                        height: "auto",
                        "margin-bottom": -1 * o.scroll.height + "px",
                        "max-height": ""
                    })[a.isRtl ? "margin-left" : "margin-right"] = -1 * o.scroll.width + "px", i.addClass("scroll-content").css(h), t.on("scroll" + n, function(e) {
                        var s = t.scrollLeft(),
                            i = t.scrollTop();
                        if (a.isRtl) switch (!0) {
                            case o.firefox:
                                s = Math.abs(s);
                            case o.msedge || o.msie:
                                s = t[0].scrollWidth - t[0].clientWidth - s
                        }
                        l.isFunction(a.onScroll) && a.onScroll.call(r, {
                            maxScroll: c.y.maxScrollOffset,
                            scroll: i,
                            size: c.y.size,
                            visible: c.y.visible
                        }, {
                            maxScroll: c.x.maxScrollOffset,
                            scroll: s,
                            size: c.x.size,
                            visible: c.x.visible
                        }), c.x.isVisible && c.x.scroll.bar.css("left", s * c.x.kx + "px"), c.y.isVisible && c.y.scroll.bar.css("top", i * c.y.kx + "px")
                    }), d.on("scroll" + n, function() {
                        d.scrollTop(0).scrollLeft(0)
                    }), a.disableBodyScroll) {
                    var p = function(l) {
                        s(l) ? c.y.isVisible && c.y.mousewheel(l) : c.x.isVisible && c.x.mousewheel(l)
                    };
                    d.on("MozMousePixelScroll" + n, p), d.on("mousewheel" + n, p), o.mobile && d.on("touchstart" + n, function(e) {
                        var s = e.originalEvent.touches && e.originalEvent.touches[0] || e,
                            o = s.pageX,
                            r = s.pageY,
                            i = t.scrollLeft(),
                            a = t.scrollTop();
                        l(document).on("touchmove" + n, function(l) {
                            var e = l.originalEvent.targetTouches && l.originalEvent.targetTouches[0] || l;
                            t.scrollLeft(i + o - e.pageX), t.scrollTop(a + r - e.pageY), l.preventDefault()
                        }), l(document).on("touchend" + n, function() {
                            l(document).off(n)
                        })
                    })
                }
                l.isFunction(a.onInit) && a.onInit.apply(this, [t])
            }
            l.each(c, function(e, i) {
                var d = null,
                    h = 1,
                    u = "x" === e ? "scrollLeft" : "scrollTop",
                    p = a.scrollStep,
                    f = function() {
                        var l = t[u]();
                        t[u](l + p), 1 == h && l + p >= v && (l = t[u]()), -1 == h && l + p <= v && (l = t[u]()), t[u]() == l && d && d()
                    },
                    v = 0;
                i.scroll || (i.scroll = r._getScroll(a["scroll" + e]).addClass("scroll-" + e), a.showArrows && i.scroll.addClass("scroll-element_arrows_visible"), i.mousewheel = function(l) {
                    if (!i.isVisible || "x" === e && s(l)) return !0;
                    if ("y" === e && !s(l)) return c.x.mousewheel(l), !0;
                    var o = -1 * l.originalEvent.wheelDelta || l.originalEvent.detail,
                        n = i.size - i.visible - i.offset;
                    return o || ("x" === e && l.originalEvent.deltaX ? o = 40 * l.originalEvent.deltaX : "y" === e && l.originalEvent.deltaY && (o = 40 * l.originalEvent.deltaY)), (o > 0 && v < n || o < 0 && v > 0) && ((v += o) < 0 && (v = 0), v > n && (v = n), r.scrollTo = r.scrollTo || {}, r.scrollTo[u] = v, setTimeout(function() {
                        r.scrollTo && (t.stop().animate(r.scrollTo, 240, "linear", function() {
                            v = t[u]()
                        }), r.scrollTo = null)
                    }, 1)), l.preventDefault(), !1
                }, i.scroll.on("MozMousePixelScroll" + n, i.mousewheel).on("mousewheel" + n, i.mousewheel).on("mouseenter" + n, function() {
                    v = t[u]()
                }), i.scroll.find(".scroll-arrow, .scroll-element_track").on("mousedown" + n, function(s) {
                    if (1 != s.which) return !0;
                    h = 1;
                    var n = {
                            eventOffset: s["x" === e ? "pageX" : "pageY"],
                            maxScrollValue: i.size - i.visible - i.offset,
                            scrollbarOffset: i.scroll.bar.offset()["x" === e ? "left" : "top"],
                            scrollbarSize: i.scroll.bar["x" === e ? "outerWidth" : "outerHeight"]()
                        },
                        c = 0,
                        m = 0;
                    if (l(this).hasClass("scroll-arrow")) {
                        if (h = l(this).hasClass("scroll-arrow_more") ? 1 : -1, p = a.scrollStep * h, v = h > 0 ? n.maxScrollValue : 0, a.isRtl) switch (!0) {
                            case o.firefox:
                                v = h > 0 ? 0 : -1 * n.maxScrollValue;
                                break;
                            case o.msie || o.msedge:
                        }
                    } else h = n.eventOffset > n.scrollbarOffset + n.scrollbarSize ? 1 : n.eventOffset < n.scrollbarOffset ? -1 : 0, "x" === e && a.isRtl && (o.msie || o.msedge) && (h *= -1), p = Math.round(.75 * i.visible) * h, v = n.eventOffset - n.scrollbarOffset - (a.stepScrolling ? 1 == h ? n.scrollbarSize : 0 : Math.round(n.scrollbarSize / 2)), v = t[u]() + v / i.kx;
                    return r.scrollTo = r.scrollTo || {}, r.scrollTo[u] = a.stepScrolling ? t[u]() + p : v, a.stepScrolling && (d = function() {
                        v = t[u](), clearInterval(m), clearTimeout(c), c = 0, m = 0
                    }, c = setTimeout(function() {
                        m = setInterval(f, 40)
                    }, a.duration + 100)), setTimeout(function() {
                        r.scrollTo && (t.animate(r.scrollTo, a.duration), r.scrollTo = null)
                    }, 1), r._handleMouseDown(d, s)
                }), i.scroll.bar.on("mousedown" + n, function(s) {
                    if (1 != s.which) return !0;
                    var c = s["x" === e ? "pageX" : "pageY"],
                        d = t[u]();
                    return i.scroll.addClass("scroll-draggable"), l(document).on("mousemove" + n, function(l) {
                        var s = parseInt((l["x" === e ? "pageX" : "pageY"] - c) / i.kx, 10);
                        "x" === e && a.isRtl && (o.msie || o.msedge) && (s *= -1), t[u](d + s)
                    }), r._handleMouseDown(function() {
                        i.scroll.removeClass("scroll-draggable"), v = t[u]()
                    }, s)
                }))
            }), l.each(c, function(l, e) {
                var s = "scroll-scroll" + l + "_visible",
                    o = "x" == l ? c.y : c.x;
                e.scroll.removeClass(s), o.scroll.removeClass(s), i.removeClass(s)
            }), l.each(c, function(e, s) {
                l.extend(s, "x" == e ? {
                    offset: parseInt(t.css("left"), 10) || 0,
                    size: t.prop("scrollWidth"),
                    visible: d.width()
                } : {
                    offset: parseInt(t.css("top"), 10) || 0,
                    size: t.prop("scrollHeight"),
                    visible: d.height()
                })
            }), this._updateScroll("x", this.scrollx), this._updateScroll("y", this.scrolly), l.isFunction(a.onUpdate) && a.onUpdate.apply(this, [t]), l.each(c, function(l, e) {
                var s = "x" === l ? "left" : "top",
                    o = "x" === l ? "outerWidth" : "outerHeight",
                    r = "x" === l ? "width" : "height",
                    i = parseInt(t.css(s), 10) || 0,
                    n = e.size,
                    c = e.visible + i,
                    d = e.scroll.size[o]() + (parseInt(e.scroll.size.css(s), 10) || 0);
                a.autoScrollSize && (e.scrollbarSize = parseInt(d * c / n, 10), e.scroll.bar.css(r, e.scrollbarSize + "px")), e.scrollbarSize = e.scroll.bar[o](), e.kx = (d - e.scrollbarSize) / (n - c) || 1, e.maxScrollOffset = n - c
            }), t.scrollLeft(u.scrollLeft).scrollTop(u.scrollTop).trigger("scroll")
        },
        _getScroll: function(e) {
            var s = {
                advanced: ['<div class="scroll-element">', '<div class="scroll-element_corner"></div>', '<div class="scroll-arrow scroll-arrow_less"></div>', '<div class="scroll-arrow scroll-arrow_more"></div>', '<div class="scroll-element_outer">', '<div class="scroll-element_size"></div>', '<div class="scroll-element_inner-wrapper">', '<div class="scroll-element_inner scroll-element_track">', '<div class="scroll-element_inner-bottom"></div>', "</div>", "</div>", '<div class="scroll-bar">', '<div class="scroll-bar_body">', '<div class="scroll-bar_body-inner"></div>', "</div>", '<div class="scroll-bar_bottom"></div>', '<div class="scroll-bar_center"></div>', "</div>", "</div>", "</div>"].join(""),
                simple: ['<div class="scroll-element">', '<div class="scroll-element_outer">', '<div class="scroll-element_size"></div>', '<div class="scroll-element_track"></div>', '<div class="scroll-bar"></div>', "</div>", "</div>"].join("")
            };
            return s[e] && (e = s[e]), e || (e = s.simple), e = "string" == typeof e ? l(e).appendTo(this.wrapper) : l(e), l.extend(e, {
                bar: e.find(".scroll-bar"),
                size: e.find(".scroll-element_size"),
                track: e.find(".scroll-element_track")
            }), e
        },
        _handleMouseDown: function(e, s) {
            var o = this.namespace;
            return l(document).on("blur" + o, function() {
                l(document).add("body").off(o), e && e()
            }), l(document).on("dragstart" + o, function(l) {
                return l.preventDefault(), !1
            }), l(document).on("mouseup" + o, function() {
                l(document).add("body").off(o), e && e()
            }), l("body").on("selectstart" + o, function(l) {
                return l.preventDefault(), !1
            }), s && s.preventDefault(), !1
        },
        _updateScroll: function(e, s) {
            var r = this.container,
                t = this.containerWrapper || r,
                i = "scroll-scroll" + e + "_visible",
                n = "x" === e ? this.scrolly : this.scrollx,
                a = parseInt(this.container.css("x" === e ? "left" : "top"), 10) || 0,
                c = this.wrapper,
                d = s.size,
                h = s.visible + a;
            s.isVisible = d - h > 1, s.isVisible ? (s.scroll.addClass(i), n.scroll.addClass(i), t.addClass(i)) : (s.scroll.removeClass(i), n.scroll.removeClass(i), t.removeClass(i)), "y" === e && (r.is("textarea") || d < h ? t.css({
                height: h + o.scroll.height + "px",
                "max-height": "none"
            }) : t.css({
                "max-height": h + o.scroll.height + "px"
            })), s.size == r.prop("scrollWidth") && n.size == r.prop("scrollHeight") && s.visible == c.width() && n.visible == c.height() && s.offset == (parseInt(r.css("left"), 10) || 0) && n.offset == (parseInt(r.css("top"), 10) || 0) || (l.extend(this.scrollx, {
                offset: parseInt(r.css("left"), 10) || 0,
                size: r.prop("scrollWidth"),
                visible: c.width()
            }), l.extend(this.scrolly, {
                offset: parseInt(r.css("top"), 10) || 0,
                size: this.container.prop("scrollHeight"),
                visible: c.height()
            }), this._updateScroll("x" === e ? "y" : "x", n))
        }
    };
    var i = t;
    l.fn.scrollbar = function(e, s) {
        return "string" != typeof e && (s = e, e = "init"), void 0 === s && (s = []), l.isArray(s) || (s = [s]), this.not("body, .scroll-wrapper").each(function() {
            var r = l(this),
                t = r.data(o.data.name);
            (t || "init" === e) && (t || (t = new i(r)), t[e] && t[e].apply(t, s))
        }), this
    }, l.fn.scrollbar.options = r;
    var n, a, c = (n = 0, function(l) {
        var e, s, r, t, i, a, d;
        for (e = 0; e < o.scrolls.length; e++) t = o.scrolls[e], s = t.container, r = t.options, i = t.wrapper, a = t.scrollx, d = t.scrolly, (l || r.autoUpdate && i && i.is(":visible") && (s.prop("scrollWidth") != a.size || s.prop("scrollHeight") != d.size || i.width() != a.visible || i.height() != d.visible)) && (t.init(), r.debug && window.console && console.log({
            scrollHeight: s.prop("scrollHeight") + ":" + t.scrolly.size,
            scrollWidth: s.prop("scrollWidth") + ":" + t.scrollx.size,
            visibleHeight: i.height() + ":" + t.scrolly.visible,
            visibleWidth: i.width() + ":" + t.scrollx.visible
        }, !0));
        clearTimeout(n), n = setTimeout(c, 300)
    });
    window.angular && (a = window.angular).module("jQueryScrollbar", []).provider("jQueryScrollbar", function() {
        var l = r;
        return {
            setOptions: function(e) {
                a.extend(l, e)
            },
            $get: function() {
                return {
                    options: a.copy(l)
                }
            }
        }
    }).directive("jqueryScrollbar", ["jQueryScrollbar", "$parse", function(l, e) {
        return {
            restrict: "AC",
            link: function(s, o, r) {
                var t = e(r.jqueryScrollbar)(s);
                o.scrollbar(t || l.options).on("$destroy", function() {
                    o.scrollbar("destroy")
                })
            }
        }
    }])
});
! function(n) {
    var t = n(window),
        o = t.height();
    t.resize(function() {
        o = t.height()
    }), n.fn.parallax = function(i, e, r) {
        var u, h, l = n(this);

        function c() {
            var r = t.scrollTop();
            l.each(function() {
                var t = n(this),
                    c = t.offset().top;
                c + u(t) < r || c > r + o || l.css("backgroundPosition", i + " " + Math.round((h - r) * e) + "px")
            })
        }
        l.each(function() {
            h = l.offset().top
        }), u = r ? function(n) {
            return n.outerHeight(!0)
        } : function(n) {
            return n.height()
        }, (arguments.length < 1 || null === i) && (i = "50%"), (arguments.length < 2 || null === e) && (e = .1), (arguments.length < 3 || null === r) && (r = !0), t.bind("scroll", c).resize(c), c()
    }
}(jQuery);
! function(e, t) {
    "object" == typeof exports ? module.exports = t(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], t) : t(e.jQuery)
}(this, function(e) {
    var t = function(e, t) {
        var a, n = document.createElement("canvas");
        e.appendChild(n), "undefined" != typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(n);
        var i = n.getContext("2d");
        n.width = n.height = t.size;
        var r = 1;
        window.devicePixelRatio > 1 && (r = window.devicePixelRatio, n.style.width = n.style.height = [t.size, "px"].join(""), n.width = n.height = t.size * r, i.scale(r, r)), i.translate(t.size / 2, t.size / 2), i.rotate((t.rotate / 180 - .5) * Math.PI);
        var o = (t.size - t.lineWidth) / 2;
        t.scaleColor && t.scaleLength && (o -= t.scaleLength + 2), Date.now = Date.now || function() {
            return +new Date
        };
        var s = function(e, t, a) {
                var n = 0 >= (a = Math.min(Math.max(-1, a || 0), 1));
                i.beginPath(), i.arc(0, 0, o, 0, 2 * Math.PI * a, n), i.strokeStyle = e, i.lineWidth = t, i.stroke()
            },
            d = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
                window.setTimeout(e, 1e3 / 60)
            },
            h = function() {
                t.scaleColor && function() {
                    var e, a;
                    i.lineWidth = 1, i.fillStyle = t.scaleColor, i.save();
                    for (var n = 24; n > 0; --n) n % 6 == 0 ? (a = t.scaleLength, e = 0) : (a = .6 * t.scaleLength, e = t.scaleLength - a), i.fillRect(-t.size / 2 + e, 0, a, 1), i.rotate(Math.PI / 12);
                    i.restore()
                }(), t.trackColor && s(t.trackColor, t.lineWidth, 1)
            };
        this.getCanvas = function() {
            return n
        }, this.getCtx = function() {
            return i
        }, this.clear = function() {
            i.clearRect(t.size / -2, t.size / -2, t.size, t.size)
        }, this.draw = function(e) {
            var n;
            t.scaleColor || t.trackColor ? i.getImageData && i.putImageData ? a ? i.putImageData(a, 0, 0) : (h(), a = i.getImageData(0, 0, t.size * r, t.size * r)) : (this.clear(), h()) : this.clear(), i.lineCap = t.lineCap, n = "function" == typeof t.barColor ? t.barColor(e) : t.barColor, s(n, t.lineWidth, e / 100)
        }.bind(this), this.animate = function(e, a) {
            var n = Date.now();
            t.onStart(e, a);
            var i = function() {
                var r = Math.min(Date.now() - n, t.animate.duration),
                    o = t.easing(this, r, e, a - e, t.animate.duration);
                this.draw(o), t.onStep(e, a, o), r >= t.animate.duration ? t.onStop(e, a) : d(i)
            }.bind(this);
            d(i)
        }.bind(this)
    };
    e.fn.easyPieChart = function(a) {
        return this.each(function() {
            var n;
            e.data(this, "easyPieChart") || (n = e.extend({}, a, e(this).data()), e.data(this, "easyPieChart", new function(e, a) {
                var n = {
                    barColor: "#ef1e25",
                    trackColor: "#f9f9f9",
                    scaleColor: "#dfe0e0",
                    scaleLength: 5,
                    lineCap: "round",
                    lineWidth: 3,
                    size: 110,
                    rotate: 0,
                    animate: {
                        duration: 1e3,
                        enabled: !0
                    },
                    easing: function(e, t, a, n, i) {
                        return 1 > (t /= i / 2) ? n / 2 * t * t + a : -n / 2 * (--t * (t - 2) - 1) + a
                    },
                    onStart: function() {},
                    onStep: function() {},
                    onStop: function() {}
                };
                n.renderer = t;
                var i = {},
                    r = 0,
                    o = function() {
                        this.el = e, this.options = i;
                        for (var t in n) n.hasOwnProperty(t) && (i[t] = a && void 0 !== a[t] ? a[t] : n[t], "function" == typeof i[t] && (i[t] = i[t].bind(this)));
                        i.easing = "string" == typeof i.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[i.easing]) ? jQuery.easing[i.easing] : n.easing, "number" == typeof i.animate && (i.animate = {
                            duration: i.animate,
                            enabled: !0
                        }), "boolean" != typeof i.animate || i.animate || (i.animate = {
                            duration: 1e3,
                            enabled: i.animate
                        }), this.renderer = new i.renderer(e, i), this.renderer.draw(r), e.dataset && e.dataset.percent ? this.update(parseFloat(e.dataset.percent)) : e.getAttribute && e.getAttribute("data-percent") && this.update(parseFloat(e.getAttribute("data-percent")))
                    }.bind(this);
                this.update = function(e) {
                    return e = parseFloat(e), i.animate.enabled ? this.renderer.animate(r, e) : this.renderer.draw(e), r = e, this
                }.bind(this), this.disableAnimation = function() {
                    return i.animate.enabled = !1, this
                }, this.enableAnimation = function() {
                    return i.animate.enabled = !0, this
                }, o()
            }(this, n)))
        })
    }
});
! function(t) {
    "use strict";
    var e = function(n, s) {
        this.$element = t(n), this.options = t.extend({}, e.defaults, s)
    };
    e.defaults = {
        transition_delay: 300,
        refresh_speed: 50,
        display_text: "none",
        use_percentage: !0,
        percent_format: function(t) {
            return t + "%"
        },
        amount_format: function(t, e) {
            return t + " / " + e
        },
        update: t.noop,
        done: t.noop,
        fail: t.noop
    }, e.prototype.transition = function() {
        var n = this.$element,
            s = n.parent(),
            a = this.$back_text,
            i = this.$front_text,
            r = this.options,
            o = parseInt(n.attr("data-transitiongoal")),
            h = parseInt(n.attr("aria-valuemin")) || 0,
            d = parseInt(n.attr("aria-valuemax")) || 100,
            f = s.hasClass("vertical"),
            p = r.update && "function" == typeof r.update ? r.update : e.defaults.update,
            c = r.done && "function" == typeof r.done ? r.done : e.defaults.done,
            u = r.fail && "function" == typeof r.fail ? r.fail : e.defaults.fail;
        if (isNaN(o)) u("data-transitiongoal not set");
        else {
            var l, g = Math.round(100 * (o - h) / (d - h));
            if ("center" === r.display_text && !a && !i) this.$back_text = a = t("<span>").addClass("progressbar-back-text").prependTo(s), this.$front_text = i = t("<span>").addClass("progressbar-front-text").prependTo(n), f ? (l = s.css("height"), a.css({
                height: l,
                "line-height": l
            }), i.css({
                height: l,
                "line-height": l
            }), t(window).resize(function() {
                l = s.css("height"), a.css({
                    height: l,
                    "line-height": l
                }), i.css({
                    height: l,
                    "line-height": l
                })
            })) : (l = s.css("width"), i.css({
                width: l
            }), t(window).resize(function() {
                l = s.css("width"), i.css({
                    width: l
                })
            }));
            setTimeout(function() {
                var t, e, u, l, _;
                f ? n.css("height", g + "%") : n.css("width", g + "%");
                var x = setInterval(function() {
                    f ? (u = n.height(), l = s.height()) : (u = n.width(), l = s.width()), t = Math.round(100 * u / l), e = Math.round(h + u / l * (d - h)), t >= g && (t = g, e = o, c(n), clearInterval(x)), "none" !== r.display_text && (_ = r.use_percentage ? r.percent_format(t) : r.amount_format(e, d, h), "fill" === r.display_text ? n.text(_) : "center" === r.display_text && (a.text(_), i.text(_))), n.attr("aria-valuenow", e), p(t, n)
                }, r.refresh_speed)
            }, r.transition_delay)
        }
    };
    var n = t.fn.progressbar;
    t.fn.progressbar = function(n) {
        return this.each(function() {
            var s = t(this),
                a = s.data("bs.progressbar"),
                i = "object" == typeof n && n;
            a && i && t.extend(a.options, i), a || s.data("bs.progressbar", a = new e(this, i)), a.transition()
        })
    }, t.fn.progressbar.Constructor = e, t.fn.progressbar.noConflict = function() {
        return t.fn.progressbar = n, this
    }
}(window.jQuery);
! function(t) {
    t.fn.countTo = function(e) {
        return e = e || {}, t(this).each(function() {
            var a = t.extend({}, t.fn.countTo.defaults, {
                    from: t(this).data("from"),
                    to: t(this).data("to"),
                    speed: t(this).data("speed"),
                    refreshInterval: t(this).data("refresh-interval"),
                    decimals: t(this).data("decimals")
                }, e),
                n = Math.ceil(a.speed / a.refreshInterval),
                o = (a.to - a.from) / n,
                r = this,
                l = t(this),
                f = 0,
                i = a.from,
                c = l.data("countTo") || {};

            function s(t) {
                var e = a.formatter.call(r, t, a);
                l.text(e)
            }
            l.data("countTo", c), c.interval && clearInterval(c.interval), c.interval = setInterval(function() {
                f++, s(i += o), "function" == typeof a.onUpdate && a.onUpdate.call(r, i);
                f >= n && (l.removeData("countTo"), clearInterval(c.interval), i = a.to, "function" == typeof a.onComplete && a.onComplete.call(r, i))
            }, a.refreshInterval), s(i)
        })
    }, t.fn.countTo.defaults = {
        from: 0,
        to: 0,
        speed: 1e3,
        refreshInterval: 100,
        decimals: 0,
        formatter: function(t, e) {
            return t.toFixed(e.decimals)
        },
        onUpdate: null,
        onComplete: null
    }
}(jQuery);
! function(t) {
    function e() {
        var t = location.href;
        return hashtag = -1 !== t.indexOf("#prettyPhoto") && decodeURI(t.substring(t.indexOf("#prettyPhoto") + 1, t.length)), hashtag && (hashtag = hashtag.replace(/<|>/g, "")), hashtag
    }

    function i(t, e) {
        t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var i = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(e);
        return null == i ? "" : i[1]
    }
    t.prettyPhoto = {
        version: "3.1.6"
    }, t.fn.prettyPhoto = function(p) {
        p = jQuery.extend({
            hook: "rel",
            animation_speed: "fast",
            ajaxcallback: function() {},
            slideshow: 5e3,
            autoplay_slideshow: !1,
            opacity: .8,
            show_title: !0,
            allow_resize: !0,
            allow_expand: !0,
            default_width: 500,
            default_height: 344,
            counter_separator_label: "/",
            theme: "pp_default",
            horizontal_padding: 20,
            hideflash: !1,
            wmode: "opaque",
            autoplay: !0,
            modal: !1,
            deeplinking: !0,
            overlay_gallery: !0,
            overlay_gallery_max: 30,
            keyboard_shortcuts: !0,
            changepicturecallback: function() {},
            callback: function() {},
            ie6_fallback: !0,
            markup: '<div class="pp_pic_holder"> \t\t\t\t\t\t<div class="ppt">&nbsp;</div> \t\t\t\t\t\t<div class="pp_top"> \t\t\t\t\t\t\t<div class="pp_left"></div> \t\t\t\t\t\t\t<div class="pp_middle"></div> \t\t\t\t\t\t\t<div class="pp_right"></div> \t\t\t\t\t\t</div> \t\t\t\t\t\t<div class="pp_content_container"> \t\t\t\t\t\t\t<div class="pp_left"> \t\t\t\t\t\t\t<div class="pp_right"> \t\t\t\t\t\t\t\t<div class="pp_content"> \t\t\t\t\t\t\t\t\t<div class="pp_loaderIcon"></div> \t\t\t\t\t\t\t\t\t<div class="pp_fade"> \t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_expand" title="Expand the image">Expand</a> \t\t\t\t\t\t\t\t\t\t<div class="pp_hoverContainer"> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_next" href="#">next</a> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_previous" href="#">previous</a> \t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t\t<div id="pp_full_res"></div> \t\t\t\t\t\t\t\t\t\t<div class="pp_details"> \t\t\t\t\t\t\t\t\t\t\t<div class="pp_nav"> \t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_previous">Previous</a> \t\t\t\t\t\t\t\t\t\t\t\t<p class="currentTextHolder">0/0</p> \t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_next">Next</a> \t\t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t\t\t<p class="pp_description"></p> \t\t\t\t\t\t\t\t\t\t\t<div class="pp_social">{pp_social}</div> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_close" href="#">Close</a> \t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t</div> \t\t\t\t\t\t</div> \t\t\t\t\t\t<div class="pp_bottom"> \t\t\t\t\t\t\t<div class="pp_left"></div> \t\t\t\t\t\t\t<div class="pp_middle"></div> \t\t\t\t\t\t\t<div class="pp_right"></div> \t\t\t\t\t\t</div> \t\t\t\t\t</div> \t\t\t\t\t<div class="pp_overlay"></div>',
            gallery_markup: '<div class="pp_gallery"> \t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_previous">Previous</a> \t\t\t\t\t\t\t\t<div> \t\t\t\t\t\t\t\t\t<ul> \t\t\t\t\t\t\t\t\t\t{gallery} \t\t\t\t\t\t\t\t\t</ul> \t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_next">Next</a> \t\t\t\t\t\t\t</div>',
            image_markup: '<img id="fullResImage" src="{path}" />',
            flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
            quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
            iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
            inline_markup: '<div class="pp_inline">{content}</div>',
            custom_markup: "",
            social_tools: '<div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"><\/script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>'
        }, p);
        var o, a, s, n, r, l, d, h = this,
            c = !1,
            _ = t(window).height(),
            g = t(window).width();

        function m() {
            t(".pp_loaderIcon").hide(), projectedTop = scroll_pos.scrollTop + (_ / 2 - o.containerHeight / 2), projectedTop < 0 && (projectedTop = 0), $ppt.fadeTo(settings.animation_speed, 1), $pp_pic_holder.find(".pp_content").animate({
                height: o.contentHeight,
                width: o.contentWidth
            }, settings.animation_speed), $pp_pic_holder.animate({
                top: projectedTop,
                left: g / 2 - o.containerWidth / 2 < 0 ? 0 : g / 2 - o.containerWidth / 2,
                width: o.containerWidth
            }, settings.animation_speed, function() {
                $pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(o.height).width(o.width), $pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed), isSet && "image" == y(pp_images[set_position]) ? $pp_pic_holder.find(".pp_hoverContainer").show() : $pp_pic_holder.find(".pp_hoverContainer").hide(), settings.allow_expand && (o.resized ? t("a.pp_expand,a.pp_contract").show() : t("a.pp_expand").hide()), !settings.autoplay_slideshow || d || a || t.prettyPhoto.startSlideshow(), settings.changepicturecallback(), a = !0
            }), isSet && settings.overlay_gallery && "image" == y(pp_images[set_position]) ? (itemWidth = 57, navWidth = "facebook" == settings.theme || "pp_default" == settings.theme ? 50 : 30, itemsPerPage = Math.floor((o.containerWidth - 100 - navWidth) / itemWidth), itemsPerPage = itemsPerPage < pp_images.length ? itemsPerPage : pp_images.length, totalPage = Math.ceil(pp_images.length / itemsPerPage) - 1, 0 == totalPage ? (navWidth = 0, $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide()) : $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show(), galleryWidth = itemsPerPage * itemWidth, fullGalleryWidth = pp_images.length * itemWidth, $pp_gallery.css("margin-left", -(galleryWidth / 2 + navWidth / 2)).find("div:first").width(galleryWidth + 5).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected"), goToPage = Math.floor(set_position / itemsPerPage) < totalPage ? Math.floor(set_position / itemsPerPage) : totalPage, t.prettyPhoto.changeGalleryPage(goToPage), $pp_gallery_li.filter(":eq(" + set_position + ")").addClass("selected")) : $pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave"), p.ajaxcallback()
        }

        function f(e) {
            $pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility", "hidden"), $pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed, function() {
                t(".pp_loaderIcon").show(), e()
            })
        }

        function u(t, e) {
            if (resized = !1, v(t, e), imageWidth = t, imageHeight = e, (l > g || r > _) && doresize && settings.allow_resize && !c) {
                for (resized = !0, fitting = !1; !fitting;) l > g - 38 ? (imageWidth = g - 38, imageHeight = e / t * imageWidth) : r > _ - 100 ? (imageHeight = _ - 100, imageWidth = t / e * imageHeight) : fitting = !0, r = imageHeight, l = imageWidth;
                (l > g || r > _) && u(l, r), v(imageWidth, imageHeight)
            }
            return {
                width: Math.floor(imageWidth),
                height: Math.floor(imageHeight),
                containerHeight: Math.floor(r),
                containerWidth: Math.floor(l) + 2 * settings.horizontal_padding,
                contentHeight: Math.floor(s),
                contentWidth: Math.floor(n),
                resized: resized
            }
        }

        function v(e, i) {
            e = parseFloat(e), i = parseFloat(i), $pp_details = $pp_pic_holder.find(".pp_details"), $pp_details.width(e), detailsHeight = parseFloat($pp_details.css("marginTop")) + parseFloat($pp_details.css("marginBottom")), $pp_details = $pp_details.clone().addClass(settings.theme).width(e).appendTo(t("body")).css({
                position: "absolute",
                top: -1e4
            }), detailsHeight += $pp_details.height(), detailsHeight = detailsHeight <= 34 ? 36 : detailsHeight, $pp_details.remove(), $pp_title = $pp_pic_holder.find(".ppt"), $pp_title.width(e), titleHeight = parseFloat($pp_title.css("marginTop")) + parseFloat($pp_title.css("marginBottom")), $pp_title = $pp_title.clone().appendTo(t("body")).css({
                position: "absolute",
                top: -1e4
            }), titleHeight += $pp_title.height(), $pp_title.remove(), s = i + detailsHeight, n = e, r = s + titleHeight + $pp_pic_holder.find(".pp_top").height() + $pp_pic_holder.find(".pp_bottom").height(), l = e
        }

        function y(t) {
            return t.match(/youtube\.com\/watch/i) || t.match(/youtu\.be/i) ? "youtube" : t.match(/vimeo\.com/i) ? "vimeo" : t.match(/\b.mov\b/i) ? "quicktime" : t.match(/\b.swf\b/i) ? "flash" : t.match(/\biframe=true\b/i) ? "iframe" : t.match(/\bajax=true\b/i) ? "ajax" : t.match(/\bcustom=true\b/i) ? "custom" : "#" == t.substr(0, 1) ? "inline" : "image"
        }

        function w() {
            if (doresize && "undefined" != typeof $pp_pic_holder) {
                if (scroll_pos = b(), contentHeight = $pp_pic_holder.height(), contentwidth = $pp_pic_holder.width(), projectedTop = _ / 2 + scroll_pos.scrollTop - contentHeight / 2, projectedTop < 0 && (projectedTop = 0), contentHeight > _) return;
                $pp_pic_holder.css({
                    top: projectedTop,
                    left: g / 2 + scroll_pos.scrollLeft - contentwidth / 2
                })
            }
        }

        function b() {
            return self.pageYOffset ? {
                scrollTop: self.pageYOffset,
                scrollLeft: self.pageXOffset
            } : document.documentElement && document.documentElement.scrollTop ? {
                scrollTop: document.documentElement.scrollTop,
                scrollLeft: document.documentElement.scrollLeft
            } : document.body ? {
                scrollTop: document.body.scrollTop,
                scrollLeft: document.body.scrollLeft
            } : void 0
        }

        function k(e) {
            if (settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href))), settings.markup = settings.markup.replace("{pp_social}", ""), t("body").append(settings.markup), $pp_pic_holder = t(".pp_pic_holder"), $ppt = t(".ppt"), $pp_overlay = t("div.pp_overlay"), isSet && settings.overlay_gallery) {
                currentGalleryPage = 0, toInject = "";
                for (var i = 0; i < pp_images.length; i++) pp_images[i].match(/\b(jpg|jpeg|png|gif)\b/gi) ? (classname = "", img_src = pp_images[i]) : (classname = "default", img_src = ""), toInject += "<li class='" + classname + "'><a href='#'><img src='" + img_src + "' width='50' alt='' /></a></li>";
                toInject = settings.gallery_markup.replace(/{gallery}/g, toInject), $pp_pic_holder.find("#pp_full_res").after(toInject), $pp_gallery = t(".pp_pic_holder .pp_gallery"), $pp_gallery_li = $pp_gallery.find("li"), $pp_gallery.find(".pp_arrow_next").click(function() {
                    return t.prettyPhoto.changeGalleryPage("next"), t.prettyPhoto.stopSlideshow(), !1
                }), $pp_gallery.find(".pp_arrow_previous").click(function() {
                    return t.prettyPhoto.changeGalleryPage("previous"), t.prettyPhoto.stopSlideshow(), !1
                }), $pp_pic_holder.find(".pp_content").hover(function() {
                    $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn()
                }, function() {
                    $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut()
                }), itemWidth = 57, $pp_gallery_li.each(function(e) {
                    t(this).find("a").click(function() {
                        return t.prettyPhoto.changePage(e), t.prettyPhoto.stopSlideshow(), !1
                    })
                })
            }
            settings.slideshow && ($pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play</a>'), $pp_pic_holder.find(".pp_nav .pp_play").click(function() {
                return t.prettyPhoto.startSlideshow(), !1
            })), $pp_pic_holder.attr("class", "pp_pic_holder " + settings.theme), $pp_overlay.css({
                opacity: 0,
                height: t(document).height(),
                width: t(window).width()
            }).bind("click", function() {
                settings.modal || t.prettyPhoto.close()
            }), t("a.pp_close").bind("click", function() {
                return t.prettyPhoto.close(), !1
            }), settings.allow_expand && t("a.pp_expand").bind("click", function(e) {
                return t(this).hasClass("pp_expand") ? (t(this).removeClass("pp_expand").addClass("pp_contract"), doresize = !1) : (t(this).removeClass("pp_contract").addClass("pp_expand"), doresize = !0), f(function() {
                    t.prettyPhoto.open()
                }), !1
            }), $pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click", function() {
                return t.prettyPhoto.changePage("previous"), t.prettyPhoto.stopSlideshow(), !1
            }), $pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click", function() {
                return t.prettyPhoto.changePage("next"), t.prettyPhoto.stopSlideshow(), !1
            }), w()
        }
        return doresize = !0, scroll_pos = b(), t(window).unbind("resize.prettyphoto").bind("resize.prettyphoto", function() {
            w(), _ = t(window).height(), g = t(window).width(), "undefined" != typeof $pp_overlay && $pp_overlay.height(t(document).height()).width(g)
        }), p.keyboard_shortcuts && t(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto", function(e) {
            if ("undefined" != typeof $pp_pic_holder && $pp_pic_holder.is(":visible")) switch (e.keyCode) {
                case 37:
                    t.prettyPhoto.changePage("previous"), e.preventDefault();
                    break;
                case 39:
                    t.prettyPhoto.changePage("next"), e.preventDefault();
                    break;
                case 27:
                    settings.modal || t.prettyPhoto.close(), e.preventDefault()
            }
        }), t.prettyPhoto.initialize = function() {
            return settings = p, "pp_default" == settings.theme && (settings.horizontal_padding = 16), theRel = t(this).attr(settings.hook), galleryRegExp = /\[(?:.*)\]/, isSet = !!galleryRegExp.exec(theRel), pp_images = isSet ? jQuery.map(h, function(e, i) {
                if (-1 != t(e).attr(settings.hook).indexOf(theRel)) return t(e).attr("href")
            }) : t.makeArray(t(this).attr("href")), pp_titles = isSet ? jQuery.map(h, function(e, i) {
                if (-1 != t(e).attr(settings.hook).indexOf(theRel)) return t(e).find("img").attr("alt") ? t(e).find("img").attr("alt") : ""
            }) : t.makeArray(t(this).find("img").attr("alt")), pp_descriptions = isSet ? jQuery.map(h, function(e, i) {
                if (-1 != t(e).attr(settings.hook).indexOf(theRel)) return t(e).attr("title") ? t(e).attr("title") : ""
            }) : t.makeArray(t(this).attr("title")), pp_images.length > settings.overlay_gallery_max && (settings.overlay_gallery = !1), set_position = jQuery.inArray(t(this).attr("href"), pp_images), rel_index = isSet ? set_position : t("a[" + settings.hook + "^='" + theRel + "']").index(t(this)), k(this), settings.allow_resize && t(window).bind("scroll.prettyphoto", function() {
                w()
            }), t.prettyPhoto.open(), !1
        }, t.prettyPhoto.open = function(e) {
            return "undefined" == typeof settings && (settings = p, pp_images = t.makeArray(arguments[0]), pp_titles = arguments[1] ? t.makeArray(arguments[1]) : t.makeArray(""), pp_descriptions = arguments[2] ? t.makeArray(arguments[2]) : t.makeArray(""), isSet = pp_images.length > 1, set_position = arguments[3] ? arguments[3] : 0, k(e.target)), settings.hideflash && t("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "hidden"), t(pp_images).size() > 1 ? t(".pp_nav").show() : t(".pp_nav").hide(), t(".pp_loaderIcon").show(), settings.deeplinking && function() {
                if ("undefined" == typeof theRel) return;
                location.hash = theRel + "/" + rel_index + "/"
            }(), settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href)), $pp_pic_holder.find(".pp_social").html(facebook_like_link)), $ppt.is(":hidden") && $ppt.css("opacity", 0).show(), $pp_overlay.show().fadeTo(settings.animation_speed, settings.opacity), $pp_pic_holder.find(".currentTextHolder").text(set_position + 1 + settings.counter_separator_label + t(pp_images).size()), void 0 !== pp_descriptions[set_position] && "" != pp_descriptions[set_position] ? $pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position])) : $pp_pic_holder.find(".pp_description").hide(), movie_width = parseFloat(i("width", pp_images[set_position])) ? i("width", pp_images[set_position]) : settings.default_width.toString(), movie_height = parseFloat(i("height", pp_images[set_position])) ? i("height", pp_images[set_position]) : settings.default_height.toString(), c = !1, -1 != movie_height.indexOf("%") && (movie_height = parseFloat(t(window).height() * parseFloat(movie_height) / 100 - 150), c = !0), -1 != movie_width.indexOf("%") && (movie_width = parseFloat(t(window).width() * parseFloat(movie_width) / 100 - 150), c = !0), $pp_pic_holder.fadeIn(function() {
                switch (settings.show_title && "" != pp_titles[set_position] && void 0 !== pp_titles[set_position] ? $ppt.html(unescape(pp_titles[set_position])) : $ppt.html("&nbsp;"), imgPreloader = "", skipInjection = !1, y(pp_images[set_position])) {
                    case "image":
                        imgPreloader = new Image, nextImage = new Image, isSet && set_position < t(pp_images).size() - 1 && (nextImage.src = pp_images[set_position + 1]), prevImage = new Image, isSet && pp_images[set_position - 1] && (prevImage.src = pp_images[set_position - 1]), $pp_pic_holder.find("#pp_full_res")[0].innerHTML = settings.image_markup.replace(/{path}/g, pp_images[set_position]), imgPreloader.onload = function() {
                            o = u(imgPreloader.width, imgPreloader.height), m()
                        }, imgPreloader.onerror = function() {
                            alert("Image cannot be loaded. Make sure the path is correct and image exist."), t.prettyPhoto.close()
                        }, imgPreloader.src = pp_images[set_position];
                        break;
                    case "youtube":
                        o = u(movie_width, movie_height), movie_id = i("v", pp_images[set_position]), "" == movie_id && (movie_id = pp_images[set_position].split("youtu.be/"), movie_id = movie_id[1], movie_id.indexOf("?") > 0 && (movie_id = movie_id.substr(0, movie_id.indexOf("?"))), movie_id.indexOf("&") > 0 && (movie_id = movie_id.substr(0, movie_id.indexOf("&")))), movie = "http://www.youtube.com/embed/" + movie_id, i("rel", pp_images[set_position]) ? movie += "?rel=" + i("rel", pp_images[set_position]) : movie += "?rel=1", settings.autoplay && (movie += "&autoplay=1"), toInject = settings.iframe_markup.replace(/{width}/g, o.width).replace(/{height}/g, o.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, movie);
                        break;
                    case "vimeo":
                        o = u(movie_width, movie_height), movie_id = pp_images[set_position];
                        var e = movie_id.match(/http(s?):\/\/(www\.)?vimeo.com\/(\d+)/);
                        movie = "http://player.vimeo.com/video/" + e[3] + "?title=0&amp;byline=0&amp;portrait=0", settings.autoplay && (movie += "&autoplay=1;"), vimeo_width = o.width + "/embed/?moog_width=" + o.width, toInject = settings.iframe_markup.replace(/{width}/g, vimeo_width).replace(/{height}/g, o.height).replace(/{path}/g, movie);
                        break;
                    case "quicktime":
                        (o = u(movie_width, movie_height)).height += 15, o.contentHeight += 15, o.containerHeight += 15, toInject = settings.quicktime_markup.replace(/{width}/g, o.width).replace(/{height}/g, o.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, pp_images[set_position]).replace(/{autoplay}/g, settings.autoplay);
                        break;
                    case "flash":
                        o = u(movie_width, movie_height), flash_vars = pp_images[set_position], flash_vars = flash_vars.substring(pp_images[set_position].indexOf("flashvars") + 10, pp_images[set_position].length), filename = pp_images[set_position], filename = filename.substring(0, filename.indexOf("?")), toInject = settings.flash_markup.replace(/{width}/g, o.width).replace(/{height}/g, o.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, filename + "?" + flash_vars);
                        break;
                    case "iframe":
                        o = u(movie_width, movie_height), frame_url = pp_images[set_position], frame_url = frame_url.substr(0, frame_url.indexOf("iframe") - 1), toInject = settings.iframe_markup.replace(/{width}/g, o.width).replace(/{height}/g, o.height).replace(/{path}/g, frame_url);
                        break;
                    case "ajax":
                        doresize = !1, o = u(movie_width, movie_height), doresize = !0, skipInjection = !0, t.get(pp_images[set_position], function(t) {
                            toInject = settings.inline_markup.replace(/{content}/g, t), $pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, m()
                        });
                        break;
                    case "custom":
                        o = u(movie_width, movie_height), toInject = settings.custom_markup;
                        break;
                    case "inline":
                        myClone = t(pp_images[set_position]).clone().append('<br clear="all" />').css({
                            width: settings.default_width
                        }).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo(t("body")).show(), doresize = !1, o = u(t(myClone).width(), t(myClone).height()), doresize = !0, t(myClone).remove(), toInject = settings.inline_markup.replace(/{content}/g, t(pp_images[set_position]).html())
                }
                imgPreloader || skipInjection || ($pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, m())
            }), !1
        }, t.prettyPhoto.changePage = function(e) {
            currentGalleryPage = 0, "previous" == e ? (set_position--, set_position < 0 && (set_position = t(pp_images).size() - 1)) : "next" == e ? (set_position++, set_position > t(pp_images).size() - 1 && (set_position = 0)) : set_position = e, rel_index = set_position, doresize || (doresize = !0), settings.allow_expand && t(".pp_contract").removeClass("pp_contract").addClass("pp_expand"), f(function() {
                t.prettyPhoto.open()
            })
        }, t.prettyPhoto.changeGalleryPage = function(t) {
            "next" == t ? (currentGalleryPage++, currentGalleryPage > totalPage && (currentGalleryPage = 0)) : "previous" == t ? (currentGalleryPage--, currentGalleryPage < 0 && (currentGalleryPage = totalPage)) : currentGalleryPage = t, slide_speed = "next" == t || "previous" == t ? settings.animation_speed : 0, slide_to = currentGalleryPage * (itemsPerPage * itemWidth), $pp_gallery.find("ul").animate({
                left: -slide_to
            }, slide_speed)
        }, t.prettyPhoto.startSlideshow = function() {
            void 0 === d ? ($pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").click(function() {
                return t.prettyPhoto.stopSlideshow(), !1
            }), d = setInterval(t.prettyPhoto.startSlideshow, settings.slideshow)) : t.prettyPhoto.changePage("next")
        }, t.prettyPhoto.stopSlideshow = function() {
            $pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").click(function() {
                return t.prettyPhoto.startSlideshow(), !1
            }), clearInterval(d), d = void 0
        }, t.prettyPhoto.close = function() {
            $pp_overlay.is(":animated") || (t.prettyPhoto.stopSlideshow(), $pp_pic_holder.stop().find("object,embed").css("visibility", "hidden"), t("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed, function() {
                t(this).remove()
            }), $pp_overlay.fadeOut(settings.animation_speed, function() {
                settings.hideflash && t("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "visible"), t(this).remove(), t(window).unbind("scroll.prettyphoto"), -1 !== location.href.indexOf("#prettyPhoto") && (location.hash = "prettyPhoto"), settings.callback(), doresize = !0, a = !1, delete settings
            }))
        }, !pp_alreadyInitialized && e() && (pp_alreadyInitialized = !0, hashIndex = e(), hashRel = hashIndex, hashIndex = hashIndex.substring(hashIndex.indexOf("/") + 1, hashIndex.length - 1), hashRel = hashRel.substring(0, hashRel.indexOf("/")), setTimeout(function() {
            t("a[" + p.hook + "^='" + hashRel + "']:eq(" + hashIndex + ")").trigger("click")
        }, 50)), this.unbind("click.prettyphoto").bind("click.prettyphoto", t.prettyPhoto.initialize)
    }
}(jQuery);
var pp_alreadyInitialized = !1;
! function() {
    var t = !1;
    window.JQClass = function() {}, JQClass.classes = {}, JQClass.extend = function e(i) {
        var s = this.prototype;
        t = !0;
        var n = new this;
        t = !1;
        for (var o in i) n[o] = "function" == typeof i[o] && "function" == typeof s[o] ? function(t, e) {
            return function() {
                var i = this._super;
                this._super = function(e) {
                    return s[t].apply(this, e || [])
                };
                var n = e.apply(this, arguments);
                return this._super = i, n
            }
        }(o, i[o]) : i[o];

        function a() {
            !t && this._init && this._init.apply(this, arguments)
        }
        return a.prototype = n, a.prototype.constructor = a, a.extend = e, a
    }
}(),
function($) {
    function camelCase(t) {
        return t.replace(/-([a-z])/g, function(t, e) {
            return e.toUpperCase()
        })
    }
    JQClass.classes.JQPlugin = JQClass.extend({
        name: "plugin",
        defaultOptions: {},
        regionalOptions: {},
        _getters: [],
        _getMarker: function() {
            return "is-" + this.name
        },
        _init: function() {
            $.extend(this.defaultOptions, this.regionalOptions && this.regionalOptions[""] || {});
            var t = camelCase(this.name);
            $[t] = this, $.fn[t] = function(e) {
                var i = Array.prototype.slice.call(arguments, 1);
                return $[t]._isNotChained(e, i) ? $[t][e].apply($[t], [this[0]].concat(i)) : this.each(function() {
                    if ("string" == typeof e) {
                        if ("_" === e[0] || !$[t][e]) throw "Unknown method: " + e;
                        $[t][e].apply($[t], [this].concat(i))
                    } else $[t]._attach(this, e)
                })
            }
        },
        setDefaults: function(t) {
            $.extend(this.defaultOptions, t || {})
        },
        _isNotChained: function(t, e) {
            return "option" === t && (0 === e.length || 1 === e.length && "string" == typeof e[0]) || $.inArray(t, this._getters) > -1
        },
        _attach: function(t, e) {
            if (!(t = $(t)).hasClass(this._getMarker())) {
                t.addClass(this._getMarker()), e = $.extend({}, this.defaultOptions, this._getMetadata(t), e || {});
                var i = $.extend({
                    name: this.name,
                    elem: t,
                    options: e
                }, this._instSettings(t, e));
                t.data(this.name, i), this._postAttach(t, i), this.option(t, e)
            }
        },
        _instSettings: function(t, e) {
            return {}
        },
        _postAttach: function(t, e) {},
        _getMetadata: function(d) {
            try {
                var f = d.data(this.name.toLowerCase()) || "";
                f = f.replace(/'/g, '"'), f = f.replace(/([a-zA-Z0-9]+):/g, function(t, e, i) {
                    var s = f.substring(0, i).match(/"/g);
                    return s && s.length % 2 != 0 ? e + ":" : '"' + e + '":'
                }), f = $.parseJSON("{" + f + "}");
                for (var g in f) {
                    var h = f[g];
                    "string" == typeof h && h.match(/^new Date\((.*)\)$/) && (f[g] = eval(h))
                }
                return f
            } catch (t) {
                return {}
            }
        },
        _getInst: function(t) {
            return $(t).data(this.name) || {}
        },
        option: function(t, e, i) {
            var s = (t = $(t)).data(this.name);
            if (!e || "string" == typeof e && null == i) return (n = (s || {}).options) && e ? n[e] : n;
            if (t.hasClass(this._getMarker())) {
                var n = e || {};
                "string" == typeof e && ((n = {})[e] = i), this._optionsChanged(t, s, n), $.extend(s.options, n)
            }
        },
        _optionsChanged: function(t, e, i) {},
        destroy: function(t) {
            (t = $(t)).hasClass(this._getMarker()) && (this._preDestroy(t, this._getInst(t)), t.removeData(this.name).removeClass(this._getMarker()))
        },
        _preDestroy: function(t, e) {}
    }), $.JQPlugin = {
        createPlugin: function(t, e) {
            "object" == typeof t && (e = t, t = "JQPlugin"), t = camelCase(t);
            var i = camelCase(e.name);
            JQClass.classes[i] = JQClass.classes[t].extend(e), new JQClass.classes[i]
        }
    }
}(jQuery),
function(t) {
    var e = "countdown";
    t.JQPlugin.createPlugin({
        name: e,
        defaultOptions: {
            until: null,
            since: null,
            timezone: null,
            serverSync: null,
            format: "dHMS",
            layout: "",
            compact: !1,
            padZeroes: !1,
            significant: 0,
            description: "",
            expiryUrl: "",
            expiryText: "",
            alwaysExpire: !1,
            onExpiry: null,
            onTick: null,
            tickInterval: 1
        },
        regionalOptions: {
            "": {
                labels: ["Years", "Months", "Weeks", "Days", "Hours", "Minutes", "Seconds"],
                labels1: ["Year", "Month", "Week", "Day", "Hour", "Minute", "Second"],
                compactLabels: ["y", "m", "w", "d"],
                whichLabels: null,
                digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
                timeSeparator: ":",
                isRTL: !1
            }
        },
        _getters: ["getTimes"],
        _rtlClass: e + "-rtl",
        _sectionClass: e + "-section",
        _amountClass: e + "-amount",
        _periodClass: e + "-period",
        _rowClass: e + "-row",
        _holdingClass: e + "-holding",
        _showClass: e + "-show",
        _descrClass: e + "-descr",
        _timerElems: [],
        _init: function() {
            var e = this;
            this._super(), this._serverSyncs = [];
            var i = "function" == typeof Date.now ? Date.now : function() {
                    return (new Date).getTime()
                },
                s = window.performance && "function" == typeof window.performance.now;
            var n = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || null,
                o = 0;
            !n || t.noRequestAnimationFrame ? (t.noRequestAnimationFrame = null, setInterval(function() {
                e._updateElems()
            }, 980)) : (o = window.animationStartTime || window.webkitAnimationStartTime || window.mozAnimationStartTime || window.oAnimationStartTime || window.msAnimationStartTime || i(), n(function t(a) {
                var r = a < 1e12 ? s ? performance.now() + performance.timing.navigationStart : i() : a || i();
                r - o >= 1e3 && (e._updateElems(), o = r), n(t)
            }))
        },
        UTCDate: function(t, e, i, s, n, o, a, r) {
            "object" == typeof e && e.constructor == Date && (r = e.getMilliseconds(), a = e.getSeconds(), o = e.getMinutes(), n = e.getHours(), s = e.getDate(), i = e.getMonth(), e = e.getFullYear());
            var l = new Date;
            return l.setUTCFullYear(e), l.setUTCDate(1), l.setUTCMonth(i || 0), l.setUTCDate(s || 1), l.setUTCHours(n || 0), l.setUTCMinutes((o || 0) - (Math.abs(t) < 30 ? 60 * t : t)), l.setUTCSeconds(a || 0), l.setUTCMilliseconds(r || 0), l
        },
        periodsToSeconds: function(t) {
            return 31557600 * t[0] + 2629800 * t[1] + 604800 * t[2] + 86400 * t[3] + 3600 * t[4] + 60 * t[5] + t[6]
        },
        resync: function() {
            var e = this;
            t("." + this._getMarker()).each(function() {
                var i = t.data(this, e.name);
                if (i.options.serverSync) {
                    for (var s = null, n = 0; n < e._serverSyncs.length; n++)
                        if (e._serverSyncs[n][0] == i.options.serverSync) {
                            s = e._serverSyncs[n];
                            break
                        }
                    if (null == s[2]) {
                        var o = t.isFunction(i.options.serverSync) ? i.options.serverSync.apply(this, []) : null;
                        s[2] = (o ? (new Date).getTime() - o.getTime() : 0) - s[1]
                    }
                    i._since && i._since.setMilliseconds(i._since.getMilliseconds() + s[2]), i._until.setMilliseconds(i._until.getMilliseconds() + s[2])
                }
            });
            for (var i = 0; i < e._serverSyncs.length; i++) null != e._serverSyncs[i][2] && (e._serverSyncs[i][1] += e._serverSyncs[i][2], delete e._serverSyncs[i][2])
        },
        _instSettings: function(t, e) {
            return {
                _periods: [0, 0, 0, 0, 0, 0, 0]
            }
        },
        _addElem: function(t) {
            this._hasElem(t) || this._timerElems.push(t)
        },
        _hasElem: function(e) {
            return t.inArray(e, this._timerElems) > -1
        },
        _removeElem: function(e) {
            this._timerElems = t.map(this._timerElems, function(t) {
                return t == e ? null : t
            })
        },
        _updateElems: function() {
            for (var t = this._timerElems.length - 1; t >= 0; t--) this._updateCountdown(this._timerElems[t])
        },
        _optionsChanged: function(e, i, s) {
            s.layout && (s.layout = s.layout.replace(/&lt;/g, "<").replace(/&gt;/g, ">")), this._resetExtraLabels(i.options, s);
            var n = i.options.timezone != s.timezone;
            t.extend(i.options, s), this._adjustSettings(e, i, null != s.until || null != s.since || n);
            var o = new Date;
            (i._since && i._since < o || i._until && i._until > o) && this._addElem(e[0]), this._updateCountdown(e, i)
        },
        _updateCountdown: function(e, i) {
            if (e = e.jquery ? e : t(e), i = i || this._getInst(e)) {
                if (e.html(this._generateHTML(i)).toggleClass(this._rtlClass, i.options.isRTL), t.isFunction(i.options.onTick)) {
                    var s = "lap" != i._hold ? i._periods : this._calculatePeriods(i, i._show, i.options.significant, new Date);
                    1 != i.options.tickInterval && this.periodsToSeconds(s) % i.options.tickInterval != 0 || i.options.onTick.apply(e[0], [s])
                }
                if ("pause" != i._hold && (i._since ? i._now.getTime() < i._since.getTime() : i._now.getTime() >= i._until.getTime()) && !i._expiring) {
                    if (i._expiring = !0, this._hasElem(e[0]) || i.options.alwaysExpire) {
                        if (this._removeElem(e[0]), t.isFunction(i.options.onExpiry) && i.options.onExpiry.apply(e[0], []), i.options.expiryText) {
                            var n = i.options.layout;
                            i.options.layout = i.options.expiryText, this._updateCountdown(e[0], i), i.options.layout = n
                        }
                        i.options.expiryUrl && (window.location = i.options.expiryUrl)
                    }
                    i._expiring = !1
                } else "pause" == i._hold && this._removeElem(e[0])
            }
        },
        _resetExtraLabels: function(t, e) {
            for (var i in e) i.match(/[Ll]abels[02-9]|compactLabels1/) && (t[i] = e[i]);
            for (var i in t) i.match(/[Ll]abels[02-9]|compactLabels1/) && void 0 === e[i] && (t[i] = null)
        },
        _adjustSettings: function(e, i, s) {
            for (var n = null, o = 0; o < this._serverSyncs.length; o++)
                if (this._serverSyncs[o][0] == i.options.serverSync) {
                    n = this._serverSyncs[o][1];
                    break
                }
            if (null != n) var a = i.options.serverSync ? n : 0,
                r = new Date;
            else {
                var l = t.isFunction(i.options.serverSync) ? i.options.serverSync.apply(e[0], []) : null;
                r = new Date, a = l ? r.getTime() - l.getTime() : 0;
                this._serverSyncs.push([i.options.serverSync, a])
            }
            var p = i.options.timezone;
            p = null == p ? -r.getTimezoneOffset() : p, (s || !s && null == i._until && null == i._since) && (i._since = i.options.since, null != i._since && (i._since = this.UTCDate(p, this._determineTime(i._since, null)), i._since && a && i._since.setMilliseconds(i._since.getMilliseconds() + a)), i._until = this.UTCDate(p, this._determineTime(i.options.until, r)), a && i._until.setMilliseconds(i._until.getMilliseconds() + a)), i._show = this._determineShow(i)
        },
        _preDestroy: function(t, e) {
            this._removeElem(t[0]), t.empty()
        },
        pause: function(t) {
            this._hold(t, "pause")
        },
        lap: function(t) {
            this._hold(t, "lap")
        },
        resume: function(t) {
            this._hold(t, null)
        },
        toggle: function(e) {
            this[(t.data(e, this.name) || {})._hold ? "resume" : "pause"](e)
        },
        toggleLap: function(e) {
            this[(t.data(e, this.name) || {})._hold ? "resume" : "lap"](e)
        },
        _hold: function(e, i) {
            var s = t.data(e, this.name);
            if (s) {
                if ("pause" == s._hold && !i) {
                    s._periods = s._savePeriods;
                    var n = s._since ? "-" : "+";
                    s[s._since ? "_since" : "_until"] = this._determineTime(n + s._periods[0] + "y" + n + s._periods[1] + "o" + n + s._periods[2] + "w" + n + s._periods[3] + "d" + n + s._periods[4] + "h" + n + s._periods[5] + "m" + n + s._periods[6] + "s"), this._addElem(e)
                }
                s._hold = i, s._savePeriods = "pause" == i ? s._periods : null, t.data(e, this.name, s), this._updateCountdown(e, s)
            }
        },
        getTimes: function(e) {
            var i = t.data(e, this.name);
            return i ? "pause" == i._hold ? i._savePeriods : i._hold ? this._calculatePeriods(i, i._show, i.options.significant, new Date) : i._periods : null
        },
        _determineTime: function(t, e) {
            var i, s, n = this,
                o = null == t ? e : "string" == typeof t ? function(t) {
                    t = t.toLowerCase();
                    for (var e = new Date, i = e.getFullYear(), s = e.getMonth(), o = e.getDate(), a = e.getHours(), r = e.getMinutes(), l = e.getSeconds(), p = /([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g, _ = p.exec(t); _;) {
                        switch (_[2] || "s") {
                            case "s":
                                l += parseInt(_[1], 10);
                                break;
                            case "m":
                                r += parseInt(_[1], 10);
                                break;
                            case "h":
                                a += parseInt(_[1], 10);
                                break;
                            case "d":
                                o += parseInt(_[1], 10);
                                break;
                            case "w":
                                o += 7 * parseInt(_[1], 10);
                                break;
                            case "o":
                                s += parseInt(_[1], 10), o = Math.min(o, n._getDaysInMonth(i, s));
                                break;
                            case "y":
                                i += parseInt(_[1], 10), o = Math.min(o, n._getDaysInMonth(i, s))
                        }
                        _ = p.exec(t)
                    }
                    return new Date(i, s, o, a, r, l, 0)
                }(t) : "number" == typeof t ? (i = t, (s = new Date).setTime(s.getTime() + 1e3 * i), s) : t;
            return o && o.setMilliseconds(0), o
        },
        _getDaysInMonth: function(t, e) {
            return 32 - new Date(t, e, 32).getDate()
        },
        _normalLabels: function(t) {
            return t
        },
        _generateHTML: function(e) {
            var i = this;
            e._periods = e._hold ? e._periods : this._calculatePeriods(e, e._show, e.options.significant, new Date);
            for (var s = !1, n = 0, o = e.options.significant, a = t.extend({}, e._show), r = 0; r <= 6; r++) s |= "?" == e._show[r] && e._periods[r] > 0, a[r] = "?" != e._show[r] || s ? e._show[r] : null, n += a[r] ? 1 : 0, o -= e._periods[r] > 0 ? 1 : 0;
            var l = [!1, !1, !1, !1, !1, !1, !1];
            for (r = 6; r >= 0; r--) e._show[r] && (e._periods[r] ? l[r] = !0 : (l[r] = o > 0, o--));
            var p = e.options.compact ? e.options.compactLabels : e.options.labels,
                _ = e.options.whichLabels || this._normalLabels,
                c = function(t) {
                    var s = e.options["compactLabels" + _(e._periods[t])];
                    return a[t] ? i._translateDigits(e, e._periods[t]) + (s ? s[t] : p[t]) + " " : ""
                },
                u = e.options.padZeroes ? 2 : 1,
                h = function(t) {
                    var s = e.options["labels" + _(e._periods[t])];
                    return !e.options.significant && a[t] || e.options.significant && l[t] ? '<span class="' + i._sectionClass + '"><span class="' + i._amountClass + '">' + i._minDigits(e, e._periods[t], u) + '</span><span class="' + i._periodClass + '">' + (s ? s[t] : p[t]) + "</span></span>" : ""
                };
            return e.options.layout ? this._buildLayout(e, a, e.options.layout, e.options.compact, e.options.significant, l) : (e.options.compact ? '<span class="' + this._rowClass + " " + this._amountClass + (e._hold ? " " + this._holdingClass : "") + '">' + c(0) + c(1) + c(2) + c(3) + (a[4] ? this._minDigits(e, e._periods[4], 2) : "") + (a[5] ? (a[4] ? e.options.timeSeparator : "") + this._minDigits(e, e._periods[5], 2) : "") + (a[6] ? (a[4] || a[5] ? e.options.timeSeparator : "") + this._minDigits(e, e._periods[6], 2) : "") : '<span class="' + this._rowClass + " " + this._showClass + (e.options.significant || n) + (e._hold ? " " + this._holdingClass : "") + '">' + h(0) + h(1) + h(2) + h(3) + h(4) + h(5) + h(6)) + "</span>" + (e.options.description ? '<span class="' + this._rowClass + " " + this._descrClass + '">' + e.options.description + "</span>" : "")
        },
        _buildLayout: function(e, i, s, n, o, a) {
            for (var r = e.options[n ? "compactLabels" : "labels"], l = e.options.whichLabels || this._normalLabels, p = function(t) {
                    return (e.options[(n ? "compactLabels" : "labels") + l(e._periods[t])] || r)[t]
                }, _ = function(t, i) {
                    return e.options.digits[Math.floor(t / i) % 10]
                }, c = {
                    desc: e.options.description,
                    sep: e.options.timeSeparator,
                    yl: p(0),
                    yn: this._minDigits(e, e._periods[0], 1),
                    ynn: this._minDigits(e, e._periods[0], 2),
                    ynnn: this._minDigits(e, e._periods[0], 3),
                    y1: _(e._periods[0], 1),
                    y10: _(e._periods[0], 10),
                    y100: _(e._periods[0], 100),
                    y1000: _(e._periods[0], 1e3),
                    ol: p(1),
                    on: this._minDigits(e, e._periods[1], 1),
                    onn: this._minDigits(e, e._periods[1], 2),
                    onnn: this._minDigits(e, e._periods[1], 3),
                    o1: _(e._periods[1], 1),
                    o10: _(e._periods[1], 10),
                    o100: _(e._periods[1], 100),
                    o1000: _(e._periods[1], 1e3),
                    wl: p(2),
                    wn: this._minDigits(e, e._periods[2], 1),
                    wnn: this._minDigits(e, e._periods[2], 2),
                    wnnn: this._minDigits(e, e._periods[2], 3),
                    w1: _(e._periods[2], 1),
                    w10: _(e._periods[2], 10),
                    w100: _(e._periods[2], 100),
                    w1000: _(e._periods[2], 1e3),
                    dl: p(3),
                    dn: this._minDigits(e, e._periods[3], 1),
                    dnn: this._minDigits(e, e._periods[3], 2),
                    dnnn: this._minDigits(e, e._periods[3], 3),
                    d1: _(e._periods[3], 1),
                    d10: _(e._periods[3], 10),
                    d100: _(e._periods[3], 100),
                    d1000: _(e._periods[3], 1e3),
                    hl: p(4),
                    hn: this._minDigits(e, e._periods[4], 1),
                    hnn: this._minDigits(e, e._periods[4], 2),
                    hnnn: this._minDigits(e, e._periods[4], 3),
                    h1: _(e._periods[4], 1),
                    h10: _(e._periods[4], 10),
                    h100: _(e._periods[4], 100),
                    h1000: _(e._periods[4], 1e3),
                    ml: p(5),
                    mn: this._minDigits(e, e._periods[5], 1),
                    mnn: this._minDigits(e, e._periods[5], 2),
                    mnnn: this._minDigits(e, e._periods[5], 3),
                    m1: _(e._periods[5], 1),
                    m10: _(e._periods[5], 10),
                    m100: _(e._periods[5], 100),
                    m1000: _(e._periods[5], 1e3),
                    sl: p(6),
                    sn: this._minDigits(e, e._periods[6], 1),
                    snn: this._minDigits(e, e._periods[6], 2),
                    snnn: this._minDigits(e, e._periods[6], 3),
                    s1: _(e._periods[6], 1),
                    s10: _(e._periods[6], 10),
                    s100: _(e._periods[6], 100),
                    s1000: _(e._periods[6], 1e3)
                }, u = s, h = 0; h <= 6; h++) {
                var d = "yowdhms".charAt(h),
                    m = new RegExp("\\{" + d + "<\\}([\\s\\S]*)\\{" + d + ">\\}", "g");
                u = u.replace(m, !o && i[h] || o && a[h] ? "$1" : "")
            }
            return t.each(c, function(t, e) {
                var i = new RegExp("\\{" + t + "\\}", "g");
                u = u.replace(i, e)
            }), u
        },
        _minDigits: function(t, e, i) {
            return (e = "" + e).length >= i ? this._translateDigits(t, e) : (e = "0000000000" + e, this._translateDigits(t, e.substr(e.length - i)))
        },
        _translateDigits: function(t, e) {
            return ("" + e).replace(/[0-9]/g, function(e) {
                return t.options.digits[e]
            })
        },
        _determineShow: function(t) {
            var e = t.options.format,
                i = [];
            return i[0] = e.match("y") ? "?" : e.match("Y") ? "!" : null, i[1] = e.match("o") ? "?" : e.match("O") ? "!" : null, i[2] = e.match("w") ? "?" : e.match("W") ? "!" : null, i[3] = e.match("d") ? "?" : e.match("D") ? "!" : null, i[4] = e.match("h") ? "?" : e.match("H") ? "!" : null, i[5] = e.match("m") ? "?" : e.match("M") ? "!" : null, i[6] = e.match("s") ? "?" : e.match("S") ? "!" : null, i
        },
        _calculatePeriods: function(t, e, i, s) {
            t._now = s, t._now.setMilliseconds(0);
            var n = new Date(t._now.getTime());
            t._since ? s.getTime() < t._since.getTime() ? t._now = s = n : s = t._since : (n.setTime(t._until.getTime()), s.getTime() > t._until.getTime() && (t._now = s = n));
            var o = [0, 0, 0, 0, 0, 0, 0];
            if (e[0] || e[1]) {
                var a = this._getDaysInMonth(s.getFullYear(), s.getMonth()),
                    r = this._getDaysInMonth(n.getFullYear(), n.getMonth()),
                    l = n.getDate() == s.getDate() || n.getDate() >= Math.min(a, r) && s.getDate() >= Math.min(a, r),
                    p = function(t) {
                        return 60 * (60 * t.getHours() + t.getMinutes()) + t.getSeconds()
                    },
                    _ = Math.max(0, 12 * (n.getFullYear() - s.getFullYear()) + n.getMonth() - s.getMonth() + (n.getDate() < s.getDate() && !l || l && p(n) < p(s) ? -1 : 0));
                o[0] = e[0] ? Math.floor(_ / 12) : 0, o[1] = e[1] ? _ - 12 * o[0] : 0;
                var c = (s = new Date(s.getTime())).getDate() == a,
                    u = this._getDaysInMonth(s.getFullYear() + o[0], s.getMonth() + o[1]);
                s.getDate() > u && s.setDate(u), s.setFullYear(s.getFullYear() + o[0]), s.setMonth(s.getMonth() + o[1]), c && s.setDate(u)
            }
            var h = Math.floor((n.getTime() - s.getTime()) / 1e3),
                d = function(t, i) {
                    o[t] = e[t] ? Math.floor(h / i) : 0, h -= o[t] * i
                };
            if (d(2, 604800), d(3, 86400), d(4, 3600), d(5, 60), d(6, 1), h > 0 && !t._since)
                for (var m = [1, 12, 4.3482, 7, 24, 60, 60], g = 6, f = 1, w = 6; w >= 0; w--) e[w] && (o[g] >= f && (o[g] = 0, h = 1), h > 0 && (o[w]++, h = 0, g = w, f = 1)), f *= m[w];
            if (i)
                for (w = 0; w <= 6; w++) i && o[w] ? i-- : i || (o[w] = 0);
            return o
        }
    })
}(jQuery);
(function(t) {
    function e() {}

    function i(t) {
        if (t) {
            var i = "undefined" == typeof console ? e : function(t) {
                console.error(t)
            };
            return t.bridget = function(e, n) {
                var r, s, a;
                (a = n).prototype.option || (a.prototype.option = function(e) {
                    t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
                }), r = e, s = n, t.fn[r] = function(e) {
                    if ("string" == typeof e) {
                        for (var n = o.call(arguments, 1), a = 0, u = this.length; u > a; a++) {
                            var p = this[a],
                                h = t.data(p, r);
                            if (h)
                                if (t.isFunction(h[e]) && "_" !== e.charAt(0)) {
                                    var f = h[e].apply(h, n);
                                    if (void 0 !== f) return f
                                } else i("no such method '" + e + "' for " + r + " instance");
                            else i("cannot call methods on " + r + " prior to initialization; attempted to call '" + e + "'")
                        }
                        return this
                    }
                    return this.each(function() {
                        var i = t.data(this, r);
                        i ? (i.option(e), i._init()) : (i = new s(this, e), t.data(this, r, i))
                    })
                }
            }, t.bridget
        }
    }
    var o = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : "object" == typeof exports ? i(require("jquery")) : i(t.jQuery)
})(window),
function(t) {
    function e(e) {
        var i = t.event;
        return i.target = i.target || i.srcElement || e, i
    }
    var i = document.documentElement,
        o = function() {};
    i.addEventListener ? o = function(t, e, i) {
        t.addEventListener(e, i, !1)
    } : i.attachEvent && (o = function(t, i, o) {
        t[i + o] = o.handleEvent ? function() {
            var i = e(t);
            o.handleEvent.call(o, i)
        } : function() {
            var i = e(t);
            o.call(t, i)
        }, t.attachEvent("on" + i, t[i + o])
    });
    var n = function() {};
    i.removeEventListener ? n = function(t, e, i) {
        t.removeEventListener(e, i, !1)
    } : i.detachEvent && (n = function(t, e, i) {
        t.detachEvent("on" + e, t[e + i]);
        try {
            delete t[e + i]
        } catch (o) {
            t[e + i] = void 0
        }
    });
    var r = {
        bind: o,
        unbind: n
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? module.exports = r : t.eventie = r
}(window),
function() {
    function t() {}

    function e(t, e) {
        for (var i = t.length; i--;)
            if (t[i].listener === e) return i;
        return -1
    }

    function i(t) {
        return function() {
            return this[t].apply(this, arguments)
        }
    }
    var o = t.prototype,
        n = this,
        r = n.EventEmitter;
    o.getListeners = function(t) {
        var e, i, o = this._getEvents();
        if (t instanceof RegExp) {
            e = {};
            for (i in o) o.hasOwnProperty(i) && t.test(i) && (e[i] = o[i])
        } else e = o[t] || (o[t] = []);
        return e
    }, o.flattenListeners = function(t) {
        var e, i = [];
        for (e = 0; t.length > e; e += 1) i.push(t[e].listener);
        return i
    }, o.getListenersAsObject = function(t) {
        var e, i = this.getListeners(t);
        return i instanceof Array && ((e = {})[t] = i), e || i
    }, o.addListener = function(t, i) {
        var o, n = this.getListenersAsObject(t),
            r = "object" == typeof i;
        for (o in n) n.hasOwnProperty(o) && -1 === e(n[o], i) && n[o].push(r ? i : {
            listener: i,
            once: !1
        });
        return this
    }, o.on = i("addListener"), o.addOnceListener = function(t, e) {
        return this.addListener(t, {
            listener: e,
            once: !0
        })
    }, o.once = i("addOnceListener"), o.defineEvent = function(t) {
        return this.getListeners(t), this
    }, o.defineEvents = function(t) {
        for (var e = 0; t.length > e; e += 1) this.defineEvent(t[e]);
        return this
    }, o.removeListener = function(t, i) {
        var o, n, r = this.getListenersAsObject(t);
        for (n in r) r.hasOwnProperty(n) && (o = e(r[n], i), -1 !== o && r[n].splice(o, 1));
        return this
    }, o.off = i("removeListener"), o.addListeners = function(t, e) {
        return this.manipulateListeners(!1, t, e)
    }, o.removeListeners = function(t, e) {
        return this.manipulateListeners(!0, t, e)
    }, o.manipulateListeners = function(t, e, i) {
        var o, n, r = t ? this.removeListener : this.addListener,
            s = t ? this.removeListeners : this.addListeners;
        if ("object" != typeof e || e instanceof RegExp)
            for (o = i.length; o--;) r.call(this, e, i[o]);
        else
            for (o in e) e.hasOwnProperty(o) && (n = e[o]) && ("function" == typeof n ? r.call(this, o, n) : s.call(this, o, n));
        return this
    }, o.removeEvent = function(t) {
        var e, i = typeof t,
            o = this._getEvents();
        if ("string" === i) delete o[t];
        else if (t instanceof RegExp)
            for (e in o) o.hasOwnProperty(e) && t.test(e) && delete o[e];
        else delete this._events;
        return this
    }, o.removeAllListeners = i("removeEvent"), o.emitEvent = function(t, e) {
        var i, o, n, r, s = this.getListenersAsObject(t);
        for (n in s)
            if (s.hasOwnProperty(n))
                for (o = s[n].length; o--;) i = s[n][o], !0 === i.once && this.removeListener(t, i.listener), r = i.listener.apply(this, e || []), r === this._getOnceReturnValue() && this.removeListener(t, i.listener);
        return this
    }, o.trigger = i("emitEvent"), o.emit = function(t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e)
    }, o.setOnceReturnValue = function(t) {
        return this._onceReturnValue = t, this
    }, o._getOnceReturnValue = function() {
        return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
    }, o._getEvents = function() {
        return this._events || (this._events = {})
    }, t.noConflict = function() {
        return n.EventEmitter = r, t
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return t
    }) : "object" == typeof module && module.exports ? module.exports = t : n.EventEmitter = t
}.call(this),
    function(t) {
        function e(t) {
            if (t) {
                if ("string" == typeof o[t]) return t;
                t = t.charAt(0).toUpperCase() + t.slice(1);
                for (var e, n = 0, r = i.length; r > n; n++)
                    if (e = i[n] + t, "string" == typeof o[e]) return e
            }
        }
        var i = "Webkit Moz ms Ms O".split(" "),
            o = document.documentElement.style;
        "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
            return e
        }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
    }(window),
    function(t) {
        function e(t) {
            var e = parseFloat(t);
            return -1 === t.indexOf("%") && !isNaN(e) && e
        }

        function i(i) {
            function r(e, i) {
                if (t.getComputedStyle || -1 === i.indexOf("%")) return i;
                var o = e.style,
                    n = o.left,
                    r = e.runtimeStyle,
                    s = r && r.left;
                return s && (r.left = e.currentStyle.left), o.left = i, i = o.pixelLeft, o.left = n, s && (r.left = s), i
            }
            var s, a, u, p = !1;
            return function(h) {
                if (function() {
                        if (!p) {
                            p = !0;
                            var n = t.getComputedStyle;
                            if (d = n ? function(t) {
                                    return n(t, null)
                                } : function(t) {
                                    return t.currentStyle
                                }, s = function(t) {
                                    var e = d(t);
                                    return e || o("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e
                                }, a = i("boxSizing")) {
                                var r = document.createElement("div");
                                r.style.width = "200px", r.style.padding = "1px 2px 3px 4px", r.style.borderStyle = "solid", r.style.borderWidth = "1px 2px 3px 4px", r.style[a] = "border-box";
                                var h = document.body || document.documentElement;
                                h.appendChild(r);
                                var f = s(r);
                                u = 200 === e(f.width), h.removeChild(r)
                            }
                        }
                        var d
                    }(), "string" == typeof h && (h = document.querySelector(h)), h && "object" == typeof h && h.nodeType) {
                    var f = s(h);
                    if ("none" === f.display) return function() {
                        for (var t = {
                                width: 0,
                                height: 0,
                                innerWidth: 0,
                                innerHeight: 0,
                                outerWidth: 0,
                                outerHeight: 0
                            }, e = 0, i = n.length; i > e; e++) t[n[e]] = 0;
                        return t
                    }();
                    var d = {};
                    d.width = h.offsetWidth, d.height = h.offsetHeight;
                    for (var l = d.isBorderBox = !(!a || !f[a] || "border-box" !== f[a]), c = 0, y = n.length; y > c; c++) {
                        var m = n[c],
                            g = f[m];
                        g = r(h, g);
                        var v = parseFloat(g);
                        d[m] = isNaN(v) ? 0 : v
                    }
                    var _ = d.paddingLeft + d.paddingRight,
                        I = d.paddingTop + d.paddingBottom,
                        z = d.marginLeft + d.marginRight,
                        L = d.marginTop + d.marginBottom,
                        x = d.borderLeftWidth + d.borderRightWidth,
                        E = d.borderTopWidth + d.borderBottomWidth,
                        b = l && u,
                        S = e(f.width);
                    !1 !== S && (d.width = S + (b ? 0 : _ + x));
                    var T = e(f.height);
                    return !1 !== T && (d.height = T + (b ? 0 : I + E)), d.innerWidth = d.width - (_ + x), d.innerHeight = d.height - (I + E), d.outerWidth = d.width + z, d.outerHeight = d.height + L, d
                }
            }
        }
        var o = "undefined" == typeof console ? function() {} : function(t) {
                console.error(t)
            },
            n = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], i) : "object" == typeof exports ? module.exports = i(require("desandro-get-style-property")) : t.getSize = i(t.getStyleProperty)
    }(window),
    function(t) {
        function e(t) {
            "function" == typeof t && (e.isReady ? t() : s.push(t))
        }

        function i(t) {
            var i = "readystatechange" === t.type && "complete" !== r.readyState;
            e.isReady || i || o()
        }

        function o() {
            e.isReady = !0;
            for (var t = 0, i = s.length; i > t; t++) {
                (0, s[t])()
            }
        }

        function n(n) {
            return "complete" === r.readyState ? o() : (n.bind(r, "DOMContentLoaded", i), n.bind(r, "readystatechange", i), n.bind(t, "load", i)), e
        }
        var r = t.document,
            s = [];
        e.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], n) : "object" == typeof exports ? module.exports = n(require("eventie")) : t.docReady = n(t.eventie)
    }(window),
    function(t) {
        function e(t, e) {
            return t[n](e)
        }

        function i(t) {
            t.parentNode || document.createDocumentFragment().appendChild(t)
        }
        var o, n = function() {
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], i = 0, o = e.length; o > i; i++) {
                var n = e[i] + "MatchesSelector";
                if (t[n]) return n
            }
        }();
        if (n) {
            var r = e(document.createElement("div"), "div");
            o = r ? e : function(t, o) {
                return i(t), e(t, o)
            }
        } else o = function(t, e) {
            i(t);
            for (var o = t.parentNode.querySelectorAll(e), n = 0, r = o.length; r > n; n++)
                if (o[n] === t) return !0;
            return !1
        };
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
            return o
        }) : "object" == typeof exports ? module.exports = o : window.matchesSelector = o
    }(Element.prototype),
    function(t, e) {
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function(i, o) {
            return e(t, i, o)
        }) : "object" == typeof exports ? module.exports = e(t, require("doc-ready"), require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.docReady, t.matchesSelector)
    }(window, function(t, e, i) {
        var o = {};
        o.extend = function(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }, o.modulo = function(t, e) {
            return (t % e + e) % e
        };
        var n = Object.prototype.toString;
        o.isArray = function(t) {
            return "[object Array]" == n.call(t)
        }, o.makeArray = function(t) {
            var e = [];
            if (o.isArray(t)) e = t;
            else if (t && "number" == typeof t.length)
                for (var i = 0, n = t.length; n > i; i++) e.push(t[i]);
            else e.push(t);
            return e
        }, o.indexOf = Array.prototype.indexOf ? function(t, e) {
            return t.indexOf(e)
        } : function(t, e) {
            for (var i = 0, o = t.length; o > i; i++)
                if (t[i] === e) return i;
            return -1
        }, o.removeFrom = function(t, e) {
            var i = o.indexOf(t, e); - 1 != i && t.splice(i, 1)
        }, o.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(t) {
            return t instanceof HTMLElement
        } : function(t) {
            return t && "object" == typeof t && 1 == t.nodeType && "string" == typeof t.nodeName
        }, o.setText = function() {
            var t;
            return function(e, i) {
                e[t = t || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText")] = i
            }
        }(), o.getParent = function(t, e) {
            for (; t != document.body;)
                if (t = t.parentNode, i(t, e)) return t
        }, o.getQueryElement = function(t) {
            return "string" == typeof t ? document.querySelector(t) : t
        }, o.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, o.filterFindElements = function(t, e) {
            for (var n = [], r = 0, s = (t = o.makeArray(t)).length; s > r; r++) {
                var a = t[r];
                if (o.isElement(a))
                    if (e) {
                        i(a, e) && n.push(a);
                        for (var u = a.querySelectorAll(e), p = 0, h = u.length; h > p; p++) n.push(u[p])
                    } else n.push(a)
            }
            return n
        }, o.debounceMethod = function(t, e, i) {
            var o = t.prototype[e],
                n = e + "Timeout";
            t.prototype[e] = function() {
                var t = this[n];
                t && clearTimeout(t);
                var e = arguments,
                    r = this;
                this[n] = setTimeout(function() {
                    o.apply(r, e), delete r[n]
                }, i || 100)
            }
        }, o.toDashed = function(t) {
            return t.replace(/(.)([A-Z])/g, function(t, e, i) {
                return e + "-" + i
            }).toLowerCase()
        };
        var r = t.console;
        return o.htmlInit = function(i, n) {
            e(function() {
                for (var e = o.toDashed(n), s = document.querySelectorAll(".js-" + e), a = "data-" + e + "-options", u = 0, p = s.length; p > u; u++) {
                    var h, f = s[u],
                        d = f.getAttribute(a);
                    try {
                        h = d && JSON.parse(d)
                    } catch (t) {
                        r && r.error("Error parsing " + a + " on " + f.nodeName.toLowerCase() + (f.id ? "#" + f.id : "") + ": " + t);
                        continue
                    }
                    var l = new i(f, h),
                        c = t.jQuery;
                    c && c.data(f, n, l)
                }
            })
        }, o
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function(i, o, n, r) {
            return e(t, i, o, n, r)
        }) : "object" == typeof exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (t.Outlayer = {}, t.Outlayer.Item = e(t, t.EventEmitter, t.getSize, t.getStyleProperty, t.fizzyUIUtils))
    }(window, function(t, e, i, o, n) {
        function r(t, e) {
            t && (this.element = t, this.layout = e, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }
        var s = t.getComputedStyle,
            a = s ? function(t) {
                return s(t, null)
            } : function(t) {
                return t.currentStyle
            },
            u = o("transition"),
            p = o("transform"),
            h = u && p,
            f = !!o("perspective"),
            d = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend",
                transition: "transitionend"
            }[u],
            l = ["transform", "transition", "transitionDuration", "transitionProperty"],
            c = function() {
                for (var t = {}, e = 0, i = l.length; i > e; e++) {
                    var n = l[e],
                        r = o(n);
                    r && r !== n && (t[n] = r)
                }
                return t
            }();
        n.extend(r.prototype, e.prototype), r.prototype._create = function() {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, r.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, r.prototype.getSize = function() {
            this.size = i(this.element)
        }, r.prototype.css = function(t) {
            var e = this.element.style;
            for (var i in t) {
                e[c[i] || i] = t[i]
            }
        }, r.prototype.getPosition = function() {
            var t = a(this.element),
                e = this.layout.options,
                i = e.isOriginLeft,
                o = e.isOriginTop,
                n = parseInt(t[i ? "left" : "right"], 10),
                r = parseInt(t[o ? "top" : "bottom"], 10);
            n = isNaN(n) ? 0 : n, r = isNaN(r) ? 0 : r;
            var s = this.layout.size;
            n -= i ? s.paddingLeft : s.paddingRight, r -= o ? s.paddingTop : s.paddingBottom, this.position.x = n, this.position.y = r
        }, r.prototype.layoutPosition = function() {
            var t = this.layout.size,
                e = this.layout.options,
                i = {},
                o = e.isOriginLeft ? "paddingLeft" : "paddingRight",
                n = e.isOriginLeft ? "left" : "right",
                r = e.isOriginLeft ? "right" : "left",
                s = this.position.x + t[o];
            s = e.percentPosition && !e.isHorizontal ? s / t.width * 100 + "%" : s + "px", i[n] = s, i[r] = "";
            var a = e.isOriginTop ? "paddingTop" : "paddingBottom",
                u = e.isOriginTop ? "top" : "bottom",
                p = e.isOriginTop ? "bottom" : "top",
                h = this.position.y + t[a];
            h = e.percentPosition && e.isHorizontal ? h / t.height * 100 + "%" : h + "px", i[u] = h, i[p] = "", this.css(i), this.emitEvent("layout", [this])
        };
        var y = f ? function(t, e) {
            return "translate3d(" + t + "px, " + e + "px, 0)"
        } : function(t, e) {
            return "translate(" + t + "px, " + e + "px)"
        };
        r.prototype._transitionTo = function(t, e) {
            this.getPosition();
            var i = this.position.x,
                o = this.position.y,
                n = parseInt(t, 10),
                r = parseInt(e, 10),
                s = n === this.position.x && r === this.position.y;
            if (this.setPosition(t, e), !s || this.isTransitioning) {
                var a = t - i,
                    u = e - o,
                    p = {},
                    h = this.layout.options;
                a = h.isOriginLeft ? a : -a, u = h.isOriginTop ? u : -u, p.transform = y(a, u), this.transition({
                    to: p,
                    onTransitionEnd: {
                        transform: this.layoutPosition
                    },
                    isCleaning: !0
                })
            } else this.layoutPosition()
        }, r.prototype.goTo = function(t, e) {
            this.setPosition(t, e), this.layoutPosition()
        }, r.prototype.moveTo = h ? r.prototype._transitionTo : r.prototype.goTo, r.prototype.setPosition = function(t, e) {
            this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
        }, r.prototype._nonTransition = function(t) {
            this.css(t.to), t.isCleaning && this._removeStyles(t.to);
            for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
        }, r.prototype._transition = function(t) {
            if (parseFloat(this.layout.options.transitionDuration)) {
                var e = this._transn;
                for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
                for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
                if (t.from) {
                    this.css(t.from);
                    this.element.offsetHeight;
                    null
                }
                this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
            } else this._nonTransition(t)
        };
        var m = p && n.toDashed(p) + ",opacity";
        r.prototype.enableTransition = function() {
            this.isTransitioning || (this.css({
                transitionProperty: m,
                transitionDuration: this.layout.options.transitionDuration
            }), this.element.addEventListener(d, this, !1))
        }, r.prototype.transition = r.prototype[u ? "_transition" : "_nonTransition"], r.prototype.onwebkitTransitionEnd = function(t) {
            this.ontransitionend(t)
        }, r.prototype.onotransitionend = function(t) {
            this.ontransitionend(t)
        };
        var g = {
            "-webkit-transform": "transform",
            "-moz-transform": "transform",
            "-o-transform": "transform"
        };
        r.prototype.ontransitionend = function(t) {
            if (t.target === this.element) {
                var e = this._transn,
                    i = g[t.propertyName] || t.propertyName;
                if (delete e.ingProperties[i], function(t) {
                        for (var e in t) return !1;
                        return !0
                    }(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd) e.onEnd[i].call(this), delete e.onEnd[i];
                this.emitEvent("transitionEnd", [this])
            }
        }, r.prototype.disableTransition = function() {
            this.removeTransitionStyles(), this.element.removeEventListener(d, this, !1), this.isTransitioning = !1
        }, r.prototype._removeStyles = function(t) {
            var e = {};
            for (var i in t) e[i] = "";
            this.css(e)
        };
        var v = {
            transitionProperty: "",
            transitionDuration: ""
        };
        return r.prototype.removeTransitionStyles = function() {
            this.css(v)
        }, r.prototype.removeElem = function() {
            this.element.parentNode.removeChild(this.element), this.css({
                display: ""
            }), this.emitEvent("remove", [this])
        }, r.prototype.remove = function() {
            if (u && parseFloat(this.layout.options.transitionDuration)) {
                var t = this;
                this.once("transitionEnd", function() {
                    t.removeElem()
                }), this.hide()
            } else this.removeElem()
        }, r.prototype.reveal = function() {
            delete this.isHidden, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {};
            e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
                from: t.hiddenStyle,
                to: t.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, r.prototype.onRevealTransitionEnd = function() {
            this.isHidden || this.emitEvent("reveal")
        }, r.prototype.getHideRevealTransitionEndProperty = function(t) {
            var e = this.layout.options[t];
            if (e.opacity) return "opacity";
            for (var i in e) return i
        }, r.prototype.hide = function() {
            this.isHidden = !0, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {};
            e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
                from: t.visibleStyle,
                to: t.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, r.prototype.onHideTransitionEnd = function() {
            this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
        }, r.prototype.destroy = function() {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, r
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, o, n, r, s) {
            return e(t, i, o, n, r, s)
        }) : "object" == typeof exports ? module.exports = e(t, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.eventie, t.EventEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
    }(window, function(t, e, i, o, n, r) {
        function s(t, e) {
            var i = n.getQueryElement(t);
            if (i) {
                this.element = i, u && (this.$element = u(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e);
                var o = ++h;
                this.element.outlayerGUID = o, f[o] = this, this._create(), this.options.isInitLayout && this.layout()
            } else a && a.error("Bad element for " + this.constructor.namespace + ": " + (i || t))
        }
        var a = t.console,
            u = t.jQuery,
            p = function() {},
            h = 0,
            f = {};
        return s.namespace = "outlayer", s.Item = r, s.defaults = {
            containerStyle: {
                position: "relative"
            },
            isInitLayout: !0,
            isOriginLeft: !0,
            isOriginTop: !0,
            isResizeBound: !0,
            isResizingContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        }, n.extend(s.prototype, i.prototype), s.prototype.option = function(t) {
            n.extend(this.options, t)
        }, s.prototype._create = function() {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
        }, s.prototype.reloadItems = function() {
            this.items = this._itemize(this.element.children)
        }, s.prototype._itemize = function(t) {
            for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0, r = e.length; r > n; n++) {
                var s = new i(e[n], this);
                o.push(s)
            }
            return o
        }, s.prototype._filterFindItemElements = function(t) {
            return n.filterFindElements(t, this.options.itemSelector)
        }, s.prototype.getItemElements = function() {
            for (var t = [], e = 0, i = this.items.length; i > e; e++) t.push(this.items[e].element);
            return t
        }, s.prototype.layout = function() {
            this._resetLayout(), this._manageStamps();
            var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, t), this._isLayoutInited = !0
        }, s.prototype._init = s.prototype.layout, s.prototype._resetLayout = function() {
            this.getSize()
        }, s.prototype.getSize = function() {
            this.size = o(this.element)
        }, s.prototype._getMeasurement = function(t, e) {
            var i, r = this.options[t];
            r ? ("string" == typeof r ? i = this.element.querySelector(r) : n.isElement(r) && (i = r), this[t] = i ? o(i)[e] : r) : this[t] = 0
        }, s.prototype.layoutItems = function(t, e) {
            t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
        }, s.prototype._getItemsForLayout = function(t) {
            for (var e = [], i = 0, o = t.length; o > i; i++) {
                var n = t[i];
                n.isIgnored || e.push(n)
            }
            return e
        }, s.prototype._layoutItems = function(t, e) {
            if (this._emitCompleteOnItems("layout", t), t && t.length) {
                for (var i = [], o = 0, n = t.length; n > o; o++) {
                    var r = t[o],
                        s = this._getItemLayoutPosition(r);
                    s.item = r, s.isInstant = e || r.isLayoutInstant, i.push(s)
                }
                this._processLayoutQueue(i)
            }
        }, s.prototype._getItemLayoutPosition = function() {
            return {
                x: 0,
                y: 0
            }
        }, s.prototype._processLayoutQueue = function(t) {
            for (var e = 0, i = t.length; i > e; e++) {
                var o = t[e];
                this._positionItem(o.item, o.x, o.y, o.isInstant)
            }
        }, s.prototype._positionItem = function(t, e, i, o) {
            o ? t.goTo(e, i) : t.moveTo(e, i)
        }, s.prototype._postLayout = function() {
            this.resizeContainer()
        }, s.prototype.resizeContainer = function() {
            if (this.options.isResizingContainer) {
                var t = this._getContainerSize();
                t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
            }
        }, s.prototype._getContainerSize = p, s.prototype._setContainerMeasure = function(t, e) {
            if (void 0 !== t) {
                var i = this.size;
                i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
            }
        }, s.prototype._emitCompleteOnItems = function(t, e) {
            function i() {
                n.emitEvent(t + "Complete", [e])
            }

            function o() {
                ++s === r && i()
            }
            var n = this,
                r = e.length;
            if (e && r)
                for (var s = 0, a = 0, u = e.length; u > a; a++) {
                    e[a].once(t, o)
                } else i()
        }, s.prototype.ignore = function(t) {
            var e = this.getItem(t);
            e && (e.isIgnored = !0)
        }, s.prototype.unignore = function(t) {
            var e = this.getItem(t);
            e && delete e.isIgnored
        }, s.prototype.stamp = function(t) {
            if (t = this._find(t)) {
                this.stamps = this.stamps.concat(t);
                for (var e = 0, i = t.length; i > e; e++) {
                    var o = t[e];
                    this.ignore(o)
                }
            }
        }, s.prototype.unstamp = function(t) {
            if (t = this._find(t))
                for (var e = 0, i = t.length; i > e; e++) {
                    var o = t[e];
                    n.removeFrom(this.stamps, o), this.unignore(o)
                }
        }, s.prototype._find = function(t) {
            return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t)) : void 0
        }, s.prototype._manageStamps = function() {
            if (this.stamps && this.stamps.length) {
                this._getBoundingRect();
                for (var t = 0, e = this.stamps.length; e > t; t++) {
                    var i = this.stamps[t];
                    this._manageStamp(i)
                }
            }
        }, s.prototype._getBoundingRect = function() {
            var t = this.element.getBoundingClientRect(),
                e = this.size;
            this._boundingRect = {
                left: t.left + e.paddingLeft + e.borderLeftWidth,
                top: t.top + e.paddingTop + e.borderTopWidth,
                right: t.right - (e.paddingRight + e.borderRightWidth),
                bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
            }
        }, s.prototype._manageStamp = p, s.prototype._getElementOffset = function(t) {
            var e = t.getBoundingClientRect(),
                i = this._boundingRect,
                n = o(t);
            return {
                left: e.left - i.left - n.marginLeft,
                top: e.top - i.top - n.marginTop,
                right: i.right - e.right - n.marginRight,
                bottom: i.bottom - e.bottom - n.marginBottom
            }
        }, s.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, s.prototype.bindResize = function() {
            this.isResizeBound || (e.bind(t, "resize", this), this.isResizeBound = !0)
        }, s.prototype.unbindResize = function() {
            this.isResizeBound && e.unbind(t, "resize", this), this.isResizeBound = !1
        }, s.prototype.onresize = function() {
            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            var t = this;
            this.resizeTimeout = setTimeout(function() {
                t.resize(), delete t.resizeTimeout
            }, 100)
        }, s.prototype.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, s.prototype.needsResizeLayout = function() {
            var t = o(this.element);
            return this.size && t && t.innerWidth !== this.size.innerWidth
        }, s.prototype.addItems = function(t) {
            var e = this._itemize(t);
            return e.length && (this.items = this.items.concat(e)), e
        }, s.prototype.appended = function(t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0), this.reveal(e))
        }, s.prototype.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                var i = this.items.slice(0);
                this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
            }
        }, s.prototype.reveal = function(t) {
            this._emitCompleteOnItems("reveal", t);
            for (var e = t && t.length, i = 0; e && e > i; i++) {
                t[i].reveal()
            }
        }, s.prototype.hide = function(t) {
            this._emitCompleteOnItems("hide", t);
            for (var e = t && t.length, i = 0; e && e > i; i++) {
                t[i].hide()
            }
        }, s.prototype.revealItemElements = function(t) {
            var e = this.getItems(t);
            this.reveal(e)
        }, s.prototype.hideItemElements = function(t) {
            var e = this.getItems(t);
            this.hide(e)
        }, s.prototype.getItem = function(t) {
            for (var e = 0, i = this.items.length; i > e; e++) {
                var o = this.items[e];
                if (o.element === t) return o
            }
        }, s.prototype.getItems = function(t) {
            for (var e = [], i = 0, o = (t = n.makeArray(t)).length; o > i; i++) {
                var r = t[i],
                    s = this.getItem(r);
                s && e.push(s)
            }
            return e
        }, s.prototype.remove = function(t) {
            var e = this.getItems(t);
            if (this._emitCompleteOnItems("remove", e), e && e.length)
                for (var i = 0, o = e.length; o > i; i++) {
                    var r = e[i];
                    r.remove(), n.removeFrom(this.items, r)
                }
        }, s.prototype.destroy = function() {
            var t = this.element.style;
            t.height = "", t.position = "", t.width = "";
            for (var e = 0, i = this.items.length; i > e; e++) {
                this.items[e].destroy()
            }
            this.unbindResize();
            var o = this.element.outlayerGUID;
            delete f[o], delete this.element.outlayerGUID, u && u.removeData(this.element, this.constructor.namespace)
        }, s.data = function(t) {
            var e = (t = n.getQueryElement(t)) && t.outlayerGUID;
            return e && f[e]
        }, s.create = function(t, e) {
            function i() {
                s.apply(this, arguments)
            }
            return Object.create ? i.prototype = Object.create(s.prototype) : n.extend(i.prototype, s.prototype), i.prototype.constructor = i, i.defaults = n.extend({}, s.defaults), n.extend(i.defaults, e), i.prototype.settings = {}, i.namespace = t, i.data = s.data, i.Item = function() {
                r.apply(this, arguments)
            }, i.Item.prototype = new r, n.htmlInit(i, t), u && u.bridget && u.bridget(t, i), i
        }, s.Item = r, s
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
    }(window, function(t) {
        function e() {
            t.Item.apply(this, arguments)
        }
        e.prototype = new t.Item, e.prototype._create = function() {
            this.id = this.layout.itemGUID++, t.Item.prototype._create.call(this), this.sortData = {}
        }, e.prototype.updateSortData = function() {
            if (!this.isIgnored) {
                this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                var t = this.layout.options.getSortData,
                    e = this.layout._sorters;
                for (var i in t) {
                    var o = e[i];
                    this.sortData[i] = o(this.element, this)
                }
            }
        };
        var i = e.prototype.destroy;
        return e.prototype.destroy = function() {
            i.apply(this, arguments), this.css({
                display: ""
            })
        }, e
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
    }(window, function(t, e) {
        function i(t) {
            this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
        }
        return function() {
            function t(t) {
                return function() {
                    return e.prototype[t].apply(this.isotope, arguments)
                }
            }
            for (var o = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], n = 0, r = o.length; r > n; n++) {
                var s = o[n];
                i.prototype[s] = t(s)
            }
        }(), i.prototype.needsVerticalResizeLayout = function() {
            var e = t(this.isotope.element);
            return this.isotope.size && e && e.innerHeight != this.isotope.size.innerHeight
        }, i.prototype._getMeasurement = function() {
            this.isotope._getMeasurement.apply(this, arguments)
        }, i.prototype.getColumnWidth = function() {
            this.getSegmentSize("column", "Width")
        }, i.prototype.getRowHeight = function() {
            this.getSegmentSize("row", "Height")
        }, i.prototype.getSegmentSize = function(t, e) {
            var i = t + e,
                o = "outer" + e;
            if (this._getMeasurement(i, o), !this[i]) {
                var n = this.getFirstItemSize();
                this[i] = n && n[o] || this.isotope.size["inner" + e]
            }
        }, i.prototype.getFirstItemSize = function() {
            var e = this.isotope.filteredItems[0];
            return e && e.element && t(e.element)
        }, i.prototype.layout = function() {
            this.isotope.layout.apply(this.isotope, arguments)
        }, i.prototype.getSize = function() {
            this.isotope.getSize(), this.size = this.isotope.size
        }, i.modes = {}, i.create = function(t, e) {
            function o() {
                i.apply(this, arguments)
            }
            return o.prototype = new i, e && (o.options = e), o.prototype.namespace = t, i.modes[t] = o, o
        }, i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], e) : "object" == typeof exports ? module.exports = e(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : t.Masonry = e(t.Outlayer, t.getSize, t.fizzyUIUtils)
    }(window, function(t, e, i) {
        var o = t.create("masonry");
        return o.prototype._resetLayout = function() {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
            var t = this.cols;
            for (this.colYs = []; t--;) this.colYs.push(0);
            this.maxY = 0
        }, o.prototype.measureColumns = function() {
            if (this.getContainerWidth(), !this.columnWidth) {
                var t = this.items[0],
                    i = t && t.element;
                this.columnWidth = i && e(i).outerWidth || this.containerWidth
            }
            var o = this.columnWidth += this.gutter,
                n = this.containerWidth + this.gutter,
                r = n / o,
                s = o - n % o;
            r = Math[s && 1 > s ? "round" : "floor"](r), this.cols = Math.max(r, 1)
        }, o.prototype.getContainerWidth = function() {
            var t = this.options.isFitWidth ? this.element.parentNode : this.element,
                i = e(t);
            this.containerWidth = i && i.innerWidth
        }, o.prototype._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = t.size.outerWidth % this.columnWidth,
                o = Math[e && 1 > e ? "round" : "ceil"](t.size.outerWidth / this.columnWidth);
            o = Math.min(o, this.cols);
            for (var n = this._getColGroup(o), r = Math.min.apply(Math, n), s = i.indexOf(n, r), a = {
                    x: this.columnWidth * s,
                    y: r
                }, u = r + t.size.outerHeight, p = this.cols + 1 - n.length, h = 0; p > h; h++) this.colYs[s + h] = u;
            return a
        }, o.prototype._getColGroup = function(t) {
            if (2 > t) return this.colYs;
            for (var e = [], i = this.cols + 1 - t, o = 0; i > o; o++) {
                var n = this.colYs.slice(o, o + t);
                e[o] = Math.max.apply(Math, n)
            }
            return e
        }, o.prototype._manageStamp = function(t) {
            var i = e(t),
                o = this._getElementOffset(t),
                n = this.options.isOriginLeft ? o.left : o.right,
                r = n + i.outerWidth,
                s = Math.floor(n / this.columnWidth);
            s = Math.max(0, s);
            var a = Math.floor(r / this.columnWidth);
            a -= r % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
            for (var u = (this.options.isOriginTop ? o.top : o.bottom) + i.outerHeight, p = s; a >= p; p++) this.colYs[p] = Math.max(u, this.colYs[p])
        }, o.prototype._getContainerSize = function() {
            this.maxY = Math.max.apply(Math, this.colYs);
            var t = {
                height: this.maxY
            };
            return this.options.isFitWidth && (t.width = this._getContainerFitWidth()), t
        }, o.prototype._getContainerFitWidth = function() {
            for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
            return (this.cols - t) * this.columnWidth - this.gutter
        }, o.prototype.needsResizeLayout = function() {
            var t = this.containerWidth;
            return this.getContainerWidth(), t !== this.containerWidth
        }, o
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
    }(window, function(t, e) {
        var i = t.create("masonry"),
            o = i.prototype._getElementOffset,
            n = i.prototype.layout,
            r = i.prototype._getMeasurement;
        (function(t, e) {
            for (var i in e) t[i] = e[i]
        })(i.prototype, e.prototype), i.prototype._getElementOffset = o, i.prototype.layout = n, i.prototype._getMeasurement = r;
        var s = i.prototype.measureColumns;
        i.prototype.measureColumns = function() {
            this.items = this.isotope.filteredItems, s.call(this)
        };
        var a = i.prototype._manageStamp;
        return i.prototype._manageStamp = function() {
            this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, a.apply(this, arguments)
        }, i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
    }(window, function(t) {
        var e = t.create("fitRows");
        return e.prototype._resetLayout = function() {
            this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
        }, e.prototype._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = t.size.outerWidth + this.gutter,
                i = this.isotope.size.innerWidth + this.gutter;
            0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
            var o = {
                x: this.x,
                y: this.y
            };
            return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, o
        }, e.prototype._getContainerSize = function() {
            return {
                height: this.maxY
            }
        }, e
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
    }(window, function(t) {
        var e = t.create("vertical", {
            horizontalAlignment: 0
        });
        return e.prototype._resetLayout = function() {
            this.y = 0
        }, e.prototype._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
                i = this.y;
            return this.y += t.size.outerHeight, {
                x: e,
                y: i
            }
        }, e.prototype._getContainerSize = function() {
            return {
                height: this.y
            }
        }, e
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(i, o, n, r, s, a) {
            return e(t, i, o, n, r, s, a)
        }) : "object" == typeof exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
    }(window, function(t, e, i, o, n, r, s) {
        var a = t.jQuery,
            u = String.prototype.trim ? function(t) {
                return t.trim()
            } : function(t) {
                return t.replace(/^\s+|\s+$/g, "")
            },
            p = document.documentElement.textContent ? function(t) {
                return t.textContent
            } : function(t) {
                return t.innerText
            },
            h = e.create("isotope", {
                layoutMode: "masonry",
                isJQueryFiltering: !0,
                sortAscending: !0
            });
        h.Item = r, h.LayoutMode = s, h.prototype._create = function() {
            this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
            for (var t in s.modes) this._initLayoutMode(t)
        }, h.prototype.reloadItems = function() {
            this.itemGUID = 0, e.prototype.reloadItems.call(this)
        }, h.prototype._itemize = function() {
            for (var t = e.prototype._itemize.apply(this, arguments), i = 0, o = t.length; o > i; i++) {
                t[i].id = this.itemGUID++
            }
            return this._updateItemsSortData(t), t
        }, h.prototype._initLayoutMode = function(t) {
            var e = s.modes[t],
                i = this.options[t] || {};
            this.options[t] = e.options ? n.extend(e.options, i) : i, this.modes[t] = new e(this)
        }, h.prototype.layout = function() {
            return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout()
        }, h.prototype._layout = function() {
            var t = this._getIsInstant();
            this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
        }, h.prototype.arrange = function(t) {
            function e() {
                o.reveal(i.needReveal), o.hide(i.needHide)
            }
            this.option(t), this._getIsInstant();
            var i = this._filter(this.items);
            this.filteredItems = i.matches;
            var o = this;
            this._bindArrangeComplete(), this._isInstant ? this._noTransition(e) : e(), this._sort(), this._layout()
        }, h.prototype._init = h.prototype.arrange, h.prototype._getIsInstant = function() {
            var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            return this._isInstant = t, t
        }, h.prototype._bindArrangeComplete = function() {
            function t() {
                e && i && o && n.emitEvent("arrangeComplete", [n.filteredItems])
            }
            var e, i, o, n = this;
            this.once("layoutComplete", function() {
                e = !0, t()
            }), this.once("hideComplete", function() {
                i = !0, t()
            }), this.once("revealComplete", function() {
                o = !0, t()
            })
        }, h.prototype._filter = function(t) {
            var e = this.options.filter;
            e = e || "*";
            for (var i = [], o = [], n = [], r = this._getFilterTest(e), s = 0, a = t.length; a > s; s++) {
                var u = t[s];
                if (!u.isIgnored) {
                    var p = r(u);
                    p && i.push(u), p && u.isHidden ? o.push(u) : p || u.isHidden || n.push(u)
                }
            }
            return {
                matches: i,
                needReveal: o,
                needHide: n
            }
        }, h.prototype._getFilterTest = function(t) {
            return a && this.options.isJQueryFiltering ? function(e) {
                return a(e.element).is(t)
            } : "function" == typeof t ? function(e) {
                return t(e.element)
            } : function(e) {
                return o(e.element, t)
            }
        }, h.prototype.updateSortData = function(t) {
            var e;
            t ? (t = n.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
        }, h.prototype._getSorters = function() {
            var t = this.options.getSortData;
            for (var e in t) {
                var i = t[e];
                this._sorters[e] = f(i)
            }
        }, h.prototype._updateItemsSortData = function(t) {
            for (var e = t && t.length, i = 0; e && e > i; i++) {
                t[i].updateSortData()
            }
        };
        var f = function() {
            return function(t) {
                if ("string" != typeof t) return t;
                var e, i, o = u(t).split(" "),
                    n = o[0],
                    r = n.match(/^\[(.+)\]$/),
                    s = r && r[1],
                    a = (i = n, (e = s) ? function(t) {
                        return t.getAttribute(e)
                    } : function(t) {
                        var e = t.querySelector(i);
                        return e && p(e)
                    }),
                    f = h.sortDataParsers[o[1]];
                return f ? function(t) {
                    return t && f(a(t))
                } : function(t) {
                    return t && a(t)
                }
            }
        }();
        h.sortDataParsers = {
            parseInt: function(t) {
                return parseInt(t, 10)
            },
            parseFloat: function(t) {
                return parseFloat(t)
            }
        }, h.prototype._sort = function() {
            var t, e, i = this.options.sortBy;
            if (i) {
                var o = [].concat.apply(i, this.sortHistory),
                    n = (t = o, e = this.options.sortAscending, function(i, o) {
                        for (var n = 0, r = t.length; r > n; n++) {
                            var s = t[n],
                                a = i.sortData[s],
                                u = o.sortData[s];
                            if (a > u || u > a) {
                                var p = void 0 !== e[s] ? e[s] : e;
                                return (a > u ? 1 : -1) * (p ? 1 : -1)
                            }
                        }
                        return 0
                    });
                this.filteredItems.sort(n), i != this.sortHistory[0] && this.sortHistory.unshift(i)
            }
        }, h.prototype._mode = function() {
            var t = this.options.layoutMode,
                e = this.modes[t];
            if (!e) throw Error("No layout mode: " + t);
            return e.options = this.options[t], e
        }, h.prototype._resetLayout = function() {
            e.prototype._resetLayout.call(this), this._mode()._resetLayout()
        }, h.prototype._getItemLayoutPosition = function(t) {
            return this._mode()._getItemLayoutPosition(t)
        }, h.prototype._manageStamp = function(t) {
            this._mode()._manageStamp(t)
        }, h.prototype._getContainerSize = function() {
            return this._mode()._getContainerSize()
        }, h.prototype.needsResizeLayout = function() {
            return this._mode().needsResizeLayout()
        }, h.prototype.appended = function(t) {
            var e = this.addItems(t);
            if (e.length) {
                var i = this._filterRevealAdded(e);
                this.filteredItems = this.filteredItems.concat(i)
            }
        }, h.prototype.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                this._resetLayout(), this._manageStamps();
                var i = this._filterRevealAdded(e);
                this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
            }
        }, h.prototype._filterRevealAdded = function(t) {
            var e = this._filter(t);
            return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
        }, h.prototype.insert = function(t) {
            var e = this.addItems(t);
            if (e.length) {
                var i, o, n = e.length;
                for (i = 0; n > i; i++) o = e[i], this.element.appendChild(o.element);
                var r = this._filter(e).matches;
                for (i = 0; n > i; i++) e[i].isLayoutInstant = !0;
                for (this.arrange(), i = 0; n > i; i++) delete e[i].isLayoutInstant;
                this.reveal(r)
            }
        };
        var d = h.prototype.remove;
        return h.prototype.remove = function(t) {
            t = n.makeArray(t);
            var e = this.getItems(t);
            d.call(this, t);
            var i = e && e.length;
            if (i)
                for (var o = 0; i > o; o++) {
                    var r = e[o];
                    n.removeFrom(this.filteredItems, r)
                }
        }, h.prototype.shuffle = function() {
            for (var t = 0, e = this.items.length; e > t; t++) {
                this.items[t].sortData.random = Math.random()
            }
            this.options.sortBy = "random", this._sort(), this._layout()
        }, h.prototype._noTransition = function(t) {
            var e = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var i = t.call(this);
            return this.options.transitionDuration = e, i
        }, h.prototype.getFilteredItemElements = function() {
            for (var t = [], e = 0, i = this.filteredItems.length; i > e; e++) t.push(this.filteredItems[e].element);
            return t
        }, h
    });
! function(t, e, i, s) {
    function n(e, i) {
        this.settings = null, this.options = t.extend({}, n.Defaults, i), this.$element = t(e), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        }, this._states = {
            current: {},
            tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"]
            }
        }, t.each(["onResize", "onThrottledResize"], t.proxy(function(e, i) {
            this._handlers[i] = t.proxy(this[i], this)
        }, this)), t.each(n.Plugins, t.proxy(function(t, e) {
            this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
        }, this)), t.each(n.Workers, t.proxy(function(e, i) {
            this._pipe.push({
                filter: i.filter,
                run: t.proxy(i.run, this)
            })
        }, this)), this.setup(), this.initialize()
    }
    n.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: e,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    }, n.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, n.Type = {
        Event: "event",
        State: "state"
    }, n.Plugins = {}, n.Workers = [{
        filter: ["width", "settings"],
        run: function() {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            t.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e = this.settings.margin || "",
                i = !this.settings.autoWidth,
                s = this.settings.rtl,
                n = {
                    width: "auto",
                    "margin-left": s ? e : "",
                    "margin-right": s ? "" : e
                };
            !i && this.$stage.children().css(n), t.css = n
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                i = null,
                s = this._items.length,
                n = !this.settings.autoWidth,
                o = [];
            for (t.items = {
                    merge: !1,
                    width: e
                }; s--;) i = this._mergers[s], i = this.settings.mergeFit && Math.min(i, this.settings.items) || i, t.items.merge = i > 1 || t.items.merge, o[s] = n ? e * i : this._items[s].width();
            this._widths = o
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var e = [],
                i = this._items,
                s = this.settings,
                n = Math.max(2 * s.items, 4),
                o = 2 * Math.ceil(i.length / 2),
                r = s.loop && i.length ? s.rewind ? n : Math.max(n, o) : 0,
                a = "",
                h = "";
            for (r /= 2; r--;) e.push(this.normalize(e.length / 2, !0)), a += i[e[e.length - 1]][0].outerHTML, e.push(this.normalize(i.length - 1 - (e.length - 1) / 2, !0)), h = i[e[e.length - 1]][0].outerHTML + h;
            this._clones = e, t(a).addClass("cloned").appendTo(this.$stage), t(h).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, i = -1, s = 0, n = 0, o = []; ++i < e;) s = o[i - 1] || 0, n = this._widths[this.relative(i)] + this.settings.margin, o.push(s + n * t);
            this._coordinates = o
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var t = this.settings.stagePadding,
                e = this._coordinates,
                i = {
                    width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                    "padding-left": t || "",
                    "padding-right": t || ""
                };
            this.$stage.css(i)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e = this._coordinates.length,
                i = !this.settings.autoWidth,
                s = this.$stage.children();
            if (i && t.items.merge)
                for (; e--;) t.css.width = this._widths[this.relative(e)], s.eq(e).css(t.css);
            else i && (t.css.width = t.items.width, s.css(t.css))
        }
    }, {
        filter: ["items"],
        run: function() {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current)
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var t, e, i, s, n = this.settings.rtl ? 1 : -1,
                o = 2 * this.settings.stagePadding,
                r = this.coordinates(this.current()) + o,
                a = r + this.width() * n,
                h = [];
            for (i = 0, s = this._coordinates.length; i < s; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + o * n, (this.op(t, "<=", r) && this.op(t, ">", a) || this.op(e, "<", r) && this.op(e, ">", a)) && h.push(i);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + h.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
        }
    }], n.prototype.initialize = function() {
        var e, i, s;
        (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) && (e = this.$element.find("img"), i = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : void 0, s = this.$element.children(i).width(), e.length && s <= 0 && this.preloadAutoWidthImages(e));
        this.$element.addClass(this.options.loadingClass), this.$stage = t("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, n.prototype.setup = function() {
        var e = this.viewport(),
            i = this.options.responsive,
            s = -1,
            n = null;
        i ? (t.each(i, function(t) {
            t <= e && t > s && (s = Number(t))
        }), "function" == typeof(n = t.extend({}, this.options, i[s])).stagePadding && (n.stagePadding = n.stagePadding()), delete n.responsive, n.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + s))) : n = t.extend({}, this.options), this.trigger("change", {
            property: {
                name: "settings",
                value: n
            }
        }), this._breakpoint = s, this.settings = n, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }, n.prototype.optionsLogic = function() {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, n.prototype.prepare = function(e) {
        var i = this.trigger("prepare", {
            content: e
        });
        return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)), this.trigger("prepared", {
            content: i.data
        }), i.data
    }, n.prototype.update = function() {
        for (var e = 0, i = this._pipe.length, s = t.proxy(function(t) {
                return this[t]
            }, this._invalidated), n = {}; e < i;)(this._invalidated.all || t.grep(this._pipe[e].filter, s).length > 0) && this._pipe[e].run(n), e++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid")
    }, n.prototype.width = function(t) {
        switch (t = t || n.Width.Default) {
            case n.Width.Inner:
            case n.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, n.prototype.refresh = function() {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
    }, n.prototype.onThrottledResize = function() {
        e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }, n.prototype.onResize = function() {
        return !!this._items.length && this._width !== this.$element.width() && !!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
    }, n.prototype.registerEventHandlers = function() {
        t.support.transition && this.$stage.on(t.support.transition.end + ".owl.core", t.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(e, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
            return !1
        })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", t.proxy(this.onDragEnd, this)))
    }, n.prototype.onDragStart = function(e) {
        var s = null;
        3 !== e.which && (t.support.transform ? s = {
            x: (s = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === s.length ? 12 : 4],
            y: s[16 === s.length ? 13 : 5]
        } : (s = this.$stage.position(), s = {
            x: this.settings.rtl ? s.left + this.$stage.width() - this.width() + this.settings.margin : s.left,
            y: s.top
        }), this.is("animating") && (t.support.transform ? this.animate(s.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = t(e.target), this._drag.stage.start = s, this._drag.stage.current = s, this._drag.pointer = this.pointer(e), t(i).on("mouseup.owl.core touchend.owl.core", t.proxy(this.onDragEnd, this)), t(i).one("mousemove.owl.core touchmove.owl.core", t.proxy(function(e) {
            var s = this.difference(this._drag.pointer, this.pointer(e));
            t(i).on("mousemove.owl.core touchmove.owl.core", t.proxy(this.onDragMove, this)), Math.abs(s.x) < Math.abs(s.y) && this.is("valid") || (e.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    }, n.prototype.onDragMove = function(t) {
        var e = null,
            i = null,
            s = null,
            n = this.difference(this._drag.pointer, this.pointer(t)),
            o = this.difference(this._drag.stage.start, n);
        this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - e, o.x = ((o.x - e) % i + i) % i + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), s = this.settings.pullDrag ? -1 * n.x / 5 : 0, o.x = Math.max(Math.min(o.x, e + s), i + s)), this._drag.stage.current = o, this.animate(o.x))
    }, n.prototype.onDragEnd = function(e) {
        var s = this.difference(this._drag.pointer, this.pointer(e)),
            n = this._drag.stage.current,
            o = s.x > 0 ^ this.settings.rtl ? "left" : "right";
        t(i).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== s.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(n.x, 0 !== s.x ? o : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = o, (Math.abs(s.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
            return !1
        })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, n.prototype.closest = function(e, i) {
        var s = -1,
            n = this.width(),
            o = this.coordinates();
        return this.settings.freeDrag || t.each(o, t.proxy(function(t, r) {
            return "left" === i && e > r - 30 && e < r + 30 ? s = t : "right" === i && e > r - n - 30 && e < r - n + 30 ? s = t + 1 : this.op(e, "<", r) && this.op(e, ">", o[t + 1] || r - n) && (s = "left" === i ? t + 1 : t), -1 === s
        }, this)), this.settings.loop || (this.op(e, ">", o[this.minimum()]) ? s = e = this.minimum() : this.op(e, "<", o[this.maximum()]) && (s = e = this.maximum())), s
    }, n.prototype.animate = function(e) {
        var i = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(), i && (this.enter("animating"), this.trigger("translate")), t.support.transform3d && t.support.transition ? this.$stage.css({
            transform: "translate3d(" + e + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s"
        }) : i ? this.$stage.animate({
            left: e + "px"
        }, this.speed(), this.settings.fallbackEasing, t.proxy(this.onTransitionEnd, this)) : this.$stage.css({
            left: e + "px"
        })
    }, n.prototype.is = function(t) {
        return this._states.current[t] && this._states.current[t] > 0
    }, n.prototype.current = function(t) {
        if (void 0 === t) return this._current;
        if (0 !== this._items.length) {
            if (t = this.normalize(t), this._current !== t) {
                var e = this.trigger("change", {
                    property: {
                        name: "position",
                        value: t
                    }
                });
                void 0 !== e.data && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                    property: {
                        name: "position",
                        value: this._current
                    }
                })
            }
            return this._current
        }
    }, n.prototype.invalidate = function(e) {
        return "string" === t.type(e) && (this._invalidated[e] = !0, this.is("valid") && this.leave("valid")), t.map(this._invalidated, function(t, e) {
            return e
        })
    }, n.prototype.reset = function(t) {
        void 0 !== (t = this.normalize(t)) && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
    }, n.prototype.normalize = function(t, e) {
        var i = this._items.length,
            s = e ? 0 : this._clones.length;
        return !this.isNumeric(t) || i < 1 ? t = void 0 : (t < 0 || t >= i + s) && (t = ((t - s / 2) % i + i) % i + s / 2), t
    }, n.prototype.relative = function(t) {
        return t -= this._clones.length / 2, this.normalize(t, !0)
    }, n.prototype.maximum = function(t) {
        var e, i, s, n = this.settings,
            o = this._coordinates.length;
        if (n.loop) o = this._clones.length / 2 + this._items.length - 1;
        else if (n.autoWidth || n.merge) {
            for (e = this._items.length, i = this._items[--e].width(), s = this.$element.width(); e-- && !((i += this._items[e].width() + this.settings.margin) > s););
            o = e + 1
        } else o = n.center ? this._items.length - 1 : this._items.length - n.items;
        return t && (o -= this._clones.length / 2), Math.max(o, 0)
    }, n.prototype.minimum = function(t) {
        return t ? 0 : this._clones.length / 2
    }, n.prototype.items = function(t) {
        return void 0 === t ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
    }, n.prototype.mergers = function(t) {
        return void 0 === t ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
    }, n.prototype.clones = function(e) {
        var i = this._clones.length / 2,
            s = i + this._items.length,
            n = function(t) {
                return t % 2 == 0 ? s + t / 2 : i - (t + 1) / 2
            };
        return void 0 === e ? t.map(this._clones, function(t, e) {
            return n(e)
        }) : t.map(this._clones, function(t, i) {
            return t === e ? n(i) : null
        })
    }, n.prototype.speed = function(t) {
        return void 0 !== t && (this._speed = t), this._speed
    }, n.prototype.coordinates = function(e) {
        var i, s = 1,
            n = e - 1;
        return void 0 === e ? t.map(this._coordinates, t.proxy(function(t, e) {
            return this.coordinates(e)
        }, this)) : (this.settings.center ? (this.settings.rtl && (s = -1, n = e + 1), i = this._coordinates[e], i += (this.width() - i + (this._coordinates[n] || 0)) / 2 * s) : i = this._coordinates[n] || 0, i = Math.ceil(i))
    }, n.prototype.duration = function(t, e, i) {
        return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
    }, n.prototype.to = function(t, e) {
        var i = this.current(),
            s = null,
            n = t - this.relative(i),
            o = (n > 0) - (n < 0),
            r = this._items.length,
            a = this.minimum(),
            h = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(n) > r / 2 && (n += -1 * o * r), (s = (((t = i + n) - a) % r + r) % r + a) !== t && s - n <= h && s - n > 0 && (i = s - n, t = s, this.reset(i))) : this.settings.rewind ? t = (t % (h += 1) + h) % h : t = Math.max(a, Math.min(h, t)), this.speed(this.duration(i, t, e)), this.current(t), this.$element.is(":visible") && this.update()
    }, n.prototype.next = function(t) {
        t = t || !1, this.to(this.relative(this.current()) + 1, t)
    }, n.prototype.prev = function(t) {
        t = t || !1, this.to(this.relative(this.current()) - 1, t)
    }, n.prototype.onTransitionEnd = function(t) {
        if (void 0 !== t && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating"), this.trigger("translated")
    }, n.prototype.viewport = function() {
        var s;
        return this.options.responsiveBaseElement !== e ? s = t(this.options.responsiveBaseElement).width() : e.innerWidth ? s = e.innerWidth : i.documentElement && i.documentElement.clientWidth ? s = i.documentElement.clientWidth : console.warn("Can not detect viewport width."), s
    }, n.prototype.replace = function(e) {
        this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function() {
            return 1 === this.nodeType
        }).each(t.proxy(function(t, e) {
            e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, n.prototype.add = function(e, i) {
        var s = this.relative(this._current);
        i = void 0 === i ? this._items.length : this.normalize(i, !0), e = e instanceof jQuery ? e : t(e), this.trigger("add", {
            content: e,
            position: i
        }), e = this.prepare(e), 0 === this._items.length || i === this._items.length ? (0 === this._items.length && this.$stage.append(e), 0 !== this._items.length && this._items[i - 1].after(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[i].before(e), this._items.splice(i, 0, e), this._mergers.splice(i, 0, 1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[s] && this.reset(this._items[s].index()), this.invalidate("items"), this.trigger("added", {
            content: e,
            position: i
        })
    }, n.prototype.remove = function(t) {
        void 0 !== (t = this.normalize(t, !0)) && (this.trigger("remove", {
            content: this._items[t],
            position: t
        }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: t
        }))
    }, n.prototype.preloadAutoWidthImages = function(e) {
        e.each(t.proxy(function(e, i) {
            this.enter("pre-loading"), i = t(i), t(new Image).one("load", t.proxy(function(t) {
                i.attr("src", t.target.src), i.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            }, this)).attr("src", i.attr("src") || i.attr("data-src") || i.attr("data-src-retina"))
        }, this))
    }, n.prototype.destroy = function() {
        this.$element.off(".owl.core"), this.$stage.off(".owl.core"), t(i).off(".owl.core"), !1 !== this.settings.responsive && (e.clearTimeout(this.resizeTimer), this.off(e, "resize", this._handlers.onThrottledResize));
        for (var s in this._plugins) this._plugins[s].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, n.prototype.op = function(t, e, i) {
        var s = this.settings.rtl;
        switch (e) {
            case "<":
                return s ? t > i : t < i;
            case ">":
                return s ? t < i : t > i;
            case ">=":
                return s ? t <= i : t >= i;
            case "<=":
                return s ? t >= i : t <= i
        }
    }, n.prototype.on = function(t, e, i, s) {
        t.addEventListener ? t.addEventListener(e, i, s) : t.attachEvent && t.attachEvent("on" + e, i)
    }, n.prototype.off = function(t, e, i, s) {
        t.removeEventListener ? t.removeEventListener(e, i, s) : t.detachEvent && t.detachEvent("on" + e, i)
    }, n.prototype.trigger = function(e, i, s, o, r) {
        var a = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            h = t.camelCase(t.grep(["on", e, s], function(t) {
                return t
            }).join("-").toLowerCase()),
            l = t.Event([e, "owl", s || "carousel"].join(".").toLowerCase(), t.extend({
                relatedTarget: this
            }, a, i));
        return this._supress[e] || (t.each(this._plugins, function(t, e) {
            e.onTrigger && e.onTrigger(l)
        }), this.register({
            type: n.Type.Event,
            name: e
        }), this.$element.trigger(l), this.settings && "function" == typeof this.settings[h] && this.settings[h].call(this, l)), l
    }, n.prototype.enter = function(e) {
        t.each([e].concat(this._states.tags[e] || []), t.proxy(function(t, e) {
            void 0 === this._states.current[e] && (this._states.current[e] = 0), this._states.current[e]++
        }, this))
    }, n.prototype.leave = function(e) {
        t.each([e].concat(this._states.tags[e] || []), t.proxy(function(t, e) {
            this._states.current[e]--
        }, this))
    }, n.prototype.register = function(e) {
        if (e.type === n.Type.Event) {
            if (t.event.special[e.name] || (t.event.special[e.name] = {}), !t.event.special[e.name].owl) {
                var i = t.event.special[e.name]._default;
                t.event.special[e.name]._default = function(t) {
                    return !i || !i.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && t.namespace.indexOf("owl") > -1 : i.apply(this, arguments)
                }, t.event.special[e.name].owl = !0
            }
        } else e.type === n.Type.State && (this._states.tags[e.name] ? this._states.tags[e.name] = this._states.tags[e.name].concat(e.tags) : this._states.tags[e.name] = e.tags, this._states.tags[e.name] = t.grep(this._states.tags[e.name], t.proxy(function(i, s) {
            return t.inArray(i, this._states.tags[e.name]) === s
        }, this)))
    }, n.prototype.suppress = function(e) {
        t.each(e, t.proxy(function(t, e) {
            this._supress[e] = !0
        }, this))
    }, n.prototype.release = function(e) {
        t.each(e, t.proxy(function(t, e) {
            delete this._supress[e]
        }, this))
    }, n.prototype.pointer = function(t) {
        var i = {
            x: null,
            y: null
        };
        return (t = (t = t.originalEvent || t || e.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (i.x = t.pageX, i.y = t.pageY) : (i.x = t.clientX, i.y = t.clientY), i
    }, n.prototype.isNumeric = function(t) {
        return !isNaN(parseFloat(t))
    }, n.prototype.difference = function(t, e) {
        return {
            x: t.x - e.x,
            y: t.y - e.y
        }
    }, t.fn.owlCarousel = function(e) {
        var i = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var s = t(this),
                o = s.data("owl.carousel");
            o || (o = new n(this, "object" == typeof e && e), s.data("owl.carousel", o), t.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(e, i) {
                o.register({
                    type: n.Type.Event,
                    name: i
                }), o.$element.on(i + ".owl.carousel.core", t.proxy(function(t) {
                    t.namespace && t.relatedTarget !== this && (this.suppress([i]), o[i].apply(this, [].slice.call(arguments, 1)), this.release([i]))
                }, o))
            })), "string" == typeof e && "_" !== e.charAt(0) && o[e].apply(o, i)
        })
    }, t.fn.owlCarousel.Constructor = n
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, s) {
    var n = function(e) {
        this._core = e, this._interval = null, this._visible = null, this._handlers = {
            "initialized.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        }, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    n.Defaults = {
        autoRefresh: !0,
        autoRefreshInterval: 500
    }, n.prototype.watch = function() {
        this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = e.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }, n.prototype.refresh = function() {
        this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    }, n.prototype.destroy = function() {
        var t, i;
        e.clearInterval(this._interval);
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = n
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, s) {
    var n = function(e) {
        this._core = e, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy(function(e) {
                if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type))
                    for (var i = this._core.settings, s = i.center && Math.ceil(i.items / 2) || i.items, n = i.center && -1 * s || 0, o = (e.property && void 0 !== e.property.value ? e.property.value : this._core.current()) + n, r = this._core.clones().length, a = t.proxy(function(t, e) {
                            this.load(e)
                        }, this); n++ < s;) this.load(r / 2 + this._core.relative(o)), r && t.each(this._core.clones(this._core.relative(o)), a), o++
            }, this)
        }, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    n.Defaults = {
        lazyLoad: !1
    }, n.prototype.load = function(i) {
        var s = this._core.$stage.children().eq(i),
            n = s && s.find(".owl-lazy");
        !n || t.inArray(s.get(0), this._loaded) > -1 || (n.each(t.proxy(function(i, s) {
            var n, o = t(s),
                r = e.devicePixelRatio > 1 && o.attr("data-src-retina") || o.attr("data-src");
            this._core.trigger("load", {
                element: o,
                url: r
            }, "lazy"), o.is("img") ? o.one("load.owl.lazy", t.proxy(function() {
                o.css("opacity", 1), this._core.trigger("loaded", {
                    element: o,
                    url: r
                }, "lazy")
            }, this)).attr("src", r) : ((n = new Image).onload = t.proxy(function() {
                o.css({
                    "background-image": 'url("' + r + '")',
                    opacity: "1"
                }), this._core.trigger("loaded", {
                    element: o,
                    url: r
                }, "lazy")
            }, this), n.src = r)
        }, this)), this._loaded.push(s.get(0)))
    }, n.prototype.destroy = function() {
        var t, e;
        for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Lazy = n
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, s) {
    var n = function(e) {
        this._core = e, this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.autoHeight && "position" == t.property.name && this.update()
            }, this),
            "loaded.owl.lazy": t.proxy(function(t) {
                t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        }, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    n.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    }, n.prototype.update = function() {
        var e, i = this._core._current,
            s = i + this._core.settings.items,
            n = this._core.$stage.children().toArray().slice(i, s),
            o = [];
        t.each(n, function(e, i) {
            o.push(t(i).height())
        }), e = Math.max.apply(null, o), this._core.$stage.parent().height(e).addClass(this._core.settings.autoHeightClass)
    }, n.prototype.destroy = function() {
        var t, e;
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = n
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, s) {
    var n = function(e) {
        this._core = e, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.register({
                    type: "state",
                    name: "playing",
                    tags: ["interacting"]
                })
            }, this),
            "resize.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
            }, this),
            "refreshed.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this),
            "changed.owl.carousel": t.proxy(function(t) {
                t.namespace && "position" === t.property.name && this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": t.proxy(function(e) {
                if (e.namespace) {
                    var i = t(e.content).find(".owl-video");
                    i.length && (i.css("display", "none"), this.fetch(i, t(e.content)))
                }
            }, this)
        }, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function(t) {
            this.play(t)
        }, this))
    };
    n.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    }, n.prototype.fetch = function(t, e) {
        var i = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube",
            s = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
            n = t.attr("data-width") || this._core.settings.videoWidth,
            o = t.attr("data-height") || this._core.settings.videoHeight,
            r = t.attr("href");
        if (!r) throw new Error("Missing video URL.");
        if ((s = r.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu") > -1) i = "youtube";
        else if (s[3].indexOf("vimeo") > -1) i = "vimeo";
        else {
            if (!(s[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
            i = "vzaar"
        }
        s = s[6], this._videos[r] = {
            type: i,
            id: s,
            width: n,
            height: o
        }, e.attr("data-video", r), this.thumbnail(t, this._videos[r])
    }, n.prototype.thumbnail = function(e, i) {
        var s, n, o, r = i.width && i.height ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"' : "",
            a = e.find("img"),
            h = "src",
            l = "",
            c = this._core.settings,
            p = function(t) {
                n = '<div class="owl-video-play-icon"></div>', s = c.lazyLoad ? '<div class="owl-video-tn ' + l + '" ' + h + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>', e.after(s), e.after(n)
            };
        if (e.wrap('<div class="owl-video-wrapper"' + r + "></div>"), this._core.settings.lazyLoad && (h = "data-src", l = "owl-lazy"), a.length) return p(a.attr(h)), a.remove(), !1;
        "youtube" === i.type ? (o = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg", p(o)) : "vimeo" === i.type ? t.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + i.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(t) {
                o = t[0].thumbnail_large, p(o)
            }
        }) : "vzaar" === i.type && t.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + i.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(t) {
                o = t.framegrab_url, p(o)
            }
        })
    }, n.prototype.stop = function() {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
    }, n.prototype.play = function(e) {
        var i, s = t(e.target).closest("." + this._core.settings.itemClass),
            n = this._videos[s.attr("data-video")],
            o = n.width || "100%",
            r = n.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), s = this._core.items(this._core.relative(s.index())), this._core.reset(s.index()), "youtube" === n.type ? i = '<iframe width="' + o + '" height="' + r + '" src="//www.youtube.com/embed/' + n.id + "?autoplay=1&rel=0&v=" + n.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === n.type ? i = '<iframe src="//player.vimeo.com/video/' + n.id + '?autoplay=1" width="' + o + '" height="' + r + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === n.type && (i = '<iframe frameborder="0"height="' + r + '"width="' + o + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + n.id + '/player?autoplay=true"></iframe>'), t('<div class="owl-video-frame">' + i + "</div>").insertAfter(s.find(".owl-video")), this._playing = s.addClass("owl-video-playing"))
    }, n.prototype.isInFullScreen = function() {
        var e = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
        return e && t(e).parent().hasClass("owl-video-frame")
    }, n.prototype.destroy = function() {
        var t, e;
        this._core.$element.off("click.owl.video");
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Video = n
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, s) {
    var n = function(e) {
        this.core = e, this.core.options = t.extend({}, n.Defaults, this.core.options), this.swapping = !0, this.previous = void 0, this.next = void 0, this.handlers = {
            "change.owl.carousel": t.proxy(function(t) {
                t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function(t) {
                t.namespace && (this.swapping = "translated" == t.type)
            }, this),
            "translate.owl.carousel": t.proxy(function(t) {
                t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    n.Defaults = {
        animateOut: !1,
        animateIn: !1
    }, n.prototype.swap = function() {
        if (1 === this.core.settings.items && t.support.animation && t.support.transition) {
            this.core.speed(0);
            var e, i = t.proxy(this.clear, this),
                s = this.core.$stage.children().eq(this.previous),
                n = this.core.$stage.children().eq(this.next),
                o = this.core.settings.animateIn,
                r = this.core.settings.animateOut;
            this.core.current() !== this.previous && (r && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), s.one(t.support.animation.end, i).css({
                left: e + "px"
            }).addClass("animated owl-animated-out").addClass(r)), o && n.one(t.support.animation.end, i).addClass("animated owl-animated-in").addClass(o))
        }
    }, n.prototype.clear = function(e) {
        t(e.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
    }, n.prototype.destroy = function() {
        var t, e;
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Animate = n
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, s) {
    var n = function(e) {
        this._core = e, this._timeout = null, this._paused = !1, this._handlers = {
            "changed.owl.carousel": t.proxy(function(t) {
                t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
            }, this),
            "initialized.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.autoplay && this.play()
            }, this),
            "play.owl.autoplay": t.proxy(function(t, e, i) {
                t.namespace && this.play(e, i)
            }, this),
            "stop.owl.autoplay": t.proxy(function(t) {
                t.namespace && this.stop()
            }, this),
            "mouseover.owl.autoplay": t.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "mouseleave.owl.autoplay": t.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this),
            "touchstart.owl.core": t.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "touchend.owl.core": t.proxy(function() {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        }, this._core.$element.on(this._handlers), this._core.options = t.extend({}, n.Defaults, this._core.options)
    };
    n.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, n.prototype.play = function(t, e) {
        this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
    }, n.prototype._getNextTimeout = function(s, n) {
        return this._timeout && e.clearTimeout(this._timeout), e.setTimeout(t.proxy(function() {
            this._paused || this._core.is("busy") || this._core.is("interacting") || i.hidden || this._core.next(n || this._core.settings.autoplaySpeed)
        }, this), s || this._core.settings.autoplayTimeout)
    }, n.prototype._setAutoPlayInterval = function() {
        this._timeout = this._getNextTimeout()
    }, n.prototype.stop = function() {
        this._core.is("rotating") && (e.clearTimeout(this._timeout), this._core.leave("rotating"))
    }, n.prototype.pause = function() {
        this._core.is("rotating") && (this._paused = !0)
    }, n.prototype.destroy = function() {
        var t, e;
        this.stop();
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.autoplay = n
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, s) {
    "use strict";
    var n = function(e) {
        this._core = e, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": t.proxy(function(e) {
                e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }, this),
            "added.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
            }, this),
            "remove.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
            }, this),
            "changed.owl.carousel": t.proxy(function(t) {
                t.namespace && "position" == t.property.name && this.draw()
            }, this),
            "initialized.owl.carousel": t.proxy(function(t) {
                t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
            }, this),
            "refreshed.owl.carousel": t.proxy(function(t) {
                t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
            }, this)
        }, this._core.options = t.extend({}, n.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    n.Defaults = {
        nav: !1,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    }, n.prototype.initialize = function() {
        var e, i = this._core.settings;
        this._controls.$relative = (i.navContainer ? t(i.navContainer) : t("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = t("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", t.proxy(function(t) {
            this.prev(i.navSpeed)
        }, this)), this._controls.$next = t("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", t.proxy(function(t) {
            this.next(i.navSpeed)
        }, this)), i.dotsData || (this._templates = [t("<div>").addClass(i.dotClass).append(t("<span>")).prop("outerHTML")]), this._controls.$absolute = (i.dotsContainer ? t(i.dotsContainer) : t("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", t.proxy(function(e) {
            var s = t(e.target).parent().is(this._controls.$absolute) ? t(e.target).index() : t(e.target).parent().index();
            e.preventDefault(), this.to(s, i.dotsSpeed)
        }, this));
        for (e in this._overrides) this._core[e] = t.proxy(this[e], this)
    }, n.prototype.destroy = function() {
        var t, e, i, s;
        for (t in this._handlers) this.$element.off(t, this._handlers[t]);
        for (e in this._controls) this._controls[e].remove();
        for (s in this.overides) this._core[s] = this._overrides[s];
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, n.prototype.update = function() {
        var t, e, i = this._core.clones().length / 2,
            s = i + this._core.items().length,
            n = this._core.maximum(!0),
            o = this._core.settings,
            r = o.center || o.autoWidth || o.dotsData ? 1 : o.dotsEach || o.items;
        if ("page" !== o.slideBy && (o.slideBy = Math.min(o.slideBy, o.items)), o.dots || "page" == o.slideBy)
            for (this._pages = [], t = i, e = 0, 0; t < s; t++) {
                if (e >= r || 0 === e) {
                    if (this._pages.push({
                            start: Math.min(n, t - i),
                            end: t - i + r - 1
                        }), Math.min(n, t - i) === n) break;
                    e = 0, 0
                }
                e += this._core.mergers(this._core.relative(t))
            }
    }, n.prototype.draw = function() {
        var e, i = this._core.settings,
            s = this._core.items().length <= i.items,
            n = this._core.relative(this._core.current()),
            o = i.loop || i.rewind;
        this._controls.$relative.toggleClass("disabled", !i.nav || s), i.nav && (this._controls.$previous.toggleClass("disabled", !o && n <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !o && n >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !i.dots || s), i.dots && (e = this._pages.length - this._controls.$absolute.children().length, i.dotsData && 0 !== e ? this._controls.$absolute.html(this._templates.join("")) : e > 0 ? this._controls.$absolute.append(new Array(e + 1).join(this._templates[0])) : e < 0 && this._controls.$absolute.children().slice(e).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass("active"))
    }, n.prototype.onTrigger = function(e) {
        var i = this._core.settings;
        e.page = {
            index: t.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: i && (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items)
        }
    }, n.prototype.current = function() {
        var e = this._core.relative(this._core.current());
        return t.grep(this._pages, t.proxy(function(t, i) {
            return t.start <= e && t.end >= e
        }, this)).pop()
    }, n.prototype.getPosition = function(e) {
        var i, s, n = this._core.settings;
        return "page" == n.slideBy ? (i = t.inArray(this.current(), this._pages), s = this._pages.length, e ? ++i : --i, i = this._pages[(i % s + s) % s].start) : (i = this._core.relative(this._core.current()), s = this._core.items().length, e ? i += n.slideBy : i -= n.slideBy), i
    }, n.prototype.next = function(e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
    }, n.prototype.prev = function(e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
    }, n.prototype.to = function(e, i, s) {
        var n;
        !s && this._pages.length ? (n = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % n + n) % n].start, i)) : t.proxy(this._overrides.to, this._core)(e, i)
    }, t.fn.owlCarousel.Constructor.Plugins.Navigation = n
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, s) {
    "use strict";
    var n = function(i) {
        this._core = i, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": t.proxy(function(i) {
                i.namespace && "URLHash" === this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": t.proxy(function(e) {
                if (e.namespace) {
                    var i = t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!i) return;
                    this._hashes[i] = e.content
                }
            }, this),
            "changed.owl.carousel": t.proxy(function(i) {
                if (i.namespace && "position" === i.property.name) {
                    var s = this._core.items(this._core.relative(this._core.current())),
                        n = t.map(this._hashes, function(t, e) {
                            return t === s ? e : null
                        }).join();
                    if (!n || e.location.hash.slice(1) === n) return;
                    e.location.hash = n
                }
            }, this)
        }, this._core.options = t.extend({}, n.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function(t) {
            var i = e.location.hash.substring(1),
                s = this._core.$stage.children(),
                n = this._hashes[i] && s.index(this._hashes[i]);
            void 0 !== n && n !== this._core.current() && this._core.to(this._core.relative(n), !1, !0)
        }, this))
    };
    n.Defaults = {
        URLhashListener: !1
    }, n.prototype.destroy = function() {
        var i, s;
        t(e).off("hashchange.owl.navigation");
        for (i in this._handlers) this._core.$element.off(i, this._handlers[i]);
        for (s in Object.getOwnPropertyNames(this)) "function" != typeof this[s] && (this[s] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Hash = n
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, s) {
    function n(e, i) {
        var n = !1,
            o = e.charAt(0).toUpperCase() + e.slice(1);
        return t.each((e + " " + a.join(o + " ") + o).split(" "), function(t, e) {
            if (r[e] !== s) return n = !i || e, !1
        }), n
    }

    function o(t) {
        return n(t, !0)
    }
    var r = t("<support>").get(0).style,
        a = "Webkit Moz O ms".split(" "),
        h = {
            transition: {
                end: {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    transition: "transitionend"
                }
            },
            animation: {
                end: {
                    WebkitAnimation: "webkitAnimationEnd",
                    MozAnimation: "animationend",
                    OAnimation: "oAnimationEnd",
                    animation: "animationend"
                }
            }
        },
        l = function() {
            return !!n("transform")
        },
        c = function() {
            return !!n("perspective")
        },
        p = function() {
            return !!n("animation")
        };
    (function() {
        return !!n("transition")
    })() && (t.support.transition = new String(o("transition")), t.support.transition.end = h.transition.end[t.support.transition]), p() && (t.support.animation = new String(o("animation")), t.support.animation.end = h.animation.end[t.support.animation]), l() && (t.support.transform = new String(o("transform")), t.support.transform3d = c())
}(window.Zepto || window.jQuery, window, document);
! function(e) {
    var t = !0;
    e.flexslider = function(a, n) {
        var i = e(a);
        i.vars = e.extend({}, e.flexslider.defaults, n);
        var s, r = i.vars.namespace,
            o = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
            l = ("ontouchstart" in window || o || window.DocumentTouch && document instanceof DocumentTouch) && i.vars.touch,
            c = "click touchend MSPointerUp keyup",
            d = "",
            u = "vertical" === i.vars.direction,
            v = i.vars.reverse,
            p = i.vars.itemWidth > 0,
            m = "fade" === i.vars.animation,
            f = "" !== i.vars.asNavFor,
            g = {};
        e.data(a, "flexslider", i), g = {
            init: function() {
                i.animating = !1, i.currentSlide = parseInt(i.vars.startAt ? i.vars.startAt : 0, 10), isNaN(i.currentSlide) && (i.currentSlide = 0), i.animatingTo = i.currentSlide, i.atEnd = 0 === i.currentSlide || i.currentSlide === i.last, i.containerSelector = i.vars.selector.substr(0, i.vars.selector.search(" ")), i.slides = e(i.vars.selector, i), i.container = e(i.containerSelector, i), i.count = i.slides.length, i.syncExists = e(i.vars.sync).length > 0, "slide" === i.vars.animation && (i.vars.animation = "swing"), i.prop = u ? "top" : "marginLeft", i.args = {}, i.manualPause = !1, i.stopped = !1, i.started = !1, i.startTimeout = null, i.transitions = !i.vars.video && !m && i.vars.useCSS && function() {
                    var e = document.createElement("div"),
                        t = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                    for (var a in t)
                        if (void 0 !== e.style[t[a]]) return i.pfx = t[a].replace("Perspective", "").toLowerCase(), i.prop = "-" + i.pfx + "-transform", !0;
                    return !1
                }(), i.ensureAnimationEnd = "", "" !== i.vars.controlsContainer && (i.controlsContainer = e(i.vars.controlsContainer).length > 0 && e(i.vars.controlsContainer)), "" !== i.vars.manualControls && (i.manualControls = e(i.vars.manualControls).length > 0 && e(i.vars.manualControls)), "" !== i.vars.customDirectionNav && (i.customDirectionNav = 2 === e(i.vars.customDirectionNav).length && e(i.vars.customDirectionNav)), i.vars.randomize && (i.slides.sort(function() {
                    return Math.round(Math.random()) - .5
                }), i.container.empty().append(i.slides)), i.doMath(), i.setup("init"), i.vars.controlNav && g.controlNav.setup(), i.vars.directionNav && g.directionNav.setup(), i.vars.keyboard && (1 === e(i.containerSelector).length || i.vars.multipleKeyboard) && e(document).bind("keyup", function(e) {
                    var t = e.keyCode;
                    if (!i.animating && (39 === t || 37 === t)) {
                        var a = 39 === t ? i.getTarget("next") : 37 === t && i.getTarget("prev");
                        i.flexAnimate(a, i.vars.pauseOnAction)
                    }
                }), i.vars.mousewheel && i.bind("mousewheel", function(e, t, a, n) {
                    e.preventDefault();
                    var s = 0 > t ? i.getTarget("next") : i.getTarget("prev");
                    i.flexAnimate(s, i.vars.pauseOnAction)
                }), i.vars.pausePlay && g.pausePlay.setup(), i.vars.slideshow && i.vars.pauseInvisible && g.pauseInvisible.init(), i.vars.slideshow && (i.vars.pauseOnHover && i.hover(function() {
                    i.manualPlay || i.manualPause || i.pause()
                }, function() {
                    i.manualPause || i.manualPlay || i.stopped || i.play()
                }), i.vars.pauseInvisible && g.pauseInvisible.isHidden() || (i.vars.initDelay > 0 ? i.startTimeout = setTimeout(i.play, i.vars.initDelay) : i.play())), f && g.asNav.setup(), l && i.vars.touch && g.touch(), (!m || m && i.vars.smoothHeight) && e(window).bind("resize orientationchange focus", g.resize), i.find("img").attr("draggable", "false"), setTimeout(function() {
                    i.vars.start(i)
                }, 200)
            },
            asNav: {
                setup: function() {
                    i.asNav = !0, i.animatingTo = Math.floor(i.currentSlide / i.move), i.currentItem = i.currentSlide, i.slides.removeClass(r + "active-slide").eq(i.currentItem).addClass(r + "active-slide"), o ? (a._slider = i, i.slides.each(function() {
                        this._gesture = new MSGesture, this._gesture.target = this, this.addEventListener("MSPointerDown", function(e) {
                            e.preventDefault(), e.currentTarget._gesture && e.currentTarget._gesture.addPointer(e.pointerId)
                        }, !1), this.addEventListener("MSGestureTap", function(t) {
                            t.preventDefault();
                            var a = e(this),
                                n = a.index();
                            e(i.vars.asNavFor).data("flexslider").animating || a.hasClass("active") || (i.direction = i.currentItem < n ? "next" : "prev", i.flexAnimate(n, i.vars.pauseOnAction, !1, !0, !0))
                        })
                    })) : i.slides.on(c, function(t) {
                        t.preventDefault();
                        var a = e(this),
                            n = a.index();
                        0 >= a.offset().left - e(i).scrollLeft() && a.hasClass(r + "active-slide") ? i.flexAnimate(i.getTarget("prev"), !0) : e(i.vars.asNavFor).data("flexslider").animating || a.hasClass(r + "active-slide") || (i.direction = i.currentItem < n ? "next" : "prev", i.flexAnimate(n, i.vars.pauseOnAction, !1, !0, !0))
                    })
                }
            },
            controlNav: {
                setup: function() {
                    i.manualControls ? g.controlNav.setupManual() : g.controlNav.setupPaging()
                },
                setupPaging: function() {
                    var t, a, n = "thumbnails" === i.vars.controlNav ? "control-thumbs" : "control-paging",
                        s = 1;
                    if (i.controlNavScaffold = e('<ol class="' + r + "control-nav " + r + n + '"></ol>'), i.pagingCount > 1)
                        for (var o = 0; o < i.pagingCount; o++) {
                            void 0 === (a = i.slides.eq(o)).attr("data-thumb-alt") && a.attr("data-thumb-alt", "");
                            var l = "" !== a.attr("data-thumb-alt") ? l = ' alt="' + a.attr("data-thumb-alt") + '"' : "";
                            if (t = "thumbnails" === i.vars.controlNav ? '<img src="' + a.attr("data-thumb") + '"' + l + "/>" : '<a href="#">' + s + "</a>", "thumbnails" === i.vars.controlNav && !0 === i.vars.thumbCaptions) {
                                var u = a.attr("data-thumbcaption");
                                "" !== u && void 0 !== u && (t += '<span class="' + r + 'caption">' + u + "</span>")
                            }
                            i.controlNavScaffold.append("<li>" + t + "</li>"), s++
                        }
                    i.controlsContainer ? e(i.controlsContainer).append(i.controlNavScaffold) : i.append(i.controlNavScaffold), g.controlNav.set(), g.controlNav.active(), i.controlNavScaffold.delegate("a, img", c, function(t) {
                        if (t.preventDefault(), "" === d || d === t.type) {
                            var a = e(this),
                                n = i.controlNav.index(a);
                            a.hasClass(r + "active") || (i.direction = n > i.currentSlide ? "next" : "prev", i.flexAnimate(n, i.vars.pauseOnAction))
                        }
                        "" === d && (d = t.type), g.setToClearWatchedEvent()
                    })
                },
                setupManual: function() {
                    i.controlNav = i.manualControls, g.controlNav.active(), i.controlNav.bind(c, function(t) {
                        if (t.preventDefault(), "" === d || d === t.type) {
                            var a = e(this),
                                n = i.controlNav.index(a);
                            a.hasClass(r + "active") || (n > i.currentSlide ? i.direction = "next" : i.direction = "prev", i.flexAnimate(n, i.vars.pauseOnAction))
                        }
                        "" === d && (d = t.type), g.setToClearWatchedEvent()
                    })
                },
                set: function() {
                    var t = "thumbnails" === i.vars.controlNav ? "img" : "a";
                    i.controlNav = e("." + r + "control-nav li " + t, i.controlsContainer ? i.controlsContainer : i)
                },
                active: function() {
                    i.controlNav.removeClass(r + "active").eq(i.animatingTo).addClass(r + "active")
                },
                update: function(t, a) {
                    i.pagingCount > 1 && "add" === t ? i.controlNavScaffold.append(e('<li><a href="#">' + i.count + "</a></li>")) : 1 === i.pagingCount ? i.controlNavScaffold.find("li").remove() : i.controlNav.eq(a).closest("li").remove(), g.controlNav.set(), i.pagingCount > 1 && i.pagingCount !== i.controlNav.length ? i.update(a, t) : g.controlNav.active()
                }
            },
            directionNav: {
                setup: function() {
                    var t = e('<ul class="' + r + 'direction-nav"><li class="' + r + 'nav-prev"><a class="' + r + 'prev" href="#">' + i.vars.prevText + '</a></li><li class="' + r + 'nav-next"><a class="' + r + 'next" href="#">' + i.vars.nextText + "</a></li></ul>");
                    i.customDirectionNav ? i.directionNav = i.customDirectionNav : i.controlsContainer ? (e(i.controlsContainer).append(t), i.directionNav = e("." + r + "direction-nav li a", i.controlsContainer)) : (i.append(t), i.directionNav = e("." + r + "direction-nav li a", i)), g.directionNav.update(), i.directionNav.bind(c, function(t) {
                        var a;
                        t.preventDefault(), ("" === d || d === t.type) && (a = e(this).hasClass(r + "next") ? i.getTarget("next") : i.getTarget("prev"), i.flexAnimate(a, i.vars.pauseOnAction)), "" === d && (d = t.type), g.setToClearWatchedEvent()
                    })
                },
                update: function() {
                    var e = r + "disabled";
                    1 === i.pagingCount ? i.directionNav.addClass(e).attr("tabindex", "-1") : i.vars.animationLoop ? i.directionNav.removeClass(e).removeAttr("tabindex") : 0 === i.animatingTo ? i.directionNav.removeClass(e).filter("." + r + "prev").addClass(e).attr("tabindex", "-1") : i.animatingTo === i.last ? i.directionNav.removeClass(e).filter("." + r + "next").addClass(e).attr("tabindex", "-1") : i.directionNav.removeClass(e).removeAttr("tabindex")
                }
            },
            pausePlay: {
                setup: function() {
                    var t = e('<div class="' + r + 'pauseplay"><a href="#"></a></div>');
                    i.controlsContainer ? (i.controlsContainer.append(t), i.pausePlay = e("." + r + "pauseplay a", i.controlsContainer)) : (i.append(t), i.pausePlay = e("." + r + "pauseplay a", i)), g.pausePlay.update(i.vars.slideshow ? r + "pause" : r + "play"), i.pausePlay.bind(c, function(t) {
                        t.preventDefault(), ("" === d || d === t.type) && (e(this).hasClass(r + "pause") ? (i.manualPause = !0, i.manualPlay = !1, i.pause()) : (i.manualPause = !1, i.manualPlay = !0, i.play())), "" === d && (d = t.type), g.setToClearWatchedEvent()
                    })
                },
                update: function(e) {
                    "play" === e ? i.pausePlay.removeClass(r + "pause").addClass(r + "play").html(i.vars.playText) : i.pausePlay.removeClass(r + "play").addClass(r + "pause").html(i.vars.pauseText)
                }
            },
            touch: function() {
                var e, t, n, s, r, l, c, d, f, g = !1,
                    h = 0,
                    S = 0,
                    y = 0;
                o ? (a.style.msTouchAction = "none", a._gesture = new MSGesture, a._gesture.target = a, a.addEventListener("MSPointerDown", function(e) {
                    e.stopPropagation(), i.animating ? e.preventDefault() : (i.pause(), a._gesture.addPointer(e.pointerId), y = 0, s = u ? i.h : i.w, l = Number(new Date), n = p && v && i.animatingTo === i.last ? 0 : p && v ? i.limit - (i.itemW + i.vars.itemMargin) * i.move * i.animatingTo : p && i.currentSlide === i.last ? i.limit : p ? (i.itemW + i.vars.itemMargin) * i.move * i.currentSlide : v ? (i.last - i.currentSlide + i.cloneOffset) * s : (i.currentSlide + i.cloneOffset) * s)
                }, !1), a._slider = i, a.addEventListener("MSGestureChange", function(e) {
                    e.stopPropagation();
                    var t = e.target._slider;
                    if (t) {
                        var i = -e.translationX,
                            o = -e.translationY;
                        return r = y += u ? o : i, g = u ? Math.abs(y) < Math.abs(-i) : Math.abs(y) < Math.abs(-o), e.detail === e.MSGESTURE_FLAG_INERTIA ? void setImmediate(function() {
                            a._gesture.stop()
                        }) : void((!g || Number(new Date) - l > 500) && (e.preventDefault(), !m && t.transitions && (t.vars.animationLoop || (r = y / (0 === t.currentSlide && 0 > y || t.currentSlide === t.last && y > 0 ? Math.abs(y) / s + 2 : 1)), t.setProps(n + r, "setTouch"))))
                    }
                }, !1), a.addEventListener("MSGestureEnd", function(a) {
                    a.stopPropagation();
                    var i = a.target._slider;
                    if (i) {
                        if (i.animatingTo === i.currentSlide && !g && null !== r) {
                            var o = v ? -r : r,
                                c = o > 0 ? i.getTarget("next") : i.getTarget("prev");
                            i.canAdvance(c) && (Number(new Date) - l < 550 && Math.abs(o) > 50 || Math.abs(o) > s / 2) ? i.flexAnimate(c, i.vars.pauseOnAction) : m || i.flexAnimate(i.currentSlide, i.vars.pauseOnAction, !0)
                        }
                        e = null, t = null, r = null, n = null, y = 0
                    }
                }, !1)) : (c = function(r) {
                    i.animating ? r.preventDefault() : (window.navigator.msPointerEnabled || 1 === r.touches.length) && (i.pause(), s = u ? i.h : i.w, l = Number(new Date), h = r.touches[0].pageX, S = r.touches[0].pageY, n = p && v && i.animatingTo === i.last ? 0 : p && v ? i.limit - (i.itemW + i.vars.itemMargin) * i.move * i.animatingTo : p && i.currentSlide === i.last ? i.limit : p ? (i.itemW + i.vars.itemMargin) * i.move * i.currentSlide : v ? (i.last - i.currentSlide + i.cloneOffset) * s : (i.currentSlide + i.cloneOffset) * s, e = u ? S : h, t = u ? h : S, a.addEventListener("touchmove", d, !1), a.addEventListener("touchend", f, !1))
                }, d = function(a) {
                    h = a.touches[0].pageX, S = a.touches[0].pageY, r = u ? e - S : e - h;
                    (!(g = u ? Math.abs(r) < Math.abs(h - t) : Math.abs(r) < Math.abs(S - t)) || Number(new Date) - l > 500) && (a.preventDefault(), !m && i.transitions && (i.vars.animationLoop || (r /= 0 === i.currentSlide && 0 > r || i.currentSlide === i.last && r > 0 ? Math.abs(r) / s + 2 : 1), i.setProps(n + r, "setTouch")))
                }, f = function(o) {
                    if (a.removeEventListener("touchmove", d, !1), i.animatingTo === i.currentSlide && !g && null !== r) {
                        var c = v ? -r : r,
                            u = c > 0 ? i.getTarget("next") : i.getTarget("prev");
                        i.canAdvance(u) && (Number(new Date) - l < 550 && Math.abs(c) > 50 || Math.abs(c) > s / 2) ? i.flexAnimate(u, i.vars.pauseOnAction) : m || i.flexAnimate(i.currentSlide, i.vars.pauseOnAction, !0)
                    }
                    a.removeEventListener("touchend", f, !1), e = null, t = null, r = null, n = null
                }, a.addEventListener("touchstart", c, !1))
            },
            resize: function() {
                !i.animating && i.is(":visible") && (p || i.doMath(), m ? g.smoothHeight() : p ? (i.slides.width(i.computedW), i.update(i.pagingCount), i.setProps()) : u ? (i.viewport.height(i.h), i.setProps(i.h, "setTotal")) : (i.vars.smoothHeight && g.smoothHeight(), i.newSlides.width(i.computedW), i.setProps(i.computedW, "setTotal")))
            },
            smoothHeight: function(e) {
                if (!u || m) {
                    var t = m ? i : i.viewport;
                    e ? t.animate({
                        height: i.slides.eq(i.animatingTo).innerHeight()
                    }, e) : t.innerHeight(i.slides.eq(i.animatingTo).innerHeight())
                }
            },
            sync: function(t) {
                var a = e(i.vars.sync).data("flexslider"),
                    n = i.animatingTo;
                switch (t) {
                    case "animate":
                        a.flexAnimate(n, i.vars.pauseOnAction, !1, !0);
                        break;
                    case "play":
                        a.playing || a.asNav || a.play();
                        break;
                    case "pause":
                        a.pause()
                }
            },
            uniqueID: function(t) {
                return t.filter("[id]").add(t.find("[id]")).each(function() {
                    var t = e(this);
                    t.attr("id", t.attr("id") + "_clone")
                }), t
            },
            pauseInvisible: {
                visProp: null,
                init: function() {
                    var e = g.pauseInvisible.getHiddenProp();
                    if (e) {
                        var t = e.replace(/[H|h]idden/, "") + "visibilitychange";
                        document.addEventListener(t, function() {
                            g.pauseInvisible.isHidden() ? i.startTimeout ? clearTimeout(i.startTimeout) : i.pause() : i.started ? i.play() : i.vars.initDelay > 0 ? setTimeout(i.play, i.vars.initDelay) : i.play()
                        })
                    }
                },
                isHidden: function() {
                    var e = g.pauseInvisible.getHiddenProp();
                    return !!e && document[e]
                },
                getHiddenProp: function() {
                    var e = ["webkit", "moz", "ms", "o"];
                    if ("hidden" in document) return "hidden";
                    for (var t = 0; t < e.length; t++)
                        if (e[t] + "Hidden" in document) return e[t] + "Hidden";
                    return null
                }
            },
            setToClearWatchedEvent: function() {
                clearTimeout(s), s = setTimeout(function() {
                    d = ""
                }, 3e3)
            }
        }, i.flexAnimate = function(t, a, n, s, o) {
            if (i.vars.animationLoop || t === i.currentSlide || (i.direction = t > i.currentSlide ? "next" : "prev"), f && 1 === i.pagingCount && (i.direction = i.currentItem < t ? "next" : "prev"), !i.animating && (i.canAdvance(t, o) || n) && i.is(":visible")) {
                if (f && s) {
                    var c = e(i.vars.asNavFor).data("flexslider");
                    if (i.atEnd = 0 === t || t === i.count - 1, c.flexAnimate(t, !0, !1, !0, o), i.direction = i.currentItem < t ? "next" : "prev", c.direction = i.direction, Math.ceil((t + 1) / i.visible) - 1 === i.currentSlide || 0 === t) return i.currentItem = t, i.slides.removeClass(r + "active-slide").eq(t).addClass(r + "active-slide"), !1;
                    i.currentItem = t, i.slides.removeClass(r + "active-slide").eq(t).addClass(r + "active-slide"), t = Math.floor(t / i.visible)
                }
                if (i.animating = !0, i.animatingTo = t, a && i.pause(), i.vars.before(i), i.syncExists && !o && g.sync("animate"), i.vars.controlNav && g.controlNav.active(), p || i.slides.removeClass(r + "active-slide").eq(t).addClass(r + "active-slide"), i.atEnd = 0 === t || t === i.last, i.vars.directionNav && g.directionNav.update(), t === i.last && (i.vars.end(i), i.vars.animationLoop || i.pause()), m) l ? (i.slides.eq(i.currentSlide).css({
                    opacity: 0,
                    zIndex: 1
                }), i.slides.eq(t).css({
                    opacity: 1,
                    zIndex: 2
                }), i.wrapup(y)) : (i.slides.eq(i.currentSlide).css({
                    zIndex: 1
                }).animate({
                    opacity: 0
                }, i.vars.animationSpeed, i.vars.easing), i.slides.eq(t).css({
                    zIndex: 2
                }).animate({
                    opacity: 1
                }, i.vars.animationSpeed, i.vars.easing, i.wrapup));
                else {
                    var d, h, S, y = u ? i.slides.filter(":first").height() : i.computedW;
                    p ? (d = i.vars.itemMargin, h = (S = (i.itemW + d) * i.move * i.animatingTo) > i.limit && 1 !== i.visible ? i.limit : S) : h = 0 === i.currentSlide && t === i.count - 1 && i.vars.animationLoop && "next" !== i.direction ? v ? (i.count + i.cloneOffset) * y : 0 : i.currentSlide === i.last && 0 === t && i.vars.animationLoop && "prev" !== i.direction ? v ? 0 : (i.count + 1) * y : v ? (i.count - 1 - t + i.cloneOffset) * y : (t + i.cloneOffset) * y, i.setProps(h, "", i.vars.animationSpeed), i.transitions ? (i.vars.animationLoop && i.atEnd || (i.animating = !1, i.currentSlide = i.animatingTo), i.container.unbind("webkitTransitionEnd transitionend"), i.container.bind("webkitTransitionEnd transitionend", function() {
                        clearTimeout(i.ensureAnimationEnd), i.wrapup(y)
                    }), clearTimeout(i.ensureAnimationEnd), i.ensureAnimationEnd = setTimeout(function() {
                        i.wrapup(y)
                    }, i.vars.animationSpeed + 100)) : i.container.animate(i.args, i.vars.animationSpeed, i.vars.easing, function() {
                        i.wrapup(y)
                    })
                }
                i.vars.smoothHeight && g.smoothHeight(i.vars.animationSpeed)
            }
        }, i.wrapup = function(e) {
            m || p || (0 === i.currentSlide && i.animatingTo === i.last && i.vars.animationLoop ? i.setProps(e, "jumpEnd") : i.currentSlide === i.last && 0 === i.animatingTo && i.vars.animationLoop && i.setProps(e, "jumpStart")), i.animating = !1, i.currentSlide = i.animatingTo, i.vars.after(i)
        }, i.animateSlides = function() {
            !i.animating && t && i.flexAnimate(i.getTarget("next"))
        }, i.pause = function() {
            clearInterval(i.animatedSlides), i.animatedSlides = null, i.playing = !1, i.vars.pausePlay && g.pausePlay.update("play"), i.syncExists && g.sync("pause")
        }, i.play = function() {
            i.playing && clearInterval(i.animatedSlides), i.animatedSlides = i.animatedSlides || setInterval(i.animateSlides, i.vars.slideshowSpeed), i.started = i.playing = !0, i.vars.pausePlay && g.pausePlay.update("pause"), i.syncExists && g.sync("play")
        }, i.stop = function() {
            i.pause(), i.stopped = !0
        }, i.canAdvance = function(e, t) {
            var a = f ? i.pagingCount - 1 : i.last;
            return !!t || (!(!f || i.currentItem !== i.count - 1 || 0 !== e || "prev" !== i.direction) || (!f || 0 !== i.currentItem || e !== i.pagingCount - 1 || "next" === i.direction) && (!(e === i.currentSlide && !f) && (!!i.vars.animationLoop || (!i.atEnd || 0 !== i.currentSlide || e !== a || "next" === i.direction) && (!i.atEnd || i.currentSlide !== a || 0 !== e || "next" !== i.direction))))
        }, i.getTarget = function(e) {
            return i.direction = e, "next" === e ? i.currentSlide === i.last ? 0 : i.currentSlide + 1 : 0 === i.currentSlide ? i.last : i.currentSlide - 1
        }, i.setProps = function(e, t, a) {
            var n, s = (n = e || (i.itemW + i.vars.itemMargin) * i.move * i.animatingTo, -1 * function() {
                if (p) return "setTouch" === t ? e : v && i.animatingTo === i.last ? 0 : v ? i.limit - (i.itemW + i.vars.itemMargin) * i.move * i.animatingTo : i.animatingTo === i.last ? i.limit : n;
                switch (t) {
                    case "setTotal":
                        return v ? (i.count - 1 - i.currentSlide + i.cloneOffset) * e : (i.currentSlide + i.cloneOffset) * e;
                    case "setTouch":
                        return e;
                    case "jumpEnd":
                        return v ? e : i.count * e;
                    case "jumpStart":
                        return v ? i.count * e : e;
                    default:
                        return e
                }
            }() + "px");
            i.transitions && (s = u ? "translate3d(0," + s + ",0)" : "translate3d(" + s + ",0,0)", a = void 0 !== a ? a / 1e3 + "s" : "0s", i.container.css("-" + i.pfx + "-transition-duration", a), i.container.css("transition-duration", a)), i.args[i.prop] = s, (i.transitions || void 0 === a) && i.container.css(i.args), i.container.css("transform", s)
        }, i.setup = function(t) {
            var a, n;
            m ? (i.slides.css({
                width: "100%",
                float: "left",
                marginRight: "-100%",
                position: "relative"
            }), "init" === t && (l ? i.slides.css({
                opacity: 0,
                display: "block",
                webkitTransition: "opacity " + i.vars.animationSpeed / 1e3 + "s ease",
                zIndex: 1
            }).eq(i.currentSlide).css({
                opacity: 1,
                zIndex: 2
            }) : 0 == i.vars.fadeFirstSlide ? i.slides.css({
                opacity: 0,
                display: "block",
                zIndex: 1
            }).eq(i.currentSlide).css({
                zIndex: 2
            }).css({
                opacity: 1
            }) : i.slides.css({
                opacity: 0,
                display: "block",
                zIndex: 1
            }).eq(i.currentSlide).css({
                zIndex: 2
            }).animate({
                opacity: 1
            }, i.vars.animationSpeed, i.vars.easing)), i.vars.smoothHeight && g.smoothHeight()) : ("init" === t && (i.viewport = e('<div class="' + r + 'viewport"></div>').css({
                overflow: "hidden",
                position: "relative"
            }).appendTo(i).append(i.container), i.cloneCount = 0, i.cloneOffset = 0, v && (n = e.makeArray(i.slides).reverse(), i.slides = e(n), i.container.empty().append(i.slides))), i.vars.animationLoop && !p && (i.cloneCount = 2, i.cloneOffset = 1, "init" !== t && i.container.find(".clone").remove(), i.container.append(g.uniqueID(i.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(g.uniqueID(i.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))), i.newSlides = e(i.vars.selector, i), a = v ? i.count - 1 - i.currentSlide + i.cloneOffset : i.currentSlide + i.cloneOffset, u && !p ? (i.container.height(200 * (i.count + i.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function() {
                i.newSlides.css({
                    display: "block"
                }), i.doMath(), i.viewport.height(i.h), i.setProps(a * i.h, "init")
            }, "init" === t ? 100 : 0)) : (i.container.width(200 * (i.count + i.cloneCount) + "%"), i.setProps(a * i.computedW, "init"), setTimeout(function() {
                i.doMath(), i.newSlides.css({
                    width: i.computedW,
                    marginRight: i.computedM,
                    float: "left",
                    display: "block"
                }), i.vars.smoothHeight && g.smoothHeight()
            }, "init" === t ? 100 : 0)));
            p || i.slides.removeClass(r + "active-slide").eq(i.currentSlide).addClass(r + "active-slide"), i.vars.init(i)
        }, i.doMath = function() {
            var e = i.slides.first(),
                t = i.vars.itemMargin,
                a = i.vars.minItems,
                n = i.vars.maxItems;
            i.w = void 0 === i.viewport ? i.width() : i.viewport.width(), i.h = e.height(), i.boxPadding = e.outerWidth() - e.width(), p ? (i.itemT = i.vars.itemWidth + t, i.itemM = t, i.minW = a ? a * i.itemT : i.w, i.maxW = n ? n * i.itemT - t : i.w, i.itemW = i.minW > i.w ? (i.w - t * (a - 1)) / a : i.maxW < i.w ? (i.w - t * (n - 1)) / n : i.vars.itemWidth > i.w ? i.w : i.vars.itemWidth, i.visible = Math.floor(i.w / i.itemW), i.move = i.vars.move > 0 && i.vars.move < i.visible ? i.vars.move : i.visible, i.pagingCount = Math.ceil((i.count - i.visible) / i.move + 1), i.last = i.pagingCount - 1, i.limit = 1 === i.pagingCount ? 0 : i.vars.itemWidth > i.w ? i.itemW * (i.count - 1) + t * (i.count - 1) : (i.itemW + t) * i.count - i.w - t) : (i.itemW = i.w, i.itemM = t, i.pagingCount = i.count, i.last = i.count - 1), i.computedW = i.itemW - i.boxPadding, i.computedM = i.itemM
        }, i.update = function(e, t) {
            i.doMath(), p || (e < i.currentSlide ? i.currentSlide += 1 : e <= i.currentSlide && 0 !== e && (i.currentSlide -= 1), i.animatingTo = i.currentSlide), i.vars.controlNav && !i.manualControls && ("add" === t && !p || i.pagingCount > i.controlNav.length ? g.controlNav.update("add") : ("remove" === t && !p || i.pagingCount < i.controlNav.length) && (p && i.currentSlide > i.last && (i.currentSlide -= 1, i.animatingTo -= 1), g.controlNav.update("remove", i.last))), i.vars.directionNav && g.directionNav.update()
        }, i.addSlide = function(t, a) {
            var n = e(t);
            i.count += 1, i.last = i.count - 1, u && v ? void 0 !== a ? i.slides.eq(i.count - a).after(n) : i.container.prepend(n) : void 0 !== a ? i.slides.eq(a).before(n) : i.container.append(n), i.update(a, "add"), i.slides = e(i.vars.selector + ":not(.clone)", i), i.setup(), i.vars.added(i)
        }, i.removeSlide = function(t) {
            var a = isNaN(t) ? i.slides.index(e(t)) : t;
            i.count -= 1, i.last = i.count - 1, isNaN(t) ? e(t, i.slides).remove() : u && v ? i.slides.eq(i.last).remove() : i.slides.eq(t).remove(), i.doMath(), i.update(a, "remove"), i.slides = e(i.vars.selector + ":not(.clone)", i), i.setup(), i.vars.removed(i)
        }, g.init()
    }, e(window).blur(function(e) {
        t = !1
    }).focus(function(e) {
        t = !0
    }), e.flexslider.defaults = {
        namespace: "flex-",
        selector: ".slides > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: !1,
        animationLoop: !0,
        smoothHeight: !1,
        startAt: 0,
        slideshow: !0,
        slideshowSpeed: 7e3,
        animationSpeed: 600,
        initDelay: 0,
        randomize: !1,
        fadeFirstSlide: !0,
        thumbCaptions: !1,
        pauseOnAction: !0,
        pauseOnHover: !1,
        pauseInvisible: !0,
        useCSS: !0,
        touch: !0,
        video: !1,
        controlNav: !0,
        directionNav: !0,
        prevText: "Previous",
        nextText: "Next",
        keyboard: !0,
        multipleKeyboard: !1,
        mousewheel: !1,
        pausePlay: !1,
        pauseText: "Pause",
        playText: "Play",
        controlsContainer: "",
        manualControls: "",
        customDirectionNav: "",
        sync: "",
        asNavFor: "",
        itemWidth: 0,
        itemMargin: 0,
        minItems: 1,
        maxItems: 0,
        move: 0,
        allowOneSlide: !0,
        start: function() {},
        before: function() {},
        after: function() {},
        end: function() {},
        added: function() {},
        removed: function() {},
        init: function() {}
    }, e.fn.flexslider = function(t) {
        if (void 0 === t && (t = {}), "object" == typeof t) return this.each(function() {
            var a = e(this),
                n = t.selector ? t.selector : ".slides > li",
                i = a.find(n);
            1 === i.length && !1 === t.allowOneSlide || 0 === i.length ? (i.fadeIn(400), t.start && t.start(a)) : void 0 === a.data("flexslider") && new e.flexslider(this, t)
        });
        var a = e(this).data("flexslider");
        switch (t) {
            case "play":
                a.play();
                break;
            case "pause":
                a.pause();
                break;
            case "stop":
                a.stop();
                break;
            case "next":
                a.flexAnimate(a.getTarget("next"), !0);
                break;
            case "prev":
            case "previous":
                a.flexAnimate(a.getTarget("prev"), !0);
                break;
            default:
                "number" == typeof t && a.flexAnimate(t, !0)
        }
    }
}(jQuery);
! function(e) {
    e.fn.jflickrfeed = function(i, a) {
        var t = (i = e.extend(!0, {
                flickrbase: "http://api.flickr.com/services/feeds/",
                feedapi: "photos_public.gne",
                limit: 20,
                qstrings: {
                    lang: "en-us",
                    format: "json",
                    jsoncallback: "?"
                },
                cleanDescription: !0,
                useTemplate: !0,
                itemTemplate: "",
                itemCallback: function() {}
            }, i)).flickrbase + i.feedapi + "?",
            c = !0;
        for (var n in i.qstrings) c || (t += "&"), t += n + "=" + i.qstrings[n], c = !1;
        return e(this).each(function() {
            var c = e(this),
                n = this;
            e.getJSON(t, function(t) {
                e.each(t.items, function(e, a) {
                    if (e < i.limit) {
                        if (i.cleanDescription) {
                            var t = /<p>(.*?)<\/p>/g,
                                m = a.description;
                            t.test(m) && (a.description = m.match(t)[2], void 0 != a.description && (a.description = a.description.replace("<p>", "").replace("</p>", "")))
                        }
                        if (a.image_s = a.media.m.replace("_m", "_s"), a.image_t = a.media.m.replace("_m", "_t"), a.image_m = a.media.m.replace("_m", "_m"), a.image = a.media.m.replace("_m", ""), a.image_b = a.media.m.replace("_m", "_b"), delete a.media, i.useTemplate) {
                            var r = i.itemTemplate;
                            for (var l in a) {
                                var p = new RegExp("{{" + l + "}}", "g");
                                r = r.replace(p, a[l])
                            }
                            c.append(r)
                        }
                        i.itemCallback.call(n, a)
                    }
                }), e.isFunction(a) && a.call(n, t)
            })
        })
    }
}(jQuery);
"function" != typeof Object.create && (Object.create = function(t) {
        function e() {}
        return e.prototype = t, new e
    }),
    function(t, e, a, s) {
        var i = {
            API_URL: "https://api.instagram.com/v1",
            initialize: function(e, a) {
                this.elem = a, this.$elem = t(a), this.accessData = t.fn.spectragram.accessData, this.accessToken = this.accessData.accessToken, this.clientID = this.accessData.clientID, this.userCredentials = this.clientID + "&access_token=" + this.accessToken, this.options = t.extend({}, t.fn.spectragram.options, e), this.messages = {
                    defaultImageAltText: "Instagram Photo related with " + this.options.query,
                    notFound: "This user account is private or doesn't have any photos."
                }
            },
            getRecentMedia: function(t) {
                var e = this,
                    a = "/users/" + t + "/media/recent/?" + e.userCredentials;
                e.fetch(a).done(function(t) {
                    e.display(t)
                })
            },
            getUserFeed: function() {
                var e = this,
                    a = "/users/search?q=" + e.options.query + "&count=" + e.options.max + "&access_token=" + e.accessToken,
                    s = !1;
                e.fetch(a).done(function(a) {
                    if (a.data.length)
                        for (var i = a.data.length, n = 0; n < i; n++) a.data[n].username === e.options.query && (e.getRecentMedia(a.data[n].id), s = !0);
                    !1 === s && t.error("Spectragram.js - Error: the username " + e.options.query + " does not exist.")
                })
            },
            getPopular: function() {
                var t = this,
                    e = "/media/popular?client_id=" + t.userCredentials;
                t.fetch(e).done(function(e) {
                    t.display(e)
                })
            },
            getRecentTagged: function() {
                var e = this,
                    a = "/tags/" + e.options.query + "/media/recent?client_id=" + e.userCredentials;
                e.fetch(a).done(function(a) {
                    a.data.length ? e.display(a) : t.error("Spectragram.js - Error: the tag " + e.options.query + " does not have results.")
                })
            },
            fetch: function(e) {
                var a = this.API_URL + e;
                return t.ajax({
                    type: "GET",
                    dataType: "jsonp",
                    cache: !1,
                    url: a
                })
            },
            display: function(e) {
                var a, s, i, n, o, r, c, h, d, u = [];
                if (i = 0 === t(this.options.wrapEachWith).length, void 0 === e.data || 200 !== e.meta.code || 0 === e.data.length) i ? this.$elem.append(this.messages.notFound) : this.$elem.append(t(this.options.wrapEachWith).append(this.messages.notFound));
                else {
                    c = this.options.max >= e.data.length ? e.data.length : this.options.max, h = this.options.size;
                    for (var l = 0; l < c; l++) "small" === h ? (d = e.data[l].images.thumbnail.url, o = e.data[l].images.thumbnail.height, r = e.data[l].images.thumbnail.width) : "medium" === h ? (d = e.data[l].images.low_resolution.url, o = e.data[l].images.low_resolution.height, r = e.data[l].images.low_resolution.width) : (d = e.data[l].images.standard_resolution.url, o = e.data[l].images.standard_resolution.height, r = e.data[l].images.standard_resolution.width), n = null !== e.data[l].caption ? t("<span>").text(e.data[l].caption.text).html() : this.messages.defaultImageAltText, s = t("<img>", {
                        alt: n,
                        attr: {
                            height: o,
                            width: r
                        },
                        src: d
                    }), a = t("<a>", {
                        href: e.data[l].link,
                        target: "_blank",
                        title: n
                    }).append(s), i ? u.push(a) : u.push(t(this.options.wrapEachWith).append(a));
                    this.$elem.append(u)
                }
                "function" == typeof this.options.complete && this.options.complete.call(this)
            }
        };
        jQuery.fn.spectragram = function(e, a) {
            jQuery.fn.spectragram.accessData.clientID ? this.each(function() {
                var s = Object.create(i);
                if (s.initialize(a, this), s[e]) return s[e](this);
                t.error("Method " + e + " does not exist on jQuery.spectragram")
            }) : t.error("You must define an accessToken and a clientID on jQuery.spectragram")
        }, jQuery.fn.spectragram.options = {
            complete: null,
            max: 10,
            query: "instagram",
            size: "medium",
            wrapEachWith: "<li></li>"
        }, jQuery.fn.spectragram.accessData = {
            accessToken: null,
            clientID: null
        }
    }(jQuery, window, document);
! function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function(e) {
    function t(t, s) {
        var n, a, o, u = t.nodeName.toLowerCase();
        return "area" === u ? (a = (n = t.parentNode).name, !(!t.href || !a || "map" !== n.nodeName.toLowerCase()) && (!!(o = e("img[usemap='#" + a + "']")[0]) && i(o))) : (/input|select|textarea|button|object/.test(u) ? !t.disabled : "a" === u ? t.href || s : s) && i(t)
    }

    function i(t) {
        return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
            return "hidden" === e.css(this, "visibility")
        }).length
    }
    var s, n, a, o;
    e.ui = e.ui || {}, e.extend(e.ui, {
        version: "1.11.1",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), e.fn.extend({
        scrollParent: function(t) {
            var i = this.css("position"),
                s = "absolute" === i,
                n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                a = this.parents().filter(function() {
                    var t = e(this);
                    return (!s || "static" !== t.css("position")) && n.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
                }).eq(0);
            return "fixed" !== i && a.length ? a : e(this[0].ownerDocument || document)
        },
        uniqueId: (o = 0, function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++o)
            })
        }),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id")
            })
        }
    }), e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
            return function(i) {
                return !!e.data(i, t)
            }
        }) : function(t, i, s) {
            return !!e.data(t, s[3])
        },
        focusable: function(i) {
            return t(i, !isNaN(e.attr(i, "tabindex")))
        },
        tabbable: function(i) {
            var s = e.attr(i, "tabindex"),
                n = isNaN(s);
            return (n || s >= 0) && t(i, !n)
        }
    }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(t, i) {
        function s(t, i, s, a) {
            return e.each(n, function() {
                i -= parseFloat(e.css(t, "padding" + this)) || 0, s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), a && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
            }), i
        }
        var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
            a = i.toLowerCase(),
            o = {
                innerWidth: e.fn.innerWidth,
                innerHeight: e.fn.innerHeight,
                outerWidth: e.fn.outerWidth,
                outerHeight: e.fn.outerHeight
            };
        e.fn["inner" + i] = function(t) {
            return void 0 === t ? o["inner" + i].call(this) : this.each(function() {
                e(this).css(a, s(this, t) + "px")
            })
        }, e.fn["outer" + i] = function(t, n) {
            return "number" != typeof t ? o["outer" + i].call(this, t) : this.each(function() {
                e(this).css(a, s(this, t, !0, n) + "px")
            })
        }
    }), e.fn.addBack || (e.fn.addBack = function(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = (a = e.fn.removeData, function(t) {
        return arguments.length ? a.call(this, e.camelCase(t)) : a.call(this)
    })), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.fn.extend({
        focus: (n = e.fn.focus, function(t, i) {
            return "number" == typeof t ? this.each(function() {
                var s = this;
                setTimeout(function() {
                    e(s).focus(), i && i.call(s)
                }, t)
            }) : n.apply(this, arguments)
        }),
        disableSelection: (s = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown", function() {
            return this.bind(s + ".ui-disableSelection", function(e) {
                e.preventDefault()
            })
        }),
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        },
        zIndex: function(t) {
            if (void 0 !== t) return this.css("zIndex", t);
            if (this.length)
                for (var i, s, n = e(this[0]); n.length && n[0] !== document;) {
                    if (("absolute" === (i = n.css("position")) || "relative" === i || "fixed" === i) && (s = parseInt(n.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
                    n = n.parent()
                }
            return 0
        }
    }), e.ui.plugin = {
        add: function(t, i, s) {
            var n, a = e.ui[t].prototype;
            for (n in s) a.plugins[n] = a.plugins[n] || [], a.plugins[n].push([i, s[n]])
        },
        call: function(e, t, i, s) {
            var n, a = e.plugins[t];
            if (a && (s || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType))
                for (n = 0; a.length > n; n++) e.options[a[n][0]] && a[n][1].apply(e.element, i)
        }
    };
    var u, r = 0,
        h = Array.prototype.slice;
    e.cleanData = (u = e.cleanData, function(t) {
        var i, s, n;
        for (n = 0; null != (s = t[n]); n++) try {
            (i = e._data(s, "events")) && i.remove && e(s).triggerHandler("remove")
        } catch (e) {}
        u(t)
    }), e.widget = function(t, i, s) {
        var n, a, o, u, r = {},
            h = t.split(".")[0];
        return t = t.split(".")[1], n = h + "-" + t, s || (s = i, i = e.Widget), e.expr[":"][n.toLowerCase()] = function(t) {
            return !!e.data(t, n)
        }, e[h] = e[h] || {}, a = e[h][t], o = e[h][t] = function(e, t) {
            return this._createWidget ? void(arguments.length && this._createWidget(e, t)) : new o(e, t)
        }, e.extend(o, a, {
            version: s.version,
            _proto: e.extend({}, s),
            _childConstructors: []
        }), (u = new i).options = e.widget.extend({}, u.options), e.each(s, function(t, s) {
            return e.isFunction(s) ? void(r[t] = (n = function() {
                return i.prototype[t].apply(this, arguments)
            }, a = function(e) {
                return i.prototype[t].apply(this, e)
            }, function() {
                var e, t = this._super,
                    i = this._superApply;
                return this._super = n, this._superApply = a, e = s.apply(this, arguments), this._super = t, this._superApply = i, e
            })) : void(r[t] = s);
            var n, a
        }), o.prototype = e.widget.extend(u, {
            widgetEventPrefix: a ? u.widgetEventPrefix || t : t
        }, r, {
            constructor: o,
            namespace: h,
            widgetName: t,
            widgetFullName: n
        }), a ? (e.each(a._childConstructors, function(t, i) {
            var s = i.prototype;
            e.widget(s.namespace + "." + s.widgetName, o, i._proto)
        }), delete a._childConstructors) : i._childConstructors.push(o), e.widget.bridge(t, o), o
    }, e.widget.extend = function(t) {
        for (var i, s, n = h.call(arguments, 1), a = 0, o = n.length; o > a; a++)
            for (i in n[a]) s = n[a][i], n[a].hasOwnProperty(i) && void 0 !== s && (t[i] = e.isPlainObject(s) ? e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], s) : e.widget.extend({}, s) : s);
        return t
    }, e.widget.bridge = function(t, i) {
        var s = i.prototype.widgetFullName || t;
        e.fn[t] = function(n) {
            var a = "string" == typeof n,
                o = h.call(arguments, 1),
                u = this;
            return n = !a && o.length ? e.widget.extend.apply(null, [n].concat(o)) : n, a ? this.each(function() {
                var i, a = e.data(this, s);
                return "instance" === n ? (u = a, !1) : a ? e.isFunction(a[n]) && "_" !== n.charAt(0) ? (i = a[n].apply(a, o)) !== a && void 0 !== i ? (u = i && i.jquery ? u.pushStack(i.get()) : i, !1) : void 0 : e.error("no such method '" + n + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + n + "'")
            }) : this.each(function() {
                var t = e.data(this, s);
                t ? (t.option(n || {}), t._init && t._init()) : e.data(this, s, new i(n, this))
            }), u
        }
    }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(t, i) {
            i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = r++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(e) {
                    e.target === i && this.destroy()
                }
            }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: e.noop,
        widget: function() {
            return this.element
        },
        option: function(t, i) {
            var s, n, a, o = t;
            if (0 === arguments.length) return e.widget.extend({}, this.options);
            if ("string" == typeof t)
                if (o = {}, s = t.split("."), t = s.shift(), s.length) {
                    for (n = o[t] = e.widget.extend({}, this.options[t]), a = 0; s.length - 1 > a; a++) n[s[a]] = n[s[a]] || {}, n = n[s[a]];
                    if (t = s.pop(), 1 === arguments.length) return void 0 === n[t] ? null : n[t];
                    n[t] = i
                } else {
                    if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                    o[t] = i
                }
            return this._setOptions(o), this
        },
        _setOptions: function(e) {
            var t;
            for (t in e) this._setOption(t, e[t]);
            return this
        },
        _setOption: function(e, t) {
            return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _on: function(t, i, s) {
            var n, a = this;
            "boolean" != typeof t && (s = i, i = t, t = !1), s ? (i = n = e(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), e.each(s, function(s, o) {
                function u() {
                    return t || !0 !== a.options.disabled && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? a[o] : o).apply(a, arguments) : void 0
                }
                "string" != typeof o && (u.guid = o.guid = o.guid || u.guid || e.guid++);
                var r = s.match(/^([\w:-]*)\s*(.*)$/),
                    h = r[1] + a.eventNamespace,
                    l = r[2];
                l ? n.delegate(l, h, u) : i.bind(h, u)
            })
        },
        _off: function(e, t) {
            t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
        },
        _delay: function(e, t) {
            var i = this;
            return setTimeout(function() {
                return ("string" == typeof e ? i[e] : e).apply(i, arguments)
            }, t || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function(t) {
                    e(t.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(t) {
                    e(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function(t) {
                    e(t.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(t) {
                    e(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(t, i, s) {
            var n, a, o = this.options[t];
            if (s = s || {}, (i = e.Event(i)).type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], a = i.originalEvent)
                for (n in a) n in i || (i[n] = a[n]);
            return this.element.trigger(i, s), !(e.isFunction(o) && !1 === o.apply(this.element[0], [i].concat(s)) || i.isDefaultPrevented())
        }
    }, e.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(t, i) {
        e.Widget.prototype["_" + t] = function(s, n, a) {
            "string" == typeof n && (n = {
                effect: n
            });
            var o, u = n ? !0 === n || "number" == typeof n ? i : n.effect || i : t;
            "number" == typeof(n = n || {}) && (n = {
                duration: n
            }), o = !e.isEmptyObject(n), n.complete = a, n.delay && s.delay(n.delay), o && e.effects && e.effects.effect[u] ? s[t](n) : u !== t && s[u] ? s[u](n.duration, n.easing, a) : s.queue(function(i) {
                e(this)[t](), a && a.call(s[0]), i()
            })
        }
    }), e.widget;
    var l = !1;
    e(document).mouseup(function() {
        l = !1
    }), e.widget("ui.mouse", {
        version: "1.11.1",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function(e) {
                return t._mouseDown(e)
            }).bind("click." + this.widgetName, function(i) {
                return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
            }), this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(t) {
            if (!l) {
                this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
                var i = this,
                    s = 1 === t.which,
                    n = !("string" != typeof this.options.cancel || !t.target.nodeName) && e(t.target).closest(this.options.cancel).length;
                return !(s && !n && this._mouseCapture(t)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    i.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(t), !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
                    return i._mouseMove(e)
                }, this._mouseUpDelegate = function(e) {
                    return i._mouseUp(e)
                }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), l = !0, !0))
            }
        },
        _mouseMove: function(t) {
            return e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button ? this._mouseUp(t) : t.which ? this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, t), this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted) : this._mouseUp(t)
        },
        _mouseUp: function(t) {
            return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), l = !1, !1
        },
        _mouseDistanceMet: function(e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    }), e.widget("ui.slider", e.ui.mouse, {
        version: "1.11.1",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        numPages: 5,
        _create: function() {
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
        },
        _refresh: function() {
            this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
        },
        _createHandles: function() {
            var t, i, s = this.options,
                n = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                a = [];
            for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), t = n.length; i > t; t++) a.push("<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>");
            this.handles = n.add(e(a.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function(t) {
                e(this).data("ui-slider-handle-index", t)
            })
        },
        _createRange: function() {
            var t = this.options,
                i = "";
            t.range ? (!0 === t.range && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : e.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                left: "",
                bottom: ""
            }) : (this.range = e("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === t.range || "max" === t.range ? " ui-slider-range-" + t.range : ""))) : (this.range && this.range.remove(), this.range = null)
        },
        _setupEvents: function() {
            this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
        },
        _destroy: function() {
            this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
        },
        _mouseCapture: function(t) {
            var i, s, n, a, o, u, r, h = this,
                l = this.options;
            return !l.disabled && (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), i = {
                x: t.pageX,
                y: t.pageY
            }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function(t) {
                var i = Math.abs(s - h.values(t));
                (n > i || n === i && (t === h._lastChangedValue || h.values(t) === l.min)) && (n = i, a = e(this), o = t)
            }), !1 !== this._start(t, o) && (this._mouseSliding = !0, this._handleIndex = o, a.addClass("ui-state-active").focus(), u = a.offset(), r = !e(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = r ? {
                left: 0,
                top: 0
            } : {
                left: t.pageX - u.left - a.width() / 2,
                top: t.pageY - u.top - a.height() / 2 - (parseInt(a.css("borderTopWidth"), 10) || 0) - (parseInt(a.css("borderBottomWidth"), 10) || 0) + (parseInt(a.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(t, o, s), this._animateOff = !0, !0))
        },
        _mouseStart: function() {
            return !0
        },
        _mouseDrag: function(e) {
            var t = {
                    x: e.pageX,
                    y: e.pageY
                },
                i = this._normValueFromMouse(t);
            return this._slide(e, this._handleIndex, i), !1
        },
        _mouseStop: function(e) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(e) {
            var t, i, s, n, a;
            return "horizontal" === this.orientation ? (t = this.elementSize.width, i = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, i = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), (s = i / t) > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), a = this._valueMin() + s * n, this._trimAlignValue(a)
        },
        _start: function(e, t) {
            var i = {
                handle: this.handles[t],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("start", e, i)
        },
        _slide: function(e, t, i) {
            var s, n, a;
            this.options.values && this.options.values.length ? (s = this.values(t ? 0 : 1), 2 === this.options.values.length && !0 === this.options.range && (0 === t && i > s || 1 === t && s > i) && (i = s), i !== this.values(t) && ((n = this.values())[t] = i, a = this._trigger("slide", e, {
                handle: this.handles[t],
                value: i,
                values: n
            }), s = this.values(t ? 0 : 1), !1 !== a && this.values(t, i))) : i !== this.value() && (!1 !== (a = this._trigger("slide", e, {
                handle: this.handles[t],
                value: i
            })) && this.value(i))
        },
        _stop: function(e, t) {
            var i = {
                handle: this.handles[t],
                value: this.value()
            };
            this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("stop", e, i)
        },
        _change: function(e, t) {
            if (!this._keySliding && !this._mouseSliding) {
                var i = {
                    handle: this.handles[t],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._lastChangedValue = t, this._trigger("change", e, i)
            }
        },
        value: function(e) {
            return arguments.length ? (this.options.value = this._trimAlignValue(e), this._refreshValue(), void this._change(null, 0)) : this._value()
        },
        values: function(t, i) {
            var s, n, a;
            if (arguments.length > 1) return this.options.values[t] = this._trimAlignValue(i), this._refreshValue(), void this._change(null, t);
            if (!arguments.length) return this._values();
            if (!e.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();
            for (s = this.options.values, n = arguments[0], a = 0; s.length > a; a += 1) s[a] = this._trimAlignValue(n[a]), this._change(null, a);
            this._refreshValue()
        },
        _setOption: function(t, i) {
            var s, n = 0;
            switch ("range" === t && !0 === this.options.range && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), e.isArray(this.options.values) && (n = this.options.values.length), "disabled" === t && this.element.toggleClass("ui-state-disabled", !!i), this._super(t, i), t) {
                case "orientation":
                    this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue(), this.handles.css("horizontal" === i ? "bottom" : "left", "");
                    break;
                case "value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case "values":
                    for (this._animateOff = !0, this._refreshValue(), s = 0; n > s; s += 1) this._change(null, s);
                    this._animateOff = !1;
                    break;
                case "min":
                case "max":
                    this._animateOff = !0, this._refreshValue(), this._animateOff = !1;
                    break;
                case "range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1
            }
        },
        _value: function() {
            var e = this.options.value;
            return this._trimAlignValue(e)
        },
        _values: function(e) {
            var t, i, s;
            if (arguments.length) return t = this.options.values[e], this._trimAlignValue(t);
            if (this.options.values && this.options.values.length) {
                for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]);
                return i
            }
            return []
        },
        _trimAlignValue: function(e) {
            if (this._valueMin() >= e) return this._valueMin();
            if (e >= this._valueMax()) return this._valueMax();
            var t = this.options.step > 0 ? this.options.step : 1,
                i = (e - this._valueMin()) % t,
                s = e - i;
            return 2 * Math.abs(i) >= t && (s += i > 0 ? t : -t), parseFloat(s.toFixed(5))
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.options.max
        },
        _refreshValue: function() {
            var t, i, s, n, a, o = this.options.range,
                u = this.options,
                r = this,
                h = !this._animateOff && u.animate,
                l = {};
            this.options.values && this.options.values.length ? this.handles.each(function(s) {
                i = (r.values(s) - r._valueMin()) / (r._valueMax() - r._valueMin()) * 100, l["horizontal" === r.orientation ? "left" : "bottom"] = i + "%", e(this).stop(1, 1)[h ? "animate" : "css"](l, u.animate), !0 === r.options.range && ("horizontal" === r.orientation ? (0 === s && r.range.stop(1, 1)[h ? "animate" : "css"]({
                    left: i + "%"
                }, u.animate), 1 === s && r.range[h ? "animate" : "css"]({
                    width: i - t + "%"
                }, {
                    queue: !1,
                    duration: u.animate
                })) : (0 === s && r.range.stop(1, 1)[h ? "animate" : "css"]({
                    bottom: i + "%"
                }, u.animate), 1 === s && r.range[h ? "animate" : "css"]({
                    height: i - t + "%"
                }, {
                    queue: !1,
                    duration: u.animate
                }))), t = i
            }) : (s = this.value(), n = this._valueMin(), a = this._valueMax(), i = a !== n ? (s - n) / (a - n) * 100 : 0, l["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[h ? "animate" : "css"](l, u.animate), "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                width: i + "%"
            }, u.animate), "max" === o && "horizontal" === this.orientation && this.range[h ? "animate" : "css"]({
                width: 100 - i + "%"
            }, {
                queue: !1,
                duration: u.animate
            }), "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                height: i + "%"
            }, u.animate), "max" === o && "vertical" === this.orientation && this.range[h ? "animate" : "css"]({
                height: 100 - i + "%"
            }, {
                queue: !1,
                duration: u.animate
            }))
        },
        _handleEvents: {
            keydown: function(t) {
                var i, s, n, a = e(t.target).data("ui-slider-handle-index");
                switch (t.keyCode) {
                    case e.ui.keyCode.HOME:
                    case e.ui.keyCode.END:
                    case e.ui.keyCode.PAGE_UP:
                    case e.ui.keyCode.PAGE_DOWN:
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.RIGHT:
                    case e.ui.keyCode.DOWN:
                    case e.ui.keyCode.LEFT:
                        if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, e(t.target).addClass("ui-state-active"), !1 === this._start(t, a))) return
                }
                switch (n = this.options.step, i = s = this.options.values && this.options.values.length ? this.values(a) : this.value(), t.keyCode) {
                    case e.ui.keyCode.HOME:
                        s = this._valueMin();
                        break;
                    case e.ui.keyCode.END:
                        s = this._valueMax();
                        break;
                    case e.ui.keyCode.PAGE_UP:
                        s = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case e.ui.keyCode.PAGE_DOWN:
                        s = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.RIGHT:
                        if (i === this._valueMax()) return;
                        s = this._trimAlignValue(i + n);
                        break;
                    case e.ui.keyCode.DOWN:
                    case e.ui.keyCode.LEFT:
                        if (i === this._valueMin()) return;
                        s = this._trimAlignValue(i - n)
                }
                this._slide(t, a, s)
            },
            keyup: function(t) {
                var i = e(t.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(t, i), this._change(t, i), e(t.target).removeClass("ui-state-active"))
            }
        }
    })
});
jQuery(function(r) {
    if ("undefined" == typeof woocommerce_price_slider_params) return !1;
    r("input#min_price, input#max_price").hide(), r(".price_slider, .price_label").show();
    var e = r(".price_slider_amount #min_price").data("min"),
        c = r(".price_slider_amount #max_price").data("max");
    current_min_price = parseInt(e, 10), current_max_price = parseInt(c, 10), woocommerce_price_slider_params.min_price && (current_min_price = parseInt(woocommerce_price_slider_params.min_price, 10)), woocommerce_price_slider_params.max_price && (current_max_price = parseInt(woocommerce_price_slider_params.max_price, 10)), r("body").bind("price_slider_create price_slider_slide", function(e, c, _) {
        "left" === woocommerce_price_slider_params.currency_pos ? (r(".price_slider_amount span.from").html(woocommerce_price_slider_params.currency_symbol + c), r(".price_slider_amount span.to").html(woocommerce_price_slider_params.currency_symbol + _)) : "left_space" === woocommerce_price_slider_params.currency_pos ? (r(".price_slider_amount span.from").html(woocommerce_price_slider_params.currency_symbol + " " + c), r(".price_slider_amount span.to").html(woocommerce_price_slider_params.currency_symbol + " " + _)) : "right" === woocommerce_price_slider_params.currency_pos ? (r(".price_slider_amount span.from").html(c + woocommerce_price_slider_params.currency_symbol), r(".price_slider_amount span.to").html(_ + woocommerce_price_slider_params.currency_symbol)) : "right_space" === woocommerce_price_slider_params.currency_pos && (r(".price_slider_amount span.from").html(c + " " + woocommerce_price_slider_params.currency_symbol), r(".price_slider_amount span.to").html(_ + " " + woocommerce_price_slider_params.currency_symbol)), r("body").trigger("price_slider_updated", c, _)
    }), r(".price_slider").slider({
        range: !0,
        animate: !0,
        min: e,
        max: c,
        values: [current_min_price, current_max_price],
        create: function() {
            r(".price_slider_amount #min_price").val(current_min_price), r(".price_slider_amount #max_price").val(current_max_price), r("body").trigger("price_slider_create", [current_min_price, current_max_price])
        },
        slide: function(e, c) {
            r("input#min_price").val(c.values[0]), r("input#max_price").val(c.values[1]), r("body").trigger("price_slider_slide", [c.values[0], c.values[1]])
        },
        change: function(e, c) {
            r("body").trigger("price_slider_change", [c.values[0], c.values[1]])
        }
    })
});
! function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? e(require("jquery")) : e(jQuery)
}(function(e) {
    var n = /\+/g;

    function o(e) {
        return r.raw ? e : encodeURIComponent(e)
    }

    function i(o, i) {
        var t = r.raw ? o : function(e) {
            0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                return e = decodeURIComponent(e.replace(n, " ")), r.json ? JSON.parse(e) : e
            } catch (e) {}
        }(o);
        return e.isFunction(i) ? i(t) : t
    }
    var r = e.cookie = function(n, t, c) {
        if (arguments.length > 1 && !e.isFunction(t)) {
            if ("number" == typeof(c = e.extend({}, r.defaults, c)).expires) {
                var u = c.expires,
                    a = c.expires = new Date;
                a.setTime(+a + 864e5 * u)
            }
            return document.cookie = [o(n), "=", (d = t, o(r.json ? JSON.stringify(d) : String(d))), c.expires ? "; expires=" + c.expires.toUTCString() : "", c.path ? "; path=" + c.path : "", c.domain ? "; domain=" + c.domain : "", c.secure ? "; secure" : ""].join("")
        }
        for (var d, f, p = n ? void 0 : {}, s = document.cookie ? document.cookie.split("; ") : [], m = 0, x = s.length; m < x; m++) {
            var l = s[m].split("="),
                v = (f = l.shift(), r.raw ? f : decodeURIComponent(f)),
                k = l.join("=");
            if (n && n === v) {
                p = i(k, t);
                break
            }
            n || void 0 === (k = i(k)) || (p[v] = k)
        }
        return p
    };
    r.defaults = {}, e.removeCookie = function(n, o) {
        return void 0 !== e.cookie(n) && (e.cookie(n, "", e.extend({}, o, {
            expires: -1
        })), !e.cookie(n))
    }
});
! function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function(t, e) {
    var n = 6,
        a = t.event.add,
        i = t.event.remove,
        o = function(e, n, a) {
            t.event.trigger(n, a, e)
        },
        r = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t, e) {
            return window.setTimeout(function() {
                t()
            }, 25)
        },
        u = {
            textarea: !0,
            input: !0,
            select: !0,
            button: !0
        },
        c = {
            move: "mousemove",
            cancel: "mouseup dragstart",
            end: "mouseup"
        },
        d = {
            move: "touchmove",
            cancel: "touchend",
            end: "touchend"
        };

    function m() {
        return !0
    }

    function s() {
        return !1
    }

    function f(t) {
        t.preventDefault()
    }

    function v(t) {
        u[t.target.tagName.toLowerCase()] || t.preventDefault()
    }

    function p(t, e) {
        var n, a;
        if (t.identifiedTouch) return t.identifiedTouch(e);
        for (n = -1, a = t.length; ++n < a;)
            if (t[n].identifier === e) return t[n]
    }

    function g(t, e) {
        var n = p(t.changedTouches, e.identifier);
        if (n && (n.pageX !== e.pageX || n.pageY !== e.pageY)) return n
    }

    function h(t) {
        T(t, t.data, t, X)
    }

    function l(t) {
        X()
    }

    function X() {
        i(document, c.move, h), i(document, c.cancel, l)
    }

    function Y(t) {
        var e = t.data,
            n = g(t, e);
        n && T(t, e, n, y)
    }

    function w(t) {
        var e = t.data;
        p(t.changedTouches, e.identifier) && y(e.identifier)
    }

    function y(t) {
        i(document, "." + t, Y), i(document, "." + t, w)
    }

    function T(t, e, a, i) {
        var r = a.pageX - e.startX,
            u = a.pageY - e.startY;
        r * r + u * u < n * n || function(t, e, n, a, i, r) {
            var u, c;
            e.target;
            u = t.targetTouches, c = t.timeStamp - e.timeStamp, e.type = "movestart", e.distX = a, e.distY = i, e.deltaX = a, e.deltaY = i, e.pageX = n.pageX, e.pageY = n.pageY, e.velocityX = a / c, e.velocityY = i / c, e.targetTouches = u, e.finger = u ? u.length : 1, e._handled = S, e._preventTouchmoveDefault = function() {
                t.preventDefault()
            }, o(e.target, e), r(e.identifier)
        }(t, e, a, r, u, i)
    }

    function S() {
        return this._handled = m, !1
    }

    function k(t) {
        t._handled()
    }

    function _(t) {
        var e = t.data.timer;
        t.data.touch = t, t.data.timeStamp = t.timeStamp, e.kick()
    }

    function q(t) {
        var e = t.data.event,
            n = t.data.timer;
        i(document, c.move, _), i(document, c.end, q), F(e, n, function() {
            setTimeout(function() {
                i(e.target, "click", s)
            }, 0)
        })
    }

    function A(t) {
        var e = t.data.event,
            n = t.data.timer,
            a = g(t, e);
        a && (t.preventDefault(), e.targetTouches = t.targetTouches, t.data.touch = a, t.data.timeStamp = t.timeStamp, n.kick())
    }

    function D(t) {
        var e, n = t.data.event,
            a = t.data.timer;
        p(t.changedTouches, n.identifier) && (e = n, i(document, "." + e.identifier, A), i(document, "." + e.identifier, D), F(n, a))
    }

    function F(t, e, n) {
        e.end(function() {
            return t.type = "moveend", o(t.target, t), n && n()
        })
    }
    t.event.special.movestart = {
        setup: function(t, e, n) {
            return a(this, "movestart.move", k), !0
        },
        teardown: function(t) {
            return i(this, "dragstart drag", f), i(this, "mousedown touchstart", v), i(this, "movestart", k), !0
        },
        add: function(t) {
            "move" !== t.namespace && "moveend" !== t.namespace && (a(this, "dragstart." + t.guid + " drag." + t.guid, f, e, t.selector), a(this, "mousedown." + t.guid, v, e, t.selector))
        },
        remove: function(t) {
            "move" !== t.namespace && "moveend" !== t.namespace && (i(this, "dragstart." + t.guid + " drag." + t.guid), i(this, "mousedown." + t.guid))
        },
        _default: function(t) {
            var n, i;
            t._handled() && (n = {
                target: t.target,
                startX: t.startX,
                startY: t.startY,
                pageX: t.pageX,
                pageY: t.pageY,
                distX: t.distX,
                distY: t.distY,
                deltaX: t.deltaX,
                deltaY: t.deltaY,
                velocityX: t.velocityX,
                velocityY: t.velocityY,
                timeStamp: t.timeStamp,
                identifier: t.identifier,
                targetTouches: t.targetTouches,
                finger: t.finger
            }, i = {
                event: n,
                timer: new function(t) {
                    var e = t,
                        n = !1,
                        a = !1;

                    function i(t) {
                        n ? (e(), r(i), a = !0, n = !1) : a = !1
                    }
                    this.kick = function(t) {
                        n = !0, a || i()
                    }, this.end = function(t) {
                        var i = e;
                        t && (a ? (e = n ? function() {
                            i(), t()
                        } : t, n = !0) : t())
                    }
                }(function(e) {
                    var a, r, u, c;
                    a = n, r = i.touch, u = i.timeStamp, c = u - a.timeStamp, a.type = "move", a.distX = r.pageX - a.startX, a.distY = r.pageY - a.startY, a.deltaX = r.pageX - a.pageX, a.deltaY = r.pageY - a.pageY, a.velocityX = .3 * a.velocityX + .7 * a.deltaX / c, a.velocityY = .3 * a.velocityY + .7 * a.deltaY / c, a.pageX = r.pageX, a.pageY = r.pageY, o(t.target, n)
                }),
                touch: e,
                timeStamp: e
            }, t.identifier === e ? (a(t.target, "click", s), a(document, c.move, _, i), a(document, c.end, q, i)) : (t._preventTouchmoveDefault(), a(document, d.move + "." + t.identifier, A, i), a(document, d.end + "." + t.identifier, D, i)))
        }
    }, t.event.special.move = {
        setup: function() {
            a(this, "movestart.move", t.noop)
        },
        teardown: function() {
            i(this, "movestart.move", t.noop)
        }
    }, t.event.special.moveend = {
        setup: function() {
            a(this, "movestart.moveend", t.noop)
        },
        teardown: function() {
            i(this, "movestart.moveend", t.noop)
        }
    }, a(document, "mousedown.move", function(t) {
        var e, n;
        1 !== (n = t).which || n.ctrlKey || n.altKey || (e = {
            target: t.target,
            startX: t.pageX,
            startY: t.pageY,
            timeStamp: t.timeStamp
        }, a(document, c.move, h, e), a(document, c.cancel, l, e))
    }), a(document, "touchstart.move", function(t) {
        var e, n;
        u[t.target.tagName.toLowerCase()] || (n = {
            target: (e = t.changedTouches[0]).target,
            startX: e.pageX,
            startY: e.pageY,
            timeStamp: t.timeStamp,
            identifier: e.identifier
        }, a(document, d.move + "." + e.identifier, Y, n), a(document, d.cancel + "." + e.identifier, w, n))
    }), "function" == typeof Array.prototype.indexOf && function(t, e) {
        for (var n = ["changedTouches", "targetTouches"], a = n.length; a--;) - 1 === t.event.props.indexOf(n[a]) && t.event.props.push(n[a])
    }(t)
});
! function(t) {
    t.fn.twentytwenty = function(e) {
        e = t.extend({
            default_offset_pct: .5,
            orientation: "horizontal"
        }, e);
        return this.each(function() {
            var n = e.default_offset_pct,
                i = t(this),
                a = e.orientation,
                s = "vertical" === a ? "down" : "left",
                d = "vertical" === a ? "up" : "right";
            i.wrap("<div class='twentytwenty-wrapper twentytwenty-" + a + "'></div>"), i.append("<div class='twentytwenty-overlay'></div>");
            var w = i.find("img:first"),
                r = i.find("img:last");
            i.append("<div class='twentytwenty-handle'></div>");
            var c = i.find(".twentytwenty-handle");
            c.append("<span class='twentytwenty-" + s + "-arrow'></span>"), c.append("<span class='twentytwenty-" + d + "-arrow'></span>"), i.addClass("twentytwenty-container"), w.addClass("twentytwenty-before"), r.addClass("twentytwenty-after");
            var o = i.find(".twentytwenty-overlay");
            o.append("<div class='twentytwenty-before-label'></div>"), o.append("<div class='twentytwenty-after-label'></div>");
            var l = function(t) {
                var e, n, s, d, r = (e = t, n = w.width(), s = w.height(), {
                    w: n + "px",
                    h: s + "px",
                    cw: e * n + "px",
                    ch: e * s + "px"
                });
                c.css("vertical" === a ? "top" : "left", "vertical" === a ? r.ch : r.cw), d = r, "vertical" === a ? w.css("clip", "rect(0," + d.w + "," + d.ch + ",0)") : w.css("clip", "rect(0," + d.cw + "," + d.h + ",0)"), i.css("height", d.h)
            };
            t(window).on("resize.twentytwenty", function(t) {
                l(n)
            });
            var v = 0,
                f = 0,
                p = 0,
                y = 0;
            c.on("movestart", function(t) {
                (t.distX > t.distY && t.distX < -t.distY || t.distX < t.distY && t.distX > -t.distY) && "vertical" !== a ? t.preventDefault() : (t.distX < t.distY && t.distX < -t.distY || t.distX > t.distY && t.distX > -t.distY) && "vertical" === a && t.preventDefault(), i.addClass("active"), v = i.offset().left, f = i.offset().top, p = w.width(), y = w.height()
            }), c.on("moveend", function(t) {
                i.removeClass("active")
            }), c.on("move", function(t) {
                i.hasClass("active") && ((n = "vertical" === a ? (t.pageY - f) / y : (t.pageX - v) / p) < 0 && (n = 0), n > 1 && (n = 1), l(n))
            }), i.find("img").on("mousedown", function(t) {
                t.preventDefault()
            }), t(window).trigger("resize.twentytwenty")
        })
    }
}(jQuery);
! function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function(e) {
    e.fn.tweet = function(t) {
        var r = e.extend({
                modpath: "/twitter/",
                username: null,
                list_id: null,
                list: null,
                favorites: !1,
                query: null,
                avatar_size: null,
                count: 3,
                fetch: null,
                page: 1,
                retweets: !0,
                intro_text: null,
                outro_text: null,
                join_text: null,
                auto_join_text_default: "i said,",
                auto_join_text_ed: "i",
                auto_join_text_ing: "i am",
                auto_join_text_reply: "i replied to",
                auto_join_text_url: "i was looking at",
                loading_text: null,
                refresh_interval: null,
                twitter_url: "twitter.com",
                twitter_api_url: "api.twitter.com",
                twitter_search_url: "api.twitter.com",
                template: "{avatar}{time}{join}{text}",
                comparator: function(e, t) {
                    return t.tweet_time - e.tweet_time
                },
                filter: function(e) {
                    return !0
                }
            }, t),
            a = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/gi;

        function n(e, t) {
            if ("string" == typeof e) {
                var r = e;
                for (var a in t) {
                    var n = t[a];
                    r = r.replace(new RegExp("{" + a + "}", "g"), null === n ? "" : n)
                }
                return r
            }
            return e(t)
        }

        function i(t, r) {
            return function() {
                var a = [];
                return this.each(function() {
                    a.push(this.replace(t, r))
                }), e(a)
            }
        }

        function s(e) {
            return e.replace(/</g, "&lt;").replace(/>/g, "^&gt;")
        }

        function u(t) {
            var i, u, o, _, l = {};
            return l.item = t, l.source = t.source, l.name = t.from_user_name || t.user.name, l.screen_name = t.from_user || t.user.screen_name, l.avatar_size = r.avatar_size, l.avatar_url = function e(t, r) {
                return r ? "user" in t ? t.user.profile_image_url_https : e(t, !1).replace(/^http:\/\/[a-z0-9]{1,3}\.twimg\.com\//, "https://s3.amazonaws.com/twitter_production/") : t.profile_image_url || t.user.profile_image_url
            }(t, "https:" === document.location.protocol), l.retweet = void 0 !== t.retweeted_status, l.tweet_time = (i = t.created_at, Date.parse(i.replace(/^([a-z]{3})( [a-z]{3} \d\d?)(.*)( \d{4})$/i, "$1,$2$4$3"))), l.join_text = "auto" == r.join_text ? (u = t.text).match(/^(@([A-Za-z0-9-_]+)) .*/i) ? r.auto_join_text_reply : u.match(a) ? r.auto_join_text_url : u.match(/^((\w+ed)|just) .*/im) ? r.auto_join_text_ed : u.match(/^(\w*ing) .*/i) ? r.auto_join_text_ing : r.auto_join_text_default : r.join_text, l.tweet_id = t.id_str, l.twitter_base = "http://" + r.twitter_url + "/", l.user_url = l.twitter_base + l.screen_name, l.tweet_url = l.user_url + "/status/" + l.tweet_id, l.reply_url = l.twitter_base + "intent/tweet?in_reply_to=" + l.tweet_id, l.retweet_url = l.twitter_base + "intent/retweet?tweet_id=" + l.tweet_id, l.favorite_url = l.twitter_base + "intent/favorite?tweet_id=" + l.tweet_id, l.retweeted_screen_name = l.retweet && t.retweeted_status.user.screen_name, l.tweet_relative_time = function(e) {
                var t = arguments.length > 1 ? arguments[1] : new Date,
                    r = parseInt((t.getTime() - e) / 1e3, 10);
                return r < 1 ? "just now" : r < 60 ? r + " seconds ago" : r < 120 ? "about a minute ago" : r < 2700 ? "about " + parseInt(r / 60, 10).toString() + " minutes ago" : r < 7200 ? "about an hour ago" : r < 86400 ? "about " + parseInt(r / 3600, 10).toString() + " hours ago" : r < 172800 ? "about a day ago" : "about " + parseInt(r / 86400, 10).toString() + " days ago"
            }(l.tweet_time), l.entities = t.entities ? (t.entities.urls || []).concat(t.entities.media || []) : [], l.tweet_raw_text = l.retweet ? "RT @" + l.retweeted_screen_name + " " + t.retweeted_status.text : t.text, l.tweet_text = e([(o = l.tweet_raw_text, _ = l.entities, o.replace(a, function(e) {
                for (var t = /^[a-z]+:/i.test(e) ? e : "http://" + e, r = e, a = 0; a < _.length; ++a) {
                    var n = _[a];
                    if (n.url == t && n.expanded_url) {
                        t = n.expanded_url, r = n.display_url;
                        break
                    }
                }
                return '<a href="' + s(t) + '">' + s(r) + "</a>"
            }))]).linkUser().linkHash()[0], l.tweet_text_fancy = e([l.tweet_text]).makeHeart()[0], l.user = n('<a class="tweet_user" href="{user_url}">@{screen_name}</a>', l), l.join = r.join_text ? n(' <span class="tweet_join">{join_text}</span> ', l) : " ", l.avatar = l.avatar_size ? n('<a class="tweet_avatar" href="{user_url}"><img src="{avatar_url}" height="{avatar_size}" width="{avatar_size}" alt="{screen_name}\'s avatar" title="{screen_name}\'s avatar" border="0"/></a>', l) : "", l.time = n('<span class="tweet_time"><a href="{tweet_url}" title="view tweet on twitter">{tweet_relative_time}</a></span>', l), l.text = n('<span class="tweet_text">{tweet_text_fancy}</span>', l), l.reply_action = n('<a class="tweet_action tweet_reply" href="{reply_url}">reply</a>', l), l.retweet_action = n('<a class="tweet_action tweet_retweet" href="{retweet_url}">retweet</a>', l), l.favorite_action = n('<a class="tweet_action tweet_favorite" href="{favorite_url}">favorite</a>', l), l
        }
        return e.extend({
            tweet: {
                t: n
            }
        }), e.fn.extend({
            linkUser: i(/(^|[\W])@(\w+)/gi, '$1<span class="at">@</span><a href="http://' + r.twitter_url + '/$2">$2</a>'),
            linkHash: i(/(?:^| )[\#]+([\w\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0600-\u06ff]+)/gi, ' <a href="https://twitter.com/search?q=%23$1' + (r.username && 1 == r.username.length && !r.list ? "&from=" + r.username.join("%2BOR%2B") : "") + '" class="tweet_hashtag">#$1</a>'),
            makeHeart: i(/(&lt;)+[3]/gi, "<tt class='heart'>&#x2665;</tt>")
        }), this.each(function(t, a) {
            var i = e('<ul class="tweet_list">'),
                s = '<p class="tweet_intro">' + r.intro_text + "</p>",
                o = '<p class="tweet_outro">' + r.outro_text + "</p>",
                _ = e('<p class="loading">' + r.loading_text + "</p>");
            r.username && "string" == typeof r.username && (r.username = [r.username]), e(a).unbind("tweet:load").bind("tweet:load", function() {
                r.loading_text && e(a).empty().append(_), e.ajax({
                    dataType: "json",
                    type: "post",
                    async: !0,
                    url: r.modpath || "/twitter/",
                    data: {
                        request: function() {
                            r.modpath;
                            var t = null === r.fetch ? r.count : r.fetch,
                                a = {
                                    include_entities: 1
                                };
                            if (r.list) return {
                                host: r.twitter_api_url,
                                url: "/1.1/lists/statuses.json",
                                parameters: e.extend({}, a, {
                                    list_id: r.list_id,
                                    slug: r.list,
                                    owner_screen_name: r.username,
                                    page: r.page,
                                    count: t,
                                    include_rts: r.retweets ? 1 : 0
                                })
                            };
                            if (r.favorites) return {
                                host: r.twitter_api_url,
                                url: "/1.1/favorites/list.json",
                                parameters: e.extend({}, a, {
                                    list_id: r.list_id,
                                    screen_name: r.username,
                                    page: r.page,
                                    count: t
                                })
                            };
                            if (null === r.query && 1 === r.username.length) return {
                                host: r.twitter_api_url,
                                url: "/1.1/statuses/user_timeline.json",
                                parameters: e.extend({}, a, {
                                    screen_name: r.username,
                                    page: r.page,
                                    count: t,
                                    include_rts: r.retweets ? 1 : 0
                                })
                            };
                            var n = r.query || "from:" + r.username.join(" OR from:");
                            return {
                                host: r.twitter_search_url,
                                url: "/1.1/search/tweets.json",
                                parameters: e.extend({}, a, {
                                    q: n,
                                    count: t
                                })
                            }
                        }()
                    },
                    success: function(t, _) {
                        t.message && console.log(t.message);
                        var l = t.response;
                        e(a).empty().append(i), r.intro_text && i.before(s), i.empty(), void 0 !== l.statuses ? resp = l.statuses : void 0 !== l.results ? resp = l.results : resp = l;
                        var c = e.map(resp, u);
                        c = e.grep(c, r.filter).sort(r.comparator).slice(0, r.count), i.append(e.map(c, function(e) {
                            return "<li>" + n(r.template, e) + "</li>"
                        }).join("")).children("li:first").addClass("tweet_first").end().children("li:odd").addClass("tweet_even").end().children("li:even").addClass("tweet_odd"), r.outro_text && i.after(o), e(a).trigger("loaded").trigger(c ? "empty" : "full"), r.refresh_interval && window.setTimeout(function() {
                            e(a).trigger("tweet:load")
                        }, 1e3 * r.refresh_interval)
                    }
                })
            }).trigger("tweet:load")
        })
    }
});
"use strict";
! function(t) {
    t.fn.addWidthClass = function(i) {
        for (var e = t.extend({
                breakpoints: [200, 400, 600, 1e3, 1200]
            }, i), n = "", r = e.breakpoints.length - 1; r >= 0; r--) n += " width-lt-" + e.breakpoints[r] + " width-gt-" + e.breakpoints[r];
        return this.each(function() {
            for (var t = jQuery(this), i = "", r = e.breakpoints.length - 1; r >= 0; r--) t.width() <= e.breakpoints[r] ? i += " width-lt-" + e.breakpoints[r] : i += " width-gt-" + e.breakpoints[r];
            t.addClass(i), jQuery(window).on("resize", function() {
                i = "", t.removeClass(n);
                for (var r = e.breakpoints.length - 1; r >= 0; r--) t.width() <= e.breakpoints[r] ? i += " width-lt-" + e.breakpoints[r] : i += " width-gt-" + e.breakpoints[r];
                t.addClass(i)
            })
        })
    }
}(jQuery);