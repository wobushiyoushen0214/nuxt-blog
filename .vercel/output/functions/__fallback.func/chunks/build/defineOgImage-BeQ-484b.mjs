import { a5 as toRouteMatcher, a6 as createRouter, a9 as withoutTrailingSlash, T as defu, a7 as withoutBase } from '../nitro/nitro.mjs';
import { g as qo, e as Fo, j as Bo, m as Qn, o as Yn, s as Un, p as Vn, q as Hn } from './server.mjs';

function x(x2 = {}) {
  var _a, _b, _c;
  const g = qo(), j = g.ssrContext._ogImageInstances || [], _ = Fo(), h = _.path || "/", b = (function() {
    const { nitro: o2, app: m2 } = Bo(), d2 = toRouteMatcher(createRouter({ routes: Object.fromEntries(Object.entries((o2 == null ? void 0 : o2.routeRules) || {}).map(([e2, o3]) => [withoutTrailingSlash(e2), o3])) }));
    return (o3) => defu({}, ...d2.matchAll(withoutBase(withoutTrailingSlash((function(e2) {
      return e2.split("?")[0];
    })(o3)), m2.baseURL)).reverse());
  })()(h).ogImage;
  if (!x2 || false === ((_c = (_b = (_a = g.ssrContext) == null ? void 0 : _a.event.context._nitro) == null ? void 0 : _b.routeRules) == null ? void 0 : _c.ogImage) || void 0 !== b && false === b) return j.forEach((e2) => {
    e2.dispose();
  }), void (g.ssrContext._ogImageInstances = void 0);
  const { defaults: v } = Qn(), I = Yn(defu({ ...x2 }, { component: v.component }));
  _.query && (I._query = _.query);
  const C = Yn(defu(Un(x2), Un(b), v));
  if (C.url) Vn(null, I, C, g.ssrContext);
  else {
    const e2 = Hn(h, C);
    Vn(e2, I, C, g.ssrContext);
  }
}

export { x };
//# sourceMappingURL=defineOgImage-BeQ-484b.mjs.map
