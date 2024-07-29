export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/README%20copy.html", { loader: () => import(/* webpackChunkName: "README copy.html" */"/Users/yanwei/Downloads/源境/HarmonyOS-Guide/src/.vuepress/.temp/pages/README copy.html.js"), meta: {"t":"主页","i":"home"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/yanwei/Downloads/源境/HarmonyOS-Guide/src/.vuepress/.temp/pages/index.html.js"), meta: {"t":"主页","i":"home"} }],
  ["/home.html", { loader: () => import(/* webpackChunkName: "home.html" */"/Users/yanwei/Downloads/源境/HarmonyOS-Guide/src/.vuepress/.temp/pages/home.html.js"), meta: {"t":"HarmonyGuide","i":"star"} }],
  ["/portfolio.html", { loader: () => import(/* webpackChunkName: "portfolio.html" */"/Users/yanwei/Downloads/源境/HarmonyOS-Guide/src/.vuepress/.temp/pages/portfolio.html.js"), meta: {"t":"关于我们","i":"home"} }],
  ["/demo/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/yanwei/Downloads/源境/HarmonyOS-Guide/src/.vuepress/.temp/pages/demo/index.html.js"), meta: {"t":"学习教程","i":"laptop-code"} }],
  ["/demo/disable.html", { loader: () => import(/* webpackChunkName: "disable.html" */"/Users/yanwei/Downloads/源境/HarmonyOS-Guide/src/.vuepress/.temp/pages/demo/disable.html.js"), meta: {"t":"布局与功能禁用","i":"gears","O":4} }],
  ["/demo/encrypt.html", { loader: () => import(/* webpackChunkName: "encrypt.html" */"/Users/yanwei/Downloads/源境/HarmonyOS-Guide/src/.vuepress/.temp/pages/demo/encrypt.html.js"), meta: {"t":"密码加密的文章","i":"lock"} }],
  ["/demo/layout.html", { loader: () => import(/* webpackChunkName: "layout.html" */"/Users/yanwei/Downloads/源境/HarmonyOS-Guide/src/.vuepress/.temp/pages/demo/layout.html.js"), meta: {"t":"布局","i":"object-group","O":2} }],
  ["/demo/markdown.html", { loader: () => import(/* webpackChunkName: "markdown.html" */"/Users/yanwei/Downloads/源境/HarmonyOS-Guide/src/.vuepress/.temp/pages/demo/markdown.html.js"), meta: {"t":"Markdown 展示","i":"fab fa-markdown","O":2} }],
  ["/demo/page.html", { loader: () => import(/* webpackChunkName: "page.html" */"/Users/yanwei/Downloads/源境/HarmonyOS-Guide/src/.vuepress/.temp/pages/demo/page.html.js"), meta: {"t":"页面配置","i":"file","O":3} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/yanwei/Downloads/源境/HarmonyOS-Guide/src/.vuepress/.temp/pages/guide/index.html.js"), meta: {"t":"指南","i":"lightbulb"} }],
  ["/harmonyos/development-environment-dajian.html", { loader: () => import(/* webpackChunkName: "development-environment-dajian.html" */"/Users/yanwei/Downloads/源境/HarmonyOS-Guide/src/.vuepress/.temp/pages/harmonyos/development-environment-dajian.html.js"), meta: {"t":"开发环境搭建","i":"book"} }],
  ["/harmonyos/intro.html", { loader: () => import(/* webpackChunkName: "intro.html" */"/Users/yanwei/Downloads/源境/HarmonyOS-Guide/src/.vuepress/.temp/pages/harmonyos/intro.html.js"), meta: {"t":"介绍","i":"book"} }],
  ["/guide/bar/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/yanwei/Downloads/源境/HarmonyOS-Guide/src/.vuepress/.temp/pages/guide/bar/index.html.js"), meta: {"t":"Bar 功能","i":"lightbulb"} }],
  ["/guide/bar/baz.html", { loader: () => import(/* webpackChunkName: "baz.html" */"/Users/yanwei/Downloads/源境/HarmonyOS-Guide/src/.vuepress/.temp/pages/guide/bar/baz.html.js"), meta: {"t":"Baz","i":"circle-info"} }],
  ["/guide/foo/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/yanwei/Downloads/源境/HarmonyOS-Guide/src/.vuepress/.temp/pages/guide/foo/index.html.js"), meta: {"t":"Foo 功能","i":"lightbulb"} }],
  ["/guide/foo/ray.html", { loader: () => import(/* webpackChunkName: "ray.html" */"/Users/yanwei/Downloads/源境/HarmonyOS-Guide/src/.vuepress/.temp/pages/guide/foo/ray.html.js"), meta: {"t":"Ray","i":"circle-info"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/yanwei/Downloads/源境/HarmonyOS-Guide/src/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
  ["/harmonyos/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/yanwei/Downloads/源境/HarmonyOS-Guide/src/.vuepress/.temp/pages/harmonyos/index.html.js"), meta: {"t":"Harmonyos"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
