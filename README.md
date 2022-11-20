# 前端TypeScript学习笔记
# 什么是TypeScript
[TypeScript](https://www.typescriptlang.org/zh/)是微软开发的一个有类型的的JavaScript。
他不能直接被浏览器识别，需要被编译为普通的JavaScript运行。
# 安装
```shell
npm install -g typescript
```
安装完毕后，就会有tsc指令，他是将TypeScript编译为JavaScript的指令，win上可能会提示策略问题，可通过在powershell中执行如下指令设置
```shell
set-ExecutionPolicy RemoteSigned
```
# 初识
TypeScript是一个类型严格的语言，这不同于js。比如我在普通的js中可以写如下的代码
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
`number`：数字，在TypeScript中并没有对数组做具体区分，`number`可以支持整数和小数
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
这里边let被编译为了var。这是因为TypeScript可以编译为任意ES版本，可以指定，之后再说。

## 字面量声明

```typescript
// 字面量声明方式
let c: 'F' | "M" // 也就是说c可以赋值”F”和“M”，其他值是不允许的,这类似枚举的功能
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
