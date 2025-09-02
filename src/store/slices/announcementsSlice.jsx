// src/store/slices/announcementsSlice.js
import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import api from "../../api/api";

/**
 * Thunks
 * - fetchAnnouncements: GET /announcements
 * - createAnnouncement: POST /announcements
 * - updateAnnouncement: PUT /announcements/:id
 * - deleteAnnouncement: DELETE /announcements/:id
 *
 * Each thunk returns data (or id for delete) and uses rejectWithValue for better error payloads.
 */

export const fetchAnnouncements = createAsyncThunk(
  "announcements/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/announcements");
      // Expect data to be an array: [{...}, ...]
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const createAnnouncement = createAsyncThunk(
  "announcements/create",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/announcements", payload);
      return data; // created announcement object
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const updateAnnouncement = createAsyncThunk(
  "announcements/update",
  async ({ id, updates }, { rejectWithValue }) => {
    try {
      const { data } = await api.put(`/announcements/${id}`, updates);
      return data; // updated announcement object
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const deleteAnnouncement = createAsyncThunk(
  "announcements/delete",
  async (id, { rejectWithValue }) => {
    try {
      await api.delete(`/announcements/${id}`);
      return id; // return deleted id so reducer can remove it
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

/**
 * Slice
 */
const slice = createSlice({
  name: "announcements",
  initialState: {
    list: [],
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    createStatus: "idle",
    updateStatus: "idle",
    deleteStatus: "idle",
  },
  reducers: {
    // local-only helpers if needed
    clearAnnouncementsError(state) {
      state.error = null;
    },
    // replace full list (handy for WebSocket-sync or admin bulk update)
    setAnnouncements(state, action) {
      state.list = action.payload;
      state.status = "succeeded";
    },
  },
  extraReducers: (builder) => {
    // fetch
    builder
      .addCase(fetchAnnouncements.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchAnnouncements.fulfilled, (state, action) => {
        state.status = "succeeded";
        // normalize if backend returns {items, meta} or just array — handle both
        state.list = Array.isArray(action.payload)
          ? action.payload
          : action.payload.items ?? [];
      })
      .addCase(fetchAnnouncements.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
      })

      // create
      .addCase(createAnnouncement.pending, (state) => {
        state.createStatus = "loading";
        state.error = null;
      })
      .addCase(createAnnouncement.fulfilled, (state, action) => {
        state.createStatus = "succeeded";
        // prepend so newest appears first
        state.list.unshift(action.payload);
      })
      .addCase(createAnnouncement.rejected, (state, action) => {
        state.createStatus = "failed";
        state.error = action.payload || action.error.message;
      })

      // update
      .addCase(updateAnnouncement.pending, (state) => {
        state.updateStatus = "loading";
        state.error = null;
      })
      .addCase(updateAnnouncement.fulfilled, (state, action) => {
        state.updateStatus = "succeeded";
        const updated = action.payload;
        const idx = state.list.findIndex(
          (a) => a._id === updated._id || a.id === updated.id
        );
        if (idx !== -1) state.list[idx] = updated;
      })
      .addCase(updateAnnouncement.rejected, (state, action) => {
        state.updateStatus = "failed";
        state.error = action.payload || action.error.message;
      })

      // delete
      .addCase(deleteAnnouncement.pending, (state) => {
        state.deleteStatus = "loading";
        state.error = null;
      })
      .addCase(deleteAnnouncement.fulfilled, (state, action) => {
        state.deleteStatus = "succeeded";
        const id = action.payload;
        state.list = state.list.filter((a) => (a._id || a.id) !== id);
      })
      .addCase(deleteAnnouncement.rejected, (state, action) => {
        state.deleteStatus = "failed";
        state.error = action.payload || action.error.message;
      });
  },
});

export const { clearAnnouncementsError, setAnnouncements } = slice.actions;
export default slice.reducer;

/**
 * Selectors
 */
export const selectAnnouncementsState = (state) => state.announcements;

export const selectAllAnnouncements = createSelector(
  selectAnnouncementsState,
  (s) => s.list
);

export const selectAnnouncementsById = (id) =>
  createSelector(selectAllAnnouncements, (list) =>
    list.find((a) => (a._id || a.id) === id)
  );

export const selectAnnouncementsStatus = createSelector(
  selectAnnouncementsState,
  (s) => ({ status: s.status, error: s.error })
);
