export class MyQueue<T = any> {
  inStack: T[] = [];
  outStack: T[] = [];
  constructor() {}

  push(x: T): void {
    this.inStack.push(x);
  }

  pop(): T | undefined {
    if (this.outStack.length) {
      return this.outStack.pop()!;
    }
    this.inToOut();
    return this.outStack.pop()!;
  }

  peek(): T | undefined {
    if (this.outStack.length) {
      return this.outStack.slice(-1)[0];
    }
    this.inToOut();
    return this.outStack.slice(-1)[0];
  }

  empty(): boolean {
    return !this.outStack.length && !this.inStack.length;
  }
  inToOut() {
    while (this.inStack.length) {
      this.outStack.push(this.inStack.pop()!);
    }
  }
}
