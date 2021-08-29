import { useEffect } from "react";

import { dashboardSelector } from "Domain/Dashboard/DashboardSelectors";
import { useAppSelector, useAppDispatch } from "Domain/Hooks";
import {
  completeBreak,
  completeCycle,
  elapseSecond,
} from "Domain/Dashboard/DashboardSlice";

const Timer = () => {
  const { cycleRunning, breakStarted, remainingSeconds } =
    useAppSelector(dashboardSelector);
  const dispatch = useAppDispatch();

  //   useEffect(() => {
  //     let myInterval = setInterval(() => {
  //       if (cycleRunning) {
  //         if (remainingSeconds === 0) {
  //           clearInterval(myInterval);
  //           dispatch(completeCycle());
  //         }

  //         dispatch(elapseSecond());
  //       }

  //       if (breakStarted) {
  //         if (remainingSeconds === 0) {
  //           clearInterval(myInterval);
  //           dispatch(completeBreak());
  //         }

  //         dispatch(elapseSecond());
  //       }
  //     }, 1000);
  //     return () => {
  //       clearInterval(myInterval);
  //     };
  //   }, [dispatch, cycleRunning, breakStarted, remainingSeconds]);

  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds - minutes * 60;

  return <>{`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}</>;
};

export default Timer;
