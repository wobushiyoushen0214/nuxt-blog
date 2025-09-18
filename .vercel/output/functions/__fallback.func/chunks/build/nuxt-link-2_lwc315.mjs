import { defineComponent, shallowRef, h, resolveComponent, computed } from 'vue';
import { ah as parseQuery, q as hasProtocol, u as joinURL, H as withTrailingSlash, a9 as withoutTrailingSlash } from '../nitro/nitro.mjs';
import { t as zo, g as qo, j as Bo, v as Uo, k as No, w as sn, x as To } from './server.mjs';

function m(o2) {
  const s2 = o2.componentName || "NuxtLink";
  function g2(e2) {
    return !sn && "string" == typeof e2 && e2.startsWith("#");
  }
  function m2(e2) {
    var _a, _b, _c;
    const t2 = zo(), r2 = Bo(), l2 = computed(() => !!e2.target && "_self" !== e2.target), s3 = computed(() => {
      const t3 = e2.to || e2.href || "";
      return "string" == typeof t3 && hasProtocol(t3, { acceptRelative: true });
    }), c2 = resolveComponent("RouterLink"), h2 = c2 && "string" != typeof c2 ? c2.useLink : void 0, m3 = computed(() => {
      if (e2.external) return true;
      const t3 = e2.to || e2.href || "";
      return "object" != typeof t3 && ("" === t3 || s3.value);
    }), y2 = computed(() => {
      const r3 = e2.to || e2.href || "";
      return m3.value ? r3 : (function(e3, t3, r4) {
        const a2 = r4 != null ? r4 : o2.trailingSlash;
        if (!e3 || "append" !== a2 && "remove" !== a2) return e3;
        if ("string" == typeof e3) return x(e3, a2);
        const u2 = "path" in e3 && void 0 !== e3.path ? e3.path : t3(e3).path;
        return { ...e3, name: void 0, path: x(u2, a2) };
      })(r3, t2.resolve, e2.trailingSlash);
    }), q = m3.value ? void 0 : h2 == null ? void 0 : h2({ ...e2, to: y2 }), S = computed(() => {
      var _a2, _b2, _c2;
      const a2 = (_a2 = e2.trailingSlash) != null ? _a2 : o2.trailingSlash;
      if (!y2.value || s3.value || g2(y2.value)) return y2.value;
      if (m3.value) {
        const e3 = "object" == typeof y2.value && "path" in y2.value ? Uo(y2.value) : y2.value;
        return x("object" == typeof e3 ? t2.resolve(e3).href : e3, a2);
      }
      return "object" == typeof y2.value ? (_c2 = (_b2 = t2.resolve(y2.value)) == null ? void 0 : _b2.href) != null ? _c2 : null : x(joinURL(r2.app.baseURL, y2.value), a2);
    });
    return { to: y2, hasTarget: l2, isAbsoluteUrl: s3, isExternal: m3, href: S, isActive: (_a = q == null ? void 0 : q.isActive) != null ? _a : computed(() => y2.value === t2.currentRoute.value.path), isExactActive: (_b = q == null ? void 0 : q.isExactActive) != null ? _b : computed(() => y2.value === t2.currentRoute.value.path), route: (_c = q == null ? void 0 : q.route) != null ? _c : computed(() => t2.resolve(y2.value)), async navigate(t3) {
      await No(S.value, { replace: e2.replace, external: m3.value || l2.value });
    } };
  }
  return defineComponent({ name: s2, props: { to: { type: [String, Object], default: void 0, required: false }, href: { type: [String, Object], default: void 0, required: false }, target: { type: String, default: void 0, required: false }, rel: { type: String, default: void 0, required: false }, noRel: { type: Boolean, default: void 0, required: false }, prefetch: { type: Boolean, default: void 0, required: false }, prefetchOn: { type: [String, Object], default: void 0, required: false }, noPrefetch: { type: Boolean, default: void 0, required: false }, activeClass: { type: String, default: void 0, required: false }, exactActiveClass: { type: String, default: void 0, required: false }, prefetchedClass: { type: String, default: void 0, required: false }, replace: { type: Boolean, default: void 0, required: false }, ariaCurrentValue: { type: String, default: void 0, required: false }, external: { type: Boolean, default: void 0, required: false }, custom: { type: Boolean, default: void 0, required: false }, trailingSlash: { type: String, default: void 0, required: false } }, useLink: m2, setup(e2, { slots: u2 }) {
    const i2 = zo(), { to: n2, href: s3, navigate: d2, isExternal: f2, hasTarget: p2, isAbsoluteUrl: h2 } = m2(e2);
    shallowRef(false);
    async function y2(e3 = qo()) {
    }
    return () => {
      var _a;
      if (!f2.value && !p2.value && !g2(n2.value)) {
        const t3 = { ref: void 0, to: n2.value, activeClass: e2.activeClass || o2.activeClass, exactActiveClass: e2.exactActiveClass || o2.exactActiveClass, replace: e2.replace, ariaCurrentValue: e2.ariaCurrentValue, custom: e2.custom };
        return e2.custom || (t3.rel = e2.rel || void 0), h(resolveComponent("RouterLink"), t3, u2.default);
      }
      const t2 = e2.target || null, v2 = ((...e3) => e3.find((e4) => void 0 !== e4))(e2.noRel ? "" : e2.rel, o2.externalRelAttribute, h2.value || p2.value ? "noopener noreferrer" : "") || null;
      return e2.custom ? u2.default ? u2.default({ href: s3.value, navigate: d2, prefetch: y2, get route() {
        if (!s3.value) return;
        const e3 = new URL(s3.value, "http://localhost");
        return { path: e3.pathname, fullPath: e3.pathname, get query() {
          return parseQuery(e3.search);
        }, hash: e3.hash, params: {}, name: void 0, matched: [], redirectedFrom: void 0, meta: {}, href: s3.value };
      }, rel: v2, target: t2, isExternal: f2.value || p2.value, isActive: false, isExactActive: false }) : null : h("a", { ref: void 0, href: s3.value || null, rel: v2, target: t2, onClick: (t3) => {
        if (!f2.value && !p2.value) return t3.preventDefault(), e2.replace ? i2.replace(s3.value) : i2.push(s3.value);
      } }, (_a = u2.default) == null ? void 0 : _a.call(u2));
    };
  } });
}
const y = m(To);
function x(e2, t2) {
  const r2 = "append" === t2 ? withTrailingSlash : withoutTrailingSlash;
  return hasProtocol(e2) && !e2.startsWith("http") ? e2 : r2(e2, true);
}

export { y };
//# sourceMappingURL=nuxt-link-2_lwc315.mjs.map
