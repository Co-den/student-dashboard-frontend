import { create } from "zustand";
import axios from "axios";

const useCoursesStore = create((set) => ({
  list: [],
  status: "idle",
  error: null,

  fetchCourses: async () => {
    set({ status: "loading", error: null });
    try {
      const { data } = await axios.get(
        "https://student-dashboard-uah3.onrender.com/api/courses",
        { withCredentials: true }
      );
      set({ list: data, status: "succeeded" });
    } catch (error) {
      set({
        status: "failed",
        error: error?.message || "Failed to fetch courses",
      });
    }
  },
}));

export default useCoursesStore;