/* 
    Source: 
        https://github.com/kennymkchan/interview-questions-in-javascript
    
    Check if a given string is a isomorphic

    For two strings to be isomorphic, all occurrences of a 
    character in string A 
    can be replaced with another character
    to get string B. 
    
    The order of the characters must be preserved. 
    There must be one-to-one mapping for ever char of
    string A to every char of string B.

    `paper` and `title` would return true.
    `egg` and `sad` would return false.
    `dgg` and `add` would return true.

 */

let isIsomorphic = (str1, str2) => {
    if( str1.length !== str2.length ) {
        return false;
    }

    let charMap = new Map();

    for(let i=0 ; i<str1.length ; i++){
        if(charMap.has(str1[i])){
            if (charMap.get(str1[i]) !== str2[i] ){
                return false;
            }
        } else {
            charMap.set(str1[i], str2[i] )
        }
    }
    return true;
}


console.log(isIsomorphic("egg", 'add')); // true
console.log(isIsomorphic("paper", 'title')); // true
console.log(isIsomorphic("kick", 'side')); // false