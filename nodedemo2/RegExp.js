// var reg = /in/;
// var str = "testString";
// var result = reg.exec(str);
// console.log(result);

var reg = /c{1}/
var str = "abcsd";
console.log(reg.exec(str));//表示匹配一个c

var reg = /s{2}/;
var str = "abcss";
console.log(reg.exec(str));//表示匹配两个连续的ss，只要有两个连续的ss，就匹配，

var reg = /c{3,4}/;
var str = "adcccsdf";
console.log(reg.exec(str))//表示匹配3个或4个c，有4个就4个，没4个就3个，以最多的为准

var reg = /c{1,}/;
var str = "asdccc";
console.log(reg.exec(str));//至少匹配一个c，有多少匹配多少

var reg = /c{1,}/;
var str = "acccc";
console.log(reg.exec(str));//cccc

var reg = /c{1,}?/;
var str = "acccc";
console.log(reg.exec(str));//c

/** ^表示匹配字符串的开头字符, $表示匹配字符串的结尾字符 */
var reg = /^c/;
var str = "asdf";
console.log(reg.exec(str))//null 字符串开头不是c

var reg = /c$/;
var str = "sdfasd";
console.log(reg.exec(str));//null 字符串的结尾不是c

var reg = /./;
var str = "fffsdf";
console.log(reg.exec(str));//f

var reg = /.+/;
var str = "sdd,,sdf.._ aa";
console.log(reg.exec(str));//sdd,,sdf.._ aa什么都匹配，包括.自身

var reg = /^./;
var str = "\nasdf";
console.log(reg.exec(str));//null，正则要求字符串的第一个字符不是换行，但是恰恰字符是以\n开始的。

var reg = /b|c/;
var str = "abcsdf";
console.log(reg.exec(str));//b，谁在前面匹配谁

var reg = /^b|c.+/;
var str = "cainiao";
console.log(reg.exec(str));//cainiao

var reg = /^b|c.+/;
var str = "bainiao";
console.log(reg.exec(str));//b

var reg = /^(b|c).+/;
var str = "bainiao";
console.log(reg.exec(str));//bainiao

var reg = /[abc]/;
var str = "bbs.blueidea.com";
console.log(reg.exec(str));//b 谁先匹配到选择谁

var reg = /[a-zA-Z0-9]+/;
var str = "bb2Bs.blueidea.com:8080";
console.log(reg.exec(str));//bb2Bs

var reg = /[a-z]+/;
var str = "bb2Bs.blueidea.com:8080";
console.log(reg.exec(str));//bb

var reg = /[a-z].+[:]+/;
var str = "bbs.blueidea.com:8080";
console.log(reg.exec(str));
var reg = /[a-z].+[:0-9]+/;
var str = "bbs.blueidea.com:8080";
console.log(reg.exec(str));

var reg = /\bc/;
var str = "cainiao";
console.log(reg.exec(str));//c 字符串开头是c,谁在前，匹配谁

var reg = /\bc/;
var str = "c";
console.log("边界："+ reg.exec(str));//null 英文不行。

var reg = /\bc/;
var str='维生素c';
var re = reg.exec(str);//c，不过这次返回的是右侧边界的c。
console.log(reg.exec(str));

var reg = /\Bc/;
var str = "bcb";
console.log(reg.exec(str));//c 不是边界上的c

var reg = /\Bc/;
var str = "cainiao";
console.log(reg.exec(str));//null, c在左边界上

/** 数字与非数字 */
var reg = /\d/;
var str = "cainiao890";
console.log(reg.exec(str));//8

var reg = /\d+/;
var str = "cainiao890";
console.log(reg.exec(str));//890

var reg = /\D/;
var str = "cainiao899";
console.log(reg.exec(str));//c

var reg = /\D+/;
var str = "cainiao899";
console.log(reg.exec(str));//cainiao

/** 空白 */
var reg = /\s.+/;
var str = "This is a test string";
console.log(reg.exec(str));// is a test string匹配第一个空格及其之后所有非换行字符

//\S表示非空格字符
var reg = /\S+/;
var str = "This is a test string";
console.log(reg.exec(str));//This 当遇到第一个空格后，正则就停止匹配了

/** \w表示单词字符 */
var reg = /\w+/;
var str = "blue idea";
console.log(reg.exec(str));//blue 空格及后面的不会输出

var reg = /\w+/;
var str = "blue.i-d+ea";
console.log(reg.exec(str));//blue

var reg = /\w+/;
var str = ".className";
console.log(reg.exec(str));//className 点不会输出

var reg = /\w+/;
var str = "中文";
console.log(reg.exec(str));//null 中文不行

/** 反向引用 */
var reg = /(\w)(\w)/;
var str = "abcder";
console.log(reg.exec(str));
//ab,a,b ab是正则表达式匹配的内容，a是第一个括号子正则表达式匹配的，b是第二个

var reg = /(\w)\1/;
var str = "abcder";
console.log(reg.exec(str));//null
////这里的“\1”就叫做反向引用，它表示的是第一个括号内的字正则表达式匹配的内容。在上面的例子中，
// 第一个括号里的(\w)匹配了a，因此“\1”就同样表示a了，在余下的字符串里自然找不到a了。
var reg = /(\w)\1/;
var str = "aabcder";
console.log(reg.exec(str));//aa a

var reg = /(\w)(\w)\2\1/;
var str = "woow";
console.log(reg.exec(str));//woow,w,o

/** 正向预查 */
var reg = /cainiao(?=8)/;
var str = "cainiao9";
console.log(reg.exec(str));//null

var reg = /cainiao(?=8)/;
var str = "cainiao8";
console.log(reg.exec(str));//cainiao

var reg = /^(\d{10})$/;
var str = "1234567890";
console.log(reg.exec(str));