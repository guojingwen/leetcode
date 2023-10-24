function createListNode(arr) {
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
var l1 = createListNode([1, 4, 5]);
var l2 = createListNode([1, 3, 4]);
var l3 = createListNode([2, 6]);
var l = mergeKLists([l1, l2, l3]);
console.log(l);
export function mergeKLists(links) {
    links = links.filter((l) => l);
    if (!links.length) {
        return null;
    }
    if (links.length === 1) {
        return links[0];
    }
    const result = {
        val: -1,
        next: null,
    };
    let current = result;
    while (links.length) {
        let min = Infinity;
        let minIndex = -1;
        links.forEach((link, index) => {
            if (link.val < min) {
                minIndex = index;
                min = link.val;
            }
        });
        if (links[minIndex].next === null) {
            links.splice(minIndex, 1);
        }
        else {
            links[minIndex] = links[minIndex].next;
        }
        current.next = {
            val: min,
            next: null,
        };
        current = current.next;
    }
    return result.next;
}
