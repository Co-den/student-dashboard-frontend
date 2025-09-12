import { create } from "zustand";
import api from "../../api/api";

const useMessagesStore = create((set) => ({
  list: [],
  status: "idle",
  error: null,

  fetchMessages: async () => {
    set({ status: "loading", error: null });
    try {
      const { data } = await api.get("https://student-dashboard-uah3.onrender.com/api/messages");
      set({ list: data, status: "succeeded" });
    } catch (error) {
      set({
        status: "failed",
        error: error?.message || "Failed to fetch messages",
      });
    }
  },
}));

export default useMessagesStore;
