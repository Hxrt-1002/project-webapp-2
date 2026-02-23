import React from "react";
import { Link } from "react-router-dom";

const SettingsSidebar = ({ active, setActive }) => {
  return (
    <div className="w-64 bg-black text-white flex flex-col">
      <h2 className="text-2xl font-bold p-5 border-b border-gray-700 text-red-500">
        <Link to="/">
          F1 Settings
        </Link>
      </h2>

      <button
        onClick={() => setActive("theme")}
        className={`p-4 text-left hover:bg-red-600 transition ${
          active === "theme" ? "bg-red-700" : ""
        }`}
      >
        Theme
      </button>

      <button
        onClick={() => setActive("account")}
        className={`p-4 text-left hover:bg-red-600 transition ${
          active === "account" ? "bg-red-700" : ""
        }`}
      >
        Account
      </button>
    </div>
  );
};

export default SettingsSidebar;