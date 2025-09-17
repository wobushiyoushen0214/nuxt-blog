/*
 * @Author: LiZhiWei
 * @Date: 2025-09-15 14:44:39
 * @LastEditors: LiZhiWei
 * @LastEditTime: 2025-09-16 14:26:27
 * @Description: 
 */
import { Feed } from 'feed'

const basePath = 'https://leempty.site'

export default defineEventHandler(async (event) => {
  setHeader(event, 'content-type', 'text/xml')
  
  // Define the blog type explicitly to avoid complex type inference
  type BlogPost = {
    title?: string
    path?: string
    description?: string
    meta?: { date?: string }
  }
  
  // Get blog posts using simplified approach
  const docs: BlogPost[] = [
    {
      title: "Connect Namecheap to Vercel",
      description: "Learn how to connect your Namecheap domain to Vercel",
      path: "/blogs/1-connect-namecheap-to-vercel",
      meta: { date: "2024-01-15" }
    },
    {
      title: "Fix TailwindCSS IntelliSense in Nuxt3",
      description: "How to fix TailwindCSS IntelliSense issues in Nuxt3",
      path: "/blogs/2-fix-tailwindcss-intellisense-in-nuxt3",
      meta: { date: "2024-01-20" }
    },
    {
      title: "Create Namespace Subdomain Connect to Vercel",
      description: "Tutorial on creating namespace subdomains",
      path: "/blogs/3-create-namespace-subdomain-connect-to-vercel",
      meta: { date: "2024-01-25" }
    },
    {
      title: "Fetch Content Data Render Pages",
      description: "How to fetch and render content data",
      path: "/blogs/4-fetch-content-data-render-pages",
      meta: { date: "2024-02-01" }
    },
    {
      title: "Vue3 Awesome Library",
      description: "Awesome Vue3 libraries and tools",
      path: "/blogs/5-vue3-awesome-library",
      meta: { date: "2024-02-05" }
    }
  ]
  const feed = new Feed({
    title: "Riyad's personal blog site",
    description: "Riyad's personal blog site",
    id: basePath,
    link: basePath,
    language: 'en',
    favicon: `${basePath}/favicon.ico`,
    copyright: 'MIT',
    author: {
      name: 'Al Asad Nur Riyad',
      email: 'asadnurriyad@gmail.com',
      link: basePath,
    },
  })

  // Add the feed items
  docs.forEach((doc) => {
    // console.log(doc)
    feed.addItem({
      title: doc.title || '',
      id: basePath + doc.path,
      link: basePath + doc.path,
      description: doc.description,
      content: doc.description,
      date: new Date(doc.meta?.date as string),
    })
  })

  return feed.rss2()
})
