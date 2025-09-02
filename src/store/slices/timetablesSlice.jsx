import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

export const fetchTimetable = createAsyncThunk(
  "timetable/fetch",
  async (_, { getState }) => {
    const id = getState().auth.user?._id;
    const { data } = await api.get(`/timetable/${id}`);
    return data;
  }
);

const slice = createSlice({
  name: "timetable",
  initialState: { list: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (b) => {
    b.addCase(fetchTimetable.pending, (s) => {
      s.status = "loading";
    })
      .addCase(fetchTimetable.fulfilled, (s, a) => {
        s.status = "succeeded";
        s.list = a.payload;
      })
      .addCase(fetchTimetable.rejected, (s, a) => {
        s.status = "failed";
        s.error = a.error.message;
      });
  },
});
export default slice.reducer;
