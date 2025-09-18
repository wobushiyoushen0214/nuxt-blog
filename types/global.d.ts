// 全局类型定义
declare global {
  // 扩展 Window 接口
  interface Window {
    // 性能监控相关
    webkitRequestAnimationFrame?: typeof requestAnimationFrame
    mozRequestAnimationFrame?: typeof requestAnimationFrame
    msRequestAnimationFrame?: typeof requestAnimationFrame
    
    // 网络连接信息
    navigator: Navigator & {
      connection?: {
        effectiveType: string
        downlink: number
        rtt: number
        saveData: boolean
        addEventListener: (type: string, listener: EventListener) => void
        removeEventListener: (type: string, listener: EventListener) => void
      }
    }
  }

  // 性能相关类型
  interface PerformanceEntry {
    // Web Vitals 相关
    processingStart?: number
    hadRecentInput?: boolean
    value?: number
    
    // 资源加载相关
    transferSize?: number
    encodedBodySize?: number
    decodedBodySize?: number
    initiatorType?: string
    responseEnd?: number
    
    // 长任务相关
    attribution?: Array<{
      name: string
      entryType: string
      startTime: number
      duration: number
    }>
  }

  // 扩展 Navigator 接口
  interface Navigator {
    // 设备内存信息
    deviceMemory?: number
    
    // 硬件并发数
    hardwareConcurrency?: number
    
    // 网络连接信息
    connection?: {
      effectiveType: '2g' | '3g' | '4g' | 'slow-2g'
      downlink: number
      rtt: number
      saveData: boolean
      addEventListener: (type: string, listener: EventListener) => void
      removeEventListener: (type: string, listener: EventListener) => void
    }
  }
}

// 博客相关类型
export interface BlogPost {
  path: string
  title: string
  description: string
  date: string
  tags: string[]
  image?: string
  author?: string
  readingTime?: number
  featured?: boolean
  draft?: boolean
  category?: string
  slug?: string
  body?: {
    children: unknown[]
  }
}

// SEO 相关类型
export interface SeoMeta {
  title: string
  description: string
  keywords?: string
  image?: string
  url?: string
  type?: 'website' | 'article' | 'profile'
  siteName?: string
  locale?: string
  author?: string
  publishedTime?: string
  modifiedTime?: string
  section?: string
  tags?: string[]
}

// 性能监控类型
export interface PerformanceMetrics {
  fcp?: number // First Contentful Paint
  lcp?: number // Largest Contentful Paint
  fid?: number // First Input Delay
  cls?: number // Cumulative Layout Shift
  ttfb?: number // Time to First Byte
}

// 设备信息类型
export interface DeviceInfo {
  memory: number
  cores: number
  connection: {
    type: string
    speed: number
    rtt: number
    saveData: boolean
  }
  screen: {
    width: number
    height: number
    pixelRatio: number
  }
}

// 缓存配置类型
export interface CacheConfig {
  maxSize: number
  ttl: number
  strategy: 'lru' | 'fifo' | 'lfu'
}

// 虚拟滚动配置类型
export interface VirtualScrollConfig {
  itemHeight: number
  containerHeight: number
  buffer: number
  threshold: number
}

// 图片懒加载配置类型
export interface LazyLoadConfig {
  rootMargin: string
  threshold: number
  loading: 'lazy' | 'eager'
  placeholder?: string
}

// 预加载配置类型
export interface PreloadConfig {
  priority: 'high' | 'low'
  as: 'script' | 'style' | 'image' | 'font' | 'fetch'
  crossorigin?: 'anonymous' | 'use-credentials'
}

export { }
