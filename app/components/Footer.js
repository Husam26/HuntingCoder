import React from "react";
import { FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <footer className="bg-gray-800 text-gray-300 pt-4 mt-auto">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Logo & About */}
          <div>
            <h2 className="text-xl font-bold text-white">Hunting Coder</h2>
            <p className="mt-2 text-gray-400 text-sm">
              A platform for developers to enhance their skills and stay updated with the latest coding trends.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-2 space-y-1">
              <li><a href="/" className="hover:text-gray-100 transition text-sm">Home</a></li>
              <li><a href="/about" className="hover:text-gray-100 transition text-sm">About</a></li>
              <li><a href="/blogs" className="hover:text-gray-100 transition text-sm">Blogs</a></li>
              <li><a href="/contact" className="hover:text-gray-100 transition text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div>
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <p className="mt-2 text-gray-400 text-sm">Email: your.email@example.com</p>
            <div className="flex space-x-3 mt-3">
              <a href="https://twitter.com/yourprofile" className="text-blue-400 hover:text-blue-600 transition text-xl">
                <FaTwitter />
              </a>
              <a href="https://github.com/yourprofile" className="text-gray-400 hover:text-gray-100 transition text-xl">
                <FaGithub />
              </a>
              <a href="mailto:your.email@example.com" className="text-green-400 hover:text-green-600 transition text-xl">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm border-t border-b-0 pb-2 border-gray-700 mt-6 pt-4">
          &copy; {new Date().getFullYear()} Hunting Coder. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
