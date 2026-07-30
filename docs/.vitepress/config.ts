import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Learn Bob',
  description: 'A structured course on getting the most out of IBM Bob.',
  base: '/learn-bob/',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/learn-bob/favicon.svg' }],
  ],

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Chapter 1', link: '/chapter-01/' },
    ],

    sidebar: [
      {
        text: 'Chapter 1 — Getting Started',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/chapter-01/' },
          { text: 'Lesson 1', link: '/chapter-01/lesson-01' },
          { text: 'Lesson 2', link: '/chapter-01/lesson-02' },
        ],
      },
      {
        text: 'Chapter 2 — Going Deeper',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/chapter-02/' },
          { text: 'Lesson 1', link: '/chapter-02/lesson-01' },
          { text: 'Lesson 2', link: '/chapter-02/lesson-02' },
        ],
      },
      {
        text: 'Reference',
        items: [
          { text: 'Code Examples', link: '/code-examples' },
        ],
      },
    ],

    socialLinks: [],
  },

  markdown: {
    theme: 'github-dark',
  },
})
