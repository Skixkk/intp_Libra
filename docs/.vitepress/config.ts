/*
 * @Author: Skixkk <166358870+Skixkk@users.noreply.github.com>
 * @Date: 2026-10-19 20:53:52
 * @LastEditors: Skixkk <166358870+Skixkk@users.noreply.github.com>
 * @LastEditTime: 2026-11-06 23:22:52
 * @FilePath: \intp_Libra\docs\.vitepress\config.ts
 * @Description: config
 */
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
          { text: 'mbti', link: '/mbti' },
          { text: 'Libra', link: '/Libra' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Skixkk/intp_Libra' }
    ]
  }
})
