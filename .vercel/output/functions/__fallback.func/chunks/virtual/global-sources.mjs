const sources = [
    {
        "sourceType": "user",
        "fetch": "https://li-blog.vercel.app"
    },
    {
        "context": {
            "name": "sitemap:urls",
            "description": "Set with the `sitemap.urls` config."
        },
        "urls": [],
        "sourceType": "user"
    },
    {
        "context": {
            "name": "@nuxt/content@v2:urls",
            "description": "Generated from your markdown files.",
            "tips": [
                "You can provide a `sitemap` key in your markdown frontmatter to configure specific URLs. Make sure you include a `loc`."
            ]
        },
        "fetch": "/__sitemap__/nuxt-content-urls.json",
        "sourceType": "app"
    },
    {
        "context": {
            "name": "nuxt:pages",
            "description": "Generated from your static page files.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:pages'] }`."
            ]
        },
        "urls": [
            {
                "loc": "/about"
            },
            {
                "loc": "/"
            },
            {
                "loc": "/blogs"
            },
            {
                "loc": "/categories"
            }
        ],
        "sourceType": "app"
    },
    {
        "context": {
            "name": "nuxt:route-rules",
            "description": "Generated from your route rules config.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:route-rules'] }`."
            ]
        },
        "urls": [
            "/",
            "/blogs",
            "/categories",
            "/about"
        ],
        "sourceType": "app"
    },
    {
        "context": {
            "name": "nuxt:prerender",
            "description": "Generated at build time when prerendering.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:prerender'] }`."
            ]
        },
        "urls": [
            "/",
            "/about",
            {
                "loc": "/about",
                "images": [
                    {
                        "loc": "https://li-blog.vercel.app/_ipx/q_50&amp;s_125x115/li.jpg"
                    },
                    {
                        "loc": "https://li-blog.vercel.app/_ipx/q_50&amp;s_450x500/li.jpg"
                    }
                ]
            },
            {
                "loc": "/"
            },
            {
                "loc": "/blogs"
            },
            {
                "loc": "/categories"
            },
            {
                "loc": "/categories/javascript"
            },
            {
                "loc": "/categories/tailwindcss"
            },
            {
                "loc": "/categories/vue"
            },
            {
                "loc": "/categories/vercel"
            },
            {
                "loc": "/categories/nuxt-content"
            },
            {
                "loc": "/categories/nuxt"
            },
            {
                "loc": "/categories/vuex"
            },
            {
                "loc": "/categories/kotlin"
            },
            {
                "loc": "/categories/life"
            },
            {
                "loc": "/categories/namecheap"
            }
        ],
        "sourceType": "app"
    }
];

export { sources };
//# sourceMappingURL=global-sources.mjs.map
