import { create } from "zustand";
import api from "../../api/api";

const useFeesStore = create((set) => ({
  list: [],
  status: "idle",
  error: null,

  fetchFees: async (userId) => {
    set({ status: "loading", error: null });
    try {
      const { data } = await api.get(`/fees/${userId}`);
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
