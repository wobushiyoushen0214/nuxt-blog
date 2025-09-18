import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { o } from './_plugin-vue_export-helper-BCo6x5W8.mjs';

const s = {};
const r = s.setup;
s.setup = (e2, t2) => {
  const n2 = useSSRContext();
  return (n2.modules || (n2.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.2_better-sqlite3@11.10.0__ioredis@5.7.0_magicast@0.3.5_nuxt@3.19_tgmucp5mnjxr6stacpzu2ww3pi/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue"), r ? r(e2, t2) : void 0;
};
const u = o(s, [["ssrRender", function(o2, n2, s2, r2) {
  n2(`<code${ssrRenderAttrs(r2)}>`), ssrRenderSlot(o2.$slots, "default", {}, null, n2, s2), n2("</code>");
}]]);

export { u as default };
//# sourceMappingURL=ProseCodeInline-CGW27LV5.mjs.map
