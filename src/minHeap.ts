/**
 * An implementation of a complete binary min heap.
 */
export class MinHeap {
  private array: number[];
  
  constructor() {
    this.array = [];
  }

  /**
   * The time complexity is O(1).
   * @returns the number of items in the min heap.
   */
  size(): number {
    return this.array.length;
  }

  /**
   * The time complexity is O(1).
   * @returns the smallest element in the heap. It returns `undefined` if the heap does not have an item.
   */
  peek(): number | undefined {
    if (this.size() === 0) {
      return undefined;
    } else {
      return this.array[0];
    }
  }

  /**
   * The time complexity is O(logM).
   * @returns the smallest element in the heap.
   */
  pop(): number | undefined {
    if (this.size() === 0) return undefined;
    if (this.size() === 1) return this.array.pop()!;
    // When there are multiple items in the heap.
    const smallest = this.array[0];
    const largest = this.array.pop()!;
    this.array[0] = largest;
    this.siftDown(0); // Reconstruct the heap. O(log M).
    return smallest;
  }

  /**
   * The time complexity is O(logM).
   * @param item item to add to the heap.
   */
  add(item: number): void {
    this.array.push(item);
    this.siftUp(this.array.length-1);
  }

  /**
   * The time complexity is O(logM).
   * @param index The root index of the subtree, which the program is going to transform to a heap.
   */
  private siftDown(index: number): void {
    const [l, r] = [this.leftChild(index), this.rightChild(index)];
    if (l === undefined) {
      // The item has no children.
      // The heap property is satisfied.
      return;
    }
    if (r === undefined) {
      // The item has only a left child.
      // Switch if the heap property is not satisfied.
      if (this.array[index] > this.array[l]) {
        this.switch(index, l);
      }
      return;
    }
    // The item at `index` has left and right children.
    // Compare the items at `index`, `l`, and `r`.
    if (this.array[index] <= this.array[l] && this.array[index] <= this.array[r]) {
      // The item at `index` is the smallest.
      // The heap property is satisfied.
      return;
    } else if (this.array[l] <= this.array[index] && this.array[l] <= this.array[r]) {
      // The item at `l` is the smallest.
      // Switch items at `index` and `l`, and continue restoring the heap property.
      this.switch(index, l);
      return this.siftDown(l);
    } else {
      // The item at `r` is the smallest.
      // Switch items at `index` and `r`, and continue restoring the heap property.
      this.switch(index, r);
      return this.siftDown(r);
    }
  }

  /**
   * The time complexity is O(1).
   * @param index index of an item.
   * @returns index of the item's parent. `undefined` if the index of the root (0) is passed.
   */
  private parent(index: number): number | undefined {
    if (index === 0) return undefined;
    else return Math.floor((index - 1)/2);
  }

  /**
   * The time complexity is O(1).
   * @param index index of an item.
   * @returns index of the item's left child. `undefined` if the item does not have a left child.
   */
  private leftChild(index: number): number | undefined {
    const l = 2 * index + 1;
    if (l >= this.size()) return undefined;
    else return l;
  }

  /**
   * The time complexity is O(1).
   * @param index index of an item.
   * @returns index of the item's right child. `undefined` if the item does not have a right child.
   */
  private rightChild(index: number): number | undefined {
    const r = 2 * index + 2;
    if (r >= this.size()) return undefined;
    else return r;
  }

  /**
   * Switches the items at the given indexes. The time complexity is O(1).
   * @param index0 
   * @param index1 
   */
  private switch(index0: number, index1: number) {
    const tmp = this.array[index0];
    this.array[index0] = this.array[index1];
    this.array[index1] = tmp;
  }

  /**
   * The time complexity is O(logM).
   * @param index index of the sifting up item.
   */
  private siftUp(index: number): void {
    const p = this.parent(index);
    if (p === undefined) {
      // index is the root index.
      // The heap property is satisfied.
      return;
    }
    if (this.array[p] > this.array[index]) {
      // The parent is greater than the item.
      // Switch and continue sifting up.
      this.switch(p, index);
      return this.siftUp(p);
    }
  }
}