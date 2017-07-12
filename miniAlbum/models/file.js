/**
 * Created by 97262 on 2017/7/11.
 */

var fs = require("fs");

/**
 * 这里的callback有两个参数，
 * 一个是err，另一个是存放文件夹名字的数组 array(即需要返回的数据)；
 * callback(err,allAlbums);
 */
exports.getAlbums = function (callback) {
    fs.readdir("./uploads",function (err, files) {
        if(err) {
            callback("uploads文件夹不存在！",null);
            return;
        }
        var allAlbums = [];
        (function iterator(i) {
            if(i == files.length) {
                //遍历结束
                console.log(allAlbums);
                //所以内层函数，不是return回来的东西，而是调用高层函数提供的回调函数
                //把数据当做回调函数的参数来使用。
                // return allAlbums;
                callback(null, allAlbums);
                return;
            }
            fs.stat("./uploads/" + files[i],function (err, stats) {
                if(err) {
                    callback("找不到文件" + files[i], null);
                }
                if(stats.isDirectory()) {
                    allAlbums.push(files[i]);
                }
                iterator(i + 1);
            })
        })(0);
    });
}
/** 通过相册名获得图片 */
//albumName 为上面传过来的参数，callback(err,data)返回通过参数得到的数据
exports.getImagesByAlbumName = function (albumName, callback) {
    fs.readdir("./uploads/" + albumName,function (err, files) {
        if(err) {
            callback(albumName + "文件夹不存在！",null);
            return;
        }
        var allImages = [];
        (function iterator(i) {
            if(i == files.length) {
                console.log(allImages);
                callback(null,allImages);
                return;
            }
            fs.stat("./uploads/" + albumName + "/" + files[i], function (err, stats) {
                // console.log("./uploads/" + albumName + "/" + files[i]);
                if(err) {
                    callback("找不到文件！", null);
                    return;
                }
                if(stats.isFile()) {
                    allImages.push(files[i])
                }
                iterator(i + 1);
            });
        })(0);
    })
}