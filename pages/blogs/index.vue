<script lang="ts" setup>
import Fuse from 'fuse.js'
import ArchiveCard from '~/components/archive/ArchiveCard.vue'
import ArchiveHero from '~/components/archive/ArchiveHero.vue'
// Loading and animation states
const isLoading = ref(true)
const isSearching = ref(false)
const searchInputRef = ref(null)

const { data: blogs } = await useAsyncData('blogs', async () => {
  return await queryContent('/blogs').find()
})

const elementPerPage = ref(5)
const pageNumber = ref(1)
const searchTest = ref('')

// Debounced search
const debouncedSearch = ref('')
let searchTimeout: NodeJS.Timeout

watch(searchTest, (newValue) => {
  isSearching.value = true
  clearTimeout(searchTimeout)
  searchTimeout = setTimeout(() => {
    debouncedSearch.value = newValue
    isSearching.value = false
  }, 300)
})

const formattedData = computed(() => {
  if (!blogs.value || !Array.isArray(blogs.value)) {
    return []
  }
  
  return blogs.value
    .filter((article: any) => {
      const path = article.path
      const meta = article.meta || {}
      return path && path.startsWith('/blogs/') && meta.published !== false
    })
    .map((article: any) => {
      const meta = article.meta || {}
      return {
        path: article.path || '',
        title: article.title || 'no-title available',
        description: article.description || 'no-description available',
        image: meta.image || '/not-found.jpg',
        alt: meta.alt || 'no alter data available',
        ogImage: meta.ogImage || '/not-found.jpg',
        date: meta.date || 'not-date-available',
        tags: meta.tags || [],
        published: meta.published !== false,
      }
    })
})

const fuse = computed(() => {
  return new Fuse(formattedData.value, {
    keys: ['title', 'description'],
    threshold: 0.4,
    includeScore: false,
  })
})

const searchData = computed(() => {
  if (!debouncedSearch.value.trim()) {
    return formattedData.value
  }

  const results = fuse.value.search(debouncedSearch.value)
  return results.map((result) => result.item)
})

const paginatedData = computed(() => {
  const startInd = (pageNumber.value - 1) * elementPerPage.value
  const endInd = pageNumber.value * elementPerPage.value

  return searchData.value.slice(startInd, endInd)
})

function onPreviousPageClick() {
  if (pageNumber.value > 1) {
    pageNumber.value -= 1
    // Smooth scroll to top
    if (import.meta.client) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}

const totalPage = computed(() => {
  const ttlContent = searchData.value.length || 0
  return Math.ceil(ttlContent / elementPerPage.value)
})

function onNextPageClick() {
  if (pageNumber.value < totalPage.value) {
    pageNumber.value += 1
    // Smooth scroll to top
    if (import.meta.client) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}

function goToPage(page: number) {
  pageNumber.value = page
  if (import.meta.client) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

// Reset page when searching
watch(debouncedSearch, () => {
  pageNumber.value = 1
})

// Simulate loading state
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 800)
})

useHead({
  title: 'Archive',
  meta: [
    {
      name: 'description',
      content: 'Here you will find all the blog posts I have written & published on this site.',
    },
  ],
})

// Generate OG Image
const siteData = useSiteConfig()
defineOgImage({
  props: {
    title: 'Archive',
    description: 'Here you will find all the blog posts I have written & published on this site.',
    siteName: siteData.url,
  },
})
</script>

<template>
    <main class="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-zinc-600">
        <!-- Loading Skeleton -->
        <div v-if="isLoading" class="animate-pulse">
            <div class="px-6 py-16">
                <div class="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 mx-auto max-w-md"></div>
                <div class="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-8 mx-auto max-w-lg"></div>
            </div>
            <div class="px-6 mb-8">
                <div class="h-12 bg-gray-200 dark:bg-gray-700 rounded-xl max-w-md mx-auto"></div>
            </div>
            <div class="space-y-6 px-4">
                <div v-for="i in 3" :key="i" class="h-32 bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
            </div>
        </div>

        <!-- Main Content -->
        <div v-else class="animate-fade-in">
            <ArchiveHero />

            <!-- Search Section -->
            <div class="px-2 sm:px-6 mb-8 animate-slide-up" style="animation-delay: 0.2s">
                <div class="relative max-w-md mx-auto group">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Icon v-if="!isSearching" name="heroicons:magnifying-glass"
                            class="h-5 w-5 text-gray-400 group-focus-within:text-primary-500 transition-colors duration-300" />
                        <Icon v-else name="svg-spinners:ring-resize" class="h-5 w-5 text-primary-500" />
                    </div>
                    <input ref="searchInputRef" v-model="searchTest" placeholder="Search articles..." type="text"
                        class="block w-full pl-10 pr-12 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:shadow-lg transition-all duration-300 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 hover:shadow-md" />
                    <div v-if="searchTest" class="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <button
                            class="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                            @click="searchTest = ''">
                            <Icon name="heroicons:x-mark"
                                class="h-4 w-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
                        </button>
                    </div>
                    <!-- Search Results Count -->
                    <!-- <div v-if="searchTest && !isSearching"
                        class="absolute -bottom-8 left-0 text-sm text-gray-500 dark:text-gray-400">
                        Found {{ searchData.length }} article{{ searchData.length !== 1 ? 's' : '' }}
                    </div> -->
                </div>
            </div>

            <!-- Articles Grid -->
            <div class="space-y-6 my-8 px-2 sm:px-4">
                <!-- Loading State for Search -->
                <div v-if="isSearching" class="space-y-6">
                    <div v-for="i in 3" :key="i" class="animate-pulse">
                        <div class="h-32 bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
                    </div>
                </div>

                <!-- Articles List -->
                <div v-else v-auto-animate class="space-y-6">
                    <template v-for="(post, index) in paginatedData" :key="post.title">
                        <div :style="{ animationDelay: `${index * 100 + 400}ms` }" class="animate-slide-up">
                            <ArchiveCard :path="post.path" :title="post.title" :date="post.date"
                                :description="post.description" :image="post.image" :alt="post.alt"
                                :og-image="post.ogImage" :tags="post.tags" :published="post.published" />
                        </div>
                    </template>

                    <!-- Empty State -->
                    <div v-if="paginatedData.length <= 0" class="animate-fade-in text-center py-16">
                        <div class="mb-6">
                            <Icon name="heroicons:document-magnifying-glass" class="mx-auto h-16 w-16 text-gray-400" />
                        </div>
                        <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
                            {{ searchTest ? 'No articles found' : 'No articles available' }}
                        </h3>
                        <p class="text-gray-500 dark:text-gray-400 mb-6">
                            {{
                            searchTest ? `Try searching for something else` : 'Check back later for new content'
                            }}
                        </p>
                        <button v-if="searchTest"
                            class="inline-flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-200"
                            @click="searchTest = ''">
                            <Icon name="heroicons:arrow-path" class="mr-2 h-4 w-4" />
                            Clear search
                        </button>
                    </div>
                </div>
            </div>

            <!-- Pagination -->
            <div v-if="!isSearching && totalPage > 1"
                class="flex justify-center items-center space-x-2 sm:space-x-4 lg:space-x-8 py-8 px-2 sm:px-4 animate-slide-up"
                style="animation-delay: 0.6s">
                <button :disabled="pageNumber <= 1"
                    class="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    :class="{
            'text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20':
              pageNumber > 1,
          }" @click="onPreviousPageClick">
                    <Icon name="heroicons:chevron-left" size="20" />
                    <span class="hidden sm:inline">Previous</span>
                </button>

                <!-- Page Numbers -->
                <div class="flex items-center gap-1">
                    <template v-for="page in Math.min(totalPage, 5)" :key="page">
                        <button v-if="page === pageNumber"
                            class="px-3 py-2 bg-primary-600 text-white rounded-lg font-medium shadow-md">
                            {{ page }}
                        </button>
                        <button v-else-if="Math.abs(page - pageNumber) <= 2 || page === 1 || page === totalPage"
                            class="px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-all duration-200"
                            @click="goToPage(page)">
                            {{ page }}
                        </button>
                        <span v-else-if="page === 2 && pageNumber > 4" class="px-2 text-gray-400">...</span>
                        <span v-else-if="page === totalPage - 1 && pageNumber < totalPage - 3"
                            class="px-2 text-gray-400">...</span>
                    </template>
                </div>

                <button :disabled="pageNumber >= totalPage"
                    class="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    :class="{
            'text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20':
              pageNumber < totalPage,
          }" @click="onNextPageClick">
                    <span class="hidden sm:inline">Next</span>
                    <Icon name="heroicons:chevron-right" size="20" />
                </button>
            </div>
        </div>
    </main>
</template>
