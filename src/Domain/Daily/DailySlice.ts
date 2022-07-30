import { DailyReportItem } from "Domain/Daily/Types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DailyState {
  reportItemsList: Array<DailyReportItem>;
}

export const dailyInitialState: DailyState = {
  reportItemsList: [],
};

export const dailySlice = createSlice({
  name: "daily",
  initialState: dailyInitialState,
  reducers: {
    addReportItem: (state, action: PayloadAction<DailyReportItem>) => {
      state.reportItemsList.push(action.payload);
    },
  },
});

export const { addReportItem } = dailySlice.actions;

export default dailySlice.reducer;
