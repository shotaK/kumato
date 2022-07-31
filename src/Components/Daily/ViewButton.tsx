import { dailySelector } from "Domain/Daily/DailySelectors";
import { useSelector } from "react-redux";
import { ReportsViewMode } from "Domain/Daily/Types";
import { EyeIcon, PencilAltIcon } from "@heroicons/react/outline";
import Tooltip from "Components/Shared/Tooltip";
import { useAppDispatch } from "Domain/Hooks";
import { changeReportsViewMode } from "Domain/Daily/DailySlice";

const ViewButton = () => {
  const { reportsViewMode } = useSelector(dailySelector);
  const dispatch = useAppDispatch();
  const isViewMode = reportsViewMode === ReportsViewMode.view;
  const Icon = isViewMode ? PencilAltIcon : EyeIcon;

  const changeViewMode = () => {
    dispatch(
      changeReportsViewMode(
        isViewMode ? ReportsViewMode.edit : ReportsViewMode.view
      )
    );
  };

  return (
    <Tooltip
      placement="left"
      overlay={
        <span>
          {isViewMode ? "Activate editing mode" : "Activate viewing mode"}
        </span>
      }
    >
      <button onClick={changeViewMode}>
        <Icon className="text-white w-5 h-5" />
      </button>
    </Tooltip>
  );
};

export default ViewButton;
