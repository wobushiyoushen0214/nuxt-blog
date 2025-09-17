/**
 * SEO 优化 composable
 * 提供统一的 SEO 元标签管理功能
 */
export const useSeoOptimization = () => {
  /**
   * 设置页面 SEO 元数据
   * @param options SEO 配置选项
   */
  const setSeoMeta = (options: {
    title?: string
    description?: string
    image?: string
    ogImage?: string
    url?: string
    type?: 'website' | 'article' | 'profile'
    publishedTime?: string
    modifiedTime?: string
    author?: string
    tags?: string[]
    locale?: string
    siteName?: string
  }) => {
    const {
      title,
      description,
      image,
      ogImage,
      url,
      type = 'website',
      publishedTime,
      modifiedTime,
      author,
      tags,
      locale = 'zh-CN',
      siteName = 'Al Asad Nur Riyad'
    } = options

    // 构建完整的标题
    const fullTitle = title ? `${title} | ${siteName}` : siteName
    
    // 构建完整的 URL
    const fullUrl = url ? `https://nuxt-blog-lizhiwei.vercel.app${url}` : 'https://nuxt-blog-lizhiwei.vercel.app'
    
    // 优化图片 URL
    const optimizedImage = image || ogImage || '/not-found.jpg'
    const fullImageUrl = optimizedImage.startsWith('http') 
      ? optimizedImage 
      : `https://nuxt-blog-lizhiwei.vercel.app${optimizedImage}`

    // 使用 useServerSeoMeta 进行服务端 SEO 优化
    useServerSeoMeta({
      title: fullTitle,
      description,
      ogTitle: title || siteName,
      ogDescription: description,
      ogImage: fullImageUrl,
      ogUrl: fullUrl,
      ogType: type,
      ogSiteName: siteName,
      ogLocale: locale,
      twitterCard: 'summary_large_image',
      twitterTitle: title || siteName,
      twitterDescription: description,
      twitterImage: fullImageUrl,
      twitterSite: '@alasadnurriyad',
      twitterCreator: '@alasadnurriyad',
      ...(publishedTime && { 'article:published_time': publishedTime }),
      ...(modifiedTime && { 'article:modified_time': modifiedTime }),
      ...(author && { 'article:author': [author] }),
      ...(tags && { 'article:tag': tags }),
    })

    // 使用 useSeoMeta 进行客户端 SEO 优化
    useSeoMeta({
      title: fullTitle,
      description,
      keywords: tags?.join(', '),
      author,
      viewport: 'width=device-width, initial-scale=1',
      charset: 'utf-8'
    })

    // 设置 robots meta
    useHead({
      meta: [
        { name: 'robots', content: 'index, follow' },
        { name: 'googlebot', content: 'index, follow' }
      ]
    })
  }

  /**
   * 设置博客文章的 SEO
   * @param article 文章数据
   */
  const setBlogSeo = (article: {
    title: string
    description: string
    image?: string
    ogImage?: string
    path: string
    date?: string
    tags?: string[]
    author?: string
  }) => {
    setSeoMeta({
      title: article.title,
      description: article.description,
      image: article.image,
      ogImage: article.ogImage,
      url: article.path,
      type: 'article',
      publishedTime: article.date,
      author: article.author,
      tags: article.tags
    })
  }

  /**
   * 设置页面列表的 SEO
   * @param options 列表页面配置
   */
  const setListSeo = (options: {
    title: string
    description: string
    path: string
    itemCount?: number
  }) => {
    const { title, description, path, itemCount } = options
    
    const enhancedDescription = itemCount 
      ? `${description} 共 ${itemCount} 篇文章。`
      : description

    setSeoMeta({
      title,
      description: enhancedDescription,
      url: path,
      type: 'website'
    })
  }

  /**
   * 设置结构化数据
   * @param structuredData 结构化数据对象
   */
  const setStructuredData = (structuredData: Record<string, unknown>) => {
    useHead({
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify(structuredData)
        }
      ]
    })
  }

  return {
    setSeoMeta,
    setBlogSeo,
    setListSeo,
    setStructuredData
  }
}