let str:string = "Hello Typescript";
let num: number = 42;
let strArr:string[] =[ "open", "close"];
let numArr: Array<number> = [1, 2, 3, 6, 36];

const flag: "open" | "close" = "open"

function logInfo(name: string, age: number): void {
    console.log(`Info: Name - ${name}, age - ${age} years old.`)
}

logInfo("Dron", 42)

interface User {
    name: string,
    age: number,
    logInfo: () => void,
    id?:any
}

const user: User = {
    name: "dron",
    age: 42,
    logInfo() {
        console.log(this.name, " ", this.age)
    }
}

interface SayHello {
    sayHello: () => void
}

class Person implements SayHello{
    constructor(private name: string, private age: number) {
    }

    sayHello(): void {
    }
}
