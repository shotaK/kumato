import { RootState } from "Domain/Store";

export const todoSelector = (state: RootState) => state.todo;

export const todoListSelector = (state: RootState) =>
  todoSelector(state).todoList;
