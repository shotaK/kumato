import Tooltip from "Components/Shared/Tooltip/index";
import { QuestionMarkCircleIcon } from "@heroicons/react/outline";
import { ReactNode } from "react";
import { useAppSelector } from "Domain/Hooks";
import { dashboardSelector } from "Domain/Dashboard/DashboardSelector";

const QuestionTooltip = ({ overlayText }: { overlayText: ReactNode }) => {
  const { tooltipsDisabled } = useAppSelector(dashboardSelector);

  if (tooltipsDisabled) {
    return null;
  }

  return (
    <Tooltip
      placement="right"
      overlay={overlayText}
      overlayStyle={{ maxWidth: 160 }}
      overlayInnerStyle={{ padding: 8 }}
    >
      <QuestionMarkCircleIcon className="text-white w-5 h-5" />
    </Tooltip>
  );
};

export default QuestionTooltip;
