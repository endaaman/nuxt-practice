module.exports = {
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Barlow+Condensed|Monoton|Poiret+One|Ubuntu|Ubuntu+Condensed',
      },
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Meta description' }
    ]
  },
  css: [
    '@/css/bulma.scss',
    '@/css/app.scss',
  ],
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  },
  build: {
    vendor: [
      'axios',
      'vue-markdown'
    ]
  },
  plugins: [
    '~plugins/markdown',
    '~plugins/global',
  ]
}
