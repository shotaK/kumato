import Pie from "Components/Shared/ProgressRing";
import Timer from "Components/Pomodoro/TimeProgress/Timer";
import { timeElapsedPercentageSelector } from "Domain/Pomodoro/PomodoroSelectors";
import { useAppSelector } from "Domain/Hooks";

const TimeProgress = () => {
  const timeElapsedPercentage = useAppSelector(timeElapsedPercentageSelector);

  return (
    <div className="flex justify-center items-center relative">
      <Pie title={<Timer />} percentage={timeElapsedPercentage} />
    </div>
  );
};

export default TimeProgress;
