import { create } from "zustand";
import api from "../../api/api";

const useTimetablesStore = create((set) => ({
  list: [],
  status: "idle",
  error: null,

  fetchTimetable: async (userId) => {
    set({ status: "loading", error: null });
    try {
      const { data } = await api.get(`https://student-dashboard-uah3.onrender.com/api/timetable/${userId}`);
      set({ list: data, status: "succeeded" });
    } catch (error) {
      set({
        status: "failed",
        error: error?.message || "Failed to fetch timetable",
      });
    }
  },
}));

export default useTimetablesStore;
