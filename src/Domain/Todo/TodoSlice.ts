import { Todo } from "Domain/Todo/Types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TodoState {
  todoList: Array<Todo>;
}

const initialState: TodoState = {
  todoList: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todoList.push(action.payload);
    },
    toggleTodoStatus: (state, action: PayloadAction<string>) => {
      state.todoList = state.todoList.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isComplete: !todo.isComplete }
          : todo
      );
    },
    updateTodo: (
      state,
      action: PayloadAction<{ todoId: string; todo: Omit<Todo, "id"> }>
    ) => {
      const { todoId, todo } = action.payload;

      state.todoList = state.todoList.map((todoExisted) =>
        todoExisted.id === todoId ? { ...todoExisted, ...todo } : todoExisted
      );
    },
  },
});

export const { addTodo, toggleTodoStatus, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
