import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Khalid Abdelaty</h3>
            <p className="text-gray-400">Computer Science Student | Data Engineer | Microsoft Student Ambassador</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-400 transition duration-300">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition duration-300">About</Link></li>
              <li><Link to="/projects" className="hover:text-blue-400 transition duration-300">Projects</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition duration-300">Contact</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-xl font-semibold mb-4">Connect With Me</h4>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/in/khalidabdelaty" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400 transition duration-300">
                <FaLinkedin />
              </a>
              <a href="https://github.com/KhalidAbdelaty" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400 transition duration-300">
                <FaGithub />
              </a>
              <a href="mailto:khalidabdelatty80@outlook.com" className="text-2xl hover:text-blue-400 transition duration-300">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Khalid Abdelaty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;