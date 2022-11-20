# Typescript学习笔记

个人学习笔记，不会特别详细，很多懂得地方或者类似其他语言的地方都没有写。如果你学过`java`等语言可以看看此篇文章，个人觉得这个设计特别类似`Java`。

# 什么是Typescript
[Typescript](https://www.typescriptlang.org/zh/)是微软开发的一个有类型的的JavaScript。
他不能直接被浏览器识别，需要被编译为普通的JavaScript运行。

# 安装
```shell
npm install -g typescript
```
安装完毕后，就会有`tsc`指令，他是将`Typescript`编译为`JavaScrip`t的指令，win上可能会提示策略问题，可通过在`PowerShell`中执行如下指令设置
```shell
set-ExecutionPolicy RemoteSigned
```
# 初识
Typescript是一个类型严格的语言，这不同于js。比如我在普通的js中可以写如下的代码
```javascript
let v
v = 1
v = "typescript"
```
变量v类型是不确定的，我可以给他使用整数赋值，之后再用字符串赋值，这是没问题的。但是在TypeScript中这是不允许的。
```typescript
let v: string
v = 1 // 此处是编译不通过的。因为声明了v为字符串。
v = "typescript"
```
我使用`tsc`指令去编译，可以看到如下错误信息
![](https://itlab1024-1256529903.cos.ap-beijing.myqcloud.com/202211201458817.png)
虽然打印了错误，但是他默认还是会编译成功的。
ok，懂点了。
# 类型声明
一个变量被声明类型之后，那么他就变为了严格类型的变量，以后他只能接收该类型的值。
类型声明通过`[let|const|.etc]变量名: 类型`的方式。
## 基本类型
常用的基本类型有三个
`string`，`number`，和 `boolean`。
`string`：字符串
`number`：数字，在`Typescript`中并没有对数组做具体区分，`number`可以支持整数和小数
`boolean`： 值只支持`true`和`false`。

```typescript
// string类型
let s: string
s = "TypeScript"
// number类型
let n: number
n = 1
n = 1.0
n = -1
n = 1e3
// boolean类型
let b: boolean
b = true
b = false

```
编译后的效果截图如下：
![](https://itlab1024-1256529903.cos.ap-beijing.myqcloud.com/202211201517589.png)
这里边let被编译为了var。这是因为`Typescript`可以编译为任意ES版本，可以指定，之后再说。

## 字面量声明

```typescript
// 字面量声明方式
let c: `F' | "M" // 也就是说c可以赋值”F”和“M”，其他值是不允许的,这类似枚举的功能
c = "F"
c = "M"
```

## 连接符（|）的用法

上面使用了|的用法，他就是或的意思，也可以给变量声明多了个类型。

```typescript
// 多个类型的声明
let d: string | number
d = "字符串"
d = 1
```

上面的变量d就可以给他字符串或者数字的值。

## 声明并赋值

上面的代码都是先声明变量在赋值，但是实际开发中用的更多的就是声明的同时赋值，编译器会自动推导类型。
```typescript
// 声明并赋值
let a: number = 10
// a = "react" // 这是不允许的，编译不通过。
// 类型推导
let b = 10 // 编译器会自动推导出变量b是number类型的
// b = "react" //这是不允许的，编译不通过。
```
能推导出来，还需要定义类型吗？其实如果是变量可以不写类型，但是当作为函数参数的时候就需要指定。
```typescript
// 在函数中对参数和返回值进行类型声明
function sum(a: number, b: number): number {
    return a + b
}
```
# 类型介绍
上面我使用了`string`，`number`，和 `boolean`三种最常用的基本类型。TypeScript还支持很多类型，接下来继续学习。

| 类型名  | 说明                                                    | 示例                                             |
| ------- | ------------------------------------------------------- | ------------------------------------------------ |
| string  | 字符串                                                  | "双引号的字符串"，'单引号字符串'，\`模板字符串\` |
| number  | 数字，支持整数和小数，也支持科学计数法、16进制数字等等  | 1，-1， 34.2                                     |
| boolean | 布尔值                                                  | true，false                                      |
| any     | 任何类型的值即可                                        | 啥都行                                           |
| unknown | 类似any                                                 |                                                  |
| void    | 常用于定义函数返回值，void代表返回空                    |                                                  |
| never   | never代表永远不返回值（也不会返回空），常用于抛出异常等 |                                                  |
| object  | 对象类型                                                | {"url":"https://itlab1024.com"}                  |
| Array   | 数组，指定泛型则存储该泛型类型的数据                    | let l: number[] = [1, 2, 3]                      |
| tuple   | 元组                                                    |                                                  |
| enum    | 枚举                                                    |                                                  |

示例：

```typescript
// string
let a: string = "可以使用双引号"
let b: string = '可以使用单引号'
let c: string = `可以使用模板字符串`
// number
let d: number = 1 // 正整数
let e: number = -1 // 复数
let f: number = 1.99714E13 // 科学技术法
let g: number = 0x11 // 16 进制
let h: number = 0o11 // 8进制
// boolean
let j: boolean = true
let k: boolean = false
// any类型
let m: any
m = 1
m = ""
m = true
// unknown类型
let n: unknown
n = 1
n = ""
n = false
// void用于函数返回值
function f1(): void {
    console.log("返回的void函数")
}
//never
function f2(): never {
    throw new Error("出错了，啥也不返回")
}
// object类型
let o: object = {"name": "https://itlab1024.com"}
// 常用如下方式定义object。可以限定对象下的属性类型
let o1: {
    name: string
    age?: number // 这里使用了？也就是代表可以不设置该参数。
}
o1 = {name:"刘备"}

// 数组和泛型
let l: Number[] = [1, 2, 3] // 声明了一个Array数组，使用泛型Number，也就是是说数组中只能使用Number类型的数据。
// 元组类型
let p:[number, number] = [1, 2]
// 枚举
enum SEX {
    M = 0, //男
    F = 1 //女
}
let q = SEX.M


```

# 面向对象

## 类的基本定义

```typescript
/**
 * 网站类
 */
class Website {
    // 网站名称，使用private定义，ts中也有private、protected、public关键字，使用private修饰的不能在类外面访问
    name: string
    // 网站地址
    url: string
    //网站描述
    description: string
    // 开设时长
    age: number
    // 备案号：readonly 只读属性
    readonly filingNo: string = "京ICP备2022020869号-1"
    // 国家，这里我设置country为static的属性，假定都是中国
    static country = "CHINA"
}
// 定义一个类的实例
let website = new Website();
website.name = "IT实验室"
website.url = "https://itlab1024.com"
website.description = "程序员学习笔记"
website.age = 1
// website.filingNo = "" 只读属性不允许更改
console.log(website)
```

在`html`中引入，编译为`js`后，打开查看效果：

```shell
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>TypeScript中类的使用</title>
</head>
<body>
<script src="类.js"></script>
</body>
</html>
```

编译：

```shell
PS D:\workspace\typescript-tutor> tsc .\面向对象\类.ts
```

查看控制台输出：

![](https://itlab1024-1256529903.cos.ap-beijing.myqcloud.com/202211201942840.png)

## 类的函数

```typescript
// 定义函数获取name属性
getName(): string {
    return this.name
}
```

接下来调用下，下面是完整代码：

```react
/**
 * 网站类
 */
class Website {
    // 网站名称，使用private定义，ts中也有private、protected、public关键字，使用private修饰的不能在类外面访问
    name: string
    // 网站地址
    url: string
    //网站描述
    description: string
    // 开设时长
    age: number
    // 备案号：readonly 只读属性
    readonly filingNo: string = "京ICP备2022020869号-1"
    // 国家，这里我设置country为static的属性，假定都是中国
    static country = "CHINA"

    // 定义函数获取name属性
    getName(): string {
        return this.name
    }
}

// 定义一个类的实例
let website = new Website();
website.name = "IT实验室"
website.url = "https://itlab1024.com"
website.description = "程序员学习笔记"
website.age = 1
// website.filingNo = "" 只读属性不允许更改
console.log(website)

// 调用getName方法
console.log(website.getName())
```

编译后，重新打开页面，查看控制台：

![image-20221120194652640](https://itlab1024-1256529903.cos.ap-beijing.myqcloud.com/202211201946741.png)

## 构造方法

类中可以使用构造方法，最多有一个构造方法

```typescript
// 定义构造方法
constructor(name: string, url: string, description: string, age: number) {
    this.name = name
    this.url = url
    this.description = description
    this.age = age
}
```

完整代码如下：

```typescript
/**
 * 网站类
 */
class Website {
    // 网站名称，使用private定义，ts中也有private、protected、public关键字，使用private修饰的不能在类外面访问
    name: string
    // 网站地址
    url: string
    //网站描述
    description: string
    // 开设时长
    age: number
    // 备案号：readonly 只读属性
    readonly filingNo: string = "京ICP备2022020869号-1"
    // 国家，这里我设置country为static的属性，假定都是中国
    static country = "CHINA"

    // 定义函数获取name属性
    getName(): string {
        return this.name
    }
    // 定义构造方法
    constructor(name: string, url: string, description: string, age: number) {
        this.name = name
        this.url = url
        this.description = description
        this.age = age
    }

}

// 定义一个类的实例
// let website = new Website();
// website.name = "IT实验室"
// website.url = "https://itlab1024.com"
// website.description = "程序员学习笔记"
// website.age = 1
// // website.filingNo = "" 只读属性不允许更改
// console.log(website)
//
// // 调用getName方法
// console.log(website.getName())

//通过构造函数创建类的实例对象
let website = new Website("IT实验室", "https://itlab1024.com", "程序员学习笔记", 1)
console.log("使用构造函数创建类的示例对象，结果是：", website)
```

编译后查看运行结果：

![](https://itlab1024-1256529903.cos.ap-beijing.myqcloud.com/202211201951753.png)

## 类的继承

```typescript
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
```

编译后打开浏览器控制台查看结果：

![image-20221120195807931](https://itlab1024-1256529903.cos.ap-beijing.myqcloud.com/202211201958015.png)

> 结论：通过`extends`关键字继承，创建子类的示例对象后，父类的构造函数会被调用，然后调用子类的。

## 抽象类

```typescript
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
```



![image-20221120200644168](https://itlab1024-1256529903.cos.ap-beijing.myqcloud.com/202211202006236.png)

这就跟Java一模一样！！！(○´･д･)ﾉ

## 接口

使用`interface`定义接口，类使用`implements`实现接口

```typescript
interface Reader {
    read(): void
}

class ByteReader implements Reader {
    read(): void {
        console.log("实现接口的类，重写的read方法被执行")
    }
}

let byteReader = new ByteReader();
byteReader.read()
```

![image-20221120201309184](https://itlab1024-1256529903.cos.ap-beijing.myqcloud.com/202211202013249.png)

## 属性的封装

* public：属性能够在任意地方被访问
* private：只能在类内部进行修改，其他地方需要通过Getter、Setter方法访问。
* protected：受保护的，只能类内部，或者子类访问。

```
class Person {
    // 使用private修改
    private _name: string
    private _age: number

    // 以下是Getter和Setter方法
    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }
}
let person = new Person()
// 调用_name属性的setter方法
person.name = "IT实验室"
// 调用_name的setter方法
console.log(person.name)
```

编译报错了：

![image-20221120203039682](https://itlab1024-1256529903.cos.ap-beijing.myqcloud.com/202211202030730.png)

这是说需要编译为ES5或者以上，默认是编译为ES3，所以编译的时候指定编译为ES5以上

```

```

其中`-t`可以指定`es3`, `es5`, `es6`, `es2015`, `es2016`, `es2017`, `es2018`, `es2019`, `es2020`, `es2021`, `es2022`, `esnext`。

打开浏览器控制台：

![image-20221120203352543](https://itlab1024-1256529903.cos.ap-beijing.myqcloud.com/202211202033605.png)

> 总结：使用修饰符修改属性，属性名称建议使用下划线开头。其实如果使用webstorm工具生成get和set方法，会自动将属性修改为带下划线的。
>
> 这种封装是编程时常用的！

# 总结

简单学习到这里，目前对于我来说简单知道其使用就行，慢慢学呗。目前就基本能支持我写个简单的页面了（准备使用React+Typescript写个go语言的前后端博客项目，主要是为了学习Go语言）

> 本项目地址：https://github.com/itlab1024/typescript-tutor.git





