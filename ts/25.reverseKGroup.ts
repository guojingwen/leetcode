interface ListNode {
    val: number;
    next: ListNode | null;
}
function createListNode(arr: Array<number>):ListNode | null  {
    if(!arr.length) return null;
    const listNode: ListNode  = {
        val: arr[0],
        next: null,
    }
    arr.slice(1).reduce((sum, val) => {
        sum.next = {
            val,
            next: null
        }
        return sum.next;
    }, listNode);
    return listNode;
}
var l1 = createListNode([1,2,3,4, 5]);
var myResult = reverseKGroup(l1, 2)
console.log(myResult);

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    if(!head) return head;
    const preHead: ListNode = {
        val: -1,
        next: head
    }
    let current: ListNode = preHead;
    while (canReverse(current)) {
        let _prevHead = current;
        let _remainHead = current.next!;
        const arr: number[] = [];
        for(let i = 0; i<k; i++) {
            arr.push(_remainHead.val);
            _remainHead = _remainHead.next!;
        }
        for(let j = k-1; j>=0; j--) {
            _prevHead.next = {
                val: arr[j],
                next: null,
            }
            _prevHead = _prevHead.next;
        }
        current = _prevHead;
        _prevHead.next = _remainHead;
    }

    return preHead.next;
    function canReverse(_head: ListNode | null): boolean {
        let flag = true;
        let current = _head;
        for(let i = 0; i<k; i++) {
            if(current?.next) {
                current = current.next
            } else {
                flag = false;
                break;
            }
        }
        return flag;
    }
};
