<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const scrollProgress = ref(0)
const isVisible = ref(false)

function updateScrollProgress() {
  if (import.meta.client) {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const scrollHeight =
      document.documentElement.scrollHeight - document.documentElement.clientHeight
    const progress = (scrollTop / scrollHeight) * 100

    scrollProgress.value = Math.min(Math.max(progress, 0), 100)
    isVisible.value = scrollTop > 100 // 滚动超过100px时显示
  }
}

function scrollToTop() {
  if (import.meta.client) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
}

onMounted(() => {
  if (import.meta.client) {
    window.addEventListener('scroll', updateScrollProgress, { passive: true })
    updateScrollProgress()
  }
})

onUnmounted(() => {
  if (import.meta.client) {
    window.removeEventListener('scroll', updateScrollProgress)
  }
})
</script>

<template>
  <div class="fixed top-0 left-0 right-0 z-[60] pointer-events-none">
    <!-- 顶部进度条 -->
    <div
      class="h-1 bg-gradient-to-r from-primary-500 via-primary-600 to-accent-500 transition-all duration-300 ease-out shadow-lg shadow-primary-500/20"
      :style="{ width: `${scrollProgress}%` }"
    >
      <div
        class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"
      ></div>
    </div>
  </div>

  <!-- 圆形进度指示器和返回顶部按钮 -->
  <Transition name="scroll-progress">
    <div v-if="isVisible" class="fixed bottom-8 right-8 z-40 pointer-events-auto">
      <button
        @click="scrollToTop"
        class="group relative w-14 h-14 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 border border-gray-200 dark:border-gray-700 touch-manipulation no-transition"
        aria-label="Back to top"
      >
        <!-- 圆形进度环 -->
        <svg class="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 56 56">
          <!-- 背景圆环 -->
          <circle
            cx="28"
            cy="28"
            r="24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            class="text-gray-200 dark:text-gray-600"
          />
          <!-- 进度圆环 -->
          <circle
            cx="28"
            cy="28"
            r="24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            class="text-primary-600 dark:text-primary-400 transition-all duration-300"
            :stroke-dasharray="`${2 * Math.PI * 24}`"
            :stroke-dashoffset="`${2 * Math.PI * 24 * (1 - scrollProgress / 100)}`"
          />
        </svg>

        <!-- 箭头图标 -->
        <div class="absolute inset-0 flex items-center justify-center">
          <Icon
            name="heroicons:arrow-up"
            class="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 group-hover:-translate-y-0.5 transition-all duration-300"
          />
        </div>

        <!-- 悬浮效果 -->
        <div
          class="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500/0 to-primary-600/0 group-hover:from-primary-500/10 group-hover:to-primary-600/20 transition-all duration-300"
        ></div>
      </button>
    </div>
  </Transition>
</template>

<style scoped>
/* 进度条动画 */
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.animate-shimmer {
  animation: shimmer 2s infinite;
}

/* 滚动进度按钮过渡动画 */
.scroll-progress-enter-active,
.scroll-progress-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.scroll-progress-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.8);
}

.scroll-progress-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.8);
}

.scroll-progress-enter-to,
.scroll-progress-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}
</style>
