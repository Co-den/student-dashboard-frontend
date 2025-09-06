import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

const App = () => {
  const [isOpen, setIsOpen] = useState(false); // 👈 sidebar state

  return (
    <Router>
      <div className="flex">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

        <div className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <PageShell title="Overview" setIsOpen={setIsOpen}>
                  <Overview />
                </PageShell>
              }
            />
            <Route
              path="/courses"
              element={
                <PageShell title="Courses" setIsOpen={setIsOpen}>
                  <Courses />
                </PageShell>
              }
            />
            <Route
              path="/timetable"
              element={
                <PageShell title="Timetable" setIsOpen={setIsOpen}>
                  <Timetable />
                </PageShell>
              }
            />
            <Route
              path="/assignments"
              element={
                <PageShell title="Assignments" setIsOpen={setIsOpen}>
                  <Assignments />
                </PageShell>
              }
            />
            <Route
              path="/grades"
              element={
                <PageShell title="Grades" setIsOpen={setIsOpen}>
                  <Grades />
                </PageShell>
              }
            />
            <Route
              path="/attendance"
              element={
                <PageShell title="Attendance" setIsOpen={setIsOpen}>
                  <Attendance />
                </PageShell>
              }
            />
            <Route
              path="/fees"
              element={
                <PageShell title="Fees" setIsOpen={setIsOpen}>
                  <Fees />
                </PageShell>
              }
            />
            <Route
              path="/messages"
              element={
                <PageShell title="Messages" setIsOpen={setIsOpen}>
                  <Messages />
                </PageShell>
              }
            />
            <Route
              path="/settings"
              element={
                <PageShell title="Settings" setIsOpen={setIsOpen}>
                  <Settings />
                </PageShell>
              }
            />
            <Route
              path="/announcements"
              element={
                <PageShell title="Announcements" setIsOpen={setIsOpen}>
                  <Announcements />
                </PageShell>
              }
            />
            <Route
              path="/guide"
              element={
                <PageShell title="Guide" setIsOpen={setIsOpen}>
                  <Guide />
                </PageShell>
              }
            />
            <Route
              path="/support"
              element={
                <PageShell title="Support" setIsOpen={setIsOpen}>
                  <Support />
                </PageShell>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
