import { useAppDispatch } from "Domain/Hooks";
import { deleteProjectWithItsItems } from "Domain/Projects/ProjectsSlice";
import { Project } from "Domain/Projects/Types";

const RemoveProjectForm = ({
  project,
  closeDeleteProjectModal,
}: {
  project: Project;
  closeDeleteProjectModal: () => void;
}) => {
  const dispatch = useAppDispatch();

  const handleDeleteProject = () => {
    dispatch(deleteProjectWithItsItems({ projectId: project.id }));
    closeDeleteProjectModal();
  };

  return (
    <div>
      <h4 className="text-gray-500 mb-5 text-sm">
        (Removing the project will remove all of its todos and daily reports
        too)
      </h4>
      <button
        type="submit"
        className="text-white w-full justify-center bg-red-700 hover:bg-red-800 flex px-5 py-2 text-white rounded-sm transition-colors duration-300 items-center mb-2"
        onClick={handleDeleteProject}
      >
        <span className="text-sm font-medium">Yes. Delete this project</span>
      </button>
      <button
        type="submit"
        className="text-white w-full justify-center bg-gray-600 hover:bg-gray-700 flex px-5 py-2 text-white rounded-sm transition-colors duration-300 items-center"
        onClick={() => closeDeleteProjectModal()}
      >
        <span className="text-sm font-medium">Cancel</span>
      </button>
    </div>
  );
};

export default RemoveProjectForm;
