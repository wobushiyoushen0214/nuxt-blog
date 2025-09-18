import { seoData } from './data'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-09-30',

  modules: [
    'nuxt-icon',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxt/eslint',
    '@vueuse/nuxt',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    'nuxt-og-image',
    '@nuxt/content',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@formkit/auto-animate',
    '@stefanobartoletti/nuxt-social-share',
  ],

  // 路由规则和混合渲染策略
  routeRules: {
    // 首页预渲染，提高首屏加载速度
    '/': { 
      prerender: true,
      headers: { 'cache-control': 's-maxage=31536000' }
    },
    // 博客列表页使用 ISR，每小时重新生成
    '/blogs': { 
      isr: 3600,
      headers: { 'cache-control': 's-maxage=3600' }
    },
    // 博客详情页使用 SWR，缓存1小时
    '/blogs/**': { 
      swr: 3600,
      headers: { 'cache-control': 's-maxage=3600' }
    },
    // 分类页面使用 ISR
    '/categories': { 
      isr: 3600 
    },
    '/categories/**': { 
      swr: 3600 
    },
    // 关于页面预渲染
    '/about': { 
      prerender: true 
    },
    // API 路由优化
    '/api/**': { 
      cors: true,
      headers: { 'cache-control': 'max-age=300' }
    },
    // RSS 预渲染
    '/rss.xml': { 
      prerender: true,
      headers: { 'content-type': 'application/xml' }
    }
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width,initial-scale=1',
      title: seoData.title,
      titleTemplate: `%s - ${seoData.title}`,
      meta: [
        { name: 'description', content: seoData.description },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#ffffff' },
        { name: 'msapplication-TileColor', content: '#ffffff' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },

  sitemap: {
    sources: [seoData.mySite],
  },

  site: {
    url: seoData.mySite,
    name: 'Al Asad Nur Riyad',
  },

  // 自动导入配置
  imports: {
    dirs: [
      'composables/**',
      'utils/**',
      'stores/**',
      'types/**'
    ],
    // 自动导入常用的 Vue 和 Nuxt 函数
    presets: [
      {
        from: 'vue',
        imports: ['ref', 'reactive', 'computed', 'watch', 'watchEffect', 'onMounted', 'onUnmounted', 'nextTick', 'shallowRef', 'shallowReactive', 'toRef', 'toRefs', 'unref', 'isRef']
      },
      {
        from: '@vueuse/core',
        imports: ['useLocalStorage', 'useSessionStorage', 'useClipboard', 'useEventListener', 'useIntersectionObserver', 'useResizeObserver', 'useThrottledRef', 'useDebouncedRef']
      }
    ]
  },

  // 组件自动导入配置
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
    {
      path: '~/components/ui',
      prefix: 'Ui'
    }
  ],

  // 图片优化配置
  image: {
    format: ['webp', 'avif'],
    quality: 80,
    densities: [1, 2],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    presets: {
      avatar: {
        modifiers: {
          format: 'webp',
          width: 50,
          height: 50,
          quality: 80
        }
      },
      hero: {
        modifiers: {
          format: 'webp',
          width: 1200,
          height: 600,
          quality: 85
        }
      },
      blog: {
        modifiers: {
          format: 'webp',
          width: 800,
          height: 400,
          quality: 80
        }
      }
    }
  },

  // 字体优化
  fonts: {
    families: [
      { name: 'Inter', provider: 'google' },
      { name: 'Space Grotesk', provider: 'google' }
    ]
  },

  nitro: {
    // 改为 vercel preset 而不是 vercel-edge，以支持 Node.js 原生模块
    preset: 'vercel',
    prerender: {
      crawlLinks: true,
      routes: ['/', '/rss.xml', '/about'],
    },
    // 压缩配置
    compressPublicAssets: true,
    // 外部化 better-sqlite3，避免打包时的绑定文件问题
    externals: {
      inline: ['better-sqlite3']
    },
    // 实验性功能
    experimental: {
      wasm: true
    },
    // 添加 rollup 配置来处理原生模块
    rollupConfig: {
      external: ['better-sqlite3', '@nuxt/kit', '@nuxt/schema']
    }
  },

  // 性能优化
  experimental: {
    payloadExtraction: false,
    viewTransition: true,
    typedPages: true,
    // 启用树摇优化
    treeshakeClientOnly: true
  },

  // 运行时配置
  runtimeConfig: {
    // 私有配置（仅在服务端可用）
    private: {
      // 可以在这里添加私有配置
    },
    // 公共配置（客户端和服务端都可用）
    public: {
      // 性能监控配置
      enablePerformanceMonitoring: process.env.NODE_ENV === 'production',
      // 图片优化配置
      imageOptimization: {
        quality: 80,
        format: 'webp'
      }
    }
  },

  // CSS 优化
  css: [
    '~/assets/css/tailwind.css'
  ],

  // 构建优化
  build: {
    transpile: ['@headlessui/vue'],
    // 分析包大小
    analyze: process.env.ANALYZE === 'true'
  },

  // Vite 配置优化
  vite: {
    build: {
      // 代码分割优化
      rollupOptions: {
        output: {
          manualChunks: {
            'vue-vendor': ['vue', 'vue-router'],
            'ui-vendor': ['@headlessui/vue', '@vueuse/core'],
            'content-vendor': ['@nuxt/content']
          }
        }
      },
      // 压缩配置
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: process.env.NODE_ENV === 'production',
          drop_debugger: process.env.NODE_ENV === 'production'
        }
      }
    },
    // 开发服务器优化
    server: {
      hmr: {
        overlay: false
      }
    },
    // 优化依赖预构建
    optimizeDeps: {
      include: ['vue', '@vueuse/core', '@headlessui/vue']
    },
    // SSR 外部化配置
    ssr: {
      external: ['@nuxt/kit', '@nuxt/schema']
    },
    // 处理 WASM 文件
    assetsInclude: ['**/*.wasm']
  },

  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'light',
  },

  content: {
    highlight: false,
  },

  // 开发工具
  devtools: { 
    enabled: true,
    timeline: {
      enabled: true
    }
  },

  // TypeScript 配置
  typescript: {
    strict: true,
    typeCheck: true
  },
})
