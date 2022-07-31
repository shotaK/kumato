import {
  LockOpenIcon,
  LockClosedIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import { bool, string } from "prop-types";

import { useAppDispatch } from "Domain/Hooks";
import {
  blockWebsite,
  deleteWebsite,
  unblockWebsite,
} from "Domain/Pomodoro/PomodoroSlice";

const WebsiteItem = ({
  isBlocked,
  websiteUrl,
}: {
  isBlocked: boolean;
  websiteUrl: string;
}) => {
  const dispatch = useAppDispatch();

  return (
    <li className="flex items-center mb-0.5 hover:bg-[#4a4a4a] px-6 py-1 list-item-actionable">
      {isBlocked ? (
        <button
          type="button"
          className="flex bg-red-600 px-2 py-1 text-white rounded-sm text-sm items-center"
          onClick={() => dispatch(unblockWebsite(websiteUrl))}
        >
          <LockClosedIcon className="h-4 w-4 text-white" />
        </button>
      ) : (
        <button
          type="button"
          className="flex bg-green-600 px-2 py-1 text-white rounded-sm text-sm items-center"
          onClick={() => dispatch(blockWebsite(websiteUrl))}
        >
          <LockOpenIcon className="h-4 w-4 text-white" />
        </button>
      )}

      <span className="flex-1 text-gray-200 ml-1.5 text-sm truncate">
        {websiteUrl}
      </span>
      <button type="button" onClick={() => dispatch(deleteWebsite(websiteUrl))}>
        <TrashIcon className="invisible h-5 w-5 text-red-600 ml-1.5 list-item-actionable-delete" />
      </button>
    </li>
  );
};

WebsiteItem.propTypes = {
  isBlocked: bool,
  websiteUrl: string,
};

export default WebsiteItem;
