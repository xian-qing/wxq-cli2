const webpack = require('webpack')
const opn = require('opn')
const merge = require('webpack-merge')
const path = require('path')
const APP_PATH = path.join(__dirname, '..');
const baseWebpackConfig = require('./webapck.base.conf')
const fileConfig = require('./file.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin');
process.env.BABEL_ENV = 'production'

let config = function (page) {
    let pageDir = page||'index'
    return merge(baseWebpackConfig,{
        entry:{
            app:path.join(APP_PATH, `src/${pageDir}/index.js`),
            vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
        },
        //开发环境配置
        mode:'production',
        output:{
            path:path.resolve(fileConfig.srcPages[pageDir]),
            filename:"js/[name].js",
            chunkFilename:"js/[name].js",
            publicPath:`/static/`
        },
        plugins:[
            new HtmlWebpackPlugin({
                filename: `${pageDir}.html`,
                template: path.join(APP_PATH, `src/${pageDir}/${pageDir}.html`)
            }),

        ],
        optimization: {
            splitChunks: {
                chunks: "initial", // 必须三选一： "initial" | "all"(默认就是all) | "async"
                minSize: 0, // 最小尺寸，默认0
                minChunks: 1, // 最小 chunk ，默认1
                maxAsyncRequests: 1, // 最大异步请求数， 默认1
                maxInitialRequests : 1, // 最大初始化请求书，默认1
                //name: function(){}, // 名称，此选项可接收 function
                cacheGroups:{ // 这里开始设置缓存的 chunks
                    priority: '1', // 缓存组优先级
                    vendor: { // key 为entry中定义的 入口名称
                        chunks: "initial", // 必须三选一： "initial" | "all" | "async"(默认就是异步)
                        test: /react| react-router-dom|redux|react-dom|react-redux/, // 正则规则验证，如果符合就提取 chunk
                        name: "vendor", // 要缓存的 分隔出来的 chunk 名称
                        minSize: 0,
                        minChunks: 1,
                        enforce: true,
                        maxAsyncRequests: 1, // 最大异步请求数， 默认1
                        maxInitialRequests : 1, // 最大初始化请求书，默认1
                        reuseExistingChunk: true // 可设置是否重用该chunk（查看源码没有发现默认值）
                    }
                }
            }
        },
    })
}
module.exports = config