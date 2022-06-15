import { InboxIcon } from "@heroicons/react/outline";

const EmptyTodoListPlaceholder = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <InboxIcon className="h-28 w-28 text-coolGray-100" />
      <p className="text-coolGray-100 font-bold">Get started with a task</p>
    </div>
  );
};

export default EmptyTodoListPlaceholder;
