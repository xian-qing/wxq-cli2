module.exports = {
    isProEnv:process.env.NODE_ENV=="production"?true:false,
    buildDir: 'dist/',
    srcPages: {
        index: "dist/index",
        shop: "dist/shop"
    },
    rewrites: [
        {from: /^\/index/, to: '/index.html'},
        {from: /^\/shop/, to: '/shop.html'},
    ],
    proxy: { // 代理
        '/apiv2/': {
            target: 'http://test.api.v2.jggvip.com',
            changeOrigin: true,
            //secure: false
        },
        '/hook/': {
            target: 'http://h5.xintiaotime.com',
            changeOrigin: true,
            //secure: false
        }
    },
}