module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/' + process.env.VUE_APP_CI_PROJECT_NAME + '/'
      : '/',
    outputDir: 'dist',
  }