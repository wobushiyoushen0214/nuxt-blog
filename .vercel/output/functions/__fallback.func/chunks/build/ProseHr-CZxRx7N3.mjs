import { ssrRenderAttrs } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { o } from './_plugin-vue_export-helper-BCo6x5W8.mjs';

const s = {};
const t = s.setup;
s.setup = (e2, r2) => {
  const s2 = useSSRContext();
  return (s2.modules || (s2.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseHr.vue"), t ? t(e2, r2) : void 0;
};
const n = o(s, [["ssrRender", function(o2, r2, s2, t2) {
  r2(`<hr${ssrRenderAttrs(t2)}>`);
}]]);

export { n as default };
//# sourceMappingURL=ProseHr-CZxRx7N3.mjs.map
