


/* 
    // Remove words from 's' that are in 't'
    // Return array will be in order of words placement in original string 's'

    let s = "I am using a HackerRank to improve programming";
    let t = "am HackerRank to improve";

    function missingWords(s, t) {
        s = s.split(' ');
        t = t.split(' ');

        if (t.length === s.length) {
            return [];
        }
        t.forEach((word) => {
            let index = s.indexOf(word);
            if (index > -1) {
                s.splice(index, 1);
            }
        });
        return s;
    }
    missingWords(s, t);
*/


/* 
    let getFibomacci = (num) => {
        if(num <= 1){
            return 1;
        }
        else {
            return getFibomacci(num-1) + getFibomacci(num-2);
        }
    }
    console.log(getFibomacci(8) === 34);
*/



 /* 

    let convertToBinary = (decNum) => {
        let binNum = '';
        let bit;
        while(decNum !== 1){
            bit = (decNum % 2);
            decNum = parseInt(decNum/2);
            binNum += bit;
        }
        return [...(binNum + decNum)].reverse().join('');
    }
    console.log(convertToBinary(782));

*/


/* 
    let isPowOfN = (num, n) => {
        debugger
        if(num===1){
            return true;
        }
        else if (num < 1){
            return false;
        }
        return isPowOfN(num/n, n);
    }
    console.log(isPowOfN(1000, 2) === false );
    console.log(isPowOfN(1024, 2) === true );
    console.log(isPowOfN(66, 2) === false );
    console.log(isPowOfN(9, 3) === true );
    console.log(isPowOfN(27, 3) === true );

*/


/* 

    let greatestDiff = (arr) => {
        debugger
        let max_diff = -Infinity;
        let currMinValue = arr[0];

        for(let i=1 ; i<arr.length ; i++){
            if(currMinValue > arr[i]){
                currMinValue = arr[i];
                continue;
            }
            let diff = arr[i] - currMinValue;
            max_diff = Math.max(max_diff, diff);
        }
        return max_diff;
    }
    let arr = [7, 8, 4, 9, 9, 15, 3, 1, 10];
    console.log(greatestDiff(arr) === 11 );

*/

/* 
    // Max Sub Array Sum
    let max_sum = (arr) => {
        let max_so_far = -Infinity;
        let max_ending_here = arr[0];
        for(let i=1 ; i<arr.length ; i++ ){
            max_ending_here += arr[i];
            if (max_ending_here > max_so_far){
                max_so_far = max_ending_here;            
            } 
            if(max_ending_here < 0){
                max_ending_here = 0;
            }
        }
        return max_so_far;
    }
    let IDEAL_INPUT = [-2, 1, -3, 4, -1, 2, 1, -5, 4];  // 6 => [4, -1, 2, 1]
    let IDEAL_NEG_INPUT = [-1, -1, -1, -1, -1, -5, -4]; // -1 
    console.log(max_sum(IDEAL_INPUT) == 6 );
    console.log(max_sum(IDEAL_NEG_INPUT) === -1 ); 
    let LONGEST_INPUT = [-64, 78, 56, 10, -8, 26, -18, 47, -31, 75, 89, 13, 48, -19, -69, 36, -39, 55, -5, -4, -15, -37, -27, -8, -5, 35, -51, 83, 21, -47, 46, 33, -91, -21, -57, 0, 81, 1, -75, -50, -23, -86, 39, -98, -29, 69, 38, 32, 24, -90, -95, 86, -27, -23, -22, 44, -88, 3, 27, 9, 55, -50, -80, 40, 5, -61, -82, -14, 40, -58, 35, 93, -68, -26, 94, 3, -79, 9, -88, 21, 19, -84, 7, 91, -8, 84, 12, -19, -13, -83, 66, -80, -34, 62, 59, 48, -98, 53, -66, 18, 94, 46, 11, -73, 96, -18, 6, -83, 91, 17, 38, 10, 9, -78, -22, 77, 83, 89, -42, -30, -94, -98, -34, -51, 63, -97, 96, 64, 55, -93, -41, 27, 52, 69, 53, 26, -71, -64, 42, -80, 52, -43, 6, -62, -21, 83, -85, -38, 49, -50, 8, 55, -72, 74, 80, 90, 53, 53, 32, -15, 36, 90, -88, -34, 37, 41, 91, 65, 76, 33, 61, 5, 90, -33, 42, -54, -73, 34, -16, 75, 83, 91, 7, -89, 42, -36, 77, -5, -83, 9, 80, 53, -23, 68, -81, 90, 10, -90, 55, -14, 19, -7, 91, -14, 59, 33, 31, 62, -33, -85, 37, -73, 83, -78, -86, 25, -15, 91, 97, 2, -23, 54, -68, 53, 22, -73, 43, -68, -87, -25, 18, 31, 67, -14, 94, 3, -81, 25, -35, -37, 17, 79, -34, -23, -99, -43, -98, -38, -52, 75, 63, 1, 29, 71, -68, -71, 74, 51, -40, 86, -73, 54, -5, 70, -60, -11, -49, -64, 90, -8, -25, -16, -52, 40, 60, -75, 96, 39, -13, -79, 14, -73, 22, -79, 75, 30, -51, 49, -19, -15, 36, -16, -60, -69, -68, -21, -4, -18, -9, -14, 50, 65, 70, 75, -17, 30, 99, -44, -31, -14, -46, 60, -10, 52, 80, -35, -18, -94, -86, 62, -10, 49, -53, 6, 56, -45, 62, -48, 36, -47, 15, -37, -81, -15, -62, -22, 91, -85, 33, -62, -23, 86, 97, 66, 15, 54, -69, 96, 36, -55, 36, -97, 70, 82, 9, 4, -63, -29, 32, 49, 23, -53, 88, 18, 8, -96, 72, -23, -82, 6, 14, -6, -31, -12, -39, 61, -58, -32, 57, 77, 12, -7, 56, -40, -48, -35, 40, -35, 12, -28, 90, -87, -4, 79, 30, 80, 82, -20, -43, 76, 62, 70, -30, -92, -42, 7, 68, -24, 75, 26, -70, -36, 95, 86, 0, -52, -49, -60, 12, 63, -11, -20, 75, 84, -41, -18, 41, -82, 61, 98, 70, 0, 45, -83, 8, -96, 24, -24, -44, -24, -98, -14, 39, 97, -51, -60, -78, -24, -44, 10, -84, 44, 89, 67, 5, -75, -73, -53, -81, 64, -55, 88, -35, 89, -94, 72, 69, 29, -52, -97, 81, -73, -35, 20, -99, 13, 36, 98, 65, 69, 8, 81, 13, -25, 25, 95, -1, 51, -58, -5, 16, -37, -17, 57, -71, -35, 29, 75, 70, 53, 77, 51, 79, -58, -51, 56, 31, 84, 54, -27, 30, -37, -46, -56, 14, 56, -84, 89, 7, -43, -16, 99, 19, 67, 56, 24, -68, -38, -1, -97, -84, -24, 53, 71, -6, -98, 28, -98, 63, -18, -25, -7, 21, 5, 13, -88, -39, 28, -98, 68, 61, -15, 44, -43, -71, 1, 81, -39, 62, -20, -60, 54, 33, 69, 26, -96, 48, -69, -94, 11, -11, -20, 80, 87, 61, -29, 98, -77, 75, 99, 67, 37, -38, 11, 93, -10, 88, 51, 27, 28, -68, 66, -41, 41, 36, 84, 44, -16, 91, 49, 71, -19, -94, 28, -32, 44, 75, -57, 66, 51, -80, 10, -35, -19, 97, -65, 70, 63, 86, -2, -9, 94, -59, 26, 35, 76, 11, -21, -63, -21, -94, 84, 59, 87, 13, -96, 31, -35, -53, -26, -84, -34, 60, -20, 23, 58, 15, -7, 21, -22, 67, 88, -28, -91, 14, -93, 61, -98, -38, 75, -19, -56, 59, -83, -91, -51, -79, 16, 14, -56, 90, 6, -14, 27, 63, -91, -15, -22, -22, 82, 32, -54, 47, -96, -69, -61, 86, 91, -60, -75, 43, -3, -31, 3, -9, -23, 28, 11, 69, -81, 31, 59, 25, -83, -36, -12, -75, 48, 42, -21, 8, -26, 24, -68, -23, 31, -30, -60, 0, -13, -36, -57, 60, 32, 22, -49, 85, -49, 38, 55, -54, -31, -9, 70, -38, 54, -65, -37, -20, 76, 42, 64, -73, -57, 95, -20, 74, -57, 19, -49, 29, 83, -7, -11, -8, -84, 40, -45, -57, -45, 86, -12, 24, -46, -64, 62, -91, -30, -74, -35, -76, 44, -94, -73, 86, 77, 7, 37, -80, -74, 87, 48, 85, -19, -85, -45, -27, 31, 9, -8, 85, -28, 79, -14, 25, 91, -51, 10, -61, -49, 74, -38, 94, 56, -12, 57, 34, 71, -5, 53, 74, -18, -21, 59, 39, -30, 90, -88, -99, -24, 3, 62, 47, -40, -51, -27, -49, -26, 82, -11, 1, 34, 27, -5, -10, 92, -48, -99, 63, 23, 31, 14, -94, -90, -49, 44, -44, -59, 33, -44, 17, -64, -82, -36, -28, -57, 13, 0, -7, -4, 88, 70, -93, -7, -35, -4, -15, -6, -26, -75, 93, -95, 39, 98, 90, 66, 20, -54, -93, -47, -22, 0, -35, -28, 41, 14, -8, -46, -86, 84, 26, -98, 55, 32, -29, 96, -94, 32, -33, -21, 57, -39, -17, -27, -64, -50, -61, 55, -28, -78, 84, 49, 22, -73, -79, -37, 40, 12, -7, 53, -26, -80, 31, -94, 51, -97, -98, 56, 34, -54, -88, -32, -17, -29, 17, 18, 20, 32, -49, 91, 54, -65, 40, -47, -39, 38, -8, -99, -73, 84, 30, 0, -96, -38, 5, 32, -36, -16, -35, 74, 29, -23, -80, -88, 47, 36, 29, -32, -54, 79, -64, 76, 91, 53, -71, -71, -9, -3, -93, 17, -19, 36, 94, -38, 97, -1, 70, -62, 82, -65, -87, 11, 11, -68, -1, -41, 44, -71, 3, 89];
    console.log(max_sum(LONGEST_INPUT) == 3452 );
*/


/* 

    // Product of all elements except one at index [i]
    let productOfArrayElements = (arr) => {
        let hist = 1;
        let res = [];
        for(let i=0 ; i< arr.length ; i++){
            res.push(hist);
            hist = arr[i] * hist;
        }
        console.log(JSON.stringify(res));
    
        hist = 1;
        for(let i = res.length-1 ; i >= 0 ; i--){
            res[i] = hist * res[i];
            hist = hist*arr[i];
        }
        return res;
    }
    let a1 = [2, 2, 4, 1]; // 8, 8, 4, 16
    console.log(JSON.stringify(productOfArrayElements(a1)));

*/

/* 

    let removeCharRequiredToMakeAnagram = (str1, str2) => {
        let adderMap = new Map();
        let deleteCount = 0;
        for(let i=0 ; i<str1.length ; i++){
            if(adderMap.has(str1[i])){
                adderMap.set(str1[i], adderMap.get(str1[i]) + 1) ;
            } else {
                adderMap.set(str1[i], 1);
            }
        }

        for(let i=0 ; i<str2.length ; i++){
            if(adderMap.has(str1[i])){
                if( adderMap.get(str1[i]) > 0 ){
                    adderMap.set(str1[i], adderMap.get(str1[i]) - 1);
                } else {
                    deleteCount++;
                }
            } else {
                deleteCount++;
            }
        }

        adderMap.forEach((value, key)=>{
            deleteCount += value;
        })
        return deleteCount;
    }
    console.log(removeCharRequiredToMakeAnagram('hea','bcadeh') === 3);
    console.log(removeCharRequiredToMakeAnagram('cddgk','gdc') === 2);
    console.log(removeCharRequiredToMakeAnagram('aaa','aaaa') === 1);

*/


/* 

    let longestPalendromicSubstring = (str) => {
        debugger;
        let result = '';
        let centerIndex = 0;
        let offset = 0;
        let centerNode = str[centerIndex];
        for(let i=1 ; i < str.length ; i++){
            centerIndex = i;
            offset = 0;

            while( str[centerIndex + offset] === str[centerIndex - offset] ){
                offset++;
            }

            let thisPalen = str.substring(centerIndex-offset+1, centerIndex+offset);
            if(thisPalen.length > result.length){
                result = thisPalen;
            }
        }
        return result;
    }
    let testIp1 = 'aaaaafvewvrewgfdcrwgfrewff'; // aaaaa

    console.log(longestPalendromicSubstring(testIp1));
    console.log(longestPalendromicSubstring(testIp1) === 'aaaaa');

    let testIp2 = 'babcbabcbaccba'; // abcbabcba
    console.log(longestPalendromicSubstring(testIp2));
    console.log(longestPalendromicSubstring(testIp2) === 'abcbabcba');

    let testIp_max = "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth";
    console.log(longestPalendromicSubstring(testIp_max));
    console.log(longestPalendromicSubstring(testIp_max) === 'ranynar');

*/


/* 
    // Find the longest non repeating substring 

    let longestNonRepeatingSubstring = (str) => {
        let res = '';
        let longest = '';
    debugger
        for(let i=0 ; i<str.length ; i++){
            if( res.indexOf(str[i]) === -1 ) {
                res += str[i];
                if(res.length > longest.length){
                    longest = res;
                }
            } else {
                if(res.length > longest.length){
                    longest = res;
                }
                let index = res.indexOf(str[i]);
                res = res.substr(index+1, res.length);
                res += str[i];
            }
        }
        return longest;
    }
    console.log(longestNonRepeatingSubstring("ohvhjdml") === 'vhjdml' );
    console.log(longestNonRepeatingSubstring('aaaabcbcbcbcbcabcdefcc') === 'abcdef');	// abcdef
    console.log(longestNonRepeatingSubstring('abcdaaaaaabbbbbcccdddd') === 'abcd'); // abcd
    console.log(longestNonRepeatingSubstring('aaaabcbcbcbcbc') === 'abc');		// abc
    console.log(longestNonRepeatingSubstring('abcabcbb') === 'abc');		// abc

*/


/* 
    // Distance between words
    let findDistance = (arr, w1, w2) => {
        let diff = 0;
        let foundOne = false;
        for(let i=0 ; i<arr.length ; i++){
            if( arr[i] == w1 || arr[i] == w2 ){
                if(!foundOne){
                    foundOne = true;
                } else {
                    return diff;
                }
            }
            if(foundOne === true){
                diff++;
            }
        }
        return null;
    }

    let findDistance_1 = (arr, w1, w2) => {
        let diff = (arr.indexOf(w1) - arr.indexOf(w2))
        return (diff<0)? (diff * -1) : diff;
    }
    let sentence = "today is a lovely day my dear lad"
    console.log( findDistance(sentence.split(' '), 'today', 'lad') );
    console.log( findDistance(sentence.split(' '), 'a', 'is') );
    console.log( findDistance(sentence.split(' '), 'a', 'my') );

*/


/* 
    // Convert Character to Integer
    let myAToI = (strNum) => {
        
        let lastDigit = strNum[strNum.length-1].charCodeAt() - ('0').charCodeAt();
        lastDigit = (strNum[0] === "-") ? (lastDigit * -1) : lastDigit ;
        let remainingString = strNum.substr(0, strNum.length - 1);

        if( remainingString==="" || remainingString === "-"){
            return lastDigit;
        } else {
            return ( 10 * myAToI(remainingString) + lastDigit )
        }
    }
    console.log(myAToI('541') === 541);
*/


/* 
    // Roman to Decimal Number 
    let romanToDec = (romanNum) => {

        let romanDict = [ 'IX', 'X', 'IV', 'V', 'I' ];
        let decDict = [ 9, 10, 4, 5, 1 ];
        let num = 0;

        while(romanNum !== ''){
            for(let i=0 ; i<romanDict.length ; i++){
                if(romanNum.indexOf(romanDict[i]) ===0 ){
                    num += decDict[i];
                    romanNum = romanNum.slice(romanDict[i].length, romanNum.length);
                    break;
                }
            }
        }
        return num;
    }
    console.log(romanToDec("I"));
    console.log(romanToDec("V"));
    console.log(romanToDec("X"));
    console.log(romanToDec("XIV"));
    console.log(romanToDec("XXXIX"));
    console.log(romanToDec("XXXXVIII"));
    console.log(romanToDec("XXIII"));   // 23
*/


/* 

    // Promises
    let pr1 = () => {
        console.log("Starting PR1 !");
        return new Promise((resolve,reject) => {
            setTimeout(()=>{
                console.log("Returning from PR-1 after 4 seconds!");
                resolve();
            }, 4000);
        })
    }

    let pr2 = () => {
        console.log("Starting PR2 !");
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                console.log("Returning from PR-2 after 2 seconds!");
                resolve();
            }, 2000);
        })
    }

    (function mainPromiseConsolidator() {
        console.log("Consolidating Promises!");

        // Promise.all([pr1, pr2]).then(()=>{
        //     console.log("DONE1");
        // });

        Promise.all([
            pr1().then(()=>{
                console.log("DONE with PROMISE PR1 !");
            }),
            pr2().then(()=>{
                console.log("DONE with PROMISE PR2 !");
            })
        ]).then(()=>{
            console.log("\n\n WOOHOO :: DONE with PROMISE ALL !");
        })
    })();

*/


/* 

    // Business Trip 
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

    let tripMap = new Map();
    let visitedMap = new Map();

    for(let i=0 ; i < passes.length ; i++){
        tripMap.set(passes[i].depart,passes[i].arrival);
        visitedMap.set(passes[i].arrival, true);
    }

    let startPlace = null;

    tripMap.forEach((arr,dep)=>{
        if(!visitedMap.has(arr)){
            startPlace = arr;
        } else if(!visitedMap.has(dep)){
            startPlace = dep;
        }
    });

    let trip = new Array();
    trip.push(startPlace);

    for(let i=0 ; i < passes.length ; i++){
        startPlace = tripMap.get(startPlace);
        trip.push(startPlace);
    }
    // console.log(JSON.stringify(trip));

*/