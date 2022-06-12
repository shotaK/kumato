import { useEffect } from "react";

import { localChromeApi } from "Domain/Pomodoro/PomodoroStorageApi";
import { useAppDispatch } from "Domain/Hooks";
import { changeRemainingSeconds } from "Domain/Pomodoro/PomodoroSlice";

const useStorageChange = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const storageListener = localChromeApi.storage.onChanged.addListener(
      (changes: any) => {
        if (changes?.remainingSeconds) {
          const { newValue } = changes.remainingSeconds;

          dispatch(changeRemainingSeconds(newValue));
        }
      }
    );

    return () => {
      localChromeApi.storage.onChanged.removeListener(storageListener);
    };
  }, [dispatch]);
};

export default useStorageChange;
