//引用模块
var http = require("http");
var url = require("url");
//创建服务器
var server = http.createServer(function(req,res){
	//url.parse(urlString[, parseQueryString[, slashesDenoteHost]]);
	//url.parse() 可以将一个完整的URL地址，分为很多部分：
	//host、port、pathname、path、query
	var url_parse = url.parse(req.url);
	var pathname = url.parse(req.url).pathname;
	
	//url.parse()的第二个参数如果为true，那么就可以将所有的查询变为对象
	//就可以直接通过点的方式得到这个参数
	var query1 = url.parse(req.url,true).query;
	var age = query1.age;
	
	//console.log("query: " + query1);
	console.log("age: " + age);
	console.log("url_parse: " + url_parse);
	console.log("pathname: " + pathname);
	
	//响应结束
	res.end();
});

//设置监听端口
server.listen(3000,"127.0.0.1");