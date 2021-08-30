import { dashboardSelector } from "Domain/Dashboard/DashboardSelectors";
import { useAppSelector } from "Domain/Hooks";

const Timer = () => {
  const { remainingSeconds } = useAppSelector(dashboardSelector);

  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds - minutes * 60;

  return <>{`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}</>;
};

export default Timer;
