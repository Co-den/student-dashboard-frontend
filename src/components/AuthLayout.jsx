import React from "react";

const AuthLayout = ({ title, children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-900">
      <div className="bg-blue-600 p-8 rounded-xl w-96 space-y-4 shadow-lg">
        <h2 className="text-white text-2xl font-bold text-center">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
