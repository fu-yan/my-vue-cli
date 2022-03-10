const { merge } = require('webpack-merge')
const base = require('./webpack.base.js')
const path = require('path')

module.exports = merge(base,{
  mode: 'development',
  devServer: {
    static: [
      path.resolve(__dirname, 'dist'),
      path.resolve(__dirname, 'public')
    ],
    host: '127.0.0.1',
    port: 8000,
    open: true,  //默认自动打开浏览器
  }
})
