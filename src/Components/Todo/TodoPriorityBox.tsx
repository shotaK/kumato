import classNames from "classnames";
import { TodoPriority } from "Domain/Todo/Types";

const TodoPriorityBox = ({
  priority,
  onClick,
}: {
  priority: TodoPriority;
  onClick?: (todoPriority: TodoPriority) => void;
}) => {
  const { color, label } = priority;

  return (
    <button
      className={classNames(
        "leading-none flex justify-center items-center text-white text-xs",
        `bg-${color}-500 w-5 h-5 hover:brightness-125`
      )}
      {...(onClick ? { onClick: () => onClick(priority) } : {})}
    >
      {label}
    </button>
  );
};

export default TodoPriorityBox;
