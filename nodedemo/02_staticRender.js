//引用包
var http = require("http");
var fs = require("fs");

//创建服务器
var server = http.createServer(function(req,res) {
	/**
		由于nodejs没有web容器的概念，所以访问静态资源必须的通过nodejs控制，通过路由转发到静态资源。
		请求的url可以不用与文件实际位置及名称相对应。
	*/
	if(req.url == "/1") {
		fs.readFile("./test/haha.html",function(err,data) {
			res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
			res.end(data);
		});
	}else if(req.url == "/2") {
		fs.readFile("./test/xixi.html", function(err,data){
			res.writeHead(200,{"Content-type":"text/html;chaset=UTF-8"});
			res.end(data);
		});
	}
	else if(req.url == "/0.jpg"){
		fs.readFile("./test/0.jpg",function(err,data){
			res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
			res.end(data);
		});
	}
	else if(req.url == "/bbbbbb.css") {
		fs.readFile("./test/aaaaaa.css",function(err,data){
			res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
			res.end(data);
		});
	}
	//res.end("hello, world");//res.end();必须写，不然浏览器会一直等待服务器响应，小菊花一直再转
	else {
		res.writeHead(404,{"Content-type":"text/html;charset=utf-8"});
		res.end("Sorry,there is something wrong!");
	}
});

//运行服务器,监听端口号
server.listen(3000,"127.0.0.1");