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
o1 = {name: "刘备"}
// 数组和泛型
let l: Number[] = [1, 2, 3] // 声明了一个Array数组，使用泛型Number，也就是是说数组中只能使用Number类型的数据。
// 元组类型
let p: [number, number] = [1, 2]

// 枚举
enum SEX {
    M = 0, //男
    F = 1 //女
}
let q = SEX.M