import { defineComponent, withAsyncContext, computed, readonly, resolveComponent, unref, withCtx, createVNode, toDisplayString, ref, mergeProps, h, resolveDynamicComponent, watch, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderClass, ssrRenderAttr, ssrRenderVNode } from 'vue/server-renderer';
import { o } from './_plugin-vue_export-helper-BCo6x5W8.mjs';
import { I } from './NuxtImg-BwE8PT3p.mjs';
import { y } from './nuxt-link-2_lwc315.mjs';
import s from './ContentRenderer-DIi8jEVC.mjs';
import { e as Fo, k as No, j as Bo, u as pn, g as qo } from './server.mjs';
import { D as D$1, G } from './query-CP_2cPQU.mjs';
import { e } from './defineOgImageComponent-5IndG7OM.mjs';
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
import './ContentRendererMarkdown-CTTcWJeL.mjs';
import './node-Co_CclnQ.mjs';
import './preview-BhsI3sP2.mjs';
import 'node:zlib';
import 'node:stream';
import 'node:util';
import 'node:net';
import 'vue-router';
import 'perfect-debounce';
import './defineOgImage-BeQ-484b.mjs';

const A = defineComponent({ __name: "ReadingProgress", __ssrInlineRender: true, props: { showCircular: { type: Boolean, default: false }, color: { default: "#3b82f6" }, threshold: { default: 100 }, target: { default: ".prose" } }, setup(e2, { expose: r2 }) {
  const n2 = ref(0), l2 = ref(false), d2 = ref(false), c2 = 2 * Math.PI * 26, p2 = computed(() => c2 - n2.value / 100 * c2);
  return r2({ progress: readonly(n2) }), (e3, t2, o2, a2) => {
    const r3 = { style: { ":--5b8f2550": e3.color } };
    unref(l2) ? (t2(`<div${ssrRenderAttrs(mergeProps({ class: ["reading-progress-container", { visible: unref(d2) }] }, a2, r3))} data-v-02e15936><div class="reading-progress-bar" style="${ssrRenderStyle({ width: `${unref(n2)}%` })}" data-v-02e15936></div>`), e3.showCircular ? t2(`<div class="${ssrRenderClass([{ show: unref(d2) }, "reading-progress-circular"])}" data-v-02e15936><svg class="progress-ring" width="60" height="60" data-v-02e15936><circle class="progress-ring-background" cx="30" cy="30" r="26" data-v-02e15936></circle><circle class="progress-ring-progress" cx="30" cy="30" r="26"${ssrRenderAttr("stroke-dasharray", c2)}${ssrRenderAttr("stroke-dashoffset", unref(p2))} data-v-02e15936></circle></svg><div class="progress-percentage" data-v-02e15936>${ssrInterpolate(Math.round(unref(n2)))}% </div></div>`) : t2("<!---->"), t2("</div>")) : t2("<!---->");
  };
} }), S = A.setup;
A.setup = (e2, t2) => {
  const o2 = useSSRContext();
  return (o2.modules || (o2.modules = /* @__PURE__ */ new Set())).add("components/ui/ReadingProgress.vue"), S ? S(e2, t2) : void 0;
};
const H = o(A, [["__scopeId", "data-v-02e15936"]]), V = defineComponent({ __name: "BlogHeader", __ssrInlineRender: true, props: { title: { default: "no-title" }, image: { default: "#" }, alt: { default: "no-img" }, description: { default: "no description" }, date: { default: "no-date" }, tags: { default: () => [] } }, setup: (e2) => (e3, t2, o2, a2) => {
  const i2 = I, s2 = resolveComponent("LogoDate"), r2 = resolveComponent("LogoTag"), p2 = y;
  t2(`<header${ssrRenderAttrs(a2)}><h1 class="text-xl dark:text-zinc-300 md:text-3xl lg:text-4xl m-7 font-bold text-center">${ssrInterpolate(e3.title || "")}</h1>`), t2(ssrRenderComponent(i2, { src: e3.image || "", alt: e3.alt || "", width: "600", class: "m-auto rounded-2xl shadow-lg h-32 md:h-72 w-4/6 md:w-4/5 content-center object-cover" }, null, o2)), t2(`<p class="text-xs sm:text-sm my-3 max-w-xl mx-auto text-center text-zinc-600 dark:text-zinc-400">${ssrInterpolate(e3.description)}</p><div class="flex w-full justify-center text-xs md:text-base my-8"><div class="md:flex text-black dark:text-zinc-300 content-center gap-8 text-xs sm:text-sm"><div class="flex items-center font-semibold">`), t2(ssrRenderComponent(s2, null, null, o2)), t2(`<p>${ssrInterpolate(e3.date || "")}</p></div><div class="flex items-center gap-2 flex-wrap my-5">`), t2(ssrRenderComponent(r2, null, null, o2)), t2("<!--[-->"), ssrRenderList(e3.tags, (e4) => {
    t2(ssrRenderComponent(p2, { to: `/categories/${(e4 == null ? void 0 : e4.toLocaleLowerCase()) || ""}` }, { default: withCtx((t3, o3, a3, i3) => {
      if (!o3) return [createVNode("span", { class: "bg-gray-200 dark:bg-slate-900 rounded-md px-2 py-1 font-semibold hover:bg-gray-300 dark:hover:bg-slate-800 transition-colors duration-200" }, toDisplayString(e4), 1)];
      o3(`<span class="bg-gray-200 dark:bg-slate-900 rounded-md px-2 py-1 font-semibold hover:bg-gray-300 dark:hover:bg-slate-800 transition-colors duration-200"${i3}>${ssrInterpolate(e4)}</span>`);
    }), _: 2 }, o2));
  }), t2("<!--]--></div></div></div></header>");
} }), N = V.setup;
V.setup = (e2, t2) => {
  const o2 = useSSRContext();
  return (o2.modules || (o2.modules = /* @__PURE__ */ new Set())).add("components/blog/BlogHeader.vue"), N ? N(e2, t2) : void 0;
};
const q = defineComponent({ __name: "SocialShare", __ssrInlineRender: true, props: { url: { default: "" }, shareTitle: { default: "" }, description: { default: "" }, hashtags: { default: () => [] }, platforms: { default: () => ["twitter", "facebook", "linkedin", "weibo", "wechat"] }, showTitle: { type: Boolean, default: true }, title: { default: "\u5206\u4EAB\u5230" }, showLabels: { type: Boolean, default: true }, layout: { default: "horizontal" }, showCopyLink: { type: Boolean, default: true }, size: { default: "medium" } }, setup(e2) {
  const a2 = e2, r2 = Fo(), n2 = ref(false), l2 = computed(() => a2.url ? a2.url : `https://yourdomain.com${r2.fullPath}`);
  computed(() => ({ url: l2.value, title: a2.shareTitle || "", description: a2.description || "", hashtags: a2.hashtags }));
  const c2 = () => h("svg", { viewBox: "0 0 24 24", fill: "currentColor" }, [h("path", { d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" })]), m2 = () => h("svg", { viewBox: "0 0 24 24", fill: "currentColor" }, [h("path", { d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" })]), g2 = [{ name: "twitter", label: "Twitter", color: "#1DA1F2", icon: () => h("svg", { viewBox: "0 0 24 24", fill: "currentColor" }, [h("path", { d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" })]), url: (e3) => {
    var _a;
    const t2 = `${e3.title} ${((_a = e3.hashtags) == null ? void 0 : _a.map((e4) => `#${e4}`).join(" ")) || ""}`;
    return `https://twitter.com/intent/tweet?text=${encodeURIComponent(t2)}&url=${encodeURIComponent(e3.url)}`;
  } }, { name: "facebook", label: "Facebook", color: "#4267B2", icon: () => h("svg", { viewBox: "0 0 24 24", fill: "currentColor" }, [h("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" })]), url: (e3) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(e3.url)}` }, { name: "linkedin", label: "LinkedIn", color: "#0077B5", icon: () => h("svg", { viewBox: "0 0 24 24", fill: "currentColor" }, [h("path", { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" })]), url: (e3) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(e3.url)}` }, { name: "weibo", label: "\u5FAE\u535A", color: "#E6162D", icon: () => h("svg", { viewBox: "0 0 24 24", fill: "currentColor" }, [h("path", { d: "M10.098 20.323c-3.977.391-7.414-1.406-7.672-4.02-.259-2.609 2.759-5.047 6.74-5.441 3.979-.394 7.413 1.404 7.671 4.018.259 2.6-2.759 5.049-6.739 5.443zm8.717-8.922c-.332-.066-.562-.132-.384-.475.384-.723.424-1.349.125-1.798-.559-.84-2.095-.795-3.863-.026 0 0-.554.246-.413-.199.27-.891.23-1.638-.158-2.067-.887-.982-3.245.037-5.273 2.277-1.519 1.678-2.406 3.445-2.406 4.976 0 2.952 3.771 4.746 7.466 4.746 4.84 0 8.067-2.807 8.067-5.042 0-1.349-1.138-2.119-2.161-2.392z" })]), url: (e3) => `https://service.weibo.com/share/share.php?url=${encodeURIComponent(e3.url)}&title=${encodeURIComponent(e3.title)}` }, { name: "wechat", label: "\u5FAE\u4FE1", color: "#07C160", icon: () => h("svg", { viewBox: "0 0 24 24", fill: "currentColor" }, [h("path", { d: "M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18 0 .659-.52 1.188-1.162 1.188-.642 0-1.162-.529-1.162-1.188 0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18 0 .659-.52 1.188-1.162 1.188-.642 0-1.162-.529-1.162-1.188 0-.651.52-1.18 1.162-1.18zm7.278 5.135c-3.558 0-6.407 2.351-6.407 5.244 0 2.893 2.849 5.244 6.407 5.244a7.788 7.788 0 002.186-.31c.19-.054.41-.027.567.068l1.462.853a.235.235 0 00.121.04.214.214 0 00.210-.214c0-.053-.021-.105-.035-.158l-.3-1.073a.427.427 0 01.154-.482c1.408-1.033 2.272-2.568 2.272-4.244 0-2.893-2.849-5.244-6.407-5.244l-.23.002zm-2.502 2.985c.46 0 .833.382.833.853 0 .47-.373.852-.833.852s-.833-.382-.833-.852c0-.471.373-.853.833-.853zm5.005 0c.46 0 .833.382.833.853 0 .47-.373.852-.833.852s-.833-.382-.833-.852c0-.471.373-.853.833-.853z" })]), url: (e3) => `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(e3.url)}` }], f2 = computed(() => g2.filter((e3) => a2.platforms.includes(e3.name))), z2 = computed(() => ({ "layout-horizontal": "horizontal" === a2.layout, "layout-vertical": "vertical" === a2.layout, "layout-grid": "grid" === a2.layout, [`size-${a2.size}`]: true }));
  return (e3, t2, o2, a3) => {
    t2(`<div${ssrRenderAttrs(mergeProps({ class: "social-share" }, a3))} data-v-716eaa8f>`), e3.showTitle ? t2(`<h3 class="share-title" data-v-716eaa8f>${ssrInterpolate(e3.title)}</h3>`) : t2("<!---->"), t2(`<div class="${ssrRenderClass([unref(z2), "share-buttons"])}" data-v-716eaa8f><!--[-->`), ssrRenderList(unref(f2), (a4) => {
      t2(`<button class="${ssrRenderClass(["share-button", `share-${a4.name}`, { "with-label": e3.showLabels }])}" style="${ssrRenderStyle({ backgroundColor: a4.color })}" data-v-716eaa8f>`), ssrRenderVNode(t2, createVNode(resolveDynamicComponent(a4.icon), { class: "share-icon" }, null), o2), e3.showLabels ? t2(`<span class="share-label" data-v-716eaa8f>${ssrInterpolate(a4.label)}</span>`) : t2("<!---->"), t2("</button>");
    }), t2("<!--]-->"), e3.showCopyLink ? (t2(`<button class="${ssrRenderClass(["share-button share-copy", { "with-label": e3.showLabels, copied: unref(n2) }])}" data-v-716eaa8f>`), unref(n2) ? t2(ssrRenderComponent(m2, { class: "share-icon" }, null, o2)) : t2(ssrRenderComponent(c2, { class: "share-icon" }, null, o2)), e3.showLabels ? t2(`<span class="share-label" data-v-716eaa8f>${ssrInterpolate(unref(n2) ? "\u5DF2\u590D\u5236" : "\u590D\u5236\u94FE\u63A5")}</span>`) : t2("<!---->"), t2("</button>")) : t2("<!---->"), t2("</div></div>");
  };
} }), W = q.setup;
q.setup = (e2, t2) => {
  const o2 = useSSRContext();
  return (o2.modules || (o2.modules = /* @__PURE__ */ new Set())).add("components/ui/SocialShare.vue"), W ? W(e2, t2) : void 0;
};
const D = o(q, [["__scopeId", "data-v-716eaa8f"]]), O = defineComponent({ __name: "Comments", __ssrInlineRender: true, props: { identifier: { default: "" }, title: { default: "" }, theme: { default: "auto" }, enabled: { type: Boolean, default: true } }, setup(e2) {
  const a2 = e2, r2 = ref(), n2 = ref(false), { $colorMode: l2 } = qo(), d2 = "your-username/your-repo", c2 = "your-repo-id", p2 = "General", u2 = "your-category-id", g2 = "pathname", v2 = "0", x2 = "1", f2 = "0", b2 = "bottom", w2 = "zh-CN", y2 = "lazy", _2 = computed(() => "auto" === a2.theme ? "dark" === (l2 == null ? void 0 : l2.value) ? "dark" : "light" : a2.theme);
  return watch(_2, () => {
    n2.value ? (() => {
      var _a, _b;
      if (!n2.value) return;
      const e3 = (_a = r2.value) == null ? void 0 : _a.querySelector("iframe");
      if (e3) {
        const t2 = { type: "set-theme", theme: _2.value };
        (_b = e3.contentWindow) == null ? void 0 : _b.postMessage({ giscus: t2 }, "https://giscus.app");
      }
    })() : (() => {
      if (!a2.enabled || !r2.value) return;
      r2.value.innerHTML = "";
      const e3 = (void 0).createElement("script");
      e3.src = "https://giscus.app/client.js", e3.setAttribute("data-repo", d2), e3.setAttribute("data-repo-id", c2), e3.setAttribute("data-category", p2), e3.setAttribute("data-category-id", u2), e3.setAttribute("data-mapping", g2), e3.setAttribute("data-strict", v2), e3.setAttribute("data-reactions-enabled", x2), e3.setAttribute("data-emit-metadata", f2), e3.setAttribute("data-input-position", b2), e3.setAttribute("data-theme", _2.value), e3.setAttribute("data-lang", w2), e3.setAttribute("data-loading", y2), e3.crossOrigin = "anonymous", e3.async = true, e3.onload = () => {
        n2.value = true;
      }, e3.onerror = () => {
        n2.value = false;
      }, r2.value.appendChild(e3);
    })();
  }), (e3, t2, o2, a3) => {
    t2(`<div${ssrRenderAttrs(mergeProps({ class: "comments-section mt-12 pt-8 border-t border-gray-200 dark:border-gray-700" }, a3))} data-v-8a239115><h3 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white" data-v-8a239115> \u8BC4\u8BBA </h3><div class="giscus-container" data-v-8a239115></div>`), unref(n2) ? t2("<!---->") : t2('<div class="fallback-comments" data-v-8a239115><div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6" data-v-8a239115><p class="text-gray-600 dark:text-gray-400 text-center" data-v-8a239115> \u8BC4\u8BBA\u7CFB\u7EDF\u6B63\u5728\u52A0\u8F7D\u4E2D... </p><p class="text-sm text-gray-500 dark:text-gray-500 text-center mt-2" data-v-8a239115> \u5982\u679C\u957F\u65F6\u95F4\u672A\u52A0\u8F7D\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5\u6216\u5237\u65B0\u9875\u9762 </p></div></div>'), t2("</div>");
  };
} }), P = O.setup;
O.setup = (e2, t2) => {
  const o2 = useSSRContext();
  return (o2.modules || (o2.modules = /* @__PURE__ */ new Set())).add("components/ui/Comments.vue"), P ? P(e2, t2) : void 0;
};
const Z = o(O, [["__scopeId", "data-v-8a239115"]]), F = defineComponent({ __name: "[blog]", __ssrInlineRender: true, async setup(e2) {
  var _a, _b, _c;
  let t2, s2;
  const { path: r2 } = Fo(), { data: c2, error: p2 } = ([t2, s2] = withAsyncContext(async () => D$1(`blog-post-${r2}`, async () => await G(r2).findOne())), t2 = await t2, s2(), t2);
  p2.value && No("/404");
  const u2 = computed(() => {
    var _a2, _b2, _c2;
    const e3 = (_a2 = c2 == null ? void 0 : c2.value) == null ? void 0 : _a2.meta;
    return { title: ((_b2 = c2.value) == null ? void 0 : _b2.title) || "no-title available", description: ((_c2 = c2.value) == null ? void 0 : _c2.description) || "no-description available", image: (e3 == null ? void 0 : e3.image) || "/not-found.jpg", alt: (e3 == null ? void 0 : e3.alt) || "no alter data available", ogImage: (e3 == null ? void 0 : e3.ogImage) || "/not-found.jpg", date: (e3 == null ? void 0 : e3.date) || "not-date-available", tags: (e3 == null ? void 0 : e3.tags) || [], published: (e3 == null ? void 0 : e3.published) || false };
  });
  return ((e3 = {}) => {
    var _a2, _b2;
    const t3 = Fo(), i2 = Bo().public.siteUrl || "https://your-domain.com", s3 = "LiZhiWei Blog", r3 = computed(() => {
      const o2 = e3.url || `${i2}${t3.path}`;
      return { title: e3.title ? `${e3.title} | ${s3}` : s3, description: e3.description || "\u5206\u4EAB\u6280\u672F\u3001\u601D\u8003\u548C\u751F\u6D3B\u7684\u4E2A\u4EBA\u535A\u5BA2\uFF0C\u4E13\u6CE8\u4E8E\u524D\u7AEF\u5F00\u53D1\u3001Vue.js\u3001Nuxt.js\u7B49\u6280\u672F\u5206\u4EAB", image: e3.image ? `${i2}${e3.image}` : `${i2}/preview1.png`, url: o2, type: e3.type || "website", author: e3.author, publishedTime: e3.publishedTime, modifiedTime: e3.modifiedTime, tags: e3.tags, category: e3.category };
    });
    pn({ title: r3.value.title, meta: [{ name: "description", content: r3.value.description }, { name: "keywords", content: ((_a2 = r3.value.tags) == null ? void 0 : _a2.join(", ")) || "blog, \u6280\u672F, \u524D\u7AEF, Vue.js, Nuxt.js" }, { name: "author", content: r3.value.author || "LiZhiWei" }, { property: "og:title", content: r3.value.title }, { property: "og:description", content: r3.value.description }, { property: "og:image", content: r3.value.image }, { property: "og:url", content: r3.value.url }, { property: "og:type", content: "article" === r3.value.type ? "article" : "website" }, { property: "og:site_name", content: s3 }, { property: "og:locale", content: "zh_CN" }, { name: "twitter:card", content: "summary_large_image" }, { name: "twitter:title", content: r3.value.title }, { name: "twitter:description", content: r3.value.description }, { name: "twitter:image", content: r3.value.image }, { name: "twitter:site", content: "@your_twitter" }, { name: "twitter:creator", content: "@your_twitter" }, ..."article" === r3.value.type && r3.value.publishedTime ? [{ property: "article:published_time", content: r3.value.publishedTime }, { property: "article:modified_time", content: r3.value.modifiedTime || r3.value.publishedTime }, { property: "article:author", content: r3.value.author || "LiZhiWei" }, { property: "article:section", content: r3.value.category || "Technology" }, ...((_b2 = r3.value.tags) == null ? void 0 : _b2.map((e4) => ({ property: "article:tag", content: e4 }))) || []] : [], { name: "robots", content: e3.noIndex ? "noindex, nofollow" : "index, follow" }, { name: "googlebot", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" }, { name: "viewport", content: "width=device-width, initial-scale=1.0" }, { name: "format-detection", content: "telephone=no" }, { name: "theme-color", content: "#3b82f6" }, { name: "msapplication-TileColor", content: "#3b82f6" }, { name: "language", content: "zh-CN" }, { name: "geo.region", content: "CN" }, { name: "geo.country", content: "China" }], link: [{ rel: "canonical", href: e3.canonical || r3.value.url }, { rel: "preconnect", href: "https://fonts.googleapis.com" }, { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }, { rel: "alternate", type: "application/rss+xml", title: `${s3} RSS Feed`, href: `${i2}/rss.xml` }, { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }, { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }, { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }, { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" }, { rel: "manifest", href: "/site.webmanifest" }], script: [] }), readonly(r3);
  })({ title: u2.value.title, description: u2.value.description, image: u2.value.image, type: "article", author: "LiZhiWei", publishedTime: u2.value.date, tags: u2.value.tags, category: (_a = u2.value.tags) == null ? void 0 : _a[0] }), e("Test", { headline: "Riyads Blog \u{1F44B}", title: ((_b = c2.value) == null ? void 0 : _b.seo.title) || "", description: ((_c = c2.value) == null ? void 0 : _c.seo.description) || "", link: u2.value.ogImage }), (e3, t3, o2, a2) => {
    const s3 = H, p3 = resolveComponent("UiStructuredData"), m2 = V, g2 = s, v2 = D, x2 = Z, f2 = resolveComponent("BlogToc");
    t3(`<div${ssrRenderAttrs(a2)}>`), t3(ssrRenderComponent(s3, { "show-circular": true, target: ".prose" }, null, o2)), t3(ssrRenderComponent(p3, { title: unref(u2).title, description: unref(u2).description, image: unref(u2).image, date: unref(u2).date, author: "Riyad", tags: unref(u2).tags, type: "article" }, null, o2)), t3('<div class="px-6 container max-w-5xl mx-auto sm:grid grid-cols-12 gap-x-12"><div class="col-span-12 lg:col-span-9">'), t3(ssrRenderComponent(m2, { title: unref(u2).title, image: unref(u2).image, alt: unref(u2).alt, date: unref(u2).date, description: unref(u2).description, tags: unref(u2).tags }, null, o2)), t3('<div class="prose prose-pre:max-w-xs sm:prose-pre:max-w-full prose-sm sm:prose-base md:prose-lg prose-h1:no-underline max-w-5xl mx-auto prose-zinc dark:prose-invert prose-img:rounded-lg">'), unref(c2) ? t3(ssrRenderComponent(g2, { value: unref(c2) }, { empty: withCtx((e4, t4, o3, a3) => {
      if (!t4) return [createVNode("p", null, "No content found.")];
      t4(`<p${a3}>No content found.</p>`);
    }), _: 1 }, o2)) : t3("<!---->"), t3("</div>"), t3(ssrRenderComponent(v2, { "share-title": unref(u2).title, description: unref(u2).description, hashtags: unref(u2).tags, platforms: ["twitter", "facebook", "linkedin", "weibo"], layout: "horizontal", size: "medium" }, null, o2)), t3(ssrRenderComponent(x2, { identifier: unref(r2), title: unref(u2).title }, null, o2)), t3("</div>"), t3(ssrRenderComponent(f2, null, null, o2)), t3('<div class="flex flex-row flex-wrap md:flex-nowrap mt-10 gap-2"></div></div></div>');
  };
} }), E = F.setup;
F.setup = (e2, t2) => {
  const o2 = useSSRContext();
  return (o2.modules || (o2.modules = /* @__PURE__ */ new Set())).add("pages/blogs/[blog].vue"), E ? E(e2, t2) : void 0;
};

export { F as default };
//# sourceMappingURL=_blog_-vbB54Z49.mjs.map
