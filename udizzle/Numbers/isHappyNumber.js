/* 
    Write an algorithm to determine if a number is "happy".

    A happy number is a number defined by the following process: 
    Starting with any positive integer, 
        replace the number by the sum of the squares of its digits, 
        and repeat the process until the number equals 1 
        (where it will stay), 
    Or it loops endlessly in a cycle which does not include 1. 

    Those numbers for which this process ends in 1 are happy numbers.

    Example: 19 is a happy number

    1^2 + 9^2 = 82
    8^2 + 2^2 = 68
    6^2 + 8^2 = 100
    1^2 + 0^2 + 0^2 = 1

    Credits:
    Special thanks to @mithmatt and @ts for adding this problem 
    and creating all test cases.
*/


let isHappyNum = (num, iter) => {
    if(!iter) {
        iter = 1;
    } 
    if(iter > 9999){
        console.log("Too deep!");
        return false;
    }

    if (num < 0) {
        return false;
    }

    if (num < 10 && num!==1) {
        return false;
    }

    if (num===1) {
        return true;
    }

    num = [...num.toString()];
    let sum = 0;
    for(let i=0 ; i < num.length ; i++){
        sum += Math.pow(parseInt(num[i]), 2)
    }
    return isHappyNum(sum, iter+1);
}


let isHappyWithFailsafe = function(n, attempt, MAX_ATTEMPT) { 
    if(attempt > MAX_ATTEMPT){
        return false;
    }
    n = n.toString();
    let components = [...n];
    let sum = 0;
    components.forEach((val)=>{
        sum += Math.pow(parseInt(val), 2);
    });
    if(sum === 1) {
        console.log("Returning after %d Attempts.", attempt );
        return true;
    } else {
        return isHappyWithFailsafe(sum, ++attempt, MAX_ATTEMPT);
    }
};

let isHappy = function(n, attempt) {
    if(!attempt){
        attempt = 0;
    } else if(attempt > 4030){
        return false;
    }
    n = n.toString();
    let components = [...n];
    let sum = 0;
    components.forEach((val)=>{
        sum += Math.pow(parseInt(val), 2);
    });
    if(sum === 1) {
        return true;
    } else {
        return isHappy(sum, ++attempt);
    }
};
console.log("IsHappy: "+ isHappy(19));
console.log("IsHappy: "+ isHappy(2));
console.log("\n\nIsHappyWithFailsafe 19: "+ isHappyWithFailsafe(19,0,9999));
console.log("\n\nIsHappyWithFailsafe 2: "+ isHappyWithFailsafe(2,0,4030));