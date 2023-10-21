// https://biaodigit.github.io/LeetCode/0030/#%E8%A7%A3%E9%A2%98%E6%80%9D%E8%B7%AF

export function findSubstring(s: string, words: string[]): number[] {
  const result: number[] = [];
  let diff = 0;
  const wLen = words[0].length;
  const allLen = words.length * wLen;
  const map = words.reduce((sum, it) => {
    sum[it] = ~~sum[it] + 1;
    return sum;
  }, {});
  while (allLen + diff <= s.length) {
    const flag = run(s, diff);
    if (flag) {
      result.push(diff);
    }
    ++diff;
  }
  return result;
  function run(str: string, diff = 0) {
    const _map = Object.assign({}, map);
    const subStr = str.substring(diff, diff + allLen);
    for (let i = 0; i < allLen; i += wLen) {
      const word = subStr.substring(i, i + wLen);
      if (_map[word] > 0) {
        --_map[word];
      } else {
        return false;
      }
    }
    return true;
  }
}
