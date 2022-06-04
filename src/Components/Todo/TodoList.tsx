import { useAppSelector } from "Domain/Hooks";
import { todoListSelector } from "Domain/Todo/TodoSelectors";
import TodoItem from "Components/Todo/TodoItem";

const TodoList = () => {
  const todoList = useAppSelector(todoListSelector);
  return (
    <ul>
      {todoList.map((todo, index) => (
        <TodoItem key={todo.id} todo={todo} index={index} />
      ))}
    </ul>
  );
};

export default TodoList;
