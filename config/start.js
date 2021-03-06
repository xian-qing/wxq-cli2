const express = require('express');
const app = express();
const path = require('path');
const APP_PATH = path.join(__dirname, '..');
const proxy = require('http-proxy-middleware');

app.use('/index/',express.static(path.join(APP_PATH,'./dist/index/')));
app.use('/shop/',express.static(path.join(APP_PATH,'./dist/shop/shop.html')));
app.use('/index-static',express.static(path.join(APP_PATH,'./dist/index')));
app.use('/shop-static',express.static(path.join(APP_PATH,'./dist/shop')));
app.use('/static',express.static(path.join(APP_PATH,'./dist/static')));

app.use('/api', proxy({ target: 'http://119.28.34.31', changeOrigin: true }));
app.use('/graphql', proxy({ target: 'http://119.28.183.86', changeOrigin: true }));
app.use('/hook', proxy({ target: 'http://h5.xintiaotime.com', changeOrigin: true }));


app.get('/index/*', function(req, response){
    response.sendFile(path.resolve(APP_PATH,'./dist/index/index.html'))
});
app.get('/shop/*', function(req, response){
    response.sendFile(path.resolve(APP_PATH,'./dist/shop/shop.html'))
});
app.listen(8080,()=>{
    console.log("server running ");
});