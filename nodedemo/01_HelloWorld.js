//require表示引包，引包就是引用自己的一个特殊功能
var http = require("http");

//创建服务器，参数是一个回调函数，表示如果有请求进来，要做什么
var server = http.createServer(function(req,res) {
	//req表示请求，request； res表示响应，response
	//设置http头部，状态码是200，文件类型是html，字符集是utf-8
	res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
	
	//res.end("哈哈哈，这是我的第一个Node页面，Hello World");
	
	//res.end("/r");
	
	res.end("我买了个iPhone" + (1+2+3));
});

//运行服务器,监听3000端口，端口可以任意修改
server.listen(3000,"127.0.0.1");