import st from './Icon-HF-gEWU5.mjs';
import { defineComponent, computed, h as h$1, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderClass, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { m as Qn, d as Kn } from './server.mjs';
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
import './_plugin-vue_export-helper-BCo6x5W8.mjs';
import 'node:zlib';
import 'node:stream';
import 'node:util';
import 'node:net';
import 'vue-router';

const h = defineComponent({ __name: "NuxtSeo", __ssrInlineRender: true, props: { colorMode: {}, title: { default: "title" }, description: {}, icon: { type: [String, Boolean] }, siteName: {}, siteLogo: {}, theme: { default: "#00dc82" } }, setup(l2) {
  const h2 = l2, g2 = /^#(?:[0-9a-f]{3}){1,2}$/i, f = Qn(), v = computed(() => h2.colorMode || f.colorPreference || "light"), _ = computed(() => {
    if (g2.test(h2.theme)) return h2.theme;
    if (g2.test(`#${h2.theme}`)) return `#${h2.theme}`;
    if (h2.theme.startsWith("rgb")) {
      return `#${h2.theme.replace("rgb(", "").replace("rgba(", "").replace(")", "").split(",").map((e2) => Number.parseInt(e2.trim(), 10)).map((e2) => {
        const t2 = e2.toString(16);
        return 1 === t2.length ? `0${t2}` : t2;
      }).join("")}`;
    }
    return "#FFFFFF";
  }), b = computed(() => {
    var _a;
    return (_a = _.value.replace("#", "").match(/.{1,2}/g)) == null ? void 0 : _a.map((e2) => Number.parseInt(e2, 16)).join(", ");
  }), j = Kn(), w = computed(() => h2.siteName || j.name), y = computed(() => h2.siteLogo || j.logo), $ = f.hasNuxtIcon ? st : defineComponent({ render: () => h$1("div", "missing @nuxt/icon") });
  return "string" == typeof h2.icon && f.hasNuxtIcon, (e2, t2, o2, i2) => {
    t2(`<div${ssrRenderAttrs(mergeProps({ class: ["w-full h-full flex justify-between relative p-[60px]", ["light" === v.value ? ["bg-white", "text-gray-900"] : ["bg-gray-900", "text-white"]]] }, i2))}><div class="flex absolute top-0 right-[-100%]" style="${ssrRenderStyle({ width: "200%", height: "200%", backgroundImage: `radial-gradient(circle, rgba(${b.value}, 0.5) 0%,  ${"dark" === v.value ? "rgba(5, 5, 5,0.3)" : "rgba(255, 255, 255, 0.7)"} 50%, ${"dark" === h2.colorMode ? "rgba(5, 5, 5,0)" : "rgba(255, 255, 255, 0)"} 70%)` })}"></div><div class="h-full w-full justify-between relative"><div class="flex flex-row justify-between items-start"><div class="flex flex-col w-full max-w-[65%]"><h1 class="m-0 font-bold mb-[30px] text-[75px]">${ssrInterpolate(e2.title)}</h1>`), e2.description ? t2(`<p class="${ssrRenderClass([["light" === v.value ? ["text-gray-700"] : ["text-gray-300"]], "text-[35px]"])}">${ssrInterpolate(e2.description)}</p>`) : t2("<!---->"), t2("</div>"), Boolean(e2.icon) ? (t2(`<div style="${ssrRenderStyle({ width: "30%" })}" class="flex justify-end">`), t2(ssrRenderComponent(unref($), { name: e2.icon, size: "250px", style: { margin: "0 auto", opacity: "0.7" } }, null, o2)), t2("</div>")) : t2("<!---->"), t2('</div><div class="flex flex-row justify-center items-center text-left w-full">'), y.value ? t2(`<img${ssrRenderAttr("src", y.value)} height="30">`) : (t2(`<!--[--><svg height="50" width="50" class="mr-3" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path${ssrRenderAttr("fill", e2.theme.includes("#") ? e2.theme : `#${e2.theme}`)} d="M62.3,-53.9C74.4,-34.5,73.5,-9,67.1,13.8C60.6,36.5,48.7,56.5,30.7,66.1C12.7,75.7,-11.4,74.8,-31.6,65.2C-51.8,55.7,-67.9,37.4,-73.8,15.7C-79.6,-6,-75.1,-31.2,-61.1,-51C-47.1,-70.9,-23.6,-85.4,0.8,-86C25.1,-86.7,50.2,-73.4,62.3,-53.9Z" transform="translate(100 100)"></path></svg>`), w.value ? t2(`<p style="${ssrRenderStyle({ "font-size": "25px" })}" class="font-bold">${ssrInterpolate(w.value)}</p>`) : t2("<!---->"), t2("<!--]-->")), t2("</div></div></div>");
  };
} }), g = h.setup;
h.setup = (e2, t2) => {
  const o2 = useSSRContext();
  return (o2.modules || (o2.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/nuxt-og-image@3.1.1_magicast@0.3.5_vite@7.1.5_@types+node@24.5.2_jiti@2.5.1_terser@5.44.0_yam_ltu4iau3m3ajkz62ipdgf2zmw4/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/NuxtSeo.vue"), g ? g(e2, t2) : void 0;
};

export { h as default };
//# sourceMappingURL=NuxtSeo-z-sLbqJp.mjs.map
