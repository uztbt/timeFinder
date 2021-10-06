# Time Finder

TypeScript implementation of Time Finder.

## System Requirements

- node: v16.0.0
- yarn: 1.22.10

## How to Run

```bash
git clone git@github.com:uztbt/timeFinder.git
cd timeFinder
yarn
yarn test
```

## Design Considerations

### What is the time complexity of my algorithm?

The time complexity of my algorithm (findTime()) is O(M log M), where M is the number of schedules passed as an argument. I think it is the optimal time complexity because I believe sorting an array of schedules is unavoidable to solve this problem.

![](./doc/png/timeComplexity.png)

### Why did I use a min-heap?

I used a min-heap to store unexpired end times in findTime(). I needed the storage of unexpired end times to be efficient for both popping and insertion. A min-heap is the ideal data storage for those requirements because its popping and insertion only take O(log M). Please refer to the performance matrix of some data structures below.

| | Min-Heap | Sorted Linked List | Sorted Array |
| - |--|--|--|
| Popping | O(log M) | O(1) | O(1) |
| Insertion | O(log M) | O(M) | O(M) |


## Test Cases

The automated test confirm the program runs correctly in the following test cases.

### Test 0

![](./doc/png/test0.png)

### Test 1

![](./doc/png/test1.png)


### Test 2

![](./doc/png/test2.png)

### Test 3

![](./doc/png/test3.png)

### Test 4

![](./doc/png/test4.png)
