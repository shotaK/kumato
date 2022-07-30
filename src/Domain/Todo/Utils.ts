import { Todo, TodoPriority } from "Domain/Todo/Types";
import { todoPriorityList } from "Domain/Todo/MetaData";

export const getTodoPriority = (todo: Todo): TodoPriority => {
  return todoPriorityList.find(({ id }) => id === todo?.priorityId);
};

export const todosByProjectId = (
  todos: Array<Todo>,
  projectId: string
): Array<Todo> => {
  return todos.filter(
    ({ projectId: todoProjectId }) => todoProjectId === projectId
  );
};

export const todosByNotProjectId = (
  todos: Array<Todo>,
  projectId: string
): Array<Todo> => {
  return todos.filter(
    ({ projectId: todoProjectId }) => todoProjectId !== projectId
  );
};
