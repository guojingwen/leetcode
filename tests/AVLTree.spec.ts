import { describe, test, expect, beforeEach } from 'vitest';
import AVLTree from '../ts_data/AVLTree';

describe('test AVLTree', () => {
  let avlTree: AVLTree<number>;
  beforeEach(() => {
    avlTree = new AVLTree<number>();
  });
  test('insert LL', () => {
    avlTree.insert(3);
    avlTree.insert(2);
    avlTree.insert(1);
    console.log(avlTree);
    expect(avlTree.root!.key).equal(2);
  });
  test('insert RR', () => {
    avlTree.insert(1);
    avlTree.insert(2);
    avlTree.insert(3);
    console.log(avlTree);
    expect(avlTree.root!.key).equal(2);
  });
  test('insert LR', () => {
    avlTree.insert(3);
    avlTree.insert(2);
    avlTree.insert(4);
    avlTree.insert(1);
    avlTree.insert(0);
    console.log(avlTree);
    expect(avlTree.root!.key).equal(3);
  });
  test('insert RL', () => {
    avlTree.insert(2);
    avlTree.insert(1);
    avlTree.insert(3);
    avlTree.insert(4);
    avlTree.insert(5);
    console.log(avlTree);
    expect(avlTree.root!.key).equal(2);
  });

  test('remove', () => {
    avlTree.insert(2);
    avlTree.insert(1);
    avlTree.insert(3);
    avlTree.insert(4);
    avlTree.insert(5);
    avlTree.remove(1);
    expect(avlTree.root!.key).equal(4);
  });
});
