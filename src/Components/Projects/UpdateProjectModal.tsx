import React, {ReactNode} from "react";
import Modal from "Components/Shared/Modal";
import ProjectUpdateForm from "Components/Projects/ProjectUpdateForm";

const UpdateProjectModal = ({
  isOpen,
  closeModal,
  sourceElement,
  title,
}: {
  isOpen: boolean;
  closeModal: () => void;
  sourceElement: ReactNode;
  title?: ReactNode;
}) => {
  return (
    <Modal
      title={title}
      isOpen={isOpen}
      closeModal={closeModal}
      sourceElement={sourceElement}
    >
      <ProjectUpdateForm onProjectAdd={closeModal} />
    </Modal>
  );
};

export default UpdateProjectModal;
