<template>
  <div class="flex flex-col dark:text-zinc-300 my-5 md:my-0 md:justify-self-center">
    <div class="flex items-center gap-2 mb-4">
      <Icon name="heroicons:link" class="text-primary-600 dark:text-primary-400" />
      <p class="text-black dark:text-zinc-300 text-lg font-semibold">Quick Links</p>
    </div>
    <div class="space-y-3">
      <NuxtLink
        to="/"
        class="group flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 hover:translate-x-1"
      >
        <Icon
          name="heroicons:home"
          size="0.9em"
          class="group-hover:scale-110 transition-transform duration-300"
        />
        <span class="relative">
          Home
          <span
            class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 dark:bg-primary-400 group-hover:w-full transition-all duration-300"
          ></span>
        </span>
      </NuxtLink>
      <NuxtLink
        to="/blogs"
        class="group flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 hover:translate-x-1"
      >
        <Icon
          name="heroicons:document-text"
          size="0.9em"
          class="group-hover:scale-110 transition-transform duration-300"
        />
        <span class="relative">
          Blogs
          <span
            class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 dark:bg-primary-400 group-hover:w-full transition-all duration-300"
          ></span>
        </span>
      </NuxtLink>
      <NuxtLink
        to="/categories"
        class="group flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 hover:translate-x-1"
      >
        <Icon
          name="heroicons:tag"
          size="0.9em"
          class="group-hover:scale-110 transition-transform duration-300"
        />
        <span class="relative">
          Categories
          <span
            class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 dark:bg-primary-400 group-hover:w-full transition-all duration-300"
          ></span>
        </span>
      </NuxtLink>
      <NuxtLink
        to="/about"
        class="group flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 hover:translate-x-1"
      >
        <Icon
          name="heroicons:user"
          size="0.9em"
          class="group-hover:scale-110 transition-transform duration-300"
        />
        <span class="relative">
          About Me
          <span
            class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 dark:bg-primary-400 group-hover:w-full transition-all duration-300"
          ></span>
        </span>
      </NuxtLink>
    </div>
  </div>
</template>
