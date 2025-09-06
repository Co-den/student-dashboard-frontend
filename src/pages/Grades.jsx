import React from "react";
import SimpleTable from "../components/SimpleTable";

const Grades = () => (
  <div className="kpi mb-4">
    <div className="grid grid-cols-4 gap-4 mb-6">
      <div className="bg-blue-600 rounded-2xl p-4 border border-blue-400">
        {" "}
        <div className="text-sm text-slate-300">Cumulative GPA</div>
        <div className="text-2xl text-white font-extrabold">3.64</div>
      </div>
      <div className="bg-blue-600 rounded-2xl p-4 border border-blue-400">
        {" "}
        <div className="text-sm text-slate-300">Term GPA</div>
        <div className="text-2xl text-white font-extrabold">3.82</div>
      </div>
      <div className="bg-blue-600 rounded-2xl p-4 border border-blue-400">
        {" "}
        <div className="text-sm text-slate-300">Credits</div>
        <div className="text-2xl text-white font-extrabold">84</div>
      </div>
      <div className="bg-blue-600 rounded-2xl p-4 border border-blue-400">
        {" "}
        <div className="text-sm text-slate-300">Standing</div>
        <div className="text-2xl text-white font-extrabold">Good</div>
      </div>
    </div>

    <div className="bg-blue-600 rounded-2xl p-4 border border-blue-400">
      <h2 className="font-bold text-white mb-3">Grades by Course</h2>
      <SimpleTable
        columns={["Course", "Assessment", "Weight", "Score", "Letter"]}
        rows={[
          ["DSA", "Midterm", "30%", "78", "B+"],
          ["DSA", "Project", "40%", "82", "A-"],
          ["Networks", "Midterm", "30%", "60", "C"],
        ]}
      />
    </div>
  </div>
);

export default Grades;
