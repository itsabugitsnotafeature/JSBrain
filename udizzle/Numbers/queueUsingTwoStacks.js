/* 
    Source: 
        https://github.com/kennymkchan/interview-questions-in-javascript

    Stacks and Queues
    Implement enqueue and dequeue using only two stacks
*/

let stack1 = []; // First stack
let stack2 = []; // Second stack

let enqueue = (num) => {
    stack1.push(num);
}

let dequeue = () => {
    while(stack1.length !== 0){
        stack2.push(stack1.pop());
    }
    let val = stack2.pop();
    while(stack2.length !== 0){
        stack1.push(stack2.pop());
    }
    return val
}