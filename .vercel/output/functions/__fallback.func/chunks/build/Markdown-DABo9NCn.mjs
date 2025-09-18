import a from './ContentSlot-BGa7J1MB.mjs';
import { defineComponent, getCurrentInstance, useSlots, computed, useSSRContext } from 'vue';
import './node-Co_CclnQ.mjs';

const u = defineComponent({ name: "Markdown", extends: a, setup(t2) {
  const { parent: e2 } = getCurrentInstance(), { between: r2, default: u2 } = useSlots();
  return { fallbackSlot: u2, tags: computed(() => "string" == typeof t2.unwrap ? t2.unwrap.split(" ") : ["*"]), between: r2, parent: e2 };
} }), p = u.setup;
u.setup = (t2, e2) => {
  const n2 = useSSRContext();
  return (n2.modules || (n2.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.2_better-sqlite3@11.10.0__ioredis@5.7.0_magicast@0.3.5_nuxt@3.19_tgmucp5mnjxr6stacpzu2ww3pi/node_modules/@nuxt/content/dist/runtime/components/Markdown.vue"), p ? p(t2, e2) : void 0;
};

export { u as default };
//# sourceMappingURL=Markdown-DABo9NCn.mjs.map
