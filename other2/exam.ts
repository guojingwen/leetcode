export function reverNum(n: number): number {
  if (n === 0) return 0;
  const stack: number[] = [];
  while (n !== 0) {
    const yushu = n % 10;
    if (!stack.length && yushu === 0) {
      continue;
    }
    stack.push(yushu);
    n = Math.floor(n / 10);
  }
  return +stack.join('');
}

// 单数   9 7 3
// 双数   8

// 单数   9
// 双数   0 0

// 单数   8 1
// 双数   9 7
export function solution1(S: string): string {
  // Implement your solution here
  const map = [...S].reduce(
    (sum, char) => {
      if (sum[+char] === undefined) {
        sum[+char] = 0;
      }
      ++sum[+char];
      return sum;
    },
    {} as { [key: number]: number }
  );
  const keys = Object.keys(map);
  if (!keys.length) return '0';
  if (keys.length === 1 && keys[0] === '0') return '0';

  const [sigles, doubles] = Object.keys(map).reduce(
    (sum, key) => {
      let count = map[key];
      while (count >= 2) {
        sum[1].push(+key);
        count -= 2;
      }
      if (count === 1) {
        sum[0].push(+key);
      }
      return sum;
    },
    [[], []] as [number[], number[]]
  );
  sigles.sort((a, b) => b - a);
  doubles.sort((a, b) => b - a);
  if (!doubles.length || doubles[0] === 0) {
    return `${sigles[0]}`;
  }
  const prev = doubles.join('');
  const post = doubles.slice().reverse().join('');
  return `${prev}${sigles.length ? sigles[0] : ''}${post}`;
}

export function solution(S: string): number {
  // Implement your solution here
  const arr = S.split(' ')
    .filter((it) => it !== '')
    .map((it) => (isNaN(+it) ? it : +it));
  const max = 2 ** 20;
  if (!arr.length) return -1;
  const stack: number[] = [];
  for (let it of arr) {
    if (typeof it === 'number') {
      stack.push(it);
    } else if (it === 'DUP') {
      if (!stack.length) return -1;
      stack.push(stack.slice(-1)[0]);
    } else if (it === 'POP') {
      if (!stack.length) return -1;
      stack.pop();
    } else if (it === '+') {
      if (stack.length < 2) return -1;
      const first = stack.pop()!;
      const second = stack.pop()!;
      const sum = first + second;
      if (sum >= max) return -1;
      stack.push(sum);
    } else if (it === '-') {
      if (stack.length < 2) return -1;
      const first = stack.pop()!;
      const second = stack.pop()!;
      const cha = first - second;
      if (cha < 0) return -1;
      stack.push(cha);
    } else {
      // 输入不合法
      return -1;
    }
  }
  return stack.length ? stack.slice(-1)[0] : -1;
}

/**
 * 1. 最有没有把握的一题最后提交
 * 2. 读完题，评估能否解决，
 * 3. 尽可能尝试性能好的算法
 * 4. 推敲边界条件， 再仔细读一遍题
 * 4. 平均40分钟一题
 */
