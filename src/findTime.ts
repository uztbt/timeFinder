import { MinHeap } from "./minHeap";

export type Schedule = {
  personId: number;
  start: number;
  end: number;
}

/**
 * 
 * @param schedules Schedules of all the people involved.
 * @param after Find a meeting time slot after this time (inclusive).
 * @param minimumTime Minimum length of the meeting to set.
 * @returns Start time of the meeting.
 */
export function findTime(schedules: Schedule[], after: number, minimumTime: number) {
  const filteredSchedules = schedules.filter(schedule => schedule.end >= after); // O(M)
  filteredSchedules.sort((a, b) => a.start - b.start); // O(MlogM)
  const endTimes: MinHeap = new MinHeap(); // O(1)
  for (const schedule of filteredSchedules) {
    let lastEndTime = after; // For record
    // Remove all the schedules that end before schedule.start from endTimes
    while (endTimes.size() > 0 && endTimes.peek()! <= schedule.start) {
      lastEndTime = endTimes.pop()!; // O(logM)
    }
    // Check if
    // 1. Nobody has any schedule at schedule.start
    // 2. The gap between schedule.start and lastEndTime is greater than minimumTime
    if (endTimes.size() == 0 && schedule.start - lastEndTime >= minimumTime) {
      return lastEndTime;
    } else {
      endTimes.add(schedule.end); // O(logM)
    }
  }
  // If the program execution reaches here, it means there is no time for the meeting.
  // Schedule the meeting as soon as when everyone finishes all of their plans.
  let lastEndTime = after;
  while (endTimes.size() > 0) {
    lastEndTime = endTimes.pop()!; // O(logM)
  }
  return lastEndTime;
}