import { EyeIcon, EyeOffIcon, TrashIcon } from "@heroicons/react/outline";
import { bool } from "prop-types";

import { useAppDispatch } from "Domain/Hooks";
import {
  blockWebsite,
  deleteWebsite,
  unblockWebsite,
} from "Domain/Dashboard/DashboardSlice";

const WebsiteItem = ({
  isBlocked,
  websiteUrl,
}: {
  isBlocked: boolean;
  websiteUrl: string;
}) => {
  const dispatch = useAppDispatch();

  return (
    <li className="flex items-center mb-1.5">
      {isBlocked ? (
        <button
          type="button"
          className="flex bg-red-600 px-2 py-1 text-white rounded-sm text-sm items-center"
          onClick={() => dispatch(unblockWebsite(websiteUrl))}
        >
          <EyeOffIcon className="h-4 w-4 text-white" />
          <span className="ml-1">Unblock</span>
        </button>
      ) : (
        <button
          type="button"
          className="flex bg-green-600 px-2 py-1 text-white rounded-sm text-sm items-center"
          onClick={() => dispatch(blockWebsite(websiteUrl))}
        >
          <EyeIcon className="h-4 w-4 text-white" />
          <span className="ml-1">Block</span>
        </button>
      )}

      <span className="text-gray-200 ml-1.5 text-sm truncate">
        {websiteUrl}
      </span>
      <button type="button" onClick={() => dispatch(deleteWebsite(websiteUrl))}>
        <TrashIcon className="h-5 w-5 text-red-800 ml-1.5" />
      </button>
    </li>
  );
};

WebsiteItem.propTypes = {
  isBlocked: bool,
  websiteUrl: bool,
};

export default WebsiteItem;
