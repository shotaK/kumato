import get from "lodash.get";
import { todoInitialState } from "Domain/Todo/TodoSlice";
import { initialState, MainTab } from "Domain/Dashboard/DashboardSlice";

export const syncChromeApi = get(global, "chrome.storage")
  ? get(global, "chrome")
  : {
      runtime: { lastError: null },
      storage: {
        sync: {
          get: (key: string, callback: (values: any) => any) => {
            callback({
              dashboard: {
                mainTab: MainTab.todo,
              },
            });
          },
          set: () => {},
        },
      },
    };