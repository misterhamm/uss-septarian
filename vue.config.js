module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    https: true
  },
  publicPath: process.env.NODE_ENV === 'production'
  ? '/uss-septarian/'
  : '/'
}
