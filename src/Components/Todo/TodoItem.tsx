import { Todo } from "Domain/Todo/Types";
import classNames from "classnames";
import { useAppDispatch } from "Domain/Hooks";
import { toggleTodoStatus } from "Domain/Todo/TodoSlice";
import { useState } from "react";
import TodoEdit from "Components/Todo/TodoEdit";
import TodoPrimary from "Components/Todo/TodoPrimary";

const TodoItem = ({ todo }: { todo: Todo }) => {
  const { id, title, isComplete } = todo;
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useAppDispatch();

  const toggleTodo = () => dispatch(toggleTodoStatus(todo.id));

  return (
    <li className="flex items-center mb-2">
      <input
        id="remember-me"
        name="remember-me"
        type="checkbox"
        className={classNames(
          "h-4 w-4 text-green-600 rounded focus:ring-offset-0 ring-0 focus:ring-0 focus:ring-offset-0"
        )}
        onChange={toggleTodo}
        checked={isComplete}
      />

      {isEditing ? (
        <TodoEdit todo={todo} setIsEditing={setIsEditing} />
      ) : (
        <TodoPrimary todo={todo} setIsEditing={setIsEditing} />
      )}
    </li>
  );
};

export default TodoItem;
