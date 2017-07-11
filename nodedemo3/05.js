/**
 * Created by 97262 on 2017/7/11.
 */
var express = require("express");

var app = express();

//设置模板引擎
app.set("view engine","ejs");

app.get("/",function (req, res) {
    res.render("form");
});

app.post("/",function (req, res) {
    res.send("成功！");
});

app.listen(3000);