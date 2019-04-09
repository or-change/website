module.exports = {
  mode: 'universal',
  head: {
    title: 'Lemonce',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#fff' },
  css: [
    {src: '@fortawesome/fontawesome-free/css/all.min.css'}
  ],
  plugins: [
    '~/plugins/i18n.js',
    '~/plugins/register.js',
    '~/plugins/connect.js'
  ],
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios'
  ],
  build: {
    extend(config, ctx) {

    }
  },
  router: {
    // middleware: will be called for every route change
  },
  // srcDir: default equal with rootDir
  axios: {
    proxy: true,
    prefix: '/api',
    credentials: true
  },
  proxy: {
    '/api/': {
      target: 'http://127.0.0.1:8080',
      changeOrigin: true
    }
  }
}
