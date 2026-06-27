import { createSelector } from "@reduxjs/toolkit";
import { selectTodos } from "redux/todos/todosSelectors";
// export const activeTodos = state => {
//   console.log(state);
//   return state.todos.todos.filter(todo => todo.completed === false);
// };

// export const completedTodos = state => {
//   console.log(state);
//   return state.todos.todos.filter(todo => todo.completed === true);
// };

// export const neededTodos = state => {
//   console.log(state);
//   if (state.filter === "Completed") {
//     return completedTodos(state);
//   } else if (state.filter === "Active") {
//     return activeTodos(state);
//   } else {
//     return state.todos.todos;
//   }
// };

// const selectTodos = state => state.todos.todos;
const selectFilter = state => state.filter;
export const selectNeededTodos = createSelector(
  [selectTodos, selectFilter], //! це воно не перерендюється якщо дві залежності не викликаюьбся і чи якщо одна викликається а інша ні то воно буде працювати чи ні
  (todos, filter) => {
    console.log(todos)
    if (filter === "Completed") {
      return todos.filter(todo => todo.completed === true);
    } else if (filter === "Active") {
      return todos.filter(todo => todo.completed === false);
    } else {
      return todos;
    }
  }
);

// export const selectActiveTodos = createSelector(
//   [
//     // Pass input selectors with typed arguments
//     (state: RootState) => state.todos.todos,
//     (state: RootState, category: string) => category
//   ],
//   // Extracted values are passed to the result function for recalculation
//   (todos, category) => {
//     return todos.filter(t => t.category === category)
//   }
// )
