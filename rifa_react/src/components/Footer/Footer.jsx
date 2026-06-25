import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MAY Designs</h3>
            <p className="text-gray-400">
              Creating beautiful spaces that inspire and transform lives.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/projects/architecture" className="text-gray-400 hover:text-white transition-colors">
                  Architecture
                </Link>
              </li>
              <li>
                <Link to="/projects/interior" className="text-gray-400 hover:text-white transition-colors">
                  Interior Design
                </Link>
              </li>
              <li>
                <Link to="/projects/landscape" className="text-gray-400 hover:text-white transition-colors">
                  Landscape Design
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📍 123 Design Street</li>
              <li>📞 +1 234 567 890</li>
              <li>✉️ info@maydesigns.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 MAY Designs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;