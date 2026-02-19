import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

const SettingDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  // ปิดเมื่อกดข้างนอก
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={menuRef}>
      
      {/* ปุ่ม */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-red-600 hover:bg-opacity-20"
      >
        {!isOpen ? (
          <div className="flex flex-col gap-1">
            <span className="w-1 h-1 bg-white rounded-full"></span>
            <span className="w-1 h-1 bg-white rounded-full"></span>
            <span className="w-1 h-1 bg-white rounded-full"></span>
          </div>
        ) : (
          <div className="relative w-5 h-5">
            <span className="absolute w-5 h-0.5 bg-black rotate-45 top-1/2 left-0"></span>
            <span className="absolute w-5 h-0.5 bg-black -rotate-45 top-1/2 left-0"></span>
          </div>
        )}
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-black shadow-lg rounded-xl py-2 border animate-fadeIn">
          <button className="block w-full text-left px-4 py-2 hover:bg-white hover:text-black transition duration-200">
            <NavLink to="/profile">Profile</NavLink>
          </button>
          <button className="block w-full text-left px-4 py-2 hover:bg-white hover:text-black transition duration-200">
            <NavLink to="/settings">Settings</NavLink>
          </button>
          <button className="block w-full text-left px-4 py-2 text-red-500 hover:bg-white transition">
            <NavLink to="/logout">Logout</NavLink>
          </button>
        </div>
      )}
    </div>
  );
};

export default SettingDropdown;
