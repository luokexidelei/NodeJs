function People(name,sex,age) {
    this.name = name;
    this.sex = sex;
    this.age = age;
}

People.prototype = {
    sayHello : function() {
        console.log("Hello,我是" + this.name + ","+
        this.sex + ",今年"+this.age+"岁");
    }
}

//此时，People就被视为构造函数，可以用new来实例化
module.exports = People;