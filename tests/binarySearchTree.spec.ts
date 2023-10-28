import { test, describe, beforeEach, expect } from 'vitest';
import { BinarySearchTree } from '../ts_data/binarySearchTree';

describe('测试二叉搜索树', () => {
  let tree: BinarySearchTree<number> | null = null;
  beforeEach(() => {
    tree = new BinarySearchTree<number>();
    tree.insert(3);
    tree.insert(5);
    tree.insert(7);
    tree.insert(2);
    tree.insert(1);
    tree.insert(6);
    tree.insert(4);
    // ......
  });
  test('inOrderTraverse', () => {
    const result: number[] = [];
    tree!.inOrderTraverse((it: number) => result.push(it));
    console.log(tree);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
  test('preOrderTraverse', () => {
    const result: number[] = [];
    tree!.preOrderTraverse((it: number) => result.push(it));
    console.log(tree);
    expect(result).toEqual([3, 2, 1, 5, 4, 7, 6]);
  });
  test('postOrderTraverse', () => {
    const result: number[] = [];
    tree!.postOrderTraverse((it: number) => result.push(it));
    console.log(tree);
    expect(result).toEqual([1, 2, 4, 6, 7, 5, 3]);
  });
  test('min', () => {
    expect(tree!.min().key).toEqual(1);
  });
  test('max', () => {
    expect(tree!.max().key).toEqual(7);
  });
  test('移除一个叶节点', () => {
    tree!.remove(1);
    const result: number[] = [];
    tree!.preOrderTraverse((it: number) => result.push(it));
    expect(result).toEqual([3, 2, 5, 4, 7, 6]);
  });
  test('移除只有一个子节点的节点', () => {
    tree!.remove(7);
    const result: number[] = [];
    tree!.preOrderTraverse((it: number) => result.push(it));
    expect(result).toEqual([3, 2, 1, 5, 4, 6]);
  });
  test('移除有两个子节点的节点', () => {
    tree!.remove(5);
    const result: number[] = [];
    tree!.preOrderTraverse((it: number) => result.push(it));
    expect(result).toEqual([3, 2, 1, 6, 4, 7]);
  });
});
