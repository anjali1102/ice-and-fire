import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const initialState = {
  house: [],
  hasErrors: false,
  loading: false,
};

const houseSlice = createSlice({
  name: "house",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHouses.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchHouses.fulfilled, (state, action) => {
        if (action.payload) {
          state.loading = false;
          state.hasErrors = false;
          state.house = action.payload.house;
        }
      })
      .addCase(fetchHouses.rejected, (state, action) => {
        state.loading = false;
        state.hasErrors = true;
      });
  },
});

export default houseSlice.reducer;

//thunk

export const fetchHouses = createAsyncThunk(
  "house/fetchHouses",
  async (_, ThunkAPI) => {
    try {
      const response = await axios.get(
        `https://anapioficeandfire.com/api/houses/`
      );
      return response.data;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error);
    }
  }
);
