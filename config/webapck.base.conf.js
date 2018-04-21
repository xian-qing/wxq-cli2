const path = require('path');
const webpack = require('webpack');
const APP_PATH = path.join(__dirname, '..');


const config = {
    module: {
        rules: [
            {
                test: /\.(js|jsX)$/,
                use: [
                    {
                        loader: require.resolve('babel-loader'),
                        options: {
                            cacheDirectory: true,
                            highlightCode: true,
                            compact: process.env.NODE_ENV !== 'development',
                            plugins: ['react-hot-loader/babel'],
                        }
                    }
                ],

                include: path.join(APP_PATH, 'src')
            },
            {   test: /\.css$/,
                use: ['style-loader', 'css-loader']
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
                            importLoaders: 1,
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
            {
                test: /\.(png|jp?g|gif|svg|svga|eot|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'url-loader', options: {limit: 8192, name: 'image/[name].[ext]',}
                    }
                ]
            },
        ]
    },
    resolve: {
        //extensions:['.js','.json',".jsx",".css",'.scss'],
        alias: {
            src: path.join(APP_PATH, 'src'),
            components: path.join(APP_PATH, 'src/index/components'),
            reducers: path.join(APP_PATH, 'src/index/redux/reducers'),
            common: path.join(APP_PATH, 'src/index/common'),
            styles: path.join(APP_PATH, 'src/index/styles')
        }
    },
    plugins: [],
}
module.exports = config;