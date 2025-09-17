<template>
  <div 
    ref="imageContainer"
    class="optimized-image-container"
    :class="containerClass"
  >
    <!-- 占位符 -->
    <div 
      v-if="!isLoaded && showPlaceholder"
      class="image-placeholder"
      :style="placeholderStyle"
    >
      <div class="placeholder-content">
        <svg 
          class="placeholder-icon"
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path 
            fill-rule="evenodd" 
            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" 
            clip-rule="evenodd" 
          />
        </svg>
        <span v-if="showLoadingText" class="loading-text">
          {{ loadingText }}
        </span>
      </div>
    </div>

    <!-- 实际图片 -->
    <picture v-show="shouldShowImage">
      <!-- WebP 格式 -->
      <source 
        v-if="webpSrc"
        :srcset="webpSrcSet"
        type="image/webp"
      >
      
      <!-- 原始格式 -->
      <img
        ref="imageElement"
        :src="currentSrc"
        :srcset="srcSet"
        :alt="alt"
        :loading="lazyLoading ? 'lazy' : 'eager'"
        :class="imageClass"
        :style="imageStyle"
        @load="onImageLoad"
        @error="onImageError"
      >
    </picture>

    <!-- 错误状态 -->
    <div 
      v-if="hasError && showErrorPlaceholder"
      class="error-placeholder"
      :style="placeholderStyle"
    >
      <div class="error-content">
        <svg 
          class="error-icon"
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path 
            fill-rule="evenodd" 
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" 
            clip-rule="evenodd" 
          />
        </svg>
        <span class="error-text">{{ errorText }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  /** 图片源地址 */
  src: string
  /** 图片替代文本 */
  alt: string
  /** 图片宽度 */
  width?: number | string
  /** 图片高度 */
  height?: number | string
  /** 是否启用懒加载 */
  lazy?: boolean
  /** 是否自动生成WebP格式 */
  webp?: boolean
  /** 响应式图片尺寸 */
  sizes?: string
  /** 图片质量 (1-100) */
  quality?: number
  /** 占位符背景色 */
  placeholderColor?: string
  /** 是否显示加载文本 */
  showLoadingText?: boolean
  /** 加载文本 */
  loadingText?: string
  /** 错误文本 */
  errorText?: string
  /** 是否显示占位符 */
  showPlaceholder?: boolean
  /** 是否显示错误占位符 */
  showErrorPlaceholder?: boolean
  /** 容器CSS类 */
  containerClass?: string
  /** 图片CSS类 */
  imageClass?: string
  /** 图片样式 */
  imageStyle?: Record<string, string>
  /** 淡入动画持续时间 */
  fadeInDuration?: number
}

const props = withDefaults(defineProps<Props>(), {
  width: 'auto',
  height: 'auto',
  lazy: true,
  webp: true,
  quality: 80,
  placeholderColor: '#f3f4f6',
  showLoadingText: false,
  loadingText: '加载中...',
  errorText: '图片加载失败',
  showPlaceholder: true,
  showErrorPlaceholder: true,
  containerClass: '',
  imageClass: '',
  imageStyle: () => ({}),
  fadeInDuration: 300
})

const imageContainer = ref<HTMLElement>()
const imageElement = ref<HTMLImageElement>()
const isLoaded = ref(false)
const hasError = ref(false)
const isIntersecting = ref(false)

// 计算属性
const lazyLoading = computed(() => props.lazy && 'IntersectionObserver' in window)

const shouldShowImage = computed(() => {
  if (!props.lazy) return true
  return isIntersecting.value || isLoaded.value
})

// 生成WebP源地址
const webpSrc = computed(() => {
  if (!props.webp) return null
  
  // 简单的WebP URL生成逻辑
  const url = new URL(props.src, window.location.origin)
  url.searchParams.set('format', 'webp')
  url.searchParams.set('quality', props.quality.toString())
  
  return url.toString()
})

// 生成当前源地址
const currentSrc = computed(() => {
  if (!shouldShowImage.value) return ''
  
  const url = new URL(props.src, window.location.origin)
  if (props.quality !== 80) {
    url.searchParams.set('quality', props.quality.toString())
  }
  
  return url.toString()
})

// 生成srcset
const srcSet = computed(() => {
  if (!shouldShowImage.value) return ''
  
  const baseSrc = currentSrc.value
  const srcset: string[] = []
  
  // 生成不同分辨率的图片
  const densities = [1, 1.5, 2]
  densities.forEach(density => {
    const url = new URL(baseSrc)
    if (density !== 1) {
      url.searchParams.set('dpr', density.toString())
    }
    srcset.push(`${url.toString()} ${density}x`)
  })
  
  return srcset.join(', ')
})

// WebP srcset
const webpSrcSet = computed(() => {
  if (!webpSrc.value) return ''
  
  const srcset: string[] = []
  const densities = [1, 1.5, 2]
  
  densities.forEach(density => {
    const url = new URL(webpSrc.value!)
    if (density !== 1) {
      url.searchParams.set('dpr', density.toString())
    }
    srcset.push(`${url.toString()} ${density}x`)
  })
  
  return srcset.join(', ')
})

// 占位符样式
const placeholderStyle = computed(() => ({
  backgroundColor: props.placeholderColor,
  width: typeof props.width === 'number' ? `${props.width}px` : props.width,
  height: typeof props.height === 'number' ? `${props.height}px` : props.height,
  aspectRatio: props.width && props.height ? `${props.width} / ${props.height}` : 'auto'
}))

// 图片加载完成
const onImageLoad = () => {
  isLoaded.value = true
  hasError.value = false
  
  // 添加淡入动画
  if (imageElement.value) {
    imageElement.value.style.transition = `opacity ${props.fadeInDuration}ms ease-in-out`
    imageElement.value.style.opacity = '1'
  }
}

// 图片加载错误
const onImageError = () => {
  hasError.value = true
  isLoaded.value = false
}

// Intersection Observer
let observer: IntersectionObserver | null = null

const setupIntersectionObserver = () => {
  if (!props.lazy || !imageContainer.value || !('IntersectionObserver' in window)) {
    isIntersecting.value = true
    return
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isIntersecting.value = true
          observer?.disconnect()
        }
      })
    },
    {
      rootMargin: '50px 0px',
      threshold: 0.1
    }
  )

  observer.observe(imageContainer.value)
}

onMounted(() => {
  nextTick(() => {
    setupIntersectionObserver()
  })
})

onUnmounted(() => {
  observer?.disconnect()
})

// 暴露方法
defineExpose({
  reload: () => {
    hasError.value = false
    isLoaded.value = false
    if (imageElement.value) {
      imageElement.value.src = currentSrc.value
    }
  }
})
</script>

<style scoped>
.optimized-image-container {
  @apply relative overflow-hidden;
}

.image-placeholder,
.error-placeholder {
  @apply flex items-center justify-center;
  @apply bg-gray-100 dark:bg-gray-800;
  @apply min-h-[100px];
}

.placeholder-content,
.error-content {
  @apply flex flex-col items-center justify-center;
  @apply text-gray-400 dark:text-gray-600;
  @apply p-4;
}

.placeholder-icon,
.error-icon {
  @apply w-8 h-8 mb-2;
}

.loading-text,
.error-text {
  @apply text-sm font-medium;
}

.error-content {
  @apply text-red-400 dark:text-red-600;
}

img {
  @apply w-full h-auto;
  @apply opacity-0 transition-opacity;
}

img.loaded {
  @apply opacity-100;
}

/* 响应式优化 */
@media (max-width: 640px) {
  .placeholder-icon,
  .error-icon {
    @apply w-6 h-6;
  }
  
  .loading-text,
  .error-text {
    @apply text-xs;
  }
}

/* 减少动画偏好 */
@media (prefers-reduced-motion: reduce) {
  img {
    @apply transition-none;
  }
}
</style>