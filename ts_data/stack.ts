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

// https://www.youtube.com/watch?v=Xcmxxx2NH7w&list=PLmOn9nNkQxJFvyhDYx0ya4F75uTtUHA_f&index=32
// 中缀表达式实现计算器
export function calculatorByStack(input: string) {
  const numberStack = new Stack<number>();
  const operatorStack = new Stack<string>();
  const operators = ['+', '-', '*', '/'];
  const priorityMap = { '+': 1, '-': 1, '*': 2, '/': 2 };
  const strs = input.split(' ');
  let i = 0;
  while (i < strs.length) {
    const char = strs[i];
    if (/^\d+$/.test(char)) {
      numberStack.push(+char);
    } else if (operators.includes(char)) {
      if (operatorStack.isEmpty) {
        operatorStack.push(char);
      } else if (
        priorityMap[char] > priorityMap[operatorStack.peek()!]
      ) {
        operatorStack.push(char);
      } else {
        const num2 = numberStack.pop()!;
        const num1 = numberStack.pop()!;
        const oper = operatorStack.pop()!;
        const result = eval(`${num1} ${oper} ${num2}`);
        numberStack.push(result);
        operatorStack.push(char);
      }
    }
    i++;
  }
  while (!operatorStack.isEmpty) {
    const oper = operatorStack.pop()!;
    const num2 = numberStack.pop()!;
    const num1 = numberStack.pop()!;
    const result = eval(`${num1} ${oper} ${num2}`);
    numberStack.push(result);
  }
  return numberStack.pop()!;
}

/**
 * 如果加入更多优先级的运算符或小括号，上述计算器就不能处理了
 * 中缀表达式虽然符合人的思路，但对于计算器来说运算很困难
 * 通常是把中缀表达式转换为后缀（逆波兰）表达式再运算
 * 比如 `(3+4)*5-6` 转换为逆波兰表达式为 `3 4 + 5 * 6 -`
 */
export class Calculator {
  compute(input: string): number {
    // `(3+4)*5-6` ==> ['(', '3', '+', '4', ')', '*', '5', '-', '6']
    const arr: string[] = this.parse(input);
    // ==> ['3', '4', '+', '5', '*', '6', '-']
    const arr2: string[] = this.transform(arr);
    return this.run(arr2);
  }
  protected parse(input: string): string[] {
    const that = this;
    const result: string[] = [];
    let current = 0;
    while (current < input.length) {
      step();
    }
    return result;
    function step() {
      const char = input[current];
      if (char === ' ') {
        current++;
        return;
      }
      if (that.isOper(char)) {
        current++;
        result.push(char);
        return;
      }
      if (/\d/.test(char)) {
        let str = '';
        while (/\d/.test(input[current])) {
          str += input[current++];
        }
        result.push(str);
        return;
      }
      throw new Error(' unExpected char: ' + char);
    }
  }
  protected transform(arr: string[]): string[] {
    const result: string[] = [];
    // 存储符号
    const s1 = new Stack<string>();
    // 存储中间结果
    const s2 = new Stack<string>();
    arr.forEach((it) => {
      if (it === ')') {
        while (s1.peek() !== '(') {
          s2.push(s1.pop()!);
        }
        s1.pop();
      } else if (this.isOper(it)) {
        this.step(it, s1, s2);
      } else {
        s2.push(it);
      }
    });
    while (!s1.isEmpty) {
      s2.push(s1.pop()!);
    }
    const s3 = new Stack<string>();
    while (!s2.isEmpty) {
      s3.push(s2.pop()!);
    }
    while (!s3.isEmpty) {
      result.push(s3.pop()!);
    }
    return result;
    // return ['3', '4', '+', '5', '*', '6', '-'] || result;
  }
  private step(it: string, s1: Stack<string>, s2: Stack<string>) {
    if (s1.isEmpty || s1.peek() === '(') {
      s1.push(it);
    } else if (this.getPriority(it) > this.getPriority(s1.peek()!)) {
      s1.push(it);
    } else {
      s2.push(s1.pop()!);
      this.step(it, s1, s2);
    }
  }
  protected run(arr2: string[]): number {
    const stack = new Stack<string>();
    arr2.forEach((it) => {
      if (!this.isOper(it)) {
        stack.push(it);
      } else {
        const num2 = stack.pop()!;
        const num1 = stack.pop()!;
        stack.push(eval(`${num1}${it}${num2}`));
      }
    });
    return +stack.pop()!;
  }
  private isOper(char: string) {
    return ['(', ')', '+', '-', '*', '%'].includes(char);
  }
  private getPriority(char: string) {
    if (['+', '-'].includes(char)) {
      return 1;
    }
    if (['*', '/'].includes(char)) {
      return 2;
    }
    if (['(', ')'].includes(char)) {
      return 3;
    }
    return -1;
  }
}
