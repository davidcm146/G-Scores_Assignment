import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-gradient-to-b rounded-md from-yellow-400 via-green-400 to-blue-600 text-black w-64 p-6 h-screen flex-shrink-0">
      <h2 className="text-lg font-bold mb-4">Menu</h2>
      <nav>
        <ul className="space-y-4">
          <li><NavLink to="/" className="hover:text-blue-800">Dashboard</NavLink></li>
          <li><NavLink to="/searchscores" className="hover:text-blue-800">Search Scores</NavLink></li>
          <li><NavLink to="/reports" className="hover:text-blue-800">Reports</NavLink></li>
          <li><NavLink to="/top10students" className="hover:text-blue-800">Top 10 Students</NavLink></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
