import classNames from "classnames";

const Checkbox = ({
  onChange,
  checked,
  name,
  id,
}: {
  onChange: (event) => void;
  checked: boolean;
  name: string;
  id?: string;
}) => {
  return (
    <input
      type="checkbox"
      name={name}
      className={classNames(
        "h-4 w-4 text-green-600 rounded focus:ring-offset-0 ring-0 focus:ring-0 focus:ring-offset-0 mr-1.5"
      )}
      onChange={onChange}
      checked={checked}
      {...(id ? { id } : {})}
    />
  );
};

export default Checkbox;
