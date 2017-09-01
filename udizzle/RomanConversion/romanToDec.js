/*
*  Function to convert Given Roman number to 
*  its Deciman Equavalent.
*/ 

function romanToDec(romanNum){
  let eachRoman = romanNum.split(''),
      result = 0;
  const ALL_ROMANS = {
    'i': 1,
    'x': 10,
    'v': 5
  };
  for(let i=0; i<eachRoman.length; i++ ){
    let temp = eachRoman[i].toLowerCase();
    if(temp in ALL_ROMANS){
      if(temp === 'i' && i!= (eachRoman.length-1) ){
        result -= 1;
        continue;
      } else {
        result += ALL_ROMANS[temp];  
      }
    } else { // Invalid roman literal
      console.log("ERROR: Invalid roman number.");
      result = null;
    }
  }
  return result;
}

function assert(isValue, expectedValue){
  if(!(isValue === expectedValue)){
    console.log("Expected calculated value:" + isValue + 
                " to be Equal to:" + expectedValue);
    return false;
  } 
  return true;
}

function fromRoman(str) {  
  let result = 0;
  // the result is now a number, not a string
  let decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];

  for (let i = 0;i<=decimal.length;i++) {
//     debugger
    while (str.indexOf(roman[i]) === 0){
      
      result += decimal[i];
      str = str.replace(roman[i],'');
      
    }
    
  }
  
  return result;
}
debugger
console.log( assert(fromRoman("I"), 1) );
console.log( assert(fromRoman("V"), 5) );
console.log( assert(fromRoman("X"), 10) );
console.log( assert(fromRoman("IV"), 4) );
console.log( assert(fromRoman("IX"), 9) );

console.log( assert(fromRoman("XXX"), 30) );
console.log( assert(fromRoman("XXIII"), 23) );
console.log( assert(fromRoman("XIV"), 14) );
console.log( assert(fromRoman("XXXVIII"), 38) );
console.log( assert(fromRoman("XXIX"), 29) );



// console.log( assert(romanToDec("i"), 1) );
// console.log( assert(romanToDec("V"), 5) );
// console.log( assert(romanToDec("x"), 10) );
// console.log( assert(romanToDec("iv"), 4) );
// console.log( assert(romanToDec("ix"), 9) );

// console.log( assert(romanToDec("xxx"), 30) );
// console.log( assert(romanToDec("xxIII"), 23) );
// console.log( assert(romanToDec("XIV"), 14) );
// console.log( assert(romanToDec("XXXVIII"), 38) );
// console.log( assert(romanToDec("xxix"), 29) );



