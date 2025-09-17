<template>
  <div class="comments-section mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
    <h3 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
      评论
    </h3>
    
    <!-- Giscus 评论系统 -->
    <div 
      ref="giscusContainer"
      class="giscus-container"
    />
    
    <!-- 备用评论表单 -->
    <div v-if="!isGiscusLoaded" class="fallback-comments">
      <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
        <p class="text-gray-600 dark:text-gray-400 text-center">
          评论系统正在加载中...
        </p>
        <p class="text-sm text-gray-500 dark:text-gray-500 text-center mt-2">
          如果长时间未加载，请检查网络连接或刷新页面
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  /** 文章标识符，用于区分不同文章的评论 */
  identifier?: string
  /** 文章标题 */
  title?: string
  /** 评论系统主题 */
  theme?: 'light' | 'dark' | 'auto'
  /** 是否启用评论 */
  enabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  identifier: '',
  title: '',
  theme: 'auto',
  enabled: true
})

const giscusContainer = ref<HTMLElement>()
const isGiscusLoaded = ref(false)
const { $colorMode } = useNuxtApp()

// Giscus 配置
const giscusConfig = {
  repo: 'your-username/your-repo', // 替换为你的 GitHub 仓库
  repoId: 'your-repo-id', // 替换为你的仓库 ID
  category: 'General',
  categoryId: 'your-category-id', // 替换为你的分类 ID
  mapping: 'pathname',
  strict: '0',
  reactionsEnabled: '1',
  emitMetadata: '0',
  inputPosition: 'bottom',
  lang: 'zh-CN',
  loading: 'lazy'
}

// 动态主题
const currentTheme = computed(() => {
  if (props.theme === 'auto') {
    return $colorMode?.value === 'dark' ? 'dark' : 'light'
  }
  return props.theme
})

// 加载 Giscus
const loadGiscus = () => {
  if (!props.enabled || !giscusContainer.value) return

  // 清空容器
  giscusContainer.value.innerHTML = ''

  // 创建 script 标签
  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.setAttribute('data-repo', giscusConfig.repo)
  script.setAttribute('data-repo-id', giscusConfig.repoId)
  script.setAttribute('data-category', giscusConfig.category)
  script.setAttribute('data-category-id', giscusConfig.categoryId)
  script.setAttribute('data-mapping', giscusConfig.mapping)
  script.setAttribute('data-strict', giscusConfig.strict)
  script.setAttribute('data-reactions-enabled', giscusConfig.reactionsEnabled)
  script.setAttribute('data-emit-metadata', giscusConfig.emitMetadata)
  script.setAttribute('data-input-position', giscusConfig.inputPosition)
  script.setAttribute('data-theme', currentTheme.value)
  script.setAttribute('data-lang', giscusConfig.lang)
  script.setAttribute('data-loading', giscusConfig.loading)
  script.crossOrigin = 'anonymous'
  script.async = true

  // 监听加载完成
  script.onload = () => {
    isGiscusLoaded.value = true
  }

  script.onerror = () => {
    console.error('Failed to load Giscus comments')
    isGiscusLoaded.value = false
  }

  giscusContainer.value.appendChild(script)
}

// 更新主题
const updateTheme = () => {
  if (!isGiscusLoaded.value) return

  const iframe = giscusContainer.value?.querySelector('iframe')
  if (iframe) {
    const message = {
      type: 'set-theme',
      theme: currentTheme.value
    }
    iframe.contentWindow?.postMessage({ giscus: message }, 'https://giscus.app')
  }
}

// 监听主题变化
watch(currentTheme, () => {
  if (isGiscusLoaded.value) {
    updateTheme()
  } else {
    loadGiscus()
  }
})

// 组件挂载后加载评论
onMounted(() => {
  nextTick(() => {
    loadGiscus()
  })
})

// 组件卸载时清理
onUnmounted(() => {
  if (giscusContainer.value) {
    giscusContainer.value.innerHTML = ''
  }
})
</script>

<style scoped>
.comments-section {
  @apply max-w-none;
}

.giscus-container {
  @apply min-h-[200px];
}

.fallback-comments {
  @apply animate-pulse;
}

/* 确保 Giscus 主题切换平滑 */
:deep(.giscus-frame) {
  @apply transition-colors duration-300;
}
</style>