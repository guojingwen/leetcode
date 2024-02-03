// X、Y表示棋盘X轴、Y轴大小 ，x、y 表示马儿起始位置所在X、Y轴的坐标
export function horseTreads(
  X: number,
  Y: number,
  x: number,
  y: number
): number[][] {
  const visited = Array.from({ length: X * Y }, () => false);
  const chessBorads: number[][] = Array.from(
    {
      length: Y,
    },
    () => Array.from({ length: X })
  );
  let finished = false;
  return traversalChessBoards(x, y);
  function traversalChessBoards(
    x: number,
    y: number,
    step = 1
  ): number[][] {
    visited[y * X + x] = true;
    chessBorads[y][x] = step;
    // ...
    const nexts = getNextStep({ x, y });
    // 下一步最少的是最优解，
    // 这里是贪心算法，当然不要这一步也可以通过
    nexts.sort(
      (a, b) => getNextStep(b).length - getNextStep(a).length
    );
    while (nexts.length) {
      const next = nexts.pop()!;
      if (!visited[next.y * X + next.x]) {
        traversalChessBoards(next.x, next.y, step + 1);
      }
    }
    if (step < X * Y) {
      if (!finished) {
        visited[y * X + x] = false;
        chessBorads[y][x] = 0;
      }
    } else {
      finished = true;
    }
    return chessBorads;
  }
  function getNextStep(currPoint: { x: number; y: number }) {
    const nextSteps: Array<{ x: number; y: number }> = [];
    let y: number, x: number;
    // 这里的位置看前面的图
    // 0
    if ((x = currPoint.x + 2) < X && (y = currPoint.y - 1) >= 0) {
      nextSteps.push({ y, x });
    }
    // 1
    if ((x = currPoint.x + 2) < X && (y = currPoint.y + 1) < Y) {
      nextSteps.push({ y, x });
    }
    // 2
    if ((x = currPoint.x + 1) < X && (y = currPoint.y + 2) < Y) {
      nextSteps.push({ y, x });
    }
    // 3
    if ((x = currPoint.x - 1) >= 0 && (y = currPoint.y + 2) < Y) {
      nextSteps.push({ y, x });
    }
    // 4
    if ((x = currPoint.x - 2) >= 0 && (y = currPoint.y + 1) < Y) {
      nextSteps.push({ y, x });
    }
    // 5
    if ((x = currPoint.x - 2) >= 0 && (y = currPoint.y - 1) >= 0) {
      nextSteps.push({ y, x });
    }
    // 6
    if ((x = currPoint.x - 1) >= 0 && (y = currPoint.y - 2) >= 0) {
      nextSteps.push({ y, x });
    }
    // 7
    if ((x = currPoint.x + 1) < X && (y = currPoint.y - 2) >= 0) {
      nextSteps.push({ y, x });
    }
    return nextSteps;
  }
}

export function ratInAMaze(maze: (0 | 1)[][]): Array<Array<0 | 1>> {
  const solution: Array<Array<0 | 1>> = Array.from(
    { length: maze.length },
    () => Array.from({ length: maze[0].length }, () => 0)
  );
  let hasSolution = false;
  step(0, 0);
  return solution;
  function step(i: number, j: number) {
    if (i >= maze.length || j >= maze[0].length) return false;
    if (!maze[i][j]) {
      return false;
    }
    if (i == maze.length - 1 && j == maze[0].length - 1) {
      solution[i][j] = 1;
      hasSolution = true;
      return true;
    }
    solution[i][j] = 1;
    if (step(i + 1, j)) {
      return true;
    }
    if (step(i, j + 1)) {
      return true;
    }
    solution[i][j] = 0;
    return false;
  }
}
// console.log(restoreIP('25525511135'));

export function restoreIP(ip: string): string {
  // 假设这个ip有解，先不校验它
  // 可能有多个解 只要求出一个即可（回溯算法的本质）
  const solutions: string[] = [];
  run(ip);
  return solutions.join('.');
  function run(rest: string, step = 1): boolean {
    if (rest === '' && step === 5) {
      return true;
    }
    if (!(step < 5 && rest)) return false;

    const nexts = getNext(rest);
    for (const one of nexts) {
      solutions.push(one);
      if (run(rest.substring(one.length), step + 1)) {
        return true;
      }
      solutions.pop();
    }
    return false;
  }
  function getNext(rest: string): string[] {
    let results: string[] = [];
    results.push(rest[0]);
    if (rest[1] && +rest[0] < 3) {
      results.push(rest.substring(0, 2));
      if (rest[2] && +rest[1] < 6) {
        results.push(rest.substring(0, 3));
      }
    }
    results.reverse(); // 贪心优化
    return results;
  }
}
