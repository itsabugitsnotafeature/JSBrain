'use strict'

let checkIfBalances = (str) =>{
    str = [...str];
    let stack = [];
    str.forEach(function(element) {
        switch (element) {
            case '{':
                stack.push(element);
                break;
            case '(':
                stack.push(element);
                break;
            case '[':
                stack.push(element);
                break;
            case ']':
                stack.pop();
                break;
            case ')':
                stack.pop();
                break;
            case '}':
                stack.pop()
                break;
            default:
                return false;
        }
    }, this);
    if(stack.length !== 0){
        return false;
    } else {
        return true;
    }
}


let t1 = '{{{{}}}}{}{}{}{}{}{}{}{}';
let t2 = '{{}'
let t3 = '{()}[]'

console.log( checkIfBalances(t1) );
console.log( checkIfBalances(t2) );
console.log( checkIfBalances(t3) );