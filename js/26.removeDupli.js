function removeDuplicates(nums) {
    let current = nums[nums.length - 1];
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] === current) {
            nums.splice(i, 1);
        }
        else {
            current = nums[i];
        }
    }
    return nums.length;
}
