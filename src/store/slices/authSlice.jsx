import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

const savedToken = localStorage.getItem("token");

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    const { data } = await api.post("/auth/login", { email, password });
    return data; // { token, user }
  }
);

export const fetchProfile = createAsyncThunk("auth/profile", async () => {
  const { data } = await api.get("/auth/profile");
  return data; // user
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: savedToken || null,
    status: "idle",
    error: null,
  },
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    },
    setToken(state, action) {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (s) => {
        s.status = "loading";
        s.error = null;
      })
      .addCase(login.fulfilled, (s, a) => {
        s.status = "succeeded";
        s.user = a.payload.user;
        s.token = a.payload.token;
        localStorage.setItem("token", a.payload.token);
      })
      .addCase(login.rejected, (s, a) => {
        s.status = "failed";
        s.error = a.error.message;
      })
      .addCase(fetchProfile.fulfilled, (s, a) => {
        s.user = a.payload;
      });
  },
});

export const { logout, setToken } = authSlice.actions;
export default authSlice.reducer;
