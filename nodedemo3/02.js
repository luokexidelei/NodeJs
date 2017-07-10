var express = require("express");

var app = express();

app.use(express.static("./public"));
app.get("/haha",function (req, res) {
    res.send("hahahahah ");
});

app.listen(3000);