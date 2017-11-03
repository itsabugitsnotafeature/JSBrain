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



















































































































