import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "kiran rai" },
  { id: "1", name: "kamal dhakal" },
  { id: "2", name: "dilip rai" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
