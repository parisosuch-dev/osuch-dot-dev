import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ fixed }) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-osuch-black mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link to='/' className="text-sm font-bold leading-relaxed inline-block mr-5 py-2 whitespace-nowrap text-white">
                            <h1 className='font-black text-2xl sm:text-5xl'>osuch.dev</h1>
                        </Link>
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 rounded block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}>
                            {navbarOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <Link to='/portfolio' className="px-3 py-2 flex items-center sm:text-3xl text-xl font-bold leading-snug text-white hover:opacity-75">portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/about' className="px-3 py-2 flex items-center sm:text-3xl text-xl font-bold leading-snug text-white hover:opacity-75">about me</Link>

                            </li>
                            <li className="nav-item">
                                <Link to='/resume' className="px-3 py-2 flex items-center sm:text-3xl text-xl font-bold leading-snug text-white hover:opacity-75">resume</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/contact' className="px-3 py-2 flex items-center sm:text-3xl text-xl font-bold leading-snug text-white hover:opacity-75">contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}