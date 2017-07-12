/**
 * Created by 97262 on 2017/7/11.
 */
var express = require("express");
var app = express();
//控制器
var router = require("./controller");

//设置模板引擎
app.set("view engine","ejs");

//路由中间件 读取静态文件
//静态 /public 文件夹下所有文件
app.use(express.static("./public"));

//静态uploads文件夹下所有文件
app.use(express.static("./uploads"));

//首页
app.get("/",router.showIndex);

//相册页
app.get("/:albumName",router.showAlbum);

//上传文件页
app.get("/up",router.showUp);

//上传功能
app.post("/up",router.doPost);

//404
app.use(function (req, res) {
    res.render("err");
});

app.listen(3000);