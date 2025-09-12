import { create } from "zustand";
import axios from "axios";

const useTimetablesStore = create((set) => ({
  list: [],
  status: "idle",
  error: null,

  fetchTimetable: async (userId) => {
    set({ status: "loading", error: null });
    try {
      const { data } = await axios.get(`https://student-dashboard-uah3.onrender.com/api/timetable/${userId}`);
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
