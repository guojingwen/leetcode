export class Stack<T = any> {
  // 这里为了leetcode调试方便暂不使用es6私有属性
  // #size = 0;
  _size = 0;
  get size() {
    return this._size;
  }
  set size(val: number) {
    this._size = val;
  }
  // accessor size = 0; 私有属性的简写形式 // 候选阶段，还不能使用
  _items: { [key: number]: T } = Object.create(null);
  get isEmpty() {
    return this.size === 0;
  }
  constructor() {}
  push(element: T) {
    this._items[this.size] = element;
    this.size++;
  }
  pop(): T | undefined {
    if (this.isEmpty) return;
    this._size--;
    const result = this._items[this._size];
    delete this._items[this._size];
    return result;
  }
  peek(): T | undefined {
    if (this.isEmpty) return;
    return this._items[this._size - 1];
  }
  clear() {
    this._items = Object.create(null);
    this._size = 0;
  }
  toString() {
    if (this.isEmpty) {
      return '';
    }
    let str = `${this._items[0]}`;
    for (let i = 0; i < this.size; i++) {
      str += `, ${this._items[i]}`;
    }
    return str;
  }
}

// const stack = new Stack<number>();
