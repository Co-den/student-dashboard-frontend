import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

export const fetchAssignments = createAsyncThunk(
  "https://student-dashboard-uah3.onrender.com/api/assignments",
  async () => {
    const { data } = await api.get("https://student-dashboard-uah3.onrender.com/api/assignments");
    return data;
  }
);

const slice = createSlice({
  name: "assignments",
  initialState: { list: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (b) => {
    b.addCase(fetchAssignments.pending, (s) => {
      s.status = "loading";
    })
      .addCase(fetchAssignments.fulfilled, (s, a) => {
        s.status = "succeeded";
        s.list = a.payload;
      })
      .addCase(fetchAssignments.rejected, (s, a) => {
        s.status = "failed";
        s.error = a.error.message;
      });
  },
});
export default slice.reducer;
