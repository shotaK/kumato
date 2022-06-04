import Actions from "Components/Pomodoro/Actions";
import Settings from "Components/Pomodoro/Settings";
import Stats from "Components/Pomodoro/Stats";
import TimeProgress from "Components/Pomodoro/TimeProgress";
import Websites from "Components/Pomodoro/Websites";
import { useAppSelector } from "Domain/Hooks";
import { pomodoroSelector } from "Domain/Pomodoro/PomodoroSelectors";
import useDataPersistor from "Hooks/useDataPersistor";

const Pomodoro = () => {
  const { cycleStarted, breakStarted } = useAppSelector(pomodoroSelector);
  useDataPersistor();

  return (
    <div className="px-6">
      <div className="flex justify-between">
        <Stats />
        <Settings />
      </div>

      {(cycleStarted || breakStarted) && <TimeProgress />}

      <div className="mb-6">
        <Actions />
      </div>

      <Websites />
    </div>
  );
};

export default Pomodoro;
