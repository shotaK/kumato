import { useEffect } from "react";
import pick from "lodash.pick";

import { useAppSelector } from "Domain/Hooks";
import { dashboardSelector } from "Domain/Dashboard/DashboardSelectors";
import { setStorageSyncData } from "Services/StorageApi";
import { starterData } from "Domain/Dashboard/DashboardSlice";

const useDataPersistor = () => {
  const dashboard = useAppSelector(dashboardSelector);

  useEffect(() => {
    setStorageSyncData(pick(dashboard, Object.keys(starterData)));
  }, [dashboard]);
};

export default useDataPersistor;
