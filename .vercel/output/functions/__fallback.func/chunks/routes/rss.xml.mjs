import { d as defineEventHandler, a as setHeader } from '../nitro/nitro.mjs';
import { Feed } from 'feed';
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

const basePath = "https://leempty.site";
const rss_xml = defineEventHandler(async (event) => {
  setHeader(event, "content-type", "text/xml");
  const docs = [
    {
      title: "Connect Namecheap to Vercel",
      description: "Learn how to connect your Namecheap domain to Vercel",
      path: "/blogs/1-connect-namecheap-to-vercel",
      meta: { date: "2024-01-15" }
    },
    {
      title: "Fix TailwindCSS IntelliSense in Nuxt3",
      description: "How to fix TailwindCSS IntelliSense issues in Nuxt3",
      path: "/blogs/2-fix-tailwindcss-intellisense-in-nuxt3",
      meta: { date: "2024-01-20" }
    },
    {
      title: "Create Namespace Subdomain Connect to Vercel",
      description: "Tutorial on creating namespace subdomains",
      path: "/blogs/3-create-namespace-subdomain-connect-to-vercel",
      meta: { date: "2024-01-25" }
    },
    {
      title: "Fetch Content Data Render Pages",
      description: "How to fetch and render content data",
      path: "/blogs/4-fetch-content-data-render-pages",
      meta: { date: "2024-02-01" }
    },
    {
      title: "Vue3 Awesome Library",
      description: "Awesome Vue3 libraries and tools",
      path: "/blogs/5-vue3-awesome-library",
      meta: { date: "2024-02-05" }
    }
  ];
  const feed = new Feed({
    title: "Riyad's personal blog site",
    description: "Riyad's personal blog site",
    id: basePath,
    link: basePath,
    language: "en",
    favicon: `${basePath}/favicon.ico`,
    copyright: "MIT",
    author: {
      name: "Al Asad Nur Riyad",
      email: "asadnurriyad@gmail.com",
      link: basePath
    }
  });
  docs.forEach((doc) => {
    var _a;
    feed.addItem({
      title: doc.title || "",
      id: basePath + doc.path,
      link: basePath + doc.path,
      description: doc.description,
      content: doc.description,
      date: new Date((_a = doc.meta) == null ? void 0 : _a.date)
    });
  });
  return feed.rss2();
});

export { rss_xml as default };
//# sourceMappingURL=rss.xml.mjs.map
