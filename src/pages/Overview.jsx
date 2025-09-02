import React from "react";
import PageShell from "../components/PageShell";
import KPIGrid from "../components/KPIGrid";
import SimpleTable from "../components/SimpleTable";
import DeadlinesList from "../components/DeadlinesList";

const Overview = () => {
  const kpis = [
    { label: "Current GPA", value: "3.72", delta: 1, deltaText: "▲ +0.12 this term" },
    { label: "Credits", value: "84", delta: 1, deltaText: "▲ +12" },
    { label: "Attendance", value: "96%", delta: 1, deltaText: "▲ +2%" },
    { label: "Fees Due", value: "₦0", delta: 0, deltaText: "— cleared" },
  ];

  const timetableCols = ["Day", "08:00", "10:00", "12:00", "14:00", "16:00"];
  const timetableRows = [
    ["Mon", "Data Structures (B101)", "", "Discrete Math (D204)", "", "Algorithms Lab (L2)"],
    ["Tue", "", "Web Engineering (C303)", "", "Mobile Dev (E112)", ""],
    ["Wed", "Operating Systems (A220)", "", "Linear Algebra (M110)", "", "Seminar"],
  ];

  const deadlines = [
    { title: "DSA — Project Milestone", due: "2025-08-28", note: "Submit Git repo" },
    { title: "Networks — Quiz 2", due: "2025-08-27", note: "Online" },
  ];

  return (
    <PageShell title="Overview">
      <KPIGrid items={kpis} />

      <div className="grid lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2">
          <div className="bg-blue-600 rounded-2xl p-4 border border-slate-700">
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-bold text-white text-lg">This Week's Timetable</h2>
              <span className="text-sm text-indigo-100">Mon–Fri</span>
            </div>
            <SimpleTable columns={timetableCols} rows={timetableRows} />
          </div>
        </div>

        <DeadlinesList deadlines={deadlines} />
      </div>
    </PageShell>
  );
};

export default Overview;
