import { useEffect } from "react";
import omit from "lodash.omit";

import { useAppSelector } from "Domain/Hooks";
import { pomodoroSelector } from "Domain/Pomodoro/PomodoroSelectors";
import { setStorageSyncData } from "Domain/Pomodoro/PomodoroStorageApi";

const useDataPersistor = () => {
  const dashboard = useAppSelector(pomodoroSelector);

  useEffect(() => {
    setStorageSyncData(
      omit(dashboard, "defaultStorageDataFetched", "remainingSeconds")
    );
  }, [dashboard]);
};

export default useDataPersistor;

