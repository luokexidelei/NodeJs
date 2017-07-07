//引用模块
var http = require("http");
//创建一个服务器
var server  = http.createServer(function(req,res){
	console.log("服务器接收到了请求：" + req.url);
	
	//设置响应头部
	res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
	
	res.write("<h1>我是主标题</h1>");
	res.write("<h2>我是2标题</h2>");
	res.write("<h3>我是3标题</h3>");
	res.write("<h4>我是4标题</h4>");
	res.write("<h5>我是5标题</h5>");
	
	//响应结束
	res.end((1+2+3).toString());//必须为字符串类型
});


//设置监听端口
server.listen(3000,"127.0.0.1");