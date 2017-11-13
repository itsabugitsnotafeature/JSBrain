'use strict'


/* 
    INSERT
        a b c d e
        a b _ d e

    REMOVE
        a b c d e
        a c _ d e 

    MODIFY
        abc'd'e
        abc'f'e
*/


let isOneEditAway = (str1, str2) => {
    str1 = [...str1];
    str2 = [...str2];

    if( Math.abs(str2.length - str1.length) > 1 ){
        return false;
    }


    let power_used = false;

    for(let i=0 ; i< str1.length ; i++){
        if(str1[i] === str2[i]){
            continue;
        } else {
            if(power_used){
                return false;
            }
            if(str1.length === str2.length) {
                // MODIFY case
                str1[i] = str2[i];
                power_used = true;
            } else {
                // ADD or REMOVE case
                // find smaller string
                // add in that one
                
                if(str1.length < str2.length) {
                    str1 = str1.slice(0,i).concat(str2[i]).concat(str1.slice(i,str1.length));
                    power_used = true;
                } else {
                    str2 = str2.slice(0,i).concat(str1[i]).concat(str2.slice(i,str2.length));
                    power_used = true;
                }
            }
        }
    }
    return true;
}








// ADD / REMOVE :: POSITIVE
let tc1_1 = 'abcd';
let tc1_2 = 'bcd';

let tc2_1 = 'abcd';
let tc2_2 = 'abccd';

let tc3_1 = '';
let tc3_2 = 'b';

// ADD / REMOVE :: NEGATIVE
let tc1_1_n = 'abcd';
let tc1_2_n = 'bcde';

let tc2_1_n = 'abcd3';
let tc2_2_n = 'bcd';

// MODIFY :: POSITIVE
let tc4_1 = 'abcd';
let tc4_2 = 'abcf';

let tc5_1 = 'abcd';
let tc5_2 = 'abed';

let tc6_1 = 'abcd';
let tc6_2 = 'kbcd';

// MODIFY :: POSITIVE
let tc4_1_n = 'abcd';
let tc4_2_n = 'abef';

let tc5_1_n = 'kbcd';
let tc5_2_n = 'abcf';

// POSITIVE TESTS
console.log(isOneEditAway(tc1_1,tc1_2));
console.log(isOneEditAway(tc2_1,tc2_2));
console.log(isOneEditAway(tc3_1,tc3_2));
console.log(isOneEditAway(tc4_1,tc4_2));
console.log(isOneEditAway(tc5_1,tc5_2));
console.log(isOneEditAway(tc6_1,tc6_2));

// NEGATIVE TESTS
console.log(isOneEditAway(tc1_1_n,tc1_2_n));
console.log(isOneEditAway(tc2_1_n,tc2_2_n));
console.log(isOneEditAway(tc4_1_n,tc4_2_n));
console.log(isOneEditAway(tc5_1_n,tc5_2_n));