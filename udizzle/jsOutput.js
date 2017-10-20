'use strict'
// Q
/* 
        OUTPUT
    
*/






// how to tell if an object is an array 
let a = [1,2,3]
typeof a    // object
Object.prototype.toString.call(a)   // '[object Array]'
// OR 
Array.isArray(a)    // true





let a0 = () =>{
	return true;
};
let a1 = [];
let a2 = {};
let a3 = null;
function a4(){return true};

typeof a0
typeof a1
typeof a2
typeof a3

/* 
    function
    object
    object
    object
    function
*/






(function(){
    var a = b = 3;
  })();

console.log((typeof a === 'undefined'));
console.log((typeof b === 'undefined'));
console.log(b);

/* 
    true
    false
    3

    But in fact, var a = b = 3; is actually shorthand for:

    b = 3;
    var a = b;
    As a result (if you are not using strict mode), 
        the output of the code snippet would be:

    a defined? false
    b defined? true
    But how can b be defined outside of the scope of the 
        enclosing function? Well, since the statement var a = b = 3; 
        is shorthand for the statements b = 3; and var a = b;, b ends 
        up being a global variable (since it is not preceded by the var keyword) 
        and is therefore still in scope even outside of the enclosing function.

    Note that, in strict mode (i.e., with use strict), the statement var a = b = 3; 
        will generate a runtime error of ReferenceError: b is not defined, thereby avoiding 
        any headfakes/bugs that might othewise result. (Yet another prime example of why you 
        should use use strict as a matter of course in your code!)
*/




var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();
/* 
    bar 
    bar 
    undeifned 
    bar
*/




// ******* IMP ********// ******* IMP ********
typeof NaN
NaN === NaN
NaN == NaN
/* 
    Number 
    false
    false
*/




(function() {
    console.log(1); 
    setTimeout(function(){console.log(2)}, 1000); 
    setTimeout(function(){console.log(3)}, 0); 
    console.log(4);
})();

/* 
    1
    4
    3
    2
*/






// ******* IMP ********// ******* IMP ********
// Write a function that can run both statements below

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5

function sum(a,b){
    if(!b){
        return (function(b){
            return a+b;
        })
    } else {
        return a+b;
    }
}
/* 
    // sum(2,3) => 5
    // sum(2)(3) => 5

*/




for (let i = 0; i < 5; i++) {
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('Button ' + i));
    btn.addEventListener('click', function () { console.log(i); });
    document.body.appendChild(btn);     // ******* IMP ********// ******* IMP ********
}
btn.click();
//OUTPUT: 5

// Sol1:
for (let i = 0; i < 5; i++) {
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('Button ' + i));
    btn.addEventListener('click', function(){ console.log(i); });
    document.body.appendChild(btn);
}
// Sol2:
for (var i = 0; i < 5; i++) {
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('Button ' + i));
    (function (i) {
        btn.addEventListener('click', function() { console.log(i); });
    })(i);
    document.body.appendChild(btn);
}
// Sol3:
['a', 'b', 'c', 'd', 'e'].forEach(function (value, i) {
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('Button ' + i));
    btn.addEventListener('click', function() { console.log(i); });
    document.body.appendChild(btn);
});





var d = {};
['zebra', 'horse'].forEach(function (k) {
    d[k] = undefined;
});
d.d.hasOwnProperty()
d.horse
d.xyz
d.hasOwnProperty('zebra')
d.hasOwnProperty('horse')
d.hasOwnProperty('xyz')
/* 
    undefined
    undefined 
    undefined 
    true
    true 
    false
*/



// ******* IMP ********
// ******* IMP ********
// ******* IMP ********
// ******* IMP ********
var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));
/* 
    "array 1: length=5 last=j,o,n,e,s"
    "array 2: length=5 last=j,o,n,e,s"
*/



(1 + "2" + "2");    // ******* IMP ********
(1 + +"2" + "2");
(1 + -"1" + "2");
(+"1" + "1" + "2");
("A" - "B" + "2");
("A" - "B" + 2);
/* 
    "122"
    32
    "2"
    "122"
    "NaN2"
    Nan
*/

+"1"    // ******* IMP ********
    - "1"
    - "+1"
    - "-1"
/* 
    1
    -1
    -1
    1
*/


var globalVar = "xyz";
(function outerFunc(outerArg) {
    var outerVar = 'a';
    (function innerFunc(innerArg) {
        var innerVar = 'b';
        console.log(
            "outerArg = " + outerArg + "\n" +
            "innerArg = " + innerArg + "\n" +
            "outerVar = " + outerVar + "\n" +
            "innerVar = " + innerVar + "\n" +
            "globalVar = " + globalVar);
    })(456);
})(123);

/*
    123
    456
    a
    b
    xyz
*/




for (var i = 0; i < 5; i++) { // ******* IMP ********
    setTimeout(function () {
        console.log(i);
    }, (i * 1000));
}
for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, (i * 1000));
}
for (var i = 0; i < 5; i++) {
    (function (i) {
        setTimeout(function () {
            console.log(i);
        }, (i * 1000));
    })(i);
}
/* 
    //  5 5 5 5 5
    //  0 1 2 3 4
    //  0 1 2 3 4
*/

console.log("0 || 1 = " + (0 || 1));
console.log("1 || 2 = " + (1 || 2));
console.log("0 && 1 = " + (0 && 1));
console.log("1 && 2 = " + (1 && 2)); // ******* IMP ********
/* 

    // 1
    // 1
    // 0
    // 2    // ******* IMP ********

*/

false == 0
false == '0'    // ******* IMP ********
false == +'0'
false == 0 + '0' // ******* IMP ********
false === 0

/* 
    // true
    // true
    // true
    // true
    // false
*/


true == 1
true == '1'
true == '1'
true == 0 + '1'
true == '0' + '1'
true === 1

/* 
    // true
    // true
    // true
    // true
    // true
    // false
*/


var a = {},
    b = { key: 'b' },
    c = { key: 'c' };

a[b] = 123;
a[c] = 456;

console.log(a[b]);
/* 
    // 456
    // BECAUSE: 
    // b and c get translated to 
    // a["[object Object]"]

*/


(function f(n) {
    return (
        (n > 1) ? n * f(n - 1) : n
    )
})(10)
/* 
    // Ten factorial
    // 3628800
*/

(function (x) {
    // 	x = 1
    return (function (y) {
        // 	y = 2
        console.log(x);
    })(2)
})(1);
/* 
    // 1

*/

var hero = {
    _name: 'John Doe',
    getSecretIdentity: function () {
        return this._name;
    }
};
var stoleSecretIdentity = hero.getSecretIdentity;
console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());

/* 

    // Undefined 
    // John Doe 
    // Solution 1
    stoleSecretIdentity = hero.stoleSecretIdentity.bind(hero);

    // Solution 2
    stoleSecretIdentity.apply(hero)
    stoleSecretIdentity.call(hero)


*/



// Q8. 
// ******* IMP ********
var length = 10;
function fn() {
    console.log(this.length);
}

var obj = {
    length: 5,
    method: function (fn) {
        fn();
        arguments[0]();
    }
};
obj.method(fn, 1);
/* 
    10
        fron vanilla call for fn()
    2
        In second call , arguments[0]()
        this refers to arguments, 
        and total length for arguments is 2 now
        Therefore for fn, this.length = 2;
*/


// Q7. 
(function () {
    try {
        throw new Error();
    } catch (x) {
        console.log("error is: " + x);
        var x = 1,
            y = 2;
        console.log(x);
        console.log(y);
    }
    console.log(x);
    console.log(y);
})();
/* 
    "error is: Error"
    1
    2
    undefined // This is becasue  error’s identifier is only visible inside the catch block.
    2 
*/




// Q6
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl();
/* 
    undefined
*/





//Q5 
// How do you clone an object without using 3rd party library?
/* 
    let obj = { a: 1 }
    var objclone = Object.assign({}, obj);
*/


//Q4.  
// What will be the output of the following. 
// Scenario 1:
for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, i * 1000);
}
// Versus
// Scenario 2:
for (var i = 0; i < 5; i++) {
    var starttime = Date.now();
    setTimeout(function () {
        console.log("i => " + i + " interval => " + (Date.now() - starttime) );
    }, i * 1000);
}

/* 
    Return time ID first 
        Then 0 to 4 with only 1 second interval
        interval DOES increase with increasing value of I
            becasue we used let 
            i is not visible outside for loop
            therefore, i*1000 will always be 1000
    OUTPUT 1: 
        <some-id> : like 5 
        i => 0 interval => 1        // Runs immediately, since I = 0 
        i => 1 interval => 1002 
        i => 2 interval => 2000
        i => 3 interval => 3002
        i => 4 interval => 4001
        

    OUTPUT 2: 
        <some-id> : like 5 
        i => 5 interval => 1        // Runs immediately, since I = 0 
        i => 5 interval => 1002 
        i => 5 interval => 2000
        i => 5 interval => 3002
        i => 5 interval => 4001
        
*/




//Q3.  How do you add an element at the begining of an array? How do you add one at the end?
let a = [2, 3, 4, 5];
/* 

    Option1:
    a = [1, ...a, 6];
    Option2:
    a = unshift(1);
    a = push(6);

*/



// Q2. 
console.log(typeof typeof 1);       // stinrg
typeof undefined == typeof null     // false
console.log(1 < 2 < 3);             // true
console.log(3 > 2 > 1);             // false
3 > 2 == 1                          // true 
3 > 2 === 1                         // false 
/* 
        OUTPUT
    string
    false [TRUE DUDE]
        typeof undefined => undefined
        typeof null => object
    true
        1 < 2 < 3 => true < 3 => true (since true = 1)
    false
         3 > 2 > 1 => true > 1 => false
    true
        3 > 2 == 1 => true == 1 => true
    false
        3 > 2 === 1 => true === 1 => false

*/




// Q1. What will be the output.
var Foo = function (a) {
    this.num = a;
    function bar() {
        return a;
    }
    function baz() {
        return a;
    };
};
Foo.prototype.biz = function () {
    return (this.num);
};
var f = new Foo(7);
f.bar();
f.baz();
f.biz();
/* 
        OUTPUT
    ERROR: undefined
    ERROR: undefined
    7
*/
var Foo = function (a) {
    this.num = a;
    this.bar = () => {
        return a;
    }
    this.baz = () => {
        return a;
    };
};
Foo.prototype.biz = function () {
    return (this.num);
};
var f = new Foo(7);
f.bar();
f.baz();
f.biz();
/* 
        OUTPUT
    7
    7
    7
*/