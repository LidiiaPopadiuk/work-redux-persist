import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://69ff4c7c2b7ab349602f7904.mockapi.io";

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async (__, thunkAPI) => {
    try {
      const fetchTodos = await axios.get("/todos");
      const data = fetchTodos.data;
      console.log(data);

      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.massage);
    }
  }
);

export const removeTodos = createAsyncThunk(
  "todos/removeTodos",
  async (todoId, thunkAPI) => {
    try {
      const response = await axios.delete(`/todos/${todoId}`);
      const data = response.data;
      console.log(data);

      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.massage);
    }
  }
);

export const addTodos = createAsyncThunk(
  "todos/addTodos",
  async (pokemonData, thunkAPI) => {
    try {
      const fetchTodos = await axios.post(`/todos`, pokemonData);
      console.log(pokemonData);

      const data = fetchTodos.data;
      console.log(data);

      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.massage);
    }
  }
);

export const changeTodos = createAsyncThunk(
  "todos/changeTodo",
  async (changedTodo, thunkAPI) => {
    try {
      const response = await axios.put(`/todos/${changedTodo.id}`, changedTodo); //! записуємо в базу даних і робитьься рефеч
      const data = response.data;
      console.log(data);

      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.massage);
    }
  }
);

export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async (updatedTodo, thunkAPI) => {
    try {
      const response = await axios.put(`/todos/${updatedTodo.id}`, updatedTodo);
      const data = response.data;
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.massage);
    }
  }
);
