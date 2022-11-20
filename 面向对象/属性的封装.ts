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