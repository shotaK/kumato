import AddTodoItem from "Components/Todo/AddTodoItem";
import TodoList from "Components/Todo/TodoList";
import Container from "Components/Shared/Layout/Container";
import TodoListActions from "Components/Todo/TodoListActions";
import { useAppSelector } from "Domain/Hooks";
import { isTodoListEmptySelector } from "Domain/Todo/TodoSelectors";
import EmptyTodoListPlaceholder from "Components/Todo/EmptyTodoListPlaceholder";

const Todo = () => {
  const isTodoListEmpty = useAppSelector(isTodoListEmptySelector);
  return (
    <div>
      {!isTodoListEmpty && (
        <Container className="flex justify-between mb-2">
          <TodoListActions />
        </Container>
      )}
      {isTodoListEmpty && <EmptyTodoListPlaceholder />}
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
