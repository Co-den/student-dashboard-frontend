import { configureStore } from "@reduxjs/toolkit";
import authStore from "../store/slices/authSlice";
import coursesReducer from "./slices/coursesSlice";
import assignmentsReducer from "./slices/assignmentsSlice";
import gradesReducer from '../store/slices/gradesSlice';
import messagesReducer from "./slices/messagesSlice";
import feesReducer from "./slices/feesSlice";
import timetableReducer from "./slices/timetablesSlice";
import announcementsReducer from "./slices/announcementsSlice";

const store = configureStore({
  reducer: {
    auth: authStore,
    courses: coursesReducer,
    assignments: assignmentsReducer,
    grades: gradesReducer,
    messages: messagesReducer,
    fees: feesReducer,
    timetable: timetableReducer,
    announcements: announcementsReducer,
  },
});

export default store;
