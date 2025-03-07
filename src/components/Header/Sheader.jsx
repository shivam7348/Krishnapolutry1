import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  ChevronDown,
  ChevronRight,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  MapPin,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const headerRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  // Handle click outside desktop dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDesktopDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const productLinks = [
    { name: "FEEDER", path: "/products/feeder" },
    { name: "DRINKER", path: "/products/drinker" },
    { name: "BROODER & DEBEAKER", path: "/products/brooder-debeaker" },
    { name: "BIRD TRAY", path: "/products/bird-tray" },
    { name: "OTHERS", path: "/products/others" },
  ];

  const toggleMobileProducts = () => {
    setMobileProductsOpen(!mobileProductsOpen);
  };

  return (
    <header
      ref={headerRef}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white shadow-lg"
          : "bg-gradient-to-b from-danger/40 to-transparent"
      }`}
    >
      <div
        className="container mx-auto px-4 transition-all duration-300"
        style={{
          paddingTop: isScrolled ? "0.75rem" : "1rem",
          paddingBottom: isScrolled ? "0.75rem" : "1rem",
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-red-600 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-10"></div>
              <img
                src="/logo.png"
                alt="Krishna Poultry Logo"
                className={`transition-all duration-300 rounded-2xl ${
                  isScrolled ? "h-16" : "h-15"
                } w-auto`}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`nav-link relative px-2 py-1 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-red-600 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              HOME
            </Link>
            <Link
              to="/about"
              className={`nav-link relative px-2 py-1 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-red-600 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              ABOUT
            </Link>

            {/* Improved Desktop Dropdown - works with both hover and click */}
            <div 
              ref={dropdownRef}
              className="relative group"
              onMouseEnter={() => setDesktopDropdownOpen(true)}
              onMouseLeave={() => setDesktopDropdownOpen(false)}
            >
              <button 
                onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}
                className={`flex items-center px-4 py-2 rounded-md focus:outline-none group-hover:text-red-600 transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-red-600 after:left-0 after:-bottom-1 group-hover:after:w-full after:transition-all ${
                  isScrolled ? "text-gray-800 hover:bg-gray-100/50" : "text-white hover:bg-white/10"
                }`}
                aria-expanded={desktopDropdownOpen}
                aria-haspopup="true"
              >
                PRODUCTS
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${desktopDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div 
                className={`absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-50 transform origin-top-left transition-all duration-200 ${
                  desktopDropdownOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
                }`}
              >
                {productLinks.map((product, index) => (
                  <Link
                    key={product.path}
                    to={product.path}
                    className={`block px-4 py-2.5 text-gray-800 hover:bg-red-50 hover:text-red-600 transition-colors ${
                      index !== productLinks.length - 1 ? 'border-b border-gray-100' : ''
                    }`}
                    onClick={() => setDesktopDropdownOpen(false)}
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/contact"
              className={`nav-link relative px-2 py-1 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-red-600 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              CONTACT
            </Link>

            <Button asChild className="bg-red-600 hover:bg-red-700 text-white rounded-full px-6 shadow-md hover:shadow-lg transition-all duration-300">
              <a href="tel:9246659508" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                className="lg:hidden p-2 rounded-full hover:bg-red-100/50"
                aria-label="Menu"
              >
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-0 max-w-full w-80 border-l border-red-100">
              <div className="p-6 flex flex-col justify-center items-center border-b border-gray-200 bg-red-50">
                <img 
                  src="/logo.png" 
                  alt="Krishna Poultry Logo" 
                  className="h-10 w-auto mr-20" 
                />
                {/* <h2 className="text-red-600 font-bold text-xl">
                  KRISHNA POULTRY
                </h2>
                <p className="text-gray-500 text-sm">
                  MANUFACTURERS & TRADER
                </p> */}
              </div>

              <nav className="p-5">
                <div className="space-y-3">
                  <SheetClose asChild>
                    <Link
                      to="/"
                      className="block py-3 px-4 rounded-lg hover:bg-red-50 text-gray-800 hover:text-red-600 transition-colors"
                    >
                      HOME
                    </Link>
                  </SheetClose>
                  
                  <SheetClose asChild>
                    <Link
                      to="/about"
                      className="block py-3 px-4 rounded-lg hover:bg-red-50 text-gray-800 hover:text-red-600 transition-colors"
                    >
                      ABOUT
                    </Link>
                  </SheetClose>
                  
                  {/* Improved Mobile Products Menu */}
                  <div className="rounded-lg overflow-hidden border border-gray-200">
                    <button 
                      onClick={toggleMobileProducts}
                      className="w-full py-3 px-4 text-left flex items-center justify-between bg-gray-50 hover:bg-red-50 hover:text-red-600 transition-colors"
                      aria-expanded={mobileProductsOpen}
                      aria-controls="mobile-products-menu"
                    >
                      <span className="font-medium">PRODUCTS</span>
                      <span className="transition-transform duration-300">
                        {mobileProductsOpen ? (
                          <ChevronDown className="w-5 h-5" />
                        ) : (
                          <ChevronRight className="w-5 h-5" />
                        )}
                      </span>
                    </button>
                    
                    <div 
                      id="mobile-products-menu"
                      className={`overflow-hidden transition-all duration-300 ${
                        mobileProductsOpen ? 'max-h-64' : 'max-h-0'
                      }`}
                    >
                      <div className="p-2 space-y-1 bg-white border-t">
                        {productLinks.map((product) => (
                          <SheetClose key={product.path} asChild>
                            <Link
                              to={product.path}
                              className="block py-2.5 px-4 rounded hover:bg-gray-100 text-gray-700 text-sm transition-colors"
                            >
                              {product.name}
                            </Link>
                          </SheetClose>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <SheetClose asChild>
                    <Link
                      to="/contact"
                      className="block py-3 px-4 rounded-lg hover:bg-red-50 text-gray-800 hover:text-red-600 transition-colors"
                    >
                      CONTACT
                    </Link>
                  </SheetClose>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <a
                    href="tel:9246659508"
                    className="flex items-center space-x-3 p-3 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
                  >
                    <Phone size={20} />
                    <span className="font-medium">924-665-9508</span>
                  </a>
                  <a
                    href="mailto:contact@krishnapoultry.com"
                    className="flex items-center space-x-3 mt-4 p-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    <Mail size={20} />
                    <span className="font-medium text-sm">
                      contact@krishnapoultry.com
                    </span>
                  </a>
                  <div className="flex justify-center space-x-4 mt-6">
                    <a
                      href="#"
                      aria-label="Facebook"
                      className="p-2.5 rounded-full bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      <Facebook size={18} />
                    </a>
                    <a
                      href="#"
                      aria-label="Twitter"
                      className="p-2.5 rounded-full bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      <Twitter size={18} />
                    </a>
                    <a
                      href="#"
                      aria-label="YouTube"
                      className="p-2.5 rounded-full bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      <Youtube size={18} />
                    </a>
                    <a
                      href="#"
                      aria-label="LinkedIn"
                      className="p-2.5 rounded-full bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;