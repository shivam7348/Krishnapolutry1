import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header3 = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [productDropdownOpen, setProductDropdownOpen] = useState(false);
    const [mobileProductDropdownOpen, setMobileProductDropdownOpen] = useState(false);

    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setProductDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Function to close mobile menu when a link is clicked
    const handleMobileLinkClick = () => {
        setMobileMenuOpen(false);
    };

    // Function to handle product dropdown clicks in mobile
    const handleMobileProductClick = (e) => {
        e.preventDefault();
        setMobileProductDropdownOpen(!mobileProductDropdownOpen);
    };

    // Function to handle product item clicks in mobile
    const handleMobileProductItemClick = () => {
        setMobileProductDropdownOpen(false);
        setMobileMenuOpen(false);
    };

    return (
        <header className="bg-white shadow-md sticky top-0 z-50 w-full">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
                <div className="flex justify-between items-center">
                    {/* Logo - Responsive sizing */}
                    <div className="text-xl font-bold tracking-wider text-gray-800">
                        <Link to="/" className="flex items-center">
                            <img 
                                src="/logo.png" 
                                alt="Logo" 
                                className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto transition-all duration-300" 
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        <Link 
                            to="/" 
                            className="font-medium text-gray-700 hover:text-blue-600 transition duration-300 text-sm lg:text-base"
                        >
                            HOME
                        </Link>
                        <Link 
                            to="/about" 
                            className="font-medium text-gray-700 hover:text-blue-600 transition duration-300 text-sm lg:text-base"
                        >
                            ABOUT US
                        </Link>

                        {/* Products Dropdown - Desktop */}
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setProductDropdownOpen(!productDropdownOpen)}
                                className="font-medium text-gray-700 hover:text-blue-600 transition duration-300 flex items-center text-sm lg:text-base"
                            >
                                PRODUCTS
                                <svg
                                    className={`ml-1 w-4 h-4 transition-transform duration-200 ${productDropdownOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {productDropdownOpen && (
                                <div className="absolute z-10 bg-white shadow-lg rounded-md mt-2 py-2 w-48 transition-all duration-200 border border-gray-100">
                                    <Link 
                                        to="/products/feeder" 
                                        className="block px-4 py-2 hover:bg-blue-50 text-gray-800 text-sm"
                                    >
                                        Feeder
                                    </Link>
                                    <Link 
                                        to="/products/drinker" 
                                        className="block px-4 py-2 hover:bg-blue-50 text-gray-800 text-sm"
                                    >
                                        Drinker
                                    </Link>
                                    <Link 
                                        to="/products/brooder-debeaker" 
                                        className="block px-4 py-2 hover:bg-blue-50 text-gray-800 text-sm"
                                    >
                                        Brooder & Debeaker
                                    </Link>
                                    <Link 
                                        to="/products/bird-tray" 
                                        className="block px-4 py-2 hover:bg-blue-50 text-gray-800 text-sm"
                                    >
                                        Bird Tray
                                    </Link>
                                    <Link 
                                        to="/products/others" 
                                        className="block px-4 py-2 hover:bg-blue-50 text-gray-800 text-sm"
                                    >
                                        Others
                                    </Link>
                                </div>
                            )}
                        </div>

                        <Link 
                            to="/contact" 
                            className="font-medium text-gray-700 hover:text-blue-600 transition duration-300 text-sm lg:text-base"
                        >
                            CONTACT US
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-gray-700 focus:outline-none p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden mt-4 bg-white rounded-md overflow-hidden shadow-lg transition-all duration-300 border border-gray-200">
                        <Link 
                            to="/" 
                            className="block py-3 px-4 hover:bg-blue-50 border-b border-gray-100 font-medium text-gray-700"
                            onClick={handleMobileLinkClick}
                        >
                            HOME
                        </Link>
                        <Link 
                            to="/about" 
                            className="block py-3 px-4 hover:bg-blue-50 border-b border-gray-100 font-medium text-gray-700"
                            onClick={handleMobileLinkClick}
                        >
                            ABOUT US
                        </Link>

                        {/* Products Dropdown - Mobile */}
                        <div>
                            <button
                                onClick={handleMobileProductClick}
                                className="flex justify-between items-center w-full py-3 px-4 hover:bg-blue-50 border-b border-gray-100 font-medium text-gray-700"
                            >
                                <span>PRODUCTS</span>
                                <svg
                                    className={`w-4 h-4 transition-transform duration-200 ${mobileProductDropdownOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {mobileProductDropdownOpen && (
                                <div className="bg-gray-50 pl-6">
                                    <Link 
                                        to="/products/feeder" 
                                        className="block py-2 px-4 hover:bg-blue-50 text-gray-700"
                                        onClick={handleMobileProductItemClick}
                                    >
                                        Feeder
                                    </Link>
                                    <Link 
                                        to="/products/drinker" 
                                        className="block py-2 px-4 hover:bg-blue-50 text-gray-700 border-t border-gray-100"
                                        onClick={handleMobileProductItemClick}
                                    >
                                        Drinker
                                    </Link>
                                    <Link 
                                        to="/products/brooder-debeaker" 
                                        className="block py-2 px-4 hover:bg-blue-50 text-gray-700 border-t border-gray-100"
                                        onClick={handleMobileProductItemClick}
                                    >
                                        Brooder & Debeaker
                                    </Link>
                                    <Link 
                                        to="/products/bird-tray" 
                                        className="block py-2 px-4 hover:bg-blue-50 text-gray-700 border-t border-gray-100"
                                        onClick={handleMobileProductItemClick}
                                    >
                                        Bird Tray
                                    </Link>
                                    <Link 
                                        to="/products/others" 
                                        className="block py-2 px-4 hover:bg-blue-50 text-gray-700 border-t border-gray-100"
                                        onClick={handleMobileProductItemClick}
                                    >
                                        Others
                                    </Link>
                                </div>
                            )}
                        </div>

                        <Link 
                            to="/contact" 
                            className="block py-3 px-4 hover:bg-blue-50 font-medium text-gray-700"
                            onClick={handleMobileLinkClick}
                        >
                            CONTACT US
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header3;