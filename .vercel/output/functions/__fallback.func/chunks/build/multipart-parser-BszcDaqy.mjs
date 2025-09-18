import { B as vt, C as pt } from './server.mjs';
import 'vue';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import '../nitro/nitro.mjs';
import 'lru-cache';
import 'devalue';
import 'consola';
import 'unhead';
import 'node:events';
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
import 'ipx';
import 'vue-router';

var n = Object.defineProperty, o = (e2, t2) => n(e2, "name", { value: t2, configurable: true });
let r = 0;
const i = { START_BOUNDARY: r++, HEADER_FIELD_START: r++, HEADER_FIELD: r++, HEADER_VALUE_START: r++, HEADER_VALUE: r++, HEADER_VALUE_ALMOST_DONE: r++, HEADERS_ALMOST_DONE: r++, PART_DATA_START: r++, PART_DATA: r++, END: r++ };
let a = 1;
const s = a, d = a *= 2, l = o((e2) => 32 | e2, "lower"), u = o(() => {
}, "noop"), h = class {
  constructor(e2) {
    this.index = 0, this.flags = 0, this.onHeaderEnd = u, this.onHeaderField = u, this.onHeadersEnd = u, this.onHeaderValue = u, this.onPartBegin = u, this.onPartData = u, this.onPartEnd = u, this.boundaryChars = {}, e2 = "\r\n--" + e2;
    const t2 = new Uint8Array(e2.length);
    for (let n2 = 0; n2 < e2.length; n2++) t2[n2] = e2.charCodeAt(n2), this.boundaryChars[t2[n2]] = true;
    this.boundary = t2, this.lookbehind = new Uint8Array(this.boundary.length + 8), this.state = i.START_BOUNDARY;
  }
  write(e2) {
    let t2 = 0;
    const n2 = e2.length;
    let r2 = this.index, { lookbehind: a2, boundary: u2, boundaryChars: h2, index: p2, state: E2, flags: m2 } = this;
    const A = this.boundary.length, _ = A - 1, c = e2.length;
    let D, f;
    const T = o((e3) => {
      this[e3 + "Mark"] = t2;
    }, "mark"), b = o((e3) => {
      delete this[e3 + "Mark"];
    }, "clear"), R = o((e3, t3, n3, o2) => {
      (void 0 === t3 || t3 !== n3) && this[e3](o2 && o2.subarray(t3, n3));
    }, "callback"), H = o((n3, o2) => {
      const r3 = n3 + "Mark";
      r3 in this && (o2 ? (R(n3, this[r3], t2, e2), delete this[r3]) : (R(n3, this[r3], e2.length, e2), this[r3] = 0));
    }, "dataCallback");
    for (t2 = 0; t2 < n2; t2++) switch (D = e2[t2], E2) {
      case i.START_BOUNDARY:
        if (p2 === u2.length - 2) {
          if (45 === D) m2 |= d;
          else if (13 !== D) return;
          p2++;
          break;
        }
        if (p2 - 1 == u2.length - 2) {
          if (m2 & d && 45 === D) E2 = i.END, m2 = 0;
          else {
            if (m2 & d || 10 !== D) return;
            p2 = 0, R("onPartBegin"), E2 = i.HEADER_FIELD_START;
          }
          break;
        }
        D !== u2[p2 + 2] && (p2 = -2), D === u2[p2 + 2] && p2++;
        break;
      case i.HEADER_FIELD_START:
        E2 = i.HEADER_FIELD, T("onHeaderField"), p2 = 0;
      case i.HEADER_FIELD:
        if (13 === D) {
          b("onHeaderField"), E2 = i.HEADERS_ALMOST_DONE;
          break;
        }
        if (p2++, 45 === D) break;
        if (58 === D) {
          if (1 === p2) return;
          H("onHeaderField", true), E2 = i.HEADER_VALUE_START;
          break;
        }
        if (f = l(D), f < 97 || f > 122) return;
        break;
      case i.HEADER_VALUE_START:
        if (32 === D) break;
        T("onHeaderValue"), E2 = i.HEADER_VALUE;
      case i.HEADER_VALUE:
        13 === D && (H("onHeaderValue", true), R("onHeaderEnd"), E2 = i.HEADER_VALUE_ALMOST_DONE);
        break;
      case i.HEADER_VALUE_ALMOST_DONE:
        if (10 !== D) return;
        E2 = i.HEADER_FIELD_START;
        break;
      case i.HEADERS_ALMOST_DONE:
        if (10 !== D) return;
        R("onHeadersEnd"), E2 = i.PART_DATA_START;
        break;
      case i.PART_DATA_START:
        E2 = i.PART_DATA, T("onPartData");
      case i.PART_DATA:
        if (r2 = p2, 0 === p2) {
          for (t2 += _; t2 < c && !(e2[t2] in h2); ) t2 += A;
          t2 -= _, D = e2[t2];
        }
        if (p2 < u2.length) u2[p2] === D ? (0 === p2 && H("onPartData", true), p2++) : p2 = 0;
        else if (p2 === u2.length) p2++, 13 === D ? m2 |= s : 45 === D ? m2 |= d : p2 = 0;
        else if (p2 - 1 === u2.length) if (m2 & s) {
          if (p2 = 0, 10 === D) {
            m2 &= ~s, R("onPartEnd"), R("onPartBegin"), E2 = i.HEADER_FIELD_START;
            break;
          }
        } else m2 & d && 45 === D ? (R("onPartEnd"), E2 = i.END, m2 = 0) : p2 = 0;
        if (p2 > 0) a2[p2 - 1] = D;
        else if (r2 > 0) {
          const e3 = new Uint8Array(a2.buffer, a2.byteOffset, a2.byteLength);
          R("onPartData", 0, r2, e3), r2 = 0, T("onPartData"), t2--;
        }
        break;
      case i.END:
        break;
      default:
        throw new Error(`Unexpected state entered: ${E2}`);
    }
    H("onHeaderField"), H("onHeaderValue"), H("onPartData"), this.index = p2, this.state = E2, this.flags = m2;
  }
  end() {
    if (this.state === i.HEADER_FIELD_START && 0 === this.index || this.state === i.PART_DATA && this.index === this.boundary.length) this.onPartEnd();
    else if (this.state !== i.END) throw new Error("MultipartParser.end(): stream ended unexpectedly");
  }
};
o(h, "MultipartParser");
let p = h;
function E(e2) {
  const t2 = e2.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);
  if (!t2) return;
  const n2 = t2[2] || t2[3] || "";
  let o2 = n2.slice(n2.lastIndexOf("\\") + 1);
  return o2 = o2.replace(/%22/g, '"'), o2 = o2.replace(/&#(\d{4});/g, (e3, t3) => String.fromCharCode(t3)), o2;
}
async function m(n2, r2) {
  if (!/multipart/i.test(r2)) throw new TypeError("Failed to fetch");
  const i2 = r2.match(/boundary=(?:"([^"]+)"|([^;]+))/i);
  if (!i2) throw new TypeError("no or bad content-type header, no multipart boundary");
  const a2 = new p(i2[1] || i2[2]);
  let s2, d2, l2, u2, h2, m2;
  const A = [], _ = new vt(), c = o((e2) => {
    l2 += b.decode(e2, { stream: true });
  }, "onPartData"), D = o((e2) => {
    A.push(e2);
  }, "appendToFile"), f = o(() => {
    const e2 = new pt(A, m2, { type: h2 });
    _.append(u2, e2);
  }, "appendFileToFormData"), T = o(() => {
    _.append(u2, l2);
  }, "appendEntryToFormData"), b = new TextDecoder("utf-8");
  b.decode(), a2.onPartBegin = function() {
    a2.onPartData = c, a2.onPartEnd = T, s2 = "", d2 = "", l2 = "", u2 = "", h2 = "", m2 = null, A.length = 0;
  }, a2.onHeaderField = function(e2) {
    s2 += b.decode(e2, { stream: true });
  }, a2.onHeaderValue = function(e2) {
    d2 += b.decode(e2, { stream: true });
  }, a2.onHeaderEnd = function() {
    if (d2 += b.decode(), s2 = s2.toLowerCase(), "content-disposition" === s2) {
      const e2 = d2.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);
      e2 && (u2 = e2[2] || e2[3] || ""), m2 = E(d2), m2 && (a2.onPartData = D, a2.onPartEnd = f);
    } else "content-type" === s2 && (h2 = d2);
    d2 = "", s2 = "";
  };
  for await (const e2 of n2) a2.write(e2);
  return a2.end(), _;
}
o(E, "_fileName"), o(m, "toFormData");

export { m as toFormData };
//# sourceMappingURL=multipart-parser-BszcDaqy.mjs.map
