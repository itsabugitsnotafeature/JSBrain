'use strict'

/* 
    1. Module / Modular Pattern
        Source: 
            https://javascriptplayground.com/blog/2012/04/javascript-module-pattern/
        More about this pattern:
            https://toddmotto.com/mastering-the-module-pattern/
*/

/* 
    Lets say you’ve got a little library like this, 
        that just increments a number:
    
    People using this library are able to do 
        jspy.count = 5 
        to manually adjust the value. 
    
    Lets say for the purpose of this tutorial, 
        that USERS SHOULD NOT BE ABLE TO DO THAT.

*/
var jspy = {
    count: 0,

    incrementCount: function () {
        this.count++;
    },

    decrementCount: function () {
        this.count--;
    },

    getCount: function () {
        return this.count;
    }
};

/* 
        Solution: Module Pattern
    
    Notice I’ve wrapped the entire library in a self-invoking anonymous function. 
    
    This is a function that’s executed immediately at runtime. 
    
    The function runs, defines the variables & functions and then hits 
        the return {} statement, telling this function what to 
        return to the variable jspy, or in other words, what to expose to the user. 
    
        I chose to expose the two functions but not the _count variable, 
        which means I can do this:

*/
var jspy = (function () {
    var _count = 0;

    var incrementCount = function () {
        _count++;
    }

    var getCount = function () {
        return _count;
    }
    // Notice how user can only access the two functions
    // and not the inner variables
    return {
        incrementCount: incrementCount,
        getCount: getCount
    };

})();


// Alternative Approach #1
var jspy = (function () {
    var _count = 0;

    return {
        incrementCount: function () {
            _count++;
        },
        getCount: function () {
            return _count;
        }
    };
})();

// Alternative Approach #2
var jspy = (function () {
    var _count = 0;
    var incrementCount = function () {
        _count++;
    };
    var resetCount = function () {
        _count = 0;
    };
    var getCount = function () {
        return _count;
    };
    return {
        add: incrementCount,
        reset: resetCount,
        get: getCount
    };
})();


// MORE TODO: https://scotch.io/bar-talk/4-javascript-design-patterns-you-should-know






























