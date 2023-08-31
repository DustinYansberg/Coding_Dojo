/*
  Input: a 2 dimensional array of integers
  Output: A 1 dimensional array of all the same elements preserving original order
*/

// this given array has a length of 3 because it has 3 arrays as items
var twoDimArr1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
var expected1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var twoDimArr2 = [[1], [2], [3]];
var expected2 = [1, 2, 3];

var twoDimArr3 = [[], [], [10, 20]];
var expected3 = [10, 20];

/**
 * Flattens a two dimensional array into a new one dimensional array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Array<any>>} twoDimArr An array of arrays of any data type.
 * @returns {Array<any>} The flattened array that should be one dimensional.
 */
function flatten2dArray(twoDimArr) {
  var out = [];

  for (var i = 0; i < twoDimArr.length; i++) {
    for (var j = 0; j < twoDimArr[i].length; j++) {
      out.push(twoDimArr[i][j]);
    }
  }
  twoDimArr = out;
  return twoDimArr;
}

console.log(flatten2dArray(twoDimArr1));
console.log(expected1);
console.log(flatten2dArray(twoDimArr2));
console.log(expected2);
console.log(flatten2dArray(twoDimArr3));
console.log(expected3);

/*****************************************************************************/

/* 
  Array: Second-Largest

  Return the second-largest element of an array, or null if there is none.

  Bonus: do it with one loop and no nested loops
*/

// 2nd largest is 2nd
var nums1 = [2, 3, 1, 4];
var expected1 = 3;

// largest is first
var nums2 = [4, 1, 3, 2];
var expected2 = 3;

// largest duplicated first
var nums3 = [4, 4, 4, 1, 3, 2];
var expected3 = 3;

// 2nd largest is first
var nums4 = [3, 1, 4, 2];
var expected4 = 3;

// largest is 2nd
var nums5 = [3, 4, 2, 1];
var expected5 = 3;

var nums6 = [3, 3];
var expected6 = null;

var nums7 = [2];
var expected7 = null;

var nums8 = [];
var expected8 = null;

/**
 * Finds the second largest int from the given array and returns it or null.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {?number} The second largest int from the given array or null.
 *    The ? in front means it's nullable.
 */
function secondLargest(nums) {
  if (nums.length <= 1) {
    return null;
  }

  // var largest = Math.max(... nums)
  // var arr = nums.splice(nums.indexOf(largest), nums.indexOf(largest) + 1)
  // var secondLargest = Math.max(... nums)

  // if (largest == secondLargest){
  //     return null
  // }

  // return secondLargest

  nums = nums.sort(function (a, b) {
    return b - a;
  });
  var largest = nums[0];
  var secondLargest = null;
  for (var i = 0; i <= nums.length; i++) {
    if (nums[i] != largest && nums[i] > secondLargest) {
      secondLargest = nums[i];
    }
  }

  return secondLargest;
}

console.log(secondLargest(nums1));
console.log(expected1 + "\n");
console.log(secondLargest(nums2));
console.log(expected2 + "\n");
console.log(secondLargest(nums3));
console.log(expected3 + "\n");
console.log(secondLargest(nums4));
console.log(expected4 + "\n");
console.log(secondLargest(nums5));
console.log(expected5 + "\n");
console.log(secondLargest(nums6));
console.log(expected6 + "\n");
console.log(secondLargest(nums7));
console.log(expected7 + "\n");
