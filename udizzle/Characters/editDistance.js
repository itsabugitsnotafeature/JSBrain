/* 
    Source:
    http://www.geeksforgeeks.org/dynamic-programming-set-5-edit-distance/

    Given two strings str1 and str2 and below operations that can performed on str1. 
        Find minimum number of edits (operations) 
        required to convert ‘str1’ into ‘str2’.
    
            Insert
            Remove
            Replace
    
    All of the above operations are of equal cost.
    
    Examples:
    
        Input:   str1 = "geek", str2 = "gesek"
        Output:  1
        We can convert str1 into str2 by inserting a 's'.
        
        Input:   str1 = "cat", str2 = "cut"
        Output:  1
        We can convert str1 into str2 by replacing 'a' with 'u'.
        
        Input:   str1 = "sunday", str2 = "saturday"
        Output:  3
        Last three and first characters are same.  We basically
        need to convert "un" to "atur".  This can be done using
        below three operations. 
        Replace 'n' with 'r', insert t, insert a

*/


// ITERATIVE SOLUTION


let editDistance_iterative = (str1, str2) => {
    let distance = 0;
    debugger
    if(str1.length === str2.length){
        // Candidate for Modify
        for(let i=0 ; i<str1.length ; i++){
            if(str1[i] !== str2[i]){
                distance++
            }
        }
        return distance;
    } else {
        // Candidate for Add / Remove
        let longerStr = str1.length > str2.length ? str1 : str2;
        let shorterStr = str1.length < str2.length ? str1 : str2;

        for(let i=0 ; i<longerStr.length ; i++){
            if(shorterStr[i] === longerStr[i]){
                continue;
            } else {
                if(shorterStr.length < longerStr.length ){
                    // insert operation
                    shorterStr = shorterStr.slice(0,i) + longerStr[i] + shorterStr.slice(i, shorterStr.length);
                } else {
                    // replace operation operation
                    shorterStr = shorterStr.slice(0,i) + longerStr[i] + shorterStr.slice(i+1, shorterStr.length);
                }
                distance++;
            }
        }
        return distance;
    }
}



// Dynamic Programming 
let editDist = (str1, str2, len1, len2) => {

    if(len1 == undefined) {
        len1 = str1.length;
        len2 = str2.length;
    }

    if(len1 === 0){
        return len2;
    }

    if(len2 === 0){
        return len1;
    }

    if( str1[len1-1] === str2[len2-1]){
        return editDist(str1, str2, len1-1, len2-1 );
    } else {
        return 1 + findMin(
            editDist(str1, str2, len1-1, len2 ),
            editDist(str1, str2, len1, len2-1 ),
            editDist(str1, str2, len1-1, len2-1 )
        )
    }

}

let findMin = ( a, b, c ) => {
    return Math.min( Math.min(a, b), c);
}

let str1 = "sunday";
let str2 = "saturday";
console.log(editDist( str1 , str2));
console.log(editDistance_iterative( str1 , str2));

str1 = "geek";
str2 = "gesek";
console.log(editDist( str1 , str2));
console.log(editDistance_iterative( str1 , str2));

