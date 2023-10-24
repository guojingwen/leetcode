export function findMedianSortedArrays(nums1, nums2) {
    if (nums1.length > nums2.length) {
        const temp = nums1;
        nums1 = nums2;
        nums2 = temp;
    }
    const m = nums1.length;
    const n = nums2.length;
    const totalLeft = (m + n + 1) / 2;
    let left = 0;
    let right = m;
    while (left < right) {
        let i = left + Math.floor((right - left) / 2);
        let j = totalLeft - i;
        if (nums2[j - 1] < nums1[i]) {
            right = i - 1;
        }
        else {
            left = i;
        }
    }
    const i = left;
    const j = totalLeft - i;
    const nums1LefeMax = i === 0 ? Number.MIN_VALUE : nums1[i - 1];
    const nums1RightMin = i === m ? Number.MAX_VALUE : nums1[i];
    const nums2LefeMax = i === 0 ? Number.MIN_VALUE : nums2[j - 1];
    const nums2RightMin = i === m ? Number.MAX_VALUE : nums2[j];
    return ((Math.min(nums1RightMin, nums2RightMin) +
        Math.max(nums1LefeMax, nums2LefeMax)) /
        2);
}
