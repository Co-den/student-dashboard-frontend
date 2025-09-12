// src/redux/slices/gradeSlice.js
import { create } from "zustand";
import axios from "axios";

// --- Helper GPA calc ---
function calculateGPA(grades) {
  if (!grades.length) return 0;
  let totalPoints = 0;
  let totalCredits = 0;

  grades.forEach(({ score, creditHours }) => {
    let point = 0;
    if (score >= 90) point = 4;
    else if (score >= 80) point = 3;
    else if (score >= 70) point = 2;
    else if (score >= 60) point = 1;

    totalPoints += point * (creditHours || 1);
    totalCredits += creditHours || 1;
  });

  return totalCredits ? Number((totalPoints / totalCredits).toFixed(2)) : 0;
}

const useGradesStore = create((set, get) => ({
  items: [],
  gpa: 0,
  loading: false,
  error: null,

  fetchGrades: async () => {
    set({ loading: true, error: null });
    try {
      const res = await axios.get("https://student-dashboard-uah3.onrender.com/api/grades");
      set({
        items: res.data,
        gpa: calculateGPA(res.data),
        loading: false,
      });
    } catch (err) {
      set({
        loading: false,
        error: err.response?.data?.message || err.message,
      });
    }
  },

  addGrade: async (gradeData) => {
    try {
      const res = await axios.post("/grades", gradeData);
      set((state) => {
        const newItems = [...state.items, res.data];
        return {
          items: newItems,
          gpa: calculateGPA(newItems),
        };
      });
    } catch (err) {
      set({ error: err.response?.data?.message || err.message });
    }
  },

  updateGrade: async ({ id, updates }) => {
    try {
      const res = await axios.put(`/grades/${id}`, updates);
      set((state) => {
        const newItems = state.items.map((g) =>
          g._id === res.data._id ? res.data : g
        );
        return {
          items: newItems,
          gpa: calculateGPA(newItems),
        };
      });
    } catch (err) {
      set({ error: err.response?.data?.message || err.message });
    }
  },

  deleteGrade: async (id) => {
    try {
      await axios.delete(`/grades/${id}`);
      set((state) => {
        const newItems = state.items.filter((g) => g._id !== id);
        return {
          items: newItems,
          gpa: calculateGPA(newItems),
        };
      });
    } catch (err) {
      set({ error: err.response?.data?.message || err.message });
    }
  },

  clearError: () => set({ error: null }),
}));

export default useGradesStore;
