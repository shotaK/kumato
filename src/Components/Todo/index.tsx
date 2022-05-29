import AddTodoItem from "Components/Todo/AddTodoItem";
import TodoList from "Components/Todo/TodoList";

const Todo = () => {
  return (
    <div>
      <div className="mb-6">
        <TodoList />
      </div>
      <AddTodoItem />
    </div>
  );
};

export default Todo;
