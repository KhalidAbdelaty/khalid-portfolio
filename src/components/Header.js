import React from 'react';
import { Link } from 'react-router-dom';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white shadow-md transition-colors duration-200">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Khalid Abdelaty</Link>
        <ul className="flex space-x-4 items-center">
          <li><Link to="/" className="hover:text-blue-500 dark:hover:text-blue-300">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-500 dark:hover:text-blue-300">About</Link></li>
          <li><Link to="/experience" className="hover:text-blue-500 dark:hover:text-blue-300">Experience</Link></li>
          <li><Link to="/projects" className="hover:text-blue-500 dark:hover:text-blue-300">Projects</Link></li>
          <li><Link to="/skills" className="hover:text-blue-500 dark:hover:text-blue-300">Skills</Link></li>
          <li><Link to="/publications" className="hover:text-blue-500 dark:hover:text-blue-300">Publications</Link></li>
          <li><Link to="/testimonials" className="hover:text-blue-500 dark:hover:text-blue-300">Testimonials</Link></li>
          <li><Link to="/contact" className="hover:text-blue-500 dark:hover:text-blue-300">Contact</Link></li>
          <li>
            <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              {darkMode ? (
                <SunIcon className="h-5 w-5 text-yellow-400" />
              ) : (
                <MoonIcon className="h-5 w-5 text-gray-600" />
              )}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;