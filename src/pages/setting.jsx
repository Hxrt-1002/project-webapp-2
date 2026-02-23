import React, { useState, useEffect } from "react";
import ThemeContent from "../components/ThemeContent";
import AccountContent from "../components/AccountContent";
import SettingsSidebar from "../components/SettingsSidebar";

const Setting = () => {
  const [active, setActive] = useState("theme");

  // 👇 เปลี่ยนจาก darkMode เป็น theme
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  // 👇 ใช้ data-theme แทน class dark
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="flex min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">
      
      <SettingsSidebar active={active} setActive={setActive} />

      <div className="flex-1 p-10">
        {active === "theme" && (
          <ThemeContent theme={theme} setTheme={setTheme} />
        )}

        {active === "account" && <AccountContent />}
      </div>
    </div>
  );
};

export default Setting;