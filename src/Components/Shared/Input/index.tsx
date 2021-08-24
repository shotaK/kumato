import classNames from "classnames";
import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = ({ className = "", ...rest }: InputProps) => {
  return (
    <input
      type="text"
      className={classNames(
        "h-7 bg-gray-100 focus:bg-white text-gray-600 focus:text-gray-700 appearance-none rounded-sm py-1 px-2 focus:outline-none shadow",
        className
      )}
      {...rest}
    />
  );
};

export default Input;
