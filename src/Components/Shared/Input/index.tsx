import classNames from "classnames";
import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  height?: string;
  theme?: "light" | "dark";
}

const Input = ({
  className = "",
  height = "h-7",
  theme = "light",
  ...rest
}: InputProps) => {
  return (
    <input
      type="text"
      className={classNames(
        "bg-gray-100 focus:bg-white text-gray-600 focus:text-gray-700 appearance-none rounded-sm py-1 px-2 focus:outline-none focus:ring-0",
        {
          "focus:border-0 border-0 border-transparent focus:border-transparent": theme === "light",
        },
        {
          "border-1 border-stone-400 focus:border-stone-500":
            theme === "dark",
        },
        className,
        height
      )}
      {...rest}
    />
  );
};

export default Input;
