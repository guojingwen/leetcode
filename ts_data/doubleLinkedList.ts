export class LinkNode<T = any> {
  public next: LinkNode<T> | null = null;
  public prev: LinkNode<T> | null = null;

  constructor(public value: T) {
    this.value = value;
  }
  toString() {
    return `Node(${this.value})`;
  }
}

export class DoubleLinkList<T = any> {
  public get size() {
    return this.#size;
  }
  #size = 0;
  private head: LinkNode<T> | null = null;
  private tail: LinkNode<T> | null = null;

  private init(element: T) {
    this.tail = this.head = new LinkNode(element);
    this.head.next = null;
    this.head.prev = null;
    this.#size = 1;
  }
  append(element: T) {
    if (this.tail === null) {
      this.init(element);
      return;
    }
    const node = new LinkNode(element);
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = this.tail.next;
    this.tail.next = null;
    this.#size += 1;
  }
  appendFront(element: T) {
    if (this.head === null) {
      this.init(element);
      return;
    }
    const node = new LinkNode(element);
    this.head.prev = node;
    node.next = this.head;
    this.head = this.head.prev;
    this.#size += 1;
  }
  remove(element: T | null = null) {
    // 链表是空
    if (this.head === null) {
      return null;
    }
    // 默认删除最后一个
    let node: LinkNode<T>;
    if (element === null) {
      node = this.tail!;
    } else {
      node = this.findNode(element);
    }
    // 只有一个节点 移除
    if (this.head === this.tail) {
      if (this.head.value === node.value) {
        this.head = this.tail = null;
        this.#size = 0;
        return node;
      }
      return null;
    }
    if (node === this.head) {
      return this.unshift();
    }
    if (node === this.tail) {
      return this.pop();
    }
    // 移除中间节点
    node.next!.prev = node.prev;
    node.prev!.next = node.next;
    this.#size -= 1;
    return node;
  }
  findNode(element: T): LinkNode<T> {
    let current = this.head!;
    while (current.next) {
      if (element === current.value) {
        return current;
      }
      current = current.next;
    }
    throw new Error(); //
  }
  unshift() {
    // 没有元素
    if (this.head === null) return null;

    // 只有一个元素 或 没有元素
    const node = this.head;
    if (this.tail === this.head) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next!;
      this.head.prev = null;
    }
    this.#size -= 1;
    return node;
  }
  pop() {
    // 没有元素
    if (this.tail === null) return null;

    const node = this.tail;
    // 只有一个元素
    if (this.tail === this.head!) {
      this.head = this.tail = null;
    } else {
      this.tail = this.tail.prev!;
      this.tail.next = null;
    }
    this.#size -= 1;
    return node;
  }
  toString() {
    const result: string[] = [];
    let start = this.head;
    while (start) {
      result.push(start.toString());
      start = start.next;
    }
    return result.join(' <==> ');
  }
}
