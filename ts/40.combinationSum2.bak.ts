export function combinationSum2(
  candidates: number[],
  target: number
): number[][] {
  candidates.sort((a, b) => a - b);
  for (let i = candidates.length - 1; i >= 0; i--) {
    if (candidates[i] > target) {
      candidates.splice(i, 1);
    } else {
      break;
    }
  }
  const set = new Set<string>();
  const result: number[][] = [];
  const step = function (
    left: number,
    right: number,
    target: number,
    row: number[] = []
  ) {
    if (target === 0 && row.length) {
      const str = row.join('_');
      if (!set.has(str)) {
        set.add(str);
        result.push(row);
      }
      return;
    }
    if (left > right) return;
    const last = candidates[right];
    if (last <= target) {
      step(left, right - 1, target - last, [last, ...row]);
    }
    step(left, right - 1, target, [...row]);
    return;
  };
  step(0, candidates.length - 1, target, []);
  result.reverse();
  return result;
}
