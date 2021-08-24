export const calcElapsedTimePercentage = (
  elapsedTimeSeconds: number,
  totalTimeMinutes: number
) => {
  return (
    Math.round(100 - (elapsedTimeSeconds / (totalTimeMinutes * 60)) * 100) || 1
  );
};
