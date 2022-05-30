console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
function fourSum(nums, target) {
    nums.sort((a, b) => a - b);
    const result = [];
    if (nums.length < 4)
        return result;
    if (nums.length === 4) {
        const sum = nums.reduce((sum, a) => sum + a, 0);
        if (sum === target) {
            result.push(nums);
        }
        return result;
    }
    const strResult = new Set();
    for (let i = 0; i < nums.length - 3; i++) {
        const a = nums[i];
        for (let j = i + 1; j < nums.length - 2; j++) {
            const b = nums[j];
            let start = j + 1;
            let end = nums.length - 1;
            while (start < end) {
                const sum = a + b + nums[start] + nums[end];
                if (sum === target) {
                    strResult.add(`${a},${b},${nums[start]},${nums[end]}`);
                    start++;
                    end--;
                }
                else if (sum > target) {
                    end--;
                }
                else {
                    start++;
                }
            }
        }
    }
    return [...strResult].map(str => str.split(',').map(it => +it));
}
