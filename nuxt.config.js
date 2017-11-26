module.exports = {
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Ubuntu|Ubuntu+Condensed|Ubuntu+Mono',
      },
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ]
  },
  css: [
    { src: 'prismjs/themes/prism.css', lang: 'css'},
    { src: '@/css/bulma.scss', lang: 'scss'},
    { src: '@/css/app.scss', lang: 'scss'},
  ],
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  },
  plugins: [
    '~plugins/markdown',
    '~plugins/global',
    '~plugins/prism',
  ]
}
