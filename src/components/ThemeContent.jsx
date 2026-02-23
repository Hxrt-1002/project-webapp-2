import React from "react";

const ThemeContent = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4 text-red-600">
        F1 Theme Settings
      </h1>

      <p className="mb-6 text-gray-600 dark:text-gray-300">
        Customize your Formula 1 experience.
      </p>

      <div className="flex items-center gap-4">
        <span>Dark Mode</span>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
      </div>
    </>
  );
};

export default ThemeContent;