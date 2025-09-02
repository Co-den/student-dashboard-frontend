import React from "react";

const SimpleTable = ({ columns, rows }) => (
  <div className="overflow-auto rounded-2xl border border-blue-400 bg-blue-600">
    <table className="w-full min-w-[720px]">
      <thead className="bg-blue-400">
        <tr>
          {columns.map((c) => (
            <th key={c} className="text-left p-3 text-sm text-indigo-100">
              {c}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i} className="border-t border-blue-400">
            {r.map((cell, j) => (
              <td key={j} className="p-3 text-sm text-indigo-100">
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
