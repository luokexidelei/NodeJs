var http = require("http");

var server = http.createServer(function (req, res) {
    //得到用户url
    var userUrl = req.url;

    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    //substr来判断此时的开头
    if(userUrl.substr(0,9) == "/student/") {
        var sid = userUrl.substr(9);
        if(/^\d{10}$/.test(sid)) {
            res.end("您要查询的学生id为：" + sid);
        }else {
            res.end("您要查询的学生不存在或学生学号位数不对！");
        }
    }else  if(userUrl.substr(0,9) == "/teacher/") {
        var tid = userUrl.substr(9);
        if(/^(\d{6})$/.test(tid)) {
            res.end("您要查询的老师id为：" + tid);
        }else {
            res.end("您要查询的老师不存在或老师工号位数不对！");
        }
    }else {
        res.end("请检查url！");
    }
});

server.listen(3000,"127.0.0.1");