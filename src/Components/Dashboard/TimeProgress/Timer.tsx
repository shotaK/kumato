import { useEffect } from "react";

import { dashboardSelector } from "Domain/Dashboard/DashboardSelectors";
import { useAppSelector, useAppDispatch } from "Domain/Hooks";
import {
  completeBreak,
  completeCycle,
  elapseSecond,
} from "Domain/Dashboard/DashboardSlice";

const Timer = () => {
  const { cycleRunning, breakStarted, elapsedSeconds } =
    useAppSelector(dashboardSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (cycleRunning) {
        if (elapsedSeconds === 0) {
          clearInterval(myInterval);
          dispatch(completeCycle());
        }

        dispatch(elapseSecond());
      }

      if (breakStarted) {
        if (elapsedSeconds === 0) {
          clearInterval(myInterval);
          dispatch(completeBreak());
        }

        dispatch(elapseSecond());
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, [dispatch, cycleRunning, breakStarted, elapsedSeconds]);

  const minutes = Math.floor(elapsedSeconds / 60);
  const seconds = elapsedSeconds - minutes * 60;

  return <>{`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}</>;
};

export default Timer;
