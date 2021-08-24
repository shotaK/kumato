import { ReactNode } from "react";
import { node, string } from "prop-types";
import classNames from "classnames";

const Label = ({
  children,
  className = "",
  ...rest
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <label
      className={classNames(
        "block text-sm font-medium text-gray-200",
        className
      )}
      {...rest}
    >
      {children}
    </label>
  );
};

Label.propTypes = {
  children: node.isRequired,
  className: string,
};

export default Label;
