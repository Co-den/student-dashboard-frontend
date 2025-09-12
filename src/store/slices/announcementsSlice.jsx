// src/store/slices/announcementsSlice.js
import { create } from "zustand";
import api from "../../api/api";

const initialState = {
  list: [],
  status: "idle",
  error: null,
  createStatus: "idle",
  updateStatus: "idle",
  deleteStatus: "idle",
};

const useAnnouncementsStore = create((set, get) => ({
  ...initialState,

  fetchAnnouncements: async () => {
    set({ status: "loading", error: null });
    try {
      const { data } = await api.get("https://student-dashboard-uah3.onrender.com/api/announcements");
      set({
        list: Array.isArray(data) ? data : data.items ?? [],
        status: "succeeded",
      });
    } catch (err) {
      set({
        status: "failed",
        error: err.response?.data || err.message,
      });
    }
  },

  createAnnouncement: async (payload) => {
    set({ createStatus: "loading", error: null });
    try {
      const { data } = await api.post("https://student-dashboard-uah3.onrender.com/api/announcements", payload);
      set((state) => ({
        list: [data, ...state.list],
        createStatus: "succeeded",
      }));
    } catch (err) {
      set({
        createStatus: "failed",
        error: err.response?.data || err.message,
      });
    }
  },

  updateAnnouncement: async ({ id, updates }) => {
    set({ updateStatus: "loading", error: null });
    try {
      const { data } = await api.put(`https://student-dashboard-uah3.onrender.com/api/announcements/${id}`, updates);
      set((state) => ({
        list: state.list.map((a) =>
          (a._id === data._id || a.id === data.id) ? data : a
        ),
        updateStatus: "succeeded",
      }));
    } catch (err) {
      set({
        updateStatus: "failed",
        error: err.response?.data || err.message,
      });
    }
  },

  deleteAnnouncement: async (id) => {
    set({ deleteStatus: "loading", error: null });
    try {
      await api.delete(`/announcements/${id}`);
      set((state) => ({
        list: state.list.filter((a) => (a._id || a.id) !== id),
        deleteStatus: "succeeded",
      }));
    } catch (err) {
      set({
        deleteStatus: "failed",
        error: err.response?.data || err.message,
      });
    }
  },

  clearAnnouncementsError: () => set({ error: null }),

  setAnnouncements: (announcements) =>
    set({ list: announcements, status: "succeeded" }),
}));

// Selectors (usage: const list = useAnnouncementsStore(s => s.list))
export default useAnnouncementsStore;
