/* 
    Longest Substring Without Repeating Characters    
    Given a string, find the length of the longest substring without repeating characters.

    Examples:

    Given "abcabcbb", the answer is "abc", which the length is 3.
    Given "bbbbb", the answer is "b", with the length of 1.
    Given "pwwkew", the answer is "wke", with the length of 3. 

    Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/
var lengthOfLongestSubstring = (s) => {
    var patternSet = new Set;
    str = [...s];
    res = '';
    for (var i = 0; i < str.length; i++) {
        if (res.indexOf(str[i]) > -1) {
            res = res.slice((res.indexOf(str[i])+1), res.length) + str[i];
        } else {
            res += str[i];
            patternSet.add(res)
        }
    }
    res = '';
    patternSet.forEach((val) => {
        if (res.length < val.length) {
            res = val;
        }
    })
    return res.length;
}

console.log(lengthOfLongestSubstring("ohvhjdml"));		
console.log(lengthOfLongestSubstring('aaaabcbcbcbcbcabcdefcc'));	// abcdef
console.log(lengthOfLongestSubstring('abcdaaaaaabbbbbcccdddd')); // abcd
console.log(lengthOfLongestSubstring('aaaabcbcbcbcbc'));		// abc
console.log(lengthOfLongestSubstring('abcabcbb'));		// abc

