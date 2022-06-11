import classNames from "classnames";
import {
  DotsHorizontalIcon,
  PencilAltIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import { Menu } from "@headlessui/react";
import { Todo } from "Domain/Todo/Types";
import { useAppDispatch } from "Domain/Hooks";
import { deleteTodo } from "Domain/Todo/TodoSlice";
import TodoPriorityList from "Components/Todo/TodoPriorityList";
import TodoStatusActions from "Components/Todo/TodoStatusActions";

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

      {!todo.isComplete && <TodoStatusActions todo={todo} />}

      <Menu as="div" className="relative">
        <div>
          <Menu.Button className="flex ml-1">
            <DotsHorizontalIcon className="h-5 w-5 text-coolGray-100" />
          </Menu.Button>
        </div>

        <Menu.Items className="absolute right-0 w-50 px-1.5 py-1.5 z-10 origin-top-right divide-y divide-gray-100 rounded-sm bg-coolGray-100 shadow-lg focus:outline-none">
          <div>
            <Menu.Item>
              {({ active }) => (
                <div className="flex">
                  <div className="flex border-r border-coolGray-300 pr-2 mr-2 items-center">
                    <span className="text-sm">Priority:</span>
                    <TodoPriorityList todo={todo} />
                  </div>
                  <button type="button" onClick={() => setIsEditing(true)}>
                    <PencilAltIcon className="h-5 w-5 text-yellow-600" />
                  </button>
                  <button type="button" onClick={handleDeleteTodo}>
                    <TrashIcon className="h-5 w-5 text-red-600 ml-1" />
                  </button>
                </div>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Menu>
    </>
  );
};

export default TodoPrimary;
