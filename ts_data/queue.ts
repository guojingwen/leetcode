export class Queue<T = any> {
  #count = 0;
  #lowest = 0;
  #items: { [key: number]: T } = Object.create(null);
  get isEmpty() {
    return this.#count === this.#lowest;
  }
  get size() {
    return this.#count - this.#lowest;
  }
  enqueue(element: T) {
    this.#items[++this.#count] = element;
  }
  dequeue() {
    if (this.isEmpty) return;
    const result = this.#items[this.#lowest + 1];
    this.#lowest++;
    return result;
  }
  peek(): T | undefined {
    if (this.isEmpty) return;
    return this.#items[this.#lowest + 1];
  }
  clear() {
    this.#count = 0;
    this.#lowest = 0;
    this.#items = Object.create({});
  }
  toString() {
    if (this.isEmpty) {
      return '';
    }
    let str = `${this.#items[this.#lowest + 1]}`;
    for (let i = this.#lowest + 2; i <= this.#count; i++) {
      str += `, ${this.#items[i]}`;
    }
    return str;
  }
}
