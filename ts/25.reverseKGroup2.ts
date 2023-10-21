interface ListNode {
  val: number;
  next: ListNode | null;
}
export function createListNode(arr: Array<number>): ListNode | null {
  if (!arr.length) return null;
  const listNode: ListNode = {
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

export function reverseKGroup(
  head: ListNode | null,
  k: number
): ListNode | null {
  if (!head) return head;
  const preHead: ListNode = {
    val: -1,
    next: null,
  };
  let current: ListNode = preHead;
  let reaminLink: ListNode | null = head;
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
  function step(head: ListNode): {
    arr: number[];
    reamin: ListNode | null;
  } {
    let index = 0;
    const arr: number[] = [];
    let current: ListNode | null = head;
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
