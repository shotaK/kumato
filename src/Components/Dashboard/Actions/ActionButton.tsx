import { ComponentType, ReactNode } from "react";
import classNames from "classnames";
import { bool, elementType, node, string, func } from "prop-types";

const ActionButton = ({
  text,
  icon: Icon,
  className = "",
  onClick,
  disabled = false,
}: {
  text: ReactNode;
  icon: ComponentType<{ className?: string }>;
  className?: string;
  onClick: () => void;
  disabled?: boolean;
}) => {
  return (
    <button
      type="button"
      className={classNames(
        "flex px-2 py-2 text-white rounded-sm transition-colors duration-300 items-center",
        className,
        disabled && "opacity-50 cursor-not-allowed"
      )}
      onClick={onClick}
      disabled={disabled}
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
  onClick: func,
  disabled: bool,
};

export default ActionButton;
