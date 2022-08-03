import { ReactNode } from "react";
import Modal from "Components/Shared/Modal";
import EditProjectForm from "Components/Projects/EditProjectForm";
import AddProjectForm from "Components/Projects/AddProjectForm";
import { Project } from "Domain/Projects/Types";

const UpdateProjectModal = ({
  isOpen,
  closeModal,
  sourceElement,
  title,
  isEditing,
  project = null,
}: {
  isOpen: boolean;
  closeModal: () => void;
  sourceElement?: ReactNode;
  title?: ReactNode;
  isEditing?: boolean;
  project?: Project;
}) => {
  return (
    <Modal
      title={title}
      isOpen={isOpen}
      closeModal={closeModal}
      sourceElement={sourceElement}
    >
      {isEditing ? (
        <EditProjectForm project={project} onProjectEdit={closeModal} />
      ) : (
        <AddProjectForm onProjectAdd={closeModal} />
      )}
    </Modal>
  );
};

export default UpdateProjectModal;
