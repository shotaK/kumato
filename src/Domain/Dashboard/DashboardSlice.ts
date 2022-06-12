import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const MainTab = {
  pomodoro: "pomodoro",
  todo: "todo",
} as const;

export type MainTab = typeof MainTab[keyof typeof MainTab];

export interface DashboardState {
  mainTab: MainTab;
}

const initialState: DashboardState = {
  mainTab: MainTab.pomodoro,
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    updateMainTab: (state, action: PayloadAction<MainTab>) => {
      state.mainTab = action.payload;
    },
  },
});

export const { updateMainTab } = dashboardSlice.actions;

export default dashboardSlice.reducer;
