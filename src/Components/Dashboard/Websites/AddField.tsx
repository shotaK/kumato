import { useState } from "react";
import { PlusSmIcon } from "@heroicons/react/outline";

import Input from "Components/Shared/Input";
import { useAppDispatch } from "Domain/Hooks";
import { addWebsiteToBlock } from "Domain/Dashboard/DashboardSlice";

const AddField = () => {
  const [websiteUrl, setWebsiteUrl] = useState("");
  const dispatch = useAppDispatch();

  const onChange = (e: { target: HTMLInputElement }) => {
    const { value } = e.target;

    setWebsiteUrl(value);
  };

  const onWebsiteUrlAdd = () => {
    if (websiteUrl) {
      setWebsiteUrl("");
      dispatch(addWebsiteToBlock({ url: websiteUrl, isBlocked: true }));
    }
  };

  return (
    <div className="flex">
      <Input
        type="text"
        className="flex-grow min-w-0 rounded-r-none text-sm"
        placeholder="Enter website url to block"
        onChange={onChange}
        value={websiteUrl}
      />

      <button
        type="button"
        className="bg-orange-500 px-2 py-1 text-white rounded-sm text-sm rounded-l-none"
        onClick={onWebsiteUrlAdd}
      >
        <PlusSmIcon className="h-4 w-4" />
      </button>
    </div>
  );
};

export default AddField;
