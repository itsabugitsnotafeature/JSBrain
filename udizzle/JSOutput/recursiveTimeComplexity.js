
/* 
    Source: 
        https://stackoverflow.com/questions/13467674/determining-complexity-for-recursive-functions-big-o-notation
*/

let  recursiveFun1 = (n) => {
    if (n <= 0)
        return 1;
    else
        return 1 + recursiveFun1(n-1);
}
/* 
    The first function is being called recursively n times 
        before reaching base case so its O(n), often called linear.
        O(n)
*/



let  recursiveFun2 = (n) => {
    if (n <= 0)
        return 1;
    else
        return 1 + recursiveFun2(n-5);
}
/* 
    O(n)
    The second function is called n-5 for each time, 
        so we deduct five from n before calling the function, 
        but n-5 is also O(n). 
        (Actually called order of n/5 times. And, O(n/5) = O(n) ).
*/



let  recursiveFun3 = (n) => {
    if (n <= 0)
        return 1;
    else
        return 1 + recursiveFun3(n/5);
}
/* 
    log(n) base 5
    This function is log(n) base 5, 
        for every time we divide by 5 before calling the function so its 
            O(log(n))(base 5), 
        often called logarithmic and most often 
        Big O notation and complexity analysis uses base 2.
    
*/



let recursiveFun4 = (n, m, o) => {
    if (n <= 0) {
        console.log("%d, %d\n",m, o);
    }
    else {
        recursiveFun4(n-1, m+1, o);
        recursiveFun4(n-1, m, o+1);
    }
}
/* 
    O(2^n):
    In the fourth, it's 
        O(2^n), 
        or exponential, 
        since each function call calls itself 
        twice unless it has been recursed n times.
    
*/



let  recursiveFun5 = (n) => {
    for (i = 0; i < n; i += 2) {
        // do something
    }

    if (n <= 0)
        return 1;
    else
        return 1 + recursiveFun5(n-5);
}
/* 
    O(n^2):
    As for the last function, the for loop takes n/2 
        since we're increasing by 2, 
        and the recursion take n-5 
        and since the for loop is called recursively 
        therefore the time complexity is in 

            (n-5) *(n/2) = (2n-10) * n = 2n^2- 10n, 
        
        due to Asymptotic behavior and worst case scenario considerations 
        or the upper bound that big O is striving for, 
        we are only interested in the largest term so O(n^2).
    
*/

/* 

    SOURCE LINK :
        https://stackoverflow.com/questions/11032015/how-to-find-time-complexity-of-an-algorithm

    FIRST: 

        This is an excellent article : 
        http://www.daniweb.com/software-development/computer-science/threads/13488/time-complexity-of-algorithm

        The below answer is copied from above (in case the excellent link goes bust)

        The most common metric for calculating time complexity is Big O notation. 
        This removes all constant factors so that the running time can be estimated in 
        relation to N as N approaches infinity. In general you can think of it like this:

        statement;
        Is constant. The running time of the statement will not change in relation to N.

        for ( i = 0; i < N; i++ )
            statement;
        Is linear. The running time of the loop is directly proportional to N. When N 
        doubles, so does the running time.

        for ( i = 0; i < N; i++ ) {
        for ( j = 0; j < N; j++ )
            statement;
        }
        Is quadratic. The running time of the two loops is proportional to the square of N. 
        When N doubles, the running time increases by N * N.

        while ( low <= high ) {
        mid = ( low + high ) / 2;
        if ( target < list[mid] )
            high = mid - 1;
        else if ( target > list[mid] )
            low = mid + 1;
        else break;
        }
        Is logarithmic. The running time of the algorithm is proportional to the number of 
        times N can be divided by 2. This is because the algorithm divides the working area 
        in half with each iteration.

        void quicksort ( int list[], int left, int right )
        {
        int pivot = partition ( list, left, right );
        quicksort ( list, left, pivot - 1 );
        quicksort ( list, pivot + 1, right );
        }
        Is N * log ( N ). The running time consists of N loops (iterative or recursive) that 
        are logarithmic, thus the algorithm is a combination of linear and logarithmic.

        In general, doing something with every item in one dimension is linear, doing something
         with every item in two dimensions is quadratic, and dividing the working area in half 
         is logarithmic. There are other Big O measures such as cubic, exponential, and square root,
          but they're not nearly as common. Big O notation is described as O ( ) where is the 
          measure. The quicksort algorithm would be described as O ( N * log ( N ) ).

        Note that none of this has taken into account best, average, and worst case measures. 
        Each would have its own Big O notation. Also note that this is a VERY simplistic explanation. Big O is the most common, but it's also more complex that I've shown. There are also other notations such as big omega, little o, and big theta. You probably won't encounter them outside of an algorithm analysis course. ;)

        
    SECOND: 

        Taken from here - Introduction to Time Complexity of an Algorithm

        1. Introduction

            In computer science, the time complexity of an algorithm quantifies the amount of time taken by an algorithm to run as a function of the length of the string representing the input.

        2. Big O notation

            The time complexity of an algorithm is commonly expressed using big O notation, which excludes coefficients and lower order terms. When expressed this way, the time complexity is said to be described asymptotically, i.e., as the input size goes to infinity.

            For example, if the time required by an algorithm on all inputs of size n is at most 5n3 + 3n, the asymptotic time complexity is O(n3). More on that later.

            Few more Examples:

            1 = O(n)
            n = O(n2)
            log(n) = O(n)
            2 n + 1 = O(n)

        3. O(1) Constant Time:

            An algorithm is said to run in constant time if it requires the same amount of time regardless of the input size.

            Examples:

            array: accessing any element
            fixed-size stack: push and pop methods
            fixed-size queue: enqueue and dequeue methods

        4. O(n) Linear Time

            An algorithm is said to run in linear time if its time execution is directly proportional to the input size, i.e. time grows linearly as input size increases.

            Consider the following examples, below I am linearly searching for an element, this has a time complexity of O(n).

            int find = 66;
            var numbers = new int[] { 33, 435, 36, 37, 43, 45, 66, 656, 2232 };
            for (int i = 0; i < numbers.Length - 1; i++)
            {
                if(find == numbers[i])
                {
                    return;
                }
            }
            More Examples:

            Array: Linear Search, Traversing, Find minimum etc
            ArrayList: contains method
            Queue: contains method

        5. O(log n) Logarithmic Time:

            An algorithm is said to run in logarithmic time if its time execution is proportional to the logarithm of the input size.

            Example: Binary Search

            Recall the "twenty questions" game - the task is to guess the value of a hidden number in an interval. Each time you make a guess, you are told whether your guess is too high or too low. Twenty questions game implies a strategy that uses your guess number to halve the interval size. This is an example of the general problem-solving method known as binary search

        6. O(n2) Quadratic Time

            An algorithm is said to run in quadratic time if its time execution is proportional to the square of the input size.

            Examples:

            Bubble Sort
            Selection Sort
            Insertion Sort









*/