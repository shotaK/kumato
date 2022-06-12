import { RootState } from "Domain/Store";

export const dashboardSelector = (state: RootState) => state.dashboard;
export const mainTabSelector = (state: RootState) => dashboardSelector(state);
