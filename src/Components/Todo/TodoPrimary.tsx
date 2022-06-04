import classNames from "classnames";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/outline";
import { Todo } from "Domain/Todo/Types";
import { useAppDispatch } from "Domain/Hooks";
import { deleteTodo } from "Domain/Todo/TodoSlice";

const TodoPrimary = ({
  todo,
  setIsEditing,
}: {
  todo: Todo;
  setIsEditing: (isEditing: boolean) => void;
}) => {
  const { id, title, isComplete } = todo;
  const dispatch = useAppDispatch();

  const handleDeleteTodo = () => {
    dispatch(deleteTodo({ todoId: id }));
  };

  return (
    <>
      <span
        className={classNames("text-gray-200 text-sm flex-1", {
          "line-through text-gray-400": isComplete,
        })}
      >
        {title}
      </span>
      <button
        type="button"
        onClick={() => setIsEditing(true)}
        className="invisible todo-item-action"
      >
        <PencilAltIcon className="h-5 w-5 text-yellow-500 ml-1.5" />
      </button>
      <button
        type="button"
        onClick={handleDeleteTodo}
        className="invisible todo-item-action"
      >
        <TrashIcon className="h-5 w-5 text-red-800 ml-1.5" />
      </button>
    </>
  );
};

export default TodoPrimary;
