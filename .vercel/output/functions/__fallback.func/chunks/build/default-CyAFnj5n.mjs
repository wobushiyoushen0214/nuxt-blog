import { defineComponent, mergeProps, ref, watch, unref, withCtx, createTextVNode, createVNode, toDisplayString, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderStyle, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import st from './Icon-HF-gEWU5.mjs';
import { y as bn, e as Fo, n as ba, _ as mn, f as ya, D as Ra, E as va } from './server.mjs';
import { y } from './nuxt-link-2_lwc315.mjs';
import { o } from './_plugin-vue_export-helper-BCo6x5W8.mjs';
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
import 'node:zlib';
import 'node:stream';
import 'node:util';
import 'node:net';
import 'vue-router';

const C = defineComponent({ __name: "site", __ssrInlineRender: true, setup: (a2) => (a3, e2, r2, o2) => {
  e2(`<div${ssrRenderAttrs(o2)}><p class="text-black dark:text-zinc-300 text-base py-1 font-semibold">About This Site</p><p class="py-2 dark:text-zinc-300">${ssrInterpolate(unref(ya).aboutTheSite)}</p></div>`);
} }), B = C.setup;
C.setup = (a2, t2) => {
  const r2 = useSSRContext();
  return (r2.modules || (r2.modules = /* @__PURE__ */ new Set())).add("components/footer/site.vue"), B ? B(a2, t2) : void 0;
};
const A = defineComponent({ __name: "developer", __ssrInlineRender: true, setup: (a2) => (a3, e2, s2, i2) => {
  const n2 = y, d2 = st;
  e2(`<div${ssrRenderAttrs(i2)}><p class="text-black dark:text-zinc-300 text-2xl py-1 font-semibold">${ssrInterpolate(unref(ya).author)}</p><p class="py-2 dark:text-zinc-300">${ssrInterpolate(unref(ya).aboutAuthor)}</p><div class="my-4 flex flex-wrap gap-3 pb-4">`), e2(ssrRenderComponent(n2, { to: unref(Ra).githubLink, target: "_blank", class: "group relative p-3 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 text-gray-700 dark:text-gray-200 rounded-xl hover:from-gray-900 hover:to-gray-700 dark:hover:from-gray-600 dark:hover:to-gray-500 hover:text-white dark:hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gray-500/25 dark:hover:shadow-gray-400/25", "aria-label": "Github" }, { default: withCtx((a4, t2, e3, r2) => {
    if (!t2) return [createVNode(d2, { name: "fa:github", size: "1.2em", class: "group-hover:rotate-12 transition-transform duration-300" }), createVNode("div", { class: "absolute inset-0 rounded-xl bg-gradient-to-br from-transparent to-black/10 dark:to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" })];
    t2(ssrRenderComponent(d2, { name: "fa:github", size: "1.2em", class: "group-hover:rotate-12 transition-transform duration-300" }, null, e3, r2)), t2(`<div class="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent to-black/10 dark:to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"${r2}></div>`);
  }), _: 1 }, s2)), e2(ssrRenderComponent(n2, { to: unref(Ra).linkedinLink, target: "_blank", class: "group relative p-3 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-900 text-blue-700 dark:text-blue-200 rounded-xl hover:from-blue-600 hover:to-blue-700 dark:hover:from-blue-500 dark:hover:to-blue-600 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25", "aria-label": "LinkedIn" }, { default: withCtx((a4, t2, e3, r2) => {
    if (!t2) return [createVNode(d2, { name: "fa:linkedin-square", size: "1.2em", class: "group-hover:rotate-12 transition-transform duration-300" }), createVNode("div", { class: "absolute inset-0 rounded-xl bg-gradient-to-br from-transparent to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" })];
    t2(ssrRenderComponent(d2, { name: "fa:linkedin-square", size: "1.2em", class: "group-hover:rotate-12 transition-transform duration-300" }, null, e3, r2)), t2(`<div class="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"${r2}></div>`);
  }), _: 1 }, s2)), e2(ssrRenderComponent(n2, { to: unref(Ra).twitterLink, target: "_blank", class: "group relative p-3 bg-gradient-to-br from-sky-100 to-sky-200 dark:from-sky-800 dark:to-sky-900 text-sky-700 dark:text-sky-200 rounded-xl hover:from-sky-500 hover:to-sky-600 dark:hover:from-sky-400 dark:hover:to-sky-500 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-sky-500/25", "aria-label": "Twitter" }, { default: withCtx((a4, t2, e3, r2) => {
    if (!t2) return [createVNode(d2, { name: "fa:twitter-square", size: "1.2em", class: "group-hover:rotate-12 transition-transform duration-300" }), createVNode("div", { class: "absolute inset-0 rounded-xl bg-gradient-to-br from-transparent to-sky-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" })];
    t2(ssrRenderComponent(d2, { name: "fa:twitter-square", size: "1.2em", class: "group-hover:rotate-12 transition-transform duration-300" }, null, e3, r2)), t2(`<div class="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent to-sky-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"${r2}></div>`);
  }), _: 1 }, s2)), e2(ssrRenderComponent(n2, { to: unref(Ra).stackoverflowLink, target: "_blank", class: "group relative p-3 bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-800 dark:to-orange-900 text-orange-700 dark:text-orange-200 rounded-xl hover:from-orange-500 hover:to-orange-600 dark:hover:from-orange-400 dark:hover:to-orange-500 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/25", "aria-label": "StackOverflow" }, { default: withCtx((a4, t2, e3, r2) => {
    if (!t2) return [createVNode(d2, { name: "fa:stack-overflow", size: "1.2em", class: "group-hover:rotate-12 transition-transform duration-300" }), createVNode("div", { class: "absolute inset-0 rounded-xl bg-gradient-to-br from-transparent to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" })];
    t2(ssrRenderComponent(d2, { name: "fa:stack-overflow", size: "1.2em", class: "group-hover:rotate-12 transition-transform duration-300" }, null, e3, r2)), t2(`<div class="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"${r2}></div>`);
  }), _: 1 }, s2)), e2("</div></div>");
} }), R = A.setup;
A.setup = (a2, t2) => {
  const r2 = useSSRContext();
  return (r2.modules || (r2.modules = /* @__PURE__ */ new Set())).add("components/footer/developer.vue"), R ? R(a2, t2) : void 0;
};
const U = {};
const M = U.setup;
U.setup = (a2, t2) => {
  const r2 = useSSRContext();
  return (r2.modules || (r2.modules = /* @__PURE__ */ new Set())).add("components/footer/link.vue"), M ? M(a2, t2) : void 0;
};
const L = o(U, [["ssrRender", function(a2, t2, e2, n2) {
  const d2 = st, l2 = y;
  t2(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col dark:text-zinc-300 my-5 md:my-0 md:justify-self-center" }, n2))}><div class="flex items-center gap-2 mb-4">`), t2(ssrRenderComponent(d2, { name: "heroicons:link", class: "text-primary-600 dark:text-primary-400" }, null, e2)), t2('<p class="text-black dark:text-zinc-300 text-lg font-semibold">Quick Links</p></div><div class="space-y-3">'), t2(ssrRenderComponent(l2, { to: "/", class: "group flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 hover:translate-x-1" }, { default: withCtx((a3, t3, e3, r2) => {
    if (!t3) return [createVNode(d2, { name: "heroicons:home", size: "0.9em", class: "group-hover:scale-110 transition-transform duration-300" }), createVNode("span", { class: "relative" }, [createTextVNode(" Home "), createVNode("span", { class: "absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 dark:bg-primary-400 group-hover:w-full transition-all duration-300" })])];
    t3(ssrRenderComponent(d2, { name: "heroicons:home", size: "0.9em", class: "group-hover:scale-110 transition-transform duration-300" }, null, e3, r2)), t3(`<span class="relative"${r2}> Home <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 dark:bg-primary-400 group-hover:w-full transition-all duration-300"${r2}></span></span>`);
  }), _: 1 }, e2)), t2(ssrRenderComponent(l2, { to: "/blogs", class: "group flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 hover:translate-x-1" }, { default: withCtx((a3, t3, e3, r2) => {
    if (!t3) return [createVNode(d2, { name: "heroicons:document-text", size: "0.9em", class: "group-hover:scale-110 transition-transform duration-300" }), createVNode("span", { class: "relative" }, [createTextVNode(" Blogs "), createVNode("span", { class: "absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 dark:bg-primary-400 group-hover:w-full transition-all duration-300" })])];
    t3(ssrRenderComponent(d2, { name: "heroicons:document-text", size: "0.9em", class: "group-hover:scale-110 transition-transform duration-300" }, null, e3, r2)), t3(`<span class="relative"${r2}> Blogs <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 dark:bg-primary-400 group-hover:w-full transition-all duration-300"${r2}></span></span>`);
  }), _: 1 }, e2)), t2(ssrRenderComponent(l2, { to: "/categories", class: "group flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 hover:translate-x-1" }, { default: withCtx((a3, t3, e3, r2) => {
    if (!t3) return [createVNode(d2, { name: "heroicons:tag", size: "0.9em", class: "group-hover:scale-110 transition-transform duration-300" }), createVNode("span", { class: "relative" }, [createTextVNode(" Categories "), createVNode("span", { class: "absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 dark:bg-primary-400 group-hover:w-full transition-all duration-300" })])];
    t3(ssrRenderComponent(d2, { name: "heroicons:tag", size: "0.9em", class: "group-hover:scale-110 transition-transform duration-300" }, null, e3, r2)), t3(`<span class="relative"${r2}> Categories <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 dark:bg-primary-400 group-hover:w-full transition-all duration-300"${r2}></span></span>`);
  }), _: 1 }, e2)), t2(ssrRenderComponent(l2, { to: "/about", class: "group flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 hover:translate-x-1" }, { default: withCtx((a3, t3, e3, r2) => {
    if (!t3) return [createVNode(d2, { name: "heroicons:user", size: "0.9em", class: "group-hover:scale-110 transition-transform duration-300" }), createVNode("span", { class: "relative" }, [createTextVNode(" About Me "), createVNode("span", { class: "absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 dark:bg-primary-400 group-hover:w-full transition-all duration-300" })])];
    t3(ssrRenderComponent(d2, { name: "heroicons:user", size: "0.9em", class: "group-hover:scale-110 transition-transform duration-300" }, null, e3, r2)), t3(`<span class="relative"${r2}> About Me <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 dark:bg-primary-400 group-hover:w-full transition-all duration-300"${r2}></span></span>`);
  }), _: 1 }, e2)), t2("</div></div>");
}]]), T = defineComponent({ __name: "connect", __ssrInlineRender: true, setup: (a2) => (a3, e2, r2, o2) => {
  const s2 = st;
  e2(`<div${ssrRenderAttrs(o2)}><div class="flex items-center gap-2 mb-4">`), e2(ssrRenderComponent(s2, { name: "heroicons:chat-bubble-left-right", class: "text-primary-600 dark:text-primary-400" }, null, r2)), e2(`<p class="text-black dark:text-zinc-300 text-lg font-semibold">Connect With Me</p></div><p class="dark:text-zinc-300 text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">${ssrInterpolate(unref(ya).authorInterest)}</p><a${ssrRenderAttr("href", `mailto:${unref(va).mailAddress}`)} class="group relative inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 dark:from-primary-500 dark:to-primary-600 dark:hover:from-primary-600 dark:hover:to-primary-700 text-white px-4 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25 overflow-hidden"><div class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>`), e2(ssrRenderComponent(s2, { name: "heroicons:envelope", size: "1.1em", class: "group-hover:rotate-12 transition-transform duration-300" }, null, r2)), e2('<span class="relative z-10">Send Email</span></a><div class="mt-4 text-center"><p class="text-xs text-gray-500 dark:text-gray-400">I usually respond within 24 hours</p></div></div>');
} }), P = T.setup;
T.setup = (a2, t2) => {
  const r2 = useSSRContext();
  return (r2.modules || (r2.modules = /* @__PURE__ */ new Set())).add("components/footer/connect.vue"), P ? P(a2, t2) : void 0;
};
const q = defineComponent({ __name: "footer", __ssrInlineRender: true, setup(a2) {
  const e2 = Fo(), r2 = computed(() => e2.fullPath.replace("/", ""));
  return (a3, e3, o2, i2) => {
    const n2 = st;
    e3(`<footer${ssrRenderAttrs(mergeProps({ class: "relative py-12 border-t border-gray-200/50 dark:border-gray-700/50 mt-16 text-zinc-700 dark:text-zinc-300 bg-gradient-to-t from-gray-50/80 via-gray-50/40 to-transparent dark:from-gray-900/80 dark:via-gray-900/40 overflow-hidden" }, i2))} data-v-9804d63c><div class="absolute inset-0 bg-gradient-to-br from-primary-50/20 via-transparent to-accent-50/20 dark:from-primary-900/10 dark:to-accent-900/10" data-v-9804d63c></div><div class="absolute top-0 left-1/4 w-96 h-96 bg-primary-200/10 dark:bg-primary-800/10 rounded-full blur-3xl animate-float" data-v-9804d63c></div><div class="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-200/10 dark:bg-accent-800/10 rounded-full blur-3xl animate-float-delayed" data-v-9804d63c></div><div class="relative px-6 container max-w-5xl mx-auto" data-v-9804d63c><div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12" data-v-9804d63c><div class="animate-fade-in-up" style="${ssrRenderStyle({ "animation-delay": "0.1s" })}" data-v-9804d63c>`), "about" === unref(r2) ? e3(ssrRenderComponent(C, null, null, o2)) : e3(ssrRenderComponent(A, null, null, o2)), e3(`</div><div class="animate-fade-in-up" style="${ssrRenderStyle({ "animation-delay": "0.2s" })}" data-v-9804d63c>`), e3(ssrRenderComponent(L, null, null, o2)), e3(`</div><div class="animate-fade-in-up" style="${ssrRenderStyle({ "animation-delay": "0.3s" })}" data-v-9804d63c>`), e3(ssrRenderComponent(T, null, null, o2)), e3(`</div></div><div class="border-t border-gray-200/50 dark:border-gray-700/50 pt-8 animate-fade-in-up" style="${ssrRenderStyle({ "animation-delay": "0.4s" })}" data-v-9804d63c><div class="flex flex-col lg:flex-row items-center justify-between gap-6" data-v-9804d63c><div class="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-600 dark:text-gray-400" data-v-9804d63c><div class="flex items-center gap-2" data-v-9804d63c>`), e3(ssrRenderComponent(n2, { name: "mdi:heart", class: "text-red-500 animate-pulse" }, null, o2)), e3('<span data-v-9804d63c>\xA9 2020-2024 Made with love. Who cares \u{1F937}\u200D\u2642\uFE0F?</span></div></div><div class="flex items-center gap-6" data-v-9804d63c><div class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400" data-v-9804d63c><span data-v-9804d63c>It&#39;s</span><a href="https://github.com/nurriyad/blog" target="_blank" rel="nofollow" class="group inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-all duration-300 hover:scale-105" data-v-9804d63c>'), e3(ssrRenderComponent(n2, { name: "mdi:github", class: "group-hover:rotate-12 transition-transform duration-300" }, null, o2)), e3('<span class="relative" data-v-9804d63c> open source <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 dark:bg-primary-400 group-hover:w-full transition-all duration-300" data-v-9804d63c></span></span></a><span data-v-9804d63c>anyway.</span></div><div class="h-4 w-px bg-gray-300 dark:bg-gray-600" data-v-9804d63c></div><a href="/rss.xml" aria-label="Website RSS Feed" class="group inline-flex items-center gap-2 text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-all duration-300 hover:scale-105" data-v-9804d63c>'), e3(ssrRenderComponent(n2, { name: "bi:rss-fill", class: "group-hover:animate-bounce" }, null, o2)), e3('<span class="text-sm font-medium" data-v-9804d63c>RSS</span></a></div></div><div class="flex justify-center mt-8" data-v-9804d63c><button class="group flex items-center gap-2 px-4 py-2 text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 hover:scale-105" aria-label="Back to top" data-v-9804d63c>'), e3(ssrRenderComponent(n2, { name: "heroicons:arrow-up", class: "group-hover:-translate-y-1 transition-transform duration-300" }, null, o2)), e3("<span data-v-9804d63c>Back to top</span></button></div></div></div></footer>");
  };
} }), W = q.setup;
q.setup = (a2, t2) => {
  const r2 = useSSRContext();
  return (r2.modules || (r2.modules = /* @__PURE__ */ new Set())).add("components/main/footer.vue"), W ? W(a2, t2) : void 0;
};
const D = o(q, [["__scopeId", "data-v-9804d63c"]]), E = defineComponent({ __name: "SearchBox", __ssrInlineRender: true, setup(a2) {
  const e2 = ref(""), r2 = ref([]), o2 = ref(false), i2 = ref(false);
  return (a3, n2, d2, l2) => {
    n2(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-full max-w-md" }, l2))} data-v-8446d616><div class="relative" data-v-8446d616><input${ssrRenderAttr("value", unref(e2))} type="text" placeholder="\u641C\u7D22\u535A\u5BA2\u5185\u5BB9..." class="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" data-v-8446d616><div class="absolute inset-y-0 left-0 flex items-center pl-3" data-v-8446d616><svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-8446d616><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-8446d616></path></svg></div>`), unref(e2) ? n2('<button class="absolute inset-y-0 right-0 flex items-center pr-3" data-v-8446d616><svg class="w-5 h-5 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-8446d616><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-8446d616></path></svg></button>') : n2("<!---->"), n2("</div>"), unref(o2) && unref(e2) && unref(r2).length > 0 ? (n2(`<div class="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-600 max-h-96 overflow-y-auto" data-v-8446d616><div class="p-2" data-v-8446d616><div class="text-sm text-gray-500 dark:text-gray-400 mb-2" data-v-8446d616> \u627E\u5230 ${ssrInterpolate(unref(r2).length)} \u4E2A\u7ED3\u679C </div><!--[-->`), ssrRenderList(unref(r2), (a4) => {
      var t2;
      n2(`<div class="p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-pointer border-b border-gray-100 dark:border-gray-700 last:border-b-0" data-v-8446d616><h3 class="font-semibold text-gray-900 dark:text-gray-100 mb-1" data-v-8446d616>${ssrInterpolate(a4.title)}</h3><p class="text-sm text-gray-600 dark:text-gray-400 line-clamp-2" data-v-8446d616>${ssrInterpolate(a4.description || ((a5) => {
        if (!a5) return "";
        const t3 = (a6) => "string" == typeof a6 ? a6 : Array.isArray(a6) ? a6.map(t3).join(" ") : a6 && "object" == typeof a6 && "children" in a6 ? t3(a6.children) : "", e3 = t3(a5);
        return e3.slice(0, 150) + (e3.length > 150 ? "..." : "");
      })(a4.body))}</p><div class="flex items-center mt-2 text-xs text-gray-500 dark:text-gray-400" data-v-8446d616>`), a4.category ? n2(`<span class="mr-3" data-v-8446d616>${ssrInterpolate(a4.category)}</span>`) : n2("<!---->"), a4.date ? n2(`<span data-v-8446d616>${ssrInterpolate((t2 = a4.date, new Date(t2).toLocaleDateString("zh-CN")))}</span>`) : n2("<!---->"), n2("</div></div>");
    }), n2("<!--]--></div></div>")) : n2("<!---->"), unref(o2) && unref(e2) && 0 === unref(r2).length && !unref(i2) ? n2('<div class="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-600" data-v-8446d616><div class="p-4 text-center text-gray-500 dark:text-gray-400" data-v-8446d616> \u6CA1\u6709\u627E\u5230\u76F8\u5173\u5185\u5BB9 </div></div>') : n2("<!---->"), unref(i2) ? n2('<div class="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-600" data-v-8446d616><div class="p-4 text-center text-gray-500 dark:text-gray-400" data-v-8446d616> \u641C\u7D22\u4E2D... </div></div>') : n2("<!---->"), n2("</div>");
  };
} }), H = E.setup;
E.setup = (a2, t2) => {
  const r2 = useSSRContext();
  return (r2.modules || (r2.modules = /* @__PURE__ */ new Set())).add("components/ui/SearchBox.vue"), H ? H(a2, t2) : void 0;
};
const F = o(E, [["__scopeId", "data-v-8446d616"]]), G = defineComponent({ __name: "header", __ssrInlineRender: true, setup(a2) {
  bn("color-mode").value;
  const e2 = Fo();
  function n2(a3) {
    return e2.path.startsWith(a3);
  }
  const m2 = ref(false), g2 = ref(false);
  function b2() {
    "vibrate" in void 0 && (void 0).vibrate(10);
  }
  watch(() => e2.path, () => {
    m2.value = false;
  }), ref(0), ref(0), ref(null);
  const f2 = ref(false), x2 = ref(null);
  return (a3, e3, d2, l2) => {
    const k2 = st, w2 = y, _2 = F, $2 = mn;
    e3(`<header${ssrRenderAttrs(mergeProps({ ref_key: "headerRef", ref: x2, class: ["sticky top-0 z-50 font-semibold backdrop-blur-xl border-b border-transparent min-h-[64px] transition-all duration-300 ease-out", { "bg-white/90 dark:bg-slate-900/90 shadow-xl shadow-primary-500/5 border-gray-200/30 dark:border-gray-700/30 py-2": unref(f2), "bg-gradient-to-r from-transparent via-white/5 to-transparent dark:from-transparent dark:via-slate-900/5 dark:to-transparent py-4": !unref(f2) }] }, l2))} data-v-2861df0b><div class="${ssrRenderClass([{ "opacity-100": unref(f2) }, "absolute inset-0 bg-gradient-to-r from-primary-500/5 via-transparent to-accent-500/5 opacity-0 transition-opacity duration-300 ease-out"])}" data-v-2861df0b></div><div class="flex px-4 sm:px-6 container max-w-5xl justify-between mx-auto items-center min-h-[56px]" data-v-2861df0b><div class="flex items-center space-x-3 group relative" data-v-2861df0b><div class="relative" data-v-2861df0b><div class="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl blur-sm opacity-0 group-hover:opacity-50 transition-all duration-500 scale-110" data-v-2861df0b></div><div class="relative w-10 h-10 bg-gradient-to-br from-primary-500 via-primary-600 to-accent-500 rounded-xl flex items-center justify-center animate-bounce-gentle group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg shadow-primary-500/25" data-v-2861df0b>`), e3(ssrRenderComponent(k2, { name: "mdi:code-tags", class: "text-white text-xl drop-shadow-sm" }, null, d2)), e3('<div class="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-ping" data-v-2861df0b></div></div></div>'), e3(ssrRenderComponent(w2, { to: "/", class: "text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-900 via-primary-600 to-accent-600 dark:from-white dark:via-primary-400 dark:to-accent-400 bg-clip-text text-transparent hover:scale-105 transition-all duration-500 relative group/brand" }, { default: withCtx((a4, e4, r2, s2) => {
      if (!e4) return [createTextVNode(toDisplayString(unref(ba).homeTitle) + " ", 1), createVNode("div", { class: "absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 group-hover:w-full transition-all duration-500 rounded-full" }), createVNode("div", { class: "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover/brand:opacity-100 group-hover/brand:animate-shimmer transition-opacity duration-300" })];
      e4(`${ssrInterpolate(unref(ba).homeTitle)} <div class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 group-hover:w-full transition-all duration-500 rounded-full" data-v-2861df0b${s2}></div><div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover/brand:opacity-100 group-hover/brand:animate-shimmer transition-opacity duration-300" data-v-2861df0b${s2}></div>`);
    }), _: 1 }, d2)), e3('</div><nav class="hidden md:flex items-center space-x-2 relative" data-v-2861df0b><div class="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-transparent to-accent-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" data-v-2861df0b></div><div class="relative flex items-center space-x-1 px-2 py-1 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-gray-200/30 dark:border-gray-700/30 shadow-sm" data-v-2861df0b>'), e3(ssrRenderComponent(w2, { to: "/blogs", class: ["nav-link", { "nav-link-active": n2("/blogs") }] }, { default: withCtx((a4, t2, e4, r2) => {
      if (!t2) return [createVNode(k2, { name: "mdi:book-open-variant", class: "mr-2 transition-transform duration-300 group-hover:scale-110" }), createVNode("span", null, "Blogs"), createVNode("div", { class: "nav-indicator" }), createVNode("div", { class: "absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full opacity-0 animate-pulse" })];
      t2(ssrRenderComponent(k2, { name: "mdi:book-open-variant", class: "mr-2 transition-transform duration-300 group-hover:scale-110" }, null, e4, r2)), t2(`<span data-v-2861df0b${r2}>Blogs</span><div class="nav-indicator" data-v-2861df0b${r2}></div><div class="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full opacity-0 animate-pulse" data-v-2861df0b${r2}></div>`);
    }), _: 1 }, d2)), e3(ssrRenderComponent(w2, { to: "/categories", class: ["nav-link", { "nav-link-active": n2("/categories") }] }, { default: withCtx((a4, t2, e4, r2) => {
      if (!t2) return [createVNode(k2, { name: "mdi:tag-multiple", class: "mr-2 transition-transform duration-300 group-hover:scale-110" }), createVNode("span", null, "Categories"), createVNode("div", { class: "nav-indicator" })];
      t2(ssrRenderComponent(k2, { name: "mdi:tag-multiple", class: "mr-2 transition-transform duration-300 group-hover:scale-110" }, null, e4, r2)), t2(`<span data-v-2861df0b${r2}>Categories</span><div class="nav-indicator" data-v-2861df0b${r2}></div>`);
    }), _: 1 }, d2)), e3(ssrRenderComponent(w2, { to: "/about", class: ["nav-link", { "nav-link-active": "/about" === a3.$route.path }], title: "About Me", "aria-label": "About me" }, { default: withCtx((a4, t2, e4, r2) => {
      if (!t2) return [createVNode(k2, { name: "mdi:account", class: "mr-2 transition-transform duration-300 group-hover:scale-110" }), createVNode("span", null, "About"), createVNode("div", { class: "nav-indicator" })];
      t2(ssrRenderComponent(k2, { name: "mdi:account", class: "mr-2 transition-transform duration-300 group-hover:scale-110" }, null, e4, r2)), t2(`<span data-v-2861df0b${r2}>About</span><div class="nav-indicator" data-v-2861df0b${r2}></div>`);
    }), _: 1 }, d2)), e3('</div><div class="ml-4 hidden lg:block" data-v-2861df0b>'), e3(ssrRenderComponent(_2, null, null, d2)), e3("</div>"), e3(ssrRenderComponent($2, null, { fallback: withCtx((a4, t2, e4, r2) => {
      if (!t2) return [createVNode("div", { class: "ml-6 pl-4 border-l border-gray-300/50 dark:border-gray-600/50 relative" }, [createVNode("div", { class: "theme-toggle animate-pulse w-10 h-10 flex items-center justify-center" }, [createVNode("div", { class: "w-5 h-5 bg-gray-400 rounded-full" })])])];
      t2(`<div class="ml-6 pl-4 border-l border-gray-300/50 dark:border-gray-600/50 relative" data-v-2861df0b${r2}><div class="theme-toggle animate-pulse w-10 h-10 flex items-center justify-center" data-v-2861df0b${r2}><div class="w-5 h-5 bg-gray-400 rounded-full" data-v-2861df0b${r2}></div></div></div>`);
    }) }, d2)), e3('</nav><div class="md:hidden flex items-center space-x-2" data-v-2861df0b>'), e3(ssrRenderComponent($2, null, { fallback: withCtx((a4, t2, e4, r2) => {
      if (!t2) return [createVNode("div", { class: "theme-toggle animate-pulse w-9 h-9 flex items-center justify-center" }, [createVNode("div", { class: "w-4 h-4 bg-gray-400 rounded-full" })])];
      t2(`<div class="theme-toggle animate-pulse w-9 h-9 flex items-center justify-center" data-v-2861df0b${r2}><div class="w-4 h-4 bg-gray-400 rounded-full" data-v-2861df0b${r2}></div></div>`);
    }) }, d2)), e3(`<button class="${ssrRenderClass([{ active: unref(m2), animating: unref(g2) }, "mobile-menu-button group"])}" aria-label="Toggle mobile menu" data-v-2861df0b><div class="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm scale-110" data-v-2861df0b></div><span class="hamburger-line" data-v-2861df0b></span><span class="hamburger-line" data-v-2861df0b></span><span class="hamburger-line" data-v-2861df0b></span><div class="absolute inset-0 rounded-lg bg-primary-500/10 scale-0 group-active:scale-100 transition-transform duration-200" data-v-2861df0b></div></button></div></div>`), unref(m2) ? (e3('<div class="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-gray-200/50 dark:border-gray-700/50 touch-pan-y" data-v-2861df0b><div class="flex justify-center py-2" data-v-2861df0b><div class="w-12 h-1 bg-gray-300 dark:bg-gray-600 rounded-full swipe-indicator" data-v-2861df0b></div></div><nav class="px-4 pb-4 space-y-2" data-v-2861df0b>'), e3(ssrRenderComponent(w2, { to: "/blogs", class: ["mobile-nav-link", { "mobile-nav-link-active": n2("/blogs") }], onClick: b2 }, { default: withCtx((a4, t2, e4, r2) => {
      if (!t2) return [createVNode(k2, { name: "mdi:book-open-variant", class: "mr-3" }), createVNode("span", null, "Blogs"), createVNode(k2, { name: "heroicons:chevron-right", class: "ml-auto opacity-50", size: "16" })];
      t2(ssrRenderComponent(k2, { name: "mdi:book-open-variant", class: "mr-3" }, null, e4, r2)), t2(`<span data-v-2861df0b${r2}>Blogs</span>`), t2(ssrRenderComponent(k2, { name: "heroicons:chevron-right", class: "ml-auto opacity-50", size: "16" }, null, e4, r2));
    }), _: 1 }, d2)), e3(ssrRenderComponent(w2, { to: "/categories", class: ["mobile-nav-link", { "mobile-nav-link-active": n2("/categories") }], onClick: b2 }, { default: withCtx((a4, t2, e4, r2) => {
      if (!t2) return [createVNode(k2, { name: "mdi:tag-multiple", class: "mr-3" }), createVNode("span", null, "Categories"), createVNode(k2, { name: "heroicons:chevron-right", class: "ml-auto opacity-50", size: "16" })];
      t2(ssrRenderComponent(k2, { name: "mdi:tag-multiple", class: "mr-3" }, null, e4, r2)), t2(`<span data-v-2861df0b${r2}>Categories</span>`), t2(ssrRenderComponent(k2, { name: "heroicons:chevron-right", class: "ml-auto opacity-50", size: "16" }, null, e4, r2));
    }), _: 1 }, d2)), e3(ssrRenderComponent(w2, { to: "/about", class: ["mobile-nav-link", { "mobile-nav-link-active": "/about" === a3.$route.path }], onClick: b2 }, { default: withCtx((a4, t2, e4, r2) => {
      if (!t2) return [createVNode(k2, { name: "mdi:account", class: "mr-3" }), createVNode("span", null, "About"), createVNode(k2, { name: "heroicons:chevron-right", class: "ml-auto opacity-50", size: "16" })];
      t2(ssrRenderComponent(k2, { name: "mdi:account", class: "mr-3" }, null, e4, r2)), t2(`<span data-v-2861df0b${r2}>About</span>`), t2(ssrRenderComponent(k2, { name: "heroicons:chevron-right", class: "ml-auto opacity-50", size: "16" }, null, e4, r2));
    }), _: 1 }, d2)), e3('</nav><div class="px-4 pb-4" data-v-2861df0b><button class="w-full py-3 text-center text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-200 border-t border-gray-200 dark:border-gray-700" data-v-2861df0b>'), e3(ssrRenderComponent(k2, { name: "heroicons:x-mark", class: "mx-auto", size: "20" }, null, d2)), e3("</button></div></div>")) : e3("<!---->"), e3("</header>");
  };
} }), J = G.setup;
G.setup = (a2, t2) => {
  const r2 = useSSRContext();
  return (r2.modules || (r2.modules = /* @__PURE__ */ new Set())).add("components/main/header.vue"), J ? J(a2, t2) : void 0;
};
const N = o(G, [["__scopeId", "data-v-2861df0b"]]), O = defineComponent({ __name: "ScrollProgress", __ssrInlineRender: true, setup(a2) {
  const t2 = ref(0), e2 = ref(false);
  return (a3, r2, o2, s2) => {
    const i2 = st;
    r2(`<!--[--><div class="fixed top-0 left-0 right-0 z-[60] pointer-events-none" data-v-978d1563><div class="h-1 bg-gradient-to-r from-primary-500 via-primary-600 to-accent-500 transition-all duration-300 ease-out shadow-lg shadow-primary-500/20" style="${ssrRenderStyle({ width: `${t2.value}%` })}" data-v-978d1563><div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" data-v-978d1563></div></div></div>`), e2.value ? (r2(`<div class="fixed bottom-8 right-8 z-40 pointer-events-auto" data-v-978d1563><button class="group relative w-14 h-14 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 border border-gray-200 dark:border-gray-700 touch-manipulation no-transition" aria-label="Back to top" data-v-978d1563><svg class="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 56 56" data-v-978d1563><circle cx="28" cy="28" r="24" stroke="currentColor" stroke-width="2" fill="none" class="text-gray-200 dark:text-gray-600" data-v-978d1563></circle><circle cx="28" cy="28" r="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" class="text-primary-600 dark:text-primary-400 transition-all duration-300"${ssrRenderAttr("stroke-dasharray", "" + 2 * Math.PI * 24)}${ssrRenderAttr("stroke-dashoffset", "" + 2 * Math.PI * 24 * (1 - t2.value / 100))} data-v-978d1563></circle></svg><div class="absolute inset-0 flex items-center justify-center" data-v-978d1563>`), r2(ssrRenderComponent(i2, { name: "heroicons:arrow-up", class: "w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 group-hover:-translate-y-0.5 transition-all duration-300" }, null, o2)), r2('</div><div class="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500/0 to-primary-600/0 group-hover:from-primary-500/10 group-hover:to-primary-600/20 transition-all duration-300" data-v-978d1563></div></button></div>')) : r2("<!---->"), r2("<!--]-->");
  };
} }), Q = O.setup;
O.setup = (a2, t2) => {
  const r2 = useSSRContext();
  return (r2.modules || (r2.modules = /* @__PURE__ */ new Set())).add("components/ui/ScrollProgress.vue"), Q ? Q(a2, t2) : void 0;
};
const K = o(O, [["__scopeId", "data-v-978d1563"]]), V = defineComponent({ __name: "default", __ssrInlineRender: true, setup: (a2) => (a3, t2, e2, r2) => {
  t2(`<div${ssrRenderAttrs(mergeProps({ class: "gd-container font-spacegrotesk" }, r2))} data-v-8f531bdf>`), t2(ssrRenderComponent(K, null, null, e2)), t2(ssrRenderComponent(N, null, null, e2)), t2('<main class="animate-fade-in relative min-h-screen" data-v-8f531bdf>'), ssrRenderSlot(a3.$slots, "default", {}, null, t2, e2), t2("</main>"), t2(ssrRenderComponent(D, { class: "animate-slide-up" }, null, e2)), t2("</div>");
} }), X = V.setup;
V.setup = (a2, t2) => {
  const r2 = useSSRContext();
  return (r2.modules || (r2.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue"), X ? X(a2, t2) : void 0;
};
const Y = o(V, [["__scopeId", "data-v-8f531bdf"]]);

export { Y as default };
//# sourceMappingURL=default-CyAFnj5n.mjs.map
