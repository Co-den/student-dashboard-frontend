import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

export const fetchFees = createAsyncThunk(
  "https://student-dashboard-uah3.onrender.com/api/fees/fetch",
  async (_, { getState }) => {
    const id = getState().auth.user?._id;
    const { data } = await api.get(`/fees/${id}`);
    return data; // [{ amount, status, paidAt }]
  }
);

const slice = createSlice({
  name: "fees",
  initialState: { list: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (b) => {
    b.addCase(fetchFees.pending, (s) => {
      s.status = "loading";
    })
      .addCase(fetchFees.fulfilled, (s, a) => {
        s.status = "succeeded";
        s.list = a.payload;
      })
      .addCase(fetchFees.rejected, (s, a) => {
        s.status = "failed";
        s.error = a.error.message;
      });
  },
});
export default slice.reducer;
