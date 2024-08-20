import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="slide-in text-zinc-100 bg-transparent p-4 absolute top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a 
          href='/'
          className="flex flex-col text-center">
          <img
            src="/logo1.png"
            alt="Hackler Welding Logo"
            className="h-[80px] mb-0 lg:mb-2"
              />
           </a>
           <div className="hidden md:flex space-x-8">
              <Link to="/" className="">Home</Link>
              <Link
                 target='_blank'
                 className=''
                 to="https://imgs.search.brave.com/GRYM58YraWlQtNXhcTxeYUgzc6G_4rnPxpyqqXmSC54/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9nb3Ro/YW1pc3QuY29tL2F0/dGFjaG1lbnRzL2dh/cnRoLzIwMTMwMl9n/dXlzZmFrZS5qcGc"
                 >
                 Menu
              </Link>
              <Link to="/about" className="">About</Link>
              {/* <Link to="/services" className="">Services</Link> */}
              <Link to="/gallery" className="">Gallery</Link>
              <Link to="/contact" className="">Contact</Link>
              {/* <ThemeToggle /> */}
           </div>
           <div className="md:hidden">
              <button onClick={toggleMobileMenu} className="focus:outline-none">
                 {/* Hamburger icon */}
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
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="slide-in-fast text-zinc-100 dark:text-zinc-100 md:hidden mt-6 bg-zinc-800/50 w-full p-5 rounded-md">
          <div className="flex flex-col space-y-6">
            <Link 
               to="/" 
               className="block" 
               onClick={() => {
                  setIsMobileMenuOpen(false);
               }}>
                  Home
            </Link>
            <Link 
               to="https://imgs.search.brave.com/GRYM58YraWlQtNXhcTxeYUgzc6G_4rnPxpyqqXmSC54/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9nb3Ro/YW1pc3QuY29tL2F0/dGFjaG1lbnRzL2dh/cnRoLzIwMTMwMl9n/dXlzZmFrZS5qcGc" 
               className="block" 
               onClick={() => {
                  setIsMobileMenuOpen(false);
               }}>
                  Menu
            </Link>
            <Link 
               to="/about" 
               className="block"
               onClick={() => {
                  setIsMobileMenuOpen(false);
               }}>
                  About
            </Link>
            <Link 
               to="/services" 
               className="block"
               onClick={() => {
                  setIsMobileMenuOpen(false);
               }}>
               Services
            </Link>
            <Link 
               to="/gallery" 
               className="block"
               onClick={() => {
                  setIsMobileMenuOpen(false);
               }}>
                  Gallery
            </Link>
            <Link 
               to="/contact" 
               className="block"
               onClick={() => {
                  setIsMobileMenuOpen(false);
               }}>
                  Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
