/**
 * 图片优化 composable
 * 提供统一的图片处理和优化功能
 */
export const useImageOptimization = () => {
  /**
   * 获取优化后的图片 URL
   * @param src 原始图片路径
   * @param preset 预设类型
   * @param options 自定义选项
   */
  const getOptimizedImageUrl = (
    src: string,
    preset: 'avatar' | 'hero' | 'blog' | 'thumbnail' = 'blog',
    options?: {
      width?: number
      height?: number
      quality?: number
      format?: 'webp' | 'avif' | 'jpg' | 'png'
    }
  ) => {
    if (!src) return '/not-found.jpg'
    
    // 如果是外部链接，直接返回
    if (src.startsWith('http')) return src
    
    // 确保路径以 / 开头
    const normalizedSrc = src.startsWith('/') ? src : `/${src}`
    
    // 根据预设返回不同的配置
    const presets = {
      avatar: { width: 50, height: 50, quality: 80, format: 'webp' as const },
      hero: { width: 1200, height: 600, quality: 85, format: 'webp' as const },
      blog: { width: 800, height: 400, quality: 80, format: 'webp' as const },
      thumbnail: { width: 300, height: 200, quality: 75, format: 'webp' as const }
    }
    
    return {
      src: normalizedSrc,
      ...presets[preset],
      ...options
    }
  }

  /**
   * 生成响应式图片的 srcset
   * @param src 图片路径
   * @param sizes 不同尺寸配置
   */
  const getResponsiveImageSrcset = (
    src: string,
    sizes: Array<{ width: number; density?: number }>
  ) => {
    if (!src || src.startsWith('http')) return undefined
    
    return sizes.map(size => {
      const density = size.density || 1
      return `${src}?w=${size.width}&q=80&f=webp ${density}x`
    }).join(', ')
  }

  /**
   * 获取图片的 alt 文本
   * @param title 标题
   * @param description 描述
   */
  const getImageAlt = (title?: string, description?: string) => {
    if (title) return title
    if (description) return description.slice(0, 100)
    return '图片'
  }

  /**
   * 预加载关键图片
   * @param images 图片路径数组
   */
  const preloadImages = (images: string[]) => {
    if (import.meta.client) {
      images.forEach(src => {
        if (src && !src.startsWith('http')) {
          const link = document.createElement('link')
          link.rel = 'preload'
          link.as = 'image'
          link.href = src
          document.head.appendChild(link)
        }
      })
    }
  }

  /**
   * 懒加载图片观察器
   */
  const createLazyImageObserver = () => {
    if (!import.meta.client) return null
    
    return new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement
          if (img.dataset.src) {
            img.src = img.dataset.src
            img.removeAttribute('data-src')
          }
        }
      })
    }, {
      rootMargin: '50px'
    })
  }

  return {
    getOptimizedImageUrl,
    getResponsiveImageSrcset,
    getImageAlt,
    preloadImages,
    createLazyImageObserver
  }
}