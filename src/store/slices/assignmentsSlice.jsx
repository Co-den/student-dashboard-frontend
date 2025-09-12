import { create } from "zustand";
import api from "../../api/api";

const useAssignmentsStore = create((set) => ({
  list: [],
  status: "idle",
  error: null,

  fetchAssignments: async () => {
    set({ status: "loading", error: null });
    try {
      const { data } = await api.get("https://student-dashboard-uah3.onrender.com/api/assignments");
      set({ list: data, status: "succeeded" });
    } catch (error) {
      set({
        status: "failed",
        error: error?.message || "Failed to fetch assignments",
      });
    }
  },
}));

export default useAssignmentsStore;
