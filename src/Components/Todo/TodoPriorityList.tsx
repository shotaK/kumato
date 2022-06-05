import { priorityList } from "Domain/Todo/MetaData";
import TodoPriorityBox from "Components/Todo/TodoPriorityBox";

const TodoPriorityList = () => {
  return (
    <div className="flex">
      {priorityList.map((priority) => (
        <div
          id={priority.id}
          className="flex mx-0.5 border border-white hover:border-coolGray-500"
        >
          <TodoPriorityBox priority={priority} />
        </div>
      ))}
    </div>
  );
};

export default TodoPriorityList;
