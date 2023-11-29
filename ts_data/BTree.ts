export class TreeNode<T = any> {
  vals: T[] = [];
  left: TreeNode<T> | null = null;
  center: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;
  parent: TreeNode<T> | null = null;
  constructor(vals: T[] | T) {
    if (vals instanceof Array) {
      this.vals = vals;
    } else {
      this.vals = [vals];
    }
  }
}

export class TwoThreeTree<T = number> {
  public root: TreeNode<T> | null = null;
  insert(element: T) {
    this.insertNode(this.root, element);
  }
  insertNode(node: TreeNode<T> | null, element: T) {
    if (node === null) return new TreeNode(element);
    if (node.left === null && node.right === null) {
      if (node.vals.length < 2) {
        if (node.vals[0] > element) {
          node.vals.unshift(element);
        } else {
          node.vals.push(element);
        }
        return;
      } else {
        if (element < node.vals[0]) {
          node.left = new TreeNode(element);
          const rightEle = node.vals.pop()!;
          node.right = new TreeNode(rightEle);
        } else if (element > node.vals[1]) {
          node.right = new TreeNode(element);
          const leftEle = node.vals.shift()!;
          node.left = new TreeNode(leftEle);
        } else {
          const [leftEle, rightEle] = node.vals;
          node.vals.splice(0, 2, element);
          node.left = new TreeNode(leftEle);
          node.right = new TreeNode(rightEle);
        }
        // todo
        return this.toBalance(node);
      }
    } else {
      // 根据2-3树规则至少left、right两个子节点
      if (node.vals.length === 1) {
        const val = node.vals[0];
        if (node.left!.vals.at(-1)! > element && element < val) {
          node.vals.unshift(element);
          return;
        } else if (node.right!.vals[0] > element && element < val) {
          node.vals.push(element);
          return;
        } else {
          if (element < val) {
            // todo 左边有两个时
            return this.insertNode(node.left, element);
          } else {
            // todo 右边有两个时
            return this.insertNode(node.right, element);
          }
        }
      } else {
        // 当前节点有两个元素
        if (element < node.vals[0]) {
          return this.insertNode(node.left, element);
        } else if (element > node.vals[1]) {
          return this.insertNode(node.right, element);
        } else {
          if (node.center === null) {
            return (node.center = new TreeNode(element));
          } else {
            return this.insertNode(node.center, element);
          }
        }
      }
    }
  }
  toBalance(node: Element) {
    console.log(node);
  }
}
