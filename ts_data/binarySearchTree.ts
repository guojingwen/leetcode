export class TreeNode<T = any> {
  public left: TreeNode<T> | null = null;
  public right: TreeNode<T> | null = null;
  constructor(public key: T) {}
}

export class BinarySearchTree<T = any> {
  public root: TreeNode<T> | null = null;
  constructor(public compareFn = (a, b) => a - b) {
    this.root = null;
  }
  insert(key: T): void {
    if (this.root === null) {
      this.root = new TreeNode(key);
    } else {
      this.insertNode(this.root!, key);
    }
  }
  insertNode(node: TreeNode, key: T) {
    if (this.compareFn(key, node.key) > 0) {
      if (node.right === null) {
        node.right = new TreeNode(key);
      } else {
        this.insertNode(node.right, key);
      }
    } else {
      if (node.left === null) {
        node.left = new TreeNode(key);
      } else {
        this.insertNode(node.left, key);
      }
    }
  }
  search(key: T, node = this.root): boolean {
    if (!node) return false;
    let current = node;
    const diff = this.compareFn(key, current.key);
    if (diff === 0) {
      return true;
    }
    const currentNode = diff > 0 ? current.right : current.left;
    return this.search(key, currentNode!);
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
  remove(key: T) {
    this.root = this.removeNode(this.root, key);
  }
  removeNode(node: TreeNode<T> | null, key: T): TreeNode<T> | null {
    if (!node) return null;
    const diff = this.compareFn(key, node.key);

    if (diff > 0) {
      node.right = this.removeNode(node.right, key);
      return node;
    }
    if (diff < 0) {
      node.left = this.removeNode(node.left, key);
      return node;
    }
    if (node.left === null && node.right === null) {
      return null;
    }
    if (node.left === null) {
      return node.right;
    }
    if (node.right === null) {
      return node.left;
    }
    const aux = this.minNode(node.right);
    node.key = aux.key;
    this.removeNode(node.right, aux.key);
    return node;
  }
  minNode(node: TreeNode<T>): TreeNode<T> {
    let current = node;
    while (current.left) {
      current = current.left;
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
