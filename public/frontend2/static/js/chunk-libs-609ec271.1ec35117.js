"use strict";
(self["webpackChunkWebFX"] = self["webpackChunkWebFX"] || []).push([
    [4880], {
        78345: function(t, e) {
            function r(t, e) {
                for (var r in e) t[r] = e[r];
                return t
            }
            var n = /[!'()*]/g,
                o = function(t) {
                    return "%" + t.charCodeAt(0).toString(16)
                },
                i = /%2C/g,
                a = function(t) {
                    return encodeURIComponent(t).replace(n, o).replace(i, ",")
                };

            function u(t) {
                try {
                    return decodeURIComponent(t)
                } catch (e) {
                    0
                }
                return t
            }

            function s(t, e, r) {
                void 0 === e && (e = {});
                var n, o = r || p;
                try {
                    n = o(t || "")
                } catch (u) {
                    n = {}
                }
                for (var i in e) {
                    var a = e[i];
                    n[i] = Array.isArray(a) ? a.map(c) : c(a)
                }
                return n
            }
            var c = function(t) {
                return null == t || "object" === typeof t ? t : String(t)
            };

            function p(t) {
                var e = {};
                return t = t.trim().replace(/^(\?|#|&)/, ""), t ? (t.split("&").forEach((function(t) {
                    var r = t.replace(/\+/g, " ").split("="),
                        n = u(r.shift()),
                        o = r.length > 0 ? u(r.join("=")) : null;
                    void 0 === e[n] ? e[n] = o : Array.isArray(e[n]) ? e[n].push(o) : e[n] = [e[n], o]
                })), e) : e
            }

            function f(t) {
                var e = t ? Object.keys(t).map((function(e) {
                    var r = t[e];
                    if (void 0 === r) return "";
                    if (null === r) return a(e);
                    if (Array.isArray(r)) {
                        var n = [];
                        return r.forEach((function(t) {
                            void 0 !== t && (null === t ? n.push(a(e)) : n.push(a(e) + "=" + a(t)))
                        })), n.join("&")
                    }
                    return a(e) + "=" + a(r)
                })).filter((function(t) {
                    return t.length > 0
                })).join("&") : null;
                return e ? "?" + e : ""
            }
            var h = /\/?$/;

            function l(t, e, r, n) {
                var o = n && n.options.stringifyQuery,
                    i = e.query || {};
                try {
                    i = d(i)
                } catch (u) {}
                var a = {
                    name: e.name || t && t.name,
                    meta: t && t.meta || {},
                    path: e.path || "/",
                    hash: e.hash || "",
                    query: i,
                    params: e.params || {},
                    fullPath: m(e, o),
                    matched: t ? y(t) : []
                };
                return r && (a.redirectedFrom = m(r, o)), Object.freeze(a)
            }

            function d(t) {
                if (Array.isArray(t)) return t.map(d);
                if (t && "object" === typeof t) {
                    var e = {};
                    for (var r in t) e[r] = d(t[r]);
                    return e
                }
                return t
            }
            var v = l(null, {
                path: "/"
            });

            function y(t) {
                var e = [];
                while (t) e.unshift(t), t = t.parent;
                return e
            }

            function m(t, e) {
                var r = t.path,
                    n = t.query;
                void 0 === n && (n = {});
                var o = t.hash;
                void 0 === o && (o = "");
                var i = e || f;
                return (r || "/") + i(n) + o
            }

            function g(t, e, r) {
                return e === v ? t === e : !!e && (t.path && e.path ? t.path.replace(h, "") === e.path.replace(h, "") && (r || t.hash === e.hash && w(t.query, e.query)) : !(!t.name || !e.name) && (t.name === e.name && (r || t.hash === e.hash && w(t.query, e.query) && w(t.params, e.params))))
            }

            function w(t, e) {
                if (void 0 === t && (t = {}), void 0 === e && (e = {}), !t || !e) return t === e;
                var r = Object.keys(t).sort(),
                    n = Object.keys(e).sort();
                return r.length === n.length && r.every((function(r, o) {
                    var i = t[r],
                        a = n[o];
                    if (a !== r) return !1;
                    var u = e[r];
                    return null == i || null == u ? i === u : "object" === typeof i && "object" === typeof u ? w(i, u) : String(i) === String(u)
                }))
            }

            function b(t, e) {
                return 0 === t.path.replace(h, "/").indexOf(e.path.replace(h, "/")) && (!e.hash || t.hash === e.hash) && x(t.query, e.query)
            }

            function x(t, e) {
                for (var r in e)
                    if (!(r in t)) return !1;
                return !0
            }

            function k(t) {
                for (var e = 0; e < t.matched.length; e++) {
                    var r = t.matched[e];
                    for (var n in r.instances) {
                        var o = r.instances[n],
                            i = r.enteredCbs[n];
                        if (o && i) {
                            delete r.enteredCbs[n];
                            for (var a = 0; a < i.length; a++) o._isBeingDestroyed || i[a](o)
                        }
                    }
                }
            }
            var R = {
                name: "RouterView",
                functional: !0,
                props: {
                    name: {
                        type: String,
                        default: "default"
                    }
                },
                render: function(t, e) {
                    var n = e.props,
                        o = e.children,
                        i = e.parent,
                        a = e.data;
                    a.routerView = !0;
                    var u = i.$createElement,
                        s = n.name,
                        c = i.$route,
                        p = i._routerViewCache || (i._routerViewCache = {}),
                        f = 0,
                        h = !1;
                    while (i && i._routerRoot !== i) {
                        var l = i.$vnode ? i.$vnode.data : {};
                        l.routerView && f++, l.keepAlive && i._directInactive && i._inactive && (h = !0), i = i.$parent
                    }
                    if (a.routerViewDepth = f, h) {
                        var d = p[s],
                            v = d && d.component;
                        return v ? (d.configProps && E(v, a, d.route, d.configProps), u(v, a, o)) : u()
                    }
                    var y = c.matched[f],
                        m = y && y.components[s];
                    if (!y || !m) return p[s] = null, u();
                    p[s] = {
                        component: m
                    }, a.registerRouteInstance = function(t, e) {
                        var r = y.instances[s];
                        (e && r !== t || !e && r === t) && (y.instances[s] = e)
                    }, (a.hook || (a.hook = {})).prepatch = function(t, e) {
                        y.instances[s] = e.componentInstance
                    }, a.hook.init = function(t) {
                        t.data.keepAlive && t.componentInstance && t.componentInstance !== y.instances[s] && (y.instances[s] = t.componentInstance), k(c)
                    };
                    var g = y.props && y.props[s];
                    return g && (r(p[s], {
                        route: c,
                        configProps: g
                    }), E(m, a, c, g)), u(m, a, o)
                }
            };

            function E(t, e, n, o) {
                var i = e.props = C(n, o);
                if (i) {
                    i = e.props = r({}, i);
                    var a = e.attrs = e.attrs || {};
                    for (var u in i) t.props && u in t.props || (a[u] = i[u], delete i[u])
                }
            }

            function C(t, e) {
                switch (typeof e) {
                    case "undefined":
                        return;
                    case "object":
                        return e;
                    case "function":
                        return e(t);
                    case "boolean":
                        return e ? t.params : void 0;
                    default:
                        0
                }
            }

            function A(t, e, r) {
                var n = t.charAt(0);
                if ("/" === n) return t;
                if ("?" === n || "#" === n) return e + t;
                var o = e.split("/");
                r && o[o.length - 1] || o.pop();
                for (var i = t.replace(/^\//, "").split("/"), a = 0; a < i.length; a++) {
                    var u = i[a];
                    ".." === u ? o.pop() : "." !== u && o.push(u)
                }
                return "" !== o[0] && o.unshift(""), o.join("/")
            }

            function O(t) {
                var e = "",
                    r = "",
                    n = t.indexOf("#");
                n >= 0 && (e = t.slice(n), t = t.slice(0, n));
                var o = t.indexOf("?");
                return o >= 0 && (r = t.slice(o + 1), t = t.slice(0, o)), {
                    path: t,
                    query: r,
                    hash: e
                }
            }

            function _(t) {
                return t.replace(/\/(?:\s*\/)+/g, "/")
            }
            var j = Array.isArray || function(t) {
                    return "[object Array]" == Object.prototype.toString.call(t)
                },
                S = W,
                T = U,
                P = B,
                L = V,
                $ = J,
                q = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");

            function U(t, e) {
                var r, n = [],
                    o = 0,
                    i = 0,
                    a = "",
                    u = e && e.delimiter || "/";
                while (null != (r = q.exec(t))) {
                    var s = r[0],
                        c = r[1],
                        p = r.index;
                    if (a += t.slice(i, p), i = p + s.length, c) a += c[1];
                    else {
                        var f = t[i],
                            h = r[2],
                            l = r[3],
                            d = r[4],
                            v = r[5],
                            y = r[6],
                            m = r[7];
                        a && (n.push(a), a = "");
                        var g = null != h && null != f && f !== h,
                            w = "+" === y || "*" === y,
                            b = "?" === y || "*" === y,
                            x = r[2] || u,
                            k = d || v;
                        n.push({
                            name: l || o++,
                            prefix: h || "",
                            delimiter: x,
                            optional: b,
                            repeat: w,
                            partial: g,
                            asterisk: !!m,
                            pattern: k ? H(k) : m ? ".*" : "[^" + F(x) + "]+?"
                        })
                    }
                }
                return i < t.length && (a += t.substr(i)), a && n.push(a), n
            }

            function B(t, e) {
                return V(U(t, e), e)
            }

            function I(t) {
                return encodeURI(t).replace(/[\/?#]/g, (function(t) {
                    return "%" + t.charCodeAt(0).toString(16).toUpperCase()
                }))
            }

            function M(t) {
                return encodeURI(t).replace(/[?#]/g, (function(t) {
                    return "%" + t.charCodeAt(0).toString(16).toUpperCase()
                }))
            }

            function V(t, e) {
                for (var r = new Array(t.length), n = 0; n < t.length; n++) "object" === typeof t[n] && (r[n] = new RegExp("^(?:" + t[n].pattern + ")$", z(e)));
                return function(e, n) {
                    for (var o = "", i = e || {}, a = n || {}, u = a.pretty ? I : encodeURIComponent, s = 0; s < t.length; s++) {
                        var c = t[s];
                        if ("string" !== typeof c) {
                            var p, f = i[c.name];
                            if (null == f) {
                                if (c.optional) {
                                    c.partial && (o += c.prefix);
                                    continue
                                }
                                throw new TypeError('Expected "' + c.name + '" to be defined')
                            }
                            if (j(f)) {
                                if (!c.repeat) throw new TypeError('Expected "' + c.name + '" to not repeat, but received `' + JSON.stringify(f) + "`");
                                if (0 === f.length) {
                                    if (c.optional) continue;
                                    throw new TypeError('Expected "' + c.name + '" to not be empty')
                                }
                                for (var h = 0; h < f.length; h++) {
                                    if (p = u(f[h]), !r[s].test(p)) throw new TypeError('Expected all "' + c.name + '" to match "' + c.pattern + '", but received `' + JSON.stringify(p) + "`");
                                    o += (0 === h ? c.prefix : c.delimiter) + p
                                }
                            } else {
                                if (p = c.asterisk ? M(f) : u(f), !r[s].test(p)) throw new TypeError('Expected "' + c.name + '" to match "' + c.pattern + '", but received "' + p + '"');
                                o += c.prefix + p
                            }
                        } else o += c
                    }
                    return o
                }
            }

            function F(t) {
                return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1")
            }

            function H(t) {
                return t.replace(/([=!:$\/()])/g, "\\$1")
            }

            function N(t, e) {
                return t.keys = e, t
            }

            function z(t) {
                return t && t.sensitive ? "" : "i"
            }

            function D(t, e) {
                var r = t.source.match(/\((?!\?)/g);
                if (r)
                    for (var n = 0; n < r.length; n++) e.push({
                        name: n,
                        prefix: null,
                        delimiter: null,
                        optional: !1,
                        repeat: !1,
                        partial: !1,
                        asterisk: !1,
                        pattern: null
                    });
                return N(t, e)
            }

            function K(t, e, r) {
                for (var n = [], o = 0; o < t.length; o++) n.push(W(t[o], e, r).source);
                var i = new RegExp("(?:" + n.join("|") + ")", z(r));
                return N(i, e)
            }

            function X(t, e, r) {
                return J(U(t, r), e, r)
            }

            function J(t, e, r) {
                j(e) || (r = e || r, e = []), r = r || {};
                for (var n = r.strict, o = !1 !== r.end, i = "", a = 0; a < t.length; a++) {
                    var u = t[a];
                    if ("string" === typeof u) i += F(u);
                    else {
                        var s = F(u.prefix),
                            c = "(?:" + u.pattern + ")";
                        e.push(u), u.repeat && (c += "(?:" + s + c + ")*"), c = u.optional ? u.partial ? s + "(" + c + ")?" : "(?:" + s + "(" + c + "))?" : s + "(" + c + ")", i += c
                    }
                }
                var p = F(r.delimiter || "/"),
                    f = i.slice(-p.length) === p;
                return n || (i = (f ? i.slice(0, -p.length) : i) + "(?:" + p + "(?=$))?"), i += o ? "$" : n && f ? "" : "(?=" + p + "|$)", N(new RegExp("^" + i, z(r)), e)
            }

            function W(t, e, r) {
                return j(e) || (r = e || r, e = []), r = r || {}, t instanceof RegExp ? D(t, e) : j(t) ? K(t, e, r) : X(t, e, r)
            }
            S.parse = T, S.compile = P, S.tokensToFunction = L, S.tokensToRegExp = $;
            var Q = Object.create(null);

            function Y(t, e, r) {
                e = e || {};
                try {
                    var n = Q[t] || (Q[t] = S.compile(t));
                    return "string" === typeof e.pathMatch && (e[0] = e.pathMatch), n(e, {
                        pretty: !0
                    })
                } catch (o) {
                    return ""
                } finally {
                    delete e[0]
                }
            }

            function Z(t, e, n, o) {
                var i = "string" === typeof t ? {
                    path: t
                } : t;
                if (i._normalized) return i;
                if (i.name) {
                    i = r({}, t);
                    var a = i.params;
                    return a && "object" === typeof a && (i.params = r({}, a)), i
                }
                if (!i.path && i.params && e) {
                    i = r({}, i), i._normalized = !0;
                    var u = r(r({}, e.params), i.params);
                    if (e.name) i.name = e.name, i.params = u;
                    else if (e.matched.length) {
                        var c = e.matched[e.matched.length - 1].path;
                        i.path = Y(c, u, "path " + e.path)
                    } else 0;
                    return i
                }
                var p = O(i.path || ""),
                    f = e && e.path || "/",
                    h = p.path ? A(p.path, f, n || i.append) : f,
                    l = s(p.query, i.query, o && o.options.parseQuery),
                    d = i.hash || p.hash;
                return d && "#" !== d.charAt(0) && (d = "#" + d), {
                    _normalized: !0,
                    path: h,
                    query: l,
                    hash: d
                }
            }
            var G, tt = [String, Object],
                et = [String, Array],
                rt = function() {},
                nt = {
                    name: "RouterLink",
                    props: {
                        to: {
                            type: tt,
                            required: !0
                        },
                        tag: {
                            type: String,
                            default: "a"
                        },
                        custom: Boolean,
                        exact: Boolean,
                        exactPath: Boolean,
                        append: Boolean,
                        replace: Boolean,
                        activeClass: String,
                        exactActiveClass: String,
                        ariaCurrentValue: {
                            type: String,
                            default: "page"
                        },
                        event: {
                            type: et,
                            default: "click"
                        }
                    },
                    render: function(t) {
                        var e = this,
                            n = this.$router,
                            o = this.$route,
                            i = n.resolve(this.to, o, this.append),
                            a = i.location,
                            u = i.route,
                            s = i.href,
                            c = {},
                            p = n.options.linkActiveClass,
                            f = n.options.linkExactActiveClass,
                            h = null == p ? "router-link-active" : p,
                            d = null == f ? "router-link-exact-active" : f,
                            v = null == this.activeClass ? h : this.activeClass,
                            y = null == this.exactActiveClass ? d : this.exactActiveClass,
                            m = u.redirectedFrom ? l(null, Z(u.redirectedFrom), null, n) : u;
                        c[y] = g(o, m, this.exactPath), c[v] = this.exact || this.exactPath ? c[y] : b(o, m);
                        var w = c[y] ? this.ariaCurrentValue : null,
                            x = function(t) {
                                ot(t) && (e.replace ? n.replace(a, rt) : n.push(a, rt))
                            },
                            k = {
                                click: ot
                            };
                        Array.isArray(this.event) ? this.event.forEach((function(t) {
                            k[t] = x
                        })) : k[this.event] = x;
                        var R = {
                                class: c
                            },
                            E = !this.$scopedSlots.$hasNormal && this.$scopedSlots.default && this.$scopedSlots.default({
                                href: s,
                                route: u,
                                navigate: x,
                                isActive: c[v],
                                isExactActive: c[y]
                            });
                        if (E) {
                            if (1 === E.length) return E[0];
                            if (E.length > 1 || !E.length) return 0 === E.length ? t() : t("span", {}, E)
                        }
                        if ("a" === this.tag) R.on = k, R.attrs = {
                            href: s,
                            "aria-current": w
                        };
                        else {
                            var C = it(this.$slots.default);
                            if (C) {
                                C.isStatic = !1;
                                var A = C.data = r({}, C.data);
                                for (var O in A.on = A.on || {}, A.on) {
                                    var _ = A.on[O];
                                    O in k && (A.on[O] = Array.isArray(_) ? _ : [_])
                                }
                                for (var j in k) j in A.on ? A.on[j].push(k[j]) : A.on[j] = x;
                                var S = C.data.attrs = r({}, C.data.attrs);
                                S.href = s, S["aria-current"] = w
                            } else R.on = k
                        }
                        return t(this.tag, R, this.$slots.default)
                    }
                };

            function ot(t) {
                if (!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey) && !t.defaultPrevented && (void 0 === t.button || 0 === t.button)) {
                    if (t.currentTarget && t.currentTarget.getAttribute) {
                        var e = t.currentTarget.getAttribute("target");
                        if (/\b_blank\b/i.test(e)) return
                    }
                    return t.preventDefault && t.preventDefault(), !0
                }
            }

            function it(t) {
                if (t)
                    for (var e, r = 0; r < t.length; r++) {
                        if (e = t[r], "a" === e.tag) return e;
                        if (e.children && (e = it(e.children))) return e
                    }
            }

            function at(t) {
                if (!at.installed || G !== t) {
                    at.installed = !0, G = t;
                    var e = function(t) {
                            return void 0 !== t
                        },
                        r = function(t, r) {
                            var n = t.$options._parentVnode;
                            e(n) && e(n = n.data) && e(n = n.registerRouteInstance) && n(t, r)
                        };
                    t.mixin({
                        beforeCreate: function() {
                            e(this.$options.router) ? (this._routerRoot = this, this._router = this.$options.router, this._router.init(this), t.util.defineReactive(this, "_route", this._router.history.current)) : this._routerRoot = this.$parent && this.$parent._routerRoot || this, r(this, this)
                        },
                        destroyed: function() {
                            r(this)
                        }
                    }), Object.defineProperty(t.prototype, "$router", {
                        get: function() {
                            return this._routerRoot._router
                        }
                    }), Object.defineProperty(t.prototype, "$route", {
                        get: function() {
                            return this._routerRoot._route
                        }
                    }), t.component("RouterView", R), t.component("RouterLink", nt);
                    var n = t.config.optionMergeStrategies;
                    n.beforeRouteEnter = n.beforeRouteLeave = n.beforeRouteUpdate = n.created
                }
            }
            var ut = "undefined" !== typeof window;

            function st(t, e, r, n, o) {
                var i = e || [],
                    a = r || Object.create(null),
                    u = n || Object.create(null);
                t.forEach((function(t) {
                    ct(i, a, u, t, o)
                }));
                for (var s = 0, c = i.length; s < c; s++) "*" === i[s] && (i.push(i.splice(s, 1)[0]), c--, s--);
                return {
                    pathList: i,
                    pathMap: a,
                    nameMap: u
                }
            }

            function ct(t, e, r, n, o, i) {
                var a = n.path,
                    u = n.name;
                var s = n.pathToRegexpOptions || {},
                    c = ft(a, o, s.strict);
                "boolean" === typeof n.caseSensitive && (s.sensitive = n.caseSensitive);
                var p = {
                    path: c,
                    regex: pt(c, s),
                    components: n.components || {
                        default: n.component
                    },
                    alias: n.alias ? "string" === typeof n.alias ? [n.alias] : n.alias : [],
                    instances: {},
                    enteredCbs: {},
                    name: u,
                    parent: o,
                    matchAs: i,
                    redirect: n.redirect,
                    beforeEnter: n.beforeEnter,
                    meta: n.meta || {},
                    props: null == n.props ? {} : n.components ? n.props : {
                        default: n.props
                    }
                };
                if (n.children && n.children.forEach((function(n) {
                        var o = i ? _(i + "/" + n.path) : void 0;
                        ct(t, e, r, n, p, o)
                    })), e[p.path] || (t.push(p.path), e[p.path] = p), void 0 !== n.alias)
                    for (var f = Array.isArray(n.alias) ? n.alias : [n.alias], h = 0; h < f.length; ++h) {
                        var l = f[h];
                        0;
                        var d = {
                            path: l,
                            children: n.children
                        };
                        ct(t, e, r, d, o, p.path || "/")
                    }
                u && (r[u] || (r[u] = p))
            }

            function pt(t, e) {
                var r = S(t, [], e);
                return r
            }

            function ft(t, e, r) {
                return r || (t = t.replace(/\/$/, "")), "/" === t[0] || null == e ? t : _(e.path + "/" + t)
            }

            function ht(t, e) {
                var r = st(t),
                    n = r.pathList,
                    o = r.pathMap,
                    i = r.nameMap;

                function a(t) {
                    st(t, n, o, i)
                }

                function u(t, e) {
                    var r = "object" !== typeof t ? i[t] : void 0;
                    st([e || t], n, o, i, r), r && r.alias.length && st(r.alias.map((function(t) {
                        return {
                            path: t,
                            children: [e]
                        }
                    })), n, o, i, r)
                }

                function s() {
                    return n.map((function(t) {
                        return o[t]
                    }))
                }

                function c(t, r, a) {
                    var u = Z(t, r, !1, e),
                        s = u.name;
                    if (s) {
                        var c = i[s];
                        if (!c) return h(null, u);
                        var p = c.regex.keys.filter((function(t) {
                            return !t.optional
                        })).map((function(t) {
                            return t.name
                        }));
                        if ("object" !== typeof u.params && (u.params = {}), r && "object" === typeof r.params)
                            for (var f in r.params) !(f in u.params) && p.indexOf(f) > -1 && (u.params[f] = r.params[f]);
                        return u.path = Y(c.path, u.params, 'named route "' + s + '"'), h(c, u, a)
                    }
                    if (u.path) {
                        u.params = {};
                        for (var l = 0; l < n.length; l++) {
                            var d = n[l],
                                v = o[d];
                            if (lt(v.regex, u.path, u.params)) return h(v, u, a)
                        }
                    }
                    return h(null, u)
                }

                function p(t, r) {
                    var n = t.redirect,
                        o = "function" === typeof n ? n(l(t, r, null, e)) : n;
                    if ("string" === typeof o && (o = {
                            path: o
                        }), !o || "object" !== typeof o) return h(null, r);
                    var a = o,
                        u = a.name,
                        s = a.path,
                        p = r.query,
                        f = r.hash,
                        d = r.params;
                    if (p = a.hasOwnProperty("query") ? a.query : p, f = a.hasOwnProperty("hash") ? a.hash : f, d = a.hasOwnProperty("params") ? a.params : d, u) {
                        i[u];
                        return c({
                            _normalized: !0,
                            name: u,
                            query: p,
                            hash: f,
                            params: d
                        }, void 0, r)
                    }
                    if (s) {
                        var v = dt(s, t),
                            y = Y(v, d, 'redirect route with path "' + v + '"');
                        return c({
                            _normalized: !0,
                            path: y,
                            query: p,
                            hash: f
                        }, void 0, r)
                    }
                    return h(null, r)
                }

                function f(t, e, r) {
                    var n = Y(r, e.params, 'aliased route with path "' + r + '"'),
                        o = c({
                            _normalized: !0,
                            path: n
                        });
                    if (o) {
                        var i = o.matched,
                            a = i[i.length - 1];
                        return e.params = o.params, h(a, e)
                    }
                    return h(null, e)
                }

                function h(t, r, n) {
                    return t && t.redirect ? p(t, n || r) : t && t.matchAs ? f(t, r, t.matchAs) : l(t, r, n, e)
                }
                return {
                    match: c,
                    addRoute: u,
                    getRoutes: s,
                    addRoutes: a
                }
            }

            function lt(t, e, r) {
                var n = e.match(t);
                if (!n) return !1;
                if (!r) return !0;
                for (var o = 1, i = n.length; o < i; ++o) {
                    var a = t.keys[o - 1];
                    a && (r[a.name || "pathMatch"] = "string" === typeof n[o] ? u(n[o]) : n[o])
                }
                return !0
            }

            function dt(t, e) {
                return A(t, e.parent ? e.parent.path : "/", !0)
            }
            var vt = ut && window.performance && window.performance.now ? window.performance : Date;

            function yt() {
                return vt.now().toFixed(3)
            }
            var mt = yt();

            function gt() {
                return mt
            }

            function wt(t) {
                return mt = t
            }
            var bt = Object.create(null);

            function xt() {
                "scrollRestoration" in window.history && (window.history.scrollRestoration = "manual");
                var t = window.location.protocol + "//" + window.location.host,
                    e = window.location.href.replace(t, ""),
                    n = r({}, window.history.state);
                return n.key = gt(), window.history.replaceState(n, "", e), window.addEventListener("popstate", Et),
                    function() {
                        window.removeEventListener("popstate", Et)
                    }
            }

            function kt(t, e, r, n) {
                if (t.app) {
                    var o = t.options.scrollBehavior;
                    o && t.app.$nextTick((function() {
                        var i = Ct(),
                            a = o.call(t, e, r, n ? i : null);
                        a && ("function" === typeof a.then ? a.then((function(t) {
                            Pt(t, i)
                        })).catch((function(t) {
                            0
                        })) : Pt(a, i))
                    }))
                }
            }

            function Rt() {
                var t = gt();
                t && (bt[t] = {
                    x: window.pageXOffset,
                    y: window.pageYOffset
                })
            }

            function Et(t) {
                Rt(), t.state && t.state.key && wt(t.state.key)
            }

            function Ct() {
                var t = gt();
                if (t) return bt[t]
            }

            function At(t, e) {
                var r = document.documentElement,
                    n = r.getBoundingClientRect(),
                    o = t.getBoundingClientRect();
                return {
                    x: o.left - n.left - e.x,
                    y: o.top - n.top - e.y
                }
            }

            function Ot(t) {
                return St(t.x) || St(t.y)
            }

            function _t(t) {
                return {
                    x: St(t.x) ? t.x : window.pageXOffset,
                    y: St(t.y) ? t.y : window.pageYOffset
                }
            }

            function jt(t) {
                return {
                    x: St(t.x) ? t.x : 0,
                    y: St(t.y) ? t.y : 0
                }
            }

            function St(t) {
                return "number" === typeof t
            }
            var Tt = /^#\d/;

            function Pt(t, e) {
                var r = "object" === typeof t;
                if (r && "string" === typeof t.selector) {
                    var n = Tt.test(t.selector) ? document.getElementById(t.selector.slice(1)) : document.querySelector(t.selector);
                    if (n) {
                        var o = t.offset && "object" === typeof t.offset ? t.offset : {};
                        o = jt(o), e = At(n, o)
                    } else Ot(t) && (e = _t(t))
                } else r && Ot(t) && (e = _t(t));
                e && ("scrollBehavior" in document.documentElement.style ? window.scrollTo({
                    left: e.x,
                    top: e.y,
                    behavior: t.behavior
                }) : window.scrollTo(e.x, e.y))
            }
            var Lt = ut && function() {
                var t = window.navigator.userAgent;
                return (-1 === t.indexOf("Android 2.") && -1 === t.indexOf("Android 4.0") || -1 === t.indexOf("Mobile Safari") || -1 !== t.indexOf("Chrome") || -1 !== t.indexOf("Windows Phone")) && (window.history && "function" === typeof window.history.pushState)
            }();

            function $t(t, e) {
                Rt();
                var n = window.history;
                try {
                    if (e) {
                        var o = r({}, n.state);
                        o.key = gt(), n.replaceState(o, "", t)
                    } else n.pushState({
                        key: wt(yt())
                    }, "", t)
                } catch (i) {
                    window.location[e ? "replace" : "assign"](t)
                }
            }

            function qt(t) {
                $t(t, !0)
            }

            function Ut(t, e, r) {
                var n = function(o) {
                    o >= t.length ? r() : t[o] ? e(t[o], (function() {
                        n(o + 1)
                    })) : n(o + 1)
                };
                n(0)
            }
            var Bt = {
                redirected: 2,
                aborted: 4,
                cancelled: 8,
                duplicated: 16
            };

            function It(t, e) {
                return Ht(t, e, Bt.redirected, 'Redirected when going from "' + t.fullPath + '" to "' + zt(e) + '" via a navigation guard.')
            }

            function Mt(t, e) {
                var r = Ht(t, e, Bt.duplicated, 'Avoided redundant navigation to current location: "' + t.fullPath + '".');
                return r.name = "NavigationDuplicated", r
            }

            function Vt(t, e) {
                return Ht(t, e, Bt.cancelled, 'Navigation cancelled from "' + t.fullPath + '" to "' + e.fullPath + '" with a new navigation.')
            }

            function Ft(t, e) {
                return Ht(t, e, Bt.aborted, 'Navigation aborted from "' + t.fullPath + '" to "' + e.fullPath + '" via a navigation guard.')
            }

            function Ht(t, e, r, n) {
                var o = new Error(n);
                return o._isRouter = !0, o.from = t, o.to = e, o.type = r, o
            }
            var Nt = ["params", "query", "hash"];

            function zt(t) {
                if ("string" === typeof t) return t;
                if ("path" in t) return t.path;
                var e = {};
                return Nt.forEach((function(r) {
                    r in t && (e[r] = t[r])
                })), JSON.stringify(e, null, 2)
            }

            function Dt(t) {
                return Object.prototype.toString.call(t).indexOf("Error") > -1
            }

            function Kt(t, e) {
                return Dt(t) && t._isRouter && (null == e || t.type === e)
            }

            function Xt(t) {
                return function(e, r, n) {
                    var o = !1,
                        i = 0,
                        a = null;
                    Jt(t, (function(t, e, r, u) {
                        if ("function" === typeof t && void 0 === t.cid) {
                            o = !0, i++;
                            var s, c = Zt((function(e) {
                                    Yt(e) && (e = e.default), t.resolved = "function" === typeof e ? e : G.extend(e), r.components[u] = e, i--, i <= 0 && n()
                                })),
                                p = Zt((function(t) {
                                    var e = "Failed to resolve async component " + u + ": " + t;
                                    a || (a = Dt(t) ? t : new Error(e), n(a))
                                }));
                            try {
                                s = t(c, p)
                            } catch (h) {
                                p(h)
                            }
                            if (s)
                                if ("function" === typeof s.then) s.then(c, p);
                                else {
                                    var f = s.component;
                                    f && "function" === typeof f.then && f.then(c, p)
                                }
                        }
                    })), o || n()
                }
            }

            function Jt(t, e) {
                return Wt(t.map((function(t) {
                    return Object.keys(t.components).map((function(r) {
                        return e(t.components[r], t.instances[r], t, r)
                    }))
                })))
            }

            function Wt(t) {
                return Array.prototype.concat.apply([], t)
            }
            var Qt = "function" === typeof Symbol && "symbol" === typeof Symbol.toStringTag;

            function Yt(t) {
                return t.__esModule || Qt && "Module" === t[Symbol.toStringTag]
            }

            function Zt(t) {
                var e = !1;
                return function() {
                    var r = [],
                        n = arguments.length;
                    while (n--) r[n] = arguments[n];
                    if (!e) return e = !0, t.apply(this, r)
                }
            }
            var Gt = function(t, e) {
                this.router = t, this.base = te(e), this.current = v, this.pending = null, this.ready = !1, this.readyCbs = [], this.readyErrorCbs = [], this.errorCbs = [], this.listeners = []
            };

            function te(t) {
                if (!t)
                    if (ut) {
                        var e = document.querySelector("base");
                        t = e && e.getAttribute("href") || "/", t = t.replace(/^https?:\/\/[^\/]+/, "")
                    } else t = "/";
                return "/" !== t.charAt(0) && (t = "/" + t), t.replace(/\/$/, "")
            }

            function ee(t, e) {
                var r, n = Math.max(t.length, e.length);
                for (r = 0; r < n; r++)
                    if (t[r] !== e[r]) break;
                return {
                    updated: e.slice(0, r),
                    activated: e.slice(r),
                    deactivated: t.slice(r)
                }
            }

            function re(t, e, r, n) {
                var o = Jt(t, (function(t, n, o, i) {
                    var a = ne(t, e);
                    if (a) return Array.isArray(a) ? a.map((function(t) {
                        return r(t, n, o, i)
                    })) : r(a, n, o, i)
                }));
                return Wt(n ? o.reverse() : o)
            }

            function ne(t, e) {
                return "function" !== typeof t && (t = G.extend(t)), t.options[e]
            }

            function oe(t) {
                return re(t, "beforeRouteLeave", ae, !0)
            }

            function ie(t) {
                return re(t, "beforeRouteUpdate", ae)
            }

            function ae(t, e) {
                if (e) return function() {
                    return t.apply(e, arguments)
                }
            }

            function ue(t) {
                return re(t, "beforeRouteEnter", (function(t, e, r, n) {
                    return se(t, r, n)
                }))
            }

            function se(t, e, r) {
                return function(n, o, i) {
                    return t(n, o, (function(t) {
                        "function" === typeof t && (e.enteredCbs[r] || (e.enteredCbs[r] = []), e.enteredCbs[r].push(t)), i(t)
                    }))
                }
            }
            Gt.prototype.listen = function(t) {
                this.cb = t
            }, Gt.prototype.onReady = function(t, e) {
                this.ready ? t() : (this.readyCbs.push(t), e && this.readyErrorCbs.push(e))
            }, Gt.prototype.onError = function(t) {
                this.errorCbs.push(t)
            }, Gt.prototype.transitionTo = function(t, e, r) {
                var n, o = this;
                try {
                    n = this.router.match(t, this.current)
                } catch (a) {
                    throw this.errorCbs.forEach((function(t) {
                        t(a)
                    })), a
                }
                var i = this.current;
                this.confirmTransition(n, (function() {
                    o.updateRoute(n), e && e(n), o.ensureURL(), o.router.afterHooks.forEach((function(t) {
                        t && t(n, i)
                    })), o.ready || (o.ready = !0, o.readyCbs.forEach((function(t) {
                        t(n)
                    })))
                }), (function(t) {
                    r && r(t), t && !o.ready && (Kt(t, Bt.redirected) && i === v || (o.ready = !0, o.readyErrorCbs.forEach((function(e) {
                        e(t)
                    }))))
                }))
            }, Gt.prototype.confirmTransition = function(t, e, r) {
                var n = this,
                    o = this.current;
                this.pending = t;
                var i = function(t) {
                        !Kt(t) && Dt(t) && (n.errorCbs.length ? n.errorCbs.forEach((function(e) {
                            e(t)
                        })) : console.error(t)), r && r(t)
                    },
                    a = t.matched.length - 1,
                    u = o.matched.length - 1;
                if (g(t, o) && a === u && t.matched[a] === o.matched[u]) return this.ensureURL(), t.hash && kt(this.router, o, t, !1), i(Mt(o, t));
                var s = ee(this.current.matched, t.matched),
                    c = s.updated,
                    p = s.deactivated,
                    f = s.activated,
                    h = [].concat(oe(p), this.router.beforeHooks, ie(c), f.map((function(t) {
                        return t.beforeEnter
                    })), Xt(f)),
                    l = function(e, r) {
                        if (n.pending !== t) return i(Vt(o, t));
                        try {
                            e(t, o, (function(e) {
                                !1 === e ? (n.ensureURL(!0), i(Ft(o, t))) : Dt(e) ? (n.ensureURL(!0), i(e)) : "string" === typeof e || "object" === typeof e && ("string" === typeof e.path || "string" === typeof e.name) ? (i(It(o, t)), "object" === typeof e && e.replace ? n.replace(e) : n.push(e)) : r(e)
                            }))
                        } catch (a) {
                            i(a)
                        }
                    };
                Ut(h, l, (function() {
                    var r = ue(f),
                        a = r.concat(n.router.resolveHooks);
                    Ut(a, l, (function() {
                        if (n.pending !== t) return i(Vt(o, t));
                        n.pending = null, e(t), n.router.app && n.router.app.$nextTick((function() {
                            k(t)
                        }))
                    }))
                }))
            }, Gt.prototype.updateRoute = function(t) {
                this.current = t, this.cb && this.cb(t)
            }, Gt.prototype.setupListeners = function() {}, Gt.prototype.teardown = function() {
                this.listeners.forEach((function(t) {
                    t()
                })), this.listeners = [], this.current = v, this.pending = null
            };
            var ce = function(t) {
                function e(e, r) {
                    t.call(this, e, r), this._startLocation = pe(this.base)
                }
                return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.setupListeners = function() {
                    var t = this;
                    if (!(this.listeners.length > 0)) {
                        var e = this.router,
                            r = e.options.scrollBehavior,
                            n = Lt && r;
                        n && this.listeners.push(xt());
                        var o = function() {
                            var r = t.current,
                                o = pe(t.base);
                            t.current === v && o === t._startLocation || t.transitionTo(o, (function(t) {
                                n && kt(e, t, r, !0)
                            }))
                        };
                        window.addEventListener("popstate", o), this.listeners.push((function() {
                            window.removeEventListener("popstate", o)
                        }))
                    }
                }, e.prototype.go = function(t) {
                    window.history.go(t)
                }, e.prototype.push = function(t, e, r) {
                    var n = this,
                        o = this,
                        i = o.current;
                    this.transitionTo(t, (function(t) {
                        $t(_(n.base + t.fullPath)), kt(n.router, t, i, !1), e && e(t)
                    }), r)
                }, e.prototype.replace = function(t, e, r) {
                    var n = this,
                        o = this,
                        i = o.current;
                    this.transitionTo(t, (function(t) {
                        qt(_(n.base + t.fullPath)), kt(n.router, t, i, !1), e && e(t)
                    }), r)
                }, e.prototype.ensureURL = function(t) {
                    if (pe(this.base) !== this.current.fullPath) {
                        var e = _(this.base + this.current.fullPath);
                        t ? $t(e) : qt(e)
                    }
                }, e.prototype.getCurrentLocation = function() {
                    return pe(this.base)
                }, e
            }(Gt);

            function pe(t) {
                var e = window.location.pathname,
                    r = e.toLowerCase(),
                    n = t.toLowerCase();
                return !t || r !== n && 0 !== r.indexOf(_(n + "/")) || (e = e.slice(t.length)), (e || "/") + window.location.search + window.location.hash
            }
            var fe = function(t) {
                function e(e, r, n) {
                    t.call(this, e, r), n && he(this.base) || le()
                }
                return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.setupListeners = function() {
                    var t = this;
                    if (!(this.listeners.length > 0)) {
                        var e = this.router,
                            r = e.options.scrollBehavior,
                            n = Lt && r;
                        n && this.listeners.push(xt());
                        var o = function() {
                                var e = t.current;
                                le() && t.transitionTo(de(), (function(r) {
                                    n && kt(t.router, r, e, !0), Lt || me(r.fullPath)
                                }))
                            },
                            i = Lt ? "popstate" : "hashchange";
                        window.addEventListener(i, o), this.listeners.push((function() {
                            window.removeEventListener(i, o)
                        }))
                    }
                }, e.prototype.push = function(t, e, r) {
                    var n = this,
                        o = this,
                        i = o.current;
                    this.transitionTo(t, (function(t) {
                        ye(t.fullPath), kt(n.router, t, i, !1), e && e(t)
                    }), r)
                }, e.prototype.replace = function(t, e, r) {
                    var n = this,
                        o = this,
                        i = o.current;
                    this.transitionTo(t, (function(t) {
                        me(t.fullPath), kt(n.router, t, i, !1), e && e(t)
                    }), r)
                }, e.prototype.go = function(t) {
                    window.history.go(t)
                }, e.prototype.ensureURL = function(t) {
                    var e = this.current.fullPath;
                    de() !== e && (t ? ye(e) : me(e))
                }, e.prototype.getCurrentLocation = function() {
                    return de()
                }, e
            }(Gt);

            function he(t) {
                var e = pe(t);
                if (!/^\/#/.test(e)) return window.location.replace(_(t + "/#" + e)), !0
            }

            function le() {
                var t = de();
                return "/" === t.charAt(0) || (me("/" + t), !1)
            }

            function de() {
                var t = window.location.href,
                    e = t.indexOf("#");
                return e < 0 ? "" : (t = t.slice(e + 1), t)
            }

            function ve(t) {
                var e = window.location.href,
                    r = e.indexOf("#"),
                    n = r >= 0 ? e.slice(0, r) : e;
                return n + "#" + t
            }

            function ye(t) {
                Lt ? $t(ve(t)) : window.location.hash = t
            }

            function me(t) {
                Lt ? qt(ve(t)) : window.location.replace(ve(t))
            }
            var ge = function(t) {
                    function e(e, r) {
                        t.call(this, e, r), this.stack = [], this.index = -1
                    }
                    return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.push = function(t, e, r) {
                        var n = this;
                        this.transitionTo(t, (function(t) {
                            n.stack = n.stack.slice(0, n.index + 1).concat(t), n.index++, e && e(t)
                        }), r)
                    }, e.prototype.replace = function(t, e, r) {
                        var n = this;
                        this.transitionTo(t, (function(t) {
                            n.stack = n.stack.slice(0, n.index).concat(t), e && e(t)
                        }), r)
                    }, e.prototype.go = function(t) {
                        var e = this,
                            r = this.index + t;
                        if (!(r < 0 || r >= this.stack.length)) {
                            var n = this.stack[r];
                            this.confirmTransition(n, (function() {
                                var t = e.current;
                                e.index = r, e.updateRoute(n), e.router.afterHooks.forEach((function(e) {
                                    e && e(n, t)
                                }))
                            }), (function(t) {
                                Kt(t, Bt.duplicated) && (e.index = r)
                            }))
                        }
                    }, e.prototype.getCurrentLocation = function() {
                        var t = this.stack[this.stack.length - 1];
                        return t ? t.fullPath : "/"
                    }, e.prototype.ensureURL = function() {}, e
                }(Gt),
                we = function(t) {
                    void 0 === t && (t = {}), this.app = null, this.apps = [], this.options = t, this.beforeHooks = [], this.resolveHooks = [], this.afterHooks = [], this.matcher = ht(t.routes || [], this);
                    var e = t.mode || "hash";
                    switch (this.fallback = "history" === e && !Lt && !1 !== t.fallback, this.fallback && (e = "hash"), ut || (e = "abstract"), this.mode = e, e) {
                        case "history":
                            this.history = new ce(this, t.base);
                            break;
                        case "hash":
                            this.history = new fe(this, t.base, this.fallback);
                            break;
                        case "abstract":
                            this.history = new ge(this, t.base);
                            break;
                        default:
                            0
                    }
                },
                be = {
                    currentRoute: {
                        configurable: !0
                    }
                };

            function xe(t, e) {
                return t.push(e),
                    function() {
                        var r = t.indexOf(e);
                        r > -1 && t.splice(r, 1)
                    }
            }

            function ke(t, e, r) {
                var n = "hash" === r ? "#" + e : e;
                return t ? _(t + "/" + n) : n
            }
            we.prototype.match = function(t, e, r) {
                return this.matcher.match(t, e, r)
            }, be.currentRoute.get = function() {
                return this.history && this.history.current
            }, we.prototype.init = function(t) {
                var e = this;
                if (this.apps.push(t), t.$once("hook:destroyed", (function() {
                        var r = e.apps.indexOf(t);
                        r > -1 && e.apps.splice(r, 1), e.app === t && (e.app = e.apps[0] || null), e.app || e.history.teardown()
                    })), !this.app) {
                    this.app = t;
                    var r = this.history;
                    if (r instanceof ce || r instanceof fe) {
                        var n = function(t) {
                                var n = r.current,
                                    o = e.options.scrollBehavior,
                                    i = Lt && o;
                                i && "fullPath" in t && kt(e, t, n, !1)
                            },
                            o = function(t) {
                                r.setupListeners(), n(t)
                            };
                        r.transitionTo(r.getCurrentLocation(), o, o)
                    }
                    r.listen((function(t) {
                        e.apps.forEach((function(e) {
                            e._route = t
                        }))
                    }))
                }
            }, we.prototype.beforeEach = function(t) {
                return xe(this.beforeHooks, t)
            }, we.prototype.beforeResolve = function(t) {
                return xe(this.resolveHooks, t)
            }, we.prototype.afterEach = function(t) {
                return xe(this.afterHooks, t)
            }, we.prototype.onReady = function(t, e) {
                this.history.onReady(t, e)
            }, we.prototype.onError = function(t) {
                this.history.onError(t)
            }, we.prototype.push = function(t, e, r) {
                var n = this;
                if (!e && !r && "undefined" !== typeof Promise) return new Promise((function(e, r) {
                    n.history.push(t, e, r)
                }));
                this.history.push(t, e, r)
            }, we.prototype.replace = function(t, e, r) {
                var n = this;
                if (!e && !r && "undefined" !== typeof Promise) return new Promise((function(e, r) {
                    n.history.replace(t, e, r)
                }));
                this.history.replace(t, e, r)
            }, we.prototype.go = function(t) {
                this.history.go(t)
            }, we.prototype.back = function() {
                this.go(-1)
            }, we.prototype.forward = function() {
                this.go(1)
            }, we.prototype.getMatchedComponents = function(t) {
                var e = t ? t.matched ? t : this.resolve(t).route : this.currentRoute;
                return e ? [].concat.apply([], e.matched.map((function(t) {
                    return Object.keys(t.components).map((function(e) {
                        return t.components[e]
                    }))
                }))) : []
            }, we.prototype.resolve = function(t, e, r) {
                e = e || this.history.current;
                var n = Z(t, e, r, this),
                    o = this.match(n, e),
                    i = o.redirectedFrom || o.fullPath,
                    a = this.history.base,
                    u = ke(a, i, this.mode);
                return {
                    location: n,
                    route: o,
                    href: u,
                    normalizedTo: n,
                    resolved: o
                }
            }, we.prototype.getRoutes = function() {
                return this.matcher.getRoutes()
            }, we.prototype.addRoute = function(t, e) {
                this.matcher.addRoute(t, e), this.history.current !== v && this.history.transitionTo(this.history.getCurrentLocation())
            }, we.prototype.addRoutes = function(t) {
                this.matcher.addRoutes(t), this.history.current !== v && this.history.transitionTo(this.history.getCurrentLocation())
            }, Object.defineProperties(we.prototype, be), we.install = at, we.version = "3.5.4", we.isNavigationFailure = Kt, we.NavigationFailureType = Bt, we.START_LOCATION = v, ut && window.Vue && window.Vue.use(we), e["Z"] = we
        }
    }
]);