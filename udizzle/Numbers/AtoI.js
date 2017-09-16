// Convert a String to Integer.

// aToI("111") => 111
// aToI("143") => 43
// aToI("0") => 0
// aToI("-984") => -984
// aToI("-3.14") => -3.14


function aToI(str) {
    if( typeof str !== 'string' ){
        return null;
    }
    let last = str[str.length-1].charCodeAt(0) - 48;
    last = (str[0] == "-" && last * -1) || last
    let new_str = str.slice(0,str.length-1);
    debugger;
    return (new_str != "" && new_str != "-") && (10 * aToI(new_str) + last) || last; 
}

console.log(aToI("1"));
console.log(aToI("43"));
console.log(aToI("541"));
console.log(aToI("-43"));