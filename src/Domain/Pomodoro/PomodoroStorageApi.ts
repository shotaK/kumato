import get from "lodash.get";

export const localChromeApi = get(global, "chrome.storage")
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
          removeListener: () => {},
        },
      },
    };

export const setStorageSyncData = (data: Record<string, any>) => {
  return new Promise((resolve, reject) => {
    localChromeApi.storage.local.set(data, () => {
      resolve(data);
    });
  });
};
