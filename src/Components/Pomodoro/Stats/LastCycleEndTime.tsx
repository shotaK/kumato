import { useAppSelector } from "Domain/Hooks";
import { lastCycleEndTimeSelector } from "Domain/Pomodoro/PomodoroSelectors";
import { FireIcon } from "@heroicons/react/outline";
import Tooltip from "Components/Shared/Tooltip";

const LastCycleEndTime = () => {
  const lastCycleEndTime = useAppSelector(lastCycleEndTimeSelector);

  if (!lastCycleEndTime) {
    return null;
  }

  return (
    <div className="flex">
      {lastCycleEndTime && (
        <Tooltip
          placement="right"
          overlay={
            <div>
              Last kumato <br /> complete time
            </div>
          }
        >
          <div className="flex gap-1 items-center text-coolGray-200 text-sm">
            <FireIcon className="w-5 h-5 text-red-500" />
            <div className="">{lastCycleEndTime}</div>
          </div>
        </Tooltip>
      )}
    </div>
  );
};

export default LastCycleEndTime;
