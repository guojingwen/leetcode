export function nextPermutation(nums) {
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
        if (point < nums[closeIndex]) {
            [nums[index - 1], nums[closeIndex]] = [nums[closeIndex], nums[index - 1]];
            break;
        }
        else {
            sortIndex -= 1;
        }
        index--;
    }
    const right = nums.slice(sortIndex);
    right.sort((a, b) => a - b);
    nums.splice(index, right.length, ...right);
    if (numsBak.join('-') === nums.join('-')) {
        nums.sort((a, b) => a - b);
    }
}
export function nextPermutation2(nums) {
    const numsBak = nums.slice();
    let count = 0;
    let minIndex = nums.length - 1;
    out: while (minIndex > 0) {
        count = 0;
        for (let i = minIndex; i > 0; i--) {
            if (nums[i - 1] < nums[minIndex]) {
                [nums[i - 1], nums[minIndex]] = [nums[minIndex], nums[i - 1]];
                break out;
            }
            else {
                count++;
            }
        }
        minIndex--;
    }
    const index = minIndex - count;
    const right = nums.slice(index);
    right.sort((a, b) => a - b);
    nums.splice(index, right.length, ...right);
    if (numsBak.join('-') === nums.join('-')) {
        nums.sort((a, b) => a - b);
    }
}
