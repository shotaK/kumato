import { DailyReportItem } from "Domain/Daily/Types";
import { Fragment, useMemo } from "react";
import {
  BanIcon,
  CheckIcon,
  RefreshIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import { useAppDispatch } from "Domain/Hooks";
import { deleteReportItem } from "Domain/Daily/DailySlice";

const ReportItem = ({ reportItem }: { reportItem: DailyReportItem }) => {
  const { id, description, type } = reportItem;
  const dispatch = useAppDispatch();

  const [icon, color] = useMemo(() => {
    switch (type) {
      case "accomplished":
        return [CheckIcon, "green"];
      case "upcoming":
        return [RefreshIcon, "orange"];
      case "blocked":
        return [BanIcon, "red"];
      default:
        return [Fragment, "white"];
    }
  }, [type]);

  const Icon = icon;

  return (
    <li className="flex items-center hover:bg-[#4a4a4a] todo-item border-b border-b-neutral-500 first:border-t-neutral-500 first:border-t pl-4 py-1 pr-6 list-item-actionable">
      <Icon className={`h-5 w-5 text-${color}-500 ml-1.5`} />

      <span className="pl-2 flex-1 break-word">{description}</span>

      <button type="button" onClick={() => dispatch(deleteReportItem({ id }))}>
        <TrashIcon className="invisible h-5 w-5 text-red-600 ml-1.5 list-item-actionable-delete" />
      </button>
    </li>
  );
};

export default ReportItem;
