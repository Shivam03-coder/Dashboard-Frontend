import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "63701cc1f03239c72c00017f",
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

export default userSlice;
