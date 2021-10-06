import { MinHeap } from "./minHeap";

test("Story test", () => {
  const heap = new MinHeap();
  heap.add(2);
  heap.add(6);
  heap.add(1);
  heap.add(4);
  expect(heap.peek()).toBe(1);
  expect(heap.pop()).toBe(1);
  expect(heap.pop()).toBe(2);
  heap.add(3);
  heap.add(5);
  heap.add(7);
  heap.add(7);
  heap.add(7);
  expect(heap.pop()).toBe(3);
  expect(heap.pop()).toBe(4);
  expect(heap.pop()).toBe(5);
  expect(heap.pop()).toBe(6);
  expect(heap.pop()).toBe(7);
  expect(heap.pop()).toBe(7);
  expect(heap.pop()).toBe(7);
  expect(heap.pop()).toBeUndefined();
  expect(heap.peek()).toBeUndefined();
})