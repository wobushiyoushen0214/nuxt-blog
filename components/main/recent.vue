<script lang="ts" setup>
import type { BlogPost } from '~/types/blog'

// 使用 shallowRef 优化日期解析函数的缓存
const dateParseCache = shallowRef(new Map<string, Date>())

// Function to parse dates in both English and Chinese formats with caching
function parseCustomDate(dateStr: string): Date {
  // 检查缓存
  if (dateParseCache.value.has(dateStr)) {
    return dateParseCache.value.get(dateStr)!
  }

  let parsedDate: Date

  // Handle Chinese date format: "2023年1月1日"
  const chineseDateMatch = dateStr.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/)
  if (chineseDateMatch) {
    const [, year, month, day] = chineseDateMatch
    parsedDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
  } else {
    // Handle English date format: "1st Mar 2023"
    const cleanDateStr = dateStr.replace(/(\d+)(st|nd|rd|th)/, '$1')
    parsedDate = new Date(cleanDateStr)
  }

  // 缓存结果
  dateParseCache.value.set(dateStr, parsedDate)
  return parsedDate
}

// 优化数据获取，在服务端进行排序和转换
const { data } = await useAsyncData('recent-post', async () =>
  await queryCollection('content').where('path', 'LIKE', '/blogs/%').all(),
  {
    transform: (data: any[]) => {
      return data
        .sort((a: any, b: any) => {
          const aDate = parseCustomDate(a.meta.date as string)
          const bDate = parseCustomDate(b.meta.date as string)
          return bDate.getTime() - aDate.getTime()
        })
        .slice(0, 3)
        .map((articles: any) => {
          const meta = articles.meta as unknown as BlogPost
          return {
            path: articles.path,
            title: articles.title || 'no-title available',
            description: articles.description || 'no-description available',
            image: meta.image || '/not-found.jpg',
            alt: meta.alt || 'no alter data available',
            ogImage: meta.ogImage || '/not-found.jpg',
            date: meta.date || 'not-date-available',
            tags: meta.tags || [],
            published: meta.published || false,
          }
        })
    },
    server: true,
    default: () => []
  }
)

// 使用 shallowRef 存储格式化数据
const formattedData = shallowRef(data.value || [])

// 监听数据变化
watch(data, (newData) => {
  if (newData) {
    formattedData.value = newData
  }
}, { immediate: true })
</script>

<template>
  <div class="pb-12 sm:pb-16 px-2 sm:px-4">
    <!-- 使用 v-memo 缓存静态标题部分 -->
    <div
      v-memo="[]"
      class="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-2 sm:space-y-0 pt-6 sm:pt-8 pb-6 sm:pb-8 animate-slide-up text-center sm:text-left"
    >
      <div class="relative">
        <Icon
          name="mdi:star-three-points-outline"
          size="2.5em"
          class="text-primary-600 dark:text-primary-400 animate-bounce-gentle"
        />
        <div
          class="absolute inset-0 bg-primary-400 rounded-full blur-lg opacity-20 animate-glow"
        ></div>
      </div>
      <div>
        <h2
          class="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-primary-600 to-accent-600 dark:from-white dark:via-primary-400 dark:to-accent-400 bg-clip-text text-transparent"
        >
          Recent Posts
        </h2>
        <p class="text-gray-600 dark:text-zinc-400 mt-2 text-sm sm:text-base">
          Latest articles and insights
        </p>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      <!-- 优化文章卡片渲染，使用稳定的 key -->
      <template v-for="(post, index) in formattedData" :key="`${post.path}-${post.date}`">
        <div class="animate-scale-in" :style="`animation-delay: ${index * 0.1}s`">
          <BlogCard
            :path="post.path"
            :title="post.title"
            :date="post.date"
            :description="post.description"
            :image="post.image"
            :alt="post.alt"
            :og-image="post.ogImage"
            :tags="post.tags"
            :published="post.published"
          />
        </div>
      </template>
      <!-- 空状态组件使用 v-memo 缓存 -->
      <template v-if="formattedData.length === 0">
        <div v-memo="[]" class="col-span-full animate-fade-in">
          <BlogEmpty />
        </div>
      </template>
    </div>
  </div>
</template>
