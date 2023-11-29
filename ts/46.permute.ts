function permute(nums: number[]): number[][] {
  let result: number[][] = [];
  if (!nums.length) return result;
  if (nums.length === 1) {
    result.push(nums);
    return result;
  }
  let i = 1;
  result.push([nums[0]]);
  while (i < nums.length) {
    const newResult: number[][] = [];
    const set = new Set<string>();
    result.forEach((subArr) => {
      for (let j = 0; j < subArr.length; j++) {
        const it = subArr.slice();
        it.splice(j, 0, nums[i]);
        const str = it.join('_');
        if (!set.has(str)) {
          newResult.push(it);
          set.add(str);
        }
      }
      const last = subArr.slice();
      last.push(nums[i]);
      const str = last.join('_');
      if (!set.has(str)) {
        newResult.push(last);
        set.add(str);
      }
    });
    result = newResult;
    i++;
  }
  return result;
}

console.log(permute([1, 1, 2]));
