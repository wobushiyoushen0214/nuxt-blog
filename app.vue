<script setup>
import { siteMetaData } from './data'

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  meta: () => siteMetaData,
})
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 dark:text-zinc-300 transition-all duration-700 ease-in-out"
  >
    <NuxtLoadingIndicator
      class="bg-gradient-to-r from-primary-500 to-accent-500"
      color="linear-gradient(90deg, #3B82F6, #8B5CF6, #06B6D4)"
      :height="3"
      :duration="2000"
      :throttle="200"
    />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

html.dark {
  color-scheme: dark;
}
</style>
