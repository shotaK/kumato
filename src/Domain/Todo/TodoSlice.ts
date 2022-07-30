import { Todo, TodoStatus } from "Domain/Todo/Types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { moveElement, sortAlphaNum } from "Utils/list";
import { getTodoPriority } from "Domain/Todo/Utils";
import { ThunkAppDispatch } from "Domain/Store";
import isEmpty from "lodash.isempty";
import {
  getAllStorageSyncData,
  setDefaultAllStorageSyncData,
} from "Domain/StorageApi/Actions";
import { StorageApiType } from "Domain/StorageApi/Types";

export interface TodoState {
  todoList: Array<Todo>;
  defaultTodoDataFetched?: boolean;
}

export const todoInitialState: TodoState = {
  todoList: [],
  defaultTodoDataFetched: false,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: todoInitialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todoList.push(action.payload);
    },
    toggleTodoStatus: (state, action: PayloadAction<string>) => {
      state.todoList = state.todoList.map((todo) =>
        todo.id === action.payload
          ? {
              ...todo,
              isComplete: !todo.isComplete,
              status: TodoStatus.default,
            }
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
      state.todoList = state.todoList.sort((a, b) => {
        if (b.isComplete) {
          return -1;
        }
        if (a.isComplete) {
          return 1;
        }

        return sortAlphaNum(
          getTodoPriority(a)?.label,
          getTodoPriority(b)?.label
        );
      });
    },

    deleteCompletedTodos: (state) => {
      state.todoList = state.todoList.filter(({ isComplete }) => !isComplete);
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

    provideDefaultStorageData: (state, action) => {
      const data = action.payload;

      return { ...state, ...data };
    },

    updateDefaultTodoDataFetched: (state, action) => {
      state.defaultTodoDataFetched = action.payload;
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
  deleteCompletedTodos,
  provideDefaultStorageData,
  updateDefaultTodoDataFetched,
} = todoSlice.actions;

export const initializeTodoData =
  () => async (dispatch: ThunkAppDispatch, getState: any) => {
    const allStorageData: { todo?: TodoState } = await getAllStorageSyncData(
      StorageApiType.sync
    );
    const todo = allStorageData?.todo;

    if (isEmpty(todo)) {
      await setDefaultAllStorageSyncData({
        storageApiType: StorageApiType.sync,
        data: { todo: todoInitialState },
      });
    } else {
      dispatch(provideDefaultStorageData(todo));
    }

    dispatch(updateDefaultTodoDataFetched(true));
  };

export default todoSlice.reducer;
