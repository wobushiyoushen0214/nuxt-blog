const r = ["p", "h1", "h2", "h3", "h4", "h5", "h6", "li"];
function t(r2, t2) {
  return r2.type === t2 || ("object" == typeof r2.type && r2.type.tag === t2 || r2.tag === t2);
}
function e(r2) {
  return t(r2, "text") || t(r2, Symbol.for("v-txt"));
}
function n(r2) {
  var _a;
  return Array.isArray(r2.children) || "string" == typeof r2.children ? r2.children : "function" == typeof ((_a = r2.children) == null ? void 0 : _a.default) ? r2.children.default() : [];
}
function i(r2) {
  if (!r2) return "";
  if (Array.isArray(r2)) return r2.map(i).join("");
  if (e(r2)) return r2.children || r2.value || "";
  const t2 = n(r2);
  return Array.isArray(t2) ? t2.map(i).filter(Boolean).join("") : "";
}
function a(e2, i2 = []) {
  if (Array.isArray(e2)) return e2.flatMap((r2) => a(r2, i2));
  let l2 = e2;
  return i2.some((r2) => "*" === r2 || t(e2, r2)) && (l2 = n(e2) || e2, !Array.isArray(l2) && r.some((r2) => t(e2, r2)) && (l2 = [l2])), l2;
}
function l(r2, t2 = []) {
  return r2 = Array.isArray(r2) ? r2 : [r2], t2.length ? r2.flatMap((r3) => l(a(r3, [t2[0]]), t2.slice(1))).filter((r3) => !(e(r3) && "" === i(r3).trim())) : r2;
}
function o(r2, t2 = []) {
  return "string" == typeof t2 && (t2 = t2.split(/[,\s]/).map((r3) => r3.trim()).filter(Boolean)), t2.length ? l(r2, t2).reduce((r3, t3) => (e(t3) ? "string" == typeof r3[r3.length - 1] ? r3[r3.length - 1] += t3.children : r3.push(t3.children) : r3.push(t3), r3), []) : r2;
}

export { o };
//# sourceMappingURL=node-Co_CclnQ.mjs.map
