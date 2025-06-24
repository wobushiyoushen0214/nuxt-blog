export const navbarData = {
  homeTitle: "Li's Blog",
}

export const footerData = {
  author: 'Li',
  aboutAuthor:
    '你好！我是Li，一名技术爱好者、问题解决者和软件工程师。',
  authorInterest:
    "我在 Javascript、Typescript、VueJs 和 Nuxt 方面有丰富的知识。如果你有有趣的想法，无论是开源项目还是付费项目，让我们联系吧。",
  aboutTheSite:
    "这是一个使用 Nuxt3、TailwindCSS、NuxtContent、Nuxt Icon 构建的个人博客网站。目前部署在 Vercel 上。",
}

export const homePage = {
  title: '欢迎来到我的博客',
  description:
    '获取 Web 开发、Javascript、Typescript、NodeJs、Vue 和 Nuxt 相关的文章、技巧、学习资源等。',
}

export const blogsPage = {
  title: '所有博客',
  description: '在这里你可以找到我在这个网站上写的和发布的所有博客文章。',
}

export const categoryPage = {
  title: '分类',
  description:
    '以下分类是从不同博客文章中提到的所有标签生成的',
}

export const aboutPage = {
  title: 'Li',
  description: '软件工程师，问题解决者，Web 技术爱好者。',
  aboutMe:
    "你好，朋友！我是Li，一名软件工程师，热爱编程和技术。我专注于前端开发，特别是 Vue.js 和 Nuxt.js 生态系统。当我不在编写代码时，你可以发现我在学习新技术或者解决有趣的编程问题。我相信技术可以让世界变得更美好！",
}

export const seoData = {
  title: `Li's Blog | Li博客`,
  ogTitle: `学习 Javascript、Typescript、Vue、Nuxt 和问题解决 - Li's Blog`,
  description: `你好，我是Li。一名软件工程师，专注于前端开发和 Web 技术。`,
  twitterDescription: `Li的博客，在这里我分享 Nuxt、Vue 等技术内容，展示我的博客、资源等`,
  image:
    'https://res.cloudinary.com/dmecmyphj/image/upload/v1673548905/nuxt-blog/cover_ntgs6u.webp',
  mySite: 'https://li-blog.vercel.app',
  twitterHandle: '@li',
  mailAddress: 'li@example.com',
}

export const socialLinks = {
  githubLink: 'https://github.com/wobushiyoushen0214',
  linkedinLink: '',
  twitterLink: '',
  stackoverflowLink: '',
}

export const siteMetaData = [
  {
    name: 'description',
    content: seoData.description,
  },
  // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
  { property: 'og:site_name', content: seoData.mySite },
  { property: 'og:type', content: 'website' },
  {
    property: 'og:url',
    content: seoData.mySite,
  },
  {
    property: 'og:title',
    content: seoData.ogTitle,
  },
  {
    property: 'og:description',
    content: seoData.description,
  },
  {
    property: 'og:image',
    content: seoData.image,
  },
  // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
  { name: 'twitter:site', content: seoData.twitterHandle },
  { name: 'twitter:card', content: 'summary_large_image' },
  {
    name: 'twitter:url',
    content: seoData.mySite,
  },
  {
    name: 'twitter:title',
    content: seoData.ogTitle,
  },
  {
    name: 'twitter:description',
    content: seoData.twitterDescription,
  },
  {
    name: 'twitter:image',
    content: seoData.image,
  },
]
