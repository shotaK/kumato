import { Todo, TodoPriority } from "Domain/Todo/Types";
import { todoPriorityList } from "Domain/Todo/MetaData";

export const getTodoPriority = (todo: Todo): TodoPriority => {
  return todoPriorityList.find(({ id }) => id === todo?.priorityId);
};
