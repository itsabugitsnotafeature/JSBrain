console.log("Hello from arrow function");

let square = x => x * x ;
console.log("The Square is: " + square(9));

let user = {
    name: "youdizzle",
    sayHi: () => {
        console.log(arguments)
        console.log(` ${this.name} says hi!`);
    },
    sayHiAlt() {
        console.log(arguments);
        console.log(` ${this.name} says hi!`);
    }
}

user.sayHi(1, 2, 3);
user.sayHiAlt(1, 2, 3);


