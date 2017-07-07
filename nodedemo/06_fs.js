var http = require("http");
//引用fs模块
var fs = require("fs");

var server = http.createServer(function(req,res){
	//给用户加一个五位数的id
	var userId = parseInt(Math.random() * 100000) + 1 ;
	console.log(userId + ", 欢迎你");
	
	res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
	//两个参数，第一个是完整路径，当前目录写./
	//第二个参数是回调函数，表示文件读取成功之后，做的事情
	fs.readFile("./test/1.txt",function(err,data){
		if(err) throw err;
		console.log(userId + "的文件读取完毕");
		res.end();
	});
	
});

server.listen(3000,"127.0.0.1");