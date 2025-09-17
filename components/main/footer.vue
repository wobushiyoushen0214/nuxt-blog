<script setup lang="ts">
// Explicit imports for footer components
import FooterSite from '~/components/footer/site.vue'
import FooterDeveloper from '~/components/footer/developer.vue'
import FooterLink from '~/components/footer/link.vue'
import FooterConnect from '~/components/footer/connect.vue'

const route = useRoute()

const path = computed(() => route.fullPath.replace('/', ''))

function scrollToTop() {
  if (import.meta.client) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
}
</script>

<template>
  <footer
    class="relative py-12 border-t border-gray-200/50 dark:border-gray-700/50 mt-16 text-zinc-700 dark:text-zinc-300 bg-gradient-to-t from-gray-50/80 via-gray-50/40 to-transparent dark:from-gray-900/80 dark:via-gray-900/40 overflow-hidden"
  >
    <!-- Background decoration -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-primary-50/20 via-transparent to-accent-50/20 dark:from-primary-900/10 dark:to-accent-900/10"
    ></div>
    <div
      class="absolute top-0 left-1/4 w-96 h-96 bg-primary-200/10 dark:bg-primary-800/10 rounded-full blur-3xl animate-float"
    ></div>
    <div
      class="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-200/10 dark:bg-accent-800/10 rounded-full blur-3xl animate-float-delayed"
    ></div>

    <div class="relative px-6 container max-w-5xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div class="animate-fade-in-up" style="animation-delay: 0.1s">
          <FooterSite v-if="path === 'about'" />
          <FooterDeveloper v-else />
        </div>
        <div class="animate-fade-in-up" style="animation-delay: 0.2s">
          <FooterLink />
        </div>
        <div class="animate-fade-in-up" style="animation-delay: 0.3s">
          <FooterConnect />
        </div>
      </div>

      <!-- Enhanced bottom section -->
      <div
        class="border-t border-gray-200/50 dark:border-gray-700/50 pt-8 animate-fade-in-up"
        style="animation-delay: 0.4s"
      >
        <div class="flex flex-col lg:flex-row items-center justify-between gap-6">
          <!-- Copyright section -->
          <div
            class="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-600 dark:text-gray-400"
          >
            <div class="flex items-center gap-2">
              <Icon name="mdi:heart" class="text-red-500 animate-pulse" />
              <span>© 2020-2024 Made with love. Who cares 🤷‍♂️?</span>
            </div>
          </div>

          <!-- Links section -->
          <div class="flex items-center gap-6">
            <div class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <span>It's</span>
              <a
                href="https://github.com/nurriyad/blog"
                target="_blank"
                rel="nofollow"
                class="group inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-all duration-300 hover:scale-105"
              >
                <Icon
                  name="mdi:github"
                  class="group-hover:rotate-12 transition-transform duration-300"
                />
                <span class="relative">
                  open source
                  <span
                    class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 dark:bg-primary-400 group-hover:w-full transition-all duration-300"
                  ></span>
                </span>
              </a>
              <span>anyway.</span>
            </div>

            <div class="h-4 w-px bg-gray-300 dark:bg-gray-600"></div>

            <a
              href="/rss.xml"
              aria-label="Website RSS Feed"
              class="group inline-flex items-center gap-2 text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-all duration-300 hover:scale-105"
            >
              <Icon name="bi:rss-fill" class="group-hover:animate-bounce" />
              <span class="text-sm font-medium">RSS</span>
            </a>
          </div>
        </div>

        <!-- Back to top button -->
        <div class="flex justify-center mt-8">
          <button
            @click="scrollToTop"
            class="group flex items-center gap-2 px-4 py-2 text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 hover:scale-105"
            aria-label="Back to top"
          >
            <Icon
              name="heroicons:arrow-up"
              class="group-hover:-translate-y-1 transition-transform duration-300"
            />
            <span>Back to top</span>
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Page transitions */
.v-enter-active,
.v-leave-active {
  transition: all 0.4s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

/* Footer animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-10px) rotate(1deg);
  }
  66% {
    transform: translateY(5px) rotate(-1deg);
  }
}

@keyframes floatDelayed {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(8px) rotate(-1deg);
  }
  66% {
    transform: translateY(-12px) rotate(1deg);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out both;
}

.animate-float {
  animation: float 20s ease-in-out infinite;
}

.animate-float-delayed {
  animation: floatDelayed 25s ease-in-out infinite;
  animation-delay: -5s;
}

/* Hover effects */
.group:hover .group-hover\:rotate-12 {
  transform: rotate(12deg);
}

.group:hover .group-hover\:-translate-y-1 {
  transform: translateY(-4px);
}

.group:hover .group-hover\:animate-bounce {
  animation: bounce 1s infinite;
}

/* Custom underline animation */
.group:hover .group-hover\:w-full {
  width: 100%;
}
</style>
