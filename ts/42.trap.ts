/**
 * 接水滴
 * 方法1: 动态规划
 * 方法2: 栈
 * 方法三: 双指针
 */
export function trap(height: number[]): number {
  // 找到左边
  const left_max_arr: number[] = [];
  const right_max_arr: number[] = [];
  for (
    let i = 0, j = height.length - 1;
    i < height.length;
    i++, j--
  ) {
    let left_max = Math.max(
      left_max_arr[left_max_arr.length - 1] || 0,
      height[i]
    );
    left_max_arr.push(left_max);
    let right_max = Math.max(
      right_max_arr[right_max_arr.length - 1] || 0,
      height[j]
    );
    right_max_arr.push(right_max);
  }
  right_max_arr.reverse();
  let ans = 0;
  for (let i = 0; i < height.length; i++) {
    const h = Math.min(left_max_arr[i], right_max_arr[i]);
    const diff = h - height[i];
    if (diff > 0) {
      ans += diff;
    }
  }
  return ans;
}

export function trap2(height: number[]): number {
  const stack: number[] = []; //数组模拟栈
  let ans = 0,
    i = 0;
  while (i < height.length) {
    while (
      stack.length &&
      height[i] > height[stack[stack.length - 1]]
    ) {
      let top = stack.pop()!;
      if (!stack.length) break;
      let distance = i - stack[stack.length - 1] - 1;
      let bound_height =
        Math.min(height[i], height[stack[stack.length - 1]]) -
        height[top];
      ans += bound_height * distance;
    }
    stack.push(i++);
  }
  return ans;
}
