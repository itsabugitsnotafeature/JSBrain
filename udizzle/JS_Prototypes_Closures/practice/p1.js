


// 4.
// MIXINS

var asCircle = function() {
    this.area = function() {
      return Math.PI * this.radius * this.radius;
    };
    this.grow = function() {
      this.radius++;
    };
    this.shrink = function() {
      this.radius--;
    };
    return this;
  };
   
  var Circle = function(radius) {
      this.radius = radius;
  };
  
  asCircle.call(Circle.prototype);
  
  var circle1 = new Circle(5);
  
  circle1.area(); // 78.53981633974483


// 3
// FUnction COMPOSITION 

let canPoop = {
    canPoop() {
        return true
    }
}
let canEat = {
    canEat() {
        return true
    }
}
let canHop = {
    canHop() {
        return true
    }
}
let canCrawl = {
    canCrawl() {
        return true
    }
}

let rabbit = Object.assign({}, canPoop, canEat, canHop)


// 2 - B
// Chaining child objects to parent functions and inheriting behavior 

function sayHi(){
    console.log("Hi There !!")
}

let talker = {
    name:"Mr Deeds"
}

talker.__proto__.talk = sayHi
talker.talk();
// "Hi There !!"



// 2 - A
// Chaining child classe objects  to parent classes and inheriting behavior 

class Animal{
    constructor(name){
        this.name = name;
    }
    walk(){
        console.log("new walking");
    }
}

class Rabbit extends Animal{
    constructor(name){
        super(name);
        this.hops = true;
    }
    walk(){
        console.log("new hopping");
    }
}

let r1 = new Rabbit('babbit')
// r1.name
// "babbit"
// r1.walk()
// VM15463:18 new hopping







// ONE
// Assigning objects as objects to other objects prototypes
let animal = {
    poop: true,
    walk(){
        console.log("walking");
    }
}
let rabbit = {
    hops: true,
    __proto__: animal
}

let rabbit2 = {
    hops: true,
}
rabbit2.__proto__ = animal;
rabbit2.__proto__.walk = function() {
    console.log("I hop dude")
}


