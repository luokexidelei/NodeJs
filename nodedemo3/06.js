/**
 * Created by 97262 on 2017/7/11.
 */
var express = require("express");
var fs = require("fs");
var app = express();


/**
 * use 中间件，功能和get，post一样，不同的是他不是精确匹配，有点像数据库的模糊查询，
 */

//不写路径，实际上相当于写了"/",就是所有路径
app.use(haha);

app.use("/aa",function (req, res) {
    res.write(req.originalUrl + "\n")//   /aa/bb/cc/dd
    res.write(req.baseUrl + "\n");//      /aa
    res.write(req.path + "\n");//         /bb//cc/dd
    res.end();
});

app.listen(3000);

function haha(req, res, next) {
    var filePath = req.originalUrl;
    console.log(filePath);
    //根据当前的网址，读取public文件夹中的文件
    //如果有这个文件，那么渲染这个文件，没有则next();
    fs.readFile("./public" + filePath,function (err, data) {
        console.log("./public" + filePath);
        if(err) {
            next();
            return;
        }

        res.send(data.toString());
    })
}