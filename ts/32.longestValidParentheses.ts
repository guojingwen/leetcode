export function longestValidParentheses1(s: string): number {
  const stack: string[] = [];
  let max = 0;
  let current = 0;
  let i = 0;
  let flag = false;
  while (i < s.length) {
    if (s[i] === '(') {
      stack.push(s[i]);
    } else if (!stack.length) {
      // 清空标记
      flag = false;
    } else {
      stack.pop();
      const prev = stack;
      if (!flag) {
        current = 2;
        flag = true;
      } else {
        current += 2;
      }
      max = Math.max(current, max);
    }
    i++;
  }
  return max;
}
// (()  2
// (()) 4
// )()() 4
// ())()()    4

// 0 1 2 3 4 5
// ( ) ( ( ) )
// 0 2 0 0 2 0
//   2     2 4
//           6
// 动态规划
export function longestValidParentheses2(s: string): number {
  const dp = Array.from({ length: s.length }, () => 0);
  let max = 0;
  for (let i = 1; i < s.length; i++) {
    const char = s[i];
    if (char === ')' && s[i - 1] === '(') {
      dp[i] = 2;
      max = Math.max(max, 2);
    }
  }
  let j = 1;
  while (j < s.length) {
    if (
      s[j] === ')' &&
      j - dp[j - 1] - 1 >= 0 &&
      s[j - dp[j - 1] - 1] === '('
    ) {
      dp[j] = 2 + dp[j - 1] + (dp[j - dp[j - 1] - 2] || 0);
      max = Math.max(dp[j], max);
    }
    j++;
  }
  return max;
}
// ( ( ) ( ) )
// 0 0 2 0 2 0
//

// ") ( ) ( ) )"
//  0 0 2 0 2 0
//

// 栈
export function longestValidParentheses3(s: string): number {
  const stack = [-1];
  let maxLen = 0;
  let len = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === '(') {
      stack.push(i);
    } else {
      stack.pop();

      if (!stack.length) {
        stack.push(i);
        len = 0;
      } else {
        len = i - stack[stack.length - 1];
        maxLen = Math.max(len, maxLen);
      }
    }
  }
  return maxLen;
}

// 循环两次
// ())()()
// ()(()()
export function longestValidParentheses(s: string): number {
  let i = 0;
  let left = 0;
  let right = 0;
  let maxLen = 0;
  step(s);
  // step([...s].reverse().join(''));
  return maxLen;
  function step(s: string) {
    while (i < s.length) {
      const char = s[i];
      if (char === '(') {
        ++left;
      } else {
        ++right;
      }
      if (left === right) {
        maxLen = Math.max(maxLen, 2 * right);
      } else if (right > left) {
        left = 0;
        right = 0;
      }
      i++;
    }
  }
}
