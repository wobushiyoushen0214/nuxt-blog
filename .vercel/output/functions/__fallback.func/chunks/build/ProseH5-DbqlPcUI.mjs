import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
import { j as Bo } from './server.mjs';
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
import 'ipx';
import 'vue-router';

const p = defineComponent({ __name: "ProseH5", __ssrInlineRender: true, props: { id: {} }, setup(e2) {
  const n2 = e2, { headings: p2 } = Bo().public.mdc, u2 = computed(() => {
    var _a;
    return n2.id && ("boolean" == typeof (p2 == null ? void 0 : p2.anchorLinks) && true === (p2 == null ? void 0 : p2.anchorLinks) || "object" == typeof (p2 == null ? void 0 : p2.anchorLinks) && ((_a = p2 == null ? void 0 : p2.anchorLinks) == null ? void 0 : _a.h5));
  });
  return (e3, o2, m2, p3) => {
    o2(`<h5${ssrRenderAttrs(mergeProps({ id: n2.id }, p3))}>`), n2.id && unref(u2) ? (o2(`<a${ssrRenderAttr("href", `#${n2.id}`)}>`), ssrRenderSlot(e3.$slots, "default", {}, null, o2, m2), o2("</a>")) : ssrRenderSlot(e3.$slots, "default", {}, null, o2, m2), o2("</h5>");
  };
} }), u = p.setup;
p.setup = (e2, o2) => {
  const d2 = useSSRContext();
  return (d2.modules || (d2.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH5.vue"), u ? u(e2, o2) : void 0;
};

export { p as default };
//# sourceMappingURL=ProseH5-DbqlPcUI.mjs.map
