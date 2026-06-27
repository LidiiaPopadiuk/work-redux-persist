import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk(
  "users/createUser",
  async (obj, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:3001/register", {
        email: obj.email,
        password: obj.password,
      });
      const data = response.data; //! обєкткористувача якщо він вже заареєструвався
      axios.defaults.headers.common.Authorization = `Bearer ${
        data.accessToken
      }`;
      console.log("data", data);

      return data; //! його повертаємо
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "users/loginUser",
  async (obj, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:3001/login", {
        email: obj.email,
        password: obj.password,
      });
      const data = response.data;
      axios.defaults.headers.common.Authorization = `Bearer ${
        data.accessToken
      }`;
      console.log("data", data);
      console.log(thunkAPI.getState());

      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const logOutUser = createAsyncThunk(
  "users/logOutUser",
  async (obj, thunkAPI) => {
    console.log(thunkAPI.getState());
    localStorage.removeItem("token");
    // axios.defaults.headers.common.Authorization = ""; //! навіщо
    return null;
  }
);
