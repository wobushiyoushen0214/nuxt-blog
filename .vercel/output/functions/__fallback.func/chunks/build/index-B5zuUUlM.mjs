const t = new TextDecoder(), e = (e2, i2 = 0, n2 = e2.length) => t.decode(e2.slice(i2, n2)), i = (t2, e2 = 0, i2 = t2.length) => t2.slice(e2, i2).reduce((t3, e3) => t3 + ("0" + e3.toString(16)).slice(-2), ""), n = (t2, e2 = 0) => {
  const i2 = t2[e2] + 256 * t2[e2 + 1];
  return i2 | 131070 * (32768 & i2);
}, r = (t2, e2 = 0) => 256 * t2[e2] + t2[e2 + 1], c = (t2, e2 = 0) => t2[e2] + 256 * t2[e2 + 1], h = (t2, e2 = 0) => t2[e2] + 256 * t2[e2 + 1] + 65536 * t2[e2 + 2], o = (t2, e2 = 0) => t2[e2] + 256 * t2[e2 + 1] + 65536 * t2[e2 + 2] + (t2[e2 + 3] << 24), a = (t2, e2 = 0) => t2[e2] * 2 ** 24 + 65536 * t2[e2 + 1] + 256 * t2[e2 + 2] + t2[e2 + 3], s = (t2, e2 = 0) => t2[e2] + 256 * t2[e2 + 1] + 65536 * t2[e2 + 2] + t2[e2 + 3] * 2 ** 24, u = { readUInt16BE: r, readUInt16LE: c, readUInt32BE: a, readUInt32LE: s };
function f(t2, e2, i2, n2) {
  i2 = i2 || 0;
  return u["readUInt" + e2 + (n2 ? "BE" : "LE")](t2, i2);
}
const l = { validate: (t2) => "BM" === e(t2, 0, 2), calculate: (t2) => ({ height: Math.abs(o(t2, 22)), width: s(t2, 18) }) };
function d(t2, e2) {
  const i2 = t2[e2];
  return 0 === i2 ? 256 : i2;
}
function w(t2, e2) {
  const i2 = 6 + 16 * e2;
  return { height: d(t2, i2 + 1), width: d(t2, i2) };
}
const g = { validate(t2) {
  const e2 = c(t2, 0), i2 = c(t2, 4);
  if (0 !== e2 || 0 === i2) return false;
  return 1 === c(t2, 2);
}, calculate(t2) {
  const e2 = c(t2, 4), i2 = w(t2, 0);
  if (1 === e2) return i2;
  const n2 = [i2];
  for (let r2 = 1; r2 < e2; r2 += 1) n2.push(w(t2, r2));
  return { height: i2.height, images: n2, width: i2.width };
} }, p = { validate(t2) {
  const e2 = c(t2, 0), i2 = c(t2, 4);
  if (0 !== e2 || 0 === i2) return false;
  return 2 === c(t2, 2);
}, calculate: (t2) => g.calculate(t2) }, v = { validate: (t2) => 542327876 === s(t2, 0), calculate: (t2) => ({ height: s(t2, 12), width: s(t2, 16) }) }, m = /^GIF8[79]a/, b = { validate: (t2) => m.test(e(t2, 0, 6)), calculate: (t2) => ({ height: c(t2, 8), width: c(t2, 6) }) }, I = { ICON: 32, "ICN#": 32, "icm#": 16, icm4: 16, icm8: 16, "ics#": 16, ics4: 16, ics8: 16, is32: 16, s8mk: 16, icp4: 16, icl4: 32, icl8: 32, il32: 32, l8mk: 32, icp5: 32, ic11: 32, ich4: 48, ich8: 48, ih32: 48, h8mk: 48, icp6: 64, ic12: 32, it32: 128, t8mk: 128, ic07: 128, ic08: 256, ic13: 256, ic09: 512, ic14: 512, ic10: 1024 };
function E(t2, i2) {
  const n2 = i2 + 4;
  return [e(t2, i2, n2), a(t2, n2)];
}
function P(t2) {
  const e2 = I[t2];
  return { width: e2, height: e2, type: t2 };
}
const y = { validate: (t2) => "icns" === e(t2, 0, 4), calculate(t2) {
  const e2 = t2.length, i2 = a(t2, 4);
  let n2 = 8, r2 = E(t2, n2), c2 = P(r2[0]);
  if (n2 += r2[1], n2 === i2) return c2;
  const h2 = { height: c2.height, images: [c2], width: c2.width };
  for (; n2 < i2 && n2 < e2; ) r2 = E(t2, n2), c2 = P(r2[0]), n2 += r2[1], h2.images.push(c2);
  return h2;
} }, T = { validate: (t2) => "ff4fff51" === i(t2, 0, 4), calculate: (t2) => ({ height: a(t2, 12), width: a(t2, 8) }) }, x = "66747970", k = "6a703268", M = "6a502020", B = "72726571", N = (t2) => ({ height: a(t2, 4), width: a(t2, 8) }), U = { validate(t2) {
  const e2 = i(t2, 4, 8), n2 = a(t2, 0);
  if (e2 !== M || n2 < 1) return false;
  const r2 = n2 + 4, c2 = a(t2, n2), h2 = t2.slice(r2, r2 + c2);
  return i(h2, 0, 4) === x;
}, calculate(t2) {
  const n2 = a(t2, 0);
  let c2 = n2 + 4 + r(t2, n2 + 2);
  switch (i(t2, c2, c2 + 4)) {
    case B:
      return c2 = c2 + 4 + 4 + ((t3) => {
        const e2 = t3[0];
        let i2 = 1 + 2 * e2;
        return i2 = i2 + 2 + r(t3, i2) * (2 + e2), i2 + 2 + r(t3, i2) * (16 + e2);
      })(t2.slice(c2 + 4)), N(t2.slice(c2 + 8, c2 + 24));
    case k:
      return N(t2.slice(c2 + 8, c2 + 24));
    default:
      throw new TypeError("Unsupported header found: " + e(t2, c2, c2 + 4));
  }
} };
function j(t2) {
  return "45786966" === i(t2, 2, 6);
}
function G(t2, e2) {
  return { height: r(t2, e2), width: r(t2, e2 + 2) };
}
function L(t2, e2) {
  const n2 = t2.slice(2, e2), r2 = i(n2, 6, 8), c2 = "4d4d" === r2;
  if (c2 || "4949" === r2) return (function(t3, e3) {
    const i2 = f(t3, 16, 14, e3);
    for (let n3 = 0; n3 < i2; n3++) {
      const i3 = 16 + 12 * n3, r3 = i3 + 12;
      if (i3 > t3.length) return;
      const c3 = t3.slice(i3, r3);
      if (274 === f(c3, 16, 0, e3)) {
        if (3 !== f(c3, 16, 2, e3)) return;
        if (1 !== f(c3, 32, 4, e3)) return;
        return f(c3, 16, 8, e3);
      }
    }
  })(n2, c2);
}
function z(t2, e2) {
  if (e2 > t2.length) throw new TypeError("Corrupt JPG, exceeded buffer limits");
  if (255 !== t2[e2]) throw new TypeError("Invalid JPG, marker table corrupted");
}
const C = { validate: (t2) => "ffd8" === i(t2, 0, 2), calculate(t2) {
  let e2, i2;
  for (t2 = t2.slice(4); t2.length > 0; ) {
    const n2 = r(t2, 0);
    if (j(t2) && (e2 = L(t2, n2)), z(t2, n2), i2 = t2[n2 + 1], 192 === i2 || 193 === i2 || 194 === i2) {
      const i3 = G(t2, n2 + 5);
      return e2 ? { height: i3.height, orientation: e2, width: i3.width } : i3;
    }
    t2 = t2.slice(n2 + 2);
  }
  throw new TypeError("Invalid JPG, no size found");
} }, V = { validate: (t2) => "KTX 11" === e(t2, 1, 7), calculate: (t2) => ({ height: s(t2, 40), width: s(t2, 36) }) }, A = "CgBI", F = { validate(t2) {
  if ("PNG\r\n\n" === e(t2, 1, 8)) {
    let i2 = e(t2, 12, 16);
    if (i2 === A && (i2 = e(t2, 28, 32)), "IHDR" !== i2) throw new TypeError("Invalid PNG");
    return true;
  }
  return false;
}, calculate: (t2) => e(t2, 12, 16) === A ? { height: a(t2, 36), width: a(t2, 32) } : { height: a(t2, 20), width: a(t2, 16) } }, S = { P1: "pbm/ascii", P2: "pgm/ascii", P3: "ppm/ascii", P4: "pbm", P5: "pgm", P6: "ppm", P7: "pam", PF: "pfm" }, $ = { default: (t2) => {
  let e2 = [];
  for (; t2.length > 0; ) {
    const i2 = t2.shift();
    if ("#" !== i2[0]) {
      e2 = i2.split(" ");
      break;
    }
  }
  if (2 === e2.length) return { height: Number.parseInt(e2[1], 10), width: Number.parseInt(e2[0], 10) };
  throw new TypeError("Invalid PNM");
}, pam: (t2) => {
  const e2 = {};
  for (; t2.length > 0; ) {
    const i2 = t2.shift();
    if (i2.length > 16 || (i2.codePointAt(0) || 0) > 128) continue;
    const [n2, r2] = i2.split(" ");
    if (n2 && r2 && (e2[n2.toLowerCase()] = Number.parseInt(r2, 10)), e2.height && e2.width) break;
  }
  if (e2.height && e2.width) return { height: e2.height, width: e2.width };
  throw new TypeError("Invalid PAM");
} }, J = { validate: (t2) => e(t2, 0, 2) in S, calculate(t2) {
  const i2 = e(t2, 0, 2), n2 = S[i2], r2 = e(t2, 3).split(/[\n\r]+/);
  return ($[n2] || $.default)(r2);
} }, O = { validate: (t2) => "8BPS" === e(t2, 0, 4), calculate: (t2) => ({ height: a(t2, 14), width: a(t2, 18) }) }, R = /<svg\s([^"'>]|"[^"]*"|'[^']*')*>/, W = { height: /\sheight=(["'])([^%]+?)\1/, root: R, viewbox: /\sviewbox=(["'])(.+?)\1/i, width: /\swidth=(["'])([^%]+?)\1/ }, D = 2.54, X = { in: 96, cm: 96 / D, em: 16, ex: 8, m: 96 / D * 100, mm: 96 / D / 10, pc: 96 / 72 / 12, pt: 96 / 72, px: 1 }, H = new RegExp(`^([0-9.]+(?:e\\d+)?)(${Object.keys(X).join("|")})?$`);
function K(t2) {
  const e2 = H.exec(t2);
  if (e2) return Math.round(Number(e2[1]) * (X[e2[2]] || 1));
}
function q(t2) {
  const e2 = t2.split(" ");
  return { height: K(e2[3]), width: K(e2[2]) };
}
const Q = { validate: (t2) => R.test(e(t2, 0, 1e3)), calculate(t2) {
  const i2 = e(t2).match(W.root);
  if (i2) {
    const t3 = (function(t4) {
      const e2 = t4.match(W.width), i3 = t4.match(W.height), n2 = t4.match(W.viewbox);
      return { height: i3 && K(i3[2]), viewbox: n2 && q(n2[2]), width: e2 && K(e2[2]) };
    })(i2[0]);
    if (t3.width && t3.height) return (function(t4) {
      return { height: t4.height, width: t4.width };
    })(t3);
    if (t3.viewbox) return (function(t4, e2) {
      const i3 = e2.width / e2.height;
      return t4.width ? { height: Math.floor(t4.width / i3), width: t4.width } : t4.height ? { height: t4.height, width: Math.floor(t4.height * i3) } : { height: e2.height, width: e2.width };
    })(t3, t3.viewbox);
  }
  throw new TypeError("Invalid SVG");
} }, Y = { validate: (t2) => 0 === c(t2, 0) && 0 === c(t2, 4), calculate: (t2) => ({ height: c(t2, 14), width: c(t2, 12) }) };
function Z(t2, e2) {
  const i2 = f(t2, 16, 8, e2);
  return (f(t2, 16, 10, e2) << 16) + i2;
}
function _(t2) {
  if (t2.length > 24) return t2.slice(12);
}
const tt = /* @__PURE__ */ new Set(["49492a00", "4d4d002a"]);
function et(t2, i2, n2 = 0, r2 = t2.length) {
  for (let c2 = n2; c2 < r2; ) {
    const n3 = a(t2, c2);
    if (e(t2, c2 + 4, c2 + 8) === i2) return { offset: c2, size: n3 };
    if (n3 <= 0 || c2 + n3 > r2) break;
    c2 += n3;
  }
  throw new Error(`${i2} box not found`);
}
const it = { bmp: l, cur: p, dds: v, gif: b, icns: y, ico: g, j2c: T, jp2: U, jpg: C, ktx: V, png: F, pnm: J, psd: O, svg: Q, tga: Y, tiff: { validate: (t2) => tt.has(i(t2, 0, 4)), calculate(t2) {
  const i2 = "BE" === (function(t3) {
    const i3 = e(t3, 0, 2);
    return "II" === i3 ? "LE" : "MM" === i3 ? "BE" : void 0;
  })(t2), n2 = (function(t3, e2) {
    const i3 = f(t3, 32, 4, e2);
    let n3 = 1024;
    const r3 = t3.length;
    return i3 + n3 > r3 && (n3 = r3 - i3 - 10), t3.slice(i3 + 2, i3 + 2 + n3);
  })(t2, i2), r2 = (function(t3, e2) {
    const i3 = {};
    let n3 = t3;
    for (; n3 && n3.length > 0; ) {
      const t4 = f(n3, 16, 0, e2), r3 = f(n3, 16, 2, e2), c3 = f(n3, 32, 4, e2);
      if (0 === t4) break;
      1 !== c3 || 3 !== r3 && 4 !== r3 || (i3[t4] = Z(n3, e2)), n3 = _(n3);
    }
    return i3;
  })(n2, i2), c2 = r2[256], h2 = r2[257];
  if (!c2 || !h2) throw new TypeError("Invalid Tiff. Missing tags");
  return { height: h2, width: c2 };
} }, webp: { validate(t2) {
  const i2 = "RIFF" === e(t2, 0, 4), n2 = "WEBP" === e(t2, 8, 12), r2 = "VP8" === e(t2, 12, 15);
  return i2 && n2 && r2;
}, calculate(t2) {
  const r2 = e(t2, 12, 16);
  if (t2 = t2.slice(20, 30), "VP8X" === r2) {
    const e2 = t2[0];
    if (!(192 & e2) && !(1 & e2)) return (function(t3) {
      return { height: 1 + h(t3, 7), width: 1 + h(t3, 4) };
    })(t2);
    throw new TypeError("Invalid WebP");
  }
  if ("VP8 " === r2 && 47 !== t2[0]) return (function(t3) {
    return { height: 16383 & n(t3, 8), width: 16383 & n(t3, 6) };
  })(t2);
  const c2 = i(t2, 3, 6);
  if ("VP8L" === r2 && "9d012a" !== c2) return (function(t3) {
    return { height: 1 + ((15 & t3[4]) << 10 | t3[3] << 2 | (192 & t3[2]) >> 6), width: 1 + ((63 & t3[2]) << 8 | t3[1]) };
  })(t2);
  throw new TypeError("Invalid WebP");
} }, avif: { validate: (t2) => "avif" === e(t2, 8, 12), calculate: (t2) => {
  const e2 = et(t2, "meta"), i2 = et(t2, "iprp", e2.offset + 12, e2.offset + e2.size), n2 = et(t2, "ipco", i2.offset + 8, i2.offset + i2.size), r2 = et(t2, "ispe", n2.offset + 8, n2.offset + n2.size);
  return { width: a(t2, r2.offset + 12), height: a(t2, r2.offset + 16) };
} } }, nt = Object.keys(it), rt = { 56: "psd", 66: "bmp", 68: "dds", 71: "gif", 73: "tiff", 77: "tiff", 82: "webp", 105: "icns", 137: "png", 255: "jpg" };
function ct(t2) {
  if (!(t2 instanceof Uint8Array)) throw new TypeError("Input should be a Uint8Array");
  const e2 = (function(t3) {
    const e3 = t3[0];
    if (e3 in rt) {
      const i2 = rt[e3];
      if (i2 && it[i2].validate(t3)) return i2;
    }
    return nt.find((e4) => it[e4].validate(t3));
  })(t2);
  if (void 0 !== e2 && e2 in it) {
    const i2 = it[e2].calculate(t2);
    if (void 0 !== i2) return i2.type = e2, i2;
  }
  throw new TypeError(`Unsupported file type: ${e2}`);
}

export { ct as imageMeta };
//# sourceMappingURL=index-B5zuUUlM.mjs.map
