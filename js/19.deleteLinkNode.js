function createLink(arr) {
    const listNode = {
        val: arr[0],
        next: null,
    };
    arr.slice(1).reduce((sum, item) => {
        sum.next = {
            val: item,
            next: null,
        };
        return sum.next;
    }, listNode);
    return listNode;
}
const head = createLink([1]);
console.log(removeNthFromEnd(head, 1));
export function removeNthFromEnd(head, n) {
    if (!head)
        return null;
    let head2 = head;
    let i = 0;
    while (head2 && i < n) {
        head2 = head2.next;
        i++;
    }
    if (!head2) {
        if (n == 1)
            return null;
        if (n === i)
            return head.next;
        return head;
    }
    let head3 = head;
    while (head2?.next) {
        head3 = head3.next;
        head2 = head2.next;
    }
    head3.next = head3.next.next;
    return head;
}
