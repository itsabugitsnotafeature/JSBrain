'use strict'
/* 
    Given a string consisting of opening and closing parenthesis, 
    find length of the longest valid parenthesis substring.

    Input : ((()
    Output : 2
    Explanation : ()

    Input: )()())
    Output : 4
    Explanation: ()() 

    Input:  ()(()))))
    Output: 6
    Explanation:  ()(())

    Source: http://www.geeksforgeeks.org/length-of-the-longest-valid-substring/
*/


let longestParentheses = (str) =>{
    debugger
    str = [...str];
    let stack = [-1];
    let result = 0;
    str.forEach(function(element, index) {
        if(element === '('){
            stack.push(index)
        } else {
            stack.pop();
            if(stack.length !== 0){
                result = Math.max(result, (index-stack[stack.length-1]) );
            } else {
                stack.push(index);
            }
        }
    }, this);
    return result;
}

let t3 = '()(()))))'
let t4 = "((()()";
console.log( longestParentheses(t3) );
console.log( longestParentheses(t4) );



let sharamCopied = (str) => {
    str = [...str];
    let n = str.length;
  
    // Create a stack and push -1 as initial index to it.
    let stack = [];
    stack.push(-1);
  
    // Initialize result
    let result = 0;
  
    // Traverse all characters of given string
    for (let i=0; i<n; i++)
    {
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
