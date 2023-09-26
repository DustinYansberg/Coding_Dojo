// bubbleSort()
/* 
    https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
    Stable sort
    Time Complexity
        - Best: O(n) linear when array is already sorted.
        - Average: O(n^2) quadratic.
        - Worst: O(n^2) quadratic when the array is reverse sorted.
    Space: O(1) constant.
    For review, create a function that uses BubbleSort to sort an unsorted array in-place.
    For every pair of adjacent indices, swap them if the item on the left is larger than the item on the right until array is fully sorted
    -> Assume there are no duplicates
*/
//             i
//             j j+1
const nums1 = [5, 3, 4, 2, 1];
const nums2 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const nums3 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

const bubbleSort = (nums) => {
  let allSorted = true; // create a variable to track if the array is already sorted
  for (let i = 0; i < nums.length; i++) { // looping for ever element in the nums array
    for (let j = 0; j < nums.length; j++) { // for every one element loop again
      if (nums[j] > nums[j + 1]) { // if the current element is greater than the next element
        allSorted = false; // the array is not sorted
        const temp = nums[j]; // assign teh current element to a temp variable
        nums[j] = nums[j + 1]; // replace the current element with the next element
        nums[j + 1] = temp; // replace the next element with the temp variable
      }
    }
    if (allSorted) return nums // if the array is sorted, we can return the array now.
  }
  return nums; // return the newly ordered array
};

// call the function and pass nums1, nums2, nums3
console.log(nums1);
console.log(bubbleSort(nums1));
console.log(nums2);
console.log(bubbleSort(nums2));
console.log(nums3);
console.log(bubbleSort(nums3));
