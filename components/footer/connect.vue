<script setup lang="ts">
import { footerData, seoData } from '~/data'
</script>

<template>
  <div>
    <div class="flex items-center gap-2 mb-4">
      <Icon
        name="heroicons:chat-bubble-left-right"
        class="text-primary-600 dark:text-primary-400"
      />
      <p class="text-black dark:text-zinc-300 text-lg font-semibold">Connect With Me</p>
    </div>
    <p class="dark:text-zinc-300 text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
      {{ footerData.authorInterest }}
    </p>

    <a
      :href="`mailto:${seoData.mailAddress}`"
      class="group relative inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 dark:from-primary-500 dark:to-primary-600 dark:hover:from-primary-600 dark:hover:to-primary-700 text-white px-4 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25 overflow-hidden"
    >
      <div
        class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
      ></div>
      <Icon
        name="heroicons:envelope"
        size="1.1em"
        class="group-hover:rotate-12 transition-transform duration-300"
      />
      <span class="relative z-10">Send Email</span>
    </a>

    <div class="mt-4 text-center">
      <p class="text-xs text-gray-500 dark:text-gray-400">I usually respond within 24 hours</p>
    </div>
  </div>
</template>
