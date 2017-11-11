/* 
    Source: 
        http://www.geeksforgeeks.org/dynamic-programming-set-9-binomial-coefficient/

    Following are common definition of Binomial Coefficients.
1) A binomial coefficient C(n, k) can be defined as 
    the coefficient of X^k in the expansion of (1 + X)^n.

2) A binomial coefficient C(n, k) also gives the number of ways, 
    disregarding order, 
    that k objects can be chosen from among n objects; 
    more formally, the number of k-element subsets 
    (or k-combinations) of an n-element set.

The Problem
Write a function that takes two parameters n and k and 
returns the value of Binomial Coefficient C(n, k). For example, 
your function should return 6 for n = 4 and k = 2, and it should return 10 for n = 5 and k = 2.

*/

let binomialCoef = (n, k) => {
    if (k==0 || k==n){
        return 1;
    }
    return  binomialCoef(n-1, k-1) + binomialCoef(n-1, k);
}

let binomialCoef1 = (n, k) => {
    let C = new Array(n).fill(new Array(k));
    let i, j;
 
    // Caculate value of Binomial Coefficient in bottom up manner
    for (i = 0; i <= n; i++)
    {
        for (j = 0; j <= Math.min(i, k); j++)
        {
            // Base Cases
            if (j == 0 || j == i)
                set(C, i, j, 1);
 
            // Calculate value using previosly stored values
            else
            set(C, i, j, (get(C, i-1, j-1) + get(C, i-1, j) ));
        }
    }
    return C[n][k];
}



// console.log(binomialCoef(4,2));
console.log(binomialCoef1(10,5));