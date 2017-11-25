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
function preProcess(str) {
    if (str.length == 0) {
        return "^$";
    }
    let ret = "^";
    for (let i = 0; i < str.length; i++) {
        ret += "#" + str.substr(i, 1);
    }
    ret += "#$";
    return ret;
}

function longestPalindrome_efficient(str) {
    debugger
    let transformedString = preProcess(str);
    let transformedLength = transformedString.length;
    let palendromeCenterLength = new Array(str.length);
    let centerOfPalendrome = 0,
        rightEdge = 0;

    for (let i = 1; i < transformedLength - 1; i++) {

        let i_mirror = 2 * centerOfPalendrome - i; // equals to i' = centerOfPalendrome - (i-centerOfPalendrome)

        palendromeCenterLength[i] = (rightEdge > i) ? Math.min(rightEdge - i, palendromeCenterLength[i_mirror]) : 0;

        // Attempt to expand palindrome centered at i
        while (transformedString[i + 1 + palendromeCenterLength[i]] == transformedString[i - 1 - palendromeCenterLength[i]])
            palendromeCenterLength[i]++;

        // If palindrome centered at i expand past rightEdge,
        // adjust center based on expanded palindrome.
        if (i + palendromeCenterLength[i] > rightEdge) {
            centerOfPalendrome = i;
            rightEdge = i + palendromeCenterLength[i];
        }
    }

    // Find the maximum element in palendromeCenterLength.
    let maxLen = 0;
    let centerIndex = 0;
    for (let i = 1; i < transformedLength - 1; i++) {
        if (palendromeCenterLength[i] > maxLen) {
            maxLen = palendromeCenterLength[i];
            centerIndex = i;
        }
    }
    delete palendromeCenterLength;
    return str.substr((centerIndex - 1 - maxLen) / 2, maxLen);
}
let testIp1 = 'aaaaafvewvrewgfdcrwgfrewff';
let testIp2 = 'babcbabcbaccba';

let startTime1;
// TEST 1
startTime1 = Date.now();
console.log(longestPalindrome_efficient(testIp));
console.log("RUNTIME 1 : " + (Date.now() - startTime1) / 1000);


// TEST 2
startTime1 = Date.now();
console.log(largestPalendrome_simplified(testIp));
console.log("RUNTIME 2 : " + (Date.now() - startTime1) / 1000);