//只写bar，没有后缀名，则是从node_modules文件夹中引用文件名为bar的文件夹，而bar文件夹
//中有index.js 作为入口模块
var bar = require("bar");
console.log(bar.msg);