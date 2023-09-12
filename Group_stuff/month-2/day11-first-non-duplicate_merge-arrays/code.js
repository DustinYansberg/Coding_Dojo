/* 
  Given two arrays, interleave them into one new array.

  The arrays may be different lengths. The extra items should be added to the
  back of the new array.
*/

var arrA1 = [1, 2, 3];
var arrB1 = ["a", "b", "c"];
var expected1 = [1, "a", 2, "b", 3, "c"];

var arrA2 = [1, 3];
var arrB2 = [2, 4, 6, 8];
var expected2 = [1, 2, 3, 4, 6, 8];

var arrA3 = [1, 3, 5, 7];
var arrB3 = [2, 4];
var expected3 = [1, 2, 3, 4, 5, 7];

var arrA4 = [];
var arrB4 = [42, 0, 6];
var expected4 = [42, 0, 6];

/**
 * Interleaves two arrays into a new array. Interleaving means alternating
 * the items starting from the first array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr1
 * @param {Array<any>} arr2
 * @returns {Array<any>} A new array of interleaved items.
 */
function interleaveArrays(arr1, arr2) {
  var merged = [];
  const maxLength = Math.max(arr1.length, arr2.length);
  
  for (let i = 0; i < maxLength; i++) {
    if (arr1[i] != undefined) merged.push(arr1[i]);
    if (arr2[i] != undefined) merged.push(arr2[i]);
  }
  return merged;
}

console.log(
  "Actual output is:",
  interleaveArrays(arrA1, arrB1),
  "Expected output was:",
  expected1
);
console.log(
  "Actual output is:",
  interleaveArrays(arrA2, arrB2),
  "Expected output was:",
  expected2
);
console.log(
  "Actual output is:",
  interleaveArrays(arrA3, arrB3),
  "Expected output was:",
  expected3
);
console.log(
  "Actual output is:",
  interleaveArrays(arrA4, arrB4),
  "Expected output was:",
  expected4
);

/*****************************************************************************/

/* 
  Given an array of integers
  return the first integer from the array that is not repeated anywhere else

  If there are multiple non-repeated integers in the array,
  the "first" one will be the one with the lowest index.
*/

var nums1 = [3, 5, 4, 3, 4, 6, 5, 7];
var expected1 = 6;

var nums2 = [3, 5, 5];
var expected2 = 3;

var nums3 = [3, 3, 5];
var expected3 = 5;

var nums4 = [5];
var expected4 = 5;

var nums5 = [];
expected5 = null;

/**
 * Finds the first int from the given array that has no duplicates. I.e., the
 *    item at the lowest index that doesn't appear again in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number|null} The first int value from the given array that has no
 *    dupes or null if there is none.
 */
function firstNonRepeated(nums) {
  var dict = {};

  for (const i in nums) {
    let num = nums[i];
    num in dict ? dict[num]++ : (dict[num] = 1);
  }
  for (const i in nums) {
    let num = nums[i];
    if (dict[num] == 1) return num;
  }
  return null;
}

console.log(
  "Actual output is:",
  firstNonRepeated(nums1),
  "Expected output was:",
  expected1
);
console.log(
  "Actual output is:",
  firstNonRepeated(nums2),
  "Expected output was:",
  expected2
);
console.log(
  "Actual output is:",
  firstNonRepeated(nums3),
  "Expected output was:",
  expected3
);
console.log(
  "Actual output is:",
  firstNonRepeated(nums4),
  "Expected output was:",
  expected4
);
console.log(
  "Actual output is:",
  firstNonRepeated(nums5),
  "Expected output was:",
  expected5
);

/*****************************************************************************/
