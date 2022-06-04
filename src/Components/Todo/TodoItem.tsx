import { Todo } from "Domain/Todo/Types";
import classNames from "classnames";
import { useAppDispatch } from "Domain/Hooks";
import { moveTodoItem, toggleTodoStatus } from "Domain/Todo/TodoSlice";
import { useRef, useState } from "react";
import TodoEdit from "Components/Todo/TodoEdit";
import TodoPrimary from "Components/Todo/TodoPrimary";

import "./TodoItem.module.scss";
import { useDrag, useDrop } from "react-dnd";
import { Identifier, XYCoord } from "dnd-core";
import DraggableIcon from "Components/Shared/Dnd/DraggableIcon.";

export const ItemTypes = {
  TODO: "todo",
};

interface DragItem {
  index: number;
  id: string;
  type: string;
}

const TodoItem = ({ todo, index }: { todo: Todo; index: number }) => {
  const { id, isComplete } = todo;
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLLIElement>(null);

  const toggleTodo = () => dispatch(toggleTodoStatus(todo.id));

  const moveTodo = (dragIndex: number, hoverIndex: number) => {
    dispatch(
      moveTodoItem({
        dragIndex,
        hoverIndex,
        todoId: todo.id,
      })
    );
  };

  const [{ handlerId }, drop] = useDrop<
    DragItem,
    void,
    { handlerId: Identifier | null }
  >({
    accept: ItemTypes.TODO,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: DragItem, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();

      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      // Time to actually perform the action
      moveTodo(dragIndex, hoverIndex);

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.TODO,
    item: () => {
      return { id, index };
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <li
      ref={ref}
      style={{ opacity }}
      data-handler-id={handlerId}
      className="flex items-center min-h-[36px] py-1 px-2 hover:bg-[#4a4a4a] todo-item border-b border-b-neutral-500 first:border-t-neutral-500 first:border-t"
    >
      <div className="mr-2 todo-item-draggable-source invisible cursor-move">
        <DraggableIcon />
      </div>

      <input
        id="remember-me"
        name="remember-me"
        type="checkbox"
        className={classNames(
          "h-4 w-4 text-green-600 rounded focus:ring-offset-0 ring-0 focus:ring-0 focus:ring-offset-0 mr-1.5"
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
