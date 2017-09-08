/* 

Question: 
    Given 'n', find how many different ways you can take steps to reach the 'n'
    E.g. 
    --   findSteps(4) 
        1,1,1,1 
        1,1,2, 
        1,3, 
        2,2 
        4 
    this would return 3 + 1 + 1 = 5

    --    findSteps(5) 
        1,1,1,1,1
        1,1,1,2
        1,1,3
        1,2,2
        1,1,3
        1,4
        2,3
        3,2
        5    
    this would return 6 + 2 + 1 = 9

Solution: 
    Link: http://www.geeksforgeeks.org/count-ways-reach-nth-stair/

    We can easily find recursive nature in above problem. 
    The person can reach n’th stair 
        from either (n-1)’th stair 
            or 
        from (n-2)’th stair. 
    Let the total number of ways to reach n’t stair be ‘ways(n)’. 
    The value of ‘ways(n)’ can be written as following.
    ways(n) = ways(n-1) + ways(n-2)

    The above expression is actually the 
        expression for Fibonacci numbers, 
    but there is one thing to notice, 
    the value of ways(n) is equal to fibonacci(n+1).
    ways(1) = fib(2) = 1 [1,2]
    ways(2) = fib(3) = 2 [0, 1, 1, 2]
    ways(3) = fib(4) = 3 [0, 1, 1, 2, 3]
    ways(4) = fib(5) = 5 [0, 1, 1, 2, 3, 5]
    ways(5) = fib(6) = 8 [0, 1, 1, 2, 3, 5, 8]
    ways(6) = fib(7) = 13 [0, 1, 1, 2, 3, 5, 8, 13]
    ways(7) = fib(8) = 21 [0, 1, 1, 2, 3, 5, 8, 13, 21]
    ways(8) = fib(9) = 34 [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
    etc.
    etc..
 */

function fib(n)
{
   if (n <= 1)
      return n;
   return fib(n-1) + fib(n-2);
}
 
// Returns number of ways to reach s'th stair
function countWays(s)
{
    return fib(s + 1);
}

console.log( countWays(1));
console.log( countWays(2));
console.log( countWays(3));
console.log( countWays(4));
console.log( countWays(5));
console.log( countWays(6));
console.log( countWays(7));
console.log( countWays(8));
