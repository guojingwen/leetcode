/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
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
const list1 = createListNode([1,2,4]);
const list2 = createListNode([1,3,4]);
const result = mergeTwoLists(list1, list2)
console.log(result);

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null) {
    if(!list1) return list2;
    if(!list2) return list1;

    let currentLeft: ListNode | null = list1;
    let currentRight: ListNode | null = list2;
    let sumListNode: ListNode = {
        val: -99,
        next: null,
    };
    let currentListNode = sumListNode;
    while (currentLeft || currentRight) {
        if(!currentLeft) {
            currentListNode.next = {
                val: currentRight!.val,
                next: null,
            }
            currentRight = currentRight!.next;
        } else if(!currentRight) {
            currentListNode.next = {
                val: currentLeft.val,
                next: null,
            }
            currentLeft = currentLeft.next;
        } else if(currentRight.val < currentLeft.val) {
            currentListNode.next = {
                val: currentRight!.val,
                next: null,
            }
            currentRight = currentRight!.next;
        } else {
            currentListNode.next = {
                val: currentLeft.val,
                next: null,
            }
            currentLeft = currentLeft.next;
        }
        currentListNode = currentListNode.next;
    }
    return sumListNode.next;
}
