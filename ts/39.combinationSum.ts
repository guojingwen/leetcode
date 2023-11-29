export function combinationSum(
  candidates: number[],
  target: number
): number[][] {
  const result: number[][] = [];
  step(candidates, target, []);
  result.reverse();
  return result;
  function step(arr: number[], target: number, row: number[] = []) {
    if (target === 0 && row.length) {
      result.push(row);
      return;
    }
    if (arr.length === 1) {
      const first = arr[0];
      if (first <= target && target % first === 0) {
        const count = target / first;
        for (let i = 0; i < count; i++) {
          row.unshift(first);
        }
        result.push(row);
      }
      return;
    }
    const last = arr[arr.length - 1];
    if (last <= target) {
      step(arr.slice(), target - last, [last, ...row]);
    }
    step(arr.slice(0, arr.length - 1), target, [...row]);

    return;
  }
}
