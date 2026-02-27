import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "src",
  ignoreDeadLinks: true,
  
  title: "Helidon Documentation",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/README.md' }
    ],
    sidebar: generateSidebar({
      // VitePress Sidebar's options here...
      documentRootPath: '/docs/src',
      useTitleFromFileHeading: true,
      sortMenusByName: true,
      capitalizeEachWords: true,
      collapsed: true,
      useFolderTitleFromIndexFile: true,
    }),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/helidon-io/helidon' }
    ]
  }
})
