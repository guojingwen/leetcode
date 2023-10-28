import { BinarySearchTree, TreeNode } from './binarySearchTree';

/**
 * 对于搜索频次很少，插入删除频繁的场景使用红黑树
 * 红黑树的规则
 * 1. 跟叶黑
 * 2. 左根右
 * 3. 不红红
 * 4. 黑路通
 */
enum Colors {
  RED = 'RED',
  BLACK = 'BLACK',
}
export class RedBlackNode<T = any> extends TreeNode {
  public parent: RedBlackNode<T> | null = null;
  public left: RedBlackNode<T> | null = null;
  public right: RedBlackNode<T> | null = null;
  constructor(
    public key: T,
    public color = Colors.BLACK
  ) {
    super(key);
  }
  isRED() {
    return this.color === Colors.RED;
  }
}
export class RedBlackTree<T = any> extends BinarySearchTree {
  root: (RedBlackNode<T> & {}) | null = null;
  constructor(public compareFn = (a, b) => a - b) {
    super(compareFn);
    this.root = null;
  }
  insert(key: T) {
    if (this.root === null) {
      this.root = new RedBlackNode(key);
      this.root.color = Colors.BLACK;
    } else {
      const newNode = this.insertNode(this.root, key);
      this.fixTreeProperties(newNode);
    }
  }
  insertNode(node: RedBlackNode<T>, key: T): RedBlackNode<T> | null {
    if (this.compareFn(key, node.key) < 0) {
      if (node.left === null) {
        node.left = new RedBlackNode(key, Colors.RED);

        node.left.parent = node;
        return node.left;
      } else {
        return this.insertNode(node.left, key);
      }
    } else {
      if (node.right === null) {
        node.right = new RedBlackNode(key, Colors.RED);
        node.right.parent = node;
        return node.right;
      } else {
        return this.insertNode(node.right, key);
      }
    }
  }
  fixTreeProperties(node: RedBlackNode<T> | null) {
    // 是否破坏 不红红 原则
    while (node?.parent?.isRED() && node.color !== Colors.BLACK) {
      let parent = node.parent;
      const grandParent = parent.parent;
      // A 父节点是左侧子节点
      if (grandParent && grandParent.left === parent) {
        const uncle = grandParent.right;
        // 叔节点也是红色--只需要重新染色
        if (uncle && uncle.color === Colors.RED) {
          grandParent.color = Colors.RED;
          parent.color = Colors.BLACK;
          uncle.color = Colors.BLACK;
          node = grandParent; // 将爷节点视为新插入的节点
        } else {
          // 2A 节点是右侧子节点--左旋转
          if (parent.right === node) {
            // LR型
            this.rotationRR(parent);
            this.rotationLL(grandParent);
            // 染色 儿和爷节点
            node.color = Colors.BLACK;
            node.right!.color = Colors.RED;
          } else {
            // 3A 节点是左侧子节点--右旋转
            // 黑叔  右单旋父换爷 染色
            this.rotationLL(grandParent);
            node.parent!.color = Colors.BLACK;
            node.parent!.right!.color = Colors.RED;
          }
        }
      } else {
        // B父节点是右侧子节点 插入30
        //叔父爷同时变色
        const uncle = grandParent!.left;
        if (uncle && uncle.color === Colors.RED) {
          grandParent!.color = Colors.RED;
          parent.color = Colors.BLACK;
          uncle.color = Colors.BLACK;
          node = grandParent;
        } else {
          // 2B 节点是左侧子节点--右旋转
          if (parent.left === node) {
            this.rotationLL(parent);
            this.rotationRR(grandParent!);
            // 染色 儿和爷节点 todo check
            node.color = Colors.BLACK;
            node.left!.color = Colors.RED;
          } else {
            // 3B 节点是右侧子节点--左旋转
            this.rotationRR(grandParent!);
            node.parent.color = Colors.BLACK;
            node.parent.left!.color = Colors.RED;
          }
        }
      }
    }
    this.root!.color = Colors.BLACK;
  }
  rotationLL(node: RedBlackNode<T>): RedBlackNode<T> {
    const tmp = node.left!;
    node.left = tmp.right;
    if (tmp.right && tmp.right.key) {
      tmp.right.parent = node;
    }
    tmp.parent = node.parent;
    if (!node.parent) {
      this.root = tmp;
    } else {
      if (node === node.parent.left) {
        node.parent.left = tmp;
      } else {
        node.parent.right = tmp;
      }
    }
    tmp.right = node;
    node.parent = tmp;
    return tmp;
  }
  rotationRR(node: RedBlackNode<T>): RedBlackNode<T> {
    const tmp = node.right!;
    node.right = tmp.left;
    if (tmp.left?.key) {
      tmp.left.parent = node;
    }
    tmp.parent = node.parent;
    if (!node.parent) {
      this.root = tmp;
    } else {
      if (node === node.parent.left) {
        node.parent.left = tmp;
      } else {
        node.parent.right = tmp;
      }
    }
    tmp.left = node;
    node.parent = tmp;
    return tmp;
  }
  // todo removeNode
}
