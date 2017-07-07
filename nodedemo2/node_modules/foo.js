var msg = "你好";
var info = "呵呵哒";
function showInfo() {
    return "我是showInfo的："+info;
}

exports.msg = msg;
exports.info = info;
exports.showInfo = showInfo();