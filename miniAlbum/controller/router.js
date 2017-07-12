/**
 * Created by 97262 on 2017/7/11.
 */
var file = require("../models/file.js")
var formidable = require("formidable");
var fs = require("fs");
var sd = require("silly-datetime");
var path = require("path")
//首页
exports.showIndex = function (req, res, next) {
    //传统的，错误的思维，
    // res.render("index",{
    //     "albums" : file.getAllAlbums()
    // })

    //正确的，node的思维 ,就是所有的东西都是异步的
    //所以内层函数，不是return回来的东西，而是调用高层函数提供的回调函数
    //把数据当做回调函数的参数来使用。
    //返回数据都使用回调函数的方式返回callback(data); 不是return data;
    file.getAlbums(function (err, allAlbums) {
        //上层的callback(err,allAlbums)，这里的err是字符串
        if(err) {
            next();//交给下面适合他的中间件
            // res.send(err);
            return;
        }
        res.render("index",{
            "albums" : allAlbums
        });
    });
}

/** 相册页 */
exports.showAlbum = function (req, res, next) {
    //遍历相册中的所有图片
    var albumName = req.params.albumName;
    file.getImagesByAlbumName(albumName,function (err, allImages) {
        if(err) {
            next();//交给下面适合他的中间件
            // res.send(err);
            return;
        }
        res.render("album",{
            "albumname" : albumName,
            "images" : allImages
        });
    })
}
/** 上传文件页 */
exports.showUp = function (req, res, next) {
    //命令file模块(自己写的),调用getAlbums()函数。
    //得到所有文件夹名后做的事情，写在回调函数里面
    file.getAlbums(function (err, albums) {
        res.render("up",{
            albums : albums
        })
    });
}

//上传表单
exports.doPost = function (req, res, next) {
    var form = formidable.IncomingForm();
    form.uploadDir = path.normalize(__dirname + "/../tempup/");

    form.parse(req,function (err, fields, files, next) {
        // console.log(fields);
        // console.log(files);
        //改名
        if(err) {
            next();//这个中间件不受理这个请求，往下走
            return;
        }
        //判断文件尺寸
        var size = (files.tupian.size);
        console.log(size);
        if(size > 2048000) {
            res.send("图片大小应该小于1m");
            fs.unlink(files.tupian.path);
            return;
        }

        var ttt = sd.format(new Date(),"YYYYMMDDHHmmss");
        var ran = parseInt(Math.random() * 89999 + 10000);
        var extname = path.extname(files.tupian.name);

        var wenjianjia = fields.wenjianjia;
        var oldPath = files.tupian.path;
        var newPath = path.normalize(__dirname + "/../uploads/" + wenjianjia + "/" + ttt + ran + extname);
        fs.rename(oldPath,newPath,function (err) {
           if(err) {
               res.send("改名失败...");
               return;
           }
           res.send("上传成功！");
        });
    });
}