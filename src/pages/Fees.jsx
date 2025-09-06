import React from "react";
import SimpleTable from "../components/SimpleTable";

const Fees = () => (
  <div className="bg-blue-600 rounded-2xl p-4 border border-blue-400">
    <h2 className="font-bold text-white mb-3">Payment History</h2>
    <SimpleTable
      columns={["Date", "Reference", "Amount", "Method", "Status"]}
      rows={[
        ["2025-08-01", "INV-1203", "₦120,000", "Card", "Paid"],
        ["2025-05-01", "INV-1107", "₦100,000", "Bank Transfer", "Paid"],
      ]}
    />
  </div>
);

export default Fees;
