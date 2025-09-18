import { defineComponent, computed, mergeProps, unref, h, getCurrentInstance, toRaw, reactive, watch, resolveComponent, defineAsyncComponent, Text, Comment, useSSRContext } from 'vue';
import { a3 as destr } from '../nitro/nitro.mjs';
import { o as o$1 } from './node-Co_CclnQ.mjs';
import { ssrRenderComponent } from 'vue/server-renderer';
import { v } from './preview-BhsI3sP2.mjs';
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

const n = /\d/, t = ["-", "_", "/", "."];
function o(t2 = "") {
  if (!n.test(t2)) return t2 !== t2.toLowerCase();
}
function r(n2, r2) {
  const e2 = t, i2 = [];
  if (!n2 || "string" != typeof n2) return i2;
  let s, u, c = "";
  for (const t2 of n2) {
    const n3 = e2.includes(t2);
    if (true === n3) {
      i2.push(c), c = "", s = void 0;
      continue;
    }
    const r3 = o(t2);
    if (false === u) {
      if (false === s && true === r3) {
        i2.push(c), c = t2, s = r3;
        continue;
      }
      if (true === s && false === r3 && c.length > 1) {
        const n4 = c.at(-1);
        i2.push(c.slice(0, Math.max(0, c.length - 1))), c = n4 + t2, s = r3;
        continue;
      }
    }
    c += t2, s = r3, u = n3;
  }
  return i2.push(c), i2;
}
function e(n2, t2) {
  return n2 ? (Array.isArray(n2) ? n2 : r(n2)).map((n3) => (function(n4) {
    return n4 ? n4[0].toUpperCase() + n4.slice(1) : "";
  })(n3)).join("") : "";
}
function i(n2, t2) {
  return n2 ? (Array.isArray(n2) ? n2 : r(n2)).map((n3) => n3.toLowerCase()).join("-") : "";
}

class k {
  constructor(n2, e2, l2) {
    this.property = n2, this.normal = e2, l2 && (this.space = l2);
  }
}
function x(n2, e2) {
  const l2 = {}, o2 = {};
  let t2 = -1;
  for (; ++t2 < n2.length; ) Object.assign(l2, n2[t2].property), Object.assign(o2, n2[t2].normal);
  return new k(l2, o2, e2);
}
function S(n2) {
  return n2.toLowerCase();
}
k.prototype.property = {}, k.prototype.normal = {}, k.prototype.space = null;
class w {
  constructor(n2, e2) {
    this.property = n2, this.attribute = e2;
  }
}
w.prototype.space = null, w.prototype.boolean = false, w.prototype.booleanish = false, w.prototype.overloadedBoolean = false, w.prototype.number = false, w.prototype.commaSeparated = false, w.prototype.spaceSeparated = false, w.prototype.commaOrSpaceSeparated = false, w.prototype.mustUseProperty = false, w.prototype.defined = false;
let C = 0;
const P = _(), O = _(), D = _(), M = _(), L = _(), R = _(), j = _();
function _() {
  return 2 ** ++C;
}
const U = Object.freeze(Object.defineProperty({ __proto__: null, boolean: P, booleanish: O, commaOrSpaceSeparated: j, commaSeparated: R, number: M, overloadedBoolean: D, spaceSeparated: L }, Symbol.toStringTag, { value: "Module" })), z = Object.keys(U);
class A extends w {
  constructor(n2, e2, l2, o2) {
    let t2 = -1;
    if (super(n2, e2), E(this, "space", o2), "number" == typeof l2) for (; ++t2 < z.length; ) {
      const n3 = z[t2];
      E(this, z[t2], (l2 & U[n3]) === U[n3]);
    }
  }
}
function E(n2, e2, l2) {
  l2 && (n2[e2] = l2);
}
A.prototype.defined = true;
const T = {}.hasOwnProperty;
function B(n2) {
  const e2 = {}, l2 = {};
  let o2;
  for (o2 in n2.properties) if (T.call(n2.properties, o2)) {
    const t2 = n2.properties[o2], r2 = new A(o2, n2.transform(n2.attributes || {}, o2), t2, n2.space);
    n2.mustUseProperty && n2.mustUseProperty.includes(o2) && (r2.mustUseProperty = true), e2[o2] = r2, l2[S(o2)] = o2, l2[S(r2.attribute)] = o2;
  }
  return new k(e2, l2, n2.space);
}
const I = B({ space: "xlink", transform: (n2, e2) => "xlink:" + e2.slice(5).toLowerCase(), properties: { xLinkActuate: null, xLinkArcRole: null, xLinkHref: null, xLinkRole: null, xLinkShow: null, xLinkTitle: null, xLinkType: null } }), H = B({ space: "xml", transform: (n2, e2) => "xml:" + e2.slice(3).toLowerCase(), properties: { xmlLang: null, xmlBase: null, xmlSpace: null } });
function F(n2, e2) {
  return e2 in n2 ? n2[e2] : e2;
}
function q(n2, e2) {
  return F(n2, e2.toLowerCase());
}
const V = B({ space: "xmlns", attributes: { xmlnsxlink: "xmlns:xlink" }, transform: q, properties: { xmlns: null, xmlnsXLink: null } }), W = B({ transform: (n2, e2) => "role" === e2 ? e2 : "aria-" + e2.slice(4).toLowerCase(), properties: { ariaActiveDescendant: null, ariaAtomic: O, ariaAutoComplete: null, ariaBusy: O, ariaChecked: O, ariaColCount: M, ariaColIndex: M, ariaColSpan: M, ariaControls: L, ariaCurrent: null, ariaDescribedBy: L, ariaDetails: null, ariaDisabled: O, ariaDropEffect: L, ariaErrorMessage: null, ariaExpanded: O, ariaFlowTo: L, ariaGrabbed: O, ariaHasPopup: null, ariaHidden: O, ariaInvalid: null, ariaKeyShortcuts: null, ariaLabel: null, ariaLabelledBy: L, ariaLevel: M, ariaLive: null, ariaModal: O, ariaMultiLine: O, ariaMultiSelectable: O, ariaOrientation: null, ariaOwns: L, ariaPlaceholder: null, ariaPosInSet: M, ariaPressed: O, ariaReadOnly: O, ariaRelevant: null, ariaRequired: O, ariaRoleDescription: L, ariaRowCount: M, ariaRowIndex: M, ariaRowSpan: M, ariaSelected: O, ariaSetSize: M, ariaSort: null, ariaValueMax: M, ariaValueMin: M, ariaValueNow: M, ariaValueText: null, role: null } }), K = B({ space: "html", attributes: { acceptcharset: "accept-charset", classname: "class", htmlfor: "for", httpequiv: "http-equiv" }, transform: q, mustUseProperty: ["checked", "multiple", "muted", "selected"], properties: { abbr: null, accept: R, acceptCharset: L, accessKey: L, action: null, allow: null, allowFullScreen: P, allowPaymentRequest: P, allowUserMedia: P, alt: null, as: null, async: P, autoCapitalize: null, autoComplete: L, autoFocus: P, autoPlay: P, blocking: L, capture: null, charSet: null, checked: P, cite: null, className: L, cols: M, colSpan: null, content: null, contentEditable: O, controls: P, controlsList: L, coords: M | R, crossOrigin: null, data: null, dateTime: null, decoding: null, default: P, defer: P, dir: null, dirName: null, disabled: P, download: D, draggable: O, encType: null, enterKeyHint: null, fetchPriority: null, form: null, formAction: null, formEncType: null, formMethod: null, formNoValidate: P, formTarget: null, headers: L, height: M, hidden: P, high: M, href: null, hrefLang: null, htmlFor: L, httpEquiv: L, id: null, imageSizes: null, imageSrcSet: null, inert: P, inputMode: null, integrity: null, is: null, isMap: P, itemId: null, itemProp: L, itemRef: L, itemScope: P, itemType: L, kind: null, label: null, lang: null, language: null, list: null, loading: null, loop: P, low: M, manifest: null, max: null, maxLength: M, media: null, method: null, min: null, minLength: M, multiple: P, muted: P, name: null, nonce: null, noModule: P, noValidate: P, onAbort: null, onAfterPrint: null, onAuxClick: null, onBeforeMatch: null, onBeforePrint: null, onBeforeToggle: null, onBeforeUnload: null, onBlur: null, onCancel: null, onCanPlay: null, onCanPlayThrough: null, onChange: null, onClick: null, onClose: null, onContextLost: null, onContextMenu: null, onContextRestored: null, onCopy: null, onCueChange: null, onCut: null, onDblClick: null, onDrag: null, onDragEnd: null, onDragEnter: null, onDragExit: null, onDragLeave: null, onDragOver: null, onDragStart: null, onDrop: null, onDurationChange: null, onEmptied: null, onEnded: null, onError: null, onFocus: null, onFormData: null, onHashChange: null, onInput: null, onInvalid: null, onKeyDown: null, onKeyPress: null, onKeyUp: null, onLanguageChange: null, onLoad: null, onLoadedData: null, onLoadedMetadata: null, onLoadEnd: null, onLoadStart: null, onMessage: null, onMessageError: null, onMouseDown: null, onMouseEnter: null, onMouseLeave: null, onMouseMove: null, onMouseOut: null, onMouseOver: null, onMouseUp: null, onOffline: null, onOnline: null, onPageHide: null, onPageShow: null, onPaste: null, onPause: null, onPlay: null, onPlaying: null, onPopState: null, onProgress: null, onRateChange: null, onRejectionHandled: null, onReset: null, onResize: null, onScroll: null, onScrollEnd: null, onSecurityPolicyViolation: null, onSeeked: null, onSeeking: null, onSelect: null, onSlotChange: null, onStalled: null, onStorage: null, onSubmit: null, onSuspend: null, onTimeUpdate: null, onToggle: null, onUnhandledRejection: null, onUnload: null, onVolumeChange: null, onWaiting: null, onWheel: null, open: P, optimum: M, pattern: null, ping: L, placeholder: null, playsInline: P, popover: null, popoverTarget: null, popoverTargetAction: null, poster: null, preload: null, readOnly: P, referrerPolicy: null, rel: L, required: P, reversed: P, rows: M, rowSpan: M, sandbox: L, scope: null, scoped: P, seamless: P, selected: P, shadowRootClonable: P, shadowRootDelegatesFocus: P, shadowRootMode: null, shape: null, size: M, sizes: null, slot: null, span: M, spellCheck: O, src: null, srcDoc: null, srcLang: null, srcSet: null, start: M, step: null, style: null, tabIndex: M, target: null, title: null, translate: null, type: null, typeMustMatch: P, useMap: null, value: O, width: M, wrap: null, writingSuggestions: null, align: null, aLink: null, archive: L, axis: null, background: null, bgColor: null, border: M, borderColor: null, bottomMargin: M, cellPadding: null, cellSpacing: null, char: null, charOff: null, classId: null, clear: null, code: null, codeBase: null, codeType: null, color: null, compact: P, declare: P, event: null, face: null, frame: null, frameBorder: null, hSpace: M, leftMargin: M, link: null, longDesc: null, lowSrc: null, marginHeight: M, marginWidth: M, noResize: P, noHref: P, noShade: P, noWrap: P, object: null, profile: null, prompt: null, rev: null, rightMargin: M, rules: null, scheme: null, scrolling: O, standby: null, summary: null, text: null, topMargin: M, valueType: null, version: null, vAlign: null, vLink: null, vSpace: M, allowTransparency: null, autoCorrect: null, autoSave: null, disablePictureInPicture: P, disableRemotePlayback: P, prefix: null, property: null, results: M, security: null, unselectable: null } }), N = B({ space: "svg", attributes: { accentHeight: "accent-height", alignmentBaseline: "alignment-baseline", arabicForm: "arabic-form", baselineShift: "baseline-shift", capHeight: "cap-height", className: "class", clipPath: "clip-path", clipRule: "clip-rule", colorInterpolation: "color-interpolation", colorInterpolationFilters: "color-interpolation-filters", colorProfile: "color-profile", colorRendering: "color-rendering", crossOrigin: "crossorigin", dataType: "datatype", dominantBaseline: "dominant-baseline", enableBackground: "enable-background", fillOpacity: "fill-opacity", fillRule: "fill-rule", floodColor: "flood-color", floodOpacity: "flood-opacity", fontFamily: "font-family", fontSize: "font-size", fontSizeAdjust: "font-size-adjust", fontStretch: "font-stretch", fontStyle: "font-style", fontVariant: "font-variant", fontWeight: "font-weight", glyphName: "glyph-name", glyphOrientationHorizontal: "glyph-orientation-horizontal", glyphOrientationVertical: "glyph-orientation-vertical", hrefLang: "hreflang", horizAdvX: "horiz-adv-x", horizOriginX: "horiz-origin-x", horizOriginY: "horiz-origin-y", imageRendering: "image-rendering", letterSpacing: "letter-spacing", lightingColor: "lighting-color", markerEnd: "marker-end", markerMid: "marker-mid", markerStart: "marker-start", navDown: "nav-down", navDownLeft: "nav-down-left", navDownRight: "nav-down-right", navLeft: "nav-left", navNext: "nav-next", navPrev: "nav-prev", navRight: "nav-right", navUp: "nav-up", navUpLeft: "nav-up-left", navUpRight: "nav-up-right", onAbort: "onabort", onActivate: "onactivate", onAfterPrint: "onafterprint", onBeforePrint: "onbeforeprint", onBegin: "onbegin", onCancel: "oncancel", onCanPlay: "oncanplay", onCanPlayThrough: "oncanplaythrough", onChange: "onchange", onClick: "onclick", onClose: "onclose", onCopy: "oncopy", onCueChange: "oncuechange", onCut: "oncut", onDblClick: "ondblclick", onDrag: "ondrag", onDragEnd: "ondragend", onDragEnter: "ondragenter", onDragExit: "ondragexit", onDragLeave: "ondragleave", onDragOver: "ondragover", onDragStart: "ondragstart", onDrop: "ondrop", onDurationChange: "ondurationchange", onEmptied: "onemptied", onEnd: "onend", onEnded: "onended", onError: "onerror", onFocus: "onfocus", onFocusIn: "onfocusin", onFocusOut: "onfocusout", onHashChange: "onhashchange", onInput: "oninput", onInvalid: "oninvalid", onKeyDown: "onkeydown", onKeyPress: "onkeypress", onKeyUp: "onkeyup", onLoad: "onload", onLoadedData: "onloadeddata", onLoadedMetadata: "onloadedmetadata", onLoadStart: "onloadstart", onMessage: "onmessage", onMouseDown: "onmousedown", onMouseEnter: "onmouseenter", onMouseLeave: "onmouseleave", onMouseMove: "onmousemove", onMouseOut: "onmouseout", onMouseOver: "onmouseover", onMouseUp: "onmouseup", onMouseWheel: "onmousewheel", onOffline: "onoffline", onOnline: "ononline", onPageHide: "onpagehide", onPageShow: "onpageshow", onPaste: "onpaste", onPause: "onpause", onPlay: "onplay", onPlaying: "onplaying", onPopState: "onpopstate", onProgress: "onprogress", onRateChange: "onratechange", onRepeat: "onrepeat", onReset: "onreset", onResize: "onresize", onScroll: "onscroll", onSeeked: "onseeked", onSeeking: "onseeking", onSelect: "onselect", onShow: "onshow", onStalled: "onstalled", onStorage: "onstorage", onSubmit: "onsubmit", onSuspend: "onsuspend", onTimeUpdate: "ontimeupdate", onToggle: "ontoggle", onUnload: "onunload", onVolumeChange: "onvolumechange", onWaiting: "onwaiting", onZoom: "onzoom", overlinePosition: "overline-position", overlineThickness: "overline-thickness", paintOrder: "paint-order", panose1: "panose-1", pointerEvents: "pointer-events", referrerPolicy: "referrerpolicy", renderingIntent: "rendering-intent", shapeRendering: "shape-rendering", stopColor: "stop-color", stopOpacity: "stop-opacity", strikethroughPosition: "strikethrough-position", strikethroughThickness: "strikethrough-thickness", strokeDashArray: "stroke-dasharray", strokeDashOffset: "stroke-dashoffset", strokeLineCap: "stroke-linecap", strokeLineJoin: "stroke-linejoin", strokeMiterLimit: "stroke-miterlimit", strokeOpacity: "stroke-opacity", strokeWidth: "stroke-width", tabIndex: "tabindex", textAnchor: "text-anchor", textDecoration: "text-decoration", textRendering: "text-rendering", transformOrigin: "transform-origin", typeOf: "typeof", underlinePosition: "underline-position", underlineThickness: "underline-thickness", unicodeBidi: "unicode-bidi", unicodeRange: "unicode-range", unitsPerEm: "units-per-em", vAlphabetic: "v-alphabetic", vHanging: "v-hanging", vIdeographic: "v-ideographic", vMathematical: "v-mathematical", vectorEffect: "vector-effect", vertAdvY: "vert-adv-y", vertOriginX: "vert-origin-x", vertOriginY: "vert-origin-y", wordSpacing: "word-spacing", writingMode: "writing-mode", xHeight: "x-height", playbackOrder: "playbackorder", timelineBegin: "timelinebegin" }, transform: F, properties: { about: j, accentHeight: M, accumulate: null, additive: null, alignmentBaseline: null, alphabetic: M, amplitude: M, arabicForm: null, ascent: M, attributeName: null, attributeType: null, azimuth: M, bandwidth: null, baselineShift: null, baseFrequency: null, baseProfile: null, bbox: null, begin: null, bias: M, by: null, calcMode: null, capHeight: M, className: L, clip: null, clipPath: null, clipPathUnits: null, clipRule: null, color: null, colorInterpolation: null, colorInterpolationFilters: null, colorProfile: null, colorRendering: null, content: null, contentScriptType: null, contentStyleType: null, crossOrigin: null, cursor: null, cx: null, cy: null, d: null, dataType: null, defaultAction: null, descent: M, diffuseConstant: M, direction: null, display: null, dur: null, divisor: M, dominantBaseline: null, download: P, dx: null, dy: null, edgeMode: null, editable: null, elevation: M, enableBackground: null, end: null, event: null, exponent: M, externalResourcesRequired: null, fill: null, fillOpacity: M, fillRule: null, filter: null, filterRes: null, filterUnits: null, floodColor: null, floodOpacity: null, focusable: null, focusHighlight: null, fontFamily: null, fontSize: null, fontSizeAdjust: null, fontStretch: null, fontStyle: null, fontVariant: null, fontWeight: null, format: null, fr: null, from: null, fx: null, fy: null, g1: R, g2: R, glyphName: R, glyphOrientationHorizontal: null, glyphOrientationVertical: null, glyphRef: null, gradientTransform: null, gradientUnits: null, handler: null, hanging: M, hatchContentUnits: null, hatchUnits: null, height: null, href: null, hrefLang: null, horizAdvX: M, horizOriginX: M, horizOriginY: M, id: null, ideographic: M, imageRendering: null, initialVisibility: null, in: null, in2: null, intercept: M, k: M, k1: M, k2: M, k3: M, k4: M, kernelMatrix: j, kernelUnitLength: null, keyPoints: null, keySplines: null, keyTimes: null, kerning: null, lang: null, lengthAdjust: null, letterSpacing: null, lightingColor: null, limitingConeAngle: M, local: null, markerEnd: null, markerMid: null, markerStart: null, markerHeight: null, markerUnits: null, markerWidth: null, mask: null, maskContentUnits: null, maskUnits: null, mathematical: null, max: null, media: null, mediaCharacterEncoding: null, mediaContentEncodings: null, mediaSize: M, mediaTime: null, method: null, min: null, mode: null, name: null, navDown: null, navDownLeft: null, navDownRight: null, navLeft: null, navNext: null, navPrev: null, navRight: null, navUp: null, navUpLeft: null, navUpRight: null, numOctaves: null, observer: null, offset: null, onAbort: null, onActivate: null, onAfterPrint: null, onBeforePrint: null, onBegin: null, onCancel: null, onCanPlay: null, onCanPlayThrough: null, onChange: null, onClick: null, onClose: null, onCopy: null, onCueChange: null, onCut: null, onDblClick: null, onDrag: null, onDragEnd: null, onDragEnter: null, onDragExit: null, onDragLeave: null, onDragOver: null, onDragStart: null, onDrop: null, onDurationChange: null, onEmptied: null, onEnd: null, onEnded: null, onError: null, onFocus: null, onFocusIn: null, onFocusOut: null, onHashChange: null, onInput: null, onInvalid: null, onKeyDown: null, onKeyPress: null, onKeyUp: null, onLoad: null, onLoadedData: null, onLoadedMetadata: null, onLoadStart: null, onMessage: null, onMouseDown: null, onMouseEnter: null, onMouseLeave: null, onMouseMove: null, onMouseOut: null, onMouseOver: null, onMouseUp: null, onMouseWheel: null, onOffline: null, onOnline: null, onPageHide: null, onPageShow: null, onPaste: null, onPause: null, onPlay: null, onPlaying: null, onPopState: null, onProgress: null, onRateChange: null, onRepeat: null, onReset: null, onResize: null, onScroll: null, onSeeked: null, onSeeking: null, onSelect: null, onShow: null, onStalled: null, onStorage: null, onSubmit: null, onSuspend: null, onTimeUpdate: null, onToggle: null, onUnload: null, onVolumeChange: null, onWaiting: null, onZoom: null, opacity: null, operator: null, order: null, orient: null, orientation: null, origin: null, overflow: null, overlay: null, overlinePosition: M, overlineThickness: M, paintOrder: null, panose1: null, path: null, pathLength: M, patternContentUnits: null, patternTransform: null, patternUnits: null, phase: null, ping: L, pitch: null, playbackOrder: null, pointerEvents: null, points: null, pointsAtX: M, pointsAtY: M, pointsAtZ: M, preserveAlpha: null, preserveAspectRatio: null, primitiveUnits: null, propagate: null, property: j, r: null, radius: null, referrerPolicy: null, refX: null, refY: null, rel: j, rev: j, renderingIntent: null, repeatCount: null, repeatDur: null, requiredExtensions: j, requiredFeatures: j, requiredFonts: j, requiredFormats: j, resource: null, restart: null, result: null, rotate: null, rx: null, ry: null, scale: null, seed: null, shapeRendering: null, side: null, slope: null, snapshotTime: null, specularConstant: M, specularExponent: M, spreadMethod: null, spacing: null, startOffset: null, stdDeviation: null, stemh: null, stemv: null, stitchTiles: null, stopColor: null, stopOpacity: null, strikethroughPosition: M, strikethroughThickness: M, string: null, stroke: null, strokeDashArray: j, strokeDashOffset: null, strokeLineCap: null, strokeLineJoin: null, strokeMiterLimit: M, strokeOpacity: M, strokeWidth: null, style: null, surfaceScale: M, syncBehavior: null, syncBehaviorDefault: null, syncMaster: null, syncTolerance: null, syncToleranceDefault: null, systemLanguage: j, tabIndex: M, tableValues: null, target: null, targetX: M, targetY: M, textAnchor: null, textDecoration: null, textRendering: null, textLength: null, timelineBegin: null, title: null, transformBehavior: null, type: null, typeOf: j, to: null, transform: null, transformOrigin: null, u1: null, u2: null, underlinePosition: M, underlineThickness: M, unicode: null, unicodeBidi: null, unicodeRange: null, unitsPerEm: M, values: null, vAlphabetic: M, vMathematical: M, vectorEffect: null, vHanging: M, vIdeographic: M, version: null, vertAdvY: M, vertOriginX: M, vertOriginY: M, viewBox: null, viewTarget: null, visibility: null, width: null, widths: null, wordSpacing: null, writingMode: null, x: null, x1: null, x2: null, xChannelSelector: null, xHeight: M, y: null, y1: null, y2: null, yChannelSelector: null, z: null, zoomAndPan: null } }), X = /^data[-\w.:]+$/i, $ = /-[a-z]/g, Y = /[A-Z]/g;
function Z(n2) {
  return "-" + n2.toLowerCase();
}
function J(n2) {
  return n2.charAt(1).toUpperCase();
}
const G = x([H, I, V, W, K], "html");
x([H, I, V, W, N], "svg");
const Q = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "link", "main", "map", "mark", "math", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rb", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "section", "select", "slot", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr"], nn = "default", en = /^@|^v-on:/, ln = /^:|^v-bind:/, on = /^v-model/, tn = ["select", "textarea", "input"], rn = Object.fromEntries(["p", "a", "blockquote", "code", "pre", "code", "em", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "img", "ul", "ol", "li", "strong", "table", "thead", "tbody", "td", "th", "tr", "script"].map((n2) => [n2, `prose-${n2}`])), an = defineComponent({ name: "MDCRenderer", props: { body: { type: Object, required: true }, data: { type: Object, default: () => ({}) }, class: { type: [String, Object], default: void 0 }, tag: { type: [String, Boolean], default: void 0 }, prose: { type: Boolean, default: void 0 }, components: { type: Object, default: () => ({}) }, unwrap: { type: [Boolean, String], default: false } }, async setup(n2) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const e2 = (_c = (_b = (_a = getCurrentInstance()) == null ? void 0 : _a.appContext) == null ? void 0 : _b.app) == null ? void 0 : _c.$nuxt, u2 = (e2 == null ? void 0 : e2.$route) || (e2 == null ? void 0 : e2._route), { mdc: i2 } = ((_d = e2 == null ? void 0 : e2.$config) == null ? void 0 : _d.public) || {}, s2 = { ...((_e = i2 == null ? void 0 : i2.components) == null ? void 0 : _e.prose) && false !== n2.prose ? rn : {}, ...((_f = i2 == null ? void 0 : i2.components) == null ? void 0 : _f.map) || {}, ...toRaw(((_h = (_g = n2.data) == null ? void 0 : _g.mdc) == null ? void 0 : _h.components) || {}), ...n2.components }, d2 = computed(() => {
    var _a2;
    const e3 = (((_a2 = n2.body) == null ? void 0 : _a2.children) || []).map((n3) => n3.tag || n3.type).filter((n3) => !Q.includes(n3));
    return Array.from(new Set(e3)).sort().join(".");
  }), p2 = reactive({ ...n2.data });
  return watch(() => n2.data, (n3) => {
    Object.assign(p2, n3);
  }), await (async function(n3, e3) {
    if (!n3) return;
    const l2 = Array.from(new Set(o2(n3, e3)));
    function o2(n4, e4) {
      const l3 = n4.tag;
      if ("text" === n4.type || "binding" === l3 || "comment" === n4.type) return [];
      const t2 = cn(n4, e4.tags), r2 = [];
      "root" === n4.type || Q.includes(t2) || r2.push(t2);
      for (const a2 of n4.children || []) r2.push(...o2(a2, e4));
      return r2;
    }
    await Promise.all(l2.map(async (n4) => {
      if ((n4 == null ? void 0 : n4.render) || (n4 == null ? void 0 : n4.ssrRender) || (n4 == null ? void 0 : n4.__ssrInlineRender)) return;
      const e4 = dn(n4);
      (e4 == null ? void 0 : e4.__asyncLoader) && !e4.__asyncResolved && await e4.__asyncLoader();
    }));
  })(n2.body, { tags: s2 }), { tags: s2, contentKey: d2, route: u2, runtimeData: p2, updateRuntimeData: function(n3, e3) {
    const l2 = n3.split(".").length - 1;
    return n3.split(".").reduce((n4, o2, t2) => t2 == l2 && n4 ? (n4[o2] = e3, n4[o2]) : "object" == typeof n4 ? n4[o2] : void 0, p2);
  } };
}, render(n2) {
  var _a, _b;
  const { tags: l2, tag: o2, body: t2, data: r2, contentKey: a2, route: u2, unwrap: i2, runtimeData: s2, updateRuntimeData: d2 } = n2;
  if (!t2) return null;
  const p2 = { ...r2, tags: l2, $route: u2, runtimeData: s2, updateRuntimeData: d2 }, c2 = false !== o2 ? dn(o2 || ((_a = p2.component) == null ? void 0 : _a.name) || p2.component || "div") : void 0;
  return c2 ? h(c2, { ...(_b = p2.component) == null ? void 0 : _b.props, class: n2.class, ...this.$attrs, key: a2 }, { default: m2 }) : m2 == null ? void 0 : m2();
  function m2() {
    return i2 ? o$1(sn(t2, h, p2, p2).default(), "string" == typeof i2 ? i2.split(" ") : ["*"]) : sn(t2, h, p2, p2).default();
  }
} });
function un(n2, e2, l2, o2 = {}) {
  if ("text" === n2.type) return e2(Text, n2.value);
  if ("comment" === n2.type) return e2(Comment, null, n2.value);
  const t2 = n2.tag, r2 = cn(n2, l2.tags);
  if ("binding" === n2.tag) return (function(n3, e3, l3, o3 = {}) {
    var _a, _b, _c;
    const t3 = { ...l3.runtimeData, ...o3, $document: l3, $doc: l3 }, r3 = /\.|\[(\d+)\]/, a3 = (_a = n3.props) == null ? void 0 : _a.value.trim().split(r3).filter(Boolean), u3 = a3.reduce((n4, e4) => {
      if (n4 && e4 in n4) return "function" == typeof n4[e4] ? n4[e4]() : n4[e4];
    }, t3), i2 = (_b = n3.props) == null ? void 0 : _b.defaultValue;
    return e3(Text, (_c = u3 != null ? u3 : i2) != null ? _c : "");
  })(n2, e2, l2, o2);
  const a2 = dn(r2);
  "object" == typeof a2 && (a2.tag = t2);
  const u2 = (function(n3, e3) {
    const { tag: l3 = "", props: o3 = {} } = n3;
    return Object.keys(o3).reduce(function(n4, t3) {
      if ("__ignoreMap" === t3) return n4;
      const r3 = o3[t3];
      if (on.test(t3)) return (function(n5, e4, l4, o4, { native: t4 }) {
        var _a;
        const r4 = ((_a = n5.match(/^v-model:([^=]+)/)) == null ? void 0 : _a[1]) || "modelValue", a4 = t4 ? "onInput" : `onUpdate:${r4}`;
        return l4[t4 ? "value" : r4] = pn(e4, o4.runtimeData), l4[a4] = (n6) => {
          var _a2;
          o4.updateRuntimeData(e4, t4 ? (_a2 = n6.target) == null ? void 0 : _a2.value : n6);
        }, l4;
      })(t3, r3, n4, e3, { native: tn.includes(l3) });
      if ("v-bind" === t3) return (function(n5, e4, l4, o4) {
        const t4 = pn(e4, o4);
        return l4 = Object.assign(l4, t4), l4;
      })(0, r3, n4, e3);
      if (en.test(t3)) return (function(n5, e4, l4, o4) {
        return n5 = n5.replace(en, ""), l4.on = l4.on || {}, l4.on[n5] = () => pn(e4, o4), l4;
      })(t3, r3, n4, e3);
      if (ln.test(t3)) return (function(n5, e4, l4, o4) {
        return n5 = n5.replace(ln, ""), l4[n5] = pn(e4, o4), l4;
      })(t3, r3, n4, e3);
      const { attribute: a3 } = (function(n5, e4) {
        const l4 = S(e4);
        let o4 = e4, t4 = w;
        if (l4 in n5.normal) return n5.property[n5.normal[l4]];
        if (l4.length > 4 && "data" === l4.slice(0, 4) && X.test(e4)) {
          if ("-" === e4.charAt(4)) {
            const n6 = e4.slice(5).replace($, J);
            o4 = "data" + n6.charAt(0).toUpperCase() + n6.slice(1);
          } else {
            const n6 = e4.slice(4);
            if (!$.test(n6)) {
              let l5 = n6.replace(Y, Z);
              "-" !== l5.charAt(0) && (l5 = "-" + l5), e4 = "data" + l5;
            }
          }
          t4 = A;
        }
        return new t4(o4, e4);
      })(G, t3);
      return Array.isArray(r3) && r3.every((n5) => "string" == typeof n5) ? (n4[a3] = r3.join(" "), n4) : (n4[a3] = r3, n4);
    }, {});
  })(n2, l2);
  return e2(a2, u2, sn(n2, e2, l2, { ...o2, ...u2 }));
}
function sn(n2, e2, l2, o2) {
  const t2 = (n2.children || []).reduce((n3, e3) => {
    if (!(function(n4) {
      return "template" === n4.tag;
    })(e3)) return n3[nn].push(e3), n3;
    const l3 = (function(n4) {
      let e4 = "";
      for (const l4 of Object.keys(n4.props || {})) if (l4.startsWith("#") || l4.startsWith("v-slot:")) {
        e4 = l4.split(/[:#]/, 2)[1];
        break;
      }
      return e4 || nn;
    })(e3);
    return n3[l3] = n3[l3] || [], "element" === e3.type && n3[l3].push(...e3.children || []), n3;
  }, { [nn]: [] }), r2 = Object.entries(t2).reduce((n3, [t3, r3]) => r3.length ? (n3[t3] = () => (function(n4) {
    const e3 = [];
    for (const l3 of n4) {
      const n5 = e3[e3.length - 1];
      l3.type === Text && (n5 == null ? void 0 : n5.type) === Text ? n5.children = n5.children + l3.children : e3.push(l3);
    }
    return e3;
  })(r3.map((n4) => un(n4, e2, l2, o2))), n3) : n3, {});
  return r2;
}
const dn = (n2) => {
  if ("string" == typeof n2) {
    if (Q.includes(n2)) return n2;
    const e2 = resolveComponent(e(n2), false);
    return n2 && "AsyncComponentWrapper" !== (e2 == null ? void 0 : e2.name) ? "string" == typeof e2 ? e2 : "setup" in e2 ? defineAsyncComponent(() => new Promise((n3) => n3(e2))) : e2 : e2;
  }
  return n2;
};
function pn(n2, e2) {
  const l2 = n2.split(".").reduce((n3, e3) => "object" == typeof n3 ? n3[e3] : void 0, e2);
  return void 0 === l2 ? destr(n2) : l2;
}
function cn(n2, e2) {
  var _a;
  const l2 = n2.tag;
  return l2 && void 0 === ((_a = n2.props) == null ? void 0 : _a.__ignoreMap) && (e2[l2] || e2[e(l2)] || e2[i(n2.tag)]) || l2;
}
const mn = an.setup;
an.setup = (n2, e2) => {
  const l2 = useSSRContext();
  return (l2.modules || (l2.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue"), mn ? mn(n2, e2) : void 0;
};
const gn = defineComponent({ __name: "ContentRendererMarkdown", __ssrInlineRender: true, props: { value: { type: Object, required: true }, excerpt: { type: Boolean, default: false }, tag: { type: String, default: "div" }, components: { type: Object, default: () => ({}) }, data: { type: Object, default: () => ({}) } }, setup(n2) {
  const e2 = n2, l2 = v().isEnabled(), o2 = computed(() => {
    let n3 = e2.value.body || e2.value;
    return e2.excerpt && e2.value.excerpt && (n3 = e2.value.excerpt), n3;
  }), r2 = computed(() => {
    const { body: n3, excerpt: l3, ...o3 } = e2.value;
    return { ...o3, ...e2.data };
  }), a2 = computed(() => ({ ...e2.components, ...r2.value._components || {} }));
  return (e3, t2, u2, i2) => {
    t2(ssrRenderComponent(an, mergeProps({ body: o2.value, data: r2.value, tag: n2.tag, components: a2.value, "data-content-id": unref(l2) ? n2.value._id : void 0 }, i2), null, u2));
  };
} }), hn = gn.setup;
gn.setup = (n2, e2) => {
  const l2 = useSSRContext();
  return (l2.modules || (l2.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.2_better-sqlite3@11.10.0__ioredis@5.7.0_magicast@0.3.5_nuxt@3.19_tgmucp5mnjxr6stacpzu2ww3pi/node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue"), hn ? hn(n2, e2) : void 0;
};

export { gn as default };
//# sourceMappingURL=ContentRendererMarkdown-CTTcWJeL.mjs.map
