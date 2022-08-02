import { createListenerMiddleware } from "@reduxjs/toolkit";
import { setDefaultAllStorageSyncData } from "Domain/StorageApi/Actions";
import { StorageApiType } from "Domain/StorageApi/Types";
import { RootState } from "Domain/Store";

const projectsListenerMiddleware = createListenerMiddleware();

projectsListenerMiddleware.startListening({
  predicate: (action) => {
    return action?.type && action.type.startsWith("projects/");
  },
  effect: async (action, listenerApi) => {
    const state = listenerApi.getState() as RootState;
    setDefaultAllStorageSyncData({
      storageApiType: StorageApiType.sync,
      data: {
        projects: state.projects,
      },
    });
  },
});

export default projectsListenerMiddleware;
