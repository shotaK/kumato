import { TrashIcon } from "@heroicons/react/outline";

const DeleteProjectButton = ({
  openDeleteProjectModal,
}: {
  openDeleteProjectModal?: () => void;
}) => {
  return (
    <button
      type="button"
      onClick={(event) => {
        event.stopPropagation();
        openDeleteProjectModal();
      }}
    >
      <TrashIcon className="invisible w-[17px] text-red-600 ml-1.5 list-item-actionable-delete" />
    </button>
  );
};

export default DeleteProjectButton;
