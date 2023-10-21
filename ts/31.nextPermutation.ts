export function nextPermutation(nums: number[]): void {
  const numsBak = nums.slice();

  let index = nums.length - 1;
  let sortIndex = index;
  while (index) {
    let point = nums[index - 1];
    let closeIndex = index;

    for (let i = closeIndex + 1; i < nums.length; i++) {
      if (nums[i] > point && nums[closeIndex] > nums[i]) {
        closeIndex = i;
      }
    }
    // console.log(closeIndex);
    if (point < nums[closeIndex]) {
      [nums[index - 1], nums[closeIndex]] = [nums[closeIndex], nums[index - 1]];
      break;
    } else {
      sortIndex -= 1;
    }
    index--;
  }
  //调整位置是最小值
  const right = nums.slice(sortIndex);
  right.sort((a, b) => a - b);
  nums.splice(index, right.length, ...right);
  // 最大值的下一个排列是最小值
  if (numsBak.join('-') === nums.join('-')) {
    nums.sort((a, b) => a - b);
  }
}

// 1,2,3   1,3,2   2,1,3   2,3,1   3,1,2   3,2,1
//         2,3,1            3,2,1
//                         3,1,2
export function nextPermutation2(nums: number[]): void {
  const numsBak = nums.slice();
  // maxNums.sort((a, b) => b - a);
  // if(maxNums.join('-')=== nums.join('-'))

  let count = 0;
  let minIndex = nums.length - 1;
  out: while (minIndex > 0) {
    count = 0;
    for (let i = minIndex; i > 0; i--) {
      if (nums[i - 1] < nums[minIndex]) {
        [nums[i - 1], nums[minIndex]] = [nums[minIndex], nums[i - 1]];
        break out;
      } else {
        count++;
      }
    }
    minIndex--;
  }
  // 1 2 3 4 5
  // totalCount = (nums.length - 1 - minIndex)  + count
  // index = nums.length - 1 - totalCount;
  // index = minIndex - count
  const index = minIndex - count;
  const right = nums.slice(index);
  right.sort((a, b) => a - b);
  nums.splice(index, right.length, ...right);
  if (numsBak.join('-') === nums.join('-')) {
    nums.sort((a, b) => a - b);
  }
  //   return nums;
}
