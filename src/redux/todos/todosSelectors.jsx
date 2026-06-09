import { createSelector } from "@reduxjs/toolkit";

export const selectTodos = (state) => state.todos.todos;

export const selectCount = createSelector(
    [selectTodos],
    (todos) => {
        return todos.reduce((acc, todo) => {
            if (todo.completed) {
                acc.commpleted += 1
            } else {
                acc.active += 1
            }
            return acc
        },
            {
                active: 0,
                commpleted: 0
            }
        )
    }
)