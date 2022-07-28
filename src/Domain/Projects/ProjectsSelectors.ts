import { RootState } from "Domain/Store";

export const projectsSelector = (state: RootState) => state.projects;

export const projectsListSelector = (state: RootState) =>
  projectsSelector(state).projectsList;
