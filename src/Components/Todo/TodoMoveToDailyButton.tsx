import toast from "react-hot-toast";
import Tooltip from "Components/Shared/Tooltip";
import { ClipboardCopyIcon } from "@heroicons/react/outline";
import { useAppDispatch, useAppSelector } from "Domain/Hooks";
import { addReportItem } from "Domain/Daily/DailySlice";
import { nanoid } from "@reduxjs/toolkit";
import { Todo } from "Domain/Todo/Types";
import { selectedProjectIdSelector } from "Domain/Projects/ProjectsSelectors";
import { DailyReportType } from "Domain/Daily/Types";

const TodoMoveToDailyButton = ({ todo }: { todo: Todo }) => {
  const dispatch = useAppDispatch();
  const projectId = useAppSelector(selectedProjectIdSelector);

  const notify = () =>
    toast.success(<span className="text-sm">Todo moved to daily</span>);

  const handleClick = (event) => {
    dispatch(
      addReportItem({
        id: nanoid(),
        description: todo.title,
        type: todo.isComplete
          ? DailyReportType.accomplished
          : DailyReportType.upcoming,
        projectId,
      })
    );

    notify();
  };

  return (
    <>
      <Tooltip placement="left" overlay={<span>Copy to daily reports</span>}>
        <button onClick={handleClick}>
          <ClipboardCopyIcon className="text-purple-600 w-5 h-5 rotate-180" />
        </button>
      </Tooltip>
    </>
  );
};

export default TodoMoveToDailyButton;
