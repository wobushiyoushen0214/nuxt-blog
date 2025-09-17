<template>
  <Head>
    <!-- JSON-LD 结构化数据 -->
    <script
      v-if="structuredData"
      type="application/ld+json"
      v-html="JSON.stringify(structuredData)"
    />
  </Head>
</template>

<script setup lang="ts">
interface Props {
  type: 'website' | 'article' | 'blog' | 'person' | 'organization'
  title?: string
  description?: string
  url?: string
  image?: string
  author?: {
    name: string
    url?: string
  }
  publishedTime?: string
  modifiedTime?: string
  tags?: string[]
  category?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'website'
})

const route = useRoute()
const runtimeConfig = useRuntimeConfig()

const baseUrl = runtimeConfig.public.siteUrl || 'https://your-domain.com'
const siteName = 'LiZhiWei Blog'
const siteDescription = '分享技术、思考和生活的个人博客'

const structuredData = computed(() => {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': getSchemaType(props.type),
    name: props.title || siteName,
    description: props.description || siteDescription,
    url: props.url || `${baseUrl}${route.path}`,
    image: props.image ? `${baseUrl}${props.image}` : `${baseUrl}/preview1.png`,
    inLanguage: 'zh-CN'
  }

  switch (props.type) {
    case 'website':
      return {
        ...baseData,
        '@type': 'WebSite',
        publisher: {
          '@type': 'Person',
          name: 'LiZhiWei',
          url: baseUrl
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: `${baseUrl}/search?q={search_term_string}`,
          'query-input': 'required name=search_term_string'
        }
      }

    case 'article':
    case 'blog':
      return {
        ...baseData,
        '@type': 'BlogPosting',
        headline: props.title,
        author: {
          '@type': 'Person',
          name: props.author?.name || 'LiZhiWei',
          url: props.author?.url || baseUrl
        },
        publisher: {
          '@type': 'Person',
          name: 'LiZhiWei',
          url: baseUrl,
          logo: {
            '@type': 'ImageObject',
            url: `${baseUrl}/logo.png`
          }
        },
        datePublished: props.publishedTime,
        dateModified: props.modifiedTime || props.publishedTime,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': props.url || `${baseUrl}${route.path}`
        },
        keywords: props.tags?.join(', '),
        articleSection: props.category,
        wordCount: calculateWordCount()
      }

    case 'person':
      return {
        ...baseData,
        '@type': 'Person',
        jobTitle: 'Software Developer',
        worksFor: {
          '@type': 'Organization',
          name: 'Tech Company'
        },
        knowsAbout: ['Web Development', 'JavaScript', 'Vue.js', 'Nuxt.js', 'TypeScript'],
        sameAs: [
          'https://github.com/your-username',
          'https://twitter.com/your-username',
          'https://linkedin.com/in/your-username'
        ]
      }

    case 'organization':
      return {
        ...baseData,
        '@type': 'Organization',
        logo: `${baseUrl}/logo.png`,
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          email: 'contact@your-domain.com'
        }
      }

    default:
      return baseData
  }
})

function getSchemaType(type: string): string {
  const typeMap: Record<string, string> = {
    website: 'WebSite',
    article: 'Article',
    blog: 'BlogPosting',
    person: 'Person',
    organization: 'Organization'
  }
  return typeMap[type] || 'WebSite'
}

function calculateWordCount(): number {
  // 这里可以根据实际内容计算字数
  // 暂时返回一个估算值
  return props.description ? props.description.length : 500
}

// 生成面包屑导航结构化数据
const _breadcrumbData = computed(() => {
  const pathSegments = route.path.split('/').filter(Boolean)
  if (pathSegments.length === 0) return null

  const breadcrumbList = pathSegments.map((segment, index) => {
    const path = '/' + pathSegments.slice(0, index + 1).join('/')
    return {
      '@type': 'ListItem',
      position: index + 2, // +2 because home is position 1
      name: segment.charAt(0).toUpperCase() + segment.slice(1),
      item: `${baseUrl}${path}`
    }
  })

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl
      },
      ...breadcrumbList
    ]
  }
})
</script>