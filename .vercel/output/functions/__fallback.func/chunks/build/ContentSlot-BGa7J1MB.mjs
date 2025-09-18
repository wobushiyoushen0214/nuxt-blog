import { o } from './node-Co_CclnQ.mjs';
import { defineComponent, h, getCurrentInstance, useSlots, computed, useSSRContext } from 'vue';

const d = defineComponent({ name: "MDCSlot", functional: true, props: { name: { type: String, default: "default" }, unwrap: { type: [Boolean, String], default: false }, use: { type: Function, default: void 0 } }, setup(t2) {
  const { parent: e2 } = getCurrentInstance(), { default: n2 } = useSlots();
  return { fallbackSlot: n2, tags: computed(() => "string" == typeof t2.unwrap ? t2.unwrap.split(" ") : ["*"]), parent: e2 };
}, render({ use: e2, unwrap: o2, fallbackSlot: u2, tags: s2, parent: r2 }) {
  var _a;
  try {
    let d2 = e2;
    return "string" == typeof e2 && (d2 = (r2 == null ? void 0 : r2.slots[e2]) || ((_a = r2 == null ? void 0 : r2.parent) == null ? void 0 : _a.slots[e2])), d2 ? o2 ? o(d2(), s2) : [d2()] : u2 ? u2() : h("div");
  } catch {
    return h("div");
  }
} }), p = d.setup;
d.setup = (t2, e2) => {
  const n2 = useSSRContext();
  return (n2.modules || (n2.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/MDCSlot.vue"), p ? p(t2, e2) : void 0;
};
const a = defineComponent({ props: { use: { type: Function, default: void 0 }, unwrap: { type: [Boolean, String], default: false } }, render: (t2) => h(d, t2) }), l = a.setup;
a.setup = (t2, e2) => {
  const n2 = useSSRContext();
  return (n2.modules || (n2.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.2_better-sqlite3@11.10.0__ioredis@5.7.0_magicast@0.3.5_nuxt@3.19_tgmucp5mnjxr6stacpzu2ww3pi/node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue"), l ? l(t2, e2) : void 0;
};

export { a as default };
//# sourceMappingURL=ContentSlot-BGa7J1MB.mjs.map
