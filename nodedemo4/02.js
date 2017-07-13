/**
 * Created by 97262 on 2017/7/13.
 */
var express = require("express");

var MongoClient = require("mongodb").MongoClient;

var app = express();

//设置模板引擎
app.set("view engine","ejs");

//数据库地址
var shujukuUrl = "mongodb://localhost:27017/zy";

app.get("/",function (req, res) {
    //先连接数据库，对数据库的所有操作都在 他的回调函数里面
    MongoClient.connect(shujukuUrl,function (err,db) {
        if(err) {
            res.send("数据库连接失败！");
            return;
        }
        console.log("数据库链接成功！");
        //查询数据库，cursor游标，cursor可以用each方法遍历
        //每次表示一条document
        var result = [];
        var cursor = db.collection("student").find();
        cursor.each(function (err, doc) {
            if(err){
                console.log("游标遍历错误！");
                return;
            }
            if(doc != null) {
                result.push(doc);
            }else {
                console.log(result);
                db.close();
                res.render("index",{
                    "result" : result
                })
            }
        });
    });
});
//添加页面
app.get("/add",function (req, res) {
    res.render("add");
});

//添加操作
app.get("/tijiao",function (req, res) {
    //得到参数
    var name = req.query.name;
    var age = req.query.age;
    var yuwenchengji = req.query.yuwenchengji;
    var shuxuecehngji = req.query.shuxuechengji;

    MongoClient.connect(shujukuUrl,function (err, db) {
        if(err) {
            console.log("数据库连接失败！")
            return;
        }
        console.log("数据库连接成功！");

        db.collection("student").insertOne({
            "name" : name,
            "age" : age,
            score : {
                "yuwen" : yuwenchengji,
                "shuxue" : shuxuecehngji
            }
        },function (err, result) {
            if(err) {
                console.log("插入失败！")
                return;
            }
            res.send("插入成功！");

            //关闭数据库
            db.close();
        });
    });
});
app.listen(3000);