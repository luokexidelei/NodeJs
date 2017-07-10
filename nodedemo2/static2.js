var http = require("http");
var url = require("url");
var path = require("path");
var fs = require("fs");

var server = http.createServer(function (req, res) {
    //得到用户请求URL中的路径
    var pathName = url.parse(req.url).pathname;

    //设置默认首页
    if(pathName == "/") {
        pathName = "index.html";
    }

    //拓展名
    var extName = path.extname(pathName);
    //真的读取文件
    fs.readFile("./static/" + pathName,function (err, data) {
        //不存在的页面返回404
        if(err) {
            fs.readFile("./static/404.html",function (err, data) {
                res.writeHead(404,{"Content-type":"text/html;charset=utf-8"});
                res.end(data);
            })
            return;
        }
        //如果存在就返回
        //设置mime类型
        res.writeHead(200,{"content-type":getMime(extName) + ";charset=utf-8"})
        console.log(pathName);
        res.end(data);
    })
});

server.listen(3000,"127.0.0.1");

function getMime(extName) {

    // switch (extName) {
    //     case ".html":
    //         return "text/html";
    //         break;
    //     case "./jpg":
    //         return "image/jpg";
    //         break;
    //     case ".css":
    //         return "text/css";
    //         break;
    // }
}