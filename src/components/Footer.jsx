import React from "react";
import { Outlet } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-[var(--primary)] text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Logo Section */}
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight uppercase">
              Apex Circuits
            </h1>
            <div className="mt-2 h-1 w-16 bg-white rounded"></div>
            <p className="mt-4 text-sm text-white/80">
              เว็บไซต์นี้สร้างมาเพื่อเป็นโปรเจ็ครายวิชา
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="font-semibold uppercase tracking-wider">
              ผู้สร้างและพัฒนาร่วมกัน
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>nuhuphumchunking@gmail.com</li>
              <li>limceriycirphathr@gmail.com</li>
              <li>sdghfshug@hmail.com</li>
            </ul>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:items-end justify-between">
            <p className="text-sm text-white/80">
              © {new Date().getFullYear()} Apex Circuits — All rights reserved
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
};

export default Footer;