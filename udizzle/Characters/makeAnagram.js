/* 

    Given two strings in lowercase, 
        the task is to make them anagram. 
    The only allowed operation is to remove a character from any string. 
    Find minimum number of characters to be deleted 
        to make both the strings anagram?

        If two strings contains same data set in any order 
            then strings are called Anagrams.

    Examples:
    Input : 
        str1 = "bcadeh" 
        str2 = "hea"
        Output: 3
    We need to remove 
        b, c and d from str1.

    Input : 
        str1 = "cddgk" 
        str2 = "gcd"
        Output: 2

    Input : 
        str1 = "bca" 
        str2 = "acb"
        Output: 0
*/

let anagramCalculator = (s1, s2) => {
    debugger
    let anaChars = [];
    let delChars = '';

    if (s1.length <= s2.length) {
        str1 = [...s1];
        str2 = [...s2];
    } else {
        str1 = [...s2];
        str2 = [...s1];
    }
    let i = 0;
    while (str1.length > 0) {
        let anaCharIndex = str2.indexOf(str1[i]);
        if (anaCharIndex >= 0) {
            anaChars.push(str1[i]);
            str1.splice(i, 1);
            str2.splice(anaCharIndex, 1);
        } else {
            delChars += (str1[i]);
            str1.splice(i, 1);
        }
    }
    delChars += str2.join('');
    console.log(JSON.stringify(anaChars))
    console.log(JSON.stringify(delChars))
}
anagramCalculator('cde', 'abc')


let isAnagram = (str1, str2) => {
    if(str1.length !== str2.length){
        return false;
    }
    return (str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join(''))
}
console.log(isAnagram("Mary", "Army")); // true