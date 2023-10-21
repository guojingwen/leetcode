// 滑动窗口
export function lengthOfLongestSubstring(s: string): number {
  if (!s.length) return 0;
  let max = 0,
    left = 0;
  const map: { [k: string]: number } = {};
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] !== undefined) {
      left = Math.max(left, map[s[i]] + 1);
    }
    map[s[i]] = i;
    max = Math.max(max, i - left + 1);
  }
  /* for (let i = 0; i <= s.length - 1; i++) {
    for (let j = i + max; j <= s.length; j++) {
      const str = s.substring(i, j);
      const str2 = [...new Set([...str])];
      if (str.length === str2.length) {
        max = Math.max(str.length, max);
      }
    }
  } */
  return max;
}
