import classNames from "classnames";
import { TodoPriority } from "Domain/Todo/Types";

const TodoPriorityBox = ({ priority }: { priority: TodoPriority }) => {
  const { color, label } = priority;
  return (
    <button
      className={classNames(
        "leading-none flex justify-center items-center text-white text-sm",
        `bg-${color}-500 w-5 h-5`
      )}
    >
      {label}
    </button>
  );
};

export default TodoPriorityBox;
