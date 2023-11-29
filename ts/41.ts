function firstMissingPositive(nums: number[]): number {
  let set = new Set<number>();
  let min = 1;
  for (let i = 0; i < nums.length; i++) {
    const it = nums[i];
    if (it > 0 && !set.has(it)) {
      set.add(it);
    }
    if (it === min) {
      let j = it;
      while (set.has(j)) {
        j++;
      }
      min = j;
    }
  }
  return min;
}
