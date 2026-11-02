import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi'; // New modern phone icon

export default function Footer() {
  return (
    <footer className="bg-gray-200 text-gray-800 dark:bg-gray-950 dark:text-gray-200 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-bold mb-4 text-indigo-600 dark:text-cyan-400">Get In Touch</h2>
          <p className="flex items-center gap-3 mb-2">
            <FaEnvelope className="text-indigo-600 dark:text-cyan-400" />
            <a href="mailto:tobayemi@uoguelph.ca.com" className="hover:underline">
              tobayemi@uoguelph.ca
            </a>
          </p>
          <p className="flex items-center gap-3">
            <FiPhone className="text-indigo-600 dark:text-cyan-400" />
            <a href="tel:+2348166402660" className="hover:underline">
              +1 (548) 316-4218
            </a>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold mb-4 text-indigo-600 dark:text-cyan-400">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-indigo-600 dark:hover:text-cyan-400">Home</a></li>
            <li><a href="/about" className="hover:text-indigo-600 dark:hover:text-cyan-400">About</a></li>
            <li><a href="/projects" className="hover:text-indigo-600 dark:hover:text-cyan-400">Projects</a></li>
            <li><a href="/contact" className="hover:text-indigo-600 dark:hover:text-cyan-400">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-bold mb-4 text-indigo-600 dark:text-cyan-400">Connect With Me</h2>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <FaGithub className="text-indigo-600 dark:text-cyan-400" />
              <a href="https://github.com/Basco-sm" target="_blank" rel="noopener noreferrer" className="hover:underline">
                github.com/Basco-sm
              </a>
            </li>

            <li className="flex items-center gap-3">
              <FaEnvelope className="text-indigo-600 dark:text-cyan-400" />
              <a href="mailto:tobayemi@uoguelph.ca" className="hover:underline">
               tobayemi@uoguelph.ca
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-10 text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Basco. All rights reserved.
      </div>
    </footer>
  );
}
