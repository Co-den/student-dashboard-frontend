import React from "react";

const Settings = () => (
  <div className="grid lg:grid-cols-2 gap-6">
    <div className="bg-blue-600 rounded-2xl p-4 border border-blue-400">
      <h3 className="font-bold text-white">Profile</h3>
      <div className="mt-3 space-y-3">
        <div className="flex justify-between text-sm text-indigo-100">
          <span>Name</span>
          <strong>Jane Doe</strong>
        </div>
        <div className="flex justify-between text-sm text-indigo-100">
          <span>Email</span>
          <strong>jane@campus.edu</strong>
        </div>
      </div>
    </div>
    <div className="bg-blue-600 rounded-2xl p-4 border border-blue-400">
      <h3 className="font-bold text-white">Preferences</h3>
      <div className="mt-3 space-y-3">
        <div className="flex justify-between text-sm text-indigo-100">
          <span>Notifications</span>
          <strong>Enabled</strong>
        </div>
        <div className="flex justify-between text-sm text-indigo-100">
          <span>Time Zone</span>
          <strong>Africa/Lagos</strong>
        </div>
      </div>
    </div>
  </div>
);

export default Settings;
