const path = require('path')
const resolve = dir => path.join(__dirname, dir)
module.exports = {
  chainWebpack:(config)=>{
    config.resolve.alias
    .set('@', resolve('src'))
    .set('assets', resolve('src/assets'))
    .set('api', resolve('src/api'))
    .set('views', resolve('src/views'))
    .set('components', resolve('src/components'))
    //set第一个参数：设置的别名，第二个参数：设置的路径　
    
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        extract:false,
        symbolId: 'icon-[name]'
      })
      .end()
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
  }


  
}