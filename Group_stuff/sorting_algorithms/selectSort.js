const selectSort = (nums) => {
  // loop through and perform quick sort

  for (let i = 0; i < nums.length; i++) {
    let min = nums[i];
    let idx = i;
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] < min){ 
            min = nums[j]
            idx = j
        }
    }
    if(nums[i] > min){
        const temp = nums[i]
        nums[i] = nums[idx]
        nums[idx] = temp
    }
    // check if current min is smaller than value at i
    // if so swap them
  }
  return nums
};

console.log(selectSort([3,2,9,5,1,4,8]))
