/* 
  Given array and an additional value, insert this value at the beginning of
  the array by making space for it at the beginning of the array.
  return the new length of the array.
  
  Do this without using any built-in array methods.
*/

var arr1 = [1, 2, 3];
var newItem1 = 0;
var expected1 = 4;
// after function is called, arr1 should be:
var arr1Expected = [0, 1, 2, 3];

var arr2 = [];
var newItem2 = "a";
var expected2 = 1;
// after function is called, arr2 should be:
var arr2Expected = ["a"];

/**
 * Shifts all items to the right by one to make space to add the given new item
 * to the front of the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} items An array of any kind of items.
 * @param {any} newItem To add to front.
 * @returns {number} The new length of items.
 */

function unshift(items, newItem) {
  console.log("The inputs are", newItem, items);
  var newArray = [];
  newArray[0] = newItem;
  for (var i = 1; i <= items.length; i++) {
    newArray[i] = items[i - 1];
  }
  console.log("The outcome is\n", newArray.length, newArray);
}

function unshift(items, newItem) {
  console.log("The inputs are", newItem, items);
  for (var i = 0; i < Math.floor(items.length / 2); i++) {
    var temp = items[items.length - 1 - i];
    items[items.length - 1 - i] = items[i];
    items[i] = temp;
  }
  items.push(newItem);

  for (var i = 0; i < Math.floor(items.length / 2); i++) {
    var temp = items[items.length - 1 - i];
    items[items.length - 1 - i] = items[i];
    items[i] = temp;
  }
}

unshift(arr1, newItem1);
console.log("The expected outcome was\n", expected1, arr1Expected, "\n");
unshift(arr2, newItem2);
console.log("The expected outcome was\n", expected2, arr2Expected, "\n");

/* 
  Given an array, remove and
  return the value at the beginning of the array and then shift the remaining items down to fill the empty space.

  Do this without using any built-in array methods except pop().
*/

var arr1 = [1, 2, 3];
var expected1 = 1;
// after running function arr1 should now be:
var expectedArr1 = [2, 3];

var arr2 = ["a", "b", "c", "d"];
var expected2 = "a";
// after running function arr2 should now be:
var expectedArr2 = ["b", "c", "d"];

var arr3 = [];
var expected3 = undefined;
var expectedArr3 = [];

/**
 * Shifts every item of the array to the left by 1 so that the first item is
 * removed and returned.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} items An array of any kind of items.
 * @returns {any} The removed value previously at idx 0.
 */
function shift(items) {
  var newArray = [];
  for (var i = 1; i < items.length; i++) {
    newArray[i - 1] = items[i];
  }
  console.log("The ending array is", newArray);
  return items[0];
}

function shift(items) {
  for (var i = 0; i < Math.floor(items.length / 2); i++) {
    var temp = items[items.length - 1 - i];
    items[items.length - 1 - i] = items[i];
    items[i] = temp;
  }
  var firstIndex = items.pop();

  for (var i = 0; i < Math.floor(items.length / 2); i++) {
    var temp = items[items.length - 1 - i];
    items[items.length - 1 - i] = items[i];
    items[i] = temp;
  }

  console.log("The ending array is", items);
  return firstIndex;
}

var arrArray = [arr1, arr2, arr3];
var expectedValArr = [expected1, expected2, expected3];
var expectedArray = [expectedArr1, expectedArr2, expectedArr3];

for (var i = 0; i < arrArray.length; i++) {
  console.log("The starting array is", arrArray[i]);
  console.log("The value removed was", shift(arrArray[i]));
  console.log("The value we expected to remove was", expectedValArr[i]);
  console.log("The expected array is", expectedArray[i], "\n");
}
