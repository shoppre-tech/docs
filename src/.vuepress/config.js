const { description } = require('../../package')

module.exports = {
  base: '/docs/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Shoppre Wikipedia',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Who We Are',
        link: '/guide/',
      },
      {
        text: 'What We Do',
        link: '/config/'
      },
      {
        text: 'Our Workplace',
        link: 'https://v1.vuepress.vuejs.org'
      },
      {
        text: 'Our Impact',
        link: 'https://v1.vuepress.vuejs.org'
      },
      {
        text: 'Our Plance',
        link: 'https://v1.vuepress.vuejs.org'
      },
      {
        text: 'Follow Us',
        link: 'https://v1.vuepress.vuejs.org'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    'vuepress-plugin-auto-sidebar',
    'vuepress-plugin-right-anchor',
    'fulltext-search',
    ['git-log', {
      additionalArgs: '--no-merge',
      onlyFirstAndLastCommit: true,
    }],
    'vuepress-plugin-element-tabs',
    ['vuepress-plugin-reading-time', {
      excludes: ['/about', '/tag/.*']
    }],
      [ 'disqus', {
          api_key: 'A20fovzQTDTVRntkAFuSRpb79uwIU0EN0RQWxE2its5N5LgTGdySn8z665jU3RC5'
      }]
  ]
}
