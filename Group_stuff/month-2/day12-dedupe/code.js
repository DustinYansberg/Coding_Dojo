/* 
  Given an int to represent how much change is needed
  calculate the fewest number of coins needed to create that change,
  using the standard US denominations
*/

var cents1 = 25;
var expected1 = { quarter: 1 };

var cents2 = 50;
var expected2 = { quarter: 2 };

var cents3 = 9;
var expected3 = { nickel: 1, penny: 4 };

var cents4 = 99;
var expected4 = { quarter: 3, dime: 2, penny: 4 };

/**
 * Calculates the fewest coins of the standard American denominations needed
 *    to reach the given cents amount.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} cents
 * @param {string} sick
 * @returns {Object<string, number>} - A denomination table where the keys are
 *    denomination names and the value is the amount of that denomination
 *    needed.
 */
function fewestCoinChange(cents) {

    var coin_count = {}
    coin_count['quarter'] = (cents - (cents % 25)) / 25
    cents -= 25 * coin_count['quarter']
    coin_count['dime'] = (cents - (cents % 10))  / 10
    cents -= 10 * coin_count['dime']
    coin_count['nickel'] = (cents - (cents % 5)) / 5
    cents -= 5 * coin_count['nickel']
    coin_count['penny'] = (cents - (cents % 1)) / 1
    
    return coin_count
}

console.log(fewestCoinChange(cents1))
console.log(fewestCoinChange(cents2))
console.log(fewestCoinChange(cents3))
console.log(fewestCoinChange(cents4))

/*****************************************************************************/

/* 
  Given a SORTED array of integers, dedupe the array 
  Because array elements are already in order, all duplicate values will be grouped together.

  Ok to use a new array

  Bonus: do it in O(n) time (no nested loops, new array ok)
  Bonus: Do it in-place (no new array)
  Bonus: Do it in-place in O(n) time and no new array
*/

var nums1 = [1, 1, 1, 1];
var expected1 = [1];

var nums2 = [1, 1, 2, 2, 3, 3];
var expected2 = [1, 2, 3];

var nums3 = [1, 1, 2, 3, 3, 4];
var expected3 = [1, 2, 3, 4];

var nums4 = [1, 1];
var expected4 = [1];

/**
 * De-dupes the given sorted array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array deduped.
 */
function dedupeSorted(nums) {

}

/*****************************************************************************/