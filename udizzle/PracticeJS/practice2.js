let foo = (arr,sum) => {
    
}


























let getFib = (len, fib) => {
    fib = fib ? fib : [];
    if( fib.length < len ){
        if(fib.length < 2){
            fib[0] = 1;
            fib[1] = 1;
            return getFib(len, fib);
        } else {
            fib.push( fib[ fib.length - 1 ] + fib[ fib.length - 2 ]);
            return getFib(len, fib);
        }
    } else if( fib.length == len ){
        return fib
    }
}
getFib(55);






let firstNonRepeatingChar = (inpStr) => {
    let ind = 0;
    let str = '';
    let arr = [...inpStr];
    arr.forEach((char)=>{
        let thisInxed = str.indexOf(char);
        if(thisInxed > -1){
            str = str.slice(0,thisInxed) + str.slice(thisInxed+1, str.length);
        } else {
            str += char;
        }
    });
    return str.charAt(0);
}
firstNonRepeatingChar("aaaabcdefghcdefghijjkkl");






let findMissingNum = (arr) => {
    // Sol 1 : Sort and traverse 
    // Sol 2:  Find (min,max) => then find Each using indexOf in for loop
    // Sol 3:  Find (min,max) => find product using arithmetic expressions, then traverse and minus from total sum
}
findMissingNum([[5, 2, 6, 1, 3]])







let countZeros = (num) => {
    let count = 0;
    while(num > 1){
        count += Math.floor(num/10);
        num = num / 10;
    }
    return count;
}
countZeros(2014);







let haveSumInArray = (arr,sum) => {
    arr.forEach(function(element) {
        var neededElem = sum = element;
        if( arr.indexOf(neededElem) > -1 ){
            return true;
        }
    }, this);
}









var sqrt = (num, guess) => {
    console.log("\nnum => " + num);
    guess = guess ? guess : num/2;
    console.log("guess => " + guess);
    
    let div = num / guess;
    console.log("div => " + div);

    let newGuess = (div+guess)/2;
    console.log("newGuess => " + newGuess);

    if(newGuess === guess){
        return newGuess;
    } else {
        return sqrt(num,newGuess);
    }
}
sqrt(136);
