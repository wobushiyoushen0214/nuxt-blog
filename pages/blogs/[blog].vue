<script setup lang="ts">
import type { BlogPost } from '@/types/blog'

const { path } = useRoute()

const { data: articles, error } = await useAsyncData(`blog-post-${path}`, async () =>
  await queryContent(path).findOne(),
)

if (error.value) navigateTo('/404')

const data = computed<BlogPost>(() => {
  const meta = articles?.value?.meta as unknown as BlogPost
  return {
    title: articles.value?.title || 'no-title available',
    description: articles.value?.description || 'no-description available',
    image: meta?.image || '/not-found.jpg',
    alt: meta?.alt || 'no alter data available',
    ogImage: meta?.ogImage || '/not-found.jpg',
    date: meta?.date || 'not-date-available',
    tags: meta?.tags || [],
    published: meta?.published || false,
  }
})

// 使用新的 SEO composable
useSeo({
  title: data.value.title,
  description: data.value.description,
  image: data.value.image,
  type: 'article',
  author: 'LiZhiWei',
  publishedTime: data.value.date,
  tags: data.value.tags,
  category: data.value.tags?.[0] // 使用第一个标签作为分类
})


// Generate OG Image
defineOgImageComponent('Test', {
  headline: 'Li Blog 👋',
  title: articles.value?.seo?.title || '',
  description: articles.value?.seo?.description || '',
  link: data.value.ogImage,
})
</script>

<template>
  <div>
    <!-- 阅读进度条 -->
    <UiReadingProgress 
      :show-circular="true"
      target=".prose"
    />
    
    <!-- 结构化数据 -->
    <UiStructuredData
      :title="data.title"
      :description="data.description"
      :image="data.image"
      :date="data.date"
      author="Riyad"
      :tags="data.tags"
      type="article"
    />
    
    <div class="px-6 container max-w-5xl mx-auto sm:grid grid-cols-12 gap-x-12">
    <div class="col-span-12 lg:col-span-9">
      <BlogHeader
        :title="data.title"
        :image="data.image"
        :alt="data.alt"
        :date="data.date"
        :description="data.description"
        :tags="data.tags"
      />
      <div
        class="prose prose-pre:max-w-xs sm:prose-pre:max-w-full prose-sm sm:prose-base md:prose-lg prose-h1:no-underline max-w-5xl mx-auto prose-zinc dark:prose-invert prose-img:rounded-lg"
      >
        <ContentRenderer v-if="articles" :value="articles">
          <template #empty>
            <p>No content found.</p>
          </template>
        </ContentRenderer>
      </div>
      
      <!-- 社交分享 -->
      <UiSocialShare 
        :share-title="data.title"
        :description="data.description"
        :hashtags="data.tags"
        :platforms="['twitter', 'facebook', 'linkedin', 'weibo']"
        layout="horizontal"
        size="medium"
      />
      
      <!-- 评论系统 -->
      <UiComments 
        :identifier="path"
        :title="data.title"
      />
    </div>
    <BlogToc />

    <div class="flex flex-row flex-wrap md:flex-nowrap mt-10 gap-2">
      <!-- <SocialShare
        v-for="network in ['facebook', 'twitter', 'linkedin', 'email']"
        :key="network"
        :network="network"
        :styled="true"
        :label="true"
        class="p-1"
        aria-label="Share with {network}"
      /> -->
    </div>
    </div>
  </div>
</template>
