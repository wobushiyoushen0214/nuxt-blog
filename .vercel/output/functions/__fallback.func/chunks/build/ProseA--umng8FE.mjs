import { y } from './nuxt-link-2_lwc315.mjs';
import { defineComponent, mergeProps, withCtx, renderSlot, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
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
import 'node:url';
import 'ipx';
import './server.mjs';
import 'node:zlib';
import 'node:stream';
import 'node:util';
import 'node:net';
import 'vue-router';

const m = defineComponent({ __name: "ProseA", __ssrInlineRender: true, props: { href: { type: String, default: "" }, target: { type: String, default: void 0, required: false } }, setup(o2) {
  const n2 = o2;
  return (o3, m2, u2, p) => {
    m2(ssrRenderComponent(y, mergeProps({ href: n2.href, target: n2.target }, p), { default: withCtx((e2, t2, d2, n3) => {
      if (!t2) return [renderSlot(o3.$slots, "default")];
      ssrRenderSlot(o3.$slots, "default", {}, null, t2, d2, n3);
    }), _: 3 }, u2));
  };
} }), u = m.setup;
m.setup = (e2, o2) => {
  const t2 = useSSRContext();
  return (t2.modules || (t2.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseA.vue"), u ? u(e2, o2) : void 0;
};

export { m as default };
//# sourceMappingURL=ProseA--umng8FE.mjs.map
