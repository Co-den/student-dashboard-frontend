import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

export const fetchCourses = createAsyncThunk("courses/fetch", async () => {
  const { data } = await api.get("https://student-dashboard-uah3.onrender.com/api/courses", { withCredentials: true });
  return data;
});

const slice = createSlice({
  name: "courses",
  initialState: { list: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (b) => {
    b.addCase(fetchCourses.pending, (s) => {
      s.status = "loading";
    })
      .addCase(fetchCourses.fulfilled, (s, a) => {
        s.status = "succeeded";
        s.list = a.payload;
      })
      .addCase(fetchCourses.rejected, (s, a) => {
        s.status = "failed";
        s.error = a.error.message;
      });
  },
});
export default slice.reducer;
