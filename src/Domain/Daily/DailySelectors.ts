import { RootState } from "Domain/Store";
import { DailyReportType } from "Domain/Daily/Types";
import { selectedProjectIdSelector } from "Domain/Projects/ProjectsSelectors";
import isEmpty from "lodash.isempty";

export const dailySelector = (state: RootState) => state.daily;

export const reportsListSelector = (state: RootState) =>
  dailySelector(state).reportItemsList;

export const reportsListEmptySelector = (state: RootState) =>
  isEmpty(reportsListSelector(state));

export const reportsListByTypeSelector =
  (dailyReportType: DailyReportType) => (state: RootState) => {
    const reportsList = reportsListSelector(state);
    const selectedProjectId = selectedProjectIdSelector(state);

    return reportsList.filter((report) => {
      return (
        selectedProjectId === report.projectId &&
        report.type === dailyReportType
      );
    });
  };

export const accomplishedReportsListSelector = (state: RootState) => {
  return reportsListByTypeSelector(DailyReportType.accomplished)(state);
};

export const pendingReportsListSelector = (state: RootState) => {
  return reportsListByTypeSelector(DailyReportType.upcoming)(state);
};

export const blockedReportsListSelector = (state: RootState) => {
  return reportsListByTypeSelector(DailyReportType.blocked)(state);
};
