import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  { text: "学习教程", icon: "book", link: "/home.md" },
  {
    text: "编程学习手册",
    icon: "book",
    link: "https://book.somecore.cn",
  },
  // "/",
  // "/portfolio",
  // "/demo/",
  {
    text: "指南",
    icon: "lightbulb",
    prefix: "/guide/",
    children: [
      {
        text: "Bar",
        icon: "lightbulb",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "Foo",
        icon: "lightbulb",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
      },
    ],
  },

]);
