/* 
  Array: Mode
  
  Create a function that, given an array of ints,
  returns the int that occurs most frequently in the array.

  What if there are multiple items that occur the same number of time?
    - return all of them (in an array)
    - what if all items occur the same number of times?
      - return empty array
*/

const nums1 = [];
const expected1 = [];

const nums2 = [1];
const expected2 = [1];

const nums3 = [5, 1, 4];
const expected3 = [];

const nums4 = [5, 1, 4, 1];
const expected4 = [1];

const nums5 = [5, 1, 4, 1, 5];
const expected5 = [5, 1];

const nums6 = [
  6, 4, 3, 2, 7, 8, 8, 8, 8, 8, 8, 3, 3, 3, 1111, 1111, 1111, 1111, 1111, 1111,
];
const expected6 = [8, 1111];

const nums7 = [5, 5, 5, 1, 1, 1, 4, 4, 4];
const expected7 = [];

//  - order doesn't matter

/**
 * Finds the mode or all modes if there are more than one. The mode is the
 *    value which occurs the most times in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Test
 * @returns {Array<number>} Mode or modes in any order.
 */
function mode(nums) {
  // dict to track the occurence of each element in nums
  // maxOccurrence to track the highest number of occurences of any element in nums
  // answer array to add all elements that occur the maxOccurrence of times
  let dict = {};
  let maxOccurrence = 0;
  let answer = [];

  //   if nums only holds 1 or is empty, return it
  if (nums.length <= 1) return nums;

  //   populate dict with the count of each element in nums
  for (const i in nums) !dict[nums[i]] ? dict[nums[i]] = 1 : dict[nums[i]]++;

  // find the maxOccurrence value
  for (const key in dict) if (dict[key] > maxOccurrence) maxOccurrence = dict[key];

  // add each key in dict to the answer array if the key's value matches the maxOccurrece
  for (const key in dict) if (dict[key] == maxOccurrence) answer.push(parseInt(key));

  //   return an empty array if the length of keys in dict matches the length of answer
  return Object.keys(dict).length == answer.length ? [] : answer;
}

console.log(mode(nums1), expected1);
console.log(mode(nums2), expected2);
console.log(mode(nums3), expected3);
console.log(mode(nums4), expected4);
console.log(mode(nums5), expected5);
console.log(mode(nums6), expected6);
console.log(mode(nums7), expected7);
/*****************************************************************************/
