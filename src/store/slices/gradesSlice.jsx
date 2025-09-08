// src/redux/slices/gradeSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// --- Async thunks ---
export const fetchGrades = createAsyncThunk(
  "https://student-dashboard-uah3.onrender.com/api/grades/fetchGrades",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("https://student-dashboard-uah3.onrender.com/api/grades");
      return res.data; // [{ course: {...}, score, grade, creditHours }]
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const addGrade = createAsyncThunk(
  "grades/addGrade",
  async (gradeData, { rejectWithValue }) => {
    try {
      const res = await axios.post("/grades", gradeData);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const updateGrade = createAsyncThunk(
  "grades/updateGrade",
  async ({ id, updates }, { rejectWithValue }) => {
    try {
      const res = await axios.put(`/grades/${id}`, updates);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const deleteGrade = createAsyncThunk(
  "grades/deleteGrade",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/grades/${id}`);
      return id;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// --- Initial state ---
const initialState = {
  items: [],
  gpa: 0,
  loading: false,
  error: null,
};

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

  return totalCredits ? (totalPoints / totalCredits).toFixed(2) : 0;
}

// --- Slice ---
const gradeSlice = createSlice({
  name: "grades",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch
      .addCase(fetchGrades.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGrades.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.gpa = calculateGPA(action.payload);
      })
      .addCase(fetchGrades.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Add
      .addCase(addGrade.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.gpa = calculateGPA(state.items);
      })

      // Update
      .addCase(updateGrade.fulfilled, (state, action) => {
        const idx = state.items.findIndex((g) => g._id === action.payload._id);
        if (idx !== -1) {
          state.items[idx] = action.payload;
        }
        state.gpa = calculateGPA(state.items);
      })

      // Delete
      .addCase(deleteGrade.fulfilled, (state, action) => {
        state.items = state.items.filter((g) => g._id !== action.payload);
        state.gpa = calculateGPA(state.items);
      });
  },
});

export default gradeSlice.reducer;
