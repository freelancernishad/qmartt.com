"use strict";
(self["webpackChunkWebFX"] = self["webpackChunkWebFX"] || []).push([
    [5264], {
        17152: function(t, e) {
            /*!
             * vue-i18n v8.27.2 
             * (c) 2022 kazuya kawaguchi
             * Released under the MIT License.
             */
            var n = ["compactDisplay", "currency", "currencyDisplay", "currencySign", "localeMatcher", "notation", "numberingSystem", "signDisplay", "style", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits"];

            function r(t, e) {
                "undefined" !== typeof console && (console.warn("[vue-i18n] " + t), e && console.warn(e.stack))
            }

            function a(t, e) {
                "undefined" !== typeof console && (console.error("[vue-i18n] " + t), e && console.error(e.stack))
            }
            var i = Array.isArray;

            function o(t) {
                return null !== t && "object" === typeof t
            }

            function s(t) {
                return "boolean" === typeof t
            }

            function l(t) {
                return "string" === typeof t
            }
            var c = Object.prototype.toString,
                u = "[object Object]";

            function h(t) {
                return c.call(t) === u
            }

            function f(t) {
                return null === t || void 0 === t
            }

            function p(t) {
                return "function" === typeof t
            }

            function _() {
                var t = [],
                    e = arguments.length;
                while (e--) t[e] = arguments[e];
                var n = null,
                    r = null;
                return 1 === t.length ? o(t[0]) || i(t[0]) ? r = t[0] : "string" === typeof t[0] && (n = t[0]) : 2 === t.length && ("string" === typeof t[0] && (n = t[0]), (o(t[1]) || i(t[1])) && (r = t[1])), {
                    locale: n,
                    params: r
                }
            }

            function m(t) {
                return JSON.parse(JSON.stringify(t))
            }

            function g(t, e) {
                if (t.delete(e)) return t
            }

            function v(t) {
                var e = [];
                return t.forEach((function(t) {
                    return e.push(t)
                })), e
            }

            function d(t, e) {
                return !!~t.indexOf(e)
            }
            var b = Object.prototype.hasOwnProperty;

            function y(t, e) {
                return b.call(t, e)
            }

            function w(t) {
                for (var e = arguments, n = Object(t), r = 1; r < arguments.length; r++) {
                    var a = e[r];
                    if (void 0 !== a && null !== a) {
                        var i = void 0;
                        for (i in a) y(a, i) && (o(a[i]) ? n[i] = w(n[i], a[i]) : n[i] = a[i])
                    }
                }
                return n
            }

            function k(t, e) {
                if (t === e) return !0;
                var n = o(t),
                    r = o(e);
                if (!n || !r) return !n && !r && String(t) === String(e);
                try {
                    var a = i(t),
                        s = i(e);
                    if (a && s) return t.length === e.length && t.every((function(t, n) {
                        return k(t, e[n])
                    }));
                    if (a || s) return !1;
                    var l = Object.keys(t),
                        c = Object.keys(e);
                    return l.length === c.length && l.every((function(n) {
                        return k(t[n], e[n])
                    }))
                } catch (u) {
                    return !1
                }
            }

            function F(t) {
                return t.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
            }

            function $(t) {
                return null != t && Object.keys(t).forEach((function(e) {
                    "string" == typeof t[e] && (t[e] = F(t[e]))
                })), t
            }

            function M(t) {
                t.prototype.hasOwnProperty("$i18n") || Object.defineProperty(t.prototype, "$i18n", {
                    get: function() {
                        return this._i18n
                    }
                }), t.prototype.$t = function(t) {
                    var e = [],
                        n = arguments.length - 1;
                    while (n-- > 0) e[n] = arguments[n + 1];
                    var r = this.$i18n;
                    return r._t.apply(r, [t, r.locale, r._getMessages(), this].concat(e))
                }, t.prototype.$tc = function(t, e) {
                    var n = [],
                        r = arguments.length - 2;
                    while (r-- > 0) n[r] = arguments[r + 2];
                    var a = this.$i18n;
                    return a._tc.apply(a, [t, a.locale, a._getMessages(), this, e].concat(n))
                }, t.prototype.$te = function(t, e) {
                    var n = this.$i18n;
                    return n._te(t, n.locale, n._getMessages(), e)
                }, t.prototype.$d = function(t) {
                    var e, n = [],
                        r = arguments.length - 1;
                    while (r-- > 0) n[r] = arguments[r + 1];
                    return (e = this.$i18n).d.apply(e, [t].concat(n))
                }, t.prototype.$n = function(t) {
                    var e, n = [],
                        r = arguments.length - 1;
                    while (r-- > 0) n[r] = arguments[r + 1];
                    return (e = this.$i18n).n.apply(e, [t].concat(n))
                }
            }

            function T(t) {
                function e() {
                    this !== this.$root && this.$options.__INTLIFY_META__ && this.$el && this.$el.setAttribute("data-intlify", this.$options.__INTLIFY_META__)
                }
                return void 0 === t && (t = !1), t ? {
                    mounted: e
                } : {
                    beforeCreate: function() {
                        var t = this.$options;
                        if (t.i18n = t.i18n || (t.__i18nBridge || t.__i18n ? {} : null), t.i18n)
                            if (t.i18n instanceof $t) {
                                if (t.__i18nBridge || t.__i18n) try {
                                    var e = t.i18n && t.i18n.messages ? t.i18n.messages : {},
                                        n = t.__i18nBridge || t.__i18n;
                                    n.forEach((function(t) {
                                        e = w(e, JSON.parse(t))
                                    })), Object.keys(e).forEach((function(n) {
                                        t.i18n.mergeLocaleMessage(n, e[n])
                                    }))
                                } catch (l) {
                                    0
                                }
                                this._i18n = t.i18n, this._i18nWatcher = this._i18n.watchI18nData()
                            } else if (h(t.i18n)) {
                            var r = this.$root && this.$root.$i18n && this.$root.$i18n instanceof $t ? this.$root.$i18n : null;
                            if (r && (t.i18n.root = this.$root, t.i18n.formatter = r.formatter, t.i18n.fallbackLocale = r.fallbackLocale, t.i18n.formatFallbackMessages = r.formatFallbackMessages, t.i18n.silentTranslationWarn = r.silentTranslationWarn, t.i18n.silentFallbackWarn = r.silentFallbackWarn, t.i18n.pluralizationRules = r.pluralizationRules, t.i18n.preserveDirectiveContent = r.preserveDirectiveContent), t.__i18nBridge || t.__i18n) try {
                                var a = t.i18n && t.i18n.messages ? t.i18n.messages : {},
                                    i = t.__i18nBridge || t.__i18n;
                                i.forEach((function(t) {
                                    a = w(a, JSON.parse(t))
                                })), t.i18n.messages = a
                            } catch (l) {
                                0
                            }
                            var o = t.i18n,
                                s = o.sharedMessages;
                            s && h(s) && (t.i18n.messages = w(t.i18n.messages, s)), this._i18n = new $t(t.i18n), this._i18nWatcher = this._i18n.watchI18nData(), (void 0 === t.i18n.sync || t.i18n.sync) && (this._localeWatcher = this.$i18n.watchLocale()), r && r.onComponentInstanceCreated(this._i18n)
                        } else 0;
                        else this.$root && this.$root.$i18n && this.$root.$i18n instanceof $t ? this._i18n = this.$root.$i18n : t.parent && t.parent.$i18n && t.parent.$i18n instanceof $t && (this._i18n = t.parent.$i18n)
                    },
                    beforeMount: function() {
                        var t = this.$options;
                        t.i18n = t.i18n || (t.__i18nBridge || t.__i18n ? {} : null), t.i18n ? (t.i18n instanceof $t || h(t.i18n)) && (this._i18n.subscribeDataChanging(this), this._subscribing = !0) : (this.$root && this.$root.$i18n && this.$root.$i18n instanceof $t || t.parent && t.parent.$i18n && t.parent.$i18n instanceof $t) && (this._i18n.subscribeDataChanging(this), this._subscribing = !0)
                    },
                    mounted: e,
                    beforeDestroy: function() {
                        if (this._i18n) {
                            var t = this;
                            this.$nextTick((function() {
                                t._subscribing && (t._i18n.unsubscribeDataChanging(t), delete t._subscribing), t._i18nWatcher && (t._i18nWatcher(), t._i18n.destroyVM(), delete t._i18nWatcher), t._localeWatcher && (t._localeWatcher(), delete t._localeWatcher)
                            }))
                        }
                    }
                }
            }
            var C = {
                name: "i18n",
                functional: !0,
                props: {
                    tag: {
                        type: [String, Boolean, Object],
                        default: "span"
                    },
                    path: {
                        type: String,
                        required: !0
                    },
                    locale: {
                        type: String
                    },
                    places: {
                        type: [Array, Object]
                    }
                },
                render: function(t, e) {
                    var n = e.data,
                        r = e.parent,
                        a = e.props,
                        i = e.slots,
                        o = r.$i18n;
                    if (o) {
                        var s = a.path,
                            l = a.locale,
                            c = a.places,
                            u = i(),
                            h = o.i(s, l, I(u) || c ? L(u.default, c) : u),
                            f = a.tag && !0 !== a.tag || !1 === a.tag ? a.tag : "span";
                        return f ? t(f, n, h) : h
                    }
                }
            };

            function I(t) {
                var e;
                for (e in t)
                    if ("default" !== e) return !1;
                return Boolean(e)
            }

            function L(t, e) {
                var n = e ? D(e) : {};
                if (!t) return n;
                t = t.filter((function(t) {
                    return t.tag || "" !== t.text.trim()
                }));
                var r = t.every(x);
                return t.reduce(r ? O : W, n)
            }

            function D(t) {
                return Array.isArray(t) ? t.reduce(W, {}) : Object.assign({}, t)
            }

            function O(t, e) {
                return e.data && e.data.attrs && e.data.attrs.place && (t[e.data.attrs.place] = e), t
            }

            function W(t, e, n) {
                return t[n] = e, t
            }

            function x(t) {
                return Boolean(t.data && t.data.attrs && t.data.attrs.place)
            }
            var N, j = {
                name: "i18n-n",
                functional: !0,
                props: {
                    tag: {
                        type: [String, Boolean, Object],
                        default: "span"
                    },
                    value: {
                        type: Number,
                        required: !0
                    },
                    format: {
                        type: [String, Object]
                    },
                    locale: {
                        type: String
                    }
                },
                render: function(t, e) {
                    var r = e.props,
                        a = e.parent,
                        i = e.data,
                        s = a.$i18n;
                    if (!s) return null;
                    var c = null,
                        u = null;
                    l(r.format) ? c = r.format : o(r.format) && (r.format.key && (c = r.format.key), u = Object.keys(r.format).reduce((function(t, e) {
                        var a;
                        return d(n, e) ? Object.assign({}, t, (a = {}, a[e] = r.format[e], a)) : t
                    }), null));
                    var h = r.locale || s.locale,
                        f = s._ntp(r.value, h, c, u),
                        p = f.map((function(t, e) {
                            var n, r = i.scopedSlots && i.scopedSlots[t.type];
                            return r ? r((n = {}, n[t.type] = t.value, n.index = e, n.parts = f, n)) : t.value
                        })),
                        _ = r.tag && !0 !== r.tag || !1 === r.tag ? r.tag : "span";
                    return _ ? t(_, {
                        attrs: i.attrs,
                        class: i["class"],
                        staticClass: i.staticClass
                    }, p) : p
                }
            };

            function E(t, e, n) {
                H(t, n) && P(t, e, n)
            }

            function S(t, e, n, r) {
                if (H(t, n)) {
                    var a = n.context.$i18n;
                    V(t, n) && k(e.value, e.oldValue) && k(t._localeMessage, a.getLocaleMessage(a.locale)) || P(t, e, n)
                }
            }

            function R(t, e, n, a) {
                var i = n.context;
                if (i) {
                    var o = n.context.$i18n || {};
                    e.modifiers.preserve || o.preserveDirectiveContent || (t.textContent = ""), t._vt = void 0, delete t["_vt"], t._locale = void 0, delete t["_locale"], t._localeMessage = void 0, delete t["_localeMessage"]
                } else r("Vue instance does not exists in VNode context")
            }

            function H(t, e) {
                var n = e.context;
                return n ? !!n.$i18n || (r("VueI18n instance does not exists in Vue instance"), !1) : (r("Vue instance does not exists in VNode context"), !1)
            }

            function V(t, e) {
                var n = e.context;
                return t._locale === n.$i18n.locale
            }

            function P(t, e, n) {
                var a, i, o = e.value,
                    s = A(o),
                    l = s.path,
                    c = s.locale,
                    u = s.args,
                    h = s.choice;
                if (l || c || u)
                    if (l) {
                        var f = n.context;
                        t._vt = t.textContent = null != h ? (a = f.$i18n).tc.apply(a, [l, h].concat(B(c, u))) : (i = f.$i18n).t.apply(i, [l].concat(B(c, u))), t._locale = f.$i18n.locale, t._localeMessage = f.$i18n.getLocaleMessage(f.$i18n.locale)
                    } else r("`path` is required in v-t directive");
                else r("value type not supported")
            }

            function A(t) {
                var e, n, r, a;
                return l(t) ? e = t : h(t) && (e = t.path, n = t.locale, r = t.args, a = t.choice), {
                    path: e,
                    locale: n,
                    args: r,
                    choice: a
                }
            }

            function B(t, e) {
                var n = [];
                return t && n.push(t), e && (Array.isArray(e) || h(e)) && n.push(e), n
            }

            function U(t, e) {
                void 0 === e && (e = {
                    bridge: !1
                }), U.installed = !0, N = t;
                N.version && Number(N.version.split(".")[0]);
                M(N), N.mixin(T(e.bridge)), N.directive("t", {
                    bind: E,
                    update: S,
                    unbind: R
                }), N.component(C.name, C), N.component(j.name, j);
                var n = N.config.optionMergeStrategies;
                n.i18n = function(t, e) {
                    return void 0 === e ? t : e
                }
            }
            var z = function() {
                this._caches = Object.create(null)
            };
            z.prototype.interpolate = function(t, e) {
                if (!e) return [t];
                var n = this._caches[t];
                return n || (n = J(t), this._caches[t] = n), Z(n, e)
            };
            var G = /^(?:\d)+/,
                q = /^(?:\w)+/;

            function J(t) {
                var e = [],
                    n = 0,
                    r = "";
                while (n < t.length) {
                    var a = t[n++];
                    if ("{" === a) {
                        r && e.push({
                            type: "text",
                            value: r
                        }), r = "";
                        var i = "";
                        a = t[n++];
                        while (void 0 !== a && "}" !== a) i += a, a = t[n++];
                        var o = "}" === a,
                            s = G.test(i) ? "list" : o && q.test(i) ? "named" : "unknown";
                        e.push({
                            value: i,
                            type: s
                        })
                    } else "%" === a ? "{" !== t[n] && (r += a) : r += a
                }
                return r && e.push({
                    type: "text",
                    value: r
                }), e
            }

            function Z(t, e) {
                var n = [],
                    r = 0,
                    a = Array.isArray(e) ? "list" : o(e) ? "named" : "unknown";
                if ("unknown" === a) return n;
                while (r < t.length) {
                    var i = t[r];
                    switch (i.type) {
                        case "text":
                            n.push(i.value);
                            break;
                        case "list":
                            n.push(e[parseInt(i.value, 10)]);
                            break;
                        case "named":
                            "named" === a && n.push(e[i.value]);
                            break;
                        case "unknown":
                            0;
                            break
                    }
                    r++
                }
                return n
            }
            var X = 0,
                Y = 1,
                K = 2,
                Q = 3,
                tt = 0,
                et = 1,
                nt = 2,
                rt = 3,
                at = 4,
                it = 5,
                ot = 6,
                st = 7,
                lt = 8,
                ct = [];
            ct[tt] = {
                ws: [tt],
                ident: [rt, X],
                "[": [at],
                eof: [st]
            }, ct[et] = {
                ws: [et],
                ".": [nt],
                "[": [at],
                eof: [st]
            }, ct[nt] = {
                ws: [nt],
                ident: [rt, X],
                0: [rt, X],
                number: [rt, X]
            }, ct[rt] = {
                ident: [rt, X],
                0: [rt, X],
                number: [rt, X],
                ws: [et, Y],
                ".": [nt, Y],
                "[": [at, Y],
                eof: [st, Y]
            }, ct[at] = {
                "'": [it, X],
                '"': [ot, X],
                "[": [at, K],
                "]": [et, Q],
                eof: lt,
                else: [at, X]
            }, ct[it] = {
                "'": [at, X],
                eof: lt,
                else: [it, X]
            }, ct[ot] = {
                '"': [at, X],
                eof: lt,
                else: [ot, X]
            };
            var ut = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;

            function ht(t) {
                return ut.test(t)
            }

            function ft(t) {
                var e = t.charCodeAt(0),
                    n = t.charCodeAt(t.length - 1);
                return e !== n || 34 !== e && 39 !== e ? t : t.slice(1, -1)
            }

            function pt(t) {
                if (void 0 === t || null === t) return "eof";
                var e = t.charCodeAt(0);
                switch (e) {
                    case 91:
                    case 93:
                    case 46:
                    case 34:
                    case 39:
                        return t;
                    case 95:
                    case 36:
                    case 45:
                        return "ident";
                    case 9:
                    case 10:
                    case 13:
                    case 160:
                    case 65279:
                    case 8232:
                    case 8233:
                        return "ws"
                }
                return "ident"
            }

            function _t(t) {
                var e = t.trim();
                return ("0" !== t.charAt(0) || !isNaN(t)) && (ht(e) ? ft(e) : "*" + e)
            }

            function mt(t) {
                var e, n, r, a, i, o, s, l = [],
                    c = -1,
                    u = tt,
                    h = 0,
                    f = [];

                function p() {
                    var e = t[c + 1];
                    if (u === it && "'" === e || u === ot && '"' === e) return c++, r = "\\" + e, f[X](), !0
                }
                f[Y] = function() {
                    void 0 !== n && (l.push(n), n = void 0)
                }, f[X] = function() {
                    void 0 === n ? n = r : n += r
                }, f[K] = function() {
                    f[X](), h++
                }, f[Q] = function() {
                    if (h > 0) h--, u = at, f[X]();
                    else {
                        if (h = 0, void 0 === n) return !1;
                        if (n = _t(n), !1 === n) return !1;
                        f[Y]()
                    }
                };
                while (null !== u)
                    if (c++, e = t[c], "\\" !== e || !p()) {
                        if (a = pt(e), s = ct[u], i = s[a] || s["else"] || lt, i === lt) return;
                        if (u = i[0], o = f[i[1]], o && (r = i[2], r = void 0 === r ? e : r, !1 === o())) return;
                        if (u === st) return l
                    }
            }
            var gt = function() {
                this._cache = Object.create(null)
            };
            gt.prototype.parsePath = function(t) {
                var e = this._cache[t];
                return e || (e = mt(t), e && (this._cache[t] = e)), e || []
            }, gt.prototype.getPathValue = function(t, e) {
                if (!o(t)) return null;
                var n = this.parsePath(e);
                if (0 === n.length) return null;
                var r = n.length,
                    a = t,
                    i = 0;
                while (i < r) {
                    var s = a[n[i]];
                    if (void 0 === s || null === s) return null;
                    a = s, i++
                }
                return a
            };
            var vt, dt = /<\/?[\w\s="/.':;#-\/]+>/,
                bt = /(?:@(?:\.[a-zA-Z]+)?:(?:[\w\-_|./]+|\([\w\-_:|./]+\)))/g,
                yt = /^@(?:\.([a-zA-Z]+))?:/,
                wt = /[()]/g,
                kt = {
                    upper: function(t) {
                        return t.toLocaleUpperCase()
                    },
                    lower: function(t) {
                        return t.toLocaleLowerCase()
                    },
                    capitalize: function(t) {
                        return "" + t.charAt(0).toLocaleUpperCase() + t.substr(1)
                    }
                },
                Ft = new z,
                $t = function(t) {
                    var e = this;
                    void 0 === t && (t = {}), !N && "undefined" !== typeof window && window.Vue && U(window.Vue);
                    var n = t.locale || "en-US",
                        r = !1 !== t.fallbackLocale && (t.fallbackLocale || "en-US"),
                        a = t.messages || {},
                        i = t.dateTimeFormats || t.datetimeFormats || {},
                        o = t.numberFormats || {};
                    this._vm = null, this._formatter = t.formatter || Ft, this._modifiers = t.modifiers || {}, this._missing = t.missing || null, this._root = t.root || null, this._sync = void 0 === t.sync || !!t.sync, this._fallbackRoot = void 0 === t.fallbackRoot || !!t.fallbackRoot, this._fallbackRootWithEmptyString = void 0 === t.fallbackRootWithEmptyString || !!t.fallbackRootWithEmptyString, this._formatFallbackMessages = void 0 !== t.formatFallbackMessages && !!t.formatFallbackMessages, this._silentTranslationWarn = void 0 !== t.silentTranslationWarn && t.silentTranslationWarn, this._silentFallbackWarn = void 0 !== t.silentFallbackWarn && !!t.silentFallbackWarn, this._dateTimeFormatters = {}, this._numberFormatters = {}, this._path = new gt, this._dataListeners = new Set, this._componentInstanceCreatedListener = t.componentInstanceCreatedListener || null, this._preserveDirectiveContent = void 0 !== t.preserveDirectiveContent && !!t.preserveDirectiveContent, this.pluralizationRules = t.pluralizationRules || {}, this._warnHtmlInMessage = t.warnHtmlInMessage || "off", this._postTranslation = t.postTranslation || null, this._escapeParameterHtml = t.escapeParameterHtml || !1, "__VUE_I18N_BRIDGE__" in t && (this.__VUE_I18N_BRIDGE__ = t.__VUE_I18N_BRIDGE__), this.getChoiceIndex = function(t, n) {
                        var r = Object.getPrototypeOf(e);
                        if (r && r.getChoiceIndex) {
                            var a = r.getChoiceIndex;
                            return a.call(e, t, n)
                        }
                        var i = function(t, e) {
                            return t = Math.abs(t), 2 === e ? t ? t > 1 ? 1 : 0 : 1 : t ? Math.min(t, 2) : 0
                        };
                        return e.locale in e.pluralizationRules ? e.pluralizationRules[e.locale].apply(e, [t, n]) : i(t, n)
                    }, this._exist = function(t, n) {
                        return !(!t || !n) && (!f(e._path.getPathValue(t, n)) || !!t[n])
                    }, "warn" !== this._warnHtmlInMessage && "error" !== this._warnHtmlInMessage || Object.keys(a).forEach((function(t) {
                        e._checkLocaleMessage(t, e._warnHtmlInMessage, a[t])
                    })), this._initVM({
                        locale: n,
                        fallbackLocale: r,
                        messages: a,
                        dateTimeFormats: i,
                        numberFormats: o
                    })
                },
                Mt = {
                    vm: {
                        configurable: !0
                    },
                    messages: {
                        configurable: !0
                    },
                    dateTimeFormats: {
                        configurable: !0
                    },
                    numberFormats: {
                        configurable: !0
                    },
                    availableLocales: {
                        configurable: !0
                    },
                    locale: {
                        configurable: !0
                    },
                    fallbackLocale: {
                        configurable: !0
                    },
                    formatFallbackMessages: {
                        configurable: !0
                    },
                    missing: {
                        configurable: !0
                    },
                    formatter: {
                        configurable: !0
                    },
                    silentTranslationWarn: {
                        configurable: !0
                    },
                    silentFallbackWarn: {
                        configurable: !0
                    },
                    preserveDirectiveContent: {
                        configurable: !0
                    },
                    warnHtmlInMessage: {
                        configurable: !0
                    },
                    postTranslation: {
                        configurable: !0
                    },
                    sync: {
                        configurable: !0
                    }
                };
            $t.prototype._checkLocaleMessage = function(t, e, n) {
                var o = [],
                    s = function(t, e, n, o) {
                        if (h(n)) Object.keys(n).forEach((function(r) {
                            var a = n[r];
                            h(a) ? (o.push(r), o.push("."), s(t, e, a, o), o.pop(), o.pop()) : (o.push(r), s(t, e, a, o), o.pop())
                        }));
                        else if (i(n)) n.forEach((function(n, r) {
                            h(n) ? (o.push("[" + r + "]"), o.push("."), s(t, e, n, o), o.pop(), o.pop()) : (o.push("[" + r + "]"), s(t, e, n, o), o.pop())
                        }));
                        else if (l(n)) {
                            var c = dt.test(n);
                            if (c) {
                                var u = "Detected HTML in message '" + n + "' of keypath '" + o.join("") + "' at '" + e + "'. Consider component interpolation with '<i18n>' to avoid XSS. See https://bit.ly/2ZqJzkp";
                                "warn" === t ? r(u) : "error" === t && a(u)
                            }
                        }
                    };
                s(e, t, n, o)
            }, $t.prototype._initVM = function(t) {
                var e = N.config.silent;
                N.config.silent = !0, this._vm = new N({
                    data: t,
                    __VUE18N__INSTANCE__: !0
                }), N.config.silent = e
            }, $t.prototype.destroyVM = function() {
                this._vm.$destroy()
            }, $t.prototype.subscribeDataChanging = function(t) {
                this._dataListeners.add(t)
            }, $t.prototype.unsubscribeDataChanging = function(t) {
                g(this._dataListeners, t)
            }, $t.prototype.watchI18nData = function() {
                var t = this;
                return this._vm.$watch("$data", (function() {
                    var e = v(t._dataListeners),
                        n = e.length;
                    while (n--) N.nextTick((function() {
                        e[n] && e[n].$forceUpdate()
                    }))
                }), {
                    deep: !0
                })
            }, $t.prototype.watchLocale = function(t) {
                if (t) {
                    if (!this.__VUE_I18N_BRIDGE__) return null;
                    var e = this,
                        n = this._vm;
                    return this.vm.$watch("locale", (function(r) {
                        n.$set(n, "locale", r), e.__VUE_I18N_BRIDGE__ && t && (t.locale.value = r), n.$forceUpdate()
                    }), {
                        immediate: !0
                    })
                }
                if (!this._sync || !this._root) return null;
                var r = this._vm;
                return this._root.$i18n.vm.$watch("locale", (function(t) {
                    r.$set(r, "locale", t), r.$forceUpdate()
                }), {
                    immediate: !0
                })
            }, $t.prototype.onComponentInstanceCreated = function(t) {
                this._componentInstanceCreatedListener && this._componentInstanceCreatedListener(t, this)
            }, Mt.vm.get = function() {
                return this._vm
            }, Mt.messages.get = function() {
                return m(this._getMessages())
            }, Mt.dateTimeFormats.get = function() {
                return m(this._getDateTimeFormats())
            }, Mt.numberFormats.get = function() {
                return m(this._getNumberFormats())
            }, Mt.availableLocales.get = function() {
                return Object.keys(this.messages).sort()
            }, Mt.locale.get = function() {
                return this._vm.locale
            }, Mt.locale.set = function(t) {
                this._vm.$set(this._vm, "locale", t)
            }, Mt.fallbackLocale.get = function() {
                return this._vm.fallbackLocale
            }, Mt.fallbackLocale.set = function(t) {
                this._localeChainCache = {}, this._vm.$set(this._vm, "fallbackLocale", t)
            }, Mt.formatFallbackMessages.get = function() {
                return this._formatFallbackMessages
            }, Mt.formatFallbackMessages.set = function(t) {
                this._formatFallbackMessages = t
            }, Mt.missing.get = function() {
                return this._missing
            }, Mt.missing.set = function(t) {
                this._missing = t
            }, Mt.formatter.get = function() {
                return this._formatter
            }, Mt.formatter.set = function(t) {
                this._formatter = t
            }, Mt.silentTranslationWarn.get = function() {
                return this._silentTranslationWarn
            }, Mt.silentTranslationWarn.set = function(t) {
                this._silentTranslationWarn = t
            }, Mt.silentFallbackWarn.get = function() {
                return this._silentFallbackWarn
            }, Mt.silentFallbackWarn.set = function(t) {
                this._silentFallbackWarn = t
            }, Mt.preserveDirectiveContent.get = function() {
                return this._preserveDirectiveContent
            }, Mt.preserveDirectiveContent.set = function(t) {
                this._preserveDirectiveContent = t
            }, Mt.warnHtmlInMessage.get = function() {
                return this._warnHtmlInMessage
            }, Mt.warnHtmlInMessage.set = function(t) {
                var e = this,
                    n = this._warnHtmlInMessage;
                if (this._warnHtmlInMessage = t, n !== t && ("warn" === t || "error" === t)) {
                    var r = this._getMessages();
                    Object.keys(r).forEach((function(t) {
                        e._checkLocaleMessage(t, e._warnHtmlInMessage, r[t])
                    }))
                }
            }, Mt.postTranslation.get = function() {
                return this._postTranslation
            }, Mt.postTranslation.set = function(t) {
                this._postTranslation = t
            }, Mt.sync.get = function() {
                return this._sync
            }, Mt.sync.set = function(t) {
                this._sync = t
            }, $t.prototype._getMessages = function() {
                return this._vm.messages
            }, $t.prototype._getDateTimeFormats = function() {
                return this._vm.dateTimeFormats
            }, $t.prototype._getNumberFormats = function() {
                return this._vm.numberFormats
            }, $t.prototype._warnDefault = function(t, e, n, r, a, i) {
                if (!f(n)) return n;
                if (this._missing) {
                    var o = this._missing.apply(null, [t, e, r, a]);
                    if (l(o)) return o
                } else 0;
                if (this._formatFallbackMessages) {
                    var s = _.apply(void 0, a);
                    return this._render(e, i, s.params, e)
                }
                return e
            }, $t.prototype._isFallbackRoot = function(t) {
                return (this._fallbackRootWithEmptyString ? !t : f(t)) && !f(this._root) && this._fallbackRoot
            }, $t.prototype._isSilentFallbackWarn = function(t) {
                return this._silentFallbackWarn instanceof RegExp ? this._silentFallbackWarn.test(t) : this._silentFallbackWarn
            }, $t.prototype._isSilentFallback = function(t, e) {
                return this._isSilentFallbackWarn(e) && (this._isFallbackRoot() || t !== this.fallbackLocale)
            }, $t.prototype._isSilentTranslationWarn = function(t) {
                return this._silentTranslationWarn instanceof RegExp ? this._silentTranslationWarn.test(t) : this._silentTranslationWarn
            }, $t.prototype._interpolate = function(t, e, n, r, a, o, s) {
                if (!e) return null;
                var c, u = this._path.getPathValue(e, n);
                if (i(u) || h(u)) return u;
                if (f(u)) {
                    if (!h(e)) return null;
                    if (c = e[n], !l(c) && !p(c)) return null
                } else {
                    if (!l(u) && !p(u)) return null;
                    c = u
                }
                return l(c) && (c.indexOf("@:") >= 0 || c.indexOf("@.") >= 0) && (c = this._link(t, e, c, r, "raw", o, s)), this._render(c, a, o, n)
            }, $t.prototype._link = function(t, e, n, r, a, o, s) {
                var l = n,
                    c = l.match(bt);
                for (var u in c)
                    if (c.hasOwnProperty(u)) {
                        var h = c[u],
                            f = h.match(yt),
                            p = f[0],
                            _ = f[1],
                            m = h.replace(p, "").replace(wt, "");
                        if (d(s, m)) return l;
                        s.push(m);
                        var g = this._interpolate(t, e, m, r, "raw" === a ? "string" : a, "raw" === a ? void 0 : o, s);
                        if (this._isFallbackRoot(g)) {
                            if (!this._root) throw Error("unexpected error");
                            var v = this._root.$i18n;
                            g = v._translate(v._getMessages(), v.locale, v.fallbackLocale, m, r, a, o)
                        }
                        g = this._warnDefault(t, m, g, r, i(o) ? o : [o], a), this._modifiers.hasOwnProperty(_) ? g = this._modifiers[_](g) : kt.hasOwnProperty(_) && (g = kt[_](g)), s.pop(), l = g ? l.replace(h, g) : l
                    }
                return l
            }, $t.prototype._createMessageContext = function(t, e, n, r) {
                var a = this,
                    s = i(t) ? t : [],
                    l = o(t) ? t : {},
                    c = function(t) {
                        return s[t]
                    },
                    u = function(t) {
                        return l[t]
                    },
                    h = this._getMessages(),
                    f = this.locale;
                return {
                    list: c,
                    named: u,
                    values: t,
                    formatter: e,
                    path: n,
                    messages: h,
                    locale: f,
                    linked: function(t) {
                        return a._interpolate(f, h[f] || {}, t, null, r, void 0, [t])
                    }
                }
            }, $t.prototype._render = function(t, e, n, r) {
                if (p(t)) return t(this._createMessageContext(n, this._formatter || Ft, r, e));
                var a = this._formatter.interpolate(t, n, r);
                return a || (a = Ft.interpolate(t, n, r)), "string" !== e || l(a) ? a : a.join("")
            }, $t.prototype._appendItemToChain = function(t, e, n) {
                var r = !1;
                return d(t, e) || (r = !0, e && (r = "!" !== e[e.length - 1], e = e.replace(/!/g, ""), t.push(e), n && n[e] && (r = n[e]))), r
            }, $t.prototype._appendLocaleToChain = function(t, e, n) {
                var r, a = e.split("-");
                do {
                    var i = a.join("-");
                    r = this._appendItemToChain(t, i, n), a.splice(-1, 1)
                } while (a.length && !0 === r);
                return r
            }, $t.prototype._appendBlockToChain = function(t, e, n) {
                for (var r = !0, a = 0; a < e.length && s(r); a++) {
                    var i = e[a];
                    l(i) && (r = this._appendLocaleToChain(t, i, n))
                }
                return r
            }, $t.prototype._getLocaleChain = function(t, e) {
                if ("" === t) return [];
                this._localeChainCache || (this._localeChainCache = {});
                var n = this._localeChainCache[t];
                if (!n) {
                    e || (e = this.fallbackLocale), n = [];
                    var r, a = [t];
                    while (i(a)) a = this._appendBlockToChain(n, a, e);
                    r = i(e) ? e : o(e) ? e["default"] ? e["default"] : null : e, a = l(r) ? [r] : r, a && this._appendBlockToChain(n, a, null), this._localeChainCache[t] = n
                }
                return n
            }, $t.prototype._translate = function(t, e, n, r, a, i, o) {
                for (var s, l = this._getLocaleChain(e, n), c = 0; c < l.length; c++) {
                    var u = l[c];
                    if (s = this._interpolate(u, t[u], r, a, i, o, [r]), !f(s)) return s
                }
                return null
            }, $t.prototype._t = function(t, e, n, r) {
                var a, i = [],
                    o = arguments.length - 4;
                while (o-- > 0) i[o] = arguments[o + 4];
                if (!t) return "";
                var s = _.apply(void 0, i);
                this._escapeParameterHtml && (s.params = $(s.params));
                var l = s.locale || e,
                    c = this._translate(n, l, this.fallbackLocale, t, r, "string", s.params);
                if (this._isFallbackRoot(c)) {
                    if (!this._root) throw Error("unexpected error");
                    return (a = this._root).$t.apply(a, [t].concat(i))
                }
                return c = this._warnDefault(l, t, c, r, i, "string"), this._postTranslation && null !== c && void 0 !== c && (c = this._postTranslation(c, t)), c
            }, $t.prototype.t = function(t) {
                var e, n = [],
                    r = arguments.length - 1;
                while (r-- > 0) n[r] = arguments[r + 1];
                return (e = this)._t.apply(e, [t, this.locale, this._getMessages(), null].concat(n))
            }, $t.prototype._i = function(t, e, n, r, a) {
                var i = this._translate(n, e, this.fallbackLocale, t, r, "raw", a);
                if (this._isFallbackRoot(i)) {
                    if (!this._root) throw Error("unexpected error");
                    return this._root.$i18n.i(t, e, a)
                }
                return this._warnDefault(e, t, i, r, [a], "raw")
            }, $t.prototype.i = function(t, e, n) {
                return t ? (l(e) || (e = this.locale), this._i(t, e, this._getMessages(), null, n)) : ""
            }, $t.prototype._tc = function(t, e, n, r, a) {
                var i, o = [],
                    s = arguments.length - 5;
                while (s-- > 0) o[s] = arguments[s + 5];
                if (!t) return "";
                void 0 === a && (a = 1);
                var l = {
                        count: a,
                        n: a
                    },
                    c = _.apply(void 0, o);
                return c.params = Object.assign(l, c.params), o = null === c.locale ? [c.params] : [c.locale, c.params], this.fetchChoice((i = this)._t.apply(i, [t, e, n, r].concat(o)), a)
            }, $t.prototype.fetchChoice = function(t, e) {
                if (!t || !l(t)) return null;
                var n = t.split("|");
                return e = this.getChoiceIndex(e, n.length), n[e] ? n[e].trim() : t
            }, $t.prototype.tc = function(t, e) {
                var n, r = [],
                    a = arguments.length - 2;
                while (a-- > 0) r[a] = arguments[a + 2];
                return (n = this)._tc.apply(n, [t, this.locale, this._getMessages(), null, e].concat(r))
            }, $t.prototype._te = function(t, e, n) {
                var r = [],
                    a = arguments.length - 3;
                while (a-- > 0) r[a] = arguments[a + 3];
                var i = _.apply(void 0, r).locale || e;
                return this._exist(n[i], t)
            }, $t.prototype.te = function(t, e) {
                return this._te(t, this.locale, this._getMessages(), e)
            }, $t.prototype.getLocaleMessage = function(t) {
                return m(this._vm.messages[t] || {})
            }, $t.prototype.setLocaleMessage = function(t, e) {
                "warn" !== this._warnHtmlInMessage && "error" !== this._warnHtmlInMessage || this._checkLocaleMessage(t, this._warnHtmlInMessage, e), this._vm.$set(this._vm.messages, t, e)
            }, $t.prototype.mergeLocaleMessage = function(t, e) {
                "warn" !== this._warnHtmlInMessage && "error" !== this._warnHtmlInMessage || this._checkLocaleMessage(t, this._warnHtmlInMessage, e), this._vm.$set(this._vm.messages, t, w("undefined" !== typeof this._vm.messages[t] && Object.keys(this._vm.messages[t]).length ? Object.assign({}, this._vm.messages[t]) : {}, e))
            }, $t.prototype.getDateTimeFormat = function(t) {
                return m(this._vm.dateTimeFormats[t] || {})
            }, $t.prototype.setDateTimeFormat = function(t, e) {
                this._vm.$set(this._vm.dateTimeFormats, t, e), this._clearDateTimeFormat(t, e)
            }, $t.prototype.mergeDateTimeFormat = function(t, e) {
                this._vm.$set(this._vm.dateTimeFormats, t, w(this._vm.dateTimeFormats[t] || {}, e)), this._clearDateTimeFormat(t, e)
            }, $t.prototype._clearDateTimeFormat = function(t, e) {
                for (var n in e) {
                    var r = t + "__" + n;
                    this._dateTimeFormatters.hasOwnProperty(r) && delete this._dateTimeFormatters[r]
                }
            }, $t.prototype._localizeDateTime = function(t, e, n, r, a) {
                for (var i = e, o = r[i], s = this._getLocaleChain(e, n), l = 0; l < s.length; l++) {
                    var c = s[l];
                    if (o = r[c], i = c, !f(o) && !f(o[a])) break
                }
                if (f(o) || f(o[a])) return null;
                var u = o[a],
                    h = i + "__" + a,
                    p = this._dateTimeFormatters[h];
                return p || (p = this._dateTimeFormatters[h] = new Intl.DateTimeFormat(i, u)), p.format(t)
            }, $t.prototype._d = function(t, e, n) {
                if (!n) return new Intl.DateTimeFormat(e).format(t);
                var r = this._localizeDateTime(t, e, this.fallbackLocale, this._getDateTimeFormats(), n);
                if (this._isFallbackRoot(r)) {
                    if (!this._root) throw Error("unexpected error");
                    return this._root.$i18n.d(t, n, e)
                }
                return r || ""
            }, $t.prototype.d = function(t) {
                var e = [],
                    n = arguments.length - 1;
                while (n-- > 0) e[n] = arguments[n + 1];
                var r = this.locale,
                    a = null;
                return 1 === e.length ? l(e[0]) ? a = e[0] : o(e[0]) && (e[0].locale && (r = e[0].locale), e[0].key && (a = e[0].key)) : 2 === e.length && (l(e[0]) && (a = e[0]), l(e[1]) && (r = e[1])), this._d(t, r, a)
            }, $t.prototype.getNumberFormat = function(t) {
                return m(this._vm.numberFormats[t] || {})
            }, $t.prototype.setNumberFormat = function(t, e) {
                this._vm.$set(this._vm.numberFormats, t, e), this._clearNumberFormat(t, e)
            }, $t.prototype.mergeNumberFormat = function(t, e) {
                this._vm.$set(this._vm.numberFormats, t, w(this._vm.numberFormats[t] || {}, e)), this._clearNumberFormat(t, e)
            }, $t.prototype._clearNumberFormat = function(t, e) {
                for (var n in e) {
                    var r = t + "__" + n;
                    this._numberFormatters.hasOwnProperty(r) && delete this._numberFormatters[r]
                }
            }, $t.prototype._getNumberFormatter = function(t, e, n, r, a, i) {
                for (var o = e, s = r[o], l = this._getLocaleChain(e, n), c = 0; c < l.length; c++) {
                    var u = l[c];
                    if (s = r[u], o = u, !f(s) && !f(s[a])) break
                }
                if (f(s) || f(s[a])) return null;
                var h, p = s[a];
                if (i) h = new Intl.NumberFormat(o, Object.assign({}, p, i));
                else {
                    var _ = o + "__" + a;
                    h = this._numberFormatters[_], h || (h = this._numberFormatters[_] = new Intl.NumberFormat(o, p))
                }
                return h
            }, $t.prototype._n = function(t, e, n, r) {
                if (!$t.availabilities.numberFormat) return "";
                if (!n) {
                    var a = r ? new Intl.NumberFormat(e, r) : new Intl.NumberFormat(e);
                    return a.format(t)
                }
                var i = this._getNumberFormatter(t, e, this.fallbackLocale, this._getNumberFormats(), n, r),
                    o = i && i.format(t);
                if (this._isFallbackRoot(o)) {
                    if (!this._root) throw Error("unexpected error");
                    return this._root.$i18n.n(t, Object.assign({}, {
                        key: n,
                        locale: e
                    }, r))
                }
                return o || ""
            }, $t.prototype.n = function(t) {
                var e = [],
                    r = arguments.length - 1;
                while (r-- > 0) e[r] = arguments[r + 1];
                var a = this.locale,
                    i = null,
                    s = null;
                return 1 === e.length ? l(e[0]) ? i = e[0] : o(e[0]) && (e[0].locale && (a = e[0].locale), e[0].key && (i = e[0].key), s = Object.keys(e[0]).reduce((function(t, r) {
                    var a;
                    return d(n, r) ? Object.assign({}, t, (a = {}, a[r] = e[0][r], a)) : t
                }), null)) : 2 === e.length && (l(e[0]) && (i = e[0]), l(e[1]) && (a = e[1])), this._n(t, a, i, s)
            }, $t.prototype._ntp = function(t, e, n, r) {
                if (!$t.availabilities.numberFormat) return [];
                if (!n) {
                    var a = r ? new Intl.NumberFormat(e, r) : new Intl.NumberFormat(e);
                    return a.formatToParts(t)
                }
                var i = this._getNumberFormatter(t, e, this.fallbackLocale, this._getNumberFormats(), n, r),
                    o = i && i.formatToParts(t);
                if (this._isFallbackRoot(o)) {
                    if (!this._root) throw Error("unexpected error");
                    return this._root.$i18n._ntp(t, e, n, r)
                }
                return o || []
            }, Object.defineProperties($t.prototype, Mt), Object.defineProperty($t, "availabilities", {
                get: function() {
                    if (!vt) {
                        var t = "undefined" !== typeof Intl;
                        vt = {
                            dateTimeFormat: t && "undefined" !== typeof Intl.DateTimeFormat,
                            numberFormat: t && "undefined" !== typeof Intl.NumberFormat
                        }
                    }
                    return vt
                }
            }), $t.install = U, $t.version = "8.27.2", e["Z"] = $t
        }
    }
]);