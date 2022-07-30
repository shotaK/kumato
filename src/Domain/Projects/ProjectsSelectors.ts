import { RootState } from "Domain/Store";
import isEmpty from "lodash.isempty";

export const projectsSelector = (state: RootState) => state.projects;

export const projectsListSelector = (state: RootState) =>
  projectsSelector(state).projectsList;

export const projectsEmptySelector = (state: RootState) =>
  isEmpty(projectsListSelector(state));

export const selectedProjectIdSelector = (state: RootState) =>
  projectsSelector(state).selectedProjectId;

export const selectedProjectSelector = (state: RootState) => {
  const selectedProjectId = selectedProjectIdSelector(state);

  return projectsListSelector(state).find(
    (project) => project.id === selectedProjectId
  );
};
