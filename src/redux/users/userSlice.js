import { createSlice } from "@reduxjs/toolkit";
import { createUser, loginUser, logOutUser } from "./usersOperations";

const initialState = {
  token: "",
  user: {
    email: "",
    id: null,
  },
  error: null,
  login: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,

  extraReducers: builder => {
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.token = action.payload.accessToken; //!
      state.user = action.payload.user;
    });

    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.token = action.payload.accessToken;
      state.user = action.payload.user;
      state.login = true
      console.log(action);
      
    });

    builder.addCase(logOutUser.fulfilled, (state, action) => {
      state.token = action.payload;
      state.user = action.payload;
      state.login = false;
      state.error = null;
    });
  },
});

export const userReducer = userSlice.reducer;
