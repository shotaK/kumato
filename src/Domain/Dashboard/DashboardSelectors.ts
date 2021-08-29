import { createSelector } from "@reduxjs/toolkit";

import { calcElapsedTimePercentage } from "Domain/Dashboard/Utils";
import { RootState } from "Domain/Store";

export const dashboardSelector = (state: RootState) => state.dashboard;

export const timeElapsedPercentageSelector = createSelector(
  dashboardSelector,
  ({
    cycleStarted,
    cycleDuration,
    remainingSeconds,
    breakStarted,
    breakDuration,
  }) => {
    if (cycleStarted) {
      return calcElapsedTimePercentage(remainingSeconds, cycleDuration);
    }

    if (breakStarted) {
      return calcElapsedTimePercentage(remainingSeconds, breakDuration);
    }

    return 0;
  }
);
