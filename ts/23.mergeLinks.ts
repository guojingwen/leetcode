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
var l1 = createListNode([1,4,5]);
var l2 = createListNode([1,3,4]);
var l3 = createListNode([2,6])
var l = mergeKLists([l1, l2, l3])
console.log(l);

function mergeKLists(arr: (ListNode | null)[]): ListNode | null {
    if(!arr.length) {
        return null
    }
    if(arr.length === 1) {
        return arr[0];
    }
    const result: ListNode = {
        val: -1,
        next: null
    }
    let current = result;
    arr = arr.filter(l => l);
    while (arr.length) {
        let minValIndex = 0;
        arr.forEach((l, index) => {
            if(l && l.val < (arr[minValIndex]?.val ?? Infinity)) {
                minValIndex = index;
            }
        })
        current.next = arr[minValIndex];
        current = current.next!;
        arr[minValIndex] = arr[minValIndex]!.next;
        if(!arr[minValIndex]) {
            arr.splice(minValIndex, 1);
        }
    }
    return result.next;
}
