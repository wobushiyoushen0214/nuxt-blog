import { defineComponent, computed, withAsyncContext, mergeProps, unref, resolveComponent, withCtx, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { y } from './nuxt-link-2_lwc315.mjs';
import { I as I$1 } from './NuxtImg-BwE8PT3p.mjs';
import st from './Icon-HF-gEWU5.mjs';
import { o } from './_plugin-vue_export-helper-BCo6x5W8.mjs';
import { e } from './helper-ot_k33XH.mjs';
import { e as Fo, u as pn, d as Kn } from './server.mjs';
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
import './index-BF41Y92k.mjs';
import 'node:zlib';
import 'node:stream';
import 'node:util';
import 'node:net';
import 'vue-router';
import 'perfect-debounce';
import './preview-BhsI3sP2.mjs';

const I = defineComponent({ __name: "card", __ssrInlineRender: true, props: { path: { default: "/" }, title: { default: "no-title" }, date: { default: "no-date" }, description: { default: "no-description" }, image: { default: "/blogs-img/blog.jpg" }, alt: { default: "no-alt" }, ogImage: { default: "/blogs-img/blog.jpg" }, tags: { default: () => [] }, published: { type: Boolean, default: false } }, setup: (t2) => (t3, p2, m2, u2) => {
  const c2 = y, w2 = I$1, k2 = st, j2 = resolveComponent("LogoDate"), _2 = resolveComponent("LogoTag"), $2 = resolveComponent("LogoArrow");
  p2(`<article${ssrRenderAttrs(mergeProps({ class: "group relative m-1 sm:m-2 overflow-hidden rounded-2xl sm:rounded-3xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60 shadow-xl hover:shadow-2xl text-zinc-700 dark:text-zinc-300 transform hover:scale-[1.03] hover:-translate-y-2 transition-all duration-500 animate-scale-in h-full flex flex-col active:scale-95 touch-manipulation no-transition" }, u2))}><div class="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-accent-500/20 to-primary-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>`), p2(ssrRenderComponent(c2, { to: t3.path, class: "relative z-10 h-full flex flex-col" }, { default: withCtx((e2, o2, r2, p3) => {
    if (!o2) return [createVNode("div", { class: "relative overflow-hidden rounded-t-2xl sm:rounded-t-3xl" }, [createVNode(w2, { class: "h-40 sm:h-48 lg:h-52 w-full object-cover object-center group-hover:scale-110 transition-transform duration-700", width: "300", src: t3.image, alt: t3.alt }, null, 8, ["src", "alt"]), createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" }), createVNode("div", { class: "absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-400 transform translate-y-3 group-hover:translate-y-0" }, [createVNode("div", { class: "bg-white/25 hover:bg-white/35 backdrop-blur-md rounded-full p-3 border border-white/20 shadow-lg" }, [createVNode(k2, { name: "heroicons:arrow-top-right-on-square", class: "text-white text-xl drop-shadow-lg" })])]), createVNode("div", { class: "absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-3 group-hover:translate-x-0" }, [createVNode("div", { class: "bg-gradient-to-r from-primary-500/90 to-accent-500/90 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 shadow-lg" }, [createVNode("span", { class: "text-white text-sm font-semibold" }, "Read Article")])]), createVNode("div", { class: "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" })]), createVNode("div", { class: "px-4 sm:px-6 py-4 sm:py-5 flex-1 flex flex-col" }, [createVNode("div", { class: "text-gray-500 dark:text-zinc-400 pb-4 space-y-3" }, [createVNode("div", { class: "flex items-center text-sm font-medium" }, [createVNode("div", { class: "w-4 h-4 mr-2 text-primary-500" }, [createVNode(j2)]), createVNode("span", null, toDisplayString(t3.date), 1)]), createVNode("div", { class: "flex items-center gap-2 flex-wrap" }, [createVNode("div", { class: "w-4 h-4 text-accent-500" }, [createVNode(_2)]), (openBlock(true), createBlock(Fragment, null, renderList(t3.tags, (t4) => (openBlock(), createBlock("span", { key: t4, class: "bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/40 dark:to-accent-900/40 text-primary-700 dark:text-primary-300 rounded-full px-3 py-1.5 text-xs font-semibold border border-primary-200/50 dark:border-primary-700/50 hover:scale-105 transition-transform duration-200" }, toDisplayString(t4), 1))), 128))])]), createVNode("h2", { class: "text-lg sm:text-xl font-bold text-gray-900 dark:text-zinc-100 pb-2 sm:pb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300 line-clamp-2 leading-tight" }, toDisplayString(t3.title), 1), createVNode("p", { class: "text-gray-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4 sm:mb-5 flex-1" }, toDisplayString(t3.description), 1), createVNode("div", { class: "flex items-center justify-between mt-auto" }, [createVNode("div", { class: "flex items-center text-primary-600 dark:text-primary-400 font-semibold group-hover:gap-2 transition-all duration-300" }, [createVNode("span", { class: "text-sm" }, "Read More"), createVNode($2, { class: "transform group-hover:translate-x-1 transition-transform duration-300 ml-1" })]), createVNode("div", { class: "w-8 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" })])])];
    o2(`<div class="relative overflow-hidden rounded-t-2xl sm:rounded-t-3xl"${p3}>`), o2(ssrRenderComponent(w2, { class: "h-40 sm:h-48 lg:h-52 w-full object-cover object-center group-hover:scale-110 transition-transform duration-700", width: "300", src: t3.image, alt: t3.alt }, null, r2, p3)), o2(`<div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"${p3}></div><div class="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-400 transform translate-y-3 group-hover:translate-y-0"${p3}><div class="bg-white/25 hover:bg-white/35 backdrop-blur-md rounded-full p-3 border border-white/20 shadow-lg"${p3}>`), o2(ssrRenderComponent(k2, { name: "heroicons:arrow-top-right-on-square", class: "text-white text-xl drop-shadow-lg" }, null, r2, p3)), o2(`</div></div><div class="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-3 group-hover:translate-x-0"${p3}><div class="bg-gradient-to-r from-primary-500/90 to-accent-500/90 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 shadow-lg"${p3}><span class="text-white text-sm font-semibold"${p3}>Read Article</span></div></div><div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"${p3}></div></div><div class="px-4 sm:px-6 py-4 sm:py-5 flex-1 flex flex-col"${p3}><div class="text-gray-500 dark:text-zinc-400 pb-4 space-y-3"${p3}><div class="flex items-center text-sm font-medium"${p3}><div class="w-4 h-4 mr-2 text-primary-500"${p3}>`), o2(ssrRenderComponent(j2, null, null, r2, p3)), o2(`</div><span${p3}>${ssrInterpolate(t3.date)}</span></div><div class="flex items-center gap-2 flex-wrap"${p3}><div class="w-4 h-4 text-accent-500"${p3}>`), o2(ssrRenderComponent(_2, null, null, r2, p3)), o2("</div><!--[-->"), ssrRenderList(t3.tags, (t4) => {
      o2(`<span class="bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/40 dark:to-accent-900/40 text-primary-700 dark:text-primary-300 rounded-full px-3 py-1.5 text-xs font-semibold border border-primary-200/50 dark:border-primary-700/50 hover:scale-105 transition-transform duration-200"${p3}>${ssrInterpolate(t4)}</span>`);
    }), o2(`<!--]--></div></div><h2 class="text-lg sm:text-xl font-bold text-gray-900 dark:text-zinc-100 pb-2 sm:pb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300 line-clamp-2 leading-tight"${p3}>${ssrInterpolate(t3.title)}</h2><p class="text-gray-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4 sm:mb-5 flex-1"${p3}>${ssrInterpolate(t3.description)}</p><div class="flex items-center justify-between mt-auto"${p3}><div class="flex items-center text-primary-600 dark:text-primary-400 font-semibold group-hover:gap-2 transition-all duration-300"${p3}><span class="text-sm"${p3}>Read More</span>`), o2(ssrRenderComponent($2, { class: "transform group-hover:translate-x-1 transition-transform duration-300 ml-1" }, null, r2, p3)), o2(`</div><div class="w-8 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"${p3}></div></div></div>`);
  }), _: 1 }, m2)), p2("</article>");
} }), R = I.setup;
I.setup = (t2, e2) => {
  const o2 = useSSRContext();
  return (o2.modules || (o2.modules = /* @__PURE__ */ new Set())).add("components/blog/card.vue"), R ? R(t2, e2) : void 0;
};
const q = {};
const L = q.setup;
q.setup = (t2, e2) => {
  const o2 = useSSRContext();
  return (o2.modules || (o2.modules = /* @__PURE__ */ new Set())).add("components/blog/empty.vue"), L ? L(t2, e2) : void 0;
};
const N = o(q, [["ssrRender", function(t2, s2, i2, l2) {
  const n2 = y, d2 = resolveComponent("LogoConfused"), p2 = resolveComponent("LogoArrow");
  s2(`<article${ssrRenderAttrs(mergeProps({ class: "group border dark:border-gray-800 m-2 rounded-2xl overflow-hidden shadow-lg text-zinc-700" }, l2))}>`), s2(ssrRenderComponent(n2, { to: "/" }, { default: withCtx((t3, e2, o2, r2) => {
    if (!e2) return [createVNode("div", { class: "lg:h-48 md:h-36 w-full object-cover object-center group-hover:scale-[1.05] transition-all duration-500" }, [createVNode(d2)]), createVNode("div", { class: "p-5" }, [createVNode("h2", { class: "text-3xl font-semibold text-black dark:text-zinc-300 pb-1 group-hover:text-sky-700 dark:group-hover:text-sky-400" }, " No Post Available "), createVNode("div", { class: "flex group-hover:underline text-sky-700 dark:text-sky-400 items-center pt-2" }, [createVNode("p", null, "Back To Home"), createVNode(p2)])])];
    e2(`<div class="lg:h-48 md:h-36 w-full object-cover object-center group-hover:scale-[1.05] transition-all duration-500"${r2}>`), e2(ssrRenderComponent(d2, null, null, o2, r2)), e2(`</div><div class="p-5"${r2}><h2 class="text-3xl font-semibold text-black dark:text-zinc-300 pb-1 group-hover:text-sky-700 dark:group-hover:text-sky-400"${r2}> No Post Available </h2><div class="flex group-hover:underline text-sky-700 dark:text-sky-400 items-center pt-2"${r2}><p${r2}>Back To Home</p>`), e2(ssrRenderComponent(p2, null, null, o2, r2)), e2("</div></div>");
  }), _: 1 }, i2)), s2("</article>");
}]]), S = defineComponent({ __name: "topic", __ssrInlineRender: true, setup(t2) {
  const e2 = Fo(), r2 = computed(() => {
    const t3 = e2.params.category || "";
    let o2 = "";
    return o2 = Array.isArray(t3) ? t3.at(0) || "" : t3, e(o2);
  });
  return (t3, e3, a2, s2) => {
    e3(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto" }, s2))}><div class="p-6 my-4 mx-2 rounded-md bg-gray-200 dark:bg-slate-900"><h1 class="text-black dark:text-white font-semibold leading-tight text-xl md:text-2xl"> #${ssrInterpolate(unref(r2))}</h1></div></div>`);
  };
} }), B = S.setup;
S.setup = (t2, e2) => {
  const o2 = useSSRContext();
  return (o2.modules || (o2.modules = /* @__PURE__ */ new Set())).add("components/category/topic.vue"), B ? B(t2, e2) : void 0;
};
const T = defineComponent({ __name: "[category]", __ssrInlineRender: true, async setup(t2) {
  var _a;
  let e2, r2;
  const a2 = Fo(), s2 = computed(() => {
    const t3 = a2.params.category || "";
    let e3 = "";
    return e3 = Array.isArray(t3) ? t3.at(0) || "" : t3, e3;
  }), { data: i2 } = ([e2, r2] = withAsyncContext(async () => D(`category-data-${s2.value}`, async () => (await G("/blogs").find()).filter((t3) => t3.meta.tags.includes(s2.value)))), e2 = await e2, r2(), e2), l2 = computed(() => {
    var _a2;
    return (_a2 = i2.value) == null ? void 0 : _a2.map((t3) => {
      const e3 = t3.meta;
      return { path: t3.path, title: t3.title || "no-title available", description: t3.description || "no-description available", image: e3.image || "/blogs-img/blog.jpg", alt: e3.alt || "no alter data available", ogImage: e3.ogImage || "/blogs-img/blog.jpg", date: e3.date || "not-date-available", tags: e3.tags || [], published: e3.published || false };
    });
  });
  pn({ title: s2.value, meta: [{ name: "description", content: `You will find all the ${s2.value} related post here` }] });
  const n2 = Kn();
  return x({ props: { title: (_a = s2.value) == null ? void 0 : _a.toUpperCase(), description: `You will find all the ${s2.value} related post here`, siteName: n2.url } }), (t3, e3, r3, a3) => {
    var _a2;
    e3(`<main${ssrRenderAttrs(mergeProps({ class: "container max-w-5xl mx-auto text-zinc-600 px-4" }, a3))}>`), e3(ssrRenderComponent(S, null, null, r3)), e3('<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"><!--[-->'), ssrRenderList(unref(l2), (t4) => {
      e3(ssrRenderComponent(I, { key: t4.title, path: t4.path, title: t4.title, date: t4.date, description: t4.description, image: t4.image, alt: t4.alt, "og-image": t4.ogImage, tags: t4.tags, published: t4.published }, null, r3));
    }), e3("<!--]-->"), 0 === ((_a2 = unref(i2)) == null ? void 0 : _a2.length) ? e3(ssrRenderComponent(N, null, null, r3)) : e3("<!---->"), e3("</div></main>");
  };
} }), C = T.setup;
T.setup = (t2, e2) => {
  const o2 = useSSRContext();
  return (o2.modules || (o2.modules = /* @__PURE__ */ new Set())).add("pages/categories/[category].vue"), C ? C(t2, e2) : void 0;
};

export { T as default };
//# sourceMappingURL=_category_-AwuiweSZ.mjs.map
