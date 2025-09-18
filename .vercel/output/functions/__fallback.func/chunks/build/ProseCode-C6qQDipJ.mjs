import { defineComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';

const l = defineComponent({ __name: "ProseCode", __ssrInlineRender: true, props: { code: { type: String, default: "" }, language: { type: String, default: null }, filename: { type: String, default: null }, highlights: { type: Array, default: () => [] }, meta: { type: String, default: null } }, setup: (e2) => (e3, t2, l2, u2) => {
  t2(`<div${ssrRenderAttrs(u2)}>`), ssrRenderSlot(e3.$slots, "default", {}, null, t2, l2), t2("</div>");
} }), u = l.setup;
l.setup = (e2, n2) => {
  const r2 = useSSRContext();
  return (r2.modules || (r2.modules = /* @__PURE__ */ new Set())).add("components/content/ProseCode.vue"), u ? u(e2, n2) : void 0;
};

export { l as default };
//# sourceMappingURL=ProseCode-C6qQDipJ.mjs.map
