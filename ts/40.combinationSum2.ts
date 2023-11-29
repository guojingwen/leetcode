// 先排序，后回溯递归
// 时间: O(n2^n)
// 空间: O(n)
export function combinationSum2(
  candidates: number[],
  target: number
): number[][] {
  // 不能包含重复的组合，需要先排序
  candidates.sort((a, b) => a - b);
  const length = candidates.length;
  const ans: number[][] = [];

  function backtrack(i: number, left: number, cur: number[]) {
    if (i >= length || left <= 0) {
      // 递归终止条件：下标超出范围 或者 target已经满足或超过了
      if (left === 0) {
        // 如果target正好满足，这就是一个组合答案
        ans.push(cur);
      }
      return;
    }
    for (let j = i + 1; j < length; j++) {
      // 继续递归剩余的数字
      if (candidates[j] > left) {
        // 如果当前数字已经大于剩余数字了，因为排序过了，所以剩下的数字也不需要递归了
        break;
      }
      backtrack(j, left - candidates[j], [...cur, candidates[j]]);
      while (j + 1 < length && candidates[j + 1] === candidates[j]) {
        // 相邻重复的数字，不需要在回溯递归了
        j++;
      }
    }
  }

  for (let i = 0; i < length; i++) {
    // 如果当前数字已经大于剩余数字了，因为排序过了，所以剩下的数字也不需要递归了
    if (candidates[i] > target) {
      break;
    }
    backtrack(i, target - candidates[i], [candidates[i]]);
    while (i + 1 < length && candidates[i + 1] === candidates[i]) {
      // 相邻重复的数字，不需要在回溯递归了
      i++;
    }
  }

  return ans;
}
