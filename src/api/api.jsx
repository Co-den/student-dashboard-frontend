// src/services/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "https://student-dashboard-uah3.onrender.com", // change to your backend URL
});

// Attach token automatically if available
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
