export function maxArea(height: number[]): number {
  let max = 0;
  for (let i = 0, j = height.length - 1; i < j; ) {
    const maxIndex = j - i;
    const _max = maxIndex * Math.min(height[i], height[j]);
    max = Math.max(max, _max);
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }
  return max;
}
