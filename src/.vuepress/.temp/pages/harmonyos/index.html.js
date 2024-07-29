import comp from "/Users/yanwei/Downloads/源境/HarmonyOS-Guide/src/.vuepress/.temp/pages/harmonyos/index.html.vue"
const data = JSON.parse("{\"path\":\"/harmonyos/\",\"title\":\"Harmonyos\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Harmonyos\",\"article\":false,\"feed\":false,\"sitemap\":false,\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/harmonyos/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"HarmonyOS-Guide\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Harmonyos\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"yanwei\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"Harmonyos\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
