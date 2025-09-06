import React from "react";

const SimpleTable = ({ columns, rows }) => (
  <div className="overflow-x-auto rounded-2xl border border-slate-700 bg-blue-600">
    <table className="w-full min-w-[500px] sm:min-w-[720px]">
      <thead className="bg-slate-900/40 sticky top-0">
        <tr>
          {columns.map((c) => (
            <th
              key={c}
              className="text-left px-3 py-2 text-xs sm:text-sm text-slate-300 whitespace-nowrap"
            >
              {c}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i} className="border-t border-slate-700">
            {r.map((cell, j) => (
              <td
                key={j}
                className="px-3 py-2 text-xs sm:text-sm text-slate-200 break-words"
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default SimpleTable;
