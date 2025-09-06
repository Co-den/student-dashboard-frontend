import React from "react";
import SimpleTable from "../components/SimpleTable";

const Assignments = () => (
  <div className="bg-blue-600 rounded-2xl p-4 border border-blue-400">
    <h2 className="font-bold text-white mb-3">Upcoming Assignments</h2>
    <SimpleTable
      columns={["Course", "Title", "Due", "Weight", "Status"]}
      rows={[
        ["DSA", "Project Milestone", "2025-08-28", "20%", "In Progress"],
        ["Networks", "Quiz 2", "2025-08-27", "10%", "Ready"],
      ]}
    />
  </div>
);

export default Assignments;
