export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"HarmonyOS-Guide\",\"description\":\"HarmonyOS教程\",\"head\":[[\"meta\",{\"name\":\"robots\",\"content\":\"all\"}],[\"meta\",{\"name\":\"author\",\"content\":\"yuanjing\"}],[\"meta\",{\"http-equiv\":\"Cache-Control\",\"content\":\"no-cache, no-store, must-revalidate\"}],[\"meta\",{\"http-equiv\":\"Pragma\",\"content\":\"no-cache\"}],[\"meta\",{\"http-equiv\":\"Expires\",\"content\":\"0\"}],[\"meta\",{\"name\":\"keywords\",\"content\":\"鸿蒙、HarmonyOS、Guide\"}],[\"meta\",{\"name\":\"description\",\"content\":\"HarmonyOS学习教程\"}],[\"meta\",{\"name\":\"apple-mobile-web-app-capable\",\"content\":\"yes\"}],[\"script\",{},\"var _hmt = _hmt || [];\\n      (function() {\\n        var hm = document.createElement(\\\"script\\\");\\n        hm.src = \\\"https://hm.baidu.com/hm.js?69bc4a5fc599249f993c6fceff1f1339\\\";\\n        var s = document.getElementsByTagName(\\\"script\\\")[0]; \\n        s.parentNode.insertBefore(hm, s);\\n      })();\"]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
