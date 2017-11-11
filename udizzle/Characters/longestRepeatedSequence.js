/* 
    Source:
        http://www.geeksforgeeks.org/longest-repeated-subsequence/

    Given a string, print the longest repeating subseequence 
        such that the two subsequence don’t have same string 
        character at same position, i.e., any i’th character in the 
        two subsequences shouldn’t have the same index in the original string.
    
    EXAMPLE 1 :     
        Input: str = "aabb"
        Output: "ab"

        Input: str = "aab"
        Output: "a"
        The two subssequence are 'a'(first) and 'a' 
        (second). Note that 'b' cannot be considered 
        as part of subsequence as it would be at same
        index in both.

    EXAMPLE 2 :     
        Input: str = "aabebcdd"
        Output: "abd"

*/

let longestRepeatingSequence = (str) => {
    debugger
    str = [...str];
    let charMap = new Map();

    str.forEach(function(char) {
        if( charMap.has(char) ){
            charMap.set(char, charMap.get(char) + 1 );
        } else {
            charMap.set(char, 1 );
        }
    }, this);

    let result = '';
    charMap.forEach(function(val, key) {
        if( val > 1 ){
            result += key;
        } 
    }, this);
    return result;
}

console.log(longestRepeatingSequence("aabebcdd"));
