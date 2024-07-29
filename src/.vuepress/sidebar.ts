import { sidebar } from "vuepress-theme-hope";

export default sidebar({
   // 应该把更精确的路径放置在前边
   "/zhuanlan/": [
     "back-end-interview-high-frequency-system-design-and-scenario-questions",
     "handwritten-rpc-framework",
     "source-code-reading",
   ],
   // 必须放在最后面
   "/": [
     {
       text: "入门 HarmonyOS",
       icon: "star",
       collapsible: true,
       prefix: "harmonyos/",
       children: ["intro","development-environment-dajian"],
     },
     {
       text: "第一个鸿蒙应用",
       icon: "star",
       collapsible: true,
       prefix: "harmonyos/",
       children: [
         "development-environment-dajian"
       ],
     },
     {
      text: "ArkTS语言",
      icon: "star",
      collapsible: true,
      prefix: "harmonyos/",
      children: [
        "development-environment-dajian"
      ],
    },
    {
      text: "基础组件",
      icon: "star",
      collapsible: true,
      prefix: "harmonyos/",
      children: [
        "development-environment-dajian"
      ],
    },
    {
      text: "基础组件",
      icon: "star",
      collapsible: true,
      prefix: "harmonyos/",
      children: [
        "development-environment-dajian"
      ],
    },
    {
      text: "高级组件",
      icon: "star",
      collapsible: true,
      prefix: "harmonyos/",
      children: [
        "development-environment-dajian"
      ],
    },
    {
      text: "自定义组件和动画",
      icon: "star",
      collapsible: true,
      prefix: "harmonyos/",
      children: [
        "development-environment-dajian"
      ],
    },
    {
      text: "路由和状态管理",
      icon: "star",
      collapsible: true,
      prefix: "harmonyos/",
      children: [
        "development-environment-dajian"
      ],
    },
    {
      text: "网络和持久化存储",
      icon: "star",
      collapsible: true,
      prefix: "harmonyos/",
      children: [
        "development-environment-dajian"
      ],
    },
    {
      text: "原子化服务和卡片",
      icon: "star",
      collapsible: true,
      prefix: "harmonyos/",
      children: [
        "development-environment-dajian"
      ],
    },
    {
      text: "一个完整的鸿蒙应用",
      icon: "star",
      collapsible: true,
      prefix: "harmonyos/",
      children: [
        "development-environment-dajian"
      ],
    },
    ]
});
