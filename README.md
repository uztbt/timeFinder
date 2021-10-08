# Time Finder

TypeScript implementation of Time Finder.

![](./doc/png/cover.png)

## Input

- Schedules of people
- Point in time after which we find a time for the meeting
- Minimum amount of time for the meeting

## Output

- The earliest time to start the meeting

## System Requirements

- node: v16.0.0
- yarn: 1.22.10

## How to Run

```bash
git clone git@github.com:uztbt/timeFinder.git
cd timeFinder
yarn
yarn test

-------------|---------|----------|---------|---------|-------------------
File         | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-------------|---------|----------|---------|---------|-------------------
All files    |     100 |      100 |     100 |     100 |                   
 findTime.ts |     100 |      100 |     100 |     100 |                   
-------------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
```

## Design Considerations

### What is the time complexity of my algorithm?

The time complexity of my algorithm, `findTime()`, is O(M log M), where M is the number of schedules passed as an argument. I think it is the optimal time complexity because I believe sorting an array of schedules is unavoidable to solve this problem in any way.

![](./doc/png/timeComplexity.png)

**The time complexities of the sub-algorithms are improved in version 2.**
### Why did I stop using a data structure to keep all the end times in v2?

I realized that the algorithm should focus on the latest end time among the already started schedules at each iteration (and forget about the other end times). This realization led me to do without a data structure, such as heap, linked list, or array.

The algorithm v2 is more straightforward and faster than v1, although the time complexity is still O(M logM) due to the sorting operation performing at the beginning of it.

## Test Cases

The automated test confirms the program runs correctly in the following test cases.

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
