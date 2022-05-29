import { WebsiteBlockable } from "Domain/Pomodoro/Types";

export const calcElapsedTimePercentage = (
  elapsedTimeSeconds: number,
  totalTimeMinutes: number
) => {
  return (
    Math.round(100 - (elapsedTimeSeconds / (totalTimeMinutes * 60)) * 100) || 1
  );
};

export const getWebsiteIndex = (
  blockableWebsites: WebsiteBlockable[],
  websiteUrl: string
) => blockableWebsites.findIndex(({ url }) => url === websiteUrl);
