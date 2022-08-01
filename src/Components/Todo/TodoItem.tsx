import { Todo } from "Domain/Todo/Types";
import classNames from "classnames";
import { useAppDispatch } from "Domain/Hooks";
import { toggleTodoStatus } from "Domain/Todo/TodoSlice";
import { useState } from "react";
import TodoEdit from "Components/Todo/TodoEdit";
import TodoExtendedMenu from "Components/Todo/TodoExtendedMenu";
import { bool, number, shape, string } from "prop-types";
import { getTodoPriority } from "Domain/Todo/Utils";
import TodoDraggable from "Components/Todo/TodoDraggable";
import Checkbox from "Components/Shared/Input/Checkbox";

const TodoItem = ({ todo, index }: { todo: Todo; index: number }) => {
  const { isComplete } = todo;
  const todoPriority = getTodoPriority(todo);
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useAppDispatch();

  const toggleTodo = () => dispatch(toggleTodoStatus(todo.id));

  return (
    <TodoDraggable todo={todo} index={index} isEditing={isEditing}>
      <div className="mr-2 flex w-2 min-h-full">
        {todoPriority && !isComplete && (
          <div
            className={classNames(
              `bg-${todoPriority.color}-500`,
              "w-2 min-h-full"
            )}
          >
            <span className="invisible">{todoPriority.label}</span>
          </div>
        )}
      </div>

      <div className="flex items-center">
        <Checkbox
          onChange={toggleTodo}
          checked={isComplete}
          name="todo-status"
        />
      </div>

      <div className="flex items-center flex-1">
        {isEditing ? (
          <TodoEdit todo={todo} setIsEditing={setIsEditing} />
        ) : (
          <TodoExtendedMenu todo={todo} setIsEditing={setIsEditing} />
        )}
      </div>
    </TodoDraggable>
  );
};

TodoItem.propTypes = {
  todo: shape({
    id: string,
    title: string,
    isComplete: bool,
  }),
  index: number,
};

export default TodoItem;
