import { configureStore } from "@reduxjs/toolkit";
import likesReducer from "./likedSlice";

export default configureStore({
  reducer: {
    liked: likesReducer,
  },
});
