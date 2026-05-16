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
