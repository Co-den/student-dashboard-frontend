import React from "react";

const DeadlinesList = ({ deadlines }) => (
  <div className="bg-blue-600 rounded-2xl p-4 border border-blue-700">
    <div className="flex items-center justify-between mb-3">
      <h3 className="font-bold text-white">Upcoming Deadlines</h3>
      <span className="text-sm text-indigo-100">Next 7 days</span>
    </div>
    <ul className="space-y-3">
      {deadlines.map((d, i) => (
        <li key={i} className="p-3 bg-blue-600 rounded-lg">
          <div className="font-semibold text-white">{d.title}</div>
          <div className="text-sm text-indigo-100">
            Due: {d.due} • {d.note}
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default DeadlinesList;
