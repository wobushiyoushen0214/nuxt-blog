import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';

const o = defineComponent({ __name: "WithEmoji", __ssrInlineRender: true, props: { emoji: { default: "\u{1F44B}" }, title: { default: "title" } }, setup: (e2) => (e3, s2, o2, m2) => {
  s2(`<div${ssrRenderAttrs(mergeProps({ class: "h-full w-full flex items-start justify-start bg-sky-50" }, m2))}><div class="flex items-start justify-start h-full"><div class="flex flex-col justify-center items-center px-20 w-full h-full text-center"><p class="text-[120px] mx-auto text-center font-bold mb-0">${ssrInterpolate(e3.emoji)}</p><h1 class="text-[60px] font-bold">${ssrInterpolate(e3.title)}</h1></div></div></div>`);
} }), m = o.setup;
o.setup = (e2, t2) => {
  const i2 = useSSRContext();
  return (i2.modules || (i2.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/nuxt-og-image@3.1.1_magicast@0.3.5_vite@7.1.5_@types+node@24.5.2_jiti@2.5.1_terser@5.44.0_yam_ltu4iau3m3ajkz62ipdgf2zmw4/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/WithEmoji.vue"), m ? m(e2, t2) : void 0;
};

export { o as default };
//# sourceMappingURL=WithEmoji-CJMAzcxF.mjs.map
