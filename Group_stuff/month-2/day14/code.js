// function recursiveSigma(num) {
//   const int = parseInt(num);

//   if (isNaN(int)) {
//     return null;
//   }

//   if (int < 1) {
//     return 0;
//   }
//   return int + recursiveSigma(int - 1);
// }

// console.log(recursiveSigma(5));

/* 
  Recursively sum an arr of ints
*/

const nums1 = [1, 2, 3];
const expected1 = 6;

const nums2 = [1];
const expected2 = 1;

const nums3 = [];
const expected3 = 0;

const nums4 = [1, 2, 3, 4, 5];
const expected4 = 15;

/**
 * Add params if needed for recursion
 * Recursively sums the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The sum of the given nums.
 */
function sumArr(nums) {
  return nums.length == 0 ? 0 : nums.pop() + sumArr(nums)
}

console.log(sumArr(nums1), "expected:", expected1);
console.log(sumArr(nums2), "expected:", expected2);
console.log(sumArr(nums3), "expected:", expected3);
console.log(sumArr(nums4), "expected:", expected4);

/*****************************************************************************/
