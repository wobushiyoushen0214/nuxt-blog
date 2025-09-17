<template>
  <div class="social-share">
    <h3 v-if="showTitle" class="share-title">
      {{ title }}
    </h3>
    
    <div class="share-buttons" :class="layoutClass">
      <button
        v-for="platform in enabledPlatforms"
        :key="platform.name"
        :class="[
          'share-button',
          `share-${platform.name}`,
          { 'with-label': showLabels }
        ]"
        :style="{ backgroundColor: platform.color }"
        @click="share(platform)"
      >
        <component :is="platform.icon" class="share-icon" />
        <span v-if="showLabels" class="share-label">
          {{ platform.label }}
        </span>
      </button>
      
      <!-- 复制链接按钮 -->
      <button
        v-if="showCopyLink"
        :class="[
          'share-button share-copy',
          { 'with-label': showLabels, 'copied': isCopied }
        ]"
        @click="copyLink"
      >
        <IconCopy v-if="!isCopied" class="share-icon" />
        <IconCheck v-else class="share-icon" />
        <span v-if="showLabels" class="share-label">
          {{ isCopied ? '已复制' : '复制链接' }}
        </span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  /** 分享的URL */
  url?: string
  /** 分享标题 */
  shareTitle?: string
  /** 分享描述 */
  description?: string
  /** 标签 */
  hashtags?: string[]
  /** 启用的平台 */
  platforms?: string[]
  /** 是否显示标题 */
  showTitle?: boolean
  /** 标题文本 */
  title?: string
  /** 是否显示标签 */
  showLabels?: boolean
  /** 布局方式 */
  layout?: 'horizontal' | 'vertical' | 'grid'
  /** 是否显示复制链接按钮 */
  showCopyLink?: boolean
  /** 按钮大小 */
  size?: 'small' | 'medium' | 'large'
}>(), {
  url: '',
  shareTitle: '',
  description: '',
  hashtags: () => [],
  platforms: () => ['twitter', 'facebook', 'linkedin', 'weibo', 'wechat'],
  showTitle: true,
  title: '分享到',
  showLabels: true,
  layout: 'horizontal',
  showCopyLink: true,
  size: 'medium'
})

const route = useRoute()
const isCopied = ref(false)

// 当前页面URL
const currentUrl = computed(() => {
  if (props.url) return props.url
  if (import.meta.client) {
    return window.location.href
  }
  return `https://yourdomain.com${route.fullPath}`
})

// 分享参数
const shareParams = computed<{
  url: string
  title: string
  description: string
  hashtags?: string[]
}>(() => ({
  url: currentUrl.value,
  title: props.shareTitle || document?.title || '',
  description: props.description || '',
  hashtags: props.hashtags
}))

// 图标组件
const IconTwitter = () => h('svg', { 
  viewBox: '0 0 24 24', 
  fill: 'currentColor' 
}, [
  h('path', { 
    d: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' 
  })
])

const IconFacebook = () => h('svg', { 
  viewBox: '0 0 24 24', 
  fill: 'currentColor' 
}, [
  h('path', { 
    d: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' 
  })
])

const IconLinkedIn = () => h('svg', { 
  viewBox: '0 0 24 24', 
  fill: 'currentColor' 
}, [
  h('path', { 
    d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' 
  })
])

const IconWeibo = () => h('svg', { 
  viewBox: '0 0 24 24', 
  fill: 'currentColor' 
}, [
  h('path', { 
    d: 'M10.098 20.323c-3.977.391-7.414-1.406-7.672-4.02-.259-2.609 2.759-5.047 6.74-5.441 3.979-.394 7.413 1.404 7.671 4.018.259 2.6-2.759 5.049-6.739 5.443zm8.717-8.922c-.332-.066-.562-.132-.384-.475.384-.723.424-1.349.125-1.798-.559-.84-2.095-.795-3.863-.026 0 0-.554.246-.413-.199.27-.891.23-1.638-.158-2.067-.887-.982-3.245.037-5.273 2.277-1.519 1.678-2.406 3.445-2.406 4.976 0 2.952 3.771 4.746 7.466 4.746 4.84 0 8.067-2.807 8.067-5.042 0-1.349-1.138-2.119-2.161-2.392z' 
  })
])

const IconWechat = () => h('svg', { 
  viewBox: '0 0 24 24', 
  fill: 'currentColor' 
}, [
  h('path', { 
    d: 'M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18 0 .659-.52 1.188-1.162 1.188-.642 0-1.162-.529-1.162-1.188 0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18 0 .659-.52 1.188-1.162 1.188-.642 0-1.162-.529-1.162-1.188 0-.651.52-1.18 1.162-1.18zm7.278 5.135c-3.558 0-6.407 2.351-6.407 5.244 0 2.893 2.849 5.244 6.407 5.244a7.788 7.788 0 002.186-.31c.19-.054.41-.027.567.068l1.462.853a.235.235 0 00.121.04.214.214 0 00.210-.214c0-.053-.021-.105-.035-.158l-.3-1.073a.427.427 0 01.154-.482c1.408-1.033 2.272-2.568 2.272-4.244 0-2.893-2.849-5.244-6.407-5.244l-.23.002zm-2.502 2.985c.46 0 .833.382.833.853 0 .47-.373.852-.833.852s-.833-.382-.833-.852c0-.471.373-.853.833-.853zm5.005 0c.46 0 .833.382.833.853 0 .47-.373.852-.833.852s-.833-.382-.833-.852c0-.471.373-.853.833-.853z' 
  })
])

const IconCopy = () => h('svg', { 
  viewBox: '0 0 24 24', 
  fill: 'currentColor' 
}, [
  h('path', { 
    d: 'M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z' 
  })
])

const IconCheck = () => h('svg', { 
  viewBox: '0 0 24 24', 
  fill: 'currentColor' 
}, [
  h('path', { 
    d: 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z' 
  })
])

// 分享平台配置
const sharePlatforms: Array<{
  name: string
  label: string
  color: string
  icon: () => ReturnType<typeof h>
  url: (params: { url: string; title: string; description: string; hashtags?: string[] }) => string
}> = [
  {
    name: 'twitter',
    label: 'Twitter',
    color: '#1DA1F2',
    icon: IconTwitter,
    url: (params: { url: string; title: string; description: string; hashtags?: string[] }) => {
      const text = `${params.title} ${params.hashtags?.map((tag: string) => `#${tag}`).join(' ') || ''}`
      return `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(params.url)}`
    }
  },
  {
    name: 'facebook',
    label: 'Facebook',
    color: '#4267B2',
    icon: IconFacebook,
    url: (params: { url: string; title: string; description: string; hashtags?: string[] }) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(params.url)}`
  },
  {
    name: 'linkedin',
    label: 'LinkedIn',
    color: '#0077B5',
    icon: IconLinkedIn,
    url: (params: { url: string; title: string; description: string; hashtags?: string[] }) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(params.url)}`
  },
  {
    name: 'weibo',
    label: '微博',
    color: '#E6162D',
    icon: IconWeibo,
    url: (params: { url: string; title: string; description: string; hashtags?: string[] }) => `https://service.weibo.com/share/share.php?url=${encodeURIComponent(params.url)}&title=${encodeURIComponent(params.title)}`
  },
  {
    name: 'wechat',
    label: '微信',
    color: '#07C160',
    icon: IconWechat,
    url: (params: { url: string; title: string; description: string; hashtags?: string[] }) => `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(params.url)}`
  }
]

// 启用的平台
const enabledPlatforms = computed(() => {
  return sharePlatforms.filter(platform => props.platforms.includes(platform.name))
})

// 布局类
const layoutClass = computed(() => {
  return {
    'layout-horizontal': props.layout === 'horizontal',
    'layout-vertical': props.layout === 'vertical',
    'layout-grid': props.layout === 'grid',
    [`size-${props.size}`]: true
  }
})

// 分享方法
const share = (platform: {
  name: string
  label: string
  color: string
  icon: () => ReturnType<typeof h>
  url: (params: { url: string; title: string; description: string; hashtags?: string[] }) => string
}) => {
  const url = platform.url(shareParams.value)
  
  if (platform.name === 'wechat') {
    // 微信分享显示二维码
    showQRCode(url)
  } else {
    // 其他平台打开新窗口
    window.open(url, '_blank', 'width=600,height=400')
  }
}

// 显示二维码
const showQRCode = (qrUrl: string) => {
  const modal = document.createElement('div')
  modal.className = 'qr-modal'
  modal.innerHTML = `
    <div class="qr-modal-content">
      <div class="qr-modal-header">
        <h3>微信扫码分享</h3>
        <button class="qr-modal-close">&times;</button>
      </div>
      <div class="qr-modal-body">
        <img src="${qrUrl}" alt="微信分享二维码" />
        <p>使用微信扫描二维码分享</p>
      </div>
    </div>
  `
  
  // 添加样式
  const style = document.createElement('style')
  style.textContent = `
    .qr-modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
    }
    .qr-modal-content {
      background: white;
      border-radius: 8px;
      padding: 20px;
      max-width: 300px;
      text-align: center;
    }
    .qr-modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }
    .qr-modal-close {
      background: none;
      border: none;
      font-size: 24px;
      cursor: pointer;
    }
    .qr-modal-body img {
      width: 200px;
      height: 200px;
    }
  `
  
  document.head.appendChild(style)
  document.body.appendChild(modal)
  
  // 关闭模态框
  const closeModal = () => {
    document.body.removeChild(modal)
    document.head.removeChild(style)
  }
  
  modal.querySelector('.qr-modal-close')?.addEventListener('click', closeModal)
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal()
  })
}

// 复制链接
const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(currentUrl.value)
    isCopied.value = true
    
    setTimeout(() => {
      isCopied.value = false
    }, 2000)
  } catch (err) {
    console.error('复制失败:', err)
  }
}
</script>

<style scoped>
.social-share {
  @apply space-y-4;
}

.share-title {
  @apply text-lg font-semibold text-gray-900 dark:text-white;
}

.share-buttons {
  @apply flex gap-3;
}

.layout-horizontal {
  @apply flex-row flex-wrap;
}

.layout-vertical {
  @apply flex-col;
}

.layout-grid {
  @apply grid grid-cols-3 gap-3;
}

.share-button {
  @apply flex items-center justify-center;
  @apply text-white font-medium;
  @apply rounded-lg transition-all duration-200;
  @apply hover:scale-105 hover:shadow-lg;
  @apply focus:outline-none focus:ring-2 focus:ring-offset-2;
}

.size-small .share-button {
  @apply px-2 py-1 text-xs;
}

.size-medium .share-button {
  @apply px-3 py-2 text-sm;
}

.size-large .share-button {
  @apply px-4 py-3 text-base;
}

.share-button.with-label {
  @apply space-x-2;
}

.share-icon {
  @apply w-4 h-4;
}

.size-large .share-icon {
  @apply w-5 h-5;
}

.share-copy {
  @apply bg-gray-600 hover:bg-gray-700;
}

.share-copy.copied {
  @apply bg-green-600 hover:bg-green-700;
}

.share-label {
  @apply whitespace-nowrap;
}

/* 响应式 */
@media (max-width: 640px) {
  .layout-horizontal {
    @apply grid grid-cols-2 gap-2;
  }
  
  .share-button {
    @apply px-2 py-2 text-xs;
  }
  
  .share-icon {
    @apply w-4 h-4;
  }
}
</style>