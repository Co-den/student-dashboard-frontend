import React from "react";


const Announcements = () => (
  
    <div className="space-y-4">
      <div className="bg-blue-600 rounded-2xl text-white p-4 border border-blue-400">
        {" "}
        <strong>Library Hours Extended</strong>
        <p className="text-sm text-indigo-100">
          Main library open till 10pm on weekdays.
        </p>
      </div>
      <div className="bg-blue-600 rounded-2xl text-white p-4 border border-blue-400">
        {" "}
        <strong>Hackathon</strong>
        <p className="text-sm text-indigo-100">
          Register by Aug 30. Teams of 3–5.
        </p>
      </div>
    </div>
);

export default Announcements;
