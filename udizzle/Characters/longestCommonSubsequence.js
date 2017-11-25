/* 
    Source: 
        http://www.geeksforgeeks.org/longest-common-subsequence/

Let us discuss Longest Common Subsequence (LCS) problem as one more example 
problem that can be solved using Dynamic Programming.

LCS Problem Statement: Given two sequences, 
    find the length of longest subsequence present in both of them. 
A subsequence is a sequence that appears in the same relative order, 
    but not necessarily contiguous. 
For example, “abc”, “abg”, “bdf”, “aeg”, ‘”acefg”, .. 
    etc are subsequences of “abcdefg”. 

So a string of length n has 2^n different possible subsequences.

It is a classic computer science problem, the basis of diff 
    (a file comparison program that outputs the differences between two files), 
    and has applications in bioinformatics.

Examples:
    LCS for input Sequences “ABCDGH” and “AEDFHR” is “ADH” of length 3.
    LCS for input Sequences “AGGTAB” and “GXTXGTABAYB” is “GTAB” of length 4.


*/



let longestCommonContinuousSubsequence = (a,b) => {
    
    aLen = a.length;
    let aSet = new Set();
    debugger
    for( let i = 0; i < a.length ; i++ ){
        let len = 2;
        while( len + i < a.length ){
            debugger;
            // console.log( a.substr(i,len) );
            aSet.add(a.substr(i,len));
            len++;
        }
    }
    
    let maxLength = 0;
    
    aSet.forEach((pattern) => {
        if(b.indexOf(pattern) > -1 ){
            maxLength = maxLength > pattern.length ? maxLength : pattern.length ;
        }
    })
    return maxLength;
}
// let str1 = 'abcdefijk';
// let str2 = 'hjslibcdefoldjhn';
// console.log(longestCommonContinuousSubsequence(str1, str2));


// Must TODO
let longestCommonsubsequence_sharam = (a,b) => {
    debugger
    if( a.length === 0 || b.length ===0 ){
        return 0;
    } else if( a[a.length -1] === b[b.length -1] ){
        
        let aSub = a.substring(0, a.length - 1);
        let bSub = b.substring(0, b.length - 1);

        let next = longestCommonsubsequence_sharam( aSub, bSub);
        return 1 + next
    } else {
        let aSub1 = a.substring(0, a.length - 1);
        let next1 = longestCommonsubsequence_sharam( aSub1, b);

        let bSub1 = b.substring(0, b.length - 1);
        let next2 = longestCommonsubsequence_sharam( a, bSub1);
        return Math.max( next1, next2);
    }
}
let str1 = 'AGGTAB';
let str2 = 'GXTXAYB';

console.log( longestCommonsubsequence_sharam(str1, str2) );
