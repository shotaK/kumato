export const DailyReportType = {
  accomplished: "accomplished",
  upcoming: "upcoming",
  blocked: "blocked",
} as const;

export type DailyReportType =
  typeof DailyReportType[keyof typeof DailyReportType];

export interface DailyReportItem {
  id: string;
  type: DailyReportType;
  description: string;
}
