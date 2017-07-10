var express = require("express");

var app = express();

//以get方式请求"/"
app.get("/",function (req, res) {
    res.send("你好，我是express！");
});
//以get方式请求"/haha"
app.get("/haha",function (req, res) {
    res.send("我是haha页面！");
})

app.get(/\/student\/(\d{10})$/,function (req, res) {
    console.log(req.params[0]);
    res.send("学生学号为:" + req.params[0]);
})

app.get("/teacher/:gonghao",function (req, res) {
    res.send("老师工号为：" + req.params.gonghao);
})

app.listen(3000,"127.0.0.1");