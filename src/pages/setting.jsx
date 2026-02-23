import React, { useState, useEffect } from "react";
import AccountContent from "../components/AccountContent";
import SettingsSidebar from "../components/SettingsSidebar";

const Setting = () => {
  const [active, setActive] = useState("theme");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="flex min-h-screen">
      <SettingsSidebar active={active} setActive={setActive} />
    </div>
  );
};

export default Setting;