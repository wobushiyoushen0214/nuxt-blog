import { defineComponent, h, useSSRContext } from 'vue';

const o = defineComponent({ name: "DocumentDrivenEmpty", props: { value: { type: Object, required: true } }, render: ({ value: e2 }) => h("div", void 0, [h("p", "Document is empty"), h("p", `Add content to it by opening ${e2._source}/${e2._file} file.`)]) }), u = o.setup;
o.setup = (e2, t2) => {
  const o2 = useSSRContext();
  return (o2.modules || (o2.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.2_better-sqlite3@11.10.0__ioredis@5.7.0_magicast@0.3.5_nuxt@3.19_tgmucp5mnjxr6stacpzu2ww3pi/node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue"), u ? u(e2, t2) : void 0;
};

export { o as default };
//# sourceMappingURL=DocumentDrivenEmpty-D0gHiDyO.mjs.map
