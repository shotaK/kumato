import { DailyReportItem, ReportsViewMode } from "Domain/Daily/Types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ThunkAppDispatch } from "Domain/Store";
import {
  getAllStorageSyncData,
  setDefaultAllStorageSyncData,
} from "Domain/StorageApi/Actions";
import { StorageApiType } from "Domain/StorageApi/Types";
import isEmpty from "lodash.isempty";

export interface DailyState {
  reportItemsList: Array<DailyReportItem>;
  reportsViewMode: ReportsViewMode;
  todoSyncActive: boolean;
}

export const dailyInitialState: DailyState = {
  reportItemsList: [],
  reportsViewMode: ReportsViewMode.edit,
  todoSyncActive: true,
};

export const dailySlice = createSlice({
  name: "daily",
  initialState: dailyInitialState,
  reducers: {
    addReportItem: (state, action: PayloadAction<DailyReportItem>) => {
      state.reportItemsList.push(action.payload);
    },

    changeReportsViewMode: (state, action: PayloadAction<ReportsViewMode>) => {
      state.reportsViewMode = action.payload;
    },

    deleteReportItem: (state, action: PayloadAction<{ id: string }>) => {
      state.reportItemsList = state.reportItemsList.filter(
        (item) => item.id !== action.payload.id
      );
    },

    updateTodoSyncActive: (state, action: PayloadAction<boolean>) => {
      state.todoSyncActive = action.payload;
    },

    provideDefaultDailyStorageData: (state, action) => {
      const data = action.payload;

      return { ...state, ...data };
    },

    deleteAllReportsByProjectId: (
      state,
      action: PayloadAction<{ projectId: string }>
    ) => {
      state.reportItemsList = state.reportItemsList.filter(
        (item) => item.projectId !== action.payload.projectId
      );
    },
  },
});

export const {
  addReportItem,
  changeReportsViewMode,
  deleteReportItem,
  updateTodoSyncActive,
  provideDefaultDailyStorageData,
  deleteAllReportsByProjectId,
} = dailySlice.actions;

export const initializeDailyData = () => async (dispatch: ThunkAppDispatch) => {
  const allStorageData: { daily?: DailyState } = await getAllStorageSyncData(
    StorageApiType.sync
  );
  const daily = allStorageData?.daily;

  if (isEmpty(daily?.reportItemsList)) {
    await setDefaultAllStorageSyncData({
      storageApiType: StorageApiType.sync,
      data: { daily: dailyInitialState },
    });
  } else {
    dispatch(provideDefaultDailyStorageData(daily));
  }
};

export default dailySlice.reducer;
