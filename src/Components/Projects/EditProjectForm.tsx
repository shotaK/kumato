import ProjectUpdateForm from "Components/Projects/ProjectUpdateForm";
import { ReactNode } from "react";
import { useAppDispatch } from "Domain/Hooks";
import { updateProject } from "Domain/Projects/ProjectsSlice";
import { Project } from "Domain/Projects/Types";

const EditProjectForm = ({
  title,
  onProjectEdit,
  project = null,
}: {
  title?: ReactNode;
  onProjectEdit?: () => void;
  project?: Project;
}) => {
  const dispatch = useAppDispatch();

  if (!project) {
    return null;
  }
  const handleEditProject = ({ projectName }) => {
    dispatch(
      updateProject({ projectId: project.id, project: { title: projectName } })
    );

    onProjectEdit();
  };

  return <ProjectUpdateForm onSubmit={handleEditProject} title={title} initialProjectName={project.title} isEditing />;
};

export default EditProjectForm;
