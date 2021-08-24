import { ComponentType, ReactNode } from "react";
import classNames from "classnames";
import { elementType, node, string } from "prop-types";

const ActionButton = ({
  text,
  icon: Icon,
  className = "",
  onClick,
}: {
  text: ReactNode;
  icon: ComponentType<{ className?: string }>;
  className?: string;
  onClick: () => void;
}) => {
  return (
    <button
      type="button"
      className={classNames(
        "flex px-2 py-2 text-white rounded-sm transition-colors duration-300 items-center",
        className
      )}
      onClick={onClick}
    >
      <Icon className="h-6 w-6 text-gray-200 items-center" />
      <span className="ml-1 text-sm font-medium">{text}</span>
    </button>
  );
};

ActionButton.propTypes = {
  text: node,
  icon: elementType,
  className: string,
};

export default ActionButton;
