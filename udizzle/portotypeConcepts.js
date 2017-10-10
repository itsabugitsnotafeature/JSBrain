'use strict'

/* 
    MIXINS 
    Concepts : 
    Mixin – is a generic object-oriented programming term: 
        a class that contains methods for other classes.
    JavaScript does not support multiple inheritance, 
        but mixins can be implemented by copying them into the prototype.
    We can use mixins as a way to augment a class by multiple behaviors, 
        like event-handling as we have seen above.
    Mixins may become a point of conflict 
        if they occasionally overwrite native class methods. 
    So generally one should think well about the 
        naming for a mixin, to minimize such possibility.
*/

console.log("\n EX-3");

let sayMixin = {
    say(phrase){
        console.log(phrase);
    }
}

let sayHiMixin = {
    __proto__: sayMixin,
    sayHi(name){
        super.say("Hello " + this.name);
    },
    sayBye(name){
        super.say("Bye " + this.name);
    }
}

class User_mixin_1{
    constructor(name){
        this.name = name;
    }
}

Object.assign(User_mixin_1.prototype, sayHiMixin);
let u1 = new User_mixin_1("YouDizzle");
u1.sayHi();
u1.sayBye();

new User_mixin_1("Dizz-le").sayHi();




/* 
    CLOSURES EXAMPLES 
    Concepts : 
        ** L-E-R: 
            Lexical Environment 
            Environment Record

        ** Function can Access: => Closure => Lexical Scoping
            Inner Lexical Environment
            Outer Lexical Enviroment 
        
         CLOSURE : 
            is a function that remembers its outer variables 
                and can access them. 

            “what’s a closure?”, 
                a valid answer would be a definition of the closure 
                and 
                an explanation that all functions in JavaScript are closures, 
                and maybe few more words about technical details: 
                the [[Environment]] property and how Lexical Environments work.



*/

console.log("\n EX-2");
function makeWorker(){ 
    let name1 = "Pete";
    return function(){ 
        console.log(name1);
    }
};
let name1 = "John";// create a function
let work = makeWorker();// call it
work();



console.log("\n EX-1");
let name = "John";
console.log(sayHi());
function sayHi(){ 
    return("Hi, " + name); 
} 
name = "Pete";
console.log(sayHi());












/* 
PROTOTYPES EXAMPLES 
*/
console.log("\n\nPROTOTYPES EXAMPLES ");

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
