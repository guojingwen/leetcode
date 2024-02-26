import { Queue } from './queue';
import { Stack } from './Stack';

enum Colors {
  WHITE,
  GREY,
  BLACK,
}

export class Graph<T = any> {
  private vertices = new Set<T>(); // 顶点
  private adjList = new Map<T, Set<T>>(); // 邻接表
  constructor(public isDirected = false) {}
  addVertices(v: T) {
    if (!this.vertices.has(v)) {
      this.vertices.add(v);
      this.adjList.set(v, new Set<T>());
    }
  }
  addEdge(v: T, w: T) {
    this.vertices.add(v);
    this.vertices.add(w);
    let u = this.adjList.get(v);
    if (!u) {
      u = new Set<T>();
      this.adjList.set(v, u);
    }
    u.add(w);
    if (!this.isDirected) {
      let u2 = this.adjList.get(w);
      if (!u2) {
        u2 = new Set<T>();
        this.adjList.set(w, u2);
      }
      u2.add(v);
    }
  }
  getVertices() {
    return this.vertices;
  }
  getAdjList() {
    return this.adjList;
  }
  toString() {
    let s = '';
    this.vertices.forEach((v, i) => {
      s += `${v} -> `;
      this.adjList.get(v)!.forEach((w) => {
        s += w;
      });
      s += `\n`;
    });
    return s.length ? s.substring(0, s.length - 1) : s;
  }
}

// 广度优先遍历
// 队列 + 标记
export function breadthFirstSearch<T extends string = any>(
  graph: Graph<T>,
  startVertex: T,
  callback: Function
) {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const queue = new Queue<T>();
  const colors = [...vertices].reduce(
    (sum, it) => {
      sum[it] = Colors.WHITE;
      return sum;
    },
    {} as { [key: string]: Colors }
  );
  queue.enqueue(startVertex);
  colors[startVertex] = Colors.GREY;
  callback(startVertex);
  while (queue.size) {
    const it = queue.dequeue()!;
    colors[it] = Colors.BLACK;
    const u = adjList.get(it)!;
    u.forEach((_it) => {
      if (colors[_it] === Colors.WHITE) {
        queue.enqueue(_it);
        colors[_it] = Colors.GREY;
        callback(_it);
      }
    });
  }
}

export function bfs<T extends string = any>(graph: Graph<T>, v: T) {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const [colors, distances, predecessors] = [...vertices].reduce(
    (sum, it) => {
      sum[0][it] = Colors.WHITE;
      sum[1][it] = 0;
      sum[2][it] = null;
      return sum;
    },
    [{}, {}, {}] as [
      { [key: string]: Colors },
      { [key: string]: number },
      {
        [key: string]: T | null;
      },
    ]
  );

  const queue = new Queue<T>();
  queue.enqueue(v);
  colors[v] = colors.GREY;
  while (queue.size) {
    const _v = queue.dequeue()!;
    const u = adjList.get(_v)!;
    u.forEach((it) => {
      if (colors[it] === Colors.WHITE) {
        queue.enqueue(it);
        colors[it] = Colors.GREY;
        predecessors[it] = _v;
        distances[it] = distances[_v] + 1;
      }
    });
    colors[_v] = Colors.BLACK;
  }
  return {
    distances,
    predecessors,
  };
}

export function depthFirstSearch<T = any>(
  graph: Graph,
  v: T,
  callback: Function
) {
  const stack = new Stack<T>();
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const colors = [...vertices].reduce(
    (sum, it) => {
      sum[it] = Colors.WHITE;
      return sum;
    },
    {} as { [key: string]: Colors }
  );
  dfs(v);

  function dfs(it: T) {
    colors[it] = Colors.GREY;
    stack.push(it);
    callback(it);
    const u = adjList.get(it)!;
    u.forEach((it) => {
      if (colors[it] === Colors.WHITE) {
        dfs(it);
      }
    });
    colors[it] = Colors.BLACK;
    stack.pop();
  }
}
