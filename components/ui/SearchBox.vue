<template>
  <div class="relative w-full max-w-md">
    <div class="relative">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="搜索博客内容..."
        class="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        @input="handleSearch"
        @focus="showResults = true"
        @blur="handleBlur"
      >
      <div class="absolute inset-y-0 left-0 flex items-center pl-3">
        <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </div>
      <button
        v-if="searchQuery"
        @click="clearSearch"
        class="absolute inset-y-0 right-0 flex items-center pr-3"
      >
        <svg class="w-5 h-5 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>

    <!-- 搜索结果下拉框 -->
    <div
      v-if="showResults && searchQuery && searchResults.length > 0"
      class="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-600 max-h-96 overflow-y-auto"
    >
      <div class="p-2">
        <div class="text-sm text-gray-500 dark:text-gray-400 mb-2">
          找到 {{ searchResults.length }} 个结果
        </div>
        <div
          v-for="result in searchResults"
          :key="result.path"
          class="p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-pointer border-b border-gray-100 dark:border-gray-700 last:border-b-0"
          @click="navigateToPost(result.path)"
        >
          <h3 class="font-semibold text-gray-900 dark:text-gray-100 mb-1">
            {{ result.title }}
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
            {{ result.description || getExcerpt(result.body) }}
          </p>
          <div class="flex items-center mt-2 text-xs text-gray-500 dark:text-gray-400">
            <span v-if="result.category" class="mr-3">{{ result.category }}</span>
            <span v-if="result.date">{{ formatDate(result.date) }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 无结果提示 -->
    <div
      v-if="showResults && searchQuery && searchResults.length === 0 && !isSearching"
      class="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-600"
    >
      <div class="p-4 text-center text-gray-500 dark:text-gray-400">
        没有找到相关内容
      </div>
    </div>

    <!-- 加载状态 -->
    <div
      v-if="isSearching"
      class="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-600"
    >
      <div class="p-4 text-center text-gray-500 dark:text-gray-400">
        搜索中...
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface SearchResult {
  path: string
  title: string
  description?: string
  body?: {
    children?: unknown[]
    [key: string]: unknown
  }
  category?: string
  date?: string
}

const searchQuery = ref('')
const searchResults = ref<SearchResult[]>([])
const showResults = ref(false)
const isSearching = ref(false)
let searchTimeout: NodeJS.Timeout

const handleSearch = async () => {
  if (!searchQuery.value.trim()) {
    searchResults.value = []
    return
  }

  // 防抖搜索
  clearTimeout(searchTimeout)
  searchTimeout = setTimeout(async () => {
    isSearching.value = true
    try {
      const response = await $fetch<{ data: SearchResult[] }>('/api/search', {
        query: { q: searchQuery.value }
      })
      searchResults.value = response.data || []
    } catch (error) {
      console.error('搜索失败:', error)
      searchResults.value = []
    } finally {
      isSearching.value = false
    }
  }, 300)
}

const clearSearch = () => {
  searchQuery.value = ''
  searchResults.value = []
  showResults.value = false
}

const handleBlur = () => {
  // 延迟隐藏结果，允许点击结果项
  setTimeout(() => {
    showResults.value = false
  }, 200)
}

const navigateToPost = (path: string) => {
  navigateTo(path)
  clearSearch()
}

const getExcerpt = (body: SearchResult['body']): string => {
  if (!body) return ''
  
  // 从 body 中提取纯文本
  const extractText = (node: unknown): string => {
    if (typeof node === 'string') return node
    if (Array.isArray(node)) return node.map(extractText).join(' ')
    if (node && typeof node === 'object' && 'children' in node) {
      return extractText((node as { children: unknown }).children)
    }
    return ''
  }
  
  const text = extractText(body)
  return text.slice(0, 150) + (text.length > 150 ? '...' : '')
}

const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString('zh-CN')
}

// 键盘快捷键支持
onMounted(() => {
  const handleKeydown = (e: KeyboardEvent) => {
    // Ctrl/Cmd + K 打开搜索
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault()
      const input = document.querySelector('input[type="text"]') as HTMLInputElement
      input?.focus()
    }
    
    // ESC 关闭搜索结果
    if (e.key === 'Escape') {
      showResults.value = false
    }
  }
  
  document.addEventListener('keydown', handleKeydown)
  
  onUnmounted(() => {
    document.removeEventListener('keydown', handleKeydown)
  })
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>