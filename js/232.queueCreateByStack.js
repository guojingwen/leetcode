export class MyQueue {
    inStack = [];
    outStack = [];
    constructor() { }
    push(x) {
        this.inStack.push(x);
    }
    pop() {
        if (this.outStack.length) {
            return this.outStack.pop();
        }
        this.inToOut();
        return this.outStack.pop();
    }
    peek() {
        if (this.outStack.length) {
            return this.outStack.slice(-1)[0];
        }
        this.inToOut();
        return this.outStack.slice(-1)[0];
    }
    empty() {
        return !this.outStack.length && !this.inStack.length;
    }
    inToOut() {
        while (this.inStack.length) {
            this.outStack.push(this.inStack.pop());
        }
    }
}
