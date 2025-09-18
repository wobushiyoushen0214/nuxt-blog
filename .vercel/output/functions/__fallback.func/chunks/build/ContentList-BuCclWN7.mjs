import { defineComponent, useSlots, h, useSSRContext } from 'vue';
import m from './ContentQuery-DCERA6_R.mjs';
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
import './query-CP_2cPQU.mjs';
import 'perfect-debounce';
import './server.mjs';
import 'node:zlib';
import 'node:stream';
import 'node:util';
import 'node:net';
import 'vue-router';
import './preview-BhsI3sP2.mjs';

const n = (e2, o2) => h("pre", null, JSON.stringify({ message: "You should use slots with <ContentList>", slot: e2, data: o2 }, null, 2)), i = defineComponent({ name: "ContentList", props: { path: { type: String, required: false, default: void 0 }, query: { type: Object, required: false, default: void 0 } }, render(e2) {
  const d2 = useSlots(), { path: i2, query: r2 } = e2, m$1 = { ...r2 || {}, path: i2 || (r2 == null ? void 0 : r2.path) || "/" };
  return h(m, m$1, { default: (d2 == null ? void 0 : d2.default) ? ({ data: e3, refresh: o2, isPartial: t2 }) => d2.default({ list: e3, refresh: o2, isPartial: t2, ...this.$attrs }) : (e3) => n("default", e3.data), empty: (e3) => (d2 == null ? void 0 : d2.empty) ? d2.empty(e3) : n("default", e3 == null ? void 0 : e3.data), "not-found": (e3) => {
    var _a;
    return (d2 == null ? void 0 : d2["not-found"]) ? (_a = d2 == null ? void 0 : d2["not-found"]) == null ? void 0 : _a.call(d2, e3) : n("not-found", e3 == null ? void 0 : e3.data);
  } });
} }), r = i.setup;
i.setup = (e2, o2) => {
  const t2 = useSSRContext();
  return (t2.modules || (t2.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.2_better-sqlite3@11.10.0__ioredis@5.7.0_magicast@0.3.5_nuxt@3.19_tgmucp5mnjxr6stacpzu2ww3pi/node_modules/@nuxt/content/dist/runtime/components/ContentList.vue"), r ? r(e2, o2) : void 0;
};

export { i as default };
//# sourceMappingURL=ContentList-BuCclWN7.mjs.map
