var http = require("http");
var fs = require("fs");

var server = http.createServer(function (req, res) {
    //不处理收藏夹小图标
    if(req.url == "/favicon.ico") return;

    //遍历album里面的文件、文件夹
    fs.readdir("../nodedemo/album",function (err, files) {
        //files是一个存放文件（夹）名的数组
        //创建需要用的存放文件夹名的数组
        var wenjianjia = [];

        //强行将异步变为同步
        //设置立即执行函数
        // fs.stat("../nodedemo/album",function (err,stats) {
        //     console.log(stats);
        // })
        (function iterator(i) {
            //迭代器就是强行将异步函数变为同步函数

            //遍历结束
            if(i == files.length ) {
                console.log(wenjianjia);
                return;
            }
            fs.stat("../nodedemo/album/" + files[i],function (err, stats) {
                //检测成功之后做的事
                if(stats.isDirectory()) {
                    //如果是文件夹放入数组，否则什么也不做
                    wenjianjia.push(files[i]);
                }
                iterator(i+1);
            })
        })(0);
    });
    console.log(req.url);
    res.end();
});

server.listen(3000,"127.0.0.1");