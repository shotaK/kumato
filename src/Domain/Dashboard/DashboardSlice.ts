import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ThunkAppDispatch } from "Domain/Store";
import {
  getAllStorageSyncData,
  setDefaultAllStorageSyncData,
} from "Domain/StorageApi/Actions";
import { StorageApiType } from "Domain/StorageApi/Types";
import isEmpty from "lodash.isempty";

export const MainTab = {
  pomodoro: "pomodoro",
  todo: "todo",
} as const;

export type MainTab = typeof MainTab[keyof typeof MainTab];

export interface DashboardState {
  mainTab: MainTab;
}

export const initialState: DashboardState = {
  mainTab: MainTab.pomodoro,
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    updateMainTab: (state, action: PayloadAction<MainTab>) => {
      state.mainTab = action.payload;
    },
    provideDefaultStorageData: (state, action) => {
      const data = action.payload;

      return { ...state, ...data };
    },
  },
});

export const { updateMainTab, provideDefaultStorageData } =
  dashboardSlice.actions;

export const initializeDashboardData =
  () => async (dispatch: ThunkAppDispatch, getState: any) => {
    const allStorageData: { dashboard?: DashboardState } =
      await getAllStorageSyncData(StorageApiType.sync);

    const dashboard = allStorageData?.dashboard;

    if (isEmpty(dashboard)) {
      await setDefaultAllStorageSyncData({
        storageApiType: StorageApiType.sync,
        data: { dashboard: initialState },
      });
    } else {
      dispatch(provideDefaultStorageData(dashboard));
    }
  };

export default dashboardSlice.reducer;
