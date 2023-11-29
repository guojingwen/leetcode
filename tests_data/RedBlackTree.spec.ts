import { describe, test, expect } from 'vitest';
import { RedBlackTree } from '../ts_data/RedBlackTree';

describe('test RedBlackTree', () => {
  test('insert', () => {
    const tree = new RedBlackTree<number>();
    tree.insert(20);
    tree.insert(10);
    tree.insert(5);
    tree.insert(30);
    tree.insert(40);
    tree.insert(57);
    tree.insert(3);
    tree.insert(2);
    tree.insert(4);
    tree.insert(35);
    tree.insert(25);
    tree.insert(18);
    tree.insert(22);
    tree.insert(23); // LR型
    tree.insert(24); // 冒泡触发LR
    tree.insert(19);
    tree.insert(18);
    const result: number[] = [];
    tree.inOrderTraverse((val) => result.push(val));
    expect(result).toEqual([
      2, 3, 4, 5, 10, 18, 18, 19, 20, 22, 23, 24, 25, 30, 35, 40, 57,
    ]);
  });
});
