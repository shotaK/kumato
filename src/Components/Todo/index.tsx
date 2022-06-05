import AddTodoItem from "Components/Todo/AddTodoItem";
import TodoList from "Components/Todo/TodoList";
import Container from "Components/Shared/Layout/Container";

const Todo = () => {
  return (
    <div>
      <div className="mb-6">
        <TodoList />
      </div>
      <Container>
        <AddTodoItem />
      </Container>
    </div>
  );
};

export default Todo;
