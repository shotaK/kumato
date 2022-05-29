import { CheckIcon, XIcon } from "@heroicons/react/outline";
import { Todo } from "Domain/Todo/Types";
import InputButtonGroup from "Components/Shared/Input/InputButtonGroup";
import { useAppDispatch } from "Domain/Hooks";
import Input from "Components/Shared/Input";
import { useState } from "react";

const TodoEdit = ({
  todo,
  setIsEditing,
}: {
  todo: Todo;
  setIsEditing: (isEditing: boolean) => void;
}) => {
  const dispatch = useAppDispatch();
  const { id, title, isComplete } = todo;
  const [todoTitle, setTodoTitle] = useState(title);

  const onChange = (e: { target: HTMLInputElement }) => {
    const { value } = e.target;

    setTodoTitle(value);
  };

  const updateTodoTitle = () => {};

  return (
    <form className="justify-center">
      <Input
        type="text"
        className="flex-grow min-w-0 rounded-r-none text-sm"
        placeholder="Update the task..."
        onChange={onChange}
        value={todoTitle}
      />
      <button type="button" onClick={() => setIsEditing(true)}>
        <CheckIcon className="h-5 w-5 text-green-500 ml-1.5" />
      </button>
      <button type="button" onClick={() => setIsEditing(true)}>
        <XIcon className="h-5 w-5 text-red-500 ml-1.5" />
      </button>
    </form>
  );
};

export default TodoEdit;
