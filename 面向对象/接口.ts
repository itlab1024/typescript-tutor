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