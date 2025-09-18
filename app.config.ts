export default defineAppConfig({
  nuxtIcon: {
    size: '1em', // 默认图标大小
    class: '', // 默认CSS类
    aliases: {}, // 图标别名
    iconifyApiOptions: {
      url: 'https://api.iconify.design',
      publicApiFallback: true
    }
  }
})