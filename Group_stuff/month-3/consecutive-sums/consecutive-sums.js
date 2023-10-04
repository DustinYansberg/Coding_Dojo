arr = [2, 5, 3, 6, 7, 0, 0, 23, 11];
k = 16;

const consecutiveSum1 = (arr, k) => {
    // THIS IS THE SLOWER ALGO, 
    // THE FASTER ALGO IS FOUND BELOW CALLED "consecutiveSum()"
  const consecutiveSums = [];

  let i = 0;
  let j = 0;
  for (; j < arr.length; ) {
    const window = arr.slice(i, j); // the "window" of the array we are currently looking at
    const windowSum = window.reduce((partialSum, a) => partialSum + a, 0); // the sum of the digits in the window

    if (windowSum < k) {
      j++; // move the front pointer forward
    } else if (windowSum > k) {
      i++; // move the back pointer forward
    } else if (windowSum === k) {
      i++;
      consecutiveSums.push([...window]);
      while (arr[j] == 0) {
        window.push(arr[j]);
        j++;
        consecutiveSums.push([...window]);
      }
    }
  }

  return consecutiveSums;
};

const consecutiveSum = (arr, k) => {
  const consecutiveSums = [];

  let windowStart = 0;
  let windowEnd = 0;
  let windowSum = 0;
  // we want to look at a "window" of the array and compare its summed values to k.
  // first we want to add the end of the window to the sum
  // while the windowSum is greater than k, we want to subtract the start of the window, and shrink the window from the back
  // if the windowSum is k, we want to pass that window into the output as an array, then grow the window from the end
  // if we didn't find a match for k, we still want to grow the window to keep the loop moving forward

  while (windowEnd < arr.length) {
    windowSum += arr[windowEnd]; // add the front of the window to the sum

    while (windowSum > k) {
      windowSum -= arr[windowStart]; // take the back of the window away from the sum
      windowStart++; // move the back of the window forward
    }
    if (windowSum === k) {
      windowEnd++;
      consecutiveSums.push([arr.slice(windowStart, windowEnd)]); // push the current window to the output array
    } else {
      windowEnd++; // grow the window if the window sum did not match k
    }
  }

  return consecutiveSums;
};

console.log(consecutiveSum(arr, k));
