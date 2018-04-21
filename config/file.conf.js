module.exports = {
    buildDir: 'dist/index',
    srcPages: {
        index: "dist/index",
        shop: "dist/shop"
    },
    rewrites: [
        {from: /\/index.html/, to: '/index.html'},
        {from: /\/shop.html/, to: '/shop.html'},
    ],
    proxy: { // 代理
        '/apiv2/': {
            target: 'http://test.api.v2.jggvip.com',
            changeOrigin: true,
            //secure: false
        }
    },
}