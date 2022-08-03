import AddTodoItem from "Components/Todo/AddTodoItem";
import TodoList from "Components/Todo/TodoList";
import Container from "Components/Shared/Layout/Container";
import TodoListActions from "Components/Todo/TodoListActions";
import { useAppSelector } from "Domain/Hooks";
import { isTodoListEmptySelector } from "Domain/Todo/TodoSelectors";
import EmptyTodoListPlaceholder from "Components/Todo/EmptyTodoListPlaceholder";
import Projects from "Components/Projects";
import { projectsEmptySelector } from "Domain/Projects/ProjectsSelectors";
import AddProjectForm from "Components/Projects/AddProjectForm";

const Todo = () => {
  const isTodoListEmpty = useAppSelector(isTodoListEmptySelector);
  const projectsEmpty = useAppSelector(projectsEmptySelector);

  return (
    <div>
      {projectsEmpty ? (
        <Container adjustSpacing>
          <AddProjectForm title="Create your first project:" />
        </Container>
      ) : (
        <>
          <Projects />

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
        </>
      )}
    </div>
  );
};

export default Todo;
