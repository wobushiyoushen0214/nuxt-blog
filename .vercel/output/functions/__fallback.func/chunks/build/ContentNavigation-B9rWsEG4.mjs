import { defineComponent, useSlots, h, toRefs, computed, useSSRContext } from 'vue';
import { K as hash } from '../nitro/nitro.mjs';
import { N, D, G, B, I, W, F, q } from './query-CP_2cPQU.mjs';
import { v } from './preview-BhsI3sP2.mjs';
import { y as bn, j as Bo } from './server.mjs';
import { y } from './nuxt-link-2_lwc315.mjs';
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
import 'perfect-debounce';
import 'node:zlib';
import 'node:stream';
import 'node:util';
import 'node:net';
import 'vue-router';

const g = defineComponent({ name: "ContentNavigation", props: { query: { type: Object, required: false, default: void 0 } }, async setup(e2) {
  const { query: o2 } = toRefs(e2), t2 = computed(() => {
    var _a;
    return "function" == typeof ((_a = o2.value) == null ? void 0 : _a.params) ? o2.value.params() : o2.value;
  });
  if (!t2.value && bn("dd-navigation").value) {
    const { navigation: e3 } = N();
    return { navigation: e3 };
  }
  const { data: s2 } = await D(`content-navigation-${hash(t2.value)}`, () => (async (e3) => {
    const { content: o3 } = Bo().public;
    "function" != typeof (e3 == null ? void 0 : e3.params) && (e3 = G(e3));
    const t3 = e3.params(), n2 = o3.experimental.stripQueryParameters ? B(`/navigation/${hash(t3)}.${o3.integrity}/${I(t3)}.json`) : B(`/navigation/${hash(t3)}.${o3.integrity}.json`);
    if (W(n2), F()) ;
    const i2 = await $fetch(n2, { method: "GET", responseType: "json", params: o3.experimental.stripQueryParameters ? void 0 : { _params: q(t3), previewToken: v().getPreviewToken() } });
    if ("string" == typeof i2 && i2.startsWith("<!DOCTYPE html>")) throw new Error("Not found");
    return i2;
  })(t2.value));
  return { navigation: s2 };
}, render(e2) {
  const n2 = useSlots(), { navigation: i2 } = e2, s2 = (e3) => h(y, { to: e3._path }, () => e3.title), r2 = (e3, o2) => h("ul", o2 ? { "data-level": o2 } : null, e3.map((e4) => e4.children ? h("li", null, [s2(e4), r2(e4.children, o2 + 1)]) : h("li", null, s2(e4))));
  return (n2 == null ? void 0 : n2.default) ? n2.default({ navigation: i2, ...this.$attrs }) : r2(i2, 0);
} }), f = g.setup;
g.setup = (e2, o2) => {
  const t2 = useSSRContext();
  return (t2.modules || (t2.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.2_better-sqlite3@11.10.0__ioredis@5.7.0_magicast@0.3.5_nuxt@3.19_tgmucp5mnjxr6stacpzu2ww3pi/node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue"), f ? f(e2, o2) : void 0;
};

export { g as default };
//# sourceMappingURL=ContentNavigation-B9rWsEG4.mjs.map
