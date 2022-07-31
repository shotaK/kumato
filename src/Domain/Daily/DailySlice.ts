import { DailyReportItem, ReportsViewMode } from "Domain/Daily/Types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DailyState {
  reportItemsList: Array<DailyReportItem>;
  reportsViewMode: ReportsViewMode;
}

export const dailyInitialState: DailyState = {
  reportItemsList: [],
    reportsViewMode: ReportsViewMode.edit,
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
  },
});

export const { addReportItem, changeReportsViewMode, deleteReportItem } = dailySlice.actions;

export default dailySlice.reducer;
