import { CogIcon } from "@heroicons/react/outline";

import InputNumber from "Components/Shared/Input/InputNumber";
import Label from "Components/Shared/Label";
import { useAppSelector, useAppDispatch } from "Domain/Hooks";
import { pomodoroSelector } from "Domain/Pomodoro/PomodoroSelectors";
import {
  changeBreakDuration,
  changeCycleDuration,
} from "Domain/Pomodoro/PomodoroSlice";
import TooltipsToggleButton from "Components/Pomodoro/Settings/TooltipsToggleButton";

const Settings = () => {
  const dispatch = useAppDispatch();
  const { cycleDuration, breakDuration } = useAppSelector(pomodoroSelector);

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
          className="w-20 text-sm"
          value={cycleDuration}
          placeholder="Minutes"
          onUpdate={(value) => dispatch(changeCycleDuration(value))}
        />
      </Label>

      <Label className="mb-3">
        <span className="block mb-1">Break duration:</span>
        <InputNumber
          type="text"
          className="w-20 text-sm"
          placeholder="Minutes"
          value={breakDuration}
          onUpdate={(value) => dispatch(changeBreakDuration(value))}
        />
      </Label>

      <TooltipsToggleButton />
    </div>
  );
};

export default Settings;
