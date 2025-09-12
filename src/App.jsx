import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Components
import { Sidebar, PageShell } from "./components/Sidebar";
import Overview from "./pages/Overview";
import Courses from "./pages/Courses";
import Timetable from "./pages/Timetable";
import Assignments from "./pages/Assignments";
import Grades from "./pages/Grades";
import Attendance from "./pages/Attendance";
import Fees from "./pages/Fees";
import Messages from "./pages/Messages";
import Settings from "./pages/Settings";
import Announcements from "./pages/Announcements";
import Guide from "./pages/Guide";
import Support from "./pages/Support";
import Login from "./pages/Login";
import Register from "./pages/Register";

import "./App.css";

// ---------- ProtectedRoute ----------
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("token");
  return isAuthenticated ? children : <Navigate to="/login" />;
};

// ---------- Layout Wrapper ----------
const Layout = ({ children }) => {
  const [isOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex min-h-screen bg-slate-900">
      <Sidebar isOpen={isOpen} setIsOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col">{children}</div>
    </div>
  );
};

// ---------- App ----------
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Dashboard Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout>
                <PageShell title="Overview">
                  <Overview />
                </PageShell>
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/courses"
          element={
            <ProtectedRoute>
              <Layout>
                <PageShell title="Courses">
                  <Courses />
                </PageShell>
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/timetable"
          element={
            <ProtectedRoute>
              <Layout>
                <PageShell title="Timetable">
                  <Timetable />
                </PageShell>
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/assignments"
          element={
            <ProtectedRoute>
              <Layout>
                <PageShell title="Assignments">
                  <Assignments />
                </PageShell>
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/grades"
          element={
            <ProtectedRoute>
              <Layout>
                <PageShell title="Grades">
                  <Grades />
                </PageShell>
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/attendance"
          element={
            <ProtectedRoute>
              <Layout>
                <PageShell title="Attendance">
                  <Attendance />
                </PageShell>
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/fees"
          element={
            <ProtectedRoute>
              <Layout>
                <PageShell title="Fees">
                  <Fees />
                </PageShell>
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/messages"
          element={
            <ProtectedRoute>
              <Layout>
                <PageShell title="Messages">
                  <Messages />
                </PageShell>
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Layout>
                <PageShell title="Settings">
                  <Settings />
                </PageShell>
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/announcements"
          element={
            <ProtectedRoute>
              <Layout>
                <PageShell title="Announcements">
                  <Announcements />
                </PageShell>
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/guide"
          element={
            <ProtectedRoute>
              <Layout>
                <PageShell title="Student Guide">
                  <Guide />
                </PageShell>
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/support"
          element={
            <ProtectedRoute>
              <Layout>
                <PageShell title="Support">
                  <Support />
                </PageShell>
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* Catch-all → redirect to dashboard */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
