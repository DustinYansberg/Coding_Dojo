const mergeDedupe = (arr1, arr2) => {
  let results = [];
  while (arr1.length > 0 && arr2.length > 0) {
    const resLength = results.length - 1;

    // if the value match, and exist on the array, skip them.
    arr1[0] === arr2[0] && arr1 === results[resLength]
      ? (arr1.shift(), arr2.shift())
      : arr1[0] === results[resLength]
      ? arr1.shift()
      : arr2[0] === results[resLength]
      ? arr2.shift()
      : arr1[0] < arr2[0]
      ? results.push(arr1.shift())
      : results.push(arr2.shift());
  }

  //   return the spread of the results array, and the "deduped" filter of what remains of the original arrays
  return [
    ...results,
    ...arr1.filter((item, index) => arr1.indexOf(item) === index),
    ...arr2.filter((item, index) => arr1.indexOf(item) === index),
  ];
};

const mergeDedupe2 = (arr1, arr2) => {
  // reverse arrays and make sure all the values in each array ar unique among themselves
  arr1 = arr1.reverse().filter((item, index) => arr1.indexOf(item) === index);
  arr2 = arr2.reverse().filter((item, index) => arr2.indexOf(item) === index);

  // init empty array to push values and return
  let results = [];

  // check for duplicate values between arrays, push unique ones onto the results array, throw away duplicates
  while (arr1.length > 0 && arr2.length > 0) {
    let i = arr1.length - 1;
    let j = arr2.length - 1;
    if (arr1[i] === arr2[j] && arr2[j] == results[results.length - 1]) {
      arr1.pop();
      arr1.pop();
      i--;
      j--;
      continue;
    }
    arr1[i] === results[results.length - 1]
      ? (arr1.pop(), i--)
      : arr2[j] === results[results.length - 1]
      ? (arr2.pop(), j--)
      : arr1[i] < arr2[j]
      ? results.push(arr1.pop())
      : results.push(arr2.pop());
  }
  // push what is left of the original arrays
  while (arr1.length > 0) results.push(arr1.pop());
  while (arr2.length > 0) results.push(arr2.pop());

  return results;
};

const mergeDedupe3 = (arr1, arr2) => {
  results = [];
  let i = 0
  let j = 0

  while (arr1.length > i && arr2.length > j) {
    arr1[0] < arr2[0] ? (results.push(arr1[i]), i++) : (results.push(arr2[j]), j++);
  }

  results = [...results, ...arr1, ...arr2]
  
  return [
    ...results.filter((item, index) => results.indexOf(item) === index)
  ];
};

var arr1 = [1, 3, 3, 5, 8, 10];
var arr2 = [1, 3, 3, 5, 8, 10, 10, 10, 11];
var arrA = [1, 3, 4, 5];
var arrB = [1, 3, 3, 5, 8, 10];

console.log(mergeDedupe1(arr1, arr2));
console.log(mergeDedupe2(arrA, arrB));
console.log(mergeDedupe3([1, 3, 3, 5, 8, 10], [1, 3, 4, 5])); 
console.log(mergeDedupe3([2, 3, 3, 5, 8, 10, 12, 12], [1, 3, 4, 6])); 
