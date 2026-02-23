import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SettingDropdown from "./SettingDropdown";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Desktop link style (F1 underline red)
  const desktopLinkClass = ({ isActive }) =>
    `relative inline-block whitespace-nowrap
     after:content-['']
     after:absolute
     after:left-1/2
     after:-bottom-1
     after:h-[2px]
     after:w-0
     after:bg-[var(--primary)]
     after:-translate-x-1/2
     after:transition-all
     after:duration-300
     hover:after:w-full
     ${isActive ? "font-bold after:w-full text-[var(--primary)]" : ""}`;

  // Mobile link style
  const mobileLinkClass = ({ isActive }) =>
    `block py-2 px-4 rounded transition-all
     ${
       isActive
         ? "bg-[var(--primary)] text-white font-bold"
         : "hover:bg-[var(--surface)]"
     }`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[var(--surface)] text-[var(--text)] border-b-4 border-[var(--primary)] shadow-md transition-colors duration-300">

      <div className="container mx-auto py-6 md:py-8 px-4">
        <div className="flex items-center justify-between md:grid md:grid-cols-3">

          {/* Logo */}
          <div>
            <h1 className="text-xl md:text-2xl font-extrabold tracking-wide text-[var(--primary)]">
              Apex Circuits
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center">
            <ul className="flex space-x-8 lg:space-x-14 font-semibold">
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
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5"
          >
            <span
              className={`block w-6 h-0.5 bg-[var(--text)] transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[var(--text)] transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[var(--text)] transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <nav
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col space-y-4 pb-4">
            <li>
              <NavLink to="/" end onClick={closeMenu} className={mobileLinkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/AllTracks" onClick={closeMenu} className={mobileLinkClass}>
                All Tracks
              </NavLink>
            </li>
            <li>
              <NavLink to="/WorldMaps" onClick={closeMenu} className={mobileLinkClass}>
                World Maps
              </NavLink>
            </li>
            <li>
              <NavLink to="/Settings" onClick={closeMenu} className={mobileLinkClass}>
                Setting
              </NavLink>
            </li>

            <li className="pt-4 border-t border-[var(--primary)]"></li>

            <li>
              <div className="flex items-center gap-4 px-4">
                <NavLink
                  to="/profile"
                  onClick={closeMenu}
                  className="px-3 py-1 border border-[var(--primary)] rounded hover:bg-[var(--primary)] hover:text-white transition"
                >
                  Profile
                </NavLink>

                <button
                  onClick={() => {
                    closeMenu();
                    console.log("Logout");
                  }}
                  className="px-3 py-1 border border-[var(--primary)] rounded hover:bg-[var(--primary)] hover:text-white transition"
                >
                  Logout
                </button>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;