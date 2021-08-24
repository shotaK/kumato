import { starterData } from "Domain/Dashboard/DashboardSlice";
import get from "lodash.get";

const chromeApi = get(global, "chrome.storage")
  ? get(global, "chrome")
  : {
      runtime: { lastError: null },
      storage: {
        sync: {
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
            });
          },
          set: () => {},
        },
      },
    };

export const getAllStorageSyncData = () => {
  return new Promise((resolve, reject) => {
    chromeApi.storage.sync.get(null, (items: any) => {
      if (chromeApi.runtime.lastError) {
        return reject(chromeApi.runtime.lastError);
      }
      resolve(items);
    });
  });
};

export const setDefaultAllStorageSyncData = () => {
  return new Promise((resolve, reject) => {
    chromeApi.storage.sync.set(starterData, () => {
      resolve(starterData);
    });
  });
};

export const setStorageSyncData = (data: Record<string, any>) => {
  return new Promise((resolve, reject) => {
    chromeApi.storage.sync.set(data, () => {
      resolve(data);
    });
  });
};

export const getStorageSyncData = (key: string) => {
  return new Promise((resolve, reject) => {
    chromeApi.storage.sync.get([key], (result: any) => {
      resolve(result.key);
    });
  });
};
