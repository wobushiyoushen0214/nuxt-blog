interface SeoOptions {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: 'website' | 'article' | 'blog'
  author?: string
  publishedTime?: string
  modifiedTime?: string
  tags?: string[]
  category?: string
  noIndex?: boolean
  canonical?: string
}

export const useSeo = (options: SeoOptions = {}) => {
  const route = useRoute()
  const runtimeConfig = useRuntimeConfig()
  
  const baseUrl = runtimeConfig.public.siteUrl || 'https://your-domain.com'
  const siteName = 'LiZhiWei Blog'
  const defaultDescription = '分享技术、思考和生活的个人博客，专注于前端开发、Vue.js、Nuxt.js等技术分享'
  const defaultImage = '/preview1.png'

  const seoData = computed(() => {
    const currentUrl = options.url || `${baseUrl}${route.path}`
    const title = options.title ? `${options.title} | ${siteName}` : siteName
    const description = options.description || defaultDescription
    const image = options.image ? `${baseUrl}${options.image}` : `${baseUrl}${defaultImage}`

    return {
      title,
      description,
      image,
      url: currentUrl,
      type: options.type || 'website',
      author: options.author,
      publishedTime: options.publishedTime,
      modifiedTime: options.modifiedTime,
      tags: options.tags,
      category: options.category
    }
  })

  // 设置页面头部信息
  useHead({
    title: seoData.value.title,
    meta: [
      // 基础 meta 标签
      { name: 'description', content: seoData.value.description },
      { name: 'keywords', content: seoData.value.tags?.join(', ') || 'blog, 技术, 前端, Vue.js, Nuxt.js' },
      { name: 'author', content: seoData.value.author || 'LiZhiWei' },
      
      // Open Graph 标签
      { property: 'og:title', content: seoData.value.title },
      { property: 'og:description', content: seoData.value.description },
      { property: 'og:image', content: seoData.value.image },
      { property: 'og:url', content: seoData.value.url },
      { property: 'og:type', content: seoData.value.type === 'article' ? 'article' : 'website' },
      { property: 'og:site_name', content: siteName },
      { property: 'og:locale', content: 'zh_CN' },
      
      // Twitter Card 标签
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: seoData.value.title },
      { name: 'twitter:description', content: seoData.value.description },
      { name: 'twitter:image', content: seoData.value.image },
      { name: 'twitter:site', content: '@your_twitter' },
      { name: 'twitter:creator', content: '@your_twitter' },
      
      // 文章特定的 meta 标签
      ...(seoData.value.type === 'article' && seoData.value.publishedTime ? [
        { property: 'article:published_time', content: seoData.value.publishedTime },
        { property: 'article:modified_time', content: seoData.value.modifiedTime || seoData.value.publishedTime },
        { property: 'article:author', content: seoData.value.author || 'LiZhiWei' },
        { property: 'article:section', content: seoData.value.category || 'Technology' },
        ...(seoData.value.tags?.map(tag => ({ property: 'article:tag', content: tag })) || [])
      ] : []),
      
      // 搜索引擎指令
      { name: 'robots', content: options.noIndex ? 'noindex, nofollow' : 'index, follow' },
      { name: 'googlebot', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
      
      // 移动端优化
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'format-detection', content: 'telephone=no' },
      
      // 主题颜色
      { name: 'theme-color', content: '#3b82f6' },
      { name: 'msapplication-TileColor', content: '#3b82f6' },
      
      // 语言和地区
      { name: 'language', content: 'zh-CN' },
      { name: 'geo.region', content: 'CN' },
      { name: 'geo.country', content: 'China' }
    ],
    link: [
      // Canonical URL
      { rel: 'canonical', href: options.canonical || seoData.value.url },
      
      // 预连接到外部资源
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      
      // RSS 订阅
      { rel: 'alternate', type: 'application/rss+xml', title: `${siteName} RSS Feed`, href: `${baseUrl}/rss.xml` },
      
      // 网站图标
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' }
    ],
    script: [
      // 结构化数据会通过 StructuredData 组件添加
    ]
  })

  // 生成面包屑导航数据
  const generateBreadcrumbs = () => {
    const pathSegments = route.path.split('/').filter(Boolean)
    const breadcrumbs = [
      { name: '首页', path: '/', current: false }
    ]

    let currentPath = ''
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`
      const isLast = index === pathSegments.length - 1
      
      breadcrumbs.push({
        name: segment.charAt(0).toUpperCase() + segment.slice(1),
        path: currentPath,
        current: isLast
      })
    })

    return breadcrumbs
  }

  // 生成页面摘要
  const generateExcerpt = (content: string, maxLength = 160) => {
    if (!content) return ''
    
    // 移除 HTML 标签
    const plainText = content.replace(/<[^>]*>/g, '')
    
    // 截取指定长度
    if (plainText.length <= maxLength) return plainText
    
    // 在单词边界截取
    const truncated = plainText.substring(0, maxLength)
    const lastSpace = truncated.lastIndexOf(' ')
    
    return lastSpace > 0 ? truncated.substring(0, lastSpace) + '...' : truncated + '...'
  }

  return {
    seoData: readonly(seoData),
    generateBreadcrumbs,
    generateExcerpt
  }
}