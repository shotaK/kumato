import { localChromeApi } from "Domain/Pomodoro/PomodoroStorageApi";
import { syncChromeApi } from "Domain/StorageApi/StorageApiMock";

export const localStorageApi = localChromeApi.storage.local;
export const syncStorageApi = syncChromeApi.storage.sync;
