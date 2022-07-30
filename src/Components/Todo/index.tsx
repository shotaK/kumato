import AddTodoItem from "Components/Todo/AddTodoItem";
import TodoList from "Components/Todo/TodoList";
import Container from "Components/Shared/Layout/Container";
import TodoListActions from "Components/Todo/TodoListActions";
import { useAppSelector } from "Domain/Hooks";
import {
  isTodoListEmptySelector,
  todoSelector,
} from "Domain/Todo/TodoSelectors";
import EmptyTodoListPlaceholder from "Components/Todo/EmptyTodoListPlaceholder";
import Projects from "Components/Projects";
import ProjectUpdateForm from "Components/Projects/ProjectUpdateForm";
import { projectsEmptySelector } from "Domain/Projects/ProjectsSelectors";
import ContentDelayedSpinner from "Components/Shared/ContentLoader/ContentDelayedSpinner";

const Todo = () => {
  const isTodoListEmpty = useAppSelector(isTodoListEmptySelector);
  const projectsEmpty = useAppSelector(projectsEmptySelector);
  const { defaultTodoDataFetched } = useAppSelector(todoSelector);

  if (defaultTodoDataFetched) {
    return <ContentDelayedSpinner />;
  }

  return (
    <div>
      {projectsEmpty ? (
        <Container adjustSpacing>
          <ProjectUpdateForm title="Create your first project:" />
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
