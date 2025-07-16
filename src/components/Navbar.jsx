import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoMenu, IoClose } from 'react-icons/io5';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll(); // Init on mount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false); // close mobile menu on route change
  }, [location.pathname]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Me' },
    { to: '/projects', label: 'My Projects' },
    { to: '/skills', label: 'My Skills' },
    { to: '/resume', label: 'Resume' },
    { to: '/contact', label: 'Contact Me' },
  ];

  return (
    <header
   className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
    scrolled
      ? 'bg-blue-900/95 backdrop-blur-md shadow text-white dark:text-cyan-400'
  : 'bg-indigo-700 text-gray-900 dark:text-gray-200'
  }`}
>
  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    {/* Logo */}
    <Link
      to="/"
      className={`text-xl font-bold ${
        scrolled ? 'text-white dark:text-cyan-400' : 'text-gray-900 dark:text-gray-200'
      }`}
    >
      Basco's Portfolio
    </Link>

    {/* Desktop Menu */}
    <nav
      className={`hidden md:flex space-x-6 font-medium ${
        scrolled ? 'text-white dark:text-cyan-400' : 'text-gray-900 dark:text-gray-200'
      }`}
    >
      {navLinks.map(({ to, label }) => (
        <Link
          key={to}
          to={to}
          className={`transition relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white dark:after:bg-cyan-400 hover:after:w-full after:transition-all after:duration-300 ${
            location.pathname === to
              ? scrolled
                ? 'text-white dark:text-cyan-400 font-semibold'
                : 'text-gray-900 dark:text-cyan-400 font-semibold'
              : ''
          }`}
        >
          {label}
        </Link>
      ))}
    </nav>

    {/* Mobile Menu Button */}
    <button
      className={`md:hidden text-2xl ${
        scrolled ? 'text-white dark:text-cyan-400' : 'text-gray-900 dark:text-gray-200'
      }`}
      onClick={() => setMenuOpen(!menuOpen)}
      aria-label="Toggle Menu"
    >
      {menuOpen ? <IoClose /> : <IoMenu />}
    </button>
  </div>

  {/* Mobile Menu */}
  {menuOpen && (
    <div
      className={`md:hidden ${
        scrolled ? 'bg-gray-900' : 'bg-white'
      } px-6 py-4 space-y-3 ${
        scrolled ? 'text-white dark:text-cyan-400' : 'text-gray-900 dark:text-gray-900'
      } shadow-md`}
    >
      {navLinks.map(({ to, label }) => (
        <Link
          key={to}
          to={to}
          className={`block transition hover:text-indigo-600 dark:hover:text-cyan-400 ${
            scrolled ? 'text-white dark:text-cyan-400' : 'text-gray-900 dark:text-gray-900'
          }`}
        >
          {label}
        </Link>
      ))}
    </div>
  )}
</header>


  );
}
