/**
 * Created by 97262 on 2017/7/13.
 */
var express = require("express");

//数据库引用
var MongoClient = require("mongodb").MongoClient;
var assert = require("assert");

var app = express();
//数据库链接地址  最后的斜杠表示数据库的名字
var shujukuUrl = "mongodb://localhost:27017/zy";
app.get("/",function (req, res) {
    //链接数据库，这是一个异步操作
    MongoClient.connect(shujukuUrl,function (err, db) {
        if(err) {
            res.send("数据库链接失败！");
            return;
        }
        console.log("数据库链接成功！");
        db.collection("teacher").insertOne({"name":"Lily"},function (err, result) {
            if(err) {
                res.send("插入失败！");
                return;
            }
            res.send("数据插入成功！");
            console.log("数据插入成功！");
            db.close();
        });
    });
});

app.listen(3000);