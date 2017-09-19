/* 
    Longest Substring Without Repeating Characters    
    Given a string, find the length of the longest substring without repeating characters.

    Examples:

    Given "abcabcbb", the answer is "abc", which the length is 3.
    Given "bbbbb", the answer is "b", with the length of 1.
    Given "pwwkew", the answer is "wke", with the length of 3. 

    Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

let lengthOfLongestSubstring = (str) => {
    let patternSet = new Set;
    str = [...str];
    res = '';
    debugger
    for (let i = 0; i < str.length; i++) {
        if (res.indexOf(str[i]) > -1) {
            if (res.length > (str.length - i)) {
                return res;

            } else {
                if( res.indexOf(str[i]) === 0 ) {
                    res = res.slice(1,res.length) + str[i];
                } else if (res) {
                    patternSet.add(res);
                    res = str[i];
                } else {
                    res += str[i];
                }
            }
        } else {
            res += str[i];            
            patternSet.add(str[i])
        }
    }
    res = '';
    patternSet.forEach((val) => {
        if (res.length < val.length) {
            res = val;
        }
    })
    return res;
}

console.log(lengthOfLongestSubstring('aaaabcbcbcbcbcabcdefcc'));	// abcdef
console.log(lengthOfLongestSubstring('abcdaaaaaabbbbbcccdddd')); // abcd
console.log(lengthOfLongestSubstring('aaaabcbcbcbcbc'));		// abc
