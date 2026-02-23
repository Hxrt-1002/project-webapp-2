import React from 'react'
import { Outlet } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="flex flex-col">

                <main className="flex-1">
                    <Outlet />
                </main>

                <footer className="bg-gradient-to-r from-black to-red-600 text-white animate-slideDown shadow-lg">
                    <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

                        <div className="md:col-span-1">
                            <h1 className="text-4xl font-extrabold tracking-tight">Apex Circuits</h1>
                            <div className="mt-2 inline-block h-1 w-14 bg-cyan-300 rounded"></div>
                            <p className="mt-3 text-sky-100/90 text-sm">
                                เว็ปไซต์นี้สร้างมาเพื่อเป็นโปรเจ็ครายวิชา
                            </p>
                        </div>

                        <div className="md:col-span-1">
                            <h2 className="font-semibold text-sky-100">ผู้สร้างและพัฒนาร่วมกัน</h2>
                            <ul className="mt-3 space-y-1 text-sky-200 text-sm">
                                <li>nuhuphumchunking@gmail.com</li>
                                <li>limceriycirphathr@gmail.com</li>
                                <li>sdghfshug@hmail.com</li>
                            </ul>
                        </div>

                        <div className="md:col-span-1 flex flex-col items-start md:items-end">
                            <div className="flex space-x-3">
                                {/* icons */}
                            </div>

                            <p className="mt-4 text-sky-200 text-sm">
                                © {new Date().getFullYear()} Grand Évasion — All rights reserved
                            </p>
                        </div>

                    </div>
                </footer>

            </div>
        </>
    )
}

export default Footer