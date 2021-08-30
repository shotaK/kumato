import { createSelector } from "@reduxjs/toolkit";

import { calcElapsedTimePercentage } from "Domain/Dashboard/Utils";
import { RootState } from "Domain/Store";

export const dashboardSelector = (state: RootState) => state.dashboard;

export const timeElapsedPercentageSelector = createSelector(
  dashboardSelector,
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
