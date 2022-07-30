import { useEffect } from "react";
import { pomodoroSelector } from "Domain/Pomodoro/PomodoroSelectors";
import { useAppSelector, useAppThunkDispatch } from "Domain/Hooks";
import { initializePomodoroData } from "Domain/Pomodoro/PomodoroSlice";
import useStorageChange from "Hooks/useStorageChange";

import Dashboard from "Components/Dashboard";
import { initializeTodoData } from "Domain/Todo/TodoSlice";
import { initializeDashboardData } from "Domain/Dashboard/DashboardSlice";

function App() {
  const dispatch = useAppThunkDispatch();

  const { defaultStorageDataFetched: defaultPomodoroStorageDataFetched } =
    useAppSelector(pomodoroSelector);

  useStorageChange();

  useEffect(() => {
    dispatch(initializePomodoroData());
    dispatch(initializeTodoData());
    dispatch(initializeDashboardData());
  }, [dispatch]);

  return (
    <div className="py-6 w-96 mx-auto bg-[#2a2727]">
      {defaultPomodoroStorageDataFetched && <Dashboard />}
    </div>
  );
}

export default App;
