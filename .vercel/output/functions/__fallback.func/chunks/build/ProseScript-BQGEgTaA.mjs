import { defineComponent, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

const t = defineComponent({ __name: "ProseScript", __ssrInlineRender: true, props: { src: { type: String, default: "" } }, setup: (e2) => (e3, o2, t2, n2) => {
  unref(false) ? o2(`<div${ssrRenderAttrs(n2)}> Rendering the <code>script</code> element is dangerous and is disabled by default. Consider implementing your own <code>ProseScript</code> element to have control over script rendering. </div>`) : o2("<!---->");
} }), n = t.setup;
t.setup = (e2, r2) => {
  const s2 = useSSRContext();
  return (s2.modules || (s2.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue"), n ? n(e2, r2) : void 0;
};

export { t as default };
//# sourceMappingURL=ProseScript-BQGEgTaA.mjs.map
