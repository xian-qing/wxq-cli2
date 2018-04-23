const webpack = require('webpack');
const webpackProConf = require('./webpack.pro.conf');
let {srcPages} = require('./file.conf')
const gulp = require("gulp");

function build (page) {
    return new Promise((resolve, reject) => {
        webpack(webpackProConf(page), (err, stats) => {
            process.stdout.write(stats.toString({
                colors: true,
                // modules: false,
                // children: false,
                // chunks: true,
                // chunkModules: true,
                progress: true
            }))
            if(stats.endTime){
                resolve()
            }
            if(err){
                reject(err)
            }
        });

    })
}




Promise.all(
    Object.keys(srcPages).map((v)=>{
        return build(v)
    })
).then((msg) => {
    console.log('\n build complete ')
}).catch((err) => {
    console.log("\n wxq-cli error "+err)
})
// gulp.task("task1",function(cb){
//     build('index')
//     console.log(1111111111111)
// });
// gulp.task("task2",["task1"],function(cb){
//     build('shop')
//     console.log(2222222222222)
// });
// gulp.task("default",["task1","task2"],function(){
//
//     console.log("---------------default-task---------------");
// });
// gulp.start()