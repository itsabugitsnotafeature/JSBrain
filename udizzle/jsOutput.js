'use strict'
// Q
/* 
        OUTPUT
    
*/

/* 

*/






// ******* IMP ********
arr = [1,2,3,4,5,6,7,8,9]
arr.slice(-1)
arr.slice(1,4)
arr.slice(-2)
arr.slice(-3)
/* 
    [9]
    [2, 3, 4]
    [8, 9]
    [7, 8, 9]
*/







// ******* IMP ********
function changeParam(x, y, z) {
    x = 3;
    y = "new string";
    z["key2"] = "new";
    z["key3"] = "newer";
    z = {"new" : "object"};
  }
  
  var a = 1,
    b = "something",
    c = {
        "key1" : "whatever", 
        "key2" : "original value"
    };
  
  changeParam(a, b, c);
  
/* 
    a => 1
    b => "something"
    c still points to the same object but its properties have been updated
    so it is now {"key1" : "whatever", "key2" : "new", "key3" : "newer"}
        c definitely doesn't point to the new object created as the last line
        of the function with z = ... 
    c => {key1: "whatever", key2: "new", key3: "newer"}
*/







// ******* IMP ********
var a = ["1", "2", {foo:"bar"}];
var b = a[1];
var c = a[2];
a[1] = "4";
a[2] = "5";
console.log(b);
console.log(c);
console.log(a);
/* 
    b is now "2";
    c now references {foo:"bar"}
    a is now ["1", "4", {foo:"bar"}]; b still has the value
    it had at the time of assignment
    a is now ["1", "4", "5"]; c still has the value
    it had at the time of assignment, i.e. a reference to
    the object {foo:"bar"}
    "2" "bar"
    ANSWER: 
        2
        {foo: "bar"}
        ["1", "4", "5"]
*/







// QQ
var a = ["1", "2", "3"];
var b = a[1];
a[1] = "4";
// what is the value of b now for all possible data types that the array in "a" might hold?
/* 
    b => 2
    a => ["1", "4", "3"]; 
*/



//  QQ
var a = [{yellow: "blue"}, {red: "cyan"}, {green: "magenta"}];
var b = a[1];
a[1].red = "tan";
b.red = "black";
/* 
    a => [{yellow: "blue"}, {red: "black"}, {green: "magenta"}];
    b => {red: "black"}
*/



// QQ
function f(a,b,c) {
    a = 3;
    b.push("foo");
    c.first = false;
 }
 
 var x = 4;
 var y = ["eeny", "miny", "mo"];
 var z = {first: true};
 f(x,y,z);

// What is valye of X, Y, Z
/* 
    x => 4
    y => ["eeny", "miny", "mo", "foo"]
    z => {first: false}
*/







// ******* IMP ********
// Q 43.
var obj = {x:111111};
var obj2 = {x:999999};

(function(){
    setTimeout(() => {
	    console.log(this.x);
    },1000)
}).call(obj2)
/* 
    999999
*/




// Q 42.
let a = [1,2,3];
let b = [1,2,3];
let c = a;

a == b
[1,2,3] == [1,2,3]
[] === []
[] == []
----
c == a
c === a
/* 
    false
    false
    false
    false
    ----
    true
    true
*/




// Q 41. - A
// ******* IMP ********
function foo(){}
console.log(foo.length);
console.log(delete foo.length);
console.log(typeof foo.length);
console.log(foo.length);
/* 
    0
    true
    number
    0
*/








// Q 41. - B
// ******* IMP ********
function foo(){
	return new Array(5);    
}
console.log(foo.length);
console.log(delete foo.length);
console.log(typeof foo.length);
console.log(foo.length);
/* 
    0
    true
    number
    0
*/







// Q 40.
// ******* IMP ********
function foo(a) {
    arguments[0] = 2;
    console.log(a);
}
foo(1);
/* 
    2
*/




// Q 39.
// ******* IMP ********     // "GotAnswer1"
var arr = [];
arr[0]  = 'a';
arr[1]  = 'b';
arr[2]  = 'b';
arr[3]  = 'b';
arr.foo = 'c';
console.log(arr.length);
/* 
    4
*/




// Q 38.
// ******* IMP ******** // "GotAnswer2"
var foo = function bar(){}; 
console.log(typeof bar);
/* 
    undefined
*/





// Q 37.
// ******* IMP ********      // "GotAnswer1"
x = 1;
function bar() {
    this.x = 2;
    return x;
}
var foo = new bar();
console.log(foo.x);
console.log(this.x);
console.log(x);
console.log(bar());
/* 
    2
    1
    1
    2
*/



// Q 36.
// ******* IMP ******** "GotAnswer2"
var x   = 4,
obj = {
    x: 3,
    bar: function() {
        var x = 2;
        setTimeout(function() {
            var x = 1;
            console.log(this.x);
            console.log(x);
        }, 1000);
    }
};
obj.bar();
/* 
    4
    1
*/





// Q 35.
// ******* IMP ******** "GotAnswer2"
var x = 3;
var foo = {
    x: 2,
    baz: {
        x: 1,
        bar: function() {
            return this.x;
        }
    }
}
var go = foo.baz.bar;
console.log(go());
console.log(foo.baz.bar());

/* 
    3
    1
*/









// ******* IMP ******** "GotAnswer1"
// Q 34.
var outerFunction = function () {

    if (true) {
        var x = 5;
        console.log(y);     // line 1
        console.log(test);
    }

    var nestedFunction = function () {

        if (true) {
            var y = 7;
            console.log(x);
            console.log(y);
            console.log(test); 
        }

        if (true) {
            console.log(x);
            console.log(y);
            console.log(test); 
        }
    }
    return nestedFunction;
}
var test = true
var myFunction = outerFunction();
myFunction();
/* 
    line 1, ReferenceError: y not defined
    true
    <-->
    5
    7
    true
    <-->
    5
    7
    true
    <-->
*/





// ******* IMP ********     "//GotAnswer1"
// Q 33. What value is returned from the above statement?
~3.14
~~3.14
~~~9.888
~~~~3.14
~~(-Infinity)
~~(-3.41)
~~(-3)
/* 
    Answer: 
        -4
        3
        -10
        3
        0
        -3
        -3
    Meaning: 
        ~ means =>  
            Explainiation: 
                Remove the Decimal  
                Multiply with -1
                Subtract 1

            Example: 
                ~3 = (3 * -1 ) - 1 => -4
                ~(-3) = ( (-3) * -1 ) - 1 => 2
        ~~ means =>  Do '~' operation TWICE :: ORRRR
            Explainiation: 
                Remove the Decimal  
                Multiply with +1

    JavaScript Bitwise Operators


        Operator	Description	    Example	    Same as	        Result	    Decimal
        &	            AND	        x = 5 & 1	0101 & 0001	    0001    	 1
        |	            OR	        x = 5 | 1	0101 | 0001	    0101    	 5
        ~	            NOT	        x = ~ 5	    ~0101	        1010    	 10
        ^           	XOR	        x = 5 ^ 1	0101 ^ 0001	    0100    	 4
        <<	        Left shift  	x = 5 << 1	0101 << 1   	1010	     10
        >>	        Right shift	    x = 5 >> 1	0101 >> 1   	0010	     2

    NOTE: 
        The examples above uses 4 bits unsigned examples. But JavaScript uses 32-bit signed numbers.
        Because of this, in JavaScript, ~ 5 will not return 10. It will return -6.
        ~00000000000000000000000000000101 will return 11111111111111111111111111111010
*/





// Q 32. What value is returned from the above statement?
"a lasagna hog".split("").reverse().join("")
/* 
    Answer: "goh angasal a"

*/





// Q 31. What is the value of window.foo?
(window.foo || (window.foo = "bar"))
/* 
    Answer: "bar"

*/






// Q 30. What is the outcome of the two console.logs above?
var foo = "Hello"
(function () {
    var bar = " World"
    console.log(foo + bar)
})()
console.log(foo + bar)
/* 
    Answer: 
    "Hello World" 
    ReferenceError: bar is not defined
*/






// Q 29.
// how to tell if an object is an array 
let a = [1, 2, 3]
typeof a // object

/* 
    Object.prototype.toString.call(a)   // '[object Array]'
    // OR 
    Array.isArray(a)    // true
*/






// Q 28.
let a0 = () => {
    return true;
};
let a1 = [];
let a2 = {};
let a3 = null;

typeof a0
typeof a1
typeof a2
typeof a3
/* 
    function
    object
    object
    object
*/




// ******* IMP ********     "//GotAnswer1"
// Q 27.
(function () {
    var a = b = 3;
})();
console.log((typeof a === 'undefined'));
console.log((typeof b === 'undefined'));
console.log(a);
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
        will generate a runtime error of 
            ReferenceError: b is not defined, 
        thereby avoiding any headfakes/bugs that might othewise result. 
        (Yet another prime example of why you 
        should use use strict as a matter of course in your code!)
*/




// ******* IMP ********     "//GotAnswer1"
// Q 26.
var myObject = {
    foo: "bar",
    func: function () {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function () {
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




// ******* IMP ********     "//GotAnswer1"
// Q 25.
typeof NaN
NaN === NaN
NaN == NaN
/* 
    Number 
    false
    false
*/





// Q 24.
(function () {
    console.log(1);
    setTimeout(function () { console.log(2) }, 1000);
    setTimeout(function () { console.log(3) }, 0);
    console.log(4);
})();

/* 
    1
    4
    3
    2
*/






// Q 23.
// ******* IMP ******** "GotAnswer1"
// Write a function that can run both statements below
console.log(sum(2, 3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5

/* 
    function sum(a,b){
        if(!b){
            return (function(b){
                return a+b;
            })
        } else {
            return a+b;
        }
    }
    // sum(2,3) => 5
    // sum(2)(3) => 5

*/




// Q 22.
// ******* IMP ******** "GotAnswer1"
for (var i = 0; i < 5; i++) {
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('Button ' + i));
    btn.addEventListener('click', function () { console.log(i); });
    document.body.appendChild(btn);

}
btn.click();
/* 
    OUTPUT: 5
*/

/* 
    // Sol1:
    for (let i = 0; i < 5; i++) {
        var btn = document.createElement('button');
        btn.appendChild(document.createTextNode('Button ' + i));
        btn.addEventListener('click', function () { console.log(i); });
        document.body.appendChild(btn);
    }
    // Sol2:
    for (var i = 0; i < 5; i++) {
        var btn = document.createElement('button');
        btn.appendChild(document.createTextNode('Button ' + i));
        (function (i) {
            btn.addEventListener('click', function () { console.log(i); });
        })(i);
        document.body.appendChild(btn);
    }
    // Sol3:
    var btn;
    ['a', 'b', 'c', 'd', 'e'].forEach(function (value, i) {
            btn = document.createElement('button');
            btn.appendChild(document.createTextNode('Button ' + i));
            btn.addEventListener('click', function () { console.log(value); });
            document.body.appendChild(btn);
        });
    btn.click()

*/




 // ******* IMP ********
// Q 21.
var d = {};
['zebra', 'horse'].forEach(function (k) {
    d[k] = undefined;
});
d.hasOwnProperty();
d.horse;
d.xyz;
d.hasOwnProperty('zebra');
d.hasOwnProperty('horse');
d.hasOwnProperty('xyz');
/* 
    undefined
    undefined 
    undefined 
    true
    true 
    false
*/




// Q 20.
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
    Becasue, 
        var arr1 = "john".split('');
        var arr2 = arr1.reverse();
        var arr3 = "jones".split('');
        arr2.push(arr3);
    This can be broken down to, 
        var arr1 = "john".split('');
        
        arr1.reverse();
        var arr2 = arr1;

        var arr3 = "jones".split('');
        
        arr2.push(arr3); [ also meaning arr1.push ]
        Becasue arr2 == arr1 => true

*/





// ******* IMP ********
// Q 19.
(1 + "2" + "2");
(1 + +"2" + "2");
(1 + -"1" + "2");
(+"1" + "1" + "2"); 
("A" - "B" + "2");
("A" - "B" + 2);
/* 
    "122"
     32
    "2"
    "112"
    "NaN2"
     Nan
*/





// Q 18.
+"1"    // ******* IMP ********
-"1"
-"+1"
-"-1"

/* 
     1
    -1
    -1
     1
*/




// Q 17.
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



// Q 16.
// ******* IMP ********     //"GotAnswer1"
for (var i = 0; i < 5; i++) { 
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
     5 5 5 5 5
     0 1 2 3 4
     0 1 2 3 4
*/





// Q 15. 
console.log("0 || 1 = " + (0 || 1));
console.log("1 || 2 = " + (1 || 2));    // ******* IMP ********
65 || 47
47 || 65
console.log("0 && 1 = " + (0 && 1));
console.log("1 && 2 = " + (1 && 2));    // ******* IMP ********
/* 

    1
    1
    0
    2

*/






// Q 14. 
false == 0
false == '0'    // ******* IMP ********
false == +'0'
false == 0 + '0' // ******* IMP ********
false === 0
/* 
    true
    true
    true
    true
    false
*/






// Q 13. 
true == 1
true == '1'
true == 0 + '1'
true == '0' + '1' + '0' 
true == '0' + '1'
true === 1
/* 
    true
    true
    true
    false
    true
    false
*/




// Q 12. 
var a = {},
    b = { key: 'b' },
    c = { key: 'c' };

a[b] = 123;
a[c] = 456;
console.log(a[b]);
/* 
    456
    BECAUSE: 
    b and c get translated to 
    a["[object Object]"]

*/




// Q 11. 
(function f(n) {
    return (
        (n > 1) ? n * f(n - 1) : n
    )
})(10)
/* 
    // Ten factorial
    // 3628800
*/




// Q 10. 
(function (x) {
    // 	x = 1
    return (function (y) {
        // 	y = 2
        console.log(x);
    })(2)
    console.log(y);
})(1);
/* 
    1
    undefined
*/





// Q9. 
var hero = {
    _name: 'John Doe',
    getSecretIdentity: function () {
        return this._name;
    }
};
var stoleSecretIdentity = hero.getSecretIdentity;
console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());
console.log(stoleSecretIdentity.apply(hero));
console.log(stoleSecretIdentity.call(hero));

/* 
    // undefined
    // John Doe
    // John Doe
    // John Doe

    // Solution 1
        stoleSecretIdentity = hero.stoleSecretIdentity.bind(hero);

    // Solution 2
        stoleSecretIdentity.apply(hero)
        stoleSecretIdentity.call(hero)
*/





// Q8. 
// ******* IMP ********     //GotAnswer1
var length = 10;

function fn() {
    console.log(this.length);
}
var obj1 = {
    length: 5,
    method: function (fn) {
        fn();
        arguments[0]();
    }
};
var obj2 = {
    length: 5,
    method: function (fn) {
        fn.apply(this);
        arguments[0]();
    }
};
// Scenario 1
obj1.method(fn, 1);
// Scenario 2
obj2.method(fn, 1);
/* 

    // Scenario 1
        10
            fron vanilla call for fn()
        2
            In second call , arguments[0]()
            this refers to arguments, 
            and total length for arguments is 2 now
            Therefore for fn, this.length = 2;

    // Scenario 2
        5
        2

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
        console.log("i => " + i + " interval => " + (Date.now() - starttime));
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
console.log(typeof typeof 1);
typeof undefined == typeof null
console.log(1 < 2 < 3);
console.log(3 > 2 > 1);
3 > 2 == 1                          
3 > 2 === 1                         
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




// Q1 - A . What will be the output.
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
    return (num);
};
var f = new Foo(7);
f.num;
f.bar();
f.baz();
f.biz();
/* 
        OUTPUT
    7
    Uncaught TypeError: f.bar is not a function
    Uncaught TypeError: f.bar is not a function
    ReferenceError: num is not defined
*/

// Q1 - B . What will be the output.
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