// Array: Merge Sort
// visualization: https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
// multiple sorts, visualized: https://i.imgur.com/fq0A8hx.gif

// Time Complexity
//  - Best case: O(n log(n)
//  - Average case: O(n log(n))
//   - Worst case: O(n log(n))

// MergeSort(arr[], l,  r)
// If r > l
//      1. Find the middle point to divide the array into two halves:
//              middle m = (l+r)/2
//      2. Call mergeSort for first half:
//              Call mergeSort(arr, l, m)
//      3. Call mergeSort for second half:
//              Call mergeSort(arr, m+1, r)
//      4. Merge the two halves sorted in step 2 and 3:
//              Call mergeSortedArrays(arr1, arr2)

var testArr = [88, 22, 44, 12, 99, 111, 9, 15, 49];
// [88, 22, 44, 12, 99, 111, 9, 15, 49];
// [88, 22, 44, 12]     [99, 111, 9, 15, 49]
// [88, 22]
// [88]

// main recursive function that will be passed in mergeSortedArrays(left, right)
// create a new sorted arr based on the given arr being recursively split and merged.
function mergeSort(arr) {
  if (arr.length === 1) return arr;
  const m = Math.floor(arr.length / 2);
  const l = mergeSort(arr.slice(0, m));
  const r = mergeSort(arr.slice(m));
  return mergeSortedArrays(l, r);
}

function mergeSortedArrays(arr1, arr2) {
  // setup
  let sortedArray = [];
  let l = 0;
  let r = 0;

  while (arr1.length > l && arr2.length > r) {
    arr1[l] < arr2[r]
      ? sortedArray.push(arr1.shift())
      : sortedArray.push(arr2.shift());
  }
  return [...sortedArray, ...arr1, ...arr2];
}

console.log(mergeSort(testArr));
