import { defineClientConfig } from "vuepress/client";
import CodeTabs from "/Users/yanwei/Downloads/源境/HarmonyOS-Guide/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.43_markdown-it@14.1.0_vuepress@2.0.0-rc.9_@vuepress+bundl_ezylcye3prb7dwfqx4nfhkurva/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "/Users/yanwei/Downloads/源境/HarmonyOS-Guide/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.28_vuepress@2.0.0-rc.9_@vuepress+bundler-vite@2.0.0-rc.9_@types+nod_uz237khzwmoisc4kkq67643q3a/node_modules/@vuepress/helper/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "/Users/yanwei/Downloads/源境/HarmonyOS-Guide/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.43_markdown-it@14.1.0_vuepress@2.0.0-rc.9_@vuepress+bundl_ezylcye3prb7dwfqx4nfhkurva/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import CodeDemo from "/Users/yanwei/Downloads/源境/HarmonyOS-Guide/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.43_markdown-it@14.1.0_vuepress@2.0.0-rc.9_@vuepress+bundl_ezylcye3prb7dwfqx4nfhkurva/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "/Users/yanwei/Downloads/源境/HarmonyOS-Guide/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.43_markdown-it@14.1.0_vuepress@2.0.0-rc.9_@vuepress+bundl_ezylcye3prb7dwfqx4nfhkurva/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import "/Users/yanwei/Downloads/源境/HarmonyOS-Guide/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.43_markdown-it@14.1.0_vuepress@2.0.0-rc.9_@vuepress+bundl_ezylcye3prb7dwfqx4nfhkurva/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import { useHintContainers } from "/Users/yanwei/Downloads/源境/HarmonyOS-Guide/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.43_markdown-it@14.1.0_vuepress@2.0.0-rc.9_@vuepress+bundl_ezylcye3prb7dwfqx4nfhkurva/node_modules/vuepress-plugin-md-enhance/lib/client/composables/useHintContainers.js";
import "/Users/yanwei/Downloads/源境/HarmonyOS-Guide/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.43_markdown-it@14.1.0_vuepress@2.0.0-rc.9_@vuepress+bundl_ezylcye3prb7dwfqx4nfhkurva/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";
import Tabs from "/Users/yanwei/Downloads/源境/HarmonyOS-Guide/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.43_markdown-it@14.1.0_vuepress@2.0.0-rc.9_@vuepress+bundl_ezylcye3prb7dwfqx4nfhkurva/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "/Users/yanwei/Downloads/源境/HarmonyOS-Guide/node_modules/.pnpm/@mdit+plugin-spoiler@0.10.1_markdown-it@14.1.0/node_modules/@mdit/plugin-spoiler/spoiler.css";
import "/Users/yanwei/Downloads/源境/HarmonyOS-Guide/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.43_markdown-it@14.1.0_vuepress@2.0.0-rc.9_@vuepress+bundl_ezylcye3prb7dwfqx4nfhkurva/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
    app.component("Tabs", Tabs);
  },
  setup: () => {
useHintContainers();
  }
});
