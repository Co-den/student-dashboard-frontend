import React from "react";
import SimpleTable from "../components/SimpleTable";

const Timetable = () => (
  <div className="p-3">
    <div className="bg-blue-600 rounded-2xl p-4 border border-blue-400">
      <h2 className="font-bold text-white mb-3">Weekly Grid</h2>
      <SimpleTable
        columns={["Day", "08:00", "10:00", "12:00", "14:00", "16:00"]}
        rows={[
          [
            "Mon",
            "Data Structures (B101)",
            "",
            "Discrete Math (D204)",
            "",
            "Algorithms Lab (L2)",
          ],
          ["Tue", "", "Web Engineering (C303)", "", "Mobile Dev (E112)", ""],
          [
            "Wed",
            "Operating Systems (A220)",
            "",
            "Linear Algebra (M110)",
            "",
            "Seminar",
          ],
          [
            "Thu",
            "",
            "Computer Networks (N410)",
            "",
            "UI/UX Studio (S210)",
            "",
          ],
          ["Fri", "Entrepreneurship (H105)", "", "", "Capstone Workshop", ""],
        ]}
      />
    </div>
  </div>
);

export default Timetable;
