'use strict'



/* 
    CLOSURES EXAMPLES 
*/

let name = "John";
function sayHi(){ 
    console.log("Hi, " + name); 
} 
name = "Pete";
console.log(sayHi());




console.log(" PROTOTYPES EXAMPLES ");
/* 
    PROTOTYPES EXAMPLES 
*/

let User = {
    firstName: 'John',
    lastName: 'Doe',
    setName(username) {
        [this.firstName, this.lastName] = username.split(' ');
    },
    getName() {
        return (`${this.firstName}` + ' ' + `${this.lastName}`);
    }
};

let admin = {
    isAdmin: true,
    __proto__: User
}
console.log(admin.getName());
console.log(admin.setName("Tom Cruise"));
console.log(admin.getName());
console.log(User.getName());



/* 
    ANIMAL EXAMPLE 
*/
console.log("\n\n********************");
let animal = {
    eats: true,
    walk() {
        return ("Animal walk");
    },
    sleep() {
        this.isSleeping = true;
    }
};
console.log(animal.eats);
console.log(animal.walk());

function funcRabbit(name) {
    this.rabName = name;
}
funcRabbit.prototype = animal;
let funRab1 = new funcRabbit("Gozo");

console.log("\n ** Func Rabbit Exmaple **");
console.log(funRab1.rabName);
console.log(funRab1.eats);
console.log(funRab1.walk());
console.log(funcRabbit.prototype.constructor === animal);
console.log(funcRabbit.prototype.constructor === funcRabbit);
console.log(funcRabbit.prototype.constructor === animal.__proto__.constructor);
console.log(funcRabbit.prototype.constructor === animal.constructor);
console.log("\t****\n");


let rabbit = {
    humps : "I'm Hopping !",
    walk() {
        return("I'm Hopping");
    },
    __proto__ : animal
}
console.log(rabbit.eats);
console.log(rabbit.walk());
rabbit.sleep();
console.log(rabbit.isSleeping);
console.log("Animal Sleeping->" + animal.isSleeping);



let fluffyKins = {
    name: "fluffyKins",
    longEars: true,
    __proto__: rabbit,
}
    console.log(fluffyKins.eats);
console.log(fluffyKins.walk());
