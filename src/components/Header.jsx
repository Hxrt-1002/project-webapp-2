import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SettingDropdown from "./SettingDropdown";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // class desktop
const desktopLinkClass = ({ isActive }) =>
  `relative inline-block text-white whitespace-nowrap
   after:content-['']
   after:absolute
   after:left-1/2
   after:-bottom-1
   after:h-[2px]
   after:w-0
   after:bg-red-600
   after:-translate-x-1/2
   after:transition-all
   after:duration-300
   hover:after:w-full
   ${isActive ? "font-bold after:w-full" : ""}`;

  // class mobile
  const mobileLinkClass = ({ isActive }) =>
    `block py-2 px-4 rounded transition-all
    ${isActive
      ? "bg-gray-300 bg-opacity-50 font-bold text-black"
      : "hover:bg-gray-500 hover:bg-opacity-50"
    }`;

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md text-white shadow-lg">
        <div className="container mx-auto py-6 md:py-8 px-4">
          <div className="flex items-center justify-between md:grid md:grid-cols-3">
            {/* Logo */}
            <div>
              <h1 className="text-xl md:text-2xl font-extrabold">
                Apex Circuits
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center justify-center">
              <ul className="flex space-x-8 lg:space-x-14">
                <li>
                  <NavLink to="/" end className={desktopLinkClass}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/AllTracks" className={desktopLinkClass}>
                    All Tracks
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/WorldMaps" className={desktopLinkClass}>
                    World Maps
                  </NavLink>
                </li>
              </ul>
            </nav>

            {/* Desktop Setting */}
            <div className="hidden md:flex justify-self-end">
              <SettingDropdown />
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={toggleMenu}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none"
            >
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              ></span>
            </button>
          </div>

          {/* Mobile Menu */}
          <nav
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0"}`}
          >
            <ul className="flex flex-col space-y-4 pb-4">
              <li>
                <NavLink
                  to="/" end
                  onClick={closeMenu}
                  className={mobileLinkClass}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/AllTracks"
                  onClick={closeMenu}
                  className={mobileLinkClass}
                >
                  All Tracks
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/WorldMaps"
                  onClick={closeMenu}
                  className={mobileLinkClass}
                >
                  World Maps
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Settings"
                  onClick={closeMenu}
                  className={mobileLinkClass}
                >
                  Setting
                </NavLink>
              </li>

              {/* border */}
              <li className="pt-4 border-t border-white/30"></li>

              {/* logout and profile */}
              <li>
                <div className="flex items-center gap-4 px-4 text-center">
                  <NavLink
                    to="/profile"
                    onClick={closeMenu}
                    className="w-100 text px-3 py-1 border border-white rounded hover:bg-white hover:text-black transition"
                  >
                    Profile
                  </NavLink>

                  <button
                    onClick={() => {
                      closeMenu();
                      // ใส่ฟังก์ชัน logout ตรงนี้
                      console.log("Logout");
                    }}
                    className="w-100 px-3 py-1 border border-white rounded hover:bg-white hover:text-black transition"
                  >
                    Logout
                  </button>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;