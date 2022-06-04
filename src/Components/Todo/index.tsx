import AddTodoItem from "Components/Todo/AddTodoItem";
import TodoList from "Components/Todo/TodoList";

const Todo = () => {
  return (
    <div>
      <div className="mb-6">
        <TodoList />
      </div>
      <div className="px-6">
        <AddTodoItem />
      </div>
    </div>
  );
};

export default Todo;
