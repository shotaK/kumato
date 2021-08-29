import get from "lodash.get";

import { starterData } from "Domain/Dashboard/DashboardSlice";

export const chromeApi = get(global, "chrome.storage")
  ? get(global, "chrome")
  : {
      runtime: { lastError: null },
      storage: {
        local: {
          get: (key: string, callback: (values: any) => any) => {
            callback({
              blockableWebsites: [],
              breakCompleted: 3,
              breakDuration: 10,
              breakStarted: false,
              cycleDuration: 25,
              cycleRunning: true,
              cycleStarted: true,
              cyclesCompleted: 10,
              defaultStorageDataFetched: false,
              remainingSeconds: 150,
            });
          },
          set: () => {},
        },
        onChanged: {
          addListener: (callback = (changes: any) => {}) => {
            callback({ remainingSeconds: { newValue: 2699, oldValue: 2700 } });
          },
        },
      },
    };

export const getAllStorageSyncData = () => {
  return new Promise((resolve, reject) => {
    chromeApi.storage.local.get(null, (items: any) => {
      if (chromeApi.runtime.lastError) {
        return reject(chromeApi.runtime.lastError);
      }
      resolve(items);
    });
  });
};

export const setDefaultAllStorageSyncData = () => {
  return new Promise((resolve, reject) => {
    chromeApi.storage.local.set(starterData, () => {
      resolve(starterData);
    });
  });
};

export const setStorageSyncData = (data: Record<string, any>) => {
  return new Promise((resolve, reject) => {
    chromeApi.storage.local.set(data, () => {
      resolve(data);
    });
  });
};

export const getStorageSyncData = (key: string) => {
  return new Promise((resolve, reject) => {
    chromeApi.storage.local.get([key], (result: any) => {
      resolve(result.key);
    });
  });
};
