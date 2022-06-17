import { InboxIcon } from "@heroicons/react/outline";

const EmptyTodoListPlaceholder = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <InboxIcon className="h-24 w-24 text-coolGray-100" />
      <p className="text-coolGray-100 font-bold text-lg">Get started with a task</p>
    </div>
  );
};

export default EmptyTodoListPlaceholder;
