import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { o } from './_plugin-vue_export-helper-BCo6x5W8.mjs';

const r = {};
const n = r.setup;
r.setup = (e2, o2) => {
  const t2 = useSSRContext();
  return (t2.modules || (t2.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTbody.vue"), n ? n(e2, o2) : void 0;
};
const d = o(r, [["ssrRender", function(s2, t2, r2, n2) {
  t2(`<tbody${ssrRenderAttrs(n2)}>`), ssrRenderSlot(s2.$slots, "default", {}, null, t2, r2), t2("</tbody>");
}]]);

export { d as default };
//# sourceMappingURL=ProseTbody-DC7oB8z0.mjs.map
