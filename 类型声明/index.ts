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

// 在函数中对参数和返回值进行类型声明
function sum(a: number, b: number): number {
    return a + b
}

// 字面量声明方式
let c: 'F' | "M" // 也就是说c可以赋值”F”和“M”，其他值是不允许的,这类似枚举的功能
c = "F"
c = "M"

// 多个类型的声明
let d: string | number
d = "字符串"
d = 1
