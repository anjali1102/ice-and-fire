import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./bookSlice";
import houseReducer from "./houseSlice";

export const store = configureStore({
  reducer: {
    book: bookReducer,
    house: houseReducer,
  },
});
