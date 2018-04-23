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
//
// let task = []
//      Object.keys(srcPages).map((v)=>{
//          task.push(v)
//          gulp.task(v,function(cb){
//              console.log(`=====task==${v}==`)
//              build(v)
//          });
//      })
//
// // gulp.task("task1",function(cb){
// //     build('index')
// // });
// // gulp.task("task2",function(cb){
// //     build('shop')
// // });
// gulp.task("default",task,function(){
//     console.log("---------------default-task---------------");
// });
// gulp.start()