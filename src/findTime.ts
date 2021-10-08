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
  let latestEndTime = after; // O(1)
  for (const schedule of filteredSchedules) {
    // Check if there is enough time gap
    // between the latest end time and schedule.start
    if (schedule.start - latestEndTime >= minimumTime) {
      return latestEndTime;
    } else {
      latestEndTime = Math.max(latestEndTime, schedule.end); // O(1)
    }
  }
  // If the program execution reaches here, it means there is no time for the meeting.
  // Schedule the meeting as soon as when everyone finishes all of their plans.
  return latestEndTime;
}