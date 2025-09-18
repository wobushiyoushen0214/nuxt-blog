import { defineComponent, useAttrs, computed, ref, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderSlot, ssrRenderAttrs } from 'vue/server-renderer';
import { T as defu, a8 as withLeadingSlash, q as hasProtocol, u as joinURL, L as parseURL, af as encodeParam, ag as encodePath } from '../nitro/nitro.mjs';
import { u as pn, g as qo, j as Bo } from './server.mjs';

async function x(e2, t2) {
  const i2 = await (async function(e3) {
    {
      const t3 = (await import('./index-B5zuUUlM.mjs').then((e4) => e4.imageMeta))(await fetch(e3).then((e4) => e4.buffer()));
      if (!t3) throw new Error(`No metadata could be extracted from the image \`${e3}\`.`);
      const { width: i3, height: r2 } = t3;
      return { width: i3, height: r2, ratio: i3 && r2 ? i3 / r2 : void 0 };
    }
  })(t2).catch((e3) => ({ width: 0, height: 0, ratio: 0 }));
  return i2;
}
function _(e2) {
  return (t2) => t2 ? e2[t2] || t2 : e2.missingValue;
}
function q(e2 = "") {
  return "number" == typeof e2 ? e2 : "string" == typeof e2 && e2.replace("px", "").match(/^\d+$/g) ? Number.parseInt(e2, 10) : void 0;
}
function j(e2) {
  const t2 = { options: e2 }, i2 = (i3, r3 = {}) => {
    const o2 = z(t2, i3, r3);
    return o2;
  }, r2 = (e3, t3 = {}, r3 = {}) => i2(e3, { ...r3, modifiers: defu(t3, r3.modifiers || {}) }).url;
  for (const o2 in e2.presets) r2[o2] = (t3, i3, s2) => r2(t3, i3, { ...e2.presets[o2], ...s2 });
  return r2.options = e2, r2.getImage = i2, r2.getMeta = (e3, i3) => (async function(e4, t3, i4) {
    const r3 = z(e4, t3, { ...i4 });
    return "function" == typeof r3.getMeta ? await r3.getMeta() : await x(0, r3.url);
  })(t2, e3, i3), r2.getSizes = (e3, i3) => (function(e4, t3, i4) {
    var _a, _b, _c, _d, _e;
    const r3 = q((_a = i4.modifiers) == null ? void 0 : _a.width), o2 = q((_b = i4.modifiers) == null ? void 0 : _b.height), s2 = (function(e5) {
      const t4 = {};
      if ("string" == typeof e5) for (const i5 of e5.split(/[\s,]+/).filter((e6) => e6)) {
        const e6 = i5.split(":");
        2 !== e6.length ? t4["1px"] = e6[0].trim() : t4[e6[0].trim()] = e6[1].trim();
      }
      else Object.assign(t4, e5);
      return t4;
    })(i4.sizes), n2 = ((_c = i4.densities) == null ? void 0 : _c.trim()) ? (function(e5 = "") {
      if (void 0 === e5 || !e5.length) return [];
      const t4 = /* @__PURE__ */ new Set();
      for (const i5 of e5.split(" ")) {
        const e6 = Number.parseInt(i5.replace("x", ""));
        e6 && t4.add(e6);
      }
      return Array.from(t4);
    })(i4.densities.trim()) : e4.options.densities;
    !(function(e5) {
      if (0 === e5.length) throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)");
    })(n2);
    const d2 = r3 && o2 ? o2 / r3 : 0, a2 = [], u2 = [];
    if (Object.keys(s2).length >= 1) {
      for (const r4 in s2) {
        const l3 = $(r4, String(s2[r4]), o2, d2, e4);
        if (void 0 !== l3) {
          a2.push({ size: l3.size, screenMaxWidth: l3.screenMaxWidth, media: `(max-width: ${l3.screenMaxWidth}px)` });
          for (const r5 of n2) u2.push({ width: l3._cWidth * r5, src: W(e4, t3, i4, l3, r5) });
        }
      }
      !(function(e5) {
        var _a2;
        e5.sort((e6, t5) => e6.screenMaxWidth - t5.screenMaxWidth);
        let t4 = null;
        for (let i5 = e5.length - 1; i5 >= 0; i5--) {
          const r4 = e5[i5];
          r4.media === t4 && e5.splice(i5, 1), t4 = r4.media;
        }
        for (let i5 = 0; i5 < e5.length; i5++) e5[i5].media = ((_a2 = e5[i5 + 1]) == null ? void 0 : _a2.media) || "";
      })(a2);
    } else for (const f2 of n2) {
      const r4 = Object.keys(s2)[0];
      let n3 = r4 ? $(r4, String(s2[r4]), o2, d2, e4) : void 0;
      void 0 === n3 && (n3 = { size: "", screenMaxWidth: 0, _cWidth: (_d = i4.modifiers) == null ? void 0 : _d.width, _cHeight: (_e = i4.modifiers) == null ? void 0 : _e.height }), u2.push({ width: f2, src: W(e4, t3, i4, n3, f2) });
    }
    !(function(e5) {
      e5.sort((e6, t5) => e6.width - t5.width);
      let t4 = null;
      for (let i5 = e5.length - 1; i5 >= 0; i5--) {
        const r4 = e5[i5];
        r4.width === t4 && e5.splice(i5, 1), t4 = r4.width;
      }
    })(u2);
    const l2 = u2[u2.length - 1], p2 = a2.length ? a2.map((e5) => `${e5.media ? e5.media + " " : ""}${e5.size}`).join(", ") : void 0, c2 = p2 ? "w" : "x", m2 = u2.map((e5) => `${e5.src} ${e5.width}${c2}`).join(", ");
    return { sizes: p2, srcset: m2, src: l2 == null ? void 0 : l2.src };
  })(t2, e3, i3), t2.$img = r2, r2;
}
function z(e2, t2, i2) {
  var _a, _b;
  if (t2 && "string" != typeof t2) throw new TypeError(`input must be a string (received ${typeof t2}: ${JSON.stringify(t2)})`);
  if (!t2 || t2.startsWith("data:")) return { url: t2 };
  const { provider: r2, defaults: o2 } = (function(e3, t3) {
    const i3 = e3.options.providers[t3];
    if (!i3) throw new Error("Unknown provider: " + t3);
    return i3;
  })(e2, i2.provider || e2.options.provider), s2 = (function(e3, t3) {
    if (!t3) return {};
    if (!e3.options.presets[t3]) throw new Error("Unknown preset: " + t3);
    return e3.options.presets[t3];
  })(e2, i2.preset);
  if (t2 = hasProtocol(t2) ? t2 : withLeadingSlash(t2), !r2.supportsAlias) {
    for (const u2 in e2.options.alias) if (t2.startsWith(u2)) {
      const i3 = e2.options.alias[u2];
      i3 && (t2 = joinURL(i3, t2.slice(u2.length)));
    }
  }
  if (r2.validateDomains && hasProtocol(t2)) {
    const i3 = parseURL(t2).host;
    if (!e2.options.domains.find((e3) => e3 === i3)) return { url: t2 };
  }
  const n2 = defu(i2, s2, o2);
  n2.modifiers = { ...n2.modifiers };
  const d2 = n2.modifiers.format;
  ((_a = n2.modifiers) == null ? void 0 : _a.width) && (n2.modifiers.width = q(n2.modifiers.width)), ((_b = n2.modifiers) == null ? void 0 : _b.height) && (n2.modifiers.height = q(n2.modifiers.height));
  const a2 = r2.getImage(t2, n2, e2);
  return a2.format = a2.format || d2 || "", a2;
}
function $(e2, t2, i2, r2, o2) {
  const s2 = o2.options.screens && o2.options.screens[e2] || Number.parseInt(e2), n2 = t2.endsWith("vw");
  if (!n2 && /^\d+$/.test(t2) && (t2 += "px"), !n2 && !t2.endsWith("px")) return;
  let d2 = Number.parseInt(t2);
  if (!s2 || !d2) return;
  n2 && (d2 = Math.round(d2 / 100 * s2));
  return { size: t2, screenMaxWidth: s2, _cWidth: d2, _cHeight: r2 ? Math.round(d2 * r2) : i2 };
}
function W(e2, t2, i2, r2, o2) {
  return e2.$img(t2, { ...i2.modifiers, width: r2._cWidth ? r2._cWidth * o2 : void 0, height: r2._cHeight ? r2._cHeight * o2 : void 0 }, i2);
}
const M = (function({ formatter: e2, keyMap: t2, joinWith: i2 = "/", valueMap: r2 } = {}) {
  e2 || (e2 = (e3, t3) => `${e3}=${t3}`), t2 && "function" != typeof t2 && (t2 = _(t2));
  const o2 = r2 || {};
  return Object.keys(o2).forEach((e3) => {
    "function" != typeof o2[e3] && (o2[e3] = _(o2[e3]));
  }), (r3 = {}) => Object.entries(r3).filter(([e3, t3]) => void 0 !== t3).map(([i3, s2]) => {
    const n2 = o2[i3];
    return "function" == typeof n2 && (s2 = n2(r3[i3])), i3 = "function" == typeof t2 ? t2(i3) : i3, e2(i3, s2);
  }).join(i2);
})({ keyMap: { format: "f", fit: "fit", width: "w", height: "h", resize: "s", quality: "q", background: "b" }, joinWith: "&", formatter: (e2, t2) => encodeParam(e2) + "_" + encodeParam(t2) }), k = { screens: { xs: 320, sm: 640, md: 768, lg: 1024, xl: 1280, xxl: 1536, "2xl": 1536 }, presets: { avatar: { modifiers: { format: "webp", width: 50, height: 50, quality: 80 } }, hero: { modifiers: { format: "webp", width: 1200, height: 600, quality: 85 } }, blog: { modifiers: { format: "webp", width: 800, height: 400, quality: 80 } } }, provider: "ipx", domains: [], alias: {}, densities: [1, 2, 1, 2], format: ["webp", "avif", "webp"], quality: 80, providers: { ipx: { provider: Object.freeze(Object.defineProperty({ __proto__: null, getImage: (e2, { modifiers: t2 = {}, baseURL: i2 } = {}, r2) => {
  t2.width && t2.height && (t2.resize = `${t2.width}x${t2.height}`, delete t2.width, delete t2.height);
  const o2 = M(t2) || "_";
  return i2 || (i2 = joinURL(r2.options.nuxt.baseURL, "/_ipx")), { url: joinURL(i2, o2, encodePath(e2)) };
}, operationsGenerator: M, supportsAlias: true, validateDomains: true }, Symbol.toStringTag, { value: "Module" })), defaults: {} } } }, N = (e2) => {
  var _a;
  const t2 = Bo(), i2 = qo();
  return i2.$img || i2._img || (i2._img = j({ ...k, event: (_a = i2.ssrContext) == null ? void 0 : _a.event, nuxt: { baseURL: t2.app.baseURL }, runtimeConfig: t2 }));
}, O = { src: { type: String, required: false }, format: { type: String, required: false }, quality: { type: [Number, String], required: false }, background: { type: String, required: false }, fit: { type: String, required: false }, modifiers: { type: Object, required: false }, preset: { type: String, required: false }, provider: { type: String, required: false }, sizes: { type: [Object, String], required: false }, densities: { type: String, required: false }, preload: { type: [Boolean, Object], required: false }, width: { type: [String, Number], required: false }, height: { type: [String, Number], required: false }, alt: { type: String, required: false }, referrerpolicy: { type: String, required: false }, usemap: { type: String, required: false }, longdesc: { type: String, required: false }, ismap: { type: Boolean, required: false }, loading: { type: String, required: false, validator: (e2) => ["lazy", "eager"].includes(e2) }, crossorigin: { type: [Boolean, String], required: false, validator: (e2) => ["anonymous", "use-credentials", "", true, false].includes(e2) }, decoding: { type: String, required: false, validator: (e2) => ["async", "auto", "sync"].includes(e2) }, nonce: { type: [String], required: false } }, I = defineComponent({ __name: "NuxtImg", __ssrInlineRender: true, props: { ...O, placeholder: { type: [Boolean, String, Number, Array], required: false }, placeholderClass: { type: String, required: false }, custom: { type: Boolean, required: false } }, emits: ["load", "error"], setup(t2, { emit: n2 }) {
  const u2 = t2, l2 = useAttrs(), p2 = true, c2 = N(), m2 = ((t3) => {
    const i2 = computed(() => ({ provider: t3.provider, preset: t3.preset })), r2 = computed(() => ({ width: q(t3.width), height: q(t3.height), alt: t3.alt, referrerpolicy: t3.referrerpolicy, usemap: t3.usemap, longdesc: t3.longdesc, ismap: t3.ismap, crossorigin: true === t3.crossorigin ? "anonymous" : t3.crossorigin || void 0, loading: t3.loading, decoding: t3.decoding, nonce: t3.nonce })), o2 = N();
    return { options: i2, attrs: r2, modifiers: computed(() => ({ ...t3.modifiers, width: q(t3.width), height: q(t3.height), format: t3.format, quality: t3.quality || o2.options.quality, background: t3.background, fit: t3.fit })) };
  })(u2), f2 = ref(false), h2 = ref(), g2 = computed(() => c2.getSizes(u2.src, { ...m2.options.value, sizes: u2.sizes, densities: u2.densities, modifiers: { ...m2.modifiers.value, width: q(u2.width), height: q(u2.height) } })), v2 = computed(() => {
    const e2 = { ...m2.attrs.value, "data-nuxt-img": "" };
    return u2.placeholder && !f2.value || (e2.sizes = g2.value.sizes, e2.srcset = g2.value.srcset), e2;
  }), x2 = computed(() => {
    let e2 = u2.placeholder;
    if ("" === e2 && (e2 = true), !e2 || f2.value) return false;
    if ("string" == typeof e2) return e2;
    const t3 = Array.isArray(e2) ? e2 : "number" == typeof e2 ? [e2, e2] : [10, 10];
    return c2(u2.src, { ...m2.modifiers.value, width: t3[0], height: t3[1], quality: t3[2] || 50, blur: t3[3] || 3 }, m2.options.value);
  }), _2 = computed(() => u2.sizes ? g2.value.src : c2(u2.src, m2.modifiers.value, m2.options.value)), j2 = computed(() => x2.value ? x2.value : _2.value);
  if (u2.preload) {
    const e2 = Object.values(g2.value).every((e3) => e3);
    pn({ link: [{ rel: "preload", as: "image", nonce: u2.nonce, ...e2 ? { href: g2.value.src, imagesizes: g2.value.sizes, imagesrcset: g2.value.srcset } : { href: j2.value }, ..."boolean" != typeof u2.preload && u2.preload.fetchPriority ? { fetchpriority: u2.preload.fetchPriority } : {} }] });
  }
  return qo().isHydrating, (e2, t3, i2, r2) => {
    e2.custom ? ssrRenderSlot(e2.$slots, "default", { ...unref(p2) ? { onerror: "this.setAttribute('data-error', 1)" } : {}, imgAttrs: { ...v2.value, ...unref(l2) }, isLoaded: f2.value, src: j2.value }, null, t3, i2) : t3(`<img${ssrRenderAttrs(mergeProps({ ref_key: "imgEl", ref: h2, class: x2.value && !f2.value ? e2.placeholderClass : void 0 }, { ...unref(p2) ? { onerror: "this.setAttribute('data-error', 1)" } : {}, ...v2.value, ...unref(l2) }, { src: j2.value }, r2))}>`);
  };
} }), U = I.setup;
I.setup = (e2, t2) => {
  const i2 = useSSRContext();
  return (i2.modules || (i2.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+image@1.11.0_db0@0.3.2_better-sqlite3@11.10.0__ioredis@5.7.0_magicast@0.3.5/node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue"), U ? U(e2, t2) : void 0;
};

export { I };
//# sourceMappingURL=NuxtImg-BwE8PT3p.mjs.map
