import { BinarySearchTree, TreeNode } from './binarySearchTree';

enum BalanceFactor {
  UNBALANCED_RIGHT = -2,
  SLIGHTLY_UNBALANCED_RIGHT = -1,
  BALANCED = 0,
  SLIGHTLY_UNBALANCED_LEFT = 1,
  UNBALANCED_LEFT = 2,
}
export default class AVLTree<T = any> extends BinarySearchTree {
  constructor(public compareFn = (a, b) => a - b) {
    super(compareFn);
    this.root = null;
  }
  getNodeHeight(node: TreeNode<T> | null = null) {
    if (node === null) {
      return -1;
    }
    return (
      Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) +
      1
    );
  }
  getBalanceFactor(node: TreeNode<T>) {
    const heightDifference: BalanceFactor =
      this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
    return heightDifference;
  }
  // 向右单旋转
  // 该node的Height为+2 要插入的数字是1
  rotationLL(node: TreeNode<T>) {
    //     3
    //   2      =>    2
    // 1            1     3
    const tmp = node.left!; // 2
    node.left = tmp.right; // 2.5
    tmp.right = node; // 3
    return tmp; // 2
  }
  // 向左单旋转
  // 该node的Height为-2 要插入的数字是3
  rotationRR(node: TreeNode<T>) {
    //  1
    //    2      =>    2
    //      3        1   3
    const tmp = node.right!; // 2
    node.right = tmp.left; // 1.5
    tmp.left = node; //  1
    return tmp;
  }
  // 向右双旋转   感觉应该叫 向左旋转+向右旋转才对  ？？
  // 该node的Height为2 要插入的数字是  2
  rotationLR(node: TreeNode<T>) {
    //        3                      3                          2
    //    1      c4  rotateLeft=> 2      c4    rotateRight=> 1     3
    // c1  2                    1   c3                     c1 c2 c3 c4
    //    c1 c3               c1 c2
    node.left = this.rotationRR(node.left!);
    return this.rotationLL(node);
  }
  // 向左双旋转
  // 该node的Height为-2 要插入的数字是  2
  rotationRL(node: TreeNode<T>) {
    //     1                           1                         2
    // c1     3      rotateRight=> c1    2    rotateLeft=>   1       3
    //      2    c4                    c2   3              c1 c2    c3 c4
    //    c2 c3                            c3 c4
    node.right = this.rotationLL(node.right!);
    return this.rotationRR(node);
  }

  insert(key: T) {
    this.root = this.insertNode(this.root, key);
  }
  insertNode(node: TreeNode<T> | null, key: T): TreeNode<T> {
    // 插入同BST
    if (node == null) {
      return new TreeNode(key);
    } else if (this.compareFn(key, node.key) < 0) {
      node.left = this.insertNode(node.left, key);
    } else if (this.compareFn(key, node.key) > 0) {
      node.right = this.insertNode(node.right, key);
    } else {
      return node; // 重复的键
    }

    // 如果需要对树进行平衡操作
    const balanceFactor = this.getBalanceFactor(node);
    if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
      if (this.compareFn(key, node.left!.key) < 0) {
        node = this.rotationLL(node);
      } else {
        return this.rotationLR(node);
      }
    }
    if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
      if (this.compareFn(key, node.right!.key) > 0) {
        node = this.rotationRR(node);
      } else {
        return this.rotationRL(node);
      }
    }
    return node;
  }
  removeNode(node: TreeNode<T> | null, key: T) {
    node = super.removeNode(node, key);
    if (node === null) return null;
    // 检查树是否平衡
    const balanceFactor = this.getBalanceFactor(node);
    if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
      const balanceFactorLeft = this.getBalanceFactor(node.left!);
      if (
        balanceFactorLeft === BalanceFactor.BALANCED ||
        balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
      ) {
        return this.rotationLL(node);
      }
      if (balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
        return this.rotationLR(node.left!);
      }
    }
    if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
      const balanceFactorRight = this.getBalanceFactor(node.right!);
      if (
        balanceFactorRight === BalanceFactor.BALANCED ||
        balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
      ) {
        return this.rotationRR(node);
      }
      if (balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
        return this.rotationRL(node.right!);
      }
    }
    return node;
  }
}
