import { BinarySearchTree } from './binarySearchTree';
import { Queue } from './queue';

export function prim(graph: number[][]) {
  const visited: boolean[] = []; // 已经选择的顶点
  const result: {
    edge: [number, number];
    weight: number;
  }[] = [];
  const { length } = graph;
  for (let i = 0; i < length; i++) {
    visited[i] = false;
  }
  visited[0] = true;
  for (let i = 0; i < length - 1; i++) {
    const [s, u] = minEdge(graph, visited);
    visited[u] = true;
    visited[s] = true;

    result.push({
      edge: [s, u],
      weight: graph[s][u],
    });
  }

  return result;

  function minEdge(graph: number[][], visited: boolean[]) {
    // vertices1 已访问的顶点  未访问的顶点
    const [vertices1, vertices2] = visited.reduce(
      (sum, it, key) => {
        it ? sum[0].push(key) : sum[1].push(key);
        return sum;
      },
      [[], []] as [number[], number[]]
    );
    let s = 0,
      u = 0,
      minDistance = Infinity;
    for (let i = 0; i < vertices1.length; i++) {
      for (let j = 0; j < vertices2.length; j++) {
        const newDistance = graph[vertices1[i]][vertices2[j]];
        if (newDistance && newDistance < minDistance) {
          minDistance = newDistance;
          s = i;
          u = j;
        }
      }
    }
    if (vertices1[s] > vertices2[u]) {
      return [vertices2[u], vertices1[s]];
    } else {
      return [vertices1[s], vertices2[u]];
    }
  }
}
export function kruskal(graph: number[][]) {
  type Item = {
    edge: [number, number];
    weight: number;
  };
  const bst = new BinarySearchTree<Item>((a: Item, b: Item) => {
    if (a.weight !== b.weight) {
      return a.weight - b.weight;
    }
    if (a.edge[0] !== b.edge[0]) {
      return a.edge[0] - b.edge[0];
    }
    return a.edge[1] - b.edge[1];
  });
  for (let i = 0; i < graph.length - 1; i++) {
    for (let j = i + 1; j < graph.length; j++) {
      const weight = graph[i][j];
      if (![0, Infinity].includes(weight)) {
        bst.insert({
          edge: [i, j],
          weight,
        });
      }
    }
  }
  const queue = new Queue<Item>();
  bst.inOrderTraverse((it: Item) => {
    queue.enqueue(it);
  });
  const treesVertices: number[][] = [];
  const result: {
    edge: [number, number];
    weight: number;
  }[] = [];

  // 顶点 与 树（treesVertices的索引） 的映射关系
  const map = Array.from({ length: graph.length }, () => -1);
  enum State {
    ONE_TREE,
    TWO_TREE,
    ONE_OTHER,
    OTHER,
  }
  while (result.length < graph.length - 1) {
    const { edge, weight } = queue.dequeue()!;
    const state = check(edge);
    // 0 表示两个顶点在已有的同一个树上
    // 1 两个顶点在已有的不同的树上
    // 2 一个顶点在已有的树上
    // 3 两个顶点均不在一有的树上
    if (state === State.ONE_TREE) {
      continue;
    }
    result.push({
      edge,
      weight,
    });
    switch (state) {
      case State.TWO_TREE: // 合并两个树
        let treeIndex = map[edge[0]];
        let treeIndex2 = map[edge[1]];
        if (map[edge[0]] > map[edge[1]]) {
          treeIndex = map[edge[1]];
          treeIndex2 = map[edge[0]];
        }
        treesVertices[treeIndex2].forEach((v) => {
          map[v] = treeIndex;
          treesVertices[treeIndex].push(v);
        });
        treesVertices.splice(treeIndex2, 1);
        break;
      case State.ONE_OTHER: // 这棵树加入新顶点
        if (map[edge[0]] === -1) {
          map[edge[0]] = map[edge[1]];
          treesVertices[map[edge[1]]].push(edge[0]);
        } else {
          map[edge[1]] = map[edge[0]];
          treesVertices[map[edge[0]]].push(edge[1]);
        }
        break;
      case State.OTHER: // 新生成一棵树并加入
        const treeVertices = edge.slice();
        map[edge[0]] = treesVertices.length;
        map[edge[1]] = treesVertices.length;
        treesVertices.push(treeVertices);
        break;
    }
  }
  return result;

  function check(edge: [number, number]): State {
    const [a, b] = edge;

    if (map[a] === -1 || map[b] === -1) {
      if (map[a] === map[b]) {
        return State.OTHER;
      } else {
        return State.ONE_OTHER;
      }
    }
    if (map[a] === map[b]) {
      return State.ONE_TREE;
    } else {
      return State.TWO_TREE;
    }
  }
}
