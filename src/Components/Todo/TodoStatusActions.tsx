import { PlayIcon, PauseIcon } from "@heroicons/react/outline";
import { Todo, TodoStatus } from "Domain/Todo/Types";
import { useAppDispatch } from "Domain/Hooks";
import { updateTodo } from "Domain/Todo/TodoSlice";
import classNames from "classnames";

const TodoStatusActions = ({ todo }: { todo: Todo }) => {
  const dispatch = useAppDispatch();
  const isStarted = todo.status === TodoStatus.started;

  const toggleTodoStatus = () => {
    dispatch(
      updateTodo({
        todoId: todo.id,
        todo: { status: isStarted ? TodoStatus.paused : TodoStatus.started },
      })
    );
  };

  const Icon = isStarted ? PauseIcon : PlayIcon;

  return (
    <button onClick={toggleTodoStatus} className="relative">
      {isStarted && (
        <span className="h-5 w-5 right-0 animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
      )}
      <Icon
        className={classNames("h-5 w-5", {
          "text-sky-500": isStarted,
          "text-coolGray-100": !isStarted,
        })}
      />
    </button>
  );
};

export default TodoStatusActions;
