import { ref } from 'vue';
import { ak as getRequestHeader, a3 as destr, ai as klona, al as isEqual, am as setCookie, an as getCookie, ao as deleteCookie } from '../nitro/nitro.mjs';
import { e as Fo, r as yn, g as qo } from './server.mjs';

function parse(str, options) {
  if (typeof str !== "string") {
    throw new TypeError("argument str must be a string");
  }
  const obj = {};
  const opt = options || {};
  const dec = opt.decode || decode;
  let index = 0;
  while (index < str.length) {
    const eqIdx = str.indexOf("=", index);
    if (eqIdx === -1) {
      break;
    }
    let endIdx = str.indexOf(";", index);
    if (endIdx === -1) {
      endIdx = str.length;
    } else if (endIdx < eqIdx) {
      index = str.lastIndexOf(";", eqIdx - 1) + 1;
      continue;
    }
    const key = str.slice(index, eqIdx).trim();
    if (opt?.filter && !opt?.filter(key)) {
      index = endIdx + 1;
      continue;
    }
    if (void 0 === obj[key]) {
      let val = str.slice(eqIdx + 1, endIdx).trim();
      if (val.codePointAt(0) === 34) {
        val = val.slice(1, -1);
      }
      obj[key] = tryDecode(val, dec);
    }
    index = endIdx + 1;
  }
  return obj;
}
function decode(str) {
  return str.includes("%") ? decodeURIComponent(str) : str;
}
function tryDecode(str, decode2) {
  try {
    return decode2(str);
  } catch {
    return str;
  }
}

const c = { path: "/", watch: true, decode: (e2) => destr(decodeURIComponent(e2)), encode: (e2) => encodeURIComponent("string" == typeof e2 ? e2 : JSON.stringify(e2)) };
function a(t2, u2) {
  var _a, _b, _c;
  const a2 = { ...c, ...u2 };
  (_a = a2.filter) != null ? _a : a2.filter = (e2) => e2 === t2;
  const v2 = (function(e2 = {}) {
    return parse(getRequestHeader(yn(), "cookie") || "", e2);
  })(a2) || {};
  let h;
  void 0 !== a2.maxAge ? h = 1e3 * a2.maxAge : a2.expires && (h = a2.expires.getTime() - Date.now());
  const k = klona(void 0 !== h && h <= 0 ? void 0 : (_c = v2[t2]) != null ? _c : (_b = a2.default) == null ? void 0 : _b.call(a2)), f = ref(k);
  {
    const e2 = qo(), o2 = () => {
      a2.readonly || isEqual(f.value, v2[t2]) || (e2._cookies || (e2._cookies = {}), t2 in e2._cookies && isEqual(f.value, e2._cookies[t2]) || (e2._cookies[t2] = f.value, (function(e3, o3, i3, t3 = {}) {
        if (e3) {
          if (null != i3) return setCookie(e3, o3, i3, t3);
          if (void 0 !== getCookie(e3, o3)) deleteCookie(e3, o3, t3);
        }
      })(yn(e2), t2, f.value, a2)));
    }, i2 = e2.hooks.hookOnce("app:rendered", o2);
    e2.hooks.hookOnce("app:error", () => (i2(), o2()));
  }
  return f;
}
const v = () => ({ isEnabled: () => {
  const e2 = Fo().query;
  return !(Object.prototype.hasOwnProperty.call(e2, "preview") && !e2.preview) && !(!e2.preview && !a("previewToken").value);
}, getPreviewToken: () => a("previewToken").value || void 0, setPreviewToken: (e2) => {
  a("previewToken").value = e2, Fo().query.preview = e2 || "";
} });

export { v };
//# sourceMappingURL=preview-BhsI3sP2.mjs.map
