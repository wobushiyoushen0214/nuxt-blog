<script lang="ts" setup>
interface Props {
  path: string
  title: string
  date: string
  description: string
  image: string
  alt: string
  ogImage: string
  tags: Array<string>
  published: boolean
}

withDefaults(defineProps<Props>(), {
  path: '/',
  title: 'no-title',
  date: 'no-date',
  description: 'no-description',
  image: '/blogs-img/blog.jpg',
  alt: 'no-alt',
  ogImage: '/blogs-img/blog.jpg',
  tags: () => [],
  published: false,
})
</script>

<template>
  <article
    class="group relative m-1 sm:m-2 overflow-hidden rounded-2xl sm:rounded-3xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60 shadow-xl hover:shadow-2xl text-zinc-700 dark:text-zinc-300 transform hover:scale-[1.03] hover:-translate-y-2 transition-all duration-500 animate-scale-in h-full flex flex-col active:scale-95 touch-manipulation no-transition"
  >
    <!-- Gradient border effect -->
    <div
      class="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-accent-500/20 to-primary-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
    ></div>

    <NuxtLink :to="path" class="relative z-10 h-full flex flex-col">
      <div class="relative overflow-hidden rounded-t-2xl sm:rounded-t-3xl">
        <NuxtImg
          class="h-40 sm:h-48 lg:h-52 w-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
          width="300"
          :src="image"
          :alt="alt"
        />
        <!-- Enhanced overlay gradient -->
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        ></div>

        <!-- Floating action button -->
        <div
          class="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-400 transform translate-y-3 group-hover:translate-y-0"
        >
          <div
            class="bg-white/25 hover:bg-white/35 backdrop-blur-md rounded-full p-3 border border-white/20 shadow-lg"
          >
            <Icon
              name="heroicons:arrow-top-right-on-square"
              class="text-white text-xl drop-shadow-lg"
            />
          </div>
        </div>

        <!-- Read badge -->
        <div
          class="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-3 group-hover:translate-x-0"
        >
          <div
            class="bg-gradient-to-r from-primary-500/90 to-accent-500/90 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 shadow-lg"
          >
            <span class="text-white text-sm font-semibold">Read Article</span>
          </div>
        </div>

        <!-- Shimmer effect -->
        <div
          class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"
        ></div>
      </div>

      <div class="px-4 sm:px-6 py-4 sm:py-5 flex-1 flex flex-col">
        <!-- Meta information -->
        <div class="text-gray-500 dark:text-zinc-400 pb-4 space-y-3">
          <div class="flex items-center text-sm font-medium">
            <div class="w-4 h-4 mr-2 text-primary-500">
              <LogoDate />
            </div>
            <span>{{ date }}</span>
          </div>
          <div class="flex items-center gap-2 flex-wrap">
            <div class="w-4 h-4 text-accent-500">
              <LogoTag />
            </div>
            <template v-for="tag in tags" :key="tag">
              <span
                class="bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/40 dark:to-accent-900/40 text-primary-700 dark:text-primary-300 rounded-full px-3 py-1.5 text-xs font-semibold border border-primary-200/50 dark:border-primary-700/50 hover:scale-105 transition-transform duration-200"
                >{{ tag }}</span
              >
            </template>
          </div>
        </div>

        <!-- Title -->
        <h2
          class="text-lg sm:text-xl font-bold text-gray-900 dark:text-zinc-100 pb-2 sm:pb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300 line-clamp-2 leading-tight"
        >
          {{ title }}
        </h2>

        <!-- Description -->
        <p
          class="text-gray-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4 sm:mb-5 flex-1"
        >
          {{ description }}
        </p>

        <!-- Read more button -->
        <div class="flex items-center justify-between mt-auto">
          <div
            class="flex items-center text-primary-600 dark:text-primary-400 font-semibold group-hover:gap-2 transition-all duration-300"
          >
            <span class="text-sm">Read More</span>
            <LogoArrow
              class="transform group-hover:translate-x-1 transition-transform duration-300 ml-1"
            />
          </div>
          <div
            class="w-8 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>
        </div>
      </div>
    </NuxtLink>
  </article>
</template>
