export class MyStack<T = any> {
  queue1 = [] as T[];
  queue2 = [] as T[];

  push(x: T): void {
    this.queue1.push(x); // queue.enqueue()
  }

  pop(): T | null {
    if (this.queue1.length) {
      while (this.queue1.length - 1) {
        this.queue2.push(this.queue1.shift()!);
      }
      const result = this.queue1.shift()!;
      while (this.queue2.length) {
        this.queue1.push(this.queue2.shift()!);
      }
      return result;
    }
    return null;
  }

  top(): T | null {
    return this.queue1.slice(-1)[0];
  }

  empty(): boolean {
    return !this.queue1.length;
  }
}

/* // 用队列实现栈 // 这里用数组模拟栈
class MyStack {
  queue1 = [] as number[]; //
  queue2 = [] as number[]; // 临时队列
  _top = -1; //  栈顶元素

  push(x: number): void {
    this._top = x;
    this.queue2.push(x); // queue.enqueue()
    // queue.isEmpty
    while (!this.queue1.length) {
      // length =˘ size
      const it = this.queue1.pop()!; // queue.dequeue()
      this.queue2.push(it); // queue.enqueue()
      const temp = this.queue1;
      this.queue1 = this.queue2;
      this.queue2 = temp;
    }
  }

  pop(): number {
    let e = this.queue1.pop()!; // queue.dequeue();
    this._top = this.queue1[this.queue1.length - 1]; // queue.peek();
    return e;
  }

  top(): number {
    // peek
    return this._top;
  }

  empty(): boolean {
    return !this.queue1.length; // queue.isEmpty()
  }
}

// 用队列实现栈  // 一个队列
class MyStack2 {
  queue = [] as number[];
  _top = -1; //  栈顶元素

  push(x: number): void {
    this._top = x;
    let count = this.queue.length;
    this.queue.push(x); // queue.enqueue()
    // queue.isEmpty
    while (count) {
      this.queue.push(this.queue.shift()!);
      count--;
    }
  }

  pop(): number {
    let e = this.queue.pop()!; // queue.dequeue();
    this._top = this.queue[this.queue.length - 1]; // queue.peek();
    return e;
  }

  top(): number {
    // peek
    return this._top;
  }

  empty(): boolean {
    return !this.queue.length; // queue.isEmpty()
  }
}
 */
