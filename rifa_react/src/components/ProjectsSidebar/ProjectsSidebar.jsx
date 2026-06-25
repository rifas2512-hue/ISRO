import React from "react";
import { NavLink } from "react-router-dom";

const ProjectsSidebar = () => {
  const projectLinks = [
    { path: "/projects", label: "All Projects" },
    { path: "/projects/architecture", label: "Architecture" },
    { path: "/projects/interior", label: "Interior Design" },
    { path: "/projects/interior/residential", label: "Residential Interior" },
    { path: "/projects/interior/commercial", label: "Commercial Interior" },
    { path: "/projects/landscape", label: "Landscape Design" },
  ];

  return (
    <aside className="w-64 bg-gray-50 border-r border-gray-200 min-h-screen p-6 hidden md:block">
      <h3 className="text-lg font-bold text-gray-800 mb-6">Projects</h3>
      <nav className="space-y-2">
        {projectLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md transition-colors ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default ProjectsSidebar;