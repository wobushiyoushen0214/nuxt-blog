import { computed, toValue, ref, shallowRef, toRef, nextTick, unref, getCurrentInstance, onServerPrefetch } from 'vue';
import { debounce } from 'perfect-debounce';
import { g as qo, A as Co, c as Go, j as Bo, r as yn } from './server.mjs';
import { a2 as withBase, a8 as withLeadingSlash, u as joinURL, a9 as withoutTrailingSlash, K as hash } from '../nitro/nitro.mjs';
import { v } from './preview-BhsI3sP2.mjs';

function D(...f2) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const h2 = "string" == typeof f2[f2.length - 1] ? f2.pop() : void 0;
  (function(e2, a2) {
    if ("string" == typeof e2) return false;
    if ("object" == typeof e2 && null !== e2) return false;
    if ("function" == typeof e2 && "function" == typeof a2) return false;
    return true;
  })(f2[0], f2[1]) && f2.unshift(h2);
  let [y2, m2, _2 = {}] = f2;
  const g2 = computed(() => toValue(y2));
  if ("string" != typeof g2.value) throw new TypeError("[nuxt] [useAsyncData] key must be a string.");
  if ("function" != typeof m2) throw new TypeError("[nuxt] [useAsyncData] handler must be a function.");
  const v2 = qo();
  (_a = _2.server) != null ? _a : _2.server = true, (_b = _2.default) != null ? _b : _2.default = b, (_c = _2.getCachedData) != null ? _c : _2.getCachedData = j, (_d = _2.lazy) != null ? _d : _2.lazy = false, (_e = _2.immediate) != null ? _e : _2.immediate = true, (_f = _2.deep) != null ? _f : _2.deep = Co.deep, (_g = _2.dedupe) != null ? _g : _2.dedupe = "cancel", _2._functionName, v2._asyncData[g2.value];
  const w2 = { cause: "initial", dedupe: _2.dedupe };
  ((_h = v2._asyncData[g2.value]) == null ? void 0 : _h._init) || (w2.cachedData = _2.getCachedData(g2.value, v2, { cause: "initial" }), v2._asyncData[g2.value] = (function(e2, a2, t2, r2, l2) {
    var _a2, _b2;
    (_b2 = (_a2 = e2.payload._errors)[a2]) != null ? _b2 : _a2[a2] = Co.errorValue;
    const f3 = r2.getCachedData !== j, h3 = t2, y3 = r2.deep ? ref : shallowRef, m3 = null != l2, _3 = e2.hook("app:data:refresh", async (e3) => {
      e3 && !e3.includes(a2) || await g3.execute({ cause: "refresh:hook" });
    }), g3 = { data: y3(m3 ? l2 : r2.default()), pending: shallowRef(!m3), error: toRef(e2.payload._errors, a2), status: shallowRef("idle"), execute: (...t3) => {
      var _a3, _b3;
      const [n2, s2] = t3, o2 = n2 && void 0 === s2 && "object" == typeof n2 ? n2 : {};
      if (e2._asyncDataPromises[a2]) {
        if ("defer" === (i2 = (_a3 = o2.dedupe) != null ? _a3 : r2.dedupe) || false === i2) return e2._asyncDataPromises[a2];
        e2._asyncDataPromises[a2].cancelled = true;
      }
      var i2;
      if ("initial" === o2.cause || e2.isHydrating) {
        const t4 = "cachedData" in o2 ? o2.cachedData : r2.getCachedData(a2, e2, { cause: (_b3 = o2.cause) != null ? _b3 : "refresh:manual" });
        if (null != t4) return e2.payload.data[a2] = g3.data.value = t4, g3.error.value = Co.errorValue, g3.status.value = "success", Promise.resolve(t4);
      }
      g3.pending.value = true, g3.status.value = "pending";
      const c2 = new Promise((a3, t4) => {
        try {
          a3(h3(e2));
        } catch (r3) {
          t4(r3);
        }
      }).then(async (t4) => {
        if (c2.cancelled) return e2._asyncDataPromises[a2];
        let n3 = t4;
        r2.transform && (n3 = await r2.transform(t4)), r2.pick && (n3 = (function(e3, a3) {
          const t5 = {};
          for (const r3 of a3) t5[r3] = e3[r3];
          return t5;
        })(n3, r2.pick)), e2.payload.data[a2] = n3, g3.data.value = n3, g3.error.value = Co.errorValue, g3.status.value = "success";
      }).catch((t4) => {
        if (c2.cancelled) return e2._asyncDataPromises[a2];
        g3.error.value = Go(t4), g3.data.value = unref(r2.default()), g3.status.value = "error";
      }).finally(() => {
        c2.cancelled || (g3.pending.value = false, delete e2._asyncDataPromises[a2]);
      });
      return e2._asyncDataPromises[a2] = c2, e2._asyncDataPromises[a2];
    }, _execute: debounce((...e3) => g3.execute(...e3), 0, { leading: true }), _default: r2.default, _deps: 0, _init: true, _hash: void 0, _off: () => {
      var _a3;
      _3(), ((_a3 = e2._asyncData[a2]) == null ? void 0 : _a3._init) && (e2._asyncData[a2]._init = false), f3 || nextTick(() => {
        var _a4;
        ((_a4 = e2._asyncData[a2]) == null ? void 0 : _a4._init) || (P(e2, a2), g3.execute = () => Promise.resolve(), g3.data.value = Co.value);
      });
    } };
    return g3;
  })(v2, g2.value, m2, _2, w2.cachedData));
  v2._asyncData[g2.value]._deps++;
  if (false !== _2.server && v2.payload.serverRendered && _2.immediate) {
    const e2 = v2._asyncData[g2.value].execute(w2);
    getCurrentInstance() ? onServerPrefetch(() => e2) : v2.hook("app:created", async () => {
      await e2;
    });
  }
  const D2 = { data: x(() => {
    var _a2;
    return (_a2 = v2._asyncData[g2.value]) == null ? void 0 : _a2.data;
  }), pending: x(() => {
    var _a2;
    return (_a2 = v2._asyncData[g2.value]) == null ? void 0 : _a2.pending;
  }), status: x(() => {
    var _a2;
    return (_a2 = v2._asyncData[g2.value]) == null ? void 0 : _a2.status;
  }), error: x(() => {
    var _a2;
    return (_a2 = v2._asyncData[g2.value]) == null ? void 0 : _a2.error;
  }), refresh: (...e2) => v2._asyncData[g2.value].execute(...e2), execute: (...e2) => v2._asyncData[g2.value].execute(...e2), clear: () => P(v2, g2.value) }, C2 = Promise.resolve(v2._asyncDataPromises[g2.value]).then(() => D2);
  return Object.assign(C2, D2), C2;
}
function x(a2) {
  return computed({ get: () => {
    var _a;
    return (_a = a2()) == null ? void 0 : _a.value;
  }, set(e2) {
    const t2 = a2();
    t2 && (t2.value = e2);
  } });
}
function P(e2, a2) {
  a2 in e2.payload.data && (e2.payload.data[a2] = void 0), a2 in e2.payload._errors && (e2.payload._errors[a2] = Co.errorValue), e2._asyncData[a2] && (e2._asyncData[a2].data.value = void 0, e2._asyncData[a2].error.value = Co.errorValue, e2._asyncData[a2].pending.value = false, e2._asyncData[a2].status.value = "idle"), a2 in e2._asyncDataPromises && (e2._asyncDataPromises[a2] && (e2._asyncDataPromises[a2].cancelled = true), e2._asyncDataPromises[a2] = void 0);
}
const b = () => Co.value, j = (e2, a2, t2) => a2.isHydrating ? a2.payload.data[e2] : "refresh:manual" !== t2.cause && "refresh:hook" !== t2.cause ? a2.static.data[e2] : void 0, R = (e2) => Array.isArray(e2) ? e2 : [void 0, null].includes(e2) ? [] : [e2], U = ["sort", "where", "only", "without"];
function V(e2, a2 = {}) {
  const t2 = {};
  for (const o2 of Object.keys(a2.initialParams || {})) t2[o2] = U.includes(o2) ? R(a2.initialParams[o2]) : a2.initialParams[o2];
  const r2 = (e3, a3 = (e4) => e4) => (...r3) => (t2[e3] = a3(...r3), s2), n2 = (e3) => {
    var _a;
    return a2.legacy ? (e3 == null ? void 0 : e3.surround) ? e3.surround : e3 ? ((e3 == null ? void 0 : e3.dirConfig) && (e3.result = { _path: (_a = e3.dirConfig) == null ? void 0 : _a._path, ...e3.result, _dir: e3.dirConfig }), (e3 == null ? void 0 : e3._path) || Array.isArray(e3) || !Object.prototype.hasOwnProperty.call(e3, "result") ? e3 : e3 == null ? void 0 : e3.result) : e3 : e3;
  }, s2 = { params: () => ({ ...t2, ...t2.where ? { where: [...R(t2.where)] } : {}, ...t2.sort ? { sort: [...R(t2.sort)] } : {} }), only: r2("only", R), without: r2("without", R), where: r2("where", (e3) => [...R(t2.where), ...R(e3)]), sort: r2("sort", (e3) => [...R(t2.sort), ...R(e3)]), limit: r2("limit", (e3) => parseInt(String(e3), 10)), skip: r2("skip", (e3) => parseInt(String(e3), 10)), find: () => e2(s2).then(n2), findOne: () => e2(r2("first")(true)).then(n2), count: () => e2(r2("count")(true)).then(n2), locale: (e3) => s2.where({ _locale: e3 }), withSurround: r2("surround", (e3, a3) => ({ query: e3, ...a3 })), withDirConfig: () => r2("dirConfig")(true) };
  return a2.legacy ? (s2.findSurround = (e3, a3) => s2.withSurround(e3, a3).find().then(n2), s2) : s2;
}
function q(e2) {
  return JSON.stringify(e2, H);
}
function H(e2, a2) {
  return a2 instanceof RegExp ? `--REGEX ${a2.toString()}` : a2;
}
const I = (e2) => {
  let a2 = q(e2);
  a2 = "undefined" != typeof Buffer ? Buffer.from(a2).toString("base64") : btoa(a2), a2 = a2.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
  return (a2.match(/.{1,100}/g) || []).join("/");
}, B = (e2) => withBase(e2, Bo().public.content.api.baseURL), N = () => {
  throw new Error("useContent is only accessible when you are using `documentDriven` mode.");
}, W = (e2) => {
  const a2 = yn();
  a2 && a2.node.res.setHeader("x-nitro-prerender", [a2.node.res.getHeader("x-nitro-prerender"), e2].filter(Boolean).join(","));
}, F = () => {
  const { experimental: e2 } = Bo().public.content;
  return false;
};
function G(e2, ...a2) {
  const { content: t2 } = Bo().public, r2 = V(async (e3) => {
    const { content: a3 } = Bo().public, t3 = e3.params(), r3 = a3.experimental.stripQueryParameters ? B(`/query/${hash(t3)}.${a3.integrity}/${I(t3)}.json`) : B(`/query/${hash(t3)}.${a3.integrity}.json`);
    if (W(r3), F()) ;
    const n3 = await $fetch(r3, { method: "GET", responseType: "json", params: a3.experimental.stripQueryParameters ? void 0 : { _params: q(t3), previewToken: v().getPreviewToken() } });
    if ("string" == typeof n3 && n3.startsWith("<!DOCTYPE html>")) throw new Error("Not found");
    return n3;
  }, { initialParams: "string" != typeof e2 ? e2 : {}, legacy: true });
  let n2;
  "string" == typeof e2 && (n2 = withLeadingSlash(joinURL(e2, ...a2)));
  const s2 = r2.params;
  return r2.params = () => {
    var _a, _b, _c;
    const e3 = s2();
    if (n2 && (e3.where = e3.where || [], e3.first && 0 === (e3.where || []).length ? e3.where.push({ _path: withoutTrailingSlash(n2) }) : e3.where.push({ _path: new RegExp(`^${n2.replace(/[-[\]{}()*+.,^$\s/]/g, "\\$&")}`) })), ((_a = e3.sort) == null ? void 0 : _a.length) || (e3.sort = [{ _stem: 1, $numeric: true }]), t2.locales.length) {
      const a3 = (_c = (_b = e3.where) == null ? void 0 : _b.find((e4) => e4._locale)) == null ? void 0 : _c._locale;
      a3 || (e3.where = e3.where || [], e3.where.push({ _locale: t2.defaultLocale }));
    }
    return e3;
  }, r2;
}

export { B, D, F, G, I, N, W, q };
//# sourceMappingURL=query-CP_2cPQU.mjs.map
