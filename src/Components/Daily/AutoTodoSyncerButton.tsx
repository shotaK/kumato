import Tooltip from "Components/Shared/Tooltip";
import { CloudDownloadIcon } from "@heroicons/react/outline";
import { dailySelector } from "Domain/Daily/DailySelectors";
import { useAppDispatch, useAppSelector } from "Domain/Hooks";
import { updateTodoSyncActive } from "Domain/Daily/DailySlice";

const AutoTodoSyncerButton = () => {
  const { todoSyncActive } = useAppSelector(dailySelector);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(updateTodoSyncActive(!todoSyncActive));
  };

  return (
    <Tooltip
      placement="left"
      overlay={
        <span>
          {todoSyncActive
            ? "Disable syncing with todos"
            : "Enable syncing with todos"}
        </span>
      }
    >
      <button
        onClick={handleClick}
        className={!todoSyncActive ? "opacity-50" : "opacity-100"}
      >
        <CloudDownloadIcon className="text-white w-5 h-5" />
      </button>
    </Tooltip>
  );
};

export default AutoTodoSyncerButton;
