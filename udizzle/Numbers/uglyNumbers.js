/* 


    Ugly numbers are numbers whose only prime factors are 2, 3 or 5. 
        The sequence 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, … shows the 
        first 11 ugly numbers. By convention, 1 is included.

    Given a number n, the task is to find n’th Ugly number.

        Input  : n = 7
        Output : 8

        Input  : n = 10
        Output : 12

        Input  : n = 15
        Output : 24

        Input  : n = 150
        Output : 5832
    
    Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. 
        For example, 6, 8 are ugly while 14 is not ugly 
        since it includes another prime factor 7.

    Note that 1 is typically treated as an ugly number.

*/

// DYNAMIC PROGRAMMING METHOD 



// TODO : To REVISE


var getNthUglyByDynamicProgramming = (nth) => {
    let uglyNums = [1];
    let i2 = 0;
    let i3 = 0;
    let i5 = 0;

    let nex_multiple_of_2 = 2;
    let nex_multiple_of_3 = 3;
    let nex_multiple_of_5 = 5;

    let next_ugly = 1;

    for (let i = 1 ; i < nth ; i++) {
        
        next_ugly = Math.min( nex_multiple_of_2, Math.min(nex_multiple_of_3, nex_multiple_of_5) );
        uglyNums.push(next_ugly);

        if(next_ugly = nex_multiple_of_2){
            i2++;
            nex_multiple_of_2 = next_ugly * 2;
        }

        if(next_ugly = nex_multiple_of_3){
            i3++;
            nex_multiple_of_3 = next_ugly * 3;
        }

        if(next_ugly = nex_multiple_of_5){
            i5++;
            nex_multiple_of_5 = next_ugly * 5;
        }
    }
    return next_ugly;
}

console.log(getNthUglyByDynamicProgramming(150));
// process.stdout.write(", " + uglyNumsCache);







// ITERATIVE METHOD 
let uglyNumsCache = [1];

let isNumUgly = (num) => {
    num = maxDivide(num, 2);
    num = maxDivide(num, 3);
    num = maxDivide(num, 5);
    return (num===1) ? true : false;
}

function maxDivide( num, by ){
    while ( num % by === 0 && num > 1){
        num = num / by;
    }
    return num;
}

function getNthUglyNumber(nth) {
    var count = 1;
    var currentNum = 1;

    while (count < nth) {
        if(isNumUgly(currentNum)){
            uglyNumsCache.push(currentNum);
            count++;
        }
        currentNum++;
    }

    return currentNum;
}

// console.log(getNthUglyNumber(10));
// console.log(getNthUglyNumber(15));   // 24
// console.log(getNthUglyNumber(150));
// process.stdout.write(", " + uglyNumsCache);




//  SOME LOODU METHOD
let primes = [1, 2, 3];
let getNthUglyNumber_lodu = (n) => {
    let uglyArray = new Array();
    debugger;
    let num = 1;
    uglyArray.push(num);
    num++;
    while (uglyArray.length !== n){
        if( (num % 2 === 0) || (num % 3 === 0) || (num % 5 === 0) ){
            if (num <= 5) {
                uglyArray.push(num);
            } else if (isUgly(num)){
                uglyArray.push(num);   
            }
        }
        num++;
    }
    return uglyArray[n-1];
}

let isUgly_lodu = (num) => {

    console.log("\n\nisUgly for num => " + num);
    
    // console.log("Check Prime max => " + primes[primes.length - 1 ]);
    if(primes[primes.length - 1 ] < num){
       findPrimesTillN(num);
    }

    console.log("GOT Primes " + primes);
    // see if it has other prime factors othr than 2, 3, 5
    let isUgly = true;
    primes.forEach((primeNum) => {
        if ( primeNum > 5 ){
            if ( num % primeNum === 0){
                isUgly = false;
            }
        }
    });

    return isUgly;
}

let findPrimesTillN_lodu = (maxNum) => {
    let start = primes[primes.length - 1 ] + 1;

    while (start < maxNum){
        var isPrime = true;

        for( let i = 2 ; i < start ; i++ ){
            if(start % i === 0){
                isPrime = false;
            }
        }
        if (isPrime){
            primes.push(start);
        }
        start ++;
    }
    console.log("findPrimesTillN returning with => " + primes);
}



