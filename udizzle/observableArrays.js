'use strict'

var MyObservableArray = function(callback) {
    var arr = [];
    arr.push = function() {
        callback(arguments);
        return Array.prototype.push.apply(this, arguments);
    }
    return arr;
};

let callbackFunc = (event) => {
    console.log('called callback');
    console.log("event", event);
    console.log('DONE with callback!\n');
}

var arr = new MyObservableArray(callbackFunc);
arr.push(12, 3, 45);
console.log(arr, arr[2]);






























































































var sayM = {
    say(phrase){
        console.log(phrase)
    }
}

var sayHiM = {
    __proto__ : sayM,
    sayHi(thing){
        super.say("Hi + " + thing);
    }
}

function User(name){
    this.name = name;
}

Object.assign(User.prototype, sayHiM );

var u1 = new User('lol')











var say = {
    say(phrase){
        console.log(phrase);
    }
}

var sayHi = {
    __proto__: say,
    hi(name){
        super.say(" Hi => " + name);
    }
}

function User (name){
    this.name = name;
}

Object.assign(User.prototype, sayHi);

var u1 = new User('foo')


