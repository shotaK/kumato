import Actions from "Components/Dashboard/Actions";
import Settings from "Components/Dashboard/Settings";
import Stats from "Components/Dashboard/Stats";
import TimeProgress from "Components/Dashboard/TimeProgress";
import Websites from "Components/Dashboard/Websites";
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
