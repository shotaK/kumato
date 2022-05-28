import Actions from "Components/Pomodoro/Actions";
import Settings from "Components/Pomodoro/Settings";
import Stats from "Components/Pomodoro/Stats";
import TimeProgress from "Components/Pomodoro/TimeProgress";
import Websites from "Components/Pomodoro/Websites";
import { useAppSelector } from "Domain/Hooks";
import { dashboardSelector } from "Domain/Dashboard/DashboardSelectors";
import useDataPersistor from "Hooks/useDataPersistor";

const Dashboard = () => {
  const { cycleStarted, breakStarted } = useAppSelector(dashboardSelector);
  useDataPersistor();

  return (
    <div>
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

export default Dashboard;
