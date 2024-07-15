import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 1,
  itemsPerpage: 10,
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    incrementPage: (state, action) => {
      state.currentPage = state.currentPage + action.payload;
    },
    decrementPage: (state, action) => {
      state.currentPage = state.currentPage - action.payload;
    },
    setItemsperPage: (state, action) => {
      state.itemsPerpage = action.payload;
    },
  },
});

export const { setItemsperPage, incrementPage, decrementPage} = paginationSlice.actions;
