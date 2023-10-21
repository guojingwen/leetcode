/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
interface ListNode {
  val: number;
  next: ListNode | null;
}
function createLink(arr: number[]): ListNode {
  const listNode: ListNode = {
    val: arr[0],
    next: null,
  };
  arr.slice(1).reduce((sum, item) => {
    sum.next = {
      val: item,
      next: null,
    } as ListNode;
    return sum.next;
  }, listNode);
  return listNode;
}
// const head = createLink([1,2,3,4,5]);
// console.log(removeNthFromEnd(head, 2));
const head = createLink([1]);
console.log(removeNthFromEnd(head, 1));
// function removeNthFromEnd(head: ListNode, n: number) {
//     let count = 1;
//     let node = head;
//     while (node.next) {
//         node = node.next;
//         count++;
//     }
//     const realN = count - n;
//     if(count ===  n) return head.next;
//     let prevNode: ListNode = head;
//     for (let i= 0; i<= realN; i++) {
//         if(i === realN - 1) {
//             if(prevNode.next) {
//                 if(prevNode.next.next) {
//                     prevNode.next = prevNode.next.next;
//                 } else {
//                     prevNode.next = null;
//                 }
//             }
//             break;
//         } else {
//             (prevNode as any) = prevNode.next;
//         }
//     }
//     return head;
// }

/*  优化：一次扫描， 空间换时间 */
export function removeNthFromEnd(head: ListNode | null, n: number) {
  if (!head) return null;
  let head2: ListNode | null = head;
  let i = 0;
  while (head2 && i < n) {
    head2 = head2.next;
    i++;
  }
  if (!head2) {
    if (n == 1) return null;
    if (n === i) return head.next;
    return head;
  }
  let head3: ListNode | null = head;
  while (head2?.next) {
    head3 = head3!.next;
    head2 = head2.next;
  }
  head3!.next = head3!.next!.next;
  return head;
}
