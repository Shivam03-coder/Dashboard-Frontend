import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "839848839ndkedh932889",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setId: (state) => {
      state.userId = "8734920-njfejhifu37910";
    },
  },
});

export const { setId } = userSlice.actions;

export default userSlice.reducer;
