import get from "lodash.get";
import { todoInitialState } from "Domain/Todo/TodoSlice";

export const syncChromeApi = get(global, "chrome.storage")
  ? get(global, "chrome")
  : {
      runtime: { lastError: null },
      storage: {
        sync: {
          get: (key: string, callback: (values: any) => any) => {
            callback(todoInitialState);
          },
          set: (data) => {
            console.log(data);
          },
        },
        onChanged: {
          addListener: (callback = (changes: any) => {}) => {
            callback({ remainingSeconds: { newValue: 2699, oldValue: 2700 } });
          },
          removeListener: () => {},
        },
      },
    };
