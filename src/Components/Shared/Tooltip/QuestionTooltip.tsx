import Tooltip from "Components/Shared/Tooltip/index";
import { QuestionMarkCircleIcon } from "@heroicons/react/outline";
import { ReactNode } from "react";

const QuestionTooltip = ({ overlayText }: { overlayText: ReactNode }) => {
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
