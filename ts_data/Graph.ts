import { Queue } from './queue';
import { Stack } from './stack';

enum Colors {
  WHITE,
  GREY,
  BLACK,
}
const initializeColor = (vertices: Set<any>) => {
  const color = {};
  vertices.forEach((v) => {
    color[v] = Colors.WHITE;
  });
  return color;
};
export class Graph<T extends string = any> {
  vertices = new Set<T>(); // 顶点
  adjList = new Map<T, Set<T>>(); // 邻接表
  constructor(public isDirected = false) {
    // 默认是无向图
  }
  addVertex(v: T) {
    // 添加顶点
    if (!this.vertices.has(v)) {
      this.vertices.add(v);
      this.adjList.set(v, new Set<T>());
    }
  }
  addEdge(v: T, w: T) {
    // 添加边
    if (!this.adjList.get(v)) {
      this.addVertex(v);
    }
    if (!this.adjList.get(w)) {
      this.addVertex(w);
    }
    this.adjList.get(v)!.add(w);
    if (!this.isDirected) {
      this.adjList.get(w)!.add(v);
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

export function breadthFirstSearch<T extends string = any>(
  graph: Graph<T>,
  startVertex: T,
  callback: Function
) {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color: { [key: string]: Colors } = initializeColor(vertices);
  const queue = new Queue<T>();
  queue.enqueue(startVertex);
  while (!queue.isEmpty) {
    const u = queue.dequeue()!;
    const neighbors = adjList.get(u)!;
    color[u] = Colors.GREY;
    neighbors.forEach((v) => {
      if (color[v] === Colors.WHITE) {
        color[v] = Colors.GREY;
        queue.enqueue(v);
      }
    });
    color[u] = Colors.BLACK;
    callback?.(u);
  }
}

export function bfs<T extends string = any>(graph: Graph<T>, v: T) {
  const distances: { [key: string]: number } = {};
  // 回溯点
  const predecessors: { [key: string]: string | null } = {};
  const vertices = graph.getVertices();
  vertices.forEach((v) => {
    distances[v] = 0;
    predecessors[v] = null;
  });
  const color: { [key: string]: Colors } = initializeColor(vertices);

  const adjList = graph.getAdjList();
  const queue = new Queue<T>();
  queue.enqueue(v);
  color[v] = Colors.GREY;
  while (!queue.isEmpty) {
    const it = queue.dequeue()!;
    const u = adjList.get(it);
    u?.forEach((_it) => {
      if (color[_it] === Colors.WHITE) {
        color[_it] = Colors.GREY;
        queue.enqueue(_it);
        distances[_it] = distances[it] + 1;
        predecessors[_it] = it;
      }
    });
    color[it] = Colors.BLACK;
  }

  return {
    distances,
    predecessors,
  };
}

export function depthFirstSearch<T extends string = any>(
  graph: Graph<T>,
  startVertex: T,
  callback: Function
) {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color: { [key: string]: Colors } = initializeColor(vertices);
  const stack = new Stack<T>();
  stack.push(startVertex);
  color[startVertex] = Colors.GREY;
  callback(startVertex);
  dfs(0);
  function dfs(size: number) {
    while (stack.size > size) {
      const v = stack.peek()!;
      const u = adjList.get(v)!;
      u.forEach((_v) => {
        if (color[_v] === Colors.WHITE) {
          color[_v] = Colors.GREY;
          stack.push(_v);
          callback(_v);
          dfs(size + 1);
        }
      });
      stack.pop();
      color[v] = Colors.BLACK;
    }
  }
}
