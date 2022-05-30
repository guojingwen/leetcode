function findMaxStr(str) {
    let max = str[0];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            let item = str.substr(i, j);
            if (item === [...item].reverse().join('')) {
                max = item.length > max.length ? item : max;
            }
        }
    }
    return max;
}
function longestPalindrome(str) {
    let max = str[0];
    if (str.length < 2)
        return max;
    if (str.length < 3)
        return str[0] === str[1] ? str : max;
    const dp = Array.from({ length: str.length }, () => Array.from({ length: str.length }, () => ''));
    for (let i = 0; i < str.length; i++) {
        dp[i][i] = true;
    }
    for (let i = 0; i < str.length - 1; i++) {
        dp[i][i + 1] = str[i] === str[i + 1];
        if (dp[i][i + 1]) {
            max = max.length < 2 ? str.substr(i, 2) : max;
        }
    }
    for (let j = 3; j <= str.length; j++) {
        for (let i = 0; i <= str.length - j; i++) {
            const flag = dp[i][i + j - 1] = (str[i] === str[i + j - 1]) && dp[i + 1][i + j - 2];
            if (flag) {
                if (j > max.length) {
                    max = str.substr(i, j);
                }
            }
        }
    }
    console.log(dp);
    return max;
}
console.log(longestPalindrome2('ddcdcd'));
function longestPalindrome2(str) {
    let begin = 0;
    let len = 1;
    for (let i = 0; i < str.length - 1; i++) {
        const oddLen = expandAroundCenter(str, i, i);
        const evenLen = expandAroundCenter(str, i, i + 1);
        const currentLen = Math.max(oddLen, evenLen);
        if (currentLen > len) {
            len = currentLen;
            begin = i - Math.floor((currentLen - 1) / 2);
        }
    }
    return str.substr(begin, len);
    function expandAroundCenter(str, left, right) {
        let i = left;
        let j = right;
        while (i >= 0 && j < str.length) {
            if (str[i] === str[j]) {
                i--;
                j++;
            }
            else {
                break;
            }
        }
        return j - i - 1;
    }
}
function findMedianSortedArrays(nums1, nums2) {
    const nums = [];
    while (nums1.length || nums2.length) {
        if (!nums1.length) {
            nums.push(nums2.shift());
        }
        else if (!nums2.length) {
            nums.push(nums1.shift());
        }
        else {
            if (nums1[0] > nums2[0]) {
                nums.push(nums2.shift());
            }
            else {
                nums.push(nums1.shift());
            }
        }
    }
    ;
    if (nums.length % 2) {
        return nums[Math.floor(nums.length / 2)];
    }
    const centerIndex = nums.length / 2;
    return (nums[centerIndex - 1] + nums[centerIndex]) / 2;
}
;
