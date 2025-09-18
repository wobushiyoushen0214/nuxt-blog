import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';

const d = defineComponent({ __name: "BrandedLogo", __ssrInlineRender: true, props: { title: { default: "title" }, logo: { default: "https://nuxt.com/assets/design-kit/logo-white.png" } }, setup: (e2) => (e3, s2, d2, a2) => {
  s2(`<div${ssrRenderAttrs(mergeProps({ style: { backgroundImage: "linear-gradient(to right, #24243e, #302b63, #0f0c29)" }, class: "h-full w-full flex items-start justify-start" }, a2))}><div class="flex items-start justify-start h-full"><div class="flex flex-col justify-between w-full h-full p-20"><img${ssrRenderAttr("src", e3.logo)} height="50"><h1 class="text-[60px] text-white font-bold text-left">${ssrInterpolate(e3.title)}</h1></div></div></div>`);
} }), a = d.setup;
d.setup = (e2, t2) => {
  const l2 = useSSRContext();
  return (l2.modules || (l2.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/nuxt-og-image@3.1.1_magicast@0.3.5_vite@7.1.5_@types+node@24.5.2_jiti@2.5.1_terser@5.44.0_yam_ltu4iau3m3ajkz62ipdgf2zmw4/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/BrandedLogo.vue"), a ? a(e2, t2) : void 0;
};

export { d as default };
//# sourceMappingURL=BrandedLogo-C9SVd7XC.mjs.map
