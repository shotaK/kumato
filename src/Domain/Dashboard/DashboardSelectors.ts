import { createSelector } from "@reduxjs/toolkit";

import { calcElapsedTimePercentage } from "Domain/Dashboard/Utils";
import { RootState } from "Domain/Store";

export const dashboardSelector = (state: RootState) => state.dashboard;

export const timeElapsedPercentageSelector = createSelector(
  dashboardSelector,
  ({
    cycleStarted,
    cycleDuration,
    elapsedSeconds,
    breakStarted,
    breakDuration,
  }) => {
    if (cycleStarted) {
      return calcElapsedTimePercentage(elapsedSeconds, cycleDuration);
    }

    if (breakStarted) {
      return calcElapsedTimePercentage(elapsedSeconds, breakDuration);
    }

    return 0;
  }
);
