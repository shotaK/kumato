import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";

import { useAppDispatch } from "Domain/Hooks";
import InputButtonGroup from "Components/Shared/Input/InputButtonGroup";
import { addTodo } from "Domain/Todo/TodoSlice";

const AddTodoItem = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const dispatch = useAppDispatch();

  const onChange = (value: string) => {
    setTaskTitle(value);
  };

  const onTaskAdd = () => {
    if (taskTitle) {
      setTaskTitle("");
      dispatch(addTodo({ id: nanoid(), title: taskTitle, isComplete: false }));
    }
  };

  return (
    <InputButtonGroup
      inputValue={taskTitle}
      handleChange={onChange}
      onSubmit={onTaskAdd}
      inputPlaceholder="Enter a new task..."
    />
  );
};

export default AddTodoItem;
