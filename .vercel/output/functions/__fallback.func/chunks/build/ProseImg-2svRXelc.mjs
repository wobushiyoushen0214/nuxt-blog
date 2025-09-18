import { defineComponent, computed, createVNode, resolveDynamicComponent, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderVNode } from 'vue/server-renderer';
import { a8 as withLeadingSlash, H as withTrailingSlash, u as joinURL } from '../nitro/nitro.mjs';
import { I } from './NuxtImg-BwE8PT3p.mjs';
import { j as Bo } from './server.mjs';
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
import 'node:url';
import 'ipx';
import 'node:zlib';
import 'node:stream';
import 'node:util';
import 'node:net';
import 'vue-router';

const h = defineComponent({ __name: "ProseImg", __ssrInlineRender: true, props: { src: { type: String, default: "" }, alt: { type: String, default: "" }, width: { type: [String, Number], default: void 0 }, height: { type: [String, Number], default: void 0 } }, setup(e2) {
  const r2 = e2, h2 = computed(() => {
    var _a;
    if (((_a = r2.src) == null ? void 0 : _a.startsWith("/")) && !r2.src.startsWith("//")) {
      const e3 = withLeadingSlash(withTrailingSlash(Bo().app.baseURL));
      if ("/" !== e3 && !r2.src.startsWith(e3)) return joinURL(e3, r2.src);
    }
    return r2.src;
  });
  return (e3, o2, m2, p2) => {
    ssrRenderVNode(o2, createVNode(resolveDynamicComponent(unref(I)), mergeProps({ src: unref(h2), alt: r2.alt, width: r2.width, height: r2.height }, p2), null), m2);
  };
} }), _ = h.setup;
h.setup = (e2, o2) => {
  const t2 = useSSRContext();
  return (t2.modules || (t2.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseImg.vue"), _ ? _(e2, o2) : void 0;
};

export { h as default };
//# sourceMappingURL=ProseImg-2svRXelc.mjs.map
