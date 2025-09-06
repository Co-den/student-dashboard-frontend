import React from "react";

const SimpleTable = ({ columns, rows }) => (
  <div className="overflow-auto rounded-2xl border border-slate-700 bg-blue-600">
    <table className="w-full min-w-[720px]">
      <thead className="bg-slate-900/40 sticky top-0">
        <tr>
          {columns.map((c) => (
            <th key={c} className="text-left p-3 text-sm text-slate-300">
              {c}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i} className="border-t border-slate-700">
            {r.map((cell, j) => (
              <td key={j} className="p-3 text-sm text-slate-200">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Attendance = () => (
  <div className="grid lg:grid-cols-2 gap-6">
    <div className="bg-blue-600 rounded-2xl p-4 border border-blue-400">
      <h2 className="font-bold text-white mb-3">Summary</h2>
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-blue-400 rounded p-3">
          {" "}
          <div className="text-sm text-indigo-100">Overall</div>
          <div className="text-xl text-white font-bold">96%</div>
        </div>
        <div className="bg-blue-400 rounded p-3">
          {" "}
          <div className="text-sm text-indigo-100">DSA</div>
          <div className="text-xl text-white font-bold">92%</div>
        </div>
        <div className="bg-blue-400 rounded p-3">
          {" "}
          <div className="text-sm text-indigo-100">Networks</div>
          <div className="text-xl text-white font-bold">88%</div>
        </div>
      </div>
    </div>

    <div className="bg-blue-600 rounded-2xl p-4 border border-blue-400">
      <h2 className="font-bold text-white mb-3">Daily Log</h2>
      <SimpleTable
        columns={["Date", "Course", "Session", "Status"]}
        rows={[
          ["2025-08-22", "DSA", "Lecture", "Present"],
          ["2025-08-21", "Networks", "Lecture", "Late"],
          ["2025-08-20", "Linear Algebra", "Tutorial", "Absent"],
        ]}
      />
    </div>
  </div>
);

export default Attendance;
