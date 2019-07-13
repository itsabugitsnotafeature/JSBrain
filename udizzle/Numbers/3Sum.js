'use strict'
/* 
Source 
    https://leetcode.com/problems/3sum/description/

    Given an array S of n integers, are there elements a, b, c 
    in S such that a + b + c = 0? Find all unique triplets in the 
    array which gives the sum of zero.
    
    Note: The solution set must not contain duplicate triplets.
    For example, given array S = [-1, 0, 1, 2, -1, -4],
    
    A solution set is:
    [
      [-1, 0, 1],
      [-1, -1, 2]
    ]
*/

var threeSum = function (nums) {
    debugger
    var result = new Array();
    nums.sort((a, b) => {
        if (a > b) { return true }
        return false;
    });

    for (let i = 0; i < nums.length; i++) {
        var lo = 0;
        var pivot = nums.length - 1;

        while (pivot >= 0) {
            if (pivot === i) {
                pivot--;
            }
            for (let j = 0; j < nums.length - 1; j++) {
                if (j === i || j === pivot) {
                    continue;
                }
                if (nums[i] + nums[j] + nums[pivot] === 0) {
                    let pairs = [nums[i], nums[j], nums[pivot]];
                    pairs.sort((a, b) => {
                        if (a > b) { return true }
                        return false;
                    });

                    let isAdded = false;
                    result.forEach((item) => {
                        if (JSON.stringify(item) === JSON.stringify(pairs)) {
                            isAdded = true;
                        }
                    });

                    if (!isAdded) {
                        result.push(pairs);
                    }
                }
            }
            pivot--;
        }
    }
    return result;
};

// Not working on leet - code
var threeSum_optimized = function (nums) {
    let result = [];

    if (nums == null || nums.length < 3){
        return result;
    }

    nums.sort((a, b) => {
        if (a > b) { return true }
        return false;
    });
    
    for (let i= 0; i < nums.length - 2; i++){

        if (i == 0 || nums[i] > nums[i - 1]) {
            let j= i + 1;
            let k= nums.length - 1;

            while (j < k) {
                if (nums[i] + nums[j] + nums[k] == 0) {
                    let l = [];
                    l.push(nums[i]);
                    l.push(nums[j]);
                    l.push(nums[k]);
                    result.push(l);
                    j++;
                    k--;
                    //handle duplicate here
                    while (j < k && nums[j] == nums[j - 1])
                        j++;
                    while (j < k && nums[k] == nums[k + 1])
                        k--;

                } else if (nums[i] + nums[j] + nums[k] < 0) {
                    j++;
                } else {
                    k--;
                }
            }
        }
    }
    return result;
};

var S = [-1, 0, 1, 2, -1, -4];
var S1 = [-13, 5, 13, 12, -2, -11, -1, 12, -3, 0, -3, -7, -7, -5, -3, -15, -2, 14, 14, 13, 6, -11, -11, 5, -15, -14, 5, -5, -2, 0, 3, -8, -10, -7, 11, -5, -10, -5, -7, -6, 2, 5, 3, 2, 7, 7, 3, -10, -2, 2, -12, -11, -1, 14, 10, -9, -15, -8, -7, -9, 7, 3, -2, 5, 11, -13, -15, 8, -3, -7, -12, 7, 5, -2, -6, -3, -10, 4, 2, -5, 14, -3, -1, -10, -3, -14, -4, -3, -7, -4, 3, 8, 14, 9, -2, 10, 11, -10, -4, -15, -9, -1, -1, 3, 4, 1, 8, 1];
// console.log(JSON.stringify(threeSum(S1), null, 2));
console.log(JSON.stringify(threeSum_optimized(S1), null, 2));