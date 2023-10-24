export function search(nums, target) {
    return searchHelper(0, nums.length - 1);
    function searchHelper(left, right) {
        if (left > right) {
            return -1;
        }
        let middle = Math.floor(left + (right - left) / 2);
        let middleVal = nums[middle];
        let leftValue = nums[left];
        let rightValue = nums[right];
        if (leftValue === target) {
            return left;
        }
        if (rightValue === target) {
            return right;
        }
        if (middleVal === target) {
            return middle;
        }
        if (leftValue < middleVal) {
            if (target > leftValue && target < middleVal) {
                return searchHelper(left + 1, right - 1);
            }
            else {
                return searchHelper(middle + 1, right - 1);
            }
        }
        else {
            if (target > middleVal && target < rightValue) {
                return searchHelper(middle + 1, right - 1);
            }
            else {
                return searchHelper(left + 1, middle - 1);
            }
        }
    }
}
