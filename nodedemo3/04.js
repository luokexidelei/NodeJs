/**
 * Created by 97262 on 2017/7/11.
 */
var express = require("express");

var app = express();

/**
 * 请求路径无视大小写
 */
app.get("/AbB",function (req, res) {
    res.send("你好啊，么么哒~");
});

/**
 * 使用冒号传参
 */
app.get("/student/:id",function (req, res) {
    var id = req.params["id"];
    var reg = /^\d{10}/;
    if(reg.test(id)){
        res.send("学生id：" + id);
    }else {
        res.send("格式错误！");
    }
});

/**
 * 路由匹配是从上往下匹配，匹配到了就不会往下匹配了，除非加next参数，回调里加next();
 */
app.get("/:username/:age",function (req, res) {
    var username = req.params["username"];
    var age = req.params["age"];
    res.send(username + "的年龄是" + age);
});


app.listen(3000);