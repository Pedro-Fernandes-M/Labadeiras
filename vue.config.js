module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/Labadeiras/'
      : '/',
    outputDir: 'dist',
    transpileDependencies: true,
  chainWebpack: config => {
    config.plugin('define').tap(args => {
      args[0]['__VUE_PROD_HYDRATION_MISMATCH_DETAILS__'] = JSON.stringify(false);
      return args;
    });
  }
  }