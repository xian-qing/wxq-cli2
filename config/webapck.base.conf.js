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
        }
    },
    plugins: [

    ],
}
module.exports = config;