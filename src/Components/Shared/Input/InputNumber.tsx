import { useState } from "react";
import { func, number, oneOfType, string } from "prop-types";

import Input, { InputProps } from "Components/Shared/Input";

interface InputNumberProps extends InputProps {
  value?: string | number;
  onUpdate?: (value: string | number) => void;
}

const InputNumber = ({ value, onUpdate, ...rest }: InputNumberProps) => {
  const [inputValue, setValue] = useState(value || "");

  const onChange = (e: { target: HTMLInputElement }) => {
    const re = /^[0-9\b]+$/;
    const { value: targetValue } = e.target;
    // if (targetValue === "" || re.test(targetValue)) {
    setValue(targetValue);
    if (onUpdate) {
      onUpdate(targetValue);
    }
    // }
  };

  return <Input value={inputValue} onChange={onChange} {...rest} />;
};

InputNumber.propTypes = {
  value: oneOfType([string, number]),
  onUpdate: func,
};

export default InputNumber;
