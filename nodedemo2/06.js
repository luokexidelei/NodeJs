//如果aaa文件夹中没有index.js
//则需添加package.json文件，在其中设置相关
var bar = require("aaa");
console.log(bar.msg);