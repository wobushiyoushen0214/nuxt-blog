import { I } from './NuxtImg-BwE8PT3p.mjs';
import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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

const p = defineComponent({ __name: "Test", __ssrInlineRender: true, props: { title: { default: "title" }, description: { default: "description" }, headline: { default: "headline" }, link: { default: "" } }, setup(t2) {
  const l2 = t2, p2 = computed(() => l2.title.length > 70 ? `${l2.title.slice(0, 60)}...` : l2.title), m2 = computed(() => l2.description.length > 100 ? `${l2.description}...` : l2.description), u = computed(() => l2.link.endsWith("jpg") || l2.link.endsWith("png") ? l2.link : "/blogs-img/blog.jpg");
  return (t3, o2, l3, a) => {
    const x = I;
    o2(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-full flex flex-col justify-center bg-[#020420]" }, a))}><svg class="absolute right-0 top-0" width="629" height="593" viewBox="0 0 629 593" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_f_199_94966)"><path d="M628.5 -578L639.334 -94.4223L806.598 -548.281L659.827 -87.387L965.396 -462.344L676.925 -74.0787L1087.69 -329.501L688.776 -55.9396L1160.22 -164.149L694.095 -34.9354L1175.13 15.7948L692.306 -13.3422L1130.8 190.83L683.602 6.50012L1032.04 341.989L668.927 22.4412L889.557 452.891L649.872 32.7537L718.78 511.519L628.5 36.32L538.22 511.519L607.128 32.7537L367.443 452.891L588.073 22.4412L224.955 341.989L573.398 6.50012L126.198 190.83L564.694 -13.3422L81.8734 15.7948L562.905 -34.9354L96.7839 -164.149L568.224 -55.9396L169.314 -329.501L580.075 -74.0787L291.604 -462.344L597.173 -87.387L450.402 -548.281L617.666 -94.4223L628.5 -578Z" fill="#00DC82"></path></g><defs><filter id="filter0_f_199_94966" x="0.873535" y="-659" width="1255.25" height="1251.52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="40.5" result="effect1_foregroundBlur_199_94966"></feGaussianBlur></filter></defs></svg><div class="w-[600px] pl-[100px]">`), t3.headline ? o2(`<p class="uppercase text-[24px] text-[#00DC82] mb-4 font-semibold">${ssrInterpolate(t3.headline)}</p>`) : o2("<!---->"), o2(`<h1 class="w-[600px] m-0 text-[40px] font-semibold mb-4 text-white flex items-center"><span>${ssrInterpolate(unref(p2))}</span></h1><p class="text-[25px] text-[#E4E4E7] leading-tight">${ssrInterpolate(unref(m2))}</p></div>`), unref(u) ? (o2('<div class="absolute top-[200px] right-[70px]">'), o2(ssrRenderComponent(x, { src: unref(u), alt: t3.title, width: "384", height: "208", quality: "80", format: "webp", class: "w-96 h-52 rounded-lg object-cover" }, null, l3)), o2("</div>")) : o2("<!---->"), o2("</div>");
  };
} }), m = p.setup;
p.setup = (e2, t2) => {
  const o2 = useSSRContext();
  return (o2.modules || (o2.modules = /* @__PURE__ */ new Set())).add("components/OgImage/Test.vue"), m ? m(e2, t2) : void 0;
};

export { p as default };
//# sourceMappingURL=Test-B5W8rhUj.mjs.map
