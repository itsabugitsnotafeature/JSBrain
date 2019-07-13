/* 
    Write a function to determine if a string is a number 
    WITHOUT 
        using any built-in function.
    
    JSbin: 
        https://jsbin.com/fodujaf/edit?js,console
*/
function isNumber(str) {
    str = str.split('');
    let index = 0;
    while (index<str.length) {
        // console.log('Switching for : ' + str[index]);
        if (str[index] === '.') {
            index++;
        }
        switch (str[index]) {
            case '1':
                index++;
                break
            case '2':
                index++;
                break
            case '3':
                index++;
                break
            case '4':
                index++;
                break
            case '5':
                index++;
                break
            case '6':
                index++;
                break
            case '7':
                index++;
                break
            case '8':
                index++;
                break
            case '9':
                index++;
                break
            case '0':
                index++;
                break
            default:
                return false;
        }
    };
    return true;
}

console.log(assert(isNumber('111'), true));
console.log(assert(isNumber("aafv"), false));
console.log(assert(isNumber("11.1"), true));
console.log(assert(isNumber("9"), true));
console.log(assert(isNumber("10"), true));
console.log(assert(isNumber("1"), true));

// SIMPLE ASSERT FUNCTION
function assert(isValue, expectedValue) {
    if (!(isValue === expectedValue)) {
        console.log("Expected calculated value:" + isValue +
            " to be Equal to:" + expectedValue);
        return false;
    }
    return true;
}