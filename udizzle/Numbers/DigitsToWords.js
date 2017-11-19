'use strict'

/* 
    #PracticeThis
    Convert digits into words with JavaScript

    Source: 
        https://gist.github.com/madan712/be79a395424bf773be87

*/

let digitsToWords = (num) => {
    let units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 
                'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen,',
                'eighteen', 'nineteen' ];

    let tens = ['', '', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred' ];

    if (num <= 0){
        return '';
    }
    // Returning units val
    if (num < 20){
        return units[num];
    }
    
    // Returning tens val
    if(num < 100){
        let tensVal = tens[(Math.floor(num/10))];
        let unitsVal = units[num % 10];
        return tensVal + ' ' + unitsVal ;
    }

    // Returning hundreds val
    if(num < 1000){
        let hundredsVal = digitsToWords( Math.floor(num/100) ) + ' hundred ';
        let tensVal = digitsToWords( Math.floor( num % 100 ) );        
        return hundredsVal + tensVal;
    }

    // Returning thousands val
    if(num < 100000){
        let thousandsVal = digitsToWords( Math.floor(num/1000) ) + ' thousand ';
        
        let hundredsVal = '';
        let tensVal = '';

        if(num % 1000 > 99){
            hundredsVal = digitsToWords( Math.floor(num % 1000) );
        } else {
            tensVal = digitsToWords( Math.floor( num % 100 ) );        
        }
        
        return thousandsVal + hundredsVal + tensVal;
    }

    


}
debugger
console.log(digitsToWords(86519) === 'eighty six thousand five hundred nineteen');
console.log(digitsToWords(9999) === 'nine thousand nine hundred ninety nine');
console.log(digitsToWords(5264) === 'five thousand two hundred sixty four');
console.log(digitsToWords(3014) === 'three thousand fourteen');
console.log(digitsToWords(3004) === 'three thousand four');
console.log(digitsToWords(100) === 'one hundred ');
console.log(digitsToWords(103) === 'one hundred three');
console.log(digitsToWords(986) === 'nine hundred eighty six');
console.log(digitsToWords(916) === 'nine hundred sixteen');
console.log(digitsToWords(906) === 'nine hundred six');










/* 
    
    Source: 
        https://gist.github.com/madan712/be79a395424bf773be87

*/

let convert = (n) => {
    let units = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", 
    "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", 
    "Eighteen", "Nineteen"];

    let tens = [ "", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety" ];

    if (n < 0) {
        return "Minus " + convert(-n);
    }

    if (n < 20) {
        return units[n];
    }

    if (n < 100) {
        return tens[Math.floor(n / 10)] + ((n % 10 != 0) ? " " : "") + units[n % 10];
    }

    if (n < 1000) {
        return units[Math.floor(n / 100)] + " Hundred" + ((n % 100 != 0) ? " " : "") + convert(n % 100);
    }

    if (n < 100000) {
        return convert(Math.floor(n / 1000)) + " Thousand" + ((n % 10000 != 0) ? " " : "") + convert(n % 1000);
    }

    if (n < 1000000000) {
        return convert(Math.floor(n / 1000000)) + " Million" + ((n % 1000000 != 0) ? " " : "") + convert(n % 100000);
    }
    let top = convert(Math.floor(n / 1000000000)) + " Billion" ;
    let middle = ((n % 1000000000 != 0) ? " " : "") ;
    let tail = convert(n % 1000000000);
    return top + middle + tail;

    // return convert(Math.floor(n / 1000000000)) + " Billion" + ((n % 1000000000 != 0) ? " " : "") + convert(n % 1000000000);
}
debugger
/* 
    console.log( '\n'+ convert(11009));
    //=> eleven thousand nine

    console.log( '\n'+ convert(10000001));
    //=> ten million one 

    console.log( '\n'+ convert(987));
    //=> nine hundred eighty-seven

    console.log( '\n'+ convert(1015));
    //=> one thousand fifteen

    console.log( '\n'+ convert(55111222333));
    //=> fifty-five billion one hundred eleven million two hundred 
    //   twenty-two thousand three hundred thirty-three

*/


/* 
    HI - FI Method
    Source: 
        https://stackoverflow.com/a/30524915
 */
const convertToArray = x => Array.from(x);

const num = x => Number(x) || 0;

const str = x => String(x);

const isEmpty = xs => xs.length === 0;

const take = n => xs => xs.slice(0, n);

const drop = n => xs => xs.slice(n);

const reverse = xs => xs.slice(0).reverse();

const comp = f => g => x => f(g(x));

const not = x => !x;

const chunk = n => xs =>
    isEmpty(xs) ? [] : [take(n)(xs), ...chunk(n)(drop(n)(xs))];


let convertToWords = n => {

    let a = [
        '', 'one', 'two', 'three', 'four',
        'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
        'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];

    let b = [
        '', '', 'twenty', 'thirty', 'forty',
        'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];

    let g = [
        '', 'thousand', 'million', 'billion', 'trillion', 'quadrillion',
        'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion'
    ];

    // this part is really nasty still
    // it might edit this again later to show how Monoids could fix this up
    let makeGroup = ([ones, tens, huns]) => {
        return [
            num(huns) === 0 ? '' : a[huns] + ' hundred ',
            num(ones) === 0 ? b[tens] : b[tens] && b[tens] + '-' || '',
            a[tens + ones] || a[ones]
        ].join('');
    };

    let thousand = (group, i) => group === '' ? group : `${group} ${g[i]}`;

    if (typeof n === 'number')
        return convertToWords(String(n));
    else if (n === '0')
        return 'zero';
    else
        return comp(chunk(3))(reverse)(convertToArray(n))       // chunk(3) (reverse (convertToArray(n)));
            .map(makeGroup)
            .map(thousand)
            .filter(comp(not)(isEmpty))
            .reverse()
            .join(' ');
};

/* 

console.log(convertToWords(11009));
//=> eleven thousand nine

console.log(convertToWords(10000001));
//=> ten million one 

console.log(convertToWords(987));
//=> nine hundred eighty-seven

console.log(convertToWords(1015));
//=> one thousand fifteen

console.log(convertToWords(55111222333));
//=> fifty-five billion one hundred eleven million two hundred 
//   twenty-two thousand three hundred thirty-three

console.log(convertToWords("999999999999999999999991"));
//=> nine hundred ninety-nine sextillion nine hundred ninety-nine
//   quintillion nine hundred ninety-nine quadrillion nine hundred
//   ninety-nine trillion nine hundred ninety-nine billion nine
//   hundred ninety-nine million nine hundred ninety-nine thousand
//   nine hundred ninety-one

console.log(convertToWords(6000753512));
  //=> six billion seven hundred fifty-three thousand five hundred
  //   twelve

*/










