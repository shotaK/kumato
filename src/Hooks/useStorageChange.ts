import { useEffect } from "react";

import { chromeApi } from "Services/StorageApi";
import { useAppDispatch } from "Domain/Hooks";
import { changeRemainingSeconds } from "Domain/Dashboard/DashboardSlice";

const useStorageChange = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // remainingSeconds:
    //     newValue: 2698
    //     oldValue: 2699

    chromeApi.storage.onChanged.addListener((changes: any) => {
      console.log(changes);

      if (changes?.remainingSeconds) {
        const { newValue, oldValue } = changes.remainingSeconds;
        console.log(newValue);

        dispatch(changeRemainingSeconds(newValue));
      }
    });
  }, [dispatch]);
};

export default useStorageChange;
