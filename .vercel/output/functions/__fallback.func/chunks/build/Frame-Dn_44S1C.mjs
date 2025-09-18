import st from './Icon-HF-gEWU5.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import './index-BF41Y92k.mjs';
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
import './_plugin-vue_export-helper-BCo6x5W8.mjs';

const p = defineComponent({ __name: "Frame", __ssrInlineRender: true, props: { title: {}, description: {}, bg: { default: "linear-gradient(to bottom right, #171717, #131313)" }, icon: {}, logo: {}, image: {}, username: {}, socials: {} }, setup: (o2) => (o3, i2, p2, u2) => {
  const a = st;
  i2(`<div${ssrRenderAttrs(mergeProps({ class: "relative h-full w-full flex items-center justify-center bg-neutral-900 text-white border-2 border-white", style: { backgroundImage: o3.bg } }, u2))}>`), o3.image ? i2(`<div class="absolute inset-0 w-full h-full bg-center opacity-10" style="${ssrRenderStyle({ backgroundImage: `url(${o3.image})` })}"></div>`) : i2("<!---->"), i2('<div class="flex flex-col items-center text-center"><h1 class="flex gap-4 text-7xl font-bold">'), o3.icon ? i2(ssrRenderComponent(a, { name: o3.icon }, null, p2)) : i2("<!---->"), i2(` ${ssrInterpolate(o3.title)}</h1><p class="text-2xl max-w-3xl">${ssrInterpolate(o3.description)}</p></div>`), o3.logo ? i2(`<img${ssrRenderAttr("src", o3.logo)} class="absolute bottom-0 left-0 p-5" style="${ssrRenderStyle({ height: "125px", width: "153px" })}">`) : i2("<!---->"), i2('<div class="absolute bottom-5 right-5 flex gap-4">'), o3.username ? i2(`<div class="absolute bottom-12 right-8 font-bold">${ssrInterpolate(o3.username)}</div>`) : i2("<!---->"), i2("<!--[-->"), ssrRenderList(o3.socials, (e2) => {
    i2(ssrRenderComponent(a, { key: e2.name, name: e2.icon, class: "w-7 h-7" }, null, p2));
  }), i2("<!--]--></div></div>");
} }), u = p.setup;
p.setup = (e2, o2) => {
  const t2 = useSSRContext();
  return (t2.modules || (t2.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/nuxt-og-image@3.1.1_magicast@0.3.5_vite@7.1.5_@types+node@24.5.2_jiti@2.5.1_terser@5.44.0_yam_ltu4iau3m3ajkz62ipdgf2zmw4/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Frame.vue"), u ? u(e2, o2) : void 0;
};

export { p as default };
//# sourceMappingURL=Frame-Dn_44S1C.mjs.map
