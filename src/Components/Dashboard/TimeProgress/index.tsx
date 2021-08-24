import Pie from "Components/Shared/ProgressRing";
import Timer from "Components/Dashboard/TimeProgress/Timer";
import { timeElapsedPercentageSelector } from "Domain/Dashboard/DashboardSelectors";
import { useAppSelector } from "Domain/Hooks";

const TimeProgress = () => {
  const timeElapsedPercentage = useAppSelector(timeElapsedPercentageSelector);

  return (
    <div className="flex justify-center">
      <Pie title={<Timer />} percentage={timeElapsedPercentage} />
    </div>
  );
};

export default TimeProgress;
