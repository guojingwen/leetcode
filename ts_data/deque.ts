// import { Queue } from './queue';

//  class Deque extends Queue
// 由于私有属性不能继承， 这里写一下抽象代码
class Deque<T> {
  addFront(element: T): void {}
  addBack(element: T): void {}
  removeFront(): void {}
  removeBack(): void {}
  peekFront(): T {}
  peekBack(): T {}
}

// JS 事件循环
// 回文检查器
// leetcode
