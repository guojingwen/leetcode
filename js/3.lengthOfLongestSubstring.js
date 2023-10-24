export function lengthOfLongestSubstring(s) {
    if (!s.length)
        return 0;
    let max = 0, left = 0;
    const map = {};
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] !== undefined) {
            left = Math.max(left, map[s[i]] + 1);
        }
        map[s[i]] = i;
        max = Math.max(max, i - left + 1);
    }
    return max;
}
