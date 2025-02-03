import React, { useState } from 'react';
import { Link } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white fixed w-full top-0 z-50 border-b border-black">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center">
                        {/* Wrap StaticImage in a Link */}
                        <Link to="/">
                            <StaticImage 
                                src="../images/icon.png" 
                                alt="ProTiva Logo" 
                                height={30} // Set the height to match the text size
                                className="mr-2 cursor-pointer" // Add margin and cursor pointer
                            />
                        </Link>
                        <div className="flex-shrink-0">
                            <Link to="/" className="text-2xl font-bold text-gray-900">
                                ProTiva
                            </Link>
                        </div>
                    </div>
                    {/* Navigation Links (Desktop) */}
                    <div className="hidden md:flex space-x-8">
                        <Link to="/aprender" className="text-gray-700 hover:text-blue-600">
                            Aprender
                        </Link>
                        <Link to="/provas-anteriores" className="text-gray-700 hover:text-blue-600">
                            Provas Anteriores
                        </Link>
                        <Link to="/introducao-a-programacao" className="text-gray-700 hover:text-blue-600">
                            Introdução à Programação
                        </Link>
                        <Link to="/sobre" className="text-gray-700 hover:text-blue-600">
                            Sobre Nós
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-700 focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu (Dropdown) */}
                {isMenuOpen && (
                    <div className="md:hidden mt-2">
                        <Link to="/aprender/" className="block py-2 text-gray-700 hover:bg-gray-100">
                            Aprender
                        </Link>
                        <Link to="/provas-anteriores" className="block py-2 text-gray-700 hover:bg-gray-100">
                            Provas Anteriores
                        </Link>
                        <Link to="/introducao-a-programacao" className="block py-2 text-gray-700 hover:bg-gray-100">
                            Introdução à Programação
                        </Link>
                        <Link to="/sobre" className="block py-2 text-gray-700 hover:bg-gray-100">
                            Sobre
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
