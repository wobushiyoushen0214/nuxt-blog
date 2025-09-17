/*
 * @Author: LiZhiWei
 * @Date: 2025-09-16 11:05:00
 * @LastEditors: LiZhiWei
 * @LastEditTime: 2025-09-17 14:39:00
 * @Description: 
 */
export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const searchTerm = query.q as string

  if (!searchTerm || searchTerm.trim().length < 2) {
    return {
      data: [],
      total: 0
    }
  }

  try {
    // 从数据库获取所有博客内容
    const blogs = await queryCollection('content').where('path', 'LIKE', '/blogs/%').all()
    
    // 搜索逻辑
    const searchResults = blogs.filter((blog) => {
      const blogData = blog as unknown as Record<string, unknown>
      const searchableText = [
        blog.title,
        blog.description,
        typeof blogData.category === 'string' ? blogData.category : '',
        extractTextFromBody(blog.body)
      ].join(' ').toLowerCase()
      
      return searchableText.includes(searchTerm.toLowerCase())
    })

    // 按相关性排序（简单的匹配度计算）
    const sortedResults = searchResults
      .map((blog) => {
        const titleMatch = blog.title?.toLowerCase().includes(searchTerm.toLowerCase()) ? 10 : 0
        const descriptionMatch = blog.description?.toLowerCase().includes(searchTerm.toLowerCase()) ? 5 : 0
        const bodyMatch = extractTextFromBody(blog.body)?.toLowerCase().includes(searchTerm.toLowerCase()) ? 1 : 0
        
        return {
          ...blog,
          relevanceScore: titleMatch + descriptionMatch + bodyMatch
        }
      })
      .sort((a, b) => b.relevanceScore - a.relevanceScore)
      .slice(0, 10) // 限制返回结果数量

    return {
      data: sortedResults,
      total: sortedResults.length,
      query: searchTerm
    }
  } catch (error) {
    console.error('搜索错误:', error)
    throw createError({
      statusCode: 500,
      statusMessage: '搜索服务暂时不可用'
    })
  }
})

// 从内容体中提取纯文本
function extractTextFromBody(body: unknown): string {
  if (!body) return ''
  
  const extractText = (node: unknown): string => {
    if (typeof node === 'string') return node
    if (Array.isArray(node)) {
      return node.map(extractText).join(' ')
    }
    if (node && typeof node === 'object') {
      const obj = node as Record<string, unknown>
      if (obj.type === 'text' && typeof obj.value === 'string') {
        return obj.value
      }
      if (obj.children) {
        return extractText(obj.children)
      }
      if (obj.value && typeof obj.value === 'string') {
        return obj.value
      }
    }
    return ''
  }
  
  return extractText(body)
}