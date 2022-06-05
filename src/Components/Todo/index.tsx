import AddTodoItem from "Components/Todo/AddTodoItem";
import TodoList from "Components/Todo/TodoList";
import Container from "Components/Shared/Layout/Container";
import TodoListActions from "Components/Todo/TodoListActions";

const Todo = () => {
  return (
    <div>
      <Container className="flex justify-end mb-2">
        <TodoListActions />
      </Container>
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
