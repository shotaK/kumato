import { createListenerMiddleware } from "@reduxjs/toolkit";
import { setDefaultAllStorageSyncData } from "Domain/StorageApi/Actions";
import { StorageApiType } from "Domain/StorageApi/Types";
import { RootState } from "Domain/Store";

const todoListenerMiddleware = createListenerMiddleware();

todoListenerMiddleware.startListening({
  predicate: (action) => {
    return action?.type && action.type.startsWith("todo/");
  },
  effect: async (action, listenerApi) => {
    const state = listenerApi.getState() as RootState;
    setDefaultAllStorageSyncData({
      storageApiType: StorageApiType.sync,
      data: {
        todo: state.todo,
      },
    });
  },
});

export default todoListenerMiddleware;
