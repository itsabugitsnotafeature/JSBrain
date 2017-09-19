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
let longestPalindrome = function(s) {
    if (s.length > 1000){
        return null;
    } else if( isPalendrome(s) ){
        return s;
    }
    let res = '';
    let chars = [...s];
    let reverseChars = [...(s.split('').reverse().join('')) ];
    
    for (let len = chars.length - 1 ; len > 0 ; len--){
        for(let i=0; i<chars.length - len + 1; i++){
            let chunk = chars.slice(i, i+len).join('');
            if(isPalendrome(chunk)){
                return chunk;
            }
        }
    }
    return null;
};
function isPalendrome(str){
    return (str === str.split('').reverse().join(''));
}
let testIp = "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth";
let startTime = Date.now();
console.log(longestPalindrome(testIp));
console.log("RUNTIME: " + ( Date.now() - startTime )/1000);
// console.log(longestPalindrome('aabbaa'));





