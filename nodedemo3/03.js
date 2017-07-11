/**
 * Created by 97262 on 2017/7/11.
 */
var express = require("express");

var app = express();

app.set("view engine","ejs");

app.get("/",function (req, res) {
    res.render("haha",{
       "news" : ["我是小新闻","wo ye shi ", "我还是"]
    });
});

app.listen(3000);