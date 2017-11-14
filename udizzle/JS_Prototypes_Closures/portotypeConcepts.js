'use strict'






/* 
    METHOD 1:
    INHERITING OBJECTS AS PROTOTYPES 

*/
var parent = {
    val:2,
    sayHi: function(){
        console.log("Hi There !")
    }
}
let child = Object.create(parent);
let child1 = {};
child1.__proto__ = parent;

// Example 2:
let animal = {
    poops:true,
    walks(){
        // Walk definition goes here
    }
}

let rabbit = {
    jumps: true
}
// This makes animal as prototype of rabbit
rabbit.__proto__ = animal;
let rabbit1 = {
    __proto__: animal,
}

// Example 3:
let user = {
    firstName: 'john',
    lastName: 'doe',
    isHuman: true,
    getName1(){
        // Returns name
        return ( `${this.firstName} ${this.lastName} ` );
    },
    getName2(){
        // Returns Error
        return ( `${firstName} ${lastName} ` );
    }
}

let adminUser = {
    __proto__: user,
    isAdmin: true
}




/* 
    METHOD 2:
    INHERITING SUB-CLASSES from PARENT CLASSES
*/

// Example 1:
class Dog {
    constructor(name){
        this.name = name;
        this.speed = 5;
    }

    getSpeed(){
        return this.speed;
    }
}

class Bulldog extends Dog {
    constructor(name){
        super(name);
        this.color = 'brown';
    }
}

let bd1 = new Bulldog('Buddy');
let d1 = bd1 = new Dog('Tuddy');

// Example 2:

let animal1 = {
    poops: true
}

let animal2 = {
    eats: true
}

function Rabbit(){
    this.eats = true;
    this.walk = () =>{
        console.log("HOPPIN !!")
    }
}
Rabbit.__proto__ = animal;

let r1 = new Rabbit()











/* 
    METHOD 2:
        COMPOSITION
*/

let choco = {
    hasChoco(){
        return true;
    }
}
let vanilla = {
    hasVanilla(){ 
        return  true
    }
}
let berry = {
    hasBerry () {
        return true;
    }
}

let iceCream = Object.assign({}, choco, vanilla, berry)
let ic2 = {
    melts: true,
    __proto__: choco
}




const chocolate = {
    hasChocolate: () => true
};
const caramelSwirl = {
    hasCaramelSwirl: () => true
};
const pecans = {
    hasPecans: () => true
};
const iceCream = Object.assign({}, chocolate, caramelSwirl, pecans);
/*
// or, if your environment supports object spread...
const iceCream = {...chocolate, ...caramelSwirl, ...pecans};
*/
console.log(`
    hasChocolate: ${ iceCream.hasChocolate()}
    hasCaramelSwirl: ${ iceCream.hasCaramelSwirl()}
    hasPecans: ${ iceCream.hasPecans()}
  `);




/* 
    Base object factory
    Create an empty object
    Add it a "name" property
    Return the object 
*/
function base(spec) {
    var that = {};              
    that.name = spec.name;      
    return that;                
}

/* 
    Construct a child object, inheriting from "base"
    Create the object through the "base" constructor 
*/
function child(spec) {
    
    var that = base(spec); 
    that.sayHello = function() {            // Augment that object
        return 'Hello, I\'m ' + that.name;
    };
    return that;                        // Return it
}


// Usage

var result = child({ name: 'a functional object' });
console.log(result.sayHello()); // "Hello, I'm a functional object"


















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

/* 
    MIXINS EXAMPLE  1
*/
let sayMixin = {
    say(phrase) {
        console.log(phrase);
    }
}

let sayHiMixin = {
    __proto__: sayMixin,
    sayHi(name) {
        super.say("Hello " + this.name);
    },
    sayBye(name) {
        super.say("Bye " + this.name);
    }
}

class User_mixin_1 {
    constructor(name) {
        this.name = name;
    }
}

Object.assign(User_mixin_1.prototype, sayHiMixin);
let u1 = new User_mixin_1("YouDizzle");
u1.sayHi();
u1.sayBye();

new User_mixin_1("Dizz-le").sayHi();


/* 
    MIXINS EXAMPLE  2
*/
const chocolate = {
    hasChocolate: () => true
};
const caramelSwirl = {
    hasCaramelSwirl: () => true
};
const pecans = {
    hasPecans: () => true
};
const iceCream = Object.assign({}, chocolate, caramelSwirl, pecans);
/*
// or, if your environment supports object spread...
const iceCream = {...chocolate, ...caramelSwirl, ...pecans};
*/
console.log(`
    hasChocolate: ${ iceCream.hasChocolate()}
    hasCaramelSwirl: ${ iceCream.hasCaramelSwirl()}
    hasPecans: ${ iceCream.hasPecans()}
  `);



















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

function makeWorker() {
    let name1 = "Pete";
    return function () {
        console.log(name1);
    }
};
let name1 = "John";// create a function
let work = makeWorker();// call it
work();








// 
let name = "John";
console.log(sayHi());

function sayHi() {
    return ("Hi, " + name);
}
function sayHiThis() {
    return ("Hi, " + this.name);
}
name = "Pete";
console.log(sayHi());
console.log(sayHiThis());
/* 
    Hi John
    Hi Peet
    Hi undefined
*/










// QQ
var name1 = "John";
console.log(sayHi());

function sayHi() {
    return ("Hi, " + this.name1);
}

name1 = "Pete";
console.log(sayHi());
/* 
    Hi John
    Hi Peet
*/








// QQ
var name1 = "John";
console.log(sayHi());
function sayHi() {
    var name1 = 'loo'
    return ("Hi, " + this.name1);
}
name1 = "Pete";
console.log(sayHi());
/* 
    Hi John
    Hi Peet
*/









let name1 = "John";
console.log(sayHi());

function sayHi() {
    name1 = 'loo'
    return ("Hi, " + this.name1);
}

name1 = "Pete";
console.log(sayHi());
/* 
    Hi undefined
    Hi undefined
*/








// EXAMPLE 2 

(function outerFunc(outerArg) {
    var outerVar = 3;

    (function middleFunc(middleArg) {
        var middleVar = 4;

        (function innerFunc(innerArg) {
            var innerVar = 5;
            // EXAMPLE OF SCOPE IN CLOSURE:
            // Variables from innerFunc, middleFunc, and outerFunc,
            // as well as the global namespace, are ALL in scope here.
            console.log("outerArg=" + outerArg +
                " middleArg=" + middleArg +
                " innerArg=" + innerArg + "\n" +
                " outerVar=" + outerVar +
                " middleVar=" + middleVar +
                " innerVar=" + innerVar);
            // --------------- THIS WILL LOG: ---------------
            //    outerArg=123 middleArg=456 innerArg=789
            //    outerVar=3 middleVar=4 innerVar=5
        })(789);
    })(456);
})(123);









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
    humps: "I'm Hopping !",
    walk() {
        return ("I'm Hopping");
    },
    __proto__: animal
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
