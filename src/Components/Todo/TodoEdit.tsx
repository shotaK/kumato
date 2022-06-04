import { CheckIcon, XIcon } from "@heroicons/react/outline";
import { Todo } from "Domain/Todo/Types";
import { useAppDispatch } from "Domain/Hooks";
import Input from "Components/Shared/Input";
import { useState } from "react";
import { updateTodo } from "Domain/Todo/TodoSlice";

const TodoEdit = ({
  todo,
  setIsEditing,
}: {
  todo: Todo;
  setIsEditing: (isEditing: boolean) => void;
}) => {
  const dispatch = useAppDispatch();
  const { id, title } = todo;
  const [todoTitle, setTodoTitle] = useState(title);

  const onChange = (e: { target: HTMLInputElement }) => {
    const { value } = e.target;

    setTodoTitle(value);
  };

  const updateTodoTitle = () => {
    if (todoTitle) {
      dispatch(updateTodo({ todoId: id, todo: { title: todoTitle } }));
      setIsEditing(false);
    }
  };

  const handleCancelEditing = () => {
    setIsEditing(false);
  };

  return (
    <form className="flex flex-1 justify-center" onSubmit={updateTodoTitle}>
      <Input
        type="text"
        className="flex-grow flex-1 min-w-0 rounded-sm text-sm"
        height="h-6"
        placeholder="Update the task..."
        onChange={onChange}
        value={todoTitle}
      />
      <button type="submit" onClick={() => setIsEditing(true)}>
        <CheckIcon className="h-5 w-5 text-green-500 ml-1.5" />
      </button>
      <button type="button" onClick={handleCancelEditing}>
        <XIcon className="h-5 w-5 text-red-500 ml-1.5" />
      </button>
    </form>
  );
};

export default TodoEdit;
