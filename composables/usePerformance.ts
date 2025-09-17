/**
 * 性能优化 composable
 * 提供各种性能优化功能
 */
export const usePerformance = () => {
  /**
   * 创建防抖函数
   * @param fn 要防抖的函数
   * @param delay 延迟时间（毫秒）
   */
  const useDebounce = <T extends (...args: unknown[]) => unknown>(
    fn: T,
    delay: number = 300
  ) => {
    let timeoutId: NodeJS.Timeout | null = null
    
    return (...args: Parameters<T>) => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      
      timeoutId = setTimeout(() => {
        fn(...args)
      }, delay)
    }
  }

  /**
   * 创建节流函数
   * @param fn 要节流的函数
   * @param delay 延迟时间（毫秒）
   */
  const useThrottle = <T extends (...args: unknown[]) => unknown>(
    fn: T,
    delay: number = 300
  ) => {
    let lastCall = 0
    
    return (...args: Parameters<T>) => {
      const now = Date.now()
      
      if (now - lastCall >= delay) {
        lastCall = now
        fn(...args)
      }
    }
  }

  /**
   * 懒加载图片
   * @param selector 图片选择器
   */
  const useLazyImages = (selector: string = 'img[data-src]') => {
    if (!import.meta.client) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
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
    }, {
      rootMargin: '50px'
    })

    const images = document.querySelectorAll(selector)
    images.forEach(img => observer.observe(img))

    return () => {
      observer.disconnect()
    }
  }

  /**
   * 预加载关键资源
   * @param resources 资源列表
   */
  const preloadResources = (resources: Array<{
    href: string
    as: 'image' | 'script' | 'style' | 'font'
    type?: string
    crossorigin?: boolean
  }>) => {
    if (!import.meta.client) return

    resources.forEach(resource => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.href = resource.href
      link.as = resource.as
      
      if (resource.type) {
        link.type = resource.type
      }
      
      if (resource.crossorigin) {
        link.crossOrigin = 'anonymous'
      }
      
      document.head.appendChild(link)
    })
  }

  /**
   * 虚拟滚动
   * @param items 所有项目
   * @param itemHeight 每项高度
   * @param containerHeight 容器高度
   * @param scrollTop 滚动位置
   */
  const useVirtualScroll = <T>(
    items: T[],
    itemHeight: number,
    containerHeight: number,
    scrollTop: number
  ) => {
    const startIndex = Math.floor(scrollTop / itemHeight)
    const endIndex = Math.min(
      startIndex + Math.ceil(containerHeight / itemHeight) + 1,
      items.length
    )
    
    const visibleItems = items.slice(startIndex, endIndex)
    const offsetY = startIndex * itemHeight
    const totalHeight = items.length * itemHeight
    
    return {
      visibleItems,
      offsetY,
      totalHeight,
      startIndex,
      endIndex
    }
  }

  /**
   * 内存优化的响应式数据
   * @param initialValue 初始值
   */
  const useShallowReactive = <T extends object>(initialValue: T) => {
    return shallowReactive(initialValue)
  }

  /**
   * 内存优化的 ref
   * @param initialValue 初始值
   */
  const useShallowRef = <T>(initialValue: T) => {
    return shallowRef(initialValue)
  }

  /**
   * 组件缓存优化
   * @param key 缓存键
   * @param component 组件
   */
  const useMemoizedComponent = <T>(key: string, component: T) => {
    const cache = new Map()
    
    return computed(() => {
      if (!cache.has(key)) {
        cache.set(key, component)
      }
      return cache.get(key)
    })
  }

  /**
   * 批量更新 DOM
   * @param updates DOM 更新函数数组
   */
  const batchDOMUpdates = (updates: Array<() => void>) => {
    if (!import.meta.client) return

    requestAnimationFrame(() => {
      updates.forEach(update => update())
    })
  }

  /**
   * 监听页面可见性变化
   * @param onVisible 页面可见时的回调
   * @param onHidden 页面隐藏时的回调
   */
  const usePageVisibility = (
    onVisible?: () => void,
    onHidden?: () => void
  ) => {
    if (!import.meta.client) return

    const handleVisibilityChange = () => {
      if (document.hidden) {
        onHidden?.()
      } else {
        onVisible?.()
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }

  /**
   * 网络状态监听
   */
  const useNetworkStatus = () => {
    const isOnline = ref(true)
    const connectionType = ref('unknown')

    if (import.meta.client) {
      isOnline.value = navigator.onLine
      
      const updateOnlineStatus = () => {
        isOnline.value = navigator.onLine
      }

      const updateConnectionType = () => {
        const connection = (navigator as unknown as { connection?: { effectiveType?: string; addEventListener?: (event: string, callback: () => void) => void } }).connection
        if (connection) {
          connectionType.value = connection.effectiveType || 'unknown'
        }
      }

      window.addEventListener('online', updateOnlineStatus)
      window.addEventListener('offline', updateOnlineStatus)
      
      if ('connection' in navigator) {
        updateConnectionType()
        const connection = (navigator as unknown as { connection?: { addEventListener?: (event: string, callback: () => void) => void } }).connection
        connection?.addEventListener?.('change', updateConnectionType)
      }
    }

    return {
      isOnline: readonly(isOnline),
      connectionType: readonly(connectionType)
    }
  }

  return {
    useDebounce,
    useThrottle,
    useLazyImages,
    preloadResources,
    useVirtualScroll,
    useShallowReactive,
    useShallowRef,
    useMemoizedComponent,
    batchDOMUpdates,
    usePageVisibility,
    useNetworkStatus
  }
}