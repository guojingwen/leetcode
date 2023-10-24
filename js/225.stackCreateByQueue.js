export class MyStack {
    queue1 = [];
    queue2 = [];
    push(x) {
        this.queue1.push(x);
    }
    pop() {
        if (this.queue1.length) {
            while (this.queue1.length - 1) {
                this.queue2.push(this.queue1.shift());
            }
            const result = this.queue1.shift();
            while (this.queue2.length) {
                this.queue1.push(this.queue2.shift());
            }
            return result;
        }
        return null;
    }
    top() {
        return this.queue1.slice(-1)[0];
    }
    empty() {
        return !this.queue1.length;
    }
}
