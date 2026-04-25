import { configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "./todos/todosSlice";
import { filterReducer } from './filter/filterSlice'

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    filter: filterReducer,
  },
});