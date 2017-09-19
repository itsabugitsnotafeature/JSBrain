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

let isHappy = function(n) {
    n = n.toString();
    let components = [...n];
    let sum = 0;
    components.forEach((val)=>{
        sum += Math.pow(parseInt(val), 2);
    });
    if(sum === 1) {
        return true;
    } else {
        return isHappy(sum);
    }
};
console.log("IsHappy: "+ isHappy(19));

console.log("\n\nIsHappyWithFailsafe: "+ isHappyWithFailsafe(19,0,9999));