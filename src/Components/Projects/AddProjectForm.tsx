import { useAppDispatch } from "Domain/Hooks";
import { nanoid } from "@reduxjs/toolkit";
import { addProject, selectProject } from "Domain/Projects/ProjectsSlice";
import ProjectUpdateForm from "Components/Projects/ProjectUpdateForm";
import { ReactNode } from "react";

const AddProjectForm = ({
  title,
  onProjectAdd,
}: {
  title?: ReactNode;
  onProjectAdd?: () => void;
}) => {
  const dispatch = useAppDispatch();

  const addNewProject = ({ projectName }) => {
    const projectId = nanoid();

    dispatch(
      addProject({
        id: projectId,
        title: projectName,
      })
    );

    dispatch(selectProject(projectId));

    onProjectAdd();
  };

  return <ProjectUpdateForm onSubmit={addNewProject} title={title} />;
};

export default AddProjectForm;
