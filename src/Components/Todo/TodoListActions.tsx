import { SortAscendingIcon, FolderRemoveIcon } from "@heroicons/react/outline";
import "rc-tooltip/assets/bootstrap_white.css";
import Tooltip from "Components/Shared/Tooltip";
import { useAppDispatch, useAppSelector } from "Domain/Hooks";
import {
  deleteCompletedTodos,
  sortTodosByPriority,
} from "Domain/Todo/TodoSlice";
import { selectedProjectIdSelector } from "Domain/Projects/ProjectsSelectors";

const TodoListActions = () => {
  const dispatch = useAppDispatch();
  const projectId = useAppSelector(selectedProjectIdSelector);

  const handleSortTodos = () => {
    dispatch(sortTodosByPriority({ projectId }));
  };

  const handleDeleteCompleted = () => {
    dispatch(deleteCompletedTodos({ projectId }));
  };

  return (
    <>
      <div className="mr-4 flex items-center">
        <Tooltip
          placement="right"
          overlay={<span>Delete completed tasks</span>}
        >
          <button data-tip="Sort by priority" onClick={handleDeleteCompleted}>
            <FolderRemoveIcon className="w-5 h-5 text-white" />
          </button>
        </Tooltip>
      </div>
      <Tooltip placement="left" overlay={<span>Sort by Priority</span>}>
        <button data-tip="Sort by priority" onClick={handleSortTodos}>
          <SortAscendingIcon className="w-5 h-5 text-white" />
        </button>
      </Tooltip>
    </>
  );
};

export default TodoListActions;
