<script lang="ts" setup>
import MainHero from '~/components/main/hero.vue';
import { navbarData } from '~/data';
useHead({
  title: 'Home',
  meta: [
    {
      name: 'description',
      content:
        'Welcome To My Blog Site. Get Web Development, Javascript, Typescript, NodeJs, Vue, and Nuxt, Related Articles, Tips, Learning resources and more.',
    },
  ],
})

// Generate OG Image
defineOgImageComponent('About', {
  headline: 'Greetings 👋',
  title: navbarData.homeTitle,
  description: 'Dive into web development with me and learn Js, Ts, Vue, Nuxt, Docker, k8s',
  link: '/riyad.jpg',
})
</script>

<template>
    <main class="text-zinc-600">
        <MainHero />
        <div class="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <UiScrollReveal>
            </UiScrollReveal>

            <UiScrollReveal :delay="200">
                <MainTrending />
            </UiScrollReveal>

            <!-- About Me Section -->
            <UiScrollReveal :delay="400">
                <section class="py-12 sm:py-16 lg:py-20">
                    <div class="text-center mb-8 sm:mb-12">
                        <div
                            class="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-6">
                            <div class="relative">
                                <Icon name="mdi:account-circle" size="2em"
                                    class="sm:size-[2.5em] text-primary-600 dark:text-primary-400 animate-bounce-gentle" />
                                <div
                                    class="absolute inset-0 bg-primary-400 rounded-full blur-lg opacity-20 animate-glow">
                                </div>
                            </div>
                            <h2
                                class="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-primary-600 to-accent-600 dark:from-white dark:via-primary-400 dark:to-accent-400 bg-clip-text text-transparent">
                                About Me
                            </h2>
                        </div>
                        <p
                            class="text-gray-600 dark:text-zinc-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                            我是一名热爱技术的全栈开发者，专注于现代Web开发技术栈。通过这个博客，我分享我在前端、后端开发中的经验和见解，
                            希望能够帮助更多的开发者成长。我相信技术的力量能够改变世界，让我们一起在代码的世界中探索无限可能。
                        </p>
                    </div>

                    <!-- Skills Grid -->
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                        <div
                            class="group relative bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-800/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:scale-110 hover:rotate-2 transition-all duration-500 border border-green-200/50 dark:border-green-700/50 hover:shadow-2xl hover:shadow-green-500/25 overflow-hidden">
                            <div
                                class="absolute inset-0 bg-gradient-to-br from-green-400/10 to-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            </div>
                            <div class="relative z-10">
                                <Icon name="logos:vue" size="3em"
                                    class="mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                                <h3
                                    class="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-green-700 dark:group-hover:text-green-300 transition-colors duration-300">
                                    Vue.js
                                </h3>
                            </div>
                        </div>
                        <div
                            class="group relative bg-gradient-to-br from-green-50 to-teal-100 dark:from-green-900/20 dark:to-teal-800/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:scale-110 hover:rotate-2 transition-all duration-500 border border-teal-200/50 dark:border-teal-700/50 hover:shadow-2xl hover:shadow-teal-500/25 overflow-hidden">
                            <div
                                class="absolute inset-0 bg-gradient-to-br from-green-400/10 to-teal-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            </div>
                            <div class="relative z-10">
                                <Icon name="logos:nuxt-icon" size="3em"
                                    class="mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                                <h3
                                    class="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors duration-300">
                                    Nuxt.js
                                </h3>
                            </div>
                        </div>
                        <div
                            class="group relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-800/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:scale-110 hover:rotate-2 transition-all duration-500 border border-blue-200/50 dark:border-blue-700/50 hover:shadow-2xl hover:shadow-blue-500/25 overflow-hidden">
                            <div
                                class="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            </div>
                            <div class="relative z-10">
                                <Icon name="logos:typescript-icon" size="3em"
                                    class="mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                                <h3
                                    class="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                                    TypeScript
                                </h3>
                            </div>
                        </div>
                        <div
                            class="group relative bg-gradient-to-br from-green-50 to-lime-100 dark:from-green-900/20 dark:to-lime-800/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:scale-110 hover:rotate-2 transition-all duration-500 border border-lime-200/50 dark:border-lime-700/50 hover:shadow-2xl hover:shadow-lime-500/25 overflow-hidden">
                            <div
                                class="absolute inset-0 bg-gradient-to-br from-green-400/10 to-lime-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            </div>
                            <div class="relative z-10">
                                <Icon name="logos:nodejs-icon" size="3em"
                                    class="mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                                <h3
                                    class="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-lime-700 dark:group-hover:text-lime-300 transition-colors duration-300">
                                    Node.js
                                </h3>
                            </div>
                        </div>
                    </div>
                </section>
            </UiScrollReveal>

            <!-- Statistics Section -->
            <UiScrollReveal :delay="500">
                <section class="py-12 sm:py-16 lg:py-20">
                    <div class="text-center mb-8 sm:mb-12">
                        <div
                            class="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-6">
                            <div class="relative">
                                <Icon name="mdi:chart-line" size="2em"
                                    class="sm:size-[2.5em] text-purple-600 dark:text-purple-400 animate-bounce-gentle" />
                                <div
                                    class="absolute inset-0 bg-purple-400 rounded-full blur-lg opacity-20 animate-glow">
                                </div>
                            </div>
                            <h2
                                class="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-purple-600 to-pink-600 dark:from-white dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                                Blog Stats
                            </h2>
                        </div>
                        <p class="text-gray-600 dark:text-zinc-400 text-base sm:text-lg px-4 sm:px-0">
                            一些有趣的数据统计
                        </p>
                    </div>

                    <!-- Stats Grid -->
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                        <div
                            class="group bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-800/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:scale-105 transition-all duration-500 border border-blue-200/50 dark:border-blue-700/50 hover:shadow-2xl hover:shadow-blue-500/25">
                            <div class="relative">
                                <Icon name="mdi:file-document-multiple" size="3em"
                                    class="mx-auto mb-4 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                                <div
                                    class="absolute inset-0 bg-blue-400 rounded-full blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                                </div>
                            </div>
                            <div class="text-3xl font-bold text-blue-700 dark:text-blue-300 mb-2">8</div>
                            <div class="text-sm font-medium text-gray-600 dark:text-gray-400">文章总数</div>
                        </div>

                        <div
                            class="group bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-800/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:scale-105 transition-all duration-500 border border-green-200/50 dark:border-green-700/50 hover:shadow-2xl hover:shadow-green-500/25">
                            <div class="relative">
                                <Icon name="mdi:tag-multiple" size="3em"
                                    class="mx-auto mb-4 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform duration-300" />
                                <div
                                    class="absolute inset-0 bg-green-400 rounded-full blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                                </div>
                            </div>
                            <div class="text-3xl font-bold text-green-700 dark:text-green-300 mb-2">12</div>
                            <div class="text-sm font-medium text-gray-600 dark:text-gray-400">标签数量</div>
                        </div>

                        <div
                            class="group bg-gradient-to-br from-purple-50 to-violet-100 dark:from-purple-900/20 dark:to-violet-800/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:scale-105 transition-all duration-500 border border-purple-200/50 dark:border-purple-700/50 hover:shadow-2xl hover:shadow-purple-500/25">
                            <div class="relative">
                                <Icon name="mdi:eye" size="3em"
                                    class="mx-auto mb-4 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                                <div
                                    class="absolute inset-0 bg-purple-400 rounded-full blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                                </div>
                            </div>
                            <div class="text-3xl font-bold text-purple-700 dark:text-purple-300 mb-2">2.5K</div>
                            <div class="text-sm font-medium text-gray-600 dark:text-gray-400">总浏览量</div>
                        </div>

                        <div
                            class="group bg-gradient-to-br from-orange-50 to-red-100 dark:from-orange-900/20 dark:to-red-800/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:scale-105 transition-all duration-500 border border-orange-200/50 dark:border-orange-700/50 hover:shadow-2xl hover:shadow-orange-500/25">
                            <div class="relative">
                                <Icon name="mdi:calendar-clock" size="3em"
                                    class="mx-auto mb-4 text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform duration-300" />
                                <div
                                    class="absolute inset-0 bg-orange-400 rounded-full blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                                </div>
                            </div>
                            <div class="text-3xl font-bold text-orange-700 dark:text-orange-300 mb-2">2</div>
                            <div class="text-sm font-medium text-gray-600 dark:text-gray-400">年活跃时间</div>
                        </div>
                    </div>
                </section>
            </UiScrollReveal>

            <!-- Contact Section -->
            <UiScrollReveal :delay="600">
                <section
                    class="py-16 sm:py-20 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-gray-900/50 dark:to-gray-800/50 rounded-3xl mb-16">
                    <div class="text-center">
                        <div class="flex justify-center items-center space-x-4 mb-6">
                            <div class="relative">
                                <Icon name="mdi:email" size="2.5em"
                                    class="text-accent-600 dark:text-accent-400 animate-bounce-gentle" />
                                <div
                                    class="absolute inset-0 bg-accent-400 rounded-full blur-lg opacity-20 animate-glow">
                                </div>
                            </div>
                            <h2
                                class="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-accent-600 to-primary-600 dark:from-white dark:via-accent-400 dark:to-primary-400 bg-clip-text text-transparent">
                                Get In Touch
                            </h2>
                        </div>
                        <p class="text-gray-600 dark:text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
                            有任何问题或想法？欢迎与我交流！我很乐意听到你的声音。
                        </p>
                        <div class="flex flex-col sm:flex-row justify-center gap-4">
                            <NuxtLink to="/about"
                                class="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-600 hover:from-primary-600 hover:to-accent-700 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                                <Icon name="mdi:account"
                                    class="mr-3 text-xl group-hover:scale-110 transition-transform duration-300" />
                                了解更多
                            </NuxtLink>
                            <a href="mailto:907574271@qq.com"
                                class="group inline-flex items-center justify-center px-8 py-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-2 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:border-primary-300 dark:hover:border-primary-600">
                                <Icon name="mdi:email"
                                    class="mr-3 text-xl group-hover:scale-110 transition-transform duration-300" />
                                联系我
                            </a>
                        </div>
                    </div>
                </section>
            </UiScrollReveal>
        </div>
    </main>
</template>
