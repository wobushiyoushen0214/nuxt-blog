<template>
  <div 
    v-if="isVisible"
    class="reading-progress-container"
    :class="{ 'visible': showProgress }"
  >
    <!-- 顶部进度条 -->
    <div 
      class="reading-progress-bar"
      :style="{ width: `${progress}%` }"
    />
    
    <!-- 圆形进度指示器（可选） -->
    <div 
      v-if="showCircular"
      class="reading-progress-circular"
      :class="{ 'show': showProgress }"
    >
      <svg class="progress-ring" width="60" height="60">
        <circle
          class="progress-ring-background"
          cx="30"
          cy="30"
          r="26"
        />
        <circle
          class="progress-ring-progress"
          cx="30"
          cy="30"
          r="26"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="strokeDashoffset"
        />
      </svg>
      <div class="progress-percentage">
        {{ Math.round(progress) }}%
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  /** 是否显示圆形进度指示器 */
  showCircular?: boolean
  /** 进度条颜色 */
  color?: string
  /** 开始显示进度的滚动阈值（像素） */
  threshold?: number
  /** 目标容器选择器 */
  target?: string
}

const props = withDefaults(defineProps<Props>(), {
  showCircular: false,
  color: '#3b82f6',
  threshold: 100,
  target: '.prose'
})

const progress = ref(0)
const isVisible = ref(false)
const showProgress = ref(false)

// 圆形进度条计算
const radius = 26
const circumference = 2 * Math.PI * radius
const strokeDashoffset = computed(() => {
  return circumference - (progress.value / 100) * circumference
})

// 计算阅读进度
const calculateProgress = () => {
  const targetElement = document.querySelector(props.target)
  if (!targetElement) return

  const rect = targetElement.getBoundingClientRect()
  const windowHeight = window.innerHeight
  const documentHeight = targetElement.scrollHeight
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop

  // 计算目标元素的位置
  const elementTop = rect.top + scrollTop
  const elementBottom = elementTop + documentHeight

  // 计算当前滚动位置相对于目标元素的进度
  const scrollProgress = Math.max(0, scrollTop - elementTop)
  const maxScroll = Math.max(0, elementBottom - elementTop - windowHeight)

  if (maxScroll > 0) {
    progress.value = Math.min(100, (scrollProgress / maxScroll) * 100)
  } else {
    progress.value = 0
  }

  // 控制显示/隐藏
  const shouldShow = scrollTop > props.threshold
  if (shouldShow !== showProgress.value) {
    showProgress.value = shouldShow
  }
}

// 节流函数
const throttle = (func: () => void, limit: number) => {
  let inThrottle: boolean
  return function() {
    if (!inThrottle) {
      func()
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

// 节流后的滚动处理函数
const throttledCalculateProgress = throttle(calculateProgress, 16) // ~60fps

// 滚动事件监听
const handleScroll = () => {
  throttledCalculateProgress()
}

// 窗口大小变化处理
const handleResize = () => {
  calculateProgress()
}

onMounted(() => {
  isVisible.value = true
  
  // 初始计算
  nextTick(() => {
    calculateProgress()
  })

  // 添加事件监听
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', handleResize, { passive: true })
})

onUnmounted(() => {
  // 移除事件监听
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
})

// 暴露进度值供父组件使用
defineExpose({
  progress: readonly(progress)
})
</script>

<style scoped>
.reading-progress-container {
  @apply fixed top-0 left-0 right-0 z-50 pointer-events-none;
}

.reading-progress-bar {
  @apply h-1 bg-blue-500 transition-all duration-300 ease-out;
  background-color: v-bind(color);
  transform-origin: left;
  transition: width 0.1s ease-out;
}

.reading-progress-circular {
  @apply fixed bottom-8 right-8 w-16 h-16 pointer-events-auto;
  @apply bg-white dark:bg-gray-800 rounded-full shadow-lg;
  @apply flex items-center justify-center;
  @apply transform transition-all duration-300 ease-out;
  @apply opacity-0 translate-y-4 scale-90;
}

.reading-progress-circular.show {
  @apply opacity-100 translate-y-0 scale-100;
}

.progress-ring {
  @apply transform -rotate-90;
}

.progress-ring-background {
  @apply fill-transparent stroke-gray-200 dark:stroke-gray-600;
  stroke-width: 3;
}

.progress-ring-progress {
  @apply fill-transparent transition-all duration-300 ease-out;
  stroke: v-bind(color);
  stroke-width: 3;
  stroke-linecap: round;
}

.progress-percentage {
  @apply absolute inset-0 flex items-center justify-center;
  @apply text-xs font-semibold text-gray-700 dark:text-gray-300;
}

/* 响应式调整 */
@media (max-width: 640px) {
  .reading-progress-circular {
    @apply bottom-6 right-6 w-12 h-12;
  }
  
  .progress-ring {
    width: 48px;
    height: 48px;
  }
  
  .progress-ring-background,
  .progress-ring-progress {
    cx: 24;
    cy: 24;
    r: 20;
  }
  
  .progress-percentage {
    @apply text-xs;
  }
}

/* 深色模式优化 */
@media (prefers-color-scheme: dark) {
  .reading-progress-bar {
    @apply shadow-sm;
  }
}

/* 动画优化 */
@media (prefers-reduced-motion: reduce) {
  .reading-progress-bar,
  .reading-progress-circular,
  .progress-ring-progress {
    @apply transition-none;
  }
}
</style>