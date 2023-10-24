import { DoubleLinkList } from './doubleLinkedList';

export class StackLinkedList<T = any> {
  public items = new DoubleLinkList<T>();
  constructor() {}
  push(element: T) {
    this.items.append(element);
  }
  pop() {
    if (this.items.size) {
      return undefined;
    }
    return this.items.remove();
  }
  size(): number {
    return this.items.size;
  }
}
