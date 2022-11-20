// 父类
class Parent {
    name: string

    constructor(name: string) {
        this.name = name
        console.log("父类构造函数调用")
    }
}

// 子类
class Son extends Parent {
    school: string

    constructor(name: string, school: string) {
        // super不能被省略
        super(name);
        this.school = school;
        console.log("子类构造函数调用")
    }
}

//定义子类实例对象
let son = new Son("eleven", "家里蹲")
console.log(son)