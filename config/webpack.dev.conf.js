const webpack = require('webpack')
const opn = require('opn')
const merge = require('webpack-merge')
const path = require('path')
const APP_PATH = path.join(__dirname, '..');
const baseWebpackConfig = require('./webapck.base.conf')
const {srcPages,buildDir,rewrites,proxy} = require('./file.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin');
//var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

process.env.BABEL_ENV = 'development'

let getEntry = () => {
    let entry = {}
    Object.keys(srcPages).forEach((v=>{
        entry[v] = [path.join(APP_PATH, `src/${v}/index.js`), 'webpack-dev-server/client?http://localhost:8080/',]
    }))
    return entry
}

let htmlPlugin= ()=>{
    let htmlPlugin = []
    Object.keys(srcPages).forEach((v=>{
        htmlPlugin.push(
            new HtmlWebpackPlugin({
                filename: `${v}.html`,
                template: path.join(APP_PATH, `src/${v}/${v}.html`),
                inject: 'body',
                showErrors: true,
                chunks: [`${v}`], //需要引入的chunk，不配置就会引入所有页面的资源
            }),
        )
    }))
    return htmlPlugin
}

let config = merge(baseWebpackConfig,{
    //开发环境配置
    entry:getEntry(),
    mode:'development',
    devtool: 'source-map',
    output:{
        path:path.resolve(buildDir),
        filename:"js/[name].js",
        chunkFilename:"js/[name].js",
        publicPath:'/',
        hotUpdateChunkFilename: 'hot/hot-update.js',  //指定热替换补丁js文件和
        hotUpdateMainFilename: 'hot/hot-update.json', //json描述文件生成路径 ，每次文件变化都会生成一次
    },
    module:{
        rules:[
            {   test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader', options: {
                            sourceMap: true, modules: true,
                            importLoaders: 2,
                            //localIdentName: '[local]_[hash:base64:5]'
                            localIdentName: '[local]'
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: {
                                path: 'postcss.config.js'
                            }
                        }
                    },
                    {
                        loader: 'sass-loader', options: {sourceMap: true}
                    }
                ]
            },
        ]
    },
    plugins:[
        //热更新
        new webpack.HotModuleReplacementPlugin({}),
        ...htmlPlugin()
    ],
    devServer:{
        host:'0.0.0.0',
        port:8080,
        hotOnly: true,
        hot:true,
        inline:true,
        noInfo:true,
        compress: true,
        quiet:true,
        historyApiFallback:{
            rewrites:rewrites
        },
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
        proxy:proxy,
        before(app){
            // app.get('/some/path', function(req, res) {
            //     res.json({ custom: 'response' });
            // });
        },
        after(){
            console.log(`打开浏览器：http://localhost:${this.port}`)
            //opn(`http://localhost:${this.port}`)
        }
    }

})
module.exports = config