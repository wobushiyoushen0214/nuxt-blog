<!--
 * @Author: LiZhiWei
 * @Date: 2025-09-15 14:44:39
 * @LastEditors: LiZhiWei
 * @LastEditTime: 2025-09-17 10:33:58
 * @Description: 
-->
<script setup lang="ts">
import { categoryPage } from '~/data';
</script>

<template>
    <div class="relative py-16 md:py-24 overflow-hidden">
        <!-- Background gradient -->
        <div
            class="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-white to-accent-50/50 dark:from-gray-900/50 dark:via-gray-800/50 dark:to-gray-900/50">
        </div>

        <!-- Decorative elements -->
        <div
            class="absolute top-10 right-10 w-24 h-24 bg-primary-200/20 dark:bg-primary-800/20 rounded-full blur-2xl animate-pulse">
        </div>
        <div class="absolute bottom-10 left-10 w-32 h-32 bg-accent-200/20 dark:bg-accent-800/20 rounded-full blur-2xl animate-pulse"
            style="animation-delay: 1s"></div>

        <div class="container mx-auto px-6 relative z-10">
            <div class="max-w-4xl mx-auto text-center">
                <!-- Category badge -->
                <div class="inline-block mb-6 animate-slide-up">
                    <div
                        class="px-4 py-2 bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 rounded-full text-sm font-medium text-primary-700 dark:text-primary-300 backdrop-blur-sm border border-primary-200/50 dark:border-primary-700/50">
                        📂 Categories
                    </div>
                </div>

                <!-- Main title -->
                <h1
                    class="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-primary-600 to-accent-600 dark:from-white dark:via-primary-400 dark:to-accent-400 font-bold leading-tight text-4xl md:text-6xl lg:text-7xl mb-6 animate-fade-in">
                    {{ categoryPage.title }}
                </h1>

                <!-- Description -->
                <p class="text-gray-600 dark:text-zinc-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto animate-slide-up"
                    style="animation-delay: 0.2s">
                    {{ categoryPage.description }}
                </p>

                <!-- Decorative line -->
                <div class="flex justify-center mt-8 animate-fade-in" style="animation-delay: 0.3s">
                    <div class="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"></div>
                </div>
            </div>
        </div>
    </div>
</template>