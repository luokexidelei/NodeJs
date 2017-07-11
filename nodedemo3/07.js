/**
 * Created by 97262 on 2017/7/11.
 */
var express = require("express");
var app = express();

//静态服务 使用express自带 的静态
app.use("/jingtai",express.static("./public"));

//新的路由
app.get("/images",function (req, res) {
    res.send("哈哈哈");
})

app.use(function (req, res) {
    res.status(404).send("没有这个页面！");
});
app.listen(3000);

