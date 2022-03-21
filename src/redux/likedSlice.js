import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // this will hold the ids of all the liked movies
  liked: {},
};

export const likedSlice = createSlice({
  name: "liked",
  initialState,
  reducers: {
    addLikedMovie: (state, { payload }) => {
      state.liked[payload] = 1;
    },
    removeLikedMovie: (state, { payload }) => {
      delete state.liked[payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addLikedMovie, removeLikedMovie } = likedSlice.actions;

export default likedSlice.reducer;
