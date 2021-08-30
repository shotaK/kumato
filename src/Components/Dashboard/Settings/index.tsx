import { CogIcon } from "@heroicons/react/outline";

import InputNumber from "Components/Shared/Input/InputNumber";
import Label from "Components/Shared/Label";
import { useAppSelector, useAppDispatch } from "Domain/Hooks";
import { dashboardSelector } from "Domain/Dashboard/DashboardSelectors";
import {
  changeBreakDuration,
  changeCycleDuration,
} from "Domain/Dashboard/DashboardSlice";

const Settings = () => {
  const dispatch = useAppDispatch();
  const { cycleDuration, breakDuration } = useAppSelector(dashboardSelector);

  return (
    <div>
      <h2 className="flex text-gray-50 items-center mb-3">
        <CogIcon className="h-6 w-6 text-gray-50" />

        <span className="ml-0.5 text-gray-200 text-sm font-medium">
          Settings
        </span>
      </h2>

      <Label className="mb-3">
        <span className="block mb-1">Kumato duration:</span>
        <InputNumber
          type="text"
          className="w-20"
          value={cycleDuration}
          placeholder="Minutes"
          onUpdate={(value) => dispatch(changeCycleDuration(value))}
        />
      </Label>

      <Label>
        <span className="block mb-1">Break duration:</span>
        <InputNumber
          type="text"
          className="w-20"
          placeholder="Minutes"
          value={breakDuration}
          onUpdate={(value) => dispatch(changeBreakDuration(value))}
        />
      </Label>
    </div>
  );
};

export default Settings;
