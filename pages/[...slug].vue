<!--
 * @Author: LiZhiWei
 * @Date: 2025-09-15 14:44:39
 * @LastEditors: LiZhiWei
 * @LastEditTime: 2025-09-16 09:57:58
 * @Description: 
-->
<script setup lang="ts">
useHead({   
  title: '404',
  meta: [
    { 
      name: 'description',
      content: 'Page not found',
    },
  ],
})

defineOgImageComponent('About', {
  headline: 'Wrong Path',
  title: '404',
  description: 'Page Not Found',
})
</script>

<template>
  <div class="py-5">
    <div class="container max-w-xl mx-auto">
      <LogoNotFound />
    </div>
  </div>
</template>
