import { defineComponent, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { l, a } from './index-BF41Y92k.mjs';
import { o } from './_plugin-vue_export-helper-BCo6x5W8.mjs';
import '../nitro/nitro.mjs';
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
import 'node:url';
import 'ipx';
import './server.mjs';
import 'node:zlib';
import 'node:stream';
import 'node:util';
import 'node:net';
import 'vue-router';

const u = defineComponent({ __name: "IconCSS", __ssrInlineRender: true, props: { name: { type: String, required: true }, size: { type: String, default: "" } }, setup(e2) {
  const t2 = l(), d2 = e2, u2 = computed(() => {
    var _a, _b;
    return ((_b = (_a = t2.nuxtIcon) == null ? void 0 : _a.aliases) == null ? void 0 : _b[d2.name]) ? t2.nuxtIcon.aliases[d2.name] : d2.name;
  }), m2 = computed(() => a(u2.value)), p2 = computed(() => {
    var _a, _b;
    const e3 = (_b = (_a = t2.nuxtIcon) == null ? void 0 : _a.iconifyApiOptions) == null ? void 0 : _b.url;
    if (e3) try {
      new URL(e3);
    } catch (o2) {
      return;
    }
    return `url('${e3 || "https://api.iconify.design"}/${m2.value.prefix}/${m2.value.name}.svg')`;
  }), l$1 = computed(() => {
    var _a, _b, _c;
    if (!d2.size && "boolean" == typeof ((_a = t2.nuxtIcon) == null ? void 0 : _a.size) && !((_b = t2.nuxtIcon) == null ? void 0 : _b.size)) return;
    const e3 = d2.size || ((_c = t2.nuxtIcon) == null ? void 0 : _c.size) || "1em";
    return String(Number(e3)) === e3 ? `${e3}px` : e3;
  });
  return (e3, o2, t3, s2) => {
    const r2 = { style: { ":--9a732784": p2.value } };
    o2(`<span${ssrRenderAttrs(mergeProps({ style: { width: l$1.value, height: l$1.value } }, s2, r2))} data-v-280aece2></span>`);
  };
} }), m = u.setup;
u.setup = (e2, o2) => {
  const n2 = useSSRContext();
  return (n2.modules || (n2.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/nuxt-icon@0.6.10_magicast@0.3.5_vite@7.1.5_@types+node@24.5.2_jiti@2.5.1_terser@5.44.0_yaml@2_wt6ipfrufrr5o7cdjswvzctb6y/node_modules/nuxt-icon/dist/runtime/IconCSS.vue"), m ? m(e2, o2) : void 0;
};
const p = o(u, [["__scopeId", "data-v-280aece2"]]);

export { p as default };
//# sourceMappingURL=IconCSS-B_omhfex.mjs.map
