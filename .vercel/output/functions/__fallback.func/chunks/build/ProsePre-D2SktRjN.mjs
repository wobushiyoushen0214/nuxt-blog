import l from './ProseCode-C6qQDipJ.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, renderSlot, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderStyle, ssrRenderSlot } from 'vue/server-renderer';

const i = defineComponent({ __name: "ProsePre", __ssrInlineRender: true, props: { code: { type: String, default: "" }, language: { type: String, default: null }, filename: { type: String, default: null }, highlights: { type: Array, default: () => [] }, meta: { type: String, default: null }, class: { type: String, default: null }, style: { type: [String, Object], default: null } }, setup: (t2) => (u2, i2, m2, g) => {
  i2(ssrRenderComponent(l, mergeProps({ code: t2.code, language: t2.language, filename: t2.filename, highlights: t2.highlights, meta: t2.meta }, g), { default: withCtx((e2, l2, s2, a2) => {
    if (!l2) return [createVNode("pre", { class: u2.$props.class, style: t2.style }, [renderSlot(u2.$slots, "default")], 6)];
    l2(`<pre class="${ssrRenderClass(u2.$props.class)}" style="${ssrRenderStyle(t2.style)}"${a2}>`), ssrRenderSlot(u2.$slots, "default", {}, null, l2, s2, a2), l2("</pre>");
  }), _: 3 }, m2));
} }), m = i.setup;
i.setup = (e2, t2) => {
  const l2 = useSSRContext();
  return (l2.modules || (l2.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.2_better-sqlite3@11.10.0__ioredis@5.7.0_magicast@0.3.5_nuxt@3.19_tgmucp5mnjxr6stacpzu2ww3pi/node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue"), m ? m(e2, t2) : void 0;
};

export { i as default };
//# sourceMappingURL=ProsePre-D2SktRjN.mjs.map
