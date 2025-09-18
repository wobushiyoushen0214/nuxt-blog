import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { o } from './_plugin-vue_export-helper-BCo6x5W8.mjs';

const u = {};
const r = u.setup;
u.setup = (e2, o2) => {
  const s2 = useSSRContext();
  return (s2.modules || (s2.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseBlockquote.vue"), r ? r(e2, o2) : void 0;
};
const n = o(u, [["ssrRender", function(t2, s2, u2, r2) {
  s2(`<blockquote${ssrRenderAttrs(r2)}>`), ssrRenderSlot(t2.$slots, "default", {}, null, s2, u2), s2("</blockquote>");
}]]);

export { n as default };
//# sourceMappingURL=ProseBlockquote-OlXepJsX.mjs.map
