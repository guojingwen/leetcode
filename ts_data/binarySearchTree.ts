export class TreeNode<T = any> {
  public left: TreeNode<T> | null = null;
  public right: TreeNode<T> | null = null;
  constructor(public key: T) {}
}
// 二叉树
export class BinarySearchTree<T = any> {
  public root: TreeNode<T> | null = null;
  constructor(public compareFN = (a, b) => a - b) {
    this.root = null; // {1} Node
  }
  insert(key: T): void {
    if (this.root === null) {
      this.root = new TreeNode(key);
    } else {
      this.insertNode(this.root, key);
    }
  }
  insertNode(node: TreeNode, key: T) {
    if (this.compareFN(key, node.key) < 0) {
      if (node.left === null) {
        node.left = new TreeNode(key);
      } else {
        this.insertNode(node.left, key);
      }
    } else {
      if (node.right === null) {
        node.right = new TreeNode(key);
      } else {
        this.insertNode(node.right, key);
      }
    }
  }
  search(key: T, node = this.root): boolean {
    if (!node) return false;
    let current = node;
    const diff = this.compareFN(key, current.key);
    if (diff === 0) {
      return true;
    }
    return this.search(key, diff > 0 ? current.right : current.left);
  }
  min(): TreeNode<T> {
    if (this.root == null) throw new Error();
    let current = this.root;
    while (current.left) {
      current = current.left;
    }
    return current;
  }
  max(): TreeNode<T> {
    if (this.root == null) throw new Error();
    let current = this.root;
    while (current.right) {
      current = current.right;
    }
    return current;
  }
  remove(key: T): void {
    this.root = this.removeNode(this.root, key);
  }
  removeNode(node: TreeNode<T> | null, key: T): TreeNode<T> | null {
    if (node === null) {
      return null;
    }
    const diff = this.compareFN(key, node.key);
    if (diff < 0) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (diff > 0) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      } else if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      const aux = this.minNode(node.right);
      node.key = aux.key;
      node.right = this.removeNode(node.right, aux.key);
      return node;
    }
  }
  minNode(node: TreeNode<T>) {
    let current = node;
    while (current !== null && current.left! == null) {
      current = current.left!;
    }
    return current;
  }
  // 先序遍历 打印结构化文档
  preOrderTraverse(callback: Function): void {
    this.preOrderTraverseNode(this.root, callback);
  }
  // 中序遍历  从小到大排序
  inOrderTraverse(callback: Function): void {
    this.inOrderTraverseNode(this.root, callback);
  }
  // 后序遍历 统计文件夹大小
  postOrderTraverse(callback: Function): void {
    this.postOrderTraverseNode(this.root, callback);
  }
  preOrderTraverseNode(node: TreeNode<T> | null, callback: Function) {
    if (node !== null) {
      callback(node.key);
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
    }
  }
  inOrderTraverseNode(node: TreeNode<T> | null, callback: Function) {
    if (node !== null) {
      this.inOrderTraverseNode(node.left, callback);
      callback(node.key);
      this.inOrderTraverseNode(node.right, callback);
    }
  }
  postOrderTraverseNode(node: TreeNode<T> | null, callback: Function) {
    if (node !== null) {
      this.postOrderTraverseNode(node.left, callback);
      this.postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  }
}
