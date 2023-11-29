export function solveNQueens(n: number): string[][] {
  const solutions: number[][] = [];
  for (let i = 0; i < n; i++) {
    let arr = [];
    step(i, arr);
  }
  return solutions.map((solution) =>
    solution.map((it) => {
      const strs = Array.from({ length: n }, () => '.');
      strs.splice(it, 1, 'Q');
      return strs.join('');
    })
  );
  function step(i: number, arr: number[]): boolean {
    arr.push(i);
    if (arr.length === n) {
      solutions.push(arr);
      return true;
    }
    const nexts = getNext(arr);
    let flag = false;
    for (let j = 0; j < nexts.length; j++) {
      if (step(nexts[j], arr.slice())) {
        flag = true;
        // break;
      }
    }
    if (!flag) {
      arr.pop();
    }
    return flag;
  }
  function getNext(arr: number[]) {
    const nexts: number[] = [];
    const last = arr[arr.length - 1];
    const adjList = [last - 1, last + 1];
    for (let i = 0; i < n; i++) {
      if (arr.includes(i)) {
        // 不能在同一列
        continue;
      }
      if (adjList.includes(i)) {
        // 不能在同一斜线
        continue;
      }
      nexts.push(i);
    }
    return nexts;
  }
}
