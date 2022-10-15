import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const initialState = {
  loading: false,
  hasErrors: false,
  books: [],
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        if (action.payload) {
          state.loading = false;
          state.hasErrors = false;
          state.books = action.payload.books;
        }
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.hasErrors = true;
      });
  },
});

export default bookSlice.reducer;

//thunk

export const fetchBooks = createAsyncThunk(
  "books/fetchBooks",
  async (_, ThunkAPI) => {
    try {
      const response = await axios.get(
        `https://www.anapioficeandfire.com/api/books?pageSize=30`
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error);
    }
  }
);
