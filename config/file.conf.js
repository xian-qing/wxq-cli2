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
}