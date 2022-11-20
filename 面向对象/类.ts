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
