import { Todo } from "Domain/Todo/Types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { moveElement, sortAlphaNum } from "Utils/list";
import { getTodoPriority } from "Domain/Todo/Utils";

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
      action: PayloadAction<{ todoId: string; todo: Omit<Partial<Todo>, "id"> }>
    ) => {
      const { todoId, todo } = action.payload;

      state.todoList = state.todoList.map((todoExisted) =>
        todoExisted.id === todoId ? { ...todoExisted, ...todo } : todoExisted
      );
    },

    deleteTodo: (state, action: PayloadAction<{ todoId: string }>) => {
      state.todoList = state.todoList.filter(
        ({ id }) => id !== action.payload.todoId
      );
    },

    sortTodosByPriority: (state) => {
      state.todoList = state.todoList.sort((a, b) =>
        sortAlphaNum(getTodoPriority(a)?.label, getTodoPriority(b)?.label)
      );
    },

    moveTodoItem(
      state,
      action: PayloadAction<{
        dragIndex: number;
        hoverIndex: number;
        todoId: string;
      }>
    ) {
      const { dragIndex, hoverIndex } = action.payload;

      state.todoList = moveElement(state.todoList, dragIndex, hoverIndex);
    },
  },
});

export const {
  addTodo,
  toggleTodoStatus,
  updateTodo,
  deleteTodo,
  sortTodosByPriority,
  moveTodoItem,
} = todoSlice.actions;

export default todoSlice.reducer;
