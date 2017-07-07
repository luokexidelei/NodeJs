var http = require("http");
var fs = require("fs");
var url = require("url");

var server = http.createServer(function(req,res){
	
	//不处理小图标
	if(req.url == "/favicon.ico"){
		return;
	}
	//存储所有的文件夹；
	var wenjianjia = [];
	fs.readdir("./album",function(err,files){
		//files 是个文件名的数组，表示./album这个文件夹中的所有东西
		//包括文件、文件夹
		console.log(files);
		
		for(var i = 0; i < files.length; i++) {
			var theFile = files[i];
			console.log(theFile);
			//又要进行一次检测
			fs.stat("./album/" + theFile,function(err,data) {
				//如果是一个文件夹，就输出它名字
				if(data.isDirectory()) wenjianjia.push(theFile);
				console.log(wenjianjia);
			});
		}
		
	});
	
	res.end();
	
});

server.listen(3000,"127.0.0.1");