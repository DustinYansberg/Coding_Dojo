/* 
  Given an array of integers
  return the index where the smallest integer is located

  return -1 if there is no smallest integer (array is empty) 
  since -1 is not a valid index, this indicates it couldn't be found

  If the smallest integer occurs more than once, return the index of the first one.
*/

var nums1 = [5, 2, 3];
var expected1 = 1;

var nums2 = [5, 4, 2, 2, 3];
var expected2 = 2;

var nums3 = [];
var expected3 = -1;

/**
 * Returns the index of the smallest number from the given array.
 * - Time: O(n).
 * - Space: O(1).
 * @param {Array<number>} nums
 * @returns {number} Index of smallest number or -1 if empty given array.
 */
function indexOfMinVal(nums) {
  var minVal = Number.MAX_VALUE;
  var indexVal = -1;

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] < minVal) {
      minVal = nums[i];
      indexVal = i;
    }
  }
  return indexVal;
}

console.log(indexOfMinVal(nums1));
console.log(expected1);
console.log(indexOfMinVal(nums2));
console.log(expected2);
console.log(indexOfMinVal(nums3));
console.log(expected3);

/*******************************************************************************/

/* 
  Given an array, reverse it's items in place
  return the array after reversing it

  Do it in place without using any built in methods
*/

var arr1 = [1, 2, 3];
var expected1 = [3, 2, 1];

var arr2 = ["a", "b"];
var expected2 = ["b", "a"];

var arr3 = ["a"];
var expected3 = ["a"];

var arr4 = [];
var expected4 = [];

/**
 * Reverses the given arr in place without built in methods
 * BONUS: Do this in place without built ins
 * - Time: O(n).
 * - Space: O(1).
 * @param {Array<any>} items
 * @returns {Array<any>} The given arr after being reversed.
 */
function reverseArr(items) {
  var len = items.length;

  for (var i = 0; i < Math.floor(len / 2); i++) {
    var temp = items[len - 1 - i];
    items[len - 1 - i] = items[i];
    items[i] = temp;
  }
  return items;
}

console.log(reverseArr(arr1));
console.log(expected1);

console.log(reverseArr(arr2));
console.log(expected2);

console.log(reverseArr(arr3));
console.log(expected3);

console.log(reverseArr(arr4));
console.log(expected4);
