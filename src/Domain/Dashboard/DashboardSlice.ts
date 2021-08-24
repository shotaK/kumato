import { createSlice } from "@reduxjs/toolkit";
import isEmpty from "lodash.isempty";

import { WebsiteBlockable } from "Domain/Dashboard/Types";
import { ThunkAppDispatch } from "Domain/Store";
import {
  getAllStorageSyncData,
  setDefaultAllStorageSyncData,
} from "Services/StorageApi";

export interface DashboardState {
  elapsedSeconds: number;

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

export const starterData: DashboardState = {
  elapsedSeconds: 0,

  cyclesCompleted: 0,
  cycleDuration: 45,
  cycleStarted: false,
  cycleRunning: false,

  breakCompleted: 0,
  breakDuration: 15,
  breakStarted: false,

  blockableWebsites: [],
};

const initialState: DashboardState = {
  ...starterData,
  defaultStorageDataFetched: false,
};

export const dashboardSlice = createSlice({
  name: "dashboard",
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
      if (state.elapsedSeconds > 0) {
        state.elapsedSeconds--;
      }
    },

    startCycle: (state) => {
      state.cycleStarted = true;
      state.cycleRunning = true;
      state.elapsedSeconds = state.cycleDuration * 60;
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
      state.elapsedSeconds = state.breakDuration * 60;
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
      const websiteIndex = state.blockableWebsites.findIndex(
        ({ url }) => url === action.payload
      );

      state.blockableWebsites[websiteIndex].isBlocked = true;
    },

    unblockWebsite: (state, action) => {
      const websiteIndex = state.blockableWebsites.findIndex(
        ({ url }) => url === action.payload
      );

      state.blockableWebsites[websiteIndex].isBlocked = false;
    },

    deleteWebsite: (state, action) => {
      const websiteIndex = state.blockableWebsites.findIndex(
        ({ url }) => url === action.payload
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
  elapseSecond,
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
} = dashboardSlice.actions;

export const initializeData =
  () => async (dispatch: ThunkAppDispatch, getState: any) => {
    const allStorageData = await getAllStorageSyncData();

    console.log(allStorageData);

    if (isEmpty(allStorageData)) {
      await setDefaultAllStorageSyncData();
    } else {
      dispatch(provideDefaultStorageData(allStorageData));
    }

    dispatch(updateDefaultStorageDataFetched(true));
  };

export default dashboardSlice.reducer;
