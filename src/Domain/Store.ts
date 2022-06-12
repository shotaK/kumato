import {
  configureStore,
  ThunkAction,
  Action,
  ThunkDispatch,
} from "@reduxjs/toolkit";

import pomodoroReducer from "Domain/Pomodoro/PomodoroSlice";
import todoReducer from "Domain/Todo/TodoSlice";
import dashboardReducer from "Domain/Dashboard/DashboardSlice";
import todoListenerMiddleware from "Domain/Todo/TodoListenerMiddleware";

export const store = configureStore({
  reducer: {
    pomodoro: pomodoroReducer,
    todo: todoReducer,
    dashboard: dashboardReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(todoListenerMiddleware.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type ThunkAppDispatch = ThunkDispatch<RootState, void, Action>;
