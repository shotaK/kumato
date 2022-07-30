import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";

import { useAppDispatch, useAppSelector } from "Domain/Hooks";
import InputButtonGroup from "Components/Shared/Input/InputButtonGroup";
import { addTodo } from "Domain/Todo/TodoSlice";
import { TodoStatus } from "Domain/Todo/Types";
import { selectedProjectIdSelector } from "Domain/Projects/ProjectsSelectors";

const AddTodoItem = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const dispatch = useAppDispatch();
  const projectId = useAppSelector(selectedProjectIdSelector);

  const onChange = (value: string) => {
    setTaskTitle(value);
  };

  const onTaskAdd = () => {
    if (taskTitle) {
      setTaskTitle("");
      dispatch(
        addTodo({
          id: nanoid(),
          title: taskTitle,
          isComplete: false,
          status: TodoStatus.default,
          projectId: projectId,
        })
      );
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
