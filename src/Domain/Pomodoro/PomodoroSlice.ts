import { createSlice } from "@reduxjs/toolkit";
import isEmpty from "lodash.isempty";

import { WebsiteBlockable } from "Domain/Pomodoro/Types";
import { RootState, ThunkAppDispatch } from "Domain/Store";
import { setStorageSyncData } from "Domain/Pomodoro/PomodoroStorageApi";
import { getWebsiteIndex } from "Domain/Pomodoro/Utils";
import {
  getAllStorageSyncData,
  setDefaultAllStorageSyncData,
} from "Domain/StorageApi/Actions";

export interface PomodoroState {
  remainingSeconds: number;
  currentRunDuration: number;

  cyclesCompleted: number;
  cycleDuration: number;
  cycleStarted: boolean;
  cycleRunning: boolean;

  breakCompleted: number;
  breakDuration: number;
  breakStarted: boolean;

  blockableWebsites: WebsiteBlockable[];

  defaultStorageDataFetched?: boolean;
}

export const starterData: PomodoroState = {
  remainingSeconds: 0,
  currentRunDuration: 0,

  cyclesCompleted: 0,
  cycleDuration: 45,
  cycleStarted: false,
  cycleRunning: false,

  breakCompleted: 0,
  breakDuration: 15,
  breakStarted: false,

  blockableWebsites: [],
};

const initialState: PomodoroState = {
  ...starterData,
  defaultStorageDataFetched: false,
};

export const pomodoroSlice = createSlice({
  name: "pomodoro",
  initialState,
  reducers: {
    incrementCompletedCycles: (state) => {
      state.cyclesCompleted++;
    },
    decrementCompletedCycles: (state) => {
      if (state.cyclesCompleted > 0) {
        state.cyclesCompleted--;
      }
    },
    incrementCompletedBreaks: (state) => {
      state.breakCompleted++;
    },
    decrementCompletedBreaks: (state) => {
      if (state.breakCompleted > 0) {
        state.breakCompleted--;
      }
    },
    resetStats: (state) => {
      state.cyclesCompleted = 0;
      state.breakCompleted = 0;
    },

    changeCycleDuration: (state, action) => {
      state.cycleDuration = action.payload;
    },
    changeBreakDuration: (state, action) => {
      state.breakDuration = action.payload;
    },

    elapseSecond: (state) => {
      if (state.remainingSeconds > 0) {
        state.remainingSeconds--;
      }
    },

    startCycle: (state) => {
      state.cycleStarted = true;
      state.cycleRunning = true;
      state.currentRunDuration = state.cycleDuration;
    },

    changeRemainingSeconds: (state, action) => {
      state.remainingSeconds = action.payload;

      if (state.remainingSeconds === 0) {
        if (state.cycleStarted) {
          state.cycleStarted = false;
          state.cycleRunning = false;
          state.cyclesCompleted++;
        }

        if (state.breakStarted) {
          state.breakStarted = false;
          state.breakCompleted++;
        }
      }
    },

    completeCycle: (state) => {
      state.cycleStarted = false;
      state.cycleRunning = false;
      state.cyclesCompleted++;
    },

    discardCycle: (state) => {
      state.cycleStarted = false;
      state.cycleRunning = false;
    },

    pauseCycle: (state) => {
      state.cycleRunning = false;
    },

    resumeCycle: (state) => {
      state.cycleRunning = true;
    },

    startBreak: (state) => {
      state.breakStarted = true;
      state.currentRunDuration = state.breakDuration;
    },

    completeBreak: (state) => {
      state.breakStarted = false;
      state.breakCompleted++;
    },

    discardBreak: (state) => {
      state.breakStarted = false;
    },

    addWebsiteToBlock: (state, action) => {
      state.blockableWebsites.push(action.payload);
    },

    blockWebsite: (state, action) => {
      const websiteIndex = getWebsiteIndex(
        state.blockableWebsites,
        action.payload
      );

      state.blockableWebsites[websiteIndex].isBlocked = true;
    },

    unblockWebsite: (state, action) => {
      const websiteIndex = getWebsiteIndex(
        state.blockableWebsites,
        action.payload
      );

      state.blockableWebsites[websiteIndex].isBlocked = false;
    },

    deleteWebsite: (state, action) => {
      const websiteIndex = getWebsiteIndex(
        state.blockableWebsites,
        action.payload
      );

      state.blockableWebsites.splice(websiteIndex, 1);
    },

    updateDefaultStorageDataFetched: (state, action) => {
      state.defaultStorageDataFetched = action.payload;
    },

    provideDefaultStorageData: (state, action) => {
      const data = action.payload;

      return { ...state, ...data };
    },
  },
});

export const {
  incrementCompletedCycles,
  decrementCompletedCycles,
  incrementCompletedBreaks,
  decrementCompletedBreaks,
  resetStats,
  changeCycleDuration,
  changeBreakDuration,
  startCycle,
  completeCycle,
  discardCycle,
  pauseCycle,
  resumeCycle,
  startBreak,
  completeBreak,
  discardBreak,
  addWebsiteToBlock,
  blockWebsite,
  unblockWebsite,
  deleteWebsite,
  updateDefaultStorageDataFetched,
  provideDefaultStorageData,
  changeRemainingSeconds,
} = pomodoroSlice.actions;

export const initializePomodoroData =
  () => async (dispatch: ThunkAppDispatch, getState: any) => {
    const allStorageData = await getAllStorageSyncData();

    if (isEmpty(allStorageData)) {
      await setDefaultAllStorageSyncData({ data: starterData });
    } else {
      dispatch(provideDefaultStorageData(allStorageData));
    }

    dispatch(updateDefaultStorageDataFetched(true));
  };

export const cycleStarter =
  () => async (dispatch: ThunkAppDispatch, getState: any) => {
    await setStorageSyncData({
      remainingSeconds: getState().pomodoro.cycleDuration * 60,
    });
    dispatch(startCycle());
  };

export const breakStarter =
  () => async (dispatch: ThunkAppDispatch, getState: () => RootState) => {
    await setStorageSyncData({
      remainingSeconds: getState().pomodoro.breakDuration * 60,
    });
    dispatch(startBreak());
  };

export default pomodoroSlice.reducer;
