import { d as defineEventHandler, g as getQuery, s as serverQueryContent, c as createError } from '../../nitro/nitro.mjs';
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
import 'vue';
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

const search_get = defineEventHandler(async (event) => {
  const query = getQuery(event);
  const searchTerm = query.q;
  if (!searchTerm || searchTerm.trim().length < 2) {
    return {
      data: [],
      total: 0
    };
  }
  try {
    const blogs = await serverQueryContent(event, "/blogs").find();
    const searchResults = blogs.filter((blog) => {
      const blogData = blog;
      const searchableText = [
        blog.title,
        blog.description,
        typeof blogData.category === "string" ? blogData.category : "",
        extractTextFromBody(blog.body)
      ].join(" ").toLowerCase();
      return searchableText.includes(searchTerm.toLowerCase());
    });
    const sortedResults = searchResults.map((blog) => {
      var _a, _b, _c;
      const titleMatch = ((_a = blog.title) == null ? void 0 : _a.toLowerCase().includes(searchTerm.toLowerCase())) ? 10 : 0;
      const descriptionMatch = ((_b = blog.description) == null ? void 0 : _b.toLowerCase().includes(searchTerm.toLowerCase())) ? 5 : 0;
      const bodyMatch = ((_c = extractTextFromBody(blog.body)) == null ? void 0 : _c.toLowerCase().includes(searchTerm.toLowerCase())) ? 1 : 0;
      return {
        ...blog,
        relevanceScore: titleMatch + descriptionMatch + bodyMatch
      };
    }).sort((a, b) => b.relevanceScore - a.relevanceScore).slice(0, 10);
    return {
      data: sortedResults,
      total: sortedResults.length,
      query: searchTerm
    };
  } catch (error) {
    console.error("\u641C\u7D22\u9519\u8BEF:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "\u641C\u7D22\u670D\u52A1\u6682\u65F6\u4E0D\u53EF\u7528"
    });
  }
});
function extractTextFromBody(body) {
  if (!body) return "";
  const extractText = (node) => {
    if (typeof node === "string") return node;
    if (Array.isArray(node)) {
      return node.map(extractText).join(" ");
    }
    if (node && typeof node === "object") {
      const obj = node;
      if (obj.type === "text" && typeof obj.value === "string") {
        return obj.value;
      }
      if (obj.children) {
        return extractText(obj.children);
      }
      if (obj.value && typeof obj.value === "string") {
        return obj.value;
      }
    }
    return "";
  };
  return extractText(body);
}

export { search_get as default };
//# sourceMappingURL=search.get.mjs.map
