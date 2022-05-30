function createListNode(arr) {
    if (!arr.length)
        return null;
    const listNode = {
        val: arr[0],
        next: null,
    };
    arr.slice(1).reduce((sum, val) => {
        sum.next = {
            val,
            next: null
        };
        return sum.next;
    }, listNode);
    return listNode;
}
var l1 = createListNode([1, 2, 3, 4]);
console.log(swapPairs(l1));
function swapPairs(head) {
    if (!head)
        return head;
    const newHead = {
        val: -1,
        next: head
    };
    let currentHead = newHead;
    while (currentHead?.next?.next) {
        currentHead.next = {
            val: currentHead.next.next.val,
            next: {
                val: currentHead.next.val,
                next: currentHead.next.next.next
            },
        };
        currentHead = currentHead.next.next;
    }
    return newHead.next;
}
;
