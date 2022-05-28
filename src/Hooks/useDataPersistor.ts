import { useEffect } from "react";
import omit from "lodash.omit";

import { useAppSelector } from "Domain/Hooks";
import { dashboardSelector } from "Domain/Dashboard/DashboardSelectors";
import { setStorageSyncData } from "Services/StorageApi";

const useDataPersistor = () => {
  const dashboard = useAppSelector(dashboardSelector);

  useEffect(() => {
    setStorageSyncData(
      omit(dashboard, "defaultStorageDataFetched", "remainingSeconds")
    );
  }, [dashboard]);
};

export default useDataPersistor;

