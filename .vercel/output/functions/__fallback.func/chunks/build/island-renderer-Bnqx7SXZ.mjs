import { defineComponent, defineAsyncComponent, createVNode, onErrorCaptured } from 'vue';
import { i as fn, c as Go } from './server.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import '../nitro/nitro.mjs';
import 'lru-cache';
import 'devalue';
import 'consola';
import 'unhead';
import 'node:events';
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
import 'ipx';
import 'vue-router';

const i = { About: defineAsyncComponent(() => import('./About-Dwe5uOR5.mjs').then((e2) => e2.default || e2)), Test: defineAsyncComponent(() => import('./Test-B5W8rhUj.mjs').then((e2) => e2.default || e2)), BrandedLogo: defineAsyncComponent(() => import('./BrandedLogo-C9SVd7XC.mjs').then((e2) => e2.default || e2)), Frame: defineAsyncComponent(() => import('./Frame-Dn_44S1C.mjs').then((e2) => e2.default || e2)), Nuxt: defineAsyncComponent(() => import('./Nuxt-DpcS83Af.mjs').then((e2) => e2.default || e2)), NuxtSeo: defineAsyncComponent(() => import('./NuxtSeo-z-sLbqJp.mjs').then((e2) => e2.default || e2)), Pergel: defineAsyncComponent(() => import('./Pergel-lrsU_yW3.mjs').then((e2) => e2.default || e2)), SimpleBlog: defineAsyncComponent(() => import('./SimpleBlog-BgI63gx7.mjs').then((e2) => e2.default || e2)), UnJs: defineAsyncComponent(() => import('./UnJs-v5yof2eq.mjs').then((e2) => e2.default || e2)), Wave: defineAsyncComponent(() => import('./Wave-B_dTmdgO.mjs').then((e2) => e2.default || e2)), WithEmoji: defineAsyncComponent(() => import('./WithEmoji-CJMAzcxF.mjs').then((e2) => e2.default || e2)) }, r = defineComponent({ name: "IslandRenderer", props: { context: { type: Object, required: true } }, setup(e2) {
  fn().entries.clear();
  const o2 = i[e2.context.name];
  if (!o2) throw Go({ statusCode: 404, statusMessage: `Island component not found: ${e2.context.name}` });
  return onErrorCaptured((e3) => {
  }), () => createVNode(o2 || "span", { ...e2.context.props, "data-island-uid": "" });
} });

export { r as default };
//# sourceMappingURL=island-renderer-Bnqx7SXZ.mjs.map
