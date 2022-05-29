import { useState } from "react";
import { useAppDispatch } from "Domain/Hooks";
import { addWebsiteToBlock } from "Domain/Pomodoro/PomodoroSlice";
import InputButtonGroup from "Components/Shared/Input/InputButtonGroup";

const AddField = () => {
  const [websiteUrl, setWebsiteUrl] = useState("");
  const dispatch = useAppDispatch();

  const onChange = (value: string) => {
    setWebsiteUrl(value);
  };

  const onWebsiteUrlAdd = () => {
    if (websiteUrl) {
      setWebsiteUrl("");
      dispatch(addWebsiteToBlock({ url: websiteUrl, isBlocked: true }));
    }
  };

  return (
    <InputButtonGroup
      inputValue={websiteUrl}
      handleChange={onChange}
      onSubmit={onWebsiteUrlAdd}
      inputPlaceholder="Enter website url to block"
    />
  );
};

export default AddField;
