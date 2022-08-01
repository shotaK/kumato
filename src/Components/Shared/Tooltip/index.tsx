import Tooltip from "rc-tooltip";
import { TooltipProps } from "rc-tooltip/lib/Tooltip";

import "./index.module.scss";
import { useAppSelector } from "Domain/Hooks";
import { dashboardSelector } from "Domain/Dashboard/DashboardSelector";

interface Props extends TooltipProps {}

const Index = ({ children, ...rest }: Props) => {
  const { tooltipsDisabled } = useAppSelector(dashboardSelector);

  if (tooltipsDisabled) {
    return children;
  }

  return (
    <Tooltip {...rest} overlayClassName="kt-tooltip-content">
      {children}
    </Tooltip>
  );
};

export default Index;
