<!--
 * @Author: LiZhiWei
 * @Date: 2025-09-15 14:44:39
 * @LastEditors: LiZhiWei
 * @LastEditTime: 2025-09-17 14:31:29
 * @Description: 
-->
<script lang="ts" setup>
import BlogCard from '~/components/blog/card.vue'
import BlogEmpty from '~/components/blog/empty.vue'
import CategoryTopic from '~/components/category/topic.vue'
const route = useRoute()

// take category from route params & make first char upper
const category = computed(() => {
  const name = route.params.category || ''
  let strName = ''

  if (Array.isArray(name)) strName = name.at(0) || ''
  else strName = name
  return strName
})

const { data } = await useAsyncData(`category-data-${category.value}`, async () => {
  const articles = await queryContent('/blogs').find()
  
  return articles.filter((article: any) => {
    // tags字段直接在article对象上，不在meta中
    const tags = article.tags || []
    return tags.includes(category.value)
  })
})

const formattedData = computed(() => {
  return data.value?.map((article) => {
    return {
      path: article._path || article.path || '',
      title: article.title || 'no-title available',
      description: article.description || 'no-description available',
      image: article.image || '/blogs-img/blog.jpg',
      alt: article.alt || 'no alter data available',
      ogImage: article.ogImage || '/blogs-img/blog.jpg',
      date: article.date || 'not-date-available',
      tags: article.tags || [],
      published: article.published || false,
    }
  })
})



useHead({
  title: category.value,
  meta: [
    {
      name: 'description',
      content: `You will find all the ${category.value} related post here`,
    },
  ],
})

// Generate OG Image
const siteData = useSiteConfig()
defineOgImage({
  props: {
    title: category.value?.toUpperCase(),
    description: `You will find all the ${category.value} related post here`,
    siteName: siteData.url,
  },
})
</script>

<template>
    <main class="container max-w-5xl mx-auto text-zinc-600 px-4">
        <CategoryTopic />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <BlogCard v-for="post in formattedData" :key="post.title" :path="post.path" :title="post.title"
                :date="post.date" :description="post.description" :image="post.image" :alt="post.alt"
                :og-image="post.ogImage" :tags="post.tags" :published="post.published" />
            <BlogEmpty v-if="data?.length === 0" />
        </div>
    </main>
</template>
