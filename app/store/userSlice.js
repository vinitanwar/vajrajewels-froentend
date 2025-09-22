import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseurl } from "../components/utils/apis";
import axios from "axios";

// Async thunk to get logged in user
export const getUser = createAsyncThunk(
  "user/get",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseurl}/user/get`, {
        withCredentials: true, // include cookies
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to fetch user"
      );
    }
  }
);






const userSlice = createSlice({
  name: "user",
  initialState: {
    info: null,       
    isLoading: false,
    isError: false,
    error: "",
  },

  extraReducers: (builder) => {
    builder 
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.info = action.payload.user || action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export default userSlice.reducer;
