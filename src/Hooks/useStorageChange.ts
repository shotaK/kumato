import { useEffect } from "react";

import { chromeApi } from "Services/StorageApi";
import { useAppDispatch } from "Domain/Hooks";
import { changeRemainingSeconds } from "Domain/Pomodoro/PomodoroSlice";

const useStorageChange = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const storageListener = chromeApi.storage.onChanged.addListener(
      (changes: any) => {
        if (changes?.remainingSeconds) {
          const { newValue } = changes.remainingSeconds;

          dispatch(changeRemainingSeconds(newValue));
        }
      }
    );

    return () => {
      chromeApi.storage.onChanged.removeListener(storageListener);
    };
  }, [dispatch]);
};

export default useStorageChange;
