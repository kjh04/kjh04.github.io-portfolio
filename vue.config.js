module.exports = {
  // publicPath: '/kjh04.github.io-portfolio/',
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: process.env.NODE_ENV === 'production'
    ? '/kjh04.github.io-portfolio/'
    : '/'
}