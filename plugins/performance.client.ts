/**
 * 性能监控插件
 * 仅在客户端运行，监控页面性能指标
 */

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  
  // 只在生产环境启用性能监控
  if (!config.public.enablePerformanceMonitoring) {
    return
  }

  // Web Vitals 监控
  const observeWebVitals = () => {
    // 监控 Largest Contentful Paint (LCP)
    if ('PerformanceObserver' in window) {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1]
        
        // 记录 LCP 指标
        console.log('LCP:', lastEntry.startTime)
        
        // 可以发送到分析服务
        // analytics.track('performance', { metric: 'lcp', value: lastEntry.startTime })
      })
      
      try {
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
      } catch {
        // 浏览器不支持该指标
      }

      // 监控 First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          const fidEntry = entry as unknown as { processingStart: number; startTime: number }
          const fid = fidEntry.processingStart - fidEntry.startTime
          console.log('FID:', fid)
          
          // 可以发送到分析服务
          // analytics.track('performance', { metric: 'fid', value: fid })
        })
      })
      
      try {
        fidObserver.observe({ entryTypes: ['first-input'] })
      } catch {
        // 浏览器不支持该指标
      }

      // 监控 Cumulative Layout Shift (CLS)
      let clsValue = 0
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          const clsEntry = entry as unknown as { hadRecentInput: boolean; value: number }
          if (!clsEntry.hadRecentInput) {
            clsValue += clsEntry.value
          }
        })
        
        console.log('CLS:', clsValue)
        
        // 可以发送到分析服务
        // analytics.track('performance', { metric: 'cls', value: clsValue })
      })
      
      try {
        clsObserver.observe({ entryTypes: ['layout-shift'] })
      } catch {
        // 浏览器不支持该指标
      }
    }
  }

  // 监控页面加载性能
  const observePageLoad = () => {
    window.addEventListener('load', () => {
      // 使用 Navigation Timing API
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      
      if (navigation) {
        const metrics = {
          // DNS 查询时间
          dnsLookup: navigation.domainLookupEnd - navigation.domainLookupStart,
          // TCP 连接时间
          tcpConnect: navigation.connectEnd - navigation.connectStart,
          // 请求响应时间
          requestResponse: navigation.responseEnd - navigation.requestStart,
          // DOM 解析时间
          domParse: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          // 页面完全加载时间
          pageLoad: navigation.loadEventEnd - navigation.loadEventStart,
          // 首字节时间 (TTFB)
          ttfb: navigation.responseStart - navigation.requestStart
        }
        
        console.log('Page Load Metrics:', metrics)
        
        // 可以发送到分析服务
        // analytics.track('performance', { type: 'page_load', metrics })
      }
    })
  }

  // 监控资源加载性能
  const observeResourceLoad = () => {
    const resourceObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      
      entries.forEach((entry) => {
        const resourceEntry = entry as unknown as { 
          responseEnd: number
          startTime: number
          transferSize?: number
          initiatorType: string
          name: string
          duration: number
        }
        const loadTime = resourceEntry.responseEnd - resourceEntry.startTime
        const size = resourceEntry.transferSize || 0
        
        if (resourceEntry.initiatorType === 'img' && loadTime > 1000) {
          console.warn('慢图片加载:', resourceEntry.name, loadTime)
        }
        
        // 监控大型资源
        if (size > 100000) { // 大于 100KB
          console.log('Large Resource:', {
            name: resourceEntry.name,
            size: size,
            duration: resourceEntry.duration,
            type: resourceEntry.initiatorType
          })
          
          // 可以发送到分析服务
          // analytics.track('performance', { 
          //   type: 'large_resource', 
          //   resource: resourceEntry.name,
          //   size: size 
          // })
        }
      })
    })
    
    try {
      resourceObserver.observe({ entryTypes: ['resource'] })
    } catch {
      // 浏览器不支持
    }
  }

  // 监控内存使用情况
  const observeMemoryUsage = () => {
    if ('memory' in performance) {
      const memory = (performance as unknown as { memory: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number } }).memory
      
      setInterval(() => {
        const memoryInfo = {
          used: Math.round(memory.usedJSHeapSize / 1048576), // MB
          total: Math.round(memory.totalJSHeapSize / 1048576), // MB
          limit: Math.round(memory.jsHeapSizeLimit / 1048576) // MB
        }
        
        // 如果内存使用超过 50MB，记录警告
        if (memoryInfo.used > 50) {
          console.warn('High Memory Usage:', memoryInfo)
          
          // 可以发送到分析服务
          // analytics.track('performance', { type: 'high_memory', memory: memoryInfo })
        }
      }, 30000) // 每 30 秒检查一次
    }
  }

  // 监控长任务
  const observeLongTasks = () => {
    if ('PerformanceObserver' in window) {
      const longTaskObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        
        entries.forEach((entry) => {
          console.warn('Long Task:', {
            duration: entry.duration,
            startTime: entry.startTime
          })
          
          // 可以发送到分析服务
          // analytics.track('performance', { 
          //   type: 'long_task', 
          //   duration: entry.duration 
          // })
        })
      })
      
      try {
        longTaskObserver.observe({ entryTypes: ['longtask'] })
      } catch {
        // 浏览器不支持
      }
    }
  }

  // 启动所有监控
  onMounted(() => {
    observeWebVitals()
    observePageLoad()
    observeResourceLoad()
    observeMemoryUsage()
    observeLongTasks()
  })
})