import { beforeEach, describe, test, expect } from 'vitest';
import {
  LinkedList,
  CircularLinkedList,
  SortedListList,
} from '../ts_data/linkedList';

describe('test linkedList', () => {
  let linkedList: LinkedList<number> | null = null;
  beforeEach(() => {
    linkedList = new LinkedList<number>();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
  });
  test('toString', () => {
    expect(linkedList!.toString()).equal('1,2,3');
  });
  test('insert', () => {
    linkedList!.insert(0, 0);
    expect(linkedList!.toString()).equal('0,1,2,3');
  });
  test('getElementAt', () => {
    const node = linkedList!.getElementAt(2)!;
    expect(node.element).equal(3);
  });
  test('removeAt', () => {
    const element = linkedList!.removeAt(1);
    expect(element).equal(2);
    expect(linkedList!.toString()).equal('1,3');
  });
  test('indexOf', () => {
    expect(linkedList!.indexOf(3)).equal(2);
  });
});

describe('test CircularLinkedList', () => {
  let clinkedList: CircularLinkedList<number> | null = null;
  beforeEach(() => {
    clinkedList = new CircularLinkedList<number>();
    clinkedList.push(1);
    clinkedList.insert(0, 0);
  });
  test('indexOf', () => {
    expect(clinkedList!.toString()).equal('0,1');
    const head = clinkedList!.getHead()!;
    expect(head!.element).equal(0);
    expect(head!.next!.element).equal(1);
    expect(head!.next!.next!.element).equal(0);
  });
});

describe('test SortedListList', () => {
  let slinkedList: SortedListList<number> | null = null;
  beforeEach(() => {
    slinkedList = new SortedListList<number>();
    slinkedList.push(3);
    slinkedList.push(4);
    slinkedList.push(1);
    slinkedList.push(2);
  });
  test('indexOf', () => {
    expect(slinkedList!.toString()).equal('1,2,3,4');
  });
  test('indexOf', () => {
    slinkedList!.removeAt(0)!;
    expect(slinkedList!.toString()).equal('2,3,4');
  });
});
