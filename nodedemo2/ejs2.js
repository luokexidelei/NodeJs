var ejs = require("ejs");
var fs = require("fs");
var http = require("http");
//
// fs.readFile("./views/index.ejs",function (err, data) {
//     // var template = data.toString();
//     // var dictionary = {a:1000000};
//     //
//     // var html = ejs.render(template, dictionary);
//     //
//     // console.log(html);
//     console.log(data)
// });
fs.readFile("./views/index.ejs", function (err, data) {
    console.log(data);
})