import { Todo } from "Domain/Todo/Types";
import { useAppDispatch, useAppSelector } from "Domain/Hooks";
import { moveTodoItem } from "Domain/Todo/TodoSlice";
import { ReactNode, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { Identifier, XYCoord } from "dnd-core";
import { selectedProjectIdSelector } from "Domain/Projects/ProjectsSelectors";

export const ItemTypes = {
  TODO: "todo",
};

interface DragItem {
  index: number;
  id: string;
  type: string;
}

const TodoDraggable = ({
  todo,
  index,
  children,
  isEditing,
}: {
  todo: Todo;
  index: number;
  children: ReactNode;
  isEditing: boolean;
}) => {
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLLIElement>(null);
  const { id } = todo;
  const projectId = useAppSelector(selectedProjectIdSelector);

  const moveTodo = (dragIndex: number, hoverIndex: number) => {
    dispatch(
      moveTodoItem({
        dragIndex,
        hoverIndex,
        todoId: todo.id,
        projectId,
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
    canDrag: !isEditing,
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <li
      ref={ref}
      style={{ opacity }}
      data-handler-id={handlerId}
      className="flex items-stretch min-h-[36px] py-1 px-2 hover:bg-[#4a4a4a] todo-item border-b border-b-neutral-500 first:border-t-neutral-500 first:border-t"
    >
      {children}
    </li>
  );
};

export default TodoDraggable;
