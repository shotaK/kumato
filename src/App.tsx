import { useEffect } from "react";
import { pomodoroSelector } from "Domain/Pomodoro/PomodoroSelectors";
import { useAppSelector, useAppThunkDispatch } from "Domain/Hooks";
import { initializeData } from "Domain/Pomodoro/PomodoroSlice";
import useStorageChange from "Hooks/useStorageChange";

import Dashboard from "Components/Dashboard";

function App() {
  const dispatch = useAppThunkDispatch();

  const { defaultStorageDataFetched } = useAppSelector(pomodoroSelector);

  useStorageChange();

  useEffect(() => {
    dispatch(initializeData());
  }, [dispatch]);

  return (
    <div className="py-6 w-96 mx-auto bg-[#2a2727]">
      {defaultStorageDataFetched && <Dashboard />}
    </div>
  );
}

export default App;
