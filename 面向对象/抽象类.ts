abstract class AbstractA{
    name: string
    f1() {
        console.log("f1函数被调用")
    }

    constructor(name: string) {
        this.name = name;
    }
    // 定义一个抽象方法
    abstract say(): void
    // 非抽象方法，子类不是必须重写的。
    walk(): void {
        console.log("抽象类中")
    }
}
class B extends AbstractA {
    // 父抽象类中的抽象方法必须要重写
    say(): void {
        console.log("重写的抽象方法被调用")
    }
}
let  b = new B("IT实验室")
console.log(b)
b.say()
b.walk()