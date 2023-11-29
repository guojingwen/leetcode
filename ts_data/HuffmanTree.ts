export class TreeNode<T> {
  /**
   * char目前用不到，文件压缩的时候会用到
   * null表示非叶子节点
   */
  public char: string | null = null;
  public left: TreeNode<T> | null = null;
  public right: TreeNode<T> | null = null;
  constructor(public key: T | null = null) {}
}

export function createHuffmanTree(arr: number[]) {
  arr.sort((a, b) => a - b);
  const trees: TreeNode<number>[] = arr.map((it) => new TreeNode(it));
  while (trees.length > 1) {
    const leftNode = trees.shift()!;
    const rightNode = trees.shift()!;
    const parentNode = new TreeNode(leftNode.key! + rightNode.key!);
    parentNode.left = leftNode;
    parentNode.right = rightNode;
    binaryInsert(trees, parentNode);
  }
  return trees[0];
  function binaryInsert(
    trees: TreeNode<number>[],
    tree: TreeNode<number>,
    left = 0,
    right = trees.length - 1
  ) {
    if (!trees.length) {
      trees.push(tree);
      return;
    }
    if (tree.key === trees[left].key) {
      trees.splice(left + 1, 0, tree);
      return;
    }
    if (tree.key === trees[right].key) {
      trees.splice(right + 1, 0, tree);
      return;
    }
    if (tree.key! < trees[left].key!) {
      trees.splice(left, 0, tree);
      return;
    }
    if (tree.key! > trees[right].key!) {
      trees.splice(right + 1, 0, tree);
      return;
    }
    let middle = (left + right) >> 1;
    if (tree.key === trees[middle].key) {
      trees.splice(middle + 1, 0, tree);
      return;
    }
    if (tree.key! > trees[middle].key!) {
      return binaryInsert(trees, tree, middle + 1, right - 1);
    }
    return binaryInsert(trees, tree, left + 1, middle - 1);
  }
}
