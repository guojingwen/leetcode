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

function removeNthFromEnd(head: ListNode | null, n: number) {
  if (!head) return null;
  let head2: ListNode | null = head;
  let i = 1;
  while (head2 && i <= n) {
    head2 = head2.next;
    i++;
  }
  if (!head2) {
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
