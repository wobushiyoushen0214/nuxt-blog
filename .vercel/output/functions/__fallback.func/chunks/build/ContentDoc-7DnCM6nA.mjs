import { defineComponent, useSlots, h, unref, watch, useSSRContext } from 'vue';
import { H as withTrailingSlash, u as joinURL, a9 as withoutTrailingSlash, q as hasProtocol } from '../nitro/nitro.mjs';
import s from './ContentRenderer-DIi8jEVC.mjs';
import m from './ContentQuery-DCERA6_R.mjs';
import { j as Bo, e as Fo, u as pn } from './server.mjs';
import 'lru-cache';
import 'devalue';
import 'consola';
import 'unhead';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'detab';
import 'hast-util-to-string';
import 'github-slugger';
import 'unhead/server';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';
import 'node:url';
import 'ipx';
import './ContentRendererMarkdown-CTTcWJeL.mjs';
import './node-Co_CclnQ.mjs';
import './preview-BhsI3sP2.mjs';
import 'node:zlib';
import 'node:stream';
import 'node:util';
import 'node:net';
import 'vue-router';
import './query-CP_2cPQU.mjs';
import 'perfect-debounce';

const f = (o2, n2 = Fo()) => {
  const i2 = unref(o2), s2 = Bo();
  watch(() => unref(o2), (e2 = i2) => {
    var _a;
    if (!n2.path || !e2) return;
    const t2 = Object.assign({}, (e2 == null ? void 0 : e2.head) || {});
    t2.meta = [...t2.meta || []], t2.link = [...t2.link || []];
    const o3 = t2.title || (e2 == null ? void 0 : e2.title);
    o3 && (t2.title = o3, t2.meta.some((e3) => "og:title" === e3.property) || t2.meta.push({ property: "og:title", content: o3 }));
    const u2 = s2.public.content.host;
    if (u2) {
      const e3 = joinURL(u2 != null ? u2 : "/", s2.app.baseURL, n2.fullPath), o4 = s2.public.content.trailingSlash ? withTrailingSlash(e3) : withoutTrailingSlash(e3);
      t2.meta.some((e4) => "og:url" === e4.property) || t2.meta.push({ property: "og:url", content: o4 }), t2.link.some((e4) => "canonical" === e4.rel) || t2.link.push({ rel: "canonical", href: o4 });
    }
    const l2 = (t2 == null ? void 0 : t2.description) || (e2 == null ? void 0 : e2.description);
    l2 && 0 === t2.meta.filter((e3) => "description" === e3.name).length && t2.meta.push({ name: "description", content: l2 }), l2 && !t2.meta.some((e3) => "og:description" === e3.property) && t2.meta.push({ property: "og:description", content: l2 });
    const a2 = (t2 == null ? void 0 : t2.image) || (e2 == null ? void 0 : e2.image);
    if (a2 && 0 === t2.meta.filter((e3) => "og:image" === e3.property).length && ("string" == typeof a2 && t2.meta.push({ property: "og:image", content: u2 && !hasProtocol(a2) ? new URL(joinURL(s2.app.baseURL, a2), u2).href : a2 }), "object" == typeof a2)) {
      const e3 = ["src", "secure_url", "type", "width", "height", "alt"];
      for (const o4 of e3) if ("src" === o4 && a2.src) {
        const e4 = hasProtocol(a2.src), o5 = e4 ? a2.src : joinURL(s2.app.baseURL, (_a = a2.src) != null ? _a : "/");
        t2.meta.push({ property: "og:image", content: u2 && !e4 ? new URL(o5, u2).href : o5 });
      } else a2[o4] && t2.meta.push({ property: `og:image:${o4}`, content: a2[o4] });
    }
    pn(t2);
  }, { immediate: true });
}, g = defineComponent({ name: "ContentDoc", props: { tag: { type: String, required: false, default: "div" }, excerpt: { type: Boolean, default: false }, path: { type: String, required: false, default: void 0 }, query: { type: Object, required: false, default: void 0 }, head: { type: Boolean, required: false, default: void 0 } }, render(e2) {
  const { contentHead: t2 } = Bo().public.content, o2 = useSlots(), { tag: s2, excerpt: r2, path: d2, query: m2, head: h2 } = e2, g2 = void 0 === h2 ? t2 : h2, x2 = { ...m2 || {}, path: d2 || (m2 == null ? void 0 : m2.path) || withTrailingSlash(Fo().path), find: "one" };
  return h(m, x2, { default: (o2 == null ? void 0 : o2.default) ? ({ data: e3, refresh: t3, isPartial: n2 }) => {
    var _a;
    return g2 && f(e3), (_a = o2.default) == null ? void 0 : _a.call(o2, { doc: e3, refresh: t3, isPartial: n2, excerpt: r2, ...this.$attrs });
  } : ({ data: e3 }) => (g2 && f(e3), h(s, { value: e3, excerpt: r2, tag: s2, ...this.$attrs }, { empty: (t3) => (o2 == null ? void 0 : o2.empty) ? o2.empty(t3) : ((e4, t4) => h("pre", null, JSON.stringify({ message: "You should use slots with <ContentDoc>", slot: e4, data: t4 }, null, 2)))("default", e3) })), empty: (e3) => {
    var _a;
    return ((_a = o2 == null ? void 0 : o2.empty) == null ? void 0 : _a.call(o2, e3)) || h("p", null, "Document is empty, overwrite this content with #empty slot in <ContentDoc>.");
  }, "not-found": (e3) => {
    var _a;
    return ((_a = o2 == null ? void 0 : o2["not-found"]) == null ? void 0 : _a.call(o2, e3)) || h("p", null, "Document not found, overwrite this content with #not-found slot in <ContentDoc>.");
  } });
} }), x = g.setup;
g.setup = (e2, t2) => {
  const o2 = useSSRContext();
  return (o2.modules || (o2.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.2_better-sqlite3@11.10.0__ioredis@5.7.0_magicast@0.3.5_nuxt@3.19_tgmucp5mnjxr6stacpzu2ww3pi/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue"), x ? x(e2, t2) : void 0;
};

export { g as default };
//# sourceMappingURL=ContentDoc-7DnCM6nA.mjs.map
