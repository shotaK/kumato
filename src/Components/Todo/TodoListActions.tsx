import { SortAscendingIcon } from "@heroicons/react/outline";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap_white.css";

const TodoListActions = () => {
  return (
    <>
      <Tooltip placement="left" overlay={<span>tooltip</span>}>
        <button data-tip="Sort by priority">
          <SortAscendingIcon className="w-5 h-5 text-white" />
        </button>
      </Tooltip>
    </>
  );
};

export default TodoListActions;
