import { createListenerMiddleware } from "@reduxjs/toolkit";
import { setDefaultAllStorageSyncData } from "Domain/StorageApi/Actions";
import { StorageApiType } from "Domain/StorageApi/Types";
import { RootState } from "Domain/Store";

const dailyListenerMiddleware = createListenerMiddleware();

dailyListenerMiddleware.startListening({
  predicate: (action) => {
    return action?.type && action.type.startsWith("daily/");
  },
  effect: async (action, listenerApi) => {
    const state = listenerApi.getState() as RootState;
    setDefaultAllStorageSyncData({
      storageApiType: StorageApiType.sync,
      data: {
        daily: state.daily,
      },
    });
  },
});

export default dailyListenerMiddleware;
