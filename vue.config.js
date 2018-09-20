
module.exports = {
  chainWebpack: (config) => {
    /**
    * 解决issue：https://github.com/vuejs/vue-cli/issues/1669
    */
    config.plugin('html').tap((args) => {
      args[0].chunksSortMode = 'none'
      return args
    })
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('raw-loader')
      .loader('raw-loader')
      .end()
  }
}
