import { localChromeApi } from "Domain/Pomodoro/PomodoroStorageApi";
import { syncChromeApi } from "Domain/Todo/TodoStorageApi";

export const localStorageApi = localChromeApi.storage.local;
export const syncStorageApi = syncChromeApi.storage.sync;
