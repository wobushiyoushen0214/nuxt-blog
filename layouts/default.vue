<!--
 * @Author: LiZhiWei
 * @Date: 2025-09-15 14:44:39
 * @LastEditors: LiZhiWei
 * @LastEditTime: 2025-09-17 10:45:35
 * @Description: 
-->
<script setup lang="ts">
// Explicit import to ensure component resolution
import MainFooter from '~/components/main/footer.vue';
import MainHeader from '~/components/main/header.vue';
import ScrollProgress from '~/components/ui/ScrollProgress.vue';
</script>

<template>
    <div class="gd-container font-spacegrotesk">
        <!-- Scroll Progress Indicator -->
        <ScrollProgress />
        <!-- Main Header Navigation -->
        <MainHeader />
        <!-- Main Content Area -->
        <main class="animate-fade-in relative min-h-screen">
            <slot />
        </main>
        <MainFooter class="animate-slide-up">
        </MainFooter>
    </div>
</template>

<style scoped>
.gd-container {
    min-height: 100vh;
    max-width: 100vw;
}

/* 响应式容器优化 */
@media (max-width: 640px) {
    .gd-container {
        padding: 0;
    }
}

/* 平滑滚动 */
html {
    scroll-behavior: smooth;
}

/* 移动端触摸优化 */
@media (hover: none) and (pointer: coarse) {
    * {
        -webkit-tap-highlight-color: transparent;
    }
}
</style>
