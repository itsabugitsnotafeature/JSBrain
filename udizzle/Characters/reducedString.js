/* 
    Steve has a string, consisting of  lowercase English alphabetic letters. 
    In one operation, he can delete any pair of adjacent letters with same value. 
    For example, 
        string "aabcc" would become 
        either "aab" or "bcc" after operation.

    Steve wants to reduce  as much as possible. 
    To do this, he will repeat the above operation as many times as 
    it can be performed. Help Steve out by finding and printing 's non-reducible form!

    Note: If the final string is empty, print 'EMPTY STRING' .

    Example 1: 
        aaabccddd --->>> abd
        Explaination: 
            aaabccddd → abccddd
            abccddd → abddd
            abddd → abd
    
    Example 2: 
        baab  -->> Empty String
        Explanation 1
            baab → bb
            bb → Empty String
    
    Thus, we print Empty String.

*/

let stringReducer = (str) => {
    let isClean = false;
    str = [...str];
    while(!isClean){
        let madeChange = false;
        for(let i=0 ; i< str.length ; i++){
            if(str[i] === str[i+1]){
                str.splice(i,2);
                madeChange = true;
            }
        }
        if(!madeChange){
            isClean = true;
        }
    }    
    str = str.join('')

    return str==='' ? "Empty String" : str;
}

console.log(stringReducer('abba') === 'Empty String')
console.log(stringReducer('aaabccddd') === 'abd')