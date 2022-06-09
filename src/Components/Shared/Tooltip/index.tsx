import Tooltip from "rc-tooltip";
import { TooltipProps } from "rc-tooltip/lib/Tooltip";

import "./index.module.scss";

interface Props extends TooltipProps {}

const Index = ({ children, ...rest }: Props) => {
  return (
    <Tooltip {...rest} overlayClassName="kt-tooltip-content">
      {children}
    </Tooltip>
  );
};

export default Index;
