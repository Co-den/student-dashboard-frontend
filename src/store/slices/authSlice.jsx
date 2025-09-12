import { create } from "zustand";
import axios from "axios";

// Dynamically set API URL based on env
const API_URL = "https://student-dashboard-uah3.onrender.com/api/auth";

axios.defaults.withCredentials = true;

const useAuthStore = create((set) => ({
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  isAuthenticated: !!localStorage.getItem("user"),
  error: null,
  isLoading: false,

  // Register
  register: async (data) => {
    set({ isLoading: true, error: null });
    try {
      const res = await axios.post(`${API_URL}/register`, data);
      localStorage.setItem("user", JSON.stringify(res.data));
      set({
        user: res.data,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      set({
        error: error.response?.data?.msg || "Error registering",
        isLoading: false,
      });
      throw error;
    }
  },

  // Login
  login: async (data) => {
    set({ isLoading: true, error: null });
    try {
      const res = await axios.post(`${API_URL}/login`, data);
      localStorage.setItem("user", JSON.stringify(res.data));
      set({
        user: res.data,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      set({
        error: error.response?.data?.msg || "Error logging in",
        isLoading: false,
      });
      throw error;
    }
  },

  // Logout
  logout: async () => {
    localStorage.removeItem("user");
    set({
      user: null,
      isAuthenticated: false,
      error: null,
      isLoading: false,
    });
  },
}));

export default useAuthStore;
