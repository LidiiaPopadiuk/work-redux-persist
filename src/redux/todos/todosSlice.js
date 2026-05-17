import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import {
  fetchTodos,
  changeTodos,
  addTodos,
  removeTodos,
  updateTodo,
} from "./todosOperation";

// const initialState = [{ id: 1, completed: false, text: "qwe" }];

const todosSlice = createSlice({
  name: "todos",
  initialState: { todos: [], error: null, loading: false },

  // initialState: [{ id: 1, completed: false, text: "qwe" },
  //   { id: 2, completed: true, text: "asd" },
  //   { id: 3, completed: false, text: "zxc" }
  // ],

  // reducers: {
  //   addTodo: {
  //     reducer(state, action) {
  //       state.push(action.payload);
  //     },

  //     prepare(text) {
  //       return {
  //         payload: {
  //           id: nanoid(),
  //           text,
  //           completed: false,
  //         },
  //       };
  //     },
  //   },
  //   removeTodo: {
  //     reducer(state, action) {
  //       return state.filter((todo) => todo.id !== action.payload);
  //     },

  //     prepare(id) {
  //       return {payload: id};
  //     }

  //   },
  //   changeTodo: {
  //       reducer(state, action) {
  //       return state.map((todo) => {
  //           if (todo.id === action.payload) {
  //               return {...todo, completed: !todo.completed}
  //           } else {
  //               return todo;
  //           }
  //       });
  //     },

  //     prepare(id){
  //       return {payload: id};
  //     }
  //   }
  // },

  extraReducers: builder => {
    builder.addCase(fetchTodos.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(changeTodos.fulfilled, (state, action) => {
      state.todos = state.todos.map(todo => {
        if (todo.id === action.payload.id) {
          //! те що ми передали в діспач
          return action.payload;
        }
        return todo;
      });
      state.loading = false;
    });
    builder.addCase(changeTodos.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(addTodos.pending, state => {
      state.loading = true;
    });
    builder.addCase(addTodos.fulfilled, (state, action) => {
      state.todos.push(action.payload);
      state.loading = false;
    });
    builder.addCase(addTodos.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(removeTodos.pending, state => {
      state.loading = true;
    });
    builder.addCase(removeTodos.fulfilled, (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
      state.loading = false;
    });
    builder.addCase(removeTodos.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(updateTodo.pending, state => {
      state.loading = true;
    });
    builder.addCase(updateTodo.fulfilled, (state, action) => {
      state.todos = state.todos.map(todo => {
        if (todo.id === action.payload.id) {
          const newObj = { ...todo, text: action.payload.text };
          console.log("newObj", newObj);
          
          return newObj;
        }
        return todo
      });
      state.loading = false;
    });
    builder.addCase(updateTodo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

// export const { addTodo, removeTodo, changeTodo } = todosSlice.actions;

export const todosReducer = todosSlice.reducer;
