/* 
    PROGRESSION: 

    1. Sorting              -- DONE
    2. JS PROTOTYPES        -- DONE
    3. NUMBERS              -- 
    4. CHARACTERS           -- 
    5. UDEMY                -- 

*/


/* 
appdynamics: 
n'th element from last of linked list 

max product of 3 numbers in an array
with negative 
non negative array

*/




/* 
    GOOD1 : PRACTICE
*/

let AtoI = (str) => {
    let diff = ('0').charCodeAt(0);
    if((str.length > 0) && (str !== '-') ){
        let lastDigit = str.charCodeAt(str.length-1) - diff;
        if(str[0] === '-'){
            lastDigit *= (-1);
        }
        let raminederString = str.slice(0, str.length-1) ;

        return  lastDigit + (10 * AtoI(raminederString) )

    } else {
        return 0
    }
}

let AtoIWithDecimal = (str) => {
    if(str.indexOf('.') === -1){
        return AtoI(str);
    } else {
        debugger
        let parts = str.split('.')        
        let beforeDecimal = AtoI(parts[0]);
        let afterDecimal = AtoI(parts[1]);
        while(!(afterDecimal < 1)){
            afterDecimal = afterDecimal/10;
        }
        return (beforeDecimal + afterDecimal);
    }
}
console.log(AtoIWithDecimal("-12345.9912345"));
console.log(AtoIWithDecimal("-12345.123"));

// console.log(AtoI("-12345"));



/* 
    GOOD1 : PRACTICE
*/
let editDistance = (str1, str2) => {
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

// let str1 = "gesek";
// let str2 = "geek";
// console.log(editDistance( str1 , str2));

// let str1 = "sunday";
// let str2 = "saturday";
// console.log(editDistance( str1 , str2));



/* 
    GOOD1 : PRACTICE
*/
let largestUniqueSubstring = (str) => {
    let result = '';
    let maxSoFar = '';
    debugger
    for(let i=0 ; i<str.length ; i++) {
        if(maxSoFar.indexOf(str[i])=== -1){
            maxSoFar += str[i];
        } else {
            let index = maxSoFar.indexOf(str[i]);
            maxSoFar = maxSoFar.slice(index + 1, maxSoFar.length) + str[i];
        }
        if(maxSoFar.length > result.length){
            result = maxSoFar;
        }
    }
    return result;
}
var lengthOfLongestSubstring_control = (s) => {
    var patternSet = new Set();
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
    return res;
}

// console.log("\n\n")
// console.log(largestUniqueSubstring("ohvhjdml"));            // vhjdml
// console.log(lengthOfLongestSubstring_control("ohvhjdml"));  // vhjdml

// console.log("\n\n")
// console.log(largestUniqueSubstring('aaaabcbcbcbcbcabcdefcc'));	// abcdef
// console.log(lengthOfLongestSubstring_control('aaaabcbcbcbcbcabcdefcc'));	// abcdef

// console.log("\n\n")
// console.log(largestUniqueSubstring('abcdaaaaaabbbbbcccdddd')); // abcd
// console.log(lengthOfLongestSubstring_control('abcdaaaaaabbbbbcccdddd')); // abcd

// console.log("\n\n")
// console.log(largestUniqueSubstring('aaaabcbcbcbcbc'));		// abc
// console.log(lengthOfLongestSubstring_control('aaaabcbcbcbcbc'));		// abc

// console.log("\n\n")
// console.log(largestUniqueSubstring('abcabcbb'));		// abc
// console.log(lengthOfLongestSubstring_control('abcabcbb'));		// abc







let longestBalancedParenthesis = (str) => {
    let stack = [];
    let res = 0;
    debugger
    for(let i=0 ; i<str.length ; i++){
        if(str[i] === '('){
            stack.push(str[i]);
        } else {
            stack.pop();
            let thisLength = i - stack.length;
            res = Math.max(thisLength, res);
        }
    }
    return res;
}

let sharamCopied = (str) => {
    str = [...str];
    let n = str.length;
  
    // Create a stack and push -1 as initial index to it.
    let stack = [];
    stack.push(-1);
  
    // Initialize result
    let result = 0;
  
    // Traverse all characters of given string
    for (let i=0; i<n; i++) {
        // If opening bracket, push index of it
        if (str[i] == '(')
          stack.push(i);
  
        else // If closing bracket, i.e.,str[i] = ')'
        {
            // Pop the previous opening bracket's index
            stack.pop();
  
            // Check if this length formed with base of
            // current valid substring is more than max 
            // so far
            debugger
            if (stack.length!==0){
                result = Math.max(result, i - stack[stack.length-1]);
            }
  
            // If stack is empty. push current index as 
            // base for next valid substring (if any)
            else stack.push(i);
        }
    }
    return result;
}
// console.log(longestBalancedParenthesis('((((()()())))'));
// console.log(sharamCopied('((((()()())))'));





/* 
    GOOD1 : PRACTICE
*/
// LCS for input Sequences “ABCDGH” and “AEDFHR” is “ADH” of length 3.
// LCS for input Sequences “AGGTAB” and “GXTXAYB” is “GTAB” of length 4.
let longestCommonSubsequence = (a, b) => {
    let result = '';
    debugger
    for(let i=0 ; i<a.length ; i++){
        for(let j = i+1 ; j<b.length ; j++){
            if(b.indexOf(a.slice(i,j)) > -1 ){
                if(result.length < a.slice(i, j).length){
                    result = a.slice(i, j);
                }
            } else {
                break;
            }
        }
    }
    return result;
}

let longestCommonSubsequence_hacka = (a, b) => {
    if(a.length ===0 || b.length===0){
        return 0;
    } 
    if(a[a.length-1] === b[b.length-1]){
        return 1 + longestCommonSubsequence_hacka( a.slice(0, a.length-1), b.slice(0, b.length-1) );
    } else {
        let subA = a.slice(0, a.length-1);
        let subB = b.slice(0, b.length-1);

        let max1 = longestCommonSubsequence_hacka( subA, b );
        let max2 = longestCommonSubsequence_hacka( a, subB );
        return Math.max( max1, max2 );
    }
}

let longestCommonSubsequence_ReImagined = (a, b) => {
    if(a.length === 0 || b.length === 0){
        return 0;
    }
    if( a[a.length-1] === b[b.length-1]){
        let aSub1 = a.slice(0, a.length-1);
        let bSub1 = b.slice(0, b.length-1);
        return 1 + longestCommonSubsequence_ReImagined(aSub1, bSub1);
    } else {
        let aSub1 = a.slice(0, a.length-1);
        let subSeq1 = longestCommonSubsequence_ReImagined(aSub1, b);

        let bSub1 = b.slice(0, b.length-1);
        let subSeq2 = longestCommonSubsequence_ReImagined(a, bSub1);

        return Math.max(subSeq1, subSeq2);
    }
}



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
// console.log( longestCommonsubsequence_sharam("AGGTAB", "GXTXGTABAYB") );
// console.log( longestCommonSubsequence("AGGTAB", "GXTXGTABAYB") );
// console.log( longestCommonSubsequence_ReImagined("AGGTAB", "GXTXGTABAYB") );
// console.log( longestCommonSubsequence_hacka("AGGTAB", "GXTXGTABAYB") );










let largestPalendrome = (str) => {
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
// let arr = 'klwsdcbabcd8jhfuye';
// let testIp = "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth";
// console.log(largestPalendrome(arr));
// console.log(largestPalendrome(testIp));




/* 
    GOOD1 : PRACTICE
*/
// aaabccddd → abccddd
// abccddd → abddd
// abddd → abd
let reduceString = (str) => {
    let isClean = false;
    str = [...str];
    while(!isClean){
        let madeUpdate = false;
        for(let i=0 ; i<str.length-1 ; i++){
            if(str[i] === str[i+1]){
                str = str.slice(0,i).concat(str.slice(i+2, str.length))
                madeUpdate = true;
            }
        }
        if(!madeUpdate){
            isClean = true;
        }
    }
    return str.join('');
}
// console.log(reduceString('aaabccddd') === 'abd')





/* 
    GOOD1 : PRACTICE
*/
let countZerosTillNumber = (num) => {
    count = 0;
    while (num >= 10) {
        num = num - 10;
        ++count;
    }
    return count;
}
let countZerosTillNumber_better = (num) => {
    count = 0;
    while (num >= 10) {
        count += Math.floor(num/10);
        num = num/10;
    }
    return count;
}
// console.log( countZerosTillNumber(201));
// console.log( countZerosTillNumber_better(201));

// console.log( countZerosTillNumber(2018));
// console.log( countZerosTillNumber_better(2018));









let isValidNumber = (num) => {
    num = num.toString();
    num = [...num];
    let index = 0;

    while(index < num.length){
        switch(num[index]){
            case '1':
                index++;
                break;
            case '2':
                index++;
                break;
            case '3':
                index++;
                break;
            case '4':
                index++;
                break;
            case '5':
                index++;    
                break;
            case '6':
                index++;
                break;
            case '7':
                index++;
                break;
            case '8':
                index++;
                break;
            case '9':
                index++;
                break;
            case '0':
                index++;
                break;
            case '.':
                index++;
                break;
            default:
                return false;
        }
    }
    return true;
}
debugger
// console.log(isValidNumber(12345678910));
// console.log(isValidNumber(9999.9999));
// console.log(isValidNumber("9999.99a99"));





let calcSquareRoot = (num, guess) => {
    if(!guess){
        guess = num/2;
    }

    let div = num/guess;
    let newGuess = (div+guess)/2;
    if(newGuess === guess){
        return guess;
    } else {
        return calcSquareRoot(num, newGuess);
    }
}
// console.log(calcSquareRoot(81));




let waysToGetSum_practice = (arr, sum) => {
    let memCache = (new Array(sum+1)).fill(0);
    memCache[0] = 1;

    for(let currentTargetSum = 1 ; currentTargetSum<=sum ; currentTargetSum++){
        arr.forEach((val) => {
            if(currentTargetSum >= val){
                memCache[currentTargetSum] += memCache[currentTargetSum - val];
            }
        });
    }
    return memCache;
}
// console.log( waysToGetSum_practice([1,2,3], 17) );




let waysToGetSum_again = (arr, sum) => {
    let memCache = new Array(sum+1).fill(0);

    memCache[0] = 1;
    for(let currentTargetSumValue = 1 ; currentTargetSumValue <= sum ; currentTargetSumValue++ ){
        arr.forEach((val)=>{
            if(val > currentTargetSumValue){
                memCache[currentTargetSumValue] += memCache[ currentTargetSumValue - val ];
            }
        })
    }
    return memCache;
}
// console.log( waysToGetSum_again([1,2,3], 7) );

let waysToGetSum = (arr, sum) => {
    let count = new Array(sum+1).fill(0);
    
    count[0] = 1;
    for(let currentTargetSumValue=1 ; currentTargetSumValue<=sum ; currentTargetSumValue++){
        for(let j=0 ; j<arr.length ; j++) {
            if( currentTargetSumValue >= arr[j] ){
                count[currentTargetSumValue] = count[currentTargetSumValue] + count[currentTargetSumValue - arr[j] ];
            }
        }
    }
    return count[sum];
}
// console.log( waysToGetSum([1,2,3], 6) );





let digitsToWords = (num) => {
    let units = [ '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
        'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ];
    debugger
    let tens = [ '', '', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety' ];

    if(num < 20){
        return units[num];
    } else if( num < 100){
        return tens[Math.floor(num/10)] + ' ' + digitsToWords(num%10);
    } else if( num < 1000){
        return digitsToWords(Math.floor(num/100)) + ' hundred ' + digitsToWords(num%100);
    } else if( num < 1000000){
        return digitsToWords(Math.floor(num/1000)) + ' thousand ' + digitsToWords(num%1000);
    }

}
// console.log(digitsToWords(999999));
// console.log(digitsToWords(608957));
// console.log(digitsToWords(400000));
// console.log(digitsToWords(123456));




let find3NumsWithGivenProduct = (arr, prod) => {
    arr.sort();    
    for(let i=0 ; i<arr.length ; i++){
        let pivotIndex = i;
        let low = 0;
        let high = arr.length-1;

        while( low < high){
            if(low === pivotIndex || high === pivotIndex){    
                ++low;
                --high;
                continue;
            } if( arr[pivotIndex] * arr[low] * arr[high] === prod){

                return true;
            } else if( arr[pivotIndex] * arr[low] * arr[high] > prod){

                --high;
            } else {
                
                ++low;
            }
        }
    }
    return false;
}
// let arr = [2,2,3,6];

let arr1 = [1, 6, 4, 5, 1, 2, 3, 4, 1, 9, 1, 8, 7, 6, 9, 6, 2, 1, 6, 2];
// [1, 1, 1, 1, 1, 2, 2, 2, 3, 4, 4, 5, 6, 6, 6, 6, 7, 8, 9, 9]
let arr2 = [2,5,3,4,7,6,1];
// console.log(find3NumsWithGivenProduct(arr1, 12));
// console.log(find3NumsWithGivenProduct(arr1, 172));
// console.log(find3NumsWithGivenProduct(arr2, 21));
// console.log(find3NumsWithGivenProduct(arr2, 112));





let isPowOfN = (n, pow) => {
    if(n === 1){
        return true;
    } else if( n < 1 ){
        return false;
    } else {
        return isPowOfN( n/pow, pow );
    }
}
// console.log( isPowOfN(64, 2));
// console.log( isPowOfN(48, 2));
// console.log( isPowOfN(Math.pow(8, 66), 2));
// console.log( isPowOfN(36, 6));





let maxSum = (arr) => {
    debugger
    let maxDiff = -Infinity;
    let lowest  = arr[0];

    for( let i=1 ; i<arr.length ; i++ ){
        let diff = arr[i] - lowest;
        maxDiff = Math.max(maxDiff, diff);
        lowest = Math.min(lowest, arr[i]);
    }
    return maxDiff;
}
// console.log( maxSum([7, 8, 4, 9, 9, 15, 3, 1, 10]) );




let calcHcf = (a, b) => {
    if( b === 0){
        return a;
    }
    else {
        return calcHcf( b, a%b );
    }
}
// console.log( calcHcf(100, 80) );





let maxProdOfThreeNumbersInArray_1 = (arr) => {
    let leftMax = [],
    leftMin = [],
    rightMax = [],
    rightMin = [];

    let maxSoFar = arr[0],
    minSoFar = arr[0];

    let RESULT = -Infinity;

    for(let i=1 ; i<arr.length ; i++){
        leftMax[i] = maxSoFar;
        maxSoFar = Math.max(maxSoFar, arr[i]);

        leftMin[i] = minSoFar;
        minSoFar = Math.min(minSoFar, arr[i]);
    }

    maxSoFar = arr[arr.length-1];
    minSoFar = arr[arr.length-1];

    for(let i=arr.length-2 ; i>=0 ; i--){
        rightMax[i] = maxSoFar;
        maxSoFar = Math.max(maxSoFar, arr[i]);

        rightMin[i] = minSoFar;
        minSoFar = Math.min(minSoFar, arr[i]);
    }
    debugger
    
    for(let i=1 ; i<arr.length-1 ; i++){
        let prod1 = Math.max( arr[i] * leftMax[i] * rightMax[i],
            arr[i] * leftMin[i] * rightMin[i]
        );

        let prod2 = Math.max( arr[i] * leftMax[i] * rightMin[i],
            arr[i] * leftMin[i] * rightMax[i]
        );

        RESULT = Math.max(RESULT, prod1, prod2);
    }    

    return RESULT;
}

let TC = {
    one: [1, 2, 3],
    two: [1, 2, 3, 4],
    three: [-1, -2, -3],
    four: [-4, -3, -2, -1, 60]
};

// console.log(maxProdOfThreeNumbersInArray_1([1,2,1,3,1,4,1]));
// console.log(maxProdOfThreeNumbersInArray_1(TC.four));
// console.log(maxProdOfThreeNumbersInArray_1(TC.three));
// console.log(maxProdOfThreeNumbersInArray_1(TC.two));
// console.log(maxProdOfThreeNumbersInArray_1(TC.one));



let maxProdOfThreeNumbersInArray = (arr) => {
    debugger
    let maxProd = -Infinity;

    let leftMax = [],
        leftMin = [],
        rightMax = [],
        rightMin = [];

    
    let maxSoFar = arr[0];
    let minSoFar = arr[0];
        
    // Initialize left array
    for(let i=1 ; i<arr.length ; i++) {
        leftMax[i] = maxSoFar;
        maxSoFar = Math.max( maxSoFar, arr[i] );
        
        leftMin[i] = minSoFar;
        minSoFar = Math.min( minSoFar, arr[i] );
    }

    maxSoFar = arr[arr.length-1];
    minSoFar = arr[arr.length-1];
    
    // Initialize Right array
    for(let i=arr.length-2 ; i >=0 ; i--){
        rightMax[i] = maxSoFar;
        maxSoFar = Math.max( maxSoFar, arr[i] );
        
        rightMin[i] = minSoFar;
        minSoFar = Math.min( minSoFar, arr[i] );
    }
        


    // Calculate MAX PROD
    for(let i=1 ; i<arr.length-1 ; i++){
        let max1 = Math.max( arr[i] * leftMax[i] * rightMax[i], 
                            arr[i] * leftMin[i] * rightMin[i] );

        let max2 = Math.max( arr[i] * leftMax[i] * rightMin[i], 
                                arr[i] * leftMin[i] * rightMax[i] );
        
        maxProd = Math.max( maxProd, max1, max2 );
    }
    
    return maxProd;
}

// let TC = {
//     one: [1, 2, 3],
//     two: [1, 2, 3, 4],
//     three: [-1, -2, -3],
//     four: [-4, -3, -2, -1, 60]
// };

// console.log(maxProdOfThreeNumbersInArray([1,2,1,3,1,4,1]));
// console.log(maxProdOfThreeNumbersInArray(TC.four));
// console.log(maxProdOfThreeNumbersInArray(TC.three));
// console.log(maxProdOfThreeNumbersInArray(TC.two));
// console.log(maxProdOfThreeNumbersInArray(TC.one));




let maxSubArraySum = (arr) => {
    let maxSum = -Infinity;
    let maxSoFar = arr[0];

    for( let i=1 ; i<arr.length ; i++){
        maxSum = maxSum > maxSoFar ? maxSum : maxSoFar;
        maxSoFar = maxSoFar < 0 ? 0 : maxSoFar;
        maxSoFar += arr[i];
    }
    return maxSum;
}

let maxSubArrayProduct = (arr) => {
    let maxProd = -Infinity;
    let maxSoFar = 1; 
    let minSoFar = 1;

    for(let i=0 ; i<arr.length ; i++){
        if(arr[i] > 0){
            maxSoFar *= arr[i];
            minSoFar = Math.min(minSoFar, minSoFar * arr[i]);
            
        } else if (arr[i] < 0) {
            minSoFar *= arr[i];
            let oldMax = maxSoFar;
            maxSoFar = Math.max (maxSoFar, minSoFar);
            minSoFar = oldMax * arr[i];

        } else if (arr[i] === 0){
            maxSoFar = 1;
            minSoFar = 1;
        }
        maxProd = Math.max(maxProd, maxSoFar);
    }
    return maxProd;
}

// let IDEAL_INPUT = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// let LONGEST_INPUT = [-64, 78, 56, 10, -8, 26, -18, 47, -31, 75, 89, 13, 48, -19, -69, 36, -39, 55, -5, -4, -15, -37, -27, -8, -5, 35, -51, 83, 21, -47, 46, 33, -91, -21, -57, 0, 81, 1, -75, -50, -23, -86, 39, -98, -29, 69, 38, 32, 24, -90, -95, 86, -27, -23, -22, 44, -88, 3, 27, 9, 55, -50, -80, 40, 5, -61, -82, -14, 40, -58, 35, 93, -68, -26, 94, 3, -79, 9, -88, 21, 19, -84, 7, 91, -8, 84, 12, -19, -13, -83, 66, -80, -34, 62, 59, 48, -98, 53, -66, 18, 94, 46, 11, -73, 96, -18, 6, -83, 91, 17, 38, 10, 9, -78, -22, 77, 83, 89, -42, -30, -94, -98, -34, -51, 63, -97, 96, 64, 55, -93, -41, 27, 52, 69, 53, 26, -71, -64, 42, -80, 52, -43, 6, -62, -21, 83, -85, -38, 49, -50, 8, 55, -72, 74, 80, 90, 53, 53, 32, -15, 36, 90, -88, -34, 37, 41, 91, 65, 76, 33, 61, 5, 90, -33, 42, -54, -73, 34, -16, 75, 83, 91, 7, -89, 42, -36, 77, -5, -83, 9, 80, 53, -23, 68, -81, 90, 10, -90, 55, -14, 19, -7, 91, -14, 59, 33, 31, 62, -33, -85, 37, -73, 83, -78, -86, 25, -15, 91, 97, 2, -23, 54, -68, 53, 22, -73, 43, -68, -87, -25, 18, 31, 67, -14, 94, 3, -81, 25, -35, -37, 17, 79, -34, -23, -99, -43, -98, -38, -52, 75, 63, 1, 29, 71, -68, -71, 74, 51, -40, 86, -73, 54, -5, 70, -60, -11, -49, -64, 90, -8, -25, -16, -52, 40, 60, -75, 96, 39, -13, -79, 14, -73, 22, -79, 75, 30, -51, 49, -19, -15, 36, -16, -60, -69, -68, -21, -4, -18, -9, -14, 50, 65, 70, 75, -17, 30, 99, -44, -31, -14, -46, 60, -10, 52, 80, -35, -18, -94, -86, 62, -10, 49, -53, 6, 56, -45, 62, -48, 36, -47, 15, -37, -81, -15, -62, -22, 91, -85, 33, -62, -23, 86, 97, 66, 15, 54, -69, 96, 36, -55, 36, -97, 70, 82, 9, 4, -63, -29, 32, 49, 23, -53, 88, 18, 8, -96, 72, -23, -82, 6, 14, -6, -31, -12, -39, 61, -58, -32, 57, 77, 12, -7, 56, -40, -48, -35, 40, -35, 12, -28, 90, -87, -4, 79, 30, 80, 82, -20, -43, 76, 62, 70, -30, -92, -42, 7, 68, -24, 75, 26, -70, -36, 95, 86, 0, -52, -49, -60, 12, 63, -11, -20, 75, 84, -41, -18, 41, -82, 61, 98, 70, 0, 45, -83, 8, -96, 24, -24, -44, -24, -98, -14, 39, 97, -51, -60, -78, -24, -44, 10, -84, 44, 89, 67, 5, -75, -73, -53, -81, 64, -55, 88, -35, 89, -94, 72, 69, 29, -52, -97, 81, -73, -35, 20, -99, 13, 36, 98, 65, 69, 8, 81, 13, -25, 25, 95, -1, 51, -58, -5, 16, -37, -17, 57, -71, -35, 29, 75, 70, 53, 77, 51, 79, -58, -51, 56, 31, 84, 54, -27, 30, -37, -46, -56, 14, 56, -84, 89, 7, -43, -16, 99, 19, 67, 56, 24, -68, -38, -1, -97, -84, -24, 53, 71, -6, -98, 28, -98, 63, -18, -25, -7, 21, 5, 13, -88, -39, 28, -98, 68, 61, -15, 44, -43, -71, 1, 81, -39, 62, -20, -60, 54, 33, 69, 26, -96, 48, -69, -94, 11, -11, -20, 80, 87, 61, -29, 98, -77, 75, 99, 67, 37, -38, 11, 93, -10, 88, 51, 27, 28, -68, 66, -41, 41, 36, 84, 44, -16, 91, 49, 71, -19, -94, 28, -32, 44, 75, -57, 66, 51, -80, 10, -35, -19, 97, -65, 70, 63, 86, -2, -9, 94, -59, 26, 35, 76, 11, -21, -63, -21, -94, 84, 59, 87, 13, -96, 31, -35, -53, -26, -84, -34, 60, -20, 23, 58, 15, -7, 21, -22, 67, 88, -28, -91, 14, -93, 61, -98, -38, 75, -19, -56, 59, -83, -91, -51, -79, 16, 14, -56, 90, 6, -14, 27, 63, -91, -15, -22, -22, 82, 32, -54, 47, -96, -69, -61, 86, 91, -60, -75, 43, -3, -31, 3, -9, -23, 28, 11, 69, -81, 31, 59, 25, -83, -36, -12, -75, 48, 42, -21, 8, -26, 24, -68, -23, 31, -30, -60, 0, -13, -36, -57, 60, 32, 22, -49, 85, -49, 38, 55, -54, -31, -9, 70, -38, 54, -65, -37, -20, 76, 42, 64, -73, -57, 95, -20, 74, -57, 19, -49, 29, 83, -7, -11, -8, -84, 40, -45, -57, -45, 86, -12, 24, -46, -64, 62, -91, -30, -74, -35, -76, 44, -94, -73, 86, 77, 7, 37, -80, -74, 87, 48, 85, -19, -85, -45, -27, 31, 9, -8, 85, -28, 79, -14, 25, 91, -51, 10, -61, -49, 74, -38, 94, 56, -12, 57, 34, 71, -5, 53, 74, -18, -21, 59, 39, -30, 90, -88, -99, -24, 3, 62, 47, -40, -51, -27, -49, -26, 82, -11, 1, 34, 27, -5, -10, 92, -48, -99, 63, 23, 31, 14, -94, -90, -49, 44, -44, -59, 33, -44, 17, -64, -82, -36, -28, -57, 13, 0, -7, -4, 88, 70, -93, -7, -35, -4, -15, -6, -26, -75, 93, -95, 39, 98, 90, 66, 20, -54, -93, -47, -22, 0, -35, -28, 41, 14, -8, -46, -86, 84, 26, -98, 55, 32, -29, 96, -94, 32, -33, -21, 57, -39, -17, -27, -64, -50, -61, 55, -28, -78, 84, 49, 22, -73, -79, -37, 40, 12, -7, 53, -26, -80, 31, -94, 51, -97, -98, 56, 34, -54, -88, -32, -17, -29, 17, 18, 20, 32, -49, 91, 54, -65, 40, -47, -39, 38, -8, -99, -73, 84, 30, 0, -96, -38, 5, 32, -36, -16, -35, 74, 29, -23, -80, -88, 47, 36, 29, -32, -54, 79, -64, 76, 91, 53, -71, -71, -9, -3, -93, 17, -19, 36, 94, -38, 97, -1, 70, -62, 82, -65, -87, 11, 11, -68, -1, -41, 44, -71, 3, 89];

// console.log(maxSubArrayProduct(IDEAL_INPUT));
// console.log(maxSubArrayProduct(LONGEST_INPUT));

// console.log(maxSubArraySum(IDEAL_INPUT));
// console.log(maxSubArraySum(LONGEST_INPUT));















/*

    INHERITANCE EXERCISES

*/

// *****  
// *****  EXAMPLE 1 : OBJECTS
// *****  
let poops = {
    isPoopin: true,
    walks: function(){
        // console.log("Okay im walking")
    }
}

let animal = {
    eats: true,
    __proto__: poops
}

let animal2 = {
    name: "Ted"
}
animal2.__proto__ = poops;

let animal3 = {
    type: "K9"
}
// Incorrect Way
animal3.prototype = poops
animal3.prototype
// {isPoopin: true, walks: ƒ}
animal3.prototype.isPoopin
// true
animal3.prototype.walks()
// VM1012:5 Okay im walking





// *****  
// *****  EXAMPLE 2 : FUNCTIONS 
// *****  

function sayHi(){
    console.log("Hello World");
}

function talk(phrase){
    console.log(phrase)
}

// talk.prototype.sayHelloWorld = sayHi

// talk.prototype.sayHelloWorld()
// // VM1411:3 Hello World
// talk.__proto__.sayHi()
// // Uncaught TypeError: talk.__proto__.sayHi is not a function
// talk.__proto__.sayHi
// undefined




// *****  
// *****  EXAMPLE 3 : OBJECTS WITH COMPOSITIONAL INHERITANCE
// *****  


let hasChocolate = {
    hasChocolate: true
}

let hasCaramel = {
    hasCaramel: true
}

let hasMilk = {
    hasMilk: true
}

let hasSoda = {
    hasSoda: true
}

function tellIngrediants(e) {
    debugger
    console.log(this.hasChocolate);
    // console.log("what")
}

let chocolateIceCream = Object.assign({},hasChocolate, hasCaramel, hasMilk);
let chocolateSodaCream = Object.assign({},hasChocolate, hasSoda, hasMilk);

let newIceCream = {
    newChoco: Object.assign({},hasChocolate, hasCaramel, hasMilk),
    melts: true
}

debugger
// tellIngrediants.call(newIceCream.newChoco);
// tellIngrediants.apply(newIceCream.newChoco);




// *****  
// *****  EXAMPLE 4 : USING ES6 CLASSES
// *****  

class base {
    constructor(data){
        console.log("Base Class says =>" + data);
        this.baseData = data;
    }
}

class child extends base{
    constructor(data){
        super(data);
        console.log("CHILD Says" + child);
        this.childData = data;
    }
    sayHi(){
        console.log("HI !");
    }

    sayBye(){
        console.log("BYEE !");
    }

}

// let child1 = new child('dummy-child-data');
// let base1 = new base('dummy-base-data');






























/*

    SORTING EXERCISES

*/

function showData(data){
    console.log("\n\n" + JSON.stringify(data, null, 2) );
}


const ARR1 = ['C', 'D', 'E', 'F', 'G'];
const INDEX1 = [3, 0, 4, 1, 2];
const SOL1 = ['D', 'F', 'G', 'C', 'E'];

const ARR2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const INDEX2 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const SOL2 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

let sortByIndex = (arr, iArray) => {
    let seperator = "****";
    debugger
    for(let i=0 ; i<arr.length ; i++){
        let destIndex = iArray[i];
        if(destIndex < i){
            if( arr[i].indexOf(seperator) > -1 ){
                
                let itemToMove = arr[i].substring(0, arr[i].indexOf(seperator));
                arr[i] = arr[i].substring( arr[i].indexOf(seperator) + seperator.length, arr[i].length  )
                
                arr[destIndex] = itemToMove;
            } else {
                arr[destIndex] = arr[i];
            }
        } else {
            if( arr[i].indexOf(seperator) > -1 ){
                
                let itemToMove = arr[i].substring(0, arr[i].indexOf(seperator));
                arr[i] = arr[i].substring( arr[i].indexOf(seperator) + seperator.length, arr[i].length  )
                
                arr[destIndex] = itemToMove;
            } else {
                arr[destIndex] += seperator + arr[i];
            }
        }
    }

}
sortByIndex(ARR1, INDEX1)
// showData( ARR1 );





let passes = [
    {
        id: 8810,
        depart: "SFO",
        arrival: "NY"
    },
    {
        id: 8809,
        depart: "NDLS",
        arrival: "MUM"
    },
    {
        id: 8808,
        depart: "DUBAI",
        arrival: "BER"
    },
    {
        id: 8807,
        depart: "PERTH",
        arrival: "TOKYO"
    },
    {
        id: 8806,
        depart: "MUM",
        arrival: "HYD"
    },
    {
        id: 8805,
        depart: "HYD",
        arrival: "LDN"
    },
    {
        id: 8804,
        depart: "CCU",
        arrival: "SFO"
    },
    {
        id: 8803,
        depart: "LDN",
        arrival: "CCU"
    },
    {
        id: 8802,
        depart: "TOKYO",
        arrival: "DUBAI"
    },
    {
        id: 8801,
        depart: "BER",
        arrival: "NDLS"
    }
];

let sortBusinessTrip = (tripItinerary) => {
    let destMap = new Map();
    let hasLanded = new Map();
    let startCity = null;
    let totalTrip = [];

    console.log('hi hi');
    debugger

    tripItinerary.forEach((pitStop) => {
        destMap.set(pitStop.depart, pitStop.arrival);
        hasLanded.set(pitStop.arrival, true);
    });

    // Tag the starting airport
    console.log('hi hi');

    destMap.forEach((value, key)=>{
        if( !hasLanded.has(key) ){
            startCity = key;
        } else if (!hasLanded.has(value)) {
            startCity = value;
        }
    });

    totalTrip.push(startCity);

    for(let i=0 ; i<passes.length ; i++){
        startCity = destMap.get(startCity)
        totalTrip.push(startCity);
    }
    
    return totalTrip;
}

// showData(sortBusinessTrip(passes));





// Given
const endorsements = [
    { skill: 'css', user: 'Bill' },
    { skill: 'javascript', user: 'Chad' },
    { skill: 'javascript', user: 'Bill' },
    { skill: 'css', user: 'Sue' },
    { skill: 'javascript', user: 'Sue' },
    { skill: 'html', user: 'Sue' }
];

// Result
const this_result = [
    { skill: 'javascript', user: ['Chad', 'Bill', 'Sue'], count: 3 },
    { skill: 'css', user: ['Sue', 'Bill'], count: 2 },
    { skill: 'html', user: ['Sue'], count: 1 }
];

let arrangeUsersBySkill = (users) => {
    return users.reduce((prev, curr, index, arr) => {
        if(prev.length === 0){
            let entry = {
                skill: curr.skill,
                user: [curr.user],
                count: 1
            }
            prev.push(entry);
        } else {
            let isUserPushed = false;
            prev.map((eachSkill)=>{
                if(eachSkill.skill === curr.skill){
                    eachSkill.user.push(curr.user);
                    eachSkill.count += 1;
                    isUserPushed = true;
                }
            });

            if(!isUserPushed){
                let entry = {
                    skill: curr.skill,
                    user: [curr.user],
                    count: 1
                }
                prev.push(entry);
            }
        }
        return prev;
    },[]);
}
// showData( arrangeUsersBySkill(endorsements) );






/* 
    sorting json objects received from ajax call
*/

function getData() {
    let url = "https://api.myjson.com/bins/1773un";
    let xhr = new XMLHttpRequest();
    xhr.addEventListener('load', renderData);
    xhr.open("GET", url);
    xhr.send();
}

function renderData() {
    let data = JSON.parse(this.responseText);
    debugger;
    showData(data);
    
    // Sort by title
    data.sort((a,b)=>{
        return compareString(a.title.toLowerCase(), b.title.toLowerCase());
    });
    showData(data);
}

function compareString(a,b){
    if(a.charCodeAt(0) > b.charCodeAt(0)){
        return 1;
    } else if(a.charCodeAt(0) < b.charCodeAt(0)){
        return -1;
    } else {
        if( a.length !== 0 && b.length !==0 ){
            return compareString(
                    a.substring(1, a.length), 
                    b.substring(1, b.length)
                );
        } else {
            return (a.length !== 0) ? 1 : -1;
        }
    }

}


// getData();