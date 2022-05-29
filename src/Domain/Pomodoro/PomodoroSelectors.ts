import { createSelector } from "@reduxjs/toolkit";

import { calcElapsedTimePercentage } from "Domain/Pomodoro/Utils";
import { RootState } from "Domain/Store";

export const pomodoroSelector = (state: RootState) => state.pomodoro;

export const timeElapsedPercentageSelector = createSelector(
  pomodoroSelector,
  ({ cycleStarted, remainingSeconds, currentRunDuration, breakStarted }) => {
    if (cycleStarted) {
      return calcElapsedTimePercentage(remainingSeconds, currentRunDuration);
    }

    if (breakStarted) {
      return calcElapsedTimePercentage(remainingSeconds, currentRunDuration);
    }

    return 0;
  }
);
