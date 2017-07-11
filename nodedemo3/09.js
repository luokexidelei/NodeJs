/**
 * Created by 97262 on 2017/7/11.
 */
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
/**
 * post请求获取参数 用body-parser 这个模块
 */
app.set("view engine","ejs");

app.get("/",function (req, res) {
    res.render("form");
});

//bodyParserAPI
app.use(bodyParser.urlencoded({extended:false}));

app.post("/",function (req, res) {
    console.log(req.body);
    res.send("成功")
});

app.listen(3000);