var ejs = require("ejs");

//模板
var string = "好高兴呀，今天中了<%= a %>啊！";

//数据
var data = {
    a : 1000000
}

//数据绑定
var html = ejs.render(string,data)
//输出
console.log(html);