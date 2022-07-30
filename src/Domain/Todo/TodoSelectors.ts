import { RootState } from "Domain/Store";
import isEmpty from "lodash.isempty";
import { selectedProjectIdSelector } from "Domain/Projects/ProjectsSelectors";

export const todoSelector = (state: RootState) => state.todo;

export const todoListSelector = (state: RootState) =>
  todoSelector(state).todoList;

export const todoListBySelectedProjectSelector = (state: RootState) => {
  const selectedProjectId = selectedProjectIdSelector(state);

  return todoListSelector(state).filter(
    (todo) => todo.projectId === selectedProjectId
  );
};

export const isTodoListEmptySelector = (state: RootState) =>
  isEmpty(todoListSelector(state));
