import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Home, Info, Users, Search } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4 transform transition-all hover:scale-110 duration-300">
              <img 
                src="/lovable-uploads/873211f9-13ba-4123-b2e3-ab3e938ed6f5.png" 
                alt="90acre Logo" 
                className="h-24" 
              />
            </div>
            <p className="mb-4 text-gray-200">
              Your trusted real estate partner for buying, selling and investing in properties.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4 font-playfair">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-200 hover:text-accent transition-colors flex items-center gap-2 transform hover:translate-x-2 duration-300">
                  <Home size={16} /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-200 hover:text-accent transition-colors flex items-center gap-2 transform hover:translate-x-2 duration-300">
                  <Info size={16} /> About Us
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-gray-200 hover:text-accent transition-colors flex items-center gap-2 transform hover:translate-x-2 duration-300">
                  <Search size={16} /> Properties
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-200 hover:text-accent transition-colors flex items-center gap-2 transform hover:translate-x-2 duration-300">
                  <Users size={16} /> Our Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-200 hover:text-accent transition-colors flex items-center gap-2 transform hover:translate-x-2 duration-300">
                  <Mail size={16} /> Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4 font-playfair">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 transform hover:translate-x-2 duration-300">
                <Phone size={18} />
                <a href="tel:+919911288282" className="hover:text-accent transition-colors">
                  +91 9911288282
                </a>
              </li>
              <li className="flex items-center gap-2 transform hover:translate-x-2 duration-300">
                <Mail size={18} />
                <a href="mailto:contact@90acre.com" className="hover:text-accent transition-colors">
                  contact@90acre.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-bold mb-4 font-playfair">Newsletter</h4>
            <p className="mb-4 text-gray-200">
              Subscribe to receive updates on new listings and real estate news.
            </p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 rounded bg-primary-foreground text-primary outline-none focus:ring-2 focus:ring-accent transform hover:scale-105 duration-300"
              />
              <button 
                type="submit" 
                className="w-full py-2 px-4 bg-accent text-white rounded hover:bg-accent/90 transition-colors transform hover:scale-105 duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} 90acre.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
