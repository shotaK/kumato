import { RootState } from "Domain/Store";
import isEmpty from "lodash.isempty";

export const todoSelector = (state: RootState) => state.todo;

export const todoListSelector = (state: RootState) =>
  todoSelector(state).todoList;

export const isTodoListEmptySelector = (state: RootState) =>
  isEmpty(todoListSelector(state));
