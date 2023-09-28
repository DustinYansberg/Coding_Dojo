const insertionSort = (arr) => {
  for (var x = 1; x < arr.length; x++) {
    const temp = arr[x];
    for (var y = x - 1; y >= 0; y--) {
      if (temp <= arr[y]) {
        arr[y + 1] = arr[y];
      } else if (temp > arr[y]) {
        arr[y + 1] = temp;
      }
      if (arr[y] < arr[y + 1]) {
        break;
      }
      if (y == 0) {
        arr[0] = temp;
      }
    }
  }
  return arr;
};

const insertionSort2 = (arr) => {
  let j; // create j variable to be used in the inner for loop
  for (let i = 1; i < arr.length; i++) {
    // loop through the array from left to right starting at the second item of the array
    const temp = arr[i]; // create a temp variable to store the item being iterated on the outer for loop

    // start an inner loop that starts at the item the outer loop is iterating on and moves to the start array
    // this loop will only run if j is greater than or equal to 0 and the item in j is greater than the item stored in the temp variable
    for (j = i - 1; j >= 0 && arr[j] > temp; j--) {
      // if the j loop runs then we copy the item being iterated on to the one next to it
      arr[j + 1] = arr[j];
    }
    // the variable in temp is reset where it was originally copied from
    arr[j + 1] = temp;
  }
  return arr;
};

const insertionSort3 = (array) => {
  //* edge cases
  if (array.length <= 1) return array;

  let i, j, key;
  for (i = 0; i < array.length; i++) {
    key = array[i]; //* item to be sorted

    //*  compare all items left of key
    j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j--;
    }
    //* insert correct element into sorted array
    array[j + 1] = key;
  }

  return array;
};

console.log(insertionSort2([3, 5, 2, 1, 0]));
