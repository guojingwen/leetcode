import { test, expect } from 'vitest';
import { createHuffmanTree, TreeNode } from '../ts_data/HuffmanTree';

test('测试 createHuffmanTree', () => {
  const tree = createHuffmanTree([13, 7, 8, 3, 29, 6, 1]);
  const result: number[] = [];
  function inOrderTraverse(
    node: TreeNode<number>,
    callback: Function
  ) {
    if (node.left) inOrderTraverse(node.left, callback);
    if (node.left === null && node.right === null) {
      callback(node.key);
    }
    if (node.right) inOrderTraverse(node.right, callback);
  }
  inOrderTraverse(tree, (val) => {
    result.push(val);
  });
  expect(result).toEqual([29, 7, 8, 1, 3, 6, 13]);
});
