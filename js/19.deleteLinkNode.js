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
function removeNthFromEnd(head, n) {
    if (!head)
        return null;
    let prevNode = head;
    let distance = 0;
    let currentNode = head;
    while (currentNode.next) {
        currentNode = currentNode.next;
        if (distance < n) {
            distance++;
        }
        else if (distance === n) {
            prevNode = prevNode.next;
        }
    }
    if (distance === n) {
        if (prevNode.next) {
            prevNode.next = prevNode.next.next;
        }
        else {
            return prevNode.next;
        }
    }
    else if (distance === n - 1) {
        return prevNode.next;
    }
    return head;
}
