import { RootState } from "Domain/Store";
import { DailyReportType } from "Domain/Daily/Types";

export const dailySelector = (state: RootState) => state.daily;

export const reportsListSelector = (state: RootState) =>
  dailySelector(state).reportItemsList;

export const accomplishedReportsListSelector = (state: RootState) => {
  const reportsList = reportsListSelector(state);

  return reportsList.filter(
    (report) => report.type === DailyReportType.accomplished
  );
};

export const pendingReportsListSelector = (state: RootState) => {
  const reportsList = reportsListSelector(state);

  return reportsList.filter(
    (report) => report.type === DailyReportType.upcoming
  );
};

export const blockedReportsListSelector = (state: RootState) => {
  const reportsList = reportsListSelector(state);

  return reportsList.filter(
    (report) => report.type === DailyReportType.blocked
  );
};
