import Checkbox from "Components/Shared/Input/Checkbox";
import Label from "Components/Shared/Label";
import { useAppDispatch, useAppSelector } from "Domain/Hooks";
import { updateTooltipsDisabled } from "Domain/Dashboard/DashboardSlice";
import { ChangeEvent } from "react";
import { dashboardSelector } from "Domain/Dashboard/DashboardSelector";

const TooltipsToggleButton = () => {
  const dispatch = useAppDispatch();
  const { tooltipsDisabled } = useAppSelector(dashboardSelector);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateTooltipsDisabled(e.target.checked));
  };

  return (
    <div className="flex items-center">
      <Label htmlFor="tooltips-toggle" className="text-white text-sm pr-1">
        Disable tooltips:
      </Label>
      <Checkbox
        checked={tooltipsDisabled}
        name="tooltips-toggle"
        id="tooltips-toggle"
        onChange={handleChange}
      />
    </div>
  );
};

export default TooltipsToggleButton;
