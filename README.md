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
# 
