import { PlusSmIcon } from "@heroicons/react/outline";
import Tooltip from "Components/Shared/Tooltip";
import { useState } from "react";
import UpdateProjectModal from "Components/Projects/UpdateProjectModal";

const AddProjectButton = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <UpdateProjectModal
        isOpen={isOpen}
        closeModal={closeModal}
        title="Add a new Project"
        sourceElement={
          <Tooltip placement="left" overlay={<span>Add new Project</span>}>
            <button
              type="button"
              className="bg-orange-500 px-2 py-1 text-white rounded-sm text-sm h-[28px]"
              onClick={openModal}
            >
              <PlusSmIcon className="h-4 w-4" />
            </button>
          </Tooltip>
        }
      />
    </>
  );
};

export default AddProjectButton;
