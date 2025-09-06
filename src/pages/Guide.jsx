import React from "react";

const Guide = () => (
  <div className="space-y-4">
    <div className="bg-blue-600 rounded-2xl p-4 border border-blue-400">
      {" "}
      <h3 className="font-bold text-white">Getting Started</h3>
      <p className="text-sm text-indigo-100">
        Orientation, campus map, and resources.
      </p>
    </div>
    <div className="bg-blue-600 rounded-2xl p-4 border border-blue-400">
      {" "}
      <h3 className="font-bold text-white">Policies</h3>
      <ul className="text-sm text-indigo-100 mt-2 space-y-1">
        <li>Attendance and grading</li>
        <li>Academic integrity</li>
      </ul>
    </div>
  </div>
);

export default Guide;
