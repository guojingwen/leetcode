export function dijkstra(graph: number[][]) {
  const s: { [key: number]: number } = {};
  const u: { [key: number]: number } = {};
  const visited = graph.reduce(
    (sum, it, i) => {
      sum[i] = false;
      return sum;
    },
    {} as { [key: number]: boolean }
  );

  const row = graph[0];
  s['0'] = row[0];
  visited[0] = true;
  for (let i = 1; i < row.length; i++) {
    u[i] = row[i];
  }
  while (Object.keys(u).length > 1) {
    let minIndex = 0;
    // s加入最近顶点， u减去相应的顶点
    for (let i = 0; i < row.length; i++) {
      if (row[i] !== 0 && !visited[i]) {
        if (row[minIndex] === 0) {
          minIndex = i;
        } else if (row[minIndex] > row[i]) {
          minIndex = i;
        }
      }
    }
    const val = u[minIndex];
    delete u[minIndex];
    s[minIndex] = val;
    visited[minIndex] = true;

    // 更新u
    const row2 = graph[minIndex];
    for (let i = 1; i < row2.length; i++) {
      // 0 --> i  即 row[i]
      // graph[0][i] = graph[0][minIndex] + graph[minIndex][i];
      // 即 u[i] = row[minIndex] + row2[i]
      if (visited[i] || !row2[i]) {
        continue;
      }
      if (u[i] === 0) {
        if (row2[i] && row[minIndex]) {
          // 更新u
          u[i] = row[minIndex] + row2[i];
        }
      } else {
        // 比较是否更新u
        if (row[minIndex] && row[minIndex] + row2[i] < u[i]) {
          u[i] = row[minIndex] + row2[i];
        }
      }
    }
  }
  // 最后一个顶点 直接合并
  Object.keys(u).forEach((key) => {
    const val = u[key];
    delete u[key];
    s[key] = val;
    visited[key] = true;
  });
  return Object.keys(s).map((key) => s[key]);
}
