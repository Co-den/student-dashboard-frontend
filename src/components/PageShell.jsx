import React, { Fragment } from "react";
import Topbar from "./Sidebar";

// ---------- PageShell ----------
const PageShell = ({ title, children, setIsOpen }) => (
  <div className="flex-1 min-h-screen bg-white text-slate-100">
    <Topbar title={title} setIsOpen={setIsOpen} />
    <main className="p-6 max-w-7xl mx-auto">{children}</main>
  </div>
);

export default PageShell;