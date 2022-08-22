import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { setDefaultAllStorageSyncData } from "Domain/StorageApi/Actions";
import { StorageApiType } from "Domain/StorageApi/Types";
import { RootState } from "Domain/Store";
import {
  updateMainTab,
  updateTooltipsDisabled,
} from "Domain/Dashboard/DashboardSlice";

const dashboardListenerMiddleware = createListenerMiddleware();

dashboardListenerMiddleware.startListening({
  matcher: isAnyOf(updateMainTab, updateTooltipsDisabled),
  effect: async (action, listenerApi) => {
    const state = listenerApi.getState() as RootState;
    setDefaultAllStorageSyncData({
      storageApiType: StorageApiType.sync,
      data: {
        dashboard: state.dashboard,
      },
    });
  },
});

export default dashboardListenerMiddleware;
