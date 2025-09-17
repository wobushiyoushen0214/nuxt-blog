<script setup lang="ts">
import { footerData, socialLinks } from '~/data'
</script>

<template>
  <div>
    <p class="text-black dark:text-zinc-300 text-2xl py-1 font-semibold">
      {{ footerData.author }}
    </p>
    <p class="py-2 dark:text-zinc-300">
      {{ footerData.aboutAuthor }}
    </p>
    <div class="my-4 flex flex-wrap gap-3 pb-4">
      <NuxtLink
        :to="socialLinks.githubLink"
        target="_blank"
        class="group relative p-3 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 text-gray-700 dark:text-gray-200 rounded-xl hover:from-gray-900 hover:to-gray-700 dark:hover:from-gray-600 dark:hover:to-gray-500 hover:text-white dark:hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gray-500/25 dark:hover:shadow-gray-400/25"
        aria-label="Github"
      >
        <Icon
          name="fa:github"
          size="1.2em"
          class="group-hover:rotate-12 transition-transform duration-300"
        />
        <div
          class="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent to-black/10 dark:to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        ></div>
      </NuxtLink>
      <NuxtLink
        :to="socialLinks.linkedinLink"
        target="_blank"
        class="group relative p-3 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-900 text-blue-700 dark:text-blue-200 rounded-xl hover:from-blue-600 hover:to-blue-700 dark:hover:from-blue-500 dark:hover:to-blue-600 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
        aria-label="LinkedIn"
      >
        <Icon
          name="fa:linkedin-square"
          size="1.2em"
          class="group-hover:rotate-12 transition-transform duration-300"
        />
        <div
          class="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        ></div>
      </NuxtLink>
      <NuxtLink
        :to="socialLinks.twitterLink"
        target="_blank"
        class="group relative p-3 bg-gradient-to-br from-sky-100 to-sky-200 dark:from-sky-800 dark:to-sky-900 text-sky-700 dark:text-sky-200 rounded-xl hover:from-sky-500 hover:to-sky-600 dark:hover:from-sky-400 dark:hover:to-sky-500 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-sky-500/25"
        aria-label="Twitter"
      >
        <Icon
          name="fa:twitter-square"
          size="1.2em"
          class="group-hover:rotate-12 transition-transform duration-300"
        />
        <div
          class="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent to-sky-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        ></div>
      </NuxtLink>
      <NuxtLink
        :to="socialLinks.stackoverflowLink"
        target="_blank"
        class="group relative p-3 bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-800 dark:to-orange-900 text-orange-700 dark:text-orange-200 rounded-xl hover:from-orange-500 hover:to-orange-600 dark:hover:from-orange-400 dark:hover:to-orange-500 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/25"
        aria-label="StackOverflow"
      >
        <Icon
          name="fa:stack-overflow"
          size="1.2em"
          class="group-hover:rotate-12 transition-transform duration-300"
        />
        <div
          class="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        ></div>
      </NuxtLink>
    </div>
  </div>
</template>
