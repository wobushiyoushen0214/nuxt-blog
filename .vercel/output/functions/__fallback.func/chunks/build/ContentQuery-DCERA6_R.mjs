import { K as hash } from '../nitro/nitro.mjs';
import { defineComponent, useSlots, h, toRefs, computed, watch, useSSRContext } from 'vue';
import { D, G } from './query-CP_2cPQU.mjs';
import { j as Bo } from './server.mjs';
import 'lru-cache';
import 'devalue';
import 'consola';
import 'unhead';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'detab';
import 'hast-util-to-string';
import 'github-slugger';
import 'unhead/server';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';
import 'node:url';
import 'ipx';
import 'perfect-debounce';
import './preview-BhsI3sP2.mjs';
import 'node:zlib';
import 'node:stream';
import 'node:util';
import 'node:net';
import 'vue-router';

const m = defineComponent({ name: "ContentQuery", props: { path: { type: String, required: false, default: void 0 }, only: { type: Array, required: false, default: void 0 }, without: { type: Array, required: false, default: void 0 }, where: { type: Object, required: false, default: void 0 }, sort: { type: Object, required: false, default: void 0 }, limit: { type: Number, required: false, default: void 0 }, skip: { type: Number, required: false, default: void 0 }, locale: { type: String, required: false, default: void 0 }, find: { type: String, required: false, default: void 0 } }, async setup(t2) {
  const { path: o2, only: r2, without: s2, where: m2, sort: a2, limit: h, skip: f, locale: c, find: v } = toRefs(t2), _ = computed(() => {
    var _a;
    return (_a = o2.value) == null ? void 0 : _a.includes("/_");
  }), x = !Bo().public.content.experimental.advanceQuery;
  watch(() => t2, () => y(), { deep: true });
  const j = (e2) => x ? (e2 == null ? void 0 : e2.surround) ? e2.surround : (e2 == null ? void 0 : e2._id) || Array.isArray(e2) ? e2 : e2 == null ? void 0 : e2.result : e2.result, { data: w, refresh: y } = await D(`content-query-${hash(t2)}`, () => {
    let e2;
    return e2 = o2.value ? G(o2.value) : G(), r2.value && (e2 = e2.only(r2.value)), s2.value && (e2 = e2.without(s2.value)), m2.value && (e2 = e2.where(m2.value)), a2.value && (e2 = e2.sort(a2.value)), h.value && (e2 = e2.limit(h.value)), f.value && (e2 = e2.skip(f.value)), c.value && (e2 = e2.where({ _locale: c.value })), "one" === v.value ? e2.findOne().then(j) : "surround" === v.value && o2.value ? x ? e2.findSurround(o2.value) : e2.withSurround(o2.value).findOne().then(j) : e2.find().then(j);
  });
  return { isPartial: _, data: w, refresh: y };
}, render(e2) {
  var _a;
  const t2 = useSlots(), { data: i2, refresh: d2, isPartial: n2, path: s2, only: u2, without: l2, where: p2, sort: m2, limit: a2, skip: h$1, locale: f, find: c } = e2, v = { path: s2, only: u2, without: l2, where: p2, sort: m2, limit: a2, skip: h$1, locale: f, find: c };
  if ("one" === v.find) {
    if (!i2 && (t2 == null ? void 0 : t2["not-found"])) return t2["not-found"]({ props: v, ...this.$attrs });
    if ((t2 == null ? void 0 : t2.empty) && "markdown" === (i2 == null ? void 0 : i2._type) && !((_a = i2 == null ? void 0 : i2.body) == null ? void 0 : _a.children.length)) return t2.empty({ props: v, ...this.$attrs });
  } else if ((!i2 || !i2.length) && (t2 == null ? void 0 : t2["not-found"])) return t2["not-found"]({ props: v, ...this.$attrs });
  if (t2 == null ? void 0 : t2.default) return t2.default({ data: i2, refresh: d2, isPartial: n2, props: v, ...this.$attrs });
  return _ = "default", x = { data: i2, props: v, isPartial: n2 }, h("pre", null, JSON.stringify({ message: "You should use slots with <ContentQuery>!", slot: _, data: x }, null, 2));
  var _, x;
} }), a = m.setup;
m.setup = (e2, t2) => {
  const o2 = useSSRContext();
  return (o2.modules || (o2.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.2_better-sqlite3@11.10.0__ioredis@5.7.0_magicast@0.3.5_nuxt@3.19_tgmucp5mnjxr6stacpzu2ww3pi/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue"), a ? a(e2, t2) : void 0;
};

export { m as default };
//# sourceMappingURL=ContentQuery-DCERA6_R.mjs.map
