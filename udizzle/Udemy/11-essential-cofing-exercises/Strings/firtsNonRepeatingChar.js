'use Strict'

let getFirstNonRepeatingChar = (str) => {
    debugger
    str = [...str];
    
    for(let i=0 ; i< str.length ; i++){
        let remainderString = str.slice(0,i).concat(str.slice(i+1 ,str.length));
        if(remainderString.indexOf(str[i]) === -1){
            return str[i];
        }
    }
    return null;
}
let testPositive = 'abcdefdabcdef5kkk';
let testNegative = 'abcdefabcdefabcdef';
console.log(getFirstNonRepeatingChar(testPositive));
console.log(getFirstNonRepeatingChar(testNegative));