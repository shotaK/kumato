import Tooltip from "Components/Shared/Tooltip";
import { FolderRemoveIcon } from "@heroicons/react/outline";
import { useAppDispatch, useAppSelector } from "Domain/Hooks";
import { selectedProjectIdSelector } from "Domain/Projects/ProjectsSelectors";
import { deleteAllReportsByProjectId } from "Domain/Daily/DailySlice";
import { reportsListEmptySelector } from "Domain/Daily/DailySelectors";

const ClearAllReportsButton = () => {
  const dispatch = useAppDispatch();
  const selectedProjectId = useAppSelector(selectedProjectIdSelector);
  const reportsListEmpty = useAppSelector(reportsListEmptySelector);

  if (reportsListEmpty) {
    return null;
  }

  const clearAllReports = () => {
    dispatch(deleteAllReportsByProjectId({ projectId: selectedProjectId }));
  };

  return (
    <Tooltip placement="left" overlay="Clear all">
      <button onClick={clearAllReports}>
        <FolderRemoveIcon className="text-white w-5 h-5" />
      </button>
    </Tooltip>
  );
};

export default ClearAllReportsButton;
