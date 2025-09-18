import { defineComponent, watch, ref, computed, withAsyncContext, mergeProps, unref, createVNode, resolveDynamicComponent, h, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderVNode, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { l, a } from './index-BF41Y92k.mjs';
import { g as qo, y as bn } from './server.mjs';
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
import 'node:zlib';
import 'node:stream';
import 'node:util';
import 'node:net';
import 'vue-router';

const w = Object.freeze({ left: 0, top: 0, width: 16, height: 16 }), j = Object.freeze({ rotate: 0, vFlip: false, hFlip: false }), k = Object.freeze({ ...w, ...j });
Object.freeze({ ...k, body: "", hidden: false });
const _ = Object.freeze({ width: null, height: null }), O = Object.freeze({ ..._, ...j });
const S = /[\s,]+/;
function I(e2, t2) {
  t2.split(S).forEach((t3) => {
    switch (t3.trim()) {
      case "horizontal":
        e2.hFlip = true;
        break;
      case "vertical":
        e2.vFlip = true;
    }
  });
}
function z(e2, t2 = 0) {
  const n2 = e2.replace(/^-?[0-9.]*/, "");
  function o2(e3) {
    for (; e3 < 0; ) e3 += 4;
    return e3 % 4;
  }
  if ("" === n2) {
    const t3 = parseInt(e2);
    return isNaN(t3) ? 0 : o2(t3);
  }
  if (n2 !== e2) {
    let t3 = 0;
    switch (n2) {
      case "%":
        t3 = 25;
        break;
      case "deg":
        t3 = 90;
    }
    if (t3) {
      let i2 = parseFloat(e2.slice(0, e2.length - n2.length));
      return isNaN(i2) ? 0 : (i2 /= t3, i2 % 1 == 0 ? o2(i2) : 0);
    }
  }
  return t2;
}
const F = /(-?[0-9.]*[0-9]+[0-9.]*)/g, E = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function L(e2, t2, n2) {
  if (1 === t2) return e2;
  if (n2 = n2 || 100, "number" == typeof e2) return Math.ceil(e2 * t2 * n2) / n2;
  if ("string" != typeof e2) return e2;
  const o2 = e2.split(F);
  if (null === o2 || !o2.length) return e2;
  const i2 = [];
  let r2 = o2.shift(), s2 = E.test(r2);
  for (; ; ) {
    if (s2) {
      const e3 = parseFloat(r2);
      isNaN(e3) ? i2.push(r2) : i2.push(Math.ceil(e3 * t2 * n2) / n2);
    } else i2.push(r2);
    if (r2 = o2.shift(), void 0 === r2) return i2.join("");
    s2 = !s2;
  }
}
const T = /\sid="(\S+)"/g, M = "IconifyId" + Date.now().toString(16) + (16777216 * Math.random() | 0).toString(16);
let C = 0;
const $ = { ...O, inline: false }, A = { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "aria-hidden": true, role: "img" }, U = { display: "inline-block" }, N = { backgroundColor: "currentColor" }, R = { backgroundColor: "transparent" }, D = { Image: "var(--svg)", Repeat: "no-repeat", Size: "100% 100%" }, q = { webkitMask: N, mask: N, background: R };
for (const ct in q) {
  const e2 = q[ct];
  for (const t2 in D) e2[ct + t2] = D[t2];
}
const B = {};
function H(e2) {
  return e2 + (e2.match(/^[-0-9.]+$/) ? "px" : "");
}
["horizontal", "vertical"].forEach((e2) => {
  const t2 = e2.slice(0, 1) + "Flip";
  B[e2 + "-flip"] = t2, B[e2.slice(0, 1) + "-flip"] = t2, B[e2 + "Flip"] = t2;
});
const P = (e2, n2) => {
  const o2 = (function(e3, t2) {
    const n3 = { ...e3 };
    for (const o3 in t2) {
      const e4 = t2[o3], i3 = typeof e4;
      o3 in _ ? (null === e4 || e4 && ("string" === i3 || "number" === i3)) && (n3[o3] = e4) : i3 === typeof n3[o3] && (n3[o3] = "rotate" === o3 ? e4 % 4 : e4);
    }
    return n3;
  })($, n2), i2 = { ...A }, r2 = n2.mode || "svg", s2 = {}, c2 = n2.style, l2 = "object" != typeof c2 || c2 instanceof Array ? {} : c2;
  for (let t2 in n2) {
    const e3 = n2[t2];
    if (void 0 !== e3) switch (t2) {
      case "icon":
      case "style":
      case "onLoad":
      case "mode":
      case "ssr":
        break;
      case "inline":
      case "hFlip":
      case "vFlip":
        o2[t2] = true === e3 || "true" === e3 || 1 === e3;
        break;
      case "flip":
        "string" == typeof e3 && I(o2, e3);
        break;
      case "color":
        s2.color = e3;
        break;
      case "rotate":
        "string" == typeof e3 ? o2[t2] = z(e3) : "number" == typeof e3 && (o2[t2] = e3);
        break;
      case "ariaHidden":
      case "aria-hidden":
        true !== e3 && "true" !== e3 && delete i2["aria-hidden"];
        break;
      default: {
        const n3 = B[t2];
        n3 ? true !== e3 && "true" !== e3 && 1 !== e3 || (o2[n3] = true) : void 0 === $[t2] && (i2[t2] = e3);
      }
    }
  }
  const a2 = (function(e3, t2) {
    const n3 = { ...k, ...e3 }, o3 = { ...O, ...t2 }, i3 = { left: n3.left, top: n3.top, width: n3.width, height: n3.height };
    let r3 = n3.body;
    [n3, o3].forEach((e4) => {
      const t3 = [], n4 = e4.hFlip, o4 = e4.vFlip;
      let s4, c4 = e4.rotate;
      switch (n4 ? o4 ? c4 += 2 : (t3.push("translate(" + (i3.width + i3.left).toString() + " " + (0 - i3.top).toString() + ")"), t3.push("scale(-1 1)"), i3.top = i3.left = 0) : o4 && (t3.push("translate(" + (0 - i3.left).toString() + " " + (i3.height + i3.top).toString() + ")"), t3.push("scale(1 -1)"), i3.top = i3.left = 0), c4 < 0 && (c4 -= 4 * Math.floor(c4 / 4)), c4 %= 4, c4) {
        case 1:
          s4 = i3.height / 2 + i3.top, t3.unshift("rotate(90 " + s4.toString() + " " + s4.toString() + ")");
          break;
        case 2:
          t3.unshift("rotate(180 " + (i3.width / 2 + i3.left).toString() + " " + (i3.height / 2 + i3.top).toString() + ")");
          break;
        case 3:
          s4 = i3.width / 2 + i3.left, t3.unshift("rotate(-90 " + s4.toString() + " " + s4.toString() + ")");
      }
      c4 % 2 == 1 && (i3.left !== i3.top && (s4 = i3.left, i3.left = i3.top, i3.top = s4), i3.width !== i3.height && (s4 = i3.width, i3.width = i3.height, i3.height = s4)), t3.length && (r3 = (function(e5, t4, n5) {
        const o5 = (function(e6, t5 = "defs") {
          let n6 = "";
          const o6 = e6.indexOf("<" + t5);
          for (; o6 >= 0; ) {
            const i5 = e6.indexOf(">", o6), r5 = e6.indexOf("</" + t5);
            if (-1 === i5 || -1 === r5) break;
            const s5 = e6.indexOf(">", r5);
            if (-1 === s5) break;
            n6 += e6.slice(i5 + 1, r5).trim(), e6 = e6.slice(0, o6).trim() + e6.slice(s5 + 1);
          }
          return { defs: n6, content: e6 };
        })(e5);
        return i4 = o5.defs, r4 = t4 + o5.content + n5, i4 ? "<defs>" + i4 + "</defs>" + r4 : r4;
        var i4, r4;
      })(r3, '<g transform="' + t3.join(" ") + '">', "</g>"));
    });
    const s3 = o3.width, c3 = o3.height, l3 = i3.width, a3 = i3.height;
    let u3, f3;
    null === s3 ? (f3 = null === c3 ? "1em" : "auto" === c3 ? a3 : c3, u3 = L(f3, l3 / a3)) : (u3 = "auto" === s3 ? l3 : s3, f3 = null === c3 ? L(u3, a3 / l3) : "auto" === c3 ? a3 : c3);
    const d3 = {}, p3 = (e4, t3) => {
      /* @__PURE__ */ ((e5) => "unset" === e5 || "undefined" === e5 || "none" === e5)(t3) || (d3[e4] = t3.toString());
    };
    p3("width", u3), p3("height", f3);
    const h3 = [i3.left, i3.top, l3, a3];
    return d3.viewBox = h3.join(" "), { attributes: d3, viewBox: h3, body: r3 };
  })(e2, o2), u2 = a2.attributes;
  if (o2.inline && (s2.verticalAlign = "-0.125em"), "svg" === r2) {
    i2.style = { ...s2, ...l2 }, Object.assign(i2, u2);
    let e3 = 0, o3 = n2.id;
    return "string" == typeof o3 && (o3 = o3.replace(/-/g, "_")), i2.innerHTML = (function(e4, t2 = M) {
      const n3 = [];
      let o4;
      for (; o4 = T.exec(e4); ) n3.push(o4[1]);
      if (!n3.length) return e4;
      const i3 = "suffix" + (16777216 * Math.random() | Date.now()).toString(16);
      return n3.forEach((n4) => {
        const o5 = "function" == typeof t2 ? t2(n4) : t2 + (C++).toString(), r3 = n4.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        e4 = e4.replace(new RegExp('([#;"])(' + r3 + ')([")]|\\.[a-z])', "g"), "$1" + o5 + i3 + "$3");
      }), e4 = e4.replace(new RegExp(i3, "g"), "");
    })(a2.body, o3 ? () => o3 + "ID" + e3++ : "iconifyVue"), h("svg", i2);
  }
  const { body: f2, width: d2, height: p2 } = e2, h2 = "mask" === r2 || "bg" !== r2 && -1 !== f2.indexOf("currentColor"), g2 = (function(e3, t2) {
    let n3 = -1 === e3.indexOf("xlink:") ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
    for (const o3 in t2) n3 += " " + o3 + '="' + t2[o3] + '"';
    return '<svg xmlns="http://www.w3.org/2000/svg"' + n3 + ">" + e3 + "</svg>";
  })(f2, { ...u2, width: d2 + "", height: p2 + "" });
  var m2;
  return i2.style = { ...s2, "--svg": (m2 = g2, 'url("' + (function(e3) {
    return "data:image/svg+xml," + (function(e4) {
      return e4.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
    })(e3);
  })(m2) + '")'), width: H(u2.width), height: H(u2.height), ...U, ...h2 ? N : R, ...l2 }, h("span", i2);
}, Q = /* @__PURE__ */ Object.create(null), V = defineComponent({ inheritAttrs: false, render() {
  const e2 = this.$attrs, t2 = e2.icon, n2 = "string" == typeof t2 ? Q[t2] : "object" == typeof t2 ? t2 : null;
  return null === n2 || "object" != typeof n2 || "string" != typeof n2.body ? this.$slots.default ? this.$slots.default() : null : P({ ...k, ...n2 }, e2);
} }), G = /^[a-z0-9]+(-[a-z0-9]+)*$/, J = (e2, t2, n2, o2 = "") => {
  const i2 = e2.split(":");
  if ("@" === e2.slice(0, 1)) {
    if (i2.length < 2 || i2.length > 3) return null;
    o2 = i2.shift().slice(1);
  }
  if (i2.length > 3 || !i2.length) return null;
  if (i2.length > 1) {
    const e3 = i2.pop(), n3 = i2.pop(), r3 = { provider: i2.length > 0 ? i2[0] : o2, prefix: n3, name: e3 };
    return t2 && !K(r3) ? null : r3;
  }
  const r2 = i2[0], s2 = r2.split("-");
  if (s2.length > 1) {
    const e3 = { provider: o2, prefix: s2.shift(), name: s2.join("-") };
    return t2 && !K(e3) ? null : e3;
  }
  if (n2 && "" === o2) {
    const e3 = { provider: o2, prefix: "", name: r2 };
    return t2 && !K(e3, n2) ? null : e3;
  }
  return null;
}, K = (e2, t2) => !!e2 && !(!(t2 && "" === e2.prefix || e2.prefix) || !e2.name), W = Object.freeze({ left: 0, top: 0, width: 16, height: 16 }), X = Object.freeze({ rotate: 0, vFlip: false, hFlip: false }), Y = Object.freeze({ ...W, ...X }), Z = Object.freeze({ ...Y, body: "", hidden: false });
function ee(e2, t2) {
  const n2 = (function(e3, t3) {
    const n3 = {};
    !e3.hFlip != !t3.hFlip && (n3.hFlip = true), !e3.vFlip != !t3.vFlip && (n3.vFlip = true);
    const o2 = ((e3.rotate || 0) + (t3.rotate || 0)) % 4;
    return o2 && (n3.rotate = o2), n3;
  })(e2, t2);
  for (const o2 in Z) o2 in X ? o2 in e2 && !(o2 in n2) && (n2[o2] = X[o2]) : o2 in t2 ? n2[o2] = t2[o2] : o2 in e2 && (n2[o2] = e2[o2]);
  return n2;
}
function te(e2, t2, n2) {
  const o2 = e2.icons, i2 = e2.aliases || /* @__PURE__ */ Object.create(null);
  let r2 = {};
  function s2(e3) {
    r2 = ee(o2[e3] || i2[e3], r2);
  }
  return s2(t2), n2.forEach(s2), ee(e2, r2);
}
function ne(e2, t2) {
  const n2 = [];
  if ("object" != typeof e2 || "object" != typeof e2.icons) return n2;
  e2.not_found instanceof Array && e2.not_found.forEach((e3) => {
    t2(e3, null), n2.push(e3);
  });
  const o2 = (function(e3) {
    const t3 = e3.icons, n3 = e3.aliases || /* @__PURE__ */ Object.create(null), o3 = /* @__PURE__ */ Object.create(null);
    return Object.keys(t3).concat(Object.keys(n3)).forEach(function e4(i2) {
      if (t3[i2]) return o3[i2] = [];
      if (!(i2 in o3)) {
        o3[i2] = null;
        const t4 = n3[i2] && n3[i2].parent, r2 = t4 && e4(t4);
        r2 && (o3[i2] = [t4].concat(r2));
      }
      return o3[i2];
    }), o3;
  })(e2);
  for (const i2 in o2) {
    const r2 = o2[i2];
    r2 && (t2(i2, te(e2, i2, r2)), n2.push(i2));
  }
  return n2;
}
const oe = { provider: "", aliases: {}, not_found: {}, ...W };
function ie(e2, t2) {
  for (const n2 in t2) if (n2 in e2 && typeof e2[n2] != typeof t2[n2]) return false;
  return true;
}
const re = /* @__PURE__ */ Object.create(null);
function se(e2, t2) {
  const n2 = re[e2] || (re[e2] = /* @__PURE__ */ Object.create(null));
  return n2[t2] || (n2[t2] = /* @__PURE__ */ (function(e3, t3) {
    return { provider: e3, prefix: t3, icons: /* @__PURE__ */ Object.create(null), missing: /* @__PURE__ */ new Set() };
  })(e2, t2));
}
function ce(e2, t2) {
  return (function(e3) {
    if ("object" != typeof e3 || null === e3) return null;
    const t3 = e3;
    if ("string" != typeof t3.prefix || !e3.icons || "object" != typeof e3.icons) return null;
    if (!ie(e3, oe)) return null;
    const n2 = t3.icons;
    for (const i2 in n2) {
      const e4 = n2[i2];
      if (!i2 || "string" != typeof e4.body || !ie(e4, Z)) return null;
    }
    const o2 = t3.aliases || /* @__PURE__ */ Object.create(null);
    for (const i2 in o2) {
      const e4 = o2[i2], t4 = e4.parent;
      if (!i2 || "string" != typeof t4 || !n2[t4] && !o2[t4] || !ie(e4, Z)) return null;
    }
    return t3;
  })(t2) ? ne(t2, (t3, n2) => {
    n2 ? e2.icons[t3] = n2 : e2.missing.add(t3);
  }) : [];
}
let le = false;
function ae(e2) {
  return "boolean" == typeof e2 && (le = e2), le;
}
function ue(e2) {
  const t2 = "string" == typeof e2 ? J(e2, true, le) : e2;
  if (t2) {
    const e3 = se(t2.provider, t2.prefix), n2 = t2.name;
    return e3.icons[n2] || (e3.missing.has(n2) ? null : void 0);
  }
}
const fe = Object.freeze({ width: null, height: null }), de = Object.freeze({ ...fe, ...X }), pe = /(-?[0-9.]*[0-9]+[0-9.]*)/g, he = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function ge(e2, t2, n2) {
  if (1 === t2) return e2;
  if (n2 = n2 || 100, "number" == typeof e2) return Math.ceil(e2 * t2 * n2) / n2;
  if ("string" != typeof e2) return e2;
  const o2 = e2.split(pe);
  if (null === o2 || !o2.length) return e2;
  const i2 = [];
  let r2 = o2.shift(), s2 = he.test(r2);
  for (; ; ) {
    if (s2) {
      const e3 = parseFloat(r2);
      isNaN(e3) ? i2.push(r2) : i2.push(Math.ceil(e3 * t2 * n2) / n2);
    } else i2.push(r2);
    if (r2 = o2.shift(), void 0 === r2) return i2.join("");
    s2 = !s2;
  }
}
const me = /\sid="(\S+)"/g, be = "IconifyId" + Date.now().toString(16) + (16777216 * Math.random() | 0).toString(16);
let ve = 0;
const xe = /* @__PURE__ */ Object.create(null);
function ye(e2) {
  return xe[e2] || xe[""];
}
function we(e2) {
  let t2;
  if ("string" == typeof e2.resources) t2 = [e2.resources];
  else if (t2 = e2.resources, !(t2 instanceof Array && t2.length)) return null;
  return { resources: t2, path: e2.path || "/", maxURL: e2.maxURL || 500, rotate: e2.rotate || 750, timeout: e2.timeout || 5e3, random: true === e2.random, index: e2.index || 0, dataAfterTimeout: false !== e2.dataAfterTimeout };
}
const je = /* @__PURE__ */ Object.create(null), ke = ["https://api.simplesvg.com", "https://api.unisvg.com"], _e = [];
for (; ke.length > 0; ) 1 === ke.length || Math.random() > 0.5 ? _e.push(ke.shift()) : _e.push(ke.pop());
function Oe(e2, t2) {
  const n2 = we(t2);
  return null !== n2 && (je[e2] = n2, true);
}
function Se(e2) {
  return je[e2];
}
je[""] = we({ resources: ["https://api.iconify.design"].concat(_e) });
let Ie = (() => {
  let e2;
  try {
    if (e2 = fetch, "function" == typeof e2) return e2;
  } catch (t2) {
  }
})();
const ze = { prepare: (e2, t2, n2) => {
  const o2 = [], i2 = (function(e3, t3) {
    const n3 = Se(e3);
    if (!n3) return 0;
    let o3;
    if (n3.maxURL) {
      let e4 = 0;
      n3.resources.forEach((t4) => {
        const n4 = t4;
        e4 = Math.max(e4, n4.length);
      });
      const i3 = t3 + ".json?icons=";
      o3 = n3.maxURL - e4 - n3.path.length - i3.length;
    } else o3 = 0;
    return o3;
  })(e2, t2), r2 = "icons";
  let s2 = { type: r2, provider: e2, prefix: t2, icons: [] }, c2 = 0;
  return n2.forEach((n3, l2) => {
    c2 += n3.length + 1, c2 >= i2 && l2 > 0 && (o2.push(s2), s2 = { type: r2, provider: e2, prefix: t2, icons: [] }, c2 = n3.length), s2.icons.push(n3);
  }), o2.push(s2), o2;
}, send: (e2, t2, n2) => {
  if (!Ie) return void n2("abort", 424);
  let o2 = (function(e3) {
    if ("string" == typeof e3) {
      const t3 = Se(e3);
      if (t3) return t3.path;
    }
    return "/";
  })(t2.provider);
  switch (t2.type) {
    case "icons": {
      const e3 = t2.prefix, n3 = t2.icons.join(",");
      o2 += e3 + ".json?" + new URLSearchParams({ icons: n3 }).toString();
      break;
    }
    case "custom": {
      const e3 = t2.uri;
      o2 += "/" === e3.slice(0, 1) ? e3.slice(1) : e3;
      break;
    }
    default:
      return void n2("abort", 400);
  }
  let i2 = 503;
  Ie(e2 + o2).then((e3) => {
    const t3 = e3.status;
    if (200 === t3) return i2 = 501, e3.json();
    setTimeout(() => {
      n2(/* @__PURE__ */ (function(e4) {
        return 404 === e4;
      })(t3) ? "abort" : "next", t3);
    });
  }).then((e3) => {
    "object" == typeof e3 && null !== e3 ? setTimeout(() => {
      n2("success", e3);
    }) : setTimeout(() => {
      404 === e3 ? n2("abort", e3) : n2("next", i2);
    });
  }).catch(() => {
    n2("next", i2);
  });
} };
function Fe(e2, t2) {
  e2.forEach((e3) => {
    const n2 = e3.loaderCallbacks;
    n2 && (e3.loaderCallbacks = n2.filter((e4) => e4.id !== t2));
  });
}
let Ee = 0;
var Le = { resources: [], index: 0, timeout: 2e3, rotate: 750, random: false, dataAfterTimeout: false };
function Te(e2, t2, n2, o2) {
  const i2 = e2.resources.length, r2 = e2.random ? Math.floor(Math.random() * i2) : e2.index;
  let s2;
  if (e2.random) {
    let t3 = e2.resources.slice(0);
    for (s2 = []; t3.length > 1; ) {
      const e3 = Math.floor(Math.random() * t3.length);
      s2.push(t3[e3]), t3 = t3.slice(0, e3).concat(t3.slice(e3 + 1));
    }
    s2 = s2.concat(t3);
  } else s2 = e2.resources.slice(r2).concat(e2.resources.slice(0, r2));
  const c2 = Date.now();
  let l2, a2 = "pending", u2 = 0, f2 = null, d2 = [], p2 = [];
  function h2() {
    f2 && (clearTimeout(f2), f2 = null);
  }
  function g2() {
    "pending" === a2 && (a2 = "aborted"), h2(), d2.forEach((e3) => {
      "pending" === e3.status && (e3.status = "aborted");
    }), d2 = [];
  }
  function m2(e3, t3) {
    t3 && (p2 = []), "function" == typeof e3 && p2.push(e3);
  }
  function b2() {
    a2 = "failed", p2.forEach((e3) => {
      e3(void 0, l2);
    });
  }
  function v2() {
    d2.forEach((e3) => {
      "pending" === e3.status && (e3.status = "aborted");
    }), d2 = [];
  }
  function x2() {
    if ("pending" !== a2) return;
    h2();
    const o3 = s2.shift();
    if (void 0 === o3) return d2.length ? void (f2 = setTimeout(() => {
      h2(), "pending" === a2 && (v2(), b2());
    }, e2.timeout)) : void b2();
    const i3 = { status: "pending", resource: o3, callback: (t3, n3) => {
      !(function(t4, n4, o4) {
        const i4 = "success" !== n4;
        switch (d2 = d2.filter((e3) => e3 !== t4), a2) {
          case "pending":
            break;
          case "failed":
            if (i4 || !e2.dataAfterTimeout) return;
            break;
          default:
            return;
        }
        if ("abort" === n4) return l2 = o4, void b2();
        if (i4) return l2 = o4, void (d2.length || (s2.length ? x2() : b2()));
        if (h2(), v2(), !e2.random) {
          const n5 = e2.resources.indexOf(t4.resource);
          -1 !== n5 && n5 !== e2.index && (e2.index = n5);
        }
        a2 = "completed", p2.forEach((e3) => {
          e3(o4);
        });
      })(i3, t3, n3);
    } };
    d2.push(i3), u2++, f2 = setTimeout(x2, e2.rotate), n2(o3, t2, i3.callback);
  }
  return "function" == typeof o2 && p2.push(o2), setTimeout(x2), function() {
    return { startTime: c2, payload: t2, status: a2, queriesSent: u2, queriesPending: d2.length, subscribe: m2, abort: g2 };
  };
}
function Me(e2) {
  const t2 = { ...Le, ...e2 };
  let n2 = [];
  function o2() {
    n2 = n2.filter((e3) => "pending" === e3().status);
  }
  return { query: function(e3, i2, r2) {
    const s2 = Te(t2, e3, i2, (e4, t3) => {
      o2(), r2 && r2(e4, t3);
    });
    return n2.push(s2), s2;
  }, find: function(e3) {
    return n2.find((t3) => e3(t3)) || null;
  }, setIndex: (e3) => {
    t2.index = e3;
  }, getIndex: () => t2.index, cleanup: o2 };
}
function Ce() {
}
const $e = /* @__PURE__ */ Object.create(null);
function Ae(e2, t2, n2) {
  let o2, i2;
  if ("string" == typeof e2) {
    const t3 = ye(e2);
    if (!t3) return n2(void 0, 424), Ce;
    i2 = t3.send;
    const r2 = (function(e3) {
      if (!$e[e3]) {
        const t4 = Se(e3);
        if (!t4) return;
        const n3 = { config: t4, redundancy: Me(t4) };
        $e[e3] = n3;
      }
      return $e[e3];
    })(e2);
    r2 && (o2 = r2.redundancy);
  } else {
    const t3 = we(e2);
    if (t3) {
      o2 = Me(t3);
      const n3 = ye(e2.resources ? e2.resources[0] : "");
      n3 && (i2 = n3.send);
    }
  }
  return o2 && i2 ? o2.query(t2, i2, n2)().abort : (n2(void 0, 424), Ce);
}
function Ue() {
}
function Ne(e2) {
  e2.iconsLoaderFlag || (e2.iconsLoaderFlag = true, setTimeout(() => {
    e2.iconsLoaderFlag = false, (function(e3) {
      e3.pendingCallbacksFlag || (e3.pendingCallbacksFlag = true, setTimeout(() => {
        e3.pendingCallbacksFlag = false;
        const t2 = e3.loaderCallbacks ? e3.loaderCallbacks.slice(0) : [];
        if (!t2.length) return;
        let n2 = false;
        const o2 = e3.provider, i2 = e3.prefix;
        t2.forEach((t3) => {
          const r2 = t3.icons, s2 = r2.pending.length;
          r2.pending = r2.pending.filter((t4) => {
            if (t4.prefix !== i2) return true;
            const s3 = t4.name;
            if (e3.icons[s3]) r2.loaded.push({ provider: o2, prefix: i2, name: s3 });
            else {
              if (!e3.missing.has(s3)) return n2 = true, true;
              r2.missing.push({ provider: o2, prefix: i2, name: s3 });
            }
            return false;
          }), r2.pending.length !== s2 && (n2 || Fe([e3], t3.id), t3.callback(r2.loaded.slice(0), r2.missing.slice(0), r2.pending.slice(0), t3.abort));
        });
      }));
    })(e2);
  }));
}
function Re(e2, t2, n2) {
  function o2() {
    const n3 = e2.pendingIcons;
    t2.forEach((t3) => {
      n3 && n3.delete(t3), e2.icons[t3] || e2.missing.add(t3);
    });
  }
  if (n2 && "object" == typeof n2) try {
    if (!ce(e2, n2).length) return void o2();
  } catch (i2) {
  }
  o2(), Ne(e2);
}
function De(e2, t2) {
  e2 instanceof Promise ? e2.then((e3) => {
    t2(e3);
  }).catch(() => {
    t2(null);
  }) : t2(e2);
}
function qe(e2, t2) {
  e2.iconsToLoad ? e2.iconsToLoad = e2.iconsToLoad.concat(t2).sort() : e2.iconsToLoad = t2, e2.iconsQueueFlag || (e2.iconsQueueFlag = true, setTimeout(() => {
    e2.iconsQueueFlag = false;
    const { provider: t3, prefix: n2 } = e2, o2 = e2.iconsToLoad;
    if (delete e2.iconsToLoad, !o2 || !o2.length) return;
    const i2 = e2.loadIcon;
    if (e2.loadIcons && (o2.length > 1 || !i2)) return void De(e2.loadIcons(o2, n2, t3), (t4) => {
      Re(e2, o2, t4);
    });
    if (i2) return void o2.forEach((o3) => {
      De(i2(o3, n2, t3), (t4) => {
        Re(e2, [o3], t4 ? { prefix: n2, icons: { [o3]: t4 } } : null);
      });
    });
    const { valid: r2, invalid: s2 } = (function(e3) {
      const t4 = [], n3 = [];
      return e3.forEach((e4) => {
        (e4.match(G) ? t4 : n3).push(e4);
      }), { valid: t4, invalid: n3 };
    })(o2);
    if (s2.length && Re(e2, s2, null), !r2.length) return;
    const c2 = n2.match(G) ? ye(t3) : null;
    if (!c2) return void Re(e2, r2, null);
    c2.prepare(t3, n2, r2).forEach((n3) => {
      Ae(t3, n3, (t4) => {
        Re(e2, n3.icons, t4);
      });
    });
  }));
}
const Be = (e2, t2) => {
  const n2 = (function(e3) {
    const t3 = { loaded: [], missing: [], pending: [] }, n3 = /* @__PURE__ */ Object.create(null);
    e3.sort((e4, t4) => e4.provider !== t4.provider ? e4.provider.localeCompare(t4.provider) : e4.prefix !== t4.prefix ? e4.prefix.localeCompare(t4.prefix) : e4.name.localeCompare(t4.name));
    let o3 = { provider: "", prefix: "", name: "" };
    return e3.forEach((e4) => {
      if (o3.name === e4.name && o3.prefix === e4.prefix && o3.provider === e4.provider) return;
      o3 = e4;
      const i3 = e4.provider, r3 = e4.prefix, s3 = e4.name, c2 = n3[i3] || (n3[i3] = /* @__PURE__ */ Object.create(null)), l2 = c2[r3] || (c2[r3] = se(i3, r3));
      let a2;
      a2 = s3 in l2.icons ? t3.loaded : "" === r3 || l2.missing.has(s3) ? t3.missing : t3.pending;
      const u2 = { provider: i3, prefix: r3, name: s3 };
      a2.push(u2);
    }), t3;
  })((function(e3, t3 = true, n3 = false) {
    const o3 = [];
    return e3.forEach((e4) => {
      const i3 = "string" == typeof e4 ? J(e4, t3, n3) : e4;
      i3 && o3.push(i3);
    }), o3;
  })(e2, true, ae()));
  if (!n2.pending.length) {
    let e3 = true;
    return t2 && setTimeout(() => {
      e3 && t2(n2.loaded, n2.missing, n2.pending, Ue);
    }), () => {
      e3 = false;
    };
  }
  const o2 = /* @__PURE__ */ Object.create(null), i2 = [];
  let r2, s2;
  return n2.pending.forEach((e3) => {
    const { provider: t3, prefix: n3 } = e3;
    if (n3 === s2 && t3 === r2) return;
    r2 = t3, s2 = n3, i2.push(se(t3, n3));
    const c2 = o2[t3] || (o2[t3] = /* @__PURE__ */ Object.create(null));
    c2[n3] || (c2[n3] = []);
  }), n2.pending.forEach((e3) => {
    const { provider: t3, prefix: n3, name: i3 } = e3, r3 = se(t3, n3), s3 = r3.pendingIcons || (r3.pendingIcons = /* @__PURE__ */ new Set());
    s3.has(i3) || (s3.add(i3), o2[t3][n3].push(i3));
  }), i2.forEach((e3) => {
    const t3 = o2[e3.provider][e3.prefix];
    t3.length && qe(e3, t3);
  }), t2 ? (function(e3, t3, n3) {
    const o3 = Ee++, i3 = Fe.bind(null, n3, o3);
    if (!t3.pending.length) return i3;
    const r3 = { id: o3, icons: t3, callback: e3, abort: i3 };
    return n3.forEach((e4) => {
      (e4.loaderCallbacks || (e4.loaderCallbacks = [])).push(r3);
    }), i3;
  })(t2, n2, i2) : Ue;
};
const He = /[\s,]+/;
function Pe(e2, t2) {
  t2.split(He).forEach((t3) => {
    switch (t3.trim()) {
      case "horizontal":
        e2.hFlip = true;
        break;
      case "vertical":
        e2.vFlip = true;
    }
  });
}
function Qe(e2, t2 = 0) {
  const n2 = e2.replace(/^-?[0-9.]*/, "");
  function o2(e3) {
    for (; e3 < 0; ) e3 += 4;
    return e3 % 4;
  }
  if ("" === n2) {
    const t3 = parseInt(e2);
    return isNaN(t3) ? 0 : o2(t3);
  }
  if (n2 !== e2) {
    let t3 = 0;
    switch (n2) {
      case "%":
        t3 = 25;
        break;
      case "deg":
        t3 = 90;
    }
    if (t3) {
      let i2 = parseFloat(e2.slice(0, e2.length - n2.length));
      return isNaN(i2) ? 0 : (i2 /= t3, i2 % 1 == 0 ? o2(i2) : 0);
    }
  }
  return t2;
}
const Ve = { ...de, inline: false }, Ge = { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "aria-hidden": true, role: "img" }, Je = { display: "inline-block" }, Ke = { backgroundColor: "currentColor" }, We = { backgroundColor: "transparent" }, Xe = { Image: "var(--svg)", Repeat: "no-repeat", Size: "100% 100%" }, Ye = { webkitMask: Ke, mask: Ke, background: We };
for (const ct in Ye) {
  const e2 = Ye[ct];
  for (const t2 in Xe) e2[ct + t2] = Xe[t2];
}
const Ze = {};
function et(e2) {
  return e2 + (e2.match(/^[-0-9.]+$/) ? "px" : "");
}
["horizontal", "vertical"].forEach((e2) => {
  const t2 = e2.slice(0, 1) + "Flip";
  Ze[e2 + "-flip"] = t2, Ze[e2.slice(0, 1) + "-flip"] = t2, Ze[e2 + "Flip"] = t2;
});
const tt = (e2, n2) => {
  const o2 = (function(e3, t2) {
    const n3 = { ...e3 };
    for (const o3 in t2) {
      const e4 = t2[o3], i3 = typeof e4;
      o3 in fe ? (null === e4 || e4 && ("string" === i3 || "number" === i3)) && (n3[o3] = e4) : i3 === typeof n3[o3] && (n3[o3] = "rotate" === o3 ? e4 % 4 : e4);
    }
    return n3;
  })(Ve, n2), i2 = { ...Ge }, r2 = n2.mode || "svg", s2 = {}, c2 = n2.style, l2 = "object" != typeof c2 || c2 instanceof Array ? {} : c2;
  for (let t2 in n2) {
    const e3 = n2[t2];
    if (void 0 !== e3) switch (t2) {
      case "icon":
      case "style":
      case "onLoad":
      case "mode":
      case "ssr":
        break;
      case "inline":
      case "hFlip":
      case "vFlip":
        o2[t2] = true === e3 || "true" === e3 || 1 === e3;
        break;
      case "flip":
        "string" == typeof e3 && Pe(o2, e3);
        break;
      case "color":
        s2.color = e3;
        break;
      case "rotate":
        "string" == typeof e3 ? o2[t2] = Qe(e3) : "number" == typeof e3 && (o2[t2] = e3);
        break;
      case "ariaHidden":
      case "aria-hidden":
        true !== e3 && "true" !== e3 && delete i2["aria-hidden"];
        break;
      default: {
        const n3 = Ze[t2];
        n3 ? true !== e3 && "true" !== e3 && 1 !== e3 || (o2[n3] = true) : void 0 === Ve[t2] && (i2[t2] = e3);
      }
    }
  }
  const a2 = (function(e3, t2) {
    const n3 = { ...Y, ...e3 }, o3 = { ...de, ...t2 }, i3 = { left: n3.left, top: n3.top, width: n3.width, height: n3.height };
    let r3 = n3.body;
    [n3, o3].forEach((e4) => {
      const t3 = [], n4 = e4.hFlip, o4 = e4.vFlip;
      let s4, c4 = e4.rotate;
      switch (n4 ? o4 ? c4 += 2 : (t3.push("translate(" + (i3.width + i3.left).toString() + " " + (0 - i3.top).toString() + ")"), t3.push("scale(-1 1)"), i3.top = i3.left = 0) : o4 && (t3.push("translate(" + (0 - i3.left).toString() + " " + (i3.height + i3.top).toString() + ")"), t3.push("scale(1 -1)"), i3.top = i3.left = 0), c4 < 0 && (c4 -= 4 * Math.floor(c4 / 4)), c4 %= 4, c4) {
        case 1:
          s4 = i3.height / 2 + i3.top, t3.unshift("rotate(90 " + s4.toString() + " " + s4.toString() + ")");
          break;
        case 2:
          t3.unshift("rotate(180 " + (i3.width / 2 + i3.left).toString() + " " + (i3.height / 2 + i3.top).toString() + ")");
          break;
        case 3:
          s4 = i3.width / 2 + i3.left, t3.unshift("rotate(-90 " + s4.toString() + " " + s4.toString() + ")");
      }
      c4 % 2 == 1 && (i3.left !== i3.top && (s4 = i3.left, i3.left = i3.top, i3.top = s4), i3.width !== i3.height && (s4 = i3.width, i3.width = i3.height, i3.height = s4)), t3.length && (r3 = (function(e5, t4, n5) {
        const o5 = (function(e6, t5 = "defs") {
          let n6 = "";
          const o6 = e6.indexOf("<" + t5);
          for (; o6 >= 0; ) {
            const i5 = e6.indexOf(">", o6), r5 = e6.indexOf("</" + t5);
            if (-1 === i5 || -1 === r5) break;
            const s5 = e6.indexOf(">", r5);
            if (-1 === s5) break;
            n6 += e6.slice(i5 + 1, r5).trim(), e6 = e6.slice(0, o6).trim() + e6.slice(s5 + 1);
          }
          return { defs: n6, content: e6 };
        })(e5);
        return i4 = o5.defs, r4 = t4 + o5.content + n5, i4 ? "<defs>" + i4 + "</defs>" + r4 : r4;
        var i4, r4;
      })(r3, '<g transform="' + t3.join(" ") + '">', "</g>"));
    });
    const s3 = o3.width, c3 = o3.height, l3 = i3.width, a3 = i3.height;
    let u3, f3;
    null === s3 ? (f3 = null === c3 ? "1em" : "auto" === c3 ? a3 : c3, u3 = ge(f3, l3 / a3)) : (u3 = "auto" === s3 ? l3 : s3, f3 = null === c3 ? ge(u3, a3 / l3) : "auto" === c3 ? a3 : c3);
    const d3 = {}, p3 = (e4, t3) => {
      /* @__PURE__ */ ((e5) => "unset" === e5 || "undefined" === e5 || "none" === e5)(t3) || (d3[e4] = t3.toString());
    };
    p3("width", u3), p3("height", f3);
    const h3 = [i3.left, i3.top, l3, a3];
    return d3.viewBox = h3.join(" "), { attributes: d3, viewBox: h3, body: r3 };
  })(e2, o2), u2 = a2.attributes;
  if (o2.inline && (s2.verticalAlign = "-0.125em"), "svg" === r2) {
    i2.style = { ...s2, ...l2 }, Object.assign(i2, u2);
    let e3 = 0, o3 = n2.id;
    return "string" == typeof o3 && (o3 = o3.replace(/-/g, "_")), i2.innerHTML = (function(e4, t2 = be) {
      const n3 = [];
      let o4;
      for (; o4 = me.exec(e4); ) n3.push(o4[1]);
      if (!n3.length) return e4;
      const i3 = "suffix" + (16777216 * Math.random() | Date.now()).toString(16);
      return n3.forEach((n4) => {
        const o5 = "function" == typeof t2 ? t2(n4) : t2 + (ve++).toString(), r3 = n4.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        e4 = e4.replace(new RegExp('([#;"])(' + r3 + ')([")]|\\.[a-z])', "g"), "$1" + o5 + i3 + "$3");
      }), e4 = e4.replace(new RegExp(i3, "g"), "");
    })(a2.body, o3 ? () => o3 + "ID" + e3++ : "iconifyVue"), h("svg", i2);
  }
  const { body: f2, width: d2, height: p2 } = e2, h2 = "mask" === r2 || "bg" !== r2 && -1 !== f2.indexOf("currentColor"), g2 = (function(e3, t2) {
    let n3 = -1 === e3.indexOf("xlink:") ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
    for (const o3 in t2) n3 += " " + o3 + '="' + t2[o3] + '"';
    return '<svg xmlns="http://www.w3.org/2000/svg"' + n3 + ">" + e3 + "</svg>";
  })(f2, { ...u2, width: d2 + "", height: p2 + "" });
  var m2;
  return i2.style = { ...s2, "--svg": (m2 = g2, 'url("' + (function(e3) {
    return "data:image/svg+xml," + (function(e4) {
      return e4.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
    })(e3);
  })(m2) + '")'), width: et(u2.width), height: et(u2.height), ...Je, ...h2 ? Ke : We, ...l2 }, h("span", i2);
};
var nt;
ae(true), nt = ze, xe[""] = nt;
const ot = { ...Y, body: "" };
defineComponent({ inheritAttrs: false, data: () => ({ _name: "", _loadingIcon: null, iconMounted: false, counter: 0 }), mounted() {
  this.iconMounted = true;
}, unmounted() {
  this.abortLoading();
}, methods: { abortLoading() {
  this._loadingIcon && (this._loadingIcon.abort(), this._loadingIcon = null);
}, getIcon(e2, t2, n2) {
  if ("object" == typeof e2 && null !== e2 && "string" == typeof e2.body) return this._name = "", this.abortLoading(), { data: e2 };
  let o2;
  if ("string" != typeof e2 || null === (o2 = J(e2, false, true))) return this.abortLoading(), null;
  let i2 = ue(o2);
  if (!i2) return this._loadingIcon && this._loadingIcon.name === e2 || (this.abortLoading(), this._name = "", null !== i2 && (this._loadingIcon = { name: e2, abort: Be([o2], () => {
    this.counter++;
  }) })), null;
  if (this.abortLoading(), this._name !== e2 && (this._name = e2, t2 && t2(e2)), n2) {
    i2 = Object.assign({}, i2);
    const e3 = n2(i2.body, o2.name, o2.prefix, o2.provider);
    "string" == typeof e3 && (i2.body = e3);
  }
  const r2 = ["iconify"];
  return "" !== o2.prefix && r2.push("iconify--" + o2.prefix), "" !== o2.provider && r2.push("iconify--" + o2.provider), { data: i2, classes: r2 };
} }, render() {
  this.counter;
  const e2 = this.$attrs, t2 = this.iconMounted || e2.ssr ? this.getIcon(e2.icon, e2.onLoad, e2.customise) : null;
  if (!t2) return tt(ot, e2);
  let n2 = e2;
  return t2.classes && (n2 = { ...e2, class: ("string" == typeof e2.class ? e2.class + " " : "") + t2.classes.join(" ") }), tt({ ...Y, ...t2.data }, n2);
} });
const it = defineComponent({ __name: "Icon", __ssrInlineRender: true, props: { name: { type: String, required: true }, size: { type: String, default: "" } }, async setup(e2) {
  let t2, u2;
  const y2 = qo(), w2 = l(), j2 = e2;
  watch(() => {
    var _a;
    return (_a = w2.nuxtIcon) == null ? void 0 : _a.iconifyApiOptions;
  }, () => {
    var _a, _b, _c, _d, _e2, _f;
    if ((_b = (_a = w2.nuxtIcon) == null ? void 0 : _a.iconifyApiOptions) == null ? void 0 : _b.url) {
      try {
        new URL(w2.nuxtIcon.iconifyApiOptions.url);
      } catch (e3) {
        return;
      }
      ((_d = (_c = w2.nuxtIcon) == null ? void 0 : _c.iconifyApiOptions) == null ? void 0 : _d.publicApiFallback) ? Oe("custom", { resources: [(_e2 = w2.nuxtIcon) == null ? void 0 : _e2.iconifyApiOptions.url], index: 0 }) : Oe("", { resources: [(_f = w2.nuxtIcon) == null ? void 0 : _f.iconifyApiOptions.url] });
    }
  }, { immediate: true });
  const k2 = bn("icons", () => ({})), _2 = ref(false), O2 = computed(() => {
    var _a, _b;
    return ((_b = (_a = w2.nuxtIcon) == null ? void 0 : _a.aliases) == null ? void 0 : _b[j2.name]) ? w2.nuxtIcon.aliases[j2.name] : j2.name;
  }), S2 = computed(() => a(O2.value)), I2 = computed(() => [S2.value.provider, S2.value.prefix, S2.value.name].filter(Boolean).join(":")), z2 = computed(() => {
    var _a;
    return (_a = k2.value) == null ? void 0 : _a[I2.value];
  }), F2 = computed(() => {
    var _a;
    return (_a = y2.vueApp) == null ? void 0 : _a.component(O2.value);
  }), E2 = computed(() => {
    var _a, _b, _c;
    if (!j2.size && "boolean" == typeof ((_a = w2.nuxtIcon) == null ? void 0 : _a.size) && !((_b = w2.nuxtIcon) == null ? void 0 : _b.size)) return;
    const e3 = j2.size || ((_c = w2.nuxtIcon) == null ? void 0 : _c.size) || "1em";
    return String(Number(e3)) === e3 ? `${e3}px` : e3;
  }), L2 = computed(() => {
    var _a, _b;
    return (_b = (_a = w2 == null ? void 0 : w2.nuxtIcon) == null ? void 0 : _a.class) != null ? _b : "icon";
  });
  async function T2() {
    var _a;
    F2.value || ((_a = k2.value) == null ? void 0 : _a[I2.value]) || (_2.value = true, k2.value[I2.value] = await ((e3) => new Promise((t3, n2) => {
      const o2 = "string" == typeof e3 ? J(e3, true) : e3;
      o2 ? Be([o2 || e3], (i2) => {
        if (i2.length && o2) {
          const e4 = ue(o2);
          if (e4) return void t3({ ...Y, ...e4 });
        }
        n2(e3);
      }) : n2(e3);
    }))(S2.value).catch(() => {
    }), _2.value = false);
  }
  return watch(O2, T2), !F2.value && ([t2, u2] = withAsyncContext(() => T2()), t2 = await t2, u2()), (t3, n2, o2, i2) => {
    _2.value ? n2(`<span${ssrRenderAttrs(mergeProps({ class: L2.value, style: { width: E2.value, height: E2.value } }, i2))} data-v-23ed637d></span>`) : z2.value ? n2(ssrRenderComponent(unref(V), mergeProps({ icon: z2.value, class: L2.value, width: E2.value, height: E2.value }, i2), null, o2)) : F2.value ? ssrRenderVNode(n2, createVNode(resolveDynamicComponent(F2.value), mergeProps({ class: L2.value, width: E2.value, height: E2.value }, i2), null), o2) : (n2(`<span${ssrRenderAttrs(mergeProps({ class: L2.value, style: { fontSize: E2.value, lineHeight: E2.value, width: E2.value, height: E2.value } }, i2))} data-v-23ed637d>`), ssrRenderSlot(t3.$slots, "default", {}, () => {
      n2(`${ssrInterpolate(e2.name)}`);
    }, n2, o2), n2("</span>"));
  };
} }), rt = it.setup;
it.setup = (e2, t2) => {
  const n2 = useSSRContext();
  return (n2.modules || (n2.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/nuxt-icon@0.6.10_magicast@0.3.5_vite@7.1.5_@types+node@24.5.2_jiti@2.5.1_terser@5.44.0_yaml@2_wt6ipfrufrr5o7cdjswvzctb6y/node_modules/nuxt-icon/dist/runtime/Icon.vue"), rt ? rt(e2, t2) : void 0;
};
const st = o(it, [["__scopeId", "data-v-23ed637d"]]);

export { st as default };
//# sourceMappingURL=Icon-HF-gEWU5.mjs.map
