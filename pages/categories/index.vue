<!--
 * @Author: LiZhiWei
 * @Date: 2025-09-15 14:44:39
 * @LastEditors: LiZhiWei
 * @LastEditTime: 2025-09-17 12:00:13
 * @Description: 
-->
<script lang="ts" setup>
import { makeFirstCharUpper } from '@/utils/helper'
import CategoryCard from '~/components/category/CategoryCard.vue'
import CategoryHero from '~/components/category/CategoryHero.vue'

const { data } = await useAsyncData('all-blog-post-by-category', async () =>
  await queryContent('/blogs').find(),
)

const allTags = new Map()

data.value?.forEach((item) => {
  // 标签数据直接在根级别
  const blogItem = item as { tags?: string[] }
  const tags: Array<string> = blogItem.tags || []
  tags.forEach((tag) => {
    if (allTags.has(tag)) {
      const cnt = allTags.get(tag)
      allTags.set(tag, cnt + 1)
    } else {
      allTags.set(tag, 1)
    }
  })
})

useHead({
  title: 'Categories',
  meta: [
    {
      name: 'description',
      content:
        'Below All the topics are listed on which either I have written a blog or will write a blog in near future.',
    },
  ],
})

// Generate OG Image
const siteData = useSiteConfig()
defineOgImage({
  props: {
    title: 'Categories',
    description:
      'Below All the topics are listed on which either I have written a blog or will write a blog in near future.',
    siteName: siteData.url,
  },
})
</script>

<template>
    <main class="container max-w-5xl mx-auto text-zinc-600">
        <CategoryHero />
        <div class="flex flex-wrap px-6 mt-12 gap-3">
            <CategoryCard v-for="topic in allTags" :key="topic[0]" :title="makeFirstCharUpper(topic[0])"
                :count="topic[1]" />
        </div>
    </main>
</template>
