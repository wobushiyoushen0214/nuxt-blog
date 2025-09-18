import { defineComponent, useSlots, h, watch, useSSRContext } from 'vue';
import gn from './ContentRendererMarkdown-CTTcWJeL.mjs';
import '../nitro/nitro.mjs';
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
import './node-Co_CclnQ.mjs';
import './preview-BhsI3sP2.mjs';
import './server.mjs';
import 'node:zlib';
import 'node:stream';
import 'node:util';
import 'node:net';
import 'vue-router';

const s = defineComponent({ name: "ContentRenderer", props: { value: { type: Object, required: false, default: () => ({}) }, excerpt: { type: Boolean, default: false }, tag: { type: String, default: "div" } }, setup(e2) {
  watch(() => e2.excerpt, (o2) => {
    o2 && e2.value;
  }, { immediate: true });
}, render(e2) {
  var _a, _b;
  const n2 = useSlots(), { value: d2, excerpt: s2, tag: r2 } = e2, p = s2 ? d2 == null ? void 0 : d2.excerpt : d2 == null ? void 0 : d2.body;
  return !((_a = p == null ? void 0 : p.children) == null ? void 0 : _a.length) && (n2 == null ? void 0 : n2.empty) ? n2.empty({ value: d2, excerpt: s2, tag: r2, ...this.$attrs }) : (n2 == null ? void 0 : n2.default) ? n2.default({ value: d2, excerpt: s2, tag: r2, ...this.$attrs }) : "root" === (p == null ? void 0 : p.type) && ((_b = p == null ? void 0 : p.children) == null ? void 0 : _b.length) ? h(gn, { value: d2, excerpt: s2, tag: r2, ...this.$attrs }) : h("pre", null, JSON.stringify({ message: "You should use slots with <ContentRenderer>", value: d2, excerpt: s2, tag: r2 }, null, 2));
} }), r = s.setup;
s.setup = (e2, o2) => {
  const t2 = useSSRContext();
  return (t2.modules || (t2.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.2_better-sqlite3@11.10.0__ioredis@5.7.0_magicast@0.3.5_nuxt@3.19_tgmucp5mnjxr6stacpzu2ww3pi/node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue"), r ? r(e2, o2) : void 0;
};

export { s as default };
//# sourceMappingURL=ContentRenderer-DIi8jEVC.mjs.map
