// Convert a String to Integer.

// aToI("111") => 111
// aToI("143") => 43
// aToI("0") => 0
// aToI("-984") => -984
// aToI("-3.14") => -3.14

function aToI(str) {
    if( typeof str !== 'string' ){
        return null;
    }
    let last = str[str.length-1].charCodeAt(0) - 48;
    last = (str[0] == "-" && last * -1) || last
    let new_str = str.slice(0,str.length-1);
    debugger;
    return (new_str != "" && new_str != "-") && (10 * aToI(new_str) + last) || last; 
}

console.log(aToI("1"));
console.log(aToI("43"));
console.log(aToI("541"));
console.log(aToI("-43"));



// ITERATIVE SOLUTION 

function aToI(str){
    let result = 0;
    let num;
    let isNegative = false;
    let i = 0;
    
    if(str[0] === '-'){
      i = 1;
      isNegative = true;
    }
    
    for(; i<=(str.length -1) ; i++ ){
      num = (str[i].charCodeAt(0) - 48);
      result += (num * (Math.pow(10,(str.length - i - 1))))
    }
    if(isNegative) {
      result *= (-1);
    }
    return result;
}
  
console.log(aToI("-78349"));
console.log(aToI("-111"));
console.log(aToI("111"));
console.log(aToI("9876543210"));
