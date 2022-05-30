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
const list1 = createListNode([1, 2, 4]);
const list2 = createListNode([1, 3, 4]);
const result = mergeTwoLists(list1, list2);
console.log(result);
function mergeTwoLists(list1, list2) {
    if (!list1)
        return list2;
    if (!list2)
        return list1;
    let currentLeft = list1;
    let currentRight = list2;
    let sumListNode = {
        val: -99,
        next: null,
    };
    let currentListNode = sumListNode;
    while (currentLeft || currentRight) {
        if (!currentLeft) {
            currentListNode.next = {
                val: currentRight.val,
                next: null,
            };
            currentRight = currentRight.next;
        }
        else if (!currentRight) {
            currentListNode.next = {
                val: currentLeft.val,
                next: null,
            };
            currentLeft = currentLeft.next;
        }
        else if (currentRight.val < currentLeft.val) {
            currentListNode.next = {
                val: currentRight.val,
                next: null,
            };
            currentRight = currentRight.next;
        }
        else {
            currentListNode.next = {
                val: currentLeft.val,
                next: null,
            };
            currentLeft = currentLeft.next;
        }
        currentListNode = currentListNode.next;
    }
    return sumListNode.next;
}
