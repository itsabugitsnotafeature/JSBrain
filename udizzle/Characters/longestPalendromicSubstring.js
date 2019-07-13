/* 
    Given a string s, find the longest palindromic substring in s. 
    You may assume that the maximum length of s is 1000.
    Example:
        Input: "babad"
        Output: "bab"

    Note: "aba" is also a valid answer.
    Example:
        Input: "cbbd"
        Output: "bb"

*/

let largestPalendrome_simplified = (str) => {
    str = [...str];
    let offset = 1;
    let result = '';
    debugger
    for(let i=1 ; i < str.length ;){
        offset = 1;
        while( str[i+offset] === str[i-offset] ){
            offset++;
            if( str[i+offset] === str[i-offset] ){
                let thisPalen = str.slice(i-offset, i+offset+1 ).join('');
                // console.log("thisPalen => " + thisPalen)
                if( result.length < thisPalen.length ){
                    result = thisPalen;
                }
            }
        } 
        i += offset;
    }
    return result;
}


let longestPalindrome = function (s) {
    if (s.length > 1000) {
        return null;
    } else if (isPalendrome(s)) {
        return s;
    }
    let res = '';
    let chars = [...s];
    let reverseChars = [...(s.split('').reverse().join(''))];

    for (let len = chars.length - 1; len > 0; len--) {
        for (let i = 0; i < chars.length - len + 1; i++) {
            let chunk = chars.slice(i, i + len).join('');
            if (isPalendrome(chunk)) {
                return chunk;
            }
        }
    }
    return null;
};
function isPalendrome(str) {
    return (str === str.split('').reverse().join(''));
}
let testIp = "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth";
// let startTime = Date.now();
// console.log(longestPalindrome(testIp));
// console.log("RUNTIME: " + ( Date.now() - startTime )/1000);


/* 
    An O(N) Solution (Manacher’s Algorithm):
    Source : http://articles.leetcode.com/longest-palindromic-substring-part-ii
    YouTube Video: https://www.youtube.com/watch?v=V-sEwsca1ak
    TODO : Understand this man.
*/

/*  
    Transform str into transformedString.
    For example, 
        str = "abba", 
        transformedString = "^#a#b#b#a#$".
    ^ and $ signs are sentinels 
    appended to each end 
    to avoid bounds checking 
*/
let largestPalendrome = (str) => {
    str = [...str];
    let offset = 1;
    let result = '';
    for(let i=1 ; i < str.length ;){
        offset = 1;
        while( str[i+offset] === str[i-offset] ){
            offset++;
            let thisPalen = str.slice(i-offset, i+offset+1 ).join('');
            if( result.length < thisPalen.length ){
                result = thisPalen;
            }
        } 
        i += offset;
    }
    return result;
}
let testIp1 = 'aaaaafvewvrewgfdcrwgfrewff';
let testIp2 = 'babcbabcbaccba';

let startTime1;
// TEST 1
startTime1 = Date.now();
console.log(largestPalendrome(testIp));
console.log("RUNTIME 1 : " + (Date.now() - startTime1) / 1000);


// TEST 2
startTime1 = Date.now();
console.log(largestPalendrome(testIp));
console.log("RUNTIME 2 : " + (Date.now() - startTime1) / 1000);