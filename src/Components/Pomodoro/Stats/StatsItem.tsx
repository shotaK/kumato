import { ReactNode } from "react";
import { node, string } from "prop-types";
import classNames from "classnames";
import { PlusCircleIcon } from "@heroicons/react/outline";
import { MinusCircleIcon } from "@heroicons/react/outline";

const StatsItem = ({
  className = "",
  title,
  onIncrement,
  onDecrement,
}: {
  className?: string;
  title: ReactNode;
  onIncrement: () => void;
  onDecrement: () => void;
}) => {
  return (
    <div className={classNames("flex", "items-center", className)}>
      <button type="button" onClick={onIncrement}>
        <PlusCircleIcon className="h-6 w-6 text-green-700 justify-center" />
      </button>
      <span className="text-gray-200 ml-1.5 text-sm">{title}</span>
      <button type="button" onClick={onDecrement}>
        <MinusCircleIcon className="h-6 w-6 text-red-800 ml-1.5" />
      </button>
    </div>
  );
};

StatsItem.propTypes = {
  className: string,
  title: node.isRequired,
};

export default StatsItem;
