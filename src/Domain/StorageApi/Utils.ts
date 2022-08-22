import { StorageApiType } from "Domain/StorageApi/Types";
import { localStorageApi, syncStorageApi } from "Domain/StorageApi/Metadata";
import { syncChromeApi } from "Domain/StorageApi/StorageApiMock";
import { localChromeApi } from "Domain/Pomodoro/PomodoroStorageApi";

export const getChromeApiByType = (
  storageApiType: StorageApiType = localStorageApi
) => {
  switch (storageApiType) {
    case "sync":
      return syncChromeApi;
    default:
      return localChromeApi;
  }
};

export const getApiByType = (
  storageApiType: StorageApiType = localStorageApi
) => {
  switch (storageApiType) {
    case "sync":
      return syncStorageApi;
    default:
      return localStorageApi;
  }
};
