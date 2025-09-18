import { defineComponent, withAsyncContext, mergeProps, unref, computed, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { e } from './helper-ot_k33XH.mjs';
import { y } from './nuxt-link-2_lwc315.mjs';
import { o } from './_plugin-vue_export-helper-BCo6x5W8.mjs';
import { u as pn, d as Kn, l as wa } from './server.mjs';
import { D, G } from './query-CP_2cPQU.mjs';
import { x } from './defineOgImage-BeQ-484b.mjs';
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
import 'node:zlib';
import 'node:stream';
import 'node:util';
import 'node:net';
import 'vue-router';
import 'perfect-debounce';
import './preview-BhsI3sP2.mjs';

const j = defineComponent({ __name: "CategoryCard", __ssrInlineRender: true, props: { title: { default: "No title available" }, count: { default: 0 } }, setup(e2) {
  const n2 = e2, a2 = ["#dc2626", "#d97706", "#65a30d", "#059669", "#0891b2", "#0284c7", "#4f46e5", "#7c3aed", "#c026d3", "#db2777"];
  const u2 = computed(() => (function(e3) {
    let t2 = 0;
    for (let o2 = 0; o2 < e3.length; o2++) t2 = (t2 << 5) - t2 + e3.charCodeAt(o2), t2 &= t2;
    return a2[Math.abs(t2) % a2.length];
  })(n2.title));
  return (e3, t2, n3, a3) => {
    var _a;
    const c2 = y, x2 = { style: { ":--08126306": unref(u2) } };
    t2(`<div${ssrRenderAttrs(mergeProps({ class: "text-[#F1F2F4] px-5 py-3 rounded hover:underline rand-bg-color hover:scale-[1.05] transition-all duration-500" }, a3, x2))} data-v-4e8c8687>`), t2(ssrRenderComponent(c2, { to: `/categories/${((_a = e3.title) == null ? void 0 : _a.toLocaleLowerCase()) || ""}`, class: "text-lg font-extrabold" }, { default: withCtx((t3, o2, i2, r2) => {
      if (!o2) return [createVNode("h1", null, "#" + toDisplayString(e3.title) + "(" + toDisplayString(e3.count) + ")", 1)];
      o2(`<h1 data-v-4e8c8687${r2}>#${ssrInterpolate(e3.title)}(${ssrInterpolate(e3.count)})</h1>`);
    }), _: 1 }, n3)), t2("</div>");
  };
} }), k = j.setup;
j.setup = (e2, t2) => {
  const o2 = useSSRContext();
  return (o2.modules || (o2.modules = /* @__PURE__ */ new Set())).add("components/category/CategoryCard.vue"), k ? k(e2, t2) : void 0;
};
const z = o(j, [["__scopeId", "data-v-4e8c8687"]]), U = defineComponent({ __name: "CategoryHero", __ssrInlineRender: true, setup: (e2) => (e3, t2, r2, s2) => {
  t2(`<div${ssrRenderAttrs(mergeProps({ class: "relative py-16 md:py-24 overflow-hidden" }, s2))}><div class="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-white to-accent-50/50 dark:from-gray-900/50 dark:via-gray-800/50 dark:to-gray-900/50"></div><div class="absolute top-10 right-10 w-24 h-24 bg-primary-200/20 dark:bg-primary-800/20 rounded-full blur-2xl animate-pulse"></div><div class="absolute bottom-10 left-10 w-32 h-32 bg-accent-200/20 dark:bg-accent-800/20 rounded-full blur-2xl animate-pulse" style="${ssrRenderStyle({ "animation-delay": "1s" })}"></div><div class="container mx-auto px-6 relative z-10"><div class="max-w-4xl mx-auto text-center"><div class="inline-block mb-6 animate-slide-up"><div class="px-4 py-2 bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 rounded-full text-sm font-medium text-primary-700 dark:text-primary-300 backdrop-blur-sm border border-primary-200/50 dark:border-primary-700/50"> \u{1F4C2} Categories </div></div><h1 class="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-primary-600 to-accent-600 dark:from-white dark:via-primary-400 dark:to-accent-400 font-bold leading-tight text-4xl md:text-6xl lg:text-7xl mb-6 animate-fade-in">${ssrInterpolate(unref(wa).title)}</h1><p class="text-gray-600 dark:text-zinc-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto animate-slide-up" style="${ssrRenderStyle({ "animation-delay": "0.2s" })}">${ssrInterpolate(unref(wa).description)}</p><div class="flex justify-center mt-8 animate-fade-in" style="${ssrRenderStyle({ "animation-delay": "0.3s" })}"><div class="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"></div></div></div></div></div>`);
} }), $ = U.setup;
U.setup = (e2, t2) => {
  const o2 = useSSRContext();
  return (o2.modules || (o2.modules = /* @__PURE__ */ new Set())).add("components/category/CategoryHero.vue"), $ ? $(e2, t2) : void 0;
};
const C = defineComponent({ __name: "index", __ssrInlineRender: true, async setup(e2) {
  var _a;
  let t2, r2;
  const { data: s2 } = ([t2, r2] = withAsyncContext(async () => D("all-blog-post-by-category", async () => await G("/blogs").find())), t2 = await t2, r2(), t2), d2 = /* @__PURE__ */ new Map();
  (_a = s2.value) == null ? void 0 : _a.forEach((e3) => {
    (e3.tags || []).forEach((e4) => {
      if (d2.has(e4)) {
        const t3 = d2.get(e4);
        d2.set(e4, t3 + 1);
      } else d2.set(e4, 1);
    });
  }), pn({ title: "Categories", meta: [{ name: "description", content: "Below All the topics are listed on which either I have written a blog or will write a blog in near future." }] });
  const n2 = Kn();
  return x({ props: { title: "Categories", description: "Below All the topics are listed on which either I have written a blog or will write a blog in near future.", siteName: n2.url } }), (e3, t3, r3, s3) => {
    t3(`<main${ssrRenderAttrs(mergeProps({ class: "container max-w-5xl mx-auto text-zinc-600" }, s3))}>`), t3(ssrRenderComponent(U, null, null, r3)), t3('<div class="flex flex-wrap px-6 mt-12 gap-3"><!--[-->'), ssrRenderList(unref(d2), (e4) => {
      t3(ssrRenderComponent(z, { key: e4[0], title: unref(e)(e4[0]), count: e4[1] }, null, r3));
    }), t3("<!--]--></div></main>");
  };
} }), I = C.setup;
C.setup = (e2, t2) => {
  const o2 = useSSRContext();
  return (o2.modules || (o2.modules = /* @__PURE__ */ new Set())).add("pages/categories/index.vue"), I ? I(e2, t2) : void 0;
};

export { C as default };
//# sourceMappingURL=index-Cj9nUKST.mjs.map
