import st from './Icon-HF-gEWU5.mjs';
import { defineComponent, ref, withAsyncContext, watch, computed, resolveDirective, mergeProps, unref, resolveComponent, withCtx, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrGetDirectiveProps, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import U from 'fuse.js';
import { y } from './nuxt-link-2_lwc315.mjs';
import { I } from './NuxtImg-BwE8PT3p.mjs';
import { u as pn, d as Kn, b as _a } from './server.mjs';
import { D as D$1, G } from './query-CP_2cPQU.mjs';
import { x } from './defineOgImage-BeQ-484b.mjs';
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
import 'perfect-debounce';
import './preview-BhsI3sP2.mjs';

const T = defineComponent({ __name: "ArchiveCard", __ssrInlineRender: true, props: { path: { default: "/" }, title: { default: "no-title" }, date: { default: "no-date" }, description: { default: "no-description" }, image: { default: "/blogs-img/blog.jpg" }, alt: { default: "no-alt" }, ogImage: { default: "/blogs-img/blog.jpg" }, tags: { default: () => [] }, published: { type: Boolean, default: false } }, setup: (e2) => (e3, t2, p2, c2) => {
  const u2 = y, x2 = I, g2 = resolveComponent("LogoDate"), v2 = resolveComponent("LogoTag"), b2 = resolveComponent("LogoArrow");
  t2(`<article${ssrRenderAttrs(mergeProps({ class: "group border dark:border-gray-800 m-2 rounded-2xl overflow-hidden shadow-sm text-zinc-700 dark:text-zinc-300" }, c2))}>`), t2(ssrRenderComponent(u2, { to: e3.path, class: "grid grid-cols-1 sm:grid-cols-10 gap-1" }, { default: withCtx((t3, a2, r2, s2) => {
    if (!a2) return [createVNode("div", { class: "sm:col-span-3" }, [createVNode(x2, { class: "h-48 w-full object-cover object-center rounded-t-2xl sm:rounded-l-2xl sm:rounded-t-none shadow-lg group-hover:scale-[1.02] transition-all duration-500", width: "300", src: e3.image, alt: e3.alt }, null, 8, ["src", "alt"])]), createVNode("div", { class: "sm:col-span-7 p-5" }, [createVNode("h2", { class: "text-xl font-semibold text-black dark:text-zinc-300 pb-1 group-hover:text-sky-700 dark:group-hover:text-sky-400" }, toDisplayString(e3.title), 1), createVNode("p", { class: "text-ellipsis line-clamp-2" }, toDisplayString(e3.description), 1), createVNode("div", { class: "text-black dark:text-zinc-300 text-sm mt-2 mb-1 md:flex md:space-x-6" }, [createVNode("div", { class: "flex items-center" }, [createVNode(g2), createVNode("p", null, toDisplayString(e3.date), 1)]), createVNode("div", { class: "flex items-center gap-1 flex-wrap" }, [createVNode(v2), (openBlock(true), createBlock(Fragment, null, renderList(e3.tags, (e4) => (openBlock(), createBlock("p", { key: e4, class: "bg-gray-200 dark:bg-slate-900 rounded-md px-2 py-1 font-semibold" }, toDisplayString(e4), 1))), 128))])]), createVNode("div", { class: "flex group-hover:underline text-sky-700 dark:text-sky-400 items-center pt-2" }, [createVNode("p", null, "Read More"), createVNode(b2)])])];
    a2(`<div class="sm:col-span-3"${s2}>`), a2(ssrRenderComponent(x2, { class: "h-48 w-full object-cover object-center rounded-t-2xl sm:rounded-l-2xl sm:rounded-t-none shadow-lg group-hover:scale-[1.02] transition-all duration-500", width: "300", src: e3.image, alt: e3.alt }, null, r2, s2)), a2(`</div><div class="sm:col-span-7 p-5"${s2}><h2 class="text-xl font-semibold text-black dark:text-zinc-300 pb-1 group-hover:text-sky-700 dark:group-hover:text-sky-400"${s2}>${ssrInterpolate(e3.title)}</h2><p class="text-ellipsis line-clamp-2"${s2}>${ssrInterpolate(e3.description)}</p><div class="text-black dark:text-zinc-300 text-sm mt-2 mb-1 md:flex md:space-x-6"${s2}><div class="flex items-center"${s2}>`), a2(ssrRenderComponent(g2, null, null, r2, s2)), a2(`<p${s2}>${ssrInterpolate(e3.date)}</p></div><div class="flex items-center gap-1 flex-wrap"${s2}>`), a2(ssrRenderComponent(v2, null, null, r2, s2)), a2("<!--[-->"), ssrRenderList(e3.tags, (e4) => {
      a2(`<p class="bg-gray-200 dark:bg-slate-900 rounded-md px-2 py-1 font-semibold"${s2}>${ssrInterpolate(e4)}</p>`);
    }), a2(`<!--]--></div></div><div class="flex group-hover:underline text-sky-700 dark:text-sky-400 items-center pt-2"${s2}><p${s2}>Read More</p>`), a2(ssrRenderComponent(b2, null, null, r2, s2)), a2("</div></div>");
  }), _: 1 }, p2)), t2("</article>");
} }), L = T.setup;
T.setup = (e2, t2) => {
  const a2 = useSSRContext();
  return (a2.modules || (a2.modules = /* @__PURE__ */ new Set())).add("components/archive/ArchiveCard.vue"), L ? L(e2, t2) : void 0;
};
const q = defineComponent({ __name: "ArchiveHero", __ssrInlineRender: true, setup: (e2) => (e3, t2, a2, s2) => {
  t2(`<div${ssrRenderAttrs(mergeProps({ class: "relative py-16 md:py-24 overflow-hidden mb-5" }, s2))}><div class="absolute inset-0 bg-gradient-to-br from-accent-50/50 via-white to-primary-50/50 dark:from-gray-900/50 dark:via-gray-800/50 dark:to-gray-900/50"></div><div class="absolute top-10 left-10 w-28 h-28 bg-accent-200/20 dark:bg-accent-800/20 rounded-full blur-2xl animate-pulse"></div><div class="absolute bottom-10 right-10 w-20 h-20 bg-primary-200/20 dark:bg-primary-800/20 rounded-full blur-2xl animate-pulse" style="${ssrRenderStyle({ "animation-delay": "1.5s" })}"></div><div class="container mx-auto px-6 relative z-10"><div class="max-w-4xl mx-auto text-center"><div class="inline-block mb-6 animate-slide-up"><div class="px-4 py-2 bg-gradient-to-r from-accent-100 to-primary-100 dark:from-accent-900/30 dark:to-primary-900/30 rounded-full text-sm font-medium text-accent-700 dark:text-accent-300 backdrop-blur-sm border border-accent-200/50 dark:border-accent-700/50"> \u{1F4DA} Blog Archive </div></div><h1 class="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-accent-600 to-primary-600 dark:from-white dark:via-accent-400 dark:to-primary-400 font-bold leading-tight text-4xl md:text-6xl lg:text-7xl mb-6 animate-fade-in">${ssrInterpolate(unref(_a).title)}</h1><p class="text-gray-600 dark:text-zinc-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto animate-slide-up" style="${ssrRenderStyle({ "animation-delay": "0.2s" })}">${ssrInterpolate(unref(_a).description)}</p><div class="flex justify-center mt-8 animate-fade-in" style="${ssrRenderStyle({ "animation-delay": "0.3s" })}"><div class="w-24 h-1 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full"></div></div></div></div></div>`);
} }), B = q.setup;
q.setup = (e2, t2) => {
  const a2 = useSSRContext();
  return (a2.modules || (a2.modules = /* @__PURE__ */ new Set())).add("components/archive/ArchiveHero.vue"), B ? B(e2, t2) : void 0;
};
const D = defineComponent({ __name: "index", __ssrInlineRender: true, async setup(t2) {
  let a2, s2;
  const i2 = ref(true), o2 = ref(false);
  ref(null);
  const { data: l2 } = ([a2, s2] = withAsyncContext(async () => D$1("blogs", async () => await G("/blogs").find())), a2 = await a2, s2(), a2), d2 = ref(5), n2 = ref(1), m2 = ref(""), p2 = ref("");
  let I2;
  watch(m2, (e2) => {
    o2.value = true, clearTimeout(I2), I2 = setTimeout(() => {
      p2.value = e2, o2.value = false;
    }, 300);
  });
  const A2 = computed(() => l2.value && Array.isArray(l2.value) ? l2.value.filter((e2) => {
    const t3 = e2.path, a3 = e2.meta || {};
    return t3 && t3.startsWith("/blogs/") && false !== a3.published;
  }).map((e2) => {
    const t3 = e2.meta || {};
    return { path: e2.path || "", title: e2.title || "no-title available", description: e2.description || "no-description available", image: t3.image || "/not-found.jpg", alt: t3.alt || "no alter data available", ogImage: t3.ogImage || "/not-found.jpg", date: t3.date || "not-date-available", tags: t3.tags || [], published: false !== t3.published };
  }) : []), M2 = computed(() => new U(A2.value, { keys: ["title", "description"], threshold: 0.4, includeScore: false })), L2 = computed(() => {
    if (!p2.value.trim()) return A2.value;
    return M2.value.search(p2.value).map((e2) => e2.item);
  }), B2 = computed(() => {
    const e2 = (n2.value - 1) * d2.value, t3 = n2.value * d2.value;
    return L2.value.slice(e2, t3);
  }), D2 = computed(() => {
    const e2 = L2.value.length || 0;
    return Math.ceil(e2 / d2.value);
  });
  watch(p2, () => {
    n2.value = 1;
  }), pn({ title: "Archive", meta: [{ name: "description", content: "Here you will find all the blog posts I have written & published on this site." }] });
  const J2 = Kn();
  return x({ props: { title: "Archive", description: "Here you will find all the blog posts I have written & published on this site.", siteName: J2.url } }), (t3, a3, s3, l3) => {
    const d3 = st, p3 = resolveDirective("auto-animate");
    a3(`<main${ssrRenderAttrs(mergeProps({ class: "container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-zinc-600" }, l3))}>`), unref(i2) ? (a3('<div class="animate-pulse"><div class="px-6 py-16"><div class="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 mx-auto max-w-md"></div><div class="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-8 mx-auto max-w-lg"></div></div><div class="px-6 mb-8"><div class="h-12 bg-gray-200 dark:bg-gray-700 rounded-xl max-w-md mx-auto"></div></div><div class="space-y-6 px-4"><!--[-->'), ssrRenderList(3, (e2) => {
      a3('<div class="h-32 bg-gray-200 dark:bg-gray-700 rounded-xl"></div>');
    }), a3("<!--]--></div></div>")) : (a3('<div class="animate-fade-in">'), a3(ssrRenderComponent(q, null, null, s3)), a3(`<div class="px-2 sm:px-6 mb-8 animate-slide-up" style="${ssrRenderStyle({ "animation-delay": "0.2s" })}"><div class="relative max-w-md mx-auto group"><div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">`), unref(o2) ? a3(ssrRenderComponent(d3, { name: "svg-spinners:ring-resize", class: "h-5 w-5 text-primary-500" }, null, s3)) : a3(ssrRenderComponent(d3, { name: "heroicons:magnifying-glass", class: "h-5 w-5 text-gray-400 group-focus-within:text-primary-500 transition-colors duration-300" }, null, s3)), a3(`</div><input${ssrRenderAttr("value", unref(m2))} placeholder="Search articles..." type="text" class="block w-full pl-10 pr-12 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:shadow-lg transition-all duration-300 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 hover:shadow-md">`), unref(m2) ? (a3('<div class="absolute inset-y-0 right-0 pr-3 flex items-center"><button class="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200">'), a3(ssrRenderComponent(d3, { name: "heroicons:x-mark", class: "h-4 w-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" }, null, s3)), a3("</button></div>")) : a3("<!---->"), a3('</div></div><div class="space-y-6 my-8 px-2 sm:px-4">'), unref(o2) ? (a3('<div class="space-y-6"><!--[-->'), ssrRenderList(3, (e2) => {
      a3('<div class="animate-pulse"><div class="h-32 bg-gray-200 dark:bg-gray-700 rounded-xl"></div></div>');
    }), a3("<!--]--></div>")) : (a3(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, ssrGetDirectiveProps(t3, p3)))}><!--[-->`), ssrRenderList(unref(B2), (e2, t4) => {
      a3(`<div style="${ssrRenderStyle({ animationDelay: 100 * t4 + 400 + "ms" })}" class="animate-slide-up">`), a3(ssrRenderComponent(T, { path: e2.path, title: e2.title, date: e2.date, description: e2.description, image: e2.image, alt: e2.alt, "og-image": e2.ogImage, tags: e2.tags, published: e2.published }, null, s3)), a3("</div>");
    }), a3("<!--]-->"), unref(B2).length <= 0 ? (a3('<div class="animate-fade-in text-center py-16"><div class="mb-6">'), a3(ssrRenderComponent(d3, { name: "heroicons:document-magnifying-glass", class: "mx-auto h-16 w-16 text-gray-400" }, null, s3)), a3(`</div><h3 class="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">${ssrInterpolate(unref(m2) ? "No articles found" : "No articles available")}</h3><p class="text-gray-500 dark:text-gray-400 mb-6">${ssrInterpolate(unref(m2) ? "Try searching for something else" : "Check back later for new content")}</p>`), unref(m2) ? (a3('<button class="inline-flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-200">'), a3(ssrRenderComponent(d3, { name: "heroicons:arrow-path", class: "mr-2 h-4 w-4" }, null, s3)), a3(" Clear search </button>")) : a3("<!---->"), a3("</div>")) : a3("<!---->"), a3("</div>")), a3("</div>"), !unref(o2) && unref(D2) > 1 ? (a3(`<div class="flex justify-center items-center space-x-2 sm:space-x-4 lg:space-x-8 py-8 px-2 sm:px-4 animate-slide-up" style="${ssrRenderStyle({ "animation-delay": "0.6s" })}"><button${ssrIncludeBooleanAttr(unref(n2) <= 1) ? " disabled" : ""} class="${ssrRenderClass([{ "text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20": unref(n2) > 1 }, "flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"])}">`), a3(ssrRenderComponent(d3, { name: "heroicons:chevron-left", size: "20" }, null, s3)), a3('<span class="hidden sm:inline">Previous</span></button><div class="flex items-center gap-1"><!--[-->'), ssrRenderList(Math.min(unref(D2), 5), (e2) => {
      a3("<!--[-->"), e2 === unref(n2) ? a3(`<button class="px-3 py-2 bg-primary-600 text-white rounded-lg font-medium shadow-md">${ssrInterpolate(e2)}</button>`) : Math.abs(e2 - unref(n2)) <= 2 || 1 === e2 || e2 === unref(D2) ? a3(`<button class="px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-all duration-200">${ssrInterpolate(e2)}</button>`) : 2 === e2 && unref(n2) > 4 || e2 === unref(D2) - 1 && unref(n2) < unref(D2) - 3 ? a3('<span class="px-2 text-gray-400">...</span>') : a3("<!---->"), a3("<!--]-->");
    }), a3(`<!--]--></div><button${ssrIncludeBooleanAttr(unref(n2) >= unref(D2)) ? " disabled" : ""} class="${ssrRenderClass([{ "text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20": unref(n2) < unref(D2) }, "flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"])}"><span class="hidden sm:inline">Next</span>`), a3(ssrRenderComponent(d3, { name: "heroicons:chevron-right", size: "20" }, null, s3)), a3("</button></div>")) : a3("<!---->"), a3("</div>")), a3("</main>");
  };
} }), J = D.setup;
D.setup = (e2, t2) => {
  const a2 = useSSRContext();
  return (a2.modules || (a2.modules = /* @__PURE__ */ new Set())).add("pages/blogs/index.vue"), J ? J(e2, t2) : void 0;
};

export { D as default };
//# sourceMappingURL=index-BkjvcTem.mjs.map
