<template>
  <Transition
    name="theme-transition"
    mode="out-in"
    @before-enter="onBeforeEnter"
    @enter="onEnter"
    @leave="onLeave"
  >
    <div 
      :key="currentTheme"
      class="theme-wrapper"
    >
      <slot />
    </div>
  </Transition>
</template>

<script setup lang="ts">
interface Props {
  /** 动画持续时间（毫秒） */
  duration?: number
  /** 动画类型 */
  type?: 'fade' | 'slide' | 'scale' | 'flip'
  /** 是否启用动画 */
  enabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  duration: 300,
  type: 'fade',
  enabled: true
})

const { $colorMode } = useNuxtApp()
const currentTheme = computed(() => $colorMode?.value || 'light')

// 动画钩子
const onBeforeEnter = (el: Element) => {
  if (!props.enabled) return
  
  const element = el as HTMLElement
  element.style.transition = `all ${props.duration}ms ease-in-out`
  
  switch (props.type) {
    case 'fade':
      element.style.opacity = '0'
      break
    case 'slide':
      element.style.transform = 'translateX(-20px)'
      element.style.opacity = '0'
      break
    case 'scale':
      element.style.transform = 'scale(0.95)'
      element.style.opacity = '0'
      break
    case 'flip':
      element.style.transform = 'rotateY(90deg)'
      element.style.opacity = '0'
      break
  }
}

const onEnter = (el: Element) => {
  if (!props.enabled) return
  
  const element = el as HTMLElement
  
  // 强制重排
  void element.offsetHeight
  
  switch (props.type) {
    case 'fade':
      element.style.opacity = '1'
      break
    case 'slide':
      element.style.transform = 'translateX(0)'
      element.style.opacity = '1'
      break
    case 'scale':
      element.style.transform = 'scale(1)'
      element.style.opacity = '1'
      break
    case 'flip':
      element.style.transform = 'rotateY(0deg)'
      element.style.opacity = '1'
      break
  }
}

const onLeave = (el: Element) => {
  if (!props.enabled) return
  
  const element = el as HTMLElement
  
  switch (props.type) {
    case 'fade':
      element.style.opacity = '0'
      break
    case 'slide':
      element.style.transform = 'translateX(20px)'
      element.style.opacity = '0'
      break
    case 'scale':
      element.style.transform = 'scale(1.05)'
      element.style.opacity = '0'
      break
    case 'flip':
      element.style.transform = 'rotateY(-90deg)'
      element.style.opacity = '0'
      break
  }
}

// 监听主题变化，添加页面级动画效果
watch(currentTheme, (newTheme, _oldTheme) => {
  if (!props.enabled || !import.meta.client) return
  
  // 添加页面切换动画类
  document.documentElement.classList.add('theme-changing')
  
  // 创建遮罩动画效果
  const overlay = document.createElement('div')
  overlay.className = 'theme-transition-overlay'
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${newTheme === 'dark' ? '#000' : '#fff'};
    opacity: 0;
    pointer-events: none;
    z-index: 9999;
    transition: opacity ${props.duration}ms ease-in-out;
  `
  
  document.body.appendChild(overlay)
  
  // 触发动画
  requestAnimationFrame(() => {
    overlay.style.opacity = '0.3'
    
    setTimeout(() => {
      overlay.style.opacity = '0'
      
      setTimeout(() => {
        document.body.removeChild(overlay)
        document.documentElement.classList.remove('theme-changing')
      }, props.duration)
    }, props.duration / 2)
  })
}, { immediate: false })
</script>

<style scoped>
.theme-wrapper {
  @apply w-full h-full;
}

/* 淡入淡出动画 */
.theme-transition-fade-enter-active,
.theme-transition-fade-leave-active {
  transition: opacity v-bind(duration + 'ms') ease-in-out;
}

.theme-transition-fade-enter-from,
.theme-transition-fade-leave-to {
  opacity: 0;
}

/* 滑动动画 */
.theme-transition-slide-enter-active,
.theme-transition-slide-leave-active {
  transition: all v-bind(duration + 'ms') ease-in-out;
}

.theme-transition-slide-enter-from {
  transform: translateX(-20px);
  opacity: 0;
}

.theme-transition-slide-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

/* 缩放动画 */
.theme-transition-scale-enter-active,
.theme-transition-scale-leave-active {
  transition: all v-bind(duration + 'ms') ease-in-out;
}

.theme-transition-scale-enter-from {
  transform: scale(0.95);
  opacity: 0;
}

.theme-transition-scale-leave-to {
  transform: scale(1.05);
  opacity: 0;
}

/* 翻转动画 */
.theme-transition-flip-enter-active,
.theme-transition-flip-leave-active {
  transition: all v-bind(duration + 'ms') ease-in-out;
  transform-style: preserve-3d;
}

.theme-transition-flip-enter-from {
  transform: rotateY(90deg);
  opacity: 0;
}

.theme-transition-flip-leave-to {
  transform: rotateY(-90deg);
  opacity: 0;
}
</style>

<style>
/* 全局主题切换样式 */
html.theme-changing * {
  transition: background-color 300ms ease-in-out, 
              border-color 300ms ease-in-out, 
              color 300ms ease-in-out !important;
}

/* 减少动画的用户偏好 */
@media (prefers-reduced-motion: reduce) {
  .theme-transition-fade-enter-active,
  .theme-transition-fade-leave-active,
  .theme-transition-slide-enter-active,
  .theme-transition-slide-leave-active,
  .theme-transition-scale-enter-active,
  .theme-transition-scale-leave-active,
  .theme-transition-flip-enter-active,
  .theme-transition-flip-leave-active {
    transition: none !important;
  }
  
  html.theme-changing * {
    transition: none !important;
  }
}
</style>