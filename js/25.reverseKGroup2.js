export function createListNode(arr) {
    if (!arr.length)
        return null;
    const listNode = {
        val: arr[0],
        next: null,
    };
    arr.slice(1).reduce((sum, val) => {
        sum.next = {
            val,
            next: null,
        };
        return sum.next;
    }, listNode);
    return listNode;
}
export function reverseKGroup(head, k) {
    if (!head)
        return head;
    const preHead = {
        val: -1,
        next: null,
    };
    let current = preHead;
    let reaminLink = head;
    while (reaminLink) {
        const { arr, reamin } = step(reaminLink);
        if (arr.length !== k) {
            current.next = reaminLink;
            break;
        }
        arr.reverse().forEach((it) => {
            current.next = {
                val: it,
                next: null,
            };
            current = current.next;
        });
        reaminLink = reamin;
    }
    return preHead.next;
    function step(head) {
        let index = 0;
        const arr = [];
        let current = head;
        while (current && index < k) {
            arr.push(current.val);
            current = current.next;
            index++;
        }
        return {
            arr,
            reamin: current,
        };
    }
}
