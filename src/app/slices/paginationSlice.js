import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 1,
  itemsPerpage: 10,
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    incrementPage: (state) => {
      state.currentPage = state.currentPage + 1;
    },
    decrementPage: (state) => {
      state.currentPage = state.currentPage - 1;
    },
    setItemsperPage: (state, action) => {
      state.itemsPerpage = action.payload;
    },
  },
});

export const { setItemsperPage, incrementPage, decrementPage } =
  paginationSlice.actions;
