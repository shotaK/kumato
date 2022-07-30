import { RootState } from "Domain/Store";
import isEmpty from "lodash.isempty";
import { selectedProjectIdSelector } from "Domain/Projects/ProjectsSelectors";
import { todosByProjectId } from "Domain/Todo/Utils";

export const todoSelector = (state: RootState) => state.todo;

export const todoListSelector = (state: RootState) =>
  todoSelector(state).todoList;

export const todoListBySelectedProjectSelector = (state: RootState) => {
  const selectedProjectId = selectedProjectIdSelector(state);

  return todosByProjectId(todoListSelector(state), selectedProjectId);
};

export const isTodoListEmptySelector = (state: RootState) =>
  isEmpty(todoListBySelectedProjectSelector(state));
