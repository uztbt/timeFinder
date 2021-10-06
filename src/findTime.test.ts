import { findTime, Schedule } from "./findTime";

const schedulesOfPerson0: Schedule[] = [
  {personId: 0, start: 1, end: 3},
  {personId: 0, start: 2, end: 4},
  {personId: 0, start: 13, end: 14}
];
const schedulesOfPerson1: Schedule[] = [
  {personId: 1, start: 4, end: 6},
  {personId: 1, start: 7, end: 9},
  {personId: 1, start: 8, end: 10},
  {personId: 1, start: 13, end: 15}
];
const schedulesOfPerson2: Schedule[] = [
  {personId: 2, start: 1, end: 5},
  {personId: 2, start: 7, end: 8},
  {personId: 2, start: 14, end: 15}
];
const schedules = [
  ...schedulesOfPerson0, ...schedulesOfPerson1, ...schedulesOfPerson2
];

test("Meeting from time=0. Extra gap = 0.", () => {
  const answer = findTime(schedules, 0, 1);
  expect(answer).toBe(0);
});

test("Meeting in the middle. Extra gap = 1.", () => {
  const answer = findTime(schedules, 0, 2);
  expect(answer).toBe(10);
})

test("Meeting in the middle. Extra gap = 0.", () => {
  const answer = findTime(schedules, 0, 3);
  expect(answer).toBe(10);
})

test("Meeting in the middle. After time = 1. Extra gap = 0.", () => {
  const answer = findTime(schedules, 1, 1);
  expect(answer).toBe(6);
})

test("Meeting after all the schedules.", () => {
  const answer = findTime(schedules, 0, 4);
  expect(answer).toBe(15);
});
