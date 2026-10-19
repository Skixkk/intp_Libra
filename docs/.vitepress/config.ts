import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/intp_Libra/',

  title: "intp Libra",
  description: "intp&Libra",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'MBTI', link: '/mbti' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/mbti' },
          { text: 'Libra', link: '/Libra' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Skixkk/intp_Libra' }
    ]
  }
})
