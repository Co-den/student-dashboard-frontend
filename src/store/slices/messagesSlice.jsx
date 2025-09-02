import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

export const fetchMessages = createAsyncThunk("messages/fetch", async () => {
  const { data } = await api.get("/messages");
  return data;
});

const slice = createSlice({
  name: "messages",
  initialState: { list: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (b) => {
    b.addCase(fetchMessages.pending, (s) => {
      s.status = "loading";
    })
      .addCase(fetchMessages.fulfilled, (s, a) => {
        s.status = "succeeded";
        s.list = a.payload;
      })
      .addCase(fetchMessages.rejected, (s, a) => {
        s.status = "failed";
        s.error = a.error.message;
      });
  },
});
export default slice.reducer;
