import { PresentationChartLineIcon } from "@heroicons/react/outline";

import StatsItem from "Components/Pomodoro/Stats/StatsItem";
import { pomodoroSelector } from "Domain/Pomodoro/PomodoroSelectors";
import {
  decrementCompletedBreaks,
  decrementCompletedCycles,
  incrementCompletedBreaks,
  incrementCompletedCycles,
  resetStats,
} from "Domain/Pomodoro/PomodoroSlice";
import { useAppDispatch, useAppSelector } from "Domain/Hooks";
import LastCycleEndTime from "Components/Pomodoro/Stats/LastCycleEndTime";

const Stats = () => {
  const dispatch = useAppDispatch();

  const { cyclesCompleted, breakCompleted } = useAppSelector(pomodoroSelector);

  return (
    <div>
      <h2 className="flex items-center mb-3">
        <PresentationChartLineIcon className="h-6 w-6 text-gray-200" />

        <span className="ml-0.5 text-gray-200 text-sm font-medium">Stats</span>
      </h2>

      <div className="mb-3">
        <StatsItem
          title={`Kumatos: ${cyclesCompleted}`}
          className="mb-1"
          onIncrement={() => dispatch(incrementCompletedCycles())}
          onDecrement={() => dispatch(decrementCompletedCycles())}
        />
        <StatsItem
          title={`Breaks: ${breakCompleted}`}
          onIncrement={() => dispatch(incrementCompletedBreaks())}
          onDecrement={() => dispatch(decrementCompletedBreaks())}
        />
      </div>

      <button
        type="button"
        className="bg-yellow-600 px-2 py-1 text-white rounded-sm text-sm mb-3"
        onClick={() => dispatch(resetStats())}
      >
        Reset Stats
      </button>

      <LastCycleEndTime />
    </div>
  );
};

export default Stats;
