/* 
Given an array of ints representing a line of people where the space between
indexes is 1 foot, with 0 meaning no one is there and 1 meaning someone is in
that space,

return whether or not there is at least 6 feet separating every person.

Bonus: O(n) linear time (avoid nested loops that cause re-visiting indexes).
*/

const queue1 = [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1];
const expected1 = false;

const queue2 = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected2 = true;

const queue3 = [1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected3 = true;

const queue4 = [];
const expected4 = true;

/**
 * Determines whether each occupied space in the line of people is separated by
 * 6 empty spaces.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<0|1>} queue
 * @returns {Boolean}
 */
function socialDistancingEnforcer(queue) {
  let count = 6;
  let is_safe = true;
  for (let i = queue.indexOf(1); i < queue.length; i++) {
    if (queue[i] == 0) {
      count++;
    } else if (count < 6) {
      is_safe = false;
      return is_safe;
    } else {
      count = 1;
    }
  }
  return is_safe;
}

console.log("Actual:", socialDistancingEnforcer(queue1), "\tExpected:", expected1);
console.log("Actual:", socialDistancingEnforcer(queue2), "\tExpected:", expected2);
console.log("Actual:", socialDistancingEnforcer(queue3), "\tExpected:", expected3);
console.log("Actual:", socialDistancingEnforcer(queue4), "\tExpected:", expected4);
/*****************************************************************************/
