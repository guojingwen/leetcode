console.log(
  ratInAMaze([
    [1, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 1, 0],
    [0, 1, 1, 1],
  ])
);

function ratInAMaze(maze: (0 | 1)[][]) {
  const solution = Array.from({ length: maze.length }, () =>
    Array.from({ length: maze[0].length }, () => 0)
  );
  let hasSolution = false;
  step(0, 0);
  console.log(solution);
  return hasSolution;
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

// var ob = new PerformanceObserver(console.log);
// ob.observe({ type: 'largest-contentful-paint' });
