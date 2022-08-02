import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, ThunkAppDispatch } from "Domain/Store";
import isEmpty from "lodash.isempty";
import {
  getAllStorageSyncData,
  setDefaultAllStorageSyncData,
} from "Domain/StorageApi/Actions";
import { StorageApiType } from "Domain/StorageApi/Types";
import { Project } from "Domain/Projects/Types";
import { deleteAllReportsByProjectId } from "Domain/Daily/DailySlice";
import { deleteAllTodosByProjectId } from "Domain/Todo/TodoSlice";
import {
  projectsListSelector,
  selectedProjectIdSelector,
} from "Domain/Projects/ProjectsSelectors";

export interface ProjectsState {
  projectsList: Array<Project>;
  selectedProjectId: string;
}

export const projectsInitialState: ProjectsState = {
  projectsList: [],
  selectedProjectId: null,
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState: projectsInitialState,
  reducers: {
    addProject: (state, action: PayloadAction<Project>) => {
      state.projectsList.push(action.payload);
    },

    selectProject: (state, action: PayloadAction<string>) => {
      state.selectedProjectId = action.payload;
    },

    updateProject: (
      state,
      action: PayloadAction<{
        projectId: string;
        project: Omit<Partial<Project>, "id">;
      }>
    ) => {
      const { projectId, project } = action.payload;

      state.projectsList = state.projectsList.map((projectExisted) =>
        projectExisted.id === projectId
          ? { ...projectExisted, ...project }
          : projectExisted
      );
    },

    deleteProject: (state, action: PayloadAction<{ projectId: string }>) => {
      state.projectsList = state.projectsList.filter(
        ({ id }) => id !== action.payload.projectId
      );
    },

    provideDefaultProjectStorageData: (state, action) => {
      const data = action.payload;

      return { ...state, ...data };
    },
  },
});

export const {
  addProject,
  updateProject,
  deleteProject,
  selectProject,
  provideDefaultProjectStorageData,
} = projectsSlice.actions;

export const deleteProjectWithItsItems =
  ({ projectId }: { projectId: string }) =>
  (dispatch: ThunkAppDispatch, getState: () => RootState) => {
    const projects = projectsListSelector(getState());
    const selectedProject = selectedProjectIdSelector(getState());

    console.log("---------");
    console.log(selectedProject);
    console.log(projectId);

    if (projects.length > 1 && selectedProject === projectId) {
      const nextSelectedProjectId = projects.find(
        (project) => project.id !== projectId
      )?.id;

      dispatch(selectProject(nextSelectedProjectId));
    }
    dispatch(deleteProject({ projectId }));
    dispatch(deleteAllReportsByProjectId({ projectId }));
    dispatch(deleteAllTodosByProjectId({ projectId }));
  };

export const initializeProjectData =
  () => async (dispatch: ThunkAppDispatch) => {
    const allStorageData: { project?: ProjectsState } =
      await getAllStorageSyncData(StorageApiType.sync);
    const project = allStorageData?.project;

    if (isEmpty(project)) {
      await setDefaultAllStorageSyncData({
        storageApiType: StorageApiType.sync,
        data: { project: projectsInitialState },
      });
    } else {
      dispatch(provideDefaultProjectStorageData(project));
    }
  };

export default projectsSlice.reducer;
