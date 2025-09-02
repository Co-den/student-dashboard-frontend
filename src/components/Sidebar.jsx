import React from "react";
import { NavLink } from "react-router-dom";



const SidebarLink = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm ${
        isActive ? "bg-gradient-to-r from-blue-600/20 to-transparent text-white" : "text-slate-300 hover:bg-white/5"
      }`
    }
  >
    {children}
  </NavLink>
);

// ---------- Layout ----------
const Sidebar = () => (
  <aside className="hidden md:flex md:flex-col w-64 p-6 bg-indigo-800 text-indigo-800 min-h-screen sticky top-0">
    <div className="flex items-center gap-3 font-bold text-white text-lg">
      <span className="w-3 h-3 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 shadow-md" />
      CampusOne
    </div>

    <nav className="mt-8 flex-1 flex flex-col gap-1">
      <SidebarLink to="/">🏠 Overview</SidebarLink>
      <SidebarLink to="/courses">📚 Courses</SidebarLink>
      <SidebarLink to="/timetable">🗓️ Timetable</SidebarLink>
      <SidebarLink to="/assignments">📝 Assignments</SidebarLink>
      <SidebarLink to="/grades">🎓 Grades</SidebarLink>
      <SidebarLink to="/attendance">✅ Attendance</SidebarLink>
      <SidebarLink to="/fees">💳 Fees</SidebarLink>
      <SidebarLink to="/messages">✉️ Messages</SidebarLink>
      <SidebarLink to="/settings">⚙️ Settings</SidebarLink>
    </nav>

    <div className="mt-auto pt-4 border-t border-slate-800">
      <SidebarLink to="/announcements">📣 Announcements</SidebarLink>
      <SidebarLink to="/guide">🧭 Student Guide</SidebarLink>
      <SidebarLink to="/support">🧑‍💼 Support</SidebarLink>
    </div>
  </aside>
);

const Topbar = ({ title }) => (
  <header className="flex items-center justify-between gap-4 p-4 bg-slate-800/60 backdrop-blur sticky top-0 z-10">
    <div className="flex items-center gap-4">
      <button className="md:hidden p-2 rounded-lg bg-white/5">☰</button>
      <h1 className="text-xl font-extrabold text-white">{title}</h1>
    </div>
    <div className="flex items-center gap-3">
      <input className="hidden sm:inline-block bg-slate-700/40 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-200 placeholder-slate-400" placeholder="Search courses, instructors..." />
      <button className="px-3 py-2 rounded-lg bg-slate-700 border border-slate-600 text-white text-sm">Export</button>
      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 shadow-inner" />
    </div>
  </header>
);

const PageShell = ({ title, children }) => (
  <div className="flex-1 min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-slate-100">
    <Topbar title={title} />
    <main className="p-6 max-w-7xl mx-auto">{children}</main>
  </div>
);

// ---------- Demo content components ----------
const KPIGrid = ({ items }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
    {items.map((it) => (
      <div key={it.label} className="bg-slate-800 border border-slate-700 rounded-2xl p-4 shadow">
        <div className="text-sm text-slate-300">{it.label}</div>
        <div className="text-2xl font-extrabold mt-2">{it.value}</div>
        <div className={`mt-2 text-sm ${it.delta > 0 ? "text-green-400" : "text-red-400"}`}>{it.deltaText}</div>
      </div>
    ))}
  </div>
);

export default Sidebar;