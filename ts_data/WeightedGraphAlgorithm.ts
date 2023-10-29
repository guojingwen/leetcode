export function dijkstra(graph: number[][], point: number) {
  // 记录从point到其他点的距离
  // s是已完成计算的点， u时未完成计算的点
  // 0表示未知距离
  const s = new Set<[number, number]>();
  const u = new Set<[number, number]>();
  s.add([0, graph[point][0]]);
  graph[point].slice(1).forEach((it, index) => {
    u.add([index + 1, it]);
  });
  const visited = {} as { [key: number]: boolean };
  visited[0] = true;
  while (u.size) {
    let minIndex = 0;
    let minDistance = graph[point][minIndex] || Number.MAX_VALUE;
    [...u].forEach(([i, dis]) => {
      if (!visited[i] && dis && minDistance > dis) {
        minIndex = i;
        minDistance = dis;
      }
    });
    graph[point].forEach((it, index) => {
      if (!visited[index] && it && minDistance > it) {
        minIndex = index;
        minDistance = it;
      }
    });
    s.add([minIndex, minDistance]);
    visited[minIndex] = true;
    u.forEach((it) => {
      if (it[0] === minIndex) {
        u.delete(it);
      }
    });
    // 比较 point --> i  与 point --> minIndex --> i之间的距离
    u.forEach((it) => {
      const [i, distances] = it;
      if (graph[point][minIndex] && graph[minIndex][i]) {
        const newDistance = graph[point][minIndex] + graph[minIndex][i];
        if (distances === 0) {
          it[1] = newDistance;
          // graph[point][i] = newDistance;
        } else if (distances > newDistance) {
          it[1] = newDistance;
          // graph[point][i] = newDistance;
        }
      }
    });
  }
  return [...s].reduce((sum, it) => {
    const [index, dis] = it;
    sum[index] = dis;
    return sum;
  }, [] as number[]);
}
/**
 * Flody算法：求出每一对顶点之间的最短路径
 * 使用动态规划思想，将问题的求解分成多个阶段
 * 对于n个顶点的图G，求任意一对顶点Vi -> Vj之间的最短路径可分为如下几个阶段：
 * #初始：不允许在其他顶点中转，最短路径是？
 * #0： 若允许在V0中转，最短路径是？
 * #1： 若允许在V0、V1中转，最短路径是？
 * 。。。。。。
 * #n-1： 若允许在V0、V1、。。。、Vn-1中转，最短路径是？
 */
export function floyed(graph: number[][]) {
  // graph[i][j] 记录 i到j 的最短距离
  // path[i][j] = x 记录从 i-->j 需要 x 中转
  const path = Array.from(
    {
      length: graph.length,
    },
    () =>
      Array.from(
        {
          length: graph[0].length,
        },
        () => -1
      )
  );
  // 需要使用 0 - i个顶点进行中转
  for (let k = 0; k < graph.length; k++) {
    // 遍历所有顶点之间的距离
    for (let i = 0; i < graph.length; i++) {
      for (let j = 0; j < graph.length; j++) {
        if (i === j) continue;
        if (k === j || k === i) continue;
        if (graph[i][k] === Infinity || graph[k][j] === Infinity) {
          continue;
        }
        const newDistance = graph[i][k] + graph[k][j];
        if (graph[i][j] > newDistance) {
          graph[i][j] = newDistance;
          path[i][j] = k;
        }
      }
    }
  }
  return {
    graph,
    path,
  };
}
