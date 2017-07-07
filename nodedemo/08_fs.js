var http = require("http");
var fs = require("fs");
var url = require("url");

var server = http.createServer(function(req,res){
	
	//不处理小图标
	if(req.url == "/favicon.ico"){
		return;
	}
	//stat检测状态
	fs.stat("./album/aaa",function(err,data) {
		//检测这个路径是不是一个文件夹
		console.log(data.isDirectory());
		console.log(req.url);
	});
	
	res.end();
	
});

server.listen(3000,"127.0.0.1");