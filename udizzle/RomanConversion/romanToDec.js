/*
*  Function to convert Given Roman number to 
*  its Deciman Equavalent.
*/

// SIMPLE ASSERT FUNCTION
function assert(isValue, expectedValue) {
    if (!(isValue === expectedValue)) {
        console.log("Expected calculated value:" + isValue +
            " to be Equal to:" + expectedValue);
        return false;
    }
    return true;
}

function romanToDec(str) {
    debugger
    if( !str || (typeof str != 'string') || (str === '')) {
        return null;
    }
    str = str.toUpperCase();

    let result = 0;
    let decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];                   // The result is now a number, not a string
    let roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];    //   THIS IS WHERE ALL THE MAGIC HAPPENS

    for (let i = 0; i <= decimal.length; i++) {
        while (str.indexOf(roman[i]) === 0) {
            result += decimal[i];
            str = str.replace(roman[i], '');
        }
    }
    return result;
}

let decToRoman = (num) => {
    if( !num || isNaN(num) || (num === 0)  || (num < 0))  {
        return null;
    }

    let result = '';
    let decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    debugger
    while ( num > 0 ) {
        for(let i=0; i<decimal.length; i++){
            if( num === decimal[i]){
                result += roman[i];
                num = 0;
            } else if (num > decimal[i]){
                result += roman[i];
                num -= decimal[i];
                i=0;
            } else {
                continue;
            }
        }
    }
    return result;
}



/* 
 *    TC for converting 
 *      Decimal Number  ->>  Roman Numeral
 */ 

console.log( assert(decToRoman(117), "CXVII"));
console.log( assert(decToRoman(30), "XXX"));
console.log( assert(decToRoman(23), "XXIII"));
console.log( assert(decToRoman(14), "XIV"));
console.log( assert(decToRoman(38), "XXXVIII"));
console.log( assert(decToRoman(29), "XXIX"));
console.log( assert(decToRoman(0), null));
console.log( assert(decToRoman(23),'XXIII'));
console.log( assert(decToRoman(4),'IV'));
console.log( assert(decToRoman(1),'I'));
console.log( assert(decToRoman(5),'V'));

 

/* 
 *    TC for converting 
 *      Roman Numeral  ->> Decimal Number 
 */

/* console.log( assert(romanToDec("I"), 1));
console.log( assert(romanToDec("V"), 5));
console.log( assert(romanToDec("X"), 10));
console.log( assert(romanToDec("IV"), 4));
console.log( assert(romanToDec("IX"), 9));
console.log( assert(romanToDec("XXX"), 30));
console.log( assert(romanToDec("XXIII"), 23));
console.log( assert(romanToDec("XIV"), 14));
console.log( assert(romanToDec("XXXVIII"), 38));
console.log( assert(romanToDec("XXIX"), 29));
console.log( assert(romanToDec("i"), 1) );
console.log( assert(romanToDec("V"), 5) );
console.log( assert(romanToDec("x"), 10) );
console.log( assert(romanToDec("iv"), 4) );
console.log( assert(romanToDec("ix"), 9) ); */