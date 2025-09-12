import { create } from "zustand";
import axios from "axios";

const useFeesStore = create((set) => ({
  list: [],
  status: "idle",
  error: null,

  fetchFees: async (userId) => {
    set({ status: "loading", error: null });
    try {
      const { data } = await axios.get(`https://student-dashboard-uah3.onrender.com/api/fees/${userId}`);
      set({ list: data, status: "succeeded" });
    } catch (error) {
      set({
        status: "failed",
        error: error?.message || "Failed to fetch fees",
      });
    }
  },
}));

export default useFeesStore;
