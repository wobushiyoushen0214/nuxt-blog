/**
 * 性能优化工具函数
 */

// 防抖函数
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null
      func(...args)
    }
    
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(later, wait)
  }
}

// 节流函数
export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle = false
  
  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => {
        inThrottle = false
      }, limit)
    }
  }
}

// 缓存函数结果
export function memoize<T extends (...args: unknown[]) => unknown>(
  func: T,
  getKey?: (...args: Parameters<T>) => string
): T {
  const cache = new Map<string, ReturnType<T>>()
  
  return ((...args: Parameters<T>) => {
    const key = getKey ? getKey(...args) : JSON.stringify(args)
    
    if (cache.has(key)) {
      return cache.get(key)
    }
    
    const result = func(...args) as ReturnType<T>
    cache.set(key, result)
    return result
  }) as T
}

// 批量执行函数
export function batchExecute<T>(
  items: T[],
  batchSize: number,
  processor: (batch: T[]) => Promise<void> | void,
  delay = 0
): Promise<void> {
  return new Promise((resolve) => {
    let index = 0
    
    const processBatch = async () => {
      if (index >= items.length) {
        resolve()
        return
      }
      
      const batch = items.slice(index, index + batchSize)
      index += batchSize
      
      await processor(batch)
      
      if (delay > 0) {
        setTimeout(processBatch, delay)
      } else {
        // 使用 requestIdleCallback 或 setTimeout 来避免阻塞主线程
        if (typeof requestIdleCallback !== 'undefined') {
          requestIdleCallback(processBatch)
        } else {
          setTimeout(processBatch, 0)
        }
      }
    }
    
    processBatch()
  })
}

// 虚拟滚动辅助函数
export function createVirtualScrollHelper(
  containerHeight: number,
  itemHeight: number,
  buffer = 5
) {
  return {
    getVisibleRange(scrollTop: number, totalItems: number) {
      const visibleCount = Math.ceil(containerHeight / itemHeight)
      const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - buffer)
      const endIndex = Math.min(totalItems - 1, startIndex + visibleCount + buffer * 2)
      
      return { startIndex, endIndex, visibleCount }
    },
    
    getTotalHeight(totalItems: number) {
      return totalItems * itemHeight
    },
    
    getOffsetY(startIndex: number) {
      return startIndex * itemHeight
    }
  }
}

// 图片懒加载辅助函数
export function createImageLazyLoader(options: {
  rootMargin?: string
  threshold?: number
} = {}) {
  if (typeof IntersectionObserver === 'undefined') {
    return null
  }
  
  const { rootMargin = '50px', threshold = 0.1 } = options
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement
        const src = img.dataset.src
        
        if (src) {
          img.src = src
          img.removeAttribute('data-src')
          observer.unobserve(img)
        }
      }
    })
  }, { rootMargin, threshold })
  
  return {
    observe(img: HTMLImageElement) {
      observer.observe(img)
    },
    
    unobserve(img: HTMLImageElement) {
      observer.unobserve(img)
    },
    
    disconnect() {
      observer.disconnect()
    }
  }
}

// 资源预加载
export function preloadResource(url: string, type: 'image' | 'script' | 'style' = 'image') {
  if (import.meta.client) {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.href = url
    
    switch (type) {
      case 'image':
        link.as = 'image'
        break
      case 'script':
        link.as = 'script'
        break
      case 'style':
        link.as = 'style'
        break
    }
    
    document.head.appendChild(link)
  }
}

// 检测设备性能
export function getDevicePerformance() {
  if (typeof navigator === 'undefined') {
    return { level: 'high', cores: 4, memory: 8 }
  }
  
  const cores = (navigator as unknown as { hardwareConcurrency?: number }).hardwareConcurrency || 4
  const memory = (navigator as unknown as { deviceMemory?: number }).deviceMemory || 8
  
  let level: 'low' | 'medium' | 'high' = 'high'
  
  if (cores <= 2 || memory <= 2) {
    level = 'low'
  } else if (cores <= 4 || memory <= 4) {
    level = 'medium'
  }
  
  return { level, cores, memory }
}

// 自适应性能配置
export function getAdaptiveConfig() {
  const performance = getDevicePerformance()
  
  switch (performance.level) {
    case 'low':
      return {
        animationDuration: 200,
        batchSize: 5,
        imageQuality: 60,
        enableAnimations: false,
        lazyLoadThreshold: 0.5
      }
    case 'medium':
      return {
        animationDuration: 300,
        batchSize: 10,
        imageQuality: 75,
        enableAnimations: true,
        lazyLoadThreshold: 0.3
      }
    default:
      return {
        animationDuration: 400,
        batchSize: 20,
        imageQuality: 90,
        enableAnimations: true,
        lazyLoadThreshold: 0.1
      }
  }
}