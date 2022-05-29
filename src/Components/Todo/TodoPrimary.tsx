import classNames from "classnames";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/outline";
import { Todo } from "Domain/Todo/Types";

const TodoPrimary = ({
  todo,
  setIsEditing,
}: {
  todo: Todo;
  setIsEditing: (isEditing: boolean) => void;
}) => {
  const { id, title, isComplete } = todo;

  return (
    <>
      <span
        className={classNames("text-gray-200 ml-1.5 text-sm", {
          "line-through text-gray-400": isComplete,
        })}
      >
        {title}
      </span>
      <button type="button" onClick={() => setIsEditing(true)}>
        <PencilAltIcon className="h-5 w-5 text-yellow-500 ml-1.5" />
      </button>
      <button type="button">
        <TrashIcon className="h-5 w-5 text-red-800 ml-1.5" />
      </button>
    </>
  );
};

export default TodoPrimary;
