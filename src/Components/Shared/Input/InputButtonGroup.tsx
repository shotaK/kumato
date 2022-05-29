import Input from "Components/Shared/Input/index";
import { PlusSmIcon } from "@heroicons/react/outline";
import { FormEvent } from "react";

const InputButtonGroup = ({
  inputValue,
  onSubmit,
  handleChange,
  inputPlaceholder,
}: {
  inputValue: string;
  onSubmit: () => void;
  handleChange: (inputValue: string) => void;
  inputPlaceholder: string;
}) => {
  const onChange = (e: { target: HTMLInputElement }) => {
    const { value } = e.target;

    handleChange(value);
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <Input
        type="text"
        className="flex-grow min-w-0 rounded-r-none text-sm"
        placeholder={inputPlaceholder}
        onChange={onChange}
        value={inputValue}
      />

      <button
        type="submit"
        className="bg-orange-500 px-2 py-1 text-white rounded-sm text-sm rounded-l-none"
      >
        <PlusSmIcon className="h-4 w-4" />
      </button>
    </form>
  );
};

export default InputButtonGroup;
