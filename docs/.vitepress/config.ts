/*
 * @Author: Skixkk <166358870+Skixkk@users.noreply.github.com>
 * @Date: 2026-10-19 20:53:52
 * @LastEditors: Skixkk <166358870+Skixkk@users.noreply.github.com>
 * @LastEditTime: 2026-11-15 18:09:41
 * @FilePath: \intp_Libra\docs\.vitepress\config.ts
 * @Description: config
 */
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/intp_Libra/',
  lang: 'en-US',

  title: "intp Libra",
  description: "intp&Libra",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
      lastUpdated: {
        text: 'Updated at',
        formatOptions: {
          dateStyle: 'full',
          timeStyle: 'medium'
        }
      },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'MBTI', link: '/mbti' }
    ],
    // 网站标题
    siteTitle: 'intp Libra',

    sidebar: [
      {
        // text: 'mbti',
        items: [
          { text: 'mbti', link: '/mbti' },
          { text: 'Libra', link: '/Libra' },
          { text: 'Finance', link: '/finance' },
          { text: 'Company', link: '/company' },
          { text: 'Life', link: '/life' },
          { text: 'Work', link: '/work' },
          { text: 'myself', link: '/myself' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Skixkk/intp_Libra' }
    ],
          
    // 在 github 上编辑页面的链接 定义根路径 + docs/ 下的 route，即可实现访问
    editLink: {
      pattern: 'https://github.com/Skixkk/intp_Libra/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },


    footer: {
      copyright: 'Open source · <a href="https://github.com/Skixkk/intp_Libra/blob/main/LICENSE">MIT</a> · © 2026 <a href="https://github.com/Skixkk/intp_Libra">Skixkk</a>. All rights reserved.'
    }
  },
  markdown: {
    // 可选：开启代码块语法提示
    codeTransformers: []
  }
})
