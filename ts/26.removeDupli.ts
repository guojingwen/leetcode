// var aa = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// console.log(removeDuplicates(aa), aa);
function removeDuplicates(nums: number[]): number {
  let current = nums[nums.length - 1];
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] === current) {
      nums.splice(i, 1);
    } else {
      current = nums[i];
    }
  }
  return nums.length;
}
