/**
 * Created by 97262 on 2017/7/11.
 */
var express = require("express");

var app = express();

app.get("/", function (req, res) {
    console.log(req.query);
    res.send();
});

app.listen(3000);