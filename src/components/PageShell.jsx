import React from "react";

/**
 * PageShell
 * Provides a consistent page layout with:
 * - Sticky topbar (with title, breadcrumb, optional actions, avatar)
 * - Centered content wrapper
 * - Max width + responsive padding
 */
export default function PageShell({ title, breadcrumb, actions, children }) {
  return (
    <div className="min-h-screen flex flex-col bg-indigo-50">
      {/* Topbar */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-14">
          <div className="flex items-center space-x-4">
            {breadcrumb ? (
              <nav className="flex items-center space-x-2 text-sm text-gray-500" aria-label="Breadcrumb">
                {breadcrumb.map((item, idx) => (
                  <span key={idx} className="flex items-center">
                    {item.to ? (
                      <a href={item.to} className="hover:text-gray-700">
                        {item.label}
                      </a>
                    ) : (
                      <span className="text-gray-700">{item.label}</span>
                    )}
                    {idx < breadcrumb.length - 1 && <span className="mx-2">/</span>}
                  </span>
                ))}
              </nav>
            ) : (
              <h1 className="text-lg font-semibold text-gray-900">{title}</h1>
            )}
          </div>
          <div className="flex items-center space-x-3">
            {actions}
            {/* Avatar placeholder */}
            <div className="w-8 h-8 rounded-full bg-gray-200" />
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {children}
      </main>
    </div>
  );
}
