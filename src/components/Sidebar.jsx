import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

// ---------- SidebarLink ----------
const SidebarLink = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm ${
        isActive
          ? "bg-gradient-to-r from-blue-600/20 to-transparent text-white"
          : "text-slate-300 hover:bg-white/5"
      }`
    }
  >
    {children}
  </NavLink>
);

// ---------- Sidebar ----------
export const Sidebar = ({ isOpen, setIsOpen }) => (
  <aside
    className={`fixed md:static z-40 top-0 left-0 h-full w-64 p-6 bg-indigo-800 text-indigo-800 transition-transform duration-300 ${
      isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
    }`}
  >
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

// ---------- Topbar ----------
const Topbar = ({ title, setIsOpen }) => (
  <header className="flex items-center justify-between gap-4 p-4 bg-slate-800/60 backdrop-blur sticky top-0 z-30">
    <div className="flex items-center gap-4">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="md:hidden p-2 rounded-lg bg-white/5"
      >
        ☰
      </button>
      <h1 className="text-xl font-extrabold text-white">{title}</h1>
    </div>

    <div className="flex items-center gap-3">
      <input
        className="hidden sm:inline-block bg-slate-700/40 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-200 placeholder-slate-400"
        placeholder="Search courses, instructors..."
      />
      <button className="px-3 py-2 rounded-lg bg-slate-700 border border-slate-600 text-white text-sm">
        Export
      </button>

      {/* Avatar Dropdown */}
      <Menu as="div" className="relative">
        <div>
          <Menu.Button className="flex items-center gap-2 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 shadow-inner focus:outline-none">
            <ChevronDownIcon className="w-4 h-4 text-white absolute bottom-0 right-0 translate-x-1 translate-y-1 bg-blue-400 rounded-full" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-48 rounded-lg bg-slate-800 border border-slate-700 shadow-lg focus:outline-none">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-slate-700" : ""
                  } block w-full text-left px-4 py-2 text-sm text-white`}
                >
                  Profile
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-slate-700" : ""
                  } block w-full text-left px-4 py-2 text-sm text-red-400`}
                >
                  Logout
                </button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  </header>
);


