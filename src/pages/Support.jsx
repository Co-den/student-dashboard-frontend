import React from "react";
import PageShell from "../components/PageShell";


const Support = () => (
  <PageShell title="Support">
    <div className="grid lg:grid-cols-2 gap-6">
      <div className="bg-blue-600 rounded-2xl p-4 border border-blue-400"> <h3 className="font-bold text-white">Contact</h3><div className="mt-3 text-sm text-indigo-100">help@campus.edu<br/>+234 800 000 0000</div></div>
      <div className="bg-blue-600 rounded-2xl p-4 border border-blue-400"> <h3 className="font-bold text-white">FAQ</h3><div className="mt-3 text-sm text-indigo-100">How to reset password? Use Settings → Security.</div></div>
    </div>
  </PageShell>
);

export default Support;