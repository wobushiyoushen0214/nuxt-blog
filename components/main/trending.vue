<!--
 * @Author: LiZhiWei
 * @Date: 2025-09-15 14:44:39
 * @LastEditors: LiZhiWei
 * @LastEditTime: 2025-09-16 10:28:11
 * @Description: 
-->
<script lang="ts" setup>
import type { BlogPost } from '~/types/blog'

// 使用 shallowRef 优化性能，避免深度响应式
const { data } = await useAsyncData('trending-post', async () =>
  await queryCollection('content').where('path', 'LIKE', '/blogs/%').limit(3).all(),
  {
    transform: (data: any[]) => {
      // 在服务端进行数据转换，减少客户端计算
      return data?.map((articles: any) => {
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

// 监听数据变化并更新 formattedData
watch(data, (newData) => {
  if (newData) {
    formattedData.value = newData
  }
}, { immediate: true })

// 使用 useSeoOptimization 优化 SEO
const { setSeoMeta } = useSeoOptimization()

setSeoMeta({
  title: 'Home - Trending Posts',
  description: 'Welcome To My Blog Site. Get Web Development, Javascript, Typescript, NodeJs, Vue, and Nuxt, Related Articles, Tips, Learning resources and more.',
  image: '/preview1.png',
  type: 'website'
})
</script>

<template>
    <div class="px-4 pb-16">
        <!-- 使用 v-memo 缓存静态标题部分 -->
        <div v-memo="[]" class="flex flex-row items-center space-x-4 pt-8 pb-8 animate-slide-up">
            <div class="relative">
                <Icon name="mdi:trending-up" size="2.5em"
                    class="text-accent-600 dark:text-accent-400 animate-bounce-gentle" />
                <div class="absolute inset-0 bg-accent-400 rounded-full blur-lg opacity-20 animate-glow"></div>
            </div>
            <div>
                <h2
                    class="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-accent-600 to-primary-600 dark:from-white dark:via-accent-400 dark:to-primary-400 bg-clip-text text-transparent">
                    Trending Posts
                </h2>
                <p class="text-gray-600 dark:text-zinc-400 mt-2">Popular articles this month</p>
            </div>
        </div>
        <div class="space-y-4">
            <!-- 优化文章卡片渲染，使用稳定的 key -->
            <template v-for="(post, index) in formattedData" :key="`${post.path}-${post.title}`">
                <div class="animate-slide-up" :style="`animation-delay: ${index * 0.1}s`">
                    <ArchiveCard :path="post.path" :title="post.title" :date="post.date" :description="post.description"
                        :image="post.image" :alt="post.alt" :og-image="post.ogImage" :tags="post.tags"
                        :published="post.published" />
                </div>
            </template>
            <!-- 空状态组件也使用 v-memo 缓存 -->
            <template v-if="formattedData.length === 0">
                <div v-memo="[]" class="animate-fade-in">
                    <BlogEmpty />
                </div>
            </template>
        </div>
    </div>
</template>
