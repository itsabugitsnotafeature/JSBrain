






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