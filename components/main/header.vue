<!--
 * @Author: LiZhiWei
 * @Date: 2025-09-15 14:44:39
 * @LastEditors: LiZhiWei
 * @LastEditTime: 2025-09-15 14:58:18
 * @Description: 优化后的导航栏组件，包含现代化设计和动画效果
-->
<script setup lang="ts">
import { navbarData } from '../../data'

const colorMode = useColorMode()
function onClick(val: 'auto' | 'dark' | 'light') {
  colorMode.value = val
}

const route = useRoute()
function isActive(path: string) {
  return route.path.startsWith(path)
}

// Mobile menu state
const isMobileMenuOpen = ref(false)
const isMenuAnimating = ref(false)

function toggleMobileMenu() {
  if (isMenuAnimating.value) return
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Close mobile menu when route changes
watch(
  () => route.path,
  () => {
    isMobileMenuOpen.value = false
  },
)

// Touch gesture handling
const touchStartY = ref(0)
const touchStartX = ref(0)
const menuRef = ref(null)

function handleTouchStart(e: TouchEvent) {
  touchStartY.value = e.touches[0].clientY
  touchStartX.value = e.touches[0].clientX
}

function handleTouchEnd(e: TouchEvent) {
  if (!isMobileMenuOpen.value) return

  const touchEndY = e.changedTouches[0].clientY
  const touchEndX = e.changedTouches[0].clientX
  const deltaY = touchStartY.value - touchEndY
  const deltaX = Math.abs(touchStartX.value - touchEndX)

  // Swipe up to close menu (minimum 50px swipe, max 100px horizontal movement)
  if (deltaY > 50 && deltaX < 100) {
    isMobileMenuOpen.value = false
  }
}

// Add haptic feedback for supported devices
function addHapticFeedback() {
  if ('vibrate' in navigator) {
    navigator.vibrate(10) // Short vibration
  }
}

// Header scroll effect with enhanced stability
const isScrolled = ref(false)
const headerRef = ref(null)
const scrollThreshold = 50 // 增加阈值，减少敏感度
const hysteresis = 20 // 增加滞后效应

onMounted(() => {
  let ticking = false
  let scrollTimeout: NodeJS.Timeout | null = null
  
  const handleScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY
        
        // 清除之前的超时
        if (scrollTimeout) {
          clearTimeout(scrollTimeout)
        }
        
        // 添加延迟处理，进一步减少抖动
        scrollTimeout = setTimeout(() => {
          // 使用更大的滞后效应避免频繁切换
           if (!isScrolled.value && currentScrollY > scrollThreshold + hysteresis) {
             isScrolled.value = true
           } else if (isScrolled.value && currentScrollY < scrollThreshold - hysteresis) {
             isScrolled.value = false
           }
        }, 10) // 10ms 延迟
        
        ticking = false
      })
      ticking = true
    }
  }
  
  // 使用 passive 监听器提高性能
  window.addEventListener('scroll', handleScroll, { passive: true })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    if (scrollTimeout) {
      clearTimeout(scrollTimeout)
    }
  })
})
</script>

<template>
  <header
    ref="headerRef"
    class="sticky top-0 z-50 font-semibold backdrop-blur-xl border-b border-transparent min-h-[64px] transition-all duration-300 ease-out"
    :class="{
      'bg-white/90 dark:bg-slate-900/90 shadow-xl shadow-primary-500/5 border-gray-200/30 dark:border-gray-700/30 py-2':
        isScrolled,
      'bg-gradient-to-r from-transparent via-white/5 to-transparent dark:from-transparent dark:via-slate-900/5 dark:to-transparent py-4':
        !isScrolled,
    }"
  >
    <!-- Floating background effect -->
    <div
      class="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-transparent to-accent-500/5 opacity-0 transition-opacity duration-300 ease-out"
      :class="{ 'opacity-100': isScrolled }"
    ></div>
    <div class="flex px-4 sm:px-6 container max-w-5xl justify-between mx-auto items-center min-h-[56px]">
      <!-- Logo Section -->
      <div class="flex items-center space-x-3 group relative">
        <!-- Logo with enhanced effects -->
        <div class="relative">
          <div
            class="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl blur-sm opacity-0 group-hover:opacity-50 transition-all duration-500 scale-110"
          ></div>
          <div
            class="relative w-10 h-10 bg-gradient-to-br from-primary-500 via-primary-600 to-accent-500 rounded-xl flex items-center justify-center animate-bounce-gentle group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg shadow-primary-500/25"
          >
            <Icon name="mdi:code-tags" class="text-white text-xl drop-shadow-sm" />
            <!-- Sparkle effect -->
            <div
              class="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-ping"
            ></div>
          </div>
        </div>

        <!-- Brand name with enhanced typography -->
        <NuxtLink
          to="/"
          class="text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-900 via-primary-600 to-accent-600 dark:from-white dark:via-primary-400 dark:to-accent-400 bg-clip-text text-transparent hover:scale-105 transition-all duration-500 relative group/brand"
        >
          {{ navbarData.homeTitle }}
          <!-- Enhanced underline effect -->
          <div
            class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 group-hover:w-full transition-all duration-500 rounded-full"
          ></div>
          <!-- Shimmer effect -->
          <div
            class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover/brand:opacity-100 group-hover/brand:animate-shimmer transition-opacity duration-300"
          ></div>
        </NuxtLink>
      </div>
      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center space-x-2 relative">
        <!-- Navigation background glow -->
        <div
          class="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-transparent to-accent-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"
        ></div>

        <div
          class="relative flex items-center space-x-1 px-2 py-1 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-gray-200/30 dark:border-gray-700/30 shadow-sm"
        >
          <NuxtLink to="/blogs" class="nav-link" :class="{ 'nav-link-active': isActive('/blogs') }">
            <Icon
              name="mdi:book-open-variant"
              class="mr-2 transition-transform duration-300 group-hover:scale-110"
            />
            <span>Blogs</span>
            <div class="nav-indicator"></div>
            <!-- Notification dot for new content -->
            <div
              class="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full opacity-0 animate-pulse"
            ></div>
          </NuxtLink>

          <NuxtLink
            to="/categories"
            class="nav-link"
            :class="{ 'nav-link-active': isActive('/categories') }"
          >
            <Icon
              name="mdi:tag-multiple"
              class="mr-2 transition-transform duration-300 group-hover:scale-110"
            />
            <span>Categories</span>
            <div class="nav-indicator"></div>
          </NuxtLink>

          <NuxtLink
            to="/about"
            class="nav-link"
            :class="{ 'nav-link-active': $route.path === '/about' }"
            title="About Me"
            aria-label="About me"
          >
            <Icon
              name="mdi:account"
              class="mr-2 transition-transform duration-300 group-hover:scale-110"
            />
            <span>About</span>
            <div class="nav-indicator"></div>
          </NuxtLink>
        </div>

        <!-- Search Box -->
        <div class="ml-4 hidden lg:block">
          <UiSearchBox />
        </div>

        <!-- Theme Toggle -->
        <ClientOnly>
          <div class="ml-6 pl-4 border-l border-gray-300/50 dark:border-gray-600/50 relative">
            <!-- Ambient glow effect -->
            <div
              class="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-blue-400/20 dark:from-blue-400/20 dark:to-purple-400/20 rounded-full blur-lg opacity-0 transition-all duration-500 scale-0 group-hover:opacity-100 group-hover:scale-150"
            ></div>

            <Transition name="theme-switch" mode="out-in">
              <button
                v-if="$colorMode.value === 'light'"
                key="light"
                name="light-mode"
                title="Switch to Dark Mode"
                class="theme-toggle group"
                @click="onClick('dark')"
              >
                <Icon
                  name="icon-park:moon"
                  size="20"
                  class="transition-all duration-500 group-hover:rotate-12 group-hover:scale-110"
                />
                <!-- Moon glow effect -->
                <div
                  class="absolute inset-0 bg-blue-400/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-150"
                ></div>
              </button>
              <button
                v-else-if="$colorMode.value === 'dark'"
                key="dark"
                name="dark-mode"
                title="Switch to Light Mode"
                class="theme-toggle group"
                @click="onClick('light')"
              >
                <Icon
                  name="noto:sun"
                  size="20"
                  class="transition-all duration-500 group-hover:rotate-180 group-hover:scale-110"
                />
                <!-- Sun glow effect -->
                <div
                  class="absolute inset-0 bg-yellow-400/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-150"
                ></div>
              </button>
            </Transition>
          </div>
          <template #fallback>
            <div class="ml-6 pl-4 border-l border-gray-300/50 dark:border-gray-600/50 relative">
              <div class="theme-toggle animate-pulse w-10 h-10 flex items-center justify-center">
                <div class="w-5 h-5 bg-gray-400 rounded-full"></div>
              </div>
            </div>
          </template>
        </ClientOnly>
      </nav>

      <!-- Mobile Menu Button -->
      <div class="md:hidden flex items-center space-x-2">
        <!-- Mobile Theme Toggle -->
        <ClientOnly>
          <div class="relative">
            <!-- Ambient glow effect -->
            <div
              class="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-blue-400/20 dark:from-blue-400/20 dark:to-purple-400/20 rounded-full blur-lg opacity-0 transition-all duration-500 scale-0 group-hover:opacity-100 group-hover:scale-150"
            ></div>

            <Transition name="theme-switch" mode="out-in">
              <button
                v-if="$colorMode.value === 'light'"
                key="light-mobile"
                name="light-mode"
                title="Switch to Dark Mode"
                class="theme-toggle group"
                @click="onClick('dark')"
              >
                <Icon
                  name="icon-park:moon"
                  size="18"
                  class="transition-all duration-500 group-hover:rotate-12 group-hover:scale-110"
                />
                <!-- Moon glow effect -->
                <div
                  class="absolute inset-0 bg-blue-400/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-150"
                ></div>
              </button>
              <button
                v-else-if="$colorMode.value === 'dark'"
                key="dark-mobile"
                name="dark-mode"
                title="Switch to Light Mode"
                class="theme-toggle group"
                @click="onClick('light')"
              >
                <Icon
                  name="noto:sun"
                  size="18"
                  class="transition-all duration-500 group-hover:rotate-180 group-hover:scale-110"
                />
                <!-- Sun glow effect -->
                <div
                  class="absolute inset-0 bg-yellow-400/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-150"
                ></div>
              </button>
            </Transition>
          </div>
          <template #fallback>
            <div class="theme-toggle animate-pulse w-9 h-9 flex items-center justify-center">
              <div class="w-4 h-4 bg-gray-400 rounded-full"></div>
            </div>
          </template>
        </ClientOnly>

        <!-- Hamburger Menu -->
        <button
          class="mobile-menu-button group"
          @click="
            toggleMobileMenu();
            addHapticFeedback();
          "
          :class="{ active: isMobileMenuOpen, animating: isMenuAnimating }"
          aria-label="Toggle mobile menu"
        >
          <!-- Background glow effect -->
          <div
            class="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm scale-110"
          ></div>

          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>

          <!-- Ripple effect -->
          <div
            class="absolute inset-0 rounded-lg bg-primary-500/10 scale-0 group-active:scale-100 transition-transform duration-200"
          ></div>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation Menu -->
    <Transition
      name="mobile-menu"
      @before-enter="isMenuAnimating = true"
      @after-enter="isMenuAnimating = false"
      @before-leave="isMenuAnimating = true"
      @after-leave="isMenuAnimating = false"
    >
      <div
        v-if="isMobileMenuOpen"
        ref="menuRef"
        class="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-gray-200/50 dark:border-gray-700/50 touch-pan-y"
        @touchstart="handleTouchStart"
        @touchend="handleTouchEnd"
      >
        <!-- Swipe indicator -->
        <div class="flex justify-center py-2">
          <div class="w-12 h-1 bg-gray-300 dark:bg-gray-600 rounded-full swipe-indicator"></div>
        </div>

        <nav class="px-4 pb-4 space-y-2">
          <NuxtLink
            to="/blogs"
            class="mobile-nav-link"
            :class="{ 'mobile-nav-link-active': isActive('/blogs') }"
            @click="addHapticFeedback"
          >
            <Icon name="mdi:book-open-variant" class="mr-3" />
            <span>Blogs</span>
            <Icon name="heroicons:chevron-right" class="ml-auto opacity-50" size="16" />
          </NuxtLink>
          <NuxtLink
            to="/categories"
            class="mobile-nav-link"
            :class="{ 'mobile-nav-link-active': isActive('/categories') }"
            @click="addHapticFeedback"
          >
            <Icon name="mdi:tag-multiple" class="mr-3" />
            <span>Categories</span>
            <Icon name="heroicons:chevron-right" class="ml-auto opacity-50" size="16" />
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="mobile-nav-link"
            :class="{ 'mobile-nav-link-active': $route.path === '/about' }"
            @click="addHapticFeedback"
          >
            <Icon name="mdi:account" class="mr-3" />
            <span>About</span>
            <Icon name="heroicons:chevron-right" class="ml-auto opacity-50" size="16" />
          </NuxtLink>
        </nav>

        <!-- Close button -->
        <div class="px-4 pb-4">
          <button
            @click="toggleMobileMenu"
            class="w-full py-3 text-center text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-200 border-t border-gray-200 dark:border-gray-700"
          >
            <Icon name="heroicons:x-mark" class="mx-auto" size="20" />
          </button>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.nav-link {
  @apply px-4 py-2.5 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gradient-to-r hover:from-primary-50 hover:to-accent-50 dark:hover:from-primary-900/20 dark:hover:to-accent-900/20 transition-all duration-500 flex items-center transform hover:scale-105 hover:-translate-y-0.5 relative overflow-hidden;
  /* Group utility applied separately */
  backdrop-filter: blur(8px);
  border: 1px solid transparent;
}

.nav-link::before {
  content: '';
  @apply absolute inset-0 bg-gradient-to-r from-primary-500/20 via-accent-500/20 to-primary-500/20 transform scale-x-0 transition-all duration-500 origin-left rounded-xl;
}

.nav-link:hover::before {
  @apply scale-x-100;
  animation: shimmer 1.5s ease-in-out infinite;
}

.nav-link:hover {
  @apply border-primary-200/50 dark:border-primary-700/50 shadow-lg shadow-primary-500/10;
}

.nav-indicator {
  @apply absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 transition-all duration-500 rounded-full;
  box-shadow: 0 0 8px currentColor;
}

.nav-link:hover .nav-indicator {
  @apply w-4/5;
  animation: glow 2s ease-in-out infinite alternate;
}

.nav-link-active {
  @apply text-primary-600 dark:text-primary-400 bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/40 dark:to-accent-900/40 shadow-lg shadow-primary-500/20 border-primary-200/50 dark:border-primary-700/50;
}

.nav-link-active .nav-indicator {
  @apply w-4/5;
  animation: glow 2s ease-in-out infinite alternate;
}

/* Enhanced animations */
@keyframes shimmer {
  0% {
    transform: translateX(-100%) scaleX(0);
  }
  50% {
    transform: translateX(0%) scaleX(1);
  }
  100% {
    transform: translateX(100%) scaleX(0);
  }
}

@keyframes glow {
  0% {
    box-shadow: 0 0 5px currentColor;
  }
  100% {
    box-shadow:
      0 0 15px currentColor,
      0 0 25px currentColor;
  }
}

.theme-toggle {
  @apply relative p-3 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 hover:from-primary-100 hover:to-accent-100 dark:hover:from-primary-900/40 dark:hover:to-accent-900/40 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 overflow-hidden shadow-lg hover:shadow-xl;
  border: 1px solid rgb(229 231 235 / 0.5);
}

.theme-toggle:is(.dark *) {
  border: 1px solid rgb(55 65 81 / 0.5);
}

.theme-toggle::before {
  @apply absolute inset-0 bg-gradient-to-br from-yellow-400/30 to-orange-400/30 dark:from-blue-400/30 dark:to-purple-400/30 opacity-0 transition-all duration-500 transform scale-0;
  content: '';
  border-radius: inherit;
}

.theme-toggle:hover::before {
  @apply opacity-100 scale-100;
  animation: themeGlow 2s ease-in-out infinite alternate;
}

.theme-toggle:active {
  @apply scale-95 translate-y-0;
  animation: themeTogglePulse 0.6s ease-out;
}

.theme-toggle:hover {
  @apply border-primary-300/50 dark:border-primary-600/50;
}

@keyframes themeGlow {
  0% {
    opacity: 0.3;
    transform: scale(1);
  }
  100% {
    opacity: 0.7;
    transform: scale(1.05);
  }
}

@keyframes themeTogglePulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(59, 130, 246, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
  }
}

/* 主题切换图标动画 */
.theme-toggle .iconify {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.theme-toggle:hover .iconify {
  transform: rotate(180deg) scale(1.1);
  filter: drop-shadow(0 0 8px currentColor);
}

/* Mobile Menu Button */
.mobile-menu-button {
  @apply relative w-10 h-10 flex flex-col justify-center items-center space-y-1 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 hover:from-primary-100 hover:to-accent-100 dark:hover:from-primary-900/40 dark:hover:to-accent-900/40 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 active:scale-95 active:translate-y-0 touch-manipulation shadow-lg hover:shadow-xl;
  border: 1px solid rgb(229 231 235 / 0.5);
}

.mobile-menu-button:is(.dark *) {
  border: 1px solid rgb(55 65 81 / 0.5);
}

.mobile-menu-button:hover {
  @apply border-primary-300/50 dark:border-primary-600/50;
}

.mobile-menu-button:active {
  @apply from-primary-200 to-accent-200 dark:from-primary-800 dark:to-accent-800;
  box-shadow:
    inset 0 2px 8px rgba(0, 0, 0, 0.15),
    0 0 20px rgba(59, 130, 246, 0.3);
}

.mobile-menu-button.animating {
  @apply pointer-events-none;
}

.hamburger-line {
  @apply w-5 h-0.5 bg-gradient-to-r from-gray-600 to-gray-700 dark:from-gray-400 dark:to-gray-300 transition-all duration-500 transform origin-center rounded-full shadow-sm;
}

.mobile-menu-button:hover .hamburger-line {
  @apply from-primary-600 to-accent-600 dark:from-primary-400 dark:to-accent-400 shadow-md;
}

.mobile-menu-button.active .hamburger-line:nth-child(1) {
  @apply rotate-45 translate-y-1.5;
}

.mobile-menu-button.active .hamburger-line:nth-child(2) {
  @apply opacity-0;
}

.mobile-menu-button.active .hamburger-line:nth-child(3) {
  @apply -rotate-45 -translate-y-1.5;
}

/* Mobile Navigation Links */

/* Mobile Navigation Links */
.mobile-nav-link {
  @apply flex items-center w-full px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-all duration-200 transform active:scale-95 touch-manipulation;
}

.mobile-nav-link:active {
  @apply bg-primary-100 dark:bg-primary-900/30 scale-95;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
}

.mobile-nav-link-active {
  @apply text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900/30 font-medium;
}

/* Touch feedback animations */
@keyframes touchFeedback {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.98);
  }
  100% {
    transform: scale(1);
  }
}

.touch-feedback {
  animation: touchFeedback 0.15s ease-out;
}

/* Swipe indicator animation */
@keyframes swipeHint {
  0%,
  100% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.8;
  }
}

.swipe-indicator {
  animation: swipeHint 2s ease-in-out infinite;
}

/* Mobile Navigation - Enhanced styles (consolidated) */

/* Mobile Menu Transitions */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-menu-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Theme Switch Transitions */
.theme-switch-enter-active,
.theme-switch-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.theme-switch-enter-from {
  opacity: 0;
  transform: rotate(-180deg) scale(0.5);
}

.theme-switch-leave-to {
  opacity: 0;
  transform: rotate(180deg) scale(0.5);
}

.theme-switch-enter-active {
  transition-delay: 0.1s;
}

/* Additional animations */
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
