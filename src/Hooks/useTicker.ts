import { useEffect } from "react";

import { dashboardSelector } from "Domain/Dashboard/DashboardSelectors";
import { useAppSelector } from "Domain/Hooks";

import { tickApi } from "Services/MessageApi";

const useTicker = () => {
  const dashboard = useAppSelector(dashboardSelector);

  useEffect(() => {
    // tickApi();
  }, [dashboard]);
};

export default useTicker;
