<script setup lang="ts">
import { blogsPage } from '~/data';
</script>

<template>
    <div class="relative py-16 md:py-24 overflow-hidden mb-5">
        <!-- Background gradient -->
        <div
            class="absolute inset-0 bg-gradient-to-br from-accent-50/50 via-white to-primary-50/50 dark:from-gray-900/50 dark:via-gray-800/50 dark:to-gray-900/50">
        </div>

        <!-- Decorative elements -->
        <div
            class="absolute top-10 left-10 w-28 h-28 bg-accent-200/20 dark:bg-accent-800/20 rounded-full blur-2xl animate-pulse">
        </div>
        <div class="absolute bottom-10 right-10 w-20 h-20 bg-primary-200/20 dark:bg-primary-800/20 rounded-full blur-2xl animate-pulse"
            style="animation-delay: 1.5s"></div>

        <div class="container mx-auto px-6 relative z-10">
            <div class="max-w-4xl mx-auto text-center">
                <!-- Archive badge -->
                <div class="inline-block mb-6 animate-slide-up">
                    <div
                        class="px-4 py-2 bg-gradient-to-r from-accent-100 to-primary-100 dark:from-accent-900/30 dark:to-primary-900/30 rounded-full text-sm font-medium text-accent-700 dark:text-accent-300 backdrop-blur-sm border border-accent-200/50 dark:border-accent-700/50">
                        📚 Blog Archive
                    </div>
                </div>

                <!-- Main title -->
                <h1
                    class="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-accent-600 to-primary-600 dark:from-white dark:via-accent-400 dark:to-primary-400 font-bold leading-tight text-4xl md:text-6xl lg:text-7xl mb-6 animate-fade-in">
                    {{ blogsPage.title }}
                </h1>

                <!-- Description -->
                <p class="text-gray-600 dark:text-zinc-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto animate-slide-up"
                    style="animation-delay: 0.2s">
                    {{ blogsPage.description }}
                </p>

                <!-- Decorative line -->
                <div class="flex justify-center mt-8 animate-fade-in" style="animation-delay: 0.3s">
                    <div class="w-24 h-1 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full"></div>
                </div>
            </div>
        </div>
    </div>
</template>
