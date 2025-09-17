<script setup lang="ts">
import { homePage } from '~/data'
</script>

<template>
  <div class="min-h-screen flex items-center justify-center relative overflow-hidden">
    <!-- Background gradient -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    ></div>

    <!-- Floating elements -->
    <div
      class="absolute top-20 left-10 w-20 h-20 bg-primary-200/30 dark:bg-primary-800/30 rounded-full blur-xl animate-float"
    ></div>
    <div
      class="absolute bottom-20 right-10 w-32 h-32 bg-accent-200/30 dark:bg-accent-800/30 rounded-full blur-xl animate-float"
      style="animation-delay: 2s"
    ></div>
    <div
      class="absolute top-1/2 left-1/4 w-16 h-16 bg-primary-300/20 dark:bg-primary-700/20 rounded-full blur-lg animate-float"
      style="animation-delay: 4s"
    ></div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Welcome badge -->
        <div class="relative inline-block mb-8 animate-slide-up">
          <div
            class="px-6 py-3 bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/40 dark:to-accent-900/40 rounded-full text-sm font-medium text-primary-700 dark:text-primary-300 backdrop-blur-sm border border-primary-200/50 dark:border-primary-700/50"
          >
            ✨ Welcome to my digital space
          </div>
          <div
            class="absolute -top-1 -right-1 w-3 h-3 bg-accent-500 rounded-full animate-ping opacity-75"
          ></div>
        </div>

        <!-- Main title -->
        <div class="relative mb-6 sm:mb-8">
          <h1
            class="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-primary-600 to-accent-600 dark:from-white dark:via-primary-400 dark:to-accent-400 font-bold leading-tight text-3xl sm:text-5xl md:text-7xl lg:text-8xl animate-fade-in"
          >
            {{ homePage.title }}
          </h1>
          <div
            class="absolute -top-4 -right-4 w-6 h-6 bg-gradient-to-r from-accent-400 to-primary-500 rounded-full animate-pulse opacity-60"
          ></div>
        </div>

        <!-- Description -->
        <p
          class="text-gray-600 dark:text-zinc-300 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0 animate-slide-up"
          style="animation-delay: 0.2s"
        >
          {{ homePage.description }}
        </p>

        <!-- Decorative dots -->
        <div
          class="flex justify-center space-x-3 mb-12 animate-fade-in"
          style="animation-delay: 0.3s"
        >
          <div
            class="w-3 h-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full animate-bounce"
            style="animation-delay: 0s"
          ></div>
          <div
            class="w-3 h-3 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full animate-bounce"
            style="animation-delay: 0.1s"
          ></div>
          <div
            class="w-3 h-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full animate-bounce"
            style="animation-delay: 0.2s"
          ></div>
        </div>

        <!-- Action buttons -->
        <div
          class="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4 sm:px-0 animate-slide-up"
          style="animation-delay: 0.4s"
        >
          <NuxtLink
            to="/blogs"
            class="group inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-primary-500 to-accent-600 hover:from-primary-600 hover:to-accent-700 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 min-w-[180px] sm:min-w-[200px]"
          >
            <Icon
              name="mdi:book-open-variant"
              class="mr-3 text-xl group-hover:rotate-12 transition-transform duration-300"
            />
            Explore Blogs
            <Icon
              name="heroicons:arrow-right"
              class="ml-3 text-xl group-hover:translate-x-1 transition-transform duration-300"
            />
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="group inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-2 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:border-primary-300 dark:hover:border-primary-600 min-w-[180px] sm:min-w-[200px]"
          >
            <Icon
              name="mdi:account"
              class="mr-3 text-xl group-hover:scale-110 transition-transform duration-300"
            />
            About Me
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
