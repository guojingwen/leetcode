class ListNode {
    val;
    next;
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
export function addTwoNumbers(l1, l2) {
    const result = new ListNode(0);
    let head = result;
    while (l1 || l2) {
        let sum = head.val;
        if (!l1) {
            sum += l2.val;
            l2 = l2.next;
        }
        else if (!l2) {
            sum += l1.val;
            l1 = l1.next;
        }
        else {
            sum += l1.val + l2.val;
            l1 = l1.next;
            l2 = l2.next;
        }
        head.val = sum % 10;
        const nextVal = Math.floor(sum / 10);
        const next = new ListNode(nextVal);
        if (nextVal === 0 && !l1 && !l2) {
            return result;
        }
        head.next = next;
        head = head.next;
    }
    return result;
}
export function createLink(arr) {
    const result = new ListNode(arr.shift());
    let head = result;
    arr.forEach((it) => {
        head.next = new ListNode(it);
        head = head.next;
    });
    return result;
}
