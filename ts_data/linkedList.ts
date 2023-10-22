export class MyNode<T = any> {
  public next: null | MyNode<T> = null;
  constructor(public element: T) {}
}

export class LinkedList<T = any> {
  public head: null | MyNode<T> = null;
  public count = 0;
  constructor(public equalsFn = (a: T, b: T) => a === b) {}
  push(element: T) {
    const node = new MyNode(element);
    let current: undefined | MyNode<T>;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new MyNode(element);
    }
    ++this.count;
  }
  getElementAt(index: number) {
    if (index >= 0 && index <= this.count) {
      let node = this.head;
      for (let i = 0; i < index && node != null; i++) {
        node = node.next;
      }
      return node;
    }
    return null;
  }
  insert(element: T, index: number) {
    if (index >= 0 && index <= this.count) {
      const node = new MyNode(element);
      if (index === 0) {
        const current = this.head;
        node.next = current || null;
        this.head = node;
      } else {
        const prev = this.getElementAt(index - 1)!;
        node.next = prev.next;
        prev.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }
  removeAt(index: number) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        this.head = current!.next || null;
      } else {
        const prev = this.getElementAt(index - 1)!;
        current = prev.next!;
        prev.next = current!.next;
      }
      this.count--;
      return current!.element;
    }
    return undefined;
  }
  indexOf(element: T) {
    let current = this.head;
    for (let i = 0; i < this.size() && current != null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i;
      }
      current = current.next || null;
    }
    return -1;
  }
  isEmpty() {
    return this.size() === 0;
  }
  size() {
    return this.count;
  }
  getHead() {
    return this.head;
  }
  clear() {
    this.head = null;
    this.count = 0;
  }
  toString() {
    if (this.head == null) {
      return '';
    }
    let objString = `${this.head.element}`;
    let current = this.head.next;
    for (let i = 1; i < this.size() && current != null; i++) {
      objString = `${objString},${current.element}`;
      current = current.next;
    }
    return objString;
  }
}

export class CircularLinkedList<T = any> extends LinkedList {
  constructor() {
    super();
  }
  insert(element: T, index: number) {
    if (index >= 0 && index <= this.count) {
      const node = new MyNode(element);
      let current = this.head;
      if (index === 0) {
        if (this.head === null) {
          this.head = node;
          node.next = this.head;
        } else {
          node.next = current;
          current = this.getElementAt(this.size())!;
          this.head = node;
          current.next = this.head;
        }
      } else {
        // 这种场景没有变化
        const prev = this.getElementAt(index - 1)!;
        node.next = prev.next;
        prev.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }
  removeAt(index: number) {
    if (index >= 0 && index < this.count) {
      let current = this.head!;
      if (index === 0) {
        // 需要维护环结构
        if (this.size() === 1) {
          this.head = null;
        } else {
          const removed = this.head!;
          current = this.getElementAt(this.size())!;
          this.head = this.head!.next;
          current.next = this.head;
          current = removed;
        }
      } else {
        // 不需要维护环结构
        const prev = this.getElementAt(index - 1)!;
        prev.next = prev.next!.next;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }
}

const Compare = {
  LESS_THAN: -1,
  BIGGER_THEN: 1,
};
function defaultCompare(a, b) {
  if (a === b) {
    return 0;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THEN;
}
export class SortedListList<T = any> extends LinkedList {
  constructor(
    public equalsFn = (a: T, b: T) => a === b,
    public compareFn = defaultCompare
  ) {
    super(equalsFn);
  }
  insert(element: T, index = 0) {
    if (this.isEmpty()) {
      return super.insert(element, index);
    }
    const pos = this.getIndexNextSortedElement(element);
    return super.insert(element, pos);
  }
  getIndexNextSortedElement(element: T): number {
    let current = this.head!;
    let i = 0;
    for (; i < this.size(); i++) {
      const comp = this.compareFn(element, current.element);
      if (comp === Compare.LESS_THAN) {
        return i;
      }
      current = current.next!;
    }
    return i;
  }
}

// 判断一个链表是否有环 设置两个变量 一个跑1步，一个跑两步，如果前一个能
// 移除链表倒说第N个元素 设置两个变量 一个先跑N步，当先跑的到头， 则另一个变量就是需要操作的
//
