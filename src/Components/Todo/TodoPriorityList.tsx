import { todoPriorityList } from "Domain/Todo/MetaData";
import TodoPriorityBox from "Components/Todo/TodoPriorityBox";
import { useAppDispatch } from "Domain/Hooks";
import { updateTodo } from "Domain/Todo/TodoSlice";
import { Todo, TodoPriority } from "Domain/Todo/Types";

const TodoPriorityList = ({ todo }: { todo: Todo }) => {
  const dispatch = useAppDispatch();

  const updateTodoPriority = (todoPriority: TodoPriority) => {
    dispatch(
      updateTodo({ todoId: todo.id, todo: { priorityId: todoPriority.id } })
    );
  };

  return (
    <div className="flex">
      {todoPriorityList.map((priority) => (
        <div id={priority.id} className="flex mx-0.5 border border-white">
          <TodoPriorityBox priority={priority} onClick={updateTodoPriority} />
        </div>
      ))}
    </div>
  );
};

export default TodoPriorityList;
