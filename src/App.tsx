import { useEffect } from "react";

import Dashboard from "Components/Dashboard";
import { dashboardSelector } from "Domain/Dashboard/DashboardSelectors";
import { useAppSelector } from "Domain/Hooks";
import { initializeData } from "Domain/Dashboard/DashboardSlice";
import { useAppThunkDispatch } from "Domain/Hooks";
import useStorageChange from "Hooks/useStorageChange";

import "./App.css";

function App() {
  const dispatch = useAppThunkDispatch();

  const { defaultStorageDataFetched } = useAppSelector(dashboardSelector);

  useStorageChange();

  useEffect(() => {
    dispatch(initializeData());
  }, [dispatch]);

  return (
    <div className="p-6 w-96 mx-auto bg-gray-800">
      {defaultStorageDataFetched && <Dashboard />}
    </div>
  );
}

export default App;
