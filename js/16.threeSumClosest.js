console.log(threeSumClosest([1, 1, 1, 1], 4));
function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b);
    if (nums.length <= 3) {
        return nums.reduce((sum, item) => sum + item, 0);
    }
    let closestNum = nums[0] + nums[1] + nums[2] - target;
    for (let i = 0; i < nums.length - 2; i++) {
        const a = nums[i];
        let start = i + 1;
        let end = nums.length - 1;
        while (start < end) {
            const b = nums[start];
            const c = nums[end];
            const sum = a + b + c - target;
            const unSignSum = Math.abs(sum);
            if (sum === 0)
                return target;
            if (unSignSum < Math.abs(closestNum)) {
                closestNum = sum;
            }
            if (sum > 0) {
                end--;
            }
            else {
                start++;
            }
        }
    }
    return closestNum + target;
}
