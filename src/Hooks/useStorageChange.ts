import { useEffect } from "react";

import { chromeApi } from "Services/StorageApi";
import { useAppDispatch } from "Domain/Hooks";
import { changeRemainingSeconds } from "Domain/Dashboard/DashboardSlice";

const useStorageChange = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    chromeApi.storage.onChanged.addListener((changes: any) => {
      console.log(changes);

      if (changes?.remainingSeconds) {
        const { newValue } = changes.remainingSeconds;

        dispatch(changeRemainingSeconds(newValue));
      }
    });
  }, [dispatch]);
};

export default useStorageChange;
