import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const USER_URL = "https://jsonplaceholder.typicode.com/users";
const initialState = {
  users: [],
  status: "idle",
  error: null,
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  try {
    const { data } = await axios.get(USER_URL);
    return data;
  } catch (error) {
    return error.msg;
  }
});

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.users = action.payload;
    },
    [fetchUsers.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default userSlice.reducer;
