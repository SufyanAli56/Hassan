import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-white text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              About Me
            </h3>
            <p className="text-gray-500 mt-4">
              I'm a passionate developer specializing in React Native, web development, and UI/UX design. Let's build something amazing together!
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#home" className="text-gray-500 hover:text-blue-400 transition-all duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-500 hover:text-blue-400 transition-all duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-500 hover:text-blue-400 transition-all duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-500 hover:text-blue-400 transition-all duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Connect With Me
            </h3>
            <div className="flex justify-center md:justify-end space-x-4 mt-4">
              <a
                href="https://github.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-400 transition-all duration-300"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-400 transition-all duration-300"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href="https://twitter.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-400 transition-all duration-300"
              >
                <FaTwitter className="text-2xl" />
              </a>
              <a
                href="mailto:your-email@gmail.com"
                className="text-gray-500 hover:text-blue-400 transition-all duration-300"
              >
                <FaEnvelope className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Hassan Ali. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;