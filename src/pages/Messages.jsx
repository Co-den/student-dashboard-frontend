import React from "react";

const Messages = () => (
  <div className="grid lg:grid-cols-3 gap-6">
    <div className="lg:col-span-1 bg-blue-600 rounded-2xl p-4 border border-blue-400">
      <h3 className="font-bold text-white mb-3">Inbox</h3>
      <ul className="space-y-3">
        <li className="p-3 rounded text-white bg-blue-400">
          Prof. Ahmed — Quiz 2 details
        </li>
        <li className="p-3 rounded text-white bg-blue-400">
          Student Affairs — ID Card collection
        </li>
      </ul>
    </div>
    <div className="lg:col-span-2 bg-blue-600 rounded-2xl p-4 border border-blue-400">
      <h3 className="font-bold text-white mb-3">Thread</h3>
      <div className="space-y-4">
        <div className="bg-blue-400 text-white p-3 rounded">
          Ahmed: Focus on routing protocols.
        </div>
        <div className="bg-blue-400 text-white p-3 rounded">You: Thanks!</div>
      </div>
    </div>
  </div>
);

export default Messages;
