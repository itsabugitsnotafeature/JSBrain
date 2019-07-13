/* 
    Source : 
        https://leetcode.com/problems/median-of-two-sorted-arrays/description/
    
    There are two sorted arrays nums1 and nums2 of size m and n respectively.
    Find the median of the two sorted arrays. 
    The overall run time complexity should be O(log (m+n)).

*/

var findMedianSortedArrays = function(nums1, nums2) {
    var merged = [];
    while(nums1.length > 0 || nums2.length > 0) {
        if ((nums1.length !== 0) && (nums2.length !== 0)) {
            if(nums1[0] <  nums2[0]) {
                merged.push(nums1.shift());
            } else {
                merged.push(nums2.shift());
            }   
        } else if (nums1.length === 0) {
            merged.push(nums2.shift());
        } else {
            merged.push(nums1.shift());
        }
        
    }
    console.log( JSON.stringify(merged) );
    if( merged.length%2 === 0 ){
        return (merged[ Math.floor((merged.length)/2) ] + merged[ Math.floor((merged.length)/2) -1 ])/2;
    } else {
        return merged[ Math.floor((merged.length)/2)] ;
    }
};

// var arr1 = [1, 2];
// var arr2 = [3, 4];

var arr1 = [1,3];
var arr2 = [2];

console.log( findMedianSortedArrays(arr1, arr2) );